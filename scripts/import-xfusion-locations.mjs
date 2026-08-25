import {readFileSync} from 'node:fs';

const [datasetPath, contactHtmlPath] = process.argv.slice(2);
if (!datasetPath || !contactHtmlPath) throw new Error('Usage: node scripts/import-xfusion-locations.mjs <locations JSON> <contact HTML>');

const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const html = readFileSync(contactHtmlPath, 'utf8');
const contactUrl = 'https://www.xfusion.com/en/contact-us';
const aboutUrl = 'https://www.xfusion.com/en/about';
const manualUrl = 'https://www.xfusion.com/wp-content/uploads/2024/11/FusionDirector-Intelligent-Management-Software-Technical-White-Paper.pdf';
const countries = new Map([
  ['Singapore (HQ)', 'Singapore'], ['Italy', 'Italy'], ['France', 'France'], ['Germany', 'Germany'],
  ['Hong Kong (China)', 'China'], ['Malaysia', 'Malaysia'], ['Indonesia', 'Indonesia'], ['Japan', 'Japan'],
  ['South Korea', 'South Korea'], ['Mexico', 'Mexico'], ['Brasil', 'Brazil'],
  ['United Arab Emirates', 'United Arab Emirates'], ['Saudi Arabia', 'Saudi Arabia']
]);
const decode = value => value.replace(/&amp;/g, '&').replace(/&#038;/g, '&').replace(/&quot;/g, '"').trim();
const rows = [];
const pattern = /<li(?: class="click-active")? data-addr="([^"]+)"[^>]*data-link="([^"]+)"[^>]*>([^<]+)<\/li>/g;
for (const match of html.matchAll(pattern)) {
  const address = decode(match[1]);
  const link = decode(match[2]);
  const title = decode(match[3]);
  const country = countries.get(title);
  if (!country) throw new Error(`Unmapped xFusion country: ${title}`);
  const exact = link.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/);
  const mapCenter = link.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/);
  const coordinates = exact ?? mapCenter;
  if (!coordinates) throw new Error(`No official map coordinates for xFusion ${title}`);
  rows.push({
    locationName: title === 'Singapore (HQ)' ? 'Singapore headquarters' : `${title} office`,
    locationType: title === 'Singapore (HQ)' ? 'headquarters' : 'office',
    address: country === 'China' ? `${address}, Hong Kong SAR, China` : address,
    country,
    latitude: Number(coordinates[1]),
    longitude: Number(coordinates[2]),
    coordinateAccuracy: 'building',
    status: 'map_ready',
    sourceUrl: contactUrl,
    sourceType: 'official_company_directory_with_map_coordinates'
  });
}
rows.push(
  {
    locationName: 'Penang global supply center', locationType: 'facility',
    address: '2005 Tingkat Perusahaan 1, Kawasan Perusahaan Prai, Plant 5, 13600 Prai, Penang, Malaysia', country: 'Malaysia',
    latitude: null, longitude: null, coordinateAccuracy: 'unlocated', status: 'address_verified', sourceUrl: aboutUrl, sourceType: 'official_company_profile'
  },
  {
    locationName: 'Zhengzhou office', locationType: 'office',
    address: '9th Floor, Building 1, Zensun Boya Square, Longzihu Wisdom Island, Zhengdong New District, Zhengzhou, Henan 450046, China', country: 'China',
    latitude: null, longitude: null, coordinateAccuracy: 'unlocated', status: 'address_verified', sourceUrl: manualUrl, sourceType: 'official_company_document'
  }
);
if (rows.length !== 15) throw new Error(`Expected 15 xFusion locations, found ${rows.length}`);

const normalize = value => value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const priorByAddress = new Map(data.locations.filter(location => location.companyId === 'xfusion').map(location => [normalize(location.address), location]));
data.locations = data.locations.filter(location => location.companyId !== 'xfusion');
rows.forEach((row, index) => {
  const prior = priorByAddress.get(normalize(row.address));
  data.locations.push({
    ...prior,
    id: `xfusion-${String(index + 1).padStart(3, '0')}`,
    companyId: 'xfusion',
    companyName: 'xFusion',
    ...row,
    verifiedOn: '2026-08-25',
    researchComplete: false,
    researchNote: index === 0 ? 'Partial directory. Includes all 13 exact-address offices on xFusion’s official Contact Us page, its separately published Penang global supply center, and its official-document Zhengzhou address. xFusion states that it has 8 research centers, 7 regional offices and 6 GTACs, but does not publish street addresses for every disclosed center, so this company is not counted as fully researched.' : undefined
  });
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
