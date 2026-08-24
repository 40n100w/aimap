import { EXPANSION_CLUSTERS, CURATED_EXPANSION_RELATIONSHIPS, MODEL_PRODUCT_OWNERS } from './catalog.js';
import { DEPTH_CLUSTERS } from './catalog-depth.js';
import { geographyFor } from './geography.js';

const ALL_EXPANSION_CLUSTERS=[...EXPANSION_CLUSTERS,...DEPTH_CLUSTERS];

export const DATA_UPDATED = '2026-08-23';

export const LAYERS = [
  {id:'materials',name:'Raw materials & industrial inputs',short:'Materials',y:-55,color:'#9b806b',symbol:'◇'},
  {id:'equipment',name:'Semiconductor equipment & components',short:'Equipment',y:-45,color:'#a08f6a',symbol:'⬡'},
  {id:'fabrication',name:'Fabrication & advanced packaging',short:'Fabrication',y:-35,color:'#72938e',symbol:'◆'},
  {id:'compute',name:'Compute hardware',short:'Compute',y:-25,color:'#5f8798',symbol:'▣'},
  {id:'datacenter',name:'Data center & system hardware',short:'Data centers',y:-15,color:'#718b93',symbol:'▤'},
  {id:'cloud',name:'Cloud & hyperscalers',short:'Cloud',y:-5,color:'#7d7aa1',symbol:'◉'},
  {id:'models',name:'Foundation model labs',short:'Models',y:5,color:'#998095',symbol:'✦'},
  {id:'infra',name:'Model & AI infrastructure',short:'AI infrastructure',y:15,color:'#8f7c9e',symbol:'⬢'},
  {id:'developer',name:'AI developer stack',short:'Developer stack',y:25,color:'#819b7a',symbol:'⌘'},
  {id:'agents',name:'AI harness & agent layer',short:'Agents / harness',y:35,color:'#a18b6c',symbol:'◎'},
  {id:'applications',name:'Application companies',short:'Applications',y:45,color:'#9b776e',symbol:'▱'},
  {id:'robotics',name:'Robotics & physical AI',short:'Physical AI',y:55,color:'#748e85',symbol:'△'}
];

const groups = {
 materials:[
  ['silicon','Semiconductor-grade silicon','Material','Global',['Wafers'],3],['copper','Copper','Material','Global',['Interconnects','Power delivery'],2],['aluminum','Aluminum','Material','Global',['Heat sinks','Frames'],1],['rare-gases','Rare gases','Material','Global',['Neon','Argon','Krypton'],2],['photoresists','Photoresists','Material','Global',['EUV resist'],3],['substrates','Advanced substrates','Material','Global',['ABF substrates'],3],['packaging-materials','Packaging materials','Material','Global',['Underfill','Solder'],2],['power-grid','Power infrastructure','Infrastructure','Global',['Generation','Transmission'],3],['cooling-water','Cooling infrastructure','Infrastructure','Global',['Water','Chillers'],3],['fiber','Optical fiber','Material','Global',['Single-mode fiber'],2],['shin-etsu','Shin-Etsu Chemical','Company','Japan',['Silicon wafers','Photoresists'],3],['sumco','SUMCO','Company','Japan',['Silicon wafers'],2],['jsr','JSR','Company','Japan',['Photoresists'],2],['ajinomoto','Ajinomoto Fine-Techno','Company','Japan',['ABF substrates'],3]],
 equipment:[
  ['asml','ASML','Company','Netherlands',['EUV lithography','DUV lithography'],3],['applied-materials','Applied Materials','Company','United States',['Deposition','Process control'],3],['lam-research','Lam Research','Company','United States',['Etch','Deposition'],3],['kla','KLA','Company','United States',['Inspection','Metrology'],3],['tokyo-electron','Tokyo Electron','Company','Japan',['Coater/developer','Etch'],3],['canon','Canon','Company','Japan',['Lithography'],1],['nikon','Nikon','Company','Japan',['Lithography'],1],['asm-international','ASM International','Company','Netherlands',['Atomic layer deposition'],2],['screen','SCREEN Holdings','Company','Japan',['Wafer cleaning'],2],['disco','DISCO','Company','Japan',['Dicing','Grinding'],2],['advantest','Advantest','Company','Japan',['Semiconductor test'],2],['teradyne','Teradyne','Company','United States',['Semiconductor test'],2],['synopsys','Synopsys','Company','United States',['EDA','IP'],3],['cadence','Cadence','Company','United States',['EDA','IP'],3],['arm','Arm','Company','United Kingdom',['CPU IP'],3],['coherent','Coherent','Company','United States',['Optical components'],2]],
 fabrication:[
  ['tsmc','TSMC','Company','Taiwan',['N3','N2','CoWoS'],3],['samsung-foundry','Samsung Foundry','Company','South Korea',['Advanced logic','I-Cube'],3],['intel-foundry','Intel Foundry','Company','United States',['18A','Foveros'],3],['globalfoundries','GlobalFoundries','Company','United States',['Specialty processes'],2],['umc','UMC','Company','Taiwan',['Mature-node foundry'],1],['smic','SMIC','Company','China',['Logic foundry'],2],['ase','ASE Technology','Company','Taiwan',['OSAT','Advanced packaging'],3],['amkor','Amkor','Company','United States',['OSAT','Advanced packaging'],2],['jcet','JCET','Company','China',['OSAT'],1],['cowos','CoWoS','Technology','Taiwan',['2.5D packaging'],3]],
 compute:[
  ['nvidia','NVIDIA','Company','United States',['Blackwell','CUDA','NVLink','Spectrum-X'],3],['amd','AMD','Company','United States',['Instinct MI300','EPYC','ROCm'],3],['intel','Intel','Company','United States',['Xeon','Gaudi'],2],['broadcom','Broadcom','Company','United States',['Custom ASICs','Tomahawk'],3],['google-tpu','Google TPU','Platform','United States',['TPU v5','TPU v6e'],3],['aws-trainium','AWS Trainium / Inferentia','Platform','United States',['Trainium','Inferentia'],3],['maia','Microsoft Maia','Platform','United States',['Maia 100'],2],['meta-mtia','Meta MTIA','Platform','United States',['Inference accelerator'],2],['cerebras','Cerebras','Company','United States',['Wafer-Scale Engine'],2],['groq','Groq','Company','United States',['LPU'],2],['tenstorrent','Tenstorrent','Company','Canada',['AI processors'],1],['qualcomm','Qualcomm','Company','United States',['Cloud AI 100','Snapdragon'],2],['sk-hynix','SK hynix','Company','South Korea',['HBM3E','HBM4'],3],['samsung-memory','Samsung Memory','Company','South Korea',['HBM','DDR5'],3],['micron','Micron','Company','United States',['HBM3E','DDR5'],3],['marvell','Marvell','Company','United States',['Custom silicon','Interconnect'],2]],
 datacenter:[
  ['supermicro','Supermicro','Company','United States',['GPU servers','Liquid-cooled racks'],3],['dell','Dell Technologies','Company','United States',['AI Factory','PowerEdge'],3],['hpe','HPE','Company','United States',['Cray','ProLiant'],2],['lenovo','Lenovo','Company','China',['ThinkSystem'],1],['arista','Arista Networks','Company','United States',['Ethernet switching'],3],['cisco','Cisco','Company','United States',['Networking','Silicon One'],2],['vertiv','Vertiv','Company','United States',['Power','Cooling'],3],['schneider','Schneider Electric','Company','France',['Power distribution','Cooling'],3],['eaton','Eaton','Company','Ireland',['UPS','Power distribution'],2],['equnix','Equinix','Company','United States',['Colocation'],2],['digital-realty','Digital Realty','Company','United States',['Data centers'],2],['coreweave','CoreWeave','Company','United States',['GPU cloud','AI data centers'],3],['corning','Corning','Company','United States',['Optical fiber'],2],['lumentum','Lumentum','Company','United States',['Optical transceivers'],2]],
 cloud:[
  ['aws','Amazon Web Services','Company','United States',['EC2','SageMaker','Bedrock'],3],['azure','Microsoft Azure','Company','United States',['Azure AI','AI supercomputing'],3],['google-cloud','Google Cloud','Company','United States',['Vertex AI','TPU Cloud'],3],['oracle-cloud','Oracle Cloud','Company','United States',['OCI AI Infrastructure'],3],['alibaba-cloud','Alibaba Cloud','Company','China',['PAI','ECS'],2],['ibm-cloud','IBM Cloud','Company','United States',['watsonx'],1],['cloudflare','Cloudflare','Company','United States',['Workers AI'],2],['nebius','Nebius','Company','Netherlands',['AI cloud'],1]],
 models:[
  ['openai','OpenAI','Model lab','United States',['GPT','o-series','Sora'],3],['anthropic','Anthropic','Model lab','United States',['Claude'],3],['deepmind','Google DeepMind','Model lab','United Kingdom',['Gemini','Veo','AlphaFold'],3],['meta-ai','Meta AI','Model lab','United States',['Llama'],3],['xai','xAI','Model lab','United States',['Grok'],3],['mistral','Mistral AI','Model lab','France',['Mistral','Mixtral'],2],['cohere','Cohere','Model lab','Canada',['Command','Embed'],2],['deepseek','DeepSeek','Model lab','China',['DeepSeek V4','R1'],3],['qwen','Qwen / Alibaba','Model lab','China',['Qwen'],3],['moonshot-ai','Moonshot AI','Model lab','China',['Kimi K3','Kimi K2.7 Code'],3],['zhipu-ai','Zhipu AI','Model lab','China',['GLM'],2],['minimax','MiniMax','Model lab','China',['MiniMax M2'],2],['bytedance-seed','ByteDance Seed','Model lab','China',['Doubao'],2],['tencent-hunyuan','Tencent Hunyuan','Model lab','China',['Hunyuan'],2],['baidu-ernie','Baidu ERNIE','Model lab','China',['ERNIE'],2],['technology-innovation-institute','Technology Innovation Institute','Model lab','United Arab Emirates',['Falcon'],2],['arc-institute','Arc Institute','Research lab','United States',['Evo'],2],['ai21','AI21 Labs','Model lab','Israel',['Jamba'],1],['stability','Stability AI','Model lab','United Kingdom',['Stable Diffusion'],2],['nvidia-nim','NVIDIA NIM','Platform','United States',['Inference microservices'],2]],
 infra:[
  ['hugging-face','Hugging Face','Company','United States',['Hub','Transformers','Inference Endpoints'],3],['databricks','Databricks','Company','United States',['Mosaic AI','Lakehouse'],3],['snowflake','Snowflake','Company','United States',['Cortex AI'],2],['scale-ai','Scale AI','Company','United States',['Data labeling','Evaluation'],3],['weights-biases','Weights & Biases','Company','United States',['Experiment tracking','Weave'],2],['langsmith','LangSmith','Platform','United States',['Observability','Evaluation'],2],['pinecone','Pinecone','Company','United States',['Vector database'],2],['weaviate','Weaviate','Company','Netherlands',['Vector database'],1],['milvus','Milvus','Project','Open source',['Vector database'],1],['together-ai','Together AI','Company','United States',['Inference','Training'],2],['fireworks','Fireworks AI','Company','United States',['Inference'],2],['replicate','Replicate','Company','United States',['Model serving'],2],['openrouter','OpenRouter','Company','United States',['Model routing'],2],['lakera','Lakera','Company','Switzerland',['AI security'],1],['gretel','Gretel','Company','United States',['Synthetic data'],1]],
 developer:[
  ['pytorch','PyTorch','Framework','Open source',['Deep learning framework'],3],['jax','JAX','Framework','Open source',['Accelerated arrays'],2],['tensorflow','TensorFlow','Framework','Open source',['Deep learning framework'],2],['cuda','CUDA','Platform','United States',['GPU compute platform'],3],['triton','Triton','Project','Open source',['GPU programming language'],3],['vllm','vLLM','Project','Open source',['Inference engine'],3],['llamacpp','llama.cpp','Project','Open source',['Local inference'],3],['mlx','MLX','Framework','United States',['Apple silicon ML'],2],['langchain','LangChain','Framework','United States',['LLM application framework'],3],['llamaindex','LlamaIndex','Framework','United States',['Data framework'],2],['onnx','ONNX','Standard','Open source',['Model interchange'],2],['ray','Ray','Framework','Open source',['Distributed AI compute'],2],['deepspeed','DeepSpeed','Framework','Open source',['Distributed training'],2],['kubernetes','Kubernetes','Platform','Open source',['Container orchestration'],3]],
 agents:[
  ['chatgpt','ChatGPT','Application','United States',['ChatGPT','Codex'],3],['claude-code','Claude Code','Agent','United States',['Coding agent'],3],['cursor','Cursor','Company','United States',['AI code editor'],3],['github-copilot','GitHub Copilot','Application','United States',['Coding assistant'],3],['windsurf','Windsurf','Application','United States',['AI code editor'],2],['mcp','Model Context Protocol','Protocol','Open standard',['Tools','Resources','Prompts'],3],['openai-agents','OpenAI Agents SDK','Framework','Open source',['Agent orchestration'],2],['semantic-kernel','Semantic Kernel','Framework','Open source',['Agent orchestration'],2],['crewai','CrewAI','Framework','Open source',['Multi-agent orchestration'],2],['browser-use','Browser-use','Project','Open source',['Browser automation'],2],['computer-use','Computer use','Capability','Cross-platform',['GUI interaction'],3]],
 applications:[
  ['perplexity','Perplexity','Company','United States',['AI search'],3],['notion','Notion AI','Application','United States',['Knowledge work'],2],['canva','Canva AI','Application','Australia',['Design'],2],['adobe','Adobe Firefly','Application','United States',['Creative media'],3],['midjourney','Midjourney','Company','United States',['Image generation'],3],['runway','Runway','Company','United States',['Video generation'],2],['suno','Suno','Company','United States',['Music generation'],2],['palantir','Palantir AIP','Application','United States',['Enterprise AI','Defense'],3],['salesforce','Salesforce Einstein','Application','United States',['Enterprise CRM'],3],['servicenow','ServiceNow AI','Application','United States',['Enterprise workflows'],2],['harvey','Harvey','Company','United States',['Legal AI'],2],['tempus','Tempus AI','Company','United States',['Precision medicine'],2],['anduril','Anduril','Company','United States',['Defense systems'],3],['crowdstrike','CrowdStrike','Company','United States',['Cybersecurity AI'],2],['duolingo','Duolingo','Company','United States',['AI education'],1]],
 robotics:[
  ['tesla-ai','Tesla AI','Company','United States',['FSD','Optimus'],3],['waymo','Waymo','Company','United States',['Autonomous driving'],3],['figure','Figure AI','Company','United States',['Humanoid robots'],2],['physical-intelligence','Physical Intelligence','Company','United States',['Robot foundation models'],2],['boston-dynamics','Boston Dynamics','Company','United States',['Atlas','Spot'],2],['agility','Agility Robotics','Company','United States',['Digit'],2],['fanuc','FANUC','Company','Japan',['Industrial robots'],2],['abb-robotics','ABB Robotics','Company','Switzerland',['Industrial automation'],2],['dji','DJI','Company','China',['Drones'],2],['nvidia-isaac','NVIDIA Isaac','Platform','United States',['Robotics simulation','Jetson'],3]],
 markets:[
  ['enterprise','Enterprise','End market','Global',['Knowledge work','Operations'],3],['government','Government','End market','Global',['Public services'],3],['consumers','Consumers','End market','Global',['Personal AI'],3],['research','Research institutions','End market','Global',['Science','Education'],2],['defense','Defense','End market','Global',['National security'],3],['healthcare','Healthcare','End market','Global',['Care delivery','Drug discovery'],3],['finance','Financial services','End market','Global',['Banking','Trading'],3],['manufacturing','Manufacturing','End market','Global',['Factories','Industrial automation'],3],['media','Media & entertainment','End market','Global',['Creation','Distribution'],2],['software-teams','Software teams','End market','Global',['Development'],3]]
};

