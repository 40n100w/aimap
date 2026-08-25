import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-coreweave-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const cultureUrl='https://www.coreweave.com/coreweave-company-culture';
const dcUrl='https://www.coreweave.com/news/coreweave-expands-office-in-washington-d-c';
const rows=[
['Philadelphia office','office','111 S Independence Mall E, Suite 701, Philadelphia, PA 19106, United States','United States',cultureUrl],
['Livingston headquarters','headquarters','290 W Mt Pleasant Ave, Suite 4100, Livingston, NJ 07039, United States','United States',cultureUrl],
['New York office','office','33 Whitehall Street, Floor 30, New York, NY 10004, United States','United States',cultureUrl],
['Sunnyvale office','office','100 Mathilda Place, Suite 400, Sunnyvale, CA 94086, United States','United States',cultureUrl],
['Bellevue office','office','One Bellevue Center, Floor 8, 411 108th Ave NE, Bellevue, WA 98004, United States','United States',cultureUrl],
['London European headquarters','headquarters','Second Floor, Connexion House, Dray Walk, London E1 6QL, United Kingdom','United Kingdom',cultureUrl],
['Washington DC office','office','1001 Pennsylvania Avenue NW, Washington, DC 20004, United States','United States',dcUrl]
];
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='coreweave').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='coreweave');
rows.forEach(([locationName,locationType,address,country,sourceUrl],index)=>{const prior=old.get(norm(address));data.locations.push({...prior,id:`coreweave-${String(index+1).padStart(3,'0')}`,companyId:'coreweave',companyName:'CoreWeave',locationName,locationType,address,country,latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',sourceUrl,sourceType:sourceUrl===cultureUrl?'official_company_directory':'official_company_announcement_with_lease_confirmation',verifiedOn:'2026-08-25',researchComplete:true,researchNote:index===0?'Complete current office set: all six employee offices on CoreWeave’s official Company Culture page plus its subsequently announced Washington, D.C. office, whose exact building is corroborated by the reported 22,590-square-foot lease. Cloud regions, Direct Connect sites and third-party data-center campuses are infrastructure rather than corporate offices and are excluded.':undefined});});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
