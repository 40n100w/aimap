import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-gretel-outcome.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'gretel');
data.researchOutcomes = (data.researchOutcomes ?? []).filter(outcome => outcome.companyId !== 'gretel');
data.researchOutcomes.push({
  companyId: 'gretel',
  companyName: 'Gretel',
  outcome: 'no_physical_office',
  sourceUrl: 'https://gretel.ai/careers',
  sourceType: 'official_company_careers_page',
  supportingSourceUrl: 'https://gretel.ai/contact-non-sales',
  verifiedOn: '2026-08-25',
  researchComplete: true,
  researchNote: 'Complete zero-location outcome. Gretel identifies itself as a remote company across the U.S. and Canada, funds home offices, and offers optional coworking access. Its San Diego contact suite and Sunnyvale post-office box are not documented as employee premises. Employee homes, coworking choices, NVIDIA parent-company offices, and cloud infrastructure are excluded.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
