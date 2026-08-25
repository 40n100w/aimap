import {readFileSync} from 'node:fs';

const datasetPath = process.argv[2];
if (!datasetPath) throw new Error('Usage: node scripts/import-vnet-locations.mjs <locations JSON>');
const data = JSON.parse(readFileSync(datasetPath, 'utf8'));
const address = 'Guanjie Building Southeast, 1st Floor, 10 Jiuxianqiao East Road, Chaoyang District, Beijing 100016, China';
const normalize = value => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const prior = data.locations.find(location => location.companyId === 'vnet' && normalize(location.address) === normalize(address));
data.locations = data.locations.filter(location => location.companyId !== 'vnet');
data.locations.push({
  ...prior,
  id: 'vnet-001',
  companyId: 'vnet',
  companyName: 'VNET Group',
  locationName: 'Beijing headquarters',
  locationType: 'headquarters',
  address,
  country: 'China',
  latitude: prior?.latitude ?? null,
  longitude: prior?.longitude ?? null,
  coordinateAccuracy: prior?.coordinateAccuracy ?? 'unlocated',
  status: prior?.status ?? 'address_verified',
  sourceUrl: 'https://www.vnet.com/en/contactus.html',
  sourceType: 'official_company_contact_page',
  verifiedOn: '2026-08-25',
  researchComplete: false,
  researchNote: 'Partial directory. VNET’s official contact page publishes this headquarters address. Its 2025 annual report states that it leases office space in Beijing, Shanghai, Guangzhou, Shenzhen, Ningbo, Hangzhou, Hong Kong and other locations but does not publish the other street addresses. Data-center facilities are excluded from this corporate-office map.'
});
data.updatedOn = '2026-08-25';
process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
