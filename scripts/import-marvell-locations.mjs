import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-marvell-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const directoryUrl='https://www.marvell.com/company/offices.html';
const filingUrl='https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000011/mrvl-20260131.htm';
const rows=[
['Wilmington corporate headquarters','headquarters','1000 N. West Street, Suite 1200, Wilmington, DE 19801, United States','United States',filingUrl],
['Chandler office','office','3377 S Price Rd #2055, Chandler, AZ 85248, United States','United States'],
['Santa Clara U.S. headquarters','headquarters','5488 Marvell Lane, Santa Clara, CA 95054, United States','United States'],
['Irvine office','office','15485 Sand Canyon Ave, Irvine, CA 92618, United States','United States'],
['Westlake Village office','office','112 South Lakeview Canyon Road, Lakeview Corporate Center, 1st Floor, Suite 100, Westlake Village, CA 91362, United States','United States'],
['Boise office','office','700 South Clearwater Lane, Boise, ID 83712, United States','United States'],
['Westborough office','office','8 Technology Drive, Suites 150 & 200, 1st & 2nd Floor, Westborough, MA 01581, United States','United States'],
['Minnetonka office','office','12900 Whitewater Dr. #310, Minnetonka, MN 55343, United States','United States'],
['Rochester office','office','3555 9th St NW, Suite 400, Rochester, MN 55901, United States','United States'],
['Morrisville office','office','3015 Carrington Mill Blvd, Suite 500, Morrisville, NC 27560, United States','United States'],
['Fishkill office','office','60 Merritt Blvd, Suite 203, Fishkill, NY 12524, United States','United States'],
['Portland office','office','1675 S.W. Marlow Avenue, North Pacific Plaza, Suite 220, Portland, OR 97225, United States','United States'],
['Austin office','office','5113 Southwest Parkway, Travis Oaks Building 350, Austin, TX 78735, United States','United States'],
['Burlington office','office','128 Lakeside Avenue, Suite 401, 3rd and 4th floor, Burlington, VT 05401, United States','United States'],
['Herndon office','office','13800 Coppermine Rd, Suite 201, Herndon, VA 20171, United States','United States'],
['Cordoba Humberto Primo 670 office','office','Av. Humberto Primo 670, Capitalinas Complex, Fragueiro Block, Office F 65, Floor 6, Cordoba, Argentina','Argentina'],
['Cordoba Humberto Primo 680 office','office','Calle Humberto Primo 680, Capitalinas, Suquia Block, Floor 6, Units S 61-67, Cordoba, Argentina','Argentina'],
['Burnaby office','office','4333 Still Creek Drive, Phase 7, Suite 110, Burnaby, BC V5C 6S6, Canada','Canada'],
['Kanata office','office','400-350 Legget Drive, Kanata, ON K2K 2W7, Canada','Canada'],
['Markham office','office','500-10 Aviva Way, Markham, ON L6G 0G1, Canada','Canada'],
['Toronto office','office','150 King Street West, Suite 704, Toronto, ON M5H 1J9, Canada','Canada'],
['Beijing office','office','Unit 503, North District, Digital Technology Plaza, 9 Shangdi Jiujie Street, Haidian District, Beijing 100085, China','China'],
['Chengdu office','office','No. 219 Second Tianhua Road, Tianfu Software Park, Building C10, TFSP Zones C, Floor 25, Chengdu, China','China'],
['Nanjing office','office','No. 57 Andemen Street, Building 7, Rooms 305-310, Floor 3, Nanjing, China','China'],
['Shanghai office','office','Buildings 3 & 4, No. 399 Ke Yuan Road, Pudong New District, Shanghai 201203, China','China'],
['Shenzhen office','office','B407, Unit 1, Block B, Wanrong Building, No. 1029 Nanhai Avenue, Yanshan Community, Merchants Street, Nanshan District, Shenzhen, China','China'],
['Wuhan office','office','Rooms 1609-1610, No. 355 Guanshan Avenue, mTower, East Lake High-Tech Development Zone, Wuhan, Hubei 430000, China','China'],
['Horsholm office','office','Agern Alle 24, Room 55-4221, DK-2970 Horsholm, Denmark','Denmark'],
['Aachen office','office','Otto-Blumenthal-Str. 25, 52074 Aachen, Germany','Germany'],
['Ettlingen Automotive Center of Excellence','research_center','Siemensstrasse 23, 76275 Ettlingen, Germany','Germany'],
['Bangalore office','office','Global Technology Park, Towers D & E, Floors 9-11, Marathahalli-Sarjapur Outer Ring Road, Bangalore 560103, India','India'],
['Hyderabad office','office','6-3-567 North East Building, 1st & 2nd Floor, Erra Manzil, Somajiguda, Hyderabad 500082, India','India'],
['Pune office','office','Panchshil Business Park, Tower A, 8th and 9th Floor, Survey No. 206/S, Viman Nagar, Pune 411014, Maharashtra, India','India'],
['Petah Tikva office','office','9 Ha-Psagot St, Ofer Park, Petah Tikva 4970602, Israel','Israel'],
['Yokneam office','office','6 Hamada Street, Mordot HaCarmel Industrial Park, Yokneam 2069203, Israel','Israel'],
['Pavia office','office','Viale della Repubblica 38, Pavia 27100, Italy','Italy'],
['Hiratsuka office','office','Hiratsuka M N Building, Floor 9, 3-1 Takara-cho, Hiratsuka 254-0034, Japan','Japan'],
['Osaka office','office','Yodoyabashi PREX, 2-4-9 Hiranomachi, Chuo Ward, Osaka 541-0046, Japan','Japan'],
['Tokyo office','office','Meguro Hilltop Walk, Level 4, 4-1-5 Kamiosaki, Shinagawa, Tokyo 141-0021, Japan','Japan'],
['Ofuna office','office','Kasahara Building Ofuna IV, Floor 3 Room 3, 1-24-19 Ofuna, Ofuna 247-0056, Japan','Japan'],
['Eindhoven office','office','High Tech Campus 5, 5656 AE Eindhoven, Netherlands','Netherlands'],
['Krakow office','office','Marvell Technology Poland, Krakowski Park Technologiczny, Office 1.36, Podole 60, 30-394 Krakow, Poland','Poland'],
['Bucharest office','office','SkyTower Office Building, Floor 22, 246 C Calea Floreasca Street, Sector 1, Bucharest 014476, Romania','Romania'],
['Singapore office','office','Tai Seng Centre, 3 Irving Road, Units #08-01, #09-06 to #09-09 and #10-01, Singapore 369522','Singapore'],
['Seoul office','office','Capital Tower, Part of Floor 19, 142 Teheran-ro, Gangnam-gu, Seoul, South Korea','South Korea'],
['Suwon office','office','Gwanggyo Technotower, Room 1010, Euidong 1248-3, Suwon City, South Korea','South Korea'],
['Barcelona office','office','LOOM Plaza Catalunya, Placa de Catalunya 9, Floor 6, 08002 Barcelona, Spain','Spain'],
['Madrid office','office','6 Gran Via Street, Office 42, Floor 4, 28013 Madrid, Spain','Spain'],
['Stockholm office','office','Farogatan 33, Katla 1, Kista Science Tower, Room B1243, Floor B12, 164 40 Stockholm, Sweden','Sweden'],
['Taipei office','office','11F, No. 390 Ruiguang Rd., Neihu District, Taipei City 114767, Taiwan','Taiwan'],
['Hsinchu office','office','10F, Building A, No. 3 Huanke 1st Rd., Zhubei City, Hsinchu County 302047, Taiwan','Taiwan'],
['Northamptonshire office','office','Grange Farm Barns Development, Unit 1, Preston Deanery, Northamptonshire NN6 7BW, United Kingdom','United Kingdom'],
['Ho Chi Minh City Etown 6 office','office','Etown 6 Tower, Floors 10-11, 364 Cong Hoa Street, Tan Binh Ward, Ho Chi Minh City 700000, Vietnam','Vietnam'],
['Ho Chi Minh City UOA Tower office','office','UOA Tower, Floors 12-13, No. 6 Tan Trao Street, Tan My Ward, Ho Chi Minh City 700000, Vietnam','Vietnam'],
['Da Nang office','office','ICT1 Tower, Da Nang Software Park 2, Floor 7, Nhu Nguyet Street, Hai Chau Ward, Da Nang City 550000, Vietnam','Vietnam']
];
if(rows.length!==55)throw new Error(`Expected 55 Marvell locations, got ${rows.length}`);
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='marvell').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='marvell');
rows.forEach(([locationName,locationType,address,country,customUrl],index)=>{const prior=old.get(norm(address));data.locations.push({id:`marvell-${String(index+1).padStart(3,'0')}`,companyId:'marvell',companyName:'Marvell',locationName,locationType,address,country,latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',sourceUrl:customUrl??directoryUrl,sourceType:customUrl?'regulatory_filing':'official_company_directory',verifiedOn:'2026-08-25',researchNote:index===0?'Complete import of the 54 separately addressed corporate offices in Marvell’s current official global directory, plus the distinct Wilmington corporate headquarters disclosed in its current Form 10-K. Distributor and representative listings are excluded.':undefined});});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
