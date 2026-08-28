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
  };
}
