# Supply-chain coverage review — October 18, 2026

The atlas does **not yet support complete, evidenced supply chains for the main model makers**. It has a broad company inventory, but relatively few connections, limited model-specific training provenance, and fragmented identities across the graph and geographic datasets. Adding companies will help; documenting connections between existing entries will usually help more.

This review preserves every existing entity and relationship. It makes **45 company/organization recommendations: 42 missing core entities and 3 organization identities represented partly by existing products**. These are a review backlog, not 45 verified suppliers or production additions. Six candidates have first-party evidence sufficient to draft a narrowly scoped profile; most others still need primary corporate, product, project or contract research. A separate backlog identifies **43 existing entries** that merit connection research.

## Inventory and evidence coverage

The snapshot is repository commit `e722474b769402b7e7c83262d05191c1db20b56b`. Counts below describe the legacy CSV graph after resolving its aliases. The separately reviewed Updates ledger and geographic records are not counted as graph edges.

| Measure | Finding |
| --- | ---: |
| Total catalog entries | 2,038 |
| Model entries | 141 |
| Entries incident to any legacy relationship | 362 |
| Entries with no legacy relationship | 1,676 |
| Company/lab-labeled entries | 1,108 |
| Company/lab-labeled entries with no legacy relationship | 962 (86.8%) |
| Legacy relationships | 552 |
| Relationships with a source URL | 302 |
| Relationships with a URL and status `confirmed` or `reported` | 283 |
| Relationships labeled `confirmed` without a source URL | 66 |
| Relationships with either active date populated | 32 |

“Company/lab-labeled” is not a count of unique legal companies: the catalog includes products, business units and overlapping identities under those types. Likewise, a URL is not proof that the source supports the exact claim. The 283 source-linked relationships have **not** all been reverified by this review.

The six physical/cloud layers contain **811 entries, of which 717 have no legacy relationship**:

| Layer | Entries | Any relationship | At least one source-linked, non-illustrative relationship |
| --- | ---: | ---: | ---: |
| Materials | 120 | 10 | 4 |
| Equipment | 140 | 18 | 14 |
| Fabrication | 90 | 10 | 8 |
| Compute | 141 | 26 | 21 |
| Data center | 220 | 17 | 2 |
| Cloud | 100 | 13 | 8 |

These are inventory/connectivity measurements, not percentages of the real supply chain discovered. A developer edge or generic partnership can make a node “connected” while leaving its actual suppliers unknown. The current Updates ledger contains 3 reviewed events and 8 claim versions backed by 3 sources; that scoped review does not validate the legacy graph.

The separate data-center campus table contains 81 entries and is explicitly focused on Asian campuses and metro footprints. It is not a global inventory of model-training facilities. Adding US and other disclosed projects requires their own facility records and evidence; company headquarters, cloud-region anchors and nearby network routes cannot stand in for a training location.

## Companies to add first

The following six are missing from the core inventory and have useful first-party role evidence. Their profiles should state only the documented scope. A profile does not establish a contract with OpenAI, Anthropic or any other model maker, and current corporate ownership still needs checking before publication.

| Company | What the inspected source establishes | Useful addition | Still unknown |
| --- | --- | --- | --- |
| **Thinking Machines Lab** | Its cookbook describes Tinker as a managed training API and names the Inkling model family | Company/lab, Tinker platform, separately typed model records | Original training chips, suppliers, facilities and capacity |
| **SambaNova** | Documentation describes SambaCloud API access and SambaStack/SambaManaged deployment paths | Alternative inference/deployment provider | Named frontier-lab customers, production hardware details and current ownership |
| **d-Matrix** | Software documentation explicitly supports deployment on d-Matrix hardware | Alternative hardware company and scoped deployment tools | Specific production deployments, hardware generation, customer contracts |
| **Prolific** | Human preference collection for RLHF and an SFT/DPO workflow | Human-feedback and post-training data supplier category | Which original model-training runs bought its services |
| **Turing** | Turing publishes a code-patch evaluation benchmark | Evaluation provider with a narrowly sourced profile | Broader expert-data services and named commercial customers |
| **TE Connectivity** | Its company profile describes sensors/connectors and links its corporate website | Connectors/interconnect company | Particular AI system design wins, OEM customers and model exposure |

