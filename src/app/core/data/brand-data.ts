export interface BeerBrand {
  id: string;
  name: string;
  taxonomyEntryIds: string[];
  logoUrl?: string | null;
  websiteUrl?: string;
  description?: string;
}

export const beerBrands: readonly BeerBrand[] = generatedBrands;

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
