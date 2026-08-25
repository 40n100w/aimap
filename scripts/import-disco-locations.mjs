import {readFileSync} from 'node:fs';
const [sourcePath,datasetPath]=process.argv.slice(2);
if(!sourcePath||!datasetPath)throw new Error('Usage: node scripts/import-disco-locations.mjs <fetched JSON> <locations JSON>');
const rows=JSON.parse(readFileSync(sourcePath,'utf8'));
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.disco.co.jp/eg/network/';
const coordinateSourceUrl='https://www.disco.co.jp/eg/csr/management/doc/CorporateQuestionnaire.pdf?20260225=';
const officialCoordinates=new Map(Object.entries({dj:[35.586823,139.734018],kuwabata:[34.306279,132.612567],kure:[34.233174,132.612599],chino:[36.03036,138.18777],dhc:[31.30034,121.62967],dhe:[48.1785,11.7602],kl:[3.08769,101.61412],dhk:[37.40552,127.10064],dhs:[1.33528,103.89212],dht:[24.97821,121.54997],dhth:[13.81136,100.55767],dha:[37.25495,-121.7858],dhvn:[10.78164,106.70282],dhin:[13.050249,77.623417]}));
const names={dj:'Japan Head Office and R&D Center',haneda:'Haneda R&D Center',osaka:'Osaka Branch',kyushu:'Kyushu Branch',midprocess:'Kumamoto Mid-Process Center',sendai:'Sendai Branch',kure:'Kure Plant',kuwabata:'Kuwabata Plant',chino:'Chino Plant',dha:'San Jose',northwest:'Hillsboro Northwest',northern:'Meridian Northern',southwestern:'Chandler Southwestern',newmexico:'Rio Rancho',eastern:'Tewksbury Eastern',dhapa:'Bethlehem',southeastern:'Morrisville Southeastern',dhc:'Shanghai',dongguan:'Dongguan',chengdu:'Chengdu',chongqing:'Chongqing',heifei:'Hefei',nanjing:'Nanjing',shenzhen:'Shenzhen',suzhou:'Suzhou',tianjin:'Tianjin',wuhan:'Wuhan',xiamen:'Xiamen',"xi'an":'Xian',shaoxing:'Shaoxing',beijing:'Beijing',dalian:'Dalian',huizhou:'Huizhou',dhk:'Seongnam Korea',kl:'Kuala Lumpur',penang:'Penang',ipoh:'Ipoh',melaka:'Melaka',dhp:'Muntinlupa Philippines',dhs:'Singapore',dht:'New Taipei',hsinchu:'Hsinchu',taichung:'Taichung',tainan:'Tainan',kaohsiung:'Kaohsiung',dhth:'Bangkok',dhvn:'Ho Chi Minh City',hanoi:'Hanoi',dhin:'Bangalore',dhe:'Kirchheim Europe Head Office',italiana:'Catania',dhfr:'Rousset',dhuk:'Crawley',dhma:'Casablanca',"dhe-czech":'Prague'};
const groups={
  Japan:['dj','haneda','osaka','kyushu','midprocess','sendai','kure','kuwabata','chino'],
  'United States':['dha','northwest','northern','southwestern','newmexico','eastern','dhapa','southeastern'],
  China:['dhc','dongguan','chengdu','chongqing','heifei','nanjing','shenzhen','suzhou','tianjin','wuhan','xiamen',"xi'an",'shaoxing','beijing','dalian','huizhou'],
  'South Korea':['dhk'],Malaysia:['kl','penang','ipoh','melaka'],Philippines:['dhp'],Singapore:['dhs'],Taiwan:['dht','hsinchu','taichung','tainan','kaohsiung'],Thailand:['dhth'],Vietnam:['dhvn','hanoi'],India:['dhin'],Germany:['dhe'],Italy:['italiana'],France:['dhfr'],'United Kingdom':['dhuk'],Morocco:['dhma'],'Czech Republic':['dhe-czech']
};
const countryByKey=new Map(Object.entries(groups).flatMap(([country,keys])=>keys.map(key=>[key,country])));
if(rows.length!==55)throw new Error(`Expected 55 direct DISCO locations, found ${rows.length}`);
for(const row of rows)if(!names[row.key]||!countryByKey.has(row.key))throw new Error(`Unmapped DISCO key ${row.key}`);
const previous=new Map(data.locations.filter(x=>x.companyId==='disco').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='disco');
data.locations.push(...rows.map((row,index)=>{const country=countryByKey.get(row.key);const address=row.address.replace(/\s+/g,' ').trim();const old=previous.get(address);const plant=/Plant|Center/.test(names[row.key]);const coordinates=officialCoordinates.get(row.key);const keepOld=Number.isFinite(old?.latitude);const record={id:`disco-${String(index+1).padStart(3,'0')}`,companyId:'disco',companyName:'DISCO',locationName:`DISCO ${names[row.key]}`,locationType:row.key==='dj'?'headquarters':plant?'manufacturing':'office',address,country,latitude:keepOld?old.latitude:coordinates?.[0]??null,longitude:keepOld?old.longitude:coordinates?.[1]??null,coordinateAccuracy:keepOld?old.coordinateAccuracy:(coordinates?'building':'unlocated'),status:keepOld?old.status:(coordinates?'map_ready':'address_verified'),sourceUrl,sourceType:'company_locations_endpoint',verifiedOn:'2026-08-24'};if(coordinates)record.coordinateSourceUrl=coordinateSourceUrl;return record;}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
