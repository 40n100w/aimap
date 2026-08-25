import {readFileSync} from 'node:fs';

const [datasetPath, htmlPath] = process.argv.slice(2);
if (!datasetPath || !htmlPath) throw new Error('Usage: node scripts/import-cloudflare-locations.mjs <locations JSON> <about HTML>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const html = readFileSync(htmlPath, 'utf8');
const sourceUrl = 'https://www.cloudflare.com/about/';
const countryByOffice = new Map([
  ['San Francisco (HQ)', 'United States'], ['Austin', 'United States'], ['Champaign', 'United States'],
  ['New York City', 'United States'], ['Washington DC', 'United States'], ['Mexico City', 'Mexico'],
  ['London', 'United Kingdom'], ['Paris', 'France'], ['Lisbon', 'Portugal'], ['Munich', 'Germany'],
  ['Brussels', 'Belgium'], ['Dubai', 'United Arab Emirates'], ['Bengaluru', 'India'], ['Singapore', 'Singapore'],
  ['Beijing', 'China'], ['Tokyo', 'Japan'], ['Seoul', 'South Korea'], ['Sydney', 'Australia']
]);
const coordinatesByOffice = new Map([
  ['San Francisco (HQ)', [37.7802226, -122.3905874]], ['Austin', [30.2614078, -97.727047]],
  ['Champaign', [40.118742, -88.2465513]], ['New York City', [40.7127431, -74.0133795]],
  ['Washington DC', [38.9016559, -77.0438082]], ['Mexico City', [19.3973255, -99.1768533]],
  ['London', [51.5019633, -0.1188522]], ['Lisbon', [38.701714, -9.1761351]],
  ['Munich', [48.1229972, 11.6048558]], ['Brussels', [50.8453493, 4.3704241]],
  ['Bengaluru', [12.9872018, 77.6477978]], ['Singapore', [1.278645, 103.847414]],
  ['Beijing', [39.985963, 116.481549]], ['Tokyo', [35.6773686, 139.7694908]],
  ['Seoul', [37.501756, 127.0155606]], ['Sydney', [-33.8683127, 151.2073728]]
]);
const rows = [];
const pattern = /data-cms-path="pages\.about\.locations\.items\.(\d+)\.title"[^>]*>\s*([^<]+?)\s*<\/p>\s*<small[^>]*data-cms-path="pages\.about\.locations\.items\.\1\.description"[^>]*>\s*([^<]+?)\s*<\/small>/g;
for (const match of html.matchAll(pattern)) {
  const title = match[2].replace(/\s+/g, ' ').trim();
  const country = countryByOffice.get(title);
  if (!country) throw new Error(`Unmapped Cloudflare office: ${title}`);
  rows.push({
    locationName: title === 'San Francisco (HQ)' ? 'San Francisco headquarters' : `${title} office`,
    locationType: title === 'San Francisco (HQ)' ? 'headquarters' : 'office',
    address: `${match[3].replace(/\s+/g, ' ').trim()}${match[3].includes(country) ? '' : `, ${country}`}`,
    country,
    coordinates: coordinatesByOffice.get(title) ?? null
  });
}
if (rows.length !== 18) throw new Error(`Expected 18 Cloudflare offices, found ${rows.length}`);
const normalize = value => value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const priorByAddress = new Map(data.locations.filter(location => location.companyId === 'cloudflare').map(location => [normalize(location.address), location]));
data.locations = data.locations.filter(location => location.companyId !== 'cloudflare');
rows.forEach((row, index) => {
  const prior = priorByAddress.get(normalize(row.address));
  const {coordinates, ...locationRow} = row;
  data.locations.push({
    ...prior,
    id: `cloudflare-${String(index + 1).padStart(3, '0')}`,
    companyId: 'cloudflare',
    companyName: 'Cloudflare',
    ...locationRow,
    latitude: coordinates?.[0] ?? prior?.latitude ?? null,
    longitude: coordinates?.[1] ?? prior?.longitude ?? null,
    coordinateAccuracy: coordinates ? 'building' : prior?.coordinateAccuracy ?? 'unlocated',
    status: coordinates ? 'map_ready' : prior?.status ?? 'address_verified',
    sourceUrl,
    sourceType: coordinates ? 'official_company_directory_with_map_coordinates' : 'official_company_directory',
    verifiedOn: '2026-08-25',
    researchComplete: true,
    researchNote: index === 0 ? 'Complete current corporate-office directory: all 18 offices on Cloudflare’s official About page, matching the company’s stated worldwide office count. Cloudflare edge-network and data-center cities are infrastructure and are excluded.' : undefined
  });
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
