import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-canon-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const operations='https://global.canon/en/corporate/location.html';
const semiconductor='https://global.canon/en/product/indtech/semicon/group/index.html';
const rows=[
['Shimomaruko Headquarters','3-30-2 Shimomaruko, Ota-ku, Tokyo 146-8501, Japan','Japan','headquarters',operations],
['Utsunomiya Optical Products Plant','20-2 Kiyohara-Kogyodanchi, Utsunomiya, Tochigi 321-3292, Japan','Japan','manufacturing',operations],
['Utsunomiya New Lithography Factory','22-2 Kiyohara-Kogyodanchi, Utsunomiya, Tochigi, Japan','Japan','manufacturing','https://global.canon/en/news/2022/20221006-2.html'],
['Ami Plant and Canon Semiconductor Equipment','3577 Yoshiwara, Ohaza, Ami-machi, Inashiki-gun, Ibaraki 300-1195, Japan','Japan','manufacturing','https://semicon.canon/en/corporate/profile.html'],
['Canon Nanotechnologies Austin','1807 West Braker Lane, Building C-300, Austin, TX 78758, United States','United States','research','https://cnt.canon.com/about/'],
['Canon USA Semiconductor Equipment','3300 North First Street, San Jose, CA 95134, United States','United States','field_support','https://www.usa.canon.com/business/industrial/contact-semiconductor-products'],
['Canon Marketing Japan Industrial Equipment','13-29 Konan 2-chome, Minato-ku, Tokyo 108-8011, Japan','Japan','field_support','https://canon.jp/biz/product/indtech/ab/en/canon-semicon'],
['Canon Semiconductor Engineering Korea','49 Dosijiwon 1-gil, Godeok-myeon, Pyeongtaek-si, Gyeonggi-do, South Korea','South Korea','field_support','https://anelva.canon/en/business/pdf/pu_detail22.pdf'],
['Canon Semiconductor Equipment Taiwan','9th Floor Unit 2, 25 Pu-Ding Road, Hsinchu 300, Taiwan','Taiwan','field_support','https://anelva.canon/en/business/pdf/pu_detail22.pdf'],
['Canon Singapore','Galaxis, 1 Fusionopolis Place, Unit 14-10, Singapore 138522','Singapore','field_support','https://anelva.canon/en/business/pdf/pu_detail22.pdf'],
['Canon Optical Industrial Equipment Shanghai','3rd-4th Floors, South Wing, Building 5, Innovation Galaxy, 210 Wenshui Road, Jingan District, Shanghai 200072, China','China','field_support','https://anelva.canon/en/business/pdf/pu_detail22.pdf']
];
const previous=new Map(data.locations.filter(x=>x.companyId==='canon').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='canon');
data.locations.push(...rows.map(([name,address,country,type,sourceUrl],index)=>{const old=previous.get(address);return{id:`canon-${String(index+1).padStart(3,'0')}`,companyId:'canon',companyName:'Canon',locationName:`Canon ${name}`,locationType:type,address,country,latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl,sourceType:sourceUrl===operations?'company_operations_page':'company_business_source',verifiedOn:'2026-08-24'};}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
