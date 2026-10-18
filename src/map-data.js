import { jsonArray, loadCsv, numberOrNull } from './csv.js';

export async function loadMapData(readCsv = loadCsv) {
  const mapFiles = ['office-locations.csv','data-center-campuses.csv','data-center-network-links.csv','national-compute-hubs.csv','national-compute-corridors.csv','asia-system-nodes.csv','asia-system-links.csv','model-training-evidence.csv','submarine-cables.csv','submarine-cable-routes.csv','submarine-cable-landings.csv','china-fiber-networks.csv','china-fiber-nodes.csv','china-fiber-links.csv','internet-exchanges.csv','model-inference-regions.csv','model-network-links.csv','model-organization-sites.csv'];
  const results = await Promise.allSettled(mapFiles.map(readCsv));
  const failed = mapFiles.filter((_, index) => results[index].status === 'rejected');
  const [officeRows,dataCenterRows,dataCenterNetworkRows,nationalHubRows,nationalCorridorRows,systemNodeRows,systemLinkRows,trainingEvidenceRows,cableRows,routeRows,landingRows,chinaNetworkRows,chinaNodeRows,chinaLinkRows,exchangeRows,inferenceRows,networkLinkRows,organizationSiteRows] = results.map(result => result.status === 'fulfilled' ? result.value : []);
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
  return { officeLocations, data: {dataCenters,dataCenterNetworkLinks:dataCenterNetworkRows,nationalComputeHubs,nationalComputeCorridors:nationalCorridorRows,asiaSystemNodes,asiaSystemLinks:systemLinkRows,modelTrainingEvidence:trainingEvidenceRows,cables:submarineCables,routes:submarineCableRoutes,landings:landingRows,chinaNetworks:chinaNetworkRows,chinaNodes:chinaFiberNodes,chinaLinks:chinaLinkRows,internetExchanges,modelInferenceRegions,modelNetworkLinks:networkLinkRows,modelOrganizationSites}, failed };
}
