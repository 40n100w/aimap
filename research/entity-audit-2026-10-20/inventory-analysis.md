# Company and product inventory assessment — October 20, 2026

Every one of the **2,038 catalog records** was checked for populated fields, profile sources, catalog-review scope, generic wording, location evidence and identity ambiguity. This is an exhaustive **inventory assessment**, not an independent verification of every company or product. No production records were changed by this assessment.

The user's concern is supported by the data: most entries are category placeholders, not researched company profiles. All records contain a `products` list and description, but that apparent completeness hides substantial evidence and identity gaps.

## Measured gaps

| Field or condition | All 2,038 records | 1,108 company/lab-labeled records |
| --- | ---: | ---: |
| Website absent | 1,944 | 1,092 |
| Dedicated founded field absent | 2,030 | 1,100 |
| Leadership absent | 2,030 | 1,100 |
| Headquarters field absent | 2,030 | 1,100 |
| What it provides absent | 1,916 | 1,075 |
| How it is used absent | 1,916 | 1,075 |
| Profile citations absent | 1,916 | 1,075 |
| Dated catalog review absent | 1,930 | 1,079 |
| Timeline year absent | 1,940 | 1,054 |
| Country missing or nonspecific | 1,415 | 754 |

These are field-presence counts, **not accuracy scores**. Corporate fields do not apply to every model or software project. Some founding or release years already exist in `timelineYear` even when the dedicated founded field is blank. Existing citations and a populated date likewise do not mean all claims are verified.

There are **1,861 generic descriptions**: 1,665 use “participates in” and 196 use “is a structurally relevant part of.” Including the two detected generic “why it matters” templates, **1,871 records** have generic profile text. The phrases repeat layer/cluster categories rather than establish what the particular organization sells or develops.

The product-evidence assessment yields:

- **1,916 records:** no profile citations or dated product/catalog review sources.
- **14 records:** profile citations, but no dated field-specific product review.
- **108 records:** an existing, limited catalog review. Its stated scope is preserved; it does not establish a complete current product portfolio, leadership, ownership or supplier relationships.

Only 94 website fields are populated: 66 point to raw GitHub source documents, 9 to repositories and 19 to other sites. Company profiles such as OpenAI, Anthropic, AWS, Azure and Hugging Face link to SDK/project repositories, while NVIDIA and AMD link to particular products. These are useful sources but should not all be labeled corporate homepages.

All 2,038 product lists are nonempty, but many repeat generic category bundles across unrelated entities. For example, 16 entries share “Human feedback / Synthetic data / Data curation,” and 17 share “Speech recognition / Voice synthesis / Music models.” Repetition is a review signal, not proof that every repeated item is wrong. **Nanya Technology's DRAM/NAND/HBM list and Tokyo Ohka Kogyo's EUV resist/photomasks/pellicles list require product-by-product evidence** rather than acceptance based on their cluster.

## Identify the company before researching its products

Limiting the work to `type=Company` would miss many organizations and incorrectly treat products as corporations. The exhaustive CSV retains existing types and adds a deliberately uncertain `likelyRecordKind` assessment.

| Identity screening result | Records | Interpretation |
| --- | ---: | --- |
| Organization or business-unit candidate under existing company/lab labels | 973 | Corporate identity and commercial status still require evidence |
| Organization candidate under a product-like type | 247 | 110 Platform, 100 Application, 20 Technology and 17 Agent entries warrant organization review |
| Product/system/business-unit candidate labeled Company | 101 | Clarify owner and record scope before adding headquarters or executives |
| Facility/manufacturing-site candidate | 9 | A site should not automatically be treated as a legal company |
| Research/community/standards organization candidate | 31 | Determine nonprofit, commercial or mixed affiliation rather than guessing |
| Model/product/service record under existing labels | 512 | Research owner, product identity and availability separately |
| Software/standard/project record under existing labels | 155 | Corporate fields may not apply |
| Material/infrastructure record | 10 | Supplier or operator ownership may differ from the entity represented |

The named exceptions are **research leads based on the names and current context**, not verified reclassifications. No row is labeled a verified legal company by this audit.

Examples worth resolving early:

