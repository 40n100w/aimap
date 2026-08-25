import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-tenstorrent-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const sourceUrl='https://open.tenstorrent.com/about';
const rows=[
['Santa Clara office','office','2600 Great America Way, Suite 501, Santa Clara, CA 95054, United States','United States'],
['Fort Collins office','office','2580 E Harmony Road, Suite 201, Fort Collins, CO 80528, United States','United States'],
['Marlborough office','office','5 Mount Royal Avenue, Suite 220, Marlborough, MA 01752, United States','United States'],
['Austin headquarters','headquarters','7717 Southwest Parkway, Building 3, Suite 200, Austin, TX 78735, United States','United States'],
['Toronto office','office','150 Ferrand Drive, Suite 901, North York, ON M3C 3E5, Canada','Canada'],
['Bengaluru office','office','Brigade Tech Gardens, Block B1, Unit 201, 2nd Floor, Brookefield, Kundalahalli, Bengaluru, Karnataka 560037, India','India'],
['Beijing office','office','Lei Shing Hong Plaza, Tower C, 8 Wangjing Street, 5th Floor, Chaoyang District, Beijing 100102, China','China'],
['Pangyo office','office','Greits Pangyo, 117 Bundangnaegok-ro, 4th Floor, Bundang-gu, Seongnam, Gyeonggi-do, South Korea','South Korea'],
['Tokyo office','office','T-LITE Building, 2-4-7 Toranomon, 8th Floor, Minato-ku, Tokyo, Japan','Japan'],
['Belgrade office','office','Bulevar Milutina Milankovica 1i, 11070 New Belgrade, Serbia','Serbia'],
['Munich office','office','Feringastrasse 6, 85774 Unterfoehring, Germany','Germany'],
['Warsaw office','office','50 Krucza Street, 00-025 Warsaw, Poland','Poland']
];
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='tenstorrent').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='tenstorrent');
rows.forEach(([locationName,locationType,address,country],index)=>{const prior=old.get(norm(address));data.locations.push({id:`tenstorrent-${String(index+1).padStart(3,'0')}`,companyId:'tenstorrent',companyName:'Tenstorrent',locationName,locationType,address,country,latitude:prior?.latitude??null,longitude:prior?.longitude??null,coordinateAccuracy:prior?.coordinateAccuracy??'unlocated',status:prior?.status??'address_verified',sourceUrl,sourceType:'official_company_directory',verifiedOn:'2026-08-25',researchNote:index===0?'Complete import of all 12 exact-address offices in Tenstorrent’s current official “Our locations” directory. The Austin address is also the current SEC business address for Tenstorrent Holdings. No reseller or partner locations are included.':undefined});});
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
