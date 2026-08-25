import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-jiangfeng-materials-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://static.cninfo.com.cn/finalpage/2026-04-16/1225108969.PDF';
const address='Anshan Road, Mingbang Technology Industrial Park, Yuyao Economic Development Zone, Ningbo, Zhejiang, China';
const old=data.locations.find(x=>x.companyId==='jiangfeng-materials'&&x.address===address);
data.locations=data.locations.filter(x=>x.companyId!=='jiangfeng-materials');
data.locations.push({
  id:'jiangfeng-materials-001', companyId:'jiangfeng-materials', companyName:'Jiangfeng Electronic Materials',
  locationName:'Jiangfeng Electronic Materials Yuyao Headquarters', locationType:'headquarters', address, country:'China',
  latitude:old?.latitude??null, longitude:old?.longitude??null,
  coordinateAccuracy:old?.coordinateAccuracy??'unlocated', status:old?.status??'address_verified',
  sourceUrl, sourceType:'regulatory_filing', verifiedOn:'2026-08-24',
  researchNote:'The current 2025 annual-report summary verifies this office at Anshan Road in Mingbang Technology Industrial Park but does not state a building number. Current company materials name additional operations in Wuhan, Hefei, Huizhou, Beijing, Shanghai, Japan, and Singapore without a complete official street-address directory; city-only markers are excluded.'
});
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
