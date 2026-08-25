import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-hwatsing-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const address='11 Juxing Road, Xianshuigu Town, Jinnan District, Tianjin 300350, China';
const old=data.locations.find(x=>x.companyId==='hwatsing'&&x.address===address);
data.locations=data.locations.filter(x=>x.companyId!=='hwatsing');
data.locations.push({
  id:'hwatsing-001',companyId:'hwatsing',companyName:'Hwatsing Technology',locationName:'Hwatsing Tianjin headquarters',locationType:'headquarters',address,country:'China',
  latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',
  sourceUrl:'https://www.hwatsing.com/relation_site.html',sourceType:'official_company_directory',verifiedOn:'2026-08-24',
  researchNote:'The current official site and 2026 regulatory materials verify this headquarters and principal operating address. Current disclosures name Beijing and Shanghai subsidiaries and activity in Zhejiang, Jiangsu, and Hubei, but no complete current street-address directory is published; those sites are withheld from the map.'
});
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
