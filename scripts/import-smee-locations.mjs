import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-smee-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const address='1525 Zhangdong Road, Zhangjiang High-Tech Park, Pudong New Area, Shanghai, China';
const old=data.locations.find(x=>x.companyId==='smee'&&x.address===address);
data.locations=data.locations.filter(x=>x.companyId!=='smee');
data.locations.push({
  id:'smee-001',companyId:'smee',companyName:'Shanghai Micro Electronics Equipment',locationName:'SMEE Shanghai headquarters',locationType:'headquarters',address,country:'China',
  latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',
  sourceUrl:'https://www.smee.com.cn/',sourceType:'official_company_directory',verifiedOn:'2026-08-24',
  researchNote:'SMEE’s current official site consistently publishes this single company address and does not expose a separate office or manufacturing-site directory.'
});
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
