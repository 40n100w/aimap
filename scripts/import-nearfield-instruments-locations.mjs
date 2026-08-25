import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-nearfield-instruments-locations.mjs <locations JSON>');

const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const contact='https://www.nearfieldinstruments.com/contact/';
const eindhoven='https://www.nearfieldinstruments.com/portfolio/nearfield-instruments-establishes-korean-subsidiary/';
const rows=[
  ['Rotterdam Headquarters','Vareseweg 5, 3047 AT Rotterdam, Netherlands','Netherlands','headquarters',contact],
  ['Eindhoven','High Tech Campus 69, 5656 AG Eindhoven, Netherlands','Netherlands','office',eindhoven],
  ['Nagasaki','Nagasaki Bizport 2F, 9-18 Motofunamachi, Nagasaki 850-0035, Japan','Japan','office',contact],
  ['Pyeongtaek','Ace First Godeok, Unit 1051, 290 Godeokjungang-ro, Pyeongtaek-si, Gyeonggi-do 18014, South Korea','South Korea','office',contact],
  ['Hillsboro','3485 NE John Olsen Avenue, Hillsboro, OR 97124, United States','United States','office',contact],
  ['Singapore','Singapore Business Federation Center, #14-04, 160 Robinson Road, Singapore 068914','Singapore','office',contact]
];

const previous=new Map(data.locations.filter(x=>x.companyId==='nearfield-instruments').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='nearfield-instruments');
data.locations.push(...rows.map(([name,address,country,type,sourceUrl],index)=>{
  const old=previous.get(address);
  return {
    id:`nearfield-instruments-${String(index+1).padStart(3,'0')}`,
    companyId:'nearfield-instruments', companyName:'Nearfield Instruments',
    locationName:`Nearfield Instruments ${name}`, locationType:type, address, country,
    latitude:old?.latitude??null, longitude:old?.longitude??null,
    coordinateAccuracy:old?.coordinateAccuracy??'unlocated', status:old?.status??'address_verified',
    sourceUrl, sourceType:'company_locations_page', verifiedOn:'2026-08-24'
  };
}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
