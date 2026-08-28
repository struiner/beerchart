import { RelatedEntity, TaxonomyEntry, TaxonomyModule, TileViewModel } from '../contracts/taxonomy';
import { ProjectedScene } from '../projection/project-taxonomy';
import { PresentationLayoutToken, PresentationScene } from './presentation-scene';

export interface PresentationTokens {
  readonly root: PresentationLayoutToken;
  readonly group: PresentationLayoutToken;
  readonly dimensionValue: PresentationLayoutToken;
  readonly entry: PresentationLayoutToken;
}

export const DEFAULT_PRESENTATION_TOKENS: PresentationTokens = {
  root: { shape: 'circle', width: 116, height: 116, priority: 100 },
  group: { shape: 'tile', width: 132, height: 64, priority: 80 },
  dimensionValue: { shape: 'circle', width: 48, height: 48, priority: 60 },
  entry: { shape: 'circle', width: 22, height: 22, priority: 40 },
};

export function resolvePresentationScene<
  TEntry extends TaxonomyEntry,
  TRelated extends RelatedEntity,
>(input: {
  readonly module: TaxonomyModule<TEntry, TRelated>;
  readonly projected: ProjectedScene;
  readonly tokens?: Partial<PresentationTokens>;
}): PresentationScene {
  const tokens = { ...DEFAULT_PRESENTATION_TOKENS, ...input.tokens };
  const layout = input.module.presentation.layout;
  const configuredMetrics = layout?.stationMetrics;
  const metric = (kind: keyof PresentationTokens, depth: number): PresentationLayoutToken => ({
    ...tokens[kind],
    ...configuredMetrics?.[kind],
    ...(kind === 'dimensionValue' ? configuredMetrics?.dimensionValueByDepth?.[depth] : undefined),
  });
  const entries = new Map(input.module.records.entries.map((entry) => [entry.id, entry]));
  const primaryBranches = [
    ...new Set(input.projected.nodes.flatMap((node) => node.path.slice(0, 1))),
  ].sort((left, right) => left.localeCompare(right));
  const branchToken = (path: readonly string[]) => {
    const index = path[0] ? primaryBranches.indexOf(path[0]) : -1;
    if (index < 0) return 'root';
    const key = path[0]!;
    const valueId = key.includes(':') ? key.slice(key.indexOf(':') + 1) : key;
    const configured = layout?.branchColors?.[key] ?? layout?.branchColors?.[valueId];
    return configured?.toLowerCase().replace(/[^a-z0-9_-]+/g, '-') || `route-${index % 8}`;
  };
  const toTile = (entityId: string): TileViewModel | undefined => {
    const entry = entries.get(entityId);
    return entry ? input.module.presentation.entryTile(entry) : undefined;
  };
  const nodes = input.projected.nodes.map((node) => {
    const tile = toTile(node.entityId);
    const kindToken = node.entityType === 'dimension-value' ? 'dimensionValue' : node.entityType;
    return {
      instanceId: node.instanceId,
      entityId: node.entityId,
      kind: node.entityType,
      parentInstanceId: node.parentInstanceId,
      path: node.path,
      depth: node.depth,
      title: tile?.title ?? node.title,
      subtitle: tile?.subtitle,
      description: tile?.description,
      ariaLabel: [tile?.title ?? node.title, node.entityType.replace('-', ' ')].join(', '),
      icon: tile?.icon,
      badges: tile?.badges ?? [],
      visualToken: branchToken(node.path),
      labelOrientation: layout?.labelOrientation ?? 'auto',
      layout: metric(kindToken, node.depth),
    };
  });
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
    radiusPolicy: layout?.radiusPolicy ?? {
      kind: 'adaptive',
      initialRadius: 360,
      ringGap: 420,
    },
    warnings: input.projected.warnings,
  };
}
