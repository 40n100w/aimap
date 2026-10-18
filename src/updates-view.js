import { loadJson } from './csv.js';
import { entityKind } from './entity-kind.js';
import { isMobileLayout } from './mobile-layout.js';
import { BASIS, validateUpdates, eventGraph, eventChanges, claimSnapshot } from './update-records.js';
import { UpdatesGraph } from './updates-graph.js';

const esc = value => String(value ?? '').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const day = value => value ? new Date(`${value}T12:00:00Z`).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}) : 'Not established';
const STORAGE = 'aimap-updates-following-v1';
const ARROW = '<svg class="up-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M4 4h8v8"/></svg>';
const relationLabel = value => value.toLowerCase().replaceAll('_',' ');

export class UpdatesView {
  constructor(ui, mobileUI) {
    Object.assign(this,{ui,mobileUI,mount:document.querySelector('#updatesView'),active:false,state:{snapshot:'after',effects:false,feed:'all',query:'',selection:null,panel:'graph'},followed:new Set()});
    try { const saved=JSON.parse(localStorage.getItem(STORAGE)||'[]'); if(Array.isArray(saved))this.followed=new Set(saved.filter(id=>typeof id==='string')); } catch { /* Watchlists also work without storage. */ }
    document.addEventListener('click',event=>{
      const button=event.target.closest('[data-view],[data-action],.skip-link');
      if(button?.dataset.view==='updates') {
        event.preventDefault();event.stopPropagation();
        if(this.active&&button.classList.contains('updates-entry'))document.querySelector('.view-switch [data-view="ecosystem"]').click();
        else this.show();
      }
      else if(button?.dataset.view) this.hide();
      else if(this.active&&button?.classList.contains('skip-link')) { event.preventDefault();event.stopPropagation();this.showPanel('updates',false);this.$('#upSearch')?.focus(); }
      else if(this.active&&button?.dataset.action==='reset') {event.preventDefault();event.stopPropagation();document.querySelector('.view-switch [data-view="ecosystem"]').click();}
    },true);
    document.addEventListener('keydown',event=>{
      if(!this.active)return;
      if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k') {event.preventDefault();event.stopImmediatePropagation();this.showPanel('updates',false);this.$('#upSearch')?.focus();}
      if(event.key==='Escape'&&this.state.selection) {this.state.selection=null;this.renderEvidence();this.graph?.highlight(null);this.showPanel('evidence');}
    },true);
    this.mount.addEventListener('click',event=>this.onClick(event));
    this.mount.addEventListener('input',event=>{if(event.target.id==='upSearch'){this.state.query=event.target.value.toLowerCase().trim();this.renderFeed();}});
    addEventListener('hashchange',()=>this.restoreLink());
    addEventListener('resize',()=>{if(this.active&&this.data)this.showPanel(this.state.panel,false);});
    this.restoreLink();
  }
  $(selector) {return this.mount.querySelector(selector);}
  restoreLink() {
    if(location.hash.startsWith('#updates/')) {
      const id=location.hash.slice(9);
      if(this.data) {this.selectEvent(this.data.events.find(event=>event.id===id)?.id||this.data.events.at(-1).id);}
      this.show(id);
    } else if(this.active) document.querySelector('.view-switch [data-view="ecosystem"]').click();
  }
  async show(eventId) {
    this.active=true;this.ui.enter();this.ui.closeAll();this.mobileUI.hideOwnedPanels();this.mobileUI.closeSupplementalPanels();
    this.ui.timeline.hide();this.ui.officeMap.hide();this.ui.scene.workspacePaused=true;
    document.body.classList.remove('timeline-mode','office-map-mode');document.body.classList.add('updates-mode');
    document.querySelectorAll('[data-view]').forEach(button=>{const active=button.dataset.view==='updates';button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
    const entry=document.querySelector('.updates-entry');entry.textContent='Atlas ↗';entry.setAttribute('aria-label','Back to the full atlas');
    this.mount.hidden=false;this.mobileUI.sync();
    if(!this.data) {
      if(this.loading)return;
      this.loading=true;
      this.mount.innerHTML='<div class="up-load" role="status">Loading reviewed updates…</div>';
      try {
        const data=await loadJson('updates.json'),errors=validateUpdates(data,this.ui.entities);
        if(errors.length)throw new Error(errors.join('; '));
        this.data=data;this.entities=new Map(this.ui.entities.map(entity=>[entity.id,{...entity,kind:entity.type==='Model'?'model':entityKind(entity),role:entity.type,atlas:true}]));
        for(const node of data.nodes)this.entities.set(node.id,node);
        this.events=[...data.events].sort((a,b)=>b.sequence-a.sequence);
        this.latestLedger=claimSnapshot(data,this.events[0].sequence);
        this.build();this.selectEvent(this.events.find(event=>event.id===eventId)?.id||this.events[0].id,false);
      } catch(error) {
        console.warn('Updates could not be loaded.',error);
        this.mount.innerHTML='<div class="up-load" role="alert"><h1>Updates are unavailable</h1><p>The reviewed records could not be loaded. You can still explore the atlas.</p><button data-up-retry>Retry updates</button><button data-view="ecosystem">Back to the atlas</button></div>';
      } finally {this.loading=false;}
    }
    if(this.data&&this.active) {this.writeLink();this.showPanel(this.state.panel,false);}
  }
  hide() {
    if(!this.active)return;
    this.active=false;this.mount.hidden=true;this.ui.scene.workspacePaused=false;this.graph?.setActive(false);document.body.classList.remove('updates-mode');
    const entry=document.querySelector('.updates-entry');entry.textContent='Updates ↗';entry.setAttribute('aria-label','Open reviewed updates');
    if(location.hash.startsWith('#updates/'))history.replaceState(null,'',location.pathname+location.search);
  }
  build() {
    this.mount.innerHTML=`
      <div class="up-coverage"><span><i></i> CURATED UPDATES</span><p>${esc(this.data.coverage)}</p><small>Reviewed ${day(this.data.reviewedOn)}</small><button data-view="ecosystem">Atlas ${ARROW}</button></div>
      <div class="up-workspace">
        <aside class="up-feed" aria-label="Reviewed update feed">
          <div class="up-panel-title"><div><p class="up-eyebrow">Your field of view</p><h1 tabindex="-1">What changed.</h1></div><span class="up-count">${this.events.length.toString().padStart(2,'0')}</span></div>
          <label class="up-search"><span aria-hidden="true">⌕</span><input id="upSearch" type="search" placeholder="Find an update…" aria-label="Search updates, companies and models"></label>
          <div class="up-feed-filters" aria-label="Filter updates"><button data-up-feed="all" aria-pressed="true">All updates</button><button data-up-feed="following" aria-pressed="false">Following <span id="upFollowCount">0</span></button></div>
          <p class="up-feed-label">RECENTLY RECORDED <span id="upResultCount"></span></p><div id="upEventFeed"></div>
          <div class="up-feed-note"><b>Follow the evidence.</b><p>Watchlists are saved on this device. No alerts or background news monitoring.</p><p>No matching update means no reviewed record here—not that nothing happened.</p><span id="upStorageStatus" role="status"></span></div>
        </aside>
        <section class="up-graph-panel" aria-label="Update relationship graph">
          <header class="up-graph-heading"><div class="up-heading-meta"><p id="upCategory" class="up-eyebrow"></p><button id="upFollowRoot" data-up-follow-root aria-pressed="false"></button></div><h2 id="upHeadline" tabindex="-1"></h2><p id="upSummary"></p></header>
          <div class="up-lens-row"><div class="up-lenses" aria-label="Supply chain segment"><button data-up-lens="serving">Serving</button><button data-up-lens="training">Training</button><button data-up-lens="hardware">Hardware</button></div><button id="upEffects" data-up-effects aria-pressed="false"><i></i>Possible effects</button></div>
          <div class="up-stage"><div id="upGraphCanvas" aria-hidden="true"></div><div id="upNodeLabels" class="up-node-labels"></div><div class="up-stage-caption"><span id="upStageContext"></span><small id="upStageScope"></small></div><div id="upGraphFallback" hidden>3D is unavailable. Select an entity below or inspect every connection in Evidence.</div></div>
          <div class="up-camera"><span>Drag to orbit · Pinch / scroll to zoom</span><button data-up-camera="out" aria-label="Zoom update graph out">−</button><button data-up-camera="in" aria-label="Zoom update graph in">+</button><button data-up-camera="reset" aria-label="Reset update graph camera">↺ <small>Reset</small></button></div>
          <div class="up-legend"><span><i class="up-solid"></i>Primary source</span><span><i class="up-dashed"></i>Reported / disputed</span><span><i class="up-dotted"></i>Possible effect</span><span>Δ Record changed</span></div>
          <div id="upGap" class="up-gap"></div>
          <section class="up-change-strip" aria-label="Compare recorded snapshots"><div><p class="up-eyebrow">One update. Two records.</p><strong id="upChangeSummary"></strong><small>Missing from a record ≠ evidence of absence.</small></div><div class="up-snapshots"><button data-up-snapshot="before">Earlier record</button><button data-up-snapshot="after">Updated record</button></div></section>
        </section>
        <aside class="up-evidence" aria-label="Evidence and potential consequences"><div class="up-evidence-top"><p class="up-eyebrow">Follow the evidence</p><button data-up-panel="graph" class="up-mobile-back">Back to map</button></div><div id="upEvidence"></div></aside>
      </div>
      <nav class="up-mobile-tabs" aria-label="Updates workspace"><button data-up-panel="updates">Updates</button><button data-up-panel="graph">3D map</button><button data-up-panel="evidence">Evidence</button></nav>
      <div id="upAnnouncement" class="sr-only" role="status"></div>`;
    try {
      this.graph=new UpdatesGraph(this.$('#upGraphCanvas'),this.$('#upNodeLabels'),this.entities,(kind,id)=>this.select(kind,id),()=>this.fallback());
    } catch(error) {console.warn('Updates use the evidence list because 3D is unavailable.',error);this.fallback();}
  }
  fallback() {
    this.noGraph=true;this.$('#upGraphCanvas').replaceChildren();this.$('.up-stage').classList.add('up-no-graph');this.$('#upGraphFallback').hidden=false;
    this.mount.querySelectorAll('[data-up-camera]').forEach(button=>button.disabled=true);
    if(this.visible)this.renderFallback();
  }
  renderFallback() {
    this.$('#upNodeLabels').innerHTML=this.visible.nodes.map(id=>`<button data-up-node="${esc(id)}">${esc(this.entities.get(id).name)} ${ARROW}</button>`).join('');
  }
  selectEvent(id,focus=true) {
    this.event=this.events.find(event=>event.id===id);
    Object.assign(this.state,{lens:this.event.lens,snapshot:'after',effects:false,selection:null});
    this.render();this.graph?.reset();
    if(this.active) {this.writeLink();this.showPanel('graph',focus);this.announce(this.event.title);}
  }
  writeLink() {if(this.event)history.replaceState(null,'',`${location.pathname}${location.search}#updates/${this.event.id}`);}
  showPanel(panel,focus=true) {
    this.state.panel=panel;this.mount.dataset.panel=panel;
    this.mount.querySelectorAll('.up-mobile-tabs button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.upPanel===panel)));
    this.graph?.setActive(this.active&&(!isMobileLayout()||panel==='graph'));
    if(focus&&(isMobileLayout()||panel==='evidence')) {
      const heading=this.$(panel==='updates'?'.up-feed h1':panel==='graph'?'#upHeadline':'#upEvidence h2');
      if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}
    }
  }
  announce(message) {const element=this.$('#upAnnouncement');if(element)element.textContent=message;}
  renderFeed() {
    const visible=this.events.filter(event=>(this.state.feed==='all'||event.namedEntityIds.some(id=>this.followed.has(id)))&&[event.title,event.summary,event.category,...event.namedEntityIds.map(id=>this.entities.get(id).name)].join(' ').toLowerCase().includes(this.state.query));
    this.$('#upResultCount').textContent=`${visible.length} RECORD${visible.length===1?'':'S'}`;
    this.$('#upFollowCount').textContent=this.followed.size;
    this.mount.querySelectorAll('[data-up-feed]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.upFeed===this.state.feed)));
    this.$('#upEventFeed').innerHTML=visible.map(event=>`<button class="up-event-card" data-up-event="${event.id}" aria-pressed="${event.id===this.event.id}"><span class="up-card-meta"><b>✓ Reviewed record</b><span>${day(event.recordedOn)}</span></span><h3>${esc(event.title)}</h3><p>${esc(event.summary)}</p><span class="up-card-footer">${esc(event.category)}<b aria-hidden="true">↗</b></span></button>`).join('')||'<p class="up-empty">No reviewed updates match. Follow an entity from its evidence panel or try another search.</p>';
  }
  render() {
    this.visible=eventGraph(this.data,this.event,this.state);
    this.$('#upCategory').textContent=this.event.category;
    this.$('#upHeadline').textContent=this.event.title;
    this.$('#upSummary').textContent=this.event.summary;
    const following=this.followed.has(this.event.root),follow=this.$('#upFollowRoot');
    follow.textContent=`${following?'✓ Following':'+ Follow'} ${this.entities.get(this.event.root).name}`;follow.setAttribute('aria-pressed',String(following));
    this.mount.querySelectorAll('[data-up-lens],[data-up-snapshot]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.upLens===this.state.lens||button.dataset.upSnapshot===this.state.snapshot)));
    const available=eventGraph(this.data,this.event,{...this.state,effects:true}).assessments.length>0;
    const effects=this.$('#upEffects');effects.disabled=!available;effects.setAttribute('aria-pressed',String(this.state.effects&&available));effects.title=available?'Show an analyst hypothesis and its assumptions.':'No potential effect assessed for this record and segment.';
    this.$('#upStageContext').textContent={serving:'Model access & runtime support',training:'Model creation & training inputs',hardware:'Documented hardware inputs'}[this.state.lens];
    this.$('#upStageScope').textContent=`${this.visible.nodes.length} entities · ${this.visible.claims.length} claims in this record`;
    const changes=eventChanges(this.data,this.event),counts=changes.reduce((totals,change)=>({...totals,[change.action]:(totals[change.action]||0)+1}),{});
    this.$('#upChangeSummary').textContent=this.state.snapshot==='before'?'Before this update was recorded':Object.entries(counts).map(([action,count])=>`${count} claim${count===1?'':'s'} ${action}`).join(' · ');
    this.$('#upGap').textContent=this.state.snapshot==='before'?'This is the earlier atlas record, not a reconstruction of the real world.':this.state.lens==='hardware'?'No manufacturing chain or facility allocation is established here.':this.state.lens==='training'?'A model’s developer and headquarters do not establish its training facility.':'Compatibility does not establish production use or business impact.';
    const superseded=this.visible.claims.filter(claim=>this.latestLedger.get(claim.claimId)?.id!==claim.id).length;
    if(superseded)this.$('#upGap').textContent+=` ${superseded} displayed claim${superseded===1?' has':'s have'} a later revision. Inspect claim history before using this record.`;
    this.renderFeed();this.renderEvidence();
    if(this.noGraph)this.renderFallback();else this.graph?.update(this.visible,this.event.root,this.state.snapshot==='after'?changes:[]);
    this.graph?.highlight(this.state.selection);this.showPanel(this.state.panel,false);
  }
  connectionList(claims=this.visible.claims, assessments=this.visible.assessments) {
    return `<div class="up-connections">${claims.map(claim=>`<button data-up-claim="${claim.id}" class="${claim.basis}"><span><strong>${esc(this.entities.get(claim.subject).name)}${claim.object?` → ${esc(this.entities.get(claim.object).name)}`:''}</strong><small>${esc(relationLabel(claim.relation))} · ${esc(BASIS[claim.basis])}</small></span><b>↗</b></button>`).join('')||'<p>No claims recorded in this segment at this point.</p>'}${assessments.map(assessment=>`<button data-up-effect="${assessment.id}" class="potential"><span><strong>◇ ${esc(assessment.title)}</strong><small>Potential · assumptions required</small></span><b>↗</b></button>`).join('')}</div>`;
  }
  sourceCards(citations) {
    return citations.map(citation=>{
      const source=this.data.sources.find(source=>source.id===citation.sourceId);
      return `<section class="up-source"><p class="up-eyebrow">${esc(source.publisher)}</p><a href="${esc(source.url)}" target="_blank" rel="noreferrer">${esc(source.title)} ${ARROW}</a><details><summary>Source excerpt &amp; version</summary><blockquote>${esc(citation.excerpt)}</blockquote><p>Snapshot ${esc(source.revision)}<br>SHA-256 <code>${esc(source.sha256)}</code></p></details><dl class="up-dates"><div><dt>Source published</dt><dd>${day(source.publishedOn)}</dd></div><div><dt>Retrieved</dt><dd>${day(source.retrievedOn)}</dd></div></dl></section>`;
    }).join('');
  }
  renderEvidence() {
    const selection=this.state.selection,back='<button class="up-back" data-up-back>← Update overview</button>';
    let html;
    if(selection?.kind==='node') {
      const entity=this.entities.get(selection.id),following=this.followed.has(entity.id),claims=this.visible.claims.filter(claim=>[claim.subject,claim.object].includes(entity.id));
      html=`${back}<p class="up-status">${esc(entity.role||entity.kind)}</p><h2>${esc(entity.name)}</h2><p>${esc(entity.description)}</p><button class="up-follow-entity" data-up-follow="${entity.id}" aria-pressed="${following}">${following?'✓ Following':'+ Follow this entity'}</button><h3>Claims in this view</h3>${this.connectionList(claims,this.visible.assessments.filter(item=>[item.subject,item.object].includes(entity.id)))}<p class="up-limit">Only this update’s reviewed scope is shown. Other atlas connections are not automatically imported as evidence.</p>${entity.atlas?`<button class="up-atlas-link" data-up-atlas="${entity.id}">Explore entity in the full atlas ${ARROW}</button>`:''}`;
    } else if(selection?.kind==='claim') {
      const claim=this.data.versions.find(version=>version.id===selection.id),recordEvent=this.data.events.find(event=>event.id===claim.eventId),latest=this.visible.latest.get(claim.claimId);
      const history=this.data.versions.filter(version=>version.claimId===claim.claimId).sort((a,b)=>this.data.events.find(event=>event.id===a.eventId).sequence-this.data.events.find(event=>event.id===b.eventId).sequence);
      html=`${back}<span class="up-status ${claim.basis}">${esc(BASIS[claim.basis])}${claim.state==='withdrawn'?' · Withdrawn':''}</span><h2>${esc(relationLabel(claim.relation))}</h2><div class="up-fact"><p>${esc(claim.statement)}</p></div>${claim.state==='withdrawn'?'<p class="up-limit">Withdrawn from the record. This version cannot support current potential effects.</p>':latest?.id!==claim.id?'<p class="up-limit">Historical version. It is not active in the selected snapshot.</p>':''}<h3>What this establishes</h3><p>${esc(claim.scope)}</p><dl class="up-dates"><div><dt>Recorded</dt><dd>${day(recordEvent.recordedOn)}</dd></div><div><dt>Reviewed</dt><dd>${day(recordEvent.reviewedOn)}</dd></div><div><dt>Valid from</dt><dd>${day(claim.validFrom)}</dd></div><div><dt>Valid until</dt><dd>${day(claim.validTo)}</dd></div></dl>${this.sourceCards(claim.citations)}<h3>Claim history</h3><ol class="up-history">${history.map(version=>`<li><button data-up-claim="${version.id}">${esc(version.id)} · ${version.state==='withdrawn'?'Withdrawn':version.supersedes?'Revised':'Added'}</button><small>Record #${this.data.events.find(event=>event.id===version.eventId).sequence}</small></li>`).join('')}</ol>`;
    } else if(selection?.kind==='effect') {
      const assessment=this.visible.assessments.find(item=>item.id===selection.id);
      if(!assessment){this.state.selection=null;this.renderEvidence();return;}
      html=`${back}<span class="up-status potential">◇ Potential · no observed outcome</span><h2>${esc(assessment.title)}</h2><div class="up-fact potential"><p>${esc(assessment.mechanism)}</p></div><h3>Required assumptions</h3><ul>${assessment.assumptions.map(item=>`<li>${esc(item)}</li>`).join('')}</ul><h3>Time horizon</h3><p>${esc(assessment.horizon)}</p><h3>Evidence used</h3>${this.connectionList(assessment.basedOnVersionIds.map(id=>this.data.versions.find(version=>version.id===id)),[])}<div class="up-limit">${esc(assessment.unknowns)}</div><p>This is an editorial hypothesis. No likelihood or financial impact has been calculated.</p>`;
    } else {
      const changes=eventChanges(this.data,this.event),before=this.state.snapshot==='before';
      html=`<span class="up-status">✓ Reviewed record · #${this.event.sequence}</span><h2>${before?'The earlier record.':'What we can establish.'}</h2><div class="up-fact"><p>${esc(before?'These are the claims recorded before this update. An absent claim means it was not yet in this reviewed collection.':this.event.scope)}</p></div><dl class="up-dates"><div><dt>Event occurred</dt><dd>${day(this.event.occurredOn)}</dd></div><div><dt>Recorded / reviewed</dt><dd>${day(this.event.recordedOn)}</dd></div></dl><h3>Claims in this segment</h3>${this.connectionList()}<div class="up-limit"><strong>Still unknown</strong><p>${esc(this.event.unknowns)}</p></div><h3>Recorded changes · all segments</h3><ol class="up-change-list">${changes.map(({version,action})=>`<li><button data-up-claim="${version.id}"><span>${action}</span>${esc(version.statement)}</button></li>`).join('')}</ol><p class="up-limit">Arrows describe recorded relationships. They do not establish downstream consequences. Potential effects require a separate assessment.</p><a class="up-permalink" href="#updates/${this.event.id}">Link to this update ${ARROW}</a>`;
    }
    this.$('#upEvidence').innerHTML=html;
    if(selection?.kind==='claim') {
      const claim=this.data.versions.find(version=>version.id===selection.id),current=this.latestLedger.get(claim.claimId);
      if(current?.id!==claim.id)this.$('#upEvidence h2').insertAdjacentHTML('afterend',`<div class="up-limit">This claim has subsequently been ${current.state==='withdrawn'?'withdrawn':'revised'}. You are inspecting an earlier version.<button class="up-back" data-up-claim="${current.id}">Inspect the latest revision →</button></div>`);
    }
    this.$('.up-evidence').scrollTop=0;
  }
  select(kind,id) {this.state.selection={kind,id};this.renderEvidence();this.graph?.highlight(this.state.selection);this.showPanel('evidence');}
  follow(id) {
    const restoreFocus=document.activeElement?.matches('[data-up-follow]');
    this.followed.has(id)?this.followed.delete(id):this.followed.add(id);
    let message='Watchlist saved on this device.';
    try {localStorage.setItem(STORAGE,JSON.stringify([...this.followed]));} catch {message='Storage is unavailable. This watchlist lasts for this session only.';}
    this.render();this.$('#upStorageStatus').textContent=message;this.announce(message);
    if(restoreFocus)this.$(`[data-up-follow="${CSS.escape(id)}"]`)?.focus({preventScroll:true});
  }
  onClick(event) {
    const button=event.target.closest('button');if(!button)return;
    const data=button.dataset;
    if('upRetry'in data)this.show();
    else if(data.upEvent)this.selectEvent(data.upEvent);
    else if(data.upFeed){this.state.feed=data.upFeed;this.renderFeed();}
    else if(data.upLens){Object.assign(this.state,{lens:data.upLens,effects:false,selection:null});this.render();this.graph?.reset();}
    else if(data.upSnapshot){Object.assign(this.state,{snapshot:data.upSnapshot,effects:false,selection:null});this.render();this.announce(this.$('#upChangeSummary').textContent);}
    else if('upEffects'in data){this.state.effects=!this.state.effects;this.state.selection=null;this.render();}
    else if(data.upClaim)this.select('claim',data.upClaim);
    else if(data.upNode)this.select('node',data.upNode);
    else if(data.upEffect)this.select('effect',data.upEffect);
    else if('upBack'in data){this.state.selection=null;this.renderEvidence();this.graph?.highlight(null);}
    else if(data.upPanel)this.showPanel(data.upPanel);
    else if('upFollowRoot'in data)this.follow(this.event.root);
    else if(data.upFollow)this.follow(data.upFollow);
    else if(data.upCamera){data.upCamera==='reset'?this.graph?.reset():this.graph?.zoom(data.upCamera==='in'?.8:1.25);}
    else if(data.upAtlas){document.querySelector('.view-switch [data-view="ecosystem"]').click();this.ui.select(data.upAtlas);}
  }
}
