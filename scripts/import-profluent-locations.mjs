import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-profluent-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'profluent');
data.locations.push({
  id: 'profluent-001', companyId: 'profluent', companyName: 'Profluent',
  locationName: 'Emeryville headquarters and laboratory', locationType: 'headquarters',
  address: '1480 64th Street, Suite 300, Emeryville, CA 94608, United States', country: 'United States',
  latitude: 37.8445898, longitude: -122.2919656, coordinateAccuracy: 'building', status: 'map_ready',
  sourceUrl: 'https://www.profluent.bio/terms', sourceType: 'official_company_terms',
  supportingSourceUrl: 'https://job-boards.greenhouse.io/profluent',
  coordinateSourceUrl: 'https://www.openstreetmap.org/way/25965717',
  coordinateSourceType: 'openstreetmap_exact_address_building',
  supportingCoordinateSourceUrl: 'https://www.emeryville.org/files/assets/city/v/1/development/documents/housing/2023-2031-h.element/emeryville-hcd-1st-submittal-draft-housing-element-8_1_22-red-line_no-comments.pdf',
  verifiedOn: '2026-08-25', researchComplete: true,
  researchNote: 'Complete current office outcome. Profluent’s current official terms identify 1480 64th Street as the operating address, its privacy notice says the website is administered from its U.S. offices at that address, and every current official job is on-site or hybrid in Emeryville. Current materials disclose no other employee office. Earlier Durant Avenue and Bancroft Way Berkeley addresses are superseded.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
