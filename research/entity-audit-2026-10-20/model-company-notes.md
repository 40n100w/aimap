# Model-maker company and product review — October 20, 2026

This review covers **19 existing catalog records**. It proposes field changes for **15 records** and provides **68 individually scoped product facts for 18 records**, supported by **29 freshly retrieved, pinned first-party repository documents**. Huawei is included as an assessed record with no new facts proposed by this pass. No production files, entities or relationships were changed here.

The integration file is [model-company-facts.json](model-company-facts.json). Every proposed field has source IDs and a scope. Each product fact has its own name, role, sources, availability caveat and, where supported, documented attributes. Product facts are a selected documented inventory, not a claim that every company product has been found. Existing products should remain available as historical/unreviewed entries rather than silently disappearing during integration.

## Most useful changes

Seven important records still had generic descriptions or empty product/use summaries. The retrieved documentation supports replacing those summaries:

- **xAI:** Grok API workflows for text, image and video, synchronous/asynchronous Python clients, tool calling and structured outputs. The SDK examples use `grok-4.6` and `grok-imagine-video`; those are documented identifiers, not independently verified release or availability claims.
- **ByteDance Seed:** the source explicitly identifies the ByteDance Seed Team and the Seed-OSS family, including base, instruction-tuned and no-synthetic-instruction-data variants. The documented family uses 36B parameters and a 512K context; its release is recorded as August 20, 2025 under Apache-2.0. This source does not newly validate the inherited Doubao label.
- **Tencent Hunyuan:** Hunyuan-A13B has a documented 80B total / 13B active-parameter architecture, 256K context and named pretrained/instruct/quantized variants. Website and API links are provided by the publisher. These facts do not establish its original training chips or a comprehensive Tencent portfolio.
- **Baidu ERNIE:** ERNIE 4.5 model variants and ERNIEKit provide concrete model/development-tool coverage, with PaddlePaddle-based training and inference guidance. ERNIE Bot is explicitly linked. Marketing benchmark superiority claims were not adopted.
- **Apple Foundation Models:** Apple's actual Foundation Models Python SDK gives direct evidence of the on-device system-model role. It documents streaming text, guided generation and app-feature evaluation, with macOS/Xcode/Python and compatible-device requirements. This is much stronger evidence for this record than merely citing AXLearn, which is a broader training library.
- **Amazon AGI Lab:** Amazon's Nova documentation supports a product portfolio covering multimodal understanding, Nova Sonic speech, multimodal embeddings and Nova Act browser automation. It does not prove the exact legal or organizational boundaries of a unit named “Amazon AGI Lab.” The proposed description therefore describes Amazon's products rather than inventing a lab charter.
- **IBM Granite:** Granite is a model family/program, not an independent company. Granite 4.0 documentation names model variants and describes multilingual generation, coding, RAG, tool use and JSON output, with base/instruct checkpoints and an Apache-2.0 release statement.

## Record-by-record scope

