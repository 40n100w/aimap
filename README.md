# AI Ecosystem Atlas

An explorable 3D system-of-systems map of the modern AI economy, from semiconductor materials and fab equipment through compute, cloud, models, agents, applications, and robotics. Every selectable node is a company, product, or physical input; layers and clusters are organizational metadata rather than entities.

The site is fully static and GitHub Pages-safe: there is no backend, database, authentication, API key, or server-side runtime.

## Architecture

```text
index.html          Accessible application shell and interface overlays
data/*.csv          Editable entities, relationships, layers, journeys and map points
src/data.js         CSV parsing and typed runtime data adapter
src/scene.js        Three.js scene, camera, node layout, lines, focus and traces
src/ui.js           Search, filters, panels, journeys and textual interactions
src/mobile-ui.js    Touch navigation and accessible sheets using the same controllers
src/mobile.css      Mobile-only layout, safe areas and keyboard-aware sizing
data/updates.json    Reviewed events, source snapshots and append-only claim history
src/update-records.js Validated record snapshots and scoped evidence selection
src/updates-view.js  Responsive Updates feed, evidence, history and local watchlists
src/updates-graph.js Focused 3D graph of the update's explicit claims
src/main.js         Application bootstrap
src/styles.css      Visual system, responsive layout and reduced motion
vite.config.js      Relative-path production build for project-site hosting
vite.file.config.js Creates a classic standalone browser bundle for file:// use
public/standalone/  Generated JavaScript and CSS used by the checked-in page
```

Three.js renders the universe to one WebGL canvas. Important labels use a small HTML overlay for legibility. Relationship lines are created only for the current selection or trace, avoiding an unreadable and expensive always-on graph.

## Run locally

Requires Node.js 20 or newer.

The page can also be opened directly from disk with no server or internet
connection. Drag the neighboring `data` folder onto the prompt, or choose it
with the folder picker in browsers that support local directory access. CSV
and JSON edits appear after a refresh and loading the folder again.

```bash
npm install
npm run dev
```

Open the local URL Vite prints. Create the deployable static build with:

```bash
npm run build
```

Run the data checks and regression tests with:

```bash
npm run check:data
npm test
npm run build
npm run test:browser
```

The browser checks serve the build on an ephemeral local port and exercise
desktop navigation, touch interactions at phone/tablet sizes and in landscape,
profiles, filters, journeys, timeline browsing, map layers and flows, resizing,
map retries, unavailable WebGL, missing data, and offline presentation resources.
They use `/usr/bin/chromium` when present;
otherwise install the Playwright browser with `npx playwright install chromium`.
Set `CHROMIUM_PATH` to use a different Chromium installation. Optional
`SCREENSHOT_DIR=work/browser-checks` saves screenshots from the same checks.

The development server serves the checked-in standalone bundle. Rebuild after
editing JavaScript or styles to refresh it; data-only edits need no rebuild for
the development page. Rebuild before deployment so `dist/data` is refreshed.

## Reviewed updates

The **Updates** workspace connects curated announcements and documentation
reviews to scoped 3D relationships, source excerpts and claim history. Desktop
uses three panels; phones use Updates / 3D map / Evidence tabs. Compare earlier
and updated records, follow entities locally, and explicitly enable potential
effects with their assumptions. The initial collection is limited and reviewed;
it is not a live news feed. See [the update workflow](docs/updates.md) for coverage,
data semantics, adding records and publishing corrections.

The command first refreshes the standalone browser assets, then writes the
deployable site to `dist/`. The JavaScript and styles are contained in
`dist/index.html`; the editable CSV database is copied to `dist/data/`. Serve
that folder over HTTP. After the initial build, CSV-only changes can be made
directly in `dist/data/` and appear on the next browser refresh without another
build. The root site likewise reads directly from the repository's `data/`
folder when served by Vite or another static server.

Fonts and coarse Natural Earth land outlines are bundled for offline use.
Online street-map tiles are optional; when unavailable, the map shows land
outlines and a retry notice. Map datasets load on first opening Map, and missing
files leave other map layers and the core explorer available. If WebGL is
unavailable, a text catalog preserves search, profiles, relationship tracing,
timeline and map access. Asset notices and licenses are included in `dist/licenses/`.

## Mobile interface

Small screens use a six-view bottom navigation bar, search and filter shortcuts,
and scrollable sheets for complete profiles, evidence, controls and map details.
The More menu contains guided journeys, relationship time, camera controls,
fullscreen where supported, and methodology. Timeline charts scroll horizontally;
a year picker makes every dated entry accessible without tapping tiny chart marks.

