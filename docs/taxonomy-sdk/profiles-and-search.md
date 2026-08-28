# Profiles and search

`entrySections` converts dataset facts and related records into generic facts, entity lists, related
entities, sources, or Markdown sections. Empty sections are omitted. Markdown is sanitized and must
not contain executable HTML.

Search returns documents with stable document IDs and canonical target IDs. Targets must resolve to
an entry, group, related entity, or supported facet value. Include aliases and useful domain terms,
but keep displayed terminology in vocabulary and dataset content.

Group and projected dimension profiles are composed by the generic indexes. Dataset code should not
reimplement descendant traversal.
