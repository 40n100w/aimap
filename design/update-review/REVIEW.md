# Following news through the AI ecosystem

Design review · October 18, 2026 · Based on the deployed atlas at `7906d51`.

**Recommendation:** add an Updates workspace built around **event → recorded change → relevant relationships → evidence → possible consequences**. Keep the 3D atlas as the main visual surface. Make the evidence and the limits of a claim just as legible as the connections.

The goal is to answer five questions quickly: What happened? What exactly changed? Which model, product, company or facility does the claim concern? What can we verify along its supply chain? What might happen next, and under which assumptions?

Open [the interactive concept](concept.html). The companies, sources and events in it are fictional design fixtures. It includes event selection, an orbitable 3D graph, training/serving/hardware lenses, clickable entities and connections, source excerpts, earlier/updated records, optional possible effects and a local-only follow list. It is an isolated design artifact; it does not replace or publish changes to the live atlas.

## Review of the current experience

The current atlas has valuable foundations: a recognizable dark visual identity, spatial links between companies and products, model portfolios, geographic infrastructure, evidence labels, and mobile controls that preserve the core features. The 3D scene makes the ecosystem feel connected and explorable.

The main task today is **exploration of a snapshot**. The new task is **investigation of a change**. That requires a different entry point and more explicit evidence.

| Current behavior | Consequence for news tracking | Design response |
| --- | --- | --- |
| Search starts with an entity; the timeline mainly shows founding and launch dates. | A reader cannot readily see what changed since a previous visit. | An event feed with a watchlist, review status, publication date and a short explanation of the recorded change. Preserve the existing historical timeline separately. |
| A selected company can expose many links with similar visual emphasis. | The reader must infer which connection a headline actually changes. | Focus the event’s affected records first. Keep positions stable; reveal more context on demand. |
| Profiles show only the first eight relationship evidence rows. | A visible multi-hop route may not have an inspectable explanation at every step. | Make every displayed link selectable and provide a complete, searchable connection list. |
| Model-to-material paths include representative connections. | A plausible architecture can be mistaken for the actual training or serving stack. | Evidence-based investigation excludes representative paths by default. Keep illustrations in a separately labeled learning/scenario mode. |
| Company relationships can be projected onto a model’s downstream graph. | A company agreement may look like proof about a particular model version. | Preserve the company node and the original scope. Never rewrite a company-level edge as a model-level claim. |
| Both upstream and downstream traversal can pass through partnerships, integrations and competitors. | Mere adjacency can look like supply dependency or a route for real-world effects. | Define traversal by relation semantics and the question being asked. Competition, investment and partnership are context, not automatic supply or impact links. |
| Traversal keeps the first path to a node. | Alternate suppliers and routes can disappear from the explanation. | Show all eligible edges within the selected scope; group cycles and preserve alternatives. A shared node is not a second independent effect. |
| Relationship dates are optional and only year-based. | The UI cannot reconstruct what was known at the moment of a news event. | Keep event dates, publication dates, review dates, validity periods and record history distinct. |

These behaviors are visible in [`src/ui.js`](../../src/ui.js) (`showEntity`, `traceDirection`, `traceStack`), [`src/relationships.js`](../../src/relationships.js) (`directionalNeighbor`, `buildDirectionalTrace`), and [`src/scene.js`](../../src/scene.js) (`buildModelBranch`, `relationshipWeight`).

### Evidence coverage measured during this review

The catalog contains **2,038 entities and 552 relationships**. Of those relationships:

- **302 (54.7%)** contain a source URL. A URL alone does not establish that it supports the exact claim or remains current.
- **32 (5.8%)** have at least one recorded temporal bound; only **26** have both a source URL and at least one temporal bound.
- **182 (33.0%)** are explicitly representative.
- **66 of the 342 records labeled confirmed lack a source URL**. The existing label is not sufficient to promote them into the new reviewed evidence layer.

An accurate product must expose these gaps. It cannot imply complete supply-chain coverage or estimate the true number of affected companies from this dataset alone.

## Three design directions