groups.models.push(['aleph-alpha','Aleph Alpha','Model lab','Germany',['Luminous'],1]);
groups.models.push(['xiaomi-mimo','Xiaomi MiMo Team','Model lab','China',['MiMo'],2]);

// Representative mainland-China vertical stack. These are concrete companies or
// products—not sector labels—selected to expose the domestic chain from wafer
// inputs through applications and physical AI.
groups.materials.push(
 ['nsig','National Silicon Industry Group','Company','China',['300 mm silicon wafers'],2],
 ['nata-opto','Nata Opto-electronic Materials','Company','China',['Photoresists','Electronic materials'],2],
 ['huate-gas','Huate Gas','Company','China',['Electronic specialty gases'],2],
 ['anji-microelectronics','Anji Microelectronics','Company','China',['CMP slurry','Functional wet chemicals'],2],
 ['jiangfeng-materials','Jiangfeng Electronic Materials','Company','China',['Ultra-high-purity sputtering targets'],2]
);
groups.equipment.push(
 ['smee','Shanghai Micro Electronics Equipment','Company','China',['Lithography systems'],3],
 ['hwatsing','Hwatsing Technology','Company','China',['CMP equipment','Wafer cleaning'],2],
 ['empyrean','Empyrean Technology','Company','China',['EDA software'],2]
);
groups.fabrication.push(
 ['tongfu','Tongfu Microelectronics','Company','China',['Assembly','Test','Advanced packaging'],2],
 ['huatian','Huatian Technology','Company','China',['Assembly','Test','Packaging'],2],
 ['nexchip','Nexchip Semiconductor','Company','China',['Display-driver foundry','Mature-node foundry'],2]
);
groups.compute.push(
 ['cambricon','Cambricon','Company','China',['MLU accelerators','NeuWare'],3],
 ['sophgo','SOPHGO','Company','China',['TPU accelerators','RISC-V processors'],2],
 ['iluvatar-corex','Iluvatar CoreX','Company','China',['General-purpose GPUs'],2]
);
groups.datacenter.push(
 ['huawei','Huawei','Company','China',['Atlas AI systems','Data-center networking'],3],
 ['h3c','H3C','Company','China',['AI servers','Data-center networking'],2],
 ['xfusion','xFusion','Company','China',['AI servers'],2],
 ['gds','GDS Holdings','Company','China',['Carrier-neutral data centers'],2],
 ['vnet','VNET Group','Company','China',['Carrier-neutral data centers'],2]
);
groups.cloud.push(
 ['tencent-cloud','Tencent Cloud','Company','China',['Cloud AI','Model services'],3],
 ['huawei-cloud','Huawei Cloud','Company','China',['ModelArts','AI compute'],3],
 ['baidu-ai-cloud','Baidu AI Cloud','Company','China',['Qianfan','AI compute'],3],
 ['volcano-engine','Volcano Engine','Company','China',['Machine learning platform','Doubao model services'],2]
);
groups.infra.push(
 ['modelscope','ModelScope','Platform','China',['Model hub','Inference','Fine-tuning'],3],
 ['siliconflow','SiliconFlow','Company','China',['Model inference','Model APIs'],2],
 ['lmdeploy','LMDeploy','Framework','China',['LLM serving','Quantization','Multi-node inference'],2],
 ['sglang','SGLang','Framework','United States',['LLM serving','Structured generation','Distributed inference'],3]
);
groups.developer.push(
 ['paddlepaddle','PaddlePaddle','Framework','China',['Deep learning framework'],3],
 ['mindspore','MindSpore','Framework','China',['Deep learning framework'],3],
 ['cann','CANN','Platform','China',['Ascend compiler','Operator libraries','AI runtime'],3],
 ['xtuner','XTuner','Framework','China',['Model training','Fine-tuning','PyTorch FSDP'],2],
 ['oneflow','OneFlow','Framework','China',['Distributed deep learning'],2],
 ['opencompass','OpenCompass','Platform','China',['Model evaluation'],2]
);
groups.models.push(
 ['step-3-5-flash','Step-3.5 Flash','Model','China',['Reasoning','Coding','Agents','256K context'],3],
 ['intern-s2-preview','Intern-S2 Preview','Model','China',['Scientific reasoning','Multimodal','Agents'],3],
 ['baichuan-m4','Baichuan-M4','Model','China',['Clinical reasoning','Continuous care'],2],
 ['kling-3','Kling 3.0','Model','China',['Video generation','Native audio','Multimodal editing'],3],
 ['vidu-q3','Vidu Q3','Model','China',['Video generation','Native audio','Reference consistency'],2],
 ['wan-2-7','Wan 2.7','Model','China',['Image generation','Video generation','Editing'],3],
 ['longcat-2','LongCat 2.0','Model','China',['Agentic coding','Long context','Mixture of experts'],3],
 ['sensenova-6-7','SenseNova 6.7 Flash-Lite','Model','China',['Multimodal agents','Efficient inference'],2]
);
groups.models.push(
 ['meituan-longcat','Meituan LongCat','Model lab','China',['LongCat models','Agentic coding','Multimodal generation'],3],
 ['sensetime','SenseTime','Company','China',['SenseNova foundation models','Computer vision','Multimodal AI'],3],
 ['shengshu-vidu','ShengShu AI / Vidu','Company','China',['Vidu models','Video generation','Multimodal generation'],2]
);
groups.agents.push(
 ['coze','Coze','Platform','China',['Agent development','Workflow automation'],3],
 ['dify','Dify','Platform','China',['Agentic application development'],2],
 ['qwen-agent','Qwen-Agent','Framework','China',['Tool use','Agent orchestration'],2],
 ['qianfan-agent','Qianfan AgentBuilder','Platform','China',['Enterprise agent development'],2]
);
groups.applications.push(
 ['doubao','Doubao','Application','China',['AI assistant'],3],
 ['kimi-app','Kimi','Application','China',['AI assistant','Research'],3],
 ['tencent-yuanbao','Tencent Yuanbao','Application','China',['AI assistant'],2],
 ['ernie-bot','ERNIE Bot','Application','China',['AI assistant'],2],
 ['deepseek-app','DeepSeek App','Application','China',['AI assistant'],3],
 ['iflytek-spark','iFLYTEK Spark','Application','China',['AI assistant','Education'],2],
 ['meitu','Meitu','Company','China',['AI imaging','Creative applications'],2]
);
groups.robotics.push(
 ['agibot','AgiBot','Company','China',['Humanoid robots'],2],
 ['galbot','Galbot','Company','China',['Embodied AI robots'],2],
 ['limx-dynamics','LimX Dynamics','Company','China',['Humanoid robots','Quadrupeds'],2],
 ['robotera','RobotEra','Company','China',['Humanoid robots'],2],
 ['apollo-go','Apollo Go','Application','China',['Robotaxi service'],3]
);
groups.compute.push(
 ['nvidia-vera-rubin','NVIDIA Vera Rubin','Technology','United States',['Rubin GPU','Vera CPU','NVLink 6','Spectrum-6'],3],
 ['amd-instinct-mi400','AMD Instinct MI400','Technology','United States',['MI455X','MI430X','HBM4'],3]
);
groups.agents.push(
 ['google-antigravity','Google Antigravity','Agent','United States',['Agentic development','Multi-step execution'],2],
 ['mistral-vibe','Mistral Vibe','Agent','France',['Coding agent','Long-horizon work'],2],
 ['minimax-mavis','MiniMax Mavis','Agent','China',['Agent teams','Long-running tasks'],2],
 ['cohere-north-automations','Cohere North Automations','Platform','Canada',['Enterprise workflow orchestration'],2]
);

const roleCopy={materials:'Provides the physical inputs and utilities that advanced computation requires.',equipment:'Enables semiconductor design, wafer processing, inspection, testing or optical connectivity.',fabrication:'Turns chip designs into packaged silicon systems at industrial scale.',compute:'Supplies the processing, memory or interconnect engines for AI workloads.',datacenter:'Assembles compute into operable facilities with servers, networks, power and cooling.',cloud:'Provides elastic access to compute, managed AI platforms and global infrastructure.',models:'Develops general-purpose foundation models that power downstream systems.',infra:'Operates the data, serving, evaluation and governance layer around models.',developer:'Gives builders the frameworks, runtimes and protocols used to create AI systems.',agents:'Wraps models in tools, context, memory and action loops.',applications:'Applies AI to a specific product, workflow or industry.',robotics:'Connects perception and foundation models to machines in the physical world.',markets:'Creates demand and defines real-world constraints for the AI economy.'};

const coreEntities=Object.entries(groups).filter(([layer])=>LAYERS.some(candidate=>candidate.id===layer)).flatMap(([layer,items])=>items.map((d,i)=>({
 id:d[0],name:d[1],type:d[2],layer,categories:[LAYERS.find(l=>l.id===layer).short],country:d[3],products:d[4],importanceLevel:d[5],cluster:layer,
 description:`${d[1]} is a structurally relevant part of the modern AI ecosystem, spanning ${d[4].join(', ')}.`,
 ecosystemRole:roleCopy[layer],
 whyItMatters:d[5]===3?`${d[1]} sits on a high-leverage part of the stack; changes in its capacity, technology or access can propagate across multiple layers.`:`${d[1]} illustrates an important capability and dependency within the broader AI value chain.`,
 website:null,positionIndex:i
})));

