import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-huate-gas-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://huategas.com/en/Company/list.aspx';
const address='East Foot of Wentouling, Fengxi Village, Heshun, Lishui Town, Nanhai District, Foshan, Guangdong 528244, China';
const old=data.locations.find(x=>x.companyId==='huate-gas'&&x.address===address);
data.locations=data.locations.filter(x=>x.companyId!=='huate-gas');
data.locations.push({
  id:'huate-gas-001', companyId:'huate-gas', companyName:'Huate Gas', locationName:'Huate Gas Foshan Headquarters',
  locationType:'headquarters', address, country:'China', latitude:old?.latitude??null, longitude:old?.longitude??null,
  coordinateAccuracy:old?.coordinateAccuracy??'unlocated', status:old?.status??'address_verified',
  sourceUrl, sourceType:'company_locations_page', verifiedOn:'2026-08-24',
  researchNote:'The official site and 2025 annual report name more than twenty subsidiaries and their operating cities, but do not publish street addresses for those facilities; city-only markers are excluded.'
});
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
