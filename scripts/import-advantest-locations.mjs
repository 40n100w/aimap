import {readFileSync,readdirSync} from 'node:fs';
import {join} from 'node:path';

const [pagesDir,datasetPath]=process.argv.slice(2);
if(!pagesDir||!datasetPath)throw new Error('Usage: node scripts/import-advantest-locations.mjs <official pages directory> <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const decode=value=>value.replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&nbsp;/g,' ').replace(/&acirc;/g,'â').replace(/&eacute;/g,'é').replace(/&egrave;/g,'è').replace(/&ouml;/g,'ö').replace(/&uuml;/g,'ü').replace(/&auml;/g,'ä').replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n))).replace(/\s+/g,' ').trim();
const countryPatterns=[
 ['United States',/\b(?:U\.S\.A\.?|USA|United States)\b/i],['Canada',/Canada/i],['Costa Rica',/Costa Rica/i],['Germany',/Germany/i],['France',/France/i],['Italy',/Italy/i],['Israel',/Israel/i],['Singapore',/Singapore/i],['Malaysia',/Malaysia/i],['Philippines',/Philippines/i],['Thailand',/Thailand/i],['Vietnam',/Vietnam/i],['India',/India/i],['Pakistan',/Pakistan/i],['South Korea',/(?:Republic of Korea|Korea)/i],['Taiwan',/Taiwan/i],['China',/(?:P\.R\.C\.?|China)/i],['Japan',/Japan/i]
];
const rows=[];
for(const file of readdirSync(pagesDir).filter(name=>name.endsWith('.html')).sort()){
 const html=readFileSync(join(pagesDir,file),'utf8');
 const title=decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]||file).split('｜')[0].trim();
 const itemPattern=/<div class="m-list-definition__item">([\s\S]*?)<\/div>/gi;
 for(const itemMatch of html.matchAll(itemPattern)){
  const item=itemMatch[1];
  if(!/<dt[^>]*>\s*Location\s*<\/dt>/i.test(item))continue;
  const address=decode(item.match(/<dd[^>]*>([\s\S]*?)<\/dd>/i)?.[1]||'');
  if(!address)continue;
  const country=countryPatterns.find(([,pattern])=>pattern.test(address))?.[0]||inferUsOrJapan(address);
  const locationType=/factory|manufactur/i.test(`${title} ${html.slice(Math.max(0,itemMatch.index-800),itemMatch.index+800)}`)?'factory':/r&d|research|laborator|emc center/i.test(title)?'research_center':'office';
  rows.push({title,address,country,locationType,file});
 }
}
function inferUsOrJapan(address){
 if(/\b[A-Z]{2}\s+\d{5}(?:-\d{4})?\b/.test(address))return 'United States';
 if(/\b\d{3}-\d{4}\b/.test(address))return 'Japan';
 throw new Error(`Could not infer country for: ${address}`);
}
const unique=[];
const seen=new Set();
for(const row of rows){
 const key=row.address.toLowerCase().replace(/[^a-z0-9]+/g,'');
 if(seen.has(key))continue;
 seen.add(key);unique.push(row);
}
const previous=new Map(data.locations.filter(x=>x.companyId==='advantest').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='advantest');
data.locations.push(...unique.map((row,index)=>{const old=previous.get(row.address);return{id:`advantest-${String(index+1).padStart(3,'0')}`,companyId:'advantest',companyName:'Advantest',companyGroupId:'advantest-group',locationName:row.title,locationType:row.locationType,address:row.address,country:row.country,latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl:`https://www.advantest.com/${row.file.replace(/^en_/,'en/').replace(/_/g,'/').replace(/\.html$/, '/')}`,sourceType:'company_locations_page',verifiedOn:'2026-08-24'};}));
data.updatedOn='2026-08-24';
console.error(`Parsed ${rows.length} address entries into ${unique.length} unique Advantest buildings`);
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
