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
src/main.js         Application bootstrap
src/styles.css      Visual system, responsive layout and reduced motion
vite.config.js      Relative-path production build for project-site hosting
vite.file.config.js Creates a classic standalone browser bundle for file:// use
public/standalone/  Generated JavaScript and CSS used by the checked-in page
```

Three.js renders the universe to one WebGL canvas. Important labels use a small HTML overlay for legibility. Relationship lines are created only for the current selection or trace, avoiding an unreadable and expensive always-on graph.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL Vite prints. Create the deployable static build with:

```bash
npm run build
```

The command first refreshes the standalone browser assets, then writes the
deployable site to `dist/index.html`. That one file contains the complete site,
including its styles, JavaScript, libraries, and data, so it can be transferred
by itself and opened directly in a browser. The root `index.html` remains the
lighter development copy and uses the generated files in `public/standalone/`.

## Data schema

All website records live in the CSV files under `data/`. See `data/README.md`
for the file-by-file schema and manual editing rules. The current edition
contains 2,000 visible entities. Geographic views use the `geography` column.
Geography is an editorial classification of principal association rather than
a claim about incorporation, ownership, data residency, or every market where
an organization operates.

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
4. Run `npm run check:data`, then `npm run build` and search for the entity.

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
3. Configure the action to run `npm ci` and `npm run build`, then upload `dist/` as the Pages artifact. The artifact contains just one website file: `index.html`.

Vite’s `base: './'` setting makes generated assets relative, so the site works at both `username.github.io` and `username.github.io/repository-name/`.

## Maintenance and future improvements

- Review high-impact relationships and the `DATA_UPDATED` date on every data release.
- Add source URLs and per-relationship citations when the dataset moves beyond an editorial overview.
- Add WebGL instancing if the atlas expands materially beyond a few hundred entities.
- Add localization and an optional 2D accessible table for large institutional deployments.
- Consider URL state for shareable selected entities and traced paths.

The methodology panel in the site explains the editorial limits: this is a navigational model of a fast-changing ecosystem, not an exhaustive or authoritative supply-chain database.
