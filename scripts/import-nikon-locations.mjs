import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-nikon-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.nikon.com/business/semi/network/';
const rows=[
['Tokyo','1-5-20 Nishioi, Shinagawa-ku, Tokyo 140-8601, Japan','Japan','headquarters'],
['Kumagaya Plant','201-9 Miizugahara, Kumagaya, Saitama 360-8559, Japan','Japan','manufacturing'],
['Tochigi Nikon','770 Midori, Otawara, Tochigi 324-8625, Japan','Japan','manufacturing'],
['Miyagi Nikon Precision','20 Shin-oyoke, Miya, Zao-machi, Katta-gun, Miyagi 989-0701, Japan','Japan','manufacturing'],
['Nikon Tec','5-21 Katsushima 1-chome, Shinagawa-ku, Tokyo 140-0012, Japan','Japan','field_support'],
['Nikon Engineering','6-3 Nishioi 1-chome, Shinagawa-ku, Tokyo 140-0015, Japan','Japan','research'],
['Oita Network Corporation','6-15 Harushinmachi, Oita, Oita 870-0912, Japan','Japan','field_support'],
['Belmont Research','1399 Shoreway Road, Belmont, CA 94002-4107, United States','United States','research'],
['Hillsboro Precision','6723 NE Bennett Street, Suite 100, Hillsboro, OR 97124, United States','United States','field_support'],
['Langen Precision Europe','Robert-Bosch-Strasse 11, 63225 Langen, Germany','Germany','field_support'],
['Yongin Precision Korea','2 Singal-ro 124beon-gil, Giheung-gu, Yongin-si, Gyeonggi-do 16968, South Korea','South Korea','field_support'],
['Seoul Instruments Korea','21st Floor, City Air Tower, 36 Teheran-ro 87-gil, Gangnam-gu, Seoul 06164, South Korea','South Korea','field_support'],
['Zhubei Precision Taiwan','3rd Floor Unit 1, 28 Taiyuan Street, Zhubei City, Hsinchu County 302, Taiwan','Taiwan','field_support'],
['Shanghai Precision','11th and 12th Floors, Tower 5, Crystal Plaza, 36 Pingjiaqiao Road, Pudong New District, Shanghai 200126, China','China','field_support'],
['Penang Precision Southeast Asia','37-03-01 Ideal Golden Triangle, Jalan Dato Ismail Hashim, Bayan Lepas, Penang 11900, Malaysia','Malaysia','field_support']
];
const previous=new Map(data.locations.filter(x=>x.companyId==='nikon').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='nikon');
data.locations.push(...rows.map(([name,address,country,type],index)=>{const old=previous.get(address);return{id:`nikon-${String(index+1).padStart(3,'0')}`,companyId:'nikon',companyName:'Nikon',locationName:`Nikon ${name}`,locationType:type,address,country,latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl,sourceType:'company_business_network',verifiedOn:'2026-08-24'};}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
