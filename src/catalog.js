// Broad ecosystem catalog. Entries here are taxonomy members, not implied
// supplier/customer contracts. Direct commercial relationships remain curated
// in data.js and in CURATED_EXPANSION_RELATIONSHIPS below.
const C=(layer,id,name,type,products,names)=>({layer,id,name,type,products,names:names.split(',').map(x=>x.trim()).filter(Boolean)});

export const EXPANSION_CLUSTERS=[
 C('materials','silicon-wafers','Silicon wafers & crystal growth','Supply cluster',['300mm wafers','Polysilicon'],'GlobalWafers,Siltronic,SK Siltron,Wafer Works,Okmetic,Soitec,OCI,Tokuyama,Hemlock Semiconductor,Wacker Chemie'),
 C('materials','process-gases','Electronic gases','Supply cluster',['Neon','Argon','Fluorine chemistry'],'Linde,Air Liquide,Air Products,Taiyo Nippon Sanso,Matheson,SK Materials,Wonik Materials,Central Glass,Kanto Denka Kogyo,Resonac Gas Products'),
 C('materials','wet-chemicals','Wet chemicals & CMP','Supply cluster',['Slurries','Etchants','Cleaning chemicals'],'Entegris,Fujimi,Cabot Microelectronics,DuPont Electronics,Merck KGaA,Stella Chemifa,Mitsubishi Chemical,Kurita Water Industries,BASF Electronic Materials,Honeywell Electronic Materials'),
 C('materials','lithography-materials','Lithography materials','Supply cluster',['EUV resist','Photomasks','Pellicles'],'Tokyo Ohka Kogyo,Fujifilm Electronic Materials,Dongjin Semichem,DuPont Photomasks,Hoya,AGC,SKC,Soken Chemical,Nissan Chemical,Inpria'),
 C('materials','substrate-materials','Substrates & laminates','Supply cluster',['ABF','Copper-clad laminate','Leadframes'],'Ibiden,Shinko Electric Industries,Unimicron,Nan Ya PCB,Kinsus,AT&S,LG Innotek,Daeduck Electronics,Resonac,Panasonic Industry'),
 C('materials','critical-minerals','Critical minerals & metals','Supply cluster',['Copper','Gallium','Germanium','Rare earths'],'Nornickel,Rusal,Rio Tinto,BHP,Freeport-McMoRan,Southern Copper,Glencore,Alcoa,Century Aluminum,5N Plus,Umicore,Teck Resources'),
 C('materials','energy-generation','Electricity generation','Infrastructure cluster',['Grid power','Nuclear','Renewables'],'Constellation Energy,NextEra Energy,Dominion Energy,Duke Energy,Vistra,Talen Energy,GE Vernova,Siemens Energy,Cameco,Oklo'),
 C('materials','water-cooling-inputs','Water & cooling inputs','Infrastructure cluster',['Ultrapure water','Coolants','Heat transfer fluids'],'Veolia Water Technologies,Ovivo,Organo,Kurita,DuPont Water Solutions,3M Fluids,Engineered Fluids,Shell Lubricants,Castrol ON,Parker Hannifin'),

 C('equipment','lithography-supply','Lithography subsystems','Equipment cluster',['Optics','Light sources','Stages'],'Carl Zeiss SMT,Cymer,Trumpf,Edwards Vacuum,VDL ETG,Berliner Glas,IMS Nanofabrication,Lasertec,NuFlare Technology,Mycronic'),
 C('equipment','deposition-tools','Deposition equipment','Equipment cluster',['CVD','PVD','ALD','Epitaxy'],'Aixtron,Veeco Instruments,Wonik IPS,Jusung Engineering,Piotech,ACM Research,AMEC,Hitachi Kokusai Electric,Kokusai Electric,Eugene Technology'),
 C('equipment','etch-clean','Etch & clean equipment','Equipment cluster',['Plasma etch','Wet clean','Ashing'],'PSK,Mattson Technology,SEMES,Naura Technology,Kingsemi,Tokyo Seimitsu,Modutek,Plasma-Therm,Oxford Instruments Plasma Technology,SPTS Technologies'),
 C('equipment','inspection-metrology','Inspection & metrology','Equipment cluster',['Defect inspection','Critical-dimension metrology'],'Planar Systems Russia,Onto Innovation,Hitachi High-Tech,Bruker Nano,Rudolph Technologies,Camtek,Nova,Park Systems,JEOL,Raith,Nearfield Instruments'),
 C('equipment','test-handling','Test & handling','Equipment cluster',['ATE','Probe cards','Handlers'],'Cohu,FormFactor,Technoprobe,Chroma ATE,Accretech,Micronics Japan,Hon Precision,Exicon,FitTech,Tesec'),
 C('equipment','eda-ip','EDA & semiconductor IP','Software cluster',['Chip design','Verification','Reusable IP'],'Siemens EDA,Ansys,Keysight Technologies,Silvaco,Altium,Arteris,Ceva,Rambus,Imagination Technologies,Alphawave Semi,RISC-V International,SiFive,Andes Technology,Codlasil,OpenROAD'),
 C('equipment','packaging-equipment','Packaging equipment','Equipment cluster',['Bonding','Dicing','Molding'],'Besi,ASMPT,Kulicke & Soffa,Hanmi Semiconductor,Towa,EO Technics,Shibaura Mechatronics,EV Group,SUSS MicroTec,Palomar Technologies'),

 C('fabrication','leading-foundries','Leading & specialty foundries','Manufacturing cluster',['Logic foundry','Specialty nodes'],'Mikron,Angstrem,NM-Tech,Tower Semiconductor,PSMC,Vanguard International Semiconductor,Hua Hong Semiconductor,DB HiTek,X-FAB,Renesas Foundry,Texas Instruments Fabs,STMicroelectronics Fabs,Infineon Fabs,NXP Fabs,Microchip Fabs,Polar Semiconductor,Rapidus,SkyWater Technology'),
 C('fabrication','memory-fabs','Memory fabrication','Manufacturing cluster',['DRAM','NAND','HBM'],'Kioxia,Western Digital Flash,Nanya Technology,Winbond,Powerchip Memory,YMTC,CXMT,Macronix,ChangXin Memory,Intel NAND'),
 C('fabrication','advanced-packaging','Advanced packaging','Manufacturing cluster',['2.5D','3D integration','Chiplets'],'SPIL,Powertech Technology,ChipMOS,UTAC,Unisem,TFME,LB Semicon,Signetics,NEPES,SFA Semicon,King Yuan Electronics,Siliconware Precision,Stats ChipPAC,Tianshui Huatian,Chipbond Technology'),
 C('fabrication','packaging-platforms','Packaging technologies','Technology cluster',['Hybrid bonding','Fan-out','3D stacking'],'Foveros,EMIB,I-Cube,X-Cube,InFO,SoIC,Fan-Out Wafer Level Packaging,Hybrid Bonding,Through-Silicon Via,Universal Chiplet Interconnect Express'),

 C('compute','gpu-accelerators','Accelerators & GPUs','Compute cluster',['Training accelerators','Inference accelerators'],'Huawei Ascend,Biren Technology,Moore Threads,Enflame,MetaX,Rebellions,Sapeon,FuriosaAI,Hailo,Kneron,Graphcore,Etched,SambaNova Systems,Lightmatter,Lightelligence,d-Matrix,Mythic,SiMa.ai,Untether AI,Axelera AI'),
 C('compute','cpu-platforms','Server CPUs','Compute cluster',['x86','Arm server CPU','RISC-V'],'Baikal Electronics,MCST Elbrus,Yadro RISC-V,Ampere Computing,IBM Power,Alibaba Yitian,AWS Graviton,Google Axion,Microsoft Cobalt,Fujitsu A64FX,Loongson,Phytium,SiFive Performance,Cavium ThunderX,Alibaba Xuantie'),
 C('compute','custom-silicon','Custom AI silicon','Compute cluster',['ASIC','DPU','Edge NPU'],'Tesla Dojo,Apple Neural Engine,Qualcomm Hexagon,Samsung Exynos NPU,Intel NPU,AMD XDNA,Baidu Kunlun,Alibaba Hanguang,Tencent Zixiao,ByteDance ASIC,IBM AIU,Tenstorrent Wormhole,Cerebras WSE,Groq LPU,SambaNova RDU'),
 C('compute','memory-components','Memory & storage silicon','Compute cluster',['HBM','DRAM','NAND','CXL memory'],'Solidigm,Kioxia Memory,Western Digital,Phison,Silicon Motion,Rambus Memory,Montage Technology,Astera Labs,Microchip CXL,Marvell CXL,Samsung CXL Memory,SK hynix CXL Memory'),
 C('compute','networking-silicon','Networking silicon','Compute cluster',['Ethernet','InfiniBand','DPU','Optics DSP'],'NVIDIA Mellanox,Intel Ethernet,AMD Pensando,Cisco Silicon One,Marvell Teralynx,Broadcom Tomahawk,Asterfusion,Alphawave Connectivity,Credo Semiconductor,Astera Labs Fabric,MaxLinear,Macom Technology'),
 C('compute','edge-ai','Edge AI hardware','Compute cluster',['Edge accelerator','AI PC','Embedded NPU'],'NVIDIA Jetson,Google Coral,Intel Movidius,AMD Ryzen AI,Apple M-series,Qualcomm Snapdragon X,Samsung Exynos AI,Hailo-8,Ambarella CVflow,NXP eIQ,Rockchip NPU,Horizon Robotics Journey'),

 C('datacenter','server-odm','Server ODMs & rack builders','Systems cluster',['GPU servers','Rack-scale systems'],'Yadro,Aquarius,Kraftway,Depo Computers,Foxconn Industrial Internet,Quanta Cloud Technology,Wiwynn,Wistron,Inventec,Pegatron,Compal,Gigabyte Enterprise,ASRock Rack,MiTAC Computing,Aivres,Hyve Solutions,Ingrasys,ZT Systems,Accton Technology'),
 C('datacenter','network-systems','Data-center networking','Systems cluster',['Switching','Routing','Network OS'],'Juniper Networks,Nokia Data Center,F5 Networks,Extreme Networks,Asterfusion,Edgecore Networks,Arrcus,Cumulus Linux,SONiC,DriveNets,Alcatel-Lucent Enterprise,Ruijie Networks'),
 C('datacenter','optical-interconnect','Optical interconnect','Systems cluster',['Transceivers','Coherent optics','CPO'],'Coherent Corp,Lumentum Holdings,II-VI Photonics,Innolight,Eoptolink,Accelink,Source Photonics,Fabrinet,Applied Optoelectronics,Luxshare Precision,Hisense Broadband,Marvell Inphi,Cisco Acacia,POET Technologies,Ayar Labs,Celestial AI'),
 C('datacenter','storage-systems','AI data storage','Systems cluster',['Parallel file systems','Object storage','NVMe'],'NetApp,Pure Storage,VAST Data,Dell PowerScale,IBM Storage,DDN,WEKA,Nutanix,Qumulo,MinIO,Cloudian,Hitachi Vantara,Seagate,Western Digital Storage,Solidigm SSD'),
 C('datacenter','power-delivery','Power delivery & UPS','Infrastructure cluster',['UPS','Busway','Switchgear','Transformers'],'ABB Electrification,Delta Electronics,Legrand,Rittal,Mitsubishi Electric,Hitachi Energy,GE Vernova Grid,Siemens Smart Infrastructure,Socomec,Piller Power Systems,Caterpillar Power,Rolls-Royce mtu,Bloom Energy,Generac,Cummins Power'),
 C('datacenter','thermal-management','Cooling & thermal management','Infrastructure cluster',['Liquid cooling','CDU','Immersion'],'CoolIT Systems,Chilldyne,Submer,LiquidStack,Iceotope,ZutaCore,Motivair,Boyd,Modine,Asetek,Accelsius,JetCool,GRC,Trane Technologies,Johnson Controls,Carrier,Danfoss,Munters,nVent,Stulz'),
 C('datacenter','colo-builders','Colocation & data-center operators','Infrastructure cluster',['Colocation','Powered shell','Interconnection'],'QTS Data Centers,Vantage Data Centers,CyrusOne,NTT Global Data Centers,STACK Infrastructure,Aligned Data Centers,Switch,Compass Datacenters,DataBank,Iron Mountain Data Centers,EdgeConneX,Colovore,Prime Data Centers,AirTrunk,Global Switch,Keppel Data Centres,GDS Holdings,Chindata,Scala Data Centers,atNorth'),
 C('datacenter','construction-engineering','Data-center engineering & construction','Infrastructure cluster',['EPC','Design','Commissioning'],'Bechtel,Jacobs,AECOM,Turner Construction,Skanska,DPR Construction,Holder Construction,Mortenson,Fluor,Black & Veatch,Burns & McDonnell,Arup,WSP,Syska Hennessy,Corgan'),

 C('cloud','gpu-clouds','GPU & sovereign clouds','Cloud cluster',['GPU instances','Bare metal accelerators'],'Lambda,Crusoe,Voltage Park,Fluidstack,IREN,Nscale,Firmus,G42 Core42,Applied Digital,Sustainable Metal Cloud,Genesis Cloud,RunPod,Vultr,Paperspace,OVHcloud,Scaleway,Hetzner Cloud,Tencent Cloud,Huawei Cloud,Baidu AI Cloud'),
 C('cloud','regional-clouds','Regional & enterprise clouds','Cloud cluster',['IaaS','Managed AI'],'Yandex Cloud,SberCloud,VK Cloud,Selectel,MTS Web Services,SAP Business Technology Platform,VMware Cloud,Red Hat OpenShift AI,DigitalOcean,Linode Akamai,CloudSigma,Exoscale,UpCloud,NTT Cloud,Fujitsu Cloud,KT Cloud,Naver Cloud,Reliance JioCloud'),
 C('cloud','edge-cloud','Edge & distributed inference','Cloud cluster',['Edge inference','Serverless GPU'],'Fastly Compute,Akamai Connected Cloud,Vercel AI Cloud,Netlify Edge,Deno Deploy,Fly.io,Modal,Baseten Cloud,BentoCloud,Beam Cloud,Replicate Cloud'),

 C('models','frontier-labs','Frontier model laboratories','Model cluster',['Large multimodal models','Reasoning models'],'Yandex AI,Sber AI,AIRI,MTS AI,T-Bank AI Research,Microsoft AI,Amazon AGI Lab,Apple Foundation Models,Alibaba DAMO Academy,Baidu ERNIE,Tencent Hunyuan,ByteDance Seed,Zhipu AI,Moonshot AI,MiniMax,01.AI,StepFun,Baichuan AI,Shanghai AI Laboratory,Technology Innovation Institute,AI21 Labs,Aleph Alpha,Writer Palmyra,Reka AI,Inflection AI'),
 C('models','open-model-labs','Open model developers','Model cluster',['Open-weight LLMs','Research models'],'Allen Institute for AI,BigScience,EleutherAI,Nous Research,OpenBMB,InternLM,LAION,Databricks Mosaic Research,IBM Granite,Cerebras Models,Essential AI,Prime Intellect,Arcee AI,OpenChat,Beijing Academy of AI,Kyutai,LightOn,SAIL'),
 C('models','image-video-models','Image & video model labs','Model cluster',['Image generation','Video generation'],'Black Forest Labs,Luma AI,Pika,Runway Research,Adobe Research,Midjourney Models,Ideogram,Bria AI,Stability AI Research,Leonardo AI,Kuaishou Kling,Alibaba Wan,Google Veo,OpenAI Sora,Lightricks LTX,Genmo,Haiper,PixVerse,ShengShu Vidu,Higgsfield'),
 C('models','audio-speech-models','Audio & speech model labs','Model cluster',['Speech recognition','Voice synthesis','Music models'],'ElevenLabs,Deepgram,AssemblyAI,Cartesia,Resemble AI,PlayHT,Speechmatics,Hume AI,Suno Research,Udio,Stability Audio,OpenAI Whisper,Google AudioLM,Meta AudioCraft,Rime,WellSaid Labs,Coqui,SoundHound AI'),
 C('models','science-models','Scientific foundation models','Model cluster',['Biology','Chemistry','Weather','Materials'],'Isomorphic Labs,Recursion,Generate Biomedicines,EvolutionaryScale,Profluent,Inceptive,Cradle,Bioptimus,Orbital Materials,Periodic Labs,FutureHouse,Google AlphaFold,NVIDIA BioNeMo,Microsoft Aurora,IBM Research AI for Science,Prescient Design,Basecamp Research'),
 C('models','openai-models','OpenAI model families','Model family',['Reasoning','Multimodal','Coding'],'GPT-5.6 Sol,GPT-5.6 Terra,GPT-5.6 Luna,GPT-5.5,GPT-5.3-Codex,GPT-5.2,GPT-5.1,GPT-5,GPT-5 mini,GPT-5 nano,o3,o4-mini,Sora 2,GPT-Image-2,gpt-oss-120b'),
 C('models','anthropic-models','Anthropic model families','Model family',['Reasoning','Coding','Computer use'],'Claude Fable 5,Claude Opus 5,Claude Sonnet 5,Claude Opus 4.8,Claude Opus 4.7,Claude Sonnet 4.6,Claude Sonnet 4.5,Claude Haiku 4.5'),
 C('models','google-models','Google model families','Model family',['Multimodal','Media','Robotics'],'Gemini 3.7 Flash,Gemini 3.6 Flash,Gemini 3.5 Flash,Gemini 3.1 Pro,Nano Banana 2,Nano Banana 2 Lite,Nano Banana Pro,Gemini Omni Flash,Veo 3.1,Lyria 3 Pro,Gemini Embedding 2,Gemini Robotics-ER 2,Gemini Robotics-ER 1.6,AlphaFold 3'),
 C('models','meta-xai-models','Meta & xAI model families','Model family',['Open-weight','Multimodal','Agentic'],'Llama 4 Scout,Llama 4 Maverick,Llama Guard 4,Llama 3.3 70B,Meta Movie Gen,Muse Spark,Grok 4.5,Grok Imagine,Grok Voice'),
C('models','chinese-models','Chinese model families','Model family',['Reasoning','Coding','Multimodal'],'Kimi K3,Kimi K2.7 Code,Kimi K2.6,DeepSeek V4 Pro,DeepSeek V4 Flash,DeepSeek R1,Qwen3-Max,Qwen3,Qwen Coder,Qwen-VL,GLM-5.3,GLM-5.2,Doubao Model,Hunyuan,ERNIE,MiMo-V2.5 Pro,MiniMax M3,MiniMax M2.7'),
 C('models','european-models','European & Canadian model families','Model family',['Multilingual','Open-weight','Enterprise'],'Mistral Medium 3.5,Mistral Small 4,Mistral Large 3,Devstral 2,Mistral OCR 4,Robostral Navigate,Shieldstral,Voxtral,Codestral,Cohere Command A+,North Mini Code,Cohere Embed,Aleph Alpha Luminous,AI21 Jamba'),
 C('models','media-models','Independent media model families','Model family',['Image','Video','Audio'],'FLUX.1,FLUX.2,Stable Diffusion 3.5,Stable Audio,Midjourney V7,Runway Gen-4,Luma Ray,Pika 2.2,Ideogram 3.0,Eleven v3,Suno v5,Udio 2'),
 C('models','open-science-models','Open & scientific model families','Model family',['Research','Science','Open weights'],'OLMo 2,OLMoE,Falcon 3,IBM Granite 4,DBRX,Cerebras-GPT,Command R Open,ESM3,Evo 2,ProGen3,BioNeMo'),

 C('infra','inference-serving','Inference serving platforms','Infrastructure cluster',['Model serving','GPU scheduling','Inference optimization'],'Baseten,BentoML,Cerebrium,Anyscale,OctoAI,Predibase,Lepton AI,DeepInfra,Fal.ai,Modal Labs,Beam,Inferless,KServe,Seldon,Ray Serve,Triton Inference Server,TorchServe,TensorRT-LLM,DeepSpeed-MII,OpenLLM'),
 C('infra','training-platforms','Training & fine-tuning','Infrastructure cluster',['Distributed training','Fine-tuning','RLHF'],'Lightning AI,Determined AI,MosaicML,Modal Training,Runhouse,Skypilot,Prime Intellect Compute,Unsloth,Axolotl,Ludwig,Predibase Fine-tuning,OpenPipe,Arcee Training,Reinforcement AI,TRL,Colossal-AI,Megatron-LM,Horovod'),
 C('infra','data-platforms','Data & feature infrastructure','Infrastructure cluster',['Lakehouse','Streaming','Feature store'],'Confluent,Apache Spark,Apache Flink,dbt Labs,Fivetran,Airbyte,Astronomer,Prefect,Dagster,Flyte,Feast,Tecton,Hopsworks,Monte Carlo Data,Bigeye,Soda Data,Great Expectations,Atlan,Collibra,Alation'),
 C('infra','vector-search','Vector search & retrieval','Infrastructure cluster',['Vector database','Hybrid search','RAG'],'Qdrant,Chroma,LanceDB,pgvector,Elastic Vector Search,OpenSearch Vector,Redis Vector,SingleStore,MongoDB Atlas Vector,Neo4j Vector,Typesense,Vespa,Marqo,Vald,Turbopuffer,Vertex AI Vector Search,Azure AI Search'),
 C('infra','observability-evals','Observability & evaluation','Infrastructure cluster',['Tracing','Evaluation','Testing'],'Arize AI,Fiddler AI,WhyLabs,Galileo,Humanloop,Braintrust,Patronus AI,Giskard,TruLens,Deepchecks,Confident AI,Ragas,Promptfoo,Helicone,Langfuse,Phoenix Arize,Comet ML,Neptune.ai,ClearML,MLflow'),
 C('infra','data-labeling','Data labeling & synthetic data','Infrastructure cluster',['Human feedback','Synthetic data','Data curation'],'Surge AI,Labelbox,Snorkel AI,Appen,Defined.ai,Sama,iMerit,CloudFactory,Invisible Technologies,Toloka,Centific,SuperAnnotate,V7 Labs,Encord,Dataloop,Kili Technology,Mostly AI,Synthesis AI,Renderpeople'),
 C('infra','ai-security','AI security & governance','Infrastructure cluster',['Model security','Guardrails','Governance'],'Protect AI,HiddenLayer,Robust Intelligence,CalypsoAI,Prompt Security,Lakera Guard,Guardrails AI,Aporia,Arthur AI,Credo AI,Holistic AI,ModelOp,Fiddler Guardrails,WhyLabs LangKit,Rebuff,Invariant Labs,Zenity,Adversa AI,Promptfoo Security,Noma Security'),
 C('infra','model-gateways','Model gateways & routing','Infrastructure cluster',['API gateway','Routing','Caching'],'Portkey,LiteLLM,Martian,Not Diamond,Unify AI,Kong AI Gateway,Tyk AI Gateway,Cloudflare AI Gateway,Helicone Gateway,Keywords AI,Eden AI,Requesty,TrueFoundry,OpenRouter Gateway'),

 C('developer','ml-frameworks','ML frameworks','Developer cluster',['Training framework','Tensor compiler'],'Keras,Apache MXNet,PaddlePaddle,OneFlow,MindSpore,Flax,Haiku,Equinox,PyTorch Lightning,fastai,scikit-learn,XGBoost,LightGBM,CatBoost,Jittor, tinygrad'),
 C('developer','compilers-runtimes','Compilers & runtimes','Developer cluster',['Kernel compiler','Graph compiler','Runtime'],'OpenXLA,MLIR,TVM,IREE,ONNX Runtime,TensorRT,OpenVINO,Apache TVM,Glow,BladeDISC,TorchInductor,TorchDynamo,Triton Compiler,ROCm,HIP,SYCL,oneAPI'),
 C('developer','local-ai','Local AI runtimes','Developer cluster',['Desktop inference','Quantization'],'Ollama,LM Studio,Jan,LocalAI,GPT4All,Msty,Open WebUI,text-generation-webui,ExLlamaV2,MLC LLM,TensorFlow Lite,LiteRT,Core ML,ExecuTorch,MediaPipe,NCNN,MNN'),
 C('developer','rag-frameworks','RAG & application frameworks','Developer cluster',['Retrieval','Prompt pipelines'],'DeepPavlov,Natasha NLP,Haystack,Semantic Kernel DSPy,DSPy,Guidance,Outlines,Instructor,PydanticAI,Marvin,EmbedChain,AutoGen,LangGraph,LangServe,Flowise,Langflow,Dify,Haystack Agents,txtai,Verba'),
 C('developer','mlops-open-source','Open-source MLOps','Developer cluster',['Pipelines','Registry','Deployment'],'Kubeflow,Metaflow,ZenML,ClearML Open Source,DVC,Pachyderm,Feast Open Source,MLflow Open Source,BentoML Open Source,Seldon Core,KServe Open Source,Flyte Open Source,Argo Workflows,Tekton,Airflow,Weights & Biases Artifacts'),
 C('developer','standards-protocols','AI standards & protocols','Developer cluster',['Interoperability','Safety','Metadata'],'OpenAI API format,Model Context Protocol,Agent2Agent Protocol,OpenTelemetry GenAI,Open Neural Network Exchange,Safetensors,GGUF,MLCommons,MLPerf,C2PA,Coalition for Content Provenance,NIST AI RMF,ISO IEC 42001,OpenAPI,JSON Schema'),

 C('agents','coding-agents','Coding agents & IDEs','Agent cluster',['Code generation','Repository agents'],'OpenAI Codex,Devin,Replit Agent,Aider,Cline,Roo Code,Continue,Tabnine,Amazon Q Developer,Gemini Code Assist,Sourcegraph Cody,Augment Code,JetBrains AI Assistant,Qodo,Poolside,Magic.dev,Factory AI,Dagger AI,GitHub Copilot Workspace,SWE-agent'),
 C('agents','agent-frameworks','Agent orchestration frameworks','Agent cluster',['Tool use','Multi-agent','State graphs'],'Microsoft AutoGen,Google ADK,LangGraph Agents,Mastra,Agno,Smolagents,PydanticAI Agents,LlamaIndex Agents,Haystack Agents SDK,CrewAI Enterprise,OpenAI Swarm,MetaGPT,AutoGPT,BabyAGI,SuperAGI,Camel AI,TaskWeaver,Langroid,Agency Swarm,Letta'),
 C('agents','browser-computer-agents','Browser & computer-use agents','Agent cluster',['Browser automation','GUI action'],'OpenAI Operator,Anthropic Computer Use,Google Project Mariner,Microsoft Copilot Vision,Perplexity Comet Agent,Adept ACT-1,MultiOn,Induced AI,HyperWrite Personal Assistant,Convergence Proxy,Steel Browser,Browserbase,Stagehand,Playwright MCP,Puppeteer MCP,Skyvern,LaVague,Magnitude,AgentQL'),
 C('agents','enterprise-agents','Enterprise agent platforms','Agent cluster',['Workflow agents','Enterprise automation'],'GigaChat,Yandex Alice,Just AI,Tinkoff VoiceKit,Salesforce Agentforce,Microsoft Copilot Studio,Google Agentspace,AWS Bedrock Agents,Oracle AI Agent Studio,ServiceNow AI Agents,SAP Joule Agents,IBM watsonx Orchestrate,Celonis Agents,UiPath Agentic Automation,Automation Anywhere AI Agents,Workday Illuminate,Glean Agents,Moveworks,Writer AI HQ,Aisera,Kore.ai,Yellow.ai,Amelia'),
 C('agents','voice-agents','Voice-agent platforms','Agent cluster',['Realtime voice','Contact center agents'],'Retell AI,Vapi,Bland AI,PolyAI,Parloa,Decagon,Sierra,LiveKit Agents,Pipecat,Daily Bots,Agora Conversational AI,Deepgram Voice Agent,ElevenLabs Conversational AI,Cartesia Agents,Air AI,Replicant,Cognigy,Observe.AI,Five9 AI Agents'),
 C('agents','agent-memory-identity','Agent memory & identity','Agent cluster',['Long-term memory','Agent authentication'],'Mem0,Zep,Letta Memory,LangMem,Graphiti,Supermemory,Memary,Arcade.dev,Composio,Nango,WorkOS Agent Auth,Auth0 for AI Agents,Stytch Connected Apps,Descope Agentic Identity,1Password Agentic AI'),

 C('applications','search-knowledge','Search & knowledge applications','Application cluster',['Answer engine','Enterprise search'],'Yandex Search,Mail.ru Search,Sber Salute,Glean,You.com,Phind,Exa,Tavily,Kagi Assistant,Brave Leo,Microsoft Copilot Search,Google AI Overviews,Arc Search,Consensus,Elicit,Scite,Semantic Scholar,Hebbia,AlphaSense,Coveo,Sana AI,Guru,Slite Ask'),
 C('applications','productivity-collaboration','Productivity & collaboration AI','Application cluster',['Writing','Meetings','Knowledge work'],'Microsoft 365 Copilot,Google Workspace Gemini,Slack AI,Zoom AI Companion,Grammarly,Coda AI,Airtable AI,ClickUp Brain,Asana Intelligence,Monday AI,Dropbox Dash,Box AI,Atlassian Intelligence,Linear AI,Read AI,Otter.ai,Fireflies.ai,Granola,Fathom,Superhuman AI'),
 C('applications','creative-design','Design & creative AI','Application cluster',['Design','Image','3D'],'Figma AI,Canva Magic Studio,Adobe Creative Cloud AI,Leonardo AI,Ideogram,Clipdrop,Photoroom,Topaz Labs,Remove.bg,Krea,Playground AI,Recraft,Scenario,Meshy,Kaedim,Luma Genie,Spline AI,Autodesk AI,Unity Muse,Scenario.gg'),
 C('applications','video-media','Video & media AI','Application cluster',['Video generation','Editing','Localization'],'Synthesia,HeyGen,Descript,VEED,Kapwing,OpusClip,Twelve Labs,Tavus,D-ID,Colossyan,Pictory,InVideo AI,Wonder Studio,Flawless AI,Papercup,Rask AI,ElevenLabs Dubbing,Captions,Hour One,Waymark'),
 C('applications','enterprise-software','Enterprise software AI','Application cluster',['CRM','ERP','Operations'],'SAP Joule,Oracle Fusion AI,Microsoft Dynamics Copilot,HubSpot AI,Zoho Zia,Workday AI,Intuit Assist,Thomson Reuters CoCounsel,LexisNexis AI,Ironclad AI,Icertis Copilot,UiPath Autopilot,Celonis Process Copilot,Dataiku,DataRobot,C3 AI,Alteryx AI,Palantir Foundry AI,ThoughtSpot Sage,Qlik Staige'),
 C('applications','cybersecurity','Cybersecurity AI','Application cluster',['SOC','Threat detection','Identity'],'Kaspersky AI,Positive Technologies,BI.ZONE,Group-IB,Microsoft Security Copilot,Palo Alto Cortex,CrowdStrike Charlotte AI,SentinelOne Purple AI,Wiz AI,Abnormal Security,Darktrace,Securonix,ReliaQuest GreyMatter,Recorded Future AI,Google SecOps Gemini,Splunk AI Assistant,Rapid7 AI Engine,Tenable AI,Cloudflare Security AI,Proofpoint AI,Material Security,Varonis AI,Rubrik Security Cloud,Cybereason AI'),
 C('applications','healthcare-clinical','Clinical & healthcare AI','Application cluster',['Clinical documentation','Diagnostics','Care navigation'],'Abridge,Nuance DAX,Aidoc,PathAI,Paige,Viz.ai,Butterfly Network,Owkin,Insilico Medicine,Suki,Ambience Healthcare,Nabla,Corti,Hippocratic AI,OpenEvidence,Glass Health,Rad AI,Eleos Health,Notable,Commure'),
 C('applications','drug-discovery','Drug discovery & biotech AI','Application cluster',['Molecule design','Clinical development'],'Schrödinger,Exscientia,BenevolentAI,Atomwise,Insitro,Genesis Therapeutics,XtalPi,Valence Labs,Absci,Generate Biomedicines,Recursion OS,Relay Therapeutics,Formation Bio,Owkin Research,Tempus Research,Pathos AI,Isomorphic Labs Platform,Cradle Biology,Profluent Design,EvolutionaryScale ESM'),
 C('applications','finance-legal','Finance & legal AI','Application cluster',['Research','Compliance','Legal workflows'],'Bloomberg AI,FactSet AI,Refinitiv AI,S&P Kensho,AlphaSense Finance,Ramp Intelligence,Brex AI,Mercury AI,Stripe AI,Mastercard Decision Intelligence,Visa AI,Feedzai,Quantexa,Harvey AI,Clio Duo,Lexion,Evisort,Robin AI,Spellbook,EvenUp'),
 C('applications','education','Education AI','Application cluster',['Tutoring','Course creation','Assessment'],'Khanmigo,Quizlet Q-Chat,CheggMate,Photomath,Socratic,MagicSchool,SchoolAI,Carnegie Learning,Century Tech,Squirrel AI,Turnitin AI,Grammarly for Education,Coursera Coach,Udemy AI Assistant,Speak,ELSA Speak,Duolingo Max,StudyFetch,NotebookLM,Consensus Education'),
 C('applications','customer-service-sales','Customer service & sales AI','Application cluster',['Contact center','Sales enablement'],'Intercom Fin,Zendesk AI,Ada,Forethought,Kustomer AI,Genesys Cloud AI,NICE CXone,Five9 Genius,Talkdesk AI,Salesloft AI,Outreach AI,Gong,Clari,Cresta,Balley AI,Regie.ai,Artisan AI,11x,Apollo AI,HubSpot Breeze'),
 C('applications','defense-government','Defense & government AI','Application cluster',['ISR','Command systems','Public sector'],'Shield AI,Helsing,Scale Donovan,Palantir Maven,Rebellion Defense,Primer AI,BlackSky,Planet Labs AI,Epirus,Skydio,General Atomics Autonomy,Lockheed Martin AI,Boeing AI,Northrop Grumman AI,RTX AI,BAE Systems AI,Thales AI,Leidos AI,CACI AI,Accenture Federal AI'),
 C('applications','science-engineering','Science & engineering AI','Application cluster',['Simulation','Materials','Research'],'NVIDIA Omniverse,Ansys AI,Autodesk Fusion AI,Siemens Industrial Copilot,Dassault Systèmes AI,Altair AI,MathWorks AI,Wolfram Alpha,Orbital Materials,PhysicsX,Monolith AI,Matlantis,Citrine Informatics,Schrödinger Materials,Microsoft Discovery,Google DeepMind Science,FutureHouse Platform,Benchling AI,LabGenius,Emerald Cloud Lab'),
 C('applications','consumer-companions','Consumer assistants & companions','Application cluster',['Personal assistant','Character chat'],'Character.AI,Pi,Replika,Poe,Meta AI Assistant,Google Gemini App,Microsoft Copilot,Claude App,Grok App,Amazon Alexa Plus,Samsung Galaxy AI,Apple Intelligence,Snap My AI,Discord Clyde,Khanmigo Consumer,Chai,Talkie,Kindroid,Nomi AI,Inflection Pi'),

 C('robotics','humanoid-robots','Humanoid robotics','Robotics cluster',['Humanoid robot','General-purpose manipulation'],'Promobot,Neurobotics,Apptronik,1X Technologies,Sanctuary AI,Unitree Robotics,UBTECH,Fourier Intelligence,NEURA Robotics,Engineered Arts,AgiBot,Galbot,Kepler Exploration,Clone Robotics,Mentee Robotics,RobotEra,LimX Dynamics,PNDbotics,Boston Dynamics Atlas,Tesla Optimus,Figure 02,Agility Digit'),
 C('robotics','industrial-robots','Industrial & warehouse robotics','Robotics cluster',['Robot arms','Warehouse automation'],'KUKA,Yaskawa,Universal Robots,Omron Robotics,Epson Robots,Kawasaki Robotics,Staubli Robotics,Comau,Nachi-Fujikoshi,Mitsubishi Electric Robotics,Geekplus,Locus Robotics,Symbotic,AutoStore,Berkshire Grey,RightHand Robotics,Intrinsic,Covariant,Realtime Robotics,Standard Bots'),
 C('robotics','autonomous-vehicles','Autonomous vehicles','Robotics cluster',['Robotaxi','Autonomous trucking','ADAS'],'Yandex Autonomous Transport,Cognitive Pilot,SberAutoTech,Cruise,Zoox,Aurora Innovation,Motional,Pony.ai,WeRide,Apollo Go,Mobileye,Waabi,Torc Robotics,Plus,Einride,Gatik,May Mobility,Nuro,Oxbotica,Oxa,Wayve,Applied Intuition,Helm.ai'),
 C('robotics','drones-autonomy','Drones & autonomous systems','Robotics cluster',['UAV','Autonomy stack'],'Skydio,Zipline,Anduril Ghost,Shield AI Hivemind,Quantum Systems,Auterion,AeroVironment,Insitu,Flyability,Exyn Technologies,Percepto,Matternet,Wing,Amazon Prime Air,DroneDeploy,BRINC,Dedrone,Blue Robotics,Saronic,Sea Machines'),
 C('robotics','robotics-software','Robotics software & simulation','Robotics cluster',['Simulation','Middleware','Foundation models'],'ROS,ROS 2,Open Robotics,Isaac Sim,MuJoCo,Gazebo,Webots,CoppeliaSim,Drake Robotics,MoveIt,LeRobot,OpenVLA,RT-2,Octo Robot Policy,Physical Intelligence π0,NVIDIA GR00T,Intrinsic Flowstate,PickNik,Formant,InOrbit'),
 C('robotics','sensors-actuators','Robotics sensors & actuators','Robotics cluster',['LiDAR','Motors','Machine vision'],'Hesai,Luminar,Ouster,Innoviz,Velodyne,Robosense,SICK,Keyence,Cognex,Basler,Teledyne FLIR,Intel RealSense,Orbbec,Maxon Motor,Harmonic Drive,Nabtesco,THK,HIWIN,Nidec,Moog'),

 C('markets','regulated-markets','Regulated end markets','End-market cluster',['Public services','Regulated operations'],'Insurance,Telecommunications,Energy utilities,Transportation,Pharmaceuticals,Legal services,Education systems,Public safety,Local government,Critical infrastructure'),
 C('markets','industrial-markets','Industrial end markets','End-market cluster',['Operations','Automation'],'Automotive,Aerospace,Logistics,Warehousing,Construction,Mining,Agriculture,Oil and gas,Chemicals,Electronics manufacturing'),
 C('markets','commercial-markets','Commercial end markets','End-market cluster',['Services','Commerce'],'Retail,E-commerce,Advertising,Consulting,Accounting,Human resources,Real estate,Hospitality,Travel,Professional services'),
 C('markets','creator-markets','Creative & knowledge markets','End-market cluster',['Content','Knowledge work'],'Creators,Journalists,Publishers,Film studios,Game developers,Design teams,Marketing teams,Students,Teachers,Independent developers')
];

