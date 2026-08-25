import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-weaviate-outcome.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'weaviate');
data.researchOutcomes = (data.researchOutcomes ?? []).filter(outcome => outcome.companyId !== 'weaviate');
data.researchOutcomes.push({
  companyId: 'weaviate',
  companyName: 'Weaviate',
  outcome: 'no_physical_office',
  sourceUrl: 'https://weaviate.io/company/remote',
  sourceType: 'official_company_remote_work_page',
  supportingSourceUrl: 'https://weaviate.io/privacy',
  verifiedOn: '2026-08-25',
  researchComplete: true,
  researchNote: 'Complete zero-location outcome. Weaviate explicitly describes itself as a fully remote company whose people live and work worldwide. Its Amsterdam address is a legal establishment and its U.S. notice address is a private mailbox; neither is documented as an employee office. Employee homes, coworking choices, retreats, and cloud infrastructure are excluded.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
