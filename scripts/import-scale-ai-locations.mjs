import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-scale-ai-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const expansionSource = 'https://scale.com/blog/global-office-expansion-2025';
const rows = [
  ['San Francisco headquarters', 'headquarters', '650 Townsend Street, San Francisco, CA 94103, United States', 'United States', 37.77097, -122.40364, 'https://mapcarta.com/W170183648', 'openstreetmap_building', 'https://scale.com/legal/privacy'],
  ['London international headquarters', 'headquarters', '2 Pancras Square, London N1C 4AG, United Kingdom', 'United Kingdom', 51.533481, -0.125043, 'https://www.getthedata.com/postcode/N1C-4AG', 'government_open_address_data', expansionSource],
  ['New York City office', 'office', 'One World Trade Center, 285 Fulton Street, New York, NY 10007, United States', 'United States', 40.713, -74.0135, 'https://www.wikidata.org/wiki/Q18546', 'wikidata_building', expansionSource]
];

data.locations = data.locations.filter(location => location.companyId !== 'scale-ai');
rows.forEach(([locationName, locationType, address, country, latitude, longitude, coordinateSourceUrl, coordinateSourceType, sourceUrl], index) => {
  data.locations.push({
    id: `scale-ai-${String(index + 1).padStart(3, '0')}`,
    companyId: 'scale-ai',
    companyName: 'Scale AI',
    locationName,
    locationType,
    address,
    country,
    latitude,
    longitude,
    coordinateAccuracy: 'building',
    status: 'map_ready',
    sourceUrl,
    sourceType: sourceUrl.includes('/legal/') ? 'official_company_legal_page' : 'official_company_announcement',
    coordinateSourceUrl,
    coordinateSourceType,
    verifiedOn: '2026-08-25',
    researchComplete: false,
    researchNote: index === 0 ? 'Partial official office directory. Scale confirms employee offices in San Francisco, London, New York City, Arlington/National Landing, and St. Louis/Downtown North. Exact current premises are published for the first three. The relocated Arlington and St. Louis offices remain excluded until Scale or another authoritative source publishes their street addresses. Contractor work locations, GDPR representatives, affiliate registrations, and cloud infrastructure are excluded.' : undefined
  });
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
