# Incremental enrichment review — 2026-08-31

## Scope

This review covers only the 29 records added in the current draft batch:

- 3 subrealms: New Zealand; Kazakh Steppes & Hemiboreal Forests; Oceanic Islands.
- 6 bioregions: AU1, AU2, AU16, PA34, PA35, and OC1.
- 20 ecoregions: 142, 147, 167, 169–175, 180, 190, 194, 196, 628, 682, 687, and 731–733.

Artwork and dashboard media were deliberately excluded from this review. They can be attached later without changing the editorial status of the sourced text.

## Corrections made

- Updated the AU1, AU2, and AU16 One Earth links to their canonical code-suffixed URLs.
- Treated One Earth `States` values as canonical: Norfolk Island Subtropical Forests uses Australia, and Antipodes Subantarctic Islands Tundra uses New Zealand and Australia.
- Removed characteristic-species lists when fewer than three listed taxa could be traced in the registered source material.
- Pruned partially supported lists to their source-verifiable taxa for AU1, PA34, Kazakh Steppe, and Kazakh Upland Steppe.
- Removed AU16's numeric climate profile because its 2,500 mm boundary was not traceable in the registered sources.
- Retained qualitative climate descriptions and all fully supported species lists.

## Result

All 29 records pass the structural enrichment validator and have been promoted from `draft` to `reviewed`. Review means that the current claims meet the repository's evidence rules; it does not claim exhaustive ecological coverage or publication readiness.

---

## Incremental draft audit — 2026-09-12

### Scope

This follow-up records the 321 structural targets added to the current working-tree draft. It does not alter or extend the reviewed status of the 2026-08-31 batch.

- 40 subrealms: `subrealm:alaska`, `subrealm:altai-sayan-mountains`, `subrealm:amazonia`, `subrealm:american-west`, `subrealm:andes-pacific-coast`, `subrealm:australasian-islands-eastern-indonesia`, `subrealm:australia`, `subrealm:black-sea-forests-steppe`, `subrealm:brazil-cerrado-atlantic-coast`, `subrealm:canadian-boreal-forests`, `subrealm:caspian-sea-central-asian-deserts`, `subrealm:central-east-asian-forests`, `subrealm:east-asian-deserts`, `subrealm:equatorial-afrotropics`, `subrealm:european-mountain-forests`, `subrealm:great-plains`, `subrealm:greater-arabian-peninsula`, `subrealm:greater-european-mixed-forests`, `subrealm:horn-of-africa`, `subrealm:madagascar-east-african-coast`, `subrealm:malaysia-western-indonesia`, `subrealm:mediterranean`, `subrealm:mexican-drylands`, `subrealm:mongolian-grasslands`, `subrealm:north-africa`, `subrealm:north-pacific-coast`, `subrealm:northeast-american-forests`, `subrealm:northeast-asian-forests`, `subrealm:persian-deserts-forests`, `subrealm:scandinavia-west-boreal-forests`, `subrealm:sea-of-okhotsk-bering-tundra-taiga`, `subrealm:siberia-east-boreal-forests`, `subrealm:south-american-grasslands`, `subrealm:southeast-asian-forests`, `subrealm:southeast-us-savannas-forests`, `subrealm:southern-afrotropics`, `subrealm:sub-equatorial-afrotropics`, `subrealm:tibetan-plateau`, `subrealm:tien-shan-mountains`, and `subrealm:upper-south-america`.
- 57 bioregions: `bioregion:na3`–`bioregion:na9`; `bioregion:an1`; `bioregion:an3`; `bioregion:pa2`, `bioregion:pa3`, `bioregion:pa5`–`bioregion:pa8`, `bioregion:pa10`–`bioregion:pa33`, `bioregion:pa36`–`bioregion:pa46`, and `bioregion:pa48`–`bioregion:pa53`; and `bioregion:nt24`.
- 224 ecoregions: `ecoregion:117`, `ecoregion:119`–`ecoregion:125`, `ecoregion:128`, `ecoregion:132`–`ecoregion:134`; `ecoregion:345`, `ecoregion:360`, `ecoregion:369`–`ecoregion:383`, `ecoregion:404`–`ecoregion:411`, `ecoregion:416`, `ecoregion:419`, `ecoregion:420`; and `ecoregion:642`–`ecoregion:650`, `ecoregion:652`–`ecoregion:662`, `ecoregion:664`, `ecoregion:665`, `ecoregion:667`–`ecoregion:669`, `ecoregion:673`–`ecoregion:681`, `ecoregion:684`–`ecoregion:686`, `ecoregion:688`–`ecoregion:690`, `ecoregion:692`–`ecoregion:697`, `ecoregion:700`–`ecoregion:728`, `ecoregion:730`, `ecoregion:734`–`ecoregion:773`, and `ecoregion:779`–`ecoregion:846`.

The ranges above are inclusive except for IDs explicitly omitted between listed ranges. The coverage manifest remains the machine-readable authority for membership.

### Review basis and canonical sources

- One Earth target pages are the canonical source for ecoregion `States`, ecological descriptions, characteristic-species evidence, and directly reported numeric values.
- One Earth bioregion pages are the canonical source for bioregion membership and bioregion-level descriptions.
- One Earth realm pages provide the available subrealm sections; child bioregion pages may supplement those sections but do not make child facts automatically applicable to the parent.
- No conflicting field was resolved during this pass. Any later conflict must be documented target by target before promotion.

### Checks completed

- Canonical topology check: 844 deterministic ecoregion records verified.
- Structural enrichment validation: 1,096 sourced records verified.
- Lazy-content check: all 14 generated partitions current.
- Unit tests: 82 tests in 11 files passed.
- A source-level spot check was completed for `ecoregion:408` against its registered One Earth account.

