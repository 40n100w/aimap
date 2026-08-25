import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-nvidia-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const directory='https://www.nvidia.com/en-us/contact/';
const campus='https://www.nvidia.com/content/dam/en-zz/Solutions/support/VisitoMap.pdf';
const frameview='https://images.nvidia.com/content/geforce/technologies/frameview/frameview-1-7-user-guide-web-version.pdf';
const rows=[
  ['Santa Clara Endeavor headquarters','headquarters','2788 San Tomas Expressway, Santa Clara, CA 95051, United States','United States',campus,'official_company_campus_map'],
  ['Santa Clara Voyager office','office','2888 San Tomas Expressway, Santa Clara, CA 95051, United States','United States',campus,'official_company_campus_map'],
  ['Santa Clara Building A office','office','2721 San Tomas Expressway, Santa Clara, CA 95050, United States','United States',campus,'official_company_campus_map'],
  ['Santa Clara Building S office','office','2330 Central Expressway, Santa Clara, CA 95050, United States','United States',campus,'official_company_campus_map'],
  ['Munich office','office','Bavaria Towers - Blue Tower, Einsteinstrasse 172, 81677 Munich, Germany','Germany','https://developer.download.nvidia.com/drive/docs/drive-agx-thor-regulatory-compliance-and-safety-guide-sku10.pdf','official_company_regulatory_document'],
  ['Reading office','office','100 Brook Drive, 3rd Floor, Green Park, Reading RG2 6UJ, United Kingdom','United Kingdom','https://images.nvidia.com/aem-dam/Solutions/design-visualization/quadro-product-literature/rtx-pro-blackwell-online-qsg-210x148mm-20250718-r14.pdf','official_company_regulatory_document'],
  ['Tokyo office','office','ATT New Tower, 2-11-7 Akasaka, 13th Floor, Minato-ku, Tokyo 107-0052, Japan','Japan',frameview,'official_company_document'],
  ['Seoul office','office','COEX Trade Tower, 159-1 Samsung-dong, 21st Floor, Gangnam-gu, Seoul 135-729, South Korea','South Korea',frameview,'official_company_document'],
  ['Singapore office','office','Regus Galaxis, 1 Fusionopolis Place, #03-20, Singapore','Singapore',frameview,'official_company_document'],
  ['Taipei office','office','8 Kee Hu Road, Neihu District, Taipei 114, Taiwan','Taiwan',frameview,'official_company_document']
];
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='nvidia').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='nvidia');
rows.forEach(([locationName,locationType,address,country,sourceUrl,sourceType],index)=>{const prior=old.get(norm(address));data.locations.push({
  id:`nvidia-${String(index+1).padStart(3,'0')}`,companyId:'nvidia',companyName:'NVIDIA',locationName,locationType,address,country,
  latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',
  sourceUrl,sourceType,verifiedOn:'2026-08-25',
  researchNote:index===0?`NVIDIA’s current directory reports more than 50 offices and names 68 city-level locations, but publishes a street address only for the corporate campus. This first exact-address pass adds the four separately addressed Santa Clara buildings plus current addresses found in NVIDIA regulatory and technical documents. All other city-only directory entries remain explicitly partial and require a later address-resolution pass; none receive approximate markers. Directory scope: ${directory}`:undefined
});});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
