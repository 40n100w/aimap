import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-nsig-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const contact='https://www.nsig.com/en/contact';
const filing='https://static.sse.com.cn/stock/disclosure/announcement/c/202506/688126_20250626_OSBF.pdf';
const rows=[
  ['National Silicon Industry Group Office','1000 Yunshui Road, Nicheng, Pudong New Area, Shanghai 201306, China','China','headquarters',filing],
  ['Zing Semiconductor','1000 Yunshui Road, Nicheng, Pudong New Area, Shanghai 201306, China','China','manufacturing',contact],
  ['Okmetic Vantaa','Piitie 2, 01510 Vantaa, Finland','Finland','manufacturing',contact],
  ['Shanghai Simgui Technology','200 Xinlai Road, Jiading District, Shanghai, China','China','manufacturing',contact]
];
const previous=new Map(data.locations.filter(x=>x.companyId==='nsig').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='nsig');
data.locations.push(...rows.map(([name,address,country,type,sourceUrl],index)=>{const old=previous.get(address);return{
  id:`nsig-${String(index+1).padStart(3,'0')}`, companyId:'nsig', companyName:'National Silicon Industry Group',
  locationName:name, locationType:type, address, country,
  latitude:old?.latitude??null, longitude:old?.longitude??null,
  coordinateAccuracy:old?.coordinateAccuracy??'unlocated', status:old?.status??'address_verified',
  sourceUrl, sourceType:index===0?'regulatory_filing':'company_locations_page', verifiedOn:'2026-08-24'
};}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
