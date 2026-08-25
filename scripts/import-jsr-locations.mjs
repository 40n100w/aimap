import {readFileSync} from 'node:fs';

const [datasetPath,officesPath,japanPath,overseasPath]=process.argv.slice(2);
if(!overseasPath)throw new Error('Usage: node scripts/import-jsr-locations.mjs <locations JSON> <offices HTML> <Japan group HTML> <overseas group HTML>');

const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const officesUrl='https://www.jsr.co.jp/jsr_e/company/office.html';
const japanUrl='https://www.jsr.co.jp/jsr_e/company/group.html';
const overseasUrl='https://www.jsr.co.jp/jsr_e/company/group_oversea.html';
const direct=[
  ['Headquarters','Shiodome Sumitomo Building, 22F, 1-9-2 Higashi-Shimbashi, Minato-ku, Tokyo 105-8640, Japan','Japan','headquarters',35.662193,139.760129],
  ['Yokkaichi Plant and Research Laboratories','100 Kawajiricho, Yokkaichi, Mie 510-8552, Japan','Japan','manufacturing',34.93144657823625,136.6028154507993],
  ['JSR-Keio University Medical and Chemical Innovation Center','35 Shinanomachi, Shinjuku-ku, Tokyo 160-8582, Japan','Japan','research',35.68371990258238,139.7202452613249],
  ['JSR Bioscience and Informatics R&D Center','3-103-9 Tonomachi, Kawasaki-ku, Kawasaki, Kanagawa 210-0821, Japan','Japan','research',35.538840480227776,139.75243781521206]
];

const decode=value=>value.replace(/<[^>]+>/g,'').replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim();
const extract=html=>{
  const rows=[];
  const pattern=/<h3 class="index_title">([\s\S]*?)<\/h3>\s*<div class="index_address">([\s\S]*?)<\/div>/g;
  let match;
  while((match=pattern.exec(html)))rows.push([decode(match[1]),decode(match[2])]);
  return rows;
};
const countryFor=address=>{
  if(/Japan$/i.test(address))return 'Japan';
  if(/China$/i.test(address))return 'China';
  if(/Hong Kong$/i.test(address))return 'Hong Kong';
  if(/Taiwan/i.test(address))return 'Taiwan';
  if(/Korea$/i.test(address))return 'South Korea';
  if(/Thailand$/i.test(address))return 'Thailand';
  if(/Singapore\s+\d+$/i.test(address))return 'Singapore';
  if(/Germany$/i.test(address))return 'Germany';
  if(/Belgium$/i.test(address))return 'Belgium';
  if(/Switzerland$/i.test(address))return 'Switzerland';
  if(/Grand Cayman$/i.test(address))return 'Cayman Islands';
  if(/\b(?:U\.S\.A\.?|USA)$/i.test(address)||/\b(?:OH|Oregon)\s+\d{5}$/i.test(address))return 'United States';
  throw new Error(`Cannot determine country for ${address}`);
};
const normalizeAddress=(address,country)=>{
  let value=address.replace(/^６F/,'6F').replace(/Suite 360Corvallis/,'Suite 360, Corvallis');
  if(country==='United States'&&!/(?:U\.S\.A\.?|USA)$/i.test(value))value+=', United States';
  if(country==='Cayman Islands'&&!/Cayman Islands$/i.test(value))value+=', Cayman Islands';
  return value;
};

const groupRows=[
  ...extract(readFileSync(japanPath,'utf8')).map(([name,address])=>[name,address,japanUrl]),
  ...extract(readFileSync(overseasPath,'utf8')).map(([name,address])=>[name,address,overseasUrl])
];
const rows=[
  ...direct.map(([name,address,country,type,latitude,longitude])=>({name,address,country,type,latitude,longitude,sourceUrl:officesUrl})),
  ...groupRows.map(([name,rawAddress,sourceUrl])=>{const country=countryFor(rawAddress);return{name,address:normalizeAddress(rawAddress,country),country,type:'group_facility',latitude:null,longitude:null,sourceUrl};})
];

const previous=new Map(data.locations.filter(x=>x.companyId==='jsr').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='jsr');
data.locations.push(...rows.map((row,index)=>{
  const old=previous.get(row.address);
  const officialPoint=Number.isFinite(row.latitude)&&Number.isFinite(row.longitude);
  return {
    id:`jsr-${String(index+1).padStart(3,'0')}`, companyId:'jsr', companyName:'JSR',
    locationName:`JSR ${row.name}`, locationType:row.type, address:row.address, country:row.country,
    latitude:officialPoint?row.latitude:(old?.latitude??null), longitude:officialPoint?row.longitude:(old?.longitude??null),
    coordinateAccuracy:officialPoint?'building':(old?.coordinateAccuracy??'unlocated'),
    status:officialPoint?'map_ready':(old?.status??'address_verified'),
    sourceUrl:row.sourceUrl, sourceType:'company_locations_page', verifiedOn:'2026-08-24',
    ...(officialPoint?{coordinateSourceUrl:row.sourceUrl,coordinateVerifiedOn:'2026-08-24'}:{})
  };
}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
