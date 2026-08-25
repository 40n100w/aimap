import {readFileSync} from 'node:fs';

const [htmlPath,datasetPath]=process.argv.slice(2);
if(!htmlPath||!datasetPath)throw new Error('Usage: node scripts/import-synopsys-locations.mjs <official office-locations HTML> <locations JSON>');

const html=readFileSync(htmlPath,'utf8');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.synopsys.com/company/contact-synopsys/office-locations.html';
const countryHeadings=new Set(['Canada','United States','Armenia','Belgium','Denmark','Finland','France','Germany','Ireland','Israel','Italy','Netherlands','Poland','Portugal','Romania','Sweden','Switzerland','United Kingdom','China','India','Malaysia','Singapore','Sri Lanka','South Korea','Taiwan','Vietnam']);
const joinNext=new Set(['Munich','Exeter','Nanjing','Hyderabad']);
const stateLabels=new Set(['Arizona','California','Colorado','Massachusetts','North Carolina','Oregon','Texas','Vermont','Washington']);
const decode=s=>s.replace(/&nbsp;|&#160;/gi,' ').replace(/&amp;/gi,'&').replace(/&rsquo;/gi,'’').replace(/&apos;|&#39;/gi,"'").replace(/&quot;/gi,'"').replace(/\s+/g,' ').trim();
const tokens=[...html.matchAll(/<(h[1-6]|p)\b[^>]*>([\s\S]*?)<\/\1>/gi)].map(m=>({tag:m[1].toLowerCase(),text:decode(m[2].replace(/<br\s*\/?>/gi,' | ').replace(/<[^>]+>/g,' '))}));
let country='';
let pending='';
const rows=[];
for(const token of tokens){
  const text=token.text;
  const heading=text.replace(/\s*\|\s*/g,' ').trim();
  if(token.tag==='h4'&&countryHeadings.has(heading)){country=heading;pending='';continue;}
  if(token.tag==='h4'&&heading==='Latin America'){country='Latin America';pending='';continue;}
  if(token.tag==='h3'&&heading==='Japan'){country='Japan';pending='';continue;}
  if(token.tag!=='p'||!country)continue;
  if(joinNext.has(text)){pending=text;continue;}
  if(stateLabels.has(text)||text.includes('Americas | Europe and Middle East')||/^\+?[\d ()-]+$/.test(text))continue;
  if(!/\d/.test(text))continue;
  const lines=text.split(/\s*\|\s*/).map(decode).filter(Boolean);
  const firstLine=lines[0]||pending||'Synopsys office';
  const locationName=pending||(!/\d/.test(firstLine)&&!/^(?:Synopsys|SNPS|Nihon Synopsys)/i.test(firstLine)?firstLine:'Synopsys office');
  const addressLines=lines.filter((line,index)=>{
    if(/^(?:Tel|Fax)\s*:/i.test(line)||/@/.test(line))return false;
    if(index===0&&line===locationName&&!/\d/.test(line))return false;
    return !/^(?:Synopsys|SNPS Belgium|Nihon Synopsys)\b/i.test(line);
  });
  let address=(pending?`${pending}, `:'')+addressLines.join(', ');
  pending='';
  let resolvedCountry=country;
  if(country==='Latin America')resolvedCountry=/Chile/i.test(address)?'Chile':'Mexico';
  rows.push({address,country:resolvedCountry,locationName});
}

// The headquarters address is split across separate paragraphs on the official page.
for(let index=rows.length-1;index>=0;index--)if(/675 Almanor Ave/i.test(rows[index].address))rows.splice(index,1);
rows.push({address:'675 Almanor Ave, Sunnyvale, CA 94085, United States',country:'United States',locationName:'Sunnyvale worldwide headquarters',headquarters:true});
const normalized=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const unique=[];
const seen=new Set();
for(const row of rows){
  const key=normalized(row.address.replace(/^.*?Synopsys(?: Corporate Headquarters| [A-Za-z()&,.' -]+(?:Ltd|Limited|LLC|GmbH|CJSC|SRL|BV|ApS|OY|Lda|Inc|Co\., Ltd\.?|Pvt Ltd\.?))?\s+/i,''));
  if(seen.has(key))continue;
  seen.add(key);unique.push(row);
}
if(unique.length<75||unique.length>100)throw new Error(`Expected 75-100 Synopsys offices, parsed ${unique.length}`);

const oldByAddress=new Map(data.locations.filter(x=>x.companyId==='synopsys').map(x=>[normalized(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='synopsys');
unique.forEach((row,index)=>{
  const old=oldByAddress.get(normalized(row.address));
  data.locations.push({
    id:`synopsys-${String(index+1).padStart(3,'0')}`,companyId:'synopsys',companyName:'Synopsys',
    locationName:row.locationName==='Synopsys office'?`Synopsys ${row.country} office`:row.locationName,
    locationType:row.headquarters?'headquarters':'office',address:row.address,country:row.country,
    latitude:old?.latitude??null,longitude:old?.longitude??null,
    coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',
    sourceUrl,sourceType:'official_company_directory',verifiedOn:'2026-08-24'
  });
});
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
