import type { RingRadiusPolicy } from '../contracts/taxonomy';
import type { ProjectedScene } from '../projection/project-taxonomy';
import type { PresentationScene } from './presentation-scene';
import { DEFAULT_PRESENTATION_TOKENS } from './resolve-presentation-scene';

const PALETTE = [
  'route-0',
  'route-1',
  'route-2',
  'route-3',
  'route-4',
  'route-5',
  'route-6',
  'route-7',
];

export function resolveHierarchyPresentationScene(
  projected: ProjectedScene,
  radiusPolicy: RingRadiusPolicy = { kind: 'adaptive', initialRadius: 190, ringGap: 190 },
): PresentationScene {
  const branches = [...new Set(projected.nodes.flatMap((node) => node.path.slice(1, 2)))].sort();
  const visualToken = (path: readonly string[]) => {
    const branch = path[1];
    return branch ? PALETTE[Math.max(0, branches.indexOf(branch)) % PALETTE.length]! : 'root';
  };
  const nodes = projected.nodes.map((node) => ({
    instanceId: node.instanceId,
    entityId: node.entityId,
    kind: node.entityType,
    parentInstanceId: node.parentInstanceId,
    path: node.path,
    depth: node.depth,
    title: node.title,
    subtitle:
      node.coverage && node.coverage !== 'published'
        ? `Coverage: ${node.coverage}`
        : node.hiddenDescendantCount
          ? `${node.hiddenDescendantCount} hidden descendants`
          : undefined,
    ariaLabel: [
      node.title,
      node.entityType === 'aggregate'
        ? `${node.hiddenDescendantCount ?? 0} hidden descendants`
        : '',
      node.expandable ? 'expandable' : '',
    ]
      .filter(Boolean)
      .join(', '),
    badges: [],
    visualToken: visualToken(node.path),
    labelOrientation: 'radial' as const,
    layout:
      node.entityType === 'root'
        ? DEFAULT_PRESENTATION_TOKENS.root
        : node.entityType === 'aggregate'
          ? {
              ...DEFAULT_PRESENTATION_TOKENS.group,
              shape: 'circle' as const,
              width: 54,
              height: 54,
            }
          : { ...DEFAULT_PRESENTATION_TOKENS.dimensionValue, width: 34, height: 34 },
  }));
  return {
    nodes,
    edges: nodes.flatMap((node) =>
      node.parentInstanceId
        ? [
            {
              id: `${node.parentInstanceId}->${node.instanceId}`,
              parentInstanceId: node.parentInstanceId,
              childInstanceId: node.instanceId,
              visualToken: node.visualToken,
            },
          ]
        : [],
    ),
    legend: [],
    radiusPolicy,
    warnings: projected.warnings,
  };
}