export const MODEL_PRODUCT_OWNERS={
 openai:'GPT-5.6 Sol,GPT-5.6 Terra,GPT-5.6 Luna,GPT-5.5,GPT-5.3-Codex,GPT-5.2,GPT-5.1,GPT-5,GPT-5 mini,GPT-5 nano,o3,o4-mini,Sora 2,GPT-Image-2,gpt-oss-120b',
 anthropic:'Claude Fable 5,Claude Opus 5,Claude Sonnet 5,Claude Opus 4.8,Claude Opus 4.7,Claude Sonnet 4.6,Claude Sonnet 4.5,Claude Haiku 4.5',
 deepmind:'Gemini 3.7 Flash,Gemini 3.6 Flash,Gemini 3.5 Flash,Gemini 3.1 Pro,Nano Banana 2,Nano Banana 2 Lite,Nano Banana Pro,Gemini Omni Flash,Veo 3.1,Lyria 3 Pro,Gemini Embedding 2,Gemini Robotics-ER 2,Gemini Robotics-ER 1.6,AlphaFold 3',
 'meta-ai':'Llama 4 Scout,Llama 4 Maverick,Llama Guard 4,Llama 3.3 70B,Meta Movie Gen,Muse Spark',
 xai:'Grok 4.5,Grok Imagine,Grok Voice',
 'moonshot-ai':'Kimi K3,Kimi K2.7 Code,Kimi K2.6',
 deepseek:'DeepSeek V4 Pro,DeepSeek V4 Flash,DeepSeek R1',
 qwen:'Qwen3-Max,Qwen3,Qwen Coder,Qwen-VL',
 'zhipu-ai':'GLM-5.3,GLM-5.2',
 'bytedance-seed':'Doubao Model','tencent-hunyuan':'Hunyuan','baidu-ernie':'ERNIE','minimax':'MiniMax M3,MiniMax M2.7',
 mistral:'Mistral Medium 3.5,Mistral Small 4,Mistral Large 3,Devstral 2,Mistral OCR 4,Robostral Navigate,Shieldstral,Voxtral,Codestral',
 cohere:'Cohere Command A+,North Mini Code,Cohere Embed,Command R Open',stability:'Stable Diffusion 3.5,Stable Audio',
 'black-forest-labs':'FLUX.1,FLUX.2',midjourney:'Midjourney V7',runway:'Runway Gen-4',suno:'Suno v5',
 'allen-institute-for-ai':'OLMo 2,OLMoE','technology-innovation-institute':'Falcon 3','ibm-granite':'IBM Granite 4',databricks:'DBRX',cerebras:'Cerebras-GPT','evolutionaryscale':'ESM3'
 ,'luma-ai':'Luma Ray',pika:'Pika 2.2',ideogram:'Ideogram 3.0','arc-institute':'Evo 2',elevenlabs:'Eleven v3',salesforce:'ProGen3'
};

