import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-empyrean-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.empyrean.com.cn/company/contact-us.html';
const rows=[
  ['Beijing headquarters','headquarters','2F, Tower A, Wangjing Science and Technology Park, 2 Lize Middle 2nd Road, Chaoyang District, Beijing, China','China'],
  ['Nanjing office','office','8F, Tower A, Chuangzhi Building, 17 Xinghuo Road, Jiangbei New Area, Nanjing, Jiangsu, China','China'],
  ['Chengdu office','office','518 Guoxin Avenue, Shuangliu District, Chengdu, Sichuan, China','China'],
  ['Shenzhen office','office','10F, Building E, Shenzhen-Hong Kong International Science and Technology Park, 3 Binglang Road, Futian Free Trade Zone, Shenzhen, Guangdong, China','China'],
  ['Shanghai Lingang office','office','1F, Building 9, Lane 88, Haiyang 2nd Road, Lingang New Area, Shanghai, China','China'],
  ['Shanghai Zhangjiang office','office','10F, Building C, 1867 Zhongke Road, Pudong New Area, Shanghai, China','China'],
  ['Beijing Industrial Software Research Institute','research','Room 1201, 12F, Tower A, Building 1, 19 Ronghua Middle Road, Beijing Economic-Technological Development Area, Beijing, China','China'],
  ['Xi’an office','office','8F, Building G1, Huanpu Science and Technology Park, 211 Tiangu 8th Road, Xi’an High-Tech Zone, Shaanxi, China','China']
];
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='empyrean').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='empyrean');
rows.forEach(([locationName,locationType,address,country],index)=>{const prior=old.get(norm(address));data.locations.push({
  id:`empyrean-${String(index+1).padStart(3,'0')}`,companyId:'empyrean',companyName:'Empyrean Technology',locationName,locationType,address,country,
  latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',
  sourceUrl,sourceType:'official_company_directory',verifiedOn:'2026-08-24',
  researchNote:index===0?'The current official profile also names subsidiaries or branches in Hong Kong, Tianjin, Wuhan, Chongqing, Xiamen, and Suzhou without publishing their street addresses on the contact directory; those city-only sites are withheld.':undefined
});});
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
