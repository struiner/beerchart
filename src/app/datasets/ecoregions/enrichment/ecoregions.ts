import type { EcologicalEnrichment } from './ecological-enrichment';

export const ecoregionEnrichment: readonly EcologicalEnrichment[] = [
  {
    targetId: 'ecoregion:233',
    summary: {
      value:
        'Himalayan Subtropical Broadleaf Forests combine Indo-Malayan and Palearctic floristic elements along the lower Himalayan slopes. Tall, structurally complex forest persists most readily on steep terrain, while productive valleys have been widely converted.',
      sourceIds: ['one-earth-eco-233'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: ['lower Himalayan slopes', 'fertile alluvial valleys', 'steep erosion-prone hills'],
      sourceIds: ['one-earth-eco-233'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Humid subtropical conditions shaped by topography and strong moisture gradients.',
      },
      sourceIds: ['one-earth-eco-233'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: ['Sal', 'Terminalia', 'Bauhinia', 'Schima', 'Castanopsis', 'climbers and epiphytes'],
      sourceIds: ['one-earth-eco-233'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: ['seed dispersal by hornbills', 'north-south movement along river basins'],
      sourceIds: ['one-earth-eco-233'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Conversion of fertile valleys, fuelwood collection, grazing, and pasture burning have fragmented and degraded the forests; restoration of habitat corridors is a stated conservation priority.',
      sourceIds: ['one-earth-eco-233'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:clouded-leopard',
      'species:golden-langur',
      'species:gaur',
      'species:white-winged-wood-duck',
    ],
    countryIds: ['BT', 'IN', 'NP'],
    sources: ['one-earth-eco-233'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:302',
    summary: {
      value:
        'Himalayan Subtropical Pine Forests extend for more than 3,000 kilometres along lower Himalayan elevations from Pakistan to Bhutan. Chir pine dominates a comparatively open, dry-adapted forest whose western and eastern sectors are separated by the Kali Gandaki gorge.',
      sourceIds: ['one-earth-eco-302'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'lower Himalayan slopes',
        'Kali Gandaki gorge',
        'dry western valleys',
        'wetter eastern mountains',
      ],
      sourceIds: ['one-earth-eco-302'],
      derivation: 'source-value',
    },
    climate: {
      value: { character: 'Southwest-monsoon climate with rainfall decreasing from east to west.' },
      sourceIds: ['one-earth-eco-302'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: ['Chir pine', 'bayberry', 'Bengal currant', 'barberry', 'Himalayan raspberry'],
      sourceIds: ['one-earth-eco-302'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'monsoon interception by mountain slopes',
        'fire and disturbance favouring pine',
        'east-west rainfall gradient',
      ],
      sourceIds: ['one-earth-eco-302'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'More than half of the natural habitat is reported cleared or degraded through grazing, fuelwood and fodder extraction, and shifting cultivation. Monitoring pine expansion and connecting protected areas are identified priorities.',
      sourceIds: ['one-earth-eco-302'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:chir-pine',
      'species:himalayan-goral',
      'species:barking-deer',
      'species:yellow-throated-marten',
    ],
    countryIds: ['BT', 'IN', 'NP', 'PK'],
    sources: ['one-earth-eco-302'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:309',
    summary: {
      value:
        'Eastern Himalayan Subalpine Conifer Forests form a high-elevation transition between broadleaf forest and alpine meadow. The steep 3,000–4,000 metre forest belt supports a distinctive mixture of Indo-Malayan and Palearctic species.',
      sourceIds: ['one-earth-eco-309'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'steep rocky slopes',
        'deep river gorges',
        'subalpine forest belt',
        'alpine treeline transition',
      ],
      sourceIds: ['one-earth-eco-309'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character: 'Seasonal monsoon climate with snowy, below-freezing winters and a wetter east.',
        annualPrecipitationMm: { min: 3600, max: 4500 },
      },
      sourceIds: ['one-earth-eco-309'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'fir',
        'larch',
        'hemlock',
        'juniper',
        'yew',
        'rhododendron',
        'blue pine in dry inner valleys',
      ],
      sourceIds: ['one-earth-eco-309'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'elevational turnover at treeline',
        'monsoon interception',
        'east-west species replacement',
      ],
      sourceIds: ['one-earth-eco-309'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Steep terrain has limited conversion, but logging, fuelwood collection, pasture burning, and wildlife exploitation remain pressures. Several large Himalayan protected areas retain substantial forest blocks.',
      sourceIds: ['one-earth-eco-309'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-panda',
      'species:musk-deer',
      'species:takin',
      'species:blood-pheasant',
      'species:blyths-tragopan',
    ],
    countryIds: ['BT', 'IN', 'NP'],
    sources: ['one-earth-eco-309'],
    status: 'authored',
  },
];