Sources: [Thinking Machines Lab][tinker], [SambaNova][sambanova], [d-Matrix][dmatrix], [Prolific][prolific], [Turing][turing], [TE Connectivity][te]. The TE evidence is a mutable company profile; the other links are pinned repository snapshots. The [source inventory](sources.json) records hashes, excerpts and the limits of each claim.

**Thinking Machines Lab is also a model-maker coverage gap**, rather than merely another supplier. Its first-party documentation names Inkling and Inkling-Small. That supports investigating separate model records; it does not support assigning a training cluster or assuming unrestricted availability.

## Highest-value research candidates

These names are absent as core company entities. Their roles below identify what to investigate, not newly verified contracts. Corporate news and disclosure sites were inaccessible in this environment, so project status, ownership and customer relationships remain pending.

| Gap | Candidates | Why this matters / what to establish |
| --- | --- | --- |
| Powered campuses and capacity counterparties | **Lancium, SB Energy, Core Scientific, TeraWulf, Hut 8, Galaxy Digital, Related Digital** | Separate campus developer, landlord, compute operator, tenant and utility. Read exact contracts and commissioning dates before attaching workloads. |
| Capital and project sponsorship | **SoftBank Group** | Represent financing separately from equipment supply and facility operation. Distinguish the group from telecom subsidiaries. |
| Connectors, cables and fiber | **Amphenol, Molex, BizLink, Samtec, Fujikura** | These can explain constraints inside racks and between systems. Require an actual product/OEM design-in; generic capability is insufficient. TE Connectivity belongs in this group too, with the limited role evidence above. |
| Power electronics | **Vicor, Navitas Semiconductor** | Investigate server/rack power conversion and reference designs versus production design wins. |
| Alternative inference capacity | **Positron, TensorWave** | Verify the hardware/platform and deployed fleet. Positron's retrieved administration API is insufficient evidence for a hardware-supplier claim. |
| Human data and expert evaluation | **Mercor, TaskUs, TELUS Digital** | Establish the correct company identity, service, and disclosed customer scope. These complement Prolific and Turing. |

The second research wave is **Fervo Energy, Kairos Power, X-energy and Oklo** for future power projects; **Lightelligence, Ranovus, Nubis Communications and Celestial AI** for optical/compute components; **Silergy, Vishay, Littelfuse and Nexperia** for power/discrete components; and **Prysmian, Belden and Nexans** for cable infrastructure. Verify current ownership and product lifecycle, particularly where acquisitions may have changed the supplier identity. A proposed power project must not appear as electricity currently serving a model.

**Hold Enfabrica for lifecycle review.** Its [own host SDK README][enfabrica] says that required hardware/components are unavailable and the repository is an unsupported, read-only snapshot. That supports a historical role, not an assertion that it is an active independent supplier today. Preserve any eventual history and source the relevant dates.

The complete [candidate spreadsheet](company-candidates.csv) has 28 P1 research/profile priorities, 16 P2 priorities and 1 hold. Priority measures research value, not certainty. Every row has an evidence status, next evidence needed and lifecycle caveat. All model-maker-specific commercial edges remain unestablished by this candidate review.

## Existing companies to connect before adding more names

The inventory already includes NVIDIA, AMD, Intel, Broadcom, Marvell, Arm, SK hynix, Samsung Memory, Micron, TSMC, ASE, Amkor, ASML, Applied Materials, Lam Research, KLA and Tokyo Electron. It also includes many materials suppliers, server manufacturers, cooling companies and data-center operators. Adding duplicate nodes for these firms would not improve coverage.

The [43-entry connection backlog](existing-company-link-backlog.csv) prioritizes:

- **Capacity:** CoreWeave, Crusoe, Nscale, Lambda, Fluidstack, IREN, Applied Digital, Nebius and Oracle Cloud. Fluidstack, IREN, Applied Digital and Nebius currently have no legacy relationships.
- **Memory and packaging:** SK hynix, Micron, Samsung Memory, TSMC, ASE and Amkor. Identify the chip generation and package rather than treating every accelerator as the same supply chain.
- **Servers and networking:** Wistron, QCT, Quanta Computer, Foxconn Industrial Internet, Wiwynn, Dell, Supermicro, Arista, Marvell, Broadcom, Fabrinet and Innolight. Wistron, QCT, Quanta, Fabrinet and Innolight currently have no legacy relationships.
- **Power, cooling and construction:** Vertiv, Schneider Electric, Eaton, Corning, Bechtel, Entergy, Talen Energy and Constellation Energy. Eaton and the three utilities have no legacy relationships.
- **Human data:** Scale AI, Surge AI, Sama, iMerit, Labelbox, Appen, Invisible Technologies and Toloka. All eight have no legacy relationships. Other data/licensing entries such as Defined.ai are already present too.

