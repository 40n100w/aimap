import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-hpe-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.hpe.com/us/en/contact-hpe.html';
const rows=[
['Spring worldwide headquarters','headquarters','1701 E Mossy Oaks Rd, Spring, TX 77389, United States','United States'],
['Roseville office','office','8000 Foothills Boulevard, Roseville, CA 95747, United States','United States'],
['Durham HPE Nimble Storage office','office','1015 Swabia Court, Durham, NC 27703, United States','United States'],
['New York office','office','461 Fifth Avenue, New York, NY 10017, United States','United States'],
['Alpharetta office','office','5555 Windward Parkway, Alpharetta, GA 30004, United States','United States'],
['Frisco office','office','3001 Dallas Parkway, Frisco, TX 75034-8660, United States','United States'],
['San Jose office','office','6280 America Center Drive, San Jose, CA 95002, United States','United States'],
['Fort Collins office','office','3404 E Harmony Road, Fort Collins, CO 80528, United States','United States']
];
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='hpe').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='hpe');
rows.forEach(([locationName,locationType,address,country],index)=>{const prior=old.get(norm(address));data.locations.push({id:`hpe-${String(index+1).padStart(3,'0')}`,companyId:'hpe',companyName:'HPE',locationName,locationType,address,country,latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',sourceUrl,sourceType:'official_company_directory',verifiedOn:'2026-08-25',researchComplete:false,researchNote:index===0?'Partial verified set containing all eight exact-address United States offices currently exposed on HPE’s official Contact page. HPE’s worldwide directory links to country-specific pages across dozens of markets; those pages still require address-by-address reconciliation before HPE is counted as complete.':undefined});});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
