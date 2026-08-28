import type { TaxonomyLegacyImporter } from '../../../taxonomy/public-api';

const previousGenericPrefix =
  'taxonomy.brewers-association-2026-circular-taxonomy.taxonomy-module/v1';

function parse(value: string | null): unknown {
  return value === null ? undefined : JSON.parse(value);
}

export const beerLegacyImporter: TaxonomyLegacyImporter = {
  id: 'beer-settings-before-dataset-packaging',
  import(storage) {
    const settings = parse(
      storage.getItem(`${previousGenericPrefix}.settings`) ??
        storage.getItem('beer-taxonomy.settings.v1'),
    );
    const camera = parse(storage.getItem(`${previousGenericPrefix}.camera`));
    const ringValue = parse(
      storage.getItem(`${previousGenericPrefix}.rings`) ??
        storage.getItem('beer-taxonomy.rings.v1'),
    );
    const rings =
      ringValue && !Array.isArray(ringValue) && typeof ringValue === 'object'
        ? [
            (ringValue as Record<string, unknown>)['first'],
            (ringValue as Record<string, unknown>)['second'],
            (ringValue as Record<string, unknown>)['third'],
          ]
        : ringValue;
    return settings === undefined && camera === undefined && rings === undefined
      ? null
      : { settings, camera, rings };
  },
};
