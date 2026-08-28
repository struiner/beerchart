import {
  RelatedEntity,
  TaxonomyDimension,
  TaxonomyEntry,
  TaxonomyModule,
} from '../contracts/taxonomy';
import { TaxonomyIndexes } from '../indexes/create-taxonomy-indexes';

export type ProjectedEntityType = 'root' | 'group' | 'dimension-value' | 'entry';

export interface ProjectedNode {
  readonly instanceId: string;
  readonly entityType: ProjectedEntityType;
  readonly entityId: string;
  readonly title: string;
  readonly parentInstanceId: string | null;
  readonly path: readonly string[];
  readonly depth: number;
}

export interface ProjectionWarning {
  readonly code: string;
  readonly message: string;
  readonly entityId?: string;
}

export interface ProjectedScene {
  readonly root: ProjectedNode;
  readonly nodes: readonly ProjectedNode[];
  readonly instancesByEntityId: ReadonlyMap<string, readonly string[]>;
  readonly warnings: readonly ProjectionWarning[];
}

const segment = (value: string) => encodeURIComponent(value).replaceAll('%', '~');

export function projectTaxonomy<
  TEntry extends TaxonomyEntry,
  TRelated extends RelatedEntity,
>(input: {
  readonly module: TaxonomyModule<TEntry, TRelated>;
  readonly indexes: TaxonomyIndexes<TEntry, TRelated>;
  readonly includedEntryIds: ReadonlySet<string>;
  readonly ringOrder: readonly string[];
  readonly context?: { readonly locale: string };
}): ProjectedScene {
  void input.indexes;
  const context = input.context ?? { locale: 'en' };
  const warnings: ProjectionWarning[] = [];
  const nodes: ProjectedNode[] = [];
  const instancesByEntityId = new Map<string, string[]>();
  const root: ProjectedNode = {
    instanceId: 'root',
    entityType: 'root',
    entityId: input.module.meta.id,
    title: input.module.vocabulary.root,
    parentInstanceId: null,
    path: [],
    depth: 0,
  };
  nodes.push(root);
  const dimensionById = new Map(
    input.module.interpretation.dimensions.map((dimension) => [dimension.id, dimension]),
  );
  const dimensions = input.ringOrder
    .map((id) => dimensionById.get(id))
    .filter((dimension): dimension is TaxonomyDimension<TEntry> => dimension !== undefined);
  if (dimensions.length !== input.ringOrder.length) {
    warnings.push({
      code: 'unknown-dimension',
      message: 'One or more requested dimensions do not exist.',
    });
  }

  const addInstance = (node: ProjectedNode) => {
    nodes.push(node);
    instancesByEntityId.set(node.entityId, [
      ...(instancesByEntityId.get(node.entityId) ?? []),
      node.instanceId,
    ]);
  };
  const valuesFor = (entry: TEntry, dimension: TaxonomyDimension<TEntry>) => {
    const values = dimension.values(entry, context);
    if (!values.length) {
      if (dimension.missingValuePolicy === 'reject')
        warnings.push({
          code: 'missing-dimension-value',
          message: `Missing ${dimension.label}.`,
          entityId: entry.id,
        });
      return dimension.missingValuePolicy === 'unknown-bucket'
        ? [{ id: 'unknown', label: 'Unknown' }]
        : [];
    }
    if (values.length > 1 && dimension.cardinality === 'single') {
      warnings.push({
        code: 'invalid-cardinality',
        message: `${dimension.label} returned multiple values.`,
        entityId: entry.id,
      });
    }
    if (values.length <= 1 || dimension.multipleValuePolicy === 'duplicate-instance') return values;
    if (dimension.multipleValuePolicy === 'aggregate')
      return [
        {
          id: values
            .map(({ id }) => id)
            .sort()
            .join('+'),
          label: values.map(({ label }) => label).join(' + '),
        },
      ];
    if (dimension.multipleValuePolicy === 'reject') {
      warnings.push({
        code: 'multiple-values-rejected',
        message: `${dimension.label} returned multiple values.`,
        entityId: entry.id,
      });
      return [];
    }
    return values.slice(0, 1);
  };

  for (const entry of input.module.records.entries) {
    if (!input.includedEntryIds.has(entry.id)) continue;
    let paths: { ids: string[]; labels: string[] }[] = [{ ids: [], labels: [] }];
    for (const dimension of dimensions) {
      const values = valuesFor(entry, dimension);
      paths = paths.flatMap((path) =>
        values.map((value) => ({
          ids: [...path.ids, `${dimension.id}:${value.id}`],
          labels: [...path.labels, value.label],
        })),
      );
    }
    for (const path of paths) {
      let parentInstanceId = root.instanceId;
      path.ids.forEach((id, index) => {
        const partial = path.ids.slice(0, index + 1);
        const instanceId = `dimension@${partial.map(segment).join('/')}`;
        if (!nodes.some((node) => node.instanceId === instanceId))
          addInstance({
            instanceId,
            entityType: 'dimension-value',
            entityId: id,
            title: path.labels[index] ?? id,
            parentInstanceId,
            path: partial,
            depth: index + 1,
          });
        parentInstanceId = instanceId;
      });
      addInstance({
        instanceId: `${segment(entry.id)}@${path.ids.map(segment).join('/')}`,
        entityType: 'entry',
        entityId: entry.id,
        title: entry.title,
        parentInstanceId,
        path: path.ids,
        depth: path.ids.length + 1,
      });
    }
  }
  const maximum = input.module.interpretation.projection.maximumProjectedInstances;
  if (maximum !== undefined && nodes.length > maximum)
    throw new Error(`Projection produced ${nodes.length} instances; maximum is ${maximum}.`);
  return { root, nodes, instancesByEntityId, warnings };
}
