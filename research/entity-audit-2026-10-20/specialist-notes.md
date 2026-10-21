# Specialist model and application evidence review

Reviewed and retrieved on **2026-10-20** in the task's America/New_York date context. This pass supplements `model-company-facts.json`; it does not replace that earlier work. No production files were modified by this research agent.

`specialist-facts.json` assesses **35 existing catalog records across 18 requested brands**, proposes scoped field changes for **19 records**, and records **62 individual product/interface facts** for **19 records**. It uses **22 freshly retrieved primary sources**: 20 revision-pinned repository documents and two mutable organization-profile pages. All 35 IDs were checked against `data/entities.csv`; every source hash and stored excerpt, field-to-source reference, and product-to-source reference passed local validation. These counts describe evidence coverage, not a complete or current commercial portfolio.

## Evidence boundaries

Each source includes its exact URL, retrieval date, SHA-256, excerpt and evidence limitations. Repository sources also include the exact revision. All 62 product facts now have a directly matched, contiguous `evidenceExcerpt`, its 1-based `evidenceLine`, and `evidenceSourceId`; the quoted source is first in that item's `sourceIds`. Table/API groups sometimes share a relevant source section rather than combining disconnected passages. `productFacts` separates a documented product or interface from the inherited `products` list, so a source for one feature does not mark a whole portfolio as verified. A model identifier in an SDK example is recorded as an identifier; it is not a release announcement or proof of continuing commercial access. No prices, independent performance claims, customer contracts, training-chip assignments or corporate headquarters were inferred from these sources.

Corporate ownership, legal identity, founding dates, leadership, headquarters and complete portfolios remain unresolved where the inspected sources do not establish them. SDK publication supports attribution of that SDK and its documented interface, not necessarily legal ownership of every underlying model. In particular, an LLM gateway or hosted model catalog does not establish that the platform developed the models, owns them, or has a documented supplier contract.

## Coverage and proposed improvements

| Existing main record | Directly documented product scope | Important boundary or remaining gap |
| --- | --- | --- |
| `ai21` | Jamba chat/streaming; Maestro planning/orchestration; AI21 Agents and Conversational RAG | Agents and Conversational RAG are explicitly beta in the inspected SDK. `ai21-labs-research` is not established as a separate legal entity. |
| `stability` | Stable Diffusion 3.5 Large, Large Turbo, Medium and Large ControlNets; stable-audio-tools | Reference-code licensing is not a universal model-weight license. The related `stability-audio` record covers an audio product/program; speech recognition is not established by its audio-generation source. |
| `black-forest-labs` | Six named FLUX.2 variants and image generation/reference-image editing | Licenses differ by variant: inspected 4B variants list Apache-2.0, while listed 9B/dev variants use the FLUX Non-Commercial License. Generic language-model/sovereign-AI labels on its separate Research record remain unverified. |
| `runway` | Separate image-to-video, text-to-video, text-to-image and audio API groups | A `gen4_turbo` image-to-video example does not establish every modality for the broader `runway-gen-4` record, nor ownership of every model exposed by platform endpoints. |
| `luma-ai` | Image creation/reframing; video generation/modification/reframing; separate audio and upscaling operations | `ray-2` is documented as an SDK example identifier. An audio endpoint does not establish native audio for every Ray model. |
| `elevenlabs` | Eleven v3, Multilingual v2, Flash v2.5, Turbo v2.5; ElevenAgents; Speech Engine | Model language counts are explicitly publisher-stated. A separate correction for `eleven-v3` replaces its unsupported generic Image/Video/Audio product labels with the directly documented text-to-speech/multilingual/multi-speaker role. |
| `hume-ai` | Empathic Voice Interface and text-to-speech | The current SDK separates OS/runtime support by interface and removes historical legacy interfaces. Historical methods are not promoted to current product capabilities. |
| `writer-ai` | Chat/application APIs; graph/file question-answering workflows; PDF parsing, search and vision endpoints | `palmyra-x5` is an example model identifier. `writer-palmyra` represents a model-family label, not a separately established company; all platform capabilities must not be attributed to every Palmyra model. |
| `perplexity` | Search API results and chat/streaming APIs; `sonar` example identifier | The separate Deep Research and Comet records require their own product-specific evidence. Generic search/chat SDK support is insufficient. |
| `midjourney` | Official organization profile links its website | Corporate site blocked; no new product-version or capability facts. `midjourney-models` and `midjourney-v7` remain explicitly pending. |
| `suno` | Bark checkpoints and generative text-to-audio, including speech/music/effects | Bark documentation links a separate Suno text-to-music service. Bark's MIT statement and research limitations do not establish the commercial service's license or Suno v5 capabilities. |
| `deepl-research` | Text/document translation; Write API; terminology glossaries | Write improves/rephrases text and does not itself translate. Existing Research naming does not establish a separate research company. |
| `synthesia` | No new product facts | Corporate site blocked. A same-named GitHub account did not establish the intended company identity. |
| `heygen` | Publisher-namespaced LiveAvatar web SDK, video/voice sessions and a client-side background-replacement demo | This is SDK/product evidence, not a comprehensive HeyGen portfolio or separately verified legal parent/subsidiary relationship. |
| `assemblyai` | Prerecorded, short-clip, dictation and streaming transcription; LLM Gateway/transcript workflows | Inherited Voice synthesis and Music models labels remain unverified. Routing to other providers is not model ownership or verified supplier-contract evidence. |
| `speechmatics` | Current batch, real-time, agent-STT, voice-agent and TTS packages | Current documentation does support text-to-speech. Music models remains unverified. Legacy `speechmatics-python` is deprecated, with bug/security patches scheduled only through 2025-12-31. |
| `pika` | No new product facts | Corporate site blocked. Same-named repositories did not establish the intended video company's identity; the Python AMQP package named pika is unrelated evidence. |
| `fal-ai` | Serverless deployment/model-serving runtime; `fal` deployment SDK/CLI; `fal-client` API client | Hosting or calling a model does not establish that fal developed or owns it. No pricing or billing promise was adopted. |

