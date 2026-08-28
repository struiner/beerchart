import { describe, expect, it } from 'vitest';
import { createTaxonomyIndexes } from '../../taxonomy/indexes/create-taxonomy-indexes';
import { layoutCircularTaxonomy } from '../../taxonomy/layout/circular-layout';
import { resolvePresentationScene } from '../../taxonomy/presentation/resolve-presentation-scene';
import { projectTaxonomy } from '../../taxonomy/projection/project-taxonomy';
import { beerTaxonomyModule } from './beer-taxonomy';

describe('beer generic layout', () => {
  it('declares the restored visual grammar in the beer presentation preset', () => {
    expect(beerTaxonomyModule.presentation.layout).toMatchObject({
      radiusPolicy: { kind: 'fixed', radii: [520, 1500, 2350, 2850] },
      labelOrientation: 'radial',
      branchColors: { ale: 'orange', lager: 'yellow', mixed: 'teal' },
    });
    expect(beerTaxonomyModule.presentation.theme).toMatchObject({
      id: 'brewers-atlas',
      texture: 'paper-ledger',
      tokens: { paper: '#dfd0ab', olive: '#293329', brass: '#b8893e' },
    });
  });

  it('positions the default 168-entry projection without same-ring overlap', () => {
    const indexes = createTaxonomyIndexes(beerTaxonomyModule);
    const includedEntryIds = new Set(beerTaxonomyModule.records.entries.map(({ id }) => id));
    const projected = projectTaxonomy({
      module: beerTaxonomyModule,
      indexes,
      includedEntryIds,
      ringOrder: beerTaxonomyModule.interpretation.projection.defaultRingOrder,
    });
    const positioned = layoutCircularTaxonomy(
      resolvePresentationScene({ module: beerTaxonomyModule, projected }),
    );
    expect(positioned.ringRadii.slice(0, 5)).toEqual([0, 520, 1500, 2350, 2850]);
    expect(
      new Set(
        positioned.edges
          .filter(({ parentInstanceId }) => parentInstanceId === 'root')
          .map(({ visualToken }) => visualToken),
      ),
    ).toEqual(new Set(['orange', 'yellow', 'teal']));
    expect(projected.instancesByEntityId.size).toBeGreaterThanOrEqual(168);
    expect(positioned.warnings).toEqual([]);
    for (const ringIndex of new Set(positioned.nodes.map(({ ringIndex }) => ringIndex))) {
      const nodes = positioned.nodes.filter((node) => node.ringIndex === ringIndex);
      for (let leftIndex = 0; leftIndex < nodes.length; leftIndex++) {
        for (let rightIndex = leftIndex + 1; rightIndex < nodes.length; rightIndex++) {
          const left = nodes[leftIndex]!,
            right = nodes[rightIndex]!;
          const distance = Math.hypot(left.x - right.x, left.y - right.y);
          const minimum = left.layout.width / 2 + right.layout.width / 2;
          expect(distance).toBeGreaterThanOrEqual(minimum - 0.001);
        }
      }
    }
  });
});
