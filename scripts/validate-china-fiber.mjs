import { chinaFiberLinks, chinaFiberNetworks, chinaFiberNodes } from './load-csv-data.mjs';

const errors=[],networkIds=new Set(),nodeIds=new Set(),linkIds=new Set();
for(const network of chinaFiberNetworks){if(!network.id||networkIds.has(network.id))errors.push(`Missing or duplicate network: ${network.id}`);networkIds.add(network.id);if(!network.name||!network.operator||!network.source_url)errors.push(`${network.id}: incomplete network metadata`)}
for(const node of chinaFiberNodes){if(!node.id||nodeIds.has(node.id))errors.push(`Missing or duplicate node: ${node.id}`);nodeIds.add(node.id);if(!Number.isFinite(node.latitude)||!Number.isFinite(node.longitude))errors.push(`${node.id}: invalid coordinates`)}
for(const link of chinaFiberLinks){if(!link.id||linkIds.has(link.id))errors.push(`Missing or duplicate link: ${link.id}`);linkIds.add(link.id);if(!networkIds.has(link.network_id))errors.push(`${link.id}: unknown network ${link.network_id}`);if(!nodeIds.has(link.source_node)||!nodeIds.has(link.target_node))errors.push(`${link.id}: unknown endpoint`);if(!['logical','documented_topology'].includes(link.confidence))errors.push(`${link.id}: invalid confidence`)}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`${chinaFiberNetworks.length} China fiber networks; ${chinaFiberNodes.length} backbone nodes; ${chinaFiberLinks.length} topology links`);
