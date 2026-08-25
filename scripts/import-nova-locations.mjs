import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-nova-locations.mjs <locations JSON>');

const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.novami.com/nova-office/';
const rows=[
  ['Rehovot Headquarters','5 David Fikes Street, Rehovot 7632805, Israel','Israel','headquarters'],
  ['Fremont','3342 Gateway Boulevard, Fremont, CA 94538, United States','United States','office'],
  ['Bad Urach','Schützenstraße 25, 72574 Bad Urach, Germany','Germany','office'],
  ['Hsinchu','23F, No. 118 Ciyun Road, East District, Hsinchu City, Taiwan','Taiwan','office'],
  ['Hwaseong','Honor SKY Building, 4F, 93 Dongtan-daero 23-gil, Hwaseong-si, Gyeonggi-do, South Korea','South Korea','office'],
  ['Tokyo','IOS Gotanda Annex 403, 1-7-11 Higashigotanda, Shinagawa-ku, Tokyo 141-0022, Japan','Japan','office'],
  ['Dresden','Buchenstraße 12, 01097 Dresden, Germany','Germany','office'],
  ['Shanghai','Room 2302, South Tower 1, Shanghai International Fortune Center, 36 Xinjinqiao Road, Pudong New Area, Shanghai 201206, China','China','office'],
  ['Singapore','163 Kallang Way, #03-13, Singapore 349256','Singapore','office'],
  ['Mannheim — Sentronics','Dudenstraße 27-35, 68167 Mannheim, Germany','Germany','office']
];

const previous=new Map(data.locations.filter(x=>x.companyId==='nova').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='nova');
data.locations.push(...rows.map(([name,address,country,type],index)=>{
  const old=previous.get(address);
  return {
    id:`nova-${String(index+1).padStart(3,'0')}`,
    companyId:'nova',
    companyName:'Nova',
    locationName:`Nova ${name}`,
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
