import { readFile } from 'node:fs/promises';
import { parseCsv } from '../src/csv.js';

const rows=parseCsv(await readFile(new URL('../data/data-center-campuses.csv',import.meta.url),'utf8'));
const errors=[],ids=new Set();
for(const row of rows){
  for(const field of ['id','name','operator','city','country','latitude','longitude','coordinate_precision','status','campus_type','description','services','source_url','verified_on'])if(!row[field])errors.push(`${row.id||'unknown'}: missing ${field}`);
  if(ids.has(row.id))errors.push(`${row.id}: duplicate id`);ids.add(row.id);
  const latitude=Number(row.latitude),longitude=Number(row.longitude);
  if(!Number.isFinite(latitude)||Math.abs(latitude)>90||!Number.isFinite(longitude)||Math.abs(longitude)>180)errors.push(`${row.id}: invalid coordinates`);
  if(!['locality','city','metro','region'].includes(row.coordinate_precision))errors.push(`${row.id}: invalid coordinate precision`);
  if(!['Operational','Under development','Planned'].includes(row.status))errors.push(`${row.id}: invalid status`);
  if(!/^https:\/\//.test(row.source_url))errors.push(`${row.id}: source must use HTTPS`);
  if(row.capacity_mw&&!(Number(row.capacity_mw)>0))errors.push(`${row.id}: invalid capacity`);
  if(row.facilities&&!(Number(row.facilities)>0))errors.push(`${row.id}: invalid facilities count`);
}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`Validated ${rows.length} Asian data-center campus records across ${new Set(rows.map(row=>row.country)).size} markets.`);
