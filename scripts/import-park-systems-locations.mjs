import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-park-systems-locations.mjs <locations JSON>');

const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.parksystems.com/en/company/locations';
const rows=[
  ['Global Headquarters','150 Gwacheon-daero 12-gil, Gwacheon-si, Gyeonggi-do 13824, South Korea','South Korea','headquarters',37.4138811,126.9906686],
  ['Europe GmbH','Schildkrötstraße 15, 68199 Mannheim, Germany','Germany','office',49.455071,8.4979918],
  ['Manufacturing Center','KANC 4F, 109 Gwanggyo-ro, Suwon, Gyeonggi-do 16229, South Korea','South Korea','manufacturing',37.2929597,127.0422603],
  ['Santa Clara','3040 Olcott Street, Santa Clara, CA 95054, United States','United States','office',37.377364,-121.9700289],
  ['East Coast Applications Center','Building 5, Room 120, 147 South Bedford Street, Burlington, MA 01803, United States','United States','office',42.478542,-71.191362],
  ['Mexico','Río de la Magdalena 326, Office 104, Colonia La Otra Banda, Álvaro Obregón, Mexico City 01090, Mexico','Mexico','office',19.3366217,-99.2011296],
  ['Göttingen — Accurion Division','Stresemannstraße 30, 37079 Göttingen, Germany','Germany','office',51.54803704,9.905046798],
  ['UK','MediCity Nottingham, Thane Road, Nottingham NG90 6BH, United Kingdom','United Kingdom','office',52.9253593,-1.1971452],
  ['France','21 Rue Jean Rostand, Parc Orsay Université, 91400 Orsay, France','France','office',48.7103073,2.173384],
  ['Lausanne — Lyncée Tec','EPFL Innovation Park, Building A, 1015 Lausanne, Switzerland','Switzerland','office',46.5191,6.5668],
  ['Japan','1F, 1-11-4 Nishishimbashi, Minato-ku, Tokyo 105-0003, Japan','Japan','office',35.6687262,139.7531892],
  ['Beijing','Room 518, Tianchuang Science and Technology Building, 8 Caihefang Road, Haidian District, Beijing, China','China','office',39.981621,116.3067954],
  ['Shanghai','Room 118, Building 5, DoBe Hongqiao International WE, 199 Fenghong Road, Minhang District, Shanghai, China','China','office',31.2068416,121.3230258],
  ['Guangzhou','Room B211, 200 Wushan Road, Tianhe District, Guangzhou, China','China','office',23.14406,113.3438613],
  ['Taiwan','4F-1, No. 8, Taiyuan 1st Road, Zhubei City, Hsinchu County 302, Taiwan','Taiwan','office',24.8409259,121.0169745],
  ['Singapore','The Alpha, #01-03, 10 Science Park Road, Singapore 117684','Singapore','office',1.2884794,103.7773393],
  ['India','2F, No. 86, Gokul Towers, M. S. Ramaiah Road, Gokula, Bengaluru, Karnataka 560054, India','India','office',null,null]
];

const previous=new Map(data.locations.filter(x=>x.companyId==='park-systems').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='park-systems');
data.locations.push(...rows.map(([name,address,country,type,latitude,longitude],index)=>{
  const old=previous.get(address);
  const hasOfficialPoint=latitude!==null&&longitude!==null;
  return {
    id:`park-systems-${String(index+1).padStart(3,'0')}`,
    companyId:'park-systems', companyName:'Park Systems', locationName:`Park Systems ${name}`,
    locationType:type, address, country,
    latitude:hasOfficialPoint?latitude:(old?.latitude??null),
    longitude:hasOfficialPoint?longitude:(old?.longitude??null),
    coordinateAccuracy:hasOfficialPoint?'building':(old?.coordinateAccuracy??'unlocated'),
    status:hasOfficialPoint?'map_ready':(old?.status??'needs_review'),
    sourceUrl, sourceType:'company_locations_endpoint', verifiedOn:'2026-08-24',
    ...(hasOfficialPoint?{coordinateSourceUrl:sourceUrl,coordinateVerifiedOn:'2026-08-24'}:{researchNote:'Official directory coordinate conflicts with the documented Bengaluru address; excluded pending building-level verification.'})
  };
}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