const slug=value=>value.toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const coreNames=new Set(coreEntities.map(e=>e.name.toLowerCase()));
const seenNames=new Set(coreNames);
const seenIds=new Set(coreEntities.map(e=>e.id));
const expandedEntities=[];
for(const cluster of ALL_EXPANSION_CLUSTERS){
 if(!LAYERS.some(layer=>layer.id===cluster.layer))continue;
 cluster.names.forEach((name,index)=>{
  if(seenNames.has(name.toLowerCase()))return;seenNames.add(name.toLowerCase());
  let id=slug(name),suffix=2;while(seenIds.has(id))id=`${slug(name)}-${suffix++}`;seenIds.add(id);
  const isModel=cluster.type==='Model family',softwareType=cluster.type==='Application cluster'?'Application':cluster.type==='Agent cluster'?'Agent':cluster.layer==='developer'?'Framework':cluster.layer==='infra'?'Platform':cluster.type==='Technology cluster'?'Technology':null;
  expandedEntities.push({id,name,type:isModel?'Model':softwareType||(['Project','Protocol','Standard','Technology','Platform'].some(t=>name.includes(t))?'Technology':'Company'),layer:cluster.layer,categories:[LAYERS.find(l=>l.id===cluster.layer).short,cluster.name],country:'Various',products:cluster.products,importanceLevel:index<2?2:1,cluster:cluster.id,
   description:isModel?`${name} is a distinct model product in the ${cluster.name.toLowerCase()} group, supporting ${cluster.products.join(', ')} capabilities.`:`${name} participates in ${cluster.name.toLowerCase()}, with relevance to ${cluster.products.join(', ')}.`,ecosystemRole:isModel?'A selectable model product linked separately to its developer, serving layer and representative physical dependency path.':roleCopy[cluster.layer],whyItMatters:isModel?`${name} is modeled separately from its lab so users can distinguish the model from the product and agent harnesses built around it.`:`${name} broadens the atlas beyond the market leaders and helps show the competitive depth, specialization and regional diversity of ${cluster.name.toLowerCase()}.`,website:null});
 });
}
const layerBudgets={materials:120,equipment:140,fabrication:90,compute:140,datacenter:220,cloud:100,models:300,infra:200,developer:150,agents:141,applications:250,robotics:150,markets:0};
const selectedExpanded=[];
for(const layer of LAYERS){
 const fixed=coreEntities.filter(e=>e.layer===layer.id).length;
 const limit=Math.max(0,layerBudgets[layer.id]-fixed),buckets=ALL_EXPANSION_CLUSTERS.filter(c=>c.layer===layer.id).map(c=>expandedEntities.filter(e=>e.cluster===c.id));
 let round=0;while(selectedExpanded.filter(e=>e.layer===layer.id).length<limit&&buckets.some(b=>b[round])){for(const bucket of buckets){if(bucket[round]&&selectedExpanded.filter(e=>e.layer===layer.id).length<limit)selectedExpanded.push(bucket[round])}round++}
}
// Layers and clusters organize the map, but are not themselves selectable entities.
// Likewise, end markets are category labels rather than companies, products or physical inputs.
export const entities=[...coreEntities,...selectedExpanded]
 .filter(entity=>entity.layer!=='markets'&&entity.id!=='computer-use')
 .map(entity=>{const geography=geographyFor(entity);return {...entity,geography,country:entity.country==='Various'&&geography!=='Various'?geography:entity.country}});
const entityOverrides={
 'kimi-k3':{description:'Moonshot AI’s open-weight frontier model for long-horizon coding, reasoning and knowledge work, with native vision and a one-million-token context window.',products:['2.8T parameters','1M context','Native vision','Kimi Delta Attention'],whyItMatters:'Kimi K3 is a major Chinese frontier-model release and a useful example of why model ownership must be separated from the infrastructure used to train and serve it.',website:'https://www.kimi.com/blog/kimi-k3'},
 nvidia:{products:['Vera Rubin','Blackwell','CUDA','NVLink','Spectrum-X'],website:'https://www.nvidia.com/en-us/data-center/technologies/rubin/'},
 amd:{products:['Instinct MI400','EPYC','ROCm'],website:'https://www.amd.com/en/products/accelerators/instinct/mi400.html'},
 'google-tpu':{name:'Google TPU 8t / 8i',products:['TPU 8t training accelerator','TPU 8i inference accelerator'],website:'https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/tpus-8t-8i-cloud-next/'}
 ,cann:{description:'CANN is Huawei’s software platform for compiling, optimizing and executing AI workloads on Ascend processors.',ecosystemRole:'Provides the compiler, operators, libraries and runtime that connect AI frameworks and inference engines to Ascend hardware.',whyItMatters:'CANN is a critical compatibility boundary: models and serving engines require matched CANN, TorchNPU and Ascend versions to run reliably.',website:'https://www.hiascend.com/en/software/cann'}
};
entities.forEach(entity=>Object.assign(entity,entityOverrides[entity.id]||{}));

// Entity profile audit. Profiles use role-appropriate leadership rather than
// forcing every business unit, laboratory or product into a conventional CEO field.
const entityProfileOverrides={
 smic:{founded:'2000',leadership:'Zhao Haijun and Liang Mong Song — Co-Chief Executive Officers',headquarters:'18 Zhangjiang Road, Pudong New Area, Shanghai 201203, China',website:'https://www.smics.com/en',provides:'Pure-play semiconductor foundry and process-technology services, including wafer fabrication from mature nodes through advanced logic.',howUsed:'Fabless chip designers send qualified designs to SMIC for manufacturing. In this atlas it is a fabrication route for Chinese accelerators and a customer of materials and process-equipment suppliers.',profileSources:['https://www.hkexnews.hk/listedco/listconews/sehk/2026/0408/2026040801181.pdf','https://star.sse.com.cn/star/en/marketdata/snapshot/c/5481443.shtml']},
 huawei:{founded:'1987',leadership:'Liang Hua — Board Chairman; executive authority rotates among Huawei’s deputy chairs',headquarters:'Huawei Base, Shenzhen 518129, China',website:'https://www.huawei.com/en/',provides:'ICT infrastructure, cloud services, Ascend AI compute, networking, digital power, devices and the MindSpore software stack.',howUsed:'Organizations use Huawei as a vertically integrated alternative spanning data-center equipment, AI accelerators, frameworks, cloud capacity and industry solutions.',profileSources:['https://www.huawei.com/en/media-center/company-facts','https://www.huawei.com/en/corporate-governance/']},
 'alibaba-cloud':{founded:'2009',leadership:'Eddie Wu — CEO of Alibaba Group and Alibaba Cloud',headquarters:'Hangzhou, Zhejiang, China; international headquarters in Singapore',website:'https://www.alibabacloud.com/',provides:'Elastic compute, storage, networking, databases, security, big-data services, Model Studio, Qwen APIs and custom-silicon cloud instances.',howUsed:'Developers and enterprises rent infrastructure, train or serve models, call Qwen and third-party models through APIs, and deploy applications across Alibaba’s cloud regions.',profileSources:['https://www.alibabacloud.com/en/about','https://www.alibabagroup.com/en-US/document-1796329702713982976']},
 'tencent-cloud':{founded:'Publicly launched in 2013',leadership:'Dowson Tong — President, Tencent Cloud and Smart Industries Group; Pony Ma — Tencent Chairman and CEO',headquarters:'Shenzhen, Guangdong, China',website:'https://www.tencentcloud.com/',provides:'Public cloud infrastructure, databases, media services, enterprise AI, Hunyuan APIs and model-as-a-service capabilities.',howUsed:'Enterprises use Tencent Cloud to host applications, consume Hunyuan and third-party models, build agents and connect AI services to Tencent’s communications and content ecosystem.',profileSources:['https://www.tencent.com/who-we-are/our-story/','https://www.tencent.com/en-us/about.html','https://www.tencent.com/tencent-unveils-hunyuan-its-proprietary-large-foundation-model-on-tencent-cloud/']},
 deepseek:{founded:'2023',leadership:'Liang Wenfeng — Founder and Chief Executive Officer',headquarters:'Hangzhou, Zhejiang, China',website:'https://www.deepseek.com/',provides:'Open-weight and hosted frontier language and reasoning models, plus an API and consumer assistant.',howUsed:'Developers download model weights for self-hosting or call DeepSeek’s API; end users access the same model family through the DeepSeek application and third-party cloud platforms.',profileSources:['https://www.deepseek.com/','https://apnews.com/article/f4908eaca221d601e31e7e3368778030']},
 'moonshot-ai':{founded:'Early 2023',leadership:'Yang Zhilin — Co-founder and Chief Executive Officer',headquarters:'13th Floor, Building 1, JD Technology Building, 76 Zhichun Road, Haidian District, Beijing, China',website:'https://www.moonshot.ai/',provides:'The Kimi family of frontier multimodal, reasoning and coding models, distributed through an assistant, APIs and open weights.',howUsed:'Individuals use the Kimi assistant for research and knowledge work; developers integrate Kimi through APIs or deploy available open-weight releases in their own infrastructure.',profileSources:['https://www.moonshot.ai/about','https://apnews.com/article/0d8a5e268deb11a673f4d444fc597cc5']},
 minimax:{founded:'2021',leadership:'Yan Junjie — Founder, Chairman, Chief Executive Officer and Chief Technology Officer',headquarters:'1 Xitucheng Road, Haidian District, Beijing, China',website:'https://www.minimax.io/',provides:'Multimodal foundation models for text, speech, music, images and video, alongside consumer applications and developer APIs.',howUsed:'Developers call MiniMax APIs or embed its models in applications; consumers use its products for conversational, creative and agentic tasks.',profileSources:['https://ir.minimax.cn/en/corporate-information/management','https://ir.minimax.cn/en/investor-resources/ir-contacts','https://www.minimax.io/']},
 qwen:{founded:'Model family introduced in 2023',leadership:'Alibaba AI business — not a separately incorporated company; parent CEO: Eddie Wu',headquarters:'Alibaba headquarters, Hangzhou, Zhejiang, China',website:'https://qwen.ai/',provides:'Alibaba’s family of open-weight and hosted language, multimodal, coding and reasoning models.',howUsed:'Developers download Qwen weights, fine-tune them, or consume managed versions through Alibaba Cloud Model Studio; users access Qwen through Alibaba applications.',profileSources:['https://www.alibabagroup.com/en-US/about-alibaba-businesses-1951035128754995200','https://qianwen-res.oss-cn-beijing.aliyuncs.com/QWEN_TECHNICAL_REPORT.pdf','https://www.alibabacloud.com/help/en/model-studio/what-is-model-studio']}
};
entities.forEach(entity=>Object.assign(entity,entityProfileOverrides[entity.id]||{}));
// Audited timeline anchors. Organization dates are founding years; product and
// technology dates are public launch years. Unlisted entities remain “unknown.”
const entityTimelineAudit={
 asml:[1984,'Founded'],tsmc:[1987,'Founded'],nvidia:[1993,'Founded'],amd:[1969,'Founded'],intel:[1968,'Founded'],broadcom:[1991,'Founded'],arm:[1990,'Founded'],smic:[2000,'Founded'],huawei:[1987,'Founded'],cambricon:[2016,'Founded'],cerebras:[2015,'Founded'],groq:[2016,'Founded'],'moore-threads':[2020,'Founded'],'biren-technology':[2019,'Founded'],enflame:[2018,'Founded'],
 aws:[2006,'Cloud launched'],azure:[2010,'Cloud launched'],'google-cloud':[2008,'Cloud platform launched'],'oracle-cloud':[2016,'Cloud launched'],coreweave:[2017,'Founded'],'alibaba-cloud':[2009,'Cloud launched'],'tencent-cloud':[2013,'Public launch'],'huawei-cloud':[2017,'Public-cloud launch'],'baidu-ai-cloud':[2015,'AI-cloud launch'],
 openai:[2015,'Founded'],anthropic:[2021,'Founded'],deepmind:[2010,'Founded'],'meta-ai':[2013,'Research organization launched'],xai:[2023,'Founded'],mistral:[2023,'Founded'],cohere:[2019,'Founded'],deepseek:[2023,'Founded'],qwen:[2023,'Model family launched'],'moonshot-ai':[2023,'Founded'],'zhipu-ai':[2019,'Founded'],minimax:[2021,'Founded'],stepfun:[2023,'Founded'],'meituan-longcat':[2025,'Model team launched'],sensetime:[2014,'Founded'],'shanghai-ai-laboratory':[2020,'Founded'],'baichuan-ai':[2023,'Founded'],'shengshu-vidu':[2023,'Founded'],
 pytorch:[2016,'Public launch'],tensorflow:[2015,'Public launch'],jax:[2018,'Public launch'],cuda:[2006,'Public launch'],triton:[2019,'Open-source launch'],vllm:[2023,'Public launch'],sglang:[2024,'Public launch'],lmdeploy:[2023,'Public launch'],cann:[2018,'Platform launch'],mindspore:[2020,'Open-source launch'],paddlepaddle:[2016,'Open-source launch'],'hugging-face':[2016,'Founded'],langchain:[2022,'Public launch'],llamaindex:[2022,'Public launch'],ray:[2017,'Public launch'],kubernetes:[2014,'Public launch'],mcp:[2024,'Public launch'],
 chatgpt:[2022,'Product launched'],'claude-code':[2025,'Product launched'],cursor:[2023,'Product launched'],'github-copilot':[2021,'Product launched'],perplexity:[2022,'Founded'],midjourney:[2022,'Product launched'],runway:[2018,'Founded'],suno:[2022,'Founded'],
 'deepseek-r1':[2025,'Model released'],'step-3-5-flash':[2026,'Model released'],'intern-s2-preview':[2026,'Model released'],'baichuan-m4':[2026,'Model released'],'kling-3':[2026,'Model released'],'vidu-q3':[2026,'Model released'],'wan-2-7':[2026,'Model released'],'longcat-2':[2026,'Model released'],'sensenova-6-7':[2026,'Model released'],'kimi-k3':[2026,'Model released'],'minimax-m2-7':[2026,'Model released'],'glm-5-2':[2026,'Model released'],
 waymo:[2009,'Project founded'],'tesla-ai':[2016,'AI program milestone'],figure:[2022,'Founded'],'physical-intelligence':[2024,'Founded'],'boston-dynamics':[1992,'Founded'],'nvidia-isaac':[2018,'Platform launched'],unitree:[2016,'Founded'],ubtech:[2012,'Founded'],dji:[2006,'Founded'],'apollo-go':[2017,'Platform launched']
};
for(const [id,[timelineYear,timelineBasis]] of Object.entries(entityTimelineAudit)){const entity=entities.find(item=>item.id===id);if(entity)Object.assign(entity,{timelineYear,timelineBasis,timelinePrecision:'audited'})}
const layerIndexes=new Map();entities.forEach(e=>{const i=layerIndexes.get(e.layer)||0;e.positionIndex=i;layerIndexes.set(e.layer,i+1)});

