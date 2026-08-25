import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-recursion-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
data.locations = data.locations.filter(location => location.companyId !== 'recursion');
const common = {
  companyId: 'recursion', companyName: 'Recursion', entityIds: ['recursion-valence-labs'],
  sourceUrl: 'https://www.sec.gov/Archives/edgar/data/1601830/000160183026000039/rxrx-20251231.htm',
  sourceType: 'company_sec_10k', supportingSourceUrl: 'https://recursion.com/careers',
  verifiedOn: '2026-08-25', researchComplete: true,
  researchNote: 'Complete current physical-site outcome. Recursion’s February 2026 Form 10-K identifies its core post-consolidation sites in Salt Lake City, New York, London, Milton Park, and Montreal, and explains that former Boston, Vienna, and legacy Oxford premises were assigned, surrendered, or subleased. SEC lease amendments establish that the additional 103,634-square-foot Salt Lake City premises occupy the separate Gateway Block B expansion building adjacent to Station 41; a current commercial listing identifies that building at 18 North Rio Grande Street. The current careers page supplies matching public street addresses for the other sites. The Montreal Valence Labs site also resolves the separate Recursion Valence Labs atlas record.'
};
const raw = [
  {
    id: 'recursion-001', locationName: 'Salt Lake City headquarters — Station 41', locationType: 'headquarters',
    address: '41 South Rio Grande Street, Salt Lake City, UT 84101, United States', country: 'United States',
    latitude: 40.7684755, longitude: -111.9033029,
    coordinateSourceUrl: 'https://www.openstreetmap.org/way/537226167', coordinateSourceType: 'openstreetmap_building'
  },
  {
    id: 'recursion-002', locationName: 'Salt Lake City headquarters expansion — Gateway Block B', locationType: 'office_and_laboratory',
    address: '18 North Rio Grande Street, Salt Lake City, UT 84101, United States', country: 'United States',
    latitude: 40.7697971, longitude: -111.9045087,
    coordinateSourceUrl: 'https://www.openstreetmap.org/way/33147874', coordinateSourceType: 'openstreetmap_building'
  },
  {
    id: 'recursion-003', locationName: 'New York City office', locationType: 'office',
    address: '66 Hudson Boulevard East, New York, NY 10001, United States', country: 'United States',
    latitude: 40.7552501, longitude: -73.9995817,
    coordinateSourceUrl: 'https://www.openstreetmap.org/way/1021580375', coordinateSourceType: 'openstreetmap_building'
  },
  {
    id: 'recursion-004', locationName: 'London office', locationType: 'office',
    address: '3 Pancras Square, London N1C 4AG, United Kingdom', country: 'United Kingdom',
    latitude: 51.5341828, longitude: -0.1250676,
    coordinateSourceUrl: 'https://www.openstreetmap.org/way/283553778', coordinateSourceType: 'openstreetmap_building'
  },
  {
    id: 'recursion-005', locationName: 'Milton Park automation chemistry laboratory', locationType: 'laboratory',
    address: '155 Brook Drive, Milton Park, Abingdon OX14 4SD, United Kingdom', country: 'United Kingdom',
    latitude: 51.6245934, longitude: -1.2858022,
    coordinateSourceUrl: 'https://www.openstreetmap.org/way/61740963', coordinateSourceType: 'openstreetmap_building'
  },
  {
    id: 'recursion-006', locationName: 'Montréal Valence Labs office and laboratory', locationType: 'office_and_laboratory',
    address: '6666 Rue Saint-Urbain, Montréal, QC H2S 3H1, Canada', country: 'Canada',
    latitude: 45.5304548, longitude: -73.6138195,
    coordinateSourceUrl: 'https://www.openstreetmap.org/way/222246923', coordinateSourceType: 'openstreetmap_building'
  }
];
for (const location of raw) data.locations.push({
  ...common, ...location,
  coordinateAccuracy: location.latitude === null ? 'unverified' : 'building',
  status: location.latitude === null ? 'needs_review' : 'map_ready'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