| Direction | Strongest use | Tradeoff | Recommendation |
| --- | --- | --- | --- |
| **Event-led 3D workspace** | Open a news item, inspect the changed connection, follow supported dependencies and possible consequences. | Requires careful evidence states and visual restraint. | **Primary experience.** Best matches the desired way of following news and the existing visual identity. |
| Company/model watchlist dashboard | Follow a small set of entities; review changes since the last visit. | Lists and cards alone hide multi-hop dependencies. | Use it as the entry point and notification layer for the event workspace. |
| Geographic disruption map | Investigate a documented facility, power event, region, route or export restriction. | A model or corporate relationship often has no verified physical location. | A synchronized secondary view when location evidence supports it. |

Avoid a full-screen animated “ripple” that automatically colors every reachable company as affected. It would look compelling while making a causal claim the data cannot support.

## Recommended desktop composition

1. **Updates on the left.** A compact feed grouped by event rather than article. Each item states the event type, the entities actually named, the review state, and when it was published. A follow filter shows changes relevant to selected companies and model versions. Multiple syndicated articles belong to one event and do not count as independent corroboration.
2. **A focused 3D graph in the center.** Start with the changed records and roughly 6–20 relevant nodes, usually within one or two hops. Keep a consistent layout between earlier and updated records. Provide training, serving and hardware segments rather than mixing them into one supposed bill of materials. Broader expansion is explicit and reports truncation.
3. **Evidence on the right.** Answer “Why is this link here?” with the precise claim, supported scope, source passage, publication and review dates, limitations and correction history. Put observed changes and possible consequences in separate sections.
4. **A comparison strip below.** Compare the earlier and updated *records*. An added edge means newly recorded evidence, not necessarily a newly formed commercial relationship. Historical truth and “what the atlas knew then” are distinct modes once enough dated evidence exists.

The existing exploratory atlas remains available. The new workspace is a mode for investigating change, not a replacement for all six existing views.

### Seeing the entire ecosystem

Offer three levels of detail without changing the meaning of a connection:

| Level | What is visible | Question answered |
| --- | --- | --- |
| Event focus | The changed claim and the entities named in it. | What exactly happened? |
| Supply paths | Relevant upstream/downstream relationships, alternate routes, scope boundaries and unknowns. | Which dependencies could transmit a consequence? |
| Ecosystem overview | The familiar full atlas, grouped by its layers when zoomed out, with the selected event overlaid. | Where does this change sit in the larger system? |

Keep unrelated nodes quiet in the overview. Summaries should distinguish **named in the event**, **connected by a documented dependency**, **potential exposure under stated assumptions**, and **not assessed**. Count each entity once and state the coverage of the selected scope. Never label the entire reachable network “affected.” Expanding a layer reveals companies and products; selecting a claim returns to the focused investigation without losing the event, date or filters.

For major disruptions, allow several mechanisms to branch from the same event—for example supply availability, serving availability and commercial terms. Each branch needs its own conditions, evidence and horizon. Keep a company's contribution to multiple branches visible without summing them into a fictitious total loss. A cross-ecosystem overview should reveal where effects are supported and where research stops.

This grouped overview and geographic synchronization are proposed production extensions. The concept intentionally demonstrates the focused investigation and its evidence boundaries first.

## The central interaction

Example, using the fictional availability event in the concept:

1. Select **“Aster 3 arrives on Meridian Cloud.”**
2. Highlight the newly documented **Meridian Cloud → Aster 3** serving relationship. Keep the model’s developer and a known application relationship as context.
3. Select the serving link. Read the release-note excerpt and its scope: availability through a managed service. It does not establish training hardware, the serving accelerator, a facility, usage volume or contract value.
4. Turn on **Possible effects**. A distinctly marked option appears for Relay. Its explanation says a new route could be available *if* Relay chooses to integrate that endpoint. No migration or benefit is established.
5. Switch to **Training**. The graph explicitly stops at “not disclosed.” It does not fill the space with a plausible GPU vendor.
6. Switch to **Hardware**. A reported provider-level sourcing relationship is visible as context, with an explicit boundary: this is not model-specific allocation evidence.
7. Compare records. The added serving edge disappears from the earlier record; the canvas and node positions stay stable.

The correction fixture demonstrates a second essential behavior: a withdrawn training claim leaves the current graph but remains in its historical record. The retraction must also invalidate or flag any assessment that depended on it.

