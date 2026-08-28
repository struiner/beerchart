# Contracts

Use `defineTaxonomy` from `taxonomy/public-api` to retain literal IDs while TypeScript checks the
complete module. Metadata identifies the dataset and its versions. Vocabulary supplies every
visible entity noun. Content owns domain prose. Records contain authored groups, canonical entries,
and optional related entities.

IDs must be stable and unique. Every parent and related-entity reference must resolve. Facts remain
dataset-owned; generic components see them only after profile or presentation functions convert them
to view models. The standard dataset barrel must export the completed module as `taxonomy`.

Run the validator after changing IDs or references. Do not import components, stores, validators,
layout internals, or another dataset.
