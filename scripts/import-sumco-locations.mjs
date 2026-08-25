import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-sumco-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.sumcosi.com/english/corporate/profile.html';
const rows=[
 ['Head Office and Tokyo Sales','1-2-1 Shibaura, Minato-ku, Tokyo 105-8634, Japan','headquarters'],
 ['Osaka Sales Office','5-5-15 Nishinakajima, Yodogawa-ku, Osaka 532-0011, Japan','office'],
 ['Fukuoka Sales Office','3-1 Shimokawabatamachi, Hakata-ku, Fukuoka 812-0027, Japan','office'],
 ['Kyushu Factory Nagahama','826-1 Nagahama, Higashiyamashiro-cho, Imari-shi, Saga 849-4271, Japan','factory'],
 ['Kyushu Factory Kubara','1-52 Kubara, Yamashiro-cho, Imari-shi, Saga 849-4256, Japan','factory'],
 ['Kyushu Factory Saga','2201 Oaza Kamioda, Kohoku-machi, Kishima-gun, Saga 849-0597, Japan','factory'],
 ['Kyushu Factory Nagasaki','1324-2 Masuragahara-machi, Omura-shi, Nagasaki 856-8555, Japan','factory'],
 ['Yonezawa Plant','4-3146-12 Hachimanpara, Yonezawa-shi, Yamagata 992-1128, Japan','factory'],
 ['Chitose Plant','1007-196 Izumisawa, Chitose-shi, Hokkaido 066-0051, Japan','factory'],
 ['JSQ Division','5-14-3 Barajima, Akita-shi, Akita 010-0065, Japan','factory']
];
const previous=new Map(data.locations.filter(x=>x.companyId==='sumco').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='sumco');
data.locations.push(...rows.map(([name,address,locationType],index)=>{
 const old=previous.get(address);
 return {id:`sumco-${String(index+1).padStart(3,'0')}`,companyId:'sumco',companyName:'SUMCO',locationName:`SUMCO ${name}`,locationType,address,country:'Japan',latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl,sourceType:'company_locations_page',verifiedOn:'2026-08-24'};
}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
