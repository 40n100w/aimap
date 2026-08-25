import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-writer-ai-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'writer-ai');

const common = {
  companyId: 'writer-ai',
  companyName: 'Writer AI',
  sourceUrl: 'https://writer.com/company/contact/',
  sourceType: 'official_company_office_directory',
  supportingSourceUrl: 'https://jobs.ashbyhq.com/writer/462de48e-d735-4076-8205-af2e60b071c5',
  verifiedOn: '2026-08-25',
  researchComplete: true,
  researchNote: 'Complete current office outcome. WRITER’s live official contact directory enumerates five offices and provides a full street address for each. A current first-party job posting independently names the same five office hubs: San Francisco, New York City, Austin, Chicago, and London. WRITER’s March 2025 expansion announcement described Dublin and Singapore hubs as part of its expansion plans, but neither appears in the current office directory or current job-posting hub list, so they are not treated as current physical offices.'
};

const raw = [
  {
    id: 'writer-ai-001', locationName: 'San Francisco headquarters', locationType: 'headquarters',
    address: '111 Maiden Lane, 4th Floor, San Francisco, CA 94108, United States', country: 'United States',
    latitude: 37.7885425, longitude: -122.4046326,
    coordinateSourceUrl: 'https://www.openstreetmap.org/way/149757916', coordinateSourceType: 'openstreetmap_building'
  },
  {
    id: 'writer-ai-002', locationName: 'New York office', locationType: 'office',
    address: '1 Pennsylvania Plaza, Suite 1820, New York, NY 10119, United States', country: 'United States',
    latitude: 40.7513102, longitude: -73.9924144,
    coordinateSourceUrl: 'https://www.openstreetmap.org/way/138147416', coordinateSourceType: 'openstreetmap_building'
  },
  {
    id: 'writer-ai-003', locationName: 'London office', locationType: 'office',
    address: '14 Bird Street, 2nd Floor, London W1U 1BU, United Kingdom', country: 'United Kingdom',
    latitude: 51.5144586, longitude: -0.1511243,
    coordinateSourceUrl: 'https://www.openstreetmap.org/way/665744870', coordinateSourceType: 'openstreetmap_building'
  },
  {
    id: 'writer-ai-004', locationName: 'Chicago office', locationType: 'office',
    address: '625 West Adams Street, 19th Floor, Chicago, IL 60661, United States', country: 'United States',
    latitude: 41.8788457, longitude: -87.6435687,
    coordinateSourceUrl: 'https://www.openstreetmap.org/way/148685512', coordinateSourceType: 'openstreetmap_building'
  },
  {
    id: 'writer-ai-005', locationName: 'Austin office', locationType: 'office',
    address: '600 Congress Avenue, Office 15017, Austin, TX 78701, United States', country: 'United States',
    latitude: 30.2686185, longitude: -97.7432588,
    coordinateSourceUrl: 'https://www.openstreetmap.org/way/206163832', coordinateSourceType: 'openstreetmap_building'
  }
];

for (const location of raw) data.locations.push({
  ...common,
  ...location,
  coordinateAccuracy: 'building',
  status: 'map_ready'
});

data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
