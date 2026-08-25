import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-smic-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.smics.com/uploads/1_%26e4%26b8%26ad%26e8%268a%26af%26e5%269b%26bd%26e9%2699%2685%26e7%26a4%26be%26e4%26bc%269a%26e8%26b4%26a3%26e4%26bb%26bb%26e6%268a%26a5%26e5%2691%268a-%26e8%268b%26b1%26e6%2696%2687%26e6%268c%2682%26e7%26bd%2691%26e7%2689%26887.26-5.pdf';
const rows=[
 ['Shanghai Headquarters','No. 18 Zhangjiang Road, Pudong New Area, Shanghai 201203, China','China','headquarters'],
 ['Beijing','No. 18 Wenchang Avenue, Economic and Technological Development Area, Beijing 100176, China','China','factory'],
 ['Tianjin','No. 19 Xinghua Avenue, Xiqing Economic Development Area, Tianjin 300385, China','China','factory'],
 ['Shenzhen','No. 18 Gaoxin Road, Export Processing Zone, Longtian Street, Pingshan District, Shenzhen 518118, China','China','factory'],
 ['Americas','1732 North 1st Street, Suite 200, San Jose, CA 95112, United States','United States','office'],
 ['Europe','Viale Francesco Restelli 3, 20124 Milan, Italy','Italy','office'],
 ['Taiwan','7F-6, No. 8 Taiyuan 1st Street, Zhubei City, Hsinchu County 30288, Taiwan','Taiwan','office'],
 ['Hong Kong','Suite 3003, 30th Floor, No. 9 Queen\'s Road Central, Hong Kong','Hong Kong','office'],
 ['Japan','9F, Shinagawa Grand Central Tower, 2-16-4 Konan, Minato-ku, Tokyo 108-0075, Japan','Japan','office']
];
const previous=new Map(data.locations.filter(x=>x.companyId==='smic').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='smic');
data.locations.push(...rows.map(([name,address,country,locationType],index)=>{
 const old=previous.get(address);
 return {id:`smic-${String(index+1).padStart(3,'0')}`,companyId:'smic',companyName:'SMIC',locationName:`SMIC ${name}`,locationType,address,country,latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl,sourceType:'company_report',verifiedOn:'2026-08-24'};
}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
