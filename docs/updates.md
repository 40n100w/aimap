# Reviewed updates

Open **Updates** in the atlas header. The desktop workspace places the feed,
focused 3D graph and evidence side by side. Phones use Updates / 3D map /
Evidence tabs, with the same records and controls. The header's **Atlas** button
returns to the existing explorer.

The initial collection contains three curated records and eight sourced claim
versions: a historical Qwen3 release, an OpenAI SDK lifecycle announcement, and
a DeepSeek-V3 documentation review covering training inputs and inference
runtime compatibility. This is a reviewed starting collection, not continuous
news monitoring. Its coverage/review date is visible in the workspace.

## Reading the workspace

- Select a node or a connection to inspect its scope. Every graph connection
  has a corresponding keyboard-accessible evidence button.
- Training, serving and hardware are separate segments. Runtime support does
  not establish production use, a training supplier or a facility allocation.
- **Earlier record / Updated record** compares the reviewed ledger immediately
  before and after an update. It does not reconstruct everything that existed
  in the real world. Missing evidence stays missing.
- **Possible effects** is off by default. Each assessment states its mechanism,
  assumptions, time horizon, evidence inputs and unknowns. These are potential
  consequences, not observed business outcomes or calculated probabilities.
- A claim's history retains revisions and withdrawals. A later revision is
  flagged even while inspecting an earlier snapshot. Changing an assessment's
  exact evidence inputs invalidates it until it is reviewed again.
- Follow a model or company from its evidence panel. Following matches every
  explicitly named entity in an update, not just the graph's root. Watchlists
  stay in this browser; blocked storage falls back to the current session.
- Update links use `#updates/<event-id>` and survive reloads. There is no account,
  email alert, background fetch loop or third-party analytics dependency.

## Data model

`data/updates.json` is loaded on demand, validated before rendering and included
in the portable build. The local folder picker accepts both CSV and JSON. A
failed update file does not prevent the atlas from loading.

| Collection | Purpose |
| --- | --- |
| `sources` | Publisher, title, pinned HTTPS URL, revision, SHA-256, retrieval date, and publication date if established. |
| `nodes` | Precisely scoped entities absent from the general atlas, with source references. Existing atlas IDs are reused wherever appropriate. |
| `events` | Atomic reviewed updates, ordered by unique `sequence`, with root, named entities, changed versions, explicit context claims, dates and limits. |
| `versions` | Append-only claims: exact endpoints, relation or attribute, evidence basis, verbatim citations, applicable segments, validity bounds and prior version. |
| `assessments` | Explicit potential consequences based on exact claim-version IDs, with required assumptions and unknowns. |

The event's `sequence` orders ledger transactions, independently of occurrence
and publication dates. `occurredOn`, source `publishedOn`, `recordedOn`,
`reviewedOn`, and claim `validFrom` / `validTo` have distinct meanings. Use `null`
for unknown dates. An announced shutdown date belongs in an announcement
attribute; it must not automatically end a serving relationship.

Evidence bases are `primary`, `reported`, and `disputed`. `primary` means that
the cited primary source was reviewed; it is not independent verification of
every assertion made by that source. A claim is either `published` or
`withdrawn`. Neither state implies an observed economic outcome.

## Adding a reviewed update

1. Read the original source and capture a stable version. Add a source with
   publisher, title, retrieval date, content hash and pinned URL. Establish the
   publication date from the source, or leave it unknown. Do not replace an
   earlier source snapshot with the latest content at the same URL.
2. Resolve the exact entity scope: model version, family, company, product,
   service or facility. Reuse a canonical atlas ID only when it has the same
   scope. Otherwise add a sourced `nodes` entry. A company contract does not
   establish a relationship for every model that company makes.
3. Append an event with the next sequence. Distinguish a newly occurring event
   from a review of older documentation in its category, summary and dates.
4. Append claim versions with verbatim excerpts and explicit limits. List
   every changed version in the event's `changeVersionIds`. Use
   `contextClaimIds` only for relevant previously recorded claims. Graphs never
   automatically import the general atlas's illustrative relationships.
5. Optionally add a potential-effect assessment. Identify a concrete mechanism
   and all assumptions; reference exact `basedOnVersionIds`. If a named customer,
   facility, exposure, adoption rate or financial consequence is unknown, say
   so. Do not infer it from graph proximity or multiply editorial weights.
6. Review the feed, all relevant segments, evidence excerpts and record
   comparison. Update the collection's coverage and `reviewedOn` date.
7. Run the checks below. Commit the source data and regenerated standalone
   bundle together. The existing Pages workflow validates and deploys `main`.

## Correcting a claim

Append a new event and a new version with the same `claimId`, subject,
relationship and object. Set `supersedes` to the preceding version's ID. Use
`state: "withdrawn"` to retract a claim, with the correction's source and scope.
Do not delete or silently edit the original version. If the original entity
identity was wrong, withdraw it and create a new correctly scoped claim.

The earlier record remains inspectable. Current graphs omit withdrawn claims.
Assessments whose exact inputs have changed, become disputed or been withdrawn
are suppressed, including when viewing the older event. To publish a replacement
assessment, review its assumptions against the new evidence and give it a new ID.

The production collection contains no invented corrections. Tests use clearly
marked synthetic revisions to exercise withdrawal and history behavior.

## Validation

```bash
npm run check:data
npm test
npm run build
npm run test:browser
```

The update validator checks references, unique IDs/sequences, source provenance,
entity identity, revision chains, date bounds and assessment inputs. Unit tests
cover scope separation, comparison, withdrawals and invalidated effects. Browser
tests cover desktop, phones, tablet landscape, keyboard access, storage failure,
WebGL fallback, deep links, retries and corrections.

To independently re-fetch pinned sources and verify their SHA-256 hashes and
every citation excerpt (requires network access):

```bash
python3 scripts/verify-update-sources.py
```

To run only Updates browser scenarios after building:

```bash
BROWSER_SUITE=updates npm run test:browser
```

## Boundaries and next work

The current graphs are explicitly scoped to each reviewed update; they do not
claim comprehensive ecosystem coverage. Unknown facilities and manufacturing
paths are not assigned guessed locations. The full atlas remains available for
broader context. Synchronizing sourced events with geographic facilities will
require facility-specific evidence.

Continuous ingestion, source deduplication, candidate entity resolution, a
review queue and notification delivery need a separate scheduled service and
review workflow. No automated feed is presented as implemented here. The
versioned records provide the publication format for that future workflow.

The general atlas's directional traces also now exclude mutual partnerships,
integrations and competition from dependency traversal, retain alternate paths,
and preserve real relationship endpoints instead of projecting a company's
connections onto its models. Entity evidence panels expose all recorded direct
relationships rather than only the first eight.
