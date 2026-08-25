import {readFileSync} from 'node:fs';

const [indexPath,datasetPath]=process.argv.slice(2);
if(!indexPath||!datasetPath)throw new Error('Usage: node scripts/import-coherent-locations.mjs <official Algolia JSON> <locations JSON>');
const index=JSON.parse(readFileSync(indexPath,'utf8'));
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const corporate=index.hits.filter(hit=>(hit.contacts||[]).some(contact=>(contact.type||[]).includes('corporate'))&&hit.info?.address1);
if(corporate.length!==100)throw new Error(`Expected 100 addressed Coherent corporate locations, found ${corporate.length}`);
const countryAliases={
  'united states':'United States',canada:'Canada',germany:'Germany','south korea':'South Korea',taiwan:'Taiwan',philippines:'Philippines',china:'China',malaysia:'Malaysia',india:'India',vietnam:'Vietnam',japan:'Japan',australia:'Australia',switzerland:'Switzerland',belgium:'Belgium',france:'France',finland:'Finland',israel:'Israel',netherlands:'Netherlands','united kingdom':'United Kingdom',sweden:'Sweden',spain:'Spain',italy:'Italy'
};
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const old=new Map(data.locations.filter(x=>x.companyId==='coherent').map(x=>[norm(x.address),x]));
data.locations=data.locations.filter(x=>x.companyId!=='coherent');
corporate.forEach((hit,indexNumber)=>{
  const info=hit.info;
  const country=countryAliases[String(info.region||'').toLowerCase()]||(/Glasgow|Scotland/i.test([info.address1,info.city,info.state].join(' '))?'United Kingdom':String(info.region||'Unknown'));
  const address=[info.address1,info.address2,info.city,info.state,info.postalCode,country].filter(Boolean).join(', ').replace(/\s+,/g,',').replace(/,\s*,/g,',');
  const prior=old.get(norm(address));
  const hasOfficialCoordinates=Number.isFinite(hit.support?.latitude)&&Number.isFinite(hit.support?.longitude);
  data.locations.push({
    id:`coherent-${String(indexNumber+1).padStart(3,'0')}`,companyId:'coherent',companyName:'Coherent',
    locationName:info.name,locationType:/headquarters/i.test(info.name)?'headquarters':'office',address,country,
    latitude:hasOfficialCoordinates?hit.support.latitude:(prior?.latitude??null),longitude:hasOfficialCoordinates?hit.support.longitude:(prior?.longitude??null),
    coordinateAccuracy:hasOfficialCoordinates?'building':(prior?.coordinateAccuracy??'unlocated'),status:hasOfficialCoordinates?'map_ready':(prior?.status??'address_verified'),
    sourceUrl:`https://www.coherent.com${hit.url}`,sourceType:'official_company_directory',verifiedOn:'2026-08-24',
    coordinateSource:hasOfficialCoordinates?'official_company_directory':undefined,
    researchNote:'Imported from the corporate-location subset of Coherent’s official public locator index; distributor and partner records are excluded.'
  });
});
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
