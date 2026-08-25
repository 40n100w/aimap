import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-openrouter-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const address = '169 Madison Avenue, Suite 2404, New York, NY 10016, United States';
const normalize = value => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const prior = data.locations.find(location => location.companyId === 'openrouter' && normalize(location.address) === normalize(address));
data.locations = data.locations.filter(location => location.companyId !== 'openrouter');
data.locations.push({
  ...prior,
  id: 'openrouter-001',
  companyId: 'openrouter',
  companyName: 'OpenRouter',
  locationName: 'New York office',
  locationType: 'headquarters',
  address,
  country: 'United States',
  latitude: prior?.latitude ?? null,
  longitude: prior?.longitude ?? null,
  coordinateAccuracy: prior?.coordinateAccuracy ?? 'unlocated',
  status: prior?.status ?? 'address_verified',
  sourceUrl: 'https://openrouter.ai/terms-of-service-enterprise',
  sourceType: 'official_company_legal_page',
  verifiedOn: '2026-08-25',
  researchComplete: true,
  researchNote: 'Complete office outcome. OpenRouter’s current enterprise agreement identifies its offices at this suite, and its current consumer terms state that it operates the service from its offices in New York while listing the same building. No additional employee offices are disclosed. Model-provider regions and infrastructure are excluded.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
