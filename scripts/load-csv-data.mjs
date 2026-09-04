import { readFileSync } from 'node:fs';
import { jsonArray, numberOrNull, parseCsv } from '../src/csv.js';

const read = name => parseCsv(readFileSync(new URL(`../data/${name}`, import.meta.url), 'utf8'));

export const LAYERS = read('layers.csv').map(row => ({ ...row, y: Number(row.y) }));
export const entities = read('entities.csv').map(row => ({
  ...row,
  categories: jsonArray(row.categories),
  products: jsonArray(row.products),
  profileSources: jsonArray(row.profileSources),
  importanceLevel: Number(row.importanceLevel),
  positionIndex: Number(row.positionIndex),
  timelineYear: numberOrNull(row.timelineYear),
  website: row.website || null
}));
export const relationships = read('relationships.csv').map(row => ({
  ...row,
  sourceUrl: row.sourceUrl || undefined,
  activeFrom: numberOrNull(row.activeFrom),
  activeTo: numberOrNull(row.activeTo)
}));
export const aliases = Object.fromEntries(read('aliases.csv').map(row => [row.alias, row.entityId]));
export const representativePaths = Object.fromEntries(read('representative-paths.csv').map(row => [row.entityId, jsonArray(row.nodes)]));
export const officeLocations = read('office-locations.csv').map(row => ({
  ...row,
  latitude: numberOrNull(row.latitude),
  longitude: numberOrNull(row.longitude),
  entityIds: row.entityIds ? jsonArray(row.entityIds) : undefined
}));
export const submarineCables = read('submarine-cables.csv');
export const submarineCableRoutes = read('submarine-cable-routes.csv').map(row => ({ ...row, segment_id: Number(row.segment_id), point_order: Number(row.point_order), longitude: Number(row.longitude), latitude: Number(row.latitude) }));
export const submarineCableLandings = read('submarine-cable-landings.csv');
export const chinaFiberNetworks = read('china-fiber-networks.csv');
export const chinaFiberNodes = read('china-fiber-nodes.csv').map(row => ({ ...row, latitude: Number(row.latitude), longitude: Number(row.longitude) }));
export const chinaFiberLinks = read('china-fiber-links.csv');
export const nationalComputeHubs = read('national-compute-hubs.csv').map(row => ({ ...row, latitude: Number(row.latitude), longitude: Number(row.longitude) }));
export const nationalComputeCorridors = read('national-compute-corridors.csv');
export const asiaSystemNodes = read('asia-system-nodes.csv').map(row => ({ ...row, latitude: Number(row.latitude), longitude: Number(row.longitude) }));
export const asiaSystemLinks = read('asia-system-links.csv');
export const modelTrainingEvidence = read('model-training-evidence.csv');
export const dataCenterNetworkLinks = read('data-center-network-links.csv').map(row => ({ ...row, distance_to_backbone_km: Number(row.distance_to_backbone_km), distance_to_national_hub_km: Number(row.distance_to_national_hub_km) }));
export const internetExchanges = read('internet-exchanges.csv').map(row => { let latitude=Number(row.lat),longitude=Number(row.lon);if(Math.abs(latitude)>90&&Math.abs(longitude)<=90)[latitude,longitude]=[longitude,latitude];return { ...row, latitude, longitude, participants: Number(row.prts) || 0, prefixes: Number(row.prfs) || 0 } });
export const modelInferenceRegions = read('model-inference-regions.csv').map(row => ({ ...row, latitude: Number(row.latitude), longitude: Number(row.longitude) }));
export const modelNetworkLinks = read('model-network-links.csv');
export const modelOrganizationSites = read('model-organization-sites.csv').map(row => ({ ...row, latitude: Number(row.latitude), longitude: Number(row.longitude) }));
