# Ecological enrichment editorial standard

Generated topology is canonical. Authored enrichment must not change IDs, titles, hierarchy
membership, or generated biome placement. A correction requires an explicit `overrides` declaration
with a rationale and a separate review of the source snapshot.

## Workflow

Coverage progresses through `unstarted`, `draft`, `reviewed`, and `published`. Adding an enrichment
record does not promote coverage automatically. Reviewed and published records require a sourced
summary and must pass `npm run ecoregions:validate-enrichment`.

## Prose and claims

- Summaries contain two or three independently written sentences and 100–600 characters.
- Every factual field is a `SourcedValue` with at least one registered source ID.
- Avoid quotations and close paraphrases. Cite sources; do not copy their editorial language.
- Do not infer child facts from a parent profile or propagate child facts to siblings.
- Do not reuse the same normalized summary for multiple targets.
- Conservation statements distinguish reported measurements from editorial synthesis.

## Controlled data

- Derivation is `authored-summary`, `source-value`, or `calculated`.
- Record status is `authored` or `derived`.
- Countries use registry-backed ISO 3166-1 alpha-2 identifiers.
- Species use stable `species:` IDs and retain common and scientific names separately.
- Climate ranges must be finite, ordered, and carry their units in the contract.
- Characteristic species lists contain three to eight registry-backed records.

## Loading policy

Species and country search metadata remain lightweight and global. Full ecological prose currently
ships in the ecoregion dataset's lazy chunk. `npm run ecoregions:bundle` reports growth; crossing the
realm-lazy threshold requires splitting full profiles into on-demand realm bundles before additional
bulk enrichment is merged.

## Biological publishing workflow

Biological content has four independently reviewed record types: canonical taxa, ecoregion
occurrences, domain coverage statements, and quantitative observations. Author them in dependency
order: canonical taxon, occurrence, then observation. A coverage statement describes inventory
depth; `published` never means that an inventory is complete.

1. Run `npm run ecoregions:biota-worklist -- --ecoregion=<external-or-canonical-id>`.
2. Register every source before adding a factual claim.
3. Add one canonical profile in `enrichment/biota.ts` and assign exactly one stable content owner.
4. Add an occurrence owned by the selected ecoregion's partition, including evidence status.
5. Set each domain to `representative`, `survey-derived`, or `extensive`; use `extensive` only when
   an appropriate regional inventory supports it.
6. Keep new lifecycle entries at `draft`, then run
   `npm run ecoregions:validate-biota -- --changed`.
7. Promote with `npm run ecoregions:review-biota -- --target=<id>` and, after editorial review,
   `npm run ecoregions:publish-biota -- --target=<id>`.
8. Regenerate content, inspect the canonical profile and projected occurrence in the application,
   then run `npm run ecoregions:biota-coverage`.

Published occurrences require a published canonical profile, a published ecoregion, registered
sources, evidence status, and the correct realm partition. Observations additionally require a
published occurrence plus explicit unit, method, scope, period, and valid uncertainty. Do not add a
biomass value merely to exercise a visual encoding; absence remains meaningful when no compatible
measurement has been reviewed.
