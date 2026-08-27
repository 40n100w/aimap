import { modelInferenceRegions, modelNetworkLinks, modelOrganizationSites } from './load-csv-data.mjs';

const errors=[];
const ids=new Set([...modelInferenceRegions,...modelOrganizationSites].map(site=>site.id));
for(const region of modelInferenceRegions){
  for(const field of ['id','model_id','model_name','provider','region_name','region_id','deployment_scope','evidence','source_url'])if(!region[field])errors.push(`${region.id||'unknown'}: missing ${field}`);
  if(!Number.isFinite(region.latitude)||Math.abs(region.latitude)>90||!Number.isFinite(region.longitude)||Math.abs(region.longitude)>180)errors.push(`${region.id}: invalid coordinates`);
  if(!['documented_service_region','documented_access_region'].includes(region.evidence))errors.push(`${region.id}: unsupported evidence type ${region.evidence}`);
  if(!['managed_training_and_inference','inference_service_region','inference_access_region'].includes(region.workload_role))errors.push(`${region.id}: invalid workload role`);
  if(region.workload_role==='managed_training_and_inference'&&!region.workload_source_url)errors.push(`${region.id}: missing training/deployment source`);
}
for(const site of modelOrganizationSites){
  for(const field of ['id','model_id','model_name','organization','site_name','site_type','evidence','source_url'])if(!site[field])errors.push(`${site.id||'unknown'}: missing ${field}`);
  if(!Number.isFinite(site.latitude)||Math.abs(site.latitude)>90||!Number.isFinite(site.longitude)||Math.abs(site.longitude)>180)errors.push(`${site.id}: invalid coordinates`);
}
for(const link of modelNetworkLinks){
  if(!ids.has(link.source_region)||!ids.has(link.target_region))errors.push(`${link.id}: unknown endpoint`);
  if(link.confidence!=='logical')errors.push(`${link.id}: model paths must be labeled logical`);
  if(link.flow_direction!=='source_to_target'||!link.flow_label)errors.push(`${link.id}: missing directional flow metadata`);
  if(!link.source_url)errors.push(`${link.id}: missing source URL`);
}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`Validated ${modelInferenceRegions.length} model inference regions, ${modelOrganizationSites.length} organization sites, and ${modelNetworkLinks.length} logical network links.`);