The 3D scene supports one-finger orbit, pinch zoom, two-finger pan and node taps.
Touch targets are enlarged, drag/pinch gestures cannot become accidental selections,
and mobile rendering pauses behind sheets or other views. Search sheets follow the
visual viewport when the keyboard opens, and respect device safe areas. Modal sheets
trap keyboard focus, support Escape and backdrop dismissal, and restore focus.

The mobile interface reuses all existing data and feature controllers. Its styles
apply at widths up to 900px, or to touch screens up to 1100px wide and 600px high
(landscape phones). Larger desktop layouts retain their existing presentation.
Keep the media query in `src/mobile-layout.js` and `src/mobile.css` in sync.

## Data schema

All website records live in the CSV files under `data/`. See `data/README.md`
for the file-by-file schema and manual editing rules. The current edition
contains over 2,000 visible entities. Geographic views use the `geography` column.
Geography is an editorial classification of principal association rather than
a claim about incorporation, ownership, data residency, or every market where
an organization operates.

The October 18, 2026 [catalog refresh](research/catalog-refresh-2026-10-18.md)
covers 108 company, lab, model and technology records, including 26 additions.
Profiles display the date and scope from `data/catalog-reviews.csv`. The catalog
review date is separate from the base edition and geographic dataset snapshots.

Each entity has a stable `id` and the following shape:

```js
{
  id: 'nvidia',
  name: 'NVIDIA',
  type: 'Company',
  layer: 'compute',
  categories: ['Compute'],
  country: 'United States',
  products: ['Blackwell', 'CUDA', 'NVLink'],
  importanceLevel: 3,
  cluster: 'compute',
  description: '...',
  ecosystemRole: '...',
  whyItMatters: '...',
  website: null,
  positionIndex: 0
}
```

Relationships are stored separately:

```js
{
  source: 'tsmc',
  target: 'nvidia',
  type: 'MANUFACTURES',
  explanation: 'TSMC manufactures leading NVIDIA accelerators.',
  status: 'confirmed'
}
```

Supported evidence statuses are `confirmed`, `reported`, `inferred`, and `representative`. Use the least certain appropriate status; do not encode a disputed commercial relationship as confirmed.

## Add an entity

1. Add a row to `data/entities.csv` with a unique URL-safe ID.
2. Use JSON array syntax in `categories`, `products`, and `profileSources`.
3. Give the row a unique numeric `positionIndex` within its layer.
4. Refresh the served website and search for the entity. Run
   `npm run check:data` when you want to validate the edit.

To add a new kind of metadata, extend the entity mapper in `src/data.js`, then render it in `UI.showEntity()`.

## Add a relationship

Add a row to `data/relationships.csv`:

```js
supplier-id,customer-id,SUPPLIES,A concise explanation,reported
```

Both IDs must exist in `entities` or be mapped in `aliases`. Relationship types are discovered automatically for the filter. Prefer the existing vocabulary: `SUPPLIES`, `MANUFACTURES`, `DESIGNS`, `RUNS_ON`, `TRAINS_ON`, `HOSTS`, `INVESTS_IN`, `PARTNERS_WITH`, `INTEGRATES_WITH`, `COMPETES_WITH`, `DEPENDS_ON`, `PROVIDES_MEMORY_TO`, `PROVIDES_EQUIPMENT_TO`, `PROVIDES_NETWORKING_TO`, `USES_MODEL_FROM`, `PART_OF`, and `ENABLES`. Taxonomy links must remain `representative` so cluster membership is never mistaken for a supplier contract.

## Guided journeys and representative paths

`journeys` contains ordered node IDs and editorial summaries. `representativePaths` powers “Trace the stack.” Paths intentionally simplify multi-supplier systems and are labeled as representative in the interface.

## Deploy to GitHub Pages

1. Run `npm run build`.
2. In the repository’s **Settings → Pages**, choose **GitHub Actions** as the source, or publish the contents of `dist/` with your preferred Pages action.
3. Configure the action to run `npm ci` and `npm run build`, then upload `dist/` as the Pages artifact. It contains `index.html`, the editable `data/` directory, and asset notices in `licenses/`. The included workflow also runs data, unit, and browser checks before deployment.

Vite’s `base: './'` setting makes generated assets relative, so the site works at both `username.github.io` and `username.github.io/repository-name/`.

## Maintenance and future improvements

- Review high-impact relationships and the `DATA_UPDATED` date on every data release.
- Add source URLs and per-relationship citations when the dataset moves beyond an editorial overview.
- Add WebGL instancing if the atlas expands materially beyond a few hundred entities.
- Add localization and an optional 2D accessible table for large institutional deployments.
- Consider URL state for shareable selected entities and traced paths.

The methodology panel in the site explains the editorial limits: this is a navigational model of a fast-changing ecosystem, not an exhaustive or authoritative supply-chain database.
