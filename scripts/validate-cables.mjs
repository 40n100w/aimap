import { submarineCables, submarineCableLandings, submarineCableRoutes } from './load-csv-data.mjs';

const errors=[];
const ids=new Set();
for(const cable of submarineCables){
  if(!cable.id||ids.has(cable.id))errors.push(`Missing or duplicate cable ID: ${cable.id}`);
  ids.add(cable.id);
  if(!cable.name)errors.push(`${cable.id}: missing name`);
}
const routeIds=new Set();
for(const point of submarineCableRoutes){
  routeIds.add(point.cable_id);
  if(!ids.has(point.cable_id))errors.push(`Route references unknown cable: ${point.cable_id}`);
  if(!Number.isFinite(point.latitude)||point.latitude < -90||point.latitude > 90)errors.push(`${point.cable_id}: invalid latitude`);
  if(!Number.isFinite(point.longitude)||point.longitude < -180||point.longitude > 180)errors.push(`${point.cable_id}: invalid longitude`);
}
for(const landing of submarineCableLandings)if(!ids.has(landing.cable_id))errors.push(`Landing references unknown cable: ${landing.cable_id}`);
for(const cable of submarineCables)if(!routeIds.has(cable.id))errors.push(`${cable.id}: missing route geometry`);
if(errors.length){console.error(errors.slice(0,100).join('\n'));process.exit(1)}
console.log(`${submarineCables.length} cables; ${submarineCableRoutes.length} route vertices; ${submarineCableLandings.length} cable landing records`);