These are targets for evidence collection, not assertions that each supplies every major lab. A utility should connect to a documented facility/project, and an equipment vendor to a documented product/customer, before a potential effect is traced onward to a model.

## Main model-maker coverage

This pass examines 19 existing general-purpose model-making organizations/units globally. It is not a ranking or an exhaustive definition of “main.” The additional Thinking Machines Lab gap is described above. Specialist developers such as AI21, Black Forest Labs, Stability AI, NVIDIA, Allen AI, TII, Naver and LG need the same treatment in a subsequent expansion.

“Current links” below describe the CSV's claims, not independently reconfirmed facts. **None of the 104 model records developed by these 19 entities has its own outgoing `TRAINS_ON` legacy edge.** Training links mostly sit at lab level; some model-level evidence exists separately in the map dataset and Updates ledger.

| Maker / core model count | Current coverage and main evidence gap | Next chain to resolve |
| --- | --- | --- |
| OpenAI / 21 | Azure training and CoreWeave hosting rows lack source URLs. The retrieved gpt-oss source describes inference hardware, not training provenance. | Verify capacity counterparties, exact projects, workload role and effective dates; then chip/rack/facility suppliers. Keep capital separate. |
| Anthropic / 14 | AWS and Google Cloud training rows lack source URLs. | Source each cloud relationship and model generation; distinguish accelerator training from distribution through a cloud marketplace/API. |
| Google DeepMind / 21 | A TPU training row has a URL; the Google Cloud row does not. | Model-to-TPU-generation disclosure, then generation-specific fabrication, memory, systems and site evidence. |
| Meta AI / 7 | Generic NVIDIA training row lacks a URL. The inspected original Llama 3 card identifies H100-80GB compute. | Add the scoped Llama 3 training claim; investigate named clusters, server/network supply and power without extending that claim to every Llama release. |
| xAI / 3 | Generic NVIDIA training row lacks a URL. | Source cluster and expansion phases, accelerator generations, site operators, cooling and power; attach individual models only where disclosed. |
| Mistral / 9 | Azure partnership lacks a URL; NVIDIA training is explicitly representative. | Separate partnership/distribution from training contracts and actual cluster workloads. |
| Cohere / 4 | Oracle Cloud partnership lacks a URL; NVIDIA training is representative. | Verify cloud capacity, model-specific training and deployment providers independently. |
| DeepSeek / 4 | Sourced deployment/runtime rows exist; lab-level NVIDIA training is reported without a URL. DeepSeek-V3 has separate hardware evidence. | Promote the scoped V3 H800 disclosure into reviewed model provenance; leave facility and later-model hardware unknown unless disclosed. |
| Qwen / 8 | Alibaba Cloud and Moore Threads deployment/runtime rows have URLs; NVIDIA training is representative. | Resolve Alibaba/T-Head/product identities and distinguish external Qwen hosting from the original training run. |
| Moonshot / 3 | Alibaba Cloud deployment has a URL; NVIDIA training is representative. Kimi-K2 exists in a separate training dataset under an absent core ID. | Reconcile Kimi identities and inspect training disclosures; serving documentation alone cannot fill hardware/site gaps. |
| Z.ai / Zhipu / 3 | NVIDIA training is representative; the map uses a separate `glm` family ID. | Reconcile family/model identities, then obtain version-specific training and distribution evidence. |
| MiniMax / 1 | NVIDIA training is representative. | Training report, actual compute provider, accelerator generation and separately documented serving partners. |
| ByteDance Seed / 1 | Volcano Engine deployment has a URL; NVIDIA training is representative. | Parent/lab/platform identities and model-specific original training evidence. |
| Tencent Hunyuan / 1 | Tencent Cloud runtime has a URL; NVIDIA training is representative. | Separate Hunyuan development, cloud serving, original training and chip-design activity. |
| Baidu ERNIE / 1 | NVIDIA training is representative; application relationships have URLs. | Link Baidu AI Cloud and Kunlun-related identities only with evidence of the exact role; avoid inferring training chips from ownership. |
| Huawei / 0 | Huawei and Ascend exist, but Pangu Ultra has a separate training-map record and no core model node. | Add/reconcile the Pangu model identity, review the Ascend disclosure, and resolve CANN/MindSpore, systems and facility roles. |
| Amazon AGI Lab / 1 | A training-to-AWS row has a URL; the AWS runtime row is representative. | Resolve lab, AWS, Annapurna and accelerator product generations; AWS affiliation alone does not specify Nova training hardware. |
| Apple Foundation Models / 1 | M-series runtime lacks a URL; M-series training is representative. | Separate pretraining, on-device inference and private-cloud inference. Device execution support cannot identify pretraining hardware. |
| IBM Granite / 1 | NVIDIA training is representative. | Review each model report, original training compute and deployment support; distinguish IBM company, lab and product identities. |

