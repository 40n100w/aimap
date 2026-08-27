import './styles.css';
import './navigation.css';
import './timeline.css';
import './map-view.css';
import { entities,relationships,representativePaths } from './data.js';
import { EcosystemScene } from './scene.js';
import { UI } from './ui.js';
import officeLocationsCsv from '../data/office-locations.csv?raw';
import submarineCablesCsv from '../data/submarine-cables.csv?raw';
import submarineCableRoutesCsv from '../data/submarine-cable-routes.csv?raw';
import submarineCableLandingsCsv from '../data/submarine-cable-landings.csv?raw';
import chinaFiberNetworksCsv from '../data/china-fiber-networks.csv?raw';
import chinaFiberNodesCsv from '../data/china-fiber-nodes.csv?raw';
import chinaFiberLinksCsv from '../data/china-fiber-links.csv?raw';
import internetExchangesCsv from '../data/internet-exchanges.csv?raw';
import modelInferenceRegionsCsv from '../data/model-inference-regions.csv?raw';
import modelNetworkLinksCsv from '../data/model-network-links.csv?raw';
import modelOrganizationSitesCsv from '../data/model-organization-sites.csv?raw';
import { jsonArray, numberOrNull, parseCsv } from './csv.js';

const officeLocations=parseCsv(officeLocationsCsv).map(row=>({
 ...row,
 latitude:numberOrNull(row.latitude),
 longitude:numberOrNull(row.longitude),
 entityIds:jsonArray(row.entityIds)
}));
const submarineCables=parseCsv(submarineCablesCsv).map(row=>({...row,rfs_year:numberOrNull(row.rfs_year),is_planned:row.is_planned==='True',length_km:numberOrNull(row.length_km),landing_point_count:Number(row.landing_point_count)||0}));
const submarineCableRoutes=parseCsv(submarineCableRoutesCsv).map(row=>({...row,segment_id:Number(row.segment_id),point_order:Number(row.point_order),longitude:Number(row.longitude),latitude:Number(row.latitude)}));
const submarineCableLandings=parseCsv(submarineCableLandingsCsv);
const chinaFiberNetworks=parseCsv(chinaFiberNetworksCsv);
const chinaFiberNodes=parseCsv(chinaFiberNodesCsv).map(row=>({...row,latitude:Number(row.latitude),longitude:Number(row.longitude)}));
const chinaFiberLinks=parseCsv(chinaFiberLinksCsv);
const internetExchanges=parseCsv(internetExchangesCsv).map(row=>{let latitude=Number(row.lat),longitude=Number(row.lon);if(Math.abs(latitude)>90&&Math.abs(longitude)<=90)[latitude,longitude]=[longitude,latitude];return{...row,latitude,longitude,participants:Number(row.prts)||0,prefixes:Number(row.prfs)||0,traffic:Number(row.traf)||0}});
const modelInferenceRegions=parseCsv(modelInferenceRegionsCsv).map(row=>({...row,latitude:Number(row.latitude),longitude:Number(row.longitude)}));
const modelNetworkLinks=parseCsv(modelNetworkLinksCsv);
const modelOrganizationSites=parseCsv(modelOrganizationSitesCsv).map(row=>({...row,latitude:Number(row.latitude),longitude:Number(row.longitude)}));

window.ecosystemData={representativePaths};
const scene=new EcosystemScene(document.querySelector('#scene'),entities,relationships,id=>{ui.showEntity(id);ui.renderEntityProfile(id);ui.renderModelPortfolio(id)});
const ui=new UI(entities,relationships,scene,id=>{ui.showEntity(id);ui.renderEntityProfile(id);ui.renderModelPortfolio(id)},officeLocations,{cables:submarineCables,routes:submarineCableRoutes,landings:submarineCableLandings,chinaNetworks:chinaFiberNetworks,chinaNodes:chinaFiberNodes,chinaLinks:chinaFiberLinks,internetExchanges,modelInferenceRegions,modelNetworkLinks,modelOrganizationSites});

// Textual fallback: the searchable interface and detail panels remain usable if WebGL fails.
window.addEventListener('error',event=>{if(String(event.message).toLowerCase().includes('webgl'))document.querySelector('#scene').setAttribute('aria-label','3D rendering is unavailable. Use search, layers, journeys and entity detail panels to explore the ecosystem textually.')});
