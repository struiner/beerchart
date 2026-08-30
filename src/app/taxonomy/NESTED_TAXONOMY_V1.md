# Nested taxonomy SDK v1

The nested-taxonomy contracts are stable as of the runtime-partition checkpoint. New generic
features require a demonstrated failure in published dataset content rather than an anticipated
use case.

## Stable contracts

- `HierarchicalProjectionDefinition`, nodes, edges, layers, presets and window policy
- Deterministic path-based projected instances and canonical identity
- Three-ring navigation, rerooting, breadcrumbs and aggregate overflow
- Widget-local selection, focus, camera-independent state and namespaced preferences
- `HierarchyNodeMeasure`, `ProjectedNodeMeasure` and `NodeMeasureEncoding`
- Lazy `TaxonomyContentProvider` partition ownership and canonical related-entity navigation

## Runtime boundaries

- The circular atlas must not load dashboard code.
- A plain dashboard loads the dashboard runtime but not the hierarchy widget.
- A dashboard with published nested content loads the hierarchy runtime on demand.
- Projection and measure implementations are not runtime exports of `taxonomy/public-api.ts`.
- Dataset packages may import contracts with `import type`; executable test helpers live in
  `taxonomy/testing/public-api.ts`.

## Change policy

Contract changes require a content-backed failing test, migration notes, updated schema version,
unit coverage, browser interaction coverage and confirmation that the initial 400 KiB ceiling and
375 KiB reserve target remain satisfied.
