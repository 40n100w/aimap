import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-cohu-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.cohu.com/locations/';
const rows=[
['San Diego Headquarters','17087 Via Del Campo, San Diego, CA 92127-1711, United States','United States','headquarters'],
['Norwood','825 University Avenue, Norwood, MA 02062-2643, United States','United States','research'],
['St Paul','4444 Centerville Road, Suite 105, St. Paul, MN 55127, United States','United States','research'],
['Lincoln','6 Court Drive, Lincoln, RI 02865, United States','United States','manufacturing'],
['Seattle','701 North 36th Street, Suite 340, Seattle, WA 98103, United States','United States','research'],
['Grenoble','Miniparc Polytec, Batiment Tramontane, 60 Rue des Berges, 38000 Grenoble, France','France','field_support'],
['Kolbermoor','Geigelsteinstrasse 6, 83059 Kolbermoor, Germany','Germany','research'],
['Agrate Brianza','Centro Colleoni, Palazzo Cassiopea, Scala 1, 20864 Agrate Brianza, Italy','Italy','field_support'],
['La Chaux-de-Fonds','Chemin de la Combeta 5, 2300 La Chaux-de-Fonds, Switzerland','Switzerland','research'],
['Shanghai','Unit 310, Building A, 200 Jinsu Road, Pudong New District, Shanghai 201206, China','China','field_support'],
['Shenzhen','Room 102, Dormitory, Daqian Industrial Factory, Subdistrict 67, Xiong Community, Xinan Street, Baoan District, Shenzhen 51801, China','China','field_support'],
['Suzhou','Room 05, 3rd Floor, Block 5, Xinsu Industrial Square, 5 Xin Han Street, Suzhou Industrial Park, Suzhou 215021, China','China','field_support'],
['Kawasaki','Shin-Mizonokuchi Building, 5th Floor, 3-5-7 Hisamoto, Takatsu-ku, Kawasaki, Kanagawa 213-0011, Japan','Japan','field_support'],
['Osaka','4-27 Rinku-Minamihama, Sennan, Osaka 590-0535, Japan','Japan','manufacturing'],
['Cheonan','Units A-511, A-512 and B-510, 10 Baekseokgongdan 1-ro, Seobuk-gu, Cheonan-si, Chungcheongnam-do 31094, South Korea','South Korea','field_support'],
['Goyang','Dongmun Goodmorning Tower, Room 1018, 358-39 Hosu-ro, Ilsandong-gu, Goyang-si, Gyeonggi-do 10449, South Korea','South Korea','field_support'],
['Hsinchu','108 Section 2, Wenxing Road, Zhubei City, Hsinchu County 30274, Taiwan','Taiwan','field_support'],
['Melaka','5203-1 Jalan PAK 2/3, Kawasan Perindustrian Ayer Keroh Fasa 4, Melaka 75450, Malaysia','Malaysia','manufacturing'],
['Penang','Plot 82, Lintang Bayan Lepas, Bayan Lepas Industrial Park Phase 4, Bayan Lepas, Penang 11900, Malaysia','Malaysia','manufacturing'],
['Penang Jabil Support','Jabil Circuit, Bayan Lepas Industrial Park Phase 4, Bayan Lepas, Penang 11900, Malaysia','Malaysia','field_support'],
['Baguio City','Ground Floor, Standard Factory Building 2, BCEZ Philippine Economic Zone Authority, Loakan Road, Baguio City 2600, Philippines','Philippines','field_support'],
['Laguna','17 Tagaytay Ridge Drive, Carmelray Industrial Park II, Barangay Punta, Calamba City, Laguna 4027, Philippines','Philippines','manufacturing'],
['Muntinlupa','1216 Acacia Avenue, Madrigal Business Park, Ayala Alabang, Muntinlupa City, Philippines','Philippines','field_support'],
['Pampanga','Building 1-C, Block 2, Lots 1-4, Angeles Industrial Park SEZ, Calibutbut, Bacolor, Pampanga 2001, Philippines','Philippines','field_support'],
['Singapore Serangoon','6 Serangoon North Avenue 5, Unit 03-06, Singapore 554910','Singapore','field_support'],
['Singapore Ubi','Focus One, 1 Ubi View, Unit 01-08, Singapore 408555','Singapore','field_support'],
['Bangkok','Bangna Tower, Room 1630, 16th Floor Unit A, 2/3 Bangna-Trad Road, KM 6.5, Bangkaew, Bangplee, Samutprakarn 10540, Thailand','Thailand','field_support']
];
const previous=new Map(data.locations.filter(x=>x.companyId==='cohu').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='cohu');
data.locations.push(...rows.map(([name,address,country,type],index)=>{const old=previous.get(address);return{id:`cohu-${String(index+1).padStart(3,'0')}`,companyId:'cohu',companyName:'Cohu',locationName:`Cohu ${name}`,locationType:type,address,country,latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl,sourceType:'company_locations_page',verifiedOn:'2026-08-24'};}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
