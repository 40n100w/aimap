# Additional compute, server, network and storage review

This tranche covers 19 existing companies with **56 granular product/interface facts**, 30 proposed fields (19 append-only product subsets and 11 official/developer website references), and 29 sources. No production files, prior research deliverables or broad company descriptions were changed.

The parent should append newly documented names, retain existing strings as individually unreviewed, and consume `productFacts` rather than marking a whole portfolio verified. Each product fact specifies its own kind, role, source references and claim limits. Hardware, architecture families, paid platforms, API interfaces, SDKs and supporting drivers remain distinct.

## Reviewed scope

| Existing company | Documented additions / review scope |
| --- | --- |
| NVIDIA | NCCL GPU communication library only; prior hardware portfolio preserved |
| AMD | Instinct MI355X, MI350X, MI325X, MI300X and MI300A identities/architectures from ROCm compatibility table |
| Intel | OpenVINO inference toolkit; Xeon/Gaudi product facts still require hardware sources |
| Dell | PowerScale arrays and their Ansible management modules; server portfolio preserved |
| HPE | OneView infrastructure management and Python SDK; hardware portfolio preserved |
| Lenovo | XClarity Administrator and PyLXCA management tooling; ThinkSystem/Neptune hardware portfolio preserved |
| Supermicro | Redfish management API and five explicitly listed X12/H12 server models; historical support list, not newest AI systems |
| Cisco | NX-OS and NX-OS Terraform provider; tests on virtual Nexus 9Kv do not establish physical switch capabilities |
| Juniper Networks | Junos software integration and Junos PyEZ automation; no ownership inference |
| Qualcomm | AI Hub Models and AI Hub Workbench compilation/profiling; no original model authorship inference |
| Arm | Compute Library plus Cortex-A, Neoverse and Mali architectural targets; no specific licensee chip or commercial terms |
| Cerebras | WSE-3, CS-3 and inference API identities; performance superlatives excluded |
| Groq | API and Python SDK; hardware generation and fleet capacity remain unverified |
| Tenstorrent | TT-NN, TT-Metalium, Galaxy/Wormhole, n300/Wormhole and p150/Blackhole demo platforms |
| NetApp | ONTAP, Element, Trident and three explicitly labeled hyperscaler storage integrations |
| Pure Storage | FlashArray, FlashBlade and Pure1 REST API surfaces plus py-pure-client; corporate naming remains a review question |
| VAST Data | VAST Database, VAST Catalog and Python SDK; separate from physical storage appliances |
| WEKA | WekaFS and WEKA CSI integration; performance ranking excluded |
| DDN | EXAScaler storage and CSI file driver with version-scoped compatibility |

## Accuracy limits requiring follow-up

- **Pure Storage naming:** the inspected organization profile and SDK README use “Everpure.” This is an evidence-backed reason for a naming investigation, not sufficient evidence to change the legal company, ownership or effective date. The current entity ID and name are preserved.
- **Supermicro age:** the Redfish documentation names X12/H12 models. These are documented historical/product identities; the source does not establish that they are the newest systems or available for sale now. Do not replace the existing GPU-server/rack context with this support list.
- **NetApp integrations:** Azure NetApp Files, Google Cloud NetApp Volumes and Amazon FSx for ONTAP are typed as cloud-service integrations. Their presence in Trident documentation does not establish that NetApp independently owns or operates hyperscaler infrastructure.
- **AMD support:** ROCm's supported-device table has OS-specific restrictions. It establishes device identities and support scope, not latest hardware, shipment status or a particular model-training cluster.
- **Tenstorrent demonstrations:** named models and hardware in examples/benchmarks do not establish original model training, customer contracts or independently measured performance.
- **Support software:** management SDKs, CSI drivers and orchestration tools supplement company offerings. They do not replace server/storage/accelerator portfolios in the catalog.
- No fresh leadership, founding date, headquarters, current ownership, funding or revenue claims were established. All 19 requested corporate homepages returned proxy `403 Forbidden`; each URL/error is recorded in `blockedSources`.

## Source handling and validation

Nineteen product documents are pinned GitHub repository snapshots. Ten additional company-associated organization profiles provide exact official/developer website links; these are mutable profiles with retrieval hashes. The WEKA website comes directly from its maintainer table. Cached content is under ignored `work/entity-audit-systems/`, with the full retrieval manifest in `sources.json` there.

Validated all 19 entity IDs, 56 product names/roles/scopes, per-item references, source hashes and exact excerpts. Only line endings were normalized when comparing excerpts. Initial incorrect README paths were corrected; those 404s were not treated as evidence of company or product discontinuation.
