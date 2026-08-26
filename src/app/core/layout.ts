import { TaxonomyNode } from './taxonomy.model';
export interface SceneNode extends TaxonomyNode {
  x: number;
  y: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
  depth: number;
  angle: number;
  labelX: number;
  labelY: number;
  labelAnchor: 'start' | 'middle' | 'end';
  labelRotation: number;
}
export interface Connector {
  id: string;
  parentId: string;
  childId: string;
  path: string;
  family: string;
}
export interface Orbit {
  radius: number;
  kind: 'first' | 'second' | 'third' | 'style';
}
export interface Scene {
  nodes: readonly SceneNode[];
  connectors: readonly Connector[];
  orbits: readonly Orbit[];
  width: number;
  height: number;
  centerX: number;
  centerY: number;
}
const SIZE = 6200,
  CENTER = SIZE / 2,
  RADII = [0, 520, 1500, 2350, 2850];
const polar = (radius: number, angle: number) => {
  const r = (angle * Math.PI) / 180;
  return { x: CENTER + Math.cos(r) * radius, y: CENTER + Math.sin(r) * radius };
};
export function layoutTaxonomy(nodes: readonly TaxonomyNode[]): Scene {
  const children = new Map<string | null, TaxonomyNode[]>();
  for (const node of nodes)
    children.set(node.parentId, [...(children.get(node.parentId) ?? []), node]);
  for (const list of children.values())
    list.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
  const depths = new Map<string, number>(),
    angles = new Map<string, number>();
  const leaves: TaxonomyNode[] = [];
  const root = (children.get(null) ?? [])[0];
  const collect = (node: TaxonomyNode, depth: number) => {
    depths.set(node.id, depth);
    const kids = children.get(node.id) ?? [];
    if (!kids.length) {
      leaves.push(node);
      return;
    }
    kids.forEach((child) => collect(child, depth + 1));
  };
  if (root) collect(root, 0);
  leaves.forEach((leaf, index) => angles.set(leaf.id, -90 + (360 * (index + 0.5)) / leaves.length));
  const resolve = (node: TaxonomyNode): number => {
    const known = angles.get(node.id);
    if (known !== undefined) return known;
    const values = (children.get(node.id) ?? []).map(resolve);
    const x = values.reduce((sum, a) => sum + Math.cos((a * Math.PI) / 180), 0),
      y = values.reduce((sum, a) => sum + Math.sin((a * Math.PI) / 180), 0),
      angle = (Math.atan2(y, x) * 180) / Math.PI;
    angles.set(node.id, angle);
    return angle;
  };
  if (root) resolve(root);
  const placed = nodes.map((node) => {
    const depth = depths.get(node.id) ?? 0,
      angle = angles.get(node.id) ?? 0,
      radius = RADII[Math.min(depth, RADII.length - 1)],
      p = polar(radius, angle),
      width = depth === 0 ? 116 : depth === 4 ? 26 : 48,
      height = width,
      labelRadius = radius + (depth === 4 ? 44 : depth ? 62 : 0),
      lp = polar(labelRadius, angle),
      normalized = (angle + 360) % 360,
      left = normalized > 90 && normalized < 270;
    return {
      ...node,
      x: p.x - width / 2,
      y: p.y - height / 2,
      width,
      height,
      centerX: p.x,
      centerY: p.y,
      depth,
      angle,
      labelX: lp.x,
      labelY: lp.y,
      labelAnchor: (depth === 0 ? 'middle' : left ? 'end' : 'start') as 'start' | 'middle' | 'end',
      labelRotation: depth === 4 || depth === 3 ? (left ? angle + 180 : angle) : 0,
    };
  });
  const byId = new Map(placed.map((node) => [node.id, node]));
  const connectors = placed.flatMap((node): Connector[] => {
    if (!node.parentId) return [];
    const parent = byId.get(node.parentId)!;
    return [
      {
        id: `${parent.id}-${node.id}`,
        parentId: parent.id,
        childId: node.id,
        path: `M${parent.centerX},${parent.centerY} L${node.centerX},${node.centerY}`,
        family: node.family,
      },
    ];
  });
  return {
    nodes: placed,
    connectors,
    orbits: [
      { radius: RADII[1], kind: 'first' },
      { radius: RADII[2], kind: 'second' },
      { radius: RADII[3], kind: 'third' },
      { radius: RADII[4], kind: 'style' },
    ],
    width: SIZE,
    height: SIZE,
    centerX: CENTER,
    centerY: CENTER,
  };
}
