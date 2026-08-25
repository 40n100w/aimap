import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-globalfoundries-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://gf.com/about-gf/contact-us/';
const rows=[
 ['Austin Downtown','98 San Jacinto Boulevard, Austin, TX 78701, United States','United States','office'],
 ['Austin Southwest','7500 Rialto Boulevard, Suite 150, Austin, TX 78735, United States','United States','office'],
 ['Essex Junction','1000 River Street, Essex Junction, VT 05452, United States','United States','factory'],
 ['Malta','400 Stonebreak Road Extension, Malta, NY 12020, United States','United States','headquarters'],
 ['New York','140 East 45th Street, 41st Floor, New York, NY 10017, United States','United States','office'],
 ['Plano','8560 Belleview Drive, Suite 130, Plano, TX 75024, United States','United States','office'],
 ['Richardson','740 East Campbell Road, Suite 560, Richardson, TX 75081, United States','United States','office'],
 ['San Diego','5900 La Place Court, Suite 120-131, Carlsbad, CA 92008, United States','United States','office'],
 ['San Jose','2870 Zanker Road, Suite 210, San Jose, CA 95134, United States','United States','office'],
 ['Santa Clara','2600 Great America Way, Santa Clara, CA 95054, United States','United States','office'],
 ['Cairo','Plot 4, El-Nakheel District, Second New Cairo, Cairo Governorate 00000, Egypt','Egypt','office'],
 ['Dresden','Wilschdorfer Landstrasse 101, 01109 Dresden, Germany','Germany','factory'],
 ['Eindhoven','High Tech Campus 41, 1st Floor, 5656 AE Eindhoven, The Netherlands','The Netherlands','office'],
 ['IMEC Leuven','Kapeldreef 75, 3001 Leuven, Belgium','Belgium','research_center'],
 ['Leuven','Haasrode Research Park, Technologielaan 11-0002, B-3001 Leuven, Belgium','Belgium','office'],
 ['Munich','St.-Martin-Strasse 64, 81541 Munich, Germany','Germany','office'],
 ['Novi Sad','Trg Galerija 3b, Apartment 32, 21000 Novi Sad, Serbia','Serbia','office'],
 ['Pavia','Polo Tecnologico di Pavia, Via Fratelli Cuzio 42, 27100 Pavia, Italy','Italy','office'],
 ['Porto','Avenida Menéres 640, 4450-102 Matosinhos, Portugal','Portugal','office'],
 ['Sofia','59 G.M. Dimitrov Boulevard, 1700 Sofia, Bulgaria','Bulgaria','office'],
 ['Beijing','Unit 03, 41F, North Tower, CP Center, No. 20 Jinhe East Road, Chaoyang District, Beijing, China','China','office'],
 ['Bengaluru North','9th Floor, Block N1 Balsa, Manyata Embassy Business Park, Nagawara, Outer Ring Road, Bengaluru 560045, India','India','office'],
 ['Bengaluru Central','Roshni Arcade, Marathahalli Main Road, Lakshminarayana Pura, EPIP Zone, Chinnapanna Halli, Bengaluru, Karnataka 560037, India','India','office'],
 ['Hsinchu Ciyun Road','20F-6, No. 118 Ciyun Road, East District, Hsinchu City 300196, Taiwan','Taiwan','office'],
 ['Hsinchu Gongdao Road','No. 176-178, Section 2, Gongdao 5th Road, East District, Hsinchu City, Taiwan','Taiwan','office'],
 ['Hyderabad','7th Floor, Block C, Plot No. 2, Salarpuria Sattva Knowledge City, Phase 1, Raidurg Village, Kondapur, Hyderabad, Telangana 500081, India','India','office'],
 ['Kolkata','Block DP, Plot No. 5/1, Fourth Floor, STPI, Salt Lake, Sector V, Kolkata, West Bengal 700091, India','India','office'],
 ['Penang','1C-03-01, One Precinct, Lengkok Mayang Pasir, Bayan Baru, Penang 11950, Malaysia','Malaysia','office'],
 ['Pune','3rd Floor, WeWork Futura, Magarpatta Road, Kirtane Baugh, Hadapsar, Maharashtra 411028, India','India','office'],
 ['Shanghai','7th Floor, Tower 333, No. 333 Lanhua Road, Pudong District, Shanghai, China','China','office'],
 ['Seoul','4F, 150 Beopjo-ro 149beon-gil, Yeongtong-gu, Suwon-si, Gyeonggi-do, South Korea','South Korea','office'],
 ['Singapore Woodlands','60 Woodlands Industrial Park D Street 2, Singapore 738406','Singapore','factory'],
 ['Singapore Science Park','11 Science Park Road, Singapore Science Park II, Singapore 117685','Singapore','office'],
 ['Wuhan','Units 805-806, Building 1, Sandhill Central, No. 6 Longshan South Street, Future City, East Lake High-Tech Development Zone, Wuhan, Hubei, China','China','office'],
 ['Yokohama','38F, Yokohama Landmark Tower, 2-2-1 Minatomirai, Nishi-ku, Yokohama, Kanagawa 220-8138, Japan','Japan','office']
];
const previousByAddress=new Map(data.locations.filter(x=>x.companyId==='globalfoundries').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='globalfoundries');
data.locations.push(...rows.map(([name,address,country,locationType],i)=>{
 const old=previousByAddress.get(address);
 return {id:`globalfoundries-${String(i+1).padStart(3,'0')}`,companyId:'globalfoundries',companyName:'GlobalFoundries',locationName:`GlobalFoundries ${name}`,locationType,address,country,latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl,sourceType:'company_locations_page',verifiedOn:'2026-08-24'};
}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