const R=(source,target,type,explanation,status='confirmed',sourceUrl=null)=>({source,target,type,explanation,status,sourceUrl});
// Virtual aliases let relationships mention an organization capability without adding duplicate visible nodes.
export const aliases={'microsoft-investment':'azure','apple-silicon':'mlx'};
const coreRelationships=[
 R('shin-etsu','tsmc','SUPPLIES','Supplies semiconductor silicon and process materials.'),R('sumco','samsung-foundry','SUPPLIES','Supplies silicon wafers.','reported'),R('jsr','tsmc','SUPPLIES','Photoresists support advanced patterning.','reported'),R('ajinomoto','cowos','SUPPLIES','ABF films are used in advanced chip substrates.','inferred'),R('power-grid','coreweave','SUPPLIES','Electricity is a binding input for AI data centers.','representative'),R('cooling-water','vertiv','SUPPLIES','Cooling loops reject heat from dense AI systems.','representative'),R('fiber','corning','SUPPLIES','Raw optical materials become data-center fiber.','representative'),
 R('asml','tsmc','PROVIDES_EQUIPMENT_TO','EUV systems enable advanced process nodes.'),R('asml','samsung-foundry','PROVIDES_EQUIPMENT_TO','EUV lithography supports advanced logic.'),R('asml','intel-foundry','PROVIDES_EQUIPMENT_TO','EUV and High-NA systems support leading-edge roadmaps.'),R('applied-materials','tsmc','PROVIDES_EQUIPMENT_TO','Deposition and process equipment support wafer fabrication.'),R('lam-research','tsmc','PROVIDES_EQUIPMENT_TO','Etch and deposition systems shape chip structures.'),R('kla','tsmc','PROVIDES_EQUIPMENT_TO','Inspection and metrology control defects.'),R('tokyo-electron','tsmc','PROVIDES_EQUIPMENT_TO','Coat/develop and etch systems support patterning.'),R('screen','tsmc','PROVIDES_EQUIPMENT_TO','Wafer cleaning is used between process steps.','reported'),R('disco','ase','PROVIDES_EQUIPMENT_TO','Dicing and grinding support packaging workflows.','representative'),R('advantest','sk-hynix','PROVIDES_EQUIPMENT_TO','Test systems validate memory devices.','reported'),R('synopsys','nvidia','SUPPLIES','EDA tools and IP support complex chip design.'),R('cadence','broadcom','SUPPLIES','EDA platforms support custom silicon design.'),R('arm','aws-trainium','SUPPLIES','Arm CPU architecture participates in AWS server platforms.','inferred'),
 R('tsmc','nvidia','MANUFACTURES','TSMC manufactures leading NVIDIA accelerators.'),R('tsmc','amd','MANUFACTURES','TSMC manufactures leading AMD compute dies.'),R('tsmc','google-tpu','MANUFACTURES','Representative foundry relationship for Google accelerators.','reported'),R('tsmc','aws-trainium','MANUFACTURES','Representative foundry relationship for AWS custom silicon.','reported'),R('tsmc','maia','MANUFACTURES','Representative manufacturing path for Maia.','reported'),R('tsmc','broadcom','MANUFACTURES','Manufactures advanced Broadcom silicon.','reported'),R('samsung-foundry','meta-mtia','MANUFACTURES','Reported manufacturing relationship for MTIA.','reported'),R('intel-foundry','intel','MANUFACTURES','Intel manufactures its own processor portfolio.'),R('cowos','nvidia','SUPPLIES','CoWoS integrates GPU dies and HBM at high bandwidth.'),R('ase','amd','SUPPLIES','Advanced packaging supports multi-die compute products.','reported'),
 R('sk-hynix','nvidia','PROVIDES_MEMORY_TO','HBM is paired with NVIDIA accelerators.'),R('micron','nvidia','PROVIDES_MEMORY_TO','Micron supplies HBM for accelerator platforms.'),R('samsung-memory','amd','PROVIDES_MEMORY_TO','HBM supports high-bandwidth accelerator memory.','reported'),R('broadcom','google-tpu','DESIGNS','Broadcom has supported Google custom accelerator programs.','reported'),R('marvell','aws-trainium','PARTNERS_WITH','Custom silicon and infrastructure collaboration.','reported'),R('nvidia','supermicro','SUPPLIES','GPUs and networking form the core of AI server systems.'),R('nvidia','dell','SUPPLIES','Accelerators power Dell AI server platforms.'),R('nvidia','hpe','SUPPLIES','Accelerators power HPE AI systems.'),R('amd','dell','SUPPLIES','Instinct and EPYC power AI systems.'),R('arista','coreweave','PROVIDES_NETWORKING_TO','High-speed Ethernet connects AI clusters.','reported'),R('vertiv','coreweave','SUPPLIES','Power and cooling support dense GPU deployments.','reported'),R('schneider','digital-realty','SUPPLIES','Power and cooling infrastructure supports data centers.','representative'),R('corning','arista','SUPPLIES','Optical fiber connects high-bandwidth networks.','representative'),
 R('coreweave','openai','HOSTS','GPU cloud capacity has supported model workloads.','reported'),R('nvidia','aws','SUPPLIES','AWS offers large fleets of NVIDIA GPU instances.'),R('nvidia','azure','SUPPLIES','Azure AI supercomputers use NVIDIA accelerators.'),R('nvidia','google-cloud','SUPPLIES','Google Cloud offers NVIDIA GPU instances.'),R('nvidia','oracle-cloud','SUPPLIES','OCI offers NVIDIA GPU clusters.'),R('aws-trainium','aws','DESIGNS','AWS designs Trainium and Inferentia for its cloud.'),R('google-tpu','google-cloud','DESIGNS','Google designs TPUs and exposes them through its cloud.'),R('maia','azure','DESIGNS','Microsoft designs Maia accelerators for Azure.'),
 R('openai','azure','TRAINS_ON','Azure infrastructure has supported OpenAI training and serving.'),R('anthropic','aws','TRAINS_ON','AWS is Anthropic’s primary cloud and training partner.'),R('anthropic','google-cloud','TRAINS_ON','Anthropic also uses Google Cloud infrastructure.','confirmed'),R('deepmind','google-cloud','RUNS_ON','Gemini training and serving uses Google infrastructure.'),R('meta-ai','nvidia','TRAINS_ON','Meta trains large models on NVIDIA GPU clusters.'),R('xai','nvidia','TRAINS_ON','xAI trains models on large NVIDIA GPU clusters.'),R('mistral','azure','PARTNERS_WITH','Azure distributes and supports Mistral models.'),R('cohere','oracle-cloud','PARTNERS_WITH','OCI provides infrastructure and distribution for Cohere.'),R('deepseek','nvidia','TRAINS_ON','Public technical reports describe NVIDIA GPU training.','reported'),R('openai','microsoft-investment','INVESTS_IN','Microsoft is a major OpenAI investor and partner.','representative'),
 R('pytorch','openai','INTEGRATES_WITH','PyTorch is widely used for model research and training.','representative'),R('pytorch','meta-ai','DEPENDS_ON','PyTorch originated at Meta and underpins its AI stack.'),R('jax','deepmind','INTEGRATES_WITH','JAX is central to Google research workloads.'),R('cuda','nvidia','DEPENDS_ON','CUDA is NVIDIA’s vertically integrated software platform.'),R('triton','cuda','RUNS_ON','Triton compiles GPU kernels for CUDA-class hardware.'),R('vllm','cuda','RUNS_ON','vLLM commonly serves models on CUDA GPUs.'),R('llamacpp','meta-ai','INTEGRATES_WITH','llama.cpp popularized efficient local execution of Llama-family models.','representative'),R('mlx','apple-silicon','RUNS_ON','MLX targets Apple silicon.','representative'),R('hugging-face','pytorch','INTEGRATES_WITH','Transformers integrates deeply with PyTorch.'),R('ray','kubernetes','RUNS_ON','Ray clusters are commonly orchestrated with Kubernetes.','representative'),R('databricks','aws','RUNS_ON','Databricks operates across AWS and other clouds.'),R('databricks','azure','RUNS_ON','Azure Databricks is a first-party integrated service.'),R('pinecone','aws','RUNS_ON','Managed vector search uses cloud infrastructure.','representative'),R('together-ai','nvidia','RUNS_ON','Inference and training services use GPU infrastructure.','representative'),R('fireworks','nvidia','RUNS_ON','Inference services depend on GPU infrastructure.','representative'),R('openrouter','openai','INTEGRATES_WITH','Routes requests to OpenAI models.'),R('openrouter','anthropic','INTEGRATES_WITH','Routes requests to Anthropic models.'),
 R('chatgpt','openai','USES_MODEL_FROM','ChatGPT is the primary product interface for OpenAI models.'),R('claude-code','anthropic','USES_MODEL_FROM','Claude Code wraps Claude models in a coding harness.'),R('cursor','openai','USES_MODEL_FROM','Cursor supports OpenAI models among multiple providers.'),R('cursor','anthropic','USES_MODEL_FROM','Cursor supports Claude models among multiple providers.'),R('github-copilot','openai','USES_MODEL_FROM','Copilot has used OpenAI models alongside other models.'),R('mcp','anthropic','DESIGNS','Anthropic introduced MCP as an open protocol.'),R('claude-code','mcp','INTEGRATES_WITH','MCP connects Claude Code to external tools and context.'),R('openai-agents','openai','USES_MODEL_FROM','SDK orchestrates OpenAI models and tools.'),R('semantic-kernel','azure','INTEGRATES_WITH','Microsoft framework integrates Azure AI models and services.'),R('browser-use','computer-use','INTEGRATES_WITH','Browser control provides an action surface for agents.'),
 R('perplexity','openai','USES_MODEL_FROM','Perplexity uses multiple foundation model providers.','reported'),R('perplexity','anthropic','USES_MODEL_FROM','Perplexity offers Claude-family models.','reported'),R('adobe','stability','COMPETES_WITH','Commercial creative model ecosystems overlap.','representative'),R('notion','openai','USES_MODEL_FROM','Notion has integrated OpenAI model capabilities.','reported'),R('salesforce','openai','PARTNERS_WITH','Enterprise model integrations connect Salesforce and OpenAI.','reported'),R('palantir','azure','RUNS_ON','Palantir AIP integrates with Azure environments.','reported'),R('anduril','defense','SUPPLIES','Autonomous systems serve defense customers.'),R('tempus','healthcare','SUPPLIES','AI systems support clinical and life-sciences workflows.'),R('github-copilot','software-teams','SUPPLIES','Coding assistance serves software development teams.'),R('chatgpt','consumers','SUPPLIES','ChatGPT delivers general AI capabilities to consumers.'),R('servicenow','enterprise','SUPPLIES','AI augments enterprise workflows.'),
 R('nvidia-isaac','nvidia','RUNS_ON','Isaac and Jetson extend NVIDIA compute into robotics.'),R('figure','nvidia-isaac','INTEGRATES_WITH','Humanoid development uses NVIDIA simulation and compute tools.','reported'),R('physical-intelligence','google-cloud','TRAINS_ON','Robot foundation model research depends on cloud-scale training.','inferred'),R('waymo','deepmind','PARTNERS_WITH','Both are part of Alphabet’s AI ecosystem.','representative'),R('tesla-ai','nvidia','DEPENDS_ON','NVIDIA hardware has historically supported training; Tesla also designs custom compute.','reported'),R('fanuc','manufacturing','SUPPLIES','Industrial robots automate manufacturing.'),R('abb-robotics','manufacturing','SUPPLIES','Robotics systems automate industrial processes.'),R('dji','consumers','SUPPLIES','Drone platforms serve consumer and commercial markets.'),
 R('enterprise','aws','DEPENDS_ON','Enterprises consume AI through cloud infrastructure.','representative'),R('research','hugging-face','DEPENDS_ON','Open model repositories accelerate reproducible research.','representative'),R('finance','databricks','DEPENDS_ON','Data and AI platforms support financial workloads.','representative'),R('healthcare','openai','USES_MODEL_FROM','Healthcare organizations experiment with foundation models.','representative')
];

