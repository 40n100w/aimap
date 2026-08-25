import { readFileSync } from 'node:fs';

const [htmlPath, datasetPath] = process.argv.slice(2);
if (!htmlPath || !datasetPath) throw new Error('Usage: node scripts/import-micron-locations.mjs <Micron HTML> <locations JSON>');
const html = readFileSync(htmlPath, 'utf8');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const decode = value => value.replace(/<br\s*\/?>/gi, ', ').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#0?39;/g, "'").replace(/\s+/g, ' ').trim();
const normalize = value => value.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
const countryAliases = {'U.S.A.':'United States','USA':'United States','U.K.':'United Kingdom','UK':'United Kingdom','Korea':'South Korea'};
const imported = [];
const seen = new Set();

for (const match of html.matchAll(/<div id="contenttile-[^"]+" class="cmp-teaser"[\s\S]*?<\/a>\s*<\/div>/g)) {
  const block = match[0];
  const title = decode(block.match(/cmp-teaser__title[^>]*>([\s\S]*?)<\/h2>/)?.[1] || '');
  const description = block.match(/cmp-teaser__description">([\s\S]*?)<\/div>/)?.[1];
  if (!title || !description) continue;
  const rawLines = [...description.matchAll(/<(?:h4|p)>([\s\S]*?)<\/(?:h4|p)>/g)].flatMap(item => item[1].split(/<br\s*\/?>/i)).map(decode).filter(Boolean);
  const addressLines = rawLines.filter(line => !/^Micron\b/i.test(line) && !/^(Tel|Fax):/i.test(line));
  const address = addressLines.join(', ');
  if (!address || seen.has(normalize(address))) continue;
  seen.add(normalize(address));
  const countryLabel = title.split(',').at(-1).trim();
  const country = countryAliases[countryLabel] || countryLabel;
  const href = block.match(/href="([^"]+)"/)?.[1]?.replace(/&amp;/g, '&') || '';
  let latitude = null, longitude = null;
  const direct = href.match(/[?&]daddr=(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/);
  const google = href.match(/!2d(-?\d+(?:\.\d+)?)!2d(-?\d+(?:\.\d+)?)/);
  if (direct) [latitude, longitude] = [Number(direct[1]), Number(direct[2])];
  else if (google) [longitude, latitude] = [Number(google[1]), Number(google[2])];
  const mapReady = Number.isFinite(latitude) && Number.isFinite(longitude);
  imported.push({
    id:'',companyId:'micron',companyName:'Micron',locationName:`Micron ${title}`,
    locationType:/Boise/i.test(title)?'headquarters':/fab|manufactur/i.test(`${title} ${description}`)?'factory':'office',
    address,country,latitude,longitude,coordinateAccuracy:mapReady?'building':'unlocated',status:mapReady?'map_ready':'address_verified',
    sourceUrl:'https://www.micron.com/about/locations',sourceType:'company_locations_page',verifiedOn:'2026-08-24',
    ...(mapReady?{coordinateSource:'official_company_map'}:{})
  });
}

imported.sort((a,b)=>a.country.localeCompare(b.country)||a.locationName.localeCompare(b.locationName)||a.address.localeCompare(b.address));
imported.forEach((location,index)=>{location.id=`micron-${String(index+1).padStart(3,'0')}`});
data.locations=[...data.locations.filter(location=>location.companyId!=='micron'),...imported];
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
