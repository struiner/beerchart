# Codex implementation brief: Beer Taxonomy Atlas

## Goal

Implement a production-ready Angular application that turns the existing beer-style hierarchy into a full-viewport, map-like taxonomy. The application must feel related to the earlier timeline explorer: a strong central root, deterministic orthogonal branches, collision-free packing, progressive disclosure, and fluid movement from overview to detail.

The normal application shell must contain only:

1. A minimal top toolbar.
2. A canvas-like taxonomy viewport filling all remaining space.

Do not add permanent sidebars, dashboards, cards, explanatory panels, footers, or decorative sections.

## Before editing

1. Read the repository instructions, `AGENTS.md`, `package.json`, existing architecture, tests, styling system, and build commands.
2. Use the Angular version and conventions already pinned by the repository. Do not perform unrelated dependency upgrades or rewrites.
3. If this is a new project, create a standalone Angular application with strict TypeScript, standalone components, signals, `ChangeDetectionStrategy.OnPush`, and tests.
4. Treat the supplied beer-taxonomy HTML or JSON as the authoritative seed data. Preserve all 168 published entries and the Ale, Lager, and Hybrid/Mixed families. Do not scrape, rename, infer, or invent taxonomy entries when source data is missing.
5. Write a short implementation plan before coding, then implement and verify the complete vertical slice.

## Application shell

Build a full-viewport shell with a compact toolbar above the taxonomy viewport.

### Toolbar

Arrange the toolbar in three zones while keeping the center controls geometrically centered in the viewport:

- **Left:** a small repository-native SVG logo and the title `Beer Taxonomy Atlas`.
- **Center:** icon-only viewport controls for zoom out, fit entire taxonomy, focus the root, zoom in, toggle the minimap, and toggle metadata icons.
- **Right:** one icon-only menu toggle opening the navigation tree described below.

Every icon-only control must have:

- An accessible name through `aria-label`. Use `alt` only if an actual `<img>` is used.
- A visible hover and keyboard-focus tooltip.
- A clear focus state.
- `aria-pressed` when it represents a toggle.
- A disabled state when its action is unavailable.

Reuse the repository's icon system. If none exists, use one consistent SVG icon registry or `lucide-angular`; do not mix icon families or use emoji.

### Dropdown navigation tree

The right-hand menu must contain exactly this hierarchy and ordering:

```text
Submit
Account
  User
  Data
  Submissions
Settings
  Account
  Viewport
  Data
Version
About
```

Implement this as an accessible disclosure navigation tree inside a dropdown overlay. Support pointer interaction and complete keyboard traversal with Arrow keys, Home, End, Enter, Space, and Escape. Restore focus to the menu toggle when the menu closes. Keep expanded/collapsed group state while the app remains open.

## Taxonomy viewport

Use SVG as the semantic scene renderer, with Angular/DOM overlays for menus, tooltips, popovers, and dialogs. Do not use an HTML `<canvas>` for text and nodes unless profiling demonstrates a genuine need; the 168-entry seed tree should remain crisp, inspectable, keyboard-addressable, and testable in SVG.

### Visual structure

- Place a strong `Beer` root at the visual center.
- Give Ale and Lager the two dominant primary trunks.
- Retain Hybrid/Mixed as a visibly separate third published family rather than forcing its entries into Ale or Lager.
- Continue through origin or category groups to individual style leaves.
- Use orthogonal routes and compact branch clusters that interlock in available whitespace without touching unrelated branches.
- No node may overlap another node. No connector may cross through a node. Every visible node must have exactly one traversable parent path leading to the root.
- Keep family color assignments stable. Color may reinforce meaning, but must never be the only carrier of information.

Create a deterministic, framework-neutral TypeScript layout engine. It should accept normalized taxonomy data and return immutable world-space nodes, bounds, ports, connector paths, and overall scene bounds. Keep layout calculation independent from Angular rendering and camera state.

### Camera and interaction

Implement one camera model containing translation, scale, viewport bounds, and world bounds.

