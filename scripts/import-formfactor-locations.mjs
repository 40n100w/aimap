import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-formfactor-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://www.formfactor.com/sales-service/contact-and-locations/';
const rows=[
['Livermore Headquarters','7005 Southfront Road, Livermore, CA 94551, United States','United States','headquarters'],
['Carlsbad','2281 Las Palmas Drive, Suite 102, Carlsbad, CA 92011, United States','United States','manufacturing'],
['Beaverton','9100 SW Gemini Drive, Beaverton, OR 97008, United States','United States','manufacturing'],
['Boulder','4601 Nautilus Court South, Suite 100, Boulder, CO 80301, United States','United States','manufacturing'],
['Farmers Branch','4350 Innovation Drive, Farmers Branch, TX 75244, United States','United States','manufacturing'],
['Thiendorf','Suess-Strasse 1, 01561 Thiendorf, Germany','Germany','manufacturing'],
['Dresden','Manfred-von-Ardenne-Ring 20, Haus F, 01099 Dresden, Germany','Germany','field_support'],
['Aschheim','Max-Planck-Strasse 4, 85609 Aschheim, Germany','Germany','field_support'],
['Gallarate','Via Carlo Cattaneo 9, 21013 Gallarate, Italy','Italy','field_support'],
['Zhubei','7th Floor Unit 3, 28 Taiyuan Street, Zhubei City, Hsinchu County 302, Taiwan','Taiwan','field_support'],
['Seongnam','8th Floor, 349 Seongnam-daero, Bundang-gu, Seongnam-si, Gyeonggi-do 13558, South Korea','South Korea','field_support'],
['Singapore','30 Marsiling Industrial Estate Road 8, Unit 05-02, Singapore 739193','Singapore','field_support'],
['Yokohama','Yokohama Business Park East Tower, 11th and 2nd Floors, 134 Godo-cho, Hodogaya-ku, Yokohama, Kanagawa 240-0005, Japan','Japan','manufacturing']
];
const previous=new Map(data.locations.filter(x=>x.companyId==='formfactor').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='formfactor');
data.locations.push(...rows.map(([name,address,country,type],index)=>{const old=previous.get(address);return{id:`formfactor-${String(index+1).padStart(3,'0')}`,companyId:'formfactor',companyName:'FormFactor',locationName:`FormFactor ${name}`,locationType:type,address,country,latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl,sourceType:'company_locations_page',verifiedOn:'2026-08-24'};}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
