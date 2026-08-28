import { describe, expect, it } from 'vitest';
import { beerTaxonomyModule } from '../../datasets/beer/beer-taxonomy';
import { defineTaxonomy } from '../contracts/define-taxonomy';
import { validateTaxonomyModule } from './validate-taxonomy-module';

describe('validateTaxonomyModule', () => {
  it('accepts the beer compatibility module and retains all published entries', () => {
    const result = validateTaxonomyModule(beerTaxonomyModule);

    expect(result.issues).toEqual([]);
    expect(result.valid).toBe(true);
    expect(beerTaxonomyModule.records.entries).toHaveLength(168);
  });

  it('reports broken references and invalid default rings', () => {
    const invalid = defineTaxonomy({
      ...beerTaxonomyModule,
      records: {
        ...beerTaxonomyModule.records,
        entries: [
          {
            ...beerTaxonomyModule.records.entries[0]!,
            parentGroupIds: ['missing-group'],
          },
        ],
        relatedEntities: [],
      },
      interpretation: {
        ...beerTaxonomyModule.interpretation,
        projection: {
          ...beerTaxonomyModule.interpretation.projection,
          defaultRingOrder: ['missing-dimension'],
        },
      },
    });

    const result = validateTaxonomyModule(invalid);
    expect(result.valid).toBe(false);
    expect(result.issues.map(({ code }) => code)).toEqual(
      expect.arrayContaining(['unknown-entry-group', 'unknown-default-dimension']),
    );
  });

  it('rejects duplicate canonical entry ids', () => {
    const duplicate = beerTaxonomyModule.records.entries[0]!;
    const invalid = defineTaxonomy({
      ...beerTaxonomyModule,
      records: {
        ...beerTaxonomyModule.records,
        entries: [...beerTaxonomyModule.records.entries, duplicate],
      },
    });
    expect(validateTaxonomyModule(invalid).issues.map(({ code }) => code)).toContain(
      'duplicate-id',
    );
  });
});
