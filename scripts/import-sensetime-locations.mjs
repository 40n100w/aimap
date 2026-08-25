import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-sensetime-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const aboutUrl = 'https://www.sensetime.com/en/about-index';
const rows = [
  ['Hong Kong office', 'office', '2nd Floor, Harbor View 1, 12 Science Park East Avenue, Hong Kong Science and Technology Park, Shatin, Hong Kong SAR, China', 'China', 'https://www.sensetime.com/en/investor'],
  ['Shanghai office', 'office', 'SenseTime Building, 1900 Hongmei Road, Xuhui District, Shanghai, China', 'China', 'https://www.sensetime.com/en/investor'],
  ['Beijing registered office', 'registered_office', 'Rooms 1101-1107, 58 Northwest 4th Ring Road, Haidian District, Beijing, China', 'China', 'https://sensetime.com/en/legal'],
  ['Singapore office', 'office', 'Keppel Bay Tower, 1 HarbourFront Avenue, Singapore 098632', 'Singapore', aboutUrl]
];
const normalize = value => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const priorByAddress = new Map(data.locations.filter(location => location.companyId === 'sensetime').map(location => [normalize(location.address), location]));
data.locations = data.locations.filter(location => location.companyId !== 'sensetime');
rows.forEach(([locationName, locationType, address, country, sourceUrl], index) => {
  const prior = priorByAddress.get(normalize(address));
  data.locations.push({
    ...prior,
    id: `sensetime-${String(index + 1).padStart(3, '0')}`,
    companyId: 'sensetime',
    companyName: 'SenseTime',
    locationName,
    locationType,
    address,
    country,
    latitude: prior?.latitude ?? null,
    longitude: prior?.longitude ?? null,
    coordinateAccuracy: prior?.coordinateAccuracy ?? 'unlocated',
    status: prior?.status ?? 'address_verified',
    sourceUrl,
    sourceType: sourceUrl.includes('/investor') ? 'official_investor_relations_page' : sourceUrl.includes('/legal') ? 'official_company_legal_page' : 'official_company_directory',
    verifiedOn: '2026-08-25',
    researchComplete: false,
    researchNote: index === 0 ? 'Partial directory. Includes the four public SenseTime locations that resolve to specific buildings or street addresses. The official global-office page lists 12 broad locations, while SenseTime’s 2025 report states that it has offices in 44 cities; most remaining offices are disclosed only at city or district level and therefore cannot be mapped at building level.' : undefined
  });
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
