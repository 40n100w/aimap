import { readFileSync } from 'node:fs';

const [htmlPath,datasetPath]=process.argv.slice(2);
if(!htmlPath||!datasetPath)throw new Error('Usage: node scripts/import-samsung-locations.mjs <Samsung HTML> <locations JSON>');
const html=readFileSync(htmlPath,'utf8');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const decode=value=>value.replace(/<br[^>]*>/gi,' ').replace(/<[^>]+>/g,'').replace(/&amp;/g,'&').replace(/&nbsp;|&#\d+;/g,' ').replace(/[\u200b\u2028]/g,' ').replace(/\s+/g,' ').replace(/Chip fabrication.*$/i,'').trim();
const normalize=value=>value.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu,'');
const countryFrom=address=>[[/USA/i,'United States'],[/Germany/i,'Germany'],[/Korea/i,'South Korea'],[/China/i,'China'],[/Japan/i,'Japan'],[/Singapore/i,'Singapore'],[/India/i,'India'],[/Israel/i,'Israel'],[/Canada/i,'Canada'],[/\bUK\b/i,'United Kingdom'],[/Hsinchu/i,'Taiwan']].find(([pattern])=>pattern.test(address))?.[1]||'Needs review';
const nameFrom=address=>{
 const names=[[/San Jose/i,'San Jose'],[/München/i,'Munich'],[/Giheung/i,'Giheung'],[/Shenzhen/i,'Shenzhen'],[/Tokyo/i,'Tokyo'],[/Church Street/i,'Singapore'],[/Hwaseong/i,'Hwaseong'],[/Pyeongtaek/i,'Pyeongtaek'],[/Cheonan/i,'Cheonan'],[/Asan/i,'Onyang'],[/North Xiaohe|Xi’an|Xi'an/i,"Xi'an"],[/Suzhou/i,'Suzhou'],[/Suwon/i,'Suwon SAIT'],[/Bengaluru/i,'Bengaluru SSIR'],[/Yokohama/i,'Yokohama DSRJ'],[/Montreal/i,'Montreal AI Lab'],[/Tel Aviv|Menakhem Begin/i,'Tel Aviv'],[/Cambridge/i,'Cambridge AI Lab'],[/Hangzhou/i,'Hangzhou AI Lab'],[/Tiangu 8th/i,"Xi'an AI Lab"],[/Zhubei|Hsinchu/i,'Hsinchu'],[/Pasir Panjang/i,'Singapore AI Lab']];
 return names.find(([pattern])=>pattern.test(address))?.[1]||'Location';
};
const factoryPatterns=/Giheung|Samsungjeonja|Pyeongtaek|Cheonan|Baebang|North Xiaohe|Fengli Street/i;
const researchPatterns=/Suwon|Bagmane|Yokohama|Begin|Montreal|Cambridge|Hangzhou|Tiangu|Zhubei|Pasir Panjang/i;
const imported=[],seen=new Set();
const candidates=[...html.matchAll(/CO44_text-block-disclaimer[^>]*>([\s\S]*?)<\/div>/g)].map(match=>decode(match[1])).filter(address=>/\d/.test(address)&&address.length>20).sort((a,b)=>(countryFrom(b)==='Needs review'?0:1)-(countryFrom(a)==='Needs review'?0:1)||b.length-a.length);
for(const address of candidates){
 if(!/\d/.test(address)||address.length<20)continue;
 const key=normalize(address.replace(/,?\s*Korea$/i,''));
 if(seen.has(key))continue;
 seen.add(key);
 const country=countryFrom(address),place=nameFrom(address);
 imported.push({id:'',companyId:'samsung-foundry',entityIds:['samsung-foundry','samsung-memory'],companyName:'Samsung Semiconductor',companyGroupId:'samsung-electronics',locationName:`Samsung Semiconductor ${place}`,locationType:factoryPatterns.test(address)?'factory':researchPatterns.test(address)?'research_center':/San Jose/i.test(address)?'headquarters':'office',address,country,latitude:null,longitude:null,coordinateAccuracy:'unlocated',status:country==='Needs review'?'needs_review':'address_verified',sourceUrl:'https://semiconductor.samsung.com/about-us/locations/',sourceType:'company_locations_page',verifiedOn:'2026-08-24'});
}
imported.sort((a,b)=>a.country.localeCompare(b.country)||a.locationName.localeCompare(b.locationName));
imported.forEach((location,index)=>{location.id=`samsung-semiconductor-${String(index+1).padStart(3,'0')}`});
data.locations=[...data.locations.filter(location=>location.companyGroupId!=='samsung-electronics'),...imported];
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
