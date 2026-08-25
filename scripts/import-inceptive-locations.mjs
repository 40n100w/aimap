import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-inceptive-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'inceptive');
data.locations.push({
  id: 'inceptive-001', companyId: 'inceptive', companyName: 'Inceptive',
  locationName: 'Palo Alto wet research and development office', locationType: 'laboratory',
  address: '3440 Hillview Avenue, Suite D100, Palo Alto, CA 94304, United States', country: 'United States',
  latitude: 37.4016808, longitude: -122.1453015, coordinateAccuracy: 'building', status: 'map_ready',
  sourceUrl: 'https://inceptive.com/', sourceType: 'official_company_homepage',
  supportingSourceUrl: 'https://aca-prod.accela.com/PALOALTO/MyCollection/MyCollectionDetail.aspx?collectionId=100595',
  coordinateSourceUrl: 'https://www.openstreetmap.org/way/417314561',
  coordinateSourceType: 'openstreetmap_exact_address_building',
  supportingCoordinateSourceUrl: 'https://www.showcase.com/3440-hillview-ave-palo-alto-ca-94304/28431758/',
  verifiedOn: '2026-08-25', researchComplete: false,
  researchNote: 'Partial current-office outcome. Inceptive’s official homepage states that it has offices in Palo Alto, Berlin, and Zurich and publishes the exact Palo Alto wet-R&D address. The City of Palo Alto independently records Inceptive’s finalized occupancy permit for Suite D100. Exact current Berlin and Zurich street addresses were not found in official sources, so no approximate markers are created.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
