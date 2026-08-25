import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-nebius-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const rows = [
  ['Amsterdam main office', 'headquarters', 'Tripolis Park, Burgerweeshuispad 101, 1076 ES Amsterdam, Netherlands', 'Netherlands', 'https://assets.nebius.com/assets/70b9d3f9-cd33-40f8-805b-8596b02b8478/20260311%20NVIDIA%20and%20Nebius%20partner%20to%20scale%20full-stack%20AI%20cloud.pdf'],
  ['Schiphol registered office', 'registered_office', 'Schiphol Boulevard 165, 1118 BG Schiphol, Netherlands', 'Netherlands', 'https://docs.nebius.com/legal/privacy'],
  ['Tel Aviv office', 'office', '1 Alon Tower, 39th Floor, 94 Yigal Alon Street, Tel Aviv, Israel', 'Israel', 'https://docs.nebius.com/legal/privacy'],
  ['Newburyport registered office', 'registered_office', '10 State Street, Newburyport, MA 01950, United States', 'United States', 'https://docs.nebius.com/legal/privacy'],
  ['San Francisco office', 'office', 'Ferry Building, 1 Ferry Building, San Francisco, CA 94111, United States', 'United States', 'https://nebius.com/blog/posts/nebius-opens-offices-in-us']
];
const normalize = value => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const priorByAddress = new Map(data.locations.filter(location => location.companyId === 'nebius').map(location => [normalize(location.address), location]));
data.locations = data.locations.filter(location => location.companyId !== 'nebius');
rows.forEach(([locationName, locationType, address, country, sourceUrl], index) => {
  const prior = priorByAddress.get(normalize(address));
  data.locations.push({
    ...prior,
    id: `nebius-${String(index + 1).padStart(3, '0')}`,
    companyId: 'nebius',
    companyName: 'Nebius',
    locationName,
    locationType,
    address,
    country,
    latitude: prior?.latitude ?? null,
    longitude: prior?.longitude ?? null,
    coordinateAccuracy: prior?.coordinateAccuracy ?? 'unlocated',
    status: prior?.status ?? 'address_verified',
    sourceUrl,
    sourceType: sourceUrl.includes('/legal/') ? 'official_company_legal_page' : sourceUrl.includes('/blog/') ? 'official_company_announcement' : 'official_company_press_release',
    verifiedOn: '2026-08-25',
    researchComplete: false,
    researchNote: index === 0 ? 'Partial directory. Exact official addresses are included for the current Amsterdam main office, Schiphol registered office, Tel Aviv site, U.S. subsidiary, and the announced San Francisco Ferry Building office. Nebius also confirms employee hubs in Dallas, New York, London and Belgrade without publishing street addresses. Cloud regions and AI-factory infrastructure are excluded.' : undefined
  });
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
