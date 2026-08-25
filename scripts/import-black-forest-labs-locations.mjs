import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-black-forest-labs-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'black-forest-labs');
data.locations.push(
  {
    id: 'black-forest-labs-001',
    companyId: 'black-forest-labs',
    entityIds: ['black-forest-labs-research'],
    companyName: 'Black Forest Labs',
    locationName: 'Freiburg headquarters',
    locationType: 'headquarters',
    address: 'Ingeborg-Krummer-Schroth-Straße 18, 79106 Freiburg im Breisgau, Germany',
    country: 'Germany',
    latitude: 48.0149318,
    longitude: 7.8468004,
    coordinateAccuracy: 'building',
    status: 'map_ready',
    sourceUrl: 'https://bfl.ai/legal/imprint',
    sourceType: 'official_company_imprint',
    supportingSourceUrl: 'https://bfl.ai/careers',
    coordinateSourceUrl: 'https://www.openstreetmap.org/node/13278446077',
    coordinateSourceType: 'openstreetmap_house_number_match',
    verifiedOn: '2026-08-25',
    researchComplete: true,
    researchNote: 'Complete current office outcome. Black Forest Labs’ official careers page describes its labs and office footprint as Freiburg and San Francisco; the official imprint supplies the Freiburg headquarters address and the careers page supplies the San Francisco office address. Legal mailboxes and employee hiring regions are excluded.'
  },
  {
    id: 'black-forest-labs-002',
    companyId: 'black-forest-labs',
    entityIds: ['black-forest-labs-research'],
    companyName: 'Black Forest Labs',
    locationName: 'San Francisco office',
    locationType: 'office',
    address: '410 Townsend Street, San Francisco, CA 94107, United States',
    country: 'United States',
    latitude: 37.7749295,
    longitude: -122.4194155,
    coordinateAccuracy: 'building',
    status: 'map_ready',
    sourceUrl: 'https://bfl.ai/careers',
    sourceType: 'official_company_careers_page',
    coordinateSourceUrl: 'https://sfplanning.org/sites/default/files/za/Office_Allocation_Stats.pdf',
    coordinateSourceType: 'municipal_parcel_address_with_address_geocode',
    supportingCoordinateSourceUrl: 'https://groups.google.com/g/eventbrite-api/c/qcmBGOU4H5E',
    verifiedOn: '2026-08-25',
    researchComplete: true
  }
);
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
