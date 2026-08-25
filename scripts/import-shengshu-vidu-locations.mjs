import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-shengshu-vidu-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const rows = [
  ['Beijing registered office', 'registered_office', 'Dongsheng Building, Haidian District, Beijing, China', 'China', 'https://www.genspi.com/en/privacy/'],
  ['Hong Kong office', 'office', 'Room 06, 13A/F, South Tower, World Finance Centre, Harbour City, 17 Canton Road, Tsim Sha Tsui, Kowloon, Hong Kong SAR, China', 'China', 'https://platform.vidu.com/docs/terms-of-use']
];
const normalize = value => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const priorByAddress = new Map(data.locations.filter(location => location.companyId === 'shengshu-vidu').map(location => [normalize(location.address), location]));
data.locations = data.locations.filter(location => location.companyId !== 'shengshu-vidu');
rows.forEach(([locationName, locationType, address, country, sourceUrl], index) => {
  const prior = priorByAddress.get(normalize(address));
  data.locations.push({
    ...prior,
    id: `shengshu-vidu-${String(index + 1).padStart(3, '0')}`,
    companyId: 'shengshu-vidu',
    companyName: 'ShengShu AI / Vidu',
    locationName,
    locationType,
    address,
    country,
    latitude: prior?.latitude ?? null,
    longitude: prior?.longitude ?? null,
    coordinateAccuracy: prior?.coordinateAccuracy ?? 'unlocated',
    status: prior?.status ?? 'address_verified',
    sourceUrl,
    sourceType: 'official_company_legal_page',
    verifiedOn: '2026-08-25',
    researchComplete: false,
    researchNote: index === 0 ? 'Partial directory. ShengShu’s official legal pages verify its Beijing registered building and exact Hong Kong office. Its official site additionally lists branches in Shanghai, Shenzhen, Anhui and Wuxi, but does not publish their street addresses, so the company is not counted as fully researched.' : undefined
  });
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
