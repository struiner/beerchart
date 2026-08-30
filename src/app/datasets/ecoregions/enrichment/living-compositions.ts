import type { LivingCompositionContent } from '../../../taxonomy/public-api';
import { adaptEcologicalObservations, ecologicalObservations } from './ecological-observations';
import { domainCoverageRecords, taxonOccurrences } from './biota';

const coverageFor = (domain: 'flora' | 'fauna' | 'fungi' | 'microbiome') =>
  domainCoverageRecords.find(
    (record) => record.ecoregionId === 'ecoregion:302' && record.domain === domain,
  )?.state ?? 'unstarted';

/**
 * First reviewed biological pilot. Empty domain branches describe editorial coverage,
 * never ecological absence. Detailed records remain partition content.
 */
const himalayanPineComposition: LivingCompositionContent = {
  ecoregionId: 'ecoregion:302',
  coverage: Object.fromEntries(
    domainCoverageRecords
      .filter(({ ecoregionId }) => ecoregionId === 'ecoregion:302')
      .map(({ domain, state }) => [domain, state]),
  ),
  hierarchy: {
    kind: 'hierarchical',
    rootEntityId: 'ecoregion:302',
    nodes: [
      {
        id: 'eco-302',
        canonicalEntityId: 'ecoregion:302',
        kind: 'ecoregion',
        label: 'Himalayan Subtropical Pine Forests',
      },
      {
        id: 'flora',
        canonicalEntityId: 'domain:flora',
        kind: 'domain',
        label: 'Flora',
        attributes: { coverage: coverageFor('flora') },
      },
      {
        id: 'fauna',
        canonicalEntityId: 'domain:fauna',
        kind: 'domain',
        label: 'Fauna',
        attributes: { coverage: coverageFor('fauna') },
      },
      {
        id: 'fungi',
        canonicalEntityId: 'domain:fungi',
        kind: 'domain',
        label: 'Fungi',
        attributes: { coverage: coverageFor('fungi') },
      },
      {
        id: 'microbiome',
        canonicalEntityId: 'domain:microbiome',
        kind: 'domain',
        label: 'Microbiome',
        attributes: { coverage: coverageFor('microbiome') },
      },
      {
        id: 'pinophyta',
        canonicalEntityId: 'taxon:pinophyta',
        kind: 'division',
        label: 'Pinophyta',
      },
      { id: 'chordata', canonicalEntityId: 'taxon:chordata', kind: 'phylum', label: 'Chordata' },
      { id: 'pinaceae', canonicalEntityId: 'taxon:pinaceae', kind: 'family', label: 'Pinaceae' },
      { id: 'bovidae', canonicalEntityId: 'taxon:bovidae', kind: 'family', label: 'Bovidae' },
      { id: 'cervidae', canonicalEntityId: 'taxon:cervidae', kind: 'family', label: 'Cervidae' },
      {
        id: 'mustelidae',
        canonicalEntityId: 'taxon:mustelidae',
        kind: 'family',
        label: 'Mustelidae',
      },
      {
        id: 'chir-pine',
        canonicalEntityId: 'species:chir-pine',
        kind: 'species',
        label: 'Chir pine',
      },
      {
        id: 'himalayan-goral',
        canonicalEntityId: 'species:himalayan-goral',
        kind: 'species',
        label: 'Himalayan goral',
      },
      {
        id: 'barking-deer',
        canonicalEntityId: 'species:barking-deer',
        kind: 'species',
        label: 'Barking deer',
      },
      {
        id: 'yellow-throated-marten',
        canonicalEntityId: 'species:yellow-throated-marten',
        kind: 'species',
        label: 'Yellow-throated marten',
      },
      {
        id: 'ectomycorrhizal-fungi',
        canonicalEntityId: 'functional-group:ectomycorrhizal-fungi',
        kind: 'functional-group',
        label: 'Ectomycorrhizal fungi',
      },
      {
        id: 'bacteria',
        canonicalEntityId: 'taxon:bacteria',
        kind: 'phylum',
        label: 'Bacteria',
      },
      {
        id: 'nitrogen-cycling-rhizosphere-bacteria',
        canonicalEntityId: 'functional-group:nitrogen-cycling-rhizosphere-bacteria',
        kind: 'functional-group',
        label: 'Nitrogen-cycling rhizosphere bacteria',
      },
    ],
    edges: [
      ...['flora', 'fauna', 'fungi', 'microbiome'].map((childNodeId) => ({
        id: `eco-302-${childNodeId}`,
        parentNodeId: 'eco-302',
        childNodeId,
        relationId: 'biotic-domain',
      })),
      {
        id: 'flora-pinophyta',
        parentNodeId: 'flora',
        childNodeId: 'pinophyta',
        relationId: 'contains',
      },
      {
        id: 'fauna-chordata',
        parentNodeId: 'fauna',
        childNodeId: 'chordata',
        relationId: 'contains',
      },
      {
        id: 'pinophyta-pinaceae',
        parentNodeId: 'pinophyta',
        childNodeId: 'pinaceae',
        relationId: 'contains',
      },
      {
        id: 'chordata-bovidae',
        parentNodeId: 'chordata',
        childNodeId: 'bovidae',
        relationId: 'contains',
      },
      {
        id: 'chordata-cervidae',
        parentNodeId: 'chordata',
        childNodeId: 'cervidae',
        relationId: 'contains',
      },
      {
        id: 'chordata-mustelidae',
        parentNodeId: 'chordata',
        childNodeId: 'mustelidae',
        relationId: 'contains',
      },
      {
        id: 'pinaceae-chir-pine',
        parentNodeId: 'pinaceae',
        childNodeId: 'chir-pine',
        relationId: 'contains',
      },
      {
        id: 'bovidae-himalayan-goral',
        parentNodeId: 'bovidae',
        childNodeId: 'himalayan-goral',
        relationId: 'contains',
      },
      {
        id: 'cervidae-barking-deer',
        parentNodeId: 'cervidae',
        childNodeId: 'barking-deer',
        relationId: 'contains',
      },
      {
        id: 'mustelidae-yellow-throated-marten',
        parentNodeId: 'mustelidae',
        childNodeId: 'yellow-throated-marten',
        relationId: 'contains',
      },
      {
        id: 'fungi-ectomycorrhizal',
        parentNodeId: 'fungi',
        childNodeId: 'ectomycorrhizal-fungi',
        relationId: 'functional-guild',
      },
      {
        id: 'microbiome-bacteria',
        parentNodeId: 'microbiome',
        childNodeId: 'bacteria',
        relationId: 'contains',
      },
      {
        id: 'bacteria-nitrogen-cycling',
        parentNodeId: 'bacteria',
        childNodeId: 'nitrogen-cycling-rhizosphere-bacteria',
        relationId: 'functional-group',
      },
    ],
    layers: [
      { id: 'biotic-domain', label: 'Biotic domain', nodeKinds: ['domain'], order: 1 },
      {
        id: 'division-or-phylum',
        label: 'Division or phylum',
        nodeKinds: ['division', 'phylum'],
        order: 2,
      },
      { id: 'class', label: 'Class', nodeKinds: ['class'], order: 3 },
      { id: 'order', label: 'Order', nodeKinds: ['order'], order: 4 },
      { id: 'family', label: 'Family', nodeKinds: ['family'], order: 5 },
      { id: 'genus', label: 'Genus', nodeKinds: ['genus'], order: 6 },
      { id: 'species', label: 'Species', nodeKinds: ['species'], order: 7 },
      { id: 'ecological-role', label: 'Ecological role' },
      { id: 'evidence-status', label: 'Evidence status' },
    ],
    viewPresets: [
      {
        id: 'taxonomic-ranks',
        label: 'Taxonomic ranks',
        persistence: { enabled: true, schemaVersion: '1' },
        layers: [
          {
            id: 'inner',
            label: 'Inner ring',
            defaultLayerId: 'biotic-domain',
            allowedLayerIds: ['biotic-domain'],
            locked: true,
          },
          {
            id: 'middle',
            label: 'Middle ring',
            defaultLayerId: 'division-or-phylum',
            allowedLayerIds: ['division-or-phylum', 'class', 'order', 'ecological-role'],
          },
          {
            id: 'outer',
            label: 'Outer ring',
            defaultLayerId: 'family',
            allowedLayerIds: ['order', 'family', 'genus', 'species', 'evidence-status'],
          },
        ],
      },
    ],
    window: { visibleDepth: 3, maxInstances: 80, overflow: 'aggregate' },
    navigation: { expandableTerminal: 'reroot', canonicalTerminal: 'navigate' },
  },
  occurrences: taxonOccurrences
    .filter(
      ({ ecoregionId, lifecycle }) => ecoregionId === 'ecoregion:302' && lifecycle === 'published',
    )
    .map(({ taxonId, sourceIds }) => ({ taxonEntityId: taxonId, sourceIds })),
};