## Accuracy is part of the interface

### Three separate dimensions

Do not collapse these into one confidence score or one red/green color:

| Dimension | Examples | What it tells the reader |
| --- | --- | --- |
| Relationship evidence | Reviewed primary disclosure; reported by another source; disputed; illustrative; unknown | Why the connection is included and how narrowly it is supported. |
| Record change | Added; revised; withdrawn; unchanged context | What this update changed in the atlas. |
| Consequence | Observed; potential exposure; scenario; not assessed | Whether an effect actually happened or is a question for investigation. |

A fully documented relationship can have an unknown consequence. A company’s published announcement is evidence of what it announced, not independent proof that an announced plan was fulfilled. A report that a shipment is late is different from evidence that a customer’s service failed.

### Rules for tracing consequences

- Preserve product, model version, service, company, facility, region and date scope. Do not inherit a lab’s every partnership into every model it releases.
- Separate model development, training, fine-tuning, distribution, hosting, inference access and physical serving. A runnable runtime or available API endpoint does not prove the actual production deployment.
- For every proposed downstream effect, name the mechanism and conditions: affected allocation, dependence, timing, inventory, substitution and relevant geography.
- Require direct evidence to label an outcome observed. A graph traversal finds potentially relevant relationships; it does not prove a causal chain.
- Show unknown and disputed links as explicit stops. Exclude representative links from evidence-based propagation. Let users inspect educational scenarios separately.
- Deduplicate nodes and paths, preserve alternatives, and explain hop/node limits. Network reach is not impact magnitude.
- Do not derive probability percentages by multiplying editorial weights or equate the existing `importanceLevel` with event severity.
- Avoid default “winners/losers,” financial exposure totals and revenue impact estimates. Include measured effects only when sourced, scoped and dated; otherwise show “not established.”

### Visual language

Retain the deep charcoal background, restrained gold accents, mint highlights, geometric entities and fine links. Use depth to distinguish relevant layers, with a readable camera position and a reset control.

- **Solid connections:** reviewed, scoped disclosures. The evidence drawer still describes exactly what the source supports.
- **Dashed connections:** reported relationships. Labels carry the status so color is not the only cue.
- **An explicit “Possible effect” layer:** amber dotted paths with their assumptions visible. Off by default.
- **Change badges:** `+` for a newly recorded connection, `Δ` for revision, and a correction marker for withdrawal. A withdrawal is an evidence change, not proof that a business relationship ended.
- **Unknowns:** visible gaps and a short explanation, not fabricated substitute edges.
- **Stable node size:** no unsourced visual implication of financial magnitude. Optional measured metrics need units, timestamps and citations.
- **Restrained animation:** briefly highlight a changed connection on selection; no endless pulses or automatic orbit. Respect reduced motion and provide a complete keyboard-accessible list.

Geographic mode should carry the same event, selection and evidence drawer. Plot only verified locations at their recorded precision. Company headquarters, API access regions and training campuses remain different things. “No verified location for this claim” is a valid result.

## Mobile presentation

Use three workspace tabs: **Updates / 3D map / Evidence**. They are local to this workspace; retain access to the existing atlas views through the site navigation. Keep the selected event and snapshot when moving between tabs.

The graph starts with a small relevant neighborhood and large labeled tap targets. Reading the evidence uses the full screen instead of compressing three columns. The source list provides the same information without needing precise 3D selection. Show the earlier/updated control below the graph and preserve pinch, orbit and camera reset.

The concept implements these three tabs and the responsive graph. The full site navigation, geographic synchronization, shareable URLs, keyboard shortcuts for the 3D camera and real source ingestion are proposed production work.

## What must be stored to make this trustworthy

The current flat relationship rows cannot express claim history, contradictory sources and event-specific effects adequately. Keep the static presentation if desired, but introduce stable, versioned records:

