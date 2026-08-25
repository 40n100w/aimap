import { readFileSync } from 'node:fs';

const [htmlPath,datasetPath]=process.argv.slice(2);
if(!htmlPath||!datasetPath)throw new Error('Usage: node scripts/import-skhynix-locations.mjs <SK hynix HTML> <locations JSON>');
const html=readFileSync(htmlPath,'utf8');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const decode=value=>value.replace(/<br\s*\/?>/gi,', ').replace(/<[^>]+>/g,'').replace(/&amp;/g,'&').replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim();
const normalize=value=>value.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu,'');
const countryFrom=(address,title)=>{
 const rules=[[/Korea/i,'South Korea'],[/China|Wuxi|Dalian|Shanghai|Beijing|Shenzhen|Chongqing/i,'China'],[/Japan/i,'Japan'],[/Singapore/i,'Singapore'],[/Vietnam|Hanoi/i,'Vietnam'],[/Malaysia|Penang/i,'Malaysia'],[/India|Delhi/i,'India'],[/Hong Kong/i,'Hong Kong'],[/Taiwan/i,'Taiwan'],[/Poland|Gdansk/i,'Poland'],[/Ireland|Dublin/i,'Ireland'],[/United Kingdom|Weybridge/i,'United Kingdom'],[/Germany|Frankfurt|Raunheim/i,'Germany'],[/France|Paris/i,'France'],[/Finland|Helsinki/i,'Finland'],[/USA|U\.S\.|San Jose|Seattle|Austin|Houston/i,'United States']];
 return rules.find(([pattern])=>pattern.test(`${address} ${title}`))?.[1]||'Needs review';
};
const imported=[],seen=new Set();
for(const match of html.matchAll(/class="box_type02"[^>]*><h4 class="tit_type05">([\s\S]*?)<\/h4>[\s\S]*?<dt>Address<\/dt>\s*<dd>([\s\S]*?)<\/dd>/g)){
 const title=decode(match[1]),address=decode(match[2]),key=normalize(address);
 if(!address||seen.has(key))continue;
 seen.add(key);
 const country=countryFrom(address,title);
 imported.push({id:'',companyId:'sk-hynix',companyName:'SK hynix',locationName:`SK hynix ${title}`,locationType:/production|fab|manufactur/i.test(title)?'factory':/headquarters/i.test(title)?'headquarters':'office',address,country,latitude:null,longitude:null,coordinateAccuracy:'unlocated',status:country==='Needs review'?'needs_review':'address_verified',sourceUrl:'https://www.skhynix.com/company/UI-FR-CP06/',sourceType:'company_locations_page',verifiedOn:'2026-08-24'});
}
imported.sort((a,b)=>a.country.localeCompare(b.country)||a.locationName.localeCompare(b.locationName));
imported.forEach((location,index)=>{location.id=`sk-hynix-${String(index+1).padStart(3,'0')}`});
data.locations=[...data.locations.filter(location=>location.companyId!=='sk-hynix'),...imported];
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
