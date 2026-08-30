import lifecycleManifest from './biota-lifecycle.json';
import type { EcologicalObservation } from './ecological-observations';

export type BiologicalLifecycleState = 'unstarted' | 'draft' | 'reviewed' | 'published';
export type BiologicalDomain = 'flora' | 'fauna' | 'fungi' | 'microbiome';
export type BiologicalCoverageDepth = 'representative' | 'survey-derived' | 'extensive';
export type BiologicalEvidenceStatus =
  'ecoregion-account' | 'regional-survey' | 'host-association' | 'functional-evidence';

interface BiologicalRecordBase {
  readonly id: string;
  readonly lifecycle: BiologicalLifecycleState;
}

export interface CanonicalTaxonRecord extends BiologicalRecordBase {
  readonly kind: 'canonical-taxon';
  readonly entityKind: 'taxon' | 'functional-group';
  readonly title: string;
  readonly scientificName?: string;
  readonly domain: BiologicalDomain;
  readonly rank?: string;
  readonly parentTaxonIds: readonly string[];
  readonly summary: string;
  readonly sourceIds: readonly string[];
  readonly profileOwnerPartitionId: string;
}

export interface TaxonOccurrenceRecord extends BiologicalRecordBase {
  readonly kind: 'taxon-occurrence';
  readonly ecoregionId: string;
  readonly taxonId: string;
  readonly domain: BiologicalDomain;
  readonly evidenceStatus: BiologicalEvidenceStatus;
  readonly sourceIds: readonly string[];
  readonly ownerPartitionId: string;
}

export interface DomainCoverageRecord extends BiologicalRecordBase {
  readonly kind: 'domain-coverage';
  readonly ecoregionId: string;
  readonly domain: BiologicalDomain;
  readonly state: BiologicalLifecycleState;
  readonly depth: BiologicalCoverageDepth;
  readonly summary: string;
  readonly sourceIds: readonly string[];
}

export interface EcologicalObservationRecord extends EcologicalObservation, BiologicalRecordBase {
  readonly kind: 'ecological-observation';
  readonly occurrenceId: string;
  readonly ownerPartitionId: string;
}

export type BiologicalRecord =
  CanonicalTaxonRecord | TaxonOccurrenceRecord | DomainCoverageRecord | EcologicalObservationRecord;

type WithoutLifecycle<T extends BiologicalRecord> = Omit<T, 'lifecycle'>;
const lifecycle = lifecycleManifest as Readonly<Record<string, BiologicalLifecycleState>>;
const record = <T extends BiologicalRecord>(value: WithoutLifecycle<T>): T => {
  const state = lifecycle[value.id] ?? 'unstarted';
  return {
    ...value,
    lifecycle: state,
    ...(value.kind === 'domain-coverage' ? { state } : {}),
  } as T;
};

const flora302 = record<DomainCoverageRecord>({
  id: 'coverage:302:flora',
  kind: 'domain-coverage',
  ecoregionId: 'ecoregion:302',
  domain: 'flora',
  state: 'published',
  depth: 'representative',
  summary: 'Published records are representative characteristic taxa, not a complete flora.',
  sourceIds: ['one-earth-eco-302'],
});

const fauna302 = record<DomainCoverageRecord>({
  id: 'coverage:302:fauna',
  kind: 'domain-coverage',
  ecoregionId: 'ecoregion:302',
  domain: 'fauna',
  state: 'published',
  depth: 'representative',
  summary: 'Published records are representative characteristic taxa, not a complete fauna.',
  sourceIds: ['one-earth-eco-302'],
});

const fungi302 = record<DomainCoverageRecord>({
  id: 'coverage:302:fungi',
  kind: 'domain-coverage',
  ecoregionId: 'ecoregion:302',
  domain: 'fungi',
  state: 'published',
  depth: 'representative',
  summary: 'Published coverage is limited to a traceable host-associated functional guild and is not a fungal inventory.',
  sourceIds: ['nast-nepal-pine-ectomycorrhiza-1999'],
});

