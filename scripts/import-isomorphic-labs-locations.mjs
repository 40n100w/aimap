import {readFileSync} from 'node:fs';

const datasetPath=process.argv[2];
if(!datasetPath)throw new Error('Usage: node scripts/import-isomorphic-labs-locations.mjs <locations JSON>');
const data=JSON.parse(readFileSync(datasetPath,'utf8'));
data.locations=data.locations.filter(location=>location.companyId!=='isomorphic-labs');

const common={
  companyId:'isomorphic-labs',companyName:'Isomorphic Labs',
  sourceUrl:'https://www.isomorphiclabs.com/job-openings',sourceType:'official_company_office_directory',
  verifiedOn:'2026-08-25',researchComplete:false,
  researchNote:'Partial current office directory. Isomorphic Labs explicitly says its hybrid team operates from offices in three cities: London (King’s Cross), Lausanne (Le Flon), and Cambridge, Massachusetts (Kendall Square). Its November 2025 Lausanne feature confirms the relocation from EPFL to Le Flon; a current office listing identifies that building as Rue de Genève 7. The company does not publish street addresses for its London or Cambridge premises, so those offices remain off-map pending building-level verification.'
};
const rows=[
  {id:'isomorphic-labs-001',locationName:'London headquarters',locationType:'headquarters',address:'King’s Cross, London, United Kingdom',country:'United Kingdom'},
  {id:'isomorphic-labs-002',locationName:'Lausanne office',locationType:'office',address:'Rue de Genève 7, 1003 Lausanne, Switzerland',country:'Switzerland',supportingSourceUrl:'https://www.isomorphiclabs.com/articles/inside-isomorphic-labs-lausanne-office',addressSourceUrl:'https://www.glassdoor.co.uk/Location/All-Isomorphic-Labs-Lausanne-VD-Office-Locations-EI_IE7140434.4,19_IL.20,31_IC3288742.htm',geocodeQueries:['Rue de Genève 7, 1003 Lausanne, Switzerland']},
  {id:'isomorphic-labs-003',locationName:'Cambridge office',locationType:'office',address:'Kendall Square, Cambridge, MA, United States',country:'United States',supportingSourceUrl:'https://storage.googleapis.com/isomorphiclabs-website-public-artifacts/ISOMORPHIC_LABS_CMO_US_17-06-25.pdf'}
];
const fixedCoordinates={
  'isomorphic-labs-002':{latitude:46.5215254,longitude:6.6293145,coordinateSourceUrl:'https://www.openstreetmap.org/node/562825999'}
};
for(const row of rows){
  const fixed=fixedCoordinates[row.id];
  data.locations.push({...common,...row,latitude:fixed?.latitude??null,longitude:fixed?.longitude??null,coordinateSourceUrl:fixed?.coordinateSourceUrl,coordinateSourceType:fixed?'openstreetmap_address_point':undefined,coordinateAccuracy:fixed?'building':'unlocated',status:fixed?'map_ready':'needs_review'});
}
data.updatedOn='2026-08-25';
process.stdout.write(`${JSON.stringify(data,null,2)}\n`);
