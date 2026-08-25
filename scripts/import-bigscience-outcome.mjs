import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-bigscience-outcome.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'bigscience');
data.researchOutcomes = (data.researchOutcomes ?? []).filter(outcome => outcome.companyId !== 'bigscience');
data.researchOutcomes.push({
  companyId: 'bigscience', companyName: 'BigScience', outcome: 'no_physical_office',
  sourceUrl: 'https://huggingface.co/bigscience', sourceType: 'official_project_organization_profile',
  supportingSourceUrl: 'https://huggingface.co/spaces/bigscience/data-host-provider-agreement/blob/main/data_host_provider_agreement.txt',
  verifiedOn: '2026-08-25', researchComplete: true,
  researchNote: 'Complete zero-location outcome. Despite being represented as a Company record in the atlas, BigScience identifies itself as a one-year open, collaborative research workshop involving more than 1,000 participants across 60 countries and many independent institutions—not as an operating company with employee premises. Hugging Face facilities, contributor institutions, participant homes, and the Jean Zay compute site are not BigScience offices and are excluded.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
