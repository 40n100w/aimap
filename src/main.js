import './styles.css';
import './navigation.css';
import './timeline.css';
import './map-view.css';
import { entities, loadCoreData, relationships, representativePaths } from './data.js';
import { EcosystemScene } from './scene.js';
import { UI } from './ui.js';
import { jsonArray, loadCsv, numberOrNull } from './csv.js';

async function start() {
  const mapFiles = ['office-locations.csv','data-center-campuses.csv','data-center-network-links.csv','national-compute-hubs.csv','national-compute-corridors.csv','asia-system-nodes.csv','asia-system-links.csv','model-training-evidence.csv','submarine-cables.csv','submarine-cable-routes.csv','submarine-cable-landings.csv','china-fiber-networks.csv','china-fiber-nodes.csv','china-fiber-links.csv','internet-exchanges.csv','model-inference-regions.csv','model-network-links.csv','model-organization-sites.csv'];
  const [,[officeRows,dataCenterRows,dataCenterNetworkRows,nationalHubRows,nationalCorridorRows,systemNodeRows,systemLinkRows,trainingEvidenceRows,cableRows,routeRows,landingRows,chinaNetworkRows,chinaNodeRows,chinaLinkRows,exchangeRows,inferenceRows,networkLinkRows,organizationSiteRows]] = await Promise.all([loadCoreData(),Promise.all(mapFiles.map(loadCsv))]);
  const officeLocations=officeRows.map(row=>({...row,latitude:numberOrNull(row.latitude),longitude:numberOrNull(row.longitude),entityIds:jsonArray(row.entityIds)}));
  const dataCenters=dataCenterRows.map(row=>({...row,latitude:Number(row.latitude),longitude:Number(row.longitude),capacity_mw:numberOrNull(row.capacity_mw),facilities:numberOrNull(row.facilities)}));
  const nationalComputeHubs=nationalHubRows.map(row=>({...row,latitude:Number(row.latitude),longitude:Number(row.longitude)}));
  const asiaSystemNodes=systemNodeRows.map(row=>({...row,latitude:Number(row.latitude),longitude:Number(row.longitude)}));
  const submarineCables=cableRows.map(row=>({...row,rfs_year:numberOrNull(row.rfs_year),is_planned:row.is_planned==='True',length_km:numberOrNull(row.length_km),landing_point_count:Number(row.landing_point_count)||0}));
  const submarineCableRoutes=routeRows.map(row=>({...row,segment_id:Number(row.segment_id),point_order:Number(row.point_order),longitude:Number(row.longitude),latitude:Number(row.latitude)}));
  const chinaFiberNodes=chinaNodeRows.map(row=>({...row,latitude:Number(row.latitude),longitude:Number(row.longitude)}));
  const internetExchanges=exchangeRows.map(row=>{let latitude=Number(row.lat),longitude=Number(row.lon);if(Math.abs(latitude)>90&&Math.abs(longitude)<=90)[latitude,longitude]=[longitude,latitude];return{...row,latitude,longitude,participants:Number(row.prts)||0,prefixes:Number(row.prfs)||0,traffic:Number(row.traf)||0}});
  const modelInferenceRegions=inferenceRows.map(row=>({...row,latitude:Number(row.latitude),longitude:Number(row.longitude)}));
  const modelOrganizationSites=organizationSiteRows.map(row=>({...row,latitude:Number(row.latitude),longitude:Number(row.longitude)}));
  window.ecosystemData={representativePaths};
  let ui;
  const scene=new EcosystemScene(document.querySelector('#scene'),entities,relationships,id=>{ui.showEntity(id);ui.renderEntityProfile(id);ui.renderModelPortfolio(id);ui.appendPhysicalProvenance(id)});
  ui=new UI(entities,relationships,scene,id=>{ui.showEntity(id);ui.renderEntityProfile(id);ui.renderModelPortfolio(id);ui.appendPhysicalProvenance(id)},officeLocations,{dataCenters,dataCenterNetworkLinks:dataCenterNetworkRows,nationalComputeHubs,nationalComputeCorridors:nationalCorridorRows,asiaSystemNodes,asiaSystemLinks:systemLinkRows,modelTrainingEvidence:trainingEvidenceRows,cables:submarineCables,routes:submarineCableRoutes,landings:landingRows,chinaNetworks:chinaNetworkRows,chinaNodes:chinaFiberNodes,chinaLinks:chinaLinkRows,internetExchanges,modelInferenceRegions,modelNetworkLinks:networkLinkRows,modelOrganizationSites});
}

start().catch(error=>{
  console.error(error);
  const scene=document.querySelector('#scene');
  scene.setAttribute('aria-label','The atlas data could not be loaded.');
  const localHelp=location.protocol==='file:'?'Reload the page and choose the complete data folder when prompted.':'Check that the data folder was uploaded beside index.html.';
  scene.innerHTML=`<div class="data-load-error"><strong>Atlas data could not be loaded.</strong><span>${String(error.message)}</span><small>${localHelp}</small></div>`;
});

window.addEventListener('error',event=>{if(String(event.message).toLowerCase().includes('webgl'))document.querySelector('#scene').setAttribute('aria-label','3D rendering is unavailable. Use search, layers, journeys and entity detail panels to explore the ecosystem textually.')});
