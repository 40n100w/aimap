import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-pinecone-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const rows = [
  ['New York City HQ', 'headquarters', '127 W 26th St., 6th Floor, New York, NY 10001, United States', 'United States', 40.7455052, -73.9925205, 'https://www.addressschool.com/company/2375938/power-consulting-group'],
  ['Tel Aviv office', 'office', '4 Ein Zeitim St., Floor 1, Tel Aviv 6744840, Israel', 'Israel', null, null, null]
];

data.locations = data.locations.filter(location => location.companyId !== 'pinecone');
rows.forEach(([locationName, locationType, address, country, latitude, longitude, coordinateSourceUrl], index) => {
  const located = latitude !== null && longitude !== null;
  data.locations.push({
    id: `pinecone-${String(index + 1).padStart(3, '0')}`,
    companyId: 'pinecone',
    companyName: 'Pinecone',
    locationName,
    locationType,
    address,
    country,
    latitude,
    longitude,
    coordinateAccuracy: located ? 'building' : 'unlocated',
    status: located ? 'map_ready' : 'address_verified',
    sourceUrl: 'https://www.pinecone.io/careers/',
    sourceType: 'official_company_careers_page',
    coordinateSourceUrl: coordinateSourceUrl ?? undefined,
    coordinateSourceType: coordinateSourceUrl ? 'building_directory' : undefined,
    verifiedOn: '2026-08-25',
    researchComplete: true,
    researchNote: index === 0 ? 'Complete official global-office directory. Pinecone lists only its New York City headquarters and Tel Aviv office; remote job locations and cloud processing regions are excluded. The Tel Aviv address remains off-map until its building coordinate can be independently verified.' : undefined
  });
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
