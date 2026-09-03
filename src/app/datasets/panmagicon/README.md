# Panmagicon dataset

The Panmagicon is a first-class taxonomy module generated from the five canonical Word documents
in `docs/panmagicon`. It contains eight Aspects, eight Schools, all 64 Aspect–School Streams, four
authored composite domains, twelve collections, and 600 spells.

## Regeneration

Run `npm run panmagicon:generate` after changing a canonical document. The importer reads DOCX
OOXML with Python's standard library, normalizes the authored records, namespaces collection-local
spell IDs, recalculates the eight-part Tension Load, and writes deterministic generated files.

Run `npm run panmagicon:check` to verify that generated output is current. Run
`npm run taxonomy:validate -- --module src/app/datasets/panmagicon --strict` for the generic SDK
contract validation.

The browser never parses DOCX. The compact topology manifest is loaded only after selecting the
dataset. Full prose is partitioned one 50-spell collection per lazy chunk and hydrated when a folio
in that collection opens.

## Canon rules

- A Stream is one Aspect–School intersection.
- Shelves describe progression and are not character levels.
- Load is the sum of Threads, Turns, Knots, Span, Hold, Fineness, Agency, and Contradiction; it is
  not mana cost.
- Composite order and ratio carry meaning. The Precipice retains Constellation, Threshold, and
  Abyss expressions.
- Missing collections remain `defined` or `planned`; generation must never invent canon.
- Source prose remains in the lazy collection partition even when it cannot yet be normalized.

## Current coverage

- 64 Streams: 8 authored, 56 defined without a collection
- 4 authored composites out of 28 possible two-Aspect pairs
- 12 authored collections
- 600 authored spells out of the planned 4,600

Machine-readable coverage is generated at `generated/coverage.generated.json`.
