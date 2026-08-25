import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-contextual-ai-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'contextual-ai');
const common = {
  companyId: 'contextual-ai', companyName: 'Contextual AI', country: 'United States',
  sourceUrl: 'https://contextual.ai/blog/announcing-series-a', sourceType: 'official_company_footprint_statement',
  verifiedOn: '2026-08-25', researchComplete: false,
  researchNote: 'Partial current office outcome. Contextual AI explicitly says it works primarily in-office in Mountain View and also has a presence in New York and London. Its February 2026 privacy policy supplies the exact Mountain View suite. Exact current premises for New York and London remain unresolved, so the company is not counted complete.'
};
data.locations.push(
  {
    ...common, id: 'contextual-ai-001', locationName: 'Mountain View headquarters', locationType: 'headquarters',
    address: '150 West Evelyn Avenue, Suite 200, Mountain View, CA 94041, United States',
    latitude: 37.392128, longitude: -122.071523, coordinateAccuracy: 'building', status: 'map_ready',
    sourceUrl: 'https://contextual.ai/legal/privacy-policy', sourceType: 'official_company_privacy',
    supportingSourceUrl: 'https://contextual.ai/blog/announcing-series-a',
    coordinateSourceUrl: 'https://www.openstreetmap.org/way/721685581',
    coordinateSourceType: 'openstreetmap_exact_address_building'
  },
  {
    ...common, id: 'contextual-ai-002', locationName: 'New York presence', locationType: 'office',
    address: 'New York, NY, United States — exact premises unresolved',
    latitude: null, longitude: null, coordinateAccuracy: 'unverified', status: 'needs_review'
  },
  {
    ...common, id: 'contextual-ai-003', locationName: 'London presence', locationType: 'office', country: 'United Kingdom',
    address: 'London, United Kingdom — exact premises unresolved',
    latitude: null, longitude: null, coordinateAccuracy: 'unverified', status: 'needs_review'
  }
);
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
