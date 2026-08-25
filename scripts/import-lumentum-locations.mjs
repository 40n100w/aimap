import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-lumentum-locations.mjs <locations JSON>');

const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const sourceUrl = 'https://www.lumentum.com/en/about-us/office-locations';
const rows = [
  ['Corporate headquarters', 'headquarters', '1001 Ridder Park Drive, San Jose, CA 95131, United States', 'United States'],
  ['Rose Orchard Way facility', 'facility', '80 Rose Orchard Way, San Jose, CA 95134, United States', 'United States'],
  ['Zanker Road facility', 'facility', '2911 Zanker Road, San Jose, CA 95134, United States', 'United States'],
  ['Greensboro office', 'office', '7908 Piedmont Triad Parkway, Greensboro, NC 27409, United States', 'United States'],
  ['Ottawa office', 'office', '61 Bill Leathem Drive, Ottawa, ON K2J 0P7, Canada', 'Canada'],
  ['Shenzhen Futian facility', 'facility', '2 Phoenix Road, Futian Free Trade Zone, Shenzhen, Guangdong 518038, China', 'China'],
  ['Shenzhen Nanshan office', 'office', '6F, Resources Tech Building No. 1, Songpingshan Road North, Shenzhen High-Tech Industrial Park North, Nanshan District, Shenzhen, Guangdong 518057, China', 'China'],
  ['Dongguan facility', 'facility', '4 Ankang Street, Dongguan, Guangdong 523870, China', 'China'],
  ['Wuhan office', 'office', 'Building 1, Yike Center, 438 Gaoxin Avenue, Wuhan, Hubei 430200, China', 'China'],
  ['Hong Kong office', 'office', 'Units 1515-1519, 15th Floor, Building 19W, 19 Science Park West Avenue, Hong Kong Science Park, Pak Shek Kok, New Territories, Hong Kong SAR, China', 'China'],
  ['Hachioji facility', 'facility', '550-10 Higashiasakawa-machi, Hachioji, Tokyo 193-0834, Japan', 'Japan'],
  ['Sagamihara facility', 'facility', '4-1-55 Oyama, Chuo-ku, Sagamihara, Kanagawa 252-5250, Japan', 'Japan'],
  ['Tokyo office', 'office', 'Shinjuku Square Tower, 15F, 6-22-1 Nishi-shinjuku, Shinjuku-ku, Tokyo 163-1115, Japan', 'Japan'],
  ['New Taipei office', 'office', '32nd Floor, No. 16-1 Xinzhan Road, Banqiao District, New Taipei City 220, Taiwan', 'Taiwan'],
  ['Pathum Thani facility', 'facility', '60/129 Moo 19, Khlong Nueng, Khlong Luang District, Pathum Thani 12120, Thailand', 'Thailand'],
  ['Velizy-Villacoublay office', 'office', 'Office 9, 8 rue des Freres Caudron, 78140 Velizy-Villacoublay, France', 'France'],
  ['Milan office', 'office', 'Viale Sarca 226, 20126 Milan, Italy', 'Italy'],
  ['Skofljica facility', 'facility', 'Ambruzeva ulica 1, 1291 Skofljica, Slovenia', 'Slovenia'],
  ['Baar office', 'office', '6th Floor, Grabenstrasse 2, 6340 Baar, Zug, Switzerland', 'Switzerland'],
  ['Schlieren office', 'office', '3rd Floor, Rutistrasse 12 and 14, 8952 Schlieren, Zurich, Switzerland', 'Switzerland'],
  ['Towcester facility', 'facility', 'Caswell, Towcester, Northamptonshire NN12 8EQ, United Kingdom', 'United Kingdom']
];

const normalize = value => value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const priorByAddress = new Map(data.locations.filter(location => location.companyId === 'lumentum').map(location => [normalize(location.address), location]));
data.locations = data.locations.filter(location => location.companyId !== 'lumentum');

rows.forEach(([locationName, locationType, address, country], index) => {
  const prior = priorByAddress.get(normalize(address));
  data.locations.push({
    ...prior,
    id: `lumentum-${String(index + 1).padStart(3, '0')}`,
    companyId: 'lumentum',
    companyName: 'Lumentum',
    locationName,
    locationType,
    address,
    country,
    latitude: prior?.latitude ?? null,
    longitude: prior?.longitude ?? null,
    coordinateAccuracy: prior?.coordinateAccuracy ?? 'unlocated',
    status: prior?.status ?? 'address_verified',
    sourceUrl,
    sourceType: 'official_company_directory',
    verifiedOn: '2026-08-25',
    researchComplete: true,
    researchNote: index === 0 ? 'Complete current physical-site directory transcribed from Lumentum\'s official Office Locations page. Includes corporate offices, R&D and manufacturing facilities; telephone details are omitted.' : undefined
  });
});

data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
