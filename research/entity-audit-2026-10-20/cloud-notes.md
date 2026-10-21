# Cloud, data-center, power and network company review

Reviewed 18 existing records. `cloud-facts.json` contains 59 proposed field updates for 14 records, with per-field source references. The other four records remain pending. No production catalog or UI file was edited by this research task.

The evidence inventory contains 27 freshly retrieved primary-source documents/profile pages and 9 historical location records. Technical repository documents are pinned to their inspected commit. Organization profiles are mutable snapshots, identified by retrieval date and hash. Ten requested corporate URLs returned proxy `403 Forbidden` errors. A successful GitHub retrieval does not prove the corresponding corporate site is accessible or its full portfolio has been reviewed.

## Supported improvements

| Record | Scope actually documented |
| --- | --- |
| AWS | SageMaker SDK model training and deployment, supported frameworks/custom containers; company-linked website |
| Microsoft Azure | Foundry agents, model operations, datasets, indexes and evaluation; preview features explicitly separated |
| Google Cloud | Gemini Enterprise Agent Platform and Google Gen AI SDK identities; company-linked website |
| Oracle Cloud | Oracle-maintained OCI Python SDK and service-module coverage for generative AI, inference, agents, data science and storage |
| CoreWeave | Kubernetes Cloud identity and Tensorizer model-weight serialization/loading; company-linked website |
| Crusoe | GPU cloud and official Terraform provisioning for instances, disks and networking |
| Lambda | Lambda Stack and Dockerfiles using NVIDIA container tooling; no cloud-fleet or hardware-system verification |
| Nscale | Terraform-managed instances, compute clusters, file storage, networks and security groups |
| Fluidstack | GPU-instance API, lifecycle operations, configuration discovery, OS templates and SSH keys |
| Nebius | AI Cloud, gRPC-based Python SDK, authentication and resource-management operations |
| Arista | EOS, eAPI and pyeapi configuration automation; no current switch-hardware catalog verification |
| Broadcom | OpenBCM and the pinned release's Trident, Tomahawk, Ramon, Qumran and Jericho supported-device families |
| Marvell | OCTEON DPUs and Data Accelerator Offload interfaces for switching/packet processing |
| Schneider Electric | Official website identity from the company's open-source program; power/cooling products still need corporate documents |

**Product arrays are evidence-backed subsets, not complete portfolios.** The parent should preserve previously recorded information as unreviewed/history where appropriate and use these values as reviewed products. Do not imply that a company has stopped selling another product merely because it is absent from this scoped source. No item is represented as the latest product generation solely because it appears in an SDK.

IREN, Applied Digital and Eaton lack sufficient newly inspected primary company/product evidence in this pass. Vertiv has useful historical headquarters records but no fresh current product evidence. Their pending status is substantive work still needed, not a completed company-profile review.

## Historical location evidence

The existing location research records dates from August 24–25, 2026 and contains headquarters labels for Arista, Broadcom, CoreWeave, Marvell, Vertiv and Nebius. These were inspected locally, not re-retrieved from their corporate source pages. They are kept in source records and notes only; no current `headquarters` field is proposed.

Particular ambiguities:

- Marvell distinguishes a Wilmington corporate address (`needs_review`) from Santa Clara U.S. headquarters. Do not silently choose one as the current worldwide headquarters.
- Vertiv's global and Americas headquarters are separate addresses.
- CoreWeave's Livingston and London European headquarters are separate records.
- Nebius has a main office and separate registered-office evidence; legal registration and operating headquarters are different concepts.

No founding date, leadership, current ownership, funding, revenue, employee count or market-share claims were inferred from these documents. Cloud-platform launch dates must not become parent-company founding dates.

## Identity and source safeguards

Rejected unrelated GitHub matches:

- `github.com/Nscale` is a node.js microservices project linking `nscale.io`; the company-associated organization is `nscaledev`, linking `nscale.com`.
- `github.com/fluidstack` is a personal Drupal developer account; `fluidstackio` links the intended company.
- `github.com/Eaton` is a personal account. A retrieved 42ITy README did not establish Eaton attribution either, so it was not used as company evidence.

Sources contain no evidence of a new supplier/customer contract. Example model names, configured GPU instance types, SDK modules and Terraform resources do not establish original model-training suppliers, current fleet capacity, guaranteed availability, regional coverage, facility ownership or a customer's actual production use.

## Validation

All 18 entity IDs exist in `data/entities.csv`; each proposed field has source references; each reference resolves. Retrieved content hashes and exact source excerpts were checked against local source snapshots, normalizing line endings only for excerpt matching. Existing-location hashes identify the local research file, not the remote corporate pages. Fresh source retrieval dates are retained independently of historical record dates.
