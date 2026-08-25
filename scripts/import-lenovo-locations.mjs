import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-lenovo-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const locationsUrl='https://www.lenovo.com/ie/en/about/locations/';
const manufacturingUrl='https://www.lenovo.com/content/dam/lenovo/site-design/esg-document-library/global/corp-policies/gsc/List_of_Lenovo_Mfg_Sites_and_Suppliers.pdf';
const rows=[
['Beijing headquarters','headquarters','Building 2, No. 10, Courtyard Xibeiwang East Road, Haidian District, Beijing 100094, China','China',locationsUrl],
['Morrisville headquarters','headquarters','8001 Development Drive, Morrisville, NC 27560, United States','United States',locationsUrl],
['Ullo manufacturing site','factory','ULL5 Building, CTP Industrial Park, 28 K-SPED Boulevard, 2225 Ullo, Hungary','Hungary',manufacturingUrl],
['Indaiatuba manufacturing site','factory','Estrada Municipal Jose Costa de Mesquita 200, Chacara Alvorada, Indaiatuba, SP, Brazil','Brazil',manufacturingUrl],
['Pondicherry manufacturing site','factory','RS No. 19/1A & 2A, Cuddalore Main Road, Edayar Palayam Village, Pondicherry, India','India',manufacturingUrl],
['Hefei manufacturing site','factory','No. 3188-1 Yungu Road, Economic and Technological Development Zone, Hefei, China','China',manufacturingUrl],
['Shenzhen Guangming manufacturing site','factory','Plant 1, Lenovo Innovation Park, Lidu Road, Loucun Community, Xinhu Street, Guangming District, Shenzhen, Guangdong, China','China',manufacturingUrl],
['Apodaca manufacturing site','factory','Boulevard Escobedo 316 & 318, Apodaca Technology Park, CP 66627 Apodaca, Nuevo Leon, Mexico','Mexico',manufacturingUrl],
['Yonezawa manufacturing site','factory','6-80 Shimohanazawa 2-Chome, Yonezawa-shi, Yamagata, Japan','Japan',manufacturingUrl],
['Tianjin manufacturing site','factory','Lenovo Innovation Park, Jingsan Road, Airport Economic Development Zone, Dongli District, Tianjin, China','China',manufacturingUrl],
['Whitsett fulfillment center','factory','6540 Franz Warner Parkway, Whitsett, NC 27377, United States','United States',manufacturingUrl],
['Wuhan manufacturing site','factory','No. 19 Gaoxin 4th Road, Wuhan, Hubei, China','China',manufacturingUrl]
];
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='lenovo').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='lenovo');
rows.forEach(([locationName,locationType,address,country,sourceUrl],index)=>{const prior=old.get(norm(address));data.locations.push({id:`lenovo-${String(index+1).padStart(3,'0')}`,companyId:'lenovo',companyName:'Lenovo',locationName,locationType,address,country,latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',sourceUrl,sourceType:sourceUrl===locationsUrl?'official_company_directory':'official_esg_facility_directory',verifiedOn:'2026-08-25',researchComplete:false,researchNote:index===0?'Partial verified set containing Lenovo’s two exact-address headquarters and all ten exact-address manufacturing sites in its current manufacturing disclosure. Lenovo’s current worldwide locations page lists dozens of sales offices only at city level; their street addresses remain to be reconciled, so Lenovo is not counted as complete.':undefined});});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
