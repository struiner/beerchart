import type {
  DashboardMediaDefinition,
  ProfileSectionViewModel,
  TaxonomyContentBundle,
} from '../../../taxonomy/public-api';
import { bioregionEnrichment } from '../enrichment/bioregions';
import { ecologicalCountries } from '../enrichment/countries';
import type { EcologicalEnrichment } from '../enrichment/ecological-enrichment';
import { enrichmentCoverage } from '../enrichment/coverage-manifest';
import { ecoregionEnrichment } from '../enrichment/ecoregions';
import { realmEnrichment } from '../enrichment/realms';
import { ecologicalSpecies } from '../enrichment/species';
import { livingCompositions } from '../enrichment/living-compositions';
import { canonicalTaxa, taxonOccurrences } from '../enrichment/biota';
import { subrealmEnrichment } from '../enrichment/subrealms';
import { ecoregionSourceById } from '../source/source-registry';
import { ecoregionPartitionByTargetId } from './partition-ownership.generated';

const allRecords = [
  ...realmEnrichment,
  ...subrealmEnrichment,
  ...bioregionEnrichment,
  ...ecoregionEnrichment,
];
const approved = (targetId: string) => {
  const state = enrichmentCoverage[targetId];
  return state === 'reviewed' || state === 'published';
};
const sourceReferences = (ids: readonly string[]) =>
  ids.flatMap((id) => {
    const source = ecoregionSourceById.get(id);
    return source ? [source] : [];
  });
const listFact = (
  id: string,
  label: string,
  sourced?: { value: readonly string[]; sourceIds: readonly string[] },
) =>
  sourced ? [{ id, label, value: sourced.value.join('; '), sourceIds: sourced.sourceIds }] : [];

const sectionsFor = (enrichment: EcologicalEnrichment): readonly ProfileSectionViewModel[] => {
  const climate = enrichment.climate;
  const climateValue = climate
    ? [
        climate.value.character,
        climate.value.annualPrecipitationMm
          ? `${climate.value.annualPrecipitationMm.min}–${climate.value.annualPrecipitationMm.max} mm annual precipitation`
          : '',
        climate.value.temperatureC
          ? `${climate.value.temperatureC.min}–${climate.value.temperatureC.max} °C`
          : '',
      ]
        .filter(Boolean)
        .join('; ')
    : '';
  const species = ecologicalSpecies.filter((item) =>
    enrichment.characteristicSpeciesIds?.includes(item.id),
  );
  const countries = ecologicalCountries.filter((item) => enrichment.countryIds?.includes(item.id));
  return [
    ...(enrichment.summary
      ? [
          {
            kind: 'markdown' as const,
            id: 'summary',
            title: 'Overview',
            markdown: enrichment.summary.value,
          },
        ]
      : []),
    {
      kind: 'facts',
      id: 'ecology',
      title: 'Ecological character',
      facts: [
        ...listFact('landscape', 'Landscape', enrichment.landscape),
        ...(climate
          ? [{ id: 'climate', label: 'Climate', value: climateValue, sourceIds: climate.sourceIds }]
          : []),
        ...listFact('vegetation', 'Vegetation', enrichment.vegetation),
        ...listFact('processes', 'Ecological processes', enrichment.ecologicalProcesses),
        ...(enrichment.conservationContext
          ? [
              {
                id: 'conservation',
                label: 'Conservation context',
                value: enrichment.conservationContext.value,
                sourceIds: enrichment.conservationContext.sourceIds,
              },
            ]
          : []),
      ],
    },
    ...(species.length || countries.length
      ? [
          {
            kind: 'related-entities' as const,
            id: 'ecological-references',
            title: 'Characteristic species and countries',
            items: [
              ...species.map((item) => ({
                id: item.id,
                title: item.commonName,
                subtitle: item.scientificName,
                description: item.scientificName,
              })),
              ...countries.map((item) => ({
                id: `country:${item.id}`,
                title: item.name,
                subtitle: item.code,
                description: `ISO 3166-1 alpha-2: ${item.code}`,
              })),
            ],
          },
        ]
      : []),
    {
      kind: 'sources',
      id: 'enrichment-sources',
      title: 'Enrichment sources',
      sources: sourceReferences(enrichment.sources),
    },
  ];
};

const approvedMedia: Readonly<Record<string, DashboardMediaDefinition>> = {
  'ecoregion:418': {
    src: '/assets/ecoregions/ecoregion-418.webp',
    alt: 'Interpretive comic-style view across treeless Arctic tundra, braided water, low vegetation, and distant mountains beneath a broad blue sky.',
    caption: 'An interpretive landscape impression of Kalaallit Nunaat High Arctic Tundra.',
    role: 'interpretive',
    aspectRatio: '10:13',
    focalPoint: { x: 0.5, y: 0.43 },
  },
};

export function buildEcoregionPartition(partitionId: string): TaxonomyContentBundle {
  const records = allRecords.filter(
    (record) =>
      approved(record.targetId) && ecoregionPartitionByTargetId[record.targetId] === partitionId,
  );
  const enrichmentProfileExtensions = Object.fromEntries(
    records.map((record) => [record.targetId, sectionsFor(record)]),
  );
  const canonicalProfileExtensions = Object.fromEntries(
    canonicalTaxa
      .filter(
        ({ lifecycle, profileOwnerPartitionId }) =>
          lifecycle === 'published' && profileOwnerPartitionId === partitionId,
      )
      .map((taxon) => [
        taxon.id,
        [
          {
            kind: 'markdown' as const,
            id: 'canonical-summary',
            title: taxon.entityKind === 'functional-group' ? 'Functional profile' : 'Taxon profile',
            markdown: taxon.summary,
          },
          {
            kind: 'sources' as const,
            id: 'canonical-sources',
            title: 'Evidence sources',
            sources: sourceReferences(taxon.sourceIds),
          },
        ],
      ]),
  );
  const profileExtensions = {
    ...enrichmentProfileExtensions,
    ...canonicalProfileExtensions,
  };
  const media = Object.fromEntries(
    Object.entries(approvedMedia).filter(
      ([targetId]) => ecoregionPartitionByTargetId[targetId] === partitionId,
    ),
  );
  const compositions = Object.fromEntries(
    livingCompositions
      .filter(({ ecoregionId }) => ecoregionPartitionByTargetId[ecoregionId] === partitionId)
      .map((composition) => [composition.ecoregionId, composition]),
  );
  const partitionCompositions = livingCompositions.filter(
    ({ ecoregionId }) => ecoregionPartitionByTargetId[ecoregionId] === partitionId,
  );
  const relatedEntities = canonicalTaxa
    .filter(
      ({ lifecycle, profileOwnerPartitionId }) =>
        lifecycle === 'published' && profileOwnerPartitionId === partitionId,
    )
    .map((taxon) => ({
      id: taxon.id,
      title: taxon.title,
      description: taxon.scientificName ?? taxon.summary,
      linkedEntryIds: taxonOccurrences
        .filter(({ lifecycle, taxonId }) => lifecycle === 'published' && taxonId === taxon.id)
        .map(({ ecoregionId }) => ecoregionId),
    }));
  return {
    profileExtensions,
    media,
    ...(Object.keys(compositions).length ? { livingCompositions: compositions } : {}),
    ...(relatedEntities.length ? { relatedEntities } : {}),
  };
}
