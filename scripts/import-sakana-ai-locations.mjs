import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-sakana-ai-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'sakana-ai');
data.locations.push({
  id: 'sakana-ai-001',
  companyId: 'sakana-ai',
  companyName: 'Sakana AI',
  locationName: 'Tokyo headquarters',
  locationType: 'headquarters',
  address: 'Azabudai Hills Mori JP Tower, 22F, 1-3-1 Azabudai, Minato-ku, Tokyo 106-0041, Japan',
  country: 'Japan',
  latitude: 35.66085,
  longitude: 139.74066,
  coordinateAccuracy: 'building',
  status: 'map_ready',
  sourceUrl: 'https://sakana.ai/azabudai-hills',
  sourceType: 'official_company_relocation_announcement',
  supportingSourceUrl: 'https://sakana.ai/company-info/',
  coordinateSourceUrl: 'https://mapcarta.com/W1158739441',
  coordinateSourceType: 'openstreetmap_named_building',
  supportingCoordinateSourceUrl: 'https://www.mori.co.jp/en/projects/azabudaihills/',
  verifiedOn: '2026-08-25',
  researchComplete: true,
  researchNote: 'Complete current office outcome. Sakana AI’s February 2026 official relocation announcement states that its headquarters moved to this tower and its current corporate-information and careers pages identify a single Tokyo office. The former Toranomon and Nishi-Shimbashi addresses are superseded and excluded.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
