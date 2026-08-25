import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-lakera-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'lakera');
data.locations.push({
  id: 'lakera-001',
  companyId: 'lakera',
  companyName: 'Lakera',
  locationName: 'San Francisco office',
  locationType: 'headquarters',
  address: '282 2nd Street, Suite 100, San Francisco, CA 94105, United States',
  country: 'United States',
  latitude: 37.785585,
  longitude: -122.3970788,
  coordinateAccuracy: 'building',
  status: 'map_ready',
  sourceUrl: 'https://www.lakera.ai/contact',
  sourceType: 'official_company_contact_page',
  coordinateSourceUrl: 'https://www.walkscore.com/score/282-2nd-St-San-Francisco-CA-94105/lat%3D37.785585/lng%3D-122.3970788/',
  coordinateSourceType: 'address_geocode',
  supportingCoordinateSourceUrl: 'https://www.city-data.com/sf-permits/02ND-ST32.html',
  verifiedOn: '2026-08-25',
  researchComplete: true,
  researchNote: 'Complete current office outcome. Following Lakera’s acquisition by Check Point, the current official Lakera site publishes only this San Francisco premises across its contact and site footer. Historical Zurich references, employee locations, and Check Point parent-company offices are excluded.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
