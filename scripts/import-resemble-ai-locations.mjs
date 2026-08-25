import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-resemble-ai-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'resemble-ai');
data.locations.push({
  id: 'resemble-ai-001', companyId: 'resemble-ai', companyName: 'Resemble AI',
  locationName: 'Mountain View office', locationType: 'headquarters',
  address: '812 West Dana Street, Mountain View, CA 94041, United States', country: 'United States',
  latitude: 37.3927487, longitude: -122.0799435, coordinateAccuracy: 'building', status: 'map_ready',
  sourceUrl: 'https://www.resemble.ai/wp-content/uploads/2025/11/q3-2025-deepfake-incident-report.pdf', sourceType: 'official_company_report',
  supportingSourceUrl: 'https://app.dover.com/dover/careers/64b57c81-9467-4ad2-9c8c-128f553157b5',
  coordinateSourceUrl: 'https://www.openstreetmap.org/node/13778124157',
  coordinateSourceType: 'openstreetmap_company_at_exact_address',
  verifiedOn: '2026-08-25', researchComplete: true,
  researchNote: 'Complete current office outcome. Current first-party reports and the company privacy policy publish 812 West Dana Street. The live official careers board labels Mountain View positions as in-office and India positions as remote, disclosing no other physical employee office. Commercial property records verify a two-story storefront/office building. Canadian home-style and program terms addresses are excluded as legal or individual contact addresses rather than offices.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