const entityByName=new Map(entities.map(e=>[e.name.toLowerCase(),e]));
const currentIds=new Set(entities.map(e=>e.id));
const curatedExpansionRelationships=CURATED_EXPANSION_RELATIONSHIPS.map(([source,target,type,explanation,status])=>R(source,target,type,explanation,status)).filter(r=>currentIds.has(r.source)&&currentIds.has(r.target));
const modelSourceUrls={openai:'https://platform.openai.com/docs/models',anthropic:'https://www.anthropic.com/news',deepmind:'https://ai.google.dev/gemini-api/docs/models','meta-ai':'https://ai.meta.com/llama/get-started/',xai:'https://docs.x.ai/developers/models','moonshot-ai':'https://www.kimi.com/code/docs/en/kimi-code/models.html',deepseek:'https://api-docs.deepseek.com/quick_start/pricing',qwen:'https://qwenlm.github.io/blog/','zhipu-ai':'https://www.z.ai/','bytedance-seed':'https://seed.bytedance.com/','tencent-hunyuan':'https://hunyuan.tencent.com/','baidu-ernie':'https://yiyan.baidu.com/',minimax:'https://www.minimax.io/',mistral:'https://docs.mistral.ai/models/',cohere:'https://docs.cohere.com/docs/models',stability:'https://stability.ai/','black-forest-labs':'https://blackforestlabs.ai/',midjourney:'https://www.midjourney.com/',runway:'https://runwayml.com/',suno:'https://suno.com/','allen-institute-for-ai':'https://allenai.org/olmo','technology-innovation-institute':'https://falconllm.tii.ae/','ibm-granite':'https://www.ibm.com/granite',databricks:'https://www.databricks.com/research/mosaic',cerebras:'https://www.cerebras.ai/',evolutionaryscale:'https://www.evolutionaryscale.ai/','luma-ai':'https://lumalabs.ai/',pika:'https://pika.art/',ideogram:'https://ideogram.ai/','arc-institute':'https://arcinstitute.org/',elevenlabs:'https://elevenlabs.io/',salesforce:'https://www.salesforce.com/ai-research/'};
Object.assign(modelSourceUrls,{'aleph-alpha':'https://www.aleph-alpha.com/',nvidia:'https://www.nvidia.com/en-us/clara/bionemo/'});
Object.assign(modelSourceUrls,{udio:'https://www.udio.com/',ai21:'https://www.ai21.com/jamba'});
Object.assign(modelSourceUrls,{openai:'https://developers.openai.com/api/docs/models',anthropic:'https://platform.claude.com/docs/en/about-claude/models/overview','zhipu-ai':'https://z.ai/blog/glm-5.3',minimax:'https://www.minimax.io/news',mistral:'https://mistral.ai/news/',cohere:'https://cohere.com/blog/command-a-plus','xiaomi-mimo':'https://github.com/XiaomiMiMo'});
Object.assign(modelSourceUrls,{stepfun:'https://github.com/stepfun-ai/Step-3.5-Flash','shanghai-ai-laboratory':'https://github.com/InternLM/Intern-S1','baichuan-ai':'https://arxiv.org/abs/2606.08982','kuaishou-kling':'https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-30-model-ushering-era-where-everyone-can-be','shengshu-vidu':'https://platform.vidu.com/docs/model-map','alibaba-wan':'https://www.alibabacloud.com/help/en/model-studio/newly-released-models'});
Object.assign(modelSourceUrls,{'meituan-longcat':'https://tech.meituan.com/2026/07/12/LongCat-2.0-Open-source.html',sensetime:'https://www.sensetime.com/en/research/'});
const modelOwnershipRelationships=[];
for(const [owner,productList] of Object.entries(MODEL_PRODUCT_OWNERS))for(const name of productList.split(',').map(x=>x.trim())){const product=entityByName.get(name.toLowerCase());if(currentIds.has(owner)&&product)modelOwnershipRelationships.push(R(owner,product.id,'DEVELOPS',`${entities.find(e=>e.id===owner).name} develops the ${product.name} model or model family.`,'confirmed',modelSourceUrls[owner]||null))}
const managedModelRuntimes={'intern-s2-preview':'lmdeploy','baichuan-m4':'baichuan-ai','kling-3':'kuaishou-kling','vidu-q3':'shengshu-vidu','wan-2-7':'alibaba-cloud','longcat-2':'sglang','sensenova-6-7':'sensetime'};
const modelRuntimeRelationships=entities.filter(e=>e.type==='Model').map(e=>{const target=managedModelRuntimes[e.id]||'vllm';return R(e.id,target,'RUNS_ON',target==='vllm'?`${e.name} can be served by a concrete inference runtime such as vLLM; deployment support varies by model and installation.`:`${e.name} is delivered through ${entities.find(entity=>entity.id===target)?.name||target} as its documented serving or managed deployment path.`,'representative')});
const physicalStackRelationships=[
 R('cowos','tsmc','DEPENDS_ON','CoWoS packages dies fabricated by TSMC into physical accelerator systems.','representative'),
 R('asml','photoresists','DEPENDS_ON','ASML lithography systems expose photoresists during semiconductor patterning.','representative'),
 R('photoresists','silicon','APPLIED_TO','Photoresists are applied to silicon wafers during chip fabrication.','representative')
].filter(r=>currentIds.has(r.source)&&currentIds.has(r.target));

const chinaEcosystemRelationships=[
 R('huawei','huawei-ascend','DEVELOPS','Huawei develops the Ascend AI-computing stack, spanning processors, systems and software.','confirmed','https://www-file.huawei.com/-/media/CORP2020/annual-report/2020-pdf/annual_report_2020_en.pdf'),
 R('huawei','mindspore','DEVELOPS','Huawei identifies MindSpore as the framework layer of its full-stack Ascend ecosystem.','confirmed','https://www-file.huawei.com/-/media/CORP2020/annual-report/2020-pdf/annual_report_2020_en.pdf'),
 R('mindspore','huawei-ascend','RUNS_ON','MindSpore and Ascend are co-optimized parts of Huawei’s AI computing stack.','confirmed','https://www-file.huawei.com/-/media/CORPORATE/Local-site/mx/pdf/2019_Huawei_Annual_Report.pdf'),
 R('huawei','cann','DEVELOPS','Huawei develops CANN as the compiler, operator-library and runtime layer for Ascend AI processors.','confirmed','https://www.huawei.com/en/news/2025/9/hc-xu-keynote-speech'),
 R('cann','huawei-ascend','RUNS_ON','CANN is the foundational software platform required to compile and execute AI workloads on Ascend hardware.','confirmed','https://github.com/vllm-project/vllm-ascend/blob/main/docs/source/installation.md'),
 R('vllm','cann','DEPENDS_ON','The official vLLM Ascend compatibility stack requires CANN alongside TorchNPU and supported Ascend hardware.','confirmed','https://github.com/vllm-project/vllm-ascend/blob/main/docs/source/installation.md'),
 R('pytorch','cann','INTEGRATES_WITH','Ascend deployments pair PyTorch with TorchNPU and CANN as one versioned compatibility stack.','confirmed','https://github.com/vllm-project/vllm-ascend/blob/main/docs/source/installation.md'),
 R('deepseek','huawei-ascend','RUNS_ON','Huawei states that its teams optimized Ascend 910B and 910C inference for DeepSeek workloads during 2025.','confirmed','https://www.huawei.com/en/news/2025/9/hc-xu-keynote-speech'),
 R('deepseek','huawei-cloud','DEPLOYED_BY','Huawei Cloud documents deployment architectures for DeepSeek inference and states that it supported the model’s fast-growing traffic.','confirmed','https://support.huaweicloud.com/intl/en-us/deepseek-aislt/aislt-deepseek.pdf'),
 R('cambricon','smic','DEPENDS_ON','Cambricon is fabless and therefore depends on external semiconductor manufacturing; this edge represents the domestic foundry path rather than a disclosed customer contract.','representative','https://forum.cambricon.com/index.php?a=show&c=index&catid=159&id=904&m=content'),
 R('cambricon','deepseek','INTEGRATES_WITH','Cambricon documents model adaptation across its MLU hardware and software stack.','confirmed','https://developer.cambricon.com/index/article/index.html'),
 R('baidu-ai-cloud','baidu-kunlun','DEVELOPS','Baidu describes Kunlun chips as the hardware foundation of its AI stack.','confirmed','https://ir.baidu.com/static-files/6053f234-9dbd-4afb-b300-7fcba9cb6f27'),
 R('baidu-ai-cloud','paddlepaddle','DEVELOPS','Baidu describes PaddlePaddle as the software foundation of its AI stack.','confirmed','https://ir.baidu.com/static-files/6053f234-9dbd-4afb-b300-7fcba9cb6f27'),
 R('paddlepaddle','baidu-kunlun','RUNS_ON','PaddlePaddle and Kunlun form Baidu’s paired software and hardware foundation.','confirmed','https://ir.baidu.com/static-files/6053f234-9dbd-4afb-b300-7fcba9cb6f27'),
 R('alibaba-cloud','modelscope','DEVELOPS','Alibaba Cloud launched and operates the ModelScope open-source model community.','confirmed','https://www.alibabacloud.com/blog/601320'),
 R('modelscope','qwen','INTEGRATES_WITH','ModelScope distributes Qwen models for download, fine-tuning, evaluation and deployment.','confirmed','https://www.alibabacloud.com/help/en/pai/use-cases/secure-encryption-inference-service'),
 R('tencent-cloud','tencent-zixiao','DEVELOPS','Tencent’s cloud ecosystem includes its internally developed Zixiao accelerator.','reported','https://www.tencent.com/en-us/articles/2201344.html'),
 R('doubao','doubao-model','USES_MODEL_FROM','Doubao is ByteDance’s assistant product built around the distinct Doubao model family.','confirmed','https://www.doubao.com/legal/feature_intro'),
 R('kimi-app','moonshot-ai','USES_MODEL_FROM','Kimi is Moonshot AI’s user-facing assistant and research product.','confirmed','https://www.kimi.com/'),
 R('tencent-yuanbao','tencent-hunyuan','USES_MODEL_FROM','Tencent Yuanbao is a user-facing assistant powered by Tencent’s model ecosystem.','confirmed','https://yuanbao.tencent.com/'),
 R('ernie-bot','baidu-ernie','USES_MODEL_FROM','Baidu states that ERNIE Bot is powered by its in-house ERNIE foundation model.','confirmed','https://ir.baidu.com/static-files/6053f234-9dbd-4afb-b300-7fcba9cb6f27'),
 R('deepseek-app','deepseek','USES_MODEL_FROM','DeepSeek’s official application exposes its model family to end users.','confirmed','https://www.deepseek.com/'),
 R('qwen-agent','qwen','USES_MODEL_FROM','Qwen-Agent is Alibaba’s open-source framework for building tool-using applications with Qwen models.','confirmed','https://github.com/QwenLM/Qwen-Agent'),
 R('qianfan-agent','baidu-ernie','USES_MODEL_FROM','Qianfan AgentBuilder provides an enterprise application layer for Baidu’s model ecosystem.','confirmed','https://cloud.baidu.com/product/qianfan.html'),
 R('shanghai-ai-laboratory','lmdeploy','DEVELOPS','Shanghai AI Laboratory develops LMDeploy as the efficient inference and deployment engine in the Intern model toolchain.','confirmed','https://www.shlab.org.cn/intern-ai'),
 R('shanghai-ai-laboratory','xtuner','DEVELOPS','Shanghai AI Laboratory develops XTuner as the training and fine-tuning engine in the Intern model toolchain.','confirmed','https://www.shlab.org.cn/intern-ai'),
 R('shanghai-ai-laboratory','opencompass','DEVELOPS','Shanghai AI Laboratory develops OpenCompass as the evaluation layer spanning models, compute systems, embodied AI and safety.','confirmed','https://www.shlab.org.cn/intern-ai'),
 R('xtuner','pytorch','DEPENDS_ON','XTuner’s current training engine is built on PyTorch FSDP for distributed model training and fine-tuning.','confirmed','https://www.shlab.org.cn/intern-ai'),
 R('lmdeploy','cuda','RUNS_ON','LMDeploy documents CUDA GPU deployment as a supported high-performance inference backend.','confirmed','https://github.com/InternLM/lmdeploy'),
 R('sglang','cuda','RUNS_ON','SGLang provides a production serving backend for large language and multimodal models on CUDA GPUs.','confirmed','https://github.com/sgl-project/sglang'),
 R('apollo-go','baidu-ai-cloud','DEPENDS_ON','Apollo Go is a concrete downstream autonomous-mobility product in Baidu’s AI ecosystem.','confirmed','https://www.apollo.auto/apollo-go'),
 R('coze','bytedance-seed','INTEGRATES_WITH','Coze is ByteDance’s agent-development platform and integrates models from its ecosystem.','confirmed','https://www.coze.com/')
].filter(r=>currentIds.has(r.source)&&currentIds.has(r.target));

