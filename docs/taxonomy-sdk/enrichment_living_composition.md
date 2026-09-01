Yes—the biological workflow is included in the enrichment guide, but living composition is a separate, explicit layer. Structural enrichment alone does not automatically create one.

For ecoregion 615, you currently have an ecological profile, but no living-composition definition.

The inverse distinction is equally important: a structural `characteristicSpeciesIds` list does not establish a living composition. Living composition requires canonical taxa, target-specific occurrences, domain coverage, lifecycle records, ownership, and hierarchy edges.

## What must be added

### 1. Inspect the biological worklist

```powershell
npm run ecoregions:biota-worklist -- --ecoregion=615
```

This shows existing coverage, taxa, occurrences, and missing domains.

### 2. Register canonical taxa

Add applicable taxa to:

```text
src/app/datasets/ecoregions/enrichment/biota.ts
```

For example:

```ts
record<CanonicalTaxonRecord>({
  id: 'species:red-mangrove',
  kind: 'canonical-taxon',
  entityKind: 'taxon',
  title: 'Red mangrove',
  scientificName: 'Rhizophora mangle',
  domain: 'flora',
  rank: 'species',
  parentTaxonIds: ['taxon:rhizophoraceae'],
  summary: 'A sourced canonical description.',
  sourceIds: ['one-earth-eco-615'],
  profileOwnerPartitionId: 'southern-america',
});
```

Existing lightweight species records are not automatically canonical biological profiles. Each visible terminal needs a canonical record.

A canonical taxon source establishes identity and supports the canonical profile. It does not, by itself, establish occurrence in a particular ecoregion. Do not reuse a globally registered species as an ecoregion terminal until a target-specific source supports that occurrence.

### 3. Assign stable canonical ownership

Add every canonical terminal to:

```text
src/app/datasets/ecoregions/content/living-composition-ownership.ts
```

```ts
"species:red-mangrove": "southern-america",
"species:black-mangrove": "southern-america",
```

A canonical taxon has exactly one profile owner, even if occurrences later appear in multiple partitions.

### 4. Add occurrences for ecoregion 615

In `biota.ts`:

```ts
record<TaxonOccurrenceRecord>({
  id: 'occurrence:615:species:red-mangrove',
  kind: 'taxon-occurrence',
  ecoregionId: 'ecoregion:615',
  taxonId: 'species:red-mangrove',
  domain: 'flora',
  evidenceStatus: 'ecoregion-account',
  sourceIds: ['one-earth-eco-615'],
  ownerPartitionId: 'southern-america',
});
```

An occurrence controls whether the canonical taxon is represented inside this particular ecoregion.

For every occurrence, verify independently that:

- The cited source names the taxon, an accepted synonym, or an unambiguous common name in the target ecoregion.
- The evidence applies to the ecoregion itself rather than only its realm, country, host range, or neighbouring habitat.
- `evidenceStatus` accurately describes the evidence supplied.
- The occurrence owner follows the canonical ecoregion's content partition, not the projected path used to open it.

Source reachability, species-level source registration, or ecological plausibility is not sufficient occurrence evidence.

### 5. Add domain coverage records

Add one record for each investigated domain:

```ts
record<DomainCoverageRecord>({
  id: 'coverage:615:flora',
  kind: 'domain-coverage',
  ecoregionId: 'ecoregion:615',
  domain: 'flora',
  state: 'draft',
  depth: 'representative',
  summary: 'Published records represent characteristic mangrove taxa, not a complete flora.',
  sourceIds: ['one-earth-eco-615'],
});
```

Add explicit records for:

- `flora`
- `fauna`
- `fungi`
- `microbiome`

An empty or unstarted branch means “no reviewed records currently available,” not zero biomass, zero diversity, or confirmed ecological absence. Coverage wording must distinguish editorial incompleteness from ecological absence.

A domain may remain `unstarted`. That means “not researched yet,” not “absent from the ecosystem.”

### 6. Define the circular hierarchy

