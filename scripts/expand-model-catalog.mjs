import { readFileSync,writeFileSync } from 'node:fs';
import { parseCsv } from '../src/csv.js';

const root=new URL('../data/',import.meta.url);
const read=name=>parseCsv(readFileSync(new URL(name,root),'utf8'));
const encode=value=>{const text=Array.isArray(value)?JSON.stringify(value):String(value??'');return /[",\n]/.test(text)?`"${text.replaceAll('"','""')}"`:text};
const write=(name,rows,headers)=>writeFileSync(new URL(name,root),`${headers.join(',')}\n${rows.map(row=>headers.map(key=>encode(row[key])).join(',')).join('\n')}\n`);
const entityHeaders=readFileSync(new URL('entities.csv',root),'utf8').split(/\r?\n/,1)[0].split(',');
const relationHeaders=readFileSync(new URL('relationships.csv',root),'utf8').split(/\r?\n/,1)[0].split(',');
const pathHeaders=['entityId','nodes'];
const entities=read('entities.csv'),relationships=read('relationships.csv'),paths=read('representative-paths.csv');
const models=[
 ['gpt-6-astra','GPT-6 Astra','openai','OpenAI','United States','Global','Frontier multimodal reasoning and agentic model.','https://developers.openai.com/api/docs/models/gpt-6-astra','azure',['gpt-6-astra','openai','azure','nvidia','tsmc','asml','photoresists','silicon']],
 ['gemini-3-8-flash','Gemini 3.8 Flash','deepmind','Google DeepMind','United States','Global','Frontier Flash model for long-horizon software engineering and autonomous agents.','https://ai.google.dev/gemini-api/docs/models','google-cloud',['gemini-3-8-flash','deepmind','google-tpu','tsmc','asml','photoresists','silicon']],
 ['claude-mythos-5','Claude Mythos 5','anthropic','Anthropic','United States','Global','Claude model family member documented in Anthropic model guidance.','https://docs.anthropic.com/en/docs/about-claude/models/overview','aws',['claude-mythos-5','anthropic','aws','aws-trainium','tsmc','asml','photoresists','silicon']],
 ['gemma-3','Gemma 3','deepmind','Google DeepMind','United States','Global','Open multimodal model family designed for efficient deployment.','https://ai.google.dev/gemma/docs/core','vllm',['gemma-3','deepmind','google-tpu','tsmc','asml','photoresists','silicon']],
 ['phi-4','Phi-4','microsoft-ai','Microsoft AI','United States','Global','Compact reasoning model in Microsoft’s Phi family.','https://azure.microsoft.com/en-us/products/phi','vllm',['phi-4','microsoft-ai','azure','nvidia','tsmc','asml','photoresists','silicon']],
 ['amazon-nova-premier','Amazon Nova Premier','amazon-agi-lab','Amazon AGI Lab','United States','Global','Amazon’s capable multimodal model for complex tasks and model distillation.','https://aws.amazon.com/ai/generative-ai/nova/','aws',['amazon-nova-premier','amazon-agi-lab','aws','aws-trainium','tsmc','asml','photoresists','silicon']],
 ['nemotron-ultra','Llama Nemotron Ultra','nvidia','NVIDIA','United States','Global','NVIDIA reasoning model optimized for agentic and scientific workflows.','https://www.nvidia.com/en-us/ai-data-science/foundation-models/nemotron/','nvidia-nim',['nemotron-ultra','nvidia','tsmc','asml','photoresists','silicon']],
 ['apple-on-device-model','Apple On-Device Foundation Model','apple-foundation-models','Apple Foundation Models','United States','Global','Apple foundation model designed for private on-device intelligence.','https://machinelearning.apple.com/research/apple-foundation-models-2025-updates','apple-neural-engine',['apple-on-device-model','apple-foundation-models','apple-m-series','tsmc','asml','photoresists','silicon']],
 ['yi-large','Yi-Large','01-ai','01.AI','China','China','Large bilingual foundation model in the Yi family.','https://www.01.ai/','vllm',['yi-large','01-ai','nvidia','tsmc','asml','photoresists','silicon']],
 ['llama-3-1-405b','Llama 3.1 405B','meta-ai','Meta AI','United States','Global','Open-weight 405-billion-parameter model and a major Llama scaling milestone.','https://ai.meta.com/blog/meta-llama-3-1/','vllm',['llama-3-1-405b','meta-ai','nvidia','tsmc','asml','photoresists','silicon']],
 ['deepseek-v3','DeepSeek-V3','deepseek','DeepSeek','China','China','Mixture-of-experts foundation model documented with a public technical report.','https://github.com/deepseek-ai/DeepSeek-V3','vllm',['deepseek-v3','deepseek','nvidia','tsmc','asml','photoresists','silicon']],
 ['qwen2-5-max','Qwen2.5-Max','qwen','Qwen / Alibaba','China','China','Large mixture-of-experts model in Alibaba’s Qwen family.','https://qwenlm.github.io/blog/qwen2.5-max/','vllm',['qwen2-5-max','qwen','nvidia','tsmc','asml','photoresists','silicon']]
];
const existing=new Set(entities.map(row=>row.id));
for(const [id,name,developer,developerName,country,geography,description,source,runtime,path] of models){
 if(existing.has(id))continue;
 entities.push({id,name,type:'Model',layer:'models',categories:['Foundation models','Globally significant models'],country,products:[name],importanceLevel:'3',cluster:'frontier-models',description,ecosystemRole:`A major model family developed by ${developerName}; its upstream view separates documented infrastructure from representative supply-chain dependencies.`,whyItMatters:`${name} is included to make the atlas's global model coverage and physical compute dependencies more complete.`,website:source,positionIndex:String(entities.filter(row=>row.layer==='models').length),geography,timelineYear:'',timelineBasis:'Official model documentation',timelinePrecision:'year',founded:'',leadership:'',headquarters:'',provides:name,howUsed:'Model APIs, applications, research and downstream systems.',profileSources:[source]});
 relationships.push({source:developer,target:id,type:'DEVELOPS',explanation:`${developerName} develops ${name}.`,status:'confirmed',sourceUrl:source,activeFrom:'',activeTo:''});
 relationships.push({source:id,target:runtime,type:'RUNS_ON',explanation:`${name} is represented with its documented or representative deployment runtime; this edge does not claim the hardware used for original pretraining.`,status:'representative',sourceUrl:'',activeFrom:'',activeTo:''});
 paths.push({entityId:id,nodes:path});existing.add(id);
}
const additions=[
 ['deepmind','google-tpu','TRAINS_ON','Google documents its Gemini training and serving infrastructure around TPU systems.','confirmed','https://cloud.google.com/tpu'],
 ['microsoft-ai','azure','TRAINS_ON','Microsoft AI model development is represented on Microsoft Azure infrastructure; exact accelerator allocation varies by model.','representative',''],
 ['amazon-agi-lab','aws','TRAINS_ON','Amazon develops and serves Nova within AWS infrastructure.','confirmed','https://aws.amazon.com/ai/generative-ai/nova/'],
 ['qwen','nvidia','TRAINS_ON','NVIDIA accelerators are a representative training path for the Qwen family; exact chips vary and are not asserted for every release.','representative',''],
 ['01-ai','nvidia','TRAINS_ON','NVIDIA accelerators are a representative training path for the Yi family; exact cluster composition is not asserted.','representative',''],
 ['kuaishou-kling','nvidia','TRAINS_ON','NVIDIA accelerators are a representative physical compute path for Kling; the exact training cluster is not publicly established.','representative',''],
 ['shengshu-vidu','nvidia','TRAINS_ON','NVIDIA accelerators are a representative physical compute path for Vidu; the exact training cluster is not publicly established.','representative',''],
 ['sensetime','nvidia','TRAINS_ON','NVIDIA accelerators are a representative physical compute path for SenseNova; the exact training cluster is not publicly established.','representative',''],
 ['tsmc','apple-m-series','MANUFACTURES','TSMC is shown as the representative advanced-node manufacturing dependency behind Apple silicon.','reported','https://www.apple.com/supplier-responsibility/pdf/Apple-Supplier-List.pdf']
];
const keys=new Set(relationships.map(r=>`${r.source}|${r.target}|${r.type}`));
for(const [source,target,type,explanation,status,sourceUrl] of additions){const key=`${source}|${target}|${type}`;if(!keys.has(key)){relationships.push({source,target,type,explanation,status,sourceUrl,activeFrom:'',activeTo:''});keys.add(key)}}
const entityById=new Map(entities.map(entity=>[entity.id,entity])),pathByModel=new Map(paths.map(path=>[path.entityId,Array.isArray(path.nodes)?path.nodes:JSON.parse(path.nodes)]));
for(const model of entities.filter(entity=>entity.type==='Model')){
 const owner=relationships.find(relation=>relation.type==='DEVELOPS'&&relation.target===model.id)?.source;
 if(!owner||relationships.some(relation=>relation.source===owner&&relation.type==='TRAINS_ON'))continue;
 const physicalTarget=(pathByModel.get(model.id)||[]).map(id=>entityById.get(id)).find(entity=>entity&&['cloud','datacenter','compute'].includes(entity.layer));
 if(!physicalTarget)continue;
 const key=`${owner}|${physicalTarget.id}|TRAINS_ON`;if(keys.has(key))continue;
 relationships.push({source:owner,target:physicalTarget.id,type:'TRAINS_ON',explanation:`${physicalTarget.name} is a representative compute or hosting path for ${entityById.get(owner)?.name||owner}; public evidence does not establish it as the training system for every model release.`,status:'representative',sourceUrl:'',activeFrom:'',activeTo:''});keys.add(key);
}
for(const path of paths){const nodes=Array.isArray(path.nodes)?path.nodes:JSON.parse(path.nodes);if(nodes.some(id=>entityById.get(id)?.layer==='materials'))continue;const owner=relationships.find(relation=>relation.type==='DEVELOPS'&&relation.target===path.entityId)?.source;if(owner&&relationships.some(relation=>relation.source===owner&&relation.target==='nvidia'&&relation.type==='TRAINS_ON'))path.nodes=[path.entityId,owner,'nvidia','tsmc','asml','photoresists','silicon']}
write('entities.csv',entities,entityHeaders);write('relationships.csv',relationships,relationHeaders);write('representative-paths.csv',paths,pathHeaders);
console.log(`Catalog now contains ${entities.length} entities and ${entities.filter(row=>row.type==='Model').length} models.`);
