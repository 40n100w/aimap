import {readFileSync} from 'node:fs';

const [htmlPath,datasetPath]=process.argv.slice(2);
if(!htmlPath||!datasetPath)throw new Error('Usage: node scripts/import-asm-locations.mjs <contact HTML> <locations JSON>');
const html=readFileSync(htmlPath,'utf8');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.asm.com/contact-us';
const encoded=html.match(/data-locations="([\s\S]*?)"\s+js-hook-in-view-animation/)?.[1];
if(!encoded)throw new Error('Could not find ASM data-locations payload');
const decode=value=>value.replaceAll('&quot;','"').replaceAll('&#x27;',"'").replaceAll('&amp;','&');
const strip=value=>value
  .replace(/<br\s*\/?\s*>/gi,', ')
  .replace(/<[^>]+>/g,' ')
  .replace(/&nbsp;|&#xA0;/gi,' ')
  .replace(/\u200b/g,'')
  .replace(/\s+,/g,',')
  .replace(/\s+/g,' ')
  .trim();
const countries=new Map([[' the Netherlands','Netherlands'],['USA','United States']]);
const rows=JSON.parse(decode(encoded));
if(rows.length!==17)throw new Error(`Expected 17 ASM locations, found ${rows.length}`);
const previous=new Map(data.locations.filter(x=>x.companyId==='asm-international').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='asm-international');
data.locations.push(...rows.map((row,index)=>{
  const country=countries.get(row.country)??row.country.trim();
  const address=`${strip(row.description)}, ${country}`.replace(new RegExp(`, ${country}, ${country}$`),`, ${country}`);
  const old=previous.get(address);
  return{id:`asm-international-${String(index+1).padStart(3,'0')}`,companyId:'asm-international',companyName:'ASM International',locationName:`ASM ${row.office}`,locationType:row.office==='Almere'?'headquarters':'office',address,country,latitude:old?.latitude??row.lat,longitude:old?.longitude??row.lng,coordinateAccuracy:old?.coordinateAccuracy??'building',status:old?.status??'map_ready',sourceUrl,sourceType:'company_locations_page',coordinateSourceUrl:sourceUrl,verifiedOn:'2026-08-24'};
}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
