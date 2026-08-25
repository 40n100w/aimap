import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-udio-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'udio');
data.locations.push({
  id: 'udio-001', companyId: 'udio', companyName: 'Udio',
  locationName: 'Manhattan office', locationType: 'headquarters',
  address: '750 Lexington Avenue, Floor 9, New York, NY 10022, United States', country: 'United States',
  latitude: 40.7625148, longitude: -73.9685564, coordinateAccuracy: 'building', status: 'map_ready',
  sourceUrl: 'https://www.udio.com/blog/holiday-challenge-rules', sourceType: 'official_company_rules',
  supportingSourceUrl: 'https://job-boards.greenhouse.io/udio/jobs/5071142008',
  coordinateSourceUrl: 'https://www.openstreetmap.org/node/2718017520',
  coordinateSourceType: 'openstreetmap_exact_address_point',
  verifiedOn: '2026-08-25', researchComplete: true,
  researchNote: 'Complete current disclosed-office outcome. Udio’s live official careers board describes its Manhattan office and lists New York City roles, while its first-party Holiday Challenge rules publish the company contact address at 750 Lexington Avenue, Floor 9. The live board discloses no second employee office; roles that are open to remote work do not establish additional premises.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
