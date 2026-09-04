import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerIcon=L.divIcon({
  className:'office-dot-shell',
  html:'<span class="office-dot"></span>',
  iconSize:[18,18],
  iconAnchor:[9,9],
  tooltipAnchor:[0,-10]
});

const dataCenterIcon=status=>L.divIcon({
  className:'data-center-marker-shell',
  html:`<span class="data-center-marker ${status==='Operational'?'is-live':'is-future'}"><i></i></span>`,
  iconSize:[24,24],iconAnchor:[12,12],tooltipAnchor:[0,-12]
});

export class OfficeMapView{
  constructor(root,locations,cableData={}){
    this.root=root;
    this.locations=locations.filter(location=>location.status==='map_ready'&&location.coordinateAccuracy==='building'&&Number.isFinite(location.latitude)&&Number.isFinite(location.longitude));
    this.dataCenters=(cableData.dataCenters||[]).filter(site=>Number.isFinite(site.latitude)&&Number.isFinite(site.longitude));
    this.cables=cableData.cables||[];
    this.cableRoutes=cableData.routes||[];
    this.cableLandings=cableData.landings||[];
    this.chinaNetworks=cableData.chinaNetworks||[];
    this.chinaNodes=cableData.chinaNodes||[];
    this.chinaLinks=cableData.chinaLinks||[];
    this.dataCenterNetworkLinks=cableData.dataCenterNetworkLinks||[];
    this.nationalComputeHubs=(cableData.nationalComputeHubs||[]).filter(hub=>Number.isFinite(hub.latitude)&&Number.isFinite(hub.longitude));
    this.nationalComputeCorridors=cableData.nationalComputeCorridors||[];
    this.internetExchanges=(cableData.internetExchanges||[]).filter(exchange=>Number.isFinite(exchange.latitude)&&Number.isFinite(exchange.longitude));
    this.modelInferenceRegions=(cableData.modelInferenceRegions||[]).filter(region=>Number.isFinite(region.latitude)&&Number.isFinite(region.longitude));
    this.modelNetworkLinks=cableData.modelNetworkLinks||[];
    this.modelOrganizationSites=(cableData.modelOrganizationSites||[]).filter(site=>Number.isFinite(site.latitude)&&Number.isFinite(site.longitude));
    this.markers=[];
    this.dataCenterMarkers=[];
    this.cableLines=[];
    this.chinaFiberLines=[];
    this.dataCenterAccessLines=[];
    this.chinaNodeMarkers=[];
    this.nationalHubMarkers=[];
    this.computeCorridorLines=[];
    this.modelRegionMarkers=[];
    this.modelPathLines=[];
    this.modelOfficeMarkers=[];
    this.selectedCompany=null;
    root.querySelector('#officeMapReset').addEventListener('click',()=>this.clearSelection());
    root.querySelector('#chinaMapFocus')?.addEventListener('click',()=>this.focusChina());
    root.querySelectorAll('[data-map-layer]').forEach(button=>button.addEventListener('click',()=>this.toggleLayer(button)));
    root.querySelector('#cableDetail').addEventListener('click',event=>{if(event.target.closest('[data-close-cable]')){this.clearDataCenterSelection();this.clearSelection(false);this.clearCableSelection();this.clearChinaNetwork();this.clearModelSelection()}});
    this.setupModelSelector();
  }

