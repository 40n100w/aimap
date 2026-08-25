import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-teradyne-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.teradyne.com/ja/company/contact-teradyne/';
const rows=[
 ['Chandler','Suite 106, 2535 West Fairview Street, Chandler, AZ 85224, United States','United States'],
 ['Agoura Hills','30701 Agoura Road, Agoura Hills, CA 91301, United States','United States'],
 ['Irvine','36 Discovery, Suite 100, Irvine, CA 92618, United States','United States'],
 ['San Diego','10509 Vista Sorrento Parkway, Suite 116, San Diego, CA 92121, United States','United States'],
 ['San Jose','875 Embedded Way, San Jose, CA 95138, United States','United States'],
 ['Sunnyvale','936 Hamlin Court, Sunnyvale, CA 94089, United States','United States'],
 ['Costa Rica','Lot 50 B1, Coyol Free Zone Industrial Park, Alajuela, Costa Rica','Costa Rica'],
 ['Deer Park','21440 West Lake Cook Road, 6th Floor, Deer Park, IL 60010, United States','United States'],
 ['Corporate Headquarters','600 Riverpark Drive, North Reading, MA 01864, United States','United States','headquarters'],
 ['Arden Hills','4354 Round Lake Road West, Arden Hills, MN 55112, United States','United States'],
 ['Fridley','Suite 106, 5301 East River Road, Fridley, MN 55421, United States','United States'],
 ['Omaha','14301 FNB Parkway, Suite 100, Omaha, NE 68154, United States','United States'],
 ['Beavercreek','2689 Commons Boulevard, Suite 201, Beavercreek, OH 45431, United States','United States'],
 ['Tualatin','7670 Southwest Mohawk Street, Tualatin, OR 97062, United States','United States'],
 ['Austin','4801 Southwest Parkway, Austin, TX 78735, United States','United States'],
 ['Plano','2701 West Plano Parkway, Unit 700, Plano, TX 75075, United States','United States'],
 ['Essex Junction','29 River Road, Essex Junction, VT 05452, United States','United States'],
 ['Beijing','Hanhai International Plaza, Courtyard 13 Jiuxianqiao Road, Beijing 100080, China','China'],
 ['Chengdu','Wework Ruidong Center, No. 199 Xiadong Avenue, Chengdu, China','China'],
 ['Hefei','Towers D and B, Lenovo Science and Technology Harbor, 5899 Xiyou Road, Hefei Economic and Technological Development Zone, Hefei, Anhui 230601, China','China'],
 ['Shanghai Building 9','Building 9, 2nd Floor, 1201 Gui Qiao Road, Jin Qiao Export Processing Zone, Pudong, Shanghai 201206, China','China'],
 ['Shanghai Building 10','Building 10, 2nd Floor, 1201 Gui Qiao Road, Jin Qiao Export Processing Zone, Pudong, Shanghai 201206, China','China'],
 ['Shenzhen','Room 01C-2, 1st Floor West Wing, Vision Business Park, South Shenzhen Hi-Tech Park, Nanshan District, Shenzhen, Guangdong 518057, China','China'],
 ['Suzhou','Units 113-114, Ground Floor, Block 5, No. 5 Xing Han Street, Suzhou 215021, China','China'],
 ['Xian','Regus Capital Vail Office 1104-02, No. 64 South 2nd Ring Road, Yanta District, Xian, China','China'],
 ['Caesarea','North Caesarea Business Park, 4 Lesham Street, Caesarea, Israel','Israel'],
 ['Haifa','Matam Building 18, 9 Deri Sakharov Street, Haifa, Israel','Israel'],
 ['Kumamoto','272-12 Heisei, Takaono, Ozu-machi, Kikuchi-gun, Kumamoto 869-1232, Japan','Japan'],
 ['Nagoya','6th Floor, DP Square Higashisakura, 1-14-11 Higashisakura, Higashi-ku, Nagoya, Aichi 461-0005, Japan','Japan'],
 ['Yokohama','7th Floor, MM Park Building, 3-6-3 Minatomirai, Nishi-ku, Yokohama, Kanagawa 220-0012, Japan','Japan'],
 ['Icheon','Suite 404, Hyundai CoA Building, 2058 Gyeongchung-daero, Bubal-eup, Icheon, Gyeonggi-do, South Korea','South Korea'],
 ['Onyang','Unit 201, DreamNest Store Building, 1174 Buksu-ri, Baebang-eup, Asan, Chungcheongnam-do, South Korea','South Korea'],
 ['Seoul','Level 7, Songpa NH Building, 155 Songpa-daero, Songpa-gu, Seoul 05855, South Korea','South Korea'],
 ['Melaka','Units 28, 28-1 and 28-2, Jalan Mutiara Melaka 3, Taman Mutiara Melaka, Batu Berendam, Melaka 75350, Malaysia','Malaysia'],
 ['Penang','Unit 1, Lower Level 3, Hotel Equatorial Penang, 1 Jalan Bukit Jambul, Bayan Lepas, Penang 11900, Malaysia','Malaysia'],
 ['Selangor','Suite 9.01, Office Unit 956, Level 9, Menara Summit, Persiaran Kewajipan, USJ 1, Subang Jaya, Selangor 47600, Malaysia','Malaysia'],
 ['Alabang','24th Floor, Axis Tower, Filinvest Avenue, Northgate Cyberzone, Alabang 1770, Philippines','Philippines'],
 ['Cebu','Lots 5-6 Block 3, Washington Road, Cebu Light Industrial Park, Barangay Basak, Lapu-Lapu City, Cebu, Philippines','Philippines'],
 ['Clark','Unit 514, 5th Clark Center 07, Jose Abad Santos Avenue, Clark Freeport Zone, Pampanga 2023, Philippines','Philippines'],
 ['Singapore','The Aries, #02-01, 51 Science Park Road, Singapore 117586','Singapore'],
 ['Taiwan','3F, No. 20 Tai Yuen Street, Tai Yuen Hi-Tech Industrial Park, Zhubei City, Hsinchu 302, Taiwan','Taiwan'],
 ['Thailand','Innovation Cluster 2, 142 Thailand Science Park, Pathum Thani, Thailand','Thailand'],
 ['Meylan','Le Verone, Les Jardins de Maupertuis, 3 Chemin de la Dhuy, 38240 Meylan, France','France'],
 ['Rousset','Building C, Les Portes de Rousset, Avenue Olivier Perroy, 13790 Rousset, France','France'],
 ['Suresnes','13-17 Rue Pages, 92150 Suresnes, France','France'],
 ['Unterhaching','Inselkammerstrasse 14, 82008 Unterhaching, Germany','Germany'],
 ['Regensburg','Wernerwerkstrasse 2, 93049 Regensburg, Germany','Germany'],
 ['Catania','VIII Strada 5, Zona Industriale, 95100 Catania, Italy','Italy'],
 ['Milan','Strada Statale 11, Padana Superiore 2/B, 20063 Cernusco sul Naviglio, Milan, Italy','Italy'],
 ['Plan-les-Ouates','18 Chemin des Aulx, 1228 Plan-les-Ouates, Switzerland','Switzerland'],
 ['Bracknell','Lily Hill House, Room 2, Lily Hill Road, Bracknell, Berkshire RG12 2SJ, United Kingdom','United Kingdom']
];
const previous=new Map(data.locations.filter(x=>x.companyId==='teradyne').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='teradyne');
data.locations.push(...rows.map(([name,address,country,type='office'],index)=>{const old=previous.get(address);return{id:`teradyne-${String(index+1).padStart(3,'0')}`,companyId:'teradyne',companyName:'Teradyne',locationName:`Teradyne ${name}`,locationType:type,address,country,latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl,sourceType:'company_locations_page',verifiedOn:'2026-08-24'};}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