## Related records and identity review

The pass preserves all existing IDs. Besides the main brand records, direct product evidence is attached to `stability-audio`, `eleven-v3`, `elevenlabs-conversational-ai` and `writer-palmyra`. The conversational-agent source uses the name ElevenAgents; it does not establish a formal rename date or require an ID change.

The following 13 related records receive explicit notes without unsupported field changes: `ai21-labs-research`, `stability-ai-research`, `black-forest-labs-research`, `runway-research`, `suno-research`, `midjourney-models`, `perplexity-deep-research`, `perplexity-comet-agent`, `runway-gen-4`, `luma-ray`, `midjourney-v7`, `suno-v5`, and `pika-2-2`. Research/program/model/app labels should remain distinguishable from separately incorporated companies. Source access failure is not evidence that any record or product does not exist.

Inherited product lists remain unreviewed except the narrowly supported `eleven-v3` modality correction. The source-supported `productFacts` can be displayed alongside those lists without treating unverified inherited labels as confirmed or silently removing entities.

## Access failures and reproducibility

Direct requests to `https://www.midjourney.com`, `https://www.synthesia.io` and `https://pika.art` failed at the proxy CONNECT stage with 403 Forbidden. The failure does not show that the origin websites rejected the request. GitHub discovery lookups for two guessed HeyGen streaming-SDK paths returned 404; the published LiveAvatar SDK was then found and retrieved successfully. These attempts are recorded in `blockedSources`.

The GitHub `synthesia` and `pika-labs` profiles lacked an adequate official identity/website link and were excluded as company evidence. Alternate guessed `synthesia-io` and `Pika-Effects` organizations were not found. The correct Perplexity SDK (`perplexityai/perplexity-py`) was located through the official organization after an initial wrong repository guess. A wrong repository path conveys no product-lifecycle conclusion.

The only mutable profile sources used are `https://github.com/Midjourney` and `https://github.com/writer`, solely for explicit website links. Their captured bytes and hashes are recorded; they have no Git commit revision. No profile location text was converted to a current headquarters claim.

Raw inspected documents are cached under ignored `work/entity-audit-specialists/` with a local manifest. `specialist-facts.json` retains exact revision URLs and audit excerpts so the evidence record does not depend on committing these raw caches. Fresh retrieval dates are distinct from any older product publication or lifecycle dates quoted in the sources.
