import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TapGesture } from '../../src/tap-gesture.js';

// These records are deliberately fictional. They demonstrate evidence states,
// scope and corrections without presenting invented news about real companies.
const entities = {
  lab: {name:'Aster Labs',kind:'organization',role:'Model developer',color:0xd9bd94},
  model: {name:'Aster 3',kind:'model',role:'Model · version 3',color:0xc4b5e5},
  cloud: {name:'Meridian Cloud',kind:'organization',role:'Serving provider',color:0xa8d9c8},
  app: {name:'Relay',kind:'software',role:'Application',color:0x92b9cf},
  chip: {name:'Northstar N4',kind:'hardware',role:'Accelerator product',color:0xe0c594},
  foundry: {name:'Arc Foundry',kind:'organization',role:'Manufacturing provider',color:0xa4b9b2}
};
const events = [
  {id:'availability',label:'Reviewed',className:'reviewed',category:'Model availability',day:'DAY 03',title:'Aster 3 arrives on Meridian Cloud',description:'A new serving option is recorded. Training infrastructure remains undisclosed.',named:'2 named entities',root:'model',lens:'serving',headline:'A new route to a model.',summary:'Aster 3 gains a documented serving provider. Follow the changed connection, then explore what it could mean downstream.',fact:'Meridian lists Aster 3 as available through its managed model service.',change:'1 serving connection added',earlier:'No serving connection in the earlier record',source:'Meridian Cloud · release note',sourceId:'Fixture A',quote:'“Aster 3 is now available through the Meridian model service.”',occurred:'Day 03 · 11:40',published:'Day 03 · 11:40',reviewed:'Day 03 · 12:10',possible:'Relay could gain another serving option if its team chooses to integrate the Meridian endpoint. No migration or business outcome is recorded.',unknown:'The announcement does not identify training hardware, serving-chip allocation, adoption, contract value or revenue effects.'},
  {id:'delivery',label:'Reported',className:'reported',category:'Hardware supply',day:'DAY 02',title:'Northstar N4 deliveries reportedly shift',description:'A supplier report changes the delivery outlook. Customer impact is not established.',named:'1 named product',root:'chip',lens:'hardware',headline:'A delay. How far does it reach?',summary:'A trade report describes a later N4 delivery window. Trace the relevant supply relationships without assuming every customer is affected.',fact:'A trade publication reports a later delivery window for Northstar N4. Supplier confirmation is pending.',change:'1 reported schedule revision',earlier:'Earlier delivery window retained',source:'Industry Dispatch · trade report',sourceId:'Fixture B',quote:'“People familiar with the schedule say the next N4 delivery window has moved.”',occurred:'Not established',published:'Day 02 · 09:15',reviewed:'Day 03 · 08:30',possible:'Meridian might face a capacity delay only if its allocation is affected and inventory or alternative hardware cannot cover demand. Those conditions are not verified.',unknown:'No customer allocation, inventory buffer, substitute capacity or model-specific deployment is established by this report.'},
  {id:'correction',label:'Correction',className:'correction',category:'Evidence correction',day:'DAY 01',title:'An Aster 3 hardware claim is withdrawn',description:'A previously reported training connection is retracted. Its history stays visible.',named:'1 claim withdrawn',root:'model',lens:'training',headline:'A correction changes the map.',summary:'The reported N4 training link is removed from the current record. The earlier claim remains inspectable, with its retraction attached.',fact:'The publication withdraws its claim that Aster 3 was trained on Northstar N4. The model’s training hardware is now recorded as undisclosed.',change:'1 reported connection withdrawn',earlier:'Earlier, unverified training claim shown',source:'Industry Dispatch · correction',sourceId:'Fixture C',quote:'“We cannot substantiate the N4 training attribution and withdraw that claim.”',occurred:'Underlying hardware unknown',published:'Day 01 · 15:20',reviewed:'Day 01 · 16:00',possible:'A correction changes what the atlas can claim. It does not establish that the model’s actual hardware changed.',unknown:'No replacement training platform is disclosed. The graph must leave a gap instead of choosing another plausible supplier.'}
];
const records = {
  develops:{id:'develops',from:'lab',to:'model',type:'DEVELOPS',status:'documented',label:'Aster Labs → Aster 3',short:'Developer disclosure',claim:'Aster Labs identifies itself as the developer of Aster 3.',scope:'This establishes authorship of this model version. It does not establish the hardware or location used to train it.',source:'Aster Labs · model card',sourceId:'Fixture D',quote:'“Aster 3 is developed by Aster Labs.”'},
  serves:{id:'serves',from:'cloud',to:'model',type:'SERVES',status:'documented',label:'Meridian Cloud → Aster 3',short:'New serving availability',claim:'Meridian offers Aster 3 through its managed model service.',scope:'Serving availability only. This is not evidence of a training partnership, a particular accelerator or a particular data center.',source:'Meridian Cloud · release note',sourceId:'Fixture A',quote:'“Aster 3 is now available through the Meridian model service.”'},
  uses:{id:'uses',from:'model',to:'app',type:'USED_BY',status:'documented',label:'Aster 3 → Relay',short:'Existing model use',claim:'Relay identifies Aster 3 as one of its model options.',scope:'A model-use relationship is documented. Relay’s serving provider, usage volume and response to this announcement are not disclosed.',source:'Relay · product documentation',sourceId:'Fixture E',quote:'“Relay supports Aster 3 as a model option.”'},
  manufactures:{id:'manufactures',from:'foundry',to:'chip',type:'MANUFACTURES',status:'documented',label:'Arc Foundry → Northstar N4',short:'Product-specific manufacturing',claim:'Arc Foundry is named as a manufacturing provider for Northstar N4.',scope:'This is specific to N4. No share of supply, process allocation or future capacity is established.',source:'Northstar · product disclosure',sourceId:'Fixture F',quote:'“The N4 product is manufactured with Arc Foundry.”'},
  purchases:{id:'purchases',from:'chip',to:'cloud',type:'SUPPLIED_TO',status:'reported',label:'Northstar N4 → Meridian Cloud',short:'Reported customer relationship',claim:'A trade report names Meridian as an N4 customer.',scope:'Company-level sourcing. This does not identify which Meridian services, model versions or facilities use N4.',source:'Industry Dispatch · supplier coverage',sourceId:'Fixture G',quote:'“Meridian is among the customers reported to be purchasing N4 systems.”'},
  withdrawn:{id:'withdrawn',from:'chip',to:'model',type:'REPORTED_TRAINING',status:'reported',label:'Northstar N4 → Aster 3',short:'Earlier claim · since withdrawn',claim:'An earlier report attributed Aster 3 training to N4. The publication has since withdrawn that claim.',scope:'Visible only in the earlier record. This claim is unverified and retracted; it cannot support current supply-chain conclusions.',source:'Industry Dispatch · original report + correction',sourceId:'Fixture C',quote:'“We cannot substantiate the N4 training attribution and withdraw that claim.”'},
  option:{id:'option',from:'cloud',to:'app',type:'POSSIBLE_OPTION',status:'possible',label:'Meridian Cloud → Relay',short:'Possible serving option',claim:'Relay could choose to integrate the new Meridian endpoint.',scope:'Requires a product decision, compatible behavior and acceptable commercial terms. No integration or resulting benefit is recorded.',source:'Analyst hypothesis · design fixture',sourceId:'Hypothesis 01',quote:'Assumption: Relay is willing and able to add another serving provider.'},
  capacity:{id:'capacity',from:'chip',to:'cloud',type:'POSSIBLE_CAPACITY_EFFECT',status:'possible',label:'N4 delivery shift → Meridian',short:'Possible capacity constraint',claim:'Meridian might experience a capacity constraint if the reported delay affects its N4 allocation.',scope:'Allocation, inventory, substitution and demand are unknown. A recorded supplier relationship alone does not establish a customer outage or financial loss.',source:'Analyst hypothesis · design fixture',sourceId:'Hypothesis 02',quote:'Assumption: the delayed allocation is needed and no inventory or substitute capacity is available.'}
};

