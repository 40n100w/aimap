import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-intel-foundry-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const network='https://www.intel.com/content/www/us/en/foundry/manufacturing.html';
const cert='https://www.intel.com/content/dam/www/central-libraries/us/en/documents/2026-01/0222427-cert-qms-eng-intel-corporation-main-appendix.pdf';
const rows=[
  ['Santa Clara headquarters','headquarters','2200 Mission College Boulevard, Santa Clara, CA 95054, United States','United States','https://www.intel.com/content/www/us/en/support/campus-locations.html'],
  ['Ocotillo manufacturing campus','manufacturing','4500 S Dobson Road, Chandler, AZ 85248, United States','United States',cert],
  ['Gordon Moore Park at Ronler Acres','research_manufacturing','2501 NW 229th Avenue, Hillsboro, OR 97124, United States','United States',cert],
  ['Rio Rancho advanced packaging campus','manufacturing','1600 Rio Rancho Boulevard SE, Rio Rancho, NM 87124, United States','United States',cert],
  ['Leixlip manufacturing campus','manufacturing','Collinstown Industrial Park, Leixlip, County Kildare W23 CX68, Ireland','Ireland',cert],
  ['Kiryat Gat manufacturing campus','manufacturing','2 Tzoran Street, New Industrial Area, Kiryat Gat 82109, Israel','Israel',cert],
  ['Jerusalem development campus','research','9 Hamarpe Street, Har Hotzvim Industrial Area, Jerusalem 91004, Israel','Israel','https://www.intel.com/content/www/us/en/corporate-responsibility/intel-in-israel.html'],
  ['Chengdu assembly and test site','manufacturing','8-1 Kexin Road, Chengdu High-Tech Zone West Park, Chengdu, Sichuan 611731, China','China','https://www.intel.com/content/dam/www/public/us/en/documents/corporate-information/19-4326-d-chengdu-cdat-certificate.pdf'],
  ['Costa Rica assembly and test campus','manufacturing','Calle 129, La Ribera de Belén, Belén, Heredia 40702, Costa Rica','Costa Rica','https://www.intel.com/content/dam/www/public/us/en/documents/corporate-information/intel-bcr-eea-final-2025.pdf'],
  ['Kulim manufacturing campus','manufacturing','Lot 8, Jalan Hi-Tech 2/3, Kulim Hi-Tech Park, Kulim, Kedah 09000, Malaysia','Malaysia','https://cdrdv2-public.intel.com/891637/Invoice%20Requirements%20By%20Country-Region.pdf'],
  ['Penang assembly and test campus','manufacturing','Bayan Lepas Free Industrial Zone, Phase 3, Halaman Kampung Jawa, Bayan Lepas, Penang 11900, Malaysia','Malaysia','https://cdrdv2-public.intel.com/891637/Invoice%20Requirements%20By%20Country-Region.pdf'],
  ['Ho Chi Minh City assembly and test site','manufacturing','Lot I2, D1 Road, Saigon Hi-Tech Park, Thu Duc City, Ho Chi Minh City, Vietnam','Vietnam',cert]
];
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='intel-foundry').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='intel-foundry');
rows.forEach(([locationName,locationType,address,country,sourceUrl],index)=>{const prior=old.get(norm(address));data.locations.push({
  id:`intel-foundry-${String(index+1).padStart(3,'0')}`,companyId:'intel-foundry',companyName:'Intel Foundry',locationName,locationType,address,country,
  latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',
  sourceUrl,sourceType:'official_company_directory',verifiedOn:'2026-08-25',
  researchNote:index===0?`Intel's current foundry network also names Shanghai and the future Ohio One site, but the reviewed current official materials did not provide stable street addresses for those campuses; they are withheld pending exact-address verification. Network scope: ${network}`:undefined
});});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
