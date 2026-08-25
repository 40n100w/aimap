import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-cadence-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const official='https://www.cadence.com/en_US/home/company/cadence-offices.html';
const training='https://www.cadence.com/en_US/home/training/contact.html';
const china='https://www.cadence.com/zh_CN/home/company/contact-us-china.html';
const media='https://www.cadence.com/zh_CN/home/company/newsroom/media-contacts.html';
const rows=[
  ['San Jose corporate headquarters','headquarters','2655 Seely Avenue, San Jose, CA 95134, United States','United States',official],
  ['Dublin international headquarters','headquarters','Block S, Eastpoint Business Park, Fairview, Dublin 3, Ireland','Ireland','https://www.cadence.com/en_US/home/company/contact-us.html'],
  ['Shanghai office and Asia-Pacific headquarters','office','5-10F, Building A, New Bund World Trade Center Phase III, No. 1, Lane 221, Dongyu Road, Pudong District, Shanghai 200126, China','China',china],
  ['Beijing office and R&D center','office','Building D, Beijing Global Trade Center, No. 36 North Third Ring Road East, Dongcheng District, Beijing 100013, China','China',china],
  ['Shenzhen office','office','Unit 01A, 24F, Tower B, East Pacific International Center, 7888 Shennan Avenue, Futian District, Shenzhen 518040, China','China',china],
  ['Noida office','office','Plot 57A, B & C, Noida Special Economic Zone, Noida 201305, India','India','https://www.cadence.com/en_US/home/training/apac/india.html'],
  ['Bengaluru office','office','Buildings 4A & 4B, RMZ Ecoworld SEZ, Sarjapur Outer Ring Road, Bengaluru, Karnataka 560103, India','India','https://www.cadence.com/en_US/home/training/apac/india.html'],
  ['Vélizy office','office','Bâtiment Avenir, 18 rue Grange Dame Rose, 78140 Vélizy, France','France',training],
  ['Munich office','office','Mozartstrasse 2, 85622 Feldkirchen, Munich, Germany','Germany','https://login.cadence.com/content/cadence-www/global/en_US/home/training/emea/germany.html'],
  ['Petah Tikva office','office','18 Aharon Bert Street, Kiryat Arieh, Petah Tikva 4951448, Israel','Israel',training],
  ['Yokohama office','office','2-100-45 Shin-Yokohama, Kohoku-ku, Yokohama 222-0033, Japan','Japan',media],
  ['Seongnam office','office','5F, M Tower, 8 Gumi-ro, Bundang-gu, Seongnam-si, Gyeonggi-do 13638, South Korea','South Korea',media],
  ['Singapore office','office','Level 19, Unit 19-06, Capital Tower, 168 Robinson Road, Singapore 068912','Singapore',media],
  ['Kista office','office','Isafjordsgatan 30C, Kista SE-164 40, Sweden','Sweden',training],
  ['Hsinchu office','office','2F, No. 6-5, Dusing Road, Hsinchu Science Park, Hsinchu City, Taiwan','Taiwan',media],
  ['Bracknell office','office','Maxis 1, Western Road, Bracknell RG12 1RT, United Kingdom','United Kingdom',media]
];
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='cadence').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='cadence');
rows.forEach(([locationName,locationType,address,country,sourceUrl],index)=>{
  const prior=old.get(norm(address));
  data.locations.push({
    id:`cadence-${String(index+1).padStart(3,'0')}`,companyId:'cadence',companyName:'Cadence',locationName,locationType,address,country,
    latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',
    sourceUrl,sourceType:'official_company_directory',verifiedOn:'2026-08-24',
    researchNote:index===0?'Cadence states that it has 70+ worldwide offices. This initial verified set consolidates physical buildings exposed by current official contact, regional, media, and training pages; the client-rendered global locator requires a later completeness pass.':undefined
  });
});
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
