import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-cambricon-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.cambricon.com/index.php?a=lists&c=index&catid=7+nav1&m=content';
const rows=[
['Beijing headquarters','headquarters','北京市海淀区知春路7号致真大厦D座5、11、13、16、21层, China','China'],
['Shanghai Zhangjiang office','office','上海市浦东新区祖冲之路2290弄1号1101、1103-1110、1801、1804-1806、2102B, China','China'],
['Shanghai Lingang office','office','上海市浦东新区临港新城镇海港大道1555号901-903, China','China'],
['Shenzhen office','office','广东省深圳市南山区南头街道桃园路8号田厦金牛广场A座3404-3410、3506-3510, China','China'],
['Hefei office','office','安徽省合肥市高新区习友路3333号中国声谷A1栋22层, China','China'],
['Xi’an Fengyue Yunchuang office','office','陕西省西安市沣东新城镐京大道与汉池一路交界口沣悦云创中心3号写字楼26层, China','China'],
['Xi’an New Chang’an Plaza office','office','陕西省西安市雁塔区沣惠南路34号新长安广场二期C座2401-2402, China','China'],
['Kunshan office','office','江苏省昆山市玉山镇萧林路2026号鑫欣科创综合体C栋701单元, China','China'],
['Nanjing office','office','江苏省南京市江宁区创研路266号A5栋606、607, China','China']
];
const norm=s=>s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='cambricon').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='cambricon');
rows.forEach(([locationName,locationType,address,country],index)=>{const prior=old.get(norm(address));data.locations.push({id:`cambricon-${String(index+1).padStart(3,'0')}`,companyId:'cambricon',companyName:'Cambricon',locationName,locationType,address,country,latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',sourceUrl,sourceType:'official_company_directory',verifiedOn:'2026-08-25',researchNote:index===0?'Complete import of all nine separately addressed offices in Cambricon’s current official company-address directory. Floor and unit details are retained; no inferred or city-only sites are included.':undefined});});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
