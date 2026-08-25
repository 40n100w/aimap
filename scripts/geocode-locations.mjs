import { readFileSync, writeFileSync } from 'node:fs';

const datasetUrl = new URL('../research/office-locations/locations.json', import.meta.url);
const limitArg = process.argv.find(argument => argument.startsWith('--limit='));
const companyArg = process.argv.find(argument => argument.startsWith('--company='));
const companyId = companyArg?.split('=')[1];
const retry = process.argv.includes('--retry');
const refresh = process.argv.includes('--refresh');
const limit = limitArg ? Number(limitArg.split('=')[1]) : 25;
if (!Number.isInteger(limit) || limit < 1) throw new Error('--limit must be a positive integer');

const data = JSON.parse(readFileSync(datasetUrl, 'utf8'));
const pending = data.locations.filter(location => (refresh || location.latitude === null) && (!companyId || location.companyId === companyId) && (refresh || retry || !location.geocodeCheckedOn)).slice(0, limit);
const preciseTypes = new Set(['house', 'building', 'office', 'commercial', 'industrial']);
const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
let lastRequestAt = 0;

async function search(queryText) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const elapsed = Date.now() - lastRequestAt;
    if (elapsed < 1100) await wait(1100 - elapsed);
    const query = new URLSearchParams({q: queryText, format: 'jsonv2', addressdetails: '1', limit: '3'});
    const response = await fetch(`https://nominatim.openstreetmap.org/search?${query}`, {
      headers: {'User-Agent': 'AI-Ecosystem-Atlas-office-research/1.0 (research dataset)'}
    });
    lastRequestAt = Date.now();
    if (response.status === 400) return [];
    if (response.status === 429 && attempt < 3) {
      const retryAfter = Number(response.headers.get('retry-after'));
      await wait(Number.isFinite(retryAfter) ? retryAfter * 1000 : 5000 * (attempt + 1));
      continue;
    }
    if (!response.ok) throw new Error(`Geocoder returned ${response.status}`);
    return response.json();
  }
  return [];
}

for (const [index, location] of pending.entries()) {
  const asciiAddress = location.address.replace(/[^\x20-\x7E]/g, ' ').replace(/\s+/g, ' ').trim();
  const simplifiedAddress = asciiAddress
    .replace(/,\s*(?:suite|unit|room|rm\.?|floor|\d+(?:st|nd|rd|th) floor|office|oficina)\b[^,]*/gi, '')
    .replace(/,+/g, ',').replace(/\s+/g, ' ').trim();
  const queries = [...new Set([
    ...(location.geocodeQueries ?? []),
    `${location.address}, ${location.country}`,
    `${simplifiedAddress}, ${location.country}`,
    simplifiedAddress,
    location.address,
    `${asciiAddress}, ${location.country}`,
    asciiAddress,
    `${location.locationName}, ${asciiAddress}, ${location.country}`
  ].filter(Boolean))];
  let match = null;
  let matchedQuery = null;
  for (const queryText of queries) {
    const results = await search(queryText);
    if (results[0]) { match = results[0]; matchedQuery = queryText; break; }
  }
  location.geocodeCheckedOn = new Date().toISOString().slice(0, 10);
  location.geocodeSource = 'https://nominatim.openstreetmap.org/';
  if (match) {
    location.latitude = Number(match.lat);
    location.longitude = Number(match.lon);
    location.coordinateAccuracy = preciseTypes.has(match.addresstype) || preciseTypes.has(match.type) ? 'building_candidate' : 'street_or_area_candidate';
    location.status = 'geocoded';
    location.geocodeLabel = match.display_name;
    location.geocodeOsmType = match.osm_type;
    location.geocodeOsmId = match.osm_id;
    location.geocodeFeatureType = match.type;
    location.geocodeQuery = matchedQuery;
  } else {
    location.status = 'needs_review';
    location.geocodeLabel = null;
  }
  writeFileSync(datasetUrl, `${JSON.stringify(data, null, 2)}\n`);
  console.log(`${index + 1}/${pending.length} ${location.id}: ${match ? location.coordinateAccuracy : 'no match'}`);
}
