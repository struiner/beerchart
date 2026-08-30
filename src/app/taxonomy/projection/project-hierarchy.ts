import type { HierarchicalProjectionDefinition, HierarchyNode } from '../contracts/taxonomy';
import type { ProjectedNode, ProjectedScene, ProjectionWarning } from './project-taxonomy';

const segment = (value: string) => encodeURIComponent(value).replaceAll('%', '~');

export interface HierarchyProjectionInput {
  readonly definition: HierarchicalProjectionDefinition;
  readonly rootNodeId?: string;
  readonly activeLayerIds?: readonly string[];
}

export interface HierarchyValidationResult {
  readonly valid: boolean;
  readonly warnings: readonly ProjectionWarning[];
}

export function validateHierarchyProjection(
  definition: HierarchicalProjectionDefinition,
): HierarchyValidationResult {
  const warnings: ProjectionWarning[] = [];
  const nodes = new Map(definition.nodes.map((node) => [node.id, node]));
  if (nodes.size !== definition.nodes.length)
    warnings.push({
      code: 'duplicate-hierarchy-node',
      message: 'Hierarchy node IDs must be unique.',
    });
  const edgeIds = new Set<string>();
  for (const edge of definition.edges) {
    if (edgeIds.has(edge.id))
      warnings.push({ code: 'duplicate-hierarchy-edge', message: `Duplicate edge "${edge.id}".` });
    edgeIds.add(edge.id);
    if (!nodes.has(edge.parentNodeId) || !nodes.has(edge.childNodeId))
      warnings.push({
        code: 'orphan-hierarchy-edge',
        message: `Edge "${edge.id}" has an unknown endpoint.`,
      });
  }
  const children = new Map<string, string[]>();
  definition.edges.forEach((edge) =>
    children.set(edge.parentNodeId, [...(children.get(edge.parentNodeId) ?? []), edge.childNodeId]),
  );
  const visited = new Set<string>();
  const active = new Set<string>();
  const visit = (id: string) => {
    if (active.has(id)) {
      warnings.push({ code: 'hierarchy-cycle', message: `Hierarchy contains a cycle at "${id}".` });
      return;
    }
    if (visited.has(id)) return;
    visited.add(id);
    active.add(id);
    (children.get(id) ?? []).forEach(visit);
    active.delete(id);
  };
  definition.nodes.forEach(({ id }) => visit(id));
  if (definition.window.visibleDepth < 1 || definition.window.visibleDepth > 3)
    warnings.push({
      code: 'invalid-visible-depth',
      message: 'Hierarchical projection visibleDepth must be between one and three.',
    });
  if (definition.window.maxInstances < 2)
    warnings.push({
      code: 'invalid-instance-limit',
      message: 'Hierarchy maxInstances must be at least two.',
    });
  const layers = new Map(definition.layers.map((layer) => [layer.id, layer]));
  for (const preset of definition.viewPresets ?? []) {
    if (preset.layers.length !== definition.window.visibleDepth)
      warnings.push({
        code: 'invalid-hierarchy-preset-depth',
        message: `Preset "${preset.id}" must define one slot per visible ring.`,
      });
    for (const slot of preset.layers) {
      if (!slot.allowedLayerIds.includes(slot.defaultLayerId))
        warnings.push({
          code: 'invalid-hierarchy-preset-default',
          message: `Preset slot "${slot.id}" does not allow its default layer.`,
        });
      for (const layerId of slot.allowedLayerIds)
        if (!layers.has(layerId))
          warnings.push({
            code: 'unknown-hierarchy-layer',
            message: `Preset slot "${slot.id}" references unknown layer "${layerId}".`,
          });
    }
    const orders = preset.layers.map(({ defaultLayerId }) => layers.get(defaultLayerId)?.order);
    for (let index = 1; index < orders.length; index++)
      if (
        orders[index - 1] !== undefined &&
        orders[index] !== undefined &&
        orders[index]! <= orders[index - 1]!
      )
        warnings.push({
          code: 'invalid-hierarchy-layer-order',
          message: `Preset "${preset.id}" has an outer default layer that is not below its inner layer.`,
        });
  }
  return {
    valid: !warnings.some(
      ({ code }) =>
        code.includes('cycle') ||
        code.startsWith('duplicate') ||
        code.startsWith('orphan') ||
        code.startsWith('invalid') ||
        code.startsWith('unknown-hierarchy'),
    ),
    warnings,
  };
}

