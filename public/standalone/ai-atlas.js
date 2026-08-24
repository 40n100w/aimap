(function(){"use strict";const Z=(i,e,t,n,s,a)=>({layer:i,id:e,name:t,type:n,products:s,names:a.split(",").map(r=>r.trim()).filter(Boolean)}),Ol=[Z("materials","silicon-wafers","Silicon wafers & crystal growth","Supply cluster",["300mm wafers","Polysilicon"],"GlobalWafers,Siltronic,SK Siltron,Wafer Works,Okmetic,Soitec,OCI,Tokuyama,Hemlock Semiconductor,Wacker Chemie"),Z("materials","process-gases","Electronic gases","Supply cluster",["Neon","Argon","Fluorine chemistry"],"Linde,Air Liquide,Air Products,Taiyo Nippon Sanso,Matheson,SK Materials,Wonik Materials,Central Glass,Kanto Denka Kogyo,Resonac Gas Products"),Z("materials","wet-chemicals","Wet chemicals & CMP","Supply cluster",["Slurries","Etchants","Cleaning chemicals"],"Entegris,Fujimi,Cabot Microelectronics,DuPont Electronics,Merck KGaA,Stella Chemifa,Mitsubishi Chemical,Kurita Water Industries,BASF Electronic Materials,Honeywell Electronic Materials"),Z("materials","lithography-materials","Lithography materials","Supply cluster",["EUV resist","Photomasks","Pellicles"],"Tokyo Ohka Kogyo,Fujifilm Electronic Materials,Dongjin Semichem,DuPont Photomasks,Hoya,AGC,SKC,Soken Chemical,Nissan Chemical,Inpria"),Z("materials","substrate-materials","Substrates & laminates","Supply cluster",["ABF","Copper-clad laminate","Leadframes"],"Ibiden,Shinko Electric Industries,Unimicron,Nan Ya PCB,Kinsus,AT&S,LG Innotek,Daeduck Electronics,Resonac,Panasonic Industry"),Z("materials","critical-minerals","Critical minerals & metals","Supply cluster",["Copper","Gallium","Germanium","Rare earths"],"Nornickel,Rusal,Rio Tinto,BHP,Freeport-McMoRan,Southern Copper,Glencore,Alcoa,Century Aluminum,5N Plus,Umicore,Teck Resources"),Z("materials","energy-generation","Electricity generation","Infrastructure cluster",["Grid power","Nuclear","Renewables"],"Constellation Energy,NextEra Energy,Dominion Energy,Duke Energy,Vistra,Talen Energy,GE Vernova,Siemens Energy,Cameco,Oklo"),Z("materials","water-cooling-inputs","Water & cooling inputs","Infrastructure cluster",["Ultrapure water","Coolants","Heat transfer fluids"],"Veolia Water Technologies,Ovivo,Organo,Kurita,DuPont Water Solutions,3M Fluids,Engineered Fluids,Shell Lubricants,Castrol ON,Parker Hannifin"),Z("equipment","lithography-supply","Lithography subsystems","Equipment cluster",["Optics","Light sources","Stages"],"Carl Zeiss SMT,Cymer,Trumpf,Edwards Vacuum,VDL ETG,Berliner Glas,IMS Nanofabrication,Lasertec,NuFlare Technology,Mycronic"),Z("equipment","deposition-tools","Deposition equipment","Equipment cluster",["CVD","PVD","ALD","Epitaxy"],"Aixtron,Veeco Instruments,Wonik IPS,Jusung Engineering,Piotech,ACM Research,AMEC,Hitachi Kokusai Electric,Kokusai Electric,Eugene Technology"),Z("equipment","etch-clean","Etch & clean equipment","Equipment cluster",["Plasma etch","Wet clean","Ashing"],"PSK,Mattson Technology,SEMES,Naura Technology,Kingsemi,Tokyo Seimitsu,Modutek,Plasma-Therm,Oxford Instruments Plasma Technology,SPTS Technologies"),Z("equipment","inspection-metrology","Inspection & metrology","Equipment cluster",["Defect inspection","Critical-dimension metrology"],"Planar Systems Russia,Onto Innovation,Hitachi High-Tech,Bruker Nano,Rudolph Technologies,Camtek,Nova,Park Systems,JEOL,Raith,Nearfield Instruments"),Z("equipment","test-handling","Test & handling","Equipment cluster",["ATE","Probe cards","Handlers"],"Cohu,FormFactor,Technoprobe,Chroma ATE,Accretech,Micronics Japan,Hon Precision,Exicon,FitTech,Tesec"),Z("equipment","eda-ip","EDA & semiconductor IP","Software cluster",["Chip design","Verification","Reusable IP"],"Siemens EDA,Ansys,Keysight Technologies,Silvaco,Altium,Arteris,Ceva,Rambus,Imagination Technologies,Alphawave Semi,RISC-V International,SiFive,Andes Technology,Codlasil,OpenROAD"),Z("equipment","packaging-equipment","Packaging equipment","Equipment cluster",["Bonding","Dicing","Molding"],"Besi,ASMPT,Kulicke & Soffa,Hanmi Semiconductor,Towa,EO Technics,Shibaura Mechatronics,EV Group,SUSS MicroTec,Palomar Technologies"),Z("fabrication","leading-foundries","Leading & specialty foundries","Manufacturing cluster",["Logic foundry","Specialty nodes"],"Mikron,Angstrem,NM-Tech,Tower Semiconductor,PSMC,Vanguard International Semiconductor,Hua Hong Semiconductor,DB HiTek,X-FAB,Renesas Foundry,Texas Instruments Fabs,STMicroelectronics Fabs,Infineon Fabs,NXP Fabs,Microchip Fabs,Polar Semiconductor,Rapidus,SkyWater Technology"),Z("fabrication","memory-fabs","Memory fabrication","Manufacturing cluster",["DRAM","NAND","HBM"],"Kioxia,Western Digital Flash,Nanya Technology,Winbond,Powerchip Memory,YMTC,CXMT,Macronix,ChangXin Memory,Intel NAND"),Z("fabrication","advanced-packaging","Advanced packaging","Manufacturing cluster",["2.5D","3D integration","Chiplets"],"SPIL,Powertech Technology,ChipMOS,UTAC,Unisem,TFME,LB Semicon,Signetics,NEPES,SFA Semicon,King Yuan Electronics,Siliconware Precision,Stats ChipPAC,Tianshui Huatian,Chipbond Technology"),Z("fabrication","packaging-platforms","Packaging technologies","Technology cluster",["Hybrid bonding","Fan-out","3D stacking"],"Foveros,EMIB,I-Cube,X-Cube,InFO,SoIC,Fan-Out Wafer Level Packaging,Hybrid Bonding,Through-Silicon Via,Universal Chiplet Interconnect Express"),Z("compute","gpu-accelerators","Accelerators & GPUs","Compute cluster",["Training accelerators","Inference accelerators"],"Huawei Ascend,Biren Technology,Moore Threads,Enflame,MetaX,Rebellions,Sapeon,FuriosaAI,Hailo,Kneron,Graphcore,Etched,SambaNova Systems,Lightmatter,Lightelligence,d-Matrix,Mythic,SiMa.ai,Untether AI,Axelera AI"),Z("compute","cpu-platforms","Server CPUs","Compute cluster",["x86","Arm server CPU","RISC-V"],"Baikal Electronics,MCST Elbrus,Yadro RISC-V,Ampere Computing,IBM Power,Alibaba Yitian,AWS Graviton,Google Axion,Microsoft Cobalt,Fujitsu A64FX,Loongson,Phytium,SiFive Performance,Cavium ThunderX,Alibaba Xuantie"),Z("compute","custom-silicon","Custom AI silicon","Compute cluster",["ASIC","DPU","Edge NPU"],"Tesla Dojo,Apple Neural Engine,Qualcomm Hexagon,Samsung Exynos NPU,Intel NPU,AMD XDNA,Baidu Kunlun,Alibaba Hanguang,Tencent Zixiao,ByteDance ASIC,IBM AIU,Tenstorrent Wormhole,Cerebras WSE,Groq LPU,SambaNova RDU"),Z("compute","memory-components","Memory & storage silicon","Compute cluster",["HBM","DRAM","NAND","CXL memory"],"Solidigm,Kioxia Memory,Western Digital,Phison,Silicon Motion,Rambus Memory,Montage Technology,Astera Labs,Microchip CXL,Marvell CXL,Samsung CXL Memory,SK hynix CXL Memory"),Z("compute","networking-silicon","Networking silicon","Compute cluster",["Ethernet","InfiniBand","DPU","Optics DSP"],"NVIDIA Mellanox,Intel Ethernet,AMD Pensando,Cisco Silicon One,Marvell Teralynx,Broadcom Tomahawk,Asterfusion,Alphawave Connectivity,Credo Semiconductor,Astera Labs Fabric,MaxLinear,Macom Technology"),Z("compute","edge-ai","Edge AI hardware","Compute cluster",["Edge accelerator","AI PC","Embedded NPU"],"NVIDIA Jetson,Google Coral,Intel Movidius,AMD Ryzen AI,Apple M-series,Qualcomm Snapdragon X,Samsung Exynos AI,Hailo-8,Ambarella CVflow,NXP eIQ,Rockchip NPU,Horizon Robotics Journey"),Z("datacenter","server-odm","Server ODMs & rack builders","Systems cluster",["GPU servers","Rack-scale systems"],"Yadro,Aquarius,Kraftway,Depo Computers,Foxconn Industrial Internet,Quanta Cloud Technology,Wiwynn,Wistron,Inventec,Pegatron,Compal,Gigabyte Enterprise,ASRock Rack,MiTAC Computing,Aivres,Hyve Solutions,Ingrasys,ZT Systems,Accton Technology"),Z("datacenter","network-systems","Data-center networking","Systems cluster",["Switching","Routing","Network OS"],"Juniper Networks,Nokia Data Center,F5 Networks,Extreme Networks,Asterfusion,Edgecore Networks,Arrcus,Cumulus Linux,SONiC,DriveNets,Alcatel-Lucent Enterprise,Ruijie Networks"),Z("datacenter","optical-interconnect","Optical interconnect","Systems cluster",["Transceivers","Coherent optics","CPO"],"Coherent Corp,Lumentum Holdings,II-VI Photonics,Innolight,Eoptolink,Accelink,Source Photonics,Fabrinet,Applied Optoelectronics,Luxshare Precision,Hisense Broadband,Marvell Inphi,Cisco Acacia,POET Technologies,Ayar Labs,Celestial AI"),Z("datacenter","storage-systems","AI data storage","Systems cluster",["Parallel file systems","Object storage","NVMe"],"NetApp,Pure Storage,VAST Data,Dell PowerScale,IBM Storage,DDN,WEKA,Nutanix,Qumulo,MinIO,Cloudian,Hitachi Vantara,Seagate,Western Digital Storage,Solidigm SSD"),Z("datacenter","power-delivery","Power delivery & UPS","Infrastructure cluster",["UPS","Busway","Switchgear","Transformers"],"ABB Electrification,Delta Electronics,Legrand,Rittal,Mitsubishi Electric,Hitachi Energy,GE Vernova Grid,Siemens Smart Infrastructure,Socomec,Piller Power Systems,Caterpillar Power,Rolls-Royce mtu,Bloom Energy,Generac,Cummins Power"),Z("datacenter","thermal-management","Cooling & thermal management","Infrastructure cluster",["Liquid cooling","CDU","Immersion"],"CoolIT Systems,Chilldyne,Submer,LiquidStack,Iceotope,ZutaCore,Motivair,Boyd,Modine,Asetek,Accelsius,JetCool,GRC,Trane Technologies,Johnson Controls,Carrier,Danfoss,Munters,nVent,Stulz"),Z("datacenter","colo-builders","Colocation & data-center operators","Infrastructure cluster",["Colocation","Powered shell","Interconnection"],"QTS Data Centers,Vantage Data Centers,CyrusOne,NTT Global Data Centers,STACK Infrastructure,Aligned Data Centers,Switch,Compass Datacenters,DataBank,Iron Mountain Data Centers,EdgeConneX,Colovore,Prime Data Centers,AirTrunk,Global Switch,Keppel Data Centres,GDS Holdings,Chindata,Scala Data Centers,atNorth"),Z("datacenter","construction-engineering","Data-center engineering & construction","Infrastructure cluster",["EPC","Design","Commissioning"],"Bechtel,Jacobs,AECOM,Turner Construction,Skanska,DPR Construction,Holder Construction,Mortenson,Fluor,Black & Veatch,Burns & McDonnell,Arup,WSP,Syska Hennessy,Corgan"),Z("cloud","gpu-clouds","GPU & sovereign clouds","Cloud cluster",["GPU instances","Bare metal accelerators"],"Lambda,Crusoe,Voltage Park,Fluidstack,IREN,Nscale,Firmus,G42 Core42,Applied Digital,Sustainable Metal Cloud,Genesis Cloud,RunPod,Vultr,Paperspace,OVHcloud,Scaleway,Hetzner Cloud,Tencent Cloud,Huawei Cloud,Baidu AI Cloud"),Z("cloud","regional-clouds","Regional & enterprise clouds","Cloud cluster",["IaaS","Managed AI"],"Yandex Cloud,SberCloud,VK Cloud,Selectel,MTS Web Services,SAP Business Technology Platform,VMware Cloud,Red Hat OpenShift AI,DigitalOcean,Linode Akamai,CloudSigma,Exoscale,UpCloud,NTT Cloud,Fujitsu Cloud,KT Cloud,Naver Cloud,Reliance JioCloud"),Z("cloud","edge-cloud","Edge & distributed inference","Cloud cluster",["Edge inference","Serverless GPU"],"Fastly Compute,Akamai Connected Cloud,Vercel AI Cloud,Netlify Edge,Deno Deploy,Fly.io,Modal,Baseten Cloud,BentoCloud,Beam Cloud,Replicate Cloud"),Z("models","frontier-labs","Frontier model laboratories","Model cluster",["Large multimodal models","Reasoning models"],"Yandex AI,Sber AI,AIRI,MTS AI,T-Bank AI Research,Microsoft AI,Amazon AGI Lab,Apple Foundation Models,Alibaba DAMO Academy,Baidu ERNIE,Tencent Hunyuan,ByteDance Seed,Zhipu AI,Moonshot AI,MiniMax,01.AI,StepFun,Baichuan AI,Shanghai AI Laboratory,Technology Innovation Institute,AI21 Labs,Aleph Alpha,Writer Palmyra,Reka AI,Inflection AI"),Z("models","open-model-labs","Open model developers","Model cluster",["Open-weight LLMs","Research models"],"Allen Institute for AI,BigScience,EleutherAI,Nous Research,OpenBMB,InternLM,LAION,Databricks Mosaic Research,IBM Granite,Cerebras Models,Essential AI,Prime Intellect,Arcee AI,OpenChat,Beijing Academy of AI,Kyutai,LightOn,SAIL"),Z("models","image-video-models","Image & video model labs","Model cluster",["Image generation","Video generation"],"Black Forest Labs,Luma AI,Pika,Runway Research,Adobe Research,Midjourney Models,Ideogram,Bria AI,Stability AI Research,Leonardo AI,Kuaishou Kling,Alibaba Wan,Google Veo,OpenAI Sora,Lightricks LTX,Genmo,Haiper,PixVerse,ShengShu Vidu,Higgsfield"),Z("models","audio-speech-models","Audio & speech model labs","Model cluster",["Speech recognition","Voice synthesis","Music models"],"ElevenLabs,Deepgram,AssemblyAI,Cartesia,Resemble AI,PlayHT,Speechmatics,Hume AI,Suno Research,Udio,Stability Audio,OpenAI Whisper,Google AudioLM,Meta AudioCraft,Rime,WellSaid Labs,Coqui,SoundHound AI"),Z("models","science-models","Scientific foundation models","Model cluster",["Biology","Chemistry","Weather","Materials"],"Isomorphic Labs,Recursion,Generate Biomedicines,EvolutionaryScale,Profluent,Inceptive,Cradle,Bioptimus,Orbital Materials,Periodic Labs,FutureHouse,Google AlphaFold,NVIDIA BioNeMo,Microsoft Aurora,IBM Research AI for Science,Prescient Design,Basecamp Research"),Z("models","openai-models","OpenAI model families","Model family",["Reasoning","Multimodal","Coding"],"GPT-5.6 Sol,GPT-5.6 Terra,GPT-5.6 Luna,GPT-5.5,GPT-5.3-Codex,GPT-5.2,GPT-5.1,GPT-5,GPT-5 mini,GPT-5 nano,o3,o4-mini,Sora 2,GPT-Image-2,gpt-oss-120b"),Z("models","anthropic-models","Anthropic model families","Model family",["Reasoning","Coding","Computer use"],"Claude Fable 5,Claude Opus 5,Claude Sonnet 5,Claude Opus 4.8,Claude Opus 4.7,Claude Sonnet 4.6,Claude Sonnet 4.5,Claude Haiku 4.5"),Z("models","google-models","Google model families","Model family",["Multimodal","Media","Robotics"],"Gemini 3.7 Flash,Gemini 3.6 Flash,Gemini 3.5 Flash,Gemini 3.1 Pro,Nano Banana 2,Nano Banana 2 Lite,Nano Banana Pro,Gemini Omni Flash,Veo 3.1,Lyria 3 Pro,Gemini Embedding 2,Gemini Robotics-ER 2,Gemini Robotics-ER 1.6,AlphaFold 3"),Z("models","meta-xai-models","Meta & xAI model families","Model family",["Open-weight","Multimodal","Agentic"],"Llama 4 Scout,Llama 4 Maverick,Llama Guard 4,Llama 3.3 70B,Meta Movie Gen,Muse Spark,Grok 4.5,Grok Imagine,Grok Voice"),Z("models","chinese-models","Chinese model families","Model family",["Reasoning","Coding","Multimodal"],"Kimi K3,Kimi K2.7 Code,Kimi K2.6,DeepSeek V4 Pro,DeepSeek V4 Flash,DeepSeek R1,Qwen3-Max,Qwen3,Qwen Coder,Qwen-VL,GLM-5.3,GLM-5.2,Doubao Model,Hunyuan,ERNIE,MiMo-V2.5 Pro,MiniMax M3,MiniMax M2.7"),Z("models","european-models","European & Canadian model families","Model family",["Multilingual","Open-weight","Enterprise"],"Mistral Medium 3.5,Mistral Small 4,Mistral Large 3,Devstral 2,Mistral OCR 4,Robostral Navigate,Shieldstral,Voxtral,Codestral,Cohere Command A+,North Mini Code,Cohere Embed,Aleph Alpha Luminous,AI21 Jamba"),Z("models","media-models","Independent media model families","Model family",["Image","Video","Audio"],"FLUX.1,FLUX.2,Stable Diffusion 3.5,Stable Audio,Midjourney V7,Runway Gen-4,Luma Ray,Pika 2.2,Ideogram 3.0,Eleven v3,Suno v5,Udio 2"),Z("models","open-science-models","Open & scientific model families","Model family",["Research","Science","Open weights"],"OLMo 2,OLMoE,Falcon 3,IBM Granite 4,DBRX,Cerebras-GPT,Command R Open,ESM3,Evo 2,ProGen3,BioNeMo"),Z("infra","inference-serving","Inference serving platforms","Infrastructure cluster",["Model serving","GPU scheduling","Inference optimization"],"Baseten,BentoML,Cerebrium,Anyscale,OctoAI,Predibase,Lepton AI,DeepInfra,Fal.ai,Modal Labs,Beam,Inferless,KServe,Seldon,Ray Serve,Triton Inference Server,TorchServe,TensorRT-LLM,DeepSpeed-MII,OpenLLM"),Z("infra","training-platforms","Training & fine-tuning","Infrastructure cluster",["Distributed training","Fine-tuning","RLHF"],"Lightning AI,Determined AI,MosaicML,Modal Training,Runhouse,Skypilot,Prime Intellect Compute,Unsloth,Axolotl,Ludwig,Predibase Fine-tuning,OpenPipe,Arcee Training,Reinforcement AI,TRL,Colossal-AI,Megatron-LM,Horovod"),Z("infra","data-platforms","Data & feature infrastructure","Infrastructure cluster",["Lakehouse","Streaming","Feature store"],"Confluent,Apache Spark,Apache Flink,dbt Labs,Fivetran,Airbyte,Astronomer,Prefect,Dagster,Flyte,Feast,Tecton,Hopsworks,Monte Carlo Data,Bigeye,Soda Data,Great Expectations,Atlan,Collibra,Alation"),Z("infra","vector-search","Vector search & retrieval","Infrastructure cluster",["Vector database","Hybrid search","RAG"],"Qdrant,Chroma,LanceDB,pgvector,Elastic Vector Search,OpenSearch Vector,Redis Vector,SingleStore,MongoDB Atlas Vector,Neo4j Vector,Typesense,Vespa,Marqo,Vald,Turbopuffer,Vertex AI Vector Search,Azure AI Search"),Z("infra","observability-evals","Observability & evaluation","Infrastructure cluster",["Tracing","Evaluation","Testing"],"Arize AI,Fiddler AI,WhyLabs,Galileo,Humanloop,Braintrust,Patronus AI,Giskard,TruLens,Deepchecks,Confident AI,Ragas,Promptfoo,Helicone,Langfuse,Phoenix Arize,Comet ML,Neptune.ai,ClearML,MLflow"),Z("infra","data-labeling","Data labeling & synthetic data","Infrastructure cluster",["Human feedback","Synthetic data","Data curation"],"Surge AI,Labelbox,Snorkel AI,Appen,Defined.ai,Sama,iMerit,CloudFactory,Invisible Technologies,Toloka,Centific,SuperAnnotate,V7 Labs,Encord,Dataloop,Kili Technology,Mostly AI,Synthesis AI,Renderpeople"),Z("infra","ai-security","AI security & governance","Infrastructure cluster",["Model security","Guardrails","Governance"],"Protect AI,HiddenLayer,Robust Intelligence,CalypsoAI,Prompt Security,Lakera Guard,Guardrails AI,Aporia,Arthur AI,Credo AI,Holistic AI,ModelOp,Fiddler Guardrails,WhyLabs LangKit,Rebuff,Invariant Labs,Zenity,Adversa AI,Promptfoo Security,Noma Security"),Z("infra","model-gateways","Model gateways & routing","Infrastructure cluster",["API gateway","Routing","Caching"],"Portkey,LiteLLM,Martian,Not Diamond,Unify AI,Kong AI Gateway,Tyk AI Gateway,Cloudflare AI Gateway,Helicone Gateway,Keywords AI,Eden AI,Requesty,TrueFoundry,OpenRouter Gateway"),Z("developer","ml-frameworks","ML frameworks","Developer cluster",["Training framework","Tensor compiler"],"Keras,Apache MXNet,PaddlePaddle,OneFlow,MindSpore,Flax,Haiku,Equinox,PyTorch Lightning,fastai,scikit-learn,XGBoost,LightGBM,CatBoost,Jittor, tinygrad"),Z("developer","compilers-runtimes","Compilers & runtimes","Developer cluster",["Kernel compiler","Graph compiler","Runtime"],"OpenXLA,MLIR,TVM,IREE,ONNX Runtime,TensorRT,OpenVINO,Apache TVM,Glow,BladeDISC,TorchInductor,TorchDynamo,Triton Compiler,ROCm,HIP,SYCL,oneAPI"),Z("developer","local-ai","Local AI runtimes","Developer cluster",["Desktop inference","Quantization"],"Ollama,LM Studio,Jan,LocalAI,GPT4All,Msty,Open WebUI,text-generation-webui,ExLlamaV2,MLC LLM,TensorFlow Lite,LiteRT,Core ML,ExecuTorch,MediaPipe,NCNN,MNN"),Z("developer","rag-frameworks","RAG & application frameworks","Developer cluster",["Retrieval","Prompt pipelines"],"DeepPavlov,Natasha NLP,Haystack,Semantic Kernel DSPy,DSPy,Guidance,Outlines,Instructor,PydanticAI,Marvin,EmbedChain,AutoGen,LangGraph,LangServe,Flowise,Langflow,Dify,Haystack Agents,txtai,Verba"),Z("developer","mlops-open-source","Open-source MLOps","Developer cluster",["Pipelines","Registry","Deployment"],"Kubeflow,Metaflow,ZenML,ClearML Open Source,DVC,Pachyderm,Feast Open Source,MLflow Open Source,BentoML Open Source,Seldon Core,KServe Open Source,Flyte Open Source,Argo Workflows,Tekton,Airflow,Weights & Biases Artifacts"),Z("developer","standards-protocols","AI standards & protocols","Developer cluster",["Interoperability","Safety","Metadata"],"OpenAI API format,Model Context Protocol,Agent2Agent Protocol,OpenTelemetry GenAI,Open Neural Network Exchange,Safetensors,GGUF,MLCommons,MLPerf,C2PA,Coalition for Content Provenance,NIST AI RMF,ISO IEC 42001,OpenAPI,JSON Schema"),Z("agents","coding-agents","Coding agents & IDEs","Agent cluster",["Code generation","Repository agents"],"OpenAI Codex,Devin,Replit Agent,Aider,Cline,Roo Code,Continue,Tabnine,Amazon Q Developer,Gemini Code Assist,Sourcegraph Cody,Augment Code,JetBrains AI Assistant,Qodo,Poolside,Magic.dev,Factory AI,Dagger AI,GitHub Copilot Workspace,SWE-agent"),Z("agents","agent-frameworks","Agent orchestration frameworks","Agent cluster",["Tool use","Multi-agent","State graphs"],"Microsoft AutoGen,Google ADK,LangGraph Agents,Mastra,Agno,Smolagents,PydanticAI Agents,LlamaIndex Agents,Haystack Agents SDK,CrewAI Enterprise,OpenAI Swarm,MetaGPT,AutoGPT,BabyAGI,SuperAGI,Camel AI,TaskWeaver,Langroid,Agency Swarm,Letta"),Z("agents","browser-computer-agents","Browser & computer-use agents","Agent cluster",["Browser automation","GUI action"],"OpenAI Operator,Anthropic Computer Use,Google Project Mariner,Microsoft Copilot Vision,Perplexity Comet Agent,Adept ACT-1,MultiOn,Induced AI,HyperWrite Personal Assistant,Convergence Proxy,Steel Browser,Browserbase,Stagehand,Playwright MCP,Puppeteer MCP,Skyvern,LaVague,Magnitude,AgentQL"),Z("agents","enterprise-agents","Enterprise agent platforms","Agent cluster",["Workflow agents","Enterprise automation"],"GigaChat,Yandex Alice,Just AI,Tinkoff VoiceKit,Salesforce Agentforce,Microsoft Copilot Studio,Google Agentspace,AWS Bedrock Agents,Oracle AI Agent Studio,ServiceNow AI Agents,SAP Joule Agents,IBM watsonx Orchestrate,Celonis Agents,UiPath Agentic Automation,Automation Anywhere AI Agents,Workday Illuminate,Glean Agents,Moveworks,Writer AI HQ,Aisera,Kore.ai,Yellow.ai,Amelia"),Z("agents","voice-agents","Voice-agent platforms","Agent cluster",["Realtime voice","Contact center agents"],"Retell AI,Vapi,Bland AI,PolyAI,Parloa,Decagon,Sierra,LiveKit Agents,Pipecat,Daily Bots,Agora Conversational AI,Deepgram Voice Agent,ElevenLabs Conversational AI,Cartesia Agents,Air AI,Replicant,Cognigy,Observe.AI,Five9 AI Agents"),Z("agents","agent-memory-identity","Agent memory & identity","Agent cluster",["Long-term memory","Agent authentication"],"Mem0,Zep,Letta Memory,LangMem,Graphiti,Supermemory,Memary,Arcade.dev,Composio,Nango,WorkOS Agent Auth,Auth0 for AI Agents,Stytch Connected Apps,Descope Agentic Identity,1Password Agentic AI"),Z("applications","search-knowledge","Search & knowledge applications","Application cluster",["Answer engine","Enterprise search"],"Yandex Search,Mail.ru Search,Sber Salute,Glean,You.com,Phind,Exa,Tavily,Kagi Assistant,Brave Leo,Microsoft Copilot Search,Google AI Overviews,Arc Search,Consensus,Elicit,Scite,Semantic Scholar,Hebbia,AlphaSense,Coveo,Sana AI,Guru,Slite Ask"),Z("applications","productivity-collaboration","Productivity & collaboration AI","Application cluster",["Writing","Meetings","Knowledge work"],"Microsoft 365 Copilot,Google Workspace Gemini,Slack AI,Zoom AI Companion,Grammarly,Coda AI,Airtable AI,ClickUp Brain,Asana Intelligence,Monday AI,Dropbox Dash,Box AI,Atlassian Intelligence,Linear AI,Read AI,Otter.ai,Fireflies.ai,Granola,Fathom,Superhuman AI"),Z("applications","creative-design","Design & creative AI","Application cluster",["Design","Image","3D"],"Figma AI,Canva Magic Studio,Adobe Creative Cloud AI,Leonardo AI,Ideogram,Clipdrop,Photoroom,Topaz Labs,Remove.bg,Krea,Playground AI,Recraft,Scenario,Meshy,Kaedim,Luma Genie,Spline AI,Autodesk AI,Unity Muse,Scenario.gg"),Z("applications","video-media","Video & media AI","Application cluster",["Video generation","Editing","Localization"],"Synthesia,HeyGen,Descript,VEED,Kapwing,OpusClip,Twelve Labs,Tavus,D-ID,Colossyan,Pictory,InVideo AI,Wonder Studio,Flawless AI,Papercup,Rask AI,ElevenLabs Dubbing,Captions,Hour One,Waymark"),Z("applications","enterprise-software","Enterprise software AI","Application cluster",["CRM","ERP","Operations"],"SAP Joule,Oracle Fusion AI,Microsoft Dynamics Copilot,HubSpot AI,Zoho Zia,Workday AI,Intuit Assist,Thomson Reuters CoCounsel,LexisNexis AI,Ironclad AI,Icertis Copilot,UiPath Autopilot,Celonis Process Copilot,Dataiku,DataRobot,C3 AI,Alteryx AI,Palantir Foundry AI,ThoughtSpot Sage,Qlik Staige"),Z("applications","cybersecurity","Cybersecurity AI","Application cluster",["SOC","Threat detection","Identity"],"Kaspersky AI,Positive Technologies,BI.ZONE,Group-IB,Microsoft Security Copilot,Palo Alto Cortex,CrowdStrike Charlotte AI,SentinelOne Purple AI,Wiz AI,Abnormal Security,Darktrace,Securonix,ReliaQuest GreyMatter,Recorded Future AI,Google SecOps Gemini,Splunk AI Assistant,Rapid7 AI Engine,Tenable AI,Cloudflare Security AI,Proofpoint AI,Material Security,Varonis AI,Rubrik Security Cloud,Cybereason AI"),Z("applications","healthcare-clinical","Clinical & healthcare AI","Application cluster",["Clinical documentation","Diagnostics","Care navigation"],"Abridge,Nuance DAX,Aidoc,PathAI,Paige,Viz.ai,Butterfly Network,Owkin,Insilico Medicine,Suki,Ambience Healthcare,Nabla,Corti,Hippocratic AI,OpenEvidence,Glass Health,Rad AI,Eleos Health,Notable,Commure"),Z("applications","drug-discovery","Drug discovery & biotech AI","Application cluster",["Molecule design","Clinical development"],"Schrödinger,Exscientia,BenevolentAI,Atomwise,Insitro,Genesis Therapeutics,XtalPi,Valence Labs,Absci,Generate Biomedicines,Recursion OS,Relay Therapeutics,Formation Bio,Owkin Research,Tempus Research,Pathos AI,Isomorphic Labs Platform,Cradle Biology,Profluent Design,EvolutionaryScale ESM"),Z("applications","finance-legal","Finance & legal AI","Application cluster",["Research","Compliance","Legal workflows"],"Bloomberg AI,FactSet AI,Refinitiv AI,S&P Kensho,AlphaSense Finance,Ramp Intelligence,Brex AI,Mercury AI,Stripe AI,Mastercard Decision Intelligence,Visa AI,Feedzai,Quantexa,Harvey AI,Clio Duo,Lexion,Evisort,Robin AI,Spellbook,EvenUp"),Z("applications","education","Education AI","Application cluster",["Tutoring","Course creation","Assessment"],"Khanmigo,Quizlet Q-Chat,CheggMate,Photomath,Socratic,MagicSchool,SchoolAI,Carnegie Learning,Century Tech,Squirrel AI,Turnitin AI,Grammarly for Education,Coursera Coach,Udemy AI Assistant,Speak,ELSA Speak,Duolingo Max,StudyFetch,NotebookLM,Consensus Education"),Z("applications","customer-service-sales","Customer service & sales AI","Application cluster",["Contact center","Sales enablement"],"Intercom Fin,Zendesk AI,Ada,Forethought,Kustomer AI,Genesys Cloud AI,NICE CXone,Five9 Genius,Talkdesk AI,Salesloft AI,Outreach AI,Gong,Clari,Cresta,Balley AI,Regie.ai,Artisan AI,11x,Apollo AI,HubSpot Breeze"),Z("applications","defense-government","Defense & government AI","Application cluster",["ISR","Command systems","Public sector"],"Shield AI,Helsing,Scale Donovan,Palantir Maven,Rebellion Defense,Primer AI,BlackSky,Planet Labs AI,Epirus,Skydio,General Atomics Autonomy,Lockheed Martin AI,Boeing AI,Northrop Grumman AI,RTX AI,BAE Systems AI,Thales AI,Leidos AI,CACI AI,Accenture Federal AI"),Z("applications","science-engineering","Science & engineering AI","Application cluster",["Simulation","Materials","Research"],"NVIDIA Omniverse,Ansys AI,Autodesk Fusion AI,Siemens Industrial Copilot,Dassault Systèmes AI,Altair AI,MathWorks AI,Wolfram Alpha,Orbital Materials,PhysicsX,Monolith AI,Matlantis,Citrine Informatics,Schrödinger Materials,Microsoft Discovery,Google DeepMind Science,FutureHouse Platform,Benchling AI,LabGenius,Emerald Cloud Lab"),Z("applications","consumer-companions","Consumer assistants & companions","Application cluster",["Personal assistant","Character chat"],"Character.AI,Pi,Replika,Poe,Meta AI Assistant,Google Gemini App,Microsoft Copilot,Claude App,Grok App,Amazon Alexa Plus,Samsung Galaxy AI,Apple Intelligence,Snap My AI,Discord Clyde,Khanmigo Consumer,Chai,Talkie,Kindroid,Nomi AI,Inflection Pi"),Z("robotics","humanoid-robots","Humanoid robotics","Robotics cluster",["Humanoid robot","General-purpose manipulation"],"Promobot,Neurobotics,Apptronik,1X Technologies,Sanctuary AI,Unitree Robotics,UBTECH,Fourier Intelligence,NEURA Robotics,Engineered Arts,AgiBot,Galbot,Kepler Exploration,Clone Robotics,Mentee Robotics,RobotEra,LimX Dynamics,PNDbotics,Boston Dynamics Atlas,Tesla Optimus,Figure 02,Agility Digit"),Z("robotics","industrial-robots","Industrial & warehouse robotics","Robotics cluster",["Robot arms","Warehouse automation"],"KUKA,Yaskawa,Universal Robots,Omron Robotics,Epson Robots,Kawasaki Robotics,Staubli Robotics,Comau,Nachi-Fujikoshi,Mitsubishi Electric Robotics,Geekplus,Locus Robotics,Symbotic,AutoStore,Berkshire Grey,RightHand Robotics,Intrinsic,Covariant,Realtime Robotics,Standard Bots"),Z("robotics","autonomous-vehicles","Autonomous vehicles","Robotics cluster",["Robotaxi","Autonomous trucking","ADAS"],"Yandex Autonomous Transport,Cognitive Pilot,SberAutoTech,Cruise,Zoox,Aurora Innovation,Motional,Pony.ai,WeRide,Apollo Go,Mobileye,Waabi,Torc Robotics,Plus,Einride,Gatik,May Mobility,Nuro,Oxbotica,Oxa,Wayve,Applied Intuition,Helm.ai"),Z("robotics","drones-autonomy","Drones & autonomous systems","Robotics cluster",["UAV","Autonomy stack"],"Skydio,Zipline,Anduril Ghost,Shield AI Hivemind,Quantum Systems,Auterion,AeroVironment,Insitu,Flyability,Exyn Technologies,Percepto,Matternet,Wing,Amazon Prime Air,DroneDeploy,BRINC,Dedrone,Blue Robotics,Saronic,Sea Machines"),Z("robotics","robotics-software","Robotics software & simulation","Robotics cluster",["Simulation","Middleware","Foundation models"],"ROS,ROS 2,Open Robotics,Isaac Sim,MuJoCo,Gazebo,Webots,CoppeliaSim,Drake Robotics,MoveIt,LeRobot,OpenVLA,RT-2,Octo Robot Policy,Physical Intelligence π0,NVIDIA GR00T,Intrinsic Flowstate,PickNik,Formant,InOrbit"),Z("robotics","sensors-actuators","Robotics sensors & actuators","Robotics cluster",["LiDAR","Motors","Machine vision"],"Hesai,Luminar,Ouster,Innoviz,Velodyne,Robosense,SICK,Keyence,Cognex,Basler,Teledyne FLIR,Intel RealSense,Orbbec,Maxon Motor,Harmonic Drive,Nabtesco,THK,HIWIN,Nidec,Moog"),Z("markets","regulated-markets","Regulated end markets","End-market cluster",["Public services","Regulated operations"],"Insurance,Telecommunications,Energy utilities,Transportation,Pharmaceuticals,Legal services,Education systems,Public safety,Local government,Critical infrastructure"),Z("markets","industrial-markets","Industrial end markets","End-market cluster",["Operations","Automation"],"Automotive,Aerospace,Logistics,Warehousing,Construction,Mining,Agriculture,Oil and gas,Chemicals,Electronics manufacturing"),Z("markets","commercial-markets","Commercial end markets","End-market cluster",["Services","Commerce"],"Retail,E-commerce,Advertising,Consulting,Accounting,Human resources,Real estate,Hospitality,Travel,Professional services"),Z("markets","creator-markets","Creative & knowledge markets","End-market cluster",["Content","Knowledge work"],"Creators,Journalists,Publishers,Film studios,Game developers,Design teams,Marketing teams,Students,Teachers,Independent developers")],wi={openai:"GPT-5.6 Sol,GPT-5.6 Terra,GPT-5.6 Luna,GPT-5.5,GPT-5.3-Codex,GPT-5.2,GPT-5.1,GPT-5,GPT-5 mini,GPT-5 nano,o3,o4-mini,Sora 2,GPT-Image-2,gpt-oss-120b",anthropic:"Claude Fable 5,Claude Opus 5,Claude Sonnet 5,Claude Opus 4.8,Claude Opus 4.7,Claude Sonnet 4.6,Claude Sonnet 4.5,Claude Haiku 4.5",deepmind:"Gemini 3.7 Flash,Gemini 3.6 Flash,Gemini 3.5 Flash,Gemini 3.1 Pro,Nano Banana 2,Nano Banana 2 Lite,Nano Banana Pro,Gemini Omni Flash,Veo 3.1,Lyria 3 Pro,Gemini Embedding 2,Gemini Robotics-ER 2,Gemini Robotics-ER 1.6,AlphaFold 3","meta-ai":"Llama 4 Scout,Llama 4 Maverick,Llama Guard 4,Llama 3.3 70B,Meta Movie Gen,Muse Spark",xai:"Grok 4.5,Grok Imagine,Grok Voice","moonshot-ai":"Kimi K3,Kimi K2.7 Code,Kimi K2.6",deepseek:"DeepSeek V4 Pro,DeepSeek V4 Flash,DeepSeek R1",qwen:"Qwen3-Max,Qwen3,Qwen Coder,Qwen-VL","zhipu-ai":"GLM-5.3,GLM-5.2","bytedance-seed":"Doubao Model","tencent-hunyuan":"Hunyuan","baidu-ernie":"ERNIE",minimax:"MiniMax M3,MiniMax M2.7",mistral:"Mistral Medium 3.5,Mistral Small 4,Mistral Large 3,Devstral 2,Mistral OCR 4,Robostral Navigate,Shieldstral,Voxtral,Codestral",cohere:"Cohere Command A+,North Mini Code,Cohere Embed,Command R Open",stability:"Stable Diffusion 3.5,Stable Audio","black-forest-labs":"FLUX.1,FLUX.2",midjourney:"Midjourney V7",runway:"Runway Gen-4",suno:"Suno v5","allen-institute-for-ai":"OLMo 2,OLMoE","technology-innovation-institute":"Falcon 3","ibm-granite":"IBM Granite 4",databricks:"DBRX",cerebras:"Cerebras-GPT",evolutionaryscale:"ESM3","luma-ai":"Luma Ray",pika:"Pika 2.2",ideogram:"Ideogram 3.0","arc-institute":"Evo 2",elevenlabs:"Eleven v3",salesforce:"ProGen3"};Object.assign(wi,{"aleph-alpha":"Aleph Alpha Luminous",nvidia:"BioNeMo"}),Object.assign(wi,{udio:"Udio 2",ai21:"AI21 Jamba"}),Object.assign(wi,{"xiaomi-mimo":"MiMo-V2.5 Pro"}),Object.assign(wi,{stepfun:"Step-3.5 Flash","shanghai-ai-laboratory":"Intern-S2 Preview","baichuan-ai":"Baichuan-M4","kuaishou-kling":"Kling 3.0","shengshu-vidu":"Vidu Q3","alibaba-wan":"Wan 2.7","meituan-longcat":"LongCat 2.0",sensetime:"SenseNova 6.7 Flash-Lite"});const Fl=[["carl-zeiss-smt","asml","SUPPLIES","Precision optics are core subsystems in ASML lithography systems.","confirmed"],["cymer","asml","SUPPLIES","Cymer light sources are integrated into ASML lithography platforms.","confirmed"],["trumpf","asml","SUPPLIES","TRUMPF supplies laser technology used in EUV light generation.","confirmed"],["lasertec","tsmc","PROVIDES_EQUIPMENT_TO","Inspection systems support advanced mask and wafer process control.","reported"],["besi","tsmc","PROVIDES_EQUIPMENT_TO","Hybrid-bonding equipment supports advanced packaging development.","reported"],["kioxia","nvidia","PROVIDES_MEMORY_TO","Flash storage participates in AI data pipelines, distinct from HBM.","representative"],["foxconn-industrial-internet","nvidia","PARTNERS_WITH","Foxconn manufactures and integrates NVIDIA-based AI factory systems.","confirmed"],["quanta-cloud-technology","nvidia","PARTNERS_WITH","QCT builds NVIDIA-based rack-scale systems.","confirmed"],["wiwynn","nvidia","PARTNERS_WITH","Wiwynn develops rack systems around NVIDIA platforms.","confirmed"],["coolit-systems","nvidia","PARTNERS_WITH","Liquid-cooling technology supports high-density NVIDIA systems.","confirmed"],["delta-electronics","nvidia","PARTNERS_WITH","Power and cooling systems participate in NVIDIA AI factory reference ecosystems.","confirmed"],["ge-vernova","nvidia","PARTNERS_WITH","Power infrastructure participates in NVIDIA AI factory planning.","confirmed"],["siemens-energy","nvidia","PARTNERS_WITH","Energy systems participate in AI factory infrastructure planning.","confirmed"],["bechtel","nvidia","PARTNERS_WITH","Engineering collaboration supports gigawatt-scale AI factory design.","confirmed"],["jacobs","nvidia","PARTNERS_WITH","Engineering collaboration supports AI factory digital twins.","confirmed"],["lambda","nvidia","RUNS_ON","Lambda provides cloud access to NVIDIA accelerators.","confirmed"],["crusoe","nvidia","RUNS_ON","Crusoe operates NVIDIA-based AI cloud infrastructure.","confirmed"],["nscale","nvidia","RUNS_ON","Nscale builds AI cloud infrastructure around NVIDIA systems.","confirmed"],["runpod","nvidia","RUNS_ON","RunPod offers NVIDIA GPU compute for AI workloads.","confirmed"],["microsoft-ai","azure","RUNS_ON","Microsoft AI products and model development use Azure infrastructure.","confirmed"],["amazon-agi-lab","aws","RUNS_ON","Amazon model development uses AWS infrastructure.","representative"],["apple-foundation-models","apple-m-series","RUNS_ON","Apple foundation models are optimized for Apple silicon.","confirmed"],["allen-institute-for-ai","hugging-face","INTEGRATES_WITH","AI2 distributes open models through the Hugging Face ecosystem.","confirmed"],["black-forest-labs","hugging-face","INTEGRATES_WITH","Black Forest Labs distributes model artifacts through Hugging Face.","confirmed"],["moonshot-ai","hugging-face","INTEGRATES_WITH","Moonshot publishes model artifacts through Hugging Face.","confirmed"],["tensorrt-llm","cuda","RUNS_ON","TensorRT-LLM optimizes LLM inference for NVIDIA CUDA GPUs.","confirmed"],["ollama","llamacpp","INTEGRATES_WITH","Ollama uses local inference runtimes including llama.cpp-derived components.","reported"],["open-webui","ollama","INTEGRATES_WITH","Open WebUI commonly connects to Ollama for local model serving.","confirmed"],["langgraph","langchain","INTEGRATES_WITH","LangGraph is part of the LangChain agent ecosystem.","confirmed"],["microsoft-autogen","azure","INTEGRATES_WITH","AutoGen integrates with Azure-hosted models and services.","confirmed"],["google-adk","deepmind","INTEGRATES_WITH","Google ADK supports Gemini models and Google’s agent ecosystem.","confirmed"],["salesforce-agentforce","salesforce","INTEGRATES_WITH","Agentforce is Salesforce’s enterprise agent platform.","confirmed"],["aws-bedrock-agents","aws","RUNS_ON","Bedrock Agents is a managed AWS service.","confirmed"],["browserbase","browser-use","INTEGRATES_WITH","Hosted browsers provide execution infrastructure for browser agents.","reported"],["playwright-mcp","mcp","INTEGRATES_WITH","Playwright MCP exposes browser automation through MCP.","confirmed"],["microsoft-365-copilot","azure","RUNS_ON","Microsoft 365 Copilot is delivered through Microsoft cloud infrastructure.","confirmed"],["google-workspace-gemini","deepmind","USES_MODEL_FROM","Workspace Gemini uses Google Gemini models.","confirmed"],["intercom-fin","openai","USES_MODEL_FROM","Intercom Fin has used OpenAI model infrastructure.","reported"],["synthesia","azure","RUNS_ON","Synthesia has publicly described Azure infrastructure relationships.","reported"],["abridge","healthcare","SUPPLIES","Abridge provides clinical documentation systems to healthcare organizations.","confirmed"],["shield-ai","defense","SUPPLIES","Shield AI provides autonomous systems for defense missions.","confirmed"],["apptronik","nvidia-isaac","INTEGRATES_WITH","Apptronik participates in NVIDIA’s robotics ecosystem.","reported"],["unitree-robotics","nvidia-isaac","INTEGRATES_WITH","Unitree robots can integrate NVIDIA edge compute and simulation tools.","representative"],["ros-2","nvidia-isaac","INTEGRATES_WITH","Isaac ROS connects NVIDIA robotics acceleration to ROS 2.","confirmed"],["wayve","nvidia","TRAINS_ON","Wayve has used NVIDIA accelerated computing for autonomous driving development.","confirmed"]],Ce=(i,e,t,n,s,a)=>({layer:i,id:e,name:t,type:n,products:s,names:a.split(",").map(r=>r.trim()).filter(Boolean)}),kl=[Ce("materials","grid-utilities-global","Grid utilities for AI regions","Infrastructure cluster",["Grid capacity","Transmission","Power purchase"],"American Electric Power,Entergy,Exelon,PSEG,Xcel Energy,Ameren,FirstEnergy,Eversource Energy,National Grid plc,SSE plc,Iberdrola,Enel,RWE,E.ON,EDF,Engie,KEPCO,CLP Holdings,China Southern Power Grid,State Grid Corporation of China"),Ce("materials","nuclear-fuel-power","Nuclear power & fuel cycle","Infrastructure cluster",["Baseload electricity","Uranium","Small modular reactors"],"BWX Technologies,Centrus Energy,Orano,Framatome,Westinghouse Electric Company,Holtec International,NuScale Power,TerraPower,X-energy,Kairos Power,Rolls-Royce SMR,Ontario Power Generation,Bruce Power,Électricité de France,KHNP,Rosatom,CGN Power,CNNC,Energy Northwest,TVA"),Ce("materials","battery-backup-materials","Battery & backup-power inputs","Supply cluster",["UPS batteries","Copper","Cathode materials"],"CATL,BYD Energy Storage,LG Energy Solution,Samsung SDI,Panasonic Energy,Fluence,Northvolt,Saft,EnerSys,Eaton Energy Storage,Vertiv EnergyCore,Narada Power,EVE Energy,Hithium,Gotion High-Tech,Redwood Materials,Livent,Albemarle,SQM,Piedmont Lithium"),Ce("materials","thermal-materials","Thermal-interface & cooling materials","Supply cluster",["Thermal interface material","Dielectric coolant","Refrigerants"],"Henkel Electronics,Dow Performance Silicones,Shin-Etsu Thermal Interface Materials,Laird Performance Materials,Boyd Corporation,Indium Corporation,Wakefield Thermal,Fujipoly,Stockwell Elastomerics,DuPont Kalrez,Solvay Specialty Polymers,Chemours Opteon,Honeywell Solstice,Daikin Refrigerants,Fuchs Lubricants,Petro-Canada Lubricants,Engineered Fluids ElectroCool,Shell Immersion Cooling Fluid,Castrol ON Immersion Fluids,M&I Materials MIVOLT"),Ce("equipment","vacuum-abatement","Vacuum pumps & process abatement","Equipment cluster",["Vacuum systems","Gas abatement","Process exhaust"],"Edwards Vacuum,Ebara Precision Machinery,Pfeiffer Vacuum,Leybold,ULVAC,Busch Vacuum Solutions,Atlas Copco Vacuum,CS Clean Solutions,DAS Environmental Expert,Centrotherm Clean Solutions,Ecosys Abatement,Exyte Technology,KC Innovation,GST Global,Wonik QnC,Youngjin IND,Unisem Korea,Hugle Electronics,Taiyo Nippon Sanso Engineering,Air Water Mechatronics"),Ce("equipment","fab-automation","Fab automation & material handling","Equipment cluster",["AMHS","Wafer transport","Factory automation"],"Daifuku,Muratec,Tokyo Electron Device,Hirata Corporation,Sinfonia Technology,THK,SMC Corporation,Festo,IAI Corporation,Yaskawa Electric,Omron Automation,Keyence,Rockwell Automation,Siemens Digital Industries,Mitsubishi Electric Automation,Asyst Technologies,Brooks Automation,Rorze Corporation,Nidec Sankyo,Shinsung E&G"),Ce("equipment","mask-reticle","Photomask & reticle ecosystem","Manufacturing cluster",["Photomasks","Mask blanks","Reticle inspection"],"Toppan Photomask,Dai Nippon Printing Photomask,Photronics,Taiwan Mask Corporation,Compugraphics,Advanced Reproductions,SK-Electronics,Hoya Mask Blanks,AGC Electronics,Shin-Etsu Photomask Materials,Applied Materials PROVision,ZEISS AIMS,Lasertec Actis,KLA Teron,NuFlare EBM,IMS Multi-Beam Mask Writer,Mycronic Prexision,JEOL Electron Beam Lithography,Raith Nanofabrication,Heidelberg Instruments"),Ce("equipment","server-power-components","Server power electronics","Equipment cluster",["Power supplies","Busbars","Power conversion"],"Delta Electronics,Lite-On Technology,Chicony Power,Flex Power Modules,Advanced Energy Industries,Bel Power Solutions,TDK-Lambda,Artesyn Embedded Power,Murata Power Solutions,Infineon Power Systems,Monolithic Power Systems,Navitas Semiconductor,Power Integrations,Wolfspeed Power,ROHM Semiconductor,Vicor Corporation,AcBel Polytech,FSP Group,Mean Well,Schaffner"),Ce("equipment","optical-components-depth","Optical component supply chain","Equipment cluster",["Lasers","Transceivers","Connectors"],"Coherent Corp,Lumentum,II-VI Photonics,Fabrinet,Innolight Technology,Eoptolink Technology,Accelink Technologies,Source Photonics,AOI Applied Optoelectronics,Hisense Broadband,Sumitomo Electric Device Innovations,Mitsubishi Electric Optical Devices,Macom Photonics,Marvell Inphi,Broadcom Optical Systems,Senko Advanced Components,US Conec,Molex Optical Solutions,TE Connectivity Optical,Amphenol Fiber Systems"),Ce("fabrication","compound-semiconductor-fabs","Compound-semiconductor fabs","Manufacturing cluster",["Silicon photonics","GaN","SiC"],"GlobalFoundries Photonics,Lumentum Wafer Fab,Coherent Sherman,WIN Semiconductors,Visual Photonics Epitaxy,IQE,AXT Inc,Wolfspeed Mohawk Valley,onsemi East Fishkill,Infineon Kulim,STMicroelectronics Catania,Texas Instruments Lehi,Bosch Dresden,Rohm Apollo,San’an Integrated Circuit,HC SemiTek,Episil Technologies,United Monolithic Semiconductors,SMART Photonics,Advanced Micro Foundry"),Ce("fabrication","pcb-substrate-manufacturing","PCB & substrate manufacturing","Manufacturing cluster",["Server PCB","IC substrate","High-speed laminate"],"Zhen Ding Technology,Unimicron Technology,Compeq Manufacturing,Tripod Technology,Gold Circuit Electronics,Wus Printed Circuit,TTM Technologies,AT&S Chongqing,Ibiden Electronics,Shinko Electric Industries,Kinsus Interconnect,Daeduck Electronics,Simmtech,SEMCO Package Solutions,Shennan Circuits,Victory Giant Technology,Kinwong Electronic,Suntak Technology,Meiko Electronics,CMK Corporation"),Ce("fabrication","electronics-manufacturing","AI-system contract manufacturing","Manufacturing cluster",["Server assembly","Rack integration","Electronics manufacturing"],"Foxconn Industrial Internet,Quanta Computer,Wiwynn,Wistron,Inventec,Pegatron,Celestica,Jabil,Flex Ltd,Sanmina,USI Universal Scientific Industrial,Qisda,MiTAC Computing,Hyve Solutions,Ingrasys,ZT Systems Manufacturing,Compal Electronics,Kontron,Plexus Corp,Benchmark Electronics"),Ce("compute","ai-server-platforms","AI server platforms","Hardware cluster",["GPU servers","Rack-scale systems","Liquid-cooled systems"],"Gigabyte Giga Computing,ASUS Servers,ASRock Rack,MiTAC Computing Technology,QCT,Lenovo Neptune,Inspur NF Series,H3C UniServer,xFusion FusionServer,Fujitsu PRIMEHPC,NEC SX-Aurora,Atos Eviden BullSequana,Supermicro SuperCluster,Dell PowerEdge XE,HPE Cray XD,Cisco UCS AI,Oracle Exadata AI,IBM LinuxONE AI,Trenton Systems,One Stop Systems"),Ce("compute","chiplet-interconnect-products","Chiplet & die-to-die products","Technology cluster",["Die-to-die PHY","CXL","Chiplet fabric"],"UCIe Consortium,BoW Interface,Open Compute Project ODSA,Ayar Labs TeraPHY,Lightmatter Passage,Intel EMIB,Intel Foveros Direct,TSMC SoIC-X,TSMC LIPINCON,AMD Infinity Fabric,NVIDIA NVLink-C2C,Arm Chiplet System Architecture,Alphawave UCIe PHY,Synopsys UCIe IP,Cadence UCIe IP,Rambus UCIe Controller,Marvell CXL Switch,Astera Labs Scorpio,Microchip Switchtec,Credo HiWire"),Ce("compute","storage-controllers","AI storage controllers & media","Hardware cluster",["NVMe","SSD controllers","High-capacity drives"],"Samsung PM1743,Micron 9550 NVMe,Kioxia CM7,Solidigm D7,Western Digital Ultrastar,Seagate Exos,Phison Pascari,Silicon Motion MonTitan,Marvell Bravera,Microchip Flashtec,Broadcom MegaRAID,Memblaze PBlaze,ScaleFlux Computational Storage,Viking Enterprise Solutions,Nimbus Data,Pure Storage FlashBlade,VAST DataBox,DDN SFA,IBM FlashSystem,NetApp AFF"),Ce("compute","edge-module-vendors","Edge AI modules & boards","Hardware cluster",["Embedded accelerators","SOM","Industrial edge AI"],"Advantech Edge AI,AAEON AI,ADLINK Edge AI,Kontron AI,Vecow,Neousys Technology,Axiomtek,IEI Integration,DFI Inc,Avalue Technology,OnLogic,Connect Tech,Aetina,Seeed Studio reComputer,WINSYSTEMS,Premio Inc,Eurotech Edge AI,SECO Edge AI,Toradex,Variscite"),Ce("datacenter","electrical-switchgear","Data-center electrical infrastructure","Infrastructure cluster",["Switchgear","Transformers","Busway"],"ABB Electrification,Siemens Smart Infrastructure,Eaton Electrical,Schneider Electric Secure Power,GE Vernova Grid Solutions,Mitsubishi Electric Power Products,Hitachi Energy,Hammond Power Solutions,Virginia Transformer,Howard Industries,Prolec GE,Hyosung Heavy Industries,S&C Electric Company,Powell Industries,Vertiv ASCO,Rittal Power Distribution,Legrand Starline,Piller Power Systems,Socomec,Cummins Power Systems"),Ce("datacenter","generators-fuelcells","Backup generation & microgrids","Infrastructure cluster",["Generators","Fuel cells","Microgrids"],"Caterpillar Electric Power,Cummins Power Generation,Rolls-Royce mtu,Kohler Energy,Generac Industrial Power,Himoinsa,Rehlko,Doosan Fuel Cell,Bloom Energy,Ballard Power Systems,Plug Power,PowerSecure,Enchanted Rock,Aggreko,Energy Vault,Ameresco Microgrids,Scale Microgrids,Schneider Microgrid Solutions,Siemens Microgrid,GE Vernova Aeroderivative"),Ce("datacenter","cooling-equipment-depth","High-density cooling equipment","Infrastructure cluster",["CDU","Rear-door heat exchanger","Immersion tanks"],"LiquidCool Solutions,Green Revolution Cooling,Asperitas,Submer SmartPod,Iceotope Precision Liquid Cooling,ZutaCore HyperCool,CoolIT CHx,Vertiv Liebert XDU,Schneider Motivair CDU,Johnson Controls Silent-Aire,Modine Airedale,Stulz CyberCool,Munters SyCool,Daikin Applied,Carrier AquaEdge,Trane CenTraVac,Boyd Liquid Cooling,JetCool SmartPlate,Chilldyne Negative Pressure,Accelsius NeuCool"),Ce("datacenter","dc-developers-asia","Asia-Pacific data-center operators","Infrastructure cluster",["Colocation","Hyperscale campuses","Interconnection"],"AirTrunk,NextDC,Macquarie Data Centres,Digital Edge,Princeton Digital Group,ST Telemedia Global Data Centres,Keppel Data Centres,NTT Global Data Centers Japan,KDDI Telehouse,Colt Data Centre Services,Bridge Data Centres,Chayora,SpaceDC,DayOne Data Centers,CtrlS Datacenters,Sify Data Centers,Yotta Infrastructure,Nxtra by Airtel,AdaniConneX,BDx Data Centers"),Ce("datacenter","dc-developers-europe","European data-center operators","Infrastructure cluster",["Colocation","Hyperscale campuses","Sovereign hosting"],"OVHcloud Data Centers,Data4,atNorth,Green Mountain Data Centres,Bulk Infrastructure,AtlasEdge,Global Switch,Telehouse Europe,Interxion,DigiPlex,NorthC Datacenters,nLighten,Ark Data Centres,Vantage Data Centers EMEA,STACK Infrastructure EMEA,Iron Mountain EMEA,Maincubes,CloudHQ Europe,Penta Infra,Serverfarm"),Ce("datacenter","dc-construction-specialists","Data-center engineering & construction","Infrastructure cluster",["EPC","Mechanical systems","Commissioning"],"Mercury Engineering,Winthrop Technologies,Keeley Construction,Clune Construction,Fortis Construction,Whiting-Turner,Skanska Mission Critical,Suffolk Technologies,JE Dunn Construction,Hoffman Construction,Cupertino Electric,Rosendin Electric,Southland Industries,Faith Technologies,McKinstry,EMCOR Group,Comfort Systems USA,Salute Mission Critical,Linesight,Arcadis Data Centers"),Ce("cloud","regional-cloud-europe","European sovereign & regional clouds","Cloud cluster",["Compute","Managed Kubernetes","Sovereignty"],"Hetzner Cloud,Scaleway,IONOS Cloud,Exoscale,UpCloud,Leaseweb Cloud,Open Telekom Cloud,Aruba Cloud,OVHcloud Public Cloud,Clever Cloud,Gridscale,Elastx,City Network Cleura,Brightbox,CloudSigma,STACKIT,Orange Business Cloud,Swisscom Cloud,T-Systems Cloud,Outscale"),Ce("cloud","regional-cloud-asia","Asian regional clouds","Cloud cluster",["Compute","AI APIs","Sovereign regions"],"Naver Cloud,KT Cloud,NHN Cloud,Kakao Cloud,Sakura Cloud,IIJ GIO,Fujitsu Uvance Cloud,NEC Cloud,NTT Communications Cloud,Oracle Alloy Japan,Rakuten Cloud,Telstra Cloud,Optus Cloud,Singtel Paragon,Telkomsigma,Indosat AI Cloud,Viettel Cloud,FPT Cloud,Tata Communications Cloud,JioCloud"),Ce("cloud","gpu-marketplaces","GPU capacity marketplaces","Cloud cluster",["On-demand GPU","Bare metal accelerators","Distributed compute"],"Vast.ai,TensorDock,SaladCloud,io.net,Akash Network,Gensyn,Hyperbolic,Prime Intellect Compute,Shadeform,JarvisLabs.ai,Genesis Cloud,DataCrunch,Oblivus,Thunder Compute,Massed Compute,Hyperstack,Ori Industries,NexGen Cloud,Crusoe Cloud Marketplace,WhiteFiber"),Ce("models","regional-model-labs-asia","Asian foundation-model labs","Research cluster",["Language models","Multimodal models","Regional languages"],"Sakana AI,Preferred Networks AI,NTT Human Informatics Laboratories,Rakuten Institute of Technology,Naver HyperCLOVA X,Kakao Brain,LG AI Research,Samsung Research AI Center,SK Telecom A.X,Upstage AI,NC AI,Korea Institute of Science and Technology Information AI,NII Japan LLM Center,ELYZA,Rinna Co.,Stockmark,ABEJA,AI Singapore SEA-LION,Tech Mahindra Makers Lab,Sarvam AI"),Ce("models","regional-model-labs-europe","European foundation-model labs","Research cluster",["Language models","Sovereign AI","Multimodal models"],"LightOn,Aleph Alpha Research,Black Forest Labs Research,Kyutai,Cradle AI,Poolside Research,Magic LTM,DeepL Research,Silo AI Research,Poro AI,TurkuNLP,ELLIS Institute Tübingen,LAION,OpenGPT-X,Occiglot,Barcelona Supercomputing Center AI,ELLIS Alicante,Swiss AI Initiative,CERN OpenLab AI,Tilde AI"),Ce("models","enterprise-model-builders","Enterprise model builders","Research cluster",["Domain models","Private deployment","Industry AI"],"Writer AI,Typeface,AI21 Labs Research,Contextual AI,Rhymes AI,Imbue,Goodfire AI,Reka AI Research,Essential AI Research,Arcee AI Models,Databricks Mosaic AI Research,Snowflake Arctic Team,ServiceNow Research,Salesforce AI Research,SAP AI Research,Oracle Labs AI,IBM Research Granite,Intel Labs AI,Qualcomm AI Research,Bosch Center for AI"),Ce("models","science-model-labs","Scientific foundation-model organizations","Research cluster",["Biology","Chemistry","Materials science"],"Isomorphic Labs,Generate Biomedicines Research,Recursion Valence Labs,Insilico Medicine AI,Schrödinger Machine Learning,Relay Therapeutics AI,Exscientia AI,BenevolentAI Research,Owkin Research,Tempus Research,Formation Bio,Latent Labs,Chai Discovery,FutureHouse Research,Periodic Labs Research,Orbital Materials Research,Microsoft Research AI4Science,Google DeepMind Science,Meta FAIR Science,NVIDIA BioNeMo Research"),Ce("models","china-model-labs-depth","Chinese model organizations","Research cluster",["Foundation models","Multimodal AI","Industry models"],"InclusionAI,Ant Ling Team,Meituan LongCat Team,RedNote HiLab,JD Explore Academy,JD JoyAI,OPPO AndesAI,vivo AI Lab,Honor MagicLM,Lenovo AI Lab,NetEase Fuxi,NetEase Youdao AI,NetEase Leihuo AI,Kunlun Tech Skywork,360 AI Research,SenseTime Research,Chinese Academy of Sciences Automation Institute,Beijing Academy of Artificial Intelligence,IDEA Research,Tsinghua KEG Lab"),Ce("infra","model-evaluation-depth","Model evaluation & observability","Platform cluster",["Evals","Tracing","Production monitoring"],"LangSmith,Langfuse,Phoenix by Arize,Weights & Biases Weave,OpenAI Evals,Inspect AI,DeepEval,Ragas,Giskard AI,Confident AI,Evidently AI,Kolena,Traceloop,AgentOps,LangWatch,Parea AI,Lunary,Maxim AI,Literal AI,Comet Opik"),Ce("infra","ai-security-depth","AI security & red teaming","Platform cluster",["Model security","Prompt defense","Red teaming"],"Lakera,Protect AI,HiddenLayer,Robust Intelligence,Cisco AI Defense,CalypsoAI,Prompt Security,Zenity Security,Noma Security,Invariant Labs,Adversa AI,Haize Labs,Gray Swan AI,AIM Security,LayerX Security,Reality Defender,Harmonic Security,Pillar Security,DeepKeep,Enkrypt AI"),Ce("infra","synthetic-data-depth","Synthetic data & simulation","Platform cluster",["Synthetic datasets","Privacy","Scenario generation"],"MOSTLY AI,Gretel Synthetic Data,Tonic.ai,Hazy,Synthesized,Statice,YData,Gencove,Rendered.ai,Parallel Domain,Applied Intuition Simulation,Cognata,AImotive aiSim,Scale Donovan Simulation,Synthesis AI Human Data,Datagen,Neurolabs,Anyverse,Foretellix,Helm.ai World Models"),Ce("infra","data-licensing","Data licensing & rights infrastructure","Platform cluster",["Licensed corpora","Media rights","Attribution"],"Defined.ai Data Marketplace,Shutterstock AI Data,Getty Images Generative AI,Adobe Stock Data,DataCite,Copyright Clearance Center,TollBit,Human Native AI,Calliope Networks,Spawning AI,Avail Data Licensing,Dow Jones Factiva AI,LexisNexis AI Data,Thomson Reuters Data,Reddit Data API,Stack Overflow API,Common Crawl Foundation,Wikimedia Enterprise,Internet Archive Research Services,News Corp AI Licensing"),Ce("developer","agent-frameworks-depth","Agent frameworks & orchestration","Software cluster",["Agent graphs","Tool execution","Memory"],"Mastra,VoltAgent,Agno,OpenAI Swarm,Microsoft AutoGen,Google Agent Development Kit,CrewAI Enterprise,LangGraph Platform,LlamaIndex Workflows,PydanticAI,Smolagents,Semantic Router,Haystack Agents,Camel AI,AutoGPT Platform,BabyAGI,Letta,MemGPT,SuperAGI,OpenHands"),Ce("developer","inference-compilers-depth","Inference compilers & kernels","Software cluster",["Kernel generation","Graph compilation","Quantization"],"OpenAI Triton Compiler,MLC LLM,Apache TVM,IREE,OpenXLA,TensorRT,TensorRT-LLM,ONNX Runtime,Intel OpenVINO,AMD MIGraphX,ROCm Composable Kernel,ThunderKittens,FlashInfer,FlashAttention,TileLang,Mojo Compiler,Modular MAX,BitBLAS,AutoAWQ,AutoGPTQ"),Ce("developer","local-ai-stack","Local and edge model runtimes","Software cluster",["Local inference","Quantization","Desktop serving"],"Ollama,LM Studio,Jan,LocalAI,GPT4All,KoboldCpp,Text Generation WebUI,Msty,PocketPal AI,MLC Chat,WebLLM,ExecuTorch,MediaPipe LLM Inference,ONNX Runtime GenAI,OpenVINO GenAI,LlamaEdge,Wasmtime AI,WasmEdge AI,Apple MLX LM,Qualcomm AI Hub"),Ce("agents","enterprise-agent-platforms","Enterprise agent platforms","Agent cluster",["Workflow automation","Governance","Connectors"],"Microsoft Copilot Studio,Google Agentspace,Amazon Bedrock Agents,Salesforce Agentforce,ServiceNow AI Agent Orchestrator,SAP Joule Agents,Oracle AI Agent Studio,IBM watsonx Orchestrate,UiPath Agent Builder,Automation Anywhere AI Agent Studio,Workato Agentic,Tray.ai Merlin Agents,Boomi Agentstudio,MuleSoft Agent Fabric,Pegasystems Agentic Process Fabric,Appian AI Agents,Creatio AI Agents,OutSystems Agent Workbench,Retool Agents,DataRobot Agent Workforce"),Ce("agents","research-browser-agents","Research & browser agents","Agent cluster",["Web research","Browser control","Knowledge synthesis"],"OpenAI Deep Research,Google Deep Research,Perplexity Deep Research,Claude Research,Genspark Super Agent,Manus AI,Fellou,Convergence Proxy,MultiOn,HyperWrite Agent,Harpa AI,Browserbase Stagehand,Skyvern,Steel Browser,Firecrawl Agent,Exa Websets,Parallel Web Systems,Tavily Research,You.com Research,Phind Research"),Ce("agents","operations-agents","IT & operations agents","Agent cluster",["Incident response","Cloud operations","Security operations"],"PagerDuty Advance,Datadog Bits AI,Splunk AI Assistant,Dynatrace Davis AI,New Relic AI,Elastic AI Assistant,Sentry Seer,Rootly AI,incident.io AI,Shoreline Op,BigPanda AI,ServiceNow ITOM AI,IBM Concert,Cisco AI Assistant for Security,CrowdStrike Charlotte AI,Microsoft Security Copilot,Palo Alto Cortex Copilot,Sophos AI Assistant,Wiz AI,Orca AI Assistant"),Ce("applications","healthcare-ai-depth","Healthcare AI products","Application cluster",["Clinical documentation","Diagnostics","Care operations"],"Abridge,Ambience Healthcare,Nabla,Corti,Suki,Notable Health,Qventus,Regard,Glass Health,OpenEvidence,Hippocratic AI,Infinitus Systems,AKASA,Clarify Health,PathAI,Paige AI,Proscia,Aidoc,Viz.ai,HeartFlow,Butterfly Network,Caption Health,Rad AI,Subtle Medical,Owkin K Navigator"),Ce("applications","legal-finance-depth","Legal & financial AI products","Application cluster",["Legal work","Banking","Investment research"],"Hebbia Matrix,Luminance,Robin AI,Spellbook,EvenUp,Clio Duo,Thomson Reuters CoCounsel,Lexis+ AI,vLex Vincent AI,Paxton AI,Blue J,Norm AI,Greenlite AI,WorkFusion AI,Ocrolus,AlphaSense Generative Search,FinChat,Boosted.ai,Canoe Intelligence,RavenPack AI,Feedzai,Riskified,Featurespace,Quantexa,ComplyAdvantage"),Ce("applications","industrial-ai-depth","Industrial AI products","Application cluster",["Predictive maintenance","Digital twins","Quality inspection"],"Siemens Industrial Copilot,Schneider EcoStruxure AI,ABB Ability Genix,Rockwell FactoryTalk Analytics,Honeywell Forge AI,GE Vernova Digital,AVEVA Industrial AI,Emerson AspenTech AI,PTC ServiceMax AI,Hexagon Nexus AI,Autodesk Construction IQ,Procore Copilot,Samsara Intelligence,Motive AI Fleet,Augury,Infinite Uptime,Sight Machine,Litmus Automation,Falkonry,Cognite Atlas AI,Uptake Industrial AI,Instrumental AI,Landing AI,Elementary AI,Robovision"),Ce("applications","commerce-marketing-depth","Commerce & marketing AI","Application cluster",["Personalization","Merchandising","Campaign generation"],"Klaviyo AI,HubSpot Breeze,Adobe Journey Optimizer AI,BrazeAI,Iterable AI,Attentive AI,Yotpo AI,Nosto,Lily AI,Bloomreach Loomi,Algolia Recommend,Coveo Commerce AI,Dynamic Yield,Constructor.io,Bluecore,Persado,Jasper Marketing AI,Copy.ai GTM AI,Typeface Arc,Writer AI Studio,Mutiny AI,Unbounce Smart Copy,Omneky,Pencil AI,Creatopy AI"),Ce("applications","education-public-depth","Education & public-service AI","Application cluster",["Tutoring","Assessment","Citizen services"],"Khanmigo,Duolingo Max,Quizlet Q-Chat,CheggMate,Photomath AI,Socratic by Google,Carnegie Learning MATHia,Century Tech,Squirrel AI,Riiid,MagicSchool AI,SchoolAI,Curipod,Brisk Teaching,TeachMateAI,Gradescope AI,Turnitin AI Writing,Ellucian AI,Mainstay Education,Element451 Bolt,Polis AI,Granicus AI,Tyler Technologies AI,Palantir FedStart AI,OpenGov AI"),Ce("robotics","warehouse-logistics-depth","Warehouse & logistics robotics","Robotics cluster",["Autonomous mobile robots","Picking","Sortation"],"Locus Robotics,Symbotic,Exotec,Geek+ Robotics,Hai Robotics,Quicktron,ForwardX Robotics,Addverb,Seegrid,OTTO Motors,MiR,Fetch Robotics,Zebra Fetch,Vecna Robotics,Agilox,AutoStore,Ocado Technology,RightHand Robotics,Covariant Robotics,Nomagic,Ambi Robotics,Plus One Robotics,Mujin,XYZ Robotics,Berkshire Grey"),Ce("robotics","agriculture-mining-depth","Agriculture & mining autonomy","Robotics cluster",["Autonomous equipment","Field robotics","Inspection"],"John Deere Blue River,CNH Raven,AGCO Precision Planting,Trimble Agriculture,Carbon Robotics,Monarch Tractor,Naïo Technologies,FarmWise,Burro Robotics,Agtonomy,SwarmFarm Robotics,Advanced Farm Technologies,Iron Ox,Bonsai Robotics,Caterpillar MineStar,Komatsu FrontRunner,Hexagon Autonomous Mining,SafeAI,ASI Mining,Pronto.ai,Exyn Technologies,Emesent,Flyability,Percepto Robotics,ANYbotics Inspection"),Ce("robotics","medical-service-depth","Medical & service robotics","Robotics cluster",["Surgical robots","Care robots","Commercial service robots"],"Intuitive Surgical,Medtronic Hugo,Johnson & Johnson Ottava,CMR Surgical,Distalmotion,MicroPort MedBot,SS Innovations,PROCEPT BioRobotics,Stereotaxis,Globus Medical Robotics,Smith+Nephew CORI,Zimmer Biomet ROSA,Diligent Robotics,Moxi Robot,Aethon TUG,Relay Robotics,Pudu Robotics,Keenon Robotics,Bear Robotics,Richtech Robotics,SoftBank Robotics,Temi Robotics,Blue Frog Robotics,temi Global,Hello Robot"),Ce("robotics","autonomous-vehicles-depth","Autonomous trucking & mobility","Robotics cluster",["Robotaxi","Autonomous trucking","Delivery robots"],"Aurora Innovation,Kodiak Robotics,Gatik,Waabi,Plus Automation,Torc Robotics,Einride,Outrider,Embark Trucks Platform,May Mobility,Zoox,Nuro,Serve Robotics,Starship Technologies,Coco Robotics,Kiwibot,Cartken,Avride,Mobileye Drive,Wayve,Oxbotica Oxa,Applied EV,Autonomous A2Z,Motional,WeRide Robobus")],Os=i=>new Set(i.split(",").map(e=>e.trim()).filter(Boolean)),Fs=[{id:"all",name:"All ecosystem",short:"ALL",description:"The complete global AI system."},{id:"United States",name:"United States ecosystem",short:"US",description:"Organizations and technologies principally associated with the United States."},{id:"China",name:"Chinese ecosystem",short:"CN",description:"Organizations and technologies principally associated with mainland China."},{id:"Russia",name:"Russian ecosystem",short:"RU",description:"Organizations and technologies principally associated with Russia."}],Bl=Os("Nornickel,Rusal,Planar Systems Russia,Mikron,Angstrem,NM-Tech,Baikal Electronics,MCST Elbrus,Yadro RISC-V,Yadro,Aquarius,Kraftway,Depo Computers,Yandex Cloud,SberCloud,VK Cloud,Selectel,MTS Web Services,Yandex AI,Sber AI,AIRI,MTS AI,T-Bank AI Research,DeepPavlov,Natasha NLP,GigaChat,Yandex Alice,Just AI,Tinkoff VoiceKit,Yandex Search,Mail.ru Search,Sber Salute,Kaspersky AI,Positive Technologies,BI.ZONE,Group-IB,Yandex Autonomous Transport,Cognitive Pilot,SberAutoTech,Promobot,Neurobotics"),Gl=Os("Huawei Ascend,Biren Technology,Moore Threads,Enflame,MetaX,Horizon Robotics Journey,Loongson,Phytium,Alibaba Yitian,Alibaba Xuantie,Baidu Kunlun,Alibaba Hanguang,Tencent Zixiao,ByteDance ASIC,Hua Hong Semiconductor,YMTC,CXMT,ChangXin Memory,SMIC,JCET,Naura Technology,AMEC,Piotech,ACM Research,Kingsemi,Inspur,Lenovo,Alibaba Cloud,Tencent Cloud,Huawei Cloud,Baidu AI Cloud,Qwen / Alibaba,DeepSeek,Zhipu AI,Moonshot AI,MiniMax,01.AI,StepFun,Baichuan AI,Shanghai AI Laboratory,Alibaba DAMO Academy,Baidu ERNIE,Tencent Hunyuan,ByteDance Seed,Kuaishou Kling,Alibaba Wan,ShengShu Vidu,Unitree Robotics,UBTECH,Fourier Intelligence,AgiBot,Galbot,Kepler Exploration,RobotEra,LimX Dynamics,PNDbotics,Pony.ai,WeRide,Apollo Go,DJI,Geekplus,InnoLight,Eoptolink,Accelink,Hisense Broadband,GDS Holdings,Chindata"),Hl=Os("NVIDIA,AMD,Intel,Broadcom,Google TPU,AWS Trainium / Inferentia,Microsoft Maia,Meta MTIA,Cerebras,Groq,Qualcomm,Micron,Marvell,Supermicro,Dell Technologies,HPE,Arista Networks,Cisco,Vertiv,Equinix,Digital Realty,CoreWeave,Amazon Web Services,Microsoft Azure,Google Cloud,Oracle Cloud,IBM Cloud,Cloudflare,OpenAI,Anthropic,Meta AI,xAI,NVIDIA NIM,Hugging Face,Databricks,Snowflake,Scale AI,Weights & Biases,Pinecone,Together AI,Fireworks AI,Replicate,OpenRouter,Gretel,PyTorch,JAX,TensorFlow,CUDA,Triton,vLLM,llama.cpp,MLX,LangChain,LlamaIndex,Ray,DeepSpeed,ChatGPT,Claude Code,Cursor,GitHub Copilot,Windsurf,OpenAI Agents SDK,Semantic Kernel,CrewAI,Computer use,Perplexity,Notion AI,Adobe Firefly,Midjourney,Runway,Suno,Palantir AIP,Salesforce Einstein,ServiceNow AI,Harvey,Tempus AI,Anduril,CrowdStrike,Duolingo,Tesla AI,Waymo,Figure AI,Physical Intelligence,Boston Dynamics,Agility Robotics,NVIDIA Isaac,Freeport-McMoRan,Alcoa,Constellation Energy,NextEra Energy,Dominion Energy,Duke Energy,Vistra,Talen Energy,GE Vernova,Oklo,Entegris,DuPont Electronics,Honeywell Electronic Materials,Applied Materials,Lam Research,KLA,Onto Innovation,Bruker Nano,FormFactor,Cohu,Ansys,Keysight Technologies,Arteris,Ceva,Rambus,SiFive,Polar Semiconductor,SkyWater Technology,Texas Instruments Fabs,Microchip Fabs,Ampere Computing,IBM Power,AWS Graviton,Google Axion,Microsoft Cobalt,Apple Neural Engine,AMD XDNA,Intel NPU,IBM AIU,Etched,SambaNova Systems,Lightmatter,d-Matrix,Mythic,SiMa.ai,Astera Labs,Credo Semiconductor,Intel Ethernet,AMD Pensando,NVIDIA Mellanox,NVIDIA Jetson,Google Coral,Intel Movidius,Apple M-series,Ambarella CVflow,ZT Systems,Juniper Networks,F5 Networks,Arrcus,Cisco Acacia,Ayar Labs,Celestial AI,NetApp,Pure Storage,VAST Data,IBM Storage,DDN,WEKA,Nutanix,Qumulo,MinIO,Cloudian,Seagate,Aligned Data Centers,Switch,Compass Datacenters,DataBank,Iron Mountain Data Centers,EdgeConneX,Colovore,Prime Data Centers,Bechtel,Jacobs,AECOM,Turner Construction,DPR Construction,Holder Construction,Mortenson,Fluor,Black & Veatch,Burns & McDonnell,Corgan,Lambda,Crusoe,Voltage Park,Fluidstack,Applied Digital,RunPod,Vultr,Paperspace,DigitalOcean,Akamai Connected Cloud,Vercel AI Cloud,Netlify Edge,Deno Deploy,Fly.io,Modal,Baseten Cloud,BentoCloud,Microsoft AI,Amazon AGI Lab,Apple Foundation Models,Writer Palmyra,Reka AI,Inflection AI,Allen Institute for AI,EleutherAI,Nous Research,Databricks Mosaic Research,IBM Granite,Cerebras Models,Essential AI,Prime Intellect,Arcee AI,Black Forest Labs,Luma AI,Pika,Adobe Research,Midjourney Models,Ideogram,Leonardo AI,ElevenLabs,Deepgram,AssemblyAI,Cartesia,Resemble AI,PlayHT,Hume AI,Suno Research,Udio,OpenAI Whisper,Meta AudioCraft,Rime,WellSaid Labs,SoundHound AI,Recursion,Generate Biomedicines,EvolutionaryScale,Profluent,Inceptive,Cradle,Orbital Materials,Periodic Labs,FutureHouse,NVIDIA BioNeMo,IBM Research AI for Science,Prescient Design,Basecamp Research,Baseten,BentoML,Cerebrium,Anyscale,Predibase,Lepton AI,DeepInfra,Fal.ai,Modal Labs,Beam,Inferless,KServe,Seldon,Ray Serve,Triton Inference Server,TorchServe,TensorRT-LLM,Lightning AI,Determined AI,MosaicML,Runhouse,Skypilot,Unsloth,Axolotl,Ludwig,OpenPipe,Arcee Training,Confluent,dbt Labs,Fivetran,Airbyte,Astronomer,Prefect,Dagster,Flyte,Feast,Tecton,Hopsworks,Monte Carlo Data,Bigeye,Great Expectations,Atlan,Collibra,Alation,Chroma,LanceDB,pgvector,Elastic Vector Search,OpenSearch Vector,Redis Vector,SingleStore,MongoDB Atlas Vector,Neo4j Vector,Typesense,Turbopuffer,Arize AI,Fiddler AI,WhyLabs,Galileo,Humanloop,Braintrust,Patronus AI,TruLens,Deepchecks,Promptfoo,Helicone,Comet ML,Neptune.ai,ClearML,MLflow,Surge AI,Labelbox,Snorkel AI,Appen,Defined.ai,Sama,iMerit,CloudFactory,Invisible Technologies,SuperAnnotate,V7 Labs,Encord,Dataloop,Synthesis AI,Protect AI,HiddenLayer,Robust Intelligence,CalypsoAI,Prompt Security,Guardrails AI,Aporia,Arthur AI,Credo AI,ModelOp,Invariant Labs,Zenity,Noma Security,Portkey,LiteLLM,Martian,Not Diamond,Unify AI,Kong AI Gateway,Cloudflare AI Gateway,Helicone Gateway,Keywords AI,Eden AI,Requesty,TrueFoundry");function Vl(i){return i.cluster==="chinese-models"?"China":["openai-models","anthropic-models","google-models","meta-xai-models"].includes(i.cluster)?"United States":Bl.has(i.name)?"Russia":Gl.has(i.name)?"China":Hl.has(i.name)?"United States":i.country}const Lr=[...Ol,...kl],zl="2026-08-23",$e=[{id:"materials",name:"Raw materials & industrial inputs",short:"Materials",y:-55,color:"#9b806b",symbol:"◇"},{id:"equipment",name:"Semiconductor equipment & components",short:"Equipment",y:-45,color:"#a08f6a",symbol:"⬡"},{id:"fabrication",name:"Fabrication & advanced packaging",short:"Fabrication",y:-35,color:"#72938e",symbol:"◆"},{id:"compute",name:"Compute hardware",short:"Compute",y:-25,color:"#5f8798",symbol:"▣"},{id:"datacenter",name:"Data center & system hardware",short:"Data centers",y:-15,color:"#718b93",symbol:"▤"},{id:"cloud",name:"Cloud & hyperscalers",short:"Cloud",y:-5,color:"#7d7aa1",symbol:"◉"},{id:"models",name:"Foundation model labs",short:"Models",y:5,color:"#998095",symbol:"✦"},{id:"infra",name:"Model & AI infrastructure",short:"AI infrastructure",y:15,color:"#8f7c9e",symbol:"⬢"},{id:"developer",name:"AI developer stack",short:"Developer stack",y:25,color:"#819b7a",symbol:"⌘"},{id:"agents",name:"AI harness & agent layer",short:"Agents / harness",y:35,color:"#a18b6c",symbol:"◎"},{id:"applications",name:"Application companies",short:"Applications",y:45,color:"#9b776e",symbol:"▱"},{id:"robotics",name:"Robotics & physical AI",short:"Physical AI",y:55,color:"#748e85",symbol:"△"}],Mt={materials:[["silicon","Semiconductor-grade silicon","Material","Global",["Wafers"],3],["copper","Copper","Material","Global",["Interconnects","Power delivery"],2],["aluminum","Aluminum","Material","Global",["Heat sinks","Frames"],1],["rare-gases","Rare gases","Material","Global",["Neon","Argon","Krypton"],2],["photoresists","Photoresists","Material","Global",["EUV resist"],3],["substrates","Advanced substrates","Material","Global",["ABF substrates"],3],["packaging-materials","Packaging materials","Material","Global",["Underfill","Solder"],2],["power-grid","Power infrastructure","Infrastructure","Global",["Generation","Transmission"],3],["cooling-water","Cooling infrastructure","Infrastructure","Global",["Water","Chillers"],3],["fiber","Optical fiber","Material","Global",["Single-mode fiber"],2],["shin-etsu","Shin-Etsu Chemical","Company","Japan",["Silicon wafers","Photoresists"],3],["sumco","SUMCO","Company","Japan",["Silicon wafers"],2],["jsr","JSR","Company","Japan",["Photoresists"],2],["ajinomoto","Ajinomoto Fine-Techno","Company","Japan",["ABF substrates"],3]],equipment:[["asml","ASML","Company","Netherlands",["EUV lithography","DUV lithography"],3],["applied-materials","Applied Materials","Company","United States",["Deposition","Process control"],3],["lam-research","Lam Research","Company","United States",["Etch","Deposition"],3],["kla","KLA","Company","United States",["Inspection","Metrology"],3],["tokyo-electron","Tokyo Electron","Company","Japan",["Coater/developer","Etch"],3],["canon","Canon","Company","Japan",["Lithography"],1],["nikon","Nikon","Company","Japan",["Lithography"],1],["asm-international","ASM International","Company","Netherlands",["Atomic layer deposition"],2],["screen","SCREEN Holdings","Company","Japan",["Wafer cleaning"],2],["disco","DISCO","Company","Japan",["Dicing","Grinding"],2],["advantest","Advantest","Company","Japan",["Semiconductor test"],2],["teradyne","Teradyne","Company","United States",["Semiconductor test"],2],["synopsys","Synopsys","Company","United States",["EDA","IP"],3],["cadence","Cadence","Company","United States",["EDA","IP"],3],["arm","Arm","Company","United Kingdom",["CPU IP"],3],["coherent","Coherent","Company","United States",["Optical components"],2]],fabrication:[["tsmc","TSMC","Company","Taiwan",["N3","N2","CoWoS"],3],["samsung-foundry","Samsung Foundry","Company","South Korea",["Advanced logic","I-Cube"],3],["intel-foundry","Intel Foundry","Company","United States",["18A","Foveros"],3],["globalfoundries","GlobalFoundries","Company","United States",["Specialty processes"],2],["umc","UMC","Company","Taiwan",["Mature-node foundry"],1],["smic","SMIC","Company","China",["Logic foundry"],2],["ase","ASE Technology","Company","Taiwan",["OSAT","Advanced packaging"],3],["amkor","Amkor","Company","United States",["OSAT","Advanced packaging"],2],["jcet","JCET","Company","China",["OSAT"],1],["cowos","CoWoS","Technology","Taiwan",["2.5D packaging"],3]],compute:[["nvidia","NVIDIA","Company","United States",["Blackwell","CUDA","NVLink","Spectrum-X"],3],["amd","AMD","Company","United States",["Instinct MI300","EPYC","ROCm"],3],["intel","Intel","Company","United States",["Xeon","Gaudi"],2],["broadcom","Broadcom","Company","United States",["Custom ASICs","Tomahawk"],3],["google-tpu","Google TPU","Platform","United States",["TPU v5","TPU v6e"],3],["aws-trainium","AWS Trainium / Inferentia","Platform","United States",["Trainium","Inferentia"],3],["maia","Microsoft Maia","Platform","United States",["Maia 100"],2],["meta-mtia","Meta MTIA","Platform","United States",["Inference accelerator"],2],["cerebras","Cerebras","Company","United States",["Wafer-Scale Engine"],2],["groq","Groq","Company","United States",["LPU"],2],["tenstorrent","Tenstorrent","Company","Canada",["AI processors"],1],["qualcomm","Qualcomm","Company","United States",["Cloud AI 100","Snapdragon"],2],["sk-hynix","SK hynix","Company","South Korea",["HBM3E","HBM4"],3],["samsung-memory","Samsung Memory","Company","South Korea",["HBM","DDR5"],3],["micron","Micron","Company","United States",["HBM3E","DDR5"],3],["marvell","Marvell","Company","United States",["Custom silicon","Interconnect"],2]],datacenter:[["supermicro","Supermicro","Company","United States",["GPU servers","Liquid-cooled racks"],3],["dell","Dell Technologies","Company","United States",["AI Factory","PowerEdge"],3],["hpe","HPE","Company","United States",["Cray","ProLiant"],2],["lenovo","Lenovo","Company","China",["ThinkSystem"],1],["arista","Arista Networks","Company","United States",["Ethernet switching"],3],["cisco","Cisco","Company","United States",["Networking","Silicon One"],2],["vertiv","Vertiv","Company","United States",["Power","Cooling"],3],["schneider","Schneider Electric","Company","France",["Power distribution","Cooling"],3],["eaton","Eaton","Company","Ireland",["UPS","Power distribution"],2],["equnix","Equinix","Company","United States",["Colocation"],2],["digital-realty","Digital Realty","Company","United States",["Data centers"],2],["coreweave","CoreWeave","Company","United States",["GPU cloud","AI data centers"],3],["corning","Corning","Company","United States",["Optical fiber"],2],["lumentum","Lumentum","Company","United States",["Optical transceivers"],2]],cloud:[["aws","Amazon Web Services","Company","United States",["EC2","SageMaker","Bedrock"],3],["azure","Microsoft Azure","Company","United States",["Azure AI","AI supercomputing"],3],["google-cloud","Google Cloud","Company","United States",["Vertex AI","TPU Cloud"],3],["oracle-cloud","Oracle Cloud","Company","United States",["OCI AI Infrastructure"],3],["alibaba-cloud","Alibaba Cloud","Company","China",["PAI","ECS"],2],["ibm-cloud","IBM Cloud","Company","United States",["watsonx"],1],["cloudflare","Cloudflare","Company","United States",["Workers AI"],2],["nebius","Nebius","Company","Netherlands",["AI cloud"],1]],models:[["openai","OpenAI","Model lab","United States",["GPT","o-series","Sora"],3],["anthropic","Anthropic","Model lab","United States",["Claude"],3],["deepmind","Google DeepMind","Model lab","United Kingdom",["Gemini","Veo","AlphaFold"],3],["meta-ai","Meta AI","Model lab","United States",["Llama"],3],["xai","xAI","Model lab","United States",["Grok"],3],["mistral","Mistral AI","Model lab","France",["Mistral","Mixtral"],2],["cohere","Cohere","Model lab","Canada",["Command","Embed"],2],["deepseek","DeepSeek","Model lab","China",["DeepSeek V4","R1"],3],["qwen","Qwen / Alibaba","Model lab","China",["Qwen"],3],["moonshot-ai","Moonshot AI","Model lab","China",["Kimi K3","Kimi K2.7 Code"],3],["zhipu-ai","Zhipu AI","Model lab","China",["GLM"],2],["minimax","MiniMax","Model lab","China",["MiniMax M2"],2],["bytedance-seed","ByteDance Seed","Model lab","China",["Doubao"],2],["tencent-hunyuan","Tencent Hunyuan","Model lab","China",["Hunyuan"],2],["baidu-ernie","Baidu ERNIE","Model lab","China",["ERNIE"],2],["technology-innovation-institute","Technology Innovation Institute","Model lab","United Arab Emirates",["Falcon"],2],["arc-institute","Arc Institute","Research lab","United States",["Evo"],2],["ai21","AI21 Labs","Model lab","Israel",["Jamba"],1],["stability","Stability AI","Model lab","United Kingdom",["Stable Diffusion"],2],["nvidia-nim","NVIDIA NIM","Platform","United States",["Inference microservices"],2]],infra:[["hugging-face","Hugging Face","Company","United States",["Hub","Transformers","Inference Endpoints"],3],["databricks","Databricks","Company","United States",["Mosaic AI","Lakehouse"],3],["snowflake","Snowflake","Company","United States",["Cortex AI"],2],["scale-ai","Scale AI","Company","United States",["Data labeling","Evaluation"],3],["weights-biases","Weights & Biases","Company","United States",["Experiment tracking","Weave"],2],["langsmith","LangSmith","Platform","United States",["Observability","Evaluation"],2],["pinecone","Pinecone","Company","United States",["Vector database"],2],["weaviate","Weaviate","Company","Netherlands",["Vector database"],1],["milvus","Milvus","Project","Open source",["Vector database"],1],["together-ai","Together AI","Company","United States",["Inference","Training"],2],["fireworks","Fireworks AI","Company","United States",["Inference"],2],["replicate","Replicate","Company","United States",["Model serving"],2],["openrouter","OpenRouter","Company","United States",["Model routing"],2],["lakera","Lakera","Company","Switzerland",["AI security"],1],["gretel","Gretel","Company","United States",["Synthetic data"],1]],developer:[["pytorch","PyTorch","Framework","Open source",["Deep learning framework"],3],["jax","JAX","Framework","Open source",["Accelerated arrays"],2],["tensorflow","TensorFlow","Framework","Open source",["Deep learning framework"],2],["cuda","CUDA","Platform","United States",["GPU compute platform"],3],["triton","Triton","Project","Open source",["GPU programming language"],3],["vllm","vLLM","Project","Open source",["Inference engine"],3],["llamacpp","llama.cpp","Project","Open source",["Local inference"],3],["mlx","MLX","Framework","United States",["Apple silicon ML"],2],["langchain","LangChain","Framework","United States",["LLM application framework"],3],["llamaindex","LlamaIndex","Framework","United States",["Data framework"],2],["onnx","ONNX","Standard","Open source",["Model interchange"],2],["ray","Ray","Framework","Open source",["Distributed AI compute"],2],["deepspeed","DeepSpeed","Framework","Open source",["Distributed training"],2],["kubernetes","Kubernetes","Platform","Open source",["Container orchestration"],3]],agents:[["chatgpt","ChatGPT","Application","United States",["ChatGPT","Codex"],3],["claude-code","Claude Code","Agent","United States",["Coding agent"],3],["cursor","Cursor","Company","United States",["AI code editor"],3],["github-copilot","GitHub Copilot","Application","United States",["Coding assistant"],3],["windsurf","Windsurf","Application","United States",["AI code editor"],2],["mcp","Model Context Protocol","Protocol","Open standard",["Tools","Resources","Prompts"],3],["openai-agents","OpenAI Agents SDK","Framework","Open source",["Agent orchestration"],2],["semantic-kernel","Semantic Kernel","Framework","Open source",["Agent orchestration"],2],["crewai","CrewAI","Framework","Open source",["Multi-agent orchestration"],2],["browser-use","Browser-use","Project","Open source",["Browser automation"],2],["computer-use","Computer use","Capability","Cross-platform",["GUI interaction"],3]],applications:[["perplexity","Perplexity","Company","United States",["AI search"],3],["notion","Notion AI","Application","United States",["Knowledge work"],2],["canva","Canva AI","Application","Australia",["Design"],2],["adobe","Adobe Firefly","Application","United States",["Creative media"],3],["midjourney","Midjourney","Company","United States",["Image generation"],3],["runway","Runway","Company","United States",["Video generation"],2],["suno","Suno","Company","United States",["Music generation"],2],["palantir","Palantir AIP","Application","United States",["Enterprise AI","Defense"],3],["salesforce","Salesforce Einstein","Application","United States",["Enterprise CRM"],3],["servicenow","ServiceNow AI","Application","United States",["Enterprise workflows"],2],["harvey","Harvey","Company","United States",["Legal AI"],2],["tempus","Tempus AI","Company","United States",["Precision medicine"],2],["anduril","Anduril","Company","United States",["Defense systems"],3],["crowdstrike","CrowdStrike","Company","United States",["Cybersecurity AI"],2],["duolingo","Duolingo","Company","United States",["AI education"],1]],robotics:[["tesla-ai","Tesla AI","Company","United States",["FSD","Optimus"],3],["waymo","Waymo","Company","United States",["Autonomous driving"],3],["figure","Figure AI","Company","United States",["Humanoid robots"],2],["physical-intelligence","Physical Intelligence","Company","United States",["Robot foundation models"],2],["boston-dynamics","Boston Dynamics","Company","United States",["Atlas","Spot"],2],["agility","Agility Robotics","Company","United States",["Digit"],2],["fanuc","FANUC","Company","Japan",["Industrial robots"],2],["abb-robotics","ABB Robotics","Company","Switzerland",["Industrial automation"],2],["dji","DJI","Company","China",["Drones"],2],["nvidia-isaac","NVIDIA Isaac","Platform","United States",["Robotics simulation","Jetson"],3]],markets:[["enterprise","Enterprise","End market","Global",["Knowledge work","Operations"],3],["government","Government","End market","Global",["Public services"],3],["consumers","Consumers","End market","Global",["Personal AI"],3],["research","Research institutions","End market","Global",["Science","Education"],2],["defense","Defense","End market","Global",["National security"],3],["healthcare","Healthcare","End market","Global",["Care delivery","Drug discovery"],3],["finance","Financial services","End market","Global",["Banking","Trading"],3],["manufacturing","Manufacturing","End market","Global",["Factories","Industrial automation"],3],["media","Media & entertainment","End market","Global",["Creation","Distribution"],2],["software-teams","Software teams","End market","Global",["Development"],3]]};Mt.models.push(["aleph-alpha","Aleph Alpha","Model lab","Germany",["Luminous"],1]),Mt.models.push(["xiaomi-mimo","Xiaomi MiMo Team","Model lab","China",["MiMo"],2]),Mt.materials.push(["nsig","National Silicon Industry Group","Company","China",["300 mm silicon wafers"],2],["nata-opto","Nata Opto-electronic Materials","Company","China",["Photoresists","Electronic materials"],2],["huate-gas","Huate Gas","Company","China",["Electronic specialty gases"],2],["anji-microelectronics","Anji Microelectronics","Company","China",["CMP slurry","Functional wet chemicals"],2],["jiangfeng-materials","Jiangfeng Electronic Materials","Company","China",["Ultra-high-purity sputtering targets"],2]),Mt.equipment.push(["smee","Shanghai Micro Electronics Equipment","Company","China",["Lithography systems"],3],["hwatsing","Hwatsing Technology","Company","China",["CMP equipment","Wafer cleaning"],2],["empyrean","Empyrean Technology","Company","China",["EDA software"],2]),Mt.fabrication.push(["tongfu","Tongfu Microelectronics","Company","China",["Assembly","Test","Advanced packaging"],2],["huatian","Huatian Technology","Company","China",["Assembly","Test","Packaging"],2],["nexchip","Nexchip Semiconductor","Company","China",["Display-driver foundry","Mature-node foundry"],2]),Mt.compute.push(["cambricon","Cambricon","Company","China",["MLU accelerators","NeuWare"],3],["sophgo","SOPHGO","Company","China",["TPU accelerators","RISC-V processors"],2],["iluvatar-corex","Iluvatar CoreX","Company","China",["General-purpose GPUs"],2]),Mt.datacenter.push(["huawei","Huawei","Company","China",["Atlas AI systems","Data-center networking"],3],["h3c","H3C","Company","China",["AI servers","Data-center networking"],2],["xfusion","xFusion","Company","China",["AI servers"],2],["gds","GDS Holdings","Company","China",["Carrier-neutral data centers"],2],["vnet","VNET Group","Company","China",["Carrier-neutral data centers"],2]),Mt.cloud.push(["tencent-cloud","Tencent Cloud","Company","China",["Cloud AI","Model services"],3],["huawei-cloud","Huawei Cloud","Company","China",["ModelArts","AI compute"],3],["baidu-ai-cloud","Baidu AI Cloud","Company","China",["Qianfan","AI compute"],3],["volcano-engine","Volcano Engine","Company","China",["Machine learning platform","Doubao model services"],2]),Mt.infra.push(["modelscope","ModelScope","Platform","China",["Model hub","Inference","Fine-tuning"],3],["siliconflow","SiliconFlow","Company","China",["Model inference","Model APIs"],2],["lmdeploy","LMDeploy","Framework","China",["LLM serving","Quantization","Multi-node inference"],2],["sglang","SGLang","Framework","United States",["LLM serving","Structured generation","Distributed inference"],3]),Mt.developer.push(["paddlepaddle","PaddlePaddle","Framework","China",["Deep learning framework"],3],["mindspore","MindSpore","Framework","China",["Deep learning framework"],3],["cann","CANN","Platform","China",["Ascend compiler","Operator libraries","AI runtime"],3],["xtuner","XTuner","Framework","China",["Model training","Fine-tuning","PyTorch FSDP"],2],["oneflow","OneFlow","Framework","China",["Distributed deep learning"],2],["opencompass","OpenCompass","Platform","China",["Model evaluation"],2]),Mt.models.push(["step-3-5-flash","Step-3.5 Flash","Model","China",["Reasoning","Coding","Agents","256K context"],3],["intern-s2-preview","Intern-S2 Preview","Model","China",["Scientific reasoning","Multimodal","Agents"],3],["baichuan-m4","Baichuan-M4","Model","China",["Clinical reasoning","Continuous care"],2],["kling-3","Kling 3.0","Model","China",["Video generation","Native audio","Multimodal editing"],3],["vidu-q3","Vidu Q3","Model","China",["Video generation","Native audio","Reference consistency"],2],["wan-2-7","Wan 2.7","Model","China",["Image generation","Video generation","Editing"],3],["longcat-2","LongCat 2.0","Model","China",["Agentic coding","Long context","Mixture of experts"],3],["sensenova-6-7","SenseNova 6.7 Flash-Lite","Model","China",["Multimodal agents","Efficient inference"],2]),Mt.models.push(["meituan-longcat","Meituan LongCat","Model lab","China",["LongCat models","Agentic coding","Multimodal generation"],3],["sensetime","SenseTime","Company","China",["SenseNova foundation models","Computer vision","Multimodal AI"],3],["shengshu-vidu","ShengShu AI / Vidu","Company","China",["Vidu models","Video generation","Multimodal generation"],2]),Mt.agents.push(["coze","Coze","Platform","China",["Agent development","Workflow automation"],3],["dify","Dify","Platform","China",["Agentic application development"],2],["qwen-agent","Qwen-Agent","Framework","China",["Tool use","Agent orchestration"],2],["qianfan-agent","Qianfan AgentBuilder","Platform","China",["Enterprise agent development"],2]),Mt.applications.push(["doubao","Doubao","Application","China",["AI assistant"],3],["kimi-app","Kimi","Application","China",["AI assistant","Research"],3],["tencent-yuanbao","Tencent Yuanbao","Application","China",["AI assistant"],2],["ernie-bot","ERNIE Bot","Application","China",["AI assistant"],2],["deepseek-app","DeepSeek App","Application","China",["AI assistant"],3],["iflytek-spark","iFLYTEK Spark","Application","China",["AI assistant","Education"],2],["meitu","Meitu","Company","China",["AI imaging","Creative applications"],2]),Mt.robotics.push(["agibot","AgiBot","Company","China",["Humanoid robots"],2],["galbot","Galbot","Company","China",["Embodied AI robots"],2],["limx-dynamics","LimX Dynamics","Company","China",["Humanoid robots","Quadrupeds"],2],["robotera","RobotEra","Company","China",["Humanoid robots"],2],["apollo-go","Apollo Go","Application","China",["Robotaxi service"],3]),Mt.compute.push(["nvidia-vera-rubin","NVIDIA Vera Rubin","Technology","United States",["Rubin GPU","Vera CPU","NVLink 6","Spectrum-6"],3],["amd-instinct-mi400","AMD Instinct MI400","Technology","United States",["MI455X","MI430X","HBM4"],3]),Mt.agents.push(["google-antigravity","Google Antigravity","Agent","United States",["Agentic development","Multi-step execution"],2],["mistral-vibe","Mistral Vibe","Agent","France",["Coding agent","Long-horizon work"],2],["minimax-mavis","MiniMax Mavis","Agent","China",["Agent teams","Long-running tasks"],2],["cohere-north-automations","Cohere North Automations","Platform","Canada",["Enterprise workflow orchestration"],2]);const Ur={materials:"Provides the physical inputs and utilities that advanced computation requires.",equipment:"Enables semiconductor design, wafer processing, inspection, testing or optical connectivity.",fabrication:"Turns chip designs into packaged silicon systems at industrial scale.",compute:"Supplies the processing, memory or interconnect engines for AI workloads.",datacenter:"Assembles compute into operable facilities with servers, networks, power and cooling.",cloud:"Provides elastic access to compute, managed AI platforms and global infrastructure.",models:"Develops general-purpose foundation models that power downstream systems.",infra:"Operates the data, serving, evaluation and governance layer around models.",developer:"Gives builders the frameworks, runtimes and protocols used to create AI systems.",agents:"Wraps models in tools, context, memory and action loops.",applications:"Applies AI to a specific product, workflow or industry.",robotics:"Connects perception and foundation models to machines in the physical world.",markets:"Creates demand and defines real-world constraints for the AI economy."},zi=Object.entries(Mt).filter(([i])=>$e.some(e=>e.id===i)).flatMap(([i,e])=>e.map((t,n)=>({id:t[0],name:t[1],type:t[2],layer:i,categories:[$e.find(s=>s.id===i).short],country:t[3],products:t[4],importanceLevel:t[5],cluster:i,description:`${t[1]} is a structurally relevant part of the modern AI ecosystem, spanning ${t[4].join(", ")}.`,ecosystemRole:Ur[i],whyItMatters:t[5]===3?`${t[1]} sits on a high-leverage part of the stack; changes in its capacity, technology or access can propagate across multiple layers.`:`${t[1]} illustrates an important capability and dependency within the broader AI value chain.`,website:null,positionIndex:n}))),Nr=i=>i.toLowerCase().replace(/&/g," and ").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),Wl=new Set(zi.map(i=>i.name.toLowerCase())),Or=new Set(Wl),Fr=new Set(zi.map(i=>i.id)),kr=[];for(const i of Lr)$e.some(e=>e.id===i.layer)&&i.names.forEach((e,t)=>{if(Or.has(e.toLowerCase()))return;Or.add(e.toLowerCase());let n=Nr(e),s=2;for(;Fr.has(n);)n=`${Nr(e)}-${s++}`;Fr.add(n);const a=i.type==="Model family",r=i.type==="Application cluster"?"Application":i.type==="Agent cluster"?"Agent":i.layer==="developer"?"Framework":i.layer==="infra"?"Platform":i.type==="Technology cluster"?"Technology":null;kr.push({id:n,name:e,type:a?"Model":r||(["Project","Protocol","Standard","Technology","Platform"].some(o=>e.includes(o))?"Technology":"Company"),layer:i.layer,categories:[$e.find(o=>o.id===i.layer).short,i.name],country:"Various",products:i.products,importanceLevel:t<2?2:1,cluster:i.id,description:a?`${e} is a distinct model product in the ${i.name.toLowerCase()} group, supporting ${i.products.join(", ")} capabilities.`:`${e} participates in ${i.name.toLowerCase()}, with relevance to ${i.products.join(", ")}.`,ecosystemRole:a?"A selectable model product linked separately to its developer, serving layer and representative physical dependency path.":Ur[i.layer],whyItMatters:a?`${e} is modeled separately from its lab so users can distinguish the model from the product and agent harnesses built around it.`:`${e} broadens the atlas beyond the market leaders and helps show the competitive depth, specialization and regional diversity of ${i.name.toLowerCase()}.`,website:null})});const Xl={materials:120,equipment:140,fabrication:90,compute:140,datacenter:220,cloud:100,models:300,infra:200,developer:150,agents:141,applications:250,robotics:150,markets:0},Wi=[];for(const i of $e){const e=zi.filter(a=>a.layer===i.id).length,t=Math.max(0,Xl[i.id]-e),n=Lr.filter(a=>a.layer===i.id).map(a=>kr.filter(r=>r.cluster===a.id));let s=0;for(;Wi.filter(a=>a.layer===i.id).length<t&&n.some(a=>a[s]);){for(const a of n)a[s]&&Wi.filter(r=>r.layer===i.id).length<t&&Wi.push(a[s]);s++}}const Vt=[...zi,...Wi].filter(i=>i.layer!=="markets"&&i.id!=="computer-use").map(i=>{const e=Vl(i);return{...i,geography:e,country:i.country==="Various"&&e!=="Various"?e:i.country}}),ql={"kimi-k3":{description:"Moonshot AI’s open-weight frontier model for long-horizon coding, reasoning and knowledge work, with native vision and a one-million-token context window.",products:["2.8T parameters","1M context","Native vision","Kimi Delta Attention"],whyItMatters:"Kimi K3 is a major Chinese frontier-model release and a useful example of why model ownership must be separated from the infrastructure used to train and serve it.",website:"https://www.kimi.com/blog/kimi-k3"},nvidia:{products:["Vera Rubin","Blackwell","CUDA","NVLink","Spectrum-X"],website:"https://www.nvidia.com/en-us/data-center/technologies/rubin/"},amd:{products:["Instinct MI400","EPYC","ROCm"],website:"https://www.amd.com/en/products/accelerators/instinct/mi400.html"},"google-tpu":{name:"Google TPU 8t / 8i",products:["TPU 8t training accelerator","TPU 8i inference accelerator"],website:"https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/tpus-8t-8i-cloud-next/"},cann:{description:"CANN is Huawei’s software platform for compiling, optimizing and executing AI workloads on Ascend processors.",ecosystemRole:"Provides the compiler, operators, libraries and runtime that connect AI frameworks and inference engines to Ascend hardware.",whyItMatters:"CANN is a critical compatibility boundary: models and serving engines require matched CANN, TorchNPU and Ascend versions to run reliably.",website:"https://www.hiascend.com/en/software/cann"}};Vt.forEach(i=>Object.assign(i,ql[i.id]||{}));const Yl={smic:{founded:"2000",leadership:"Zhao Haijun and Liang Mong Song — Co-Chief Executive Officers",headquarters:"18 Zhangjiang Road, Pudong New Area, Shanghai 201203, China",website:"https://www.smics.com/en",provides:"Pure-play semiconductor foundry and process-technology services, including wafer fabrication from mature nodes through advanced logic.",howUsed:"Fabless chip designers send qualified designs to SMIC for manufacturing. In this atlas it is a fabrication route for Chinese accelerators and a customer of materials and process-equipment suppliers.",profileSources:["https://www.hkexnews.hk/listedco/listconews/sehk/2026/0408/2026040801181.pdf","https://star.sse.com.cn/star/en/marketdata/snapshot/c/5481443.shtml"]},huawei:{founded:"1987",leadership:"Liang Hua — Board Chairman; executive authority rotates among Huawei’s deputy chairs",headquarters:"Huawei Base, Shenzhen 518129, China",website:"https://www.huawei.com/en/",provides:"ICT infrastructure, cloud services, Ascend AI compute, networking, digital power, devices and the MindSpore software stack.",howUsed:"Organizations use Huawei as a vertically integrated alternative spanning data-center equipment, AI accelerators, frameworks, cloud capacity and industry solutions.",profileSources:["https://www.huawei.com/en/media-center/company-facts","https://www.huawei.com/en/corporate-governance/"]},"alibaba-cloud":{founded:"2009",leadership:"Eddie Wu — CEO of Alibaba Group and Alibaba Cloud",headquarters:"Hangzhou, Zhejiang, China; international headquarters in Singapore",website:"https://www.alibabacloud.com/",provides:"Elastic compute, storage, networking, databases, security, big-data services, Model Studio, Qwen APIs and custom-silicon cloud instances.",howUsed:"Developers and enterprises rent infrastructure, train or serve models, call Qwen and third-party models through APIs, and deploy applications across Alibaba’s cloud regions.",profileSources:["https://www.alibabacloud.com/en/about","https://www.alibabagroup.com/en-US/document-1796329702713982976"]},"tencent-cloud":{founded:"Publicly launched in 2013",leadership:"Dowson Tong — President, Tencent Cloud and Smart Industries Group; Pony Ma — Tencent Chairman and CEO",headquarters:"Shenzhen, Guangdong, China",website:"https://www.tencentcloud.com/",provides:"Public cloud infrastructure, databases, media services, enterprise AI, Hunyuan APIs and model-as-a-service capabilities.",howUsed:"Enterprises use Tencent Cloud to host applications, consume Hunyuan and third-party models, build agents and connect AI services to Tencent’s communications and content ecosystem.",profileSources:["https://www.tencent.com/who-we-are/our-story/","https://www.tencent.com/en-us/about.html","https://www.tencent.com/tencent-unveils-hunyuan-its-proprietary-large-foundation-model-on-tencent-cloud/"]},deepseek:{founded:"2023",leadership:"Liang Wenfeng — Founder and Chief Executive Officer",headquarters:"Hangzhou, Zhejiang, China",website:"https://www.deepseek.com/",provides:"Open-weight and hosted frontier language and reasoning models, plus an API and consumer assistant.",howUsed:"Developers download model weights for self-hosting or call DeepSeek’s API; end users access the same model family through the DeepSeek application and third-party cloud platforms.",profileSources:["https://www.deepseek.com/","https://apnews.com/article/f4908eaca221d601e31e7e3368778030"]},"moonshot-ai":{founded:"Early 2023",leadership:"Yang Zhilin — Co-founder and Chief Executive Officer",headquarters:"13th Floor, Building 1, JD Technology Building, 76 Zhichun Road, Haidian District, Beijing, China",website:"https://www.moonshot.ai/",provides:"The Kimi family of frontier multimodal, reasoning and coding models, distributed through an assistant, APIs and open weights.",howUsed:"Individuals use the Kimi assistant for research and knowledge work; developers integrate Kimi through APIs or deploy available open-weight releases in their own infrastructure.",profileSources:["https://www.moonshot.ai/about","https://apnews.com/article/0d8a5e268deb11a673f4d444fc597cc5"]},minimax:{founded:"2021",leadership:"Yan Junjie — Founder, Chairman, Chief Executive Officer and Chief Technology Officer",headquarters:"1 Xitucheng Road, Haidian District, Beijing, China",website:"https://www.minimax.io/",provides:"Multimodal foundation models for text, speech, music, images and video, alongside consumer applications and developer APIs.",howUsed:"Developers call MiniMax APIs or embed its models in applications; consumers use its products for conversational, creative and agentic tasks.",profileSources:["https://ir.minimax.cn/en/corporate-information/management","https://ir.minimax.cn/en/investor-resources/ir-contacts","https://www.minimax.io/"]},qwen:{founded:"Model family introduced in 2023",leadership:"Alibaba AI business — not a separately incorporated company; parent CEO: Eddie Wu",headquarters:"Alibaba headquarters, Hangzhou, Zhejiang, China",website:"https://qwen.ai/",provides:"Alibaba’s family of open-weight and hosted language, multimodal, coding and reasoning models.",howUsed:"Developers download Qwen weights, fine-tune them, or consume managed versions through Alibaba Cloud Model Studio; users access Qwen through Alibaba applications.",profileSources:["https://www.alibabagroup.com/en-US/about-alibaba-businesses-1951035128754995200","https://qianwen-res.oss-cn-beijing.aliyuncs.com/QWEN_TECHNICAL_REPORT.pdf","https://www.alibabacloud.com/help/en/model-studio/what-is-model-studio"]}};Vt.forEach(i=>Object.assign(i,Yl[i.id]||{}));const $l={asml:[1984,"Founded"],tsmc:[1987,"Founded"],nvidia:[1993,"Founded"],amd:[1969,"Founded"],intel:[1968,"Founded"],broadcom:[1991,"Founded"],arm:[1990,"Founded"],smic:[2e3,"Founded"],huawei:[1987,"Founded"],cambricon:[2016,"Founded"],cerebras:[2015,"Founded"],groq:[2016,"Founded"],"moore-threads":[2020,"Founded"],"biren-technology":[2019,"Founded"],enflame:[2018,"Founded"],aws:[2006,"Cloud launched"],azure:[2010,"Cloud launched"],"google-cloud":[2008,"Cloud platform launched"],"oracle-cloud":[2016,"Cloud launched"],coreweave:[2017,"Founded"],"alibaba-cloud":[2009,"Cloud launched"],"tencent-cloud":[2013,"Public launch"],"huawei-cloud":[2017,"Public-cloud launch"],"baidu-ai-cloud":[2015,"AI-cloud launch"],openai:[2015,"Founded"],anthropic:[2021,"Founded"],deepmind:[2010,"Founded"],"meta-ai":[2013,"Research organization launched"],xai:[2023,"Founded"],mistral:[2023,"Founded"],cohere:[2019,"Founded"],deepseek:[2023,"Founded"],qwen:[2023,"Model family launched"],"moonshot-ai":[2023,"Founded"],"zhipu-ai":[2019,"Founded"],minimax:[2021,"Founded"],stepfun:[2023,"Founded"],"meituan-longcat":[2025,"Model team launched"],sensetime:[2014,"Founded"],"shanghai-ai-laboratory":[2020,"Founded"],"baichuan-ai":[2023,"Founded"],"shengshu-vidu":[2023,"Founded"],pytorch:[2016,"Public launch"],tensorflow:[2015,"Public launch"],jax:[2018,"Public launch"],cuda:[2006,"Public launch"],triton:[2019,"Open-source launch"],vllm:[2023,"Public launch"],sglang:[2024,"Public launch"],lmdeploy:[2023,"Public launch"],cann:[2018,"Platform launch"],mindspore:[2020,"Open-source launch"],paddlepaddle:[2016,"Open-source launch"],"hugging-face":[2016,"Founded"],langchain:[2022,"Public launch"],llamaindex:[2022,"Public launch"],ray:[2017,"Public launch"],kubernetes:[2014,"Public launch"],mcp:[2024,"Public launch"],chatgpt:[2022,"Product launched"],"claude-code":[2025,"Product launched"],cursor:[2023,"Product launched"],"github-copilot":[2021,"Product launched"],perplexity:[2022,"Founded"],midjourney:[2022,"Product launched"],runway:[2018,"Founded"],suno:[2022,"Founded"],"deepseek-r1":[2025,"Model released"],"step-3-5-flash":[2026,"Model released"],"intern-s2-preview":[2026,"Model released"],"baichuan-m4":[2026,"Model released"],"kling-3":[2026,"Model released"],"vidu-q3":[2026,"Model released"],"wan-2-7":[2026,"Model released"],"longcat-2":[2026,"Model released"],"sensenova-6-7":[2026,"Model released"],"kimi-k3":[2026,"Model released"],"minimax-m2-7":[2026,"Model released"],"glm-5-2":[2026,"Model released"],waymo:[2009,"Project founded"],"tesla-ai":[2016,"AI program milestone"],figure:[2022,"Founded"],"physical-intelligence":[2024,"Founded"],"boston-dynamics":[1992,"Founded"],"nvidia-isaac":[2018,"Platform launched"],unitree:[2016,"Founded"],ubtech:[2012,"Founded"],dji:[2006,"Founded"],"apollo-go":[2017,"Platform launched"]};for(const[i,[e,t]]of Object.entries($l)){const n=Vt.find(s=>s.id===i);n&&Object.assign(n,{timelineYear:e,timelineBasis:t,timelinePrecision:"audited"})}const Br=new Map;Vt.forEach(i=>{const e=Br.get(i.layer)||0;i.positionIndex=e,Br.set(i.layer,e+1)});const D=(i,e,t,n,s="confirmed",a=null)=>({source:i,target:e,type:t,explanation:n,status:s,sourceUrl:a}),$n={"microsoft-investment":"azure","apple-silicon":"mlx"},Kl=[D("shin-etsu","tsmc","SUPPLIES","Supplies semiconductor silicon and process materials."),D("sumco","samsung-foundry","SUPPLIES","Supplies silicon wafers.","reported"),D("jsr","tsmc","SUPPLIES","Photoresists support advanced patterning.","reported"),D("ajinomoto","cowos","SUPPLIES","ABF films are used in advanced chip substrates.","inferred"),D("power-grid","coreweave","SUPPLIES","Electricity is a binding input for AI data centers.","representative"),D("cooling-water","vertiv","SUPPLIES","Cooling loops reject heat from dense AI systems.","representative"),D("fiber","corning","SUPPLIES","Raw optical materials become data-center fiber.","representative"),D("asml","tsmc","PROVIDES_EQUIPMENT_TO","EUV systems enable advanced process nodes."),D("asml","samsung-foundry","PROVIDES_EQUIPMENT_TO","EUV lithography supports advanced logic."),D("asml","intel-foundry","PROVIDES_EQUIPMENT_TO","EUV and High-NA systems support leading-edge roadmaps."),D("applied-materials","tsmc","PROVIDES_EQUIPMENT_TO","Deposition and process equipment support wafer fabrication."),D("lam-research","tsmc","PROVIDES_EQUIPMENT_TO","Etch and deposition systems shape chip structures."),D("kla","tsmc","PROVIDES_EQUIPMENT_TO","Inspection and metrology control defects."),D("tokyo-electron","tsmc","PROVIDES_EQUIPMENT_TO","Coat/develop and etch systems support patterning."),D("screen","tsmc","PROVIDES_EQUIPMENT_TO","Wafer cleaning is used between process steps.","reported"),D("disco","ase","PROVIDES_EQUIPMENT_TO","Dicing and grinding support packaging workflows.","representative"),D("advantest","sk-hynix","PROVIDES_EQUIPMENT_TO","Test systems validate memory devices.","reported"),D("synopsys","nvidia","SUPPLIES","EDA tools and IP support complex chip design."),D("cadence","broadcom","SUPPLIES","EDA platforms support custom silicon design."),D("arm","aws-trainium","SUPPLIES","Arm CPU architecture participates in AWS server platforms.","inferred"),D("tsmc","nvidia","MANUFACTURES","TSMC manufactures leading NVIDIA accelerators."),D("tsmc","amd","MANUFACTURES","TSMC manufactures leading AMD compute dies."),D("tsmc","google-tpu","MANUFACTURES","Representative foundry relationship for Google accelerators.","reported"),D("tsmc","aws-trainium","MANUFACTURES","Representative foundry relationship for AWS custom silicon.","reported"),D("tsmc","maia","MANUFACTURES","Representative manufacturing path for Maia.","reported"),D("tsmc","broadcom","MANUFACTURES","Manufactures advanced Broadcom silicon.","reported"),D("samsung-foundry","meta-mtia","MANUFACTURES","Reported manufacturing relationship for MTIA.","reported"),D("intel-foundry","intel","MANUFACTURES","Intel manufactures its own processor portfolio."),D("cowos","nvidia","SUPPLIES","CoWoS integrates GPU dies and HBM at high bandwidth."),D("ase","amd","SUPPLIES","Advanced packaging supports multi-die compute products.","reported"),D("sk-hynix","nvidia","PROVIDES_MEMORY_TO","HBM is paired with NVIDIA accelerators."),D("micron","nvidia","PROVIDES_MEMORY_TO","Micron supplies HBM for accelerator platforms."),D("samsung-memory","amd","PROVIDES_MEMORY_TO","HBM supports high-bandwidth accelerator memory.","reported"),D("broadcom","google-tpu","DESIGNS","Broadcom has supported Google custom accelerator programs.","reported"),D("marvell","aws-trainium","PARTNERS_WITH","Custom silicon and infrastructure collaboration.","reported"),D("nvidia","supermicro","SUPPLIES","GPUs and networking form the core of AI server systems."),D("nvidia","dell","SUPPLIES","Accelerators power Dell AI server platforms."),D("nvidia","hpe","SUPPLIES","Accelerators power HPE AI systems."),D("amd","dell","SUPPLIES","Instinct and EPYC power AI systems."),D("arista","coreweave","PROVIDES_NETWORKING_TO","High-speed Ethernet connects AI clusters.","reported"),D("vertiv","coreweave","SUPPLIES","Power and cooling support dense GPU deployments.","reported"),D("schneider","digital-realty","SUPPLIES","Power and cooling infrastructure supports data centers.","representative"),D("corning","arista","SUPPLIES","Optical fiber connects high-bandwidth networks.","representative"),D("coreweave","openai","HOSTS","GPU cloud capacity has supported model workloads.","reported"),D("nvidia","aws","SUPPLIES","AWS offers large fleets of NVIDIA GPU instances."),D("nvidia","azure","SUPPLIES","Azure AI supercomputers use NVIDIA accelerators."),D("nvidia","google-cloud","SUPPLIES","Google Cloud offers NVIDIA GPU instances."),D("nvidia","oracle-cloud","SUPPLIES","OCI offers NVIDIA GPU clusters."),D("aws-trainium","aws","DESIGNS","AWS designs Trainium and Inferentia for its cloud."),D("google-tpu","google-cloud","DESIGNS","Google designs TPUs and exposes them through its cloud."),D("maia","azure","DESIGNS","Microsoft designs Maia accelerators for Azure."),D("openai","azure","TRAINS_ON","Azure infrastructure has supported OpenAI training and serving."),D("anthropic","aws","TRAINS_ON","AWS is Anthropic’s primary cloud and training partner."),D("anthropic","google-cloud","TRAINS_ON","Anthropic also uses Google Cloud infrastructure.","confirmed"),D("deepmind","google-cloud","RUNS_ON","Gemini training and serving uses Google infrastructure."),D("meta-ai","nvidia","TRAINS_ON","Meta trains large models on NVIDIA GPU clusters."),D("xai","nvidia","TRAINS_ON","xAI trains models on large NVIDIA GPU clusters."),D("mistral","azure","PARTNERS_WITH","Azure distributes and supports Mistral models."),D("cohere","oracle-cloud","PARTNERS_WITH","OCI provides infrastructure and distribution for Cohere."),D("deepseek","nvidia","TRAINS_ON","Public technical reports describe NVIDIA GPU training.","reported"),D("openai","microsoft-investment","INVESTS_IN","Microsoft is a major OpenAI investor and partner.","representative"),D("pytorch","openai","INTEGRATES_WITH","PyTorch is widely used for model research and training.","representative"),D("pytorch","meta-ai","DEPENDS_ON","PyTorch originated at Meta and underpins its AI stack."),D("jax","deepmind","INTEGRATES_WITH","JAX is central to Google research workloads."),D("cuda","nvidia","DEPENDS_ON","CUDA is NVIDIA’s vertically integrated software platform."),D("triton","cuda","RUNS_ON","Triton compiles GPU kernels for CUDA-class hardware."),D("vllm","cuda","RUNS_ON","vLLM commonly serves models on CUDA GPUs."),D("llamacpp","meta-ai","INTEGRATES_WITH","llama.cpp popularized efficient local execution of Llama-family models.","representative"),D("mlx","apple-silicon","RUNS_ON","MLX targets Apple silicon.","representative"),D("hugging-face","pytorch","INTEGRATES_WITH","Transformers integrates deeply with PyTorch."),D("ray","kubernetes","RUNS_ON","Ray clusters are commonly orchestrated with Kubernetes.","representative"),D("databricks","aws","RUNS_ON","Databricks operates across AWS and other clouds."),D("databricks","azure","RUNS_ON","Azure Databricks is a first-party integrated service."),D("pinecone","aws","RUNS_ON","Managed vector search uses cloud infrastructure.","representative"),D("together-ai","nvidia","RUNS_ON","Inference and training services use GPU infrastructure.","representative"),D("fireworks","nvidia","RUNS_ON","Inference services depend on GPU infrastructure.","representative"),D("openrouter","openai","INTEGRATES_WITH","Routes requests to OpenAI models."),D("openrouter","anthropic","INTEGRATES_WITH","Routes requests to Anthropic models."),D("chatgpt","openai","USES_MODEL_FROM","ChatGPT is the primary product interface for OpenAI models."),D("claude-code","anthropic","USES_MODEL_FROM","Claude Code wraps Claude models in a coding harness."),D("cursor","openai","USES_MODEL_FROM","Cursor supports OpenAI models among multiple providers."),D("cursor","anthropic","USES_MODEL_FROM","Cursor supports Claude models among multiple providers."),D("github-copilot","openai","USES_MODEL_FROM","Copilot has used OpenAI models alongside other models."),D("mcp","anthropic","DESIGNS","Anthropic introduced MCP as an open protocol."),D("claude-code","mcp","INTEGRATES_WITH","MCP connects Claude Code to external tools and context."),D("openai-agents","openai","USES_MODEL_FROM","SDK orchestrates OpenAI models and tools."),D("semantic-kernel","azure","INTEGRATES_WITH","Microsoft framework integrates Azure AI models and services."),D("browser-use","computer-use","INTEGRATES_WITH","Browser control provides an action surface for agents."),D("perplexity","openai","USES_MODEL_FROM","Perplexity uses multiple foundation model providers.","reported"),D("perplexity","anthropic","USES_MODEL_FROM","Perplexity offers Claude-family models.","reported"),D("adobe","stability","COMPETES_WITH","Commercial creative model ecosystems overlap.","representative"),D("notion","openai","USES_MODEL_FROM","Notion has integrated OpenAI model capabilities.","reported"),D("salesforce","openai","PARTNERS_WITH","Enterprise model integrations connect Salesforce and OpenAI.","reported"),D("palantir","azure","RUNS_ON","Palantir AIP integrates with Azure environments.","reported"),D("anduril","defense","SUPPLIES","Autonomous systems serve defense customers."),D("tempus","healthcare","SUPPLIES","AI systems support clinical and life-sciences workflows."),D("github-copilot","software-teams","SUPPLIES","Coding assistance serves software development teams."),D("chatgpt","consumers","SUPPLIES","ChatGPT delivers general AI capabilities to consumers."),D("servicenow","enterprise","SUPPLIES","AI augments enterprise workflows."),D("nvidia-isaac","nvidia","RUNS_ON","Isaac and Jetson extend NVIDIA compute into robotics."),D("figure","nvidia-isaac","INTEGRATES_WITH","Humanoid development uses NVIDIA simulation and compute tools.","reported"),D("physical-intelligence","google-cloud","TRAINS_ON","Robot foundation model research depends on cloud-scale training.","inferred"),D("waymo","deepmind","PARTNERS_WITH","Both are part of Alphabet’s AI ecosystem.","representative"),D("tesla-ai","nvidia","DEPENDS_ON","NVIDIA hardware has historically supported training; Tesla also designs custom compute.","reported"),D("fanuc","manufacturing","SUPPLIES","Industrial robots automate manufacturing."),D("abb-robotics","manufacturing","SUPPLIES","Robotics systems automate industrial processes."),D("dji","consumers","SUPPLIES","Drone platforms serve consumer and commercial markets."),D("enterprise","aws","DEPENDS_ON","Enterprises consume AI through cloud infrastructure.","representative"),D("research","hugging-face","DEPENDS_ON","Open model repositories accelerate reproducible research.","representative"),D("finance","databricks","DEPENDS_ON","Data and AI platforms support financial workloads.","representative"),D("healthcare","openai","USES_MODEL_FROM","Healthcare organizations experiment with foundation models.","representative")],jl=new Map(Vt.map(i=>[i.name.toLowerCase(),i])),ft=new Set(Vt.map(i=>i.id)),Zl=Fl.map(([i,e,t,n,s])=>D(i,e,t,n,s)).filter(i=>ft.has(i.source)&&ft.has(i.target)),Kn={openai:"https://platform.openai.com/docs/models",anthropic:"https://www.anthropic.com/news",deepmind:"https://ai.google.dev/gemini-api/docs/models","meta-ai":"https://ai.meta.com/llama/get-started/",xai:"https://docs.x.ai/developers/models","moonshot-ai":"https://www.kimi.com/code/docs/en/kimi-code/models.html",deepseek:"https://api-docs.deepseek.com/quick_start/pricing",qwen:"https://qwenlm.github.io/blog/","zhipu-ai":"https://www.z.ai/","bytedance-seed":"https://seed.bytedance.com/","tencent-hunyuan":"https://hunyuan.tencent.com/","baidu-ernie":"https://yiyan.baidu.com/",minimax:"https://www.minimax.io/",mistral:"https://docs.mistral.ai/models/",cohere:"https://docs.cohere.com/docs/models",stability:"https://stability.ai/","black-forest-labs":"https://blackforestlabs.ai/",midjourney:"https://www.midjourney.com/",runway:"https://runwayml.com/",suno:"https://suno.com/","allen-institute-for-ai":"https://allenai.org/olmo","technology-innovation-institute":"https://falconllm.tii.ae/","ibm-granite":"https://www.ibm.com/granite",databricks:"https://www.databricks.com/research/mosaic",cerebras:"https://www.cerebras.ai/",evolutionaryscale:"https://www.evolutionaryscale.ai/","luma-ai":"https://lumalabs.ai/",pika:"https://pika.art/",ideogram:"https://ideogram.ai/","arc-institute":"https://arcinstitute.org/",elevenlabs:"https://elevenlabs.io/",salesforce:"https://www.salesforce.com/ai-research/"};Object.assign(Kn,{"aleph-alpha":"https://www.aleph-alpha.com/",nvidia:"https://www.nvidia.com/en-us/clara/bionemo/"}),Object.assign(Kn,{udio:"https://www.udio.com/",ai21:"https://www.ai21.com/jamba"}),Object.assign(Kn,{openai:"https://developers.openai.com/api/docs/models",anthropic:"https://platform.claude.com/docs/en/about-claude/models/overview","zhipu-ai":"https://z.ai/blog/glm-5.3",minimax:"https://www.minimax.io/news",mistral:"https://mistral.ai/news/",cohere:"https://cohere.com/blog/command-a-plus","xiaomi-mimo":"https://github.com/XiaomiMiMo"}),Object.assign(Kn,{stepfun:"https://github.com/stepfun-ai/Step-3.5-Flash","shanghai-ai-laboratory":"https://github.com/InternLM/Intern-S1","baichuan-ai":"https://arxiv.org/abs/2606.08982","kuaishou-kling":"https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-30-model-ushering-era-where-everyone-can-be","shengshu-vidu":"https://platform.vidu.com/docs/model-map","alibaba-wan":"https://www.alibabacloud.com/help/en/model-studio/newly-released-models"}),Object.assign(Kn,{"meituan-longcat":"https://tech.meituan.com/2026/07/12/LongCat-2.0-Open-source.html",sensetime:"https://www.sensetime.com/en/research/"});const Gr=[];for(const[i,e]of Object.entries(wi))for(const t of e.split(",").map(n=>n.trim())){const n=jl.get(t.toLowerCase());ft.has(i)&&n&&Gr.push(D(i,n.id,"DEVELOPS",`${Vt.find(s=>s.id===i).name} develops the ${n.name} model or model family.`,"confirmed",Kn[i]||null))}const Jl={"intern-s2-preview":"lmdeploy","baichuan-m4":"baichuan-ai","kling-3":"kuaishou-kling","vidu-q3":"shengshu-vidu","wan-2-7":"alibaba-cloud","longcat-2":"sglang","sensenova-6-7":"sensetime"},Ql=Vt.filter(i=>i.type==="Model").map(i=>{const e=Jl[i.id]||"vllm";return D(i.id,e,"RUNS_ON",e==="vllm"?`${i.name} can be served by a concrete inference runtime such as vLLM; deployment support varies by model and installation.`:`${i.name} is delivered through ${Vt.find(t=>t.id===e)?.name||e} as its documented serving or managed deployment path.`,"representative")}),ec=[D("cowos","tsmc","DEPENDS_ON","CoWoS packages dies fabricated by TSMC into physical accelerator systems.","representative"),D("asml","photoresists","DEPENDS_ON","ASML lithography systems expose photoresists during semiconductor patterning.","representative"),D("photoresists","silicon","APPLIED_TO","Photoresists are applied to silicon wafers during chip fabrication.","representative")].filter(i=>ft.has(i.source)&&ft.has(i.target)),tc=[D("huawei","huawei-ascend","DEVELOPS","Huawei develops the Ascend AI-computing stack, spanning processors, systems and software.","confirmed","https://www-file.huawei.com/-/media/CORP2020/annual-report/2020-pdf/annual_report_2020_en.pdf"),D("huawei","mindspore","DEVELOPS","Huawei identifies MindSpore as the framework layer of its full-stack Ascend ecosystem.","confirmed","https://www-file.huawei.com/-/media/CORP2020/annual-report/2020-pdf/annual_report_2020_en.pdf"),D("mindspore","huawei-ascend","RUNS_ON","MindSpore and Ascend are co-optimized parts of Huawei’s AI computing stack.","confirmed","https://www-file.huawei.com/-/media/CORPORATE/Local-site/mx/pdf/2019_Huawei_Annual_Report.pdf"),D("huawei","cann","DEVELOPS","Huawei develops CANN as the compiler, operator-library and runtime layer for Ascend AI processors.","confirmed","https://www.huawei.com/en/news/2025/9/hc-xu-keynote-speech"),D("cann","huawei-ascend","RUNS_ON","CANN is the foundational software platform required to compile and execute AI workloads on Ascend hardware.","confirmed","https://github.com/vllm-project/vllm-ascend/blob/main/docs/source/installation.md"),D("vllm","cann","DEPENDS_ON","The official vLLM Ascend compatibility stack requires CANN alongside TorchNPU and supported Ascend hardware.","confirmed","https://github.com/vllm-project/vllm-ascend/blob/main/docs/source/installation.md"),D("pytorch","cann","INTEGRATES_WITH","Ascend deployments pair PyTorch with TorchNPU and CANN as one versioned compatibility stack.","confirmed","https://github.com/vllm-project/vllm-ascend/blob/main/docs/source/installation.md"),D("deepseek","huawei-ascend","RUNS_ON","Huawei states that its teams optimized Ascend 910B and 910C inference for DeepSeek workloads during 2025.","confirmed","https://www.huawei.com/en/news/2025/9/hc-xu-keynote-speech"),D("deepseek","huawei-cloud","DEPLOYED_BY","Huawei Cloud documents deployment architectures for DeepSeek inference and states that it supported the model’s fast-growing traffic.","confirmed","https://support.huaweicloud.com/intl/en-us/deepseek-aislt/aislt-deepseek.pdf"),D("cambricon","smic","DEPENDS_ON","Cambricon is fabless and therefore depends on external semiconductor manufacturing; this edge represents the domestic foundry path rather than a disclosed customer contract.","representative","https://forum.cambricon.com/index.php?a=show&c=index&catid=159&id=904&m=content"),D("cambricon","deepseek","INTEGRATES_WITH","Cambricon documents model adaptation across its MLU hardware and software stack.","confirmed","https://developer.cambricon.com/index/article/index.html"),D("baidu-ai-cloud","baidu-kunlun","DEVELOPS","Baidu describes Kunlun chips as the hardware foundation of its AI stack.","confirmed","https://ir.baidu.com/static-files/6053f234-9dbd-4afb-b300-7fcba9cb6f27"),D("baidu-ai-cloud","paddlepaddle","DEVELOPS","Baidu describes PaddlePaddle as the software foundation of its AI stack.","confirmed","https://ir.baidu.com/static-files/6053f234-9dbd-4afb-b300-7fcba9cb6f27"),D("paddlepaddle","baidu-kunlun","RUNS_ON","PaddlePaddle and Kunlun form Baidu’s paired software and hardware foundation.","confirmed","https://ir.baidu.com/static-files/6053f234-9dbd-4afb-b300-7fcba9cb6f27"),D("alibaba-cloud","modelscope","DEVELOPS","Alibaba Cloud launched and operates the ModelScope open-source model community.","confirmed","https://www.alibabacloud.com/blog/601320"),D("modelscope","qwen","INTEGRATES_WITH","ModelScope distributes Qwen models for download, fine-tuning, evaluation and deployment.","confirmed","https://www.alibabacloud.com/help/en/pai/use-cases/secure-encryption-inference-service"),D("tencent-cloud","tencent-zixiao","DEVELOPS","Tencent’s cloud ecosystem includes its internally developed Zixiao accelerator.","reported","https://www.tencent.com/en-us/articles/2201344.html"),D("doubao","doubao-model","USES_MODEL_FROM","Doubao is ByteDance’s assistant product built around the distinct Doubao model family.","confirmed","https://www.doubao.com/legal/feature_intro"),D("kimi-app","moonshot-ai","USES_MODEL_FROM","Kimi is Moonshot AI’s user-facing assistant and research product.","confirmed","https://www.kimi.com/"),D("tencent-yuanbao","tencent-hunyuan","USES_MODEL_FROM","Tencent Yuanbao is a user-facing assistant powered by Tencent’s model ecosystem.","confirmed","https://yuanbao.tencent.com/"),D("ernie-bot","baidu-ernie","USES_MODEL_FROM","Baidu states that ERNIE Bot is powered by its in-house ERNIE foundation model.","confirmed","https://ir.baidu.com/static-files/6053f234-9dbd-4afb-b300-7fcba9cb6f27"),D("deepseek-app","deepseek","USES_MODEL_FROM","DeepSeek’s official application exposes its model family to end users.","confirmed","https://www.deepseek.com/"),D("qwen-agent","qwen","USES_MODEL_FROM","Qwen-Agent is Alibaba’s open-source framework for building tool-using applications with Qwen models.","confirmed","https://github.com/QwenLM/Qwen-Agent"),D("qianfan-agent","baidu-ernie","USES_MODEL_FROM","Qianfan AgentBuilder provides an enterprise application layer for Baidu’s model ecosystem.","confirmed","https://cloud.baidu.com/product/qianfan.html"),D("shanghai-ai-laboratory","lmdeploy","DEVELOPS","Shanghai AI Laboratory develops LMDeploy as the efficient inference and deployment engine in the Intern model toolchain.","confirmed","https://www.shlab.org.cn/intern-ai"),D("shanghai-ai-laboratory","xtuner","DEVELOPS","Shanghai AI Laboratory develops XTuner as the training and fine-tuning engine in the Intern model toolchain.","confirmed","https://www.shlab.org.cn/intern-ai"),D("shanghai-ai-laboratory","opencompass","DEVELOPS","Shanghai AI Laboratory develops OpenCompass as the evaluation layer spanning models, compute systems, embodied AI and safety.","confirmed","https://www.shlab.org.cn/intern-ai"),D("xtuner","pytorch","DEPENDS_ON","XTuner’s current training engine is built on PyTorch FSDP for distributed model training and fine-tuning.","confirmed","https://www.shlab.org.cn/intern-ai"),D("lmdeploy","cuda","RUNS_ON","LMDeploy documents CUDA GPU deployment as a supported high-performance inference backend.","confirmed","https://github.com/InternLM/lmdeploy"),D("sglang","cuda","RUNS_ON","SGLang provides a production serving backend for large language and multimodal models on CUDA GPUs.","confirmed","https://github.com/sgl-project/sglang"),D("apollo-go","baidu-ai-cloud","DEPENDS_ON","Apollo Go is a concrete downstream autonomous-mobility product in Baidu’s AI ecosystem.","confirmed","https://www.apollo.auto/apollo-go"),D("coze","bytedance-seed","INTEGRATES_WITH","Coze is ByteDance’s agent-development platform and integrates models from its ecosystem.","confirmed","https://www.coze.com/")].filter(i=>ft.has(i.source)&&ft.has(i.target)),nc=[D("huate-gas","smic","SUPPLIES","Huate Gas identifies SMIC among the integrated-circuit manufacturers supplied with specialty electronic gases.","confirmed","https://huategas.com/en/BusinessProfile/index.aspx"),D("huate-gas","hua-hong-semiconductor","SUPPLIES","Huate Gas identifies Hua Hong among the integrated-circuit manufacturers supplied with specialty electronic gases.","confirmed","https://huategas.com/en/BusinessProfile/index.aspx"),D("huate-gas","ymtc","SUPPLIES","Huate Gas identifies Yangtze Memory among customers whose specialty-gas import constraints it has addressed.","confirmed","https://www.huategas.com/BusinessProfile/index.aspx"),D("huate-gas","cxmt","SUPPLIES","Huate Gas identifies CXMT among customers whose specialty-gas import constraints it has addressed.","confirmed","https://www.huategas.com/BusinessProfile/index.aspx"),D("hwatsing","smic","PROVIDES_EQUIPMENT_TO","Hwatsing documents delivery of China’s first domestically produced 12-inch CMP system to SMIC.","confirmed","https://hwatsing.com/news_detail/294.html"),D("naura-technology","smic","PROVIDES_EQUIPMENT_TO","NAURA reports that its etch, deposition, furnace and cleaning systems run in mainstream Chinese logic production; SMIC is shown as a representative domestic logic-fab path, not a disclosed system-level contract.","representative","https://www.naura.com/content/details_30_2081.html"),D("naura-technology","hua-hong-semiconductor","PROVIDES_EQUIPMENT_TO","NAURA equipment is in volume production at mainstream Chinese integrated-circuit fabs; this edge represents its role in domestic specialty and logic fabrication.","representative","https://www.naura.com/content/details_30_2081.html"),D("naura-technology","ymtc","PROVIDES_EQUIPMENT_TO","NAURA states that its systems support 3D NAND and are deployed in mainstream chip-production lines; YMTC is a representative domestic NAND manufacturing path.","representative","https://www.naura.com/content/details_30_2081.html"),D("naura-technology","cxmt","PROVIDES_EQUIPMENT_TO","NAURA states that its systems support DRAM and are deployed in mainstream chip-production lines; CXMT is a representative domestic DRAM manufacturing path.","representative","https://www.naura.com/content/details_30_2081.html"),D("amec","smic","PROVIDES_EQUIPMENT_TO","AMEC etch and deposition systems serve advanced integrated-circuit production lines; SMIC is a representative domestic foundry deployment path because AMEC does not name the customer in this disclosure.","representative","https://www.amec-inc.com/uploads/files/20250611/17496080859885.pdf"),D("amec","ymtc","PROVIDES_EQUIPMENT_TO","AMEC describes its high-aspect-ratio etch equipment as supporting advanced memory manufacturing; YMTC is a representative domestic 3D-NAND path.","representative","https://static.amec-inc.com/uploads/files/20250611/17496080859885.pdf"),D("piotech","smic","PROVIDES_EQUIPMENT_TO","Piotech deposition and bonding equipment is installed across Chinese wafer-manufacturing production lines; SMIC represents the disclosed integrated-circuit foundry application.","representative","https://piotech.cn/index.php/About/about.html"),D("piotech","ymtc","PROVIDES_EQUIPMENT_TO","Piotech identifies advanced memory among the production applications for its deposition equipment; YMTC represents the domestic NAND path.","representative","https://piotech.cn/index.php/About/about.html"),D("anji-microelectronics","smic","SUPPLIES","Anji CMP slurries and wet chemicals are mass-produced for logic-chip lines; SMIC is a representative domestic logic-fabrication path rather than a named customer disclosure.","representative","https://www.anjimicro.com/en/jiejuefangan.html"),D("anji-microelectronics","ymtc","SUPPLIES","Anji documents volume use of its chemicals in 3D NAND processes; YMTC is a representative domestic NAND-fabrication path rather than a named customer disclosure.","representative","https://www.anjimicro.com/en/jiejuefangan.html"),D("nsig","smic","SUPPLIES","NSIG reports that its 300mm silicon wafers have qualified with mainstream domestic semiconductor customers; SMIC is a representative foundry path because customers are not named.","representative","https://www.nsig.com/en"),D("jcet","cambricon","PROVIDES_PACKAGING_TO","JCET provides advanced packaging for AI and high-performance-computing chips; Cambricon is shown as a representative domestic accelerator packaging path, not a disclosed customer contract.","representative","https://www.jcetglobal.com/en/site/detailscon/908"),D("jcet","biren-technology","PROVIDES_PACKAGING_TO","JCET provides advanced packaging for AI and high-performance-computing chips; Biren is shown as a representative domestic accelerator packaging path, not a disclosed customer contract.","representative","https://www.jcetglobal.com/en/site/detailscon/908")].filter(i=>ft.has(i.source)&&ft.has(i.target)),ic=[D("huawei","huawei-cloud","DEVELOPS","Huawei operates Huawei Cloud as the cloud delivery layer for its enterprise and AI platforms.","confirmed","https://www.huawei.com/en/news/2023/9/ascend-aicloud-service"),D("huawei-cloud","huawei-ascend","RUNS_ON","Huawei Cloud’s Ascend AI Cloud Service provides Ascend-powered AI compute from its cloud data centers.","confirmed","https://www.huawei.com/en/news/2023/9/ascend-aicloud-service"),D("alibaba-cloud","alibaba-yitian","DEVELOPS","Alibaba Cloud deploys its in-house Yitian 710 processor in ECS instance families.","confirmed","https://www.alibabacloud.com/help/en/ecs/user-guide/summary-of-the-migration"),D("alibaba-cloud","alibaba-hanguang","DEVELOPS","Alibaba developed Hanguang 800 as an inference accelerator for Alibaba Cloud infrastructure and production AI workloads.","confirmed","https://www.alibabacloud.com/blog/compare-and-compute-high-performance-computing-with-alibaba-cloud_595807"),D("qwen","alibaba-cloud","RUNS_ON","Alibaba Cloud Model Studio provides the Qwen model family through managed and OpenAI-compatible APIs.","confirmed","https://www.alibabacloud.com/help/en/model-studio/what-is-model-studio"),D("deepseek","alibaba-cloud","DEPLOYED_BY","Alibaba Cloud Model Studio lists DeepSeek among the third-party model families available as managed services.","confirmed","https://www.alibabacloud.com/help/en/model-studio/what-is-model-studio"),D("moonshot-ai","alibaba-cloud","DEPLOYED_BY","Alibaba Cloud Model Studio lists Kimi among the third-party model families available as managed services.","confirmed","https://www.alibabacloud.com/help/en/model-studio/what-is-model-studio"),D("tencent-hunyuan","tencent-cloud","RUNS_ON","Tencent exposes Hunyuan to enterprises through Tencent Cloud APIs and its model-as-a-service platform.","confirmed","https://www.tencent.com/tencent-unveils-hunyuan-its-proprietary-large-foundation-model-on-tencent-cloud/"),D("doubao-model","volcano-engine","DEPLOYED_BY","Volcano Engine provides Doubao model APIs and the cloud-native serving layer used for enterprise deployment.","confirmed","https://www.volcengine.com/product/doubao"),D("bytedance-seed","volcano-engine","DEPLOYED_BY","Volcano Engine is ByteDance’s enterprise distribution and API platform for the Doubao/Seed model portfolio.","confirmed","https://www.volcengine.com/product/doubao")].filter(i=>ft.has(i.source)&&ft.has(i.target)),sc=[D("agibot","nvidia-isaac","INTEGRATES_WITH","NVIDIA identifies AGIBOT as building with Isaac simulation and adopting Isaac GR00T models for humanoid deployment.","confirmed","https://nvidianews.nvidia.com/news/nvidia-and-global-robotics-leaders-take-physical-ai-to-the-real-world"),D("fourier-intelligence","nvidia-isaac","INTEGRATES_WITH","NVIDIA identifies Fourier Intelligence among humanoid developers using its comprehensive Isaac and GR00T robotics platform.","confirmed","https://nvidianews.nvidia.com/news/foundation-model-isaac-robotics-platform"),D("galbot","nvidia-isaac","INTEGRATES_WITH","NVIDIA lists Galbot in its humanoid robotics ecosystem for Isaac GR00T development workflows.","confirmed","https://www.nvidia.com/en-in/use-cases/humanoid-robots/"),D("robotera","nvidia-isaac","INTEGRATES_WITH","NVIDIA includes RobotEra among humanoid developers in its physical-AI ecosystem; this edge records platform participation rather than an exclusive dependency.","reported","https://images.nvidia.com/aem-dam/en-zz/Solutions/events/ces/CES_2025_Highlights_Deck.pdf")].filter(i=>ft.has(i.source)&&ft.has(i.target)),ac=[D("01-ai","hugging-face","DEPLOYED_BY","01.AI distributes Yi open-weight models and documentation through its official Hugging Face organization.","confirmed","https://huggingface.co/01-ai/models"),D("01-ai","modelscope","DEPLOYED_BY","01.AI’s official Yi documentation lists ModelScope as a model-weight distribution channel.","confirmed","https://huggingface.co/01-ai/Yi-6B"),D("shanghai-ai-laboratory","modelscope","DEPLOYED_BY","Shanghai AI Laboratory publishes InternLM model weights through its verified ModelScope organization.","confirmed","https://modelscope.cn/models/Shanghai_AI_Laboratory/internlm2_5-7b"),D("alibaba-cloud","alibaba-wan","DEVELOPS","Alibaba Cloud develops and distributes the Wan generative-video model family through its AI model ecosystem.","confirmed","https://www.alibabacloud.com/blog/alibaba-cloud-releases-wan-series-generative-ai-model-for-video-creation_598729"),D("baichuan-ai","vllm","RUNS_ON","Baichuan provides OpenAI-compatible model APIs; vLLM is shown as a representative self-hosted serving path rather than the disclosed backend of Baichuan’s managed API.","representative","https://platform.baichuan-ai.com/docs"),D("stepfun","vllm","RUNS_ON","StepFun exposes OpenAI- and Anthropic-compatible model endpoints; vLLM represents an interoperable self-hosted serving path, not StepFun’s disclosed managed-service backend.","representative","https://platform.stepfun.ai/docs/en/step-plan/quick-start")].filter(i=>ft.has(i.source)&&ft.has(i.target)),rc=[D("deepseek","moore-threads","RUNS_ON","Moore Threads publishes supported DeepSeek deployments and model-specific optimizations for its MUSA GPU stack.","confirmed","https://en.mthreads.com/product/S5000"),D("qwen","moore-threads","RUNS_ON","Moore Threads states that its S5000 GPU platform provides optimized support for Qwen architectures.","confirmed","https://en.mthreads.com/product/S5000"),D("vllm","moore-threads","RUNS_ON","Moore Threads lists vLLM among the inference frameworks natively supported by its MUSA software stack.","confirmed","https://en.mthreads.com/product/S5000"),D("siliconflow","moore-threads","RUNS_ON","Moore Threads documents SiliconFlow’s high-performance inference engine running with the MUSA software stack on S5000 systems.","confirmed","https://en.mthreads.com/product/S5000")].filter(i=>ft.has(i.source)&&ft.has(i.target)),oc=[D("nvidia","nvidia-vera-rubin","DEVELOPS","NVIDIA develops the Vera Rubin rack-scale AI platform and its Rubin GPU, Vera CPU, networking and infrastructure processors.","confirmed","https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform"),D("nvidia-vera-rubin","azure","DEPLOYED_BY","Microsoft is among the cloud providers deploying Vera Rubin systems for next-generation AI infrastructure.","confirmed","https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer"),D("nvidia-vera-rubin","coreweave","DEPLOYED_BY","CoreWeave is integrating Rubin-based systems into its AI cloud platform.","confirmed","https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer"),D("amd","amd-instinct-mi400","DEVELOPS","AMD develops the Instinct MI400 accelerator family for frontier AI, sovereign AI and HPC.","confirmed","https://www.amd.com/en/products/accelerators/instinct/mi400.html"),D("google-cloud","google-tpu","DEVELOPS","Google Cloud introduced TPU 8t for training and TPU 8i for agentic inference.","confirmed","https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/tpus-8t-8i-cloud-next/"),D("deepmind","google-antigravity","DEVELOPS","Google offers Antigravity as an agent for multi-step development workflows through its current Gemini interactions platform.","confirmed","https://ai.google.dev/gemini-api/docs/interactions-overview"),D("mistral","mistral-vibe","DEVELOPS","Mistral develops Vibe for long-horizon productivity and coding work.","confirmed","https://mistral.ai/news/"),D("minimax","minimax-mavis","DEVELOPS","MiniMax renamed its upgraded long-running agent Mavis and positions it around agent teams and sustained tasks.","confirmed","https://www.minimax.io/news"),D("cohere","cohere-north-automations","DEVELOPS","Cohere develops North Automations for enterprise workflow orchestration.","confirmed","https://cohere.com/blog"),D("openai","openai-codex","DEVELOPS","OpenAI develops Codex as a suite of software-agent products spanning CLI, cloud, IDE and broader professional workflows.","confirmed","https://openai.com/index/codex-for-every-role-tool-workflow/")].filter(i=>ft.has(i.source)&&ft.has(i.target)),lc={"step-3-5-flash|vllm|RUNS_ON":{status:"confirmed",sourceUrl:"https://github.com/vllm-project/recipes/blob/main/StepFun/Step-3.5-Flash.md",explanation:"The official vLLM recipes repository provides production serving configurations for Step-3.5 Flash on supported NVIDIA GPUs."},"intern-s2-preview|lmdeploy|RUNS_ON":{status:"confirmed",sourceUrl:"https://github.com/InternLM/Intern-S1",explanation:"The official Intern model repository provides LMDeploy deployment guides and model artifacts for Intern-S2 Preview."},"baichuan-m4|baichuan-ai|RUNS_ON":{status:"confirmed",sourceUrl:"https://arxiv.org/abs/2606.08982",explanation:"Baichuan-M4 is delivered as Baichuan Intelligence’s clinical-grade medical agent system; public self-hosted runtime details are not disclosed."},"kling-3|kuaishou-kling|RUNS_ON":{status:"confirmed",sourceUrl:"https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-30-model-ushering-era-where-everyone-can-be",explanation:"Kuaishou delivers Kling 3.0 through the Kling AI managed product and does not publicly disclose its underlying serving hardware."},"vidu-q3|shengshu-vidu|RUNS_ON":{status:"confirmed",sourceUrl:"https://platform.vidu.com/docs/model-map",explanation:"ShengShu exposes Vidu Q3 through the Vidu application and managed API platform."},"wan-2-7|alibaba-cloud|RUNS_ON":{status:"confirmed",sourceUrl:"https://www.alibabacloud.com/help/en/model-studio/newly-released-models",explanation:"Alibaba Cloud Model Studio lists Wan 2.7 image and video generation endpoints as managed model services."},"longcat-2|sglang|RUNS_ON":{status:"confirmed",sourceUrl:"https://github.com/meituan-longcat/LongCat-2.0",explanation:"Meituan’s official LongCat 2.0 repository provides SGLang deployment paths for both GPU and domestic-NPU platforms."},"sensenova-6-7|sensetime|RUNS_ON":{status:"confirmed",sourceUrl:"https://www.sensetime.com/en/research/",explanation:"SenseTime delivers SenseNova 6.7 Flash-Lite through its managed SenseNova model platform; lower-level serving hardware is not publicly disclosed."},"deepseek-v4-pro|vllm|RUNS_ON":{status:"confirmed",sourceUrl:"https://github.com/vllm-project/vllm/blob/main/docs/models/supported_models.md",explanation:"vLLM’s official supported-model table lists the DeepSeek V4 architecture and DeepSeek-V4-Pro for text generation."},"deepseek-v4-flash|vllm|RUNS_ON":{status:"confirmed",sourceUrl:"https://github.com/vllm-project/vllm/blob/main/docs/models/supported_models.md",explanation:"vLLM’s official supported-model table lists DeepSeek-V4-Flash under its DeepSeek V4 implementation."},"deepseek-r1|vllm|RUNS_ON":{status:"confirmed",sourceUrl:"https://github.com/vllm-project/vllm/blob/main/docs/models/supported_models.md",explanation:"vLLM officially lists DeepSeek-R1 under its supported DeepSeek V3 architecture."},"qwen3|vllm|RUNS_ON":{status:"confirmed",sourceUrl:"https://github.com/vllm-project/vllm/blob/main/docs/models/supported_models.md",explanation:"vLLM officially supports Qwen3 dense and mixture-of-experts model architectures."},"qwen-vl|vllm|RUNS_ON":{status:"confirmed",sourceUrl:"https://github.com/vllm-project/vllm/blob/main/docs/models/supported_models.md",explanation:"vLLM officially supports Qwen vision-language architectures including Qwen2-VL, Qwen2.5-VL and Qwen3-VL."},"glm-5-2|vllm|RUNS_ON":{status:"confirmed",sourceUrl:"https://github.com/vllm-project/vllm-ascend/blob/main/docs/source/user_guide/support_matrix/supported_models.md",explanation:"The official vLLM Ascend support matrix lists GLM-5.2 for Ascend A2 and A3 hardware."},"minimax-m2-7|vllm|RUNS_ON":{status:"confirmed",sourceUrl:"https://github.com/vllm-project/recipes/blob/main/MiniMax/MiniMax-M2.md",explanation:"The official vLLM recipes repository provides a serving configuration for MiniMax-M2.7."},"minimax-m3|vllm|RUNS_ON":{status:"reported",sourceUrl:"https://github.com/vllm-project/vllm/issues/46049",explanation:"vLLM tracks MiniMax-M3 reasoning-parser behavior, demonstrating active runtime support while documenting a current output-parsing limitation."},"unitree-robotics|nvidia-isaac|INTEGRATES_WITH":{status:"confirmed",sourceUrl:"https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-NVIDIA-Isaac-GR00T-Reference-Humanoid-Robot-for-Academic-Research/default.aspx",explanation:"NVIDIA’s humanoid reference workflow combines Unitree hardware with Jetson Thor compute and the Isaac GR00T development platform."},"shin-etsu|tsmc|SUPPLIES":{sourceUrl:"https://pr.tsmc.com/system/files/newspdf/attachment/d35a3490c76e4dd278e9975c4785daa0e415edc4/2022%20Excellent%20Performance%20Award%20Press%20Release%20%28E%29_final_wmn.pdf",explanation:"TSMC identifies Shin-Etsu Handotai as a silicon-wafer supplier supporting advanced-material development and production."},"sumco|samsung-foundry|SUPPLIES":{sourceUrl:"https://www.sumcosi.com/english/csr/pdf/csr_rep15en.pdf",status:"confirmed",explanation:"Samsung Electronics recognized SUMCO as a supplier with consecutive Best Partner awards for its silicon-wafer business."},"jsr|tsmc|SUPPLIES":{sourceUrl:"https://pr.tsmc.com/system/files/newspdf/attachment/d35a3490c76e4dd278e9975c4785daa0e415edc4/2022%20Excellent%20Performance%20Award%20Press%20Release%20%28E%29_final_wmn.pdf",status:"confirmed",explanation:"TSMC recognizes JSR for lithography-material development and production support."},"asml|tsmc|PROVIDES_EQUIPMENT_TO":{sourceUrl:"https://www.asml.com/en/news/stories/2022/busting-asml-myths"},"asml|samsung-foundry|PROVIDES_EQUIPMENT_TO":{sourceUrl:"https://www.asml.com/en/news/stories/2022/busting-asml-myths"},"asml|intel-foundry|PROVIDES_EQUIPMENT_TO":{sourceUrl:"https://www.asml.com/en/news/press-releases/2026/high-na-euv-reaches-new-readiness-milestone"},"applied-materials|tsmc|PROVIDES_EQUIPMENT_TO":{sourceUrl:"https://pr.tsmc.com/system/files/newspdf/attachment/855e25066dbc50b8b1fb227027996bb56183da2a/2024%20Supply%20Chain%20Management%20Forum%20Press%20Release%20%28E%29_Final_wmn.pdf"},"lam-research|tsmc|PROVIDES_EQUIPMENT_TO":{sourceUrl:"https://pr.tsmc.com/english/news/3086"},"kla|tsmc|PROVIDES_EQUIPMENT_TO":{sourceUrl:"https://pr.tsmc.com/english/news/3086"},"tokyo-electron|tsmc|PROVIDES_EQUIPMENT_TO":{sourceUrl:"https://pr.tsmc.com/english/news/3086"},"screen|tsmc|PROVIDES_EQUIPMENT_TO":{sourceUrl:"https://pr.tsmc.com/system/files/newspdf/attachment/855e25066dbc50b8b1fb227027996bb56183da2a/2024%20Supply%20Chain%20Management%20Forum%20Press%20Release%20%28E%29_Final_wmn.pdf",status:"confirmed"},"disco|ase|PROVIDES_EQUIPMENT_TO":{sourceUrl:"https://www.disco.co.jp/jp/corporate/outline/prizes.html",status:"confirmed",explanation:"ASE has recognized DISCO as an outstanding supplier; DISCO provides dicing and grinding equipment used in semiconductor packaging."},"advantest|sk-hynix|PROVIDES_EQUIPMENT_TO":{sourceUrl:"https://www.thelec.net/news/articleView.html?idxno=5202",explanation:"Industry reporting identifies Advantest as an incumbent wafer-tester supplier in SK hynix’s memory supply chain."},"synopsys|nvidia|SUPPLIES":{type:"PARTNERS_WITH",sourceUrl:"https://nvidianews.nvidia.com/news/nvidia-and-synopsys-announce-strategic-partnership-to-revolutionize-engineering-and-design",explanation:"NVIDIA and Synopsys disclose a strategic engineering and design partnership; the public evidence does not establish a simple one-way supply relationship."},"cadence|broadcom|SUPPLIES":{sourceUrl:"https://www.cadence.com/en_US/home/company/newsroom/press-releases/pr/2023/cadence-collaborates-with-broadcom-to-implement-ai-driven.html",explanation:"Broadcom publicly states that it uses a portfolio of Cadence solutions across its business units."},"arm|aws-trainium|SUPPLIES":{remove:!0},"ajinomoto|cowos|SUPPLIES":{remove:!0},"power-grid|coreweave|SUPPLIES":{remove:!0},"cooling-water|vertiv|SUPPLIES":{remove:!0},"fiber|corning|SUPPLIES":{remove:!0},"intel-foundry|intel|MANUFACTURES":{sourceUrl:"https://www.intel.com/content/www/us/en/company-overview/company-overview.html",explanation:"Intel states that it both designs and manufactures its own technology through Intel Foundry."},"ase|amd|SUPPLIES":{sourceUrl:"https://ase.aseglobal.com/public/downloads/en/ASE_2011_CSR_EN_Final.pdf",status:"confirmed",explanation:"ASE reports receiving an AMD customer appreciation award, supporting an assembly, test, or packaging supplier relationship."},"tsmc|nvidia|MANUFACTURES":{sourceUrl:"https://pr.tsmc.com/english/news/1408",explanation:"NVIDIA and TSMC jointly disclosed that TSMC manufactures NVIDIA-designed processors."},"tsmc|amd|MANUFACTURES":{sourceUrl:"https://ir.amd.com/financial-information/sec-filings/content/0000002488-26-000018/amd-20251227.htm",explanation:"AMD identifies TSMC as the foundry manufacturing its newest IC products and its 7nm-and-smaller CPU and GPU portfolio."},"tsmc|google-tpu|MANUFACTURES":{sourceUrl:"https://www.itpro.com/infrastructure/tpus-googles-home-advantage"},"tsmc|aws-trainium|MANUFACTURES":{sourceUrl:"https://techcrunch.com/2026/03/22/an-exclusive-tour-of-amazons-trainium-lab-the-chip-thats-won-over-anthropic-openai-even-apple/"},"tsmc|maia|MANUFACTURES":{sourceUrl:"https://azure.microsoft.com/en-us/blog/azure-maia-for-the-era-of-ai-from-silicon-to-software-to-systems/",status:"confirmed",explanation:"Microsoft states that Maia 100 is made on TSMC’s 5nm node with advanced packaging."},"tsmc|broadcom|MANUFACTURES":{sourceUrl:"https://investors.broadcom.com/static-files/58d9236c-142c-4878-8f18-b862132c125e",status:"confirmed",explanation:"Broadcom identifies TSMC as a key foundry and says it increasingly relies on TSMC for advanced-node manufacturing."},"samsung-foundry|meta-mtia|MANUFACTURES":{source:"tsmc",target:"meta-mtia",sourceUrl:"https://ai.meta.com/blog/next-generation-meta-training-inference-accelerator-AI-MTIA/",status:"confirmed",explanation:"Meta identifies TSMC 7nm and 5nm as the process technologies used for the first two MTIA generations; this replaces the unsupported Samsung Foundry edge."},"carl-zeiss-smt|asml|SUPPLIES":{sourceUrl:"https://www.asml.com/en/news/press-releases/2016/zeiss-and-asml-strengthen-partnership-for-next-generation-of-euv-lithography",explanation:"Carl Zeiss SMT supplies the high-performance optical subsystem used in ASML lithography scanners."},"cymer|asml|SUPPLIES":{sourceUrl:"https://www.asml.com/en/company/about-asml/cymer",explanation:"Cymer, an ASML subsidiary, develops lithography light sources used with ASML systems."},"trumpf|asml|SUPPLIES":{sourceUrl:"https://www.asml.com/en/news/stories/2022/making-euv-lab-to-fab",explanation:"ASML identifies TRUMPF lasers as critical modules used in the EUV light source."},"besi|tsmc|PROVIDES_EQUIPMENT_TO":{remove:!0},"kioxia|nvidia|PROVIDES_MEMORY_TO":{remove:!0},"aws-trainium|aws|DESIGNS":{source:"aws",target:"aws-trainium",sourceUrl:"https://aws.amazon.com/silicon-innovation/",explanation:"AWS designs Trainium and Inferentia machine-learning accelerators for Amazon EC2."},"google-tpu|google-cloud|DESIGNS":{source:"google-cloud",target:"google-tpu",sourceUrl:"https://cloud.google.com/tpu",explanation:"Google develops its custom TPU accelerators and makes them available through Google Cloud."},"maia|azure|DESIGNS":{source:"azure",target:"maia",sourceUrl:"https://azure.microsoft.com/en-us/blog/azure-maia-for-the-era-of-ai-from-silicon-to-software-to-systems/",explanation:"Microsoft developed Maia as an in-house accelerator optimized for Azure AI infrastructure."},"cowos|nvidia|SUPPLIES":{source:"tsmc",target:"nvidia",type:"PROVIDES_PACKAGING_TO",status:"reported",sourceUrl:"https://investor.tsmc.com/english/annual-reports",explanation:"TSMC provides advanced packaging services including CoWoS; NVIDIA use is publicly reported but not identified by customer in TSMC’s annual report."},"cowos|tsmc|DEPENDS_ON":{source:"tsmc",target:"cowos",type:"DEVELOPS",sourceUrl:"https://investor.tsmc.com/english/annual-reports",explanation:"CoWoS is a TSMC-developed advanced packaging technology service."},"asml|photoresists|DEPENDS_ON":{type:"EXPOSES",sourceUrl:"https://www.asml.com/en/news/stories/2022/busting-asml-myths",explanation:"ASML lithography systems pattern silicon wafers that have been treated with photoresist."},"photoresists|silicon|APPLIED_TO":{sourceUrl:"https://www.asml.com/en/news/stories/2022/busting-asml-myths"}},cc=i=>({...i,...lc[`${i.source}|${i.target}|${i.type}`]||{}}),uc={"openai|azure|TRAINS_ON":{activeFrom:2019},"anthropic|aws|TRAINS_ON":{activeFrom:2023},"chatgpt|openai|USES_MODEL_FROM":{activeFrom:2022},"claude-code|anthropic|USES_MODEL_FROM":{activeFrom:2025},"mcp|anthropic|DESIGNS":{activeFrom:2024},"claude-code|mcp|INTEGRATES_WITH":{activeFrom:2024},"deepseek-app|deepseek|USES_MODEL_FROM":{activeFrom:2025},"kimi-app|moonshot-ai|USES_MODEL_FROM":{activeFrom:2023},"qwen-agent|qwen|USES_MODEL_FROM":{activeFrom:2023},"qwen|alibaba-cloud|RUNS_ON":{activeFrom:2023},"deepseek|alibaba-cloud|DEPLOYED_BY":{activeFrom:2025},"moonshot-ai|alibaba-cloud|DEPLOYED_BY":{activeFrom:2023},"tencent-hunyuan|tencent-cloud|RUNS_ON":{activeFrom:2023},"huawei|cann|DEVELOPS":{activeFrom:2018},"cann|huawei-ascend|RUNS_ON":{activeFrom:2018},"vllm|cann|DEPENDS_ON":{activeFrom:2025},"pytorch|cann|INTEGRATES_WITH":{activeFrom:2019},"deepseek|huawei-ascend|RUNS_ON":{activeFrom:2025},"deepseek|huawei-cloud|DEPLOYED_BY":{activeFrom:2025},"deepseek-v4-pro|vllm|RUNS_ON":{activeFrom:2026},"deepseek-v4-flash|vllm|RUNS_ON":{activeFrom:2026},"deepseek-r1|vllm|RUNS_ON":{activeFrom:2025},"qwen3|vllm|RUNS_ON":{activeFrom:2025},"qwen-vl|vllm|RUNS_ON":{activeFrom:2024},"glm-5-2|vllm|RUNS_ON":{activeFrom:2026},"minimax-m2-7|vllm|RUNS_ON":{activeFrom:2026},"minimax-m3|vllm|RUNS_ON":{activeFrom:2026},"step-3-5-flash|vllm|RUNS_ON":{activeFrom:2026},"intern-s2-preview|lmdeploy|RUNS_ON":{activeFrom:2026},"baichuan-m4|baichuan-ai|RUNS_ON":{activeFrom:2026},"kling-3|kuaishou-kling|RUNS_ON":{activeFrom:2026},"vidu-q3|shengshu-vidu|RUNS_ON":{activeFrom:2026},"wan-2-7|alibaba-cloud|RUNS_ON":{activeFrom:2026},"longcat-2|sglang|RUNS_ON":{activeFrom:2026},"sensenova-6-7|sensetime|RUNS_ON":{activeFrom:2026},"shanghai-ai-laboratory|lmdeploy|DEVELOPS":{activeFrom:2023},"shanghai-ai-laboratory|xtuner|DEVELOPS":{activeFrom:2023},"shanghai-ai-laboratory|opencompass|DEVELOPS":{activeFrom:2023},"nvidia-vera-rubin|nvidia|DEPENDS_ON":{activeFrom:2026},"amd-instinct-mi400|amd|DEPENDS_ON":{activeFrom:2026}},dc=i=>({...i,...uc[`${i.source}|${i.target}|${i.type}`]||{}}),ks=[...Kl,...Zl,...Gr,...Ql,...ec,...tc,...nc,...ic,...sc,...ac,...rc,...oc].filter(i=>(ft.has(i.source)||$n[i.source])&&(ft.has(i.target)||$n[i.target])).map(cc).map(dc).filter(i=>!i.remove),hc=[...new Set(ks.map(i=>i.type))].sort(),Hr=[{id:"chatgpt-gpu",title:"How ChatGPT reaches a GPU",kicker:"8 stops · 4 min",nodes:["chatgpt","openai","azure","nvidia","sk-hynix","tsmc","asml","photoresists"],summary:"Follow a representative serving path from a conversational product down through models, cloud, accelerators, memory, fabrication and lithography."},{id:"nvidia",title:"Inside the NVIDIA ecosystem",kicker:"7 stops · 3 min",nodes:["nvidia","cuda","sk-hynix","tsmc","cowos","supermicro","coreweave"],summary:"See why NVIDIA’s position combines accelerators, software, memory bandwidth, packaging, systems and cloud distribution."},{id:"chip",title:"How an AI chip is made",kicker:"8 stops · 4 min",nodes:["silicon","photoresists","asml","applied-materials","kla","tsmc","cowos","nvidia"],summary:"Move from purified matter and process chemistry to tools, fabrication, packaging and a finished accelerator."},{id:"asml-app",title:"From ASML to an AI application",kicker:"7 stops · 4 min",nodes:["asml","tsmc","nvidia","supermicro","azure","openai","chatgpt"],summary:"Trace how lithography capacity propagates upward into a specific AI product."},{id:"hyperscaler",title:"The hyperscaler stack",kicker:"7 stops · 3 min",nodes:["aws","aws-trainium","azure","maia","google-cloud","google-tpu","oracle-cloud"],summary:"Compare cloud platforms that increasingly design their own accelerators."},{id:"models",title:"The model layer",kicker:"7 stops · 3 min",nodes:["kimi-k3","gpt-5-6-sol","claude-fable-5","gemini-3-7-flash","grok-4-5","deepseek-v4-pro","glm-5-3"],summary:"Compare major current model families as product entities, then inspect their labs and physical dependency paths."},{id:"agents",title:"The agent / harness layer",kicker:"7 stops · 3 min",nodes:["claude-code","cursor","mcp","openai-agents","langchain","browser-use","computer-use"],summary:"Separate the model from the harness that gives it context, tools and agency."},{id:"robotics",title:"Physical AI & robotics",kicker:"6 stops · 3 min",nodes:["physical-intelligence","nvidia-isaac","figure","tesla-ai","waymo","fanuc"],summary:"Follow intelligence from foundation models and simulation into machines."},{id:"bottlenecks",title:"Who controls the bottlenecks?",kicker:"7 stops · 4 min",nodes:["asml","tsmc","cowos","sk-hynix","nvidia","vertiv","power-grid"],summary:"Inspect concentrated control points in lithography, fabrication, packaging, memory, accelerators, cooling and power."}],Vr={chatgpt:["chatgpt","openai","vllm","azure","nvidia","sk-hynix","tsmc","asml"],perplexity:["perplexity","openai","vllm","aws","nvidia","sk-hynix","tsmc","asml"],"claude-code":["claude-code","anthropic","vllm","aws","aws-trainium","sk-hynix","tsmc","asml"],cursor:["cursor","anthropic","vllm","aws","nvidia","sk-hynix","tsmc","asml"],"nvidia-isaac":["nvidia-isaac","pytorch","cuda","nvidia","sk-hynix","tsmc","asml","photoresists"]},pc={"intern-s2-preview":["intern-s2-preview","lmdeploy","cuda","nvidia","tsmc","asml","photoresists","silicon"],"baichuan-m4":["baichuan-m4","baichuan-ai","vllm","cuda","nvidia","tsmc","asml","photoresists","silicon"],"kling-3":["kling-3","kuaishou-kling"],"vidu-q3":["vidu-q3","shengshu-vidu"],"wan-2-7":["wan-2-7","alibaba-cloud"],"longcat-2":["longcat-2","sglang","cuda","nvidia","tsmc","asml","photoresists","silicon"],"sensenova-6-7":["sensenova-6-7","sensetime"]};for(const i of Vt.filter(e=>e.type==="Model"))Vr[i.id]=pc[i.id]||[i.id,"vllm","cuda","nvidia","tsmc","asml","photoresists","silicon"];const Bs="179",jn={ROTATE:0,DOLLY:1,PAN:2},Zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fc=0,zr=1,mc=2,Wr=1,gc=2,on=3,gn=0,Rt=1,Jt=2,_n=0,Jn=1,Xr=2,qr=3,Yr=4,_c=5,Rn=100,vc=101,Sc=102,yc=103,Mc=104,xc=200,Ac=201,Ec=202,bc=203,Gs=204,Hs=205,wc=206,Tc=207,Cc=208,Ic=209,Rc=210,Pc=211,Dc=212,Lc=213,Uc=214,Vs=0,zs=1,Ws=2,Qn=3,Xs=4,qs=5,Ys=6,$s=7,$r=0,Nc=1,Oc=2,vn=0,Fc=1,kc=2,Bc=3,Gc=4,Hc=5,Vc=6,zc=7,Kr=300,ei=301,ti=302,Ks=303,js=304,Xi=306,Zs=1e3,Pn=1001,Js=1002,qt=1003,Wc=1004,qi=1005,Qt=1006,Qs=1007,Dn=1008,en=1009,jr=1010,Zr=1011,Ti=1012,ea=1013,Ln=1014,ln=1015,Ci=1016,ta=1017,na=1018,Ii=1020,Jr=35902,Qr=1021,eo=1022,Yt=1023,Ri=1026,Pi=1027,to=1028,ia=1029,no=1030,sa=1031,aa=1033,Yi=33776,$i=33777,Ki=33778,ji=33779,ra=35840,oa=35841,la=35842,ca=35843,ua=36196,da=37492,ha=37496,pa=37808,fa=37809,ma=37810,ga=37811,_a=37812,va=37813,Sa=37814,ya=37815,Ma=37816,xa=37817,Aa=37818,Ea=37819,ba=37820,wa=37821,Zi=36492,Ta=36494,Ca=36495,io=36283,Ia=36284,Ra=36285,Pa=36286,Xc=3200,qc=3201,so=0,Yc=1,Sn="",Nt="srgb",ni="srgb-linear",Ji="linear",Ze="srgb",ii=7680,ao=519,$c=512,Kc=513,jc=514,ro=515,Zc=516,Jc=517,Qc=518,eu=519,oo=35044,lo="300 es",tn=2e3,Qi=2001;class Un{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],es=Math.PI/180,Da=180/Math.PI;function Di(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function tu(i,e){return(i%e+e)%e}function La(i,e,t){return(1-t)*i+t*e}function Li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const nu={DEG2RAD:es};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let c=n[s+0],l=n[s+1],u=n[s+2],p=n[s+3];const d=a[r+0],f=a[r+1],g=a[r+2],v=a[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(p!==v||c!==d||l!==f||u!==g){let m=1-o;const h=c*d+l*f+u*g+p*v,E=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){const I=Math.sqrt(A),w=Math.atan2(I,h*E);m=Math.sin(m*w)/I,o=Math.sin(o*w)/I}const S=o*E;if(c=c*m+d*S,l=l*m+f*S,u=u*m+g*S,p=p*m+v*S,m===1-o){const I=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=I,l*=I,u*=I,p*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],p=a[r],d=a[r+1],f=a[r+2],g=a[r+3];return e[t]=o*g+u*p+c*f-l*d,e[t+1]=c*g+u*d+l*p-o*f,e[t+2]=l*g+u*f+o*d-c*p,e[t+3]=u*g-o*p-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),p=o(a/2),d=c(n/2),f=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=d*u*p+l*f*g,this._y=l*f*p-d*u*g,this._z=l*u*g+d*f*p,this._w=l*u*p-d*f*g;break;case"YXZ":this._x=d*u*p+l*f*g,this._y=l*f*p-d*u*g,this._z=l*u*g-d*f*p,this._w=l*u*p+d*f*g;break;case"ZXY":this._x=d*u*p-l*f*g,this._y=l*f*p+d*u*g,this._z=l*u*g+d*f*p,this._w=l*u*p-d*f*g;break;case"ZYX":this._x=d*u*p-l*f*g,this._y=l*f*p+d*u*g,this._z=l*u*g-d*f*p,this._w=l*u*p+d*f*g;break;case"YZX":this._x=d*u*p+l*f*g,this._y=l*f*p+d*u*g,this._z=l*u*g-d*f*p,this._w=l*u*p-d*f*g;break;case"XZY":this._x=d*u*p-l*f*g,this._y=l*f*p-d*u*g,this._z=l*u*g+d*f*p,this._w=l*u*p+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],u=t[6],p=t[10],d=n+o+p;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(a-l)*f,this._z=(r-s)*f}else if(n>o&&n>p){const f=2*Math.sqrt(1+n-o-p);this._w=(u-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+l)/f}else if(o>p){const f=2*Math.sqrt(1+o-n-p);this._w=(a-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+p-n-o);this._w=(r-s)/f,this._x=(a+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+r*o+s*l-a*c,this._y=s*u+r*c+a*o-n*l,this._z=a*u+r*l+n*c-s*o,this._w=r*u-n*o-s*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),p=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=r*p+this._w*d,this._x=n*p+this._x*d,this._y=s*p+this._y*d,this._z=a*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(co.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*s-o*n),u=2*(o*t-a*s),p=2*(a*n-r*t);return this.x=t+c*l+r*p-o*u,this.y=n+c*u+o*l-a*p,this.z=s+c*p+a*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-a*o,this.y=a*r-n*c,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new T,co=new Nn;class Oe{constructor(e,t,n,s,a,r,o,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l)}set(e,t,n,s,a,r,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],u=n[4],p=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],h=s[6],E=s[1],A=s[4],S=s[7],I=s[2],w=s[5],P=s[8];return a[0]=r*v+o*E+c*I,a[3]=r*m+o*A+c*w,a[6]=r*h+o*S+c*P,a[1]=l*v+u*E+p*I,a[4]=l*m+u*A+p*w,a[7]=l*h+u*S+p*P,a[2]=d*v+f*E+g*I,a[5]=d*m+f*A+g*w,a[8]=d*h+f*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*o*l-n*a*u+n*o*c+s*a*l-s*r*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=u*r-o*l,d=o*c-u*a,f=l*a-r*c,g=t*p+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(s*l-u*n)*v,e[2]=(o*n-s*r)*v,e[3]=d*v,e[4]=(u*t-s*c)*v,e[5]=(s*a-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(r*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-s*l,s*c,-s*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Na.makeScale(e,t)),this}rotate(e){return this.premultiply(Na.makeRotation(-e)),this}translate(e,t){return this.premultiply(Na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new Oe;function uo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iu(){const i=ts("canvas");return i.style.display="block",i}const ho={};function si(i){i in ho||(ho[i]=!0,console.warn(i))}function su(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const po=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fo=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function au(){const i={enabled:!0,workingColorSpace:ni,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Ze&&(s.r=cn(s.r),s.g=cn(s.g),s.b=cn(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ze&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sn?Ji:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return si("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return si("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ni]:{primaries:e,whitePoint:n,transfer:Ji,toXYZ:po,fromXYZ:fo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:po,fromXYZ:fo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const qe=au();function cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class ru{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ri===void 0&&(ri=ts("canvas")),ri.width=e.width,ri.height=e.height;const s=ri.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ts("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=cn(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cn(t[n]/255)*255):t[n]=cn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ou=0;class Oa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Fa(s[r].image)):a.push(Fa(s[r]))}else a=Fa(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ru.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lu=0;const ka=new T;class Dt extends Un{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Pn,s=Pn,a=Qt,r=Dn,o=Yt,c=en,l=Dt.DEFAULT_ANISOTROPY,u=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Di(),this.name="",this.source=new Oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ka).x}get height(){return this.source.getSize(ka).y}get depth(){return this.source.getSize(ka).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kr)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null,Dt.DEFAULT_MAPPING=Kr,Dt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,s=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const c=e.elements,l=c[0],u=c[4],p=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,S=(f+1)/2,I=(h+1)/2,w=(u+d)/4,P=(p+v)/4,L=(g+m)/4;return A>S&&A>I?A<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(A),s=w/n,a=P/n):S>I?S<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(S),n=w/s,a=L/s):I<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(I),n=P/a,s=L/a),this.set(n,s,a,t),this}let E=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(p-v)/E,this.z=(d-u)/E,this.w=Math.acos((l+f+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cu extends Un{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const s={width:e,height:t,depth:n.depth},a=new Dt(s);this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Oa(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends cu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mo extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uu extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,$t):$t.fromBufferAttribute(a,r),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ns.copy(n.boundingBox)),ns.applyMatrix4(e.matrixWorld),this.union(ns)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),is.subVectors(this.max,Ui),oi.subVectors(e.a,Ui),li.subVectors(e.b,Ui),ci.subVectors(e.c,Ui),Mn.subVectors(li,oi),xn.subVectors(ci,li),Fn.subVectors(oi,ci);let t=[0,-Mn.z,Mn.y,0,-xn.z,xn.y,0,-Fn.z,Fn.y,Mn.z,0,-Mn.x,xn.z,0,-xn.x,Fn.z,0,-Fn.x,-Mn.y,Mn.x,0,-xn.y,xn.x,0,-Fn.y,Fn.x,0];return!Ba(t,oi,li,ci,is)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,oi,li,ci,is))?!1:(ss.crossVectors(Mn,xn),t=[ss.x,ss.y,ss.z],Ba(t,oi,li,ci,is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const un=[new T,new T,new T,new T,new T,new T,new T,new T],$t=new T,ns=new yn,oi=new T,li=new T,ci=new T,Mn=new T,xn=new T,Fn=new T,Ui=new T,is=new T,ss=new T,kn=new T;function Ba(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){kn.fromArray(i,a);const o=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),c=e.dot(kn),l=t.dot(kn),u=n.dot(kn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const du=new yn,Ni=new T,Ga=new T;class as{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):du.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ni,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(Ga)),this.expandByPoint(Ni.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const dn=new T,Ha=new T,rs=new T,An=new T,Va=new T,os=new T,za=new T;class ls{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ha.copy(e).add(t).multiplyScalar(.5),rs.copy(t).sub(e).normalize(),An.copy(this.origin).sub(Ha);const a=e.distanceTo(t)*.5,r=-this.direction.dot(rs),o=An.dot(this.direction),c=-An.dot(rs),l=An.lengthSq(),u=Math.abs(1-r*r);let p,d,f,g;if(u>0)if(p=r*c-o,d=r*o-c,g=a*u,p>=0)if(d>=-g)if(d<=g){const v=1/u;p*=v,d*=v,f=p*(p+r*d+2*o)+d*(r*p+d+2*c)+l}else d=a,p=Math.max(0,-(r*d+o)),f=-p*p+d*(d+2*c)+l;else d=-a,p=Math.max(0,-(r*d+o)),f=-p*p+d*(d+2*c)+l;else d<=-g?(p=Math.max(0,-(-r*a+o)),d=p>0?-a:Math.min(Math.max(-a,-c),a),f=-p*p+d*(d+2*c)+l):d<=g?(p=0,d=Math.min(Math.max(-a,-c),a),f=d*(d+2*c)+l):(p=Math.max(0,-(r*a+o)),d=p>0?a:Math.min(Math.max(-a,-c),a),f=-p*p+d*(d+2*c)+l);else d=r>0?-a:a,p=Math.max(0,-(r*d+o)),f=-p*p+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Ha).addScaledVector(rs,d),f}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),s=dn.dot(dn)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,c;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(a=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,s,a){Va.subVectors(t,e),os.subVectors(n,e),za.crossVectors(Va,os);let r=this.direction.dot(za),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;An.subVectors(this.origin,e);const c=o*this.direction.dot(os.crossVectors(An,os));if(c<0)return null;const l=o*this.direction.dot(Va.cross(An));if(l<0||c+l>r)return null;const u=-o*An.dot(za);return u<0?null:this.at(u/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,s,a,r,o,c,l,u,p,d,f,g,v,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l,u,p,d,f,g,v,m)}set(e,t,n,s,a,r,o,c,l,u,p,d,f,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=p,h[14]=d,h[3]=f,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ui.setFromMatrixColumn(e,0).length(),a=1/ui.setFromMatrixColumn(e,1).length(),r=1/ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const d=r*u,f=r*p,g=o*u,v=o*p;t[0]=c*u,t[4]=-c*p,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=r*c}else if(e.order==="YXZ"){const d=c*u,f=c*p,g=l*u,v=l*p;t[0]=d+v*o,t[4]=g*o-f,t[8]=r*l,t[1]=r*p,t[5]=r*u,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=r*c}else if(e.order==="ZXY"){const d=c*u,f=c*p,g=l*u,v=l*p;t[0]=d-v*o,t[4]=-r*p,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*u,t[9]=v-d*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const d=r*u,f=r*p,g=o*u,v=o*p;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*p,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const d=r*c,f=r*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-d*p,t[8]=g*p+f,t[1]=p,t[5]=r*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*p+g,t[10]=d-v*p}else if(e.order==="XZY"){const d=r*c,f=r*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-p,t[8]=l*u,t[1]=d*p+v,t[5]=r*u,t[9]=f*p-g,t[2]=g*p-f,t[6]=o*u,t[10]=v*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hu,e,pu)}lookAt(e,t,n){const s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),En.crossVectors(n,Ot),En.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),En.crossVectors(n,Ot)),En.normalize(),cs.crossVectors(Ot,En),s[0]=En.x,s[4]=cs.x,s[8]=Ot.x,s[1]=En.y,s[5]=cs.y,s[9]=Ot.y,s[2]=En.z,s[6]=cs.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],u=n[1],p=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],h=n[14],E=n[3],A=n[7],S=n[11],I=n[15],w=s[0],P=s[4],L=s[8],x=s[12],M=s[1],C=s[5],V=s[9],W=s[13],z=s[2],F=s[6],B=s[10],J=s[14],X=s[3],oe=s[7],he=s[11],xe=s[15];return a[0]=r*w+o*M+c*z+l*X,a[4]=r*P+o*C+c*F+l*oe,a[8]=r*L+o*V+c*B+l*he,a[12]=r*x+o*W+c*J+l*xe,a[1]=u*w+p*M+d*z+f*X,a[5]=u*P+p*C+d*F+f*oe,a[9]=u*L+p*V+d*B+f*he,a[13]=u*x+p*W+d*J+f*xe,a[2]=g*w+v*M+m*z+h*X,a[6]=g*P+v*C+m*F+h*oe,a[10]=g*L+v*V+m*B+h*he,a[14]=g*x+v*W+m*J+h*xe,a[3]=E*w+A*M+S*z+I*X,a[7]=E*P+A*C+S*F+I*oe,a[11]=E*L+A*V+S*B+I*he,a[15]=E*x+A*W+S*J+I*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],u=e[2],p=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+a*c*p-s*l*p-a*o*d+n*l*d+s*o*f-n*c*f)+v*(+t*c*f-t*l*d+a*r*d-s*r*f+s*l*u-a*c*u)+m*(+t*l*p-t*o*f-a*r*p+n*r*f+a*o*u-n*l*u)+h*(-s*o*u-t*c*p+t*o*d+s*r*p-n*r*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],h=e[15],E=p*m*l-v*d*l+v*c*f-o*m*f-p*c*h+o*d*h,A=g*d*l-u*m*l-g*c*f+r*m*f+u*c*h-r*d*h,S=u*v*l-g*p*l+g*o*f-r*v*f-u*o*h+r*p*h,I=g*p*c-u*v*c-g*o*d+r*v*d+u*o*m-r*p*m,w=t*E+n*A+s*S+a*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=E*P,e[1]=(v*d*a-p*m*a-v*s*f+n*m*f+p*s*h-n*d*h)*P,e[2]=(o*m*a-v*c*a+v*s*l-n*m*l-o*s*h+n*c*h)*P,e[3]=(p*c*a-o*d*a-p*s*l+n*d*l+o*s*f-n*c*f)*P,e[4]=A*P,e[5]=(u*m*a-g*d*a+g*s*f-t*m*f-u*s*h+t*d*h)*P,e[6]=(g*c*a-r*m*a-g*s*l+t*m*l+r*s*h-t*c*h)*P,e[7]=(r*d*a-u*c*a+u*s*l-t*d*l-r*s*f+t*c*f)*P,e[8]=S*P,e[9]=(g*p*a-u*v*a-g*n*f+t*v*f+u*n*h-t*p*h)*P,e[10]=(r*v*a-g*o*a+g*n*l-t*v*l-r*n*h+t*o*h)*P,e[11]=(u*o*a-r*p*a-u*n*l+t*p*l+r*n*f-t*o*f)*P,e[12]=I*P,e[13]=(u*v*s-g*p*s+g*n*d-t*v*d-u*n*m+t*p*m)*P,e[14]=(g*o*s-r*v*s-g*n*c+t*v*c+r*n*m-t*o*m)*P,e[15]=(r*p*s-u*o*s+u*n*c-t*p*c-r*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,c=e.z,l=a*r,u=a*o;return this.set(l*r+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*r,0,l*c-s*o,u*c+s*r,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,u=r+r,p=o+o,d=a*l,f=a*u,g=a*p,v=r*u,m=r*p,h=o*p,E=c*l,A=c*u,S=c*p,I=n.x,w=n.y,P=n.z;return s[0]=(1-(v+h))*I,s[1]=(f+S)*I,s[2]=(g-A)*I,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(d+h))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+A)*P,s[9]=(m-E)*P,s[10]=(1-(d+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=ui.set(s[0],s[1],s[2]).length();const r=ui.set(s[4],s[5],s[6]).length(),o=ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);const l=1/a,u=1/r,p=1/o;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=p,Kt.elements[9]*=p,Kt.elements[10]*=p,t.setFromRotationMatrix(Kt),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,s,a,r,o=tn,c=!1){const l=this.elements,u=2*a/(t-e),p=2*a/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,v;if(c)g=a/(r-a),v=r*a/(r-a);else if(o===tn)g=-(r+a)/(r-a),v=-2*r*a/(r-a);else if(o===Qi)g=-r/(r-a),v=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=tn,c=!1){const l=this.elements,u=2/(t-e),p=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,v;if(c)g=1/(r-a),v=r/(r-a);else if(o===tn)g=-2/(r-a),v=-(r+a)/(r-a);else if(o===Qi)g=-1/(r-a),v=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ui=new T,Kt=new ot,hu=new T(0,0,0),pu=new T(1,1,1),En=new T,cs=new T,Ot=new T,go=new ot,_o=new Nn;class nn{constructor(e=0,t=0,n=0,s=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],u=s[9],p=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Ge(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return go.makeRotationFromQuaternion(e),this.setFromRotationMatrix(go,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _o.setFromEuler(this),this.setFromQuaternion(_o,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class Wa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fu=0;const vo=new T,di=new Nn,hn=new ot,us=new T,Oi=new T,mu=new T,gu=new Nn,So=new T(1,0,0),yo=new T(0,1,0),Mo=new T(0,0,1),xo={type:"added"},_u={type:"removed"},hi={type:"childadded",child:null},Xa={type:"childremoved",child:null};class bt extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new T,t=new nn,n=new Nn,s=new T(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Oe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(So,e)}rotateY(e){return this.rotateOnAxis(yo,e)}rotateZ(e){return this.rotateOnAxis(Mo,e)}translateOnAxis(e,t){return vo.copy(e).applyQuaternion(this.quaternion),this.position.add(vo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(So,e)}translateY(e){return this.translateOnAxis(yo,e)}translateZ(e){return this.translateOnAxis(Mo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?us.copy(e):us.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Oi,us,this.up):hn.lookAt(us,Oi,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),di.setFromRotationMatrix(hn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xo),hi.child=e,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_u),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xo),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const p=c[l];a(e.shapes,p)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),p=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}bt.DEFAULT_UP=new T(0,1,0),bt.DEFAULT_MATRIX_AUTO_UPDATE=!0,bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new T,pn=new T,qa=new T,fn=new T,pi=new T,fi=new T,Ao=new T,Ya=new T,$a=new T,Ka=new T,ja=new Je,Za=new Je,Ja=new Je;class Zt{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jt.subVectors(e,t),s.cross(jt);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){jt.subVectors(s,t),pn.subVectors(n,t),qa.subVectors(e,t);const r=jt.dot(jt),o=jt.dot(pn),c=jt.dot(qa),l=pn.dot(pn),u=pn.dot(qa),p=r*l-o*o;if(p===0)return a.set(0,0,0),null;const d=1/p,f=(l*c-o*u)*d,g=(r*u-o*c)*d;return a.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,s,a,r,o,c){return this.getBarycoord(e,t,n,s,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,fn.x),c.addScaledVector(r,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(e,t,n,s,a,r){return ja.setScalar(0),Za.setScalar(0),Ja.setScalar(0),ja.fromBufferAttribute(e,t),Za.fromBufferAttribute(e,n),Ja.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(ja,a.x),r.addScaledVector(Za,a.y),r.addScaledVector(Ja,a.z),r}static isFrontFacing(e,t,n,s){return jt.subVectors(n,t),pn.subVectors(e,t),jt.cross(pn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),jt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;pi.subVectors(s,n),fi.subVectors(a,n),Ya.subVectors(e,n);const c=pi.dot(Ya),l=fi.dot(Ya);if(c<=0&&l<=0)return t.copy(n);$a.subVectors(e,s);const u=pi.dot($a),p=fi.dot($a);if(u>=0&&p<=u)return t.copy(s);const d=c*p-u*l;if(d<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(n).addScaledVector(pi,r);Ka.subVectors(e,a);const f=pi.dot(Ka),g=fi.dot(Ka);if(g>=0&&f<=g)return t.copy(a);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(fi,o);const m=u*g-f*p;if(m<=0&&p-u>=0&&f-g>=0)return Ao.subVectors(a,s),o=(p-u)/(p-u+(f-g)),t.copy(s).addScaledVector(Ao,o);const h=1/(m+v+d);return r=v*h,o=d*h,t.copy(n).addScaledVector(pi,r).addScaledVector(fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},ds={h:0,s:0,l:0};function Qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=tu(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Qa(r,a,e+1/3),this.g=Qa(r,a,e),this.b=Qa(r,a,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Eo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cn(e.r),this.g=cn(e.g),this.b=cn(e.b),this}copyLinearToSRGB(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return qe.workingToColorSpace(wt.copy(this),e),Math.round(Ge(wt.r*255,0,255))*65536+Math.round(Ge(wt.g*255,0,255))*256+Math.round(Ge(wt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(wt.copy(this),t);const n=wt.r,s=wt.g,a=wt.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let c,l;const u=(o+r)/2;if(o===r)c=0,l=0;else{const p=r-o;switch(l=u<=.5?p/(r+o):p/(2-r-o),r){case n:c=(s-a)/p+(s<a?6:0);break;case s:c=(a-n)/p+2;break;case a:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Nt){qe.workingToColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,s=wt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(ds);const n=La(bn.h,ds.h,t),s=La(bn.s,ds.s,t),a=La(bn.l,ds.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new ze;ze.NAMES=Eo;let vu=0;class mi extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Jn,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gs,this.blendDst=Hs,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Qn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gs&&(n.blendSrc=this.blendSrc),this.blendDst!==Hs&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fi extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new T,hs=new Te;let Su=0;class sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Su++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oo,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),a=Pt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oo&&(e.usage=this.usage),e}}class bo extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wo extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yu=0;const zt=new ot,er=new bt,gi=new T,Ft=new yn,ki=new yn,xt=new T;class Tt extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uo(e)?wo:bo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Oe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return er.lookAt(e),er.updateMatrix(),this.applyMatrix4(er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new st(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Ft.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];ki.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Ft.min,ki.min),Ft.expandByPoint(xt),xt.addVectors(Ft.max,ki.max),Ft.expandByPoint(xt)):(Ft.expandByPoint(ki.min),Ft.expandByPoint(ki.max))}Ft.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)xt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(xt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)xt.fromBufferAttribute(o,l),c&&(gi.fromBufferAttribute(e,l),xt.add(gi)),s=Math.max(s,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new T,c[L]=new T;const l=new T,u=new T,p=new T,d=new Te,f=new Te,g=new Te,v=new T,m=new T;function h(L,x,M){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,x),p.fromBufferAttribute(n,M),d.fromBufferAttribute(a,L),f.fromBufferAttribute(a,x),g.fromBufferAttribute(a,M),u.sub(l),p.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(C),m.copy(p).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),o[L].add(v),o[x].add(v),o[M].add(v),c[L].add(m),c[x].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,x=E.length;L<x;++L){const M=E[L],C=M.start,V=M.count;for(let W=C,z=C+V;W<z;W+=3)h(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const A=new T,S=new T,I=new T,w=new T;function P(L){I.fromBufferAttribute(s,L),w.copy(I);const x=o[L];A.copy(x),A.sub(I.multiplyScalar(I.dot(x))).normalize(),S.crossVectors(w,x);const C=S.dot(c[L])<0?-1:1;r.setXYZW(L,A.x,A.y,A.z,C)}for(let L=0,x=E.length;L<x;++L){const M=E[L],C=M.start,V=M.count;for(let W=C,z=C+V;W<z;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new T,a=new T,r=new T,o=new T,c=new T,l=new T,u=new T,p=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),u.subVectors(r,a),p.subVectors(s,a),u.cross(p),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,a),p.subVectors(s,a),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,p=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let h=0;h<u;h++)d[g++]=l[f++]}return new sn(d,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,p=l.length;u<p;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let p=0,d=l.length;p<d;p++){const f=l[p];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],p=a[l];for(let d=0,f=p.length;d<f;d++)u.push(p[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,u=r.length;l<u;l++){const p=r[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const To=new ot,Bn=new ls,ps=new as,Co=new T,fs=new T,ms=new T,gs=new T,tr=new T,_s=new T,Io=new T,vs=new T;class kt extends bt{constructor(e=new Tt,t=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){_s.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],p=a[c];u!==0&&(tr.fromBufferAttribute(p,e),r?_s.addScaledVector(tr,u):_s.addScaledVector(tr.sub(t),u))}t.add(_s)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(a),Bn.copy(e.ray).recast(e.near),!(ps.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(ps,Co)===null||Bn.origin.distanceToSquared(Co)>(e.far-e.near)**2))&&(To.copy(a).invert(),Bn.copy(e.ray).applyMatrix4(To),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,p=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=r[m.materialIndex],E=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=E,I=A;S<I;S+=3){const w=o.getX(S),P=o.getX(S+1),L=o.getX(S+2);s=Ss(this,h,e,n,l,u,p,w,P,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,h=v;m<h;m+=3){const E=o.getX(m),A=o.getX(m+1),S=o.getX(m+2);s=Ss(this,r,e,n,l,u,p,E,A,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=r[m.materialIndex],E=Math.max(m.start,f.start),A=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=E,I=A;S<I;S+=3){const w=S,P=S+1,L=S+2;s=Ss(this,h,e,n,l,u,p,w,P,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,h=v;m<h;m+=3){const E=m,A=m+1,S=m+2;s=Ss(this,r,e,n,l,u,p,E,A,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Mu(i,e,t,n,s,a,r,o){let c;if(e.side===Rt?c=n.intersectTriangle(r,a,s,!0,o):c=n.intersectTriangle(s,a,r,e.side===gn,o),c===null)return null;vs.copy(o),vs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(vs);return l<t.near||l>t.far?null:{distance:l,point:vs.clone(),object:i}}function Ss(i,e,t,n,s,a,r,o,c,l){i.getVertexPosition(o,fs),i.getVertexPosition(c,ms),i.getVertexPosition(l,gs);const u=Mu(i,e,t,n,fs,ms,gs,Io);if(u){const p=new T;Zt.getBarycoord(Io,fs,ms,gs,p),s&&(u.uv=Zt.getInterpolatedAttribute(s,o,c,l,p,new Te)),a&&(u.uv1=Zt.getInterpolatedAttribute(a,o,c,l,p,new Te)),r&&(u.normal=Zt.getInterpolatedAttribute(r,o,c,l,p,new T),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new T,materialIndex:0};Zt.getNormal(fs,ms,gs,d.normal),u.face=d,u.barycoord=p}return u}class _i extends Tt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],u=[],p=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(p,2));function g(v,m,h,E,A,S,I,w,P,L,x){const M=S/P,C=I/L,V=S/2,W=I/2,z=w/2,F=P+1,B=L+1;let J=0,X=0;const oe=new T;for(let he=0;he<B;he++){const xe=he*C-W;for(let Fe=0;Fe<F;Fe++){const ct=Fe*M-V;oe[v]=ct*E,oe[m]=xe*A,oe[h]=z,l.push(oe.x,oe.y,oe.z),oe[v]=0,oe[m]=0,oe[h]=w>0?1:-1,u.push(oe.x,oe.y,oe.z),p.push(Fe/P),p.push(1-he/L),J+=1}}for(let he=0;he<L;he++)for(let xe=0;xe<P;xe++){const Fe=d+xe+F*he,ct=d+xe+F*(he+1),nt=d+(xe+1)+F*(he+1),$=d+(xe+1)+F*he;c.push(Fe,ct,$),c.push(ct,nt,$),X+=6}o.addGroup(f,X,x),f+=X,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=vi(i[t]);for(const s in n)e[s]=n[s]}return e}function xu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ro(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Au={clone:vi,merge:Ct};var Eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eu,this.fragmentShader=bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=xu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Po extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new T,Do=new Te,Lo=new Te;class Bt extends Po{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,Do,Lo),t.subVectors(Lo,Do)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(es*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,t-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,yi=1;class wu extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bt(Si,yi,e,t);s.layers=this.layers,this.add(s);const a=new Bt(Si,yi,e,t);a.layers=this.layers,this.add(a);const r=new Bt(Si,yi,e,t);r.layers=this.layers,this.add(r);const o=new Bt(Si,yi,e,t);o.layers=this.layers,this.add(o);const c=new Bt(Si,yi,e,t);c.layers=this.layers,this.add(c);const l=new Bt(Si,yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,c]=t;for(const l of t)this.remove(l);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(p,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Uo extends Dt{constructor(e=[],t=ei,n,s,a,r,o,c,l,u){super(e,t,n,s,a,r,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tu extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Uo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _i(5,5,5),a=new wn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:_n});a.uniforms.tEquirect.value=t;const r=new kt(s,a),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=Qt),new wu(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}class Gn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cu={type:"move"};class nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),h=this._getHandJoint(l,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=u.position.distanceTo(p.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ir{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new ir(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Iu extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sr=new T,Ru=new T,Pu=new Oe;class Cn{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=sr.subVectors(n,t).cross(Ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pu.getNormalMatrix(e),s=this.coplanarPoint(sr).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new as,Du=new Te(.5,.5),ys=new T;class ar{constructor(e=new Cn,t=new Cn,n=new Cn,s=new Cn,a=new Cn,r=new Cn){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn,n=!1){const s=this.planes,a=e.elements,r=a[0],o=a[1],c=a[2],l=a[3],u=a[4],p=a[5],d=a[6],f=a[7],g=a[8],v=a[9],m=a[10],h=a[11],E=a[12],A=a[13],S=a[14],I=a[15];if(s[0].setComponents(l-r,f-u,h-g,I-E).normalize(),s[1].setComponents(l+r,f+u,h+g,I+E).normalize(),s[2].setComponents(l+o,f+p,h+v,I+A).normalize(),s[3].setComponents(l-o,f-p,h-v,I-A).normalize(),n)s[4].setComponents(c,d,m,S).normalize(),s[5].setComponents(l-c,f-d,h-m,I-S).normalize();else if(s[4].setComponents(l-c,f-d,h-m,I-S).normalize(),t===tn)s[5].setComponents(l+c,f+d,h+m,I+S).normalize();else if(t===Qi)s[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){Hn.center.set(0,0,0);const t=Du.distanceTo(e.center);return Hn.radius=.7071067811865476+t,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ys.x=s.normal.x>0?e.max.x:e.min.x,ys.y=s.normal.y>0?e.max.y:e.min.y,ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ms extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xs=new T,As=new T,No=new ot,Bi=new ls,Es=new as,rr=new T,Oo=new T;class or extends bt{constructor(e=new Tt,t=new Ms){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)xs.fromBufferAttribute(t,s-1),As.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xs.distanceTo(As);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(s),Es.radius+=a,e.ray.intersectsSphere(Es)===!1)return;No.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(No);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let v=f,m=g-1;v<m;v+=l){const h=u.getX(v),E=u.getX(v+1),A=bs(this,e,Bi,c,h,E,v);A&&t.push(A)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),h=bs(this,e,Bi,c,v,m,g-1);h&&t.push(h)}}else{const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let v=f,m=g-1;v<m;v+=l){const h=bs(this,e,Bi,c,v,v+1,v);h&&t.push(h)}if(this.isLineLoop){const v=bs(this,e,Bi,c,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function bs(i,e,t,n,s,a,r){const o=i.geometry.attributes.position;if(xs.fromBufferAttribute(o,s),As.fromBufferAttribute(o,a),t.distanceSqToSegment(xs,As,rr,Oo)>n)return;rr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(rr);if(!(l<e.near||l>e.far))return{distance:l,point:Oo.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Fo=new T,ko=new T;class Lu extends or{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)Fo.fromBufferAttribute(t,s),ko.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fo.distanceTo(ko);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bo extends Dt{constructor(e,t,n=Ln,s,a,r,o=qt,c=qt,l,u=Ri,p=1){if(u!==Ri&&u!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:p};super(d,s,a,r,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lr extends Tt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const u=[],p=[],d=[],f=[];let g=0;const v=[],m=n/2;let h=0;E(),r===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new st(p,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function E(){const S=new T,I=new T;let w=0;const P=(t-e)/n;for(let L=0;L<=a;L++){const x=[],M=L/a,C=M*(t-e)+e;for(let V=0;V<=s;V++){const W=V/s,z=W*c+o,F=Math.sin(z),B=Math.cos(z);I.x=C*F,I.y=-M*n+m,I.z=C*B,p.push(I.x,I.y,I.z),S.set(F,P,B).normalize(),d.push(S.x,S.y,S.z),f.push(W,1-M),x.push(g++)}v.push(x)}for(let L=0;L<s;L++)for(let x=0;x<a;x++){const M=v[x][L],C=v[x+1][L],V=v[x+1][L+1],W=v[x][L+1];(e>0||x!==0)&&(u.push(M,C,W),w+=3),(t>0||x!==a-1)&&(u.push(C,V,W),w+=3)}l.addGroup(h,w,0),h+=w}function A(S){const I=g,w=new Te,P=new T;let L=0;const x=S===!0?e:t,M=S===!0?1:-1;for(let V=1;V<=s;V++)p.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const C=g;for(let V=0;V<=s;V++){const z=V/s*c+o,F=Math.cos(z),B=Math.sin(z);P.x=x*B,P.y=m*M,P.z=x*F,p.push(P.x,P.y,P.z),d.push(0,M,0),w.x=F*.5+.5,w.y=B*.5*M+.5,f.push(w.x,w.y),g++}for(let V=0;V<s;V++){const W=I+V,z=C+V;S===!0?u.push(z,z+1,W):u.push(z+1,z,W),L+=3}l.addGroup(h,L,S===!0?1:2),h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cr extends lr{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new cr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ur extends Tt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],r=[];o(s),l(n),u(),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(a.slice(),3)),this.setAttribute("uv",new st(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const A=new T,S=new T,I=new T;for(let w=0;w<t.length;w+=3)f(t[w+0],A),f(t[w+1],S),f(t[w+2],I),c(A,S,I,E)}function c(E,A,S,I){const w=I+1,P=[];for(let L=0;L<=w;L++){P[L]=[];const x=E.clone().lerp(S,L/w),M=A.clone().lerp(S,L/w),C=w-L;for(let V=0;V<=C;V++)V===0&&L===w?P[L][V]=x:P[L][V]=x.clone().lerp(M,V/C)}for(let L=0;L<w;L++)for(let x=0;x<2*(w-L)-1;x++){const M=Math.floor(x/2);x%2===0?(d(P[L][M+1]),d(P[L+1][M]),d(P[L][M])):(d(P[L][M+1]),d(P[L+1][M+1]),d(P[L+1][M]))}}function l(E){const A=new T;for(let S=0;S<a.length;S+=3)A.x=a[S+0],A.y=a[S+1],A.z=a[S+2],A.normalize().multiplyScalar(E),a[S+0]=A.x,a[S+1]=A.y,a[S+2]=A.z}function u(){const E=new T;for(let A=0;A<a.length;A+=3){E.x=a[A+0],E.y=a[A+1],E.z=a[A+2];const S=m(E)/2/Math.PI+.5,I=h(E)/Math.PI+.5;r.push(S,1-I)}g(),p()}function p(){for(let E=0;E<r.length;E+=6){const A=r[E+0],S=r[E+2],I=r[E+4],w=Math.max(A,S,I),P=Math.min(A,S,I);w>.9&&P<.1&&(A<.2&&(r[E+0]+=1),S<.2&&(r[E+2]+=1),I<.2&&(r[E+4]+=1))}}function d(E){a.push(E.x,E.y,E.z)}function f(E,A){const S=E*3;A.x=e[S+0],A.y=e[S+1],A.z=e[S+2]}function g(){const E=new T,A=new T,S=new T,I=new T,w=new Te,P=new Te,L=new Te;for(let x=0,M=0;x<a.length;x+=9,M+=6){E.set(a[x+0],a[x+1],a[x+2]),A.set(a[x+3],a[x+4],a[x+5]),S.set(a[x+6],a[x+7],a[x+8]),w.set(r[M+0],r[M+1]),P.set(r[M+2],r[M+3]),L.set(r[M+4],r[M+5]),I.copy(E).add(A).add(S).divideScalar(3);const C=m(I);v(w,M+0,E,C),v(P,M+2,A,C),v(L,M+4,S,C)}}function v(E,A,S,I){I<0&&E.x===1&&(r[A]=E.x-1),S.x===0&&S.z===0&&(r[A]=I/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function h(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.vertices,e.indices,e.radius,e.details)}}class Uu{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const a=n.length;let r;t?r=t:r=e*n[a-1];let o=0,c=a-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-r,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(a-1);const u=n[s],d=n[s+1]-u,f=(r-u)/d;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),c=t||(r.isVector2?new Te:new T);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new T,s=[],a=[],r=[],o=new T,c=new ot;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new T)}a[0]=new T,r[0]=new T;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ge(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(c.makeRotationAxis(o,g))}r[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(Ge(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Nu(i,e){const t=1-i;return t*t*e}function Ou(i,e){return 2*(1-i)*i*e}function Fu(i,e){return i*i*e}function dr(i,e,t,n){return Nu(i,e)+Ou(i,t)+Fu(i,n)}class ku extends Uu{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){const n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(dr(e,s.x,a.x,r.x),dr(e,s.y,a.y,r.y),dr(e,s.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hr extends ur{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hr(e.radius,e.detail)}}class ws extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,p=e/o,d=t/c,f=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const E=h*d-r;for(let A=0;A<l;A++){const S=A*p-a;g.push(S,-E,0),v.push(0,0,1),m.push(A/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let E=0;E<o;E++){const A=E+l*h,S=E+l*(h+1),I=E+1+l*(h+1),w=E+1+l*h;f.push(A,S,w),f.push(S,I,w)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.widthSegments,e.heightSegments)}}class pr extends Tt{constructor(e=.5,t=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let p=e;const d=(t-e)/s,f=new T,g=new Te;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const h=a+m/n*r;f.x=p*Math.cos(h),f.y=p*Math.sin(h),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}p+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let h=0;h<n;h++){const E=h+m,A=E,S=E+n+1,I=E+n+2,w=E+1;o.push(A,S,w),o.push(S,I,w)}}this.setIndex(o),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class fr extends Tt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const u=[],p=new T,d=new T,f=[],g=[],v=[],m=[];for(let h=0;h<=n;h++){const E=[],A=h/n;let S=0;h===0&&r===0?S=.5/t:h===n&&c===Math.PI&&(S=-.5/t);for(let I=0;I<=t;I++){const w=I/t;p.x=-e*Math.cos(s+w*a)*Math.sin(r+A*o),p.y=e*Math.cos(r+A*o),p.z=e*Math.sin(s+w*a)*Math.sin(r+A*o),g.push(p.x,p.y,p.z),d.copy(p).normalize(),v.push(d.x,d.y,d.z),m.push(w+S,1-A),E.push(l++)}u.push(E)}for(let h=0;h<n;h++)for(let E=0;E<t;E++){const A=u[h][E+1],S=u[h][E],I=u[h+1][E],w=u[h+1][E+1];(h!==0||r>0)&&f.push(A,S,w),(h!==n-1||c<Math.PI)&&f.push(S,I,w)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mr extends Tt{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const r=[],o=[],c=[],l=[],u=new T,p=new T,d=new T;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*a,m=f/n*Math.PI*2;p.x=(e+t*Math.cos(m))*Math.cos(v),p.y=(e+t*Math.cos(m))*Math.sin(v),p.z=t*Math.sin(m),o.push(p.x,p.y,p.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(p,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,h=(s+1)*(f-1)+g,E=(s+1)*f+g;r.push(v,m,E),r.push(m,h,E)}this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Bu extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gu extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hu extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gr extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Vu extends gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _r=new ot,Go=new T,Ho=new T;class zu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Go.setFromMatrixPosition(e.matrixWorld),t.position.copy(Go),Ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ho),t.updateMatrixWorld(),_r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_r,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vo=new ot,Gi=new T,vr=new T;class Wu extends zu{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Gi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gi),vr.copy(n.position),vr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vr),n.updateMatrixWorld(),s.makeTranslation(-Gi.x,-Gi.y,-Gi.z),Vo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo,n.coordinateSystem,n.reversedDepth)}}class Xu extends gr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qu extends Po{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yu extends gr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $u extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zo=new ot;class Ku{constructor(e,t,n=0,s=1/0){this.ray=new ls(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zo),this}intersectObject(e,t=!0,n=[]){return Sr(e,this,n,t),n.sort(Wo),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)Sr(e[s],this,n,t);return n.sort(Wo),n}}function Wo(i,e){return i.distance-e.distance}function Sr(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)Sr(a[r],e,t,!0)}}class Xo{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ju extends Lu{constructor(e=10,t=10,n=4473924,s=8947848){n=new ze(n),s=new ze(s);const a=t/2,r=e/t,o=e/2,c=[],l=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=r){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const v=d===a?n:s;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}const u=new Tt;u.setAttribute("position",new st(c,3)),u.setAttribute("color",new st(l,3));const p=new Ms({vertexColors:!0,toneMapped:!1});super(u,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Zu extends Un{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function qo(i,e,t,n){const s=Ju(n);switch(t){case Qr:return i*e;case to:return i*e/s.components*s.byteLength;case ia:return i*e/s.components*s.byteLength;case no:return i*e*2/s.components*s.byteLength;case sa:return i*e*2/s.components*s.byteLength;case eo:return i*e*3/s.components*s.byteLength;case Yt:return i*e*4/s.components*s.byteLength;case aa:return i*e*4/s.components*s.byteLength;case Yi:case $i:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ki:case ji:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:case ca:return Math.max(i,16)*Math.max(e,8)/4;case ra:case la:return Math.max(i,8)*Math.max(e,8)/2;case ua:case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zi:case Ta:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*16;case io:case Ia:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ra:case Pa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ju(i){switch(i){case en:case jr:return{byteLength:1,components:1};case Ti:case Zr:case Ci:return{byteLength:2,components:1};case ta:case na:return{byteLength:2,components:4};case Ln:case ea:case ln:return{byteLength:4,components:1};case Jr:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bs}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bs);function Yo(){let i=null,e=!1,t=null,n=null;function s(a,r){t(a,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Qu(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,p=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const u=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,u);else{p.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<p.length;f++){const g=p[d],v=p[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,p[d]=v)}p.length=d+1;for(let f=0,g=p.length;f<g;f++){const v=p[f];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ad=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ed=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$d=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,th=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ih=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ah=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ch=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ph=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_h=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ah=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Th=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ch=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ih=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ph=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Oh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$h=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Be={alphahash_fragment:ed,alphahash_pars_fragment:td,alphamap_fragment:nd,alphamap_pars_fragment:id,alphatest_fragment:sd,alphatest_pars_fragment:ad,aomap_fragment:rd,aomap_pars_fragment:od,batching_pars_vertex:ld,batching_vertex:cd,begin_vertex:ud,beginnormal_vertex:dd,bsdfs:hd,iridescence_fragment:pd,bumpmap_pars_fragment:fd,clipping_planes_fragment:md,clipping_planes_pars_fragment:gd,clipping_planes_pars_vertex:_d,clipping_planes_vertex:vd,color_fragment:Sd,color_pars_fragment:yd,color_pars_vertex:Md,color_vertex:xd,common:Ad,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:bd,displacementmap_pars_vertex:wd,displacementmap_vertex:Td,emissivemap_fragment:Cd,emissivemap_pars_fragment:Id,colorspace_fragment:Rd,colorspace_pars_fragment:Pd,envmap_fragment:Dd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Ud,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:qd,envmap_vertex:Od,fog_vertex:Fd,fog_pars_vertex:kd,fog_fragment:Bd,fog_pars_fragment:Gd,gradientmap_pars_fragment:Hd,lightmap_pars_fragment:Vd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:Wd,lights_pars_begin:Xd,lights_toon_fragment:Yd,lights_toon_pars_fragment:$d,lights_phong_fragment:Kd,lights_phong_pars_fragment:jd,lights_physical_fragment:Zd,lights_physical_pars_fragment:Jd,lights_fragment_begin:Qd,lights_fragment_maps:eh,lights_fragment_end:th,logdepthbuf_fragment:nh,logdepthbuf_pars_fragment:ih,logdepthbuf_pars_vertex:sh,logdepthbuf_vertex:ah,map_fragment:rh,map_pars_fragment:oh,map_particle_fragment:lh,map_particle_pars_fragment:ch,metalnessmap_fragment:uh,metalnessmap_pars_fragment:dh,morphinstance_vertex:hh,morphcolor_vertex:ph,morphnormal_vertex:fh,morphtarget_pars_vertex:mh,morphtarget_vertex:gh,normal_fragment_begin:_h,normal_fragment_maps:vh,normal_pars_fragment:Sh,normal_pars_vertex:yh,normal_vertex:Mh,normalmap_pars_fragment:xh,clearcoat_normal_fragment_begin:Ah,clearcoat_normal_fragment_maps:Eh,clearcoat_pars_fragment:bh,iridescence_pars_fragment:wh,opaque_fragment:Th,packing:Ch,premultiplied_alpha_fragment:Ih,project_vertex:Rh,dithering_fragment:Ph,dithering_pars_fragment:Dh,roughnessmap_fragment:Lh,roughnessmap_pars_fragment:Uh,shadowmap_pars_fragment:Nh,shadowmap_pars_vertex:Oh,shadowmap_vertex:Fh,shadowmask_pars_fragment:kh,skinbase_vertex:Bh,skinning_pars_vertex:Gh,skinning_vertex:Hh,skinnormal_vertex:Vh,specularmap_fragment:zh,specularmap_pars_fragment:Wh,tonemapping_fragment:Xh,tonemapping_pars_fragment:qh,transmission_fragment:Yh,transmission_pars_fragment:$h,uv_pars_fragment:Kh,uv_pars_vertex:jh,uv_vertex:Zh,worldpos_vertex:Jh,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},re={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},an={basic:{uniforms:Ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ct([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ct([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ct([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ct([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ct([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ct([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ct([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ct([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Ct([re.common,re.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Ct([re.lights,re.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};an.physical={uniforms:Ct([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ts={r:0,b:0,g:0},Vn=new nn,Qh=new ot;function ep(i,e,t,n,s,a,r){const o=new ze(0);let c=a===!0?0:1,l,u,p=null,d=0,f=null;function g(A){let S=A.isScene===!0?A.background:null;return S&&S.isTexture&&(S=(A.backgroundBlurriness>0?t:e).get(S)),S}function v(A){let S=!1;const I=g(A);I===null?h(o,c):I&&I.isColor&&(h(I,1),S=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,S){const I=g(S);I&&(I.isCubeTexture||I.mapping===Xi)?(u===void 0&&(u=new kt(new _i(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:vi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vn.copy(S.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qh.makeRotationFromEuler(Vn)),u.material.toneMapped=qe.getTransfer(I.colorSpace)!==Ze,(p!==I||d!==I.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,p=I,d=I.version,f=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new kt(new ws(2,2),new wn({name:"BackgroundMaterial",uniforms:vi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=qe.getTransfer(I.colorSpace)!==Ze,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(p!==I||d!==I.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,p=I,d=I.version,f=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function h(A,S){A.getRGB(Ts,Ro(i)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,S,r)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,S=1){o.set(A),c=S,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,h(o,c)},render:v,addToRenderList:m,dispose:E}}function tp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let a=s,r=!1;function o(M,C,V,W,z){let F=!1;const B=p(W,V,C);a!==B&&(a=B,l(a.object)),F=f(M,W,V,z),F&&g(M,W,V,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(F||r)&&(r=!1,S(M,C,V,W),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function p(M,C,V){const W=V.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let F=z[C.id];F===void 0&&(F={},z[C.id]=F);let B=F[W];return B===void 0&&(B=d(c()),F[W]=B),B}function d(M){const C=[],V=[],W=[];for(let z=0;z<t;z++)C[z]=0,V[z]=0,W[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:W,object:M,attributes:{},index:null}}function f(M,C,V,W){const z=a.attributes,F=C.attributes;let B=0;const J=V.getAttributes();for(const X in J)if(J[X].location>=0){const he=z[X];let xe=F[X];if(xe===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),he===void 0||he.attribute!==xe||xe&&he.data!==xe.data)return!0;B++}return a.attributesNum!==B||a.index!==W}function g(M,C,V,W){const z={},F=C.attributes;let B=0;const J=V.getAttributes();for(const X in J)if(J[X].location>=0){let he=F[X];he===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const xe={};xe.attribute=he,he&&he.data&&(xe.data=he.data),z[X]=xe,B++}a.attributes=z,a.attributesNum=B,a.index=W}function v(){const M=a.newAttributes;for(let C=0,V=M.length;C<V;C++)M[C]=0}function m(M){h(M,0)}function h(M,C){const V=a.newAttributes,W=a.enabledAttributes,z=a.attributeDivisors;V[M]=1,W[M]===0&&(i.enableVertexAttribArray(M),W[M]=1),z[M]!==C&&(i.vertexAttribDivisor(M,C),z[M]=C)}function E(){const M=a.newAttributes,C=a.enabledAttributes;for(let V=0,W=C.length;V<W;V++)C[V]!==M[V]&&(i.disableVertexAttribArray(V),C[V]=0)}function A(M,C,V,W,z,F,B){B===!0?i.vertexAttribIPointer(M,C,V,z,F):i.vertexAttribPointer(M,C,V,W,z,F)}function S(M,C,V,W){v();const z=W.attributes,F=V.getAttributes(),B=C.defaultAttributeValues;for(const J in F){const X=F[J];if(X.location>=0){let oe=z[J];if(oe===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const he=oe.normalized,xe=oe.itemSize,Fe=e.get(oe);if(Fe===void 0)continue;const ct=Fe.buffer,nt=Fe.type,$=Fe.bytesPerElement,le=nt===i.INT||nt===i.UNSIGNED_INT||oe.gpuType===ea;if(oe.isInterleavedBufferAttribute){const se=oe.data,Ie=se.stride,Re=oe.offset;if(se.isInstancedInterleavedBuffer){for(let Ue=0;Ue<X.locationSize;Ue++)h(X.location+Ue,se.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ue=0;Ue<X.locationSize;Ue++)m(X.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let Ue=0;Ue<X.locationSize;Ue++)A(X.location+Ue,xe/X.locationSize,nt,he,Ie*$,(Re+xe/X.locationSize*Ue)*$,le)}else{if(oe.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)h(X.location+se,oe.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let se=0;se<X.locationSize;se++)m(X.location+se);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let se=0;se<X.locationSize;se++)A(X.location+se,xe/X.locationSize,nt,he,xe*$,xe/X.locationSize*se*$,le)}}else if(B!==void 0){const he=B[J];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(X.location,he);break;case 3:i.vertexAttrib3fv(X.location,he);break;case 4:i.vertexAttrib4fv(X.location,he);break;default:i.vertexAttrib1fv(X.location,he)}}}}E()}function I(){L();for(const M in n){const C=n[M];for(const V in C){const W=C[V];for(const z in W)u(W[z].object),delete W[z];delete C[V]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const V in C){const W=C[V];for(const z in W)u(W[z].object),delete W[z];delete C[V]}delete n[M.id]}function P(M){for(const C in n){const V=n[C];if(V[M.id]===void 0)continue;const W=V[M.id];for(const z in W)u(W[z].object),delete W[z];delete V[M.id]}}function L(){x(),r=!0,a!==s&&(a=s,l(a.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:x,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function np(i,e,t){let n;function s(l){n=l}function a(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function r(l,u,p){p!==0&&(i.drawArraysInstanced(n,l,u,p),t.update(u,n,p))}function o(l,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,p);let f=0;for(let g=0;g<p;g++)f+=u[g];t.update(f,n,1)}function c(l,u,p,d){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,p);let g=0;for(let v=0;v<p;v++)g+=u[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ip(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(P){return!(P!==Yt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const L=P===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==en&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ln&&!L)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const p=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:I,maxSamples:w}}function sp(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new Cn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const f=p.length!==0||d||n!==0||s;return s=d,n=p.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,f){const g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,h=i.get(p);if(!s||g===null||g.length===0||a&&!m)a?u(null):l();else{const E=a?0:n,A=E*4;let S=h.clippingState||null;c.value=S,S=u(g,d,A,f);for(let I=0;I!==A;++I)S[I]=t[I];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,d,f,g){const v=p!==null?p.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const h=f+v*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let A=0,S=f;A!==v;++A,S+=4)r.copy(p[A]).applyMatrix4(E,o),r.normal.toArray(m,S),m[S+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ap(i){let e=new WeakMap;function t(r,o){return o===Ks?r.mapping=ei:o===js&&(r.mapping=ti),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Ks||o===js)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Tu(c.height);return l.fromEquirectangularTexture(i,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Mi=4,$o=[.125,.215,.35,.446,.526,.582],zn=20,yr=new qu,Ko=new ze;let Mr=null,xr=0,Ar=0,Er=!1;const Wn=(1+Math.sqrt(5))/2,xi=1/Wn,jo=[new T(-Wn,xi,0),new T(Wn,xi,0),new T(-xi,0,Wn),new T(xi,0,Wn),new T(0,Wn,-xi),new T(0,Wn,xi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],rp=new T;class Zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,a={}){const{size:r=256,position:o=rp}=a;Mr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Ar=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mr,xr,Ar),this._renderer.xr.enabled=Er,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ei||e.mapping===ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Ar=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ci,format:Yt,colorSpace:ni,depthBuffer:!1},s=Jo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jo(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=op(a)),this._blurMaterial=lp(a,e,t)}return s}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,n,s,a){const c=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,f=p.toneMapping;p.getClearColor(Ko),p.toneMapping=vn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null));const v=new Fi({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),m=new kt(new _i,v);let h=!1;const E=e.background;E?E.isColor&&(v.color.copy(E),e.background=null,h=!0):(v.color.copy(Ko),h=!0);for(let A=0;A<6;A++){const S=A%3;S===0?(c.up.set(0,l[A],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+u[A],a.y,a.z)):S===1?(c.up.set(0,0,l[A]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+u[A],a.z)):(c.up.set(0,l[A],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+u[A]));const I=this._cubeSize;Cs(s,S*I,A>2?I:0,I,I),p.setRenderTarget(s),h&&p.render(m,c),p.render(e,c)}m.geometry.dispose(),m.material.dispose(),p.toneMapping=f,p.autoClear=d,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ei||e.mapping===ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qo());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new kt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;Cs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,yr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=jo[(s-a-1)%jo.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",a),this._halfBlur(r,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new kt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*zn-1),v=a/g,m=isFinite(a)?1+Math.floor(u*v):zn;m>zn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zn}`);const h=[];let E=0;for(let P=0;P<zn;++P){const L=P/v,x=Math.exp(-L*L/2);h.push(x),P===0?E+=x:P<m&&(E+=2*x)}for(let P=0;P<h.length;P++)h[P]=h[P]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-n;const S=this._sizeLods[s],I=3*S*(s>A-Mi?s-A+Mi:0),w=4*(this._cubeSize-S);Cs(t,I,w,3*S,2*S),c.setRenderTarget(t),c.render(p,yr)}}function op(i){const e=[],t=[],n=[];let s=i;const a=i-Mi+1+$o.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let c=1/o;r>i-Mi?c=$o[r-i+Mi-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,p=1+l,d=[u,u,p,u,p,p,u,u,p,p,u,p],f=6,g=6,v=3,m=2,h=1,E=new Float32Array(v*g*f),A=new Float32Array(m*g*f),S=new Float32Array(h*g*f);for(let w=0;w<f;w++){const P=w%3*2/3-1,L=w>2?0:-1,x=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];E.set(x,v*g*w),A.set(d,m*g*w);const M=[w,w,w,w,w,w];S.set(M,h*g*w)}const I=new Tt;I.setAttribute("position",new sn(E,v)),I.setAttribute("uv",new sn(A,m)),I.setAttribute("faceIndex",new sn(S,h)),e.push(I),s>Mi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jo(i,e,t){const n=new On(i,e,t);return n.texture.mapping=Xi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function lp(i,e,t){const n=new Float32Array(zn),s=new T(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Qo(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function el(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function br(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ks||c===js,u=c===ei||c===ti;if(l||u){let p=e.get(o);const d=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Zo(i)),p=l?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Zo(i)),p=l?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",a),p.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function up(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&si("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dp(i,e,t,n){const s={},a=new WeakMap;function r(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete s[d.id];const f=a.get(d);f&&(e.remove(f),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(p,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,t.memory.geometries++),d}function c(p){const d=p.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(p){const d=[],f=p.index,g=p.attributes.position;let v=0;if(f!==null){const E=f.array;v=f.version;for(let A=0,S=E.length;A<S;A+=3){const I=E[A+0],w=E[A+1],P=E[A+2];d.push(I,w,w,P,P,I)}}else if(g!==void 0){const E=g.array;v=g.version;for(let A=0,S=E.length/3-1;A<S;A+=3){const I=A+0,w=A+1,P=A+2;d.push(I,w,w,P,P,I)}}else return;const m=new(uo(d)?wo:bo)(d,1);m.version=v;const h=a.get(p);h&&e.remove(h),a.set(p,m)}function u(p){const d=a.get(p);if(d){const f=p.index;f!==null&&d.version<f.version&&l(p)}else l(p);return a.get(p)}return{get:o,update:c,getWireframeAttribute:u}}function hp(i,e,t){let n;function s(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function c(d,f){i.drawElements(n,f,a,d*r),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,a,d*r,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,d,0,g);let m=0;for(let h=0;h<g;h++)m+=f[h];t.update(m,n,1)}function p(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)l(d[h]/r,f[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,a,d,0,v,0,g);let h=0;for(let E=0;E<g;E++)h+=f[E]*v[E];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function pp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function fp(i,e,t){const n=new WeakMap,s=new Je;function a(r,o,c){const l=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==p){let x=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let A=0;f===!0&&(A=1),g===!0&&(A=2),v===!0&&(A=3);let S=o.attributes.position.count*A,I=1;S>e.maxTextureSize&&(I=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*I*4*p),P=new mo(w,S,I,p);P.type=ln,P.needsUpdate=!0;const L=A*4;for(let M=0;M<p;M++){const C=m[M],V=h[M],W=E[M],z=S*I*4*M;for(let F=0;F<C.count;F++){const B=F*L;f===!0&&(s.fromBufferAttribute(C,F),w[z+B+0]=s.x,w[z+B+1]=s.y,w[z+B+2]=s.z,w[z+B+3]=0),g===!0&&(s.fromBufferAttribute(V,F),w[z+B+4]=s.x,w[z+B+5]=s.y,w[z+B+6]=s.z,w[z+B+7]=0),v===!0&&(s.fromBufferAttribute(W,F),w[z+B+8]=s.x,w[z+B+9]=s.y,w[z+B+10]=s.z,w[z+B+11]=W.itemSize===4?s.w:1)}}d={count:p,texture:P,size:new Te(S,I)},n.set(o,d),o.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function mp(i,e,t,n){let s=new WeakMap;function a(c){const l=n.render.frame,u=c.geometry,p=e.get(c,u);if(s.get(p)!==l&&(e.update(p),s.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return p}function r(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:r}}const tl=new Dt,nl=new Bo(1,1),il=new mo,sl=new uu,al=new Uo,rl=[],ol=[],ll=new Float32Array(16),cl=new Float32Array(9),ul=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=rl[s];if(a===void 0&&(a=new Float32Array(s),rl[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Is(i,e){let t=ol[e];t===void 0&&(t=new Int32Array(e),ol[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function yp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(vt(t,n))return;ul.set(n),i.uniformMatrix2fv(this.addr,!1,ul),St(t,n)}}function Mp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(vt(t,n))return;cl.set(n),i.uniformMatrix3fv(this.addr,!1,cl),St(t,n)}}function xp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(vt(t,n))return;ll.set(n),i.uniformMatrix4fv(this.addr,!1,ll),St(t,n)}}function Ap(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function Tp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function Pp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(nl.compareFunction=ro,a=nl):a=tl,t.setTexture2D(e||a,s)}function Dp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sl,s)}function Lp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||al,s)}function Up(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||il,s)}function Np(i){switch(i){case 5126:return gp;case 35664:return _p;case 35665:return vp;case 35666:return Sp;case 35674:return yp;case 35675:return Mp;case 35676:return xp;case 5124:case 35670:return Ap;case 35667:case 35671:return Ep;case 35668:case 35672:return bp;case 35669:case 35673:return wp;case 5125:return Tp;case 36294:return Cp;case 36295:return Ip;case 36296:return Rp;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Up}}function Op(i,e){i.uniform1fv(this.addr,e)}function Fp(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function kp(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function Bp(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function Gp(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hp(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vp(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zp(i,e){i.uniform1iv(this.addr,e)}function Wp(i,e){i.uniform2iv(this.addr,e)}function Xp(i,e){i.uniform3iv(this.addr,e)}function qp(i,e){i.uniform4iv(this.addr,e)}function Yp(i,e){i.uniform1uiv(this.addr,e)}function $p(i,e){i.uniform2uiv(this.addr,e)}function Kp(i,e){i.uniform3uiv(this.addr,e)}function jp(i,e){i.uniform4uiv(this.addr,e)}function Zp(i,e,t){const n=this.cache,s=e.length,a=Is(t,s);vt(n,a)||(i.uniform1iv(this.addr,a),St(n,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||tl,a[r])}function Jp(i,e,t){const n=this.cache,s=e.length,a=Is(t,s);vt(n,a)||(i.uniform1iv(this.addr,a),St(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||sl,a[r])}function Qp(i,e,t){const n=this.cache,s=e.length,a=Is(t,s);vt(n,a)||(i.uniform1iv(this.addr,a),St(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||al,a[r])}function ef(i,e,t){const n=this.cache,s=e.length,a=Is(t,s);vt(n,a)||(i.uniform1iv(this.addr,a),St(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||il,a[r])}function tf(i){switch(i){case 5126:return Op;case 35664:return Fp;case 35665:return kp;case 35666:return Bp;case 35674:return Gp;case 35675:return Hp;case 35676:return Vp;case 5124:case 35670:return zp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return qp;case 5125:return Yp;case 36294:return $p;case 36295:return Kp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return ef}}class nf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Np(t.type)}}class sf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tf(t.type)}}class af{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const wr=/(\w+)(\])?(\[|\.)?/g;function dl(i,e){i.seq.push(e),i.map[e.id]=e}function rf(i,e,t){const n=i.name,s=n.length;for(wr.lastIndex=0;;){const a=wr.exec(n),r=wr.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){dl(t,l===void 0?new nf(o,i,e):new sf(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new af(o),dl(t,p)),t=p}}}class Rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);rf(a,r,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function hl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const of=37297;let lf=0;function cf(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const pl=new Oe;function uf(i){qe._getMatrix(pl,qe.workingColorSpace,i);const e=`mat3( ${pl.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case Ji:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+cf(i.getShaderSource(e),o)}else return a}function df(i,e){const t=uf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function hf(i,e){let t;switch(e){case Fc:t="Linear";break;case kc:t="Reinhard";break;case Bc:t="Cineon";break;case Gc:t="ACESFilmic";break;case Vc:t="AgX";break;case zc:t="Neutral";break;case Hc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ps=new T;function pf(){qe.getLuminanceCoefficients(Ps);const i=Ps.x.toFixed(4),e=Ps.y.toFixed(4),t=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ff(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function mf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Hi(i){return i!==""}function ml(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _f=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tr(i){return i.replace(_f,Sf)}const vf=new Map;function Sf(i,e){let t=Be[e];if(t===void 0){const n=vf.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tr(t)}const yf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(i){return i.replace(yf,Mf)}function Mf(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function vl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wr?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===gc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(e="SHADOWMAP_TYPE_VSM"),e}function Af(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ei:case ti:e="ENVMAP_TYPE_CUBE";break;case Xi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ef(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ti&&(e="ENVMAP_MODE_REFRACTION"),e}function bf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $r:e="ENVMAP_BLENDING_MULTIPLY";break;case Nc:e="ENVMAP_BLENDING_MIX";break;case Oc:e="ENVMAP_BLENDING_ADD";break}return e}function wf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Tf(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=xf(t),l=Af(t),u=Ef(t),p=bf(t),d=wf(t),f=ff(t),g=mf(a),v=s.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hi).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hi).join(`
`),h.length>0&&(h+=`
`)):(m=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),h=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Be.tonemapping_pars_fragment:"",t.toneMapping!==vn?hf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,df("linearToOutputTexel",t.outputColorSpace),pf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),r=Tr(r),r=ml(r,t),r=gl(r,t),o=Tr(o),o=ml(o,t),o=gl(o,t),r=_l(r),o=_l(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=E+m+r,S=E+h+o,I=hl(s,s.VERTEX_SHADER,A),w=hl(s,s.FRAGMENT_SHADER,S);s.attachShader(v,I),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(C){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(v)||"",W=s.getShaderInfoLog(I)||"",z=s.getShaderInfoLog(w)||"",F=V.trim(),B=W.trim(),J=z.trim();let X=!0,oe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,w);else{const he=fl(s,I,"vertex"),xe=fl(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+he+`
`+xe)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||J==="")&&(oe=!1);oe&&(C.diagnostics={runnable:X,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:J,prefix:h}})}s.deleteShader(I),s.deleteShader(w),L=new Rs(s,v),x=gf(s,v)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,of)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lf++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=w,this}let Cf=0;class If{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rf(e),t.set(e,n)),n}}class Rf{constructor(e){this.id=Cf++,this.code=e,this.usedTimes=0}}function Pf(i,e,t,n,s,a,r){const o=new Wa,c=new If,l=new Set,u=[],p=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,C,V,W){const z=V.fog,F=W.geometry,B=x.isMeshStandardMaterial?V.environment:null,J=(x.isMeshStandardMaterial?t:e).get(x.envMap||B),X=J&&J.mapping===Xi?J.image.height:null,oe=g[x.type];x.precision!==null&&(f=s.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const he=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,xe=he!==void 0?he.length:0;let Fe=0;F.morphAttributes.position!==void 0&&(Fe=1),F.morphAttributes.normal!==void 0&&(Fe=2),F.morphAttributes.color!==void 0&&(Fe=3);let ct,nt,$,le;if(oe){const je=an[oe];ct=je.vertexShader,nt=je.fragmentShader}else ct=x.vertexShader,nt=x.fragmentShader,c.update(x),$=c.getVertexShaderID(x),le=c.getFragmentShaderID(x);const se=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),Re=W.isInstancedMesh===!0,Ue=W.isBatchedMesh===!0,mt=!!x.map,Xe=!!x.matcap,R=!!J,at=!!x.aoMap,be=!!x.lightMap,Ke=!!x.bumpMap,Ae=!!x.normalMap,ut=!!x.displacementMap,me=!!x.emissiveMap,Ve=!!x.metalnessMap,At=!!x.roughnessMap,gt=x.anisotropy>0,b=x.clearcoat>0,_=x.dispersion>0,k=x.iridescence>0,Y=x.sheen>0,j=x.transmission>0,q=gt&&!!x.anisotropyMap,Me=b&&!!x.clearcoatMap,ie=b&&!!x.clearcoatNormalMap,ve=b&&!!x.clearcoatRoughnessMap,Se=k&&!!x.iridescenceMap,te=k&&!!x.iridescenceThicknessMap,de=Y&&!!x.sheenColorMap,De=Y&&!!x.sheenRoughnessMap,ye=!!x.specularMap,ce=!!x.specularColorMap,ke=!!x.specularIntensityMap,U=j&&!!x.transmissionMap,ne=j&&!!x.thicknessMap,ae=!!x.gradientMap,fe=!!x.alphaMap,Q=x.alphaTest>0,K=!!x.alphaHash,_e=!!x.extensions;let Ne=vn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const rt={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:ct,fragmentShader:nt,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&W._colorsTexture!==null,instancing:Re,instancingColor:Re&&W.instanceColor!==null,instancingMorph:Re&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ni,alphaToCoverage:!!x.alphaToCoverage,map:mt,matcap:Xe,envMap:R,envMapMode:R&&J.mapping,envMapCubeUVHeight:X,aoMap:at,lightMap:be,bumpMap:Ke,normalMap:Ae,displacementMap:d&&ut,emissiveMap:me,normalMapObjectSpace:Ae&&x.normalMapType===Yc,normalMapTangentSpace:Ae&&x.normalMapType===so,metalnessMap:Ve,roughnessMap:At,anisotropy:gt,anisotropyMap:q,clearcoat:b,clearcoatMap:Me,clearcoatNormalMap:ie,clearcoatRoughnessMap:ve,dispersion:_,iridescence:k,iridescenceMap:Se,iridescenceThicknessMap:te,sheen:Y,sheenColorMap:de,sheenRoughnessMap:De,specularMap:ye,specularColorMap:ce,specularIntensityMap:ke,transmission:j,transmissionMap:U,thicknessMap:ne,gradientMap:ae,opaque:x.transparent===!1&&x.blending===Jn&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:Q,alphaHash:K,combine:x.combine,mapUv:mt&&v(x.map.channel),aoMapUv:at&&v(x.aoMap.channel),lightMapUv:be&&v(x.lightMap.channel),bumpMapUv:Ke&&v(x.bumpMap.channel),normalMapUv:Ae&&v(x.normalMap.channel),displacementMapUv:ut&&v(x.displacementMap.channel),emissiveMapUv:me&&v(x.emissiveMap.channel),metalnessMapUv:Ve&&v(x.metalnessMap.channel),roughnessMapUv:At&&v(x.roughnessMap.channel),anisotropyMapUv:q&&v(x.anisotropyMap.channel),clearcoatMapUv:Me&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(x.sheenRoughnessMap.channel),specularMapUv:ye&&v(x.specularMap.channel),specularColorMapUv:ce&&v(x.specularColorMap.channel),specularIntensityMapUv:ke&&v(x.specularIntensityMap.channel),transmissionMapUv:U&&v(x.transmissionMap.channel),thicknessMapUv:ne&&v(x.thicknessMap.channel),alphaMapUv:fe&&v(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ae||gt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!F.attributes.uv&&(mt||fe),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ie,skinning:W.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:mt&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===Ze,decodeVideoTextureEmissive:me&&x.emissiveMap.isVideoTexture===!0&&qe.getTransfer(x.emissiveMap.colorSpace)===Ze,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Jt,flipSided:x.side===Rt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_e&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&x.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function h(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)M.push(C),M.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(E(M,x),A(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function E(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function A(x,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){const M=g[x.type];let C;if(M){const V=an[M];C=Au.clone(V.uniforms)}else C=x.uniforms;return C}function I(x,M){let C;for(let V=0,W=u.length;V<W;V++){const z=u[V];if(z.cacheKey===M){C=z,++C.usedTimes;break}}return C===void 0&&(C=new Tf(i,M,x,a),u.push(C)),C}function w(x){if(--x.usedTimes===0){const M=u.indexOf(x);u[M]=u[u.length-1],u.pop(),x.destroy()}}function P(x){c.remove(x)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:I,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:L}}function Df(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,c){i.get(r)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function Lf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yl(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(p,d,f,g,v,m){let h=i[e];return h===void 0?(h={id:p.id,object:p,geometry:d,material:f,groupOrder:g,renderOrder:p.renderOrder,z:v,group:m},i[e]=h):(h.id=p.id,h.object=p,h.geometry=d,h.material=f,h.groupOrder=g,h.renderOrder=p.renderOrder,h.z=v,h.group=m),e++,h}function o(p,d,f,g,v,m){const h=r(p,d,f,g,v,m);f.transmission>0?n.push(h):f.transparent===!0?s.push(h):t.push(h)}function c(p,d,f,g,v,m){const h=r(p,d,f,g,v,m);f.transmission>0?n.unshift(h):f.transparent===!0?s.unshift(h):t.unshift(h)}function l(p,d){t.length>1&&t.sort(p||Lf),n.length>1&&n.sort(d||Sl),s.length>1&&s.sort(d||Sl)}function u(){for(let p=e,d=i.length;p<d;p++){const f=i[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:c,finish:u,sort:l}}function Uf(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new yl,i.set(n,[r])):s>=a.length?(r=new yl,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function Nf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new ze};break;case"SpotLight":t={position:new T,direction:new T,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function Of(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ff=0;function kf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bf(i){const e=new Nf,t=Of(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);const s=new T,a=new ot,r=new ot;function o(l){let u=0,p=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,v=0,m=0,h=0,E=0,A=0,S=0,I=0,w=0,P=0;l.sort(kf);for(let x=0,M=l.length;x<M;x++){const C=l[x],V=C.color,W=C.intensity,z=C.distance,F=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=V.r*W,p+=V.g*W,d+=V.b*W;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],W);P++}else if(C.isDirectionalLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,X=t.get(C);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=C.shadow.matrix,E++}n.directional[f]=B,f++}else if(C.isSpotLight){const B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(V).multiplyScalar(W),B.distance=z,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[v]=B;const J=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,J.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[v]=J.matrix,C.castShadow){const X=t.get(C);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=F,S++}v++}else if(C.isRectAreaLight){const B=e.get(C);B.color.copy(V).multiplyScalar(W),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=B,m++}else if(C.isPointLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const J=C.shadow,X=t.get(C);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=C.shadow.matrix,A++}n.point[g]=B,g++}else if(C.isHemisphereLight){const B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(W),B.groundColor.copy(C.groundColor).multiplyScalar(W),n.hemi[h]=B,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==h||L.numDirectionalShadows!==E||L.numPointShadows!==A||L.numSpotShadows!==S||L.numSpotMaps!==I||L.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=S+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,L.directionalLength=f,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=h,L.numDirectionalShadows=E,L.numPointShadows=A,L.numSpotShadows=S,L.numSpotMaps=I,L.numLightProbes=P,n.version=Ff++)}function c(l,u){let p=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,E=l.length;h<E;h++){const A=l[h];if(A.isDirectionalLight){const S=n.directional[p];S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(A.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(A.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),r.identity(),a.copy(A.matrixWorld),a.premultiply(m),r.extractRotation(a),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),g++}else if(A.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function Ml(i){const e=new Bf(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function a(u){t.push(u)}function r(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function Gf(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new Ml(i),e.set(s,[o])):a>=r.length?(o=new Ml(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Hf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zf(i,e,t){let n=new ar;const s=new Te,a=new Te,r=new Je,o=new Gu({depthPacking:qc}),c=new Hu,l={},u=t.maxTextureSize,p={[gn]:Rt,[Rt]:gn,[Jt]:Jt},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Hf,fragmentShader:Vf}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wr;let h=this.type;this.render=function(w,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const x=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),V=i.state;V.setBlending(_n),V.buffers.depth.getReversed()?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=h!==on&&this.type===on,z=h===on&&this.type!==on;for(let F=0,B=w.length;F<B;F++){const J=w[F],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const oe=X.getFrameExtents();if(s.multiply(oe),a.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/oe.x),s.x=a.x*oe.x,X.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/oe.y),s.y=a.y*oe.y,X.mapSize.y=a.y)),X.map===null||W===!0||z===!0){const xe=this.type!==on?{minFilter:qt,magFilter:qt}:{};X.map!==null&&X.map.dispose(),X.map=new On(s.x,s.y,xe),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const he=X.getViewportCount();for(let xe=0;xe<he;xe++){const Fe=X.getViewport(xe);r.set(a.x*Fe.x,a.y*Fe.y,a.x*Fe.z,a.y*Fe.w),V.viewport(r),X.updateMatrices(J,xe),n=X.getFrustum(),S(P,L,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===on&&E(X,L),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(x,M,C)};function E(w,P){const L=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new On(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,L,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,L,f,v,null)}function A(w,P,L,x){let M=null;const C=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)M=C;else if(M=L.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const V=M.uuid,W=P.uuid;let z=l[V];z===void 0&&(z={},l[V]=z);let F=z[W];F===void 0&&(F=M.clone(),z[W]=F,P.addEventListener("dispose",I)),M=F}if(M.visible=P.visible,M.wireframe=P.wireframe,x===on?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:p[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=L}return M}function S(w,P,L,x,M){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===on)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const W=e.update(w),z=w.material;if(Array.isArray(z)){const F=W.groups;for(let B=0,J=F.length;B<J;B++){const X=F[B],oe=z[X.materialIndex];if(oe&&oe.visible){const he=A(w,oe,x,M);w.onBeforeShadow(i,w,P,L,W,he,X),i.renderBufferDirect(L,null,W,he,w,X),w.onAfterShadow(i,w,P,L,W,he,X)}}}else if(z.visible){const F=A(w,z,x,M);w.onBeforeShadow(i,w,P,L,W,F,null),i.renderBufferDirect(L,null,W,F,w,null),w.onAfterShadow(i,w,P,L,W,F,null)}}const V=w.children;for(let W=0,z=V.length;W<z;W++)S(V[W],P,L,x,M)}function I(w){w.target.removeEventListener("dispose",I);for(const L in l){const x=l[L],M=w.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const Wf={[Vs]:zs,[Ws]:Ys,[Xs]:$s,[Qn]:qs,[zs]:Vs,[Ys]:Ws,[$s]:Xs,[qs]:Qn};function Xf(i,e){function t(){let U=!1;const ne=new Je;let ae=null;const fe=new Je(0,0,0,0);return{setMask:function(Q){ae!==Q&&!U&&(i.colorMask(Q,Q,Q,Q),ae=Q)},setLocked:function(Q){U=Q},setClear:function(Q,K,_e,Ne,rt){rt===!0&&(Q*=Ne,K*=Ne,_e*=Ne),ne.set(Q,K,_e,Ne),fe.equals(ne)===!1&&(i.clearColor(Q,K,_e,Ne),fe.copy(ne))},reset:function(){U=!1,ae=null,fe.set(-1,0,0,0)}}}function n(){let U=!1,ne=!1,ae=null,fe=null,Q=null;return{setReversed:function(K){if(ne!==K){const _e=e.get("EXT_clip_control");K?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ne=K;const Ne=Q;Q=null,this.setClear(Ne)}},getReversed:function(){return ne},setTest:function(K){K?se(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(K){ae!==K&&!U&&(i.depthMask(K),ae=K)},setFunc:function(K){if(ne&&(K=Wf[K]),fe!==K){switch(K){case Vs:i.depthFunc(i.NEVER);break;case zs:i.depthFunc(i.ALWAYS);break;case Ws:i.depthFunc(i.LESS);break;case Qn:i.depthFunc(i.LEQUAL);break;case Xs:i.depthFunc(i.EQUAL);break;case qs:i.depthFunc(i.GEQUAL);break;case Ys:i.depthFunc(i.GREATER);break;case $s:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=K}},setLocked:function(K){U=K},setClear:function(K){Q!==K&&(ne&&(K=1-K),i.clearDepth(K),Q=K)},reset:function(){U=!1,ae=null,fe=null,Q=null,ne=!1}}}function s(){let U=!1,ne=null,ae=null,fe=null,Q=null,K=null,_e=null,Ne=null,rt=null;return{setTest:function(je){U||(je?se(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(je){ne!==je&&!U&&(i.stencilMask(je),ne=je)},setFunc:function(je,mn,rn){(ae!==je||fe!==mn||Q!==rn)&&(i.stencilFunc(je,mn,rn),ae=je,fe=mn,Q=rn)},setOp:function(je,mn,rn){(K!==je||_e!==mn||Ne!==rn)&&(i.stencilOp(je,mn,rn),K=je,_e=mn,Ne=rn)},setLocked:function(je){U=je},setClear:function(je){rt!==je&&(i.clearStencil(je),rt=je)},reset:function(){U=!1,ne=null,ae=null,fe=null,Q=null,K=null,_e=null,Ne=null,rt=null}}}const a=new t,r=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},p={},d=new WeakMap,f=[],g=null,v=!1,m=null,h=null,E=null,A=null,S=null,I=null,w=null,P=new ze(0,0,0),L=0,x=!1,M=null,C=null,V=null,W=null,z=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,J=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=J>=2);let oe=null,he={};const xe=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),ct=new Je().fromArray(xe),nt=new Je().fromArray(Fe);function $(U,ne,ae,fe){const Q=new Uint8Array(4),K=i.createTexture();i.bindTexture(U,K),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<ae;_e++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ne+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return K}const le={};le[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),se(i.DEPTH_TEST),r.setFunc(Qn),Ke(!1),Ae(zr),se(i.CULL_FACE),at(_n);function se(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Ie(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Re(U,ne){return p[U]!==ne?(i.bindFramebuffer(U,ne),p[U]=ne,U===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ne),U===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ue(U,ne){let ae=f,fe=!1;if(U){ae=d.get(ne),ae===void 0&&(ae=[],d.set(ne,ae));const Q=U.textures;if(ae.length!==Q.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let K=0,_e=Q.length;K<_e;K++)ae[K]=i.COLOR_ATTACHMENT0+K;ae.length=Q.length,fe=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,fe=!0);fe&&i.drawBuffers(ae)}function mt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Xe={[Rn]:i.FUNC_ADD,[vc]:i.FUNC_SUBTRACT,[Sc]:i.FUNC_REVERSE_SUBTRACT};Xe[yc]=i.MIN,Xe[Mc]=i.MAX;const R={[xc]:i.ZERO,[Ac]:i.ONE,[Ec]:i.SRC_COLOR,[Gs]:i.SRC_ALPHA,[Rc]:i.SRC_ALPHA_SATURATE,[Cc]:i.DST_COLOR,[wc]:i.DST_ALPHA,[bc]:i.ONE_MINUS_SRC_COLOR,[Hs]:i.ONE_MINUS_SRC_ALPHA,[Ic]:i.ONE_MINUS_DST_COLOR,[Tc]:i.ONE_MINUS_DST_ALPHA,[Pc]:i.CONSTANT_COLOR,[Dc]:i.ONE_MINUS_CONSTANT_COLOR,[Lc]:i.CONSTANT_ALPHA,[Uc]:i.ONE_MINUS_CONSTANT_ALPHA};function at(U,ne,ae,fe,Q,K,_e,Ne,rt,je){if(U===_n){v===!0&&(Ie(i.BLEND),v=!1);return}if(v===!1&&(se(i.BLEND),v=!0),U!==_c){if(U!==m||je!==x){if((h!==Rn||S!==Rn)&&(i.blendEquation(i.FUNC_ADD),h=Rn,S=Rn),je)switch(U){case Jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xr:i.blendFunc(i.ONE,i.ONE);break;case qr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yr:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qr:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yr:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,A=null,I=null,w=null,P.set(0,0,0),L=0,m=U,x=je}return}Q=Q||ne,K=K||ae,_e=_e||fe,(ne!==h||Q!==S)&&(i.blendEquationSeparate(Xe[ne],Xe[Q]),h=ne,S=Q),(ae!==E||fe!==A||K!==I||_e!==w)&&(i.blendFuncSeparate(R[ae],R[fe],R[K],R[_e]),E=ae,A=fe,I=K,w=_e),(Ne.equals(P)===!1||rt!==L)&&(i.blendColor(Ne.r,Ne.g,Ne.b,rt),P.copy(Ne),L=rt),m=U,x=!1}function be(U,ne){U.side===Jt?Ie(i.CULL_FACE):se(i.CULL_FACE);let ae=U.side===Rt;ne&&(ae=!ae),Ke(ae),U.blending===Jn&&U.transparent===!1?at(_n):at(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);const fe=U.stencilWrite;o.setTest(fe),fe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),me(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function Ae(U){U!==fc?(se(i.CULL_FACE),U!==C&&(U===zr?i.cullFace(i.BACK):U===mc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),C=U}function ut(U){U!==V&&(B&&i.lineWidth(U),V=U)}function me(U,ne,ae){U?(se(i.POLYGON_OFFSET_FILL),(W!==ne||z!==ae)&&(i.polygonOffset(ne,ae),W=ne,z=ae)):Ie(i.POLYGON_OFFSET_FILL)}function Ve(U){U?se(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function At(U){U===void 0&&(U=i.TEXTURE0+F-1),oe!==U&&(i.activeTexture(U),oe=U)}function gt(U,ne,ae){ae===void 0&&(oe===null?ae=i.TEXTURE0+F-1:ae=oe);let fe=he[ae];fe===void 0&&(fe={type:void 0,texture:void 0},he[ae]=fe),(fe.type!==U||fe.texture!==ne)&&(oe!==ae&&(i.activeTexture(ae),oe=ae),i.bindTexture(U,ne||le[U]),fe.type=U,fe.texture=ne)}function b(){const U=he[oe];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(U){ct.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ct.copy(U))}function De(U){nt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),nt.copy(U))}function ye(U,ne){let ae=l.get(ne);ae===void 0&&(ae=new WeakMap,l.set(ne,ae));let fe=ae.get(U);fe===void 0&&(fe=i.getUniformBlockIndex(ne,U.name),ae.set(U,fe))}function ce(U,ne){const fe=l.get(ne).get(U);c.get(ne)!==fe&&(i.uniformBlockBinding(ne,fe,U.__bindingPointIndex),c.set(ne,fe))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,he={},p={},d=new WeakMap,f=[],g=null,v=!1,m=null,h=null,E=null,A=null,S=null,I=null,w=null,P=new ze(0,0,0),L=0,x=!1,M=null,C=null,V=null,W=null,z=null,ct.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:se,disable:Ie,bindFramebuffer:Re,drawBuffers:Ue,useProgram:mt,setBlending:at,setMaterial:be,setFlipSided:Ke,setCullFace:Ae,setLineWidth:ut,setPolygonOffset:me,setScissorTest:Ve,activeTexture:At,bindTexture:gt,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:k,texImage2D:Se,texImage3D:te,updateUBOMapping:ye,uniformBlockBinding:ce,texStorage2D:ie,texStorage3D:ve,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:Me,scissor:de,viewport:De,reset:ke}}function qf(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Te,u=new WeakMap;let p;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return f?new OffscreenCanvas(b,_):ts("canvas")}function v(b,_,k){let Y=1;const j=gt(b);if((j.width>k||j.height>k)&&(Y=k/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(Y*j.width),Me=Math.floor(Y*j.height);p===void 0&&(p=g(q,Me));const ie=_?g(q,Me):p;return ie.width=q,ie.height=Me,ie.getContext("2d").drawImage(b,0,0,q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+Me+")."),ie}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function m(b){return b.generateMipmaps}function h(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(b,_,k,Y,j=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=_;if(_===i.RED&&(k===i.FLOAT&&(q=i.R32F),k===i.HALF_FLOAT&&(q=i.R16F),k===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.R8UI),k===i.UNSIGNED_SHORT&&(q=i.R16UI),k===i.UNSIGNED_INT&&(q=i.R32UI),k===i.BYTE&&(q=i.R8I),k===i.SHORT&&(q=i.R16I),k===i.INT&&(q=i.R32I)),_===i.RG&&(k===i.FLOAT&&(q=i.RG32F),k===i.HALF_FLOAT&&(q=i.RG16F),k===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.RG8UI),k===i.UNSIGNED_SHORT&&(q=i.RG16UI),k===i.UNSIGNED_INT&&(q=i.RG32UI),k===i.BYTE&&(q=i.RG8I),k===i.SHORT&&(q=i.RG16I),k===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(q=i.RGB16UI),k===i.UNSIGNED_INT&&(q=i.RGB32UI),k===i.BYTE&&(q=i.RGB8I),k===i.SHORT&&(q=i.RGB16I),k===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),k===i.UNSIGNED_INT&&(q=i.RGBA32UI),k===i.BYTE&&(q=i.RGBA8I),k===i.SHORT&&(q=i.RGBA16I),k===i.INT&&(q=i.RGBA32I)),_===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),_===i.RGBA){const Me=j?Ji:qe.getTransfer(Y);k===i.FLOAT&&(q=i.RGBA32F),k===i.HALF_FLOAT&&(q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(q=Me===Ze?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(b,_){let k;return b?_===null||_===Ln||_===Ii?k=i.DEPTH24_STENCIL8:_===ln?k=i.DEPTH32F_STENCIL8:_===Ti&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ln||_===Ii?k=i.DEPTH_COMPONENT24:_===ln?k=i.DEPTH_COMPONENT32F:_===Ti&&(k=i.DEPTH_COMPONENT16),k}function I(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==qt&&b.minFilter!==Qt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function w(b){const _=b.target;_.removeEventListener("dispose",w),L(_),_.isVideoTexture&&u.delete(_)}function P(b){const _=b.target;_.removeEventListener("dispose",P),M(_)}function L(b){const _=n.get(b);if(_.__webglInit===void 0)return;const k=b.source,Y=d.get(k);if(Y){const j=Y[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(b),Object.keys(Y).length===0&&d.delete(k)}n.remove(b)}function x(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const k=b.source,Y=d.get(k);delete Y[_.__cacheKey],r.memory.textures--}function M(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let j=0;j<_.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=b.textures;for(let Y=0,j=k.length;Y<j;Y++){const q=n.get(k[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),r.memory.textures--),n.remove(k[Y])}n.remove(b)}let C=0;function V(){C=0}function W(){const b=C;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),C+=1,b}function z(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function F(b,_){const k=n.get(b);if(b.isVideoTexture&&Ve(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&k.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(k,b,_);return}}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function B(b,_){const k=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){le(k,b,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function J(b,_){const k=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){le(k,b,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function X(b,_){const k=n.get(b);if(b.version>0&&k.__version!==b.version){se(k,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}const oe={[Zs]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Js]:i.MIRRORED_REPEAT},he={[qt]:i.NEAREST,[Wc]:i.NEAREST_MIPMAP_NEAREST,[qi]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Qs]:i.LINEAR_MIPMAP_NEAREST,[Dn]:i.LINEAR_MIPMAP_LINEAR},xe={[$c]:i.NEVER,[eu]:i.ALWAYS,[Kc]:i.LESS,[ro]:i.LEQUAL,[jc]:i.EQUAL,[Qc]:i.GEQUAL,[Zc]:i.GREATER,[Jc]:i.NOTEQUAL};function Fe(b,_){if(_.type===ln&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Qt||_.magFilter===Qs||_.magFilter===qi||_.magFilter===Dn||_.minFilter===Qt||_.minFilter===Qs||_.minFilter===qi||_.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,oe[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,oe[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,oe[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,he[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===qt||_.minFilter!==qi&&_.minFilter!==Dn||_.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ct(b,_){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",w));const Y=_.source;let j=d.get(Y);j===void 0&&(j={},d.set(Y,j));const q=z(_);if(q!==b.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,k=!0),j[q].usedTimes++;const Me=j[b.__cacheKey];Me!==void 0&&(j[b.__cacheKey].usedTimes--,Me.usedTimes===0&&x(_)),b.__cacheKey=q,b.__webglTexture=j[q].texture}return k}function nt(b,_,k){return Math.floor(Math.floor(b/k)/_)}function $(b,_,k,Y){const q=b.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,Y,_.data);else{q.sort((te,de)=>te.start-de.start);let Me=0;for(let te=1;te<q.length;te++){const de=q[Me],De=q[te],ye=de.start+de.count,ce=nt(De.start,_.width,4),ke=nt(de.start,_.width,4);De.start<=ye+1&&ce===ke&&nt(De.start+De.count-1,_.width,4)===ce?de.count=Math.max(de.count,De.start+De.count-de.start):(++Me,q[Me]=De)}q.length=Me+1;const ie=i.getParameter(i.UNPACK_ROW_LENGTH),ve=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let te=0,de=q.length;te<de;te++){const De=q[te],ye=Math.floor(De.start/4),ce=Math.ceil(De.count/4),ke=ye%_.width,U=Math.floor(ye/_.width),ne=ce,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,ke,U,ne,ae,k,Y,_.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function le(b,_,k){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const j=ct(b,_),q=_.source;t.bindTexture(Y,b.__webglTexture,i.TEXTURE0+k);const Me=n.get(q);if(q.version!==Me.__version||j===!0){t.activeTexture(i.TEXTURE0+k);const ie=qe.getPrimaries(qe.workingColorSpace),ve=_.colorSpace===Sn?null:qe.getPrimaries(_.colorSpace),Se=_.colorSpace===Sn||ie===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let te=v(_.image,!1,s.maxTextureSize);te=At(_,te);const de=a.convert(_.format,_.colorSpace),De=a.convert(_.type);let ye=A(_.internalFormat,de,De,_.colorSpace,_.isVideoTexture);Fe(Y,_);let ce;const ke=_.mipmaps,U=_.isVideoTexture!==!0,ne=Me.__version===void 0||j===!0,ae=q.dataReady,fe=I(_,te);if(_.isDepthTexture)ye=S(_.format===Pi,_.type),ne&&(U?t.texStorage2D(i.TEXTURE_2D,1,ye,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ye,te.width,te.height,0,de,De,null));else if(_.isDataTexture)if(ke.length>0){U&&ne&&t.texStorage2D(i.TEXTURE_2D,fe,ye,ke[0].width,ke[0].height);for(let Q=0,K=ke.length;Q<K;Q++)ce=ke[Q],U?ae&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,de,De,ce.data):t.texImage2D(i.TEXTURE_2D,Q,ye,ce.width,ce.height,0,de,De,ce.data);_.generateMipmaps=!1}else U?(ne&&t.texStorage2D(i.TEXTURE_2D,fe,ye,te.width,te.height),ae&&$(_,te,de,De)):t.texImage2D(i.TEXTURE_2D,0,ye,te.width,te.height,0,de,De,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ye,ke[0].width,ke[0].height,te.depth);for(let Q=0,K=ke.length;Q<K;Q++)if(ce=ke[Q],_.format!==Yt)if(de!==null)if(U){if(ae)if(_.layerUpdates.size>0){const _e=qo(ce.width,ce.height,_.format,_.type);for(const Ne of _.layerUpdates){const rt=ce.data.subarray(Ne*_e/ce.data.BYTES_PER_ELEMENT,(Ne+1)*_e/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ne,ce.width,ce.height,1,de,rt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,te.depth,de,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ye,ce.width,ce.height,te.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,te.depth,de,De,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,ye,ce.width,ce.height,te.depth,0,de,De,ce.data)}else{U&&ne&&t.texStorage2D(i.TEXTURE_2D,fe,ye,ke[0].width,ke[0].height);for(let Q=0,K=ke.length;Q<K;Q++)ce=ke[Q],_.format!==Yt?de!==null?U?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,ye,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ae&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,de,De,ce.data):t.texImage2D(i.TEXTURE_2D,Q,ye,ce.width,ce.height,0,de,De,ce.data)}else if(_.isDataArrayTexture)if(U){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ye,te.width,te.height,te.depth),ae)if(_.layerUpdates.size>0){const Q=qo(te.width,te.height,_.format,_.type);for(const K of _.layerUpdates){const _e=te.data.subarray(K*Q/te.data.BYTES_PER_ELEMENT,(K+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,de,De,_e)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,De,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,de,De,te.data);else if(_.isData3DTexture)U?(ne&&t.texStorage3D(i.TEXTURE_3D,fe,ye,te.width,te.height,te.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,De,te.data)):t.texImage3D(i.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,de,De,te.data);else if(_.isFramebufferTexture){if(ne)if(U)t.texStorage2D(i.TEXTURE_2D,fe,ye,te.width,te.height);else{let Q=te.width,K=te.height;for(let _e=0;_e<fe;_e++)t.texImage2D(i.TEXTURE_2D,_e,ye,Q,K,0,de,De,null),Q>>=1,K>>=1}}else if(ke.length>0){if(U&&ne){const Q=gt(ke[0]);t.texStorage2D(i.TEXTURE_2D,fe,ye,Q.width,Q.height)}for(let Q=0,K=ke.length;Q<K;Q++)ce=ke[Q],U?ae&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de,De,ce):t.texImage2D(i.TEXTURE_2D,Q,ye,de,De,ce);_.generateMipmaps=!1}else if(U){if(ne){const Q=gt(te);t.texStorage2D(i.TEXTURE_2D,fe,ye,Q.width,Q.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,De,te)}else t.texImage2D(i.TEXTURE_2D,0,ye,de,De,te);m(_)&&h(Y),Me.__version=q.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function se(b,_,k){if(_.image.length!==6)return;const Y=ct(b,_),j=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+k);const q=n.get(j);if(j.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+k);const Me=qe.getPrimaries(qe.workingColorSpace),ie=_.colorSpace===Sn?null:qe.getPrimaries(_.colorSpace),ve=_.colorSpace===Sn||Me===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Se=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!Se&&!te?de[K]=v(_.image[K],!0,s.maxCubemapSize):de[K]=te?_.image[K].image:_.image[K],de[K]=At(_,de[K]);const De=de[0],ye=a.convert(_.format,_.colorSpace),ce=a.convert(_.type),ke=A(_.internalFormat,ye,ce,_.colorSpace),U=_.isVideoTexture!==!0,ne=q.__version===void 0||Y===!0,ae=j.dataReady;let fe=I(_,De);Fe(i.TEXTURE_CUBE_MAP,_);let Q;if(Se){U&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,ke,De.width,De.height);for(let K=0;K<6;K++){Q=de[K].mipmaps;for(let _e=0;_e<Q.length;_e++){const Ne=Q[_e];_.format!==Yt?ye!==null?U?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,Ne.width,Ne.height,ye,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,ke,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,Ne.width,Ne.height,ye,ce,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,ke,Ne.width,Ne.height,0,ye,ce,Ne.data)}}}else{if(Q=_.mipmaps,U&&ne){Q.length>0&&fe++;const K=gt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,ke,K.width,K.height)}for(let K=0;K<6;K++)if(te){U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,ye,ce,de[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,de[K].width,de[K].height,0,ye,ce,de[K].data);for(let _e=0;_e<Q.length;_e++){const rt=Q[_e].image[K].image;U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,rt.width,rt.height,ye,ce,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,ke,rt.width,rt.height,0,ye,ce,rt.data)}}else{U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye,ce,de[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,ye,ce,de[K]);for(let _e=0;_e<Q.length;_e++){const Ne=Q[_e];U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,ye,ce,Ne.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,ke,ye,ce,Ne.image[K])}}}m(_)&&h(i.TEXTURE_CUBE_MAP),q.__version=j.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ie(b,_,k,Y,j,q){const Me=a.convert(k.format,k.colorSpace),ie=a.convert(k.type),ve=A(k.internalFormat,Me,ie,k.colorSpace),Se=n.get(_),te=n.get(k);if(te.__renderTarget=_,!Se.__hasExternalTextures){const de=Math.max(1,_.width>>q),De=Math.max(1,_.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,q,ve,de,De,_.depth,0,Me,ie,null):t.texImage2D(j,q,ve,de,De,0,Me,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,te.__webglTexture,0,ut(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,te.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(b,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const Y=_.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=S(_.stencilBuffer,j),Me=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=ut(_);me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,q,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,b)}else{const Y=_.textures;for(let j=0;j<Y.length;j++){const q=Y[j],Me=a.convert(q.format,q.colorSpace),ie=a.convert(q.type),ve=A(q.internalFormat,Me,ie,q.colorSpace),Se=ut(_);k&&me(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ve,_.width,_.height):me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,ve,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ve,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),F(_.depthTexture,0);const j=Y.__webglTexture,q=ut(_);if(_.depthTexture.format===Ri)me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===Pi)me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function mt(b){const _=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=Y}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Y=b.texture.mipmaps;Y&&Y.length>0?Ue(_.__webglFramebuffer[0],b):Ue(_.__webglFramebuffer,b)}else if(k){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),Re(_.__webglDepthbuffer[Y],b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else{const Y=b.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Re(_.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(b,_,k){const Y=n.get(b);_!==void 0&&Ie(Y.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&mt(b)}function R(b){const _=b.texture,k=n.get(b),Y=n.get(_);b.addEventListener("dispose",P);const j=b.textures,q=b.isWebGLCubeRenderTarget===!0,Me=j.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,r.memory.textures++),q){k.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[ie]=[];for(let ve=0;ve<_.mipmaps.length;ve++)k.__webglFramebuffer[ie][ve]=i.createFramebuffer()}else k.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)k.__webglFramebuffer[ie]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ie=0,ve=j.length;ie<ve;ie++){const Se=n.get(j[ie]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),r.memory.textures++)}if(b.samples>0&&me(b)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){const ve=j[ie];k.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ie]);const Se=a.convert(ve.format,ve.colorSpace),te=a.convert(ve.type),de=A(ve.internalFormat,Se,te,ve.colorSpace,b.isXRRenderTarget===!0),De=ut(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,de,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,k.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)Ie(k.__webglFramebuffer[ie][ve],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve);else Ie(k.__webglFramebuffer[ie],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(_)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ie=0,ve=j.length;ie<ve;ie++){const Se=j[ie],te=n.get(Se);let de=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(de=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,te.__webglTexture),Fe(de,Se),Ie(k.__webglFramebuffer,b,Se,i.COLOR_ATTACHMENT0+ie,de,0),m(Se)&&h(de)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ie=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,Y.__webglTexture),Fe(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)Ie(k.__webglFramebuffer[ve],b,_,i.COLOR_ATTACHMENT0,ie,ve);else Ie(k.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,ie,0);m(_)&&h(ie),t.unbindTexture()}b.depthBuffer&&mt(b)}function at(b){const _=b.textures;for(let k=0,Y=_.length;k<Y;k++){const j=_[k];if(m(j)){const q=E(b),Me=n.get(j).__webglTexture;t.bindTexture(q,Me),h(q),t.unbindTexture()}}}const be=[],Ke=[];function Ae(b){if(b.samples>0){if(me(b)===!1){const _=b.textures,k=b.width,Y=b.height;let j=i.COLOR_BUFFER_BIT;const q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(b),ie=_.length>1;if(ie)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const ve=b.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Se]);const te=n.get(_[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,k,Y,0,0,k,Y,j,i.NEAREST),c===!0&&(be.length=0,Ke.length=0,be.push(i.COLOR_ATTACHMENT0+Se),b.depthBuffer&&b.resolveDepthBuffer===!1&&(be.push(q),Ke.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Se]);const te=n.get(_[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ut(b){return Math.min(s.maxSamples,b.samples)}function me(b){const _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ve(b){const _=r.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function At(b,_){const k=b.colorSpace,Y=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==ni&&k!==Sn&&(qe.getTransfer(k)===Ze?(Y!==Yt||j!==en)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}function gt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=Xe,this.setupRenderTarget=R,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=me}function Yf(i,e){function t(n,s=Sn){let a;const r=qe.getTransfer(s);if(n===en)return i.UNSIGNED_BYTE;if(n===ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jr)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jr)return i.BYTE;if(n===Zr)return i.SHORT;if(n===Ti)return i.UNSIGNED_SHORT;if(n===ea)return i.INT;if(n===Ln)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===Ci)return i.HALF_FLOAT;if(n===Qr)return i.ALPHA;if(n===eo)return i.RGB;if(n===Yt)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===Pi)return i.DEPTH_STENCIL;if(n===to)return i.RED;if(n===ia)return i.RED_INTEGER;if(n===no)return i.RG;if(n===sa)return i.RG_INTEGER;if(n===aa)return i.RGBA_INTEGER;if(n===Yi||n===$i||n===Ki||n===ji)if(r===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Yi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$i)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ki)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ji)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Yi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$i)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ki)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ji)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ra||n===oa||n===la||n===ca)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ra)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===la)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ca)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ua||n===da||n===ha)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ua||n===da)return r===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ha)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pa||n===fa||n===ma||n===ga||n===_a||n===va||n===Sa||n===ya||n===Ma||n===xa||n===Aa||n===Ea||n===ba||n===wa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===pa)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fa)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ma)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ga)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_a)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===va)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ya)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ma)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ba)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wa)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zi||n===Ta||n===Ca)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Zi)return r===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ca)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===io||n===Ia||n===Ra||n===Pa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Zi)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ia)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class xl extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const $f=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new xl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new wn({vertexShader:$f,fragmentShader:Kf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zf extends Un{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",c=1,l=null,u=null,p=null,d=null,f=null,g=null;const v=new jf,m={},h=t.getContextAttributes();let E=null,A=null;const S=[],I=[],w=new Te;let P=null;const L=new Bt;L.viewport=new Je;const x=new Bt;x.viewport=new Je;const M=[L,x],C=new $u;let V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let le=S[$];return le===void 0&&(le=new nr,S[$]=le),le.getTargetRaySpace()},this.getControllerGrip=function($){let le=S[$];return le===void 0&&(le=new nr,S[$]=le),le.getGripSpace()},this.getHand=function($){let le=S[$];return le===void 0&&(le=new nr,S[$]=le),le.getHandSpace()};function z($){const le=I.indexOf($.inputSource);if(le===-1)return;const se=S[le];se!==void 0&&(se.update($.inputSource,$.frame,l||r),se.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",B);for(let $=0;$<S.length;$++){const le=I[$];le!==null&&(I[$]=null,S[$].disconnect(le))}V=null,W=null,v.reset();for(const $ in m)delete m[$];e.setRenderTarget(E),f=null,d=null,p=null,s=null,A=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",F),s.addEventListener("inputsourceschange",B),h.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&(p=new XRWebGLBinding(s,t)),p!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ie=null,Re=null;h.depth&&(Re=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=h.stencil?Pi:Ri,Ie=h.stencil?Ii:Ln);const Ue={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:a};d=p.createProjectionLayer(Ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new On(d.textureWidth,d.textureHeight,{format:Yt,type:en,depthTexture:new Bo(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new On(f.framebufferWidth,f.framebufferHeight,{format:Yt,type:en,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B($){for(let le=0;le<$.removed.length;le++){const se=$.removed[le],Ie=I.indexOf(se);Ie>=0&&(I[Ie]=null,S[Ie].disconnect(se))}for(let le=0;le<$.added.length;le++){const se=$.added[le];let Ie=I.indexOf(se);if(Ie===-1){for(let Ue=0;Ue<S.length;Ue++)if(Ue>=I.length){I.push(se),Ie=Ue;break}else if(I[Ue]===null){I[Ue]=se,Ie=Ue;break}if(Ie===-1)break}const Re=S[Ie];Re&&Re.connect(se)}}const J=new T,X=new T;function oe($,le,se){J.setFromMatrixPosition(le.matrixWorld),X.setFromMatrixPosition(se.matrixWorld);const Ie=J.distanceTo(X),Re=le.projectionMatrix.elements,Ue=se.projectionMatrix.elements,mt=Re[14]/(Re[10]-1),Xe=Re[14]/(Re[10]+1),R=(Re[9]+1)/Re[5],at=(Re[9]-1)/Re[5],be=(Re[8]-1)/Re[0],Ke=(Ue[8]+1)/Ue[0],Ae=mt*be,ut=mt*Ke,me=Ie/(-be+Ke),Ve=me*-be;if(le.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ve),$.translateZ(me),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Re[10]===-1)$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const At=mt+me,gt=Xe+me,b=Ae-Ve,_=ut+(Ie-Ve),k=R*Xe/gt*At,Y=at*Xe/gt*At;$.projectionMatrix.makePerspective(b,_,k,Y,At,gt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function he($,le){le===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(le.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let le=$.near,se=$.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(se=v.depthFar)),C.near=x.near=L.near=le,C.far=x.far=L.far=se,(V!==C.near||W!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,W=C.far),C.layers.mask=$.layers.mask|6,L.layers.mask=C.layers.mask&3,x.layers.mask=C.layers.mask&5;const Ie=$.parent,Re=C.cameras;he(C,Ie);for(let Ue=0;Ue<Re.length;Ue++)he(Re[Ue],Ie);Re.length===2?oe(C,L,x):C.projectionMatrix.copy(L.projectionMatrix),xe($,C,Ie)};function xe($,le,se){se===null?$.matrix.copy(le.matrixWorld):($.matrix.copy(se.matrixWorld),$.matrix.invert(),$.matrix.multiply(le.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Da*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(C)},this.getCameraTexture=function($){return m[$]};let Fe=null;function ct($,le){if(u=le.getViewerPose(l||r),g=le,u!==null){const se=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let Ie=!1;se.length!==C.cameras.length&&(C.cameras.length=0,Ie=!0);for(let Xe=0;Xe<se.length;Xe++){const R=se[Xe];let at=null;if(f!==null)at=f.getViewport(R);else{const Ke=p.getViewSubImage(d,R);at=Ke.viewport,Xe===0&&(e.setRenderTargetTextures(A,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(A))}let be=M[Xe];be===void 0&&(be=new Bt,be.layers.enable(Xe),be.viewport=new Je,M[Xe]=be),be.matrix.fromArray(R.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(R.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(at.x,at.y,at.width,at.height),Xe===0&&(C.matrix.copy(be.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ie===!0&&C.cameras.push(be)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&p){const Xe=p.getDepthInformation(se[0]);Xe&&Xe.isValid&&Xe.texture&&v.init(Xe,s.renderState)}if(Re&&Re.includes("camera-access")&&(e.state.unbindTexture(),p))for(let Xe=0;Xe<se.length;Xe++){const R=se[Xe].camera;if(R){let at=m[R];at||(at=new xl,m[R]=at);const be=p.getCameraImage(R);at.sourceTexture=be}}}for(let se=0;se<S.length;se++){const Ie=I[se],Re=S[se];Ie!==null&&Re!==void 0&&Re.update(Ie,le,l||r)}Fe&&Fe($,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const nt=new Yo;nt.setAnimationLoop(ct),this.setAnimationLoop=function($){Fe=$},this.dispose=function(){}}}const Xn=new nn,Jf=new ot;function Qf(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Ro(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,E,A,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),p(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),d(m,h),h.isMeshPhysicalMaterial&&f(m,h,S)):h.isMeshMatcapMaterial?(a(m,h),g(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),v(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,E,A):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Rt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Rt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h),A=E.envMap,S=E.envMapRotation;A&&(m.envMap.value=A,Xn.copy(S),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),m.envMapRotation.value.setFromMatrix4(Jf.makeRotationFromEuler(Xn)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,E,A){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=A*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Rt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function em(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,A){const S=A.program;n.uniformBlockBinding(E,S)}function l(E,A){let S=s[E.id];S===void 0&&(g(E),S=u(E),s[E.id]=S,E.addEventListener("dispose",m));const I=A.program;n.updateUBOMapping(E,I);const w=e.render.frame;a[E.id]!==w&&(d(E),a[E.id]=w)}function u(E){const A=p();E.__bindingPointIndex=A;const S=i.createBuffer(),I=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,I,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,S),S}function p(){for(let E=0;E<o;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const A=s[E.id],S=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let w=0,P=S.length;w<P;w++){const L=Array.isArray(S[w])?S[w]:[S[w]];for(let x=0,M=L.length;x<M;x++){const C=L[x];if(f(C,w,x,I)===!0){const V=C.__offset,W=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let F=0;F<W.length;F++){const B=W[F],J=v(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,V+z,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,z),z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,A,S,I){const w=E.value,P=A+"_"+S;if(I[P]===void 0)return typeof w=="number"||typeof w=="boolean"?I[P]=w:I[P]=w.clone(),!0;{const L=I[P];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return I[P]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(E){const A=E.uniforms;let S=0;const I=16;for(let P=0,L=A.length;P<L;P++){const x=Array.isArray(A[P])?A[P]:[A[P]];for(let M=0,C=x.length;M<C;M++){const V=x[M],W=Array.isArray(V.value)?V.value:[V.value];for(let z=0,F=W.length;z<F;z++){const B=W[z],J=v(B),X=S%I,oe=X%J.boundary,he=X+oe;S+=oe,he!==0&&I-he<J.storage&&(S+=I-he),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=J.storage}}}const w=S%I;return w>0&&(S+=I-w),E.__size=S,E.__cache={},this}function v(E){const A={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(A.boundary=4,A.storage=4):E.isVector2?(A.boundary=8,A.storage=8):E.isVector3||E.isColor?(A.boundary=16,A.storage=12):E.isVector4?(A.boundary=16,A.storage=16):E.isMatrix3?(A.boundary=48,A.storage=48):E.isMatrix4?(A.boundary=64,A.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),A}function m(E){const A=E.target;A.removeEventListener("dispose",m);const S=r.indexOf(A.__bindingPointIndex);r.splice(S,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete a[A.id]}function h(){for(const E in s)i.deleteBuffer(s[E]);r=[],s={},a={}}return{bind:c,update:l,dispose:h}}class tm{constructor(e={}){const{canvas:t=iu(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const E=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let I=!1;this._outputColorSpace=Nt;let w=0,P=0,L=null,x=-1,M=null;const C=new Je,V=new Je;let W=null;const z=new ze(0);let F=0,B=t.width,J=t.height,X=1,oe=null,he=null;const xe=new Je(0,0,B,J),Fe=new Je(0,0,B,J);let ct=!1;const nt=new ar;let $=!1,le=!1;const se=new ot,Ie=new T,Re=new Je,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Xe(){return L===null?X:1}let R=n;function at(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bs}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",Q,!1),R===null){const N="webgl2";if(R=at(N,y),R===null)throw at(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let be,Ke,Ae,ut,me,Ve,At,gt,b,_,k,Y,j,q,Me,ie,ve,Se,te,de,De,ye,ce,ke;function U(){be=new up(R),be.init(),ye=new Yf(R,be),Ke=new ip(R,be,e,ye),Ae=new Xf(R,be),Ke.reversedDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),ut=new pp(R),me=new Df,Ve=new qf(R,be,Ae,me,Ke,ye,ut),At=new ap(S),gt=new cp(S),b=new Qu(R),ce=new tp(R,b),_=new dp(R,b,ut,ce),k=new mp(R,_,b,ut),te=new fp(R,Ke,Ve),ie=new sp(me),Y=new Pf(S,At,gt,be,Ke,ce,ie),j=new Qf(S,me),q=new Uf,Me=new Gf(be),Se=new ep(S,At,gt,Ae,k,f,c),ve=new zf(S,k,Ke),ke=new em(R,ut,Ke,Ae),de=new np(R,be,ut),De=new hp(R,be,ut),ut.programs=Y.programs,S.capabilities=Ke,S.extensions=be,S.properties=me,S.renderLists=q,S.shadowMap=ve,S.state=Ae,S.info=ut}U();const ne=new Zf(S,R);this.xr=ne,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=be.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=be.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(B,J,!1))},this.getSize=function(y){return y.set(B,J)},this.setSize=function(y,N,G=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=y,J=N,t.width=Math.floor(y*X),t.height=Math.floor(N*X),G===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(B*X,J*X).floor()},this.setDrawingBufferSize=function(y,N,G){B=y,J=N,X=G,t.width=Math.floor(y*G),t.height=Math.floor(N*G),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,N,G,H){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,N,G,H),Ae.viewport(C.copy(xe).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(Fe)},this.setScissor=function(y,N,G,H){y.isVector4?Fe.set(y.x,y.y,y.z,y.w):Fe.set(y,N,G,H),Ae.scissor(V.copy(Fe).multiplyScalar(X).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(y){Ae.setScissorTest(ct=y)},this.setOpaqueSort=function(y){oe=y},this.setTransparentSort=function(y){he=y},this.getClearColor=function(y){return y.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,G=!0){let H=0;if(y){let O=!1;if(L!==null){const ee=L.texture.format;O=ee===aa||ee===sa||ee===ia}if(O){const ee=L.texture.type,ue=ee===en||ee===Ln||ee===Ti||ee===Ii||ee===ta||ee===na,ge=Se.getClearColor(),pe=Se.getClearAlpha(),Pe=ge.r,Le=ge.g,Ee=ge.b;ue?(g[0]=Pe,g[1]=Le,g[2]=Ee,g[3]=pe,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=Pe,v[1]=Le,v[2]=Ee,v[3]=pe,R.clearBufferiv(R.COLOR,0,v))}else H|=R.COLOR_BUFFER_BIT}N&&(H|=R.DEPTH_BUFFER_BIT),G&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Se.dispose(),q.dispose(),Me.dispose(),me.dispose(),At.dispose(),gt.dispose(),k.dispose(),ce.dispose(),ke.dispose(),Y.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",rn),ne.removeEventListener("sessionend",Rl),qn.stop()};function ae(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const y=ut.autoReset,N=ve.enabled,G=ve.autoUpdate,H=ve.needsUpdate,O=ve.type;U(),ut.autoReset=y,ve.enabled=N,ve.autoUpdate=G,ve.needsUpdate=H,ve.type=O}function Q(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function K(y){const N=y.target;N.removeEventListener("dispose",K),_e(N)}function _e(y){Ne(y),me.remove(y)}function Ne(y){const N=me.get(y).programs;N!==void 0&&(N.forEach(function(G){Y.releaseProgram(G)}),y.isShaderMaterial&&Y.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,G,H,O,ee){N===null&&(N=Ue);const ue=O.isMesh&&O.matrixWorld.determinant()<0,ge=Cm(y,N,G,H,O);Ae.setMaterial(H,ue);let pe=G.index,Pe=1;if(H.wireframe===!0){if(pe=_.getWireframeAttribute(G),pe===void 0)return;Pe=2}const Le=G.drawRange,Ee=G.attributes.position;let We=Le.start*Pe,et=(Le.start+Le.count)*Pe;ee!==null&&(We=Math.max(We,ee.start*Pe),et=Math.min(et,(ee.start+ee.count)*Pe)),pe!==null?(We=Math.max(We,0),et=Math.min(et,pe.count)):Ee!=null&&(We=Math.max(We,0),et=Math.min(et,Ee.count));const pt=et-We;if(pt<0||pt===1/0)return;ce.setup(O,H,ge,G,pe);let lt,it=de;if(pe!==null&&(lt=b.get(pe),it=De,it.setIndex(lt)),O.isMesh)H.wireframe===!0?(Ae.setLineWidth(H.wireframeLinewidth*Xe()),it.setMode(R.LINES)):it.setMode(R.TRIANGLES);else if(O.isLine){let we=H.linewidth;we===void 0&&(we=1),Ae.setLineWidth(we*Xe()),O.isLineSegments?it.setMode(R.LINES):O.isLineLoop?it.setMode(R.LINE_LOOP):it.setMode(R.LINE_STRIP)}else O.isPoints?it.setMode(R.POINTS):O.isSprite&&it.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)si("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))it.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const we=O._multiDrawStarts,dt=O._multiDrawCounts,Ye=O._multiDrawCount,Gt=pe?b.get(pe).bytesPerElement:1,bi=me.get(H).currentProgram.getUniforms();for(let Ht=0;Ht<Ye;Ht++)bi.setValue(R,"_gl_DrawID",Ht),it.render(we[Ht]/Gt,dt[Ht])}else if(O.isInstancedMesh)it.renderInstances(We,pt,O.count);else if(G.isInstancedBufferGeometry){const we=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,dt=Math.min(G.instanceCount,we);it.renderInstances(We,pt,dt)}else it.render(We,pt)};function rt(y,N,G){y.transparent===!0&&y.side===Jt&&y.forceSinglePass===!1?(y.side=Rt,y.needsUpdate=!0,Ns(y,N,G),y.side=gn,y.needsUpdate=!0,Ns(y,N,G),y.side=Jt):Ns(y,N,G)}this.compile=function(y,N,G=null){G===null&&(G=y),h=Me.get(G),h.init(N),A.push(h),G.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),y!==G&&y.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();const H=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ee=O.material;if(ee)if(Array.isArray(ee))for(let ue=0;ue<ee.length;ue++){const ge=ee[ue];rt(ge,G,O),H.add(ge)}else rt(ee,G,O),H.add(ee)}),h=A.pop(),H},this.compileAsync=function(y,N,G=null){const H=this.compile(y,N,G);return new Promise(O=>{function ee(){if(H.forEach(function(ue){me.get(ue).currentProgram.isReady()&&H.delete(ue)}),H.size===0){O(y);return}setTimeout(ee,10)}be.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let je=null;function mn(y){je&&je(y)}function rn(){qn.stop()}function Rl(){qn.start()}const qn=new Yo;qn.setAnimationLoop(mn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(y){je=y,ne.setAnimationLoop(y),y===null?qn.stop():qn.start()},ne.addEventListener("sessionstart",rn),ne.addEventListener("sessionend",Rl),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(N),N=ne.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,N,L),h=Me.get(y,A.length),h.init(N),A.push(h),se.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),nt.setFromProjectionMatrix(se,tn,N.reversedDepth),le=this.localClippingEnabled,$=ie.init(this.clippingPlanes,le),m=q.get(y,E.length),m.init(),E.push(m),ne.enabled===!0&&ne.isPresenting===!0){const ee=S.xr.getDepthSensingMesh();ee!==null&&Pr(ee,N,-1/0,S.sortObjects)}Pr(y,N,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(oe,he),mt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,mt&&Se.addToRenderList(m,y),this.info.render.frame++,$===!0&&ie.beginShadows();const G=h.state.shadowsArray;ve.render(G,y,N),$===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(h.setupLights(),N.isArrayCamera){const ee=N.cameras;if(O.length>0)for(let ue=0,ge=ee.length;ue<ge;ue++){const pe=ee[ue];Dl(H,O,y,pe)}mt&&Se.render(y);for(let ue=0,ge=ee.length;ue<ge;ue++){const pe=ee[ue];Pl(m,y,pe,pe.viewport)}}else O.length>0&&Dl(H,O,y,N),mt&&Se.render(y),Pl(m,y,N);L!==null&&P===0&&(Ve.updateMultisampleRenderTarget(L),Ve.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(S,y,N),ce.resetDefaultState(),x=-1,M=null,A.pop(),A.length>0?(h=A[A.length-1],$===!0&&ie.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Pr(y,N,G,H){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||nt.intersectsSprite(y)){H&&Re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(se);const ue=k.update(y),ge=y.material;ge.visible&&m.push(y,ue,ge,G,Re.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||nt.intersectsObject(y))){const ue=k.update(y),ge=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Re.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Re.copy(ue.boundingSphere.center)),Re.applyMatrix4(y.matrixWorld).applyMatrix4(se)),Array.isArray(ge)){const pe=ue.groups;for(let Pe=0,Le=pe.length;Pe<Le;Pe++){const Ee=pe[Pe],We=ge[Ee.materialIndex];We&&We.visible&&m.push(y,ue,We,G,Re.z,Ee)}}else ge.visible&&m.push(y,ue,ge,G,Re.z,null)}}const ee=y.children;for(let ue=0,ge=ee.length;ue<ge;ue++)Pr(ee[ue],N,G,H)}function Pl(y,N,G,H){const O=y.opaque,ee=y.transmissive,ue=y.transparent;h.setupLightsView(G),$===!0&&ie.setGlobalState(S.clippingPlanes,G),H&&Ae.viewport(C.copy(H)),O.length>0&&Us(O,N,G),ee.length>0&&Us(ee,N,G),ue.length>0&&Us(ue,N,G),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Dl(y,N,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[H.id]===void 0&&(h.state.transmissionRenderTarget[H.id]=new On(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?Ci:en,minFilter:Dn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ee=h.state.transmissionRenderTarget[H.id],ue=H.viewport||C;ee.setSize(ue.z*S.transmissionResolutionScale,ue.w*S.transmissionResolutionScale);const ge=S.getRenderTarget(),pe=S.getActiveCubeFace(),Pe=S.getActiveMipmapLevel();S.setRenderTarget(ee),S.getClearColor(z),F=S.getClearAlpha(),F<1&&S.setClearColor(16777215,.5),S.clear(),mt&&Se.render(G);const Le=S.toneMapping;S.toneMapping=vn;const Ee=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),h.setupLightsView(H),$===!0&&ie.setGlobalState(S.clippingPlanes,H),Us(y,G,H),Ve.updateMultisampleRenderTarget(ee),Ve.updateRenderTargetMipmap(ee),be.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let et=0,pt=N.length;et<pt;et++){const lt=N[et],it=lt.object,we=lt.geometry,dt=lt.material,Ye=lt.group;if(dt.side===Jt&&it.layers.test(H.layers)){const Gt=dt.side;dt.side=Rt,dt.needsUpdate=!0,Ll(it,G,H,we,dt,Ye),dt.side=Gt,dt.needsUpdate=!0,We=!0}}We===!0&&(Ve.updateMultisampleRenderTarget(ee),Ve.updateRenderTargetMipmap(ee))}S.setRenderTarget(ge,pe,Pe),S.setClearColor(z,F),Ee!==void 0&&(H.viewport=Ee),S.toneMapping=Le}function Us(y,N,G){const H=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ee=y.length;O<ee;O++){const ue=y[O],ge=ue.object,pe=ue.geometry,Pe=ue.group;let Le=ue.material;Le.allowOverride===!0&&H!==null&&(Le=H),ge.layers.test(G.layers)&&Ll(ge,N,G,pe,Le,Pe)}}function Ll(y,N,G,H,O,ee){y.onBeforeRender(S,N,G,H,O,ee),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(S,N,G,H,y,ee),O.transparent===!0&&O.side===Jt&&O.forceSinglePass===!1?(O.side=Rt,O.needsUpdate=!0,S.renderBufferDirect(G,N,H,O,y,ee),O.side=gn,O.needsUpdate=!0,S.renderBufferDirect(G,N,H,O,y,ee),O.side=Jt):S.renderBufferDirect(G,N,H,O,y,ee),y.onAfterRender(S,N,G,H,O,ee)}function Ns(y,N,G){N.isScene!==!0&&(N=Ue);const H=me.get(y),O=h.state.lights,ee=h.state.shadowsArray,ue=O.state.version,ge=Y.getParameters(y,O.state,ee,N,G),pe=Y.getProgramCacheKey(ge);let Pe=H.programs;H.environment=y.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(y.isMeshStandardMaterial?gt:At).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Pe===void 0&&(y.addEventListener("dispose",K),Pe=new Map,H.programs=Pe);let Le=Pe.get(pe);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===ue)return Nl(y,ge),Le}else ge.uniforms=Y.getUniforms(y),y.onBeforeCompile(ge,S),Le=Y.acquireProgram(ge,pe),Pe.set(pe,Le),H.uniforms=ge.uniforms;const Ee=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),Nl(y,ge),H.needsLights=Rm(y),H.lightsStateVersion=ue,H.needsLights&&(Ee.ambientLightColor.value=O.state.ambient,Ee.lightProbe.value=O.state.probe,Ee.directionalLights.value=O.state.directional,Ee.directionalLightShadows.value=O.state.directionalShadow,Ee.spotLights.value=O.state.spot,Ee.spotLightShadows.value=O.state.spotShadow,Ee.rectAreaLights.value=O.state.rectArea,Ee.ltc_1.value=O.state.rectAreaLTC1,Ee.ltc_2.value=O.state.rectAreaLTC2,Ee.pointLights.value=O.state.point,Ee.pointLightShadows.value=O.state.pointShadow,Ee.hemisphereLights.value=O.state.hemi,Ee.directionalShadowMap.value=O.state.directionalShadowMap,Ee.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ee.spotShadowMap.value=O.state.spotShadowMap,Ee.spotLightMatrix.value=O.state.spotLightMatrix,Ee.spotLightMap.value=O.state.spotLightMap,Ee.pointShadowMap.value=O.state.pointShadowMap,Ee.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Le,H.uniformsList=null,Le}function Ul(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Rs.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Nl(y,N){const G=me.get(y);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Cm(y,N,G,H,O){N.isScene!==!0&&(N=Ue),Ve.resetTextureUnits();const ee=N.fog,ue=H.isMeshStandardMaterial?N.environment:null,ge=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ni,pe=(H.isMeshStandardMaterial?gt:At).get(H.envMap||ue),Pe=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!G.morphAttributes.position,We=!!G.morphAttributes.normal,et=!!G.morphAttributes.color;let pt=vn;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pt=S.toneMapping);const lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=lt!==void 0?lt.length:0,we=me.get(H),dt=h.state.lights;if($===!0&&(le===!0||y!==M)){const It=y===M&&H.id===x;ie.setState(H,y,It)}let Ye=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==dt.state.version||we.outputColorSpace!==ge||O.isBatchedMesh&&we.batching===!1||!O.isBatchedMesh&&we.batching===!0||O.isBatchedMesh&&we.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&we.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&we.instancing===!1||!O.isInstancedMesh&&we.instancing===!0||O.isSkinnedMesh&&we.skinning===!1||!O.isSkinnedMesh&&we.skinning===!0||O.isInstancedMesh&&we.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&we.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&we.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&we.instancingMorph===!1&&O.morphTexture!==null||we.envMap!==pe||H.fog===!0&&we.fog!==ee||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==Le||we.morphTargets!==Ee||we.morphNormals!==We||we.morphColors!==et||we.toneMapping!==pt||we.morphTargetsCount!==it)&&(Ye=!0):(Ye=!0,we.__version=H.version);let Gt=we.currentProgram;Ye===!0&&(Gt=Ns(H,N,O));let bi=!1,Ht=!1,Vi=!1;const ht=Gt.getUniforms(),Wt=we.uniforms;if(Ae.useProgram(Gt.program)&&(bi=!0,Ht=!0,Vi=!0),H.id!==x&&(x=H.id,Ht=!0),bi||M!==y){Ae.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ht.setValue(R,"projectionMatrix",y.projectionMatrix),ht.setValue(R,"viewMatrix",y.matrixWorldInverse);const Ut=ht.map.cameraPosition;Ut!==void 0&&Ut.setValue(R,Ie.setFromMatrixPosition(y.matrixWorld)),Ke.logarithmicDepthBuffer&&ht.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ht.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ht=!0,Vi=!0)}if(O.isSkinnedMesh){ht.setOptional(R,O,"bindMatrix"),ht.setOptional(R,O,"bindMatrixInverse");const It=O.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ht.setValue(R,"boneTexture",It.boneTexture,Ve))}O.isBatchedMesh&&(ht.setOptional(R,O,"batchingTexture"),ht.setValue(R,"batchingTexture",O._matricesTexture,Ve),ht.setOptional(R,O,"batchingIdTexture"),ht.setValue(R,"batchingIdTexture",O._indirectTexture,Ve),ht.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&ht.setValue(R,"batchingColorTexture",O._colorsTexture,Ve));const Xt=G.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&te.update(O,G,Gt),(Ht||we.receiveShadow!==O.receiveShadow)&&(we.receiveShadow=O.receiveShadow,ht.setValue(R,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Wt.envMap.value=pe,Wt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Wt.envMapIntensity.value=N.environmentIntensity),Ht&&(ht.setValue(R,"toneMappingExposure",S.toneMappingExposure),we.needsLights&&Im(Wt,Vi),ee&&H.fog===!0&&j.refreshFogUniforms(Wt,ee),j.refreshMaterialUniforms(Wt,H,X,J,h.state.transmissionRenderTarget[y.id]),Rs.upload(R,Ul(we),Wt,Ve)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Rs.upload(R,Ul(we),Wt,Ve),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ht.setValue(R,"center",O.center),ht.setValue(R,"modelViewMatrix",O.modelViewMatrix),ht.setValue(R,"normalMatrix",O.normalMatrix),ht.setValue(R,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const It=H.uniformsGroups;for(let Ut=0,Dr=It.length;Ut<Dr;Ut++){const Yn=It[Ut];ke.update(Yn,Gt),ke.bind(Yn,Gt)}}return Gt}function Im(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Rm(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,N,G){const H=me.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),me.get(y.texture).__webglTexture=N,me.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:G,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const G=me.get(y);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const Pm=R.createFramebuffer();this.setRenderTarget=function(y,N=0,G=0){L=y,w=N,P=G;let H=!0,O=null,ee=!1,ue=!1;if(y){const pe=me.get(y);if(pe.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(pe.__webglFramebuffer===void 0)Ve.setupRenderTarget(y);else if(pe.__hasExternalTextures)Ve.rebindTextures(y,me.get(y.texture).__webglTexture,me.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ee=y.depthTexture;if(pe.__boundDepthTexture!==Ee){if(Ee!==null&&me.has(Ee)&&(y.width!==Ee.image.width||y.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(y)}}const Pe=y.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ue=!0);const Le=me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?O=Le[N][G]:O=Le[N],ee=!0):y.samples>0&&Ve.useMultisampledRTT(y)===!1?O=me.get(y).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[G]:O=Le,C.copy(y.viewport),V.copy(y.scissor),W=y.scissorTest}else C.copy(xe).multiplyScalar(X).floor(),V.copy(Fe).multiplyScalar(X).floor(),W=ct;if(G!==0&&(O=Pm),Ae.bindFramebuffer(R.FRAMEBUFFER,O)&&H&&Ae.drawBuffers(y,O),Ae.viewport(C),Ae.scissor(V),Ae.setScissorTest(W),ee){const pe=me.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe.__webglTexture,G)}else if(ue){const pe=N;for(let Pe=0;Pe<y.textures.length;Pe++){const Le=me.get(y.textures[Pe]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Pe,Le.__webglTexture,G,pe)}}else if(y!==null&&G!==0){const pe=me.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,pe.__webglTexture,G)}x=-1},this.readRenderTargetPixels=function(y,N,G,H,O,ee,ue,ge=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe){Ae.bindFramebuffer(R.FRAMEBUFFER,pe);try{const Pe=y.textures[ge],Le=Pe.format,Ee=Pe.type;if(!Ke.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-H&&G>=0&&G<=y.height-O&&(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ge),R.readPixels(N,G,H,O,ye.convert(Le),ye.convert(Ee),ee))}finally{const Pe=L!==null?me.get(L).__webglFramebuffer:null;Ae.bindFramebuffer(R.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(y,N,G,H,O,ee,ue,ge=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe)if(N>=0&&N<=y.width-H&&G>=0&&G<=y.height-O){Ae.bindFramebuffer(R.FRAMEBUFFER,pe);const Pe=y.textures[ge],Le=Pe.format,Ee=Pe.type;if(!Ke.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,We),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ge),R.readPixels(N,G,H,O,ye.convert(Le),ye.convert(Ee),0);const et=L!==null?me.get(L).__webglFramebuffer:null;Ae.bindFramebuffer(R.FRAMEBUFFER,et);const pt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await su(R,pt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,We),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(We),R.deleteSync(pt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,G=0){const H=Math.pow(2,-G),O=Math.floor(y.image.width*H),ee=Math.floor(y.image.height*H),ue=N!==null?N.x:0,ge=N!==null?N.y:0;Ve.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,ue,ge,O,ee),Ae.unbindTexture()};const Dm=R.createFramebuffer(),Lm=R.createFramebuffer();this.copyTextureToTexture=function(y,N,G=null,H=null,O=0,ee=null){ee===null&&(O!==0?(si("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=O,O=0):ee=0);let ue,ge,pe,Pe,Le,Ee,We,et,pt;const lt=y.isCompressedTexture?y.mipmaps[ee]:y.image;if(G!==null)ue=G.max.x-G.min.x,ge=G.max.y-G.min.y,pe=G.isBox3?G.max.z-G.min.z:1,Pe=G.min.x,Le=G.min.y,Ee=G.isBox3?G.min.z:0;else{const Xt=Math.pow(2,-O);ue=Math.floor(lt.width*Xt),ge=Math.floor(lt.height*Xt),y.isDataArrayTexture?pe=lt.depth:y.isData3DTexture?pe=Math.floor(lt.depth*Xt):pe=1,Pe=0,Le=0,Ee=0}H!==null?(We=H.x,et=H.y,pt=H.z):(We=0,et=0,pt=0);const it=ye.convert(N.format),we=ye.convert(N.type);let dt;N.isData3DTexture?(Ve.setTexture3D(N,0),dt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ve.setTexture2DArray(N,0),dt=R.TEXTURE_2D_ARRAY):(Ve.setTexture2D(N,0),dt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const Ye=R.getParameter(R.UNPACK_ROW_LENGTH),Gt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),bi=R.getParameter(R.UNPACK_SKIP_PIXELS),Ht=R.getParameter(R.UNPACK_SKIP_ROWS),Vi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,lt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,lt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Pe),R.pixelStorei(R.UNPACK_SKIP_ROWS,Le),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ee);const ht=y.isDataArrayTexture||y.isData3DTexture,Wt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const Xt=me.get(y),It=me.get(N),Ut=me.get(Xt.__renderTarget),Dr=me.get(It.__renderTarget);Ae.bindFramebuffer(R.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let Yn=0;Yn<pe;Yn++)ht&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.get(y).__webglTexture,O,Ee+Yn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.get(N).__webglTexture,ee,pt+Yn)),R.blitFramebuffer(Pe,Le,ue,ge,We,et,ue,ge,R.DEPTH_BUFFER_BIT,R.NEAREST);Ae.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||me.has(y)){const Xt=me.get(y),It=me.get(N);Ae.bindFramebuffer(R.READ_FRAMEBUFFER,Dm),Ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,Lm);for(let Ut=0;Ut<pe;Ut++)ht?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Xt.__webglTexture,O,Ee+Ut):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Xt.__webglTexture,O),Wt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,It.__webglTexture,ee,pt+Ut):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,It.__webglTexture,ee),O!==0?R.blitFramebuffer(Pe,Le,ue,ge,We,et,ue,ge,R.COLOR_BUFFER_BIT,R.NEAREST):Wt?R.copyTexSubImage3D(dt,ee,We,et,pt+Ut,Pe,Le,ue,ge):R.copyTexSubImage2D(dt,ee,We,et,Pe,Le,ue,ge);Ae.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Wt?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(dt,ee,We,et,pt,ue,ge,pe,it,we,lt.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(dt,ee,We,et,pt,ue,ge,pe,it,lt.data):R.texSubImage3D(dt,ee,We,et,pt,ue,ge,pe,it,we,lt):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ee,We,et,ue,ge,it,we,lt.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ee,We,et,lt.width,lt.height,it,lt.data):R.texSubImage2D(R.TEXTURE_2D,ee,We,et,ue,ge,it,we,lt);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ye),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Gt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,bi),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Vi),ee===0&&N.generateMipmaps&&R.generateMipmap(dt),Ae.unbindTexture()},this.copyTextureToTexture3D=function(y,N,G=null,H=null,O=0){return si('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,G,H,O)},this.initRenderTarget=function(y){me.get(y).__webglFramebuffer===void 0&&Ve.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ve.setTextureCube(y,0):y.isData3DTexture?Ve.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ve.setTexture2DArray(y,0):Ve.setTexture2D(y,0),Ae.unbindTexture()},this.resetState=function(){w=0,P=0,L=null,Ae.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const Al={type:"change"},Cr={type:"start"},El={type:"end"},Ds=new ls,bl=new Cn,nm=Math.cos(70*nu.DEG2RAD),yt=new T,Lt=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ir=1e-6;class im extends Zu{constructor(e,t=null){super(e,t),this.state=Qe.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jn.ROTATE,MIDDLE:jn.DOLLY,RIGHT:jn.PAN},this.touches={ONE:Zn.ROTATE,TWO:Zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Nn,this._lastTargetPosition=new T,this._quat=new Nn().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xo,this._sphericalDelta=new Xo,this._scale=1,this._panOffset=new T,this._rotateStart=new Te,this._rotateEnd=new Te,this._rotateDelta=new Te,this._panStart=new Te,this._panEnd=new Te,this._panDelta=new Te,this._dollyStart=new Te,this._dollyEnd=new Te,this._dollyDelta=new Te,this._dollyDirection=new T,this._mouse=new Te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=am.bind(this),this._onPointerDown=sm.bind(this),this._onPointerUp=rm.bind(this),this._onContextMenu=pm.bind(this),this._onMouseWheel=cm.bind(this),this._onKeyDown=um.bind(this),this._onTouchStart=dm.bind(this),this._onTouchMove=hm.bind(this),this._onMouseDown=om.bind(this),this._onMouseMove=lm.bind(this),this._interceptControlDown=fm.bind(this),this._interceptControlUp=mm.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Al),this.update(),this.state=Qe.NONE}update(e=null){const t=this.object.position;yt.copy(t).sub(this.target),yt.applyQuaternion(this._quat),this._spherical.setFromVector3(yt),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Lt:n>Math.PI&&(n-=Lt),s<-Math.PI?s+=Lt:s>Math.PI&&(s-=Lt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(yt.setFromSpherical(this._spherical),yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=yt.length();r=this._clampDistance(o*this._scale);const c=o-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),a=!!c}else if(this.object.isOrthographicCamera){const o=new T(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=c!==this.object.zoom;const l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),r=yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Ds.origin.copy(this.object.position),Ds.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ds.direction))<nm?this.object.lookAt(this.target):(bl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ds.intersectPlane(bl,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ir||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ir||this._lastTargetPosition.distanceToSquared(this.target)>Ir?(this.dispatchEvent(Al),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Lt/60*this.autoRotateSpeed*e:Lt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yt.setFromMatrixColumn(t,0),yt.multiplyScalar(-e),this._panOffset.add(yt)}_panUp(e,t){this.screenSpacePanning===!0?yt.setFromMatrixColumn(t,1):(yt.setFromMatrixColumn(t,0),yt.crossVectors(this.object.up,yt)),yt.multiplyScalar(e),this._panOffset.add(yt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;yt.copy(s).sub(this.target);let a=yt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,a=t-n.top,r=n.width,o=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Lt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Lt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Lt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Lt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Lt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Lt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function sm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function am(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function rm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(El),this.state=Qe.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function om(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case jn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qe.DOLLY;break;case jn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}break;case jn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(Cr)}function lm(i){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function cm(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(i.preventDefault(),this.dispatchEvent(Cr),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(El))}function um(i){this.enabled!==!1&&this._handleKeyDown(i)}function dm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Zn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qe.TOUCH_ROTATE;break;case Zn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case Zn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qe.TOUCH_DOLLY_PAN;break;case Zn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(Cr)}function hm(i){switch(this._trackPointer(i),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qe.NONE}}function pm(i){this.enabled!==!1&&i.preventDefault()}function fm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gm=new Set(["Company","Model lab","Research lab"]),_m=new Set(["Application","Agent","Framework","Model","Platform","Project","Protocol","Standard"]),vm=new Set(["materials","equipment","fabrication","compute","datacenter","robotics"]),wl={organization:{label:"Company / organization",short:"Company",symbol:"●"},hardware:{label:"Hardware / physical product",short:"Hardware",symbol:"■"},software:{label:"Software / model product",short:"Software",symbol:"◆"}};function Rr(i){return gm.has(i.type)?"organization":_m.has(i.type)||i.cluster==="eda-ip"||i.cluster==="robotics-software"?"software":vm.has(i.layer)?"hardware":"software"}const Tl=new Set(["RUNS_ON","TRAINS_ON","DEPENDS_ON","USES_MODEL_FROM"]),Cl=new Set(["PARTNERS_WITH","INTEGRATES_WITH","COMPETES_WITH"]),Sm=(i,e,t)=>{if(Cl.has(i.type))return i.source===e?i.target:i.target===e?i.source:null;const[n,s]=Tl.has(i.type)?[i.source,i.target]:[i.target,i.source];return t==="upstream"?n===e?s:null:s===e?n:null};class ym{constructor(e,t,n,s){this.mount=e,this.entities=t,this.relationships=n,this.onSelect=s,this.nodes=new Map,this.labelEls=new Map,this.activeLabelIds=new Set,this.lines=[],this.visibleLayers=new Set($e.map(r=>r.id)),this.activeGeography="all",this.relationFilter="ALL",this.timeYear=2026,this.view="ecosystem",this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.scene=new Iu,this.scene.fog=new ir(592652,.0047),this.camera=new Bt(42,innerWidth/innerHeight,.1,1200),this.camera.position.set(112,58,135),this.renderer=new tm({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.6)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=Nt,this.renderer.toneMappingExposure=1.22,e.append(this.renderer.domElement),this.controls=new im(this.camera,this.renderer.domElement),Object.assign(this.controls,{enableDamping:!0,dampingFactor:.065,minDistance:24,maxDistance:280,enablePan:!0,screenSpacePanning:!0,zoomToCursor:!0,rotateSpeed:.48,zoomSpeed:.82,panSpeed:.72,autoRotate:!this.reduced,autoRotateSpeed:.1}),this.controls.target.set(10,5,0),this.scene.add(new Vu(15791601,2106666,2.05)),this.scene.add(new Yu(12109250,.42));const a=new Xu(14726776,135,250);a.position.set(10,80,35),this.scene.add(a),this.universe=new Gn,this.scene.add(this.universe),this.buildArchitecture(),this.buildNodes(),this.buildGravityRanking(),this.buildModelRanking(),this.bind(),this.animate()}buildArchitecture(){this.layerGroups=new Map,this.architectureGuides=[],$e.forEach((a,r)=>{const o=new Gn;o.userData.layer=a.id,this.universe.add(o),this.layerGroups.set(a.id,o);const c=new kt(new mr(25+r*3.1,.035,3,96),new Fi({color:a.color,transparent:!0,opacity:.13,depthWrite:!1}));c.rotation.x=Math.PI/2,c.position.set(10,a.y,0),o.add(c),this.architectureGuides.push(c);const l=new kt(new pr(24+r*3.1,24.12+r*3.1,96),new Fi({color:a.color,transparent:!0,opacity:.035,side:Jt,depthWrite:!1}));l.rotation.x=Math.PI/2,l.position.set(10,a.y,0),o.add(l),this.architectureGuides.push(l)});const e=new ju(280,40,4409417,2106406);e.position.y=-61,e.material.transparent=!0,e.material.opacity=.28,this.universe.add(e),this.architectureGuides.push(e);const t=new Ms({color:16777215,transparent:!0,opacity:.12}),n=[new T(10,-60,0),new T(10,72,0)],s=new or(new Tt().setFromPoints(n),t);this.universe.add(s),this.architectureGuides.push(s)}buildNodes(){const e={organization:new fr(1,12,8),hardware:new _i(1.45,1.45,1.45),software:new hr(1.15,0)},t=new Map($e.map(n=>[n.id,this.entities.filter(s=>s.layer===n.id)]));this.entities.forEach(n=>{const s=$e.find(S=>S.id===n.layer),a=t.get(n.layer),r=n.positionIndex,o=[...new Set(a.map(S=>S.cluster))],c=o.indexOf(n.cluster),l=a.filter(S=>S.cluster===n.cluster),u=l.indexOf(n),p=Math.PI*2/o.length,d=c*p+(u-(l.length-1)/2)*Math.min(.13,p/Math.max(2,l.length))+$e.indexOf(s)*.71,f=24+$e.indexOf(s)*3.05+u%5*2.15,g=.58+n.importanceLevel*.28,v=Rr(n),m=e[v],h=v==="organization"?{roughness:.78,metalness:.05,emissiveIntensity:.045,opacity:.94}:v==="hardware"?{roughness:.28,metalness:.76,emissiveIntensity:.07,opacity:.96}:{roughness:.42,metalness:.12,emissiveIntensity:.22,opacity:.84},E=new Bu({color:s.color,emissive:s.color,transparent:!0,...h}),A=new kt(m,E);if(v==="software"&&(A.rotation.y=Math.PI/4),A.position.set(10+Math.cos(d)*f,s.y+(u%4-1.5)*1.05,Math.sin(d)*f),A.userData={entity:n,kind:v,baseScale:g,baseEmissive:h.emissiveIntensity,baseOpacity:h.opacity},A.scale.setScalar(this.reduced?g:.01),this.layerGroups.get(n.layer).add(A),this.nodes.set(n.id,A),this.reduced||setTimeout(()=>{A.scale.setScalar(g)},80+$e.indexOf(s)*40+r%40*8),n.importanceLevel===3||n.type==="Model"&&n.importanceLevel>=2){const S=document.createElement("span");S.className="node-label",S.textContent=n.name,S.dataset.id=n.id,this.mount.append(S),this.labelEls.set(n.id,S)}})}buildGravityRanking(){const e=new Map(this.entities.map(n=>[n.id,0])),t={confirmed:1,reported:.65,inferred:.25,representative:.05};this.relationships.forEach(n=>{const s=t[n.status]??.5;e.has(n.source)&&e.set(n.source,e.get(n.source)+s),e.has(n.target)&&e.set(n.target,e.get(n.target)+s)}),this.gravityScore=new Map(this.entities.map(n=>[n.id,n.importanceLevel*20+Math.sqrt(e.get(n.id)||0)*8])),this.gravityEntities=[...this.entities].sort((n,s)=>this.gravityScore.get(s.id)-this.gravityScore.get(n.id)||n.name.localeCompare(s.name)),this.gravityIndex=new Map(this.gravityEntities.map((n,s)=>[n.id,s])),this.gravityEntities.slice(0,45).forEach(n=>{if(this.labelEls.has(n.id))return;const s=document.createElement("span");s.className="node-label gravity-label",s.textContent=n.name,s.dataset.id=n.id,s.dataset.gravityOnly="true",this.mount.append(s),this.labelEls.set(n.id,s)})}buildModelRanking(){const e=new Map(this.entities.filter(n=>n.type==="Model").map(n=>[n.id,n])),t=new Map;this.relationships.filter(n=>n.type==="DEVELOPS"&&e.has(n.target)).forEach(n=>{t.has(n.source)||t.set(n.source,[]);const s=t.get(n.source);s.includes(n.target)||s.push(n.target)}),this.modelPortfolioByModel=new Map,this.modelEntities=[],t.forEach((n,s)=>{const a=n.map(o=>e.get(o)).filter(Boolean);if(!a.length)return;const r={producer:s,root:a[0].id,items:a};a.forEach(o=>this.modelPortfolioByModel.set(o.id,r)),this.modelEntities.push(a[0])}),this.modelEntities.sort((n,s)=>s.importanceLevel-n.importanceLevel||n.name.localeCompare(s.name)),this.modelOrder=new Map(this.modelEntities.map((n,s)=>[n.id,s])),this.modelEntities.forEach(n=>this.ensureLabel(n.id,"model-label","modelOnly"))}ensureLabel(e,t="",n=null){if(this.labelEls.has(e)){const r=this.labelEls.get(e);return t&&r.classList.add(t),n&&(r.dataset[n]="true"),r}const s=this.nodes.get(e)?.userData.entity;if(!s)return null;const a=document.createElement("span");return a.className=`node-label ${t}`.trim(),a.textContent=s.name,a.dataset.id=e,n&&(a.dataset[n]="true"),this.mount.append(a),this.labelEls.set(e,a),a}setActiveLabels(e=[]){this.activeLabelIds=new Set(e),this.labelEls.forEach((t,n)=>t.classList.toggle("active-node-label",this.activeLabelIds.has(n))),this.activeLabelIds.forEach(t=>this.ensureLabel(t,"active-node-label"))}bind(){this.raycaster=new Ku,this.pointer=new Te;let e={x:0,y:0};this.renderer.domElement.addEventListener("pointerdown",t=>e={x:t.clientX,y:t.clientY}),this.renderer.domElement.addEventListener("pointerup",t=>{Math.hypot(t.clientX-e.x,t.clientY-e.y)>5||this.pick(t)}),this.renderer.domElement.addEventListener("pointermove",t=>{this.pointer.set(t.clientX/innerWidth*2-1,-t.clientY/innerHeight*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.raycaster.intersectObjects([...this.nodes.values()],!1)[0];this.renderer.domElement.style.cursor=n?"pointer":"grab"}),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)})}pick(e){this.pointer.set(e.clientX/innerWidth*2-1,-e.clientY/innerHeight*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObjects([...this.nodes.values()].filter(n=>n.visible),!1)[0];t&&this.onSelect(t.object.userData.entity.id)}animate(){requestAnimationFrame(()=>this.animate()),this.controls.update(),this.updateCamera(),this.updateNodePositions(),this.updateLabels(),this.renderer.render(this.scene,this.camera)}updateCamera(){if(!this.tween)return;const e=Math.min(1,(performance.now()-this.tween.start)/this.tween.duration),t=1-Math.pow(1-e,3);this.camera.position.lerpVectors(this.tween.from,this.tween.to,t),this.controls.target.lerpVectors(this.tween.targetFrom,this.tween.targetTo,t),e===1&&(this.tween=null)}updateNodePositions(){const e=performance.now();this.nodes.forEach(t=>{const n=t.userData.move;if(!n)return;const s=Math.min(1,(e-n.start)/n.duration),a=1-Math.pow(1-s,3);t.position.lerpVectors(n.from,n.to,a),s===1&&(t.userData.move=null)})}updateLabels(){const e=[],t=new T;this.labelEls.forEach((s,a)=>{const r=this.nodes.get(a),o=this.activeLabelIds.has(a);if(s.dataset.gravityOnly&&this.view!=="gravity"&&!o||s.dataset.modelOnly&&this.view!=="models"&&r?.userData.entity.importanceLevel<2&&!o||!r?.visible||!r.parent?.visible){s.hidden=!0;return}const c=r.getWorldPosition(new T);if(t.copy(c).project(this.camera),!(t.z<1&&Math.abs(t.x)<1.05&&Math.abs(t.y)<1.05&&this.camera.position.distanceTo(c)<185)){s.hidden=!0;return}e.push({el:s,n:r,active:o,x:(t.x*.5+.5)*innerWidth+10,y:(-t.y*.5+.5)*innerHeight-4,importance:r.userData.entity.importanceLevel})}),e.sort((s,a)=>Number(a.active)-Number(s.active)||a.importance-s.importance||a.n.material.opacity-s.n.material.opacity);const n=[];e.forEach(s=>{const a=Math.max(38,s.el.textContent.length*5.2),r=s.active?[0,-16,16,-32,32]:[0];let o=null;for(const c of r){const l={left:s.x-3,right:s.x+a,top:s.y+c-7,bottom:s.y+c+7};if(!n.some(u=>!(l.right<u.left||l.left>u.right||l.bottom<u.top||l.top>u.bottom))){o={box:l,dy:c};break}}!o&&s.active&&(o={box:{left:s.x-3,right:s.x+a,top:s.y-7,bottom:s.y+7},dy:0}),s.el.hidden=!o,o&&(n.push(o.box),s.el.style.transform=`translate(${s.x}px,${s.y+o.dy}px)`,s.el.style.opacity=s.active?"1":s.n.material.opacity<.5?".28":".94")})}focus(e,t=30){const n=this.nodes.get(e);if(!n)return;this.controls.autoRotate=!1;const s=n.getWorldPosition(new T),a=this.camera.position.clone().sub(this.controls.target).normalize();this.tween={start:performance.now(),duration:this.reduced?1:900,from:this.camera.position.clone(),to:s.clone().add(a.multiplyScalar(t)),targetFrom:this.controls.target.clone(),targetTo:s}}clearLines(){this.lines.forEach(e=>{this.scene.remove(e),e.traverse(t=>{t.geometry?.dispose(),t.material?.dispose()})}),this.lines=[]}relationshipVisible(e){return(!e.activeFrom||e.activeFrom<=this.timeYear)&&(!e.activeTo||e.activeTo>=this.timeYear)}relationshipWeight(e){const t={confirmed:1,reported:.68,inferred:.38,representative:.23}[e.status]??.5,n=e.activeFrom||e.activeTo;return t*(n?1:.72)}makeLine(e,t,n,s=!1,a=null,r=null){const o=typeof n=="string"?{type:n,status:"representative"}:n,c=o.type;if(!this.relationshipVisible(o))return;let l=e.getWorldPosition(new T),u=t.getWorldPosition(new T);const p=Cl.has(c);Tl.has(c)&&([l,u]=[u,l]);const d=l.clone().lerp(u,.5);d.x+=Math.min(14,l.distanceTo(u)*.12);const f=new ku(l,d,u),g=this.relationshipWeight(o),v=a??(s?Math.max(.38,.95*g):Math.max(.08,.38*g)),m=r??(c==="COMPETES_WITH"?11893619:c==="INVESTS_IN"?12755293:s?14729613:8889764),h=new Gn,E=new or(new Tt().setFromPoints(f.getPoints(28)),new Ms({color:m,transparent:!0,opacity:v,depthWrite:!1}));if(h.add(E),!p){const S=f.getPoint(.76),I=f.getTangent(.76).normalize(),w=(s?1.05:.62)*(.7+g*.45),P=new kt(new cr(w*.38,w,7),new Fi({color:m,transparent:!0,opacity:Math.min(1,v*1.35),depthWrite:!1}));P.position.copy(S),P.quaternion.setFromUnitVectors(new T(0,1,0),I),h.add(P)}h.userData={type:c,status:o.status,activeFrom:o.activeFrom,activeTo:o.activeTo,weight:g},this.scene.add(h),this.lines.push(h)}select(e){if(this.selectedId=e,this.view==="gravity")return this.selectGravity(e);if(this.view==="models")return this.nodes.get(e)?.userData.entity.type==="Model"?this.selectModel(e):this.selectModelNode(e);this.clearLines();const t=this.relationships.filter(s=>(s.source===e||s.target===e)&&(this.relationFilter==="ALL"||s.type===this.relationFilter)&&this.relationshipVisible(s)),n=new Set([e]);t.forEach(s=>{n.add(s.source),n.add(s.target);const a=this.nodes.get(s.source),r=this.nodes.get(s.target);a&&r&&this.makeLine(a,r,s,!0)}),this.setActiveLabels(n),this.nodes.forEach((s,a)=>{s.material.opacity=n.has(a)?.98:.11,s.material.emissiveIntensity=a===e?.75:n.has(a)?.22:.02,s.scale.setScalar(s.userData.baseScale*(a===e?1.55:1))}),this.focus(e)}selectGravity(e,t=6,n=240){clearTimeout(this.gravityTimer);const s=this.relationships.filter(u=>(this.relationFilter==="ALL"||u.type===this.relationFilter)&&this.relationshipVisible(u)&&this.nodes.get(u.source)?.visible&&this.nodes.get(u.source)?.parent?.visible&&this.nodes.get(u.target)?.visible&&this.nodes.get(u.target)?.parent?.visible),a=new Map([[e,0]]),r=[e];for(;r.length&&a.size<n;){const u=r.shift(),p=a.get(u);if(!(p>=t))for(const d of s){const f=d.source===u?d.target:d.target===u?d.source:null;if(!(!f||a.has(f))&&(a.set(f,p+1),r.push(f),a.size>=n))break}}const o=[...a.keys()],c=new Set(o),l=s.filter(u=>c.has(u.source)&&c.has(u.target));return this.traceGraph(e,o,l,a),this.frameNodes(o),{gravity:!0,nodes:o.length,edges:l.length,hops:Math.max(0,...a.values()),truncated:o.length>=n}}buildModelBranch(e,t,n=6,s=90){const a=new Map([[e,0]]),r=[e],o=[e],c=[],l=t==="downstream"?this.relationships.filter(u=>u.type==="DEVELOPS"&&u.target===e&&this.relationshipVisible(u)).map(u=>u.source):[];for(;o.length&&r.length<s;){const u=o.shift(),p=a.get(u);if(p>=n)continue;const d=u===e&&t==="downstream"?[e,...l]:[u];for(const f of d)for(const g of this.relationships){if(this.relationFilter!=="ALL"&&g.type!==this.relationFilter||!this.relationshipVisible(g))continue;const v=Sm(g,f,t),m=this.nodes.get(v)?.userData.entity;if(!(!v||!m||v===e||f!==e&&m.type==="Model"||a.has(v)||this.activeGeography!=="all"&&m.geography!==this.activeGeography||!this.visibleLayers.has(m.layer))&&(a.set(v,p+1),r.push(v),o.push(v),c.push(f===e?g:{...g,source:g.source===f?e:g.source,target:g.target===f?e:g.target}),r.length>=s))break}}return{nodes:r,edges:c,hops:a,maxDepth:Math.max(0,...a.values()),truncated:r.length>=s}}selectModel(e){clearTimeout(this.modelTimer);const t=this.buildModelBranch(e,"upstream"),n=this.buildModelBranch(e,"downstream"),s=new Set(t.nodes),a=n.nodes.filter(p=>p===e||!s.has(p)),r=[...new Set([...t.nodes,...a])],o=new Set(r);this.activeModelRoot=e,this.modelTreeIds=o,this.modelTree={creation:t,inference:{...n,nodes:a}},this.applyVisibility();const c=this.reduced?1:850,l=new Map([[e,new T(0,0,0)]]),u=(p,d)=>{for(let f=1;f<=p.maxDepth;f++){const g=p.nodes.filter(m=>m!==e&&p.hops.get(m)===f&&!l.has(m)),v=Math.min(116,Math.max(16,(g.length-1)*8.5));g.forEach((m,h)=>l.set(m,new T(g.length===1?0:-v/2+v*h/(g.length-1),d*f*15,(h%3-1)*1.8)))}};return u(t,1),u(this.modelTree.inference,-1),this.nodes.forEach((p,d)=>{o.has(d)&&(this.ensureLabel(d,d===e?"model-label":""),p.scale.setScalar(p.userData.baseScale*(d===e?1.85:1.18)),p.userData.move={start:performance.now(),duration:c,from:p.position.clone(),to:l.get(d)||new T})}),this.camera.up.set(0,1,0),this.cameraCommand("front"),this.modelTimer=setTimeout(()=>this.drawModelTree(),this.reduced?5:900),{model:!0,creation:t.nodes.length-1,inference:a.length-1,creationDepth:t.maxDepth,inferenceDepth:n.maxDepth,truncated:t.truncated||n.truncated}}drawModelTree(){if(this.view!=="models"||!this.modelTree)return;this.clearLines();const e=(t,n)=>t.edges.forEach(s=>{if(!this.modelTreeIds.has(s.source)||!this.modelTreeIds.has(s.target))return;const a=this.nodes.get(s.source),r=this.nodes.get(s.target);a?.visible&&r?.visible&&this.makeLine(a,r,s,!0,.82,n)});e(this.modelTree.creation,14201972),e(this.modelTree.inference,7911082),this.frameNodes([...this.modelTreeIds],550)}selectModelNode(e){if(this.modelTreeIds?.has(e))return this.nodes.forEach((t,n)=>{const s=this.modelTreeIds.has(n);t.material.opacity=s?n===e?1:.72:.03,t.material.emissiveIntensity=n===e?.9:s?.18:.005,t.scale.setScalar(t.userData.baseScale*(n===e?1.65:1.12))}),this.focus(e,34),{modelNode:!0}}trace(e){this.clearLines();const t=new Set(e);this.setActiveLabels(t),this.nodes.forEach((n,s)=>{n.material.opacity=t.has(s)?.98:.065,n.material.emissiveIntensity=t.has(s)?.6:.01,n.scale.setScalar(n.userData.baseScale*(t.has(s)?1.25:1))});for(let n=0;n<e.length-1;n++){const s=this.nodes.get(e[n]),a=this.nodes.get(e[n+1]);s&&a&&this.makeLine(s,a,"DEPENDS_ON",!0)}e[0]&&this.focus(e[0])}traceGraph(e,t,n,s){this.clearLines();const a=new Set(t),r=Math.max(1,...s.values());this.setActiveLabels(a),this.nodes.forEach((o,c)=>{const l=s.get(c),u=a.has(c);o.material.opacity=u?Math.max(.5,.98-(l||0)*.075):.045,o.material.emissiveIntensity=c===e?.9:u?Math.max(.14,.62-(l||0)*.08):.005,o.scale.setScalar(o.userData.baseScale*(c===e?1.6:u?Math.max(1.08,1.36-(l||0)*.045):1))}),n.filter(o=>this.relationshipVisible(o)).forEach(o=>{const c=this.nodes.get(o.source),l=this.nodes.get(o.target),u=Math.max(s.get(o.source)||0,s.get(o.target)||0);c&&l&&this.makeLine(c,l,o,!0,Math.max(.28,.96-u/r*.5))}),this.focus(e,38)}resetStyles(){this.clearLines(),this.setActiveLabels(),this.nodes.forEach(e=>{e.material.opacity=e.userData.baseOpacity,e.material.emissiveIntensity=e.userData.baseEmissive,e.scale.setScalar(e.userData.baseScale)})}reset(){this.selectedId=null,this.view==="models"&&(this.activeModelRoot=null,this.modelTree=null,this.modelTreeIds=null,this.applyVisibility()),this.resetStyles(),this.controls.autoRotate=this.view!=="models"&&this.activeGeography==="all"&&!this.reduced,this.relayout(!0)}applyVisibility(){this.layerGroups.forEach((e,t)=>e.visible=this.visibleLayers.has(t)),this.nodes.forEach(e=>{const t=e.userData.entity,n=this.activeGeography==="all"||t.geography===this.activeGeography;e.visible=n&&(this.view!=="models"?!0:this.modelTreeIds?this.modelTreeIds.has(t.id):this.modelOrder.has(t.id))}),this.clearLines()}layoutPosition(e,t){const n=$e.find(g=>g.id===e.layer),s=$e.indexOf(n),a=t.indexOf(e);if(this.view==="architecture"){const g=Math.ceil(Math.sqrt(t.length));return new T((a%g-(g-1)/2)*5.6,n.y,(Math.floor(a/g)-(Math.ceil(t.length/g)-1)/2)*5.2)}const r=[...new Set(t.map(g=>g.cluster))],o=r.indexOf(e.cluster),c=t.filter(g=>g.cluster===e.cluster),l=c.indexOf(e),u=Math.PI*2/r.length,p=Math.min(.22,u/Math.max(2,c.length)),d=o*u+(l-(c.length-1)/2)*p+s*.71,f=24+s*3.05+l%3*1.5;return new T(10+Math.cos(d)*f,n.y+(l%3-1)*1.15,Math.sin(d)*f)}layoutGravity(e,t){const n=t.get(e.id)||0,s=n*2.3999632297,a=n===0?0:5+Math.sqrt(n)*3.35,r=$e.findIndex(o=>o.id===e.layer);return new T(Math.cos(s)*a,(r-($e.length-1)/2)*.32+(n%3-1)*.15,Math.sin(s)*a)}layoutModelGallery(e,t){const n=t.get(e.id)||0,s=Math.max(7,Math.ceil(Math.sqrt(t.size*1.55))),a=Math.floor(n/s),r=n%s,o=Math.ceil(t.size/s);return new T((r-(s-1)/2)*10.5,(o-1)/2*8.5-a*8.5,(n%3-1)*.65)}relayout(e=!1){const t=this.entities.filter(c=>this.activeGeography==="all"||c.geography===this.activeGeography),n=new Set(t.map(c=>c.id)),s=new Map(this.gravityEntities.filter(c=>n.has(c.id)).map((c,l)=>[c.id,l])),a=new Map($e.map(c=>[c.id,t.filter(l=>l.layer===c.id)])),r=this.reduced?1:850,o=new Map(this.modelEntities.filter(c=>n.has(c.id)).map((c,l)=>[c.id,l]));this.nodes.forEach(c=>{const l=c.userData.entity;if(c.userData.eco||(c.userData.eco=c.position.clone()),!c.visible)return;const u=a.get(l.layer),p=this.view==="gravity"?this.layoutGravity(l,s):this.view==="models"?this.layoutModelGallery(l,o):this.activeGeography==="all"&&this.view==="ecosystem"?c.userData.eco.clone():this.layoutPosition(l,u),d=s.get(l.id)||0,f=this.view==="gravity"?1+Math.max(0,42-d)/42*1.35:this.view==="models"?1.22:1;c.scale.setScalar(c.userData.baseScale*f),c.userData.move={start:performance.now(),duration:r,from:c.position.clone(),to:p}}),e&&(this.view==="gravity"?(this.cameraCommand("top"),clearTimeout(this.gravityTimer),this.gravityTimer=setTimeout(()=>this.drawGravityWeb(),this.reduced?5:900)):this.view==="models"?(this.camera.up.set(0,1,0),this.cameraCommand("front")):this.frameVisible(r))}frameVisible(e=900){const t=[...this.nodes.values()].filter(u=>u.visible&&u.parent?.visible),n=t.map(u=>u.userData.move?.to||u.position);if(!n.length)return;const s=new yn().setFromPoints(n),a=s.getCenter(new T),r=s.getSize(new T),o=Math.max(18,r.length()/2),c=Math.min(245,Math.max(52,o*1.75)),l=new T(1,.38,1.15).normalize();this.tween={start:performance.now(),duration:this.reduced?1:e,from:this.camera.position.clone(),to:a.clone().add(l.multiplyScalar(c)),targetFrom:this.controls.target.clone(),targetTo:a}}frameNodes(e,t=650){const n=e.map(l=>this.nodes.get(l)).filter(Boolean).map(l=>l.getWorldPosition(new T));if(!n.length)return;const s=new yn().setFromPoints(n),a=s.getCenter(new T),r=s.getSize(new T),o=Math.min(245,Math.max(46,r.length()*1.15)),c=this.camera.position.clone().sub(this.controls.target).normalize();this.tween={start:performance.now(),duration:this.reduced?1:t,from:this.camera.position.clone(),to:a.clone().add(c.multiplyScalar(o)),targetFrom:this.controls.target.clone(),targetTo:a}}drawGravityWeb(){if(this.view!=="gravity")return;this.clearLines();const e=this.gravityEntities.filter(n=>this.nodes.get(n.id)?.visible&&this.nodes.get(n.id)?.parent?.visible).slice(0,140),t=new Set(e.map(n=>n.id));this.relationships.filter(n=>(this.relationFilter==="ALL"||n.type===this.relationFilter)&&this.relationshipVisible(n)&&t.has(n.source)&&t.has(n.target)).forEach(n=>{const s=this.nodes.get(n.source),a=this.nodes.get(n.target);s&&a&&this.makeLine(s,a,n,!1)})}cameraCommand(e){if(this.controls.autoRotate=!1,e==="fit"){this.camera.up.set(0,1,0),this.frameVisible();return}const t=[...this.nodes.values()].filter(u=>u.visible&&u.parent?.visible),n=t.map(u=>u.userData.move?.to||u.position);if(!n.length)return;const s=new yn().setFromPoints(n),a=s.getCenter(new T),r=s.getSize(new T),o=Math.min(245,Math.max(58,r.length()*1.05));if(e==="front"||e==="top"){this.camera.up.set(0,e==="front"?1:0,e==="front"?0:-1);const u=e==="front"?new T(0,.08,1):new T(0,1,.001);this.tween={start:performance.now(),duration:this.reduced?1:700,from:this.camera.position.clone(),to:a.clone().add(u.normalize().multiplyScalar(o)),targetFrom:this.controls.target.clone(),targetTo:a};return}const c=e==="zoom-in"?.72:1.38,l=this.camera.position.clone().sub(this.controls.target).multiplyScalar(c);this.tween={start:performance.now(),duration:this.reduced?1:350,from:this.camera.position.clone(),to:this.controls.target.clone().add(l),targetFrom:this.controls.target.clone(),targetTo:this.controls.target.clone()}}setLayers(e){this.visibleLayers=new Set(e),this.view==="models"&&(this.activeModelRoot=null,this.modelTree=null,this.modelTreeIds=null),this.applyVisibility(),this.relayout(!0)}setGeography(e){this.activeGeography=e,this.view==="models"&&(this.activeModelRoot=null,this.modelTree=null,this.modelTreeIds=null),this.applyVisibility(),this.resetStyles(),this.controls.autoRotate=this.view!=="models"&&e==="all"&&!this.reduced,this.relayout(!0)}setRelation(e){this.relationFilter=e,this.view==="gravity"&&this.drawGravityWeb(),this.view==="models"&&this.activeModelRoot&&this.selectModel(this.activeModelRoot)}setTime(e){this.timeYear=Number(e),this.clearLines(),this.view==="models"&&this.activeModelRoot?this.selectModel(this.activeModelRoot):this.selectedId?this.select(this.selectedId):this.view==="gravity"&&this.drawGravityWeb()}setView(e){clearTimeout(this.gravityTimer),clearTimeout(this.modelTimer),this.view=e,this.activeModelRoot=null,this.modelTree=null,this.modelTreeIds=null,document.body.classList.toggle("models-view",e==="models"),this.controls.autoRotate=!1,this.architectureGuides.forEach(t=>t.visible=e!=="gravity"&&e!=="models"),this.applyVisibility(),this.resetStyles(),this.relayout(!0)}}const tt=i=>String(i).replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]),In=2026,Ls=(i,e,t,n,s)=>n+(i-e)/(t-e)*(s-n),Il=i=>i.map((e,t)=>`${t?"L":"M"}${e[0].toFixed(1)},${e[1].toFixed(1)}`).join(" ");class Mm{constructor(e,t,n,s){this.root=e,this.entities=t,this.relationships=n,this.onSelect=s,this.startYear=1990,this.activeLayers=new Set($e.map(a=>a.id)),this.geography="all",e.addEventListener("input",a=>{if(a.target.id==="timelineStart"){this.startYear=Number(a.target.value);const r=e.querySelector("#timelineStartReadout");r&&(r.textContent=this.startYear)}a.target.id==="timelineSearch"&&this.renderSearch(a.target.value)}),e.addEventListener("change",a=>{a.target.id==="timelineStart"&&this.render()}),e.addEventListener("click",a=>{const r=a.target.closest("[data-entity]"),o=a.target.closest("[data-year]"),c=a.target.closest("[data-open-profile]");if(c){a.stopPropagation(),this.closeDetail(),this.onSelect(c.dataset.openProfile);return}if(r){a.stopPropagation(),this.showEntityDetail(r.dataset.entity);return}if(o){a.stopPropagation(),this.showYearDetail(Number(o.dataset.year));return}a.target.closest("[data-close-timeline-detail]")&&this.closeDetail()}),e.addEventListener("keydown",a=>{a.key==="Escape"&&a.target.id==="timelineSearch"?(a.target.value="",this.renderSearch("")):a.key==="Escape"&&this.closeDetail()})}setScope(e,t){this.activeLayers=new Set(e),this.geography=t,this.root.hidden||this.render()}show(){this.root.hidden=!1,this.render()}hide(){this.root.hidden=!0}scoped(){return this.entities.filter(e=>this.activeLayers.has(e.layer)&&(this.geography==="all"||e.geography===this.geography))}renderSearch(e){const t=this.root.querySelector("#timelineSearchResults");if(!t)return;const n=e.trim().toLowerCase();if(!n){t.hidden=!0,t.innerHTML="";return}const s=this.scoped().filter(a=>[a.name,a.type,a.country,a.timelineBasis,...a.categories,...a.products].filter(Boolean).join(" ").toLowerCase().includes(n)).sort((a,r)=>+!!r.timelineYear-+!!a.timelineYear||r.importanceLevel-a.importanceLevel||a.name.localeCompare(r.name)).slice(0,10);t.innerHTML=s.length?s.map(a=>`<button data-entity="${tt(a.id)}"><span><strong>${tt(a.name)}</strong><small>${tt(a.type)} · ${tt(a.country)}${a.timelineYear?` · ${a.timelineYear}`:" · Date pending"}</small></span><b>↗</b></button>`).join(""):"<p>No entities found in the current scope.</p>",t.hidden=!1}closeDetail(){const e=this.root.querySelector("#timelineInspector");e&&(e.hidden=!0)}showEntityDetail(e){const t=this.entities.find(l=>l.id===e),n=this.root.querySelector("#timelineInspector");if(!t||!n)return;const s=$e.find(l=>l.id===t.layer),a=this.relationships.filter(l=>l.source===e||l.target===e),r=a.filter(l=>l.activeFrom||l.activeTo).sort((l,u)=>(l.activeFrom||0)-(u.activeFrom||0)),o=l=>this.entities.find(u=>u.id===l)?.name||l,c=t.timelineYear?this.scoped().filter(l=>l.id!==e&&l.timelineYear&&Math.abs(l.timelineYear-t.timelineYear)<=1).sort((l,u)=>u.importanceLevel-l.importanceLevel).slice(0,6):[];n.innerHTML=`<div class="timeline-inspector-head"><span>${t.timelineYear||"—"}</span><button data-close-timeline-detail aria-label="Close timeline detail">×</button></div><p class="eyebrow">${tt(t.timelineBasis||"Date awaiting research")} · ${tt(s?.short||t.layer)}</p><h2>${tt(t.name)}</h2><p class="inspector-lede">${tt(t.description)}</p><dl><div><dt>Entry basis</dt><dd>${tt(t.timelineBasis||"Not yet audited")}</dd></div><div><dt>Ecosystem layer</dt><dd>${tt(s?.name||t.layer)}</dd></div><div><dt>Known relations</dt><dd>${a.length}</dd></div></dl><section><h3>Why this entry matters</h3><p>${tt(t.whyItMatters)}</p></section><section><h3>Relationships through time</h3>${r.length?r.slice(0,8).map(l=>`<button data-entity="${l.source===e?l.target:l.source}"><time>${l.activeFrom||"…"}${l.activeTo?`–${l.activeTo}`:" →"}</time><span><strong>${tt(o(l.source===e?l.target:l.source))}</strong><small>${tt(l.type.replaceAll("_"," "))} · ${tt(l.status)}</small></span></button>`).join(""):"<p>No relationship dates have been audited yet. The structural links remain available in the full profile.</p>"}</section>${c.length?`<section><h3>Entered at roughly the same time</h3><div class="inspector-related">${c.map(l=>`<button data-entity="${l.id}">${tt(l.name)} <span>${l.timelineYear}</span></button>`).join("")}</div></section>`:""}<button class="open-full-profile" data-open-profile="${t.id}">Open complete entity profile ↗</button>`,n.hidden=!1,n.scrollTop=0}showYearDetail(e){const t=this.root.querySelector("#timelineInspector");if(!t)return;const n=this.scoped().filter(r=>r.timelineYear===e).sort((r,o)=>o.importanceLevel-r.importanceLevel||r.name.localeCompare(o.name)),s=this.relationships.filter(r=>r.activeFrom===e),a=$e.map(r=>({layer:r,count:n.filter(o=>o.layer===r.id).length})).filter(r=>r.count);t.innerHTML=`<div class="timeline-inspector-head"><span>${e}</span><button data-close-timeline-detail aria-label="Close year detail">×</button></div><p class="eyebrow">Year snapshot</p><h2>${n.length} ecosystem entr${n.length===1?"y":"ies"}</h2><p class="inspector-lede">${s.length} dated relationship${s.length===1?"":"s"} begin in this year. Select an entry to understand its role and surrounding events.</p><div class="year-layer-bars">${a.map(r=>`<div><span>${tt(r.layer.short)}</span><i style="--w:${r.count/Math.max(1,...a.map(o=>o.count))*100}%"></i><b>${r.count}</b></div>`).join("")}</div><section><h3>Entries</h3><div class="year-entry-list">${n.map(r=>`<button data-entity="${r.id}"><span style="--c:${$e.find(o=>o.id===r.layer)?.color}"></span><div><strong>${tt(r.name)}</strong><small>${tt(r.timelineBasis)} · ${tt(r.type)}</small></div><b>↗</b></button>`).join("")||"<p>No audited entries in the current scope.</p>"}</div></section>`,t.hidden=!1,t.scrollTop=0}render(){const e=this.scoped(),t=e.filter(F=>F.timelineYear&&F.timelineYear<=In),n=t.filter(F=>F.timelineYear>=this.startYear),s=e.length-t.length,a=Array.from({length:In-this.startYear+1},(F,B)=>this.startYear+B),r=new Map(a.map(F=>[F,n.filter(B=>B.timelineYear===F).length])),o=Math.max(1,...r.values()),c=[];let l=t.filter(F=>F.timelineYear<this.startYear).length;a.forEach(F=>{l+=r.get(F),c.push([F,l])});const u=760,p=170,d={l:38,r:16,t:12,b:26},f=u-d.l-d.r,g=p-d.t-d.b,v=f/a.length,m=a.map(F=>{const B=r.get(F)/o*g,J=d.l+(F-this.startYear)*v;return`<rect data-year="${F}" x="${J.toFixed(1)}" y="${(d.t+g-B).toFixed(1)}" width="${Math.max(1,v-.8).toFixed(1)}" height="${Math.max(1,B).toFixed(1)}"><title>${F}: ${r.get(F)} entries · select for details</title></rect>`}).join(""),h=a.filter(F=>F===this.startYear||F===In||F%5===0).map(F=>`<text x="${Ls(F,this.startYear,In,d.l,d.l+f)}" y="${p-7}" text-anchor="middle">${F}</text>`).join(""),E=c.map(([F,B])=>[Ls(F,this.startYear,In,d.l,d.l+f),d.t+g-B/Math.max(1,t.length)*g]),A=Il(E),S=this.relationships.filter(F=>F.activeFrom&&F.activeFrom>=this.startYear&&F.activeFrom<=In),I=a.map(F=>[F,S.filter(B=>B.activeFrom===F).length]),w=Math.max(1,...I.map(([,F])=>F)),P=Il(I.map(([F,B])=>[Ls(F,this.startYear,In,d.l,d.l+f),d.t+g-B/w*g])),L=980,x=31,M=$e.length*x+34,C=n.map((F,B)=>{const J=$e.findIndex(Fe=>Fe.id===F.layer),X=Ls(F.timelineYear,this.startYear,In,145,L-18),oe=18+J*x+(B%3-1)*4,he=2.2+F.importanceLevel*.75,xe=$e[J];return`<circle data-entity="${tt(F.id)}" cx="${X.toFixed(1)}" cy="${oe.toFixed(1)}" r="${he}" fill="${xe?.color||"#999"}"><title>${tt(F.name)} · ${F.timelineYear} · ${tt(F.timelineBasis)}</title></circle>`}).join(""),V=$e.map((F,B)=>`<g><text x="4" y="${22+B*x}">${tt(F.short)}</text><line x1="138" x2="${L}" y1="${18+B*x}" y2="${18+B*x}"/></g>`).join(""),W=[...n].sort((F,B)=>F.timelineYear-B.timelineYear||B.importanceLevel-F.importanceLevel).filter((F,B,J)=>F.importanceLevel===3&&J.findIndex(X=>X.timelineYear===F.timelineYear&&X.layer===F.layer)===B).slice(-18);this.root.innerHTML=`<div class="timeline-shell"><header class="timeline-head"><div><p class="eyebrow">Historical system view</p><h1>How the AI ecosystem accumulated.</h1><p>Organizations use founding years; products and technologies use launch years. Every plotted point states its basis.</p></div><div class="timeline-stat"><strong>${t.length}</strong><span>dated entities</span><small>${s} awaiting research</small></div></header><div class="timeline-search"><span>⌕</span><input id="timelineSearch" type="search" autocomplete="off" placeholder="Search ${e.length} entities in this scope" aria-label="Search timeline entities"><kbd>ESC</kbd><div id="timelineSearchResults" class="timeline-search-results" hidden></div></div><div class="timeline-controls"><label><span>Show history from</span><input id="timelineStart" type="range" min="1950" max="2020" value="${this.startYear}"><b>${this.startYear}</b></label><div><i class="exact"></i>Audited entry date <i class="unknown"></i>Unknown dates are excluded</div></div><div class="timeline-grid"><article class="timeline-card entry-bars"><header><span>01</span><div><h2>New entities by year</h2><p>Annual arrivals reveal waves of infrastructure, model labs and products.</p></div></header><svg viewBox="0 0 ${u} ${p}" role="img" aria-label="Bar chart of new entities by year"><g class="bars">${m}</g><g class="axis">${h}</g></svg></article><article class="timeline-card cumulative"><header><span>02</span><div><h2>Cumulative ecosystem</h2><p>Audited entities accumulate; the green line shows newly dated relationships.</p></div></header><svg viewBox="0 0 ${u} ${p}" role="img" aria-label="Cumulative entity and relationship line chart"><path class="area" d="${A} L${d.l+f},${d.t+g} L${d.l},${d.t+g} Z"/><path class="entity-line" d="${A}"/><path class="relation-line" d="${P}"/><g class="axis">${h}</g></svg><div class="chart-legend"><span><i class="entity"></i>Entities</span><span><i class="relation"></i>Relationships beginning</span></div></article><article class="timeline-card layer-plot"><header><span>03</span><div><h2>Entry points across the stack</h2><p>Select any dot to inspect the entity. Larger dots indicate higher structural importance.</p></div></header><svg viewBox="0 0 ${L} ${M}" role="img" aria-label="Dot plot showing ecosystem layers over time"><g class="layer-rows">${V}</g><g class="layer-dots">${C}</g></svg></article><article class="timeline-card milestones"><header><span>04</span><div><h2>Milestones</h2><p>A narrative sampling of high-leverage entries in the current scope.</p></div></header><div class="milestone-list">${W.map(F=>`<button data-entity="${tt(F.id)}"><time>${F.timelineYear}</time><span><strong>${tt(F.name)}</strong><small>${tt(F.timelineBasis)} · ${tt($e.find(B=>B.id===F.layer)?.short)}</small></span><b>↗</b></button>`).join("")||"<p>No audited milestones in this range and scope.</p>"}</div></article></div><footer class="timeline-note"><strong>Coverage, not false precision.</strong><span>${t.length} of ${e.length} visible entities have audited dates. Relationship lines use explicit active-from years only. Geography and layer filters apply to this view.</span></footer></div>`;const z=this.root.querySelector(".timeline-controls label b");z&&(z.id="timelineStartReadout"),this.root.insertAdjacentHTML("beforeend",'<aside id="timelineInspector" class="timeline-inspector" hidden aria-live="polite"></aside>')}}const He=i=>String(i).replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]),xm=new Set(["RUNS_ON","TRAINS_ON","DEPENDS_ON","USES_MODEL_FROM"]),Am=new Set(["PARTNERS_WITH","INTEGRATES_WITH","COMPETES_WITH"]),Em=(i,e,t)=>{if(Am.has(i.type))return i.source===e?i.target:i.target===e?i.source:null;const[n,s]=xm.has(i.type)?[i.source,i.target]:[i.target,i.source];return t==="upstream"?n===e?s:null:s===e?n:null};function bm(i,e,t,n=()=>!0,s=6,a=180){const r=new Map([[e,0]]),o=[e],c=[],l=[e];let u=!1;for(;l.length;){const p=l.shift(),d=r.get(p);if(!(d>=s))for(const f of i){const g=Em(f,p,t);if(!(!g||!n(g)||r.has(g))){if(o.length>=a){u=!0;continue}r.set(g,d+1),o.push(g),l.push(g),c.push(f)}}}return{nodes:o,edges:c,hops:r,truncated:u,maxDepth:Math.max(0,...r.values())}}class wm{constructor(e,t,n,s){this.entities=e,this.relationships=t,this.scene=n,this.select=s,this.activeLayers=new Set($e.map(a=>a.id)),this.activeGeography="all",this.timeline=new Mm(document.querySelector("#timelineView"),e,t,s),document.querySelector("#searchInput").placeholder=`Search ${e.length} entities`,this.bind(),this.bindModelPortfolio(),this.renderScope()}bindModelPortfolio(){document.addEventListener("click",e=>{const t=e.target.closest("[data-entity]");t&&queueMicrotask(()=>{this.renderEntityProfile(t.dataset.entity),this.renderModelPortfolio(t.dataset.entity)})})}renderModelPortfolio(e){const t=this.scene.modelPortfolioByModel?.get(e),n=document.querySelector("#detailPanel");if(!t||n.hidden||n.querySelector(".model-portfolio"))return;const s=/image|sora|veo|lyria|embedding|robotics|guard|voice|imagine|movie|audio|ocr|code|coder|vision|vl|stable|flux|midjourney|runway|suno|music/i,a=document.createElement("section");a.className="model-portfolio",a.innerHTML=`<div class="portfolio-heading"><h3>Model portfolio over time</h3><small>${t.items.length} nested models</small></div><div class="portfolio-rail">${t.items.map((r,o)=>{const c=r.id===t.root?"Current flagship":s.test(r.name)?"Current specialist":o<=3?"Previous generation":"Legacy";return`<button class="portfolio-model ${r.id===e?"selected":""}" data-entity="${r.id}"><i></i><span><strong>${He(r.name)}</strong><small>${c}</small></span></button>`}).join("")}</div><p class="portfolio-note">Relative lifecycle status reflects this atlas edition. Exact release and retirement dates are used only when producers publish them consistently.</p>`,n.querySelector(".lede")?.insertAdjacentElement("afterend",a)}renderEntityProfile(e){const t=this.entities.find(r=>r.id===e),n=document.querySelector("#detailPanel");if(!t||n.hidden||n.querySelector(".entity-profile")||!t.provides)return;const s=[["Founded / launched",t.founded],["Leadership",t.leadership],["Headquarters",t.headquarters],["Official website",t.website?`<a href="${He(t.website)}" target="_blank" rel="noreferrer">Visit official site ↗</a>`:null]].filter(([,r])=>r),a=document.createElement("section");a.className="entity-profile",a.innerHTML=`<div class="profile-heading"><h3>Entity profile</h3><small>Verified basics</small></div><dl>${s.map(([r,o])=>`<div><dt>${He(r)}</dt><dd>${r==="Official website"?o:He(o)}</dd></div>`).join("")}</dl><h4>What it provides</h4><p>${He(t.provides)}</p><h4>How it is used</h4><p>${He(t.howUsed)}</p>${t.profileSources?.length?`<div class="profile-sources"><span>Sources</span>${t.profileSources.map((r,o)=>`<a href="${He(r)}" target="_blank" rel="noreferrer">${String(o+1).padStart(2,"0")} ↗</a>`).join("")}</div>`:""}`,n.querySelector(".lede")?.insertAdjacentElement("afterend",a)}bind(){document.addEventListener("click",t=>{const n=t.target.closest("[data-action],[data-view],[data-entity],[data-journey],[data-camera]");if(!n)return;if(n.dataset.camera){this.scene.cameraCommand(n.dataset.camera);return}if(n.dataset.entity){this.select(n.dataset.entity);return}if(n.dataset.view){document.querySelectorAll("[data-view]").forEach(o=>o.classList.toggle("active",o===n)),this.closeAll();const a=n.dataset.view;this.scene.setView(a),document.body.classList.toggle("timeline-mode",a==="timeline"),a==="timeline"?(this.enter(),this.timeline.show()):this.timeline.hide();const r=document.querySelector("#traceNotice");a==="gravity"?(r.innerHTML='<strong>Gravity view</strong><span>Critical entities orbit nearest the center</span><small>Select any entity to reveal its connected supply-chain web across six hops.</small><button data-action="reset">Clear view ×</button>',r.hidden=!1):a==="models"?(r.innerHTML=`<strong>Models view</strong><span>${this.scene.modelEntities.filter(o=>this.activeGeography==="all"||o.geography===this.activeGeography).length} leading model products across AI producers</span><small>Select a model to grow its creation tree upward and its deployment and inference ecosystem downward.</small><button data-action="reset">Reset models ×</button>`,r.hidden=!1):r.hidden=!0;return}if(n.dataset.journey){this.startJourney(Hr.find(a=>a.id===n.dataset.journey));return}const s=n.dataset.action;s==="explore"&&this.enter(),s==="reset"&&(this.closeAll(),this.scene.reset()),s==="layers"&&this.showFilters("layers"),s==="relations"&&this.showFilters("relations"),s==="time"&&this.showTime(),s==="geography"&&this.showFilters("geography"),s==="journeys"&&this.showJourneys(),s==="methodology"&&this.showMethod(),s==="close"&&n.closest("aside,.journey-player")?.setAttribute("hidden",""),(s==="upstream"||s==="downstream")&&this.traceDirection(n.dataset.id,s),s==="stack"&&this.traceStack(n.dataset.id),s==="journey-next"&&this.advanceJourney(1),s==="journey-prev"&&this.advanceJourney(-1),s==="stop-journey"&&this.stopJourney()});const e=document.querySelector("#searchInput");e.addEventListener("input",()=>this.search(e.value)),e.addEventListener("keydown",t=>{t.key==="Escape"&&(e.value="",this.search(""))}),document.addEventListener("keydown",t=>{if((t.metaKey||t.ctrlKey)&&t.key.toLowerCase()==="k"&&(t.preventDefault(),e.focus()),t.key==="Escape"&&this.closeAll(),t.target.matches("input,textarea"))return;const n={0:"fit",1:"front",2:"top","+":"zoom-in","=":"zoom-in","-":"zoom-out"};n[t.key]&&this.scene.cameraCommand(n[t.key])})}enter(){document.body.classList.add("entered"),document.querySelector(".intro").setAttribute("aria-hidden","true"),this.scene.controls.autoRotate=!1}closeAll(){["detailPanel","filterPanel","journeyPanel","methodPanel","journeyPlayer","traceNotice"].forEach(e=>document.querySelector("#"+e).hidden=!0),document.querySelector("#searchResults").hidden=!0}search(e){const t=document.querySelector("#searchResults"),n=e.trim().toLowerCase();if(!n){t.hidden=!0;return}const s=this.entities.filter(a=>(this.activeGeography==="all"||a.geography===this.activeGeography)&&[a.name,a.type,a.layer,a.country,a.geography,...a.categories,...a.products].join(" ").toLowerCase().includes(n)).sort((a,r)=>(r.name.toLowerCase().startsWith(n)?1:0)-(a.name.toLowerCase().startsWith(n)?1:0)||r.importanceLevel-a.importanceLevel).slice(0,12);t.innerHTML=s.length?s.map(a=>{const r=Rr(a);return`<button data-entity="${a.id}"><i class="kind-mark ${r}" style="--c:${$e.find(o=>o.id===a.layer).color}"></i><span><strong>${He(a.name)}</strong><small>${He(wl[r].short)} · ${He(a.geography)} · ${He(a.categories.at(-1))}</small></span><b>↗</b></button>`}).join(""):"<p>No entities found in this geography</p>",t.hidden=!1}showEntity(e){const t=this.entities.find(d=>d.id===e);if(!t)return;this.enter(),this.closeAll();const n=this.scene.select(e),s=this.relationships.filter(d=>d.source===e||d.target===e),a=s.filter(d=>d.target===e),r=s.filter(d=>d.source===e),o=[...new Set(s.map(d=>d.source===e?d.target:d.source))].map(d=>this.entities.find(f=>f.id===($n[d]||d))).filter(Boolean).slice(0,8),c=Rr(t),l=wl[c],u=$e.find(d=>d.id===t.layer),p=document.querySelector("#detailPanel");if(p.innerHTML=`<div class="panel-head"><span style="--c:${u.color}">${u.symbol} ${He(u.short)}</span><button data-action="close" aria-label="Close">×</button></div><p class="entity-type"><i class="kind-glyph ${c}">${l.symbol}</i> ${He(l.label)} · ${He(t.type)} · ${He(t.country)}</p><h2>${He(t.name)}</h2><p class="lede">${He(t.description)}</p><div class="entity-stats"><div><small>UPSTREAM</small><strong>${a.length}</strong></div><div><small>DOWNSTREAM</small><strong>${r.length}</strong></div><div><small>RELATIONS</small><strong>${s.length}</strong></div></div><div class="trace-actions"><button data-action="upstream" data-id="${e}">← Trace upstream</button><button data-action="downstream" data-id="${e}">Trace downstream →</button></div><button class="stack-button" data-action="stack" data-id="${e}">✦ Trace a representative stack</button><section><h3>Ecosystem role</h3><p>${He(t.ecosystemRole)}</p></section><section><h3>Significant products / technologies</h3><div class="chips">${t.products.map(d=>`<span>${He(d)}</span>`).join("")}</div></section><section><h3>Why it matters</h3><p>${He(t.whyItMatters)}</p></section><section><h3>Immediate network</h3><div class="related">${o.map(d=>`<button data-entity="${d.id}">${He(d.name)} <span>↗</span></button>`).join("")||"<p>No direct relationships in this edition.</p>"}</div></section><section><h3>Relationship evidence</h3>${s.slice(0,8).map(d=>{const f=this.entities.find(g=>g.id===($n[d.source===e?d.target:d.source]||(d.source===e?d.target:d.source)));return`<div class="relation-row"><span>${He(d.type.replaceAll("_"," "))}</span><strong>${He(f?.name||"Cross-layer capability")}</strong><small class="status ${d.status}">${He(d.status)}</small><p>${He(d.explanation)}</p></div>`}).join("")}</section>`,p.hidden=!1,n?.model){const d=document.querySelector("#traceNotice");d.innerHTML=`<strong>${He(t.name)}</strong><span><b class="creation-key">${n.creation}</b> creation entities above · <b class="inference-key">${n.inference}</b> deployment/inference entities below</span><small>Gold branches trace model creation; green roots trace known deployment and downstream use across up to six hops.${n.truncated?" Large branches are capped for legibility.":""}</small><button data-action="reset">Back to models ×</button>`,d.hidden=!1}}showFilters(e){this.closeAll();const t=document.querySelector("#filterPanel");t.hidden=!1;const n=$e.map(o=>`<label><input type="checkbox" value="${o.id}" ${this.activeLayers.has(o.id)?"checked":""}><i style="--c:${o.color}">${o.symbol}</i><span>${He(o.name)}</span></label>`).join(""),s=`<label><input type="radio" name="relation" value="ALL" ${this.scene.relationFilter==="ALL"?"checked":""}><span>All relationship types</span></label>${hc.map(o=>`<label><input type="radio" name="relation" value="${o}" ${this.scene.relationFilter===o?"checked":""}><span>${He(o.replaceAll("_"," "))}</span></label>`).join("")}`,a=Fs.map(o=>`<label class="geo-option"><input type="radio" name="geography" value="${o.id}" ${this.activeGeography===o.id?"checked":""}><i>${o.short}</i><span><strong>${He(o.name)}</strong><small>${this.entities.filter(c=>o.id==="all"||c.geography===o.id).length} entities · ${He(o.description)}</small></span></label>`).join(""),r=e==="layers"?n:e==="relations"?s:a;t.innerHTML=`<div class="panel-head"><strong>Universe controls</strong><button data-action="close">×</button></div><div class="tabbar"><button class="${e==="layers"?"active":""}" data-filtertab="layers">Layers</button><button class="${e==="relations"?"active":""}" data-filtertab="relations">Relationships</button><button class="${e==="geography"?"active":""}" data-filtertab="geography">Geography</button></div><div class="filter-list">${r}</div>`,t.querySelectorAll("[data-filtertab]").forEach(o=>o.onclick=()=>this.showFilters(o.dataset.filtertab)),t.querySelectorAll("input").forEach(o=>o.onchange=()=>{if(o.type==="checkbox")o.checked?this.activeLayers.add(o.value):this.activeLayers.delete(o.value),this.scene.setLayers(this.activeLayers);else if(o.name==="geography"){this.activeGeography=o.value,this.scene.setGeography(o.value);const c=Fs.find(l=>l.id===o.value);document.querySelector("#geoLabel").textContent=c.short,t.hidden=!0}else this.scene.setRelation(o.value),document.querySelector('[data-action="relations"] b').textContent=o.value==="ALL"?"ALL":"1";this.renderScope()})}showTime(){this.closeAll();const e=document.querySelector("#filterPanel"),t=this.relationships.filter(a=>a.activeFrom||a.activeTo).length;e.hidden=!1,e.innerHTML=`<div class="panel-head"><strong>Relationship time</strong><button data-action="close">×</button></div><div class="time-control"><div class="time-readout"><strong id="timeReadout">${this.scene.timeYear}</strong><span>As-of snapshot</span></div><input id="timeRange" type="range" min="2000" max="2026" step="1" value="${this.scene.timeYear}" aria-label="Relationship snapshot year"><div class="time-ticks"><span>2000</span><span>2010</span><span>2020</span><span>2026</span></div><p>Edges with verified start or end years enter and leave the map as you scrub. Undated relationships remain visible at lower intensity so missing research is not mistaken for historical absence.</p><div class="time-key"><i></i><span>Dated relationship</span><i class="uncertain"></i><span>Date not yet audited</span></div><p>${t} of ${this.relationships.length} relationships currently have explicit temporal metadata.</p></div>`;const n=e.querySelector("#timeRange"),s=e.querySelector("#timeReadout");n.oninput=()=>{s.textContent=n.value,document.querySelector("#timeLabel").textContent=n.value,this.scene.setTime(n.value)}}showJourneys(){this.closeAll();const e=document.querySelector("#journeyPanel");e.hidden=!1,e.innerHTML=`<div class="panel-head"><div><p class="eyebrow">Curated pathways</p><h2>Guided journeys</h2></div><button data-action="close">×</button></div><p>Follow representative routes through the ecosystem. Each stop explains a handoff, dependency or control point.</p><div class="journey-list">${Hr.map((t,n)=>`<button data-journey="${t.id}"><span>${String(n+1).padStart(2,"0")}</span><div><strong>${He(t.title)}</strong><small>${He(t.kicker)}</small></div><b>→</b></button>`).join("")}</div>`}startJourney(e){e&&(this.closeAll(),this.currentJourney=e,this.journeyStep=0,this.renderJourneyStep())}renderJourneyStep(){const e=this.currentJourney,t=e.nodes[this.journeyStep],n=this.entities.find(r=>r.id===t),s=this.entities.find(r=>r.id===e.nodes[this.journeyStep+1]);this.scene.trace(e.nodes.slice(0,this.journeyStep+1)),this.scene.focus(t,27);const a=document.querySelector("#journeyPlayer");a.hidden=!1,a.innerHTML=`<div class="journey-progress"><i style="width:${(this.journeyStep+1)/e.nodes.length*100}%"></i></div><div class="journey-meta"><span>${String(this.journeyStep+1).padStart(2,"0")} / ${String(e.nodes.length).padStart(2,"0")}</span><button data-action="stop-journey">Exit journey ×</button></div><p class="eyebrow">${He(e.title)}</p><h2>${He(n.name)}</h2><p>${this.journeyStep===0?He(e.summary):s?`${He(n.name)} connects upward to ${He(s.name)} in this representative route. ${He(n.ecosystemRole)}`:`${He(n.whyItMatters)}`}</p><div><button data-action="journey-prev" ${this.journeyStep===0?"disabled":""}>←</button><button data-action="journey-next">${this.journeyStep===e.nodes.length-1?"Finish":"Next stop →"}</button></div>`}advanceJourney(e){if(e>0&&this.journeyStep===this.currentJourney.nodes.length-1){this.stopJourney();return}this.journeyStep=Math.max(0,Math.min(this.currentJourney.nodes.length-1,this.journeyStep+e)),this.renderJourneyStep()}stopJourney(){document.querySelector("#journeyPlayer").hidden=!0,this.scene.reset()}traceDirection(e,t){const n=this.relationships.filter(c=>(this.scene.relationFilter==="ALL"||c.type===this.scene.relationFilter)&&this.scene.relationshipVisible(c)).map(c=>({...c,source:$n[c.source]||c.source,target:$n[c.target]||c.target})),s=c=>{const l=this.scene.nodes.get(c);return!!(l?.visible&&l.parent?.visible)},a=bm(n,e,t,s);this.scene.traceGraph(e,a.nodes,a.edges,a.hops);const r=[];for(let c=1;c<=a.maxDepth;c++)r.push(`${c}: ${a.nodes.filter(l=>a.hops.get(l)===c).length}`);const o=document.querySelector("#traceNotice");o.innerHTML=`<strong>${t==="upstream"?"Upstream dependencies":"Downstream reach"}</strong><span>${a.nodes.length-1} entities across ${a.maxDepth} hop${a.maxDepth===1?"":"s"} · ${this.scene.timeYear} snapshot</span><small>${r.length?`Entities by hop · ${r.join(" · ")}`:"No connected entities in the current filters"}${a.truncated?" · Limited to 180 entities":""}</small><button data-action="reset">Clear trace ×</button>`,o.hidden=!1,document.querySelector("#detailPanel").hidden=!0}traceStack(e){const{representativePaths:t}=window.ecosystemData;let n=t[e];if(!n){const a=this.entities.find(o=>o.id===e);n={models:[e,"vllm","aws","nvidia","sk-hynix","tsmc","asml"],applications:[e,"openai","vllm","azure","nvidia","sk-hynix","tsmc","asml"],agents:[e,"anthropic","vllm","aws","nvidia","sk-hynix","tsmc","asml"],robotics:[e,"pytorch","cuda","nvidia","sk-hynix","tsmc","asml"]}[a.layer]||[e,...this.relationships.filter(o=>o.target===e).slice(0,5).map(o=>o.source)]}n=n.filter(a=>this.scene.nodes.has(a)),this.scene.trace(n);const s=document.querySelector("#traceNotice");s.innerHTML=`<strong>Representative dependency path</strong><span>${n.map(a=>this.entities.find(r=>r.id===a)?.name).join(" → ")}</span><small>This path is illustrative, not the only supply chain.</small><button data-action="reset">Clear trace ×</button>`,s.hidden=!1,document.querySelector("#detailPanel").hidden=!0}showMethod(){this.closeAll();const e=document.querySelector("#methodPanel");e.hidden=!1,e.innerHTML=`<div class="panel-head"><div><p class="eyebrow">About this atlas</p><h2>Methodology</h2></div><button data-action="close">×</button></div><p class="method-lede">A navigational model of a rapidly changing industry—not an exhaustive or authoritative supply-chain database.</p><section><h3>How to read the system</h3><p>Entities are arranged from physical inputs at the base to end markets at the edge. A company may appear through several technologies and relationships rather than being forced into one category.</p></section><section><h3>Relationship confidence</h3><ul><li><b>Confirmed</b> — disclosed by the organizations or broadly documented.</li><li><b>Reported</b> — described by credible public reporting.</li><li><b>Inferred</b> — a reasonable industry inference, explicitly marked.</li><li><b>Representative</b> — illustrates a common architecture, not a unique contract.</li></ul></section><section><h3>Scope & maintenance</h3><p>This edition prioritizes structural importance over completeness. Relationships change quickly; absence does not imply no relationship. Representative paths simplify a multi-supplier reality to make the stack legible.</p></section><div class="data-stamp"><span>DATA EDITION</span><strong>${zl}</strong><small>${this.entities.length} entities · ${this.relationships.length} relationships</small></div>`}renderScope(){const e=this.entities.filter(n=>this.activeLayers.has(n.layer)&&(this.activeGeography==="all"||n.geography===this.activeGeography)),t=Fs.find(n=>n.id===this.activeGeography);document.querySelector("#scopeCount").textContent=`${e.length} ENTITIES · ${this.activeLayers.size} LAYERS · ${t.short}`,document.querySelector("#layerCount").textContent=`${this.activeLayers.size}/${$e.length}`,this.timeline.setScope(this.activeLayers,this.activeGeography)}}window.ecosystemData={representativePaths:Vr};const Tm=new ym(document.querySelector("#scene"),Vt,ks,i=>{Ei.showEntity(i),Ei.renderEntityProfile(i),Ei.renderModelPortfolio(i)}),Ei=new wm(Vt,ks,Tm,i=>{Ei.showEntity(i),Ei.renderEntityProfile(i),Ei.renderModelPortfolio(i)});window.addEventListener("error",i=>{String(i.message).toLowerCase().includes("webgl")&&document.querySelector("#scene").setAttribute("aria-label","3D rendering is unavailable. Use search, layers, journeys and entity detail panels to explore the ecosystem textually.")})})();
