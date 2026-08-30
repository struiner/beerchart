import { describe, expect, it } from 'vitest';
import {
  cyclicSyntheticHierarchy,
  syntheticHierarchy,
} from '../testing/synthetic-hierarchy.fixture';
import { projectHierarchy, validateHierarchyProjection } from './project-hierarchy';

describe('hierarchical projection', () => {
  it('creates deterministic path instances within exactly three visible rings', () => {
    const first = projectHierarchy({ definition: syntheticHierarchy });
    const second = projectHierarchy({ definition: syntheticHierarchy });
    expect(second).toEqual(first);
    expect(Math.max(...first.nodes.map(({ depth }) => depth))).toBe(3);
    expect(first.nodes.some(({ sourceNodeId }) => sourceNodeId === 'deep-c')).toBe(false);
    expect(first.nodes.find(({ sourceNodeId }) => sourceNodeId === 'deep-b')?.expandable).toBe(
      true,
    );
  });

  it('keeps duplicate labels and multi-parent canonical occurrences distinct', () => {
    const scene = projectHierarchy({ definition: syntheticHierarchy });
    expect(scene.nodes.filter(({ title }) => title === 'Repeated')).toHaveLength(2);
    expect(scene.instancesByEntityId.get('entity:shared')).toHaveLength(2);
    expect(new Set(scene.instancesByEntityId.get('entity:shared')).size).toBe(2);
  });

  it('re-roots without losing canonical paths', () => {
    const scene = projectHierarchy({ definition: syntheticHierarchy, rootNodeId: 'deep-a' });
    expect(scene.root.sourceNodeId).toBe('deep-a');
    expect(scene.nodes.find(({ sourceNodeId }) => sourceNodeId === 'deep-d')?.depth).toBe(3);
  });

  it('compresses missing configured ranks while retaining the full source path', () => {
    const scene = projectHierarchy({
      definition: syntheticHierarchy,
      activeLayerIds: ['cluster', 'terminal', 'terminal'],
    });
    const deepTerminal = scene.nodes.find(({ sourceNodeId }) => sourceNodeId === 'deep-d');
    expect(deepTerminal?.depth).toBe(2);
    expect(deepTerminal?.path).toEqual(
      expect.arrayContaining(['deep-a', 'deep-b', 'deep-c', 'deep-d']),
    );
  });

  it('aggregates overflow and preserves the hidden descendant count', () => {
    const definition = {
      ...syntheticHierarchy,
      window: { ...syntheticHierarchy.window, maxInstances: 8 },
    } as const;
    const scene = projectHierarchy({ definition });
    const aggregate = scene.nodes.find(({ entityType }) => entityType === 'aggregate');
    expect(scene.nodes.length).toBeLessThanOrEqual(8);
    expect(aggregate?.expandable).toBe(true);
    expect(aggregate?.hiddenDescendantCount).toBeGreaterThan(0);
  });

  it('rejects invalid cycles', () => {
    const validation = validateHierarchyProjection(cyclicSyntheticHierarchy);
    expect(validation.valid).toBe(false);
    expect(validation.warnings.map(({ code }) => code)).toContain('hierarchy-cycle');
  });

  it('rejects presets whose ordered defaults invert inner and outer ranks', () => {
    const invalid = {
      ...syntheticHierarchy,
      viewPresets: [
        {
          ...syntheticHierarchy.viewPresets![0]!,
          layers: [
            syntheticHierarchy.viewPresets![0]!.layers[0]!,
            { ...syntheticHierarchy.viewPresets![0]!.layers[1]!, defaultLayerId: 'terminal' },
            {
              ...syntheticHierarchy.viewPresets![0]!.layers[2]!,
              defaultLayerId: 'level',
              allowedLayerIds: ['level'],
            },
          ],
        },
      ],
    } as const;
    expect(validateHierarchyProjection(invalid).warnings.map(({ code }) => code)).toContain(
      'invalid-hierarchy-layer-order',
    );
  });
});