- Pointer drag pans the scene using pointer capture.
- Trackpad or mouse-wheel scrolling pans the scene by default.
- Pinch and `Ctrl`/`Cmd` + wheel zoom around the pointer position.
- The Viewport settings may swap ordinary wheel behavior between pan and zoom.
- `+` and `-` zoom; Arrow keys pan; `0` fits the taxonomy; `Home` focuses the root.
- Double-clicking or pressing Enter on a node smoothly centers it.
- Selecting a node highlights its complete route to the root and updates a small anchored detail popover. Do not introduce a permanent inspector.
- Preserve the user's focal world coordinate during resize.
- Respect configured minimum and maximum zoom.
- Honor `prefers-reduced-motion` and the application's animation setting.

Use level of detail rather than shrinking everything into illegibility:

- **Overview:** root, primary families, major groups, and aggregate counts.
- **Normal:** individual style nodes and names.
- **Detail:** metadata icons, complete paths, sourced values, and longer descriptions.

The minimap must show scene bounds, current viewport bounds, root position, and primary family regions. Clicking or dragging in it repositions the camera.

Scope absolute positioning and pointer handlers to the taxonomy scene only. The scene must never intercept input intended for the toolbar, dropdown, dialogs, or other overlays.

## Taxonomy and metadata model

Do not hard-code the taxonomy inside a component. Store it in a versioned JSON asset and validate it at runtime before committing it to application state.

Use stable IDs and an explicit model similar to:

```ts
type TaxonomyNodeType =
  | 'root'
  | 'beer'
  | 'ale'
  | 'lager'
  | 'category'
  | 'fermentation-method'
  | 'style';

interface TaxonomyNode {
  id: string;
  parentId: string | null;
  title: string;
  type: TaxonomyNodeType | string;
  description?: string;
  order: number;
  metadata?: BeerMetadata;
  sources?: SourceReference[];
}

interface BeerMetadata {
  color?: {
    srmMin?: number;
    srmMax?: number;
    ebcMin?: number;
    ebcMax?: number;
    descriptor?: string;
    sourceId?: string;
  };
  glassware?: Array<{
    kind: GlasswareKind | string;
    sourceId: string;
  }>;
  fermentation?: Array<{
    method: 'ale' | 'lager' | 'mixed' | 'spontaneous' | 'variable' | string;
    sourceId?: string;
  }>;
  ingredients?: Array<{
    kind: IngredientKind | string;
    role?: 'base' | 'defining' | 'optional';
    sourceId?: string;
  }>;
  conditioningAge?: {
    minimumDays?: number;
    maximumDays?: number;
    method?: string;
    sourceId?: string;
  };
}
```

Treat `conditioningAge` as maturation or conditioning time. Keep the historical origin or age of a style in separate provenance fields so the two meanings of “age” cannot be confused.

## Metadata icon system

Create a single semantic icon registry for these five metadata groups:

1. **Beer color:** a beer or droplet silhouette whose fill represents the supplied SRM/EBC range. The tooltip and accessible label must include the numeric range and descriptor. Never rely on color alone.
2. **Preferred glassware:** recognizable icons for supported sourced recommendations such as nonic pint, shaker pint, tulip, goblet/chalice, snifter, weizen glass, pilsner glass, mug/stein, stange, and tasting glass.
3. **Fermentation method:** distinct symbols for ale, lager, mixed culture, spontaneous fermentation, and variable or unknown fermentation.
4. **Ingredients:** semantic icons for documented ingredients such as barley, wheat, rye, oats, rice, corn, hops, fruit, herbs/spices, honey, coffee, cocoa, smoke/wood, yeast, and bacteria.
5. **Age:** a clock, cellar, or cask symbol representing sourced conditioning duration.

Rules for icon rendering:

- Render metadata icons on style nodes only at Detail level, or when metadata icons are explicitly forced on in Viewport settings.
- Keep the icon ordering fixed: color, glassware, fermentation, ingredients, age.
- One icon may summarize a metadata group; expose multiple values in its tooltip or detail popover. If several ingredient icons are shown, cap the visible row and expose the remainder as `+N` with a complete accessible description.
- Every icon must have a text equivalent and source-aware tooltip.
- Missing data means unknown, never none. Do not create values from style names.
- A preferred glass is a sourced serving recommendation, not an objective universal fact. Store and show its source rather than presenting it as uniquely correct.
- Conflicting sourced values may coexist. Show ranges or multiple values rather than silently choosing one.
- Use reusable inline SVG components. Do not ship raster icons, emoji, or one-off SVG markup duplicated across nodes.

