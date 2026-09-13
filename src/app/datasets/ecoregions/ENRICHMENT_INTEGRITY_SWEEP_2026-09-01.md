# Enrichment integrity sweep — 2026-09-01

## Scope

This repository-wide sweep covered all 208 structural enrichment records and gave evidence-level scrutiny to all 150 records currently marked `reviewed` or `published`.

The sweep checked:

- Canonical topology membership and deterministic generated topology
- One-to-one correspondence between enrichment records and coverage-manifest entries
- Lifecycle counts by hierarchy level and realm membership
- Registered source existence, intended URL, and live reachability
- One Earth territorial scope where an ecoregion page exposes `States`
- Characteristic-species support in each target record's declared source corpus
- Numeric claim traceability in each record's declared source corpus
- Biological-record dependencies
- Lazy-content partition currency

Draft records received structural validation but were not treated as editorially reviewed.

## Corrections

- Corrected the canonical One Earth URL for NT10 by adding its required `-nt10` suffix.
- Restored `realm:oceania` to `published`. Realm-profile publication is independent of descendant enrichment completeness, consistently with the other thirteen realm records.
- Removed Kemp's ridley sea turtle from the Rapa Nui / OC1 records. Its association was unsupported and biologically inconsistent with the cited Pacific ecoregion.
- Removed the now-unused erroneous lightweight species record.
- Omitted the OC1 and ecoregion 628 characteristic-species sections because only two supported taxa remained.
- Added the relevant child ecoregion sources to OC3 and OC6 so their retained bioregion-level characteristic taxa have target-declared evidence.
- Added a regression assertion requiring all fourteen canonical realm profiles to remain explicitly published.

## Verified status

| Level     | Total | Unstarted | Draft | Reviewed | Published |
| --------- | ----: | --------: | ----: | -------: | --------: |
| Realm     |    14 |         0 |     0 |        0 |        14 |
| Subrealm  |    53 |        40 |     6 |        6 |         1 |
| Bioregion |   185 |       154 |    12 |       18 |         1 |
| Ecoregion |   844 |       694 |    40 |      107 |         3 |

Realm rows in the coverage command remain mixed-level membership aggregates and must not be reported as ecoregion counts.

## Evidence results

- 208 enrichment records have exactly one lifecycle entry each.
- 150 reviewed-or-published records reference 150 reachable registered sources.
- No retained characteristic-species claim is unsupported by its target's declared source corpus.
- No reviewed-or-published numeric claim is absent from its declared source corpus.
- No draft record was promoted during this sweep.
- Artwork and media were outside scope.

---

## Incremental draft follow-up — 2026-09-12

The historical verified-status table above remains the result of the 2026-09-01 sweep. A later working-tree batch adds 321 structural records, all at `draft`: 40 subrealms, 57 bioregions, and 224 ecoregions. Its exact target manifest, checks, source policy, unresolved precipitation-provenance finding, and deferred living-composition scope are recorded in `INCREMENTAL_DRAFT_REVIEW_2026-08-31.md` under “Incremental draft audit — 2026-09-12.”

Current structural lifecycle totals after adding that draft batch are:

| Level     | Total | Unstarted | Draft | Reviewed | Published |
| --------- | ----: | --------: | ----: | -------: | --------: |
| Realm     |    14 |         0 |     0 |        0 |        14 |
| Subrealm  |    53 |         0 |    46 |        6 |         1 |
| Bioregion |   185 |         0 |   166 |       18 |         1 |
| Ecoregion |   844 |         0 |   734 |      107 |         3 |

These are hierarchy-level totals, not realm-row aggregates. No draft record was promoted by this follow-up, and the earlier evidence conclusions must not be inferred to cover the newly added records.

After the initial follow-up snapshot, `ecoregion:407` and `ecoregion:408` received complete target-level source review and were promoted to `reviewed`. The corrected current ecoregion counts are 732 draft, 109 reviewed, and 3 published; the other hierarchy-level counts in the table are unchanged. Details and the exact promotion list are recorded in the incremental draft review.

On 2026-09-13, the NA3 batch completed with source review and promotion of `ecoregion:411` and `bioregion:na3`. One unsupported subspecies-level characteristic record was removed from ecoregion 411. Current affected totals are 165 draft and 19 reviewed bioregions, and 731 draft and 110 reviewed ecoregions; published counts are unchanged. The incremental draft review records the evidence and country-scope fallback.

The subsequent NA5 batch reviewed and promoted `ecoregion:360`, `ecoregion:420`, and `bioregion:na5`. One unsupported species-level record and one unsupported ecological-process claim were removed or rewritten. Current totals are 164 draft and 20 reviewed bioregions, and 729 draft and 112 reviewed ecoregions; published counts are unchanged.
