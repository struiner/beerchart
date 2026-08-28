# Presentation and themes

Presentation converts entries and related entities into tiles and declares layout and theme data.
Themes contain validated colors, semantic visual tokens, typography references, surfaces, geometry,
and constrained texture descriptors. They cannot inject CSS or selectors.

Branch color values are token IDs, not CSS class names. Every configured token must exist in the
theme. Facts use presentation variants such as `stamp`, `measure`, or `highlight`; components never
infer presentation from fact IDs.

Sprite and image URLs should resolve beneath the owning dataset asset directory. Keep the neutral
template theme until the module validates and renders correctly.