## Menu actions and dialogs

Route every menu action through one coherent dialog/overlay service. Dialogs must trap focus, close with Escape, restore the invoking element's focus, fit small screens, and keep long content internally scrollable.

### Submit

Open a form dialog for proposing a new entry or category with:

- `Title`: required text field.
- `Type`: editable combobox accepting free text and offering suggestions including Beer, Ale, Lager, Category, Fermentation Method, and Style.
- `Description`: multiline text.
- `Placement within taxonomy`: searchable tree picker selecting the proposed parent, followed by a read-only full path preview.

Validate required values, prevent selection of invalid placement targets, preserve an unsent draft locally, prevent double submission, and show submitting, success, validation-error, API-error, and offline states. On success, clear the matching draft and add the returned submission to the user's submission list.

### Account → User

Show currently known user information returned by the account API. Clearly mark missing values as unavailable. Never invent profile data.

### Account → Data

Show a read-only data inspector for every local-storage key and script-readable cookie belonging to this application. Group entries by storage mechanism, show key, schema version, size, and a safely formatted value preview. Do not expose unrelated origin data, authentication tokens, secrets, or `HttpOnly` cookies.

### Account → Submissions

Fetch and show the user's submissions with title, proposed type, requested placement, submitted and updated timestamps, and API-provided status. Support loading, empty, retry, error, and paginated states. Treat the API response as authoritative for status.

### Settings → Account

Show editable account preferences supported by the account API. Validate locally, save through the typed API gateway, and reconcile the returned server representation.

### Settings → Viewport

Provide settings for:

- Visibility: labels, descriptions, aggregate counts, connectors, minimap, metadata icons, and the Hybrid/Mixed family.
- Size: interface scale, node scale, branch spacing, and preferred minimum/maximum zoom.
- Alignment: node-label alignment and supported diagram orientation while retaining a root-centered default.
- Interaction: wheel pans or zooms, drag-to-pan, pinch zoom, double-click focus, animations, and reduced motion.

Apply safe settings live, persist them, and include `Restore viewport defaults`.

### Settings → Data

Show all application settings currently known from this application's local storage and readable cookies. Provide schema versions plus explicit actions to export settings as JSON, import validated settings, reset settings, and clear all application-owned local data. Destructive actions require confirmation and must list the exact namespaces they affect.

### Version

Show the semantic application version derived from `package.json`, not a duplicated hard-coded value. Include prerelease/build metadata when present, the settings/data schema version, build commit when supplied by CI, and build timestamp when supplied by the build. Generate a small typed version file or injection token during the build so the browser bundle does not import the entire `package.json`.

### About

Show this exact purpose statement:

> Because the internet is riddled with poor diagrams, and we can do better as a species.

## State, persistence, and API boundary

Use typed stores with Angular signals for taxonomy, camera, viewport settings, overlays, current user, and submissions. Use RxJS where cancellation or HTTP streams are useful; do not duplicate the same state across signals and observables.

Namespace and version all browser persistence, for example:

```text
beer-taxonomy.settings.v1
beer-taxonomy.camera.v1
beer-taxonomy.submission-draft.v1
```

Implement explicit migrations and safe fallbacks for malformed or older persisted data. Never parse browser data directly inside components.

Create a typed API gateway with operations equivalent to:

```ts
loadTaxonomy(): Observable<TaxonomyDocument>;
getCurrentUser(): Observable<AppUser>;
updateAccount(input: AccountUpdate): Observable<AppUser>;
createSubmission(input: SubmissionDraft): Observable<Submission>;
listMySubmissions(query?: SubmissionQuery): Observable<SubmissionPage>;
```

