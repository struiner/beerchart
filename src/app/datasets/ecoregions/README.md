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

Canonical references:

- https://www.oneearth.org/bioregions/
- https://www.oneearth.org/bioregions-2023/
- https://www.oneearth.org/bioregion-list/
- https://www.oneearth.org/ecoregion-list/

Geographic polygon assets are deliberately excluded. Attribution, upstream URLs, retrieval date,
checksum, derivations, and license notes are recorded in `source/framework-manifest.json`.
