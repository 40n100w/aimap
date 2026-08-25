import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-siliconflow-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'siliconflow');
data.locations.push({
  id: 'siliconflow-001',
  companyId: 'siliconflow',
  companyName: 'SiliconFlow',
  locationName: 'Beijing office',
  locationType: 'headquarters',
  address: 'Room 2301, 23/F, Building D, Building 8, No. 1 Zhongguancun East Road, Haidian District, Beijing, China',
  country: 'China',
  latitude: 39.993367,
  longitude: 116.331256,
  coordinateAccuracy: 'building',
  status: 'map_ready',
  sourceUrl: 'https://www2.siliconflow.cn/about',
  sourceType: 'official_company_contact_page',
  coordinateSourceUrl: 'https://ditu.amap.com/place/B000A85CQ0',
  coordinateSourceType: 'official_map_building_geocode',
  supportingCoordinateSourceUrl: 'https://api-docs.siliconflow.cn/docs/legals/privacy-policy',
  verifiedOn: '2026-08-25',
  researchComplete: true,
  researchNote: 'Complete current office outcome. SiliconFlow publishes this same Beijing suite on its official company and current privacy pages; its global company page does not disclose any additional employee offices. Amap identifies the exact Building 8, Building D structure as Qidi Science and Technology Building D and supplies the building coordinate. Cloud infrastructure and service regions are excluded.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
