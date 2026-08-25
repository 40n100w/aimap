import {readFileSync} from 'node:fs';

const [datasetPath,sourcePath]=process.argv.slice(2);
if(!datasetPath||!sourcePath)throw new Error('Usage: node scripts/import-broadcom-locations.mjs <locations JSON> <Broadcom locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const source=JSON.parse(readFileSync(sourcePath,'utf8'));
const sourceUrl='https://www.broadcom.com/company/contact';
const raw=[];
for(const region of source.data?.region??[])for(const countryGroup of region.country??[])for(const location of countryGroup.locations??[])raw.push(location);
if(raw.length!==92)throw new Error(`Expected 92 Broadcom company locations, received ${raw.length}`);

const clean=value=>String(value??'').replace(/\s+/g,' ').trim();
const addressFor=location=>{
  const values=[location.address_line1,location.address_line2,location.address_line3,location.province||location.state,location.postal_code,location.country].map(clean).filter(Boolean);
  return [...new Set(values.map(value=>value.toLowerCase()))].map(key=>values.find(value=>value.toLowerCase()===key)).join(', ');
};
const norm=value=>value.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(location=>location.companyId==='broadcom').map(location=>[norm(location.address),location]));
data.locations=data.locations.filter(location=>location.companyId!=='broadcom');
raw.forEach((location,index)=>{
  const address=addressFor(location);
  const prior=old.get(norm(address));
  const headquarters=/corporate headquarters/i.test(location.name);
  data.locations.push({
    id:`broadcom-${String(index+1).padStart(3,'0')}`,
    companyId:'broadcom',companyName:'Broadcom',locationName:clean(location.name),locationType:headquarters?'headquarters':'office',address,country:clean(location.country),
    latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',
    sourceUrl,sourceType:'official_company_directory',verifiedOn:'2026-08-25',
    researchNote:index===0?'Complete import of the 92 locations in Broadcom’s current official “Broadcom Company Office” directory. Manufacturing representatives, resellers, media contacts and other non-company contacts are excluded. Each separately published street address is retained; no city-only or approximate markers are introduced.':undefined
  });
});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
