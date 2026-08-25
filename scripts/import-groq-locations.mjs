import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-groq-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const legal='https://console.groq.com/docs/legal/archive';
const rows=[
  ['San Jose office','headquarters','2700 Zanker Road, Suite 150, San Jose, CA 95134, United States','United States',legal],
  ['London office','office','3 Hammersmith Grove, London W6 0ND, United Kingdom','United Kingdom',legal],
  ['Riyadh office','office','Al Raidah Tower, 8476 King Fahd Road, 2nd Floor, Al Muhammadiyah District, Riyadh 12363-4228, Saudi Arabia','Saudi Arabia','https://groq.com/privacy-policy']
];
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='groq').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='groq');
rows.forEach(([locationName,locationType,address,country,sourceUrl],index)=>{const prior=old.get(norm(address));data.locations.push({id:`groq-${String(index+1).padStart(3,'0')}`,companyId:'groq',companyName:'Groq',locationName,locationType,address,country,latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',sourceUrl,sourceType:'official_company_legal_document',verifiedOn:'2026-08-25',researchNote:index===0?'Groq’s current legal documents identify physical company offices in San Jose, London and Riyadh. Older Mountain View street addresses are superseded by the current San Jose physical address. Groq reports 13 operating cloud data centers but does not disclose their physical addresses; partner-operated infrastructure is not represented as company offices and receives no approximate markers.':undefined});});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
