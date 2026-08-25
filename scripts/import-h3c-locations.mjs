import {readFileSync} from 'node:fs';

const [datasetPath, chinaHtmlPath, globalHtmlPath] = process.argv.slice(2);
if (!datasetPath || !chinaHtmlPath || !globalHtmlPath) {
  throw new Error('Usage: node scripts/import-h3c-locations.mjs <locations JSON> <China offices HTML> <global offices HTML>');
}

const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const chinaHtml = readFileSync(chinaHtmlPath, 'utf8');
const globalHtml = readFileSync(globalHtmlPath, 'utf8');
const chinaUrl = 'https://www.h3c.com/cn/d_202405/2157260_30008_0.htm';
const globalUrl = 'https://www.h3c.com/en/About_Us/Contact_Us/Offices/';
const stripHtml = value => value.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/\s+/g, ' ').trim();

const rows = [];
for (const match of chinaHtml.matchAll(/<TR>([\s\S]*?)<\/TR>/gi)) {
  const cells = [...match[1].matchAll(/<TD[^>]*>([\s\S]*?)<\/TD>/gi)].map(cell => stripHtml(cell[1]));
  if (!/^\d+$/.test(cells[0] ?? '') || cells.length < 4) continue;
  const [, representativeOffice, officeName, rawAddress] = cells;
  const postcode = cells.at(-1);
  const isHongKong = rawAddress.includes('香港特别行政区');
  rows.push({
    locationName: `${officeName} (${representativeOffice})`,
    locationType: officeName.includes('总部') ? 'headquarters' : 'office',
    address: `${rawAddress}${postcode ? `, ${postcode}` : ''}, ${isHongKong ? 'Hong Kong SAR, China' : 'China'}`,
    country: 'China',
    sourceUrl: chinaUrl
  });
}

const countryByTitle = new Map([
  ['Macau, China', 'China'], ['Japan', 'Japan'], ['Korea', 'South Korea'], ['Malaysia', 'Malaysia'],
  ['Thailand', 'Thailand'], ['Philippines', 'Philippines'], ['Vietnam', 'Vietnam'], ['Singapore', 'Singapore'],
  ['Indonesia', 'Indonesia'], ['Kazakhstan', 'Kazakhstan'], ['Pakistan', 'Pakistan'], ['Uzbekistan', 'Uzbekistan'],
  ['United Arab Emirates', 'United Arab Emirates'], ['Saudi Arabia', 'Saudi Arabia'], ['South Africa', 'South Africa'],
  ['Mexico', 'Mexico'], ['Chile', 'Chile'], ['Spain', 'Spain'], ['Turkey', 'Turkey'], ['Germany', 'Germany'], ['Poland', 'Poland']
]);
const globalPattern = /<div class="title">\s*([^<]+)<\/div>\s*<div class="name">[\s\S]*?<div class="type">\s*Address:\s*<\/div>\s*<div class="txt">([\s\S]*?)<\/div>/g;
for (const match of globalHtml.matchAll(globalPattern)) {
  const title = stripHtml(match[1]);
  if (title === 'Hong Kong, China') continue;
  const country = countryByTitle.get(title);
  if (!country) throw new Error(`Unmapped H3C office country: ${title}`);
  rows.push({
    locationName: `${title} office`,
    locationType: 'office',
    address: `${stripHtml(match[2])}, ${country}`,
    country,
    sourceUrl: globalUrl
  });
}

if (rows.length !== 93) throw new Error(`Expected 93 unique H3C offices, found ${rows.length}`);

const normalize = value => value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const priorByAddress = new Map(data.locations.filter(location => location.companyId === 'h3c').map(location => [normalize(location.address), location]));
data.locations = data.locations.filter(location => location.companyId !== 'h3c');

rows.forEach((row, index) => {
  const prior = priorByAddress.get(normalize(row.address));
  data.locations.push({
    ...prior,
    id: `h3c-${String(index + 1).padStart(3, '0')}`,
    companyId: 'h3c',
    companyName: 'H3C',
    ...row,
    latitude: prior?.latitude ?? null,
    longitude: prior?.longitude ?? null,
    coordinateAccuracy: prior?.coordinateAccuracy ?? 'unlocated',
    status: prior?.status ?? 'address_verified',
    sourceType: 'official_company_directory',
    verifiedOn: '2026-08-25',
    researchComplete: true,
    researchNote: index === 0 ? 'Complete physical-office set combining H3C’s official 72-entry Chinese branch directory with its official international office directory. The duplicate Hong Kong entry is consolidated; Beijing and Hangzhou headquarters already appear in the Chinese directory.' : undefined
  });
});

data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
