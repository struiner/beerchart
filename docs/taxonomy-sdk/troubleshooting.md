# Troubleshooting

- **Validator cannot find the module:** export the module as `taxonomy` from the supplied directory's `index.ts`.
- **Unknown reference:** fix the reported parent, entry, dimension, or search target ID.
- **Missing visual token:** declare the branch or fact token in `theme.visualTokens`.
- **Projection warning:** inspect duplicate-instance growth or increase an explicit projection limit.
- **Empty map:** confirm dimensions return values and filters include entries.
- **Profile is empty:** return at least one non-empty generic profile section.
- **Deep import guard failure:** import authoring concepts from `taxonomy/public-api`; tests use `taxonomy/testing/public-api`.

Use `npm run taxonomy:validate -- --module <path> --strict`, then run the contract test and Angular
suite. Engine implementation details are documented for contributors separately and are not required
for dataset authoring.
