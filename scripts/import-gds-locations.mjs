import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-gds-locations.mjs <locations JSON>');

const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const sourceUrl = 'https://www.gds-services.com/zh_cn/Contact.html';
const rows = [
  ['Beijing office', 'office', 'South Tower, 14th Floor, CP Center, 20 Jinhe East Road, Chaoyang District, Beijing 100020, China', 'China'],
  ['Shanghai headquarters', 'headquarters', 'Floors 4 and 5, Building C, Sunland International, 999 Zhouhai Road, Pudong, Shanghai 200137, China', 'China'],
  ['Shenzhen office', 'office', '5 Taohua Road, Futian Free Trade Zone, Shenzhen, Guangdong, China', 'China'],
  ['Guangzhou office', 'office', 'Unit C1, Room 3702, Guangzhou International Trade Center, 235 Tianhe North Road, Tianhe District, Guangzhou, Guangdong, China', 'China'],
  ['Chengdu office', 'office', 'Room 1305, Sunshine Insurance Finance Center, 88 Shujin Road, Chengdu High-Tech Zone, Chengdu, Sichuan, China', 'China'],
  ['Hong Kong office', 'office', 'Room 916, 9th Floor, One Island South, 2 Heung Yip Road, Wong Chuk Hang, Hong Kong SAR, China', 'China']
];
const normalize = value => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const priorByAddress = new Map(data.locations.filter(location => location.companyId === 'gds').map(location => [normalize(location.address), location]));
data.locations = data.locations.filter(location => location.companyId !== 'gds');
rows.forEach(([locationName, locationType, address, country], index) => {
  const prior = priorByAddress.get(normalize(address));
  data.locations.push({
    ...prior,
    id: `gds-${String(index + 1).padStart(3, '0')}`,
    companyId: 'gds',
    companyName: 'GDS Holdings',
    locationName,
    locationType,
    address,
    country,
    latitude: prior?.latitude ?? null,
    longitude: prior?.longitude ?? null,
    coordinateAccuracy: prior?.coordinateAccuracy ?? 'unlocated',
    status: prior?.status ?? 'address_verified',
    sourceUrl,
    sourceType: 'official_company_directory',
    verifiedOn: '2026-08-25',
    researchComplete: false,
    researchNote: index === 0 ? 'Partial directory. Includes every exact-address corporate office on GDS’s current official Contact page. GDS’s 2025 annual filing additionally names a Suzhou regional office without publishing its street address, so the company is not counted as fully researched. Customer data-center campuses are excluded from this corporate-office map.' : undefined
  });
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