### Finding requiring correction

- `ecoregion:408` records annual precipitation as the exact range 140–280 mm with derivation `source-value`. The source directly reports an average of about 140 mm and says the western end receives about twice that amount. The 280 mm endpoint is therefore calculated, not a directly reported source value. Change the derivation to `calculated`, or remove the constructed range if the field cannot represent the source faithfully.

### Deferred work and lifecycle result

- All 321 targets remain `draft`. Automated validation is not editorial evidence review.
- Source-by-source verification of every country or territory, characteristic species, and numeric claim remains outstanding for all targets other than the limited `ecoregion:408` spot check. That spot check found an unresolved issue and therefore does not justify promotion.
- Artwork and dashboard media remain outside scope.
- Living-composition work is deliberately deferred. Structural `characteristicSpeciesIds` do not establish canonical taxa, target-specific occurrences, domain coverage, lifecycle entries, ownership, or living-composition hierarchy edges.
- No biological record was reviewed or promoted, and no quantitative biological observation was added.

### Mitigation and promotions — 2026-09-12

- Corrected `ecoregion:408` annual precipitation provenance from `source-value` to `calculated`. The One Earth account directly gives an average near 140 mm and describes the wetter western end as receiving about twice that amount; the stored 280 mm endpoint is the transparent multiplication of that reported value.
- Completed target-level review of `ecoregion:407` (Arctic Coastal Tundra). Its canonical ID and NA3 membership, United States scope, landscape and climate numbers, conservation claims, and all eight characteristic-species entries were matched to the registered One Earth ecoregion account.
- Completed target-level review of `ecoregion:408` (Arctic Foothills Tundra). Its canonical ID and NA3 membership, Canada and United States scope, landscape and climate claims, conservation claims, and all eight characteristic-species entries were matched to the registered One Earth ecoregion account.
- Promoted exactly `ecoregion:407` and `ecoregion:408` from `draft` to `reviewed`. No other lifecycle entry changed.
- The remaining current-batch scope is 319 drafts: 40 subrealms, 57 bioregions, and 222 ecoregions. Living-composition work remains deferred and these structural promotions do not establish biological occurrences or domain coverage.

### NA3 batch review — 2026-09-13

This batch covers exactly `ecoregion:411` and `bioregion:na3`. Together with the previously reviewed `ecoregion:407` and `ecoregion:408`, it completes structural source review of NA3 and all three canonical children.

- Reviewed `ecoregion:411` against the registered One Earth Brooks-British Range Tundra account. The source confirms ID 411, NA3 membership, Canada and United States scope, the 800–2,400 m elevation range, the 280–350 mm precipitation range, conservation figures, vegetation, ecological processes, and seven retained characteristic taxa.
- Removed `species:barren-ground-caribou` from `ecoregion:411`. The target source names three caribou herds but does not identify the Greenlandic barren-ground subspecies represented by that species ID. The generic herd reference remains in prose without asserting unsupported subspecies precision.
- Reviewed `bioregion:na3` independently against its registered One Earth bioregion account and the three target-specific child accounts. The bioregion page is canonical for ID, membership, area, protection values, and component ecoregions.
- The NA3 page has no `States` field. The documented geography fallback is the explicit `States` fields of its complete canonical child set: `ecoregion:407` supplies the United States, while `ecoregion:408` and `ecoregion:411` supply Canada and the United States. This supports `countryIds: ['CA', 'US']` without substituting sovereign states for separately registered territories.
- Parent-level ecological synthesis uses the three declared child sources; every retained NA3 characteristic taxon occurs in at least one of those source accounts.
- Promoted exactly `ecoregion:411` and `bioregion:na3` from `draft` to `reviewed`. No biological lifecycle entry changed, and no living composition is implied.
- The remaining 2026-09-12 batch is 317 drafts: 40 subrealms, 56 bioregions, and 221 ecoregions.

### NA5 batch review — 2026-09-13

This batch covers exactly `ecoregion:360`, `ecoregion:420`, and their complete parent `bioregion:na5`.

- Reviewed `ecoregion:360` against the registered One Earth Northern Pacific Alaskan Coastal Forests account. The source confirms ID 360, NA5 membership, United States scope, the 762–5,588 mm precipitation range, conservation figures, vegetation, disturbances, and four retained characteristic taxa.
- Removed `species:sockeye-salmon` from `ecoregion:360`. The target source supports anadromous salmon and steelhead runs but does not identify sockeye salmon specifically.
- Replaced the unsupported `salmon-driven nutrient subsidies into forest ecosystems` process claim with the directly supported `anadromous salmon and steelhead runs`.
- Reviewed `ecoregion:420` against the registered One Earth Pacific Coastal Mountain Icefields and Tundra account. The source confirms ID 420, NA5 membership, Canada and United States scope, elevation and precipitation ranges, conservation figures, ecological processes, and all eight characteristic taxa.
- Reviewed `bioregion:na5` independently against its registered One Earth account and both complete child accounts. The parent page is canonical for ID, membership, area, protection values, and child composition.
- The NA5 page has no `States` field. Its documented geography fallback is the explicit child scope: `ecoregion:360` supplies the United States and `ecoregion:420` supplies Canada and the United States, supporting `countryIds: ['CA', 'US']`.
- Promoted exactly `ecoregion:360`, `ecoregion:420`, and `bioregion:na5` from `draft` to `reviewed`. No biological lifecycle entry changed and no living composition is implied.
- The remaining 2026-09-12 batch is 314 drafts: 40 subrealms, 55 bioregions, and 219 ecoregions.
