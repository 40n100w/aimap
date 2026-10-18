import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {chromium} from 'playwright';

const html=await readFile(new URL('concept.html',import.meta.url));
const server=createServer((request,response)=>response.writeHead(200,{'Content-Type':'text/html'}).end(html));
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const executablePath=process.env.CHROMIUM_PATH||(existsSync('/usr/bin/chromium')?'/usr/bin/chromium':undefined);
const browser=await chromium.launch({executablePath,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-dev-shm-usage']});
let passed=0;
async function screenshot(page,name){await page.screenshot({path:new URL(`${name}.png`,import.meta.url).pathname});}
async function panel(page,name){if(page.viewportSize().width<=900)await page.locator(`[data-mobile-panel="${name}"]`).click();}
async function check(width,height,interactions=false,fallback=false){
  const page=await browser.newPage({viewport:{width,height},hasTouch:width<=900,isMobile:width<=900,reducedMotion:'reduce'});
  page.setDefaultTimeout(8000);const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.route('https://**/*',route=>route.abort());
  if(fallback)await page.addInitScript(()=>{const get=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){return /webgl/.test(type)?null:get.call(this,type,...args);};});
  try{
    await page.goto(`http://127.0.0.1:${server.address().port}`);await page.locator('html[data-ready="true"]').waitFor();await page.evaluate(()=>document.fonts.ready);
    await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'No page overflow');
    assert.match(await page.locator('.concept-banner').innerText(),/Fictional/);
    if(fallback){
      assert.ok(await page.locator('.graph-fallback').isVisible());await panel(page,'evidence');
      await page.locator('[data-connection="serves"]').click();assert.match(await page.locator('#evidenceContent').innerText(),/Serving availability only/);
    }else{
      assert.equal(await page.locator('.graph-node').count(),4);
      const overlaps=await page.locator('.graph-node').evaluateAll(nodes=>{
        const boxes=nodes.map(node=>({name:node.textContent,r:node.getBoundingClientRect()}));
        return boxes.flatMap((a,i)=>boxes.slice(i+1).filter(b=>a.r.left<b.r.right&&a.r.right>b.r.left&&a.r.top<b.r.bottom&&a.r.bottom>b.r.top).map(b=>`${a.name} / ${b.name}`));
      });
      assert.deepEqual(overlaps,[],'Graph labels must remain individually selectable');
      await screenshot(page,`concept-${width}`);
    }
    if(interactions){
      await page.locator('#followButton').click();assert.equal(await page.locator('#followButton').getAttribute('aria-pressed'),'true');
      await panel(page,'updates');await page.locator('[data-feed="watching"]').click();assert.equal(await page.locator('.event-card').count(),2);
      await page.locator('#eventSearch').fill('withdrawn');assert.equal(await page.locator('.event-card').count(),1);
      await page.locator('#eventSearch').fill('');await page.locator('[data-feed="all"]').click();await panel(page,'graph');
      await page.locator('#effectsToggle').click();await panel(page,'evidence');
      await page.locator('[data-connection="option"]').click();assert.match(await page.locator('#evidenceContent').innerText(),/POSSIBLE EFFECT · NOT OBSERVED/);
      await page.locator('.source-card summary').click();assert.match(await page.locator('.source-card blockquote').innerText(),/Assumption/);
      await screenshot(page,`possible-effect-${width}`);
      await panel(page,'graph');await page.locator('[data-snapshot="before"]').click();await panel(page,'evidence');
      assert.equal(await page.locator('[data-connection="serves"]').count(),0);assert.equal(await page.locator('[data-connection="option"]').count(),0);
      await panel(page,'graph');await page.locator('[data-snapshot="after"]').click();await panel(page,'evidence');
      assert.ok(await page.locator('[data-connection="serves"]').isVisible());
      await panel(page,'graph');await page.locator('[data-lens="training"]').click();assert.ok(await page.locator('#unknownNote').isVisible());
      assert.equal(await page.locator('[data-node="chip"]').count(),0);
      await panel(page,'updates');await page.locator('[data-event="delivery"]').click();
      assert.equal(await page.locator('[data-lens="hardware"]').getAttribute('aria-pressed'),'true');
      await page.locator('#effectsToggle').click();await panel(page,'evidence');await page.locator('[data-connection="capacity"]').click();
      assert.match(await page.locator('#evidenceContent').innerText(),/inventory, substitution and demand are unknown/);
      await panel(page,'updates');await page.locator('[data-event="correction"]').click();
      assert.ok(await page.locator('#unknownNote').isVisible());assert.equal(await page.locator('[data-node="chip"]').count(),0);
      await page.locator('[data-snapshot="before"]').click();assert.equal(await page.locator('[data-node="chip"]').count(),1);
      await panel(page,'evidence');await page.locator('[data-connection="withdrawn"]').click();
      assert.match(await page.locator('#evidenceContent').innerText(),/unverified and retracted/);
      await panel(page,'graph');await page.locator('[data-snapshot="after"]').click();assert.equal(await page.locator('[data-node="chip"]').count(),0);
      await screenshot(page,`correction-${width}`);
      await panel(page,'updates');await page.locator('[data-event="availability"]').click();await panel(page,'evidence');
      assert.match(await page.locator('.record-dates').innerText(),/Day 03 · 11:40/);
      await page.keyboard.press('Tab');assert.ok(await page.evaluate(()=>document.activeElement!==document.body));
    }
    assert.deepEqual(errors,[]);passed++;console.log(`PASS ${width}×${height}${interactions?' · event / evidence / comparison / corrections / watchlist':''}${fallback?' · no WebGL':''}`);
  }finally{await page.close();}
}
try{
  await check(1440,1000,true);await check(390,844,true);await check(1024,900);await check(320,740);await check(844,390);await check(390,844,false,true);
}finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
console.log(`${passed} concept scenarios passed`);
