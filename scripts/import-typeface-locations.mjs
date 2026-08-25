import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-typeface-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'typeface');
data.locations.push({
  id: 'typeface-001', companyId: 'typeface', companyName: 'Typeface',
  locationName: 'Palo Alto headquarters', locationType: 'headquarters',
  address: '260 California Avenue, Suite 300, Palo Alto, CA 94306, United States',
  country: 'United States',
  latitude: 37.4264459, longitude: -122.1410869,
  coordinateAccuracy: 'building', status: 'map_ready',
  sourceUrl: 'https://www.typeface.ai/terms-of-service',
  sourceType: 'official_company_legal_page',
  supportingSourceUrl: 'https://www.typeface.ai/company',
  coordinateSourceUrl: 'https://www.cbre.com/properties/properties-for-lease/office/details/US-SMPL-149370/260-california-avenue-palo-alto-ca-94306',
  coordinateSourceType: 'exact_address_parcel_verified_geocode',
  supportingCoordinateSourceUrl: 'https://www.cityofpaloalto.org/files/assets/public/agendas-minutes-reports/agendas-minutes/architectural-review-board/archive-table-layout-2011-and-newer/2012/260-california-avenue-with-all-the-attachments.pdf',
  verifiedOn: '2026-08-25', researchComplete: false,
  researchNote: 'Partial current-office outcome. Typeface’s official company page identifies offices in Palo Alto, Bellevue, and Hyderabad. Its official terms publish the exact Palo Alto address, corroborated as the headquarters by the company’s public profile. Exact current street addresses for Bellevue and Hyderabad were not found in official sources, so no approximate markers are created for them.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
