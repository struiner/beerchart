# Terrestrial ecoregions dataset

This dataset is a generated structural representation of the One Earth Bioregions 2023 framework.

Current scope:

- 14 realm divisions.
- 53 subrealms, including Antarctica.
- 185 bioregions.
- 844 canonical ecoregions across 14 major biomes.
- Multiple memberships are preserved rather than flattened.
- Eight rearrangeable dimensions, sparse profiles, search, and an independent theme.

The checked-in source snapshot and generated TypeScript make ordinary builds deterministic and
offline. Regenerate from the snapshot with `npm run ecoregions:generate`; verify committed output
with `npm run ecoregions:check`. Network acquisition is an explicit maintainer operation and is not
part of build or test execution.

Authored enrichment is kept under `enrichment/` and is merged only into presentation profiles and
related entities. It cannot mutate generated IDs, titles, parent membership, or biome membership.
Run `npm run ecoregions:validate-enrichment` to check targets, source IDs, claim sourcing, ranges,
species and country references, explicit overrides, and required summaries.
Run `npm run ecoregions:coverage` for unique totals by hierarchy level and membership totals by
realm. Editorial and loading rules are defined in `EDITORIAL.md`; `npm run ecoregions:bundle`
measures eager profile growth after a production build.

The first content-standard pilot follows Indomalaya → Indian Subcontinent → Himalayan Mixed Forests
& Grasslands and three component ecoregions. It intentionally establishes profile density and
validation before expanding across all 252 structural groups.

Canonical references:

- https://www.oneearth.org/bioregions/
- https://www.oneearth.org/bioregions-2023/
- https://www.oneearth.org/bioregion-list/
- https://www.oneearth.org/ecoregion-list/

Geographic polygon assets are deliberately excluded. Attribution, upstream URLs, retrieval date,
checksum, derivations, and license notes are recorded in `source/framework-manifest.json`.
