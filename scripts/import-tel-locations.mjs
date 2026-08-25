import { readFileSync, readdirSync } from 'node:fs';
import { basename, join } from 'node:path';

const [summaryPath, pagesDirectory, datasetPath] = process.argv.slice(2);
if (!summaryPath || !pagesDirectory || !datasetPath) throw new Error('Usage: node scripts/import-tel-locations.mjs <TEL summary HTML> <TEL pages directory> <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const decode = value => value.replace(/<br\s*\/?>/gi, ', ').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;|&ensp;/g, ' ').replace(/&#0?39;/g, "'").replace(/\s+/g, ' ').replace(/^Location\s*/i, '').replace(/^,+|,+$/g, '').trim();
const normalize = value => value.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
const fallbackCountries = {tea:'United States',ted:'Japan',tee:'United Kingdom',tek:'South Korea',tel_us:'United States',telbp:'Japan',telin:'India',telmsl:'Ireland',telsolar:'Switzerland',telvc:'United States',tep:'Philippines',tes:'China',tet:'Taiwan',tey:'Israel',tfe:'Japan',tkl:'Japan',tks:'China',tmea:'United States',tml:'Japan',tmy:'Malaysia',tsi:'Singapore',tsl:'China',ttad:'United States',tyl:'Japan'};
const countryFrom = (address, fallback) => {
  const rules = [
    [/U\.S\.A\.|United States/i,'United States'], [/United Kingdom|U\.K\./i,'United Kingdom'], [/South Korea|Korea/i,'South Korea'],
    [/The Netherlands|Netherlands/i,'The Netherlands'], [/Switzerland/i,'Switzerland'], [/Philippines/i,'Philippines'], [/Singapore/i,'Singapore'],
    [/Malaysia/i,'Malaysia'], [/Taiwan/i,'Taiwan'], [/Israel/i,'Israel'], [/Ireland/i,'Ireland'], [/Germany/i,'Germany'], [/France/i,'France'],
    [/Italy/i,'Italy'], [/India/i,'India'], [/China/i,'China'], [/Japan/i,'Japan']
  ];
  return rules.find(([pattern]) => pattern.test(address))?.[1] || fallback || 'Needs review';
};
const imported = [];
const seen = new Set();
const add = (locationName, locationType, address, country, sourceUrl) => {
  address = decode(address);
  if (!address || seen.has(normalize(address))) return;
  seen.add(normalize(address));
  imported.push({id:'',companyId:'tokyo-electron',companyName:'Tokyo Electron',locationName,locationType,address,country,latitude:null,longitude:null,coordinateAccuracy:'unlocated',status:'address_verified',sourceUrl,sourceType:'company_locations_page',verifiedOn:'2026-08-24'});
};

const summary = readFileSync(summaryPath, 'utf8');
const corporateAddress = summary.match(/<dt>Address<\/dt>\s*<dd>([\s\S]*?)<\/dd>/)?.[1];
if (corporateAddress) add('Tokyo Electron Global Headquarters', 'headquarters', corporateAddress, 'Japan', 'https://www.tel.com/about/summary/index.html');
const branchArea = summary.split('<h2 class="heading2">Branch, Office</h2>')[1] || '';
for (const match of branchArea.matchAll(/<dt>(Office|Branch)<\/dt>\s*<dd>[\s\S]*?<p><strong>([\s\S]*?)<\/strong><br>([\s\S]*?)<\/p>/g)) {
  add(`Tokyo Electron ${decode(match[2])}`, match[1].toLowerCase(), match[3], 'Japan', 'https://www.tel.com/about/summary/index.html');
}

for (const file of readdirSync(pagesDirectory).filter(file => file.endsWith('.html') && file !== 'index.html')) {
  const page = readFileSync(join(pagesDirectory, file), 'utf8');
  const slug = basename(file, '.html');
  const sourceUrl = `https://www.tel.com/about/locations/${file}`;
  const company = decode(page.match(/p-groupcompanydetail__title[^>]*>([\s\S]*?)<\/h1>/)?.[1] || 'Tokyo Electron');
  const headAddress = page.match(/<dt>Location<\/dt>\s*<dd>\s*<p>([\s\S]*?)<\/p>/)?.[1];
  if (headAddress) {
    const address = decode(headAddress);
    add(`${company} Head Office`, 'headquarters', address, countryFrom(address, fallbackCountries[slug]), sourceUrl);
  }
  const officeArea = page.split(/<h2[^>]*>Office List<\/h2>/i)[1] || '';
  for (const match of officeArea.matchAll(/<dt>([\s\S]*?)<\/dt>\s*<dd>[\s\S]*?<strong>Location<\/strong><br\s*\/?>?([\s\S]*?)<\/p>/g)) {
    const label = decode(match[1]).replace(/^Office[：:]?\s*/i, '') || 'Office';
    const address = decode(match[2]);
    add(`${company} — ${label}`, /factory|plant|manufactur/i.test(label) ? 'factory' : /training/i.test(label) ? 'training_center' : 'office', address, countryFrom(address, fallbackCountries[slug]), sourceUrl);
  }
}

imported.sort((a,b)=>a.country.localeCompare(b.country)||a.locationName.localeCompare(b.locationName)||a.address.localeCompare(b.address));
imported.forEach((location,index)=>{location.id=`tokyo-electron-${String(index+1).padStart(3,'0')}`});
data.locations=[...data.locations.filter(location=>location.companyId!=='tokyo-electron'),...imported];
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
