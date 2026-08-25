import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-nata-opto-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://sonatamaterials.com/Marketing-Network/';
const rows=[
  ['Suzhou Headquarters','67 Pingsheng Road, Shengpu, Suzhou Industrial Park, Suzhou, Jiangsu 215126, China','China','headquarters'],
  ['Zhubei Office','21 Taihe Road, Zhubei City, Hsinchu County, Taiwan','Taiwan','office']
];
const previous=new Map(data.locations.filter(x=>x.companyId==='nata-opto').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='nata-opto');
data.locations.push(...rows.map(([name,address,country,type],index)=>{const old=previous.get(address);return{
  id:`nata-opto-${String(index+1).padStart(3,'0')}`, companyId:'nata-opto', companyName:'Nata Opto-electronic Materials',
  locationName:`Nata ${name}`, locationType:type, address, country,
  latitude:old?.latitude??null, longitude:old?.longitude??null,
  coordinateAccuracy:old?.coordinateAccuracy??'unlocated', status:old?.status??'address_verified',
  sourceUrl, sourceType:'company_locations_page', verifiedOn:'2026-08-24',
  ...(index===0?{researchNote:'The official company overview also names production/R&D sites in Ningbo, Quanjiao, Zibo, and Ulanqab, but supplies no street addresses; city-only markers are excluded.'}:{})
};}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
