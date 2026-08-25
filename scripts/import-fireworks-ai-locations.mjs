import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-fireworks-ai-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'fireworks');
data.locations.push({
  id: 'fireworks-001',
  companyId: 'fireworks',
  companyName: 'Fireworks AI',
  locationName: 'Redwood City headquarters',
  locationType: 'headquarters',
  address: 'The Sequoia Building, 2317 Broadway Street, Suite 200, Redwood City, CA 94063, United States',
  country: 'United States',
  latitude: 37.4863891601563,
  longitude: -122.230438232422,
  coordinateAccuracy: 'building',
  status: 'map_ready',
  sourceUrl: 'https://fireworks.ai/terms-of-service',
  sourceType: 'official_company_legal_page',
  coordinateSourceUrl: 'https://www.whereorg.com/redwood-city-pro-garage-repair-23896026',
  coordinateSourceType: 'address_directory_geocode',
  supportingCoordinateSourceUrl: 'https://www.redwoodcity.org/home/showpublisheddocument/9993/638387707038930000',
  verifiedOn: '2026-08-25',
  researchComplete: true,
  researchNote: 'Complete office outcome. Fireworks publishes this current suite, federal employment records identify it as the company’s main employee worksite, and current office directories report a single office. Remote hiring areas and inference infrastructure are excluded. Redwood City identifies the parcel as the Sequoia Building.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
