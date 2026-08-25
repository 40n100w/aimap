import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-shinetsu-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const officeSource='https://www.shinetsu.co.jp/en/company/network/office/';
const plantSource='https://www.shinetsu.co.jp/en/company/network/plant/';
const rows=[
 ['Head Office','Marunouchi Eiraku Building, 4-1 Marunouchi 1-chome, Chiyoda-ku, Tokyo 100-0005, Japan','headquarters',officeSource],
 ['Osaka Branch','Sompo Japan Higobashi Building, 11-4 Edobori 1-chome, Nishi-ku, Osaka 550-0002, Japan','office',officeSource],
 ['Nagoya Branch','Sakuradori Toyota Building, 5-28 Meieki 4-chome, Nakamura-ku, Nagoya, Aichi 450-0002, Japan','office',officeSource],
 ['Fukuoka Branch','Hinode Tenjin Building, 12-20 Tenjin 1-chome, Chuo-ku, Fukuoka 810-0001, Japan','office',officeSource],
 ['Naoetsu Plant and Research Centers','28-1 Nishifukushima, Kubiki-ku, Joetsu, Niigata 942-8601, Japan','factory',plantSource],
 ['Takefu Plant and Magnetic Materials Research Center','1-5 Kitago 2-chome, Echizen, Fukui 915-8515, Japan','factory',plantSource],
 ['Gunma Isobe Plant and Research Center','13-1 Isobe 2-chome, Annaka, Gunma 379-0195, Japan','factory',plantSource],
 ['Gunma Matsuida Plant and Research Center','1-10 Hitomi, Matsuida-machi, Annaka, Gunma 379-0224, Japan','factory',plantSource],
 ['Kashima Plant and Research Center','1 Towada, Kamisu, Ibaraki 314-0102, Japan','factory',plantSource],
 ['Isesaki Campus','88-1 Kokuryo-cho, Isesaki, Gunma 372-0853, Japan','factory',plantSource]
];
const previous=new Map(data.locations.filter(x=>x.companyId==='shin-etsu').map(x=>[x.address,x]));
data.locations=data.locations.filter(x=>x.companyId!=='shin-etsu');
data.locations.push(...rows.map(([name,address,locationType,sourceUrl],index)=>{
 const old=previous.get(address);
 return {id:`shin-etsu-${String(index+1).padStart(3,'0')}`,companyId:'shin-etsu',companyName:'Shin-Etsu Chemical',locationName:`Shin-Etsu ${name}`,locationType,address,country:'Japan',latitude:old?.latitude??null,longitude:old?.longitude??null,coordinateAccuracy:old?.coordinateAccuracy??'unlocated',status:old?.status??'address_verified',sourceUrl,sourceType:'company_locations_page',verifiedOn:'2026-08-24'};
}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
