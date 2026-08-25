import {readFileSync} from 'node:fs';
const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-screen-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const domestic='https://www.screen.co.jp/spe/en/company/network/domestic';
const group='https://www.screen.co.jp/en/about/organization';
const rows=[
['Kyoto Head Office','Tenjinkita-machi 1-1, Teranouchi-agaru 4-chome, Horikawa-dori, Kamigyo-ku, Kyoto 602-8585, Japan','Japan','headquarters',domestic],
['Hikone Plant','Takamiya-cho 480-1, Hikone, Shiga 522-0292, Japan','Japan','manufacturing',domestic],
['Taga Plant','Suwa 976-5, Shide, Taga-cho, Inugami-gun, Shiga 522-0314, Japan','Japan','manufacturing',domestic],
['Kumamoto Global Training Center','2083-7 Oyatsu, Mashiki-machi, Kamimashiki-gun, Kumamoto 861-2204, Japan','Japan','training_center',domestic],
['Rakusai Site','Furukawa-cho 322, Hazukashi, Fushimi-ku, Kyoto 612-8486, Japan','Japan','manufacturing',domestic],
['Monzennakacho Site','7th Floor, Yamatane Building, 2-21 Etchujima 1-chome, Koto-ku, Tokyo 135-0044, Japan','Japan','office',domestic],
['Takaoka Plant','2-5-5 Hongo, Takaoka, Toyama 933-0947, Japan','Japan','manufacturing',domestic],
['Koriyama Quartz Plant','Koriyama-Seibu Industrial Park 2, 15-4 Machiikedai 1-chome, Koriyama, Fukushima 963-0215, Japan','Japan','manufacturing',domestic],
['Kyoto Service Office','13-1 Shinmei-cho, Nishikyogoku, Ukyo-ku, Kyoto 615-0864, Japan','Japan','field_support',domestic],
['Hikone Plastic Precision Plant','761-5 Kawasebabacho, Hikone, Shiga 522-0223, Japan','Japan','manufacturing',domestic],
['Santa Clara Head Office','3151 Jay Street, Suite 210, Santa Clara, CA 95054, United States','United States','headquarters',group],
['Ismaning Head Office','Fraunhoferstrasse 7, 85737 Ismaning, Germany','Germany','headquarters',group],
['Maynooth','Unit G13, Maynooth Business Campus, Straffan Road, Maynooth, County Kildare W23 K2W6, Ireland','Ireland','field_support',group],
['Saint-Ismier','ZA ISIPARC Building B, 420 Chemin des Preles, 38330 Saint-Ismier, France','France','field_support',group],
['Vimercate','Via Torri Bianche 6, Torre Q Betulla, 20871 Vimercate, Italy','Italy','field_support',group],
['Kiryat Gat','1 Leshem Street, 2nd Floor, Kiryat Gat, Israel','Israel','field_support',group],
['Hwaseong','M Tower, 2nd Floor, Units 201-207, 51-9 Dongtancheomdansaneop 1-ro, Hwaseong-si, Gyeonggi-do 18469, South Korea','South Korea','field_support',group],
['Shanghai','Rooms C1102-1105, 11th Floor, Tower C, 150 Zunyi Road, Changning District, Shanghai 200051, China','China','field_support',group],
['Hsinchu','311 Kao-tsui Road, Hsinchu 300070, Taiwan','Taiwan','headquarters',group],
['Singapore','29 Kaki Bukit View, Kaki Bukit Techpark II, Singapore 415963','Singapore','field_support',group],
['Kulim','13-A Persiaran 1, Taman Kulim Avenue, Kulim Hi-Tech, Kulim, Kedah 09000, Malaysia','Malaysia','field_support',group]
];
const previous=new Map(data.locations.filter(x=>x.companyId==='screen').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='screen');
data.locations.push(...rows.map(([name,address,country,type,sourceUrl],index)=>{const old=previous.get(address);return{id:`screen-${String(index+1).padStart(3,'0')}`,companyId:'screen',companyName:'SCREEN Holdings',locationName:`SCREEN ${name}`,locationType:type,address,country,latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl,sourceType:'company_locations_page',verifiedOn:'2026-08-24'};}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
