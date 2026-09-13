import { describe, expect, it } from 'vitest';
import { defineTaxonomy } from '../contracts/define-taxonomy';
import { syntheticTaxonomy } from '../testing/synthetic-taxonomy.fixture';
import { validateTaxonomyModule } from './validate-taxonomy-module';

describe('validateTaxonomyModule', () => {
  it('accepts a valid taxonomy fixture', () => {
    const result = validateTaxonomyModule(syntheticTaxonomy);

    expect(result.issues).toEqual([]);
    expect(result.valid).toBe(true);
  });

  it('reports broken references and invalid default rings', () => {
    const invalid = defineTaxonomy({
      ...syntheticTaxonomy,
      records: {
        ...syntheticTaxonomy.records,
        entries: [
          {
            ...syntheticTaxonomy.records.entries[0]!,
            parentGroupIds: ['missing-group'],
          },
        ],
        relatedEntities: [],
      },
      interpretation: {
        ...syntheticTaxonomy.interpretation,
        projection: {
          ...(syntheticTaxonomy.interpretation.projection as Extract<
            typeof syntheticTaxonomy.interpretation.projection,
            { kind: 'dimensional' }
          >),
          kind: 'dimensional',
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
    const duplicate = syntheticTaxonomy.records.entries[0]!;
    const invalid = defineTaxonomy({
      ...syntheticTaxonomy,
      records: {
        ...syntheticTaxonomy.records,
        entries: [...syntheticTaxonomy.records.entries, duplicate],
      },
    });
    expect(validateTaxonomyModule(invalid).issues.map(({ code }) => code)).toContain(
      'duplicate-id',
    );
  });

  it('reports branch colors that do not resolve through the active theme', () => {
    const invalid = defineTaxonomy({
      ...syntheticTaxonomy,
      presentation: {
        ...syntheticTaxonomy.presentation,
        layout: {
          ...syntheticTaxonomy.presentation.layout!,
          branchColors: { mineral: 'undeclared-tone' },
        },
      },
    });
    expect(validateTaxonomyModule(invalid).issues.map(({ code }) => code)).toContain(
      'missing-visual-token',
    );
  });

  it('validates ownership and provenance for cross-taxonomy relations', () => {
    const invalid = defineTaxonomy({
      ...syntheticTaxonomy,
      crossTaxonomyRelations: [
        {
          id: 'broken-edge',
          source: { datasetId: 'another-dataset', target: { kind: 'entry', id: 'sample' } },
          target: {
            datasetId: syntheticTaxonomy.meta.id,
            target: { kind: 'related-entity', id: 'country:DE' },
          },
          relation: 'originates-in',
          provenance: { kind: 'derived' },
        },
      ],
    });

    expect(validateTaxonomyModule(invalid).issues.map(({ code }) => code)).toEqual(
      expect.arrayContaining([
        'foreign-relation-source',
        'invalid-relation-target-dataset',
        'missing-relation-provenance',
      ]),
    );
  });
});
