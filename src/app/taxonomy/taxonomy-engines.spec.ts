import { describe, expect, it } from 'vitest';
import { evaluateTaxonomyFilters } from './filtering/evaluate-taxonomy-filters';
import { createTaxonomyIndexes } from './indexes/create-taxonomy-indexes';
import { composeTaxonomyProfile } from './profiles/compose-taxonomy-profile';
import { projectTaxonomy } from './projection/project-taxonomy';
import { createTaxonomySearchIndex, searchTaxonomy } from './search/taxonomy-search';
import { syntheticTaxonomy } from './testing/synthetic-taxonomy.fixture';
import { resolvePresentationScene } from './presentation/resolve-presentation-scene';
import { layoutCircularTaxonomy } from './layout/circular-layout';
import { sanitizeMarkdown } from './profiles/sanitize-markdown';

describe('pure taxonomy engines', () => {
  const indexes = createTaxonomyIndexes(syntheticTaxonomy);

  it('indexes descendants, multiple memberships and related entities', () => {
    expect(indexes.descendantEntryIdsByGroupId.get('minerals')).toEqual(
      expect.arrayContaining(['quartz', 'amethyst', 'calcite', 'dolomite', 'jade-a']),
    );
    expect(indexes.directEntryIdsByGroupId.get('gems')).toEqual(['amethyst', 'jade-a', 'jade-b']);
    expect(indexes.relatedEntityIdsByEntryId.get('quartz')).toEqual(['museum-a']);
  });

  it('uses OR within a facet, AND between facets, and intersecting ranges', () => {
    const filtered = evaluateTaxonomyFilters({
      module: syntheticTaxonomy,
      indexes,
      activeFilters: [
        { facetId: 'color', valueIds: ['purple', 'green'] },
        { facetId: 'material', valueIds: ['mineral'] },
        { facetId: 'hardness', range: { min: 6.5, max: 7 } },
      ],
    });
    expect([...filtered.entryIds]).toEqual(['quartz', 'amethyst', 'jade-a']);
    expect(filtered.groupCounts.get('gems')).toBe(2);
  });

  it('searches declared aliases without serializing records', () => {
    const searchIndex = createTaxonomySearchIndex({ module: syntheticTaxonomy, indexes });
    expect(searchTaxonomy(searchIndex, 'rock crystal')[0]?.targetId).toBe('quartz');
    expect(searchTaxonomy(searchIndex, 'Jade')).toHaveLength(2);
  });

  it('composes generic profiles through relation indexes', () => {
    const profile = composeTaxonomyProfile({
      module: syntheticTaxonomy,
      indexes,
      target: { kind: 'entry', id: 'quartz' },
    });
    expect(profile?.sections.map(({ id }) => id)).toEqual(['facts', 'collections']);
    expect(profile?.sections[1]?.kind).toBe('related-entities');
  });

  it('projects deterministic duplicate instances and an unknown bucket', () => {
    const includedEntryIds = new Set(syntheticTaxonomy.records.entries.map(({ id }) => id));
    const first = projectTaxonomy({
      module: syntheticTaxonomy,
      indexes,
      includedEntryIds,
      ringOrder: ['material', 'color'],
    });
    const second = projectTaxonomy({
      module: syntheticTaxonomy,
      indexes,
      includedEntryIds,
      ringOrder: ['material', 'color'],
    });
    expect(first.nodes.map(({ instanceId }) => instanceId)).toEqual(
      second.nodes.map(({ instanceId }) => instanceId),
    );
    expect(first.instancesByEntityId.get('quartz')).toHaveLength(2);
    expect(first.nodes.some(({ entityId }) => entityId === 'color:unknown')).toBe(true);
  });

  it('positions presentation deterministically with finite, bounded geometry', () => {
    const includedEntryIds = new Set(syntheticTaxonomy.records.entries.map(({ id }) => id));
    const projected = projectTaxonomy({
      module: syntheticTaxonomy,
      indexes,
      includedEntryIds,
      ringOrder: ['material', 'color'],
    });
    const presentation = resolvePresentationScene({ module: syntheticTaxonomy, projected });
    const first = layoutCircularTaxonomy(presentation);
    const second = layoutCircularTaxonomy(presentation);
    expect(first.nodes.map(({ instanceId, x, y }) => [instanceId, x, y])).toEqual(
      second.nodes.map(({ instanceId, x, y }) => [instanceId, x, y]),
    );
    expect(
      first.ringRadii.every((radius, index) => index === 0 || radius > first.ringRadii[index - 1]!),
    ).toBe(true);
    first.nodes.forEach((node) => {
      expect(Number.isFinite(node.x) && Number.isFinite(node.y)).toBe(true);
      expect(node.x - node.layout.width / 2).toBeGreaterThanOrEqual(first.bounds.minX);
      expect(node.x + node.layout.width / 2).toBeLessThanOrEqual(first.bounds.maxX);
      expect(node.y - node.layout.height / 2).toBeGreaterThanOrEqual(first.bounds.minY);
      expect(node.y + node.layout.height / 2).toBeLessThanOrEqual(first.bounds.maxY);
    });
  });

  it('uses adaptive dataset geometry and warns rather than expanding fixed rings', () => {
    const projected = projectTaxonomy({
      module: syntheticTaxonomy,
      indexes,
      includedEntryIds: new Set(syntheticTaxonomy.records.entries.map(({ id }) => id)),
      ringOrder: ['material', 'color'],
    });
    const positioned = layoutCircularTaxonomy(
      resolvePresentationScene({ module: syntheticTaxonomy, projected }),
    );
    expect(positioned.ringRadii[1]).toBeGreaterThanOrEqual(320);
    expect(positioned.ringRadii.slice(1, 5)).not.toEqual([520, 1500, 2350, 2850]);
    const presentation = resolvePresentationScene({ module: syntheticTaxonomy, projected });
    const fixed = layoutCircularTaxonomy({
      ...presentation,
      radiusPolicy: { kind: 'fixed', radii: [10, 20] },
    });
    expect(fixed.ringRadii.slice(1, 3)).toEqual([10, 20]);
    expect(fixed.warnings.some(({ code }) => code === 'fixed-ring-overlap')).toBe(true);
  });

  it('handles an empty filtered projection', () => {
    const projected = projectTaxonomy({
      module: syntheticTaxonomy,
      indexes,
      includedEntryIds: new Set(),
      ringOrder: ['material', 'color'],
    });
    const positioned = layoutCircularTaxonomy(
      resolvePresentationScene({ module: syntheticTaxonomy, projected }),
    );
    expect(positioned.nodes).toHaveLength(1);
    expect(positioned.nodes[0]?.kind).toBe('root');
  });

  it('composes group, dimension and related-entity profiles', () => {
    const includedEntryIds = new Set(syntheticTaxonomy.records.entries.map(({ id }) => id));
    const group = composeTaxonomyProfile({
      module: syntheticTaxonomy,
      indexes,
      target: { kind: 'group', id: 'gems' },
      includedEntryIds,
    });
    const dimension = composeTaxonomyProfile({
      module: syntheticTaxonomy,
      indexes,
      target: { kind: 'dimension-value', dimensionId: 'color', valueId: 'purple' },
      includedEntryIds,
    });
    const related = composeTaxonomyProfile({
      module: syntheticTaxonomy,
      indexes,
      target: { kind: 'related-entity', id: 'museum-a' },
    });
    expect(group?.sections[0]?.kind === 'entity-list' && group.sections[0].items).toHaveLength(3);
    expect(
      dimension?.sections[0]?.kind === 'entity-list' && dimension.sections[0].items,
    ).toHaveLength(2);
    expect(related?.sections[0]?.kind === 'entity-list' && related.sections[0].items).toHaveLength(
      2,
    );
  });

  it('removes executable HTML and markdown link schemes', () => {
    expect(sanitizeMarkdown('<script>alert(1)</script>[run](javascript:alert(1))')).not.toContain(
      '<script>',
    );
    expect(sanitizeMarkdown('[run](javascript:alert(1))')).not.toContain('javascript:');
  });
});