  ensureMap(){
    if(this.map)return;
    this.map=L.map(this.root.querySelector('#officeMap'),{zoomControl:false,minZoom:2,maxZoom:20,worldCopyJump:true,preferCanvas:true});
    L.control.zoom({position:'bottomright'}).addTo(this.map);
    // Esri's global street basemap uses English as its default label language.
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',{
      maxZoom:20,
      attribution:'Tiles &copy; Esri and contributors'
    }).addTo(this.map);
    this.dataCenterLayer=L.layerGroup().addTo(this.map);
    this.officeLayer=L.layerGroup();
    this.cableLayer=L.layerGroup();
    this.chinaFiberLayer=L.layerGroup().addTo(this.map);
    this.exchangeLayer=L.layerGroup().addTo(this.map);
    this.modelInferenceLayer=L.layerGroup();
    this.cableRenderer=L.canvas({padding:.5});
    this.chinaFiberRenderer=L.canvas({padding:.5});
    this.exchangeRenderer=L.canvas({padding:.5});
    this.modelRenderer=L.svg({padding:.5});
    const bounds=[];
    this.addDataCenters(bounds);
    for(const location of this.locations){
      const marker=L.marker([location.latitude,location.longitude],{icon:markerIcon,riseOnHover:true,keyboard:true,title:location.companyName});
      marker.companyId=location.companyId;
      marker.bindTooltip(location.companyName,{direction:'top',offset:[0,-7],className:'office-company-tooltip'});
      marker.on('click',()=>this.selectCompany(location.companyId));
      marker.addTo(this.officeLayer);
      this.markers.push(marker);
    }
    this.addCableRoutes([]);
    this.addChinaFiber([]);
    this.addInternetExchanges([]);
    this.addModelInfrastructure([]);
    const chinaBounds=this.dataCenters.filter(site=>site.country==='China').map(site=>[site.latitude,site.longitude]);
    if(chinaBounds.length)this.map.fitBounds(chinaBounds,{padding:[55,55],maxZoom:5});else if(bounds.length)this.map.fitBounds(bounds,{padding:[55,55],maxZoom:4});else this.map.setView([35,105],4);
    const china=this.dataCenters.filter(site=>site.country==='China'),operators=new Set(china.map(site=>site.operator)),facilities=china.reduce((sum,site)=>sum+(site.facilities||1),0);
    this.root.querySelector('#officeMapStats').textContent=`${china.length} footprints · ${facilities} facilities / zones · ${this.chinaNetworks.length} backbones · ${this.nationalComputeHubs.length} clusters`;
  }

  focusChina(){const sites=this.dataCenters.filter(site=>site.country==='China');this.clearDataCenterSelection(false);if(sites.length)this.map.fitBounds(sites.map(site=>[site.latitude,site.longitude]),{padding:[55,55],maxZoom:5})}

  addDataCenters(bounds){
    for(const site of this.dataCenters){
      const marker=L.marker([site.latitude,site.longitude],{icon:dataCenterIcon(site.status),riseOnHover:true,keyboard:true,title:`${site.name}, ${site.city}`});
      marker.siteId=site.id;
      marker.bindTooltip(`<b>${this.escape(site.name)}</b><br>${this.escape(site.city)}, ${this.escape(site.country)} · ${this.escape(site.status)}`,{direction:'top',offset:[0,-9],className:'office-company-tooltip'});
      marker.on('click',()=>this.selectDataCenter(site.id));
      marker.addTo(this.dataCenterLayer);this.dataCenterMarkers.push(marker);bounds.push([site.latitude,site.longitude]);
    }
  }

  selectDataCenter(siteId){
    const site=this.dataCenters.find(item=>item.id===siteId);if(!site)return;
    this.clearSelection(false);this.clearCableSelection(false);this.clearChinaNetwork(false);this.clearModelSelection(false);
    for(const marker of this.dataCenterMarkers)marker.getElement()?.classList.toggle('is-muted',marker.siteId!==siteId);
    this.selectedDataCenter=siteId;this.map.flyTo([site.latitude,site.longitude],Math.max(this.map.getZoom(),7),{duration:.5});
    const detail=this.root.querySelector('#cableDetail'),safeUrl=/^https?:\/\//.test(site.source_url)?site.source_url:'';
    const precision=site.coordinate_precision==='locality'?'Locality-level':site.coordinate_precision==='city'?'City-level':site.coordinate_precision==='region'?'Regional':'Metro-level';
    detail.innerHTML=`<button type="button" data-close-cable aria-label="Close campus details">×</button><p class="eyebrow">${this.escape(site.status)} · ${this.escape(site.campus_type)}</p><h2>${this.escape(site.name)}</h2><p class="detail-lede">${this.escape(site.description)}</p><dl><div><dt>Operator</dt><dd>${this.escape(site.operator)}</dd></div><div><dt>Market</dt><dd>${this.escape(site.city)}, ${this.escape(site.country)}</dd></div>${site.capacity_mw?`<div><dt>Published capacity</dt><dd>${site.capacity_mw.toLocaleString()} MW+</dd></div>`:''}${site.facilities?`<div><dt>Facilities represented</dt><dd>${site.facilities}</dd></div>`:''}<div><dt>Map precision</dt><dd>${precision}</dd></div><div><dt>Services</dt><dd>${this.escape(site.services)}</dd></div></dl>${safeUrl?`<a href="${this.escape(safeUrl)}" target="_blank" rel="noreferrer">Open operator source ↗</a>`:''}<small>Source checked ${this.escape(site.verified_on)}. ${this.escape(site.notes)} A marker identifies a documented campus or grouped metro footprint; it does not imply ownership of the underlying land or disclose a private building location.</small>`;
    detail.hidden=false;
  }

  clearDataCenterSelection(hideDetail=true){
    this.selectedDataCenter=null;
    for(const marker of this.dataCenterMarkers)marker.getElement()?.classList.remove('is-muted');
    if(hideDetail)this.root.querySelector('#cableDetail').hidden=true;
  }

  setupModelSelector(){
    const select=this.root.querySelector('#mapModelSelect');if(!select)return;
    const models=[...new Map([...this.modelInferenceRegions,...this.modelOrganizationSites].map(site=>[site.model_id,site.model_name])).entries()].sort((a,b)=>a[1].localeCompare(b[1]));
    select.insertAdjacentHTML('beforeend',models.map(([id,name])=>`<option value="${this.escape(id)}">${this.escape(name)}</option>`).join(''));
    select.addEventListener('change',()=>select.value?this.selectModel(select.value):this.clearModelSelection());
  }

  addModelInfrastructure(bounds){
    const regions=new Map([...this.modelInferenceRegions,...this.modelOrganizationSites].map(site=>[site.id,site]));
    for(const link of this.modelNetworkLinks){
      const source=regions.get(link.source_region),target=regions.get(link.target_region);if(!source||!target)continue;
      const line=L.polyline([[source.latitude,source.longitude],[target.latitude,target.longitude]],{renderer:this.modelRenderer,className:'model-flow-line',color:'#b59cff',weight:2.2,opacity:.12,dashArray:'4 12',bubblingMouseEvents:false});
      line.modelFamily=link.model_family;line.baseStyle={color:'#b59cff',weight:2.2,opacity:.12,dashArray:'4 12'};
      line.bindTooltip(`${source.region_name||source.site_name} → ${target.region_name||target.site_name} · ${link.flow_label}`,{sticky:true,className:'office-company-tooltip'});
      line.addTo(this.modelInferenceLayer);this.modelPathLines.push(line);
    }
    for(const region of this.modelInferenceRegions){
      const training=region.workload_role==='managed_training_and_inference';
      const marker=L.circleMarker([region.latitude,region.longitude],{renderer:this.modelRenderer,radius:training?7:6,weight:2,color:training?'#fff0b8':'#c8ecff',fillColor:training?'#e6b83f':'#369bd2',fillOpacity:.42,opacity:.5});
      marker.modelId=region.model_id;marker.regionId=region.id;
      marker.training=training;marker.bindTooltip(`${region.model_name} · ${region.region_name} · ${training?'managed training + inference':'inference service'}`,{direction:'top',className:'office-company-tooltip'});
      marker.on('click',()=>this.selectModel(region.model_id,region.id));
      marker.addTo(this.modelInferenceLayer);this.modelRegionMarkers.push(marker);bounds.push([region.latitude,region.longitude]);
    }
    for(const site of this.modelOrganizationSites){
      const marker=L.circleMarker([site.latitude,site.longitude],{renderer:this.modelRenderer,radius:6,weight:2,color:'#ffe4bd',fillColor:'#ee9c46',fillOpacity:.42,opacity:.5});
      marker.modelId=site.model_id;marker.siteId=site.id;
      marker.bindTooltip(`${site.organization} · ${site.site_name}`,{direction:'top',className:'office-company-tooltip'});
      marker.on('click',()=>this.selectModel(site.model_id,site.id));
      marker.addTo(this.modelInferenceLayer);this.modelOfficeMarkers.push(marker);bounds.push([site.latitude,site.longitude]);
    }
  }

  selectModel(modelId,focusRegionId){
    const regions=this.modelInferenceRegions.filter(region=>region.model_id===modelId),offices=this.modelOrganizationSites.filter(site=>site.model_id===modelId);if(!regions.length&&!offices.length)return;
    this.clearSelection(false);this.clearCableSelection(false);this.clearChinaNetwork(false);
    this.selectedModel=modelId;this.root.classList.add('model-isolated');
    for(const group of [this.dataCenterLayer,this.officeLayer,this.cableLayer,this.chinaFiberLayer,this.exchangeLayer])group.removeFrom(this.map);
    if(!this.map.hasLayer(this.modelInferenceLayer))this.modelInferenceLayer.addTo(this.map);
    const family=modelId.startsWith('qwen')?'qwen':modelId;
    for(const marker of this.modelRegionMarkers)marker.setStyle(marker.modelId===modelId?{radius:marker.training?9:8,weight:2.5,opacity:1,fillOpacity:.92}:{radius:4,weight:1,opacity:.08,fillOpacity:.04});
    for(const marker of this.modelOfficeMarkers)marker.setStyle(marker.modelId===modelId?{radius:7,weight:2.5,opacity:1,fillOpacity:.95}:{radius:4,weight:1,opacity:.08,fillOpacity:.04});
    for(const line of this.modelPathLines)line.setStyle(line.modelFamily===family?{weight:3.2,opacity:.9}:{weight:1,opacity:.025});
    const select=this.root.querySelector('#mapModelSelect');if(select)select.value=modelId;
    const selectedMarkers=[...this.modelRegionMarkers,...this.modelOfficeMarkers].filter(marker=>marker.modelId===modelId);
    const focus=[...this.modelInferenceRegions,...this.modelOrganizationSites].find(site=>site.id===focusRegionId);
    if(focus)this.map.flyTo([focus.latitude,focus.longitude],Math.max(this.map.getZoom(),5),{duration:.5});
    else if(selectedMarkers.length)this.map.fitBounds(L.featureGroup(selectedMarkers).getBounds(),{padding:[70,340],maxZoom:5});
    const modelName=regions[0]?.model_name||offices[0].model_name,provider=regions[0]?.provider||offices[0].organization,detail=this.root.querySelector('#cableDetail');
    const trainingRegions=regions.filter(region=>region.workload_role==='managed_training_and_inference'),inferenceRegions=regions.filter(region=>region.workload_role!=='managed_training_and_inference'),source=trainingRegions[0]?.workload_source_url||regions[0]?.source_url||offices[0].source_url;
    detail.innerHTML=`<button type="button" data-close-cable aria-label="Close model infrastructure details">×</button><p class="eyebrow">Isolated model footprint</p><h2>${this.escape(modelName)}</h2><dl><div><dt>Provider</dt><dd>${this.escape(provider)}</dd></div><div><dt>Offices</dt><dd><i class="site-swatch office"></i>${offices.length} listed</dd></div><div><dt>Training + inference</dt><dd><i class="site-swatch training"></i>${trainingRegions.length} managed regions</dd></div><div><dt>Inference / access</dt><dd><i class="site-swatch inference"></i>${inferenceRegions.length} published regions</dd></div></dl>${trainingRegions.length?`<section><h3>Training-capable regions</h3><p>${trainingRegions.map(region=>`${this.escape(region.region_name)} <small>${this.escape(region.deployment_scope)}</small>`).join(' · ')}</p></section>`:''}${inferenceRegions.length?`<section><h3>Inference or API-access regions</h3><p>${inferenceRegions.map(region=>`${this.escape(region.region_name)} <small>${this.escape(region.workload_role==='inference_access_region'?'access point—not confirmed serving facility':region.deployment_scope)}</small>`).join(' · ')}</p></section>`:`<section><h3>Infrastructure location undisclosed</h3><p>The provider publishes model API access but no sufficiently specific training or inference region that can be responsibly plotted.</p></section>`}<section><h3>Animated flow</h3><p>Moving dashes travel from each CSV source toward its target. They show an illustrative service or organizational direction—not live packet telemetry.</p></section><a href="${this.escape(source)}" target="_blank" rel="noreferrer">Open primary documentation ↗</a><small>Office, API access, service region, and physical serving facility are different claims. The map labels each separately and never upgrades an endpoint into a data center without evidence.</small>`;
    detail.hidden=false;
  }

  clearModelSelection(hideDetail=true){
    const wasSelected=Boolean(this.selectedModel);this.selectedModel=null;this.root.classList.remove('model-isolated');
    for(const marker of this.modelRegionMarkers)marker.setStyle({radius:marker.training?7:6,weight:2,opacity:.5,fillOpacity:.42});
    for(const marker of this.modelOfficeMarkers)marker.setStyle({radius:6,weight:2,opacity:.5,fillOpacity:.42});
    for(const line of this.modelPathLines)line.setStyle(line.baseStyle);
    const select=this.root.querySelector('#mapModelSelect');if(select)select.value='';
    if(wasSelected&&this.map){
      const groups={'data-centers':this.dataCenterLayer,offices:this.officeLayer,cables:this.cableLayer,'china-fiber':this.chinaFiberLayer,exchanges:this.exchangeLayer,'model-inference':this.modelInferenceLayer};
      for(const button of this.root.querySelectorAll('[data-map-layer]'))if(button.getAttribute('aria-pressed')==='true')groups[button.dataset.mapLayer]?.addTo(this.map);
    }
    if(hideDetail)this.root.querySelector('#cableDetail').hidden=true;
  }

  addCableRoutes(bounds){
    const cableById=new Map(this.cables.map(cable=>[cable.id,cable]));
    const segments=[];
    let currentSegment=null,lastPointOrder=-1;
    for(const point of this.cableRoutes){
      if(!Number.isFinite(point.latitude)||!Number.isFinite(point.longitude))continue;
      if(!currentSegment||currentSegment[0].cable_id!==point.cable_id||currentSegment[0].segment_id!==point.segment_id||point.point_order<=lastPointOrder){
        currentSegment=[];segments.push(currentSegment);
      }
      currentSegment.push(point);lastPointOrder=point.point_order;
    }
    for(const points of segments){
      const cable=cableById.get(points[0].cable_id);
      if(!cable)continue;
      const routePieces=[];let piece=[];
      for(const point of points){
        const previous=piece.at(-1);
        if(previous&&Math.abs(previous[1]-point.longitude)>180){routePieces.push(piece);piece=[];}
        piece.push([point.latitude,point.longitude]);
      }
      if(piece.length)routePieces.push(piece);
      for(const latlngs of routePieces){
        if(latlngs.length<2)continue;
        const line=L.polyline(latlngs,{renderer:this.cableRenderer,color:cable.is_planned?'#d9a45f':'#3cb8c3',weight:cable.is_planned?1.25:1.5,opacity:cable.is_planned ? .55 : .72,dashArray:cable.is_planned?'5 5':null,bubblingMouseEvents:false});
        line.cableId=cable.id;
        line.bindTooltip(cable.name,{sticky:true,className:'office-company-tooltip'});
        line.on('click',()=>this.selectCable(cable.id));
        line.addTo(this.cableLayer);
        this.cableLines.push(line);
        bounds.push(...latlngs);
      }
    }
  }

  addChinaFiber(bounds){
    const nodes=new Map(this.chinaNodes.map(node=>[node.id,node]));
    const networks=new Map(this.chinaNetworks.map(network=>[network.id,network]));
    for(const link of this.chinaLinks){
      const source=nodes.get(link.source_node),target=nodes.get(link.target_node),network=networks.get(link.network_id);
      if(!source||!target||!network)continue;
      const logical=link.confidence==='logical';
      const line=L.polyline([[source.latitude,source.longitude],[target.latitude,target.longitude]],{renderer:this.chinaFiberRenderer,color:network.color,weight:logical?3:4,opacity:logical ? .88 : 1,dashArray:logical?'5 7':null,bubblingMouseEvents:false});
      line.networkId=network.id;line.linkId=link.id;line.baseStyle={color:network.color,weight:logical?3:4,opacity:logical ? .88 : 1,dashArray:logical?'5 7':null};
      line.bindTooltip(`${network.name} · ${logical?'logical connection':'documented topology'}`,{sticky:true,className:'office-company-tooltip'});
      line.on('click',()=>this.selectChinaFiberLink(link.id));
      line.addTo(this.chinaFiberLayer);this.chinaFiberLines.push(line);
    }
    for(const node of this.chinaNodes){
      const marker=L.circleMarker([node.latitude,node.longitude],{renderer:this.chinaFiberRenderer,radius:5,weight:2,color:'#fff4b8',fillColor:'#101617',fillOpacity:1,opacity:1});
      marker.nodeId=node.id;marker.bindTooltip(`${node.name} · ${node.node_role}`,{direction:'top',className:'office-company-tooltip'});
      marker.on('click',()=>this.selectChinaNode(node.id));marker.addTo(this.chinaFiberLayer);this.chinaNodeMarkers.push(marker);bounds.push([node.latitude,node.longitude]);
    }
    this.addNationalComputeHubs(bounds,nodes);
    this.addDataCenterAccessLinks(nodes);
    this.addComputeCorridors(nodes);
  }

  addNationalComputeHubs(bounds,backboneNodes){
    for(const hub of this.nationalComputeHubs){const marker=L.circleMarker([hub.latitude,hub.longitude],{renderer:this.chinaFiberRenderer,radius:10,weight:3,color:'#fff2a6',fillColor:'#ffb000',fillOpacity:.92,opacity:1,className:'national-compute-hub'});marker.hubId=hub.id;marker.bindTooltip(`${hub.cluster_name} · ${hub.hub_region}`,{direction:'top',className:'office-company-tooltip'});marker.on('click',()=>this.selectNationalHub(hub.id));marker.addTo(this.chinaFiberLayer);this.nationalHubMarkers.push(marker);bounds.push([hub.latitude,hub.longitude])}
  }

  addDataCenterAccessLinks(backboneNodes){const sites=new Map(this.dataCenters.map(site=>[site.id,site]));for(const link of this.dataCenterNetworkLinks){const site=sites.get(link.campus_id),node=backboneNodes.get(link.backbone_node_id);if(!site||!node)continue;const line=L.polyline([[site.latitude,site.longitude],[node.latitude,node.longitude]],{renderer:this.chinaFiberRenderer,color:'#70e7ff',weight:2,opacity:.7,dashArray:'3 7',className:'campus-access-line'});line.accessLinkId=link.id;line.baseStyle={color:'#70e7ff',weight:2,opacity:.7,dashArray:'3 7'};line.bindTooltip(`${site.name} → ${node.name} · inferred access`,{sticky:true,className:'office-company-tooltip'});line.on('click',()=>this.selectDataCenterAccessLink(link.id));line.addTo(this.chinaFiberLayer);this.dataCenterAccessLines.push(line)} }

  addComputeCorridors(backboneNodes){const hubs=new Map(this.nationalComputeHubs.map(hub=>[hub.id,hub]));for(const corridor of this.nationalComputeCorridors){const demand=backboneNodes.get(corridor.demand_node_id),hub=hubs.get(corridor.hub_id);if(!demand||!hub)continue;const line=L.polyline([[demand.latitude,demand.longitude],[hub.latitude,hub.longitude]],{renderer:this.chinaFiberRenderer,color:'#ff6b35',weight:8,opacity:.58,dashArray:'14 11',className:'compute-policy-corridor'});line.corridorId=corridor.id;line.baseStyle={color:'#ff6b35',weight:8,opacity:.58,dashArray:'14 11'};line.bindTooltip(`${corridor.name} · policy workload corridor`,{sticky:true,className:'office-company-tooltip'});line.on('click',()=>this.selectComputeCorridor(corridor.id));line.addTo(this.chinaFiberLayer);line.bringToBack();this.computeCorridorLines.push(line)}}

  selectComputeCorridor(corridorId){const corridor=this.nationalComputeCorridors.find(item=>item.id===corridorId),demand=this.chinaNodes.find(item=>item.id===corridor?.demand_node_id),hub=this.nationalComputeHubs.find(item=>item.id===corridor?.hub_id);if(!corridor||!demand||!hub)return;for(const line of this.computeCorridorLines)line.setStyle(line.corridorId===corridorId?{weight:8,opacity:.65}:{weight:3,opacity:.04});const detail=this.root.querySelector('#cableDetail');detail.innerHTML=`<button type="button" data-close-cable aria-label="Close policy-corridor details">×</button><p class="eyebrow">Conceptual policy corridor</p><h2>${this.escape(corridor.name)}</h2><p class="detail-lede">${this.escape(corridor.description)}</p><dl><div><dt>Demand center</dt><dd>${this.escape(demand.name)}</dd></div><div><dt>National cluster</dt><dd>${this.escape(hub.cluster_name)}</dd></div><div><dt>Suitable workload pattern</dt><dd>${this.escape(corridor.workload_fit)}</dd></div><div><dt>Evidence level</dt><dd>${this.escape(corridor.confidence.replaceAll('_',' '))}</dd></div></dl><a href="${this.escape(corridor.source_url)}" target="_blank" rel="noreferrer">Open national strategy source ↗</a><small>This broad orange band explains the East Data, West Computing strategy. It is not a fiber alignment, carrier contract, measured traffic flow, or promise that every workload follows this path.</small>`;detail.hidden=false}

  selectChinaFiberLink(linkId){const link=this.chinaLinks.find(item=>item.id===linkId),network=this.chinaNetworks.find(item=>item.id===link?.network_id),source=this.chinaNodes.find(item=>item.id===link?.source_node),target=this.chinaNodes.find(item=>item.id===link?.target_node);if(!link||!network||!source||!target)return;this.clearDataCenterSelection(false);this.clearSelection(false);this.clearCableSelection(false);this.clearModelSelection(false);for(const line of this.chinaFiberLines)line.setStyle(line.linkId===linkId?{weight:4.5,opacity:1}:{weight:1,opacity:.07});const detail=this.root.querySelector('#cableDetail');detail.innerHTML=`<button type="button" data-close-cable aria-label="Close fiber-link details">×</button><p class="eyebrow">${this.escape(link.confidence.replaceAll('_',' '))}</p><h2>${this.escape(source.name)} → ${this.escape(target.name)}</h2><p class="detail-lede">${this.escape(link.notes)}</p><dl><div><dt>Backbone</dt><dd>${this.escape(network.name)}</dd></div><div><dt>Operator</dt><dd>${this.escape(network.operator)}</dd></div><div><dt>Network type</dt><dd>${this.escape(network.network_type)}</dd></div><div><dt>Relationship</dt><dd>${this.escape(link.relationship)}</dd></div></dl><a href="${this.escape(link.source_url)}" target="_blank" rel="noreferrer">Open topology source ↗</a><small>A line shows documented topology or logical connectivity between cities. Unless explicitly stated otherwise it is not a surveyed conduit path, fiber pair, wavelength, latency measurement, or proof of campus traffic.</small>`;detail.hidden=false}

  selectChinaNode(nodeId){const node=this.chinaNodes.find(item=>item.id===nodeId);if(!node)return;const links=this.chinaLinks.filter(link=>link.source_node===nodeId||link.target_node===nodeId),networks=[...new Set(links.map(link=>this.chinaNetworks.find(network=>network.id===link.network_id)?.name).filter(Boolean))],campuses=this.dataCenterNetworkLinks.filter(link=>link.backbone_node_id===nodeId);this.map.flyTo([node.latitude,node.longitude],Math.max(this.map.getZoom(),6),{duration:.5});const detail=this.root.querySelector('#cableDetail');detail.innerHTML=`<button type="button" data-close-cable aria-label="Close backbone-node details">×</button><p class="eyebrow">Backbone interconnection node</p><h2>${this.escape(node.name)}</h2><dl><div><dt>Province</dt><dd>${this.escape(node.province)}</dd></div><div><dt>Published role</dt><dd>${this.escape(node.node_role)}</dd></div><div><dt>Mapped backbone links</dt><dd>${links.length}</dd></div><div><dt>Networks represented</dt><dd>${networks.length}</dd></div><div><dt>Associated compute footprints</dt><dd>${campuses.length}</dd></div></dl><section><h3>Networks at this mapped node</h3><p>${networks.map(name=>this.escape(name)).join(' · ')||'No named network'}</p></section><a href="${this.escape(node.source_url)}" target="_blank" rel="noreferrer">Open node source ↗</a><small>Campus associations use nearest-node geography where operator access contracts are not public. They indicate a cartographic attachment point, not a confirmed carrier circuit.</small>`;detail.hidden=false}

  selectNationalHub(hubId){const hub=this.nationalComputeHubs.find(item=>item.id===hubId);if(!hub)return;const links=this.dataCenterNetworkLinks.filter(link=>link.national_hub_id===hubId);this.map.flyTo([hub.latitude,hub.longitude],Math.max(this.map.getZoom(),6),{duration:.5});const detail=this.root.querySelector('#cableDetail');detail.innerHTML=`<button type="button" data-close-cable aria-label="Close national-hub details">×</button><p class="eyebrow">East Data, West Computing</p><h2>${this.escape(hub.cluster_name)}</h2><p class="detail-lede">${this.escape(hub.description)}</p><dl><div><dt>National hub</dt><dd>${this.escape(hub.hub_region)}</dd></div><div><dt>Location</dt><dd>${this.escape(hub.city)}, ${this.escape(hub.province)}</dd></div><div><dt>Role</dt><dd>${this.escape(hub.role)}</dd></div><div><dt>Associated mapped footprints</dt><dd>${links.length}</dd></div><div><dt>Coordinate precision</dt><dd>${this.escape(hub.coordinate_precision)}</dd></div></dl><a href="${this.escape(hub.source_url)}" target="_blank" rel="noreferrer">Open NDRC source ↗</a><small>This is one of ten national data-center clusters within eight national computing hubs. Association is geographic and policy-level; it does not prove a dedicated circuit to every nearby campus.</small>`;detail.hidden=false}

  selectDataCenterAccessLink(linkId){const link=this.dataCenterNetworkLinks.find(item=>item.id===linkId),site=this.dataCenters.find(item=>item.id===link?.campus_id),node=this.chinaNodes.find(item=>item.id===link?.backbone_node_id),hub=this.nationalComputeHubs.find(item=>item.id===link?.national_hub_id);if(!link||!site||!node)return;for(const line of this.dataCenterAccessLines)line.setStyle(line.accessLinkId===linkId?{weight:3,opacity:1,color:'#b9eaf2'}:{weight:.7,opacity:.05});const detail=this.root.querySelector('#cableDetail');detail.innerHTML=`<button type="button" data-close-cable aria-label="Close access-link details">×</button><p class="eyebrow">${this.escape(link.confidence.replaceAll('_',' '))}</p><h2>${this.escape(site.name)} → ${this.escape(node.name)}</h2><p class="detail-lede">${this.escape(link.description)}</p><dl><div><dt>Campus operator</dt><dd>${this.escape(site.operator)}</dd></div><div><dt>Network scope</dt><dd>${this.escape(link.network_scope)}</dd></div><div><dt>Nearest mapped backbone node</dt><dd>${this.escape(node.name)} · ${link.distance_to_backbone_km} km geodesic</dd></div><div><dt>Nearest national cluster</dt><dd>${this.escape(hub?.cluster_name||'Not assigned')} · ${link.distance_to_national_hub_km} km geodesic</dd></div><div><dt>Relationship basis</dt><dd>${this.escape(link.relationship)}</dd></div></dl><a href="${this.escape(link.source_url)}" target="_blank" rel="noreferrer">Open campus source ↗</a><small>This dashed line is a transparent cartographic inference. It does not claim the route, carrier, capacity, fiber ownership, redundancy, or traffic flow of a private campus connection.</small>`;detail.hidden=false}

  addInternetExchanges(bounds){
    for(const exchange of this.internetExchanges){
      const china=exchange.ctry==='China',radius=Math.min(7,2.5+Math.log10(exchange.participants+1));
      const marker=L.circleMarker([exchange.latitude,exchange.longitude],{renderer:this.exchangeRenderer,radius,weight:1.2,color:china?'#ffd1fa':'#e8b4ef',fillColor:china?'#ef6ed7':'#b75bd0',fillOpacity:china ? .95 : .7,opacity:.9});
      marker.exchangeId=exchange.id;
      marker.bindTooltip(`${exchange.name} · ${exchange.cit}, ${exchange.ctry}`,{direction:'top',className:'office-company-tooltip'});
      marker.on('click',()=>this.selectInternetExchange(exchange.id));
      marker.addTo(this.exchangeLayer);bounds.push([exchange.latitude,exchange.longitude]);
    }
  }

  selectInternetExchange(exchangeId){
    const exchange=this.internetExchanges.find(item=>item.id===exchangeId);if(!exchange)return;
    this.clearSelection(false);this.clearCableSelection(false);this.clearChinaNetwork(false);
    this.map.flyTo([exchange.latitude,exchange.longitude],Math.max(this.map.getZoom(),6),{duration:.5});
    const established=exchange.date&&exchange.date!=='0'?`${exchange.date.slice(0,4)}${exchange.date.slice(4,6)!=='00'?`-${exchange.date.slice(4,6)}`:''}`:'Not listed';
    const detail=this.root.querySelector('#cableDetail'),safeUrl=/^https?:\/\//.test(exchange.url)?exchange.url:'';
    detail.innerHTML=`<button type="button" data-close-cable aria-label="Close exchange details">×</button><p class="eyebrow">Internet exchange point</p><h2>${this.escape(exchange.name)}</h2><dl><div><dt>Location</dt><dd>${this.escape(exchange.cit)}, ${this.escape(exchange.ctry)}</dd></div><div><dt>Region</dt><dd>${this.escape(exchange.reg)}</dd></div><div><dt>Participants</dt><dd>${exchange.participants||'Not listed'}</dd></div><div><dt>Prefixes</dt><dd>${exchange.prefixes?exchange.prefixes.toLocaleString():'Not listed'}</dd></div><div><dt>Established</dt><dd>${established}</dd></div><div><dt>Directory updated</dt><dd>${this.escape(exchange.updt||'Not listed')}</dd></div></dl>${safeUrl?`<a href="${this.escape(safeUrl)}" target="_blank" rel="noreferrer">Exchange website ↗</a>`:''}<small>City-level exchange location from Packet Clearing House's active IXP directory. A plotted point may represent a distributed exchange with multiple facilities and is not necessarily a single building. Data: PCH · CC BY-NC-SA 3.0.</small>`;
    detail.hidden=false;
  }

  selectChinaNetwork(networkId){
    this.selectedChinaNetwork=networkId;this.clearSelection(false);this.clearCableSelection(false);
    const network=this.chinaNetworks.find(item=>item.id===networkId),links=this.chinaLinks.filter(item=>item.network_id===networkId);
    for(const line of this.chinaFiberLines)line.setStyle(line.networkId===networkId?{weight:4,opacity:1}:{weight:1,opacity:.06});
    const matching=this.chinaFiberLines.filter(line=>line.networkId===networkId);
    if(matching.length)this.map.fitBounds(L.featureGroup(matching).getBounds(),{padding:[70,340],maxZoom:6});
    const nodeIds=new Set(links.flatMap(link=>[link.source_node,link.target_node])),nodeNames=this.chinaNodes.filter(node=>nodeIds.has(node.id)).map(node=>node.name);
    const documented=links.filter(link=>link.confidence==='documented_topology').length,logical=links.length-documented;
    const detail=this.root.querySelector('#cableDetail');
    detail.innerHTML=`<button type="button" data-close-cable aria-label="Close network details">×</button><p class="eyebrow">China terrestrial fiber</p><h2>${this.escape(network.name)}</h2><dl><div><dt>Operator</dt><dd>${this.escape(network.operator)}</dd></div><div><dt>Network type</dt><dd>${this.escape(network.network_type)}</dd></div><div><dt>Displayed topology</dt><dd>${documented} documented · ${logical} logical links</dd></div></dl><section><h3>${nodeNames.length} mapped backbone nodes</h3><p>${nodeNames.map(name=>this.escape(name)).join(' · ')}</p></section><section><h3>Interpretation</h3><p>${this.escape(network.description)}</p></section><a href="${this.escape(network.source_url)}" target="_blank" rel="noreferrer">Open primary source ↗</a><small>Solid lines represent a published topology. Dashed lines represent known or strongly supported logical connectivity only; they do not show conduit, right-of-way, or precise fiber position.</small>`;
    detail.hidden=false;
  }

  clearChinaNetwork(hideDetail=true){
    this.selectedChinaNetwork=null;
    for(const line of this.chinaFiberLines)line.setStyle(line.baseStyle);
    for(const line of this.dataCenterAccessLines)line.setStyle(line.baseStyle);
    for(const line of this.computeCorridorLines)line.setStyle(line.baseStyle);
    if(hideDetail)this.root.querySelector('#cableDetail').hidden=true;
  }

  selectCable(cableId){
    this.selectedCable=cableId;
    this.clearSelection(false);
    this.clearChinaNetwork();
    const cable=this.cables.find(item=>item.id===cableId);
    const matching=this.cableLines.filter(line=>line.cableId===cableId);
    for(const line of this.cableLines)line.setStyle(line.cableId===cableId?{weight:4,opacity:1}:{weight:1,opacity:.08});
    if(matching.length)this.map.fitBounds(L.featureGroup(matching).getBounds(),{padding:[70,340],maxZoom:7});
    const landings=this.cableLandings.filter(item=>item.cable_id===cableId);
    const detail=this.root.querySelector('#cableDetail');
    const value=value=>value||'Not listed';
    const safeUrl=/^https?:\/\//.test(cable.url)?cable.url:'';
    detail.innerHTML=`<button type="button" data-close-cable aria-label="Close cable details">×</button><p class="eyebrow">${cable.is_planned?'Planned system':'In service'}</p><h2>${this.escape(cable.name)}</h2><dl><div><dt>Ready for service</dt><dd>${this.escape(value(cable.rfs))}</dd></div><div><dt>Length</dt><dd>${this.escape(value(cable.length_raw))}</dd></div><div><dt>Owners</dt><dd>${this.escape(value(cable.owners))}</dd></div><div><dt>Suppliers</dt><dd>${this.escape(value(cable.suppliers))}</dd></div></dl><section><h3>${landings.length} landing points</h3><p>${landings.map(item=>this.escape(item.landing_point_name)).join(' · ')}</p></section>${safeUrl?`<a href="${this.escape(safeUrl)}" target="_blank" rel="noreferrer">Official cable website ↗</a>`:''}<small>Route is a stylized representation, not a precise seabed location. Data: TeleGeography via the Undersea Cables Dataset, March 2026 · CC BY-NC-SA 3.0.</small>`;
    detail.hidden=false;
  }

  clearCableSelection(hideDetail=true){
    this.selectedCable=null;
    for(const line of this.cableLines){const cable=this.cables.find(item=>item.id===line.cableId);line.setStyle({color:cable?.is_planned?'#d9a45f':'#3cb8c3',weight:cable?.is_planned?1.25:1.5,opacity:cable?.is_planned ? .55 : .72});}
    if(hideDetail)this.root.querySelector('#cableDetail').hidden=true;
  }

  toggleLayer(button){
    if(this.selectedModel&&button.dataset.mapLayer!=='model-inference')return;
    const layer=button.dataset.mapLayer,active=button.getAttribute('aria-pressed')!=='true';
    button.setAttribute('aria-pressed',String(active));button.classList.toggle('active',active);
    const group=layer==='data-centers'?this.dataCenterLayer:layer==='offices'?this.officeLayer:layer==='cables'?this.cableLayer:layer==='china-fiber'?this.chinaFiberLayer:layer==='exchanges'?this.exchangeLayer:this.modelInferenceLayer;
    if(active)group.addTo(this.map);else group.removeFrom(this.map);
    if(layer==='cables'&&!active)this.clearCableSelection();
    if(layer==='data-centers'&&!active)this.clearDataCenterSelection();
    if(layer==='offices'&&!active)this.clearSelection();
    if(layer==='china-fiber'&&!active)this.clearChinaNetwork();
    if(layer==='exchanges'&&!active)this.root.querySelector('#cableDetail').hidden=true;
    if(layer==='model-inference'&&!active)this.clearModelSelection();
  }

  escape(value){return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}

  selectCompany(companyId){
    this.clearDataCenterSelection(false);
    this.selectedCompany=companyId;
    const matching=this.markers.filter(marker=>marker.companyId===companyId);
    for(const marker of this.markers)marker.getElement()?.classList.toggle('is-muted',marker.companyId!==companyId);
    this.root.querySelector('#officeMapReset').hidden=false;
    if(matching.length)this.map.fitBounds(L.featureGroup(matching).getBounds(),{padding:[100,100],maxZoom:17});
    const sites=this.locations.filter(location=>location.companyId===companyId),location=sites[0],detail=this.root.querySelector('#cableDetail');
    const safeUrl=/^https?:\/\//.test(location?.sourceUrl)?location.sourceUrl:'';
    detail.innerHTML=`<button type="button" data-close-cable aria-label="Close office details">×</button><p class="eyebrow">Verified company footprint</p><h2>${this.escape(location.companyName)}</h2><p class="detail-lede">${sites.length} mapped ${sites.length===1?'location':'locations'} for this company.</p><dl><div><dt>Selected site</dt><dd>${this.escape(location.locationName)}</dd></div><div><dt>Type</dt><dd>${this.escape(location.locationType)}</dd></div><div><dt>Address</dt><dd>${this.escape(location.address)}</dd></div><div><dt>Coordinate accuracy</dt><dd>${this.escape(location.coordinateAccuracy)}</dd></div><div><dt>Verified</dt><dd>${this.escape(location.verifiedOn||'Not listed')}</dd></div></dl>${safeUrl?`<a href="${this.escape(safeUrl)}" target="_blank" rel="noreferrer">Open location source ↗</a>`:''}<small>This is a verified company location, not necessarily a data center. Selecting the company highlights all of its mapped sites.</small>`;
    detail.hidden=false;
  }

  clearSelection(refit=true){
    this.selectedCompany=null;
    for(const marker of this.markers)marker.getElement()?.classList.remove('is-muted');
    this.root.querySelector('#officeMapReset').hidden=true;
    if(refit&&this.map&&this.dataCenters.length)this.map.fitBounds(this.dataCenters.map(site=>[site.latitude,site.longitude]),{padding:[55,55],maxZoom:4});
    if(refit)this.root.querySelector('#cableDetail').hidden=true;
  }

  show(){
    this.root.hidden=false;
    this.ensureMap();
    requestAnimationFrame(()=>this.map.invalidateSize());
  }

  hide(){this.root.hidden=true}
}
