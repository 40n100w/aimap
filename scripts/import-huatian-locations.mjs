import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-huatian-locations.mjs <locations JSON>');

const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const annual='https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80050100&gather=1&id=12045582';
const huatianProfile='https://www.ht-tech.com/html/qyjs/index.html';
const unisemContact='https://www.unisemgroup.com/company-info/contact/';
const rows=[
  ['Xi’an headquarters and production base','headquarters','105 Fengcheng 5th Road, Xi’an Economic and Technological Development Zone, Xi’an, Shaanxi 710018, China','China','https://www.ht-tech.com/','official_company_directory'],
  ['Tianshui production and corporate office','manufacturing','360 Qinzhou Avenue, Tianshuijun Subdistrict, Qinzhou District, Tianshui, Gansu 741001, China','China',annual,'official_company_filing'],
  ['Kunshan production base','manufacturing','112 Longteng Road, Kunshan Economic and Technological Development Zone, Kunshan, Jiangsu, China','China','https://epaper.stcn.com/att/202508/02/ZQ02B067-CR_eBook.pdf','official_company_filing'],
  ['Nanjing production base','manufacturing','16 Dingxiang Road, Qiaolin Subdistrict, Pukou District, Nanjing, Jiangsu, China','China','https://sthjj.nanjing.gov.cn/ztzl/xzxkhxzzfxxgs/pcjxxgk/pk/hpnpxmgs_68867/202602/t20260206_5788587.html','official_government_record'],
  ['Shanghai production base','manufacturing','351 Guoshoujing Road, Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai 201203, China','China',annual,'official_company_filing'],
  ['FlipChip International Phoenix production base','manufacturing','3701 E University Drive, Phoenix, AZ 85034, United States','United States','https://www.phoenix.gov/content/dam/phoenix/waterservicessite/documents/2017_IPP_Annual_Report_Final.pdf','official_government_record'],
  ['Unisem Ipoh production base','manufacturing','1 Persiaran Pulai Jaya 9, Kawasan Perindustrian Pulai Jaya, Ipoh, Perak 31300, Malaysia','Malaysia','https://www.unisemgroup.com/wp-content/uploads/2026/05/ESD_ESD0081_USP.pdf','official_company_certification'],
  ['Unisem Advanced Technologies Ipoh production base','manufacturing','1A Persiaran Pulai Jaya 9, Kawasan Perindustrian Pulai Jaya, Ipoh, Perak 31300, Malaysia','Malaysia','https://www.unisemgroup.com/wp-content/uploads/2026/05/ESD_ESD0081_USP.pdf','official_company_certification'],
  ['Unisem Gopeng production base','manufacturing','Lot 302285, Jalan Industri 1/1, Kawasan Perindustrian Gopeng, Gopeng, Perak 31600, Malaysia','Malaysia','https://www.unisemgroup.com/wp-content/uploads/2026/05/ESD_ESD0081_USP.pdf','official_company_certification'],
  ['Unisem Chengdu production base','manufacturing','8-2 Kexin Road, West Park of Chengdu Hi-Tech Zone, Chengdu, Sichuan 611731, China','China',unisemContact,'official_company_directory'],
  ['Unisem Singapore office','office','37 Jalan Pemimpin, #04-14, Singapore 577177','Singapore','https://www.unisemgroup.com/wp-content/uploads/2024/12/2025-WW-Calendar.pdf','official_company_directory'],
  ['Unisem Kuala Lumpur investor office','office','UBN Tower, 10 Jalan P. Ramlee, 9th Floor, Kuala Lumpur 50250, Malaysia','Malaysia','https://www.unisemgroup.com/investor-relations/ir-contact/','official_company_directory']
];

const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='huatian').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='huatian');
rows.forEach(([locationName,locationType,address,country,sourceUrl,sourceType],index)=>{
  const prior=old.get(norm(address));
  data.locations.push({
    id:`huatian-${String(index+1).padStart(3,'0')}`,
    companyId:'huatian',
    companyName:'Huatian Technology',
    locationName,
    locationType,
    address,
    country,
    latitude:prior?.latitude??null,
    longitude:prior?.longitude??null,
    coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',
    status:prior?.status??'address_verified',
    sourceUrl,
    sourceType,
    verifiedOn:'2026-08-25',
    researchNote:index===0?`Huatian’s current official profile identifies manufacturing in Xi’an, Tianshui, Kunshan, Nanjing, Shanghai and the controlled Unisem network. Current exact-address records were reconciled against the 2025 annual filing and Unisem’s official directory/certification. City-only Huatian sales points in Silicon Valley, Korea and Japan, plus Unisem phone-only points in California, Texas and Taiwan, are withheld. Third-party regional representatives are excluded. PT Unisem Batam was liquidated in 2025 and is excluded. Profile scope: ${huatianProfile}`:undefined
  });
});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