Do not invent production endpoints. Read documented repository configuration and existing contracts. If no backend exists, provide a clearly isolated in-memory or local development adapter plus HTTP mocks for tests, while keeping the production gateway configurable. Suggested submission states are `draft`, `pending`, `needs-information`, `accepted`, and `rejected`, but use server-provided values without losing unknown future statuses.

## Suggested Angular boundaries

Keep components small and separate rendering, layout, interaction, storage, and transport concerns. A suitable structure is:

```text
app-shell
  app-toolbar
  taxonomy-viewport
    taxonomy-svg-scene
    taxonomy-minimap
    taxonomy-tooltip
    taxonomy-node-popover
  navigation-tree-menu
  dialogs/
core/
  taxonomy/
  layout/
  camera/
  icons/
  storage/
  api/
  version/
```

Use Angular CDK Overlay/Dialog/A11y at the repository's Angular major version when no equivalent infrastructure already exists. Avoid introducing a heavy visual component library solely for these surfaces.

## Accessibility and responsive behavior

- Make every taxonomy node keyboard-focusable in a logical depth-first order.
- Expose node title, type, complete parent path, and available metadata to assistive technology.
- Provide non-gesture equivalents for pan, zoom, fit, focus, selection, and navigation.
- Maintain WCAG-compliant contrast and never encode family, state, or metadata using color alone.
- Support 320 px wide portrait screens through large desktop displays.
- Keep the canvas full-width on small screens; dialogs may become bottom sheets or full-screen surfaces.
- Use generous invisible pointer hit areas without changing visible geometry.
- Respect reduced motion, high zoom, browser text scaling, and touch input.

## Verification

Add or update tests covering:

### Unit tests

- Taxonomy validation, stable IDs, parent integrity, cycle detection, and complete root reachability.
- Deterministic layout and scene bounds.
- No node-node overlaps and no connector-node intersections in the seed dataset.
- Camera world/screen transforms, pointer-centered zoom, fit, focus, resize preservation, and zoom limits.
- Icon registry completeness, accessible labels, SRM/EBC mapping, unknown values, and multiple metadata values.
- Settings serialization, migrations, import validation, namespaced clearing, and submission-draft recovery.
- Semantic version parsing and generated version consistency.

### Component and end-to-end tests

- The seed taxonomy renders all 168 entries in the correct family hierarchy.
- Pan, wheel/trackpad scroll, pinch or simulated zoom, keyboard navigation, fit, root focus, minimap navigation, and node-route highlighting work.
- Toolbar center alignment remains correct at desktop and mobile widths.
- Every navigation-tree item opens the correct surface and the menu is fully keyboard traversable.
- The submission form accepts a custom type, offers the required suggestions, selects a taxonomy placement, prevents invalid submissions, preserves drafts, and reconciles API results.
- Submission statuses are refreshed from mocked API responses.
- Data views expose only application-owned namespaces and redact sensitive values.
- Version output matches the package version.
- The About dialog contains the exact requested sentence.
- Dialog focus trapping, Escape close, focus restoration, reduced motion, and accessible names work.

Run the repository's formatter, linter, unit tests, production build, and browser tests. Inspect the finished application in a real browser at representative desktop, tablet, and phone sizes. Fix visual overlap, clipped labels, focus loss, console errors, and interaction regressions before stopping.

## Done when

The task is complete only when:

- The normal UI contains only the minimal toolbar and taxonomy viewport.
- The complete source taxonomy is rendered as a collision-free, pannable, scrollable, zoomable, root-connected diagram.
- Metadata icons for beer color, sourced glassware recommendations, fermentation, ingredients, and conditioning age are integrated with accessible text and level-of-detail behavior.
- Every required menu item and dialog works with real state boundaries and typed API contracts.
- Local persistence is namespaced, versioned, inspectable, exportable, importable, and safely clearable.
- All relevant automated checks pass and the production build succeeds.
- `README.md` documents the architecture, controls, data schema, icon registry, source-data expectations, API configuration, storage namespaces, testing commands, and remaining backend integration points.
- Codex reviews the final diff for regressions, reports the files changed and commands run, and identifies any genuine external backend dependency without claiming it was implemented.
