import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-jeol-locations.mjs <locations JSON>');

const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const overseas='https://www.jeol.com/corporate/outline/overseas_relative/';
const domestic='https://www.jeol.co.jp/corporate/outline/branches.html';
const rows=[
  ['Akishima Headquarters and Works','3-1-2 Musashino, Akishima, Tokyo 196-8558, Japan','Japan','headquarters',domestic],
  ['Akishima Building 6','1156 Nakagamicho, Akishima, Tokyo 196-0022, Japan','Japan','manufacturing',domestic],
  ['Akishima Second Works','2-6-38 Musashino, Akishima, Tokyo 196-0021, Japan','Japan','manufacturing',domestic],
  ['Musashimurayama Works','2-11-1 Inadaira, Musashimurayama, Tokyo 208-0023, Japan','Japan','manufacturing',domestic],
  ['Tokyo Office','Taisei Otemachi Building 13F, 2-1-1 Otemachi, Chiyoda-ku, Tokyo 100-0004, Japan','Japan','office',domestic],
  ['Tokyo Branch','Taisei Otemachi Building 13F, 2-1-1 Otemachi, Chiyoda-ku, Tokyo 100-0004, Japan','Japan','office',domestic],
  ['Tokyo Second Office','Shinsuzuharu Building, 2-8-3 Akebonocho, Tachikawa, Tokyo 190-0012, Japan','Japan','office',domestic],
  ['Yokohama Office','Shin-Yokohama Chitose Kanko Building 6F, 3-6-4 Shin-Yokohama, Kohoku-ku, Yokohama, Kanagawa 222-0033, Japan','Japan','office',domestic],
  ['Sapporo Branch','Norte Plaza 5F, Kita 9-jo Nishi 3-19, Kita-ku, Sapporo, Hokkaido 060-0809, Japan','Japan','office',domestic],
  ['Sendai Branch','Sendai Mitsubishi Building 6F, 2-2-1 Chuo, Aoba-ku, Sendai, Miyagi 980-0021, Japan','Japan','office',domestic],
  ['Tsukuba Branch','18-1 Higashiarai, Tsukuba, Ibaraki 305-0033, Japan','Japan','office',domestic],
  ['Nagoya Branch','Nagoya International Center Building 14F, 1-47-1 Nagono, Nakamura-ku, Nagoya, Aichi 450-0001, Japan','Japan','office',domestic],
  ['Osaka Branch','Nissei Shin-Osaka South Exit Building 11F, 5-14-5 Nishinakajima, Yodogawa-ku, Osaka 532-0011, Japan','Japan','office',domestic],
  ['West Japan Solution Center','Nissei Shin-Osaka South Exit Building 1F, 5-14-5 Nishinakajima, Yodogawa-ku, Osaka 532-0011, Japan','Japan','office',domestic],
  ['Hiroshima Branch','Hiroshima NS Building 5F, 10-6 Hashimotocho, Naka-ku, Hiroshima 730-0015, Japan','Japan','office',domestic],
  ['Takamatsu Branch','Pacific City Takamatsu 5F, 1-1-12 Kotobukicho, Takamatsu, Kagawa 760-0023, Japan','Japan','office',domestic],
  ['Fukuoka Branch','Fukuoka Asahi Building 5F, 2-1-1 Hakataekimae, Hakata-ku, Fukuoka 812-0011, Japan','Japan','office',domestic],
  ['JEOL Technoservice','3-1-2 Musashino, Akishima, Tokyo 196-8558, Japan','Japan','field_support',domestic],
  ['JEOL Yamagata','1655 Daibutsu, Yamaguchi, Tendo, Yamagata 994-0101, Japan','Japan','manufacturing',domestic],
  ['JEOL Instruments','2-8-11 Musashino, Akishima, Tokyo 196-0021, Japan','Japan','manufacturing',domestic],
  ['Japan Superconductor Technology','1-5-5 Takatsukadai, Nishi-ku, Kobe, Hyogo 651-2271, Japan','Japan','manufacturing',domestic],
  ['São Paulo — JEOL Brasil','Av. Jabaquara 2958, 5th Floor, Suite 52, São Paulo, SP 04046-500, Brazil','Brazil','office',overseas],
  ['St-Hubert — JEOL Canada','3275 1ere Rue, Local 8, St-Hubert, QC J3Y 8Y6, Canada','Canada','office',overseas],
  ['Mexico City — JEOL de Mexico','Arkansas 11, Piso 2, Colonia Nápoles, Benito Juárez, Mexico City 03810, Mexico','Mexico','office',overseas],
  ['Peabody — JEOL USA','11 Dearborn Road, Peabody, MA 01960, United States','United States','office',overseas],
  ['Pleasanton — Integrated Dynamic Electron Solutions','4670 Willow Road, Suite 100, Pleasanton, CA 94588, United States','United States','office',overseas],
  ['Croissy-sur-Seine — JEOL Holding Europe','Espace Claude Monet, 1 Allée de Giverny, 78290 Croissy-sur-Seine, France','France','office',overseas],
  ['Croissy-sur-Seine — JEOL Europe','Espace Claude Monet, 1 Allée de Giverny, 78290 Croissy-sur-Seine, France','France','office',overseas],
  ['Freising — JEOL Germany','Gute Änger 30, 85356 Freising, Germany','Germany','office',overseas],
  ['Welwyn Garden City — JEOL UK','Silver Court, Watchmead, Welwyn Garden City, Hertfordshire AL7 1LT, United Kingdom','United Kingdom','office',overseas],
  ['Basiglio — JEOL Italia','Palazzo Pacinotti, Milano 3 City, Via Ludovico il Moro 6/A, 20079 Basiglio, Italy','Italy','office',overseas],
  ['Nieuw-Vennep — JEOL Europe BV','Lireweg 4, 2153 PH Nieuw-Vennep, Netherlands','Netherlands','office',overseas],
  ['Moscow — JEOL Rus','Office 351, Floor 3, 23 Novoslobodskaya Street, Moscow 127055, Russia','Russia','office',overseas],
  ['Sollentuna — JEOL Nordic','Hammarbacken 6A, 191 27 Sollentuna, Sweden','Sweden','office',overseas],
  ['Frenchs Forest — JEOL Australasia','Suite 1, Level 2, 18 Aquatic Drive, Frenchs Forest, NSW 2086, Australia','Australia','office',overseas],
  ['Beijing','Zhongkeziyuan Building South Tower 2F, 6 Zhongguancun Nansanjie Street, Haidian District, Beijing 100190, China','China','office',overseas],
  ['Shanghai Branch','Room 2F-BC, Building A, Bio Hill, 207 Songhong Road, Changning District, Shanghai 200335, China','China','office',overseas],
  ['JEOL Shanghai Semiconductors','Building 3, 589 Quwu Road, Shanghai 200241, China','China','manufacturing',overseas],
  ['New Delhi — JEOL India','Unit 305, 3rd Floor, ABW Elegance Tower, Jasola District Centre, New Delhi 110025, India','India','office',overseas],
  ['Seoul — JEOL Korea','AJ Building 6F, 9 Jeongui-ro 8-gil, Songpa-gu, Seoul 05836, South Korea','South Korea','office',overseas],
  ['Hwaseong — JEOL Semiconductors Korea','Keumkang Penterium IT Tower 1102-1105, 557 Dongtangiheung-ro, Hwaseong-si, Gyeonggi-do 18469, South Korea','South Korea','office',overseas],
  ['Petaling Jaya — JEOL Malaysia','Unit 508, Block A, Level 5, Kelana Business Center, 97 Jalan SS7/2, Kelana Jaya, Petaling Jaya 47301, Malaysia','Malaysia','office',overseas],
  ['Singapore — JEOL Asia','Corporation Place, 2 Corporation Road, #01-12, Singapore 618494','Singapore','office',overseas],
  ['Zhubei — JEOL Taiwan Semiconductors','198 Xingong 2nd Road, Zhubei City, Hsinchu County 302004, Taiwan','Taiwan','office',overseas],
  ['Zhubei — JEOL Taiwan Analysis Solutions','198 Xingong 2nd Road, Zhubei City, Hsinchu County 302004, Taiwan','Taiwan','office',overseas],
  ['Dubai — JEOL Gulf','West Wing 5WA, Unit G12, Dubai Airport Free Zone, Dubai, United Arab Emirates','United Arab Emirates','office',overseas],
  ['Bangkok — JEOL Asia Thailand','118 Block 28X Building, 4th Floor, Room X401, Soi Chula 5, Wang Mai, Pathum Wan, Bangkok 10330, Thailand','Thailand','office',overseas]
];

const previous=new Map(data.locations.filter(x=>x.companyId==='jeol').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='jeol');
data.locations.push(...rows.map(([name,address,country,type,sourceUrl],index)=>{
  const old=previous.get(address);
  return {
    id:`jeol-${String(index+1).padStart(3,'0')}`,
    companyId:'jeol', companyName:'JEOL', locationName:`JEOL ${name}`, locationType:type,
    address, country,
    latitude:old?.latitude??null, longitude:old?.longitude??null,
    coordinateAccuracy:old?.coordinateAccuracy??'unlocated',
    status:old?.status??'address_verified', sourceUrl,
    sourceType:'company_locations_page', verifiedOn:'2026-08-24'
  };
}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
