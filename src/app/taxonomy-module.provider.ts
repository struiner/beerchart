import { Provider } from '@angular/core';
import { beerTaxonomyModule } from './datasets/beer/beer-taxonomy';
import { provideTaxonomy } from './taxonomy/contracts/taxonomy-provider';

export const ACTIVE_TAXONOMY_PROVIDER: Provider = provideTaxonomy(beerTaxonomyModule);
