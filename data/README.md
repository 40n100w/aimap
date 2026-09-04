# Editable atlas data

These CSV files are the website's source of truth. They are plain text, so the
entire site remains portable and can be edited in Excel, Numbers, LibreOffice,
Google Sheets, or a text editor.

## The files

- `entities.csv` — every searchable node and its profile text
- `relationships.csv` — links between entity IDs
- `office-locations.csv` — map points and their coordinates
- `data-center-campuses.csv` — documented Asian data-center campuses and grouped metro footprints, with a China-first inventory of named campuses and publicly documented cloud availability zones; includes status, operator, services, source, and coordinate precision
- `submarine-cables.csv` — cable names, status, owners, suppliers and length
- `submarine-cable-routes.csv` — ordered route vertices grouped by cable and segment
- `submarine-cable-landings.csv` — landing points associated with each cable
- `china-fiber-networks.csv` — backbone and telecom network profiles
- `china-fiber-nodes.csv` — publicly documented backbone hubs and operating centers
- `china-fiber-links.csv` — documented-topology and logical intercity connections
- `national-compute-hubs.csv` — the ten national “East Data, West Computing” clusters
- `national-compute-corridors.csv` — conceptual demand-to-cluster workload directions; explicitly not physical fiber routes
- `data-center-network-links.csv` — cartographic campus-to-backbone and national-hub associations with explicit confidence and distance fields
- `internet-exchanges.csv` — active global Internet exchange points from PCH
- `layers.csv` — the 12 vertical ecosystem layers
- `journeys.csv` — guided journeys; `nodes` is a JSON-style ID list
- `representative-paths.csv` — the “Trace a representative stack” routes
- `aliases.csv` — alternate IDs used by relationships
- `settings.csv` — the displayed data-update date

## Manual editing rules

Keep the first header row unchanged. Each entity needs a unique lowercase
hyphenated `id`; relationships and paths refer to that ID. List-valued cells
such as `products`, `categories`, `nodes`, and `profileSources` use JSON array
syntax, for example `["GPU servers","Liquid cooling"]`. CSV programs will
quote those cells automatically when saving.

For a map point to appear, set `status` to `map_ready`,
`coordinateAccuracy` to `building`, and provide numeric `latitude` and
`longitude`. Save as UTF-8 CSV, then refresh the website. Run
`npm run check:data` when you want to validate the edit; rebuilding is not
needed for CSV-only changes.

When opened directly from disk, choose this `data` folder in the page's folder
picker. Browsers require that explicit permission before a local HTML page can
read neighboring files. The page remains fully offline and needs no server.

## Submarine-cable attribution

The submarine-cable files are the independently republished March 12, 2026
snapshot from the [Undersea Cables Dataset](https://github.com/JesseCallahanBryant/undersea-cables),
derived from TeleGeography's Submarine Cable Map. The dataset maintainer labels
the underlying data CC BY-NC-SA 3.0. Use is therefore limited to non-commercial
purposes with attribution and share-alike distribution. Routes are stylized and
must not be interpreted as precise seabed locations.

## China terrestrial fiber confidence

China's commercial carriers do not publish comprehensive conduit-level route
geometry. `china-fiber-links.csv` therefore distinguishes `documented_topology`
from `logical`. Documented topology follows a published network diagram but is
still drawn as a straight cartographic connection. Logical links show supported
network connectivity or shared backbone hubs only. Neither confidence level
claims the physical location of buried fiber.

## Internet exchange attribution

`internet-exchanges.csv` is an August 26, 2026 snapshot of the active Internet
Exchange Point Directory maintained by [Packet Clearing House](https://www.pch.net/ixp/data).
PCH provides this API dataset under CC BY-NC-SA 3.0 for research and analysis.
Coordinates are city-level exchange locations; an exchange can span multiple
facilities, so a point must not be interpreted as a single building address.

## Model inference infrastructure

`model-inference-regions.csv` contains city-level anchors for documented model
service regions. It must not be interpreted as exact data-center buildings.
The `workload_role` field distinguishes documented managed training and
inference availability from inference-only service regions. It does not claim
that a region hosted the original pretraining run.
`model-network-links.csv` contains explicitly labeled logical cloud-backbone
connections. It does not represent observed traffic, precise fiber routes, or
proof that a named cable or IXP carried a request. Initial Qwen coverage uses
Alibaba Cloud Model Studio's published region, deployment-scope, PrivateLink,
and Cloud Enterprise Network documentation.
`model-organization-sites.csv` contains separately sourced offices and
headquarters associated with a model family. City-level entries do not claim a
specific building location.
Models whose providers disclose an API but no mappable serving region appear
with organization sites only. `inference_access_region` means a documented API
access location and is deliberately weaker than a confirmed serving region.

## Model-to-material provenance

The entity catalog supports up to 4,000 records. Every `Model` record must have
one documented developer, one deployment-runtime edge, and a representative
physical path. Model profiles group their upstream graph by lab, cloud, data
center, compute, fabrication, equipment, and raw-material layers. `confirmed`
and `reported` edges describe published evidence; `representative` edges fill a
legibility gap without claiming an undisclosed training cluster or bill of
materials. Run `scripts/expand-model-catalog.mjs` idempotently to restore the
audited global-model additions in this edition.
