import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-luma-ai-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
data.locations=data.locations.filter(location=>location.companyId!=='luma-ai');
data.locations.push({
  id:'luma-ai-001',companyId:'luma-ai',companyName:'Luma AI',locationName:'Redwood City headquarters',locationType:'headquarters',
  address:'Redwood City, CA, United States',country:'United States',latitude:null,longitude:null,coordinateAccuracy:'unlocated',status:'needs_review',
  sourceUrl:'https://lumalabs.ai/llm-info',sourceType:'official_company_information_page',
  supportingSourceUrl:'https://jobs.ashbyhq.com/lumaai/dd3953ed-0231-4950-88f6-1cc42f18fc26',
  verifiedOn:'2026-08-25',researchComplete:false,
  researchNote:'Partial current office outcome. Luma’s current official company-information page identifies Redwood City as its headquarters, and current first-party hybrid job postings confirm employees work from a Redwood City office. Luma does not publish that office’s street address. Its current legal pages list Palo Alto postal, notice, and corporate addresses, but those are not documented as the employee office and are excluded from the map.'
});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
