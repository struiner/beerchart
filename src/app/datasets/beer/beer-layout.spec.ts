import { describe, expect, it } from 'vitest';
import { validateTaxonomyModule } from '../../taxonomy/public-api';
import { describeTaxonomyContract } from '../../taxonomy/testing/public-api';
import { beerTaxonomyModule } from '.';

describeTaxonomyContract('Beer', beerTaxonomyModule, { expectedEntries: 168 });

describe('beer generic layout', () => {
  it('is valid and retains all 168 published entries', () => {
    expect(validateTaxonomyModule(beerTaxonomyModule)).toMatchObject({ valid: true, issues: [] });
    expect(beerTaxonomyModule.records.entries).toHaveLength(168);
  });

  it('declares the restored visual grammar in the beer presentation preset', () => {
    expect(beerTaxonomyModule.presentation.layout).toMatchObject({
      radiusPolicy: { kind: 'fixed', radii: [520, 1500, 2350, 2850] },
      labelOrientation: 'radial',
      branchColors: { ale: 'amber', lager: 'yellow', mixed: 'teal' },
    });
    expect(beerTaxonomyModule.presentation.theme).toMatchObject({
      id: 'brewers-atlas',
      texture: 'paper-ledger',
      tokens: { paper: '#dfd0ab', olive: '#293329', brass: '#b8893e' },
    });
  });
});
