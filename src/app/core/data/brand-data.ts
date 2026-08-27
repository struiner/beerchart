export interface BeerBrand {
  id: string;
  name: string;
  taxonomyEntryIds: string[];
  logoUrl?: string | null;
  websiteUrl?: string;
  description?: string;
  country?: {
    name: string;
    iso3166Alpha2: string;
    region?: string;
  };
}

export const beerBrands: readonly BeerBrand[] = mergeBrands(
  generatedBrands,
  curatedBrands,
  supplementalBrands,
  countryEnrichmentBrands,
);

function mergeBrands(...sources: readonly BeerBrand[][]): BeerBrand[] {
  const byId = new Map<string, BeerBrand>();
  for (const brand of sources.flat()) {
    const existing = byId.get(brand.id);
    byId.set(
      brand.id,
      existing
        ? {
            ...existing,
            taxonomyEntryIds: [
              ...new Set([...existing.taxonomyEntryIds, ...brand.taxonomyEntryIds]),
            ],
            logoUrl: existing.logoUrl ?? brand.logoUrl,
            websiteUrl: existing.websiteUrl ?? brand.websiteUrl,
            description: existing.description ?? brand.description,
            country: existing.country ?? brand.country,
          }
        : { ...brand, taxonomyEntryIds: [...brand.taxonomyEntryIds] },
    );
  }
  return [...byId.values()];
}

const brandsByEntryId = new Map<string, BeerBrand[]>();
for (const brand of beerBrands) {
  for (const entryId of brand.taxonomyEntryIds) {
    brandsByEntryId.set(entryId, [...(brandsByEntryId.get(entryId) ?? []), brand]);
  }
}

export function brandsForEntry(entryId: string): readonly BeerBrand[] {
  return brandsByEntryId.get(entryId) ?? [];
}
import generatedBrands from './beer-brands.generated.json';
import curatedBrands from './beer-brands-curated.json';
import supplementalBrands from './beer-brands-supplemental.json';
import countryEnrichmentBrands from './beer-brands-country-enrichment.json';
