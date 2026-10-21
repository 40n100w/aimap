# Additional software and infrastructure evidence review

Reviewed 2026-10-20. This tranche covers **30 existing records**, with substantive scoped profiles for 27, a homepage-only finding for Cursor, and unresolved JetBrains AI Assistant and Replit Agent documentation. These are not 30 distinct companies: several entries name products, research teams, developer tools or overlapping platform identities. No production CSV/UI files were edited.

## Evidence and integration

The JSON contains 24 revision-pinned first-party sources with retrieval dates, SHA-256 hashes, exact excerpts and source limitations. It contains 72 individually described product/component items. Each proposed non-product field has source IDs; products instead have their own `productFacts` evidence. Append documented names while preserving existing unreviewed labels. Product portfolios remain partial and exact commercial availability is not independently established.

Corporate sites were blocked by the environment. Official repositories and public documentation source trees yielded usable primary evidence, including Datadog Bits AI, Sentry Seer, Elastic's Observability AI Assistant, MongoDB Atlas vector search and Modal fine-tuning examples. An unsuccessful URL or guessed repository is only a discovery failure, not evidence that a company or product is absent. Exact failures are recorded in JSON. Cached bodies and collection metadata remain in `work/entity-audit-software-additional/`.

## Accuracy findings

- MongoDB Atlas Vector, Elastic Vector Search, Redis Vector, Bits AI, Seer and the assistant records are product/capability entries; their sources do not constitute full legal-company dossiers. Grafana, GitLab, Docker, Zilliz and Anysphere had no matching core company node in the target inventory, so none was added.
- Both Databricks Mosaic research IDs, both Phoenix IDs, Modal/Modal Labs and Replicate/Replicate Cloud remain preserved. Evidence identifies shared products or teams without deciding whether these records should eventually be consolidated.
- The former dbt-core GitHub URL resolves to a repository whose main branch documents v2/Rust while v1 lives on `1.latest`. The facts retain a narrow transformation/product description and do not rename other dbt/dbt Cloud records, infer migration, or assert universal licensing changes.
- Snowflake Arctic's README contradicts itself on release year. No release date is proposed. Announced future serving-provider access is not treated as current availability. Llama 3.1 tooling compatibility is not Snowflake ownership of Meta's model.
- Datadog's Bits AI documentation is marked beta. Sentry's **Seer Agent** feature is explicitly open beta; this is not applied to all Seer features. SDK beta language for Databricks is retained in the relevant product fact.
- Milvus is documented as an open-source foundation project with Zilliz as a major contributor. Zilliz Cloud appears as a managed deployment choice, not ownership of the project or a new company node.
- Modal training evidence is a published Unsloth/Qwen example. It is not evidence of the model's original training hardware or supplier relationships. Generic lakehouse, streaming, feature-store and edge-inference labels remain unreviewed where sources only support narrower capabilities.
- Cursor's short official README only substantiates its download homepage. JetBrains AI Assistant and Replit Agent remain unresolved after official-source discovery attempts. No unsupported company facts or features were filled in.

## Target inventory and outcomes

| Existing record | Review outcome |
| --- | --- |
| `databricks` | 4 proposed fields; 2 documented product/component items |
| `databricks-mosaic-research` | 4 proposed fields; 4 documented product/component items |
| `databricks-mosaic-ai-research` | 4 proposed fields; 4 documented product/component items |
| `snowflake` | 4 proposed fields; 4 documented product/component items |
| `snowflake-arctic-team` | 4 proposed fields; 2 documented product/component items |
| `mongodb-atlas-vector` | 5 proposed fields; 1 documented product/component items |
| `elastic-vector-search` | 5 proposed fields; 2 documented product/component items |
| `elastic-ai-assistant` | 4 proposed fields; 1 documented product/component items |
| `redis-vector` | 4 proposed fields; 2 documented product/component items |
| `qdrant` | 4 proposed fields; 2 documented product/component items |
| `milvus` | 5 proposed fields; 2 documented product/component items |
| `datadog-bits-ai` | 5 proposed fields; 8 documented product/component items |
| `sentry-seer` | 4 proposed fields; 4 documented product/component items |
| `jetbrains-ai-assistant` | Unresolved; no proposed field changes |
| `replit-agent` | Unresolved; no proposed field changes |
| `cursor` | Verified homepage only; capabilities and corporate identity unresolved |
| `confluent` | 4 proposed fields; 3 documented product/component items |
| `dbt-labs` | 5 proposed fields; 2 documented product/component items |
| `airbyte` | 4 proposed fields; 5 documented product/component items |
| `fivetran` | 5 proposed fields; 1 documented product/component items |
| `neo4j-vector` | 4 proposed fields; 2 documented product/component items |
| `arize-ai` | 5 proposed fields; 4 documented product/component items |
| `phoenix-by-arize` | 4 proposed fields; 2 documented product/component items |
| `phoenix-arize` | 4 proposed fields; 2 documented product/component items |
| `modal` | 5 proposed fields; 4 documented product/component items |
| `modal-labs` | 5 proposed fields; 4 documented product/component items |
| `modal-training` | 4 proposed fields; 1 documented product/component items |
| `replicate` | 5 proposed fields; 1 documented product/component items |
| `replicate-cloud` | 5 proposed fields; 1 documented product/component items |
| `astronomer` | 4 proposed fields; 2 documented product/component items |

## Remaining information gaps

None of these developer sources independently establishes current headquarters, incorporation, founders/executives, financials, ownership changes, complete product portfolios, product-specific availability or actual supplier/customer dependencies. Those fields remain explicit research gaps rather than being inferred from compatibility, examples, names or generic tags. This review supports descriptions and named product roles; it does not justify supply-chain graph edges without additional relationship-specific evidence.
