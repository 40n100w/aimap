import { entities, officeLocations } from './load-csv-data.mjs';

const data = { locations: officeLocations };
const companyIds = new Set(entities.filter(entity => entity.type === 'Company').map(entity => entity.id));
const ids = new Set();
const errors = [];
const outcomes = [];

for (const [index, location] of data.locations.entries()) {
  const label = location.id || `record ${index + 1}`;
  if (!location.id || ids.has(location.id)) errors.push(`${label}: missing or duplicate id`);
  ids.add(location.id);
  if (!companyIds.has(location.companyId)) errors.push(`${label}: unknown companyId ${location.companyId}`);
  if (location.entityIds) {
    if (!Array.isArray(location.entityIds) || !location.entityIds.length) errors.push(`${label}: entityIds must be a non-empty array`);
    else for (const entityId of location.entityIds) if (!companyIds.has(entityId)) errors.push(`${label}: unknown entityId ${entityId}`);
  }
  for (const key of ['companyName', 'locationName', 'address', 'country', 'sourceUrl', 'verifiedOn', 'status']) {
    if (!location[key]) errors.push(`${label}: missing ${key}`);
  }
  const hasLat = Number.isFinite(location.latitude), hasLon = Number.isFinite(location.longitude);
  if (hasLat !== hasLon) errors.push(`${label}: latitude and longitude must be supplied together`);
  if (hasLat && (location.latitude < -90 || location.latitude > 90)) errors.push(`${label}: invalid latitude`);
  if (hasLon && (location.longitude < -180 || location.longitude > 180)) errors.push(`${label}: invalid longitude`);
  if (location.status === 'map_ready' && (!hasLat || location.coordinateAccuracy !== 'building')) {
    errors.push(`${label}: map_ready requires building-level coordinates`);
  }
}

const outcomeCompanies = new Set();
for (const [index, outcome] of outcomes.entries()) {
  const label = `research outcome ${index + 1}`;
  if (!companyIds.has(outcome.companyId)) errors.push(`${label}: unknown companyId ${outcome.companyId}`);
  if (outcomeCompanies.has(outcome.companyId)) errors.push(`${label}: duplicate companyId ${outcome.companyId}`);
  outcomeCompanies.add(outcome.companyId);
  for (const key of ['companyName', 'outcome', 'sourceUrl', 'verifiedOn', 'researchNote']) {
    if (!outcome[key]) errors.push(`${label}: missing ${key}`);
  }
  if (outcome.outcome !== 'no_physical_office') errors.push(`${label}: unsupported outcome ${outcome.outcome}`);
  if (outcome.researchComplete !== true) errors.push(`${label}: researchComplete must be true`);
  if (data.locations.some(location => location.companyId === outcome.companyId)) {
    errors.push(`${label}: no_physical_office conflicts with location records for ${outcome.companyId}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

const companies = new Set(data.locations.map(location => location.companyId));
const ready = data.locations.filter(location => location.status === 'map_ready').length;
console.log(`${data.locations.length} locations across ${companies.size} companies; ${ready} map-ready; ${outcomes.length} zero-location outcomes`);
