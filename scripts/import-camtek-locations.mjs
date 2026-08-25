import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-camtek-locations.mjs <locations JSON>');

const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const rows=[
  ['Migdal HaEmek Headquarters','Ramat Gavriel Industrial Zone, Migdal HaEmek 2309407, Israel','Israel','headquarters','https://www.camtek.com/contact/headquarters/'],
  ['Hong Kong','Unit 2107, 21/F, Greenfield Tower, Concordia Plaza, 1 Science Museum Road, Tsim Sha Tsui East, Kowloon, Hong Kong','Hong Kong','office','https://www.camtek.com/contact/asia/'],
  ['Suzhou','NM27-101 & 201, Nanopolis Suzhou, 99 Jinji Lake Avenue, Suzhou Industrial Park, Jiangsu 215123, China','China','office','https://www.camtek.com/contact/asia/'],
  ['Hsinchu','7F-11, No. 1, Section 3, Gongdao 5th Road, East District, Hsinchu City 300, Taiwan','Taiwan','office','https://www.camtek.com/contact/asia/'],
  ['Suwon','Suite 908, Ace Gwanggyo Tower 2, Changnyong-daero 256beon-gil, Yeongtong-gu, Suwon-si, Gyeonggi-do 16229, South Korea','South Korea','office','https://www.camtek.com/contact/asia/'],
  ['Tokyo','5F-48 Sanno Bridge, 2-5-6 Sanno, Ota-ku, Tokyo 143-0023, Japan','Japan','office','https://www.camtek.com/contact/asia/'],
  ['Singapore','Mapletree Hi-Tech Park, Block 163 Kallang Way, #03-11, Singapore 349256','Singapore','office','https://www.camtek.com/contact/asia/'],
  ['Beaverton','1815 NW 169th Place, Suite 1080, Beaverton, OR 97006, United States','United States','office','https://www.camtek.com/contact/usa/'],
  ['Kirchheim bei München','Liebigstraße 6, 85551 Kirchheim bei München, Germany','Germany','office','https://www.camtek.com/contact/europe/'],
  ['Bergisch Gladbach — FRT Metrology','Friedrich-Ebert-Straße 75, 51429 Bergisch Gladbach, Germany','Germany','manufacturing','https://www.camtek.com/contact/frt-metrology/']
];

const previous=new Map(data.locations.filter(x=>x.companyId==='camtek').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='camtek');
data.locations.push(...rows.map(([name,address,country,type,sourceUrl],index)=>{
  const old=previous.get(address);
  return {
    id:`camtek-${String(index+1).padStart(3,'0')}`,
    companyId:'camtek',
    companyName:'Camtek',
    locationName:`Camtek ${name}`,
    locationType:type,
    address,
    country,
    latitude:old?.latitude??null,
    longitude:old?.longitude??null,
    coordinateAccuracy:old?.coordinateAccuracy??'unlocated',
    status:old?.status??'address_verified',
    sourceUrl,
    sourceType:'company_locations_page',
    verifiedOn:'2026-08-24'
  };
}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
