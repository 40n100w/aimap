import { readFileSync, writeFileSync } from 'node:fs';

const datasetUrl = new URL('../research/office-locations/locations.json', import.meta.url);
const data = JSON.parse(readFileSync(datasetUrl, 'utf8'));
let promoted = 0;
let demoted = 0;

const normalize = value => (value || '').toLocaleLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/ß/g, 'ss').replace(/ue/g, 'u').replace(/oe/g, 'o').replace(/ae/g, 'a').replace(/[^a-z0-9]+/g, ' ').trim();
const genericWords = new Set(['street','road','avenue','drive','boulevard','highway','lane','way','parkway','strasse','building','suite','floor','north','south','east','west','the','and']);
// These non-Latin OSM labels identify the named company facility and exact street number,
// but cannot share a Latin street token with the source address.
const manuallyReviewedFacilityMatches = new Set(['tsmc-007', 'amkor-010', 'arista-007', 'globalfoundries-022']);
const hasExactNumberEvidence = location => {
  if (manuallyReviewedFacilityMatches.has(location.id)) return true;
  const streetNumber = location.address.match(/\b\d+[A-Za-z]*(?:[-/]\d*[A-Za-z]+)?\b/)?.[0];
  const compactNumber = normalize(streetNumber).replace(/\s+/g, '');
  const labelTokens = normalize(location.geocodeLabel).split(' ').map(token => token.replace(/\s+/g, ''));
  return Boolean(compactNumber && labelTokens.includes(compactNumber));
};
const hasStreetEvidence = location => {
  if (manuallyReviewedFacilityMatches.has(location.id)) return true;
  const label = normalize(location.geocodeLabel);
  const streetTokens = normalize(location.address.split(',')[0]).split(' ').filter(token => token.length >= 5 && !genericWords.has(token) && !/^\d+$/.test(token));
  const companyTokens = normalize(location.companyName).split(' ').filter(token => token.length >= 5 && !genericWords.has(token));
  const locationTokens = normalize(location.locationName).split(' ').filter(token => token.length >= 5 && !genericWords.has(token));
  return streetTokens.some(token => label.includes(token)) || companyTokens.some(token => label.includes(token)) || locationTokens.some(token => label.includes(token));
};

for (const location of data.locations) {
  if (location.status !== 'map_ready' || location.coordinateSource !== 'openstreetmap_building_match') continue;
  if (hasExactNumberEvidence(location) && hasStreetEvidence(location)) continue;
  location.coordinateAccuracy = 'building_candidate';
  location.status = 'geocoded';
  delete location.coordinateSource;
  delete location.coordinateVerifiedOn;
  demoted++;
}

for (const location of data.locations) {
  if (location.status !== 'geocoded' || location.coordinateAccuracy !== 'building_candidate') continue;
  if (!hasExactNumberEvidence(location) || !hasStreetEvidence(location)) continue;
  location.coordinateAccuracy = 'building';
  location.status = 'map_ready';
  location.coordinateSource = 'openstreetmap_building_match';
  location.coordinateVerifiedOn = new Date().toISOString().slice(0, 10);
  promoted++;
}

writeFileSync(datasetUrl, `${JSON.stringify(data, null, 2)}\n`);
console.log(`Promoted ${promoted} exact-number/street building matches; demoted ${demoted} weak prior matches`);
