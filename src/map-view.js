import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerIcon=L.divIcon({
  className:'office-dot-shell',
  html:'<span class="office-dot"></span>',
  iconSize:[18,18],
  iconAnchor:[9,9],
  tooltipAnchor:[0,-10]
});

export class OfficeMapView{
  constructor(root,locations){
    this.root=root;
    this.locations=locations.filter(location=>location.status==='map_ready'&&location.coordinateAccuracy==='building'&&Number.isFinite(location.latitude)&&Number.isFinite(location.longitude));
    this.markers=[];
    this.selectedCompany=null;
    root.querySelector('#officeMapReset').addEventListener('click',()=>this.clearSelection());
  }

  ensureMap(){
    if(this.map)return;
    this.map=L.map(this.root.querySelector('#officeMap'),{zoomControl:false,minZoom:2,maxZoom:20,worldCopyJump:true,preferCanvas:true});
    L.control.zoom({position:'bottomright'}).addTo(this.map);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom:20,
      attribution:'&copy; OpenStreetMap contributors'
    }).addTo(this.map);
    const bounds=[];
    for(const location of this.locations){
      const marker=L.marker([location.latitude,location.longitude],{icon:markerIcon,riseOnHover:true,keyboard:true,title:location.companyName});
      marker.companyId=location.companyId;
      marker.bindTooltip(location.companyName,{direction:'top',offset:[0,-7],className:'office-company-tooltip'});
      marker.on('click',()=>this.selectCompany(location.companyId));
      marker.addTo(this.map);
      this.markers.push(marker);
      bounds.push([location.latitude,location.longitude]);
    }
    if(bounds.length)this.map.fitBounds(bounds,{padding:[45,45],maxZoom:4});else this.map.setView([20,0],2);
    const companies=new Set(this.locations.map(location=>location.companyId));
    this.root.querySelector('#officeMapStats').textContent=`${this.locations.length.toLocaleString()} exact buildings · ${companies.size.toLocaleString()} mapped companies`;
  }

  selectCompany(companyId){
    this.selectedCompany=companyId;
    const matching=this.markers.filter(marker=>marker.companyId===companyId);
    for(const marker of this.markers)marker.getElement()?.classList.toggle('is-muted',marker.companyId!==companyId);
    this.root.querySelector('#officeMapReset').hidden=false;
    if(matching.length)this.map.fitBounds(L.featureGroup(matching).getBounds(),{padding:[100,100],maxZoom:17});
  }

  clearSelection(){
    this.selectedCompany=null;
    for(const marker of this.markers)marker.getElement()?.classList.remove('is-muted');
    this.root.querySelector('#officeMapReset').hidden=true;
  }

  show(){
    this.root.hidden=false;
    this.ensureMap();
    requestAnimationFrame(()=>this.map.invalidateSize());
  }

  hide(){this.root.hidden=true}
}
