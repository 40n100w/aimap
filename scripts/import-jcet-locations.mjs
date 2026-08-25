import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-jcet-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const chinaCert='https://www.jcetglobal.com/uploads/27001%26e8%268b%26b1%26e6%2696%2687-%26e6%2680%26bb%26e8%26af%2681.pdf';
const esg='https://www.jcetglobal.com/uploads/2023%26e5%26b9%26b4%26e9%2695%26bf%26e7%2694%26b5%26e7%26a7%2691%26e6%268a%2680ESG%26e6%268a%25a5%26e5%2591%268a-EN.PDF';
const rows=[
  ['Jiangyin Binjiang production base','manufacturing','275 Binjiang Middle Road, Jiangyin, Jiangsu, China','China',chinaCert],
  ['Jiangyin City East production and R&D base','research_manufacturing','78 Changshan Road, Chengjiang Town, Jiangyin, Jiangsu, China','China',chinaCert],
  ['Jiangyin Dong’an production site','manufacturing','1 Dong’an Road, Jiangyin, Jiangsu, China','China',chinaCert],
  ['Chuzhou production base','manufacturing','999 Shiji Road, Chuzhou, Anhui, China','China',chinaCert],
  ['Suqian production base','manufacturing','5 Putuoshan Road, Susu Industrial Park, Suqian, Jiangsu, China','China',chinaCert],
  ['Singapore Yishun production base','manufacturing','5 Yishun Street 23, Singapore 768442','Singapore',esg],
  ['Incheon production and R&D base','research_manufacturing','191 Jayumuyeok-ro, Jung-gu, Incheon 22379, South Korea','South Korea',esg],
  ['Incheon JCET STATS production base','manufacturing','299 Jayumuyeok-ro, Jung-gu, Incheon 22379, South Korea','South Korea','https://www.jcetglobal.com/uploads/SCK%20IATF16949.pdf']
];
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='jcet').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='jcet');
rows.forEach(([locationName,locationType,address,country,sourceUrl],index)=>{const prior=old.get(norm(address));data.locations.push({
  id:`jcet-${String(index+1).padStart(3,'0')}`,companyId:'jcet',companyName:'JCET',locationName,locationType,address,country,
  latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',
  sourceUrl,sourceType:'official_company_certification',verifiedOn:'2026-08-25',
  researchNote:index===0?'JCET’s 2024 ESG report defines eight operating manufacturing plants. Co-located JCET legal entities at 78 Changshan Road are represented by one physical campus marker. Sales branches in more than 20 countries are not street-addressed in the reviewed current official directory and are withheld.':undefined
});});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
