# Robotics evidence review — 20 October 2026

All 150 existing robotics-layer records were assessed for local inventory quality and evidence gaps. Fresh, scoped primary-source evidence was collected for 21 records, producing 138 granular product/component facts and 88 proposed field updates from 25 pinned documents. Seven proposed updates correct software projects currently classified as companies. No entity IDs were changed or removed. No company was assigned a complete-profile status.

`robotics-facts.json` contains the source URLs, immutable Git revisions, retrieval date, SHA-256 hashes, exact excerpts, publisher attribution, field evidence, product facts, and limitations. `robotics-coverage.csv` lists every robotics record; `robotics-coverage-summary.json` summarizes its statuses. These are research proposals; this tranche did not edit production data or application files.

## What the inspected sources establish

| Entity | Concrete evidence | Limit of this review |
| --- | --- | --- |
| Unitree Robotics | 19 named robot/component descriptions plus SDK 2 | Description files include components/configurations; they are not a current sales catalog. |
| Universal Robots | 14 robot-type identifiers, manipulator descriptions, and ROS 2 Driver | Robot descriptions do not establish current availability of every generation. |
| KUKA | Nine robot/external-axis families and an official iiQKA.OS2 driver | Official ROS 2 support is specifically scoped to iiQKA.OS2 with RSI 6.0.0 or newer; other operating systems have community support. |
| Yaskawa | DX200, YRC1000, YRC1000micro, and MotoROS2 | Controller/software subset; firmware and ROS prerequisites apply. |
| Boston Dynamics | Spot robot interfaces and Spot SDK | Existing Atlas entry remains unverified by this tranche. |
| Agility Robotics | Official Cassie documentation explicitly marks support ended | Historical product only; Digit remains unverified. |
| FANUC | crx10ia robot-description example and FANUC ROS 2 Driver | Other robot model names and the wider factory-automation portfolio were not established. |
| DJI | Onboard SDK 4.1.0 and M300 RTK / M210 RTK V2 / M210 V2 compatibility | Explicitly dated February 2021. Historical compatibility must not be presented as a current portfolio. |
| Ouster | Lidar sensor interfaces and the Ouster C++/Python SDK | Specific OS-series models and corporate acquisitions remain unverified. |
| Hesai | 20 individually named lidar models and SDK 2.0 | SDK compatibility, not shipment or current-sales evidence. |
| SICK | Five 2D lidar, two 3D lidar, and two radar families; sick_scan_xd | Development documentation; support differs by model/platform. Older families explicitly lose maintenance after driver V3.9. |
| Basler | pypylon, pylon Software Suite, and blaze 3D camera | Machine-vision evidence does not support generic inherited LiDAR/Motors labels. |
| Orbbec | 27 named supported devices and SDK v2 | Model-specific firmware requirements; sensor subtype was not inferred for every device. |
| RealSense | D555 PoE, D457 GMSL/FAKRA, D455, D435if, D405, and SDK 2.0 | Repository migration to RealSenseAI establishes a repository move, not legal ownership. Existing entity ID/name retained. |
| MuJoCo, Webots, MoveIt, ROS, ROS 2, LeRobot, Gazebo | Their own project descriptions, software components, and developer roles | Software/project identities, not separate commercial companies. Project maintainers and integrated third-party hardware must not be conflated with product ownership. |

## Remaining gaps and access limits

The complete inventory register contains 21 records with scoped primary evidence, two with blocked access and no accepted facts, four with insufficient inspected evidence, and 123 not freshly verified in this tranche. These categories describe this review's evidence, not the existence, quality, or commercial status of the entities. All 150 records had generic descriptions at this inventory snapshot; 31 have identity concerns recorded for follow-up.

Four corporate-site requests returned proxy tunnel `403 Forbidden`: Figure, Agility Robotics, ABB Robotics, and FANUC America. The exact attempted URLs and errors are in the facts file. Agility and FANUC have bounded evidence from their own retrieved repositories despite those blocked site requests. No proxy or alternate-domain bypass was used.

The retrieved ROS-Industrial ABB driver explicitly describes itself as not productized, intended for academia, and supplied as-is with limited support. It was not used as first-party proof of ABB's commercial robot portfolio. Drake's short retrieved README was insufficient for the intended product dossier. Figure and several newer humanoid-vendor organization/repository leads did not establish an attributable current product portfolio. Failed repository guesses were not treated as proof that a vendor or product does not exist.

Founding dates, current headquarters, executives, legal parents, customers, supplier relationships, current availability, and exhaustive product portfolios remain open unless already separately sourced in the central ledger. Named robotics software classified as a company and combined brand/product/company records need identity review. Potentially overlapping Geek+/Geek Robotics and Fetch/Zebra Fetch records are preserved pending evidence.

## Integration rules

- Apply only fields with `fieldEvidence`. A replacement products array is an explicitly documented subset; it must not be labeled the company's complete current portfolio.
- Preserve each product fact's scope and lifecycle information. Cassie and the DJI 2021 compatibility entries are deliberately labeled historical in their visible names/descriptions.
- Keep SDK/model-description coverage distinct from current commercial availability, customer adoption, manufacturing volume, and customer-specific integration.
- Preserve existing Boston Dynamics Atlas and Agility Digit entries as unverified; this tranche does not propose replacing their products arrays.
- Do not turn Webots product-history dates into corporate founding dates, or project maintainer email domains into corporate ownership claims.

Every one of the 138 product facts includes its own `evidenceExcerpt`, `evidenceLine` (one-based), and `evidenceSourceId`. Product/model entries quote the relevant device table row, robot-description line, or model list rather than relying on a generic SDK introduction. Historical entries retain the dated compatibility or support-ended context.

Validation checked all 150 inventory IDs, every proposed field's evidence, all source references, raw-file SHA-256 hashes, and exact source excerpts. Each product quote was also checked as an exact contiguous excerpt at the recorded line in its referenced pinned source. Source bodies are retained locally under `work/entity-robotics-2026-10-20/`; inspectable pinned URLs and hashes are retained in the saved research artifact.