const coverageFor615 = (domain: 'flora' | 'fauna' | 'fungi' | 'microbiome') =>
  domainCoverageRecords.find(
    (record) => record.ecoregionId === 'ecoregion:615' && record.domain === domain,
  )?.state ?? 'unstarted';

/**
 * South American Pacific Mangroves living composition.
 * Covers characteristic mangrove flora and fauna, with functional groups for fungi and microbiome.
 */
const southAmericanPacificMangrovesComposition: LivingCompositionContent = {
  ecoregionId: 'ecoregion:615',
  coverage: Object.fromEntries(
    domainCoverageRecords
      .filter(({ ecoregionId }) => ecoregionId === 'ecoregion:615')
      .map(({ domain, state }) => [domain, state]),
  ),
  hierarchy: {
    kind: 'hierarchical',
    rootEntityId: 'ecoregion:615',
    nodes: [
      {
        id: 'eco-615',
        canonicalEntityId: 'ecoregion:615',
        kind: 'ecoregion',
        label: 'South American Pacific Mangroves',
      },
      {
        id: 'flora',
        canonicalEntityId: 'domain:flora',
        kind: 'domain',
        label: 'Flora',
        attributes: { coverage: coverageFor615('flora') },
      },
      {
        id: 'fauna',
        canonicalEntityId: 'domain:fauna',
        kind: 'domain',
        label: 'Fauna',
        attributes: { coverage: coverageFor615('fauna') },
      },
      {
        id: 'fungi',
        canonicalEntityId: 'domain:fungi',
        kind: 'domain',
        label: 'Fungi',
        attributes: { coverage: coverageFor615('fungi') },
      },
      {
        id: 'microbiome',
        canonicalEntityId: 'domain:microbiome',
        kind: 'domain',
        label: 'Microbiome',
        attributes: { coverage: coverageFor615('microbiome') },
      },
      {
        id: 'tracheophyta',
        canonicalEntityId: 'taxon:tracheophyta',
        kind: 'division',
        label: 'Tracheophyta',
      },
      { id: 'chordata', canonicalEntityId: 'taxon:chordata', kind: 'phylum', label: 'Chordata' },
      { id: 'rhizophoraceae', canonicalEntityId: 'taxon:rhizophoraceae', kind: 'family', label: 'Rhizophoraceae' },
      { id: 'acanthaceae', canonicalEntityId: 'taxon:acanthaceae', kind: 'family', label: 'Acanthaceae' },
      { id: 'combretaceae', canonicalEntityId: 'taxon:combretaceae', kind: 'family', label: 'Combretaceae' },
      { id: 'parulidae', canonicalEntityId: 'taxon:parulidae', kind: 'family', label: 'Parulidae' },
      { id: 'crocodylidae', canonicalEntityId: 'taxon:crocodylidae', kind: 'family', label: 'Crocodylidae' },
      {
        id: 'red-mangrove',
        canonicalEntityId: 'species:red-mangrove',
        kind: 'species',
        label: 'Red mangrove',
      },
      {
        id: 'black-mangrove',
        canonicalEntityId: 'species:black-mangrove',
        kind: 'species',
        label: 'Black mangrove',
      },
      {
        id: 'white-mangrove',
        canonicalEntityId: 'species:white-mangrove',
        kind: 'species',
        label: 'White mangrove',
      },
      {
        id: 'button-mangrove',
        canonicalEntityId: 'species:button-mangrove',
        kind: 'species',
        label: 'Button mangrove',
      },
      {
        id: 'mangrove-warbler',
        canonicalEntityId: 'species:mangrove-warbler',
        kind: 'species',
        label: 'Mangrove warbler',
      },
      {
        id: 'american-crocodile',
        canonicalEntityId: 'species:american-crocodile',
        kind: 'species',
        label: 'American crocodile',
      },
      {
        id: 'mangrove-ectomycorrhizal-fungi',
        canonicalEntityId: 'functional-group:mangrove-ectomycorrhizal-fungi',
        kind: 'functional-group',
        label: 'Mangrove ectomycorrhizal fungi',
      },
      {
        id: 'mangrove-sediment-bacteria',
        canonicalEntityId: 'functional-group:mangrove-sediment-bacteria',
        kind: 'functional-group',
        label: 'Mangrove sediment sulfate-reducing bacteria',
      },
    ],
    edges: [
      ...['flora', 'fauna', 'fungi', 'microbiome'].map((childNodeId) => ({
        id: `eco-615-${childNodeId}`,
        parentNodeId: 'eco-615',
        childNodeId,
        relationId: 'biotic-domain',
      })),
      {
        id: 'flora-tracheophyta',
        parentNodeId: 'flora',
        childNodeId: 'tracheophyta',
        relationId: 'contains',
      },
      {
        id: 'fauna-chordata',
        parentNodeId: 'fauna',
        childNodeId: 'chordata',
        relationId: 'contains',
      },
      {
        id: 'tracheophyta-rhizophoraceae',
        parentNodeId: 'tracheophyta',
        childNodeId: 'rhizophoraceae',
        relationId: 'contains',
      },
      {
        id: 'tracheophyta-acanthaceae',
        parentNodeId: 'tracheophyta',
        childNodeId: 'acanthaceae',
        relationId: 'contains',
      },
      {
        id: 'tracheophyta-combretaceae',
        parentNodeId: 'tracheophyta',
        childNodeId: 'combretaceae',
        relationId: 'contains',
      },
      {
        id: 'rhizophoraceae-red-mangrove',
        parentNodeId: 'rhizophoraceae',
        childNodeId: 'red-mangrove',
        relationId: 'contains',
      },
      {
        id: 'acanthaceae-black-mangrove',
        parentNodeId: 'acanthaceae',
        childNodeId: 'black-mangrove',
        relationId: 'contains',
      },
      {
        id: 'combretaceae-white-mangrove',
        parentNodeId: 'combretaceae',
        childNodeId: 'white-mangrove',
        relationId: 'contains',
      },
      {
        id: 'combretaceae-button-mangrove',
        parentNodeId: 'combretaceae',
        childNodeId: 'button-mangrove',
        relationId: 'contains',
      },
      {
        id: 'chordata-parulidae',
        parentNodeId: 'chordata',
        childNodeId: 'parulidae',
        relationId: 'contains',
      },
      {
        id: 'parulidae-mangrove-warbler',
        parentNodeId: 'parulidae',
        childNodeId: 'mangrove-warbler',
        relationId: 'contains',
      },
      {
        id: 'chordata-crocodylidae',
        parentNodeId: 'chordata',
        childNodeId: 'crocodylidae',
        relationId: 'contains',
      },
      {
        id: 'crocodylidae-american-crocodile',
        parentNodeId: 'crocodylidae',
        childNodeId: 'american-crocodile',
        relationId: 'contains',
      },
      {
        id: 'fungi-mangrove-ectomycorrhizal',
        parentNodeId: 'fungi',
        childNodeId: 'mangrove-ectomycorrhizal-fungi',
        relationId: 'functional-guild',
      },
      {
        id: 'microbiome-bacteria',
        parentNodeId: 'microbiome',
        childNodeId: 'mangrove-sediment-bacteria',
        relationId: 'functional-group',
      },
    ],
    layers: [
      { id: 'biotic-domain', label: 'Biotic domain', nodeKinds: ['domain'], order: 1 },
      {
        id: 'division-or-phylum',
        label: 'Division or phylum',
        nodeKinds: ['division', 'phylum'],
        order: 2,
      },
      { id: 'class', label: 'Class', nodeKinds: ['class'], order: 3 },
      { id: 'order', label: 'Order', nodeKinds: ['order'], order: 4 },
      { id: 'family', label: 'Family', nodeKinds: ['family'], order: 5 },
      { id: 'genus', label: 'Genus', nodeKinds: ['genus'], order: 6 },
      { id: 'species', label: 'Species', nodeKinds: ['species'], order: 7 },
      { id: 'ecological-role', label: 'Ecological role' },
      { id: 'evidence-status', label: 'Evidence status' },
    ],
    viewPresets: [
      {
        id: 'taxonomic-ranks',
        label: 'Taxonomic ranks',
        persistence: { enabled: true, schemaVersion: '1' },
        layers: [
          {
            id: 'inner',
            label: 'Inner ring',
            defaultLayerId: 'biotic-domain',
            allowedLayerIds: ['biotic-domain'],
            locked: true,
          },
          {
            id: 'middle',
            label: 'Middle ring',
            defaultLayerId: 'division-or-phylum',
            allowedLayerIds: ['division-or-phylum', 'class', 'order', 'ecological-role'],
          },
          {
            id: 'outer',
            label: 'Outer ring',
            defaultLayerId: 'family',
            allowedLayerIds: ['order', 'family', 'genus', 'species', 'evidence-status'],
          },
        ],
      },
    ],
    window: { visibleDepth: 3, maxInstances: 80, overflow: 'aggregate' },
    navigation: { expandableTerminal: 'reroot', canonicalTerminal: 'navigate' },
  },
  occurrences: taxonOccurrences
    .filter(
      ({ ecoregionId, lifecycle }) => ecoregionId === 'ecoregion:615' && lifecycle === 'draft',
    )
    .map(({ taxonId, sourceIds }) => ({ taxonEntityId: taxonId, sourceIds })),
};

export const livingCompositions: readonly LivingCompositionContent[] = [
  {
    ...himalayanPineComposition,
    measures: adaptEcologicalObservations(
      himalayanPineComposition.hierarchy,
      ecologicalObservations.filter(
        ({ ecoregionId }) => ecoregionId === himalayanPineComposition.ecoregionId,
      ),
    ),
    measureEncodings: [
      {
        metricId: 'biomass',
        appearance: 'area',
        scale: 'square-root',
        missingValue: 'uniform',
      },
    ],
  },
  {
    ...southAmericanPacificMangrovesComposition,
    measures: adaptEcologicalObservations(
      southAmericanPacificMangrovesComposition.hierarchy,
      ecologicalObservations.filter(
        ({ ecoregionId }) => ecoregionId === southAmericanPacificMangrovesComposition.ecoregionId,
      ),
    ),
    measureEncodings: [
      {
        metricId: 'biomass',
        appearance: 'area',
        scale: 'square-root',
        missingValue: 'uniform',
      },
    ],
  },
];
