import { readFileSync } from 'node:fs';

const [htmlPath, datasetPath] = process.argv.slice(2);
if (!htmlPath || !datasetPath) throw new Error('Usage: node scripts/import-arm-locations.mjs <Arm HTML> <locations JSON>');
const html = readFileSync(htmlPath, 'utf8');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const decode = value => value.replace(/<br\s*\/?>/gi, ', ').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&rsquo;/g, '’').replace(/\s+/g, ' ').trim();
const normalize = value => value.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
const imported = [];
const seen = new Set();

for (const sectionMatch of html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>[\s\S]*?<table[^>]*>([\s\S]*?)<\/table>/g)) {
  const region = decode(sectionMatch[1]);
  if (!/Asia Pacific|Europe|North America/i.test(region)) continue;
  for (const row of sectionMatch[2].matchAll(/<tr>([\s\S]*?)<\/tr>/g)) {
    const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(cell => decode(cell[1]));
    if (cells.length !== 4) continue;
    const [countryOrState, city, , address] = cells;
    if (!countryOrState || !city || !address || seen.has(normalize(address))) continue;
    seen.add(normalize(address));
    imported.push({
      id: '', companyId: 'arm', companyName: 'Arm', locationName: `Arm ${city}`,
      locationType: /headquarters|\bhq\b/i.test(city) ? 'headquarters' : 'office', address,
      country: /North America/i.test(region) ? 'United States' : countryOrState,
      latitude: null, longitude: null, coordinateAccuracy: 'unlocated', status: 'address_verified',
      sourceUrl: 'https://www.arm.com/company/offices', sourceType: 'company_locations_page', verifiedOn: '2026-08-24'
    });
  }
}

imported.sort((a, b) => a.country.localeCompare(b.country) || a.locationName.localeCompare(b.locationName));
imported.forEach((location, index) => { location.id = `arm-${String(index + 1).padStart(3, '0')}`; });
data.locations = [...data.locations.filter(location => location.companyId !== 'arm'), ...imported];
data.updatedOn = '2026-08-24';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
