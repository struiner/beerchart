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
