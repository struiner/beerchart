import { PresentedNode, PresentationScene } from '../presentation/presentation-scene';

export interface Point {
  readonly x: number;
  readonly y: number;
}
export interface CircularLayoutOptions {
  readonly center: Point;
  readonly rootRadius: number;
  readonly minimumRingGap: number;
  readonly minimumAngularGap: number;
  readonly branchGap: number;
  readonly clockwise: boolean;
  readonly startAngle: number;
}
export interface PositionedNode extends PresentedNode {
  readonly x: number;
  readonly y: number;
  readonly angle: number;
  readonly radius: number;
  readonly ringIndex: number;
}
export interface PositionedEdge {
  readonly id: string;
  readonly parentInstanceId: string;
  readonly childInstanceId: string;
  readonly start: Point;
  readonly end: Point;
  readonly visualToken: string;
}
export interface SceneBounds {
  readonly minX: number;
  readonly minY: number;
  readonly maxX: number;
  readonly maxY: number;
  readonly width: number;
  readonly height: number;
}
export interface PositionedScene {
  readonly nodes: readonly PositionedNode[];
  readonly edges: readonly PositionedEdge[];
  readonly bounds: SceneBounds;
  readonly ringRadii: readonly number[];
  readonly warnings: PresentationScene['warnings'];
}

export const DEFAULT_CIRCULAR_LAYOUT: CircularLayoutOptions = {
  center: { x: 3100, y: 3100 },
  rootRadius: 0,
  minimumRingGap: 180,
  minimumAngularGap: 0.012,
  branchGap: 0.025,
  clockwise: true,
  startAngle: -Math.PI / 2,
};
const collisionRadius = (node: PresentedNode) =>
  node.layout.shape === 'circle'
    ? Math.max(node.layout.width, node.layout.height) / 2
    : Math.hypot(node.layout.width, node.layout.height) / 2;

function requiredRingRadius(
  nodes: readonly PresentedNode[],
  angles: ReadonlyMap<string, number>,
  options: CircularLayoutOptions,
) {
  let required = 0;
  const angular = nodes
    .map((node) => ({ node, angle: angles.get(node.instanceId) ?? 0 }))
    .sort((a, b) => a.angle - b.angle);
  if (angular.length < 2) return required;
  angular.forEach((item, index) => {
    const next = angular[(index + 1) % angular.length]!;
    let delta = next.angle - item.angle;
    if (delta <= 0) delta += 2 * Math.PI;
    const chord = collisionRadius(item.node) + collisionRadius(next.node);
    required = Math.max(
      required,
      chord / (2 * Math.sin(Math.min(Math.PI / 2, Math.max(options.minimumAngularGap, delta) / 2))),
    );
  });
  return required;
}