| Record | Minimum information |
| --- | --- |
| Entity identity | Stable ID; company/product/model/service/facility type; version; aliases; parent/owner relations with validity dates. |
| Source | URL; publisher; title; author when available; publication/update time; retrieval time; exact supporting passage; immutable reference/hash or licensed archive; provenance and whether it is independent reporting. |
| Claim | Stable ID; subject; relation; object; narrow scope; supporting and contradicting source IDs; evidence basis; review state; reviewer; last review; superseded/retracted record links. |
| Event | Stable ID; event type; named entities; occurrence time or explicit unknown; publication time; recorded time; related claims; deduplication group; correction links. |
| Relationship version | Claim IDs; effective validity bounds and their precision; observed/recorded times; status; replacement history. Missing bounds remain unknown. |
| Consequence assessment | Triggering event; path of claim IDs; mechanism; assumptions; time horizon; scope; observed/potential/scenario state; supporting outcome evidence; author/reviewer; invalidation links. |

Store **when a fact is said to apply** separately from **when it entered or changed in the atlas**. This supports honest historical reconstruction and makes late reporting and corrections visible. Do not silently overwrite a prior claim.

An ingestion workflow should be: collect approved sources → deduplicate the event → resolve exact entities/versions → extract candidate claims → review claim scope and contradictory evidence → publish the graph change → assess possible consequences separately. Automated extraction can propose changes; it should not silently promote hypotheses or announcements into observed outcomes.

A static browser page cannot continuously monitor news on its own. A scheduled ingestion process and a review queue are needed. Show last successful ingestion, source coverage and review status; do not label a stale feed “live.” Start with a curated source/watchlist scope before expanding volume.

## Suggested first release

**First: evidence foundation.** Add stable claim/source/event IDs and correction history. Re-review a small, explicitly bounded set of companies, model versions and their relevant relationships. Exclude unsupported “confirmed” records and representative paths from the reviewed layer. Fix relation semantics and the company-to-model scope shortcut before any automated impact feature.

**Then: the Updates workspace.** Ship curated events, follow filters, focused 3D graphs, full connection evidence, review/freshness labels, unknowns and earlier/updated records. Include a canonical, keyboard-accessible connection list. Validate desktop and mobile investigation tasks with real reviewed examples.

**Then: expansion.** Add geographic synchronization, saved/shareable investigations and a reviewed consequence layer. Expand monitoring only after source deduplication, entity resolution, corrections and stale-data handling are reliable. Notifications should identify whether a fact, report, correction or hypothesis changed.

## Acceptance criteria for the design

- A reader can identify the exact recorded change and its source without interpreting the graph alone.
- Every displayed dependency can be inspected, including scope, evidence basis, dates and limitations.
- A reader can tell an observed outcome from a possible effect without relying on color.
- A model’s training path stops when the evidence stops; a company sourcing contract never silently becomes a model allocation claim.
- A reported rumor, a company announcement, a corroborated outcome and a retraction render differently.
- A retraction preserves history and flags dependent assessments; a before/after view never implies that an unrecorded relationship did not exist.
- Multiple suppliers and substitute routes remain visible; the interface does not overcount duplicate paths as independent impacts.
- The same investigation is usable on a phone and through keyboard-accessible lists without WebGL.

For a first usability review, ask someone to explain the availability fixture, identify the unsupported training assumption, and inspect the withdrawn claim. Success means they can describe what is known and unknown without calling every connected company “affected.”

## Prototype scope and reproduction

The prototype demonstrates the interaction and visual hierarchy. It does not ingest news, validate real sources, calculate impact, send alerts or implement a production historical database. Follow state is stored locally in the browser. Its three fixtures illustrate distinct review cases; they are not a reconstructed real-world event series.

Run `node design/update-review/build.mjs` to regenerate `concept.html` from `index.html`, `styles.css` and `app.js`. The standalone HTML embeds Three.js and local Manrope/DM Mono fonts; see the repository's existing asset license notices. It can be served by the existing development server. No production page or data files are changed by this build.

Run `node design/update-review/check.mjs` for the prototype checks. The concept was checked at 1440×1000, 1024×900, 390×844, 320×740 and 844×390, plus a mobile WebGL-failure case. Checks cover event selection, evidence/assumption inspection, earlier/updated records, withdrawal of a claim, follow filters, source dates, label overlap and page overflow. This is Chromium browser emulation, not testing on physical phones. Screenshots are saved next to the concept.
