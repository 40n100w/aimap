import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-amkor-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://amkor.com/contact-us/';
const rows=[
 ['Corporate Headquarters','2045 East Innovation Circle, Tempe, AZ 85284, United States','United States','headquarters'],
 ['San Jose','25 Metro Drive, Suite 700, San Jose, CA 95110, United States','United States','office'],
 ['San Diego','5355 Mira Sorrento Place, Suite 725, San Diego, CA 92121, United States','United States','office'],
 ['Austin','8140 North Mopac Expressway, Building 3, Suite 240, Austin, TX 78759, United States','United States','office'],
 ['Munich','Werner-Eckert-Strasse 14, 81829 Munich, Germany','Germany','office'],
 ['Shanghai Support','Building E, Chamtime Square, 2889 Jinke Road, Room 504, Pudong, Shanghai 201203, China','China','office'],
 ['Zhubei Support','3F-1, No. 1, Taiyuan 2nd Street, Zhubei City, Hsinchu County 302, Taiwan','Taiwan','office'],
 ['Tokyo Business Operations','14F, Shibakoen Front Tower, 2-6-3 Shibakoen, Minato-ku, Tokyo 105-0011, Japan','Japan','office'],
 ['Tokyo Customer Support','12F, T-LITE, 2-4-7 Toranomon, Minato-ku, Tokyo 105-0001, Japan','Japan','office'],
 ['Incheon Songdo K5 and Support','150 Songdomirae-ro, Yeonsu-gu, Incheon 21991, South Korea','South Korea','factory'],
 ['Singapore','491B River Valley Road, #12-03 Valley Point Office Tower, Singapore 248373','Singapore','office'],
 ['Incheon K3','110 Anaji-ro, Gyeyang-gu, Incheon 21107, South Korea','South Korea','factory'],
 ['Gwangju K4','100 Amkor-ro, Buk-gu, Gwangju 61006, South Korea','South Korea','factory'],
 ['Philippines P1','KM 22 East Service Road, Special Economic Zone, Cupang, Muntinlupa City 1771, Philippines','Philippines','factory'],
 ['Philippines P3/P4','119 North Science Avenue, Laguna Technopark, Biñan, Laguna 4024, Philippines','Philippines','factory'],
 ['Shanghai C3','111 Yinglun Road, Waigaoqiao Free Trade Zone, Pudong, Shanghai 200131, China','China','factory'],
 ['Taiwan T1','1F, No. 1 Kao-Ping Section, Chung-Feng Road, Longtan District, Taoyuan City 325, Taiwan','Taiwan','factory'],
 ['Taiwan T3','No. 11 Guangfu Road, Hsinchu Industrial Park, Hukou Township, Hsinchu County 303, Taiwan','Taiwan','factory'],
 ['Taiwan T6','No. 333 Longyuan 1st Road, Longtan District, Taoyuan City 325, Taiwan','Taiwan','factory'],
 ['Malaysia M1','15KM Jalan Klang-Banting, Kawasan Perindustrian Bebas Telok Panglima Garang, Kuala Langat, Selangor 42500, Malaysia','Malaysia','factory'],
 ['Portugal E1','Avenida Primeiro de Maio 801, 4485-629 Vila do Conde, Portugal','Portugal','factory'],
 ['Japan J7 Hakodate','145 Nakajima, Nanae-cho, Kameda-gun, Hokkaido 041-1196, Japan','Japan','factory'],
 ['Japan J6 Fukui','1 Higashijima, Omaki, Harue-cho, Sakai-shi, Fukui 919-0402, Japan','Japan','factory'],
 ['Japan J4 Fukuoka','476-1 Kamiokuma, Miyawaka-shi, Fukuoka 823-0005, Japan','Japan','factory'],
 ['Japan J4 Kitakami','6-6 Kita-Kogyo-Danchi, Kitakami-shi, Iwate 024-8650, Japan','Japan','factory'],
 ['Japan J3 Kumamoto','272-10 Takaono, Ozu-machi, Kikuchi-gun, Kumamoto 869-1232, Japan','Japan','factory'],
 ['Japan J5 Oita','3500 Matsuoka, Oita-shi, Oita 870-0197, Japan','Japan','factory'],
 ['Japan J5 Usuki','1913-2 Takegashita, Fukura, Usuki-shi, Oita 875-0053, Japan','Japan','factory'],
 ['Vietnam','Lot CN5B, Yen Phong II-C Industrial Park, Yen Phong Commune, Bac Ninh Province, Vietnam','Vietnam','factory']
];
const previous=new Map(data.locations.filter(x=>x.companyId==='amkor').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='amkor');
data.locations.push(...rows.map(([name,address,country,locationType],index)=>{
 const old=previous.get(address);
 return {id:`amkor-${String(index+1).padStart(3,'0')}`,companyId:'amkor',companyName:'Amkor Technology',locationName:`Amkor ${name}`,locationType,address,country,latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl,sourceType:'company_locations_page',verifiedOn:'2026-08-24'};
}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