Add a new `LivingCompositionContent` definition in:

```text
src/app/datasets/ecoregions/enrichment/living-compositions.ts
```

Conceptually:

```text
South American Pacific Mangroves
├── Flora
│   ├── Tracheophyta
│   │   ├── Rhizophoraceae
│   │   │   └── Red mangrove
│   │   ├── Acanthaceae
│   │   │   └── Black mangrove
│   │   └── Combretaceae
│   │       ├── White mangrove
│   │       └── Button mangrove
├── Fauna
│   ├── Birds
│   ├── Reptiles
│   ├── Fish
│   └── Crustaceans
├── Fungi
│   └── Evidence-supported taxa or functional groups
└── Microbiome
    └── Evidence-supported functional groups
```

The model needs:

- One root node for `ecoregion:615`
- Four domain nodes
- Supported intermediate ranks
- Canonical terminal nodes
- Parent-child edges
- Published occurrences
- Domain coverage
- Optional reviewed observations

Do not create empty intermediate ranks merely to fill all three rings. The hierarchy projection can compress missing ranks.

Do not pad a branch to make the visualization balanced. Unlike the structural profile's optional characteristic-species list, living composition has no minimum item quota: one well-supported occurrence is preferable to several speculative terminals. Every visible terminal must earn its place independently.

### 7. Register the composition

Export it through the living-composition collection in the same file:

```ts
export const livingCompositions = {
  'ecoregion:302': himalayanPineComposition,
  'ecoregion:615': southAmericanPacificMangrovesComposition,
};
```

The partition builder will then place it in the Southern America lazy-content bundle.

### 8. Move records through lifecycle

Add new record IDs to:

```text
enrichment/biota-lifecycle.json
```

Start at `draft`, validate, and then promote dependencies in order:

```powershell
npm run ecoregions:validate-biota -- --changed

npm run ecoregions:review-biota -- --target=species:red-mangrove
npm run ecoregions:publish-biota -- --target=species:red-mangrove

npm run ecoregions:review-biota -- --target=occurrence:615:species:red-mangrove
npm run ecoregions:publish-biota -- --target=occurrence:615:species:red-mangrove
```

Repeat for coverage records and other taxa.

Validation is necessary but does not perform editorial review. Before promotion, inspect the actual source text, canonical identity, occurrence scope, evidence status, partition ownership, and coverage wording. Do not bulk-replace `draft` with `reviewed`, and do not promote a complete batch because one representative record passed inspection.

Use this dependency-aware review order:

1. Canonical taxon identity and profile evidence
2. Target-specific occurrence evidence
3. Domain coverage statement and depth
4. Quantitative observation provenance
5. Living-composition hierarchy and terminal resolution

Keep an explicit list of promoted IDs and verify that no unrelated lifecycle entries changed.

### 9. Regenerate lazy content

```powershell
npm run ecoregions:generate-content
npm run ecoregions:check-content
```

Without regeneration, the dashboard will continue loading the previous Southern America partition.

### 10. Verify

```powershell
npm run ecoregions:biota-worklist -- --ecoregion=615
npm run ecoregions:biota-coverage
npm run ecoregions:validate-biota -- --changed
npm test -- --watch=false
npm run test:e2e
npm run build
```

The automated commands verify contracts, dependencies, generated output, and bundle constraints. They cannot determine whether a cited page truly supports a species occurrence or whether a numeric ecological claim was copied accurately.

Complete a final editorial dashboard check:

- Count visible terminals by domain and reconcile them with published occurrences.
- Open every new terminal and verify its canonical profile.
- Confirm that a taxon appearing in multiple ecoregions has one canonical profile owner but separate occurrences.
- Confirm that territory labels match the structural ecoregion profile.
- Confirm that missing domains and observations are described as unknown or unstarted, never as zero.
- Confirm that quantitative labels show only sourced or explicitly calculated values.
- Report reviewed and published counts by record type and hierarchy level, not as one ambiguous total.
