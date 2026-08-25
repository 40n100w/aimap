import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-cerebras-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const rows=[
  ['Sunnyvale headquarters','headquarters','1237 E Arques Avenue, Sunnyvale, CA 94085, United States','United States','https://www.sec.gov/Archives/edgar/data/2021728/000162828026044941/cbrs-20260623.htm','official_regulatory_filing'],
  ['Toronto office','office','150 King Street West, Toronto, ON M5H 1J9, Canada','Canada','https://www.linkedin.com/company/cerebras-systems','official_company_social_profile'],
  ['Bengaluru engineering office','research','Venus Block, Prestige Tech Park, Marathahalli-Sarjapur Outer Ring Road, 8th Floor, Kadubeesanahalli, Bengaluru, Karnataka 560103, India','India','https://piceapp.com/gst-number-search/cerebras-systems-india-private-limited-29aadcw1936b1zg/','government_tax_registry_mirror']
];
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='cerebras').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='cerebras');
rows.forEach(([locationName,locationType,address,country,sourceUrl,sourceType],index)=>{const prior=old.get(norm(address));data.locations.push({id:`cerebras-${String(index+1).padStart(3,'0')}`,companyId:'cerebras',companyName:'Cerebras',locationName,locationType,address,country,latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',sourceUrl,sourceType,verifiedOn:'2026-08-25',researchNote:index===0?'Cerebras’s current careers page confirms active Sunnyvale, Toronto and India offices. Sunnyvale is verified by its 2026 SEC filing; Toronto by the company-maintained LinkedIn location and current hiring records; Bengaluru by the active Indian GST principal-place record. The older San Diego lease is no longer named in current hiring, and Tokyo, UAE, Finland and Western Canada are only city/region or role labels without current street addresses, so they are withheld pending verification.':undefined});});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
