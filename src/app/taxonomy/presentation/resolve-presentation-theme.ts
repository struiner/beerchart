import { TaxonomyThemePreset, TaxonomyThemeTokens } from '../contracts/taxonomy';

export const DEFAULT_TAXONOMY_THEME: TaxonomyThemePreset = {
  id: 'generic-taxonomy',
  texture: 'none',
  tokens: {
    ink: '#d7dcd8',
    deepInk: '#080b09',
    olive: '#111512',
    oliveLight: '#424b46',
    paper: '#171c19',
    paperLight: '#f4f0e6',
    paperDark: '#647069',
    brass: '#d49b3f',
    amber: '#d56a42',
    yellow: '#dbad3f',
    teal: '#49ae96',
    oxblood: '#d06d91',
    green: '#67a669',
    blue: '#668fd0',
  },
  visualTokens: {
    'route-0': '#d56a42',
    'route-1': '#dbad3f',
    'route-2': '#49ae96',
    'route-3': '#668fd0',
    'route-4': '#d06d91',
    'route-5': '#d06d91',
    'route-6': '#67a669',
    'route-7': '#424b46',
  },
  typography: {
    display: { family: 'Georgia', fallbacks: ['serif'], weight: 700 },
    interface: { family: 'Arial Narrow', fallbacks: ['Arial', 'sans-serif'], weight: 700 },
    annotation: { family: 'Arial', fallbacks: ['sans-serif'], weight: 600 },
  },
  surfaces: {
    application: { background: 'paper', foreground: 'ink', border: 'deepInk' },
    toolbar: { background: 'olive', foreground: 'paperLight', border: 'brass' },
    viewport: { background: 'paper', foreground: 'ink', border: 'paperDark' },
    panel: { background: 'paperLight', foreground: 'ink', border: 'deepInk' },
  },
  geometry: { controlRadius: 0, panelRadius: 0, tileRadius: 0, borderWidth: 1, focusWidth: 3 },
  textures: { none: { kind: 'none' } },
};

const safeId = (value: string) => /^[a-z][a-z0-9-]*$/.test(value);
const safeColor = (value: string) => /^#[0-9a-f]{6}([0-9a-f]{2})?$/i.test(value);

export function resolvePresentationTheme(theme?: TaxonomyThemePreset): TaxonomyThemePreset {
  if (!theme) return DEFAULT_TAXONOMY_THEME;
  const tokens = Object.fromEntries(
    Object.entries(DEFAULT_TAXONOMY_THEME.tokens).map(([key, fallback]) => {
      const candidate = theme.tokens[key as keyof TaxonomyThemeTokens];
      return [key, safeColor(candidate) ? candidate : fallback];
    }),
  ) as unknown as TaxonomyThemeTokens;
  return {
    id: safeId(theme.id) ? theme.id : DEFAULT_TAXONOMY_THEME.id,
    texture: theme.texture === 'paper-ledger' ? 'paper-ledger' : 'none',
    tokens,
    visualTokens: Object.fromEntries(
      Object.entries(theme.visualTokens ?? {}).filter(
        ([id, color]) => safeId(id) && safeColor(color),
      ),
    ),
    typography: theme.typography ?? DEFAULT_TAXONOMY_THEME.typography,
    surfaces: theme.surfaces ?? DEFAULT_TAXONOMY_THEME.surfaces,
    geometry: theme.geometry ?? DEFAULT_TAXONOMY_THEME.geometry,
    textures: theme.textures ?? DEFAULT_TAXONOMY_THEME.textures,
  };
}