const microbiome302 = record<DomainCoverageRecord>({
  id: 'coverage:302:microbiome',
  kind: 'domain-coverage',
  ecoregionId: 'ecoregion:302',
  domain: 'microbiome',
  state: 'published',
  depth: 'representative',
  summary: 'Published coverage represents a supported microbial function; species-level completeness is not claimed.',
  sourceIds: ['pubmed-pinus-roxburghii-rhizosphere-2017'],
});

const flora615 = record<DomainCoverageRecord>({
  id: 'coverage:615:flora',
  kind: 'domain-coverage',
  ecoregionId: 'ecoregion:615',
  domain: 'flora',
  state: 'draft',
  depth: 'representative',
  summary: 'Published records represent characteristic mangrove taxa; not a complete flora of the ecoregion.',
  sourceIds: ['one-earth-eco-615'],
});

const fauna615 = record<DomainCoverageRecord>({
  id: 'coverage:615:fauna',
  kind: 'domain-coverage',
  ecoregionId: 'ecoregion:615',
  domain: 'fauna',
  state: 'draft',
  depth: 'representative',
  summary: 'Published records represent characteristic mangrove-associated fauna; not a complete fauna.',
  sourceIds: ['one-earth-eco-615'],
});

const fungi615 = record<DomainCoverageRecord>({
  id: 'coverage:615:fungi',
  kind: 'domain-coverage',
  ecoregionId: 'ecoregion:615',
  domain: 'fungi',
  state: 'draft',
  depth: 'representative',
  summary: 'Published coverage is limited to a traceable host-associated functional guild; not a fungal inventory.',
  sourceIds: ['one-earth-eco-615'],
});

const microbiome615 = record<DomainCoverageRecord>({
  id: 'coverage:615:microbiome',
  kind: 'domain-coverage',
  ecoregionId: 'ecoregion:615',
  domain: 'microbiome',
  state: 'draft',
  depth: 'representative',
  summary: 'Published coverage represents a supported microbial function in sediments; species-level completeness is not claimed.',
  sourceIds: ['one-earth-eco-615'],
});

export const domainCoverageRecords: readonly DomainCoverageRecord[] = [
  flora302,
  fauna302,
  fungi302,
  microbiome302,
  flora615,
  fauna615,
  fungi615,
  microbiome615,
];

