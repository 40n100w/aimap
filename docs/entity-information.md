# Company and product information

The catalog is an inventory, not a list of fully verified company dossiers. Many
entries are products, labs, business units, historical names or broad category
listings. Treat the record's type as an editorial classification until identity
evidence supports it. Preserve stable IDs and historical data when correcting a
classification; do not merge two records based only on similar names.

## Evidence files

- `data/entities.csv` holds displayed profile text and existing product listings.
- `data/entity-facts.json` maps **individual fields and individual products** to
  inspected sources. It also exposes dated location references without changing
  the headquarters field.
- `data/catalog-reviews.csv` preserves previous reviews and their precise scopes.
  A review of a model identifier does not verify its availability or the company's
  headquarters, ownership or supply chain.
- `data/updates.json` remains the separately reviewed event/relationship ledger.
  Profile documentation does not create commercial supply relationships.

`entity-facts.json` contains:

| Collection | Meaning |
| --- | --- |
| `sources` | Source URL/title, retrieval date, content hash, excerpt, optional pinned revision and explicit limits |
| `facts` | Entity ID, field, exact reviewed value, source IDs, review date and scope |
| `products` | Entity ID, specific product/tool/capability name, kind, role, source IDs, review date and scope; optional documented specifications, availability/lifecycle notices and exact item quotations |
| `locationSummaries` | Explicit joins to existing office records, counts/countries and original headquarters-reference rows |
| `identityNotes` | Editorial identity questions, displayed only while the record has the specified type |

Field evidence is shown only when the recorded value still matches the current
field. An evidence link elsewhere on a profile cannot verify another field. A
product fact supports only its named item; it cannot verify all products in the
same category. Software SDKs, research artifacts and API operations must retain
those roles instead of becoming hardware products or proof of paid availability.

The source's `retrievedOn` and a fact's `reviewedOn` are different concepts. A
retrieval date is not the date a product launched, became generally available or
ceased operation. Pin repository URLs to the inspected revision. For a mutable
company profile, retain a content hash and limit the claim to what was inspected.

Keep product-specific `availability`, `documentedAttributes`, `lifecycleStatus`,
`releaseDate` and `evidenceAsOf` when the source supports them. A historical
compatibility date and a retrieval date must remain separate. Do not copy a
family's capabilities to every checkpoint or hardware variant. Exact item quotes
use `evidenceExcerpt`, a one-based `evidenceLine`, and `evidenceSourceId` to identify
the quoted document when more than one source is attached.

## A company dossier needs scoped research

Work through these questions for each commercial organization, using public
primary evidence and retaining explicit unknowns:

1. **Identity:** legal name, business unit or brand, parent/ownership, historical
   names, official corporate site and applicable public-company identifiers.
2. **Company facts:** founding versus product-launch date, headquarters versus
   regional offices, leadership and the date those facts applied.
3. **Products and services:** actual names, product families and versions,
   function, customers' use cases, technical interfaces, access/licensing, and
   announced, preview, available or discontinued status where documented.
4. **Operating context:** disclosed facilities, regions, manufacturing/design
   roles, and material public financial/capacity information where relevant.
5. **Relationships:** separately documented suppliers, customers, partners and
   investments. Compatibility and ownership alone do not establish a contract,
   a particular model's training environment, or deployment scale.
6. **Provenance:** source/excerpt for each claim, publication/effective dates when
   disclosed, review date, contradictions and the next unresolved question.

This is a research checklist, not a promise that all information is public. Do
not invent legal identity, leadership, revenue, employee counts, headquarters,
complete product portfolios or supplier allocation to fill empty fields.

## Updating a profile

Read the source before editing. Update the precise supported fields and add
matching facts. Preserve existing unsupported listings as visibly unreviewed
unless a correction is justified; document replaced values in the review journal
and version history. Avoid replacing a full company's description with the
capabilities of a single incidental software repository.

Record products individually when documentation covers a subset. A `products`
field fact is appropriate only when its exact array is the reviewed scoped list;
the fact's scope must still explain that the list may not be exhaustive.

To rebuild location references after editing `office-locations.csv`, run:

```sh
node scripts/build-entity-location-summaries.mjs
```

This preserves each row's original organization, date, status and source. A
headquarters reference may belong to a region, subsidiary or historical
organization. Never select the first row as the current global headquarters.
The explicit `entityIds` associations can reference a shared office; they do not
prove corporate ownership or the location of a training cluster.

Validate data, behavior and packaging using the repository commands:

```sh
npm run check:data
npm test
npm run build
npm run test:browser
```

The October 20 research directory contains a frozen baseline audit, the research
batches, an integration journal, and a current per-entry follow-up register.
The batch importer is specific to that review and refuses unexpected changes to
the entity CSV; it is not an automatic company-discovery or data-refresh tool.
