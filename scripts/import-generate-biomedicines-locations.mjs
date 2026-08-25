import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-generate-biomedicines-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const ids = new Set(['generate-biomedicines', 'generate-biomedicines-research']);
data.locations = data.locations.filter(location => !ids.has(location.companyId));
data.locations.push({
  id: 'generate-biomedicines-001', companyId: 'generate-biomedicines',
  entityIds: ['generate-biomedicines-research'], companyName: 'Generate:Biomedicines',
  locationName: 'Somerville headquarters and laboratories', locationType: 'headquarters',
  address: '101 South Street, Suite 900, Somerville, MA 02143, United States', country: 'United States',
  latitude: 42.3747865, longitude: -71.09106, coordinateAccuracy: 'building', status: 'map_ready',
  sourceUrl: 'https://generatebiomedicines.com/contact', sourceType: 'official_company_contact',
  supportingSourceUrl: 'https://www.sec.gov/Archives/edgar/data/2100782/000119312526051761/generate_bio_s-1a_-_exh_.htm',
  coordinateSourceUrl: 'https://www.openstreetmap.org/node/12327862264',
  coordinateSourceType: 'openstreetmap_exact_address_point',
  supportingCoordinateSourceUrl: 'https://www.flagshippioneering.com/stories/flagship-pioneerings-expanding-footprint',
  verifiedOn: '2026-08-25', researchComplete: true,
  researchNote: 'Complete current office outcome. The company’s current contact page and February 2026 SEC registration both identify 101 South Street, Suite 900 as its principal office. Its careers material describes the company’s laboratory equipment and commuter benefits, while Boynton Yards and Flagship identify the exact purpose-built lab and office building. No other current Generate office is disclosed. The two catalog company records describe the same organization and therefore share this consolidated physical footprint.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
