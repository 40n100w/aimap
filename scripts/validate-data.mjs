import { entities,relationships,representativePaths,aliases,LAYERS } from '../src/data.js';

const errors=[];
const ids=new Set();
const entityNames=new Set();
for(const entity of entities){
 if(ids.has(entity.id))errors.push(`Duplicate entity ID: ${entity.id}`);
 ids.add(entity.id);
 if(entityNames.has(entity.name.toLowerCase()))errors.push(`Duplicate entity name: ${entity.name}`);entityNames.add(entity.name.toLowerCase());
 if(!LAYERS.some(layer=>layer.id===entity.layer))errors.push(`Unknown layer on ${entity.id}: ${entity.layer}`);
 if(entity.id.startsWith('layer-')||entity.id.startsWith('cluster-'))errors.push(`Taxonomy node exposed as entity: ${entity.id}`);
 if(entity.layer==='markets'||['Architecture layer','End market','Capability'].includes(entity.type))errors.push(`Category exposed as entity: ${entity.id} (${entity.type})`);
}
const edgeKeys=new Set();
for(const relation of relationships){
 if(!ids.has(relation.source)&&!aliases[relation.source])errors.push(`Missing relationship source: ${relation.source}`);
 if(!ids.has(relation.target)&&!aliases[relation.target])errors.push(`Missing relationship target: ${relation.target}`);
 if(!['confirmed','reported','inferred','representative'].includes(relation.status))errors.push(`Invalid status: ${relation.status}`);
 if(relation.sourceUrl){
  try{const url=new URL(relation.sourceUrl);if(!['http:','https:'].includes(url.protocol))errors.push(`Invalid source URL protocol: ${relation.sourceUrl}`)}catch{errors.push(`Invalid source URL: ${relation.sourceUrl}`)}
 }
 const key=`${relation.source}|${relation.target}|${relation.type}`;
 if(edgeKeys.has(key))errors.push(`Duplicate relationship: ${key}`);edgeKeys.add(key);
}
for(const model of entities.filter(entity=>entity.type==='Model')){
 const owners=relationships.filter(r=>r.type==='DEVELOPS'&&r.target===model.id);
 const runtimes=relationships.filter(r=>r.type==='RUNS_ON'&&r.source===model.id);
 if(owners.length!==1)errors.push(`${model.name} has ${owners.length} developer links`);
 if(owners.some(r=>!r.sourceUrl))errors.push(`${model.name} developer link has no primary source URL`);
 if(runtimes.length!==1)errors.push(`${model.name} must have exactly one runtime link`);
 if(runtimes[0]&&runtimes[0].status!=='representative'&&!runtimes[0].sourceUrl)errors.push(`${model.name} verified runtime link has no source URL`);
 const path=representativePaths[model.id];
 if(!path)errors.push(`${model.name} has no representative physical path`);
 else for(let i=0;i<path.length-1;i++)if(!relationships.some(r=>(r.source===path[i]&&r.target===path[i+1])||(r.target===path[i]&&r.source===path[i+1])))errors.push(`${model.name} path has an unlinked step: ${path[i]} -> ${path[i+1]}`);
}
if(entities.length>2000)errors.push(`Entity ceiling exceeded: ${entities.length}`);
console.log(JSON.stringify({entities:entities.length,models:entities.filter(e=>e.type==='Model').length,relationships:relationships.length,relationshipTypes:new Set(relationships.map(r=>r.type)).size,errors},null,2));
if(errors.length)process.exit(1);
