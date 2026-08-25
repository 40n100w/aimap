import {readFileSync} from 'node:fs';
const [cardsPath,datasetPath]=process.argv.slice(2);
if(!cardsPath||!datasetPath)throw new Error('Usage: node scripts/import-onto-locations.mjs <endpoint JSON> <locations JSON>');
const payload=JSON.parse(readFileSync(cardsPath,'utf8'));
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://ontoinnovation.com/locations/';
const html=payload.data?.html??'';
const strip=value=>value.replace(/<br\s*\/?\s*>/gi,', ').replace(/<[^>]+>/g,' ').replace(/&(?:nbsp|#\d+|#x[0-9a-f]+);/gi,' ').replace(/\s+,/g,',').replace(/,\s*,+/g,',').replace(/\s+/g,' ').trim();
const countryByTitle=new Map([
['Shanghai Office Location','China'],['Tianjin Office Location','China'],['Germany Office Location','Germany'],['The Netherlands Office Location','Netherlands'],
['Tokyo Office Location 東京オフィス','Japan'],['Kumamoto Office Location 熊本オフィス','Japan'],['Yokkaichi Office Location 四日市オフィス','Japan'],
['Cheongju Office Location','South Korea'],['Hwasung Office Location','South Korea'],['Icheon Office Location','South Korea'],['Pyeongtaek Office Location','South Korea'],
['Malaysia Office Location','Malaysia'],['Singapore Office Location','Singapore'],['Hsinchu Office Location','Taiwan'],['Vietnam Office Location','Vietnam'],
['Tucson Office Location','United States'],['Phoenix Office Location','United States'],['California Office Location','United States'],['Florida Office Location','United States'],['Billerica Office Location','United States'],['Headquarters, Office Location','United States'],['Minnesota Office Location','United States'],['New Jersey Office Location','United States'],['Oregon Office Location','United States'],['Texas Office Location','United States'],['Washington Office Location','United States']
]);
const rows=[];
for(const match of html.matchAll(/<article class="post-preview-location">([\s\S]*?)<\/article>/g)){
  const card=match[1];
  const title=strip(card.match(/post-preview-location__address-title">([\s\S]*?)<\/div>/)?.[1]??'');
  const addressHtml=card.match(/post-preview-location__address-text"><p>([\s\S]*?)<\/p>/)?.[1];
  if(!addressHtml)continue;
  const country=countryByTitle.get(title);
  if(!country)throw new Error(`Unmapped Onto location title: ${title}`);
  rows.push({title,address:strip(addressHtml),country});
}
if(rows.length!==26)throw new Error(`Expected 26 physical Onto locations, found ${rows.length}`);
const previous=new Map(data.locations.filter(x=>x.companyId==='onto-innovation').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='onto-innovation');
data.locations.push(...rows.map((row,index)=>{const old=previous.get(row.address);const name=row.title.replace(/\s*Office Location.*$/,'').replace('Headquarters,','Headquarters').trim();return{id:`onto-innovation-${String(index+1).padStart(3,'0')}`,companyId:'onto-innovation',companyName:'Onto Innovation',locationName:`Onto Innovation ${name}`,locationType:row.title.startsWith('Headquarters')?'headquarters':'office',address:row.address,country:row.country,latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl,sourceType:'company_locations_endpoint',verifiedOn:'2026-08-24'};}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
