# Hardware company and product evidence — October 20, 2026

This pass found useful company identity and software information, but it could not freshly verify the hardware portfolios of the requested manufacturers. Eight corporate sites returned `Tunnel connection failed: 403 Forbidden`: Nanya, QCT, TSMC, ASML, Wistron, Micron, Amkor and Applied Materials. These are research-access limitations, not evidence that the companies or their products are absent.

## Safe changes and collected product facts

`hardware-facts.json` follows the shared per-field evidence format. It proposes three website additions, each corroborated by the corresponding company GitHub profile:

- ASML → `https://www.asml.com` (profile identifies ASML Netherlands B.V.).
- SK hynix → `https://www.skhynix.com` (profile describes SK hynix open-source software).
- Micron → `https://www.micron.com/` (profile identifies Micron Technology and memory solutions).

Six documented software/research offerings are stored as **productFacts**, separate from replacement product lists:

| Company | Offering | Supported scope |
| --- | --- | --- |
| ASML | MATFrost.jl | Julia embedded in MATLAB; Julia-side interfaces, nested types, Julia environments |
| SK hynix | HMSDK | Heterogeneous Memory Software Development Kit for CXL memory |
| SK hynix | cMPI | MPI-over-CXL research implementation and communication benchmarks |
| SK hynix | MemFlow | Registered-skill retrieval for Claude Code using Qdrant, embeddings and MCP |
| SK hynix | LTM100 | Load/concurrency/scalability benchmark for long-term-memory services; explicitly not answer-quality evaluation |
| Micron | dnvme | Linux driver for the NVMe Compliance Suite; commercial support/current hardware applicability unverified |

Each item has a pinned source, retrieval date, SHA-256, excerpt and narrow scope. There are nine newly retrieved primary-source records: six repository documents and three company profiles. The profile sources are mutable; the repository documents are commit-pinned. A source-host identity does not imply that every hosted project is a commercially sold or supported product. The evidence establishes publication and documented functionality only.

Do not use these software sources to mark ASML EUV/DUV systems, SK hynix HBM3E/HBM4, or Micron HBM3E/DDR5 as freshly verified. Existing hardware items should keep their own evidence status. Likewise, `MemFlow` and `LTM100` cannot be classified as memory chips merely from their names.

## Dated information already collected in the repository

`hardware-existing-location-evidence.json` recovers source URLs and location/HQ metadata for **77 physical-layer companies**, covering **2,442 location records**. There are **127 headquarters-labeled records across 74 companies**. The file preserves the original `verifiedOn`, status, source URL and address instead of assigning a new verification date.

This is useful evidence recovery, not a new review of those corporate pages. Its most important caution is that `headquarters` is not synonymous with the parent company's global headquarters:

- ASML's HQ-labeled rows are regional offices in China, Japan, Korea and Taiwan; blindly choosing the first would produce an incorrect global company profile.
- SK hynix has numerous regional/subsidiary HQ labels; Icheon is a distinct record. A common `headquarters` type does not resolve the legal entity.
- Tokyo Electron has many subsidiary head-office rows plus an explicitly named global-headquarters row.
- Samsung Foundry's San Jose semiconductor-office record must not become Samsung Electronics' global HQ.
- Arm, Supermicro, Marvell, CoreWeave, Dell and Vertiv have multiple regional/global/HQ scopes.
- TSMC and several other addresses are marked `needs_review`; a geocoding marker status is not verification of current corporate identity.

Use these records as dated location evidence and a source-retrieval queue. Do not silently fill a current headquarters field from a regional HQ, registration address, or an unresolved old record. Company leadership and founding dates require independent evidence; they were not verified here.

## Priority accuracy fixes

Fifteen company records are explicitly flagged in `priorityIssues`:

- **Nanya Technology:** current type `Technology` and the generic `DRAM / NAND / HBM` list need primary review. The list looks inherited from a broad memory category; this audit has not substantiated NAND or HBM products. Do not present the entire list as verified.
- **Powertech Technology:** company identity is mislabeled/pending under `Technology`; `2.5D / 3D integration / Chiplets` is not a manufacturer-specific portfolio.
- **QCT, Quanta Cloud Technology and Quanta Computer:** resolve brand/business-unit/parent identities with evidence while retaining every ID. Current records do not establish separate independent suppliers.
- **Wistron:** company website and detailed portfolio are missing. Keep it distinct from Wiwynn and QCT unless documented relationships justify connections.
- **Ibiden and Unimicron:** the identical `ABF / Copper-clad laminate / Leadframes` list needs manufacturer-specific evidence for every item. Broad substrate classification cannot establish all three activities.
- **TSMC, Applied Materials, Lam Research and KLA:** collect process/equipment families, exact capabilities, status and source dates; generic categories are not complete product portfolios.
- **Samsung Memory and ASE:** distinguish a corporate group, operating company, division and product grouping before assigning legal facts or ownership.
- **Amkor and JCET:** add independently sourced packaging/service families and sites; `OSAT` is only a category.

## Rejected source matches

GitHub accounts named `ASML`, `qct`, `wistron`, `AppliedMaterials`, `KLA`, `amkor`, `Micron` and `micron-inc` did not establish the intended company identity. Some were personal or empty profiles. `ASML-Labs`, `SKhynix` and `micron-technology` had matching company identities and corporate-site links and were used with narrow scope. A missing or unrelated GitHub account is not evidence about the underlying company's status.

No production CSV, source file, relationship or entity was changed by this research agent. Parent integration should use the three evidenced website changes and the separate product facts, and retain the rest as explicit pending work.
