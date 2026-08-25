import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-dell-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const contactUrl='https://www.dell.com/en-us/lp/contact-us';
const apjUrl='https://www.dell.com/en-hk/lp/legal/terms-of-sale-consumer';
const japanUrl='https://www.dell.com/ja-jp/blog/837894/';
const polandUrl='https://www.dell.com/pl-pl/lp/contact-us';
const rows=[
['Round Rock global headquarters','headquarters','1 Dell Way, Round Rock, TX 78664, United States','United States',contactUrl],
['St Leonards office','office','Level 4, 207 Pacific Highway, St Leonards, NSW 2065, Australia','Australia',apjUrl],
['Xiamen office','office','No. 2388 Jin Shang Road, Xiamen, Fujian 361011, China','China',apjUrl],
['Hong Kong office','office','Suites 1702-1704 and 18/F, Oxford House, Taikoo Place, 979 King’s Road, Island East, Hong Kong','Hong Kong',apjUrl],
['Bangalore registered office','office','Divyashree Greens, Ground Floor, Survey Nos. 12/1, 12/2A and 13/1A, Challaghatta Village, Varthur Hobli, Bangalore 560071, India','India',apjUrl],
['Tokyo headquarters','headquarters','Otemachi One Tower, 17F, 1-2-1 Otemachi, Chiyoda-ku, Tokyo 100-8159, Japan','Japan',japanUrl],
['Osaka office','office','Dojima Plaza Building, 12F, 1-5-30 Dojima, Kita-ku, Osaka 530-0003, Japan','Japan',japanUrl],
['Nagoya office','office','NORE Fushimi, 9F, 1-16-7 Nishiki, Naka-ku, Nagoya 460-0003, Japan','Japan',japanUrl],
['Toyota Technical Center','research_center','Yamanote Building, 4F, 5-73-1 Yamanote, Toyota, Aichi 471-0833, Japan','Japan',japanUrl],
['Fukuoka office','office','Hakata Ekimae Business Center, 5F, 3-25-21 Hakata Ekimae, Hakata-ku, Fukuoka 812-0011, Japan','Japan',japanUrl],
['Miyazaki Customer Center','customer_center','Carino Miyazaki, 5F, 4-8-1 Tachibanadori Higashi, Miyazaki 880-0805, Japan','Japan',japanUrl],
['Seoul office','office','Gangnam Finance Center, 18F, 152 Teheran-ro, Gangnam-gu, Seoul 06236, South Korea','South Korea',apjUrl],
['Cyberjaya office','office','2900 Persiaran APEC, 63000 Cyberjaya, Selangor, Malaysia','Malaysia',apjUrl],
['Singapore office','office','ONE@Changi City, #08-101, 1 Changi Business Park Central 1, Singapore 486036','Singapore',apjUrl],
['Taipei office','office','20F, No. 218, Section 2, Dunhua South Road, Da’an District, Taipei City, Taiwan','Taiwan',apjUrl],
['Warsaw registered office','office','ul. Inflancka 4A, 00-189 Warsaw, Poland','Poland',polandUrl]
];
const norm=s=>s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='dell').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='dell');
rows.forEach(([locationName,locationType,address,country,sourceUrl],index)=>{const prior=old.get(norm(address));data.locations.push({id:`dell-${String(index+1).padStart(3,'0')}`,companyId:'dell',companyName:'Dell Technologies',locationName,locationType,address,country,latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',sourceUrl,sourceType:sourceUrl===contactUrl?'official_company_contact_page':'official_legal_or_subsidiary_page',verifiedOn:'2026-08-25',researchComplete:false,researchNote:index===0?'Partial verified set. Dell does not expose a single complete worldwide corporate-office directory. These exact addresses come from Dell’s current global contact page, APJ legal disclosures, Japan subsidiary directory and Poland contact disclosure. Other country offices, customer solution centers and operational facilities remain to be reconciled before Dell is counted as a completed research outcome.':undefined});});
const verifiedBuildings = {
  'dell-006': [35.687563, 139.763205, 'https://www.navitime.co.jp/poi?spot=01365-65330', 'named_building_directory_geocode'],
  'dell-012': [37.50002, 127.03653, 'https://mapcarta.com/W117823787', 'openstreetmap_named_building'],
  'dell-014': [1.33356, 103.96257, 'https://mapcarta.com/W119688154', 'openstreetmap_named_building']
};
for (const location of data.locations.filter(location => location.companyId === 'dell')) {
  const verified = verifiedBuildings[location.id];
  if (!verified) continue;
  [location.latitude, location.longitude, location.coordinateSourceUrl, location.coordinateSourceType] = verified;
  location.coordinateAccuracy = 'building';
  location.status = 'map_ready';
  location.coordinateVerifiedOn = '2026-08-25';
}
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
