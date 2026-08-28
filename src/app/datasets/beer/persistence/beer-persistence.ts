import type { TaxonomyPersistenceDefinition } from '../../../taxonomy/public-api';
import { beerLegacyImporter } from './beer-legacy-importer';

export const beerPersistence: TaxonomyPersistenceDefinition = {
  namespace: 'beer-taxonomy',
  version: 1,
  legacyImporters: [beerLegacyImporter],
};
