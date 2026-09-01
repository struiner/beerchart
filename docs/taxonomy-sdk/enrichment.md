# Updated ecoregion enrichment guide

Use this workflow for adding ecological descriptions, biological records, media, and quantitative observations without changing the canonical topology.

## 1. Choose the target

Identify the canonical ecoregion:

```text
ecoregion:302
```

External IDs are also accepted by the biota worklist:

```powershell
npm run ecoregions:biota-worklist -- --ecoregion=302
```

The report shows:

- Existing domain coverage
- Canonical taxa
- Occurrences
- Lifecycle states
- Evidence status
- Missing profiles or domains

## 2. Do not edit generated topology

Files under `generated/` define the canonical structure:

```text
generated/
  realms.generated.ts
  subrealms.generated.ts
  bioregions.generated.ts
  ecoregions.generated.ts
```

Do not manually change:

- IDs or titles
- Parent membership
- Realm or bioregion placement
- Biome classification
- Cross-realm membership

Verify topology integrity with:

```powershell
npm run ecoregions:check
```

## 3. Register sources first

Add sources to:

```text
src/app/datasets/ecoregions/source/source-registry.ts
```

Each source should have a stable ID, title, URL, publisher, and appropriate source metadata.

Prefer:

1. Peer-reviewed studies
2. Government or scientific institutions
3. Recognized conservation organizations
4. Authoritative regional inventories
5. Carefully qualified secondary sources

Do not copy source prose. Write concise summaries and cite the relevant source IDs.

Registration is not evidence verification. A source returning HTTP 200 only proves that the page is reachable; it does not prove that the page supports every country, species, number, or ecological claim attached to its ID. During review, open the source and match each material claim to the source text.

For a batch, record at least:

- The exact target IDs reviewed
- The date of review
- Which source was treated as canonical for conflicting fields
- Claims removed or qualified during review
- Items deliberately left for a later pass, such as artwork

Do not inherit `reviewed` status merely because a neighbouring record or an earlier batch uses the same source.

## 4. Add the structural profile

Structural enrichment belongs in the relevant file:

```text
enrichment/
  realms.ts
  subrealms.ts
  bioregions.ts
  ecoregions.ts
```

A typical ecoregion record can contain:

- Two- or three-sentence summary
- Landscape and landforms
- Climate and moisture character
- Vegetation
- Ecological processes
- Countries and territories
- Conservation context
- Characteristic species
- Sources

Example:

```ts
{
  targetId: "ecoregion:302",

  summary: sourced(
    "Independently written summary of the ecoregion.",
    ["source-id"],
    "authored-summary",
  ),

  landscape: sourced(
    ["Steep foothills", "Open pine slopes"],
    ["source-id"],
    "source-value",
  ),

  characteristicSpeciesIds: [
    "species:chir-pine",
  ],

  countryIds: ["IN", "NP"],

  sources: ["source-id"],
  status: "authored",
}
```

Rules:

- Factual fields must be sourced.
- Do not infer child facts from parent profiles.
- Do not copy facts across sibling ecoregions.
- Numeric ranges must be finite, ordered, and correctly unit-labelled.
- Countries must use registered ISO codes.
- Species IDs must resolve.
- Declare intentional overrides explicitly.

### Country and territory scope

Use the geography explicitly stated by the canonical source. Do not silently replace a territory with its sovereign state, or add nearby jurisdictions because they are mentioned in prose.

For the One Earth dataset:

- Treat the ecoregion page's `States` field as canonical for an ecoregion record.
- Register territories independently when the source does so, for example French Polynesia (`PF`) and Pitcairn Islands (`PN`).
- Do not substitute France (`FR`) for French Polynesia, or infer every jurisdiction discussed in the narrative.
- Review a parent bioregion scope independently. It is not automatically the union of authored child scopes unless that derivation is documented.
- Cross-realm or multi-parent projection does not change canonical country ownership.

If the canonical page has no explicit scope field, document the fallback source or leave the field absent. Do not guess.

### Species evidence

`characteristicSpeciesIds` is an evidence-bearing claim, not a decorative list.

- Each retained taxon must be identifiable in one of the record's cited sources by scientific name, unambiguous common name, or documented synonym.
- A source registered on the species record does not automatically support that species in every ecoregion that cites it.
- Check the source corpus attached to the target record, not only the global species registry.
- After pruning unsupported taxa, omit a characteristic-species section when fewer than three supported taxa remain. Never pad a short list with plausible species.
- Absence of the section means insufficient reviewed evidence, not ecological absence.

Living-composition occurrences have stricter per-record requirements; see `enrichment_living_composition.md`.

### Numeric and climate provenance

Every displayed number must be traceable. Validate numbers separately from surrounding prose.