// China dependency audit, batch 1: physical materials, wafer-fab equipment,
// fabrication and advanced packaging. Named customer disclosures are confirmed;
// sector-level deployment disclosures remain explicitly representative.
const chinaPhysicalDependencyRelationships=[
 R('huate-gas','smic','SUPPLIES','Huate Gas identifies SMIC among the integrated-circuit manufacturers supplied with specialty electronic gases.','confirmed','https://huategas.com/en/BusinessProfile/index.aspx'),
 R('huate-gas','hua-hong-semiconductor','SUPPLIES','Huate Gas identifies Hua Hong among the integrated-circuit manufacturers supplied with specialty electronic gases.','confirmed','https://huategas.com/en/BusinessProfile/index.aspx'),
 R('huate-gas','ymtc','SUPPLIES','Huate Gas identifies Yangtze Memory among customers whose specialty-gas import constraints it has addressed.','confirmed','https://www.huategas.com/BusinessProfile/index.aspx'),
 R('huate-gas','cxmt','SUPPLIES','Huate Gas identifies CXMT among customers whose specialty-gas import constraints it has addressed.','confirmed','https://www.huategas.com/BusinessProfile/index.aspx'),
 R('hwatsing','smic','PROVIDES_EQUIPMENT_TO','Hwatsing documents delivery of China’s first domestically produced 12-inch CMP system to SMIC.','confirmed','https://hwatsing.com/news_detail/294.html'),
 R('naura-technology','smic','PROVIDES_EQUIPMENT_TO','NAURA reports that its etch, deposition, furnace and cleaning systems run in mainstream Chinese logic production; SMIC is shown as a representative domestic logic-fab path, not a disclosed system-level contract.','representative','https://www.naura.com/content/details_30_2081.html'),
 R('naura-technology','hua-hong-semiconductor','PROVIDES_EQUIPMENT_TO','NAURA equipment is in volume production at mainstream Chinese integrated-circuit fabs; this edge represents its role in domestic specialty and logic fabrication.','representative','https://www.naura.com/content/details_30_2081.html'),
 R('naura-technology','ymtc','PROVIDES_EQUIPMENT_TO','NAURA states that its systems support 3D NAND and are deployed in mainstream chip-production lines; YMTC is a representative domestic NAND manufacturing path.','representative','https://www.naura.com/content/details_30_2081.html'),
 R('naura-technology','cxmt','PROVIDES_EQUIPMENT_TO','NAURA states that its systems support DRAM and are deployed in mainstream chip-production lines; CXMT is a representative domestic DRAM manufacturing path.','representative','https://www.naura.com/content/details_30_2081.html'),
 R('amec','smic','PROVIDES_EQUIPMENT_TO','AMEC etch and deposition systems serve advanced integrated-circuit production lines; SMIC is a representative domestic foundry deployment path because AMEC does not name the customer in this disclosure.','representative','https://www.amec-inc.com/uploads/files/20250611/17496080859885.pdf'),
 R('amec','ymtc','PROVIDES_EQUIPMENT_TO','AMEC describes its high-aspect-ratio etch equipment as supporting advanced memory manufacturing; YMTC is a representative domestic 3D-NAND path.','representative','https://static.amec-inc.com/uploads/files/20250611/17496080859885.pdf'),
 R('piotech','smic','PROVIDES_EQUIPMENT_TO','Piotech deposition and bonding equipment is installed across Chinese wafer-manufacturing production lines; SMIC represents the disclosed integrated-circuit foundry application.','representative','https://piotech.cn/index.php/About/about.html'),
 R('piotech','ymtc','PROVIDES_EQUIPMENT_TO','Piotech identifies advanced memory among the production applications for its deposition equipment; YMTC represents the domestic NAND path.','representative','https://piotech.cn/index.php/About/about.html'),
 R('anji-microelectronics','smic','SUPPLIES','Anji CMP slurries and wet chemicals are mass-produced for logic-chip lines; SMIC is a representative domestic logic-fabrication path rather than a named customer disclosure.','representative','https://www.anjimicro.com/en/jiejuefangan.html'),
 R('anji-microelectronics','ymtc','SUPPLIES','Anji documents volume use of its chemicals in 3D NAND processes; YMTC is a representative domestic NAND-fabrication path rather than a named customer disclosure.','representative','https://www.anjimicro.com/en/jiejuefangan.html'),
 R('nsig','smic','SUPPLIES','NSIG reports that its 300mm silicon wafers have qualified with mainstream domestic semiconductor customers; SMIC is a representative foundry path because customers are not named.','representative','https://www.nsig.com/en'),
 R('jcet','cambricon','PROVIDES_PACKAGING_TO','JCET provides advanced packaging for AI and high-performance-computing chips; Cambricon is shown as a representative domestic accelerator packaging path, not a disclosed customer contract.','representative','https://www.jcetglobal.com/en/site/detailscon/908'),
 R('jcet','biren-technology','PROVIDES_PACKAGING_TO','JCET provides advanced packaging for AI and high-performance-computing chips; Biren is shown as a representative domestic accelerator packaging path, not a disclosed customer contract.','representative','https://www.jcetglobal.com/en/site/detailscon/908')
].filter(r=>currentIds.has(r.source)&&currentIds.has(r.target));

// China dependency audit, batch 2: domestic cloud, custom silicon and model
// distribution. These edges connect otherwise isolated compute and cloud nodes.
const chinaCloudDependencyRelationships=[
 R('huawei','huawei-cloud','DEVELOPS','Huawei operates Huawei Cloud as the cloud delivery layer for its enterprise and AI platforms.','confirmed','https://www.huawei.com/en/news/2023/9/ascend-aicloud-service'),
 R('huawei-cloud','huawei-ascend','RUNS_ON','Huawei Cloud’s Ascend AI Cloud Service provides Ascend-powered AI compute from its cloud data centers.','confirmed','https://www.huawei.com/en/news/2023/9/ascend-aicloud-service'),
 R('alibaba-cloud','alibaba-yitian','DEVELOPS','Alibaba Cloud deploys its in-house Yitian 710 processor in ECS instance families.','confirmed','https://www.alibabacloud.com/help/en/ecs/user-guide/summary-of-the-migration'),
 R('alibaba-cloud','alibaba-hanguang','DEVELOPS','Alibaba developed Hanguang 800 as an inference accelerator for Alibaba Cloud infrastructure and production AI workloads.','confirmed','https://www.alibabacloud.com/blog/compare-and-compute-high-performance-computing-with-alibaba-cloud_595807'),
 R('qwen','alibaba-cloud','RUNS_ON','Alibaba Cloud Model Studio provides the Qwen model family through managed and OpenAI-compatible APIs.','confirmed','https://www.alibabacloud.com/help/en/model-studio/what-is-model-studio'),
 R('deepseek','alibaba-cloud','DEPLOYED_BY','Alibaba Cloud Model Studio lists DeepSeek among the third-party model families available as managed services.','confirmed','https://www.alibabacloud.com/help/en/model-studio/what-is-model-studio'),
 R('moonshot-ai','alibaba-cloud','DEPLOYED_BY','Alibaba Cloud Model Studio lists Kimi among the third-party model families available as managed services.','confirmed','https://www.alibabacloud.com/help/en/model-studio/what-is-model-studio'),
 R('tencent-hunyuan','tencent-cloud','RUNS_ON','Tencent exposes Hunyuan to enterprises through Tencent Cloud APIs and its model-as-a-service platform.','confirmed','https://www.tencent.com/tencent-unveils-hunyuan-its-proprietary-large-foundation-model-on-tencent-cloud/'),
 R('doubao-model','volcano-engine','DEPLOYED_BY','Volcano Engine provides Doubao model APIs and the cloud-native serving layer used for enterprise deployment.','confirmed','https://www.volcengine.com/product/doubao'),
 R('bytedance-seed','volcano-engine','DEPLOYED_BY','Volcano Engine is ByteDance’s enterprise distribution and API platform for the Doubao/Seed model portfolio.','confirmed','https://www.volcengine.com/product/doubao')
].filter(r=>currentIds.has(r.source)&&currentIds.has(r.target));

// China dependency audit, batch 3: embodied-AI development and simulation.
const chinaRoboticsDependencyRelationships=[
 R('agibot','nvidia-isaac','INTEGRATES_WITH','NVIDIA identifies AGIBOT as building with Isaac simulation and adopting Isaac GR00T models for humanoid deployment.','confirmed','https://nvidianews.nvidia.com/news/nvidia-and-global-robotics-leaders-take-physical-ai-to-the-real-world'),
 R('fourier-intelligence','nvidia-isaac','INTEGRATES_WITH','NVIDIA identifies Fourier Intelligence among humanoid developers using its comprehensive Isaac and GR00T robotics platform.','confirmed','https://nvidianews.nvidia.com/news/foundation-model-isaac-robotics-platform'),
 R('galbot','nvidia-isaac','INTEGRATES_WITH','NVIDIA lists Galbot in its humanoid robotics ecosystem for Isaac GR00T development workflows.','confirmed','https://www.nvidia.com/en-in/use-cases/humanoid-robots/'),
 R('robotera','nvidia-isaac','INTEGRATES_WITH','NVIDIA includes RobotEra among humanoid developers in its physical-AI ecosystem; this edge records platform participation rather than an exclusive dependency.','reported','https://images.nvidia.com/aem-dam/en-zz/Solutions/events/ces/CES_2025_Highlights_Deck.pdf')
].filter(r=>currentIds.has(r.source)&&currentIds.has(r.target));

// China dependency audit, batch 4: open-model distribution, evaluation and APIs.
const chinaModelDistributionRelationships=[
 R('01-ai','hugging-face','DEPLOYED_BY','01.AI distributes Yi open-weight models and documentation through its official Hugging Face organization.','confirmed','https://huggingface.co/01-ai/models'),
 R('01-ai','modelscope','DEPLOYED_BY','01.AI’s official Yi documentation lists ModelScope as a model-weight distribution channel.','confirmed','https://huggingface.co/01-ai/Yi-6B'),
 R('shanghai-ai-laboratory','modelscope','DEPLOYED_BY','Shanghai AI Laboratory publishes InternLM model weights through its verified ModelScope organization.','confirmed','https://modelscope.cn/models/Shanghai_AI_Laboratory/internlm2_5-7b'),
 R('alibaba-cloud','alibaba-wan','DEVELOPS','Alibaba Cloud develops and distributes the Wan generative-video model family through its AI model ecosystem.','confirmed','https://www.alibabacloud.com/blog/alibaba-cloud-releases-wan-series-generative-ai-model-for-video-creation_598729'),
 R('baichuan-ai','vllm','RUNS_ON','Baichuan provides OpenAI-compatible model APIs; vLLM is shown as a representative self-hosted serving path rather than the disclosed backend of Baichuan’s managed API.','representative','https://platform.baichuan-ai.com/docs'),
 R('stepfun','vllm','RUNS_ON','StepFun exposes OpenAI- and Anthropic-compatible model endpoints; vLLM represents an interoperable self-hosted serving path, not StepFun’s disclosed managed-service backend.','representative','https://platform.stepfun.ai/docs/en/step-plan/quick-start')
].filter(r=>currentIds.has(r.source)&&currentIds.has(r.target));

// China dependency audit, batch 5: domestic accelerator software compatibility.
const chinaAcceleratorCompatibilityRelationships=[
 R('deepseek','moore-threads','RUNS_ON','Moore Threads publishes supported DeepSeek deployments and model-specific optimizations for its MUSA GPU stack.','confirmed','https://en.mthreads.com/product/S5000'),
 R('qwen','moore-threads','RUNS_ON','Moore Threads states that its S5000 GPU platform provides optimized support for Qwen architectures.','confirmed','https://en.mthreads.com/product/S5000'),
 R('vllm','moore-threads','RUNS_ON','Moore Threads lists vLLM among the inference frameworks natively supported by its MUSA software stack.','confirmed','https://en.mthreads.com/product/S5000'),
 R('siliconflow','moore-threads','RUNS_ON','Moore Threads documents SiliconFlow’s high-performance inference engine running with the MUSA software stack on S5000 systems.','confirmed','https://en.mthreads.com/product/S5000')
].filter(r=>currentIds.has(r.source)&&currentIds.has(r.target));