Two concrete provenance improvements are already supported by inspected primary sources: the [original Llama 3 card][llama3] reports H100-80GB pretraining compute, and [DeepSeek-V3][deepseek] reports 2.788 million H800 GPU-hours for full training. Neither source establishes the complete component bill of materials or a physical training campus. The Llama card leaves third-party cloud and human-data suppliers unnamed. Those unknowns should remain visible.

## Identity and data-model gaps

Three candidates are organization identities partly represented by products: **Lightmatter** has `lightmatter-passage`; **Annapurna Labs** would sit behind separately documented AWS chip-design relationships while `aws-trainium` already exists; **T-Head/Pingtouge** requires identity review alongside `alibaba-yitian` and `alibaba-hanguang`. The [Neuron source][neuron] establishes Trainium/Inferentia tooling, not Annapurna's identity. [OpenC910 documentation][xuantie] supplies historical T-HEAD attribution, not current ownership or Qwen training provenance.

Preserve existing IDs while resolving these additional issues:

- **Parent, lab and product are different entities.** Microsoft/Azure, Amazon/AWS, Alphabet/Google, Meta/Meta AI, Apple and Alibaba need appropriate organizational relationships. A parent identity gap should not be counted as a missing independent supplier.
- **Overlapping and historical names:** QCT/Quanta Cloud Technology/Quanta Computer; Coherent/Coherent Corp/II-VI; Sapeon/Rebellions; Eaton/Eaton Electrical and Schneider/Secure Power. Review legal identity and dated ownership. Keep distinct business units and historical brands; use aliases only for the same referent.
- **Typing:** Apple M-series and Huawei Ascend are currently company-labeled records; several company names ending in “Technology” are typed as technology. Fixing types is separate from adding organizations and must preserve IDs.
- **Cross-dataset joins:** `pangu-ultra`, `kimi-k2`, `baichuan-7b` and `glm` in the training-evidence table do not resolve to core entity IDs. `qwen` resolves to a lab rather than a model. Some are family references rather than missing products; use explicit family/version mappings instead of blindly making aliases.
- **Directional claims:** the representative OpenAI → `microsoft-investment` `INVESTS_IN` row resolves to Azure. It cannot establish who invested in whom. Review/supersede the claim with evidence while preserving its history.

The present validator requires exactly one developer, exactly one runtime and a representative physical path for every model. That schema is useful for illustration but too restrictive for full provenance: a model can have several supported runtimes, multiple training stages and unknown infrastructure. A future implementation should permit those cases without requiring an invented physical path. Preserve representative routes as a separately labeled educational view.

## How additions should improve update tracking

Use a model version as the starting point and build evidence separately for: training stage → accelerator generation → system/OEM → compute operator → facility/project → power/cooling/network supplier. Chip fabrication, packaging, memory and materials form additional branches; human data, licensed content and evaluation form another. There is no universal single chain.

Every relationship should carry a source excerpt, claim scope, announcement date, effective interval where known, and lifecycle status. Distinguish **training, post-training, inference compatibility, actual hosting, component supply, ownership, financing and planned capacity**. Unknown quantities and dates should stay unknown. Supplier A serving company B does not prove A supplied the particular machines used for model C.

