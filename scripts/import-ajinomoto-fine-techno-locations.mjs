import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-ajinomoto-fine-techno-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.aft-website.com/en/company/access/';
const rows=[
  ['Kawasaki Headquarters','1-2 Suzuki-cho, Kawasaki-ku, Kawasaki, Kanagawa 210-0801, Japan','headquarters',35.538325503976345,139.72565773066196],
  ['Gunma Plant','2080-4 Morishita, Showa, Tone District, Gunma 379-1204, Japan','manufacturing',36.61641964050211,139.04455192525631]
];
const previous=new Map(data.locations.filter(x=>x.companyId==='ajinomoto').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='ajinomoto');
data.locations.push(...rows.map(([name,address,type,latitude,longitude],index)=>({
  id:`ajinomoto-${String(index+1).padStart(3,'0')}`,
  companyId:'ajinomoto', companyName:'Ajinomoto Fine-Techno', locationName:`Ajinomoto Fine-Techno ${name}`,
  locationType:type, address, country:'Japan', latitude, longitude,
  coordinateAccuracy:'building', status:'map_ready', sourceUrl, sourceType:'company_locations_page',
  verifiedOn:'2026-08-24', coordinateSourceUrl:sourceUrl, coordinateVerifiedOn:'2026-08-24',
  ...(index===0?{researchNote:'Ajinomoto Group also names Ajinomoto Fine-Techno USA Corporation, but its current public directories provide no physical street address; no U.S. marker is published.'}:{})
})));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
