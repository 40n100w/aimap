import {readFileSync} from 'node:fs';

const [htmlPath,datasetPath]=process.argv.slice(2);
if(!htmlPath||!datasetPath)throw new Error('Usage: node scripts/import-shinetsu-worldwide-locations.mjs <official HTML> <locations JSON>');
const html=readFileSync(htmlPath,'utf8');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.shinetsu.co.jp/en/company/network/worldwide/';
const decode=value=>value
 .replace(/<[^>]+>/g,' ')
 .replace(/&#8211;|&#x2013;/gi,'–').replace(/&#8217;|&#x2019;/gi,'’').replace(/&#038;|&amp;/gi,'&')
 .replace(/&nbsp;|&#160;/gi,' ').replace(/&#(d+);/g,(_,n)=>String.fromCodePoint(Number(n)))
 .replace(/\s+/g,' ').trim();
const normalizeCountry=value=>({America:'United States','U.S.A':'United States','U.S.A.':'United States','United Kingdom':'United Kingdom','The Netherlands':'The Netherlands','Republic of Korea':'South Korea',Korea:'South Korea'}[value]||value);
let country='';
let company='Shin-Etsu Group';
let business='';
const rows=[];
const tokenPattern=/<(?:p|a)[^>]*class="[^"]*(?:title-table|title-item-table)[^"]*"[^>]*>[\s\S]*?<\/(?:p|a)>|<li[^>]*>[\s\S]*?<\/li>/gi;
for(const match of html.matchAll(tokenPattern)){
 const token=match[0];
 const text=decode(token);
 if(/class="[^"]*title-table/.test(token)){
  country=normalizeCountry(text);
 }else if(/class="[^"]*title-item-table/.test(token)){
  company=text;
 }else if(/^Business\b/i.test(text)){
  business=text.replace(/^Business\s*/i,'');
 }else if(/^Address\b/i.test(text)){
  const address=text.replace(/^Address\s*/i,'').replace(/\s+\.$/,'').trim();
  if(address)rows.push({company,address,country,business});
 }
}
const countryFallbacks=[
 ['United States',/(?:U\.S\.A\.?|\bUSA\b)/i],['Brazil',/Brasil|Brazil/i],['Portugal',/Portugal/i],['United Kingdom',/\bU\.K\b|United Kingdom/i],['The Netherlands',/Netherlands/i],['Hungary',/Hungary/i],['Germany',/Germany/i],['Malaysia',/Malaysia/i],['South Korea',/Korea/i],['China',/(?:P\.R\.China|China)/i],['Hong Kong',/Hong Kong/i],['Taiwan',/Taiwan/i],['Singapore',/Singapore/i],['Indonesia',/Indonesia/i],['Philippines',/Philippines/i],['Thailand',/Thailand/i],['India',/India/i],['Australia',/Australia/i],['Vietnam',/Vietnam/i]
];
for(const row of rows){
 if(!countryFallbacks.some(([name])=>name===row.country))row.country=countryFallbacks.find(([,pattern])=>pattern.test(row.address))?.[0]||row.country;
}
const unique=[];
const seen=new Set();
for(const row of rows){
 const key=row.address.toLowerCase().replace(/[^a-z0-9]+/g,'');
 if(seen.has(key))continue;
 seen.add(key);
 unique.push(row);
}
const previous=new Map(data.locations.filter(x=>x.companyId==='shin-etsu'&&x.id.startsWith('shin-etsu-worldwide-')).map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>!(x.companyId==='shin-etsu'&&x.id.startsWith('shin-etsu-worldwide-')));
data.locations.push(...unique.map((row,index)=>{
 const old=previous.get(row.address);
 const locationType=/production|manufactur/i.test(row.business)?'factory':'office';
 return {id:`shin-etsu-worldwide-${String(index+1).padStart(3,'0')}`,companyId:'shin-etsu',companyName:'Shin-Etsu Chemical',companyGroupId:'shin-etsu-group',locationName:row.company,locationType,address:row.address,country:row.country,latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl,sourceType:'company_locations_page',verifiedOn:'2026-08-24'};
}));
data.updatedOn='2026-08-24';
console.error(`Parsed ${rows.length} entries into ${unique.length} unique worldwide addresses`);
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
