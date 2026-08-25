import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-raith-locations.mjs <locations JSON>');

const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://raith.com/company/locations-and-representatives/';
const rows=[
  ['Dortmund Headquarters','Konrad-Adenauer-Allee 8, 44263 Dortmund, Germany','Germany','headquarters'],
  ['Experience Center Europe','Walter-Bruch-Straße 9, 44263 Dortmund, Germany','Germany','office'],
  ['Münster Subsidiary','Lise-Meitner-Straße 19, 48161 Münster, Germany','Germany','office'],
  ['Best — RAITH BV','De Dintel 27, 5684 PS Best, Netherlands','Netherlands','office'],
  ['Eindhoven — RAITH Laser Systems','Parmentierweg 7, 5657 EH Eindhoven, Netherlands','Netherlands','manufacturing'],
  ['Troy — RAITH America','International Applications Center, 300 Jordan Road, Troy, NY 12180, United States','United States','office'],
  ['Bengaluru — RAITH India','Sri Krishna Complex, 2nd Floor, 36 MES Ring Road, Bengaluru 560054, India','India','office'],
  ['Hong Kong — RAITH Asia','Two Chinachem Exchange Square, 7F, Units 05-06, 338 King’s Road, North Point, Hong Kong','Hong Kong','office'],
  ['Seoul — RAITH Asia Korea Branch','54 Eunhaengjeong-ro, Yangcheon-gu, Seoul 08021, South Korea','South Korea','office'],
  ['Beijing — RAITH China','Room 1201, South Tower, Leeza SOHO, 20 Lize Road, Fengtai District, Beijing 100073, China','China','office'],
  ['Experience Center Asia','West Area, 1st Floor, Building 122, 166 Meiyue Road, China (Shanghai) Pilot Free Trade Zone, Shanghai 200131, China','China','office'],
  ['Køge — Xnovo Technology','Galoche Allé 15, 1st Floor, 4600 Køge, Denmark','Denmark','office']
];

const previous=new Map(data.locations.filter(x=>x.companyId==='raith').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='raith');
data.locations.push(...rows.map(([name,address,country,type],index)=>{
  const old=previous.get(address);
  return {
    id:`raith-${String(index+1).padStart(3,'0')}`,
    companyId:'raith', companyName:'Raith', locationName:`Raith ${name}`, locationType:type,
    address, country,
    latitude:old?.latitude??null, longitude:old?.longitude??null,
    coordinateAccuracy:old?.coordinateAccuracy??'unlocated', status:old?.status??'address_verified',
    sourceUrl, sourceType:'company_locations_page', verifiedOn:'2026-08-24'
  };
}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
