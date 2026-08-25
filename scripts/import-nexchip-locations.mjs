import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-nexchip-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const address='88 Xifeihe Road, Hefei Comprehensive Bonded Zone, Xinzhan District, Hefei, Anhui 230012, China';
const prior=data.locations.find(x=>x.companyId==='nexchip'&&x.address===address);
data.locations=data.locations.filter(x=>x.companyId!=='nexchip');
data.locations.push({
  id:'nexchip-001',companyId:'nexchip',companyName:'Nexchip Semiconductor',locationName:'Hefei headquarters and wafer-fab campus',locationType:'headquarters',address,country:'China',
  latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',
  sourceUrl:'https://www.nexchip.com.cn/zh-cn/About/Contact',sourceType:'official_company_directory',verifiedOn:'2026-08-25',
  researchNote:'Nexchip’s current contact page, 2025 annual filing and manufacturing profile identify one headquarters and 12-inch wafer-fab campus at this address. Multiple fab phases on the campus are consolidated because no current official building-level postal addresses distinguish them. No separately addressed current offices were found.'
});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
