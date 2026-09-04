import type { EcologicalEnrichment } from './ecological-enrichment';

export const ecoregionEnrichment: readonly EcologicalEnrichment[] = [
  {
    targetId: 'ecoregion:417',
    summary: {
      value:
        'Kalaallit Nunaat Arctic Steppe occupies southwestern Greenland and much of the southern and eastern ice-free coast. Mountainous fjords, coastal meadows, dwarf-shrub heath, and dry interior steppe support Greenland’s comparatively diverse low-Arctic and locally subarctic vegetation.',
      sourceIds: ['one-earth-eco-417'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'mountainous fjord coast',
        'granite and gneiss cliffs',
        'coastal islands',
        'interior salt pans and lakes',
        'ice-cap margin',
      ],
      sourceIds: ['one-earth-eco-417'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Low- to high-Arctic overall, with subarctic inner fjords in the southwest and generally low precipitation and humidity.',
        annualPrecipitationMm: { min: 200, max: 900 },
      },
      sourceIds: ['one-earth-eco-417'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dwarf-scrub heath',
        'dry meadow and lichen heath',
        'Arctic grass and sedge steppe',
        'green alder and willow scrub',
        'localized low downy-birch forest',
      ],
      sourceIds: ['one-earth-eco-417'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'coastal-to-interior moisture transition',
        'seasonal snow-cover change',
        'herbivore grazing',
        'localized hot-spring influence',
      ],
      sourceIds: ['one-earth-eco-417'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth identifies gaps in protection for southern vegetation types and notes pressures from hunting, sheep grazing, mining, motorized access, and unstable reindeer populations.',
      sourceIds: ['one-earth-eco-417'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:white-tailed-eagle',
      'species:arctic-fox',
      'species:reindeer',
      'species:musk-ox',
    ],
    countryIds: ['GL'],
    sources: ['one-earth-eco-417'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:418',
    summary: {
      value:
        'Kalaallit Nunaat High Arctic Tundra wraps around northern Greenland, including the planet’s northernmost land and extensive ice-free terrain in Peary Land. Polar-desert climate restricts vegetation to cold- and drought-adapted heath, fellfield, grassland, snowbed, moss, and lichen communities.',
      sourceIds: ['one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'northern coastal lowlands',
        'rolling Paleozoic uplands',
        'Peary Land ice-free terrain',
        'Nares Strait coast',
        'polar desert',
      ],
      sourceIds: ['one-earth-eco-418'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'High-Arctic polar desert with severe winters, summer temperatures rarely above 5°C, and occasional warming Föhn winds.',
        annualPrecipitationMm: { min: 25, max: 200 },
      },
      sourceIds: ['one-earth-eco-418'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dwarf-shrub heath',
        'summer-dry grassland',
        'fellfield and snowbed plants',
        'moss and lichen cover',
        'sparse sedge meadow',
      ],
      sourceIds: ['one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Föhn-wind snowmelt',
        'extreme seasonal light cycle',
        'short growing season',
        'musk-ox and reindeer grazing',
      ],
      sourceIds: ['one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Most of the ecoregion lies within Northeast Greenland National Park, but continued ice loss, climate-driven ecological change, hunting, oil development, and motorized disturbance remain material threats.',
      sourceIds: ['one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:northern-collared-lemming',
      'species:musk-ox',
      'species:arctic-fox',
      'species:reindeer',
    ],
    countryIds: ['GL'],
    sources: ['one-earth-eco-418'],
    status: 'authored',
  },
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
  {
    targetId: 'ecoregion:222',
    summary: {
      value:
        'Brahmaputra Valley Semi-Evergreen Forests lie along the upper reaches of the sacred Brahmaputra River in Assam and West Bengal in India, with small extensions into southern Bhutan. Fertile alluvial soils make the ecoregion highly productive, and it forms a gateway for species exchange between the Indian subcontinent and Eurasia.',
      sourceIds: ['one-earth-eco-222'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Brahmaputra River floodplain',
        'fertile alluvial soils from the Himalayas and Tibetan Plateau',
        'most of the ecoregion within Assam',
        'southern lowlands of Bhutan',
        'once a zone of Deccan-Eurasia continental collision',
      ],
      sourceIds: ['one-earth-eco-222'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Hot, humid monsoon summers with 1,500–3,000 mm of rain funneled along the Gangetic plains from June to September, and cold, dry winters.',
      },
      sourceIds: ['one-earth-eco-222'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'semi-evergreen forest',
        'primary forest mostly converted to grassland',
        'remnant forest patches along the Indo-Bhutan border',
      ],
      sourceIds: ['one-earth-eco-222'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'monsoon flooding enriching the floodplain',
        'gateway for species exchange between the subcontinent and Eurasia',
        'the Brahmaputra River acting as a biogeographic barrier',
      ],
      sourceIds: ['one-earth-eco-222'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Nearly three-quarters of the habitat has been cleared or degraded through centuries of human activity. About 12 protected areas cover about 5% of the ecoregion, including Manas, Dibru-Saikowa, Kaziranga, and Mehao; Manas may hold the last refuge of the pygmy hog. Priorities include maintaining habitat linkages, translocating one-horned rhino and wild water buffalo, and improving anti-poaching protection for tiger, rhino, and elephant.',
      sourceIds: ['one-earth-eco-222'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:golden-langur',
      'species:pygmy-hog',
      'species:hispid-hare',
      'species:gaur',
      'species:clouded-leopard',
      'species:bengal-florican',
    ],
    countryIds: ['IN', 'BT'],
    sources: ['one-earth-eco-222'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:238',
    summary: {
      value:
        'Lower Gangetic Plains Moist Deciduous Forests lie along the confluence of Asia\'s largest rivers, the Ganges and Brahmaputra, at the base of the Himalayan range. They form some of the most productive forests in the northern Indian subcontinent, dominated by tall red silk cotton trees in the open tracts and Sal in the mature forests.',
      sourceIds: ['one-earth-eco-238'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'confluence of the Ganges and Brahmaputra rivers',
        'low-gradient Gangetic floodplain',
        'alluvial soils at the base of the Himalayas',
      ],
      sourceIds: ['one-earth-eco-238'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Highly seasonal tropical climate with more than 3,500 mm of rainfall from June to September and frequent destructive Bay of Bengal cyclones.',
      },
      sourceIds: ['one-earth-eco-238'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'semi-deciduous forest',
        'tall red silk cotton trees in open forests',
        'Sal-dominated mature forest',
        'riparian Acacia catechu and Dalbergia sissoo galleries',
      ],
      sourceIds: ['one-earth-eco-238'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'constant flood disturbance setting back forest succession',
        'riparian indicator species of a disturbance-maintained forest',
        'exceptionally productive wildlife habitat',
      ],
      sourceIds: ['one-earth-eco-238'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'This region now supports one of the densest human populations on Earth, with extensive clearing and conversion of natural habitat. Important reserves remain integral to landscapes for tigers and elephants, but existing reserves cover only about 2% of the ecoregion, so priorities are securing remaining large patches, establishing new founder populations of swamp deer and wild water buffalo, and conserving unprotected Key Biodiversity Areas such as Hakaluki Haor, Hail Haor, and Jamuna-Brahmaputra in Bangladesh.',
      sourceIds: ['one-earth-eco-238'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:swamp-deer',
      'species:wild-water-buffalo',
      'species:greater-one-horned-rhinoceros',
      'species:asian-elephant',
      'species:tiger',
      'species:bengal-florican',
    ],
    countryIds: ['BD', 'IN'],
    sources: ['one-earth-eco-238'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:244',
    summary: {
      value:
        'Meghalaya Subtropical Forests cover the Khasi and Garo hills of the Indian state of Meghalaya, a name meaning "abode of clouds". Rising to about 1,800 m, the hills intercept monsoon winds from the Bay of Bengal, making the region among the wettest in Asia with more than 11 meters of rain in a single year.',
      sourceIds: ['one-earth-eco-244'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Khasi and Garo hills rising to about 1,800 m',
        'steep cloud-intercepted ridges',
        'hilltop grasslands and temperate patches',
      ],
      sourceIds: ['one-earth-eco-244'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Extremely wet monsoonal subtropical climate with over 11 meters of annual rainfall and persistent cloud cover and mist.',
      },
      sourceIds: ['one-earth-eco-244'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'subtropical forest of Bischofia, Mesua, Castanopsis, Pterospermum, and Acrocarpus in wetter areas',
        'transition to Elaeocarpus, Dillenia, Terminalia, Tetrameles, and Schima in drier areas',
        'temperate forest of Lithocarpus, Castanopsis, and Quercus on hilltops',
        'dense bamboo and cane undergrowth with lianas and epiphytes',
        'sacred groves rich in relict and endemic plants',
      ],
      sourceIds: ['one-earth-eco-244'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'heavy monsoon interception generating cloud forest',
        'sacred groves safeguarding relict species',
        'a hotspot of endemic plant diversity, including over 70 of 142 rare plants in the Garo and Jaintia hills',
      ],
      sourceIds: ['one-earth-eco-244'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Formal protected areas cover only 456 km², but over 90% of the land is community-owned and protected. Loss of traditional beliefs, mining of coal and uranium, and hydropower development threaten the forests, and over two-thirds of the natural forest has already been cleared or degraded. Priorities include incorporating community-owned sites into conservation networks and reducing shifting cultivation on steep slopes.',
      sourceIds: ['one-earth-eco-244'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:magnolia-rabaniana',
      'species:hoolock-gibbon',
      'species:clouded-leopard',
      'species:tiger',
      'species:white-winged-wood-duck',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-244'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:282',
    summary: {
      value:
        'Sundarbans Freshwater Swamp Forests represent the swamp forests surrounding the Sundarbans Mangroves, where freshwater from the rivers pushes back the saline waters of the intruding ocean. Located in the confluence delta of several of South Asia\'s largest rivers, the ecoregion straddles Bangladesh and the Indian state of West Bengal.',
      sourceIds: ['one-earth-eco-282'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'vast confluence delta of South Asia\'s largest rivers',
        'freshwater-saltwater transition zone',
        'floodplains with rich alluvial soils',
        'straddles Bangladesh and West Bengal',
      ],
      sourceIds: ['one-earth-eco-282'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Very heavy monsoon rains of over 3,500 mm from May to September, frequent devastating cyclones, and sweltering conditions with temperatures exceeding 48°C.',
      },
      sourceIds: ['one-earth-eco-282'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'historical forests of Heritiera, Xylocarpus, Bruguiera, Sonneratia, and Avicennia',
        'pandans or screw pine with long saw-tooth-edged leaves',
        'Nipa palms lining the channel banks',
      ],
      sourceIds: ['one-earth-eco-282'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'freshwater pushback against intruding ocean salinity',
        'river diversion altering hydrologic balance',
        'sea-level rise and storm intensification expected from climate change',
      ],
      sourceIds: ['one-earth-eco-282'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'The freshwater swamp forests are almost extinct, ploughed under rice fields, habitation, and intense exploitation to support one of the world\'s densest human populations; remaining fragments are degraded and isolated in an agricultural matrix. Illegal hunting and habitat loss have caused local extinctions, while the Farakka Barrage, shipping oil spills, and pollution degrade the waterways. Priorities include landscape-scale conservation planning with connectivity to adjacent ecoregions and climate adaptation.',
      sourceIds: ['one-earth-eco-282'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:fishing-cat',
      'species:gharial',
      'species:sundri',
    ],
    countryIds: ['IN', 'BD'],
    sources: ['one-earth-eco-282'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:287',
    summary: {
      value:
        'Upper Gangetic Plains Moist Deciduous Forests lie along one of Asia\'s largest and most sacred rivers, the Ganges, which flows east along the base of the Himalayas to conjoin with the Brahmaputra. There is little topographic relief, with deep alluvial deposits up to 6 km thick lining the floodplain.',
      sourceIds: ['one-earth-eco-287'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Ganges River floodplain',
        'hardly any topographic relief except riverbank slopes and ravines',
        'deep alluvial soils washed down by the river',
        'deposits of mud and silt up to 6 km deep in places',
      ],
      sourceIds: ['one-earth-eco-287'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Annual rainfall averages less than 500 mm, with a gradient of high to low rainfall from east to west and into the mountains.',
      },
      sourceIds: ['one-earth-eco-287'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Sal-dominated forest with Terminalia, Lagerstroemia, Adina, Dillenia, and Ficus',
        'tall Saccharum grasslands where floods prevent tree establishment',
        'scattered fragments make the original type hard to assign',
      ],
      sourceIds: ['one-earth-eco-287'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'quilt of forest and Saccharum grassland nourishing deer and wild boar',
        'support of dense tiger populations now largely extirpated',
        'Ganges sustaining Gangetic dolphins and gharial',
        'rich waterfowl communities in riverine wetlands',
      ],
      sourceIds: ['one-earth-eco-287'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'The fertile alluvial plains have been cleared and intensely cultivated to support one of the densest human populations on Earth. Remaining natural forests are protected in Rajaji, Corbett, and Dudhwa national parks; Corbett is Asia\'s oldest protected area, established in 1936 specifically to protect tigers. Priorities include protecting and restoring critical tiger and elephant corridors and stopping encroachment into protected areas.',
      sourceIds: ['one-earth-eco-287'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:gharial',
      'species:swamp-deer',
      'species:greater-one-horned-rhinoceros',
      'species:asian-elephant',
      'species:tiger',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-287'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:323',
    summary: {
      value:
        'Sundarbans Mangroves form the largest mangrove ecosystem in the world, a delta of over 10,000 km² at the confluence of the Ganges, Hooghly, Padma, Brahmaputra, and Meghna rivers. Named after the dominant mangrove tree, Heritiera fomes or sundri, the Sundarbans is a UNESCO World Heritage Site and one of the World\'s Natural Wonders.',
      sourceIds: ['one-earth-eco-323'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'vast Ganges-Brahmaputra delta over 10,000 km²',
        'mangrove islands dissected by channels',
        'estuarine riverine environments',
      ],
      sourceIds: ['one-earth-eco-323'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Monsoonal with annual rainfall exceeding 3,500 mm, devastating cyclones from the Bay of Bengal, and daytime temperatures up to 48°C during the monsoon.',
      },
      sourceIds: ['one-earth-eco-323'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'mangrove forest dominated by Heritiera',
        'Avicennia, Xylocarpus, Sonneratia, Bruguiera, Ceriops, Aegiceras, and Rhizophora',
        'Nipa palms lining the channels',
        'dense canopy with seedling undergrowth in undisturbed forest',
      ],
      sourceIds: ['one-earth-eco-323'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'tidal flushing maintaining salinity and mangrove zonation',
        'mudskippers climbing onto mudflats and trees',
        'channels patrolled by sharks and Gangetic dolphins',
        'heavy silt from deforested Himalayan slopes smothering fish and shellfish nurseries',
      ],
      sourceIds: ['one-earth-eco-323'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'The ecoregion crosses two countries with some of the highest human population densities in the world; about half the mangrove forest has been cut for fuelwood, shrimp fry are harvested unsustainably, forests are cleared for shrimp ponds, and upriver river-diversion projects alter salinity and tidal fluxes. Although large areas are now protected, priorities are strengthening the protected-area network, developing effective patrol and monitoring, and maintaining hydrologic flow regimes to keep the mangrove system in balance.',
      sourceIds: ['one-earth-eco-323'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sundri',
      'species:tiger',
      'species:fishing-cat',
      'species:gharial',
    ],
    countryIds: ['BD', 'IN'],
    sources: ['one-earth-eco-323'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:242',
    summary: {
      value:
        'Malabar Coast Moist Forests form a narrow forest belt along the western coast of India, between the shoreline and the 250 m contour of the steep Western Ghats Mountains a few kilometers inland. For over five millennia the coast was a region of major international trading, and most of its original rainforest has been cleared.',
      sourceIds: ['one-earth-eco-242'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'narrow coastal forest belt stretching over 1,400 km along the western coast',
        'extending from Mumbai at the northern end to the southern tip of India',
        'steep Western Ghats escarpment a few kilometers inland',
        'Gondwanaland origins dating back more than 150 million years',
      ],
      sourceIds: ['one-earth-eco-242'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical monsoon climate in which the Western Ghats intercept the southwest monsoons and force moisture-laden winds upward, releasing over 2,500 mm of orographic rainfall on the western slopes and lowlands.',
      },
      sourceIds: ['one-earth-eco-242'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'original tropical evergreen forests largely replaced by semi-deciduous vegetation',
        'characteristic trees of Tetrameles, Stereospermum, Ficus, Dysoxylum, and Pterocarpus',
        'wild mango with Terminalia, Dalbergia, and Madhuca amid teak plantations',
        'disappearing Myristica swamps and inland lagoons',
        'coconut and areca nut plantations occupying the coast',
      ],
      sourceIds: ['one-earth-eco-242'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'orographic rainfall driven by monsoon interception at the Ghats',
        'five thousand years of trading and human settlement clearing the forest',
        'sacred groves retaining fragments of the former continuous rainforest',
        'forests once inhabited by tigers, Asian elephants, leopards, and hornbills',
      ],
      sourceIds: ['one-earth-eco-242'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 15% with a protection level of 2. Natural habitat has been extensively cleared or converted to coconut, rubber, and timber plantations and rice paddies, so hardly any intact forest now exists and protected areas cover just over 1,200 km2. Priorities include conserving traditional sacred groves, securing remaining Myristica swamp patches, and engaging local communities as conservation stewards.',
      sourceIds: ['one-earth-eco-242'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:malabar-pied-hornbill',
      'species:slender-loris',
      'species:tiger',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-242'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:253',
    summary: {
      value:
        'North Western Ghats Moist Deciduous Forests extend through the Indian states of Maharashtra and Karnataka, northwards from where the South Western Ghats moist deciduous forests end. The mountains intercept the southwest monsoons, giving a rainfall gradient from up to 3,000 mm on the western side to as little as 1,000 mm in the east.',
      sourceIds: ['one-earth-eco-253'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'steep, faulted edge of the Deccan Plateau',
        'Maharashtra and Karnataka states of western India',
        'Gondwana origins dating back more than 150 million years',
        'rain-shadow gradient from west to east',
      ],
      sourceIds: ['one-earth-eco-253'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical, humid, and hot, with the mountains intercepting the southwest monsoons from June to September; the western side receives up to 3,000 mm of rain while the eastern side gets as little as 1,000 mm, with mean annual temperatures of 24 to 27 degrees Celsius.',
      },
      sourceIds: ['one-earth-eco-253'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'teak-dominated forest with Grewia, Lagerstroemia, Dillenia, Dalbergia, and Pterocarpus',
        'clumps of tall Indian thorny bamboo growing to over 35 m',
        'bamboo leaves, roots, and seeds used in traditional remedies',
      ],
      sourceIds: ['one-earth-eco-253'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'monsoon rain-shadow gradient across the mountains',
        'the southern forests supporting one of the largest lion-tailed macaque populations',
        'extensive fragmentation depleting populations of tiger, leopard, elephant, and gaur',
        'hornbills indicating the presence of large fruit-bearing trees',
      ],
      sourceIds: ['one-earth-eco-253'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 9% with a protection level of 6. Most natural forest has been cleared, only about 5% is under formal protection, and hunting remains widespread, including of lion-tailed macaques. Recommended actions include community-based conservation through local and religious institutions, expanding and connecting protected areas, and strengthening anti-poaching capacity.',
      sourceIds: ['one-earth-eco-253'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:lion-tailed-macaque',
      'species:tiger',
      'species:asian-elephant',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-253'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:254',
    summary: {
      value:
        'North Western Ghats Montane Rainforests represent the upper montane forests along the Western Ghats, from north of Mumbai to the Wayanad evergreen forests in the south. The ecoregion is renowned for exceptional endemism, holding over a third of all India\u2019s plants and three-quarters of its amphibians within a strip only 6% the size of the country.',
      sourceIds: ['one-earth-eco-254'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'upper montane forests of the Western Ghats range',
        'from north of Mumbai to the Wayanad evergreen forests',
        'abrupt, faulted plateau edges rising steeply from the coast',
        'complex, dissected terrain creating localized habitats',
      ],
      sourceIds: ['one-earth-eco-254'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'The mountains intercept the southwest monsoon from June to September, depositing more than 2,500 mm of rainfall along the windward western slopes, with cool, misty conditions prevailing in the higher elevations.',
      },
      sourceIds: ['one-earth-eco-254'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'wet, multi-storied forest with heavily buttressed 45 m tall trees',
        'dominant families Dipterocarpaceae, Clusiaceae, Anacardiaceae, Sapotaceae, and Meliaceae',
        'understory of bamboos, palms, and canes',
        'stunted shola forests of Syzygium, Rhododendron nilgiricum, and Michaelia nilagirica at higher elevations',
        'montane grasslands with fire- and frost-resistant grasses',
      ],
      sourceIds: ['one-earth-eco-254'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'hotspot of endemism created by the complex mountain terrain',
        '138 of the 158 frog species known from the mountains being endemic',
        'the purple frog as a Jurassic-era living fossil with relatives in the Seychelles',
        'endemic fruit-eating birds spreading seeds and maintaining forest architecture',
      ],
      sourceIds: ['one-earth-eco-254'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 37% with a protection level of 5. The forests are now highly fragmented by settlements, reservoirs, cash crops, coffee, tea, rubber, and cardamom plantations, as well as acacia and eucalyptus forestry, but even fragments remain important because of the high endemism. Priorities include integrating remnant patches into landscape-scale planning, establishing corridors, and partnering with landowners through conservation incentives.',
      sourceIds: ['one-earth-eco-254'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:purple-frog',
      'species:lion-tailed-macaque',
      'species:sloth-bear',
      'species:fishing-cat',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-254'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:270',
    summary: {
      value:
        'South Western Ghats Moist Deciduous Forests surround the montane rainforests at the southern end of the Western Ghats and represent the drier, deciduous forest ecosystems, widening to the east in the rain shadow. The ecoregion anchors globally important tiger and Asian elephant populations, including the 12,000 km2 Brahmagiri-Nilgiri-Eastern Ghats Elephant Range with about 6,300 animals.',
      sourceIds: ['one-earth-eco-270'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'wrapping around the southern extent of the Western Ghats',
        'wider on the eastern rain-shadow side',
        'faulted plateau edge rising over 1,000 m as abrupt cliffs',
        '12,000 km2 Brahmagiri-Nilgiri-Eastern Ghats Elephant Range',
      ],
      sourceIds: ['one-earth-eco-270'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical, humid, and hot, with ocean influence on the western side; rainfall varies from up to 3,000 mm during the monsoon in the west to as little as 1,000 mm in the east.',
      },
      sourceIds: ['one-earth-eco-270'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'forests of Albizia, Lagerstroemia, Terminalia, Adina, and Pterocarpus',
        'the tall red silk-cotton tree Bombax ceiba with wide spreading branches',
        'bright red flowers attracting minivets, parrots, barbets, orioles, and bulbul',
      ],
      sourceIds: ['one-earth-eco-270'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'the elephant range supporting the largest single elephant population in Asia',
        'large birds such as adjutant storks and hornbills roosting in silk-cotton trees',
        'livestock grazing and dry-season pasture fires as serious threats',
        'connectivity with montane ecoregions and the Deccan Plateau',
      ],
      sourceIds: ['one-earth-eco-270'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 47% with a protection level of 6. Over three-fourths of the natural vegetation has been cleared and the remaining forests are highly fragmented, with 14 protected areas covering about 28% including the Bandipur, Nagarhole, Mudumalai, and Wayanad complex. Priorities include managing conservation landscapes for connectivity, restricting further clearing, and addressing human-wildlife conflict through community engagement.',
      sourceIds: ['one-earth-eco-270'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:nilgiri-langur',
      'species:asian-elephant',
      'species:tiger',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-270'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:271',
    summary: {
      value:
        'South Western Ghats Montane Rainforests represent the rainforests above 1,000 m of the southern Western Ghats mountain range along the west coast of India, the most species-rich region in South Asia. Endemism is extraordinary, with over a third of India\u2019s plants and more than three-quarters of its amphibians found only in these mountains.',
      sourceIds: ['one-earth-eco-271'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'rainforests above 1,000 m elevation',
        'extending from the Nilgiri Hills to the Ashambu Hills',
        'complex, highly dissected mountain terrain',
        'shola-grassland mosaic between 1,900 and 2,200 m',
      ],
      sourceIds: ['one-earth-eco-271'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Wet and highly seasonal, with orographic precipitation from the intercepted southwest monsoon delivering an average of over 2,800 mm a year and more than 8,000 mm in some areas.',
      },
      sourceIds: ['one-earth-eco-271'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'wet montane evergreen rainforest with a low canopy of 15 to 20 m',
        'shola forests of Lauraceae, Rubiaceae, Symplocaceae, Myrtaceae, Myrsinaceae, and Oleaceae',
        'characteristic trees including Cullenia exarillata, Mesua ferrea, Palaquium ellipticum, Gluta travancorica, and Podocarpus wallichiana',
        'montane grasslands with the endemic Neelakurinji shrub that flowers every twelve years',
      ],
      sourceIds: ['one-earth-eco-271'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'orographic rainfall exceeding 8,000 mm in dissected areas',
        'a fourth of India\u2019s mammals and roughly half its amphibians being endemic',
        'the Nilgiri tahr restricted to a narrow 400 km shola-grassland stretch',
        'endemic birds including the broad-tailed grassbird, Nilgiri laughingthrush, and Nilgiri pipit',
      ],
      sourceIds: ['one-earth-eco-271'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 77% with a protection level of 3. Nearly two-thirds of the natural forests have been cleared and the remainder is fragmented, with reserves such as Periyar, Anamalai, and Kalakad Mundanthurai facing continuing conversion to tea and coffee plantations. Priorities include protecting Nilgiri tahr and lion-tailed macaque habitats, considering tahr reintroduction, and planning elephant conservation landscapes.',
      sourceIds: ['one-earth-eco-271'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:nilgiri-tahr',
      'species:lion-tailed-macaque',
      'species:asian-elephant',
      'species:tiger',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-271'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:274',
    summary: {
      value:
        'Sri Lanka Lowland Rainforests cover the tropical rainforests of the island\u2019s southwest quarter, isolated from the Western Ghats since the late Miocene more than 7 million years ago. Over 70% of the plants and animals endemic to Sri Lanka are supported within this small ecoregion, where amphibian surveys have raised the known frog count from 35 to over 250.',
      sourceIds: ['one-earth-eco-274'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'rainforests of the southwest quarter of Sri Lanka',
        'separated from the Western Ghats since the late Miocene',
        'canopy of emergent trees over 40 m',
        'occupying less than 25% of the island\u2019s land area',
      ],
      sourceIds: ['one-earth-eco-274'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Monsoon tropical, with a southwest monsoon bringing over 5,000 mm of rainfall between May and September, temperatures that stay near 27 to 30 degrees Celsius year-round, and relative humidity of 80 to 85%.',
      },
      sourceIds: ['one-earth-eco-274'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'stands dominated by Dipterocarpus with two-winged spiraling seeds',
        'communities dominated by Mesua and Shorea',
        'virtually all Sri Lankan dipterocarp species endemic to the rainforests',
        'the endemic ground orchid wanaraja (Anoectochilus regalis) only in undisturbed forest',
      ],
      sourceIds: ['one-earth-eco-274'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'long isolation since the late Miocene driving speciation',
        'the Sri Lankan leopard as the largest predator',
        'the rusty-spotted cat as the smallest wild cat in the world',
        'high endemic bird richness defining an Endemic Bird Area',
      ],
      sourceIds: ['one-earth-eco-274'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 82% with a protection level of 1. Most forest has been cleared for tea, rubber, and coconut plantations, rice paddies, and settlements, while over half of Sri Lanka\u2019s human population lives in this ecoregion and clearing continues to encroach on the remnants. The main protected areas are Sinharaja and Peak Wilderness, but protection is inadequate, with priorities including consolidating forest patches, community stewardship, and a Green Fund for strategic land purchase.',
      sourceIds: ['one-earth-eco-274'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sri-lankan-leopard',
      'species:purple-faced-leaf-monkey',
      'species:rusty-spotted-cat',
      'species:sri-lanka-blue-magpie',
    ],
    countryIds: ['LK'],
    sources: ['one-earth-eco-274'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:275',
    summary: {
      value:
        'Sri Lanka Montane Rainforests represent the island\u2019s montane and sub-montane wet forests above 1,000 m, isolated from the mainland since the Miocene upheaval over 7 million years ago. Over half of Sri Lanka\u2019s endemic flowering plants and vertebrates are limited to this ecoregion, whose cloud forests hold moss-draped Rhododendron, giant tree ferns, and twelve-year-cycling Strobilanthes.',
      sourceIds: ['one-earth-eco-275'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'montane and sub-montane wet forests above 1,000 m',
        'central mountain massif rising above 2,500 m',
        'the smaller, isolated Knuckles range to the north',
        'wind-swept upper slopes with shallow soils',
      ],
      sourceIds: ['one-earth-eco-275'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Wet upland tropical, with 2,500 to 5,000 mm of annual rainfall, strong winds that restrict tree height, morning fog and mist, and ground frost on the highest ridges from December to February.',
      },
      sourceIds: ['one-earth-eco-275'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'tall sub-montane forest dominated by Shorea, Calophyllum, and Syzygium',
        'moss-draped cloud forest of endemic Rhododendron and giant Cyathea tree ferns',
        'endemic Strobilanthes that bloom every twelve years in purple, yellow, and orange',
        'montane grasslands known locally as pathanas',
      ],
      sourceIds: ['one-earth-eco-275'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'long isolation driving speciation of endemic flora and fauna',
        'the leaf-nosed lizard genus Ceratophora as a taxonomic relict confined to the island',
        'brightly colored endemic freshwater crabs and small fauna still being described',
        'the Sri Lankan leopard and sambar deer remaining abundant',
      ],
      sourceIds: ['one-earth-eco-275'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 95% with a protection level of 2. Most montane forest has been cleared over the past two centuries for large tea plantations, and forest loss continues at smaller scales. Priority actions include connecting fragments along the elevational gradient, creating a Green Fund for strategic conservation lands, and protecting and restoring forests above roughly 1,515 m as required by law.',
      sourceIds: ['one-earth-eco-275'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:leaf-nosed-lizard',
      'species:sri-lankan-leopard',
      'species:sambar-deer',
    ],
    countryIds: ['LK'],
    sources: ['one-earth-eco-275'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:243',
    summary: {
      value:
        'Maldives-Lakshadweep-Chagos Archipelago Tropical Moist Forests represents three island groups along a submarine mountain range, the Chagos-Laccadive Plateau, in the western Indian Ocean. Together they form the most extensive coral reef and atoll community in the Indian Ocean, the largest atoll system in the world, and a key habitat for seabirds and nesting sea turtles.',
      sourceIds: ['one-earth-eco-243'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'three island groups along the Chagos-Laccadive Plateau',
        'most extensive coral reef and atoll community in the Indian Ocean',
        'Lakshadweep of 36 small islands spread over 78,000 km2 with just 32 km2 of land',
        'Maldives of 1,190 islands totaling 298 km2 in land mass',
        'Chagos archipelago of 50 islands with about 60 km2 of land',
      ],
      sourceIds: ['one-earth-eco-243'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Monsoon tropical, with a southwest monsoon from April to October bringing about 1,600 mm of rain in the drier northern Lakshadweep and over 3,800 mm in the southern Maldives, while temperatures vary little between 24 and 30 degrees Celsius.',
      },
      sourceIds: ['one-earth-eco-243'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'tropical forest and shrub of hardy salt- and drought-resistant bushes',
        'beach cabbage Scaevola sericea and the smaller Pemphis acidula lining the beaches',
        'inland communities of Cordia subcordata, Hibiscus tiliaceus, and Premna obtusifolia',
        'occasional taller Hernandia nymphaeifolia and Terminalia catappa trees',
        'mangrove forests of Bruguiera along the coastal areas',
        'naturalized coconut palms, breadfruit, and drumstick trees',
      ],
      sourceIds: ['one-earth-eco-243'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'important seabird rookeries and turtle nesting beaches',
        'the coconut crab as the largest living terrestrial arthropod',
        'a depauperate mammal fauna with only two fruit bat species in the Maldives',
        'coconut crabs recycling biomass on land',
      ],
      sourceIds: ['one-earth-eco-243'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 33% with a protection level of 4. The primary threats are climate change and sea level rise, tourism-driven clearing of native vegetation, and solid waste degrading the marine and terrestrial environments. Recommended actions include protecting rookeries and turtle nesting beaches, conserving coastal vegetation buffers against storm surges, and implementing waste disposal systems.',
      sourceIds: ['one-earth-eco-243'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:green-sea-turtle',
      'species:coconut-crab',
      'species:indian-flying-fox',
      'species:red-footed-booby',
      'species:hawksbill-sea-turtle',
    ],
    countryIds: ['MV', 'IO', 'IN'],
    sources: ['one-earth-eco-243'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:292',
    summary: {
      value:
        'Chhota-Nagpur Dry Deciduous Forests cover the dry woodlands of the Chhota-Nagpur Plateau, a Precambrian tableland made of three smaller plateaus in eastern India. The ecoregion still harbors large populations of tigers and Asian elephants able to roam the landscape with relative freedom, a rarity in this bioregion.',
      sourceIds: ['one-earth-eco-292'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a plateau composed of ancient Precambrian rocks',
        'three smaller plateaus forming the Chhota-Nagpur Plateau',
        'geological bridge between the Satpura Hill Range and the Himalaya',
        'drier than the surrounding moist plains',
      ],
      sourceIds: ['one-earth-eco-292'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Seasonal climate with cool winters that can drop below freezing at night, warm summers reaching 35 degrees Celsius (less hot than the plains below), and a June to September rainy season bringing about 1,400 mm of rainfall.',
      },
      sourceIds: ['one-earth-eco-292'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dry deciduous forest of Sal Shorea robusta with Anogeissus, Terminalia, and Lagerstroemia',
        'twisted lianas draping the trees in the denser patches',
        'pockets of vegetation with endemic plants on the plateau',
        'endangered endemics including Aglaia haselettiana, Carum villosum, and Pycnocyclea glauca',
      ],
      sourceIds: ['one-earth-eco-292'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'an ancient montane bridge exchanging montane-adapted species',
        '77 mammal species with none endemic but several charismatic',
        'the plateau as a drier outlier amid the surrounding moist lowlands',
        'species exchange with the Satpura range and the Himalaya',
      ],
      sourceIds: ['one-earth-eco-292'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 7% with a protection level of 9. Thirteen protected areas cover parts of the plateau, with Sanjay and Palamau each exceeding 1,000 km2 and providing important core habitat for large vertebrates. Priorities include retaining connectivity for tigers, elephants, and wild dogs and protecting the small endemic flora.',
      sourceIds: ['one-earth-eco-292'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sloth-bear',
      'species:tiger',
      'species:asian-elephant',
      'species:four-horned-antelope',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-292'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:295',
    summary: {
      value:
        'Khathiar-Gir Dry Deciduous Forests cover the dry forests surrounded by the thorn scrub of northwestern India and are the only ecoregion in Asia to support lions. The Asiatic lion population, restricted to Gir National Park and its surroundings in Gujarat, had grown to 523 animals by 2015 and roughly 650 by 2017.',
      sourceIds: ['one-earth-eco-295'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the only ecoregion in Asia supporting lions',
        'Gir National Park and surrounding areas in Gujarat',
        'quartzite ridges and gneiss hillocks of the Aravalli mountain system',
        'a transition zone from the Afrotropical to South Indian floras',
      ],
      sourceIds: ['one-earth-eco-295'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Hot and arid for most of the year, with only 550 to 700 mm of rain annually, temperatures that regularly soar above 45 degrees Celsius, and winter nights that drop to near freezing.',
      },
      sourceIds: ['one-earth-eco-295'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'three-layered forest with an upper canopy at 15 to 25 m',
        'teak dominant in the more humid areas with Aegle, Boswellia, Diospyros, Bombax, and Terminalia',
        'almost pure stands of hardy Anogeissus pendula with Acacia catechu on rocky ridges',
        'cactus-like Euphorbia, Acacia, Wrightia, and Grewia on the rocky hillocks',
      ],
      sourceIds: ['one-earth-eco-295'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'a transition zone between two floral provinces',
        'the lion population exceeding the reserve carrying capacity',
        'prey herds of sambar, nilgai, spotted deer, chousingha, and chinkara',
        'over 300 bird species including the threatened Indian bustard and lesser florican',
      ],
      sourceIds: ['one-earth-eco-295'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 6% with a protection level of 7. Current protection is low at about 4% of the total area, and a large portion of the growing lion population roams outside the reserve, creating human-wildlife conflict. Priorities include expanding lion habitat, connecting protected areas, and engaging communities across the Gir landscape.',
      sourceIds: ['one-earth-eco-295'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:asiatic-lion',
      'species:blackbuck',
      'species:great-indian-bustard',
      'species:indian-gazelle',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-295'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:296',
    summary: {
      value:
        'Narmada Valley Dry Deciduous Forests represent the dry forests along the Narmada River Valley, a rift valley situated in a fault zone marking the boundary between northern India and the Indian Peninsula. The ecoregion still retains large, connected habitat blocks for the tiger, common leopard, gaur, wild dog, sloth bear, and blackbuck.',
      sourceIds: ['one-earth-eco-296'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the Narmada, India\u2019s fifth longest river and third longest entirely within India',
        'a rift valley in a fault zone between the Vindhya and Satpura ranges',
        'the river rising in the Amarkantak Plateau and flowing west over 1,300 km to the Arabian Sea',
        'fossilized bones of the carnivorous Rajasaurus narmadensis confirming Gondwana origins',
      ],
      sourceIds: ['one-earth-eco-296'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Mildly seasonal, with a seven to eight month dry season interrupted by the southwest monsoon from June to September that brings about 1,200 to 1,500 mm of rainfall, and temperatures from 17 to 20 degrees Celsius in winter to 30 to 33 in summer.',
      },
      sourceIds: ['one-earth-eco-296'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'forests dominated by teak, a highly prized timber tree',
        'Diospyros, Lagerstroemia, Terminalia, and Hardwickia typical of Indian dry forests',
        'riparian trees of Terminalia arjuna, Syzygium, and Indian willow along the banks',
      ],
      sourceIds: ['one-earth-eco-296'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'the Narmada dam complex inundating 400 km2 of prime wildlife habitat',
        'a rift-valley fault zone channeling species movements',
        'seventeen protected areas covering about 7,600 km2',
        '276 bird species including the threatened lesser florican and Indian bustard',
      ],
      sourceIds: ['one-earth-eco-296'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 5% with a protection level of 9. The ecoregion holds large connected habitat blocks, but a contentious hydro project has built a series of dams that leave over 150 km of the lower river dry most of the year. Priorities include safeguarding connectivity, mitigating dam impacts, and protecting tiger and wolf populations.',
      sourceIds: ['one-earth-eco-296'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:indian-wolf',
      'species:sloth-bear',
      'species:blackbuck',
      'species:tiger',
      'species:lesser-florican',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-296'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:320',
    summary: {
      value:
        'The Indus River Delta-Arabian Sea Mangroves lie in several disjunct patches lining the shorelines of the Indus River Delta and the Gulfs of Kutch and Khambhat. Its grey-mangrove sloughs provide spawning and nursery grounds for fishes and shellfishes and a staging area for tens of thousands of Siberian migrants.',
      sourceIds: ['one-earth-eco-320'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'disjunct patches along the Indus River Delta shoreline',
        'the Gulfs of Kutch and Khambhat on the Indian coast',
        'evaporating mudflats crossed by seasonal rivers',
        'exceptionally saline mangrove sloughs',
      ],
      sourceIds: ['one-earth-eco-320'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Arid and extreme, with temperatures from near-freezing in winter to 50 degrees Celsius in summer, only 100 to 500 mm of rain from the July to September monsoon, and very high evaporation.',
      },
      sourceIds: ['one-earth-eco-320'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'mangrove community dominated by the single species Avicennia marina',
        'Rhizophora and Acanthus nearer the less-saline feeder creeks',
        'pneumatophores and prop roots aerating waterlogged soils',
        'viviparous seeds that germinate while still attached to the tree',
      ],
      sourceIds: ['one-earth-eco-320'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'mangroves as spawning grounds and nurseries for fish and shellfish larvae',
        'fishing cats returning to a coast where they were thought extinct in Pakistan',
        'a flyover and staging area for tens of thousands of Siberian winter migrants',
        'about 125 bird species including the greater flamingo and Dalmatian pelican',
      ],
      sourceIds: ['one-earth-eco-320'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 30% with a protection level of 9. About a third of the ecoregion is formally protected, but very little mangrove remains outside the reserves, and industrial pollution from Karachi, oil spills, and reduced river flow raising salinity threaten the system. Priorities include curbing upstream diversions, controlling coastal pollution, and expanding protection of remaining mangroves.',
      sourceIds: ['one-earth-eco-320'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:dalmatian-pelican',
      'species:fishing-cat',
      'species:greater-flamingo',
    ],
    countryIds: ['PK', 'IN'],
    sources: ['one-earth-eco-320'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:312',
    summary: {
      value:
        'Rann of Kutch Seasonal Salt Marsh represents the saline wetlands and mudflats at the mouth of the Luni River draining the Aravalli Hills of northwestern India, most lying in Gujarat with an extension into Pakistan\u2019s Sind. It is the refuge of the only surviving population of the endangered Indian wild ass and hosts one of the world\u2019s largest flamingo breeding colonies.',
      sourceIds: ['one-earth-eco-312'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'saline wetlands and mudflats at the mouth of the Luni River',
        'the Great and Little Ranns of Gujarat extending into Pakistan\u2019s Sind Desert',
        'sitting along the Tropic of Cancer',
        'created by complex geological processes and once shallow extensions of the Arabian Sea',
        'elevated, less flooded areas known as bets',
      ],
      sourceIds: ['one-earth-eco-312'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Extremely hot and dry, with the mudflats briefly flooding to about half a meter in the wet season and temperatures rising above 50 degrees Celsius as the wetlands dry to a hardpan.',
      },
      sourceIds: ['one-earth-eco-312'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'grasses, thorny xerophytic scrub, and short tangled trees',
        'sedges of Cyperus and Scirpus emerging from the flooded areas',
        'mat-forming Cressa cretica and mangrove grass Aeluropus lagopoides',
        'halophytic seablight Suaeda fruticosa and Suaeda nudiflora on the bets',
        'scattered Salvadora persica, Prosopis juliflora, Tamarix, and Urochondra setulosa',
      ],
      sourceIds: ['one-earth-eco-312'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'seasonal flooding supporting tens of thousands of aquatic and wading birds',
        'the Rann acting as the refuge for the only Indian wild ass population',
        'one of the world\u2019s largest breeding colonies of greater and lesser flamingos',
        'over 50 mammal species including chinkara, nilgai, wolf, blackbuck, hyena, and caracal',
      ],
      sourceIds: ['one-earth-eco-312'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 79% with a protection level of 10. The seasonal salt marsh is largely spared from dense settlement but faces grazing pressure and industrial development along its margins. Priorities include guarding the wild ass population, maintaining the flooding regime, and protecting the flamingo breeding colonies.',
      sourceIds: ['one-earth-eco-312'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:indian-wild-ass',
      'species:blackbuck',
      'species:caracal',
      'species:indian-gazelle',
      'species:greater-flamingo',
    ],
    countryIds: ['IN', 'PK'],
    sources: ['one-earth-eco-312'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:314',
    summary: {
      value:
        'Aravalli West Thorn Scrub Forests represent the thorn scrub of northwestern India and Pakistan along the ancient Aravalli Mountains, which formed over 1,500 million years ago. Despite being a degraded state of former tropical dry forest, it carries a remarkably rich carnivore community of leopard, caracal, and grey wolf.',
      sourceIds: ['one-earth-eco-314'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'thorn scrub along the Aravalli Mountains',
        'straddling the international border between India and Pakistan',
        'mountains formed over 1,500 million years ago',
        'saline coastal soils near the Arabian Sea',
      ],
      sourceIds: ['one-earth-eco-314'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Dry, with average annual rainfall of about 750 mm in the north rising to about 950 mm toward the ocean, summer daytime temperatures exceeding 45 degrees Celsius, and winter nights falling below freezing.',
      },
      sourceIds: ['one-earth-eco-314'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'stunted Acacia-dominated scrub rarely exceeding 6 m in height',
        'Prosopis, Grewia, Salvadora, Zizyphus, Anogeissus, Gardenia, Capparis, and Carissa',
        'climbers of Tragia, Rivea, Tinospora, Vitis, and Peristrophe',
        'Euphorbia shrubland in the drier areas',
        'Salvadora and Tamarix on saline coastal soils',
      ],
      sourceIds: ['one-earth-eco-314'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'all species highly xerophytic and adapted to aridity',
        'blackbuck spared from hunting by the cultural reverence of Bishnoi communities',
        'a rich mid-to-large carnivore community of wild cats and canids',
        'the threatened Indian bustard and lesser florican present',
      ],
      sourceIds: ['one-earth-eco-314'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 5% with a protection level of 9. Protected areas cover only about 4% of the vast ecoregion and individual reserves are small, though the Bishnoi\u2019s wildlife reverence has historically shielded animals from hunting. Priorities include expanding reserves, controlling grazing and Prosopis invasion, and sustaining the carnivore community.',
      sourceIds: ['one-earth-eco-314'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:indian-desert-cat',
      'species:blackbuck',
      'species:great-indian-bustard',
      'species:caracal',
    ],
    countryIds: ['IN', 'PK'],
    sources: ['one-earth-eco-314'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:317',
    summary: {
      value:
        'The Indus Valley Desert is among the most inhospitable ecoregions of the Indo-Pacific, sitting in the middle of Pakistan\u2019s Indus Valley between the Suleiman Range and the Chenab River. Still, it is one of the most densely populated deserts in the world, supporting the isolated Punjab urial and an important red-necked falcon population.',
      sourceIds: ['one-earth-eco-317'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the middle of Pakistan\u2019s Indus Valley',
        'flanked by the Suleiman Range to the west and the Chenab River to the east',
        'among the most densely populated deserts with about 150 people per km2',
        'projected to face longer droughts and expanding desert margins',
      ],
      sourceIds: ['one-earth-eco-317'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Hot and arid, with temperatures from near-freezing in winter to over 45 degrees Celsius in summer and scant annual rainfall averaging about 600 to 800 mm.',
      },
      sourceIds: ['one-earth-eco-317'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'shrubby vegetation with small shiny leaves bearing a thick waxy coating',
        'xerophytic trees Prosopis, Tamarix, Albizia, and Salvadora growing as isolated clumps',
      ],
      sourceIds: ['one-earth-eco-317'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'the Punjab urial as the largest herbivore, restricted to the Indus valley of Pakistan',
        'predators including wolf, common leopard, hyena, and caracal',
        'red-necked falcon populations dwindling due to capture for falconry',
        '32 mammal species and 190 bird species recorded',
      ],
      sourceIds: ['one-earth-eco-317'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 63% with a protection level of 10. A single large reserve, the Thal Game Reserve, covers most of the ecoregion, while no reptiles or amphibians have been recorded. Priorities include curbing falcon trapping, managing grazing, and buffering the desert against climate-driven expansion.',
      sourceIds: ['one-earth-eco-317'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-necked-falcon',
      'species:punjab-urial',
      'species:caracal',
      'species:indian-wolf',
    ],
    countryIds: ['PK'],
    sources: ['one-earth-eco-317'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:318',
    summary: {
      value:
        'The Thar Desert lies west of the Aravalli Range across northwestern India, extending into the Punjab and Sind regions of Pakistan, and is considered the 9th largest subtropical desert. It is the most densely populated desert in the world, yet still supports rich biodiversity including the blue bull, blackbuck, and chinkara.',
      sourceIds: ['one-earth-eco-318'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'lying to the west of the Aravalli Mountain Range',
        'Gujarat and Rajasthan in India plus the Punjab and Sind regions of Pakistan',
        'about a tenth of the area covered by sand dunes',
        'craggy rock formations and compacted salt-lake bottoms',
        'no oases or artesian wells providing relief',
      ],
      sourceIds: ['one-earth-eco-318'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Extreme, with winter temperatures approaching freezing, summer highs soaring over 50 degrees Celsius, and only 100 to 500 mm of mostly unpredictable rain between July and September.',
      },
      sourceIds: ['one-earth-eco-318'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'xerophilous plants including several kinds of grass and scrub vegetation',
        'low trees of Acacia, Prosopis, Tamarix, and Zizyphus',
        'small leaves with thick waxy surfaces reducing evapotranspiration',
      ],
      sourceIds: ['one-earth-eco-318'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'hunting grounds of lions and cheetah until the turn of the last century',
        'the desert-adapted caracal surviving long periods without drinking water',
        'great Indian bustard populations rebounding in recent years',
        'intensive sheep and goat grazing degrading soil and native vegetation',
      ],
      sourceIds: ['one-earth-eco-318'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 18% with a protection level of 10. The site of the ancient cities of Mohenjo Daro and Harappa, the Thar supports over 40 mammal species and 141 birds but faces intensive grazing that degrades soil and native vegetation. Priorities include restoring grasslands, controlling livestock pressure, and conserving bustard and caracal populations.',
      sourceIds: ['one-earth-eco-318'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:caracal',
      'species:blackbuck',
      'species:indian-gazelle',
      'species:great-indian-bustard',
    ],
    countryIds: ['IN', 'PK'],
    sources: ['one-earth-eco-318'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:228',
    summary: {
      value:
        'East Deccan Moist Deciduous Forests are a tropical moist deciduous forest ecoregion of east-central India that receives about 1,000 mm of rain from the Bay of Bengal monsoon. Its large remaining blocks, several exceeding 5,000 km2, make it a present-day refuge for tiger, Indian wolf, gaur, and sloth bear, with a remarkable assemblage of 10 ungulate species.',
      sourceIds: ['one-earth-eco-228'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'east-central Indian plateau',
        'large forest blocks exceeding 5,000 km2',
        'Simlipal National Park over 2,000 km2, with Kawal, Indravati, and Kanha near 1,000 km2',
        'moist deciduous zone receiving Bay of Bengal monsoon rains',
      ],
      sourceIds: ['one-earth-eco-228'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical monsoon receiving about 1,000 mm of annual rainfall from monsoons sweeping in from the Bay of Bengal, with a hot, dry period between the rainy seasons.',
      },
      sourceIds: ['one-earth-eco-228'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'moist deciduous forest of Shorea, Terminalia, Adina, Syzygium, and Toona',
        'large dense patches with twisted lianas',
        'characteristic trees including Zanthoxylum rhetsa',
      ],
      sourceIds: ['one-earth-eco-228'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'ten ungulate species coexisting in large protected blocks',
        'the Indian mouse deer rediscovered in 2017 after 112 years',
        'the Asian elephant extirpated from the ecoregion',
        'more than 300 bird species including the endemic green avadavat',
      ],
      sourceIds: ['one-earth-eco-228'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 6% with a protection level of 8. About three-fourths of the natural forests have been cleared, but remaining blocks exceed 5,000 km2 and protected areas cover about 4% of the intact habitat. Primary threats are quarrying, coal mining, large-scale clearing for agriculture, and hydroelectric projects.',
      sourceIds: ['one-earth-eco-228'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:gaur',
      'species:indian-mouse-deer',
      'species:green-avadavat',
      'species:tiger',
      'species:indian-wolf',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-228'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:261',
    summary: {
      value:
        'Orissa Semi-Evergreen Forests represent the forests along the low hills of the northeastern Indian state of Odisha, with flora and fauna of ancient Gondwanaland lineage. The adjacent Chilka Lake, India\u2019s first Ramsar site, attracts about two million migrating birds each year, while the ecoregion still supports tiger, elephant, and large gaur herds.',
      sourceIds: ['one-earth-eco-261'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'low hills of the northeastern Indian state of Odisha',
        'Gondwanaland geological lineage',
        'Chilka Lake, India\u2019s first Ramsar site, at the coast',
        'moister, milder relief moderated by elevation and ocean proximity',
      ],
      sourceIds: ['one-earth-eco-261'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Monsoon rains plus the ameliorating effect of elevation and proximity to the ocean create moister, milder conditions all year than in the drier Deccan interior.',
      },
      sourceIds: ['one-earth-eco-261'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'semi-evergreen forests with Sal Shorea robusta as the tall hardwood backbone',
        'tree community of Artocarpus, Michelia, Bridelia, Ficus, and Mangifera',
        'sal and semi-evergreen mixes typical of the northern subcontinent',
      ],
      sourceIds: ['one-earth-eco-261'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Chilka Lake drawing about two million migratory waterfowl from the Caspian, Baikal, and beyond',
        'a hotspot for endemic species known only from very small sites',
        'the Critically Endangered Barkud limbless skink rediscovered in 2003',
        '60 mammal species including tiger, elephant, gaur, wild dog, and sloth bear',
      ],
      sourceIds: ['one-earth-eco-261'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 7% with a protection level of 10. Protected areas cover about 1,500 km2, while the continuing expansion of settlements and grazing pressure from domestic livestock are the primary threats to the remaining forests. Priorities include controlling encroachment and maintaining connectivity for large herbivores and their predators.',
      sourceIds: ['one-earth-eco-261'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:lesser-florican',
      'species:gaur',
      'species:tiger',
      'species:asian-elephant',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-261'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:297',
    summary: {
      value:
        'North Deccan Dry Deciduous Forests extend across the Indian states of Bihar, Odisha, and Madhya Pradesh and represent the northern extent of dry deciduous forest in India, a narrow band sitting in the rain shadow of the Eastern Ghats. The ecoregion is neither exceptionally rich in species nor endemism, but is an important link in India\u2019s tiger conservation program.',
      sourceIds: ['one-earth-eco-297'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a narrow band of dry forest in the Eastern Ghats rain shadow',
        'across the states of Bihar, Odisha, and Madhya Pradesh',
        'completely surrounded by moist deciduous forests',
      ],
      sourceIds: ['one-earth-eco-297'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Drier than the surrounding moist deciduous forests because of the Eastern Ghats rain shadow, favoring tree species adapted to arid conditions.',
      },
      sourceIds: ['one-earth-eco-297'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dry deciduous assemblages of Shorea, Buchanania, Cleistanthus, and Croton',
        'teak Tectona grandis replacing original sal in some areas',
        'drought-tolerant hardwoods and cane of Dendrocalamus strictus',
      ],
      sourceIds: ['one-earth-eco-297'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'rain-shadow aridity shaping the forest composition',
        'an important link in India\u2019s tiger conservation program',
        'about 70 mammal species including the threatened tiger, wild dog, sloth bear, and chousingha',
        'over 260 bird species recorded',
      ],
      sourceIds: ['one-earth-eco-297'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 3% with a protection level of 9. About 90% of the ecoregion\u2019s natural habitat has been cleared or degraded, and the current protected areas cover just about 1,600 km2 in small reserves. Priorities include enlarging and connecting reserves to safeguard tiger dispersal and corridor function.',
      sourceIds: ['one-earth-eco-297'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:four-horned-antelope',
      'species:tiger',
      'species:sloth-bear',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-297'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:316',
    summary: {
      value:
        'Godavari-Krishna Mangroves extend as a narrow band along the middle-eastern coast of the Indian subcontinent, forming larger patches in the estuaries of the Godavari and Krishna rivers. They are the first line of coastal defense against the frequent cyclones and tidal surges that strike the region during the monsoons.',
      sourceIds: ['one-earth-eco-316'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a narrow band along the middle east coast of the Indian subcontinent',
        'larger patches in the estuaries of the Godavari and Krishna rivers',
        'two of the larger rivers flowing east from the vast, arid Deccan Plateau',
      ],
      sourceIds: ['one-earth-eco-316'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Monsoon tropical, with the southwest monsoon from June to September bringing over 600 mm of rain, the northeast monsoon from October to December over 300 mm, and intermittent rainfall during the rest of the year.',
      },
      sourceIds: ['one-earth-eco-316'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        '35 mangrove tree species, of which only 16 are true mangroves needing both sea and river water',
        'characteristic Avicennia, Suaeda, Rhizophora, and Bruguiera',
        'typical genera of Asia-Pacific mangroves',
      ],
      sourceIds: ['one-earth-eco-316'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'estuarine mixing of fresh and salt water across the delta',
        'the banded archerfish shooting water jets to knock down prey up to 3 m away',
        'mid-sized predators of golden jackal, fishing cat, and smooth-coated otter',
        'over 140 bird species including lesser florican, flamingos, and spot-billed pelicans',
      ],
      sourceIds: ['one-earth-eco-316'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 18% with a protection level of 10. Very little of these mangroves is protected, and almost all of the remaining forest has been cleared or degraded, mostly to create shrimp farms and for agriculture. Priorities include halting mangrove conversion, restoring degraded stands, and strengthening coastal protection.',
      sourceIds: ['one-earth-eco-316'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:water-monitor-lizard',
      'species:fishing-cat',
      'species:lesser-florican',
      'species:greater-flamingo',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-316'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:290',
    summary: {
      value:
        'Central Deccan Plateau Dry Deciduous Forests sit in the middle of the Deccan Plateau that makes up most of India, a region that still retains vast areas of natural habitat exceeding 5,000 km2. These forests are key for conserving the Bengal tiger and the endemic Jerdon\u2019s courser, a nocturnal bird rediscovered in 1986 after being thought extinct.',
      sourceIds: ['one-earth-eco-290'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the middle of the Deccan Plateau',
        'vast natural habitat blocks exceeding 5,000 km2',
        'Hardwickia-dominated woodland with an upper canopy of 15 to 25 m',
      ],
      sourceIds: ['one-earth-eco-290'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Semi-arid tropical with a long dry season and monsoon rains; a Miocene-era fossil flora of evergreen rainforest plants reveals a much moister climatic past than today\u2019s predominantly dry forests.',
      },
      sourceIds: ['one-earth-eco-290'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dry forest dominated by Hardwickia, renowned for the hardest and heaviest wood in India',
        'xerophytic dry deciduous woodland of the central plateau',
        'fossil-record evidence of once evergreen rainforest vegetation',
      ],
      sourceIds: ['one-earth-eco-290'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'large blocks sustaining tigers and a rich ungulate community',
        'the endemic Jerdon\u2019s courser, a nocturnal member of the pratincole family',
        'habitat for wild buffalo, wild dog, sloth bear, chousingha, gaur, blackbuck, and chinkara',
        'almost 300 bird species alongside the Indian giant squirrel',
      ],
      sourceIds: ['one-earth-eco-290'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 4% with a protection level of 9. Sixteen protected areas cover about 3% of the ecoregion, led by the 3,500 km2 Nagarjunasagar Tiger Reserve, while the Sri Lankamaleswara and Sri Penusila Narasimha sanctuaries protect the Jerdon\u2019s courser. Priorities include expanding tiger habitat and safeguarding the courser\u2019s scrub habitat.',
      sourceIds: ['one-earth-eco-290'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:tiger',
      'species:jerdons-courser',
      'species:indian-giant-squirrel',
      'species:four-horned-antelope',
      'species:blackbuck',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-290'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:293',
    summary: {
      value:
        'East Deccan Dry-Evergreen Forests form a narrow strip of dry evergreen forest along the coast of southeastern India, unusual among dry forests because the trees retain their leaves through the long dry season. Almost all original forest has been cleared, and the only natural stands survive as sacred groves protected by religious belief in jungle deities.',
      sourceIds: ['one-earth-eco-293'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a narrow coastal strip of southeastern India',
        'low-lying plains with sandy soils',
        'surviving natural examples confined to sacred groves',
      ],
      sourceIds: ['one-earth-eco-293'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Dry, with an average rainfall of only 800 mm delivered mainly by the brief northeast monsoon between October and December, and dry-season highs that can reach a stifling 44 degrees Celsius.',
      },
      sourceIds: ['one-earth-eco-293'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'evergreen look maintained through swollen, water-storing roots and stems',
        'thick waxy leaf layers slowing water loss',
        'common trees Manilkara hexandra, Diospyros ebernum, Strychnos nux-vomica, Drypetes sepiaria, and Flacourtia indica',
        'sacred groves holding the only original examples of the forest',
      ],
      sourceIds: ['one-earth-eco-293'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'drought adaptation through water storage and waxy leaves',
        '66 mammal species with none endemic',
        '230 bird species including the globally threatened lesser florican',
        'the exotic Prosopis spreading rapidly and taking over native forest',
      ],
      sourceIds: ['one-earth-eco-293'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 3% with a protection level of 7. Almost all original forest has been converted for other land uses, and only sacred groves hold natural stands while the exotic Prosopis spreads through native forest. Priorities include strengthening protection of the sacred groves and controlling invasive Prosopis.',
      sourceIds: ['one-earth-eco-293'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:indian-gazelle',
      'species:lesser-florican',
      'species:blackbuck',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-293'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:298',
    summary: {
      value:
        'South Deccan Plateau Dry Deciduous Forests cover the dry forests of the southern Deccan, lying in the rain shadow cast by the Western Ghats Mountains. The ecoregion provides landscape-scale habitat for the largest Asian elephant population in the world, estimated at about 6,300 animals within the Brahmagiri-Nilgiri-Eastern Ghats Elephant Range.',
      sourceIds: ['one-earth-eco-298'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the southern Deccan Plateau in the Western Ghats rain shadow',
        'undulating terrain crossed by the 12,000 km2 elephant range',
        'upper canopy at 15 to 25 m draped in lianas',
      ],
      sourceIds: ['one-earth-eco-298'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Seasonal tropical with annual rainfall of 900 to 1,500 mm depending on the rain-shadow terrain, and stifling summer temperatures rising above 40 degrees Celsius.',
      },
      sourceIds: ['one-earth-eco-298'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'deciduous forest of Terminalia, Albizia, Cassia, Dalbergia, and Stereospermum',
        'Pterocarpus, Shorea, and Diospyros among the canopy mix',
        'Indian sandalwood Santalum album, selectively removed as one of the world\u2019s most expensive woods',
      ],
      sourceIds: ['one-earth-eco-298'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'landscape-scale connectivity sustaining the largest Asian elephant population',
        'relict species present with Gondwanaland links to Africa and Madagascar',
        'over 75 mammal species recorded',
        'about 260 bird species including the threatened Indian bustard and lesser florican',
      ],
      sourceIds: ['one-earth-eco-298'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 12% with a protection level of 8. Over 80% of the ecoregion\u2019s natural forests have been cleared, and the seven protected areas provide inadequate coverage. Priorities include maintaining elephant corridor connectivity and restoring habitat between the Western Ghats and the plateau.',
      sourceIds: ['one-earth-eco-298'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:asian-elephant',
      'species:tiger',
      'species:indian-gazelle',
      'species:blackbuck',
      'species:great-indian-bustard',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-298'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:301',
    summary: {
      value:
        'Sri Lanka Dry-Zone Dry Evergreen Forests represent the tropical dry forests throughout most of Sri Lanka, where most trees retain their leaves during the dry season. The ecoregion supports one of Asia\u2019s largest Asian elephant populations, over 6,000 animals, and its reserves are considered among the best places in Asia to see leopards.',
      sourceIds: ['one-earth-eco-301'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the dry zone throughout most of Sri Lanka',
        'land bridges linking the island to the mainland until the final Pleistocene separation',
        'Minneriya National Park in north-central Sri Lanka',
        'Yala/Ruhuna and Wilpattu national parks exceeding 1,000 km2',
      ],
      sourceIds: ['one-earth-eco-301'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Monsoon dry, with about 2,000 mm of annual rainfall delivered mainly by the northeast monsoon from December to March and a pronounced long dry season.',
      },
      sourceIds: ['one-earth-eco-301'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dry evergreen forest of Manilkara hexandra, Ceylon satinwood, wood-apple, and the golden rain tree',
        'leaf-retaining trees unusual among dry forests',
        'talawa patches and vernal pools enriching the landscape mosaic',
      ],
      sourceIds: ['one-earth-eco-301'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'the Gathering, with 150 to 200 elephants descending to the exposed Minneriya lake bed',
        'over 6,000 elephants supported in a relatively small ecoregion',
        'the endemic Sri Lankan leopard as the top predator',
        '270 bird species including the near-threatened spot-billed pelican and endemic Sri Lanka grey hornbill',
      ],
      sourceIds: ['one-earth-eco-301'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 51% with a protection level of 7. A system of wildlife reserves covers about 17% of the ecoregion, with Yala and Wilpattu among the oldest national parks in Asia. Priorities include securing elephant corridors, managing agricultural encroachment, and protecting leopard habitat.',
      sourceIds: ['one-earth-eco-301'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sri-lankan-leopard',
      'species:asian-elephant',
      'species:sri-lanka-grey-hornbill',
    ],
    countryIds: ['LK'],
    sources: ['one-earth-eco-301'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:315',
    summary: {
      value:
        'Deccan Thorn Scrub Forests represent the low, sparse thorn scrub of the arid parts of the Deccan Plateau, sprawled across several Indian states and into the Jaffna Peninsula of northern Sri Lanka. The ecoregion harbors the only known population of the Jerdon\u2019s courser, a nocturnal bird rediscovered in 1986 after being assumed extinct.',
      sourceIds: ['one-earth-eco-315'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'arid expanses of the Deccan Plateau across several Indian states',
        'extending into the Jaffna Peninsula in northern Sri Lanka',
        'the better-forested Tirupathi Hill Ranges',
        'exposed, rocky substrates in the driest areas',
      ],
      sourceIds: ['one-earth-eco-315'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Hot and arid, with less than 750 mm of annual rainfall, almost all falling between May and October, and summer temperatures exceeding a sweltering 40 degrees Celsius.',
      },
      sourceIds: ['one-earth-eco-315'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'thorny Acacia species dominating the scrub',
        'Euphorbia scrub on the driest, rocky ground',
        'dry deciduous forest patches of the Tirupathi Hills with a rich medicinal flora',
        'the endangered endemic cycad Cycas beddomei restricted to these hills',
      ],
      sourceIds: ['one-earth-eco-315'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'the only habitat of the ground-dwelling nocturnal Jerdon\u2019s courser',
        'herbivores ranging from the four-horned antelope to sambar, nilgai, and gaur',
        'Indian wolf mostly eliminated through retaliatory poisoning',
        'invasive Prosopis juliflora altering the scrub community',
      ],
      sourceIds: ['one-earth-eco-315'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 4% with a protection level of 8. Eleven protected areas barely cover 1% of the ecoregion\u2019s area, while most wolves have been eliminated through poisoning. Priorities include securing Jerdon\u2019s courser habitat, expanding scrub protection, and controlling invasive species and grazing.',
      sourceIds: ['one-earth-eco-315'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:jerdons-courser',
      'species:blackbuck',
      'species:indian-gazelle',
      'species:four-horned-antelope',
    ],
    countryIds: ['IN', 'LK'],
    sources: ['one-earth-eco-315'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:218',
    summary: {
      value:
        'The Andaman Islands Rainforests cover the Andaman cluster of the Bay of Bengal archipelago, which continues southward toward the Nicobar Islands. Over 2,500 flowering plant species have been recorded from these small islands, about a tenth of them endemic, including the genera Nicobariodendron, Pseudodiplospora, and Sphyranthera.',
      sourceIds: ['one-earth-eco-218'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'archipelago along the eastern side of the Bay of Bengal',
        'isolated from the mainland during the middle Miocene',
        'reconnected with the mainland during the Pleistocene when sea levels fell',
        'floristically closer to northeast India, Myanmar, and Thailand than to the Nicobars',
      ],
      sourceIds: ['one-earth-eco-218'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Equatorial and oceanic, pleasantly tropical with temperatures ranging from 22 to 30 degrees Celsius and annual rainfall around 3,000 to 3,800 mm falling mostly during the monsoons, with frequent cyclonic winds and thunderstorms.',
      },
      sourceIds: ['one-earth-eco-218'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'coastal and mangrove forests transitioning to evergreen and deciduous forests inland',
        'mangroves dominated by species of the family Rhizophoraceae',
        'inland forests dominated by Dipterocarpaceae typical of Asian mainland forests',
      ],
      sourceIds: ['one-earth-eco-218'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'island isolation during the Miocene and reconnection during the Pleistocene shaping endemism',
        'high endemism concentrated among small, cryptic mammals and birds',
        'cyclones and occasional tsunamis as natural disturbance cycles',
        'volcanic formation of the Nicobars separating the two island clusters',
      ],
      sourceIds: ['one-earth-eco-218'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth sets a protection target of 87% for this ecoregion, yet current protection is inadequate given the wide distribution of endemic species along the island chain. Priority actions include limiting immigration, preventing and controlling alien invasive species, and improving protected area coverage to better represent terrestrial ecosystems and endemicity.',
      sourceIds: ['one-earth-eco-218'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:andaman-serpent-eagle',
      'species:andaman-crake',
      'species:narcondam-hornbill',
      'species:andaman-horseshoe-bat',
      'species:andaman-rat',
    ],
    countryIds: ['IN', 'MM'],
    sources: ['one-earth-eco-218'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:234',
    summary: {
      value:
        'The Irrawaddy Freshwater Swamp Forests cover the lowlands immediately behind the mangroves, where fresh water from the Irrawaddy River pushes back the salt water. Most of the swamps have been converted to rice paddies and settlements, and hunting has depleted the wildlife in this delta ecoregion that once hosted Myanmar\u2019s capital, Yangon.',
      sourceIds: ['one-earth-eco-234'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'delta zone behind the mangroves where fresh Irrawaddy water pushes back salt water',
        'shale and sedimentary rocks in the west',
        'sandy loam and calcareous substrates in the east',
        'loamy river delta built up by silt deposition and tidal action',
      ],
      sourceIds: ['one-earth-eco-234'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical monsoonal, with heavy monsoon rains from June to October and a highly fertile river delta; the southern portion fans out into marshes, oxbow lakes, islands, and meandering rivulets and streams.',
      },
      sourceIds: ['one-earth-eco-234'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'mix of deciduous forests with teak, Xylia kerri, and species of Salmalia, Dalbergia, Spondias, Terminalia, Eugenia, and Vitex',
        'bamboo brakes prevalent, especially on the eastern slopes of the Rakhine mountains',
        'freshwater swamps transitioning into the Myanmar Coastal Mangroves to the south',
      ],
      sourceIds: ['one-earth-eco-234'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'one of the most heavily silted rivers in the world, ranked just behind the Yellow, Ganges, Amazon, and Mississippi rivers in silt deposition',
        'sedimentation mounting because of deforestation in the upper watersheds',
        'wetlands supporting thousands of migratory wading and shore birds each year',
        'large mammals largely extirpated, with refuge populations of sambar deer and hog deer and more numerous wild boars',
      ],
      sourceIds: ['one-earth-eco-234'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of just 5% for this ecoregion, and almost all unprotected forest has been converted to anthropogenic land uses. Recommended priorities are to secure the existing protected areas, conserve the wetlands for waterbirds, and develop regional strategic conservation action plans for the Irrawaddy system.',
      sourceIds: ['one-earth-eco-234'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:cinnamon-bittern',
      'species:spoon-billed-sandpiper',
      'species:hog-deer',
      'species:asian-openbill-stork',
      'species:sambar-deer',
    ],
    countryIds: ['MM'],
    sources: ['one-earth-eco-234'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:250',
    summary: {
      value:
        'The Myanmar Coastal Rainforests cover the lowland evergreen and semi-evergreen forests along the western side of the Arakan Yoma and Tenasserim ranges, with a small northern extension into Bangladesh. A broad array of climatic niches supports flora and fauna of Indian, Indochinese, and Sundaic origin, although the last Sumatran rhinoceros was extirpated from the Arakan Yoma in 1984.',
      sourceIds: ['one-earth-eco-250'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'lowland evergreen and semi-evergreen rainforests along the western Arakan Yoma and Tenasserim ranges',
        'small northern extension into Bangladesh',
        'fertile, densely populated plains of the Ayeyarwady (Irrawaddy) River',
        'brackish and fresh-water habitats with mangrove species along the Tenasserim River',
        'Tenasserim sections including low-statured forests and mixed delta scrub',
      ],
      sourceIds: ['one-earth-eco-250'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical and monsoonal, with annual rainfall exceeding 4,000 mm falling mostly from June to August, and temperatures staying near 30 degrees Celsius with high humidity.',
      },
      sourceIds: ['one-earth-eco-250'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lush dipterocarp-dominated tropical forest',
        'canopy trees including Dipterocarpus alatus, Anisoptera glabra, Hopea odorata, and Parashorea stellata',
        'undergrowth of Calamus palms and creeping bamboo',
        'low-statured forests and mixed delta scrub with Elaeocarpus, Calophyllum, Litsea, Eugenia, and Diospyros',
      ],
      sourceIds: ['one-earth-eco-250'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'copious monsoonal rainfall sustaining lush tropical forest growth',
        'convergence zone for flora and fauna of the Indian, Indochina, and Sundaic regions',
        'poaching pushing tiger, Asian elephant, Malayan tapir, and other mammals to the brink of local extinction',
        'high coat-color variability in the Asiatic golden cat across its range',
      ],
      sourceIds: ['one-earth-eco-250'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 38% for this ecoregion. Forests along the fertile Ayeyarwady plains have been cleared, but significant remaining areas offer opportunities for landscape-scale protection; timber concessions and infrastructure plans threaten them, and priorities include securing forests with ecological connectivity, addressing poaching, and strengthening conservation capacity.',
      sourceIds: ['one-earth-eco-250'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:asiatic-golden-cat',
      'species:tiger',
      'species:asian-elephant',
      'species:malayan-tapir',
      'species:sun-bear',
      'species:clouded-leopard',
    ],
    countryIds: ['MM', 'BD'],
    sources: ['one-earth-eco-250'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:252',
    summary: {
      value:
        'The Nicobar Islands Rainforests cover the cluster of volcanic Nicobar Islands along the eastern Indian Ocean undersea mountain range, with no land connections to the mainland. The ecoregion is one of the richest biodiversity repositories in South and Southeast Asia, with over half of its mammals, more than a third of its birds, a quarter of its reptiles, and a tenth of its flowering plants endemic.',
      sourceIds: ['one-earth-eco-252'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'cluster of volcanic islands with no land connections to the mainland',
        'separated from the Andamans by a deep, 150-kilometer stretch of ocean',
        'perennial rivers only on Great Nicobar Island',
        'beaches forming important nesting sites for marine turtles',
      ],
      sourceIds: ['one-earth-eco-252'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical, with temperatures ranging from 24 to 31 degrees Celsius and about 80% humidity; the southwest monsoon brings 3,000 to 3,800 mm of rain with frequent cyclones and thunderstorms.',
      },
      sourceIds: ['one-earth-eco-252'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'coastal and mangrove forests transitioning to evergreen and moist deciduous forests in the interior',
        'forest trees including Pterocarpus dalbergioides, Dipterocarpus, Terminalia, Diospyros marmorata, and Artocarpus chaplasha',
        'mangrove stands with Rhizophora, Bruguiera, Avicennia, and Ceriops',
        'interior grasslands thought to be anthropogenic in origin',
      ],
      sourceIds: ['one-earth-eco-252'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'volcanic origin and permanent isolation driving high endemism',
        'floristic affinities with Malaysia and Indonesia rather than the Andaman Islands',
        'beaches providing nesting habitat for leatherback, green, and hawksbill turtles',
        'introduced species altering natural communities and ecological dynamics',
      ],
      sourceIds: ['one-earth-eco-252'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth sets a very high protection target of 95% for this ecoregion. Forests are cleared for plantation agriculture, cattle grazing and fires degrade habitat, fuelwood harvesting and the ornamental trade deplete stocks, and exotic species threaten native communities; priorities include demarcating protected areas, drafting recovery plans for endemic species, controlling invasives, and promoting social forestry.',
      sourceIds: ['one-earth-eco-252'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:nicobar-imperial-pigeon',
      'species:nicobar-megapode',
      'species:nicobar-flying-fox',
      'species:leatherback-turtle',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-eco-252'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:284',
    summary: {
      value:
        'The Tenasserim-South Thailand Semi-Evergreen Rainforests span the mountainous southern sector of the Tenasserim Range that forms the boundary between Thailand and Myanmar, extending into the northernmost areas of Malaysia. With over 560 recorded bird species, including nine hornbill species, and one of the richest mammal assemblages in Asia, the ecoregion is also the last refuge of the endangered Gurney\u2019s pitta.',
      sourceIds: ['one-earth-eco-284'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'transition from the continental dry evergreen forests of central Thailand to the semi-evergreen rainforests of the Malayan peninsula',
        'mountainous southern Tenasserim Range forming the Thailand-Myanmar boundary',
        'extending into the northernmost areas of Malaysia',
        'southern margin defined by the Kangar-Pattani floristic boundary',
      ],
      sourceIds: ['one-earth-eco-284'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical, with little change in total annual precipitation but a climatic transition from non-seasonal rainfall to a two-to-three-month dry period across the Kangar-Pattani boundary.',
      },
      sourceIds: ['one-earth-eco-284'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'forests dominated by Dipterocarpaceae, with Dipterocarpus alatus, D. griffithii, Hopea odorata, and several species of Shorea',
        'mature trees buttressed and draped with lianas and epiphytes, including Drynaria basket ferns and over 700 orchid species',
        'Nepenthes pitcher plants growing in nitrogen-deficient habitats',
        'root-parasitic Rafflesia kerri sprouting foul-smelling flowers',
      ],
      sourceIds: ['one-earth-eco-284'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'turnover of about 575 plant genera across the Kangar-Pattani floristic boundary',
        'relatively intact contiguous montane forests supporting the tiger and Asian elephant',
        'lowland forest conversion and degradation threatening hornbills and the Gurney\u2019s pitta',
        'plant-animal interactions including fly pollination of Rafflesia kerri',
      ],
      sourceIds: ['one-earth-eco-284'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 61% for this ecoregion. Large-scale palm oil and rubber plantations are driving forest loss, though extensive stands remain in the mountains; priorities include securing forests at landscape scale, engaging local communities and plantation companies as stewards, and developing species recovery plans for the Gurney\u2019s pitta and wrinkled hornbill.',
      sourceIds: ['one-earth-eco-284'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:gurneys-pitta',
      'species:tiger',
      'species:malayan-tapir',
      'species:banteng',
      'species:binturong',
      'species:sun-bear',
    ],
    countryIds: ['MM', 'MY', 'TH'],
    sources: ['one-earth-eco-284'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:319',
    summary: {
      value:
        'The Indochina Mangroves line the coastal areas of the Gulf of Thailand, with the largest patch in the Mekong delta, one of the top five megadeltas of the world. The forests provide habitat for some of the world\u2019s rarest water birds but suffered extensive degradation from Agent Orange, tank movements, and bombing during the Vietnam war, and continue to be converted for agriculture and aquaculture.',
      sourceIds: ['one-earth-eco-319'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'mangroves lining the coastal areas of the Gulf of Thailand',
        'largest patch in the Mekong River estuary in southern Vietnam',
        'extensive former mangrove areas around Pattaya converted for coastal infrastructure',
        'remaining Vietnamese stands around Camau Point, Cam Ranh Bay, the Mekong delta, and the Red River delta',
      ],
      sourceIds: ['one-earth-eco-319'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical, with the mangrove zone regularly flooded by tidal or brackish water and shaped by saline gleysols.',
      },
      sourceIds: ['one-earth-eco-319'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'strong zonation from Avicennia alba pioneers along open coastal areas',
        'transition upshore to Rhizophora apiculata and Bruguiera parviflora as seawater flux lessens',
        'freshwater-influenced stands of Avicennia officinalis, Sonneratia caseolaris, Nypa fruticans, and Phoenix paludosa',
      ],
      sourceIds: ['one-earth-eco-319'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'mangroves acting as grow-out areas and nurseries for coastal and deep-sea fisheries',
        'habitat for threatened waterbirds including the rarest stork species, Storm\u2019s stork, with fewer than 350 mature individuals in the wild',
        'tidal flooding and salinity gradients driving the mangrove zonation pattern',
      ],
      sourceIds: ['one-earth-eco-319'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 17% for this ecoregion, with very little of it formally protected. Extensive herbicide spraying, conversion to commercial shrimp ponds, and timber extraction have left the coasts vulnerable, and sea-level rise adds further pressure; priorities include establishing a protection network, restoring and replanting converted mangrove areas, and designing species-specific conservation programs.',
      sourceIds: ['one-earth-eco-319'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:estuarine-crocodile',
      'species:lesser-adjutant-stork',
      'species:storms-stork',
      'species:white-winged-wood-duck',
      'species:spot-billed-pelican',
    ],
    countryIds: ['VN', 'TH', 'KH'],
    sources: ['one-earth-eco-319'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:321',
    summary: {
      value:
        'The Myanmar Coast Mangroves hold one of the highest mangrove tree species richness values among mangrove ecoregions of the Indian Ocean, with 28 mangrove species recorded in Myanmar and the largest patch in the Ayeyarwady River delta. Although mangroves are among the ecosystems most severely threatened by habitat loss in Myanmar, more than half of the forest still remains, presenting a significant conservation opportunity.',
      sourceIds: ['one-earth-eco-321'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'coasts of India, Myanmar, Thailand, and Malaysia along the eastern rim of the Bay of Bengal',
        'largest extent of mangroves in the Ayeyarwady estuary and the coasts of Rakhine and Tanintharyi',
        'Ayeyarwady delta composed largely of alluvium deposited over centuries',
        'the Ayeyarwady ranking fifth among the world\u2019s rivers in silt loads',
      ],
      sourceIds: ['one-earth-eco-321'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical coastal and monsoonal, with the Ayeyarwady carrying heavy silt loads into the estuary and saline conditions shaping the mangrove vegetation.',
      },
      sourceIds: ['one-earth-eco-321'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'very high mangrove species richness, with 28 species known from Myanmar',
        'characteristic trees including Rhizophora mucronata, Bruguiera, Sonneratia, Ceriops, Xylocarpus, and Avicennia officinalis',
        'Excoecaria agallocha among the tidal forest trees',
        'mangroves forming a vital transitional ecosystem from terrestrial to marine habitats',
      ],
      sourceIds: ['one-earth-eco-321'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'shoreline stabilization and buffering against erosion from winds, tidal bores, and waves',
        'nursery and shelter functions for juvenile fishes and shellfish',
        'removal of predators allowing prey species such as sambar deer, hog deer, and wild boar to increase',
        'high species richness of migratory and resident water birds',
      ],
      sourceIds: ['one-earth-eco-321'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 31% for this ecoregion. Over-exploitation of the mangroves in the Ayeyarwady delta began during the Second World War and continued through the insurgency period, but there is still opportunity to expand protection; priorities include protecting additional areas toward a 50% coverage target, stopping illegal logging and wildlife poaching, and identifying potential mangrove restoration sites.',
      sourceIds: ['one-earth-eco-321'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:four-toed-terrapin',
      'species:estuarine-crocodile',
      'species:common-leopard',
      'species:hog-deer',
      'species:sambar-deer',
    ],
    countryIds: ['MM', 'TH', 'MY', 'BD'],
    sources: ['one-earth-eco-321'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:226',
    summary: {
      value:
        'The high peaks of the Chin Hills-Arakan Yoma mountains along Myanmar\u2019s west coast are hotspots of plant diversity and endemism, crowned by the 3,051 m tall Mount Natma Taung within a 700 km2 national park. The alpine heights act as sky islands that sheltered Holarctic flora as glaciers retreated, and the ecoregion is a key refuge for the western hoolock gibbon and the endemic Arakan forest turtle.',
      sourceIds: ['one-earth-eco-226'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'high-elevation peaks of the Chin Hills and Arakan Yoma ranges',
        'the Natma Taung and Rongklang ranges forming a Center for Plant Diversity',
        'Mount Natma Taung rising to 3,051 m',
        'steep, rain-drenched western slopes facing the Bay of Bengal',
      ],
      sourceIds: ['one-earth-eco-226'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical with rain through most months that can exceed 4,000 mm annually, summer temperatures averaging about 24 degrees Celsius, and winter temperatures that can drop below freezing.',
      },
      sourceIds: ['one-earth-eco-226'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Bauhinia, Lagerstroemia, and Ficus canopy below 1,000 m',
        'Quercus, Castanopsis, and Schima forests above 1,000 m',
        'Quercus xylocarpa oak dominant between 2,400 and 2,750 m',
        'Rhododendron arboreum and Quercus semecarpifolia above 2,750 m',
        'short-stature forest and shrubby temperate savanna at the highest elevations',
      ],
      sourceIds: ['one-earth-eco-226'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'sky-island isolation preserving cold-adapted alpine populations',
        "the world's largest western hoolock gibbon population in Rakhine State",
        'Himalayan-related relict flora persisting on high summits',
        'montane forests serving as water towers and connectivity anchors',
      ],
      sourceIds: ['one-earth-eco-226'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Only about 6% of the ecoregion is formally protected even though over 80% of its forests remain, largely under tribal stewardship. Roads, mining, oil and gas pipelines, plantations, and shifting cultivation threaten forest connectivity while poaching for the wildlife trade is rife. Priorities include landscape-scale conservation built around elephants and gibbons, regulating slash-and-burn agriculture, promoting green infrastructure, and stopping the poaching of endangered species.',
      sourceIds: ['one-earth-eco-226'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:arakan-forest-turtle',
      'species:hoolock-gibbon',
      'species:asian-elephant',
      'species:elds-deer',
      'species:white-winged-wood-duck',
    ],
    countryIds: ['MM'],
    sources: ['one-earth-eco-226'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:249',
    summary: {
      value:
        'Biogeographic predictions would rank these remote sub-montane rainforests among the most species-rich in Asia, and surveys confirm they hold the highest bird species richness of any Indo-Pacific ecoregion. The ecoregion spans the southern Arakan mountains and Chin Hills of Myanmar, the Chittagong Hills of Bangladesh, and the Mizo and Naga hills along the India-Myanmar border, and includes the leaf muntjac discovered in the Hukawng Valley in 1997.',
      sourceIds: ['one-earth-eco-249'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'remote sub-montane rainforests of the Myanmar-India-Bangladesh borderlands',
        'mountains folded by the collision of the Deccan and Eurasian plates',
        'a biogeographic overlap zone for Indian, Indo-Malayan, and Indo-Chinese biotas',
        'northern Kachin State mountains reaching toward the Hukawng Valley',
      ],
      sourceIds: ['one-earth-eco-249'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical and strongly seasonal, dominated by monsoons sweeping in from the Bay of Bengal, with some areas receiving over 2,000 mm of rainfall a year.',
      },
      sourceIds: ['one-earth-eco-249'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Dipterocarpus, Parashorea, Hopea, and Shorea dominants',
        'tall Chittagong forest bamboo forming monotypic stands',
        'dense understory of smaller evergreen trees and bamboos',
        'Bombax, Albizia, and Castanopsis associates in the mixed canopy',
      ],
      sourceIds: ['one-earth-eco-249'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'convergence of three regional biotas driving exceptional species richness',
        'underexplored forests hinting at further undiscovered endemism',
        'hornbills and pheasants acting as indicators of intact mature forest',
        'monsoon-driven productivity across the sub-montane belt',
      ],
      sourceIds: ['one-earth-eco-249'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Formal protection is low even though over half of the natural forest remains, with shifting cultivation now the primary threat and past timber logging a legacy disturbance. Recommended actions are to expand the protected-area network toward a 50% threshold, offer communities alternative livelihoods to replace slash-and-burn agriculture, and engage local people as conservation stewards.',
      sourceIds: ['one-earth-eco-249'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:leaf-muntjac',
      'species:red-panda',
      'species:asian-elephant',
      'species:great-hornbill',
      'species:green-peafowl',
    ],
    countryIds: ['MM', 'IN', 'BD'],
    sources: ['one-earth-eco-249'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:259',
    summary: {
      value:
        'The Northern Triangle Subtropical Forests of far northern Myanmar still guard undiscovered biodiversity, having yielded the leaf deer in 1997 and the Burmese snub-nosed monkey in 2012. The mountains rise generally above 1,500 m with peaks over 3,000 m and feed the headwaters of the Chindwin and Irrawaddy rivers, their position at the crossroads of four regional floras making them among the most floristically diverse in continental Asia.',
      sourceIds: ['one-earth-eco-259'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'mountains formed by the collision of the Deccan Plateau with Laurasia',
        'terrain rising above 1,500 m with peaks over 3,000 m',
        'Chindwin, Mali Hka, and Mai Hka river headwaters',
        'a subtropical broadleaf belt distributed between 500 and 1,600 m',
      ],
      sourceIds: ['one-earth-eco-259'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical in the lower river valleys and temperate at elevation, with the varied topography blending lowland Indo-Malayan elements with an Indo-Himalayan montane flora shaped by Pleistocene glaciation.',
      },
      sourceIds: ['one-earth-eco-259'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'subtropical broadleaf forest of Magnoliaceae, Lauraceae, and Dipterocarpaceae',
        'Fagaceae, Meliaceae, tree ferns, and climbing palms at upper elevations',
        'pine-oak associations of Pinus kesiya and Quercus in the Ngawchang valley',
      ],
      sourceIds: ['one-earth-eco-259'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Pleistocene glaciation shaping the distribution of tropical and temperate floras',
        'the Mekong and Salween rivers acting as barriers isolating primate lineages',
        'ancient Gondwana relict refuges amid the montane flora',
        'one of the richest butterfly faunas in the world',
      ],
      sourceIds: ['one-earth-eco-259'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Remoteness has preserved large forest blocks, offering a rare chance for proactive conservation before fragmentation closes options. Hillsides are being cleared for shifting cultivation, timber demand from China drives logging, and mining for gems and minerals is increasing. Priorities are a landscape-scale conservation plan, strengthened management and capacity of protected areas, and engagement of local communities as stewards.',
      sourceIds: ['one-earth-eco-259'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:burmese-snub-nosed-monkey',
      'species:leaf-muntjac',
      'species:red-panda',
      'species:takin',
      'species:hoolock-gibbon',
    ],
    countryIds: ['MM'],
    sources: ['one-earth-eco-259'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:304',
    summary: {
      value:
        'Northeast India-Myanmar Pine Forests are among only four pine forest ecoregions in the Indo-Pacific, representing a scarce vegetation type with a restricted distribution. The pines grow in three isolated patches covering over 9,600 km2 on the Naga Hills along the India-Myanmar border at elevations between 1,500 and 2,500 m.',
      sourceIds: ['one-earth-eco-304'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'three isolated pine patches covering over 9,600 km2 in the Naga Hills',
        'international border ridge between India and Myanmar',
        'mountain arc formed by the Deccan-Eurasia collision',
        'slopes between 1,500 and 2,500 m where pines dominate',
      ],
      sourceIds: ['one-earth-eco-304'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'The Naga Hills intercept rain-laden monsoon winds from the Bay of Bengal, and the complex topography creates varied rainfall patterns that favor the region\u2019s large pine forests.',
      },
      sourceIds: ['one-earth-eco-304'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Tenasserim pine with broadleaf Dipterocarpus associates at lower elevations',
        'Khasi pine and blue pine joined by hemlock, spruce, oak, and rhododendron higher up',
        'a thick pine needle layer retarding understory growth',
        'orchids of Bulbophyllum, Dendrobium, Cymbidium, and Vanda on mature trunks',
      ],
      sourceIds: ['one-earth-eco-304'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'fire-resistant pines recovering under frequent burning by resin tappers',
        'shifting cultivation denuding some hillsides',
        'erosion and river sedimentation intensifying with repeated fires and cropping',
        'needle litter shaping a sparse understory flora',
      ],
      sourceIds: ['one-earth-eco-304'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Hardly any of the ecoregion is formally protected, but about 67% of the habitat remains intact because of its remote, largely inaccessible terrain. Shifting cultivation has denuded some hillsides, while frequent fires and cropping have increased erosion and river sedimentation. Priorities are establishing new protected areas for better representation, developing effective management plans, and engaging local communities as stewards.',
      sourceIds: ['one-earth-eco-304'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:khasi-pine',
      'species:tenasserim-pine',
      'species:sambar-deer',
      'species:asiatic-black-bear',
      'species:serow',
    ],
    countryIds: ['IN', 'MM'],
    sources: ['one-earth-eco-304'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:307',
    summary: {
      value:
        'Known infamously as the Golden Triangle, the Northern Triangle Temperate Forests of northern Myanmar remain largely scientifically unexplored yet harbor highly threatened mammals including the red goral, takin, and dusky musk deer. The rugged, deeply dissected mountains are the source of the Chindwin and Mali Hka rivers and sit at the ecotone of the Assam-Indian, Eastern Himalayan, Indo-Malayan, and Chinese floral regions.',
      sourceIds: ['one-earth-eco-307'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        "a narrow band of temperate forest in northern Myanmar's mountains",
        'rugged, deeply dissected range with peaks rising steeply over 3,000 m',
        'headwaters of the Chindwin River system',
        'geologically young peaks from the Deccan-Laurasia collision',
      ],
      sourceIds: ['one-earth-eco-307'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Temperate and montane, with broadleaf forest between 1,830 and 2,700 m passing into a mixed broadleaf-conifer forest at the highest elevations.',
      },
      sourceIds: ['one-earth-eco-307'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Alnus nepalensis, Betula cylindrostachya, Castanopsis, and Michelia broadleaf forest',
        'mixed broadleaf and conifer forest of Quercus, Magnolia, Picea, and Tsuga',
        'a diverse shrub layer of Berberis, Hydrangea, Rhododendron, and Sorbus',
        'Taiwania flousiana among the distinctive canopy conifers',
      ],
      sourceIds: ['one-earth-eco-307'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'old-growth temperate forest sustaining the bamboo-specialist red panda',
        'an ecological link for seasonal migrations of birds and mammals',
        'natural water towers feeding the Irrawaddy headwaters',
        "indicator birds such as Blyth's tragopan and Sclater's monal marking habitat integrity",
      ],
      sourceIds: ['one-earth-eco-307'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Most of the ecoregion is under formal protection, leaving little unprotected habitat. Swidden agriculture and poppy cultivation persist inside protected areas, and wildlife killing for local consumption and the trade heavily targets musk deer, red pandas, and bears. Recommended actions are more effective management of protected areas, sustainable livelihoods for resident communities, and addressing hunting for the wildlife trade.',
      sourceIds: ['one-earth-eco-307'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:takin',
      'species:red-panda',
      'species:red-goral',
      'species:wreathed-hornbill',
      'species:blyths-tragopan',
    ],
    countryIds: ['MM'],
    sources: ['one-earth-eco-307'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:223',
    summary: {
      value:
        'Cardamom Mountains Rainforests cover the wet evergreen forests of the Cardamom and Elephant mountains in southwest Cambodia and southeast Thailand, along with Vietnam\u2019s Dao Phu Quoc Island. The range rises steeply from sea level to over 1,500 m, intercepting monsoon winds that deliver 3,000 to 4,000 mm of rain a year, with some areas such as Emerald Valley receiving over 5,000 mm. The forests are among the most species-rich in Southeast Asia and support the flagship critically endangered Siamese crocodile.',
      sourceIds: ['one-earth-eco-223'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'steep mountain slopes rising from sea level to over 1,500 m',
        'deep humid valleys and ravines',
        'lowland forests of the Elephant Mountains',
        'wind-exposed ridgelines and the Kirirom Plateau',
        'Dao Phu Quoc island',
      ],
      sourceIds: ['one-earth-eco-223'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical monsoon with warm, moisture-laden winds sweeping up the slopes from May to October, bringing 3,000 to 5,000 mm of annual rainfall and frequent fog and mist at higher elevations.',
        annualPrecipitationMm: { min: 3000, max: 5000 },
      },
      sourceIds: ['one-earth-eco-223'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'humid valley wet evergreen forest',
        'hill evergreen and montane forest with dense canopies over 30 m',
        'dwarf lowland rainforest of the Elephant Mountains reaching about 12 m',
        'wind-pruned ridgeline forest under 5 m tall',
        'Pinus merkusii woodland on the Kirirom Plateau',
      ],
      sourceIds: ['one-earth-eco-223'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'orographic interception of monsoon rain over the mountains',
        'fog and mist supporting abundant epiphyte growth',
        'ridge-and-valley differentiation of forest communities',
        'basalt weathering producing mineral-rich soils',
      ],
      sourceIds: ['one-earth-eco-223'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'The protected areas of this ecoregion, though designated, are not managed or protected. Poaching for local consumption and commercial trade, illegal logging, and forest conversion for settlements and agriculture, especially as refugees return after years of civil conflict, all threaten the forests. Recommended actions include establishing proper management, expanding protected areas, and integrating community development and welfare programs with biodiversity conservation.',
      sourceIds: ['one-earth-eco-223'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:siamese-crocodile',
      'species:tiger',
      'species:asian-elephant',
      'species:gaur',
      'species:banteng',
    ],
    countryIds: ['KH', 'TH', 'VN'],
    sources: ['one-earth-eco-223'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:224',
    summary: {
      value:
        'Chao Phraya Freshwater Swamp Forests once lined the alluvial floodplains of the Chao Phraya River for about 400 km upstream of Bangkok, which now sits in the ecoregion\u2019s lower reaches. Like most Asian swamp forests the ecosystem has been extensively converted, and today the original vegetation can only be inferred from historical records. The monsoonal climate brings about 1,400 mm of annual rainfall, with mean temperatures near the city ranging from 24°C to 33°C.',
      sourceIds: ['one-earth-eco-224'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'low alluvial floodplains of the Chao Phraya River',
        'wide lower reaches with floodplains about 180 km across',
        'Lower Central Plain at about 2 m above sea level',
        'Upper Central Plain with the Ping and Nan river valleys',
      ],
      sourceIds: ['one-earth-eco-224'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Monsoonal, with about 1,400 mm of annual rainfall; mean maximum and minimum temperatures are 33°C and 24°C.',
      },
      sourceIds: ['one-earth-eco-224'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'tall Dipterocarpus alatus swamp forest on higher grounds',
        'screw-pine stands in the most waterlogged areas',
        'reeds, grasses, and sedges of the marsh',
        'Phragmites marsh grassland largely replaced by cattail',
      ],
      sourceIds: ['one-earth-eco-224'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'riverine sediment deposition building the floodplains',
        'blocking of seawater intrusion as silt accumulated landward',
        'freshwater swamp vegetation replacing brackish-water communities',
        'gradation of freshwater swamps into mangroves toward the estuary',
      ],
      sourceIds: ['one-earth-eco-224'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Very little of the ecoregion\u2019s natural habitat is protected, and because hardly any habitat remains there is little chance to protect additional areas. Priority conservation actions include conserving remaining wetlands as green spaces in urban landscapes, encouraging the presence and breeding of birds, and identifying opportunities for swamp forest and wetland restoration.',
      sourceIds: ['one-earth-eco-224'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:lyles-flying-fox',
      'species:spot-billed-pelican',
      'species:sarus-crane',
    ],
    countryIds: ['TH'],
    sources: ['one-earth-eco-224'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:225',
    summary: {
      value:
        'Chao Phraya Lowland Moist Deciduous Forests occur as two disjunct areas on either side of the lower Chao Phraya basin, forming a transitional forest between freshwater swamps, dry forests, and rainforests. Annual rainfall ranges from about 1,000 mm in the west to 1,300 mm in the east, rising to 3,000 to 4,000 mm near the Cardamom and Elephant Mountains. Decades of conversion have degraded the ecoregion below thresholds of conservation imperatives, with about 14% of its area protected.',
      sourceIds: ['one-earth-eco-225'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'disjunct lowland blocks east and west of the lower Chao Phraya basin',
        'limestone karst plains around Ratchaburi and Phetchaburi',
        'valleys and foothills grading toward the Tenasserim Range',
        'floodplain edges of the riverine system',
      ],
      sourceIds: ['one-earth-eco-225'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Seasonal monsoonal with about 80% of rainfall from May to October; precipitation ranges from about 1,000 mm in the west to 1,300 mm in the east, reaching 3,000 to 4,000 mm near the Cardamom and Elephant Mountains, with mean temperatures of 23°C to 34°C.',
        annualPrecipitationMm: { min: 1000, max: 4000 },
      },
      sourceIds: ['one-earth-eco-225'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'heterogeneous matrix of vegetation drawing species from neighboring ecoregions',
        'limestone karst forest around Ratchaburi and Phetchaburi',
        'moist deciduous forest grading toward coastal semi-evergreen rainforest',
        'drier forest transitions toward the inland dry forests',
      ],
      sourceIds: ['one-earth-eco-225'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'orographic precipitation where moist winds climb the high mountains',
        'ecotonal transition among freshwater swamp, dry, and rain forests',
        'karst substrates retaining forest where soil is poorly suited to agriculture',
      ],
      sourceIds: ['one-earth-eco-225'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Existing protected areas cover about 14% of the ecoregion, with little scope for expansion given extensive forest conversion. Khao Sam Roi Yot harbors the only known population of the tree Wrightia lanceolata, and the Mae Klong Basin Key Biodiversity Area extends in from the neighboring swamps. Priority actions include strengthening protection measures, establishing habitat corridors between reserves, and regulating further forest conversion.',
      sourceIds: ['one-earth-eco-225'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:siamese-fireback',
      'species:tiger',
      'species:gaur',
      'species:banteng',
      'species:sun-bear',
    ],
    countryIds: ['TH'],
    sources: ['one-earth-eco-225'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:239',
    summary: {
      value:
        'Luang Prabang Montane Rainforests cover the forests above 800 m in northern and central Laos, with small extensions into northeastern Thailand and barely touching northern Vietnam. The montane forests receive 2,000 to 3,000 mm of summer monsoon rain followed by a long dry season, and support a globally important community of 14 rare small carnivores including the flagship marbled cat and Owston\u2019s civet. Over 50% of the ecoregion\u2019s natural forests remain unprotected.',
      sourceIds: ['one-earth-eco-239'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'montane forest above 800 m',
        'deeply dissected valley systems of northern Laos',
        'high plateaus with open conifer woodland',
        'granitic and thin-soil substrates',
      ],
      sourceIds: ['one-earth-eco-239'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Monsoonal, with 2,000 to 3,000 mm of annual rainfall during the summer monsoon followed by a long, pronounced dry season.',
        annualPrecipitationMm: { min: 2000, max: 3000 },
      },
      sourceIds: ['one-earth-eco-239'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'montane hardwood forests with Castanopsis hystrix',
        'mixed conifer-hardwood forests with Keteleeria evelyniana and oaks',
        'open conifer forests on granitic substrates with Engelhardtia spicata',
        'Dipterocarpus turbinatus forest with palms and rattans',
      ],
      sourceIds: ['one-earth-eco-239'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'pronounced summer monsoon followed by a long dry season',
        'burning and clearing shaping low-stature forest openings',
        'swidden agriculture influencing forest structure and composition',
      ],
      sourceIds: ['one-earth-eco-239'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Over 50% of the ecoregion\u2019s natural forests remain unprotected, presenting ample opportunities to conserve a globally important community of rare small carnivores. Swidden clearing is being replaced by rubber and corn plantations, and hunting for subsistence and commercial markets is common. Recommended actions include securing existing protected areas from hunting, protecting additional forest habitat using large mammals as conservation umbrellas, and restricting plantation conversion.',
      sourceIds: ['one-earth-eco-239'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:marbled-cat',
      'species:owstons-civet',
      'species:green-peafowl',
      'species:tiger',
    ],
    countryIds: ['LA', 'TH', 'VN'],
    sources: ['one-earth-eco-239'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:255',
    summary: {
      value:
        'Northern Annamites Rainforests straddle the Annamite, or Truong Son, mountain range along the border between Laos and Vietnam. Steep limestone karst and deeply incised terrain create varied climates, with the eastern slopes in Vietnam receiving over 3,800 mm of rainfall a year while western Laos lies in a rain shadow. The famous discovery of the saola here in 1992 epitomizes the ecoregion\u2019s globally outstanding biodiversity, which includes over 135 mammal and 525 bird species.',
      sourceIds: ['one-earth-eco-255'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'steep, rugged, and deeply incised limestone karst terrain',
        'narrow An Namite valleys and slopes',
        'montane ridges between 1,200 and 1,800 m',
        'thin-soil pine belts above 1,500 m',
      ],
      sourceIds: ['one-earth-eco-255'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Complex and highly varied with steep topography; eastern slopes in Vietnam intercept monsoon storms for more than 3,800 mm of rain a year, while the western side in Laos lies in a pronounced rain shadow.',
        annualPrecipitationMm: { min: 1500, max: 3800 },
      },
      sourceIds: ['one-earth-eco-255'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lower montane forest of Myrtaceae, Fagaceae, and Lauraceae below 1,200 m',
        'Fokienia hodginsii and Podocarpus imbricatus humid forest between 1,200 and 1,800 m',
        'Pinus kesiya pine forest above 1,500 m',
        'dense woody-bamboo understory in the dark lower canopy',
      ],
      sourceIds: ['one-earth-eco-255'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'typhoon-driven disturbance creating forest gaps',
        'gap formation promoting bamboo establishment and growth',
        'karst weathering shaping varied drainage and soil conditions',
      ],
      sourceIds: ['one-earth-eco-255'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'About 31% of the ecoregion is formally protected and another 44% of its forests lie outside protected areas, but none of the reserves has effective conservation management. Hunting of all wildlife is extensive and intensive, while shifting cultivation, infrastructure development, and logging degrade and fragment the forests. Recommended actions include expanding protection across the landscape, supporting effective monitoring, and engaging local communities in conservation.',
      sourceIds: ['one-earth-eco-255'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:saola',
      'species:giant-muntjac',
      'species:annamite-striped-rabbit',
      'species:red-shanked-douc-langur',
    ],
    countryIds: ['LA', 'VN'],
    sources: ['one-earth-eco-255'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:257',
    summary: {
      value:
        'Northern Khorat Plateau Moist Deciduous Forests occupy the northern part of the low, saucer-shaped Khorat Plateau in western Thailand and adjacent Laos. The small transitional ecoregion links dry lowlands to the wet mountain ranges beyond, receiving about 1,600 mm of seasonal rain with temperatures between 21°C and 32°C. Its flagship species is the pileated gibbon, which rarely leaves the canopy and is one of the last arboreal primates to persist.',
      sourceIds: ['one-earth-eco-257'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'northern portion of the low, saucer-shaped Khorat Plateau',
        'transitional slopes from dry lowlands to wet mountain ranges',
        'Mekong riverine corridors',
        'plateau margin lowlands',
      ],
      sourceIds: ['one-earth-eco-257'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Seasonal, with about 1,600 mm of annual rainfall; temperatures range from a cool 21°C to a hot 32°C.',
      },
      sourceIds: ['one-earth-eco-257'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'moist deciduous forest of Lagerstroemia angustifolia, Afzelia xylocarpa, and Pterocarpus macrocarpus',
        'areas of near-monospecific Lagerstroemia dominance',
        'riverine gallery forest along the Mekong corridor',
      ],
      sourceIds: ['one-earth-eco-257'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'transitional ecotone between dry and wet forest ecosystems',
        'seasonal rainfall and leaf-fall dynamics',
        'river flow sustaining riverine and bird habitats',
      ],
      sourceIds: ['one-earth-eco-257'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Very little of this ecoregion is under formal protection, and extensive hunting has driven most wildlife to the verge of extirpation while the use of fire continues to degrade remaining forest. Protecting the remaining forest could reach a 10% protection target within a landscape plan that treats the ecoregion as transitional between adjacent dry and wet forests. Priority actions include a landscape-scale strategy, protecting riverine habitats, and addressing hunting and fires.',
      sourceIds: ['one-earth-eco-257'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:pileated-gibbon',
      'species:asian-elephant',
      'species:sun-bear',
      'species:clouded-leopard',
    ],
    countryIds: ['LA', 'TH'],
    sources: ['one-earth-eco-257'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:258',
    summary: {
      value:
        'Northern Thailand-Laos Moist Deciduous Forests cover the deeply incised limestone karst mountains of northern Thailand and Laos, which form the upper watersheds of the Ping, Wang, Yom, and Nan rivers. The teak-dominated forests receive 1,000 to 1,200 mm of annual rainfall with temperatures of about 20°C to 32°C. About 20% of the ecoregion is formally protected, but pervasive hunting has depleted wildlife and the flagship green peafowl now survives only in isolated populations.',
      sourceIds: ['one-earth-eco-258'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'deeply incised and rugged limestone karst mountains',
        'narrow intermontane valleys',
        'precipitous cliffs and cave systems',
        'upper watershed slopes of the Ping, Wang, Yom, and Nan rivers',
      ],
      sourceIds: ['one-earth-eco-258'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Seasonal monsoonal with 1,000 to 1,200 mm of annual rainfall and temperatures ranging from about 20°C to 32°C.',
        annualPrecipitationMm: { min: 1000, max: 1200 },
      },
      sourceIds: ['one-earth-eco-258'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'teak-dominated Tectona grandis forest with Xylia xylocarpa and Pterocarpus macrocarpus',
        'karst vegetation with endemic habitat specialists',
        'bamboo groves where human disturbance is high',
        'riverine forests along headwater streams',
      ],
      sourceIds: ['one-earth-eco-258'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'karst isolation promoting endemic small-mammal communities',
        'watershed function feeding the Chao Phraya and Mekong rivers',
        'swidden, fire, and erosion shaping degraded hill slopes',
      ],
      sourceIds: ['one-earth-eco-258'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'About 20% of the ecoregion is formally protected, but the reserves cluster in the southwest and pervasive hunting leaves the forests mostly devoid of wildlife. Larger species such as the tiger have been extirpated, and only small refuge populations of Asian elephants, banteng, and gaur remain. Recommended actions include securing reserve clusters with community engagement, addressing illegal hunting, and exploring payments for ecosystem services from downriver users.',
      sourceIds: ['one-earth-eco-258'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:green-peafowl',
      'species:asian-elephant',
      'species:banteng',
      'species:gaur',
    ],
    countryIds: ['LA', 'TH'],
    sources: ['one-earth-eco-258'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:260',
    summary: {
      value:
        'Northern Vietnam Lowland Rainforests extend south from the Red River along the coast and lowlands to Tam Ky in central Vietnam, underlain by diverse limestone formations. The climate is tropical monsoonal, with rainfall peaking in September and October and averaging about 1,800 mm in the north and 3,000 mm near Hue. Centuries of conversion and indiscriminate hunting have left empty forests, though fragments such as Cuc Phuong and Pu Mat retain exceptional floral diversity.',
      sourceIds: ['one-earth-eco-260'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'coastal lowlands and plains south of the Red River',
        'extensive limestone karst formations',
        'hilly terrain of north-central Vietnam',
        'seasonally wet river valleys',
      ],
      sourceIds: ['one-earth-eco-260'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical monsoonal with high temperatures and abundant precipitation peaking in September and October; every month receives at least 50 mm, with mean annual rainfall of about 1,800 mm in the north and 3,000 mm near Hue.',
        annualPrecipitationMm: { min: 1800, max: 3000 },
      },
      sourceIds: ['one-earth-eco-260'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dense three-tiered wet evergreen forest rising to 25 or 35 m',
        'ecologically important Hopea and Parashorea dipterocarps',
        'sub-canopy fan palm Livistona saribus in forest gaps',
        'fast-growing Knema erratica colonizers in logged forest',
      ],
      sourceIds: ['one-earth-eco-260'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'heavy rainfall and short dry season sustaining wet evergreen forest',
        'late-onset precipitation peak in September and October',
        'forest-gap colonization dynamics following logging',
      ],
      sourceIds: ['one-earth-eco-260'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Centuries of forest conversion have cleared or modified most of the forest, with large areas now replaced by Acacia monoculture plantations, and indiscriminate hunting has extirpated virtually all fauna. Existing protected areas are small and much remaining cover is degraded. Recommended actions include supporting reforestation and restoration of native forests, enforcing hunting bans, and expanding the protected area system and its connectivity.',
      sourceIds: ['one-earth-eco-260'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:francoiss-leaf-monkey',
      'species:white-cheeked-gibbon',
      'species:red-shanked-douc-langur',
      'species:owstons-civet',
    ],
    countryIds: ['VN'],
    sources: ['one-earth-eco-260'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:266',
    summary: {
      value:
        'Red River Freshwater Swamp Forests cover the lower valley of the 1,149 km Red River in northern Vietnam, where swamp forests once extended up to 5 km on either side of the river. The ecosystem is ecologically extinct, converted into rice paddies, and Hanoi now sits in the middle of the ecoregion. The original vegetation was probably dominated by Melaleuca paperbark trees, the ecoregion\u2019s flagship species.',
      sourceIds: ['one-earth-eco-266'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'lower Red River valley floodplain',
        'wide, shallow river reaches extending up to 5 km on either side',
        'gradient inland from the river-mouth mangroves',
      ],
      sourceIds: ['one-earth-eco-266'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical monsoonal over the lower Red River valley, where seasonal flooding once kept the swamp forest soils saturated for much of the year.',
      },
      sourceIds: ['one-earth-eco-266'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Melaleuca paperbark swamp forest',
        'freshwater swamp forest on permanently or seasonally flooded mineral soils',
        'mangrove transition communities immediately inland from the coast',
      ],
      sourceIds: ['one-earth-eco-266'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'seasonal river flooding maintaining swamp conditions',
        'freshwater swamp succession inland from the mangroves',
        'sediment deposition across the fertile floodplain',
      ],
      sourceIds: ['one-earth-eco-266'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'This ecoregion is ecologically extinct: its highly productive swamp forests were converted into rice paddies to feed the nation, and Hanoi now sits in the middle of the ecoregion, making it impossible to reconstruct the original biodiversity. Even formerly common birds, mammals, and reptiles have been hunted out for consumption. Recommended interventions are to protect remaining habitat patches, reforest and restore degraded habitat, and prohibit hunting.',
      sourceIds: ['one-earth-eco-266'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:melaleuca-tree',
      'species:cinnamon-bittern',
      'species:asian-openbill-stork',
    ],
    countryIds: ['VN'],
    sources: ['one-earth-eco-266'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:272',
    summary: {
      value:
        'Southern Annamites Montane Rainforests follow the southern Annamite range from the Dragon\u2019s Tail in northwestern Cambodia across the Laos-Vietnam border to the Bolovans Plateau. The diverse geology, including the granitic Kontum Massif rising to Ngoc Linh at 2,598 m, supports rainfall gradients of 1,500 to 2,500 mm and harbors one of the world\u2019s rarest mammals, the saola. The ecoregion also protects several species of douc langurs and more than 410 bird species.',
      sourceIds: ['one-earth-eco-272'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Kontum Massif granitic uplands rising to Ngoc Linh',
        'southern Annamite mountain slopes',
        'Bolovans Plateau in southern Laos',
        'mosaic of volcanic basalts, granites, and sedimentary substrates',
      ],
      sourceIds: ['one-earth-eco-272'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Humid and near-constant, with mean annual temperature of 20–21°C; annual rainfall ranges from 1,500 to 2,500 mm, most falling from August to October.',
        annualPrecipitationMm: { min: 1500, max: 2500 },
      },
      sourceIds: ['one-earth-eco-272'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'rich Fagaceae, Myrtaceae, and Lauraceae evergreen foothill forest',
        'emergent Anacardiaceae and Dipterocarpaceae trees where spared',
        'conifer-rich montane hardwood forest of conifers, Fagaceae, and Theaceae',
        'endemic Pinus dalatensis and Pinus krempfii pine forest',
      ],
      sourceIds: ['one-earth-eco-272'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'rainfall gradient from 1,500 to 2,500 mm structuring forest zonation',
        'centuries of swidden agriculture reshaping forest structure',
        'high humidity and frequent fog favoring epiphyte growth',
      ],
      sourceIds: ['one-earth-eco-272'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'A large part of the ecoregion\u2019s forests remains unprotected, and forest degradation from swidden agriculture and hunting is widespread, including within protected areas. Species of conservation importance, including the saola and several douc langurs, still hold out and should be focal points. Recommended actions include expanding the protection network across the landscape, strengthening governance and monitoring, and engaging local communities in conservation.',
      sourceIds: ['one-earth-eco-272'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:black-shanked-douc-langur',
      'species:saola',
      'species:red-shanked-douc-langur',
      'species:grey-shanked-douc-langur',
      'species:siamese-fireback',
    ],
    countryIds: ['KH', 'LA', 'VN'],
    sources: ['one-earth-eco-272'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:285',
    summary: {
      value:
        'Tonle Sap Freshwater Swamp Forests extend south from Tonle Sap Lake, Southeast Asia\u2019s largest freshwater lake, along the Tonle Sap River and the lower Mekong into southern Vietnam. During the wet season the Mekong backs up into the lake, inundating the floodplains with 4 to 6 m of water for over eight months. Only about 10% of the ecoregion\u2019s forests remain, yet it supports globally important populations of waterbirds and the flagship smooth-coated otter.',
      sourceIds: ['one-earth-eco-285'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Tonle Sap floodplain around the lake',
        'Tonle Sap River corridor',
        'lower Mekong reaches in southern Vietnam',
        'annually inundated swamp shrublands around the lake',
      ],
      sourceIds: ['one-earth-eco-285'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical and seasonal, with mean temperatures lowest in January and highest in April; average annual rainfall is about 1,300 to 1,561 mm, occurring mainly from April to November with a peak in September.',
        annualPrecipitationMm: { min: 1300, max: 1561 },
      },
      sourceIds: ['one-earth-eco-285'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'swamp shrublands covering most of the ecoregion',
        'stunted swamp forests around the lake under a 4 m canopy',
        'Euphorbiaceae, Fabaceae, and Combretaceae tree communities',
        'dense woody climbers of Acacia, Breynia, and Combretum',
      ],
      sourceIds: ['one-earth-eco-285'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'seasonal Mekong flood pulse inundating floodplains four to six meters deep',
        'soil-moisture heterogeneity structuring woody vegetation',
        'wet-season congregations of gregarious waterbirds',
      ],
      sourceIds: ['one-earth-eco-285'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Only about 10% of the ecoregion\u2019s forests remain, and even these are heavily modified and degraded by farming, settlements, and extraction of timber and fuelwood. The tiger is believed to be extirpated and Asian elephants no longer migrate to the lake region, while threatened waterbirds such as the eastern sarus crane, white-shouldered ibis, and giant ibis hang on. Recommended interventions include securing remaining habitat in protected areas, providing effective management, and engaging stakeholders in reducing unsustainable agriculture and extraction.',
      sourceIds: ['one-earth-eco-285'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:smooth-coated-otter',
      'species:white-shouldered-ibis',
      'species:giant-ibis',
      'species:sarus-crane',
      'species:hairy-nosed-otter',
    ],
    countryIds: ['KH', 'VN'],
    sources: ['one-earth-eco-285'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:286',
    summary: {
      value:
        'Tonle Sap-Mekong Peat Swamp Forests are permanently inundated with shallow freshwater around Tonle Sap Lake and River, forming an outer ring around the deeper freshwater swamp forests and extending into Vietnam. Poor drainage and stagnant, shallow water create anoxic conditions that build peat, and the forests include Livistona palm-dominated swamp, reed beds, and Melaleuca paperbark stands. Vast areas have been converted and drained, leaving the ecosystem a mere vestige of its former extent.',
      sourceIds: ['one-earth-eco-286'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'peat swamp ring around Tonle Sap Lake and River',
        'Haut Chhlong and Blao peatlands of Vietnam',
        'grass and sedge wetlands on fertile alluvial clays',
        'paperbark swamps behind the mangrove areas',
      ],
      sourceIds: ['one-earth-eco-286'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical and seasonal with warm year-round temperatures and a distinct wet season; shallow, stagnant water maintains permanently flooded conditions around the lake and lower river.',
      },
      sourceIds: ['one-earth-eco-286'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Livistona cochinchinensis palm-dominated swamp forest exceeding 30 m',
        'Eugenia, Elaeocarpus, and Calophyllum canopy with stilt roots and pneumatophores',
        'Phragmites karka and Saccharum arundinaceum reed beds',
        'Melaleuca leucadendron paperbark stands',
      ],
      sourceIds: ['one-earth-eco-286'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'peat buildup from retarded decomposition in anoxic, stagnant water',
        'poor drainage creating permanently inundated conditions',
        'flood attenuation and reduction of soil acidification',
      ],
      sourceIds: ['one-earth-eco-286'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Vast areas of these forests have been converted and the wetlands drained, changing the hydrological dynamics of the lake and river system and stripping away ecosystem functions such as flood reduction and biodiversity support. Wild water buffalo, Eld\u2019s deer, and banteng have been extirpated, though the rare hairy-nosed otter and threatened birds such as the eastern sarus crane, giant ibis, and white-shouldered ibis still survive. Recommended actions include integrated water resources management, species recovery plans, and an action plan for habitat restoration.',
      sourceIds: ['one-earth-eco-286'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:white-shouldered-ibis',
      'species:giant-ibis',
      'species:hairy-nosed-otter',
      'species:wild-water-buffalo',
      'species:elds-deer',
    ],
    countryIds: ['KH', 'VN'],
    sources: ['one-earth-eco-286'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:291',
    summary: {
      value:
        'Central Indochina Dry Forests extend across Thailand, Laos, Cambodia, and Vietnam, covering more land area in mainland Southeast Asia than any other forest type. This deciduous dipterocarp woodland experiences 1,000 to 1,500 mm of monsoon rainfall punctuated by five to seven months of drought, and frequent ground fires maintain its open fire-climax structure. The flagship sambar once roamed here alongside elephants and wild cattle, but the kouprey, last seen in 1988, is believed to be globally extinct.',
      sourceIds: ['one-earth-eco-291'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'dry lower slopes and Tenasserim foothills',
        'uplands around the Chao Phraya River basin',
        'northeastern Khorat Plateau',
        'arid plains of Cambodia',
        'upper watersheds of the Se San and Srepok rivers',
      ],
      sourceIds: ['one-earth-eco-291'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Monsoonal, with 1,000 to 1,500 mm of rainfall during the monsoon period punctuated by five to seven months of drought.',
        annualPrecipitationMm: { min: 1000, max: 1500 },
      },
      sourceIds: ['one-earth-eco-291'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'deciduous dipterocarp woodland with a low 5 to 8 m canopy',
        'sparse grass-dominated understory',
        'occasional 10 to 12 m emergent trees',
      ],
      sourceIds: ['one-earth-eco-291'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'frequent ground fires maintaining a fire-climax community',
        'drought-period leaf shedding by deciduous dipterocarps',
        'grass layer supporting grazing herbivores',
      ],
      sourceIds: ['one-earth-eco-291'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Most of the forests have been converted for human uses except for a few large blocks in northeastern Cambodia, and about 10% of the ecoregion falls within reserves, some of which exceed 1,000 to 2,000 km2. The kouprey, largely restricted to this ecoregion, was last seen in 1988 and is now believed to be globally extinct. Recommended actions include protecting and managing existing reserves well, securing corridors for landscape-scale conservation, and implementing effective anti-poaching measures.',
      sourceIds: ['one-earth-eco-291'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sambar-deer',
      'species:kouprey',
      'species:tiger',
      'species:asian-elephant',
      'species:gaur',
    ],
    countryIds: ['TH', 'KH', 'LA', 'VN'],
    sources: ['one-earth-eco-291'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:299',
    summary: {
      value:
        'Southeastern Indochina Dry Evergreen Forests sprawl across Cambodia and southern Vietnam, with parts extending into Thailand and Laos. The humid climate delivers 1,200 to 2,000 mm of annual rainfall with a three-to-six month dry period, and the tall multi-layered forests rise to 30 to 40 m. The flagship red-shanked douc langur co-occurs with one of the region\u2019s richest large-mammal faunas, though on paper over 20% of the ecoregion is protected while enforcement remains weak.',
      sourceIds: ['one-earth-eco-299'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'rolling dry evergreen forest lowlands',
        'Cambodian plains surrounding the central dry deciduous forests',
        'southern Vietnam uplands',
        'Mekong floodplain margins',
      ],
      sourceIds: ['one-earth-eco-299'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Humid tropical, with average annual rainfall between 1,200 and 2,000 mm and a three-to-six month dry period.',
        annualPrecipitationMm: { min: 1200, max: 2000 },
      },
      sourceIds: ['one-earth-eco-299'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'tall multi-layered Dipterocarpaceae forest rising to 30 or 40 m',
        'large buttressed emergents of Ficus, Tetrameles nudiflora, and Heritiera javanica',
        'liana-draped canopies',
        'bamboo colonizers and watercourse palms',
      ],
      sourceIds: ['one-earth-eco-299'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'partial canopy leaf-loss at the peak of the dry season',
        'buttress-root anchorage in seasonally dry soils',
        'bamboo colonization of forest gaps',
      ],
      sourceIds: ['one-earth-eco-299'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'On paper over 20% of the ecoregion is protected, with very large protected areas declared in Cambodia, but political commitment and law enforcement are missing, leaving wildlife and valuable timber vulnerable to poaching. The last Javan rhinoceros was poached in Cat Tien National Park in 2010, and the tiger has not been recorded in Cambodia\u2019s forests for over a decade. Recommended interventions include building government commitment and capacity, strengthening monitoring and protection, and engaging local communities as stewards.',
      sourceIds: ['one-earth-eco-299'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-shanked-douc-langur',
      'species:javan-rhinoceros',
      'species:tiger',
      'species:asian-elephant',
      'species:red-cheeked-gibbon',
    ],
    countryIds: ['KH', 'LA', 'TH', 'VN'],
    sources: ['one-earth-eco-299'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:300',
    summary: {
      value:
        'Southern Vietnam Lowland Dry Forests cover the semi-arid coastal belt of southern Vietnam from Nha Trang to Phan Rang, cast in a rain shadow by the Annamite Mountains. Mean annual rainfall is less than 1,500 mm south of Nha Trang and below 800 mm at Phan Rang, and the dune forests support endemic species such as Hopea cordata and Shorea falcata. It is the second most human-modified dry forest ecoregion in Asia, with protected areas covering only about 6% of its area.',
      sourceIds: ['one-earth-eco-300'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'semi-arid coastal belt south of Nha Trang',
        'succession of small alluvial plains east of the Annamite Range',
        'low hills rising to 1,000 m',
        'extensive coastal sand dunes',
      ],
      sourceIds: ['one-earth-eco-300'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Semi-arid and rain-shadowed, with the Annamite Mountains blocking humid monsoon air; mean annual rainfall is less than 1,500 mm south of Nha Trang and less than 800 mm at Phan Rang.',
        annualPrecipitationMm: { min: 800, max: 1500 },
      },
      sourceIds: ['one-earth-eco-300'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'thicket communities adjacent to the beaches',
        'low scrubby forests further inland',
        'dune forests of Baeckia frutescens and Melaleuca leucadendron',
        'evergreen and semi-evergreen forests on coastal hills',
      ],
      sourceIds: ['one-earth-eco-300'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'rain-shadow aridity creating a semi-arid coastal climate',
        'shifting dune substrates shaping shrubby vegetation',
        'phreatophyte root systems tapping subsurface water',
      ],
      sourceIds: ['one-earth-eco-300'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'The protected area system covers only about 6% of the ecoregion, and even within reserves the wildlife has been hunted out, creating empty forests devoid of vertebrates from reptiles to mammals. Less than 1% of forests remain outside protected areas, and a burgeoning human population surrounds the reserves. Recommended actions are to secure and effectively protect the reserves from further degradation and hunting and to protect forest patches retaining endemic flora.',
      sourceIds: ['one-earth-eco-300'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-cheeked-gibbon',
      'species:black-shanked-douc-langur',
      'species:pileated-gibbon',
    ],
    countryIds: ['VN'],
    sources: ['one-earth-eco-300'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:232',
    summary: {
      value:
        'Hainan Island Monsoon Rainforests cover the montane forests of central Hainan, a large island that broke away from what is now Vietnam over 65 million years ago and is separated from the mainland by the narrow Qiongzhou Strait. The island supports 4,200 plant species, nearly 100 mammals, and 300 birds, and BirdLife International declared it an Endemic Bird Area on account of the Hainan partridge, white-eared night heron, Hainan leaf warbler, and yellow-billed nuthatch.',
      sourceIds: ['one-earth-eco-232'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'montane forests in the central region of the island',
        'central peaks rising to 1,840 m at Wuzhi (Five Finger) Mountain',
        'separated from the Leizhou Peninsula by the narrow Qiongzhou Strait',
        'a mainland extension of the ecoregion on the Leizhou Peninsula',
        'rain-shadowed slopes with a more seasonal climate',
      ],
      sourceIds: ['one-earth-eco-232'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'The climate is monsoonal, with the moist summer monsoon alternating with cool, dry winters; annual precipitation is about 2,000 mm on the east coast and about 1,000 mm on the west coast, with frequent typhoons from the South China Sea.',
        annualPrecipitationMm: { min: 1000, max: 2000 },
      },
      sourceIds: ['one-earth-eco-232'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'deciduous canopy forests of Kleinhovia hospita, Spondias pinnata, and Tilia hainanensis, with a grassy understory beneath the thin canopy',
        'savanna with scattered Albizzia procera in the drier interior',
        'evergreen trees on the moist shaded slopes above 1,000 m, including Diospyros potingensis and Meyna hainanensis and species of Castanopsis, Lithocarpus, and Schima',
        'cloud forests above 1,600 m with conifers such as Dacrydium pierrei, Podocarpus, Cephalotaxus, Keteleeria, and several pines',
        'eight plant genera endemic to Hainan Island, including Pyrenocarpa, Chunia, and Wenchengia',
      ],
      sourceIds: ['one-earth-eco-232'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'island isolation since the late Mesozoic shaping a distinctive flora',
        'montane forest-to-cloud forest gradient above 1,000 m',
        'widespread habitat loss and hunting pressure threatening forest-dependent wildlife',
        'typhoon disturbance influencing forest dynamics',
      ],
      sourceIds: ['one-earth-eco-232'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'The forests have been extensively converted for rubber, oil palm, and coffee plantations, and slash-and-burn cultivation by the Miao and Li people has degraded large montane areas; habitat loss combined with hunting pressure threatens many forest-dependent species. Recommended priority actions are to conserve limestone and montane forests supporting high bird diversity, strengthen protection of existing reserves, and expand the Yinggeling-Limushan and Wuzhishan-Diaoluoshan nature reserves.',
      sourceIds: ['one-earth-eco-232'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:hainan-partridge',
      'species:hainan-black-crested-gibbon',
      'species:hainan-hare',
      'species:asiatic-black-bear',
      'species:sambar-deer',
    ],
    countryIds: ['CN'],
    sources: ['one-earth-eco-232'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:236',
    summary: {
      value:
        'The Jian Nan Subtropical Evergreen Forests cover the Nan Ling mountain range, a moderate divide that separates the Zhujiang River basin from the Yangtze Valley and shelters southern China from cold continental winds. The range is the source of many famous Chinese fruit trees, and its clear mountain streams support the critically endangered Chinese giant salamander, the largest amphibian on Earth.',
      sourceIds: ['one-earth-eco-236'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Nan Ling mountain range forming a climatic and drainage divide',
        'folded topography created by Mesozoic-era activity along east-west and northeast-southwest axes',
        'granites, metamorphosed ancient sedimentary rocks, and Cretaceous red sandstone',
        'limestone karst eroded into jagged, steep pinnacles in some areas',
        'mountains that seldom reach 1,500 m and lack a sharply defined range',
      ],
      sourceIds: ['one-earth-eco-236'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'The climate is mild, with 1,500 to 2,000 mm of annual summer monsoonal rainfall, summer temperatures averaging about 28°C and winter temperatures about 12°C, and very strong winds from typhoons during the summer and autumn.',
        annualPrecipitationMm: { min: 1500, max: 2000 },
      },
      sourceIds: ['one-earth-eco-236'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'forests dominated by species of chestnut and oak, especially Quercus and Cyclobalanopsis, mixed with Schima, Camellia, and Lauraceae',
        'limestone forests characterized by Cyclobalanopsis glauca, Cinnamomum calcarea, Ulmus parvifolia, and Bridelia fordii',
        'subtropical conifers Cathaya argyrophylla, Amentotaxus argotaenia, and Cephalotaxus oliveri on narrow mountain slopes',
        'clumps of bamboo growing in disturbed areas',
      ],
      sourceIds: ['one-earth-eco-236'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'limestone karst environments supporting distinctive rock-adapted communities',
        'climatic divide sheltering southern China from cold continental winds',
        'mountain headwaters providing clear, cold streams for stream-breeding amphibians',
        'topographic complexity created by successive orogenic folding',
      ],
      sourceIds: ['one-earth-eco-236'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Except for a few patches in relatively inaccessible karst limestone, most natural forests have been converted or degraded, with lowlands especially vulnerable to conversion for rice paddies and widespread hunting and collection of rare species. Although over 37,000 km2 of forests lie within protected areas, they represent only about 6% of this large ecoregion and are clustered in the southwest. Recommended actions are to create additional protected areas for better representation and ecological connectivity, engage local communities as conservation stewards, and implement population recovery programs for threatened species.',
      sourceIds: ['one-earth-eco-236'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:chinese-giant-salamander',
      'species:white-headed-leaf-monkey',
      'species:francoiss-leaf-monkey',
      'species:chinese-pangolin',
      'species:cabots-tragopan',
    ],
    countryIds: ['CN'],
    sources: ['one-earth-eco-236'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:268',
    summary: {
      value:
        'The South China-Vietnam Subtropical Evergreen Forests extend from northern Vietnam into southeastern China, including Hainan Island, and form a transitional zone from tropical Vietnamese forests to the subtropical and mixed forests of southern China. The tiger is believed to have originated in this region before vanishing from it, and the flagship Chinese pangolin is now one of the most trafficked mammals in the world.',
      sourceIds: ['one-earth-eco-268'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'complex topography of forested mountains incised by rivers and streams',
        'riparian forests lining the riverine systems',
        'transitional zone from the tropical forests of Vietnam to the subtropical and mixed forests of southern China',
        'extent from northern Vietnam into southeastern China, including Hainan Island',
      ],
      sourceIds: ['one-earth-eco-268'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Rainfall ranges from a low of about 1,800 mm near the Red River Basin in Vietnam to over 2,850 mm further north in China, with no completely dry months; the north has a more seasonal climate with cool winters and hot, humid summers.',
        annualPrecipitationMm: { min: 1800, max: 2850 },
      },
      sourceIds: ['one-earth-eco-268'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'tree dominance shared by species of Lauraceae, Fagaceae, and Meliaceae',
        'dominant canopy species including Castanopsis chinensis, Schima superba, and Syzygium rehderianum',
        'canopy reaching around 30-35 m on most substrates',
        'stunted limestone forests reaching about 15-20 m in height',
        'high regional endemism with strong floristic relationships to regions further north in China',
      ],
      sourceIds: ['one-earth-eco-268'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'year-round rainfall without a fully dry season',
        'strong floristic relationships with areas to the north and high regional endemism',
        'poaching pressure collapsing large-mammal communities, leaving few species larger than a deer',
        'a proposed cradle of tiger evolution in Asia',
      ],
      sourceIds: ['one-earth-eco-268'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Very little pristine forest remains; most habitat has been converted, fragmented, and degraded by shifting cultivation, permanent agriculture, logging, settlements, and urban and peri-urban infrastructure, including some of China\u2019s most populated cities. The critically endangered Chinese pangolin is poached across the ecoregion for its meat and scales and is expected to be the next mammal to go extinct here without immediate action. Recommended interventions are to address wildlife poaching and trade at all levels, engage local communities as conservation stewards, and expand and strengthen the protected area system.',
      sourceIds: ['one-earth-eco-268'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:chinese-pangolin',
      'species:tiger',
      'species:south-china-tiger',
    ],
    countryIds: ['CN', 'VN', 'HK', 'MO'],
    sources: ['one-earth-eco-268'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:269',
    summary: {
      value:
        'The South Taiwan Monsoon Rainforests cover the low-elevation forests of the southernmost part of Taiwan, where granitic mountains rise steeply from a deep oceanic trench to nearly 3,952 m at Mount Yushan, with the western and northern slopes grading into coastal plains. The flagship Taiwan sika deer, driven to extinction in the wild by 1969, is now being restored through captive breeding and reintroduction.',
      sourceIds: ['one-earth-eco-269'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'low-elevation forests in the southernmost part of the island',
        'granitic mountains rising steeply on the eastern slope from a deep oceanic trench',
        'summit of Mount Yushan reaching nearly 3,952 m',
        'western and northern slopes sloping gently into coastal plains',
        'island profile shaped by collision of the Asian mainland plate with the Philippine plate',
      ],
      sourceIds: ['one-earth-eco-269'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'The summer monsoon from May to October brings most of the roughly 2,600 mm of annual rainfall.',
        annualPrecipitationMm: { min: 2600, max: 2600 },
      },
      sourceIds: ['one-earth-eco-269'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'forest vegetation very similar to the coastal forests of southeastern mainland China',
        'a broad mix of families including Lauraceae, Fagaceae, Euphorbiaceae, and Caprifoliaceae',
        'montane evergreen species such as Ficus microcarpa, Cryptocarya chinensis, and Schefflera octophylla',
        'deciduous species such as Bombax malabaricum and Albizia procera in the seasonal zone',
      ],
      sourceIds: ['one-earth-eco-269'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'species recovery program restoring the flagship Taiwan sika deer to the wild',
        'overwintering habitat for restricted-range birds such as the Japanese night-heron and spoon-billed sandpiper',
        'sympatric giant flying squirrels gliding between forest trees',
        'monsoon rainfall regime concentrated between May and October',
      ],
      sourceIds: ['one-earth-eco-269'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Although close to 70% of the forests remain, only a small area is formally protected, and forest-cover estimates likely include monoculture plantations of non-native species. Industrialization and expanding urbanization are taking a toll on natural forests, and even Kenting National Park is threatened by anthropogenic activity. Recommended priorities are to include additional forests in the protected area system, ensure ecological connectivity between montane and lowland forests, and protect rare species from poaching.',
      sourceIds: ['one-earth-eco-269'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:taiwan-sika-deer',
      'species:formosan-serow',
      'species:formosan-macaque',
      'species:black-faced-spoonbill',
      'species:spoon-billed-sandpiper',
    ],
    countryIds: ['TW'],
    sources: ['one-earth-eco-269'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:283',
    summary: {
      value:
        'The Taiwan Subtropical Evergreen Forests represent most of the forests of the island of Taiwan except the southernmost section south of the Tropic of Cancer, running along a north-south mountain range with about 200 peaks over 3,000 m and rising to 3,952 m at Mount Yushan. The forests are home to two species of giant flying squirrels and the flagship Formosan ferret badger, while most of the island\u2019s larger fauna has been extirpated.',
      sourceIds: ['one-earth-eco-283'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'most of the forests of Taiwan except the southernmost section south of the Tropic of Cancer',
        'north-south mountain range running along the length of the island and rising steeply on the eastern side',
        'about 200 peaks over 3,000 m, with the highest point at Mount Yushan (3,952 m)',
        'gentler western slopes descending to coastal plains',
      ],
      sourceIds: ['one-earth-eco-283'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Summer monsoons between May and October bring rainfall that varies with elevation, from 1,800-2,500 mm below 500 m to up to 2,900 mm above 2,500 m; mean monthly lowland temperatures range from 15 to 28\u00b0C.',
        annualPrecipitationMm: { min: 1800, max: 2900 },
      },
      sourceIds: ['one-earth-eco-283'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'broadleaf forests zoned by elevation, from the Ficus-Machilus zone through the Machilus-Castanopsis zone to the Cyclobalanopsis zones',
        'mixed broadleaf forests above 3,000 m dominated by Alnus formosana and species of Acer and Tsuga',
        'pure conifer stands of Tsuga chinensis, Picea, and Abies at the highest elevations',
        'floristic elements of both the Holarctic and Paleotropical kingdoms',
      ],
      sourceIds: ['one-earth-eco-283'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'floristic boundary between the Holarctic and Paleotropical kingdoms',
        'elevational zonation of vegetation from lowland broadleaf to subalpine conifer forest',
        'mid-Pleistocene isolation driving divergence of inhabited flying squirrel subspecies',
        'overwintering habitat for restricted-range birds such as the Japanese night-heron and spoon-billed sandpiper',
      ],
      sourceIds: ['one-earth-eco-283'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'About 68% of the forests remain, and 20% of the ecoregion is protected, mostly along the central mountains, while most lowland forests have been cleared for agriculture and industry. The larger fauna has been extirpated, including the clouded leopard and Eurasian otter, the Asiatic black bear is extremely rare, and the sika deer was only restored through reintroduction. Recommended priorities are to bring additional low-elevation forests into the protected area system, ensure connectivity between montane and lowland forests, and protect rare species from poaching.',
      sourceIds: ['one-earth-eco-283'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:formosan-ferret-badger',
      'species:red-and-white-giant-flying-squirrel',
      'species:formosan-serow',
      'species:formosan-macaque',
      'species:sambar-deer',
    ],
    countryIds: ['TW'],
    sources: ['one-earth-eco-283'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:251',
    summary: {
      value:
        'The Nansei Islands Subtropical Evergreen Forests cover a 1,050 km-long chain of over 100 small islands that stretches from Kyushu in Japan to Taiwan, with rugged, steep topography whose highest point is 1,935 m on Yakushima. The isolated archipelago sustains exceptional endemism, including the flagship Iriomote cat, yet has already lost the endemic Ryukyu wood pigeon.',
      sourceIds: ['one-earth-eco-251'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        '1,050 km-long chain of over 100 small islands stretching from Kyushu, Japan to Taiwan',
        'northern islands of volcanic origin composed of igneous rock',
        'southern islands of Mesocenozoic karst limestone',
        'rugged, steep topography with the highest point 1,935 m on Yakushima',
      ],
      sourceIds: ['one-earth-eco-251'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'The climate is subtropical in the north, transitioning to a tropical monsoon climate in the south, with 2,000 to 3,500 mm of annual rainfall, frequent typhoons from August to September, winter temperatures around 18\u00b0C, and summer temperatures around 28\u00b0C.',
        annualPrecipitationMm: { min: 2000, max: 3500 },
      },
      sourceIds: ['one-earth-eco-251'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'temperate broadleaf forest of the northern islands dominated by Fagaceae such as Castanopsis cuspidata, Quercus, and Lithocarpus edulis',
        'conifer forests of Cryptomeria japonica, Tsuga sieboldii, and Abies firma at higher elevations',
        'Castanopsis sieboldii-dominated forest on the middle islands',
        'more tropical forest community of the southern islands, dominated by Distylium racemosum, Schefflera octophylla, and other evergreen trees',
        'many endemic plants such as Cyclobalanopsis miyagii and Adinandra yaeyamensis',
      ],
      sourceIds: ['one-earth-eco-251'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'emergence of the island chain from an undersea mountain range',
        'high faunal endemism, including endemic mammals, birds, and amphibians',
        'typhoon disturbance shaping forest ecosystems',
        'vulnerability of endemic island species, exemplified by the extinction of the Ryukyu wood pigeon',
      ],
      sourceIds: ['one-earth-eco-251'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Over 45% of the forests still remain and 23% are protected, with protected areas distributed across most islands, but forest loss, infrastructure expansion, and hunting continue to affect biodiversity, especially endemic species already listed as endangered on the IUCN Red List. The Iriomote cat population is estimated at only about 100 individuals and declining. Recommended actions are to make infrastructure more wildlife and biodiversity friendly, conserve additional representative forests and habitats, and implement species recovery plans.',
      sourceIds: ['one-earth-eco-251'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:iriomote-cat',
      'species:okinawa-rail',
      'species:ryukyu-flying-fox',
      'species:ryukyu-scops-owl',
    ],
    countryIds: ['JP'],
    sources: ['one-earth-eco-251'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:231',
    summary: {
      value:
        'Greater Negros-Panay Rainforests cover several central Philippine islands, including Negros, Panay, Cebu, and smaller neighbors, with rugged terrain rising to the 2,465 m volcanic crater of Mount Canlaon. Deep channels kept this island complex isolated from Luzon and Greater Mindanao during the last ice age, leaving a mix of Sundaic and Philippine species with notable endemics such as the Visayan warty pig.',
      sourceIds: ['one-earth-eco-231'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'several islands including the larger Negros, Panay, and Cebu',
        'rugged topographies except for eastern Panay and Masbate',
        '2,465 m volcanic crater of Mount Canlaon in central Negros',
        'islands uplifted over 6 million years by volcanic activity and tectonic uplifting',
        'channel over 120 m deep separating the complex from Luzon and Greater Mindanao',
      ],
      sourceIds: ['one-earth-eco-231'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical and humid, with year-round warmth and a pronounced wet-phase rainfall from May to January, characteristic of the Philippine monsoon islands.',
      },
      sourceIds: ['one-earth-eco-231'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'tropical lowland rainforest, montane forests, grasslands, heath forests, beach vegetation, and mangroves',
        'lowland forest dominated by Dipterocarpus, Shorea, and Hopea with Pandanus in the understory',
        'tall dipterocarp forests of 45 to 65 m with three canopy layers and epiphytic ferns and orchids',
        'montane forests shared among Burseraceae, Dipterocarpaceae, Euphorbiaceae, Lauraceae, and other families',
        'beach vegetation dominated by Casuarina and Barringtonia',
      ],
      sourceIds: ['one-earth-eco-231'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'biogeographic processes linked to land bridge connections and disconnections through geologic history',
        'isolation during the last ice age precluding species exchange and contributing to endemic species',
        'mix of Sundaic and Philippine mammal faunas',
        'two Endemic Bird Areas with range-restricted species',
      ],
      sourceIds: ['one-earth-eco-231'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 36% for the ecoregion. Forests have been cleared for logging, mining, agriculture, and settlements, and important Key Biodiversity Areas with endemic biodiversity remain unprotected, while the Philippine crocodile is now extinct here. Priorities are to protect the proposed KBAs, engage local communities, and develop species recovery plans for endemic critically endangered species.',
      sourceIds: ['one-earth-eco-231'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:visayan-warty-pig',
      'species:visayan-spotted-deer',
      'species:negros-bleeding-heart',
      'species:writhed-billed-hornbill',
      'species:cebu-flowerpecker',
    ],
    countryIds: ['PH'],
    sources: ['one-earth-eco-231'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:240',
    summary: {
      value:
        'Luzon Montane Rainforests clothe the slopes above 1,000 meters on the Sierra Madre, the longest mountain range in the Philippines, and the Zambales Mountains in the west. Long isolation fostered extraordinary endemism, with over 50 endemic non-flying mammals now known, many of them cloud rats and earthworm mice confined to individual peaks.',
      sourceIds: ['one-earth-eco-240'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'forests above 1,000 m along the Sierra Madre, the longest mountain range in the Philippines',
        'the Zambales Mountains in the west',
        'peaks rising to over 2,700 m',
        'range erected by volcanic eruptions and shifting undersea plates over 27 million years',
      ],
      sourceIds: ['one-earth-eco-240'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical, with rainfall throughout the year that increases from May to January, especially on the eastern slopes exposed to northeast winds; the mountains intercept storms and typhoons, so annual rainfall can be very high.',
      },
      sourceIds: ['one-earth-eco-240'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'transition from lowland Dipterocarpaceae to oak and laurel upslope',
        'shorter trees dominated by Lauraceae, Saxifragaceae, Fagaceae, Araliaceae, Myrtaceae, Podocarpaceae, and Theaceae',
        'common species including Deutzia pulchra, Lithocarpus woodii, Dacrycarpus steupii, and Clethra luzonica',
        'epiphytes, vines, and mosses adding structure, with a thick humus layer',
        'stunted forests with less structural complexity at the highest elevations',
      ],
      sourceIds: ['one-earth-eco-240'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'long isolation of Luzon from other large islands',
        'small mammals evolving to fill narrow niches in montane sky island habitats',
        'species richness peaking at mid-elevations then declining with habitat structural complexity',
        'about 70% endemism among reptiles and amphibians',
      ],
      sourceIds: ['one-earth-eco-240'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 90% for the ecoregion. About half of the Sierra Madre ecoregion is formally protected but the Zambales Mountains remain unprotected, and the forests are threatened by clearing, conversion, and climate change. Priorities are managing existing protected areas, expanding protection into old-growth forests in the Zambales range, monitoring endemic species as climate indicators, and valuing montane ecosystem services.',
      sourceIds: ['one-earth-eco-240'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:northern-luzon-shrew-mouse',
      'species:gulantan-cloud-rat',
      'species:luzon-bushy-tailed-cloud-rat',
    ],
    countryIds: ['PH'],
    sources: ['one-earth-eco-240'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:241',
    summary: {
      value:
        'Luzon Rainforests cover the lowland forests below 1,000 meters on Luzon, an island built from about ten coalescing volcanic islands over 27 million years. A rich dipterocarp canopy shelters endemic small mammals and birds, while the giant Philippine eagle fills the role of top predator in the absence of large mammalian carnivores.',
      sourceIds: ['one-earth-eco-241'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'rainforests below 1,000 m on Luzon Island',
        'a few isolated volcanic mountains in the south exceeding 1,000 m, including Maquiling, Banahaw, Isarog, Mayon, and Bulusan',
        'island isolated since formation about 27 million years ago when about ten volcanic islands coalesced',
      ],
      sourceIds: ['one-earth-eco-241'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical, with a constant temperature of around 27°C and rainfall throughout the year, increasing from May to January, averaging about 2,100 mm annually.',
        annualPrecipitationMm: { min: 2100, max: 2100 },
      },
      sourceIds: ['one-earth-eco-241'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dominant species of the Dipterocarpaceae family, including Anisoptera, Dipterocarpus, Hopea, Parashorea, and Shorea',
        '60 m high canopy with trees emerging above it',
        'a five-species Rafflesia assemblage, four endemic to the island',
        'other assembly from Annonaceae, Bombacaceae, Meliaceae, Rhizophoraceae, Marantaceae, and Ficus families',
      ],
      sourceIds: ['one-earth-eco-241'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'millennia of biogeographic isolation producing mostly small endemic mammals',
        'the giant Philippine eagle filling the top predator role in the absence of large mammalian predators',
        'Rafflesia flowers attracting pollinator flies and rodents dispersing their seeds',
        'the eagle endemic to the Philippines and the largest eagle in the world',
      ],
      sourceIds: ['one-earth-eco-241'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 43% for the ecoregion. The ecoregion has lost over three-fourths of its natural forests and only about 10% is protected, mostly on the eastern side, leaving species-rich western forests near the Philippines largest cities vulnerable to logging, shifting cultivation, settlement, and widespread hunting. Priorities are bringing more forests under a conservation areas network, protecting unprotected Key Biodiversity Areas, and engaging local communities in conservation and forest management.',
      sourceIds: ['one-earth-eco-241'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:green-racquet-tail',
      'species:isabela-oriole',
      'species:philippine-eagle',
      'species:philippine-brown-deer',
      'species:philippine-warty-pig',
    ],
    countryIds: ['PH'],
    sources: ['one-earth-eco-241'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:246',
    summary: {
      value:
        'Mindanao Montane Rainforests occupy the forests above 1,000 meters on Mindanao, a highland of hill dipterocarp forest, elfin woodlands, and mossy cloud forest. The ecoregion hosts roughly half the remaining population of the critically endangered giant Philippine eagle and a suite of endemic small mammals restricted to montane elevations.',
      sourceIds: ['one-earth-eco-246'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'montane rainforests above 1,000 m on Mindanao Island',
        'island possibly formed from the collision and fusion of the Palawan block with the eastern plate about 25 million years ago',
        'stunted elfin woodlands on the mountain summits',
      ],
      sourceIds: ['one-earth-eco-246'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical, with a July-to-November rainy season bringing most of the 1,200 mm of rainfall and temperatures averaging about 29°C with little annual variation.',
        annualPrecipitationMm: { min: 1200, max: 1200 },
      },
      sourceIds: ['one-earth-eco-246'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'hill dipterocarp forests with tall, big-buttressed upper-canopy trees of Shorea polysperma, S. mindanaensis, and Ficus',
        'higher-elevation forest dominated by the endemic Almaciga philippinensis with Agathis philippinensis and Cinnamomum mercadoi',
        'shorter upper montane forest with a 35 m canopy and shrub layer',
        'cloud forests above 1,700 to 2,000 m with stunted, moss-draped trees such as Ascarina philippinensis and Phyllocladus hypophyllus',
        'a shrub layer of Rhododendron, Vaccinium, and Rubus and 13 Mindanao-endemic pitcher plants',
      ],
      sourceIds: ['one-earth-eco-246'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'a distinct Mindanao faunal region developing since the Pleistocene',
        'several species restricted to higher elevations of the mountain ranges',
        'an Endemic Bird Area with restricted-range species',
        'the second largest number of breeding birds among Philippine islands',
      ],
      sourceIds: ['one-earth-eco-246'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 89% for the ecoregion. Only about 25% of the ecoregion is protected and those areas face illegal logging and conversion, while prospective palm oil investment threatens to clear large tracts of remaining forest, and the cited 60% forest figure likely overestimates true cover. Priorities are managing protected areas with local Moro communities, including unprotected Key Biodiversity Areas in a conservation network, and valuing montane forests for flood and disaster prevention.',
      sourceIds: ['one-earth-eco-246'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:philippine-eagle',
      'species:mindanao-moonrat',
      'species:almaciga',
    ],
    countryIds: ['PH'],
    sources: ['one-earth-eco-246'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:247',
    summary: {
      value:
        'Mindanao-Eastern Visayas Rainforests cover the lowland forests below 1,000 meters across Mindanao, Samar, Leyte, Bohol, and smaller islands that formed the single Greater Mindanao landmass during Pleistocene ice ages. About 80 percent of its non-flying mammals are endemic, from the tiny Philippine tarsier to island-restricted cloud rats, while the Philippine eagle and cockatoo still hold out in its forests.',
      sourceIds: ['one-earth-eco-247'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'lowland forests below 1,000 m on Mindanao, Samar, Leyte, Bohol, and several smaller satellite islands',
        'islands that during the Pleistocene formed the single Greater Mindanao landmass via lowered sea levels',
        'northern portions of Samar and Leyte on the main track of typhoons',
      ],
      sourceIds: ['one-earth-eco-247'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical and wet, with the northern Visayas on the main track of typhoons that occur from July to November.',
      },
      sourceIds: ['one-earth-eco-247'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'beach forest and mangroves along the coast dominated by Casuarina and Barringtonia',
        'lowland rainforest dominated by Dipterocarpaceae including Anisoptera, Dipterocarpus, Hopea, Parashorea, and Shorea',
        'tall forests reaching 45 to 65 m with a dense three-layered canopy',
        'ferns, orchids, and other epiphytes adding structural habitat in the upper strata',
      ],
      sourceIds: ['one-earth-eco-247'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'about 80% of non-volant mammals endemic to Greater Mindanao, not found on adjacent Luzon',
        'single-island evolution of endemics such as the Dinagat bushy-tailed cloud rat',
        'an Endemic Bird Area designated for 51 restricted-range forest-specialist birds',
        'Pleistocene land bridges uniting the islands into Greater Mindanao',
      ],
      sourceIds: ['one-earth-eco-247'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 50% for the ecoregion. Very little of the ecoregion is formally protected, the largest reserve on Samar leaves most Mindanao lowland forests outside, and hunting, including of small endemic species, is widespread. Priorities are expanding the protected areas system to improve representation and include unprotected Key Biodiversity Areas, education and awareness campaigns with livelihood alternatives, and engaging local communities as conservation stewards.',
      sourceIds: ['one-earth-eco-247'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:philippine-tarsier',
      'species:philippine-warty-pig',
      'species:dinagat-bushy-tailed-cloud-rat',
      'species:mindanao-bleeding-heart',
      'species:philippine-cockatoo',
    ],
    countryIds: ['PH'],
    sources: ['one-earth-eco-247'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:248',
    summary: {
      value:
        'Mindoro Rainforests represent Mindoro Island and its smaller satellites, an isolated landmass that remained unconnected to neighboring islands even when land bridges formed. This geologic isolation produced a recognized hotspot of endemism, headlined by the tamaraw, the Philippines national animal, along with an array of endemic birds and plants.',
      sourceIds: ['one-earth-eco-248'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Mindoro Island and the smaller satellite islands',
        'island that remained isolated even when neighboring islands were connected by land bridges',
        'lowland evergreen rainforest, lower montane forests, limestone forests, and mangroves',
      ],
      sourceIds: ['one-earth-eco-248'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Wet tropical climate with a dry season from December to May and a wet season from June to November, over 2,200 mm of annual rainfall, frequent tropical cyclones, and average highs around 30°C.',
        annualPrecipitationMm: { min: 2200, max: 2200 },
      },
      sourceIds: ['one-earth-eco-248'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'structurally complex Dipterocarpaceae-dominated rainforest with a canopy over 45 m',
        'characteristic trees including Dipterocarpus grandiflorus, Shorea species, Parashorea malaanonan, Diospyros blancoi, and Pterocarpus indicus',
        'semi-deciduous forests in the west with stands of Pinus merkusii above 600 m',
        'lower montane forests from 750 to 1,200 m with moss-draped trees, and stunted semi-deciduous trees on limestone karst',
      ],
      sourceIds: ['one-earth-eco-248'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'geologic isolation enabling species to evolve into endemic forms',
        'an island recognized as an endemism hotspot in the Philippines',
        'a model of biogeographic patterns and processes from smaller species of non-volant mammals and bats',
      ],
      sourceIds: ['one-earth-eco-248'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 66% for the ecoregion. Since the 1960s, large-scale mechanized logging has driven the decline of the dense forests, and today most large endemic tree species and the fauna dependent on intact forest are critically endangered. Priorities are creating a linked network of reserves through strategic planning, engaging local communities in conservation, and initiating species recovery plans for critically endangered species.',
      sourceIds: ['one-earth-eco-248'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:tamaraw',
      'species:mindoro-scops-owl',
      'species:mindoro-hornbill',
      'species:mindoro-imperial-pigeon',
      'species:philippine-crocodile',
    ],
    countryIds: ['PH'],
    sources: ['one-earth-eco-248'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:262',
    summary: {
      value:
        'Palawan Rainforests cover Palawan and its peripheral islands, a biodiversity last frontier that was connected to Borneo during the last ice age and so blends Philippine and Sundaic species. Nearly half the terrain is steep and mountainous, and over 85 percent of the ecoregion is formally protected, including the huge Palawan Game Refuge and Bird Sanctuary.',
      sourceIds: ['one-earth-eco-262'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Palawan and its peripheral islands',
        'nearly half the topography steep and mountainous',
        'Victoria Peak with a large ultramafic forest in south-central Palawan',
        'island that connected to Borneo during the last ice age when sea levels dropped',
      ],
      sourceIds: ['one-earth-eco-262'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical with a three-month dry season and rain for the rest of the year, torrential rains from tropical depressions in northern Palawan from July to August, and an average maximum temperature of 31°C with little annual variation.',
      },
      sourceIds: ['one-earth-eco-262'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'beach forest of Calophyllum inophyllum, Canarium asperum, Pometia pinnata, and species of Ficus',
        'lowland evergreen dipterocarp rainforest dominated by Dipterocarpus gracilis and D. grandiflorus, Swintonia foxworthyi, and Dracontomelon dao',
        'montane forest dominated by Agathis philippinensis, Dacrydium pectinatum, Podocarpus polystachyus, and Cinnamomum rupestre',
        'limestone forest with species of Euphorbia, Aglaia, Antidesma, Drypetes, Gomphandra, Sterculia, and Pleomele',
        'ultramafic forest with heavy metal indicator trees and the endemic pitcher plant Nepenthes philippinensis',
      ],
      sourceIds: ['one-earth-eco-262'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'over 3,500 flowering plant species with 20% endemism',
        'last ice age connection to Borneo allowing exchange of terrestrial fauna',
        'a blend of Philippine and Sundaic biodiversity',
        'an immigration pathway from mainland Asia into the Philippines through Palawan',
      ],
      sourceIds: ['one-earth-eco-262'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 95% for the ecoregion. Over 85% of the ecoregion is formally protected, including the large Palawan Game Refuge and Bird Sanctuary covering the whole island, though the status of its protection and management is unclear. Priorities are a strategically selected network of protected areas, further biodiversity surveys, and engaging local communities in conservation.',
      sourceIds: ['one-earth-eco-262'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:palawan-pangolin',
      'species:calamian-deer',
      'species:palawan-bearded-pig',
      'species:palawan-peacock-pheasant',
      'species:philippine-cockatoo',
    ],
    countryIds: ['PH'],
    sources: ['one-earth-eco-262'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:267',
    summary: {
      value:
        'South China Sea Islands is a scattered ecoregion of over 250 islands, atolls, and shoals in three archipelagos, with limited terrestrial biodiversity but teeming coral reefs beneath the waves. It hosts globally significant seabird colonies, including about 10% of the global red-footed booby population, and important nesting beaches for green and hawksbill turtles.',
      sourceIds: ['one-earth-eco-267'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'over 250 islands, atolls, and shoals scattered through the South China Sea',
        'three archipelagos: the Pratas, Paracel Islands, and the highly disputed Spratly Islands',
        'scattered over a shallow continental shelf averaging 200 m in depth',
        'sea floor dropping over 5,000 m into the Palawan Trough near the Spratly Islands',
        'minimal land area above sea level',
      ],
      sourceIds: ['one-earth-eco-267'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical in the Spratly Islands with average annual temperatures near 27°C, a seven-month dry season and five-month rainy season bringing about 1,800 to 2,200 mm of rainfall; the more northern Pratas Islands are slightly cooler at about 25°C with about 1,350 mm of rainfall.',
        annualPrecipitationMm: { min: 1350, max: 2200 },
      },
      sourceIds: ['one-earth-eco-267'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'scrub and beach vegetation dominated by Cordia subcordata, Scaevola sericea, and Terminalia catappa',
        '48 recorded vascular plant species on the Spratly Islands',
        'Paracel Island vegetation dominated by Pisonia grandis, Guettarda speciosa, Scaevola sericea, and Messerschmidia argentea',
        '212 wild vascular plant species recorded overall, with flora similar to that of Hainan Island',
      ],
      sourceIds: ['one-earth-eco-267'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'over 600 highly diverse coral reefs surrounding the Spratly Islands',
        'globally important seabird breeding colonies, including about 10% of the world red-footed boobies on Dong Island',
        'nesting beaches for green turtles and hawksbill turtles',
        'undersea abyss formed during the Cenozoic along with the Himalayan Mountains',
      ],
      sourceIds: ['one-earth-eco-267'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection goal of 0% for this disputed ecoregion. Development and military activity are the greatest threats, with dredging, filling, airstrips, and helipads expanding some islands and degrading the surrounding coral reefs, alongside egg collection and guano mining. Priorities are protecting the breeding bird colonies, conserving the remaining coral reefs, and preventing introductions of invasive species.',
      sourceIds: ['one-earth-eco-267'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-footed-booby',
      'species:brown-booby',
      'species:greater-frigatebird',
      'species:green-sea-turtle',
      'species:hawksbill-sea-turtle',
    ],
    countryIds: ['CN', 'PH'],
    sources: ['one-earth-eco-267'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:276',
    summary: {
      value:
        'Sulu Archipelago Rainforests cover a chain of islands between Borneo and Mindanao that formed from undersea volcanoes within the past 15 million years. Deep-water isolation kept its fauna more similar to the rest of the Philippines than to the Sunda Shelf, leaving endemic birds such as the Sulu bleeding-heart, Sulu hornbill, and blue-winged racket-tail at risk of extinction.',
      sourceIds: ['one-earth-eco-276'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'chain of islands between Borneo and Mindanao',
        'Jolo and Tawitawi as the two larger islands',
        'island arc created from undersea volcanoes within the past 15 million years',
        'islands lying outside the shallow Sunda Shelf',
      ],
      sourceIds: ['one-earth-eco-276'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical and humid for most of the year but with only about 2,000 mm of annual rainfall, which is relatively little for tropical islands, constant temperatures around 27°C, and location just south of the main typhoon track.',
        annualPrecipitationMm: { min: 2000, max: 2000 },
      },
      sourceIds: ['one-earth-eco-276'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'beach forest of Barringtonia, Caesalpinia, and Terminalia, mostly cleared for coastal development and coconut plantations',
        'lowland rainforest formerly dominated by Anisoptera, Dipterocarpus, Hopea, and Shorea',
        'scrub forest of which hardly any original stands remain',
        'mangroves of Rhizophora, Ceriops, Bruguiera, Sonneratia, Avicennia, and Nypa palms',
      ],
      sourceIds: ['one-earth-eco-276'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'deep-water isolation keeping the fauna more similar to Philippine than Sundaic fauna',
        'the islands remaining unconnected to the mainland even when Sunda Shelf islands were linked during low sea levels',
        'ongoing description of small endemic species, from small mammals to geckos',
      ],
      sourceIds: ['one-earth-eco-276'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 48% for the ecoregion, with only one protected area, on Basilan Island. Forests and biodiversity otherwise remain unprotected and threatened by conversion, illegal capture, and hunting, while political instability hampers conservation and the Sulu bleeding-heart has not been sighted since 1891. Priorities are adding forests, especially Key Biodiversity Areas on the larger islands, to the protected areas network, engaging local communities, and conducting comprehensive biological surveys.',
      sourceIds: ['one-earth-eco-276'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sulu-bleeding-heart',
      'species:tawitawi-brown-dove',
      'species:sulu-hornbill',
      'species:blue-winged-racket-tail',
      'species:tawitawi-island-rat',
    ],
    countryIds: ['PH'],
    sources: ['one-earth-eco-276'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:303',
    summary: {
      value:
        'Luzon Tropical Pine Forests grow on the Central Cordillera Mountains of Luzon, where Khasia pine forms open forests with a sparse grass understory and mixed broadleaf stands. Some disturbance from fire and shifting cultivation appears to maintain these pine woodlands, which support the endemic elegant tit, red crossbill, deer, warty pigs, and long-tailed macaques.',
      sourceIds: ['one-earth-eco-303'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'tropical pine forest on the Central Cordillera Mountains of Luzon Island',
        'mountains originated from volcanic and tectonic activity of the Australian and Asian plates',
        'island created as undersea volcanoes erupted, emerged, and coalesced',
        'pines abundant at about 600 m and most common on steep slopes between 1,000 and 2,000 m',
      ],
      sourceIds: ['one-earth-eco-303'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Seasonal, concentrating most of the 2,500 mm annual rainfall in the July to August monsoon, with rainfall possibly exceeding 4,000 mm in years with typhoons from the South China Sea, a pronounced dry season from November to April, and temperatures averaging 15 to 20°C.',
        annualPrecipitationMm: { min: 2500, max: 4000 },
        temperatureC: { min: 15, max: 20 },
      },
      sourceIds: ['one-earth-eco-303'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dominant Khasia pine, also known as Benguet or Luzon pine',
        'sparse understory usually composed of grasses',
        'montane broadleaf forest interdigitating with pine forest in many places',
        'mixed broadleaf and pine forest',
      ],
      sourceIds: ['one-earth-eco-303'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'pine forests probably maintained by anthropogenic shifting cultivation and fires',
        'periodic disturbance maintaining forest succession at intermediate stages and preventing reversion to broadleaf forest',
        'pollen and charcoal evidence linking fire to large areas of pine',
        'the ecoregion supporting several endemic rats and mice, including cloud rats and earthworm mice',
      ],
      sourceIds: ['one-earth-eco-303'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 91% for the ecoregion. Although heavily logged and burned, almost 20% of the ecoregion is formally protected and over 60% of pine habitat remains outside, and complete protection is likely unnecessary because some disturbance helps maintain the pine forests. Priorities are monitoring balanced disturbance and recovery, tracking large mammals and endemic species as the range shifts, and a regional conservation plan for this and neighboring rainforest ecoregions.',
      sourceIds: ['one-earth-eco-303'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:elegant-tit',
      'species:red-crossbill',
      'species:khasi-pine',
      'species:philippine-brown-deer',
      'species:philippine-warty-pig',
    ],
    countryIds: ['PH'],
    sources: ['one-earth-eco-303'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:219',
    summary: {
      value:
        'The Borneo Lowland Rainforests represent the lowland forests of Borneo, which formed part of a single landmass with Java and Sumatra on the shallow Sunda Shelf before rising sea levels isolated the islands. Borneo\u2019s extraordinarily rich forests, the inspiration for Alfred Russel Wallace\u2019s writings on biogeography, are dominated by more than 260 species of Dipterocarpaceae, over 155 of them endemic, with over 15,000 plant species known from the island.',
      sourceIds: ['one-earth-eco-219'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'lowland forests of Borneo, once connected to Java, Sumatra, and the Asian mainland on the shallow Sunda Shelf',
        'complex geology of limestone, volcanic rocks, schist-gneiss complexes, and sedimentary rocks',
        'multi-layered forest with a 24-36 m canopy and emergent trees towering to 65 m',
      ],
      sourceIds: ['one-earth-eco-219'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical, with over 4,000 mm of annual rainfall distributed through the year, temperatures of 27 to 32 degrees Celsius, and high relative humidity of around 80%.',
      },
      sourceIds: ['one-earth-eco-219'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'canopy dominated by species of Dipterocarpus, Dryobalanops, Shorea, Hopea, and Vatica',
        'sub-canopy of Euphorbiaceae, Rubiaceae, Annonaceae, Lauraceae, and Myristicaceae draped with lianas, orchids, and epiphytic ferns',
        'Burseraceae and Sapotaceae emergents towering to 65 m',
        'Rafflesia arnoldii bearing the world\u2019s largest flower, reaching over 1 m across',
      ],
      sourceIds: ['one-earth-eco-219'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'isolation by rising sea levels after the Pleistocene Sunda Shelf connection',
        'hornbills dispersing seeds and maintaining forest biodiversity',
        'Rafflesia flowers emitting a rotting-meat smell to attract insect pollinators',
        'partition of habitat, food, and activity times among 11 coexisting primate species',
      ],
      sourceIds: ['one-earth-eco-219'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 69% with a protection level of 1. About half the primary forest has been cleared or degraded, with over 1,300 km2 lost annually and only 8% of the remaining forest protected, leaving flora and fauna highly vulnerable to oil palm, rubber, paper and pulp plantations, commercial logging, and hunting. Priorities are to stop clearing intact rainforests, bring additional forests under a conservation umbrella based on systematic biodiversity analysis, and engage indigenous communities in conservation.',
      sourceIds: ['one-earth-eco-219'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sunda-clouded-leopard',
      'species:bornean-orangutan',
      'species:proboscis-monkey',
      'species:asian-elephant',
      'species:white-crowned-shama',
    ],
    countryIds: ['ID', 'MY', 'BN'],
    sources: ['one-earth-eco-219'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:220',
    summary: {
      value:
        'The Borneo Montane Rainforests represent the montane forests along the central spine of Borneo, described as a montane archipelago in an ocean of lowland dipterocarp forests. The climate ranges from tropical in the lower elevations to alpine at the highest peaks, including the 4,095 m Mount Kinabalu, and the mountains receive over 3,000 mm of annual rainfall.',
      sourceIds: ['one-earth-eco-220'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'montane forests along the central spine of Borneo',
        'a montane archipelago in an ocean of lowland dipterocarp forests',
        'the 4,095 m Mount Kinabalu and surrounding high peaks',
        'primarily old volcanic rocks and mélange of continental origin',
      ],
      sourceIds: ['one-earth-eco-220'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical in the lower elevations and alpine at the highest peaks, with over 3,000 mm of annual rainfall and cloud-derived moisture in the upper montane forests.',
      },
      sourceIds: ['one-earth-eco-220'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'flora with links to both Asian and Australian plant families',
        'lowland Dipterocarpaceae transitioning to oak, beech, and chestnut forest around 1,200 m',
        'an Ericaceae-dominated belt above 1,500 m with over 40 species of Rhododendron',
        'alpine vegetation on the highest peaks',
      ],
      sourceIds: ['one-earth-eco-220'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'evolution of endemic species and subspecies following isolation since the late Pleistocene',
        'cloud moisture supplementing rainfall in the upper montane forests',
        'the extremely rare and cryptic Bornean bay cat, one of the rarest wild cats in the world',
        'still little-explored montane heartland of Borneo',
      ],
      sourceIds: ['one-earth-eco-220'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 98% with a protection level of 2. Almost three-fourths of the ecoregion\u2019s forests remain intact, with about 25% under protection, including Kayan Mentarang and Betung Kerihun national parks in Kalimantan within the Heart of Borneo initiative, while commercial logging, oil palm plantations, forest fires, and illegal logging remain significant threats. Priorities are strengthening protected area management, maintaining ecological linkages through sustainable land uses and community stewardship, and regulating and zoning plantations and logging concessions.',
      sourceIds: ['one-earth-eco-220'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bornean-orangutan',
      'species:sunda-clouded-leopard',
      'species:bornean-bay-cat',
      'species:asian-elephant',
    ],
    countryIds: ['ID', 'MY', 'BN'],
    sources: ['one-earth-eco-220'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:221',
    summary: {
      value:
        'The Borneo Peat Swamp Forests represent the peat swamps along the coasts of Borneo and around the inland lakes associated with the Mahakam and Kapuas rivers. Waterlogged, acidic clay soils create anaerobic conditions that slow decomposition, and over thousands of years the accumulated biomass has formed peat layers over 20 m deep in habitats important for the endemic proboscis monkey.',
      sourceIds: ['one-earth-eco-221'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'peat swamps lining the coasts of Borneo',
        'clusters of inland lakes associated with the Mahakam and Kapuas rivers',
        'areas waterlogged for most of the year',
        'acidic clay soils supporting peat layers over 20 m deep',
      ],
      sourceIds: ['one-earth-eco-221'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical and waterlogged for much of the year, with acidic, anaerobic soils that slow decomposition and keep the peaty substrate wet.',
      },
      sourceIds: ['one-earth-eco-221'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'trees with stilt roots, buttresses, and pneumatophores adapted to anoxic soils',
        'dominance of Gonystylus bancanus, Dactylocladus stenostachys, and Copaifera palustris',
        'six species of Shorea, with Shorea albida sometimes forming pure stands',
        'Dacrydium beccarii and Casuarina replacing Shorea in northern Borneo',
        'over thirty palm species, including the red-stemmed sealing wax palm',
      ],
      sourceIds: ['one-earth-eco-221'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'thousands of years of peat accumulation in anaerobic conditions',
        'very high densities of endemic primates supported by intact peat forest',
        'the golden arowana inhabiting the rivers and sloughs',
        'drained peat burning and releasing vast smoke and carbon dioxide',
      ],
      sourceIds: ['one-earth-eco-221'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 53% with a protection level of 3. Only about 14% of the ecoregion is protected, and most peat swamps have been drained and set on fire, generating regional haze, health problems, and high CO2 emissions, while valuable timber such as Gonystylus bancanus is logged. Priorities are a moratorium on further development, gazetting intact peat swamps as totally protected areas, allowing development only in degraded areas, and safeguarding the freshwater ecosystem services of peat swamps.',
      sourceIds: ['one-earth-eco-221'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:proboscis-monkey',
      'species:bornean-orangutan',
      'species:sunda-clouded-leopard',
      'species:siamese-crocodile',
      'species:water-monitor-lizard',
    ],
    countryIds: ['ID', 'MY', 'BN'],
    sources: ['one-earth-eco-221'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:273',
    summary: {
      value:
        'The Southwest Borneo Freshwater Swamp Forests represent the freshwater swamp forests that line the southern and western coast of Borneo in Indonesian Kalimantan. The rivers meander through flat, low-lying alluvial floodplains that flood periodically and remain waterlogged for part of the year, but unlike the adjacent peat forests these swamps are flushed out and less acidic.',
      sourceIds: ['one-earth-eco-273'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'freshwater swamp forests along the southern and western coast of Borneo in Kalimantan',
        'flat, low-lying alluvial floodplains crossed by meandering rivers',
        'periodically flooded and waterlogged for part of the year',
        'less acidic than adjacent peat forests, with biomass flushed out by water flow',
      ],
      sourceIds: ['one-earth-eco-273'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical and wet, with periodic flooding that keeps the alluvial floodplains waterlogged for part of the year.',
      },
      sourceIds: ['one-earth-eco-273'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dense and diverse forest with trees taller than those of the peat swamps, the canopy reaching over 35 m',
        'species shared with lowland rainforests, including Adina, Alstonia, Dillenia, Eugenia, Ficus, Shorea, and Vatica',
        'tall legumes such as Koompassia and Calophyllum, and the swamp sago Metroxylon sagu',
        'lianas and epiphytes adding structural complexity for arboreal fauna',
        'floating mats of grasses in slow-flowing water',
      ],
      sourceIds: ['one-earth-eco-273'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'periodic flooding flushing the swamps and preventing peat accumulation',
        'freshwater outflow from the Kalimantan rivers',
        'hornbills dispersing seeds and maintaining forest diversity',
        'the amphibious, nocturnal otter civet hunting in both water and trees',
      ],
      sourceIds: ['one-earth-eco-273'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 46% with a protection level of 3. These swamps have been extensively drained and converted to rice and other agriculture and plantations, and gold mining is widespread, yet about 60% of the forests remain intact, including parts of Tanjung Puting and Sebangau national parks. Priorities are restoring forests affected by drainage canals and timber extraction, stopping further logging, mining, and draining, and valuing freshwater provision as an ecosystem service in development decisions.',
      sourceIds: ['one-earth-eco-273'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:otter-civet',
      'species:bornean-orangutan',
      'species:proboscis-monkey',
      'species:sunda-clouded-leopard',
      'species:siamese-crocodile',
    ],
    countryIds: ['ID'],
    sources: ['one-earth-eco-273'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:281',
    summary: {
      value:
        'The Sundaland Heath Forests, known as Kerangas in Borneo, grow on extremely nutrient-poor, acidic, and sandy white-sand soils on sandstone plateaus, ridges, and beaches raised from the seabed. These forests support a high diversity of carnivorous plants, including an estimated 39 species of Nepenthes pitcher plants, sundews, and bladderworts that derive their nutrients from trapped insects.',
      sourceIds: ['one-earth-eco-281'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'forests growing on patches of white-sand soils',
        'sandstone plateaus and ridges',
        'beaches raised from the seabed during the mid-Pleistocene',
        'well-drained acidic soils that leach nutrients',
      ],
      sourceIds: ['one-earth-eco-281'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical, with heavy rainfall leaching the sandy, acidic soils and leaving them extremely poor in nutrients.',
      },
      sourceIds: ['one-earth-eco-281'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'low, dense, single-layered canopy of trees rarely exceeding 20 m',
        'pole-like trees with few buttress roots',
        'upper canopy species including Agathis borneensis, Casuarina, Cotylelobium burckii, and Shorea ovata',
        'abundant epiphytes adding structural complexity',
        'sparse ground cover of carnivorous plants, mosses, and liverworts',
      ],
      sourceIds: ['one-earth-eco-281'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'nutrient-poor soils depressing plant productivity and increasing plant alkaloid defenses',
        'mutualism between large pitcher plants and tree shrews providing nitrogen',
        'herbivorous primates and frugivorous birds scarce in the impoverished forest',
        'degradation into open padang savanna from which recovery is slow',
      ],
      sourceIds: ['one-earth-eco-281'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 50% with a protection level of 2. Kerangas are not spared from fires set for commercial logging and agriculture, and once degraded they develop into open padang savanna from which restoration through replanting has proved ineffective. Priorities are stopping illegal logging and land clearing, revoking concessions contiguous with or important to protected areas, and expanding the protected area system.',
      sourceIds: ['one-earth-eco-281'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bornean-white-bearded-gibbon',
      'species:raffles-pitcher-plant',
      'species:sun-bear',
      'species:bornean-orangutan',
    ],
    countryIds: ['ID', 'MY'],
    sources: ['one-earth-eco-281'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:313',
    summary: {
      value:
        'The Kinabalu Montane Alpine Meadows represent the alpine and subalpine meadows and shrublands of the Kinabalu and Crocker ranges, straddling the 4,095 m peak of Mount Kinabalu. It is the highest and sole alpine ecoregion in Southeast Asia, formed on geologically young mountains that were glaciated during the Pleistocene and are still rising at about 5 mm a year.',
      sourceIds: ['one-earth-eco-313'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'alpine and subalpine meadows and shrublands of the Kinabalu and Crocker ranges',
        'the 4,095 m peak of Mount Kinabalu towering above the lowland rainforests',
        'subalpine zone beginning at about 3,000 to 3,400 m',
        'Low\u2019s Gully plunging from 3,900 m to 1,800 m',
        'deep chasms and ravines left by the melted ice cap',
      ],
      sourceIds: ['one-earth-eco-313'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Alpine and subalpine, with strong winds that stunt and gnar the trees, and ground frost above 3,700 m creating an eerie moonscape of stone.',
      },
      sourceIds: ['one-earth-eco-313'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'subalpine tall shrubs and low trees of Rhododendron, Leptospermum, Tristaniopsis, Dacrydium, and Gymnostoma',
        'stunted, gnarled trees shaped by the harsh climate and strong winds',
        'about half of Borneo\u2019s 30 pitcher plant species, including the enormous endemic Nepenthes rajah',
        'subalpine meadows of potentillas, buttercups, eyebrights, and gentians, including the endemic Low\u2019s buttercup',
        'a hotspot of over 866 orchid species and subspecies from 134 genera',
      ],
      sourceIds: ['one-earth-eco-313'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'recent deglaciation about 3,000 years ago leaving deep chasms and ravines',
        'mountain still rising at about 5 mm a year',
        'ultramafic, low-nutrient soils favoring carnivorous plants',
        'upward migration of species as the climate warms',
      ],
      sourceIds: ['one-earth-eco-313'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 100% with a protection level of 8. About one-third of this fragile high-altitude ecoregion is protected by Kinabalu Park, but increasing visitation threatens biodiversity, with visitors collecting plants, especially orchids, and climate change causing species displacement. Priorities are regulating visitation and visitor behavior, preventing collection of rare and endangered plants, and monitoring key species as indicators of ecosystem change.',
      sourceIds: ['one-earth-eco-313'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:raffles-pitcher-plant',
      'species:kinabalu-giant-red-leech',
      'species:bornean-black-shrew',
    ],
    countryIds: ['MY'],
    sources: ['one-earth-eco-313'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:322',
    summary: {
      value:
        'The Sunda Shelf Mangroves line the coasts of the islands of Borneo and Sumatra astride the geologically active Ring of Fire, where earthquakes, volcanic activity, frequent cyclones, and extreme tides batter the coastlines. These mangroves are the first line of defense against erosion and tsunamis, ranking among the most biologically diverse places on Earth with about 28 species of mangrove trees.',
      sourceIds: ['one-earth-eco-322'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'coastlines of Borneo and Sumatra astride the geologically active Ring of Fire',
        'mangrove-lined deltas and estuaries',
        'seaward sediments facing powerful wave surges',
        'softer and deeper inland muds',
      ],
      sourceIds: ['one-earth-eco-322'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical coastal, with frequent cyclones and extreme tidal fluctuations generating powerful wave surges that batter the coastlines.',
      },
      sourceIds: ['one-earth-eco-322'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'about 28 species of mangrove trees, among the most biologically diverse mangrove forests on Earth',
        'Avicennia and Sonneratia forests dominating the seaward sediments',
        'Rhizophora and Bruguiera forests on the softer, deeper inland muds',
        'Nypa palm communities where soils are firmer and freshwater influence is greater',
        'pioneer Avicennia marina, A. alba, and Sonneratia caseolaris forming coastal shrub communities',
      ],
      sourceIds: ['one-earth-eco-322'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'mangrove zonation determined by soil conditions, salinity, and tidal regime',
        'mature mangroves absorbing and dissipating tsunami hydrodynamic forces',
        'mangroves serving as nurseries for fishes and other marine life',
        'coastal defense against erosion in one of the most geologically active places on Earth',
      ],
      sourceIds: ['one-earth-eco-322'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 52% with a protection level of 3. About half the mangroves remain, with most degraded and threatened by logging, shrimp farms, and agriculture conversion, while trees are harvested for fuelwood, charcoal, and timber. Priorities are protecting the remaining mangroves for biodiversity and ecosystem functions, including coastal defense, stopping further clearing for shrimp farms, and restoring mangroves in vulnerable areas.',
      sourceIds: ['one-earth-eco-322'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:proboscis-monkey',
      'species:estuarine-crocodile',
      'species:green-sea-turtle',
      'species:hawksbill-sea-turtle',
      'species:water-monitor-lizard',
    ],
    countryIds: ['ID', 'MY', 'BN'],
    sources: ['one-earth-eco-322'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:227',
    summary: {
      value:
        'Christmas Island and the Cocos (Keeling) Islands are the exposed peaks of ancient submarine volcanoes rising over 5,000 m from the Indian Ocean floor, isolated far from any large landmass. The remoteness and small size of the islands support a depauperate flora and fauna, but also high levels of endemism among species that colonized by swimming or rafting and then evolved in isolation.',
      sourceIds: ['one-earth-eco-227'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'two ancient submarine volcano peaks rising over 5,000 m from the Indian Ocean floor',
        'Christmas Island reaching 300 m in a series of stepped coral-limestone terraces',
        'Cocos Islands with a high point of only a 9 m sand dune',
        'islands almost 1,000 km apart and 300 to 1,100 km from Java',
      ],
      sourceIds: ['one-earth-eco-227'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical, with warm humid conditions near 29 degrees Celsius and 80% relative humidity, and annual rainfall of about 2,000 mm falling mostly during the northwest monsoon from December to April.',
      },
      sourceIds: ['one-earth-eco-227'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Christmas Island forests of Indo-Malayan and Melanesian trees forming an evergreen canopy of 30 to 40 m',
        'sparse understory of the endemic palm Arenga listeri and screw pine Pandanus elatus',
        'canopy species including Planchonella nitida, Syzygium nervosum, Tristiropsis acutangula, Inocarpus fagifer, and Hernandia ovigera',
        'Pisonia grandis dominating sheltered forest on North Keeling Island',
        'most Cocos forest replaced by coconut plantations',
      ],
      sourceIds: ['one-earth-eco-227'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'massive rainy-season migration of Christmas Island red crabs from forest to coastal breeding grounds',
        'colonization of the remote islands by species able to swim or raft',
        'evolution in isolation producing species distinct from their mainland relatives',
      ],
      sourceIds: ['one-earth-eco-227'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 36% with a protection level of 3. Most Christmas Island forest remains intact, with 63% covered by a national park, but the forests outside it are highly vulnerable to phosphate mining and are important nesting habitat, especially for Abbott\u2019s booby; on Cocos, human disturbance and nest poaching still threaten wildlife. Priorities are continuing restoration of degraded areas, controlling cat and rat populations, and strengthening protection of bird nesting colonies, especially on North Keeling Island.',
      sourceIds: ['one-earth-eco-227'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:christmas-island-red-crab',
      'species:abbotts-booby',
      'species:christmas-island-hawk-owl',
      'species:cocos-buff-banded-rail',
      'species:blue-tailed-snake-eyed-skink',
    ],
    countryIds: ['CX', 'CC'],
    sources: ['one-earth-eco-227'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:229',
    summary: {
      value:
        'The Eastern Java-Bali Montane Rainforests represent the forests of the central mountains of eastern Java and Bali, formed by a row of about twenty active and dormant volcanoes along the Ring of Fire. Java emerged during the Miocene about 26 million years ago as coalescing volcanoes, while Bali rose from the sea more recently, during the Pliocene.',
      sourceIds: ['one-earth-eco-229'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'central mountains of eastern Java and Bali',
        'a row of about twenty active and dormant volcanoes along the Ring of Fire',
        'volcanic topography formed by coalescing eruptions over the Miocene and Pliocene',
        'mountain tops that now hold most of the remaining protected forest',
      ],
      sourceIds: ['one-earth-eco-229'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical monsoonal, with average annual rainfall in Java of about 1,900 mm and a rainy period between December and February; mountain temperatures average about 21 degrees Celsius but fall much lower at higher elevations.',
      },
      sourceIds: ['one-earth-eco-229'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'evergreen rainforest of Artocarpus elasticus, Dysoxylum caulostachyum, Lansium domesticum, and Planchonia valida',
        'moist deciduous forest of Homalium tomentosum, Albizia lebbekoides, Cassia fistula, and Tetrameles nudiflora in drier areas',
        'subtropical Lithocarpus, Quercus, Castanopsis, Lauraceae, Magnoliaceae, and Podocarpaceae dominating above 1,200 m',
        'Ericaceae shrubs including Rhododendron, Vaccinium, and Gaultheria becoming common above 3,000 m',
      ],
      sourceIds: ['one-earth-eco-229'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'montane forests serving as refuge for the critically endangered Javan leopard',
        'isolation of the endangered Javan grizzled langur on Gunung Lawu',
        'extinction of tigers from both Java and Bali',
        'mountains delivering clean freshwater to the densely populated lowlands',
      ],
      sourceIds: ['one-earth-eco-229'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 52% with a protection level of 1. Java has one of the highest human population densities in Asia, and upward migration into montane areas to clear forests and settle continues, with about 10% of the ecoregion protected, mostly as isolated reserves covering mountain tops. Priorities are designing and protecting a landscape-scale reserve network with lowland-montane linkages, stopping wildlife poaching, and halting encroachment into important montane water sources.',
      sourceIds: ['one-earth-eco-229'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:javan-leopard',
      'species:javan-lutung',
      'species:java-mouse-deer',
      'species:javan-hawk-eagle',
      'species:bali-myna',
    ],
    countryIds: ['ID'],
    sources: ['one-earth-eco-229'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:230',
    summary: {
      value:
        'The Eastern Java-Bali Rainforests represent the lowland moist forests of the eastern half of the island of Java, Bali, and the smaller islands off their northern coasts. Much of the original biodiversity was driven to the brink of extinction by centuries of clearing for rice paddies and other crops, with the endemic Bali myna now holding out in isolated protected forest patches and the Bali tiger extirpated.',
      sourceIds: ['one-earth-eco-230'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'lowland moist forests of the eastern half of the island of Java and Bali',
        'smaller islands off the northern coasts of both',
        'volcanic islands lying along the Ring of Fire',
        'karst limestone caves of the Kangean Islands serving as refugia for bats',
      ],
      sourceIds: ['one-earth-eco-230'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Drier than western Java, with average annual rainfall of 1,500 to 4,000 mm and a four to six-month dry season; the lowland forests are predominantly moist deciduous, turning semi-evergreen along the moister south coast.',
      },
      sourceIds: ['one-earth-eco-230'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'sparse forest canopy with few trees exceeding 25 m',
        'common lowland deciduous trees including Homalium tomentosum, Albizia lebbekoides, Cassia fistula, and Tetrameles nudiflora',
        'semi-evergreen rainforest of Artocarpus elasticus, Dysoxylum caulostachyum, Lansium domesticum, and Planchonia valida',
        'no single plant family dominating the forests of Java, unlike other Asian rainforests',
      ],
      sourceIds: ['one-earth-eco-230'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'fruit bats pollinating and dispersing seeds, including the cave nectar bat pollinating durian trees',
        'Kangean limestone caves sheltering most of the islands\u2019 15 bat species',
        'extinction of tigers on both islands, with the Javan leopard surviving tenaciously',
      ],
      sourceIds: ['one-earth-eco-230'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 13% with a protection level of 2. Logging concessions, agriculture, and infrastructure to support a burgeoning human population and economy have taken a huge toll on the natural ecosystems, with only 3% of the ecoregion under formal protection and wildlife extensively hunted. Priorities are public awareness campaigns to stop poaching, restoring and protecting linkages between lowland and montane habitats, and initiating in-situ recovery plans for critically endangered species.',
      sourceIds: ['one-earth-eco-230'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bali-myna',
      'species:javan-leopard',
      'species:banteng',
      'species:javan-warty-pig',
      'species:kuhls-deer',
    ],
    countryIds: ['ID'],
    sources: ['one-earth-eco-230'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:288',
    summary: {
      value:
        'The Western Java Montane Rainforests follow the long row of more than 30 volcanic craters and calderas of West and Central Java, standing sentinel over the island. These mountains act as refugia for wildlife displaced by the destruction of lowland forest, with the Javan tiger extinct since 1976 and many endemic species now endangered and isolated on mountain-top remnants.',
      sourceIds: ['one-earth-eco-288'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'montane forests of West and Central Java',
        'a row of more than 30 craters and calderas of active and dormant volcanoes',
        'island born of geological subduction and re-melting along the deep Java trench',
        'mountain-top refugia isolating endemic populations',
      ],
      sourceIds: ['one-earth-eco-288'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical montane, ever-wet in the west with more drought-tolerant, drier forest toward the east, and Rhododendron shrublands with a rich sub-alpine community above 3,000 m.',
      },
      sourceIds: ['one-earth-eco-288'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'evergreen rainforest of Artocarpus elasticus, Dysoxylum caulostachyum, Lansium domesticum, and Planchonia valida',
        'subtropical assemblage of Lithocarpus, Quercus, Castanopsis, Magnoliaceae, Hamamelidaceae, and Podocarpaceae above 1,200 m',
        'Rhododendron shrubs and a rich sub-alpine shrub and herb community above 3,000 m',
        'Rafflesia rochussenii growing as a parasite on Tetrastigma climbing vines',
      ],
      sourceIds: ['one-earth-eco-288'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'west-to-east floristic turnover, with over 50% of the island\u2019s orchids found only in West Java',
        'mountain-top refugia for endemics such as the Javan leopard, Javan lutung, and Javan gibbon',
        'extinction of the Javan tiger and increasing isolation of surviving species',
        'volcanic, subduction-driven origins along the deep Java trench',
      ],
      sourceIds: ['one-earth-eco-288'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 57% with a protection level of 1. The steep terrain has largely spared the forests, but as demand for lowland land increases, farmers and industries are encroaching into the mountains, disrupting groundwater recharge and environmental flows. Priorities are stopping illegal logging and forest clearing on steep slopes, connecting protected areas with habitat linkages, and stopping wildlife poaching.',
      sourceIds: ['one-earth-eco-288'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:javan-lutung',
      'species:silvery-gibbon',
      'species:javan-hawk-eagle',
      'species:javan-leopard',
      'species:javan-grizzled-langur',
    ],
    countryIds: ['ID'],
    sources: ['one-earth-eco-288'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:289',
    summary: {
      value:
        'The Western Java Rainforests represent the lowland rainforests of western and central Java, an island formed of volcanoes along the Ring of Fire that now dominate its topography. The small Ujung Kulon peninsula at the westernmost coast is the last refuge of the Javan rhinoceros, of which only an estimated 58 to 68 animals survive.',
      sourceIds: ['one-earth-eco-289'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'lowland rainforests of western and central Java',
        'volcanic topography along the Ring of Fire',
        'the isolated Ujung Kulon peninsula jutting from the westernmost coast',
        'rain shadows cast by the mountains',
      ],
      sourceIds: ['one-earth-eco-289'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical with two seasons; the October to April wet season brings 2,100 to 4,000 mm of rain depending on location and rain shadows, with a dry season lasting from May to September, temperatures averaging about 29 degrees Celsius, and humidity at 75%.',
      },
      sourceIds: ['one-earth-eco-289'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'mostly evergreen rainforest, with semi-evergreen, moist deciduous, and dry deciduous forest in the drier northern areas',
        'no single tree family dominating the forests of Java, unlike other Asian forests',
        'abundant evergreen trees including Artocarpus elasticus, Dysoxylum caulostachyum, Lansium domesticum, and Planchonia valida',
        'semi-evergreen forests with Kleinhovia hospita, Garuga floribunda, and species of Pterospermum',
        'Borassus and Corypha palms in the deciduous forests',
      ],
      sourceIds: ['one-earth-eco-289'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'mountains casting rain shadows that shape forest type',
        'primates such as the Javan lutung and Javan gibbon requiring forest canopy connectivity to persist',
        'the lowland forests as the last stand of the Javan rhinoceros after the Javan tiger went extinct in 1976',
        'increasingly isolated populations of fishing cat, Asiatic wild dog, Javan warty pig, and banteng',
      ],
      sourceIds: ['one-earth-eco-289'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 25% with a protection level of 1. Java is one of the most densely populated islands in the world, and almost all the natural forests have been converted for human use, with only about 2% protected in small, isolated reserves where farming and logging still occur and poaching remains rampant. Priorities are revoking timber and plantation concessions in high-biodiversity areas and instituting a moratorium, mounting a major public awareness campaign on forest values, and stopping the poaching of threatened wildlife.',
      sourceIds: ['one-earth-eco-289'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:javan-rhinoceros',
      'species:javan-slow-loris',
      'species:rafflesia',
      'species:javan-leopard',
      'species:javan-lutung',
    ],
    countryIds: ['ID'],
    sources: ['one-earth-eco-289'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:245',
    summary: {
      value:
        'The Mentawai Islands Rainforests cover four large and many smaller islands lying 80–120 km off the west coast of Sumatra. The islands carry lowland and montane rainforest and shelter a remarkable suite of endemic mammals, with the ecoregion spanning 651 thousand hectares.',
      sourceIds: ['one-earth-eco-245'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a chain of islands lying 80–120 km off the west coast of Sumatra',
        'volcanic coastal terrain with coral-fringed shorelines',
        'lowland and hilly interior forests',
        'montane forests on the larger islands',
      ],
      sourceIds: ['one-earth-eco-245'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical ever-wet maritime climate with heavy rainfall of about 4,500 mm per year, a wetter season from October to March, and temperatures near 30°C throughout the year.',
      },
      sourceIds: ['one-earth-eco-245'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland rainforest dominated by Dipterocarpus and Shorea with a canopy around 36 m high',
        'scattered emergent trees rising above 45 m',
        'montane forest of Excoecaria, Diospyros, and Canarium',
      ],
      sourceIds: ['one-earth-eco-245'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'long isolation from mainland Sumatra driving exceptional endemism',
        'seventeen endemic mammals, including endemic primates distributed between islands',
        'the Mentawai scops-owl as the only endemic bird',
      ],
      sourceIds: ['one-earth-eco-245'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 88% with a protection level of 3. Roughly half of the original forest remains, with about 30% under some form of protection, and the islands face threats from logging, oil palm expansion, and the hunting of endemic species.',
      sourceIds: ['one-earth-eco-245'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:kloss-gibbon',
      'species:simakobu',
      'species:mentawai-langur',
      'species:pagai-macaque',
    ],
    countryIds: ['ID'],
    sources: ['one-earth-eco-245'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:263',
    summary: {
      value:
        'The Peninsular Malaysian Montane Rainforests clothe the highlands of the Malay Peninsula, including the Main Range and Cameron Highlands and Mount Tahan, the peninsula’s highest peak at 2,187 m within Taman Negara. The mountains capture heavy year-round rainfall and support stunted mossy forests that act as the natural water towers of the peninsula.',
      sourceIds: ['one-earth-eco-263'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the central mountain spine and Main Range of the Malay Peninsula',
        'high peaks such as Mount Tahan reaching 2,187 m',
        'the Cameron Highlands around 2,180 m',
        'steep forested ridges and river valleys feeding peninsula waterways',
      ],
      sourceIds: ['one-earth-eco-263'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Perhumid tropical montane climate with roughly 5,000 mm of rainfall distributed year-round and high atmospheric humidity averaging about 75%.',
      },
      sourceIds: ['one-earth-eco-263'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'montane broadleaf forest of oaks and myrtles including Lithocarpus, Quercus, Syzygium, and Schima',
        'submontane conifers and ericads such as Dacrydium, Podocarpus, and Leptospermum',
        'Nepenthes pitcher plants, Cyathea tree ferns, and Pandanus klossii in the ground layer',
        'a dense cover of mosses, lichens, ferns, and orchids',
      ],
      sourceIds: ['one-earth-eco-263'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'cloud and mist interception feeding the peninsula’s rivers as natural water towers',
        'elevational forest zonation with a canopy of about 18 m and no emergents above 1,500 m',
        'habitat connectivity along ridges supporting tigers, tapirs, bears, and gibbons',
      ],
      sourceIds: ['one-earth-eco-263'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 99% with a protection level of 3. Roughly 60% of the ecoregion remains intact, much of it within protected areas, but a highway crossing the mountains fragments habitat; the Sumatran rhinoceros was declared extinct in Peninsular Malaysia in 2010.',
      sourceIds: ['one-earth-eco-263'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:siamang',
      'species:malayan-tapir',
      'species:sun-bear',
      'species:tiger',
      'species:clouded-leopard',
    ],
    countryIds: ['MY', 'TH'],
    sources: ['one-earth-eco-263'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:264',
    summary: {
      value:
        'The Peninsular Malaysian Peat Swamp Forests occupy scattered coastal remnants along the peninsula where acidic blackwater rivers drain deep peat over sulphidic marine clays. Peat-swamp trees with stilt roots, buttresses, and pneumatophores dominate the waterlogged, low-oxygen landscape, which supports otters, binturong, and a distinctive bird fauna.',
      sourceIds: ['one-earth-eco-264'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'scattered coastal peat-swamp remnants along the Malay Peninsula',
        'deep peat deposits over sulphidic marine clay and riverine alluvium',
        'acidic blackwater rivers and channels',
        'waterlogged, low-oxygen swamp floors with stilt roots and buttresses',
      ],
      sourceIds: ['one-earth-eco-264'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Hot, humid tropical climate with year-round rainfall and a seasonal monsoon pattern typical of the peninsula’s coastal lowlands.',
      },
      sourceIds: ['one-earth-eco-264'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'peat-swamp forest of Gonystylus bancanus, Macaranga pruinosa, Campnosperma coriaceum, and Blumeodendron tokbrai',
        'understorey species including Ixora grandiflora, Pternandra galeata, and Pandanus atrocarpus',
        'red sealing wax palm Crytostachys renda in the wetter zones',
      ],
      sourceIds: ['one-earth-eco-264'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'peat accumulation under anaerobic, waterlogged conditions',
        'acidic blackwater environments with pH of 2.9–4.5 shaping the swamp community',
        'coastal wetland habitats supporting otter species and nearly 200 bird species',
      ],
      sourceIds: ['one-earth-eco-264'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 55% with a protection level of 1. The ecoregion has been reduced to fragments by clearing, logging, and burning, and the remaining intact patches are priorities for protection and restoration.',
      sourceIds: ['one-earth-eco-264'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:hairy-nosed-otter',
      'species:binturong',
      'species:tiger',
      'species:malayan-tapir',
      'species:smooth-coated-otter',
    ],
    countryIds: ['MY'],
    sources: ['one-earth-eco-264'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:265',
    summary: {
      value:
        'The Peninsular Malaysian Rainforests blanket the lowlands and hills of the Malay Peninsula south of the montane belt, covering 12,578 thousand hectares of moist lowland forest. The ecoregion harbours some of the world’s richest dipterocarp forests and a diverse fauna including Asian elephants, tigers, Malayan tapirs, and large pheasants.',
      sourceIds: ['one-earth-eco-265'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'lowland plains and hills of the Malay Peninsula',
        'river valleys and seasonally flooded low-lying areas',
        'coastal districts and inland river basins',
        'foothills grading into the montane belt',
      ],
      sourceIds: ['one-earth-eco-265'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical lowland climate with around 2,000 mm of annual rainfall, temperatures of 25–32°C, and high humidity throughout the year.',
      },
      sourceIds: ['one-earth-eco-265'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'species-rich lowland dipterocarp forest with Anisoptera, Dipterocarpus, Dryobalanops, Hopea, and Shorea',
        'emergent trees including Koompassia malaccensis, Koompassia excelsa, Intsia palembanica, and Dyera costulata',
        'palms of Arenga and Eugeissona and rattans of Calamus and Daemonorops',
        'forest trees of Gluta, Heritiera, Palaquium, and Sindora',
      ],
      sourceIds: ['one-earth-eco-265'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'connectivity between foothills and lowlands critical for elephants, tigers, tapirs, and gaur',
        'seed dispersal by hornbills, including the rhinoceros hornbill, and large frugivores',
        'river networks linking fragmented forest patches',
      ],
      sourceIds: ['one-earth-eco-265'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 54% with a protection level of 3. Logging, oil palm and rubber plantations, poaching, and fragmentation have reduced and isolated the lowland forests, making habitat connectivity and enforcement of protected areas key priorities.',
      sourceIds: ['one-earth-eco-265'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:malayan-tapir',
      'species:tiger',
      'species:asian-elephant',
      'species:gaur',
      'species:sun-bear',
    ],
    countryIds: ['MY', 'TH'],
    sources: ['one-earth-eco-265'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:277',
    summary: {
      value:
        'The Sumatran Freshwater Swamp Forests grow in disjunct patches on the periodically flooded alluvial plains of eastern Sumatra, where rivers spill across the floodplains for more than four months each year. These nutrient-rich, frequently inundated forests cover 1,812 thousand hectares and support elephants, tigers, gibbons, and a rich waterbird and crocodilian fauna.',
      sourceIds: ['one-earth-eco-277'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'disjunct alluvial floodplain patches along the east coast of Sumatra',
        'freshwater swamps inundated for more than four months each year',
        'braided rivers, oxbows, and seasonal pools',
        'fresh alluvial soils',
      ],
      sourceIds: ['one-earth-eco-277'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Hot, humid tropical climate with heavy year-round rainfall feeding the rivers and the seasonal floods that spread across the eastern Sumatran lowlands.',
      },
      sourceIds: ['one-earth-eco-277'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'freshwater swamp forest with emergent Alstonia surmounting 50 m and bearing pneumatophores',
        'swamp dipterocarps including Dipterocarpus apterus and Shorea sumatrana, S. balangeran, and S. palembanica',
        'species such as Campnosperma auriculatum, Mangifera paludosa, and Artocarpus kemando',
        'palms of Oncosperma tigillarium, Pholidocarpus macrocarpus, and Eleiodoxa conferta, with Nypa palms along the watercourses',
      ],
      sourceIds: ['one-earth-eco-277'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'seasonal river-flooding cycles that persist for months each year',
        'pneumatophore and stilt adaptations to waterlogged soils',
        'swamp waterways serving as corridors for elephants and large cats',
        'wetlands that support nesting and roosting storks such as the lesser adjutant and milky stork',
      ],
      sourceIds: ['one-earth-eco-277'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 28% with a protection level of 1. Fewer than 5% of the swamps are formally protected and roughly 40% of the original forest remains; drainage, encroachment into reserves such as Way Kambas, and conversion continue to threaten the rest.',
      sourceIds: ['one-earth-eco-277'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:flat-headed-cat',
      'species:sumatran-tiger',
      'species:asian-elephant',
      'species:siamang',
      'species:malayan-tapir',
    ],
    countryIds: ['ID'],
    sources: ['one-earth-eco-277'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:278',
    summary: {
      value:
        'The Sumatran Lowland Rainforests are among the most species-rich forests of the Indo-Pacific, covering 26,002 thousand hectares of lowlands and hills flanking the Barisan Mountains. The ecoregion supports Sumatran orangutans, elephants, Sumatran tigers, and the only remaining wild populations of the Sumatran rhinoceros.',
      sourceIds: ['one-earth-eco-278'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'lowlands and hills flanking the Barisan Mountains of western Sumatra',
        'eastern coastal plains draining to the sea',
        'western slopes rising steeply from the Indian Ocean coast',
        'forests grading upward into the montane belt',
      ],
      sourceIds: ['one-earth-eco-278'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Wet tropical climate with more than 4,700 mm of annual rainfall on the western slopes and about 2,500 mm in the drier eastern rain shadow of the Barisan Mountains.',
      },
      sourceIds: ['one-earth-eco-278'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland rainforest rich in Dipterocarpaceae with more than one hundred species, including six endemics',
        'emergent Dipterocarpus, Parashorea, Shorea, and Dryobalanops reaching above 70 m',
        'canopy trees of Ficus, Koompasia, Sindora, and Dialium',
      ],
      sourceIds: ['one-earth-eco-278'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'mast fruiting of dipterocarps driving seasonal forest dynamics',
        'the Barisan ridge casting a rain shadow over the eastern lowlands',
        'dispersal of large fruits and seeds by gibbons, hornbills, and fruit bats',
        'a north–south faunal boundary, with white-handed gibbons north of Lake Toba and dark-handed gibbons to the south',
      ],
      sourceIds: ['one-earth-eco-278'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 49% with a protection level of 1. Only about 7% of the ecoregion is protected, and although more than 60% of the forest remains, logging and pulp and palm plantations continue to degrade it, with Gunung Leuser and Way Kambas holding the key refuges.',
      sourceIds: ['one-earth-eco-278'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sumatran-rhinoceros',
      'species:sumatran-orangutan',
      'species:sumatran-tiger',
      'species:asian-elephant',
      'species:white-handed-gibbon',
    ],
    countryIds: ['ID'],
    sources: ['one-earth-eco-278'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:279',
    summary: {
      value:
        'The Sumatran Montane Rainforests wrap around the forested peaks of the Barisan Mountains, with more than ninety summits above 2,000 m and Mount Kerinci reaching 3,805 m, the highest volcano in Indonesia. Spanning 7,310 thousand hectares, the ecoregion serves as the island’s water tower and shelters Sumatran orangutans, the last wild Sumatran rhinoceros populations, and endemic birds.',
      sourceIds: ['one-earth-eco-279'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the forested highlands of the Barisan Mountain Range running almost 1,700 km along Sumatra',
        'more than ninety peaks above 2,000 m, including Mount Kerinci at 3,805 m',
        'the caldera and surrounding heights of Lake Toba, a super-volcano crater',
        'steep ridges and valley systems of the island’s water catchment',
      ],
      sourceIds: ['one-earth-eco-279'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Perhumid tropical montane climate with rainfall exceeding 4,700 mm per year on the western slopes and drier conditions in the eastern rain shadow, with frequent seismic and volcanic activity.',
      },
      sourceIds: ['one-earth-eco-279'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lower montane forest giving way to Lithocarpus, Quercus, Castanea, Cinnamomum, Persea, and Litsea',
        'upper montane forest with conifers, Rhododendron, and Vaccinium',
        'subalpine shrublands and grasslands with Agrostis, Festuca, Juncus, Carex, Scirpus, and Cyperus bogs',
        'giant Rafflesia flowers, including five of the world’s sixteen species, and the titan arum, the world’s tallest flower',
      ],
      sourceIds: ['one-earth-eco-279'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'subduction-driven earthquakes and frequent volcanic eruptions reshaping the terrain',
        'cloud interception feeding the rivers of Sumatra as a natural water tower',
        'elevational zonation from lower montane to subalpine communities',
        'seasonal lowland–montane movements by Sumatran orangutans',
      ],
      sourceIds: ['one-earth-eco-279'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 84% with a protection level of 4. Roughly one-third of the ecoregion lies within protected areas, but encroachment, illegal logging, and poaching of tigers and orangutans remain serious, and landscape-scale planning is a stated priority.',
      sourceIds: ['one-earth-eco-279'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sumatran-orangutan',
      'species:sumatran-rhinoceros',
      'species:sumatran-tiger',
      'species:thomas-leaf-monkey',
      'species:sumatran-ground-cuckoo',
    ],
    countryIds: ['ID'],
    sources: ['one-earth-eco-279'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:280',
    summary: {
      value:
        'The Sumatran Peat Swamp Forests occupy waterlogged basins along the southeastern coast of Sumatra, where peat layers several metres thick have accumulated over more than 30,000 years. These acidic, oxygen-poor swamps cover 8,771 thousand hectares and support the Sumatran tiger, Sunda clouded leopard, otters, and significant stork colonies.',
      sourceIds: ['one-earth-eco-280'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'waterlogged peat basins along the southeastern coast of Sumatra',
        'peat layers several metres thick accumulated over more than 30,000 years',
        'acidic clay soils beneath the swamp',
        'drainage channels and blackwater streams',
      ],
      sourceIds: ['one-earth-eco-280'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Hot, humid tropical climate with year-round rainfall and seasonal monsoon-driven flooding across the coastal lowlands.',
      },
      sourceIds: ['one-earth-eco-280'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'mixed peat swamp forest of Koompassia malaccensis, Gonystylus bancanus, Shorea teysmaniana, and S. uliginosa',
        'bintangur forest of Calophyllum lowii, Tetramerista, and Shorea in the deeper peat',
        'peaty-zone species such as Durio lowianus, Calophyllum grandiflorum, Campnosperma auriculatum, and Palaquium burckii',
      ],
      sourceIds: ['one-earth-eco-280'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'peat accumulation over millennia in waterlogged, anaerobic conditions',
        'acidic, low-oxygen blackwaters that slow decomposition',
        'seasonal flooding linking swamp pools, rivers, and stork feeding grounds',
      ],
      sourceIds: ['one-earth-eco-280'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 35% with a protection level of 2. Draining, clearing, and burning, including severe drought-year fires, degrade the swamps; Sembilang National Park protects a major breeding colony of milky storks, and gazetting the intact peat swamps is a stated priority.',
      sourceIds: ['one-earth-eco-280'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:storms-stork',
      'species:sumatran-tiger',
      'species:sunda-clouded-leopard',
      'species:flat-headed-cat',
      'species:siamang',
    ],
    countryIds: ['ID'],
    sources: ['one-earth-eco-280'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:305',
    summary: {
      value:
        'The Sumatran Tropical Pine Forests occur in five scattered patches high on the Bukit Barisan Mountains, where fires, landslides, and a drier eastern climate keep broadleaf forest from establishing. These Pinus merkusii-dominated woodlands cover 277 thousand hectares at the southernmost extent of the species, with about 40% under protection.',
      sourceIds: ['one-earth-eco-305'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'five discrete patches of tropical pine forest on the Bukit Barisan Mountains',
        'high elevations where frequent fires and landslides prevent broadleaf forest from taking hold',
        'drier eastern slopes of the range',
      ],
      sourceIds: ['one-earth-eco-305'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical highland climate with about 2,500 mm of annual rainfall across the range and drier conditions on the eastern slopes where the pine forests grow.',
      },
      sourceIds: ['one-earth-eco-305'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'forest dominated by Pinus merkusii',
        'a sparse undergrowth of Lonicera and Berberis shrubs',
        'a thick accumulation of pine needles retarding the understorey',
      ],
      sourceIds: ['one-earth-eco-305'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'frequent fire disturbance maintaining the pine woodlands',
        'landslides and steep terrain creating regeneration openings',
        'the pine needle layer limiting undergrowth and the habitat for small ground mammals',
      ],
      sourceIds: ['one-earth-eco-305'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 89% with a protection level of 4. About 40% of the ecoregion lies within the Kerinci Seblat and Lingga Isaq protected areas, but logging threatens Pinus merkusii throughout its range and more frequent fires risk pushing the forests past a tipping point of regeneration.',
      sourceIds: ['one-earth-eco-305'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:pinus-merkusii',
      'species:yellow-throated-marten',
      'species:sunda-laughingthrush',
      'species:black-capped-white-eye',
    ],
    countryIds: ['ID'],
    sources: ['one-earth-eco-305'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:235',
    summary: {
      value:
        'The Irrawaddy Moist Deciduous Forests ecoregion covers the rain-shadowed basin of the Irrawaddy River in central Myanmar, where teak and ironwood forests grow on well-drained hilly terrain. It is best known today as one of the last refuges of the endangered Eld\'s deer, whose thamin subspecies now persists mainly in the Chatthin and Shwesettaw protected areas.',
      sourceIds: ['one-earth-eco-235'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'vast Irrawaddy River basin',
        'catchments of the Bago Yoma mountains and foothills of Rakhine Yoma',
        'well-drained hilly, undulating terrain up to about 1,000 m',
        'Irrawaddian sedimentary soils rich in fossils and silicified wood',
        'Rakhine range intercepting monsoon winds to create a rain shadow',
      ],
      sourceIds: ['one-earth-eco-235'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Dry for a moist deciduous zone, with roughly 1,500 mm of monsoon rainfall followed by long dry spells.',
      },
      sourceIds: ['one-earth-eco-235'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'closed high forest with trees over 30 m where undisturbed',
        'teak and ironwood dominated, widely planted as timber',
        'associated Terminalia, Salmalia, Gmelina, Pterocarpus and Vitex',
        'bamboo groves of Bambusa polymorpha and Dendrocalamus',
        'evergreen emergents in places',
      ],
      sourceIds: ['one-earth-eco-235'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'rain shadow created by the Rakhine Yoma',
        'long dry season shaping deciduousness',
        'intensive hunting that has removed most megafauna',
        'overlap with the Irrawaddy Plains Endemic Bird Area',
      ],
      sourceIds: ['one-earth-eco-235'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Like other lowland forests of the region this ecoregion has been extensively cleared and cultivated, and hunting has extirpated most wildlife. With roughly 10,000 km2 of forest still remaining, priorities are securing the existing protected areas against poaching, bringing unprotected forests and Key Biodiversity Areas into a protected-area framework, and regional conservation planning across the Irrawaddy system.',
      sourceIds: ['one-earth-eco-235'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:elds-deer',
      'species:white-throated-babbler',
      'species:serow',
      'species:gaur',
      'species:asiatic-black-bear',
    ],
    countryIds: ['MM'],
    sources: ['one-earth-eco-235'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:237',
    summary: {
      value:
        'The Kayah-Karen Montane Rainforests ecoregion spans the karst mountains of the northern Tenasserim range on the Myanmar-Thailand border, where limestone cliffs, caves, and steep ridges rise above 2,000 m. It is notable for harboring both the world\'s smallest mammal, Kitti\'s hog-nosed bat, and one of its largest, the Asian elephant.',
      sourceIds: ['one-earth-eco-237'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'northern Tenasserim Mountain Range along the Thai-Myanmar border',
        'heavily dissected Paleozoic limestone',
        'overhanging cliffs, sinkholes, and caves of tropical karst',
        'steep hillsides rising to ridges over 2,000 m',
      ],
      sourceIds: ['one-earth-eco-237'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Warm, wet, and seasonal with about 2,000 mm of rain a year; west-facing Myanmar slopes catch the monsoon while Thai-facing eastern slopes sit in a drier rain shadow, and winters are cool at high elevations.',
      },
      sourceIds: ['one-earth-eco-237'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'low-elevation forests of teak, Dipterocarpus, and oak',
        'Malayan urn vine and other epiphytes',
        'mid-elevation Magnoliaceae-Lauraceae evergreen forest',
        'ridge forests with Castanopsis, Quercus, Lithocarpus, and Schima',
        'rhododendron thickets at the highest elevations',
      ],
      sourceIds: ['one-earth-eco-237'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'karst weathering shaping caves and cliffs',
        'monsoon exposure contrasted across the range',
        'rain-shadow gradient between Myanmar and Thailand',
        'haunting gibbon duets resonating across valleys',
      ],
      sourceIds: ['one-earth-eco-237'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'About 72% of forest cover remains and protected areas already cover about 27% of the ecoregion, so the potential for conservation is high, though encroachment, illegal logging, and rising poaching pressure are increasing. Priorities include promoting sustainable, legal logging, supporting environment-friendly agriculture, and partnering with local ethnic and tribal communities on wildlife protection.',
      sourceIds: ['one-earth-eco-237'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:kittis-hog-nosed-bat',
      'species:eastern-hoolock-gibbon',
      'species:asian-elephant',
      'species:malayan-tapir',
      'species:tiger',
    ],
    countryIds: ['MM', 'TH'],
    sources: ['one-earth-eco-237'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:256',
    summary: {
      value:
        'The Northern Indochina Subtropical Forests ecoregion spans the subtropical highlands of northern Myanmar, Laos, Vietnam, Yunnan in China, and a sliver of northern Thailand, where Palearctic and Indo-Malayan faunas and floras meet. It is a refuge for the critically endangered Tonkin snub-nosed monkey and other evolutionary relicts trapped by past geological upheavals.',
      sourceIds: ['one-earth-eco-256'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'highlands of the Yunnan Plateau',
        'highly incised hills and river valleys',
        'middle catchments of the Red, Mekong, and Salween rivers',
        'valley floors descending to 200-400 m',
        'isolated peaks seldom rising above 2,000 m',
      ],
      sourceIds: ['one-earth-eco-256'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Monsoonal, with 1,200 to 2,500 mm of rain drawn from the Bay of Bengal and South China Sea between April and October, complex rain shadows, and temperatures that fall with elevation; pre-monsoon spring is the hottest period.',
      },
      sourceIds: ['one-earth-eco-256'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'montane broadleaf forest with strong Himalayan affinities',
        'Betulaceae, Fagaceae, Lauraceae, and Magnoliaceae canopy',
        'relict species such as the monotypic horsetail tree',
        'needle-leaf Tsuga dumosa and Abies delavayi forest above 2,000 m',
      ],
      sourceIds: ['one-earth-eco-256'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Palearctic-Indo-Malayan faunal mixing zone',
        'evolutionary relict species isolated by geological events',
        'over 180 mammal and 700 bird species',
        'swidden-driven forest degradation and slow fallow recovery',
      ],
      sourceIds: ['one-earth-eco-256'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Large areas of unprotected forest remain but are largely degraded by centuries of swidden agriculture, and indiscriminate hunting feeds both local consumption and markets in China. Priorities are protecting intact old-growth forests within a landscape-scale strategy, engaging tribal communities as conservation stewards, and restricting hunting.',
      sourceIds: ['one-earth-eco-256'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:tonkin-snub-nosed-monkey',
      'species:red-panda',
      'species:great-hornbill',
      'species:blyths-tragopan',
      'species:blood-pheasant',
    ],
    countryIds: ['CN', 'LA', 'MM', 'TH', 'VN'],
    sources: ['one-earth-eco-256'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:294',
    summary: {
      value:
        'The Irrawaddy Dry Forests ecoregion is a patchwork of thorny, low-statured forest and open dipterocarp woodland in the arid central dry zone of Myanmar, where rainfall is scarce and water is chronically short. It holds one of the most important refuges of the critically endangered Burmese star tortoise, protected by local religious belief in the Minzontaung Wildlife Sanctuary.',
      sourceIds: ['one-earth-eco-294'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'patchwork of dry forests in the central Myanmar dry zone',
        'soft sandstone and clay substrates eroded by wind and wide temperature swings',
        'hardly any groundwater recharge',
        'extreme seasonal water shortage',
      ],
      sourceIds: ['one-earth-eco-294'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Harsh and dry with only about 650 mm of rainfall, falling sporadically and torrentially for rarely more than fifteen days a year; the dry zone grows even more water-stressed under climate change.',
      },
      sourceIds: ['one-earth-eco-294'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'thorny, scrubby, low-statured trees',
        'Terminalia oliveri, Tectona hamiltoniana, Acacia catechu and Bauhinia racemosa',
        'high and low Indaing dipterocarp forest of Dipterocarpus tuberculatus',
        'stands of teak and tall bamboo',
      ],
      sourceIds: ['one-earth-eco-294'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'extreme drought and water shortage shaping sparse forest',
        'wind and thermal erosion of soft rock',
        'perching place of the Irrawaddy Plains Endemic Bird Area',
        'larger mammals largely extirpated by hunting',
      ],
      sourceIds: ['one-earth-eco-294'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'Most forest has been converted and the remainder degraded, with hunting for subsistence and trade persisting and agarwood, rattans, and orchids overharvested. Priorities are securing existing protected areas, building anti-poaching capacity, and placing remaining unprotected forests and Key Biodiversity Areas under a protected-area umbrella.',
      sourceIds: ['one-earth-eco-294'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:burmese-starred-tortoise',
      'species:common-leopard',
      'species:elds-deer',
      'species:white-throated-babbler',
      'species:barking-deer',
    ],
    countryIds: ['MM'],
    sources: ['one-earth-eco-294'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:666',
    summary: {
      value:
        'Hokkaido Deciduous Forests cover the lowlands and hills of Hokkaido and northern Honshu. Mixed broadleaf forests of oak, maple, elm, and linden dominate, with a rich understory and a strong seasonal character driven by cold winters and warm summers.',
      sourceIds: ['one-earth-eco-666'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'rolling Hokkaido lowlands',
        'northern Honshu hills',
        'river valleys and alluvial plains',
        'volcanic plateaus',
      ],
      sourceIds: ['one-earth-eco-666'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Cool-temperate continental with cold, snowy winters and warm summers; annual precipitation 800–1,200 mm.',
        annualPrecipitationMm: { min: 800, max: 1200 },
      },
      sourceIds: ['one-earth-eco-666'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Mongolian oak',
        'Japanese elm',
        'Japanese linden',
        'painted maple',
        'bamboo understory',
      ],
      sourceIds: ['one-earth-eco-666'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'heavy winter snowpack',
        'spring snowmelt flooding',
        'deciduous leaf-litter nutrient cycling',
        'stream-mediated nutrient transport',
      ],
      sourceIds: ['one-earth-eco-666'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Extensive lowland conversion to agriculture and plantation forestry has fragmented the original forest. Remaining blocks in national parks and protected forests face deer overbrowsing and climate-induced compositional shifts.',
      sourceIds: ['one-earth-eco-666'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:japanese-macaque',
      'species:japanese-serow',
      'species:japanese-cedar',
    ],
    countryIds: ['JP'],
    sources: ['one-earth-eco-666'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:670',
    summary: {
      value:
        'Nihonkai Evergreen Forests occupy the Sea of Japan coastal lowlands and foothills from southwestern Hokkaido through western Honshu to Kyushu. Warm-temperate evergreen broadleaf forests of Castanopsis, Quercus, and Camellia are maintained by heavy winter snowfall and summer moisture from the Sea of Japan.',
      sourceIds: ['one-earth-eco-670'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Sea of Japan coastal plains',
        'western Honshu foothills',
        'heavy-snow belt mountains',
        'ryokuchi satoyama landscapes',
      ],
      sourceIds: ['one-earth-eco-670'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Warm-temperate with extremely heavy winter snowfall (2–5 m) and humid summers; annual precipitation 1,500–2,500 mm.',
        annualPrecipitationMm: { min: 1500, max: 2500 },
      },
      sourceIds: ['one-earth-eco-670'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Japanese blue oak',
        'Camellia japonica',
        'Castanopsis cuspidata',
        'Machilus thunbergii',
        'Eurya japonica',
      ],
      sourceIds: ['one-earth-eco-670'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'deep snow insulation and spring meltwater pulse',
        'snow-shape canopy adaptation',
        'evergreen year-round photosynthesis',
        'satoyama coppice and charcoal cycles',
      ],
      sourceIds: ['one-earth-eco-670'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Lowland evergreen forests are heavily reduced and fragmented by urban and agricultural expansion. Remaining stands in satoyama landscapes and protected areas face deer browsing, invasive plants, and warming-driven evergreen expansion.',
      sourceIds: ['one-earth-eco-670'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:japanese-serow',
      'species:japanese-cedar',
      'species:japanese-giant-salamander',
    ],
    countryIds: ['JP'],
    sources: ['one-earth-eco-670'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:671',
    summary: {
      value:
        'Nihonkai Montane Deciduous Forests form a cool-temperate belt above the evergreen zone on the Sea of Japan side, from Hokkaido through the Honshu backbone. Deciduous broadleaf forests of beech, oak, and maple thrive under deep winter snow and cool, moist summers.',
      sourceIds: ['one-earth-eco-671'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Honshu backbone mountains',
        'deep-snow montane slopes',
        'beech-dominated ridges',
        'headwater stream valleys',
      ],
      sourceIds: ['one-earth-eco-671'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Cool-temperate with very heavy snowfall (3–8 m), short growing season, and high annual precipitation 2,000–3,000 mm.',
        annualPrecipitationMm: { min: 2000, max: 3000 },
      },
      sourceIds: ['one-earth-eco-671'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Japanese beech',
        'Mongolian oak',
        'Japanese maple',
        'Japanese wingnut',
        'Sasa bamboo',
      ],
      sourceIds: ['one-earth-eco-671'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'deep snowpack controls tree distribution',
        'snow creep and avalanche disturbance',
        'beech mast seeding cycles',
        'headwater nutrient export',
      ],
      sourceIds: ['one-earth-eco-671'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Large contiguous beech forests persist in the Honshu mountains and are well represented in national parks. Pressures include deer overbrowsing of understory, climate warming reducing snowpack, and plantation conversion at lower elevations.',
      sourceIds: ['one-earth-eco-671'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:japanese-serow',
      'species:blakistons-fish-owl',
      'species:japanese-cedar',
    ],
    countryIds: ['JP'],
    sources: ['one-earth-eco-671'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:682',
    summary: {
      value:
        'Taiheiyo Evergreen Forests occupy the Pacific-facing lowlands and river valleys of Honshu, Shikoku, and Kyushu, along with Tsushima and the Izu Islands. Warm-temperate evergreen broadleaf forests of Castanopsis, Persea thunbergii, and evergreen oak are maintained by the humid Kuroshio-influenced climate and a long growing season.',
      sourceIds: ['one-earth-eco-682'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Pacific-side Honshu, Shikoku, and Kyushu lowlands',
        'Tsushima Island and Izu Islands',
        'coastal archipelagos and tidal flats',
        'Nachi Falls and Lake Biwa lowlands',
      ],
      sourceIds: ['one-earth-eco-682'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Humid subtropical with mild winters, warm humid summers, and a strong Kuroshio influence; summer precipitation up to 400 mm per month and below 100 mm in winter.',
        annualPrecipitationMm: { min: 1200, max: 2800 },
      },
      sourceIds: ['one-earth-eco-682'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Castanopsis cuspidata',
        'Persea thunbergii',
        'Japanese blue oak',
        'Japanese camellia',
        'Japanese red and black pine',
      ],
      sourceIds: ['one-earth-eco-682'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Kuroshio-driven humid coastal climate',
        'long growing season for evergreen broadleafs',
        'typhoon disturbance on southern exposures',
        'freshwater-lake and waterfall ecosystems',
      ],
      sourceIds: ['one-earth-eco-682'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One of the most heavily modified Japanese ecoregions, with Tokyo, Osaka, and Nagoya within its bounds and original forest surviving mainly on shrine slopes and unstable volcanic terrain. Sika deer and wild boar overbrowsing, invasive sportfish, and coastal warming threaten remaining stands.',
      sourceIds: ['one-earth-eco-682'],
      derivation: 'authored-summary',
    },
    countryIds: ['JP'],
    sources: ['one-earth-eco-682'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:683',
    summary: {
      value:
        'Taiheiyo Montane Deciduous Forests extend along the Pacific-facing mountains of central and southern Honshu, Shikoku, and Kyushu. Deciduous broadleaf forests of beech, oak, and maple experience drier winters and wetter summers than their Sea of Japan counterparts, with lower snowfall and a distinct Pacific monsoon influence.',
      sourceIds: ['one-earth-eco-683'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Pacific-facing Honshu mountains',
        'Kii Peninsula ridges',
        'Shikoku and Kyushu mountains',
        'steep river gorges',
      ],
      sourceIds: ['one-earth-eco-683'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Cool-temperate with moderate snowfall, warm humid summers, and strong Pacific monsoon influence; annual precipitation 1,800–2,800 mm.',
        annualPrecipitationMm: { min: 1800, max: 2800 },
      },
      sourceIds: ['one-earth-eco-683'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Japanese beech',
        'Mizunara oak',
        'Japanese maple',
        'Japanese horse chestnut',
        'Sasa bamboo',
      ],
      sourceIds: ['one-earth-eco-683'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Pacific monsoon summer rainfall',
        'lower snowpack than Sea of Japan side',
        'typhoon disturbance on southern exposures',
        'steep-slope landslide dynamics',
      ],
      sourceIds: ['one-earth-eco-683'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Extensive beech forests remain in the Kii Peninsula and southern Alps, with good national park coverage. Deer overbrowsing, cedar and cypress plantation expansion, and warming-driven beech range contraction are ongoing concerns.',
      sourceIds: ['one-earth-eco-683'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:japanese-macaque',
      'species:japanese-serow',
      'species:japanese-cedar',
    ],
    countryIds: ['JP'],
    sources: ['one-earth-eco-683'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:698',
    summary: {
      value:
        'Hokkaido Montane Conifer Forests form the subalpine belt on Hokkaido and northern Honshu mountains. Mixed conifer forests of Sakhalin fir, Yezo spruce, and Erman’s birch dominate, transitioning to alpine shrub and meadow at the treeline.',
      sourceIds: ['one-earth-eco-698'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Hokkaido volcanic mountains',
        'northern Honshu subalpine zone',
        'treeline ecotone',
        'cirque basins and alpine meadows',
      ],
      sourceIds: ['one-earth-eco-698'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Subarctic to subalpine with long cold winters, cool summers, and moderate precipitation 800–1,500 mm.',
        annualPrecipitationMm: { min: 800, max: 1500 },
      },
      sourceIds: ['one-earth-eco-698'],
      derivation: 'source-value',
    },
    vegetation: {
      value: ['Sakhalin fir', 'Yezo spruce', "Erman's birch", 'Daurian larch', 'Sasa kurilensis'],
      sourceIds: ['one-earth-eco-698'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'volcanic tephra soil development',
        'wind and snow at treeline',
        'conifer mast seeding cycles',
        'brown bear seed dispersal',
      ],
      sourceIds: ['one-earth-eco-698'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Much of the subalpine zone is protected in national parks (Shiretoko, Daisetsuzan, Akan-Mashu). Historical logging at lower elevations has reduced connectivity; climate warming is elevating treelines and reducing alpine habitat.',
      sourceIds: ['one-earth-eco-698'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:blakistons-fish-owl',
      'species:japanese-cedar',
      'species:red-crowned-crane',
    ],
    countryIds: ['JP'],
    sources: ['one-earth-eco-698'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:699',
    summary: {
      value:
        'Honshu Alpine Conifer Forests occupy the highest peaks of central and northern Honshu, including the Japanese Alps. Subalpine conifer forests of Veitch fir, Maries fir, and Erman’s birch form a narrow belt below the alpine zone, with some of Japan’s most intact mountain ecosystems.',
      sourceIds: ['one-earth-eco-699'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Japanese Alps high peaks',
        'central Honshu volcanic cones',
        'alpine treeline transition',
        'cirques and permanent snowfields',
      ],
      sourceIds: ['one-earth-eco-699'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Subalpine to alpine with heavy winter snow, short cool summers, and annual precipitation 2,000–3,500 mm, much as snow.',
        annualPrecipitationMm: { min: 2000, max: 3500 },
      },
      sourceIds: ['one-earth-eco-699'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        "Veitch's fir",
        "Maries' fir",
        "Erman's birch",
        'Japanese stone pine',
        'alpine shrub and meadow',
      ],
      sourceIds: ['one-earth-eco-699'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'extreme snow accumulation and avalanche',
        'short alpine growing season',
        'wind desiccation at treeline',
        'glacial relict communities',
      ],
      sourceIds: ['one-earth-eco-699'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Core areas are well protected in Chubu-Sangaku, Nikko, and Joshinetsu Kogen national parks. Recreation pressure, deer range expansion into alpine zones, and climate-driven treeline rise are the primary conservation challenges.',
      sourceIds: ['one-earth-eco-699'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:blakistons-fish-owl',
      'species:red-crowned-crane',
      'species:japanese-cedar',
    ],
    countryIds: ['JP'],
    sources: ['one-earth-eco-699'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:687',
    summary: {
      value:
        'Western Siberian Hemiboreal Forests forms a latitudinal belt roughly 150 km wide and 2,000 km long along the southern edge of the west Siberian taiga, crossed by the Irtysh and Ob rivers. A humid continental climate supports mixed tall-conifer, birch, aspen, and lime forests that act as a dispersal corridor between taiga and steppe, hosting a blend of eastern and western biota.',
      sourceIds: ['one-earth-eco-687'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'narrow southern taiga forest belt',
        'Irtysh and Ob river crossings',
        'swamps, bogs, and riverine floodplains',
        'forked eastern end toward Altai foothills',
      ],
      sourceIds: ['one-earth-eco-687'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Humid continental with cool summers; average monthly temperatures about -17–19.5°C and around 475 mm annual precipitation peaking in July, with mean annual temperatures just above freezing.',
        annualPrecipitationMm: { min: 400, max: 550 },
      },
      sourceIds: ['one-earth-eco-687'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Siberian fir and Siberian spruce',
        'Scots pine, aspen, and small-leaved lime',
        'silver and downy birch primary forest',
        'endemic Siberian lime near the Altai foothills',
        'swamp flora including orchids and waterlilies',
      ],
      sourceIds: ['one-earth-eco-687'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'east–west and taiga–steppe dispersal corridor',
        'fire and logging disturbance regime',
        'bog and swamp drainage legacy',
        'northward shift of broad-leaved species',
      ],
      sourceIds: ['one-earth-eco-687'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 33% with a protection level of 2. Intensive 1960s–1980s logging, fires, and drainage reduced small-leaved and Siberian lime, while many zakaznik reserves exist but intact primary forest remains largely unprotected, threatened by illegal logging, oil-and-gas pollution, and a narrow range highly sensitive to climate change.',
      sourceIds: ['one-earth-eco-687'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:yellow-breasted-bunting',
      'species:siberian-lime',
      'species:demoiselle-crane',
      'species:snowy-owl',
      'species:siberian-roe-deer',
    ],
    countryIds: ['RU'],
    sources: ['one-earth-eco-687'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:731',
    summary: {
      value:
        'Kazakh Forest Steppe forms a long 150–250 km-wide band from the Ural Mountains to the Altai and Sayan foothills, its southern edge tracking much of the Russia–Kazakhstan border. A semi-humid to semi-arid climate produces a mosaic of species-rich meadow steppe and small-leaved birch, aspen, and Scots pine woodland dotted with thousands of shallow freshwater and salt lakes.',
      sourceIds: ['one-earth-eco-731'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'flat relief with numerous depressions',
        'thousands of shallow freshwater and salt lakes',
        'ridge-and-furrow relief in the east',
        'wide 150–250 km steppe–forest band',
      ],
      sourceIds: ['one-earth-eco-731'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Semi-humid to semi-arid; average monthly temperatures -16–21.4°C in the southwest and -17–19.3°C in the northeast, with 322–446 mm mean annual precipitation and mean annual temperatures of 1.2–3.3°C.',
        annualPrecipitationMm: { min: 322, max: 446 },
      },
      sourceIds: ['one-earth-eco-731'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'birch, aspen, and Scots pine woodland',
        'species-rich meadow steppe herbs',
        'halophytic salt-tolerant communities',
        'shade and water-adapted forest-grassland species',
      ],
      sourceIds: ['one-earth-eco-731'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'lake-level and salinity cycling',
        'grazing and hay-mowing regimes',
        'southern range edge for brown bear and moose',
        'migratory bird staging at steppe lakes',
      ],
      sourceIds: ['one-earth-eco-731'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 18% with a protection level of 6. The fertile, easily ploughed meadow steppes have been almost entirely converted to cropland, with surviving communities mostly on stony, uncultivable slopes. Intensifying arable farming, fertilizer runoff, and reduced grazing threaten the remaining lakes and species-rich steppe fragments.',
      sourceIds: ['one-earth-eco-731'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:siberian-roe-deer',
      'species:saker-falcon',
      'species:yellow-breasted-bunting',
    ],
    countryIds: ['RU', 'KZ'],
    sources: ['one-earth-eco-731'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:732',
    summary: {
      value:
        'Kazakh Steppe is a vast dry-steppe ecoregion bounded west by the Ural River, north and east by more humid forest steppe, and south by semi-desert. Long cold winters and 150–300 mm annual precipitation sustain an undulating sea of feathergrass and fescue, salt-tolerant communities, and brackish lakes that serve as a major migratory-bird crossroads.',
      sourceIds: ['one-earth-eco-732'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'vast undulating dry-steppe plains',
        'many brackish and saline lakes',
        'Ishim and Irtysh river crossings',
        'Ural River western boundary',
      ],
      sourceIds: ['one-earth-eco-732'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Continental with long cold winters; average monthly temperatures about -19–25°C and mean annual precipitation of 150–300 mm.',
        annualPrecipitationMm: { min: 150, max: 300 },
      },
      sourceIds: ['one-earth-eco-732'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Lessing feathergrass and steppe fescue',
        'ephemeral tulips and madwort blooms',
        'halophytic salt-tolerant scrub',
        'birch, aspen, and Scots pine along watercourses',
      ],
      sourceIds: ['one-earth-eco-732'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'wind, drought, fire, and grazing adaptation',
        'nomadic saiga movements',
        'flyway rest, feed, and molt for millions of birds',
        'overgrazing pressure from pastoralism',
      ],
      sourceIds: ['one-earth-eco-732'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 30% with a protection level of 1. About 60% of the steppe was ploughed in the Soviet Virgin Lands campaign, and remaining grassland is fragmented with very low protection and connectivity. Poaching and overgrazing threaten critically endangered saiga, birds of prey, and reptiles, while climate change, drought, and fire increase.',
      sourceIds: ['one-earth-eco-732'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:saiga-antelope',
      'species:corsac-fox',
      'species:steppe-eagle',
      'species:sociable-lapwing',
      'species:argali',
    ],
    countryIds: ['KZ', 'RU'],
    sources: ['one-earth-eco-732'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:733',
    summary: {
      value:
        'Kazakh Upland Steppe comprises three separate areas of low mountains and hills — the Kokchetau Uplands, the Aktau, Ortau, and Karkaraly massifs, and the Chingiztau range — with similar relief but differing climates. A complex mosaic of pine forest, shallow lakes, steppe meadow, and rocky scree supports endemic trees, plants, argali, goitered gazelle, and the endemic Kazakh pika.',
      sourceIds: ['one-earth-eco-733'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Kokchetau Uplands in the north',
        'Aktau, Ortau, and Karkaraly massifs',
        'Chingiztau mountain area to the east',
        'wind-eroded rock outcroppings',
      ],
      sourceIds: ['one-earth-eco-733'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Continental with long cold winters; in Kokshetau average monthly temperatures are -16.1–19.7°C with 315 mm annual precipitation, while the south averages -14.8–20.9°C with 295 mm spread more evenly.',
        annualPrecipitationMm: { min: 295, max: 315 },
      },
      sourceIds: ['one-earth-eco-733'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Scots pine forest on granitic uplands',
        'Lessing feathergrass and steppe fescue steppe',
        'drought-tolerant Artemisia and forage kochia scrub',
        'endemic Berberis karkaralensis and Betula kirghisorum',
        'ephemeral tulips and madwort blooms',
      ],
      sourceIds: ['one-earth-eco-733'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'rocky-terrain small-mammal and predator dynamics',
        'constant wind erosion of rock formations',
        'nomadic pastoralism legacy',
        'endemism across isolated upland blocks',
      ],
      sourceIds: ['one-earth-eco-733'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 40% with a protection level of 1. Kokshetau and Karkaraly National Parks protect meadow steppe, forb-feathergrass steppe, and granite pine forest, but other upland areas lack effective management. Gold-mining pollution, human-induced fire, overgrazing, and poaching of birds of prey and mammals remain serious threats.',
      sourceIds: ['one-earth-eco-733'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:argali',
      'species:goitered-gazelle',
      'species:steppe-eagle',
      'species:kazakh-pika',
      'species:marbled-polecat',
    ],
    countryIds: ['KZ'],
    sources: ['one-earth-eco-733'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:628',
    summary: {
      value:
        'Rapa Nui and Sala Y Gómez Subtropical Broadleaf Forests covers Easter Island and the tiny, tide-sensitive reef of Sala y Gómez 415 km to the northeast. Once forested with tall Jubaea palm, toromiro, and Triumfetta, the most isolated inhabited island in the world is today dominated by grass savanna, with a small native flora surviving mainly in steep crater refuges.',
      sourceIds: ['one-earth-eco-628'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'extremely isolated volcanic island',
        'steep Rano Raraku crater slopes',
        'grass savanna lowlands',
        'Sala y Gómez lying reef islet',
        'largely transformed by human settlement',
      ],
      sourceIds: ['one-earth-eco-628'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical rainforest / humid subtropical, with minimum and maximum temperatures of about 15°C in July and 28°C in February, and annual average precipitation around 1,118 mm heaviest in May.',
        annualPrecipitationMm: { min: 900, max: 1300 },
      },
      sourceIds: ['one-earth-eco-628'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'tall Jubaea palm forest (historical)',
        'toromiro and hau hau forest remnants',
        'grass savanna (current cover)',
        'endemic ferns in crater refuges',
        'four salt-tolerant plant species on Sala y Gómez',
      ],
      sourceIds: ['one-earth-eco-628'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'extreme oceanic isolation limiting colonisation',
        'refuge survival in crater slopes and caves',
        'seabird nesting and marine nutrient cycling',
        'grazing, fire, and invasive-species pressure',
      ],
      sourceIds: ['one-earth-eco-628'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 100% with a protection level of 3. Heavy grazing, invasive plants and animals, and frequent fires continue to diminish the last native species, and Rapa Nui National Park (68 km²) has inadequate management. Priorities are restoring toromiro on inaccessible slopes, protecting cave invertebrate refuges, and eradicating rats and goats from offshore islets.',
      sourceIds: ['one-earth-eco-628'],
      derivation: 'authored-summary',
    },
    countryIds: ['CL'],
    sources: ['one-earth-eco-628'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:623',
    summary: {
      value:
        "Hawai'I Tropical Moist Forests covers the windward lowlands and montane slopes of the larger Hawaiian islands, with mixed mesic forests, rain forests, wet shrublands, and montane bogs. Long oceanic isolation produced dazzling adaptive radiation in honeycreepers, lobeliads, tree snails, and fruit flies that are found nowhere else on Earth.",
      sourceIds: ['one-earth-eco-623'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'windward lowland and montane slopes',
        'mixed mesic forest (750–1,250 m)',
        'montane rain forest (1,250–1,700 m)',
        'wet shrublands and montane bogs',
        'volcanic slopes of the large islands',
      ],
      sourceIds: ['one-earth-eco-623'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        "ohi'a lehua (Metrosideros polymorpha) canopy",
        'koa (Acacia koa) mixed mesic forest',
        'loulu fan palms (Pritchardia spp.)',
        'tree ferns (Cibotium spp.) and epiphytes',
        'montane bogs of sedges, ferns, and mosses',
      ],
      sourceIds: ['one-earth-eco-623'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'adaptive radiation of honeycreepers from a single finch ancestor',
        'evolution in the absence of native ants',
        'pollination and seed dispersal by endemic birds',
        'bog formation on montane plateaus and depressions',
      ],
      sourceIds: ['one-earth-eco-623'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        "One Earth reports a conservation target of 78% with a protection level of 2. Lowland and foothill moist forest has been largely eliminated, and remaining montane blocks suffer from feral pigs, goats, cats, invasive weeds and ants, and avian malaria. Hawai'i Volcanoes and Haleakala National Parks protect key stands; priority actions target invasive control and quarantine against the little fire ant (Wasmannia auropunctata).",
      sourceIds: ['one-earth-eco-623'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:i-iwi',
      'species:ohia-lehua',
      'species:koa',
      'species:loulu-palm',
    ],
    countryIds: ['US'],
    sources: ['one-earth-eco-623'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:636',
    summary: {
      value:
        "Hawai'I Tropical Dry Forests occupy the rain-shadowed leeward foothills and lowlands of the main Hawaiian islands, where pronounced dry seasons shaped shorter-statured, drought-adapted woodland. Rich in endemic tree species and beset by a long history of clearing and fire, they are among the most endangered ecoregions on the planet.",
      sourceIds: ['one-earth-eco-636'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'leeward foothills and lowlands',
        'dry forest on volcanic slopes',
        'shrubland, grassland, and transition forest',
        'lowland Pritchardia palm forest',
        'offshore islets',
      ],
      sourceIds: ['one-earth-eco-636'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical dry with a pronounced dry season from April to October and a wet season delivering 25–125 cm of rain, with rain-shadowed leeward coasts among the driest parts of the archipelago.',
        annualPrecipitationMm: { min: 250, max: 1250 },
      },
      sourceIds: ['one-earth-eco-636'],
      derivation: 'calculated',
    },
    vegetation: {
      value: [
        '109 tree species across 29 families, 90% endemic',
        'mamane (Sophora) and waxy-leaved dry woodland',
        'sandalwood (Santalum paniculatum)',
        'Pritchardia palm and Gouania formations',
        'shrubland, grassland, and transition forest',
      ],
      sourceIds: ['one-earth-eco-636'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'rain-shadow aridity reshaping vegetation',
        'endemic insect–host plant specialisation',
        'single-island endemism in tree flora',
        'fire and grazing suppression of regrowth',
      ],
      sourceIds: ['one-earth-eco-636'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "One Earth reports a conservation target of 40% with a protection level of 4. Only 5–8% of natural dry forest habitat remains, less than 2% per major island, and 45% of dry-forest plant taxa are threatened. Burning, clearing, feral livestock, rats, and invasive grasses such as fountain grass block regeneration; reserves include Waimea Canyon and Koke'e State Park.",
      sourceIds: ['one-earth-eco-636'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:palila',
      'species:kokia-cookei',
      'species:blackburns-sphinx-moth',
      'species:hawaiian-hoary-bat',
    ],
    countryIds: ['US'],
    sources: ['one-earth-eco-636'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:639',
    summary: {
      value:
        "Hawai'i Tropical High Shrublands wrap the cold, dry summits and subalpine slopes of the tallest Hawaiian volcanoes, most famously Mount Haleakala and Mauna Kea. These alpine deserts and sparse shrublands support hardy drought- and cold-adapted plants, headlined by the iconic Hawaiian silversword, along with the native nene goose and palila.",
      sourceIds: ['one-earth-eco-639'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'alpine desert above 3,000 m',
        'summit craters to 4,207 m on Mauna Kea',
        'subalpine shrublands from 2,000–3,000 m',
        'volcanic cinder and lava fields',
        'subalpine tussock grasslands',
      ],
      sourceIds: ['one-earth-eco-639'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Alpine to subalpine with dry, cold conditions and strong diurnal temperature swings; frosts and high solar radiation govern a landscape that receives little precipitation above the inversion layer.',
      },
      sourceIds: ['one-earth-eco-639'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Hawaiian silversword rosettes (Argyroxiphium)',
        'Dubautia and Leptecophylla tameiameiae shrubland',
        'Deschampsia and Eragrostis tussock grassland',
        'Vaccinium reticulatum, Chenopodium, and Santalum subalpine shrubs',
        'mosses, lichens, and Pellaea ternifolia ferns',
      ],
      sourceIds: ['one-earth-eco-639'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'adaptive radiation of a single tarweed ancestor into 30 related species',
        'alpine cold and drought constraints on growth',
        'endemic insect prey support for montane birds',
        'sensitivity of silverswords to disturbance',
      ],
      sourceIds: ['one-earth-eco-639'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 100% with a protection level of 4. Grazing and trampling by cattle, goats, mouflon, and sheep, along with wildfires, off-road vehicles, and poaching of silverswords, threaten fragile alpine habitat. Priorities include fencing endangered Mauna Kea silversword populations and controlling feral livestock with the subalpine and alpine zones.',
      sourceIds: ['one-earth-eco-639'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: ['species:hawaiian-silversword', 'species:nene', 'species:palila'],
    countryIds: ['US'],
    sources: ['one-earth-eco-639'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:640',
    summary: {
      value:
        "Hawai'I Tropical Low Shrublands cover the driest lowland slopes of the higher Hawaiian islands, carrying a distinctive flora that includes the 'ohai, Ma'o hau hele hibiscus, and beach-adapted sandalwood. Coastal strand and basalt-outcrop shrublands hold up to 90% endemic plants but have lost most of their natural cover to clearing and fire.",
      sourceIds: ['one-earth-eco-640'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'lowest leeward slopes of high islands',
        "islands of Lana'i, Kaho'olawe, and Ni'ihau",
        'coastal strand and basalt outcrops',
        'dry lowland shrubland and grassland',
        'nearshore islets',
      ],
      sourceIds: ['one-earth-eco-640'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical dry lowland, the driest lowland habitat in the archipelago, with low rainfall (500–1,500 mm) concentrated in the winter months on slopes sheltered from the moist trade winds.',
        annualPrecipitationMm: { min: 500, max: 1500 },
      },
      sourceIds: ['one-earth-eco-640'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        "'ohai (Sesbania tomentosa) and Ma'o hau hele (Hibiscus brackenridgei)",
        'coastal strand flora adapted to far-flung dispersal',
        'Dodonaea, Scaevola, Myoporum, and Sida shrubland',
        "'iliahi (Santalum ellipticum) beach sandalwood",
        'small-flowered herbs favoured by native bees',
      ],
      sourceIds: ['one-earth-eco-640'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'winter-rain flowering and native bee pollination',
        'long-distance seed dispersal across the Pacific',
        'coastal nesting habitat for seabirds',
        'sensitivity of strand to fire and off-road vehicles',
      ],
      sourceIds: ['one-earth-eco-640'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 27% with a protection level of 4. Less than 2% of natural habitat remains, much of it under threat from fire, development, off-road vehicles, feral goats and deer, and invasive plants such as Leucaena, Guinea grass, and mesquite. Restoration at Kaena Point State Park has regenerated shrubland and returned nesting Laysan albatross.',
      sourceIds: ['one-earth-eco-640'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: ['species:ohai', 'species:mao-hau-hele', 'species:laysan-albatross'],
    countryIds: ['US'],
    sources: ['one-earth-eco-640'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:641',
    summary: {
      value:
        "Northwest Hawai'i Scrub covers the remote, small, and low islets of the Northwestern Hawaiian Islands, a chain stretching some 1,600 km from rocky Nihoa to low Kure Atoll. A handful of hardy terrestrial species, many endemic, share these islands with immense seabird colonies, monk seals, and green sea turtles that bring nutrients ashore and fuel simple food chains.",
      sourceIds: ['one-earth-eco-641'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'nine major low islands and atolls',
        'rocky Nihoa (highest island) to Kure Atoll',
        'low shrub banks and salt-tolerant cover',
        'lagoon margins and reef flats',
        'offshore sand and coral islets',
      ],
      sourceIds: ['one-earth-eco-641'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical oceanic with strong wind, salt spray, and low rainfall; conditions are challenging for terrestrial life on these small, low, drought-prone islands and atolls.',
      },
      sourceIds: ['one-earth-eco-641'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Portulaca lutea and low shrub banks',
        'salt-tolerant goosefoot and Boerhavia repens cover',
        'endemic Pritchardia remota palm on Nihoa',
        'grasses and halophytic strand plants',
        'sparse vegetation on the lowest atolls',
      ],
      sourceIds: ['one-earth-eco-641'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'seabird nutrient (guano) input supporting food chains',
        'extreme isolation generating endemic plants and invertebrates',
        'marine megafauna use of shores for resting and breeding',
        'vulnerability to invasive mammals, plants, and weather extremes',
      ],
      sourceIds: ['one-earth-eco-641'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 100% with a protection level of 1. Introduced rats, goats, rabbits, and grasshoppers have damaged island ecosystems, while seabirds face longline fisheries, ocean plastics, and rising seas. Priorities include eradicating non-native mammals on nesting islands, restoring Pritchardia palm forest on Nihoa, and recovering threatened endemic birds such as the Laysan finch and duck.',
      sourceIds: ['one-earth-eco-641'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:laysan-finch',
      'species:laysan-duck',
      'species:nihoa-millerbird',
      'species:pritchardia-remota',
      'species:hawaiian-monk-seal',
    ],
    countryIds: ['US'],
    sources: ['one-earth-eco-641'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:625',
    summary: {
      value:
        'Marquesas Tropical Moist Forests cover the twelve rugged volcanic high islands of the Marquesas in the far northeastern Pacific. Extreme oceanic isolation drove pronounced endemism in plants, land snails, and birds, with lowland, montane, and cloud forest zones giving way to wind-swept summit heathlands across a landscape of knife-edged ridges and deep gorges.',
      sourceIds: ['one-earth-eco-625'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'twelve volcanic high islands with rugged topography',
        'knife-edged ridges and deeply dissected gorges',
        'cliffs plunging steeply from mountaintops to sea',
        'lowland, montane, and cloud forest zones',
        'wind-swept summit heathlands',
      ],
      sourceIds: ['one-earth-eco-625'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical oceanic with strong wet-season rains and persistent southeast trade winds; orographic moisture supports lush windward forests while sheltered valleys experience pronounced dry periods.',
      },
      sourceIds: ['one-earth-eco-625'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland Pisonia grandis, Thespesia, Calophyllum, and Terminalia forest',
        'drier forest of Hibiscus, Pandanus, Thespesia, and Cordia on lower slopes',
        'montane Hibiscus tiliaceus, Pandanus tectorius, and Weinmannia forest',
        'cloud forest of Cheirodendron, Ilex anomala, and Freycinetia',
        'summit heathland and the endemic palm Pelagodoxa henryana',
      ],
      sourceIds: ['one-earth-eco-625'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'adaptive radiation of Asplenium, Psychotria, Bidens, and Cyrtandra lineages',
        'evolution of many endemic land snails and fruit flies',
        'seabird breeding colonies and nutrient inputs',
        'vulnerability to introduced predators, herbivores, and fire',
      ],
      sourceIds: ['one-earth-eco-625'],
      derivation: 'source-value',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 83% with a protection level of 0. With 320 native vascular plant species and 42% endemism, the islands face lowland clearing, goat and rat damage, fire, logging, and invasive mynahs and owls. Priorities are protecting upper-elevation forests, eradicating rats, cats, and goats on smaller islands, and fencing endangered plant populations.',
      sourceIds: ['one-earth-eco-625'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:marquesan-kingfisher',
      'species:ultramarine-lory',
      'species:nuku-hiva-pigeon',
      'species:pelagodoxa-henryana',
    ],
    countryIds: ['PF'],
    sources: ['one-earth-eco-625'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:620',
    summary: {
      value:
        'Cook Islands Tropical Moist Forests cover the permanently inhabited southern islands of the Cooks, with the volcanic highland of Rarotonga rising to cloud forest among coral atolls and uplifted makatea islets. The relative isolation of these islands preserved a distinctive lowland-to-cloud forest flora and several range-restricted endemic birds on only a handful of small islands.',
      sourceIds: ['one-earth-eco-620'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the volcanic high island of Rarotonga',
        'low-lying coral atolls and uplifted limestone islets',
        'lowland forests, montane slopes, and cloud forest',
        'surrounding lagoons and reefs',
      ],
      sourceIds: ['one-earth-eco-620'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime with warm, humid conditions and orographic rainfall on the volcanic peaks; forests grade from lowland through montane up to cloud forest on exposed summits.',
      },
      sourceIds: ['one-earth-eco-620'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland broadleaf forest of Fagraea, Glochidion, and Pisonia',
        'montane forest of Metrosideros, Weinmannia, Ascarina, and Elaeocarpus',
        'cloud forest of Weinmannia and Metrosideros monticola',
        'scattered endemic genera on the volcanic peaks',
      ],
      sourceIds: ['one-earth-eco-620'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'extreme isolation supporting ~130 native plant species',
        'nine range-restricted resident land bird species, six of them endemic',
        'single-island endemism concentrated on Rarotonga',
        'vulnerability to invasive ants, rats, cats, and mynas',
      ],
      sourceIds: ['one-earth-eco-620'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 58% with a protection level of 6. The aggressive African ant Pheidole megacephala has driven 11 of 13 endemic snail species extinct on Rarotonga, while the Rarotonga monarch and Atiu swiftlet are critically endangered. Priority actions protect forest in the Takitumu Conservation Area and on the slopes of Te Manga.',
      sourceIds: ['one-earth-eco-620'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:blue-lorikeet',
      'species:kuhls-lorikeet',
      'species:rarotonga-monarch',
      'species:atiu-swiftlet',
      'species:mangaia-kingfisher',
    ],
    countryIds: ['CK'],
    sources: ['one-earth-eco-620'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:630',
    summary: {
      value:
        'Society Islands Tropical Moist Forests cover the high volcanic islands of Tahtian archipelago, including Tahiti, Moorea, Raiatea, and Bora-Bora. Their great age allowed the evolution of hundreds of endemic species, with lowland, montane, and cloud forests supporting a vascular flora of 623 native species, 273 of them endemic, and the spectacular Partula land snail radiation.',
      sourceIds: ['one-earth-eco-630'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a chain of high volcanic islands',
        'coral islands and barrier-rimmed lagoons',
        'lowland valleys and scattered low mountain slopes',
        'montane rain forest above 300 m and summit cloud forest',
      ],
      sourceIds: ['one-earth-eco-630'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime with orographic rainfall; lowland rainforest gives way to montane forest above 300 m and mossy cloud forest on the highest peaks, with dry conditions on leeward slopes.',
      },
      sourceIds: ['one-earth-eco-630'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland forest of Inocarpus fagifer, bamboo, Cananga, Rhus, and Pisonia',
        'montane forest of Alphitonia, Hernandia, Metrosideros, and Fagraea',
        'cloud forest dominated by Weinmannia and Alstonia costata',
        'the huge tree fern Angiopteris evecta and cliff Metrosideros',
      ],
      sourceIds: ['one-earth-eco-630'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'radiation of 53 Partula land snail species from a single colonisation',
        'high levels of endemism in a 623-species vascular flora',
        'twenty range-restricted land birds, including the Tahiti monarch',
        'vulnerability to rats, ants, Miconia, and red-vented bulbuls',
      ],
      sourceIds: ['one-earth-eco-630'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 100% with a protection level of 0. Little native habitat remains below 500 m after clearing and burning, while feral cats, rats, little fire ants, and Miconia calvescens severely affect native communities. Priorities are biological control of Miconia, intensive invasive control around the critically endangered Tahiti monarch, and expanding protected areas.',
      sourceIds: ['one-earth-eco-630'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:tahiti-monarch',
      'species:society-islands-pigeon',
      'species:tahiti-swiftlet',
    ],
    countryIds: ['PF'],
    sources: ['one-earth-eco-630'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:632',
    summary: {
      value:
        'Tuamotu Tropical Moist Forests span the 76 atolls and islands of the Tuamotu Archipelago, extending 1,800 km to the Gambier Islands and 1,000 km further to Henderson and Pitcairn. Mixed broadleaf strand forests on the atolls give way to dense Pisonia- and Pandanus-dominated makatea forest on uplifted limestone islands and montane forest on the highest volcanic peaks, providing refuge for migratory seabirds and endemic land birds.',
      sourceIds: ['one-earth-eco-632'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        '76 atolls and islands of the Tuamotus',
        'uplifted limestone (makatea) islands',
        'the Gambier and Pitcairn island groups',
        'isolated reef islets such as Henderson and Oeno',
        'eroded volcanic hillocks and upraised limestone shelves',
      ],
      sourceIds: ['one-earth-eco-632'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical atoll climate with limited rainfall and severe drought stress on low coral islets, while the higher Gambier and Pitcairn islands capture more orographic moisture.',
      },
      sourceIds: ['one-earth-eco-632'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'mixed broadleaf strand forest of Suriana, Pemphis, Scaevola, and Pandanus',
        'Pisonia grandis and Guettarda dominated vegetation',
        'dense tall makatea forest with Pisonia, Pandanus, and Ficus prolixa',
        'Henderson plateau forest with Thespesia and endemic shrubs',
        'montane forest of Homalium moua and Metrosideros collina',
      ],
      sourceIds: ['one-earth-eco-632'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'extreme isolation and survival on nutrient-poor atolls',
        'high endemism on Henderson and Pitcairn (about 14% of vascular plants)',
        'major seabird breeding grounds in the Tuamotus',
        'vulnerability to invasive rats, cats, goats, and rising sea levels',
      ],
      sourceIds: ['one-earth-eco-632'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 6% with a protection level of 7. Henderson Island remains among the most intact makatea islands in the world, with the Polynesian rat its only introduced vertebrate, but black rats and cats have devastated birds across the rest of the Tuamotus. Priorities include protecting the last native vegetation in the Gambiers, effective management of the Pitcairn group, and invasive control on key atolls.',
      sourceIds: ['one-earth-eco-632'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:mangareva-kingfisher',
      'species:niau-kingfisher',
      'species:henderson-lory',
      'species:henderson-fruit-dove',
      'species:tuamotu-sandpiper',
    ],
    countryIds: ['PF', 'PN'],
    sources: ['one-earth-eco-632'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:633',
    summary: {
      value:
        "Tubuai Tropical Moist Forests cover the Austral Islands south of Tahiti, including Tubuai, Rimatara, Rurutu, and Raivavae, along with the isolated island of Rapa and its tiny mossy cloud forest. Eroded volcanic peaks ringed by uplifted limestone host a montane flora with remarkable affinities to New Zealand and some of the highest single-island endemism in the Pacific, including the colourful Kuhl's lorikeet.",
      sourceIds: ['one-earth-eco-633'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'eroded volcanic peaks of the Austral Islands',
        'uplifted limestone shelves surrounding the high islands',
        'the island of Rapa with its small summit cloud forest',
        'the uninhabited Ilots de Bass and Maria Atoll',
        'lowland and montane forest zones',
      ],
      sourceIds: ['one-earth-eco-633'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime with orographic rainfall; mossy cloud forest occurs only from about 550 m to 650 m on Mt. Perau on Rapa, while the lowlands experience distinct wet and dry periods.',
      },
      sourceIds: ['one-earth-eco-633'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland forest of Tournefortia, Barringtonia, Pandanus, and Pisonia',
        'enriched lowland cover with Hibiscus, guava, and Dicranopteris fernlands',
        'montane rain forest on slopes and peaks',
        'cloud forest of Metrosideros collina, Weinmannia, and Corokia',
        'highly endemic Rapa cloud forest with 57% endemism',
      ],
      sourceIds: ['one-earth-eco-633'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'single-island endemism with several endemic genera on Rapa',
        'pronounced radiation of weevils and land snails',
        'New Zealand and western Pacific floristic affinities',
        'vulnerability to invasive rats, cats, and livestock',
      ],
      sourceIds: ['one-earth-eco-633'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "One Earth reports a conservation target of 0 with protection level not available. Lowland vegetation is largely altered by settlement, cultivation, burning, and livestock, but montane and cloud forest fragments persist and Maria Atoll remains largely intact. Priorities include fencing and invasive control on Tubuai and Rurutu summits, and controlling rats and cats on Rimatara to protect the Kuhl's lorikeet.",
      sourceIds: ['one-earth-eco-633'],
      derivation: 'authored-summary',
    },
    countryIds: ['PF'],
    sources: ['one-earth-eco-633'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:619',
    summary: {
      value:
        'Central Polynesian Tropical Moist Forests span the Northern and Southern Line Islands, the Northern Cook Islands, and isolated Johnston, all classic coral atolls or raised reef platforms lying mostly below four metres above sea level. These scattered low islands host some of the largest seabird nesting colonies in the world and the endemic Bokikokiko reed warbler, with vegetation ranging from Pisonia grandis forest to drought-tolerant scrub.',
      sourceIds: ['one-earth-eco-619'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'classic atolls with open or closed lagoons',
        'raised reef platforms of the Line Islands',
        'Northern Cook Islands and isolated Johnston Atoll',
        'land mostly below four metres above sea level',
        'inland lagoons, limestone hardpans, dunes, and saline scrublands',
      ],
      sourceIds: ['one-earth-eco-619'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime ranging from continually wet near the equator to frequent drought within the trade-wind belt, with rainfall strongly varying by latitude and dry low islets enduring heat and salt stress.',
      },
      sourceIds: ['one-earth-eco-619'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Pisonia grandis forest with Calophyllum, Tournefortia, and Pandanus',
        'understory of Morinda, Scaevola, Suriana, and Pemphis acidula',
        'Tournefortia argentea woodland and littoral forest',
        'Scaevola and Suriana maritima scrublands inland',
        'Lepturus repens grassland and drought-tolerant herbland on dry islands',
      ],
      sourceIds: ['one-earth-eco-619'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        "some of the world's largest seabird nesting colonies",
        'low plant richness with few endemics on isolated atolls',
        'prehistoric translocation of lorikeets among islands',
        'vulnerability to invasive rats, cats, and yellow crazy ants',
      ],
      sourceIds: ['one-earth-eco-619'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "One Earth reports a conservation target of 15% with a protection level of 10. Settlement, copra plantations, guano mining, nuclear testing, and military infrastructure have disturbed much vegetation, and rats and cats have extirpated the Bokikokiko from Tabueran. Priorities include eradicating invasive species on key atolls, preventing little red fire ants, and strengthening protection of Caroline's forests.",
      sourceIds: ['one-earth-eco-619'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bokikokiko-reed-warbler',
      'species:kuhls-lorikeet',
      'species:coconut-crab',
      'species:red-tailed-tropicbird',
    ],
    countryIds: ['KI'],
    sources: ['one-earth-eco-619'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:629',
    summary: {
      value:
        "Samoan Tropical Moist Forests cover the fourteen volcanic islands of Samoa, 600 km east of Fiji, with the high islands of Savai'i and 'Upolu holding the vast majority of land. Lowland, montane, and cloud forests rising to 1,858 m support some of the Pacific's most unusual birds, including the critically endangered manumea pigeon and the unearthly-singing ma'oma'o honeyeater, alongside 28% plant endemism.",
      sourceIds: ['one-earth-eco-629'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a chain of fourteen volcanic islands',
        "the high islands of Savai'i and 'Upolu",
        'lowland, montane, and cloud forest zones',
        'volcanic summits reaching 1,858 m',
      ],
      sourceIds: ['one-earth-eco-629'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime with heavy orographic rainfall; dense lowland and montane forests give way to elfin cloud forest above 650 m on the highest volcanic peaks.',
      },
      sourceIds: ['one-earth-eco-629'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland rain forest of Diospyros, Calophyllum, Dysoxylum, and Pometia',
        'montane forest of Dysoxylum, Syzygium, Weinmannia, and Canarium',
        'cloud forest with Reynoldsia, Weinmannia, and Cyathea tree ferns',
        'many single-island endemic and orchid species',
      ],
      sourceIds: ['one-earth-eco-629'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        '28% plant endemism across 536 flowering species',
        '84% of 37 land birds found nowhere else',
        'day-flying behaviour of the Samoan flying fox on predator-poor islands',
        'vulnerability to logging, clearing, and introduced predators',
      ],
      sourceIds: ['one-earth-eco-629'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "One Earth reports a conservation target of 52% with a protection level of 2. Over 80% of lowland rain forest has been lost in Western Samoa and American Samoa, and rats, cats, cane toads, mynahs, and invasive plants threaten wildlife. Priorities include securing the large central Savai'i forest block, intensive management of manumea and ma'oma'o, and expanding protected areas across key watersheds.",
      sourceIds: ['one-earth-eco-629'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:many-colored-fruit-dove',
      'species:manumea',
      'species:maomao-honeyeater',
      'species:samoan-flying-fox',
    ],
    countryIds: ['AS', 'WS'],
    sources: ['one-earth-eco-629'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:634',
    summary: {
      value:
        'Western Polynesian Tropical Moist Forests gather the scattered low atolls of the Phoenix Islands, Tokelau, and Tuvalu, together with the isolated Howland and Baker islands. Millions of seabirds nest and rest among plant communities adapted to drought, storms, and salt, while raised makatea reefs and verdant weather-side atolls support simple groves of Tournefortia, Pandanus, and Pisonia.',
      sourceIds: ['one-earth-eco-634'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'three clusters of atolls and makatea islands',
        'eight atolls in the Phoenix Islands',
        'four atolls in Tokelau and nine in Tuvalu',
        'the isolated Howland and Baker islands',
        'low reefs rarely rising far above sea level',
      ],
      sourceIds: ['one-earth-eco-634'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime with regular rainfall on Tuvalu and Tokelau but frequent drought and storm stress on the eastern Phoenix Islands and on Howland and Baker, shaping sparse drought-tolerant vegetation.',
      },
      sourceIds: ['one-earth-eco-634'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'short scrub of Boerhavia, Portulaca, and Sesuvium on dry atolls',
        'Lepturus repens and L. pilgerianus grassland patches',
        'inland groves of Tournefortia, Pandanus, and Pisonia on wetter atolls',
        'gecko- and skink-rich green atolls in the south',
      ],
      sourceIds: ['one-earth-eco-634'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'millions of nesting and resting seabirds feeding rich guano',
        'salt-, drought-, and storm-tolerant plant communities',
        'massive coconut crabs on undisturbed islands',
        'vulnerability to invasive rats, cats, and crazy ants',
      ],
      sourceIds: ['one-earth-eco-634'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "One Earth reports a conservation target of 64% with a protection level of 10. Kiribati's Phoenix Islands Protected Area is among the largest in the world, and rats and cats have been eradicated from Howland and Baker. Priorities include eradicating invasive rats, cats, and rabbits from seabird islands, preventing little red fire ants, and restoring motus in Tuvalu and Tokelau.",
      sourceIds: ['one-earth-eco-634'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:pacific-imperial-pigeon',
      'species:coconut-crab',
      'species:long-tailed-cuckoo',
    ],
    countryIds: ['KI'],
    sources: ['one-earth-eco-634'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:622',
    summary: {
      value:
        'Fiji Tropical Moist Forests cover the tall, wet, dense rainforests of the Fijian archipelago, including Fiji, Rotuma, and Wallis and Futuna, with lowland, montane, and cloud forest zones. A blend of primitive Gondwanan lineages such as Degeneria and Agathis with classic oceanic-island radiations supports over half-endemic vascular plants and brilliant endemic pigeons, parrots, honeyeaters, tree frogs, and iguanas.',
      sourceIds: ['one-earth-eco-622'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'over 300 islands of the Fijian archipelago',
        'the large high islands of Viti Levu and Vanua Levu',
        'Rotuma and the Wallis and Futuna islands',
        'lowland, montane, and cloud forest zones',
        'mountain summits reaching 1,323 m',
      ],
      sourceIds: ['one-earth-eco-622'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime with heavy orographic rainfall; dense lowland rain forest rises to montane forest and scattered cloud forest above 600–900 m on the highest ridges and peaks.',
      },
      sourceIds: ['one-earth-eco-622'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland forest with Degeneria vitiensis, Pandanus, and Agathis macrophylla',
        'montane forest of Agathis, Podocarpus, Calophyllum, and Metrosideros',
        'cloud forest of tree ferns, Dysoxylum, and Freycinetia climbers',
        '10 gymnosperm species and 24 native palm species, all unique to Fiji',
      ],
      sourceIds: ['one-earth-eco-622'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'mixing of primitive Gondwanan relicts with oceanic-island radiations',
        'high endemism with many single-island and single-site species',
        'evolutionary radiation shaped by isolation, size, and complex topography',
        'vulnerability to invasive rats, cats, mynahs, and mongoose',
      ],
      sourceIds: ['one-earth-eco-622'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 84% with a protection level of 1. About 40% of the original moist forest remains, much of it in rugged terrain, but logging and plantations degrade habitats while invasive mongoose, rats, and cats impact native species. Priorities include community reserves in upper watersheds, no-go zones for logging roads, and keeping mongoose off Taveuni.',
      sourceIds: ['one-earth-eco-622'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:taveuni-orange-dove',
      'species:fiji-golden-dove',
      'species:masked-shining-parrot',
      'species:taveuni-silktail',
    ],
    countryIds: ['FJ', 'WF'],
    sources: ['one-earth-eco-622'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:624',
    summary: {
      value:
        "Kermadec Islands Subtropical Moist Forests cover the remote chain of 13 small islands about 1,000 km northeast of New Zealand's North Cape. Once home to millions of seabirds with no native land predators, these volcanic islets are dominated by red-flowered Metrosideros forest and act as a stepping stone for both New Zealand and tropical Pacific plants and animals, supporting a distinctive endemic flora and high seabird richness.",
      sourceIds: ['one-earth-eco-624'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a chain of 13 small volcanic islands',
        'Raoul and Macauley comprising most of the archipelago',
        'lowland forest and cloudier mossy montane forest',
        'rugged volcanic terrain rising just over 500 m',
      ],
      sourceIds: ['one-earth-eco-624'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Subtropical oceanic with mild, windy, and humid conditions; montane zones become cloudier and mossy while drier slopes support more drought-tolerant Metrosideros villosa forest.',
      },
      sourceIds: ['one-earth-eco-624'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'forest dominated by red-flowered Metrosideros kermadecensis',
        'taller associates of Ascarina, Melicytus, and Nothopanax',
        'tree ferns Cyathea milnei and C. kermadecensis',
        'mossy montane forest with the endemic Nikau palm',
        '117 native vascular plants with 23 endemics',
      ],
      sourceIds: ['one-earth-eco-624'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'an island refuge for migrating Pacific and New Zealand species',
        'major breeding colonies of petrels and shearwaters',
        'an endemism-rich flora with no native land mammals or reptiles',
        'recovery of vegetation and seabirds after invasive eradications',
      ],
      sourceIds: ['one-earth-eco-624'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 100% with a protection level of 11. Gazetted a Flora and Fauna Reserve in 1937 and surrounded by the 620,000 km2 Kermadec Ocean Sanctuary, the islands have seen goats, pigs, cats, and rats eradicated with marked recovery of seabirds and forest. Priorities include continued removal of residual invaders and invasive plants and maintaining ex-situ populations of rare plants.',
      sourceIds: ['one-earth-eco-624'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:kermadec-pohutukawa',
      'species:kermadec-red-crowned-parakeet',
      'species:poor-knights-lily',
    ],
    countryIds: ['NZ'],
    sources: ['one-earth-eco-624'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:631',
    summary: {
      value:
        "Tongan Tropical Moist Forests cover the volcanic Tongan islands, the ancient fragment of 'Eua, and the makatea outlier of Niue, supporting a classic oceanic-island biota of pigeons, honeyeaters, whistlers, geckos, and bats. Though only about 3% of the flora is endemic, the islands once held a giant iguana and 23 larger species of birds, and today harbour the endemic Tongan megapode and the black-and-yellow Tongan whistler.",
      sourceIds: ['one-earth-eco-631'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic islands of the Tongan archipelago',
        "the ancient Gondwana-derived island of 'Eua",
        'the far-flung makatea island of Niue',
        'uninhabited volcanic islands such as Late, Kao, and Tofua',
        'native forest on steep terrain and a few undisturbed islets',
      ],
      sourceIds: ['one-earth-eco-631'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime with seasonal rainfall and occasional drought, supporting tropical moist forest across volcanic slopes while makatea karst and rainshadow areas remain drier.',
      },
      sourceIds: ['one-earth-eco-631'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'moist forest of Diospyros, Rhus, Alphitonia, and Calophyllum',
        'forest with Pisonia grandis, Ficus, and Maniltoa grandiflora',
        'dense staghorn fern and Psychotria in the understorey',
        '419 angiosperm and fern species with about 3% endemism',
      ],
      sourceIds: ['one-earth-eco-631'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'a classic oceanic-island biota of highly dispersive taxa',
        'the Tongan megapode as the last survivor of its Polynesian lineage',
        'raft-dispersal of the banded iguana from the Americas',
        'vulnerability to hunting and invasive rats, cats, and pigs',
      ],
      sourceIds: ['one-earth-eco-631'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "One Earth reports a conservation target of 27% with a protection level of 6. Most native habitat across Tonga's 170 islands has been cleared over millennia, but Late, Kao, Tofua, and parts of 'Eua retain sizeable forest. Priorities include community-based protection of these key islands, expanding rat eradication, and reducing predation and poaching of the Tongan megapode.",
      sourceIds: ['one-earth-eco-631'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:tongan-whistler',
      'species:tongan-megapode',
      'species:fiji-banded-iguana',
    ],
    countryIds: ['NU', 'TO'],
    sources: ['one-earth-eco-631'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:635',
    summary: {
      value:
        'Fiji Tropical Dry Forests occur in the rain-shadow lowlands of Viti Levu and Vanua Levu and on smaller islands of the Yasawa and Lau groups, where long dry seasons create shorter, gnarled, vine-tangled forests. These are among the most endangered forests in the Pacific, dominated by Dacrydium and Fagraea and harbouring primitive cycads, endemic sandalwood, and the flagship Fiji crested iguana.',
      sourceIds: ['one-earth-eco-635'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'dry leeward lowlands of Viti Levu and Vanua Levu',
        'dry forests on islands of the Yasawa, Lau, and Mamanuca groups',
        'gnarled, shorter-canopied forest thick with vines',
        'remnant patches amid talasiga savannas and farmland',
      ],
      sourceIds: ['one-earth-eco-635'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical with long dry seasons created by mountain rain shadows, producing forest markedly drier, shorter, and more open than adjacent moist forests.',
      },
      sourceIds: ['one-earth-eco-635'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'dry forest dominated by Dacrydium nidulum and Fagraea gracilepes',
        'the driest forests with Garuga floribunda and Gyrocarpus americanus',
        'primitive cycads and Podocarpus and Gymnostoma gymnosperms',
        'endemic Santalum yasi sandalwood in the driest habitats',
        '310 plant species with 36% endemic to dry forest itself',
      ],
      sourceIds: ['one-earth-eco-635'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'rain-shadow drought shaping a distinct, fire-maintained forest',
        'high endemism including species restricted solely to dry zones',
        'the flagship Fiji crested iguana and banded iguana populations',
        'vulnerability to fire, clearing, and invasive goats and rats',
      ],
      sourceIds: ['one-earth-eco-635'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 44% with a protection level of 1. Most dry forest has long been converted to talasiga savanna, sugar cane, pine, cattle ranches, and settlements, leaving only small patches, with Yadua Taba the only protected site. Priorities include protecting Macuata Island, eradicating goats and rats from Yadua Taba, and securing community-based fire and goat control on Viti Levu.',
      sourceIds: ['one-earth-eco-635'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:fiji-crested-iguana',
      'species:fiji-banded-iguana',
      'species:fiji-cycad',
    ],
    countryIds: ['FJ'],
    sources: ['one-earth-eco-635'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:651',
    summary: {
      value:
        'Celtic Broadleaf Forests fringe the Atlantic coasts of Ireland, western Britain, and Brittany. Mild, wet oceanic climate supports oak-dominated woodlands with rich bryophyte and lichen communities, historically maintained by grazing and coppicing.',
      sourceIds: ['one-earth-eco-651'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Atlantic coastal fringes',
        'steep wooded valleys and ravines',
        'sea cliffs and offshore islands',
        'estuarine margins',
      ],
      sourceIds: ['one-earth-eco-651'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Oceanic temperate with mild winters, cool summers, and high year-round precipitation 1,200–2,500 mm; minimal seasonal temperature variation.',
        annualPrecipitationMm: { min: 1200, max: 2500 },
      },
      sourceIds: ['one-earth-eco-651'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'sessile oak',
        'pedunculate oak',
        'hazel',
        'holly',
        'bilberry',
        'rich epiphytic mosses and lichens',
      ],
      sourceIds: ['one-earth-eco-651'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Atlantic storm exposure and salt spray',
        'coppice and wood-pasture management history',
        'epiphyte diversity driven by clean, humid air',
        'stream and groundwater nutrient flux',
      ],
      sourceIds: ['one-earth-eco-651'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Highly fragmented by centuries of clearance; remnants in steep valleys and protected areas. Key pressures: rhododendron invasion, deer browsing, nitrogen deposition, and climate change. Celtic rainforest (temperate rainforest) is a priority habitat under UK and Irish biodiversity strategies.',
      sourceIds: ['one-earth-eco-651'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-deer',
      'species:atlantic-salmon',
      'species:pine-marten',
      'species:red-squirrel',
      'species:wood-warbler',
      'species:pied-flycatcher',
      'species:european-otter',
    ],
    countryIds: ['GB', 'IE'],
    sources: ['one-earth-eco-651'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:663',
    summary: {
      value:
        'English Lowlands Beech Forests occupy the chalk and limestone hills of southern and eastern England. European beech dominates on well-drained calcareous soils, forming structurally simple but biologically distinctive woodlands with a characteristic spring ground flora.',
      sourceIds: ['one-earth-eco-663'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'chalk and limestone escarpments',
        'dry valleys and combes',
        'ancient wood-pasture commons',
        'river valleys cutting through downs',
      ],
      sourceIds: ['one-earth-eco-663'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Temperate oceanic with drier, warmer summers than western Britain; annual precipitation 600–900 mm; winter temperatures rarely below -5°C.',
        annualPrecipitationMm: { min: 600, max: 900 },
      },
      sourceIds: ['one-earth-eco-663'],
      derivation: 'source-value',
    },
    vegetation: {
      value: ['European beech', 'whitebeam', 'yew', 'box', 'bluebell', "dog's mercury"],
      sourceIds: ['one-earth-eco-663'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'beech mast seeding cycles',
        'shallow calcareous soil development',
        'historical wood-pasture and pollarding',
        'chalk stream hydrology linkage',
      ],
      sourceIds: ['one-earth-eco-663'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Less than 5% of original extent remains; many stands are secondary. Pressures: deer browsing preventing regeneration, grey squirrel bark stripping, climate warming on southern range edge, and recreational pressure. Chilterns, Cotswolds, and South Downs hold significant protected areas.',
      sourceIds: ['one-earth-eco-663'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-deer',
      'species:red-squirrel',
      'species:red-kite',
      'species:bechsteins-bat',
      'species:purple-emperor',
    ],
    countryIds: ['GB'],
    sources: ['one-earth-eco-663'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:672',
    summary: {
      value:
        'North Atlantic Moist Mixed Forests cover much of Britain, Ireland, and the western European fringe. Mixed deciduous and coniferous forests of oak, birch, and Scots pine occupy a transitional zone between the Atlantic oakwoods and the drier lowland beech forests, with high bryophyte diversity in the wetter west.',
      sourceIds: ['one-earth-eco-672'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'rolling lowland and upland terrain',
        'river valleys and floodplains',
        'glacial landforms (drumlins, eskers)',
        'extensive peatland complexes',
      ],
      sourceIds: ['one-earth-eco-672'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Oceanic temperate with strong west–east precipitation gradient; mild winters, cool summers; annual precipitation 800–2,000 mm.',
        annualPrecipitationMm: { min: 800, max: 2000 },
      },
      sourceIds: ['one-earth-eco-672'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'pedunculate oak',
        'sessile oak',
        'downy birch',
        'silver birch',
        'Scots pine',
        'purple moor-grass',
      ],
      sourceIds: ['one-earth-eco-672'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'peatland formation in wetter hollows',
        'natural regeneration on disturbed ground',
        'mycorrhizal networks linking tree species',
        'floodplain nutrient deposition',
      ],
      sourceIds: ['one-earth-eco-672'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Widely converted to agriculture and plantation forestry; ancient semi-natural woodland highly fragmented. Native woodland expansion is a policy priority in both UK and Ireland. Pressures: deer overbrowsing, invasive rhododendron, nitrogen deposition, and ash dieback.',
      sourceIds: ['one-earth-eco-672'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-deer',
      'species:golden-eagle',
      'species:atlantic-salmon',
      'species:scots-pine',
    ],
    countryIds: ['GB', 'IE'],
    sources: ['one-earth-eco-672'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:691',
    summary: {
      value:
        'Caledon Conifer Forests are the remnants of the once-extensive Caledonian pine forest of the Scottish Highlands. Scots pine dominates on nutrient-poor, acidic soils, with juniper, birch, and a distinctive ground flora of blaeberry, heather, and boreal bryophytes. These forests are relicts of the boreal forest that covered Scotland after the last glaciation.',
      sourceIds: ['one-earth-eco-691'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Highland glens and straths',
        'ancient pinewood remnants on mineral soils',
        'loch and river systems',
        'mountain plateaus and corries',
      ],
      sourceIds: ['one-earth-eco-691'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Cool oceanic to subalpine with increasing continentality inland; winter snow cover at elevation; annual precipitation 800–2,500 mm.',
        annualPrecipitationMm: { min: 800, max: 2500 },
      },
      sourceIds: ['one-earth-eco-691'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Scots pine',
        'juniper',
        'downy birch',
        'rowan',
        'blaeberry',
        'heather',
        'twinflower',
      ],
      sourceIds: ['one-earth-eco-691'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'pine mast seeding and natural regeneration pulses',
        'fire as a historical and ecological driver',
        'deadwood accumulation and saproxylic diversity',
        'mycorrhizal networks in nutrient-poor soils',
      ],
      sourceIds: ['one-earth-eco-691'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Reduced to ~1% of estimated post-glacial extent; fragmented into 84 recognized pinewoods. Active restoration via natural regeneration, deer management, and planting is expanding core areas. Cairngorms and Loch Lomond & The Trossachs national parks hold major remnants. Capercaillie and Scottish wildcat are flagship species.',
      sourceIds: ['one-earth-eco-691'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:scottish-wildcat',
      'species:capercaillie',
      'species:golden-eagle',
      'species:scots-pine',
      'species:atlantic-salmon',
    ],
    countryIds: ['GB'],
    sources: ['one-earth-eco-691'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:729',
    summary: {
      value:
        'Faroe Islands Boreal Grasslands cover the 18 islands of the Faroe archipelago in the North Atlantic. Cool, wet, windy oceanic climate with no native trees supports a vegetation of grasslands, heath, and blanket bog on basalt-derived soils, heavily shaped by sheep grazing and seabird nutrient inputs.',
      sourceIds: ['one-earth-eco-729'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'steep basalt cliffs and sea stacks',
        'grassy coastal slopes and valleys',
        'upland blanket bog and heath',
        'fjords and sounds',
      ],
      sourceIds: ['one-earth-eco-729'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Subpolar oceanic with minimal seasonal temperature variation (3–11°C); very high precipitation 1,300–1,800 mm; persistent cloud, fog, and strong winds.',
        annualPrecipitationMm: { min: 1300, max: 1800 },
      },
      sourceIds: ['one-earth-eco-729'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'red fescue',
        'common bent',
        "sheep's fescue",
        'sedge species',
        'heather',
        'crowberry',
      ],
      sourceIds: ['one-earth-eco-729'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'seabird guano nutrient enrichment of coastal grasslands',
        'sheep grazing maintaining open sward',
        'peat accumulation on upland plateaus',
        'wind and salt spray limiting woody growth',
      ],
      sourceIds: ['one-earth-eco-729'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'No native terrestrial mammals; birdlife is the conservation focus (puffin, storm-petrel, Faroese starling). Pressures: intensive sheep grazing, invasive species (rat, mink), climate-driven changes to seabird prey, and tourism pressure on sensitive slopes. Large areas designated as Important Bird Areas.',
      sourceIds: ['one-earth-eco-729'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:atlantic-salmon',
      'species:atlantic-puffin',
      'species:storm-petrel',
      'species:faroese-starling',
      'species:arctic-tern',
    ],
    countryIds: ['FO'],
    sources: ['one-earth-eco-729'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:412',
    summary: {
      value:
        'Canadian High Arctic Tundra covers the Queen Elizabeth Islands in the extreme north of the Canadian Arctic Archipelago. Polar-desert climate with minimal precipitation supports sparse cushion plants, crustose lichens, and microorganisms on barren rock and gravel; the most extreme terrestrial environment in Canada.',
      sourceIds: ['one-earth-eco-412'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'polar desert plateaus',
        'ice caps and nunataks',
        'frost-shattered bedrock',
        'coastal cliffs and fjords',
      ],
      sourceIds: ['one-earth-eco-412'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'High Arctic polar desert with mean July temperatures 1–3°C, annual precipitation 50–150 mm; continuous permafrost >500 m thick.',
        annualPrecipitationMm: { min: 50, max: 150 },
      },
      sourceIds: ['one-earth-eco-412'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'cushion plants (Saxifraga, Draba)',
        'crustose lichens',
        'cyanobacterial soil crusts',
        'sparse sedge and grass',
      ],
      sourceIds: ['one-earth-eco-412'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'freeze-thaw patterned ground',
        'minimal nutrient cycling',
        'wind erosion and deposition',
        'glacial meltwater pulses',
      ],
      sourceIds: ['one-earth-eco-412'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Within Qausuittuq and northern Sirmilik national parks; among the least disturbed ecosystems globally. Climate warming is the sole pervasive threat, driving microbial community shifts and potential vegetation expansion.',
      sourceIds: ['one-earth-eco-412'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:peary-caribou',
      'species:ivory-gull',
      'species:polar-bear',
      'species:arctic-fox',
    ],
    countryIds: ['CA'],
    sources: ['one-earth-eco-412'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:413',
    summary: {
      value:
        'Canadian Low Arctic Tundra spans the mainland Arctic coast from Alaska to Baffin Island and the southern Arctic Archipelago. Warmer summers allow continuous dwarf-shrub heath, sedge meadows, and wetlands, supporting higher biodiversity than the High Arctic.',
      sourceIds: ['one-earth-eco-413'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'coastal plain and river deltas',
        'thaw-lake complexes',
        'esker and moraine ridges',
        'tidal flats and estuaries',
      ],
      sourceIds: ['one-earth-eco-413'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Low Arctic with mean July temperatures 5–10°C, annual precipitation 150–300 mm; continuous permafrost with active layer 30–100 cm.',
        annualPrecipitationMm: { min: 150, max: 300 },
      },
      sourceIds: ['one-earth-eco-413'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Dryas and Cassiope heath',
        'Carex and Eriophorum sedge meadows',
        'Salix and Betula dwarf scrub',
        'moss and lichen ground cover',
      ],
      sourceIds: ['one-earth-eco-413'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'thaw-lake formation and drainage cycles',
        'goose and caribou grazing lawns',
        'snowmelt nutrient pulses',
        'coastal erosion and accretion',
      ],
      sourceIds: ['one-earth-eco-413'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Key migratory bird habitat; calving grounds for barren-ground caribou herds. Protected in parts of Aulavik, Tuktut Nogait, and Ukkusiksalik national parks. Pressures: climate-driven shrubification, industrial development, and changing caribou migration.',
      sourceIds: ['one-earth-eco-413'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:barren-ground-caribou',
      'species:snowy-owl',
      'species:arctic-fox',
    ],
    countryIds: ['CA'],
    sources: ['one-earth-eco-413'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:414',
    summary: {
      value:
        'Canadian Middle Arctic Tundra occupies the central Arctic Archipelago islands between the High and Low Arctic zones. Intermediate climate supports patchy dwarf-shrub heath and polar desert, with distinct east–west gradients in precipitation and species composition.',
      sourceIds: ['one-earth-eco-414'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'rolling upland plateaus',
        'deep fjords and sounds',
        'polar desert valleys',
        'ice-cap margins',
      ],
      sourceIds: ['one-earth-eco-414'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Middle Arctic with mean July temperatures 3–5°C, annual precipitation 100–200 mm; continuous permafrost, shorter growing season than Low Arctic.',
        annualPrecipitationMm: { min: 100, max: 200 },
      },
      sourceIds: ['one-earth-eco-414'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Dryas integrifolia heath',
        'Salix arctica prostrate willow',
        'Alopecurus and Luzula grasses',
        'moss and fruticose lichen mats',
      ],
      sourceIds: ['one-earth-eco-414'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'polar desert to heath transition',
        'Peary caribou seasonal migration',
        'snowbed community dynamics',
        'ice-cap meltwater streams',
      ],
      sourceIds: ['one-earth-eco-414'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Includes core Peary caribou range on Bathurst, Devon, and Cornwallis islands. Partially protected in Sirmilik and Qausuittuq national parks. Small population size and climate vulnerability make Peary caribou a conservation priority.',
      sourceIds: ['one-earth-eco-414'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: ['species:peary-caribou', 'species:musk-ox', 'species:arctic-fox'],
    countryIds: ['CA'],
    sources: ['one-earth-eco-414'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:415',
    summary: {
      value:
        'Davis Highlands Tundra covers the mountainous spine of Baffin Island, including the Barnes Ice Cap and surrounding plateaus. Alpine tundra zones descend to sea level in fjords, creating a compressed elevational sequence from polar desert to Low Arctic heath.',
      sourceIds: ['one-earth-eco-415'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Barnes Ice Cap and outlet glaciers',
        'alpine plateaus and cirques',
        'deep fjords cutting to ice cap',
        'nunatak-studded valleys',
      ],
      sourceIds: ['one-earth-eco-415'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'High Arctic alpine with strong orographic precipitation; ice cap creates local climate; mean July temperatures 2–6°C at elevation.',
        annualPrecipitationMm: { min: 200, max: 500 },
      },
      sourceIds: ['one-earth-eco-415'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'polar desert cushion plants',
        'Dryas and Cassiope heath',
        'alpine sedge meadows',
        'saxicolous lichen communities',
      ],
      sourceIds: ['one-earth-eco-415'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'ice-cap dynamics and nunatak refugia',
        'glacial outburst floods (jökulhlaups)',
        'elevational species turnover over short distances',
        'katabatic wind erosion',
      ],
      sourceIds: ['one-earth-eco-415'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Core of Sirmilik National Park; Barnes Ice Cap is a climate-change sentinel. Inuit use area for harvesting; minimal industrial pressure. Glacier retreat is exposing new terrain and altering hydrology.',
      sourceIds: ['one-earth-eco-415'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: ['species:musk-ox', 'species:arctic-fox', 'species:ivory-gull'],
    countryIds: ['CA'],
    sources: ['one-earth-eco-415'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:421',
    summary: {
      value:
        'Torngat Mountain Tundra occupies the Torngat Mountains of northern Labrador and Quebec, the highest peaks east of the Rockies. Alpine tundra descends to fjord level, supporting the southernmost polar bears in Canada and a unique mix of Arctic and boreal species.',
      sourceIds: ['one-earth-eco-421'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'rugged mountain peaks and cirques',
        'deep fjords and glacial valleys',
        'cirque lakes and tarns',
        'coastal cliffs and headlands',
      ],
      sourceIds: ['one-earth-eco-421'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Subarctic alpine with maritime influence; mean July temperatures 6–10°C at base, below 0°C on peaks; high precipitation 600–1,000 mm, heavy snowfall.',
        annualPrecipitationMm: { min: 600, max: 1000 },
      },
      sourceIds: ['one-earth-eco-421'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'alpine dwarf-shrub heath',
        'sedge and grass meadows',
        'snowbed communities',
        'krummholz black spruce at treeline',
      ],
      sourceIds: ['one-earth-eco-421'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'glacial and periglacial processes',
        'polar bear coastal denning',
        'caribou calving on plateau',
        'seabird nutrient transfer from colonies',
      ],
      sourceIds: ['one-earth-eco-421'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Entirely within Torngat Mountains National Park, co-managed with Inuit. Southernmost polar bear population; Torngat caribou herd of cultural significance. Climate warming drives treeline advance and shrub expansion into alpine tundra.',
      sourceIds: ['one-earth-eco-421'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:polar-bear',
      'species:torngat-caribou',
      'species:arctic-fox',
    ],
    countryIds: ['CA'],
    sources: ['one-earth-eco-421'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:43',
    summary: {
      value:
        'East Sudanian Savanna extends from the Central African Republic to South Sudan, forming the eastern portion of the Sudanian savanna belt. Isoberlinia-dominated woodlands transition to open grasslands on seasonally flooded plains, with gallery forests along watercourses.',
      sourceIds: ['one-earth-eco-43'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Isoberlinia woodland plains',
        'seasonally flooded grasslands (yaeres)',
        'gallery forest corridors',
        'lateritic inselbergs',
      ],
      sourceIds: ['one-earth-eco-43'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical wet-and-dry with 5–7 month dry season; annual rainfall 900–1,300 mm; mean temperatures 25–28°C.',
        annualPrecipitationMm: { min: 900, max: 1300 },
      },
      sourceIds: ['one-earth-eco-43'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Isoberlinia doka and tomentosa',
        'Terminalia and Combretum savanna',
        'Andropogon gayanus grasslands',
        'Mitragyna and Syzygium gallery forest',
      ],
      sourceIds: ['one-earth-eco-43'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'annual dry-season fires',
        'seasonal floodplain inundation',
        'large mammal migrations and grazing',
        'termite mound nutrient cycling',
      ],
      sourceIds: ['one-earth-eco-43'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Protected in Bamingui-Bangoran, Manovo-Gounda St. Floris, and Southern National Park. Pressures: poaching, transhumance, agricultural expansion, and insecurity. Key species include elephant, giant eland, and northern carmine bee-eater.',
      sourceIds: ['one-earth-eco-43'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:african-elephant',
      'species:giant-elan',
      'species:northern-carmine-bee-eater',
    ],
    countryIds: ['CF', 'SS', 'SD', 'TD', 'CM'],
    sources: ['one-earth-eco-43'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:49',
    summary: {
      value:
        'Mandara Plateau Woodlands occupy the volcanic Mandara Mountains on the Cameroon–Nigeria border. Isolated from the main Sudanian belt, these woodlands support relict populations of Sudanian and Guinean species on volcanic soils with higher rainfall.',
      sourceIds: ['one-earth-eco-49'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic plateau and peaks',
        'montane woodland and forest fragments',
        'rocky outcrops and cliffs',
        'seasonal streams and waterfalls',
      ],
      sourceIds: ['one-earth-eco-49'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical montane with orographic rainfall 1,200–1,800 mm; cooler temperatures than surrounding plains; distinct dry season.',
        annualPrecipitationMm: { min: 1200, max: 1800 },
      },
      sourceIds: ['one-earth-eco-49'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Isoberlinia and Uapaca woodland',
        'Olea and Podocarpus forest fragments',
        'Hypericum and Philippia shrublands',
        'Afrotemperate grassland elements',
      ],
      sourceIds: ['one-earth-eco-49'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'orographic rainfall and mist interception',
        'volcanic soil fertility gradients',
        'fire refugia on rocky slopes',
        'elevational species turnover',
      ],
      sourceIds: ['one-earth-eco-49'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Small protected areas (Mandara Plateau forest reserves). High human population density drives deforestation and fragmentation. Endemic plant species and relict mammal populations are conservation priorities.',
      sourceIds: ['one-earth-eco-49'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:mandara-monkey',
      'species:adamawa-turtle-dove',
      'species:cross-river-gorilla',
      'species:preuss-monkey',
      'species:bannerman-turaco',
    ],
    countryIds: ['CM', 'NG'],
    sources: ['one-earth-eco-49'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:53',
    summary: {
      value:
        'Sahelian Acacia Savanna forms a continuous belt across the Sahel from Mauritania to Sudan. Open Acacia tortilis and senegal shrublands on sandy soils grade into grasslands, with high interannual rainfall variability driving boom-bust population dynamics.',
      sourceIds: ['one-earth-eco-53'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Sahelian sand plains and dunes',
        'Acacia tortilis and senegal shrub steppe',
        'seasonal wetlands and wadis',
        'rocky plateaus and inselbergs',
      ],
      sourceIds: ['one-earth-eco-53'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Semi-arid Sahelian with 8–9 month dry season; annual rainfall 200–400 mm; extreme interannual variability; temperatures 25–35°C.',
        annualPrecipitationMm: { min: 200, max: 400 },
      },
      sourceIds: ['one-earth-eco-53'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Acacia tortilis and senegal',
        'Commiphora africana',
        'Leptadenia pyrotechnica on dunes',
        'Aristida and Cenchrus grasses',
      ],
      sourceIds: ['one-earth-eco-53'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'rainfall-driven herbivore population cycles',
        'nomadic pastoralism and transhumance',
        'desert locust outbreak dynamics',
        'dune stabilization by perennial shrubs',
      ],
      sourceIds: ['one-earth-eco-53'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Sahelian protected areas include Ferlo, Aïr-Ténéré, and Ouadi Rimé-Ouadi Achim. Pressures: climate-driven desertification, overgrazing, woodcutting, and insecurity. Sahelian antelopes (dama gazelle, addax) are critically endangered.',
      sourceIds: ['one-earth-eco-53'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:dama-gazelle',
      'species:scimitar-horned-oryx',
      'species:african-wild-dog',
    ],
    countryIds: ['MR', 'ML', 'NE', 'TD', 'SD', 'BF', 'NG'],
    sources: ['one-earth-eco-53'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:62',
    summary: {
      value:
        'West Sudanian Savanna covers the western Sudanian zone from Senegal to the Central African Republic. Isoberlinia woodlands dominate on deeper soils, with Terminalia-Combretum savanna on shallower soils, maintained by annual fires and elephant browsing.',
      sourceIds: ['one-earth-eco-62'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Isoberlinia woodland on deep soils',
        'Terminalia-Combretum savanna on shallow soils',
        'lateritic plateaus and bowés',
        'gallery forests along perennial rivers',
      ],
      sourceIds: ['one-earth-eco-62'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical wet-and-dry with 6–8 month dry season; annual rainfall 800–1,200 mm; mean temperatures 26–29°C.',
        annualPrecipitationMm: { min: 800, max: 1200 },
      },
      sourceIds: ['one-earth-eco-62'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Isoberlinia doka and tomentosa',
        'Terminalia macroptera and avicennioides',
        'Combretum and Anogeissus savanna',
        'Pterocarpus erinaceus in protected areas',
      ],
      sourceIds: ['one-earth-eco-62'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'annual dry-season fires shaping woodland structure',
        'elephant browsing maintaining savanna openness',
        'seasonal ungulate concentrations on floodplains',
        'termite mound and fairy circle patterning',
      ],
      sourceIds: ['one-earth-eco-62'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "Core of the W-Arly-Pendjari (WAP) transboundary complex. One of West Africa's last strongholds for lion, cheetah, and elephant. Pressures: pastoralism, poaching, agricultural encroachment, and gold mining.",
      sourceIds: ['one-earth-eco-62'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:african-elephant',
      'species:lion',
      'species:roan-antelope',
      'species:kori-bustard',
    ],
    countryIds: ['SN', 'ML', 'BF', 'NE', 'NG', 'TD', 'CF', 'CM'],
    sources: ['one-earth-eco-62'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:71',
    summary: {
      value:
        "Inner Niger Delta Flooded Savanna is a vast inland delta in Mali where the Niger River splits into channels, lakes, and floodplains. Seasonal flooding creates a mosaic of aquatic grasslands, acacia woodlands, and sandbanks, supporting one of Africa's largest waterbird concentrations.",
      sourceIds: ['one-earth-eco-71'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'braided river channels and lakes',
        'seasonal floodplains (bourgoutières)',
        'Acacia kirkii woodlands on levees',
        'sandbanks and dune fields',
      ],
      sourceIds: ['one-earth-eco-71'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Sahelian semi-arid with single flood pulse July–December; annual rainfall 200–500 mm; high evaporation; temperatures 25–35°C.',
        annualPrecipitationMm: { min: 200, max: 500 },
      },
      sourceIds: ['one-earth-eco-71'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Echinochloa and Oryza floodplain grasses',
        'Acacia kirkii and nilotica woodlands',
        'Cyperus and Phragmites reeds',
        'Nymphaea and Pistia aquatic plants',
      ],
      sourceIds: ['one-earth-eco-71'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'annual flood pulse driving productivity cycles',
        'migratory waterbird breeding colonies',
        'fish spawning and nursery habitats',
        'pastoral transhumance following flood recession',
      ],
      sourceIds: ['one-earth-eco-71'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Ramsar site and UNESCO Biosphere Reserve. Pressures: upstream dams reducing flood extent, irrigation withdrawals, overfishing, and climate variability. Key for Palearctic migratory waterbirds and West African manatee.',
      sourceIds: ['one-earth-eco-71'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:west-african-manatee',
      'species:black-crowned-crane',
      'species:african-skimmers',
    ],
    countryIds: ['ML'],
    sources: ['one-earth-eco-71'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:72',
    summary: {
      value:
        'Lake Chad Flooded Savanna surrounds the shallow, variable Lake Chad at the intersection of Chad, Nigeria, Niger, and Cameroon. Seasonal flooding creates extensive wetlands, reedbeds, and grasslands that support massive waterbird populations and the endangered Kouri cattle.',
      sourceIds: ['one-earth-eco-72'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'shallow lake and seasonal floodplains',
        'reedbeds and papyrus swamps',
        'Acacia and Ziziphus woodlands on dunes',
        'sand dunes and islands',
      ],
      sourceIds: ['one-earth-eco-72'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Sahelian semi-arid with high interannual lake level variability; annual rainfall 200–600 mm; temperatures 25–35°C; extreme evaporation.',
        annualPrecipitationMm: { min: 200, max: 600 },
      },
      sourceIds: ['one-earth-eco-72'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Cyperus papyrus and Phragmites reeds',
        'Echinochloa and Vossia floodplain grasses',
        'Acacia nilotica and seyal on dunes',
        'Nymphaea and Ceratophyllum aquatics',
      ],
      sourceIds: ['one-earth-eco-72'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'lake level fluctuations driving habitat dynamics',
        'massive Palearctic and Afrotropical waterbird aggregations',
        'Kouri cattle amphibious adaptation',
        'fisheries boom-bust cycles',
      ],
      sourceIds: ['one-earth-eco-72'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Lake Chad Basin Commission coordinates transboundary management. Lake has shrunk >90% since 1960s due to climate and irrigation. Ramsar sites in all four countries. Pressures: water abstraction, insecurity (Boko Haram), invasive Typha, and climate change.',
      sourceIds: ['one-earth-eco-72'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:kouri-cattle',
      'species:black-crowned-crane',
      'species:african-skimmers',
    ],
    countryIds: ['TD', 'NG', 'NE', 'CM'],
    sources: ['one-earth-eco-72'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:74',
    summary: {
      value:
        "Sudd Flooded Grasslands form one of the world's largest tropical wetlands on the White Nile in South Sudan. Permanent and seasonal swamps, floodplains, and floating vegetation mats (sudd) support immense biodiversity including the endemic Nile lechwe and massive waterbird migrations.",
      sourceIds: ['one-earth-eco-74'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'permanent papyrus and reed swamps',
        'seasonal floodplains and toic grasslands',
        'floating vegetation mats (sudd)',
        'river channels and lagoons',
      ],
      sourceIds: ['one-earth-eco-74'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical wet with bimodal rainfall 800–1,200 mm; White Nile flood pulse May–November; temperatures 25–32°C; high humidity.',
        annualPrecipitationMm: { min: 800, max: 1200 },
      },
      sourceIds: ['one-earth-eco-74'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Cyperus papyrus and Phragmites dominants',
        'Echinochloa and Vossia floating grasses',
        'Nymphaea and Pistia aquatic mats',
        'Acacia and Ziziphus on river levees',
      ],
      sourceIds: ['one-earth-eco-74'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'White Nile flood pulse driving wetland dynamics',
        'floating mat formation and decomposition',
        'massive waterbird breeding and migration',
        'Nile lechwe and sitatunga amphibious adaptation',
      ],
      sourceIds: ['one-earth-eco-74'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Ramsar site and proposed World Heritage site. Pressures: upstream Nile dams (Jonglei Canal), oil exploration, insecurity, and climate-driven hydrological change. Largest remaining Nile lechwe population; critical for shoebill and migratory waterbirds.',
      sourceIds: ['one-earth-eco-74'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:nile-lechwe',
      'species:shoebill',
      'species:white-eared-kob',
    ],
    countryIds: ['SS', 'SD'],
    sources: ['one-earth-eco-74'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:774',
    summary: {
      value:
        'Kola Peninsula Tundra occupies the fells and plateaus of the Kola Peninsula in northwestern Russia. The oceanic Arctic climate supports a mosaic of mountain tundra, dwarf-shrub heath, and wetlands, with relict boreal species at the eastern edge of the Fennoscandian biota.',
      sourceIds: ['one-earth-eco-774'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Khibiny and Lovozero massifs',
        'tundra plateaus and fells',
        'glacial cirques and valleys',
        'lake-dotted lowlands',
      ],
      sourceIds: ['one-earth-eco-774'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Oceanic Arctic with mild winters (-10 to -15°C) and cool summers (8–12°C); annual precipitation 400–600 mm; strong maritime influence.',
        annualPrecipitationMm: { min: 400, max: 600 },
      },
      sourceIds: ['one-earth-eco-774'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Dryas octopetala and Cassiope heath',
        'Betula nana and Salix dwarf scrub',
        'Carex and Eriophorum mires',
        'Salix lanata and herb-rich snowbeds',
      ],
      sourceIds: ['one-earth-eco-774'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'orographic precipitation and snow accumulation',
        'periglacial solifluction and patterned ground',
        'relict boreal species persistence',
        'reindeer grazing and trampling',
      ],
      sourceIds: ['one-earth-eco-774'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Kandalaksha and Lapland zapovedniks protect core areas. Pressures: mining (apatite, rare earths), infrastructure development, and climate-driven treeline advance. Kola Peninsula is a refugium for arctic-alpine plants.',
      sourceIds: ['one-earth-eco-774'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:wild-reindeer',
      'species:arctic-fox',
      'species:kola-peninsula-vole',
      'species:arctic-warbler',
      'species:gull-billed-tern',
    ],
    countryIds: ['RU'],
    sources: ['one-earth-eco-774'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:775',
    summary: {
      value:
        "Northeast Siberian Coastal Tundra stretches along the East Siberian Sea from the Lena Delta to the Kolyma River. The continental Arctic climate supports extensive dwarf-shrub tundra, wetland complexes, and the southernmost breeding colonies of ivory gull and Sabine's gull.",
      sourceIds: ['one-earth-eco-775'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Lena, Yana, Indigirka, Kolyma deltas',
        'coastal lowlands and thermokarst lakes',
        'Pleistocene permafrost cliffs (yedoma)',
        'riverine gallery forests',
      ],
      sourceIds: ['one-earth-eco-775'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Continental High Arctic with extreme seasonality; January -35 to -40°C, July 8–12°C; annual precipitation 150–250 mm; continuous permafrost >500 m.',
        annualPrecipitationMm: { min: 150, max: 250 },
      },
      sourceIds: ['one-earth-eco-775'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Dryas and Cassiope heath',
        'Salix and Betula dwarf scrub',
        'Carex and Eriophorum polygonal mires',
        'Arctophila and Dupontia aquatic grasses',
      ],
      sourceIds: ['one-earth-eco-775'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'thermokarst lake formation and drainage cycles',
        'yedoma permafrost carbon dynamics',
        'Siberian crane and waterfowl breeding',
        'wild reindeer calving migrations',
      ],
      sourceIds: ['one-earth-eco-775'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Lena Delta and Kytalyk zapovedniks protect key wetlands. Pressures: climate-driven permafrost thaw, industrial development (oil, gas), and changing river hydrology. Globally significant for Siberian crane and ivory gull.',
      sourceIds: ['one-earth-eco-775'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:siberian-crane',
      'species:ivory-gull',
      'species:wild-reindeer',
    ],
    countryIds: ['RU'],
    sources: ['one-earth-eco-775'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:776',
    summary: {
      value:
        'Northwest Russian-Novaya Zemlya Tundra covers the Arctic coast from the Pechora River to Novaya Zemlya. The transition from continental tundra to polar desert creates a sharp vegetation gradient, with glaciers and ice caps on Novaya Zemlya.',
      sourceIds: ['one-earth-eco-776'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Pechora and Kara Sea coastal plains',
        'Novaya Zemlya mountains and ice caps',
        'Karskie Vorota and Yugorskiy Shar straits',
        'permafrost polygonal ground',
      ],
      sourceIds: ['one-earth-eco-776'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'High Arctic with strong maritime influence on Novaya Zemlya; January -20 to -25°C, July 4–8°C; annual precipitation 200–300 mm.',
        annualPrecipitationMm: { min: 200, max: 300 },
      },
      sourceIds: ['one-earth-eco-776'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Dryas and Salix polar desert',
        'Cassiope and Saxifraga cushion plants',
        'Carex and Alopecurus meadows',
        'crustose lichen on rock',
      ],
      sourceIds: ['one-earth-eco-776'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'glacial dynamics on Novaya Zemlya',
        'sea-ice polynyas and marine productivity',
        'polar bear denning on coasts',
        'seabird colony nutrient transport',
      ],
      sourceIds: ['one-earth-eco-776'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Novaya Zemlya is a federal zakaznik; adjacent seas are critical polar bear habitat. Pressures: nuclear legacy (testing sites), oil and gas exploration, and climate-driven glacial retreat. Key for Atlantic walrus and ivory gull.',
      sourceIds: ['one-earth-eco-776'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: ['species:polar-bear', 'species:ivory-gull', 'species:arctic-fox'],
    countryIds: ['RU'],
    sources: ['one-earth-eco-776'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:777',
    summary: {
      value:
        'Novosibirsk Islands Arctic Desert occupies the Anzhu and Lyakhovsky Islands in the East Siberian Sea. The most severe Arctic desert climate in Eurasia supports only sparse cryptogamic crusts and cushion plants on barren sedimentary rock and permafrost.',
      sourceIds: ['one-earth-eco-777'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Anzhu Islands (Kotelny, Faddeyevsky)',
        'Lyakhovsky Islands',
        'permafrost polygonal ground and pingos',
        'barren sedimentary plateaus',
      ],
      sourceIds: ['one-earth-eco-777'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Extreme High Arctic polar desert; mean July 1–3°C, annual precipitation 50–100 mm; continuous permafrost >600 m; minimal snow cover.',
        annualPrecipitationMm: { min: 50, max: 100 },
      },
      sourceIds: ['one-earth-eco-777'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'crustose lichens on rock',
        'cyanobacterial soil crusts',
        'Draba and Saxifraga cushion plants',
        'sparse Poa and Alopecurus in snowbeds',
      ],
      sourceIds: ['one-earth-eco-777'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'freeze-thaw sorting and patterned ground',
        'minimal nutrient cycling in polar desert',
        'ivory gull breeding on nunataks',
        'permafrost aggradation and ice-wedge growth',
      ],
      sourceIds: ['one-earth-eco-777'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Part of Great Arctic Zapovednik; among the least disturbed High Arctic ecosystems. Climate warming is the sole pervasive threat, potentially allowing vegetation expansion. Key for ivory gull and polar bear.',
      sourceIds: ['one-earth-eco-777'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:ivory-gull',
      'species:polar-bear',
      'species:ross-gull',
      'species:brent-goose',
      'species:arctic-fox',
    ],
    countryIds: ['RU'],
    sources: ['one-earth-eco-777'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:778',
    summary: {
      value:
        'Russian Arctic Desert covers the isolated high-Arctic archipelagos of Franz Josef Land, Severnaya Zemlya, and northern Novaya Zemlya. The most extreme polar desert in Eurasia, with ice caps covering most land area and only nunataks supporting sparse cryptogamic life.',
      sourceIds: ['one-earth-eco-778'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Franz Josef Land ice caps and nunataks',
        'Severnaya Zemlya ice domes',
        'northern Novaya Zemlya glaciers',
        'barren rock and scree slopes',
        'permanent sea ice margins',
      ],
      sourceIds: ['one-earth-eco-778'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Extreme High Arctic polar desert; mean July 0–2°C, annual precipitation 50–150 mm; ice caps dominate; continuous permafrost to bedrock.',
        annualPrecipitationMm: { min: 50, max: 150 },
      },
      sourceIds: ['one-earth-eco-778'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'crustose lichens on rock',
        'cyanobacterial soil crusts',
        'Draba and Saxifraga on nunataks',
        'sparse moss in meltwater channels',
      ],
      sourceIds: ['one-earth-eco-778'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'ice-cap dynamics and nunatak refugia',
        'glacial meltwater microbial ecosystems',
        'seabird colony guano enrichment',
        'polar bear and walrus ice-dependent ecology',
      ],
      sourceIds: ['one-earth-eco-778'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Franz Josef Land and Severnaya Zemlya are Russian Arctic National Park. Near-pristine High Arctic ecosystems; climate warming drives glacial retreat and potential vegetation colonization. Flagship species: polar bear, ivory gull, walrus, narwhal.',
      sourceIds: ['one-earth-eco-778'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:polar-bear',
      'species:ivory-gull',
      'species:walrus',
      'species:narwhal',
    ],
    countryIds: ['RU'],
    sources: ['one-earth-eco-778'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:118',
    summary: {
      value:
        'Central South Antarctic Peninsula Tundra covers the central and southern Antarctic Peninsula from the Larsen Ice Shelf to the Ronne Entrance. The cold, dry continental climate supports sparse moss and lichen communities on nunataks and coastal cliffs, with the most extensive vegetation on north-facing slopes and in glacial valleys.',
      sourceIds: ['one-earth-eco-118'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Peninsula mountain spine and nunataks',
        'Larsen and Ronne ice shelves',
        'glacial valleys and cirques',
        'coastal cliffs and headlands',
      ],
      sourceIds: ['one-earth-eco-118'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Continental Antarctic with mean annual temperatures -15 to -20°C; summer highs rarely above 0°C; precipitation 200–400 mm as snow.',
        annualPrecipitationMm: { min: 200, max: 400 },
      },
      sourceIds: ['one-earth-eco-118'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Bryum and Andreaea mosses',
        'Usnea and Himantormia lichens',
        'Deschampsia antarctica on warm sites',
        'Prasiola crispa near bird colonies',
      ],
      sourceIds: ['one-earth-eco-118'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'katabatic wind scouring exposed ridges',
        'glacial retreat exposing new substrates',
        'snow accumulation in lee of topography',
        'marine nutrient input from seabirds',
      ],
      sourceIds: ['one-earth-eco-118'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Within Antarctic Specially Protected Areas; minimal direct human impact. Climate warming drives ice-shelf collapse and vegetation expansion. Key for Adélie penguin and snow petrel breeding.',
      sourceIds: ['one-earth-eco-118'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:adelie-penguin',
      'species:antarctic-petrel',
      'species:snow-petrel',
    ],
    countryIds: ['AQ'],
    sources: ['one-earth-eco-118'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:126',
    summary: {
      value:
        'Northeast Antarctic Peninsula Tundra covers the Larsen Coast and Weddell Sea side of the peninsula. The cold, dry climate with persistent sea ice supports sparse fellfield and snowbed communities, with richer vegetation in sheltered coastal valleys and on offshore islands.',
      sourceIds: ['one-earth-eco-126'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Larsen Coast mountains and ice shelves',
        'Weddell Sea pack ice margin',
        'James Ross Island group',
        'glacial troughs and valleys',
      ],
      sourceIds: ['one-earth-eco-126'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Cold maritime Antarctic with persistent sea ice; mean annual -12 to -18°C; precipitation 300–500 mm; strong easterly winds off the Weddell Sea.',
        annualPrecipitationMm: { min: 300, max: 500 },
      },
      sourceIds: ['one-earth-eco-126'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Andreaea and Bryum mosses',
        'Usnea antarctica and Himantormia lichens',
        'Deschampsia antarctica in coastal valleys',
        'Prasiola on ornithogenic soils',
      ],
      sourceIds: ['one-earth-eco-126'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'sea-ice dynamics and polynya formation',
        'ice-shelf collapse and grounding line retreat',
        'volcanic activity on James Ross Island',
        'penguin colony nutrient enrichment',
      ],
      sourceIds: ['one-earth-eco-126'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Larsen A and B ice shelves collapsed 1995/2002; rapid ecosystem change ongoing. ASPAs protect key sites on James Ross Island. Adélie penguin colonies shifting south with ice retreat.',
      sourceIds: ['one-earth-eco-126'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:adelie-penguin',
      'species:emperor-penguin',
      'species:weddell-seal',
    ],
    countryIds: ['AQ'],
    sources: ['one-earth-eco-126'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:127',
    summary: {
      value:
        "Northwest Antarctic Peninsula Tundra covers the Gerlache Strait, Palmer Archipelago, and South Shetland Islands. The mildest climate in Antarctica supports the continent's most extensive terrestrial vegetation, including the only two native vascular plants (Antarctic hair grass and pearlwort) and rich moss banks.",
      sourceIds: ['one-earth-eco-127'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Gerlache Strait fjords and channels',
        'Palmer Archipelago islands',
        'South Shetland Islands (Deception, Livingston, King George)',
        'volcanic Deception Island caldera',
      ],
      sourceIds: ['one-earth-eco-127'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Mild maritime Antarctic; mean annual -3 to -5°C; summer highs 2–5°C; precipitation 400–800 mm; frequent föhn winds.',
        annualPrecipitationMm: { min: 400, max: 800 },
      },
      sourceIds: ['one-earth-eco-127'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Deschampsia antarctica (Antarctic hair grass)',
        'Colobanthus quitensis (Antarctic pearlwort)',
        'Sanionia and Chorisodontium moss banks',
        'Usnea and Cladonia lichens',
        'cyanobacterial mats in streams',
      ],
      sourceIds: ['one-earth-eco-127'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'föhn wind warming and snowmelt',
        'marine vertebrate nutrient transfer',
        'volcanic geothermal activity on Deception',
        'glacier retreat and plant colonization',
      ],
      sourceIds: ['one-earth-eco-127'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Highest human visitation in Antarctica (tourism, research stations). Non-native Poa annua established. ASPAs protect botanical sites. Key for chinstrap and gentoo penguins, fur seals.',
      sourceIds: ['one-earth-eco-127'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:chinstrap-penguin',
      'species:gentoo-penguin',
      'species:antarctic-fur-seal',
    ],
    countryIds: ['AQ'],
    sources: ['one-earth-eco-127'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:129',
    summary: {
      value:
        "Scotia Sea Islands Tundra encompasses the island chain from South Georgia to the South Sandwich Islands across the Scotia Sea. The subantarctic maritime climate supports tussock grasslands, fellfield, and the world's largest penguin and seabird colonies, sustained by the productive Scotia Sea marine ecosystem.",
      sourceIds: ['one-earth-eco-129'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'South Georgia mountains and fjords',
        'South Sandwich Islands volcanic arc',
        'Scotia Sea seamounts and ridges',
        'coastal tussock slopes and beaches',
      ],
      sourceIds: ['one-earth-eco-129'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Subantarctic maritime; mean annual 0–4°C; precipitation 1,000–1,500 mm; strong westerlies; no permanent sea ice.',
        annualPrecipitationMm: { min: 1000, max: 1500 },
      },
      sourceIds: ['one-earth-eco-129'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Poa flabellata (tussock grass)',
        'Acaena magellanica and Festuca grasses',
        'moss and lichen fellfield',
        'kelp forests in nearshore waters',
      ],
      sourceIds: ['one-earth-eco-129'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Antarctic Circumpolar Current productivity',
        'massive seabird and seal nutrient transfer',
        'volcanic disturbance on South Sandwich',
        'glacial retreat on South Georgia',
      ],
      sourceIds: ['one-earth-eco-129'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'South Georgia Marine Protected Area; rodent eradication completed 2018. Pressures: krill fishery competition, climate-driven prey shifts, tourism. Largest king penguin and wandering albatross colonies globally.',
      sourceIds: ['one-earth-eco-129'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:king-penguin',
      'species:wandering-albatross',
      'species:antarctic-fur-seal',
    ],
    countryIds: ['GS', 'AQ'],
    sources: ['one-earth-eco-129'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:130',
    summary: {
      value:
        'South Antarctic Peninsula Tundra covers the southern Palmer Land and Alexander Island coasts on the Bellingshausen Sea side. Persistent sea ice and cold temperatures limit vegetation to sparse moss and lichen fellfield on coastal nunataks, with richer communities in the George VI Sound area.',
      sourceIds: ['one-earth-eco-130'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Palmer Land and Alexander Island mountains',
        'George VI Sound ice shelf',
        'Bellingshausen Sea pack ice',
        'coastal nunataks and valleys',
      ],
      sourceIds: ['one-earth-eco-130'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Cold maritime Antarctic with heavy sea ice; mean annual -10 to -15°C; precipitation 300–600 mm; frequent cyclonic storms.',
        annualPrecipitationMm: { min: 300, max: 600 },
      },
      sourceIds: ['one-earth-eco-130'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Bryum and Ceratodon mosses',
        'Usnea and Ochrolechia lichens',
        'Deschampsia antarctica in George VI Sound',
        'Prasiola on bird cliffs',
      ],
      sourceIds: ['one-earth-eco-130'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'sea-ice persistence and polynyas',
        'George VI Sound ice-shelf dynamics',
        'katabatic drainage from plateau',
        'seabird nutrient input',
      ],
      sourceIds: ['one-earth-eco-130'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Alexander Island ASPAs protect fossil forests and botanical sites. Climate warming reduces sea-ice duration. Adélie and emperor penguin colonies monitored.',
      sourceIds: ['one-earth-eco-130'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:adelie-penguin',
      'species:emperor-penguin',
      'species:antarctic-petrel',
    ],
    countryIds: ['AQ'],
    sources: ['one-earth-eco-130'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:131',
    summary: {
      value:
        'South Orkney Islands Tundra covers the four main islands (Coronation, Signy, Powell, Laurie) and smaller islets in the Scotia Sea. The cold maritime climate with persistent sea ice supports extensive moss banks, the southernmost flowering plants, and major chinstrap and Adélie penguin colonies.',
      sourceIds: ['one-earth-eco-131'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Coronation Island mountains and ice cap',
        'Signy Island ice-free valleys',
        'Powell and Laurie Islands',
        'Scotia Sea pack ice margin',
      ],
      sourceIds: ['one-earth-eco-131'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Cold maritime Antarctic; mean annual -4 to -6°C; summer highs 1–3°C; precipitation 400–700 mm; sea ice present 8–10 months.',
        annualPrecipitationMm: { min: 400, max: 700 },
      },
      sourceIds: ['one-earth-eco-131'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Chorisodontium and Polytrichum moss banks',
        'Deschampsia antarctica and Colobanthus quitensis',
        'Usnea and Cladonia lichen fellfield',
        'Prasiola on ornithogenic sites',
      ],
      sourceIds: ['one-earth-eco-131'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'sea-ice dynamics and polynyas',
        'penguin and seal nutrient enrichment',
        'glacial retreat on Signy Island',
        'strong westerly wind exposure',
      ],
      sourceIds: ['one-earth-eco-131'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Signy Island is an ASPA and long-term ecological research site. Chinstrap penguin populations declining. Non-native species risk from research logistics. Managed under Antarctic Treaty.',
      sourceIds: ['one-earth-eco-131'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:chinstrap-penguin',
      'species:adelie-penguin',
      'species:antarctic-fur-seal',
    ],
    countryIds: ['AQ'],
    sources: ['one-earth-eco-131'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:615',
    summary: {
      value:
        'South American Pacific Mangroves form a discontinuous belt along the Pacific coast from Panama through Colombia and Ecuador to northern Peru. These forests occupy sheltered estuaries, lagoons, and river deltas where tidal exchange and freshwater input create strong salinity gradients.',
      sourceIds: ['one-earth-eco-615', 'one-earth-nt10', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Pacific coastal estuaries and lagoons',
        'river deltas and alluvial plains',
        'barrier islands and tidal creeks',
        'sheltered bays and inlets',
      ],
      sourceIds: ['one-earth-eco-615', 'one-earth-nt10', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical humid to semi-arid with a strong seasonal rainfall gradient; northern sectors are wetter (2,000–4,000 mm), while southern sectors are drier (500–1,500 mm); mean temperatures are 24–28°C.',
        annualPrecipitationMm: { min: 500, max: 4000 },
      },
      sourceIds: ['one-earth-nt10', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Rhizophora mangle (red mangrove)',
        'Avicennia germinans (black mangrove)',
        'Laguncularia racemosa (white mangrove)',
        'Conocarpus erectus (button mangrove)',
        'Rhizophora harrisonii (hybrid mangrove)',
      ],
      sourceIds: ['one-earth-eco-615'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'tidal flooding and salinity gradients',
        'sediment trapping and shoreline stabilization',
        'marine nursery habitat for fish and crustaceans',
        'carbon sequestration in anaerobic soils',
        'storm surge and tsunami buffering',
      ],
      sourceIds: ['one-earth-eco-615', 'one-earth-nt10', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Shrimp aquaculture, coastal development, and pollution have reduced or degraded mangrove habitat. Protected areas include Sanquianga and Ensenada de Utría in Colombia, Churute Mangroves Ecological Reserve in Ecuador, and Tumbes Mangrove National Sanctuary in Peru; protection remains uneven across the ecoregion.',
      sourceIds: ['one-earth-eco-615', 'one-earth-nt10', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-mangrove',
      'species:black-mangrove',
      'species:white-mangrove',
      'species:button-mangrove',
      'species:mangrove-warbler',
      'species:american-crocodile',
    ],
    countryIds: ['PA', 'CO', 'EC', 'PE'],
    sources: ['one-earth-eco-615', 'one-earth-nt10', 'one-earth-nt24'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:459',
    summary: {
      value:
        'Cuban Moist Forests cover the mountain ranges and coastal lowlands of Cuba, the largest island in the Caribbean. This ecoregion harbors the highest plant diversity in the West Indies, with over 6,000 vascular plant species and exceptional endemism in the Sierra Maestra, Nipe-Sagua-Baracoa, and Guamuhaya massifs.',
      sourceIds: ['one-earth-eco-459', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Sierra Maestra and Pico Turquino',
        'Nipe-Sagua-Baracoa Mountains',
        'Guamuhaya (Escambray) Mountains',
        'northern coastal plains and wetlands',
        'southern karst plains and mogotes',
      ],
      sourceIds: ['one-earth-eco-459', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lowland rainforest (Tabebuia, Calophyllum)',
        'montane rainforest (Podocarpus, Cyrilla)',
        'cloud forest (tree ferns, epiphytes)',
        'pine savanna on serpentine soils',
        'coastal mangroves and swamp forests',
      ],
      sourceIds: ['one-earth-eco-459', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'orographic cloud interception and mist capture',
        'hurricane disturbance and gap-phase regeneration',
        'endemic radiations in Gesneria, Cubanthus, and Pinguicula',
        'bat and bird pollination and seed dispersal',
      ],
      sourceIds: ['one-earth-eco-459', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Extensive protected areas (Sierra Maestra, Alejandro de Humboldt, Topes de Collantes). Pressures: historical sugar cane expansion, mining, tourism, invasive species (mongooses, African tulip tree). Highest plant endemism in the Caribbean; 50% of Cuban flora endemic.',
      sourceIds: ['one-earth-eco-459', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['CU'],
    sources: ['one-earth-eco-459', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:468',
    summary: {
      value:
        "Hispaniolan Moist Forests span the central mountain ranges of Haiti and the Dominican Republic, including the Cordillera Central, Sierra de Bahoruco, and Massif de la Hotte. This ecoregion supports the Caribbean's highest peak (Pico Duarte, 3,098 m) and extraordinary amphibian and reptile endemism.",
      sourceIds: ['one-earth-eco-468', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Cordillera Central and Pico Duarte',
        'Sierra de Bahoruco and Massif de la Hotte',
        'Cibao Valley and Lake Enriquillo basin',
        'northern and southern coastal plains',
        'karst limestone plateaus and caves',
      ],
      sourceIds: ['one-earth-eco-468', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lowland moist forest (Swietenia, Calophyllum)',
        'montane broadleaf forest (Weinmannia, Cyrilla)',
        'cloud forest (Weinmannia, epiphytic orchids, bromeliads)',
        'pine forest (Pinus occidentalis) above 2,000 m',
        'dry forest transition on southern slopes',
      ],
      sourceIds: ['one-earth-eco-468', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'extreme orographic rainfall and cloud forest dynamics',
        'amphibian and reptile adaptive radiation (Eleutherodactylus, Anolis)',
        'bird pollination and seed dispersal (trogons, parrots)',
        'karst hydrology and cave ecosystems',
      ],
      sourceIds: ['one-earth-eco-468', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Severe deforestation in Haiti; better protection in Dominican Republic (Jaragua, Sierra de Bahoruco, Valle Nuevo parks). Critical for endemic mammals (solenodons, hutias) and birds (hispaniolan trogon, parrots). Transboundary conservation needed for Cordillera Central and Sierra de Bahoruco.',
      sourceIds: ['one-earth-eco-468', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:hispaniolan-trogon',
      'species:hispaniolan-solenodon',
      'species:hispaniolan-parrot',
    ],
    countryIds: ['HT', 'DO'],
    sources: ['one-earth-eco-468', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:472',
    summary: {
      value:
        'Jamaican Moist Forests cover the interior mountains of Jamaica, including the Blue Mountains (2,256 m) and John Crow Mountains. This oceanic island ecoregion exhibits extraordinary endemism, with over 800 endemic plant species and a unique avifauna shaped by millions of years of isolation.',
      sourceIds: ['one-earth-eco-472', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Blue Mountains and John Crow Mountains',
        'Cockpit Country karst plateau',
        'northern limestone coast and harbors',
        'southern coastal plains and wetlands',
        'volcanic central ridge and valleys',
      ],
      sourceIds: ['one-earth-eco-472', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lowland rainforest (Calophyllum, Terminalia)',
        'montane forest (Podocarpus, Cyrilla, tree ferns)',
        'elfin woodland and cloud forest above 1,500 m',
        'cockpit country dry limestone forest',
        'mangroves and swamp forests on coasts',
      ],
      sourceIds: ['one-earth-eco-472', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'cloud forest mist interception and epiphyte diversity',
        'exceptional avian endemism (streamertail, tody, owl)',
        'Cockpit Country karst hydrology and cave fauna',
        'island biogeography and adaptive radiation',
      ],
      sourceIds: ['one-earth-eco-472', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Blue and John Crow Mountains National Park (UNESCO). Pressures: coffee plantation encroachment, bauxite mining, invasive species (mongooses, rats), climate change. Jamaica has highest number of endemic bird species in Caribbean; critical for Jamaican tody, black-billed parrot, and yellow-billed parrot.',
      sourceIds: ['one-earth-eco-472', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['JM'],
    sources: ['one-earth-eco-472', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:475',
    summary: {
      value:
        'Leeward Islands Moist Forests encompass the northern Lesser Antilles from the Virgin Islands to Dominica. These small, volcanic islands support moist forests on windward slopes and in ravines, with vegetation shaped by trade winds, volcanic soils, and hurricane disturbance.',
      sourceIds: ['one-earth-eco-475', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic peaks (La Soufrière, Mount Liamuiga)',
        'steep windward slopes and ravines',
        'coastal cliffs and black sand beaches',
        'crater lakes and hot springs',
        'coral reefs and seagrass beds offshore',
      ],
      sourceIds: ['one-earth-eco-475', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lowland rainforest (Dacryodes, Sloanea)',
        'montane rainforest (Richeria, Clusia, tree ferns)',
        'elfin woodland on exposed ridges',
        'dry forest and cactus scrub on leeward coasts',
        'coastal mangroves and littoral forest',
      ],
      sourceIds: ['one-earth-eco-475', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'trade wind cloud interception on windward slopes',
        'frequent hurricane disturbance and forest turnover',
        'volcanic soil fertility and succession',
        'inter-island dispersal and speciation',
      ],
      sourceIds: ['one-earth-eco-475', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Small island states with limited land area; forest cover 20–40% remaining. Pressures: tourism development, agriculture, invasive species (green vervet monkeys, lionfish). Regional cooperation through OECS and Caribbean Challenge Initiative. Critical for endemic birds (imperial parrot, forest thrush) and sea turtles.',
      sourceIds: ['one-earth-eco-475', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['FR', 'VI', 'KN', 'MS', 'AG', 'VG'],
    sources: ['one-earth-eco-475', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:495',
    summary: {
      value:
        'Puerto Rican Moist Forests cover the interior mountains of Puerto Rico, including the Luquillo Mountains (El Yunque) and the Central Mountain Range. This U.S. territory ecoregion is famous for the Luquillo Long-Term Ecological Research site and its well-studied tropical forest dynamics.',
      sourceIds: ['one-earth-eco-495', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Luquillo Mountains and El Yunque peak',
        'Central Mountain Range (Cordillera Central)',
        'northern karst belt and mogotes',
        'southern coastal plains and dry forest transition',
        'coastal mangroves and bioluminescent bays',
      ],
      sourceIds: ['one-earth-eco-495', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'tabonuco forest (Dacryodes excelsa) 300–600 m',
        'palo colorado forest (Cyrilla racemiflora) 600–900 m',
        'sierra palm forest (Prestoea montana) 900–1,000 m',
        'elfin woodland above 1,000 m',
        'karst moist forest and coastal wetlands',
      ],
      sourceIds: ['one-earth-eco-495', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Luquillo LTER: hurricane disturbance and forest recovery',
        'tabonuco dominance and mast seeding cycles',
        'coqui frog radiation (Eleutherodactylus spp.)',
        'puerto rican parrot recovery program',
      ],
      sourceIds: ['one-earth-eco-495', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'El Yunque National Forest (only tropical rainforest in USFS system). Forest cover recovered from 6% (1940s) to >50% today. Pressures: urban sprawl, coffee shade conversion, invasive species (African tulip tree, mongoose). Critical for Puerto Rican parrot, sharp-shinned hawk, and coqui frogs.',
      sourceIds: ['one-earth-eco-495', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['PR'],
    sources: ['one-earth-eco-495', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:517',
    summary: {
      value:
        "Windward Islands Moist Forests span the southern Lesser Antilles from Martinique to Grenada. These volcanic islands support lush moist forests on windward slopes, with some of the Caribbean's highest rainfall and most intact montane forests, particularly on Dominica and Saint Lucia.",
      sourceIds: ['one-earth-eco-517', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic peaks (Mount Pelée, Soufrière, Mount Gimie)',
        'deep windward valleys and waterfalls',
        'boiling lakes and fumaroles',
        'black sand beaches and coastal cliffs',
        'coral reefs and marine reserves',
      ],
      sourceIds: ['one-earth-eco-517', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lowland rainforest (Dacryodes, Amanoa, Sloanea)',
        'montane rainforest (Richeria, Clusia, giant tree ferns)',
        'elfin woodland and cloud forest on summits',
        'dry deciduous forest on leeward coasts',
        'coastal mangroves and littoral woodland',
      ],
      sourceIds: ['one-earth-eco-517', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'extreme cloud interception and epiphyte biomass',
        'volcanic disturbance and primary succession',
        'imperial parrot and endemic bird conservation',
        'freshwater shrimp and fish in pristine streams',
      ],
      sourceIds: ['one-earth-eco-517', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Morne Trois Pitons (Dominica) and Pitons (Saint Lucia) UNESCO sites. Highest forest cover in Lesser Antilles (50–70%). Pressures: geothermal development, banana agriculture, invasive species, climate change. Critical for imperial parrot, Saint Lucia parrot, and endemic herpetofauna.',
      sourceIds: ['one-earth-eco-517', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['FR', 'DM', 'LC', 'GD', 'VC'],
    sources: ['one-earth-eco-517', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:530',
    summary: {
      value:
        'Cuban Dry Forests occupy the rain shadow zones of Cuba, including the southern coastal plains, the Guanahacabibes Peninsula, and the Sierra de los Órganos foothills. This ecoregion supports drought-adapted deciduous forests and cactus scrub with high endemism in reptiles and land snails.',
      sourceIds: ['one-earth-eco-530', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'southern coastal plains and Guanahacabibes Peninsula',
        'Sierra de los Órganos foothills and valleys',
        'limestone karst with caves and sinkholes',
        'coastal cliffs and sandy beaches',
      ],
      sourceIds: ['one-earth-eco-530', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'deciduous dry forest (Bursera, Tabebuia, Ceiba)',
        'cactus scrub (Opuntia, Pilosocereus, Dendrocereus)',
        'spiny thickets (Acacia, Mimosa, Randia)',
        'coastal mangrove and saltmarsh transitions',
      ],
      sourceIds: ['one-earth-eco-530', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'deciduous leaf drop and dry-season dormancy',
        'cactus and succulent water storage strategies',
        'land snail and reptile adaptive radiation',
        'hurricane disturbance and dry forest recovery',
      ],
      sourceIds: ['one-earth-eco-530', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Less protected than moist forests; extensive conversion to pasture and sugarcane. Guanahacabibes Peninsula is a Biosphere Reserve. Pressures: tourism development, charcoal production, invasive species. Endemic Cuban crocodile and Cuban rock iguana at risk.',
      sourceIds: ['one-earth-eco-530', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['CU', 'KY'],
    sources: ['one-earth-eco-530', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:532',
    summary: {
      value:
        "Hispaniolan Dry Forests cover the rain shadow valleys and coastal lowlands of Haiti and the Dominican Republic, including the Cul-de-Sac Plain, Valle de Neiba, and the arid southern peninsula. This ecoregion is a stronghold for the critically endangered Ricord's iguana and Hispaniolan solenodon.",
      sourceIds: ['one-earth-eco-532', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Cul-de-Sac Plain and Valle de Neiba',
        'southern peninsula (Barahona) and Sierra de Bahoruco foothills',
        'Lake Enriquillo basin (below sea level)',
        'coastal salt flats and lagoons',
        'limestone cliffs and karst formations',
      ],
      sourceIds: ['one-earth-eco-532', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'thorny dry forest (Prosopis, Acacia, Capparis)',
        'cactus scrub (Consolea, Opuntia, Pilosocereus)',
        'dry deciduous forest (Bursera, Tabebuia, Swietenia)',
        'hypersaline lagoon and saltmarsh margins',
      ],
      sourceIds: ['one-earth-eco-532', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'extreme aridity and halophyte adaptations',
        'Lake Enriquillo hydrology and crocodile ecology',
        'iguana and solenodon foraging in dry forest',
        'seasonal deciduous leaf flush with rains',
      ],
      sourceIds: ['one-earth-eco-532', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "One of the most threatened Caribbean ecoregions; >90% cleared for agriculture and charcoal. Lake Enriquillo and Isla Cabritos National Park protect core areas. Critical for Ricord's iguana, rhinoceros iguana, and Hispaniolan solenodon. Transboundary conservation needed between Haiti and DR.",
      sourceIds: ['one-earth-eco-532', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:ricords-iguana',
      'species:rhinoceros-iguana',
      'species:hispaniolan-solenodon',
      'species:hispaniolan-hutia',
    ],
    countryIds: ['HT', 'DO'],
    sources: ['one-earth-eco-532', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:535',
    summary: {
      value:
        'Jamaican Dry Forests occupy the southern coastal plains and rain shadow of the Blue Mountains, including the Hellshire Hills, Portland Bight, and southern Clarendon. This ecoregion supports the highest density of endemic land snails in Jamaica and unique dry forest communities on limestone.',
      sourceIds: ['one-earth-eco-535', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Hellshire Hills and Portland Bight limestone plateau',
        'southern Clarendon and St. Catherine plains',
        'Blue Mountains rain shadow and foothills',
        'coastal mangroves and seagrass beds',
        'limestone caves and sinkholes',
      ],
      sourceIds: ['one-earth-eco-535', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dry limestone forest (Bursera, Thouinia, Coccoloba)',
        'thorny woodland (Acacia, Pithecellobium, Zanthoxylum)',
        'cactus and agave scrub (Opuntia, Agave, Pilosocereus)',
        'coastal mangroves and saline lagoons',
      ],
      sourceIds: ['one-earth-eco-535', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'limestone karst hydrology and cave ecosystems',
        'land snail adaptive radiation (over 500 endemic species)',
        'Jamaican iguana and dry forest reptile ecology',
        'seasonal drought and fire dynamics',
      ],
      sourceIds: ['one-earth-eco-535', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Hellshire Hills and Portland Bight Protected Area. Pressures: bauxite mining, charcoal production, squatting, invasive species (mongooses, feral goats). Critically endangered Jamaican iguana survives only in Hellshire Hills. Highest land snail endemism in Caribbean.',
      sourceIds: ['one-earth-eco-535', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['JM'],
    sources: ['one-earth-eco-535', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:537',
    summary: {
      value:
        'Lesser Antillean Dry Forests span the leeward coasts and rain shadow zones of the Lesser Antilles from the Virgin Islands to Grenada. These small island dry forests exhibit high beta diversity between islands, with each island supporting unique endemic plant and reptile communities.',
      sourceIds: ['one-earth-eco-537', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic and limestone islands (Virgin Islands to Grenada)',
        'leeward coastal plains and dry valleys',
        'limestone cliffs and coral rubble shores',
        'salt ponds and coastal lagoons',
        'offshore cays and seagrass beds',
      ],
      sourceIds: ['one-earth-eco-537', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'deciduous dry forest (Bursera, Tabebuia, Lonchocarpus)',
        'cactus and acacia scrub (Opuntia, Acacia, Randia)',
        'littoral woodland (Coccoloba, Suriana, Thespesia)',
        'salt-tolerant grasslands and saline flats',
      ],
      sourceIds: ['one-earth-eco-537', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'inter-island dispersal and speciation in reptiles',
        'seabird nutrient transfer to dry forest',
        'hurricane disturbance and dry forest resilience',
        'salt spray tolerance and coastal adaptation',
      ],
      sourceIds: ['one-earth-eco-537', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Most cleared ecoregion in Lesser Antilles; <10% original cover remains. Pressures: tourism, grazing, invasive species (goats, rats), climate change. Regional conservation through OECS and Critical Ecosystem Partnership Fund. Critical for endemic iguanas (Iguana delicatissima, Cyclura spp.) and dry forest birds.',
      sourceIds: ['one-earth-eco-537', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['AG', 'MS', 'BQ', 'AI'],
    sources: ['one-earth-eco-537', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:543',
    summary: {
      value:
        'Puerto Rican Dry Forests occupy the southwestern rain shadow of the Central Mountain Range, including the Guánica Dry Forest (UNESCO Biosphere Reserve), the Cabo Rojo salt flats, and the southern coastal plains. This is the best-studied tropical dry forest in the Caribbean, with the Guánica LTER providing decades of ecological data.',
      sourceIds: ['one-earth-eco-543', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Guánica Dry Forest and Biosphere Reserve',
        'Cabo Rojo salt flats and lagoons',
        'southwestern coastal plains and hills',
        'Central Mountain Range rain shadow foothills',
        'coastal mangroves and bioluminescent bays',
      ],
      sourceIds: ['one-earth-eco-543', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'deciduous dry forest (Bursera, Exostema, Krugiodendron)',
        'thorny scrub (Acacia, Prosopis, Capparis, Randia)',
        'cactus scrub (Pilosocereus, Harrisia, Melocactus)',
        'mangroves and saltmarsh at Cabo Rojo',
      ],
      sourceIds: ['one-earth-eco-543', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Guánica LTER: dry forest phenology and hurricane recovery',
        'deciduous brevi-deciduous leaf exchange strategies',
        'Puerto Rican crested toad breeding in temporary pools',
        'dry forest bird communities and seed dispersal',
      ],
      sourceIds: ['one-earth-eco-543', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Guánica Biosphere Reserve and Dry Forest Reserve protect ~4,000 ha. Forest cover stable but fragmented. Pressures: urban expansion (Mayagüez, Ponce), tourism, invasive species (mongooses, African bees). Successful reintroduction of Puerto Rican crested toad. Key for yellow-shouldered blackbird and Puerto Rican nightjar.',
      sourceIds: ['one-earth-eco-543', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['PR'],
    sources: ['one-earth-eco-543', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:552',
    summary: {
      value:
        'Bahamian Pineyards cover the pine-dominated lowlands of the Bahamas archipelago, including Grand Bahama, Abaco, Andros, and New Providence. This ecoregion represents the northernmost tropical pine forests in the Caribbean, dominated by Caribbean pine (Pinus caribaea) on limestone substrates with a distinctive fire-maintained savanna-woodland mosaic.',
      sourceIds: ['one-earth-eco-552', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'limestone lowlands and karst plains',
        'pine savanna and woodland mosaic',
        'blue holes and freshwater lenses',
        'coastal mangroves and tidal creeks',
        'coral rubble shores and sand flats',
      ],
      sourceIds: ['one-earth-eco-552', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Pinus caribaea var. bahamensis (Caribbean pine)',
        'palm savanna (Thrinax, Coccothrinax)',
        'coppice hardwood understory (Metopium, Bursera)',
        'coastal mangrove and saltmarsh transitions',
      ],
      sourceIds: ['one-earth-eco-552', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'fire-maintained pine savanna dynamics',
        'limestone karst hydrology and blue hole ecology',
        'freshwater lens dynamics on small islands',
        'hurricane disturbance and pine regeneration',
      ],
      sourceIds: ['one-earth-eco-552', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "Abaco and Andros national parks protect core areas. Pressures: logging, fire suppression, invasive species (feral cats, raccoons), sea-level rise. Key for Bahama warbler, Bahama swallow, and Kirtland's warbler wintering habitat.",
      sourceIds: ['one-earth-eco-552', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['BS', 'TC'],
    sources: ['one-earth-eco-552', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:554',
    summary: {
      value:
        'Cuban Pine Forests occupy the pine-dominated serpentine soils of eastern Cuba, including the Nipe-Sagua-Baracoa and Sierra Maestra massifs. This ecoregion supports endemic Pinus cubensis and Pinus tropicalis on ultramafic substrates, with high plant endemism in the Sierra Cristal and Nipe Plateau.',
      sourceIds: ['one-earth-eco-554', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Sierra Cristal and Nipe Plateau serpentine outcrops',
        'Sierra Maestra and Gran Piedra volcanic peaks',
        'serpentine-derived lateritic soils',
        'montane cloud forest transitions',
        'coastal lowland transitions to moist forest',
      ],
      sourceIds: ['one-earth-eco-554', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Pinus cubensis on serpentine soils',
        'Pinus tropicalis on volcanic substrates',
        'serpentine endemic shrublands (Shaferochrysa, Rondeletia)',
        'cloud forest transitions (Weinmannia, Cyrilla)',
        'gallery forests along streams',
      ],
      sourceIds: ['one-earth-eco-554', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'serpentine soil endemic plant radiation',
        'pine fire ecology and regeneration dynamics',
        'cloud interception and mist capture on ridges',
        'endemic bird and reptile associations',
      ],
      sourceIds: ['one-earth-eco-554', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "Sierra Cristal and Alejandro de Humboldt National Parks protect core areas. Pressures: nickel and cobalt mining on serpentine, historical logging, fire suppression. Cuba's only endemic pines (P. cubensis, P. tropicalis) are conservation priorities. Critical for Cuban solenodon, ivory-billed woodpecker (possibly extinct), and endemic flora.",
      sourceIds: ['one-earth-eco-554', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['CU'],
    sources: ['one-earth-eco-554', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:555',
    summary: {
      value:
        "Hispaniolan Pine Forests cover the high-elevation pine zones of the Cordillera Central, Sierra de Bahoruco, and Massif de la Hotte in Haiti and the Dominican Republic. Pinus occidentalis dominates above 1,500 m, forming the Caribbean's highest elevation pine forests with distinct avian and plant endemism.",
      sourceIds: ['one-earth-eco-555', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Cordillera Central above 1,500 m (Pico Duarte 3,098 m)',
        'Sierra de Bahoruco and Massif de la Hotte pine zones',
        'alpine grasslands and páramo-like vegetation above treeline',
        'karst limestone and volcanic substrate transitions',
        'headwater streams of major rivers (Yaque, Artibonite)',
      ],
      sourceIds: ['one-earth-eco-555', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Pinus occidentalis (Hispaniolan pine) dominant',
        'broadleaf cloud forest transitions (Weinmannia, Cyrilla)',
        'alpine grassland and páramo-like vegetation above 2,800 m',
        'serpentine endemic communities on ultramafic outcrops',
      ],
      sourceIds: ['one-earth-eco-555', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'high-elevation pine fire ecology and regeneration',
        'cloud forest mist interception and páramo hydrology',
        'endemic bird radiation (crossbill, warbler, trogon)',
        'headwater stream hydrology for major rivers',
      ],
      sourceIds: ['one-earth-eco-555', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Valle Nuevo, Sierra de Bahoruco, and José del Carmen Ramírez National Parks protect core areas. Pressures: charcoal production, agricultural encroachment, fire suppression, climate-driven treeline shift. Transboundary conservation needed for Cordillera Central and Sierra de Bahoruco. Critical for Hispaniolan crossbill, white-winged warbler, and pine-endemic flora.',
      sourceIds: ['one-earth-eco-555', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['HT', 'DO'],
    sources: ['one-earth-eco-555', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:579',
    summary: {
      value:
        "Cuban Wetlands cover the extensive wetland complexes of Cuba, including the Zapata Swamp (the largest wetland in the Caribbean), the Lanier Swamp, and numerous coastal lagoons and marshes. This ecoregion supports the Caribbean's largest populations of Cuban crocodile, American flamingo, and numerous endemic bird species.",
      sourceIds: ['one-earth-eco-579', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Zapata Swamp (Ciénaga de Zapata)',
        'Lanier Swamp on Isle of Youth',
        'coastal lagoons and mangrove-fringed bays',
        'limestone karst with freshwater springs',
        'tidal flats and salt marshes',
      ],
      sourceIds: ['one-earth-eco-579', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'sawgrass marshes (Cladium jamaicense)',
        'cattail and bulrush (Typha, Scirpus)',
        'mangrove fringes (Rhizophora, Avicennia)',
        'palm savanna (Copernicia, Thrinax)',
        'swamp forest (Annona, Tabebuia) on hummocks',
      ],
      sourceIds: ['one-earth-eco-579', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'seasonal flood pulse and sheet flow dynamics',
        'peat accumulation and carbon sequestration',
        'flamingo and waterbird breeding colonies',
        'crocodile nesting and thermal ecology',
        'karst hydrology and freshwater lens dynamics',
      ],
      sourceIds: ['one-earth-eco-579', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Zapata Swamp is a Ramsar site and Biosphere Reserve; largest protected wetland in Caribbean. Pressures: drainage for agriculture, invasive species (catfish, African tilapia), climate-driven salinization, tourism. Critical for Cuban crocodile, Zapata wren, Zapata rail, and American flamingo.',
      sourceIds: ['one-earth-eco-579', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['CU'],
    sources: ['one-earth-eco-579', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:580',
    summary: {
      value:
        "Enriquillo Wetlands encompass the hypersaline Lake Enriquillo basin in the Dominican Republic and Haiti, the lowest point in the Caribbean at -46 m below sea level. This unique wetland supports the world's largest population of American crocodile in a hypersaline lake, along with endemic iguana and bird species.",
      sourceIds: ['one-earth-eco-580', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Lake Enriquillo hypersaline lake (-46 m)',
        'Lake Azuéi (Etang Saumâtre) in Haiti',
        'surrounding xeric shrublands and cactus scrub',
        'alluvial fans and alluvial plains',
        'hot springs and sulfur vents',
      ],
      sourceIds: ['one-earth-eco-580', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'halophytic shrublands (Batis, Sesuvium, Salicornia)',
        'cactus scrub (Consolea, Opuntia, Pilosocereus)',
        'dry forest remnants (Prosopis, Acacia)',
        'aquatic macrophytes (Ruppia, Potamogeton) in lake margins',
      ],
      sourceIds: ['one-earth-eco-580', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'hypersaline lake ecology and crocodile osmoregulation',
        'lake level fluctuations driven by rainfall and evaporation',
        'iguana foraging on cactus and halophytes',
        'flamingo filter-feeding in hypersaline waters',
        'tectonic subsidence and lake basin evolution',
      ],
      sourceIds: ['one-earth-eco-580', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "Lake Enriquillo and Isla Cabritos National Park; Lake Azuéi in Haiti. Rising lake levels since 2000s have flooded habitats and communities. Pressures: agricultural encroachment, charcoal production, climate-driven lake expansion. Critical for American crocodile, rhinoceros iguana, Ricord's iguana, and Caribbean flamingo.",
      sourceIds: ['one-earth-eco-580', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['DO', 'HT'],
    sources: ['one-earth-eco-580', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:599',
    summary: {
      value:
        'Caribbean Shrublands span the arid coastal zones and rain shadow areas of the Greater and Lesser Antilles, including the southern coasts of Cuba, Hispaniola, Jamaica, Puerto Rico, and the Leeward and Windward Islands. This ecoregion comprises xeric shrublands, cactus scrub, and dry thorn woodlands adapted to low rainfall and high evaporation.',
      sourceIds: ['one-earth-eco-599', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'arid coastal plains and rain shadow valleys',
        'limestone cliffs and karst plateaus',
        'coral rubble shores and sandy beaches',
        'salt flats and coastal lagoons',
        'offshore cays and dry islets',
      ],
      sourceIds: ['one-earth-eco-599', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'thorny xerophytic scrub (Prosopis, Acacia, Capparis)',
        'cactus scrub (Opuntia, Pilosocereus, Melocactus, Consolea)',
        'succulent coastal scrub (Sesuvium, Batis, Atriplex)',
        'dry thorn woodland (Bursera, Haematoxylum, Guaiacum)',
        'littoral halophytic communities',
      ],
      sourceIds: ['one-earth-eco-599', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'extreme drought adaptations and CAM photosynthesis',
        'salt spray and wind shaping coastal vegetation',
        'sea turtle nesting on arid beaches',
        'iguana and reptile thermoregulation in xeric habitats',
        'seasonal pulse dynamics with rare rainfall events',
      ],
      sourceIds: ['one-earth-eco-599', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Widespread on arid coasts; many areas unprotected. Pressures: coastal tourism, charcoal production, goat grazing, invasive species. Key protected areas: Jaragua National Park (DR), Guánica Dry Forest (PR). Critical for endemic iguanas (Cyclura spp.), dry forest birds, and sea turtles.',
      sourceIds: ['one-earth-eco-599', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: [
      'FR',
      'BB',
      'AG',
      'CW',
      'VI',
      'DM',
      'NL',
      'VG',
      'AI',
      'SX',
      'MF',
      'AW',
      'VC',
      'KN',
      'MS',
      'LC',
      'GD',
    ],
    sources: ['one-earth-eco-599', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:600',
    summary: {
      value:
        'Cuban Cactus Scrub occupies the most arid regions of southeastern Cuba, including the Guantánamo Bay area, the Sierra del Cristal foothills, and the Maisí Peninsula. This ecoregion represents the extreme xeric end of the Caribbean gradient, with dense columnar cactus stands and exceptional reptile endemism.',
      sourceIds: ['one-earth-eco-600', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Guantánamo Bay and southeastern coastal plains',
        'Maisí Peninsula limestone terraces',
        'Sierra del Cristal and Sierra Maestra rain shadow',
        'coastal cliffs and marine terraces',
        'semi-desert valleys and dry riverbeds',
      ],
      sourceIds: ['one-earth-eco-600', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'columnar cactus forest (Dendrocereus, Pilosocereus, Cereus)',
        'agave and succulent rosettes (Agave, Furcraea)',
        'xeric shrubland (Prosopis, Capparis, Randia)',
        'biological soil crusts (cyanobacteria, lichens)',
      ],
      sourceIds: ['one-earth-eco-600', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'extreme water storage and CAM metabolism in cacti',
        'biological soil crust nitrogen fixation',
        'reptile and invertebrate xeric adaptations',
        'fog and dew capture by cactus spines',
      ],
      sourceIds: ['one-earth-eco-600', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Limited protection; mostly in Guantánamo Naval Base area and Maisí Peninsula. Pressures: overgrazing, charcoal production, climate aridification. Exceptional Cuban endemic flora (Agave, Melocactus, Leptocereus) and reptiles (Cuban rock iguana, Cuban boa).',
      sourceIds: ['one-earth-eco-600', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    countryIds: ['CU'],
    sources: ['one-earth-eco-600', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:612',
    summary: {
      value:
        'Bahamian-Antillean Mangroves fringe the coastlines of the Bahamas, Cuba, Hispaniola, Jamaica, Puerto Rico, and the Turks & Caicos, forming the most extensive mangrove system in the Caribbean. These mangroves occupy sheltered lagoons, tidal creeks, and estuaries, with the Bahamas archipelago hosting the largest contiguous stands.',
      sourceIds: ['one-earth-eco-612', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Bahamas archipelago tidal creeks and flats',
        'Cuban northern coast and Jardines de la Reina',
        'Hispaniolan north coast and Samaná Bay',
        'Jamaican south coast and Portland Bight',
        'Puerto Rican bioluminescent bays and estuaries',
      ],
      sourceIds: ['one-earth-eco-612', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Rhizophora mangle (red mangrove) seaward fringe',
        'Avicennia germinans (black mangrove) landward',
        'Laguncularia racemosa (white mangrove) transition',
        'Conocarpus erectus (button mangrove) upland margin',
        'Rhizophora harrisonii (hybrid) in mixed stands',
      ],
      sourceIds: ['one-earth-eco-612', 'one-earth-nt26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'tidal inundation and salinity zonation',
        'marine nursery for reef fish and crustaceans',
        'carbon sequestration in anaerobic peat soils',
        'storm surge attenuation and coastal protection',
        'seabird and waterbird rookery habitat',
      ],
      sourceIds: ['one-earth-eco-612', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Extensive in Bahamas (Andros, Abaco, Grand Bahama) and Cuba (Jardines de la Reina). Pressures: coastal development, shrimp aquaculture, pollution, sea-level rise, hurricane damage. Protected in Bahamas National Parks, Cuban National Park System. Critical for bonefish, permit, tarpon fisheries and migratory shorebirds.',
      sourceIds: ['one-earth-eco-612', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-mangrove',
      'species:black-mangrove',
      'species:white-mangrove',
      'species:button-mangrove',
      'species:american-flamingo',
    ],
    countryIds: [
      'CU',
      'BS',
      'US',
      'DO',
      'HT',
      'JM',
      'PR',
      'FR',
      'KN',
      'TC',
      'KY',
      'VC',
      'BL',
      'VI',
    ],
    sources: ['one-earth-eco-612', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:454',
    summary: {
      value:
        "Chocó-Darién Moist Forests extend from eastern Panama through Colombia's Pacific coast to northwestern Ecuador, forming one of the world's wettest and most biodiverse lowland rainforests. This ecoregion includes the Darién Gap and the Atrato River basin, with exceptional endemism in amphibians, birds, and plants.",
      sourceIds: ['one-earth-eco-454', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Darién Gap and Serranía del Darién',
        'Atrato River floodplain and wetlands',
        'Baudó Mountains and Pacific coastal range',
        'Bajo Atrato floodplains and swamps',
        'Pacific coastal mangroves and beaches',
      ],
      sourceIds: ['one-earth-eco-454', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Super-humid tropical with 4,000–8,000 mm annual rainfall; no dry season; mean annual 24–26°C; constant cloud cover and high humidity.',
        annualPrecipitationMm: { min: 4000, max: 8000 },
      },
      sourceIds: ['one-earth-eco-454', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lowland rainforest (Ceiba, Cavanillesia, Brosimum)',
        'palm-dominated swamps (Jessenia, Socratea, Mauritia)',
        'montane forest transitions (Cedrela, Weinmannia)',
        'riverine gallery forests (Ficus, Inga)',
        'coastal mangroves (Rhizophora, Avicennia)',
      ],
      sourceIds: ['one-earth-eco-454', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'extreme rainfall and cloud forest interception',
        'river flood pulse and nutrient cycling',
        'exceptional amphibian and reptile endemism',
        'large mammal corridors (jaguar, tapir, peccary)',
        'indigenous territory stewardship',
      ],
      sourceIds: ['one-earth-eco-454', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "Darién National Park (UNESCO) and Los Katíos protect core areas. Pressures: highway completion (Pan-American), illegal logging, gold mining, coca cultivation, cattle ranching. Critical for harpy eagle, jaguar, Baird's tapir, and hundreds of endemic species.",
      sourceIds: ['one-earth-eco-454', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    countryIds: ['PA', 'CO'],
    sources: ['one-earth-eco-454', 'one-earth-nt24'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:461',
    summary: {
      value:
        'Eastern Panamanian Montane Forests cover the Serranía de San Blas, Serranía del Darién, and Cordillera de Juradó in eastern Panama. These isolated cloud forests harbor exceptional endemism, with many species found only on individual peaks above 1,000 m.',
      sourceIds: ['one-earth-eco-461', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Serranía de San Blas and Cordillera de Juradó',
        'cloud forest ridges above 1,000 m',
        'steep volcanic and sedimentary slopes',
        'headwater streams of Caribbean rivers',
        'paramo-like vegetation on highest peaks',
      ],
      sourceIds: ['one-earth-eco-461', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical montane with persistent cloud cover; 3,000–5,000 mm annual rainfall; mean annual 12–18°C; frequent mist and drizzle.',
        annualPrecipitationMm: { min: 3000, max: 5000 },
      },
      sourceIds: ['one-earth-eco-461', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'cloud forest (Weinmannia, Clusia, Oreopanax)',
        'elfin woodland on exposed ridges',
        'epiphyte-laden canopy (orchids, bromeliads, ferns)',
        'bamboo thickets (Chusquea) in clearings',
        'terrestrial bromeliads and heliconias',
      ],
      sourceIds: ['one-earth-eco-461', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'cloud interception and horizontal precipitation',
        'high beta diversity between isolated peaks',
        'hummingbird and bat pollination networks',
        'stream headwater regulation',
      ],
      sourceIds: ['one-earth-eco-461', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Partially protected in Darién and Chagres National Parks. Pressures: hydroelectric dams, road expansion, climate-driven cloud base lifting. Exceptional endemism in frogs (Pristimantis), salamanders (Bolitoglossa), and birds (tangara, chlorospingus).',
      sourceIds: ['one-earth-eco-461', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    countryIds: ['PA', 'CO'],
    sources: ['one-earth-eco-461', 'one-earth-nt24'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:470',
    summary: {
      value:
        'Isthmian-Atlantic Moist Forests cover the Caribbean slope of Panama and Costa Rica, from the San Blas range to the Tortuguero plains. This ecoregion forms a continuous moist forest corridor from the Panamanian isthmus to the Nicaraguan lowlands, with exceptional lowland rainforest diversity.',
      sourceIds: ['one-earth-eco-470', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Caribbean lowlands and coastal plains',
        'San Blas and Cordillera Central foothills',
        'Tortuguero canals and flooded forests',
        'San Juan and Sixaola river basins',
        'coastal lagoons and mangrove fringes',
      ],
      sourceIds: ['one-earth-eco-470', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lowland rainforest (Pentaclethra, Dipteryx, Carapa)',
        'swamp forest (Pterocarpus, Prioria, Virola)',
        'palm swamps (Raphia, Manicaria, Socratea)',
        'riparian forest (Ficus, Cecropia, Inga)',
        'coastal mangroves and raffia palms',
      ],
      sourceIds: ['one-earth-eco-470', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Caribbean trade wind moisture interception',
        'river flood pulse and nutrient transport',
        'mixed-species flock foraging dynamics',
        'jaguar and tapir corridor connectivity',
        'sea turtle nesting on Caribbean beaches',
      ],
      sourceIds: ['one-earth-eco-470', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'La Amistad International Park (UNESCO) and Tortuguero National Park protect core areas. Pressures: banana and pineapple expansion, African oil palm, hydroelectric dams, road fragmentation. Critical corridor for Mesoamerican Biological Corridor initiative.',
      sourceIds: ['one-earth-eco-470', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    countryIds: ['PA', 'NI', 'CR'],
    sources: ['one-earth-eco-470', 'one-earth-nt24'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:471',
    summary: {
      value:
        'Isthmian-Pacific Moist Forests cover the Pacific slope of Costa Rica and western Panama, from the Osa Peninsula to the Azuero Peninsula. This ecoregion includes the last extensive lowland Pacific rainforests in Central America, with strong seasonal rainfall gradient.',
      sourceIds: ['one-earth-eco-471', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Osa Peninsula and Golfo Dulce',
        'Fila Costeña coastal range',
        'Central Valley rain shadow transition',
        'Azuero Peninsula dry forest transition',
        'Golfo de Chiriquí and Coiba Island',
      ],
      sourceIds: ['one-earth-eco-471', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lowland rainforest (Caryocar, Couma, Vochysia)',
        'deciduous moist forest (Bombacopsis, Enterolobium)',
        'riparian gallery forest (Tabebuia, Pithecellobium)',
        'mangrove and estuarine complexes',
        'coastal strand and beach vegetation',
      ],
      sourceIds: ['one-earth-eco-471', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'strong wet/dry season phenology and flowering',
        'vertical migration of frugivores (toucans, bellbirds)',
        'mangrove-estuary-reef connectivity',
        'scarlet macaw and great curassow seed dispersal',
      ],
      sourceIds: ['one-earth-eco-471', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Corcovado and Piedras Blancas National Parks protect Osa Peninsula. Pressures: African oil palm expansion, tourism development, gold mining, hunting. Osa Peninsula holds 2.5% of global biodiversity in <0.001% of land area.',
      sourceIds: ['one-earth-eco-471', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    countryIds: ['CR', 'PA'],
    sources: ['one-earth-eco-471', 'one-earth-nt24'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:478',
    summary: {
      value:
        'Magdalena-Urabá Moist Forests cover the Caribbean lowlands of northern Colombia, from the Gulf of Urabá to the Magdalena River delta. This ecoregion includes the Serranía de Abibe, Sinú River wetlands, and the Ciénaga Grande de Santa Marta, forming a critical wetland-forest mosaic.',
      sourceIds: ['one-earth-eco-478', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Gulf of Urabá and Serranía de Abibe',
        'Sinú and San Jorge river floodplains',
        'Ciénaga Grande de Santa Marta lagoon complex',
        'Magdalena River delta and distributaries',
        'coastal mangroves and barrier islands',
      ],
      sourceIds: ['one-earth-eco-478', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lowland rainforest (Cavanillesia, Ceiba, Cariniana)',
        'flooded forest (Mauritia, Euterpe, Symphonia)',
        'mangrove and coastal lagoon margins',
        'savanna and gallery forest on higher ground',
        'freshwater marsh and herbaceous wetlands',
      ],
      sourceIds: ['one-earth-eco-478', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'river flood pulse and sediment deposition',
        'mangrove-lagoon-estuary connectivity',
        'migratory bird stopover (shorebirds, waterfowl)',
        'manatee and river dolphin habitat',
        'sediment accretion and delta dynamics',
      ],
      sourceIds: ['one-earth-eco-478', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Los Katíos, Paramillo, and Sierra Nevada parks protect fragments. Pressures: cattle ranching, oil palm, gold mining, hydroelectric dams, illegal crops. Ciénaga Grande is a Ramsar site. Critical for cotton-top tamarin, blue-billed curassow, and Caribbean manatee.',
      sourceIds: ['one-earth-eco-478', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    countryIds: ['CO'],
    sources: ['one-earth-eco-478', 'one-earth-nt24'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:506',
    summary: {
      value:
        'Talamancan Montane Forests span the Cordillera de Talamanca across Costa Rica and western Panama, including Chirripó (3,820 m), the highest peak in Central America. This ecoregion encompasses cloud forests, páramo, and subalpine zones with exceptional endemism.',
      sourceIds: ['one-earth-eco-506', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Cordillera de Talamanca and Cerro Chirripó',
        'páramo and subalpine zones above 3,000 m',
        'cloud forest on Caribbean and Pacific slopes',
        'glacial cirques and moraines (Chirripó)',
        'headwaters of major rivers (Térraba, Changuinola)',
      ],
      sourceIds: ['one-earth-eco-506', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'cloud forest (Quercus, Chusquea, Weinmannia)',
        'subalpine páramo (Espeletia, Hypericum, Senecio)',
        'bamboo thickets (Chusquea) at treeline',
        'elfin forest on wind-exposed ridges',
        'bog and wetland complexes in valleys',
      ],
      sourceIds: ['one-earth-eco-506', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'cloud forest water capture and stream regulation',
        'páramo endemic plant radiation (Espeletia, Senecio)',
        'quetzal and hummingbird pollination networks',
        'glacial legacy and climate change sentinel',
      ],
      sourceIds: ['one-earth-eco-506', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'La Amistad International Park (UNESCO) and Chirripó National Park protect the core. Pressures: climate-driven páramo loss, tourism pressure, hydroelectric projects. Highest endemism in Central America for amphibians, birds, and plants. Resplendent quetzal stronghold.',
      sourceIds: ['one-earth-eco-506', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    countryIds: ['CR', 'PA'],
    sources: ['one-earth-eco-506', 'one-earth-nt24'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:541',
    summary: {
      value:
        'Panamanian Dry Forests occupy the Pacific coastal plain and foothills of central Panama, from the Bay of Panama to the Azuero Peninsula. This ecoregion represents the driest forests in Panama, with a 5–6 month dry season and deciduous vegetation on clay and alluvial soils.',
      sourceIds: ['one-earth-eco-541', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Pacific coastal plain and Bay of Panama',
        'Azuero Peninsula hills and valleys',
        'seasonal river valleys (Parita, Santa María)',
        'mangrove-lined estuaries and mudflats',
        'coastal cliffs and rocky headlands',
      ],
      sourceIds: ['one-earth-eco-541', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'deciduous dry forest (Bombacopsis, Enterolobium, Cavanillesia)',
        'thorny woodland (Acacia, Prosopis, Mimosa)',
        'cactus and agave scrub (Stenocereus, Agave)',
        'gallery forest along permanent streams',
        'mangrove fringes on estuaries',
      ],
      sourceIds: ['one-earth-eco-541', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'deciduous leaf flush with onset of rains',
        "migratory raptor concentrations (Swainson's hawk, broad-winged hawk)",
        'sea turtle nesting on Pacific beaches',
        'dry forest pollination by bats and bees',
      ],
      sourceIds: ['one-earth-eco-541', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Less than 5% of original extent remains; highly fragmented by cattle ranching and agriculture. Sarigua National Park protects degraded dry forest. Pressures: cattle ranching, rice cultivation, urban expansion, fire. Critical for Azuero parakeet, Azuero spider monkey, and dry forest endemics.',
      sourceIds: ['one-earth-eco-541', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    countryIds: ['PA'],
    sources: ['one-earth-eco-541', 'one-earth-nt24'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:604',
    summary: {
      value:
        "Malpelo Island Xeric Scrub covers the remote volcanic island of Malpelo, 500 km off Colombia's Pacific coast. This tiny oceanic island supports a unique xeric scrub community on volcanic rock, with massive seabird colonies and endemic reptiles.",
      sourceIds: ['one-earth-eco-604', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic island (350 m max elevation)',
        'steep cliffs and rocky shores',
        'guano-enriched coastal slopes',
        'sea caves and underwater cliffs',
        'surrounding pelagic waters',
      ],
      sourceIds: ['one-earth-eco-604', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'xeric scrub (Croton, Tournefortia, Portulaca)',
        'succulent herbs (Portulaca, Sesuvium)',
        'lichens and cyanobacterial crusts on rock',
        'no native trees or woody vegetation',
      ],
      sourceIds: ['one-earth-eco-604', 'one-earth-nt24'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'seabird guano nutrient enrichment',
        'marine nutrient subsidy to terrestrial ecosystem',
        'endemic lizard and crab populations',
        'marine iguana foraging in intertidal zone',
      ],
      sourceIds: ['one-earth-eco-604', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Malpelo Fauna and Flora Sanctuary (UNESCO) protects the island and 857,000 ha marine reserve. No permanent human population. Pressures: illegal fishing, climate change, invasive species. Largest masked booby and Nazca booby colonies in Eastern Pacific.',
      sourceIds: ['one-earth-eco-604', 'one-earth-nt24'],
      derivation: 'authored-summary',
    },
    countryIds: ['CO'],
    sources: ['one-earth-eco-604', 'one-earth-nt24'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:613',
    summary: {
      value:
        'Mesoamerican Gulf-Caribbean Mangroves fringe the Gulf of Mexico and Caribbean coasts from southern Mexico to northern Colombia, including the Yucatán Peninsula, Belize, Guatemala, Honduras, Nicaragua, and Costa Rica. This ecoregion forms the most extensive mangrove system in the Mesoamerican region, with the largest stands in Belize and the Yucatán.',
      sourceIds: ['one-earth-eco-613', 'one-earth-nt24', 'one-earth-nt25', 'one-earth-nt27'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Yucatán Peninsula coastal lagoons (Celestún, Ría Lagartos)',
        'Belize barrier reef lagoon and cay mangroves',
        'Guatemala and Honduras Caribbean estuaries',
        'Nicaragua and Costa Rica Caribbean deltas',
        'Panama Gulf of Chiriquí and Bocas del Toro',
      ],
      sourceIds: ['one-earth-eco-613', 'one-earth-nt24', 'one-earth-nt25', 'one-earth-nt27'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Rhizophora mangle (red mangrove) seaward',
        'Avicennia germinans (black mangrove) landward',
        'Laguncularia racemosa (white mangrove) transition',
        'Conocarpus erectus (button mangrove) upland',
        'Rhizophora harrisonii in mixed stands',
      ],
      sourceIds: ['one-earth-eco-613', 'one-earth-nt24', 'one-earth-nt25', 'one-earth-nt27'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'tidal inundation and salinity gradient zonation',
        'marine nursery for snapper, grouper, shrimp, lobster',
        'carbon sequestration in mangrove peat',
        'hurricane and storm surge buffering',
        'seabird and crocodile nesting habitat',
      ],
      sourceIds: ['one-earth-eco-613', 'one-earth-nt24', 'one-earth-nt25', 'one-earth-nt27'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "Extensive in Belize (Southern Lagoon, Turneffe), Mexico (Sian Ka'an, Ría Lagartos), Panama (Gulf of Chiriquí). Pressures: shrimp aquaculture, coastal tourism, pollution, sea-level rise. Protected in Belize Coastal Zone, Sian Ka'an Biosphere, Gulf of Chiriquí. Critical for bonefish, tarpon, permit, and migratory shorebirds.",
      sourceIds: ['one-earth-eco-613', 'one-earth-nt24', 'one-earth-nt25', 'one-earth-nt27'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX', 'NI', 'BZ', 'HN', 'PA', 'GT', 'CR'],
    sources: ['one-earth-eco-613', 'one-earth-nt24', 'one-earth-nt25', 'one-earth-nt27'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:614',
    summary: {
      value:
        'Northern Mesoamerican Pacific Mangroves extend along the Pacific coast from southern Mexico through Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica, to northern Panama. This ecoregion occupies estuaries, coastal lagoons, and river deltas where seasonal freshwater input creates brackish conditions, with the largest stands in the Gulf of Fonseca and Gulf of Nicoya.',
      sourceIds: ['one-earth-eco-614', 'one-earth-na30', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Pacific coastal lagoons and estuaries (Gulf of Fonseca, Gulf of Nicoya)',
        'river deltas (Lempa, Grande de Tárcoles, Tempisque)',
        'volcanic coastal plains and black sand beaches',
        'seasonal dry forest transitions inland',
        'offshore islands and volcanic islets',
      ],
      sourceIds: ['one-earth-eco-614', 'one-earth-na30', 'one-earth-nt28'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Rhizophora mangle (red mangrove) seaward fringe',
        'Avicennia germinans (black mangrove) landward',
        'Laguncularia racemosa (white mangrove) transition',
        'Conocarpus erectus (button mangrove) upland margin',
        'Rhizophora harrisonii in mixed stands',
      ],
      sourceIds: ['one-earth-eco-614', 'one-earth-na30', 'one-earth-nt28'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'seasonal salinity gradient and species zonation',
        'marine nursery for shrimp, snapper, snook',
        'carbon sequestration in mangrove sediments',
        'storm surge protection for coastal communities',
        'migratory shorebird and waterbird habitat',
      ],
      sourceIds: ['one-earth-eco-614', 'one-earth-na30', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Gulf of Fonseca and Gulf of Nicoya host largest stands. Pressures: shrimp aquaculture (major driver), salt production, coastal development, pollution, sea-level rise. Protected in Bahía de Jiquilisco (ES), Estero Real (NI), Palo Verde (CR), Gulf of Chiriquí (PA). Critical for shrimp fisheries and migratory shorebirds.',
      sourceIds: ['one-earth-eco-614', 'one-earth-na30', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-mangrove',
      'species:black-mangrove',
      'species:white-mangrove',
      'species:button-mangrove',
    ],
    countryIds: ['MX'],
    sources: ['one-earth-eco-614', 'one-earth-na30', 'one-earth-nt28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:449',
    summary: {
      value:
        'Cayos Miskitos-San Andrés and Providencia Moist Forests cover the Mosquito Coast offshore islands and the Colombian archipelago of San Andrés and Providencia, with low-lying tropical moist forests influenced by Caribbean trade winds. These island ecoregions serve as critical stepping stones for Neotropical migrants and harbor distinctive avifauna.',
      sourceIds: ['one-earth-eco-449', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['NI', 'CR', 'CO'],
    sources: ['one-earth-eco-449', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:450',
    summary: {
      value:
        'Central American Atlantic Moist Forests form a continuous lowland belt along the Caribbean coast from southeastern Mexico through Belize, Guatemala, Honduras, Nicaragua, and Costa Rica to Panama, hosting evergreen tropical rainforest driven by year-round trade-wind rainfall. This is the largest intact tropical rainforest corridor remaining in Mesoamerica and supports exceptional biodiversity including jaguars and tapirs.',
      sourceIds: ['one-earth-eco-450', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['GT', 'HN', 'NI'],
    sources: ['one-earth-eco-450', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:451',
    summary: {
      value:
        'Central American Montane Forests occupy the mid-elevation volcanic spine from Chiapas through Guatemala, Honduras, El Salvador, Nicaragua, and Costa Rica, with cloud forests, oak forests, and mixed broadleaf-canopy systems above 1,000 m. These highlands are exceptionally rich in endemic epiphytes, amphibians, and birds, including the resplendent quetzal.',
      sourceIds: ['one-earth-eco-451', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['GT', 'HN', 'SV', 'NI'],
    sources: ['one-earth-eco-451', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:452',
    summary: {
      value:
        'Chiapas Montane Forests cover the highlands of Chiapas, Mexico, including the Sierra Madre de Chiapas and the Chiapas highlands, with pine-oak, cloud, and mixed broadleaf forests above 1,200 m. The region forms a critical biogeographic link between Mesoamerican and North American montane biotas.',
      sourceIds: ['one-earth-eco-452', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-452', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:453',
    summary: {
      value:
        'Chimalapas Montane Forests occupy the remote highlands of the Chimalapas region in Oaxaca and Chiapas, forming some of the most biodiverse and least disturbed montane forests in Mesoamerica. These rugged forests harbor high endemism in amphibians, reptiles, and epiphytic orchids due to their geographic isolation.',
      sourceIds: ['one-earth-eco-453', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-453', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:455',
    summary: {
      value:
        "Cocos Island Moist Forests cover the remote Pacific island of Cocos, a volcanic island with dense tropical evergreen forest and remarkable marine biodiversity including large pelagic species. The island's isolation supports a unique suite of endemic birds and strong terrestrial-marine nutrient linkages through seabird colonies, and it serves as a flagship for marine protected area conservation in the Eastern Tropical Pacific.",
      sourceIds: ['one-earth-eco-455', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['CR'],
    sources: ['one-earth-eco-455', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:458',
    summary: {
      value:
        'Costa Rican Seasonal Moist Forests form the Pacific lowlands and lower slopes of Costa Rica, with semi-deciduous and evergreen seasonal forests experiencing a distinct dry season from December to April. This transition zone between moist and dry Neotropical forests supports a rich assemblage of primates, toucans, and felids.',
      sourceIds: ['one-earth-eco-458', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['CR', 'NI'],
    sources: ['one-earth-eco-458', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:502',
    summary: {
      value:
        'Sierra Madre de Chiapas Moist Forests extend along the Pacific slopes of the Sierra Madre de Chiapas from Oaxaca through Chiapas into Guatemala, with premontane and lower montane moist forests transitioning from tropical to subtropical conditions. These forests mark the southern limit of many North American montane taxa and are a global hotspot for cloud-forest endemism.',
      sourceIds: ['one-earth-eco-502', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['GT', 'MX', 'SV'],
    sources: ['one-earth-eco-502', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:527',
    summary: {
      value:
        'Central American Dry Forests span the Pacific lowlands from Jalisco, Mexico, through Guatemala, El Salvador, Honduras, Nicaragua, and into northwestern Costa Rica, with seasonally deciduous tropical dry forest experiencing a 5–7 month dry season. This is among the most threatened tropical forest types in the Americas, largely converted for cattle ranching and agriculture.',
      sourceIds: ['one-earth-eco-527', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['NI', 'HN', 'SV', 'GT', 'CR', 'MX', 'CO'],
    sources: ['one-earth-eco-527', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:528',
    summary: {
      value:
        'Chiapas Depression Dry Forests occupy the arid interior depression of Chiapas, with thorn forest, deciduous dry forest, and savanna mosaics on limestone and volcanic substrates in a pronounced rain shadow. Endemic reptiles and drought-adapted plants characterize this xeric enclave surrounded by moister highlands.',
      sourceIds: ['one-earth-eco-528', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX', 'GT'],
    sources: ['one-earth-eco-528', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:553',
    summary: {
      value:
        'Central American Pine-Oak Forests form a discontinuous belt on volcanic highlands from Oaxaca through Guatemala, Honduras, and Nicaragua, with open pine forests, mixed oak-pine stands, and pine savannas shaped by fire and grazing. These montane conifer systems are a center of diversification for Neotropical pines and oak-associated taxa.',
      sourceIds: ['one-earth-eco-553', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['HN', 'GT', 'MX', 'SV', 'NI'],
    sources: ['one-earth-eco-553', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:573',
    summary: {
      value:
        'Miskito Pine Forests occupy the lowland Caribbean coast of Nicaragua and Honduras, with extensive Caribbean pine forests on poorly drained sandy soils in the Mosquito Coast. Fire-maintained savannas and pine woodlands here form one of the largest continuous tropical pine systems in Central America.',
      sourceIds: ['one-earth-eco-573', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['HN', 'NI'],
    sources: ['one-earth-eco-573', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:605',
    summary: {
      value:
        'Motagua Valley Thornscrub covers the dry Motagua River valley on the Guatemala-Honduras border, one of the driest locations in Central America, with xeric thorn forest, cacti, and succulent communities in a pronounced rain shadow. Endemic spiny-tailed iguanas and drought-adapted birds make this xeric enclave an evolutionary reservoir.',
      sourceIds: ['one-earth-eco-605', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['GT'],
    sources: ['one-earth-eco-605', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:617',
    summary: {
      value:
        'Southern Mesoamerican Pacific Mangroves extend along the Pacific coast from Oaxaca, Mexico, through Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica, and into Panama, with large riverine and estuarine mangrove systems in the Gulf of Tehuantepec and Gulf of Nicoya. These mangroves provide crucial nursery habitat for commercial fisheries and wintering habitat for migratory waterbirds.',
      sourceIds: ['one-earth-eco-617', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX', 'GT', 'SV', 'HN', 'NI', 'CR', 'PA'],
    sources: ['one-earth-eco-617', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:489',
    summary: {
      value:
        'Pantanos de Centla is a seasonally flooded tropical freshwater swamp in the Tabasco lowlands of Mexico, at the confluence of the Grijalva and Usumacinta rivers. This vast wetland mosaic of flooded forest, marsh, and lagoons is among the most important freshwater systems in Mesoamerica for waterbirds and aquatic fauna.',
      sourceIds: ['one-earth-eco-489', 'one-earth-nt27'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-489', 'one-earth-nt27'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:494',
    summary: {
      value:
        'Petén-Veracruz Moist Forests cover the Gulf-Caribbean lowland rainforest from the Petén basin of Guatemala across Tabasco, Campeche, and Chiapas into Veracruz, Mexico. These semievergreen tropical forests on karst and alluvial soils form one of the largest intact rainforest blocks in Mesoamerica.',
      sourceIds: ['one-earth-eco-494', 'one-earth-nt27'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX', 'GT', 'BZ'],
    sources: ['one-earth-eco-494', 'one-earth-nt27'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:501',
    summary: {
      value:
        'Sierra de los Tuxtlas is a volcanic massif on the southern Gulf coast of Veracruz, Mexico, rising as an isolated tropical rainforest sky island surrounded by lowlands. The region supports some of the last primary lowland rainforest in Mexico and a high degree of endemism.',
      sourceIds: ['one-earth-eco-501', 'one-earth-nt27'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-501', 'one-earth-nt27'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:514',
    summary: {
      value:
        'Veracruz Moist Forests occupy the southern Gulf coastal plain and foothills of Veracruz and Oaxaca, Mexico, with evergreen and semievergreen tropical rainforest in a zone of high rainfall. Heavy transformation leaves fragmented but highly biodiverse forest remnants.',
      sourceIds: ['one-earth-eco-514', 'one-earth-nt27'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-514', 'one-earth-nt27'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:515',
    summary: {
      value:
        'Veracruz Montane Forests crown the high peaks and slopes of the Sierra de los Tuxtlas and eastern Sierra Madre Oriental in Mexico, with cloud forest, pine-oak, and mixed broadleaf forests above 1,000 m. Persistent mist supports rich epiphyte and bird communities.',
      sourceIds: ['one-earth-eco-515', 'one-earth-nt27'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-515', 'one-earth-nt27'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:519',
    summary: {
      value:
        'Yucatan Moist Forests cover the lowland forests of the Yucatan Peninsula in Mexico, northern Belize, and northern Guatemala on flat karst limestone. Semievergreen tropical forest and seasonally flooded bajos harbor a distinctive Maya-region fauna.',
      sourceIds: ['one-earth-eco-519', 'one-earth-nt27'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX', 'BZ', 'GT'],
    sources: ['one-earth-eco-519', 'one-earth-nt27'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:550',
    summary: {
      value:
        'Veracruz Dry Forests form a band of seasonally deciduous tropical forest on the Gulf slope of central Mexico south of the Sierra de los Tuxtlas. A pronounced dry season drives leafless canopies, with forest remnants supporting dry-forest specialist birds and mammals.',
      sourceIds: ['one-earth-eco-550', 'one-earth-nt27'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-550', 'one-earth-nt27'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:551',
    summary: {
      value:
        "Yucatan Dry Forests cover the northwestern coastal and interior dry forests of the Yucatan Peninsula in Mexico, grading from tropical dry deciduous forest to thorn scrub toward the coast. The region's seasonal forests and wetlands support a distinctive Yucatan-Campeche avifauna.",
      sourceIds: ['one-earth-eco-551', 'one-earth-nt27'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-551', 'one-earth-nt27'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:564',
    summary: {
      value:
        'Belizian Pine Savannas occupy the interior lowlands of Belize and adjacent Honduras and Guatemala, with extensive Caribbean pine savanna maintained by fire and seasonal waterlogging. Open pine woodlands, palmetto savanna, and seasonal wetlands form a fire-dependent tropical grassland bioregion.',
      sourceIds: ['one-earth-eco-564', 'one-earth-nt27'],
      derivation: 'authored-summary',
    },
    countryIds: ['BZ'],
    sources: ['one-earth-eco-564', 'one-earth-nt27'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:487',
    summary: {
      value:
        'Oaxacan Montane Forests crown the Sierra Madre del Sur and the highlands bordering the Oaxacan valleys in southern Mexico, with cloud forest, oak-pine, and mixed broadleaf forests above 1,200 m. The rugged terrain and high endemism make this a priority for montane bird conservation.',
      sourceIds: ['one-earth-eco-487', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-487', 'one-earth-nt28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:521',
    summary: {
      value:
        'Bajío Dry Forests cover the semi-arid foothills and interior basins of the Bajío region of central Mexico, with tropical dry deciduous forest and thorn scrub. A long dry season and fire dynamics shape a resilient community of endemics.',
      sourceIds: ['one-earth-eco-521', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-521', 'one-earth-nt28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:522',
    summary: {
      value:
        'Balsas Dry Forests occupy the Balsas-Tepalcatepec basin of southwestern Mexico, a hot semi-arid interior depression with extensive tropical dry deciduous forest and thorn scrub. Remarkable endemism in reptiles, butterflies, and birds characterizes the region.',
      sourceIds: ['one-earth-eco-522', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-522', 'one-earth-nt28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:534',
    summary: {
      value:
        'Jalisco Dry Forests span the Pacific coastal plain and foothills of Jalisco and Nayarit in western Mexico, with tropical dry deciduous forest and palm savanna. This internationally significant dry forest supports distinctive birds, including the military macaw and endemic jays.',
      sourceIds: ['one-earth-eco-534', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-534', 'one-earth-nt28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:544',
    summary: {
      value:
        'Sierra de la Laguna Dry Forests cover the lower slopes of the isolated Sierra de la Laguna massif at the southern tip of Baja California Sur, Mexico. Tropical dry forest and thorn scrub on this oceanic sky island support an endemic flora and fauna isolated for millennia.',
      sourceIds: ['one-earth-eco-544', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-544', 'one-earth-nt28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:545',
    summary: {
      value:
        'Sinaloan Dry Forests extend along the coastal plain and foothills of Sinaloa, Sonora, and Nayarit in northwestern Mexico, forming a transitional dry forest zone between the Sonoran desert and the southern Mexican tropics. Seasonally deciduous forest on volcanic soils supports endangered dry-forest species.',
      sourceIds: ['one-earth-eco-545', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-545', 'one-earth-nt28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:547',
    summary: {
      value:
        'Southern Pacific Dry Forests cover the Pacific-facing dry forest belt from Oaxaca through Chiapas into Guatemala and El Salvador. Tropical dry deciduous forest on recent volcanic and sedimentary substrates supports a rich endemic avifauna.',
      sourceIds: ['one-earth-eco-547', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-547', 'one-earth-nt28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:556',
    summary: {
      value:
        'Sierra de la Laguna Pine-Oak Forests crown the high plateau of the Sierra de la Laguna massif at the southern tip of Baja California Sur, Mexico, an isolated montane island of pine and oak forest. Cool, moist highlands above the surrounding scrub support a suite of endemic plants and animals.',
      sourceIds: ['one-earth-eco-556', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-556', 'one-earth-nt28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:557',
    summary: {
      value:
        'Sierra Madre de Oaxaca Pine-Oak Forests cover the highlands of the Sierra Madre Oaxaqueña in southern Mexico, with extensive pine, pine-oak, and cloud forest. High endemism and critical habitat for the endemic Sierra Madre birds characterize this montane region.',
      sourceIds: ['one-earth-eco-557', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-557', 'one-earth-nt28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:558',
    summary: {
      value:
        'Sierra Madre del Sur Pine-Oak Forests crown the Sierra Madre del Sur of Guerrero and Oaxaca in southern Mexico, with pine, oak, and mixed montane forest. This rugged, little-disturbed range is a center of endemism for pines and montane birds.',
      sourceIds: ['one-earth-eco-558', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-558', 'one-earth-nt28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:559',
    summary: {
      value:
        'Trans-Mexican Volcanic Belt Pine-Oak Forests cover the high mountains of central Mexico from Jalisco through the state of Mexico to the Pico de Orizaba and Citlaltépetl. These montane conifer forests ring extinct and active volcanoes and are a global center of conifer and wildlife endemism.',
      sourceIds: ['one-earth-eco-559', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-559', 'one-earth-nt28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:607',
    summary: {
      value:
        'San Lucan Xeric Scrub covers the arid lowlands of the Cape region of southern Baja California Sur, Mexico, surrounding the Sierra de la Laguna. Succulent, cactus, and thorn-scrub communities on dry soils form a distinctive xeric flora with high endemism.',
      sourceIds: ['one-earth-eco-607', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-607', 'one-earth-nt28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:610',
    summary: {
      value:
        'Tehuacán Valley Matorral is a semi-arid xeric scrubland of the Tehuacán-Cuicatlán Valley in Puebla and Oaxaca, Mexico, a UNESCO World Heritage site. Columnar cacti, agave, and thorn scrub form one of the most floristically and biologically diverse arid zones in the world.',
      sourceIds: ['one-earth-eco-610', 'one-earth-nt28'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-610', 'one-earth-nt28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:533',
    summary: {
      value:
        'Islas Revillagigedo Dry Forests cover the volcanic Revillagigedo Islands (San Benedicto, Socorro, Roca Partida, and Clarion) in the eastern Pacific Ocean. Subtropical dry scrub and low forest host numerous endemic landbirds and seabirds within a vast marine biosphere reserve.',
      sourceIds: ['one-earth-eco-533', 'one-earth-nt29'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: ['one-earth-eco-533', 'one-earth-nt29'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:568',
    summary: {
      value:
        'Clipperton Island Shrub and Grasslands cover the low coral atoll of Clipperton Island in the eastern Pacific. Low scrub, grasses, and halophytic herbs support colonies of boobies, frigates, and terns on this remote French possession.',
      sourceIds: ['one-earth-eco-568', 'one-earth-nt29'],
      derivation: 'authored-summary',
    },
    countryIds: ['FR'],
    sources: ['one-earth-eco-568', 'one-earth-nt29'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:142',
    summary: {
      value:
        "Lord Howe Island Subtropical Forests cover the isolated volcanic island of Lord Howe in the Tasman Sea, surrounded by the world's southernmost true coral reef. Rugged basalt peaks rise above palm-dominated subtropical rainforest and montane cloud forest, supporting an extraordinary number of endemic plants and animals.",
      sourceIds: ['one-earth-eco-142', 'one-earth-au2'],
      derivation: 'authored-summary',
    },
    countryIds: ['AU'],
    sources: ['one-earth-eco-142', 'one-earth-au2'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:147',
    summary: {
      value:
        'Norfolk Island Subtropical Forests cover the volcanic island of Norfolk in the southwestern Pacific, famed for the Norfolk Island pine. Subtropical rainforest, palm forest, and ferny hardwood communities, heavily cleared by settlers, retain a rich endemic avifauna and flora.',
      sourceIds: ['one-earth-eco-147', 'one-earth-au2'],
      derivation: 'authored-summary',
    },
    countryIds: ['NF'],
    sources: ['one-earth-eco-147', 'one-earth-au2'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:167',
    summary: {
      value:
        "Chatham Island Temperate Forests cover the main Chatham Islands east of New Zealand, with coastal and lowland forests of karaka, ngaio, and akeake on peaty and volcanic soils. Long isolation and moderate endemism distinguish this remote archipelago's biota.",
      sourceIds: ['one-earth-eco-167', 'one-earth-au1'],
      derivation: 'authored-summary',
    },
    countryIds: ['NZ'],
    sources: ['one-earth-eco-167', 'one-earth-au1'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:169',
    summary: {
      value:
        "Fiordland Temperate Forests occupy the glaciated southwest corner of New Zealand's South Island, among the wettest temperate rainforests on Earth. Tall podocarp and beech forest drapes steep fiord valleys, supporting flightless birds and dense Fiordland penguin colonies at the coast.",
      sourceIds: ['one-earth-eco-169', 'one-earth-au1'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:southern-brown-kiwi',
      'species:kea',
      'species:takahe',
      'species:fiordland-crested-penguin',
    ],
    countryIds: ['NZ'],
    sources: ['one-earth-eco-169', 'one-earth-au1'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:170',
    summary: {
      value:
        "Nelson Coast Temperate Forests cover the northwestern corner of the South Island of New Zealand, a mosaic of beech, podocarp, and broadleaf forest across karst landscapes and coastal hills. The region harbors several of New Zealand's most ancient and endemic forest taxa.",
      sourceIds: ['one-earth-eco-170', 'one-earth-au1'],
      derivation: 'authored-summary',
    },
    countryIds: ['NZ'],
    sources: ['one-earth-eco-170', 'one-earth-au1'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:171',
    summary: {
      value:
        'New Zealaand North Island Temperate Forests cover much of the North Island, from coastal lowlands to the volcanic plateau and central ranges. Podocarp-broadleaf and beech forest support an iconic suite of endemic birds including kiwi, kokako, kaka, and kereru.',
      sourceIds: ['one-earth-eco-171', 'one-earth-au1'],
      derivation: 'authored-summary',
    },
    countryIds: ['NZ'],
    sources: ['one-earth-eco-171', 'one-earth-au1'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:172',
    summary: {
      value:
        'New Zealand South Island Temperate Forests span the eastern and central South Island, from coastal podocarp forest to high beech forest on the flanks of the Southern Alps. Extensive intact native forest supports kaka, kea, takahe, and kereru.',
      sourceIds: ['one-earth-eco-172', 'one-earth-au1'],
      derivation: 'authored-summary',
    },
    countryIds: ['NZ'],
    sources: ['one-earth-eco-172', 'one-earth-au1'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:173',
    summary: {
      value:
        "Northland Temperate Kauri Forests cover the subtropical-moist northern peninsula of New Zealand's North Island, dominated by the ancient giant conifer kauri on podzolized soils. Relict kauri forests and broadleaf-podocarp communities support a unique assemblage of endemic plants, kiwi, and kauri-dependent invertebrates.",
      sourceIds: ['one-earth-eco-173', 'one-earth-au1'],
      derivation: 'authored-summary',
    },
    countryIds: ['NZ'],
    sources: ['one-earth-eco-173', 'one-earth-au1'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:174',
    summary: {
      value:
        'Rakiura Island Temperate Forests cover Stewart Island/Rakiura and adjacent islands south of the South Island, with dense southern beech and podocarp forest along a rugged, wet coastline. The island retains largely unmodified temperate rainforest and abundant endemic birds.',
      sourceIds: ['one-earth-eco-174', 'one-earth-au1'],
      derivation: 'authored-summary',
    },
    countryIds: ['NZ'],
    sources: ['one-earth-eco-174', 'one-earth-au1'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:175',
    summary: {
      value:
        'Richmond Temperate Forests cover the Richmond Range and surrounding country of the northern South Island of New Zealand, with beech, podocarp, and broadleaf forest on steep mountainous terrain. The diverse forests support great spotted kiwi, blue duck, and rock wren.',
      sourceIds: ['one-earth-eco-175', 'one-earth-au1'],
      derivation: 'authored-summary',
    },
    countryIds: ['NZ'],
    sources: ['one-earth-eco-175', 'one-earth-au1'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:180',
    summary: {
      value:
        'Westland Temperate Forests cover the narrow, extremely wet western coastal strip of the South Island bounded by the Southern Alps. Luxuriant podocarp and beech rainforest nourished by high rainfall supports the endemic rowi kiwi, westland petrel, and white heron colonies.',
      sourceIds: ['one-earth-eco-180', 'one-earth-au1'],
      derivation: 'authored-summary',
    },
    countryIds: ['NZ'],
    sources: ['one-earth-eco-180', 'one-earth-au1'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:190',
    summary: {
      value:
        'Canterbury-Otago Tussock Grasslands cover the dry eastern plains and intermontane basins of the South Island of New Zealand. Native tussock grassland, shrubland, and outwash plains, adapted to drought and fire, support ground-nesting birds and the iconic takahe.',
      sourceIds: ['one-earth-eco-190', 'one-earth-au1'],
      derivation: 'authored-summary',
    },
    countryIds: ['NZ'],
    sources: ['one-earth-eco-190', 'one-earth-au1'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:194',
    summary: {
      value:
        'New Zealand South Island Montane Grasslands cover the alpine and subalpine zone of the Southern Alps and central South Island highlands. Tussock grassland, herbfield, fellfield, and cushion plants above treeline support the mountain-dwelling kea, rock wren, and takahe.',
      sourceIds: ['one-earth-eco-194', 'one-earth-au1'],
      derivation: 'authored-summary',
    },
    countryIds: ['NZ'],
    sources: ['one-earth-eco-194', 'one-earth-au1'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:196',
    summary: {
      value:
        'Antipodes Subantarctic Islands Tundra covers the windswept subantarctic Antipodes Islands group south of New Zealand. Wet tundra, herbfield, and cushion communities support enormous seabird colonies and the endemic Antipodes parakeet, with seals crowding the coasts.',
      sourceIds: ['one-earth-eco-196', 'one-earth-au16'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:antipodes-parakeet',
      'species:antipodean-albatross',
      'species:southern-royal-albatross',
      'species:new-zealand-sea-lion',
    ],
    countryIds: ['NZ', 'AU'],
    sources: ['one-earth-eco-196', 'one-earth-au16'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:618',
    summary: {
      value:
        'Carolines Tropical Moist Forests covers the volcanic high islands and atolls of the Caroline Islands in the Federated States of Micronesia, including Chuuk, Pohnepei, Kosrae, and the surrounding atolls. Cloud forests cap the highest peaks of the larger islands, acting as a refuge for many plants and animals unique to the region.',
      sourceIds: ['one-earth-eco-618'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic high islands ringed by coral reefs',
        'classic low atolls of the eastern Carolines',
        'highest peak of Pohnpei reaching 650 m',
        'eroded volcanic peak islands of Chuuk, Kosrae, and Pohnpei',
        'lowland swamps and coastal littoral',
      ],
      sourceIds: ['one-earth-eco-618'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical and humid, with abundant rainfall supporting montane cloud forest on the higher volcanic peaks and wet atoll communities below.',
      },
      sourceIds: ['one-earth-eco-618'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lower montane forest of endemic palms and tree ferns',
        'dwarf, sponge-like cloud forest of mossy epiphytes above 300–450 m',
        'lowland and swamp forest of Terminalia carolinensis',
        'coastal atoll and strand scrub',
        'lowland swamps largely converted to cultivation',
      ],
      sourceIds: ['one-earth-eco-618'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'extreme isolation producing many endemic species',
        'small and low montane cloud forests of global significance',
        'single-island endemism in birds and invertebrates',
        'vulnerability to invasive rats and expanding sakau cultivation',
      ],
      sourceIds: ['one-earth-eco-618'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 81% with a protection level of 0. Expansion of commercial sakau cultivation is consuming lower-elevation forests, and invasive rats prey on birds, invertebrates, and native seeds, while two-thirds of Pohnpei native forest has been lost in recent decades. Priorities include community-based protection of cloud forests and preventing brown tree snakes and little red fire ants from arriving.',
      sourceIds: ['one-earth-eco-618'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:pohnpei-lorikeet',
      'species:truk-monarch',
      'species:pohnpei-fantail',
      'species:caroline-islands-ground-dove',
    ],
    countryIds: ['FM'],
    sources: ['one-earth-eco-618'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:621',
    summary: {
      value:
        "Eastern Micronesia Tropical Moist Forests covers the low atolls scattered across the central Pacific in the Marshall Islands and Kiribati, together with the single-island outliers of Wake Island and the upraised limestone makatea island of Nauru. The sandy, salty, and typhoon-tested atolls support a hardy terrestrial life, including the coconut crab, the world's largest land-living arthropod.",
      sourceIds: ['one-earth-eco-621'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'low coral atolls dominating the region',
        'upraised limestone makatea island of Nauru',
        'single-island outlier of Wake Island',
        'sandy, salty shorelines exposed to typhoons',
        'widely scattered island archipelagos',
      ],
      sourceIds: ['one-earth-eco-621'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime on low atolls subject to high salt stress, drought, and recurring typhoons.',
      },
      sourceIds: ['one-earth-eco-621'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'shore scrub of Scaevola, Pandanus, and Terminalia',
        'interior tree groves of Barringtonia, Tournefortia, and Hernandia',
        'Pisonia grandis groves used as seabird rookeries',
        'atoll herbland and strand vegetation',
        'makatea forest on Nauru with Calophyllum and Ficus',
      ],
      sourceIds: ['one-earth-eco-621'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'long-distance oceanic dispersal of hardy species',
        'seabird nesting and guano nutrient input',
        'strong typhoon disturbance shaping vegetation',
        'variable biodiversity with island size and type',
      ],
      sourceIds: ['one-earth-eco-621'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 10% with a protection level of 9. Most islands have been heavily altered by long human habitation, guano mining has largely denuded Nauru, and the atolls face rising sea levels, feral cats, rats, and invasive plants. Priorities include eradicating invasive species on Pokaka Atoll and protecting remaining forests on Nauru.',
      sourceIds: ['one-earth-eco-621'],
      derivation: 'authored-summary',
    },
    countryIds: ['MH', 'NR', 'KI'],
    sources: ['one-earth-eco-621'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:626',
    summary: {
      value:
        'Ogasawara Subtropical Moist Forests covers the widely scattered volcanic Bonin (Ogasawara) and Iwo (Volcano) Islands south of Japan. Long isolation from the mainland has driven the evolution of many distinct species, with fifty-six percent of the 441 native plant species found nowhere else.',
      sourceIds: ['one-earth-eco-626'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        '20 major scattered volcanic islands',
        'Mukojima, Chichijima, and Hahajima island groups',
        'largest island of Chichijima at 24 km²',
        'dry rocky slopes and exposed eroded sea cliffs',
        'mountain ridges and drier lowland sites',
      ],
      sourceIds: ['one-earth-eco-626'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Subtropical oceanic, with a drier period from January to March and again from July to August.',
      },
      sourceIds: ['one-earth-eco-626'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Elaeocarpus-Ardisia mesic lowland forest',
        'Distylium-Schima dry forest of cloudy uplands',
        'Raphiolepis-Livistona dry forest on rocky slopes',
        'Distylium-Pouteria scrub forest on ridges',
        'endemic Metrosideros boninensis of southern-Pacific lineage',
      ],
      sourceIds: ['one-earth-eco-626'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'extreme oceanic isolation driving speciation',
        'high plant and insect endemism',
        'relict endemics from moister former climates',
        'vulnerability to feral goats, pigs, cats, rats, and invasive plants',
      ],
      sourceIds: ['one-earth-eco-626'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 82% with a protection level of 10. Large areas of the archipelago are protected within Ogasawara National Park, though native forest has been largely lost on northern islands through goat grazing and invasive predators. Priorities include continuing rat and feral cat eradication and restoring sclerophyllous scrub and subtropical rainforest that harbor many endemics.',
      sourceIds: ['one-earth-eco-626'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bonin-white-eye',
      'species:japanese-wood-pigeon',
      'species:bonin-flying-fox',
    ],
    countryIds: ['JP'],
    sources: ['one-earth-eco-626'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:627',
    summary: {
      value:
        'Palau Tropical Moist Forests covers the 586 islands of the Palau archipelago in western Micronesia, from the jagged limestone Rock Islands to the larger eroded volcanic islands. As one of the most biodiverse archipelagoes in Micronesia, it supports the Giant white-eye, Palau fruit dove, and two species of Palauan fruit bat among many endemic forms.',
      sourceIds: ['one-earth-eco-627'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        '586 islands of the Palau archipelago',
        'jagged limestone rock islands',
        'larger eroded volcanic islands such as Babeldaob',
        'uplifted limestone and offshore islets',
        'coral islands including Peleliu, Angaur, and the Rock Islands',
      ],
      sourceIds: ['one-earth-eco-627'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical and humid, being among the closest Micronesian groups to source regions of Indonesia, New Guinea, and the Philippines.',
      },
      sourceIds: ['one-earth-eco-627'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'upland forest with Campnosperma and Parinari canopy',
        'limestone forest of Intsia and Psychotria',
        'rock-island forest of Semecarpus and Premna',
        'atoll forest of Casuarina and Scaevola',
        'six native palm species and many endemic plants',
      ],
      sourceIds: ['one-earth-eco-627'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'proximity to mainland source regions boosting biodiversity',
        'oceanic isolation driving endemic evolution',
        'high endemism in birds, land snails, and plants',
        'vulnerability to introduced predators and invasive plants',
      ],
      sourceIds: ['one-earth-eco-627'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "One Earth reports a conservation target of 94% with a protection level of 3. Forest cover is around 75%, and Palau has one of the world's most advanced approaches to conservation, with a protected-area network covering at least 25% of terrestrial habitat. Remaining threats include introduced rats, feral cats, macaques, and the clearing of native forest for settlement and agriculture.",
      sourceIds: ['one-earth-eco-627'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:giant-white-eye',
      'species:palau-fruit-dove',
      'species:palau-swiftlet',
      'species:palau-fruit-bat',
    ],
    countryIds: ['PW'],
    sources: ['one-earth-eco-627'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:637',
    summary: {
      value:
        'Marianas Tropical Dry Forests covers a 900 km arc of volcanic islands in the western Pacific, spanning the Northern Mariana Islands and the raised limestone island of Guam. Long oceanic isolation has driven the speciation of island endemics, including the plum-fronted Marianas fruit pigeon.',
      sourceIds: ['one-earth-eco-637'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        '900 km arc of volcanic islands',
        'older raised limestone atoll of Guam',
        'active volcanic islands in the north',
        'forest patches on older lava flows',
        'southern limestone (makatea) forests',
      ],
      sourceIds: ['one-earth-eco-637'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical dry, with strong typhoons that shape a dense, vine-rich forest structure with few emergent trees.',
      },
      sourceIds: ['one-earth-eco-637'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'northern Casuarina, Pisonia, and pandanus forest',
        'southern limestone forest of Pisonia, Artocarpus, and Ficus',
        'primary broadleaf forest on volcanic soils',
        'grasslands with ravine forest',
        'widespread introduced Leucaena and other weeds',
      ],
      sourceIds: ['one-earth-eco-637'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'oceanic isolation driving island endemism',
        'seed dispersal by bird legs',
        'typhoon disturbance shaping forest structure',
        'severe predation pressure from the brown tree snake',
      ],
      sourceIds: ['one-earth-eco-637'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 90% with a protection level of 2. Most original forest has been lost on Guam and replaced by grassy savannas and secondary growth, while the brown tree snake is implicated in the extinction of three bird species. Priorities include preventing invasive introductions, removing feral ungulates and predators, and translocating native forest birds between island groups.',
      sourceIds: ['one-earth-eco-637'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:marianas-fruit-pigeon',
      'species:marianas-crow',
      'species:rota-bridled-white-eye',
      'species:guam-swiftlet',
      'species:mariana-flying-fox',
    ],
    countryIds: ['GU', 'MP'],
    sources: ['one-earth-eco-637'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:638',
    summary: {
      value:
        'Yap Tropical Dry Forests covers the several islands of the Yap group, about 450 km northeast of Palau in the Federated States of Micronesia. Its gentle, low-lying islands carry exposed limestone karst, broadleaf forests, mangroves, and limited savannas that host the endemic Yap monarch and Yap flying fox.',
      sourceIds: ['one-earth-eco-638'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'gentle island topography rising to about 175 m',
        'exposed upraised limestone eroded into karst',
        'mangrove-fringed coasts',
        'islands about 450 km northeast of Palau',
        'limited natural and man-made savannas',
      ],
      sourceIds: ['one-earth-eco-638'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical with a distinct dry season from January through March, and frequent strong typhoons.',
      },
      sourceIds: ['one-earth-eco-638'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'broadleaf deciduous upland forest',
        'limestone forest with many endemic species in soil pockets',
        'fifteen-species mangrove fringe',
        'natural savannas with Myrtella bennigseniana',
        'secondary and highly degraded forests covering much of the land',
      ],
      sourceIds: ['one-earth-eco-638'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'oceanic isolation producing endemic species',
        'limestone karst supporting distinct endemics',
        'a flora likened to an attenuated version of Palau',
        'vulnerability to introduced predators and burning',
      ],
      sourceIds: ['one-earth-eco-638'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 92% with a protection level of 0. There are currently no legally protected areas and all land is traditionally owned, though thirty-two Areas of Special Biodiversity Significance have been named. Priorities include establishing community-based protected areas for vulnerable limestone and older forests, strengthening mangrove protection, and preventing brown tree snakes and little red fire ants from arriving.',
      sourceIds: ['one-earth-eco-638'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:yap-monarch',
      'species:yap-olive-white-eye',
      'species:yap-cicadabird',
      'species:yap-flying-fox',
    ],
    countryIds: ['FM'],
    sources: ['one-earth-eco-638'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:17',
    summary: {
      value:
        'Occupying the eastern side of Madagascar, the humid forests run from the littoral forests of the narrow coastal plain up to the crest of the eastern escarpment at roughly 1,200–1,600 m. Rainfall generally exceeds 2,000 mm per year, reaching 6,000 mm on the Masoala Peninsula, with a dry season of under two months. The ecoregion holds exceptional endemism, including 165 breeding bird species and 97% of all Malagasy palms.',
      sourceIds: ['one-earth-eco-17'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'eastern side of Madagascar from littoral forests of the coastal plain to the eastern escarpment crest at ~1,200–1,600 m',
        'continuous cloud layer at 900–1,200 m where the escarpment traps humid air',
        'forest band from Andravory in the north to Andohalela in the south',
        'narrow forest section along the Angavo Scarp',
      ],
      sourceIds: ['one-earth-eco-17'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Humid with rainfall generally exceeding 2,000 mm per year and up to 6,000 mm on the Masoala Peninsula; dry season under two months; winter mists May–September; cyclones December–March cause habitat destruction.',
        annualPrecipitationMm: { min: 2000, max: 6000 },
      },
      sourceIds: ['one-earth-eco-17'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Dalbergia, Diospyros, Ocotea, Symphonia, and Tambourissa canopy',
        'Canarium, Albizia, and Brochoneura acuminata emergents',
        'rich understory of Pandanus, palms, bamboo, and epiphytic orchids',
        'Angraecum sesquipedale, Darwin\u2019s orchid, with a 35-cm spur',
      ],
      sourceIds: ['one-earth-eco-17'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'isolation of the eastern escarpment trapping humid air and cloud',
        '97% of 171 Malagasy palm species endemic to the island',
        'all five families of Malagasy primates represented',
        'cyclone disturbance driving habitat dynamics and destruction',
      ],
      sourceIds: ['one-earth-eco-17'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Protection is provided by Masoala National Park, Mananara Nord UNESCO-MAB Biosphere Reserve, Ambatovaky Special Reserve, and Zahamena Strict Nature Reserve and National Park. Threats include shifting cultivation (tavy), wildfires, legal and illegal logging, and over-exploitation of palms and Cyathea tree ferns, with littoral forests among the most impacted. Priority actions are restoring forest corridors, promoting farming alternatives to tavy, and strengthening forest administration law enforcement.',
      sourceIds: ['one-earth-eco-17'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:aye-aye',
      'species:diademed-sifaka',
      'species:golden-bamboo-lemur',
      'species:madagascar-red-owl',
      'species:madagascar-serpent-eagle',
      'species:golden-mantella',
    ],
    countryIds: ['MG'],
    sources: ['one-earth-eco-17'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:18',
    summary: {
      value:
        'The subhumid forests of the Madagascar highlands now persist as scattered patches within a sea of anthropogenic grasslands and agriculture, lying between the humid eastern escarpment forests and the dry deciduous western forests. The climate approaches temperate conditions at altitude, with average rainfall around 1,500 mm per year. The Critically Endangered Alaotran gentle lemur and Madagascar pochard depend on its remaining forests and wetlands.',
      sourceIds: ['one-earth-eco-18'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'scattered forest patches within a sea of anthropogenic grasslands and agriculture',
        'highlands between the humid forests of the eastern escarpment and the dry deciduous forests of the west',
        'ericoid thickets replacing forest above ~1,800–2,000 m',
        'wetlands, lakes, sclerophyllous forest, and tapia forest',
      ],
      sourceIds: ['one-earth-eco-18'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Climate closer to temperate due to altitude, with temperatures of 15–25°C at higher elevations; cool, dry season July–September and warmer wet season the rest of the year; average rainfall ~1,500 mm/yr reaching 2,000 mm in Sambirano and as little as 600 mm in the southwest.',
        annualPrecipitationMm: { min: 600, max: 2000 },
        temperatureC: { min: 15, max: 25 },
      },
      sourceIds: ['one-earth-eco-18'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lake papyrus and reed beds around Lac Alaotra, Madagascar\u2019s largest lake',
        'sclerophyllous forest and tapia forest remnants',
        'introduced Eucalyptus and Acacia now the most common highland trees',
        'montane forest grading into ericoid thickets at higher elevations',
      ],
      sourceIds: ['one-earth-eco-18'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'these forests once hosted elephant birds, a giant tortoise, and giant lemurs, all extinct since human arrival',
        'wetlands and lakes sustaining endemic marshland birds',
        'rainfall gradient from ~2,000 mm in Sambirano to ~600 mm in the southwest',
        'altitudinal transition to ericoid thickets above the forest zone',
      ],
      sourceIds: ['one-earth-eco-18'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Protected sites include Special Reserves Ambohijanahary, Ambohitantely, Marotandrano, and Kalambatritra, Tsaratanana Strict Nature Reserve, Andringitra National Park, and the Lac Alaotra Ramsar site. Threats: encroaching agriculture, fire, introduced species, wetland conversion to rice farming, siltation, pollution, and industrial mining. Priorities are establishing new protected areas for ecological connectivity, restoring native forest, and strengthening sustainable financing for the protected area network.',
      sourceIds: ['one-earth-eco-18'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:alaotran-gentle-lemur',
      'species:madagascar-pochard',
      'species:brown-emu-tail',
      'species:yellow-browed-oxylabes',
      'species:slender-billed-flufftail',
      'species:madagascar-snipe',
    ],
    countryIds: ['MG'],
    sources: ['one-earth-eco-18'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:32',
    summary: {
      value:
        'The dry deciduous forests of Madagascar cover western Madagascar from the Ampasindava Peninsula south to Belo-sur-Tsiribihina and Maromandia, as well as the northern part of the island below the higher slopes of Mount Amber. The forest is essentially deciduous, and most trees lose their leaves from May to October under a long dry season. Roughly 70% of plant species are endemic, and the ecoregion harbours the fossa, golden-crowned sifaka, and ploughshare tortoise.',
      sourceIds: ['one-earth-eco-32'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'western Madagascar from the Ampasindava Peninsula to Belo-sur-Tsiribihina and Maromandia',
        'the northern part of the island excluding Mount Amber above 1,000 m',
        'limestone massifs of Ankarana, Namoroka, and Bemaraha',
        'volcanic cone of Mount Amber',
      ],
      sourceIds: ['one-earth-eco-32'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical with mean maxima of 30–33°C and mean minima of 8–21°C; long dry season in the rainshadow west of the central highlands; most rain falls October–April, around 1,500 mm/yr in the north and ~1,000 mm in the south.',
        annualPrecipitationMm: { min: 1000, max: 1500 },
        temperatureC: { min: 8, max: 33 },
      },
      sourceIds: ['one-earth-eco-32'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'flamboyant tree and several baobab species',
        'Pachypodium spp. on drier calcareous western soils',
        'tsingy massifs supporting Dalbergia, Cassia, Ficus, and Adansonia madagascariensis',
        'scrub with Asclepiadaceae lianas and Leguminosae and Rubiaceae shrubs',
      ],
      sourceIds: ['one-earth-eco-32'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'essentially deciduous forest with most trees losing leaves May–October',
        '~70% of plant species endemic to the ecoregion',
        'tsingy karst landscapes supporting restricted-range endemics',
        'long dry season and rainshadow aridity shaping species distributions',
      ],
      sourceIds: ['one-earth-eco-32'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Key protected areas are Ankarafantsika National Park, Tsingy de Bemaraha World Heritage Site, and Tsingy de Namoroka National Park, with Special Reserves Ankarana, Analamerana, Bemarivo, and Bora. Threats include slash-and-burn for grazing and agriculture, wildfires, selective logging, hunting of diurnal lemurs, rice paddy conversion of wetlands, overfishing, invasive water hyacinth, oil exploration, and climate change shifting species ranges. Priority actions are protecting baobab trees, establishing locally managed protected areas, and maintaining connectivity between protected areas.',
      sourceIds: ['one-earth-eco-32'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:fossa',
      'species:golden-crowned-sifaka',
      'species:mongoose-lemur',
      'species:ploughshare-tortoise',
      'species:madagascar-fish-eagle',
      'species:madagascar-teal',
    ],
    countryIds: ['MG'],
    sources: ['one-earth-eco-32'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:83',
    summary: {
      value:
        'Madagascar ericoid thickets mantle the upper slopes above roughly 1,800 m of the four major massifs, Tsaratanana, Marojejy, Ankaratra, and Andringitra. Temperatures fluctuate widely, with snow recorded on Andringitra and daily maxima exceeding 30°C. This is considered the habitat most vulnerable to climate change in Madagascar, as species are physically constrained to upper elevations and cannot shift upward.',
      sourceIds: ['one-earth-eco-83'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'ericoid thickets above ~1,800 m on the upper slopes of the four major massifs',
        'Tsaratanana (2,876 m), Marojejy (2,133 m), Ankaratra (2,643 m), and Andringitra (2,658 m)',
        'montane sclerophyllous forest on Tsaratanana to ~2,500 m before ericoid thicket',
        'small damp peat-filled depressions and exposed rock outcrops',
      ],
      sourceIds: ['one-earth-eco-83'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Great daily and seasonal temperature fluctuation, with snow recorded on Andringitra, temperatures down to -11°C and daily maxima over 30°C; rainfall exceeds 2,500 mm/yr on wetter eastward-facing slopes; temporary arid conditions arise from the temperature range and intense sunlight.',
        temperatureC: { min: -11, max: 30 },
      },
      sourceIds: ['one-earth-eco-83'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'true heathers (Erica) that have undergone extensive speciation',
        'drought-tolerant flora on rock outcrops, including Aloe, Kalanchoe, and Helichrysum',
        'specialized endemics in small damp peat-filled depressions',
        'montane sclerophyllous forest transitioning up into ericoid thicket',
      ],
      sourceIds: ['one-earth-eco-83'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'extensive speciation of true heathers (Erica) in Madagascar',
        'high mountain areas serving as important water sources',
        'rodents and insectivores showing mid-elevational bulges',
        'fire-dependent plants such as Asteraceae and Ericaceae indicating a natural fire cycle',
      ],
      sourceIds: ['one-earth-eco-83'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Three of the four montane areas are protected: Tsaratanana Strict Nature Reserve, Andringitra National Park, and Marojejy National Park, linked by the Corridor Marojejy Tsaratanana. Threats: conversion to highland cattle pasture, regular burns to stimulate grass, expansion of domestic animal rangelands, and introduced plant dispersal through livestock faeces. Priorities are strengthening local community capability with environmentally friendly farming, eradicating invasive alien species, and strengthening bushfire control programs.',
      sourceIds: ['one-earth-eco-83'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:malagasy-mountain-mouse',
      'species:northern-voalavo',
      'species:cryptic-warbler',
      'species:yellow-bellied-sunbird-asity',
    ],
    countryIds: ['MG'],
    sources: ['one-earth-eco-83'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:96',
    summary: {
      value:
        'The coralline islands of Europa and Bassas da India sit in the Mozambique Channel near the southern end of Madagascar and have no permanent human inhabitants. Europa supports one of the three largest green turtle atoll nesting sites in the world, the largest in the Indian Ocean, and a breeding ground for about 760,000 seabird pairs. Bassas da India is an almost circular atoll with under 1 km² of dry land, almost entirely submerged at high tide.',
      sourceIds: ['one-earth-eco-96'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Europa Island, about 30 km² with a 6–7 km diameter and maximum altitude of 6 m',
        'shallow lagoon of ~9 km² open to the sea on one side',
        'extensive mangrove swamp on the south of Europa',
        'Bassas da India, an almost circular atoll with <1 km² of dry land, almost entirely submerged at high tide',
      ],
      sourceIds: ['one-earth-eco-96'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Under the influence of the Agulhas Current with occasional cyclones and water temperatures usually above 30°C; southeast trade winds dominate the austral winter and annual rainfall averages about 600 mm.',
      },
      sourceIds: ['one-earth-eco-96'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dry forest of silver thicket (Euphorbia stenoclada)',
        'dry herbaceous formation dominated by the grass Sclerodactylon macrostachyum',
        'mangrove swamps of Rhizophora mucronata',
        'coastal shrub formation including bay cedar (Suriana maritima)',
      ],
      sourceIds: ['one-earth-eco-96'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'one of the three largest green turtle atoll nesting sites in the world and the largest in the Indian Ocean',
        'breeding ground for 8 seabird species with about 760,000 breeding pairs',
        'stopover for migratory birds travelling between Africa and Madagascar',
        'last colonies of frigatebirds, red-footed boobies, and red-tailed tropicbirds in the West Indian Ocean',
      ],
      sourceIds: ['one-earth-eco-96'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Europa Island and its surrounding waters are protected as a Ramsar site of 1,058 km². Threats: introduced sisal outcompeting native vegetation, goats from Madagascar, black rats preying on seabird eggs, pollution from vessel traffic, egg collection, climate-driven sea-level rise, and potential oil and gas exploitation. Priorities are biosecurity to prevent further invasions, eradicating invasive species, and long-term monitoring plans.',
      sourceIds: ['one-earth-eco-96'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:green-sea-turtle',
      'species:hawksbill-sea-turtle',
      'species:greater-frigatebird',
      'species:red-footed-booby',
      'species:white-tailed-tropicbird',
    ],
    countryIds: ['TF'],
    sources: ['one-earth-eco-96'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:99',
    summary: {
      value:
        'The spiny thickets of southern and southwestern Madagascar stretch from the Mangoky River to the western slopes of the Anosyennes Mountains, lying in the extreme rain shadow behind the eastern chain. Average annual rainfall is 500 mm or less, dropping below 350 mm in the driest southwestern coastal areas with a 9–11 month dry season. The ecoregion holds the highest percentage of plant endemism in Madagascar, with the endemic family Didiereaceae dominant.',
      sourceIds: ['one-earth-eco-99'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'southern and southwestern Madagascar from the Mangoky River to the western slopes of the Anosyennes Mountains',
        'Tertiary limestone of the Mahafaly Plateau',
        'unconsolidated red sands of the central south and southeast',
        'taller dense dry forest on sandy soils and dwarf xeric vegetation on the calcareous plateau',
      ],
      sourceIds: ['one-earth-eco-99'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Extreme rain shadow behind the eastern chain; average annual rainfall 500 mm or less, under 350 mm in the driest southwestern coastal areas, with a 9–11 month dry season and prolonged droughts lasting up to several years; average annual temperatures with maxima of 30–33°C and minima of 15–21°C.',
        annualPrecipitationMm: { min: 350, max: 500 },
        temperatureC: { min: 15, max: 33 },
      },
      sourceIds: ['one-earth-eco-99'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'taller dense dry forest dominated by the octopus tree (Didierea madagascariensis) on sandy soils',
        'dwarf xeric vegetation on the calcareous plateau around Lake Tsimanampetsotsa',
        'dominant species of the endemic family Didiereaceae',
        'rare restricted endemics such as Aloe suzannae, the palm Dypsis decaryi, and Pachypodium spp.',
      ],
      sourceIds: ['one-earth-eco-99'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'extreme aridity adaptations including extended root systems with tubers, succulent trunks, and reduced waxy leaves',
        'erratic rainfall with prolonged droughts lasting up to several years',
        'the highest percentage of plant endemism in Madagascar',
        'monospecific genera of two of the five endemic bird families restricted to the coastal strip',
      ],
      sourceIds: ['one-earth-eco-99'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Reserves include Tsimanampetsotsa National Park and Ramsar site and Cap Sainte Marie Special Reserve, with proposed protected areas such as Macrobasia and Ranobe PK 32. Threats: firewood and charcoal exploitation, selective hardwood logging, the fastest deforestation rates of all Madagascar regions from 1990–2010, maize cultivation, grazing, invasive species, and collection for international trade such as the radiated tortoise. Priorities are preventing deforestation with alternative livelihoods, implementing alternative fuels, and establishing stricter protected areas for high-value biodiversity.',
      sourceIds: ['one-earth-eco-99'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:radiated-tortoise',
      'species:verreauxs-sifaka',
      'species:white-footed-sportive-lemur',
      'species:grandidiers-mongoose',
      'species:grey-mouse-lemur',
      'species:subdesert-mesite',
    ],
    countryIds: ['MG'],
    sources: ['one-earth-eco-99'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:100',
    summary: {
      value:
        'The succulent woodlands of southwestern and central western Madagascar sit between the spiny thickets and the dry deciduous forests. The tropical dry climate brings a distinct dry season from May to October, a wet season that may reach 750 mm, and annual rainfall of 575–1,330 mm. The ecoregion supports eight lemur species including Madame Berthe\u2019s mouse lemur, the world\u2019s smallest primate, and the strictly endemic Appert\u2019s greenbul.',
      sourceIds: ['one-earth-eco-100'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'southwestern and central western Madagascar, sandwiched between the spiny thickets and the dry deciduous forests',
        'relatively flat terrain with some rocky outcrops',
        'deep precipitous valleys such as the Makay region',
        'distinctive endemic baobabs standing above the forest canopy',
      ],
      sourceIds: ['one-earth-eco-100'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical dry climate with a distinct dry season May–October and a wet season November–April that may reach 750 mm; yearly range 575–1,330 mm; annual average daily temperature 25–31°C.',
        annualPrecipitationMm: { min: 575, max: 1330 },
        temperatureC: { min: 25, max: 31 },
      },
      sourceIds: ['one-earth-eco-100'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'forests up to 15 m with water-storage and stem-photosynthesis adaptations',
        'endemic baobabs Adansonia za and Adansonia grandidieri as distinctive emergents',
        'Euphorbiaceae and Leguminosae canopy including endemic Pachypodium',
        'shrub layer of Sapindaceae, Euphorbiaceae, Anacardiaceae, and Burseraceae',
      ],
      sourceIds: ['one-earth-eco-100'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'high local endemism between the Tsiribihina and Mangoky rivers and around Zombitse-Vohibasia National Park',
        'transitional overlap with spiny thickets to the south and dry deciduous forests to the north',
        'habitat for eight lemur species and 60–90 bird species',
        'the Ambalibe Menabe area of particularly high biodiversity',
      ],
      sourceIds: ['one-earth-eco-100'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Protected areas include Zombitse-Vohibasia, Isalo, and Kirindy-Mitea National Parks and Andranomena Special Reserve, though classified forests offer little real protection as logging continues. Threats: intentional burns for agriculture and pasture, fires, fragmentation, charcoal production causing massive deforestation, exploitation of endemic timber trees, traditional hunting, and cattle and goat grazing. Priorities are improving bushfire control training, encouraging improved stoves to prevent charcoal production, and rehabilitating degraded ecosystems.',
      sourceIds: ['one-earth-eco-100'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:apperts-greenbul',
      'species:berthes-mouse-lemur',
      'species:giant-jumping-rat',
      'species:narrow-striped-mongoose',
      'species:spider-tortoise',
      'species:white-breasted-mesite',
      'species:verreauxs-sifaka',
    ],
    countryIds: ['MG'],
    sources: ['one-earth-eco-100'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:114',
    summary: {
      value:
        'Madagascar\u2019s western coast supports about 2% of the world\u2019s mangroves along a roughly 1,000 km stretch of coastline fostered by a low coastal platform, a high tidal range, and silt-laden rivers. The mangroves store more carbon than all other tropical forest types and sequester carbon 10–50 times faster into the mud. They shelter dugongs, Nile crocodiles, sea turtles, and endemic wetland birds including the Madagascar teal and Madagascar heron.',
      sourceIds: ['one-earth-eco-114'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'mangrove forests along the western coast fostered by a low coastal platform and high tidal range',
        'constant freshwater supply from numerous silt-laden rivers along a coastline of ~1,000 km',
        'coastline often associated with coral reefs that protect from ocean swells',
        'small and scattered stands on the eastern side lacking alluvial sediments',
      ],
      sourceIds: ['one-earth-eco-114'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Rainfall varies from 2,000 mm in the humid subequatorial north to 350 mm in the dry subtropical south; two seasons, a cool dry May–October and a warm humid November–April.',
        annualPrecipitationMm: { min: 350, max: 2000 },
      },
      sourceIds: ['one-earth-eco-114'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'up to nine mangrove tree species, most stands with six species in four families',
        'Rhizophora mucronata, Bruguiera gymnorrhiza, and Ceriops tagal (Rhizophoraceae)',
        'Avicennia marina, Sonneratia alba, and Lumnitzera racemosa',
        'Sonneratia and Avicennia as primary colonizers',
      ],
      sourceIds: ['one-earth-eco-114'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'mangroves sequestering carbon 10–50 times faster than other terrestrial ecosystems',
        'mangroves capturing river sediments that threaten reefs and seagrass beds',
        'protected seagrass habitats on the northwest coast as a hotspot for a genetically distinct dugong population',
        'high fish, mollusc, and crustacean diversity within the mangrove ecosystems',
      ],
      sourceIds: ['one-earth-eco-114'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Protected mangrove areas include Sahamalaza, Mahavavy Kinkony, Baie de Baly National Park, and the Lake Kinkony Ramsar site. An estimated 21% of mangroves were lost between 1990 and 2010; threats include urban development, over-fishing, high soil erosion, conversion to rice farming and salt production, aquaculture, direct harvesting, and climate-driven cyclones. Priorities are promoting ecological restoration, generating conservation revenue from mangrove carbon values, and strengthening community capacity for sustainable farming, aquaculture, and forestry.',
      sourceIds: ['one-earth-eco-114'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:dugong',
      'species:madagascar-teal',
      'species:madagascar-heron',
      'species:african-spoonbill',
      'species:nile-crocodile',
      'species:green-sea-turtle',
    ],
    countryIds: ['MG'],
    sources: ['one-earth-eco-114'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:16',
    summary: {
      value:
        'KwaZulu-Natal-Cape Coastal Forests run along the eastern South African coastline from Cape St Lucia to Cape St Francis, forming part of the Maputaland-Pondoland-Albany biodiversity hotspot. The ecoregion supports approximately 3,000 plant species with around 40 percent of larger woody species endemic, including remnant cycad populations in the Ngoye forest. The subtropical coastal belt hosts endemic birds such as the Knysna turaco and Knysna woodpecker alongside vulnerable mammals and reptiles.',
      sourceIds: ['one-earth-eco-16'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'eastern South African coastline from Cape St Lucia to Cape St Francis',
        'elevation around 450 m in the north falling to 350 m in the south',
        'sandstone outcrops with high plant endemism',
        'dune, swamp, riverine, sand, coastal lowland, and scarp forests',
      ],
      sourceIds: ['one-earth-eco-16'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Subtropical along the coast with frosts absent in the north; mean maximum temperatures 15–24°C and mean minimum temperatures 10–15°C; rainfall in the north 900–1,500 mm per annum in summer, lower in the south falling during winter.',
        annualPrecipitationMm: { min: 900, max: 1500 },
        temperatureC: { min: 10, max: 24 },
      },
      sourceIds: ['one-earth-eco-16'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lowland trees Millettia grandis and Protorhus longifolia',
        'shrubs and climbers including Uvaria caffra and Dalbergia obovata',
        'dune forest species Mimusops caffra, Euclea natalensis, and Psydrax obovata',
        'remnant cycad populations including the Ngoye cycad',
      ],
      sourceIds: ['one-earth-eco-16'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'high plant endemism on sandstone outcrops',
        'subtropical coastal forest fragmentation into isolated patches',
        'cycad persistence in ancient forest remnants',
        'endemic reptile radiations on coastal dunes and scarp',
      ],
      sourceIds: ['one-earth-eco-16'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 3 against a conservation target of 9%. Protected areas include Amatikulu Nature Reserve, Vernon Crookes Nature Reserve, Mbumbai Nature Reserve, and Hluleka Wildlife Reserve. Threats include clearing for agriculture, forestry, sugarcane expansion, mining, holiday resort expansion, invasive alien species such as Casuarina equisetifolia, and climate change. Priority actions are developing sustainable livelihoods, expanding the private and communal protected area network, and integrating biodiversity priorities into industry management plans.',
      sourceIds: ['one-earth-eco-16'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:knysna-turaco',
      'species:knysna-woodpecker',
      'species:giant-golden-mole',
      'species:ngoye-cycad',
    ],
    countryIds: ['ZA'],
    sources: ['one-earth-eco-16'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:19',
    summary: {
      value:
        'Maputaland Coastal Forests and Woodlands extend from the Changane River in southern Mozambique to the Umfolosi River in South Africa, encompassing among the tallest vegetated dunes in the world, the largest estuarine system in Africa at Lake St. Lucia, and Lake Sibayi, the largest freshwater lake in southern Africa. The region supports exceptionally diverse flora and fauna including the African bush elephant and one of the few remaining large leopard populations in South Africa.',
      sourceIds: ['one-earth-eco-19'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'flat to gently undulating low-lying coastal plain up to 200 m elevation',
        'Lebombo Mountain Range rising to about 600 m on the western margin',
        'north-south aligned dune ridges parallel to the coastline',
        'Lake St. Lucia estuarine system and Lake Sibayi freshwater lake',
      ],
      sourceIds: ['one-earth-eco-19'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Moist subtropical along the coast with rainfall over 1,000 mm per annum, becoming dry subtropical inland with less than 600 mm; hot and humid summers with peak precipitation September to April; cool dry winters; mean annual temperature 21–23°C.',
        annualPrecipitationMm: { min: 600, max: 1000 },
        temperatureC: { min: 21, max: 23 },
      },
      sourceIds: ['one-earth-eco-19'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Lebombo Range canopy species including Chrysophyllum viridifolium and Homalium dentatum',
        'dry sand forests with Cleistanthus schlechteri and Newtonia hildebrandtii',
        'coastal dune forest with Mimuspos caffra, Euclea natalensis, and Diospyros rotundifolia',
        'at least 2,500 vascular plant species with 225 endemic or near-endemic',
      ],
      sourceIds: ['one-earth-eco-19'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'transition zone at the southern end of tropical species distributions',
        'recent evolutionary speciation of endemic plant and animal taxa',
        'coastal dune and estuarine dynamics supporting diverse habitats',
        'over 100 mammal species including reintroduced cheetah and lion',
      ],
      sourceIds: ['one-earth-eco-19'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 6 against a conservation target of 23%. Key protected areas include Greater St. Lucia Wetland Park, Phinda Game Reserve, Mkuzi Game Reserve, Maputo Special Reserve, and the Lubombo transfrontier conservation area. Threats include invasive exotic plants such as Chromaena odorata and guava, afforestation with Pinus and Eucalyptus, slash and burn farming, swamp forest clearance for commercial banana farming, and poaching. Priority actions are encouraging alternative sustainable livelihoods, improving land use management in unprotected areas, and removing invasive species.',
      sourceIds: ['one-earth-eco-19'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:african-elephant',
      'species:neergaards-sunbird',
      'species:pels-fishing-owl',
    ],
    countryIds: ['MZ', 'ZA', 'SZ'],
    sources: ['one-earth-eco-19'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:25',
    summary: {
      value:
        'Northern Swahili Coastal Forests form a mosaic of lowland forest patches, savannah-woodlands, bushlands, thickets, and farmlands from coastal Somalia to southern Tanzania, including the islands of Pemba, Unguja (Zanzibar), and Mafia. Together with the Eastern Arc Forests this ecoregion forms a global center of botanical endemism with over 4,500 plant species. Strictly endemic mammals include the critically endangered Rondo dwarf galago and Aders\u2019 duiker, while the Pemba flying fox is confined to Pemba Island with a wingspan of 1.6 m.',
      sourceIds: ['one-earth-eco-25'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'low ridges and swells formed by tectonic activity over tens of millions of years',
        'mosaic of lowland forest patches, savannah-woodlands, bushlands, and farmlands',
        'outliers at the base of Uluguru, Nguru, and Udzungwa Eastern Arc Mountains',
        'islands of Pemba, Unguja (Zanzibar), and Mafia off the coast',
      ],
      sourceIds: ['one-earth-eco-25'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical with average temperatures above 25°C and generally high humidity; mean annual rainfall varies from over 2,000 mm on Pemba Island to under 1,000 mm in northern Kenya; two rainy seasons with a longer April–June season and shorter November–December season.',
        annualPrecipitationMm: { min: 1000, max: 2000 },
        temperatureC: { min: 25, max: 30 },
      },
      sourceIds: ['one-earth-eco-25'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'over 4,500 plant species with at least 400 strictly endemic to forest patches',
        'lowland forest patches with high botanical endemism',
        'savannah-woodlands and bushlands on tectonic ridges',
        'Zanzibar–Inhambane coastal forest mosaic with island variants',
      ],
      sourceIds: ['one-earth-eco-25'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'tectonic uplift creating ridges and swells that diversify habitats',
        'island biogeography driving endemism on Pemba, Unguja, and Mafia',
        'forest fragmentation reducing patches to fewer than 200 remnants',
        'coastal to inland rainfall gradient shaping species distributions',
      ],
      sourceIds: ['one-earth-eco-25'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 6 against a conservation target of 23%. Protected areas include Tana River Primate Reserve, Shimba Hills Nature Reserve, Arabuko-Sokoke National Park, Saadani National Park, Boni National Reserve, Rondo Nature Reserve, Jozani Chwaka Bay National Park, and Mafia Island Marine Park. Threats include agricultural expansion, charcoal production, limestone mining, and reduction to fewer than 200 fragmented forest patches. Priority actions are promoting forest restoration and connectivity, implementing sustainable agricultural practices, and upgrading protected areas.',
      sourceIds: ['one-earth-eco-25'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:pemba-flying-fox',
      'species:rondo-dwarf-galago',
      'species:zanzibar-red-colobus',
      'species:tana-river-red-colobus',
      'species:tana-river-mangabey',
      'species:sokoke-scops-owl',
      'species:amani-sunbird',
    ],
    countryIds: ['KE', 'TZ', 'SO'],
    sources: ['one-earth-eco-25'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:28',
    summary: {
      value:
        'Southern Swahili Coastal Forests and Woodlands extend approximately 2,200 km along the eastern African coast from the Lukuledi River in Tanzania to the Changane River in Mozambique, with isolated plateaus and inselbergs supporting important sub-centers of endemism. Rondo Plateau harbors more than 60 endemic plant species in less than 50 km², and the ecoregion contains more than 150 strictly endemic plants. Vincent\u2019s bush squirrel is confined to Mount Namuli in Mozambique, the only endemic mammal.',
      sourceIds: ['one-earth-eco-28'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'gently rolling topography with isolated higher plateaus and inselbergs',
        'important sand dunes supporting forest vegetation',
        'Rondo Plateau and Makonde Plateau rising up to 1,000 m altitude',
        'narrow coastal strip less than 50 km inland with small offshore islands',
      ],
      sourceIds: ['one-earth-eco-28'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical in the north transitioning to subtropical in the south; rainfall controlled by monsoon winds at around 800–1,000 mm per year, higher on some plateaus; mean maximum temperatures 27–30°C in the north and 24°C in the south.',
        annualPrecipitationMm: { min: 800, max: 1000 },
        temperatureC: { min: 24, max: 30 },
      },
      sourceIds: ['one-earth-eco-28'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'more than 150 strictly endemic plants with 100 confined to southern Tanzania',
        'plateau forest with high concentrations of endemic species',
        'mosaic of non-forest habitat types elevating species richness',
        'Miocene uplift remnant forests on plateau areas',
      ],
      sourceIds: ['one-earth-eco-28'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Miocene plateau uplift creating isolated habitats for endemism',
        'coastal-to-inland ecological gradients along a narrow strip',
        'forest fragmentation reducing connectivity between plateau remnants',
        'low obligate forest species richness elevated by diverse non-forest habitats',
      ],
      sourceIds: ['one-earth-eco-28'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 8 against a conservation target of 18%. Protected areas include Quirimbas National Park, Bazaruto National Park, Pomene Game Reserve, Baixo Pinda, Matibane, and Marromeu Game Reserve. Threats include commercial logging in northern Mozambique, pitsawing in Tanzania, forest clearing for agriculture, tourism development, and reduction of larger mammals from the Mozambique war. Priority actions are supporting establishment of protected areas in key biodiversity areas, supporting sustainable harvesting regimes, and supporting production of non-timber forest products.',
      sourceIds: ['one-earth-eco-28'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:vincents-bush-squirrel',
      'species:green-barbet',
      'species:roan-antelope',
      'species:african-elephant',
    ],
    countryIds: ['MZ', 'MW', 'TZ'],
    sources: ['one-earth-eco-28'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:75',
    summary: {
      value:
        'Zambezian Coastal Flooded Savanna encompasses the floodplain deltas of the Zambezi, Pungwe, Buzi, and Save Rivers along the coast of Mozambique. The Zambezi Delta forms the most extensive portion, covering roughly 200 km of coastline and penetrating up to 120 km inland. The region supports the highest concentration of waterbirds in Mozambique and provides a critical refuge for 30% of the global wattled crane population during droughts.',
      sourceIds: ['one-earth-eco-75'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'floodplain deltas of the Zambezi, Pungwe, Buzi, and Save Rivers',
        'Zambezi Delta covering roughly 200 km of coastline and 120 km inland',
        'lightly wooded savanna on fertile floodplain soils',
        'influenced by both floodwaters and oceanic tides',
      ],
      sourceIds: ['one-earth-eco-75'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Annual rainfall between 800–1,400 mm per annum with most falling October to March; mean maximum temperatures 27–30°C, mean minimum temperatures averaging 18°C.',
        annualPrecipitationMm: { min: 800, max: 1400 },
        temperatureC: { min: 18, max: 30 },
      },
      sourceIds: ['one-earth-eco-75'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'open grassland-dominated communities and mixed freshwater swamp forests',
        'lightly wooded savanna with palms Borassus aethiopum and Hyphaene coriacea',
        'Acacia such as A. sieberiana and A. polyacantha on savanna',
        'both tidal and freshwater wetland vegetation shaped by flood pulses',
      ],
      sourceIds: ['one-earth-eco-75'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'annual flood pulse inundating wetlands with mixed river and ocean influence',
        'waterbird congregation supporting globally significant populations',
        'hippopotamus waterway maintenance preventing channel clogging',
        'high mammal densities of buffalo, elephant, lion, and leopard',
      ],
      sourceIds: ['one-earth-eco-75'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 10 against a conservation target of 70%. The Marromeu Complex Game Management Area covers 1,500 km² and the Zambezi Delta Ramsar site covers 31,712 km². Threats include the KARIBA and Cabora Bassa Dams reducing flood events, sugar plantations on fertile soils, climate change increasing irrigation needs, poaching, and reduced hippo numbers allowing invasive water hyacinth to clog channels. Priority actions are protecting and restoring environmental flows through dam operation changes, promoting community-based natural resource management, and reducing hunting quotas.',
      sourceIds: ['one-earth-eco-75'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:wattled-crane',
      'species:african-elephant',
      'species:lion',
    ],
    countryIds: ['MZ'],
    sources: ['one-earth-eco-75'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:112',
    summary: {
      value:
        'East African Mangroves stretch along the coasts of Somalia, Kenya, Tanzania, and Mozambique, forming the most critically threatened ecosystem in the world due to clearance and conversion to aquaculture, salt pans, and farmland. The Rufiji delta in Tanzania is the largest continuous block of estuarine mangrove forests in Africa. Ten species of mangroves occur throughout the region, and the ecosystem functions as a nutrient trap providing shelter and refuge for juveniles of many important fish, shrimp, crab, and mollusc species.',
      sourceIds: ['one-earth-eco-112'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'coastal mangrove forests from Somalia through Kenya, Tanzania, and Mozambique',
        'Rufiji delta, the largest continuous block of estuarine mangrove forests in Africa',
        'Zambezi River Delta in Mozambique as another major mangrove area',
        'deltaic and estuarine habitats shaped by monsoon winds and coastal currents',
      ],
      sourceIds: ['one-earth-eco-112'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical with seasonal wind patterns from the Northeast monsoon and Southeast monsoon; sea level rise predicted to increase 18–59 cm by 2100 posing significant risk to low-lying mangrove areas.',
      },
      sourceIds: ['one-earth-eco-112'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'ten mangrove species throughout the region determined by salinity and soil conditions',
        'Sonneratia alba as pioneer species on open coasts',
        'Avicennia marina, Rhizophora mucronata, and Ceriops tagal in established stands',
        'Heritiera littoralis, Bruguiera gymnorrhiza, Lumnitzera racemose, and Xylocarpus granatum',
      ],
      sourceIds: ['one-earth-eco-112'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'exceptionally productive ecosystems functioning as nutrient traps',
        'shelter and nursery habitat for juveniles of many marine species',
        'breeding and feeding grounds for olive ridley, hawksbill, and green turtles',
        'monsoon wind patterns and coastal currents shaping mangrove distribution',
      ],
      sourceIds: ['one-earth-eco-112'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 9 against a conservation target of 56%. Protected areas include the Rufiji-Mafia-Kilwa Ramsar site, Mafia Island Marine Park, Jozani-Chwaka Bay National Park, Watamu Marine National Reserve, Bazaruto Marine National Park, Quirimbas Marine Park, and Maputo Game Reserve. Threats include timber and fuelwood harvesting, rice paddy clearance, saltpans, aquaculture, urbanization, industrial pollution, siltation, dredging, pesticides, and sea level rise from climate change. Priority actions are supporting alternative livelihoods including ecotourism, promoting community-based forest management, and restoring degraded mangrove areas.',
      sourceIds: ['one-earth-eco-112'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:blue-monkey',
      'species:olive-ridley-sea-turtle',
      'species:nile-crocodile',
      'species:green-sea-turtle',
    ],
    countryIds: ['SO', 'KE', 'TZ', 'MZ'],
    sources: ['one-earth-eco-112'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:116',
    summary: {
      value:
        'Southern Africa Mangroves line parts of the eastern South African and southernmost Mozambique coastline, representing the southernmost mangroves on the African continent. Mangroves extend 20 degrees farther south on the eastern coast than on the western coast due to the warming effect of the Agulhas Current. The ecoregion supports populations of waterbirds including lesser flamingo and saddle-billed stork, and marine fauna including loggerhead and leatherback turtles that nest on adjacent beaches.',
      sourceIds: ['one-earth-eco-116'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'eastern South African and southernmost Mozambique coastline along the Indian Ocean',
        'mangroves beginning just north of East London at the Nahoon River mouth',
        'well-developed mangrove forest at the Mngazana estuary',
        'Kosi Bay in the north with the richest mangrove diversity in South Africa',
      ],
      sourceIds: ['one-earth-eco-116'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Subtropical with mean maximum temperatures ranging from 18° to 24°C and mean minimum temperatures ranging between 12° and 18°C; annual rainfall ranges from 800 mm to more than 1,200 mm.',
        annualPrecipitationMm: { min: 800, max: 1200 },
        temperatureC: { min: 12, max: 24 },
      },
      sourceIds: ['one-earth-eco-116'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Avicennia marina as the sole mangrove species at the southernmost sites',
        'Bruguiera gymnorrhiza appearing at the Mbashe estuary',
        'Rhizophora mucronata at the Mngazana estuary',
        'Ceriops tagal and Lumnitzera racemose at the northernmost Kosi Bay sites',
      ],
      sourceIds: ['one-earth-eco-116'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'physiological salt tolerance and shallow rooting systems allowing mangrove survival',
        'nursery habitat for sesmarid crabs, fiddler crabs, grey mullet, and Cape stumpnose',
        'Indian prawn sustenance of offshore fisheries',
        'nesting beaches for loggerhead and leatherback turtles',
      ],
      sourceIds: ['one-earth-eco-116'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 7 against a conservation target of 34%. Protected areas include the Turtle beaches of Tongaland Ramsar site and iSimangaliso Wetland Park, a UNESCO World Heritage Site. Threats include harbour construction, marina and tourist development, hydrology and salinity changes from upstream agriculture, waste and sewage discharge, oil spills, charcoal and fuelwood use, cattle grazing, and sea level rise from climate change. Priority actions are promoting alternative livelihoods such as oyster harvesting and ecotourism, enhancing environmental legislation to incorporate mangrove policies, and promoting alternative construction materials.',
      sourceIds: ['one-earth-eco-116'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:mangrove-kingfisher',
      'species:african-clawless-otter',
      'species:loggerhead-turtle',
      'species:leatherback-turtle',
    ],
    countryIds: ['ZA', 'MZ'],
    sources: ['one-earth-eco-116'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:5',
    summary: {
      value:
        'The Congolian Coastal Forests sprawl from the Sanaga River in west-central Cameroon south through Equatorial Guinea into coastal Gabon, the Republic of Congo, and the Cabinda Province of Angola. Lying within the wet tropics, the ecoregion receives high rainfall and supports over 200 strictly endemic plant species. It has been an ancient cradle for Congo endemism and globally important populations of large forest mammals including the western lowland gorilla, chimpanzee, and African forest elephant.',
      sourceIds: ['one-earth-eco-5'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'extends from the Sanaga River in west-central Cameroon south through Equatorial Guinea',
        'coastal and inland areas of Gabon, the Republic of Congo, and the Cabinda Province of Angola',
        'Monts de Cristal in Gabon the site of highest plant conservation importance',
        'protected areas include Campo-Ma\u2019an NP, Lop\u00e9 NP, Loango NP, and Monts de Cristal NP',
      ],
      sourceIds: ['one-earth-eco-5'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Wet tropics with high rainfall varying from 2,000 mm per annum in the north to 1,200 mm in the south; temperatures range from an annual mean maximum of 24\u201327\u00b0C to an annual mean minimum of 18\u201321\u00b0C.',
        annualPrecipitationMm: { min: 1200, max: 2000 },
        temperatureC: { min: 18, max: 27 },
      },
      sourceIds: ['one-earth-eco-5'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'coastal evergreen moist forests characterize the vegetation',
        'more than 3,000 plant species recorded at Monts de Cristal with 100 strict endemics',
        'over 200 plant species strictly endemic to the ecoregion',
        'large forest mammal assemblages including mandrill, black colobus, bongo, and forest buffalo',
      ],
      sourceIds: ['one-earth-eco-5'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'ancient cradle for Congo endemism and globally important populations of large forest mammals',
        'high rainfall sustaining evergreen moist forest and exceptional plant endemicity',
        'wetland and forest habitats supporting western lowland gorilla, chimpanzee, and African forest elephant',
        'important food-web role of mandrill, bongo, and forest buffalo populations',
      ],
      sourceIds: ['one-earth-eco-5'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 3 against a conservation target of 86%. Protected areas include Campo-Ma\u2019an NP, Douala-Ed\u00e9a Faunal Reserve, Monte Al\u00e9n NP, Lop\u00e9 NP, and Monts de Cristal NP. Threats include selective logging, bushmeat hunting, and elephant poaching. Priority actions are supporting local communities for alternative income, tracking wildlife, and supporting agro-industry management of high conservation value forests.',
      sourceIds: ['one-earth-eco-5'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:western-lowland-gorilla',
      'species:mandrill',
      'species:bongo',
      'species:african-forest-elephant',
    ],
    countryIds: ['AO', 'CM', 'CG', 'CD', 'GQ', 'GA'],
    sources: ['one-earth-eco-5'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:6',
    summary: {
      value:
        'The Cross-Niger Transition Forests lie between the biogeographic barriers of the Cross River and the formidable Niger River in southern Nigeria. These remnant forests harbour species transitional between the Upper Guinean and Lower Guinean forest blocks. Three vegetation zones cross the ecoregion south to north, reflecting decreasing rainfall further inland.',
      sourceIds: ['one-earth-eco-6'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'found nestled between the biogeographic barriers of the Cross River and the Niger River',
        'southern Nigeria remnant forests',
        'three vegetation zones crossing the ecoregion south to north',
        'small protected reserves including Anambra FR, Mamu River FR, and Stubbs Creek FR',
      ],
      sourceIds: ['one-earth-eco-6'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical, with a rainforest zone in the south receiving 2,000\u20132,500 mm of annual rainfall and a drier mixed deciduous forest zone further north with 1,500\u20132,000 mm rainfall.',
        annualPrecipitationMm: { min: 1500, max: 2500 },
      },
      sourceIds: ['one-earth-eco-6'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'rainforest zone in the south with high annual rainfall',
        'mixed deciduous forest zone further north and drier',
        'remnant forests transitional between Upper Guinean and Lower Guinean blocks',
        'sacred groves and forest reserves retaining native cover',
      ],
      sourceIds: ['one-earth-eco-6'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'transitional biogeography between the Upper Guinean and Lower Guinean forest blocks',
        'two near-endemic species, the Sclater\u2019s guenon and the crested chameleon',
        'the Anambra waxbill as a near-endemic bird typical of the Cross-Niger region',
        'anthropogenic fires and long-standing high human population shaping remaining habitat',
      ],
      sourceIds: ['one-earth-eco-6'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 10 against a conservation target of 3%. Protected areas include Anambra FR (194 km\u00b2), Mamu River FR, Osomari FR, Akpaka FR, and Stubbs Creek FR (210 km\u00b2), along with sacred groves. Threats include a long-standing high human population (100\u2013500 people/km\u00b2), conversion to agriculture, small-scale logging, bushmeat hunting, and anthropogenic fires. Priority actions are empowering communities, reforesting forest reserves, and retaining and improving protected areas.',
      sourceIds: ['one-earth-eco-6'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sclaters-guenon',
      'species:crested-chameleon',
      'species:anambra-waxbill',
    ],
    countryIds: ['NG'],
    sources: ['one-earth-eco-6'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:7',
    summary: {
      value:
        'The end of the last ice age divided this ecoregion by the rising ocean between the mainland lowland forests and the island of Bioko. Despite this disconnection, exceptional species richness persists in both areas. This ecoregion contains the highest numbers of forest-restricted birds and mammals in Africa, including the strictly endemic Preuss\u2019s red colobus and the highly threatened Cross River population of the lowland gorilla.',
      sourceIds: ['one-earth-eco-7'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'mainland lowland forests of Cameroon, Equatorial Guinea, and Nigeria separated from the island of Bioko',
        'rugged southwestern foothills of Mount Cameroon and southwest Bioko',
        'among the wettest areas in tropical Africa',
        'Korup NP, Cross River NP, and Takamanda NP among key protected areas',
      ],
      sourceIds: ['one-earth-eco-7'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'One of the wettest areas in tropical Africa, with rainfall exceeding 10,000 mm per annum in the rugged southwestern foothills of Mount Cameroon and on southwest Bioko; away from the montane influence rainfall averages 3,000 mm along the coast and falls to around 2,000 mm inland.',
        annualPrecipitationMm: { min: 2000, max: 10000 },
        temperatureC: { min: 15, max: 33 },
      },
      sourceIds: ['one-earth-eco-7'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'at least 200 species of plants endemic, including Deinbollia angustifolia, D. saligna, and Medusandra richardsiana',
        'species-rich mainland lowland forest',
        'montane-influenced forests on Bioko',
        'exceptional forest-restricted bird and mammal richness across both areas',
      ],
      sourceIds: ['one-earth-eco-7'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'division of the ecoregion by rising ocean after the last ice age isolating Bioko biota',
        'highest numbers of forest-restricted birds and mammals in Africa',
        'strictly endemic Preuss\u2019s red colobus and the highly threatened Cross River gorilla population',
        'endemic species including the Bibundi bat, pitch shrew, and Schneider\u2019s banana frog',
      ],
      sourceIds: ['one-earth-eco-7'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 3 against a conservation target of 60%. Protected areas include Korup NP (1,261 km\u00b2), Cross River NP (8,000 km\u00b2), and Takamanda NP. Threats include commercial logging, plantation agriculture (rubber, oil palm), and bushmeat hunting, including of gorillas for religious and medicinal use. Priority actions are supporting sustainable livelihoods, establishing community REDD+ schemes, and increasing enforcement against bushmeat hunting.',
      sourceIds: ['one-earth-eco-7'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:preuss-red-colobus',
      'species:cross-river-gorilla',
      'species:drill',
    ],
    countryIds: ['CM', 'GQ', 'NG'],
    sources: ['one-earth-eco-7'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:21',
    summary: {
      value:
        'The volcanic history of Mount Cameroon and Bioko leaves its mark through barren lava fields, rifting, collapsed scars, and cinder cones on the tallest peak in the region at 4,095 m. Habitats range from submontane and montane forests to subalpine grasslands, yielding high species richness in a restricted area. Strictly endemic species include the Arrogant shrew, an endemic subspecies of drill on Bioko, and the endemic Buea small tongue toad.',
      sourceIds: ['one-earth-eco-21'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Mount Cameroon, the tallest peak in the region at 4,095 m, and the island of Bioko',
        'barren lava fields, rifting, collapsed scars, and cinder cones from volcanic eruptions',
        'submontane and montane forests grading into subalpine grasslands',
        'Mount Cameroon NP, Basil\u00e9 NP, and Luba Crater Scientific Reserve',
      ],
      sourceIds: ['one-earth-eco-21'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'The southwestern sides of both Mount Cameroon and Bioko have a virtually continuous wet rainy season, with rainfall reaching 10,000 mm per year in lower tropical altitudes; temperatures at the base average 25.5\u201327\u00b0C and can reach 32\u201335\u00b0C in the hottest months, declining approximately 1\u00b0C per 150 m of elevation.',
        annualPrecipitationMm: { min: 2000, max: 10000 },
        temperatureC: { min: 25, max: 35 },
      },
      sourceIds: ['one-earth-eco-21'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'at least 42 plant species and three genera strictly endemic, mostly at higher elevations',
        'another 50 species near-endemic to Mount Cameroon',
        'submontane and montane forests',
        'subalpine grasslands at the highest elevations',
      ],
      sourceIds: ['one-earth-eco-21'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'volcanic activity shaping barren lava fields, rifting, and cinder cones',
        'diversity of habitats within a restricted geographical area driving high species richness',
        'strictly endemic Arrogant shrew and endemic subspecies of drill on Bioko',
        'altitudinal temperature gradient of approximately 1\u00b0C per 150 m',
      ],
      sourceIds: ['one-earth-eco-21'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 6 against a conservation target of 100%. Protected areas include Mount Cameroon NP (581 km\u00b2), Basil\u00e9 NP (330 km\u00b2), and Luba Crater Scientific Reserve (510 km\u00b2). Threats include agriculture (oil palm, rubber plantations), bushmeat hunting, the live animal pet trade, and Prunus africana exploitation. Priority actions are increasing law enforcement and monitoring, continuing forest financing, and supporting agro-industry management.',
      sourceIds: ['one-earth-eco-21'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:mount-cameroon-francolin',
      'species:mount-cameroon-speirops',
      'species:drill',
    ],
    countryIds: ['CM', 'GQ'],
    sources: ['one-earth-eco-21'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:22',
    summary: {
      value:
        'For millions of years, since the Upper Cretaceous period, the Niger River has deposited sediment at its mouth creating the largest swamp forest habitat in Africa after the Congo Basin Swamp Forests. Since the discovery of oil this former refuge for plants and wildlife is now highly threatened by human activity. The swamp forest is subdivided into flood forest, the eastern delta flank, and the central backswamp area.',
      sourceIds: ['one-earth-eco-22'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'largest swamp forest habitat in Africa after the Congo Basin Swamp Forests',
        'Niger Delta created by millennia of sediment deposition at the river mouth',
        'subdivided into flood forest, the eastern delta flank, and the central backswamp area',
        'small sacred groves and Upper Orashi, Nun River, and Lower Orashi forest reserves',
      ],
      sourceIds: ['one-earth-eco-22'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical with a long rainy season from March\u2013April to October, precipitation increasing from the north of the delta (average 2,500 mm) to the coastal area (average 4,000 mm).',
        annualPrecipitationMm: { min: 2500, max: 4000 },
      },
      sourceIds: ['one-earth-eco-22'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'flood forest with complete inundation in October to December',
        'eastern delta flank swamp forest',
        'central backswamp area',
        'freshwater swamp forest grading into coastal wetlands',
      ],
      sourceIds: ['one-earth-eco-22'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Upper Cretaceous era river dynamics depositing sediment to build the delta',
        'largest swamp forest habitat in Africa after the Congo Basin Swamp Forests',
        'endemic Niger Delta red colobus and Niger Delta pygmy hippopotamus',
        'heavy oil spill contamination and fish population decline disrupting the wetland web',
      ],
      sourceIds: ['one-earth-eco-22'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 10 against a conservation target of 8%. Protected areas are limited to small sacred groves and the Upper Orashi, Nun River, and Lower Orashi forest reserves, which are heavily exploited. Threats include oil exploration (with an estimated 1.5 million tons spilled in 50 years, roughly 50 times the Exxon Valdez), logging, a growing human population, and fish population decline. Priority actions are science-based biodiversity remediation for oil spills, creating a community development fund, and mainstreaming biodiversity into oil and gas operations.',
      sourceIds: ['one-earth-eco-22'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:niger-delta-red-colobus',
      'species:niger-delta-pygmy-hippo',
      'species:sclaters-guenon',
      'species:white-throated-guenon',
    ],
    countryIds: ['NG'],
    sources: ['one-earth-eco-22'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:23',
    summary: {
      value:
        'A dense human population, threatened mammals including the African bush elephant and the western chimpanzee, and a few endemic species like the Ibadan malimbe share space in this narrow region along the coast of southwestern Nigeria. The ecoregion is confined to a narrow, gently undulating coastal plain of 150 m altitude. Vegetation changes gradually from rainforest in the south to mixed deciduous forest further north.',
      sourceIds: ['one-earth-eco-23'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'narrow, gently undulating coastal plain of 150 m altitude in southwestern Nigeria',
        'region along the coast bounded by dense human population',
        'Omo Biosphere Reserve, Kwale GR, Gilli-Gilli GR, Okomu NP, and Ifon GR',
        'forest fragmented into disconnected blocks',
      ],
      sourceIds: ['one-earth-eco-23'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical, with gradual change from rainforest in the south where typical mean annual rainfall varies from 2,000 to 2,500 mm, to mixed deciduous forest further north receiving 1,500 to 2,000 mm per year.',
        annualPrecipitationMm: { min: 1500, max: 2500 },
      },
      sourceIds: ['one-earth-eco-23'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'rainforest in the south with 2,000\u20132,500 mm annual rainfall',
        'mixed deciduous forest further north with 1,500\u20132,000 mm annual rainfall',
        'vegetation distribution dependent mainly on climate',
        'forest fragmented into disconnected blocks by human land use',
      ],
      sourceIds: ['one-earth-eco-23'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'gradual climate-driven transition from rainforest to mixed deciduous forest',
        'endemic bird the Ibadan malimbe',
        'threatened mammals including African bush elephant and western chimpanzee, possibly a new subspecies',
        'forest fragmentation into disconnected blocks and bushmeat hunting',
      ],
      sourceIds: ['one-earth-eco-23'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 10 against a conservation target of 18%. Protected areas include Omo Biosphere Reserve, Kwale GR, Gilli-Gilli GR, Okomu NP, and Ifon GR. Threats include roughly 55 million inhabitants (100\u2013500 people/km\u00b2), cocoa farming, logging, bushmeat hunting, and forest fragmentation into disconnected blocks. Priority actions are re-establishing carbon stocks via REDD+, evaluating forest reserves for conservation significance, and enforcing stricter protection on forests.',
      sourceIds: ['one-earth-eco-23'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:ibadan-malimbe',
      'species:white-throated-guenon',
      'species:african-elephant',
    ],
    countryIds: ['NG'],
    sources: ['one-earth-eco-23'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:27',
    summary: {
      value:
        'The lush forests of this ecoregion envelop the islands\u2019 inactive volcanic slopes and appear to drop straight into the ocean roughly 250 km off the coast of western Africa. This small island group of Principe, Sao Tome, and Annobon hosts a remarkable number of unique species. These include the giant sunbird, the Sao Tome grosbeak\u2014the world\u2019s largest canary\u2014and giant begonias reaching up to 3 m in height.',
      sourceIds: ['one-earth-eco-27'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'three volcanic islands of Principe, Sao Tome, and Annobon in the Gulf of Guinea',
        'inactive volcanic slopes dropping steeply into the ocean',
        'located about 250 km off the coast of western Africa',
        'Parques Naturais d\u2019Obo, Principe UNESCO Biosphere Reserve, and Annobon protected area',
      ],
      sourceIds: ['one-earth-eco-27'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'On Sao Tome, annual rainfall ranges from 1,000 mm in the northeast to more than 4,000 mm in the southwest; mean annual temperatures range from a maximum of 30\u201333\u00b0C to a minimum of 18\u201321\u00b0C.',
        annualPrecipitationMm: { min: 1000, max: 4000 },
        temperatureC: { min: 18, max: 33 },
      },
      sourceIds: ['one-earth-eco-27'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'giant endemic begonias Begonia crateris and Begonia baccata reaching 3 m in height',
        '37 endemic plant species on Principe, 95 on Sao Tome, and 20 on Annobon',
        'lush lowland forests on inactive volcanic slopes',
        'montane forest and endemism-rich island flora',
      ],
      sourceIds: ['one-earth-eco-27'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'oceanic isolation roughly 250 km off the African coast driving remarkable endemism',
        'endemic giant sunbird and Sao Tome grosbeak, the world\u2019s largest canary',
        'dwarf olive ibis rediscovered after 60+ years',
        'endemic mammals including the Sao Tome shrew and endemic fruit bats',
      ],
      sourceIds: ['one-earth-eco-27'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 3 against a conservation target of 100%. Protected areas include Parques Naturais d\u2019Obo, the Principe UNESCO Biosphere Reserve, and the Annobon protected area (ratified 2000). Threats include historical plantation clearing (sugar, coffee, cocoa), agricultural encroachment into montane forest, and the pet trade (African grey parrot banned since 2016). Priority actions are implementing species action plans for Critically Endangered birds, promoting sustainable forest use, and building local conservation capacity.',
      sourceIds: ['one-earth-eco-27'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:giant-sunbird',
      'species:sao-tome-grosbeak',
      'species:dwarf-olive-ibis',
      'species:sao-tome-scops-owl',
      'species:sao-tome-shrew',
    ],
    countryIds: ['ST', 'GQ'],
    sources: ['one-earth-eco-27'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:111',
    summary: {
      value:
        'The Central African Mangroves contain the largest mangrove stands in Africa and the third largest in the world, found chiefly in the Niger Delta of Nigeria. This is also where, over the past 50 years, an estimated 1.5 million tons of oil has been spilled, roughly 50 times the Exxon Valdez disaster. Five mangrove species occur here alongside near-endemic Sclater\u2019s guenon, talapoin monkey, and African manatee.',
      sourceIds: ['one-earth-eco-111'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'largest mangrove stands in Africa and the third largest in the world in the Niger Delta',
        'located in western Africa across Ghana, Nigeria, Cameroon, Equatorial Guinea, Gabon, DR Congo, and Angola',
        'Douala Edea Faunal Reserve, Anlo-Keta Lagoon Complex, and Pongara NP among protected sites',
        'Anlo-Keta Lagoon Complex and Songor Biosphere Reserve in Ghana',
      ],
      sourceIds: ['one-earth-eco-111'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Annual rainfall varies from a mean of 750 mm in Angola to 6,000 mm in Cameroon, spanning tropical to temperate conditions.',
        annualPrecipitationMm: { min: 750, max: 6000 },
      },
      sourceIds: ['one-earth-eco-111'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'red mangroves Rhizophora racemosa, R. mangle, and R. harrisonii',
        'white mangroves Avicennia germinans and Laguncularia racemosa',
        'introduced species Nypa fruticans',
        'five mangrove species found across the region',
      ],
      sourceIds: ['one-earth-eco-111'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'largest mangrove stands in Africa and third largest in the world',
        'near-endemic Sclater\u2019s guenon and talapoin monkey inhabiting the mangroves',
        'African manatee and five marine turtle species among key fauna',
        'heavy oil pollution from an estimated 1.5 million tons spilled over 50 years',
      ],
      sourceIds: ['one-earth-eco-111'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 4 against a conservation target of 45%. Protected areas include the Douala Edea Faunal Reserve (Cameroon), Anlo-Keta Lagoon Complex and Songor Biosphere Reserve (Ghana), Apoi Creek Ramsar Site (Nigeria), Pongara NP (Gabon), and Estuario del Muni Natural Reserve (Equatorial Guinea). Threats include oil pollution, urbanization, industrialization, agriculture, timber exploitation, gas flaring, dynamite fishing, sewage discharge, nipa palm invasion, water hyacinth, and sea level rise. Priority actions are developing alternative energy sources, sustainable income alternatives, and mangrove conservation policies with community participation.',
      sourceIds: ['one-earth-eco-111'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sclaters-guenon',
      'species:talapoin-monkey',
      'species:west-african-manatee',
    ],
    countryIds: ['GH', 'NG', 'CM', 'GQ', 'GA', 'CD', 'AO'],
    sources: ['one-earth-eco-111'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:3',
    summary: {
      value:
        'The Central Congolian Lowland Forests lie in the Cuvette Centrale of the Congo Basin, south of the wide arc formed by the Congo River. Dense evergreen rainforests and seasonally inundated swamps harbour the world\u2019s largest populations of bonobo, a primate endemic to DR Congo, along with okapi, Congo peacock, and African forest elephant. The ecoregion encompasses roughly 41.5 million hectares and contains Salonga National Park, one of the largest protected areas on the continent.',
      sourceIds: ['one-earth-eco-3'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'central Congo Basin lowlands south of the Congo River\u2019s wide arc',
        'river boundaries on the north, east, and west isolating the basin as a distinct species zone',
        'mosaic of permanent swamp forests in the north and drier semi-evergreen rainforests and grasslands in the south',
        'Salonga National Park covering roughly 36,000 km\u00B2',
      ],
      sourceIds: ['one-earth-eco-3'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Wet equatorial with approximately 2,000 mm of rainfall annually; mean maximum temperatures around 30\u00B0C in the central portion falling to around 27\u00B0C along the southeast margins; mean minimum temperatures between 18 and 21\u00B0C.',
        annualPrecipitationMm: { min: 2000, max: 2000 },
        temperatureC: { min: 18, max: 30 },
      },
      sourceIds: ['one-earth-eco-3'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'evergreen rainforests dominated by stands of Gilbertiodendron dewevrei',
        'semi-deciduous forest covering nearly all areas between major river systems',
        '1,500 to 2,000 vascular plant species with roughly 10 percent endemism',
        'seasonally inundated swamp forests along northern tributaries',
      ],
      sourceIds: ['one-earth-eco-3'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Congo River acting as a biogeographic barrier isolating lowland species',
        'seasonal inundation driving nutrient cycling and forest composition',
        'endemic bonobo population reliant on intact canopy and fruit availability',
        'forest elephant seed dispersal maintaining tree diversity across the basin',
      ],
      sourceIds: ['one-earth-eco-3'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 2 against a conservation target of 93%. Protected areas include Salonga National Park (36,000 km\u00B2), Lomami National Park, Sankuru Nature Reserve, Lomako-Yokokala Nature Reserve, and Lyondji Bonobo Community Reserve. Threats include small-scale farming, logging, ivory poaching, bushmeat hunting, and live animal trade. Priority actions are reducing illegal trade of bushmeat and ivory, increasing law enforcement, and implementing alternative livelihood programmes.',
      sourceIds: ['one-earth-eco-3'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bonobo',
      'species:lesula-monkey',
      'species:salonga-guenon',
      'species:golden-bellied-mangabey',
      'species:okapi',
      'species:congo-peacock',
      'species:african-slender-snouted-croc',
    ],
    countryIds: ['CD'],
    sources: ['one-earth-eco-3'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:10',
    summary: {
      value:
        'The Eastern Congolian Swamp Forests together with the neighbouring Western Congolian Swamp Forests form one of the largest swamp-forest complexes on Earth. Together they were separated into east and west sections based on the Congo River\u2019s role as an ecological barrier to non-flying vertebrates, most notably excluding the bonobo from the right bank. The ecoregion spans roughly 9.3 million hectares on the left bank of the Congo and its tributaries, comprising a mosaic of open water, swamp forest, seasonally flooded forest, and dryland forest.',
      sourceIds: ['one-earth-eco-10'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'left bank of the Congo River and its tributaries forming a broad arc across the central basin',
        'predominantly flat terrain within the wet tropics',
        'mosaic of open water, swamp forest, seasonally flooded forest, dryland forest, and inundated savannas',
        'Tumba-Lediima Nature Reserve (7,412 km\u00B2) and Tumba-Ngiri-Maindombe Ramsar Site (65,696 km\u00B2)',
      ],
      sourceIds: ['one-earth-eco-10'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Wet tropical with average annual rainfall exceeding 2,000 mm; mean maximum temperatures above 30\u00B0C; minimum temperatures typically between 18 and 21\u00B0C.',
        annualPrecipitationMm: { min: 2000, max: 2000 },
        temperatureC: { min: 18, max: 30 },
      },
      sourceIds: ['one-earth-eco-10'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'swamp forest and seasonally flooded forest driven by Congo River flood dynamics',
        'open water channels and seasonally inundated savannas',
        'dryland forest patches on higher ground between waterways',
        'floristically similar to the western swamp-forest section but separated by the Congo River barrier',
      ],
      sourceIds: ['one-earth-eco-10'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Congo River flood regime shaping forest composition and species distribution',
        'one strictly endemic rodent, Muton\u2019s soft-furred mouse, evolving in isolation',
        'near-endemic amphibians and reptiles including the tiny wax frog',
        'primate community structure influenced by river barriers excluding bonobo',
      ],
      sourceIds: ['one-earth-eco-10'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 3 against a conservation target of 89%. Protected areas include Lomami National Park, Salonga National Park, Tumba-Lediima Nature Reserve (7,412 km\u00B2), and the Tumba-Ngiri-Maindombe Ramsar Site (65,696 km\u00B2). Threats include logging, bushmeat hunting, elephant poaching for ivory, and bonobo hunting for meat and the pet trade. Priority actions are incorporating local communities\u2019 knowledge and land rights, decreasing demand for illegal forest products, and encouraging alternative livelihoods.',
      sourceIds: ['one-earth-eco-10'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:allens-swamp-monkey',
      'species:angolan-colobus',
      'species:wolfs-guenon',
      'species:mutons-soft-furred-mouse',
      'species:congo-sunbird',
      'species:tiny-wax-frog',
    ],
    countryIds: ['CD', 'CG'],
    sources: ['one-earth-eco-10'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:29',
    summary: {
      value:
        'The Western Congolian Swamp Forests grow along the meandering tributaries of the Congo River and were preserved as part of an ancient fluvial refuge during a climatic crisis roughly 2,500 years ago. Dense swamp forests shelter important populations of western lowland gorilla, chimpanzee, and African forest elephant. Beneath the canopy lies one of the world\u2019s largest tropical peat deposits, storing approximately 30.6 petagrams of carbon within the Cuvette Centrale depression.',
      sourceIds: ['one-earth-eco-29'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'meandering tributaries of the Congo River within the Cuvette Centrale depression',
        'extensive peat deposits beneath the swamp forests storing approximately 30.6 petagrams of carbon',
        'ancient fluvial refuge that remained intact during regional forest fragmentation',
        'Lac T\u00E9l\u00E9 Community Reserve (4,390 km\u00B2 Ramsar) and Ntokou-Pikounda National Park',
      ],
      sourceIds: ['one-earth-eco-29'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Wet tropics with mean annual rainfall around 1,800 mm; mean maximum temperatures around 30\u00B0C; mean minimum temperatures between 21 and 24\u00B0C.',
        annualPrecipitationMm: { min: 1800, max: 1800 },
        temperatureC: { min: 21, max: 30 },
      },
      sourceIds: ['one-earth-eco-29'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dense swamp forests growing along tributary floodplains',
        'extensive peat-forming wetlands in the Cuvette Centrale depression',
        'canopy dominated by freshwater swamp tree species',
        'mosaic with seasonal floodplain grasslands and gallery forests along river margins',
      ],
      sourceIds: ['one-earth-eco-29'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'fluvial refuge preserving intact forests during ancient regional fragmentation',
        'massive peat carbon storage unique to the Cuvette Centrale depression',
        'western lowland gorilla and chimpanzee populations relying on intact swamp forest habitat',
        'African forest elephant maintaining canopy gaps and seed dispersal',
      ],
      sourceIds: ['one-earth-eco-29'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 6 against a conservation target of 90%. Protected areas include the Lac T\u00E9l\u00E9 Community Reserve (4,390 km\u00B2 Ramsar), Ntokou-Pikounda National Park, Ngiri Nature Reserve, and the Ngiri-Tumba-Maindombe Ramsar Site. Threats include logging concessions, road construction facilitating hunting, elephant poaching, and bushmeat hunting. Priority actions are continuing surveys of large mammal and fish populations, collaborating with the military for anti-poaching patrols, and expanding the Lac T\u00E9l\u00E9 Community Reserve boundary.',
      sourceIds: ['one-earth-eco-29'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:crowned-guenon',
      'species:moustached-guenon',
      'species:guereza-lowland-colobus',
      'species:congo-martin',
      'species:western-lowland-gorilla',
    ],
    countryIds: ['CG', 'CD', 'CF'],
    sources: ['one-earth-eco-29'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:1',
    summary: {
      value:
        'The Albertine Rift Montane Forests contain the highest levels of faunal endemism in Africa and harbour the mountain gorilla, one of the rarest animals in Africa. The ecoregion comprises a major mountain range running from the Lendu Plateau in DR Congo northward through mountains on the Uganda-eastern DR Congo border into western Rwanda and Burundi, and to isolated massifs in Tanzania and DR Congo on either side of Lake Tanganyika.',
      sourceIds: ['one-earth-eco-1'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'major mountain range running from the Lendu Plateau in DR Congo in the north',
        'mountains along the Uganda and eastern DR Congo border into western Rwanda and Burundi',
        'isolated massifs in Tanzania and DR Congo on either side of Lake Tanganyika',
        'protected areas including Bwindi-Impenetrable, Mgahinga Gorilla, Virunga, Kahuzi-Biega, Nyungwe, Kibale, and Volcanoes National Parks',
      ],
      sourceIds: ['one-earth-eco-1'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Temperate (montane) climate; average rainfall typically between 1,200 and 2,200 mm per annum, reaching about 3,000 mm per annum on the western slope of the Rwenzori.',
        annualPrecipitationMm: { min: 1200, max: 3000 },
      },
      sourceIds: ['one-earth-eco-1'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'montane rainforest grading into bamboo and alpine zones with elevation',
        'designated an Endemic Bird Area by BirdLife International for its bird assemblage',
        'exceptional amphibian endemism with 34 strict endemic species',
        'endemic mammalian community containing 34 strictly endemic species',
      ],
      sourceIds: ['one-earth-eco-1'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'highest levels of faunal endemism in Africa concentrated along the Albertine Rift',
        'elevational zonation creating distinct montane habitat bands',
        'mountain gorilla and other large primates relying on intact montane forest',
        'isolated massifs around Lake Tanganyika acting as refugia for endemic species',
      ],
      sourceIds: ['one-earth-eco-1'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 3 against a conservation target of 46%. Protected areas include Bwindi-Impenetrable, Mgahinga Gorilla, Virunga, Kahuzi-Biega, Nyungwe, Kibale, and Volcanoes National Parks. Threats include agriculture clearance at the highest rural population density in Africa (roughly 1,000 people per km\u00B2), bushmeat hunting, firewood and charcoal collection, exotic species invasion, mining for coltan, oil exploration, and conflict impacts. Priority actions are establishing and refurbishing post-war parks, supporting sustainable livelihoods, and continuing Itombwe Massif zoning.',
      sourceIds: ['one-earth-eco-1'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:mountain-gorilla',
      'species:golden-monkey',
      'species:owl-faced-monkey',
      'species:ruwenzori-duiker',
      'species:loests-monkey',
      'species:ruwenzori-turaco',
      'species:ruwenzori-otter-shrew',
    ],
    countryIds: ['CD', 'UG', 'BI', 'RW', 'TZ'],
    sources: ['one-earth-eco-1'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:61',
    summary: {
      value:
        'Centered on Lake Victoria, the largest freshwater lake in Africa, this ecoregion encompasses most of south-central Uganda, the eastern half of Rwanda, and extends marginally into Tanzania, Burundi, DR Congo, and Kenya. Its tropical humid savanna climate supports a species-rich avifauna, while Kibale forest is among the most primate-rich forests in Africa, supporting twelve species.',
      sourceIds: ['one-earth-eco-61'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'centered on Lake Victoria, the largest freshwater lake in Africa and the second largest in the world by surface area',
        'encompasses most of south-central Uganda and the eastern half of Rwanda',
        'extends marginally into Tanzania, Burundi, DR Congo, and Kenya',
        'includes Queen Elizabeth, Virunga, Lake Mburo, Murchison Falls, Akagera National Parks and Saiwa Swamp',
      ],
      sourceIds: ['one-earth-eco-61'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical humid savanna with annual mean maximum temperatures ranging from 24\u00B0 to 27\u00B0C and mean minimum temperatures ranging from 15\u00B0 to 18\u00B0C.',
        annualPrecipitationMm: { min: 1000, max: 2000 },
        temperatureC: { min: 15, max: 27 },
      },
      sourceIds: ['one-earth-eco-61'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'forest-savanna mosaic surrounding Lake Victoria',
        'Papyrus swamp vegetation supporting the two strict endemic bird species',
        'species-rich but limited avifauna with only two strict endemic species',
        'primate-rich forest such as Kibale with twelve species',
      ],
      sourceIds: ['one-earth-eco-61'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Lake Victoria formed by tectonic uplift of the eastern and western rifts',
        'lake supporting the livelihoods of roughly 30 million people through irrigated agriculture and fishing',
        'Papyrus swamps sustaining endemic bird species',
        'irrigated agriculture and riverine corridors linking forest and savanna habitats',
      ],
      sourceIds: ['one-earth-eco-61'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 8 against a conservation target of 13%. Protected areas include Queen Elizabeth, Virunga, Lake Mburo, Murchison Falls, and Akagera National Parks and Saiwa Swamp. Threats include refugee and pastoralist encroachment, unsustainable fishing, wetland clearance, agricultural intensification, and war impacts. Priority actions are supporting sustainable natural resource use, community-based ecological corridor restoration, and anti-poaching ranger deployment.',
      sourceIds: ['one-earth-eco-61'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:papyrus-canary',
      'species:foxs-weaver',
      'species:shoebill',
      'species:giraffe',
      'species:african-elephant',
    ],
    countryIds: ['UG', 'RW', 'TZ', 'CD', 'BI', 'KE'],
    sources: ['one-earth-eco-61'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:86',
    summary: {
      value:
        'The Rwenzori-Virunga Montane Moorlands occupy the high-elevation portions, above 3,000 m, of the Rwenzori and Virunga Mountains, whose summit reaches 5,108 m at Margherita Peak, Africa\u2019s third tallest. These Afroalpine moorlands feature giant heathers, groundsels, ericas, and lobelias, with fourteen plant species strictly endemic to the Rwenzoris and five to the Virungas.',
      sourceIds: ['one-earth-eco-86'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'high-elevation portions (above 3,000 m) of the Rwenzori and Virunga Mountains',
        'Rwenzori range along the borders of southwestern Uganda and DR Congo',
        'Virunga mountains at the borders of Rwanda, DR Congo, and Uganda',
        'protected areas including Mgahinga Gorilla, Rwenzori Mountains, Volcanoes, and Virunga National Parks',
      ],
      sourceIds: ['one-earth-eco-86'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Afroalpine climate with temperatures varying daily from freezing to above freezing, and high rainfall associated with persistent cloud cover.',
      },
      sourceIds: ['one-earth-eco-86'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Afroalpine moorlands adapted to harsh climatic conditions',
        'giant heathers, groundsels, ericas, and lobelias, some endemic',
        'fourteen plant species strictly endemic to the Rwenzoris',
        'five plant species strictly endemic to the Virungas',
      ],
      sourceIds: ['one-earth-eco-86'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'part of the Afroalpine archipelago-like region of extreme floristic impoverishment with high rates of endemism',
        'altitudinal zonation above 3,000 m shaping moorland vegetation',
        'giant rosette plants adapted to daily freeze-thaw cycles',
        'border habitats occasionally used by mountain gorilla populations',
      ],
      sourceIds: ['one-earth-eco-86'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 10 against a conservation target of 100%. Protected areas include Mgahinga Gorilla, Rwenzori Mountains, Volcanoes, and Virunga National Parks, all part of World Heritage sites or biosphere reserves. Threats include encroachment, illegal wood and bamboo cutting, feral dogs, agricultural and pastoral activities on park borders, exotic plant invasion, and human-induced fire. Priority actions are promoting community conservation enterprises, improving cross-border law enforcement, and re-initiating sustainable ecotourism.',
      sourceIds: ['one-earth-eco-86'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:rwenzori-black-fronted-duiker',
      'species:stuhlmans-double-collared-sunbird',
      'species:mountain-gorilla',
    ],
    countryIds: ['CD', 'UG', 'RW'],
    sources: ['one-earth-eco-86'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:11',
    summary: {
      value:
        'The Eastern Guinean Forests extend from the east banks of the Sassandra River in western Côte d\u2019Ivoire to the edge of Lake Volta in Ghana, with a small extension east of Lake Volta in the Togo Hills. Known by local people as \u201cmessengers of God,\u201d the king colobus monkey inhabits this ecoregion but only to the east of the Sassandra River. Four small mammals are strictly endemic here, including Wimmer\u2019s shrew, and the ecoregion supports around 120 endemic butterfly species.',
      sourceIds: ['one-earth-eco-11'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'extends from the east banks of the Sassandra River in western Côte d\u2019Ivoire to the edge of Lake Volta in Ghana',
        'small extension east of Lake Volta in the Togo Hills',
        'protected areas include Kakum National Park, Bia National Park, Marahoué National Park, and Comoé National Park',
        'numerous sacred groves across the region',
      ],
      sourceIds: ['one-earth-eco-11'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical with annual rainfall of 1,500\u20132,500 mm and extreme temperatures ranging from 10\u00b0 to 43\u00b0C.',
        annualPrecipitationMm: { min: 1500, max: 2500 },
        temperatureC: { min: 10, max: 43 },
      },
      sourceIds: ['one-earth-eco-11'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'tropical lowland and transitional moist forests',
        'guineo-congolian rainforest dominated forest cover',
        'forest-savanna transition along the eastern margins',
        'sacred groves retaining remnant native forest',
      ],
      sourceIds: ['one-earth-eco-11'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'king colobus monkey movements between treetops and ground as a habitual behaviour between the trees and the ground',
        'high endemism with four strictly endemic small mammals and roughly 120 endemic butterfly species',
        'west-east transition from guineo-congolian forest to drier forest-savanna vegetation',
        'large mammal assemblages including pygmy hippopotamus and African forest elephant',
      ],
      sourceIds: ['one-earth-eco-11'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 10 against a conservation target of 23%. Protected areas include Kakum NP, Bia NP, Marahoué NP, and Comoé NP, along with numerous sacred groves. Threats include slash-and-burn agriculture for cocoa and coffee, commercial logging, bushmeat hunting, and urban expansion. Priority actions are upgrading managed areas to national parks, developing forest management plans, and supporting alternative livelihoods.',
      sourceIds: ['one-earth-eco-11'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:king-colobus',
      'species:wimmers-shrew',
      'species:african-elephant',
    ],
    countryIds: ['BJ', 'CI', 'GH', 'TG'],
    sources: ['one-earth-eco-11'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:14',
    summary: {
      value:
        'The Guinean Montane Forests consist of an array of peaks and plateaus at high elevations, distinguishable against a backdrop of surrounding lowland forests and savannas. Bintumani Peak on Loma Mountain (1,947 m) is the highest peak west of Mount Cameroon, and most major rivers in West Africa have their origins within this ecoregion. Within it, 35 endemic plants including 11 paleoendemics have been recorded, with studies of the Loma Mountains cataloguing 1,576 plant species, nine of them endemic.',
      sourceIds: ['one-earth-eco-14'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'array of peaks and plateaus at high elevations distinguishable against lowland forests and savannas',
        'Bintumani Peak on Loma Mountain at 1,947 m, the highest peak west of Mount Cameroon',
        'sources of most major West African rivers within the ecoregion',
        'protected areas include Mount Nimba Strict Nature Reserve, a World Heritage Site',
      ],
      sourceIds: ['one-earth-eco-14'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Montane tropical climate with annual rainfall of 1,600\u20132,400 mm and temperatures ranging from 10\u00b0 to 33\u00b0C.',
        annualPrecipitationMm: { min: 1600, max: 2400 },
        temperatureC: { min: 10, max: 33 },
      },
      sourceIds: ['one-earth-eco-14'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Guinean montane forests of peaks and plateaus above surrounding lowlands',
        '35 endemic plants recorded, including 11 paleoendemics',
        'nine endemic plant species catalogued in Loma Mountains studies',
        'high-elevation forest and associated montane flora',
      ],
      sourceIds: ['one-earth-eco-14'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'orographic rainfall from the highest peaks west of Mount Cameroon feeding West African river systems',
        'exceptional plant endemicity with 35 endemic plants and 11 paleoendemics',
        'endemic small mammals including the Mount Nimba otter shrew and two white-toothed shrew species',
        'montane refugia supporting western chimpanzee, leopard, and the white-eyed prinia',
      ],
      sourceIds: ['one-earth-eco-14'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 9 against a conservation target of 38%. Protected areas include Mount Nimba Strict Nature Reserve, a World Heritage Site, Loma Mountains National Park, and the Massif du Ziama biosphere reserve. Threats include iron ore mining on Mount Nimba, fires, deforestation for agriculture, and the impacts of civil war. Priority actions are increasing investment in protected areas, conducting ecological investigations, and developing management plans that engage communities.',
      sourceIds: ['one-earth-eco-14'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:mount-nimba-otter-shrew',
      'species:white-eyed-prinia',
      'species:western-chimpanzee',
    ],
    countryIds: ['CI', 'GN', 'LR', 'SL'],
    sources: ['one-earth-eco-14'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:30',
    summary: {
      value:
        'The Western Guinean Lowland Forests extend across four African countries and are inhabited by an impressive variety of species, many strictly endemic. The ecoregion covers one of the wettest parts of West Africa, with seasonal rains averaging 3,300 mm per year and the Freetown Peninsula receiving more than 5,000 mm. The forests support well over 3,000 plant species, at least 200 of which are endemic.',
      sourceIds: ['one-earth-eco-30'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'extends across four African countries: Côte d\u2019Ivoire, Guinea, Liberia, and Sierra Leone',
        'one of the wettest parts of West Africa',
        'Freetown Peninsula receiving more than 5,000 mm of annual rainfall',
        'protected areas include Taï Forest NP, Sapo NP, and the transboundary Gola NP',
      ],
      sourceIds: ['one-earth-eco-30'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'One of the wettest parts of West Africa, with seasonal rains averaging 3,300 mm per year and the Freetown Peninsula receiving more than 5,000 mm; temperatures range from 12\u00b0 to 33\u00b0C.',
        annualPrecipitationMm: { min: 3300, max: 5000 },
        temperatureC: { min: 12, max: 33 },
      },
      sourceIds: ['one-earth-eco-30'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'highly diverse lowland tropical forests',
        'well over 3,000 plant species, at least 200 of them endemic',
        'upper Guinean lowland forest formations',
        'wet evergreen forest sustained by very heavy rainfall',
      ],
      sourceIds: ['one-earth-eco-30'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'exceptional endemicity with many strictly endemic species',
        'high rainfall sustaining one of the wettest forest ecosystems in West Africa',
        'flagship populations including white-necked rockfowl and pygmy hippopotamus',
        'rich faunal assemblage including six endemic duikers, mongoose, and greenbul',
      ],
      sourceIds: ['one-earth-eco-30'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 4 against a conservation target of 34%. Protected areas include Taï Forest NP (3,300 km\u00B2), Sapo NP (1,292 km\u00B2), and the transboundary Gola NP. Threats include the impacts of civil war (uncontrolled logging, mining, and bushmeat hunting), commercial timber extraction, charcoal production, palm oil and rubber clearance, and bauxite and rutile mining. Priority actions are developing species action plans such as for the pygmy hippopotamus, strengthening forest protection, and improving law enforcement.',
      sourceIds: ['one-earth-eco-30'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:white-necked-rockfowl',
      'species:jentinks-duiker',
      'species:zebra-duiker',
      'species:liberian-mongoose',
      'species:johnstons-genet',
      'species:liberian-greenbul',
      'species:gola-malimbe',
    ],
    countryIds: ['CI', 'GN', 'LR', 'SL'],
    sources: ['one-earth-eco-30'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:44',
    summary: {
      value:
        'The Guinean Forest-Savanna runs east to west across West Africa, reaching the coast at the Dahomey Gap, a narrow strip of semi-arid habitats in eastern Ghana and Benin. The landscape is typified by gently rolling plains with scattered inselbergs rising up to 1,500 m, and agricultural land covers around 40 percent of the ecoregion. Despite being illegal, hunting of the western chimpanzee still occurs for bushmeat, the pet trade, traditional beliefs, and crop protection.',
      sourceIds: ['one-earth-eco-44'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'runs east to west across West Africa, reaching the coast at the Dahomey Gap',
        'gently rolling plains with scattered inselbergs rising up to 1,500 m',
        'narrow strip of semi-arid habitats in eastern Ghana and Benin at the Dahomey Gap',
        'protected areas include Old Oyo NP, Bui NP, Badiar NP, and Marahoué NP',
      ],
      sourceIds: ['one-earth-eco-44'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Semi-arid to sub-humid tropical climate with annual rainfall of 1,000\u20132,000 mm and temperatures ranging from 14\u00b0 to 33\u00b0C.',
        annualPrecipitationMm: { min: 1000, max: 2000 },
        temperatureC: { min: 14, max: 33 },
      },
      sourceIds: ['one-earth-eco-44'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'mosaic of forest and savanna woodlands',
        'semi-arid Dahomey Gap habitats',
        'scattered inselbergs rising hundreds of meters above the plains',
        'agricultural land covering around 40 percent of the ecoregion',
      ],
      sourceIds: ['one-earth-eco-44'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'forest-savanna transition supporting flagship red-flanked duiker and critically endangered western chimpanzee',
        'inselbergs rising up to 1,500 m providing habitat refugia',
        'endemic small mammals including Matthey\u2019s mouse and Jackson\u2019s fat mouse',
        'eleven endemic reptile species',
      ],
      sourceIds: ['one-earth-eco-44'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 10 against a conservation target of 17%. Protected areas include Old Oyo National Park in Nigeria, Bui National Park in Ghana, Badiar National Park in Guinea, and Marahoué National Park in Côte d\u2019Ivoire, along with sacred groves. Threats include hunting through the bushmeat trade, habitat loss to agriculture and logging, frequent fires, and minimal tourism income for protected areas. Priority actions are enforcing wildlife laws and developing alternative livelihoods, restoring ecosystems, and promoting sustainable agriculture.',
      sourceIds: ['one-earth-eco-44'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-flanked-duiker',
      'species:western-chimpanzee',
      'species:african-elephant',
    ],
    countryIds: ['SN', 'GM', 'GW', 'GN', 'SL', 'CI', 'GH', 'TG', 'BJ', 'NG', 'CM'],
    sources: ['one-earth-eco-44'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:82',
    summary: {
      value:
        'The Jos Plateau Forest-Grassland rises above the surrounding forest-grassland and savanna ecoregions of northern Nigeria, being the largest landmass above 1,000 m in the country. Though small, it contains a relatively large number of endemic species, with two small mammals strictly endemic, the Nigerian mole rat and Fox\u2019s shaggy rat. The mining boom of the 1960s left over a thousand mine ponds scattered across the abandoned tin minefields in this ecoregion.',
      sourceIds: ['one-earth-eco-82'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'rises above the surrounding forest-grassland and savanna ecoregions of northern Nigeria',
        'the largest landmass above 1,000 m in Nigeria',
        'over a thousand mine ponds scattered across abandoned tin minefields',
        'protected areas include Jarawa Hill FR, Panshanu FR, Jauro River FR, Guram River FR, and Limoro FR',
      ],
      sourceIds: ['one-earth-eco-82'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Cooler montane climate at high elevation with annual rainfall of 1,411\u20132,000 mm and temperatures ranging from 15.5\u00b0 to 30.5\u00b0C.',
        annualPrecipitationMm: { min: 1411, max: 2000 },
        temperatureC: { min: 15.5, max: 30.5 },
      },
      sourceIds: ['one-earth-eco-82'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'mosaic of forest and grassland on the high plateau',
        'montane vegetation distinct from surrounding savanna',
        'sacred groves retaining native cover',
        'areas altered by abandoned tin minefields and mine ponds',
      ],
      sourceIds: ['one-earth-eco-82'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'highland isolation creating a relatively rich set of endemic species',
        'two strictly endemic small mammals, the Nigerian mole rat and Fox\u2019s shaggy rat',
        'endemic bird populations including the rock firefinch and Jos Plateau indigobird',
        'only West African population of the klipspringer',
      ],
      sourceIds: ['one-earth-eco-82'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 10 against a conservation target of 9%. Protected areas include Jarawa Hill FR, Panshanu FR, Jauro River FR, Guram River FR, and Limoro FR, along with various sacred groves. Threats include tin mining with radioactive by-products, soil erosion (31 percent seriously affected), intense firewood collection, and agricultural intensification. Priority actions are establishing further protected areas, promoting sustainable agriculture, and monitoring illegal mining with land remediation.',
      sourceIds: ['one-earth-eco-82'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:nigerian-mole-rat',
      'species:foxs-shaggy-rat',
      'species:rock-firefinch',
      'species:jos-plateau-indigobird',
    ],
    countryIds: ['NG'],
    sources: ['one-earth-eco-82'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:113',
    summary: {
      value:
        'The Guinean Mangroves stretch along the coast of West Africa and hold one of the largest populations of the West African Manatee in Africa, found in Guinea-Bissau. High productivity and an extensive food web in the mangrove forests support migratory shorebird populations, important marine species, and offshore fisheries. Temperatures range from 15\u00b0 to 28\u00b0C in the north to 23\u00b0\u201332\u00b0C in Guinea, with annual rainfall varying from as low as 95 mm in the Senegal River Delta to approximately 9,000 mm in Sierra Leone.',
      sourceIds: ['one-earth-eco-113'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'coastal mangrove forests extending through Senegal, Gambia, Guinea-Bissau, Guinea, Sierra Leone, Liberia, and Côte d\u2019Ivoire',
        'one of the largest West African Manatee populations in Africa found in Guinea-Bissau',
        'Senegal River Delta with low rainfall as low as 95 mm annually',
        'protected areas include Delta du Saloum NP, Basse-Casamance, Bijagos Archipelago Biosphere Reserve, and Rio Cacheu Mangroves Natural Park',
      ],
      sourceIds: ['one-earth-eco-113'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical coastal climate with temperatures ranging from 15\u00b0 to 28\u00b0C in the north to between 23\u00b0 and 32\u00b0C in Guinea; annual rainfall varies greatly from 95 mm in the Senegal River Delta to approximately 9,000 mm in Sierra Leone.',
        annualPrecipitationMm: { min: 95, max: 9000 },
        temperatureC: { min: 15, max: 32 },
      },
      sourceIds: ['one-earth-eco-113'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'extensive West African mangrove forests',
        'highly productive mangrove stands supporting an extensive food web',
        'mangrove ecosystems fringing the coast and major river mouths',
        'mangrove wood supporting local communities and fisheries',
      ],
      sourceIds: ['one-earth-eco-113'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'high productivity and an extensive food web supporting migratory shorebirds and offshore fisheries',
        'one of the largest populations of the West African Manatee in Africa',
        'nursery and feeding habitats for marine turtles including olive ridley, loggerhead, and green turtles',
        'habitat for pygmy crocodile, Nile monitor, and Nile crocodile',
      ],
      sourceIds: ['one-earth-eco-113'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 7 against a conservation target of 35%. Protected areas include Delta du Saloum NP and Basse-Casamance in Senegal, the Bijagos Archipelago Biosphere Reserve and Rio Cacheu Mangroves Natural Park in Guinea-Bissau, the Tanbi Wetland Complex in Gambia, Iles Ehotile NP in Côte d\u2019Ivoire, and Lake Piso Multiple Sustainable Use Reserve in Liberia. Threats include rice farming conversion, urban expansion, road construction, shrimp farming, dam construction such as the Diama Dam, aquaculture eutrophication, mangrove wood extraction, and sea level rise from climate change. Priority actions are supporting community mangrove rehabilitation, using remote sensing for monitoring, and developing economic incentive policies.',
      sourceIds: ['one-earth-eco-113'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:west-african-manatee',
      'species:temmincks-red-colobus',
      'species:nile-crocodile',
    ],
    countryIds: ['SN', 'GM', 'GW', 'GN', 'SL', 'LR', 'CI'],
    sources: ['one-earth-eco-113'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:15',
    summary: {
      value:
        'The Knysna-Amatole Montane Forests contain remnants of the southernmost African bush elephant population and some of the southernmost Afromontane forests in Africa. Year-round rainfall ranges from 525 mm to 1,500 mm annually with temperatures spanning 8.9\u00b0C to 23.8\u00b0C. This ecoregion is part of the archipelago-like Afromontane regional centre of plant endemism and harbors several strict and near-endemic species including the Knysna banana frog.',
      sourceIds: ['one-earth-eco-15'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Afromontane forests along the southern coast of South Africa',
        'Knysna forest (568 km\u00b2) on gentle to moderate slopes and Amatole forests (405 km\u00b2) at higher altitudes',
        'elevations from 5 m to 1,250 m above sea level',
        'part of the archipelago-like Afromontane regional centre of plant endemism',
      ],
      sourceIds: ['one-earth-eco-15'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Year-round rainfall with maxima in early and late summer, ranging from 525 mm to 1,500 mm annually. Mean daily maximum temperatures reach 23.8\u00b0C in February and minimum temperatures drop to 8.9\u00b0C.',
        annualPrecipitationMm: { min: 525, max: 1500 },
        temperatureC: { min: 8.9, max: 23.8 },
      },
      sourceIds: ['one-earth-eco-15'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'ironwood, stinkwood, and yellowwood canopy trees',
        'Afromontane forests with low tree endemism but high diversity',
        'forests unable to persist below 500 mm annual rainfall',
        'associated geophytes and forest-floor flora',
      ],
      sourceIds: ['one-earth-eco-15'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Afromontane regional centre of plant endemism with few strictly endemic plant species',
        'forest extent primarily limited by annual rainfall below 500 mm',
        'endemic amphibian communities including the Knysna banana frog',
        'remnant megaherbivore populations shaping forest structure',
      ],
      sourceIds: ['one-earth-eco-15'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 7 against a conservation target of 50%. Key protected areas include the Cape Floral Region Protected Areas (a UNESCO World Heritage Site) and the Garden Route National Park. Threats include clearing for agriculture and fire, invasive alien plants including the Argentine ant threatening the swift moth, invasive animals, and poaching and illegal ivory trade. Priority actions are establishing monitoring programs for the Knysna elephant, controlling and removing alien plants, and eliminating poaching and illegal ivory trade.',
      sourceIds: ['one-earth-eco-15'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:knysna-banana-frog',
      'species:african-elephant',
      'species:common-leopard',
      'species:knysna-turaco',
      'species:knysna-dwarf-chameleon',
      'species:knysna-woodpecker',
      'species:bushbuck',
    ],
    countryIds: ['ZA'],
    sources: ['one-earth-eco-15'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:88',
    summary: {
      value:
        'The Albany Thickets are a dense, spiny shrubland with a canopy up to 2.5 m in height and abundant succulents, located along the Fish, Sundays, and Gamtoos River valleys in the eastern Cape. Inland valley temperatures range from 0\u00b0C to over 40\u00b0C with annual rainfall of 450 to 550 mm, while coastal areas are more moderate. This ecoregion is a complex transition zone where four phytochoria converge and is a center of endemism for succulent Euphorbia species, cycads, and geophytes.',
      sourceIds: ['one-earth-eco-88'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'dense, spiny shrubland along the Fish, Sundays, and Gamtoos River valleys',
        'eastern Cape of South Africa with consolidated dune sands near the coast',
        'transition zone where four phytochoria converge',
        'Addo Elephant NP and Mountain Zebra NP among key protected areas',
      ],
      sourceIds: ['one-earth-eco-88'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'high diurnal and annual temperature ranges with low, sporadic rainfall. Inland valley temperatures are extreme, ranging from 0\u00b0C to over 40\u00b0C, while coastal areas have a more moderate range from 10\u00b0C to 35\u00b0C.',
        annualPrecipitationMm: { min: 450, max: 550 },
        temperatureC: { min: 0, max: 40 },
      },
      sourceIds: ['one-earth-eco-88'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dense spiny shrubland with canopy up to 2.5 m tall',
        'abundant succulents including endemic Euphorbia species, cycads, and geophytes',
        'sheep fig, porkbush succulent, and diverse Aizoaceae',
        'center of endemism for succulent Euphorbia, cycads, and geophytes',
      ],
      sourceIds: ['one-earth-eco-88'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'megaherbivore browsing and seed dispersal maintaining ecological balance',
        'elephants promoting coppicing through chaotic foraging',
        'hind-gut fermentation enabling rapid seed dispersal by herbivores',
        'center of floral endemism with low faunal endemism rates',
      ],
      sourceIds: ['one-earth-eco-88'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 4 against a conservation target of 20%. Key protected areas include Addo Elephant NP (with 120 south-western black rhino as of 2015), Andries Vosloo Kudu NR, Mountain Zebra NP, and Lennox Sebe Game Reserve. Threats include conversion to pastoralism, crops, and urban areas, overgrazing by domestic goats, bush-clearance, resource exploitation, invasive species, and illegal plant trade in Encephalartos, Euphorbia, and Aizoaceae. Priority actions are promoting community participation in habitat restoration and identifying corridors to connect natural and protected areas.',
      sourceIds: ['one-earth-eco-88'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:south-western-black-rhino',
      'species:albany-adder',
      'species:tasmans-girdled-lizard',
      'species:african-elephant',
      'species:common-leopard',
      'species:knysna-woodpecker',
      'species:cape-bulbul',
      'species:martial-eagle',
    ],
    countryIds: ['ZA'],
    sources: ['one-earth-eco-88'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:89',
    summary: {
      value:
        'The Fynbos Shrubland forms part of the Cape Floristic Region with 5 endemic plant families, 160 endemic genera, and over 9,000 species. This fire-prone ecosystem receives predominantly winter rainfall between 650 mm and 2,000 mm annually with mild temperatures seldom exceeding 30\u00b0C. The critically endangered geometric tortoise, endemic to this ecoregion, is its flagship species.',
      sourceIds: ['one-earth-eco-89'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Cape Floristic Region at the southwestern tip of Africa',
        'fire-prone ecosystem of small-leaved, evergreen shrubs',
        'comprises approximately 80 percent of the Cape Floristic Region',
        'lowland and montane fynbos forms supporting high biodiversity',
      ],
      sourceIds: ['one-earth-eco-89'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Mediterranean climate with predominantly winter rainfall between 650 mm and 2,000 mm annually. Temperatures are generally mild, frost is seldom recorded, and summer maximum temperatures seldom exceed 30\u00b0C except in interior valleys.',
        annualPrecipitationMm: { min: 650, max: 2000 },
        temperatureC: { min: 5, max: 30 },
      },
      sourceIds: ['one-earth-eco-89'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'restioids (Restionaceae) are the diagnostic plant type of fynbos',
        'ericoids including small-leafed shrubs giving fynbos its heathlike appearance',
        'proteoids including the king protea, South Africa national flower',
        'geophytes with spectacular diversification across multiple plant families',
      ],
      sourceIds: ['one-earth-eco-89'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'fire-driven ecosystem renewal maintaining species diversity',
        '5 endemic plant families and 160 endemic genera unique to the Cape Floristic Region',
        'Gondwanan relict lineages in both flora and invertebrate fauna',
        'lowland fynbos nearly 95 percent lost to urban and agricultural expansion',
      ],
      sourceIds: ['one-earth-eco-89'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 7 against a conservation target of 47%. Protected areas include Anysberg, Baviaanskloof, and De Hoop NRs, Cederberg Private NR, Groot-Winterhoek and Cederberg Wilderness Areas, and Cape West Coast, Gouritz Cluster, and Kogelberg Biosphere Reserves. Threats include agriculture, invasive alien plants, urbanization around Cape Town and Nelson Mandela Bay, fragmentation, climate change, overgrazing, and uncontrolled fire. Priority actions are active native plant restoration, implementing an efficient controlled-fire system to control alien plants, and expanding the Western Cape protected area network.',
      sourceIds: ['one-earth-eco-89'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:geometric-tortoise',
      'species:cape-dune-mole-rat',
      'species:cape-spiny-mouse',
      'species:duthies-golden-mole',
      'species:verreauxs-mouse',
      'species:victorins-scrub-warbler',
      'species:orange-breasted-sunbird',
      'species:cape-sugarbird',
    ],
    countryIds: ['ZA'],
    sources: ['one-earth-eco-89'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:90',
    summary: {
      value:
        'The Renosterveld Shrubland is part of the Cape Floristic Region and contains one of the most species-rich assemblages of geophytes on Earth, comparable only to Madagascar and New Zealand. Annual rainfall ranges from 250 mm to 650 mm, transitioning to succulent karoo below and fynbos above, with summer temperatures seldom exceeding 30\u00b0C. The invertebrate fauna is rich with high endemism, including many Gondwanaland relict lineages.',
      sourceIds: ['one-earth-eco-90'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'upland and lowland renosterveld shrubland of southwestern South Africa',
        'West Coast forelands influenced by the cold Benguela Current and prone to fog',
        'vegetation formerly inhabited by black rhinoceros',
        'protected areas including Gouritz Cluster and Cape West Coast Biosphere Reserves',
      ],
      sourceIds: ['one-earth-eco-90'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Mediterranean climate with annual rainfall between 250 mm and 650 mm, replaced by succulent karoo below this range and fynbos above it. Summer temperatures seldom exceed 30\u00b0C. West Coast forelands are influenced by the cold Benguela Current and prone to fog.',
        annualPrecipitationMm: { min: 250, max: 650 },
        temperatureC: { min: 5, max: 30 },
      },
      sourceIds: ['one-earth-eco-90'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'low shrub layer of 1\u20132 m tall dominated by renosterbos (Elytropappus rhinocerotis)',
        'ericoids with a ground layer of grasses and seasonally active geophytes',
        'Erica genus with 658 species representing extraordinary diversification',
        'spectacular geophyte assemblages comparable only to Madagascar and New Zealand',
      ],
      sourceIds: ['one-earth-eco-90'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'massive taxonomic diversification with 13 genera exceeding 100 species',
        'rich invertebrate fauna with high endemism and Gondwanaland relict lineages',
        'vertebrate fauna neither especially rich nor distinctive',
        'endemic mammals including Verreaux\u2019s mouse',
      ],
      sourceIds: ['one-earth-eco-90'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 1 against a conservation target of 27%, making this one of the most poorly protected biomes in the Cape Floristic Region. Protected areas include Gouritz Cluster Biosphere Reserve, Cape West Coast and Cape Winelands Biosphere Reserves, Vrolijkheid NR, and Touw and Radyn Dam NRs. Threats include invasive alien trees and shrubs, novel agriculture such as cut flowers and rooibos and honeybush tea, urbanization around Cape Town and Nelson Mandela Bay, and fragmentation. Priority actions are re-assessing Conservation Agriculture guidelines, controlling fertilizer application and nutrient run-off, and restoring renosterveld through clearing alien grass and trees and re-seeding.',
      sourceIds: ['one-earth-eco-90'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:victorins-scrub-warbler',
      'species:verreauxs-mouse',
      'species:klipspringer',
      'species:cape-grysbok',
      'species:orange-breasted-sunbird',
      'species:cape-sugarbird',
    ],
    countryIds: ['ZA'],
    sources: ['one-earth-eco-90'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:110',
    summary: {
      value:
        'The Succulent Karoo is the world\u2019s only plant hotspot that is entirely arid, hosting the richest succulent dwarf shrub vegetation with extremely high plant endemism. Reliable and predictable rainfall falls mostly in spring and autumn between 150 mm and 300 mm annually, while summer maximum temperatures frequently surpass 40\u00b0C. The explosive speciation of the Mesembryanthemaceae (Stone plants) produced approximately 1,800 species and 120 genera.',
      sourceIds: ['one-earth-eco-110'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the major biogeographical domain of the Southern Karoo',
        'arid landscape with weathered quartz regions providing camouflage for stone plants',
        'near-endemic charismatic species including quiver tree, bastard quiver tree, and halfmens',
        'protected areas including Namaqua NP, Goegap NR, and Tankwa-Karoo NP',
      ],
      sourceIds: ['one-earth-eco-110'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'distinctive arid climate unlike other deserts worldwide. Rainfall is reliable and predictable, falling mostly in spring and autumn between 150 mm and 300 mm annually. The ecoregion is not subject to fog and summer maximum temperatures frequently surpass 40\u00b0C.',
        annualPrecipitationMm: { min: 150, max: 300 },
        temperatureC: { min: 0, max: 40 },
      },
      sourceIds: ['one-earth-eco-110'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'world\u2019s richest succulent dwarf shrub vegetation',
        'Mesembryanthemaceae (Stone plants) with approximately 1,800 species and 120 genera',
        'high diversity of geophytes in Hyacinthaceae, Iridaceae, Amaryllidaceae, and Asphodelaceae',
        'Crassulaceae and Aloaceae as major succulent families',
      ],
      sourceIds: ['one-earth-eco-110'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'explosive speciation in succulent dwarf shrubs, especially Mesembryanthemaceae',
        'camouflage-driven selection along weathered quartz regions for stone plants',
        'near-endemic reptile fauna adapted to arid conditions',
        'important pollination networks including endemic oil-collector bees',
      ],
      sourceIds: ['one-earth-eco-110'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 3 against a conservation target of 24%. Protected areas include Namaqua National Park, Knersvlakte Nature Reserve, Goegap NR, Tankwa-Karoo NP, and Gouritz Cluster Biosphere Reserve. Threats include over-grazing, desertification, ostrich farming, agriculture in river valleys, illegal collection of succulents and geophytes, and climate change. Priority actions are encouraging best grazing practices through green branding of ostrich products, expanding the protected area corridor network, and rehabilitating rangelands.',
      sourceIds: ['one-earth-eco-110'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:richtersveld-dwarf-leaf-toed-gecko',
      'species:calvinia-thick-toed-gecko',
      'species:klipspringer',
      'species:cape-grysbok',
      'species:common-duiker',
      'species:greater-kudu',
    ],
    countryIds: ['ZA'],
    sources: ['one-earth-eco-110'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:38',
    summary: {
      value:
        'The Central Bushveld ecoregion covers approximately 15.6 million hectares across Botswana and South Africa, dominated by mopane and mixed bushveld savannas. It supports populations of elephant, giraffe, leopard, cheetah, and the threatened black rhinoceros, while its flagship species Juliana\u2019s golden mole is a near-endemic mammal restricted to the region. The Waterberg Mountains harbor strict reptile endemics including the Waterberg girdled lizard and Waterberg flat lizard.',
      sourceIds: ['one-earth-eco-38'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'mopane and mixed bushveld savannas spanning Botswana and South Africa',
        'Waterberg Mountains with endemic reptile fauna',
        'Springbok Flats clay thorn bushveld',
        'Pilanesberg volcanic ring complex and biosphere reserves',
      ],
      sourceIds: ['one-earth-eco-38'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical and seasonal climate with hot wet summers and cool dry winters. Annual rainfall ranges from 350 mm in drier areas to 900 mm in the Waterberg Mountains. Temperatures vary from -3\u00b0C to 40\u00b0C with an average of 21\u00b0C.',
        annualPrecipitationMm: { min: 350, max: 900 },
        temperatureC: { min: -3, max: 40 },
      },
      sourceIds: ['one-earth-eco-38'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'monospecific mopane (Colophospermum mopane) woodland',
        'woodland savanna with Hyparrhenia grasses and silver clusterleaf trees',
        'clay thorn bushveld with Acacia tortilis, A. nilotica, and A. nigrescens',
        'Waterberg savanna with beachwood, common hookthorn, and Terminalia sericea',
      ],
      sourceIds: ['one-earth-eco-38'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'elephant browsing driving ecosystem dynamics through mopane woodland',
        'fire-driven savanna renewal with uncontrolled August and September burns',
        'strict reptile endemism concentrated in the Waterberg Mountains',
        'invasive plant species altering native bushveld composition',
      ],
      sourceIds: ['one-earth-eco-38'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 3 against a conservation target of 26%. Protected areas include Pilanesberg National Park, Waterberg Biosphere, Vhembe Biosphere, Borakalalo NP, and Madikwe NR, though no protected areas exist in the Botswana portion. Threats include escalating rhino poaching, agricultural encroachment on the Springbok Flats, livestock overgrazing, predator and scavenger extermination campaigns, and uncontrolled fires. Priority actions are reducing poaching and strengthening law enforcement, controlling invasive species, and managing pollution.',
      sourceIds: ['one-earth-eco-38'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:julianas-golden-mole',
      'species:black-rhinoceros',
      'species:cheetah',
      'species:african-elephant',
      'species:giraffe',
      'species:waterberg-girdled-lizard',
      'species:waterberg-flat-lizard',
      'species:caracal',
    ],
    countryIds: ['BW', 'ZA'],
    sources: ['one-earth-eco-38'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:40',
    summary: {
      value:
        'The Drakensberg Escarpment Savanna and Thicket ecoregion covers approximately 3.5 million hectares along the eastern seaboard of South Africa, harboring species-rich thickets comparable in diversity to fynbos. Its flagship species the Kei cycad is a gymnosperm, while near-endemic fauna include the giant golden mole and Natal red rockhare. With less than 1% under formal protection and over 6,000 plant species including cycads and succulents, it faces intense pressure from human settlement and land degradation.',
      sourceIds: ['one-earth-eco-40'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'coastal and sub-coastal thicket and savanna along the eastern Drakensberg Escarpment',
        'species-rich thickets with cycad diversity rivaling fynbos in plant richness',
        'scattered protected reserves including Oribi Gorge and Weenan NRs',
        'landscape transitioning from subtropical forest patches to grassland mosaics',
      ],
      sourceIds: ['one-earth-eco-40'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Seasonal and relatively dry with most areas receiving less than 800 mm of rainfall per year, dropping to 450 mm in southern sections. Up to 75% of precipitation falls between October and March. Temperatures range from 12\u00b0C to 26\u00b0C and the coastal zone is virtually frost-free.',
        annualPrecipitationMm: { min: 450, max: 800 },
        temperatureC: { min: 12, max: 26 },
      },
      sourceIds: ['one-earth-eco-40'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'species-rich thickets with succulent genera including Euphorbia, Crassula, and Aloe',
        'cycad diversity with Kei, Bushman\u2019s River, and Albany cycads',
        '6,000 to 7,000 plant species with high endemism',
        'forest patches and grassland mosaics along the escarpment',
      ],
      sourceIds: ['one-earth-eco-40'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'high endemism among reptiles and Lycaenid butterflies',
        'predator and scavenger eradication disrupting trophic cascades',
        'invasive alien plants including Chromolaena odorata and Lantana camara',
        'unsustainable harvesting of medicinal and ornamental plants',
      ],
      sourceIds: ['one-earth-eco-40'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 1 against a conservation target of 7%, with less than 1% of the ecoregion under formal protection. Protected areas include Oribi Gorge NR, Entumeni NR, Weenan NR, Nkandla Forest Reserve, and Albert Falls GR. Threats include high human densities, landscape degradation, cultivation and overgrazing by goats, sheep, and cattle, predator and scavenger eradication campaigns targeting jackal, caracal, leopard, and Cape vulture, unsustainable plant harvesting, and invasive alien species. Priority actions are improving environmental regulations, promoting sustainable resource use, and restoring degraded thicket.',
      sourceIds: ['one-earth-eco-40'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bushbuck',
      'species:common-duiker',
      'species:greater-kudu',
      'species:grey-rhebok',
      'species:mountain-reedbuck',
      'species:blue-duiker',
      'species:natal-red-rockhare',
      'species:cape-vulture',
    ],
    countryIds: ['ZA'],
    sources: ['one-earth-eco-40'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:41',
    summary: {
      value:
        'The Drakensberg Grasslands ecoregion spans approximately 11.5 million hectares of montane grasslands across South Africa and Lesotho, forming the southernmost extent of the Afromontane center of endemism. The bearded vulture finds its last stronghold in southern Africa within these high-altitude landscapes, while reptile and butterfly endemism is pronounced among strict endemics such as the Drakensberg dwarf chameleon and woodbush legless skink. Roughly 30% of plant species are endemic including the iconic spiral aloe of Lesotho.',
      sourceIds: ['one-earth-eco-41'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'montane grasslands on wet exposed slopes with forest patches in valleys',
        'basalt plateaus with treeless alpine vegetation above 2,000 meters',
        'part of the Afromontane center of endemism at its southernmost extent',
        'uKhahlamba-Drakensberg Park Ramsar site and multiple national reserves',
      ],
      sourceIds: ['one-earth-eco-41'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Cold and wet across most areas except the Lesotho Plateau rain shadow. Temperatures range from -13\u00b0C to 40\u00b0C with an average of 15\u00b0C, and summit temperatures can drop below -20\u00b0C. Annual rainfall varies from 450 mm in the southwest to over 1,900 mm at the highest altitudes.',
        annualPrecipitationMm: { min: 450, max: 1900 },
        temperatureC: { min: -13, max: 40 },
      },
      sourceIds: ['one-earth-eco-41'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'montane grassland with tussock grasses, creeping mat plants, and ericoid dwarf shrubs',
        'Podocarpus and Widdringtonia forest patches in sheltered valleys',
        'basalt plateau alpine vegetation with treeless grasslands',
        'spiral aloe and other endemic succulents at high altitudes in Lesotho',
      ],
      sourceIds: ['one-earth-eco-41'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'bearded vulture as apex avian scavenger maintaining carcass removal cycles',
        'strict reptile endemism driven by high-altitude isolation',
        'grazing and fire maintaining treeless montane grasslands',
        'medicinal plant overharvesting affecting pepperbark and other species',
      ],
      sourceIds: ['one-earth-eco-41'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 4 against a conservation target of 10%. Protected areas include the uKhahlamba-Drakensberg Park Ramsar site, Itala NR, Ncandu NR, Ntsikeni NR, Lammergeier Highlands NR, Malekgalonyan NR, Lesotho National Park, Natal Drakensberg NP, and Natal NP. Threats include agriculture and forestry expansion, grazing pressure replacing native grasses, fires, medicinal plant overharvesting including pepperbark, invasive species such as Chrysocoma ciliata, and soil erosion. Priority actions are strengthening herbal medicine harvest regulation, promoting sustainable agriculture, and supporting protected-area livelihoods.',
      sourceIds: ['one-earth-eco-41'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bearded-vulture',
      'species:drakensberg-dwarf-chameleon',
      'species:woodbush-legless-skink',
      'species:mountain-reedbuck',
      'species:grey-rhebok',
      'species:orange-breasted-rockjumper',
    ],
    countryIds: ['ZA', 'LS'],
    sources: ['one-earth-eco-41'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:48',
    summary: {
      value:
        'The Limpopo Lowveld ecoregion covers approximately 8.2 million hectares across Mozambique, Eswatini, and South Africa, forming one of the world\u2019s key strongholds for both the southern white rhinoceros and the south-central black rhinoceros. The ecoregion hosts an extraordinary large mammal assemblage including elephant, hippopotamus, African buffalo, blue wildebeest, giraffe, and nyala alongside apex predators such as lion, cheetah, African wild dog, and spotted hyena. Its flagship species is the southern white rhinoceros.',
      sourceIds: ['one-earth-eco-48'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'flat to gently undulating terrain at an average elevation of 450 meters',
        'granite and gneiss bedrock with gabbro intrusions',
        'mopane and Acacia woodland savannas driven by elephant browsing and fire',
        'Springbok Flats clay thorn bushveld transitioning to lowveld bush',
      ],
      sourceIds: ['one-earth-eco-48'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical summer-rainfall zone with an average annual rainfall of approximately 630 mm, falling mainly as convective thunderstorms between October and May. Mean annual temperature is 22\u00b0C with hot summers and mild winters.',
        annualPrecipitationMm: { min: 500, max: 800 },
        temperatureC: { min: 5, max: 40 },
      },
      sourceIds: ['one-earth-eco-48'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dominant mix of winter-deciduous mopane and Acacia tortilis woodland',
        'Acacia nilotica, A. nigrescens, A. gerrardii, and A. karoo thorn bushveld',
        'herbaceous layer interspersed with woody stratum shaped by elephant browsing',
        'turf grass, deck grass, and canary millet in grassland openings',
      ],
      sourceIds: ['one-earth-eco-48'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'global stronghold for southern white and south-central black rhinoceros populations',
        'elephant browsing and fire shaping woodland-grassland mosaics',
        'predator-prey dynamics among lion, cheetah, African wild dog, and ungulates',
        'near-endemic reptile fauna including two-toed burrowing skink and Sabi quill-snouted snake',
      ],
      sourceIds: ['one-earth-eco-48'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 6 against a conservation target of 30%. Protected areas include Kruger National Park, Vhembe Biosphere, Kruger to Canyons Biosphere, Hluhluwe-Imfolozi NP, Manyoni Game Reserve, Mkuzi Game Reserve, and Mkhaya Game Reserve. Threats include rhino poaching for horn, retaliatory killing of African wild dogs by farmers, subsistence agriculture including maize and peanut cultivation, livestock overgrazing causing soil erosion and acidification, and excessive wood harvesting. Priority actions are developing alternative resource-based livelihoods, strengthening law enforcement and anti-poaching measures, and launching public and private conservation campaigns.',
      sourceIds: ['one-earth-eco-48'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:southern-white-rhino',
      'species:black-rhinoceros',
      'species:cheetah',
      'species:african-elephant',
      'species:lion',
      'species:hippopotamus',
      'species:spotted-hyena',
      'species:african-wild-dog',
    ],
    countryIds: ['MZ', 'SZ', 'ZA'],
    sources: ['one-earth-eco-48'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:81',
    summary: {
      value:
        'The Highveld Grasslands ecoregion covers approximately 24.3 million hectares across Lesotho, South Africa, and Eswatini on the high interior plateau of southern Africa at elevations of 1,400 to 1,800 meters. It represents the greatest expanse of remaining grassland in southern Africa and is home to the blue crane, South Africa\u2019s national bird, found in significant numbers across the landscape. Its fauna includes the ground pangolin, brown hyena, aardwolf, African striped weasel, and the strictly endemic giant spinytail lizard.',
      sourceIds: ['one-earth-eco-81'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'high interior plateau (Highveld) at elevations of 1,400 to 1,800 meters',
        'greatest expanse of remaining grassland in southern Africa',
        'three main vegetation types: Kalahari-Karoo transition, sweet grasslands, and sour grasslands',
        'protected areas including Mountain Zebra NP and Magaliesberg Biosphere',
      ],
      sourceIds: ['one-earth-eco-81'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'High-altitude plateau climate with mean maximum temperatures of 21\u00b0C to 24\u00b0C and mean minimum temperatures of 3\u00b0C to 6\u00b0C. Summer maximum temperatures can reach 38\u00b0C while winter minimums drop to -11\u00b0C. Annual rainfall ranges from 400 mm to 900 mm in summer, with frequent fires and frost suppressing woody vegetation.',
        annualPrecipitationMm: { min: 400, max: 900 },
        temperatureC: { min: -11, max: 38 },
      },
      sourceIds: ['one-earth-eco-81'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dominant grasses including Panicum coloratum, Themeda triandra, and Eragrostis curvula',
        'sweet and sour grasslands maintained by fire, frost, and heavy grazing',
        'forb-rich understorey with Helichrysum, Crabbea, and Rhynchosia species',
        'Kalahari-Karoo highveld transition zone at western margins',
      ],
      sourceIds: ['one-earth-eco-81'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'fire, frost, and grazing suppressing shrub and tree encroachment',
        'near-endemic Botha\u2019s lark restricted to heavily grazed grassland',
        'high mammal diversity with rare species including ground pangolin and brown hyena',
        'historical extirpation and reintroduction of white rhinoceros and other ungulates',
      ],
      sourceIds: ['one-earth-eco-81'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 6 against a conservation target of 6%. Protected areas include Valei NR, Nooitgedacht Dam, Willem Pretorius, Rustfontein Dam, Koppies Dam, and Ermelo NR, with portions within the Magaliesberg Biosphere and Mountain Zebra NP. Threats include agricultural conversion to maize, overgrazing, urban expansion, fire, coal mining, afforestation with Eucalyptus, invasive black wattle, and gold mining with acid mine drainage. Priority actions are establishing protected area corridors, implementing rotational grazing, and restoring degraded ecosystems while eradicating invasive species.',
      sourceIds: ['one-earth-eco-81'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:blue-crane',
      'species:ground-pangolin',
      'species:mountain-zebra',
      'species:aardwolf',
      'species:brown-hyena',
      'species:giant-spinytail-lizard',
      'species:african-striped-weasel',
    ],
    countryIds: ['LS', 'ZA', 'SZ'],
    sources: ['one-earth-eco-81'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:2',
    summary: {
      value:
        'The Cameroon Highlands Forests ecoregion covers the mountains along the Nigeria-Cameroon border, excluding Mount Cameroon, and grows on an extinct range of volcanoes with remnant craters and hot springs. An Afromontane archipelago regional center of endemism, it is of extremely high biological importance, with remarkable avian endemism including the flagship Bamenda apalis and roughly 40 strictly endemic amphibian species. Forest cover has declined by more than half since the 1960s, and the ecoregion remains one of the least formally protected in Africa.',
      sourceIds: ['one-earth-eco-2'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'mountains of the Nigeria-Cameroon border region excluding Mount Cameroon',
        'extinct range of volcanoes with remnant craters and hot springs',
        'most mountains below 2,600 m with Mount Oku the highest point at 3,011 m',
        'outliers northeast to the Mambila Plateau and northwest to the Obudu Plateau of Nigeria',
      ],
      sourceIds: ['one-earth-eco-2'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical in latitude but with mean maximum temperatures below 20\u00b0C because of high altitude. Near the coast in the south rainfall is about 4,000 mm per year, declining inland to 1,800 mm or less.',
        annualPrecipitationMm: { min: 1800, max: 4000 },
        temperatureC: { min: 5, max: 26 },
      },
      sourceIds: ['one-earth-eco-2'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'submontane forests from 900 to 1,800 m with montane communities above',
        'montane mixture including montane forest, grassland, bamboo forest, and subalpine communities',
        'subalpine vegetation above 2,800 m only on Mount Oku',
        'typical species including Nuxia congesta, Podocarpus latifolius, Prunus africana, and Syzygium guineense',
      ],
      sourceIds: ['one-earth-eco-2'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'an Afromontane archipelago regional center of endemism',
        'remarkable avian endemism including Bamenda apalis, Bangwa forest warbler, and white-throated mountain-babbler',
        'about 40 strictly endemic amphibian species',
        'healthy populations of drill, Preuss\u2019s red colobus, and the Nigeria-Cameroon chimpanzee',
      ],
      sourceIds: ['one-earth-eco-2'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 1 against a conservation target of 47%, making this one of the least formally protected ecoregions in Africa, though local traditional rulers protect forest fragments. Key reserves include Nlonako Mountain faunal reserve, Gashaka Gumti National Park, and the Cross River/Okwangwo National Park. Threats include agriculture, fire, timber extraction, African cherry bark exploitation, and hunting, with forest cover down more than 50% since the 1960s and population densities up to 300 per km2 in the Bamenda Highlands.',
      sourceIds: ['one-earth-eco-2'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bamenda-apalis',
      'species:drill',
      'species:nigeria-cameroon-chimpanzee',
      'species:preuss-red-colobus',
    ],
    countryIds: ['CM', 'NG'],
    sources: ['one-earth-eco-2'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:4',
    summary: {
      value:
        'The Comoros Forests ecoregion covers the islands of Ngazidja, Mwali, Nzwani, and Mayotte in the Mozambique Channel, roughly 300 km from both Madagascar and the East African mainland. A maritime tropical climate, the active volcano Mount Karthala, and rich laterite soils support semi-deciduous lowland and montane evergreen forests with about 1,000 native plant species, 30% endemic to the Comoros. Four strictly endemic birds and two strictly endemic fruit bats, including the flagship Livingstone\u2019s fruit bat, occur here.',
      sourceIds: ['one-earth-eco-4'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'islands Ngazidja, Mwali, Nzwani, and Mayotte in the Mozambique Channel',
        'about 300 km from both northern Madagascar and the East African mainland',
        'Mount Karthala, an active volcano erupting every 10\u201320 years, highest point at 2,361 m',
        'laterite soil rich in minerals but poor in humus and erosion-prone',
      ],
      sourceIds: ['one-earth-eco-4'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Maritime tropical with a warm, moist rainy season from November to April at about 25\u00b0C and a cooler, drier season from May to September near 18\u00b0C. Central higher elevations are cooler and wetter, receiving more than 5,000 mm per year, while the driest coastal areas receive about 1,000 mm, with frequent cyclones.',
        annualPrecipitationMm: { min: 1000, max: 5000 },
        temperatureC: { min: 18, max: 25 },
      },
      sourceIds: ['one-earth-eco-4'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'semi-deciduous forests that once blanketed the lowlands',
        'montane evergreen moist forests above 800 m dominated by Ocotea comoriensis, Khaya comorensis, and Chrysophyllum biovinianum',
        'families including Sapotaceae, Ebenaceae, Rubiaceae, Myrtaceae, Clusiaceae, Lauraceae, and Burseraceae',
        'about 1,000 native plant species, 30% endemic to the Comoros, including the endangered palm Ravenea hildebrandtii',
      ],
      sourceIds: ['one-earth-eco-4'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'four strictly endemic bird species including the Comoro scops-owl and Mount Karthala white-eye',
        'two strictly endemic fruit bats including Livingstone\u2019s fruit bat, found only on Ndzuani and Mwali',
        'nine endemic reptiles including the Comoro flapnose chameleon and Mayotte chameleon',
        'introduced mongoose, civets, cats, and rats preying on native fauna',
      ],
      sourceIds: ['one-earth-eco-4'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 100% with a protection level of 1, but none of the remaining forest is effectively protected. Protected areas include the Massif du Mont Ntringui/Bimbi on Ndzuani, Saziley/Charifou on Mayotte, Dziani Boudouni Ramsar site, Coelacanth Marine Park, and Moheli National Park. Threats include agriculture clearance, poaching of green sea turtles, day geckos and fruit bats, introduced predators and Lantana camara, and cyclones.',
      sourceIds: ['one-earth-eco-4'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:livingstones-fruit-bat',
      'species:comoro-scops-owl',
      'species:karthala-white-eye',
      'species:mayotte-chameleon',
      'species:mongoose-lemur',
    ],
    countryIds: ['KM'],
    sources: ['one-earth-eco-4'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:13',
    summary: {
      value:
        'The Granitic Seychelles Forests ecoregion comprises the world\u2019s only mid-oceanic granitic islands, about 40 ancient granitic islands roughly 930 km northeast of Madagascar. Millions of years of isolation and diverse habitats produce exceptionally high endemism, including the jellyfish tree, one of the rarest plants in the world with fewer than 30 individuals confined to three hilltops of Mah\u00e9. The flagship Seychelles warbler and endemics such as the Seychelles magpie-robin, Seychelles scops-owl, and Seychelles paradise-flycatcher are confined to these and adjoining islands.',
      sourceIds: ['one-earth-eco-13'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the only mid-oceanic granitic islands in the world',
        'about 40 ancient granitic islands of roughly 750-million-year-old rocks with steep sides',
        'Mahe the largest and tallest island at 145 km2 and 914 m high',
        'other islands of old volcanic rocks and young raised coral reefs among roughly 115 islands',
      ],
      sourceIds: ['one-earth-eco-13'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Humid tropical with little seasonal temperature variation. Heavy monsoon rains fall from November to February, with cooler, drier months under the southeast trade winds, and mean annual rainfall ranging from 2,300 to 5,000 mm depending on elevation.',
        annualPrecipitationMm: { min: 2300, max: 5000 },
        temperatureC: { min: 24, max: 32 },
      },
      sourceIds: ['one-earth-eco-13'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'palms, pandans, and hardwoods below 610 m including Phoenicophorium borsigianum and Adenanthera pavonina',
        'cloud-forest remnants above 600 m with plants related to Southeast Asian species',
        'six endemic palms including the imperiled coco de mer restricted to Praslin and Curieuse',
        'river valleys and marshes formerly rich in palms and screwpine',
      ],
      sourceIds: ['one-earth-eco-13'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'exceptionally high endemism from millions of years of isolation',
        'native giant land tortoises now extinct, with Aldabra tortoises brought in as pets',
        'two bird species confined to single islands, the Seychelles scops-owl and paradise-flycatcher',
        'Seychelles magpie-robin recovering from 23 individuals in 1990 to more than 240 by 2012, downlisted from critically endangered',
      ],
      sourceIds: ['one-earth-eco-13'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 57% with a protection level of 2, though only tiny vegetation remnants remain. Key protected areas include the Vall\u00e9e de Mai World Heritage Site, Morne Seychellois National Park, and the Aride, Cousin, and La Digue Veuve special reserves. Threats include plantation conversion, introduced goats, pigs, cattle, cats, dogs, common mynahs, and tenrecs that predate natives, and introduced plants.',
      sourceIds: ['one-earth-eco-13'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:seychelles-warbler',
      'species:seychelles-magpie-robin',
      'species:seychelles-scops-owl',
      'species:seychelles-paradise-flycatcher',
      'species:aldabra-giant-tortoise',
    ],
    countryIds: ['SC'],
    sources: ['one-earth-eco-13'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:24',
    summary: {
      value:
        'The Northeast Congolian Lowland Forest ecoregion occupies the humid lowlands of the DRC and CAR between the Albertine Rift Mountains and the Congo River, supporting one of the highest mammalian diversities in Africa. Combined with the Northwest Lowland forests it holds the highest primate species richness in Africa, with important lowland gorilla populations and strict endemics including the giant forest genet and the rare aquatic genet. The Ituri forest, partly protected within the Okapi Wildlife Reserve, holds the endemic cycad Encephalartos ituriensis.',
      sourceIds: ['one-earth-eco-24'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'lowlands between the Albertine Rift Mountains in the east and the Congo River to the south and west',
        'transitional savannah to the north',
        'mostly continuous forest exceeding 100,000 km2',
        'lower, more seasonal relief toward the north with transitional submontane forest in the east',
      ],
      sourceIds: ['one-earth-eco-24'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Humid tropical with rainfall of 1,500 to 2,000 mm per year, declining eastward toward the Albertine Rift. A well-marked dry season occurs from January to March, with mean annual maximum temperatures of 27\u201333\u00b0C and minimums of 15\u201321\u00b0C depending on elevation.',
        annualPrecipitationMm: { min: 1500, max: 2000 },
        temperatureC: { min: 15, max: 33 },
      },
      sourceIds: ['one-earth-eco-24'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'mostly lowland moist forest with some transitional submontane forest in the east',
        'drier transitional forest types in the north',
        'tree species including Julbernardia seretii, Cynometra alexandri, and Gilbertiodendron dewevrei',
        'Guineo-Congolian regional center of endemism with about 1,500 plant species in the Ituri region including the endemic cycad Encephalartos ituriensis',
      ],
      sourceIds: ['one-earth-eco-24'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'one of the highest mammalian diversities in Africa and the region\u2019s greatest primate species richness',
        'strict endemics including the giant forest genet, aquatic genet, and mountain shrew',
        'near-endemics including the okapi, owl-faced monkey, L\u2019Hoest\u2019s monkey, and pied bat',
        'two strictly endemic birds, Neumann\u2019s coucal and the golden-naped weaver, and seven strictly endemic amphibians',
      ],
      sourceIds: ['one-earth-eco-24'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 80% with a protection level of 1. The Ituri forest is protected within the Okapi Wildlife Reserve, with additional protection at Maiko National Park, Yangambi Biosphere Reserve, and the Rubi-Tele and Maika Penege hunting reserves. Threats include mining for gold, diamonds, and coltan impacting Maiko, Ituri, and Kahuzi-Biega lowlands, bushmeat hunting, elephant poaching, logging concessions, and refugee agriculture.',
      sourceIds: ['one-earth-eco-24'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:giant-forest-genet',
      'species:aquatic-genet',
      'species:okapi',
      'species:african-forest-elephant',
      'species:loests-monkey',
    ],
    countryIds: ['CD', 'CF'],
    sources: ['one-earth-eco-24'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:26',
    summary: {
      value:
        'The Northwest Congolian Lowland Forests ecoregion spans Cameroon, the Central African Republic, the Republic of Congo, and Gabon as one of the world\u2019s last tropical forest wildernesses. It is the richest ecoregion in Africa for primates, holding the largest population of lowland gorillas and supporting historically large, now greatly reduced populations of African forest elephants. Strictly endemic mammals include Dollman\u2019s tree mouse and Remy\u2019s shrew, while flagship western lowland gorillas face heavy poaching.',
      sourceIds: ['one-earth-eco-26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'vast intact rainforest across Cameroon, Gabon, Republic of Congo, and CAR',
        'most terrain at 300 to 800 m, highest in the north and the Chaillu Massif in the south',
        'bordered north and south by forest-savanna mosaics, east by swamp forest, and west grading into Congolian Coastal Forests',
        'part of the world\u2019s last tropical forest wildernesses',
      ],
      sourceIds: ['one-earth-eco-26'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical with high humidity year-round, mean annual rainfall of 1,400 to 2,000 mm in the central portion, and two distinct wet seasons. Mean annual maximum temperatures are 27\u201330\u00b0C and minimums 18\u201321\u00b0C.',
        annualPrecipitationMm: { min: 1400, max: 2000 },
        temperatureC: { min: 18, max: 30 },
      },
      sourceIds: ['one-earth-eco-26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'mixed moist semi-evergreen and single-dominant moist evergreen forest types',
        'large emergents including Entandrophragma congoense, Pentaclethra eetveldeana, Pericopsis elata, and Gilbertiodendron dewevrei',
        'shrub genus Drypetes, lianas, rattans, and raffia palms along river valleys',
        'Guineo-Congolian lowland rainforest within the Guineo-Congolian regional center of endemism',
      ],
      sourceIds: ['one-earth-eco-26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'the richest ecoregion in Africa for primates, with the largest lowland gorilla population',
        'historically large African forest elephant populations greatly reduced by poaching',
        'strictly endemic mammals including Dollman\u2019s tree mouse and Remy\u2019s shrew',
        'diverse bird fauna with 442 species at Odzala and at least 428 in the Tri-national area, including the recently discovered forest robin Stiphornis sanghensis',
      ],
      sourceIds: ['one-earth-eco-26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 88% with a protection level of 3, with about one-third of frontier forests in a natural state. Protected areas include Lob\u00e9k\u00e9, Nouabal\u00e9-Ndoki, Odzala-Kokoua, Dzanga-Ndoki, Ndoki, Mbam et Dj\u00e9rem, the Dzanga-Sangha Special Reserve, Dja faunal reserve, and Ngotto classified forest. Threats include logging concessions and bushmeat hunting\u2014with duikers the primary quarry and leopards declining\u2014plus elephant, gorilla, and chimpanzee poaching and African grey parrot trade.',
      sourceIds: ['one-earth-eco-26'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:western-lowland-gorilla',
      'species:mandrill',
      'species:grey-cheeked-mangabey',
      'species:african-forest-elephant',
      'species:dollmans-tree-mouse',
    ],
    countryIds: ['CM', 'CF', 'CG', 'GA'],
    sources: ['one-earth-eco-26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:52',
    summary: {
      value:
        'The Northern Congolian Forest-Savanna ecoregion extends from the Cameroon Highlands east through CAR, northeastern DRC, South Sudan, and into northwestern Uganda. Repeated climatic fluctuations have expanded and contracted the forest-savanna boundary here, and today it supports a mix of savanna and forest mammals including elephants, giant eland, bongo, red-flanked duiker, and giraffe. Both the western black rhino and wild northern white rhino have been lost from the region, primarily from poaching.',
      sourceIds: ['one-earth-eco-52'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'extends from the Cameroon Highlands east through CAR, northeastern DRC, South Sudan, and into northwestern Uganda',
        'mostly a dissected plateau at about 500 m, rising to 700 m toward the Cameroon Highlands',
        'Precambrian basement rocks with inselbergs',
        'gallery forests along watercourses and remnant peripheral semi-evergreen rainforest in the south',
      ],
      sourceIds: ['one-earth-eco-52'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical savanna climate climatically transitional between the Sudanian and Guineo-Congolian regions, with a single wet and a single dry season. Mean annual precipitation is 1,200 to 1,600 mm per year, declining north into the East Sudanian Savanna, with temperatures from 34\u00b0C in the rainy season to 13\u00b0C in the dry season.',
        annualPrecipitationMm: { min: 1200, max: 1600 },
        temperatureC: { min: 13, max: 34 },
      },
      sourceIds: ['one-earth-eco-52'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'forest, woodland, and secondary grassland intergrading, controlled by precipitation, water stress, dry-season fire severity, and human activity',
        'gallery forests along watercourses',
        'widespread species including Berlina grandiflora, Cola laurifolia, Cynometra vogelii, and Pterocarpus santalinoides',
        'moist wooded grasslands of Andropogon, Hyparrhenia, and Loudetia genera',
      ],
      sourceIds: ['one-earth-eco-52'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'repeated climatic fluctuations expanding and contracting rainforest and savanna',
        'a mix of savanna and forest mammals including red-flanked duiker, giant eland, bongo, and northern savanna giraffe',
        'both forest elephants in forest patches and savanna elephants in savanna woodlands',
        'large predators including lions, with the western black rhino and wild northern white rhino now extinct primarily from poaching',
      ],
      sourceIds: ['one-earth-eco-52'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 16% with a protection level of 9. Protected areas include Garamba National Park, Mbam-Dj\u00e9rem and B\u00e9nou\u00e9 National Parks, Southern National Park, and the Bomu Wildlife Reserve. Threats include civil war, armed poaching gangs, and elephant ivory poaching, with about 3,000 elephants killed at Garamba between 2007 and 2014 and roughly 1,700 remaining, plus gallery-forest logging, fuelwood, and charcoal.',
      sourceIds: ['one-earth-eco-52'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:african-elephant',
      'species:giant-eland',
      'species:bongo',
      'species:red-flanked-duiker',
      'species:lion',
      'species:giraffe',
    ],
    countryIds: ['CF', 'SS', 'CM', 'CD', 'UG', 'NG'],
    sources: ['one-earth-eco-52'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:91',
    summary: {
      value:
        'The Aldabra Island Xeric Scrub ecoregion occupies one of the world\u2019s largest atolls, roughly 400 km northwest of Madagascar, and is home to the world\u2019s largest population of giant tortoises at about 152,000. These tortoises are the dominant grazers and act as ecosystem engineers, creating distinctive tortoise turf through grazing, seed dispersal, and nutrient cycling. The xeric scrub also holds two endemic land birds and ten endemic subspecies, including the Aldabra white-throated rail, the last flightless bird of the Western Indian Ocean.',
      sourceIds: ['one-earth-eco-91'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'one of the largest atolls in the world, roughly 400 km northwest of Madagascar',
        'four main islands, Grand Terre, Malabar, Picard, and Polymnie, plus lagoon islets',
        'a rough circle enclosing a large shallow lagoon connected to the Indian Ocean by four channels',
        'isolated coral atoll about 680 km east of the African mainland and 1,100 km southwest of the main Seychelles group',
      ],
      sourceIds: ['one-earth-eco-91'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical with an average annual temperature of 27\u00b0C and variable rainfall of about 1,200 mm per year. A wet season runs from November to April and a drier season from May to October.',
        annualPrecipitationMm: { min: 1200, max: 1200 },
        temperatureC: { min: 22, max: 32 },
      },
      sourceIds: ['one-earth-eco-91'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dense, nearly monospecific Pemphis acidula thicket near the saline water table',
        'mixed scrub of low trees, shrubs, herbs, and grasses covering the rest of the atoll',
        'terrestrial flora of about nine fern species and 178 flowering plants, 38% endemic',
        'many endemic invertebrates',
      ],
      sourceIds: ['one-earth-eco-91'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'the world\u2019s largest giant tortoise population of about 152,000, one of the few areas where the dominant grazer is a reptile',
        'giant tortoises acting as ecosystem engineers via grazing, seed dispersal, and nutrient cycling, creating tortoise turf',
        'significant breeding populations of green turtles and hawksbill turtles',
        'two endemic land birds and ten endemic subspecies among largely intact island avifauna',
      ],
      sourceIds: ['one-earth-eco-91'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 84% with a protection level of 10. Aldabra became a special reserve in 1981, a World Heritage Site in 1982, and a Ramsar site covering 439 km2, with a research station on Picard. Green turtle numbers are growing, but introduced rats, cats, and goats threaten nesting, and the black rat is a nest predator. Priority actions include climate and habitat modeling, alien species eradication, and ecotourism, facing sea-level rise, ocean acidification, and drought.',
      sourceIds: ['one-earth-eco-91'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:aldabra-giant-tortoise',
      'species:aldabra-white-throated-rail',
      'species:aldabra-drongo',
    ],
    countryIds: ['SC'],
    sources: ['one-earth-eco-91'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:20',
    summary: {
      value:
        'The Mascarene Forests ecoregion encompasses diverse rainforests, cloud forests, swamp forests, and lowland dry forests across Mauritius, Réunion, and Rodrigues. These volcanic islands once hosted one of the richest floras and faunas of any oceanic archipelago, but have suffered catastrophic extinctions, including the entire Raphidae family, the dodo and Rodrigues solitaire. The ecoregion contains roughly 955 plant species, about 695 endemic, and 16 endemic bird species, with ongoing intensive conservation efforts.',
      sourceIds: ['one-earth-eco-20'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic islands about 640-1,450 km east of Madagascar',
        'Réunion (2,500 km², France) is the youngest with the still-active Piton de la Fournaise (2,631 m)',
        'Mauritius (1,865 km²) ceased volcanic activity about 20,000 years ago, while Rodrigues is the oldest volcano',
        'diverse terrain from lowland to montane, with coral reefs of about 750 km² and steep cirques and gorges on Réunion',
      ],
      sourceIds: ['one-earth-eco-20'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical to subtropical, warm and seasonal, with coastal temperatures of 22-27°C and much cooler, wetter conditions in the Réunion highlands. Réunion receives 4,000-10,000 mm/yr, Mauritius lowlands 750-2,400 mm/yr and uplands 2,400-4,500 mm/yr. Intense cyclones periodically affect all islands.',
        annualPrecipitationMm: { min: 750, max: 10000 },
        temperatureC: { min: 22, max: 27 },
      },
      sourceIds: ['one-earth-eco-20'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'extremely diverse, including wetlands, palm-rich woodland, lowland dry forest, rainforest, cloud forest, and montane evergreen forest',
        'about 955 plant species with roughly 695 endemic, dominated by Ebenaceae, Rubiaceae, and Lauraceae',
        'introduced species such as Chinese guava and Japanese cedar have replaced much native vegetation',
        'heathland caps the highest Réunion mountains',
      ],
      sourceIds: ['one-earth-eco-20'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'fruit bat pollination and seed dispersal are critical for native forest regeneration',
        'seabird nutrient inputs enrich the islands',
        'trophic disruption by invasive rats, cats, mongooses, and macaques caused over half of bird extinctions',
        'introduced herbivores destroy native vegetation, and roughly 30% of endemic land snails are extinct with another 30% severely threatened',
        'pollination networks disrupted by species losses',
      ],
      sourceIds: ['one-earth-eco-20'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 52% with a protection level of 7. Black River Gorges National Park (67 km²) on Mauritius is the largest protected area, joined by Réunion reserves including Mare Longue and Roche Ecrite, and small offshore islets managed as predator-free reserves. Priority actions include invasive alien species control, nonlethal fruit bat management, and habitat corridor expansion.',
      sourceIds: ['one-earth-eco-20'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:reunion-cuckoo-shrike',
      'species:reunion-harrier',
      'species:mauritius-kestrel',
      'species:pink-pigeon',
      'species:echo-parakeet',
      'species:mauritian-flying-fox',
      'species:round-island-boa',
      'species:trindade-petrel',
    ],
    countryIds: ['MU', 'RE'],
    sources: ['one-earth-eco-20'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:67',
    summary: {
      value:
        'This ecoregion covers the temperate grasslands of Amsterdam and Saint-Paul Islands, about 7,000 ha of two extremely remote subantarctic volcanic islands. It supports one of the world\u2019s rarest breeding birds, the Amsterdam albatross with only about 30 breeding pairs, along with significant populations of northern rockhopper penguins, subantarctic fur seals, and multiple albatross species. The original Phylica forest has been largely replaced by invasive meadow, though remnants persist.',
      sourceIds: ['one-earth-eco-67'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Amsterdam Island (55 km², extinct volcano to 911 m) and Saint-Paul Island (7 km², 272 m with a flooded crater harbor)',
        'both volcanic, about 80 km apart, roughly 3,000 km from any continent',
        'steep coastal cliffs, rocky shores, lava fields, tussock grassland, and lowland meadow',
        'Saint-Paul\u2019s flooded crater creates a dramatic enclosed harbor with vertical cliff walls',
      ],
      sourceIds: ['one-earth-eco-67'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Moderate oceanic climate with air temperatures from 11.2°C in August to 17°C in February, averaging 13.5°C, and sea surface temperatures of 12.7-17.4°C. Precipitation is about 1,114 mm/yr, mostly rain. Snow or hail occurs in winter at higher elevations, about 500 km north of the Antarctic convergence.',
        annualPrecipitationMm: { min: 1114, max: 1114 },
        temperatureC: { min: 11.2, max: 17 },
      },
      sourceIds: ['one-earth-eco-67'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'temperate grasslands dominate the lowlands',
        'the native Phylica nitida (Rhamnaceae) tree, reaching 6-7 m, is the only native tree on any French sub-Antarctic island',
        'residual Phylica forest on the eastern slope between Grand Bois and Chaudron',
        'invasive lowland meadow now covers most of the formerly forested area, and invasive plants have significantly changed the landscape',
      ],
      sourceIds: ['one-earth-eco-67'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'seabird nutrient transfer via guano from about 10-11 breeding species, four of them extremely rare',
        'rockhopper penguins perform large-scale winter movements of about 2,100 km over deep oceanic waters',
        'lactating subantarctic fur seals forage up to 530 km, diving to catch myctophid fish at night',
        'disease outbreaks and industrial longline fishing cause bycatch and pathogen mortality in albatrosses',
        'feral cattle were the main vegetation threat until eradicated in 2010',
      ],
      sourceIds: ['one-earth-eco-67'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 99% with a protection level of 10. The islands are protected within the National Nature Reserve of French Southern Territories, a Ramsar site of 22,700 km². Priority actions include mitigating bycatch where the Amsterdam albatross feeds, long-term seabird population monitoring, and pathogen surveillance in seabird colonies. Only about 160-170 Amsterdam albatrosses survive, all restricted to the Peat Bog plateau at about 600 m.',
      sourceIds: ['one-earth-eco-67'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:amsterdam-albatross',
      'species:indian-yellow-nosed-albatross',
      'species:sooty-albatross',
      'species:northern-rockhopper-penguin',
      'species:subantarctic-fur-seal',
      'species:brown-skua',
    ],
    countryIds: ['TF'],
    sources: ['one-earth-eco-67'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:68',
    summary: {
      value:
        'This ecoregion encompasses all the Tristan da Cunha archipelago\u2019s shrublands and grasslands across approximately 17,000 ha. Gough Island hosts one of the most important seabird colonies on Earth, with about 20 breeding seabird species. The ecoregion is defined by its cool-temperate oceanic climate, volcanic geology, and extraordinary endemism in both birds and plants, despite the complete absence of native terrestrial reptiles, amphibians, or mammals.',
      sourceIds: ['one-earth-eco-68'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'five volcanic islands on the east slope of the Mid-Atlantic Ridge',
        'Tristan is volcanically active, about 1 million years old, with a snow-capped peak and crater lake',
        'Gough Island about 425 km southeast is an eroded volcanic mass with one main island and offshore islets',
        'Nightingale and Inaccessible are eroded volcanic cones with steep coastal cliffs, tussock grass slopes, and subantarctic grassland',
      ],
      sourceIds: ['one-earth-eco-68'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Cool-temperate oceanic with mean near-sea-level temperatures of 11.3-14.5°C and little seasonal variation but rapid weather changes, on the edge of the roaring forties wind belt. Tristan receives about 1,676 mm/yr of precipitation while the much wetter Gough Island receives about 3,397 mm/yr.',
        annualPrecipitationMm: { min: 1676, max: 3397 },
        temperatureC: { min: 11.3, max: 14.5 },
      },
      sourceIds: ['one-earth-eco-68'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'temperate grasslands of tussock grass, shrublands of Phylica scrub, and fern bush dominated by tree ferns (Cyathea)',
        'numerous endemic plant species including tree ferns',
        'Gough Island\u2019s fern bush is critical habitat for the Gough moorhen',
        'volcanic soils that are often thin on steep slopes',
      ],
      sourceIds: ['one-earth-eco-68'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'massive seabird nutrient transfer, with guano deposition enriching the soils',
        'Gough Island supports about 20 breeding seabird species including the entire world population of the Tristan albatross',
        'invasive house mice on Gough predate over a million seabird chicks a year',
        'subantarctic fur seals and southern elephant seals haul out on the coasts',
        'no native terrestrial predators, so trophic dynamics are shaped entirely by the absence of mammals',
      ],
      sourceIds: ['one-earth-eco-68'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 48% with a protection level of 10. Gough Island, Inaccessible Island, and territorial waters are inscribed on the UNESCO World Heritage List (1995), though there is no protected area on Tristan Island itself. Priority actions include promoting sustainable local produce to reduce imports carrying invasive species, eradicating all rodents and invasive species, and building quarantine and biosecurity capacity.',
      sourceIds: ['one-earth-eco-68'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:tristan-albatross',
      'species:atlantic-yellow-nosed-albatross',
      'species:sooty-albatross',
      'species:northern-rockhopper-penguin',
      'species:tristan-thrush',
      'species:gough-finch',
      'species:gough-moorhen',
      'species:macaroni-penguin',
    ],
    countryIds: ['SH'],
    sources: ['one-earth-eco-68'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:47',
    summary: {
      value:
        'The Kalahari Acacia Woodlands occupy a broad band from northern Namibia across to Botswana just east of the Okavango Delta, on the centre of the Great African Plateau at about 1,000 m. This semi-arid ecoregion was once part of an important seasonal migration route for large herbivores such as blue wildebeest, eland, Burchell\u2019s zebra, buffalo, and hartebeest, but 1950s foot-and-mouth veterinary fences still disrupt migration and caused population collapses. It supports many charismatic savanna mammals and the flagship near-endemic black-faced babbler.',
      sourceIds: ['one-earth-eco-47'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'broad band across northern Namibia into Botswana, east of the Okavango Delta, on the centre of the Great African Plateau at about 1,000 m',
        'sandveld of low sand ridges with taller trees and hardveld of mopane and complex vegetation on changing soils',
        'surface water scarce, with drainage mainly restricted to pans and dry valleys that only hold water after rain',
        'spans the southern extent of the Zambezian centre of endemism',
      ],
      sourceIds: ['one-earth-eco-47'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Semi-arid continental with droughts on an approximate 7-year cycle. Rainfall is mainly summer (Oct-Mar) with little or no winter rain, from about 300 mm in the southwest to 600 mm in the north. Diurnal and seasonal temperature ranges are high, with below-freezing nights in June-July and summer temperatures above 40°C.',
        annualPrecipitationMm: { min: 300, max: 600 },
        temperatureC: { min: -5, max: 40 },
      },
      sourceIds: ['one-earth-eco-47'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dominant core trees Lonchocarpus nelsii, Terminalia sericea, Burkea africana, Combretum spp., Acacia erioloba, and A. luederitzii',
        'sandveld ridges with Peltophorum africanum, Croton gratissimus, A. fleckii, and Combretum zeyheri',
        'hardveld with Colophospermum mopane, Acacia nigrescens, Combretum apiculatum, and C. imberbe',
        'relatively low flora and fauna richness and endemism',
      ],
      sourceIds: ['one-earth-eco-47'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'historical seasonal migration of large herbivores (wildebeest, eland, zebra, buffalo, and hartebeest) disrupted by veterinary cordon fences and causing population collapses',
        'livestock expansion via borehole groundwater extraction and elimination of competing wildlife',
        'fire as a natural process, but with mismanaged fire regimes',
        'climate change increasing rainfall variability and extreme drought frequency',
      ],
      sourceIds: ['one-earth-eco-47'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 91% with a protection level of 6. Protected areas include part of the Khaudum National Park (Namibia), the Okavango Delta System Ramsar Site (Botswana), and community conservancies and forests such as Eiseb, Omuramba Ua, Nyae Nyae, and Ondjou. Threats include livestock agriculture expansion, overgrazing, veterinary fences, and climate change.',
      sourceIds: ['one-earth-eco-47'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:black-faced-babbler',
      'species:blue-wildebeest',
      'species:roan-antelope',
      'species:greater-kudu',
      'species:eland',
      'species:common-duiker',
    ],
    countryIds: ['BW', 'NA'],
    sources: ['one-earth-eco-47'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:94',
    summary: {
      value:
        'The Gariep Karoo is an extensive, open, arid region of low-shrub vegetation punctuated by rugged relief, extending from the middle of South Africa\u2019s Northern Cape over the Orange River into Namibia. It contains the Fish River Canyon, the second largest canyon in the world after the Grand Canyon and the largest in the southern hemisphere, along with major pan systems such as the Grootvloer-Verneukpan complex. The flagship species is the strictly endemic ferruginous lark.',
      sourceIds: ['one-earth-eco-94'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'extensive arid low-shrub region with rugged relief, from central South Africa\u2019s Northern Cape northwards over the Orange River into Namibia',
        'Fish River Canyon incises the plateau up to 550 m deep and 65 km wide, the largest canyon in the southern hemisphere',
        'pan systems including the large Grootvloer-Verneukpan complex, which in wet years links the Orange and Sak river systems and enables fish interchange',
      ],
      sourceIds: ['one-earth-eco-94'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Arid with frequent droughts and large seasonal and daily temperature fluctuations. Mean maximum mid-summer (January) temperatures exceed 36°C while mean minimum mid-winter (July) temperatures fall below freezing. Annual rainfall is 50-500 mm, decreasing east-to-west and north-to-south, with occasional fog in the west and cooler, wetter higher mountain reaches.',
        annualPrecipitationMm: { min: 50, max: 500 },
        temperatureC: { min: 0, max: 36 },
      },
      sourceIds: ['one-earth-eco-94'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'succulent dwarf shrubs and tall stem-succulents including quiver trees (Aloidendron dichotomum)',
        'abundant shrubs of Drosanthemum, Eriocephalus, Galenia, Pentzia, Pteronia, and Ruschia',
        'perennial grasses of Aristida, Digitaria, Enneapogon, and Stipagrostis',
        'riparian thicket near the Orange River with arid-adapted Shepherds tree (Boscia) and ringwood trees',
      ],
      sourceIds: ['one-earth-eco-94'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'relict arid fauna from past drier epochs along a continuous arid corridor across southeast and eastern Africa',
        'formerly grazed by indigenous migratory ungulates, now by domestic sheep and goats within fences, altering plant composition and cover',
        'poisoned carcasses targeting black-backed jackal and caracal that kill non-target raptors',
        'invasive alien plants such as mesquite and tobacco tree altering ecology and hydrology, with mining along the Orange River contaminating soil and water',
      ],
      sourceIds: ['one-earth-eco-94'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 40% with a protection level of 1. Protected and managed land includes community conservancies and private reserves in Namibia (Han Awab, Khob Naub, Huibes, Gamaseb, Gondwana Private Reserve), parks such as Hardap, Naute, and Ais-Ais Hotsprings, plus Augrabies Falls National Park in South Africa. Priority actions include reintroducing black rhino to historical range, controlling alien species, and establishing further protected areas.',
      sourceIds: ['one-earth-eco-94'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:ferruginous-lark',
      'species:hartmanns-zebra',
      'species:black-rhinoceros',
      'species:giraffe',
      'species:klipspringer',
      'species:red-hartebeest',
      'species:martial-eagle',
    ],
    countryIds: ['ZA', 'NA'],
    sources: ['one-earth-eco-94'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:97',
    summary: {
      value:
        'The Kalahari Xeric Savanna stretches across northwestern South Africa, southern Botswana, and central-southeastern Namibia on the level plains of the Kalahari Basin, interrupted by long parallel sand dunes. Temperatures are extreme, with winter nights down to -14°C and summer days above 45°C, and rainfall is remarkably patchy at 150-500 mm. Despite very low plant endemism it supports remarkable large-mammal diversity, including the famous black-maned Kalahari lion, and the flagship species is the gemsbok.',
      sourceIds: ['one-earth-eco-97'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'level plains of the Kalahari Basin interrupted by long parallel red sand dunes in the south',
        'reddish-brown, nutrient-poor Kalahari sands on elevations of 600-1,600 m, mostly above 1,000 m',
        'latitude, high atmospheric pressure, and the Drakensberg barrier controlling climate',
      ],
      sourceIds: ['one-earth-eco-97'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Extreme temperature fluctuations, with up to 45°C change in a single day: winter nights plummet to -14°C and days soar to 30°C, while cold summer nights may drop to 5°C and daytime may exceed 45°C. Rainfall is remarkably patchy, highest in the northeast and lowest in the southwest, at 150-500 mm per year.',
        annualPrecipitationMm: { min: 150, max: 500 },
        temperatureC: { min: -14, max: 45 },
      },
      sourceIds: ['one-earth-eco-97'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'in less arid areas, open savanna of grasses (Schmidtia, Stipagrostis, Aristida, Eragrostis) interrupted by camelthorn, grey camelthorn, false umbrella thorn, blackthorn, shepherd\u2019s tree, and silver cluster-leaf trees',
        'shrubs including Grewia flava, Ziziphus mucronata, Tarchonanthus camphoratus, Rhigozum trichotomum, Acacia hebeclada, and Lycium',
        'in drier areas, large trees in ancient riverbeds, rolling red dunes with smaller trees, broom bushes, and dune reeds',
        'among the lowest plant species richness per unit area in southern Africa, with less than 3% of plants endemic',
      ],
      sourceIds: ['one-earth-eco-97'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'fire as a natural process, but mismanaged regimes degrading habitats, lowering species richness, and reducing nutrients',
        'veterinary, farm, and border fences causing a precipitous decline of blue wildebeest and hartebeest since the 1960s by blocking migration',
        'artificial waterholes compensating partly but often of poor quality',
        'poisoned carcasses killing non-target raptors, and climate change raising temperatures and decreasing rainfall',
      ],
      sourceIds: ['one-earth-eco-97'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 52% with a protection level of 3. The largest reserve is the Central Kalahari (part) and adjoining Khutse Game Reserves (Botswana), with Kgalagadi Transfrontier Park uniting the Kalahari Gemsbok and Gemsbok National Parks (proclaimed 1931). Communal conservancies in Namibia include Ovitoto, Otjombinde, and Ozonahi. Priority actions include borehole management and reassessing or removing veterinary fences.',
      sourceIds: ['one-earth-eco-97'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:gemsbok',
      'species:lion',
      'species:cheetah',
      'species:spotted-hyena',
      'species:brown-hyena',
      'species:meerkat',
      'species:cape-fox',
      'species:black-backed-jackal',
    ],
    countryIds: ['BW', 'NA', 'ZA'],
    sources: ['one-earth-eco-97'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:101',
    summary: {
      value:
        'The Nama Karoo is a vast, open, arid region of low-shrub vegetation punctuated by rugged relief, on the central plateau of South Africa\u2019s Western, Northern, and Eastern Cape provinces inland of the Southern Fold Mountains. Historically it saw game migrations numbering in the millions, with springbok most numerous alongside blue wildebeest, blesbok, quagga, and eland, a spectacle ended by hunting and livestock grazing. The flagship species is the vulnerable martial eagle.',
      sourceIds: ['one-earth-eco-101'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'vast, open, arid region with low-shrub vegetation and rugged relief on the central plateau of the Western, Northern, and Eastern Cape provinces, inland of the Southern Fold Mountains',
        'the Orange River Basin is the main drainage system, with many ephemeral watercourses',
        'droughts are common',
      ],
      sourceIds: ['one-earth-eco-101'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Harsh, with frequent droughts and large seasonal and daily temperature swings of about 25°C between day and night, with common frosts. Mean maximum mid-summer (January) temperatures exceed 30°C while mean minimum mid-winter (July) temperatures fall below freezing. Rainfall is unseasonal, generally peaking Dec-Mar, at 100-500 mm per year and decreasing east-to-west and north-to-south.',
        annualPrecipitationMm: { min: 100, max: 500 },
        temperatureC: { min: 0, max: 30 },
      },
      sourceIds: ['one-earth-eco-101'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dwarf shrubs and grasses dominate, their relative abundance dictated by rainfall and soil',
        'shrubs of Drosanthemum, Eriocephalus, Galenia, Pentzia, Pteronia, and Ruschia with perennial grasses of Aristida, Digitaria, Enneapogon, and Stipagrostis',
        'trees and taller woody shrubs restricted mostly to watercourses, including Acacia karroo, Diospyros lycioides, Grewia robusta, Rhus lancea, and Tamarix usneoides',
      ],
      sourceIds: ['one-earth-eco-101'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'grass cover gradually increasing since 1962 with rising temperatures and CO2, promoting fuel continuity and increased fire frequency in a grass-fire feedback cycle',
        'relict fauna of past drier epochs along a continuous arid corridor',
        'invasive alien plants such as Prosopis (now the country\u2019s second most widespread invasive), Opuntia, and Atriplex altering ecology and hydrology',
        'pesticides for brown locusts bioaccumulating in raptors',
      ],
      sourceIds: ['one-earth-eco-101'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 11% with a protection level of 2, with only about 1% of the ecoregion protected (Karoo and Camdeboo National Parks plus smaller reserves such as Oviston, Sondersorg, and Aberdeen and the Compassberg Protected Environment). Most of the ecoregion is livestock rangeland, still intact but partly severely degraded. Priority actions include a national strategy against invasive species, preventing man-made fires, and expanding the protected area network.',
      sourceIds: ['one-earth-eco-101'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:martial-eagle',
      'species:springbok',
      'species:blue-wildebeest',
      'species:eland',
      'species:bat-eared-fox',
      'species:black-backed-jackal',
      'species:caracal',
      'species:yellow-mongoose',
    ],
    countryIds: ['ZA'],
    sources: ['one-earth-eco-101'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:98',
    summary: {
      value:
        'The Kaokoveld Desert stretches along the west coast of southern Africa from the Uniab and Koigab Rivers of Namibia northwards into the Mo\u00e7\u00e2medes Desert of southern Angola, about 100 km wide from the Atlantic coast to the Great Escarpment. Its flagship is the relict gymnosperm Welwitschia mirabilis, whose individual plants are estimated at over 2,500 years old and rely on fog from the Benguela Current. The desert also supports desert black rhino, giraffe, black-faced impala, and other arid-adapted fauna.',
      sourceIds: ['one-earth-eco-98'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'west-coast strip from the Uniab and Koigab River systems of Namibia north into southern Angola\u2019s Mo\u00e7\u00e2medes Desert, about 100 km wide from the Atlantic coast to the foot of the Great Escarpment',
        'shifting sand dunes, gravel deserts, saline beaches, and scattered dry riverbeds',
        'lies at the northern end of the Karoo-Namib regional centre of endemism',
      ],
      sourceIds: ['one-earth-eco-98'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Hyper-arid and highly unpredictable, falling within the northern summer-rainfall area with most rain as sporadic thunderstorms Oct-Mar and under 100 mm per year. The cool Benguela Current forms a stable fog layer blown inland up to 50 km. Coastal temperatures are suppressed while inland extremes fall below 0°C and rise above 50°C.',
        annualPrecipitationMm: { min: 0, max: 100 },
        temperatureC: { min: 0, max: 50 },
      },
      sourceIds: ['one-earth-eco-98'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'some areas devoid of vegetation (shifting dunes), with Acanthosicyos horridus colonizing sand',
        'coastal gravels host colourful foliose and crustose lichen fields, while inland gravels support Zygophyllum simplex, Galenia africana, Sesuvium portulacastrum, and Stipagrostis subacaulis',
        'sparse grassland of Salsola nollothensis, Indigofera cunenensis, Stipagrostis ramulosa, and Eragrostis cyperoides, with halophytic communities on saline beaches',
        'ancient endemics include Welwitschia mirabilis, with families rich in endemics including Acanthaceae, Asclepiadaceae, Burseraceae, Fabaceae, Poaceae, and Vitaceae',
      ],
      sourceIds: ['one-earth-eco-98'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'fog-driven moisture cycle in which the Benguela Current meets hot Namib air to sustain plants and animals',
        'Welwitschia leaves chewed by antelopes and rhinos for moisture during drought',
        'the solifuge sun spider Ceroma inerme displaying marine-adapted xerophilic behaviour foraging in the intertidal zone',
        'elephant, rhino, and giraffe using riverbeds fringing the desert, with several species being relicts of a once-continuous arid belt across Africa',
      ],
      sourceIds: ['one-earth-eco-98'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 100% with a protection level of 10. Protection includes Skeleton Coast National Park (500 km), Namibe Partial Reserve and Iona National Park in Angola, with community conservancies such as Merienfluss and Orupembe. Threats include wildlife poaching (especially post-war Angola), seasonal overgrazing by Ovahimba cattle, and settlement and agriculture.',
      sourceIds: ['one-earth-eco-98'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:black-rhinoceros',
      'species:giraffe',
      'species:springbok',
      'species:gemsbok',
      'species:damara-dik-dik',
      'species:black-faced-impala',
      'species:grays-lark',
    ],
    countryIds: ['AO', 'NA'],
    sources: ['one-earth-eco-98'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:102',
    summary: {
      value:
        'The Namaqualand-Richtersveld Steppe extends down the western coast of Namibia from L\u00fcderitz into South Africa, forming the Namaqualand-Namib Domain within the two-billion-year-old Namaqualand Metamorphic Province. It belongs to the world\u2019s only entirely arid plant hotspot, famed for its succulent diversity, lichen fields, and the flagship quiver tree. Endemism is especially rich among arachnids, beetles, aculeate Hymenoptera, and reptiles, while the only strictly endemic bird is Barlow\u2019s lark.',
      sourceIds: ['one-earth-eco-102'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'western coast from L\u00fcderitz (Namibia) into South Africa',
        'comprises the Namaqualand-Namib Domain of the Namaqualand Metamorphic Province of 1-2 billion-year-old granites and gneisses',
        'encompasses the fog-affected coastal plain and adjacent escarpment, including the Gariep Centre (Richtersveld) extending into Namibia\u2019s Sperrgebiet',
      ],
      sourceIds: ['one-earth-eco-102'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Mild compared with other arid areas, with extremely rare frosts. Most rain falls in winter and is relatively reliable and predictable, with prolonged winter droughts rare. Annual rainfall ranges from 20 mm in the drier northwest to over 400 mm on the escarpment (most of the area under 150 mm), supplemented by heavy dewfalls and fog.',
        annualPrecipitationMm: { min: 20, max: 400 },
      },
      sourceIds: ['one-earth-eco-102'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'the world\u2019s only entirely arid plant hotspot with outstanding succulent diversity, especially dwarf and contracted-leaved species of Mesembryanthemaceae, Crassulaceae, and Aloaceae, and high geophyte diversity',
        'tree richness is poor (only about 35 species) but includes charismatic endemics such as the quiver tree, bastard quiver tree, and halfmens',
        'roughly 355 endemic plant species and three endemic genera (Juttadinteria, Dracophilus, Arenifera)',
        'lichen fields with the world\u2019s highest cover, density, and diversity of lichens',
      ],
      sourceIds: ['one-earth-eco-102'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'fog and heavy dew supplement winter rainfall in the regional moisture regime',
        'desiccation-adapted succulent water-storage physiology, as in the quiver tree (Aloidendron dichotomum) which can live about 200 years',
        'high endemism concentrated in the Gariep Centre and Sperrgebiet',
        'the diamond mining belt degrades the narrow coastal zone',
      ],
      sourceIds: ['one-earth-eco-102'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 52% with a protection level of 7. Protected areas include Richtersveld National Park, Ai-Ais Hot Springs, Namaqua National Park, Goegab Nature Reserve, and Sperrgebiet National Park inside the Protected Diamond Area closed since 1910. Threats include overgrazing, rangeland expansion, agriculture in perennial-river valleys, illegal succulent and geophyte collection, and mining for diamonds and other minerals.',
      sourceIds: ['one-earth-eco-102'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:barlows-lark',
      'species:steenbok',
      'species:puff-adder',
      'species:namaqua-thick-toed-gecko',
    ],
    countryIds: ['ZA', 'NA'],
    sources: ['one-earth-eco-102'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:103',
    summary: {
      value:
        'The Namib Desert is one of the most arid regions in the world, extending along the coastal plain of western Namibia from the Uniab River to L\u00fcderitz, 80-200 km inland to the Namib Escarpment. Its flagship is the head-stander or fog-basking beetle Onymacris unguicularis, which sits on its head collecting fog on its elytra for water. The cool Benguela Current suppresses rainfall but supplies fog up to about 100 km inland, sustaining a suite of desert-adapted species.',
      sourceIds: ['one-earth-eco-103'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'coastal plain of western Namibia from the Uniab River to L\u00fcderitz, 80-200 km inland to the Namib Escarpment',
        'southern Namib has expansive shifting dunes reaching about 300 m high',
        'north of the Kuiseb River, dunes give way to Central Namib gravel plains dotted with granite and limestone inselbergs',
        'isolated between ocean and escarpment and arid for millions of years',
      ],
      sourceIds: ['one-earth-eco-103'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Sparse, highly unpredictable rainfall of 5 mm per year in the west to about 85 mm in the east. The coast receives 2-20 mm with thick fog on more than 180 days per year, fog about 40 days per year some 50 km inland, and rarely further inland (rain 20-85 mm). Temperatures are low near the coast due to the Benguela Current but inland extremes fall below 0°C and above 50°C.',
        annualPrecipitationMm: { min: 5, max: 85 },
        temperatureC: { min: 0, max: 50 },
      },
      sourceIds: ['one-earth-eco-103'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'a few perennial grasses and the succulent Trianthema hereroensis, with hummocks of Acanthosicyos horridus between dunes and coast',
        'coastal fog-belt shrubs such as Psilocaulon salicornioides, Zygophyllum clavatum, Salsola aphylla, and S. nollothensis, plus the pencil plant, dollar bush, and quiver trees (Aloidendron dichotomum)',
        'the monotypic Welwitschia mirabilis, endemic to the Namib and Kaokoveld, has the longest-lived leaves of any plant (about 2,500 years)',
        'high plant endemism and many arid adaptations',
      ],
      sourceIds: ['one-earth-eco-103'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'fog-basking behaviour, including the head-stander beetle collecting water on its elytra',
        'the dune system driven north by prevailing southerly winds and halted by Kuiseb River vegetation',
        'long-term aridity producing a stable centre for desert species evolution',
        'small rodents such as the dune hairy-footed gerbil and Grant\u2019s golden mole burrow, while wedge-snouted sand lizards and barking geckos dive beneath the sand',
      ],
      sourceIds: ['one-earth-eco-103'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 94% with a protection level of 10. Key protected areas include Namib-Naukluft National Park (the largest conservation area in southern Africa), Cape Cross Seal Reserve, the Erg du Namib World Heritage Site, NamibRand Private Reserve, Sperrgebiet, and Dorob National Parks. Threats include off-road driving, groundwater extraction, Topnaar livestock overgrazing, and mining.',
      sourceIds: ['one-earth-eco-103'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:head-stander-beetle',
      'species:hartmanns-zebra',
      'species:gemsbok',
      'species:springbok',
      'species:grants-golden-mole',
      'species:brown-hyena',
    ],
    countryIds: ['NA'],
    sources: ['one-earth-eco-103'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:104',
    summary: {
      value:
        'The Namibian Savanna Woodlands cover the narrow, deeply dissected escarpment inland of the Namib Desert, broadening south where it includes extensive Nama Karoo plateau. The flagship species is the Hartmann\u2019s zebra, the only large mammal endemic to Namibia and near-endemic to the ecoregion, threatened by annual harvesting for the skin trade. The Kaoko Escarpment here is a major endemism hotspot.',
      sourceIds: ['one-earth-eco-104'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'narrow escarpment inland of the Namib Desert, broadening southwards onto the Nama Karoo plateau south of Mariental',
        'the escarpment edge is deeply dissected with mountains including Baynes (2,038 m), Erongo (2,319 m), Naukluft (1,974 m), Spitzkoppe (1,759 m), and Gamsberg (2,347 m)',
      ],
      sourceIds: ['one-earth-eco-104'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Low rainfall of 60 mm (west) to 200 mm (east), most falling as summer thundershowers (Oct-Mar) with great inter-annual variation and the driest years the least predictable. Low humidity gives extreme temperatures, with lows to -9°C and mean monthly maxima occasionally above 40°C.',
        annualPrecipitationMm: { min: 60, max: 200 },
        temperatureC: { min: -9, max: 40 },
      },
      sourceIds: ['one-earth-eco-104'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'highly varied due to topography, soils, and microclimate',
        'mopane savanna (Colophospermum mopane, Sesamothamnus benguellensis, S. guerichii) in the north and east',
        'semi-desert-savanna transition with Euphorbia guerichiana, Cyphostemma, Adenolobus, quiver tree, Moringa ovalifolia, and Commiphora',
        'south becomes dwarf shrub savanna (Rhigozum trichotomum, Acacia nebrownii, Boscia foetida, Catophractes alexandri), with the Kaoko Escarpment and Brandberg being endemism hotspots',
      ],
      sourceIds: ['one-earth-eco-104'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'the Kaoko Escarpment is one of Namibia\u2019s two internationally recognized endemism hotspots, with high Namibian endemic invertebrates, amphibians, reptiles, mammals, and birds',
        'desert-dwelling elephant and black rhino populations',
        'bush encroachment reducing overall wildlife abundance',
        'poaching threats to unfenced black rhino, off-road driving compacting and scarring soils, plant poaching of succulents, and mining altering the landscape',
      ],
      sourceIds: ['one-earth-eco-104'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 53% with a protection level of 8. Communal conservancies have operated in Kunene and Erongo since 1990, including Gaingu, Tsiseb, Torra, Puros, and Orupembe, joined by Buffalo and Namibe partial reserves and Chimalavera Natural Regional Park in Angola. Priority actions include enhancing law enforcement against illegal wildlife and plant trade, restoring mining-degraded land, and building community-based natural resource management capacity.',
      sourceIds: ['one-earth-eco-104'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:hartmanns-zebra',
      'species:black-rhinoceros',
      'species:african-elephant',
      'species:greater-kudu',
      'species:springbok',
      'species:gemsbok',
    ],
    countryIds: ['NA', 'AO'],
    sources: ['one-earth-eco-104'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:58',
    summary: {
      value:
        'The Southern Congolian Forest-Savanna covers much of south-central Democratic Republic of Congo and the northeast corner of Angola, a dynamic forest-savanna mosaic that has experienced more than 20 climatic fluctuations over the last 10 million years. A large-scale erosional event about 2,000-2,500 years ago, from greater rainfall seasonality, fragmented forests across the region. The flagship species is the bongo, one of the largest forest antelopes with bright white stripes on its chestnut sides for camouflage.',
      sourceIds: ['one-earth-eco-58'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'rises gradually from the southern Congo Basin (300-400 m) onto the Central African Plateau (about 1,000 m)',
        'deep river valleys provide relief, exposing pre-Cretaceous karoo sedimentary rock, with Quaternary Kalahari sands stretching across the south',
        'long, ribbon-like forests run north-south along rivers fanning from the Congo Basin into savanna woodlands',
      ],
      sourceIds: ['one-earth-eco-58'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Annual mean maximum temperatures of 27-30°C and annual mean minimums of 18-21°C. Annual rainfall averages about 1,400 mm, with a drier southeast of about 1,200 mm and up to 1,600 mm on the northern margins and southern highlands supporting forest.',
        annualPrecipitationMm: { min: 1200, max: 1600 },
        temperatureC: { min: 18, max: 30 },
      },
      sourceIds: ['one-earth-eco-58'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'characteristic ribbon forests along rivers, with larger trees of drier peripheral rainforest including Albizia zygia, Lovoa trichilioides, and Parkia filicoidea',
        'southern part dominated by secondary grassland and wooded grassland with Andropogon schirensis, Hyparrhenia confinis, and Pennisetum unisetum',
        'a zone of dynamic change between forest and savanna with few endemics and moderate species richness',
      ],
      sourceIds: ['one-earth-eco-58'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'a forest-savanna mosaic persisting since the last glacial maximum (about 20,000 years ago)',
        'humans accelerate grassland spread by increasing fire frequency and intensity and clearing for agriculture, with elephants also contributing',
        'deep river valleys and Kalahari sands underlie vegetation complexity, with frequent burning in southern Bandundu, Kasai, and Shaba provinces',
        'high carbon-storage potential as grasslands develop into forests makes this a high conservation priority',
      ],
      sourceIds: ['one-earth-eco-58'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 11% with a protection level of 3, with only small areas protected including Bushimaie and Luama-Kivu Hunting Areas, Mangai Nature Reserve, and part of Lomami National Park. Ethnic strife and civil war in the DRC (1994-2003) hit hunting reserves with poaching and encroachment. Priority actions include building park staff capacity, developing alternative incomes to reduce land clearing, and expanding the protected area network.',
      sourceIds: ['one-earth-eco-58'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bongo',
      'species:african-elephant',
      'species:blue-duiker',
      'species:yellow-backed-duiker',
      'species:waterbuck',
      'species:southern-reedbuck',
      'species:hippopotamus',
    ],
    countryIds: ['CD', 'AO'],
    sources: ['one-earth-eco-58'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:63',
    summary: {
      value:
        'The Western Congolian Forest-Savanna covers the dissected plateaus bordering the lower Congo River across the Democratic Republic of Congo, Republic of Congo, and northern Angola. Its gallery forests and savanna are some of the most important habitats for iconic threatened African mammals - elephant, gorilla, chimpanzee, sun-tailed guenon, and Bouvier\u2019s red colobus. The flagship species is the strictly endemic white-headed robin-chat.',
      sourceIds: ['one-earth-eco-63'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'dissected plateaus bordering the lower Congo River through the Democratic Republic of Congo, Republic of Congo, and northern Angola',
        'north of the river the landscape rises onto plateaus averaging 650 m interspersed with canyons up to 300 m deep (L\u00e9fini Park)',
        'Guineo-Congolian semi-evergreen forests extend far into savanna along broad Congo tributary valleys',
      ],
      sourceIds: ['one-earth-eco-63'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical with limited seasonality. Mean maximum temperatures are 30°C in the lowlands and 21°C on high plateaus, with mean minimums of about 21°C (lowlands) to 15°C (plateaus). Over the last 2.5 million years, ice-age climatic fluctuations caused forest expansion and contraction, with forest contracting 3,000-2,500 years ago and expanding again over the past 2,000 years.',
        temperatureC: { min: 15, max: 30 },
      },
      sourceIds: ['one-earth-eco-63'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Guineo-Congolian semi-evergreen gallery forests of similar composition to interior Congolian rainforests',
        'dense dry evergreen forest on the Bat\u00e9k\u00e9 Plateau, including Mabwati dense forest on Kalahari sands (Marquesia macroura, M. acuminata, Daniellia alsteeniana, Berlinia giorgii)',
        'wooded grassland savanna',
        'moderate species richness due to habitat interdigitation and large rivers and gallery forests',
      ],
      sourceIds: ['one-earth-eco-63'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'forest-savanna dynamics in which savanna areas are being colonized by young successional forest, with northern encroachment of forest into savanna replacing savanna fauna and flora with Congo Basin species',
        'gallery forests acting as corridors for forest-dwelling wildlife',
        'high hunting pressure (blue duiker, porcupine, red river hog, forest buffalo, civet, and primates), with logging roads intensifying access',
        'a well-developed bushmeat trade affecting IUCN-listed species',
      ],
      sourceIds: ['one-earth-eco-63'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 26% with a protection level of 4. Protected areas include L\u00e9fini Wildlife Reserve, Loubetsi-Nyanga Ramsar, Tsoulou Wildlife Reserve, and Swa-Kibula Hunting Reserve (Congo), Plateau Bat\u00e9k\u00e9 and Lop\u00e9 National Parks and Ivindo (Gabon), and the For\u00eat de Luki UNESCO MAB (DRC), with no protected areas in Angola. Threats include subsistence farming, charcoal extraction, timber, hunting, and civil war.',
      sourceIds: ['one-earth-eco-63'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:white-headed-robin-chat',
      'species:western-lowland-gorilla',
      'species:central-chimpanzee',
      'species:sun-tailed-monkey',
      'species:bouviers-red-colobus',
      'species:african-elephant',
      'species:lion',
    ],
    countryIds: ['AO', 'CD', 'CG', 'GA'],
    sources: ['one-earth-eco-63'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:37',
    summary: {
      value:
        'Ascension Scrub and Grasslands covers Ascension Island and its surrounding islets, a young volcanic island about one million years old with 44 dormant craters, basalt lava fields, and steep coastal cliffs. It is one of the Atlantic\u2019s most important seabird breeding sites and the stronghold of the endemic Ascension frigatebird, which is re-colonizing the main island following feral cat eradication in 2004.',
      sourceIds: ['one-earth-eco-37'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Ascension Island (1,200 km northwest of St. Helena and 1,700 km from Africa) with surrounding islets and sea stacks',
        'young volcanic island about one million years old with 44 dormant craters, basalt lava fields, cinder cones, and steep south and southeast coastal cliffs',
        'one of the Atlantic\u2019s most important seabird breeding sites',
      ],
      sourceIds: ['one-earth-eco-37'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Subtropical, 10-32°C, with a hot season from January to the end of May and a cooler period June to December. Annual mean rainfall is about 709 mm, with showers year-round slightly heavier in January to April.',
        annualPrecipitationMm: { min: 709, max: 709 },
        temperatureC: { min: 10, max: 32 },
      },
      sourceIds: ['one-earth-eco-37'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'northern and western areas are barren desert with sparse grass, endemic Ascension spurge, and invasive prickly pear',
        'endemic ferns including Marattia purpurascens, Asplenium ascensionis, Xiphopteris ascensionense, Pteris adscensionis, and Anogramma ascensionis',
        'grass Sporobolus caespitosus, with introduced Mexican thorn bush threatening marine turtles',
      ],
      sourceIds: ['one-earth-eco-37'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'frigatebirds use thermal and wind patterns for efficient travel, and their non-waterproof plumage prevents diving, driving kleptoparasitic feeding from other seabirds',
        'green turtles nest from December to June with trans-Atlantic migrations of more than 2,300 km',
        'land crab breeding migrations from January to May entrained to the lunar cycle',
        'feral cat eradication in 2004 enabled frigatebird return to the main island, with rat populations subsequently increasing',
      ],
      sourceIds: ['one-earth-eco-37'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 99% with a protection level of 2. There are eight protected areas on Ascension, including Green Mountain National Park, several coastal nature reserves, and the Boatswain Bird Island sanctuary. Threats include rats preying on seabirds, turtles, and land crabs, invasive Mexican thorn, sea level rise, and land development, with priority actions focused on rat control at nesting beaches and monitoring green turtles, frigatebirds, and sooty terns.',
      sourceIds: ['one-earth-eco-37'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:ascension-frigatebird',
      'species:red-footed-booby',
      'species:brown-booby',
      'species:masked-booby',
      'species:sooty-tern',
      'species:green-sea-turtle',
      'species:hawksbill-sea-turtle',
      'species:ascension-land-crab',
    ],
    countryIds: ['SH'],
    sources: ['one-earth-eco-37'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:60',
    summary: {
      value:
        'Saint Helena Scrub and Woodlands covers the deeply eroded summit of a 14-million-year-old composite volcano in the mid-Atlantic, with coastal cliffs, steep-sided valleys, and the island\u2019s highest point at Diana\u2019s Peak. Although fewer than one percent of its native semi-natural forest remains, the island retains 45 endemic plant species and the Saint Helena plover, the sole surviving endemic bird among eight originally present.',
      sourceIds: ['one-earth-eco-60'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'St. Helena Island, 1,950 km west of the African coast, is the deeply eroded summit of a 14-million-year-old composite volcano covering 122 km\u00b2',
        'coastal cliffs of 300 m and steep-sided valleys, with Diana\u2019s Peak at 823 m',
        'striking volcanic formations including the Lot, Lot\u2019s Wife, and the Gates of Chaos',
      ],
      sourceIds: ['one-earth-eco-60'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Dry subtropical, 15-32°C, with an annual mean rainfall of only about 152 mm and scarce freshwater. Showers occur year-round, and the capital is Jamestown.',
        annualPrecipitationMm: { min: 152, max: 152 },
        temperatureC: { min: 15, max: 32 },
      },
      sourceIds: ['one-earth-eco-60'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        '431 higher plant species with 45 endemics, including the iconic St. Helena cabbage tree, redwood, dwarf ebony, and the ancient tree fern Dicksonia arborescens',
        'New Zealand flax planted over much of the island still covers its interior, with less than one percent retaining native semi-natural forest',
        'endemic plants at risk from invasive lantana, fleabane, wild mango, wild coffee, creeper, Bermudan cedar, blueweed, and Cape grass',
        '157 endemic beetles including the ground beetle Aplothorax burchelli',
      ],
      sourceIds: ['one-earth-eco-60'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'one of the first documented environmental disasters, with human-driven overexploitation over more than 450 years',
        'adaptive radiation in invertebrates, with 157 endemic beetle species',
        'flora that are relicts of a primitive African flora dating from about 10 million years ago',
      ],
      sourceIds: ['one-earth-eco-60'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 100% with a protection level of 4. An Endemic Section was established by the island government along with a few conservation areas. Threats include invasive species encroachment, airport construction on wirebird breeding habitat, an intended hotel and golf course on one of the world\u2019s top five wirebird breeding sites, water scarcity, and drought, with priority actions targeting invasive eradication, improved dock capacity to intercept foreign material, and protected areas for the plover.',
      sourceIds: ['one-earth-eco-60'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:st-helena-plover',
      'species:green-sea-turtle',
      'species:hawksbill-sea-turtle',
      'species:red-billed-tropicbird',
      'species:madeiran-storm-petrel',
      'species:fairy-tern',
    ],
    countryIds: ['SH'],
    sources: ['one-earth-eco-60'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:8',
    summary: {
      value:
        'East African Montane Forests forms a chain of isolated volcanic mountains flanking the Great Rift Valley in East Africa, from Mount Kinyeti through Mount Elgon, the Aberdare Range, and Mount Kenya to Mount Kilimanjaro. These moist broadleaf forests above roughly 1,500 metres harbour flagship megafauna including the black rhinoceros and bongo, alongside numerous strictly endemic birds, reptiles, shrews, and rodents.',
      sourceIds: ['one-earth-eco-8'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'chain of isolated volcanic mountains flanking the Great Rift Valley in East Africa',
        'extends from Mount Kinyeti in Sudan through Mount Elgon (Uganda), the Aberdare Range and Mount Kenya (Kenya) to Mount Kilimanjaro (Tanzania)',
        'elevations above about 1,500 m, their peaks separated into East African montane moorlands',
      ],
      sourceIds: ['one-earth-eco-8'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Temperate and seasonal, with night temperatures below 10°C in the cold season and daytime temperatures above 30°C in the warm season, with possible frosts at higher elevations. Rainfall is 1,200 to just under 3,000 mm per year, with wet seasons in October to December and March to June and a pronounced rainshadow on the eastern and southern faces.',
        annualPrecipitationMm: { min: 1200, max: 3000 },
        temperatureC: { min: 10, max: 32 },
      },
      sourceIds: ['one-earth-eco-8'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'submontane and montane forests of Ocotea usambarensis, Juniperus procera, Podocarpus falcatus, P. latifolius, Nuxia congesta, and Newtonia buchanii',
        'higher altitudes with bamboo (Arundinarium alpine) and Hagenia abyssinica',
        'bongo occurs in the Aberdare Mountains, the most eastern distribution of this rainforest species',
      ],
      sourceIds: ['one-earth-eco-8'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'pronounced rain shadow effects on the eastern and southern faces',
        'volcanic soil fertility and altitudinal zonation of vegetation',
        'cloud precipitation at high altitude and fire-maintained forest boundaries',
      ],
      sourceIds: ['one-earth-eco-8'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 36% with a protection level of 8. National parks include Mount Elgon (Uganda), Mount Kenya and Aberdare (Kenya), and Kilimanjaro and Arusha (Tanzania), with additional forest reserves. Threats include conversion to tea and coffee estates, conifer plantations, subsistence agriculture, population growth, fire, and elephant and rhino poaching, with priority actions targeting resource-use zones, demand reduction, and increased anti-poaching technology.',
      sourceIds: ['one-earth-eco-8'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:black-rhinoceros',
      'species:african-elephant',
      'species:bongo',
      'species:blue-monkey',
      'species:guereza-lowland-colobus',
      'species:common-leopard',
    ],
    countryIds: ['KE', 'SS', 'UG', 'TZ'],
    sources: ['one-earth-eco-8'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:12',
    summary: {
      value:
        'Ethiopian Montane Forests spans the rugged Ethiopian Highlands, from transitional forests at 500 to 1,500 metres to moist broadleaved forests at 1,800 to 3,000 metres, with the uniquely undisturbed Harenna Forest south of Bale Mountains National Park. The forests support flagship carnivores such as the African wild dog, lion, and leopard, as well as strictly endemic birds, bats, shrews, chameleons, and frogs.',
      sourceIds: ['one-earth-eco-12'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'rugged Ethiopian Highlands',
        'transitional forests from 500 to 1,500 m and moist broadleaved forests from 1,800 to 3,000 m',
        'Harenna Forest south of Bale Mountains National Park is a uniquely undisturbed habitat, with plugged volcanic domes and dykes',
      ],
      sourceIds: ['one-earth-eco-12'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Mean maxima of 18-24°C and mean minima of 12-15°C. Transitional forests receive rainfall of about 2,000 mm per year, while higher elevations receive less than 1,700 mm, with humidity higher than expected due to cloud precipitation.',
        annualPrecipitationMm: { min: 1700, max: 2000 },
        temperatureC: { min: 12, max: 24 },
      },
      sourceIds: ['one-earth-eco-12'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lower levels with Warburgia ugandensis, Croton macrostachyus, and Syzygium guineense',
        'higher elevations dominated by Aningeria and Olea',
        'wild Coffea arabica is the dominant understory shrub in Harenna Forest and is still harvested, alongside the endemic Maytenus harenensis',
      ],
      sourceIds: ['one-earth-eco-12'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Pliocene-Pleistocene climatic fluctuations, with glaciers forming on Ethiopian peaks during ice ages',
        'church compounds preserve remnant ancient trees as evidence of a former extensive forest',
        'wild coffee harvesting is a centuries-old practice',
      ],
      sourceIds: ['one-earth-eco-12'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 50% with a protection level of 2. Key sites include Bale Mountains National Park and several National Forest Priority Areas, many offering little actual protection, with the Harenna Forest now threatened by migrant influx. Threats include agriculture, fuelwood and timber extraction, soil erosion, overgrazing, and poor agricultural methods, with priority actions strengthening community-based conservation and enforcement in Bale Mountains National Park and Harenna Forest.',
      sourceIds: ['one-earth-eco-12'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:african-wild-dog',
      'species:lion',
      'species:common-leopard',
      'species:ethiopian-wolf',
      'species:swaynes-hartebeest',
      'species:blue-monkey',
    ],
    countryIds: ['ET'],
    sources: ['one-earth-eco-12'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:50',
    summary: {
      value:
        'Masai Xeric Grasslands and Shrublands covers northern Kenya and the extreme southwest of Ethiopia, a dry semi-desert that includes the highly arid Dida-Galgalu Desert and the shores of Lake Turkana, the world\u2019s largest permanent desert lake. Highly erratic rainfall of 200 to 400 millimetres a year sustains drought-tolerant grasslands, dwarf shrublands, and a striking assemblage of plains grazers, large predators, and endemic birds and reptiles.',
      sourceIds: ['one-earth-eco-50'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'northern Kenya and the extreme southwest of Ethiopia',
        'dry semi-desert including the highly arid Dida-Galgalu black lava desert and the shores of Lake Turkana, the world\u2019s largest permanent desert lake',
        'gently undulating terrain from 200 to 700 m with scattered inselbergs and volcanic cones up to 1,700 m, plus the Omo River Delta',
      ],
      sourceIds: ['one-earth-eco-50'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Hot and dry most of the year, with a mean maximum of about 30°C and mean minimums of 18-21°C. A short wet season runs from March to June as the ITCZ moves north, and rainfall is highly erratic at 200-400 mm per year, making this one of Kenya\u2019s driest regions.',
        annualPrecipitationMm: { min: 200, max: 400 },
        temperatureC: { min: 18, max: 30 },
      },
      sourceIds: ['one-earth-eco-50'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'semi-desert annual grasslands in high-rainfall years, with Aristida adscensionis and A. mutabilis dominant and absent during droughts',
        'dwarf shrublands including Duosperma eremophilum on heavier soils and Indigofera spinosa on dunes',
        'Lake Turkana shore rocky and sandy with little aquatic vegetation, with yellow spear grass and doum palms around the lake',
      ],
      sourceIds: ['one-earth-eco-50'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'phytoplankton blooms giving Lake Turkana its jade color',
        'ITCZ-driven seasonal patterns',
        'desertification driven by overgrazing, with black rhino exterminated through over-hunting',
      ],
      sourceIds: ['one-earth-eco-50'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 22% with a protection level of 3. Protected areas include Sibiloi National Park, Mount Kulal Biosphere Reserve, and several community conservancies in Kenya, plus Loelle National Park in South Sudan and controlled hunting areas in Ethiopia. Threats include rapid human and livestock population increases, overgrazing, soil erosion, desertification, and ethnic conflict over resources, with priority actions promoting alternatives to animal consumption and community grazing areas.',
      sourceIds: ['one-earth-eco-50'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:reticulated-giraffe',
      'species:beisa-oryx',
      'species:grants-gazelle',
      'species:topi',
      'species:plains-zebra',
      'species:lion',
      'species:cheetah',
      'species:nile-crocodile',
    ],
    countryIds: ['ET', 'KE', 'SS'],
    sources: ['one-earth-eco-50'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:51',
    summary: {
      value:
        'Northern Acacia-Commiphora Bushlands and Thickets is the largest ecoregion of the Horn of Africa bioregion, stretching from southeastern Sudan through northeastern Uganda and much of lowland Kenya to the coast. Part of the Somali-Masai centre of endemism, its highly flammable bushland supports flagship threatened mammals including Grevy\u2019s zebra, reticulated giraffe, beisa oryx, and the pancake tortoise.',
      sourceIds: ['one-earth-eco-51'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the southeast corner of Sudan through northeastern Uganda and much of lowland Kenya to the coast',
        'the largest ecoregion in the AT21 bioregion by area',
        'part of the Somali-Masai regional centre of endemism',
      ],
      sourceIds: ['one-earth-eco-51'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Seasonal tropics controlled by the ITCZ, with mean maximums of about 30°C in the lowlands and about 24°C at higher elevations, and mean minimums of 18-21°C. Rainfall ranges from 200 mm near Lake Turkana to about 600 mm near the coast, with long rains from March to June and short rains from October to December, though rain seasons frequently fail.',
        annualPrecipitationMm: { min: 200, max: 600 },
        temperatureC: { min: 18, max: 30 },
      },
      sourceIds: ['one-earth-eco-51'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'predominantly Acacia-Commiphora bushland and thicket',
        'common genera include Acacia, Commiphora, Boswellia, Aristida, Stipa, and Chloris grasses',
        'highly flammable during dry periods, with large areas burning annually',
        'part of the Somali-Masai regional centre of endemism for plants',
      ],
      sourceIds: ['one-earth-eco-51'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'annual fire cycles and charcoal production shaping bushland structure',
        'upstream water extraction from the Ewaso Nyiro River affecting wildlife',
        'elephant population crash in Tsavo during the 1975-1980 drought and poaching',
      ],
      sourceIds: ['one-earth-eco-51'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 20% with a protection level of 9. Protected areas include South Turkana and Samburu National Reserves, Meru, Kora, Amboseli, Chyulu Hills, and the Tsavo East and West National Parks in Kenya, the Lake Natron Game Controlled Area and Mkomazi National Park in Tanzania, and reserves in Uganda. Threats include unsustainable water use, grassland burning, farmland expansion, ivory and rhino horn poaching, charcoal production, and over-harvesting of African blackwood, with priorities enforcing ivory markets and low-cost water management.',
      sourceIds: ['one-earth-eco-51'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:grevys-zebra',
      'species:reticulated-giraffe',
      'species:beisa-oryx',
      'species:gerenuk',
      'species:lesser-kudu',
      'species:black-rhinoceros',
      'species:african-elephant',
      'species:pancake-tortoise',
    ],
    countryIds: ['KE', 'SS', 'UG', 'TZ'],
    sources: ['one-earth-eco-51'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:55',
    summary: {
      value:
        'Somali Acacia-Commiphora Bushlands and Thickets covers much of the Horn of Africa east of the Ethiopian Highlands, including the Ogaden Desert and northeastern Kenyan semi-deserts, with only three permanent rivers. This arid landscape supports a remarkable concentration of endemic and threatened ungulates, including Hirola, dibatag, beira, Speke\u2019s gazelle, and the Critically Endangered Somali wild ass.',
      sourceIds: ['one-earth-eco-55'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the majority of the Horn of Africa east of the Ethiopian Highlands, including the Ogaden Desert and northeastern Kenyan semi-deserts',
        'mainly flat and low-lying, with more than fifty percent below 500 m and rising to the west and north',
        'deep infertile sands in the Somali hinterland with Precambrian granite inselbergs, and only three permanent rivers: the Awash, Wabi Shebele, and Jubba',
      ],
      sourceIds: ['one-earth-eco-55'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Mean maximum temperatures of about 30°C with mean minimums of 15-18°C. Rainfall ranges from under 100 mm in the Ogaden Desert to about 600 mm near the Ethiopian Highlands, making the region very arid.',
        annualPrecipitationMm: { min: 100, max: 600 },
        temperatureC: { min: 15, max: 30 },
      },
      sourceIds: ['one-earth-eco-55'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dry woodlands and scrub grading to grasslands and deserts',
        'about 2,500 plant species, roughly half of them endemic',
        'iconic plants include the frankincense tree Boswellia rivae, the myrrh source Commiphora guidottii, Steganotaenia commiphoroides, and the flask-shaped Hildegardia gillettii, with sub-centres of endemism on exposed limestone',
        'the yeheb nut Cordeauxia edulis is declining from overgrazing',
      ],
      sourceIds: ['one-earth-eco-55'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'aromatic resin production of myrrh and frankincense',
        'charcoal-driven deforestation in northern Somalia',
        'riverine vegetation degradation and natural gas development near the Ethiopian-Somali border',
      ],
      sourceIds: ['one-earth-eco-55'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 17% with a protection level of 7. Protected areas include Nechisar National Park, Babile Elephant Sanctuary, and Yabello Sanctuary in Ethiopia and Malka Mari National Park in Kenya, with no protected areas in Somalia. Threats include overgrazing, settlement encroachment, invasive species, weak enforcement, charcoal production, riverine degradation, poaching, political instability, and irrigated farming, with priorities strengthening enforcement against charcoal deforestation and enhancing community participation.',
      sourceIds: ['one-earth-eco-55'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:swaynes-hartebeest',
      'species:hirola',
      'species:dibatag',
      'species:beira',
      'species:spekes-gazelle',
      'species:somali-wild-ass',
      'species:striped-hyena',
      'species:common-leopard',
    ],
    countryIds: ['ET', 'SO', 'KE'],
    sources: ['one-earth-eco-55'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:78',
    summary: {
      value:
        'East African Montane Moorlands crowns the peaks of the great equatorial volcanoes, including Kilimanjaro, Mount Kenya, the Aberdares, Mount Meru, and the ancient Mount Elgon, above the montane forest limit at about 3,000 metres. These harsh, frost-prone Afroalpine moorlands are floristically low in diversity but high in endemism, with scattered giant groundsels and lobelias and an island-like fauna of endemic frogs, reptiles, and birds.',
      sourceIds: ['one-earth-eco-78'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'peaks of large volcanoes near the equator, including Kilimanjaro, Mount Kenya, the Aberdares, Mount Meru, and the ancient Mount Elgon',
        'lower limit of about 3,000 m where the ecoregion transitions from the East African Montane Forests',
        'organized around volcanic mountains that are all geologically recent',
      ],
      sourceIds: ['one-earth-eco-78'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Severe and extreme, described as summer every day and winter every night, with mean rainfall of only about 150 mm per year above 4,350 m on Kilimanjaro and a mean annual temperature of -1°C at 5,000 m. Nocturnal frosts occur above 4,000 m daily, with two rainfall peaks in April and November to December, and glaciers and snowfields are retreating on Kilimanjaro and Mount Kenya.',
      },
      sourceIds: ['one-earth-eco-78'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'montane moorland above the tree line with glaciers and rocks at the highest elevations',
        'Dendrosenecios scattered through grasslands from 3,500 to 5,000 m, with tussock grasslands in fire-prone areas and Helichrysum scrub on dry and rocky sites',
        'giant lobelia Lobelia rhynchopetalum reaching 6 m when flowering, plus acidic mires at lower altitudes',
        'Afroalpine vegetation of low diversity but high endemism, with 2 endemics on Meru, 6 on Kilimanjaro, and 16 on Elgon',
      ],
      sourceIds: ['one-earth-eco-78'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'gigantism in plants such as Dendrosenecio and Lobelia as an adaptation to extreme cold and diurnal temperature swings',
        'glacial retreat, with the Kilimanjaro ice cap predicted to disappear for the first time in 11,000 years',
        'fire-maintained vegetation boundaries depressing the upper forest limit',
      ],
      sourceIds: ['one-earth-eco-78'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 99% with a protection level of 9. Protected areas include Mount Kenya, Aberdare, Arusha, Kilimanjaro, and Mount Elgon National Parks and the Chepkitale National Reserve, and the ecoregion lies mainly within parks because it is too high-altitude for farming. Hotspots for a threatened species include tourism-related litter, erosion, and woody vegetation cutting, with priority actions promoting community ecotourism, wildfire management, and pollution management.',
      sourceIds: ['one-earth-eco-78'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:hunter-cisticola',
      'species:jackson-francolin',
      'species:kenya-river-frog',
      'species:african-elephant',
      'species:african-buffalo',
      'species:common-leopard',
    ],
    countryIds: ['KE', 'TZ', 'UG'],
    sources: ['one-earth-eco-78'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:79',
    summary: {
      value:
        'Ethiopian Montane Grasslands and Woodlands covers most of the south and central Ethiopian Highlands between 1,800 and 3,000 metres, split into northern and southern massifs by the Great Rift Valley. Despite the loss of nearly all of its original highland forest, the region still harbours flagship endemics including the walia ibex, mountain nyala, and gelada, along with strictly endemic birds and amphibians.',
      sourceIds: ['one-earth-eco-79'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the majority of the south and central Ethiopian Highlands, from 1,800 to 3,000 m',
        'two main massifs, northern and southern, split by the Rift Valley about 13 million years ago and rising in the Eocene about 55 million years ago',
        'a cloud forest belt from 2,000 to 2,500 m in the south',
      ],
      sourceIds: ['one-earth-eco-79'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'ITCZ-controlled, with warm moist air from the Indian Ocean from May to October bringing rain to the southern slopes and drier Red Sea winds for the remainder of the year mainly on the northern side. The highest rainfall of about 2,500 mm falls on the southwestern faces, with most areas receiving about 1,600 mm.',
        annualPrecipitationMm: { min: 1600, max: 2500 },
      },
      sourceIds: ['one-earth-eco-79'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'a natural mixture of closed forest where rainfall is high, with grassland, bushland, and thicket elsewhere',
        'cloud forest at 2,000 to 2,500 m with Podocarpus falcatus, Juniperus procera, and Olea africana',
        'Hagenia and Schefflera on the Harenna Forest upper slopes with giant lobelias',
        'only about one percent of the original Ethiopian highland forest remains, with surviving patches in church graveyards and on rocky and steep areas',
      ],
      sourceIds: ['one-earth-eco-79'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'high-altitude agriculture practiced for hundreds of years',
        'church graveyards acting as refugia for ancient forest',
        'hybridization threatening the walia ibex through free-ranging domestic goats',
        'ITCZ seasonal moisture dynamics',
      ],
      sourceIds: ['one-earth-eco-79'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 17% with a protection level of 5. Protected areas include Bale Mountains and Simien Mountains National Parks, several National Forest Priority Areas, and the Arsi and Maze controlled hunting areas. Threats include agricultural encroachment, livestock overgrazing, settlement expansion, walia ibex hybridization with domestic goats, and logging of Podocarpus and Juniperus, with priority actions identifying protected area gaps and supporting community conservation to maintain walia ibex numbers.',
      sourceIds: ['one-earth-eco-79'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:walia-ibex',
      'species:mountain-nyala',
      'species:gelada',
      'species:bushbuck',
      'species:common-leopard',
    ],
    countryIds: ['ET', 'ER', 'SD'],
    sources: ['one-earth-eco-79'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:80',
    summary: {
      value:
        'Ethiopian Montane Moorlands occupies the highest parts of the Ethiopian Highlands, from 3,000 to over 4,500 metres, a naturally fragmented Afroalpine realm that was covered by thick glaciers during the last ice age. Year-round frosts and strong winds shape a xeromorphic vegetation of giant lobelias, tree heathers, and cushion plants, and the ecoregion is the stronghold of the Ethiopian wolf, the world\u2019s rarest canid.',
      sourceIds: ['one-earth-eco-80'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the higher parts of the Ethiopian Highlands, from 3,000 to over 4,500 m',
        'naturally fragmented, occurring only on the highest portions of the highlands',
        'thick glaciers covered the ecoregion during the last glaciation, with ice melting about 10,000 years ago and peak ice persisting until a few thousand years ago',
      ],
      sourceIds: ['one-earth-eco-80'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Mean maximum temperatures of 6-12°C on the higher peaks with mean minimums below 0°C, and frosts common year-round especially in winter. Rainfall is highest in the southwest where the dry season can last only two months, but can be as little as 1,000 mm in the north where the dry season extends up to ten months.',
        annualPrecipitationMm: { min: 1000, max: 2500 },
        temperatureC: { min: 0, max: 12 },
      },
      sourceIds: ['one-earth-eco-80'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'trees absent at the highest elevations, with bushes and shrubs including Hypericum revolutum',
        'heathland scrub of Erica trimera and Erica arborea, with bare soil between shrubs holding Helichrysum, Alchemilla, Cerastium, Koeleria, and Aira',
        'giant Lobelia rynchopetalum reaching 6 m when flowering',
        'all plants show xeromorphic characteristics such as thick leathery leaves and reduced leaf surface area',
      ],
      sourceIds: ['one-earth-eco-80'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'post-glacial vegetation migration to higher altitudes',
        'plant gigantism, including giant lobelias, tree heather, and giant St. John\u2019s wort, as an altitude adaptation',
        'perennial plants evolved dry paper-like flowers to withstand harsh winds',
        'Ethiopian wolf disease dynamics, with canine distemper and rabies from domestic dogs as the primary cause of decline',
      ],
      sourceIds: ['one-earth-eco-80'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 52% with a protection level of 7. Protected areas include Bale Mountains and Simien Mountains National Parks and the Arsi Controlled Hunting Area. Threats include high-altitude agriculture expansion, heather fires, livestock overgrazing, and Ethiopian wolf persecution, hybridization, and disease, with delicate Afroalpine vegetation not resilient to fire, and priority actions focusing on long-term disease management for the Ethiopian wolf and community-based conservation.',
      sourceIds: ['one-earth-eco-80'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:ethiopian-wolf',
      'species:walia-ibex',
      'species:mountain-nyala',
      'species:gelada',
      'species:wattled-crane',
      'species:african-elephant',
    ],
    countryIds: ['ET'],
    sources: ['one-earth-eco-80'],
    status: 'authored',
  },
];
