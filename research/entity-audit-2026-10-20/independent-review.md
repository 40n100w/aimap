# Independent evidence and retention review

Verification run: 2026-10-21 UTC. Evidence snapshot: 2026-10-20. This read-only review covered the final nine research batches and their integration; this report is the only file written during the final review. No unresolved substantive correctness issue was found in the reviewed result.

## Verified result

| Check | Result |
| --- | --- |
| Catalog identities | All 2,038 baseline IDs retained in the same order |
| New scoped evidence | 399 exact field facts and 472 individual product facts across 143 entries |
| Source integrity | All 196 source SHA-256 values matched cached source bytes |
| Quotation integrity | All 401 stored source excerpts and all 311 item quotations matched their cited cached documents; all 311 item line references matched |
| Structured details | All 34 product attribute records checked against pinned documentation; availability/support metadata retained for 130 items |
| Integration journal | All 133 product-list change records include the sources for their appended items; output hash matches the CSV |
| Follow-up register | Exactly 2,038 rows, covering every retained entity ID |
| Historical locations | Independently reconstructed 2,585 explicit associations from 2,531 rows for 117 entities; all 164 headquarters-reference copies retain original organization, address, date, status, notes and sources |

Every field fact exactly matches the current CSV value. Existing founding, leadership and headquarters fields were unchanged. Existing profile citations were retained. Structural datasets—including relationships, aliases, updates, model portfolios and office locations—match the baseline bytes. The catalog review date in settings was updated for this pass. No duplicate product names were introduced within an entity.

Ten source-backed classification corrections distinguish hardware products and robotics software from companies. The only replaced product lists are the three corrections recorded in the journal: AWS Graviton, Broadcom Tomahawk and Eleven v3. Their previous values remain in the journal and Git history; all other inherited product labels were retained. No entities were merged or removed.

## Scope and presentation review

Reviewed `entity-facts.js`, `entity-information.js`, `entity-location-summary.js` and the corresponding UI rendering. Evidence attaches to exact fields or individual products. A source for one SDK, model or device does not certify an entire portfolio. Hardware compatibility, demo workloads, hosted models and cloud integrations retain their specific roles; they do not create supplier contracts or model-training claims. Product records do not acquire newly inferred corporate facts.

The UI distinguishes unreviewed catalog listings, legacy citations, missing information and scoped evidence. Historical headquarters references display their recorded organization, date and status and are not promoted to current global headquarters. Product support notices, specifications, historical release/compatibility dates and quote attribution remain attached to the relevant item. Pending company/product identity questions remain explicit.

Review findings addressed before this final snapshot include journal source unions, product-specific quotation visibility, preserved availability/lifecycle metadata, founded-versus-launched labeling, shared-office attribution and the Hunyuan Pretrain scope. In particular, fast/slow reasoning modes are no longer attributed to the Pretrain checkpoint from Instruct documentation. Variant-specific FLUX licenses, ElevenLabs language counts, Hume runtime requirements, DJI's 2021 compatibility context and Cassie's ended support were checked against their sources.

## Limits and reproducibility

This review combines exhaustive mechanical checks with semantic inspection of source scopes and the added claims. Hash and quotation matching establish that the ledger faithfully records the inspected documents; they are not independent confirmation of publisher claims or current commercial availability. It does not certify complete dossiers or portfolios for every company. The 1,895 entries without new field/product evidence remain visible in the follow-up register. Browser, build and repository-wide test results are recorded separately by the implementation review.

- Baseline commit: `e722474b769402b7e7c83262d05191c1db20b56b`
- Baseline entities SHA-256: `1a3cb81a0fd469b6a64e0147455b1015685f5fa561693ca8ad9d173ff4958270`
- Reviewed entities SHA-256: `4f7850f7ba840cf86adb0e27af77bba7c32cb61c2f4456cbdc1ddde821fbac31`
- Reviewed ledger SHA-256: `ea918df859b59db06c444940fa2e8c2ed635c3ab474a5e2cce695d2c65878531`

Source bytes were read from the ignored `work/entity-*` caches. Reproducible evidence URLs, revision identifiers, hashes and excerpts remain in the saved research JSON and production ledger. The frozen inventory audit and prior supply-chain research were preserved.
