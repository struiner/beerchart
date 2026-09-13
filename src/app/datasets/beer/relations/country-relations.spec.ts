import { describe, expect, it } from 'vitest';
import {
  beerBrandIdsBrewedInCountry,
  beerCountryRelations,
  beerRelationsForCountry,
  beerStyleIdsOriginatingInCountry,
  ECOREGION_DATASET_ID,
} from './country-relations';

describe('beer-country cross-taxonomy relations', () => {
  it('creates deterministic edges to canonical ecoregion country entities', () => {
    expect(beerCountryRelations.length).toBeGreaterThan(0);
    expect(new Set(beerCountryRelations.map(({ id }) => id)).size).toBe(
      beerCountryRelations.length,
    );
    expect(
      beerCountryRelations.every(
        ({ target }) =>
          target.datasetId === ECOREGION_DATASET_ID &&
          target.target.kind === 'related-entity' &&
          /^country:[A-Z]{2}$/.test(target.target.id),
      ),
    ).toBe(true);
  });

  it('keeps style origins distinct from brand brewing locations', () => {
    const germanRelations = beerRelationsForCountry('de');
    expect(germanRelations.length).toBeGreaterThan(0);
    expect(beerStyleIdsOriginatingInCountry('DE')).not.toEqual(
      beerBrandIdsBrewedInCountry('DE'),
    );
    expect(
      germanRelations.every(({ provenance }) => provenance.kind === 'declared'),
    ).toBe(true);
  });

  it('does not infer a country from locations without an explicit country code', () => {
    expect(beerRelationsForCountry('not-a-country')).toEqual([]);
    expect(
      beerCountryRelations.every(({ provenance }) => provenance.kind !== 'derived'),
    ).toBe(true);
  });
});
