import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-aleph-alpha-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'aleph-alpha-research');
const sourceUrl = 'https://aleph-alpha.com/en/contact/';
const offices = [
  ['aleph-alpha-001', 'Heidelberg headquarters', 'headquarters', 'Speyerer Straße 14, 69115 Heidelberg, Germany', 49.3980309, 8.673011, 'https://www.openstreetmap.org/node/13299302419', 'openstreetmap_named_company_at_exact_address'],
  ['aleph-alpha-002', 'Berlin office', 'office', 'Wallstraße 16, 10179 Berlin, Germany', 52.5111756, 13.4064476, 'https://www.openstreetmap.org/node/3093317073', 'openstreetmap_exact_address_entrance'],
  ['aleph-alpha-003', 'Bayreuth office', 'office', 'Weiherstraße 26, 95448 Bayreuth, Germany', 49.9655637, 11.6020403, 'https://www.openstreetmap.org/way/291488957', 'openstreetmap_exact_address_building'],
  ['aleph-alpha-004', 'Munich office', 'office', 'Einsteinstraße 174, 81677 Munich, Germany', 48.1377016, 11.6237163, 'https://www.openstreetmap.org/way/592159898', 'openstreetmap_named_building_at_exact_address']
];
for (const [id, locationName, locationType, address, latitude, longitude, coordinateSourceUrl, coordinateSourceType] of offices) data.locations.push({
  id, companyId: 'aleph-alpha-research', companyName: 'Aleph Alpha',
  locationName, locationType, address, country: 'Germany',
  latitude, longitude, coordinateAccuracy: 'building', status: 'map_ready',
  sourceUrl, sourceType: 'official_company_contact_page',
  supportingSourceUrl: 'https://aleph-alpha.com/en/',
  coordinateSourceUrl, coordinateSourceType,
  verifiedOn: '2026-08-25', researchComplete: true,
  ...(id === 'aleph-alpha-001' ? {researchNote: 'Complete current office outcome. Aleph Alpha’s official homepage states that its team works across four German locations, and its official contact page supplies the exact address for Heidelberg, Berlin, Bayreuth, and Munich. All four are retained; historical Heidelberg premises are excluded. This footprint supports the catalog’s Aleph Alpha Research company record; non-Company lab and model records are outside the 1,088-company denominator.'} : {})
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
