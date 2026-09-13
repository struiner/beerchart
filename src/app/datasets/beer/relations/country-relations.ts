import type { CrossTaxonomyRelation } from '../../../taxonomy/public-api';
import { beerBrands } from '../data/brands';
import { beerTaxonomyEntries } from '../data/entries';

export const BEER_DATASET_ID = 'brewers-association-2026-circular-taxonomy';
export const ECOREGION_DATASET_ID = 'one-earth-terrestrial-ecoregions';

const normalizedCountryCode = (value: string | undefined): string | null => {
  const code = value?.trim().toUpperCase();
  return code && /^[A-Z]{2}$/.test(code) ? code : null;
};

const countryTarget = (countryCode: string) => ({
  datasetId: ECOREGION_DATASET_ID,
  target: { kind: 'related-entity' as const, id: `country:${countryCode}` },
});

const styleOriginRelations: readonly CrossTaxonomyRelation[] = beerTaxonomyEntries.flatMap(
  (entry) => {
    const countryCodes = new Set(
      entry.originLocations.value.flatMap((location) => {
        const code = normalizedCountryCode(
          'countryCode' in location ? location.countryCode : undefined,
        );
        return code ? [code] : [];
      }),
    );
    return [...countryCodes].sort().map((countryCode) => ({
      id: `beer-country:origin:${entry.id}:${countryCode}`,
      source: {
        datasetId: BEER_DATASET_ID,
        target: { kind: 'entry' as const, id: entry.id },
      },
      target: countryTarget(countryCode),
      relation: 'originates-in' as const,
      provenance: {
        kind: 'declared' as const,
        sourceIds: entry.originLocations.sourceIds,
        method: 'beer-entry.originLocations.countryCode',
      },
    }));
  },
);

const brandBrewingRelations: readonly CrossTaxonomyRelation[] = beerBrands.flatMap((brand) => {
  const countryCode = normalizedCountryCode(brand.country?.iso3166Alpha2);
  if (!countryCode) return [];
  return [
    {
      id: `beer-country:brewed:${brand.id}:${countryCode}`,
      source: {
        datasetId: BEER_DATASET_ID,
        target: { kind: 'related-entity' as const, id: brand.id },
      },
      target: countryTarget(countryCode),
      relation: 'brewed-in' as const,
      provenance: {
        kind: 'declared' as const,
        method: 'beer-brand.country.iso3166Alpha2',
      },
    },
  ];
});

export const beerCountryRelations: readonly CrossTaxonomyRelation[] = [
  ...styleOriginRelations,
  ...brandBrewingRelations,
];

const relationsByCountry = new Map<string, CrossTaxonomyRelation[]>();
for (const relation of beerCountryRelations) {
  const target = relation.target.target;
  if (target.kind === 'dimension-value') continue;
  const countryId = target.id;
  relationsByCountry.set(countryId, [...(relationsByCountry.get(countryId) ?? []), relation]);
}

export function beerRelationsForCountry(
  countryCode: string,
): readonly CrossTaxonomyRelation[] {
  const code = normalizedCountryCode(countryCode);
  return code ? (relationsByCountry.get(`country:${code}`) ?? []) : [];
}

export function beerStyleIdsOriginatingInCountry(countryCode: string): readonly string[] {
  return beerRelationsForCountry(countryCode).flatMap((relation) =>
    relation.relation === 'originates-in' && relation.source.target.kind === 'entry'
      ? [relation.source.target.id]
      : [],
  );
}

export function beerBrandIdsBrewedInCountry(countryCode: string): readonly string[] {
  return beerRelationsForCountry(countryCode).flatMap((relation) =>
    relation.relation === 'brewed-in' && relation.source.target.kind === 'related-entity'
      ? [relation.source.target.id]
      : [],
  );
}
