import {readFileSync} from 'node:fs';
import {entities} from '../src/data.js';

const data=JSON.parse(readFileSync(new URL('../research/office-locations/locations.json',import.meta.url),'utf8'));
const locations=data.locations;
const outcomes=data.researchOutcomes??[];
const companies=entities.filter(entity=>entity.type==='Company');
const entityIdsFor=location=>new Set([location.companyId,...(location.entityIds??[])]);
const incomplete=new Set(locations.filter(location=>location.researchComplete===false).flatMap(location=>[...entityIdsFor(location)]));
const researched=new Set([
  ...locations.flatMap(location=>[...entityIdsFor(location)]).filter(id=>!incomplete.has(id)),
  ...outcomes.filter(outcome=>outcome.researchComplete).map(outcome=>outcome.companyId)
]);
const readyCompanies=new Set(locations.filter(location=>location.status==='map_ready').flatMap(location=>[...entityIdsFor(location)]));
const remaining=companies.filter(company=>!researched.has(company.id));

console.log(JSON.stringify({
  totalCompanies:companies.length,
  researchedCompanies:researched.size,
  companiesWithMapReadyLocations:readyCompanies.size,
  remainingCompanies:remaining.length,
  locationRecords:locations.length,
  mapReadyLocations:locations.filter(location=>location.status==='map_ready').length,
  zeroLocationOutcomes:outcomes.filter(outcome=>outcome.outcome==='no_physical_office').length,
  nextRemaining:remaining.slice(0,25).map(({id,name,layer})=>({id,name,layer}))
},null,2));

if(companies.length!==1088){
  console.error(`Expected 1,088 company records, found ${companies.length}`);
  process.exit(1);
}
