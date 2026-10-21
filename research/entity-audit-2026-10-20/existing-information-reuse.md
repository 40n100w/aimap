# Reusing existing company information without expanding its claims

The pre-change audit snapshot can reuse source trails already present elsewhere in the atlas. This note specifies joins and labels; it does not newly verify those sources or change production fields.

## Location join

For each row in `data/office-locations.csv`:

1. Parse the optional `entityIds` JSON array.
2. Form the set `{companyId, ...entityIds}`. Resolve only explicit existing aliases if necessary; the current location file does not need alias resolution.
3. For each matching core entity ID, attach the location once, keyed by the location row's `id`.
4. Preserve whether the match came from `companyId`, `entityIds`, or both. An explicit shared association does not make the locations or organizations interchangeable.
5. Retain `companyGroupId` as a grouping tag. The current values `samsung-electronics`, `shin-etsu-group` and `advantest-group` are not core entity IDs and must not create extra company joins.
6. Do not add a join from fuzzy company names, matching domains or nearby coordinates. Queue any unresolved IDs for review; there are none in this snapshot.

This yields **2,585 entity/location associations from 2,531 distinct rows**, reaching **117 core entities**. The 54 additional associations are explicit `entityIds` links. Samsung's 42 rows name both foundry and memory entries; Recursion/Valence, Cradle, Black Forest Labs and Generate Biomedicines account for the other explicit shared associations.

Per-entity summaries can safely show the number of recorded locations, distinct countries in those rows, location types, record statuses and source dates. Label the geography **“Countries with recorded locations”**, not “Countries where the company operates” or “Company country”; this dataset may be incomplete and includes scoped subsidiaries.

## Preserve source and coordinate statuses separately

The existing row statuses are:

| Status | Rows | Safe interpretation |
| --- | ---: | --- |
| `needs_review` | 1,155 | The record itself says further review is needed |
| `address_verified` | 449 | The existing dataset records address verification; map precision may remain unresolved |
| `geocoded` | 297 | A candidate geocode exists; this is not equivalent to a verified building |
| `map_ready` | 630 | A building-level map point is recorded under the atlas's existing criteria |

All 2,531 rows have a `sourceUrl`. Only one has a distinct `addressSourceUrl`; use that for address provenance when present, retaining the main source too. Keep `supportingSourceUrl`, `additionalSupportingSourceUrl`, `researchNote` and source-type fields where present. A geocoder or coordinate source must not be promoted into corporate identity or address evidence.

The existing `verifiedOn` values are **August 24 or 25, 2026**. Label them **“Recorded source review date”**. `geocodeCheckedOn`, `coordinateVerifiedOn` and source-publication dates have different meanings. Joining these records on October 20 does not make their sources newly reviewed on October 20. Most `researchComplete` cells are blank; a populated flag does not override `status` or establish current ownership.

## Headquarters labels

Keep all **159 headquarters-labeled rows** and show them as **“Headquarters references — scope varies”** or **“Recorded headquarters locations”**. A short explanation can say: “These records may describe global, regional or subsidiary headquarters. Source dates and review status are shown.”

For each row, display its original `locationName`, address/country, source, review date and status. Do not choose a global headquarters from the first row, the largest office, the country of incorporation, or its presence on a map. Words such as “global” and “corporate” can be displayed as part of the source-derived name; the name alone does not establish that it is still the current headquarters.

Examples of why scope matters:

- Arm has global Cambridge and US San Jose headquarters rows.
- Supermicro has corporate, EMEA and APAC headquarters rows with different statuses.
- Applied Materials has corporate and multiple regional headquarters rows.
- Cadence has corporate San Jose and international Dublin rows.
- SK hynix has many records labeled headquarters across entities/locations.
- Recursion's Salt Lake City record is also explicitly associated with the Valence entry; that association does not establish Valence's independent legal headquarters.

There are 32 headquarters rows with `needs_review`, 48 `address_verified`, 53 `map_ready` and 26 `geocoded`. None of these status values by itself resolves global versus subsidiary scope. A `registered_office` is a separate location type and should not be relabeled headquarters. Office locations also do not establish a model's training facility.

## Other existing evidence to reuse

- `catalog-reviews.csv`: retain the exact per-entry scope and source URLs. The October 18 review excludes several corporate facts and must not be relabeled a complete company audit.
- `profileSources`: retain as existing references. Without field-level mapping they do not validate every product, executive or date in the profile.
- `relationships.csv`: retain endpoint, direction, status, source and active dates. A customer, investment or runtime link is not proof of parent ownership or of all product relationships.
- `timelineYear` with `timelineBasis` and `timelinePrecision`: these can explain recorded founding/launch years, but a populated timeline field is not a newly verified incorporation date.
- `website`: 66 existing links point to raw GitHub documents and 9 to repositories. Preserve these as documentation/source links. Do not automatically label them corporate homepages.
- `data-center-campuses.csv`, model-region datasets and the Updates ledger: retain their separate entity/facility/workload scope. Similar names are a review task, not a join instruction.

The [location assessment JSON](existing-location-evidence-assessment.json) records exact counts and the location source hash. The [identity-review queue](identity-review-queue.csv) enumerates all **456 flagged records** from the baseline screen, including 38 overlapping-identity groups. It does not authorize merging, removing or silently reclassifying any entry.
