import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-weights-biases-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const officeSource = 'https://wandb.ai/site/ko/company/about-us/';
const rows = [
  ['U.S. headquarters', 'headquarters', '400 Alabama Street, Suite 202, San Francisco, CA 94110, United States', 'United States', null, null, null, null],
  ['Berlin office', 'office', 'Stresemannstraße 123, 10963 Berlin, Germany', 'Germany', 52.5075201, 13.3778567, 'https://www.flexas.com/de/deu/buero-mieten/berlin/stresemannstrasse/16125', 'commercial_property_map'],
  ['Tokyo office', 'office', 'Tokyo Square Garden, 14F, 3 Chome-1-1 Kyobashi, Chuo City, Tokyo 104-0031, Japan', 'Japan', 35.67603, 139.76875, 'https://mapcarta.com/W406737276', 'openstreetmap_building'],
  ['London office', 'office', '10 York Road, London SE1 7ND, United Kingdom', 'United Kingdom', 51.503492, -0.115640, 'https://www.getthedata.com/postcode/SE1-7ND', 'government_open_address_data']
];

data.locations = data.locations.filter(location => location.companyId !== 'weights-biases');
rows.forEach(([locationName, locationType, address, country, latitude, longitude, coordinateSourceUrl, coordinateSourceType], index) => {
  const located = latitude !== null && longitude !== null;
  data.locations.push({
    id: `weights-biases-${String(index + 1).padStart(3, '0')}`,
    companyId: 'weights-biases',
    companyName: 'Weights & Biases',
    locationName,
    locationType,
    address,
    country,
    latitude,
    longitude,
    coordinateAccuracy: located ? 'building' : 'unlocated',
    status: located ? 'map_ready' : 'address_verified',
    sourceUrl: index === 0 ? 'https://wandb.ai/site/dpa/' : officeSource,
    sourceType: index === 0 ? 'official_company_legal_page' : 'official_company_office_directory',
    coordinateSourceUrl: coordinateSourceUrl ?? undefined,
    coordinateSourceType: coordinateSourceType ?? undefined,
    verifiedOn: '2026-08-25',
    researchComplete: true,
    researchNote: index === 0 ? 'Complete official office directory. W&B publishes offices in San Francisco, Berlin, Tokyo, and London. The current 2026 DPA confirms the newer 400 Alabama Street principal place of business, replacing the older Folsom Street address still visible on a legacy page. Remote job locations and hosted cloud infrastructure are excluded. San Francisco remains off-map pending independent building-coordinate verification.' : undefined
  });
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
