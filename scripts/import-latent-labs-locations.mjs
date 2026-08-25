import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-latent-labs-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'latent-labs');
data.locations.push({
  id: 'latent-labs-001', companyId: 'latent-labs', companyName: 'Latent Labs',
  locationName: 'London office', locationType: 'office',
  address: 'White Collar Factory, 1 Old Street Yard, London EC1Y 8AF, United Kingdom', country: 'United Kingdom',
  latitude: 51.52526, longitude: -0.08813,
  coordinateAccuracy: 'building', status: 'map_ready',
  sourceUrl: 'https://www.latentlabs.com/', sourceType: 'official_company_homepage',
  supportingSourceUrl: 'https://www.latentlabs.com/team/',
  coordinateSourceUrl: 'https://mapcarta.com/W532318205',
  coordinateSourceType: 'openstreetmap_named_building_at_exact_address',
  supportingCoordinateSourceUrl: 'https://www.derwentlondon.com/space-available/white-collar-factory',
  verifiedOn: '2026-08-25', researchComplete: false,
  researchNote: 'Partial current-office outcome. Latent Labs’ official homepage and team pages confirm active London and San Francisco sites. The homepage publishes the exact London building address, which is retained. No exact current San Francisco street address was found in official sources, so no approximate marker is created. The Altrincham registered office is a legal-services address and is excluded.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