- **Organizations under product-like types:** Nanya Technology, Unimicron Technology, Quanta Cloud Technology, Surge AI, iMerit, Appen, Labelbox, Adobe, Salesforce and ServiceNow.
- **Products or systems under Company:** Apple M-series, NVIDIA Jetson, AWS Graviton, Samsung PM1743, Broadcom Tomahawk, Lenovo Neptune, ROS, MuJoCo and OpenVLA.
- **Facilities under Company:** Coherent Sherman, Infineon Kulim, onsemi East Fishkill and STMicroelectronics Catania.
- **Research/community identity questions:** LAION, BigScience, OpenBMB, Open Robotics, MLCommons and university or institute laboratories. Commercial status is not determined from the existing label.

The [prioritized identity-review queue](identity-review-queue.csv) enumerates **all 456 flagged records**, with explicit questions and no verified reclassifications. There are **38 explicit identity-review groups** in the summary, including QCT/Quanta Cloud Technology/Quanta Computer, Coherent/Coherent Corp/II-VI, SPIL/Siliconware Precision, Tongfu/TFME, CXMT/ChangXin Memory, Sapeon/Rebellions, Kohler Energy/Rehlko and numerous company/product pairs. These groups intentionally mix potential duplicates, historical names, parent/unit distinctions and product families. They are not merge instructions. Preserve all IDs and histories while establishing which relationships apply.

## Information already collected but disconnected from profiles

The office-location dataset contains **2,531 rows for 112 company IDs**, including **159 headquarters-labeled rows**. Joining `companyId` and explicit `entityIds` reaches **117 core records**. Of those, 110 have at least one headquarters row, and **109 have an empty profile headquarters field**. **105 records** have location evidence while lacking profile or catalog-review sources.

That means some information is already collected but not visible or reconciled in the company profile. TSMC, ASML, Applied Materials, Lam Research, KLA, Arm, SK hynix, Micron, Dell, Cisco and many others have reusable source trails in the location dataset.

This is not permission to choose the first address and populate headquarters automatically. ASML has four headquarters-labeled rows, Applied Materials six and Tokyo Electron eighteen. Those may concern subsidiaries, regions or historical entities. Each location retains its source, date, status and coordinate precision; some rows still need review. A registered office, regional headquarters, factory or company office is not necessarily the group's headquarters, and none establishes a model training facility.

The inventory includes existing location sources and headquarters-row counts so the research can reuse evidence without overstating its scope or freshness.

## A complete dossier should have explicit evidence boundaries

For each commercial organization, establish identity/legal name and trading names; current parent and operating status; official website; founding versus incorporation dates; headquarters and separately scoped offices; leadership with an as-of date; what the company actually provides; and concrete products/services with their lifecycle and evidence. Public financial and ownership information can be added where available without assuming that private companies disclose equivalent detail.

For each product, collect the actual name/family, owner, category, purpose, availability/lifecycle, public documentation, relevant specifications and supported use. “GPU servers” is a category, not a catalog of the vendor's products. A model in an SDK enum is an identifier disclosure, not proof of general availability or the hardware used in its training.

Source claims at the field or product level. Keep corporate facts, product capabilities, deployment compatibility, customers, suppliers and editorial significance distinct. A homepage citation should not silently validate every field. Mark missing, unreviewed, disputed, historical and unavailable information explicitly; none should be filled from a generic cluster template.

## Files and reproducibility

- [`inventory.csv`](inventory.csv) has one row for every core entity, with its current type, uncertain kind assessment, missing fields, generic-text flags, product-evidence state, current product list, existing source trails, location counts, identity groups and research priority.
- [`inventory-summary.json`](inventory-summary.json) contains exact totals, missing-field counts, identity groups, repeated product bundles and SHA-256 hashes of the input CSVs.
- [`audit-inventory.py`](audit-inventory.py) reproduces both files using Python's standard library. Run `python research/entity-audit-2026-10-20/audit-inventory.py` from the repository root. It writes only these research outputs and refuses to overwrite a baseline if its input hashes have changed. After production edits, use `--output-dir /tmp/aimap-current-inventory` for a new snapshot.

Priority is a research ordering heuristic, not a certainty rating: 84 P0 records combine high existing importance with generic, missing-source or identity concerns; 1,317 P1 records have organizational/identity work; 637 P2 records remain in scope for product/software review. Existing importance labels themselves have not been independently re-ranked.

This assessment examined the local datasets and existing source references. It did not freshly retrieve or verify external corporate disclosures. The counts describe the hashed pre-change input snapshot. Preserve these baseline files; generate a separate snapshot after product/profile edits. See [existing-information-reuse.md](existing-information-reuse.md) for precise joining rules and headquarters/source labels.
