import type { HierarchicalProjectionDefinition } from '../contracts/taxonomy';

/** Neutral fixture intentionally containing awkward graph shapes and no domain vocabulary. */
export const syntheticHierarchy: HierarchicalProjectionDefinition = {
  kind: 'hierarchical',
  rootEntityId: 'entity:origin',
  nodes: [
    { id: 'origin', canonicalEntityId: 'entity:origin', kind: 'origin', label: 'Origin' },
    { id: 'alpha', canonicalEntityId: 'entity:alpha', kind: 'cluster', label: 'Repeated' },
    { id: 'beta', canonicalEntityId: 'entity:beta', kind: 'cluster', label: 'Repeated' },
    { id: 'empty', canonicalEntityId: 'entity:empty', kind: 'cluster', label: 'Empty branch' },
    { id: 'deep-a', canonicalEntityId: 'entity:deep-a', kind: 'level', label: 'Deep A' },
    { id: 'deep-b', canonicalEntityId: 'entity:deep-b', kind: 'level', label: 'Deep B' },
    { id: 'deep-c', canonicalEntityId: 'entity:deep-c', kind: 'level', label: 'Deep C' },
    { id: 'deep-d', canonicalEntityId: 'entity:deep-d', kind: 'terminal', label: 'Deep D' },
    { id: 'shared-a', canonicalEntityId: 'entity:shared', kind: 'terminal', label: 'Shared' },
    { id: 'shared-b', canonicalEntityId: 'entity:shared', kind: 'terminal', label: 'Shared' },
    ...Array.from({ length: 8 }, (_, index) => ({
      id: `overflow-${index}`,
      canonicalEntityId: `entity:overflow-${index}`,
      kind: 'terminal',
      label: `Overflow ${index}`,
    })),
  ],
  edges: [
    { id: 'origin-alpha', parentNodeId: 'origin', childNodeId: 'alpha', relationId: 'contains' },
    { id: 'origin-beta', parentNodeId: 'origin', childNodeId: 'beta', relationId: 'contains' },
    { id: 'origin-empty', parentNodeId: 'origin', childNodeId: 'empty', relationId: 'contains' },
    { id: 'alpha-deep-a', parentNodeId: 'alpha', childNodeId: 'deep-a', relationId: 'contains' },
    { id: 'deep-a-deep-b', parentNodeId: 'deep-a', childNodeId: 'deep-b', relationId: 'contains' },
    { id: 'deep-b-deep-c', parentNodeId: 'deep-b', childNodeId: 'deep-c', relationId: 'contains' },
    { id: 'deep-c-deep-d', parentNodeId: 'deep-c', childNodeId: 'deep-d', relationId: 'contains' },
    { id: 'alpha-shared', parentNodeId: 'alpha', childNodeId: 'shared-a', relationId: 'contains' },
    { id: 'beta-shared', parentNodeId: 'beta', childNodeId: 'shared-b', relationId: 'contains' },
    ...Array.from({ length: 8 }, (_, index) => ({
      id: `beta-overflow-${index}`,
      parentNodeId: 'beta',
      childNodeId: `overflow-${index}`,
      relationId: 'contains',
    })),
  ],
  layers: [
    { id: 'cluster', label: 'Cluster', nodeKinds: ['cluster'], order: 1 },
    { id: 'level', label: 'Level', nodeKinds: ['level'], order: 2 },
    { id: 'terminal', label: 'Terminal', nodeKinds: ['terminal'], order: 3 },
  ],
  viewPresets: [
    {
      id: 'default',
      label: 'Default hierarchy',
      layers: [
        {
          id: 'inner',
          label: 'Inner ring',
          defaultLayerId: 'cluster',
          allowedLayerIds: ['cluster'],
          locked: true,
        },
        {
          id: 'middle',
          label: 'Middle ring',
          defaultLayerId: 'level',
          allowedLayerIds: ['level', 'terminal'],
        },
        {
          id: 'outer',
          label: 'Outer ring',
          defaultLayerId: 'terminal',
          allowedLayerIds: ['terminal'],
        },
      ],
    },
  ],
  window: { visibleDepth: 3, maxInstances: 100, overflow: 'aggregate' },
  navigation: { expandableTerminal: 'reroot', canonicalTerminal: 'navigate' },
};

export const cyclicSyntheticHierarchy: HierarchicalProjectionDefinition = {
  ...syntheticHierarchy,
  edges: [
    ...syntheticHierarchy.edges,
    { id: 'cycle', parentNodeId: 'deep-d', childNodeId: 'origin', relationId: 'contains' },
  ],
};