export function projectHierarchy(input: HierarchyProjectionInput): ProjectedScene {
  const { definition } = input;
  const validation = validateHierarchyProjection(definition);
  const warnings = [...validation.warnings];
  const nodeById = new Map(definition.nodes.map((node) => [node.id, node]));
  const rootNode = input.rootNodeId
    ? nodeById.get(input.rootNodeId)
    : definition.nodes.find(
        (node) =>
          node.id === definition.rootEntityId || node.canonicalEntityId === definition.rootEntityId,
      );
  if (!rootNode)
    throw new Error(
      `Hierarchy root "${input.rootNodeId ?? definition.rootEntityId}" does not exist.`,
    );
  if (!validation.valid) return emptyScene(rootNode, warnings);

  const children = new Map<string, HierarchyNode[]>();
  definition.edges.forEach((edge) => {
    const child = nodeById.get(edge.childNodeId);
    if (child) children.set(edge.parentNodeId, [...(children.get(edge.parentNodeId) ?? []), child]);
  });
  children.forEach((items) =>
    items.sort((a, b) => a.label.localeCompare(b.label) || a.id.localeCompare(b.id)),
  );
  const descendantCount = (nodeId: string, path = new Set<string>()): number => {
    if (path.has(nodeId)) return 0;
    const nextPath = new Set(path).add(nodeId);
    return (children.get(nodeId) ?? []).reduce(
      (total, child) => total + 1 + descendantCount(child.id, nextPath),
      0,
    );
  };
  const layerById = new Map(definition.layers.map((layer) => [layer.id, layer]));
  const candidatesFor = (
    parentNodeId: string,
    layerId: string | undefined,
  ): readonly { node: HierarchyNode; path: readonly string[] }[] => {
    const expectedKinds = layerId ? new Set(layerById.get(layerId)?.nodeKinds ?? []) : null;
    const direct = children.get(parentNodeId) ?? [];
    if (!expectedKinds?.size) return direct.map((node) => ({ node, path: [node.id] }));
    const matches: { node: HierarchyNode; path: readonly string[] }[] = [];
    const visit = (node: HierarchyNode, path: readonly string[]) => {
      if (expectedKinds.has(node.kind)) {
        matches.push({ node, path });
        return;
      }
      (children.get(node.id) ?? []).forEach((child) => visit(child, [...path, child.id]));
    };
    direct.forEach((child) => visit(child, [child.id]));
    return matches.length ? matches : direct.map((node) => ({ node, path: [node.id] }));
  };
  const root: ProjectedNode = {
    instanceId: `hierarchy@${segment(rootNode.id)}`,
    entityType: 'root',
    entityId: rootNode.canonicalEntityId,
    title: rootNode.label,
    parentInstanceId: null,
    path: [rootNode.id],
    depth: 0,
    sourceNodeId: rootNode.id,
    expandable: (children.get(rootNode.id)?.length ?? 0) > 0,
    coverage:
      typeof rootNode.attributes?.['coverage'] === 'string'
        ? rootNode.attributes['coverage']
        : undefined,
  };
  const nodes: ProjectedNode[] = [root];
  const instancesByEntityId = new Map<string, string[]>([[root.entityId, [root.instanceId]]]);
  const visibleDepth = Math.min(3, definition.window.visibleDepth);
  let frontier: { node: HierarchyNode; projected: ProjectedNode }[] = [
    { node: rootNode, projected: root },
  ];
  projection: for (let depth = 1; depth <= visibleDepth && frontier.length; depth++) {
    const next: typeof frontier = [];
    for (const parent of frontier) {
      const childNodes = candidatesFor(parent.node.id, input.activeLayerIds?.[depth - 1]);
      for (let index = 0; index < childNodes.length; index++) {
        const candidate = childNodes[index]!;
        const child = candidate.node;
        const reserveAggregate = definition.window.overflow === 'aggregate' ? 1 : 0;
        if (nodes.length >= definition.window.maxInstances - reserveAggregate) {
          const hidden = Math.max(0, descendantCount(rootNode.id) - (nodes.length - 1));
          if (
            definition.window.overflow === 'aggregate' &&
            hidden > 0 &&
            nodes.length < definition.window.maxInstances
          ) {
            const aggregate: ProjectedNode = {
              instanceId: `${root.instanceId}/aggregate`,
              entityType: 'aggregate',
              entityId: `aggregate:${root.instanceId}`,
              title: `${hidden} more`,
              parentInstanceId: root.instanceId,
              path: [...root.path, 'aggregate'],
              depth: 1,
              expandable: true,
              hiddenDescendantCount: hidden,
              sourceNodeId: rootNode.id,
            };
            nodes.push(aggregate);
          } else if (definition.window.overflow === 'warn') {
            warnings.push({
              code: 'hierarchy-overflow',
              message: `${hidden} hierarchy descendants are outside the projection limit.`,
            });
          }
          break projection;
        }
        const path = [...parent.projected.path, ...candidate.path];
        const projected: ProjectedNode = {
          instanceId: `hierarchy@${path.map(segment).join('/')}`,
          entityType: 'hierarchy-node',
          entityId: child.canonicalEntityId,
          title: child.label,
          parentInstanceId: parent.projected.instanceId,
          path,
          depth,
          sourceNodeId: child.id,
          expandable: (children.get(child.id)?.length ?? 0) > 0,
          hiddenDescendantCount:
            depth === visibleDepth ? descendantCount(child.id) || undefined : undefined,
          coverage:
            typeof child.attributes?.['coverage'] === 'string'
              ? child.attributes['coverage']
              : undefined,
        };
        nodes.push(projected);
        instancesByEntityId.set(projected.entityId, [
          ...(instancesByEntityId.get(projected.entityId) ?? []),
          projected.instanceId,
        ]);
        next.push({ node: child, projected });
      }
    }
    frontier = next;
  }
  return { root, nodes, instancesByEntityId, warnings };
}

function emptyScene(
  rootNode: HierarchyNode,
  warnings: readonly ProjectionWarning[],
): ProjectedScene {
  const root: ProjectedNode = {
    instanceId: `hierarchy@${segment(rootNode.id)}`,
    entityType: 'root',
    entityId: rootNode.canonicalEntityId,
    title: rootNode.label,
    parentInstanceId: null,
    path: [rootNode.id],
    depth: 0,
    sourceNodeId: rootNode.id,
  };
  return {
    root,
    nodes: [root],
    instancesByEntityId: new Map([[root.entityId, [root.instanceId]]]),
    warnings,
  };
}
