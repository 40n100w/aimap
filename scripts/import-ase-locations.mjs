import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-ase-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const manufacturing='https://ase.aseglobal.com/about-ase/manufacturing-facilities/';
const sales='https://ase.aseglobal.com/about-ase/contact/global-sales/';
const rows=[
 ['Kaohsiung','26 Jing 3rd Road, Nanzi District, Kaohsiung 811, Taiwan','Taiwan','factory',manufacturing],
 ['ChungLi','No. 550, Section 1, Chung-Hwa Road, Zhongli District, Taoyuan, Taiwan','Taiwan','factory',manufacturing],
 ['Shanghai Material','No. 2300 Jin Ke Road, Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai 201203, China','China','factory',manufacturing],
 ['Wuxi','Building 29-B, Block 52, Wuxi High-Tech Industrial Development Zone, Wuxi, Jiangsu 214028, China','China','factory',manufacturing],
 ['Korea Paju','76 Saneopdanji-gil, Paju-si, Gyeonggi-do 10878, South Korea','South Korea','factory',manufacturing],
 ['Cheonan','56 Samseong 4-gil, Mokcheon-eup, Dongnam-gu, Cheonan-si, Chungcheongnam-do, South Korea','South Korea','factory',manufacturing],
 ['Japan Takahata','1863 Ooazairyuda, Takahata-machi, Higashiokitama-gun, Yamagata 992-0324, Japan','Japan','factory',manufacturing],
 ['Malaysia','Plot 20, Phase IV, Free Industrial Zone, Bayan Lepas, Penang 11900, Malaysia','Malaysia','factory',manufacturing],
 ['Singapore Manufacturing','2 Woodlands Loop, Singapore 738074','Singapore','factory',manufacturing],
 ['Philippines','L1B4 Gateway Business Park, Javalera, General Trias, Cavite 4107, Philippines','Philippines','factory',manufacturing],
 ['ISE Labs Fremont','46800 Bayside Parkway, Fremont, CA 94538, United States','United States','laboratory',manufacturing],
 ['Hsinchu Sales','14F, No. 120, Section 2, Gongdaowu Road, Hsinchu City 300, Taiwan','Taiwan','office',sales],
 ['Yokohama Sales','10F, Sumitomofudosan Building, 2-5-5 Shin-Yokohama, Kohoku-ku, Yokohama 222-0033, Japan','Japan','office',sales],
 ['Korea Sales','Room 706, First Korea, 58 Dongtancheomdansaneop 1-ro, Hwaseong-si, Gyeonggi-do, South Korea','South Korea','office',sales],
 ['Singapore Sales','3 Fusionopolis Link, #02-10 Nexus@One-North South Tower, Singapore 138543','Singapore','office',sales],
 ['Northern California','1255 East Arques Avenue, Sunnyvale, CA 94085, United States','United States','office',sales],
 ['Irvine','111 Pacifica, Suite 240, Irvine, CA 92618, United States','United States','office',sales],
 ['San Diego','4370 La Jolla Village Drive, Suite 303, San Diego, CA 92122, United States','United States','office',sales],
 ['Austin','3755 South Capital of Texas Highway, Suite 190, Austin, TX 78704, United States','United States','office',sales],
 ['Dallas','14785 Preston Road, Suite 460, Dallas, TX 75254, United States','United States','office',sales],
 ['Boston','400 Trade Center, Suite 4950, Woburn, MA 01801, United States','United States','office',sales],
 ['Tempe','7855 South River Parkway, Suite 212, Tempe, AZ 85284, United States','United States','office',sales],
 ['Brussels','Waterloo Office Park, Drève Richelle 161M, Box 23, 1410 Waterloo, Belgium','Belgium','office',sales],
 ['Munich','Weihenstephaner Strasse 12, 81673 Munich, Germany','Germany','office',sales]
];
const prior=new Map(data.locations.filter(x=>x.companyId==='ase').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='ase');
data.locations.push(...rows.map(([name,address,country,locationType,sourceUrl],i)=>{
 const old=prior.get(address);
 return {id:`ase-${String(i+1).padStart(3,'0')}`,companyId:'ase',companyName:'ASE Technology',locationName:`ASE ${name}`,locationType,address,country,latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl,sourceType:'company_locations_page',verifiedOn:'2026-08-24'};
}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
