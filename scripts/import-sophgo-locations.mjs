import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-sophgo-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
data.locations=data.locations.filter(x=>x.companyId!=='sophgo');
data.locations.push({id:'sophgo-001',companyId:'sophgo',companyName:'SOPHGO',locationName:'Beijing headquarters',locationType:'headquarters',address:'北京市海淀区丰豪东路9号院6号楼, China',country:'China',latitude:null,longitude:null,coordinateAccuracy:'unlocated',status:'address_verified',sourceUrl:'https://www.sophgo.com/about-us/index.html',sourceType:'official_company_contact_page',verifiedOn:'2026-08-25',researchNote:'SOPHGO’s current official About page publishes this exact Beijing contact address. It says the company has more than ten R&D centers in cities including Shanghai, Shenzhen, Qingdao and Xiamen, plus operations in Singapore and the United States, but does not disclose their street addresses; those city-only claims are intentionally withheld from the map.'});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