const currentEcosystemRelationships=[
 R('nvidia','nvidia-vera-rubin','DEVELOPS','NVIDIA develops the Vera Rubin rack-scale AI platform and its Rubin GPU, Vera CPU, networking and infrastructure processors.','confirmed','https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform'),
 R('nvidia-vera-rubin','azure','DEPLOYED_BY','Microsoft is among the cloud providers deploying Vera Rubin systems for next-generation AI infrastructure.','confirmed','https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer'),
 R('nvidia-vera-rubin','coreweave','DEPLOYED_BY','CoreWeave is integrating Rubin-based systems into its AI cloud platform.','confirmed','https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer'),
 R('amd','amd-instinct-mi400','DEVELOPS','AMD develops the Instinct MI400 accelerator family for frontier AI, sovereign AI and HPC.','confirmed','https://www.amd.com/en/products/accelerators/instinct/mi400.html'),
 R('google-cloud','google-tpu','DEVELOPS','Google Cloud introduced TPU 8t for training and TPU 8i for agentic inference.','confirmed','https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/tpus-8t-8i-cloud-next/'),
 R('deepmind','google-antigravity','DEVELOPS','Google offers Antigravity as an agent for multi-step development workflows through its current Gemini interactions platform.','confirmed','https://ai.google.dev/gemini-api/docs/interactions-overview'),
 R('mistral','mistral-vibe','DEVELOPS','Mistral develops Vibe for long-horizon productivity and coding work.','confirmed','https://mistral.ai/news/'),
 R('minimax','minimax-mavis','DEVELOPS','MiniMax renamed its upgraded long-running agent Mavis and positions it around agent teams and sustained tasks.','confirmed','https://www.minimax.io/news'),
 R('cohere','cohere-north-automations','DEVELOPS','Cohere develops North Automations for enterprise workflow orchestration.','confirmed','https://cohere.com/blog')
 ,R('openai','openai-codex','DEVELOPS','OpenAI develops Codex as a suite of software-agent products spanning CLI, cloud, IDE and broader professional workflows.','confirmed','https://openai.com/index/codex-for-every-role-tool-workflow/')
].filter(r=>currentIds.has(r.source)&&currentIds.has(r.target));

// Evidence-backed corrections are keyed to the originally declared edge. Keeping
// this audit table separate makes later research batches reviewable and prevents
// unsourced narrative edits from silently changing graph semantics.
const relationshipAudit={
 'step-3-5-flash|vllm|RUNS_ON':{status:'confirmed',sourceUrl:'https://github.com/vllm-project/recipes/blob/main/StepFun/Step-3.5-Flash.md',explanation:'The official vLLM recipes repository provides production serving configurations for Step-3.5 Flash on supported NVIDIA GPUs.'},
 'intern-s2-preview|lmdeploy|RUNS_ON':{status:'confirmed',sourceUrl:'https://github.com/InternLM/Intern-S1',explanation:'The official Intern model repository provides LMDeploy deployment guides and model artifacts for Intern-S2 Preview.'},
 'baichuan-m4|baichuan-ai|RUNS_ON':{status:'confirmed',sourceUrl:'https://arxiv.org/abs/2606.08982',explanation:'Baichuan-M4 is delivered as Baichuan Intelligence’s clinical-grade medical agent system; public self-hosted runtime details are not disclosed.'},
 'kling-3|kuaishou-kling|RUNS_ON':{status:'confirmed',sourceUrl:'https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-30-model-ushering-era-where-everyone-can-be',explanation:'Kuaishou delivers Kling 3.0 through the Kling AI managed product and does not publicly disclose its underlying serving hardware.'},
 'vidu-q3|shengshu-vidu|RUNS_ON':{status:'confirmed',sourceUrl:'https://platform.vidu.com/docs/model-map',explanation:'ShengShu exposes Vidu Q3 through the Vidu application and managed API platform.'},
 'wan-2-7|alibaba-cloud|RUNS_ON':{status:'confirmed',sourceUrl:'https://www.alibabacloud.com/help/en/model-studio/newly-released-models',explanation:'Alibaba Cloud Model Studio lists Wan 2.7 image and video generation endpoints as managed model services.'},
 'longcat-2|sglang|RUNS_ON':{status:'confirmed',sourceUrl:'https://github.com/meituan-longcat/LongCat-2.0',explanation:'Meituan’s official LongCat 2.0 repository provides SGLang deployment paths for both GPU and domestic-NPU platforms.'},
 'sensenova-6-7|sensetime|RUNS_ON':{status:'confirmed',sourceUrl:'https://www.sensetime.com/en/research/',explanation:'SenseTime delivers SenseNova 6.7 Flash-Lite through its managed SenseNova model platform; lower-level serving hardware is not publicly disclosed.'},
 'deepseek-v4-pro|vllm|RUNS_ON':{status:'confirmed',sourceUrl:'https://github.com/vllm-project/vllm/blob/main/docs/models/supported_models.md',explanation:'vLLM’s official supported-model table lists the DeepSeek V4 architecture and DeepSeek-V4-Pro for text generation.'},
 'deepseek-v4-flash|vllm|RUNS_ON':{status:'confirmed',sourceUrl:'https://github.com/vllm-project/vllm/blob/main/docs/models/supported_models.md',explanation:'vLLM’s official supported-model table lists DeepSeek-V4-Flash under its DeepSeek V4 implementation.'},
 'deepseek-r1|vllm|RUNS_ON':{status:'confirmed',sourceUrl:'https://github.com/vllm-project/vllm/blob/main/docs/models/supported_models.md',explanation:'vLLM officially lists DeepSeek-R1 under its supported DeepSeek V3 architecture.'},
 'qwen3|vllm|RUNS_ON':{status:'confirmed',sourceUrl:'https://github.com/vllm-project/vllm/blob/main/docs/models/supported_models.md',explanation:'vLLM officially supports Qwen3 dense and mixture-of-experts model architectures.'},
 'qwen-vl|vllm|RUNS_ON':{status:'confirmed',sourceUrl:'https://github.com/vllm-project/vllm/blob/main/docs/models/supported_models.md',explanation:'vLLM officially supports Qwen vision-language architectures including Qwen2-VL, Qwen2.5-VL and Qwen3-VL.'},
 'glm-5-2|vllm|RUNS_ON':{status:'confirmed',sourceUrl:'https://github.com/vllm-project/vllm-ascend/blob/main/docs/source/user_guide/support_matrix/supported_models.md',explanation:'The official vLLM Ascend support matrix lists GLM-5.2 for Ascend A2 and A3 hardware.'},
 'minimax-m2-7|vllm|RUNS_ON':{status:'confirmed',sourceUrl:'https://github.com/vllm-project/recipes/blob/main/MiniMax/MiniMax-M2.md',explanation:'The official vLLM recipes repository provides a serving configuration for MiniMax-M2.7.'},
 'minimax-m3|vllm|RUNS_ON':{status:'reported',sourceUrl:'https://github.com/vllm-project/vllm/issues/46049',explanation:'vLLM tracks MiniMax-M3 reasoning-parser behavior, demonstrating active runtime support while documenting a current output-parsing limitation.'},
 'unitree-robotics|nvidia-isaac|INTEGRATES_WITH':{status:'confirmed',sourceUrl:'https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-NVIDIA-Isaac-GR00T-Reference-Humanoid-Robot-for-Academic-Research/default.aspx',explanation:'NVIDIA’s humanoid reference workflow combines Unitree hardware with Jetson Thor compute and the Isaac GR00T development platform.'},
 'shin-etsu|tsmc|SUPPLIES':{sourceUrl:'https://pr.tsmc.com/system/files/newspdf/attachment/d35a3490c76e4dd278e9975c4785daa0e415edc4/2022%20Excellent%20Performance%20Award%20Press%20Release%20%28E%29_final_wmn.pdf',explanation:'TSMC identifies Shin-Etsu Handotai as a silicon-wafer supplier supporting advanced-material development and production.'},
 'sumco|samsung-foundry|SUPPLIES':{sourceUrl:'https://www.sumcosi.com/english/csr/pdf/csr_rep15en.pdf',status:'confirmed',explanation:'Samsung Electronics recognized SUMCO as a supplier with consecutive Best Partner awards for its silicon-wafer business.'},
 'jsr|tsmc|SUPPLIES':{sourceUrl:'https://pr.tsmc.com/system/files/newspdf/attachment/d35a3490c76e4dd278e9975c4785daa0e415edc4/2022%20Excellent%20Performance%20Award%20Press%20Release%20%28E%29_final_wmn.pdf',status:'confirmed',explanation:'TSMC recognizes JSR for lithography-material development and production support.'},
 'asml|tsmc|PROVIDES_EQUIPMENT_TO':{sourceUrl:'https://www.asml.com/en/news/stories/2022/busting-asml-myths'},
 'asml|samsung-foundry|PROVIDES_EQUIPMENT_TO':{sourceUrl:'https://www.asml.com/en/news/stories/2022/busting-asml-myths'},
 'asml|intel-foundry|PROVIDES_EQUIPMENT_TO':{sourceUrl:'https://www.asml.com/en/news/press-releases/2026/high-na-euv-reaches-new-readiness-milestone'},
 'applied-materials|tsmc|PROVIDES_EQUIPMENT_TO':{sourceUrl:'https://pr.tsmc.com/system/files/newspdf/attachment/855e25066dbc50b8b1fb227027996bb56183da2a/2024%20Supply%20Chain%20Management%20Forum%20Press%20Release%20%28E%29_Final_wmn.pdf'},
 'lam-research|tsmc|PROVIDES_EQUIPMENT_TO':{sourceUrl:'https://pr.tsmc.com/english/news/3086'},
 'kla|tsmc|PROVIDES_EQUIPMENT_TO':{sourceUrl:'https://pr.tsmc.com/english/news/3086'},
 'tokyo-electron|tsmc|PROVIDES_EQUIPMENT_TO':{sourceUrl:'https://pr.tsmc.com/english/news/3086'},
 'screen|tsmc|PROVIDES_EQUIPMENT_TO':{sourceUrl:'https://pr.tsmc.com/system/files/newspdf/attachment/855e25066dbc50b8b1fb227027996bb56183da2a/2024%20Supply%20Chain%20Management%20Forum%20Press%20Release%20%28E%29_Final_wmn.pdf',status:'confirmed'},
 'disco|ase|PROVIDES_EQUIPMENT_TO':{sourceUrl:'https://www.disco.co.jp/jp/corporate/outline/prizes.html',status:'confirmed',explanation:'ASE has recognized DISCO as an outstanding supplier; DISCO provides dicing and grinding equipment used in semiconductor packaging.'},
 'advantest|sk-hynix|PROVIDES_EQUIPMENT_TO':{sourceUrl:'https://www.thelec.net/news/articleView.html?idxno=5202',explanation:'Industry reporting identifies Advantest as an incumbent wafer-tester supplier in SK hynix’s memory supply chain.'},
 'synopsys|nvidia|SUPPLIES':{type:'PARTNERS_WITH',sourceUrl:'https://nvidianews.nvidia.com/news/nvidia-and-synopsys-announce-strategic-partnership-to-revolutionize-engineering-and-design',explanation:'NVIDIA and Synopsys disclose a strategic engineering and design partnership; the public evidence does not establish a simple one-way supply relationship.'},
 'cadence|broadcom|SUPPLIES':{sourceUrl:'https://www.cadence.com/en_US/home/company/newsroom/press-releases/pr/2023/cadence-collaborates-with-broadcom-to-implement-ai-driven.html',explanation:'Broadcom publicly states that it uses a portfolio of Cadence solutions across its business units.'},
 'arm|aws-trainium|SUPPLIES':{remove:true},
 'ajinomoto|cowos|SUPPLIES':{remove:true},
 'power-grid|coreweave|SUPPLIES':{remove:true},
 'cooling-water|vertiv|SUPPLIES':{remove:true},
 'fiber|corning|SUPPLIES':{remove:true},
 'intel-foundry|intel|MANUFACTURES':{sourceUrl:'https://www.intel.com/content/www/us/en/company-overview/company-overview.html',explanation:'Intel states that it both designs and manufactures its own technology through Intel Foundry.'},
 'ase|amd|SUPPLIES':{sourceUrl:'https://ase.aseglobal.com/public/downloads/en/ASE_2011_CSR_EN_Final.pdf',status:'confirmed',explanation:'ASE reports receiving an AMD customer appreciation award, supporting an assembly, test, or packaging supplier relationship.'},
 'tsmc|nvidia|MANUFACTURES':{sourceUrl:'https://pr.tsmc.com/english/news/1408',explanation:'NVIDIA and TSMC jointly disclosed that TSMC manufactures NVIDIA-designed processors.'},
 'tsmc|amd|MANUFACTURES':{sourceUrl:'https://ir.amd.com/financial-information/sec-filings/content/0000002488-26-000018/amd-20251227.htm',explanation:'AMD identifies TSMC as the foundry manufacturing its newest IC products and its 7nm-and-smaller CPU and GPU portfolio.'},
 'tsmc|google-tpu|MANUFACTURES':{sourceUrl:'https://www.itpro.com/infrastructure/tpus-googles-home-advantage'},
 'tsmc|aws-trainium|MANUFACTURES':{sourceUrl:'https://techcrunch.com/2026/03/22/an-exclusive-tour-of-amazons-trainium-lab-the-chip-thats-won-over-anthropic-openai-even-apple/'},
 'tsmc|maia|MANUFACTURES':{sourceUrl:'https://azure.microsoft.com/en-us/blog/azure-maia-for-the-era-of-ai-from-silicon-to-software-to-systems/',status:'confirmed',explanation:'Microsoft states that Maia 100 is made on TSMC’s 5nm node with advanced packaging.'},
 'tsmc|broadcom|MANUFACTURES':{sourceUrl:'https://investors.broadcom.com/static-files/58d9236c-142c-4878-8f18-b862132c125e',status:'confirmed',explanation:'Broadcom identifies TSMC as a key foundry and says it increasingly relies on TSMC for advanced-node manufacturing.'},
 'samsung-foundry|meta-mtia|MANUFACTURES':{source:'tsmc',target:'meta-mtia',sourceUrl:'https://ai.meta.com/blog/next-generation-meta-training-inference-accelerator-AI-MTIA/',status:'confirmed',explanation:'Meta identifies TSMC 7nm and 5nm as the process technologies used for the first two MTIA generations; this replaces the unsupported Samsung Foundry edge.'},
 'carl-zeiss-smt|asml|SUPPLIES':{sourceUrl:'https://www.asml.com/en/news/press-releases/2016/zeiss-and-asml-strengthen-partnership-for-next-generation-of-euv-lithography',explanation:'Carl Zeiss SMT supplies the high-performance optical subsystem used in ASML lithography scanners.'},
 'cymer|asml|SUPPLIES':{sourceUrl:'https://www.asml.com/en/company/about-asml/cymer',explanation:'Cymer, an ASML subsidiary, develops lithography light sources used with ASML systems.'},
 'trumpf|asml|SUPPLIES':{sourceUrl:'https://www.asml.com/en/news/stories/2022/making-euv-lab-to-fab',explanation:'ASML identifies TRUMPF lasers as critical modules used in the EUV light source.'},
 'besi|tsmc|PROVIDES_EQUIPMENT_TO':{remove:true},
 'kioxia|nvidia|PROVIDES_MEMORY_TO':{remove:true},
 'aws-trainium|aws|DESIGNS':{source:'aws',target:'aws-trainium',sourceUrl:'https://aws.amazon.com/silicon-innovation/',explanation:'AWS designs Trainium and Inferentia machine-learning accelerators for Amazon EC2.'},
 'google-tpu|google-cloud|DESIGNS':{source:'google-cloud',target:'google-tpu',sourceUrl:'https://cloud.google.com/tpu',explanation:'Google develops its custom TPU accelerators and makes them available through Google Cloud.'},
 'maia|azure|DESIGNS':{source:'azure',target:'maia',sourceUrl:'https://azure.microsoft.com/en-us/blog/azure-maia-for-the-era-of-ai-from-silicon-to-software-to-systems/',explanation:'Microsoft developed Maia as an in-house accelerator optimized for Azure AI infrastructure.'},
 'cowos|nvidia|SUPPLIES':{source:'tsmc',target:'nvidia',type:'PROVIDES_PACKAGING_TO',status:'reported',sourceUrl:'https://investor.tsmc.com/english/annual-reports',explanation:'TSMC provides advanced packaging services including CoWoS; NVIDIA use is publicly reported but not identified by customer in TSMC’s annual report.'},
 'cowos|tsmc|DEPENDS_ON':{source:'tsmc',target:'cowos',type:'DEVELOPS',sourceUrl:'https://investor.tsmc.com/english/annual-reports',explanation:'CoWoS is a TSMC-developed advanced packaging technology service.'},
 'asml|photoresists|DEPENDS_ON':{type:'EXPOSES',sourceUrl:'https://www.asml.com/en/news/stories/2022/busting-asml-myths',explanation:'ASML lithography systems pattern silicon wafers that have been treated with photoresist.'},
 'photoresists|silicon|APPLIED_TO':{sourceUrl:'https://www.asml.com/en/news/stories/2022/busting-asml-myths'}
};
const auditedRelationship=relationship=>({...relationship,...(relationshipAudit[`${relationship.source}|${relationship.target}|${relationship.type}`]||{})});
// Temporal coverage is intentionally explicit. An absent date means “not yet
// audited,” not “always existed”; the time UI keeps those edges visible but dim.
const relationshipTimeAudit={
 'openai|azure|TRAINS_ON':{activeFrom:2019},
 'anthropic|aws|TRAINS_ON':{activeFrom:2023},
 'chatgpt|openai|USES_MODEL_FROM':{activeFrom:2022},
 'claude-code|anthropic|USES_MODEL_FROM':{activeFrom:2025},
 'mcp|anthropic|DESIGNS':{activeFrom:2024},
 'claude-code|mcp|INTEGRATES_WITH':{activeFrom:2024},
 'deepseek-app|deepseek|USES_MODEL_FROM':{activeFrom:2025},
 'kimi-app|moonshot-ai|USES_MODEL_FROM':{activeFrom:2023},
 'qwen-agent|qwen|USES_MODEL_FROM':{activeFrom:2023},
 'qwen|alibaba-cloud|RUNS_ON':{activeFrom:2023},
 'deepseek|alibaba-cloud|DEPLOYED_BY':{activeFrom:2025},
 'moonshot-ai|alibaba-cloud|DEPLOYED_BY':{activeFrom:2023},
 'tencent-hunyuan|tencent-cloud|RUNS_ON':{activeFrom:2023},
 'huawei|cann|DEVELOPS':{activeFrom:2018},
 'cann|huawei-ascend|RUNS_ON':{activeFrom:2018},
 'vllm|cann|DEPENDS_ON':{activeFrom:2025},
 'pytorch|cann|INTEGRATES_WITH':{activeFrom:2019},
 'deepseek|huawei-ascend|RUNS_ON':{activeFrom:2025},
 'deepseek|huawei-cloud|DEPLOYED_BY':{activeFrom:2025},
 'deepseek-v4-pro|vllm|RUNS_ON':{activeFrom:2026},
 'deepseek-v4-flash|vllm|RUNS_ON':{activeFrom:2026},
 'deepseek-r1|vllm|RUNS_ON':{activeFrom:2025},
 'qwen3|vllm|RUNS_ON':{activeFrom:2025},
 'qwen-vl|vllm|RUNS_ON':{activeFrom:2024},
 'glm-5-2|vllm|RUNS_ON':{activeFrom:2026},
 'minimax-m2-7|vllm|RUNS_ON':{activeFrom:2026},
 'minimax-m3|vllm|RUNS_ON':{activeFrom:2026},
 'step-3-5-flash|vllm|RUNS_ON':{activeFrom:2026},
 'intern-s2-preview|lmdeploy|RUNS_ON':{activeFrom:2026},
 'baichuan-m4|baichuan-ai|RUNS_ON':{activeFrom:2026},
 'kling-3|kuaishou-kling|RUNS_ON':{activeFrom:2026},
 'vidu-q3|shengshu-vidu|RUNS_ON':{activeFrom:2026},
 'wan-2-7|alibaba-cloud|RUNS_ON':{activeFrom:2026},
 'longcat-2|sglang|RUNS_ON':{activeFrom:2026},
 'sensenova-6-7|sensetime|RUNS_ON':{activeFrom:2026},
 'shanghai-ai-laboratory|lmdeploy|DEVELOPS':{activeFrom:2023},
 'shanghai-ai-laboratory|xtuner|DEVELOPS':{activeFrom:2023},
 'shanghai-ai-laboratory|opencompass|DEVELOPS':{activeFrom:2023},
 'nvidia-vera-rubin|nvidia|DEPENDS_ON':{activeFrom:2026},
 'amd-instinct-mi400|amd|DEPENDS_ON':{activeFrom:2026}
};
const temporalRelationship=relationship=>({...relationship,...(relationshipTimeAudit[`${relationship.source}|${relationship.target}|${relationship.type}`]||{})});
export const relationships=[...coreRelationships,...curatedExpansionRelationships,...modelOwnershipRelationships,...modelRuntimeRelationships,...physicalStackRelationships,...chinaEcosystemRelationships,...chinaPhysicalDependencyRelationships,...chinaCloudDependencyRelationships,...chinaRoboticsDependencyRelationships,...chinaModelDistributionRelationships,...chinaAcceleratorCompatibilityRelationships,...currentEcosystemRelationships]
 .filter(r=>(currentIds.has(r.source)||aliases[r.source])&&(currentIds.has(r.target)||aliases[r.target]))
 .map(auditedRelationship)
 .map(temporalRelationship)
 .filter(r=>!r.remove);

