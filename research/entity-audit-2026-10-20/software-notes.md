# Commercial software and data-provider profile review

Reviewed October 20, 2026. This slice covers 17 existing organization/ecosystem entries and three related product/framework entries. It proposes **79 field changes across 17 entries**, leaves three entries unresolved, and supplies **29 source records** with per-field evidence. No production CSV, UI file, entity ID or relationship was changed by this research task.

The [proposed facts](software-facts.json) distinguish documented products, SDKs, capabilities and organization identity. The proposed portfolios are selected, evidenced subsets rather than claims that every commercial product has been inventoried. Existing product-category text should be preserved as unreviewed history if replaced in the public profile.

## Concrete improvements

| Existing entity | Documented information collected |
| --- | --- |
| Scale AI | Nucleus data visualization, curation, annotation review and model debugging; Agentex deployment tooling; LLM Engine fine-tuning/serving interfaces; matching corporate domain |
| Surge AI | Surge API and Python SDK; annotation project blueprints, task batches and result export; matching surgehq.ai domain |
| Labelbox | Curation, annotation, human-feedback and evaluation capabilities; dataset operations through the Python SDK; corporate domain |
| Toloka | Toloka-Kit project/pool/task pipelines; Tolokaforge agent-evaluation harness; Tendem MCP expert-delegation integration; corporate domain |
| Sama | SamaHub task APIs, Python SDK and Databricks connector; task submission and delivered-result retrieval |
| Hugging Face | Hub, Hub client, hf CLI, jobs, bucket workflows and model/data artifact management; corporate domain |
| Together AI | Model API, fine-tuning, RL SDK, cluster management, Jig deployment tooling and beta realtime transcription; interfaces are documented, access/capacity is not verified |
| Fireworks AI | Training API and cookbook covering RL, preference optimization, supervised fine-tuning, distillation and embedding fine-tuning; corporate domain |
| OpenRouter | Unified provider interface and official Python SDK; corporate domain; no fixed model count copied |
| LangChain | Framework identity, components/integrations and separation from LangGraph/LangSmith; preserved as a framework, not relabeled a company |
| Pinecone | Vector database, Python SDK, document indexes, records, retrieval and inference interfaces; corporate domain |
| Weaviate | Database, Cloud, object/vector storage, hybrid retrieval, deployment options, and Community/Enterprise license distinction; corporate domain |
| Weights & Biases | Experiment tracking, Weave, W&B Server and hosted/self-managed choices; corporate domain |
| Invisible Technologies | Matching GitHub organization explicitly links invisibletech.ai; insufficient evidence for a replacement product portfolio |
| LangSmith, LangGraph, Weights & Biases Weave | Separate product/framework summaries and role-specific evidence from their publishers' ecosystem documentation |

## Remaining gaps and accuracy limits

**iMerit, Appen and Defined.ai remain unresolved.** Their corporate websites were blocked. Empty or ambiguous GitHub profiles did not provide an adequate basis for new product, corporate identity, location, leadership or ownership assertions. Their repeated legacy categories—Human feedback, Synthetic data, Data curation—are not a verified named-product inventory.

Surge, Labelbox, Sama and Toloka have the same company/platform ambiguity in their existing records. Their retrieved documentation establishes services and tools; a separate organizational-identity decision is needed before changing the type. The LangChain framework, LangGraph and LangSmith must not inherit a corporation's founding date or headquarters simply because their names are related.

No founding dates, leadership identities, current HQ values, company ownership changes or customer contracts are proposed. SDK support, examples mentioning a model, framework integrations and benchmark runs do not establish commercial customers or the original training supply chain of a model.

The README for Scale LLM Engine contains historical examples and coming-soon statements. Its proposed profile deliberately describes documented tooling and does not claim that the hosted service or every listed feature is currently available. Together's realtime and Jig interfaces are marked beta in the inspected SDK. Toloka's Tendem repository identifies the official plugin distribution, but legal ownership among organizations/services remains outside the source's scope.

Weaviate's inspected README explicitly distinguishes Community Edition code under BSD from Enterprise Edition features requiring a commercial license. Product availability and licensing are more precise facts than a generic label such as “vector search company,” but a README is not a complete licensing analysis or commercial quotation.

## Existing location evidence that should be surfaced carefully

The atlas already records dated office evidence for Scale, Hugging Face, Pinecone, Fireworks, OpenRouter and Weights & Biases. Their entity profile HQ fields are nevertheless blank. The JSON includes the existing location references and their **August 25, 2026** review dates as `historicalLocationEvidence`, with no new current-HQ change.

For Weaviate, `research/office-locations/locations.json` separately records a fully remote/no-physical-office outcome. Do not turn a legal establishment, privacy notice address or mailbox into an employee headquarters. Scale has more than one headquarters designation; choose the relevant regional/global role explicitly instead of selecting the first row.

## Source access and reproducibility

All 20 attempted corporate homepage/service domains returned `Tunnel connection failed: 403 Forbidden`; two guessed GitHub repository paths returned 404 and were replaced by the publishers' actual repositories. These outcomes are logged separately in `blockedSources`. No proxy bypass, credentials, customer accounts or paid API operations were used.

The usable evidence consists of pinned first-party repository documents and matching organization profiles that link the intended company domain. Source JSON records exact excerpts, retrieval dates and SHA-256 values. Organization profiles are mutable and therefore have `revision: null`. Only documentation actually inspected for a proposed field is used as evidence. Cached source bodies and the fetch manifest are under the ignored `work/entity-audit-software/` directory.

Validation checked every entity ID against the catalog, every proposed field against its evidence map, every source reference, and retrieved-file hashes/excerpts. Company and product facts still absent from primary sources remain visibly unresolved.
