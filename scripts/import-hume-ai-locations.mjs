import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-hume-ai-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'hume-ai');
data.locations.push({
  id: 'hume-ai-001',
  companyId: 'hume-ai',
  companyName: 'Hume AI',
  locationName: 'New York office',
  locationType: 'headquarters',
  address: 'New York Life Building, 51 Madison Avenue, Floor 31, New York, NY 10010, United States',
  country: 'United States',
  latitude: 40.74275,
  longitude: -73.98558,
  coordinateAccuracy: 'building',
  status: 'map_ready',
  sourceUrl: 'https://www.hume.ai/contact',
  sourceType: 'official_company_contact_page',
  supportingSourceUrl: 'https://www.sec.gov/Archives/edgar/data/1943655/000192976425000002/xslFormDX08/primary_doc.xml',
  coordinateSourceUrl: 'https://mapcarta.com/W109280421',
  coordinateSourceType: 'openstreetmap_named_building',
  supportingCoordinateSourceUrl: 'https://s-media.nyc.gov/agencies/lpc/lp/2067.pdf',
  verifiedOn: '2026-08-25',
  researchComplete: true,
  researchNote: 'Complete current office outcome. Hume AI’s official contact page labels this exact floor and address as its office, and its current SEC filing identifies the same premises as its principal place of business. No additional employee offices are disclosed; an older Park Avenue South address is superseded.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