| Existing ID | What was checked | What remains unresolved |
| --- | --- | --- |
| `openai` | Responses and Realtime APIs, Codex CLI/editor/app/web paths, Agents SDK concepts | Full model identifier list and lifecycle were not reverified by these README sources; company structure, HQ and leadership remain separate |
| `anthropic` | Claude Messages API, SDK tool helpers, Claude Code coding workflows | Full Claude model list, corporate facts and hosting/training supply chain |
| `deepmind` | Gemini API integration, Gemma implementations, AlphaFold 3 inference and use restrictions | Full Google/DeepMind product and legal-entity boundaries; current Gemini/Veo/Lyria version inventory |
| `meta-ai` | Published Llama release table, downloadable weights, licenses/model cards | Meta's wider commercial portfolio, corporate facts and model-specific infrastructure |
| `xai` | Grok SDK/API functionality and example identifiers | Release dates, complete current model roster, pricing, ownership and clusters |
| `mistral` | La Plateforme chat/embedding interfaces, audio/classification operations, Vibe | Complete product/model roster, beta entitlements, corporate facts and infrastructure |
| `cohere` | Command-R, Command-A, Embed and supported SDK clients; OCI-specific limitations | Complete current portfolio, non-OCI service entitlements and company/supplier facts |
| `deepseek` | R1, R1-Zero and distilled model roles | Existing V4 items remain separately evidenced through NVIDIA; R1 documentation cannot revalidate V4 training or lifecycle |
| `qwen` | Qwen3.5/3.6/3.8 repository, Qwen Code and publisher-linked Qwen Studio | Complete Alibaba company boundaries and original model-training suppliers |
| `moonshot-ai` | Kimi K3 role, model attributes and publisher-linked homepage | Full Kimi product history, legal identity, leadership/HQ and infrastructure |
| `zhipu-ai` | GLM-5 model variants, precisions/downloads and API links | Legal-company naming/history, availability entitlement and training supply chain |
| `minimax` | M3, Sparse Attention, Agent/API links and publisher homepage | Complete media/product portfolio, legal-company facts and current corporate status |
| `bytedance-seed` | Seed Team identity, Seed-OSS checkpoint variants, website | Doubao service details, wider ByteDance products and organization boundaries |
| `tencent-hunyuan` | A13B model family, variants, role, website/API links | Wider Hunyuan portfolio, Tencent parent facts and training provenance |
| `baidu-ernie` | ERNIE 4.5, ERNIEKit and ERNIE Bot link | Complete ERNIE lifecycle and Baidu cloud/chip/company relationships |
| `apple-foundation-models` | On-device framework and Python SDK, capabilities and requirements | Formal research-unit identity, original training, private-cloud model stack and wider Apple portfolio |
| `amazon-agi-lab` | Nova product workflow families and Nova Act SDK | Formal lab identity, complete current model roster, regional access and original training hardware |
| `ibm-granite` | Granite 4.0 family, variants, license statement and usage examples | Parent/product typing, entire Granite portfolio and IBM corporate facts |
| `huawei` | Reviewed current catalog scope; no new verified field changes | Existing corporate profile was not refreshed here; Pangu needs its actual primary report/repository rather than a guessed path |

## Accuracy findings that affect integration

**Company identity and product identity must remain distinct.** Apple Foundation Models and IBM Granite currently carry the `Company` type, but their names refer to model/framework or model-family programs. Amazon AGI Lab is an organizational label rather than a separately established legal company in the inspected evidence. Keep their IDs and histories; resolve typing and parent relationships explicitly. Do not copy a parent's headquarters, founding date or leadership into a product record.

**An SDK example is weaker than a release announcement.** The xAI SDK example names are useful facts about documented API usage. They do not establish launch date, ranking, account access, uptime or a complete supported-model list. The OpenAI and Anthropic model-enum reviews from October 18 retain their own limited scope; this README review does not silently renew all their model records.

**Availability can vary across products and providers.** Cohere's SDK says Generate/Rerank are not available through OCI on-demand inference and discusses dedicated endpoints. That restriction should not be generalized to Cohere everywhere. AlphaFold model parameters and the server have their own use restrictions; the entire Google model portfolio is not uniformly unrestricted open source.

**Current repositories can contain historical text.** The Amazon sample README calls Nova Act an early research preview. The current `aws/nova-act` SDK README describes an AWS service for production UI workflows, labels external-tool integration as preview, and says SDK versions older than 3.0 are unsupported. The stronger product SDK source is used for the product fact; the sample wording is not used as current lifecycle status.

**Documentation describes capabilities, not demonstrated customer outcomes.** Benchmarks, “state-of-the-art” adjectives and provider efficiency claims were omitted from profile changes. Model architecture/context values are attributed to the publisher documentation. Source code/runtime support does not identify original model-training hardware, a facility or a paid supplier/customer relationship.

## Source access and reproducibility

The source records include exact pinned URLs, repository revisions, SHA-256 hashes, retrieval/review dates and line-referenced excerpts. Files are cached in the ignored `work/entity-audit-models/` directory for validation; the saved JSON contains the evidence needed to identify and refetch each source. No prior local source was mislabeled as a new retrieval: all 29 sources used here were fetched on October 20.

Fresh requests to OpenAI's About page, Anthropic's company page, Google DeepMind's About page and an Apple Newsroom page returned **proxy CONNECT 403 Forbidden**. Corporate HQ, founding, leadership, legal ownership, finances and complete product inventories therefore remain pending. Three guessed repository/README paths returned 404; these were recorded as discovery failures, not evidence that the corresponding company or product is missing or discontinued.

Validation checks source hashes and normalized exact excerpts, existing entity IDs, source references for every proposed field/product, unique product names within each entity, and that no new production entity or relationship is introduced. A source-backed technical profile still does not constitute complete company diligence.
