# Bundled presentation assets

- Manrope and DM Mono Latin WOFF2 files come from `@fontsource/manrope@5.3.0` and `@fontsource/dm-mono@5.3.0`, installed through npm with integrity verification. Their SIL Open Font Licenses are included in `fonts/`.
- `land-110m.json` is the GeoJSON conversion of `world-atlas@2.0.2/land-110m.json`, using `topojson-client@3.1.0`'s `feature()` function. The original land geometry is Natural Earth public-domain data. The world-atlas ISC license is included here. These coarse land outlines are geographic context, not surveyed coastlines or political boundaries.

Vite embeds these resources into the standalone bundle, preserving file-based use without font or basemap downloads. Online Esri tiles remain optional and retain their attribution.