export const canonicalTaxa: readonly CanonicalTaxonRecord[] = [
  record<CanonicalTaxonRecord>({
    id: 'species:chir-pine',
    kind: 'canonical-taxon',
    entityKind: 'taxon',
    title: 'Chir pine',
    scientificName: 'Pinus roxburghii',
    domain: 'flora',
    rank: 'species',
    parentTaxonIds: ['taxon:pinaceae'],
    summary: 'The dominant canopy tree and flagship species of Himalayan Subtropical Pine Forests.',
    sourceIds: ['one-earth-eco-302'],
    profileOwnerPartitionId: 'indomalaya',
  }),
  record<CanonicalTaxonRecord>({
    id: 'species:himalayan-goral',
    kind: 'canonical-taxon',
    entityKind: 'taxon',
    title: 'Himalayan goral',
    scientificName: 'Naemorhedus goral',
    domain: 'fauna',
    rank: 'species',
    parentTaxonIds: ['taxon:bovidae'],
    summary: 'Himalayan goral is documented in the published ecoregion account as characteristic fauna of the open chir-pine system.',
    sourceIds: ['one-earth-eco-302'],
    profileOwnerPartitionId: 'indomalaya',
  }),
  record<CanonicalTaxonRecord>({
    id: 'species:barking-deer',
    kind: 'canonical-taxon',
    entityKind: 'taxon',
    title: 'Barking deer',
    scientificName: 'Muntiacus muntjak',
    domain: 'fauna',
    rank: 'species',
    parentTaxonIds: ['taxon:cervidae'],
    summary: 'Barking deer is documented in the published ecoregion account as characteristic fauna of the open chir-pine system.',
    sourceIds: ['one-earth-eco-302'],
    profileOwnerPartitionId: 'indomalaya',
  }),
  record<CanonicalTaxonRecord>({
    id: 'species:yellow-throated-marten',
    kind: 'canonical-taxon',
    entityKind: 'taxon',
    title: 'Yellow-throated marten',
    scientificName: 'Martes flavigula',
    domain: 'fauna',
    rank: 'species',
    parentTaxonIds: ['taxon:mustelidae'],
    summary: 'Yellow-throated marten is documented in the published ecoregion account as characteristic fauna of the open chir-pine system.',
    sourceIds: ['one-earth-eco-302'],
    profileOwnerPartitionId: 'indomalaya',
  }),
  record<CanonicalTaxonRecord>({
    id: 'functional-group:ectomycorrhizal-fungi',
    kind: 'canonical-taxon',
    entityKind: 'functional-group',
    title: 'Ectomycorrhizal fungi',
    domain: 'fungi',
    parentTaxonIds: [],
    summary: 'A host-associated fungal guild documented from pine forests of Nepal; this record does not claim a complete fungal inventory or a single defining species.',
    sourceIds: ['nast-nepal-pine-ectomycorrhiza-1999'],
    profileOwnerPartitionId: 'indomalaya',
  }),
  record<CanonicalTaxonRecord>({
    id: 'functional-group:nitrogen-cycling-rhizosphere-bacteria',
    kind: 'canonical-taxon',
    entityKind: 'functional-group',
    title: 'Nitrogen-cycling rhizosphere bacteria',
    domain: 'microbiome',
    parentTaxonIds: [],
    summary: 'A functional rhizosphere group supported by 16S rRNA and nifH evidence from chir-pine roots; species-level inventory is intentionally not inferred.',
    sourceIds: ['pubmed-pinus-roxburghii-rhizosphere-2017'],
    profileOwnerPartitionId: 'indomalaya',
  }),
  // Ecoregion 615: South American Pacific Mangroves
  record<CanonicalTaxonRecord>({
    id: 'species:red-mangrove',
    kind: 'canonical-taxon',
    entityKind: 'taxon',
    title: 'Red mangrove',
    scientificName: 'Rhizophora mangle',
    domain: 'flora',
    rank: 'species',
    parentTaxonIds: ['taxon:rhizophoraceae'],
    summary: 'The most widespread and seaward mangrove species in the Neotropics, forming the primary fringe of Pacific coast mangrove forests from Central America to northern Peru.',
    sourceIds: ['one-earth-eco-615'],
    profileOwnerPartitionId: 'southern-america',
  }),
  record<CanonicalTaxonRecord>({
    id: 'species:black-mangrove',
    kind: 'canonical-taxon',
    entityKind: 'taxon',
    title: 'Black mangrove',
    scientificName: 'Avicennia germinans',
    domain: 'flora',
    rank: 'species',
    parentTaxonIds: ['taxon:acanthaceae'],
    summary: 'A salt-tolerant mangrove species occupying the landward edge of mangrove stands, with pneumatophores for root aeration in anaerobic soils.',
    sourceIds: ['one-earth-eco-615'],
    profileOwnerPartitionId: 'southern-america',
  }),
  record<CanonicalTaxonRecord>({
    id: 'species:white-mangrove',
    kind: 'canonical-taxon',
    entityKind: 'taxon',
    title: 'White mangrove',
    scientificName: 'Laguncularia racemosa',
    domain: 'flora',
    rank: 'species',
    parentTaxonIds: ['taxon:combretaceae'],
    summary: 'A mangrove species of the upper intertidal zone, often found at the landward margin with button mangrove, lacking prominent aerial roots.',
    sourceIds: ['one-earth-eco-615'],
    profileOwnerPartitionId: 'southern-america',
  }),
  record<CanonicalTaxonRecord>({
    id: 'species:button-mangrove',
    kind: 'canonical-taxon',
    entityKind: 'taxon',
    title: 'Button mangrove',
    scientificName: 'Conocarpus erectus',
    domain: 'flora',
    rank: 'species',
    parentTaxonIds: ['taxon:combretaceae'],
    summary: 'A mangrove associate of the landward fringe, often on slightly elevated ground with button-like fruit clusters; sometimes classified as a mangrove associate rather than a true mangrove.',
    sourceIds: ['one-earth-eco-615'],
    profileOwnerPartitionId: 'southern-america',
  }),
  record<CanonicalTaxonRecord>({
    id: 'species:mangrove-warbler',
    kind: 'canonical-taxon',
    entityKind: 'taxon',
    title: 'Mangrove warbler',
    scientificName: 'Setophaga petechia erithachorides',
    domain: 'fauna',
    rank: 'subspecies',
    parentTaxonIds: ['taxon:parulidae'],
    summary: 'A mangrove-specialist subspecies of the yellow warbler, resident in Neotropical mangrove forests from Mexico to northern South America.',
    sourceIds: ['one-earth-eco-615'],
    profileOwnerPartitionId: 'southern-america',
  }),
  record<CanonicalTaxonRecord>({
    id: 'species:american-crocodile',
    kind: 'canonical-taxon',
    entityKind: 'taxon',
    title: 'American crocodile',
    scientificName: 'Crocodylus acutus',
    domain: 'fauna',
    rank: 'species',
    parentTaxonIds: ['taxon:crocodylidae'],
    summary: 'A coastal crocodilian of mangrove estuaries and lagoons from southern Florida to northern Peru; a top predator in mangrove food webs.',
    sourceIds: ['one-earth-eco-615'],
    profileOwnerPartitionId: 'southern-america',
  }),
  record<CanonicalTaxonRecord>({
    id: 'functional-group:mangrove-ectomycorrhizal-fungi',
    kind: 'canonical-taxon',
    entityKind: 'functional-group',
    title: 'Mangrove ectomycorrhizal fungi',
    domain: 'fungi',
    parentTaxonIds: [],
    summary: 'A functional fungal guild forming ectomycorrhizal associations with mangrove roots; documented from Pacific coast mangroves but species-level diversity is not fully inventoried.',
    sourceIds: ['one-earth-eco-615'],
    profileOwnerPartitionId: 'southern-america',
  }),
  record<CanonicalTaxonRecord>({
    id: 'functional-group:mangrove-sediment-bacteria',
    kind: 'canonical-taxon',
    entityKind: 'functional-group',
    title: 'Mangrove sediment sulfate-reducing bacteria',
    domain: 'microbiome',
    parentTaxonIds: [],
    summary: 'A functional microbiome group mediating sulfate reduction in mangrove sediments; supported by biogeochemical evidence but species-level taxonomy is not claimed.',
    sourceIds: ['one-earth-eco-615'],
    profileOwnerPartitionId: 'southern-america',
  }),
];

