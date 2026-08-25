import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-hugging-face-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const rows = [
  {
    locationName: 'New York office',
    locationType: 'headquarters',
    address: '20 Jay Street, Suite 620, Brooklyn, NY 11201, United States',
    country: 'United States',
    latitude: 40.704007,
    longitude: -73.986759,
    sourceUrl: 'https://huggingface.co/datasets/huggingface/policy-docs/resolve/main/2023_OMB%20EO%20RFC.pdf?download=true',
    coordinateSourceUrl: 'https://esd.ny.gov/sites/default/files/news-articles/10262017_SNY_BM.pdf'
  },
  {
    locationName: 'Paris office',
    locationType: 'office',
    address: '9 rue des Colonnes, 75002 Paris, France',
    country: 'France',
    latitude: 48.869742,
    longitude: 2.339379,
    sourceUrl: 'https://huggingface.co/privacy',
    coordinateSourceUrl: 'https://www.intercariforef.org/rco_search/quiforme/etablissement/?rech=97833823400013'
  }
];

data.locations = data.locations.filter(location => location.companyId !== 'hugging-face');
rows.forEach((row, index) => {
  data.locations.push({
    id: `hugging-face-${String(index + 1).padStart(3, '0')}`,
    companyId: 'hugging-face',
    companyName: 'Hugging Face',
    locationName: row.locationName,
    locationType: row.locationType,
    address: row.address,
    country: row.country,
    latitude: row.latitude,
    longitude: row.longitude,
    coordinateAccuracy: 'building',
    status: 'map_ready',
    sourceUrl: row.sourceUrl,
    sourceType: row.sourceUrl.includes('/privacy') ? 'official_company_legal_page' : 'official_company_policy_document',
    coordinateSourceUrl: row.coordinateSourceUrl,
    coordinateSourceType: index === 0 ? 'government_property_record' : 'government_address_database',
    verifiedOn: '2026-08-25',
    researchComplete: true,
    researchNote: index === 0 ? 'Complete office-space outcome. A current Hugging Face job listing states that the distributed company has office spaces in NYC and Paris; exact current addresses are supported by Hugging Face legal and policy documents. Remote employee locations and hosted infrastructure are excluded.' : undefined
  });
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
