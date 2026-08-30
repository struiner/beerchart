import { describe, expect, it } from 'vitest';
import type { HierarchyNodeMeasure, NodeMeasureEncoding } from '../contracts/taxonomy';
import { syntheticHierarchy } from '../testing/synthetic-hierarchy.fixture';
import { projectHierarchy } from './project-hierarchy';
import { projectNodeMeasures } from './project-node-measures';

describe('hierarchy node measures', () => {
  const encodings: readonly NodeMeasureEncoding[] = [
    { metricId: 'quantity', appearance: 'area', scale: 'linear', missingValue: 'uniform' },
  ];

  it('maps canonical node measurements to every projected instance', () => {
    const scene = projectHierarchy({ definition: syntheticHierarchy });
    const measures: readonly HierarchyNodeMeasure[] = [
      {
        nodeId: 'shared-a',
        metricId: 'quantity',
        value: 25,
        unit: 'items',
        label: '25 items',
        sourceIds: ['source'],
      },
      {
        nodeId: 'shared-b',
        metricId: 'quantity',
        value: 25,
        unit: 'items',
        label: '25 items',
        sourceIds: ['source'],
      },
    ];
    const projected = projectNodeMeasures({ scene, measures, encodings });
    expect([...projected.values()].flat()).toHaveLength(2);
    expect([...projected.values()].flat().every(({ sizeScale }) => sizeScale > 1)).toBe(true);
  });

  it('keeps missing measurements uniform instead of implying insignificance', () => {
    const scene = projectHierarchy({ definition: syntheticHierarchy });
    const measures: readonly HierarchyNodeMeasure[] = [
      {
        nodeId: 'alpha',
        metricId: 'quantity',
        unit: 'items',
        label: 'Not measured',
        sourceIds: [],
      },
    ];
    const projected = projectNodeMeasures({ scene, measures, encodings });
    expect([...projected.values()][0]?.[0]).toMatchObject({ sizeScale: 1, hidden: false });
  });

  it('uses a square-root radius transform for area encodings', () => {
    const scene = projectHierarchy({ definition: syntheticHierarchy });
    const measures: readonly HierarchyNodeMeasure[] = [
      {
        nodeId: 'alpha',
        metricId: 'quantity',
        value: 100,
        unit: 'items',
        label: '100 items',
        sourceIds: ['source'],
      },
      {
        nodeId: 'beta',
        metricId: 'quantity',
        value: 25,
        unit: 'items',
        label: '25 items',
        sourceIds: ['source'],
      },
    ];
    const projected = projectNodeMeasures({ scene, measures, encodings });
    const alpha = [...projected.values()]
      .flat()
      .find(({ measure }) => measure.instanceId.includes('alpha'))!;
    const beta = [...projected.values()]
      .flat()
      .find(({ measure }) => measure.instanceId.includes('beta'))!;
    expect(alpha.sizeScale).toBeGreaterThan(beta.sizeScale);
  });
});