Object.assign(MODEL_PRODUCT_OWNERS,{'aleph-alpha':'Aleph Alpha Luminous',nvidia:'BioNeMo'});
Object.assign(MODEL_PRODUCT_OWNERS,{udio:'Udio 2',ai21:'AI21 Jamba'});
Object.assign(MODEL_PRODUCT_OWNERS,{'xiaomi-mimo':'MiMo-V2.5 Pro'});
Object.assign(MODEL_PRODUCT_OWNERS,{
 stepfun:'Step-3.5 Flash',
 'shanghai-ai-laboratory':'Intern-S2 Preview',
 'baichuan-ai':'Baichuan-M4',
 'kuaishou-kling':'Kling 3.0',
 'shengshu-vidu':'Vidu Q3',
 'alibaba-wan':'Wan 2.7'
 ,'meituan-longcat':'LongCat 2.0'
 ,sensetime:'SenseNova 6.7 Flash-Lite'
});

export const CURATED_EXPANSION_RELATIONSHIPS=[
 ['carl-zeiss-smt','asml','SUPPLIES','Precision optics are core subsystems in ASML lithography systems.','confirmed'],
 ['cymer','asml','SUPPLIES','Cymer light sources are integrated into ASML lithography platforms.','confirmed'],
 ['trumpf','asml','SUPPLIES','TRUMPF supplies laser technology used in EUV light generation.','confirmed'],
 ['lasertec','tsmc','PROVIDES_EQUIPMENT_TO','Inspection systems support advanced mask and wafer process control.','reported'],
 ['besi','tsmc','PROVIDES_EQUIPMENT_TO','Hybrid-bonding equipment supports advanced packaging development.','reported'],
 ['kioxia','nvidia','PROVIDES_MEMORY_TO','Flash storage participates in AI data pipelines, distinct from HBM.','representative'],
 ['foxconn-industrial-internet','nvidia','PARTNERS_WITH','Foxconn manufactures and integrates NVIDIA-based AI factory systems.','confirmed'],
 ['quanta-cloud-technology','nvidia','PARTNERS_WITH','QCT builds NVIDIA-based rack-scale systems.','confirmed'],
 ['wiwynn','nvidia','PARTNERS_WITH','Wiwynn develops rack systems around NVIDIA platforms.','confirmed'],
 ['coolit-systems','nvidia','PARTNERS_WITH','Liquid-cooling technology supports high-density NVIDIA systems.','confirmed'],
 ['delta-electronics','nvidia','PARTNERS_WITH','Power and cooling systems participate in NVIDIA AI factory reference ecosystems.','confirmed'],
 ['ge-vernova','nvidia','PARTNERS_WITH','Power infrastructure participates in NVIDIA AI factory planning.','confirmed'],
 ['siemens-energy','nvidia','PARTNERS_WITH','Energy systems participate in AI factory infrastructure planning.','confirmed'],
 ['bechtel','nvidia','PARTNERS_WITH','Engineering collaboration supports gigawatt-scale AI factory design.','confirmed'],
 ['jacobs','nvidia','PARTNERS_WITH','Engineering collaboration supports AI factory digital twins.','confirmed'],
 ['lambda','nvidia','RUNS_ON','Lambda provides cloud access to NVIDIA accelerators.','confirmed'],
 ['crusoe','nvidia','RUNS_ON','Crusoe operates NVIDIA-based AI cloud infrastructure.','confirmed'],
 ['nscale','nvidia','RUNS_ON','Nscale builds AI cloud infrastructure around NVIDIA systems.','confirmed'],
 ['runpod','nvidia','RUNS_ON','RunPod offers NVIDIA GPU compute for AI workloads.','confirmed'],
 ['microsoft-ai','azure','RUNS_ON','Microsoft AI products and model development use Azure infrastructure.','confirmed'],
 ['amazon-agi-lab','aws','RUNS_ON','Amazon model development uses AWS infrastructure.','representative'],
 ['apple-foundation-models','apple-m-series','RUNS_ON','Apple foundation models are optimized for Apple silicon.','confirmed'],
 ['allen-institute-for-ai','hugging-face','INTEGRATES_WITH','AI2 distributes open models through the Hugging Face ecosystem.','confirmed'],
 ['black-forest-labs','hugging-face','INTEGRATES_WITH','Black Forest Labs distributes model artifacts through Hugging Face.','confirmed'],
 ['moonshot-ai','hugging-face','INTEGRATES_WITH','Moonshot publishes model artifacts through Hugging Face.','confirmed'],
 ['tensorrt-llm','cuda','RUNS_ON','TensorRT-LLM optimizes LLM inference for NVIDIA CUDA GPUs.','confirmed'],
 ['ollama','llamacpp','INTEGRATES_WITH','Ollama uses local inference runtimes including llama.cpp-derived components.','reported'],
 ['open-webui','ollama','INTEGRATES_WITH','Open WebUI commonly connects to Ollama for local model serving.','confirmed'],
 ['langgraph','langchain','INTEGRATES_WITH','LangGraph is part of the LangChain agent ecosystem.','confirmed'],
 ['microsoft-autogen','azure','INTEGRATES_WITH','AutoGen integrates with Azure-hosted models and services.','confirmed'],
 ['google-adk','deepmind','INTEGRATES_WITH','Google ADK supports Gemini models and Google’s agent ecosystem.','confirmed'],
 ['salesforce-agentforce','salesforce','INTEGRATES_WITH','Agentforce is Salesforce’s enterprise agent platform.','confirmed'],
 ['aws-bedrock-agents','aws','RUNS_ON','Bedrock Agents is a managed AWS service.','confirmed'],
 ['browserbase','browser-use','INTEGRATES_WITH','Hosted browsers provide execution infrastructure for browser agents.','reported'],
 ['playwright-mcp','mcp','INTEGRATES_WITH','Playwright MCP exposes browser automation through MCP.','confirmed'],
 ['microsoft-365-copilot','azure','RUNS_ON','Microsoft 365 Copilot is delivered through Microsoft cloud infrastructure.','confirmed'],
 ['google-workspace-gemini','deepmind','USES_MODEL_FROM','Workspace Gemini uses Google Gemini models.','confirmed'],
 ['intercom-fin','openai','USES_MODEL_FROM','Intercom Fin has used OpenAI model infrastructure.','reported'],
 ['synthesia','azure','RUNS_ON','Synthesia has publicly described Azure infrastructure relationships.','reported'],
 ['abridge','healthcare','SUPPLIES','Abridge provides clinical documentation systems to healthcare organizations.','confirmed'],
 ['shield-ai','defense','SUPPLIES','Shield AI provides autonomous systems for defense missions.','confirmed'],
 ['apptronik','nvidia-isaac','INTEGRATES_WITH','Apptronik participates in NVIDIA’s robotics ecosystem.','reported'],
 ['unitree-robotics','nvidia-isaac','INTEGRATES_WITH','Unitree robots can integrate NVIDIA edge compute and simulation tools.','representative'],
 ['ros-2','nvidia-isaac','INTEGRATES_WITH','Isaac ROS connects NVIDIA robotics acceleration to ROS 2.','confirmed'],
 ['wayve','nvidia','TRAINS_ON','Wayve has used NVIDIA accelerated computing for autonomous driving development.','confirmed']
];