export function layoutCircularTaxonomy(
  scene: PresentationScene,
  partial: Partial<CircularLayoutOptions> = {},
): PositionedScene {
  const options = {
    ...DEFAULT_CIRCULAR_LAYOUT,
    ...partial,
    center: { ...DEFAULT_CIRCULAR_LAYOUT.center, ...partial.center },
  };
  if (!scene.nodes.length)
    return {
      nodes: [],
      edges: [],
      bounds: {
        minX: options.center.x,
        minY: options.center.y,
        maxX: options.center.x,
        maxY: options.center.y,
        width: 0,
        height: 0,
      },
      ringRadii: [],
      warnings: scene.warnings,
    };
  const children = new Map<string, PresentedNode[]>();
  scene.nodes.forEach((node) => {
    if (node.parentInstanceId)
      children.set(node.parentInstanceId, [...(children.get(node.parentInstanceId) ?? []), node]);
  });
  children.forEach((values) =>
    values.sort(
      (a, b) => a.title.localeCompare(b.title) || a.instanceId.localeCompare(b.instanceId),
    ),
  );
  const root = scene.nodes.find((node) => node.parentInstanceId === null) ?? scene.nodes[0]!;
  const leaves: PresentedNode[] = [];
  const visit = (node: PresentedNode) => {
    const descendants = children.get(node.instanceId) ?? [];
    if (!descendants.length) leaves.push(node);
    else descendants.forEach(visit);
  };
  visit(root);
  const angleById = new Map<string, number>();
  const direction = options.clockwise ? 1 : -1;
  leaves.forEach((leaf, index) =>
    angleById.set(
      leaf.instanceId,
      options.startAngle + (direction * 2 * Math.PI * (index + 0.5)) / Math.max(1, leaves.length),
    ),
  );
  const resolveAngle = (node: PresentedNode): number => {
    const known = angleById.get(node.instanceId);
    if (known !== undefined) return known;
    const angles = (children.get(node.instanceId) ?? []).map(resolveAngle);
    const angle = angles.length
      ? Math.atan2(
          angles.reduce((sum, value) => sum + Math.sin(value), 0),
          angles.reduce((sum, value) => sum + Math.cos(value), 0),
        )
      : options.startAngle;
    angleById.set(node.instanceId, angle);
    return angle;
  };
  resolveAngle(root);
  const maxDepth = Math.max(...scene.nodes.map(({ depth }) => depth));
  const ringRadii = [options.rootRadius];
  for (let depth = 1; depth <= maxDepth; depth++) {
    const current = scene.nodes.filter((node) => node.depth === depth);
    const previous = scene.nodes.filter((node) => node.depth === depth - 1);
    const radialClearance =
      ringRadii[depth - 1]! +
      Math.max(0, ...previous.map(collisionRadius)) +
      Math.max(0, ...current.map(collisionRadius)) +
      options.minimumRingGap;
    const collisionClearance = requiredRingRadius(current, angleById, options);
    const policy = scene.radiusPolicy;
    let radius: number;
    if (policy.kind === 'fixed') {
      radius = policy.radii[depth - 1] ?? ringRadii[depth - 1]! + options.minimumRingGap;
    } else if (policy.kind === 'minimum') {
      const minimum = policy.radii[depth - 1] ?? radialClearance;
      radius = Math.min(
        minimum + Math.max(0, policy.maximumExpansion),
        Math.max(minimum, radialClearance, collisionClearance),
      );
    } else {
      const preferred = depth === 1 ? policy.initialRadius : ringRadii[depth - 1]! + policy.ringGap;
      radius = Math.max(preferred, radialClearance, collisionClearance);
    }
    ringRadii.push(radius);
  }
  const nodes: PositionedNode[] = scene.nodes.map((node) => {
    const angle = angleById.get(node.instanceId) ?? options.startAngle;
    const radius = ringRadii[node.depth] ?? ringRadii.at(-1) ?? 0;
    return {
      ...node,
      x: options.center.x + Math.cos(angle) * radius,
      y: options.center.y + Math.sin(angle) * radius,
      angle,
      radius,
      ringIndex: node.depth,
    };
  });
  const byId = new Map(nodes.map((node) => [node.instanceId, node]));
  const edges = scene.edges.flatMap((edge): PositionedEdge[] => {
    const parent = byId.get(edge.parentInstanceId),
      child = byId.get(edge.childInstanceId);
    return parent && child
      ? [{ ...edge, start: { x: parent.x, y: parent.y }, end: { x: child.x, y: child.y } }]
      : [];
  });
  const minX = Math.min(...nodes.map((node) => node.x - node.layout.width / 2));
  const minY = Math.min(...nodes.map((node) => node.y - node.layout.height / 2));
  const maxX = Math.max(...nodes.map((node) => node.x + node.layout.width / 2));
  const maxY = Math.max(...nodes.map((node) => node.y + node.layout.height / 2));
  const warnings = [...scene.warnings];
  if (scene.radiusPolicy.kind === 'fixed') {
    for (let depth = 1; depth <= maxDepth; depth++) {
      const required = requiredRingRadius(
        scene.nodes.filter((node) => node.depth === depth),
        angleById,
        options,
      );
      if (required > ringRadii[depth]! + 0.001)
        warnings.push({
          code: 'fixed-ring-overlap',
          message: `Ring ${depth} requires approximately ${Math.ceil(required)} units to avoid overlap; its fixed radius is ${ringRadii[depth]}.`,
        });
    }
  }
  return {
    nodes,
    edges,
    bounds: { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY },
    ringRadii,
    warnings,
  };
}
