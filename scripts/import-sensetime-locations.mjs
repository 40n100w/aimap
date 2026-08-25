import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-sensetime-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const aboutUrl = 'https://www.sensetime.com/en/about-index';
const rows = [
  ['Hong Kong office', 'office', '2nd Floor, Harbor View 1, 12 Science Park East Avenue, Hong Kong Science and Technology Park, Shatin, Hong Kong SAR, China', 'China', 'https://www.sensetime.com/en/investor'],
  ['Shanghai office', 'office', 'SenseTime Building, 1900 Hongmei Road, Xuhui District, Shanghai, China', 'China', 'https://www.sensetime.com/en/investor'],
  ['Beijing registered office', 'registered_office', 'Rooms 1101-1107, 58 Northwest 4th Ring Road, Haidian District, Beijing, China', 'China', 'https://sensetime.com/en/legal'],
  ['Singapore office', 'office', 'Keppel Bay Tower, 1 HarbourFront Avenue, Singapore 098632', 'Singapore', aboutUrl],
  ['South Korea office', 'office', 'Room 607, Building B, U-Space 2, 670 Daewangpangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi-do 13494, South Korea', 'South Korea', 'https://www.sensetime.com/kr/about-index']
];
const geocodeQueriesByName = {
  'Hong Kong office': ['Harbour View 1, 12 Science Park East Avenue, Hong Kong'],
  'Shanghai office': ['商汤科技大厦, 虹梅路1900号, 上海市', '1900 Hongmei Road, Shanghai'],
  'Beijing registered office': ['西北四环路58号, 海淀区, 北京市'],
  'South Korea office': ['U-Space 2 Building B, 670 Daewangpangyo-ro, Seongnam, South Korea']
};
const fixedCoordinatesByName = {
  'Hong Kong office': {latitude: 22.4270498, longitude: 114.212323, coordinateSourceUrl: 'https://www.openstreetmap.org/way/135716436'},
  'Singapore office': {latitude: 1.2648441, longitude: 103.8182861, coordinateSourceUrl: 'https://www.openstreetmap.org/way/47418846'}
};
const normalize = value => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const priorByAddress = new Map(data.locations.filter(location => location.companyId === 'sensetime').map(location => [normalize(location.address), location]));
data.locations = data.locations.filter(location => location.companyId !== 'sensetime');
rows.forEach(([locationName, locationType, address, country, sourceUrl], index) => {
  const prior = priorByAddress.get(normalize(address));
  const fixed = fixedCoordinatesByName[locationName];
  data.locations.push({
    ...prior,
    id: `sensetime-${String(index + 1).padStart(3, '0')}`,
    companyId: 'sensetime',
    companyName: 'SenseTime',
    locationName,
    locationType,
    address,
    country,
    geocodeQueries: geocodeQueriesByName[locationName],
    latitude: fixed?.latitude ?? prior?.latitude ?? null,
    longitude: fixed?.longitude ?? prior?.longitude ?? null,
    coordinateSourceUrl: fixed?.coordinateSourceUrl ?? prior?.coordinateSourceUrl,
    coordinateSourceType: fixed ? 'openstreetmap_building' : prior?.coordinateSourceType,
    coordinateAccuracy: fixed ? 'building' : prior?.coordinateAccuracy ?? 'unlocated',
    status: fixed ? 'map_ready' : prior?.status ?? 'address_verified',
    sourceUrl,
    sourceType: sourceUrl.includes('/investor') ? 'official_investor_relations_page' : sourceUrl.includes('/legal') ? 'official_company_legal_page' : 'official_company_directory',
    verifiedOn: '2026-08-25',
    researchComplete: false,
    researchNote: index === 0 ? 'Partial directory. Includes five public SenseTime locations that resolve to specific buildings or street addresses. The official global-office page lists 12 broad locations, while a current company news release names additional office markets; most remaining offices are disclosed only at city or district level and therefore cannot yet be mapped at building level.' : undefined
  });
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
