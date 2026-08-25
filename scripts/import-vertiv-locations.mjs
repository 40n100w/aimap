import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-vertiv-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.vertiv.com/en-us/contacts/';
const rows=[
['Global headquarters','headquarters','505 N Cleveland Ave, Westerville, OH 43082, United States','United States'],
['Fort Lauderdale KVM, Serial and Battery Monitoring office','office','550 W Cypress Creek Road, Suite 200, Fort Lauderdale, FL 33309, United States','United States'],
['Huntsville KVM and Serial main office','office','3414 Governors Drive SW, Suite 100, Huntsville, AL 35805, United States','United States'],
['Lorain DC Power and Outside Plant main office','office','1510 Kansas Ave, Lorain, OH 44052, United States','United States'],
['Lincoln PDU main office','office','1777 Yolande Ave, Lincoln, NE 68521, United States','United States'],
['Americas headquarters','headquarters','610 Executive Campus Drive, Westerville, OH 43082, United States','United States']
];
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='vertiv').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='vertiv');
rows.forEach(([locationName,locationType,address,country],index)=>{const prior=old.get(norm(address));data.locations.push({id:`vertiv-${String(index+1).padStart(3,'0')}`,companyId:'vertiv',companyName:'Vertiv',locationName,locationType,address,country,latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',sourceUrl,sourceType:'official_company_contact_page',verifiedOn:'2026-08-25',researchComplete:false,researchNote:index===0?'Partial verified set containing every physical corporate contact address on Vertiv’s current official U.S. Contact page. Vertiv reports 30 manufacturing locations, roughly 320 service centers and 26 customer experience centers/labs worldwide but does not publish their complete street-address directory on this page; those facilities remain to be reconciled. The investor-relations postal box is excluded.':undefined});});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