let followed=[];
try { followed=JSON.parse(localStorage.getItem('aimap-update-design-follows')||'[]'); if(!Array.isArray(followed))followed=[]; } catch { /* Storage is optional in this local concept. */ }
const state={event:'availability',lens:'serving',snapshot:'after',effects:false,feed:'all',query:'',selection:null,followed:new Set(followed)};
const $=selector=>document.querySelector(selector);
const activeEvent=()=>events.find(event=>event.id===state.event);
const mobile=()=>matchMedia('(max-width:900px)').matches;
let graph;

function visibleRecords() {
  let ids=state.lens==='serving'?['develops','uses']:state.lens==='hardware'?['manufactures','purchases']:['develops'];
  if(state.lens==='serving' && (state.event!=='availability'||state.snapshot==='after'))ids.push('serves');
  if(state.lens==='training' && state.event==='correction' && state.snapshot==='before')ids.push('withdrawn');
  if(state.effects && state.snapshot==='after') {
    if(state.event==='availability' && state.lens==='serving')ids.push('option');
    if(state.event==='delivery' && state.lens==='hardware')ids.push('capacity');
  }
  if(state.event==='availability'&&state.snapshot==='after'&&ids.includes('serves'))ids=['serves',...ids.filter(id=>id!=='serves')];
  return ids.map(id=>records[id]);
}

