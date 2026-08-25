import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-cradle-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'cradle');
const sourceUrl = 'https://www.cradle.bio/team';
data.locations.push(
  {
    id: 'cradle-001', companyId: 'cradle', entityIds: ['cradle-ai'], companyName: 'Cradle',
    locationName: 'Zurich office', locationType: 'office',
    address: 'Brandschenkestrasse 150, 8002 Zurich, Switzerland', country: 'Switzerland',
    latitude: 47.3649417, longitude: 8.525115,
    coordinateAccuracy: 'building', status: 'map_ready',
    sourceUrl, sourceType: 'official_company_directory',
    coordinateSourceUrl: 'https://www.hotspringsguides.com/hot-springs/hurlimannbad-spa-zurich-switzerland',
    coordinateSourceType: 'exact_address_building_geocode',
    verifiedOn: '2026-08-25', researchComplete: true,
    researchNote: 'Complete current office outcome. Cradle’s official team page explicitly lists three offices and supplies the exact address for each: Zurich, Amsterdam, and Boston/Cambridge. Its careers page corroborates active teams at all three locations. Historical Delft references and cloud regions are excluded.'
  },
  {
    id: 'cradle-002', companyId: 'cradle', entityIds: ['cradle-ai'], companyName: 'Cradle',
    locationName: 'Amsterdam headquarters and wet lab', locationType: 'headquarters',
    address: 'Radarweg 60, 1043 NT Amsterdam, Netherlands', country: 'Netherlands',
    latitude: 52.3910663, longitude: 4.835225,
    coordinateAccuracy: 'building', status: 'map_ready',
    sourceUrl, sourceType: 'official_company_directory',
    supportingSourceUrl: 'https://www.cradle.bio/lab',
    coordinateSourceUrl: 'https://www.flexas.com/nl/nld/kantoorruimte-huren/amsterdam/radarweg/94588',
    coordinateSourceType: 'exact_office_building_geocode',
    supportingCoordinateSourceUrl: 'https://data.amsterdam.nl/adressen/0363200000426182',
    verifiedOn: '2026-08-25', researchComplete: true
  },
  {
    id: 'cradle-003', companyId: 'cradle', entityIds: ['cradle-ai'], companyName: 'Cradle',
    locationName: 'Boston-area office', locationType: 'office',
    address: 'One Broadway, 1 Broadway, Cambridge, MA 02142, United States', country: 'United States',
    latitude: 42.36276, longitude: -71.08352,
    coordinateAccuracy: 'building', status: 'map_ready',
    sourceUrl, sourceType: 'official_company_directory',
    coordinateSourceUrl: 'https://mapcarta.com/37062874',
    coordinateSourceType: 'openstreetmap_named_building',
    supportingCoordinateSourceUrl: 'https://www.boston.gov/sites/default/files/imce-uploads/2018-02/112_revere_street.pdf',
    verifiedOn: '2026-08-25', researchComplete: true
  }
);
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
