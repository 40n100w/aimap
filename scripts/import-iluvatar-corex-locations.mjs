import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-iluvatar-corex-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const officialUrl='https://www.iluvatar.com/concactus';
const annualReportUrl='https://newsfile.futunn.com/public/NN-PersistNoticeAttachment/7781/20260427/12124708-0.PDF';
const rows=[
['Shanghai headquarters','headquarters','上海市闵行区陈行公路2168号3幢, China','China',officialUrl],
['Shanghai Zhangjiang office','office','上海市浦东新区碧波路690号张江微电子港6号楼501-510室, China','China',officialUrl],
['Shenzhen office','office','广东省深圳市南山区高新南九道39号深圳清华大学研究院新大楼B座2204, China','China',officialUrl],
['Nanjing office','office','江苏省南京市建邺区奥体大街68号新城科技园国际研发总部园2幢, China','China',officialUrl],
['Xi’an office','office','陕西省西安市秦创原·西安科创基金园1号楼, China','China',officialUrl],
['Beijing office','office','北京市海淀区海淀北二街10号泰鹏大厦8层806-820室, China','China',officialUrl],
['Hong Kong principal place of business','office','40/F, Dah Sing Financial Centre, 248 Queen’s Road East, Wan Chai, Hong Kong','Hong Kong',annualReportUrl]
];
const norm=s=>s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='iluvatar-corex').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='iluvatar-corex');
rows.forEach(([locationName,locationType,address,country,sourceUrl],index)=>{const prior=old.get(norm(address));data.locations.push({id:`iluvatar-corex-${String(index+1).padStart(3,'0')}`,companyId:'iluvatar-corex',companyName:'Iluvatar CoreX',locationName,locationType,address,country,latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',sourceUrl,sourceType:sourceUrl===officialUrl?'official_company_directory':'regulatory_filing',verifiedOn:'2026-08-25',researchNote:index===0?'Complete import of the six locations in Iluvatar CoreX’s current official company-address directory, plus the distinct Hong Kong principal place of business disclosed in its 2025 annual report. The registered Room 101 at the Chenhang Road headquarters is consolidated with the same published building rather than duplicated.':undefined});});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
