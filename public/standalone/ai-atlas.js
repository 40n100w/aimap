(function(){"use strict";function bl(o){const t=[];let e=[],n="",s=!1;for(let h=0;h<o.length;h+=1){const u=o[h];s?u==='"'&&o[h+1]==='"'?(n+='"',h+=1):u==='"'?s=!1:n+=u:u==='"'?s=!0:u===","?(e.push(n),n=""):u===`
`?(e.push(n),t.push(e),e=[],n=""):u!=="\r"&&(n+=u)}(n||e.length)&&(e.push(n),t.push(e));const[a=[],...c]=t;return c.filter(h=>h.some(Boolean)).map(h=>Object.fromEntries(a.map((u,d)=>[u,h[d]??""])))}const Fi=o=>o===""?null:Number(o),On=o=>o?JSON.parse(o):[];let Zs;function tu(){return Zs||(Zs=new Promise(o=>{const t=document.querySelector("#scene"),e=document.createElement("div");e.className="local-data-picker",e.innerHTML='<strong>Load the atlas data folder</strong><span>Drag the complete <b>data</b> folder onto this box, or use the folder picker if your browser supports it.</span><button type="button">Choose “data” folder</button><input type="file" multiple accept=".csv,text/csv"><small>No files are uploaded. They remain on this machine.</small>';const n=e.querySelector("button"),s=e.querySelector("input");s.setAttribute("webkitdirectory",""),s.setAttribute("directory",""),s.webkitdirectory=!0;const a=u=>{e.remove(),o(new Map(u.filter(d=>d.name.endsWith(".csv")).map(d=>[d.name,d])))},c=u=>new Promise((d,p)=>u.file(d,p)),h=async u=>{const d=u.createReader(),p=[];for(;;){const _=await new Promise((m,y)=>d.readEntries(m,y));if(!_.length)break;for(const m of _)m.isFile?p.push(await c(m)):m.isDirectory&&p.push(...await h(m))}return p};e.addEventListener("dragover",u=>{u.preventDefault(),e.classList.add("is-dragging")}),e.addEventListener("dragleave",()=>e.classList.remove("is-dragging")),e.addEventListener("drop",async u=>{u.preventDefault(),e.classList.remove("is-dragging");const d=[...u.dataTransfer.items].map(_=>_.webkitGetAsEntry?.()).filter(Boolean),p=[];for(const _ of d)_.isDirectory?p.push(...await h(_)):_.isFile&&p.push(await c(_));p.length&&a(p)}),n.addEventListener("click",async()=>{if(!window.showDirectoryPicker){s.click();return}try{const u=await window.showDirectoryPicker({mode:"read"}),d=[];for await(const p of u.values())p.kind==="file"&&d.push(await p.getFile());a(d)}catch(u){if(u.name!=="AbortError")throw u}}),s.addEventListener("change",()=>{a([...s.files])},{once:!0}),t.append(e)}),Zs)}async function El(o){if(location.protocol==="file:"){const n=(await tu()).get(o);if(!n)throw new Error(`${o} was not found in the selected folder`);return bl(await n.text())}const t=await fetch(new URL(`data/${o}`,document.baseURI),{cache:"no-store"});if(!t.ok)throw new Error(`Could not load data/${o} (${t.status})`);return bl(await t.text())}let eo="",Me=[],io=[],qs=[],vs={},no=[],Tl={},wl=[];async function eu(){const[o,t,e,n,s,a,c]=await Promise.all(["settings.csv","layers.csv","entities.csv","relationships.csv","aliases.csv","journeys.csv","representative-paths.csv"].map(El));eo=Object.fromEntries(o.map(u=>[u.key,u.value])).data_updated,Me=t.map(u=>({...u,y:Number(u.y)})),io=e.map(u=>({...u,categories:On(u.categories),products:On(u.products),profileSources:On(u.profileSources),importanceLevel:Number(u.importanceLevel),positionIndex:Number(u.positionIndex),timelineYear:Fi(u.timelineYear),website:u.website||null})),qs=n.map(u=>({...u,sourceUrl:u.sourceUrl||void 0,activeFrom:Fi(u.activeFrom),activeTo:Fi(u.activeTo)})),vs=Object.fromEntries(s.map(u=>[u.alias,u.entityId])),no=a.map(u=>({...u,nodes:On(u.nodes)})),Tl=Object.fromEntries(c.map(u=>[u.entityId,On(u.nodes)])),wl=[...new Set(qs.map(u=>u.type))].sort()}const so="179",Fn={ROTATE:0,DOLLY:1,PAN:2},Bn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iu=0,Al=1,nu=2,Pl=1,su=2,Bi=3,Ki=0,Qe=1,wi=2,Ji=0,zn=1,Cl=2,Rl=3,Ll=4,ru=5,mn=100,ou=101,au=102,lu=103,cu=104,hu=200,uu=201,du=202,fu=203,ro=204,oo=205,pu=206,mu=207,_u=208,gu=209,vu=210,yu=211,xu=212,Mu=213,Su=214,ao=0,lo=1,co=2,kn=3,ho=4,uo=5,fo=6,po=7,Dl=0,bu=1,Eu=2,Qi=0,Tu=1,wu=2,Au=3,Pu=4,Cu=5,Ru=6,Lu=7,Il=300,Hn=301,Gn=302,mo=303,_o=304,Ys=306,go=1e3,_n=1001,vo=1002,gi=1003,Du=1004,js=1005,Ai=1006,yo=1007,gn=1008,Pi=1009,Nl=1010,Ul=1011,ys=1012,xo=1013,vn=1014,zi=1015,xs=1016,Mo=1017,So=1018,Ms=1020,Ol=35902,Fl=1021,Bl=1022,vi=1023,Ss=1026,bs=1027,zl=1028,bo=1029,kl=1030,Eo=1031,To=1033,Ks=33776,Js=33777,Qs=33778,tr=33779,wo=35840,Ao=35841,Po=35842,Co=35843,Ro=36196,Lo=37492,Do=37496,Io=37808,No=37809,Uo=37810,Oo=37811,Fo=37812,Bo=37813,zo=37814,ko=37815,Ho=37816,Go=37817,Vo=37818,Wo=37819,$o=37820,Xo=37821,er=36492,Zo=36494,qo=36495,Hl=36283,Yo=36284,jo=36285,Ko=36286,Iu=3200,Nu=3201,Gl=0,Uu=1,tn="",ri="srgb",Vn="srgb-linear",ir="linear",Se="srgb",Wn=7680,Vl=519,Ou=512,Fu=513,Bu=514,Wl=515,zu=516,ku=517,Hu=518,Gu=519,$l=35044,Xl="300 es",Ci=2e3,nr=2001;class yn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sr=Math.PI/180,Jo=180/Math.PI;function Es(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[o&255]+Ze[o>>8&255]+Ze[o>>16&255]+Ze[o>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function se(o,t,e){return Math.max(t,Math.min(e,o))}function Vu(o,t){return(o%t+t)%t}function Qo(o,t,e){return(1-e)*o+e*t}function Ts(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ti(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Wu={DEG2RAD:sr};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,c=this.y-t.y;return this.x=a*n-c*s+t.x,this.y=a*s+c*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,c,h){let u=n[s+0],d=n[s+1],p=n[s+2],_=n[s+3];const m=a[c+0],y=a[c+1],M=a[c+2],S=a[c+3];if(h===0){t[e+0]=u,t[e+1]=d,t[e+2]=p,t[e+3]=_;return}if(h===1){t[e+0]=m,t[e+1]=y,t[e+2]=M,t[e+3]=S;return}if(_!==S||u!==m||d!==y||p!==M){let x=1-h;const g=u*m+d*y+p*M+_*S,R=g>=0?1:-1,C=1-g*g;if(C>Number.EPSILON){const O=Math.sqrt(C),U=Math.atan2(O,g*R);x=Math.sin(x*U)/O,h=Math.sin(h*U)/O}const T=h*R;if(u=u*x+m*T,d=d*x+y*T,p=p*x+M*T,_=_*x+S*T,x===1-h){const O=1/Math.sqrt(u*u+d*d+p*p+_*_);u*=O,d*=O,p*=O,_*=O}}t[e]=u,t[e+1]=d,t[e+2]=p,t[e+3]=_}static multiplyQuaternionsFlat(t,e,n,s,a,c){const h=n[s],u=n[s+1],d=n[s+2],p=n[s+3],_=a[c],m=a[c+1],y=a[c+2],M=a[c+3];return t[e]=h*M+p*_+u*y-d*m,t[e+1]=u*M+p*m+d*_-h*y,t[e+2]=d*M+p*y+h*m-u*_,t[e+3]=p*M-h*_-u*m-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,c=t._order,h=Math.cos,u=Math.sin,d=h(n/2),p=h(s/2),_=h(a/2),m=u(n/2),y=u(s/2),M=u(a/2);switch(c){case"XYZ":this._x=m*p*_+d*y*M,this._y=d*y*_-m*p*M,this._z=d*p*M+m*y*_,this._w=d*p*_-m*y*M;break;case"YXZ":this._x=m*p*_+d*y*M,this._y=d*y*_-m*p*M,this._z=d*p*M-m*y*_,this._w=d*p*_+m*y*M;break;case"ZXY":this._x=m*p*_-d*y*M,this._y=d*y*_+m*p*M,this._z=d*p*M+m*y*_,this._w=d*p*_-m*y*M;break;case"ZYX":this._x=m*p*_-d*y*M,this._y=d*y*_+m*p*M,this._z=d*p*M-m*y*_,this._w=d*p*_+m*y*M;break;case"YZX":this._x=m*p*_+d*y*M,this._y=d*y*_+m*p*M,this._z=d*p*M-m*y*_,this._w=d*p*_-m*y*M;break;case"XZY":this._x=m*p*_-d*y*M,this._y=d*y*_-m*p*M,this._z=d*p*M+m*y*_,this._w=d*p*_+m*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],c=e[1],h=e[5],u=e[9],d=e[2],p=e[6],_=e[10],m=n+h+_;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(p-u)*y,this._y=(a-d)*y,this._z=(c-s)*y}else if(n>h&&n>_){const y=2*Math.sqrt(1+n-h-_);this._w=(p-u)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(a+d)/y}else if(h>_){const y=2*Math.sqrt(1+h-n-_);this._w=(a-d)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(u+p)/y}else{const y=2*Math.sqrt(1+_-n-h);this._w=(c-s)/y,this._x=(a+d)/y,this._y=(u+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,c=t._w,h=e._x,u=e._y,d=e._z,p=e._w;return this._x=n*p+c*h+s*d-a*u,this._y=s*p+c*u+a*h-n*d,this._z=a*p+c*d+n*u-s*h,this._w=c*p-n*h-s*u-a*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,c=this._w;let h=c*t._w+n*t._x+s*t._y+a*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=c,this._x=n,this._y=s,this._z=a,this;const u=1-h*h;if(u<=Number.EPSILON){const y=1-e;return this._w=y*c+e*this._w,this._x=y*n+e*this._x,this._y=y*s+e*this._y,this._z=y*a+e*this._z,this.normalize(),this}const d=Math.sqrt(u),p=Math.atan2(d,h),_=Math.sin((1-e)*p)/d,m=Math.sin(e*p)/d;return this._w=c*_+this._w*m,this._x=n*_+this._x*m,this._y=s*_+this._y*m,this._z=a*_+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,c=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*c,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*c,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*c,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,c=t.y,h=t.z,u=t.w,d=2*(c*s-h*n),p=2*(h*e-a*s),_=2*(a*n-c*e);return this.x=e+u*d+c*_-h*p,this.y=n+u*p+h*d-a*_,this.z=s+u*_+a*p-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,c=e.x,h=e.y,u=e.z;return this.x=s*u-a*h,this.y=a*c-n*u,this.z=n*h-s*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new B,Zl=new xn;class ee{constructor(t,e,n,s,a,c,h,u,d){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,c,h,u,d)}set(t,e,n,s,a,c,h,u,d){const p=this.elements;return p[0]=t,p[1]=s,p[2]=h,p[3]=e,p[4]=a,p[5]=u,p[6]=n,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,c=n[0],h=n[3],u=n[6],d=n[1],p=n[4],_=n[7],m=n[2],y=n[5],M=n[8],S=s[0],x=s[3],g=s[6],R=s[1],C=s[4],T=s[7],O=s[2],U=s[5],D=s[8];return a[0]=c*S+h*R+u*O,a[3]=c*x+h*C+u*U,a[6]=c*g+h*T+u*D,a[1]=d*S+p*R+_*O,a[4]=d*x+p*C+_*U,a[7]=d*g+p*T+_*D,a[2]=m*S+y*R+M*O,a[5]=m*x+y*C+M*U,a[8]=m*g+y*T+M*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],c=t[4],h=t[5],u=t[6],d=t[7],p=t[8];return e*c*p-e*h*d-n*a*p+n*h*u+s*a*d-s*c*u}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],c=t[4],h=t[5],u=t[6],d=t[7],p=t[8],_=p*c-h*d,m=h*u-p*a,y=d*a-c*u,M=e*_+n*m+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=_*S,t[1]=(s*d-p*n)*S,t[2]=(h*n-s*c)*S,t[3]=m*S,t[4]=(p*e-s*u)*S,t[5]=(s*a-h*e)*S,t[6]=y*S,t[7]=(n*u-d*e)*S,t[8]=(c*e-n*a)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,c,h){const u=Math.cos(a),d=Math.sin(a);return this.set(n*u,n*d,-n*(u*c+d*h)+c+t,-s*d,s*u,-s*(-d*c+u*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(ea.makeScale(t,e)),this}rotate(t){return this.premultiply(ea.makeRotation(-t)),this}translate(t,e){return this.premultiply(ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new ee;function ql(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function rr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function $u(){const o=rr("canvas");return o.style.display="block",o}const Yl={};function $n(o){o in Yl||(Yl[o]=!0,console.warn(o))}function Xu(o,t,e){return new Promise(function(n,s){function a(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}const jl=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zu(){const o={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Se&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Se&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===tn?ir:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return $n("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return $n("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return o.define({[Vn]:{primaries:t,whitePoint:n,transfer:ir,toXYZ:jl,fromXYZ:Kl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:jl,fromXYZ:Kl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const _e=Zu();function ki(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Xn(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Zn;class qu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zn===void 0&&(Zn=rr("canvas")),Zn.width=t.width,Zn.height=t.height;const s=Zn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Zn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=ki(a[c]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yu=0;class ia{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,h=s.length;c<h;c++)s[c].isDataTexture?a.push(na(s[c].image)):a.push(na(s[c]))}else a=na(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function na(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?qu.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ju=0;const sa=new B;class ei extends yn{constructor(t=ei.DEFAULT_IMAGE,e=ei.DEFAULT_MAPPING,n=_n,s=_n,a=Ai,c=gn,h=vi,u=Pi,d=ei.DEFAULT_ANISOTROPY,p=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Es(),this.name="",this.source=new ia(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=u,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case go:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case go:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null,ei.DEFAULT_MAPPING=Il,ei.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,c=t.elements;return this.x=c[0]*e+c[4]*n+c[8]*s+c[12]*a,this.y=c[1]*e+c[5]*n+c[9]*s+c[13]*a,this.z=c[2]*e+c[6]*n+c[10]*s+c[14]*a,this.w=c[3]*e+c[7]*n+c[11]*s+c[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const u=t.elements,d=u[0],p=u[4],_=u[8],m=u[1],y=u[5],M=u[9],S=u[2],x=u[6],g=u[10];if(Math.abs(p-m)<.01&&Math.abs(_-S)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+m)<.1&&Math.abs(_+S)<.1&&Math.abs(M+x)<.1&&Math.abs(d+y+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(d+1)/2,T=(y+1)/2,O=(g+1)/2,U=(p+m)/4,D=(_+S)/4,k=(M+x)/4;return C>T&&C>O?C<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(C),s=U/n,a=D/n):T>O?T<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(T),n=U/s,a=k/s):O<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(O),n=D/a,s=k/a),this.set(n,s,a,e),this}let R=Math.sqrt((x-M)*(x-M)+(_-S)*(_-S)+(m-p)*(m-p));return Math.abs(R)<.001&&(R=1),this.x=(x-M)/R,this.y=(_-S)/R,this.z=(m-p)/R,this.w=Math.acos((d+y+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ku extends yn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:n.depth},a=new ei(s);this.textures=[];const c=n.count;for(let h=0;h<c;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ia(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends Ku{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jl extends ei{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ju extends ei{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let c=0,h=a.count;c<h;c++)t.isMesh===!0?t.getVertexPosition(c,yi):yi.fromBufferAttribute(a,c),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}const s=t.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),ar.subVectors(this.max,ws),qn.subVectors(t.a,ws),Yn.subVectors(t.b,ws),jn.subVectors(t.c,ws),nn.subVectors(Yn,qn),sn.subVectors(jn,Yn),Sn.subVectors(qn,jn);let e=[0,-nn.z,nn.y,0,-sn.z,sn.y,0,-Sn.z,Sn.y,nn.z,0,-nn.x,sn.z,0,-sn.x,Sn.z,0,-Sn.x,-nn.y,nn.x,0,-sn.y,sn.x,0,-Sn.y,Sn.x,0];return!ra(e,qn,Yn,jn,ar)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,qn,Yn,jn,ar))?!1:(lr.crossVectors(nn,sn),e=[lr.x,lr.y,lr.z],ra(e,qn,Yn,jn,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Hi=[new B,new B,new B,new B,new B,new B,new B,new B],yi=new B,or=new en,qn=new B,Yn=new B,jn=new B,nn=new B,sn=new B,Sn=new B,ws=new B,ar=new B,lr=new B,bn=new B;function ra(o,t,e,n,s){for(let a=0,c=o.length-3;a<=c;a+=3){bn.fromArray(o,a);const h=s.x*Math.abs(bn.x)+s.y*Math.abs(bn.y)+s.z*Math.abs(bn.z),u=t.dot(bn),d=e.dot(bn),p=n.dot(bn);if(Math.max(-Math.max(u,d,p),Math.min(u,d,p))>h)return!1}return!0}const Qu=new en,As=new B,oa=new B;class cr{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qu.setFromPoints(t).getCenter(n);let s=0;for(let a=0,c=t.length;a<c;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);const e=As.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(As,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(oa)),this.expandByPoint(As.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Gi=new B,aa=new B,hr=new B,rn=new B,la=new B,ur=new B,ca=new B;class dr{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gi.copy(this.origin).addScaledVector(this.direction,e),Gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){aa.copy(t).add(e).multiplyScalar(.5),hr.copy(e).sub(t).normalize(),rn.copy(this.origin).sub(aa);const a=t.distanceTo(e)*.5,c=-this.direction.dot(hr),h=rn.dot(this.direction),u=-rn.dot(hr),d=rn.lengthSq(),p=Math.abs(1-c*c);let _,m,y,M;if(p>0)if(_=c*u-h,m=c*h-u,M=a*p,_>=0)if(m>=-M)if(m<=M){const S=1/p;_*=S,m*=S,y=_*(_+c*m+2*h)+m*(c*_+m+2*u)+d}else m=a,_=Math.max(0,-(c*m+h)),y=-_*_+m*(m+2*u)+d;else m=-a,_=Math.max(0,-(c*m+h)),y=-_*_+m*(m+2*u)+d;else m<=-M?(_=Math.max(0,-(-c*a+h)),m=_>0?-a:Math.min(Math.max(-a,-u),a),y=-_*_+m*(m+2*u)+d):m<=M?(_=0,m=Math.min(Math.max(-a,-u),a),y=m*(m+2*u)+d):(_=Math.max(0,-(c*a+h)),m=_>0?a:Math.min(Math.max(-a,-u),a),y=-_*_+m*(m+2*u)+d);else m=c>0?-a:a,_=Math.max(0,-(c*m+h)),y=-_*_+m*(m+2*u)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(aa).addScaledVector(hr,m),y}intersectSphere(t,e){Gi.subVectors(t.center,this.origin);const n=Gi.dot(this.direction),s=Gi.dot(Gi)-n*n,a=t.radius*t.radius;if(s>a)return null;const c=Math.sqrt(a-s),h=n-c,u=n+c;return u<0?null:h<0?this.at(u,e):this.at(h,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,c,h,u;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,m=this.origin;return d>=0?(n=(t.min.x-m.x)*d,s=(t.max.x-m.x)*d):(n=(t.max.x-m.x)*d,s=(t.min.x-m.x)*d),p>=0?(a=(t.min.y-m.y)*p,c=(t.max.y-m.y)*p):(a=(t.max.y-m.y)*p,c=(t.min.y-m.y)*p),n>c||a>s||((a>n||isNaN(n))&&(n=a),(c<s||isNaN(s))&&(s=c),_>=0?(h=(t.min.z-m.z)*_,u=(t.max.z-m.z)*_):(h=(t.max.z-m.z)*_,u=(t.min.z-m.z)*_),n>u||h>s)||((h>n||n!==n)&&(n=h),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gi)!==null}intersectTriangle(t,e,n,s,a){la.subVectors(e,t),ur.subVectors(n,t),ca.crossVectors(la,ur);let c=this.direction.dot(ca),h;if(c>0){if(s)return null;h=1}else if(c<0)h=-1,c=-c;else return null;rn.subVectors(this.origin,t);const u=h*this.direction.dot(ur.crossVectors(rn,ur));if(u<0)return null;const d=h*this.direction.dot(la.cross(rn));if(d<0||u+d>c)return null;const p=-h*rn.dot(ca);return p<0?null:this.at(p/c,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(t,e,n,s,a,c,h,u,d,p,_,m,y,M,S,x){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,c,h,u,d,p,_,m,y,M,S,x)}set(t,e,n,s,a,c,h,u,d,p,_,m,y,M,S,x){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=a,g[5]=c,g[9]=h,g[13]=u,g[2]=d,g[6]=p,g[10]=_,g[14]=m,g[3]=y,g[7]=M,g[11]=S,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Kn.setFromMatrixColumn(t,0).length(),a=1/Kn.setFromMatrixColumn(t,1).length(),c=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*c,e[9]=n[9]*c,e[10]=n[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,c=Math.cos(n),h=Math.sin(n),u=Math.cos(s),d=Math.sin(s),p=Math.cos(a),_=Math.sin(a);if(t.order==="XYZ"){const m=c*p,y=c*_,M=h*p,S=h*_;e[0]=u*p,e[4]=-u*_,e[8]=d,e[1]=y+M*d,e[5]=m-S*d,e[9]=-h*u,e[2]=S-m*d,e[6]=M+y*d,e[10]=c*u}else if(t.order==="YXZ"){const m=u*p,y=u*_,M=d*p,S=d*_;e[0]=m+S*h,e[4]=M*h-y,e[8]=c*d,e[1]=c*_,e[5]=c*p,e[9]=-h,e[2]=y*h-M,e[6]=S+m*h,e[10]=c*u}else if(t.order==="ZXY"){const m=u*p,y=u*_,M=d*p,S=d*_;e[0]=m-S*h,e[4]=-c*_,e[8]=M+y*h,e[1]=y+M*h,e[5]=c*p,e[9]=S-m*h,e[2]=-c*d,e[6]=h,e[10]=c*u}else if(t.order==="ZYX"){const m=c*p,y=c*_,M=h*p,S=h*_;e[0]=u*p,e[4]=M*d-y,e[8]=m*d+S,e[1]=u*_,e[5]=S*d+m,e[9]=y*d-M,e[2]=-d,e[6]=h*u,e[10]=c*u}else if(t.order==="YZX"){const m=c*u,y=c*d,M=h*u,S=h*d;e[0]=u*p,e[4]=S-m*_,e[8]=M*_+y,e[1]=_,e[5]=c*p,e[9]=-h*p,e[2]=-d*p,e[6]=y*_+M,e[10]=m-S*_}else if(t.order==="XZY"){const m=c*u,y=c*d,M=h*u,S=h*d;e[0]=u*p,e[4]=-_,e[8]=d*p,e[1]=m*_+S,e[5]=c*p,e[9]=y*_-M,e[2]=M*_-y,e[6]=h*p,e[10]=S*_+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(td,t,ed)}lookAt(t,e,n){const s=this.elements;return oi.subVectors(t,e),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),on.crossVectors(n,oi),on.lengthSq()===0&&(Math.abs(n.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),on.crossVectors(n,oi)),on.normalize(),fr.crossVectors(oi,on),s[0]=on.x,s[4]=fr.x,s[8]=oi.x,s[1]=on.y,s[5]=fr.y,s[9]=oi.y,s[2]=on.z,s[6]=fr.z,s[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,c=n[0],h=n[4],u=n[8],d=n[12],p=n[1],_=n[5],m=n[9],y=n[13],M=n[2],S=n[6],x=n[10],g=n[14],R=n[3],C=n[7],T=n[11],O=n[15],U=s[0],D=s[4],k=s[8],A=s[12],P=s[1],N=s[5],Y=s[9],et=s[13],J=s[2],$=s[6],Z=s[10],ct=s[14],V=s[3],yt=s[7],st=s[11],gt=s[15];return a[0]=c*U+h*P+u*J+d*V,a[4]=c*D+h*N+u*$+d*yt,a[8]=c*k+h*Y+u*Z+d*st,a[12]=c*A+h*et+u*ct+d*gt,a[1]=p*U+_*P+m*J+y*V,a[5]=p*D+_*N+m*$+y*yt,a[9]=p*k+_*Y+m*Z+y*st,a[13]=p*A+_*et+m*ct+y*gt,a[2]=M*U+S*P+x*J+g*V,a[6]=M*D+S*N+x*$+g*yt,a[10]=M*k+S*Y+x*Z+g*st,a[14]=M*A+S*et+x*ct+g*gt,a[3]=R*U+C*P+T*J+O*V,a[7]=R*D+C*N+T*$+O*yt,a[11]=R*k+C*Y+T*Z+O*st,a[15]=R*A+C*et+T*ct+O*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],c=t[1],h=t[5],u=t[9],d=t[13],p=t[2],_=t[6],m=t[10],y=t[14],M=t[3],S=t[7],x=t[11],g=t[15];return M*(+a*u*_-s*d*_-a*h*m+n*d*m+s*h*y-n*u*y)+S*(+e*u*y-e*d*m+a*c*m-s*c*y+s*d*p-a*u*p)+x*(+e*d*_-e*h*y-a*c*_+n*c*y+a*h*p-n*d*p)+g*(-s*h*p-e*u*_+e*h*m+s*c*_-n*c*m+n*u*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],c=t[4],h=t[5],u=t[6],d=t[7],p=t[8],_=t[9],m=t[10],y=t[11],M=t[12],S=t[13],x=t[14],g=t[15],R=_*x*d-S*m*d+S*u*y-h*x*y-_*u*g+h*m*g,C=M*m*d-p*x*d-M*u*y+c*x*y+p*u*g-c*m*g,T=p*S*d-M*_*d+M*h*y-c*S*y-p*h*g+c*_*g,O=M*_*u-p*S*u-M*h*m+c*S*m+p*h*x-c*_*x,U=e*R+n*C+s*T+a*O;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/U;return t[0]=R*D,t[1]=(S*m*a-_*x*a-S*s*y+n*x*y+_*s*g-n*m*g)*D,t[2]=(h*x*a-S*u*a+S*s*d-n*x*d-h*s*g+n*u*g)*D,t[3]=(_*u*a-h*m*a-_*s*d+n*m*d+h*s*y-n*u*y)*D,t[4]=C*D,t[5]=(p*x*a-M*m*a+M*s*y-e*x*y-p*s*g+e*m*g)*D,t[6]=(M*u*a-c*x*a-M*s*d+e*x*d+c*s*g-e*u*g)*D,t[7]=(c*m*a-p*u*a+p*s*d-e*m*d-c*s*y+e*u*y)*D,t[8]=T*D,t[9]=(M*_*a-p*S*a-M*n*y+e*S*y+p*n*g-e*_*g)*D,t[10]=(c*S*a-M*h*a+M*n*d-e*S*d-c*n*g+e*h*g)*D,t[11]=(p*h*a-c*_*a-p*n*d+e*_*d+c*n*y-e*h*y)*D,t[12]=O*D,t[13]=(p*S*s-M*_*s+M*n*m-e*S*m-p*n*x+e*_*x)*D,t[14]=(M*h*s-c*S*s-M*n*u+e*S*u+c*n*x-e*h*x)*D,t[15]=(c*_*s-p*h*s+p*n*u-e*_*u-c*n*m+e*h*m)*D,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,c=t.x,h=t.y,u=t.z,d=a*c,p=a*h;return this.set(d*c+n,d*h-s*u,d*u+s*h,0,d*h+s*u,p*h+n,p*u-s*c,0,d*u-s*h,p*u+s*c,a*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,c){return this.set(1,n,a,0,t,1,c,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,c=e._y,h=e._z,u=e._w,d=a+a,p=c+c,_=h+h,m=a*d,y=a*p,M=a*_,S=c*p,x=c*_,g=h*_,R=u*d,C=u*p,T=u*_,O=n.x,U=n.y,D=n.z;return s[0]=(1-(S+g))*O,s[1]=(y+T)*O,s[2]=(M-C)*O,s[3]=0,s[4]=(y-T)*U,s[5]=(1-(m+g))*U,s[6]=(x+R)*U,s[7]=0,s[8]=(M+C)*D,s[9]=(x-R)*D,s[10]=(1-(m+S))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=Kn.set(s[0],s[1],s[2]).length();const c=Kn.set(s[4],s[5],s[6]).length(),h=Kn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],xi.copy(this);const d=1/a,p=1/c,_=1/h;return xi.elements[0]*=d,xi.elements[1]*=d,xi.elements[2]*=d,xi.elements[4]*=p,xi.elements[5]*=p,xi.elements[6]*=p,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,e.setFromRotationMatrix(xi),n.x=a,n.y=c,n.z=h,this}makePerspective(t,e,n,s,a,c,h=Ci,u=!1){const d=this.elements,p=2*a/(e-t),_=2*a/(n-s),m=(e+t)/(e-t),y=(n+s)/(n-s);let M,S;if(u)M=a/(c-a),S=c*a/(c-a);else if(h===Ci)M=-(c+a)/(c-a),S=-2*c*a/(c-a);else if(h===nr)M=-c/(c-a),S=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=_,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=S,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,n,s,a,c,h=Ci,u=!1){const d=this.elements,p=2/(e-t),_=2/(n-s),m=-(e+t)/(e-t),y=-(n+s)/(n-s);let M,S;if(u)M=1/(c-a),S=c/(c-a);else if(h===Ci)M=-2/(c-a),S=-(c+a)/(c-a);else if(h===nr)M=-1/(c-a),S=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=0,d[12]=m,d[1]=0,d[5]=_,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=M,d[14]=S,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Kn=new B,xi=new De,td=new B(0,0,0),ed=new B(1,1,1),on=new B,fr=new B,oi=new B,Ql=new De,tc=new xn;class Ri{constructor(t=0,e=0,n=0,s=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],c=s[4],h=s[8],u=s[1],d=s[5],p=s[9],_=s[2],m=s[6],y=s[10];switch(e){case"XYZ":this._y=Math.asin(se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-se(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(se(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class ha{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let id=0;const ec=new B,Jn=new xn,Vi=new De,pr=new B,Ps=new B,nd=new B,sd=new xn,ic=new B(1,0,0),nc=new B(0,1,0),sc=new B(0,0,1),rc={type:"added"},rd={type:"removed"},Qn={type:"childadded",child:null},ua={type:"childremoved",child:null};class qe extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new B,e=new Ri,n=new xn,s=new B(1,1,1);function a(){n.setFromEuler(e,!1)}function c(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new ee}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(ic,t)}rotateY(t){return this.rotateOnAxis(nc,t)}rotateZ(t){return this.rotateOnAxis(sc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ic,t)}translateY(t){return this.translateOnAxis(nc,t)}translateZ(t){return this.translateOnAxis(sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Ps,pr,this.up):Vi.lookAt(pr,Ps,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),Jn.setFromRotationMatrix(Vi),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rc),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rd),ua.child=t,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rc),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const c=this.children[n].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(h=>({...h})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const u=h.shapes;if(Array.isArray(u))for(let d=0,p=u.length;d<p;d++){const _=u[d];a(t.shapes,_)}else a(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let u=0,d=this.material.length;u<d;u++)h.push(a(t.materials,this.material[u]));s.material=h}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){const u=this.animations[h];s.animations.push(a(t.animations,u))}}if(e){const h=c(t.geometries),u=c(t.materials),d=c(t.textures),p=c(t.images),_=c(t.shapes),m=c(t.skeletons),y=c(t.animations),M=c(t.nodes);h.length>0&&(n.geometries=h),u.length>0&&(n.materials=u),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),_.length>0&&(n.shapes=_),m.length>0&&(n.skeletons=m),y.length>0&&(n.animations=y),M.length>0&&(n.nodes=M)}return n.object=s,n;function c(h){const u=[];for(const d in h){const p=h[d];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}qe.DEFAULT_UP=new B(0,1,0),qe.DEFAULT_MATRIX_AUTO_UPDATE=!0,qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new B,Wi=new B,da=new B,$i=new B,ts=new B,es=new B,oc=new B,fa=new B,pa=new B,ma=new B,_a=new be,ga=new be,va=new be;class Si{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mi.subVectors(t,e),s.cross(Mi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){Mi.subVectors(s,e),Wi.subVectors(n,e),da.subVectors(t,e);const c=Mi.dot(Mi),h=Mi.dot(Wi),u=Mi.dot(da),d=Wi.dot(Wi),p=Wi.dot(da),_=c*d-h*h;if(_===0)return a.set(0,0,0),null;const m=1/_,y=(d*u-h*p)*m,M=(c*p-h*u)*m;return a.set(1-y-M,M,y)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,e,n,s,a,c,h,u){return this.getBarycoord(t,e,n,s,$i)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,$i.x),u.addScaledVector(c,$i.y),u.addScaledVector(h,$i.z),u)}static getInterpolatedAttribute(t,e,n,s,a,c){return _a.setScalar(0),ga.setScalar(0),va.setScalar(0),_a.fromBufferAttribute(t,e),ga.fromBufferAttribute(t,n),va.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(_a,a.x),c.addScaledVector(ga,a.y),c.addScaledVector(va,a.z),c}static isFrontFacing(t,e,n,s){return Mi.subVectors(n,e),Wi.subVectors(t,e),Mi.cross(Wi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),Mi.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Si.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return Si.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let c,h;ts.subVectors(s,n),es.subVectors(a,n),fa.subVectors(t,n);const u=ts.dot(fa),d=es.dot(fa);if(u<=0&&d<=0)return e.copy(n);pa.subVectors(t,s);const p=ts.dot(pa),_=es.dot(pa);if(p>=0&&_<=p)return e.copy(s);const m=u*_-p*d;if(m<=0&&u>=0&&p<=0)return c=u/(u-p),e.copy(n).addScaledVector(ts,c);ma.subVectors(t,a);const y=ts.dot(ma),M=es.dot(ma);if(M>=0&&y<=M)return e.copy(a);const S=y*d-u*M;if(S<=0&&d>=0&&M<=0)return h=d/(d-M),e.copy(n).addScaledVector(es,h);const x=p*M-y*_;if(x<=0&&_-p>=0&&y-M>=0)return oc.subVectors(a,s),h=(_-p)/(_-p+(y-M)),e.copy(s).addScaledVector(oc,h);const g=1/(x+S+m);return c=S*g,h=m*g,e.copy(n).addScaledVector(ts,c).addScaledVector(es,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},mr={h:0,s:0,l:0};function ya(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=_e.workingColorSpace){if(t=Vu(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,c=2*n-a;this.r=ya(c,a,t+1/3),this.g=ya(c,a,t),this.b=ya(c,a,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=ri){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const c=s[1],h=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ri){const n=ac[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return _e.workingToColorSpace(Ye.copy(this),t),Math.round(se(Ye.r*255,0,255))*65536+Math.round(se(Ye.g*255,0,255))*256+Math.round(se(Ye.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,a=Ye.b,c=Math.max(n,s,a),h=Math.min(n,s,a);let u,d;const p=(h+c)/2;if(h===c)u=0,d=0;else{const _=c-h;switch(d=p<=.5?_/(c+h):_/(2-c-h),c){case n:u=(s-a)/_+(s<a?6:0);break;case s:u=(a-n)/_+2;break;case a:u=(n-s)/_+4;break}u/=6}return t.h=u,t.s=d,t.l=p,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=ri){_e.workingToColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==ri?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(an),this.setHSL(an.h+t,an.s+e,an.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(an),t.getHSL(mr);const n=Qo(an.h,mr.h,e),s=Qo(an.s,mr.s,e),a=Qo(an.l,mr.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new ce;ce.NAMES=ac;let od=0;class is extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=zn,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=oo,this.blendEquation=mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=kn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zn&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ro&&(n.blendSrc=this.blendSrc),this.blendDst!==oo&&(n.blendDst=this.blendDst),this.blendEquation!==mn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==kn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const c=[];for(const h in a){const u=a[h];delete u.metadata,c.push(u)}return c}if(e){const a=s(t.textures),c=s(t.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Cs extends is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new B,_r=new Xt;let ad=0;class Li{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ad++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$l,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),n=ti(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),n=ti(n,this.array),s=ti(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),n=ti(n,this.array),s=ti(s,this.array),a=ti(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$l&&(t.usage=this.usage),t}}class lc extends Li{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cc extends Li{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Re extends Li{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ld=0;const fi=new De,xa=new qe,ns=new B,ai=new en,Rs=new en,Ge=new B;class je extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ql(t)?cc:lc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ee().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,n){return fi.makeTranslation(t,e,n),this.applyMatrix4(fi),this}scale(t,e,n){return fi.makeScale(t,e,n),this.applyMatrix4(fi),this}lookAt(t){return xa.lookAt(t),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const c=t[s];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Re(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];ai.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),e)for(let a=0,c=e.length;a<c;a++){const h=e[a];Rs.setFromBufferAttribute(h),this.morphTargetsRelative?(Ge.addVectors(ai.min,Rs.min),ai.expandByPoint(Ge),Ge.addVectors(ai.max,Rs.max),ai.expandByPoint(Ge)):(ai.expandByPoint(Rs.min),ai.expandByPoint(Rs.max))}ai.getCenter(n);let s=0;for(let a=0,c=t.count;a<c;a++)Ge.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let a=0,c=e.length;a<c;a++){const h=e[a],u=this.morphTargetsRelative;for(let d=0,p=h.count;d<p;d++)Ge.fromBufferAttribute(h,d),u&&(ns.fromBufferAttribute(t,d),Ge.add(ns)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),h=[],u=[];for(let k=0;k<n.count;k++)h[k]=new B,u[k]=new B;const d=new B,p=new B,_=new B,m=new Xt,y=new Xt,M=new Xt,S=new B,x=new B;function g(k,A,P){d.fromBufferAttribute(n,k),p.fromBufferAttribute(n,A),_.fromBufferAttribute(n,P),m.fromBufferAttribute(a,k),y.fromBufferAttribute(a,A),M.fromBufferAttribute(a,P),p.sub(d),_.sub(d),y.sub(m),M.sub(m);const N=1/(y.x*M.y-M.x*y.y);isFinite(N)&&(S.copy(p).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(N),x.copy(_).multiplyScalar(y.x).addScaledVector(p,-M.x).multiplyScalar(N),h[k].add(S),h[A].add(S),h[P].add(S),u[k].add(x),u[A].add(x),u[P].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let k=0,A=R.length;k<A;++k){const P=R[k],N=P.start,Y=P.count;for(let et=N,J=N+Y;et<J;et+=3)g(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const C=new B,T=new B,O=new B,U=new B;function D(k){O.fromBufferAttribute(s,k),U.copy(O);const A=h[k];C.copy(A),C.sub(O.multiplyScalar(O.dot(A))).normalize(),T.crossVectors(U,A);const N=T.dot(u[k])<0?-1:1;c.setXYZW(k,C.x,C.y,C.z,N)}for(let k=0,A=R.length;k<A;++k){const P=R[k],N=P.start,Y=P.count;for(let et=N,J=N+Y;et<J;et+=3)D(t.getX(et+0)),D(t.getX(et+1)),D(t.getX(et+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Li(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,y=n.count;m<y;m++)n.setXYZ(m,0,0,0);const s=new B,a=new B,c=new B,h=new B,u=new B,d=new B,p=new B,_=new B;if(t)for(let m=0,y=t.count;m<y;m+=3){const M=t.getX(m+0),S=t.getX(m+1),x=t.getX(m+2);s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,S),c.fromBufferAttribute(e,x),p.subVectors(c,a),_.subVectors(s,a),p.cross(_),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,x),h.add(p),u.add(p),d.add(p),n.setXYZ(M,h.x,h.y,h.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let m=0,y=e.count;m<y;m+=3)s.fromBufferAttribute(e,m+0),a.fromBufferAttribute(e,m+1),c.fromBufferAttribute(e,m+2),p.subVectors(c,a),_.subVectors(s,a),p.cross(_),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(h,u){const d=h.array,p=h.itemSize,_=h.normalized,m=new d.constructor(u.length*p);let y=0,M=0;for(let S=0,x=u.length;S<x;S++){h.isInterleavedBufferAttribute?y=u[S]*h.data.stride+h.offset:y=u[S]*p;for(let g=0;g<p;g++)m[M++]=d[y++]}return new Li(m,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,n=this.index.array,s=this.attributes;for(const h in s){const u=s[h],d=t(u,n);e.setAttribute(h,d)}const a=this.morphAttributes;for(const h in a){const u=[],d=a[h];for(let p=0,_=d.length;p<_;p++){const m=d[p],y=t(m,n);u.push(y)}e.morphAttributes[h]=u}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,u=c.length;h<u;h++){const d=c[h];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const d in u)u[d]!==void 0&&(t[d]=u[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const u in n){const d=n[u];t.data.attributes[u]=d.toJSON(t.data)}const s={};let a=!1;for(const u in this.morphAttributes){const d=this.morphAttributes[u],p=[];for(let _=0,m=d.length;_<m;_++){const y=d[_];p.push(y.toJSON(t.data))}p.length>0&&(s[u]=p,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(e))}const a=t.morphAttributes;for(const d in a){const p=[],_=a[d];for(let m=0,y=_.length;m<y;m++)p.push(_[m].clone(e));this.morphAttributes[d]=p}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,p=c.length;d<p;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new De,En=new dr,gr=new cr,uc=new B,vr=new B,yr=new B,xr=new B,Ma=new B,Mr=new B,dc=new B,Sr=new B;class li extends qe{constructor(t=new je,e=new Cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const h=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const h=this.morphTargetInfluences;if(a&&h){Mr.set(0,0,0);for(let u=0,d=a.length;u<d;u++){const p=h[u],_=a[u];p!==0&&(Ma.fromBufferAttribute(_,t),c?Mr.addScaledVector(Ma,p):Mr.addScaledVector(Ma.sub(e),p))}e.add(Mr)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(a),En.copy(t.ray).recast(t.near),!(gr.containsPoint(En.origin)===!1&&(En.intersectSphere(gr,uc)===null||En.origin.distanceToSquared(uc)>(t.far-t.near)**2))&&(hc.copy(a).invert(),En.copy(t.ray).applyMatrix4(hc),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,En)))}_computeIntersections(t,e,n){let s;const a=this.geometry,c=this.material,h=a.index,u=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,m=a.groups,y=a.drawRange;if(h!==null)if(Array.isArray(c))for(let M=0,S=m.length;M<S;M++){const x=m[M],g=c[x.materialIndex],R=Math.max(x.start,y.start),C=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let T=R,O=C;T<O;T+=3){const U=h.getX(T),D=h.getX(T+1),k=h.getX(T+2);s=br(this,g,t,n,d,p,_,U,D,k),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const M=Math.max(0,y.start),S=Math.min(h.count,y.start+y.count);for(let x=M,g=S;x<g;x+=3){const R=h.getX(x),C=h.getX(x+1),T=h.getX(x+2);s=br(this,c,t,n,d,p,_,R,C,T),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(c))for(let M=0,S=m.length;M<S;M++){const x=m[M],g=c[x.materialIndex],R=Math.max(x.start,y.start),C=Math.min(u.count,Math.min(x.start+x.count,y.start+y.count));for(let T=R,O=C;T<O;T+=3){const U=T,D=T+1,k=T+2;s=br(this,g,t,n,d,p,_,U,D,k),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const M=Math.max(0,y.start),S=Math.min(u.count,y.start+y.count);for(let x=M,g=S;x<g;x+=3){const R=x,C=x+1,T=x+2;s=br(this,c,t,n,d,p,_,R,C,T),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}}function cd(o,t,e,n,s,a,c,h){let u;if(t.side===Qe?u=n.intersectTriangle(c,a,s,!0,h):u=n.intersectTriangle(s,a,c,t.side===Ki,h),u===null)return null;Sr.copy(h),Sr.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(Sr);return d<e.near||d>e.far?null:{distance:d,point:Sr.clone(),object:o}}function br(o,t,e,n,s,a,c,h,u,d){o.getVertexPosition(h,vr),o.getVertexPosition(u,yr),o.getVertexPosition(d,xr);const p=cd(o,t,e,n,vr,yr,xr,dc);if(p){const _=new B;Si.getBarycoord(dc,vr,yr,xr,_),s&&(p.uv=Si.getInterpolatedAttribute(s,h,u,d,_,new Xt)),a&&(p.uv1=Si.getInterpolatedAttribute(a,h,u,d,_,new Xt)),c&&(p.normal=Si.getInterpolatedAttribute(c,h,u,d,_,new B),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:h,b:u,c:d,normal:new B,materialIndex:0};Si.getNormal(vr,yr,xr,m.normal),p.face=m,p.barycoord=_}return p}class ss extends je{constructor(t=1,e=1,n=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:c};const h=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const u=[],d=[],p=[],_=[];let m=0,y=0;M("z","y","x",-1,-1,n,e,t,c,a,0),M("z","y","x",1,-1,n,e,-t,c,a,1),M("x","z","y",1,1,t,n,e,s,c,2),M("x","z","y",1,-1,t,n,-e,s,c,3),M("x","y","z",1,-1,t,e,n,s,a,4),M("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(u),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(p,3)),this.setAttribute("uv",new Re(_,2));function M(S,x,g,R,C,T,O,U,D,k,A){const P=T/D,N=O/k,Y=T/2,et=O/2,J=U/2,$=D+1,Z=k+1;let ct=0,V=0;const yt=new B;for(let st=0;st<Z;st++){const gt=st*N-et;for(let Ft=0;Ft<$;Ft++){const re=Ft*P-Y;yt[S]=re*R,yt[x]=gt*C,yt[g]=J,d.push(yt.x,yt.y,yt.z),yt[S]=0,yt[x]=0,yt[g]=U>0?1:-1,p.push(yt.x,yt.y,yt.z),_.push(Ft/D),_.push(1-st/k),ct+=1}}for(let st=0;st<k;st++)for(let gt=0;gt<D;gt++){const Ft=m+gt+$*st,re=m+gt+$*(st+1),Yt=m+(gt+1)+$*(st+1),j=m+(gt+1)+$*st;u.push(Ft,re,j),u.push(re,Yt,j),V+=6}h.addGroup(y,V,A),y+=V,m+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rs(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const s=o[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ke(o){const t={};for(let e=0;e<o.length;e++){const n=rs(o[e]);for(const s in n)t[s]=n[s]}return t}function hd(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function fc(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const ud={clone:rs,merge:Ke};var dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dd,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?e.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[s]={type:"m4",value:c.toArray()}:e.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class pc extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cn=new B,mc=new Xt,_c=new Xt;class ci extends pc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cn.x,cn.y).multiplyScalar(-t/cn.z),cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cn.x,cn.y).multiplyScalar(-t/cn.z)}getViewSize(t,e){return this.getViewBounds(t,mc,_c),e.subVectors(_c,mc)}setViewOffset(t,e,n,s,a,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const u=c.fullWidth,d=c.fullHeight;a+=c.offsetX*s/u,e-=c.offsetY*n/d,s*=c.width/u,n*=c.height/d}const h=this.filmOffset;h!==0&&(a+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const os=-90,as=1;class pd extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ci(os,as,t,e);s.layers=this.layers,this.add(s);const a=new ci(os,as,t,e);a.layers=this.layers,this.add(a);const c=new ci(os,as,t,e);c.layers=this.layers,this.add(c);const h=new ci(os,as,t,e);h.layers=this.layers,this.add(h);const u=new ci(os,as,t,e);u.layers=this.layers,this.add(u);const d=new ci(os,as,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,c,h,u]=e;for(const d of e)this.remove(d);if(t===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,c,h,u,d,p]=this.children,_=t.getRenderTarget(),m=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,c),t.setRenderTarget(n,2,s),t.render(e,h),t.setRenderTarget(n,3,s),t.render(e,u),t.setRenderTarget(n,4,s),t.render(e,d),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),t.render(e,p),t.setRenderTarget(_,m,y),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class gc extends ei{constructor(t=[],e=Hn,n,s,a,c,h,u,d,p){super(t,e,n,s,a,c,h,u,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class md extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ss(5,5,5),a=new ln({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Ji});a.uniforms.tEquirect.value=e;const c=new li(s,a),h=e.minFilter;return e.minFilter===gn&&(e.minFilter=Ai),new pd(1,10,this).update(t,c),e.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const a=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,n,s);t.setRenderTarget(a)}}class Tn extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _d={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,c=null;const h=this._targetRay,u=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const S of t.hand.values()){const x=e.getJointPose(S,n),g=this._getHandJoint(d,S);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],m=p.position.distanceTo(_.position),y=.02,M=.005;d.inputState.pinching&&m>y+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&m<=y-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));h!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(_d)))}return h!==null&&(h.visible=s!==null),u!==null&&(u.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ba{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(t),this.density=e}clone(){return new ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gd extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ea=new B,vd=new B,yd=new ee;class hn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ea.subVectors(n,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yd.getNormalMatrix(t),s=this.coplanarPoint(Ea).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new cr,xd=new Xt(.5,.5),Er=new B;class Ta{constructor(t=new hn,e=new hn,n=new hn,s=new hn,a=new hn,c=new hn){this.planes=[t,e,n,s,a,c]}set(t,e,n,s,a,c){const h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(n),h[3].copy(s),h[4].copy(a),h[5].copy(c),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ci,n=!1){const s=this.planes,a=t.elements,c=a[0],h=a[1],u=a[2],d=a[3],p=a[4],_=a[5],m=a[6],y=a[7],M=a[8],S=a[9],x=a[10],g=a[11],R=a[12],C=a[13],T=a[14],O=a[15];if(s[0].setComponents(d-c,y-p,g-M,O-R).normalize(),s[1].setComponents(d+c,y+p,g+M,O+R).normalize(),s[2].setComponents(d+h,y+_,g+S,O+C).normalize(),s[3].setComponents(d-h,y-_,g-S,O-C).normalize(),n)s[4].setComponents(u,m,x,T).normalize(),s[5].setComponents(d-u,y-m,g-x,O-T).normalize();else if(s[4].setComponents(d-u,y-m,g-x,O-T).normalize(),e===Ci)s[5].setComponents(d+u,y+m,g+x,O+T).normalize();else if(e===nr)s[5].setComponents(u,m,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(t){wn.center.set(0,0,0);const e=xd.distanceTo(t.center);return wn.radius=.7071067811865476+e,wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tr extends is{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wr=new B,Ar=new B,vc=new De,Ls=new dr,Pr=new cr,wa=new B,yc=new B;class Aa extends qe{constructor(t=new je,e=new Tr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,a=e.count;s<a;s++)wr.fromBufferAttribute(e,s-1),Ar.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=wr.distanceTo(Ar);t.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=a,t.ray.intersectsSphere(Pr)===!1)return;vc.copy(s).invert(),Ls.copy(t.ray).applyMatrix4(vc);const h=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,d=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){const y=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let S=y,x=M-1;S<x;S+=d){const g=p.getX(S),R=p.getX(S+1),C=Cr(this,t,Ls,u,g,R,S);C&&e.push(C)}if(this.isLineLoop){const S=p.getX(M-1),x=p.getX(y),g=Cr(this,t,Ls,u,S,x,M-1);g&&e.push(g)}}else{const y=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let S=y,x=M-1;S<x;S+=d){const g=Cr(this,t,Ls,u,S,S+1,S);g&&e.push(g)}if(this.isLineLoop){const S=Cr(this,t,Ls,u,M-1,y,M-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const h=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}}function Cr(o,t,e,n,s,a,c){const h=o.geometry.attributes.position;if(wr.fromBufferAttribute(h,s),Ar.fromBufferAttribute(h,a),e.distanceSqToSegment(wr,Ar,wa,yc)>n)return;wa.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(wa);if(!(d<t.near||d>t.far))return{distance:d,point:yc.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const xc=new B,Mc=new B;class Md extends Aa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,a=e.count;s<a;s+=2)xc.fromBufferAttribute(e,s),Mc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xc.distanceTo(Mc);t.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sc extends ei{constructor(t,e,n=vn,s,a,c,h=gi,u=gi,d,p=Ss,_=1){if(p!==Ss&&p!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:t,height:e,depth:_};super(m,s,a,c,h,u,p,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ia(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Pa extends je{constructor(t=1,e=1,n=1,s=32,a=1,c=!1,h=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:h,thetaLength:u};const d=this;s=Math.floor(s),a=Math.floor(a);const p=[],_=[],m=[],y=[];let M=0;const S=[],x=n/2;let g=0;R(),c===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(p),this.setAttribute("position",new Re(_,3)),this.setAttribute("normal",new Re(m,3)),this.setAttribute("uv",new Re(y,2));function R(){const T=new B,O=new B;let U=0;const D=(e-t)/n;for(let k=0;k<=a;k++){const A=[],P=k/a,N=P*(e-t)+t;for(let Y=0;Y<=s;Y++){const et=Y/s,J=et*u+h,$=Math.sin(J),Z=Math.cos(J);O.x=N*$,O.y=-P*n+x,O.z=N*Z,_.push(O.x,O.y,O.z),T.set($,D,Z).normalize(),m.push(T.x,T.y,T.z),y.push(et,1-P),A.push(M++)}S.push(A)}for(let k=0;k<s;k++)for(let A=0;A<a;A++){const P=S[A][k],N=S[A+1][k],Y=S[A+1][k+1],et=S[A][k+1];(t>0||A!==0)&&(p.push(P,N,et),U+=3),(e>0||A!==a-1)&&(p.push(N,Y,et),U+=3)}d.addGroup(g,U,0),g+=U}function C(T){const O=M,U=new Xt,D=new B;let k=0;const A=T===!0?t:e,P=T===!0?1:-1;for(let Y=1;Y<=s;Y++)_.push(0,x*P,0),m.push(0,P,0),y.push(.5,.5),M++;const N=M;for(let Y=0;Y<=s;Y++){const J=Y/s*u+h,$=Math.cos(J),Z=Math.sin(J);D.x=A*Z,D.y=x*P,D.z=A*$,_.push(D.x,D.y,D.z),m.push(0,P,0),U.x=$*.5+.5,U.y=Z*.5*P+.5,y.push(U.x,U.y),M++}for(let Y=0;Y<s;Y++){const et=O+Y,J=N+Y;T===!0?p.push(J,J+1,et):p.push(J+1,J,et),k+=3}d.addGroup(g,k,T===!0?1:2),g+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ca extends Pa{constructor(t=1,e=1,n=32,s=1,a=!1,c=0,h=Math.PI*2){super(0,t,e,n,s,a,c,h),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:h}}static fromJSON(t){return new Ca(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ra extends je{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const a=[],c=[];h(s),d(n),p(),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(a.slice(),3)),this.setAttribute("uv",new Re(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function h(R){const C=new B,T=new B,O=new B;for(let U=0;U<e.length;U+=3)y(e[U+0],C),y(e[U+1],T),y(e[U+2],O),u(C,T,O,R)}function u(R,C,T,O){const U=O+1,D=[];for(let k=0;k<=U;k++){D[k]=[];const A=R.clone().lerp(T,k/U),P=C.clone().lerp(T,k/U),N=U-k;for(let Y=0;Y<=N;Y++)Y===0&&k===U?D[k][Y]=A:D[k][Y]=A.clone().lerp(P,Y/N)}for(let k=0;k<U;k++)for(let A=0;A<2*(U-k)-1;A++){const P=Math.floor(A/2);A%2===0?(m(D[k][P+1]),m(D[k+1][P]),m(D[k][P])):(m(D[k][P+1]),m(D[k+1][P+1]),m(D[k+1][P]))}}function d(R){const C=new B;for(let T=0;T<a.length;T+=3)C.x=a[T+0],C.y=a[T+1],C.z=a[T+2],C.normalize().multiplyScalar(R),a[T+0]=C.x,a[T+1]=C.y,a[T+2]=C.z}function p(){const R=new B;for(let C=0;C<a.length;C+=3){R.x=a[C+0],R.y=a[C+1],R.z=a[C+2];const T=x(R)/2/Math.PI+.5,O=g(R)/Math.PI+.5;c.push(T,1-O)}M(),_()}function _(){for(let R=0;R<c.length;R+=6){const C=c[R+0],T=c[R+2],O=c[R+4],U=Math.max(C,T,O),D=Math.min(C,T,O);U>.9&&D<.1&&(C<.2&&(c[R+0]+=1),T<.2&&(c[R+2]+=1),O<.2&&(c[R+4]+=1))}}function m(R){a.push(R.x,R.y,R.z)}function y(R,C){const T=R*3;C.x=t[T+0],C.y=t[T+1],C.z=t[T+2]}function M(){const R=new B,C=new B,T=new B,O=new B,U=new Xt,D=new Xt,k=new Xt;for(let A=0,P=0;A<a.length;A+=9,P+=6){R.set(a[A+0],a[A+1],a[A+2]),C.set(a[A+3],a[A+4],a[A+5]),T.set(a[A+6],a[A+7],a[A+8]),U.set(c[P+0],c[P+1]),D.set(c[P+2],c[P+3]),k.set(c[P+4],c[P+5]),O.copy(R).add(C).add(T).divideScalar(3);const N=x(O);S(U,P+0,R,N),S(D,P+2,C,N),S(k,P+4,T,N)}}function S(R,C,T,O){O<0&&R.x===1&&(c[C]=R.x-1),T.x===0&&T.z===0&&(c[C]=O/2/Math.PI+.5)}function x(R){return Math.atan2(R.z,-R.x)}function g(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.vertices,t.indices,t.radius,t.details)}}class Sd{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let c=1;c<=t;c++)n=this.getPoint(c/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const a=n.length;let c;e?c=e:c=t*n[a-1];let h=0,u=a-1,d;for(;h<=u;)if(s=Math.floor(h+(u-h)/2),d=n[s]-c,d<0)h=s+1;else if(d>0)u=s-1;else{u=s;break}if(s=u,n[s]===c)return s/(a-1);const p=n[s],m=n[s+1]-p,y=(c-p)/m;return(s+y)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const c=this.getPoint(s),h=this.getPoint(a),u=e||(c.isVector2?new Xt:new B);return u.copy(h).sub(c).normalize(),u}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new B,s=[],a=[],c=[],h=new B,u=new De;for(let y=0;y<=t;y++){const M=y/t;s[y]=this.getTangentAt(M,new B)}a[0]=new B,c[0]=new B;let d=Number.MAX_VALUE;const p=Math.abs(s[0].x),_=Math.abs(s[0].y),m=Math.abs(s[0].z);p<=d&&(d=p,n.set(1,0,0)),_<=d&&(d=_,n.set(0,1,0)),m<=d&&n.set(0,0,1),h.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],h),c[0].crossVectors(s[0],a[0]);for(let y=1;y<=t;y++){if(a[y]=a[y-1].clone(),c[y]=c[y-1].clone(),h.crossVectors(s[y-1],s[y]),h.length()>Number.EPSILON){h.normalize();const M=Math.acos(se(s[y-1].dot(s[y]),-1,1));a[y].applyMatrix4(u.makeRotationAxis(h,M))}c[y].crossVectors(s[y],a[y])}if(e===!0){let y=Math.acos(se(a[0].dot(a[t]),-1,1));y/=t,s[0].dot(h.crossVectors(a[0],a[t]))>0&&(y=-y);for(let M=1;M<=t;M++)a[M].applyMatrix4(u.makeRotationAxis(s[M],y*M)),c[M].crossVectors(s[M],a[M])}return{tangents:s,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function bd(o,t){const e=1-o;return e*e*t}function Ed(o,t){return 2*(1-o)*o*t}function Td(o,t){return o*o*t}function La(o,t,e,n){return bd(o,t)+Ed(o,e)+Td(o,n)}class wd extends Sd{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,s=this.v0,a=this.v1,c=this.v2;return n.set(La(t,s.x,a.x,c.x),La(t,s.y,a.y,c.y),La(t,s.z,a.z,c.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Da extends Ra{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Da(t.radius,t.detail)}}class Rr extends je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,c=e/2,h=Math.floor(n),u=Math.floor(s),d=h+1,p=u+1,_=t/h,m=e/u,y=[],M=[],S=[],x=[];for(let g=0;g<p;g++){const R=g*m-c;for(let C=0;C<d;C++){const T=C*_-a;M.push(T,-R,0),S.push(0,0,1),x.push(C/h),x.push(1-g/u)}}for(let g=0;g<u;g++)for(let R=0;R<h;R++){const C=R+d*g,T=R+d*(g+1),O=R+1+d*(g+1),U=R+1+d*g;y.push(C,T,U),y.push(T,O,U)}this.setIndex(y),this.setAttribute("position",new Re(M,3)),this.setAttribute("normal",new Re(S,3)),this.setAttribute("uv",new Re(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ia extends je{constructor(t=.5,e=1,n=32,s=1,a=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:c},n=Math.max(3,n),s=Math.max(1,s);const h=[],u=[],d=[],p=[];let _=t;const m=(e-t)/s,y=new B,M=new Xt;for(let S=0;S<=s;S++){for(let x=0;x<=n;x++){const g=a+x/n*c;y.x=_*Math.cos(g),y.y=_*Math.sin(g),u.push(y.x,y.y,y.z),d.push(0,0,1),M.x=(y.x/e+1)/2,M.y=(y.y/e+1)/2,p.push(M.x,M.y)}_+=m}for(let S=0;S<s;S++){const x=S*(n+1);for(let g=0;g<n;g++){const R=g+x,C=R,T=R+n+1,O=R+n+2,U=R+1;h.push(C,T,U),h.push(T,O,U)}}this.setIndex(h),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Na extends je{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,c=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:c,thetaLength:h},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const u=Math.min(c+h,Math.PI);let d=0;const p=[],_=new B,m=new B,y=[],M=[],S=[],x=[];for(let g=0;g<=n;g++){const R=[],C=g/n;let T=0;g===0&&c===0?T=.5/e:g===n&&u===Math.PI&&(T=-.5/e);for(let O=0;O<=e;O++){const U=O/e;_.x=-t*Math.cos(s+U*a)*Math.sin(c+C*h),_.y=t*Math.cos(c+C*h),_.z=t*Math.sin(s+U*a)*Math.sin(c+C*h),M.push(_.x,_.y,_.z),m.copy(_).normalize(),S.push(m.x,m.y,m.z),x.push(U+T,1-C),R.push(d++)}p.push(R)}for(let g=0;g<n;g++)for(let R=0;R<e;R++){const C=p[g][R+1],T=p[g][R],O=p[g+1][R],U=p[g+1][R+1];(g!==0||c>0)&&y.push(C,T,U),(g!==n-1||u<Math.PI)&&y.push(T,O,U)}this.setIndex(y),this.setAttribute("position",new Re(M,3)),this.setAttribute("normal",new Re(S,3)),this.setAttribute("uv",new Re(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Na(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ua extends je{constructor(t=1,e=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const c=[],h=[],u=[],d=[],p=new B,_=new B,m=new B;for(let y=0;y<=n;y++)for(let M=0;M<=s;M++){const S=M/s*a,x=y/n*Math.PI*2;_.x=(t+e*Math.cos(x))*Math.cos(S),_.y=(t+e*Math.cos(x))*Math.sin(S),_.z=e*Math.sin(x),h.push(_.x,_.y,_.z),p.x=t*Math.cos(S),p.y=t*Math.sin(S),m.subVectors(_,p).normalize(),u.push(m.x,m.y,m.z),d.push(M/s),d.push(y/n)}for(let y=1;y<=n;y++)for(let M=1;M<=s;M++){const S=(s+1)*y+M-1,x=(s+1)*(y-1)+M-1,g=(s+1)*(y-1)+M,R=(s+1)*y+M;c.push(S,x,R),c.push(x,g,R)}this.setIndex(c),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ad extends is{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pd extends is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cd extends is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Oa extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Rd extends Oa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Fa=new De,bc=new B,Ec=new B;class Ld{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(bc),Ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ec),e.updateMatrixWorld(),Fa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tc=new De,Ds=new B,Ba=new B;class Dd extends Ld{constructor(){super(new ci(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ds.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ds),Ba.copy(n.position),Ba.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ba),n.updateMatrixWorld(),s.makeTranslation(-Ds.x,-Ds.y,-Ds.z),Tc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc,n.coordinateSystem,n.reversedDepth)}}class Id extends Oa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Nd extends pc{constructor(t=-1,e=1,n=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,c=n+t,h=s+e,u=s-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,h-=p*this.view.offsetY,u=h-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,h,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ud extends Oa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Od extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const wc=new De;class Fd{constructor(t,e,n=0,s=1/0){this.ray=new dr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wc),this}intersectObject(t,e=!0,n=[]){return za(t,this,n,e),n.sort(Ac),n}intersectObjects(t,e=!0,n=[]){for(let s=0,a=t.length;s<a;s++)za(t[s],this,n,e);return n.sort(Ac),n}}function Ac(o,t){return o.distance-t.distance}function za(o,t,e,n){let s=!0;if(o.layers.test(t.layers)&&o.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const a=o.children;for(let c=0,h=a.length;c<h;c++)za(a[c],t,e,!0)}}class Pc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bd extends Md{constructor(t=10,e=10,n=4473924,s=8947848){n=new ce(n),s=new ce(s);const a=e/2,c=t/e,h=t/2,u=[],d=[];for(let m=0,y=0,M=-h;m<=e;m++,M+=c){u.push(-h,0,M,h,0,M),u.push(M,0,-h,M,0,h);const S=m===a?n:s;S.toArray(d,y),y+=3,S.toArray(d,y),y+=3,S.toArray(d,y),y+=3,S.toArray(d,y),y+=3}const p=new je;p.setAttribute("position",new Re(u,3)),p.setAttribute("color",new Re(d,3));const _=new Tr({vertexColors:!0,toneMapped:!1});super(p,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class zd extends yn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Cc(o,t,e,n){const s=kd(n);switch(e){case Fl:return o*t;case zl:return o*t/s.components*s.byteLength;case bo:return o*t/s.components*s.byteLength;case kl:return o*t*2/s.components*s.byteLength;case Eo:return o*t*2/s.components*s.byteLength;case Bl:return o*t*3/s.components*s.byteLength;case vi:return o*t*4/s.components*s.byteLength;case To:return o*t*4/s.components*s.byteLength;case Ks:case Js:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Qs:case tr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ao:case Co:return Math.max(o,16)*Math.max(t,8)/4;case wo:case Po:return Math.max(o,8)*Math.max(t,8)/2;case Ro:case Lo:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Do:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Io:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case zo:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case ko:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Go:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case $o:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case er:case Zo:case qo:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Hl:case Yo:return Math.ceil(o/4)*Math.ceil(t/4)*8;case jo:case Ko:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kd(o){switch(o){case Pi:case Nl:return{byteLength:1,components:1};case ys:case Ul:case xs:return{byteLength:2,components:1};case Mo:case So:return{byteLength:2,components:4};case vn:case xo:case zi:return{byteLength:4,components:1};case Ol:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:so}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=so);function Rc(){let o=null,t=!1,e=null,n=null;function s(a,c){e(a,c),n=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){o=a}}}function Hd(o){const t=new WeakMap;function e(h,u){const d=h.array,p=h.usage,_=d.byteLength,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,d,p),h.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function n(h,u,d){const p=u.array,_=u.updateRanges;if(o.bindBuffer(d,h),_.length===0)o.bufferSubData(d,0,p);else{_.sort((y,M)=>y.start-M.start);let m=0;for(let y=1;y<_.length;y++){const M=_[m],S=_[y];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++m,_[m]=S)}_.length=m+1;for(let y=0,M=_.length;y<M;y++){const S=_[y];o.bufferSubData(d,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=t.get(h);u&&(o.deleteBuffer(u.buffer),t.delete(h))}function c(h,u){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const p=t.get(h);(!p||p.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,e(h,u));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,h,u),d.version=h.version}}return{get:s,remove:a,update:c}}var Gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ef=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,df=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ff=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ff=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,up=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ap=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ne={alphahash_fragment:Gd,alphahash_pars_fragment:Vd,alphamap_fragment:Wd,alphamap_pars_fragment:$d,alphatest_fragment:Xd,alphatest_pars_fragment:Zd,aomap_fragment:qd,aomap_pars_fragment:Yd,batching_pars_vertex:jd,batching_vertex:Kd,begin_vertex:Jd,beginnormal_vertex:Qd,bsdfs:tf,iridescence_fragment:ef,bumpmap_pars_fragment:nf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:of,clipping_planes_vertex:af,color_fragment:lf,color_pars_fragment:cf,color_pars_vertex:hf,color_vertex:uf,common:df,cube_uv_reflection_fragment:ff,defaultnormal_vertex:pf,displacementmap_pars_vertex:mf,displacementmap_vertex:_f,emissivemap_fragment:gf,emissivemap_pars_fragment:vf,colorspace_fragment:yf,colorspace_pars_fragment:xf,envmap_fragment:Mf,envmap_common_pars_fragment:Sf,envmap_pars_fragment:bf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Uf,envmap_vertex:Tf,fog_vertex:wf,fog_pars_vertex:Af,fog_fragment:Pf,fog_pars_fragment:Cf,gradientmap_pars_fragment:Rf,lightmap_pars_fragment:Lf,lights_lambert_fragment:Df,lights_lambert_pars_fragment:If,lights_pars_begin:Nf,lights_toon_fragment:Of,lights_toon_pars_fragment:Ff,lights_phong_fragment:Bf,lights_phong_pars_fragment:zf,lights_physical_fragment:kf,lights_physical_pars_fragment:Hf,lights_fragment_begin:Gf,lights_fragment_maps:Vf,lights_fragment_end:Wf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:qf,map_fragment:Yf,map_pars_fragment:jf,map_particle_fragment:Kf,map_particle_pars_fragment:Jf,metalnessmap_fragment:Qf,metalnessmap_pars_fragment:tp,morphinstance_vertex:ep,morphcolor_vertex:ip,morphnormal_vertex:np,morphtarget_pars_vertex:sp,morphtarget_vertex:rp,normal_fragment_begin:op,normal_fragment_maps:ap,normal_pars_fragment:lp,normal_pars_vertex:cp,normal_vertex:hp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:dp,clearcoat_normal_fragment_maps:fp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:mp,opaque_fragment:_p,packing:gp,premultiplied_alpha_fragment:vp,project_vertex:yp,dithering_fragment:xp,dithering_pars_fragment:Mp,roughnessmap_fragment:Sp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Ep,shadowmap_pars_vertex:Tp,shadowmap_vertex:wp,shadowmask_pars_fragment:Ap,skinbase_vertex:Pp,skinning_pars_vertex:Cp,skinning_vertex:Rp,skinnormal_vertex:Lp,specularmap_fragment:Dp,specularmap_pars_fragment:Ip,tonemapping_fragment:Np,tonemapping_pars_fragment:Up,transmission_fragment:Op,transmission_pars_fragment:Fp,uv_pars_fragment:Bp,uv_pars_vertex:zp,uv_vertex:kp,worldpos_vertex:Hp,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},xt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Di={basic:{uniforms:Ke([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Ke([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Ke([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Ke([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Ke([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Ke([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Ke([xt.points,xt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Ke([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Ke([xt.common,xt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Ke([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Ke([xt.sprite,xt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Ke([xt.common,xt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Ke([xt.lights,xt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Di.physical={uniforms:Ke([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Lr={r:0,b:0,g:0},An=new Ri,Gp=new De;function Vp(o,t,e,n,s,a,c){const h=new ce(0);let u=a===!0?0:1,d,p,_=null,m=0,y=null;function M(C){let T=C.isScene===!0?C.background:null;return T&&T.isTexture&&(T=(C.backgroundBlurriness>0?e:t).get(T)),T}function S(C){let T=!1;const O=M(C);O===null?g(h,u):O&&O.isColor&&(g(O,1),T=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(o.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(C,T){const O=M(T);O&&(O.isCubeTexture||O.mapping===Ys)?(p===void 0&&(p=new li(new ss(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:rs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),An.copy(T.backgroundRotation),An.x*=-1,An.y*=-1,An.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),p.material.uniforms.envMap.value=O,p.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(An)),p.material.toneMapped=_e.getTransfer(O.colorSpace)!==Se,(_!==O||m!==O.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,_=O,m=O.version,y=o.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new li(new Rr(2,2),new ln({name:"BackgroundMaterial",uniforms:rs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.toneMapped=_e.getTransfer(O.colorSpace)!==Se,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||m!==O.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,_=O,m=O.version,y=o.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function g(C,T){C.getRGB(Lr,fc(o)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,T,c)}function R(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,T=1){h.set(C),u=T,g(h,u)},getClearAlpha:function(){return u},setClearAlpha:function(C){u=C,g(h,u)},render:S,addToRenderList:x,dispose:R}}function Wp(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},s=m(null);let a=s,c=!1;function h(P,N,Y,et,J){let $=!1;const Z=_(et,Y,N);a!==Z&&(a=Z,d(a.object)),$=y(P,et,Y,J),$&&M(P,et,Y,J),J!==null&&t.update(J,o.ELEMENT_ARRAY_BUFFER),($||c)&&(c=!1,T(P,N,Y,et),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function u(){return o.createVertexArray()}function d(P){return o.bindVertexArray(P)}function p(P){return o.deleteVertexArray(P)}function _(P,N,Y){const et=Y.wireframe===!0;let J=n[P.id];J===void 0&&(J={},n[P.id]=J);let $=J[N.id];$===void 0&&($={},J[N.id]=$);let Z=$[et];return Z===void 0&&(Z=m(u()),$[et]=Z),Z}function m(P){const N=[],Y=[],et=[];for(let J=0;J<e;J++)N[J]=0,Y[J]=0,et[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Y,attributeDivisors:et,object:P,attributes:{},index:null}}function y(P,N,Y,et){const J=a.attributes,$=N.attributes;let Z=0;const ct=Y.getAttributes();for(const V in ct)if(ct[V].location>=0){const st=J[V];let gt=$[V];if(gt===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(gt=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(gt=P.instanceColor)),st===void 0||st.attribute!==gt||gt&&st.data!==gt.data)return!0;Z++}return a.attributesNum!==Z||a.index!==et}function M(P,N,Y,et){const J={},$=N.attributes;let Z=0;const ct=Y.getAttributes();for(const V in ct)if(ct[V].location>=0){let st=$[V];st===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(st=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(st=P.instanceColor));const gt={};gt.attribute=st,st&&st.data&&(gt.data=st.data),J[V]=gt,Z++}a.attributes=J,a.attributesNum=Z,a.index=et}function S(){const P=a.newAttributes;for(let N=0,Y=P.length;N<Y;N++)P[N]=0}function x(P){g(P,0)}function g(P,N){const Y=a.newAttributes,et=a.enabledAttributes,J=a.attributeDivisors;Y[P]=1,et[P]===0&&(o.enableVertexAttribArray(P),et[P]=1),J[P]!==N&&(o.vertexAttribDivisor(P,N),J[P]=N)}function R(){const P=a.newAttributes,N=a.enabledAttributes;for(let Y=0,et=N.length;Y<et;Y++)N[Y]!==P[Y]&&(o.disableVertexAttribArray(Y),N[Y]=0)}function C(P,N,Y,et,J,$,Z){Z===!0?o.vertexAttribIPointer(P,N,Y,J,$):o.vertexAttribPointer(P,N,Y,et,J,$)}function T(P,N,Y,et){S();const J=et.attributes,$=Y.getAttributes(),Z=N.defaultAttributeValues;for(const ct in $){const V=$[ct];if(V.location>=0){let yt=J[ct];if(yt===void 0&&(ct==="instanceMatrix"&&P.instanceMatrix&&(yt=P.instanceMatrix),ct==="instanceColor"&&P.instanceColor&&(yt=P.instanceColor)),yt!==void 0){const st=yt.normalized,gt=yt.itemSize,Ft=t.get(yt);if(Ft===void 0)continue;const re=Ft.buffer,Yt=Ft.type,j=Ft.bytesPerElement,ot=Yt===o.INT||Yt===o.UNSIGNED_INT||yt.gpuType===xo;if(yt.isInterleavedBufferAttribute){const dt=yt.data,It=dt.stride,Wt=yt.offset;if(dt.isInstancedInterleavedBuffer){for(let jt=0;jt<V.locationSize;jt++)g(V.location+jt,dt.meshPerAttribute);P.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let jt=0;jt<V.locationSize;jt++)x(V.location+jt);o.bindBuffer(o.ARRAY_BUFFER,re);for(let jt=0;jt<V.locationSize;jt++)C(V.location+jt,gt/V.locationSize,Yt,st,It*j,(Wt+gt/V.locationSize*jt)*j,ot)}else{if(yt.isInstancedBufferAttribute){for(let dt=0;dt<V.locationSize;dt++)g(V.location+dt,yt.meshPerAttribute);P.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let dt=0;dt<V.locationSize;dt++)x(V.location+dt);o.bindBuffer(o.ARRAY_BUFFER,re);for(let dt=0;dt<V.locationSize;dt++)C(V.location+dt,gt/V.locationSize,Yt,st,gt*j,gt/V.locationSize*dt*j,ot)}}else if(Z!==void 0){const st=Z[ct];if(st!==void 0)switch(st.length){case 2:o.vertexAttrib2fv(V.location,st);break;case 3:o.vertexAttrib3fv(V.location,st);break;case 4:o.vertexAttrib4fv(V.location,st);break;default:o.vertexAttrib1fv(V.location,st)}}}}R()}function O(){k();for(const P in n){const N=n[P];for(const Y in N){const et=N[Y];for(const J in et)p(et[J].object),delete et[J];delete N[Y]}delete n[P]}}function U(P){if(n[P.id]===void 0)return;const N=n[P.id];for(const Y in N){const et=N[Y];for(const J in et)p(et[J].object),delete et[J];delete N[Y]}delete n[P.id]}function D(P){for(const N in n){const Y=n[N];if(Y[P.id]===void 0)continue;const et=Y[P.id];for(const J in et)p(et[J].object),delete et[J];delete Y[P.id]}}function k(){A(),c=!0,a!==s&&(a=s,d(a.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:k,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:U,releaseStatesOfProgram:D,initAttributes:S,enableAttribute:x,disableUnusedAttributes:R}}function $p(o,t,e){let n;function s(d){n=d}function a(d,p){o.drawArrays(n,d,p),e.update(p,n,1)}function c(d,p,_){_!==0&&(o.drawArraysInstanced(n,d,p,_),e.update(p,n,_))}function h(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,p,0,_);let y=0;for(let M=0;M<_;M++)y+=p[M];e.update(y,n,1)}function u(d,p,_,m){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<d.length;M++)c(d[M],p[M],m[M]);else{y.multiDrawArraysInstancedWEBGL(n,d,0,p,0,m,0,_);let M=0;for(let S=0;S<_;S++)M+=p[S]*m[S];e.update(M,n,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Xp(o,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(D){return!(D!==vi&&n.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(D){const k=D===xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Pi&&n.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==zi&&!k)}function u(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const p=u(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const _=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),C=o.getParameter(o.MAX_VARYING_VECTORS),T=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=M>0,U=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:u,textureFormatReadable:c,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:T,vertexTextures:O,maxSamples:U}}function Zp(o){const t=this;let e=null,n=0,s=!1,a=!1;const c=new hn,h=new ee,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const y=_.length!==0||m||n!==0||s;return s=m,n=_.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,m){e=p(_,m,0)},this.setState=function(_,m,y){const M=_.clippingPlanes,S=_.clipIntersection,x=_.clipShadows,g=o.get(_);if(!s||M===null||M.length===0||a&&!x)a?p(null):d();else{const R=a?0:n,C=R*4;let T=g.clippingState||null;u.value=T,T=p(M,m,C,y);for(let O=0;O!==C;++O)T[O]=e[O];g.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=R}};function d(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(_,m,y,M){const S=_!==null?_.length:0;let x=null;if(S!==0){if(x=u.value,M!==!0||x===null){const g=y+S*4,R=m.matrixWorldInverse;h.getNormalMatrix(R),(x===null||x.length<g)&&(x=new Float32Array(g));for(let C=0,T=y;C!==S;++C,T+=4)c.copy(_[C]).applyMatrix4(R,h),c.normal.toArray(x,T),x[T+3]=c.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,x}}function qp(o){let t=new WeakMap;function e(c,h){return h===mo?c.mapping=Hn:h===_o&&(c.mapping=Gn),c}function n(c){if(c&&c.isTexture){const h=c.mapping;if(h===mo||h===_o)if(t.has(c)){const u=t.get(c).texture;return e(u,c.mapping)}else{const u=c.image;if(u&&u.height>0){const d=new md(u.height);return d.fromEquirectangularTexture(o,c),t.set(c,d),c.addEventListener("dispose",s),e(d.texture,c.mapping)}else return null}}return c}function s(c){const h=c.target;h.removeEventListener("dispose",s);const u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}const ls=4,Lc=[.125,.215,.35,.446,.526,.582],Pn=20,ka=new Nd,Dc=new ce;let Ha=null,Ga=0,Va=0,Wa=!1;const Cn=(1+Math.sqrt(5))/2,cs=1/Cn,Ic=[new B(-Cn,cs,0),new B(Cn,cs,0),new B(-cs,0,Cn),new B(cs,0,Cn),new B(0,Cn,-cs),new B(0,Cn,cs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Yp=new B;class Nc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,a={}){const{size:c=256,position:h=Yp}=a;Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,h),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha,Ga,Va),this._renderer.xr.enabled=Wa,t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hn||t.mapping===Gn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:xs,format:vi,colorSpace:Vn,depthBuffer:!1},s=Uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jp(a)),this._blurMaterial=Kp(a,t,e)}return s}_compileMaterial(t){const e=new li(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,s,a){const u=new ci(90,1,e,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,y=_.toneMapping;_.getClearColor(Dc),_.toneMapping=Qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null));const S=new Cs({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),x=new li(new ss,S);let g=!1;const R=t.background;R?R.isColor&&(S.color.copy(R),t.background=null,g=!0):(S.color.copy(Dc),g=!0);for(let C=0;C<6;C++){const T=C%3;T===0?(u.up.set(0,d[C],0),u.position.set(a.x,a.y,a.z),u.lookAt(a.x+p[C],a.y,a.z)):T===1?(u.up.set(0,0,d[C]),u.position.set(a.x,a.y,a.z),u.lookAt(a.x,a.y+p[C],a.z)):(u.up.set(0,d[C],0),u.position.set(a.x,a.y,a.z),u.lookAt(a.x,a.y,a.z+p[C]));const O=this._cubeSize;Dr(s,T*O,C>2?O:0,O,O),_.setRenderTarget(s),g&&_.render(x,u),_.render(t,u)}x.geometry.dispose(),x.material.dispose(),_.toneMapping=y,_.autoClear=m,t.background=R}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Hn||t.mapping===Gn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new li(this._lodPlanes[0],a),h=a.uniforms;h.envMap.value=t;const u=this._cubeSize;Dr(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(c,ka)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),h=Ic[(s-a-1)%Ic.length];this._blur(t,a-1,a,c,h)}e.autoClear=n}_blur(t,e,n,s,a){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,n,s,"latitudinal",a),this._halfBlur(c,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,c,h){const u=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new li(this._lodPlanes[s],d),m=d.uniforms,y=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*Pn-1),S=a/M,x=isFinite(a)?1+Math.floor(p*S):Pn;x>Pn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Pn}`);const g=[];let R=0;for(let D=0;D<Pn;++D){const k=D/S,A=Math.exp(-k*k/2);g.push(A),D===0?R+=A:D<x&&(R+=2*A)}for(let D=0;D<g.length;D++)g[D]=g[D]/R;m.envMap.value=t.texture,m.samples.value=x,m.weights.value=g,m.latitudinal.value=c==="latitudinal",h&&(m.poleAxis.value=h);const{_lodMax:C}=this;m.dTheta.value=M,m.mipInt.value=C-n;const T=this._sizeLods[s],O=3*T*(s>C-ls?s-C+ls:0),U=4*(this._cubeSize-T);Dr(e,O,U,3*T,2*T),u.setRenderTarget(e),u.render(_,ka)}}function jp(o){const t=[],e=[],n=[];let s=o;const a=o-ls+1+Lc.length;for(let c=0;c<a;c++){const h=Math.pow(2,s);e.push(h);let u=1/h;c>o-ls?u=Lc[c-o+ls-1]:c===0&&(u=0),n.push(u);const d=1/(h-2),p=-d,_=1+d,m=[p,p,_,p,_,_,p,p,_,_,p,_],y=6,M=6,S=3,x=2,g=1,R=new Float32Array(S*M*y),C=new Float32Array(x*M*y),T=new Float32Array(g*M*y);for(let U=0;U<y;U++){const D=U%3*2/3-1,k=U>2?0:-1,A=[D,k,0,D+2/3,k,0,D+2/3,k+1,0,D,k,0,D+2/3,k+1,0,D,k+1,0];R.set(A,S*M*U),C.set(m,x*M*U);const P=[U,U,U,U,U,U];T.set(P,g*M*U)}const O=new je;O.setAttribute("position",new Li(R,S)),O.setAttribute("uv",new Li(C,x)),O.setAttribute("faceIndex",new Li(T,g)),t.push(O),s>ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uc(o,t,e){const n=new Mn(o,t,e);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(o,t,e,n,s){o.viewport.set(t,e,n,s),o.scissor.set(t,e,n,s)}function Kp(o,t,e){const n=new Float32Array(Pn),s=new B(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Oc(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Fc(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jp(o){let t=new WeakMap,e=null;function n(h){if(h&&h.isTexture){const u=h.mapping,d=u===mo||u===_o,p=u===Hn||u===Gn;if(d||p){let _=t.get(h);const m=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return e===null&&(e=new Nc(o)),_=d?e.fromEquirectangular(h,_):e.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return d&&y&&y.height>0||p&&y&&s(y)?(e===null&&(e=new Nc(o)),_=d?e.fromEquirectangular(h):e.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",a),_.texture):null}}}return h}function s(h){let u=0;const d=6;for(let p=0;p<d;p++)h[p]!==void 0&&u++;return u===d}function a(h){const u=h.target;u.removeEventListener("dispose",a);const d=t.get(u);d!==void 0&&(t.delete(u),d.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:c}}function Qp(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&$n("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tm(o,t,e,n){const s={},a=new WeakMap;function c(_){const m=_.target;m.index!==null&&t.remove(m.index);for(const M in m.attributes)t.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete s[m.id];const y=a.get(m);y&&(t.remove(y),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function h(_,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,e.memory.geometries++),m}function u(_){const m=_.attributes;for(const y in m)t.update(m[y],o.ARRAY_BUFFER)}function d(_){const m=[],y=_.index,M=_.attributes.position;let S=0;if(y!==null){const R=y.array;S=y.version;for(let C=0,T=R.length;C<T;C+=3){const O=R[C+0],U=R[C+1],D=R[C+2];m.push(O,U,U,D,D,O)}}else if(M!==void 0){const R=M.array;S=M.version;for(let C=0,T=R.length/3-1;C<T;C+=3){const O=C+0,U=C+1,D=C+2;m.push(O,U,U,D,D,O)}}else return;const x=new(ql(m)?cc:lc)(m,1);x.version=S;const g=a.get(_);g&&t.remove(g),a.set(_,x)}function p(_){const m=a.get(_);if(m){const y=_.index;y!==null&&m.version<y.version&&d(_)}else d(_);return a.get(_)}return{get:h,update:u,getWireframeAttribute:p}}function em(o,t,e){let n;function s(m){n=m}let a,c;function h(m){a=m.type,c=m.bytesPerElement}function u(m,y){o.drawElements(n,y,a,m*c),e.update(y,n,1)}function d(m,y,M){M!==0&&(o.drawElementsInstanced(n,y,a,m*c,M),e.update(y,n,M))}function p(m,y,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,a,m,0,M);let x=0;for(let g=0;g<M;g++)x+=y[g];e.update(x,n,1)}function _(m,y,M,S){if(M===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<m.length;g++)d(m[g]/c,y[g],S[g]);else{x.multiDrawElementsInstancedWEBGL(n,y,0,a,m,0,S,0,M);let g=0;for(let R=0;R<M;R++)g+=y[R]*S[R];e.update(g,n,1)}}this.setMode=s,this.setIndex=h,this.render=u,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function im(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,h){switch(e.calls++,c){case o.TRIANGLES:e.triangles+=h*(a/3);break;case o.LINES:e.lines+=h*(a/2);break;case o.LINE_STRIP:e.lines+=h*(a-1);break;case o.LINE_LOOP:e.lines+=h*a;break;case o.POINTS:e.points+=h*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function nm(o,t,e){const n=new WeakMap,s=new be;function a(c,h,u){const d=c.morphTargetInfluences,p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0;let m=n.get(h);if(m===void 0||m.count!==_){let A=function(){D.dispose(),n.delete(h),h.removeEventListener("dispose",A)};m!==void 0&&m.texture.dispose();const y=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],g=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let C=0;y===!0&&(C=1),M===!0&&(C=2),S===!0&&(C=3);let T=h.attributes.position.count*C,O=1;T>t.maxTextureSize&&(O=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const U=new Float32Array(T*O*4*_),D=new Jl(U,T,O,_);D.type=zi,D.needsUpdate=!0;const k=C*4;for(let P=0;P<_;P++){const N=x[P],Y=g[P],et=R[P],J=T*O*4*P;for(let $=0;$<N.count;$++){const Z=$*k;y===!0&&(s.fromBufferAttribute(N,$),U[J+Z+0]=s.x,U[J+Z+1]=s.y,U[J+Z+2]=s.z,U[J+Z+3]=0),M===!0&&(s.fromBufferAttribute(Y,$),U[J+Z+4]=s.x,U[J+Z+5]=s.y,U[J+Z+6]=s.z,U[J+Z+7]=0),S===!0&&(s.fromBufferAttribute(et,$),U[J+Z+8]=s.x,U[J+Z+9]=s.y,U[J+Z+10]=s.z,U[J+Z+11]=et.itemSize===4?s.w:1)}}m={count:_,texture:D,size:new Xt(T,O)},n.set(h,m),h.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(o,"morphTexture",c.morphTexture,e);else{let y=0;for(let S=0;S<d.length;S++)y+=d[S];const M=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(o,"morphTargetBaseInfluence",M),u.getUniforms().setValue(o,"morphTargetInfluences",d)}u.getUniforms().setValue(o,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}return{update:a}}function sm(o,t,e,n){let s=new WeakMap;function a(u){const d=n.render.frame,p=u.geometry,_=t.get(u,p);if(s.get(_)!==d&&(t.update(_),s.set(_,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),s.get(u)!==d&&(e.update(u.instanceMatrix,o.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,o.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return _}function c(){s=new WeakMap}function h(u){const d=u.target;d.removeEventListener("dispose",h),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:c}}const Bc=new ei,zc=new Sc(1,1),kc=new Jl,Hc=new Ju,Gc=new gc,Vc=[],Wc=[],$c=new Float32Array(16),Xc=new Float32Array(9),Zc=new Float32Array(4);function hs(o,t,e){const n=o[0];if(n<=0||n>0)return o;const s=t*e;let a=Vc[s];if(a===void 0&&(a=new Float32Array(s),Vc[s]=a),t!==0){n.toArray(a,0);for(let c=1,h=0;c!==t;++c)h+=e,o[c].toArray(a,h)}return a}function ze(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function ke(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Ir(o,t){let e=Wc[t];e===void 0&&(e=new Int32Array(t),Wc[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function rm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function om(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;o.uniform2fv(this.addr,t),ke(e,t)}}function am(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;o.uniform3fv(this.addr,t),ke(e,t)}}function lm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;o.uniform4fv(this.addr,t),ke(e,t)}}function cm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Zc.set(n),o.uniformMatrix2fv(this.addr,!1,Zc),ke(e,n)}}function hm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Xc.set(n),o.uniformMatrix3fv(this.addr,!1,Xc),ke(e,n)}}function um(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;$c.set(n),o.uniformMatrix4fv(this.addr,!1,$c),ke(e,n)}}function dm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function fm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;o.uniform2iv(this.addr,t),ke(e,t)}}function pm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;o.uniform3iv(this.addr,t),ke(e,t)}}function mm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;o.uniform4iv(this.addr,t),ke(e,t)}}function _m(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function gm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;o.uniform2uiv(this.addr,t),ke(e,t)}}function vm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;o.uniform3uiv(this.addr,t),ke(e,t)}}function ym(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;o.uniform4uiv(this.addr,t),ke(e,t)}}function xm(o,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(o.uniform1i(this.addr,s),n[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(zc.compareFunction=Wl,a=zc):a=Bc,e.setTexture2D(t||a,s)}function Mm(o,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(o.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hc,s)}function Sm(o,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(o.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gc,s)}function bm(o,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(o.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kc,s)}function Em(o){switch(o){case 5126:return rm;case 35664:return om;case 35665:return am;case 35666:return lm;case 35674:return cm;case 35675:return hm;case 35676:return um;case 5124:case 35670:return dm;case 35667:case 35671:return fm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return _m;case 36294:return gm;case 36295:return vm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return bm}}function Tm(o,t){o.uniform1fv(this.addr,t)}function wm(o,t){const e=hs(t,this.size,2);o.uniform2fv(this.addr,e)}function Am(o,t){const e=hs(t,this.size,3);o.uniform3fv(this.addr,e)}function Pm(o,t){const e=hs(t,this.size,4);o.uniform4fv(this.addr,e)}function Cm(o,t){const e=hs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Rm(o,t){const e=hs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Lm(o,t){const e=hs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Dm(o,t){o.uniform1iv(this.addr,t)}function Im(o,t){o.uniform2iv(this.addr,t)}function Nm(o,t){o.uniform3iv(this.addr,t)}function Um(o,t){o.uniform4iv(this.addr,t)}function Om(o,t){o.uniform1uiv(this.addr,t)}function Fm(o,t){o.uniform2uiv(this.addr,t)}function Bm(o,t){o.uniform3uiv(this.addr,t)}function zm(o,t){o.uniform4uiv(this.addr,t)}function km(o,t,e){const n=this.cache,s=t.length,a=Ir(e,s);ze(n,a)||(o.uniform1iv(this.addr,a),ke(n,a));for(let c=0;c!==s;++c)e.setTexture2D(t[c]||Bc,a[c])}function Hm(o,t,e){const n=this.cache,s=t.length,a=Ir(e,s);ze(n,a)||(o.uniform1iv(this.addr,a),ke(n,a));for(let c=0;c!==s;++c)e.setTexture3D(t[c]||Hc,a[c])}function Gm(o,t,e){const n=this.cache,s=t.length,a=Ir(e,s);ze(n,a)||(o.uniform1iv(this.addr,a),ke(n,a));for(let c=0;c!==s;++c)e.setTextureCube(t[c]||Gc,a[c])}function Vm(o,t,e){const n=this.cache,s=t.length,a=Ir(e,s);ze(n,a)||(o.uniform1iv(this.addr,a),ke(n,a));for(let c=0;c!==s;++c)e.setTexture2DArray(t[c]||kc,a[c])}function Wm(o){switch(o){case 5126:return Tm;case 35664:return wm;case 35665:return Am;case 35666:return Pm;case 35674:return Cm;case 35675:return Rm;case 35676:return Lm;case 5124:case 35670:return Dm;case 35667:case 35671:return Im;case 35668:case 35672:return Nm;case 35669:case 35673:return Um;case 5125:return Om;case 36294:return Fm;case 36295:return Bm;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Vm}}class $m{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Em(e.type)}}class Xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wm(e.type)}}class Zm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const h=s[a];h.setValue(t,e[h.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function qc(o,t){o.seq.push(t),o.map[t.id]=t}function qm(o,t,e){const n=o.name,s=n.length;for(Xa.lastIndex=0;;){const a=Xa.exec(n),c=Xa.lastIndex;let h=a[1];const u=a[2]==="]",d=a[3];if(u&&(h=h|0),d===void 0||d==="["&&c+2===s){qc(e,d===void 0?new $m(h,o,t):new Xm(h,o,t));break}else{let _=e.map[h];_===void 0&&(_=new Zm(h),qc(e,_)),e=_}}}class Nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),c=t.getUniformLocation(e,a.name);qm(a,c,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,c=e.length;a!==c;++a){const h=e[a],u=n[h.id];u.needsUpdate!==!1&&h.setValue(t,u.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const c=t[s];c.id in e&&n.push(c)}return n}}function Yc(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const Ym=37297;let jm=0;function Km(o,t){const e=o.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let c=s;c<a;c++){const h=c+1;n.push(`${h===t?">":" "} ${h}: ${e[c]}`)}return n.join(`
`)}const jc=new ee;function Jm(o){_e._getMatrix(jc,_e.workingColorSpace,o);const t=`mat3( ${jc.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(o)){case ir:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Kc(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),a=(o.getShaderInfoLog(t)||"").trim();if(n&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const h=parseInt(c[1]);return e.toUpperCase()+`

`+a+`

`+Km(o.getShaderSource(t),h)}else return a}function Qm(o,t){const e=Jm(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function t_(o,t){let e;switch(t){case Tu:e="Linear";break;case wu:e="Reinhard";break;case Au:e="Cineon";break;case Pu:e="ACESFilmic";break;case Ru:e="AgX";break;case Lu:e="Neutral";break;case Cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ur=new B;function e_(){_e.getLuminanceCoefficients(Ur);const o=Ur.x.toFixed(4),t=Ur.y.toFixed(4),e=Ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i_(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function n_(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function s_(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=o.getActiveAttrib(t,s),c=a.name;let h=1;a.type===o.FLOAT_MAT2&&(h=2),a.type===o.FLOAT_MAT3&&(h=3),a.type===o.FLOAT_MAT4&&(h=4),e[c]={type:a.type,location:o.getAttribLocation(t,c),locationSize:h}}return e}function Is(o){return o!==""}function Jc(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qc(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(o){return o.replace(r_,a_)}const o_=new Map;function a_(o,t){let e=ne[t];if(e===void 0){const n=o_.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Za(e)}const l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(o){return o.replace(l_,c_)}function c_(o,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function eh(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function h_(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Pl?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===su?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function u_(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Hn:case Gn:t="ENVMAP_TYPE_CUBE";break;case Ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function d_(o){let t="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Gn&&(t="ENVMAP_MODE_REFRACTION"),t}function f_(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Dl:t="ENVMAP_BLENDING_MULTIPLY";break;case bu:t="ENVMAP_BLENDING_MIX";break;case Eu:t="ENVMAP_BLENDING_ADD";break}return t}function p_(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function m_(o,t,e,n){const s=o.getContext(),a=e.defines;let c=e.vertexShader,h=e.fragmentShader;const u=h_(e),d=u_(e),p=d_(e),_=f_(e),m=p_(e),y=i_(e),M=n_(a),S=s.createProgram();let x,g,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Is).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Is).join(`
`),g.length>0&&(g+=`
`)):(x=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),g=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?ne.tonemapping_pars_fragment:"",e.toneMapping!==Qi?t_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Qm("linearToOutputTexel",e.outputColorSpace),e_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),c=Za(c),c=Jc(c,e),c=Qc(c,e),h=Za(h),h=Jc(h,e),h=Qc(h,e),c=th(c),h=th(h),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const C=R+x+c,T=R+g+h,O=Yc(s,s.VERTEX_SHADER,C),U=Yc(s,s.FRAGMENT_SHADER,T);s.attachShader(S,O),s.attachShader(S,U),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function D(N){if(o.debug.checkShaderErrors){const Y=s.getProgramInfoLog(S)||"",et=s.getShaderInfoLog(O)||"",J=s.getShaderInfoLog(U)||"",$=Y.trim(),Z=et.trim(),ct=J.trim();let V=!0,yt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(V=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,S,O,U);else{const st=Kc(s,O,"vertex"),gt=Kc(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+$+`
`+st+`
`+gt)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(Z===""||ct==="")&&(yt=!1);yt&&(N.diagnostics={runnable:V,programLog:$,vertexShader:{log:Z,prefix:x},fragmentShader:{log:ct,prefix:g}})}s.deleteShader(O),s.deleteShader(U),k=new Nr(s,S),A=s_(s,S)}let k;this.getUniforms=function(){return k===void 0&&D(this),k};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(S,Ym)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jm++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=O,this.fragmentShader=U,this}let __=0;class g_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new v_(t),e.set(t,n)),n}}class v_{constructor(t){this.id=__++,this.code=t,this.usedTimes=0}}function y_(o,t,e,n,s,a,c){const h=new ha,u=new g_,d=new Set,p=[],_=s.logarithmicDepthBuffer,m=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(A){return d.add(A),A===0?"uv":`uv${A}`}function x(A,P,N,Y,et){const J=Y.fog,$=et.geometry,Z=A.isMeshStandardMaterial?Y.environment:null,ct=(A.isMeshStandardMaterial?e:t).get(A.envMap||Z),V=ct&&ct.mapping===Ys?ct.image.height:null,yt=M[A.type];A.precision!==null&&(y=s.getMaxPrecision(A.precision),y!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const st=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gt=st!==void 0?st.length:0;let Ft=0;$.morphAttributes.position!==void 0&&(Ft=1),$.morphAttributes.normal!==void 0&&(Ft=2),$.morphAttributes.color!==void 0&&(Ft=3);let re,Yt,j,ot;if(yt){const ge=Di[yt];re=ge.vertexShader,Yt=ge.fragmentShader}else re=A.vertexShader,Yt=A.fragmentShader,u.update(A),j=u.getVertexShaderID(A),ot=u.getFragmentShaderID(A);const dt=o.getRenderTarget(),It=o.state.buffers.depth.getReversed(),Wt=et.isInstancedMesh===!0,jt=et.isBatchedMesh===!0,Ie=!!A.map,oe=!!A.matcap,z=!!ct,we=!!A.aoMap,kt=!!A.lightMap,fe=!!A.bumpMap,Nt=!!A.normalMap,xe=!!A.displacementMap,wt=!!A.emissiveMap,Qt=!!A.metalnessMap,Oe=!!A.roughnessMap,Ne=A.anisotropy>0,I=A.clearcoat>0,E=A.dispersion>0,q=A.iridescence>0,nt=A.sheen>0,lt=A.transmission>0,it=Ne&&!!A.anisotropyMap,Ut=I&&!!A.clearcoatMap,mt=I&&!!A.clearcoatNormalMap,Ct=I&&!!A.clearcoatRoughnessMap,Rt=q&&!!A.iridescenceMap,ft=q&&!!A.iridescenceThicknessMap,Mt=nt&&!!A.sheenColorMap,$t=nt&&!!A.sheenRoughnessMap,Lt=!!A.specularMap,vt=!!A.specularColorMap,Jt=!!A.specularIntensityMap,H=lt&&!!A.transmissionMap,pt=lt&&!!A.thicknessMap,_t=!!A.gradientMap,Tt=!!A.alphaMap,ht=A.alphaTest>0,rt=!!A.alphaHash,Pt=!!A.extensions;let Kt=Qi;A.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Kt=o.toneMapping);const Ae={shaderID:yt,shaderType:A.type,shaderName:A.name,vertexShader:re,fragmentShader:Yt,defines:A.defines,customVertexShaderID:j,customFragmentShaderID:ot,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:jt,batchingColor:jt&&et._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&et.instanceColor!==null,instancingMorph:Wt&&et.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Vn,alphaToCoverage:!!A.alphaToCoverage,map:Ie,matcap:oe,envMap:z,envMapMode:z&&ct.mapping,envMapCubeUVHeight:V,aoMap:we,lightMap:kt,bumpMap:fe,normalMap:Nt,displacementMap:m&&xe,emissiveMap:wt,normalMapObjectSpace:Nt&&A.normalMapType===Uu,normalMapTangentSpace:Nt&&A.normalMapType===Gl,metalnessMap:Qt,roughnessMap:Oe,anisotropy:Ne,anisotropyMap:it,clearcoat:I,clearcoatMap:Ut,clearcoatNormalMap:mt,clearcoatRoughnessMap:Ct,dispersion:E,iridescence:q,iridescenceMap:Rt,iridescenceThicknessMap:ft,sheen:nt,sheenColorMap:Mt,sheenRoughnessMap:$t,specularMap:Lt,specularColorMap:vt,specularIntensityMap:Jt,transmission:lt,transmissionMap:H,thicknessMap:pt,gradientMap:_t,opaque:A.transparent===!1&&A.blending===zn&&A.alphaToCoverage===!1,alphaMap:Tt,alphaTest:ht,alphaHash:rt,combine:A.combine,mapUv:Ie&&S(A.map.channel),aoMapUv:we&&S(A.aoMap.channel),lightMapUv:kt&&S(A.lightMap.channel),bumpMapUv:fe&&S(A.bumpMap.channel),normalMapUv:Nt&&S(A.normalMap.channel),displacementMapUv:xe&&S(A.displacementMap.channel),emissiveMapUv:wt&&S(A.emissiveMap.channel),metalnessMapUv:Qt&&S(A.metalnessMap.channel),roughnessMapUv:Oe&&S(A.roughnessMap.channel),anisotropyMapUv:it&&S(A.anisotropyMap.channel),clearcoatMapUv:Ut&&S(A.clearcoatMap.channel),clearcoatNormalMapUv:mt&&S(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&S(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&S(A.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&S(A.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&S(A.sheenColorMap.channel),sheenRoughnessMapUv:$t&&S(A.sheenRoughnessMap.channel),specularMapUv:Lt&&S(A.specularMap.channel),specularColorMapUv:vt&&S(A.specularColorMap.channel),specularIntensityMapUv:Jt&&S(A.specularIntensityMap.channel),transmissionMapUv:H&&S(A.transmissionMap.channel),thicknessMapUv:pt&&S(A.thicknessMap.channel),alphaMapUv:Tt&&S(A.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Nt||Ne),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!$.attributes.uv&&(Ie||Tt),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:It,skinning:et.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Ft,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&N.length>0,shadowMapType:o.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Ie&&A.map.isVideoTexture===!0&&_e.getTransfer(A.map.colorSpace)===Se,decodeVideoTextureEmissive:wt&&A.emissiveMap.isVideoTexture===!0&&_e.getTransfer(A.emissiveMap.colorSpace)===Se,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===wi,flipSided:A.side===Qe,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Pt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&A.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ae.vertexUv1s=d.has(1),Ae.vertexUv2s=d.has(2),Ae.vertexUv3s=d.has(3),d.clear(),Ae}function g(A){const P=[];if(A.shaderID?P.push(A.shaderID):(P.push(A.customVertexShaderID),P.push(A.customFragmentShaderID)),A.defines!==void 0)for(const N in A.defines)P.push(N),P.push(A.defines[N]);return A.isRawShaderMaterial===!1&&(R(P,A),C(P,A),P.push(o.outputColorSpace)),P.push(A.customProgramCacheKey),P.join()}function R(A,P){A.push(P.precision),A.push(P.outputColorSpace),A.push(P.envMapMode),A.push(P.envMapCubeUVHeight),A.push(P.mapUv),A.push(P.alphaMapUv),A.push(P.lightMapUv),A.push(P.aoMapUv),A.push(P.bumpMapUv),A.push(P.normalMapUv),A.push(P.displacementMapUv),A.push(P.emissiveMapUv),A.push(P.metalnessMapUv),A.push(P.roughnessMapUv),A.push(P.anisotropyMapUv),A.push(P.clearcoatMapUv),A.push(P.clearcoatNormalMapUv),A.push(P.clearcoatRoughnessMapUv),A.push(P.iridescenceMapUv),A.push(P.iridescenceThicknessMapUv),A.push(P.sheenColorMapUv),A.push(P.sheenRoughnessMapUv),A.push(P.specularMapUv),A.push(P.specularColorMapUv),A.push(P.specularIntensityMapUv),A.push(P.transmissionMapUv),A.push(P.thicknessMapUv),A.push(P.combine),A.push(P.fogExp2),A.push(P.sizeAttenuation),A.push(P.morphTargetsCount),A.push(P.morphAttributeCount),A.push(P.numDirLights),A.push(P.numPointLights),A.push(P.numSpotLights),A.push(P.numSpotLightMaps),A.push(P.numHemiLights),A.push(P.numRectAreaLights),A.push(P.numDirLightShadows),A.push(P.numPointLightShadows),A.push(P.numSpotLightShadows),A.push(P.numSpotLightShadowsWithMaps),A.push(P.numLightProbes),A.push(P.shadowMapType),A.push(P.toneMapping),A.push(P.numClippingPlanes),A.push(P.numClipIntersection),A.push(P.depthPacking)}function C(A,P){h.disableAll(),P.supportsVertexTextures&&h.enable(0),P.instancing&&h.enable(1),P.instancingColor&&h.enable(2),P.instancingMorph&&h.enable(3),P.matcap&&h.enable(4),P.envMap&&h.enable(5),P.normalMapObjectSpace&&h.enable(6),P.normalMapTangentSpace&&h.enable(7),P.clearcoat&&h.enable(8),P.iridescence&&h.enable(9),P.alphaTest&&h.enable(10),P.vertexColors&&h.enable(11),P.vertexAlphas&&h.enable(12),P.vertexUv1s&&h.enable(13),P.vertexUv2s&&h.enable(14),P.vertexUv3s&&h.enable(15),P.vertexTangents&&h.enable(16),P.anisotropy&&h.enable(17),P.alphaHash&&h.enable(18),P.batching&&h.enable(19),P.dispersion&&h.enable(20),P.batchingColor&&h.enable(21),P.gradientMap&&h.enable(22),A.push(h.mask),h.disableAll(),P.fog&&h.enable(0),P.useFog&&h.enable(1),P.flatShading&&h.enable(2),P.logarithmicDepthBuffer&&h.enable(3),P.reversedDepthBuffer&&h.enable(4),P.skinning&&h.enable(5),P.morphTargets&&h.enable(6),P.morphNormals&&h.enable(7),P.morphColors&&h.enable(8),P.premultipliedAlpha&&h.enable(9),P.shadowMapEnabled&&h.enable(10),P.doubleSided&&h.enable(11),P.flipSided&&h.enable(12),P.useDepthPacking&&h.enable(13),P.dithering&&h.enable(14),P.transmission&&h.enable(15),P.sheen&&h.enable(16),P.opaque&&h.enable(17),P.pointsUvs&&h.enable(18),P.decodeVideoTexture&&h.enable(19),P.decodeVideoTextureEmissive&&h.enable(20),P.alphaToCoverage&&h.enable(21),A.push(h.mask)}function T(A){const P=M[A.type];let N;if(P){const Y=Di[P];N=ud.clone(Y.uniforms)}else N=A.uniforms;return N}function O(A,P){let N;for(let Y=0,et=p.length;Y<et;Y++){const J=p[Y];if(J.cacheKey===P){N=J,++N.usedTimes;break}}return N===void 0&&(N=new m_(o,P,A,a),p.push(N)),N}function U(A){if(--A.usedTimes===0){const P=p.indexOf(A);p[P]=p[p.length-1],p.pop(),A.destroy()}}function D(A){u.remove(A)}function k(){u.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:T,acquireProgram:O,releaseProgram:U,releaseShaderCache:D,programs:p,dispose:k}}function x_(){let o=new WeakMap;function t(c){return o.has(c)}function e(c){let h=o.get(c);return h===void 0&&(h={},o.set(c,h)),h}function n(c){o.delete(c)}function s(c,h,u){o.get(c)[h]=u}function a(){o=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function M_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function ih(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function nh(){const o=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function c(_,m,y,M,S,x){let g=o[t];return g===void 0?(g={id:_.id,object:_,geometry:m,material:y,groupOrder:M,renderOrder:_.renderOrder,z:S,group:x},o[t]=g):(g.id=_.id,g.object=_,g.geometry=m,g.material=y,g.groupOrder=M,g.renderOrder=_.renderOrder,g.z=S,g.group=x),t++,g}function h(_,m,y,M,S,x){const g=c(_,m,y,M,S,x);y.transmission>0?n.push(g):y.transparent===!0?s.push(g):e.push(g)}function u(_,m,y,M,S,x){const g=c(_,m,y,M,S,x);y.transmission>0?n.unshift(g):y.transparent===!0?s.unshift(g):e.unshift(g)}function d(_,m){e.length>1&&e.sort(_||M_),n.length>1&&n.sort(m||ih),s.length>1&&s.sort(m||ih)}function p(){for(let _=t,m=o.length;_<m;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:h,unshift:u,finish:p,sort:d}}function S_(){let o=new WeakMap;function t(n,s){const a=o.get(n);let c;return a===void 0?(c=new nh,o.set(n,[c])):s>=a.length?(c=new nh,a.push(c)):c=a[s],c}function e(){o=new WeakMap}return{get:t,dispose:e}}function b_(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new ce};break;case"SpotLight":e={position:new B,direction:new B,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new B,halfWidth:new B,halfHeight:new B};break}return o[t.id]=e,e}}}function E_(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let T_=0;function w_(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function A_(o){const t=new b_,e=E_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new B);const s=new B,a=new De,c=new De;function h(d){let p=0,_=0,m=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let y=0,M=0,S=0,x=0,g=0,R=0,C=0,T=0,O=0,U=0,D=0;d.sort(w_);for(let A=0,P=d.length;A<P;A++){const N=d[A],Y=N.color,et=N.intensity,J=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=Y.r*et,_+=Y.g*et,m+=Y.b*et;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(N.sh.coefficients[Z],et);D++}else if(N.isDirectionalLight){const Z=t.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ct=N.shadow,V=e.get(N);V.shadowIntensity=ct.intensity,V.shadowBias=ct.bias,V.shadowNormalBias=ct.normalBias,V.shadowRadius=ct.radius,V.shadowMapSize=ct.mapSize,n.directionalShadow[y]=V,n.directionalShadowMap[y]=$,n.directionalShadowMatrix[y]=N.shadow.matrix,R++}n.directional[y]=Z,y++}else if(N.isSpotLight){const Z=t.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(Y).multiplyScalar(et),Z.distance=J,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,n.spot[S]=Z;const ct=N.shadow;if(N.map&&(n.spotLightMap[O]=N.map,O++,ct.updateMatrices(N),N.castShadow&&U++),n.spotLightMatrix[S]=ct.matrix,N.castShadow){const V=e.get(N);V.shadowIntensity=ct.intensity,V.shadowBias=ct.bias,V.shadowNormalBias=ct.normalBias,V.shadowRadius=ct.radius,V.shadowMapSize=ct.mapSize,n.spotShadow[S]=V,n.spotShadowMap[S]=$,T++}S++}else if(N.isRectAreaLight){const Z=t.get(N);Z.color.copy(Y).multiplyScalar(et),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),n.rectArea[x]=Z,x++}else if(N.isPointLight){const Z=t.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const ct=N.shadow,V=e.get(N);V.shadowIntensity=ct.intensity,V.shadowBias=ct.bias,V.shadowNormalBias=ct.normalBias,V.shadowRadius=ct.radius,V.shadowMapSize=ct.mapSize,V.shadowCameraNear=ct.camera.near,V.shadowCameraFar=ct.camera.far,n.pointShadow[M]=V,n.pointShadowMap[M]=$,n.pointShadowMatrix[M]=N.shadow.matrix,C++}n.point[M]=Z,M++}else if(N.isHemisphereLight){const Z=t.get(N);Z.skyColor.copy(N.color).multiplyScalar(et),Z.groundColor.copy(N.groundColor).multiplyScalar(et),n.hemi[g]=Z,g++}}x>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=_,n.ambient[2]=m;const k=n.hash;(k.directionalLength!==y||k.pointLength!==M||k.spotLength!==S||k.rectAreaLength!==x||k.hemiLength!==g||k.numDirectionalShadows!==R||k.numPointShadows!==C||k.numSpotShadows!==T||k.numSpotMaps!==O||k.numLightProbes!==D)&&(n.directional.length=y,n.spot.length=S,n.rectArea.length=x,n.point.length=M,n.hemi.length=g,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=T+O-U,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=D,k.directionalLength=y,k.pointLength=M,k.spotLength=S,k.rectAreaLength=x,k.hemiLength=g,k.numDirectionalShadows=R,k.numPointShadows=C,k.numSpotShadows=T,k.numSpotMaps=O,k.numLightProbes=D,n.version=T_++)}function u(d,p){let _=0,m=0,y=0,M=0,S=0;const x=p.matrixWorldInverse;for(let g=0,R=d.length;g<R;g++){const C=d[g];if(C.isDirectionalLight){const T=n.directional[_];T.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),_++}else if(C.isSpotLight){const T=n.spot[y];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),y++}else if(C.isRectAreaLight){const T=n.rectArea[M];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(x),c.identity(),a.copy(C.matrixWorld),a.premultiply(x),c.extractRotation(a),T.halfWidth.set(C.width*.5,0,0),T.halfHeight.set(0,C.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),M++}else if(C.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(x),m++}else if(C.isHemisphereLight){const T=n.hemi[S];T.direction.setFromMatrixPosition(C.matrixWorld),T.direction.transformDirection(x),S++}}}return{setup:h,setupView:u,state:n}}function sh(o){const t=new A_(o),e=[],n=[];function s(p){d.camera=p,e.length=0,n.length=0}function a(p){e.push(p)}function c(p){n.push(p)}function h(){t.setup(e)}function u(p){t.setupView(e,p)}const d={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:c}}function P_(o){let t=new WeakMap;function e(s,a=0){const c=t.get(s);let h;return c===void 0?(h=new sh(o),t.set(s,[h])):a>=c.length?(h=new sh(o),c.push(h)):h=c[a],h}function n(){t=new WeakMap}return{get:e,dispose:n}}const C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function L_(o,t,e){let n=new Ta;const s=new Xt,a=new Xt,c=new be,h=new Pd({depthPacking:Nu}),u=new Cd,d={},p=e.maxTextureSize,_={[Ki]:Qe,[Qe]:Ki,[wi]:wi},m=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:C_,fragmentShader:R_}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const M=new je;M.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new li(M,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let g=this.type;this.render=function(U,D,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;const A=o.getRenderTarget(),P=o.getActiveCubeFace(),N=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(Ji),Y.buffers.depth.getReversed()?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const et=g!==Bi&&this.type===Bi,J=g===Bi&&this.type!==Bi;for(let $=0,Z=U.length;$<Z;$++){const ct=U[$],V=ct.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const yt=V.getFrameExtents();if(s.multiply(yt),a.copy(V.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/yt.x),s.x=a.x*yt.x,V.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/yt.y),s.y=a.y*yt.y,V.mapSize.y=a.y)),V.map===null||et===!0||J===!0){const gt=this.type!==Bi?{minFilter:gi,magFilter:gi}:{};V.map!==null&&V.map.dispose(),V.map=new Mn(s.x,s.y,gt),V.map.texture.name=ct.name+".shadowMap",V.camera.updateProjectionMatrix()}o.setRenderTarget(V.map),o.clear();const st=V.getViewportCount();for(let gt=0;gt<st;gt++){const Ft=V.getViewport(gt);c.set(a.x*Ft.x,a.y*Ft.y,a.x*Ft.z,a.y*Ft.w),Y.viewport(c),V.updateMatrices(ct,gt),n=V.getFrustum(),T(D,k,V.camera,ct,this.type)}V.isPointLightShadow!==!0&&this.type===Bi&&R(V,k),V.needsUpdate=!1}g=this.type,x.needsUpdate=!1,o.setRenderTarget(A,P,N)};function R(U,D){const k=t.update(S);m.defines.VSM_SAMPLES!==U.blurSamples&&(m.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Mn(s.x,s.y)),m.uniforms.shadow_pass.value=U.map.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(D,null,k,m,S,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(D,null,k,y,S,null)}function C(U,D,k,A){let P=null;const N=k.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(N!==void 0)P=N;else if(P=k.isPointLight===!0?u:h,o.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const Y=P.uuid,et=D.uuid;let J=d[Y];J===void 0&&(J={},d[Y]=J);let $=J[et];$===void 0&&($=P.clone(),J[et]=$,D.addEventListener("dispose",O)),P=$}if(P.visible=D.visible,P.wireframe=D.wireframe,A===Bi?P.side=D.shadowSide!==null?D.shadowSide:D.side:P.side=D.shadowSide!==null?D.shadowSide:_[D.side],P.alphaMap=D.alphaMap,P.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,P.map=D.map,P.clipShadows=D.clipShadows,P.clippingPlanes=D.clippingPlanes,P.clipIntersection=D.clipIntersection,P.displacementMap=D.displacementMap,P.displacementScale=D.displacementScale,P.displacementBias=D.displacementBias,P.wireframeLinewidth=D.wireframeLinewidth,P.linewidth=D.linewidth,k.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const Y=o.properties.get(P);Y.light=k}return P}function T(U,D,k,A,P){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&P===Bi)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,U.matrixWorld);const et=t.update(U),J=U.material;if(Array.isArray(J)){const $=et.groups;for(let Z=0,ct=$.length;Z<ct;Z++){const V=$[Z],yt=J[V.materialIndex];if(yt&&yt.visible){const st=C(U,yt,A,P);U.onBeforeShadow(o,U,D,k,et,st,V),o.renderBufferDirect(k,null,et,st,U,V),U.onAfterShadow(o,U,D,k,et,st,V)}}}else if(J.visible){const $=C(U,J,A,P);U.onBeforeShadow(o,U,D,k,et,$,null),o.renderBufferDirect(k,null,et,$,U,null),U.onAfterShadow(o,U,D,k,et,$,null)}}const Y=U.children;for(let et=0,J=Y.length;et<J;et++)T(Y[et],D,k,A,P)}function O(U){U.target.removeEventListener("dispose",O);for(const k in d){const A=d[k],P=U.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}const D_={[ao]:lo,[co]:fo,[ho]:po,[kn]:uo,[lo]:ao,[fo]:co,[po]:ho,[uo]:kn};function I_(o,t){function e(){let H=!1;const pt=new be;let _t=null;const Tt=new be(0,0,0,0);return{setMask:function(ht){_t!==ht&&!H&&(o.colorMask(ht,ht,ht,ht),_t=ht)},setLocked:function(ht){H=ht},setClear:function(ht,rt,Pt,Kt,Ae){Ae===!0&&(ht*=Kt,rt*=Kt,Pt*=Kt),pt.set(ht,rt,Pt,Kt),Tt.equals(pt)===!1&&(o.clearColor(ht,rt,Pt,Kt),Tt.copy(pt))},reset:function(){H=!1,_t=null,Tt.set(-1,0,0,0)}}}function n(){let H=!1,pt=!1,_t=null,Tt=null,ht=null;return{setReversed:function(rt){if(pt!==rt){const Pt=t.get("EXT_clip_control");rt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),pt=rt;const Kt=ht;ht=null,this.setClear(Kt)}},getReversed:function(){return pt},setTest:function(rt){rt?dt(o.DEPTH_TEST):It(o.DEPTH_TEST)},setMask:function(rt){_t!==rt&&!H&&(o.depthMask(rt),_t=rt)},setFunc:function(rt){if(pt&&(rt=D_[rt]),Tt!==rt){switch(rt){case ao:o.depthFunc(o.NEVER);break;case lo:o.depthFunc(o.ALWAYS);break;case co:o.depthFunc(o.LESS);break;case kn:o.depthFunc(o.LEQUAL);break;case ho:o.depthFunc(o.EQUAL);break;case uo:o.depthFunc(o.GEQUAL);break;case fo:o.depthFunc(o.GREATER);break;case po:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Tt=rt}},setLocked:function(rt){H=rt},setClear:function(rt){ht!==rt&&(pt&&(rt=1-rt),o.clearDepth(rt),ht=rt)},reset:function(){H=!1,_t=null,Tt=null,ht=null,pt=!1}}}function s(){let H=!1,pt=null,_t=null,Tt=null,ht=null,rt=null,Pt=null,Kt=null,Ae=null;return{setTest:function(ge){H||(ge?dt(o.STENCIL_TEST):It(o.STENCIL_TEST))},setMask:function(ge){pt!==ge&&!H&&(o.stencilMask(ge),pt=ge)},setFunc:function(ge,hi,pi){(_t!==ge||Tt!==hi||ht!==pi)&&(o.stencilFunc(ge,hi,pi),_t=ge,Tt=hi,ht=pi)},setOp:function(ge,hi,pi){(rt!==ge||Pt!==hi||Kt!==pi)&&(o.stencilOp(ge,hi,pi),rt=ge,Pt=hi,Kt=pi)},setLocked:function(ge){H=ge},setClear:function(ge){Ae!==ge&&(o.clearStencil(ge),Ae=ge)},reset:function(){H=!1,pt=null,_t=null,Tt=null,ht=null,rt=null,Pt=null,Kt=null,Ae=null}}}const a=new e,c=new n,h=new s,u=new WeakMap,d=new WeakMap;let p={},_={},m=new WeakMap,y=[],M=null,S=!1,x=null,g=null,R=null,C=null,T=null,O=null,U=null,D=new ce(0,0,0),k=0,A=!1,P=null,N=null,Y=null,et=null,J=null;const $=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ct=0;const V=o.getParameter(o.VERSION);V.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=ct>=1):V.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=ct>=2);let yt=null,st={};const gt=o.getParameter(o.SCISSOR_BOX),Ft=o.getParameter(o.VIEWPORT),re=new be().fromArray(gt),Yt=new be().fromArray(Ft);function j(H,pt,_t,Tt){const ht=new Uint8Array(4),rt=o.createTexture();o.bindTexture(H,rt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Pt=0;Pt<_t;Pt++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(pt,0,o.RGBA,1,1,Tt,0,o.RGBA,o.UNSIGNED_BYTE,ht):o.texImage2D(pt+Pt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ht);return rt}const ot={};ot[o.TEXTURE_2D]=j(o.TEXTURE_2D,o.TEXTURE_2D,1),ot[o.TEXTURE_CUBE_MAP]=j(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[o.TEXTURE_2D_ARRAY]=j(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ot[o.TEXTURE_3D]=j(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),dt(o.DEPTH_TEST),c.setFunc(kn),fe(!1),Nt(Al),dt(o.CULL_FACE),we(Ji);function dt(H){p[H]!==!0&&(o.enable(H),p[H]=!0)}function It(H){p[H]!==!1&&(o.disable(H),p[H]=!1)}function Wt(H,pt){return _[H]!==pt?(o.bindFramebuffer(H,pt),_[H]=pt,H===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=pt),H===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=pt),!0):!1}function jt(H,pt){let _t=y,Tt=!1;if(H){_t=m.get(pt),_t===void 0&&(_t=[],m.set(pt,_t));const ht=H.textures;if(_t.length!==ht.length||_t[0]!==o.COLOR_ATTACHMENT0){for(let rt=0,Pt=ht.length;rt<Pt;rt++)_t[rt]=o.COLOR_ATTACHMENT0+rt;_t.length=ht.length,Tt=!0}}else _t[0]!==o.BACK&&(_t[0]=o.BACK,Tt=!0);Tt&&o.drawBuffers(_t)}function Ie(H){return M!==H?(o.useProgram(H),M=H,!0):!1}const oe={[mn]:o.FUNC_ADD,[ou]:o.FUNC_SUBTRACT,[au]:o.FUNC_REVERSE_SUBTRACT};oe[lu]=o.MIN,oe[cu]=o.MAX;const z={[hu]:o.ZERO,[uu]:o.ONE,[du]:o.SRC_COLOR,[ro]:o.SRC_ALPHA,[vu]:o.SRC_ALPHA_SATURATE,[_u]:o.DST_COLOR,[pu]:o.DST_ALPHA,[fu]:o.ONE_MINUS_SRC_COLOR,[oo]:o.ONE_MINUS_SRC_ALPHA,[gu]:o.ONE_MINUS_DST_COLOR,[mu]:o.ONE_MINUS_DST_ALPHA,[yu]:o.CONSTANT_COLOR,[xu]:o.ONE_MINUS_CONSTANT_COLOR,[Mu]:o.CONSTANT_ALPHA,[Su]:o.ONE_MINUS_CONSTANT_ALPHA};function we(H,pt,_t,Tt,ht,rt,Pt,Kt,Ae,ge){if(H===Ji){S===!0&&(It(o.BLEND),S=!1);return}if(S===!1&&(dt(o.BLEND),S=!0),H!==ru){if(H!==x||ge!==A){if((g!==mn||T!==mn)&&(o.blendEquation(o.FUNC_ADD),g=mn,T=mn),ge)switch(H){case zn:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cl:o.blendFunc(o.ONE,o.ONE);break;case Rl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ll:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case zn:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Rl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ll:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}R=null,C=null,O=null,U=null,D.set(0,0,0),k=0,x=H,A=ge}return}ht=ht||pt,rt=rt||_t,Pt=Pt||Tt,(pt!==g||ht!==T)&&(o.blendEquationSeparate(oe[pt],oe[ht]),g=pt,T=ht),(_t!==R||Tt!==C||rt!==O||Pt!==U)&&(o.blendFuncSeparate(z[_t],z[Tt],z[rt],z[Pt]),R=_t,C=Tt,O=rt,U=Pt),(Kt.equals(D)===!1||Ae!==k)&&(o.blendColor(Kt.r,Kt.g,Kt.b,Ae),D.copy(Kt),k=Ae),x=H,A=!1}function kt(H,pt){H.side===wi?It(o.CULL_FACE):dt(o.CULL_FACE);let _t=H.side===Qe;pt&&(_t=!_t),fe(_t),H.blending===zn&&H.transparent===!1?we(Ji):we(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const Tt=H.stencilWrite;h.setTest(Tt),Tt&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),wt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):It(o.SAMPLE_ALPHA_TO_COVERAGE)}function fe(H){P!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),P=H)}function Nt(H){H!==iu?(dt(o.CULL_FACE),H!==N&&(H===Al?o.cullFace(o.BACK):H===nu?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):It(o.CULL_FACE),N=H}function xe(H){H!==Y&&(Z&&o.lineWidth(H),Y=H)}function wt(H,pt,_t){H?(dt(o.POLYGON_OFFSET_FILL),(et!==pt||J!==_t)&&(o.polygonOffset(pt,_t),et=pt,J=_t)):It(o.POLYGON_OFFSET_FILL)}function Qt(H){H?dt(o.SCISSOR_TEST):It(o.SCISSOR_TEST)}function Oe(H){H===void 0&&(H=o.TEXTURE0+$-1),yt!==H&&(o.activeTexture(H),yt=H)}function Ne(H,pt,_t){_t===void 0&&(yt===null?_t=o.TEXTURE0+$-1:_t=yt);let Tt=st[_t];Tt===void 0&&(Tt={type:void 0,texture:void 0},st[_t]=Tt),(Tt.type!==H||Tt.texture!==pt)&&(yt!==_t&&(o.activeTexture(_t),yt=_t),o.bindTexture(H,pt||ot[H]),Tt.type=H,Tt.texture=pt)}function I(){const H=st[yt];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function nt(){try{o.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{o.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function it(){try{o.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ut(){try{o.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(){try{o.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ct(){try{o.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Rt(){try{o.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{o.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Mt(H){re.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),re.copy(H))}function $t(H){Yt.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Yt.copy(H))}function Lt(H,pt){let _t=d.get(pt);_t===void 0&&(_t=new WeakMap,d.set(pt,_t));let Tt=_t.get(H);Tt===void 0&&(Tt=o.getUniformBlockIndex(pt,H.name),_t.set(H,Tt))}function vt(H,pt){const Tt=d.get(pt).get(H);u.get(pt)!==Tt&&(o.uniformBlockBinding(pt,Tt,H.__bindingPointIndex),u.set(pt,Tt))}function Jt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},yt=null,st={},_={},m=new WeakMap,y=[],M=null,S=!1,x=null,g=null,R=null,C=null,T=null,O=null,U=null,D=new ce(0,0,0),k=0,A=!1,P=null,N=null,Y=null,et=null,J=null,re.set(0,0,o.canvas.width,o.canvas.height),Yt.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:dt,disable:It,bindFramebuffer:Wt,drawBuffers:jt,useProgram:Ie,setBlending:we,setMaterial:kt,setFlipSided:fe,setCullFace:Nt,setLineWidth:xe,setPolygonOffset:wt,setScissorTest:Qt,activeTexture:Oe,bindTexture:Ne,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:Rt,texImage3D:ft,updateUBOMapping:Lt,uniformBlockBinding:vt,texStorage2D:mt,texStorage3D:Ct,texSubImage2D:nt,texSubImage3D:lt,compressedTexSubImage2D:it,compressedTexSubImage3D:Ut,scissor:Mt,viewport:$t,reset:Jt}}function N_(o,t,e,n,s,a,c){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Xt,p=new WeakMap;let _;const m=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,E){return y?new OffscreenCanvas(I,E):rr("canvas")}function S(I,E,q){let nt=1;const lt=Ne(I);if((lt.width>q||lt.height>q)&&(nt=q/Math.max(lt.width,lt.height)),nt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const it=Math.floor(nt*lt.width),Ut=Math.floor(nt*lt.height);_===void 0&&(_=M(it,Ut));const mt=E?M(it,Ut):_;return mt.width=it,mt.height=Ut,mt.getContext("2d").drawImage(I,0,0,it,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+it+"x"+Ut+")."),mt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),I;return I}function x(I){return I.generateMipmaps}function g(I){o.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(I,E,q,nt,lt=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let it=E;if(E===o.RED&&(q===o.FLOAT&&(it=o.R32F),q===o.HALF_FLOAT&&(it=o.R16F),q===o.UNSIGNED_BYTE&&(it=o.R8)),E===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(it=o.R8UI),q===o.UNSIGNED_SHORT&&(it=o.R16UI),q===o.UNSIGNED_INT&&(it=o.R32UI),q===o.BYTE&&(it=o.R8I),q===o.SHORT&&(it=o.R16I),q===o.INT&&(it=o.R32I)),E===o.RG&&(q===o.FLOAT&&(it=o.RG32F),q===o.HALF_FLOAT&&(it=o.RG16F),q===o.UNSIGNED_BYTE&&(it=o.RG8)),E===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(it=o.RG8UI),q===o.UNSIGNED_SHORT&&(it=o.RG16UI),q===o.UNSIGNED_INT&&(it=o.RG32UI),q===o.BYTE&&(it=o.RG8I),q===o.SHORT&&(it=o.RG16I),q===o.INT&&(it=o.RG32I)),E===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(it=o.RGB8UI),q===o.UNSIGNED_SHORT&&(it=o.RGB16UI),q===o.UNSIGNED_INT&&(it=o.RGB32UI),q===o.BYTE&&(it=o.RGB8I),q===o.SHORT&&(it=o.RGB16I),q===o.INT&&(it=o.RGB32I)),E===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(it=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(it=o.RGBA16UI),q===o.UNSIGNED_INT&&(it=o.RGBA32UI),q===o.BYTE&&(it=o.RGBA8I),q===o.SHORT&&(it=o.RGBA16I),q===o.INT&&(it=o.RGBA32I)),E===o.RGB&&q===o.UNSIGNED_INT_5_9_9_9_REV&&(it=o.RGB9_E5),E===o.RGBA){const Ut=lt?ir:_e.getTransfer(nt);q===o.FLOAT&&(it=o.RGBA32F),q===o.HALF_FLOAT&&(it=o.RGBA16F),q===o.UNSIGNED_BYTE&&(it=Ut===Se?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(it=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(it=o.RGB5_A1)}return(it===o.R16F||it===o.R32F||it===o.RG16F||it===o.RG32F||it===o.RGBA16F||it===o.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function T(I,E){let q;return I?E===null||E===vn||E===Ms?q=o.DEPTH24_STENCIL8:E===zi?q=o.DEPTH32F_STENCIL8:E===ys&&(q=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vn||E===Ms?q=o.DEPTH_COMPONENT24:E===zi?q=o.DEPTH_COMPONENT32F:E===ys&&(q=o.DEPTH_COMPONENT16),q}function O(I,E){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==gi&&I.minFilter!==Ai?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function U(I){const E=I.target;E.removeEventListener("dispose",U),k(E),E.isVideoTexture&&p.delete(E)}function D(I){const E=I.target;E.removeEventListener("dispose",D),P(E)}function k(I){const E=n.get(I);if(E.__webglInit===void 0)return;const q=I.source,nt=m.get(q);if(nt){const lt=nt[E.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&A(I),Object.keys(nt).length===0&&m.delete(q)}n.remove(I)}function A(I){const E=n.get(I);o.deleteTexture(E.__webglTexture);const q=I.source,nt=m.get(q);delete nt[E.__cacheKey],c.memory.textures--}function P(I){const E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(E.__webglFramebuffer[nt]))for(let lt=0;lt<E.__webglFramebuffer[nt].length;lt++)o.deleteFramebuffer(E.__webglFramebuffer[nt][lt]);else o.deleteFramebuffer(E.__webglFramebuffer[nt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[nt])}else{if(Array.isArray(E.__webglFramebuffer))for(let nt=0;nt<E.__webglFramebuffer.length;nt++)o.deleteFramebuffer(E.__webglFramebuffer[nt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let nt=0;nt<E.__webglColorRenderbuffer.length;nt++)E.__webglColorRenderbuffer[nt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[nt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=I.textures;for(let nt=0,lt=q.length;nt<lt;nt++){const it=n.get(q[nt]);it.__webglTexture&&(o.deleteTexture(it.__webglTexture),c.memory.textures--),n.remove(q[nt])}n.remove(I)}let N=0;function Y(){N=0}function et(){const I=N;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),N+=1,I}function J(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function $(I,E){const q=n.get(I);if(I.isVideoTexture&&Qt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){const nt=I.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(q,I,E);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+E)}function Z(I,E){const q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){ot(q,I,E);return}e.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+E)}function ct(I,E){const q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){ot(q,I,E);return}e.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+E)}function V(I,E){const q=n.get(I);if(I.version>0&&q.__version!==I.version){dt(q,I,E);return}e.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+E)}const yt={[go]:o.REPEAT,[_n]:o.CLAMP_TO_EDGE,[vo]:o.MIRRORED_REPEAT},st={[gi]:o.NEAREST,[Du]:o.NEAREST_MIPMAP_NEAREST,[js]:o.NEAREST_MIPMAP_LINEAR,[Ai]:o.LINEAR,[yo]:o.LINEAR_MIPMAP_NEAREST,[gn]:o.LINEAR_MIPMAP_LINEAR},gt={[Ou]:o.NEVER,[Gu]:o.ALWAYS,[Fu]:o.LESS,[Wl]:o.LEQUAL,[Bu]:o.EQUAL,[Hu]:o.GEQUAL,[zu]:o.GREATER,[ku]:o.NOTEQUAL};function Ft(I,E){if(E.type===zi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ai||E.magFilter===yo||E.magFilter===js||E.magFilter===gn||E.minFilter===Ai||E.minFilter===yo||E.minFilter===js||E.minFilter===gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,yt[E.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,yt[E.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,yt[E.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,st[E.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,st[E.minFilter]),E.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,gt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===gi||E.minFilter!==js&&E.minFilter!==gn||E.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function re(I,E){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",U));const nt=E.source;let lt=m.get(nt);lt===void 0&&(lt={},m.set(nt,lt));const it=J(E);if(it!==I.__cacheKey){lt[it]===void 0&&(lt[it]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,q=!0),lt[it].usedTimes++;const Ut=lt[I.__cacheKey];Ut!==void 0&&(lt[I.__cacheKey].usedTimes--,Ut.usedTimes===0&&A(E)),I.__cacheKey=it,I.__webglTexture=lt[it].texture}return q}function Yt(I,E,q){return Math.floor(Math.floor(I/q)/E)}function j(I,E,q,nt){const it=I.updateRanges;if(it.length===0)e.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,q,nt,E.data);else{it.sort((ft,Mt)=>ft.start-Mt.start);let Ut=0;for(let ft=1;ft<it.length;ft++){const Mt=it[Ut],$t=it[ft],Lt=Mt.start+Mt.count,vt=Yt($t.start,E.width,4),Jt=Yt(Mt.start,E.width,4);$t.start<=Lt+1&&vt===Jt&&Yt($t.start+$t.count-1,E.width,4)===vt?Mt.count=Math.max(Mt.count,$t.start+$t.count-Mt.start):(++Ut,it[Ut]=$t)}it.length=Ut+1;const mt=o.getParameter(o.UNPACK_ROW_LENGTH),Ct=o.getParameter(o.UNPACK_SKIP_PIXELS),Rt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let ft=0,Mt=it.length;ft<Mt;ft++){const $t=it[ft],Lt=Math.floor($t.start/4),vt=Math.ceil($t.count/4),Jt=Lt%E.width,H=Math.floor(Lt/E.width),pt=vt,_t=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),e.texSubImage2D(o.TEXTURE_2D,0,Jt,H,pt,_t,q,nt,E.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,mt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ct),o.pixelStorei(o.UNPACK_SKIP_ROWS,Rt)}}function ot(I,E,q){let nt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(nt=o.TEXTURE_3D);const lt=re(I,E),it=E.source;e.bindTexture(nt,I.__webglTexture,o.TEXTURE0+q);const Ut=n.get(it);if(it.version!==Ut.__version||lt===!0){e.activeTexture(o.TEXTURE0+q);const mt=_e.getPrimaries(_e.workingColorSpace),Ct=E.colorSpace===tn?null:_e.getPrimaries(E.colorSpace),Rt=E.colorSpace===tn||mt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ft=S(E.image,!1,s.maxTextureSize);ft=Oe(E,ft);const Mt=a.convert(E.format,E.colorSpace),$t=a.convert(E.type);let Lt=C(E.internalFormat,Mt,$t,E.colorSpace,E.isVideoTexture);Ft(nt,E);let vt;const Jt=E.mipmaps,H=E.isVideoTexture!==!0,pt=Ut.__version===void 0||lt===!0,_t=it.dataReady,Tt=O(E,ft);if(E.isDepthTexture)Lt=T(E.format===bs,E.type),pt&&(H?e.texStorage2D(o.TEXTURE_2D,1,Lt,ft.width,ft.height):e.texImage2D(o.TEXTURE_2D,0,Lt,ft.width,ft.height,0,Mt,$t,null));else if(E.isDataTexture)if(Jt.length>0){H&&pt&&e.texStorage2D(o.TEXTURE_2D,Tt,Lt,Jt[0].width,Jt[0].height);for(let ht=0,rt=Jt.length;ht<rt;ht++)vt=Jt[ht],H?_t&&e.texSubImage2D(o.TEXTURE_2D,ht,0,0,vt.width,vt.height,Mt,$t,vt.data):e.texImage2D(o.TEXTURE_2D,ht,Lt,vt.width,vt.height,0,Mt,$t,vt.data);E.generateMipmaps=!1}else H?(pt&&e.texStorage2D(o.TEXTURE_2D,Tt,Lt,ft.width,ft.height),_t&&j(E,ft,Mt,$t)):e.texImage2D(o.TEXTURE_2D,0,Lt,ft.width,ft.height,0,Mt,$t,ft.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&pt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Tt,Lt,Jt[0].width,Jt[0].height,ft.depth);for(let ht=0,rt=Jt.length;ht<rt;ht++)if(vt=Jt[ht],E.format!==vi)if(Mt!==null)if(H){if(_t)if(E.layerUpdates.size>0){const Pt=Cc(vt.width,vt.height,E.format,E.type);for(const Kt of E.layerUpdates){const Ae=vt.data.subarray(Kt*Pt/vt.data.BYTES_PER_ELEMENT,(Kt+1)*Pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,Kt,vt.width,vt.height,1,Mt,Ae)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,vt.width,vt.height,ft.depth,Mt,vt.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ht,Lt,vt.width,vt.height,ft.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?_t&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,vt.width,vt.height,ft.depth,Mt,$t,vt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,ht,Lt,vt.width,vt.height,ft.depth,0,Mt,$t,vt.data)}else{H&&pt&&e.texStorage2D(o.TEXTURE_2D,Tt,Lt,Jt[0].width,Jt[0].height);for(let ht=0,rt=Jt.length;ht<rt;ht++)vt=Jt[ht],E.format!==vi?Mt!==null?H?_t&&e.compressedTexSubImage2D(o.TEXTURE_2D,ht,0,0,vt.width,vt.height,Mt,vt.data):e.compressedTexImage2D(o.TEXTURE_2D,ht,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?_t&&e.texSubImage2D(o.TEXTURE_2D,ht,0,0,vt.width,vt.height,Mt,$t,vt.data):e.texImage2D(o.TEXTURE_2D,ht,Lt,vt.width,vt.height,0,Mt,$t,vt.data)}else if(E.isDataArrayTexture)if(H){if(pt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Tt,Lt,ft.width,ft.height,ft.depth),_t)if(E.layerUpdates.size>0){const ht=Cc(ft.width,ft.height,E.format,E.type);for(const rt of E.layerUpdates){const Pt=ft.data.subarray(rt*ht/ft.data.BYTES_PER_ELEMENT,(rt+1)*ht/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,rt,ft.width,ft.height,1,Mt,$t,Pt)}E.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Mt,$t,ft.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Lt,ft.width,ft.height,ft.depth,0,Mt,$t,ft.data);else if(E.isData3DTexture)H?(pt&&e.texStorage3D(o.TEXTURE_3D,Tt,Lt,ft.width,ft.height,ft.depth),_t&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Mt,$t,ft.data)):e.texImage3D(o.TEXTURE_3D,0,Lt,ft.width,ft.height,ft.depth,0,Mt,$t,ft.data);else if(E.isFramebufferTexture){if(pt)if(H)e.texStorage2D(o.TEXTURE_2D,Tt,Lt,ft.width,ft.height);else{let ht=ft.width,rt=ft.height;for(let Pt=0;Pt<Tt;Pt++)e.texImage2D(o.TEXTURE_2D,Pt,Lt,ht,rt,0,Mt,$t,null),ht>>=1,rt>>=1}}else if(Jt.length>0){if(H&&pt){const ht=Ne(Jt[0]);e.texStorage2D(o.TEXTURE_2D,Tt,Lt,ht.width,ht.height)}for(let ht=0,rt=Jt.length;ht<rt;ht++)vt=Jt[ht],H?_t&&e.texSubImage2D(o.TEXTURE_2D,ht,0,0,Mt,$t,vt):e.texImage2D(o.TEXTURE_2D,ht,Lt,Mt,$t,vt);E.generateMipmaps=!1}else if(H){if(pt){const ht=Ne(ft);e.texStorage2D(o.TEXTURE_2D,Tt,Lt,ht.width,ht.height)}_t&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt,$t,ft)}else e.texImage2D(o.TEXTURE_2D,0,Lt,Mt,$t,ft);x(E)&&g(nt),Ut.__version=it.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function dt(I,E,q){if(E.image.length!==6)return;const nt=re(I,E),lt=E.source;e.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+q);const it=n.get(lt);if(lt.version!==it.__version||nt===!0){e.activeTexture(o.TEXTURE0+q);const Ut=_e.getPrimaries(_e.workingColorSpace),mt=E.colorSpace===tn?null:_e.getPrimaries(E.colorSpace),Ct=E.colorSpace===tn||Ut===mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Rt=E.isCompressedTexture||E.image[0].isCompressedTexture,ft=E.image[0]&&E.image[0].isDataTexture,Mt=[];for(let rt=0;rt<6;rt++)!Rt&&!ft?Mt[rt]=S(E.image[rt],!0,s.maxCubemapSize):Mt[rt]=ft?E.image[rt].image:E.image[rt],Mt[rt]=Oe(E,Mt[rt]);const $t=Mt[0],Lt=a.convert(E.format,E.colorSpace),vt=a.convert(E.type),Jt=C(E.internalFormat,Lt,vt,E.colorSpace),H=E.isVideoTexture!==!0,pt=it.__version===void 0||nt===!0,_t=lt.dataReady;let Tt=O(E,$t);Ft(o.TEXTURE_CUBE_MAP,E);let ht;if(Rt){H&&pt&&e.texStorage2D(o.TEXTURE_CUBE_MAP,Tt,Jt,$t.width,$t.height);for(let rt=0;rt<6;rt++){ht=Mt[rt].mipmaps;for(let Pt=0;Pt<ht.length;Pt++){const Kt=ht[Pt];E.format!==vi?Lt!==null?H?_t&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,0,0,Kt.width,Kt.height,Lt,Kt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,Jt,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?_t&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,0,0,Kt.width,Kt.height,Lt,vt,Kt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,Jt,Kt.width,Kt.height,0,Lt,vt,Kt.data)}}}else{if(ht=E.mipmaps,H&&pt){ht.length>0&&Tt++;const rt=Ne(Mt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,Tt,Jt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ft){H?_t&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Mt[rt].width,Mt[rt].height,Lt,vt,Mt[rt].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Jt,Mt[rt].width,Mt[rt].height,0,Lt,vt,Mt[rt].data);for(let Pt=0;Pt<ht.length;Pt++){const Ae=ht[Pt].image[rt].image;H?_t&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,0,0,Ae.width,Ae.height,Lt,vt,Ae.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,Jt,Ae.width,Ae.height,0,Lt,vt,Ae.data)}}else{H?_t&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Lt,vt,Mt[rt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Jt,Lt,vt,Mt[rt]);for(let Pt=0;Pt<ht.length;Pt++){const Kt=ht[Pt];H?_t&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,0,0,Lt,vt,Kt.image[rt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,Jt,Lt,vt,Kt.image[rt])}}}x(E)&&g(o.TEXTURE_CUBE_MAP),it.__version=lt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function It(I,E,q,nt,lt,it){const Ut=a.convert(q.format,q.colorSpace),mt=a.convert(q.type),Ct=C(q.internalFormat,Ut,mt,q.colorSpace),Rt=n.get(E),ft=n.get(q);if(ft.__renderTarget=E,!Rt.__hasExternalTextures){const Mt=Math.max(1,E.width>>it),$t=Math.max(1,E.height>>it);lt===o.TEXTURE_3D||lt===o.TEXTURE_2D_ARRAY?e.texImage3D(lt,it,Ct,Mt,$t,E.depth,0,Ut,mt,null):e.texImage2D(lt,it,Ct,Mt,$t,0,Ut,mt,null)}e.bindFramebuffer(o.FRAMEBUFFER,I),wt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,nt,lt,ft.__webglTexture,0,xe(E)):(lt===o.TEXTURE_2D||lt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,nt,lt,ft.__webglTexture,it),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Wt(I,E,q){if(o.bindRenderbuffer(o.RENDERBUFFER,I),E.depthBuffer){const nt=E.depthTexture,lt=nt&&nt.isDepthTexture?nt.type:null,it=T(E.stencilBuffer,lt),Ut=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=xe(E);wt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,mt,it,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,mt,it,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,it,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,I)}else{const nt=E.textures;for(let lt=0;lt<nt.length;lt++){const it=nt[lt],Ut=a.convert(it.format,it.colorSpace),mt=a.convert(it.type),Ct=C(it.internalFormat,Ut,mt,it.colorSpace),Rt=xe(E);q&&wt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,Ct,E.width,E.height):wt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,Ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function jt(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(E.depthTexture);nt.__renderTarget=E,(!nt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const lt=nt.__webglTexture,it=xe(E);if(E.depthTexture.format===Ss)wt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,lt,0,it):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,lt,0);else if(E.depthTexture.format===bs)wt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,lt,0,it):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Ie(I){const E=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const nt=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),nt){const lt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,nt.removeEventListener("dispose",lt)};nt.addEventListener("dispose",lt),E.__depthDisposeCallback=lt}E.__boundDepthTexture=nt}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const nt=I.texture.mipmaps;nt&&nt.length>0?jt(E.__webglFramebuffer[0],I):jt(E.__webglFramebuffer,I)}else if(q){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]===void 0)E.__webglDepthbuffer[nt]=o.createRenderbuffer(),Wt(E.__webglDepthbuffer[nt],I,!1);else{const lt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,it=E.__webglDepthbuffer[nt];o.bindRenderbuffer(o.RENDERBUFFER,it),o.framebufferRenderbuffer(o.FRAMEBUFFER,lt,o.RENDERBUFFER,it)}}else{const nt=I.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Wt(E.__webglDepthbuffer,I,!1);else{const lt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,it=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,it),o.framebufferRenderbuffer(o.FRAMEBUFFER,lt,o.RENDERBUFFER,it)}}e.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(I,E,q){const nt=n.get(I);E!==void 0&&It(nt.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&Ie(I)}function z(I){const E=I.texture,q=n.get(I),nt=n.get(E);I.addEventListener("dispose",D);const lt=I.textures,it=I.isWebGLCubeRenderTarget===!0,Ut=lt.length>1;if(Ut||(nt.__webglTexture===void 0&&(nt.__webglTexture=o.createTexture()),nt.__version=E.version,c.memory.textures++),it){q.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[mt]=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)q.__webglFramebuffer[mt][Ct]=o.createFramebuffer()}else q.__webglFramebuffer[mt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let mt=0;mt<E.mipmaps.length;mt++)q.__webglFramebuffer[mt]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Ut)for(let mt=0,Ct=lt.length;mt<Ct;mt++){const Rt=n.get(lt[mt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=o.createTexture(),c.memory.textures++)}if(I.samples>0&&wt(I)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let mt=0;mt<lt.length;mt++){const Ct=lt[mt];q.__webglColorRenderbuffer[mt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[mt]);const Rt=a.convert(Ct.format,Ct.colorSpace),ft=a.convert(Ct.type),Mt=C(Ct.internalFormat,Rt,ft,Ct.colorSpace,I.isXRRenderTarget===!0),$t=xe(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,Mt,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+mt,o.RENDERBUFFER,q.__webglColorRenderbuffer[mt])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Wt(q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(it){e.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture),Ft(o.TEXTURE_CUBE_MAP,E);for(let mt=0;mt<6;mt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ct=0;Ct<E.mipmaps.length;Ct++)It(q.__webglFramebuffer[mt][Ct],I,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct);else It(q.__webglFramebuffer[mt],I,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);x(E)&&g(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let mt=0,Ct=lt.length;mt<Ct;mt++){const Rt=lt[mt],ft=n.get(Rt);let Mt=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Mt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Mt,ft.__webglTexture),Ft(Mt,Rt),It(q.__webglFramebuffer,I,Rt,o.COLOR_ATTACHMENT0+mt,Mt,0),x(Rt)&&g(Mt)}e.unbindTexture()}else{let mt=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(mt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(mt,nt.__webglTexture),Ft(mt,E),E.mipmaps&&E.mipmaps.length>0)for(let Ct=0;Ct<E.mipmaps.length;Ct++)It(q.__webglFramebuffer[Ct],I,E,o.COLOR_ATTACHMENT0,mt,Ct);else It(q.__webglFramebuffer,I,E,o.COLOR_ATTACHMENT0,mt,0);x(E)&&g(mt),e.unbindTexture()}I.depthBuffer&&Ie(I)}function we(I){const E=I.textures;for(let q=0,nt=E.length;q<nt;q++){const lt=E[q];if(x(lt)){const it=R(I),Ut=n.get(lt).__webglTexture;e.bindTexture(it,Ut),g(it),e.unbindTexture()}}}const kt=[],fe=[];function Nt(I){if(I.samples>0){if(wt(I)===!1){const E=I.textures,q=I.width,nt=I.height;let lt=o.COLOR_BUFFER_BIT;const it=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=n.get(I),mt=E.length>1;if(mt)for(let Rt=0;Rt<E.length;Rt++)e.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Ct=I.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Rt=0;Rt<E.length;Rt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(lt|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(lt|=o.STENCIL_BUFFER_BIT)),mt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Rt]);const ft=n.get(E[Rt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ft,0)}o.blitFramebuffer(0,0,q,nt,0,0,q,nt,lt,o.NEAREST),u===!0&&(kt.length=0,fe.length=0,kt.push(o.COLOR_ATTACHMENT0+Rt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(kt.push(it),fe.push(it),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,fe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),mt)for(let Rt=0;Rt<E.length;Rt++){e.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Rt]);const ft=n.get(E[Rt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,ft,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&u){const E=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function xe(I){return Math.min(s.maxSamples,I.samples)}function wt(I){const E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Qt(I){const E=c.render.frame;p.get(I)!==E&&(p.set(I,E),I.update())}function Oe(I,E){const q=I.colorSpace,nt=I.format,lt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Vn&&q!==tn&&(_e.getTransfer(q)===Se?(nt!==vi||lt!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function Ne(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=et,this.resetTextureUnits=Y,this.setTexture2D=$,this.setTexture2DArray=Z,this.setTexture3D=ct,this.setTextureCube=V,this.rebindTextures=oe,this.setupRenderTarget=z,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=It,this.useMultisampledRTT=wt}function U_(o,t){function e(n,s=tn){let a;const c=_e.getTransfer(s);if(n===Pi)return o.UNSIGNED_BYTE;if(n===Mo)return o.UNSIGNED_SHORT_4_4_4_4;if(n===So)return o.UNSIGNED_SHORT_5_5_5_1;if(n===Ol)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===Nl)return o.BYTE;if(n===Ul)return o.SHORT;if(n===ys)return o.UNSIGNED_SHORT;if(n===xo)return o.INT;if(n===vn)return o.UNSIGNED_INT;if(n===zi)return o.FLOAT;if(n===xs)return o.HALF_FLOAT;if(n===Fl)return o.ALPHA;if(n===Bl)return o.RGB;if(n===vi)return o.RGBA;if(n===Ss)return o.DEPTH_COMPONENT;if(n===bs)return o.DEPTH_STENCIL;if(n===zl)return o.RED;if(n===bo)return o.RED_INTEGER;if(n===kl)return o.RG;if(n===Eo)return o.RG_INTEGER;if(n===To)return o.RGBA_INTEGER;if(n===Ks||n===Js||n===Qs||n===tr)if(c===Se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ks)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wo||n===Ao||n===Po||n===Co)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===wo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Po)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Co)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ro||n===Lo||n===Do)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ro||n===Lo)return c===Se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Do)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Io||n===No||n===Uo||n===Oo||n===Fo||n===Bo||n===zo||n===ko||n===Ho||n===Go||n===Vo||n===Wo||n===$o||n===Xo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Io)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===No)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uo)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oo)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fo)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bo)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zo)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ho)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wo)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$o)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xo)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===er||n===Zo||n===qo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===er)return c===Se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hl||n===Yo||n===jo||n===Ko)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===er)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:e}}class rh extends ei{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new rh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ln({vertexShader:O_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new li(new Rr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z_ extends yn{constructor(t,e){super();const n=this;let s=null,a=1,c=null,h="local-floor",u=1,d=null,p=null,_=null,m=null,y=null,M=null;const S=new B_,x={},g=e.getContextAttributes();let R=null,C=null;const T=[],O=[],U=new Xt;let D=null;const k=new ci;k.viewport=new be;const A=new ci;A.viewport=new be;const P=[k,A],N=new Od;let Y=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ot=T[j];return ot===void 0&&(ot=new Sa,T[j]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(j){let ot=T[j];return ot===void 0&&(ot=new Sa,T[j]=ot),ot.getGripSpace()},this.getHand=function(j){let ot=T[j];return ot===void 0&&(ot=new Sa,T[j]=ot),ot.getHandSpace()};function J(j){const ot=O.indexOf(j.inputSource);if(ot===-1)return;const dt=T[ot];dt!==void 0&&(dt.update(j.inputSource,j.frame,d||c),dt.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",Z);for(let j=0;j<T.length;j++){const ot=O[j];ot!==null&&(O[j]=null,T[j].disconnect(ot))}Y=null,et=null,S.reset();for(const j in x)delete x[j];t.setRenderTarget(R),y=null,m=null,_=null,s=null,C=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){h=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(j){d=j},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",$),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(U),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(s,e)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,It=null,Wt=null;g.depth&&(Wt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=g.stencil?bs:Ss,It=g.stencil?Ms:vn);const jt={colorFormat:e.RGBA8,depthFormat:Wt,scaleFactor:a};m=_.createProjectionLayer(jt),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),C=new Mn(m.textureWidth,m.textureHeight,{format:vi,type:Pi,depthTexture:new Sc(m.textureWidth,m.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const dt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Mn(y.framebufferWidth,y.framebufferHeight,{format:vi,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(u),d=null,c=await s.requestReferenceSpace(h),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Z(j){for(let ot=0;ot<j.removed.length;ot++){const dt=j.removed[ot],It=O.indexOf(dt);It>=0&&(O[It]=null,T[It].disconnect(dt))}for(let ot=0;ot<j.added.length;ot++){const dt=j.added[ot];let It=O.indexOf(dt);if(It===-1){for(let jt=0;jt<T.length;jt++)if(jt>=O.length){O.push(dt),It=jt;break}else if(O[jt]===null){O[jt]=dt,It=jt;break}if(It===-1)break}const Wt=T[It];Wt&&Wt.connect(dt)}}const ct=new B,V=new B;function yt(j,ot,dt){ct.setFromMatrixPosition(ot.matrixWorld),V.setFromMatrixPosition(dt.matrixWorld);const It=ct.distanceTo(V),Wt=ot.projectionMatrix.elements,jt=dt.projectionMatrix.elements,Ie=Wt[14]/(Wt[10]-1),oe=Wt[14]/(Wt[10]+1),z=(Wt[9]+1)/Wt[5],we=(Wt[9]-1)/Wt[5],kt=(Wt[8]-1)/Wt[0],fe=(jt[8]+1)/jt[0],Nt=Ie*kt,xe=Ie*fe,wt=It/(-kt+fe),Qt=wt*-kt;if(ot.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Qt),j.translateZ(wt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Wt[10]===-1)j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Oe=Ie+wt,Ne=oe+wt,I=Nt-Qt,E=xe+(It-Qt),q=z*oe/Ne*Oe,nt=we*oe/Ne*Oe;j.projectionMatrix.makePerspective(I,E,q,nt,Oe,Ne),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function st(j,ot){ot===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ot.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ot=j.near,dt=j.far;S.texture!==null&&(S.depthNear>0&&(ot=S.depthNear),S.depthFar>0&&(dt=S.depthFar)),N.near=A.near=k.near=ot,N.far=A.far=k.far=dt,(Y!==N.near||et!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),Y=N.near,et=N.far),N.layers.mask=j.layers.mask|6,k.layers.mask=N.layers.mask&3,A.layers.mask=N.layers.mask&5;const It=j.parent,Wt=N.cameras;st(N,It);for(let jt=0;jt<Wt.length;jt++)st(Wt[jt],It);Wt.length===2?yt(N,k,A):N.projectionMatrix.copy(k.projectionMatrix),gt(j,N,It)};function gt(j,ot,dt){dt===null?j.matrix.copy(ot.matrixWorld):(j.matrix.copy(dt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ot.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Jo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(m===null&&y===null))return u},this.setFoveation=function(j){u=j,m!==null&&(m.fixedFoveation=j),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=j)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(N)},this.getCameraTexture=function(j){return x[j]};let Ft=null;function re(j,ot){if(p=ot.getViewerPose(d||c),M=ot,p!==null){const dt=p.views;y!==null&&(t.setRenderTargetFramebuffer(C,y.framebuffer),t.setRenderTarget(C));let It=!1;dt.length!==N.cameras.length&&(N.cameras.length=0,It=!0);for(let oe=0;oe<dt.length;oe++){const z=dt[oe];let we=null;if(y!==null)we=y.getViewport(z);else{const fe=_.getViewSubImage(m,z);we=fe.viewport,oe===0&&(t.setRenderTargetTextures(C,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(C))}let kt=P[oe];kt===void 0&&(kt=new ci,kt.layers.enable(oe),kt.viewport=new be,P[oe]=kt),kt.matrix.fromArray(z.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(z.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(we.x,we.y,we.width,we.height),oe===0&&(N.matrix.copy(kt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),It===!0&&N.cameras.push(kt)}const Wt=s.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){const oe=_.getDepthInformation(dt[0]);oe&&oe.isValid&&oe.texture&&S.init(oe,s.renderState)}if(Wt&&Wt.includes("camera-access")&&(t.state.unbindTexture(),_))for(let oe=0;oe<dt.length;oe++){const z=dt[oe].camera;if(z){let we=x[z];we||(we=new rh,x[z]=we);const kt=_.getCameraImage(z);we.sourceTexture=kt}}}for(let dt=0;dt<T.length;dt++){const It=O[dt],Wt=T[dt];It!==null&&Wt!==void 0&&Wt.update(It,ot,d||c)}Ft&&Ft(j,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),M=null}const Yt=new Rc;Yt.setAnimationLoop(re),this.setAnimationLoop=function(j){Ft=j},this.dispose=function(){}}}const Rn=new Ri,k_=new De;function H_(o,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,fc(o)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,R,C,T){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(x,g):g.isMeshToonMaterial?(a(x,g),_(x,g)):g.isMeshPhongMaterial?(a(x,g),p(x,g)):g.isMeshStandardMaterial?(a(x,g),m(x,g),g.isMeshPhysicalMaterial&&y(x,g,T)):g.isMeshMatcapMaterial?(a(x,g),M(x,g)):g.isMeshDepthMaterial?a(x,g):g.isMeshDistanceMaterial?(a(x,g),S(x,g)):g.isMeshNormalMaterial?a(x,g):g.isLineBasicMaterial?(c(x,g),g.isLineDashedMaterial&&h(x,g)):g.isPointsMaterial?u(x,g,R,C):g.isSpriteMaterial?d(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Qe&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Qe&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const R=t.get(g),C=R.envMap,T=R.envMapRotation;C&&(x.envMap.value=C,Rn.copy(T),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),x.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(Rn)),x.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function h(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function u(x,g,R,C){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*R,x.scale.value=C*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function d(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function p(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function _(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function m(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function y(x,g,R){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qe&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,g){g.matcap&&(x.matcap.value=g.matcap)}function S(x,g){const R=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G_(o,t,e,n){let s={},a={},c=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function u(R,C){const T=C.program;n.uniformBlockBinding(R,T)}function d(R,C){let T=s[R.id];T===void 0&&(M(R),T=p(R),s[R.id]=T,R.addEventListener("dispose",x));const O=C.program;n.updateUBOMapping(R,O);const U=t.render.frame;a[R.id]!==U&&(m(R),a[R.id]=U)}function p(R){const C=_();R.__bindingPointIndex=C;const T=o.createBuffer(),O=R.__size,U=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,T),o.bufferData(o.UNIFORM_BUFFER,O,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,T),T}function _(){for(let R=0;R<h;R++)if(c.indexOf(R)===-1)return c.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const C=s[R.id],T=R.uniforms,O=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let U=0,D=T.length;U<D;U++){const k=Array.isArray(T[U])?T[U]:[T[U]];for(let A=0,P=k.length;A<P;A++){const N=k[A];if(y(N,U,A,O)===!0){const Y=N.__offset,et=Array.isArray(N.value)?N.value:[N.value];let J=0;for(let $=0;$<et.length;$++){const Z=et[$],ct=S(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,o.bufferSubData(o.UNIFORM_BUFFER,Y+J,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):(Z.toArray(N.__data,J),J+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,N.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(R,C,T,O){const U=R.value,D=C+"_"+T;if(O[D]===void 0)return typeof U=="number"||typeof U=="boolean"?O[D]=U:O[D]=U.clone(),!0;{const k=O[D];if(typeof U=="number"||typeof U=="boolean"){if(k!==U)return O[D]=U,!0}else if(k.equals(U)===!1)return k.copy(U),!0}return!1}function M(R){const C=R.uniforms;let T=0;const O=16;for(let D=0,k=C.length;D<k;D++){const A=Array.isArray(C[D])?C[D]:[C[D]];for(let P=0,N=A.length;P<N;P++){const Y=A[P],et=Array.isArray(Y.value)?Y.value:[Y.value];for(let J=0,$=et.length;J<$;J++){const Z=et[J],ct=S(Z),V=T%O,yt=V%ct.boundary,st=V+yt;T+=yt,st!==0&&O-st<ct.storage&&(T+=O-st),Y.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=T,T+=ct.storage}}}const U=T%O;return U>0&&(T+=O-U),R.__size=T,R.__cache={},this}function S(R){const C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),C}function x(R){const C=R.target;C.removeEventListener("dispose",x);const T=c.indexOf(C.__bindingPointIndex);c.splice(T,1),o.deleteBuffer(s[C.id]),delete s[C.id],delete a[C.id]}function g(){for(const R in s)o.deleteBuffer(s[R]);c=[],s={},a={}}return{bind:u,update:d,dispose:g}}class V_{constructor(t={}){const{canvas:e=$u(),context:n=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),S=new Int32Array(4);let x=null,g=null;const R=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let O=!1;this._outputColorSpace=ri;let U=0,D=0,k=null,A=-1,P=null;const N=new be,Y=new be;let et=null;const J=new ce(0);let $=0,Z=e.width,ct=e.height,V=1,yt=null,st=null;const gt=new be(0,0,Z,ct),Ft=new be(0,0,Z,ct);let re=!1;const Yt=new Ta;let j=!1,ot=!1;const dt=new De,It=new B,Wt=new be,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function oe(){return k===null?V:1}let z=n;function we(w,G){return e.getContext(w,G)}try{const w={alpha:!0,depth:s,stencil:a,antialias:h,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${so}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),z===null){const G="webgl2";if(z=we(G,w),z===null)throw we(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,fe,Nt,xe,wt,Qt,Oe,Ne,I,E,q,nt,lt,it,Ut,mt,Ct,Rt,ft,Mt,$t,Lt,vt,Jt;function H(){kt=new Qp(z),kt.init(),Lt=new U_(z,kt),fe=new Xp(z,kt,t,Lt),Nt=new I_(z,kt),fe.reversedDepthBuffer&&m&&Nt.buffers.depth.setReversed(!0),xe=new im(z),wt=new x_,Qt=new N_(z,kt,Nt,wt,fe,Lt,xe),Oe=new qp(T),Ne=new Jp(T),I=new Hd(z),vt=new Wp(z,I),E=new tm(z,I,xe,vt),q=new sm(z,E,I,xe),ft=new nm(z,fe,Qt),mt=new Zp(wt),nt=new y_(T,Oe,Ne,kt,fe,vt,mt),lt=new H_(T,wt),it=new S_,Ut=new P_(kt),Rt=new Vp(T,Oe,Ne,Nt,q,y,u),Ct=new L_(T,q,fe),Jt=new G_(z,xe,fe,Nt),Mt=new $p(z,kt,xe),$t=new em(z,kt,xe),xe.programs=nt.programs,T.capabilities=fe,T.extensions=kt,T.properties=wt,T.renderLists=it,T.shadowMap=Ct,T.state=Nt,T.info=xe}H();const pt=new z_(T,z);this.xr=pt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(Z,ct,!1))},this.getSize=function(w){return w.set(Z,ct)},this.setSize=function(w,G,Q=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,ct=G,e.width=Math.floor(w*V),e.height=Math.floor(G*V),Q===!0&&(e.style.width=w+"px",e.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(Z*V,ct*V).floor()},this.setDrawingBufferSize=function(w,G,Q){Z=w,ct=G,V=Q,e.width=Math.floor(w*Q),e.height=Math.floor(G*Q),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(gt)},this.setViewport=function(w,G,Q,K){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,G,Q,K),Nt.viewport(N.copy(gt).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(Ft)},this.setScissor=function(w,G,Q,K){w.isVector4?Ft.set(w.x,w.y,w.z,w.w):Ft.set(w,G,Q,K),Nt.scissor(Y.copy(Ft).multiplyScalar(V).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){Nt.setScissorTest(re=w)},this.setOpaqueSort=function(w){yt=w},this.setTransparentSort=function(w){st=w},this.getClearColor=function(w){return w.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,Q=!0){let K=0;if(w){let W=!1;if(k!==null){const ut=k.texture.format;W=ut===To||ut===Eo||ut===bo}if(W){const ut=k.texture.type,St=ut===Pi||ut===vn||ut===ys||ut===Ms||ut===Mo||ut===So,At=Rt.getClearColor(),Et=Rt.getClearAlpha(),Gt=At.r,Vt=At.g,Bt=At.b;St?(M[0]=Gt,M[1]=Vt,M[2]=Bt,M[3]=Et,z.clearBufferuiv(z.COLOR,0,M)):(S[0]=Gt,S[1]=Vt,S[2]=Bt,S[3]=Et,z.clearBufferiv(z.COLOR,0,S))}else K|=z.COLOR_BUFFER_BIT}G&&(K|=z.DEPTH_BUFFER_BIT),Q&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Rt.dispose(),it.dispose(),Ut.dispose(),wt.dispose(),Oe.dispose(),Ne.dispose(),q.dispose(),vt.dispose(),Jt.dispose(),nt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",pi),pt.removeEventListener("sessionend",Br),Xi.stop()};function _t(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const w=xe.autoReset,G=Ct.enabled,Q=Ct.autoUpdate,K=Ct.needsUpdate,W=Ct.type;H(),xe.autoReset=w,Ct.enabled=G,Ct.autoUpdate=Q,Ct.needsUpdate=K,Ct.type=W}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){const G=w.target;G.removeEventListener("dispose",rt),Pt(G)}function Pt(w){Kt(w),wt.remove(w)}function Kt(w){const G=wt.get(w).programs;G!==void 0&&(G.forEach(function(Q){nt.releaseProgram(Q)}),w.isShaderMaterial&&nt.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,Q,K,W,ut){G===null&&(G=jt);const St=W.isMesh&&W.matrixWorld.determinant()<0,At=zr(w,G,Q,K,W);Nt.setMaterial(K,St);let Et=Q.index,Gt=1;if(K.wireframe===!0){if(Et=E.getWireframeAttribute(Q),Et===void 0)return;Gt=2}const Vt=Q.drawRange,Bt=Q.attributes.position;let ae=Vt.start*Gt,pe=(Vt.start+Vt.count)*Gt;ut!==null&&(ae=Math.max(ae,ut.start*Gt),pe=Math.min(pe,(ut.start+ut.count)*Gt)),Et!==null?(ae=Math.max(ae,0),pe=Math.min(pe,Et.count)):Bt!=null&&(ae=Math.max(ae,0),pe=Math.min(pe,Bt.count));const zt=pe-ae;if(zt<0||zt===1/0)return;vt.setup(W,K,At,Q,Et);let Zt,ve=Mt;if(Et!==null&&(Zt=I.get(Et),ve=$t,ve.setIndex(Zt)),W.isMesh)K.wireframe===!0?(Nt.setLineWidth(K.wireframeLinewidth*oe()),ve.setMode(z.LINES)):ve.setMode(z.TRIANGLES);else if(W.isLine){let Ot=K.linewidth;Ot===void 0&&(Ot=1),Nt.setLineWidth(Ot*oe()),W.isLineSegments?ve.setMode(z.LINES):W.isLineLoop?ve.setMode(z.LINE_LOOP):ve.setMode(z.LINE_STRIP)}else W.isPoints?ve.setMode(z.POINTS):W.isSprite&&ve.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)$n("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))ve.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ot=W._multiDrawStarts,ye=W._multiDrawCounts,he=W._multiDrawCount,Ht=Et?I.get(Et).bytesPerElement:1,Pe=wt.get(K).currentProgram.getUniforms();for(let We=0;We<he;We++)Pe.setValue(z,"_gl_DrawID",We),ve.render(Ot[We]/Ht,ye[We])}else if(W.isInstancedMesh)ve.renderInstances(ae,zt,W.count);else if(Q.isInstancedBufferGeometry){const Ot=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ye=Math.min(Q.instanceCount,Ot);ve.renderInstances(ae,zt,ye)}else ve.render(ae,zt)};function Ae(w,G,Q){w.transparent===!0&&w.side===wi&&w.forceSinglePass===!1?(w.side=Qe,w.needsUpdate=!0,Dn(w,G,Q),w.side=Ki,w.needsUpdate=!0,Dn(w,G,Q),w.side=wi):Dn(w,G,Q)}this.compile=function(w,G,Q=null){Q===null&&(Q=w),g=Ut.get(Q),g.init(G),C.push(g),Q.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),w!==Q&&w.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const K=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ut=W.material;if(ut)if(Array.isArray(ut))for(let St=0;St<ut.length;St++){const At=ut[St];Ae(At,Q,W),K.add(At)}else Ae(ut,Q,W),K.add(ut)}),g=C.pop(),K},this.compileAsync=function(w,G,Q=null){const K=this.compile(w,G,Q);return new Promise(W=>{function ut(){if(K.forEach(function(St){wt.get(St).currentProgram.isReady()&&K.delete(St)}),K.size===0){W(w);return}setTimeout(ut,10)}kt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let ge=null;function hi(w){ge&&ge(w)}function pi(){Xi.stop()}function Br(){Xi.start()}const Xi=new Rc;Xi.setAnimationLoop(hi),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(w){ge=w,pt.setAnimationLoop(w),w===null?Xi.stop():Xi.start()},pt.addEventListener("sessionstart",pi),pt.addEventListener("sessionend",Br),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(G),G=pt.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,G,k),g=Ut.get(w,C.length),g.init(G),C.push(g),dt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Yt.setFromProjectionMatrix(dt,Ci,G.reversedDepth),ot=this.localClippingEnabled,j=mt.init(this.clippingPlanes,ot),x=it.get(w,R.length),x.init(),R.push(x),pt.enabled===!0&&pt.isPresenting===!0){const ut=T.xr.getDepthSensingMesh();ut!==null&&Us(ut,G,-1/0,T.sortObjects)}Us(w,G,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(yt,st),Ie=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Ie&&Rt.addToRenderList(x,w),this.info.render.frame++,j===!0&&mt.beginShadows();const Q=g.state.shadowsArray;Ct.render(Q,w,G),j===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,W=x.transmissive;if(g.setupLights(),G.isArrayCamera){const ut=G.cameras;if(W.length>0)for(let St=0,At=ut.length;St<At;St++){const Et=ut[St];Dt(K,W,w,Et)}Ie&&Rt.render(w);for(let St=0,At=ut.length;St<At;St++){const Et=ut[St];ui(x,w,Et,Et.viewport)}}else W.length>0&&Dt(K,W,w,G),Ie&&Rt.render(w),ui(x,w,G);k!==null&&D===0&&(Qt.updateMultisampleRenderTarget(k),Qt.updateRenderTargetMipmap(k)),w.isScene===!0&&w.onAfterRender(T,w,G),vt.resetDefaultState(),A=-1,P=null,C.pop(),C.length>0?(g=C[C.length-1],j===!0&&mt.setGlobalState(T.clippingPlanes,g.state.camera)):g=null,R.pop(),R.length>0?x=R[R.length-1]:x=null};function Us(w,G,Q,K){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Yt.intersectsSprite(w)){K&&Wt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);const St=q.update(w),At=w.material;At.visible&&x.push(w,St,At,Q,Wt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Yt.intersectsObject(w))){const St=q.update(w),At=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Wt.copy(w.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Wt.copy(St.boundingSphere.center)),Wt.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(At)){const Et=St.groups;for(let Gt=0,Vt=Et.length;Gt<Vt;Gt++){const Bt=Et[Gt],ae=At[Bt.materialIndex];ae&&ae.visible&&x.push(w,St,ae,Q,Wt.z,Bt)}}else At.visible&&x.push(w,St,At,Q,Wt.z,null)}}const ut=w.children;for(let St=0,At=ut.length;St<At;St++)Us(ut[St],G,Q,K)}function ui(w,G,Q,K){const W=w.opaque,ut=w.transmissive,St=w.transparent;g.setupLightsView(Q),j===!0&&mt.setGlobalState(T.clippingPlanes,Q),K&&Nt.viewport(N.copy(K)),W.length>0&&Ln(W,G,Q),ut.length>0&&Ln(ut,G,Q),St.length>0&&Ln(St,G,Q),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function Dt(w,G,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new Mn(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?xs:Pi,minFilter:gn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const ut=g.state.transmissionRenderTarget[K.id],St=K.viewport||N;ut.setSize(St.z*T.transmissionResolutionScale,St.w*T.transmissionResolutionScale);const At=T.getRenderTarget(),Et=T.getActiveCubeFace(),Gt=T.getActiveMipmapLevel();T.setRenderTarget(ut),T.getClearColor(J),$=T.getClearAlpha(),$<1&&T.setClearColor(16777215,.5),T.clear(),Ie&&Rt.render(Q);const Vt=T.toneMapping;T.toneMapping=Qi;const Bt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),j===!0&&mt.setGlobalState(T.clippingPlanes,K),Ln(w,Q,K),Qt.updateMultisampleRenderTarget(ut),Qt.updateRenderTargetMipmap(ut),kt.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let pe=0,zt=G.length;pe<zt;pe++){const Zt=G[pe],ve=Zt.object,Ot=Zt.geometry,ye=Zt.material,he=Zt.group;if(ye.side===wi&&ve.layers.test(K.layers)){const Ht=ye.side;ye.side=Qe,ye.needsUpdate=!0,Os(ve,Q,K,Ot,ye,he),ye.side=Ht,ye.needsUpdate=!0,ae=!0}}ae===!0&&(Qt.updateMultisampleRenderTarget(ut),Qt.updateRenderTargetMipmap(ut))}T.setRenderTarget(At,Et,Gt),T.setClearColor(J,$),Bt!==void 0&&(K.viewport=Bt),T.toneMapping=Vt}function Ln(w,G,Q){const K=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ut=w.length;W<ut;W++){const St=w[W],At=St.object,Et=St.geometry,Gt=St.group;let Vt=St.material;Vt.allowOverride===!0&&K!==null&&(Vt=K),At.layers.test(Q.layers)&&Os(At,G,Q,Et,Vt,Gt)}}function Os(w,G,Q,K,W,ut){w.onBeforeRender(T,G,Q,K,W,ut),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(T,G,Q,K,w,ut),W.transparent===!0&&W.side===wi&&W.forceSinglePass===!1?(W.side=Qe,W.needsUpdate=!0,T.renderBufferDirect(Q,G,K,W,w,ut),W.side=Ki,W.needsUpdate=!0,T.renderBufferDirect(Q,G,K,W,w,ut),W.side=wi):T.renderBufferDirect(Q,G,K,W,w,ut),w.onAfterRender(T,G,Q,K,W,ut)}function Dn(w,G,Q){G.isScene!==!0&&(G=jt);const K=wt.get(w),W=g.state.lights,ut=g.state.shadowsArray,St=W.state.version,At=nt.getParameters(w,W.state,ut,G,Q),Et=nt.getProgramCacheKey(At);let Gt=K.programs;K.environment=w.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(w.isMeshStandardMaterial?Ne:Oe).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Gt===void 0&&(w.addEventListener("dispose",rt),Gt=new Map,K.programs=Gt);let Vt=Gt.get(Et);if(Vt!==void 0){if(K.currentProgram===Vt&&K.lightsStateVersion===St)return us(w,At),Vt}else At.uniforms=nt.getUniforms(w),w.onBeforeCompile(At,T),Vt=nt.acquireProgram(At,Et),Gt.set(Et,Vt),K.uniforms=At.uniforms;const Bt=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Bt.clippingPlanes=mt.uniform),us(w,At),K.needsLights=kr(w),K.lightsStateVersion=St,K.needsLights&&(Bt.ambientLightColor.value=W.state.ambient,Bt.lightProbe.value=W.state.probe,Bt.directionalLights.value=W.state.directional,Bt.directionalLightShadows.value=W.state.directionalShadow,Bt.spotLights.value=W.state.spot,Bt.spotLightShadows.value=W.state.spotShadow,Bt.rectAreaLights.value=W.state.rectArea,Bt.ltc_1.value=W.state.rectAreaLTC1,Bt.ltc_2.value=W.state.rectAreaLTC2,Bt.pointLights.value=W.state.point,Bt.pointLightShadows.value=W.state.pointShadow,Bt.hemisphereLights.value=W.state.hemi,Bt.directionalShadowMap.value=W.state.directionalShadowMap,Bt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Bt.spotShadowMap.value=W.state.spotShadowMap,Bt.spotLightMatrix.value=W.state.spotLightMatrix,Bt.spotLightMap.value=W.state.spotLightMap,Bt.pointShadowMap.value=W.state.pointShadowMap,Bt.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Vt,K.uniformsList=null,Vt}function Fs(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Nr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function us(w,G){const Q=wt.get(w);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function zr(w,G,Q,K,W){G.isScene!==!0&&(G=jt),Qt.resetTextureUnits();const ut=G.fog,St=K.isMeshStandardMaterial?G.environment:null,At=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Vn,Et=(K.isMeshStandardMaterial?Ne:Oe).get(K.envMap||St),Gt=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Vt=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Bt=!!Q.morphAttributes.position,ae=!!Q.morphAttributes.normal,pe=!!Q.morphAttributes.color;let zt=Qi;K.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(zt=T.toneMapping);const Zt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ve=Zt!==void 0?Zt.length:0,Ot=wt.get(K),ye=g.state.lights;if(j===!0&&(ot===!0||w!==P)){const Ue=w===P&&K.id===A;mt.setState(K,w,Ue)}let he=!1;K.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==ye.state.version||Ot.outputColorSpace!==At||W.isBatchedMesh&&Ot.batching===!1||!W.isBatchedMesh&&Ot.batching===!0||W.isBatchedMesh&&Ot.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ot.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ot.instancing===!1||!W.isInstancedMesh&&Ot.instancing===!0||W.isSkinnedMesh&&Ot.skinning===!1||!W.isSkinnedMesh&&Ot.skinning===!0||W.isInstancedMesh&&Ot.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ot.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ot.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ot.instancingMorph===!1&&W.morphTexture!==null||Ot.envMap!==Et||K.fog===!0&&Ot.fog!==ut||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==mt.numPlanes||Ot.numIntersection!==mt.numIntersection)||Ot.vertexAlphas!==Gt||Ot.vertexTangents!==Vt||Ot.morphTargets!==Bt||Ot.morphNormals!==ae||Ot.morphColors!==pe||Ot.toneMapping!==zt||Ot.morphTargetsCount!==ve)&&(he=!0):(he=!0,Ot.__version=K.version);let Ht=Ot.currentProgram;he===!0&&(Ht=Dn(K,G,W));let Pe=!1,We=!1,Ii=!1;const ue=Ht.getUniforms(),ni=Ot.uniforms;if(Nt.useProgram(Ht.program)&&(Pe=!0,We=!0,Ii=!0),K.id!==A&&(A=K.id,We=!0),Pe||P!==w){Nt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ue.setValue(z,"projectionMatrix",w.projectionMatrix),ue.setValue(z,"viewMatrix",w.matrixWorldInverse);const de=ue.map.cameraPosition;de!==void 0&&de.setValue(z,It.setFromMatrixPosition(w.matrixWorld)),fe.logarithmicDepthBuffer&&ue.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ue.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),P!==w&&(P=w,We=!0,Ii=!0)}if(W.isSkinnedMesh){ue.setOptional(z,W,"bindMatrix"),ue.setOptional(z,W,"bindMatrixInverse");const Ue=W.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ue.setValue(z,"boneTexture",Ue.boneTexture,Qt))}W.isBatchedMesh&&(ue.setOptional(z,W,"batchingTexture"),ue.setValue(z,"batchingTexture",W._matricesTexture,Qt),ue.setOptional(z,W,"batchingIdTexture"),ue.setValue(z,"batchingIdTexture",W._indirectTexture,Qt),ue.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&ue.setValue(z,"batchingColorTexture",W._colorsTexture,Qt));const $e=Q.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&ft.update(W,Q,Ht),(We||Ot.receiveShadow!==W.receiveShadow)&&(Ot.receiveShadow=W.receiveShadow,ue.setValue(z,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ni.envMap.value=Et,ni.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(ni.envMapIntensity.value=G.environmentIntensity),We&&(ue.setValue(z,"toneMappingExposure",T.toneMappingExposure),Ot.needsLights&&dn(ni,Ii),ut&&K.fog===!0&&lt.refreshFogUniforms(ni,ut),lt.refreshMaterialUniforms(ni,K,V,ct,g.state.transmissionRenderTarget[w.id]),Nr.upload(z,Fs(Ot),ni,Qt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Nr.upload(z,Fs(Ot),ni,Qt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ue.setValue(z,"center",W.center),ue.setValue(z,"modelViewMatrix",W.modelViewMatrix),ue.setValue(z,"normalMatrix",W.normalMatrix),ue.setValue(z,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ue=K.uniformsGroups;for(let de=0,bi=Ue.length;de<bi;de++){const di=Ue[de];Jt.update(di,Ht),Jt.bind(di,Ht)}}return Ht}function dn(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function kr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(w,G,Q){const K=wt.get(w);K.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),wt.get(w.texture).__webglTexture=G,wt.get(w.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const Q=wt.get(w);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0};const Ja=z.createFramebuffer();this.setRenderTarget=function(w,G=0,Q=0){k=w,U=G,D=Q;let K=!0,W=null,ut=!1,St=!1;if(w){const Et=wt.get(w);if(Et.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(z.FRAMEBUFFER,null),K=!1;else if(Et.__webglFramebuffer===void 0)Qt.setupRenderTarget(w);else if(Et.__hasExternalTextures)Qt.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Bt=w.depthTexture;if(Et.__boundDepthTexture!==Bt){if(Bt!==null&&wt.has(Bt)&&(w.width!==Bt.image.width||w.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Qt.setupDepthRenderbuffer(w)}}const Gt=w.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(St=!0);const Vt=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[G])?W=Vt[G][Q]:W=Vt[G],ut=!0):w.samples>0&&Qt.useMultisampledRTT(w)===!1?W=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?W=Vt[Q]:W=Vt,N.copy(w.viewport),Y.copy(w.scissor),et=w.scissorTest}else N.copy(gt).multiplyScalar(V).floor(),Y.copy(Ft).multiplyScalar(V).floor(),et=re;if(Q!==0&&(W=Ja),Nt.bindFramebuffer(z.FRAMEBUFFER,W)&&K&&Nt.drawBuffers(w,W),Nt.viewport(N),Nt.scissor(Y),Nt.setScissorTest(et),ut){const Et=wt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Et.__webglTexture,Q)}else if(St){const Et=G;for(let Gt=0;Gt<w.textures.length;Gt++){const Vt=wt.get(w.textures[Gt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Gt,Vt.__webglTexture,Q,Et)}}else if(w!==null&&Q!==0){const Et=wt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Et.__webglTexture,Q)}A=-1},this.readRenderTargetPixels=function(w,G,Q,K,W,ut,St,At=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){Nt.bindFramebuffer(z.FRAMEBUFFER,Et);try{const Gt=w.textures[At],Vt=Gt.format,Bt=Gt.type;if(!fe.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-K&&Q>=0&&Q<=w.height-W&&(w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+At),z.readPixels(G,Q,K,W,Lt.convert(Vt),Lt.convert(Bt),ut))}finally{const Gt=k!==null?wt.get(k).__webglFramebuffer:null;Nt.bindFramebuffer(z.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(w,G,Q,K,W,ut,St,At=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(G>=0&&G<=w.width-K&&Q>=0&&Q<=w.height-W){Nt.bindFramebuffer(z.FRAMEBUFFER,Et);const Gt=w.textures[At],Vt=Gt.format,Bt=Gt.type;if(!fe.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ae=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ae),z.bufferData(z.PIXEL_PACK_BUFFER,ut.byteLength,z.STREAM_READ),w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+At),z.readPixels(G,Q,K,W,Lt.convert(Vt),Lt.convert(Bt),0);const pe=k!==null?wt.get(k).__webglFramebuffer:null;Nt.bindFramebuffer(z.FRAMEBUFFER,pe);const zt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Xu(z,zt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ae),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ut),z.deleteBuffer(ae),z.deleteSync(zt),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,Q=0){const K=Math.pow(2,-Q),W=Math.floor(w.image.width*K),ut=Math.floor(w.image.height*K),St=G!==null?G.x:0,At=G!==null?G.y:0;Qt.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,St,At,W,ut),Nt.unbindTexture()};const Qa=z.createFramebuffer(),tl=z.createFramebuffer();this.copyTextureToTexture=function(w,G,Q=null,K=null,W=0,ut=null){ut===null&&(W!==0?($n("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=W,W=0):ut=0);let St,At,Et,Gt,Vt,Bt,ae,pe,zt;const Zt=w.isCompressedTexture?w.mipmaps[ut]:w.image;if(Q!==null)St=Q.max.x-Q.min.x,At=Q.max.y-Q.min.y,Et=Q.isBox3?Q.max.z-Q.min.z:1,Gt=Q.min.x,Vt=Q.min.y,Bt=Q.isBox3?Q.min.z:0;else{const $e=Math.pow(2,-W);St=Math.floor(Zt.width*$e),At=Math.floor(Zt.height*$e),w.isDataArrayTexture?Et=Zt.depth:w.isData3DTexture?Et=Math.floor(Zt.depth*$e):Et=1,Gt=0,Vt=0,Bt=0}K!==null?(ae=K.x,pe=K.y,zt=K.z):(ae=0,pe=0,zt=0);const ve=Lt.convert(G.format),Ot=Lt.convert(G.type);let ye;G.isData3DTexture?(Qt.setTexture3D(G,0),ye=z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Qt.setTexture2DArray(G,0),ye=z.TEXTURE_2D_ARRAY):(Qt.setTexture2D(G,0),ye=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);const he=z.getParameter(z.UNPACK_ROW_LENGTH),Ht=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Pe=z.getParameter(z.UNPACK_SKIP_PIXELS),We=z.getParameter(z.UNPACK_SKIP_ROWS),Ii=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Zt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Zt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Gt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Vt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Bt);const ue=w.isDataArrayTexture||w.isData3DTexture,ni=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const $e=wt.get(w),Ue=wt.get(G),de=wt.get($e.__renderTarget),bi=wt.get(Ue.__renderTarget);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,de.__webglFramebuffer),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let di=0;di<Et;di++)ue&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,W,Bt+di),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,wt.get(G).__webglTexture,ut,zt+di)),z.blitFramebuffer(Gt,Vt,St,At,ae,pe,St,At,z.DEPTH_BUFFER_BIT,z.NEAREST);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||wt.has(w)){const $e=wt.get(w),Ue=wt.get(G);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,Qa),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,tl);for(let de=0;de<Et;de++)ue?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$e.__webglTexture,W,Bt+de):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,$e.__webglTexture,W),ni?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ue.__webglTexture,ut,zt+de):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ue.__webglTexture,ut),W!==0?z.blitFramebuffer(Gt,Vt,St,At,ae,pe,St,At,z.COLOR_BUFFER_BIT,z.NEAREST):ni?z.copyTexSubImage3D(ye,ut,ae,pe,zt+de,Gt,Vt,St,At):z.copyTexSubImage2D(ye,ut,ae,pe,Gt,Vt,St,At);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ni?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(ye,ut,ae,pe,zt,St,At,Et,ve,Ot,Zt.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(ye,ut,ae,pe,zt,St,At,Et,ve,Zt.data):z.texSubImage3D(ye,ut,ae,pe,zt,St,At,Et,ve,Ot,Zt):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ut,ae,pe,St,At,ve,Ot,Zt.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ut,ae,pe,Zt.width,Zt.height,ve,Zt.data):z.texSubImage2D(z.TEXTURE_2D,ut,ae,pe,St,At,ve,Ot,Zt);z.pixelStorei(z.UNPACK_ROW_LENGTH,he),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ht),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Pe),z.pixelStorei(z.UNPACK_SKIP_ROWS,We),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ii),ut===0&&G.generateMipmaps&&z.generateMipmap(ye),Nt.unbindTexture()},this.copyTextureToTexture3D=function(w,G,Q=null,K=null,W=0){return $n('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,G,Q,K,W)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&Qt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Qt.setTextureCube(w,0):w.isData3DTexture?Qt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Qt.setTexture2DArray(w,0):Qt.setTexture2D(w,0),Nt.unbindTexture()},this.resetState=function(){U=0,D=0,k=null,Nt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}}const oh={type:"change"},qa={type:"start"},ah={type:"end"},Or=new dr,lh=new hn,W_=Math.cos(70*Wu.DEG2RAD),He=new B,ii=2*Math.PI,Ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ya=1e-6;class $_ extends zd{constructor(t,e=null){super(t,e),this.state=Ee.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fn.ROTATE,MIDDLE:Fn.DOLLY,RIGHT:Fn.PAN},this.touches={ONE:Bn.ROTATE,TWO:Bn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new xn,this._lastTargetPosition=new B,this._quat=new xn().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pc,this._sphericalDelta=new Pc,this._scale=1,this._panOffset=new B,this._rotateStart=new Xt,this._rotateEnd=new Xt,this._rotateDelta=new Xt,this._panStart=new Xt,this._panEnd=new Xt,this._panDelta=new Xt,this._dollyStart=new Xt,this._dollyEnd=new Xt,this._dollyDelta=new Xt,this._dollyDirection=new B,this._mouse=new Xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Z_.bind(this),this._onPointerDown=X_.bind(this),this._onPointerUp=q_.bind(this),this._onContextMenu=eg.bind(this),this._onMouseWheel=K_.bind(this),this._onKeyDown=J_.bind(this),this._onTouchStart=Q_.bind(this),this._onTouchMove=tg.bind(this),this._onMouseDown=Y_.bind(this),this._onMouseMove=j_.bind(this),this._interceptControlDown=ig.bind(this),this._interceptControlUp=ng.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(oh),this.update(),this.state=Ee.NONE}update(t=null){const e=this.object.position;He.copy(e).sub(this.target),He.applyQuaternion(this._quat),this._spherical.setFromVector3(He),this.autoRotate&&this.state===Ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ii:n>Math.PI&&(n-=ii),s<-Math.PI?s+=ii:s>Math.PI&&(s-=ii),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(He.setFromSpherical(this._spherical),He.applyQuaternion(this._quatInverse),e.copy(this.target).add(He),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const h=He.length();c=this._clampDistance(h*this._scale);const u=h-c;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),a=!!u}else if(this.object.isOrthographicCamera){const h=new B(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=u!==this.object.zoom;const d=new B(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),c=He.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Or.origin.copy(this.object.position),Or.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Or.direction))<W_?this.object.lookAt(this.target):(lh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Or.intersectPlane(lh,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ya||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ya||this._lastTargetPosition.distanceToSquared(this.target)>Ya?(this.dispatchEvent(oh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ii/60*this.autoRotateSpeed*t:ii/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){He.setFromMatrixColumn(e,0),He.multiplyScalar(-t),this._panOffset.add(He)}_panUp(t,e){this.screenSpacePanning===!0?He.setFromMatrixColumn(e,1):(He.setFromMatrixColumn(e,0),He.crossVectors(this.object.up,He)),He.multiplyScalar(t),this._panOffset.add(He)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;He.copy(s).sub(this.target);let a=He.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/n.clientHeight,this.object.matrix),this._panUp(2*e*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,a=e-n.top,c=n.width,h=n.height;this._mouse.x=s/c*2-1,this._mouse.y=-(a/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/e.clientHeight),this._rotateUp(ii*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/e.clientHeight),this._rotateUp(ii*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(t.pageX+e.x)*.5,h=(t.pageY+e.y)*.5;this._updateZoomParameters(c,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function X_(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function Z_(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function q_(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ah),this.state=Ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Y_(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Fn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ee.DOLLY;break;case Fn.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ee.ROTATE}break;case Fn.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ee.PAN}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(qa)}function j_(o){switch(this.state){case Ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function K_(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ee.NONE||(o.preventDefault(),this.dispatchEvent(qa),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(ah))}function J_(o){this.enabled!==!1&&this._handleKeyDown(o)}function Q_(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Bn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ee.TOUCH_ROTATE;break;case Bn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ee.TOUCH_PAN;break;default:this.state=Ee.NONE}break;case 2:switch(this.touches.TWO){case Bn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ee.TOUCH_DOLLY_PAN;break;case Bn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ee.TOUCH_DOLLY_ROTATE;break;default:this.state=Ee.NONE}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(qa)}function tg(o){switch(this._trackPointer(o),this.state){case Ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ee.NONE}}function eg(o){this.enabled!==!1&&o.preventDefault()}function ig(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ng(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const sg=new Set(["Company","Model lab","Research lab"]),rg=new Set(["Application","Agent","Framework","Model","Platform","Project","Protocol","Standard"]),og=new Set(["materials","equipment","fabrication","compute","datacenter","robotics"]),ch={organization:{label:"Company / organization",short:"Company",symbol:"●"},hardware:{label:"Hardware / physical product",short:"Hardware",symbol:"■"},software:{label:"Software / model product",short:"Software",symbol:"◆"}};function ja(o){return sg.has(o.type)?"organization":rg.has(o.type)||o.cluster==="eda-ip"||o.cluster==="robotics-software"?"software":og.has(o.layer)?"hardware":"software"}const hh=new Set(["RUNS_ON","TRAINS_ON","DEPENDS_ON","USES_MODEL_FROM"]),uh=new Set(["PARTNERS_WITH","INTEGRATES_WITH","COMPETES_WITH"]),ag=(o,t,e)=>{if(uh.has(o.type))return o.source===t?o.target:o.target===t?o.source:null;const[n,s]=hh.has(o.type)?[o.source,o.target]:[o.target,o.source];return e==="upstream"?n===t?s:null:s===t?n:null};class lg{constructor(t,e,n,s){this.mount=t,this.entities=e,this.relationships=n,this.onSelect=s,this.nodes=new Map,this.labelEls=new Map,this.activeLabelIds=new Set,this.lines=[],this.visibleLayers=new Set(Me.map(c=>c.id)),this.activeGeography="all",this.relationFilter="ALL",this.timeYear=2026,this.view="ecosystem",this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.scene=new gd,this.scene.fog=new ba(592652,.0047),this.camera=new ci(42,innerWidth/innerHeight,.1,1200),this.camera.position.set(112,58,135),this.renderer=new V_({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.6)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=ri,this.renderer.toneMappingExposure=1.22,t.append(this.renderer.domElement),this.controls=new $_(this.camera,this.renderer.domElement),Object.assign(this.controls,{enableDamping:!0,dampingFactor:.065,minDistance:24,maxDistance:280,enablePan:!0,screenSpacePanning:!0,zoomToCursor:!0,rotateSpeed:.48,zoomSpeed:.82,panSpeed:.72,autoRotate:!this.reduced,autoRotateSpeed:.1}),this.controls.target.set(10,5,0),this.scene.add(new Rd(15791601,2106666,2.05)),this.scene.add(new Ud(12109250,.42));const a=new Id(14726776,135,250);a.position.set(10,80,35),this.scene.add(a),this.universe=new Tn,this.scene.add(this.universe),this.buildArchitecture(),this.buildNodes(),this.buildGravityRanking(),this.buildModelRanking(),this.bind(),this.animate()}buildArchitecture(){this.layerGroups=new Map,this.architectureGuides=[],Me.forEach((a,c)=>{const h=new Tn;h.userData.layer=a.id,this.universe.add(h),this.layerGroups.set(a.id,h);const u=new li(new Ua(25+c*3.1,.035,3,96),new Cs({color:a.color,transparent:!0,opacity:.13,depthWrite:!1}));u.rotation.x=Math.PI/2,u.position.set(10,a.y,0),h.add(u),this.architectureGuides.push(u);const d=new li(new Ia(24+c*3.1,24.12+c*3.1,96),new Cs({color:a.color,transparent:!0,opacity:.035,side:wi,depthWrite:!1}));d.rotation.x=Math.PI/2,d.position.set(10,a.y,0),h.add(d),this.architectureGuides.push(d)});const t=new Bd(280,40,4409417,2106406);t.position.y=-61,t.material.transparent=!0,t.material.opacity=.28,this.universe.add(t),this.architectureGuides.push(t);const e=new Tr({color:16777215,transparent:!0,opacity:.12}),n=[new B(10,-60,0),new B(10,72,0)],s=new Aa(new je().setFromPoints(n),e);this.universe.add(s),this.architectureGuides.push(s)}buildNodes(){const t={organization:new Na(1,12,8),hardware:new ss(1.45,1.45,1.45),software:new Da(1.15,0)},e=new Map(Me.map(n=>[n.id,this.entities.filter(s=>s.layer===n.id)]));this.entities.forEach(n=>{const s=Me.find(T=>T.id===n.layer),a=e.get(n.layer),c=n.positionIndex,h=[...new Set(a.map(T=>T.cluster))],u=h.indexOf(n.cluster),d=a.filter(T=>T.cluster===n.cluster),p=d.indexOf(n),_=Math.PI*2/h.length,m=u*_+(p-(d.length-1)/2)*Math.min(.13,_/Math.max(2,d.length))+Me.indexOf(s)*.71,y=24+Me.indexOf(s)*3.05+p%5*2.15,M=.58+n.importanceLevel*.28,S=ja(n),x=t[S],g=S==="organization"?{roughness:.78,metalness:.05,emissiveIntensity:.045,opacity:.94}:S==="hardware"?{roughness:.28,metalness:.76,emissiveIntensity:.07,opacity:.96}:{roughness:.42,metalness:.12,emissiveIntensity:.22,opacity:.84},R=new Ad({color:s.color,emissive:s.color,transparent:!0,...g}),C=new li(x,R);if(S==="software"&&(C.rotation.y=Math.PI/4),C.position.set(10+Math.cos(m)*y,s.y+(p%4-1.5)*1.05,Math.sin(m)*y),C.userData={entity:n,kind:S,baseScale:M,baseEmissive:g.emissiveIntensity,baseOpacity:g.opacity},C.scale.setScalar(this.reduced?M:.01),this.layerGroups.get(n.layer).add(C),this.nodes.set(n.id,C),this.reduced||setTimeout(()=>{C.scale.setScalar(M)},80+Me.indexOf(s)*40+c%40*8),n.importanceLevel===3||n.type==="Model"&&n.importanceLevel>=2){const T=document.createElement("span");T.className="node-label",T.textContent=n.name,T.dataset.id=n.id,this.mount.append(T),this.labelEls.set(n.id,T)}})}buildGravityRanking(){const t=new Map(this.entities.map(n=>[n.id,0])),e={confirmed:1,reported:.65,inferred:.25,representative:.05};this.relationships.forEach(n=>{const s=e[n.status]??.5;t.has(n.source)&&t.set(n.source,t.get(n.source)+s),t.has(n.target)&&t.set(n.target,t.get(n.target)+s)}),this.gravityScore=new Map(this.entities.map(n=>[n.id,n.importanceLevel*20+Math.sqrt(t.get(n.id)||0)*8])),this.gravityEntities=[...this.entities].sort((n,s)=>this.gravityScore.get(s.id)-this.gravityScore.get(n.id)||n.name.localeCompare(s.name)),this.gravityIndex=new Map(this.gravityEntities.map((n,s)=>[n.id,s])),this.gravityEntities.slice(0,45).forEach(n=>{if(this.labelEls.has(n.id))return;const s=document.createElement("span");s.className="node-label gravity-label",s.textContent=n.name,s.dataset.id=n.id,s.dataset.gravityOnly="true",this.mount.append(s),this.labelEls.set(n.id,s)})}buildModelRanking(){const t=new Map(this.entities.filter(n=>n.type==="Model").map(n=>[n.id,n])),e=new Map;this.relationships.filter(n=>n.type==="DEVELOPS"&&t.has(n.target)).forEach(n=>{e.has(n.source)||e.set(n.source,[]);const s=e.get(n.source);s.includes(n.target)||s.push(n.target)}),this.modelPortfolioByModel=new Map,this.modelEntities=[],e.forEach((n,s)=>{const a=n.map(h=>t.get(h)).filter(Boolean);if(!a.length)return;const c={producer:s,root:a[0].id,items:a};a.forEach(h=>this.modelPortfolioByModel.set(h.id,c)),this.modelEntities.push(a[0])}),this.modelEntities.sort((n,s)=>s.importanceLevel-n.importanceLevel||n.name.localeCompare(s.name)),this.modelOrder=new Map(this.modelEntities.map((n,s)=>[n.id,s])),this.modelEntities.forEach(n=>this.ensureLabel(n.id,"model-label","modelOnly"))}ensureLabel(t,e="",n=null){if(this.labelEls.has(t)){const c=this.labelEls.get(t);return e&&c.classList.add(e),n&&(c.dataset[n]="true"),c}const s=this.nodes.get(t)?.userData.entity;if(!s)return null;const a=document.createElement("span");return a.className=`node-label ${e}`.trim(),a.textContent=s.name,a.dataset.id=t,n&&(a.dataset[n]="true"),this.mount.append(a),this.labelEls.set(t,a),a}setActiveLabels(t=[]){this.activeLabelIds=new Set(t),this.labelEls.forEach((e,n)=>e.classList.toggle("active-node-label",this.activeLabelIds.has(n))),this.activeLabelIds.forEach(e=>this.ensureLabel(e,"active-node-label"))}bind(){this.raycaster=new Fd,this.pointer=new Xt;let t={x:0,y:0};this.renderer.domElement.addEventListener("pointerdown",e=>t={x:e.clientX,y:e.clientY}),this.renderer.domElement.addEventListener("pointerup",e=>{Math.hypot(e.clientX-t.x,e.clientY-t.y)>5||this.pick(e)}),this.renderer.domElement.addEventListener("pointermove",e=>{this.pointer.set(e.clientX/innerWidth*2-1,-e.clientY/innerHeight*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.raycaster.intersectObjects([...this.nodes.values()],!1)[0];this.renderer.domElement.style.cursor=n?"pointer":"grab"}),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)})}pick(t){this.pointer.set(t.clientX/innerWidth*2-1,-t.clientY/innerHeight*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.raycaster.intersectObjects([...this.nodes.values()].filter(n=>n.visible),!1)[0];e&&this.onSelect(e.object.userData.entity.id)}animate(){requestAnimationFrame(()=>this.animate()),this.controls.update(),this.updateCamera(),this.updateNodePositions(),this.updateLabels(),this.renderer.render(this.scene,this.camera)}updateCamera(){if(!this.tween)return;const t=Math.min(1,(performance.now()-this.tween.start)/this.tween.duration),e=1-Math.pow(1-t,3);this.camera.position.lerpVectors(this.tween.from,this.tween.to,e),this.controls.target.lerpVectors(this.tween.targetFrom,this.tween.targetTo,e),t===1&&(this.tween=null)}updateNodePositions(){const t=performance.now();this.nodes.forEach(e=>{const n=e.userData.move;if(!n)return;const s=Math.min(1,(t-n.start)/n.duration),a=1-Math.pow(1-s,3);e.position.lerpVectors(n.from,n.to,a),s===1&&(e.userData.move=null)})}updateLabels(){const t=[],e=new B;this.labelEls.forEach((s,a)=>{const c=this.nodes.get(a),h=this.activeLabelIds.has(a);if(s.dataset.gravityOnly&&this.view!=="gravity"&&!h||s.dataset.modelOnly&&this.view!=="models"&&c?.userData.entity.importanceLevel<2&&!h||!c?.visible||!c.parent?.visible){s.hidden=!0;return}const u=c.getWorldPosition(new B);if(e.copy(u).project(this.camera),!(e.z<1&&Math.abs(e.x)<1.05&&Math.abs(e.y)<1.05&&this.camera.position.distanceTo(u)<185)){s.hidden=!0;return}t.push({el:s,n:c,active:h,x:(e.x*.5+.5)*innerWidth+10,y:(-e.y*.5+.5)*innerHeight-4,importance:c.userData.entity.importanceLevel})}),t.sort((s,a)=>Number(a.active)-Number(s.active)||a.importance-s.importance||a.n.material.opacity-s.n.material.opacity);const n=[];t.forEach(s=>{const a=Math.max(38,s.el.textContent.length*5.2),c=s.active?[0,-16,16,-32,32]:[0];let h=null;for(const u of c){const d={left:s.x-3,right:s.x+a,top:s.y+u-7,bottom:s.y+u+7};if(!n.some(p=>!(d.right<p.left||d.left>p.right||d.bottom<p.top||d.top>p.bottom))){h={box:d,dy:u};break}}!h&&s.active&&(h={box:{left:s.x-3,right:s.x+a,top:s.y-7,bottom:s.y+7},dy:0}),s.el.hidden=!h,h&&(n.push(h.box),s.el.style.transform=`translate(${s.x}px,${s.y+h.dy}px)`,s.el.style.opacity=s.active?"1":s.n.material.opacity<.5?".28":".94")})}focus(t,e=30){const n=this.nodes.get(t);if(!n)return;this.controls.autoRotate=!1;const s=n.getWorldPosition(new B),a=this.camera.position.clone().sub(this.controls.target).normalize();this.tween={start:performance.now(),duration:this.reduced?1:900,from:this.camera.position.clone(),to:s.clone().add(a.multiplyScalar(e)),targetFrom:this.controls.target.clone(),targetTo:s}}clearLines(){this.lines.forEach(t=>{this.scene.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})}),this.lines=[]}relationshipVisible(t){return(!t.activeFrom||t.activeFrom<=this.timeYear)&&(!t.activeTo||t.activeTo>=this.timeYear)}relationshipWeight(t){const e={confirmed:1,reported:.68,inferred:.38,representative:.23}[t.status]??.5,n=t.activeFrom||t.activeTo;return e*(n?1:.72)}makeLine(t,e,n,s=!1,a=null,c=null){const h=typeof n=="string"?{type:n,status:"representative"}:n,u=h.type;if(!this.relationshipVisible(h))return;let d=t.getWorldPosition(new B),p=e.getWorldPosition(new B);const _=uh.has(u);hh.has(u)&&([d,p]=[p,d]);const m=d.clone().lerp(p,.5);m.x+=Math.min(14,d.distanceTo(p)*.12);const y=new wd(d,m,p),M=this.relationshipWeight(h),S=a??(s?Math.max(.38,.95*M):Math.max(.08,.38*M)),x=c??(u==="COMPETES_WITH"?11893619:u==="INVESTS_IN"?12755293:s?14729613:8889764),g=new Tn,R=new Aa(new je().setFromPoints(y.getPoints(28)),new Tr({color:x,transparent:!0,opacity:S,depthWrite:!1}));if(g.add(R),!_){const T=y.getPoint(.76),O=y.getTangent(.76).normalize(),U=(s?1.05:.62)*(.7+M*.45),D=new li(new Ca(U*.38,U,7),new Cs({color:x,transparent:!0,opacity:Math.min(1,S*1.35),depthWrite:!1}));D.position.copy(T),D.quaternion.setFromUnitVectors(new B(0,1,0),O),g.add(D)}g.userData={type:u,status:h.status,activeFrom:h.activeFrom,activeTo:h.activeTo,weight:M},this.scene.add(g),this.lines.push(g)}select(t){if(this.selectedId=t,this.view==="gravity")return this.selectGravity(t);if(this.view==="models")return this.nodes.get(t)?.userData.entity.type==="Model"?this.selectModel(t):this.selectModelNode(t);this.clearLines();const e=this.relationships.filter(s=>(s.source===t||s.target===t)&&(this.relationFilter==="ALL"||s.type===this.relationFilter)&&this.relationshipVisible(s)),n=new Set([t]);e.forEach(s=>{n.add(s.source),n.add(s.target);const a=this.nodes.get(s.source),c=this.nodes.get(s.target);a&&c&&this.makeLine(a,c,s,!0)}),this.setActiveLabels(n),this.nodes.forEach((s,a)=>{s.material.opacity=n.has(a)?.98:.11,s.material.emissiveIntensity=a===t?.75:n.has(a)?.22:.02,s.scale.setScalar(s.userData.baseScale*(a===t?1.55:1))}),this.focus(t)}selectGravity(t,e=6,n=240){clearTimeout(this.gravityTimer);const s=this.relationships.filter(p=>(this.relationFilter==="ALL"||p.type===this.relationFilter)&&this.relationshipVisible(p)&&this.nodes.get(p.source)?.visible&&this.nodes.get(p.source)?.parent?.visible&&this.nodes.get(p.target)?.visible&&this.nodes.get(p.target)?.parent?.visible),a=new Map([[t,0]]),c=[t];for(;c.length&&a.size<n;){const p=c.shift(),_=a.get(p);if(!(_>=e))for(const m of s){const y=m.source===p?m.target:m.target===p?m.source:null;if(!(!y||a.has(y))&&(a.set(y,_+1),c.push(y),a.size>=n))break}}const h=[...a.keys()],u=new Set(h),d=s.filter(p=>u.has(p.source)&&u.has(p.target));return this.traceGraph(t,h,d,a),this.frameNodes(h),{gravity:!0,nodes:h.length,edges:d.length,hops:Math.max(0,...a.values()),truncated:h.length>=n}}buildModelBranch(t,e,n=6,s=90){const a=new Map([[t,0]]),c=[t],h=[t],u=[],d=e==="downstream"?this.relationships.filter(p=>p.type==="DEVELOPS"&&p.target===t&&this.relationshipVisible(p)).map(p=>p.source):[];for(;h.length&&c.length<s;){const p=h.shift(),_=a.get(p);if(_>=n)continue;const m=p===t&&e==="downstream"?[t,...d]:[p];for(const y of m)for(const M of this.relationships){if(this.relationFilter!=="ALL"&&M.type!==this.relationFilter||!this.relationshipVisible(M))continue;const S=ag(M,y,e),x=this.nodes.get(S)?.userData.entity;if(!(!S||!x||S===t||y!==t&&x.type==="Model"||a.has(S)||this.activeGeography!=="all"&&x.geography!==this.activeGeography||!this.visibleLayers.has(x.layer))&&(a.set(S,_+1),c.push(S),h.push(S),u.push(y===t?M:{...M,source:M.source===y?t:M.source,target:M.target===y?t:M.target}),c.length>=s))break}}return{nodes:c,edges:u,hops:a,maxDepth:Math.max(0,...a.values()),truncated:c.length>=s}}selectModel(t){clearTimeout(this.modelTimer);const e=this.buildModelBranch(t,"upstream"),n=this.buildModelBranch(t,"downstream"),s=new Set(e.nodes),a=n.nodes.filter(_=>_===t||!s.has(_)),c=[...new Set([...e.nodes,...a])],h=new Set(c);this.activeModelRoot=t,this.modelTreeIds=h,this.modelTree={creation:e,inference:{...n,nodes:a}},this.applyVisibility();const u=this.reduced?1:850,d=new Map([[t,new B(0,0,0)]]),p=(_,m)=>{for(let y=1;y<=_.maxDepth;y++){const M=_.nodes.filter(x=>x!==t&&_.hops.get(x)===y&&!d.has(x)),S=Math.min(116,Math.max(16,(M.length-1)*8.5));M.forEach((x,g)=>d.set(x,new B(M.length===1?0:-S/2+S*g/(M.length-1),m*y*15,(g%3-1)*1.8)))}};return p(e,1),p(this.modelTree.inference,-1),this.nodes.forEach((_,m)=>{h.has(m)&&(this.ensureLabel(m,m===t?"model-label":""),_.scale.setScalar(_.userData.baseScale*(m===t?1.85:1.18)),_.userData.move={start:performance.now(),duration:u,from:_.position.clone(),to:d.get(m)||new B})}),this.camera.up.set(0,1,0),this.cameraCommand("front"),this.modelTimer=setTimeout(()=>this.drawModelTree(),this.reduced?5:900),{model:!0,creation:e.nodes.length-1,inference:a.length-1,creationDepth:e.maxDepth,inferenceDepth:n.maxDepth,truncated:e.truncated||n.truncated}}drawModelTree(){if(this.view!=="models"||!this.modelTree)return;this.clearLines();const t=(e,n)=>e.edges.forEach(s=>{if(!this.modelTreeIds.has(s.source)||!this.modelTreeIds.has(s.target))return;const a=this.nodes.get(s.source),c=this.nodes.get(s.target);a?.visible&&c?.visible&&this.makeLine(a,c,s,!0,.82,n)});t(this.modelTree.creation,14201972),t(this.modelTree.inference,7911082),this.frameNodes([...this.modelTreeIds],550)}selectModelNode(t){if(this.modelTreeIds?.has(t))return this.nodes.forEach((e,n)=>{const s=this.modelTreeIds.has(n);e.material.opacity=s?n===t?1:.72:.03,e.material.emissiveIntensity=n===t?.9:s?.18:.005,e.scale.setScalar(e.userData.baseScale*(n===t?1.65:1.12))}),this.focus(t,34),{modelNode:!0}}trace(t){this.clearLines();const e=new Set(t);this.setActiveLabels(e),this.nodes.forEach((n,s)=>{n.material.opacity=e.has(s)?.98:.065,n.material.emissiveIntensity=e.has(s)?.6:.01,n.scale.setScalar(n.userData.baseScale*(e.has(s)?1.25:1))});for(let n=0;n<t.length-1;n++){const s=this.nodes.get(t[n]),a=this.nodes.get(t[n+1]);s&&a&&this.makeLine(s,a,"DEPENDS_ON",!0)}t[0]&&this.focus(t[0])}traceGraph(t,e,n,s){this.clearLines();const a=new Set(e),c=Math.max(1,...s.values());this.setActiveLabels(a),this.nodes.forEach((h,u)=>{const d=s.get(u),p=a.has(u);h.material.opacity=p?Math.max(.5,.98-(d||0)*.075):.045,h.material.emissiveIntensity=u===t?.9:p?Math.max(.14,.62-(d||0)*.08):.005,h.scale.setScalar(h.userData.baseScale*(u===t?1.6:p?Math.max(1.08,1.36-(d||0)*.045):1))}),n.filter(h=>this.relationshipVisible(h)).forEach(h=>{const u=this.nodes.get(h.source),d=this.nodes.get(h.target),p=Math.max(s.get(h.source)||0,s.get(h.target)||0);u&&d&&this.makeLine(u,d,h,!0,Math.max(.28,.96-p/c*.5))}),this.focus(t,38)}resetStyles(){this.clearLines(),this.setActiveLabels(),this.nodes.forEach(t=>{t.material.opacity=t.userData.baseOpacity,t.material.emissiveIntensity=t.userData.baseEmissive,t.scale.setScalar(t.userData.baseScale)})}reset(){this.selectedId=null,this.view==="models"&&(this.activeModelRoot=null,this.modelTree=null,this.modelTreeIds=null,this.applyVisibility()),this.resetStyles(),this.controls.autoRotate=this.view!=="models"&&this.activeGeography==="all"&&!this.reduced,this.relayout(!0)}applyVisibility(){this.layerGroups.forEach((t,e)=>t.visible=this.visibleLayers.has(e)),this.nodes.forEach(t=>{const e=t.userData.entity,n=this.activeGeography==="all"||e.geography===this.activeGeography;t.visible=n&&(this.view!=="models"?!0:this.modelTreeIds?this.modelTreeIds.has(e.id):this.modelOrder.has(e.id))}),this.clearLines()}layoutPosition(t,e){const n=Me.find(M=>M.id===t.layer),s=Me.indexOf(n),a=e.indexOf(t);if(this.view==="architecture"){const M=Math.ceil(Math.sqrt(e.length));return new B((a%M-(M-1)/2)*5.6,n.y,(Math.floor(a/M)-(Math.ceil(e.length/M)-1)/2)*5.2)}const c=[...new Set(e.map(M=>M.cluster))],h=c.indexOf(t.cluster),u=e.filter(M=>M.cluster===t.cluster),d=u.indexOf(t),p=Math.PI*2/c.length,_=Math.min(.22,p/Math.max(2,u.length)),m=h*p+(d-(u.length-1)/2)*_+s*.71,y=24+s*3.05+d%3*1.5;return new B(10+Math.cos(m)*y,n.y+(d%3-1)*1.15,Math.sin(m)*y)}layoutGravity(t,e){const n=e.get(t.id)||0,s=n*2.3999632297,a=n===0?0:5+Math.sqrt(n)*3.35,c=Me.findIndex(h=>h.id===t.layer);return new B(Math.cos(s)*a,(c-(Me.length-1)/2)*.32+(n%3-1)*.15,Math.sin(s)*a)}layoutModelGallery(t,e){const n=e.get(t.id)||0,s=Math.max(7,Math.ceil(Math.sqrt(e.size*1.55))),a=Math.floor(n/s),c=n%s,h=Math.ceil(e.size/s);return new B((c-(s-1)/2)*10.5,(h-1)/2*8.5-a*8.5,(n%3-1)*.65)}relayout(t=!1){const e=this.entities.filter(u=>this.activeGeography==="all"||u.geography===this.activeGeography),n=new Set(e.map(u=>u.id)),s=new Map(this.gravityEntities.filter(u=>n.has(u.id)).map((u,d)=>[u.id,d])),a=new Map(Me.map(u=>[u.id,e.filter(d=>d.layer===u.id)])),c=this.reduced?1:850,h=new Map(this.modelEntities.filter(u=>n.has(u.id)).map((u,d)=>[u.id,d]));this.nodes.forEach(u=>{const d=u.userData.entity;if(u.userData.eco||(u.userData.eco=u.position.clone()),!u.visible)return;const p=a.get(d.layer),_=this.view==="gravity"?this.layoutGravity(d,s):this.view==="models"?this.layoutModelGallery(d,h):this.activeGeography==="all"&&this.view==="ecosystem"?u.userData.eco.clone():this.layoutPosition(d,p),m=s.get(d.id)||0,y=this.view==="gravity"?1+Math.max(0,42-m)/42*1.35:this.view==="models"?1.22:1;u.scale.setScalar(u.userData.baseScale*y),u.userData.move={start:performance.now(),duration:c,from:u.position.clone(),to:_}}),t&&(this.view==="gravity"?(this.cameraCommand("top"),clearTimeout(this.gravityTimer),this.gravityTimer=setTimeout(()=>this.drawGravityWeb(),this.reduced?5:900)):this.view==="models"?(this.camera.up.set(0,1,0),this.cameraCommand("front")):this.frameVisible(c))}frameVisible(t=900){const e=[...this.nodes.values()].filter(p=>p.visible&&p.parent?.visible),n=e.map(p=>p.userData.move?.to||p.position);if(!n.length)return;const s=new en().setFromPoints(n),a=s.getCenter(new B),c=s.getSize(new B),h=Math.max(18,c.length()/2),u=Math.min(245,Math.max(52,h*1.75)),d=new B(1,.38,1.15).normalize();this.tween={start:performance.now(),duration:this.reduced?1:t,from:this.camera.position.clone(),to:a.clone().add(d.multiplyScalar(u)),targetFrom:this.controls.target.clone(),targetTo:a}}frameNodes(t,e=650){const n=t.map(d=>this.nodes.get(d)).filter(Boolean).map(d=>d.getWorldPosition(new B));if(!n.length)return;const s=new en().setFromPoints(n),a=s.getCenter(new B),c=s.getSize(new B),h=Math.min(245,Math.max(46,c.length()*1.15)),u=this.camera.position.clone().sub(this.controls.target).normalize();this.tween={start:performance.now(),duration:this.reduced?1:e,from:this.camera.position.clone(),to:a.clone().add(u.multiplyScalar(h)),targetFrom:this.controls.target.clone(),targetTo:a}}drawGravityWeb(){if(this.view!=="gravity")return;this.clearLines();const t=this.gravityEntities.filter(n=>this.nodes.get(n.id)?.visible&&this.nodes.get(n.id)?.parent?.visible).slice(0,140),e=new Set(t.map(n=>n.id));this.relationships.filter(n=>(this.relationFilter==="ALL"||n.type===this.relationFilter)&&this.relationshipVisible(n)&&e.has(n.source)&&e.has(n.target)).forEach(n=>{const s=this.nodes.get(n.source),a=this.nodes.get(n.target);s&&a&&this.makeLine(s,a,n,!1)})}cameraCommand(t){if(this.controls.autoRotate=!1,t==="fit"){this.camera.up.set(0,1,0),this.frameVisible();return}const e=[...this.nodes.values()].filter(p=>p.visible&&p.parent?.visible),n=e.map(p=>p.userData.move?.to||p.position);if(!n.length)return;const s=new en().setFromPoints(n),a=s.getCenter(new B),c=s.getSize(new B),h=Math.min(245,Math.max(58,c.length()*1.05));if(t==="front"||t==="top"){this.camera.up.set(0,t==="front"?1:0,t==="front"?0:-1);const p=t==="front"?new B(0,.08,1):new B(0,1,.001);this.tween={start:performance.now(),duration:this.reduced?1:700,from:this.camera.position.clone(),to:a.clone().add(p.normalize().multiplyScalar(h)),targetFrom:this.controls.target.clone(),targetTo:a};return}const u=t==="zoom-in"?.72:1.38,d=this.camera.position.clone().sub(this.controls.target).multiplyScalar(u);this.tween={start:performance.now(),duration:this.reduced?1:350,from:this.camera.position.clone(),to:this.controls.target.clone().add(d),targetFrom:this.controls.target.clone(),targetTo:this.controls.target.clone()}}setLayers(t){this.visibleLayers=new Set(t),this.view==="models"&&(this.activeModelRoot=null,this.modelTree=null,this.modelTreeIds=null),this.applyVisibility(),this.relayout(!0)}setGeography(t){this.activeGeography=t,this.view==="models"&&(this.activeModelRoot=null,this.modelTree=null,this.modelTreeIds=null),this.applyVisibility(),this.resetStyles(),this.controls.autoRotate=this.view!=="models"&&t==="all"&&!this.reduced,this.relayout(!0)}setRelation(t){this.relationFilter=t,this.view==="gravity"&&this.drawGravityWeb(),this.view==="models"&&this.activeModelRoot&&this.selectModel(this.activeModelRoot)}setTime(t){this.timeYear=Number(t),this.clearLines(),this.view==="models"&&this.activeModelRoot?this.selectModel(this.activeModelRoot):this.selectedId?this.select(this.selectedId):this.view==="gravity"&&this.drawGravityWeb()}setView(t){clearTimeout(this.gravityTimer),clearTimeout(this.modelTimer),this.view=t,this.activeModelRoot=null,this.modelTree=null,this.modelTreeIds=null,document.body.classList.toggle("models-view",t==="models"),this.controls.autoRotate=!1,this.architectureGuides.forEach(e=>e.visible=t!=="gravity"&&t!=="models"),this.applyVisibility(),this.resetStyles(),this.relayout(!0)}}const Ka=[{id:"all",name:"All ecosystem",short:"ALL",description:"The complete global AI system."},{id:"United States",name:"United States ecosystem",short:"US",description:"Organizations and technologies principally associated with the United States."},{id:"China",name:"Chinese ecosystem",short:"CN",description:"Organizations and technologies principally associated with mainland China."},{id:"Russia",name:"Russian ecosystem",short:"RU",description:"Organizations and technologies principally associated with Russia."}],Ce=o=>String(o).replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),un=2026,Fr=(o,t,e,n,s)=>n+(o-t)/(e-t)*(s-n),dh=o=>o.map((t,e)=>`${e?"L":"M"}${t[0].toFixed(1)},${t[1].toFixed(1)}`).join(" ");class cg{constructor(t,e,n,s){this.root=t,this.entities=e,this.relationships=n,this.onSelect=s,this.startYear=1990,this.activeLayers=new Set(Me.map(a=>a.id)),this.geography="all",t.addEventListener("input",a=>{if(a.target.id==="timelineStart"){this.startYear=Number(a.target.value);const c=t.querySelector("#timelineStartReadout");c&&(c.textContent=this.startYear)}a.target.id==="timelineSearch"&&this.renderSearch(a.target.value)}),t.addEventListener("change",a=>{a.target.id==="timelineStart"&&this.render()}),t.addEventListener("click",a=>{const c=a.target.closest("[data-entity]"),h=a.target.closest("[data-year]"),u=a.target.closest("[data-open-profile]");if(u){a.stopPropagation(),this.closeDetail(),this.onSelect(u.dataset.openProfile);return}if(c){a.stopPropagation(),this.showEntityDetail(c.dataset.entity);return}if(h){a.stopPropagation(),this.showYearDetail(Number(h.dataset.year));return}a.target.closest("[data-close-timeline-detail]")&&this.closeDetail()}),t.addEventListener("keydown",a=>{a.key==="Escape"&&a.target.id==="timelineSearch"?(a.target.value="",this.renderSearch("")):a.key==="Escape"&&this.closeDetail()})}setScope(t,e){this.activeLayers=new Set(t),this.geography=e,this.root.hidden||this.render()}show(){this.root.hidden=!1,this.render()}hide(){this.root.hidden=!0}scoped(){return this.entities.filter(t=>this.activeLayers.has(t.layer)&&(this.geography==="all"||t.geography===this.geography))}renderSearch(t){const e=this.root.querySelector("#timelineSearchResults");if(!e)return;const n=t.trim().toLowerCase();if(!n){e.hidden=!0,e.innerHTML="";return}const s=this.scoped().filter(a=>[a.name,a.type,a.country,a.timelineBasis,...a.categories,...a.products].filter(Boolean).join(" ").toLowerCase().includes(n)).sort((a,c)=>+!!c.timelineYear-+!!a.timelineYear||c.importanceLevel-a.importanceLevel||a.name.localeCompare(c.name)).slice(0,10);e.innerHTML=s.length?s.map(a=>`<button data-entity="${Ce(a.id)}"><span><strong>${Ce(a.name)}</strong><small>${Ce(a.type)} · ${Ce(a.country)}${a.timelineYear?` · ${a.timelineYear}`:" · Date pending"}</small></span><b>↗</b></button>`).join(""):"<p>No entities found in the current scope.</p>",e.hidden=!1}closeDetail(){const t=this.root.querySelector("#timelineInspector");t&&(t.hidden=!0)}showEntityDetail(t){const e=this.entities.find(d=>d.id===t),n=this.root.querySelector("#timelineInspector");if(!e||!n)return;const s=Me.find(d=>d.id===e.layer),a=this.relationships.filter(d=>d.source===t||d.target===t),c=a.filter(d=>d.activeFrom||d.activeTo).sort((d,p)=>(d.activeFrom||0)-(p.activeFrom||0)),h=d=>this.entities.find(p=>p.id===d)?.name||d,u=e.timelineYear?this.scoped().filter(d=>d.id!==t&&d.timelineYear&&Math.abs(d.timelineYear-e.timelineYear)<=1).sort((d,p)=>p.importanceLevel-d.importanceLevel).slice(0,6):[];n.innerHTML=`<div class="timeline-inspector-head"><span>${e.timelineYear||"—"}</span><button data-close-timeline-detail aria-label="Close timeline detail">×</button></div><p class="eyebrow">${Ce(e.timelineBasis||"Date awaiting research")} · ${Ce(s?.short||e.layer)}</p><h2>${Ce(e.name)}</h2><p class="inspector-lede">${Ce(e.description)}</p><dl><div><dt>Entry basis</dt><dd>${Ce(e.timelineBasis||"Not yet audited")}</dd></div><div><dt>Ecosystem layer</dt><dd>${Ce(s?.name||e.layer)}</dd></div><div><dt>Known relations</dt><dd>${a.length}</dd></div></dl><section><h3>Why this entry matters</h3><p>${Ce(e.whyItMatters)}</p></section><section><h3>Relationships through time</h3>${c.length?c.slice(0,8).map(d=>`<button data-entity="${d.source===t?d.target:d.source}"><time>${d.activeFrom||"…"}${d.activeTo?`–${d.activeTo}`:" →"}</time><span><strong>${Ce(h(d.source===t?d.target:d.source))}</strong><small>${Ce(d.type.replaceAll("_"," "))} · ${Ce(d.status)}</small></span></button>`).join(""):"<p>No relationship dates have been audited yet. The structural links remain available in the full profile.</p>"}</section>${u.length?`<section><h3>Entered at roughly the same time</h3><div class="inspector-related">${u.map(d=>`<button data-entity="${d.id}">${Ce(d.name)} <span>${d.timelineYear}</span></button>`).join("")}</div></section>`:""}<button class="open-full-profile" data-open-profile="${e.id}">Open complete entity profile ↗</button>`,n.hidden=!1,n.scrollTop=0}showYearDetail(t){const e=this.root.querySelector("#timelineInspector");if(!e)return;const n=this.scoped().filter(c=>c.timelineYear===t).sort((c,h)=>h.importanceLevel-c.importanceLevel||c.name.localeCompare(h.name)),s=this.relationships.filter(c=>c.activeFrom===t),a=Me.map(c=>({layer:c,count:n.filter(h=>h.layer===c.id).length})).filter(c=>c.count);e.innerHTML=`<div class="timeline-inspector-head"><span>${t}</span><button data-close-timeline-detail aria-label="Close year detail">×</button></div><p class="eyebrow">Year snapshot</p><h2>${n.length} ecosystem entr${n.length===1?"y":"ies"}</h2><p class="inspector-lede">${s.length} dated relationship${s.length===1?"":"s"} begin in this year. Select an entry to understand its role and surrounding events.</p><div class="year-layer-bars">${a.map(c=>`<div><span>${Ce(c.layer.short)}</span><i style="--w:${c.count/Math.max(1,...a.map(h=>h.count))*100}%"></i><b>${c.count}</b></div>`).join("")}</div><section><h3>Entries</h3><div class="year-entry-list">${n.map(c=>`<button data-entity="${c.id}"><span style="--c:${Me.find(h=>h.id===c.layer)?.color}"></span><div><strong>${Ce(c.name)}</strong><small>${Ce(c.timelineBasis)} · ${Ce(c.type)}</small></div><b>↗</b></button>`).join("")||"<p>No audited entries in the current scope.</p>"}</div></section>`,e.hidden=!1,e.scrollTop=0}render(){const t=this.scoped(),e=t.filter($=>$.timelineYear&&$.timelineYear<=un),n=e.filter($=>$.timelineYear>=this.startYear),s=t.length-e.length,a=Array.from({length:un-this.startYear+1},($,Z)=>this.startYear+Z),c=new Map(a.map($=>[$,n.filter(Z=>Z.timelineYear===$).length])),h=Math.max(1,...c.values()),u=[];let d=e.filter($=>$.timelineYear<this.startYear).length;a.forEach($=>{d+=c.get($),u.push([$,d])});const p=760,_=170,m={l:38,r:16,t:12,b:26},y=p-m.l-m.r,M=_-m.t-m.b,S=y/a.length,x=a.map($=>{const Z=c.get($)/h*M,ct=m.l+($-this.startYear)*S;return`<rect data-year="${$}" x="${ct.toFixed(1)}" y="${(m.t+M-Z).toFixed(1)}" width="${Math.max(1,S-.8).toFixed(1)}" height="${Math.max(1,Z).toFixed(1)}"><title>${$}: ${c.get($)} entries · select for details</title></rect>`}).join(""),g=a.filter($=>$===this.startYear||$===un||$%5===0).map($=>`<text x="${Fr($,this.startYear,un,m.l,m.l+y)}" y="${_-7}" text-anchor="middle">${$}</text>`).join(""),R=u.map(([$,Z])=>[Fr($,this.startYear,un,m.l,m.l+y),m.t+M-Z/Math.max(1,e.length)*M]),C=dh(R),T=this.relationships.filter($=>$.activeFrom&&$.activeFrom>=this.startYear&&$.activeFrom<=un),O=a.map($=>[$,T.filter(Z=>Z.activeFrom===$).length]),U=Math.max(1,...O.map(([,$])=>$)),D=dh(O.map(([$,Z])=>[Fr($,this.startYear,un,m.l,m.l+y),m.t+M-Z/U*M])),k=980,A=31,P=Me.length*A+34,N=n.map(($,Z)=>{const ct=Me.findIndex(Ft=>Ft.id===$.layer),V=Fr($.timelineYear,this.startYear,un,145,k-18),yt=18+ct*A+(Z%3-1)*4,st=2.2+$.importanceLevel*.75,gt=Me[ct];return`<circle data-entity="${Ce($.id)}" cx="${V.toFixed(1)}" cy="${yt.toFixed(1)}" r="${st}" fill="${gt?.color||"#999"}"><title>${Ce($.name)} · ${$.timelineYear} · ${Ce($.timelineBasis)}</title></circle>`}).join(""),Y=Me.map(($,Z)=>`<g><text x="4" y="${22+Z*A}">${Ce($.short)}</text><line x1="138" x2="${k}" y1="${18+Z*A}" y2="${18+Z*A}"/></g>`).join(""),et=[...n].sort(($,Z)=>$.timelineYear-Z.timelineYear||Z.importanceLevel-$.importanceLevel).filter(($,Z,ct)=>$.importanceLevel===3&&ct.findIndex(V=>V.timelineYear===$.timelineYear&&V.layer===$.layer)===Z).slice(-18);this.root.innerHTML=`<div class="timeline-shell"><header class="timeline-head"><div><p class="eyebrow">Historical system view</p><h1>How the AI ecosystem accumulated.</h1><p>Organizations use founding years; products and technologies use launch years. Every plotted point states its basis.</p></div><div class="timeline-stat"><strong>${e.length}</strong><span>dated entities</span><small>${s} awaiting research</small></div></header><div class="timeline-search"><span>⌕</span><input id="timelineSearch" type="search" autocomplete="off" placeholder="Search ${t.length} entities in this scope" aria-label="Search timeline entities"><kbd>ESC</kbd><div id="timelineSearchResults" class="timeline-search-results" hidden></div></div><div class="timeline-controls"><label><span>Show history from</span><input id="timelineStart" type="range" min="1950" max="2020" value="${this.startYear}"><b>${this.startYear}</b></label><div><i class="exact"></i>Audited entry date <i class="unknown"></i>Unknown dates are excluded</div></div><div class="timeline-grid"><article class="timeline-card entry-bars"><header><span>01</span><div><h2>New entities by year</h2><p>Annual arrivals reveal waves of infrastructure, model labs and products.</p></div></header><svg viewBox="0 0 ${p} ${_}" role="img" aria-label="Bar chart of new entities by year"><g class="bars">${x}</g><g class="axis">${g}</g></svg></article><article class="timeline-card cumulative"><header><span>02</span><div><h2>Cumulative ecosystem</h2><p>Audited entities accumulate; the green line shows newly dated relationships.</p></div></header><svg viewBox="0 0 ${p} ${_}" role="img" aria-label="Cumulative entity and relationship line chart"><path class="area" d="${C} L${m.l+y},${m.t+M} L${m.l},${m.t+M} Z"/><path class="entity-line" d="${C}"/><path class="relation-line" d="${D}"/><g class="axis">${g}</g></svg><div class="chart-legend"><span><i class="entity"></i>Entities</span><span><i class="relation"></i>Relationships beginning</span></div></article><article class="timeline-card layer-plot"><header><span>03</span><div><h2>Entry points across the stack</h2><p>Select any dot to inspect the entity. Larger dots indicate higher structural importance.</p></div></header><svg viewBox="0 0 ${k} ${P}" role="img" aria-label="Dot plot showing ecosystem layers over time"><g class="layer-rows">${Y}</g><g class="layer-dots">${N}</g></svg></article><article class="timeline-card milestones"><header><span>04</span><div><h2>Milestones</h2><p>A narrative sampling of high-leverage entries in the current scope.</p></div></header><div class="milestone-list">${et.map($=>`<button data-entity="${Ce($.id)}"><time>${$.timelineYear}</time><span><strong>${Ce($.name)}</strong><small>${Ce($.timelineBasis)} · ${Ce(Me.find(Z=>Z.id===$.layer)?.short)}</small></span><b>↗</b></button>`).join("")||"<p>No audited milestones in this range and scope.</p>"}</div></article></div><footer class="timeline-note"><strong>Coverage, not false precision.</strong><span>${e.length} of ${t.length} visible entities have audited dates. Relationship lines use explicit active-from years only. Geography and layer filters apply to this view.</span></footer></div>`;const J=this.root.querySelector(".timeline-controls label b");J&&(J.id="timelineStartReadout"),this.root.insertAdjacentHTML("beforeend",'<aside id="timelineInspector" class="timeline-inspector" hidden aria-live="polite"></aside>')}}function hg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ns={exports:{}};var ug=Ns.exports,fh;function dg(){return fh||(fh=1,(function(o,t){(function(e,n){n(t)})(ug,(function(e){var n="1.9.4";function s(i){var r,l,f,v;for(l=1,f=arguments.length;l<f;l++){v=arguments[l];for(r in v)i[r]=v[r]}return i}var a=Object.create||(function(){function i(){}return function(r){return i.prototype=r,new i}})();function c(i,r){var l=Array.prototype.slice;if(i.bind)return i.bind.apply(i,l.call(arguments,1));var f=l.call(arguments,2);return function(){return i.apply(r,f.length?f.concat(l.call(arguments)):arguments)}}var h=0;function u(i){return"_leaflet_id"in i||(i._leaflet_id=++h),i._leaflet_id}function d(i,r,l){var f,v,b,F;return F=function(){f=!1,v&&(b.apply(l,v),v=!1)},b=function(){f?v=arguments:(i.apply(l,arguments),setTimeout(F,r),f=!0)},b}function p(i,r,l){var f=r[1],v=r[0],b=f-v;return i===f&&l?i:((i-v)%b+b)%b+v}function _(){return!1}function m(i,r){if(r===!1)return i;var l=Math.pow(10,r===void 0?6:r);return Math.round(i*l)/l}function y(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function M(i){return y(i).split(/\s+/)}function S(i,r){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?a(i.options):{});for(var l in r)i.options[l]=r[l];return i.options}function x(i,r,l){var f=[];for(var v in i)f.push(encodeURIComponent(l?v.toUpperCase():v)+"="+encodeURIComponent(i[v]));return(!r||r.indexOf("?")===-1?"?":"&")+f.join("&")}var g=/\{ *([\w_ -]+) *\}/g;function R(i,r){return i.replace(g,function(l,f){var v=r[f];if(v===void 0)throw new Error("No value provided for variable "+l);return typeof v=="function"&&(v=v(r)),v})}var C=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function T(i,r){for(var l=0;l<i.length;l++)if(i[l]===r)return l;return-1}var O="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function U(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var D=0;function k(i){var r=+new Date,l=Math.max(0,16-(r-D));return D=r+l,window.setTimeout(i,l)}var A=window.requestAnimationFrame||U("RequestAnimationFrame")||k,P=window.cancelAnimationFrame||U("CancelAnimationFrame")||U("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function N(i,r,l){if(l&&A===k)i.call(r);else return A.call(window,c(i,r))}function Y(i){i&&P.call(window,i)}var et={__proto__:null,extend:s,create:a,bind:c,get lastId(){return h},stamp:u,throttle:d,wrapNum:p,falseFn:_,formatNum:m,trim:y,splitWords:M,setOptions:S,getParamString:x,template:R,isArray:C,indexOf:T,emptyImageUrl:O,requestFn:A,cancelFn:P,requestAnimFrame:N,cancelAnimFrame:Y};function J(){}J.extend=function(i){var r=function(){S(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=r.__super__=this.prototype,f=a(l);f.constructor=r,r.prototype=f;for(var v in this)Object.prototype.hasOwnProperty.call(this,v)&&v!=="prototype"&&v!=="__super__"&&(r[v]=this[v]);return i.statics&&s(r,i.statics),i.includes&&($(i.includes),s.apply(null,[f].concat(i.includes))),s(f,i),delete f.statics,delete f.includes,f.options&&(f.options=l.options?a(l.options):{},s(f.options,i.options)),f._initHooks=[],f.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var b=0,F=f._initHooks.length;b<F;b++)f._initHooks[b].call(this)}},r},J.include=function(i){var r=this.prototype.options;return s(this.prototype,i),i.options&&(this.prototype.options=r,this.mergeOptions(i.options)),this},J.mergeOptions=function(i){return s(this.prototype.options,i),this},J.addInitHook=function(i){var r=Array.prototype.slice.call(arguments,1),l=typeof i=="function"?i:function(){this[i].apply(this,r)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function $(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=C(i)?i:[i];for(var r=0;r<i.length;r++)i[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Z={on:function(i,r,l){if(typeof i=="object")for(var f in i)this._on(f,i[f],r);else{i=M(i);for(var v=0,b=i.length;v<b;v++)this._on(i[v],r,l)}return this},off:function(i,r,l){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var f in i)this._off(f,i[f],r);else{i=M(i);for(var v=arguments.length===1,b=0,F=i.length;b<F;b++)v?this._off(i[b]):this._off(i[b],r,l)}return this},_on:function(i,r,l,f){if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}if(this._listens(i,r,l)===!1){l===this&&(l=void 0);var v={fn:r,ctx:l};f&&(v.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(v)}},_off:function(i,r,l){var f,v,b;if(this._events&&(f=this._events[i],!!f)){if(arguments.length===1){if(this._firingCount)for(v=0,b=f.length;v<b;v++)f[v].fn=_;delete this._events[i];return}if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}var F=this._listens(i,r,l);if(F!==!1){var X=f[F];this._firingCount&&(X.fn=_,this._events[i]=f=f.slice()),f.splice(F,1)}}},fire:function(i,r,l){if(!this.listens(i,l))return this;var f=s({},r,{type:i,target:this,sourceTarget:r&&r.sourceTarget||this});if(this._events){var v=this._events[i];if(v){this._firingCount=this._firingCount+1||1;for(var b=0,F=v.length;b<F;b++){var X=v[b],tt=X.fn;X.once&&this.off(i,tt,X.ctx),tt.call(X.ctx||this,f)}this._firingCount--}}return l&&this._propagateEvent(f),this},listens:function(i,r,l,f){typeof i!="string"&&console.warn('"string" type argument expected');var v=r;typeof r!="function"&&(f=!!r,v=void 0,l=void 0);var b=this._events&&this._events[i];if(b&&b.length&&this._listens(i,v,l)!==!1)return!0;if(f){for(var F in this._eventParents)if(this._eventParents[F].listens(i,r,l,f))return!0}return!1},_listens:function(i,r,l){if(!this._events)return!1;var f=this._events[i]||[];if(!r)return!!f.length;l===this&&(l=void 0);for(var v=0,b=f.length;v<b;v++)if(f[v].fn===r&&f[v].ctx===l)return v;return!1},once:function(i,r,l){if(typeof i=="object")for(var f in i)this._on(f,i[f],r,!0);else{i=M(i);for(var v=0,b=i.length;v<b;v++)this._on(i[v],r,l,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[u(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[u(i)],this},_propagateEvent:function(i){for(var r in this._eventParents)this._eventParents[r].fire(i.type,s({layer:i.target,propagatedFrom:i.target},i),!0)}};Z.addEventListener=Z.on,Z.removeEventListener=Z.clearAllEventListeners=Z.off,Z.addOneTimeEventListener=Z.once,Z.fireEvent=Z.fire,Z.hasEventListeners=Z.listens;var ct=J.extend(Z);function V(i,r,l){this.x=l?Math.round(i):i,this.y=l?Math.round(r):r}var yt=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};V.prototype={clone:function(){return new V(this.x,this.y)},add:function(i){return this.clone()._add(st(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(st(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new V(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new V(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=yt(this.x),this.y=yt(this.y),this},distanceTo:function(i){i=st(i);var r=i.x-this.x,l=i.y-this.y;return Math.sqrt(r*r+l*l)},equals:function(i){return i=st(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=st(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+m(this.x)+", "+m(this.y)+")"}};function st(i,r,l){return i instanceof V?i:C(i)?new V(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new V(i.x,i.y):new V(i,r,l)}function gt(i,r){if(i)for(var l=r?[i,r]:i,f=0,v=l.length;f<v;f++)this.extend(l[f])}gt.prototype={extend:function(i){var r,l;if(!i)return this;if(i instanceof V||typeof i[0]=="number"||"x"in i)r=l=st(i);else if(i=Ft(i),r=i.min,l=i.max,!r||!l)return this;return!this.min&&!this.max?(this.min=r.clone(),this.max=l.clone()):(this.min.x=Math.min(r.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(r.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(i){return st((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return st(this.min.x,this.max.y)},getTopRight:function(){return st(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var r,l;return typeof i[0]=="number"||i instanceof V?i=st(i):i=Ft(i),i instanceof gt?(r=i.min,l=i.max):r=l=i,r.x>=this.min.x&&l.x<=this.max.x&&r.y>=this.min.y&&l.y<=this.max.y},intersects:function(i){i=Ft(i);var r=this.min,l=this.max,f=i.min,v=i.max,b=v.x>=r.x&&f.x<=l.x,F=v.y>=r.y&&f.y<=l.y;return b&&F},overlaps:function(i){i=Ft(i);var r=this.min,l=this.max,f=i.min,v=i.max,b=v.x>r.x&&f.x<l.x,F=v.y>r.y&&f.y<l.y;return b&&F},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var r=this.min,l=this.max,f=Math.abs(r.x-l.x)*i,v=Math.abs(r.y-l.y)*i;return Ft(st(r.x-f,r.y-v),st(l.x+f,l.y+v))},equals:function(i){return i?(i=Ft(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function Ft(i,r){return!i||i instanceof gt?i:new gt(i,r)}function re(i,r){if(i)for(var l=r?[i,r]:i,f=0,v=l.length;f<v;f++)this.extend(l[f])}re.prototype={extend:function(i){var r=this._southWest,l=this._northEast,f,v;if(i instanceof j)f=i,v=i;else if(i instanceof re){if(f=i._southWest,v=i._northEast,!f||!v)return this}else return i?this.extend(ot(i)||Yt(i)):this;return!r&&!l?(this._southWest=new j(f.lat,f.lng),this._northEast=new j(v.lat,v.lng)):(r.lat=Math.min(f.lat,r.lat),r.lng=Math.min(f.lng,r.lng),l.lat=Math.max(v.lat,l.lat),l.lng=Math.max(v.lng,l.lng)),this},pad:function(i){var r=this._southWest,l=this._northEast,f=Math.abs(r.lat-l.lat)*i,v=Math.abs(r.lng-l.lng)*i;return new re(new j(r.lat-f,r.lng-v),new j(l.lat+f,l.lng+v))},getCenter:function(){return new j((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new j(this.getNorth(),this.getWest())},getSouthEast:function(){return new j(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof j||"lat"in i?i=ot(i):i=Yt(i);var r=this._southWest,l=this._northEast,f,v;return i instanceof re?(f=i.getSouthWest(),v=i.getNorthEast()):f=v=i,f.lat>=r.lat&&v.lat<=l.lat&&f.lng>=r.lng&&v.lng<=l.lng},intersects:function(i){i=Yt(i);var r=this._southWest,l=this._northEast,f=i.getSouthWest(),v=i.getNorthEast(),b=v.lat>=r.lat&&f.lat<=l.lat,F=v.lng>=r.lng&&f.lng<=l.lng;return b&&F},overlaps:function(i){i=Yt(i);var r=this._southWest,l=this._northEast,f=i.getSouthWest(),v=i.getNorthEast(),b=v.lat>r.lat&&f.lat<l.lat,F=v.lng>r.lng&&f.lng<l.lng;return b&&F},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,r){return i?(i=Yt(i),this._southWest.equals(i.getSouthWest(),r)&&this._northEast.equals(i.getNorthEast(),r)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Yt(i,r){return i instanceof re?i:new re(i,r)}function j(i,r,l){if(isNaN(i)||isNaN(r))throw new Error("Invalid LatLng object: ("+i+", "+r+")");this.lat=+i,this.lng=+r,l!==void 0&&(this.alt=+l)}j.prototype={equals:function(i,r){if(!i)return!1;i=ot(i);var l=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return l<=(r===void 0?1e-9:r)},toString:function(i){return"LatLng("+m(this.lat,i)+", "+m(this.lng,i)+")"},distanceTo:function(i){return It.distance(this,ot(i))},wrap:function(){return It.wrapLatLng(this)},toBounds:function(i){var r=180*i/40075017,l=r/Math.cos(Math.PI/180*this.lat);return Yt([this.lat-r,this.lng-l],[this.lat+r,this.lng+l])},clone:function(){return new j(this.lat,this.lng,this.alt)}};function ot(i,r,l){return i instanceof j?i:C(i)&&typeof i[0]!="object"?i.length===3?new j(i[0],i[1],i[2]):i.length===2?new j(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new j(i.lat,"lng"in i?i.lng:i.lon,i.alt):r===void 0?null:new j(i,r,l)}var dt={latLngToPoint:function(i,r){var l=this.projection.project(i),f=this.scale(r);return this.transformation._transform(l,f)},pointToLatLng:function(i,r){var l=this.scale(r),f=this.transformation.untransform(i,l);return this.projection.unproject(f)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var r=this.projection.bounds,l=this.scale(i),f=this.transformation.transform(r.min,l),v=this.transformation.transform(r.max,l);return new gt(f,v)},infinite:!1,wrapLatLng:function(i){var r=this.wrapLng?p(i.lng,this.wrapLng,!0):i.lng,l=this.wrapLat?p(i.lat,this.wrapLat,!0):i.lat,f=i.alt;return new j(l,r,f)},wrapLatLngBounds:function(i){var r=i.getCenter(),l=this.wrapLatLng(r),f=r.lat-l.lat,v=r.lng-l.lng;if(f===0&&v===0)return i;var b=i.getSouthWest(),F=i.getNorthEast(),X=new j(b.lat-f,b.lng-v),tt=new j(F.lat-f,F.lng-v);return new re(X,tt)}},It=s({},dt,{wrapLng:[-180,180],R:6371e3,distance:function(i,r){var l=Math.PI/180,f=i.lat*l,v=r.lat*l,b=Math.sin((r.lat-i.lat)*l/2),F=Math.sin((r.lng-i.lng)*l/2),X=b*b+Math.cos(f)*Math.cos(v)*F*F,tt=2*Math.atan2(Math.sqrt(X),Math.sqrt(1-X));return this.R*tt}}),Wt=6378137,jt={R:Wt,MAX_LATITUDE:85.0511287798,project:function(i){var r=Math.PI/180,l=this.MAX_LATITUDE,f=Math.max(Math.min(l,i.lat),-l),v=Math.sin(f*r);return new V(this.R*i.lng*r,this.R*Math.log((1+v)/(1-v))/2)},unproject:function(i){var r=180/Math.PI;return new j((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*r,i.x*r/this.R)},bounds:(function(){var i=Wt*Math.PI;return new gt([-i,-i],[i,i])})()};function Ie(i,r,l,f){if(C(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=r,this._c=l,this._d=f}Ie.prototype={transform:function(i,r){return this._transform(i.clone(),r)},_transform:function(i,r){return r=r||1,i.x=r*(this._a*i.x+this._b),i.y=r*(this._c*i.y+this._d),i},untransform:function(i,r){return r=r||1,new V((i.x/r-this._b)/this._a,(i.y/r-this._d)/this._c)}};function oe(i,r,l,f){return new Ie(i,r,l,f)}var z=s({},It,{code:"EPSG:3857",projection:jt,transformation:(function(){var i=.5/(Math.PI*jt.R);return oe(i,.5,-i,.5)})()}),we=s({},z,{code:"EPSG:900913"});function kt(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function fe(i,r){var l="",f,v,b,F,X,tt;for(f=0,b=i.length;f<b;f++){for(X=i[f],v=0,F=X.length;v<F;v++)tt=X[v],l+=(v?"L":"M")+tt.x+" "+tt.y;l+=r?Dt.svg?"z":"x":""}return l||"M0 0"}var Nt=document.documentElement.style,xe="ActiveXObject"in window,wt=xe&&!document.addEventListener,Qt="msLaunchUri"in navigator&&!("documentMode"in document),Oe=ui("webkit"),Ne=ui("android"),I=ui("android 2")||ui("android 3"),E=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),q=Ne&&ui("Google")&&E<537&&!("AudioNode"in window),nt=!!window.opera,lt=!Qt&&ui("chrome"),it=ui("gecko")&&!Oe&&!nt&&!xe,Ut=!lt&&ui("safari"),mt=ui("phantom"),Ct="OTransition"in Nt,Rt=navigator.platform.indexOf("Win")===0,ft=xe&&"transition"in Nt,Mt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!I,$t="MozPerspective"in Nt,Lt=!window.L_DISABLE_3D&&(ft||Mt||$t)&&!Ct&&!mt,vt=typeof orientation<"u"||ui("mobile"),Jt=vt&&Oe,H=vt&&Mt,pt=!window.PointerEvent&&window.MSPointerEvent,_t=!!(window.PointerEvent||pt),Tt="ontouchstart"in window||!!window.TouchEvent,ht=!window.L_NO_TOUCH&&(Tt||_t),rt=vt&&nt,Pt=vt&&it,Kt=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Ae=(function(){var i=!1;try{var r=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",_,r),window.removeEventListener("testPassiveEventSupport",_,r)}catch{}return i})(),ge=(function(){return!!document.createElement("canvas").getContext})(),hi=!!(document.createElementNS&&kt("svg").createSVGRect),pi=!!hi&&(function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Br=!hi&&(function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var r=i.firstChild;return r.style.behavior="url(#default#VML)",r&&typeof r.adj=="object"}catch{return!1}})(),Xi=navigator.platform.indexOf("Mac")===0,Us=navigator.platform.indexOf("Linux")===0;function ui(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var Dt={ie:xe,ielt9:wt,edge:Qt,webkit:Oe,android:Ne,android23:I,androidStock:q,opera:nt,chrome:lt,gecko:it,safari:Ut,phantom:mt,opera12:Ct,win:Rt,ie3d:ft,webkit3d:Mt,gecko3d:$t,any3d:Lt,mobile:vt,mobileWebkit:Jt,mobileWebkit3d:H,msPointer:pt,pointer:_t,touch:ht,touchNative:Tt,mobileOpera:rt,mobileGecko:Pt,retina:Kt,passiveEvents:Ae,canvas:ge,svg:hi,vml:Br,inlineSvg:pi,mac:Xi,linux:Us},Ln=Dt.msPointer?"MSPointerDown":"pointerdown",Os=Dt.msPointer?"MSPointerMove":"pointermove",Dn=Dt.msPointer?"MSPointerUp":"pointerup",Fs=Dt.msPointer?"MSPointerCancel":"pointercancel",us={touchstart:Ln,touchmove:Os,touchend:Dn,touchcancel:Fs},zr={touchstart:W,touchmove:K,touchend:K,touchcancel:K},dn={},kr=!1;function Ja(i,r,l){return r==="touchstart"&&Q(),zr[r]?(l=zr[r].bind(this,l),i.addEventListener(us[r],l,!1),l):(console.warn("wrong event specified:",r),_)}function Qa(i,r,l){if(!us[r]){console.warn("wrong event specified:",r);return}i.removeEventListener(us[r],l,!1)}function tl(i){dn[i.pointerId]=i}function w(i){dn[i.pointerId]&&(dn[i.pointerId]=i)}function G(i){delete dn[i.pointerId]}function Q(){kr||(document.addEventListener(Ln,tl,!0),document.addEventListener(Os,w,!0),document.addEventListener(Dn,G,!0),document.addEventListener(Fs,G,!0),kr=!0)}function K(i,r){if(r.pointerType!==(r.MSPOINTER_TYPE_MOUSE||"mouse")){r.touches=[];for(var l in dn)r.touches.push(dn[l]);r.changedTouches=[r],i(r)}}function W(i,r){r.MSPOINTER_TYPE_TOUCH&&r.pointerType===r.MSPOINTER_TYPE_TOUCH&&Xe(r),K(i,r)}function ut(i){var r={},l,f;for(f in i)l=i[f],r[f]=l&&l.bind?l.bind(i):l;return i=r,r.type="dblclick",r.detail=2,r.isTrusted=!1,r._simulated=!0,r}var St=200;function At(i,r){i.addEventListener("dblclick",r);var l=0,f;function v(b){if(b.detail!==1){f=b.detail;return}if(!(b.pointerType==="mouse"||b.sourceCapabilities&&!b.sourceCapabilities.firesTouchEvents)){var F=_h(b);if(!(F.some(function(tt){return tt instanceof HTMLLabelElement&&tt.attributes.for})&&!F.some(function(tt){return tt instanceof HTMLInputElement||tt instanceof HTMLSelectElement}))){var X=Date.now();X-l<=St?(f++,f===2&&r(ut(b))):f=1,l=X}}}return i.addEventListener("click",v),{dblclick:r,simDblclick:v}}function Et(i,r){i.removeEventListener("dblclick",r.dblclick),i.removeEventListener("click",r.simDblclick)}var Gt=$e(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Vt=$e(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Bt=Vt==="webkitTransition"||Vt==="OTransition"?Vt+"End":"transitionend";function ae(i){return typeof i=="string"?document.getElementById(i):i}function pe(i,r){var l=i.style[r]||i.currentStyle&&i.currentStyle[r];if((!l||l==="auto")&&document.defaultView){var f=document.defaultView.getComputedStyle(i,null);l=f?f[r]:null}return l==="auto"?null:l}function zt(i,r,l){var f=document.createElement(i);return f.className=r||"",l&&l.appendChild(f),f}function Zt(i){var r=i.parentNode;r&&r.removeChild(i)}function ve(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function Ot(i){var r=i.parentNode;r&&r.lastChild!==i&&r.appendChild(i)}function ye(i){var r=i.parentNode;r&&r.firstChild!==i&&r.insertBefore(i,r.firstChild)}function he(i,r){if(i.classList!==void 0)return i.classList.contains(r);var l=Ii(i);return l.length>0&&new RegExp("(^|\\s)"+r+"(\\s|$)").test(l)}function Ht(i,r){if(i.classList!==void 0)for(var l=M(r),f=0,v=l.length;f<v;f++)i.classList.add(l[f]);else if(!he(i,r)){var b=Ii(i);We(i,(b?b+" ":"")+r)}}function Pe(i,r){i.classList!==void 0?i.classList.remove(r):We(i,y((" "+Ii(i)+" ").replace(" "+r+" "," ")))}function We(i,r){i.className.baseVal===void 0?i.className=r:i.className.baseVal=r}function Ii(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function ue(i,r){"opacity"in i.style?i.style.opacity=r:"filter"in i.style&&ni(i,r)}function ni(i,r){var l=!1,f="DXImageTransform.Microsoft.Alpha";try{l=i.filters.item(f)}catch{if(r===1)return}r=Math.round(r*100),l?(l.Enabled=r!==100,l.Opacity=r):i.style.filter+=" progid:"+f+"(opacity="+r+")"}function $e(i){for(var r=document.documentElement.style,l=0;l<i.length;l++)if(i[l]in r)return i[l];return!1}function Ue(i,r,l){var f=r||new V(0,0);i.style[Gt]=(Dt.ie3d?"translate("+f.x+"px,"+f.y+"px)":"translate3d("+f.x+"px,"+f.y+"px,0)")+(l?" scale("+l+")":"")}function de(i,r){i._leaflet_pos=r,Dt.any3d?Ue(i,r):(i.style.left=r.x+"px",i.style.top=r.y+"px")}function bi(i){return i._leaflet_pos||new V(0,0)}var di,Bs,el;if("onselectstart"in document)di=function(){te(window,"selectstart",Xe)},Bs=function(){Le(window,"selectstart",Xe)};else{var zs=$e(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);di=function(){if(zs){var i=document.documentElement.style;el=i[zs],i[zs]="none"}},Bs=function(){zs&&(document.documentElement.style[zs]=el,el=void 0)}}function il(){te(window,"dragstart",Xe)}function nl(){Le(window,"dragstart",Xe)}var Hr,sl;function rl(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(Gr(),Hr=i,sl=i.style.outlineStyle,i.style.outlineStyle="none",te(window,"keydown",Gr))}function Gr(){Hr&&(Hr.style.outlineStyle=sl,Hr=void 0,sl=void 0,Le(window,"keydown",Gr))}function ph(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function ol(i){var r=i.getBoundingClientRect();return{x:r.width/i.offsetWidth||1,y:r.height/i.offsetHeight||1,boundingClientRect:r}}var bg={__proto__:null,TRANSFORM:Gt,TRANSITION:Vt,TRANSITION_END:Bt,get:ae,getStyle:pe,create:zt,remove:Zt,empty:ve,toFront:Ot,toBack:ye,hasClass:he,addClass:Ht,removeClass:Pe,setClass:We,getClass:Ii,setOpacity:ue,testProp:$e,setTransform:Ue,setPosition:de,getPosition:bi,get disableTextSelection(){return di},get enableTextSelection(){return Bs},disableImageDrag:il,enableImageDrag:nl,preventOutline:rl,restoreOutline:Gr,getSizedParentNode:ph,getScale:ol};function te(i,r,l,f){if(r&&typeof r=="object")for(var v in r)ll(i,v,r[v],l);else{r=M(r);for(var b=0,F=r.length;b<F;b++)ll(i,r[b],l,f)}return this}var Ni="_leaflet_events";function Le(i,r,l,f){if(arguments.length===1)mh(i),delete i[Ni];else if(r&&typeof r=="object")for(var v in r)cl(i,v,r[v],l);else if(r=M(r),arguments.length===2)mh(i,function(X){return T(r,X)!==-1});else for(var b=0,F=r.length;b<F;b++)cl(i,r[b],l,f);return this}function mh(i,r){for(var l in i[Ni]){var f=l.split(/\d/)[0];(!r||r(f))&&cl(i,f,null,null,l)}}var al={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ll(i,r,l,f){var v=r+u(l)+(f?"_"+u(f):"");if(i[Ni]&&i[Ni][v])return this;var b=function(X){return l.call(f||i,X||window.event)},F=b;!Dt.touchNative&&Dt.pointer&&r.indexOf("touch")===0?b=Ja(i,r,b):Dt.touch&&r==="dblclick"?b=At(i,b):"addEventListener"in i?r==="touchstart"||r==="touchmove"||r==="wheel"||r==="mousewheel"?i.addEventListener(al[r]||r,b,Dt.passiveEvents?{passive:!1}:!1):r==="mouseenter"||r==="mouseleave"?(b=function(X){X=X||window.event,ul(i,X)&&F(X)},i.addEventListener(al[r],b,!1)):i.addEventListener(r,F,!1):i.attachEvent("on"+r,b),i[Ni]=i[Ni]||{},i[Ni][v]=b}function cl(i,r,l,f,v){v=v||r+u(l)+(f?"_"+u(f):"");var b=i[Ni]&&i[Ni][v];if(!b)return this;!Dt.touchNative&&Dt.pointer&&r.indexOf("touch")===0?Qa(i,r,b):Dt.touch&&r==="dblclick"?Et(i,b):"removeEventListener"in i?i.removeEventListener(al[r]||r,b,!1):i.detachEvent("on"+r,b),i[Ni][v]=null}function In(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function hl(i){return ll(i,"wheel",In),this}function ks(i){return te(i,"mousedown touchstart dblclick contextmenu",In),i._leaflet_disable_click=!0,this}function Xe(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function Nn(i){return Xe(i),In(i),this}function _h(i){if(i.composedPath)return i.composedPath();for(var r=[],l=i.target;l;)r.push(l),l=l.parentNode;return r}function gh(i,r){if(!r)return new V(i.clientX,i.clientY);var l=ol(r),f=l.boundingClientRect;return new V((i.clientX-f.left)/l.x-r.clientLeft,(i.clientY-f.top)/l.y-r.clientTop)}var Eg=Dt.linux&&Dt.chrome?window.devicePixelRatio:Dt.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function vh(i){return Dt.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/Eg:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function ul(i,r){var l=r.relatedTarget;if(!l)return!0;try{for(;l&&l!==i;)l=l.parentNode}catch{return!1}return l!==i}var Tg={__proto__:null,on:te,off:Le,stopPropagation:In,disableScrollPropagation:hl,disableClickPropagation:ks,preventDefault:Xe,stop:Nn,getPropagationPath:_h,getMousePosition:gh,getWheelDelta:vh,isExternalTarget:ul,addListener:te,removeListener:Le},yh=ct.extend({run:function(i,r,l,f){this.stop(),this._el=i,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(f||.5,.2),this._startPos=bi(i),this._offset=r.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=N(this._animate,this),this._step()},_step:function(i){var r=+new Date-this._startTime,l=this._duration*1e3;r<l?this._runFrame(this._easeOut(r/l),i):(this._runFrame(1),this._complete())},_runFrame:function(i,r){var l=this._startPos.add(this._offset.multiplyBy(i));r&&l._round(),de(this._el,l),this.fire("step")},_complete:function(){Y(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),me=ct.extend({options:{crs:z,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,r){r=S(this,r),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=c(this._onResize,this),this._initEvents(),r.maxBounds&&this.setMaxBounds(r.maxBounds),r.zoom!==void 0&&(this._zoom=this._limitZoom(r.zoom)),r.center&&r.zoom!==void 0&&this.setView(ot(r.center),r.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Vt&&Dt.any3d&&!Dt.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),te(this._proxy,Bt,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,r,l){if(r=r===void 0?this._zoom:this._limitZoom(r),i=this._limitCenter(ot(i),r,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=s({animate:l.animate},l.zoom),l.pan=s({animate:l.animate,duration:l.duration},l.pan));var f=this._zoom!==r?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,r,l.zoom):this._tryAnimatedPan(i,l.pan);if(f)return clearTimeout(this._sizeTimer),this}return this._resetView(i,r,l.pan&&l.pan.noMoveStart),this},setZoom:function(i,r){return this._loaded?this.setView(this.getCenter(),i,{zoom:r}):(this._zoom=i,this)},zoomIn:function(i,r){return i=i||(Dt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,r)},zoomOut:function(i,r){return i=i||(Dt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,r)},setZoomAround:function(i,r,l){var f=this.getZoomScale(r),v=this.getSize().divideBy(2),b=i instanceof V?i:this.latLngToContainerPoint(i),F=b.subtract(v).multiplyBy(1-1/f),X=this.containerPointToLatLng(v.add(F));return this.setView(X,r,{zoom:l})},_getBoundsCenterZoom:function(i,r){r=r||{},i=i.getBounds?i.getBounds():Yt(i);var l=st(r.paddingTopLeft||r.padding||[0,0]),f=st(r.paddingBottomRight||r.padding||[0,0]),v=this.getBoundsZoom(i,!1,l.add(f));if(v=typeof r.maxZoom=="number"?Math.min(r.maxZoom,v):v,v===1/0)return{center:i.getCenter(),zoom:v};var b=f.subtract(l).divideBy(2),F=this.project(i.getSouthWest(),v),X=this.project(i.getNorthEast(),v),tt=this.unproject(F.add(X).divideBy(2).add(b),v);return{center:tt,zoom:v}},fitBounds:function(i,r){if(i=Yt(i),!i.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(i,r);return this.setView(l.center,l.zoom,r)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,r){return this.setView(i,this._zoom,{pan:r})},panBy:function(i,r){if(i=st(i).round(),r=r||{},!i.x&&!i.y)return this.fire("moveend");if(r.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new yh,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),r.noMoveStart||this.fire("movestart"),r.animate!==!1){Ht(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,l,r.duration||.25,r.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,r,l){if(l=l||{},l.animate===!1||!Dt.any3d)return this.setView(i,r,l);this._stop();var f=this.project(this.getCenter()),v=this.project(i),b=this.getSize(),F=this._zoom;i=ot(i),r=r===void 0?F:r;var X=Math.max(b.x,b.y),tt=X*this.getZoomScale(F,r),at=v.distanceTo(f)||1,bt=1.42,qt=bt*bt;function le(Be){var to=Be?-1:1,fv=Be?tt:X,pv=tt*tt-X*X+to*qt*qt*at*at,mv=2*fv*qt*at,Sl=pv/mv,Qh=Math.sqrt(Sl*Sl+1)-Sl,_v=Qh<1e-9?-18:Math.log(Qh);return _v}function Je(Be){return(Math.exp(Be)-Math.exp(-Be))/2}function Ve(Be){return(Math.exp(Be)+Math.exp(-Be))/2}function _i(Be){return Je(Be)/Ve(Be)}var si=le(0);function gs(Be){return X*(Ve(si)/Ve(si+bt*Be))}function cv(Be){return X*(Ve(si)*_i(si+bt*Be)-Je(si))/qt}function hv(Be){return 1-Math.pow(1-Be,1.5)}var uv=Date.now(),Kh=(le(1)-si)/bt,dv=l.duration?1e3*l.duration:1e3*Kh*.8;function Jh(){var Be=(Date.now()-uv)/dv,to=hv(Be)*Kh;Be<=1?(this._flyToFrame=N(Jh,this),this._move(this.unproject(f.add(v.subtract(f).multiplyBy(cv(to)/at)),F),this.getScaleZoom(X/gs(to),F),{flyTo:!0})):this._move(i,r)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),Jh.call(this),this},flyToBounds:function(i,r){var l=this._getBoundsCenterZoom(i,r);return this.flyTo(l.center,l.zoom,r)},setMaxBounds:function(i){return i=Yt(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var r=this.options.minZoom;return this.options.minZoom=i,this._loaded&&r!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var r=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&r!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,r){this._enforcingBounds=!0;var l=this.getCenter(),f=this._limitCenter(l,this._zoom,Yt(i));return l.equals(f)||this.panTo(f,r),this._enforcingBounds=!1,this},panInside:function(i,r){r=r||{};var l=st(r.paddingTopLeft||r.padding||[0,0]),f=st(r.paddingBottomRight||r.padding||[0,0]),v=this.project(this.getCenter()),b=this.project(i),F=this.getPixelBounds(),X=Ft([F.min.add(l),F.max.subtract(f)]),tt=X.getSize();if(!X.contains(b)){this._enforcingBounds=!0;var at=b.subtract(X.getCenter()),bt=X.extend(b).getSize().subtract(tt);v.x+=at.x<0?-bt.x:bt.x,v.y+=at.y<0?-bt.y:bt.y,this.panTo(this.unproject(v),r),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=s({animate:!1,pan:!0},i===!0?{animate:!0}:i);var r=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),f=r.divideBy(2).round(),v=l.divideBy(2).round(),b=f.subtract(v);return!b.x&&!b.y?this:(i.animate&&i.pan?this.panBy(b):(i.pan&&this._rawPanBy(b),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(c(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:r,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=s({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var r=c(this._handleGeolocationResponse,this),l=c(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(r,l,i):navigator.geolocation.getCurrentPosition(r,l,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var r=i.code,l=i.message||(r===1?"permission denied":r===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:r,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var r=i.coords.latitude,l=i.coords.longitude,f=new j(r,l),v=f.toBounds(i.coords.accuracy*2),b=this._locateOptions;if(b.setView){var F=this.getBoundsZoom(v);this.setView(f,b.maxZoom?Math.min(F,b.maxZoom):F)}var X={latlng:f,bounds:v,timestamp:i.timestamp};for(var tt in i.coords)typeof i.coords[tt]=="number"&&(X[tt]=i.coords[tt]);this.fire("locationfound",X)}},addHandler:function(i,r){if(!r)return this;var l=this[i]=new r(this);return this._handlers.push(l),this.options[i]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Zt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(Y(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)Zt(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,r){var l="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),f=zt("div",l,r||this._mapPane);return i&&(this._panes[i]=f),f},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),r=this.unproject(i.getBottomLeft()),l=this.unproject(i.getTopRight());return new re(r,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,r,l){i=Yt(i),l=st(l||[0,0]);var f=this.getZoom()||0,v=this.getMinZoom(),b=this.getMaxZoom(),F=i.getNorthWest(),X=i.getSouthEast(),tt=this.getSize().subtract(l),at=Ft(this.project(X,f),this.project(F,f)).getSize(),bt=Dt.any3d?this.options.zoomSnap:1,qt=tt.x/at.x,le=tt.y/at.y,Je=r?Math.max(qt,le):Math.min(qt,le);return f=this.getScaleZoom(Je,f),bt&&(f=Math.round(f/(bt/100))*(bt/100),f=r?Math.ceil(f/bt)*bt:Math.floor(f/bt)*bt),Math.max(v,Math.min(b,f))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new V(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,r){var l=this._getTopLeftPoint(i,r);return new gt(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,r){var l=this.options.crs;return r=r===void 0?this._zoom:r,l.scale(i)/l.scale(r)},getScaleZoom:function(i,r){var l=this.options.crs;r=r===void 0?this._zoom:r;var f=l.zoom(i*l.scale(r));return isNaN(f)?1/0:f},project:function(i,r){return r=r===void 0?this._zoom:r,this.options.crs.latLngToPoint(ot(i),r)},unproject:function(i,r){return r=r===void 0?this._zoom:r,this.options.crs.pointToLatLng(st(i),r)},layerPointToLatLng:function(i){var r=st(i).add(this.getPixelOrigin());return this.unproject(r)},latLngToLayerPoint:function(i){var r=this.project(ot(i))._round();return r._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(ot(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(Yt(i))},distance:function(i,r){return this.options.crs.distance(ot(i),ot(r))},containerPointToLayerPoint:function(i){return st(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return st(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var r=this.containerPointToLayerPoint(st(i));return this.layerPointToLatLng(r)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ot(i)))},mouseEventToContainerPoint:function(i){return gh(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var r=this._container=ae(i);if(r){if(r._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");te(r,"scroll",this._onScroll,this),this._containerId=u(r)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&Dt.any3d,Ht(i,"leaflet-container"+(Dt.touch?" leaflet-touch":"")+(Dt.retina?" leaflet-retina":"")+(Dt.ielt9?" leaflet-oldie":"")+(Dt.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var r=pe(i,"position");r!=="absolute"&&r!=="relative"&&r!=="fixed"&&r!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),de(this._mapPane,new V(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Ht(i.markerPane,"leaflet-zoom-hide"),Ht(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,r,l){de(this._mapPane,new V(0,0));var f=!this._loaded;this._loaded=!0,r=this._limitZoom(r),this.fire("viewprereset");var v=this._zoom!==r;this._moveStart(v,l)._move(i,r)._moveEnd(v),this.fire("viewreset"),f&&this.fire("load")},_moveStart:function(i,r){return i&&this.fire("zoomstart"),r||this.fire("movestart"),this},_move:function(i,r,l,f){r===void 0&&(r=this._zoom);var v=this._zoom!==r;return this._zoom=r,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),f?l&&l.pinch&&this.fire("zoom",l):((v||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return Y(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){de(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[u(this._container)]=this;var r=i?Le:te;r(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&r(window,"resize",this._onResize,this),Dt.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){Y(this._resizeRequest),this._resizeRequest=N(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,r){for(var l=[],f,v=r==="mouseout"||r==="mouseover",b=i.target||i.srcElement,F=!1;b;){if(f=this._targets[u(b)],f&&(r==="click"||r==="preclick")&&this._draggableMoved(f)){F=!0;break}if(f&&f.listens(r,!0)&&(v&&!ul(b,i)||(l.push(f),v))||b===this._container)break;b=b.parentNode}return!l.length&&!F&&!v&&this.listens(r,!0)&&(l=[this]),l},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var r=i.target||i.srcElement;if(!(!this._loaded||r._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(r))){var l=i.type;l==="mousedown"&&rl(r),this._fireDOMEvent(i,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,r,l){if(i.type==="click"){var f=s({},i);f.type="preclick",this._fireDOMEvent(f,f.type,l)}var v=this._findEventTargets(i,r);if(l){for(var b=[],F=0;F<l.length;F++)l[F].listens(r,!0)&&b.push(l[F]);v=b.concat(v)}if(v.length){r==="contextmenu"&&Xe(i);var X=v[0],tt={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var at=X.getLatLng&&(!X._radius||X._radius<=10);tt.containerPoint=at?this.latLngToContainerPoint(X.getLatLng()):this.mouseEventToContainerPoint(i),tt.layerPoint=this.containerPointToLayerPoint(tt.containerPoint),tt.latlng=at?X.getLatLng():this.layerPointToLatLng(tt.layerPoint)}for(F=0;F<v.length;F++)if(v[F].fire(r,tt,!0),tt.originalEvent._stopped||v[F].options.bubblingMouseEvents===!1&&T(this._mouseEvents,r)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,r=this._handlers.length;i<r;i++)this._handlers[i].disable()},whenReady:function(i,r){return this._loaded?i.call(r||this,{target:this}):this.on("load",i,r),this},_getMapPanePos:function(){return bi(this._mapPane)||new V(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,r){var l=i&&r!==void 0?this._getNewPixelOrigin(i,r):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,r){var l=this.getSize()._divideBy(2);return this.project(i,r)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,r,l){var f=this._getNewPixelOrigin(l,r);return this.project(i,r)._subtract(f)},_latLngBoundsToNewLayerBounds:function(i,r,l){var f=this._getNewPixelOrigin(l,r);return Ft([this.project(i.getSouthWest(),r)._subtract(f),this.project(i.getNorthWest(),r)._subtract(f),this.project(i.getSouthEast(),r)._subtract(f),this.project(i.getNorthEast(),r)._subtract(f)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,r,l){if(!l)return i;var f=this.project(i,r),v=this.getSize().divideBy(2),b=new gt(f.subtract(v),f.add(v)),F=this._getBoundsOffset(b,l,r);return Math.abs(F.x)<=1&&Math.abs(F.y)<=1?i:this.unproject(f.add(F),r)},_limitOffset:function(i,r){if(!r)return i;var l=this.getPixelBounds(),f=new gt(l.min.add(i),l.max.add(i));return i.add(this._getBoundsOffset(f,r))},_getBoundsOffset:function(i,r,l){var f=Ft(this.project(r.getNorthEast(),l),this.project(r.getSouthWest(),l)),v=f.min.subtract(i.min),b=f.max.subtract(i.max),F=this._rebound(v.x,-b.x),X=this._rebound(v.y,-b.y);return new V(F,X)},_rebound:function(i,r){return i+r>0?Math.round(i-r)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(r))},_limitZoom:function(i){var r=this.getMinZoom(),l=this.getMaxZoom(),f=Dt.any3d?this.options.zoomSnap:1;return f&&(i=Math.round(i/f)*f),Math.max(r,Math.min(l,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Pe(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,r){var l=this._getCenterOffset(i)._trunc();return(r&&r.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,r),!0)},_createAnimProxy:function(){var i=this._proxy=zt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(r){var l=Gt,f=this._proxy.style[l];Ue(this._proxy,this.project(r.center,r.zoom),this.getZoomScale(r.zoom,1)),f===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Zt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),r=this.getZoom();Ue(this._proxy,this.project(i,r),this.getZoomScale(r,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,r,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(r-this._zoom)>this.options.zoomAnimationThreshold)return!1;var f=this.getZoomScale(r),v=this._getCenterOffset(i)._divideBy(1-1/f);return l.animate!==!0&&!this.getSize().contains(v)?!1:(N(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(i,r,!0)},this),!0)},_animateZoom:function(i,r,l,f){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=r,Ht(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:r,noUpdate:f}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(c(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Pe(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function wg(i,r){return new me(i,r)}var Ei=J.extend({options:{position:"topright"},initialize:function(i){S(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var r=this._map;return r&&r.removeControl(this),this.options.position=i,r&&r.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var r=this._container=this.onAdd(i),l=this.getPosition(),f=i._controlCorners[l];return Ht(r,"leaflet-control"),l.indexOf("bottom")!==-1?f.insertBefore(r,f.firstChild):f.appendChild(r),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Zt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),Hs=function(i){return new Ei(i)};me.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},r="leaflet-",l=this._controlContainer=zt("div",r+"control-container",this._container);function f(v,b){var F=r+v+" "+r+b;i[v+b]=zt("div",F,l)}f("top","left"),f("top","right"),f("bottom","left"),f("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)Zt(this._controlCorners[i]);Zt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var xh=Ei.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,r,l,f){return l<f?-1:f<l?1:0}},initialize:function(i,r,l){S(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var f in i)this._addLayer(i[f],f);for(f in r)this._addLayer(r[f],f,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return Ei.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,r){return this._addLayer(i,r),this._map?this._update():this},addOverlay:function(i,r){return this._addLayer(i,r,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var r=this._getLayer(u(i));return r&&this._layers.splice(this._layers.indexOf(r),1),this._map?this._update():this},expand:function(){Ht(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(Ht(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):Pe(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Pe(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",r=this._container=zt("div",i),l=this.options.collapsed;r.setAttribute("aria-haspopup",!0),ks(r),hl(r);var f=this._section=zt("section",i+"-list");l&&(this._map.on("click",this.collapse,this),te(r,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var v=this._layersLink=zt("a",i+"-toggle",r);v.href="#",v.title="Layers",v.setAttribute("role","button"),te(v,{keydown:function(b){b.keyCode===13&&this._expandSafely()},click:function(b){Xe(b),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=zt("div",i+"-base",f),this._separator=zt("div",i+"-separator",f),this._overlaysList=zt("div",i+"-overlays",f),r.appendChild(f)},_getLayer:function(i){for(var r=0;r<this._layers.length;r++)if(this._layers[r]&&u(this._layers[r].layer)===i)return this._layers[r]},_addLayer:function(i,r,l){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:r,overlay:l}),this.options.sortLayers&&this._layers.sort(c(function(f,v){return this.options.sortFunction(f.layer,v.layer,f.name,v.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ve(this._baseLayersList),ve(this._overlaysList),this._layerControlInputs=[];var i,r,l,f,v=0;for(l=0;l<this._layers.length;l++)f=this._layers[l],this._addItem(f),r=r||f.overlay,i=i||!f.overlay,v+=f.overlay?0:1;return this.options.hideSingleBase&&(i=i&&v>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=r&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var r=this._getLayer(u(i.target)),l=r.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;l&&this._map.fire(l,r)},_createRadioElement:function(i,r){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(r?' checked="checked"':"")+"/>",f=document.createElement("div");return f.innerHTML=l,f.firstChild},_addItem:function(i){var r=document.createElement("label"),l=this._map.hasLayer(i.layer),f;i.overlay?(f=document.createElement("input"),f.type="checkbox",f.className="leaflet-control-layers-selector",f.defaultChecked=l):f=this._createRadioElement("leaflet-base-layers_"+u(this),l),this._layerControlInputs.push(f),f.layerId=u(i.layer),te(f,"click",this._onInputClick,this);var v=document.createElement("span");v.innerHTML=" "+i.name;var b=document.createElement("span");r.appendChild(b),b.appendChild(f),b.appendChild(v);var F=i.overlay?this._overlaysList:this._baseLayersList;return F.appendChild(r),this._checkDisabledLayers(),r},_onInputClick:function(){if(!this._preventClick){var i=this._layerControlInputs,r,l,f=[],v=[];this._handlingClick=!0;for(var b=i.length-1;b>=0;b--)r=i[b],l=this._getLayer(r.layerId).layer,r.checked?f.push(l):r.checked||v.push(l);for(b=0;b<v.length;b++)this._map.hasLayer(v[b])&&this._map.removeLayer(v[b]);for(b=0;b<f.length;b++)this._map.hasLayer(f[b])||this._map.addLayer(f[b]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,r,l,f=this._map.getZoom(),v=i.length-1;v>=0;v--)r=i[v],l=this._getLayer(r.layerId).layer,r.disabled=l.options.minZoom!==void 0&&f<l.options.minZoom||l.options.maxZoom!==void 0&&f>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;this._preventClick=!0,te(i,"click",Xe),this.expand();var r=this;setTimeout(function(){Le(i,"click",Xe),r._preventClick=!1})}}),Ag=function(i,r,l){return new xh(i,r,l)},dl=Ei.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var r="leaflet-control-zoom",l=zt("div",r+" leaflet-bar"),f=this.options;return this._zoomInButton=this._createButton(f.zoomInText,f.zoomInTitle,r+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(f.zoomOutText,f.zoomOutTitle,r+"-out",l,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,r,l,f,v){var b=zt("a",l,f);return b.innerHTML=i,b.href="#",b.title=r,b.setAttribute("role","button"),b.setAttribute("aria-label",r),ks(b),te(b,"click",Nn),te(b,"click",v,this),te(b,"click",this._refocusOnMap,this),b},_updateDisabled:function(){var i=this._map,r="leaflet-disabled";Pe(this._zoomInButton,r),Pe(this._zoomOutButton,r),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(Ht(this._zoomOutButton,r),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(Ht(this._zoomInButton,r),this._zoomInButton.setAttribute("aria-disabled","true"))}});me.mergeOptions({zoomControl:!0}),me.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new dl,this.addControl(this.zoomControl))});var Pg=function(i){return new dl(i)},Mh=Ei.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var r="leaflet-control-scale",l=zt("div",r),f=this.options;return this._addScales(f,r+"-line",l),i.on(f.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),l},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,r,l){i.metric&&(this._mScale=zt("div",r,l)),i.imperial&&(this._iScale=zt("div",r,l))},_update:function(){var i=this._map,r=i.getSize().y/2,l=i.distance(i.containerPointToLatLng([0,r]),i.containerPointToLatLng([this.options.maxWidth,r]));this._updateScales(l)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var r=this._getRoundNum(i),l=r<1e3?r+" m":r/1e3+" km";this._updateScale(this._mScale,l,r/i)},_updateImperial:function(i){var r=i*3.2808399,l,f,v;r>5280?(l=r/5280,f=this._getRoundNum(l),this._updateScale(this._iScale,f+" mi",f/l)):(v=this._getRoundNum(r),this._updateScale(this._iScale,v+" ft",v/r))},_updateScale:function(i,r,l){i.style.width=Math.round(this.options.maxWidth*l)+"px",i.innerHTML=r},_getRoundNum:function(i){var r=Math.pow(10,(Math.floor(i)+"").length-1),l=i/r;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,r*l}}),Cg=function(i){return new Mh(i)},Rg='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',fl=Ei.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Dt.inlineSvg?Rg+" ":"")+"Leaflet</a>"},initialize:function(i){S(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=zt("div","leaflet-control-attribution"),ks(this._container);for(var r in i._layers)i._layers[r].getAttribution&&this.addAttribution(i._layers[r].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var r in this._attributions)this._attributions[r]&&i.push(r);var l=[];this.options.prefix&&l.push(this.options.prefix),i.length&&l.push(i.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});me.mergeOptions({attributionControl:!0}),me.addInitHook(function(){this.options.attributionControl&&new fl().addTo(this)});var Lg=function(i){return new fl(i)};Ei.Layers=xh,Ei.Zoom=dl,Ei.Scale=Mh,Ei.Attribution=fl,Hs.layers=Ag,Hs.zoom=Pg,Hs.scale=Cg,Hs.attribution=Lg;var Ui=J.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ui.addTo=function(i,r){return i.addHandler(r,this),this};var Dg={Events:Z},Sh=Dt.touch?"touchstart mousedown":"mousedown",fn=ct.extend({options:{clickTolerance:3},initialize:function(i,r,l,f){S(this,f),this._element=i,this._dragStartTarget=r||i,this._preventOutline=l},enable:function(){this._enabled||(te(this._dragStartTarget,Sh,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(fn._dragging===this&&this.finishDrag(!0),Le(this._dragStartTarget,Sh,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!he(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){fn._dragging===this&&this.finishDrag();return}if(!(fn._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(fn._dragging=this,this._preventOutline&&rl(this._element),il(),di(),!this._moving)){this.fire("down");var r=i.touches?i.touches[0]:i,l=ph(this._element);this._startPoint=new V(r.clientX,r.clientY),this._startPos=bi(this._element),this._parentScale=ol(l);var f=i.type==="mousedown";te(document,f?"mousemove":"touchmove",this._onMove,this),te(document,f?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var r=i.touches&&i.touches.length===1?i.touches[0]:i,l=new V(r.clientX,r.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,Xe(i),this._moved||(this.fire("dragstart"),this._moved=!0,Ht(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Ht(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),de(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){Pe(document.body,"leaflet-dragging"),this._lastTarget&&(Pe(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Le(document,"mousemove touchmove",this._onMove,this),Le(document,"mouseup touchend touchcancel",this._onUp,this),nl(),Bs();var r=this._moved&&this._moving;this._moving=!1,fn._dragging=!1,r&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)})}});function bh(i,r,l){var f,v=[1,4,2,8],b,F,X,tt,at,bt,qt,le;for(b=0,bt=i.length;b<bt;b++)i[b]._code=Un(i[b],r);for(X=0;X<4;X++){for(qt=v[X],f=[],b=0,bt=i.length,F=bt-1;b<bt;F=b++)tt=i[b],at=i[F],tt._code&qt?at._code&qt||(le=Vr(at,tt,qt,r,l),le._code=Un(le,r),f.push(le)):(at._code&qt&&(le=Vr(at,tt,qt,r,l),le._code=Un(le,r),f.push(le)),f.push(tt));i=f}return i}function Eh(i,r){var l,f,v,b,F,X,tt,at,bt;if(!i||i.length===0)throw new Error("latlngs not passed");mi(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var qt=ot([0,0]),le=Yt(i),Je=le.getNorthWest().distanceTo(le.getSouthWest())*le.getNorthEast().distanceTo(le.getNorthWest());Je<1700&&(qt=pl(i));var Ve=i.length,_i=[];for(l=0;l<Ve;l++){var si=ot(i[l]);_i.push(r.project(ot([si.lat-qt.lat,si.lng-qt.lng])))}for(X=tt=at=0,l=0,f=Ve-1;l<Ve;f=l++)v=_i[l],b=_i[f],F=v.y*b.x-b.y*v.x,tt+=(v.x+b.x)*F,at+=(v.y+b.y)*F,X+=F*3;X===0?bt=_i[0]:bt=[tt/X,at/X];var gs=r.unproject(st(bt));return ot([gs.lat+qt.lat,gs.lng+qt.lng])}function pl(i){for(var r=0,l=0,f=0,v=0;v<i.length;v++){var b=ot(i[v]);r+=b.lat,l+=b.lng,f++}return ot([r/f,l/f])}var Ig={__proto__:null,clipPolygon:bh,polygonCenter:Eh,centroid:pl};function Th(i,r){if(!r||!i.length)return i.slice();var l=r*r;return i=Og(i,l),i=Ug(i,l),i}function wh(i,r,l){return Math.sqrt(Gs(i,r,l,!0))}function Ng(i,r,l){return Gs(i,r,l)}function Ug(i,r){var l=i.length,f=typeof Uint8Array<"u"?Uint8Array:Array,v=new f(l);v[0]=v[l-1]=1,ml(i,v,r,0,l-1);var b,F=[];for(b=0;b<l;b++)v[b]&&F.push(i[b]);return F}function ml(i,r,l,f,v){var b=0,F,X,tt;for(X=f+1;X<=v-1;X++)tt=Gs(i[X],i[f],i[v],!0),tt>b&&(F=X,b=tt);b>l&&(r[F]=1,ml(i,r,l,f,F),ml(i,r,l,F,v))}function Og(i,r){for(var l=[i[0]],f=1,v=0,b=i.length;f<b;f++)Fg(i[f],i[v])>r&&(l.push(i[f]),v=f);return v<b-1&&l.push(i[b-1]),l}var Ah;function Ph(i,r,l,f,v){var b=f?Ah:Un(i,l),F=Un(r,l),X,tt,at;for(Ah=F;;){if(!(b|F))return[i,r];if(b&F)return!1;X=b||F,tt=Vr(i,r,X,l,v),at=Un(tt,l),X===b?(i=tt,b=at):(r=tt,F=at)}}function Vr(i,r,l,f,v){var b=r.x-i.x,F=r.y-i.y,X=f.min,tt=f.max,at,bt;return l&8?(at=i.x+b*(tt.y-i.y)/F,bt=tt.y):l&4?(at=i.x+b*(X.y-i.y)/F,bt=X.y):l&2?(at=tt.x,bt=i.y+F*(tt.x-i.x)/b):l&1&&(at=X.x,bt=i.y+F*(X.x-i.x)/b),new V(at,bt,v)}function Un(i,r){var l=0;return i.x<r.min.x?l|=1:i.x>r.max.x&&(l|=2),i.y<r.min.y?l|=4:i.y>r.max.y&&(l|=8),l}function Fg(i,r){var l=r.x-i.x,f=r.y-i.y;return l*l+f*f}function Gs(i,r,l,f){var v=r.x,b=r.y,F=l.x-v,X=l.y-b,tt=F*F+X*X,at;return tt>0&&(at=((i.x-v)*F+(i.y-b)*X)/tt,at>1?(v=l.x,b=l.y):at>0&&(v+=F*at,b+=X*at)),F=i.x-v,X=i.y-b,f?F*F+X*X:new V(v,b)}function mi(i){return!C(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function Ch(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),mi(i)}function Rh(i,r){var l,f,v,b,F,X,tt,at;if(!i||i.length===0)throw new Error("latlngs not passed");mi(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var bt=ot([0,0]),qt=Yt(i),le=qt.getNorthWest().distanceTo(qt.getSouthWest())*qt.getNorthEast().distanceTo(qt.getNorthWest());le<1700&&(bt=pl(i));var Je=i.length,Ve=[];for(l=0;l<Je;l++){var _i=ot(i[l]);Ve.push(r.project(ot([_i.lat-bt.lat,_i.lng-bt.lng])))}for(l=0,f=0;l<Je-1;l++)f+=Ve[l].distanceTo(Ve[l+1])/2;if(f===0)at=Ve[0];else for(l=0,b=0;l<Je-1;l++)if(F=Ve[l],X=Ve[l+1],v=F.distanceTo(X),b+=v,b>f){tt=(b-f)/v,at=[X.x-tt*(X.x-F.x),X.y-tt*(X.y-F.y)];break}var si=r.unproject(st(at));return ot([si.lat+bt.lat,si.lng+bt.lng])}var Bg={__proto__:null,simplify:Th,pointToSegmentDistance:wh,closestPointOnSegment:Ng,clipSegment:Ph,_getEdgeIntersection:Vr,_getBitCode:Un,_sqClosestPointOnSegment:Gs,isFlat:mi,_flat:Ch,polylineCenter:Rh},_l={project:function(i){return new V(i.lng,i.lat)},unproject:function(i){return new j(i.y,i.x)},bounds:new gt([-180,-90],[180,90])},gl={R:6378137,R_MINOR:6356752314245179e-9,bounds:new gt([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var r=Math.PI/180,l=this.R,f=i.lat*r,v=this.R_MINOR/l,b=Math.sqrt(1-v*v),F=b*Math.sin(f),X=Math.tan(Math.PI/4-f/2)/Math.pow((1-F)/(1+F),b/2);return f=-l*Math.log(Math.max(X,1e-10)),new V(i.lng*r*l,f)},unproject:function(i){for(var r=180/Math.PI,l=this.R,f=this.R_MINOR/l,v=Math.sqrt(1-f*f),b=Math.exp(-i.y/l),F=Math.PI/2-2*Math.atan(b),X=0,tt=.1,at;X<15&&Math.abs(tt)>1e-7;X++)at=v*Math.sin(F),at=Math.pow((1-at)/(1+at),v/2),tt=Math.PI/2-2*Math.atan(b*at)-F,F+=tt;return new j(F*r,i.x*r/l)}},zg={__proto__:null,LonLat:_l,Mercator:gl,SphericalMercator:jt},kg=s({},It,{code:"EPSG:3395",projection:gl,transformation:(function(){var i=.5/(Math.PI*gl.R);return oe(i,.5,-i,.5)})()}),Lh=s({},It,{code:"EPSG:4326",projection:_l,transformation:oe(1/180,1,-1/180,.5)}),Hg=s({},dt,{projection:_l,transformation:oe(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,r){var l=r.lng-i.lng,f=r.lat-i.lat;return Math.sqrt(l*l+f*f)},infinite:!0});dt.Earth=It,dt.EPSG3395=kg,dt.EPSG3857=z,dt.EPSG900913=we,dt.EPSG4326=Lh,dt.Simple=Hg;var Ti=ct.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[u(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[u(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var r=i.target;if(r.hasLayer(this)){if(this._map=r,this._zoomAnimated=r._zoomAnimated,this.getEvents){var l=this.getEvents();r.on(l,this),this.once("remove",function(){r.off(l,this)},this)}this.onAdd(r),this.fire("add"),r.fire("layeradd",{layer:this})}}});me.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var r=u(i);return this._layers[r]?this:(this._layers[r]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var r=u(i);return this._layers[r]?(this._loaded&&i.onRemove(this),delete this._layers[r],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return u(i)in this._layers},eachLayer:function(i,r){for(var l in this._layers)i.call(r,this._layers[l]);return this},_addLayers:function(i){i=i?C(i)?i:[i]:[];for(var r=0,l=i.length;r<l;r++)this.addLayer(i[r])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[u(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var r=u(i);this._zoomBoundLayers[r]&&(delete this._zoomBoundLayers[r],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,r=-1/0,l=this._getZoomSpan();for(var f in this._zoomBoundLayers){var v=this._zoomBoundLayers[f].options;i=v.minZoom===void 0?i:Math.min(i,v.minZoom),r=v.maxZoom===void 0?r:Math.max(r,v.maxZoom)}this._layersMaxZoom=r===-1/0?void 0:r,this._layersMinZoom=i===1/0?void 0:i,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ds=Ti.extend({initialize:function(i,r){S(this,r),this._layers={};var l,f;if(i)for(l=0,f=i.length;l<f;l++)this.addLayer(i[l])},addLayer:function(i){var r=this.getLayerId(i);return this._layers[r]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var r=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[r]&&this._map.removeLayer(this._layers[r]),delete this._layers[r],this},hasLayer:function(i){var r=typeof i=="number"?i:this.getLayerId(i);return r in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var r=Array.prototype.slice.call(arguments,1),l,f;for(l in this._layers)f=this._layers[l],f[i]&&f[i].apply(f,r);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,r){for(var l in this._layers)i.call(r,this._layers[l]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return u(i)}}),Gg=function(i,r){return new ds(i,r)},Zi=ds.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),ds.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),ds.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new re;for(var r in this._layers){var l=this._layers[r];i.extend(l.getBounds?l.getBounds():l.getLatLng())}return i}}),Vg=function(i,r){return new Zi(i,r)},fs=J.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){S(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,r){var l=this._getIconUrl(i);if(!l){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var f=this._createImg(l,r&&r.tagName==="IMG"?r:null);return this._setIconStyles(f,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(f.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),f},_setIconStyles:function(i,r){var l=this.options,f=l[r+"Size"];typeof f=="number"&&(f=[f,f]);var v=st(f),b=st(r==="shadow"&&l.shadowAnchor||l.iconAnchor||v&&v.divideBy(2,!0));i.className="leaflet-marker-"+r+" "+(l.className||""),b&&(i.style.marginLeft=-b.x+"px",i.style.marginTop=-b.y+"px"),v&&(i.style.width=v.x+"px",i.style.height=v.y+"px")},_createImg:function(i,r){return r=r||document.createElement("img"),r.src=i,r},_getIconUrl:function(i){return Dt.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function Wg(i){return new fs(i)}var Vs=fs.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof Vs.imagePath!="string"&&(Vs.imagePath=this._detectIconPath()),(this.options.imagePath||Vs.imagePath)+fs.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var r=function(l,f,v){var b=f.exec(l);return b&&b[v]};return i=r(i,/^url\((['"])?(.+)\1\)$/,2),i&&r(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=zt("div","leaflet-default-icon-path",document.body),r=pe(i,"background-image")||pe(i,"backgroundImage");if(document.body.removeChild(i),r=this._stripUrl(r),r)return r;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),Dh=Ui.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new fn(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Ht(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Pe(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var r=this._marker,l=r._map,f=this._marker.options.autoPanSpeed,v=this._marker.options.autoPanPadding,b=bi(r._icon),F=l.getPixelBounds(),X=l.getPixelOrigin(),tt=Ft(F.min._subtract(X).add(v),F.max._subtract(X).subtract(v));if(!tt.contains(b)){var at=st((Math.max(tt.max.x,b.x)-tt.max.x)/(F.max.x-tt.max.x)-(Math.min(tt.min.x,b.x)-tt.min.x)/(F.min.x-tt.min.x),(Math.max(tt.max.y,b.y)-tt.max.y)/(F.max.y-tt.max.y)-(Math.min(tt.min.y,b.y)-tt.min.y)/(F.min.y-tt.min.y)).multiplyBy(f);l.panBy(at,{animate:!1}),this._draggable._newPos._add(at),this._draggable._startPos._add(at),de(r._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=N(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(Y(this._panRequest),this._panRequest=N(this._adjustPan.bind(this,i)))},_onDrag:function(i){var r=this._marker,l=r._shadow,f=bi(r._icon),v=r._map.layerPointToLatLng(f);l&&de(l,f),r._latlng=v,i.latlng=v,i.oldLatLng=this._oldLatLng,r.fire("move",i).fire("drag",i)},_onDragEnd:function(i){Y(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),Wr=Ti.extend({options:{icon:new Vs,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,r){S(this,r),this._latlng=ot(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var r=this._latlng;return this._latlng=ot(i),this.update(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,r="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=i.icon.createIcon(this._icon),f=!1;l!==this._icon&&(this._icon&&this._removeIcon(),f=!0,i.title&&(l.title=i.title),l.tagName==="IMG"&&(l.alt=i.alt||"")),Ht(l,r),i.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&te(l,"focus",this._panOnFocus,this);var v=i.icon.createShadow(this._shadow),b=!1;v!==this._shadow&&(this._removeShadow(),b=!0),v&&(Ht(v,r),v.alt=""),this._shadow=v,i.opacity<1&&this._updateOpacity(),f&&this.getPane().appendChild(this._icon),this._initInteraction(),v&&b&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Le(this._icon,"focus",this._panOnFocus,this),Zt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Zt(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&de(this._icon,i),this._shadow&&de(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var r=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(r)},_initInteraction:function(){if(this.options.interactive&&(Ht(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Dh)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Dh(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&ue(this._icon,i),this._shadow&&ue(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var r=this.options.icon.options,l=r.iconSize?st(r.iconSize):st(0,0),f=r.iconAnchor?st(r.iconAnchor):st(0,0);i.panInside(this._latlng,{paddingTopLeft:f,paddingBottomRight:l.subtract(f)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function $g(i,r){return new Wr(i,r)}var pn=Ti.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return S(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),$r=pn.extend({options:{fill:!0,radius:10},initialize:function(i,r){S(this,r),this._latlng=ot(i),this._radius=this.options.radius},setLatLng:function(i){var r=this._latlng;return this._latlng=ot(i),this.redraw(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var r=i&&i.radius||this._radius;return pn.prototype.setStyle.call(this,i),this.setRadius(r),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,r=this._radiusY||i,l=this._clickTolerance(),f=[i+l,r+l];this._pxBounds=new gt(this._point.subtract(f),this._point.add(f))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Xg(i,r){return new $r(i,r)}var vl=$r.extend({initialize:function(i,r,l){if(typeof r=="number"&&(r=s({},l,{radius:r})),S(this,r),this._latlng=ot(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new re(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:pn.prototype.setStyle,_project:function(){var i=this._latlng.lng,r=this._latlng.lat,l=this._map,f=l.options.crs;if(f.distance===It.distance){var v=Math.PI/180,b=this._mRadius/It.R/v,F=l.project([r+b,i]),X=l.project([r-b,i]),tt=F.add(X).divideBy(2),at=l.unproject(tt).lat,bt=Math.acos((Math.cos(b*v)-Math.sin(r*v)*Math.sin(at*v))/(Math.cos(r*v)*Math.cos(at*v)))/v;(isNaN(bt)||bt===0)&&(bt=b/Math.cos(Math.PI/180*r)),this._point=tt.subtract(l.getPixelOrigin()),this._radius=isNaN(bt)?0:tt.x-l.project([at,i-bt]).x,this._radiusY=tt.y-F.y}else{var qt=f.unproject(f.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(qt).x}this._updateBounds()}});function Zg(i,r,l){return new vl(i,r,l)}var qi=pn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,r){S(this,r),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var r=1/0,l=null,f=Gs,v,b,F=0,X=this._parts.length;F<X;F++)for(var tt=this._parts[F],at=1,bt=tt.length;at<bt;at++){v=tt[at-1],b=tt[at];var qt=f(i,v,b,!0);qt<r&&(r=qt,l=f(i,v,b))}return l&&(l.distance=Math.sqrt(r)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Rh(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,r){return r=r||this._defaultShape(),i=ot(i),r.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new re,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return mi(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var r=[],l=mi(i),f=0,v=i.length;f<v;f++)l?(r[f]=ot(i[f]),this._bounds.extend(r[f])):r[f]=this._convertLatLngs(i[f]);return r},_project:function(){var i=new gt;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),r=new V(i,i);this._rawPxBounds&&(this._pxBounds=new gt([this._rawPxBounds.min.subtract(r),this._rawPxBounds.max.add(r)]))},_projectLatlngs:function(i,r,l){var f=i[0]instanceof j,v=i.length,b,F;if(f){for(F=[],b=0;b<v;b++)F[b]=this._map.latLngToLayerPoint(i[b]),l.extend(F[b]);r.push(F)}else for(b=0;b<v;b++)this._projectLatlngs(i[b],r,l)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var r=this._parts,l,f,v,b,F,X,tt;for(l=0,v=0,b=this._rings.length;l<b;l++)for(tt=this._rings[l],f=0,F=tt.length;f<F-1;f++)X=Ph(tt[f],tt[f+1],i,f,!0),X&&(r[v]=r[v]||[],r[v].push(X[0]),(X[1]!==tt[f+1]||f===F-2)&&(r[v].push(X[1]),v++))}},_simplifyPoints:function(){for(var i=this._parts,r=this.options.smoothFactor,l=0,f=i.length;l<f;l++)i[l]=Th(i[l],r)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,r){var l,f,v,b,F,X,tt=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(l=0,b=this._parts.length;l<b;l++)for(X=this._parts[l],f=0,F=X.length,v=F-1;f<F;v=f++)if(!(!r&&f===0)&&wh(i,X[v],X[f])<=tt)return!0;return!1}});function qg(i,r){return new qi(i,r)}qi._flat=Ch;var ps=qi.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Eh(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var r=qi.prototype._convertLatLngs.call(this,i),l=r.length;return l>=2&&r[0]instanceof j&&r[0].equals(r[l-1])&&r.pop(),r},_setLatLngs:function(i){qi.prototype._setLatLngs.call(this,i),mi(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return mi(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,r=this.options.weight,l=new V(r,r);if(i=new gt(i.min.subtract(l),i.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var f=0,v=this._rings.length,b;f<v;f++)b=bh(this._rings[f],i,!0),b.length&&this._parts.push(b)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var r=!1,l,f,v,b,F,X,tt,at;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(b=0,tt=this._parts.length;b<tt;b++)for(l=this._parts[b],F=0,at=l.length,X=at-1;F<at;X=F++)f=l[F],v=l[X],f.y>i.y!=v.y>i.y&&i.x<(v.x-f.x)*(i.y-f.y)/(v.y-f.y)+f.x&&(r=!r);return r||qi.prototype._containsPoint.call(this,i,!0)}});function Yg(i,r){return new ps(i,r)}var Yi=Zi.extend({initialize:function(i,r){S(this,r),this._layers={},i&&this.addData(i)},addData:function(i){var r=C(i)?i:i.features,l,f,v;if(r){for(l=0,f=r.length;l<f;l++)v=r[l],(v.geometries||v.geometry||v.features||v.coordinates)&&this.addData(v);return this}var b=this.options;if(b.filter&&!b.filter(i))return this;var F=Xr(i,b);return F?(F.feature=Yr(i),F.defaultOptions=F.options,this.resetStyle(F),b.onEachFeature&&b.onEachFeature(i,F),this.addLayer(F)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=s({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(r){this._setLayerStyle(r,i)},this)},_setLayerStyle:function(i,r){i.setStyle&&(typeof r=="function"&&(r=r(i.feature)),i.setStyle(r))}});function Xr(i,r){var l=i.type==="Feature"?i.geometry:i,f=l?l.coordinates:null,v=[],b=r&&r.pointToLayer,F=r&&r.coordsToLatLng||yl,X,tt,at,bt;if(!f&&!l)return null;switch(l.type){case"Point":return X=F(f),Ih(b,i,X,r);case"MultiPoint":for(at=0,bt=f.length;at<bt;at++)X=F(f[at]),v.push(Ih(b,i,X,r));return new Zi(v);case"LineString":case"MultiLineString":return tt=Zr(f,l.type==="LineString"?0:1,F),new qi(tt,r);case"Polygon":case"MultiPolygon":return tt=Zr(f,l.type==="Polygon"?1:2,F),new ps(tt,r);case"GeometryCollection":for(at=0,bt=l.geometries.length;at<bt;at++){var qt=Xr({geometry:l.geometries[at],type:"Feature",properties:i.properties},r);qt&&v.push(qt)}return new Zi(v);case"FeatureCollection":for(at=0,bt=l.features.length;at<bt;at++){var le=Xr(l.features[at],r);le&&v.push(le)}return new Zi(v);default:throw new Error("Invalid GeoJSON object.")}}function Ih(i,r,l,f){return i?i(r,l):new Wr(l,f&&f.markersInheritOptions&&f)}function yl(i){return new j(i[1],i[0],i[2])}function Zr(i,r,l){for(var f=[],v=0,b=i.length,F;v<b;v++)F=r?Zr(i[v],r-1,l):(l||yl)(i[v]),f.push(F);return f}function xl(i,r){return i=ot(i),i.alt!==void 0?[m(i.lng,r),m(i.lat,r),m(i.alt,r)]:[m(i.lng,r),m(i.lat,r)]}function qr(i,r,l,f){for(var v=[],b=0,F=i.length;b<F;b++)v.push(r?qr(i[b],mi(i[b])?0:r-1,l,f):xl(i[b],f));return!r&&l&&v.length>0&&v.push(v[0].slice()),v}function ms(i,r){return i.feature?s({},i.feature,{geometry:r}):Yr(r)}function Yr(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var Ml={toGeoJSON:function(i){return ms(this,{type:"Point",coordinates:xl(this.getLatLng(),i)})}};Wr.include(Ml),vl.include(Ml),$r.include(Ml),qi.include({toGeoJSON:function(i){var r=!mi(this._latlngs),l=qr(this._latlngs,r?1:0,!1,i);return ms(this,{type:(r?"Multi":"")+"LineString",coordinates:l})}}),ps.include({toGeoJSON:function(i){var r=!mi(this._latlngs),l=r&&!mi(this._latlngs[0]),f=qr(this._latlngs,l?2:r?1:0,!0,i);return r||(f=[f]),ms(this,{type:(l?"Multi":"")+"Polygon",coordinates:f})}}),ds.include({toMultiPoint:function(i){var r=[];return this.eachLayer(function(l){r.push(l.toGeoJSON(i).geometry.coordinates)}),ms(this,{type:"MultiPoint",coordinates:r})},toGeoJSON:function(i){var r=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(r==="MultiPoint")return this.toMultiPoint(i);var l=r==="GeometryCollection",f=[];return this.eachLayer(function(v){if(v.toGeoJSON){var b=v.toGeoJSON(i);if(l)f.push(b.geometry);else{var F=Yr(b);F.type==="FeatureCollection"?f.push.apply(f,F.features):f.push(F)}}}),l?ms(this,{geometries:f,type:"GeometryCollection"}):{type:"FeatureCollection",features:f}}});function Nh(i,r){return new Yi(i,r)}var jg=Nh,jr=Ti.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,r,l){this._url=i,this._bounds=Yt(r),S(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Ht(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Zt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&Ot(this._image),this},bringToBack:function(){return this._map&&ye(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=Yt(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",r=this._image=i?this._url:zt("img");if(Ht(r,"leaflet-image-layer"),this._zoomAnimated&&Ht(r,"leaflet-zoom-animated"),this.options.className&&Ht(r,this.options.className),r.onselectstart=_,r.onmousemove=_,r.onload=c(this.fire,this,"load"),r.onerror=c(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(r.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=r.src;return}r.src=this._url,r.alt=this.options.alt},_animateZoom:function(i){var r=this._map.getZoomScale(i.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;Ue(this._image,l,r)},_reset:function(){var i=this._image,r=new gt(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=r.getSize();de(i,r.min),i.style.width=l.x+"px",i.style.height=l.y+"px"},_updateOpacity:function(){ue(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),Kg=function(i,r,l){return new jr(i,r,l)},Uh=jr.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",r=this._image=i?this._url:zt("video");if(Ht(r,"leaflet-image-layer"),this._zoomAnimated&&Ht(r,"leaflet-zoom-animated"),this.options.className&&Ht(r,this.options.className),r.onselectstart=_,r.onmousemove=_,r.onloadeddata=c(this.fire,this,"load"),i){for(var l=r.getElementsByTagName("source"),f=[],v=0;v<l.length;v++)f.push(l[v].src);this._url=l.length>0?f:[r.src];return}C(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(r.style,"objectFit")&&(r.style.objectFit="fill"),r.autoplay=!!this.options.autoplay,r.loop=!!this.options.loop,r.muted=!!this.options.muted,r.playsInline=!!this.options.playsInline;for(var b=0;b<this._url.length;b++){var F=zt("source");F.src=this._url[b],r.appendChild(F)}}});function Jg(i,r,l){return new Uh(i,r,l)}var Oh=jr.extend({_initImage:function(){var i=this._image=this._url;Ht(i,"leaflet-image-layer"),this._zoomAnimated&&Ht(i,"leaflet-zoom-animated"),this.options.className&&Ht(i,this.options.className),i.onselectstart=_,i.onmousemove=_}});function Qg(i,r,l){return new Oh(i,r,l)}var Oi=Ti.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,r){i&&(i instanceof j||C(i))?(this._latlng=ot(i),S(this,r)):(S(this,i),this._source=r),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&ue(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&ue(this._container,1),this.bringToFront(),this.options.interactive&&(Ht(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(ue(this._container,0),this._removeTimeout=setTimeout(c(Zt,void 0,this._container),200)):Zt(this._container),this.options.interactive&&(Pe(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=ot(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ot(this._container),this},bringToBack:function(){return this._map&&ye(this._container),this},_prepareOpen:function(i){var r=this._source;if(!r._map)return!1;if(r instanceof Zi){r=null;var l=this._source._layers;for(var f in l)if(l[f]._map){r=l[f];break}if(!r)return!1;this._source=r}if(!i)if(r.getCenter)i=r.getCenter();else if(r.getLatLng)i=r.getLatLng();else if(r.getBounds)i=r.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,r=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof r=="string")i.innerHTML=r;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(r)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),r=st(this.options.offset),l=this._getAnchor();this._zoomAnimated?de(this._container,i.add(l)):r=r.add(i).add(l);var f=this._containerBottom=-r.y,v=this._containerLeft=-Math.round(this._containerWidth/2)+r.x;this._container.style.bottom=f+"px",this._container.style.left=v+"px"}},_getAnchor:function(){return[0,0]}});me.include({_initOverlay:function(i,r,l,f){var v=r;return v instanceof i||(v=new i(f).setContent(r)),l&&v.setLatLng(l),v}}),Ti.include({_initOverlay:function(i,r,l,f){var v=l;return v instanceof i?(S(v,f),v._source=this):(v=r&&!f?r:new i(f,this),v.setContent(l)),v}});var Kr=Oi.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,Oi.prototype.openOn.call(this,i)},onAdd:function(i){Oi.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof pn||this._source.on("preclick",In))},onRemove:function(i){Oi.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof pn||this._source.off("preclick",In))},getEvents:function(){var i=Oi.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",r=this._container=zt("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=zt("div",i+"-content-wrapper",r);if(this._contentNode=zt("div",i+"-content",l),ks(r),hl(this._contentNode),te(r,"contextmenu",In),this._tipContainer=zt("div",i+"-tip-container",r),this._tip=zt("div",i+"-tip",this._tipContainer),this.options.closeButton){var f=this._closeButton=zt("a",i+"-close-button",r);f.setAttribute("role","button"),f.setAttribute("aria-label","Close popup"),f.href="#close",f.innerHTML='<span aria-hidden="true">&#215;</span>',te(f,"click",function(v){Xe(v),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,r=i.style;r.width="",r.whiteSpace="nowrap";var l=i.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),r.width=l+1+"px",r.whiteSpace="",r.height="";var f=i.offsetHeight,v=this.options.maxHeight,b="leaflet-popup-scrolled";v&&f>v?(r.height=v+"px",Ht(i,b)):Pe(i,b),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var r=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),l=this._getAnchor();de(this._container,r.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,r=parseInt(pe(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+r,f=this._containerWidth,v=new V(this._containerLeft,-l-this._containerBottom);v._add(bi(this._container));var b=i.layerPointToContainerPoint(v),F=st(this.options.autoPanPadding),X=st(this.options.autoPanPaddingTopLeft||F),tt=st(this.options.autoPanPaddingBottomRight||F),at=i.getSize(),bt=0,qt=0;b.x+f+tt.x>at.x&&(bt=b.x+f-at.x+tt.x),b.x-bt-X.x<0&&(bt=b.x-X.x),b.y+l+tt.y>at.y&&(qt=b.y+l-at.y+tt.y),b.y-qt-X.y<0&&(qt=b.y-X.y),(bt||qt)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([bt,qt]))}},_getAnchor:function(){return st(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),tv=function(i,r){return new Kr(i,r)};me.mergeOptions({closePopupOnClick:!0}),me.include({openPopup:function(i,r,l){return this._initOverlay(Kr,i,r,l).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),Ti.include({bindPopup:function(i,r){return this._popup=this._initOverlay(Kr,this._popup,i,r),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof Zi||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){Nn(i);var r=i.layer||i.target;if(this._popup._source===r&&!(r instanceof pn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=r,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var Jr=Oi.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){Oi.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){Oi.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=Oi.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",r=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=zt("div",r),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+u(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var r,l,f=this._map,v=this._container,b=f.latLngToContainerPoint(f.getCenter()),F=f.layerPointToContainerPoint(i),X=this.options.direction,tt=v.offsetWidth,at=v.offsetHeight,bt=st(this.options.offset),qt=this._getAnchor();X==="top"?(r=tt/2,l=at):X==="bottom"?(r=tt/2,l=0):X==="center"?(r=tt/2,l=at/2):X==="right"?(r=0,l=at/2):X==="left"?(r=tt,l=at/2):F.x<b.x?(X="right",r=0,l=at/2):(X="left",r=tt+(bt.x+qt.x)*2,l=at/2),i=i.subtract(st(r,l,!0)).add(bt).add(qt),Pe(v,"leaflet-tooltip-right"),Pe(v,"leaflet-tooltip-left"),Pe(v,"leaflet-tooltip-top"),Pe(v,"leaflet-tooltip-bottom"),Ht(v,"leaflet-tooltip-"+X),de(v,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&ue(this._container,i)},_animateZoom:function(i){var r=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(r)},_getAnchor:function(){return st(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),ev=function(i,r){return new Jr(i,r)};me.include({openTooltip:function(i,r,l){return this._initOverlay(Jr,i,r,l).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),Ti.include({bindTooltip:function(i,r){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Jr,this._tooltip,i,r),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var r=i?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[r](l),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof Zi||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var r=typeof i.getElement=="function"&&i.getElement();r&&(te(r,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),te(r,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var r=typeof i.getElement=="function"&&i.getElement();r&&r.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var r=this;this._map.once("moveend",function(){r._openOnceFlag=!1,r._openTooltip(i)});return}this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0)}},_moveTooltip:function(i){var r=i.latlng,l,f;this._tooltip.options.sticky&&i.originalEvent&&(l=this._map.mouseEventToContainerPoint(i.originalEvent),f=this._map.containerPointToLayerPoint(l),r=this._map.layerPointToLatLng(f)),this._tooltip.setLatLng(r)}});var Fh=fs.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var r=i&&i.tagName==="DIV"?i:document.createElement("div"),l=this.options;if(l.html instanceof Element?(ve(r),r.appendChild(l.html)):r.innerHTML=l.html!==!1?l.html:"",l.bgPos){var f=st(l.bgPos);r.style.backgroundPosition=-f.x+"px "+-f.y+"px"}return this._setIconStyles(r,"icon"),r},createShadow:function(){return null}});function iv(i){return new Fh(i)}fs.Default=Vs;var Ws=Ti.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Dt.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){S(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),Zt(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ot(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ye(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=d(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof V?i:new V(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var r=this.getPane().children,l=-i(-1/0,1/0),f=0,v=r.length,b;f<v;f++)b=r[f].style.zIndex,r[f]!==this._container&&b&&(l=i(l,+b));isFinite(l)&&(this.options.zIndex=l+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Dt.ielt9){ue(this._container,this.options.opacity);var i=+new Date,r=!1,l=!1;for(var f in this._tiles){var v=this._tiles[f];if(!(!v.current||!v.loaded)){var b=Math.min(1,(i-v.loaded)/200);ue(v.el,b),b<1?r=!0:(v.active?l=!0:this._onOpaqueTile(v),v.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),r&&(Y(this._fadeFrame),this._fadeFrame=N(this._updateOpacity,this))}},_onOpaqueTile:_,_initContainer:function(){this._container||(this._container=zt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,r=this.options.maxZoom;if(i!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===i?(this._levels[l].el.style.zIndex=r-Math.abs(i-l),this._onUpdateLevel(l)):(Zt(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var f=this._levels[i],v=this._map;return f||(f=this._levels[i]={},f.el=zt("div","leaflet-tile-container leaflet-zoom-animated",this._container),f.el.style.zIndex=r,f.origin=v.project(v.unproject(v.getPixelOrigin()),i).round(),f.zoom=i,this._setZoomTransform(f,v.getCenter(),v.getZoom()),_(f.el.offsetWidth),this._onCreateLevel(f)),this._level=f,f}},_onUpdateLevel:_,_onRemoveLevel:_,_onCreateLevel:_,_pruneTiles:function(){if(this._map){var i,r,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)r=this._tiles[i],r.retain=r.current;for(i in this._tiles)if(r=this._tiles[i],r.current&&!r.active){var f=r.coords;this._retainParent(f.x,f.y,f.z,f.z-5)||this._retainChildren(f.x,f.y,f.z,f.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var r in this._tiles)this._tiles[r].coords.z===i&&this._removeTile(r)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)Zt(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,r,l,f){var v=Math.floor(i/2),b=Math.floor(r/2),F=l-1,X=new V(+v,+b);X.z=+F;var tt=this._tileCoordsToKey(X),at=this._tiles[tt];return at&&at.active?(at.retain=!0,!0):(at&&at.loaded&&(at.retain=!0),F>f?this._retainParent(v,b,F,f):!1)},_retainChildren:function(i,r,l,f){for(var v=2*i;v<2*i+2;v++)for(var b=2*r;b<2*r+2;b++){var F=new V(v,b);F.z=l+1;var X=this._tileCoordsToKey(F),tt=this._tiles[X];if(tt&&tt.active){tt.retain=!0;continue}else tt&&tt.loaded&&(tt.retain=!0);l+1<f&&this._retainChildren(v,b,l+1,f)}},_resetView:function(i){var r=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),r,r)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var r=this.options;return r.minNativeZoom!==void 0&&i<r.minNativeZoom?r.minNativeZoom:r.maxNativeZoom!==void 0&&r.maxNativeZoom<i?r.maxNativeZoom:i},_setView:function(i,r,l,f){var v=Math.round(r);this.options.maxZoom!==void 0&&v>this.options.maxZoom||this.options.minZoom!==void 0&&v<this.options.minZoom?v=void 0:v=this._clampZoom(v);var b=this.options.updateWhenZooming&&v!==this._tileZoom;(!f||b)&&(this._tileZoom=v,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),v!==void 0&&this._update(i),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(i,r)},_setZoomTransforms:function(i,r){for(var l in this._levels)this._setZoomTransform(this._levels[l],i,r)},_setZoomTransform:function(i,r,l){var f=this._map.getZoomScale(l,i.zoom),v=i.origin.multiplyBy(f).subtract(this._map._getNewPixelOrigin(r,l)).round();Dt.any3d?Ue(i.el,v,f):de(i.el,v)},_resetGrid:function(){var i=this._map,r=i.options.crs,l=this._tileSize=this.getTileSize(),f=this._tileZoom,v=this._map.getPixelWorldBounds(this._tileZoom);v&&(this._globalTileRange=this._pxBoundsToTileRange(v)),this._wrapX=r.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,r.wrapLng[0]],f).x/l.x),Math.ceil(i.project([0,r.wrapLng[1]],f).x/l.y)],this._wrapY=r.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([r.wrapLat[0],0],f).y/l.x),Math.ceil(i.project([r.wrapLat[1],0],f).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var r=this._map,l=r._animatingZoom?Math.max(r._animateToZoom,r.getZoom()):r.getZoom(),f=r.getZoomScale(l,this._tileZoom),v=r.project(i,this._tileZoom).floor(),b=r.getSize().divideBy(f*2);return new gt(v.subtract(b),v.add(b))},_update:function(i){var r=this._map;if(r){var l=this._clampZoom(r.getZoom());if(i===void 0&&(i=r.getCenter()),this._tileZoom!==void 0){var f=this._getTiledPixelBounds(i),v=this._pxBoundsToTileRange(f),b=v.getCenter(),F=[],X=this.options.keepBuffer,tt=new gt(v.getBottomLeft().subtract([X,-X]),v.getTopRight().add([X,-X]));if(!(isFinite(v.min.x)&&isFinite(v.min.y)&&isFinite(v.max.x)&&isFinite(v.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var at in this._tiles){var bt=this._tiles[at].coords;(bt.z!==this._tileZoom||!tt.contains(new V(bt.x,bt.y)))&&(this._tiles[at].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(i,l);return}for(var qt=v.min.y;qt<=v.max.y;qt++)for(var le=v.min.x;le<=v.max.x;le++){var Je=new V(le,qt);if(Je.z=this._tileZoom,!!this._isValidTile(Je)){var Ve=this._tiles[this._tileCoordsToKey(Je)];Ve?Ve.current=!0:F.push(Je)}}if(F.sort(function(si,gs){return si.distanceTo(b)-gs.distanceTo(b)}),F.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var _i=document.createDocumentFragment();for(le=0;le<F.length;le++)this._addTile(F[le],_i);this._level.el.appendChild(_i)}}}},_isValidTile:function(i){var r=this._map.options.crs;if(!r.infinite){var l=this._globalTileRange;if(!r.wrapLng&&(i.x<l.min.x||i.x>l.max.x)||!r.wrapLat&&(i.y<l.min.y||i.y>l.max.y))return!1}if(!this.options.bounds)return!0;var f=this._tileCoordsToBounds(i);return Yt(this.options.bounds).overlaps(f)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var r=this._map,l=this.getTileSize(),f=i.scaleBy(l),v=f.add(l),b=r.unproject(f,i.z),F=r.unproject(v,i.z);return[b,F]},_tileCoordsToBounds:function(i){var r=this._tileCoordsToNwSe(i),l=new re(r[0],r[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var r=i.split(":"),l=new V(+r[0],+r[1]);return l.z=+r[2],l},_removeTile:function(i){var r=this._tiles[i];r&&(Zt(r.el),delete this._tiles[i],this.fire("tileunload",{tile:r.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){Ht(i,"leaflet-tile");var r=this.getTileSize();i.style.width=r.x+"px",i.style.height=r.y+"px",i.onselectstart=_,i.onmousemove=_,Dt.ielt9&&this.options.opacity<1&&ue(i,this.options.opacity)},_addTile:function(i,r){var l=this._getTilePos(i),f=this._tileCoordsToKey(i),v=this.createTile(this._wrapCoords(i),c(this._tileReady,this,i));this._initTile(v),this.createTile.length<2&&N(c(this._tileReady,this,i,null,v)),de(v,l),this._tiles[f]={el:v,coords:i,current:!0},r.appendChild(v),this.fire("tileloadstart",{tile:v,coords:i})},_tileReady:function(i,r,l){r&&this.fire("tileerror",{error:r,tile:l,coords:i});var f=this._tileCoordsToKey(i);l=this._tiles[f],l&&(l.loaded=+new Date,this._map._fadeAnimated?(ue(l.el,0),Y(this._fadeFrame),this._fadeFrame=N(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),r||(Ht(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Dt.ielt9||!this._map._fadeAnimated?N(this._pruneTiles,this):setTimeout(c(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var r=new V(this._wrapX?p(i.x,this._wrapX):i.x,this._wrapY?p(i.y,this._wrapY):i.y);return r.z=i.z,r},_pxBoundsToTileRange:function(i){var r=this.getTileSize();return new gt(i.min.unscaleBy(r).floor(),i.max.unscaleBy(r).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function nv(i){return new Ws(i)}var _s=Ws.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,r){this._url=i,r=S(this,r),r.detectRetina&&Dt.retina&&r.maxZoom>0?(r.tileSize=Math.floor(r.tileSize/2),r.zoomReverse?(r.zoomOffset--,r.minZoom=Math.min(r.maxZoom,r.minZoom+1)):(r.zoomOffset++,r.maxZoom=Math.max(r.minZoom,r.maxZoom-1)),r.minZoom=Math.max(0,r.minZoom)):r.zoomReverse?r.minZoom=Math.min(r.maxZoom,r.minZoom):r.maxZoom=Math.max(r.minZoom,r.maxZoom),typeof r.subdomains=="string"&&(r.subdomains=r.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,r){return this._url===i&&r===void 0&&(r=!0),this._url=i,r||this.redraw(),this},createTile:function(i,r){var l=document.createElement("img");return te(l,"load",c(this._tileOnLoad,this,r,l)),te(l,"error",c(this._tileOnError,this,r,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(i),l},getTileUrl:function(i){var r={r:Dt.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-i.y;this.options.tms&&(r.y=l),r["-y"]=l}return R(this._url,s(r,this.options))},_tileOnLoad:function(i,r){Dt.ielt9?setTimeout(c(i,this,null,r),0):i(null,r)},_tileOnError:function(i,r,l){var f=this.options.errorTileUrl;f&&r.getAttribute("src")!==f&&(r.src=f),i(l,r)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,r=this.options.maxZoom,l=this.options.zoomReverse,f=this.options.zoomOffset;return l&&(i=r-i),i+f},_getSubdomain:function(i){var r=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[r]},_abortLoading:function(){var i,r;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(r=this._tiles[i].el,r.onload=_,r.onerror=_,!r.complete)){r.src=O;var l=this._tiles[i].coords;Zt(r),delete this._tiles[i],this.fire("tileabort",{tile:r,coords:l})}},_removeTile:function(i){var r=this._tiles[i];if(r)return r.el.setAttribute("src",O),Ws.prototype._removeTile.call(this,i)},_tileReady:function(i,r,l){if(!(!this._map||l&&l.getAttribute("src")===O))return Ws.prototype._tileReady.call(this,i,r,l)}});function Bh(i,r){return new _s(i,r)}var zh=_s.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,r){this._url=i;var l=s({},this.defaultWmsParams);for(var f in r)f in this.options||(l[f]=r[f]);r=S(this,r);var v=r.detectRetina&&Dt.retina?2:1,b=this.getTileSize();l.width=b.x*v,l.height=b.y*v,this.wmsParams=l},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var r=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[r]=this._crs.code,_s.prototype.onAdd.call(this,i)},getTileUrl:function(i){var r=this._tileCoordsToNwSe(i),l=this._crs,f=Ft(l.project(r[0]),l.project(r[1])),v=f.min,b=f.max,F=(this._wmsVersion>=1.3&&this._crs===Lh?[v.y,v.x,b.y,b.x]:[v.x,v.y,b.x,b.y]).join(","),X=_s.prototype.getTileUrl.call(this,i);return X+x(this.wmsParams,X,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+F},setParams:function(i,r){return s(this.wmsParams,i),r||this.redraw(),this}});function sv(i,r){return new zh(i,r)}_s.WMS=zh,Bh.wms=sv;var ji=Ti.extend({options:{padding:.1},initialize:function(i){S(this,i),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Ht(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,r){var l=this._map.getZoomScale(r,this._zoom),f=this._map.getSize().multiplyBy(.5+this.options.padding),v=this._map.project(this._center,r),b=f.multiplyBy(-l).add(v).subtract(this._map._getNewPixelOrigin(i,r));Dt.any3d?Ue(this._container,b,l):de(this._container,b)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,r=this._map.getSize(),l=this._map.containerPointToLayerPoint(r.multiplyBy(-i)).round();this._bounds=new gt(l,l.add(r.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),kh=ji.extend({options:{tolerance:0},getEvents:function(){var i=ji.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){ji.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");te(i,"mousemove",this._onMouseMove,this),te(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),te(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){Y(this._redrawRequest),delete this._ctx,Zt(this._container),Le(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var r in this._layers)i=this._layers[r],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ji.prototype._update.call(this);var i=this._bounds,r=this._container,l=i.getSize(),f=Dt.retina?2:1;de(r,i.min),r.width=f*l.x,r.height=f*l.y,r.style.width=l.x+"px",r.style.height=l.y+"px",Dt.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){ji.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[u(i)]=i;var r=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=r),this._drawLast=r,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var r=i._order,l=r.next,f=r.prev;l?l.prev=f:this._drawLast=f,f?f.next=l:this._drawFirst=l,delete i._order,delete this._layers[u(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var r=i.options.dashArray.split(/[, ]+/),l=[],f,v;for(v=0;v<r.length;v++){if(f=Number(r[v]),isNaN(f))return;l.push(f)}i.options._dashArray=l}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||N(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var r=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new gt,this._redrawBounds.extend(i._pxBounds.min.subtract([r,r])),this._redrawBounds.extend(i._pxBounds.max.add([r,r]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var r=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,r.x,r.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,r=this._redrawBounds;if(this._ctx.save(),r){var l=r.getSize();this._ctx.beginPath(),this._ctx.rect(r.min.x,r.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var f=this._drawFirst;f;f=f.next)i=f.layer,(!r||i._pxBounds&&i._pxBounds.intersects(r))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,r){if(this._drawing){var l,f,v,b,F=i._parts,X=F.length,tt=this._ctx;if(X){for(tt.beginPath(),l=0;l<X;l++){for(f=0,v=F[l].length;f<v;f++)b=F[l][f],tt[f?"lineTo":"moveTo"](b.x,b.y);r&&tt.closePath()}this._fillStroke(tt,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var r=i._point,l=this._ctx,f=Math.max(Math.round(i._radius),1),v=(Math.max(Math.round(i._radiusY),1)||f)/f;v!==1&&(l.save(),l.scale(1,v)),l.beginPath(),l.arc(r.x,r.y/v,f,0,Math.PI*2,!1),v!==1&&l.restore(),this._fillStroke(l,i)}},_fillStroke:function(i,r){var l=r.options;l.fill&&(i.globalAlpha=l.fillOpacity,i.fillStyle=l.fillColor||l.color,i.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(i.setLineDash&&i.setLineDash(r.options&&r.options._dashArray||[]),i.globalAlpha=l.opacity,i.lineWidth=l.weight,i.strokeStyle=l.color,i.lineCap=l.lineCap,i.lineJoin=l.lineJoin,i.stroke())},_onClick:function(i){for(var r=this._map.mouseEventToLayerPoint(i),l,f,v=this._drawFirst;v;v=v.next)l=v.layer,l.options.interactive&&l._containsPoint(r)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(l))&&(f=l);this._fireEvent(f?[f]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var r=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,r)}},_handleMouseOut:function(i){var r=this._hoveredLayer;r&&(Pe(this._container,"leaflet-interactive"),this._fireEvent([r],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,r){if(!this._mouseHoverThrottled){for(var l,f,v=this._drawFirst;v;v=v.next)l=v.layer,l.options.interactive&&l._containsPoint(r)&&(f=l);f!==this._hoveredLayer&&(this._handleMouseOut(i),f&&(Ht(this._container,"leaflet-interactive"),this._fireEvent([f],i,"mouseover"),this._hoveredLayer=f)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(c(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,r,l){this._map._fireDOMEvent(r,l||r.type,i)},_bringToFront:function(i){var r=i._order;if(r){var l=r.next,f=r.prev;if(l)l.prev=f;else return;f?f.next=l:l&&(this._drawFirst=l),r.prev=this._drawLast,this._drawLast.next=r,r.next=null,this._drawLast=r,this._requestRedraw(i)}},_bringToBack:function(i){var r=i._order;if(r){var l=r.next,f=r.prev;if(f)f.next=l;else return;l?l.prev=f:f&&(this._drawLast=f),r.prev=null,r.next=this._drawFirst,this._drawFirst.prev=r,this._drawFirst=r,this._requestRedraw(i)}}});function Hh(i){return Dt.canvas?new kh(i):null}var $s=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),rv={_initContainer:function(){this._container=zt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(ji.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var r=i._container=$s("shape");Ht(r,"leaflet-vml-shape "+(this.options.className||"")),r.coordsize="1 1",i._path=$s("path"),r.appendChild(i._path),this._updateStyle(i),this._layers[u(i)]=i},_addPath:function(i){var r=i._container;this._container.appendChild(r),i.options.interactive&&i.addInteractiveTarget(r)},_removePath:function(i){var r=i._container;Zt(r),i.removeInteractiveTarget(r),delete this._layers[u(i)]},_updateStyle:function(i){var r=i._stroke,l=i._fill,f=i.options,v=i._container;v.stroked=!!f.stroke,v.filled=!!f.fill,f.stroke?(r||(r=i._stroke=$s("stroke")),v.appendChild(r),r.weight=f.weight+"px",r.color=f.color,r.opacity=f.opacity,f.dashArray?r.dashStyle=C(f.dashArray)?f.dashArray.join(" "):f.dashArray.replace(/( *, *)/g," "):r.dashStyle="",r.endcap=f.lineCap.replace("butt","flat"),r.joinstyle=f.lineJoin):r&&(v.removeChild(r),i._stroke=null),f.fill?(l||(l=i._fill=$s("fill")),v.appendChild(l),l.color=f.fillColor||f.color,l.opacity=f.fillOpacity):l&&(v.removeChild(l),i._fill=null)},_updateCircle:function(i){var r=i._point.round(),l=Math.round(i._radius),f=Math.round(i._radiusY||l);this._setPath(i,i._empty()?"M0 0":"AL "+r.x+","+r.y+" "+l+","+f+" 0,"+65535*360)},_setPath:function(i,r){i._path.v=r},_bringToFront:function(i){Ot(i._container)},_bringToBack:function(i){ye(i._container)}},Qr=Dt.vml?$s:kt,Xs=ji.extend({_initContainer:function(){this._container=Qr("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Qr("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Zt(this._container),Le(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ji.prototype._update.call(this);var i=this._bounds,r=i.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(r))&&(this._svgSize=r,l.setAttribute("width",r.x),l.setAttribute("height",r.y)),de(l,i.min),l.setAttribute("viewBox",[i.min.x,i.min.y,r.x,r.y].join(" ")),this.fire("update")}},_initPath:function(i){var r=i._path=Qr("path");i.options.className&&Ht(r,i.options.className),i.options.interactive&&Ht(r,"leaflet-interactive"),this._updateStyle(i),this._layers[u(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){Zt(i._path),i.removeInteractiveTarget(i._path),delete this._layers[u(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var r=i._path,l=i.options;r&&(l.stroke?(r.setAttribute("stroke",l.color),r.setAttribute("stroke-opacity",l.opacity),r.setAttribute("stroke-width",l.weight),r.setAttribute("stroke-linecap",l.lineCap),r.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?r.setAttribute("stroke-dasharray",l.dashArray):r.removeAttribute("stroke-dasharray"),l.dashOffset?r.setAttribute("stroke-dashoffset",l.dashOffset):r.removeAttribute("stroke-dashoffset")):r.setAttribute("stroke","none"),l.fill?(r.setAttribute("fill",l.fillColor||l.color),r.setAttribute("fill-opacity",l.fillOpacity),r.setAttribute("fill-rule",l.fillRule||"evenodd")):r.setAttribute("fill","none"))},_updatePoly:function(i,r){this._setPath(i,fe(i._parts,r))},_updateCircle:function(i){var r=i._point,l=Math.max(Math.round(i._radius),1),f=Math.max(Math.round(i._radiusY),1)||l,v="a"+l+","+f+" 0 1,0 ",b=i._empty()?"M0 0":"M"+(r.x-l)+","+r.y+v+l*2+",0 "+v+-l*2+",0 ";this._setPath(i,b)},_setPath:function(i,r){i._path.setAttribute("d",r)},_bringToFront:function(i){Ot(i._path)},_bringToBack:function(i){ye(i._path)}});Dt.vml&&Xs.include(rv);function Gh(i){return Dt.svg||Dt.vml?new Xs(i):null}me.include({getRenderer:function(i){var r=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return r||(r=this._renderer=this._createRenderer()),this.hasLayer(r)||this.addLayer(r),r},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var r=this._paneRenderers[i];return r===void 0&&(r=this._createRenderer({pane:i}),this._paneRenderers[i]=r),r},_createRenderer:function(i){return this.options.preferCanvas&&Hh(i)||Gh(i)}});var Vh=ps.extend({initialize:function(i,r){ps.prototype.initialize.call(this,this._boundsToLatLngs(i),r)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=Yt(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function ov(i,r){return new Vh(i,r)}Xs.create=Qr,Xs.pointsToPath=fe,Yi.geometryToLayer=Xr,Yi.coordsToLatLng=yl,Yi.coordsToLatLngs=Zr,Yi.latLngToCoords=xl,Yi.latLngsToCoords=qr,Yi.getFeature=ms,Yi.asFeature=Yr,me.mergeOptions({boxZoom:!0});var Wh=Ui.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){te(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Le(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Zt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),di(),il(),this._startPoint=this._map.mouseEventToContainerPoint(i),te(document,{contextmenu:Nn,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=zt("div","leaflet-zoom-box",this._container),Ht(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var r=new gt(this._point,this._startPoint),l=r.getSize();de(this._box,r.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(Zt(this._box),Pe(this._container,"leaflet-crosshair")),Bs(),nl(),Le(document,{contextmenu:Nn,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(c(this._resetState,this),0);var r=new re(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(r).fire("boxzoomend",{boxZoomBounds:r})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});me.addInitHook("addHandler","boxZoom",Wh),me.mergeOptions({doubleClickZoom:!0});var $h=Ui.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var r=this._map,l=r.getZoom(),f=r.options.zoomDelta,v=i.originalEvent.shiftKey?l-f:l+f;r.options.doubleClickZoom==="center"?r.setZoom(v):r.setZoomAround(i.containerPoint,v)}});me.addInitHook("addHandler","doubleClickZoom",$h),me.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Xh=Ui.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new fn(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}Ht(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Pe(this._map._container,"leaflet-grab"),Pe(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var r=Yt(this._map.options.maxBounds);this._offsetLimit=Ft(this._map.latLngToContainerPoint(r.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(r.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var r=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(r),this._prunePositions(r)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),r=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=r.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,r){return i-(i-r)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),r=this._offsetLimit;i.x<r.min.x&&(i.x=this._viscousLimit(i.x,r.min.x)),i.y<r.min.y&&(i.y=this._viscousLimit(i.y,r.min.y)),i.x>r.max.x&&(i.x=this._viscousLimit(i.x,r.max.x)),i.y>r.max.y&&(i.y=this._viscousLimit(i.y,r.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,r=Math.round(i/2),l=this._initialWorldOffset,f=this._draggable._newPos.x,v=(f-r+l)%i+r-l,b=(f+r+l)%i-r-l,F=Math.abs(v+l)<Math.abs(b+l)?v:b;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=F},_onDragEnd:function(i){var r=this._map,l=r.options,f=!l.inertia||i.noInertia||this._times.length<2;if(r.fire("dragend",i),f)r.fire("moveend");else{this._prunePositions(+new Date);var v=this._lastPos.subtract(this._positions[0]),b=(this._lastTime-this._times[0])/1e3,F=l.easeLinearity,X=v.multiplyBy(F/b),tt=X.distanceTo([0,0]),at=Math.min(l.inertiaMaxSpeed,tt),bt=X.multiplyBy(at/tt),qt=at/(l.inertiaDeceleration*F),le=bt.multiplyBy(-qt/2).round();!le.x&&!le.y?r.fire("moveend"):(le=r._limitOffset(le,r.options.maxBounds),N(function(){r.panBy(le,{duration:qt,easeLinearity:F,noMoveStart:!0,animate:!0})}))}}});me.addInitHook("addHandler","dragging",Xh),me.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Zh=Ui.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),te(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Le(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,r=document.documentElement,l=i.scrollTop||r.scrollTop,f=i.scrollLeft||r.scrollLeft;this._map._container.focus(),window.scrollTo(f,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var r=this._panKeys={},l=this.keyCodes,f,v;for(f=0,v=l.left.length;f<v;f++)r[l.left[f]]=[-1*i,0];for(f=0,v=l.right.length;f<v;f++)r[l.right[f]]=[i,0];for(f=0,v=l.down.length;f<v;f++)r[l.down[f]]=[0,i];for(f=0,v=l.up.length;f<v;f++)r[l.up[f]]=[0,-1*i]},_setZoomDelta:function(i){var r=this._zoomKeys={},l=this.keyCodes,f,v;for(f=0,v=l.zoomIn.length;f<v;f++)r[l.zoomIn[f]]=i;for(f=0,v=l.zoomOut.length;f<v;f++)r[l.zoomOut[f]]=-i},_addHooks:function(){te(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Le(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var r=i.keyCode,l=this._map,f;if(r in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(f=this._panKeys[r],i.shiftKey&&(f=st(f).multiplyBy(3)),l.options.maxBounds&&(f=l._limitOffset(st(f),l.options.maxBounds)),l.options.worldCopyJump){var v=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(f)));l.panTo(v)}else l.panBy(f)}else if(r in this._zoomKeys)l.setZoom(l.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[r]);else if(r===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;Nn(i)}}});me.addInitHook("addHandler","keyboard",Zh),me.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var qh=Ui.extend({addHooks:function(){te(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Le(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var r=vh(i),l=this._map.options.wheelDebounceTime;this._delta+=r,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var f=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(c(this._performZoom,this),f),Nn(i)},_performZoom:function(){var i=this._map,r=i.getZoom(),l=this._map.options.zoomSnap||0;i._stop();var f=this._delta/(this._map.options.wheelPxPerZoomLevel*4),v=4*Math.log(2/(1+Math.exp(-Math.abs(f))))/Math.LN2,b=l?Math.ceil(v/l)*l:v,F=i._limitZoom(r+(this._delta>0?b:-b))-r;this._delta=0,this._startTime=null,F&&(i.options.scrollWheelZoom==="center"?i.setZoom(r+F):i.setZoomAround(this._lastMousePos,r+F))}});me.addInitHook("addHandler","scrollWheelZoom",qh);var av=600;me.mergeOptions({tapHold:Dt.touchNative&&Dt.safari&&Dt.mobile,tapTolerance:15});var Yh=Ui.extend({addHooks:function(){te(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Le(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var r=i.touches[0];this._startPos=this._newPos=new V(r.clientX,r.clientY),this._holdTimeout=setTimeout(c(function(){this._cancel(),this._isTapValid()&&(te(document,"touchend",Xe),te(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",r))},this),av),te(document,"touchend touchcancel contextmenu",this._cancel,this),te(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){Le(document,"touchend",Xe),Le(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),Le(document,"touchend touchcancel contextmenu",this._cancel,this),Le(document,"touchmove",this._onMove,this)},_onMove:function(i){var r=i.touches[0];this._newPos=new V(r.clientX,r.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,r){var l=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:r.screenX,screenY:r.screenY,clientX:r.clientX,clientY:r.clientY});l._simulated=!0,r.target.dispatchEvent(l)}});me.addInitHook("addHandler","tapHold",Yh),me.mergeOptions({touchZoom:Dt.touch,bounceAtZoomLimits:!0});var jh=Ui.extend({addHooks:function(){Ht(this._map._container,"leaflet-touch-zoom"),te(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Pe(this._map._container,"leaflet-touch-zoom"),Le(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var r=this._map;if(!(!i.touches||i.touches.length!==2||r._animatingZoom||this._zooming)){var l=r.mouseEventToContainerPoint(i.touches[0]),f=r.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=r.getSize()._divideBy(2),this._startLatLng=r.containerPointToLatLng(this._centerPoint),r.options.touchZoom!=="center"&&(this._pinchStartLatLng=r.containerPointToLatLng(l.add(f)._divideBy(2))),this._startDist=l.distanceTo(f),this._startZoom=r.getZoom(),this._moved=!1,this._zooming=!0,r._stop(),te(document,"touchmove",this._onTouchMove,this),te(document,"touchend touchcancel",this._onTouchEnd,this),Xe(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var r=this._map,l=r.mouseEventToContainerPoint(i.touches[0]),f=r.mouseEventToContainerPoint(i.touches[1]),v=l.distanceTo(f)/this._startDist;if(this._zoom=r.getScaleZoom(v,this._startZoom),!r.options.bounceAtZoomLimits&&(this._zoom<r.getMinZoom()&&v<1||this._zoom>r.getMaxZoom()&&v>1)&&(this._zoom=r._limitZoom(this._zoom)),r.options.touchZoom==="center"){if(this._center=this._startLatLng,v===1)return}else{var b=l._add(f)._divideBy(2)._subtract(this._centerPoint);if(v===1&&b.x===0&&b.y===0)return;this._center=r.unproject(r.project(this._pinchStartLatLng,this._zoom).subtract(b),this._zoom)}this._moved||(r._moveStart(!0,!1),this._moved=!0),Y(this._animRequest);var F=c(r._move,r,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=N(F,this,!0),Xe(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,Y(this._animRequest),Le(document,"touchmove",this._onTouchMove,this),Le(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});me.addInitHook("addHandler","touchZoom",jh),me.BoxZoom=Wh,me.DoubleClickZoom=$h,me.Drag=Xh,me.Keyboard=Zh,me.ScrollWheelZoom=qh,me.TapHold=Yh,me.TouchZoom=jh,e.Bounds=gt,e.Browser=Dt,e.CRS=dt,e.Canvas=kh,e.Circle=vl,e.CircleMarker=$r,e.Class=J,e.Control=Ei,e.DivIcon=Fh,e.DivOverlay=Oi,e.DomEvent=Tg,e.DomUtil=bg,e.Draggable=fn,e.Evented=ct,e.FeatureGroup=Zi,e.GeoJSON=Yi,e.GridLayer=Ws,e.Handler=Ui,e.Icon=fs,e.ImageOverlay=jr,e.LatLng=j,e.LatLngBounds=re,e.Layer=Ti,e.LayerGroup=ds,e.LineUtil=Bg,e.Map=me,e.Marker=Wr,e.Mixin=Dg,e.Path=pn,e.Point=V,e.PolyUtil=Ig,e.Polygon=ps,e.Polyline=qi,e.Popup=Kr,e.PosAnimation=yh,e.Projection=zg,e.Rectangle=Vh,e.Renderer=ji,e.SVG=Xs,e.SVGOverlay=Oh,e.TileLayer=_s,e.Tooltip=Jr,e.Transformation=Ie,e.Util=et,e.VideoOverlay=Uh,e.bind=c,e.bounds=Ft,e.canvas=Hh,e.circle=Zg,e.circleMarker=Xg,e.control=Hs,e.divIcon=iv,e.extend=s,e.featureGroup=Vg,e.geoJSON=Nh,e.geoJson=jg,e.gridLayer=nv,e.icon=Wg,e.imageOverlay=Kg,e.latLng=ot,e.latLngBounds=Yt,e.layerGroup=Gg,e.map=wg,e.marker=$g,e.point=st,e.polygon=Yg,e.polyline=qg,e.popup=tv,e.rectangle=ov,e.setOptions=S,e.stamp=u,e.svg=Gh,e.svgOverlay=Qg,e.tileLayer=Bh,e.tooltip=ev,e.transformation=oe,e.version=n,e.videoOverlay=Jg;var lv=window.L;e.noConflict=function(){return window.L=lv,this},window.L=e}))})(Ns,Ns.exports)),Ns.exports}var fg=dg();const Te=hg(fg),pg=Te.divIcon({className:"office-dot-shell",html:'<span class="office-dot"></span>',iconSize:[18,18],iconAnchor:[9,9],tooltipAnchor:[0,-10]}),mg=o=>Te.divIcon({className:"data-center-marker-shell",html:`<span class="data-center-marker ${o==="Operational"?"is-live":"is-future"}"><i></i></span>`,iconSize:[24,24],iconAnchor:[12,12],tooltipAnchor:[0,-12]});class _g{constructor(t,e,n={}){this.root=t,this.locations=e.filter(s=>s.status==="map_ready"&&s.coordinateAccuracy==="building"&&Number.isFinite(s.latitude)&&Number.isFinite(s.longitude)),this.dataCenters=(n.dataCenters||[]).filter(s=>Number.isFinite(s.latitude)&&Number.isFinite(s.longitude)),this.cables=n.cables||[],this.cableRoutes=n.routes||[],this.cableLandings=n.landings||[],this.chinaNetworks=n.chinaNetworks||[],this.chinaNodes=n.chinaNodes||[],this.chinaLinks=n.chinaLinks||[],this.internetExchanges=(n.internetExchanges||[]).filter(s=>Number.isFinite(s.latitude)&&Number.isFinite(s.longitude)),this.modelInferenceRegions=(n.modelInferenceRegions||[]).filter(s=>Number.isFinite(s.latitude)&&Number.isFinite(s.longitude)),this.modelNetworkLinks=n.modelNetworkLinks||[],this.modelOrganizationSites=(n.modelOrganizationSites||[]).filter(s=>Number.isFinite(s.latitude)&&Number.isFinite(s.longitude)),this.markers=[],this.dataCenterMarkers=[],this.cableLines=[],this.chinaFiberLines=[],this.modelRegionMarkers=[],this.modelPathLines=[],this.modelOfficeMarkers=[],this.selectedCompany=null,t.querySelector("#officeMapReset").addEventListener("click",()=>this.clearSelection()),t.querySelector("#chinaMapFocus")?.addEventListener("click",()=>this.focusChina()),t.querySelectorAll("[data-map-layer]").forEach(s=>s.addEventListener("click",()=>this.toggleLayer(s))),t.querySelector("#cableDetail").addEventListener("click",s=>{s.target.closest("[data-close-cable]")&&(this.clearDataCenterSelection(),this.clearSelection(!1),this.clearCableSelection(),this.clearChinaNetwork(),this.clearModelSelection())}),this.setupModelSelector()}ensureMap(){if(this.map)return;this.map=Te.map(this.root.querySelector("#officeMap"),{zoomControl:!1,minZoom:2,maxZoom:20,worldCopyJump:!0,preferCanvas:!0}),Te.control.zoom({position:"bottomright"}).addTo(this.map),Te.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",{maxZoom:20,attribution:"Tiles &copy; Esri and contributors"}).addTo(this.map),this.dataCenterLayer=Te.layerGroup().addTo(this.map),this.officeLayer=Te.layerGroup(),this.cableLayer=Te.layerGroup(),this.chinaFiberLayer=Te.layerGroup(),this.exchangeLayer=Te.layerGroup(),this.modelInferenceLayer=Te.layerGroup(),this.cableRenderer=Te.canvas({padding:.5}),this.chinaFiberRenderer=Te.canvas({padding:.5}),this.exchangeRenderer=Te.canvas({padding:.5}),this.modelRenderer=Te.svg({padding:.5});const t=[];this.addDataCenters(t);for(const c of this.locations){const h=Te.marker([c.latitude,c.longitude],{icon:pg,riseOnHover:!0,keyboard:!0,title:c.companyName});h.companyId=c.companyId,h.bindTooltip(c.companyName,{direction:"top",offset:[0,-7],className:"office-company-tooltip"}),h.on("click",()=>this.selectCompany(c.companyId)),h.addTo(this.officeLayer),this.markers.push(h)}this.addCableRoutes([]),this.addChinaFiber([]),this.addInternetExchanges([]),this.addModelInfrastructure([]);const e=this.dataCenters.filter(c=>c.country==="China").map(c=>[c.latitude,c.longitude]);e.length?this.map.fitBounds(e,{padding:[55,55],maxZoom:5}):t.length?this.map.fitBounds(t,{padding:[55,55],maxZoom:4}):this.map.setView([35,105],4);const n=this.dataCenters.filter(c=>c.country==="China"),s=new Set(n.map(c=>c.operator)),a=n.reduce((c,h)=>c+(h.facilities||1),0);this.root.querySelector("#officeMapStats").textContent=`${n.length} mainland footprints · ${a} facilities / zones represented · ${s.size} operators`}focusChina(){const t=this.dataCenters.filter(e=>e.country==="China");this.clearDataCenterSelection(!1),t.length&&this.map.fitBounds(t.map(e=>[e.latitude,e.longitude]),{padding:[55,55],maxZoom:5})}addDataCenters(t){for(const e of this.dataCenters){const n=Te.marker([e.latitude,e.longitude],{icon:mg(e.status),riseOnHover:!0,keyboard:!0,title:`${e.name}, ${e.city}`});n.siteId=e.id,n.bindTooltip(`<b>${this.escape(e.name)}</b><br>${this.escape(e.city)}, ${this.escape(e.country)} · ${this.escape(e.status)}`,{direction:"top",offset:[0,-9],className:"office-company-tooltip"}),n.on("click",()=>this.selectDataCenter(e.id)),n.addTo(this.dataCenterLayer),this.dataCenterMarkers.push(n),t.push([e.latitude,e.longitude])}}selectDataCenter(t){const e=this.dataCenters.find(c=>c.id===t);if(!e)return;this.clearSelection(!1),this.clearCableSelection(!1),this.clearChinaNetwork(!1),this.clearModelSelection(!1);for(const c of this.dataCenterMarkers)c.getElement()?.classList.toggle("is-muted",c.siteId!==t);this.selectedDataCenter=t,this.map.flyTo([e.latitude,e.longitude],Math.max(this.map.getZoom(),7),{duration:.5});const n=this.root.querySelector("#cableDetail"),s=/^https?:\/\//.test(e.source_url)?e.source_url:"",a=e.coordinate_precision==="locality"?"Locality-level":e.coordinate_precision==="city"?"City-level":e.coordinate_precision==="region"?"Regional":"Metro-level";n.innerHTML=`<button type="button" data-close-cable aria-label="Close campus details">×</button><p class="eyebrow">${this.escape(e.status)} · ${this.escape(e.campus_type)}</p><h2>${this.escape(e.name)}</h2><p class="detail-lede">${this.escape(e.description)}</p><dl><div><dt>Operator</dt><dd>${this.escape(e.operator)}</dd></div><div><dt>Market</dt><dd>${this.escape(e.city)}, ${this.escape(e.country)}</dd></div>${e.capacity_mw?`<div><dt>Published capacity</dt><dd>${e.capacity_mw.toLocaleString()} MW+</dd></div>`:""}${e.facilities?`<div><dt>Facilities represented</dt><dd>${e.facilities}</dd></div>`:""}<div><dt>Map precision</dt><dd>${a}</dd></div><div><dt>Services</dt><dd>${this.escape(e.services)}</dd></div></dl>${s?`<a href="${this.escape(s)}" target="_blank" rel="noreferrer">Open operator source ↗</a>`:""}<small>Source checked ${this.escape(e.verified_on)}. ${this.escape(e.notes)} A marker identifies a documented campus or grouped metro footprint; it does not imply ownership of the underlying land or disclose a private building location.</small>`,n.hidden=!1}clearDataCenterSelection(t=!0){this.selectedDataCenter=null;for(const e of this.dataCenterMarkers)e.getElement()?.classList.remove("is-muted");t&&(this.root.querySelector("#cableDetail").hidden=!0)}setupModelSelector(){const t=this.root.querySelector("#mapModelSelect");if(!t)return;const e=[...new Map([...this.modelInferenceRegions,...this.modelOrganizationSites].map(n=>[n.model_id,n.model_name])).entries()].sort((n,s)=>n[1].localeCompare(s[1]));t.insertAdjacentHTML("beforeend",e.map(([n,s])=>`<option value="${this.escape(n)}">${this.escape(s)}</option>`).join("")),t.addEventListener("change",()=>t.value?this.selectModel(t.value):this.clearModelSelection())}addModelInfrastructure(t){const e=new Map([...this.modelInferenceRegions,...this.modelOrganizationSites].map(n=>[n.id,n]));for(const n of this.modelNetworkLinks){const s=e.get(n.source_region),a=e.get(n.target_region);if(!s||!a)continue;const c=Te.polyline([[s.latitude,s.longitude],[a.latitude,a.longitude]],{renderer:this.modelRenderer,className:"model-flow-line",color:"#b59cff",weight:2.2,opacity:.12,dashArray:"4 12",bubblingMouseEvents:!1});c.modelFamily=n.model_family,c.baseStyle={color:"#b59cff",weight:2.2,opacity:.12,dashArray:"4 12"},c.bindTooltip(`${s.region_name||s.site_name} → ${a.region_name||a.site_name} · ${n.flow_label}`,{sticky:!0,className:"office-company-tooltip"}),c.addTo(this.modelInferenceLayer),this.modelPathLines.push(c)}for(const n of this.modelInferenceRegions){const s=n.workload_role==="managed_training_and_inference",a=Te.circleMarker([n.latitude,n.longitude],{renderer:this.modelRenderer,radius:s?7:6,weight:2,color:s?"#fff0b8":"#c8ecff",fillColor:s?"#e6b83f":"#369bd2",fillOpacity:.42,opacity:.5});a.modelId=n.model_id,a.regionId=n.id,a.training=s,a.bindTooltip(`${n.model_name} · ${n.region_name} · ${s?"managed training + inference":"inference service"}`,{direction:"top",className:"office-company-tooltip"}),a.on("click",()=>this.selectModel(n.model_id,n.id)),a.addTo(this.modelInferenceLayer),this.modelRegionMarkers.push(a),t.push([n.latitude,n.longitude])}for(const n of this.modelOrganizationSites){const s=Te.circleMarker([n.latitude,n.longitude],{renderer:this.modelRenderer,radius:6,weight:2,color:"#ffe4bd",fillColor:"#ee9c46",fillOpacity:.42,opacity:.5});s.modelId=n.model_id,s.siteId=n.id,s.bindTooltip(`${n.organization} · ${n.site_name}`,{direction:"top",className:"office-company-tooltip"}),s.on("click",()=>this.selectModel(n.model_id,n.id)),s.addTo(this.modelInferenceLayer),this.modelOfficeMarkers.push(s),t.push([n.latitude,n.longitude])}}selectModel(t,e){const n=this.modelInferenceRegions.filter(S=>S.model_id===t),s=this.modelOrganizationSites.filter(S=>S.model_id===t);if(!n.length&&!s.length)return;this.clearSelection(!1),this.clearCableSelection(!1),this.clearChinaNetwork(!1),this.selectedModel=t,this.root.classList.add("model-isolated");for(const S of[this.dataCenterLayer,this.officeLayer,this.cableLayer,this.chinaFiberLayer,this.exchangeLayer])S.removeFrom(this.map);this.map.hasLayer(this.modelInferenceLayer)||this.modelInferenceLayer.addTo(this.map);const a=t.startsWith("qwen")?"qwen":t;for(const S of this.modelRegionMarkers)S.setStyle(S.modelId===t?{radius:S.training?9:8,weight:2.5,opacity:1,fillOpacity:.92}:{radius:4,weight:1,opacity:.08,fillOpacity:.04});for(const S of this.modelOfficeMarkers)S.setStyle(S.modelId===t?{radius:7,weight:2.5,opacity:1,fillOpacity:.95}:{radius:4,weight:1,opacity:.08,fillOpacity:.04});for(const S of this.modelPathLines)S.setStyle(S.modelFamily===a?{weight:3.2,opacity:.9}:{weight:1,opacity:.025});const c=this.root.querySelector("#mapModelSelect");c&&(c.value=t);const h=[...this.modelRegionMarkers,...this.modelOfficeMarkers].filter(S=>S.modelId===t),u=[...this.modelInferenceRegions,...this.modelOrganizationSites].find(S=>S.id===e);u?this.map.flyTo([u.latitude,u.longitude],Math.max(this.map.getZoom(),5),{duration:.5}):h.length&&this.map.fitBounds(Te.featureGroup(h).getBounds(),{padding:[70,340],maxZoom:5});const d=n[0]?.model_name||s[0].model_name,p=n[0]?.provider||s[0].organization,_=this.root.querySelector("#cableDetail"),m=n.filter(S=>S.workload_role==="managed_training_and_inference"),y=n.filter(S=>S.workload_role!=="managed_training_and_inference"),M=m[0]?.workload_source_url||n[0]?.source_url||s[0].source_url;_.innerHTML=`<button type="button" data-close-cable aria-label="Close model infrastructure details">×</button><p class="eyebrow">Isolated model footprint</p><h2>${this.escape(d)}</h2><dl><div><dt>Provider</dt><dd>${this.escape(p)}</dd></div><div><dt>Offices</dt><dd><i class="site-swatch office"></i>${s.length} listed</dd></div><div><dt>Training + inference</dt><dd><i class="site-swatch training"></i>${m.length} managed regions</dd></div><div><dt>Inference / access</dt><dd><i class="site-swatch inference"></i>${y.length} published regions</dd></div></dl>${m.length?`<section><h3>Training-capable regions</h3><p>${m.map(S=>`${this.escape(S.region_name)} <small>${this.escape(S.deployment_scope)}</small>`).join(" · ")}</p></section>`:""}${y.length?`<section><h3>Inference or API-access regions</h3><p>${y.map(S=>`${this.escape(S.region_name)} <small>${this.escape(S.workload_role==="inference_access_region"?"access point—not confirmed serving facility":S.deployment_scope)}</small>`).join(" · ")}</p></section>`:"<section><h3>Infrastructure location undisclosed</h3><p>The provider publishes model API access but no sufficiently specific training or inference region that can be responsibly plotted.</p></section>"}<section><h3>Animated flow</h3><p>Moving dashes travel from each CSV source toward its target. They show an illustrative service or organizational direction—not live packet telemetry.</p></section><a href="${this.escape(M)}" target="_blank" rel="noreferrer">Open primary documentation ↗</a><small>Office, API access, service region, and physical serving facility are different claims. The map labels each separately and never upgrades an endpoint into a data center without evidence.</small>`,_.hidden=!1}clearModelSelection(t=!0){const e=!!this.selectedModel;this.selectedModel=null,this.root.classList.remove("model-isolated");for(const s of this.modelRegionMarkers)s.setStyle({radius:s.training?7:6,weight:2,opacity:.5,fillOpacity:.42});for(const s of this.modelOfficeMarkers)s.setStyle({radius:6,weight:2,opacity:.5,fillOpacity:.42});for(const s of this.modelPathLines)s.setStyle(s.baseStyle);const n=this.root.querySelector("#mapModelSelect");if(n&&(n.value=""),e&&this.map){const s={"data-centers":this.dataCenterLayer,offices:this.officeLayer,cables:this.cableLayer,"china-fiber":this.chinaFiberLayer,exchanges:this.exchangeLayer,"model-inference":this.modelInferenceLayer};for(const a of this.root.querySelectorAll("[data-map-layer]"))a.getAttribute("aria-pressed")==="true"&&s[a.dataset.mapLayer]?.addTo(this.map)}t&&(this.root.querySelector("#cableDetail").hidden=!0)}addCableRoutes(t){const e=new Map(this.cables.map(c=>[c.id,c])),n=[];let s=null,a=-1;for(const c of this.cableRoutes)!Number.isFinite(c.latitude)||!Number.isFinite(c.longitude)||((!s||s[0].cable_id!==c.cable_id||s[0].segment_id!==c.segment_id||c.point_order<=a)&&(s=[],n.push(s)),s.push(c),a=c.point_order);for(const c of n){const h=e.get(c[0].cable_id);if(!h)continue;const u=[];let d=[];for(const p of c){const _=d.at(-1);_&&Math.abs(_[1]-p.longitude)>180&&(u.push(d),d=[]),d.push([p.latitude,p.longitude])}d.length&&u.push(d);for(const p of u){if(p.length<2)continue;const _=Te.polyline(p,{renderer:this.cableRenderer,color:h.is_planned?"#d9a45f":"#3cb8c3",weight:h.is_planned?1.25:1.5,opacity:h.is_planned?.55:.72,dashArray:h.is_planned?"5 5":null,bubblingMouseEvents:!1});_.cableId=h.id,_.bindTooltip(h.name,{sticky:!0,className:"office-company-tooltip"}),_.on("click",()=>this.selectCable(h.id)),_.addTo(this.cableLayer),this.cableLines.push(_),t.push(...p)}}}addChinaFiber(t){const e=new Map(this.chinaNodes.map(s=>[s.id,s])),n=new Map(this.chinaNetworks.map(s=>[s.id,s]));for(const s of this.chinaLinks){const a=e.get(s.source_node),c=e.get(s.target_node),h=n.get(s.network_id);if(!a||!c||!h)continue;const u=s.confidence==="logical",d=Te.polyline([[a.latitude,a.longitude],[c.latitude,c.longitude]],{renderer:this.chinaFiberRenderer,color:h.color,weight:u?2:2.6,opacity:u?.72:.9,dashArray:u?"3 7":null,bubblingMouseEvents:!1});d.networkId=h.id,d.baseStyle={color:h.color,weight:u?2:2.6,opacity:u?.72:.9,dashArray:u?"3 7":null},d.bindTooltip(`${h.name} · ${u?"logical connection":"documented topology"}`,{sticky:!0,className:"office-company-tooltip"}),d.on("click",()=>this.selectChinaNetwork(h.id)),d.addTo(this.chinaFiberLayer),this.chinaFiberLines.push(d)}for(const s of this.chinaNodes){const a=Te.circleMarker([s.latitude,s.longitude],{renderer:this.chinaFiberRenderer,radius:4,weight:1.5,color:"#f5d88b",fillColor:"#151b1b",fillOpacity:1,opacity:.9});a.bindTooltip(`${s.name} · ${s.node_role}`,{direction:"top",className:"office-company-tooltip"}),a.addTo(this.chinaFiberLayer),t.push([s.latitude,s.longitude])}}addInternetExchanges(t){for(const e of this.internetExchanges){const n=e.ctry==="China",s=Math.min(7,2.5+Math.log10(e.participants+1)),a=Te.circleMarker([e.latitude,e.longitude],{renderer:this.exchangeRenderer,radius:s,weight:1.2,color:n?"#ffd1fa":"#e8b4ef",fillColor:n?"#ef6ed7":"#b75bd0",fillOpacity:n?.95:.7,opacity:.9});a.exchangeId=e.id,a.bindTooltip(`${e.name} · ${e.cit}, ${e.ctry}`,{direction:"top",className:"office-company-tooltip"}),a.on("click",()=>this.selectInternetExchange(e.id)),a.addTo(this.exchangeLayer),t.push([e.latitude,e.longitude])}}selectInternetExchange(t){const e=this.internetExchanges.find(c=>c.id===t);if(!e)return;this.clearSelection(!1),this.clearCableSelection(!1),this.clearChinaNetwork(!1),this.map.flyTo([e.latitude,e.longitude],Math.max(this.map.getZoom(),6),{duration:.5});const n=e.date&&e.date!=="0"?`${e.date.slice(0,4)}${e.date.slice(4,6)!=="00"?`-${e.date.slice(4,6)}`:""}`:"Not listed",s=this.root.querySelector("#cableDetail"),a=/^https?:\/\//.test(e.url)?e.url:"";s.innerHTML=`<button type="button" data-close-cable aria-label="Close exchange details">×</button><p class="eyebrow">Internet exchange point</p><h2>${this.escape(e.name)}</h2><dl><div><dt>Location</dt><dd>${this.escape(e.cit)}, ${this.escape(e.ctry)}</dd></div><div><dt>Region</dt><dd>${this.escape(e.reg)}</dd></div><div><dt>Participants</dt><dd>${e.participants||"Not listed"}</dd></div><div><dt>Prefixes</dt><dd>${e.prefixes?e.prefixes.toLocaleString():"Not listed"}</dd></div><div><dt>Established</dt><dd>${n}</dd></div><div><dt>Directory updated</dt><dd>${this.escape(e.updt||"Not listed")}</dd></div></dl>${a?`<a href="${this.escape(a)}" target="_blank" rel="noreferrer">Exchange website ↗</a>`:""}<small>City-level exchange location from Packet Clearing House's active IXP directory. A plotted point may represent a distributed exchange with multiple facilities and is not necessarily a single building. Data: PCH · CC BY-NC-SA 3.0.</small>`,s.hidden=!1}selectChinaNetwork(t){this.selectedChinaNetwork=t,this.clearSelection(!1),this.clearCableSelection(!1);const e=this.chinaNetworks.find(p=>p.id===t),n=this.chinaLinks.filter(p=>p.network_id===t);for(const p of this.chinaFiberLines)p.setStyle(p.networkId===t?{weight:4,opacity:1}:{weight:1,opacity:.06});const s=this.chinaFiberLines.filter(p=>p.networkId===t);s.length&&this.map.fitBounds(Te.featureGroup(s).getBounds(),{padding:[70,340],maxZoom:6});const a=new Set(n.flatMap(p=>[p.source_node,p.target_node])),c=this.chinaNodes.filter(p=>a.has(p.id)).map(p=>p.name),h=n.filter(p=>p.confidence==="documented_topology").length,u=n.length-h,d=this.root.querySelector("#cableDetail");d.innerHTML=`<button type="button" data-close-cable aria-label="Close network details">×</button><p class="eyebrow">China terrestrial fiber</p><h2>${this.escape(e.name)}</h2><dl><div><dt>Operator</dt><dd>${this.escape(e.operator)}</dd></div><div><dt>Network type</dt><dd>${this.escape(e.network_type)}</dd></div><div><dt>Displayed topology</dt><dd>${h} documented · ${u} logical links</dd></div></dl><section><h3>${c.length} mapped backbone nodes</h3><p>${c.map(p=>this.escape(p)).join(" · ")}</p></section><section><h3>Interpretation</h3><p>${this.escape(e.description)}</p></section><a href="${this.escape(e.source_url)}" target="_blank" rel="noreferrer">Open primary source ↗</a><small>Solid lines represent a published topology. Dashed lines represent known or strongly supported logical connectivity only; they do not show conduit, right-of-way, or precise fiber position.</small>`,d.hidden=!1}clearChinaNetwork(t=!0){this.selectedChinaNetwork=null;for(const e of this.chinaFiberLines)e.setStyle(e.baseStyle);t&&(this.root.querySelector("#cableDetail").hidden=!0)}selectCable(t){this.selectedCable=t,this.clearSelection(!1),this.clearChinaNetwork();const e=this.cables.find(u=>u.id===t),n=this.cableLines.filter(u=>u.cableId===t);for(const u of this.cableLines)u.setStyle(u.cableId===t?{weight:4,opacity:1}:{weight:1,opacity:.08});n.length&&this.map.fitBounds(Te.featureGroup(n).getBounds(),{padding:[70,340],maxZoom:7});const s=this.cableLandings.filter(u=>u.cable_id===t),a=this.root.querySelector("#cableDetail"),c=u=>u||"Not listed",h=/^https?:\/\//.test(e.url)?e.url:"";a.innerHTML=`<button type="button" data-close-cable aria-label="Close cable details">×</button><p class="eyebrow">${e.is_planned?"Planned system":"In service"}</p><h2>${this.escape(e.name)}</h2><dl><div><dt>Ready for service</dt><dd>${this.escape(c(e.rfs))}</dd></div><div><dt>Length</dt><dd>${this.escape(c(e.length_raw))}</dd></div><div><dt>Owners</dt><dd>${this.escape(c(e.owners))}</dd></div><div><dt>Suppliers</dt><dd>${this.escape(c(e.suppliers))}</dd></div></dl><section><h3>${s.length} landing points</h3><p>${s.map(u=>this.escape(u.landing_point_name)).join(" · ")}</p></section>${h?`<a href="${this.escape(h)}" target="_blank" rel="noreferrer">Official cable website ↗</a>`:""}<small>Route is a stylized representation, not a precise seabed location. Data: TeleGeography via the Undersea Cables Dataset, March 2026 · CC BY-NC-SA 3.0.</small>`,a.hidden=!1}clearCableSelection(t=!0){this.selectedCable=null;for(const e of this.cableLines){const n=this.cables.find(s=>s.id===e.cableId);e.setStyle({color:n?.is_planned?"#d9a45f":"#3cb8c3",weight:n?.is_planned?1.25:1.5,opacity:n?.is_planned?.55:.72})}t&&(this.root.querySelector("#cableDetail").hidden=!0)}toggleLayer(t){if(this.selectedModel&&t.dataset.mapLayer!=="model-inference")return;const e=t.dataset.mapLayer,n=t.getAttribute("aria-pressed")!=="true";t.setAttribute("aria-pressed",String(n)),t.classList.toggle("active",n);const s=e==="data-centers"?this.dataCenterLayer:e==="offices"?this.officeLayer:e==="cables"?this.cableLayer:e==="china-fiber"?this.chinaFiberLayer:e==="exchanges"?this.exchangeLayer:this.modelInferenceLayer;n?s.addTo(this.map):s.removeFrom(this.map),e==="cables"&&!n&&this.clearCableSelection(),e==="data-centers"&&!n&&this.clearDataCenterSelection(),e==="offices"&&!n&&this.clearSelection(),e==="china-fiber"&&!n&&this.clearChinaNetwork(),e==="exchanges"&&!n&&(this.root.querySelector("#cableDetail").hidden=!0),e==="model-inference"&&!n&&this.clearModelSelection()}escape(t){return String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}selectCompany(t){this.clearDataCenterSelection(!1),this.selectedCompany=t;const e=this.markers.filter(h=>h.companyId===t);for(const h of this.markers)h.getElement()?.classList.toggle("is-muted",h.companyId!==t);this.root.querySelector("#officeMapReset").hidden=!1,e.length&&this.map.fitBounds(Te.featureGroup(e).getBounds(),{padding:[100,100],maxZoom:17});const n=this.locations.filter(h=>h.companyId===t),s=n[0],a=this.root.querySelector("#cableDetail"),c=/^https?:\/\//.test(s?.sourceUrl)?s.sourceUrl:"";a.innerHTML=`<button type="button" data-close-cable aria-label="Close office details">×</button><p class="eyebrow">Verified company footprint</p><h2>${this.escape(s.companyName)}</h2><p class="detail-lede">${n.length} mapped ${n.length===1?"location":"locations"} for this company.</p><dl><div><dt>Selected site</dt><dd>${this.escape(s.locationName)}</dd></div><div><dt>Type</dt><dd>${this.escape(s.locationType)}</dd></div><div><dt>Address</dt><dd>${this.escape(s.address)}</dd></div><div><dt>Coordinate accuracy</dt><dd>${this.escape(s.coordinateAccuracy)}</dd></div><div><dt>Verified</dt><dd>${this.escape(s.verifiedOn||"Not listed")}</dd></div></dl>${c?`<a href="${this.escape(c)}" target="_blank" rel="noreferrer">Open location source ↗</a>`:""}<small>This is a verified company location, not necessarily a data center. Selecting the company highlights all of its mapped sites.</small>`,a.hidden=!1}clearSelection(t=!0){this.selectedCompany=null;for(const e of this.markers)e.getElement()?.classList.remove("is-muted");this.root.querySelector("#officeMapReset").hidden=!0,t&&this.map&&this.dataCenters.length&&this.map.fitBounds(this.dataCenters.map(e=>[e.latitude,e.longitude]),{padding:[55,55],maxZoom:4}),t&&(this.root.querySelector("#cableDetail").hidden=!0)}show(){this.root.hidden=!1,this.ensureMap(),requestAnimationFrame(()=>this.map.invalidateSize())}hide(){this.root.hidden=!0}}const ie=o=>String(o).replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),gg=new Set(["RUNS_ON","TRAINS_ON","DEPENDS_ON","USES_MODEL_FROM"]),vg=new Set(["PARTNERS_WITH","INTEGRATES_WITH","COMPETES_WITH"]),yg=(o,t,e)=>{if(vg.has(o.type))return o.source===t?o.target:o.target===t?o.source:null;const[n,s]=gg.has(o.type)?[o.source,o.target]:[o.target,o.source];return e==="upstream"?n===t?s:null:s===t?n:null};function xg(o,t,e,n=()=>!0,s=6,a=180){const c=new Map([[t,0]]),h=[t],u=[],d=[t];let p=!1;for(;d.length;){const _=d.shift(),m=c.get(_);if(!(m>=s))for(const y of o){const M=yg(y,_,e);if(!(!M||!n(M)||c.has(M))){if(h.length>=a){p=!0;continue}c.set(M,m+1),h.push(M),d.push(M),u.push(y)}}}return{nodes:h,edges:u,hops:c,truncated:p,maxDepth:Math.max(0,...c.values())}}class Mg{constructor(t,e,n,s,a=[],c={}){this.entities=t,this.relationships=e,this.scene=n,this.select=s,this.activeLayers=new Set(Me.map(h=>h.id)),this.activeGeography="all",this.timeline=new cg(document.querySelector("#timelineView"),t,e,s),this.officeMap=new _g(document.querySelector("#officeMapView"),a,c),document.querySelector("#searchInput").placeholder=`Search ${t.length} entities`,document.querySelector(".updated").textContent=`DATA UPDATED ${new Date(`${eo}T00:00:00`).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}).toUpperCase()}`,this.bind(),this.bindFullscreen(),this.bindModelPortfolio(),this.renderScope()}bindModelPortfolio(){document.addEventListener("click",t=>{const e=t.target.closest("[data-entity]");e&&queueMicrotask(()=>{this.renderEntityProfile(e.dataset.entity),this.renderModelPortfolio(e.dataset.entity)})})}renderModelPortfolio(t){const e=this.scene.modelPortfolioByModel?.get(t),n=document.querySelector("#detailPanel");if(!e||n.hidden||n.querySelector(".model-portfolio"))return;const s=/image|sora|veo|lyria|embedding|robotics|guard|voice|imagine|movie|audio|ocr|code|coder|vision|vl|stable|flux|midjourney|runway|suno|music/i,a=document.createElement("section");a.className="model-portfolio",a.innerHTML=`<div class="portfolio-heading"><h3>Model portfolio over time</h3><small>${e.items.length} nested models</small></div><div class="portfolio-rail">${e.items.map((c,h)=>{const u=c.id===e.root?"Current flagship":s.test(c.name)?"Current specialist":h<=3?"Previous generation":"Legacy";return`<button class="portfolio-model ${c.id===t?"selected":""}" data-entity="${c.id}"><i></i><span><strong>${ie(c.name)}</strong><small>${u}</small></span></button>`}).join("")}</div><p class="portfolio-note">Relative lifecycle status reflects this atlas edition. Exact release and retirement dates are used only when producers publish them consistently.</p>`,n.querySelector(".lede")?.insertAdjacentElement("afterend",a)}renderEntityProfile(t){const e=this.entities.find(c=>c.id===t),n=document.querySelector("#detailPanel");if(!e||n.hidden||n.querySelector(".entity-profile")||!e.provides)return;const s=[["Founded / launched",e.founded],["Leadership",e.leadership],["Headquarters",e.headquarters],["Official website",e.website?`<a href="${ie(e.website)}" target="_blank" rel="noreferrer">Visit official site ↗</a>`:null]].filter(([,c])=>c),a=document.createElement("section");a.className="entity-profile",a.innerHTML=`<div class="profile-heading"><h3>Entity profile</h3><small>Verified basics</small></div><dl>${s.map(([c,h])=>`<div><dt>${ie(c)}</dt><dd>${c==="Official website"?h:ie(h)}</dd></div>`).join("")}</dl><h4>What it provides</h4><p>${ie(e.provides)}</p><h4>How it is used</h4><p>${ie(e.howUsed)}</p>${e.profileSources?.length?`<div class="profile-sources"><span>Sources</span>${e.profileSources.map((c,h)=>`<a href="${ie(c)}" target="_blank" rel="noreferrer">${String(h+1).padStart(2,"0")} ↗</a>`).join("")}</div>`:""}`,n.querySelector(".lede")?.insertAdjacentElement("afterend",a)}bind(){document.addEventListener("click",e=>{const n=e.target.closest("[data-action],[data-view],[data-entity],[data-journey],[data-camera]");if(!n)return;if(n.dataset.camera){this.scene.cameraCommand(n.dataset.camera);return}if(n.dataset.entity){this.select(n.dataset.entity);return}if(n.dataset.view){document.querySelectorAll("[data-view]").forEach(h=>h.classList.toggle("active",h===n)),this.closeAll();const a=n.dataset.view;document.body.classList.toggle("timeline-mode",a==="timeline"),document.body.classList.toggle("office-map-mode",a==="map"),a==="map"?(this.enter(),this.timeline.hide(),this.officeMap.show()):(this.officeMap.hide(),this.scene.setView(a),a==="timeline"?(this.enter(),this.timeline.show()):this.timeline.hide());const c=document.querySelector("#traceNotice");a==="gravity"?(c.innerHTML='<strong>Gravity view</strong><span>Critical entities orbit nearest the center</span><small>Select any entity to reveal its connected supply-chain web across six hops.</small><button data-action="reset">Clear view ×</button>',c.hidden=!1):a==="models"?(c.innerHTML=`<strong>Models view</strong><span>${this.scene.modelEntities.filter(h=>this.activeGeography==="all"||h.geography===this.activeGeography).length} leading model products across AI producers</span><small>Select a model to grow its creation tree upward and its deployment and inference ecosystem downward.</small><button data-action="reset">Reset models ×</button>`,c.hidden=!1):c.hidden=!0;return}if(n.dataset.journey){this.startJourney(no.find(a=>a.id===n.dataset.journey));return}const s=n.dataset.action;s==="explore"&&this.enter(),s==="toggle-dock"&&this.toggleDock(),s==="reset"&&(this.closeAll(),this.scene.reset()),s==="layers"&&this.showFilters("layers"),s==="relations"&&this.showFilters("relations"),s==="time"&&this.showTime(),s==="geography"&&this.showFilters("geography"),s==="journeys"&&this.showJourneys(),s==="fullscreen"&&this.toggleFullscreen(),s==="methodology"&&this.showMethod(),s==="close"&&n.closest("aside,.journey-player")?.setAttribute("hidden",""),(s==="upstream"||s==="downstream")&&this.traceDirection(n.dataset.id,s),s==="stack"&&this.traceStack(n.dataset.id),s==="journey-next"&&this.advanceJourney(1),s==="journey-prev"&&this.advanceJourney(-1),s==="stop-journey"&&this.stopJourney()});const t=document.querySelector("#searchInput");t.addEventListener("input",()=>this.search(t.value)),t.addEventListener("keydown",e=>{e.key==="Escape"&&(t.value="",this.search(""))}),document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"&&(e.preventDefault(),t.focus()),e.key==="Escape"&&this.closeAll(),e.target.matches("input,textarea"))return;const n={0:"fit",1:"front",2:"top","+":"zoom-in","=":"zoom-in","-":"zoom-out"};n[e.key]&&this.scene.cameraCommand(n[e.key])})}toggleDock(){const t=document.querySelector(".control-dock"),e=t.querySelector(".dock-toggle"),n=t.classList.toggle("is-collapsed");e.textContent=n?"+":"−",e.setAttribute("aria-expanded",String(!n)),e.setAttribute("aria-label",n?"Restore explore controls":"Minimize explore controls"),e.title=n?"Restore controls":"Minimize controls",n&&(document.querySelector("#searchResults").hidden=!0)}bindFullscreen(){const t=document.querySelector('[data-action="fullscreen"]');if(t){if(!document.documentElement.requestFullscreen){t.disabled=!0,t.title="Fullscreen is unavailable in this browser",t.setAttribute("aria-label",t.title);return}document.addEventListener("fullscreenchange",()=>{const e=!!document.fullscreenElement,n=e?"Exit fullscreen":"Enter fullscreen";t.dataset.fullscreen=String(e),t.title=n,t.setAttribute("aria-label",n),t.setAttribute("aria-pressed",String(e))})}}async toggleFullscreen(){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch(t){console.warn("Unable to change fullscreen mode:",t)}}enter(){document.body.classList.add("entered"),document.querySelector(".intro").setAttribute("aria-hidden","true"),this.scene.controls.autoRotate=!1}closeAll(){["detailPanel","filterPanel","journeyPanel","methodPanel","journeyPlayer","traceNotice"].forEach(t=>document.querySelector("#"+t).hidden=!0),document.querySelector("#searchResults").hidden=!0}renderPhysicalProvenance(t){const e=this.scene.buildModelBranch(t,"upstream",6,160),n=new Map;for(const h of e.nodes){if(h===t)continue;const u=this.entities.find(d=>d.id===h);u&&(n.has(u.layer)||n.set(u.layer,[]),n.get(u.layer).push(u))}const s=["models","cloud","datacenter","compute","fabrication","equipment","materials"],a=s.filter(h=>n.has(h)).map(h=>{const u=Me.find(p=>p.id===h),d=n.get(h).slice(0,8);return`<div class="provenance-row"><span>${ie(u?.short||h)}</span><div>${d.map(p=>`<button data-entity="${p.id}">${ie(p.name)}</button>`).join("")}</div></div>`}).join(""),c=e.edges.reduce((h,u)=>({...h,[u.status]:(h[u.status]||0)+1}),{});return`<section class="physical-provenance"><div class="provenance-heading"><h3>Model → material provenance</h3><small>${e.nodes.length-1} upstream entities · ${e.maxDepth} hops</small></div>${a}<p><b>${c.confirmed||0} confirmed</b> · ${c.reported||0} reported · ${c.inferred||0} inferred · ${c.representative||0} representative links. Hardware for closed models is often undisclosed; representative links show a plausible industry path, never a claimed training bill of materials.</p></section>`}appendPhysicalProvenance(t){const e=this.entities.find(s=>s.id===t),n=document.querySelector("#detailPanel");e?.type!=="Model"||n.hidden||n.querySelector(".physical-provenance")||n.querySelector(".stack-button")?.insertAdjacentHTML("afterend",this.renderPhysicalProvenance(t))}search(t){const e=document.querySelector("#searchResults"),n=t.trim().toLowerCase();if(!n){e.hidden=!0;return}const s=this.entities.filter(a=>(this.activeGeography==="all"||a.geography===this.activeGeography)&&[a.name,a.type,a.layer,a.country,a.geography,...a.categories,...a.products].join(" ").toLowerCase().includes(n)).sort((a,c)=>(c.name.toLowerCase().startsWith(n)?1:0)-(a.name.toLowerCase().startsWith(n)?1:0)||c.importanceLevel-a.importanceLevel).slice(0,12);e.innerHTML=s.length?s.map(a=>{const c=ja(a);return`<button data-entity="${a.id}"><i class="kind-mark ${c}" style="--c:${Me.find(h=>h.id===a.layer).color}"></i><span><strong>${ie(a.name)}</strong><small>${ie(ch[c].short)} · ${ie(a.geography)} · ${ie(a.categories.at(-1))}</small></span><b>↗</b></button>`}).join(""):"<p>No entities found in this geography</p>",e.hidden=!1}showEntity(t){const e=this.entities.find(m=>m.id===t);if(!e)return;this.enter(),this.closeAll();const n=this.scene.select(t),s=this.relationships.filter(m=>m.source===t||m.target===t),a=s.filter(m=>m.target===t),c=s.filter(m=>m.source===t),h=[...new Set(s.map(m=>m.source===t?m.target:m.source))].map(m=>this.entities.find(y=>y.id===(vs[m]||m))).filter(Boolean).slice(0,8),u=ja(e),d=ch[u],p=Me.find(m=>m.id===e.layer),_=document.querySelector("#detailPanel");if(_.innerHTML=`<div class="panel-head"><span style="--c:${p.color}">${p.symbol} ${ie(p.short)}</span><button data-action="close" aria-label="Close">×</button></div><p class="entity-type"><i class="kind-glyph ${u}">${d.symbol}</i> ${ie(d.label)} · ${ie(e.type)} · ${ie(e.country)}</p><h2>${ie(e.name)}</h2><p class="lede">${ie(e.description)}</p><div class="entity-stats"><div><small>UPSTREAM</small><strong>${a.length}</strong></div><div><small>DOWNSTREAM</small><strong>${c.length}</strong></div><div><small>RELATIONS</small><strong>${s.length}</strong></div></div><div class="trace-actions"><button data-action="upstream" data-id="${t}">← Trace upstream</button><button data-action="downstream" data-id="${t}">Trace downstream →</button></div><button class="stack-button" data-action="stack" data-id="${t}">✦ Trace a representative stack</button><section><h3>Ecosystem role</h3><p>${ie(e.ecosystemRole)}</p></section><section><h3>Significant products / technologies</h3><div class="chips">${e.products.map(m=>`<span>${ie(m)}</span>`).join("")}</div></section><section><h3>Why it matters</h3><p>${ie(e.whyItMatters)}</p></section><section><h3>Immediate network</h3><div class="related">${h.map(m=>`<button data-entity="${m.id}">${ie(m.name)} <span>↗</span></button>`).join("")||"<p>No direct relationships in this edition.</p>"}</div></section><section><h3>Relationship evidence</h3>${s.slice(0,8).map(m=>{const y=this.entities.find(M=>M.id===(vs[m.source===t?m.target:m.source]||(m.source===t?m.target:m.source)));return`<div class="relation-row"><span>${ie(m.type.replaceAll("_"," "))}</span><strong>${ie(y?.name||"Cross-layer capability")}</strong><small class="status ${m.status}">${ie(m.status)}</small><p>${ie(m.explanation)}</p></div>`}).join("")}</section>`,_.hidden=!1,n?.model){const m=document.querySelector("#traceNotice");m.innerHTML=`<strong>${ie(e.name)}</strong><span><b class="creation-key">${n.creation}</b> creation entities above · <b class="inference-key">${n.inference}</b> deployment/inference entities below</span><small>Gold branches trace model creation; green roots trace known deployment and downstream use across up to six hops.${n.truncated?" Large branches are capped for legibility.":""}</small><button data-action="reset">Back to models ×</button>`,m.hidden=!1}}showFilters(t){this.closeAll();const e=document.querySelector("#filterPanel");e.hidden=!1;const n=Me.map(h=>`<label><input type="checkbox" value="${h.id}" ${this.activeLayers.has(h.id)?"checked":""}><i style="--c:${h.color}">${h.symbol}</i><span>${ie(h.name)}</span></label>`).join(""),s=`<label><input type="radio" name="relation" value="ALL" ${this.scene.relationFilter==="ALL"?"checked":""}><span>All relationship types</span></label>${wl.map(h=>`<label><input type="radio" name="relation" value="${h}" ${this.scene.relationFilter===h?"checked":""}><span>${ie(h.replaceAll("_"," "))}</span></label>`).join("")}`,a=Ka.map(h=>`<label class="geo-option"><input type="radio" name="geography" value="${h.id}" ${this.activeGeography===h.id?"checked":""}><i>${h.short}</i><span><strong>${ie(h.name)}</strong><small>${this.entities.filter(u=>h.id==="all"||u.geography===h.id).length} entities · ${ie(h.description)}</small></span></label>`).join(""),c=t==="layers"?n:t==="relations"?s:a;e.innerHTML=`<div class="panel-head"><strong>Universe controls</strong><button data-action="close">×</button></div><div class="tabbar"><button class="${t==="layers"?"active":""}" data-filtertab="layers">Layers</button><button class="${t==="relations"?"active":""}" data-filtertab="relations">Relationships</button><button class="${t==="geography"?"active":""}" data-filtertab="geography">Geography</button></div><div class="filter-list">${c}</div>`,e.querySelectorAll("[data-filtertab]").forEach(h=>h.onclick=()=>this.showFilters(h.dataset.filtertab)),e.querySelectorAll("input").forEach(h=>h.onchange=()=>{if(h.type==="checkbox")h.checked?this.activeLayers.add(h.value):this.activeLayers.delete(h.value),this.scene.setLayers(this.activeLayers);else if(h.name==="geography"){this.activeGeography=h.value,this.scene.setGeography(h.value);const u=Ka.find(d=>d.id===h.value);document.querySelector("#geoLabel").textContent=u.short,e.hidden=!0}else this.scene.setRelation(h.value),document.querySelector('[data-action="relations"] b').textContent=h.value==="ALL"?"ALL":"1";this.renderScope()})}showTime(){this.closeAll();const t=document.querySelector("#filterPanel"),e=this.relationships.filter(a=>a.activeFrom||a.activeTo).length;t.hidden=!1,t.innerHTML=`<div class="panel-head"><strong>Relationship time</strong><button data-action="close">×</button></div><div class="time-control"><div class="time-readout"><strong id="timeReadout">${this.scene.timeYear}</strong><span>As-of snapshot</span></div><input id="timeRange" type="range" min="2000" max="2026" step="1" value="${this.scene.timeYear}" aria-label="Relationship snapshot year"><div class="time-ticks"><span>2000</span><span>2010</span><span>2020</span><span>2026</span></div><p>Edges with verified start or end years enter and leave the map as you scrub. Undated relationships remain visible at lower intensity so missing research is not mistaken for historical absence.</p><div class="time-key"><i></i><span>Dated relationship</span><i class="uncertain"></i><span>Date not yet audited</span></div><p>${e} of ${this.relationships.length} relationships currently have explicit temporal metadata.</p></div>`;const n=t.querySelector("#timeRange"),s=t.querySelector("#timeReadout");n.oninput=()=>{s.textContent=n.value,document.querySelector("#timeLabel").textContent=n.value,this.scene.setTime(n.value)}}showJourneys(){this.closeAll();const t=document.querySelector("#journeyPanel");t.hidden=!1,t.innerHTML=`<div class="panel-head"><div><p class="eyebrow">Curated pathways</p><h2>Guided journeys</h2></div><button data-action="close">×</button></div><p>Follow representative routes through the ecosystem. Each stop explains a handoff, dependency or control point.</p><div class="journey-list">${no.map((e,n)=>`<button data-journey="${e.id}"><span>${String(n+1).padStart(2,"0")}</span><div><strong>${ie(e.title)}</strong><small>${ie(e.kicker)}</small></div><b>→</b></button>`).join("")}</div>`}startJourney(t){t&&(this.closeAll(),this.currentJourney=t,this.journeyStep=0,this.renderJourneyStep())}renderJourneyStep(){const t=this.currentJourney,e=t.nodes[this.journeyStep],n=this.entities.find(c=>c.id===e),s=this.entities.find(c=>c.id===t.nodes[this.journeyStep+1]);this.scene.trace(t.nodes.slice(0,this.journeyStep+1)),this.scene.focus(e,27);const a=document.querySelector("#journeyPlayer");a.hidden=!1,a.innerHTML=`<div class="journey-progress"><i style="width:${(this.journeyStep+1)/t.nodes.length*100}%"></i></div><div class="journey-meta"><span>${String(this.journeyStep+1).padStart(2,"0")} / ${String(t.nodes.length).padStart(2,"0")}</span><button data-action="stop-journey">Exit journey ×</button></div><p class="eyebrow">${ie(t.title)}</p><h2>${ie(n.name)}</h2><p>${this.journeyStep===0?ie(t.summary):s?`${ie(n.name)} connects upward to ${ie(s.name)} in this representative route. ${ie(n.ecosystemRole)}`:`${ie(n.whyItMatters)}`}</p><div><button data-action="journey-prev" ${this.journeyStep===0?"disabled":""}>←</button><button data-action="journey-next">${this.journeyStep===t.nodes.length-1?"Finish":"Next stop →"}</button></div>`}advanceJourney(t){if(t>0&&this.journeyStep===this.currentJourney.nodes.length-1){this.stopJourney();return}this.journeyStep=Math.max(0,Math.min(this.currentJourney.nodes.length-1,this.journeyStep+t)),this.renderJourneyStep()}stopJourney(){document.querySelector("#journeyPlayer").hidden=!0,this.scene.reset()}traceDirection(t,e){const n=this.relationships.filter(u=>(this.scene.relationFilter==="ALL"||u.type===this.scene.relationFilter)&&this.scene.relationshipVisible(u)).map(u=>({...u,source:vs[u.source]||u.source,target:vs[u.target]||u.target})),s=u=>{const d=this.scene.nodes.get(u);return!!(d?.visible&&d.parent?.visible)},a=xg(n,t,e,s);this.scene.traceGraph(t,a.nodes,a.edges,a.hops);const c=[];for(let u=1;u<=a.maxDepth;u++)c.push(`${u}: ${a.nodes.filter(d=>a.hops.get(d)===u).length}`);const h=document.querySelector("#traceNotice");h.innerHTML=`<strong>${e==="upstream"?"Upstream dependencies":"Downstream reach"}</strong><span>${a.nodes.length-1} entities across ${a.maxDepth} hop${a.maxDepth===1?"":"s"} · ${this.scene.timeYear} snapshot</span><small>${c.length?`Entities by hop · ${c.join(" · ")}`:"No connected entities in the current filters"}${a.truncated?" · Limited to 180 entities":""}</small><button data-action="reset">Clear trace ×</button>`,h.hidden=!1,document.querySelector("#detailPanel").hidden=!0}traceStack(t){const{representativePaths:e}=window.ecosystemData;let n=e[t];if(!n){const a=this.entities.find(h=>h.id===t);n={models:[t,"vllm","aws","nvidia","sk-hynix","tsmc","asml"],applications:[t,"openai","vllm","azure","nvidia","sk-hynix","tsmc","asml"],agents:[t,"anthropic","vllm","aws","nvidia","sk-hynix","tsmc","asml"],robotics:[t,"pytorch","cuda","nvidia","sk-hynix","tsmc","asml"]}[a.layer]||[t,...this.relationships.filter(h=>h.target===t).slice(0,5).map(h=>h.source)]}n=n.filter(a=>this.scene.nodes.has(a)),this.scene.trace(n);const s=document.querySelector("#traceNotice");s.innerHTML=`<strong>Representative dependency path</strong><span>${n.map(a=>this.entities.find(c=>c.id===a)?.name).join(" → ")}</span><small>This path is illustrative, not the only supply chain.</small><button data-action="reset">Clear trace ×</button>`,s.hidden=!1,document.querySelector("#detailPanel").hidden=!0}showMethod(){this.closeAll();const t=document.querySelector("#methodPanel");t.hidden=!1,t.innerHTML=`<div class="panel-head"><div><p class="eyebrow">About this atlas</p><h2>Methodology</h2></div><button data-action="close">×</button></div><p class="method-lede">A navigational model of a rapidly changing industry—not an exhaustive or authoritative supply-chain database.</p><section><h3>How to read the system</h3><p>Entities are arranged from physical inputs at the base to end markets at the edge. A company may appear through several technologies and relationships rather than being forced into one category.</p></section><section><h3>Relationship confidence</h3><ul><li><b>Confirmed</b> — disclosed by the organizations or broadly documented.</li><li><b>Reported</b> — described by credible public reporting.</li><li><b>Inferred</b> — a reasonable industry inference, explicitly marked.</li><li><b>Representative</b> — illustrates a common architecture, not a unique contract.</li></ul></section><section><h3>Scope & maintenance</h3><p>This edition prioritizes structural importance over completeness. Relationships change quickly; absence does not imply no relationship. Representative paths simplify a multi-supplier reality to make the stack legible.</p></section><div class="data-stamp"><span>DATA EDITION</span><strong>${eo}</strong><small>${this.entities.length} entities · ${this.relationships.length} relationships</small></div>`}renderScope(){const t=this.entities.filter(n=>this.activeLayers.has(n.layer)&&(this.activeGeography==="all"||n.geography===this.activeGeography)),e=Ka.find(n=>n.id===this.activeGeography);document.querySelector("#scopeCount").textContent=`${t.length} ENTITIES · ${this.activeLayers.size} LAYERS · ${e.short}`,document.querySelector("#layerCount").textContent=`${this.activeLayers.size}/${Me.length}`,this.timeline.setScope(this.activeLayers,this.activeGeography)}}async function Sg(){const o=["office-locations.csv","data-center-campuses.csv","submarine-cables.csv","submarine-cable-routes.csv","submarine-cable-landings.csv","china-fiber-networks.csv","china-fiber-nodes.csv","china-fiber-links.csv","internet-exchanges.csv","model-inference-regions.csv","model-network-links.csv","model-organization-sites.csv"],[,[t,e,n,s,a,c,h,u,d,p,_,m]]=await Promise.all([eu(),Promise.all(o.map(El))]),y=t.map(D=>({...D,latitude:Fi(D.latitude),longitude:Fi(D.longitude),entityIds:On(D.entityIds)})),M=e.map(D=>({...D,latitude:Number(D.latitude),longitude:Number(D.longitude),capacity_mw:Fi(D.capacity_mw),facilities:Fi(D.facilities)})),S=n.map(D=>({...D,rfs_year:Fi(D.rfs_year),is_planned:D.is_planned==="True",length_km:Fi(D.length_km),landing_point_count:Number(D.landing_point_count)||0})),x=s.map(D=>({...D,segment_id:Number(D.segment_id),point_order:Number(D.point_order),longitude:Number(D.longitude),latitude:Number(D.latitude)})),g=h.map(D=>({...D,latitude:Number(D.latitude),longitude:Number(D.longitude)})),R=d.map(D=>{let k=Number(D.lat),A=Number(D.lon);return Math.abs(k)>90&&Math.abs(A)<=90&&([k,A]=[A,k]),{...D,latitude:k,longitude:A,participants:Number(D.prts)||0,prefixes:Number(D.prfs)||0,traffic:Number(D.traf)||0}}),C=p.map(D=>({...D,latitude:Number(D.latitude),longitude:Number(D.longitude)})),T=m.map(D=>({...D,latitude:Number(D.latitude),longitude:Number(D.longitude)}));window.ecosystemData={representativePaths:Tl};let O;const U=new lg(document.querySelector("#scene"),io,qs,D=>{O.showEntity(D),O.renderEntityProfile(D),O.renderModelPortfolio(D),O.appendPhysicalProvenance(D)});O=new Mg(io,qs,U,D=>{O.showEntity(D),O.renderEntityProfile(D),O.renderModelPortfolio(D),O.appendPhysicalProvenance(D)},y,{dataCenters:M,cables:S,routes:x,landings:a,chinaNetworks:c,chinaNodes:g,chinaLinks:u,internetExchanges:R,modelInferenceRegions:C,modelNetworkLinks:_,modelOrganizationSites:T})}Sg().catch(o=>{console.error(o);const t=document.querySelector("#scene");t.setAttribute("aria-label","The atlas data could not be loaded.");const e=location.protocol==="file:"?"Reload the page and choose the complete data folder when prompted.":"Check that the data folder was uploaded beside index.html.";t.innerHTML=`<div class="data-load-error"><strong>Atlas data could not be loaded.</strong><span>${String(o.message)}</span><small>${e}</small></div>`}),window.addEventListener("error",o=>{String(o.message).toLowerCase().includes("webgl")&&document.querySelector("#scene").setAttribute("aria-label","3D rendering is unavailable. Use search, layers, journeys and entity detail panels to explore the ecosystem textually.")})})();
