# Company and product catalog refresh — October 18, 2026

Reviewed **108 records**: **82 existing entries updated** and **26 new entries**. The resulting catalog has **2,038 entities, 141 models and 552 relationships**. This is a scoped refresh, not a complete audit of all 2,038 entries.

The reviewed set contains 29 companies or research/model labs, 68 model records, and 11 other software, hardware or platform records. Each has a review date, a field-specific scope and documentation URLs in [`data/catalog-reviews.csv`](../data/catalog-reviews.csv). Profiles display that scope, and entries outside this pass explicitly lack a dated review.

## What changed

- Updated company and lab product portfolios for OpenAI, Anthropic, Google DeepMind, Meta AI, Mistral, Cohere, Qwen, Z.ai / Zhipu AI, MiniMax, Moonshot AI, DeepSeek, Black Forest Labs, Stability AI, NVIDIA, AMD, Cerebras, Groq, AWS, Microsoft Azure, Google Cloud, Hugging Face, Nebius, Together AI, Fireworks AI, OpenRouter, Pinecone, Weaviate and Weights & Biases. Added Biohub with its documented ESM products.
- Updated model identities and added recent products from official SDK lists and publisher repositories. SDK enum checks are explicitly narrower than capability or availability verification. No claim of universal access, price, performance ranking or release date is inferred from an enum.
- Recorded OpenAI's SDK-announced shutdown dates for GPT-5 / mini / nano and o3 (December 11, 2026), o4-mini (October 23, 2026), and GPT-5.1 (April 1, 2027). Historical records remain in the atlas. Sora 2 is explicitly an identifier/modality check with availability still unverified.
- Corrected image-only labels for FLUX.2 and Stable Diffusion 3.5, scientific capabilities for AlphaFold 3 / ESM3 / Evo 2, and media capabilities for image, video, music and speech models.
- Reclassified BioNeMo as **BioNeMo Recipes**, a framework/tool collection; corrected its PyTorch runtime. NVIDIA BioNeMo is a platform, and Apple Neural Engine and AMD Ryzen AI are technologies rather than independent companies.
- Replaced representative vLLM runtime links for reviewed specialist models with source-backed PyTorch, JAX, NVIDIA NIM or TensorRT LLM links. Physical supply paths remain illustrative and are separate from software execution support.
- Updated Microsoft Foundry and Gemini Enterprise Agent Platform naming from their official SDK documentation. Refreshed selected accelerator coverage from AMD's ROCm compatibility tables; this does not reverify MI400 or NVIDIA's full roadmap.
- Featured GPT-6.1 Sol, Claude Opus 5.5, Gemini 4 Argon and Qwen3.8 as editorial portfolio representatives. Portfolio order is not a performance ranking or release chronology.

## Additions

| Entry | Type |
| --- | --- |
| TensorRT LLM | Framework |
| Qwen Code | Agent |
| AMD Instinct MI350 Series | Technology |
| GPT-6.1 Sol | Model |
| GPT-6 Sol | Model |
| GPT-6 Luna | Model |
| Claude Opus 5.5 | Model |
| Claude Sonnet 5.5 | Model |
| Claude Haiku 5.5 | Model |
| Claude Mythos 5.1 | Model |
| Claude Fable 5.1 | Model |
| GPT Image 2.5 Sunburst | Model |
| GPT Image 2.5 Flare | Model |
| Gemini 4 Argon | Model |
| Gemini 3.5 Flash-Lite | Model |
| Gemini 3.8 TTS | Model |
| Lyria 3.5 | Model |
| Nano Banana 2.1 | Model |
| Qwen3.5 | Model |
| Qwen3.6 | Model |
| Qwen3.8 | Model |
| GLM-5.3-Flash | Model |
| FLUX.2 [klein] | Model |
| Biohub | Research lab |
| ESMC | Model |
| ESMFold2 | Model |

## Dates and evidence

Release years were populated or corrected for 11 records using the actual dates in publisher model tables or release notes: Llama 4 Scout, Llama 4 Maverick, FLUX.2, Stable Diffusion 3.5, Llama 3.3 70B, Gemma 3, Llama 3.1 405B, Qwen3.5, Qwen3.6, Qwen3.8, FLUX.2 [klein]. Other missing dates remain blank.

This pass used **50 retrieved documentation files**. The [source inventory](catalog-sources-2026-10-18.json) records the URL, retrieval date, byte count and SHA-256 for each source. The per-entity CSV links each review to the documentation used. Hashes identify the retrieved content; upstream branch URLs can change after this review.

Most evidence comes from official GitHub SDKs, model cards, model repositories and product documentation. NVIDIA's TensorRT LLM documentation is first-party evidence for V4 runtime support and corroborates the model names; it is not DeepSeek's own release or training disclosure. ESM3's historical EvolutionaryScale developer edge is retained while its current Biohub documentation is cited for model use; no corporate acquisition is inferred.

Direct access to several corporate documentation sites was denied by this environment's network proxy, including OpenAI, Anthropic and Google model portals. Accessible official repositories supported the changes above. A missing GitHub path or an omitted SDK identifier was not treated as proof that a product does not exist.

The base edition stays **September 3, 2026**. The separate **October 18, 2026 catalog review** stamp covers the records and fields stated here. Office locations, cable routes, exchange snapshots, undisclosed training infrastructure, corporate ownership, leadership, and most unreviewed catalog entries were not refreshed. Founding dates and unsupported product generations were not guessed.

## Maintenance and validation

Add a dated row to `catalog-reviews.csv` only after reading the source; record the limited scope of what it establishes. Keep entity IDs stable and distinguish model API identifiers, applications, hardware and independent organizations. The historical `expand-model-catalog.mjs` helper does not discover or refresh current releases.

Validation covers entity and review references, unique developer/runtime edges, connected representative paths, all existing geographic datasets, unit tests, the production build and browser flows for fresh model search, company products, review scope and historical shutdown notices. The browser fixtures derive catalog counts from the data so legitimate additions do not create stale expectations.

Completed checks: all 8 data validators, 6 unit tests, 9 browser scenarios and the production build passed. The evidence audit matched all 108 reviews to the 50 retrieved documents. The running production build was refreshed and verified to serve 2,038 entities and 108 review records.
