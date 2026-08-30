import type {
  HierarchicalProjectionDefinition,
  HierarchyNodeMeasure,
  NumericRange,
} from '../../../taxonomy/public-api';

export interface EcologicalObservation {
  readonly id: string;
  readonly ecoregionId: string;
  readonly subjectTaxonId: string;
  readonly metric: 'biomass' | 'abundance' | 'cover' | 'density';
  readonly value?: number;
  readonly range?: NumericRange;
  readonly unit: string;
  readonly basis?: 'wet-mass' | 'dry-mass' | 'carbon-mass';
  readonly spatialExtent: string;
  readonly observedDuring: string;
  readonly method: string;
  readonly uncertainty?: NumericRange;
  readonly sourceIds: readonly string[];
}

/** No quantitative values are published for the pilot until compatible evidence is reviewed. */
export const ecologicalObservations: readonly EcologicalObservation[] = [];

const compatibilityKey = (observation: EcologicalObservation) =>
  [
    observation.metric,
    observation.unit,
    observation.basis ?? '',
    observation.spatialExtent,
    observation.observedDuring,
    observation.method,
  ].join('\u001f');

export function compatibleObservationTotal(
  observations: readonly EcologicalObservation[],
): { readonly value: number; readonly unit: string; readonly sourceIds: readonly string[] } | null {
  if (!observations.length || new Set(observations.map(compatibilityKey)).size !== 1) return null;
  if (observations.some(({ value }) => value === undefined)) return null;
  return {
    value: observations.reduce((total, observation) => total + observation.value!, 0),
    unit: observations[0]!.unit,
    sourceIds: [...new Set(observations.flatMap(({ sourceIds }) => sourceIds))],
  };
}

export function adaptEcologicalObservations(
  hierarchy: HierarchicalProjectionDefinition,
  observations: readonly EcologicalObservation[],
): readonly HierarchyNodeMeasure[] {
  const nodeByTaxonId = new Map(hierarchy.nodes.map((node) => [node.canonicalEntityId, node]));
  return observations.flatMap((observation) => {
    const node = nodeByTaxonId.get(observation.subjectTaxonId);
    if (!node) return [];
    const quantity =
      observation.value !== undefined
        ? `${observation.value} ${observation.unit}`
        : observation.range
          ? `${observation.range.min}â€“${observation.range.max} ${observation.unit}`
          : 'Not measured';
    return [
      {
        nodeId: node.id,
        metricId: observation.metric,
        value: observation.value,
        range: observation.range,
        unit: observation.unit,
        label: `${observation.metric}: ${quantity}`,
        sourceIds: observation.sourceIds,
      },
    ];
  });
}