For the 3D map, the most useful next design step is a **coverage overlay**: show disclosed paths, illustrative paths and unresolved stages distinctly; let the user filter by model version, workload and date. When news affects a supplier, trace only the supported links and label onward effects as potential exposure. Do not turn graph reachability into a claim of outage, financial loss or guaranteed model impact.

## Evidence limits and deliverables

This review combines a complete local inventory/relationship measurement with targeted external-source inspection. Corporate news, search and disclosure sites returned proxy access errors; accessible first-party GitHub documentation provided the usable external evidence. The pending company list is therefore an explicit research queue, not a fully verified current market census. No private contracts, capacity allocations, current ownership changes or undisclosed supplier identities are assumed.

Wrong-name matches were rejected: GitHub profiles named `lightmatter`, `molex`, `mercor` or `Handshake` did not establish the intended company identity. “Turing” inside “Manufacturing” is not a company match. SoftBank/TELUS/Prysmian/Nexans text in cable datasets does not create a core company record. A repository 404 or absence of a name is not evidence that a company or product has ceased to exist.

Files provided:

- [Company candidates](company-candidates.csv): 45 scoped recommendations, including partial identities and the lifecycle hold.
- [Existing company connection backlog](existing-company-link-backlog.csv): 43 records with measured relationship counts and evidence questions.
- [Coverage snapshot](coverage.json): all layer counts, maker/model IDs, direct non-developer edges, cross-dataset references and SHA-256 hashes of every production CSV/JSON input.
- [Source inventory](sources.json): 17 sources used in this review, with retrieval dates, hashes, excerpts and claim limits; 16 are pinned repository documents and one is a company profile.
- [Read-only audit script](../../scripts/audit-supply-chain.mjs): rerun with `node scripts/audit-supply-chain.mjs > /tmp/aimap-supply-chain-coverage.json` from the repository root. It writes JSON to stdout and does not change catalog data.

Recommended sequence: source the high-value existing connections; prepare the six scoped missing profiles; research the capacity, connector, power and human-data candidates; then add model/facility/component claims in the reviewed Updates workflow. Keep the remaining candidates pending until their evidence supports publication. No production entities, relationships or website behavior were changed by this review.

Validation: independently recomputed the counts; reran the audit from another working directory; checked candidate/existing-entity/source references, source hashes and excerpts, report links and whitespace. Every production CSV/JSON file matches its bytes at the audited commit. No application rebuild was needed for these research-only additions.

[tinker]: https://github.com/thinking-machines-lab/tinker-cookbook/blob/df2aff6b3992c7bd5dddece2397093f95dd5aed3/README.md
[sambanova]: https://github.com/sambanova/ai-starter-kit/blob/8f58380ff748a59cd79d4f7e94bdb326066647ff/README.md
[dmatrix]: https://github.com/d-matrix-ai/dmx-compressor/blob/69a22454751232c8fa5ff4c4ae9ce6fa37c86713/README.md
[prolific]: https://github.com/prolific-oss/rlhf_data_collection_pipeline_aitb/blob/c8d6a8c5e638b3734a518d21ea0e135b418230f1/README.md
[turing]: https://github.com/turingenterprises/SWE-Bench-plus-plus/blob/f938edd189049806fef7a76fdf01f0da55baa565/README.md
[te]: https://github.com/TEConnectivity
[enfabrica]: https://github.com/Enfabrica/hostsdk/blob/fc0dfafeee90a19e630e9cc4010a98a340e38a55/README.md
[llama3]: https://github.com/meta-llama/llama3/blob/a0940f9cf7065d45bb6675660f80d305c041a754/MODEL_CARD.md
[deepseek]: https://github.com/deepseek-ai/DeepSeek-V3/blob/9b4e9788e4a3a731f7567338ed15d3ec549ce03b/README.md
[neuron]: https://github.com/aws-neuron/aws-neuron-sdk/blob/e27a3986fa8625d4103a7ce611ee0c85ae79979a/README.md
[xuantie]: https://github.com/XUANTIE-RV/openc910/blob/b91c90914c19f114d35c8f6b73408eb241ed847c/README.md