export const relationTypes=[...new Set(relationships.map(r=>r.type))].sort();

export const journeys=[
 {id:'chatgpt-gpu',title:'How ChatGPT reaches a GPU',kicker:'8 stops · 4 min',nodes:['chatgpt','openai','azure','nvidia','sk-hynix','tsmc','asml','photoresists'],summary:'Follow a representative serving path from a conversational product down through models, cloud, accelerators, memory, fabrication and lithography.'},
 {id:'nvidia',title:'Inside the NVIDIA ecosystem',kicker:'7 stops · 3 min',nodes:['nvidia','cuda','sk-hynix','tsmc','cowos','supermicro','coreweave'],summary:'See why NVIDIA’s position combines accelerators, software, memory bandwidth, packaging, systems and cloud distribution.'},
 {id:'chip',title:'How an AI chip is made',kicker:'8 stops · 4 min',nodes:['silicon','photoresists','asml','applied-materials','kla','tsmc','cowos','nvidia'],summary:'Move from purified matter and process chemistry to tools, fabrication, packaging and a finished accelerator.'},
 {id:'asml-app',title:'From ASML to an AI application',kicker:'7 stops · 4 min',nodes:['asml','tsmc','nvidia','supermicro','azure','openai','chatgpt'],summary:'Trace how lithography capacity propagates upward into a specific AI product.'},
 {id:'hyperscaler',title:'The hyperscaler stack',kicker:'7 stops · 3 min',nodes:['aws','aws-trainium','azure','maia','google-cloud','google-tpu','oracle-cloud'],summary:'Compare cloud platforms that increasingly design their own accelerators.'},
 {id:'models',title:'The model layer',kicker:'7 stops · 3 min',nodes:['kimi-k3','gpt-5-6-sol','claude-fable-5','gemini-3-7-flash','grok-4-5','deepseek-v4-pro','glm-5-3'],summary:'Compare major current model families as product entities, then inspect their labs and physical dependency paths.'},
 {id:'agents',title:'The agent / harness layer',kicker:'7 stops · 3 min',nodes:['claude-code','cursor','mcp','openai-agents','langchain','browser-use','computer-use'],summary:'Separate the model from the harness that gives it context, tools and agency.'},
 {id:'robotics',title:'Physical AI & robotics',kicker:'6 stops · 3 min',nodes:['physical-intelligence','nvidia-isaac','figure','tesla-ai','waymo','fanuc'],summary:'Follow intelligence from foundation models and simulation into machines.'},
 {id:'bottlenecks',title:'Who controls the bottlenecks?',kicker:'7 stops · 4 min',nodes:['asml','tsmc','cowos','sk-hynix','nvidia','vertiv','power-grid'],summary:'Inspect concentrated control points in lithography, fabrication, packaging, memory, accelerators, cooling and power.'}
];

export const representativePaths={
 chatgpt:['chatgpt','openai','vllm','azure','nvidia','sk-hynix','tsmc','asml'],
 perplexity:['perplexity','openai','vllm','aws','nvidia','sk-hynix','tsmc','asml'],
 'claude-code':['claude-code','anthropic','vllm','aws','aws-trainium','sk-hynix','tsmc','asml'],
 cursor:['cursor','anthropic','vllm','aws','nvidia','sk-hynix','tsmc','asml'],
 'nvidia-isaac':['nvidia-isaac','pytorch','cuda','nvidia','sk-hynix','tsmc','asml','photoresists']
};

const modelPathOverrides={
 'intern-s2-preview':['intern-s2-preview','lmdeploy','cuda','nvidia','tsmc','asml','photoresists','silicon'],
 'baichuan-m4':['baichuan-m4','baichuan-ai','vllm','cuda','nvidia','tsmc','asml','photoresists','silicon'],
 'kling-3':['kling-3','kuaishou-kling'],
 'vidu-q3':['vidu-q3','shengshu-vidu'],
 'wan-2-7':['wan-2-7','alibaba-cloud'],
 'longcat-2':['longcat-2','sglang','cuda','nvidia','tsmc','asml','photoresists','silicon'],
 'sensenova-6-7':['sensenova-6-7','sensetime']
};
for(const model of entities.filter(e=>e.type==='Model'))representativePaths[model.id]=modelPathOverrides[model.id]||[model.id,'vllm','cuda','nvidia','tsmc','asml','photoresists','silicon'];
