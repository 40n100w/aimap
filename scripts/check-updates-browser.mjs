import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const records=JSON.parse(await readFile(new URL('../data/updates.json',import.meta.url),'utf8'));
const rootEvent='deepseek-v3-evidence-review';

export async function checkUpdates({check,ready,screenshot,base}) {
  const open=async page=>{await ready(page);await page.locator('.updates-entry').click();await page.locator('#upHeadline').waitFor();};
  await check('updates: scoped graph, exact evidence, snapshots and potential effects',async page=>{
    await open(page);
    assert.equal(await page.locator('#upNodeLabels button').count(),5);
    assert.equal(await page.locator('#upEffects').getAttribute('aria-pressed'),'false');
    await page.locator('[data-up-claim="deepseek-v3-vllm-v1"]').first().click();
    assert.match(await page.locator('#upEvidence').innerText(),/vLLM v0.6.6/);
    await page.locator('.up-source summary').click();
    assert.match(await page.locator('.up-source blockquote').innerText(),/v0.6.6 supports DeepSeek-V3/);
    assert.match(await page.locator('.up-source a').getAttribute('href'),/9b4e9788e4a3a731f7567338ed15d3ec549ce03b/);
    await screenshot(page,'updates-evidence-desktop');
    await page.locator('[data-up-lens="training"]').click();
    assert.ok(await page.locator('[data-up-node="h800-gpu"]').isVisible());
    assert.equal(await page.locator('[data-up-node="vllm"]').count(),0);
    assert.ok(await page.locator('#upEffects').isDisabled());
    await page.locator('[data-up-snapshot="before"]').click();
    assert.equal(await page.locator('#upNodeLabels button').count(),1);
    assert.match(await page.locator('#upGap').innerText(),/earlier atlas record/);
    await page.locator('[data-up-snapshot="after"]').click();
    await page.locator('[data-up-lens="serving"]').click();
    await page.locator('#upEffects').click();
    await page.locator('[data-up-effect]').click();
    assert.match(await page.locator('#upEvidence').innerText(),/no observed outcome/);
    assert.equal(await page.locator('#upEvidence ul li').count(),3);
    assert.equal(await page.locator('#upEvidence [data-up-effect]').count(),0,'An assessment is not its own evidence');
    await screenshot(page,'updates-potential-desktop');
    await page.locator('.view-switch [data-view="map"]').click();
    await page.locator('.leaflet-marker-icon').first().waitFor();
    await page.locator('.updates-entry').click();
    assert.equal(await page.locator('#officeMapView').isVisible(),false);
    await page.locator('.updates-entry').click();
    assert.ok(await page.locator('#scene').isVisible());
    assert.equal(await page.locator('.view-switch [data-view="ecosystem"]').getAttribute('aria-pressed'),'true');
  });

  for(const [width,height] of [[1024,1000],[390,844],[320,740],[844,390],[1024,600]]) await check(`updates: usable layout, follow list and navigation at ${width}×${height}`,async page=>{
    await open(page);
    const touch=height<650||width<901;
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    await page.evaluate(()=>document.fonts.ready);
    await page.locator('.up-stage').scrollIntoViewIfNeeded();
    const bounds=await page.locator('#upNodeLabels button').evaluateAll(buttons=>buttons.map(button=>{const r=button.getBoundingClientRect();return {left:r.left,top:r.top,right:r.right,bottom:r.bottom,width:r.width,height:r.height};}));
    for(let i=0;i<bounds.length;i++) {
      assert.ok(bounds[i].height>=44,'Touch entity targets are at least 44px');
      for(let j=i+1;j<bounds.length;j++) assert.ok(bounds[i].right<=bounds[j].left||bounds[j].right<=bounds[i].left||bounds[i].bottom<=bounds[j].top||bounds[j].bottom<=bounds[i].top,'Entity labels do not overlap');
    }
    await screenshot(page,`updates-${width}-${height}`);
    await page.locator('[data-up-node="deepseek"]').click();
    assert.equal(await page.locator('#upEvidence h2').innerText(),'DeepSeek');
    await page.locator('[data-up-follow="deepseek"]').click();
    if(touch)await page.locator('.up-mobile-tabs [data-up-panel="updates"]').click();
    await page.locator('[data-up-feed="following"]').click();
    assert.equal(await page.locator('.up-event-card').count(),1,'Followed companies match all explicitly named entities');
    await page.reload();await page.locator('#upHeadline').waitFor();
    if(touch)await page.locator('.up-mobile-tabs [data-up-panel="updates"]').click();
    assert.equal(await page.locator('#upFollowCount').innerText(),'1');
    await page.keyboard.press('Control+k');
    assert.ok(await page.locator('#upSearch').evaluate(element=>element===document.activeElement));
    await page.locator('#upSearch').fill('Qwen');
    await page.locator('[data-up-feed="all"]').click();
    assert.equal(await page.locator('.up-event-card').count(),1);
    await page.locator('.up-event-card').click();
    if(touch)await page.locator('.up-mobile-tabs [data-up-panel="evidence"]').click();
    assert.match(await page.locator('#upEvidence').innerText(),/29 Apr 2025/);
    await screenshot(page,`updates-evidence-${width}-${height}`);
    await page.locator('.updates-entry').click();
    assert.ok(await page.locator('#scene').isVisible());
    assert.ok(await page.locator('.view-switch').isVisible());
  },width,height,height<650||width<901);

  await check('updates: no WebGL or persistent storage still permits evidence and a session watchlist',async page=>{
    await page.addInitScript(()=>{
      const get=HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext=function(type,...args){return /webgl/.test(type)?null:get.call(this,type,...args);};
      Storage.prototype.setItem=function(){throw new Error('Storage blocked for test');};
    });
    await open(page);assert.ok(await page.locator('#upGraphFallback').isVisible());
    await page.locator('#upFollowRoot').click();
    await page.locator('.up-mobile-tabs [data-up-panel="updates"]').click();
    assert.match(await page.locator('#upStorageStatus').innerText(),/session only/);
    await page.locator('[data-up-feed="following"]').click();
    assert.equal(await page.locator('.up-event-card').count(),1);
    await page.locator('.up-mobile-tabs [data-up-panel="evidence"]').click();
    await page.locator('[data-up-claim="deepseek-v3-h800-v1"]').click();
    assert.match(await page.locator('#upEvidence').innerText(),/2.788 million/);
    await screenshot(page,'updates-fallback-mobile');
  },390);

  await check('updates: failed data retries independently and a late response cannot reopen a closed view',async page=>{
    await page.route('**/data/updates.json',route=>route.fulfill({status:200,contentType:'application/json',body:'{"schemaVersion":0}'}));
    await ready(page);await page.locator('.updates-entry').click();await page.locator('[data-up-retry]').waitFor();
    assert.ok(await page.locator('.up-load').isVisible());
    await page.unroute('**/data/updates.json');
    await page.locator('[data-up-retry]').click();await page.locator('#upHeadline').waitFor();
    await page.reload();await page.locator('#upHeadline').waitFor();
    assert.match(page.url(),new RegExp(`#updates/${rootEvent}$`));
    await page.locator('.updates-entry').click();
    let pending;await page.route('**/data/updates.json',route=>new Promise(resolve=>{pending=async()=>{await route.fulfill({json:records});resolve();};}));
    await page.goto(base);await page.locator('#app[data-ready="true"]').waitFor();await page.locator('.updates-entry').click();
    await page.locator('.up-load').waitFor();await page.locator('.view-switch [data-view="timeline"]').click();
    while(!pending)await new Promise(resolve=>setTimeout(resolve,10));
    await pending();await page.locator('#upHeadline').waitFor({state:'attached'});
    assert.equal(await page.locator('#updatesView').isVisible(),false);
    assert.ok(await page.locator('#timelineView').isVisible());
  });

  await check('updates: correction history remains inspectable and withdrawn inputs disable hypotheses',async page=>{
    const data=structuredClone(records),original=data.versions.find(version=>version.claimId==='deepseek-v3-vllm');
    const correction={...data.events.find(event=>event.id===rootEvent),id:'test-correction',sequence:4,title:'Test fixture: evidence withdrawn',changeVersionIds:['test-withdrawal'],contextClaimIds:[]};
    data.events.push(correction);data.versions.push({...original,id:'test-withdrawal',eventId:correction.id,state:'withdrawn',supersedes:original.id,statement:'Test fixture withdrawal; not a real source correction.'});
    await page.route('**/data/updates.json',route=>route.fulfill({json:data}));
    await open(page);assert.match(await page.locator('#upChangeSummary').innerText(),/1 claim withdrawn/);
    assert.equal(await page.locator('#upNodeLabels button').count(),1);
    await page.locator('[data-up-snapshot="before"]').click();assert.equal(await page.locator('#upNodeLabels button').count(),2);
    await page.locator('[data-up-snapshot="after"]').click();
    await page.locator('[data-up-claim="test-withdrawal"]').click();
    assert.match(await page.locator('#upEvidence').innerText(),/Withdrawn from the record/);
    assert.equal(await page.locator('.up-history li').count(),2);
    await page.locator(`.up-history [data-up-claim="${original.id}"]`).click();
    assert.match(await page.locator('#upEvidence').innerText(),/not active in the selected snapshot/);
    assert.match(await page.locator('#upEvidence').innerText(),/subsequently been withdrawn/);
    await page.locator(`[data-up-event="${rootEvent}"]`).click();assert.ok(await page.locator('#upEffects').isDisabled());
  });
}
