import {readFileSync} from 'node:fs';

const [datasetPath,sourcePath]=process.argv.slice(2);
if(!datasetPath||!sourcePath)throw new Error('Usage: node scripts/import-qualcomm-locations.mjs <locations JSON> <Qualcomm page-model JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const source=JSON.parse(readFileSync(sourcePath,'utf8'));
const locations=source?.[':items']?.root?.[':items']?.responsivegrid?.[':items']?.officelocationfinder?.locations;
if(!Array.isArray(locations)||locations.length!==205)throw new Error(`Expected 205 Qualcomm office locations, received ${locations?.length??0}`);

const sourceUrl='https://www.qualcomm.com/company/facilities/offices';
const clean=value=>String(value??'').replace(/[\u0080-\u009f]/g,' ').replace(/\s+/g,' ').trim();
const norm=value=>clean(value).toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(location=>location.companyId==='qualcomm').map(location=>[norm(location.address),location]));
const dedupe=values=>{
  const seen=new Set();
  return values.filter(value=>{const key=norm(value);if(!key||seen.has(key))return false;seen.add(key);return true;});
};
const addressFor=location=>dedupe([
  ...(location.address??[]).slice(1).map(clean),
  clean(location.locality),clean(location.region),clean(location.postalCode),clean(location.country)
]).join(', ');

data.locations=data.locations.filter(location=>location.companyId!=='qualcomm');
locations.forEach((location,index)=>{
  const address=addressFor(location);
  const prior=old.get(norm(address));
  const officeCode=clean(location.address?.[0]);
  const officialName=clean(location.name);
  const locationName=officeCode&&norm(officeCode)!==norm(officialName)?`${officialName} (${officeCode})`:officialName;
  data.locations.push({
    id:`qualcomm-${String(index+1).padStart(3,'0')}`,
    companyId:'qualcomm',companyName:'Qualcomm',locationName,
    locationType:location.isHq?'headquarters':/\.COLO\d*$/i.test(officeCode)?'data_center':'office',
    address,country:clean(location.country),
    latitude:prior?.latitude??null,longitude:prior?.longitude??null,
    coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',
    sourceUrl,sourceType:'official_company_directory',verifiedOn:'2026-08-25',
    researchNote:index===0?'Complete import of all 205 separately listed facilities in Qualcomm’s current official global office directory. The directory includes separately addressed corporate buildings, offices and named colocation facilities; each is retained because Qualcomm publishes it as a company facility. Qualcomm-supplied map coordinates are not promoted automatically because the source contains observable coordinate errors; every published marker must pass the independent building-level verification pipeline.':undefined
  });
});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