const indomalayaTaxa = canonicalTaxa.filter((t) => t.profileOwnerPartitionId === 'indomalaya');
const southernAmericaTaxa = canonicalTaxa.filter((t) => t.profileOwnerPartitionId === 'southern-america');

export const taxonOccurrences: readonly TaxonOccurrenceRecord[] = [
  ...indomalayaTaxa.map((taxon) =>
    record<TaxonOccurrenceRecord>({
      id: `occurrence:302:${taxon.id}`,
      kind: 'taxon-occurrence',
      ecoregionId: 'ecoregion:302',
      taxonId: taxon.id,
      domain: taxon.domain,
      evidenceStatus:
        taxon.domain === 'fungi'
          ? 'host-association'
          : taxon.domain === 'microbiome'
            ? 'functional-evidence'
            : 'ecoregion-account',
      sourceIds: taxon.sourceIds,
      ownerPartitionId: 'indomalaya',
    }),
  ),
  ...southernAmericaTaxa.map((taxon) =>
    record<TaxonOccurrenceRecord>({
      id: `occurrence:615:${taxon.id}`,
      kind: 'taxon-occurrence',
      ecoregionId: 'ecoregion:615',
      taxonId: taxon.id,
      domain: taxon.domain,
      evidenceStatus:
        taxon.domain === 'fungi'
          ? 'host-association'
          : taxon.domain === 'microbiome'
            ? 'functional-evidence'
            : 'ecoregion-account',
      sourceIds: taxon.sourceIds,
      ownerPartitionId: 'southern-america',
    }),
  ),
];

export const biologicalRecords: readonly BiologicalRecord[] = [
  ...canonicalTaxa,
  ...taxonOccurrences,
  ...domainCoverageRecords,
];