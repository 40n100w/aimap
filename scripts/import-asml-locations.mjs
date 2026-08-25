import { readFileSync } from 'node:fs';

const input = process.argv[2];
if (!input) throw new Error('Usage: node scripts/import-asml-locations.mjs <downloaded ASML locations HTML>');

const html = readFileSync(input, 'utf8');
const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/);
if (!match) throw new Error('ASML __NEXT_DATA__ payload was not found');

const nextData = JSON.parse(match[1]);
const main = nextData.props?.pageProps?.page?.layout?.sitecore?.route?.placeholders?.['headless-main'];
const locationFolders = [];

function collect(value) {
  if (!value || typeof value !== 'object') return;
  const results = value.locationFolder?.targetItem?.locationFolder?.results;
  if (Array.isArray(results)) locationFolders.push(results);
  for (const child of Object.values(value)) collect(child);
}
collect(main);

const field = (record, key) => record[key]?.data?.value?.trim() || '';
const seen = new Set();
const seenTitles = new Set();
const locations = [];

for (const folders of locationFolders) {
  for (const folder of folders) {
    for (const record of folder.locationData?.results || []) {
      const lines = ['addressLine1', 'addressLine2', 'addressLine3', 'addressLine4']
        .map(key => field(record, key)).filter(Boolean);
      const postal = field(record, 'postalCode');
      const country = field(record, 'country');
      if (!lines.length || !country) continue;
      const address = [...lines, postal, country].filter(Boolean).join(', ');
      const dedupeKey = address.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
      if (seen.has(dedupeKey)) continue;
      seen.add(dedupeKey);
      const title = field(record, 'title');
      const titleKey = title.toLocaleLowerCase();
      if (seenTitles.has(titleKey)) continue;
      locations.push({
        id: `asml-${String(locations.length + 1).padStart(3, '0')}`,
        companyId: 'asml',
        companyName: 'ASML',
        locationName: title || `ASML location ${locations.length + 1}`,
        locationType: /headquarters|\bhq\b/i.test(title) ? 'headquarters' : /factory/i.test(title) ? 'factory' : /training/i.test(title) ? 'training_center' : 'office',
        address,
        country,
        latitude: null,
        longitude: null,
        coordinateAccuracy: 'unlocated',
        status: 'address_verified',
        sourceUrl: 'https://www.asml.com/en/company/about-asml/locations',
        sourceType: 'company_locations_page',
        verifiedOn: '2026-08-24'
      });
      seenTitles.add(titleKey);
    }
  }
}

locations.sort((a, b) => a.country.localeCompare(b.country) || a.locationName.localeCompare(b.locationName));
process.stdout.write(`${JSON.stringify({schemaVersion: 1, updatedOn: '2026-08-24', locations}, null, 2)}\n`);
