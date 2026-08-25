import { readFileSync } from 'node:fs';
import { basename } from 'node:path';

const args=process.argv.slice(2),datasetPath=args.pop(),htmlPaths=args;
if(!datasetPath||!htmlPaths.length)throw new Error('Usage: node scripts/import-samsung-network-locations.mjs <regional HTML...> <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const decode=value=>value.replace(/<br[^>]*>/gi,' ').replace(/<[^>]+>/g,'').replace(/&amp;/g,'&').replace(/&nbsp;|&#\d+;/g,' ').replace(/[\u200b\u2028]/g,' ').replace(/\s+/g,' ').trim();
const canonical=value=>value.toLocaleLowerCase().replace(/\bnorth\b/g,'n').replace(/\bfirst\b/g,'1st').replace(/\bstreet\b/g,'st').replace(/[^\p{L}\p{N}]+/gu,'');
const countryFrom=(address,file)=>[[/USA/i,'United States'],[/Canada/i,'Canada'],[/China/i,'China'],[/Taipei|Taiwan/i,'Taiwan'],[/Germany/i,'Germany'],[/France/i,'France'],[/United Kingdom|\bUK\b/i,'United Kingdom'],[/Italy/i,'Italy'],[/Spain/i,'Spain'],[/Israel/i,'Israel'],[/Japan/i,'Japan'],[/Korea/i,'South Korea'],[/Singapore/i,'Singapore'],[/India/i,'India'],[/Malaysia/i,'Malaysia'],[/Thailand/i,'Thailand'],[/Vietnam/i,'Vietnam'],[/Philippines/i,'Philippines'],[/Indonesia/i,'Indonesia'],[/Australia/i,'Australia']].find(([pattern])=>pattern.test(address))?.[1]||(/korea/.test(file)?'South Korea':/japan/.test(file)?'Japan':/singapore/.test(file)?'Singapore':'Needs review');
const existing=data.locations.filter(location=>location.companyGroupId==='samsung-electronics');
const seen=new Set(existing.map(location=>canonical(location.address)));
const imported=[];
for(const htmlPath of htmlPaths){
 const file=basename(htmlPath),html=readFileSync(htmlPath,'utf8').replace(/<!--[\s\S]*?-->/g,'');
 const slug=file.replace(/^aimap-samsung-network-|\.html$/g,'');
 const sourceUrl=`https://semiconductor.samsung.com/support/contact-info/global-network/${slug==='emea'?'europe-middle-east-africa':slug}/`;
 for(const match of html.matchAll(/<li class="global-network-sales-branches-item">([\s\S]*?)<\/li>/g)){
  const block=match[1],title=decode(block.match(/global-network-sales-branches__title[^>]*>([\s\S]*?)<\/p>/)?.[1]||''),address=decode(block.match(/global-network-sales-branches__address[^>]*>([\s\S]*?)<\/p>/)?.[1]||'');
  if(!title||!address||seen.has(canonical(address)))continue;
  seen.add(canonical(address));
  const country=countryFrom(address,file);
  imported.push({id:'',companyId:'samsung-foundry',entityIds:['samsung-foundry','samsung-memory'],companyName:'Samsung Semiconductor',companyGroupId:'samsung-electronics',locationName:`Samsung Semiconductor ${title}`,locationType:'office',address,country,latitude:null,longitude:null,coordinateAccuracy:'unlocated',status:country==='Needs review'?'needs_review':'address_verified',sourceUrl,sourceType:'company_locations_page',verifiedOn:'2026-08-24'});
 }
}
const combined=[...existing,...imported].sort((a,b)=>a.country.localeCompare(b.country)||a.locationName.localeCompare(b.locationName)||a.address.localeCompare(b.address));
combined.forEach((location,index)=>{location.id=`samsung-semiconductor-${String(index+1).padStart(3,'0')}`});
data.locations=[...data.locations.filter(location=>location.companyGroupId!=='samsung-electronics'),...combined];
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
