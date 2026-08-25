import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-speechmatics-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'speechmatics');
const sourceUrl = 'https://www.speechmatics.com/company/contact';
data.locations.push(
  {
    id: 'speechmatics-001', companyId: 'speechmatics', companyName: 'Speechmatics',
    locationName: 'Cambridge office', locationType: 'headquarters',
    address: '1st Floor, 1 Cambridge Square, Cambridge, CB4 0AE, United Kingdom', country: 'United Kingdom',
    latitude: 52.22468, longitude: 0.15702, coordinateAccuracy: 'building', status: 'map_ready',
    sourceUrl, sourceType: 'official_company_contact_page',
    supportingSourceUrl: 'https://www.speechmatics.com/company/careers',
    coordinateSourceUrl: 'https://mapcarta.com/W1072416444',
    coordinateSourceType: 'openstreetmap_named_building_at_exact_address',
    verifiedOn: '2026-08-25', researchComplete: false,
    researchNote: 'Partial current-office outcome. Speechmatics’ official careers page confirms a hybrid footprint in Cambridge, London, and New York. Its current official contact page supplies exact addresses for Cambridge and London, which are retained. No exact current New York office address was found in official sources, so no approximate marker is created. Historical Cambridge Science Park, Brno, Chennai, Denver, and Boston references are excluded unless current evidence re-confirms them.'
  },
  {
    id: 'speechmatics-002', companyId: 'speechmatics', companyName: 'Speechmatics',
    locationName: 'London office', locationType: 'office',
    address: '6th Floor, Classic House, 174-180 Old Street, London EC1V 9BP, United Kingdom', country: 'United Kingdom',
    latitude: 51.5252152, longitude: -0.0900609, coordinateAccuracy: 'building', status: 'map_ready',
    sourceUrl, sourceType: 'official_company_contact_page',
    supportingSourceUrl: 'https://www.speechmatics.com/company/careers',
    coordinateSourceUrl: 'https://theundergroundmap.com/article.html?id=80230',
    coordinateSourceType: 'named_building_coordinate',
    supportingCoordinateSourceUrl: 'https://democracy.islington.gov.uk/ieListDocuments.aspx?MId=3788',
    verifiedOn: '2026-08-25', researchComplete: false
  }
);
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
