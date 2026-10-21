import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, extname, sep } from 'node:path';
import { chromium } from 'playwright';
import { entities, relationships, aliases } from './load-csv-data.mjs';
import { coverageSummary } from '../src/coverage.js';
import { relationshipSummary } from '../src/relationships.js';
import { checkUpdates } from './check-updates-browser.mjs';
import { checkEntityInformation } from './check-entity-information-browser.mjs';

const catalogCoverage = coverageSummary(entities, relationships);
const nvidiaLinks = relationshipSummary(relationships, 'nvidia', aliases).total;

const root = resolve('dist');
assert.ok(existsSync(resolve(root, 'index.html')), 'Run npm run build before browser checks.');
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const file = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + sep)) { response.writeHead(403).end(); return; }
    const body = await readFile(file);
    response.writeHead(200, {'Content-Type': ({'.html':'text/html', '.csv':'text/csv', '.css':'text/css', '.js':'text/javascript'})[extname(file)] || 'text/plain'}).end(body);
  } catch { response.writeHead(404).end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;
const executablePath = process.env.CHROMIUM_PATH || (existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined);
let browser, failures = 0, passed = 0;
const screenshots = process.env.SCREENSHOT_DIR;
if (screenshots) await mkdir(screenshots, {recursive:true});

async function screenshot(page, name) {
  if (screenshots) { await page.evaluate(() => document.fonts.ready); await page.screenshot({path: resolve(screenshots, `${name}.png`)}); }
}
async function check(name, callback, width = 1440, height = width < 900 ? 844 : 1000, touch = width < 900) {
  const page = await browser.newPage({viewport: {width, height}, isMobile:touch, hasTouch:touch, reducedMotion:'reduce'});
  page.setDefaultTimeout(12000);
  const errors = [], remote = [];
  page.on('pageerror', error => errors.push(error.message));
  // External presentation services must not be prerequisites for these tests.
  await page.route('https://**/*', route => { remote.push(route.request().url()); return route.abort(); });
  try {
    await callback(page, remote);
    assert.deepEqual(errors, [], 'Uncaught browser errors');
    assert.ok(!remote.some(url => /fonts\.googleapis|fonts\.gstatic/.test(url)), 'Fonts must be bundled');
    passed++; console.log(`PASS ${name}`);
  } catch (error) { failures++; console.error(`FAIL ${name}\n${error.stack}`); }
  finally { await page.close(); }
}
async function ready(page) {
  await page.goto(base, {waitUntil:'domcontentloaded'});
  await page.locator('#app[data-ready="true"]').waitFor();
  assert.equal(await page.locator('.intro').count(), 0, 'The atlas opens without a welcome screen');
  assert.equal(await page.locator('[aria-modal="true"]').count(), 0, 'Startup must not open a dialog');
  assert.equal(await page.locator('#searchInput').evaluate(input => input === document.activeElement), false, 'Startup must not open the mobile keyboard');
}
async function searchNvidia(page) {
  if (await page.locator('[data-mobile="search"]').isVisible()) await page.locator('[data-mobile="search"]').tap();
  await page.locator('#searchInput').fill('NVIDIA');
  await page.locator('#searchResults [data-entity="nvidia"]').click();
  assert.equal(await page.locator('#detailPanel h2').innerText(), 'NVIDIA');
}
async function mobileDialog(page, selector) {
  const dialog=page.locator(selector);
  await dialog.waitFor({state:'visible'});
  await page.waitForFunction(()=>Math.abs(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--mobile-vh'))-visualViewport.height)<1);
  assert.equal(await dialog.getAttribute('aria-modal'), 'true');
  const bounds=await dialog.boundingBox(), viewport=page.viewportSize();
  assert.ok(bounds.x>=0 && bounds.y>=0 && bounds.x+bounds.width<=viewport.width+1 && bounds.y+bounds.height<=viewport.height+1, 'Sheet must fit the viewport');
  assert.ok(await dialog.evaluate(element=>{
    const r=element.getBoundingClientRect();
    return element.contains(document.elementFromPoint(r.x+r.width/2,r.y+Math.min(40,r.height/2)));
  }), 'Sheet must appear above map panes and other controls');
}
async function mobileMenuAction(page, action) {
  await page.locator('[data-mobile="menu"]').tap();
  await page.locator(`#mobileMenu [data-action="${action}"]`).tap();
}
try {
  browser = await chromium.launch({executablePath, headless:true, args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-dev-shm-usage']});
  if (!['updates', 'entity'].includes(process.env.BROWSER_SUITE)) {
  await check('desktop exploration, coverage, fonts and optional map tiles', async page => {
    const csv = []; page.on('request', request => { if (request.url().endsWith('.csv')) csv.push(request.url()); });
    await ready(page);
    assert.equal(csv.length, 8, 'Map datasets must load on demand');
    await page.evaluate(() => document.fonts.ready);
    assert.ok(await page.evaluate(() => document.fonts.check('400 16px Manrope') && document.fonts.check('400 12px "DM Mono"')));
    await screenshot(page, 'desktop-startup');

    await searchNvidia(page);
    const counts = await page.locator('.entity-stats strong').allTextContents();
    assert.equal(Number(counts[3]), nvidiaLinks);
    assert.equal(counts.slice(0, 3).reduce((sum, value) => sum + Number(value), 0), nvidiaLinks);
    assert.match(await page.locator('.catalog-review').innerText(), /2026-10-18/);
    await screenshot(page, 'desktop-detail');
    await page.locator('[data-view="timeline"]').click();
    assert.equal(await page.locator('.control-dock').isVisible(), false);
    const note = await page.locator('.timeline-view .coverage-note').innerText();
    assert.ok(note.includes(`${catalogCoverage.dated} of ${catalogCoverage.total}`));
    assert.ok(note.includes(`${catalogCoverage.percent}%`));
    await screenshot(page, 'desktop-timeline');
    await page.locator('[data-view="map"]').click();
    await page.locator('.leaflet-marker-icon').first().waitFor();
    assert.equal(csv.length, 26);
    await page.locator('[data-map-tile-message]').waitFor();
    assert.ok(await page.locator('.leaflet-offline-land-pane canvas, .leaflet-offline-land-pane path').count() > 0);
    await page.locator('#systemScenarioSelect').selectOption('training');
    assert.match(await page.locator('#cableDetail h2').innerText(), /Train a frontier model/i);
    await page.locator('[data-close-cable]').click();
    await screenshot(page, 'desktop-map');
    await page.reload();
    await page.locator('#app[data-ready="true"]').waitFor();
    assert.ok(await page.locator('.control-dock').isVisible(), 'Controls are ready after reloading');
    assert.equal(await page.locator('.intro, [aria-modal="true"]').count(), 0);
  });
  await check('refreshed catalog records, scoped reviews and historical lifecycle notes', async page => {
    await ready(page);

    for (const [id, query, expected] of [
      ['gemini-4-argon', 'Gemini 4 Argon', /software engineering/],
      ['azure', 'Microsoft Azure', /Microsoft Foundry/],
      ['bionemo', 'BioNeMo Recipes', /training recipes/],
      ['o4-mini', 'o4-mini', /2026-10-23/]
    ]) {
      await page.locator('#searchInput').fill(query);
      await page.locator(`#searchResults [data-entity="${id}"]`).click();
      assert.match(await page.locator('#detailPanel').innerText(), expected);
      assert.match(await page.locator('.catalog-review').innerText(), /2026-10-18/);
      await page.locator('#detailPanel [data-action="close"]').click();
    }
    await page.locator('.top-actions [data-action="methodology"]').click();
    const method = await page.locator('#methodPanel').innerText();
    assert.ok(method.includes(`${catalogCoverage.reviewed} entities have a dated catalog review`));
    assert.match(method, /Map and network datasets retain their own snapshot dates/);
  });
  for (const width of [390, 320]) await check(`mobile navigation and compact map at ${width}px`, async page => {
    await ready(page); await screenshot(page, `mobile-${width}-startup`);
    await page.reload();
    await page.locator('#app[data-ready="true"]').waitFor();
    assert.ok(await page.locator('[data-mobile="search"]').isVisible(), 'Mobile controls are ready after reloading');
    assert.equal(await page.locator('.intro, [aria-modal="true"]').count(), 0);
    assert.equal(await page.locator('#searchInput').evaluate(input => input === document.activeElement), false);
    for (const view of ['models', 'timeline', 'map', 'architecture', 'gravity', 'ecosystem']) {
      await page.locator(`[data-view="${view}"]`).click();
      assert.equal(await page.locator(`[data-view="${view}"]`).getAttribute('aria-pressed'), 'true');
      if (view === 'models') {
        await page.waitForTimeout(300); await screenshot(page, `mobile-${width}-models`);
        const model = await page.locator('#modelGallerySelect option').nth(1).evaluate(option => ({id:option.value, name:option.textContent}));
        await page.locator('#modelGallerySelect').selectOption(model.id);
        assert.equal(await page.locator('#detailPanel h2').innerText(), model.name);
        await page.locator('#detailPanel [data-action="close"]').click();
      }
      if (view === 'timeline') {
        assert.equal(await page.locator('.control-dock').isVisible(), false);
        await screenshot(page, `mobile-${width}-timeline`);
      }
      if (view === 'map') {
        await page.locator('.leaflet-marker-icon').first().waitFor();
        assert.equal(await page.locator('.office-map-head').getAttribute('open'), null);
        assert.equal(await page.locator('.china-network-legend').getAttribute('open'), null);
        await screenshot(page, `mobile-${width}-map`);
        await page.locator('.office-map-head summary').click();
        await page.locator('#systemScenarioSelect').selectOption('training');
        assert.match(await page.locator('#cableDetail h2').innerText(), /Train a frontier model/i);
        await page.locator('[data-close-cable]').click();
      }
    }
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await searchNvidia(page);
    await page.locator('#detailPanel [data-action="close"]').click();
    await page.locator('[data-view="models"]').click();
  }, width);
  await check('touch search, accessible sheets, filters, time and guided journeys', async page => {
    await ready(page);
    await searchNvidia(page); await mobileDialog(page, '#detailPanel');
    assert.ok(await page.locator('.profile-sources a').count()>0);
    await page.locator('#detailPanel .relation-row a').last().scrollIntoViewIfNeeded();
    assert.ok(await page.locator('#detailPanel').evaluate(el=>el.scrollTop>0), 'Full evidence remains scrollable');
    await page.keyboard.press('Tab');
    assert.ok(await page.locator('#detailPanel').evaluate(el=>el.contains(document.activeElement)), 'Focus stays in the sheet');
    await page.locator('#detailPanel [data-action="close"]').tap();
    assert.equal(await page.locator('#searchInput').evaluate(el=>el===document.activeElement), false, 'Closing a profile must not reopen the keyboard');
    assert.equal(await page.locator('[data-mobile="search"]').evaluate(el=>el===document.activeElement), true, 'Return focus to the search launcher');
    await page.keyboard.press('Control+k'); await mobileDialog(page, '.control-dock');
    assert.equal(await page.locator('#searchInput').evaluate(el=>el===document.activeElement), true);
    await page.keyboard.press('Escape');
    await page.locator('[data-mobile="search"]').tap();
    await page.locator('.mobile-backdrop').tap({position:{x:5,y:5}});
    assert.equal(await page.locator('.mobile-dialog').count(),0);
    await page.locator('[data-mobile="filters"]').tap(); await mobileDialog(page, '#filterPanel');
    await page.locator('#filterPanel input[value="materials"]').uncheck();
    await page.locator('#filterPanel [data-filtertab="relations"]').tap();
    await page.locator('#filterPanel input[value="SUPPLIES"]').check();
    await page.locator('#filterPanel [data-filtertab="layers"]').tap();
    assert.equal(await page.locator('#filterPanel input[value="materials"]').isChecked(), false);
    await page.locator('#filterPanel input[value="materials"]').check();
    await page.locator('#filterPanel [data-filtertab="relations"]').tap();
    assert.equal(await page.locator('#filterPanel input[value="SUPPLIES"]').isChecked(), true);
    await page.locator('#filterPanel input[value="ALL"]').check();
    await page.locator('#filterPanel [data-filtertab="geography"]').tap();
    await page.locator('#filterPanel input[value="China"]').check();
    assert.equal(await page.locator('#filterPanel').isVisible(), false);
    await page.locator('[data-mobile="filters"]').tap();
    await page.locator('#filterPanel [data-filtertab="geography"]').tap();
    assert.equal(await page.locator('#filterPanel input[value="China"]').isChecked(), true);
    await page.locator('#filterPanel input[value="all"]').check();
    await mobileMenuAction(page, 'time'); await mobileDialog(page, '#filterPanel');
    await page.locator('#timeRange').fill('2020');
    assert.equal(await page.locator('#timeReadout').innerText(), '2020');
    await page.keyboard.press('Escape');
    await mobileMenuAction(page, 'journeys'); await mobileDialog(page, '#journeyPanel');
    await page.locator('[data-journey]').first().tap();
    const first=await page.locator('#journeyPlayer h2').innerText();
    await page.locator('[data-action="journey-next"]').tap();
    assert.notEqual(await page.locator('#journeyPlayer h2').innerText(), first);
    await page.locator('[data-action="journey-prev"]').tap();
    assert.equal(await page.locator('#journeyPlayer h2').innerText(), first);
    await screenshot(page, 'mobile-journey');
    for(let stop=0;stop<20 && await page.locator('#journeyPlayer').isVisible();stop++) await page.locator('[data-action="journey-next"]').tap();
    assert.equal(await page.locator('#journeyPlayer').isVisible(), false);
    await mobileMenuAction(page, 'methodology'); await mobileDialog(page, '#methodPanel');
    assert.match(await page.locator('#methodPanel').innerText(), /catalog review/);
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('[inert]').count(), 0);
  }, 390);
  await check('touch models, timeline year browsing, complete profiles and traces', async page => {
    await ready(page); await page.locator('[data-view="models"]').tap();
    await page.locator('#modelGallerySelect').selectOption({index:1}); await mobileDialog(page, '#detailPanel');
    assert.ok(await page.locator('.model-portfolio').isVisible());
    assert.ok(await page.locator('.physical-provenance button').count()>0);
    await page.locator('#detailPanel [data-action="close"]').tap();
    await page.locator('[data-view="timeline"]').tap();
    await page.locator('#mobileTimelineYear').selectOption('2025'); await mobileDialog(page, '#timelineInspector');
    await page.locator('.year-entry-list [data-entity]').first().tap();
    const entityName=await page.locator('#timelineInspector h2').innerText();
    await page.locator('[data-open-profile]').tap(); await mobileDialog(page, '#detailPanel');
    assert.equal(await page.locator('#detailPanel h2').innerText(), entityName);
    await page.locator('#detailPanel [data-action="upstream"]').tap();
    assert.equal(await page.locator('[data-view="ecosystem"]').getAttribute('aria-current'), 'page');
    assert.ok(await page.locator('#traceNotice').isVisible());
    await page.locator('[data-view="timeline"]').tap();
    await page.locator('.layer-plot').evaluate(el=>el.scrollLeft=150);
    assert.ok(await page.locator('.layer-plot').evaluate(el=>el.scrollLeft>0), 'Dense charts scroll within their cards');
    await page.locator('#timelineSearch').fill('NVIDIA');
    await page.locator('#timelineSearchResults [data-entity="nvidia"]').tap();
    assert.equal(await page.locator('#timelineInspector h2').innerText(), 'NVIDIA');
    await page.locator('[data-close-timeline-detail]').tap();
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  }, 390);
  await check('touch map layers, flows, model paths and legend', async page => {
    await ready(page); await page.locator('[data-view="map"]').tap();
    await page.locator('.leaflet-marker-icon').first().waitFor();
    const markerIndex=await page.locator('.data-center-marker-shell').evaluateAll(markers=>markers.findIndex(marker=>{
      const r=marker.getBoundingClientRect();
      return r.x>30 && r.right<innerWidth-30 && r.y>300 && r.bottom<innerHeight-180 && marker.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2));
    }));
    assert.ok(markerIndex>=0, 'A campus is reachable directly on the map');
    await page.locator('.data-center-marker-shell').nth(markerIndex).tap(); await mobileDialog(page,'#cableDetail');
    await page.locator('[data-close-cable]').tap();
    await page.locator('.office-map-head summary').tap(); await mobileDialog(page, '.office-map-head');
    assert.equal(await page.locator('[data-map-layer]').count(), 7);
    for(const layer of await page.locator('[data-map-layer]').all()) {
      const initial=await layer.getAttribute('aria-pressed'); await layer.tap();
      assert.notEqual(await layer.getAttribute('aria-pressed'), initial); await layer.tap();
    }
    await page.keyboard.press('Escape');
    for(const scenario of ['training','inference','hardware','resilience']) {
      await page.locator('.office-map-head summary').tap();
      await page.locator('#systemScenarioSelect').selectOption(scenario);
      await mobileDialog(page, '#cableDetail');
      assert.ok((await page.locator('#cableDetail h2').innerText()).length>5);
      await screenshot(page, `mobile-map-${scenario}`);
      await page.locator('[data-close-cable]').tap();
    }
    await page.locator('.office-map-head summary').tap();
    const modelSelect=page.locator('.model-map-select select').first();
    const model=await modelSelect.locator('option').nth(1).getAttribute('value');
    await modelSelect.selectOption(model); await mobileDialog(page, '#cableDetail');
    await page.locator('[data-close-cable]').tap();
    await page.locator('.china-network-legend summary').tap(); await mobileDialog(page, '.china-network-legend');
    await page.locator('.china-network-legend summary').tap();
    await page.locator('.leaflet-control-zoom-in').tap();
    await page.locator('[data-view="ecosystem"]').tap();
    assert.equal(await page.locator('[inert]').count(),0);
  }, 390);
  for(const [width,height] of [[430,932],[768,1024],[844,390],[1024,600]]) await check(`touch layout and panel bounds at ${width}×${height}`, async page => {
    await ready(page);
    for(const button of await page.locator('.view-switch button').all()) {
      const b=await button.boundingBox();
      assert.ok(b.width>=44 && b.height>=44 && b.x>=0 && b.x+b.width<=width+1 && b.y+b.height<=height+1);
      await button.tap();
    }
    await searchNvidia(page); await mobileDialog(page, '#detailPanel');
    await screenshot(page, `touch-${width}-${height}`);
    await page.locator('#detailPanel [data-action="close"]').tap();
    await page.locator('[data-mobile="menu"]').tap(); await mobileDialog(page, '#mobileMenu');
    await page.keyboard.press('Escape');
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  }, width, height, true);
  await check('mobile gestures, short search viewport and desktop resize cleanup', async page => {
    await ready(page);
    const cdp=await page.context().newCDPSession(page);
    const touch=(type,points)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:points.map(([id,x,y])=>({id,x,y}))});
    await touch('touchStart',[[1,160,420]]); await touch('touchMove',[[1,240,450]]); await touch('touchMove',[[1,160,420]]); await touch('touchEnd',[]);
    assert.equal(await page.locator('#detailPanel').isVisible(),false,'Dragging back to the start must not select');
    await touch('touchStart',[[1,130,400],[2,250,400]]); await touch('touchMove',[[1,100,400],[2,280,400]]); await touch('touchEnd',[]);
    assert.equal(await page.locator('#detailPanel').isVisible(),false,'Pinching must not select');
    await page.locator('[data-mobile="search"]').tap(); await page.locator('#searchInput').fill('NVIDIA');
    await page.setViewportSize({width:390,height:420}); await mobileDialog(page,'.control-dock');
    const input=await page.locator('#searchInput').boundingBox(); assert.ok(input.y>=0 && input.y+input.height<=420);
    await screenshot(page,'mobile-short-search');
    await page.setViewportSize({width:1440,height:1000});
    await page.waitForFunction(()=>!document.body.classList.contains('mobile-layout'));
    assert.equal(await page.locator('.mobile-dialog').count(),0);
    assert.equal(await page.locator('[inert]').count(),0);
    assert.equal(await page.locator('[data-mobile="search"]').isVisible(),false);
    assert.ok(await page.locator('.top-actions').isVisible());
    await searchNvidia(page);
  },390);
  await check('mobile catalog fallback retains profiles, traces and all six views', async page => {
    await page.addInitScript(()=>{
      const get=HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext=function(type,...args){return /webgl/.test(type)?null:get.call(this,type,...args);};
    });
    await ready(page);
    assert.ok(await page.locator('.text-catalog').isVisible());
    await searchNvidia(page); await mobileDialog(page,'#detailPanel');
    await page.locator('[data-action="upstream"]').tap();
    assert.match(await page.locator('.catalog-summary').innerText(),/entities in this path/);
    for(const view of ['models','architecture','gravity','timeline','map','ecosystem']) await page.locator(`[data-view="${view}"]`).tap();
    assert.ok(await page.locator('.text-catalog').isVisible());
  },390);
  await check('WebGL failure preserves search, profiles, traces and timeline', async page => {
    await page.addInitScript(() => {
      const get = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function(type, ...args) { return /webgl/.test(type) ? null : get.call(this, type, ...args); };
    });
    await ready(page);
    assert.ok(await page.locator('.text-catalog').isVisible());
    await searchNvidia(page);
    await page.locator('[data-action="upstream"]').click();
    assert.match(await page.locator('.catalog-summary').innerText(), /entities in this path/);
    assert.ok(await page.locator('.catalog-entries button').count() > 1);
    await screenshot(page, 'catalog-fallback');
    await page.locator('[data-view="timeline"]').click();
    await page.locator('#timelineSearch').fill('NVIDIA');
    await page.locator('#timelineSearchResults [data-entity="nvidia"]').click();
    assert.equal(await page.locator('#timelineInspector h2').innerText(), 'NVIDIA');
  });
  await check('partial map failure preserves markers and recovers on retry', async page => {
    await page.route('**/data/submarine-cable-routes.csv', route => route.abort());
    await ready(page); await searchNvidia(page);
    await page.locator('[data-view="map"]').click();
    await page.locator('[data-retry-map]').waitFor();
    assert.match(await page.locator('[data-map-data-message]').innerText(), /1 map data file/);
    assert.ok(await page.locator('.leaflet-marker-icon').count() > 0);
    await page.unroute('**/data/submarine-cable-routes.csv');
    await page.locator('[data-retry-map]').click();
    await page.waitForFunction(() => document.querySelector('[data-map-data-message]').textContent === '');
    await page.locator('[data-view="ecosystem"]').click(); await searchNvidia(page);
  });
  await check('complete map failure leaves the offline basemap and explorer available', async page => {
    const core = new Set(['settings.csv','layers.csv','entities.csv','relationships.csv','aliases.csv','journeys.csv','representative-paths.csv','catalog-reviews.csv']);
    await page.route('**/data/*.csv', route => core.has(new URL(route.request().url()).pathname.split('/').at(-1)) ? route.continue() : route.abort());
    await ready(page); await page.locator('[data-view="map"]').click();
    await page.locator('[data-retry-map]').waitFor();
    assert.match(await page.locator('[data-map-data-message]').innerText(), /18 map data files/);
    assert.ok(await page.locator('.leaflet-offline-land-pane canvas, .leaflet-offline-land-pane path').count() > 0);
    await page.locator('[data-view="ecosystem"]').click(); await searchNvidia(page);
  });
  await check('switching views while map data loads is safe', async page => {
    let release;
    const pending = new Promise(resolve => { release = resolve; });
    await page.route('**/data/submarine-cable-routes.csv', async route => { await pending; await route.continue(); });
    try {
      await ready(page); await page.locator('[data-view="map"]').click();
      assert.equal(await page.locator('#systemScenarioSelect').isDisabled(), true);
      await page.locator('[data-view="ecosystem"]').click();
      release();
      await page.waitForFunction(() => !document.querySelector('#officeMapView').hasAttribute('aria-busy'));
      await page.locator('[data-view="map"]').click();
      await page.locator('.leaflet-marker-icon').first().waitFor();
      assert.equal(await page.locator('#systemScenarioSelect').isDisabled(), false);
    } finally { release(); }
  });
  await check('core data failure reports the right problem and can retry', async page => {
    await page.route('**/data/entities.csv', route => route.abort());
    await page.goto(base, {waitUntil:'domcontentloaded'});
    await page.locator('.data-load-error').waitFor();
    assert.match(await page.locator('.data-load-error').innerText(), /required data file/i);
    await page.unroute('**/data/entities.csv');
    await page.locator('.data-load-error button').click();
    await page.locator('#app[data-ready="true"]').waitFor();
  });
  }
  if (process.env.BROWSER_SUITE !== 'updates') await checkEntityInformation({check,ready,mobileDialog});
  if (process.env.BROWSER_SUITE !== 'entity') await checkUpdates({check,ready,screenshot,base});
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
console.log(`${passed} passed, ${failures} failed`);
if (failures) process.exitCode = 1;
