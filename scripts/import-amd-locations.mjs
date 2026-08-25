import { readFileSync } from 'node:fs';

const [htmlPath, datasetPath] = process.argv.slice(2);
if (!htmlPath || !datasetPath) throw new Error('Usage: node scripts/import-amd-locations.mjs <AMD HTML> <locations JSON>');
const html = readFileSync(htmlPath, 'utf8');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const decode = value => value.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#0?39;/g, "'").replace(/\s+/g, ' ').trim();
const normalize = value => value.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
const imported = [];
const seen = new Set();

for (const match of html.matchAll(/<article class="card mb-3 location-card">([\s\S]*?)<\/article>/g)) {
  const body = match[1].match(/<div class="card-text">([\s\S]*?)<\/div>/)?.[1];
  if (!body) continue;
  const country = decode(body.match(/<b>([\s\S]*?)<\/b>/)?.[1] || '');
  const lines = [...body.matchAll(/<p>([\s\S]*?)<\/p>/g)].map(item => decode(item[1])).filter(line => line && !/^Tel:/i.test(line) && line !== country);
  const address = [...lines, country].filter(Boolean).join(', ');
  if (!country || !lines.length || seen.has(normalize(address))) continue;
  seen.add(normalize(address));
  const place = lines.at(-1).replace(/\s+\d[\dA-Z -]*$/i, '').replace(/,?\s+[A-Z]{2}\s*$/, '').trim();
  imported.push({
    id: '', companyId: 'amd', companyName: 'AMD', locationName: `AMD ${place || country}`,
    locationType: /2485 Augustine Drive/i.test(address) ? 'headquarters' : 'office', address, country,
    latitude: null, longitude: null, coordinateAccuracy: 'unlocated', status: 'address_verified',
    sourceUrl: 'https://www.amd.com/en/corporate/locations.html', sourceType: 'company_locations_page', verifiedOn: '2026-08-24'
  });
}

imported.sort((a, b) => a.country.localeCompare(b.country) || a.locationName.localeCompare(b.locationName) || a.address.localeCompare(b.address));
imported.forEach((location, index) => { location.id = `amd-${String(index + 1).padStart(3, '0')}`; });
data.locations = [...data.locations.filter(location => location.companyId !== 'amd'), ...imported];
data.updatedOn = '2026-08-24';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
