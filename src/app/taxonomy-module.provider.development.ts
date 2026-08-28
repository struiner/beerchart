import { Provider } from '@angular/core';
import { beerTaxonomyModule } from './datasets/beer/beer-taxonomy';
import { TAXONOMY_MODULE } from './taxonomy/contracts/taxonomy-provider';
import { syntheticTaxonomy } from './taxonomy/testing/synthetic-taxonomy.fixture';

const specimenSelected =
  new URLSearchParams(globalThis.location?.search ?? '').get('taxonomy') === 'specimen';

export const ACTIVE_TAXONOMY_PROVIDER: Provider = {
  provide: TAXONOMY_MODULE,
  useValue: specimenSelected ? syntheticTaxonomy : beerTaxonomyModule,
};
