import type { EcologicalEnrichment } from './ecological-enrichment';

export const bioregionEnrichment: readonly EcologicalEnrichment[] = [
  {
    targetId: 'bioregion:im5',
    summary: {
      value:
        'Himalayan Mixed Forests & Grasslands occupies the northern margin of the Indian Subcontinent subrealm. Seven ecoregions form an elevational sequence from Terai-Duar floodplain grasslands and subtropical forests through temperate broadleaf forests to subalpine conifer belts.',
      sourceIds: ['one-earth-im5'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Terai and Duar floodplains',
        'Himalayan foothills',
        'deep river gorges',
        'steep subalpine slopes',
      ],
      sourceIds: ['one-earth-im5', 'one-earth-eco-302', 'one-earth-eco-309'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character: 'Monsoonal, with a wetter east and progressively drier western sectors.',
      },
      sourceIds: ['one-earth-eco-302', 'one-earth-eco-309'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'tall floodplain grasslands',
        'subtropical broadleaf forest',
        'Chir pine forest',
        'temperate broadleaf forest',
        'subalpine conifer forest',
      ],
      sourceIds: ['one-earth-im5', 'one-earth-eco-233', 'one-earth-eco-302', 'one-earth-eco-309'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'southwest monsoon moisture gradient',
        'elevational vegetation turnover',
        'river-driven floodplain disturbance',
        'seed dispersal by forest birds',
      ],
      sourceIds: [
        'one-earth-eco-233',
        'one-earth-eco-302',
        'one-earth-eco-309',
        'one-earth-eco-311',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 41% and protection level 3 for the bioregion. Pressures and protection differ strongly among its component floodplain, broadleaf, pine, and subalpine systems.',
      sourceIds: ['one-earth-im5'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-panda',
      'species:chir-pine',
      'species:clouded-leopard',
      'species:golden-langur',
      'species:himalayan-goral',
    ],
    countryIds: ['BT', 'IN', 'NP', 'PK'],
    sources: ['one-earth-im5', 'one-earth-eco-233', 'one-earth-eco-302', 'one-earth-eco-309'],
    status: 'authored',
  },
];
