import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-ai2-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'allen-institute-for-ai');
data.locations.push({
  id: 'allen-institute-for-ai-001', companyId: 'allen-institute-for-ai', companyName: 'Allen Institute for AI',
  locationName: 'Ai2 Seattle office', locationType: 'headquarters',
  address: '3800 Latona Avenue NE, Suite 300, Seattle, WA 98105, United States', country: 'United States',
  latitude: 47.6545936, longitude: -122.3254001, coordinateAccuracy: 'building', status: 'map_ready',
  sourceUrl: 'https://allenai.org/contact', sourceType: 'official_company_contact',
  supportingSourceUrl: 'https://allenai.org/careers',
  coordinateSourceUrl: 'https://www.openstreetmap.org/node/13014701852',
  coordinateSourceType: 'openstreetmap_exact_address_point',
  supportingCoordinateSourceUrl: 'https://www.guardianglass.com/mx/en/projects/project-details/Northlake-Commons',
  verifiedOn: '2026-08-25', researchComplete: true,
  researchNote: 'Complete current office outcome. Ai2’s official contact page publishes this suite, and its current careers FAQ says most roles require being local to the Seattle office. The one Berkeley-listed Young Investigator role does not establish a separate Ai2 office. Parcel and architecture sources identify the exact Northlake Commons office building at this address.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
