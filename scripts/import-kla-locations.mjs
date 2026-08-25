import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-kla-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
const certificationUrl='https://www.kla.com/wp-content/uploads/ISO_45001-KLA-Safety-Mgmt-Syst-2025-2028.pdf';
const privacyUrl='https://www.kla.com/wp-content/uploads/KLA_Candidate_Privacy_Notice_2025.09.08_for_US.pdf';
const coordinateUrl='https://www.kla.com/wp-content/uploads/KLA-2025-CDP-Report.pdf';

// Street addresses come from KLA's 2025–2028 ISO 45001 certificate and its
// candidate privacy notice updated June 3, 2025. Coordinates marked `building`
// are the corresponding KLA super-site geolocations in its 2025 CDP response.
// Ann Arbor is intentionally not promoted: its CDP point does not resolve to
// the certified 1200 Woodbridge Drive address.
const rows=[
  ['Corporate Headquarters','1 Technology Drive, Milpitas, CA 95035-7916, United States','United States','headquarters',37.42135,-121.924094,'building','map_ready',certificationUrl],
  ['Newport','Ringland Way, Newport NP18 2TA, United Kingdom','United Kingdom','manufacturing',51.599792,-2.922937,'building','map_ready',certificationUrl],
  ['Weilburg','Kubacher Weg 4, 35781 Weilburg, Germany','Germany','manufacturing',50.478126,8.284558,'building','map_ready',certificationUrl],
  ['Yavne','7 HaSanhedrin Boulevard, Yavne 8110101, Israel','Israel','manufacturing',31.887965,34.73622,'building','map_ready',certificationUrl],
  ["Migdal Ha'Emek","1 Halavian Street, Migdal Ha'Emek 2353401, Israel",'Israel','manufacturing',32.690878,35.249182,'building','map_ready',certificationUrl],
  ['Singapore','4 Serangoon North Avenue 5, Singapore 554532','Singapore','manufacturing',1.372353,103.869261,'building','map_ready',certificationUrl],
  ['Ann Arbor','1200 Woodbridge Drive, Ann Arbor, MI 48105, United States','United States','office',42.292258,-83.673466,'official_site_candidate','needs_review',certificationUrl],
  ['Dresden','Moritzburger Weg 67, 01109 Dresden, Germany','Germany','office',null,null,'unlocated','address_verified',privacyUrl],
  ['Jena','Friedrich-Hund-Strasse 3, 07745 Jena, Germany','Germany','office',50.8871,11.596547,'building','map_ready',privacyUrl],
  ['Chennai','Prince Infocity Towers, 286/1 & 286/2 Old Mahabalipuram Road, Kandanchavadi, Chennai 600096, India','India','office',12.974221,80.243535,'building','map_ready',privacyUrl],
  ['Hwaseong','14th and 15th Floors, SK V1 Center, 830 Dongtansunhwan-daero, Hwaseong-si, Gyeonggi-do 18468, South Korea','South Korea','office',null,null,'unlocated','address_verified',privacyUrl]
];

const previous=new Map(data.locations.filter(location=>location.companyId==='kla').map(location=>[location.address,location]));
data.locations=data.locations.filter(location=>location.companyId!=='kla');
data.locations.push(...rows.map(([name,address,country,type,latitude,longitude,coordinateAccuracy,status,sourceUrl],index)=>{
  const old=previous.get(address);
  const record={
    id:`kla-${String(index+1).padStart(3,'0')}`,
    companyId:'kla',
    companyName:'KLA',
    locationName:`KLA ${name}`,
    locationType:type,
    address,
    country,
    latitude:old?.latitude??latitude,
    longitude:old?.longitude??longitude,
    coordinateAccuracy:old?.coordinateAccuracy??coordinateAccuracy,
    status:old?.status??status,
    sourceUrl,
    sourceType:sourceUrl===privacyUrl?'company_privacy_notice':'company_certification',
    verifiedOn:'2026-08-24'
  };
  if(latitude!==null)record.coordinateSourceUrl=coordinateUrl;
  if(status==='needs_review')record.researchNote='KLA publishes this as a super-site coordinate, but the point does not align closely enough with the certified street address for building-level publication.';
  return record;
}));
data.updatedOn='2026-08-24';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
