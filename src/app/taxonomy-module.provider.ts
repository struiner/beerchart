import { Provider } from '@angular/core';
import { applicationTaxonomy } from './application-taxonomy';
import { provideTaxonomy } from './taxonomy/contracts/taxonomy-provider';

export const ACTIVE_TAXONOMY_PROVIDER: Provider = provideTaxonomy(applicationTaxonomy);
