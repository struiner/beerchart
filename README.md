# Beer Taxonomy Atlas

A full-viewport Angular 22 application for exploring a hierarchical beer-style taxonomy as a crisp, semantic SVG scene. The permanent interface is deliberately limited to a compact toolbar and the taxonomy viewport.

## Run

```bash
npm install
npm start
npm test -- --watch=false
npm run build
```

## Architecture

- `src/app/datasets/beer/` owns the beer contracts, records, interpretation, presentation preset, and sprite assets behind one public entry point.
- `src/app/application-taxonomy.ts` is the sole production composition boundary. Choosing another taxonomy requires changing that import, not the generic engine or shell.
- `src/app/taxonomy/` contains the dataset-independent contracts and deterministic projection, layout, presentation, profile, search, and validation engines.
- `AppStore` owns taxonomy, camera, selection, highlighted ancestry, viewport settings, and versioned persistence using Angular signals.
- `TaxonomyViewport` renders accessible, keyboard-addressable SVG nodes. HTML overlays provide the minimap, popover, menu, and dialogs.
- Backend-dependent surfaces explicitly show unavailable states rather than inventing user or submission data.

## Authoring another taxonomy

Start with [the Taxonomy SDK guide](docs/taxonomy-sdk/README.md) and copy
`templates/taxonomy/minimal-taxonomy.ts`. Dataset production code imports only from
`src/app/taxonomy/public-api.ts`; reusable test support is exported separately from
`src/app/taxonomy/testing/public-api.ts`.

## Controls

Drag to pan. Wheel/trackpad pans by default; Ctrl/Cmd + wheel zooms around the pointer. `+` and `-` zoom, arrow keys pan, `0` fits, and `Home` focuses Beer. Click a node for details; double-click or Enter centers it.

## Metadata and persistence

Selecting a style station exposes six consistently icon-coded facts: beer color, common glassware, fermentation method, defining ingredients, conditioning or maturation, and concise distinguishing character. Common glassware remains a service convention rather than a formal style requirement. Application-owned browser keys use `beer-taxonomy.*.v1`.

The local adapter supports settings and proposed submissions. Account identity and server-authoritative status remain integration points for a future typed HTTP gateway; no production endpoint is fabricated.

## Source-data status

The 168 style names and their family/category placement are imported from the supplied `beer-taxonomy-circular-metro-map.html` reference by `scripts/import-circular-taxonomy.mjs`. Descriptive profiles derived from style names are concise navigation aids, not replacements for cited guideline values. Reconcile the [Brewers Association guidelines](https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/) and [BJCP guidelines](https://www.bjcp.org/bjcp-style-guidelines/) carefully because they organize styles differently.
