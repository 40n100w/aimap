import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-pika-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'pika');
data.locations.push({
  id: 'pika-001',
  companyId: 'pika',
  companyName: 'Pika',
  locationName: 'Palo Alto headquarters',
  locationType: 'headquarters',
  address: '849 High Street, Palo Alto, CA 94301, United States',
  country: 'United States',
  latitude: 37.4415056,
  longitude: -122.1585939,
  coordinateAccuracy: 'building',
  status: 'map_ready',
  sourceUrl: 'https://pika.art/careers',
  sourceType: 'official_company_careers_page',
  supportingSourceUrl: 'https://www.linkedin.com/company/pika-labs',
  additionalSupportingSourceUrl: 'https://www.bizprofile.net/ca/palo-alto/mellis-inc',
  coordinateSourceUrl: 'https://www.openstreetmap.org/way/131995393',
  coordinateSourceType: 'openstreetmap_building_match',
  supportingCoordinateSourceUrl: 'https://www.cityofpaloalto.org/files/assets/public/city-clerk/ordinances/ordinances-1909-to-present/ordinances-by-number/ord-4808.pdf',
  verifiedOn: '2026-08-25',
  researchComplete: true,
  researchNote: 'Complete current office outcome. Pika’s official careers page identifies a single Palo Alto headquarters; the company’s published business profile and the current California principal-address record for its legal entity, Mellis, Inc., independently agree on this exact office building. No additional employee offices are disclosed.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
