# Taxonomy SDK

Create a taxonomy without modifying the renderer, store, or Angular components:

1. Copy `templates/taxonomy/minimal-taxonomy.ts` into `src/app/datasets/<name>/index.ts`.
2. Change metadata, vocabulary, content, groups, entries, and related entities.
3. Define the dimensions that create rings and the facets that filter records.
4. Run `npm run taxonomy:validate -- --module src/app/datasets/<name> --strict`.
5. Add `describeTaxonomyContract("Name", taxonomy)` from `taxonomy/testing/public-api`.
6. Select it in `application-taxonomy.ts`:

```ts
export { taxonomy as applicationTaxonomy } from './datasets/<name>';
```

7. Run `npm start` and inspect search, filtering, profiles, rings, and narrow layouts.

Dataset production code imports only from `taxonomy/public-api`. Testing helpers come from
`taxonomy/testing/public-api` and are never part of the production barrel.

Larger examples are available in `src/app/datasets/beer`, `src/app/datasets/ecoregions`, and
`src/app/datasets/panmagicon`. Panmagicon demonstrates a compact eager topology with collection-sized
lazy prose partitions generated from canonical authoring documents.

See [contracts](contracts.md), [projection and facets](projection-and-facets.md),
[presentation](presentation-and-themes.md), [profiles and search](profiles-and-search.md),
[persistence](persistence.md), and [troubleshooting](troubleshooting.md).
