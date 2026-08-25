import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-intel-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const directory='https://www.intel.com/content/www/us/en/support/campus-locations.html';
const bcr='https://www.intel.in/content/dam/www/public/us/en/documents/corporate-information/intel-eea-bcrs.pdf';
const rows=[
['Santa Clara corporate headquarters','headquarters','2200 Mission College Boulevard, Santa Clara, CA 95054, United States','United States',directory],
['Villach office','office','Europastrasse 8, Building T02, 9524 Villach, Austria','Austria',bcr],
['Kontich office','office','Kings Square, Veldkant 31, 2550 Kontich, Belgium','Belgium',bcr],
['Prague office','office','I. P. Pavlova 1789/5, 120 00 Prague 2, Czech Republic','Czech Republic',bcr],
['Herlev office','office','Horkaer 12A, 2730 Herlev, Denmark','Denmark',bcr],
['Espoo office','office','Westendinkatu 7, 02160 Espoo, Finland','Finland',bcr],
['Meudon office','office','Les Montalets, 2 Rue de Paris, 92196 Meudon Cedex, France','France',bcr],
['Neubiberg office','office','Am Campeon 10-12, 85579 Neubiberg, Germany','Germany',bcr],
['Assago office','office','Milanofiori Palazzo E/4, 20090 Assago, Milan, Italy','Italy',bcr],
['Vilnius office','office','J. Jasinskio 16B, LT-03163 Vilnius, Lithuania','Lithuania',bcr],
['Eindhoven office','office','High Tech Campus 83, 5656 AG Eindhoven, Netherlands','Netherlands',bcr],
['Schiphol-Rijk office','office','Capronilaan 37, 1119 NG Schiphol-Rijk, Netherlands','Netherlands',bcr],
['Gdansk office','research','173 Slowackiego Street, 80-298 Gdansk, Poland','Poland',bcr],
['Lisbon office','office','Rua Castilho 44, 8th Floor, 1250-071 Lisbon, Portugal','Portugal',bcr],
['Timisoara office','research','United Business Center 1, 2A Piata Consiliul Europei, 7th-8th Floors, Timisoara, Romania','Romania',bcr],
['Madrid office','office','Torre Picasso, Plaza Pablo Ruiz Picasso 1, 25th Floor, 28020 Madrid, Spain','Spain',bcr],
['Kista office','office','Isafjordsgatan 30B, 16440 Kista, Sweden','Sweden',bcr],
['Algiers office','office','Algerian Business Center, Pins Maritimes, 11th Floor, El Mohammadia, Algiers, Algeria','Algeria',bcr],
['Buenos Aires office','office','Juan Diaz de Solis 1330, 5th Floor, Vicente Lopez, Buenos Aires, Argentina','Argentina',bcr],
['Sydney office','office','Governor Phillip Tower, 1 Farrer Place, Level 61, Sydney NSW 2000, Australia','Australia',bcr],
['Sao Paulo office','office','Avenida Doutor Chucri Zaidan 940, 9th-11th Floors, Vila Cordeiro, Sao Paulo 04583-904, Brazil','Brazil',bcr],
['Vancouver office','office','Park Place, 666 Burrard Street, Suite 1700, Vancouver, BC V6C 2X8, Canada','Canada',bcr],
['Santiago office','office','Avenida Providencia 1760, 19th Floor, Providencia, Santiago, Chile','Chile',bcr],
['Shanghai Zizhu R&D office','research','880 Zixing Road, Zizhu Science Park, Shanghai 201109, China','China',bcr],
['Shanghai Ziri office','office','751 Ziri Road, 2nd Floor, Zizhu Science Park, Shanghai 200241, China','China',bcr],
['Beijing research center','research','Raycom Infotech Park A, 2 Kexueyuan South Road, 8th Floor, Haidian District, Beijing 100190, China','China',bcr],
['Shanghai Zhangjiang office','research','Building 5, Phase IV Incubation Building, 14-16 Lane 647 Songtao Road, Zhangjiang Hi-Tech Park, Pudong, Shanghai, China','China',bcr],
['Xi’an office','research','Xi’an Ascendas Innovation Hub, 38 Gaoxin 6th Road, Building A, Room 607, Xi’an, Shaanxi 710075, China','China',bcr],
['Shanghai Waigaoqiao office','office','2 Middle Tainan Road, 3rd Floor, Room 317, Waigaoqiao Free Trade Zone, Pudong, Shanghai 200131, China','China',bcr],
['Bogota office','office','Carrera 7 No. 71-21, Torre B, Office 603, Bogota, Colombia','Colombia',bcr],
['Escazu office','office','Avenida Escazu, Torre Lexus, 4th Floor, Escazu, San Jose, Costa Rica','Costa Rica',bcr],
['New Cairo office','office','Administrative Building 47, Office 444, 4th Floor, Al Tasseein North Street, Fifth Settlement, New Cairo, Egypt','Egypt',bcr],
['Hong Kong office','office','Central Plaza, 18 Harbour Road, 69th Floor, Wan Chai, Hong Kong','Hong Kong',bcr],
['Bengaluru office','research','23-56P, Devarabeesanahalli, Varthur Hobli, Outer Ring Road, Bengaluru, Karnataka 560103, India','India',bcr],
['Jakarta office','office','Menara BCA, Jalan M. H. Thamrin No. 1, 45th and 50th Floors, Menteng, Central Jakarta 10310, Indonesia','Indonesia',bcr],
['Haifa office','research','9 Andrei Sakharov Street, Haifa 3508409, Israel','Israel',bcr],
['Petah Tikva office','research','94 Em HaMoshavot Road, Petah Tikva, Israel','Israel',bcr],
['Tokyo office','office','Kokusai Building, 3-1-1 Marunouchi, 5th Floor, Chiyoda-ku, Tokyo 100-0005, Japan','Japan',bcr],
['Almaty office','office','28V Timiryazev Street, 9th Floor, Bostandyk District, Almaty 050040, Kazakhstan','Kazakhstan',bcr],
['Nairobi office','office','Cavendish Block, Riverside Drive, 4th Floor, Office 2, Nairobi, Kenya','Kenya',bcr],
['George Town office','office','2 Lebuh Pantai, 1st Floor, George Town, Penang 10300, Malaysia','Malaysia',bcr],
['Mexico City office','office','Torre Esmeralda II, Boulevard Manuel Avila Camacho 36, 7th Floor, Lomas de Chapultepec, Mexico City 11000, Mexico','Mexico',bcr],
['Lagos office','office','Mulliner Towers, 39 Alfred Rewane Road, 3rd Floor, Suite 312, Ikoyi, Lagos, Nigeria','Nigeria',bcr],
['Lima office','office','Avenida Jose Larco 1301, Interior P-20, Lima, Peru','Peru',bcr],
['Taguig office','office','Net Cube Center, 3rd Avenue corner 30th Street, 7th Floor, Unit 702, Bonifacio Global City, Taguig 1634, Philippines','Philippines',bcr],
['Seoul office','office','82 Uisadang-daero, 5th Floor, Yeongdeungpo-gu, Seoul 07321, South Korea','South Korea','https://www.intel.com/content/www/us/en/privacy/intel-privacy-notice.html'],
['Riyadh office','office','Tatweer Towers, Tower 1 North, King Fahd Road at King Abdullah Road, Level 4, Riyadh 11312, Saudi Arabia','Saudi Arabia',bcr],
['Singapore office','office','80 Robinson Road, #02-00, Singapore 068898','Singapore',bcr],
['Johannesburg office','office','Design Quarter, Leslie Road, Offices 263-265, Fourways, Johannesburg, Gauteng 2191, South Africa','South Africa',bcr],
['Taipei office','office','369 Section 7 Zhongxiao East Road, 20th Floor, Nangang District, Taipei, Taiwan','Taiwan',bcr],
['Bangkok office','office','M Thai Tower, All Seasons Place, 87 Wireless Road, 23rd Floor, Rooms 2316, 2318 and 2320, Pathum Wan, Bangkok 10330, Thailand','Thailand',bcr],
['Istanbul office','office','Akmerkez B3 Tower, Nispetiye Avenue, 8th Floor, Etiler, Besiktas 34337, Istanbul, Turkey','Turkey',bcr],
['Dubai office','office','Building 5, 2nd Floor, Dubai Internet City, Dubai, United Arab Emirates','United Arab Emirates',bcr],
['Swindon office','office','Pipers Way, Swindon, Wiltshire SN3 1RJ, United Kingdom','United Kingdom',bcr],
['Salford R&D office','research','2 New Bailey, 6 Stanley Street, Salford, Greater Manchester M3 5GS, United Kingdom','United Kingdom',bcr],
['Ho Chi Minh City office','office','Etown Central, 11 Doan Van Bo Street, Ward 13, District 4, Ho Chi Minh City, Vietnam','Vietnam',bcr]
];
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='intel').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='intel');
rows.forEach(([locationName,locationType,address,country,sourceUrl],index)=>{const prior=old.get(norm(address));data.locations.push({id:`intel-${String(index+1).padStart(3,'0')}`,companyId:'intel',companyName:'Intel',locationName,locationType,address,country,latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',sourceUrl,sourceType:index===0?'official_company_directory':'official_company_legal_document',verifiedOn:'2026-08-25',researchNote:index===0?'Intel’s public campus selector lists operations in 39 countries. This corporate-office batch reconciles physical office and R&D addresses from Intel’s current Corporate Privacy Rules appendix, consolidates co-located legal entities, and excludes registered-agent, c/o and mail-only addresses. Manufacturing campuses are represented under the separate Intel Foundry record to prevent duplicate markers. Additional city-level employment sites without exact public addresses remain for a later pass.':undefined});});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
