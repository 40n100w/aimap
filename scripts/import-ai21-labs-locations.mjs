import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-ai21-labs-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'ai21-labs-research');
data.locations.push({
  id: 'ai21-labs-research-001', companyId: 'ai21-labs-research', companyName: 'AI21 Labs Research',
  locationName: 'AI21 Labs Tel Aviv office', locationType: 'headquarters',
  address: '14 Leonardo da Vinci Street, 4th Floor, Tel Aviv-Yafo 6473118, Israel', country: 'Israel',
  geocodeQueries: ['לאונרדו דה וינצ׳י 14, תל אביב-יפו, ישראל', 'Leonardo da Vinci Street 14, Tel Aviv-Yafo, Israel'],
  latitude: 32.0741853, longitude: 34.7852544, coordinateAccuracy: 'building', status: 'map_ready',
  sourceUrl: 'https://www.ai21.com/events/data-and-nlp-models-2025/', sourceType: 'official_company_event_at_office',
  supportingSourceUrl: 'https://www.ai21.com/careers/talent-acquisition-partner-maternity-leave-replacement/30.549/',
  coordinateSourceUrl: 'https://www.openstreetmap.org/way/845445036',
  coordinateSourceType: 'openstreetmap_exact_address_building',
  verifiedOn: '2026-08-25', researchComplete: true,
  researchNote: 'Complete current office outcome. AI21’s first-party event page explicitly identifies its offices at 14 Leonardo da Vinci Street, fourth floor. Its current careers listing separates Tel Aviv-Yafo roles from U.S.-remote roles and discloses no other employee office. The current privacy policy likewise calls Tel Aviv the principal place of business.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
