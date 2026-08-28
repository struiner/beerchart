# Projection and facets

Dimensions determine ring separation. A dimension declares single or multiple cardinality, how
multiple values project, and how missing values behave. `duplicate-instance` may render one canonical
entry on several paths; canonical identity remains unchanged.

Facets filter entries independently of ring order. Categorical facets return IDs and labels. Range
facets return numeric minimum and maximum values. Default ring IDs must be unique, allowed, and
bounded by the configured projection limits.

Use adaptive radii for a first dataset. Fixed radii are appropriate only when the dataset owns a
deliberately tuned map and accepts overlap warnings rather than silent expansion.
