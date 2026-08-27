import { internetExchanges } from './load-csv-data.mjs';

const errors=[],ids=new Set();
for(const exchange of internetExchanges){
  if(!exchange.id||ids.has(exchange.id))errors.push(`Missing or duplicate exchange ID: ${exchange.id}`);ids.add(exchange.id);
  if(exchange.stat!=='Active')errors.push(`${exchange.id}: non-active exchange included`);
  if(!exchange.name||!exchange.ctry||!exchange.cit)errors.push(`${exchange.id}: missing identity or location`);
  if(!Number.isFinite(exchange.latitude)||exchange.latitude < -90||exchange.latitude > 90)errors.push(`${exchange.id}: invalid latitude`);
  if(!Number.isFinite(exchange.longitude)||exchange.longitude < -180||exchange.longitude > 180)errors.push(`${exchange.id}: invalid longitude`);
}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`${internetExchanges.length} active Internet exchanges across ${new Set(internetExchanges.map(exchange=>exchange.ctry)).size} countries`);