- Use `source-value` only when the value and unit are directly reported by the cited source.
- Use `calculated` for transparent conversions or derivations, such as centimetres converted to millimetres.
- Do not label an independently supplied or converted range as `source-value`.
- If a number cannot be reproduced from the cited source, remove it. Remove the whole field when the unsupported number is central to its meaning.
- Do not preserve unsupported precision by rewriting a number as approximate.
- Retain qualitative climate text only when the source independently supports it.

The structural validator checks types and ranges, but cannot establish that a web page actually contains the claimed number. That remains an editorial review step.

Validate:

```powershell
npm run ecoregions:validate-enrichment
```

Inspect overall structural coverage:

```powershell
npm run ecoregions:coverage
```

Coverage rows are hierarchy-wide aggregates. A realm row counts matching realm, subrealm, bioregion, and ecoregion records associated with that realm. It must not be described as an ecoregion count.

For example, `21 reviewed` may mean one subrealm, six bioregions, and fourteen ecoregions. Consult the hierarchy-level table—or calculate the canonical ecoregion subset—before reporting “reviewed ecoregions.” Cross-realm membership may cause a canonical target to appear in more than one realm row, while overall totals remain unique.

## 5. Add canonical biological records

Biological records live in:

```text
src/app/datasets/ecoregions/enrichment/biota.ts
```

Add biological content in dependency order:

```text
Canonical taxon
  → Ecoregion occurrence
    → Quantitative observation
```

A canonical taxon has exactly one stable profile owner, even when it occurs in multiple realms.

Example:

```ts
record<CanonicalTaxonRecord>({
  id: 'species:example',
  kind: 'canonical-taxon',
  entityKind: 'taxon',
  title: 'Example species',
  scientificName: 'Genus species',
  domain: 'flora',
  rank: 'species',
  parentTaxonIds: ['taxon:example-family'],
  summary: 'Concise, independently written canonical profile.',
  sourceIds: ['registered-source'],
  profileOwnerPartitionId: 'indomalaya',
});
```

Use functional groups when species-level claims are not scientifically justified:

```ts
{
  id: "functional-group:ectomycorrhizal-fungi",
  entityKind: "functional-group",
  domain: "fungi"
}
```

Do not manufacture species-level precision from broad fungal or microbiome evidence.

## 6. Add an ecoregion occurrence

Occurrences connect canonical taxa to an ecoregion:

```ts
record<TaxonOccurrenceRecord>({
  id: 'occurrence:302:species:example',
  kind: 'taxon-occurrence',
  ecoregionId: 'ecoregion:302',
  taxonId: 'species:example',
  domain: 'flora',
  evidenceStatus: 'regional-survey',
  sourceIds: ['registered-source'],
  ownerPartitionId: 'indomalaya',
});
```

Available evidence statuses include:

```ts
type BiologicalEvidenceStatus =
  'ecoregion-account' | 'regional-survey' | 'host-association' | 'functional-evidence';
```

A published occurrence requires:

- A valid, published canonical taxon
- A published ecoregion
- At least one registered source
- A documented evidence status
- The partition belonging to that ecoregion

Occurrences may exist in many realm partitions. The canonical profile must still have only one owner.

## 7. Declare domain coverage

Create one coverage record for each applicable domain:

```ts
type BiologicalDomain = 'flora' | 'fauna' | 'fungi' | 'microbiome';
```

Example:

```ts
record<DomainCoverageRecord>({
  id: 'coverage:302:flora',
  kind: 'domain-coverage',
  ecoregionId: 'ecoregion:302',
  domain: 'flora',
  state: 'draft',
  depth: 'representative',
  summary: 'Records represent characteristic taxa and are not a complete flora.',
  sourceIds: ['registered-source'],
});
```

Coverage depth is independent of publication state:

```ts
type BiologicalCoverageDepth = 'representative' | 'survey-derived' | 'extensive';
```

Use:

- `representative` for a curated selection of characteristic records.
- `survey-derived` when records come from a defined regional survey.
- `extensive` only when a suitable comprehensive inventory supports that claim.

“Published” never means “complete inventory.”

## 8. Add observations only when supported

Quantitative observations may include biomass or another supported ecological metric.

Every observation must reference a published occurrence and provide:

- Metric
- Value or range
- Unit
- Measurement basis
- Method
- Spatial extent
- Observation period
- Source
- Uncertainty, when reported
- Owning partition

Do not add synthetic values to exercise station sizes, halos, or labels. Missing quantitative data is preferable to misleading data.

Incompatible measurements must not be aggregated—for example, dry biomass and carbon mass cannot automatically be summed.

## 9. Set lifecycle state

Lifecycle states are stored separately in:

```text
enrichment/biota-lifecycle.json
```

The progression is:

```text
unstarted → draft → reviewed → published
```

New records should begin as `draft`.

The enrichment object's `status: "authored"` is not lifecycle approval. Lifecycle lives in the coverage manifest for structural enrichment and in `biota-lifecycle.json` for biological records. Neither should become `reviewed` merely because validation passes.

Before a structural target becomes `reviewed`, confirm manually that:

1. The target ID and hierarchy membership are canonical.
2. Every URL resolves to the intended page, not merely any successful page.
3. Country and territory scope matches the declared canonical source.
4. Every retained characteristic species is supported for this target.
5. Every numeric claim has direct or explicitly calculated provenance.
6. Claims do not leak from parents, siblings, or similarly named targets.
7. The exact reviewed batch is recorded and no unrelated lifecycle entries changed.

`reviewed` means these checks were performed. `published` remains a separate editorial decision.

Validate the biological graph:

```powershell
npm run ecoregions:validate-biota -- --changed
```

Promote an editorially checked record:

```powershell
npm run ecoregions:review-biota -- --target=species:example
```

Publish it:

```powershell
npm run ecoregions:publish-biota -- --target=species:example
```

Publish in dependency order:

1. Canonical taxon
2. Occurrence
3. Domain coverage
4. Observation

The commands reject invalid transitions that would break published dependencies.

## 10. Update partition ownership

Canonical profile ownership is defined in:

```text
content/living-composition-ownership.ts
```

Example:

```ts
"species:example": "indomalaya"
```

Requirements:

- Exactly one canonical owner
- No duplicate canonical profile across partitions
- Occurrence ownership follows its ecoregion
- Canonical ownership does not change according to the selected projected path

## 11. Update the living-composition hierarchy

Add the taxonomic node and edges to:

```text
enrichment/living-compositions.ts
```

The hierarchy can include:

- Domains
- Divisions or phyla
- Classes
- Orders
- Families
- Genera
- Species
- Functional groups

Every visible terminal biological record should resolve to a canonical profile.

Keep the hierarchy evidence-driven. Do not add intermediate ranks merely to fill all three circles—the projection engine can compress missing ranks.

## 12. Regenerate lazy content

After editing enrichment, ownership, or lifecycle data:

```powershell
npm run ecoregions:generate-content
```

Verify that generated partitions are current:

```powershell
npm run ecoregions:check-content
```

Generated content should be checked in alongside the authored changes.

## 13. Review in the browser

Inspect the ecoregion dashboard and confirm:

- Base profile appears immediately.
- Enrichment hydrates without resetting the canvas.
- All four domain states are accurate.
- Terminal taxa open their canonical profiles.
- Breadcrumbs and re-rooting work.
- Fungi and microbiome claims are properly qualified.
- Missing biomass is not presented as zero.
- Sources are displayed.
- Closing the dashboard restores the previous atlas state.
- Direct dashboard and canonical-taxon URLs work.

## 14. Run coverage reports

Biological coverage:

```powershell
npm run ecoregions:biota-coverage
```

Check for:

- Records by domain and lifecycle
- Coverage depth
- Canonical versus occurrence counts
- Missing sources
- Orphan taxa
- Cross-partition errors
- Observation metrics and units
- Domains without published records

Structural coverage:

```powershell
npm run ecoregions:coverage
```

When reporting a realm, state the levels explicitly:

```text
Reviewed descendants: 21
  subrealms: 1
  bioregions: 6
  ecoregions: 14
```

Never shorten this to “21 reviewed ecoregions.”

## 15. Run the publication gate

Before considering a batch complete:

```powershell
npm run ecoregions:check
npm run ecoregions:validate-enrichment
npm run ecoregions:validate-biota -- --changed
npm run ecoregions:check-content
npm test -- --watch=false
npm run test:e2e
npm run build
```

The build also enforces:

- Dataset boundaries
- Deterministic topology
- Enrichment validity
- Biological dependencies
- Current content partitions
- Initial bundle budget
- Per-partition bundle limits

## Definition of published

An enriched ecoregion is ready when:

- Its structural summary and factual sections are sourced.
- Its lifecycle state is explicitly published.
- Coverage depth is stated for each represented biological domain.
- Every visible taxon has one canonical profile.
- Every occurrence references a published canonical taxon.
- Ownership and source validation pass.
- Quantitative values are evidence-backed—or remain absent.
- Lazy partitions are regenerated.
- Browser navigation and canonical profiles work.
- Unit, browser, production, and bundle checks pass.

The repository copy of these rules is available in [EDITORIAL.md](G:/code/beerchart/src/app/datasets/ecoregions/EDITORIAL.md).
