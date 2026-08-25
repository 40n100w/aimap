import { readFileSync } from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-curated-official-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sources={
 arista:'https://www.arista.com/en/company/contact-us',
 supermicro:'https://www.supermicro.com/en/about/contact',
 tsmc:'https://www.tsmc.com/english/contact-us',
 umc:'https://www.umc.com/en/Html/worldwide_contacts'
};
const companies={
 arista:{name:'Arista Networks',locations:[
  ['Santa Clara','5453 Great America Parkway, Santa Clara, CA 95054, United States','United States','headquarters'],
  ['Austin','The Terrace, Building II, Suite 420, 2700 Via Fortuna, Austin, TX 78746, United States','United States','office'],
  ['Nashua','10 Tara Blvd, Suites 400, 330, 430, and 500A, Nashua, NH 03062, United States','United States','office'],
  ['North Carolina','500 Gregson Drive, Suite 150, Cary, NC 27511, United States','United States','office'],
  ['San Francisco','1390 Market Street, Suite 800, San Francisco, CA 94102, United States','United States','office'],
  ['Vancouver','9100 Glenlyon Parkway, Burnaby, British Columbia V5J 5J8, Canada','Canada','office'],
  ['Bangalore','Global Technology Park, Tower A, 9th and 11th Floor, Marathahalli Outer Ring Road, Devarabeesanahalli Village, Varthur Hobli, Bengaluru, Karnataka 560103, India','India','office'],
  ['Chennai','Unit 404, 4th Floor, Campus 30, Keppel One Paramount, No. 110 Mount Poonamallee Road, Porur, Chennai, Tamil Nadu 600116, India','India','office'],
  ['Pune','10th Floor, Survey No. 25, Hissa No. 1, Units 1001-1008, Eleven West, Pan Card Club Road, Baner, Pune, Maharashtra 411045, India','India','office'],
  ['Sydney','Suite 15.01, Level 15, 60 Margaret Street, Sydney, NSW 2000, Australia','Australia','office'],
  ['Dublin','2 Georges Dock, IFSC, Dublin 1, Ireland','Ireland','office'],
  ['Shannon','3220 Aviation House, Westpark, Shannon, Co. Clare V14AN29, Ireland','Ireland','office'],
  ['Singapore','9 Temasek Boulevard, #29-01 Suntec Tower Two, Singapore 038989','Singapore','office'],
  ['Korea','2F, 225-18 Pangyoyeok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, South Korea','South Korea','office'],
  ['Colorado','15000 W. 6th Avenue, Suite 104, Golden, CO 80401, United States','United States','office']
 ]},
 supermicro:{name:'Supermicro',locations:[
  ['Corporate Headquarters','980 Rock Avenue, San Jose, CA 95131, United States','United States','headquarters'],
  ['New Jersey','525 Washington Boulevard, 20th Floor, Jersey City, NJ 07310, United States','United States','office'],
  ['New York','368 9th Avenue, New York, NY 10001, United States','United States','office'],
  ['EMEA Headquarters',"Het Sterrenbeeld 28, 5215 ML 's-Hertogenbosch, The Netherlands",'The Netherlands','headquarters'],
  ['United Kingdom','100 Brook Drive, Green Park, Reading, Berkshire RG2 6UJ, United Kingdom','United Kingdom','office'],
  ['APAC Headquarters','3F, No. 150, Jian 1st Road, Zhonghe District, New Taipei City 235, Taiwan','Taiwan','headquarters'],
  ['Science and Technology Park','No. 1899, Xingfeng Road, Bade District, Taoyuan City 334, Taiwan','Taiwan','factory'],
  ['Korea','#1001, Trade Tower, 511 Yeongdong-daero, Gangnam-gu, Seoul 06164, South Korea','South Korea','office'],
  ['Beijing','Suite 701, Tower D, Jiahua Building, No. 9 Shangdi 3rd Street, Haidian District, Beijing 100085, China','China','office'],
  ['Shanghai','Room 605, Nanyang 1931 Building, No. 165 Yude Road, Xuhui District, Shanghai 200030, China','China','office'],
  ['Japan','21F Shibuya Infoss Tower, 20-1 Sakuragaoka-cho, Shibuya-ku, Tokyo 150-0031, Japan','Japan','office'],
  ['Singapore','9 North Buona Vista Drive, #03-01 Metropolis Tower 1, Singapore 138588','Singapore','office']
 ]},
 tsmc:{name:'TSMC',locations:[
  ['Corporate Headquarters','No. 8, Li-Hsin Road 6, Hsinchu Science Park, Hsinchu 300-096, Taiwan','Taiwan','headquarters'],
  ['Asia Pacific Business','No. 25, Li-Hsin Road, Hsinchu Science Park, Hsinchu 300-78, Taiwan','Taiwan','office'],
  ['North America and TSMC Technology','2851 Junction Avenue, San Jose, CA 95134, United States','United States','office'],
  ['Europe','World Trade Center, Zuidplein 60, 1077 XV Amsterdam, The Netherlands','The Netherlands','office'],
  ['Japan','21F, Queen\'s Tower C, 2-3-5 Minatomirai, Nishi-ku, Yokohama, Kanagawa 220-6221, Japan','Japan','office'],
  ['China','4000 Wen Xiang Road, Songjiang, Shanghai 201616, China','China','factory'],
  ['Nanjing','16 Zifeng Road, Pukou Economic Development Zone, Nanjing, Jiangsu 211806, China','China','factory'],
  ['Korea','Rooms 2104-2105 West, Hanshin Inter Valley 24 Building, 322 Teheran-ro, Gangnam-gu, Seoul 06211, South Korea','South Korea','office'],
  ['Design Technology Canada','1000 Innovation Drive, Suite 400, Kanata, Ontario K2K 3E7, Canada','Canada','design_center'],
  ['Design Technology Japan','10F, Minatomirai Grand Central Tower, 4-6-2 Minatomirai, Nishi-ku, Yokohama, Kanagawa 220-0012, Japan','Japan','design_center'],
  ['Japan 3DIC R&D Center','2F, 7D Building West, 16-1 Onogawa, Tsukuba, Ibaraki 305-8569, Japan','Japan','research_center'],
  ['Washington','5509 NW Parker Street, Camas, WA 98607-9299, United States','United States','factory'],
  ['VisEra Technologies','No. 12, Duxing Road 1, Hsinchu Science Park, Hsinchu 300-096, Taiwan','Taiwan','factory'],
  ['Arizona','5088 W Innovation Circle, Phoenix, AZ 85083, United States','United States','factory'],
  ['European Semiconductor Manufacturing Company','Rosenstrasse 32, 01067 Dresden, Germany','Germany','factory']
 ]},
 umc:{name:'UMC',locations:[
  ['Headquarters','No. 3, Li-Hsin 2nd Road, Hsinchu Science Park, Hsinchu, Taiwan','Taiwan','headquarters'],
  ['Europe','De Entree 77, 1101 BH Amsterdam Zuidoost, The Netherlands','The Netherlands','office'],
  ['HeJian Technology','No. 333, Xinghua Street, Suzhou Industrial Park, Suzhou, Jiangsu 215025, China','China','factory'],
  ['North America','488 De Guigne Drive, Sunnyvale, CA 94085, United States','United States','office'],
  ['USJC Sales','13F, Concurred Yokohama, 3-1 Kinko-cho, Kanagawa-ku, Yokohama, Kanagawa 221-0056, Japan','Japan','office'],
  ['Singapore','No. 3, Pasir Ris Drive 12, Singapore 519528','Singapore','factory'],
  ['Korea','1117 Hanshin Intervalley 24, 322 Teheran-ro, Gangnam-gu, Seoul, South Korea','South Korea','office']
 ]}
};
for(const [companyId,company] of Object.entries(companies)){
 const previousByAddress=new Map(data.locations.filter(location=>location.companyId===companyId).map(location=>[location.address,location]));
 data.locations=data.locations.filter(location=>location.companyId!==companyId);
 const records=company.locations.map(([place,address,country,locationType],index)=>{
  const previous=previousByAddress.get(address);
  return {id:`${companyId}-${String(index+1).padStart(3,'0')}`,companyId,companyName:company.name,locationName:`${company.name} ${place}`,locationType,address,country,latitude:previous?.latitude??null,longitude:previous?.longitude??null,coordinateAccuracy:previous?.coordinateAccuracy??'unlocated',status:previous?.status??'address_verified',sourceUrl:sources[companyId],sourceType:'company_locations_page',verifiedOn:'2026-08-24',...(previous?.geocode?{geocode:previous.geocode}:{})};
 });
 data.locations.push(...records);
}
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
