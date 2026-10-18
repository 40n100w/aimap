# Profile and coverage review — October 18, 2026

This pass replaced generic descriptions and added concrete “What it provides” and “How it is used” sections for 13 priority entries. It does not represent a refresh of every entity, model release, founding date, or relationship in the atlas. The dataset edition date remains September 3, 2026.

The following primary project documentation was retrieved successfully during the review:

| Entries | Primary documentation | Scope used |
| --- | --- | --- |
| NVIDIA, CUDA | [NVIDIA CUDA Python](https://github.com/NVIDIA/cuda-python) | CUDA runtime access, bindings, and GPU programming tools |
| AMD | [ROCm](https://github.com/ROCm/ROCm) | GPU compilers, runtimes, libraries, HIP and framework integration |
| PyTorch | [PyTorch](https://github.com/pytorch/pytorch) | Tensor computation, automatic differentiation, CPU/GPU execution |
| vLLM | [vLLM](https://github.com/vllm-project/vllm) | Model serving and attention-memory management |
| Hugging Face | [Transformers](https://github.com/huggingface/transformers) | Model implementations, checkpoints, training and inference interfaces |
| OpenAI | [OpenAI Python SDK](https://github.com/openai/openai-python) | Model API access and application integration |
| Anthropic | [Claude Python SDK](https://github.com/anthropics/anthropic-sdk-python) | Claude Messages API access |
| AWS | [SageMaker Python SDK](https://github.com/aws/sagemaker-python-sdk) | Managed model training and deployment |
| Microsoft Azure | [Azure SDK for Python](https://github.com/Azure/azure-sdk-for-python) | Service clients and resource-management libraries |
| DeepSeek, DeepSeek-V3 | [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) | Published model architecture, weights and deployment guidance |
| Llama 3.1 405B | [Meta Llama models](https://github.com/meta-llama/llama-models) | Model-family documentation, weights and licensing |

These links support the technical profile summaries. They are not new evidence for the existing founding dates, every listed product generation, a specific training campus, or a claimed commercial relationship. The “Why it matters” text is editorial interpretation.

The UI now reports the proportion of entities with timeline dates and counts of recorded citations. An entry without profile citations is labeled as an editorial overview. Model portfolio ordering is labeled editorial rather than implying a verified lifecycle or release chronology. Additional profile and date research remains visible work; missing information is not filled with guessed facts.

Relationship corrections:

- Removed the NVIDIA → NVIDIA training self-link and prevented the model importer from creating it again.
- Changed the `apple-silicon` alias from the MLX software framework to the existing Apple M-series hardware entry, preserving the meaning of “MLX runs on Apple silicon.”
- Directional profile counts now share supply/dependency semantics with tracing. Mutual relationships have their own count, and self-links are rejected by validation.
