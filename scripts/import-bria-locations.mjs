import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-bria-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'bria-ai');
const sourceUrl = 'https://bria.ai/about-bria';
data.locations.push(
  {
    id: 'bria-ai-001', companyId: 'bria-ai', companyName: 'Bria AI',
    locationName: 'Tel Aviv office', locationType: 'headquarters',
    address: '10 Kremenetski Street, Tel Aviv-Yafo 6789910, Israel', country: 'Israel',
    geocodeQueries: ['קרמניצקי 10, תל אביב-יפו, ישראל', 'אשטרום פורט, תל אביב-יפו, ישראל'],
    latitude: null, longitude: null, coordinateAccuracy: 'unverified', status: 'address_verified',
    sourceUrl, sourceType: 'official_company_about_page',
    supportingSourceUrl: 'https://bria.ai/careers',
    verifiedOn: '2026-08-25', researchComplete: true,
    researchNote: 'Complete current office outcome. Bria’s current official site publishes exact addresses in Tel Aviv and New York, its careers page lists hybrid roles in both, and its official U.S. Copyright Office submission states that the company has offices in New York City and Tel Aviv. The former 126 Yigal Alon Street address is superseded.'
  },
  {
    id: 'bria-ai-002', companyId: 'bria-ai', companyName: 'Bria AI',
    locationName: 'New York office', locationType: 'office',
    address: '1412 Broadway, New York, NY 10018, United States', country: 'United States',
    latitude: 40.7537208, longitude: -73.9868526,
    coordinateAccuracy: 'building', status: 'map_ready',
    sourceUrl, sourceType: 'official_company_about_page',
    supportingSourceUrl: 'https://bria.ai/careers',
    coordinateSourceUrl: 'https://realmo.com/listing/11848602',
    coordinateSourceType: 'exact_address_office_building_coordinate',
    supportingCoordinateSourceUrl: 'https://www.skyscrapercenter.com/new-york-city/1412-broadway/11615',
    verifiedOn: '2026-08-25', researchComplete: true
  }
);
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
