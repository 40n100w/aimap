import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-corning-locations.mjs <locations JSON>');

const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const address = 'One Riverfront Plaza, Corning, NY 14831, United States';
const normalize = value => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const prior = data.locations.find(location => location.companyId === 'corning' && normalize(location.address) === normalize(address));
data.locations = data.locations.filter(location => location.companyId !== 'corning');
data.locations.push({
  ...prior,
  id: 'corning-001',
  companyId: 'corning',
  companyName: 'Corning',
  locationName: 'World headquarters',
  locationType: 'headquarters',
  address,
  country: 'United States',
  latitude: prior?.latitude ?? null,
  longitude: prior?.longitude ?? null,
  coordinateAccuracy: prior?.coordinateAccuracy ?? 'unlocated',
  status: prior?.status ?? 'address_verified',
  sourceUrl: 'https://www.corning.com/worldwide/en/about-us/company-profile.html',
  sourceType: 'official_company_profile',
  verifiedOn: '2026-08-25',
  researchComplete: false,
  researchNote: 'Partial directory. Corning’s official profile verifies this headquarters and states that the company has 148 locations in 44 countries and more than 77 manufacturing sites. Its official interactive locator did not expose a complete address inventory to the available semantic reader, so this record must not be counted as complete until that full directory is extracted.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