function announce(text) { $('#announcement').textContent=text; }
function showPanel(panel,focus=false) {
  document.body.dataset.panel=panel;
  document.querySelectorAll('[data-mobile-panel]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.mobilePanel===panel)));
  requestAnimationFrame(()=>graph?.resize());
  if(focus && mobile()) {
    const heading=panel==='evidence'?$('#evidenceContent h2'):panel==='updates'?$('.panel-title h1'):$('#eventHeadline');
    heading.tabIndex=-1;heading.focus({preventScroll:true});
  }
}

function renderFeed() {
  const visible=events.filter(event=>(state.feed==='all'||state.followed.has(event.root))&&`${event.title} ${event.category}`.toLowerCase().includes(state.query));
  $('#eventFeed').innerHTML=visible.length?visible.map(event=>`<button class="event-card" data-event="${event.id}" aria-pressed="${state.event===event.id}"><div class="card-top"><b class="${event.className}">${event.label==='Reviewed'?'✓ ':event.label==='Correction'?'↶ ':'◌ '}${event.label}</b><span>${event.day}</span></div><h3>${event.title}</h3><p>${event.description}</p><footer><span>${event.named}</span><span aria-hidden="true">↗</span></footer></button>`).join(''):'<p class="empty-state">No matching sample updates. Follow an entity from the map to collect its updates here.</p>';
  $('#followCount').textContent=state.followed.size;
  document.querySelectorAll('[data-feed]').forEach(button=>button.setAttribute('aria-pressed',String(state.feed===button.dataset.feed)));
}

function sourceCard(record,event=activeEvent()) {
  const hypothesis=record.status==='possible', connection=Boolean(record.from);
  return `<section class="source-card"><div class="source-top"><span>${hypothesis?'ASSUMPTION RECORD':'SOURCE RECORD'}</span><span>${record.sourceId||event.sourceId}</span></div><strong>${record.source||event.source}</strong><p>${hypothesis?'Reasoning to investigate. No observed outcome is recorded.':'Fictional source used to demonstrate this design. No external publication is being cited.'}</p><details><summary>${hypothesis?'Inspect assumptions':'Read sample source excerpt'}</summary><blockquote>${record.quote||event.quote}</blockquote><p>This excerpt is part of the fictional design example.</p></details>${hypothesis?'':`<dl class="record-dates"><div><dt>Event occurred</dt><dd>${connection?'See claim history':event.occurred}</dd></div><div><dt>Published</dt><dd>${connection?'Sample baseline':event.published}</dd></div><div><dt>Last reviewed</dt><dd>${event.reviewed}</dd></div><div><dt>Record state</dt><dd>${state.snapshot==='after'?'Updated snapshot':'Earlier snapshot'}</dd></div></dl>`}</section>`;
}

function connectionList(list=visibleRecords()) {
  return `<div class="connection-list">${list.map(record=>`<button class="connection ${record.status} ${state.selection?.id===record.id?'selected':''}" data-connection="${record.id}"><span><strong>${record.label}</strong><small>${record.short}</small></span><b aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M5 15 15 5M5 5h10v10"/></svg></b></button>`).join('')}</div>`;
}

function renderEvidence() {
  const event=activeEvent(),selection=state.selection;
  if(selection?.kind==='connection') {
    const record=records[selection.id],possible=record.status==='possible';
    $('#evidenceContent').innerHTML=`<button class="back-evidence" data-back-event>← Back to the update</button><span class="evidence-status ${record.status}">${possible?'POSSIBLE EFFECT · NOT OBSERVED':record.status==='reported'?'REPORTED RELATIONSHIP':'DOCUMENTED RELATIONSHIP'}</span><h2>${record.label}</h2><p>${record.type.replaceAll('_',' ').toLowerCase()} · ${possible?'Explicit assumptions':'Relationship scope'}</p><div class="fact-card ${possible?'possible':''}"><p class="eyebrow">${possible?'What could happen':'What this source supports'}</p><p>${record.claim}</p></div><div class="implication"><h3>${possible?'Conditions that must hold':'Limits of this claim'}</h3><p>${record.scope}</p></div>${sourceCard(record)}`;
  } else if(selection?.kind==='node') {
    const entity=entities[selection.id],links=visibleRecords().filter(record=>record.from===selection.id||record.to===selection.id);
    $('#evidenceContent').innerHTML=`<button class="back-evidence" data-back-event>← Back to the update</button><p class="eyebrow">${entity.role}</p><h2>${entity.name}</h2><p>Connections relevant to this event and the selected supply-chain segment.</p><div class="fact-card"><p class="eyebrow">Scope matters</p><p>${selection.id==='cloud'?'A provider’s hardware purchases do not establish the hardware behind any specific model.':selection.id==='model'?'This is one model version. Company-wide agreements are not automatically attributed to it.':'A connection establishes a relationship. An effect requires its own evidence and mechanism.'}</p></div><h3>Inspect a connection</h3>${connectionList(links)}<div class="unknown-copy">${event.unknown}</div>`;
  } else {
    const before=state.snapshot==='before';
    $('#evidenceContent').innerHTML=`<span class="evidence-status ${event.className}">${event.label==='Reviewed'?'✓ REVIEWED SAMPLE':event.label==='Reported'?'◌ REPORTED · CONFIRMATION PENDING':'↶ CORRECTION RECORDED'}</span><h2>${before?'The earlier record.':'What we can establish.'}</h2><p>${before?'Compare the recorded state without rewriting its history. A missing earlier edge means “not recorded,” not “did not exist.”':'One update, with a clear boundary between the recorded change and its possible consequences.'}</p><div class="fact-card ${event.className}"><p class="eyebrow">${before?'Earlier snapshot':'The recorded change'}</p><p>${before?event.earlier+'.':event.fact}</p></div><div class="implication"><h3>${event.id==='correction'?'What this does not establish':'Possible downstream effect'}</h3><span class="possible-label">${event.id==='correction'?'Evidence state changed':'◇ Not an observed outcome'}</span><p>${event.possible}</p></div><h3>Connections in this view</h3>${connectionList()}<div class="unknown-copy"><strong>Still unknown</strong><br>${event.unknown}</div>${sourceCard(event,event)}`;
  }
}

function render() {
  const event=activeEvent();
  $('#eventCategory').textContent=`${event.category} / ${event.sourceId}`;
  $('#eventHeadline').textContent=event.headline;
  $('#eventSummary').textContent=event.summary;
  const following=state.followed.has(event.root);
  $('#followButton').textContent=`${following?'✓ Following':'+ Follow'} ${entities[event.root].name}`;
  $('#followButton').setAttribute('aria-pressed',String(following));
  $('#followButton').title='This design prototype saves followed entities only on this device.';
  document.querySelectorAll('[data-lens]').forEach(button=>button.setAttribute('aria-pressed',String(state.lens===button.dataset.lens)));
  document.querySelectorAll('[data-snapshot]').forEach(button=>button.setAttribute('aria-pressed',String(state.snapshot===button.dataset.snapshot)));
  $('#effectsToggle').setAttribute('aria-pressed',String(state.effects));
  $('#effectsToggle').disabled=state.snapshot==='before'||state.lens!==event.lens||event.id==='correction';
  $('#effectsToggle').title=event.id==='correction'?'This correction changes the evidence record; no downstream effect is assessed.':`Inspect possible effects in the updated ${event.lens} record.`;
  $('#stageContext').textContent={serving:'Model access & application use',training:'Model creation & training inputs',hardware:'Manufacturing & hardware supply'}[state.lens];
  $('#stageScope').textContent=state.lens==='hardware'?'Company and product scope. No model allocation implied.':state.lens==='training'?'Unknown infrastructure remains unknown.':'Arrows describe relationships, not automatic effects.';
  $('#unknownNote').hidden=state.lens!=='training'||(state.event==='correction'&&state.snapshot==='before');
  $('#changeSummary').textContent=state.snapshot==='after'?event.change:event.earlier;
  $('#snapshotNote').textContent=state.snapshot==='after'?'Record changes are not measured business outcomes.':'Missing from a record ≠ evidence of absence.';
  renderFeed();renderEvidence();graph?.update();
}

function selectConnection(id) {
  state.selection={kind:'connection',id};renderEvidence();graph?.highlight();showPanel('evidence',true);
}
function selectNode(id) {
  state.selection={kind:'node',id};renderEvidence();graph?.highlight();showPanel('evidence',true);
}
document.addEventListener('click',event=>{
  const button=event.target.closest('button');if(!button)return;
  if(button.dataset.event){state.event=button.dataset.event;state.lens=activeEvent().lens;state.snapshot='after';state.effects=false;state.selection=null;render();graph?.reset();showPanel('graph',true);announce(activeEvent().title);}
  else if(button.dataset.feed){state.feed=button.dataset.feed;renderFeed();}
  else if(button.dataset.lens){state.lens=button.dataset.lens;state.effects=false;state.selection=null;render();graph?.reset();}
  else if(button.dataset.snapshot){state.snapshot=button.dataset.snapshot;state.selection=null;render();announce($('#changeSummary').textContent);}
  else if(button.dataset.connection)selectConnection(button.dataset.connection);
  else if(button.dataset.node)selectNode(button.dataset.node);
  else if(button.dataset.mobilePanel)showPanel(button.dataset.mobilePanel,true);
  else if(button.hasAttribute('data-back-event')){state.selection=null;renderEvidence();graph?.highlight();}
});
$('#eventSearch').addEventListener('input',event=>{state.query=event.target.value.toLowerCase().trim();renderFeed();});
$('#followButton').onclick=()=>{const root=activeEvent().root;state.followed.has(root)?state.followed.delete(root):state.followed.add(root);try{localStorage.setItem('aimap-update-design-follows',JSON.stringify([...state.followed]));}catch{}render();announce(`${state.followed.has(root)?'Following':'Unfollowed'} ${entities[root].name}. Saved only on this device in this prototype.`);};
$('#effectsToggle').onclick=()=>{state.effects=!state.effects;state.selection=null;render();announce(state.effects?'Possible effects shown with their assumptions. No outcome is established.':'Possible effects hidden.');};
$('#backToGraph').onclick=()=>showPanel('graph',true);

class EventGraph {
  constructor() {
    this.mount=$('#graphCanvas');this.stage=$('#graphStage');this.nodes=new Map();this.edgeObjects=[];this.rendered=[];
    this.scene=new THREE.Scene();this.camera=new THREE.PerspectiveCamera(37,1,.1,200);
    this.renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));this.renderer.setClearColor(0x0b1318,0);
    this.mount.append(this.renderer.domElement);this.controls=new OrbitControls(this.camera,this.renderer.domElement);
    Object.assign(this.controls,{enableDamping:true,dampingFactor:.12,enablePan:false,minDistance:20,maxDistance:70,minPolarAngle:.65,maxPolarAngle:2.05,rotateSpeed:.5,zoomSpeed:.7,autoRotate:false});
    this.scene.add(new THREE.HemisphereLight(0xe4f3e8,0x23343b,2));
    const light=new THREE.DirectionalLight(0xffedce,3);light.position.set(-5,12,15);this.scene.add(light);
    const grid=new THREE.GridHelper(50,20,0x334e51,0x1c3238);grid.position.y=-8;grid.material.transparent=true;grid.material.opacity=.24;this.scene.add(grid);
    const points=[];for(let i=0;i<80;i++)points.push(Math.sin(i*2.4)*22,Math.cos(i*1.7)*14,-8-Math.abs(Math.sin(i))*10);
    const starGeometry=new THREE.BufferGeometry();starGeometry.setAttribute('position',new THREE.Float32BufferAttribute(points,3));
    this.scene.add(new THREE.Points(starGeometry,new THREE.PointsMaterial({color:0x8fa9ad,size:.07,transparent:true,opacity:.25})));
    for(const [id,entity] of Object.entries(entities)) {
      const geometry=entity.kind==='organization'?new THREE.IcosahedronGeometry(.64,2):entity.kind==='hardware'?new THREE.BoxGeometry(1,1,1):new THREE.OctahedronGeometry(entity.kind==='model'?.95:.65);
      const mesh=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color:entity.color,metalness:.3,roughness:.4,emissive:entity.color,emissiveIntensity:.16}));mesh.userData={kind:'node',id};
      const ring=new THREE.Mesh(new THREE.TorusGeometry(entity.kind==='model'?1.3:.95,.018,6,60),new THREE.MeshBasicMaterial({color:entity.color,transparent:true,opacity:.45}));ring.rotation.x=Math.PI/2.3;ring.rotation.y=.3;mesh.add(ring);
      this.scene.add(mesh);this.nodes.set(id,mesh);
    }
    this.edgeGroup=new THREE.Group();this.scene.add(this.edgeGroup);
    this.raycaster=new THREE.Raycaster();this.raycaster.params.Line.threshold=.35;this.pointer=new THREE.Vector2();
    const taps=new TapGesture();let mouseDown=null;
    this.renderer.domElement.addEventListener('pointerdown',event=>{if(event.pointerType==='touch')taps.down(event);else mouseDown={x:event.clientX,y:event.clientY};});
    this.renderer.domElement.addEventListener('pointermove',event=>{if(event.pointerType==='touch')taps.move(event);});
    this.renderer.domElement.addEventListener('pointercancel',event=>taps.cancel(event));
    this.renderer.domElement.addEventListener('pointerup',event=>{
      const tapped=event.pointerType==='touch'?taps.up(event):mouseDown&&Math.hypot(event.clientX-mouseDown.x,event.clientY-mouseDown.y)<5;
      if(!tapped)return;const rect=this.renderer.domElement.getBoundingClientRect();this.pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);this.raycaster.setFromCamera(this.pointer,this.camera);
      const objects=[...[...this.nodes.values()].filter(node=>node.visible),...this.edgeObjects];const hit=this.raycaster.intersectObjects(objects,false)[0];
      if(hit){const data=hit.object.userData;data.kind==='node'?selectNode(data.id):selectConnection(data.id);}
    });
    new ResizeObserver(()=>this.resize()).observe(this.stage);
    this.reset();this.update();this.animate();
  }
  positions() {
    if(mobile()) {
      if(state.lens==='hardware')return {foundry:[-7,4,-2],chip:[7,4,2],cloud:[0,-2,-1]};
      if(state.lens==='training')return {lab:[-6,6,0],model:[6,6,1],...(state.event==='correction'&&state.snapshot==='before'?{chip:[0,-3,-1]}:{})};
      return {lab:[-7,4,-1],model:[-6,-2,1.5],cloud:[7,4,0],app:[7,-2,-1]};
    }
    if(state.lens==='hardware')return {foundry:[-7,4,-2],chip:[0,0,2],cloud:[7,-4,-1]};
    if(state.lens==='training')return {lab:[-6,4,0],model:[4,2,1],...(state.event==='correction'&&state.snapshot==='before'?{chip:[4,-4,-2]}:{})};
    return {lab:[-7,4,-1],model:[-1,0,1.5],cloud:[7,3.5,0],app:[4,-4.5,-2]};
  }
  update() {
    const positions=this.positions();
    this.nodes.forEach((mesh,id)=>{mesh.visible=Boolean(positions[id]);if(positions[id])mesh.position.set(...positions[id]);});
    this.edgeGroup.traverse(object=>{object.geometry?.dispose();if(object.material)object.material.dispose();});this.edgeGroup.clear();this.edgeObjects=[];
    this.rendered=visibleRecords();
    for(const record of this.rendered) {
      const start=this.nodes.get(record.from).position.clone(),end=this.nodes.get(record.to).position.clone();
      const mid=start.clone().lerp(end,.5);mid.z+=record.status==='possible'?4:2;mid.y+=record.status==='possible'?-2:.7;
      const curve=new THREE.QuadraticBezierCurve3(start,mid,end),color=record.status==='possible'?0xe8b96e:record.status==='reported'?0xc7af84:0xa8d9c8;
      const material=record.status==='documented'?new THREE.LineBasicMaterial({color,transparent:true,opacity:.7}):new THREE.LineDashedMaterial({color,transparent:true,opacity:.7,dashSize:record.status==='possible'?.12:.5,gapSize:.23});
      if(record.id==='serves'&&state.event==='availability'&&state.snapshot==='after')material.color.setHex(0xd5fbe5);
      const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(64)),material);line.computeLineDistances();line.userData={kind:'connection',id:record.id};this.edgeGroup.add(line);this.edgeObjects.push(line);
      const arrow=new THREE.Mesh(new THREE.ConeGeometry(.13,.4,8),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.9}));arrow.position.copy(curve.getPoint(.7));arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),curve.getTangent(.7).normalize());this.edgeGroup.add(arrow);
    }
    $('#nodeLabels').innerHTML=Object.keys(positions).map(id=>{const entity=entities[id],changed=state.snapshot==='after'&&(state.event==='availability'&&['model','cloud'].includes(id)||state.event==='delivery'&&id==='chip'||state.event==='correction'&&id==='model');return `<button class="graph-node ${changed?'changed':''}" data-node="${id}" aria-label="Inspect ${entity.name}"><strong>${entity.name}</strong><small>${entity.role}</small>${changed?`<span class="node-badge" aria-hidden="true">${state.event==='correction'?'↶':state.event==='delivery'?'Δ':'+'}</span>`:''}</button>`;}).join('');
    this.highlight();this.resize();
  }
  highlight() {
    const selection=state.selection;
    document.querySelectorAll('.graph-node').forEach(button=>button.classList.toggle('selected',selection?.kind==='node'&&selection.id===button.dataset.node));
    this.edgeObjects.forEach(line=>line.material.opacity=selection?.kind==='connection'?(selection.id===line.userData.id?1:.23):state.event==='availability'&&state.snapshot==='after'?(line.userData.id==='serves'?.95:.42):.7);
    this.nodes.forEach((node,id)=>{node.material.emissiveIntensity=selection?.kind==='node'&&selection.id===id ? .45 : .16;});
  }
  resize() {
    const rect=this.stage.getBoundingClientRect();if(!rect.width||!rect.height)return;
    this.camera.aspect=rect.width/rect.height;this.camera.updateProjectionMatrix();this.renderer.setSize(rect.width,rect.height,false);
    if(this.lastMobile!==mobile()){this.lastMobile=mobile();this.reset();this.update();return;}
    this.placeLabels();
  }
  reset() {this.camera.position.set(mobile()?4:9,mobile()?6:8,mobile()?40:36);this.controls.target.set(0,.3,0);this.controls.update();this.placeLabels();}
  placeLabels() {
    const rect=this.stage.getBoundingClientRect();if(!rect.width)return;
    const point=new THREE.Vector3();
    document.querySelectorAll('.graph-node').forEach(button=>{
      point.copy(this.nodes.get(button.dataset.node).position).project(this.camera);
      const x=(point.x*.5+.5)*rect.width,y=(-point.y*.5+.5)*rect.height;
      button.style.left=`${Math.max(button.offsetWidth/2+6,Math.min(rect.width-button.offsetWidth/2-6,x))}px`;
      button.style.top=`${Math.max(65,Math.min(rect.height-92,y+18))}px`;
      button.style.visibility=point.z>1?'hidden':'visible';
    });
  }
  animate() {
    requestAnimationFrame(()=>this.animate());if(document.hidden||mobile()&&document.body.dataset.panel!=='graph')return;
    const now=performance.now();if(now-(this.lastFrame||0)<1000/30)return;this.lastFrame=now;
    this.controls.update();this.placeLabels();this.renderer.render(this.scene,this.camera);
  }
}

render();showPanel('graph');
try {graph=new EventGraph();$('#resetCamera').onclick=()=>graph.reset();} catch(error) {
  $('#graphCanvas').replaceChildren();$('.graph-fallback').hidden=false;$('#resetCamera').hidden=true;console.warn('Concept uses the connection list because WebGL is unavailable.',error);
}
window.addEventListener('resize',()=>graph?.resize());
document.documentElement.dataset.ready='true';
