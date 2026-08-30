import type {
  HierarchyNodeMeasure,
  NodeMeasureEncoding,
  ProjectedNodeMeasure,
} from '../contracts/taxonomy';
import type { ProjectedScene } from './project-taxonomy';

export interface ResolvedNodeMeasure {
  readonly measure: ProjectedNodeMeasure;
  readonly appearance: NodeMeasureEncoding['appearance'];
  readonly sizeScale: number;
  readonly hidden: boolean;
}

const numericValue = (measure: HierarchyNodeMeasure): number | undefined =>
  measure.value ?? (measure.range ? (measure.range.min + measure.range.max) / 2 : undefined);

export function projectNodeMeasures(input: {
  readonly scene: ProjectedScene;
  readonly measures: readonly HierarchyNodeMeasure[];
  readonly encodings: readonly NodeMeasureEncoding[];
}): ReadonlyMap<string, readonly ResolvedNodeMeasure[]> {
  const encodingByMetric = new Map(
    input.encodings.map((encoding) => [encoding.metricId, encoding]),
  );
  const valuesByMetric = new Map<string, number[]>();
  input.measures.forEach((measure) => {
    const value = numericValue(measure);
    if (value !== undefined && Number.isFinite(value) && value >= 0)
      valuesByMetric.set(measure.metricId, [
        ...(valuesByMetric.get(measure.metricId) ?? []),
        value,
      ]);
  });
  const maximumByMetric = new Map(
    [...valuesByMetric].map(([metricId, values]) => [metricId, Math.max(...values, 0)]),
  );
  const result = new Map<string, ResolvedNodeMeasure[]>();
  for (const measure of input.measures) {
    const encoding = encodingByMetric.get(measure.metricId);
    if (!encoding) continue;
    const value = numericValue(measure);
    const maximum = maximumByMetric.get(measure.metricId) ?? 0;
    const normalized = value === undefined || maximum <= 0 ? undefined : value / maximum;
    const scaled =
      normalized === undefined
        ? undefined
        : encoding.scale === 'logarithmic'
          ? Math.log1p(normalized * 9) / Math.log(10)
          : encoding.scale === 'square-root'
            ? Math.sqrt(normalized)
            : normalized;
    const sizeScale =
      encoding.appearance === 'area' && scaled !== undefined ? 0.75 + scaled * 1.25 : 1;
    for (const node of input.scene.nodes.filter(
      ({ sourceNodeId }) => sourceNodeId === measure.nodeId,
    )) {
      const projected: ProjectedNodeMeasure = {
        instanceId: node.instanceId,
        metricId: measure.metricId,
        value: measure.value,
        range: measure.range,
        unit: measure.unit,
        label: measure.label,
        sourceIds: measure.sourceIds,
      };
      result.set(node.instanceId, [
        ...(result.get(node.instanceId) ?? []),
        {
          measure: projected,
          appearance: encoding.appearance,
          sizeScale,
          hidden: normalized === undefined && encoding.missingValue === 'hidden',
        },
      ]);
    }
  }
  return result;
}
