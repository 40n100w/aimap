import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TapGesture } from './tap-gesture.js';
import { isMobileLayout } from './mobile-layout.js';

const colors = {organization:0xd9bd94, model:0xc4b5e5, hardware:0xe0c594, software:0x92b9cf};

// This graph renders only explicitly scoped, reviewed records. It never derives
// model links from company links or traverses the atlas's illustrative paths.
export class UpdatesGraph {
  constructor(mount, labels, entities, onSelect, onUnavailable) {
    Object.assign(this, {mount, labels, entities, onSelect, onUnavailable, nodes:new Map(), edges:[], active:false});
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(38,1,.1,200);
    this.renderer = new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
    mount.append(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera,this.renderer.domElement);
    Object.assign(this.controls,{enableDamping:true,dampingFactor:.12,enablePan:false,minDistance:22,maxDistance:65,minPolarAngle:.6,maxPolarAngle:2.1,rotateSpeed:.5,zoomSpeed:.7});
    this.scene.add(new THREE.HemisphereLight(0xe4f3e8,0x23343b,2));
    const light = new THREE.DirectionalLight(0xffedce,3); light.position.set(-5,12,15); this.scene.add(light);
    const grid = new THREE.GridHelper(45,18,0x334e51,0x1c3238); grid.position.y=-9; grid.material.transparent=true; grid.material.opacity=.22; this.scene.add(grid);
    this.edgeGroup = new THREE.Group(); this.scene.add(this.edgeGroup);
    this.raycaster = new THREE.Raycaster(); this.raycaster.params.Line.threshold=.25;
    const taps = new TapGesture(); let down;
    this.renderer.domElement.addEventListener('pointerdown', event => { if(event.pointerType==='touch') taps.down(event); else down={x:event.clientX,y:event.clientY}; });
    this.renderer.domElement.addEventListener('pointermove', event => { if(event.pointerType==='touch') taps.move(event); });
    this.renderer.domElement.addEventListener('pointercancel', event => { taps.cancel(event); down=null; });
    this.renderer.domElement.addEventListener('pointerup', event => {
      const tapped=event.pointerType==='touch'?taps.up(event):down&&Math.hypot(event.clientX-down.x,event.clientY-down.y)<5; down=null;
      if(!tapped) return;
      const rect=mount.getBoundingClientRect();
      this.raycaster.setFromCamera(new THREE.Vector2((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1),this.camera);
      const hit=this.raycaster.intersectObjects([...this.nodes.values(),...this.edges],false)[0];
      if(hit) onSelect(hit.object.userData.kind,hit.object.userData.id);
    });
    this.renderer.domElement.addEventListener('webglcontextlost', event => {
      event.preventDefault(); this.active=false; this.lost=true; onUnavailable();
    });
    this.observer=new ResizeObserver(()=>this.resize()); this.observer.observe(mount);
    this.reset(); this.animate();
  }
  clear(group) {
    group.traverse(object=>{object.geometry?.dispose();object.material?.dispose();}); group.clear();
  }
  update(graph, root, changes) {
    this.graph=graph; this.root=root; this.changes=changes;
    for(const node of this.nodes.values()) {this.clear(node);this.scene.remove(node);}
    this.nodes.clear(); this.clear(this.edgeGroup); this.edges=[];
    this.labels.replaceChildren();
    const changed = new Set(changes.flatMap(change=>[change.version.subject,change.version.object]).filter(Boolean));
    for(const id of graph.nodes) {
      const entity=this.entities.get(id), kind=entity.kind, color=colors[kind];
      const geometry=kind==='organization'?new THREE.IcosahedronGeometry(.65,2):kind==='hardware'?new THREE.BoxGeometry(1,1,1):new THREE.OctahedronGeometry(id === root ? .95 : .65);
      const mesh=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color,metalness:.3,roughness:.4,emissive:color,emissiveIntensity:.16}));
      mesh.userData={kind:'node',id};
      const ring=new THREE.Mesh(new THREE.TorusGeometry(id===root?1.3:.95,.02,6,60),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.5}));
      ring.rotation.x=Math.PI/2.4; mesh.add(ring); this.scene.add(mesh); this.nodes.set(id,mesh);
      const button=document.createElement('button');button.type='button';button.className=`up-node${changed.has(id)?' changed':''}`;button.dataset.upNode=id;
      const title=document.createElement('strong'),role=document.createElement('small');title.textContent=entity.name;role.textContent=entity.role;
      button.append(title,role);button.setAttribute('aria-label',`Inspect ${entity.name}`);
      if(changed.has(id)){const badge=document.createElement('span');badge.className='up-node-badge';badge.textContent='Δ';badge.setAttribute('aria-hidden','true');button.append(badge);}
      this.labels.append(button);
    }
    this.layout(); this.highlight(null); this.resize();
  }
  layout() {
    if(!this.graph)return;
    const others=this.graph.nodes.filter(id=>id!==this.root);
    this.nodes.get(this.root).position.set(0,0,1);
    const positions=others.length===1?[[-7,4,-1]]:others.length===2?[[-7,4,-1],[7,-3,0]]:[[-7,5,-1],[7,5,0],[-7,-5,0],[7,-5,-1],[0,8,-2],[0,-8,-2]];
    others.forEach((id,index)=>this.nodes.get(id).position.set(...(positions[index]||[Math.cos(index)*9,Math.sin(index)*8,-2])));
    this.clear(this.edgeGroup); this.edges=[];
    const records=[...this.graph.claims.filter(claim=>claim.object).map(claim=>({...claim,kind:'claim'})),...this.graph.assessments.map(item=>({...item,kind:'effect'}))];
    for(const record of records) {
      const start=this.nodes.get(record.subject).position.clone(),end=this.nodes.get(record.object).position.clone(),mid=start.clone().lerp(end,.5);
      const potential=record.kind==='effect';mid.z+=potential?4:2;mid.y+=potential?-1.8:.6;
      const curve=new THREE.QuadraticBezierCurve3(start,mid,end),color=potential?0xe8b96e:record.basis==='primary'?0xa8d9c8:0xc7af84;
      const material=!potential&&record.basis==='primary'?new THREE.LineBasicMaterial({color,transparent:true,opacity:.72}):new THREE.LineDashedMaterial({color,transparent:true,opacity:.75,dashSize:potential ? .12 : .5,gapSize:.23});
      const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(64)),material);line.computeLineDistances();line.userData={kind:record.kind,id:record.id};
      this.edgeGroup.add(line);this.edges.push(line);
      const arrow=new THREE.Mesh(new THREE.ConeGeometry(.14,.45,8),new THREE.MeshBasicMaterial({color}));arrow.position.copy(curve.getPoint(.75));arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),curve.getTangent(.75).normalize());this.edgeGroup.add(arrow);
    }
  }
  highlight(selection) {
    this.selection=selection;
    for(const button of this.labels.children) button.classList.toggle('selected',selection?.kind==='node'&&selection.id===button.dataset.upNode);
    for(const line of this.edges) line.material.opacity=selection&&selection.kind!=='node'?(selection.id===line.userData.id?1:.25):.72;
    this.nodes.forEach((mesh,id)=>mesh.material.emissiveIntensity=selection?.id === id ? .5 : .16);
  }
  setActive(active) {this.active=active&&!this.lost;if(this.active)this.resize();}
  resize() {
    const {width,height}=this.mount.getBoundingClientRect();if(!width||!height)return;
    this.camera.aspect=width/height;this.camera.updateProjectionMatrix();this.renderer.setSize(width,height,false);
    if(this.mobile!==isMobileLayout()){this.mobile=isMobileLayout();this.reset();}
    this.placeLabels();
  }
  reset() {
    this.camera.position.set(3,5,40);this.controls.target.set(0,0,0);this.controls.update();this.placeLabels();
  }
  zoom(factor) {this.camera.position.sub(this.controls.target).multiplyScalar(factor).clampLength(22,65).add(this.controls.target);this.controls.update();}
  placeLabels() {
    const rect=this.mount.getBoundingClientRect();if(!rect.width)return;
    const occupied=[],point=new THREE.Vector3();
    for(const button of this.labels.children) {
      point.copy(this.nodes.get(button.dataset.upNode).position).project(this.camera);
      const width=button.offsetWidth,height=button.offsetHeight;
      const left=Math.max(width/2+8,Math.min(rect.width-width/2-8,(point.x*.5+.5)*rect.width));
      let top=Math.max(36,Math.min(rect.height-height-12,(-point.y*.5+.5)*rect.height+19));
      for(let attempt=0;attempt<10;attempt++) {
        const collision=occupied.find(box=>Math.abs(left-box.left)<(width+box.width)/2+5&&top<box.top+box.height+5&&top+height+5>box.top);
        if(!collision)break;
        top=collision.top+collision.height+7;
        if(top+height>rect.height-5)top=Math.max(4,collision.top-height-7);
      }
      button.style.left=`${left}px`;button.style.top=`${top}px`;
      occupied.push({left,top,width,height});
    }
  }
  animate() {
    requestAnimationFrame(()=>this.animate());
    const now=performance.now();
    if(!this.active||document.hidden||!this.mount.clientWidth||now-(this.lastFrame||0)<1000/30)return;
    this.lastFrame=now;this.controls.update();this.placeLabels();this.renderer.render(this.scene,this.camera);
  }
}
