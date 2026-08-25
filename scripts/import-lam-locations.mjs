import { readFileSync } from 'node:fs';

const [htmlPath, datasetPath] = process.argv.slice(2);
if (!htmlPath || !datasetPath) throw new Error('Usage: node scripts/import-lam-locations.mjs <Lam HTML> <locations JSON>');

const html = readFileSync(htmlPath, 'utf8');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const decode = value => value
  .replace(/<br\s*\/?>/gi, ', ')
  .replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&').replace(/&#0?39;/g, "'").replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ').trim();
const normalize = value => value.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
const countryFrom = (panel, section, title, address) => {
  if (/United States Offices/i.test(panel) || /United States/i.test(section) || /, [A-Z]{2}(?:,|\s+\d)/.test(address)) return 'United States';
  if (/Asia Offices/i.test(panel) && !/Manufacturing/i.test(section)) return section === 'Korea' ? 'South Korea' : section;
  if (/Europe And Middle East Offices/i.test(panel)) return section;
  if (/Korea|Hwaseong|Osan|Yongin/i.test(`${title} ${address}`)) return 'South Korea';
  if (/Taiwan|Taoyuan/i.test(`${title} ${address}`)) return 'Taiwan';
  if (/Malaysia|Penang/i.test(`${title} ${address}`)) return 'Malaysia';
  if (/Austria|Villach/i.test(`${title} ${address}`)) return 'Austria';
  const explicit = ['United States', 'China', 'India', 'Japan', 'Malaysia', 'Singapore', 'Taiwan', 'Austria', 'Belgium', 'France', 'Germany', 'Ireland', 'Israel', 'Italy', 'Switzerland', 'The Netherlands', 'United Kingdom'];
  return explicit.find(country => address.includes(country)) || 'Needs review';
};

const imported = [];
const seen = new Set();
for (const panelMatch of html.matchAll(/<div class="js-locationPanel[\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>([\s\S]*?)<\/div><!-- \.locations-wrapper -->/g)) {
  const panel = decode(panelMatch[1]);
  for (const sectionMatch of panelMatch[2].matchAll(/<section[^>]*>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)<\/section>/g)) {
    const section = decode(sectionMatch[1]);
    for (const match of sectionMatch[2].matchAll(/<div class="location"\s+data-lat="([^"]*)"\s+data-lng="([^"]*)"\s+data-title="([^"]*)">[\s\S]*?<div class="location-detail-address">([\s\S]*?)<\/div>/g)) {
      const latitude = Number(match[1]), longitude = Number(match[2]);
      const title = decode(match[3]);
      const address = [...match[4].matchAll(/<p>([\s\S]*?)<\/p>/g)].map(item => decode(item[1])).filter(Boolean).join(', ');
      if (!address || !Number.isFinite(latitude) || !Number.isFinite(longitude)) continue;
      const key = normalize(address);
      if (seen.has(key)) continue;
      seen.add(key);
      imported.push({
        id: '', companyId: 'lam-research', companyName: 'Lam Research', locationName: title,
        locationType: /headquarters|\bhq\b/i.test(`${section} ${title}`) ? 'headquarters' : /manufacturing/i.test(`${section} ${title}`) ? 'factory' : /training/i.test(title) ? 'training_center' : 'office',
        address, country: countryFrom(panel, section, title, address), latitude, longitude,
        coordinateAccuracy: 'building', status: 'map_ready',
        sourceUrl: 'https://www.lamresearch.com/company/locations/', sourceType: 'company_locations_page',
        verifiedOn: '2026-08-24', coordinateSource: 'official_company_map'
      });
    }
  }
}

imported.sort((a, b) => a.country.localeCompare(b.country) || a.locationName.localeCompare(b.locationName));
imported.forEach((location, index) => { location.id = `lam-research-${String(index + 1).padStart(3, '0')}`; });
data.locations = [...data.locations.filter(location => location.companyId !== 'lam-research'), ...imported];
data.updatedOn = '2026-08-24';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
