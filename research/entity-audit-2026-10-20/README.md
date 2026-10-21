# Company and product information review — October 20, 2026

**The catalog is substantially under-researched.** This pass assessed the information quality of every one of the **2,038 existing records**, enriched **143 entries** from inspected primary documentation, and made the remaining gaps visible in the site. It did **not** independently verify every commercial organization or collect every company's complete current portfolio.

All entity IDs and their order are preserved. The 141 model records and 552 relationships remain; no company was removed or merged. The company/lab label count fell from 1,108 to 1,098 because ten existing hardware/software records were reclassified, not deleted. These labels are not a verified count of legal companies.

## Reviewable results

| Result | Coverage |
| --- | ---: |
| Inventory assessment and follow-up register | 2,038 records |
| Entries with newly sourced fields or product facts | 143 |
| Field-specific facts | 399 |
| Individually sourced product/tool/component facts | 472 |
| Inspected primary sources | 196 (159 revision-pinned documents) |
| Profiles connected to dated existing location records | 117 |
| Entries without new field/product evidence in this pass | 1,895 |

Product facts count records, not unique commercial offerings: the same product may appear under a company, a product entry and an overlapping historical identity. Developer tools, compatibility tables and research artifacts are identified as such. They do not establish a complete hardware portfolio, sales availability or a model-maker supply contract.

Read [the complete per-entry register](review-register.csv) to see reviewed fields, documented products, inherited listings still awaiting review, missing information, historical location counts and the next research action for each record. [The baseline assessment](inventory-analysis.md) explains the original gaps and identity screening. [The change journal](changes-applied.json) retains every before/after field value and its evidence references.

## What changed in the site

- Profiles now distinguish **field-specific evidence**, **documented products/tools**, **unreviewed catalog listings** and **missing details**. A source for one product cannot silently verify the rest of a portfolio.
- Product evidence retains exact quotations and source lines where collected, publisher-documented specifications, access restrictions, beta/deprecation notices and historical dates. Evidence is collapsed by default and supports small touch screens.
- Website links are labeled **Website / documentation** because many are developer references rather than corporate homepages.
- Historical location references retain the original organization, source, verification date and status. Shared or regional headquarters records do not populate the current global headquarters field automatically.
- Existing reviews retain their dates and scope. A new SDK review does not refresh every model, ownership or corporate claim on the profile.

## Concrete accuracy corrections

- **AWS Graviton, Broadcom Tomahawk and NVIDIA Jetson** are classified as hardware/technology records rather than independent companies.
- **MuJoCo, ROS, ROS 2, MoveIt, LeRobot, Gazebo and Webots** are classified as software projects/frameworks/applications rather than companies.
- **Graviton** now has documented Arm processor families instead of the unsupported x86/Arm/RISC-V bundle. **Tomahawk** has its sourced switch-device subset instead of the generic Ethernet/InfiniBand/DPU/optics bundle. **Eleven v3** has speech capabilities instead of the unsupported Image/Video/Audio bundle. Old values remain in the journal. All other inherited product strings are retained as unreviewed alongside documented additions.
- **Cassie** is explicitly historical with support ended. **DJI's inspected SDK compatibility** remains dated 2021. **Speechmatics' legacy client** retains its deprecation and stated patch cutoff; replacement SDKs are separate items.
- Hunyuan's instruction-checkpoint reasoning modes were excluded from the base/pretrain checkpoint after independent source review.
- Company/product boundaries and overlapping records remain explicit research questions: Apple Foundation Models, IBM Granite, Amazon AGI Lab, Phoenix, Modal, Mosaic research records, and others. Pure Storage/Everpure and RealSense repository-name changes are not treated as established legal ownership changes.

## What remains incomplete

The baseline had 1,861 generic descriptions, and 1,916 entries had neither profile citations nor a dated catalog-review source. Most records remain research leads. The [identity queue](identity-review-queue.csv) has 456 baseline flags; they are questions, not merge instructions or verified legal classifications.

| Missing recorded field | Before | After this pass |
| --- | ---: | ---: |
| Website/documentation | 1,944 | 1,875 |
| What it provides | 1,916 | 1,825 |
| How it is used | 1,916 | 1,825 |
| Profile citations | 1,916 | 1,801 |
| Dedicated founded field | 2,030 | 2,030 |
| Current headquarters field | 2,030 | 2,030 |
| Leadership | 2,030 | 2,030 |

These are presence counts across all record types; corporate fields do not apply to every product or project, and a populated field is not automatically verified. Timeline years and dated office records are retained separately. No company is certified as having a complete current dossier.

Remaining work includes legal identity/parent ownership, current leadership and headquarters, full product families and versions, licensing/access and lifecycle, material public financial/capacity disclosures where available, and separately sourced customer/supplier relationships. Unsupported facts were left unresolved.

Direct requests to **70 corporate/documentation domains** were denied by the environment proxy. The exact attempted URLs/errors are in [blocked-sources.json](blocked-sources.json); the distinct denied domains are in [required-source-domains.txt](required-source-domains.txt). Repository discovery 404s and a parsing failure are tracked separately and are not treated as evidence that a company or product is absent. Domain access is needed to revisit those specific sources. Many other records also remain unresearched externally; they must not be described as all blocked or all verified.

## Research batches and provenance

- [Model makers](model-company-notes.md) and [specialist model/application companies](specialist-notes.md)
- [Hardware](hardware-notes.md), [specific accuracy priorities](accuracy-priorities.json), and [robotics](robotics-notes.md) with an [all-150 robotics register](robotics-coverage.csv)
- [Cloud/data-center providers](cloud-notes.md) and [additional compute/server/network/storage providers](systems-additional-notes.md)
- [Data/developer software](software-notes.md) and [additional commercial software](software-additional-notes.md)
- [Existing location evidence](existing-information-reuse.md)
- [Independent verification](independent-review.md)

The matching `*-facts.json` files preserve proposals and sources. `data/entity-facts.json` is the published field/item evidence ledger; [the maintenance guide](../../docs/entity-information.md) explains the schema and company research checklist. Source hashes and pinned URLs permit the inspected documents to be identified again. Cached raw copies under ignored `work/` directories were used for independent quote/hash verification.

The frozen baseline inventory must not be overwritten. `apply-reviewed-facts.py` integrates this specific dated batch and refuses unexpected entity CSV edits. `build-review-register.py` rebuilds current coverage without altering the baseline. The [current summary](current-coverage.json) records the final CSV hash.

## Validation

Final validation results are recorded in [validation.md](validation.md). Publication uses the repository's GitHub Pages workflow on `main`; deployment success must be confirmed from that workflow rather than inferred from local checks.
