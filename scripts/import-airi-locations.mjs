import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-airi-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'airi');
data.locations.push({
  id: 'airi-001', companyId: 'airi', companyName: 'AIRI',
  locationName: 'Moscow City office', locationType: 'headquarters',
  address: 'Empire Business Complex, 6 Presnenskaya Embankment, Building 2, Floor 4, Moscow 123112, Russia', country: 'Russia',
  latitude: 55.7482496, longitude: 37.5401354, coordinateAccuracy: 'building', status: 'map_ready',
  sourceUrl: 'https://airi.net/ru/?force=ru', sourceType: 'official_institute_contact_page',
  supportingSourceUrl: 'https://airi.net/upload/iblock/d60/a4juzn9r1ysqvt90eecitnynahmvi5ji/AIRI_report_2024_digital_eng.pdf',
  coordinateSourceUrl: 'https://www.openstreetmap.org/node/4821286521',
  coordinateSourceType: 'openstreetmap_exact_address_point',
  verifiedOn: '2026-08-25', researchComplete: true,
  researchNote: 'Complete current office outcome. AIRI’s official contact page identifies a single office in the Empire business complex at 6 Presnenskaya Embankment, Building 2, fourth floor. Its latest published annual report independently repeats the same address and discloses no additional AIRI premises. Partner laboratories and collaborator institutions are excluded.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
