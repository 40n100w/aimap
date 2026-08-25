import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-anji-microelectronics-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.anjimicro.com/zoujinanji.html';
const rows=[
  ['Shanghai Headquarters','Building T6-5, South Area, Jinqiao Comprehensive Free Trade Zone, 5001 Huadong Road, Pudong New Area, Shanghai 201201, China','China','headquarters'],
  ['Ningbo Production Base','9 Yuntaishan Road, Xiapu Subdistrict, Beilun District, Ningbo, Zhejiang, China','China','manufacturing'],
  ['Hsinchu Office','11F-2, No. 27 Guanxin Road, East District, Hsinchu City, Taiwan','Taiwan','office']
];
const previous=new Map(data.locations.filter(x=>x.companyId==='anji-microelectronics').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='anji-microelectronics');
data.locations.push(...rows.map(([name,address,country,type],index)=>{const old=previous.get(address);return{
  id:`anji-microelectronics-${String(index+1).padStart(3,'0')}`, companyId:'anji-microelectronics', companyName:'Anji Microelectronics',
  locationName:`Anji Microelectronics ${name}`, locationType:type, address, country,
  latitude:old?.latitude??null, longitude:old?.longitude??null,
  coordinateAccuracy:old?.coordinateAccuracy??'unlocated', status:old?.status??'address_verified',
  sourceUrl, sourceType:'company_locations_page', verifiedOn:'2026-08-24',
  ...(index===0?{researchNote:'The 2025 annual report also identifies Beijing, Singapore, and French subsidiaries but provides no street addresses for them; no approximate markers are published.'}:{})
};}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
