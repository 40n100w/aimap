import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-tongfu-locations.mjs <locations JSON>');

const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const directory='https://en.tfme.com/contact.html';
const rows=[
  ['Nantong headquarters','headquarters','288 Chongchuan Road, Nantong, Jiangsu 226004, China','China',directory,'official_company_directory'],
  ['Hefei production base','manufacturing','Intersection of Yungu Road and Hezhang Road, Hefei, Anhui 231299, China','China',directory,'official_company_directory'],
  ['Nantong Tongfu production base','manufacturing','99 Jiangda Road, Nantong Sutong Science and Technology Industrial Park, Nantong, Jiangsu 226017, China','China',directory,'official_company_directory'],
  ['TF-AMD Suzhou production base','manufacturing','88 Sutong Road, Suzhou Industrial Park, Suzhou, Jiangsu 215021, China','China',directory,'official_company_directory'],
  ['TF-AMD Penang production base','manufacturing','Phase 3, Free Industrial Zone, Bayan Lepas, Penang 11900, Malaysia','Malaysia','https://tf-amd.com.my/contact/','official_company_directory'],
  ['Nantong Tongfu Tongke production base','manufacturing','226 Tongjing Avenue, Chongchuan District, Nantong, Jiangsu 226017, China','China',directory,'official_company_directory'],
  ['Xiamen production base','manufacturing','89 Nanhai 2nd Road, Haicang District, Xiamen, Fujian 361026, China','China',directory,'official_company_directory'],
  ['TF-AMD Batu Kawan production base','manufacturing','PT6050, Persiaran Cassia Selatan 8, Taman Perindustrian Batu Kawan, Simpang Ampat, Penang 14110, Malaysia','Malaysia','https://tf-amd.com.my/contact/','official_company_directory'],
  ['TF-AMD Suzhou Jinguang production base','research_manufacturing','9 Chunpu Road, Suzhou Industrial Park, Suzhou, Jiangsu, China','China','https://www.suzhou.gov.cn/szsrmzf/szyw/202411/04aa4b3c180a4b5f824540d5aaef9853.shtml','official_government_record']
];

const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='tongfu').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='tongfu');
rows.forEach(([locationName,locationType,address,country,sourceUrl,sourceType],index)=>{
  const prior=old.get(norm(address));
  data.locations.push({
    id:`tongfu-${String(index+1).padStart(3,'0')}`,
    companyId:'tongfu',
    companyName:'Tongfu Microelectronics',
    locationName,
    locationType,
    address,
    country,
    latitude:prior?.latitude??null,
    longitude:prior?.longitude??null,
    coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',
    status:prior?.status??'address_verified',
    sourceUrl,
    sourceType,
    verifiedOn:'2026-08-25',
    researchNote:index===0?'Tongfu’s 2025 reporting describes nine production bases. Seven are street-addressed in the current corporate contact directory; TF-AMD publishes the Batu Kawan address directly, and the Suzhou government identifies the new Jinguang Industrial Park base. Taiwan is listed only as a sales contact without a physical address and is withheld.':undefined
  });
});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
