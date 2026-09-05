import type { EcologicalEnrichment } from './ecological-enrichment';

export const bioregionEnrichment: readonly EcologicalEnrichment[] = [
  {
    targetId: 'bioregion:na1',
    summary: {
      value:
        'Greenland (NA1) combines the world’s largest island, its immense ice sheet, ice-free coastal tundra, seasonal sea ice, and adjacent marine areas. The bioregion contains two ecoregions whose climatic and vegetational differences broadly follow latitude, exposure, and distance from the ice cap.',
      sourceIds: ['one-earth-greenland', 'one-earth-eco-417', 'one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Greenland Ice Sheet',
        'granite and gneiss fjords',
        'rolling northern uplands',
        'coastal islands',
        'Nares Strait and adjacent Arctic seas',
      ],
      sourceIds: ['one-earth-greenland', 'one-earth-eco-417', 'one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Low-Arctic to polar-desert climates, becoming colder and generally drier toward northern and interior areas.',
      },
      sourceIds: ['one-earth-eco-417', 'one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Arctic steppe',
        'dwarf-shrub heath',
        'coastal meadow',
        'fellfield',
        'moss and lichen communities',
      ],
      sourceIds: ['one-earth-eco-417', 'one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'glacial retreat and advance',
        'coastal and inland moisture gradients',
        'seasonal snow and sea-ice cycles',
        'herbivore effects on tundra vegetation',
      ],
      sourceIds: ['one-earth-eco-417', 'one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 48% and protection level 10. Protection is extensive in the high Arctic, while southern vegetation types and climate-sensitive biological communities remain important conservation concerns.',
      sourceIds: ['one-earth-greenland', 'one-earth-eco-417', 'one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:musk-ox',
      'species:arctic-fox',
      'species:reindeer',
      'species:northern-collared-lemming',
      'species:white-tailed-eagle',
    ],
    countryIds: ['GL'],
    sources: ['one-earth-greenland', 'one-earth-eco-417', 'one-earth-eco-418'],
    status: 'authored',
  },
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
  {
    targetId: 'bioregion:im6',
    summary: {
      value:
        'North Indian Tropical Forests & Sundarbans is the eastern section of the Indian Subcontinent subrealm in Indomalaya. Its six ecoregions span the Brahmaputra Valley semi-evergreen forests and the khasi-garo Meghalaya hills, the dense Gangetic plains, and the vast Sundarbans delta, together covering roughly 65 million hectares.',
      sourceIds: ['one-earth-im6'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Brahmaputra River valley alluvium',
        'Khasi and Garo hills rising to about 1,800 m',
        'gently rolling Gangetic floodplain',
        'vast Ganges-Brahmaputra delta',
        'Sundarbans mangrove islands',
      ],
      sourceIds: ['one-earth-im6', 'one-earth-eco-222', 'one-earth-eco-244', 'one-earth-eco-323'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical and monsoonal, with the southwest monsoon delivering heavy seasonal rain, frequent Bay of Bengal cyclones, and a gradient from the wetter east to drier west.',
      },
      sourceIds: ['one-earth-eco-238', 'one-earth-eco-287'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'semi-evergreen and moist deciduous forest',
        'Sal-dominated Gangetic forest',
        'subtropical cloud forest of the Meghalaya hills',
        'freshwater swamp forest',
        'Sundarbans mangrove forest of Heritiera, Avicennia, and Rhizophora',
      ],
      sourceIds: [
        'one-earth-im6',
        'one-earth-eco-222',
        'one-earth-eco-244',
        'one-earth-eco-287',
        'one-earth-eco-323',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'monsoon flooding that enriches the floodplain',
        'riparian disturbance and forest succession',
        'ancient confluence zone for Indo-Malayan and Palearctic species',
        'tidal and salinity dynamics shaping the delta',
      ],
      sourceIds: ['one-earth-eco-222', 'one-earth-eco-238', 'one-earth-eco-323'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 7% and protection level 4 for the bioregion. The productive Gangetic plains, Meghalaya hills, and Sundarbans delta all face intense human pressure, with habitat conversion, poaching, industrial river diversion, and climate-driven salinity change among the leading threats.',
      sourceIds: ['one-earth-im6'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:gharial',
      'species:tiger',
      'species:swamp-deer',
      'species:fishing-cat',
      'species:sundri',
    ],
    countryIds: ['IN', 'BD', 'BT'],
    sources: ['one-earth-im6', 'one-earth-eco-222', 'one-earth-eco-244', 'one-earth-eco-287', 'one-earth-eco-323'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im1',
    summary: {
      value:
        'Central Indian Ocean Islands sits within the Indian Subcontinent subrealm of Indomalaya and holds a single ecoregion spanning the Maldives, Lakshadweep, and Chagos island groups along the Chagos-Laccadive Plateau. Together they form the most extensive coral reef and atoll system in the Indian Ocean, providing critical habitat for seabirds and marine turtles.',
      sourceIds: ['one-earth-im1'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'three volcanic island groups along the Chagos-Laccadive Plateau',
        'most extensive coral reef and atoll system in the Indian Ocean',
        'Lakshadweep with 36 small islands scattered over 78,000 km2 of sea',
        '1,190 Maldive islands totaling 298 km2 of land mass',
        'Chagos archipelago of 50 islands with about 60 km2 of land',
        'approximately 55 thousand hectares of land area in total',
      ],
      sourceIds: ['one-earth-im1', 'one-earth-eco-243'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Monsoon tropical, with a southwest monsoon from April to October bringing about 1,600 mm of rain in the drier northern Lakshadweep and over 3,800 mm in the southern Maldives, while temperatures vary little between 24 and 30 degrees Celsius.',
      },
      sourceIds: ['one-earth-eco-243'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'tropical forest and shrub of hardy salt- and drought-resistant bushes',
        'beach cabbage Scaevola sericea and the smaller Pemphis acidula lining the beaches',
        'inland communities of Cordia subcordata, Hibiscus tiliaceus, and Premna obtusifolia',
        'occasional taller Hernandia nymphaeifolia and Terminalia catappa trees',
        'mangrove forests of Bruguiera along the coastal areas',
      ],
      sourceIds: ['one-earth-im1', 'one-earth-eco-243'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'coral reef and atoll formation along a submarine volcanic plateau',
        'important seabird rookeries and turtle nesting areas',
        'coconut crabs recycling biomass on land',
        'vulnerability of low-lying islands to sea level rise and storm surges',
      ],
      sourceIds: ['one-earth-im1', 'one-earth-eco-243'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 33% with a protection level of 4. The primary threat to these low-lying islands is climate change and consequent sea level rise, while native vegetation is cleared for tourism and solid waste degrades the marine and terrestrial environments. Priorities include protecting seabird rookeries and turtle nesting beaches, safeguarding coastal vegetation buffers, and implementing solid waste disposal systems.',
      sourceIds: ['one-earth-im1'],
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
    sources: ['one-earth-im1', 'one-earth-eco-243'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im2',
    summary: {
      value:
        'The Indian Tropical Coastal Forests bioregion covers the narrow, monsoon-swept forest belt of western India from Mumbai to the southern tip, the steep Western Ghats above it, and the isolated wet forests of Sri Lanka. Its seven ecoregions hold some of the most species-rich and endemic-rich rainforest in South Asia.',
      sourceIds: ['one-earth-im2', 'one-earth-eco-271', 'one-earth-eco-274'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'narrow lowland forest belt along the western coast of India',
        'steep, faulted Western Ghats escarpment rising more than 1,000 m',
        'coastal plains stretching roughly 1,400 km from Mumbai to the southern tip',
        'wet zone of southwestern Sri Lanka separated since the late Miocene',
        'Gondwana origins dating back over 150 million years',
      ],
      sourceIds: ['one-earth-im2', 'one-earth-eco-242', 'one-earth-eco-274'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical coastal monsoon in which the Western Ghats intercept the southwest monsoon and force moisture-laden winds upward, delivering over 2,500 mm of rain annually to the windward slopes and, in the most dissected terrain, more than 8,000 mm.',
      },
      sourceIds: ['one-earth-eco-253', 'one-earth-eco-254', 'one-earth-eco-271'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'evergreen and moist deciduous lowland forest of Tetrameles, Pterocarpus, and wild mango',
        'multi-storied montane rainforest with heavily buttressed 45 m trees',
        'Cullenia-dominated and Dipterocarpus-rich rainforests',
        'shola forests of stunted Syzygium and Rhododendron amid montane grasslands',
        'Myristica swamps and lowland rainforest of southwestern Sri Lanka',
      ],
      sourceIds: ['one-earth-im2', 'one-earth-eco-242', 'one-earth-eco-271', 'one-earth-eco-274'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'orographic rainfall driven by monsoon interception at the Ghats',
        'long isolation of Sri Lankan rainforests since the late Miocene',
        'hotspots of endemism in the complex, dissected mountain terrain',
        'frugivorous birds spreading seeds and shaping forest structure',
      ],
      sourceIds: ['one-earth-eco-254', 'one-earth-eco-274'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports protection goals from 9% in the North Western Ghats moist forests to 95% for the Sri Lankan montane forests, with low protection levels of 1 to 6. Much of the coastal belt has been cleared through millennia of trade and later plantations, while montane forests remain fragmented by tea, coffee, rubber, and cardamom cultivation. Priorities include landscape-scale connectivity, restoration of corridors and sacred groves, and conservation of endemic frogs and forest birds.',
      sourceIds: ['one-earth-im2', 'one-earth-eco-254', 'one-earth-eco-275'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:lion-tailed-macaque',
      'species:purple-frog',
      'species:nilgiri-tahr',
      'species:sri-lankan-leopard',
      'species:leaf-nosed-lizard',
    ],
    countryIds: ['IN', 'LK'],
    sources: ['one-earth-im2', 'one-earth-eco-242', 'one-earth-eco-253', 'one-earth-eco-271', 'one-earth-eco-274', 'one-earth-eco-275'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im3',
    summary: {
      value:
        'The Indian Dry Deciduous Forests bioregion covers about 56 million hectares of teak and sal woodlands across the central Indian peninsula, from the Chhota-Nagpur Plateau in the east to the Kathiawar-Gir peninsula in the west. Its four ecoregions, together with the Indus River delta mangroves, support the last remaining wild population of the Asiatic lion.',
      sourceIds: ['one-earth-im3', 'one-earth-eco-295'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Chhota-Nagpur Plateau of ancient Precambrian rocks',
        'Amarkantak highlands where the Vindhya and Satpura ranges converge',
        'Narmada rift valley lying in a fault zone between the two ranges',
        'Kathiawar-Gir peninsula in northwestern Gujarat',
        'Indus River Delta and the Gulfs of Kutch and Khambhat shoreline',
      ],
      sourceIds: ['one-earth-im3', 'one-earth-eco-292', 'one-earth-eco-295', 'one-earth-eco-296'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Seasonal tropical with a pronounced dry season of seven to eight months, a southwest monsoon from June to September bringing roughly 550 to 1,500 mm of rain depending on location, and summer temperatures that can exceed 45 degrees Celsius.',
      },
      sourceIds: ['one-earth-eco-295', 'one-earth-eco-296'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'dry deciduous forests of sal Shorea robusta with Anogeissus, Terminalia, and Lagerstroemia',
        'teak-dominated forest with Aegle, Boswellia, Diospyros, Bombax, and Terminalia',
        'almost pure stands of Anogeissus pendula in the drier areas',
        'hardy xerophytic trees and scrub on rocky hillocks',
        'grey mangrove Avicennia marina dominating the delta and gulf shores',
      ],
      sourceIds: ['one-earth-im3', 'one-earth-eco-292', 'one-earth-eco-295', 'one-earth-eco-320'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'the plateau acting as a montane bridge between the Satpura Hills and the Himalaya',
        'a transition zone between Afrotropical and South Indian floras',
        'dry-season deciduousness shaped by the monsoon rhythm',
        'Gir forests supporting the only surviving population of Asiatic lions',
      ],
      sourceIds: ['one-earth-eco-292', 'one-earth-eco-295'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of about 5% for the bioregion, with a protection level of 10. Extensive clearing has left the forests fragmented, while lion numbers in Gir have grown beyond the reserve carrying capacity and the Narmada dam complex has inundated large blocks of wildlife habitat. Priorities include maintaining protected-area connectivity, easing human-wildlife conflict, and controlling poaching.',
      sourceIds: ['one-earth-im3', 'one-earth-eco-296'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:asiatic-lion',
      'species:sloth-bear',
      'species:blackbuck',
      'species:indian-wolf',
      'species:four-horned-antelope',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-im3', 'one-earth-eco-292', 'one-earth-eco-295', 'one-earth-eco-296', 'one-earth-eco-320'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im4',
    summary: {
      value:
        'The North Indomalayan Deserts and Scrub Forest bioregion spans roughly 78 million hectares of arid land across northwestern India and Pakistan, from the Rann of Kutch salt flats to the Thar Desert. Its five ecoregions shelter the only remaining Indian wild asses and some of the world\u2019s most densely populated, yet ecologically intact, arid wilderness.',
      sourceIds: ['one-earth-im4', 'one-earth-eco-312'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Great and Little Ranns of Kutch salt flats in Gujarat',
        'the Thar Desert lying west of the Aravalli Mountains',
        'Indus Valley desert flanked by the Suleiman Range and the Chenab River',
        'ancient Aravalli mountains formed over 1,500 million years ago',
        'sand dunes, craggy rock formations, and compacted salt-lake bottoms',
      ],
      sourceIds: ['one-earth-im4', 'one-earth-eco-312', 'one-earth-eco-314', 'one-earth-eco-317', 'one-earth-eco-318'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Hot arid climate with scant, erratic rainfall of 100 to 800 mm a year, summer temperatures soaring over 50 degrees Celsius, near-freezing winter nights, and very high evaporation.',
      },
      sourceIds: ['one-earth-eco-317', 'one-earth-eco-318'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'thorn scrub of low Acacia rarely exceeding 6 m in height',
        'xerophytic shrubland of Euphorbia, Prosopis, Tamarix, and Salvadora',
        'halophytic sedges of Cyperus and Scirpus and Suaeda on the salt flats',
        'sparse waxy-leaved trees and tufted grasses of the desert',
        'mangrove grass and seablight around the tidal wetlands',
      ],
      sourceIds: ['one-earth-im4', 'one-earth-eco-312', 'one-earth-eco-314', 'one-earth-eco-318'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'seasonal flooding of the Ranns to a depth of half a meter in the wet season',
        'high evaporation concentrating salts in wetland soils',
        'desert cats, caracal, and Indian wolf adapted to arid extremes',
        'the region serving as flyway staging grounds for Siberian migrants',
      ],
      sourceIds: ['one-earth-eco-312', 'one-earth-eco-314', 'one-earth-eco-318'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined protection target of about 13% with a protection level of 10. Overall coverage of the thorn scrub is low, yet the Rann of Kutch refuge protects the endangered Indian wild ass while cultural reverence among groups such as the Bishnoi has spared wildlife from hunting. Priorities include expanding small reserves, controlling grazing pressure, and securing habitat for the great Indian bustard and caracal.',
      sourceIds: ['one-earth-im4', 'one-earth-eco-312', 'one-earth-eco-314', 'one-earth-eco-318'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:caracal',
      'species:indian-wild-ass',
      'species:indian-desert-cat',
      'species:blackbuck',
      'species:red-necked-falcon',
    ],
    countryIds: ['IN', 'PK'],
    sources: ['one-earth-im4', 'one-earth-eco-312', 'one-earth-eco-314', 'one-earth-eco-317', 'one-earth-eco-318'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im7',
    summary: {
      value:
        'The Northern Deccan and Odisha Tropical Forests bioregion covers roughly 43 million hectares of moist and semi-evergreen forest across east-central India, from the Eastern Ghats rain shadow to the forests of Odisha. Its four ecoregions retain large, connected blocks of habitat that make it a stronghold for tiger and gaur conservation.',
      sourceIds: ['one-earth-im7', 'one-earth-eco-228'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'east-central Indian plateau and Eastern Ghats foothills',
        'large forest blocks exceeding 5,000 km2',
        'the Mahanadi and upper Godavari river lowlands',
        'Chilka Lake and the seasonally flooded coastal plain',
        'mangrove estuaries of the Godavari and Krishna rivers',
      ],
      sourceIds: ['one-earth-im7', 'one-earth-eco-228', 'one-earth-eco-261', 'one-earth-eco-316'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical monsoonal, with about 1,000 mm of annual rainfall from the Bay of Bengal monsoon, milder coastal conditions moderated by elevation and proximity to the ocean, and a long hot dry season between the rains.',
      },
      sourceIds: ['one-earth-eco-228', 'one-earth-eco-261'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'moist deciduous forests of Shorea, Terminalia, Adina, Syzygium, and Toona',
        'semi-evergreen sal forests with Artocarpus, Michelia, Bridelia, and Ficus',
        'dry deciduous woodlands of Shorea, Buchanania, Cleistanthus, and Croton',
        'teak replacing sal in some drier tracts',
        'mangrove forests of Avicennia, Rhizophora, and Bruguiera on the estuaries',
      ],
      sourceIds: ['one-earth-im7', 'one-earth-eco-228', 'one-earth-eco-261', 'one-earth-eco-297', 'one-earth-eco-316'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'large unfragmented blocks sheltering a remarkable assemblage of 10 ungulate species',
        'the Eastern Ghats rain shadow producing drier conditions inland',
        'coastal mangroves acting as the first line of defense against cyclones',
        'Chilka Lake drawing about two million migratory waterfowl each winter',
      ],
      sourceIds: ['one-earth-eco-228', 'one-earth-eco-261', 'one-earth-eco-316'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of about 6% for the bioregion, with a protection level of 8. About three-quarters of the natural forest has been cleared, but remaining blocks exceeding 5,000 km2 include Simlipal, Kawal, Indravati, and Kanha National Parks. Quarrying, coal mining, agriculture, and dams pose continuing threats, while the mangrove forests remain poorly protected.',
      sourceIds: ['one-earth-im7', 'one-earth-eco-228', 'one-earth-eco-316'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:gaur',
      'species:four-horned-antelope',
      'species:indian-mouse-deer',
      'species:green-avadavat',
      'species:water-monitor-lizard',
      'species:tiger',
    ],
    countryIds: ['IN'],
    sources: ['one-earth-im7', 'one-earth-eco-228', 'one-earth-eco-261', 'one-earth-eco-297', 'one-earth-eco-316'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im8',
    summary: {
      value:
        'The Greater Deccan-Sri Lankan Forests and Drylands bioregion spans about 74 million hectares across the heart of the Indian peninsula and the dry zone of northern Sri Lanka. Its six ecoregions contain some of the largest remaining habitat for Asian elephants, tigers, and the endemic Jerdon\u2019s courser.',
      sourceIds: ['one-earth-im8', 'one-earth-eco-290', 'one-earth-eco-315'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the central Deccan Plateau underlying most of peninsular India',
        'rain-shadow plains east of the Western Ghats',
        'narrow coast-hugging dry evergreen strip of southeastern India',
        'dry zone of northern Sri Lanka',
        'Godavari and Krishna river estuaries with coastal mangrove patches',
      ],
      sourceIds: ['one-earth-im8', 'one-earth-eco-290', 'one-earth-eco-293', 'one-earth-eco-298', 'one-earth-eco-301'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Seasonal tropical and largely semi-arid, with 800 to 1,500 mm of rain falling mostly with the monsoon, scorching summer temperatures above 40 degrees Celsius, and a long dry season during which many trees drop their leaves.',
      },
      sourceIds: ['one-earth-eco-293', 'one-earth-eco-298', 'one-earth-eco-301'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Hardwickia-dominated dry deciduous woodland with a 15 to 25 m canopy',
        'dry evergreen forest of Manilkara hexandra, Diospyros, and Strychnos nux-vomica',
        'deciduous forest of Terminalia, Albizia, Cassia, and Pterocarpus',
        'sparse Acacia thorn scrub transitioning to Euphorbia on rocky ground',
        'Avicennia mangrove along the Godavari-Krishna coast',
      ],
      sourceIds: ['one-earth-im8', 'one-earth-eco-290', 'one-earth-eco-293', 'one-earth-eco-298', 'one-earth-eco-315'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'the peninsula tracing Gondwana origins more than 150 million years old',
        'land bridges linking Sri Lanka\u2019s dry zone to the mainland until the Pleistocene',
        'the Brahmagiri-Nilgiri-Eastern Ghats range supporting an estimated 6,300 elephants',
        'seasonal congregations of elephants at Minneriya lake in Sri Lanka',
      ],
      sourceIds: ['one-earth-eco-290', 'one-earth-eco-298', 'one-earth-eco-301'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a low combined protection target of about 7% for the bioregion, with a protection level of 9. Most original forest has been cleared, yet blocks exceeding 5,000 km2 remain suitable for tigers and elephants, and Sri Lanka\u2019s dry-zone reserves such as Yala and Wilpattu cover about 17% of that ecoregion. Priorities include securing Jerdon\u2019s courser habitat, controlling exotic Prosopis invasion, and sustaining connectivity for large mammals.',
      sourceIds: ['one-earth-im8', 'one-earth-eco-290', 'one-earth-eco-301', 'one-earth-eco-315'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:tiger',
      'species:asian-elephant',
      'species:jerdons-courser',
      'species:sri-lankan-leopard',
      'species:indian-giant-squirrel',
      'species:indian-gazelle',
    ],
    countryIds: ['IN', 'LK'],
    sources: ['one-earth-im8', 'one-earth-eco-290', 'one-earth-eco-293', 'one-earth-eco-298', 'one-earth-eco-301', 'one-earth-eco-315'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im9',
    summary: {
      value:
        'The Myanmar Coastal Rainforests & Andaman Sea Islands bioregion lies in the west of the Southeast Asian Forests subrealm in Indomalaya. Its seven ecoregions span roughly 21 million hectares across western Myanmar, the Tenasserim ranges, the Andamans, and the Nicobars, including the Irrawaddy freshwater swamps and the Myanmar Coast and Indochina mangroves.',
      sourceIds: ['one-earth-im9'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'western Myanmar coastal lowlands and the Arakan Yoma and Tenasserim ranges',
        'Ayeyarwady river delta mangroves and the Irrawaddy freshwater swamps',
        'Gulf of Thailand and Mekong delta mangroves',
        'Andaman and Nicobar island archipelagos in the Andaman Sea',
        'Tenasserim-South Thailand semi-evergreen rainforests along the Malayan neck',
      ],
      sourceIds: ['one-earth-im9', 'one-earth-eco-218', 'one-earth-eco-234', 'one-earth-eco-250', 'one-earth-eco-284', 'one-earth-eco-319', 'one-earth-eco-321'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical and strongly monsoonal across the mainland ecoregions, with an equatorial, oceanic climate and frequent storms on the Andaman and Nicobar islands.',
      },
      sourceIds: ['one-earth-eco-218', 'one-earth-eco-250', 'one-earth-eco-252'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lush dipterocarp lowland rainforests',
        'semi-evergreen rainforests of the Tenasserim ranges',
        'freshwater swamp forests behind the Irrawaddy mangroves',
        'species-rich mangrove forests of the Myanmar coast and Indochina',
        'evergreen and moist deciduous forests on the Andaman and Nicobar islands',
      ],
      sourceIds: ['one-earth-im9', 'one-earth-eco-218', 'one-earth-eco-234', 'one-earth-eco-250', 'one-earth-eco-284', 'one-earth-eco-319', 'one-earth-eco-321'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'island isolation and volcanism shaping endemism in the Andamans and Nicobars',
        'monsoon-driven siltation building the Ayeyarwady delta',
        'tidal and salinity gradients zoning the coastal mangroves',
        'convergence of Indian, Indochinese, and Sundaic biota along the Myanmar coast',
      ],
      sourceIds: ['one-earth-eco-218', 'one-earth-eco-234', 'one-earth-eco-250', 'one-earth-eco-252', 'one-earth-eco-321'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 46% and protection level 3 for the bioregion. Protection varies widely among the seven ecoregions, from very high targets on the island chains to low coverage in the Irrawaddy swamps, with mangrove conversion, poaching, and invasive species among the leading concerns.',
      sourceIds: ['one-earth-im9'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:cinnamon-bittern',
      'species:andaman-serpent-eagle',
      'species:nicobar-imperial-pigeon',
      'species:asiatic-golden-cat',
      'species:gurneys-pitta',
    ],
    countryIds: ['MM', 'BD', 'TH', 'MY', 'VN', 'KH', 'IN'],
    sources: ['one-earth-im9', 'one-earth-eco-218', 'one-earth-eco-234', 'one-earth-eco-250', 'one-earth-eco-252', 'one-earth-eco-284', 'one-earth-eco-319', 'one-earth-eco-321'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im10',
    summary: {
      value:
        'Arakan Mountains and Northern Triangle Forests span some 24 million hectares from the Chin Hills of western Myanmar through the Northern Triangle to the Salween River, comprising five subtropical and temperate forest ecoregions. The old, eroded mountains intercept monsoon rains along the Bay of Bengal and harbor the world\u2019s most diverse primate and butterfly faunas, including the western hoolock gibbon, the Burmese snub-nosed monkey, and the recently discovered leaf muntjac.',
      sourceIds: [
        'one-earth-im10',
        'one-earth-eco-226',
        'one-earth-eco-249',
        'one-earth-eco-259',
        'one-earth-eco-304',
        'one-earth-eco-307',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the Chin Hills and Arakan Yoma rising along the Bay of Bengal coast',
        'the Northern Triangle mountains of far northern Myanmar',
        'the Hkakabo Razi range rising above 5,881 m, the highest of mainland Southeast Asia',
        'the Chindwin, Mali Hka, and Mai Hka rivers feeding the Irrawaddy system',
      ],
      sourceIds: [
        'one-earth-im10',
        'one-earth-eco-226',
        'one-earth-eco-249',
        'one-earth-eco-259',
        'one-earth-eco-304',
        'one-earth-eco-307',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Strongly monsoonal: a wet season from May to October brings the bulk of a high, largely rain-fed rainfall with a pronounced west-east gradient, while cool, dry winter months are pronounced at elevation.',
      },
      sourceIds: [
        'one-earth-im10',
        'one-earth-eco-226',
        'one-earth-eco-249',
        'one-earth-eco-304',
        'one-earth-eco-307',
        'one-earth-eco-259',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'subtropical broadleaf forests of Magnoliaceae, Lauraceae, and Dipterocarpaceae',
        'temperate broadleaf and mixed forests along the highest ridges',
        'limited areas of Khasi pine and Tenasserim pine forest in the Naga Hills',
        'a clear altitudinal sequence from tropical deciduous to temperate conifer forest',
      ],
      sourceIds: [
        'one-earth-im10',
        'one-earth-eco-226',
        'one-earth-eco-249',
        'one-earth-eco-259',
        'one-earth-eco-304',
        'one-earth-eco-307',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'converging Indian, Burmese, and Indo-Chinese biotas driving exceptional biodiversity',
        'the world\u2019s most diverse primate and butterfly faunas',
        'river barriers such as the Mekong, Irrawaddy, and Salween isolating evolutionary lineages',
        'Pleistocene sky-islands preserving relicts of the last glacial maximum',
      ],
      sourceIds: [
        'one-earth-im10',
        'one-earth-eco-226',
        'one-earth-eco-249',
        'one-earth-eco-259',
        'one-earth-eco-307',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Raised as a high-priority bioregion because of its exceptional endemism, only about 7% of the bioregion is formally protected while roughly 90% of its original habitat remains. Shifting cultivation, plantations, mining, and poaching for the wildlife trade erode the forests, although remoteness has kept most blocks intact. Delivering on ambitious One Earth coexistence, transmission-line, and reserve network goals would secure this globally outstanding refuge of biodiversity.',
      sourceIds: [
        'one-earth-im10',
        'one-earth-eco-226',
        'one-earth-eco-249',
        'one-earth-eco-259',
        'one-earth-eco-304',
        'one-earth-eco-307',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:takin',
      'species:hoolock-gibbon',
      'species:red-panda',
      'species:asian-elephant',
      'species:leaf-muntjac',
    ],
    countryIds: ['MM', 'IN', 'BD'],
    sources: [
      'one-earth-im10',
      'one-earth-eco-226',
      'one-earth-eco-249',
      'one-earth-eco-259',
      'one-earth-eco-304',
      'one-earth-eco-307',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im11',
    summary: {
      value:
        'Irrawaddy and North Indochina Mixed Forests span about 73 million hectares across northern Myanmar, Thailand, Laos, Vietnam, and the Chinese province of Yunnan, covering a diverse swathe of dry, moist, and montane forests. The bioregion holds the world\u2019s smallest mammal, Kitti\u2019s hog-nosed bat, along with major populations of Asian elephants and tigers, and is a stronghold for endemics such as the Tonkin and Burmese snub-nosed monkeys.',
      sourceIds: [
        'one-earth-im11',
        'one-earth-eco-235',
        'one-earth-eco-237',
        'one-earth-eco-256',
        'one-earth-eco-294',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the vast Irrawaddy basin of central Myanmar',
        'the Kayah-Karen montane ridge forming the Thailand-Myanmar border',
        'highly incised hills descending from China\u2019s Yunnan Plateau',
        'the central dry zone with only about 650 mm of annual rainfall',
      ],
      sourceIds: [
        'one-earth-im11',
        'one-earth-eco-235',
        'one-earth-eco-237',
        'one-earth-eco-256',
        'one-earth-eco-294',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Semi-arid and highly seasonal in the Irrawaddy basin, warm and wet in the southern and eastern mountains, with annual rainfall between 650 and 2,500 mm and a pronounced monsoon-driven seasonality across the bioregion.',
      },
      sourceIds: [
        'one-earth-im11',
        'one-earth-eco-235',
        'one-earth-eco-237',
        'one-earth-eco-256',
        'one-earth-eco-294',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'moist deciduous forest of teak and ironwood in the Irrawaddy basin',
        'dry thorn scrub and indaing dipterocarp forests in the central dry zone',
        'montane evergreen and subtropical broadleaf forest across the northern hills',
        'karstic limestone forest and relict horsetail tree stands in Indochina',
      ],
      sourceIds: [
        'one-earth-im11',
        'one-earth-eco-235',
        'one-earth-eco-237',
        'one-earth-eco-256',
        'one-earth-eco-294',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'convergence of Palearctic and Indo-Malayan faunas across its northern limits',
        'karst cave systems sheltering endemic and relict species',
        'the world\u2019s smallest and Asia\u2019s largest mammals sharing one landscape',
        'seasonal drought and fire shaping the dry forest ecosystems',
      ],
      sourceIds: [
        'one-earth-im11',
        'one-earth-eco-235',
        'one-earth-eco-237',
        'one-earth-eco-256',
        'one-earth-eco-294',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Long settled and heavily transformed, the bioregion retains about 40% of its forests but only about 17% of its area is protected. Widespread shifting cultivation, plantations, illegal logging, and poaching threaten remaining habitat, while the central dry zone forests are among the most degraded in the region. Meeting the One Earth protection target of 38% requires securing unprotected key biodiversity areas and engaging local tribal communities as stewards.',
      sourceIds: [
        'one-earth-im11',
        'one-earth-eco-235',
        'one-earth-eco-237',
        'one-earth-eco-256',
        'one-earth-eco-294',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:burmese-starred-tortoise',
      'species:elds-deer',
      'species:tonkin-snub-nosed-monkey',
      'species:asian-elephant',
      'species:eastern-hoolock-gibbon',
    ],
    countryIds: ['MM', 'TH', 'LA', 'CN', 'VN'],
    sources: [
      'one-earth-im11',
      'one-earth-eco-235',
      'one-earth-eco-237',
      'one-earth-eco-256',
      'one-earth-eco-294',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im12',
    summary: {
      value:
        'Indochina Mixed Forests & Peatlands (IM12) lies in the Southeast Asian Forests subrealm of Indomalaya and contains 16 ecoregions across roughly 92 million hectares in Cambodia, Laos, Thailand, and Vietnam. Its Cardamom, Luang Prabang, southern Annamite, Chao Phraya, Red River, Tonle Sap, and Central Indochina ecosystems span wet evergreen, dry deciduous, and swamp-forest landscapes from floodplains to montane ridges.',
      sourceIds: ['one-earth-im12'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Cardamom and Elephant mountain rainforests',
        'Annamite mountain ranges and the Bolovans Plateau',
        'Chao Phraya and Red River floodplain lowlands',
        'Tonle Sap floodplains and swamp forests',
        'Khorat Plateau transitional lowlands',
        'Central Indochina dry forest plains',
      ],
      sourceIds: [
        'one-earth-im12',
        'one-earth-eco-223',
        'one-earth-eco-255',
        'one-earth-eco-291',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical seasonal across the bioregion, with monsoonal rainfall from roughly 1,000 to 5,000 mm a year, orographic precipitation cast on the mountain slopes, and a pronounced dry season that underlies the region\u2019s dry forest and swamp forest diversity.',
      },
      sourceIds: ['one-earth-im12', 'one-earth-eco-223', 'one-earth-eco-291'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'wet evergreen and montane rainforests',
        'moist and dry deciduous forests',
        'deciduous dipterocarp woodlands',
        'freshwater and peat swamp forests',
        'scattered coastal mangroves',
      ],
      sourceIds: [
        'one-earth-im12',
        'one-earth-eco-285',
        'one-earth-eco-286',
        'one-earth-eco-291',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'monsoon-driven seasonal flooding of river and lake systems',
        'fire-maintained dry forest dynamics',
        'mountain orographic rainfall belts',
        'peat accumulation in anoxic swamp waters',
        'transitions between evergreen and deciduous forest',
      ],
      sourceIds: [
        'one-earth-im12',
        'one-earth-eco-255',
        'one-earth-eco-286',
        'one-earth-eco-291',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 30% and a protection level of 5 for this bioregion, reflecting protection that is uneven across its ecoregions. The Cardamom Mountains, Luang Prabang, and Annamite rainforests retain substantial unprotected forest, while the Chao Phraya, Red River, and Tonle Sap swamps are almost entirely converted to human uses. Safeguarding the remaining forest blocks and restoring degraded wetland systems are the priority conservation needs for the bioregion.',
      sourceIds: ['one-earth-im12'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:smooth-coated-otter',
      'species:saola',
      'species:giant-ibis',
      'species:asian-elephant',
      'species:tiger',
    ],
    countryIds: ['KH', 'LA', 'TH', 'VN'],
    sources: [
      'one-earth-im12',
      'one-earth-eco-223',
      'one-earth-eco-224',
      'one-earth-eco-225',
      'one-earth-eco-239',
      'one-earth-eco-255',
      'one-earth-eco-257',
      'one-earth-eco-258',
      'one-earth-eco-260',
      'one-earth-eco-266',
      'one-earth-eco-272',
      'one-earth-eco-285',
      'one-earth-eco-286',
      'one-earth-eco-291',
      'one-earth-eco-299',
      'one-earth-eco-300',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im13',
    summary: {
      value:
        'The South China Subtropical Evergreen & Monsoon Forests bioregion is located in the Southeast Asian Forests subrealm of Indomalaya and contains five ecoregions, Hainan Island Monsoon Rain Forests (232), Jian Nan Subtropical Evergreen Forests (236), South China-Vietnam Subtropical Evergreen Forests (268), South Taiwan Monsoon Rain Forests (269), and Taiwan Subtropical Evergreen Forests (283), totaling approximately 94 million hectares of land area. This bioregion also includes adjoining coastal marine areas in the South China Sea.',
      sourceIds: [
        'one-earth-im13',
        'one-earth-eco-232',
        'one-earth-eco-236',
        'one-earth-eco-268',
        'one-earth-eco-269',
        'one-earth-eco-283',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'mountain ranges and massifs including the Nan Ling and the central Hainan uplands',
        'karst limestone pinnacles and dissected lowlands in southern China',
        'rivers and streams incising the forested mountains, lined with riparian forests',
        'steep granitic mountains of Taiwan rising from a deep oceanic trench',
        'coastal plains along the mainland and island shores',
      ],
      sourceIds: [
        'one-earth-im13',
        'one-earth-eco-232',
        'one-earth-eco-236',
        'one-earth-eco-268',
        'one-earth-eco-269',
        'one-earth-eco-283',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Subtropical and monsoonal, with heavy summer monsoon rainfall, frequent South China Sea typhoons, seasonal rain shadows on Hainan and Taiwan, and mild winters that shift to hot, humid summers toward the south.',
      },
      sourceIds: [
        'one-earth-im13',
        'one-earth-eco-232',
        'one-earth-eco-236',
        'one-earth-eco-268',
        'one-earth-eco-269',
        'one-earth-eco-283',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'evergreen broadleaf forests of oaks and chestnuts with Lauraceae and Theaceae',
        'limestone forests of Cyclobalanopsis and Cinnamomum in southern China',
        'deciduous monsoon forests and savanna woodlands in the drier lowlands',
        'subtropical conifer and cloud forests on the higher mountain slopes',
        'elevation-zoned broadleaf and conifer forests on Taiwan',
      ],
      sourceIds: [
        'one-earth-im13',
        'one-earth-eco-232',
        'one-earth-eco-236',
        'one-earth-eco-268',
        'one-earth-eco-269',
        'one-earth-eco-283',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'monsoon-driven rainfall and frequent typhoon disturbance',
        'orographic rainfall gradients shaped by mountain ranges',
        'altitudinal zonation of forest types from lowlands to summit',
        'island biogeography driving endemism on Hainan and Taiwan',
        'transitional zone between tropical and subtropical floras',
      ],
      sourceIds: [
        'one-earth-im13',
        'one-earth-eco-232',
        'one-earth-eco-236',
        'one-earth-eco-268',
        'one-earth-eco-269',
        'one-earth-eco-283',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "One Earth reports a combined conservation target of 28% and a protection level of 2 for this bioregion, indicating that only a modest share of the Global Safety Net goal is secured. The Hainan and Taiwan forests retain relatively high conservation targets, while the lowland forests of southern China are heavily converted and the endangered Chinese pangolin, the bioregion's flagship species, faces severe poaching, so safeguarding the remaining forest blocks and tackling wildlife trade are the key priorities.",
      sourceIds: ['one-earth-im13'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:chinese-pangolin',
      'species:hainan-black-crested-gibbon',
      'species:chinese-giant-salamander',
      'species:taiwan-sika-deer',
      'species:formosan-macaque',
    ],
    countryIds: ['CN', 'HK', 'MO', 'TW', 'VN'],
    sources: [
      'one-earth-im13',
      'one-earth-eco-232',
      'one-earth-eco-236',
      'one-earth-eco-268',
      'one-earth-eco-269',
      'one-earth-eco-283',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im14',
    summary: {
      value:
        'The Nansei Islands Subtropical Evergreen Forests bioregion is located in the Southeast Asian Forests subrealm of Indomalaya and contains one ecoregion, Nansei Islands Subtropical Evergreen Forests (251), a chain of forested islands lying just south of Japan with about 408 thousand hectares of land area and extensive surrounding marine areas. The bioregion is part of the Southeast Asian Forests subrealm and is made up of a single ecoregion.',
      sourceIds: ['one-earth-im14', 'one-earth-eco-251'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a 1,050-kilometer chain of over 100 small islands arcing from Kyushu, Japan toward Taiwan',
        'volcanic islands of igneous rock in the north',
        'Mesocenozoic karst-limestone islands in the south',
        'rugged and steep topography rising to 1,935 meters on Yaku Island',
      ],
      sourceIds: ['one-earth-im14', 'one-earth-eco-251'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Subtropical in the north transitioning to a tropical monsoon climate in the south, with 2,000 to 3,500 mm of annual rainfall, frequent typhoons from August to September, winter temperatures near 18 degrees Celsius and summer temperatures around 28 degrees Celsius.',
      },
      sourceIds: ['one-earth-im14', 'one-earth-eco-251'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'temperate broadleaf forests of oak and laurel families in the north',
        'mid-island forests dominated by Castanopsis sieboldii and Lauraceae',
        'more tropical southern forests with Distylium, Dendropanax, and Schefflera',
        'conifer forests of Cryptomeria japonica, Tsuga sieboldii, and Abies firma at higher elevations',
      ],
      sourceIds: ['one-earth-im14', 'one-earth-eco-251'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'island biogeography driving exceptionally high endemism in flora and fauna',
        'typhoon disturbance and ocean-influenced moisture regimes',
        'volcanic and karst island formation dynamics',
        'elevational zonation from broadleaf forests to mountain conifer stands',
      ],
      sourceIds: ['one-earth-im14', 'one-earth-eco-251'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 55% with a protection level of 6 for this bioregion, which is made up of the single Nansei Islands Subtropical Evergreen Forests ecoregion. Although over 45% of the forests remain and 23% are protected, the endangered Iriomote cat, the flagship species with an estimated population of only 100 individuals, and other island endemics face ongoing threats from forest loss, infrastructure expansion, and hunting.',
      sourceIds: ['one-earth-im14'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:iriomote-cat',
      'species:okinawa-rail',
      'species:ryukyu-flying-fox',
      'species:ryukyu-scops-owl',
    ],
    countryIds: ['JP'],
    sources: ['one-earth-im14', 'one-earth-eco-251'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im15',
    summary: {
      value:
        'Philippines & Sulu Sea Tropical Forests lies in the Southeast Asian Forests & Seas subrealm of Indomalaya and spans ten Philippine ecoregions, from the Greater Negros-Panay and Mindanao rainforests to the South China Sea islands, totaling about 30 million hectares. Rugged volcanic islands with extreme endemism, thousands of endemic species here are concentrated on individual islands.',
      sourceIds: ['one-earth-im15'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Philippine archipelago of volcanic islands between the Pacific and Sunda Shelf',
        'substantial land area covering Greater Negros-Panay, Luzon, Mindanao, Mindoro, Palawan, the Sulu Archipelago, and the South China Sea islands',
        'islands formed from plate collisions, volcanic eruptions, and undersea tectonic activity over 50 million years',
        'topographies ranging from rugged mountains over 2,700 m to coastal lowlands',
        'deep channels and shallow continental shelf margins separating the island groups',
      ],
      sourceIds: ['one-earth-im15', 'one-earth-eco-231', 'one-earth-eco-240', 'one-earth-eco-267'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical and generally humid, with rainfall increasing from May to January, montane interception of storms and typhoons in the eastern Philippines, and gentler conditions toward the Sulu and South China Sea islands.',
      },
      sourceIds: ['one-earth-eco-240', 'one-earth-eco-241', 'one-earth-eco-267', 'one-earth-eco-276'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland dipterocarp rainforest',
        'montane oak-laurel forest grading into mossy cloud forest',
        'beach vegetation, mangrove stands, and pine forest in Luzon',
        'scrub and beach vegetation on the offshore islands',
      ],
      sourceIds: [
        'one-earth-eco-231',
        'one-earth-eco-240',
        'one-earth-eco-241',
        'one-earth-eco-262',
        'one-earth-eco-267',
        'one-earth-eco-303',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'long-lived isolation of island faunas and flora promoting strong endemism',
        'Pleistocene land bridges linking some islands while deep channels blocked others',
        'Sundaic biodiversity exchange through Palawan and deep-water isolation of the Sulu Archipelago',
        'the Philippine eagle filling the top predator niche in the absence of large mammalian carnivores',
      ],
      sourceIds: ['one-earth-eco-231', 'one-earth-eco-241', 'one-earth-eco-262', 'one-earth-eco-276'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 36% and protection level 4 for the bioregion. Forest clearing for logging, agriculture, settlements, hunting, and climate change threaten the ecoregions, while several Key Biodiversity Areas remain unprotected and some flagship endemic species are critically endangered or possibly extinct.',
      sourceIds: ['one-earth-im15'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:philippine-eagle',
      'species:philippine-tarsier',
      'species:tamaraw',
      'species:visayan-warty-pig',
      'species:palawan-pangolin',
    ],
    countryIds: ['PH', 'CN'],
    sources: [
      'one-earth-im15',
      'one-earth-eco-231',
      'one-earth-eco-240',
      'one-earth-eco-241',
      'one-earth-eco-246',
      'one-earth-eco-247',
      'one-earth-eco-248',
      'one-earth-eco-262',
      'one-earth-eco-267',
      'one-earth-eco-276',
      'one-earth-eco-303',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im16',
    summary: {
      value:
        'The Borneo Tropical Forests & Sundaland Heath Forests bioregion lies in the Malaysia & Western Indonesia subrealm of Indomalaya. Its seven ecoregions span the lowland, montane, and peat swamp forests of Borneo, the freshwater swamp forests of southwest Borneo, Sundaland heath forests, the alpine meadows of Kinabalu, and the Sunda Shelf mangroves, together covering roughly 74 million hectares.',
      sourceIds: ['one-earth-im16'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the island of Borneo, once part of the shallow Sunda Shelf landmass',
        'lowland and montane forested interior rising to the 4,095 m Mount Kinabalu',
        'coastal peat swamps and freshwater floodplains',
        'white-sand heath plateaus and raised beaches',
        'mangrove-lined coasts along the Sunda Shelf',
      ],
      sourceIds: ['one-earth-im16', 'one-earth-eco-219', 'one-earth-eco-220', 'one-earth-eco-322'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical and humid across the bioregion, with over 4,000 mm of annual rainfall in the lowlands, cloud-derived moisture and alpine cold on the highest peaks, and seasonally flooded or waterlogged conditions in the swamp forests.',
      },
      sourceIds: ['one-earth-eco-219', 'one-earth-eco-220', 'one-earth-eco-221'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'exceptionally rich lowland dipterocarp rainforest with over 260 species of Dipterocarpaceae',
        'montane oak, beech, chestnut, and Ericaceae forest',
        'peat swamp forest with stilt-rooted and buttressed trees',
        'low dense kerangas heath forest rich in carnivorous plants',
        'alpine and subalpine shrubland and meadow on Mount Kinabalu',
      ],
      sourceIds: ['one-earth-im16', 'one-earth-eco-219', 'one-earth-eco-281', 'one-earth-eco-313'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'isolation since the Pleistocene driving endemism across Borneo',
        'seed dispersal by hornbills and primates',
        'peat accumulation in anaerobic swamp soils',
        'pitcher plant-tree shrew mutualism on nutrient-poor heath soils',
      ],
      sourceIds: ['one-earth-im16', 'one-earth-eco-221', 'one-earth-eco-281'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 68% with a protection level of 2 for the bioregion. Cleared lowland forests, drained and burned peat swamps, and fire-degraded heath leave the remaining habitats highly vulnerable, with only about 8% of lowland forest protected; expanding the protected area network and halting further conversion are global priorities.',
      sourceIds: ['one-earth-im16'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:proboscis-monkey',
      'species:bornean-orangutan',
      'species:sunda-clouded-leopard',
      'species:bornean-pygmy-elephant',
      'species:raffles-pitcher-plant',
    ],
    countryIds: ['ID', 'MY', 'BN'],
    sources: [
      'one-earth-im16',
      'one-earth-eco-219',
      'one-earth-eco-220',
      'one-earth-eco-221',
      'one-earth-eco-273',
      'one-earth-eco-281',
      'one-earth-eco-313',
      'one-earth-eco-322',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im17',
    summary: {
      value:
        'The Javan-Bali Tropical Rainforests bioregion lies in the Malaysia & Western Indonesia subrealm of Indomalaya. Its five ecoregions span the lowland and montane rainforests of Java and Bali, the montane forests of western Java, and the Christmas and Cocos Islands tropical forests, totaling nearly 14 million hectares with extensive surrounding marine areas.',
      sourceIds: ['one-earth-im17'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the volcanic islands of Java and Bali along the Ring of Fire',
        'long volcanic mountain chains and cratered summits',
        'lowland forests now largely converted to agriculture',
        'the remote Christmas and Cocos islands rising from the Indian Ocean floor',
      ],
      sourceIds: ['one-earth-im17', 'one-earth-eco-230', 'one-earth-eco-229', 'one-earth-eco-227'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical, with monsoon and dry seasons, heavier rainfall and ever-wet conditions in western Java and on the wetter mountains, and a warm, humid tropical climate with a northwest monsoon on the remote Indian Ocean islands.',
      },
      sourceIds: ['one-earth-eco-289', 'one-earth-eco-288', 'one-earth-eco-227'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland evergreen and moist deciduous rainforest of Java and Bali',
        'montane and sub-montane forest of oak, chestnut, Lauraceae, and Ericaceae shrubs',
        'semi-evergreen forests and palm-bearing deciduous woodland',
        'evergreen tropical forest on Christmas Island with endemic palms and screw pines',
      ],
      sourceIds: ['one-earth-im17', 'one-earth-eco-289', 'one-earth-eco-227'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'volcanic origins and continuing seismic activity shaping the islands',
        'mountain refugia sheltering endemic mammals and birds',
        'rainy-season mass migration of Christmas Island red crabs',
        'forest canopy connectivity being critical for primates and arboreal species',
      ],
      sourceIds: ['one-earth-im17', 'one-earth-eco-288', 'one-earth-eco-227'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 27% with a protection level of 1 for the bioregion. Java is among the most densely populated islands on Earth, and almost all lowland forest has been converted, leaving tiny, isolated reserves where the Javan rhinoceros survives only at Ujung Kulon and several endemic birds such as the Bali myna persist in fragmented patches.',
      sourceIds: ['one-earth-im17'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:javan-rhinoceros',
      'species:javan-leopard',
      'species:bali-myna',
      'species:javan-lutung',
      'species:javan-slow-loris',
    ],
    countryIds: ['ID', 'CX', 'CC'],
    sources: [
      'one-earth-im17',
      'one-earth-eco-227',
      'one-earth-eco-229',
      'one-earth-eco-230',
      'one-earth-eco-288',
      'one-earth-eco-289',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:im18',
    summary: {
      value:
        'The Peninsular Malaysian and Sumatran Tropical Rainforests bioregion lies in the Malaysia & Western Indonesia subrealm of Indomalaya. Its twelve ecoregions stretch across the Malay Peninsula and the island of Sumatra, from lowland dipterocarp, peat, and freshwater swamp forests to montane and tropical pine forests, totalling about 62,353 thousand hectares across Indonesia and Malaysia.',
      sourceIds: [
        'one-earth-im18',
        'one-earth-eco-245',
        'one-earth-eco-263',
        'one-earth-eco-264',
        'one-earth-eco-265',
        'one-earth-eco-277',
        'one-earth-eco-278',
        'one-earth-eco-279',
        'one-earth-eco-280',
        'one-earth-eco-305',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the Malay Peninsula and the island of Sumatra',
        'the volcanic Barisan Mountains running almost 1,700 km along Sumatra',
        'lowland alluvial plains holding peat and freshwater swamp forests',
        'the volcanic caldera of Lake Toba',
      ],
      sourceIds: [
        'one-earth-im18',
        'one-earth-eco-279',
        'one-earth-eco-280',
        'one-earth-eco-305',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical climate ranging from ever-wet lowland conditions with heavy year-round rainfall to markedly wetter western and drier eastern slopes of the Barisan Mountains, with seasonal monsoons on the peninsula.',
      },
      sourceIds: [
        'one-earth-eco-263',
        'one-earth-eco-265',
        'one-earth-eco-278',
        'one-earth-eco-305',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'species-rich lowland dipterocarp rainforest',
        'montane oak, laurel, and conifer forest',
        'peat and freshwater swamp forest',
        'tropical pine forest dominated by Pinus merkusii',
      ],
      sourceIds: [
        'one-earth-eco-263',
        'one-earth-eco-264',
        'one-earth-eco-277',
        'one-earth-eco-280',
        'one-earth-eco-305',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'the Barisan ridge casting rain shadows that shape forest type across Sumatra',
        'island isolation driving exceptional endemism in the Mentawai Islands',
        'river-flood cycles and peat accumulation sustaining the inland swamp forests',
        'seed dispersal by hornbills, gibbons, and large fruit bats',
      ],
      sourceIds: [
        'one-earth-im18',
        'one-earth-eco-245',
        'one-earth-eco-277',
        'one-earth-eco-278',
        'one-earth-eco-280',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 52% with a protection level of 3 for the bioregion. Although large tracts of forest remain, logging, conversion to oil palm and pulp plantations, fires, and poaching continue to fragment habitat and threaten iconic species such as the Sumatran orangutan and the Critically Endangered Sumatran rhinoceros.',
      sourceIds: ['one-earth-im18'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sumatran-orangutan',
      'species:sumatran-rhinoceros',
      'species:siamang',
      'species:malayan-tapir',
      'species:sumatran-tiger',
    ],
    countryIds: ['ID', 'MY'],
    sources: [
      'one-earth-im18',
      'one-earth-eco-245',
      'one-earth-eco-263',
      'one-earth-eco-264',
      'one-earth-eco-265',
      'one-earth-eco-277',
      'one-earth-eco-278',
      'one-earth-eco-279',
      'one-earth-eco-280',
      'one-earth-eco-305',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa47',
    summary: {
      value:
        'Japan Forest Islands (PA47) covers the Japanese archipelago from subarctic Hokkaido to subtropical Ryukyu. Six ecoregions form a north–south and elevational sequence: Hokkaido deciduous and conifer forests, Nihonkai evergreen and montane deciduous forests on the Sea of Japan side, Taiheiyo montane deciduous forests on the Pacific side, and Honshu alpine conifer forests on the highest peaks.',
      sourceIds: [
        'one-earth-pa47',
        'one-earth-eco-666',
        'one-earth-eco-670',
        'one-earth-eco-671',
        'one-earth-eco-683',
        'one-earth-eco-698',
        'one-earth-eco-699',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic mountain ranges',
        'steep forested slopes',
        'Pacific coastal lowlands',
        'Sea of Japan coastal hills',
        'alpine cirques and ridges',
      ],
      sourceIds: [
        'one-earth-pa47',
        'one-earth-eco-666',
        'one-earth-eco-670',
        'one-earth-eco-671',
        'one-earth-eco-683',
        'one-earth-eco-698',
        'one-earth-eco-699',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Humid temperate with strong winter monsoon on the Sea of Japan side and summer monsoon on the Pacific side; subarctic in Hokkaido, subtropical in Ryukyu.',
      },
      sourceIds: [
        'one-earth-eco-666',
        'one-earth-eco-670',
        'one-earth-eco-671',
        'one-earth-eco-683',
        'one-earth-eco-698',
        'one-earth-eco-699',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'cool-temperate deciduous broadleaf forest',
        'warm-temperate evergreen broadleaf forest',
        'montane deciduous broadleaf forest',
        'subalpine conifer forest',
        'alpine meadow and shrub',
      ],
      sourceIds: [
        'one-earth-eco-666',
        'one-earth-eco-670',
        'one-earth-eco-671',
        'one-earth-eco-683',
        'one-earth-eco-698',
        'one-earth-eco-699',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'winter monsoon snow accumulation on Sea of Japan side',
        'summer monsoon moisture on Pacific side',
        'elevational and latitudinal forest turnover',
        'volcanic disturbance and succession',
        'stream and coastal nutrient linkages',
      ],
      sourceIds: [
        'one-earth-eco-666',
        'one-earth-eco-670',
        'one-earth-eco-671',
        'one-earth-eco-683',
        'one-earth-eco-698',
        'one-earth-eco-699',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'High human population density and historical forest conversion have fragmented lowland habitats. Protected areas include several national parks; key pressures are plantation forestry, deer overbrowsing, invasive species, and climate-driven range shifts.',
      sourceIds: [
        'one-earth-pa47',
        'one-earth-eco-666',
        'one-earth-eco-670',
        'one-earth-eco-671',
        'one-earth-eco-683',
        'one-earth-eco-698',
        'one-earth-eco-699',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:japanese-macaque',
      'species:japanese-serow',
      'species:blakistons-fish-owl',
      'species:red-crowned-crane',
      'species:japanese-giant-salamander',
      'species:japanese-cedar',
    ],
    countryIds: ['JP'],
    sources: [
      'one-earth-pa47',
      'one-earth-eco-666',
      'one-earth-eco-670',
      'one-earth-eco-671',
      'one-earth-eco-683',
      'one-earth-eco-698',
      'one-earth-eco-699',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa9',
    summary: {
      value:
        'Great Britain Ireland & Faroe Islands (PA9) spans the British Isles and Faroe archipelago. Five ecoregions form a west–east moisture gradient: Celtic broadleaf forests on the Atlantic fringe, English lowlands beech forests, North Atlantic moist mixed forests across Britain and Ireland, Caledonian pine forests in the Scottish Highlands, and Faroese boreal grasslands on the exposed North Atlantic islands.',
      sourceIds: [
        'one-earth-pa9',
        'one-earth-eco-651',
        'one-earth-eco-663',
        'one-earth-eco-672',
        'one-earth-eco-691',
        'one-earth-eco-729',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Atlantic sea cliffs and coastal machair',
        'lowland agricultural mosaic with ancient woodlands',
        'upland heather moors and blanket bogs',
        'Caledonian pinewood remnants',
        'Faroe Islands steep basalt cliffs and grassy slopes',
      ],
      sourceIds: [
        'one-earth-pa9',
        'one-earth-eco-651',
        'one-earth-eco-663',
        'one-earth-eco-672',
        'one-earth-eco-691',
        'one-earth-eco-729',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Oceanic temperate with strong west–east precipitation gradient (3,000+ mm in western Highlands to 600 mm in eastern England); mild winters, cool summers; Faroes cool, wet, and windy year-round.',
        annualPrecipitationMm: { min: 600, max: 3500 },
      },
      sourceIds: [
        'one-earth-eco-651',
        'one-earth-eco-663',
        'one-earth-eco-672',
        'one-earth-eco-691',
        'one-earth-eco-729',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Celtic broadleaf forest (oak, hazel, holly)',
        'lowlands beech forest (European beech)',
        'North Atlantic mixed forest (oak, birch, Scots pine)',
        'Caledonian pine forest (Scots pine, juniper)',
        'Faroese boreal grassland (fescue, bent, sedge)',
      ],
      sourceIds: [
        'one-earth-eco-651',
        'one-earth-eco-663',
        'one-earth-eco-672',
        'one-earth-eco-691',
        'one-earth-eco-729',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Atlantic storm track and salt-spray exposure',
        'peatland formation and carbon storage',
        'deer grazing and browsing pressure',
        'historic deforestation and recent reforestation',
        'seabird nutrient transfer on coasts and islands',
      ],
      sourceIds: [
        'one-earth-pa9',
        'one-earth-eco-651',
        'one-earth-eco-663',
        'one-earth-eco-672',
        'one-earth-eco-691',
        'one-earth-eco-729',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One of the most heavily modified temperate regions globally; ancient woodland cover below 2.5% in Britain. Key pressures: agricultural intensification, deer overabundance, invasive species (rhododendron, grey squirrel), nitrogen deposition, and climate-driven range shifts. Protected areas network expanding but fragmented; Caledonian pinewoods and Atlantic oakwoods are priority habitats.',
      sourceIds: [
        'one-earth-pa9',
        'one-earth-eco-651',
        'one-earth-eco-663',
        'one-earth-eco-672',
        'one-earth-eco-691',
        'one-earth-eco-729',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-deer',
      'species:scottish-wildcat',
      'species:capercaillie',
      'species:golden-eagle',
      'species:atlantic-salmon',
      'species:scots-pine',
    ],
    countryIds: ['GB', 'IE', 'FO'],
    sources: [
      'one-earth-pa9',
      'one-earth-eco-651',
      'one-earth-eco-663',
      'one-earth-eco-672',
      'one-earth-eco-691',
      'one-earth-eco-729',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na2',
    summary: {
      value:
        'Canadian Tundra (NA2) covers the northern Canadian Arctic archipelago and mainland tundra coast. Five ecoregions span a High-to-Low Arctic gradient: polar-desert High Arctic tundra on the Queen Elizabeth Islands, Low and Middle Arctic tundra across the mainland and Baffin Island, Davis Highlands tundra on Baffin Island, and alpine tundra in the Torngat Mountains of northern Labrador.',
      sourceIds: [
        'one-earth-na2',
        'one-earth-eco-412',
        'one-earth-eco-413',
        'one-earth-eco-414',
        'one-earth-eco-415',
        'one-earth-eco-421',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Arctic archipelago islands',
        'coastal lowlands and fjords',
        'rolling tundra plains',
        'alpine mountain tundra',
        'perennial sea ice margins',
      ],
      sourceIds: [
        'one-earth-na2',
        'one-earth-eco-412',
        'one-earth-eco-413',
        'one-earth-eco-414',
        'one-earth-eco-415',
        'one-earth-eco-421',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'High Arctic to Low Arctic with extreme seasonality; winter temperatures -30 to -40°C, summer highs 5–10°C; precipitation 100–300 mm mostly as snow.',
        annualPrecipitationMm: { min: 100, max: 300 },
      },
      sourceIds: [
        'one-earth-eco-412',
        'one-earth-eco-413',
        'one-earth-eco-414',
        'one-earth-eco-415',
        'one-earth-eco-421',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'polar desert cushion plants',
        'dwarf-shrub heath (Dryas, Salix)',
        'sedges and cotton grass',
        'moss and lichen carpets',
        'alpine meadow and felfield',
      ],
      sourceIds: [
        'one-earth-eco-412',
        'one-earth-eco-413',
        'one-earth-eco-414',
        'one-earth-eco-415',
        'one-earth-eco-421',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'permafrost freeze-thaw cycles',
        'short growing season (30–60 days)',
        'sea-ice dynamics and polynyas',
        'herbivore grazing and nutrient cycling',
        'glacial and nival processes in mountains',
      ],
      sourceIds: [
        'one-earth-eco-412',
        'one-earth-eco-413',
        'one-earth-eco-414',
        'one-earth-eco-415',
        'one-earth-eco-421',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Extensive protected areas including Qausuittuq, Sirmilik, Auyuittuq, and Torngat Mountains national parks. Climate-driven shrub expansion, permafrost thaw, and shifting species distributions are primary concerns. Inuit-led conservation and co-management are central to stewardship.',
      sourceIds: [
        'one-earth-na2',
        'one-earth-eco-412',
        'one-earth-eco-413',
        'one-earth-eco-414',
        'one-earth-eco-415',
        'one-earth-eco-421',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:polar-bear',
      'species:peary-caribou',
      'species:musk-ox',
      'species:arctic-fox',
      'species:ivory-gull',
      'species:snowy-owl',
    ],
    countryIds: ['CA'],
    sources: [
      'one-earth-na2',
      'one-earth-eco-412',
      'one-earth-eco-413',
      'one-earth-eco-414',
      'one-earth-eco-415',
      'one-earth-eco-421',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at14',
    summary: {
      value:
        'The Central Congolian Tropical Forests bioregion (AT14) lies in the Equatorial Afrotropics subrealm within the Cuvette Centrale region of the Congo Basin, south of the Congo River. Dense wet forests and swamps store enormous amounts of carbon and harbour diverse wildlife including the bonobo, okapi, and Congo peacock across three ecoregions totaling nearly 64 million hectares. Salonga National Park, one of the largest protected areas in the world, anchors conservation efforts within this globally significant forest landscape.',
      sourceIds: [
        'one-earth-at14',
        'one-earth-eco-3',
        'one-earth-eco-10',
        'one-earth-eco-29',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Cuvette Centrale region of the Congo Basin south of the Congo River',
        'three ecoregions spanning lowland forests and eastern and western swamp forests',
        'nearly 64 million hectares of dense wet forests and swamps',
        'Salonga National Park among the largest protected areas on the continent',
      ],
      sourceIds: ['one-earth-at14'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Wet equropical with annual rainfall typically around 2,000 mm; mean maximum temperatures between 27 and 30\u00B0C; minimum temperatures between 18 and 24\u00B0C depending on ecoregion and position within the basin.',
        annualPrecipitationMm: { min: 1800, max: 2000 },
        temperatureC: { min: 18, max: 30 },
      },
      sourceIds: [
        'one-earth-eco-3',
        'one-earth-eco-10',
        'one-earth-eco-29',
      ],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'evergreen rainforests dominated by Gilbertiodendron dewevrei and semi-deciduous forest between river systems',
        'seasonally inundated and permanent swamp forests along tributaries of the Congo River',
        '1,500 to 2,000 vascular plant species with roughly 10 percent endemism',
        'extensive peat-forming wetlands in the Cuvette Centrale storing massive carbon reserves',
      ],
      sourceIds: [
        'one-earth-eco-3',
        'one-earth-eco-10',
        'one-earth-eco-29',
      ],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Congo River acting as a major biogeographic barrier shaping species distributions',
        'ancient fluvial refuge preserving forests during regional climatic fragmentation',
        'forest elephant seed dispersal and bonobo frugivory maintaining canopy diversity',
        'massive tropical peat carbon storage unique to the Cuvette Centrale depression',
      ],
      sourceIds: [
        'one-earth-eco-3',
        'one-earth-eco-10',
        'one-earth-eco-29',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 91% for AT14 with a protection level of 3. Salonga National Park (36,000 km\u00B2), Lomami National Park, Tumba-Ngiri-Maindombe Ramsar Site (65,696 km\u00B2), and the Lac T\u00E9l\u00E9 Community Reserve are the principal protected areas. Threats include logging, bushmeat hunting, ivory poaching, small-scale farming, live animal trade, and road construction facilitating access to remote forests. Priority actions are reducing illegal trade in bushmeat and ivory, strengthening law enforcement, incorporating local communities\u2019 land rights, and expanding protected-area boundaries.',
      sourceIds: [
        'one-earth-at14',
        'one-earth-eco-3',
        'one-earth-eco-10',
        'one-earth-eco-29',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bonobo',
      'species:western-lowland-gorilla',
      'species:okapi',
      'species:african-forest-elephant',
      'species:congo-peacock',
      'species:lesula-monkey',
      'species:golden-bellied-mangabey',
    ],
    countryIds: ['CD', 'CG', 'CF'],
    sources: [
      'one-earth-at14',
      'one-earth-eco-3',
      'one-earth-eco-10',
      'one-earth-eco-29',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at17',
    summary: {
      value:
        'The Gulf of Guinea Coastal Forests & Mangroves bioregion (AT17) lies in the Equatorial Afrotropics subrealm and consists of lush tropical forests and mangroves lining the coastline of Gabon, Equatorial Guinea, Cameroon, and Nigeria. It includes the islands of Bioko, Sao Tome, Principe, and Annobon across eight ecoregions. These coastal forests have been an ancient cradle for Congo\u2019s globally important populations of large forest mammals, including the western lowland gorilla, chimpanzee, and African forest elephant.',
      sourceIds: [
        'one-earth-at17',
        'one-earth-eco-5',
        'one-earth-eco-6',
        'one-earth-eco-7',
        'one-earth-eco-21',
        'one-earth-eco-22',
        'one-earth-eco-23',
        'one-earth-eco-27',
        'one-earth-eco-111',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'lush tropical forests and mangroves lining the coastline of Gabon, Equatorial Guinea, Cameroon, and Nigeria',
        'includes the islands of Bioko, Sao Tome, Principe, and Annobon',
        'eight ecoregions spanning Congolian Coastal Forests to Central African Mangroves',
        'extends into estuaries and adjacent marine areas',
      ],
      sourceIds: ['one-earth-at17'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Equatorial wet climate with high rainfall; Congolian Coastal Forests receive 1,200\u20132,000 mm per year, while the wettest slopes of Mount Cameroon and Bioko exceed 10,000 mm; mean annual rainfall ranges from 750 mm in Angola to 6,000 mm in Cameroon across the mangrove zone.',
        annualPrecipitationMm: { min: 750, max: 10000 },
      },
      sourceIds: [
        'one-earth-eco-5',
        'one-earth-eco-7',
        'one-earth-eco-21',
        'one-earth-eco-111',
      ],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'coastal evergreen moist forests',
        'remnant transition forests between the Upper Guinean and Lower Guinean blocks',
        'swamp forests of the Niger Delta and montane forests of Mount Cameroon and Bioko',
        'the largest mangrove stands in Africa within the Central African coastal mangroves',
      ],
      sourceIds: ['one-earth-at17'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'ancient cradle for Congo\u2019s globally important populations of large forest mammals',
        'exceptional endemism across mainland forests and the islands of the Gulf of Guinea',
        'oceanic isolation of Sao Tome, Principe, and Annobon driving remarkable island species',
        'mangrove ecosystems supporting talapoin monkey, African manatee, and marine turtles',
      ],
      sourceIds: ['one-earth-at17'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 57% for AT17 with a protection level of 4. Threats across the bioregion include selective and commercial logging, bushmeat hunting, plantation agriculture, oil exploration and spills, urban and industrial expansion, and invasive species. Priority actions include supporting local community livelihoods, strengthening enforcement against bushmeat and logging, establishing community REDD+ schemes, and developing sustainable mangrove conservation policies with community participation.',
      sourceIds: ['one-earth-at17'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:western-lowland-gorilla',
      'species:african-forest-elephant',
      'species:sclaters-guenon',
      'species:preuss-red-colobus',
      'species:talapoin-monkey',
      'species:giant-sunbird',
    ],
    countryIds: ['NG', 'CM', 'GQ', 'GA', 'CG', 'CD', 'AO', 'ST'],
    sources: [
      'one-earth-at17',
      'one-earth-eco-5',
      'one-earth-eco-6',
      'one-earth-eco-7',
      'one-earth-eco-21',
      'one-earth-eco-22',
      'one-earth-eco-23',
      'one-earth-eco-27',
      'one-earth-eco-111',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at12',
    summary: {
      value:
        'The Victoria Basin bioregion, in the Equatorial Afrotropics subrealm, is centered on Lake Victoria at the border between Kenya, Tanzania, and Uganda and the surrounding forest-savanna, while also including the interconnected mountain forests along the Albertine Rift to the west. Its three ecoregions include the famous Virunga National Park near Lake Edward at the eastern border of DR Congo, an especially important area with over 2,000 plant and tree species, 230 of which are endemic, and the last refuge of many endangered animals including the mountain gorilla.',
      sourceIds: [
        'one-earth-at12',
        'one-earth-eco-1',
        'one-earth-eco-61',
        'one-earth-eco-86',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'centered on Lake Victoria at the border between Kenya, Tanzania, and Uganda',
        'surrounding forest-savanna across south-central Uganda and eastern Rwanda',
        'mountain forests along the Albertine Rift to the west',
        'Virunga National Park near Lake Edward at the eastern border of DR Congo',
      ],
      sourceIds: [
        'one-earth-at12',
        'one-earth-eco-1',
        'one-earth-eco-61',
        'one-earth-eco-86',
      ],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical humid savanna around Lake Victoria with montane climates in the Albertine Rift highlands to the west.',
        annualPrecipitationMm: { min: 1000, max: 3000 },
      },
      sourceIds: ['one-earth-eco-1', 'one-earth-eco-61'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'forest-savanna mosaic and Papyrus swamp vegetation around Lake Victoria',
        'montane forests with the highest levels of faunal endemism in Africa in the Albertine Rift',
        'Afroalpine moorlands with giant heathers, groundsels, ericas, and lobelias above 3,000 m',
        'over 2,000 plant and tree species, 230 of which are endemic',
      ],
      sourceIds: [
        'one-earth-at12',
        'one-earth-eco-1',
        'one-earth-eco-61',
        'one-earth-eco-86',
      ],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Alpine archipelago-like distribution of isolated montane habitats promoting high endemism',
        'Lake Victoria and mountain forests acting as refugia for endangered wildlife',
        'elevational zonation from forest-savanna to montane to Afroalpine bands',
        'interconnected Albertine Rift forests linking mountain habitats',
      ],
      sourceIds: [
        'one-earth-at12',
        'one-earth-eco-1',
        'one-earth-eco-61',
        'one-earth-eco-86',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 21% for AT12 with a protection level of 6. The bioregion contains the famous Virunga National Park and more than 2,000 plant and tree species, with 230 endemic, as the last refuge of many endangered animals including the mountain gorilla across its three ecoregions. Threats vary by ecoregion and include agriculture clearance, bushmeat hunting, unsustainable fishing, wetland clearance, encroachment, and human-induced fire, with priority actions including post-war park restoration, community conservation, and cross-border law enforcement.',
      sourceIds: [
        'one-earth-at12',
        'one-earth-eco-1',
        'one-earth-eco-61',
        'one-earth-eco-86',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:mountain-gorilla',
      'species:golden-monkey',
      'species:shoebill',
      'species:giraffe',
      'species:african-elephant',
      'species:ruwenzori-turaco',
    ],
    countryIds: ['CD', 'UG', 'BI', 'RW', 'TZ', 'KE'],
    sources: [
      'one-earth-at12',
      'one-earth-eco-1',
      'one-earth-eco-61',
      'one-earth-eco-86',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at19',
    summary: {
      value:
        'The West African Coastal Forests & Savanna bioregion (AT19), in the Equatorial Afrotropics subrealm, consists of tropical coastal forests and mangroves as well as Guinean mountain forests and forest-savanna. With seven ecoregions\u2014Eastern Guinean Forests, Guinean Montane Forests, Western Guinean Lowland Forests, Guinean Forest-Savanna, Jos Plateau Forest-Grassland, Central African Mangroves, and Guinean Mangroves\u2014it has a land area of more than 113 million hectares. The Guinean forests are considered a biodiversity hotspot with over 9,000 species, 20 percent of which are endemic to the region.',
      sourceIds: [
        'one-earth-at19',
        'one-earth-eco-11',
        'one-earth-eco-14',
        'one-earth-eco-30',
        'one-earth-eco-44',
        'one-earth-eco-82',
        'one-earth-eco-111',
        'one-earth-eco-113',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'tropical coastal forests and mangroves as well as Guinean mountain forests and forest-savanna',
        'spanning Senegal to Cameroon across the West African coast',
        'land area of more than 113 million hectares',
        'seven ecoregions from Eastern Guinean Forests to Guinean Mangroves',
      ],
      sourceIds: [
        'one-earth-at19',
        'one-earth-eco-11',
        'one-earth-eco-14',
        'one-earth-eco-30',
        'one-earth-eco-44',
        'one-earth-eco-82',
        'one-earth-eco-111',
        'one-earth-eco-113',
      ],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Equatorial humid climate with a strong rainfall gradient, from as little as 95 mm in the Senegal River Delta to more than 5,000 mm on the Freetown Peninsula and roughly 9,000 mm in Sierra Leone; temperatures range from 10\u00b0C in the Guinean forests to 43\u00b0C extremes.',
        annualPrecipitationMm: { min: 95, max: 9000 },
      },
      sourceIds: [
        'one-earth-eco-11',
        'one-earth-eco-14',
        'one-earth-eco-30',
        'one-earth-eco-44',
        'one-earth-eco-113',
      ],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Eastern Guinean lowland and transitional moist forests',
        'Guinean montane forests of high peaks and plateaus',
        'Guinean forest-savanna mosaic with scattered inselbergs',
        'extensive West African coastal mangroves',
      ],
      sourceIds: [
        'one-earth-at19',
        'one-earth-eco-11',
        'one-earth-eco-14',
        'one-earth-eco-30',
        'one-earth-eco-44',
        'one-earth-eco-113',
      ],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'a biodiversity hotspot with over 9,000 species, 20 percent endemic to the region',
        'exceptionally high endemicity across Guinean forests and montane and mangrove ecoregions',
        'high rainfall gradient sustaining wet lowland forests to semi-arid forest-savanna',
        'mangrove food webs and manatee populations supporting coastal marine life',
      ],
      sourceIds: ['one-earth-at19', 'one-earth-eco-113'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 21% for AT19 with a protection level of 8. Key protected areas include Ta\u00EF Forest NP, Sapo NP, the transboundary Gola NP, Mount Nimba Strict Nature Reserve, Kakum NP, and Delta du Saloum NP. Threats across the bioregion include slash-and-burn and plantation agriculture, commercial logging, bushmeat and wildlife hunting, tin and iron ore mining, rice farming and urban expansion, dam construction, and climate change with sea level rise. Priority actions are strengthening and upgrading protected-area management, enforcing wildlife laws, developing alternative livelihoods, and supporting community mangrove rehabilitation.',
      sourceIds: [
        'one-earth-at19',
        'one-earth-eco-11',
        'one-earth-eco-14',
        'one-earth-eco-30',
        'one-earth-eco-44',
        'one-earth-eco-82',
        'one-earth-eco-111',
        'one-earth-eco-113',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:western-chimpanzee',
      'species:king-colobus',
      'species:white-necked-rockfowl',
      'species:west-african-manatee',
      'species:liberian-mongoose',
    ],
    countryIds: ['SN', 'GM', 'GW', 'GN', 'SL', 'LR', 'CI', 'GH', 'TG', 'BJ', 'NG', 'CM'],
    sources: [
      'one-earth-at19',
      'one-earth-eco-11',
      'one-earth-eco-14',
      'one-earth-eco-30',
      'one-earth-eco-44',
      'one-earth-eco-82',
      'one-earth-eco-111',
      'one-earth-eco-113',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at2',
    summary: {
      value:
        'The South African Cape Shrublands & Mountain Forests bioregion (AT2) is the only Mediterranean bioregion in the Afrotropics realm, located in the Southern Afrotropics subrealm. It encompasses five ecoregions with a total land area of nearly 18 million hectares, including the Cape Floristic Region, one of only seven floral kingdoms in the world, with over 9,000 plant species, two-thirds of which are endemic. Conservation targets range from 20\u201350% across ecoregions with protection levels of 1\u20137.',
      sourceIds: [
        'one-earth-at2',
        'one-earth-eco-15',
        'one-earth-eco-88',
        'one-earth-eco-89',
        'one-earth-eco-90',
        'one-earth-eco-110',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the only Mediterranean bioregion in the Afrotropics realm',
        'five ecoregions from Knysna-Amatole Montane Forests to Succulent Karoo Xeric Shrublands',
        'total land area of nearly 18 million hectares',
        'incorporates the Cape Floristic Region and adjacent marine areas',
      ],
      sourceIds: [
        'one-earth-at2',
        'one-earth-eco-15',
        'one-earth-eco-88',
        'one-earth-eco-89',
        'one-earth-eco-90',
        'one-earth-eco-110',
      ],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Mediterranean climate with predominantly winter rainfall, ranging from 150 mm in the arid Succulent Karoo to 2,000 mm in the wetter Fynbos and Afromontane forests. Temperatures range from near-freezing in inland valleys to over 40\u00b0C in summer.',
        annualPrecipitationMm: { min: 150, max: 2000 },
        temperatureC: { min: 0, max: 40 },
      },
      sourceIds: [
        'one-earth-eco-15',
        'one-earth-eco-88',
        'one-earth-eco-89',
        'one-earth-eco-90',
        'one-earth-eco-110',
      ],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'fynbos shrubland with restioids, ericoids, proteoids, and geophytes',
        'renosterveld dominated by renosterbos with species-rich geophyte assemblages',
        'Albany thicket with dense spiny shrubs and abundant succulents',
        'Succulent Karoo with the world\u2019s richest dwarf shrub succulent vegetation',
      ],
      sourceIds: [
        'one-earth-at2',
        'one-earth-eco-15',
        'one-earth-eco-88',
        'one-earth-eco-89',
        'one-earth-eco-90',
        'one-earth-eco-110',
      ],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'Cape Floristic Region with over 9,000 plant species, two-thirds endemic',
        'one of only seven floral kingdoms in the world',
        'fire-driven fynbos renewal and megaherbivore-mediated thicket dynamics',
        'interconnected shrubland and forest ecosystems supporting high endemism',
      ],
      sourceIds: ['one-earth-at2', 'one-earth-eco-15', 'one-earth-eco-88', 'one-earth-eco-89'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports conservation targets of 20\u201350% across the five ecoregions with protection levels ranging from 1 to 7. Key protected areas include the Cape Floral Region Protected Areas (UNESCO World Heritage Site), Garden Route National Park, Addo Elephant NP, and multiple biosphere reserves. Threats include urbanization around Cape Town and Port Elizabeth, agriculture and pastoralism, invasive alien plants, climate change, overgrazing, uncontrolled fire, and illegal plant trade. Priority actions are expanding protected area networks, community-based habitat restoration, and controlling alien invasive species across the bioregion.',
      sourceIds: [
        'one-earth-at2',
        'one-earth-eco-15',
        'one-earth-eco-88',
        'one-earth-eco-89',
        'one-earth-eco-90',
        'one-earth-eco-110',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:knysna-banana-frog',
      'species:south-western-black-rhino',
      'species:geometric-tortoise',
      'species:victorins-scrub-warbler',
      'species:richtersveld-dwarf-leaf-toed-gecko',
      'species:african-elephant',
      'species:knysna-dwarf-chameleon',
    ],
    countryIds: ['ZA'],
    sources: [
      'one-earth-at2',
      'one-earth-eco-15',
      'one-earth-eco-88',
      'one-earth-eco-89',
      'one-earth-eco-90',
      'one-earth-eco-110',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at8',
    summary: {
      value:
        'The Southeast African Subtropical Grasslands bioregion (AT8) is centered on the inland Highveld plateau formed by the Great Escarpment ridge in South Africa, encompassing five ecoregions with a total area of over 63 million hectares. Mountain grasslands transition to subtropical grasslands in the east and mid-altitude bushlands in the north, supporting numerous mammal and bird species including pangolins, honey badgers, and mountain zebras. The southern white rhinoceros is the flagship species and the region holds the greatest expanse of remaining grassland in southern Africa.',
      sourceIds: [
        'one-earth-at8',
        'one-earth-eco-38',
        'one-earth-eco-40',
        'one-earth-eco-41',
        'one-earth-eco-48',
        'one-earth-eco-81',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'inland Highveld plateau formed by the Great Escarpment ridge',
        'five ecoregions from Central Bushveld to Highveld Grasslands',
        'greatest expanse of remaining grassland in southern Africa',
        'fragmented habitat across South Africa, Botswana, Lesotho, Mozambique, and Eswatini',
      ],
      sourceIds: [
        'one-earth-at8',
        'one-earth-eco-38',
        'one-earth-eco-40',
        'one-earth-eco-41',
        'one-earth-eco-48',
        'one-earth-eco-81',
      ],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Ranges from tropical summer-rainfall conditions in the lowveld to cold montane grasslands at high altitudes. Annual precipitation varies from 350 mm in the drier bushveld to over 1,900 mm at the highest Drakensberg peaks, while temperatures span from -13\u00b0C on alpine summits to 40\u00b0C in low-lying savannas.',
        annualPrecipitationMm: { min: 350, max: 1900 },
        temperatureC: { min: -13, max: 40 },
      },
      sourceIds: [
        'one-earth-eco-38',
        'one-earth-eco-40',
        'one-earth-eco-41',
        'one-earth-eco-48',
        'one-earth-eco-81',
      ],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'subtropical mopane and Acacia bushveld in the lowland ecoregions',
        'montane grasslands with Podocarpus forest patches on the Drakensberg',
        'sweet and sour grasslands across the Highveld plateau',
        'species-rich thickets with cycad diversity along the escarpment',
      ],
      sourceIds: [
        'one-earth-at8',
        'one-earth-eco-38',
        'one-earth-eco-40',
        'one-earth-eco-41',
        'one-earth-eco-48',
        'one-earth-eco-81',
      ],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'global stronghold for southern white and black rhinoceros populations',
        'elephant browsing and fire shaping woodland-grassland mosaics',
        'high reptile and butterfly endemism in montane and escarpment habitats',
        'apex predator guilds maintaining ungulate population dynamics',
      ],
      sourceIds: [
        'one-earth-at8',
        'one-earth-eco-38',
        'one-earth-eco-41',
        'one-earth-eco-48',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports protection levels ranging from 1 to 6 across the five ecoregions against conservation targets of 6\u201330%. Key protected areas include Kruger National Park, Hluhluwe-Imfolozi NP, uKhahlamba-Drakensberg Park, Waterberg Biosphere, Pilanesberg NP, and Mountain Zebra NP. Threats include escalating rhino poaching, agricultural conversion of grasslands, overgrazing, urban expansion, coal and gold mining, invasive alien plants, uncontrolled fires, and predator and scavenger extermination. Priority actions are strengthening anti-poaching law enforcement, establishing protected area corridors, promoting sustainable grazing, and restoring degraded ecosystems.',
      sourceIds: [
        'one-earth-at8',
        'one-earth-eco-38',
        'one-earth-eco-40',
        'one-earth-eco-41',
        'one-earth-eco-48',
        'one-earth-eco-81',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:southern-white-rhino',
      'species:mountain-zebra',
      'species:bearded-vulture',
      'species:blue-crane',
      'species:julianas-golden-mole',
      'species:ground-pangolin',
    ],
    countryIds: ['ZA', 'BW', 'LS', 'MZ', 'SZ'],
    sources: [
      'one-earth-at8',
      'one-earth-eco-38',
      'one-earth-eco-40',
      'one-earth-eco-41',
      'one-earth-eco-48',
      'one-earth-eco-81',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at15',
    summary: {
      value:
        'The North Congolian Lowland Forests bioregion (AT15), in the Equatorial Afrotropics subrealm, encompasses nearly 95 million hectares of densely forested lowland above the Congo River, bounded east by the Albertine Rift. Comprising the Northeast and Northwest Congolian Lowland Forest ecoregions, it holds part of the world\u2019s last tropical forest wildernesses, storing an estimated 22 billion tonnes of carbon. Its forests are the richest in Africa for primates and support the largest remaining population of lowland gorillas.',
      sourceIds: ['one-earth-at15', 'one-earth-eco-24', 'one-earth-eco-26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'densely forested lowland above the Congo River bounded east by the Albertine Rift',
        'two ecoregions covering 95,083,000 hectares across western and eastern halves',
        'nearly 100,000 km2 of continuous primary lowland rainforest in the Ituri region',
        'transitions to forest-savanna mosaics in the north and swamp forest in the east',
      ],
      sourceIds: ['one-earth-at15', 'one-earth-eco-24', 'one-earth-eco-26'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Humid tropical climate with well-marked dry seasons in parts of the east. Annual rainfall ranges from about 1,400 to 2,000 mm, declining eastward toward the Albertine Rift, with mean annual maximum temperatures of 27\u201333\u00b0C and minimums of 15\u201321\u00b0C depending on elevation.',
        annualPrecipitationMm: { min: 1400, max: 2000 },
        temperatureC: { min: 15, max: 33 },
      },
      sourceIds: ['one-earth-eco-24', 'one-earth-eco-26'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'extensive moist lowland rainforest within the Guineo-Congolian regional center of endemism',
        'mixed moist semi-evergreen and single-dominant moist evergreen forest types',
        'large emergents including Entandrophragma, Pentaclethra, Pericopsis, and Gilbertiodendron species',
        'transitional submontane forest in the east and drier transitional types in the north',
      ],
      sourceIds: ['one-earth-at15', 'one-earth-eco-24', 'one-earth-eco-26'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'the highest primate species richness in Africa, with important lowland gorilla and chimpanzee populations',
        'large populations of African forest elephants historically, reduced by poaching',
        'species-rich lowland forest with recent biological discoveries in unexplored areas',
        'ivory and bushmeat hunting driving declines in elephants, gorillas, chimpanzees, and duikers',
      ],
      sourceIds: ['one-earth-at15', 'one-earth-eco-24', 'one-earth-eco-26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 83% for AT15 with a protection level of 2. Key protected areas include the Okapi Wildlife Reserve, Maiko National Park, Yangambi Biosphere Reserve, Odzala-Kokoua, Nouabal\u00e9-Ndoki, Dzanga-Sangha, Lob\u00e9k\u00e9, and Dja faunal reserves. Threats include mining (gold, diamonds, coltan), bushmeat hunting, elephant and gorilla poaching, logging concessions, and refugee agriculture, with bushmeat hunting a leading pressure on duikers and other medium-sized mammals.',
      sourceIds: ['one-earth-at15', 'one-earth-eco-24', 'one-earth-eco-26'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:western-lowland-gorilla',
      'species:okapi',
      'species:african-forest-elephant',
      'species:giant-forest-genet',
      'species:mandrill',
      'species:aquatic-genet',
    ],
    countryIds: ['CD', 'CF', 'CG', 'CM', 'GA'],
    sources: ['one-earth-at15', 'one-earth-eco-24', 'one-earth-eco-26'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at16',
    summary: {
      value:
        'The Mandara Mountain & North Congolian Forest-Savannas bioregion (AT16), in the Equatorial Afrotropics subrealm, stretches from the volcanic Cameroon Highlands in the west to the Sudd wetlands in the east. It spans roughly 74.5 million hectares across two ecoregions, the Cameroon Highlands Forests and the Northern Congolian Forest-Savanna. Both forest and savanna elephant species, hippopotamus, duiker, giraffe, and lions occur here, along with several endemic amphibians and volcanic montane forests rich in endemic bird species.',
      sourceIds: ['one-earth-at16', 'one-earth-eco-2', 'one-earth-eco-52'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'stretching from the Cameroon Highlands in the west to the Sudd in the east',
        'volcanic mountain forests and forest-savanna mosaics spanning about 74.5 million hectares',
        'two ecoregions: Cameroon Highlands Forests and Northern Congolian Forest-Savanna',
        'dissected plateau at about 500 m rising to 700 m toward the Cameroon Highlands',
      ],
      sourceIds: ['one-earth-at16', 'one-earth-eco-2', 'one-earth-eco-52'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Climatically transitional between the Sudanian and Guineo-Congolian regions, with a single wet and a single dry season. Mean annual precipitation is roughly 1,200\u20131,600 mm, declining northward, while temperatures range from about 13\u00b0C in the dry season to 34\u00b0C in the rainy season.',
        annualPrecipitationMm: { min: 1200, max: 1600 },
        temperatureC: { min: 13, max: 34 },
      },
      sourceIds: ['one-earth-eco-2', 'one-earth-eco-52'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'montane forests, grassland, bamboo, and subalpine communities on Cameroon highland volcanoes',
        'forest, woodland, and secondary grassland intergrading with dry-season fire severity',
        'gallery forests along watercourses and remnant peripheral semi-evergreen rainforest in the south',
        'moist wooded grasslands of Andropogon, Hyparrhenia, and Loudetia genera',
      ],
      sourceIds: ['one-earth-at16', 'one-earth-eco-2', 'one-earth-eco-52'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'both savanna and forest elephant species present across woodland and forest patches',
        'an Afromontane archipelago regional center of endemism with many endemic birds and amphibians',
        'repeated climatic fluctuations expanding and contracting rainforest-savanna boundaries',
        'apex predators such as lions maintaining ungulate population dynamics',
      ],
      sourceIds: ['one-earth-at16', 'one-earth-eco-2', 'one-earth-eco-52'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 16% for AT16 with a protection level of 9. Protected areas include Garamba National Park, Mbam-Djerem and B\u00e9nou\u00e9 National Parks, Southern National Park, and the Bomu Wildlife Reserve. Threats include civil war, armed poaching gangs, elephant ivory poaching (about 1,700 elephants now remain in Garamba), gallery-forest logging, fuelwood, and charcoal, alongside a long history of western black and northern white rhino extirpation from poaching.',
      sourceIds: ['one-earth-at16', 'one-earth-eco-2', 'one-earth-eco-52'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:african-elephant',
      'species:lion',
      'species:giraffe',
      'species:bongo',
      'species:bamenda-apalis',
      'species:common-duiker',
    ],
    countryIds: ['CM', 'NG', 'CF', 'SS', 'CD', 'UG'],
    sources: ['one-earth-at16', 'one-earth-eco-2', 'one-earth-eco-52'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at4',
    summary: {
      value:
        'The Mascarene Tropical Forest Islands bioregion is a volcanic archipelago in the Indian Ocean east of Madagascar, encompassing Mauritius, Réunion, and Rodrigues. With roughly 496,000 hectares of land and over 1,000 native plant species, hundreds of them endemic, it is a global biodiversity hotspot. The islands have suffered catastrophic extinctions of more than half their bird fauna, yet intensive conservation has saved iconic species like the Mauritius kestrel, pink pigeon, and echo parakeet.',
      sourceIds: ['one-earth-at4', 'one-earth-eco-20'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic archipelago in the western Indian Ocean about 640-1,450 km east of Madagascar',
        'largest islands: Réunion (2,500 km²), Mauritius (1,865 km²), and the smaller, older Rodrigues',
        'Réunion\u2019s Piton de la Fournaise (2,631 m) is still active',
        'surrounded by roughly 750 km² of coral reefs, with additional reefs, atolls, and small islets',
      ],
      sourceIds: ['one-earth-at4', 'one-earth-eco-20'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical to subtropical climate, warm and seasonal along the coasts, with a warm season (Dec-Apr) averaging 27°C and a cold season (May-Nov) averaging 22°C. Lowland Mauritius receives 750-2,400 mm/yr and the uplands 2,400-4,500 mm/yr, while Réunion\u2019s eastern mountains receive 4,000-6,000 mm/yr and up to 10,000 mm in places. Intense cyclones periodically affect all the islands.',
        annualPrecipitationMm: { min: 750, max: 10000 },
        temperatureC: { min: 22, max: 27 },
      },
      sourceIds: ['one-earth-at4', 'one-earth-eco-20'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'originally included wetlands, palm-rich woodland, lowland dry forest, rainforest, montane evergreen forest, cloud forest, and high-elevation heathland',
        'about 955 plant species total, roughly 695 endemic',
        'huge loss of original forest especially on Mauritius and Rodrigues, while Réunion retains the greatest intact forest',
        'small offshore islets with fewer introductions hold some of the best remaining habitat',
      ],
      sourceIds: ['one-earth-at4', 'one-earth-eco-20'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'fruit bats provide critical seed dispersal and pollination services for native forest regeneration',
        'seabird breeding colonies of Trindade petrel and masked booby contribute nutrient inputs',
        'trophic dynamics disrupted by invasive rats, cats, mongoose, macaques, deer, and pigs',
        'over half of the bird fauna and half of non-bird vertebrates extinct, with severe declines among endemic land snails',
      ],
      sourceIds: ['one-earth-at4', 'one-earth-eco-20'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 52% with a protection level of 7. Black River Gorges National Park (67 km²) on Mauritius is the largest protected area, joined by Réunion reserves and protected offshore islets. Priority actions include eliminating invasive species with innovative trapping and biological control, reducing fruit bat-human conflict with nonlethal methods, and expanding the protected area network to link remnant habitats.',
      sourceIds: ['one-earth-at4', 'one-earth-eco-20'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:mauritius-kestrel',
      'species:pink-pigeon',
      'species:echo-parakeet',
      'species:reunion-cuckoo-shrike',
      'species:mauritian-flying-fox',
      'species:rodrigues-flying-fox',
      'species:round-island-boa',
      'species:mauritius-fody',
    ],
    countryIds: ['MU', 'RE'],
    sources: ['one-earth-at4', 'one-earth-eco-20'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at3',
    summary: {
      value:
        'The Amsterdam-Saint Paul bioregion comprises two extremely remote subantarctic volcanic islands in the southern Indian Ocean, about 3,000 km from any continent. With only about 7,000 ha of land dominated by temperate grasslands, it is critically important for seabird breeding, particularly the Amsterdam albatross, one of the world\u2019s rarest birds with only 160-170 individuals. The islands sit at the biogeographic transition between the Indomalayan and Antarctic realms.',
      sourceIds: ['one-earth-at3', 'one-earth-eco-67'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'two volcanic islands about 80 km apart in the southern Indian Ocean',
        'Amsterdam Island: about 55 km², an extinct volcano reaching 911 m, formed 400,000-200,000 years ago',
        'Saint-Paul Island: only 7 km² at 272 m, with a flooded volcanic crater open to the sea forming an enclosed harbor with vertical cliffs',
        'among the most remote islands in the world, about 500 km north of the Antarctic convergence',
      ],
      sourceIds: ['one-earth-at3', 'one-earth-eco-67'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Moderate oceanic climate with surface seawater from 12.7°C in August to 17.4°C in February and air temperatures from 11.2°C to 17°C, averaging 13.5°C yearly. Precipitation is high at about 1,114 mm/year, falling primarily as rain. Hail or snow is observed in winter but seldom at low altitudes.',
        annualPrecipitationMm: { min: 1114, max: 1114 },
        temperatureC: { min: 11.2, max: 17 },
      },
      sourceIds: ['one-earth-at3', 'one-earth-eco-67'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'temperate grasslands dominate the islands',
        'Amsterdam Island is the only French sub-Antarctic island with a native tree, Phylica nitida (Rhamnaceae), reaching 6-7 m with small narrow leaves and honey-scented yellow flowers',
        'extensive lowland meadow now covers most of the area once thick with native Phylica forest',
        'the residual Phylica forest stretches along the eastern slope between Grand Bois and Chaudron',
      ],
      sourceIds: ['one-earth-at3', 'one-earth-eco-67'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'seabird nutrient transfer via guano from about 10-11 breeding seabird species, four of them extremely rare',
        'subantarctic fur seal and rockhopper penguin breeding colonies, with about 25,500 rockhopper pairs on Amsterdam in 1993',
        'feral cattle were a major vegetation threat until eradicated in 2010',
        'industrial fishing bycatch and disease outbreaks threaten several albatross species',
      ],
      sourceIds: ['one-earth-at3', 'one-earth-eco-67'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 99% with a protection level of 10. The islands are protected under the National Nature Reserve of French Southern Territories, a Ramsar site covering 22,700 km². Priority actions include mitigating longline bycatch for the Amsterdam albatross, maintaining long-term seabird monitoring, and improving knowledge of pathogens in seabirds.',
      sourceIds: ['one-earth-at3', 'one-earth-eco-67'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:amsterdam-albatross',
      'species:indian-yellow-nosed-albatross',
      'species:sooty-albatross',
      'species:northern-rockhopper-penguin',
      'species:subantarctic-fur-seal',
      'species:soft-plumaged-petrel',
      'species:grey-petrel',
      'species:brown-skua',
    ],
    countryIds: ['TF'],
    sources: ['one-earth-at3', 'one-earth-eco-67'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at1',
    summary: {
      value:
        'The Tristan Volcanic Islands bioregion is a remote group of five volcanic islands on the Mid-Atlantic Ridge, midway between Africa and South America. With roughly 17,000 ha of land supporting predominantly temperate grasslands, it is critically important for seabirds, hosting the world\u2019s only breeding population of the critically endangered Tristan albatross. The islands have a cool-temperate oceanic climate with high precipitation and are classified as an Important Endemic Bird Area.',
      sourceIds: ['one-earth-at1', 'one-earth-eco-68'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'archipelago of five volcanic islands resting on the east slope of the Mid-Atlantic Ridge',
        'Tristan is the youngest at about 1 million years old, still volcanically active with a snow-capped volcano and crater lake',
        'Nightingale and Inaccessible are eroded volcanic cones; Gough Island lies about 425 km southeast of Tristan',
        'no native terrestrial mammals, reptiles, amphibians, or freshwater fish',
      ],
      sourceIds: ['one-earth-at1', 'one-earth-eco-68'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Cool-temperate oceanic climate with mean near-sea-level temperatures of about 11.3-14.5°C, little seasonal variation, but rapid weather changes, located on the edge of the roaring forties wind belt. Tristan receives about 1,676 mm of annual precipitation while Gough Island receives much more at about 3,397 mm.',
        annualPrecipitationMm: { min: 1676, max: 3397 },
        temperatureC: { min: 11.3, max: 14.5 },
      },
      sourceIds: ['one-earth-at1', 'one-earth-eco-68'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'predominantly temperate grasslands and shrublands',
        'notable endemic plants include tree ferns (Cyathea spp.)',
        'tussock grass, fern bush, and Phylica shrubland dominate different habitats',
        'Gough Island has extensive fern bush vegetation areas',
      ],
      sourceIds: ['one-earth-at1', 'one-earth-eco-68'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'seabird nutrient transfer from ocean to land, with guano enriching the soils',
        'seabird breeding colonies create significant nutrient inputs to the islands',
        'subantarctic fur seals haul out on rocky shores',
        'no native terrestrial predators, so ecological dynamics are shaped by the absence of mammals',
      ],
      sourceIds: ['one-earth-at1', 'one-earth-eco-68'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 48% with a protection level of 10. Gough Island, Inaccessible Island, and territorial waters are inscribed on the UNESCO World Heritage List (1995), though there is no protected area on Tristan Island itself. Threats include invasive house mice on Gough that predate seabird chicks, rats on Tristan, overgrazing, and longline fishing bycatch.',
      sourceIds: ['one-earth-at1', 'one-earth-eco-68'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:tristan-albatross',
      'species:atlantic-yellow-nosed-albatross',
      'species:sooty-albatross',
      'species:northern-rockhopper-penguin',
      'species:gough-finch',
      'species:gough-moorhen',
      'species:great-shearwater',
      'species:subantarctic-fur-seal',
    ],
    countryIds: ['SH'],
    sources: ['one-earth-at1', 'one-earth-eco-68'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at5',
    summary: {
      value:
        'The Seychelles & Comoros Tropical Islands bioregion (AT5), in the Madagascar & Eastern Afrotropics subrealm, comprises two archipelagos in the Indian Ocean north of Madagascar. The eastern Seychelles group is dominated by granitic tropical broadleaf forest with more than 75 endemic plant species including the rare jellyfish tree, while the western Comoros group supports dense tropical forests. Its three ecoregions\u2014Comoros Forests, Granitic Seychelles Forests, and Aldabra Island Xeric Scrub\u2014cover about 254,000 hectares excluding reefs and marine areas.',
      sourceIds: ['one-earth-at5', 'one-earth-eco-4', 'one-earth-eco-13', 'one-earth-eco-91'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'two Indian Ocean archipelagos north of Madagascar, east and west of the Mozambique Channel',
        'ancient granitic islands of about 750 million years with steep sides and impressive peaks',
        'tropical broadleaf forest on the Seychelles and dense tropical forest on the Comoros',
        'three ecoregions covering about 254,000 hectares excluding reefs and marine areas',
      ],
      sourceIds: ['one-earth-at5', 'one-earth-eco-4', 'one-earth-eco-13', 'one-earth-eco-91'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Humid maritime tropical climate with little seasonal temperature variation in the Seychelles and distinct wet and dry seasons in the Comoros. Annual rainfall ranges from about 1,000 mm on drier coasts to more than 5,000 mm on Comoran uplands, with frequent cyclones and volcanic activity around Mount Karthala.',
        annualPrecipitationMm: { min: 1000, max: 5000 },
        temperatureC: { min: 18, max: 30 },
      },
      sourceIds: ['one-earth-at5', 'one-earth-eco-4', 'one-earth-eco-13'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'granitic tropical broadleaf forest with over 75 endemic plant species including the rare jellyfish tree',
        'palm, pandan, and hardwood forests below 610 m with cloud-forest remnants above on the Seychelles',
        'semi-deciduous lowland and montane evergreen moist forests above 800 m on the Comoros',
        'one of the largest intact populations of endemic palms including coco de mer on Praslin',
      ],
      sourceIds: ['one-earth-at5', 'one-earth-eco-4', 'one-earth-eco-13'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'millions of years of isolation producing exceptionally high levels of endemism',
        'giant tortoises acting as ecosystem engineers through grazing, seed dispersal, and nutrient cycling',
        'magnificent seabird and land-bird aggregations on Aldabra atoll',
        'introduced mammals and plants predating on or displacing native island fauna and flora',
      ],
      sourceIds: ['one-earth-at5', 'one-earth-eco-4', 'one-earth-eco-13', 'one-earth-eco-91'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 94% for AT5 with a protection level of 2. Key protected areas include the Vall\u00e9e de Mai and Morne Seychellois National Parks, Cousin and Aride Island reserves, Aldabra special reserve and World Heritage Site, and Comoran reserves such as Mount Ntringui and Moheli National Park. Threats include agricultural clearance, introduced predators, poaching of turtles and fruit bats, invasive Lantana camara, and climate-driven sea-level rise and drought.',
      sourceIds: ['one-earth-at5', 'one-earth-eco-4', 'one-earth-eco-13', 'one-earth-eco-91'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:aldabra-giant-tortoise',
      'species:seychelles-warbler',
      'species:livingstones-fruit-bat',
      'species:comoro-scops-owl',
      'species:seychelles-paradise-flycatcher',
    ],
    countryIds: ['KM', 'SC'],
    sources: ['one-earth-at5', 'one-earth-eco-4', 'one-earth-eco-13', 'one-earth-eco-91'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at9',
    summary: {
      value:
        'The Greater Karoo & Kalahari Drylands bioregion spans the large expanse of dry savannas and woodlands between the South African Highveld and the coastal deserts of Namibia. It comprises four ecoregions (Kalahari Acacia Woodlands, Gariep Karoo, Kalahari Xeric Savanna, and Nama Karoo Shrublands) totaling around 121 million hectares. Despite its dry climate it supports an extraordinary range of mammals including meerkat, brown hyena, bat-eared and Cape foxes, and all three of Africa\u2019s big cats - cheetah, leopard, and the famous black-maned Kalahari lion.',
      sourceIds: ['one-earth-at9', 'one-earth-eco-47', 'one-earth-eco-94', 'one-earth-eco-97', 'one-earth-eco-101'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'broad expanse of dry savanna, shrubland, and woodland between the South African Highveld and the Namibian coastal desert',
        'Kalahari Basin level plains with long parallel red sand dunes and pan systems such as the large Grootvloer-Verneukpan complex',
        'Fish River Canyon incises the plateau up to 550 m deep and 65 km wide, the largest canyon in the southern hemisphere',
        'elevations mostly above 1,000 m, ranging from about 600 to 1,600 m',
      ],
      sourceIds: ['one-earth-at9', 'one-earth-eco-47', 'one-earth-eco-94', 'one-earth-eco-97', 'one-earth-eco-101'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Semi-arid to arid and highly variable, with large seasonal and daily temperature swings including winter nights down to -14°C and summer days above 40-45°C. Annual rainfall ranges from about 50 to 600 mm depending on ecoregion, falling mainly Oct-Mar with little or no winter rain; droughts recur on an approximate 7-year cycle.',
        annualPrecipitationMm: { min: 50, max: 600 },
        temperatureC: { min: -14, max: 45 },
      },
      sourceIds: ['one-earth-eco-47', 'one-earth-eco-94', 'one-earth-eco-97', 'one-earth-eco-101'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'low-shrub karoo scrub and succulent dwarf shrubs, including tall stem-succulents and quiver trees (Aloidendron dichotomum)',
        'acacia and tree savanna with Acacia erioloba, A. luederitzii, mopane (Colophospermum mopane), Terminalia sericea, and Combretum spp.',
        'grasses of Schmidtia, Stipagrostis, Aristida, and Eragrostis',
        'low plant endemism (less than 3% of plants in the Kalahari Xeric Savanna)',
      ],
      sourceIds: ['one-earth-at9', 'one-earth-eco-47', 'one-earth-eco-94', 'one-earth-eco-97', 'one-earth-eco-101'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'historical seasonal migration of large herbivores (blue wildebeest, eland, and hartebeest) linking the Kalahari to the Okavango, now disrupted by veterinary, farm, and border fences',
        'dry-adapted migration strategies of blue wildebeest and hartebeest across arid landscapes',
        'carnivore-livestock conflict leading to poisoned carcasses that kill non-target raptors',
        'a grass-fire feedback cycle emerging in the Nama Karoo under climate change and mismanaged fire regimes',
      ],
      sourceIds: ['one-earth-at9', 'one-earth-eco-47', 'one-earth-eco-94', 'one-earth-eco-97', 'one-earth-eco-101'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 47% with a protection level of 4. Large reserves include the Central Kalahari and Khutse Game Reserves (Botswana), Kgalagadi Transfrontier Park, and the Karoo and Camdeboo National Parks, with communal conservancies across Namibia. Major threats are livestock overgrazing, borehole water extraction, veterinary fence disruption of migration, invasive alien plants, mining, and climate change.',
      sourceIds: ['one-earth-at9', 'one-earth-eco-47', 'one-earth-eco-94', 'one-earth-eco-97', 'one-earth-eco-101'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:gemsbok',
      'species:lion',
      'species:cheetah',
      'species:meerkat',
      'species:brown-hyena',
      'species:cape-fox',
    ],
    countryIds: ['ZA', 'BW', 'NA'],
    sources: ['one-earth-at9', 'one-earth-eco-47', 'one-earth-eco-94', 'one-earth-eco-97', 'one-earth-eco-101'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at10',
    summary: {
      value:
        'The Southwest African Coastal Drylands bioregion runs the length of Namibia\u2019s Atlantic coast through the southern half of Angola. It is extremely arid, comprising sandy coastal deserts, steppe, and dry savanna woodlands across four ecoregions totaling roughly 27 million hectares. It is well known for its sand seas with dunes up to 300 m high and the foggy Skeleton Coast, whose fog is a vital moisture source for life in the harsh desert.',
      sourceIds: ['one-earth-at10', 'one-earth-eco-98', 'one-earth-eco-102', 'one-earth-eco-103', 'one-earth-eco-104'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'narrow strip of Namibian and Angolan Atlantic coast with the coastal Namib Desert and the fog-influenced Skeleton Coast',
        'sand seas with vast shifting dunes up to roughly 300 m high',
        'adjacent escarpment and steppe, including the Kaokoveld margin and the Great Escarpment edge of the Namibian Savanna Woodlands',
        'extends from the Uniab and Kaokoveld region through the Namib coastal plain',
      ],
      sourceIds: ['one-earth-at10', 'one-earth-eco-98', 'one-earth-eco-102', 'one-earth-eco-103', 'one-earth-eco-104'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Extremely arid, hyper-arid coastal desert receiving under 100 mm/yr (the Namib receives only 5-85 mm/yr west to east, and the Kaokoveld under 100 mm). Fog from the cold Benguela Current is a critical moisture input near the coast. Temperatures are suppressed along the coast but inland extremes fall below 0°C and rise above 50°C, with mostly summer rainfall (Oct-Mar) and high unpredictability.',
        annualPrecipitationMm: { min: 5, max: 100 },
        temperatureC: { min: 0, max: 50 },
      },
      sourceIds: ['one-earth-eco-98', 'one-earth-eco-102', 'one-earth-eco-103', 'one-earth-eco-104'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'coastal desert with shifting sand dunes, gravel plains dotted with lichen fields, and sparse grasses and succulents',
        'monotypic relict gymnosperm Welwitschia mirabilis and quiver trees (Aloidendron dichotomum) on desert gravels',
        'dwarf succulent shrub in Namaqualand, part of the world\u2019s only entirely arid plant hotspot',
        'mopane savanna, semi-desert-savanna transition, and dwarf shrub savanna inland',
      ],
      sourceIds: ['one-earth-at10', 'one-earth-eco-98', 'one-earth-eco-102', 'one-earth-eco-103', 'one-earth-eco-104'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'fog-driven moisture regime sustaining fog-basking beetles and fog-fed plants and lichen',
        'cold Benguela Current upwelling suppressing rainfall and generating the coastal fog belt',
        'endemism centers along the Kaoko Escarpment and the Namaqualand-Namib Domain',
        'sand dune systems driven by prevailing southerly winds and halted by Kuiseb River vegetation',
      ],
      sourceIds: ['one-earth-at10', 'one-earth-eco-98', 'one-earth-eco-102', 'one-earth-eco-103', 'one-earth-eco-104'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 71% with a protection level of 9. Key protected areas include Namib-Naukluft National Park (the largest conservation area in southern Africa), Skeleton Coast and Cape Cross Seal Reserve, Sperrgebiet National Park, the Erg du Namib World Heritage Site, Iona National Park in Angola, and numerous communal conservancies. Threats include off-road driving, groundwater extraction, mining, poaching, bush encroachment, and overgrazing.',
      sourceIds: ['one-earth-at10', 'one-earth-eco-98', 'one-earth-eco-102', 'one-earth-eco-103', 'one-earth-eco-104'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:hartmanns-zebra',
      'species:black-rhinoceros',
      'species:gemsbok',
      'species:springbok',
      'species:cheetah',
      'species:brown-hyena',
    ],
    countryIds: ['NA', 'AO'],
    sources: ['one-earth-at10', 'one-earth-eco-98', 'one-earth-eco-102', 'one-earth-eco-103', 'one-earth-eco-104'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at13',
    summary: {
      value:
        'The South Congolian Forest-Savannas & Coastal Scarp bioregion spans the region between the northern coast of Angola and mountains in the east of the Democratic Republic of Congo, running along the Albertine Rift. It consists of tropical forest-savannas and woodlands below the Equatorial forest zone across two ecoregions (Southern and Western Congolian Forest-Savanna), covering more than 94 million hectares. These strongly island-like forests have been subjected to repeated glacial-interglacial expansion and contraction.',
      sourceIds: ['one-earth-at13', 'one-earth-eco-58', 'one-earth-eco-63'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'forest-savanna mosaics below the Equatorial forest belt, from northern Angola through the Democratic Republic of Congo, Republic of Congo, and Gabon',
        'southern Congo River and its many tributaries, with deep river canyons such as Lefini up to 300 m deep',
        'dissected sandstone plateaus (Bat\u00e9k\u00e9 Plateau at about 650 m) and the Albertine Rift fringe',
        'the Southern Congolian portion rises from 300-400 m in the Congo Basin to roughly 1,000 m on the Central African Plateau',
      ],
      sourceIds: ['one-earth-at13', 'one-earth-eco-58', 'one-earth-eco-63'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical, with limited seasonality in the Western Congolian portion and moderately seasonal rainfall in the south. Mean maximum temperatures are 27-30°C in the lowlands and down to about 21°C on high plateaus, with mean minimums of 15-21°C. Annual rainfall averages about 1,400 mm, ranging from 1,200 to 1,600 mm.',
        annualPrecipitationMm: { min: 1200, max: 1600 },
        temperatureC: { min: 15, max: 30 },
      },
      sourceIds: ['one-earth-eco-58', 'one-earth-eco-63'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Guineo-Congolian semi-evergreen and gallery forests and dense dry evergreen forest (Mabwati on Kalahari sands) dominated by Marquesia, Daniellia, and Berlinia',
        'interdigitating wooded grassland savanna with Andropogon, Hyparrhenia, and Pennisetum',
        'ribbon-like riverine forests fanning from the Congo Basin into savanna woodlands along river valleys',
        'dynamic forest-savanna boundary zone subject to expansion and contraction over glacial-interglacial cycles',
      ],
      sourceIds: ['one-earth-at13', 'one-earth-eco-58', 'one-earth-eco-63'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'repeated glacial-interglacial vegetation shifts over the last 10 million years driving forest fragmentation and savanna spread',
        'humans and elephants accelerating grassland expansion through fire cycles and clearing',
        'gallery forests acting as corridors for interior rainforest fauna',
        'forest expansion over recent millennia as savanna is colonized by young successional forest',
      ],
      sourceIds: ['one-earth-at13', 'one-earth-eco-58', 'one-earth-eco-63'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 17% with a protection level of 3, with small protected area coverage. Key sites include L\u00e9fini Wildlife Reserve and Tsoulou Wildlife Reserve (Congo), Plateau Bat\u00e9k\u00e9 and Lop\u00e9 National Parks and Ivindo (Gabon), part of Lomami National Park and the For\u00eat de Luki UNESCO MAB (DRC). Threats include hunting and bushmeat, civil war, logging-road access, subsistence farming, charcoal production, and forest clearing.',
      sourceIds: ['one-earth-at13', 'one-earth-eco-58', 'one-earth-eco-63'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bongo',
      'species:african-elephant',
      'species:western-lowland-gorilla',
      'species:lion',
      'species:sun-tailed-monkey',
      'species:bouviers-red-colobus',
    ],
    countryIds: ['AO', 'CD', 'CG', 'GA'],
    sources: ['one-earth-at13', 'one-earth-eco-58', 'one-earth-eco-63'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at18',
    summary: {
      value:
        'The Saint Helena & Ascension Islands bioregion groups two remote volcanic island ecoregions in the mid-Atlantic Ocean, over 800 nautical miles from the Gulf of Guinea, spanning about 22,000 hectares of land. The surrounding waters are rich in marine life and host one of the world\u2019s largest nesting populations of green sea turtles, making the islands critical stopovers for migratory species.',
      sourceIds: ['one-earth-at18', 'one-earth-eco-37', 'one-earth-eco-60'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic island group in the mid-Atlantic Ocean, more than 800 nautical miles from the Gulf of Guinea',
        'two ecoregions: Ascension Scrub and Grasslands (37) and St. Helena Scrub and Woodlands (60)',
        'total land area of about 22,000 hectares with embedded desert lakes and volcanic terrain',
        'surrounding waters rich in biodiversity, serving as critical stopping points for migratory species',
      ],
      sourceIds: ['one-earth-at18', 'one-earth-eco-37', 'one-earth-eco-60'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Subtropical to dry subtropical. Ascension ranges from 10-32°C with an annual mean rainfall of about 709 mm, a hot season from January to May and a cooler period June to December. St. Helena ranges from 15-32°C with an annual mean rainfall of only about 152 mm, with showers year-round slightly heavier in January to April and a scarcity of fresh water on both islands.',
        annualPrecipitationMm: { min: 152, max: 709 },
        temperatureC: { min: 10, max: 32 },
      },
      sourceIds: ['one-earth-at18', 'one-earth-eco-37', 'one-earth-eco-60'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Ascension: barren desert areas with sparse grass, endemic Ascension spurge, and invasive prickly pear, plus endemic ferns such as Marattia purpurascens, Asplenium ascensionis, and Pteris adscensionis',
        'St. Helena: 431 higher plant species with 45 endemics, including the iconic cabbage tree, St Helena redwood, dwarf ebony, and the ancient St Helena tree fern Dicksonia arborescens',
        'New Zealand flax covers interior areas of St. Helena, with less than one percent retaining native semi-natural forest',
        '157 endemic beetle species recorded on St. Helena',
      ],
      sourceIds: ['one-earth-at18', 'one-earth-eco-37', 'one-earth-eco-60'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'seabird colony dynamics and kleptoparasitism, with frigatebirds stealing food from boobies and tropicbirds',
        'green turtle nesting migrations of more than 2,300 km between Ascension and Brazil',
        'land crab breeding migrations from January to May entrained to the lunar cycle',
        'island biogeography, including early-stage colonization, adaptive evolution, and radiation on young volcanic islands',
        'feral predator impacts, with introduced cats and rats driving declines in seabirds and turtles until the 2004 cat eradication on Ascension',
      ],
      sourceIds: ['one-earth-at18', 'one-earth-eco-37', 'one-earth-eco-60'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 32% with a protection level of 10, with eight protected areas on Ascension including Green Mountain National Park and coastal nature reserves. St. Helena has limited formal protection. Priority actions include rat control at nesting beaches, monitoring of turtles, frigatebirds and sooty terns, and allowing natural migration of nesting beaches to prevent coastal squeeze.',
      sourceIds: ['one-earth-at18', 'one-earth-eco-37', 'one-earth-eco-60'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:ascension-frigatebird',
      'species:sooty-tern',
      'species:green-sea-turtle',
      'species:hawksbill-sea-turtle',
      'species:ascension-land-crab',
      'species:red-footed-booby',
      'species:masked-booby',
    ],
    countryIds: ['SH'],
    sources: ['one-earth-at18', 'one-earth-eco-37', 'one-earth-eco-60'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at21',
    summary: {
      value:
        'The Lake Turkana-Sudd Grasslands, Bushlands & Forests bioregion covers the southern Horn of Africa on the Somali Plate, a complex assemblage of eight ecoregions spanning more than 157 million hectares. It is dominated by Acacia-Commiphora bushlands but also includes Ethiopian montane forests, grasslands, moorlands, and East African montane forests, with Lake Turkana, the world\u2019s largest permanent desert lake, and the Sudd wetlands as embedded features.',
      sourceIds: ['one-earth-at21', 'one-earth-eco-8', 'one-earth-eco-12', 'one-earth-eco-50', 'one-earth-eco-51', 'one-earth-eco-55', 'one-earth-eco-78', 'one-earth-eco-79', 'one-earth-eco-80'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'southern Horn of Africa on the Somali Plate, a very complex assemblage of eight ecoregions spanning more than 157 million hectares',
        'dominated by Acacia-Commiphora bushlands, with Ethiopian montane forests, grasslands, moorlands, and East African montane forests',
        'embedded features include Lake Turkana, the world\u2019s largest permanent desert lake, and the Sudd wetlands',
      ],
      sourceIds: ['one-earth-eco-8', 'one-earth-eco-12', 'one-earth-eco-50', 'one-earth-eco-51', 'one-earth-eco-55', 'one-earth-eco-78', 'one-earth-eco-79', 'one-earth-eco-80'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Ranges from hot arid lowlands with 200-600 mm rainfall and temperatures above 30°C to cool montane zones with 1,000-2,500 mm rainfall and night temperatures below 10°C. Distinct wet and dry seasons are controlled by movement of the Intertropical Convergence Zone, and high elevations experience frost.',
        annualPrecipitationMm: { min: 200, max: 2500 },
        temperatureC: { min: 8, max: 32 },
      },
      sourceIds: ['one-earth-eco-8', 'one-earth-eco-12', 'one-earth-eco-50', 'one-earth-eco-51', 'one-earth-eco-55', 'one-earth-eco-78', 'one-earth-eco-79', 'one-earth-eco-80'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dominated by Acacia-Commiphora bushland and thicket at low elevations',
        'montane forests with Ocotea usambarensis, Juniperus procera, Podocarpus falcatus, and Hagenia abyssinica, plus bamboo zones',
        'giant lobelia and giant groundsels in high mountains, and wild coffee Coffea arabica in the Ethiopian highland forests',
        'about 2,500 plant species in the Somali portion, roughly half of them endemic',
      ],
      sourceIds: ['one-earth-eco-8', 'one-earth-eco-12', 'one-earth-eco-50', 'one-earth-eco-51', 'one-earth-eco-55', 'one-earth-eco-78', 'one-earth-eco-79', 'one-earth-eco-80'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'ITCZ-driven seasonal migrations of ungulates and birds',
        'volcanic mountain formation creating sky islands and driving endemism',
        'fire ecology in montane moorlands and bushlands',
        'Rift Valley tectonic processes creating diverse habitats',
        'high-altitude climate adaptation, including gigantism in plants and extreme endemism',
      ],
      sourceIds: ['one-earth-eco-8', 'one-earth-eco-12', 'one-earth-eco-50', 'one-earth-eco-51', 'one-earth-eco-55', 'one-earth-eco-78', 'one-earth-eco-79', 'one-earth-eco-80'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 27% with a protection level of 5. Key protected areas include Mount Elgon, Mount Kenya, Aberdare, and Kilimanjaro National Parks, plus Bale Mountains and Simien Mountains National Parks, Sibiloi National Park, and numerous community conservancies across northern Kenya. Threats include agricultural encroachment, overgrazing, poaching, fire, glacier retreat, and disease affecting the Ethiopian wolf.',
      sourceIds: ['one-earth-eco-8', 'one-earth-eco-12', 'one-earth-eco-50', 'one-earth-eco-51', 'one-earth-eco-55', 'one-earth-eco-78', 'one-earth-eco-79', 'one-earth-eco-80'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:african-wild-dog',
      'species:black-rhinoceros',
      'species:african-elephant',
      'species:lion',
      'species:common-leopard',
      'species:cheetah',
      'species:grevys-zebra',
      'species:reticulated-giraffe',
    ],
    countryIds: ['ET', 'KE', 'SS', 'UG', 'SO', 'TZ', 'SD'],
    sources: ['one-earth-at21', 'one-earth-eco-8', 'one-earth-eco-12', 'one-earth-eco-50', 'one-earth-eco-51', 'one-earth-eco-55', 'one-earth-eco-78', 'one-earth-eco-79', 'one-earth-eco-80'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at22',
    summary: {
      value:
        'The South Red Sea & Gulf of Aden Coastal Drylands bioregion spans the hyper-arid coasts and interiors of the Horn of Africa and the adjacent Arabian Peninsula, one of the hottest and driest bioregions on Earth. Crossing roughly 78 million hectares, it embraces the low coastal plains of Somalia, Djibouti and Eritrea, the high escarpments of Yemen and Saudi Arabia, and the isolated island of Socotra, with fringing mangroves and fog-fed woodlands that harbour exceptional endemism.',
      sourceIds: ['one-earth-at22', 'one-earth-eco-45', 'one-earth-eco-56', 'one-earth-eco-59', 'one-earth-eco-92', 'one-earth-eco-93', 'one-earth-eco-95', 'one-earth-eco-105', 'one-earth-eco-106', 'one-earth-eco-107', 'one-earth-eco-108', 'one-earth-eco-109', 'one-earth-eco-115'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'arid coastal zone spanning the southern Red Sea and Gulf of Aden coasts of northeast Africa and the Arabian Peninsula',
        'low, extremely arid coastal plains and dry interior of the Horn of Africa and the adjacent Saudi and Yemeni coasts, plus the isolated continental island of Socotra',
        'high-elevation Arabian escarpment ranges rising above the Red Sea and Gulf of Aden, with a fringing Red Sea mangrove coast',
        'one of the hottest and driest bioregions on Earth, crossing the Horn of Africa into Yemen and Saudi Arabia',
      ],
      sourceIds: ['one-earth-at22', 'one-earth-eco-45', 'one-earth-eco-56', 'one-earth-eco-59', 'one-earth-eco-92', 'one-earth-eco-93', 'one-earth-eco-95', 'one-earth-eco-105', 'one-earth-eco-106', 'one-earth-eco-107', 'one-earth-eco-108', 'one-earth-eco-109', 'one-earth-eco-115'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Predominantly hyper-arid to arid tropical, with low, erratic rainfall generally below 100 to about 400 mm per year and one of the hottest and driest climates on Earth. Coastal fog and dew at higher fog-zone elevations sustain unique South Arabian fog woodlands, and strong seasonal monsoonal influences and southwest monsoon upwelling occur off Socotra. Rainfall maxima fall on the higher escarpment slopes.',
        annualPrecipitationMm: { min: 100, max: 400 },
      },
      sourceIds: ['one-earth-at22', 'one-earth-eco-45', 'one-earth-eco-56', 'one-earth-eco-59', 'one-earth-eco-92', 'one-earth-eco-93', 'one-earth-eco-95', 'one-earth-eco-105', 'one-earth-eco-106', 'one-earth-eco-107', 'one-earth-eco-108', 'one-earth-eco-109', 'one-earth-eco-115'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'generally sparse xeric scrub, bushland and desert grassland at low elevations, dominated by acacia-commiphora elements',
        'fringing Red Sea mangroves of Avicennia and Rhizophora along sheltered creeks',
        'mist- and cloud-supported woodlands of Juniperus, Olea and the Socotra-endemic dragon blood tree Dracaena cinnabari, plus frankincense Boswellia sacra, on the Yemeni and Saudi highlands',
        'endemic-rich flora on Socotra with more than 30 percent endemism, and diverse escarpment shrublands and woodlands with high local endemism',
      ],
      sourceIds: ['one-earth-at22', 'one-earth-eco-45', 'one-earth-eco-56', 'one-earth-eco-59', 'one-earth-eco-92', 'one-earth-eco-93', 'one-earth-eco-95', 'one-earth-eco-105', 'one-earth-eco-106', 'one-earth-eco-107', 'one-earth-eco-108', 'one-earth-eco-109', 'one-earth-eco-115'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'coastal fog interception at the escarpment fog zone creating distinctive fog woodlands',
        'monsoon-driven upwelling and marine productivity off Socotra',
        'Red Sea mangrove ecosystem dynamics, nutrient cycling and nursery function',
        'island biogeography on Socotra and Abd al-Kuri, with high endemism and adaptive radiation',
        'extreme aridity driving species refugia in high-elevation ranges',
      ],
      sourceIds: ['one-earth-at22', 'one-earth-eco-45', 'one-earth-eco-56', 'one-earth-eco-59', 'one-earth-eco-92', 'one-earth-eco-93', 'one-earth-eco-95', 'one-earth-eco-105', 'one-earth-eco-106', 'one-earth-eco-107', 'one-earth-eco-108', 'one-earth-eco-109', 'one-earth-eco-115'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 22% with a protection level of 3. Protected areas include the Socotra Archipelago UNESCO World Heritage Site, Wadi Dawkah frankincense reserve, Jabal Samhan Nature Reserve, the Farasan Islands, Eritrea\u2019s Dahlak Archipelago and coastal reserves along the Red Sea; threats include overgrazing, charcoal production, coastal urbanization, mangrove loss, poaching of the Arabian leopard and ibex, and unsustainable frankincense harvesting, with priority actions focusing on community-based rangeland and mangrove management, stronger protection of fog woodlands and Socotra endemics, and sustainable frankincense livelihoods.',
      sourceIds: ['one-earth-at22', 'one-earth-eco-45', 'one-earth-eco-56', 'one-earth-eco-59', 'one-earth-eco-92', 'one-earth-eco-93', 'one-earth-eco-95', 'one-earth-eco-105', 'one-earth-eco-106', 'one-earth-eco-107', 'one-earth-eco-108', 'one-earth-eco-109', 'one-earth-eco-115'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:somali-wild-ass',
      'species:common-leopard',
      'species:nubian-ibex',
      'species:arabian-tahr',
      'species:gerenuk',
      'species:dibatag',
      'species:green-sea-turtle',
      'species:dugong',
    ],
    countryIds: ['DJ', 'SO', 'SD', 'EG', 'YE', 'SA', 'ER', 'OM'],
    sources: ['one-earth-at22', 'one-earth-eco-45', 'one-earth-eco-56', 'one-earth-eco-59', 'one-earth-eco-92', 'one-earth-eco-93', 'one-earth-eco-95', 'one-earth-eco-105', 'one-earth-eco-106', 'one-earth-eco-107', 'one-earth-eco-108', 'one-earth-eco-109', 'one-earth-eco-115'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at24',
    summary: {
      value:
        'The Cape Verde Islands bioregion comprises a single ecoregion spanning ten volcanic islands in the tropical eastern Atlantic, roughly 570 km west of Senegal. Long deforested and markedly dry, the archipelago retains relict dry-forest stands in deep valleys and on higher slopes, while its offshore islets support Critically Endangered endemics such as the Raso lark and one of the Atlantic\u2019s largest loggerhead sea turtle rookeries.',
      sourceIds: ['one-earth-at24', 'one-earth-eco-31'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'archipelago of ten volcanic islands in the tropical eastern Atlantic Ocean, about 570 km west of Senegal',
        'volcanic islands, many with extinct volcanoes and some historically active such as Fogo and its Pico do Fogo summit',
        'rugged mountainous interiors, dry coastal plains, dramatic cliffs, deep valleys (ribeiras) and sandy beaches important for sea turtles',
        'islands substantially deforested and dry, with visible erosion',
      ],
      sourceIds: ['one-earth-at24', 'one-earth-eco-31'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical, dry and markedly seasonal, with a long dry season occupying most of the year and a short wet season from August to October. Mean temperatures range from about 20 to 27\u00B0C while rainfall is low and highly variable, averaging about 100 to 500 mm depending on island and elevation, and droughts are frequent. Strong trade winds prevail and altitude moderates temperatures on the higher islands such as Santiago and Santo Antao.',
        annualPrecipitationMm: { min: 100, max: 500 },
        temperatureC: { min: 20, max: 27 },
      },
      sourceIds: ['one-earth-at24', 'one-earth-eco-31'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'originally largely dry forests and dry shrublands, most of the native dry forest now destroyed',
        'relict stands remain in some deep valleys and higher, moister slopes, especially on Santo Antao and Santiago',
        'endemic-rich flora, including many endemic species, with remnants of endemic dry-forest trees and shrubs',
        'agriculture with crops, coffee and sugarcane, plus introduced species such as Prosopis and agave, occupy much of the lower land',
      ],
      sourceIds: ['one-earth-at24', 'one-earth-eco-31'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'sea turtle nesting migrations, with the archipelago among the most important loggerhead nesting grounds in the Atlantic, chiefly on Boa Vista and Sal',
        'oceanic island biogeography with high floral endemism and relictual dry-forest communities',
        'seabird breeding colonies on offshore islets',
        'wind-driven erosion and aridity shaping vegetation, with strong El Nino and NAO-linked rainfall variability driving drought cycles',
      ],
      sourceIds: ['one-earth-at24', 'one-earth-eco-31'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 3% with a protection level of 9. Protected areas include the Raso and Branco islets nature reserves, Boa Vista turtle-nesting beaches, Fogo Natural Park and several integral and natural reserves; threats include habitat destruction and overgrazing, invasive rats, cats, goats and Prosopis, coastal development, drought and the very small populations of endemic species, with priority actions protecting and managing turtle-nesting beaches, controlling invasive predators on key islets and restoring relict dry forests.',
      sourceIds: ['one-earth-at24', 'one-earth-eco-31'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:raso-lark',
      'species:cape-verde-swift',
      'species:loggerhead-sea-turtle',
      'species:cape-verde-giant-gecko',
    ],
    countryIds: ['CV'],
    sources: ['one-earth-at24', 'one-earth-eco-31'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at7',
    summary: {
      value:
        'East African Coastal Forests (AT7) extends in a narrow band nearly the entire length of Africa\u2019s eastern coast, from South Africa\u2019s Eastern Cape through Mozambique, Tanzania, Kenya, and into southern Somalia. Seven ecoregions encompassing nearly 36 million hectares of tropical and subtropical moist forests make this coastal belt a biodiversity hotspot with over 11,000 species of plants and animals, including 3,000 species of mollusks and 1,500 species of fish.',
      sourceIds: [
        'one-earth-at7',
        'one-earth-eco-16',
        'one-earth-eco-19',
        'one-earth-eco-25',
        'one-earth-eco-28',
        'one-earth-eco-75',
        'one-earth-eco-112',
        'one-earth-eco-116',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'narrow coastal band stretching from South Africa\u2019s Eastern Cape to southern Somalia',
        'coastal dune forests, sand forests, and scarp forests in the south',
        'estuarine floodplains and mangrove deltas in Mozambique and Tanzania',
        'offshore islands including Pemba, Unguja, Mafia, and Bazaruto',
      ],
      sourceIds: [
        'one-earth-at7',
        'one-earth-eco-16',
        'one-earth-eco-19',
        'one-earth-eco-25',
        'one-earth-eco-28',
        'one-earth-eco-112',
        'one-earth-eco-116',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Subtropical in the south with mean maximum temperatures of 15–24°C, transitioning to tropical in the north with mean temperatures above 25°C; annual rainfall varies from 600 mm inland to over 2,000 mm on wetter islands; distinct rainy seasons with peak precipitation in the austral summer.',
        annualPrecipitationMm: { min: 600, max: 2000 },
      },
      sourceIds: [
        'one-earth-eco-16',
        'one-earth-eco-19',
        'one-earth-eco-25',
        'one-earth-eco-28',
      ],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'tropical and subtropical moist forests across seven ecoregions',
        'coastal dune forests, sand forests, and scarp forests',
        'mangrove forests with ten species across East African and Southern African coasts',
        'flooded savanna and freshwater swamp forests on river deltas',
      ],
      sourceIds: [
        'one-earth-at7',
        'one-earth-eco-16',
        'one-earth-eco-19',
        'one-earth-eco-25',
        'one-earth-eco-28',
        'one-earth-eco-112',
        'one-earth-eco-116',
      ],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'global biodiversity hotspot with 11,000 species of plants and animals',
        'high plant endemism on sandstone outcrops and isolated plateaus',
        'island biogeography and tectonic uplift diversifying habitats',
        'mangrove–estuary–marine connectivity supporting juvenile fish and crustaceans',
      ],
      sourceIds: [
        'one-earth-at7',
        'one-earth-eco-16',
        'one-earth-eco-19',
        'one-earth-eco-25',
        'one-earth-eco-28',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection level of 7 against a conservation target of 23% across the bioregion. Key protected areas include Greater St. Lucia Wetland Park, iSimangaliso Wetland Park (World Heritage Site), Arabuko-Sokoke National Park, Quirimbas National Park, Bazaruto National Park, and the Rufiji-Mafia-Kilwa Ramsar site. Principal threats include agricultural expansion, charcoal production, commercial logging, invasive alien species, coastal development, and climate change-driven sea level rise. Priority actions are promoting forest restoration and connectivity, supporting sustainable harvesting regimes, enhancing environmental legislation for mangrove and coastal protection, and establishing protected areas in key biodiversity areas.',
      sourceIds: [
        'one-earth-at7',
        'one-earth-eco-16',
        'one-earth-eco-19',
        'one-earth-eco-25',
        'one-earth-eco-28',
        'one-earth-eco-75',
        'one-earth-eco-112',
        'one-earth-eco-116',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:pemba-flying-fox',
      'species:african-elephant',
      'species:leatherback-turtle',
      'species:zanzibar-red-colobus',
      'species:rondo-dwarf-galago',
      'species:ngoye-cycad',
      'species:knysna-turaco',
      'species:loggerhead-turtle',
    ],
    countryIds: ['ZA', 'MZ', 'SZ', 'KE', 'TZ', 'SO', 'MW'],
    sources: [
      'one-earth-at7',
      'one-earth-eco-16',
      'one-earth-eco-19',
      'one-earth-eco-25',
      'one-earth-eco-28',
      'one-earth-eco-75',
      'one-earth-eco-112',
      'one-earth-eco-116',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at6',
    summary: {
      value:
        'The Madagascar Island bioregion (AT6), part of the Madagascar & Eastern Afrotropics subrealm, is separated from the African continent by the Mozambique Channel and dominated by humid tropical forests in the east, drylands in the south, and dry forests in the north. Its eight ecoregions cover more than 59 million hectares, making it the fourth largest island in the world. Physical isolation has produced extraordinary biodiversity, with nearly 15,000 plant species, four-fifths of them endemic, and over 100 lemur species.',
      sourceIds: [
        'one-earth-at6',
        'one-earth-eco-17',
        'one-earth-eco-18',
        'one-earth-eco-32',
        'one-earth-eco-83',
        'one-earth-eco-96',
        'one-earth-eco-99',
        'one-earth-eco-100',
        'one-earth-eco-114',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'separated from the African continent by the Mozambique Channel',
        'humid tropical forests covering the eastern side',
        'drylands in the south and dry forests in the north',
        'a total land area exceeding 59 million hectares as the fourth largest island in the world',
      ],
      sourceIds: ['one-earth-at6'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Strongly varied, from humid tropical east with rainfall generally exceeding 2,000 mm per year, through temperate-influenced highlands with around 1,500 mm, to dry and semi-arid south and west where annual rainfall falls to 500 mm or less; a rainshadow west of the central highlands drives the aridity.',
      },
      sourceIds: ['one-earth-at6'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'humid tropical forests in the east',
        'dry deciduous forests in the north',
        'spiny thickets and succulent woodlands in the south and west',
        'ericoid thickets, xeric scrub, and mangrove forests completing the island\u2019s ecosystems',
      ],
      sourceIds: ['one-earth-at6'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'physical isolation from the African continent driving extraordinary endemism',
        'nearly 15,000 plant species with four-fifths found nowhere else on Earth',
        'lemurs as the keystone mammals of the island, with over 100 species recorded',
        'the majority of its 300 bird and 260 reptile species endemic to the island',
      ],
      sourceIds: ['one-earth-at6'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a protection target of 24% for AT6 with a protection level of 2. Across its eight ecoregions, slash-and-burn cultivation, wildfire, deforestation, wetland conversion, invasive species, and habitat fragmentation are the principal threats. Priority actions include restoring forest corridors, eradicating invasive species, protecting flagship species such as the fossa and radiated tortoise, and strengthening protected area networks and connectivity.',
      sourceIds: ['one-earth-at6'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:fossa',
      'species:golden-crowned-sifaka',
      'species:verreauxs-sifaka',
      'species:radiated-tortoise',
      'species:madagascar-fish-eagle',
      'species:dugong',
    ],
    countryIds: ['MG', 'TF'],
    sources: [
      'one-earth-at6',
      'one-earth-eco-17',
      'one-earth-eco-18',
      'one-earth-eco-32',
      'one-earth-eco-83',
      'one-earth-eco-96',
      'one-earth-eco-99',
      'one-earth-eco-100',
      'one-earth-eco-114',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at20',
    summary: {
      value:
        'West Sudanian Savanna (AT20) spans the Sudanian zone from Senegal to the Central African Republic. It is a broad savanna woodland belt dominated by Isoberlinia and Terminalia species, with a pronounced dry season and annual fires shaping the vegetation.',
      sourceIds: [
        'one-earth-at20',
        'one-earth-eco-43',
        'one-earth-eco-49',
        'one-earth-eco-62',
        'one-earth-eco-74',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'broad savanna plains',
        'Isoberlinia woodland zones',
        'seasonal river floodplains',
        'lateritic plateaus and inselbergs',
      ],
      sourceIds: [
        'one-earth-at20',
        'one-earth-eco-43',
        'one-earth-eco-49',
        'one-earth-eco-62',
        'one-earth-eco-74',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical wet-and-dry with 6–8 month dry season; annual rainfall 800–1,300 mm; mean temperatures 25–28°C.',
        annualPrecipitationMm: { min: 800, max: 1300 },
      },
      sourceIds: ['one-earth-eco-43', 'one-earth-eco-62'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Isoberlinia doka and tomentosa woodland',
        'Terminalia and Combretum savanna',
        'Andropogon and Hyparrhenia grasses',
        'riparian forest corridors',
      ],
      sourceIds: ['one-earth-eco-43', 'one-earth-eco-62'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'annual dry-season fires maintaining savanna structure',
        'seasonal ungulate migrations',
        'termite mound nutrient hotspots',
        'riverine gallery forest dynamics',
      ],
      sourceIds: ['one-earth-at20', 'one-earth-eco-43', 'one-earth-eco-62'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Large protected areas include W, Arly, and Pendjari parks (WAP complex). Pressures: agricultural expansion, poaching, pastoralism, and climate-driven desertification. Elephant and lion populations are key conservation targets.',
      sourceIds: ['one-earth-at20', 'one-earth-eco-43', 'one-earth-eco-62', 'one-earth-eco-74'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:african-elephant',
      'species:lion',
      'species:roan-antelope',
      'species:kori-bustard',
    ],
    countryIds: ['SN', 'ML', 'BF', 'NE', 'NG', 'TD', 'CF', 'CM'],
    sources: [
      'one-earth-at20',
      'one-earth-eco-43',
      'one-earth-eco-49',
      'one-earth-eco-62',
      'one-earth-eco-74',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at23',
    summary: {
      value:
        'Sahel Acacia Savannas (AT23) forms the northern Sahelian belt from Mauritania to Sudan. This semi-arid transition zone between the Sahara and Sudanian savannas is dominated by Acacia and Commiphora shrublands on sandy soils, with seasonal wetlands and the Lake Chad and Inner Niger Delta flooded systems.',
      sourceIds: ['one-earth-at23', 'one-earth-eco-53', 'one-earth-eco-71', 'one-earth-eco-72'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Sahelian sand plains and dunes',
        'Acacia-Commiphora shrub steppe',
        'Inner Niger Delta floodplains',
        'Lake Chad basin and seasonal wetlands',
        'seasonal wadis and drainage lines',
      ],
      sourceIds: ['one-earth-at23', 'one-earth-eco-53', 'one-earth-eco-71', 'one-earth-eco-72'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Semi-arid Sahelian with 8–10 month dry season; annual rainfall 200–600 mm; high interannual variability; temperatures 25–35°C.',
        annualPrecipitationMm: { min: 200, max: 600 },
      },
      sourceIds: ['one-earth-eco-53', 'one-earth-eco-71', 'one-earth-eco-72'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Acacia tortilis and senegal shrublands',
        'Commiphora africana thickets',
        'Leptadenia and Maerua on dunes',
        'Cyperus and Phragmites in seasonal wetlands',
      ],
      sourceIds: ['one-earth-eco-53', 'one-earth-eco-71', 'one-earth-eco-72'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'highly variable rainfall driving boom-bust population cycles',
        'seasonal flood pulse in Inner Niger Delta and Lake Chad',
        'nomadic pastoralism and transhumance',
        'desert locust outbreak dynamics',
      ],
      sourceIds: ['one-earth-at23', 'one-earth-eco-53', 'one-earth-eco-71', 'one-earth-eco-72'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Sahelian wetlands (Inner Niger Delta, Lake Chad) are Ramsar sites. Pressures: climate-driven lake shrinkage, irrigation withdrawals, overgrazing, and insecurity limiting conservation access. Migratory waterbirds and Sahelian antelopes are flagship species.',
      sourceIds: ['one-earth-at23', 'one-earth-eco-53', 'one-earth-eco-71', 'one-earth-eco-72'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:dama-gazelle',
      'species:scimitar-horned-oryx',
      'species:african-wild-dog',
      'species:black-crowned-crane',
    ],
    countryIds: ['MR', 'ML', 'NE', 'TD', 'SD', 'BF', 'NG'],
    sources: ['one-earth-at23', 'one-earth-eco-53', 'one-earth-eco-71', 'one-earth-eco-72'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa1',
    summary: {
      value:
        'Russian Arctic Desert Islands (PA1) comprises the isolated Arctic islands of Franz Josef Land, Severnaya Zemlya, and the northern Novaya Zemlya. The single ecoregion is a polar desert of barren rock, ice caps, and sparse cryptogamic vegetation, representing the easternmost extent of the Palearctic Tundra.',
      sourceIds: ['one-earth-pa1', 'one-earth-eco-778'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Franz Josef Land archipelago',
        'Severnaya Zemlya islands',
        'northern Novaya Zemlya',
        'ice caps and nunataks',
        'polar desert plains',
      ],
      sourceIds: ['one-earth-pa1', 'one-earth-eco-778'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'High Arctic polar desert with mean July temperatures 0–3°C, annual precipitation 50–150 mm; continuous permafrost >500 m thick.',
        annualPrecipitationMm: { min: 50, max: 150 },
      },
      sourceIds: ['one-earth-eco-778'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'crustose lichens on rock',
        'cyanobacterial soil crusts',
        'sparse Saxifraga and Draba cushion plants',
        'sparse sedge in snowbeds',
      ],
      sourceIds: ['one-earth-eco-778'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'freeze-thaw patterned ground formation',
        'glacial meltwater pulses',
        'seabird colony nutrient enrichment',
        'polar bear denning on sea ice',
      ],
      sourceIds: ['one-earth-pa1', 'one-earth-eco-778'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Franz Josef Land and Severnaya Zemlya are Russian Arctic National Park. Minimal human presence; climate warming is the primary threat, driving glacial retreat and vegetation shifts. Key species: polar bear, ivory gull, walrus.',
      sourceIds: ['one-earth-pa1', 'one-earth-eco-778'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: ['species:polar-bear', 'species:ivory-gull', 'species:walrus'],
    countryIds: ['RU'],
    sources: ['one-earth-pa1', 'one-earth-eco-778'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa4',
    summary: {
      value:
        'Greater Eurasian Tundra (PA4) spans the mainland tundra from the Kola Peninsula across northern Siberia to the Novosibirsk Islands. Four ecoregions form a west–east gradient: Kola Peninsula tundra, Northeast Siberian coastal tundra, Northwest Russian-Novaya Zemlya tundra, and Novosibirsk Islands Arctic desert.',
      sourceIds: [
        'one-earth-pa4',
        'one-earth-eco-774',
        'one-earth-eco-775',
        'one-earth-eco-776',
        'one-earth-eco-777',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Kola Peninsula fells and plateaus',
        'East Siberian coastal lowlands and deltas',
        'Novaya Zemlya mountains and glaciers',
        'Novosibirsk Islands Arctic desert',
        'Yana-Indigirka-Kolyma lowlands',
      ],
      sourceIds: [
        'one-earth-pa4',
        'one-earth-eco-774',
        'one-earth-eco-775',
        'one-earth-eco-776',
        'one-earth-eco-777',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'High Arctic to Low Arctic with strong west–east continentality gradient; July temperatures 3–10°C; annual precipitation 150–400 mm; continuous permafrost.',
        annualPrecipitationMm: { min: 150, max: 400 },
      },
      sourceIds: [
        'one-earth-eco-774',
        'one-earth-eco-775',
        'one-earth-eco-776',
        'one-earth-eco-777',
      ],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Dryas and Cassiope heath on Kola',
        'Salix and Betula dwarf scrub in Siberia',
        'polar desert on Novaya Zemlya and Novosibirsk Islands',
        'Carex and Eriophorum wetland meadows',
        'moss and fruticose lichen mats',
      ],
      sourceIds: [
        'one-earth-eco-774',
        'one-earth-eco-775',
        'one-earth-eco-776',
        'one-earth-eco-777',
      ],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'west–east continentality gradient driving species turnover',
        'permafrost thaw lake formation and drainage',
        'reindeer and caribou seasonal migrations',
        'seabird nutrient transfer on coasts and islands',
      ],
      sourceIds: [
        'one-earth-pa4',
        'one-earth-eco-774',
        'one-earth-eco-775',
        'one-earth-eco-776',
        'one-earth-eco-777',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Protected areas include Kandalaksha, Great Arctic, and Lena Delta zapovedniks. Pressures: oil and gas development (Yamal, Gydan), climate-driven shrub expansion, permafrost thaw, and changing migratory routes. Wild reindeer and Siberian crane are flagship species.',
      sourceIds: [
        'one-earth-pa4',
        'one-earth-eco-774',
        'one-earth-eco-775',
        'one-earth-eco-776',
        'one-earth-eco-777',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:wild-reindeer',
      'species:siberian-crane',
      'species:polar-bear',
      'species:arctic-fox',
    ],
    countryIds: ['RU', 'NO'],
    sources: [
      'one-earth-pa4',
      'one-earth-eco-774',
      'one-earth-eco-775',
      'one-earth-eco-776',
      'one-earth-eco-777',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:an2',
    summary: {
      value:
        "Antarctic Peninsula & Scotia Sea (AN2) spans the Antarctic Peninsula, the South Shetland Islands, the South Orkney Islands, and the Scotia Sea island chain. Six ecoregions form a north–south gradient from the milder maritime-influenced South Orkney and Scotia Sea islands through the northwest and northeast peninsula coasts to the colder central-south and southern peninsula, supporting some of Antarctica's richest terrestrial and marine ecosystems.",
      sourceIds: [
        'one-earth-an2',
        'one-earth-eco-118',
        'one-earth-eco-126',
        'one-earth-eco-127',
        'one-earth-eco-129',
        'one-earth-eco-130',
        'one-earth-eco-131',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Antarctic Peninsula mountain spine and fjords',
        'South Shetland Islands volcanic arc',
        'South Orkney Islands and Scotia Sea islands',
        'coastal ice-free oases and nunataks',
        'ice shelves and seasonal sea ice',
      ],
      sourceIds: [
        'one-earth-an2',
        'one-earth-eco-118',
        'one-earth-eco-126',
        'one-earth-eco-127',
        'one-earth-eco-129',
        'one-earth-eco-130',
        'one-earth-eco-131',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Maritime Antarctic with strong north–south gradient; northern islands -5 to 2°C mean annual, southern peninsula -15 to -20°C; precipitation 300–800 mm; strong westerly winds.',
        annualPrecipitationMm: { min: 300, max: 800 },
      },
      sourceIds: [
        'one-earth-eco-118',
        'one-earth-eco-126',
        'one-earth-eco-127',
        'one-earth-eco-129',
        'one-earth-eco-130',
        'one-earth-eco-131',
      ],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Antarctic hair grass and pearlwort',
        'moss carpets (Bryum, Andreaea)',
        'fruticose lichens (Usnea, Himantormia)',
        'prasiola crispa on bird-influenced sites',
        'cyanobacterial mats in meltwater streams',
      ],
      sourceIds: [
        'one-earth-eco-118',
        'one-earth-eco-126',
        'one-earth-eco-127',
        'one-earth-eco-129',
        'one-earth-eco-130',
        'one-earth-eco-131',
      ],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'marine nutrient transfer by penguins and seals',
        'glacial retreat exposing new terrain',
        'katabatic wind and föhn events',
        'seasonal sea-ice dynamics',
        'volcanic activity on Deception Island',
      ],
      sourceIds: [
        'one-earth-an2',
        'one-earth-eco-118',
        'one-earth-eco-126',
        'one-earth-eco-127',
        'one-earth-eco-129',
        'one-earth-eco-130',
        'one-earth-eco-131',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Entire bioregion within the Antarctic Treaty System; Antarctic Specially Protected Areas (ASPAs) protect key sites. Pressures: climate-driven ice loss, non-native species (Poa annua), tourism concentration, and krill fishery impacts on predator populations. Emperor penguin colonies at risk from sea-ice loss.',
      sourceIds: [
        'one-earth-an2',
        'one-earth-eco-118',
        'one-earth-eco-126',
        'one-earth-eco-127',
        'one-earth-eco-129',
        'one-earth-eco-130',
        'one-earth-eco-131',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:emperor-penguin',
      'species:adelie-penguin',
      'species:chinstrap-penguin',
      'species:antarctic-petrel',
      'species:weddell-seal',
      'species:antarctic-krill',
    ],
    countryIds: ['AQ'],
    sources: [
      'one-earth-an2',
      'one-earth-eco-118',
      'one-earth-eco-126',
      'one-earth-eco-127',
      'one-earth-eco-129',
      'one-earth-eco-130',
      'one-earth-eco-131',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt26',
    summary: {
      value:
        "Caribbean Islands (NT26) encompasses the Greater and Lesser Antilles plus the Bahamas and Turks & Caicos. Six tropical moist forest ecoregions span the archipelago from the Cuban and Hispaniolan moist forests of the Greater Antilles through the Jamaican and Puerto Rican moist forests to the Leeward and Windward Islands moist forests of the Lesser Antilles, with additional dry forest, coniferous, wetland, xeric, and mangrove ecoregions completing the bioregion's diversity.",
      sourceIds: [
        'one-earth-nt26',
        'one-earth-eco-459',
        'one-earth-eco-468',
        'one-earth-eco-472',
        'one-earth-eco-475',
        'one-earth-eco-495',
        'one-earth-eco-517',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic and limestone islands of the Greater Antilles',
        'coral limestone islands of the Lesser Antilles',
        'coastal mangroves and seagrass beds',
        'montane cloud forests on volcanic peaks',
        'limestone karst with cave systems',
      ],
      sourceIds: [
        'one-earth-nt26',
        'one-earth-eco-459',
        'one-earth-eco-468',
        'one-earth-eco-472',
        'one-earth-eco-475',
        'one-earth-eco-495',
        'one-earth-eco-517',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland and montane tropical moist forest',
        'dry forest and cactus scrub on leeward coasts',
        'pine and palm savannas on limestone substrates',
        'mangroves and coastal wetlands',
        'xeric shrublands on arid islands',
      ],
      sourceIds: [
        'one-earth-eco-459',
        'one-earth-eco-468',
        'one-earth-eco-472',
        'one-earth-eco-475',
        'one-earth-eco-495',
        'one-earth-eco-517',
      ],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'trade wind orographic rainfall gradient',
        'hurricane disturbance and forest regeneration',
        'marine nutrient subsidies from seabirds and fish',
        'island biogeography and endemic radiation',
        'coral reef–seagrass–mangrove connectivity',
      ],
      sourceIds: [
        'one-earth-nt26',
        'one-earth-eco-459',
        'one-earth-eco-468',
        'one-earth-eco-472',
        'one-earth-eco-475',
        'one-earth-eco-495',
        'one-earth-eco-517',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'High endemism and severe habitat loss; over 90% of original forest cleared on many islands. Key threats: tourism development, invasive species (mongooses, rats, lionfish), climate change (sea-level rise, hurricane intensification). Protected areas include national parks in Cuba, Dominican Republic, Jamaica, Puerto Rico, and Bahamas. Regional conservation initiatives: Caribbean Challenge Initiative, Critical Ecosystem Partnership Fund.',
      sourceIds: [
        'one-earth-nt26',
        'one-earth-eco-459',
        'one-earth-eco-468',
        'one-earth-eco-472',
        'one-earth-eco-475',
        'one-earth-eco-495',
        'one-earth-eco-517',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:cuban-trogon',
      'species:hispaniolan-trogon',
      'species:hispaniolan-solenodon',
    ],
    countryIds: [
      'CU',
      'DO',
      'HT',
      'JM',
      'PR',
      'BS',
      'TT',
      'AG',
      'DM',
      'GD',
      'KN',
      'LC',
      'VC',
      'BQ',
      'CW',
      'SX',
      'AW',
      'AI',
      'VG',
      'VI',
      'KY',
      'TC',
      'MQ',
      'GP',
      'BL',
      'MF',
      'SR',
    ],
    sources: [
      'one-earth-nt26',
      'one-earth-eco-459',
      'one-earth-eco-468',
      'one-earth-eco-472',
      'one-earth-eco-475',
      'one-earth-eco-495',
      'one-earth-eco-517',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt25',
    summary: {
      value:
        'Central American Mixed Forests (NT25) spans the Central American isthmus from southern Mexico to northwestern Colombia. This bioregion encompasses 13 ecoregions spanning moist forests, dry forests, montane cloud forests, pine-oak forests, savannas, and mangroves, forming a critical biological corridor between North and South America.',
      sourceIds: [
        'one-earth-nt25',
        'one-earth-eco-449',
        'one-earth-eco-450',
        'one-earth-eco-451',
        'one-earth-eco-452',
        'one-earth-eco-453',
        'one-earth-eco-455',
        'one-earth-eco-458',
        'one-earth-eco-502',
        'one-earth-eco-527',
        'one-earth-eco-528',
        'one-earth-eco-553',
        'one-earth-eco-573',
        'one-earth-eco-605',
        'one-earth-eco-617',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic mountain spine (Central American Volcanic Arc)',
        'Caribbean and Pacific coastal lowlands',
        'montane cloud forests on volcanic peaks',
        'seasonal dry forests on Pacific slopes',
        'pine-oak savannas on interior plateaus',
        'coastal mangroves and estuaries',
      ],
      sourceIds: [
        'one-earth-nt25',
        'one-earth-eco-449',
        'one-earth-eco-450',
        'one-earth-eco-451',
        'one-earth-eco-452',
        'one-earth-eco-453',
        'one-earth-eco-455',
        'one-earth-eco-458',
        'one-earth-eco-502',
        'one-earth-eco-527',
        'one-earth-eco-528',
        'one-earth-eco-553',
        'one-earth-eco-573',
        'one-earth-eco-605',
        'one-earth-eco-617',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical with strong elevation and coast-to-coast gradients; wet Caribbean slopes 2,000–5,000 mm, drier Pacific slopes 1,000–2,500 mm; mean annual 24–28°C lowlands, 10–18°C montane; distinct dry season Dec–Apr on Pacific side.',
        annualPrecipitationMm: { min: 500, max: 5000 },
      },
      sourceIds: [
        'one-earth-eco-458',
        'one-earth-eco-527',
        'one-earth-eco-528',
        'one-earth-eco-553',
        'one-earth-eco-573',
        'one-earth-eco-605',
        'one-earth-eco-617',
      ],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Caribbean lowland and montane moist forests',
        'Pacific seasonal dry forests and thornscrub',
        'montane cloud forests and oak-pine forests',
        'pine-oak savannas on volcanic plateaus',
        'coastal mangroves and estuarine wetlands',
        'subalpine páramo and grasslands on highest peaks',
      ],
      sourceIds: [
        'one-earth-eco-449',
        'one-earth-eco-450',
        'one-earth-eco-451',
        'one-earth-eco-452',
        'one-earth-eco-453',
        'one-earth-eco-455',
        'one-earth-eco-458',
        'one-earth-eco-502',
        'one-earth-eco-527',
        'one-earth-eco-528',
        'one-earth-eco-553',
        'one-earth-eco-573',
        'one-earth-eco-605',
        'one-earth-eco-617',
      ],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'volcanic arc orographic rainfall and cloud forest dynamics',
        'Central American biotic interchange corridor (Great American Biotic Interchange)',
        'seasonal dry-wet forest phenology and fire regimes',
        'pine-oak savanna fire ecology and grazing',
        'mangrove-estuary-marine connectivity',
        'highland páramo and cloud forest water capture',
      ],
      sourceIds: [
        'one-earth-nt25',
        'one-earth-eco-449',
        'one-earth-eco-450',
        'one-earth-eco-451',
        'one-earth-eco-452',
        'one-earth-eco-453',
        'one-earth-eco-455',
        'one-earth-eco-458',
        'one-earth-eco-502',
        'one-earth-eco-527',
        'one-earth-eco-528',
        'one-earth-eco-553',
        'one-earth-eco-573',
        'one-earth-eco-605',
        'one-earth-eco-617',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "Mesoamerican Biological Corridor initiative spans this bioregion. Key protected areas: Maya Biosphere (GT), Río Plátano (HN), La Amistad (CR/PA), Darien (PA). Pressures: cattle ranching, African oil palm, logging, drug trafficking, highway expansion. Critical for jaguar, Baird's tapir, harpy eagle, and scarlet macaw connectivity.",
      sourceIds: [
        'one-earth-nt25',
        'one-earth-eco-449',
        'one-earth-eco-450',
        'one-earth-eco-451',
        'one-earth-eco-452',
        'one-earth-eco-453',
        'one-earth-eco-455',
        'one-earth-eco-458',
        'one-earth-eco-502',
        'one-earth-eco-527',
        'one-earth-eco-528',
        'one-earth-eco-553',
        'one-earth-eco-573',
        'one-earth-eco-605',
        'one-earth-eco-617',
      ],
      derivation: 'authored-summary',
    },
    countryIds: ['MX', 'GT', 'BZ', 'SV', 'HN', 'NI', 'CR', 'PA', 'CO'],
    sources: [
      'one-earth-nt25',
      'one-earth-eco-449',
      'one-earth-eco-450',
      'one-earth-eco-451',
      'one-earth-eco-452',
      'one-earth-eco-453',
      'one-earth-eco-455',
      'one-earth-eco-458',
      'one-earth-eco-502',
      'one-earth-eco-527',
      'one-earth-eco-528',
      'one-earth-eco-553',
      'one-earth-eco-573',
      'one-earth-eco-605',
      'one-earth-eco-617',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt27',
    summary: {
      value:
        'Yucatan & Veracruz Mixed Forests (NT27) spans the Gulf-Caribbean lowlands from central Veracruz across the Yucatan Peninsula and into northern Guatemala and Belize. Ten ecoregions combine moist broadleaf forests, dry deciduous forests, pine savannas, and mangrove systems around the Gulf of Mexico, forming a transition between Mesoamerican and Neoarctic biotas.',
      sourceIds: [
        'one-earth-nt27',
        'one-earth-eco-489',
        'one-earth-eco-494',
        'one-earth-eco-501',
        'one-earth-eco-514',
        'one-earth-eco-515',
        'one-earth-eco-519',
        'one-earth-eco-550',
        'one-earth-eco-551',
        'one-earth-eco-564',
        'one-earth-eco-613',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'flat limestone karst of the Yucatan Peninsula',
        'Gulf coastal plain of Veracruz',
        'Sierra de los Tuxtlas volcanic massif',
        'Petén-Itzá rolling lowland',
        'coastal lagoons and barrier islands',
      ],
      sourceIds: [
        'one-earth-nt27',
        'one-earth-eco-489',
        'one-earth-eco-494',
        'one-earth-eco-501',
        'one-earth-eco-519',
        'one-earth-eco-564',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'seasonally dry tropical forest on Guerrero-Yucatan limestone',
        'semievergreen and evergreen moist forest',
        'submontane and montane broadleaf forest',
        'carr and seasonally flooded freshwater swamp',
        'pine savanna with isolated oak',
        'coastal mangroves and brackish lagoon vegetation',
      ],
      sourceIds: [
        'one-earth-eco-489',
        'one-earth-eco-494',
        'one-earth-eco-501',
        'one-earth-eco-514',
        'one-earth-eco-515',
        'one-earth-eco-550',
        'one-earth-eco-551',
        'one-earth-eco-564',
      ],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'karst hydrology shaping wetland and cenote systems',
        'summer hurricane disturbance and regeneration',
        'seasonal deciduous phenology on limestone soils',
        'fire-maintained pine savanna dynamics',
        'coastal lagoon and mangrove nutrient exchange',
      ],
      sourceIds: [
        'one-earth-nt27',
        'one-earth-eco-489',
        'one-earth-eco-494',
        'one-earth-eco-519',
        'one-earth-eco-551',
        'one-earth-eco-564',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Key protected areas include the Calakmul Biosphere Reserve (Yucatan), Los Tuxtlas, Pantanos de Centla, and the Maya Biosphere in northern Guatemala. Pressures: intensive cattle ranching, sugar cane and oil palm expansion, tourism development, and karst wetland drainage. The region is a stronghold for jaguars, howler monkeys, and migratory waterbirds.',
      sourceIds: [
        'one-earth-nt27',
        'one-earth-eco-489',
        'one-earth-eco-494',
        'one-earth-eco-501',
        'one-earth-eco-519',
        'one-earth-eco-551',
        'one-earth-eco-564',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: ['species:jaguar', 'species:ocelot', 'species:roseate-spoonbill'],
    countryIds: ['MX', 'GT', 'BZ'],
    sources: [
      'one-earth-nt27',
      'one-earth-eco-489',
      'one-earth-eco-494',
      'one-earth-eco-501',
      'one-earth-eco-514',
      'one-earth-eco-515',
      'one-earth-eco-519',
      'one-earth-eco-550',
      'one-earth-eco-551',
      'one-earth-eco-564',
      'one-earth-eco-613',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt28',
    summary: {
      value:
        'Mexican Dry & Coniferous Forests (NT28) spans southern and western Mexico from Baja California to the Trans-Mexican Volcanic Belt. Fourteen ecoregions combine dry tropical forests, montane pine-oak forests, and xeric scrub along the Pacific slopes, forming an ecotone between the tropical lowlands and the high volcanic interior.',
      sourceIds: [
        'one-earth-nt28',
        'one-earth-eco-487',
        'one-earth-eco-521',
        'one-earth-eco-522',
        'one-earth-eco-534',
        'one-earth-eco-544',
        'one-earth-eco-545',
        'one-earth-eco-547',
        'one-earth-eco-556',
        'one-earth-eco-557',
        'one-earth-eco-558',
        'one-earth-eco-559',
        'one-earth-eco-607',
        'one-earth-eco-610',
        'one-earth-eco-614',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'steep Pacific-facing mountain slopes',
        'interior basins and valleys',
        'Trans-Mexican Volcanic Belt peaks',
        'Sierra de la Laguna massif of southern Baja California',
        'xeric foothills and thorn scrub',
      ],
      sourceIds: [
        'one-earth-nt28',
        'one-earth-eco-487',
        'one-earth-eco-522',
        'one-earth-eco-544',
        'one-earth-eco-556',
        'one-earth-eco-607',
        'one-earth-eco-610',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical dry with strong seasonal and elevational gradient; Pacific lowlands 600–1,200 mm with 5–8 month dry season, montane interior wetter; high volcanic peaks cooler with frost; mean annual 18–28°C lowlands.',
        annualPrecipitationMm: { min: 400, max: 2500 },
      },
      sourceIds: [
        'one-earth-eco-521',
        'one-earth-eco-522',
        'one-earth-eco-534',
        'one-earth-eco-545',
        'one-earth-eco-559',
        'one-earth-eco-607',
      ],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'deciduous and semi-deciduous tropical dry forest',
        'thorn scrub and xeric matorral',
        'oak-pine and pine-oak montane forest',
        'cloud forest remnants in sheltered ravines',
        'seasonally flooded freshwater swamp',
      ],
      sourceIds: [
        'one-earth-eco-487',
        'one-earth-eco-521',
        'one-earth-eco-522',
        'one-earth-eco-534',
        'one-earth-eco-544',
        'one-earth-eco-545',
        'one-earth-eco-547',
        'one-earth-eco-556',
        'one-earth-eco-557',
        'one-earth-eco-558',
        'one-earth-eco-559',
        'one-earth-eco-607',
        'one-earth-eco-610',
      ],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'pronounced dry-season deciduousness',
        'fire regimes shaping pine-oak forest structure',
        'elevational zonation from dry lowland to montane',
        'xeric endemism on isolated massifs',
        'hurricane disturbance along the Pacific coast',
      ],
      sourceIds: [
        'one-earth-nt28',
        'one-earth-eco-522',
        'one-earth-eco-544',
        'one-earth-eco-556',
        'one-earth-eco-559',
        'one-earth-eco-607',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Key protected areas include the Sierra de Manantlán, Sierra de la Laguna, and Chamelá-Cuixmala reserves. Pressures: dry forest conversion for maize, cattle and avocado, logging of pine-oak forests, and urban expansion. The bioregion is a center of endemism for conifers and montane birds.',
      sourceIds: [
        'one-earth-nt28',
        'one-earth-eco-521',
        'one-earth-eco-522',
        'one-earth-eco-544',
        'one-earth-eco-556',
        'one-earth-eco-558',
        'one-earth-eco-559',
        'one-earth-eco-607',
      ],
      derivation: 'authored-summary',
    },
    countryIds: ['MX'],
    sources: [
      'one-earth-nt28',
      'one-earth-eco-487',
      'one-earth-eco-521',
      'one-earth-eco-522',
      'one-earth-eco-534',
      'one-earth-eco-544',
      'one-earth-eco-545',
      'one-earth-eco-547',
      'one-earth-eco-556',
      'one-earth-eco-557',
      'one-earth-eco-558',
      'one-earth-eco-559',
      'one-earth-eco-607',
      'one-earth-eco-610',
      'one-earth-eco-614',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt29',
    summary: {
      value:
        'Mexican Subtropical Islands (NT29) covers the isolated oceanic islands of Revillagigedo and Clipperton in the eastern Pacific. Two ecoregions represent subtropical dry forest and shrub-grassland systems with exceptional marine connectivity, supporting charismatic seabirds, endemic landbirds, and endemic land reptiles.',
      sourceIds: ['one-earth-nt29', 'one-earth-eco-533', 'one-earth-eco-568'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Revillagigedo volcanic islands',
        'flat coral atoll of Clipperton Island',
        'rocky coasts and sea cliffs',
        'isolated crater lakes and guano terraces',
      ],
      sourceIds: ['one-earth-nt29', 'one-earth-eco-533', 'one-earth-eco-568'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Subtropical oceanic with strong marine influence; mild temperatures 20–27°C; rainfall 300–800 mm concentrated in the hurricane season; strong trade winds and frequent storms.',
        annualPrecipitationMm: { min: 300, max: 800 },
      },
      sourceIds: ['one-earth-eco-533', 'one-earth-eco-568'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'subtropical dry scrub and low forest',
        'grassy meadows and halophytic herbs',
        'endemic spurge and shrub thickets',
        'succulent and cactus communities',
      ],
      sourceIds: ['one-earth-eco-533', 'one-earth-eco-568'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'seabird-mediated nutrient cycling on guano terraces',
        'oceanic island endemism and colonization',
        'hurricane-driven disturbance and succession',
        'marine-terrestrial nutrient subsidies',
      ],
      sourceIds: ['one-earth-nt29', 'one-earth-eco-533', 'one-earth-eco-568'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Revillagigedo is a Mexican Biosphere Reserve and UNESCO World Heritage site surrounded by the largest fully protected marine reserve in North America. Clipperton is a French possession with minimal conservation management. Pressures: invasive species, seabird disturbance, and overfishing of surrounding waters.',
      sourceIds: ['one-earth-nt29', 'one-earth-eco-533', 'one-earth-eco-568'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX', 'FR'],
    sources: ['one-earth-nt29', 'one-earth-eco-533', 'one-earth-eco-568'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au1',
    summary: {
      value:
        'New Zealand (AU1) encompasses the North and South Islands, Stewart/Rakiura Island, and their adjacent temperate islands. Eleven ecoregions span lowland kauri forests, southern beech and podocarp forests, fiordland and montane forests, rakiura island forests, alpine montane grasslands, and Canterbury-Otago tussock grasslands.',
      sourceIds: [
        'one-earth-au1',
        'one-earth-eco-167',
        'one-earth-eco-169',
        'one-earth-eco-170',
        'one-earth-eco-171',
        'one-earth-eco-172',
        'one-earth-eco-173',
        'one-earth-eco-174',
        'one-earth-eco-175',
        'one-earth-eco-180',
        'one-earth-eco-190',
        'one-earth-eco-194',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'axial mountain ranges of the South Island (Southern Alps)',
        'North Island volcanic plateau',
        'kauri forests of Northland',
        'fiordland and glaciated coasts',
        'easterly Canterbury-Otago plains',
        'Chatham Islands archipelago',
      ],
      sourceIds: [
        'one-earth-au1',
        'one-earth-eco-169',
        'one-earth-eco-171',
        'one-earth-eco-172',
        'one-earth-eco-173',
        'one-earth-eco-180',
        'one-earth-eco-190',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'kauri and podocarp-broadleaf forest',
        'southern beech forest (Nothofagus)',
        'coastal and montane mixed forest',
        'tussock grassland and alpine herbfield',
        'island scrub and secondary woodland on Chatham Islands',
      ],
      sourceIds: [
        'one-earth-eco-170',
        'one-earth-eco-171',
        'one-earth-eco-172',
        'one-earth-eco-173',
        'one-earth-eco-180',
        'one-earth-eco-190',
        'one-earth-eco-194',
      ],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'active tectonics and alpine orogeny',
        'bird-driven seed dispersal and pollination mutualisms',
        'glacial history shaping montane biota',
        'fire and grazing dynamics in tussock grasslands',
        'oceanic isolation driving endemism',
      ],
      sourceIds: [
        'one-earth-au1',
        'one-earth-eco-169',
        'one-earth-eco-171',
        'one-earth-eco-180',
        'one-earth-eco-190',
        'one-earth-eco-194',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Extensive national park estate including Fiordland, Mount Cook/Aoraki, Westland Tai Poutini, and Kahurangi national parks. Pressures: introduced mammals (stoats, possums, rats, deer), forest clearance and pastoral conversion, and climate-driven alpine change. Iconic endemic species include kiwi, kakapo, kea, and yellow-eyed penguin, supported by predator-control and island-sanctuary programs.',
      sourceIds: [
        'one-earth-au1',
        'one-earth-eco-169',
        'one-earth-eco-171',
        'one-earth-eco-172',
        'one-earth-eco-180',
        'one-earth-eco-194',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: ['species:kea', 'species:kereru', 'species:takahe'],
    countryIds: ['NZ'],
    sources: [
      'one-earth-au1',
      'one-earth-eco-167',
      'one-earth-eco-169',
      'one-earth-eco-170',
      'one-earth-eco-171',
      'one-earth-eco-172',
      'one-earth-eco-173',
      'one-earth-eco-174',
      'one-earth-eco-175',
      'one-earth-eco-180',
      'one-earth-eco-190',
      'one-earth-eco-194',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au2',
    summary: {
      value:
        'Lord Howe & Norfolk Islands (AU2) comprises two isolated subtropical islands in the southwestern Pacific Ocean. Two ecoregions represent the Lord Howe Island and Norfolk Island subtropical moist forests, notable for their high endemism in palms, fruit pigeons, and land birds.',
      sourceIds: ['one-earth-au2', 'one-earth-eco-142', 'one-earth-eco-147'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic and basaltic island of Lord Howe with rugged peaks',
        'coral reef-fringed lagoon on Lord Howe',
        'Norfolk Island volcanic plateau',
        'sea cliffs and islets',
      ],
      sourceIds: ['one-earth-au2', 'one-earth-eco-142', 'one-earth-eco-147'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Howe palm and banyan-dominated subtropical forest',
        'Norfolk Island pine forest',
        'ferny hardwood forest on volcanic slopes',
        'coastal scrub and grassland',
      ],
      sourceIds: ['one-earth-eco-142', 'one-earth-eco-147'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'oceanic island endemism and speciation',
        'fruit pigeon seed dispersal',
        'seabird nutrient subsidies on coastal islets',
        'cyclonic storm disturbance',
      ],
      sourceIds: ['one-earth-au2', 'one-earth-eco-142', 'one-earth-eco-147'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "Lord Howe Island is a UNESCO World Heritage site with the world's southernmost true coral reef. Norfolk Island retains threatened subtropical forest remnants. Pressures: introduced rodents, feral species, tourism, and habitat clearance. Key species include the Lord Howe woodhen, norfolk green parrot, and norfolk boobook.",
      sourceIds: ['one-earth-au2', 'one-earth-eco-142', 'one-earth-eco-147'],
      derivation: 'authored-summary',
    },
    countryIds: ['AU', 'NF'],
    sources: ['one-earth-au2', 'one-earth-eco-142', 'one-earth-eco-147'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au16',
    summary: {
      value:
        'Subantarctic Antipodes Islands (AU16) covers the remote subantarctic island groups of the New Zealand region, including the Antipodes Islands. The single ecoregion represents subantarctic tundra and coastal herbfield supporting vast seabird and seal populations on windswept, isolated islands.',
      sourceIds: ['one-earth-au16', 'one-earth-eco-196'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic and tuff Antipodes Islands',
        'rugged subantarctic coastlines',
        'boggy tundra and herbfield plateaus',
        'sea stacks and seal colonies',
      ],
      sourceIds: ['one-earth-au16', 'one-earth-eco-196'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'wet subantarctic tundra',
        'coastal herbfield and cushion plants',
        'megaherb and tussock communities',
        'bog and wetland moss communities',
      ],
      sourceIds: ['one-earth-eco-196'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'seabird and seal nutrient enrichment',
        'ship rat predation pressure on endemic birds',
        'storm and wind disturbance',
        'oceanic isolation and endemism',
      ],
      sourceIds: ['one-earth-au16', 'one-earth-eco-196'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'The Antipodes Islands are a Nature Reserve and part of the New Zealand Subantarctic Islands UNESCO World Heritage site. The islands are rodent-free except for an introduced house-mouse population, which threatens endemic invertebrates and seabirds. New Zealand fur seals, southern royal albatross, and endemic Antipodes parakeets are key species.',
      sourceIds: ['one-earth-au16', 'one-earth-eco-196'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:antipodes-parakeet',
      'species:southern-royal-albatross',
      'species:new-zealand-sea-lion',
      'species:antipodean-albatross',
    ],
    countryIds: ['NZ', 'AU'],
    sources: ['one-earth-au16', 'one-earth-eco-196'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa34',
    summary: {
      value:
        'Kazakh Forest Steppe & Grasslands (PA34) spans the southern margin of western Siberia into northern and central Kazakhstan, containing three ecoregions. A 150–250 km-wide belt of birch-and-aspen forest steppe grades southward into the vast feathergrass and fescue dry steppe and the pine-dotted low mountains of the Kazakh Upland Steppe.',
      sourceIds: ['one-earth-pa34', 'one-earth-eco-731', 'one-earth-eco-732', 'one-earth-eco-733'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'flat forest steppe with thousands of shallow lakes',
        'ridge-and-furrow eastern relief',
        'undulating dry steppe plains',
        'Kokchetau, Aktau, Karkaraly, and Chingiztau uplands',
        'saline and freshwater lake systems',
      ],
      sourceIds: ['one-earth-pa34', 'one-earth-eco-731', 'one-earth-eco-732', 'one-earth-eco-733'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Continental semi-humid to semi-arid, with long cold winters and warm summers; precipitation declines southward from roughly 400 mm in the forest steppe to 150–300 mm on the dry steppe.',
        annualPrecipitationMm: { min: 150, max: 446 },
      },
      sourceIds: ['one-earth-eco-731', 'one-earth-eco-732'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'birch, aspen, and Scots pine forest steppe',
        'meadow steppe with mesophytic herbs',
        'feathergrass and fescue dry steppe',
        'halophytic salt-tolerant communities',
        'upland pine forest and rocky steppe with endemics',
      ],
      sourceIds: ['one-earth-pa34', 'one-earth-eco-731', 'one-earth-eco-733'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'constant wind and episodic drought',
        'seasonal lake-level and salinity cycles',
        'nomadic herbivore and steppe rodent grazing',
        'flyway rest-and-refueling for migrating birds',
      ],
      sourceIds: ['one-earth-pa34', 'one-earth-eco-732'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth sets a combined conservation target of 27% for the bioregion with a protection level of 2. Vast Soviet-era Virgin Lands ploughing left around 60% of the steppe converted, and remaining habitat is fragmented with very low connectivity and protection, compounded by overgrazing and poaching.',
      sourceIds: ['one-earth-pa34', 'one-earth-eco-732'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sociable-lapwing',
      'species:saiga-antelope',
      'species:steppe-eagle',
      'species:corsac-fox',
      'species:argali',
      'species:goitered-gazelle',
    ],
    countryIds: ['RU', 'KZ'],
    sources: ['one-earth-pa34', 'one-earth-eco-731', 'one-earth-eco-732', 'one-earth-eco-733'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa35',
    summary: {
      value:
        'Siberian Hemiboreal Forests & Steppe (PA35) forms a single ecoregion, Western Siberian Hemiboreal Forests, occupying a narrow belt along the southern edge of the west Siberian taiga. The 2,000 km-long corridor of tall conifer, birch, aspen, and lime forest spans the transition between taiga and steppe, crossed by the Irtysh and Ob rivers.',
      sourceIds: ['one-earth-pa35', 'one-earth-eco-687'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        '2000 km-long hemiboreal forest belt',
        'approximately 150 km-wide southern taiga margin',
        'Irtysh and Ob river crossings',
        'forked eastern end toward the Altai foothills',
        'swamps, bogs, and riverine floodplains',
      ],
      sourceIds: ['one-earth-pa35', 'one-earth-eco-687'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Humid continental with cool summers; average monthly temperatures about -17–19.5°C and annual precipitation around 475 mm, peaking in July.',
        annualPrecipitationMm: { min: 400, max: 550 },
      },
      sourceIds: ['one-earth-eco-687'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'Siberian fir and spruce forest',
        'Scots pine, aspen, and small-leaved lime',
        'silver and downy birch primary forest',
        'endemic Siberian lime near the Altai foothills',
        'swamp flora with orchids and waterlilies',
      ],
      sourceIds: ['one-earth-pa35', 'one-earth-eco-687'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'east–west and taiga–steppe dispersal corridor',
        'fire and logging disturbance regime',
        'bog and swamp drainage legacy',
        'northward range shift of broad-leaved species',
      ],
      sourceIds: ['one-earth-pa35', 'one-earth-eco-687'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth sets a conservation target of 32% with a protection level of 2 for the bioregion. Many zakaznik reserves exist but intact primary forest remains largely unprotected, under threat from illegal logging, oil-and-gas pollution, poaching, and a narrow latitudinal range that makes it especially sensitive to climate change.',
      sourceIds: ['one-earth-pa35', 'one-earth-eco-687'],
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
    sources: ['one-earth-pa35', 'one-earth-eco-687'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:oc1',
    summary: {
      value:
        'Salas y Gómez & Easter Islands (OC1) sits at the eastern edge of the Pacific’s Polynesian islands, containing a single ecoregion spanning Rapa Nui (Easter Island) and the tiny reef of Sala y Gómez. Once forested with Jubaea palms, toromiro, and Triumfetta, the isolated volcanic island is now dominated by grass savanna, while the tiny reef hosts a handful of salt-tolerant plant species and large seabird colonies.',
      sourceIds: ['one-earth-oc1', 'one-earth-eco-628'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Rapa Nui volcanic island',
        'Sala y Gómez reef 415 km to the northeast',
        'steep crater slopes (Rano Raraku)',
        'grass savanna lowlands',
        'tiny tide-sensitive reef islet',
      ],
      sourceIds: ['one-earth-oc1', 'one-earth-eco-628'],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Tropical rainforest / humid subtropical with temperatures from about 15°C in July to 28°C in February and annual precipitation around 1,118 mm, heaviest in May.',
        annualPrecipitationMm: { min: 900, max: 1300 },
      },
      sourceIds: ['one-earth-eco-628'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'tall Jubaea palm and toromiro forest (historical)',
        'grass savanna (current)',
        'hau hau and a few endemic shrubs',
        'rare endemic ferns in crater refuges',
        'salt-tolerant plants on Sala y Gómez',
      ],
      sourceIds: ['one-earth-eco-628'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'extreme oceanic isolation',
        'endemic invertebrate survival in crater refuges',
        'seabird nesting and marine nutrient input',
        'fire, grazing, and invasive-species pressure',
      ],
      sourceIds: ['one-earth-eco-628'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 100% with a protection level of 3. Rapa Nui National Park (68 km²) has inadequate management, and heavy grazing, invasive plants and animals, and frequent fires continue to diminish the last native species. Restoration priorities include growing toromiro on inaccessible slopes, protecting cave invertebrates, and eradicating rats and goats from islets.',
      sourceIds: ['one-earth-oc1', 'one-earth-eco-628'],
      derivation: 'authored-summary',
    },
    countryIds: ['CL'],
    sources: ['one-earth-oc1', 'one-earth-eco-628'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:oc11',
    summary: {
      value:
        "Hawai'i Tropical Islands (OC11) comprises the volcanic high islands and remote Northwestern (Leeward) Hawaiian chain in the north-central Pacific, containing five ecoregions that span windward moist forests, leeward dry forests, alpine and low shrublands, and the near-pristine low islets. Isolated for tens of millions of years, the archipelago is a celebrated centre of single-island endemism, radiating honeycreepers, lobeliads, land snails, and silverswords across a remarkable climatic gradient.",
      sourceIds: ['one-earth-oc11', 'one-earth-eco-623'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic high islands of the main chain',
        'remote low atolls and rocky islets',
        'windward and leeward mountain slopes',
        'high volcanic summits above 3,000 m',
        'coral reefs and lagoons',
      ],
      sourceIds: ['one-earth-oc11', 'one-earth-eco-623'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'tropical moist and wet broadleaf forest',
        'tropical dry forest and woodland',
        'alpine and subalpine shrubland',
        'lowland dry shrubland and strand',
        'low-island scrub and halophytic cover',
      ],
      sourceIds: ['one-earth-oc11', 'one-earth-eco-623'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'extreme oceanic isolation driving adaptive radiation in birds, plants, and invertebrates',
        'volcanic island formation and elevational zonation',
        'seabird-mediated nutrient cycling on nesting islets',
        'high vulnerability to invasive species and avian malaria',
      ],
      sourceIds: ['one-earth-eco-623', 'one-earth-eco-641'],
      derivation: 'authored-summary',
    },
    countryIds: ['US'],
    sources: ['one-earth-oc11', 'one-earth-eco-623'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:oc2',
    summary: {
      value:
        'Marquesas Tropical Islands (OC2) groups the 12 rugged volcanic high islands of the Marquesas in the far northeastern Pacific, containing a single ecoregion of tropical moist forest. Among the most isolated archipelagos on Earth, its knife-edged ridges and deeply dissected gorges harbor exceptional endemism in plants, land snails, and birds, evolving from the few colonists able to cross vast stretches of ocean.',
      sourceIds: ['one-earth-oc2', 'one-earth-eco-625'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'twelve rugged volcanic high islands',
        'knife-edged ridges and deeply dissected gorges',
        'cliffs plunging from mountaintops to sea level',
        'montane and cloud forest on upper slopes',
        'wind-swept summit heathlands',
      ],
      sourceIds: ['one-earth-oc2', 'one-earth-eco-625'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical oceanic with marked wet and dry seasons; persistent southeast trade winds bring orographic moisture to windward slopes while leaving sheltered leeward valleys drier.',
      },
      sourceIds: ['one-earth-eco-625'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland Pisonia, Thespesia, and Calophyllum forest',
        'montane Hibiscus, Pandanus, and Weinmannia forest',
        'stunted cloud forest and high-ridge woodland',
        'wind-swept summit heathland',
        'endemic palm and plant radiations',
      ],
      sourceIds: ['one-earth-eco-625'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'extreme oceanic isolation limiting colonisation',
        'adaptive radiation of plants, snails, and birds',
        'seabird breeding and nutrient cycling',
        'high vulnerability to introduced predators and fire',
      ],
      sourceIds: ['one-earth-eco-625'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 83% with a protection level of 0. Introduced goats, rats, cats, ants, and other invasive species, along with fire, logging, and plantations, have degraded native habitats, while lowland forest is largely cleared and dominated by introduced plants. Priorities include protecting upper-elevation forests, eradicating invaders on smaller islands, and fencing endangered plant populations.',
      sourceIds: ['one-earth-oc2', 'one-earth-eco-625'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:marquesan-kingfisher',
      'species:ultramarine-lory',
      'species:nuku-hiva-pigeon',
    ],
    countryIds: ['PF'],
    sources: ['one-earth-oc2', 'one-earth-eco-625'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:oc3',
    summary: {
      value:
        'Southeast Polynesian Islands (OC3) unites the Cook, Society, Tuamotu, and Austral (Tubuai) archipelagos spanning the south-central Pacific, containing four ecoregions of tropical moist forest. From the volcanic peaks of Tahiti and Rarotonga to the coral atolls of the Tuamotus and the cloud-draped summits of Rapa, these scattered islands support some of the highest levels of single-island endemism anywhere, expressed in monarchs, lorikeets, kingfishers, fruit doves, and radiating land snail faunas.',
      sourceIds: ['one-earth-oc3', 'one-earth-eco-620'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'high volcanic islands of the Society and Cook groups',
        'uplifted limestone (makatea) islands and coral atolls',
        'the 76 atolls and islands of the Tuamotu Archipelago',
        'rugged eroded volcanic peaks of the Austral Islands',
        'isolated reef islets such as Henderson and Pitcairn',
      ],
      sourceIds: ['one-earth-oc3', 'one-earth-eco-632'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime with warm, humid conditions and orographic rainfall that sustains lowland rainforest, montane forest, and small areas of mossy cloud forest on the highest volcanic peaks, while the low atolls experience heat and drought stress.',
      },
      sourceIds: ['one-earth-eco-620', 'one-earth-eco-633'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland tropical moist forest of Inocarpus, Pandanus, and Pisonia',
        'montane rain forest and mossy cloud forest',
        'strand and Pisonia-dominated makatea forest',
        'atoll scrub and mixed broadleaf strand vegetation',
        'highly endemic cloud forest floras on Rapa',
      ],
      sourceIds: ['one-earth-oc3', 'one-earth-eco-632'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'extreme oceanic isolation and great archipelagic age driving adaptive radiation',
        'single-island endemism in birds, snails, and plants',
        'seabird-mediated nutrient cycling on remote atolls',
        'high vulnerability to invasive predators, ants, and pathogens',
      ],
      sourceIds: ['one-earth-eco-620', 'one-earth-eco-633'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 62% with a protection level of 1 for this bioregion. Introduced rats, cats, ants, fire ants, Miconia trees, and red-vented bulbuls threaten native birds and plants, while lowland vegetation is largely cleared for settlement and agriculture. Priorities include invasive control around threatened monarchs, lorikeets, and kingfishers, and expanding protected areas across the archipelagos.',
      sourceIds: ['one-earth-oc3', 'one-earth-eco-632'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:blue-lorikeet',
      'species:kuhls-lorikeet',
      'species:tahiti-monarch',
      'species:mangareva-kingfisher',
    ],
    countryIds: ['CK', 'PF', 'PN'],
    sources: [
      'one-earth-oc3',
      'one-earth-eco-620',
      'one-earth-eco-630',
      'one-earth-eco-632',
      'one-earth-eco-633',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:oc4',
    summary: {
      value:
        'Central Polynesian Islands (OC4) comprises the scattered atolls and raised reef platforms of the Northern and Southern Line Islands, the Northern Cook Islands, and isolated Johnston, containing a single ecoregion of tropical moist forest. These classic low atolls, most less than four metres above sea level, support some of the largest seabird nesting colonies on Earth as well as the endemic Bokikokiko reed warbler.',
      sourceIds: ['one-earth-oc4', 'one-earth-eco-619'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'scattered coral atolls of the Line Islands',
        'atolls and islands of the Northern Cooks',
        'isolated Johnston Atoll',
        'open and closed lagoon atolls and raised reef platforms',
        'low land rarely rising above four metres',
      ],
      sourceIds: ['one-earth-oc4', 'one-earth-eco-619'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime ranging from continually wet near the equator to frequent drought in atolls under the trade-wind belt, imposing strong water stress on low islands.',
      },
      sourceIds: ['one-earth-eco-619'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Pisonia grandis forest with Calophyllum and Cordia subcordata',
        'Tournefortia argentea woodland and littoral scrub',
        'Scaevola and Suriana maritima scrublands',
        'Lepturus repens grassland and mixed herblands',
        'drought-tolerant scrub on dry low islands',
      ],
      sourceIds: ['one-earth-eco-619'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'seabird nesting colonies producing nutrient-rich guano',
        'low indigenous plant richness on isolated atolls',
        'prehistoric movement of birds among islands by Polynesians',
        'high vulnerability to invasive rats, cats, and crazy ants',
      ],
      sourceIds: ['one-earth-eco-619'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 15% with a protection level of 10. Settlement, copra plantations, guano mining, and nuclear and military activity have disturbed much vegetation, while rats, cats, and yellow crazy ants drive seabird and land bird declines. Priorities include eradicating invaders on key atolls, preventing little red fire ant arrival, and strengthening protection of Caroline forest.',
      sourceIds: ['one-earth-oc4', 'one-earth-eco-619'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bokikokiko-reed-warbler',
      'species:kuhls-lorikeet',
      'species:coconut-crab',
    ],
    countryIds: ['KI'],
    sources: ['one-earth-oc4', 'one-earth-eco-619'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:oc5',
    summary: {
      value:
        "Samoa & West Polynesian Tropical Islands (OC5) unites the volcanic high islands of Samoa with the wide scattering of low atolls across Tokelau, Tuvalu, and the Phoenix Islands, containing two ecoregions of tropical moist forest. From the cloud-draped summits of Savai'i to the storm-washed atolls of the Phoenix group, these islands support the manumea pigeon, the ma'oma'o honeyeater, Samoan flying fox, and millions of nesting seabirds.",
      sourceIds: ['one-earth-oc5', 'one-earth-eco-629'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'fourteen volcanic islands of the Samoan chain',
        "the high islands of Savai'i and 'Upolu",
        'three clusters of atolls and makatea islands',
        'the Phoenix Islands and isolated Howland and Baker',
        'low atolls and raised reef platforms of Tokelau and Tuvalu',
      ],
      sourceIds: ['one-earth-oc5', 'one-earth-eco-634'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime with orographic rainfall on the high volcanic islands, sustaining lowland, montane, and cloud forests, while the low atolls of the Phoenix group and Howland and Baker endure drought, storms, and salt stress.',
      },
      sourceIds: ['one-earth-eco-629', 'one-earth-eco-634'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland rain forest of Diospyros, Calophyllum, and Pometia',
        'montane forest of Dysoxylum, Syzygium, and Weinmannia',
        'cloud forest with Reynoldsia, Weinmannia, and tree ferns',
        'short drought-tolerant scrub on drier atolls',
        'inland groves of Tournefortia, Pandanus, and Pisonia on wetter atolls',
      ],
      sourceIds: ['one-earth-oc5', 'one-earth-eco-629'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'high land-bird endemism (84% of 37 species found nowhere else)',
        'plant endemism of about 28% across 536 flowering species',
        'globally important seabird nesting on the Phoenix atolls',
        'vulnerability to invasive rats, cats, pests, and rising seas',
      ],
      sourceIds: ['one-earth-eco-629', 'one-earth-eco-634'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "One Earth reports a combined conservation target of 53% with a protection level of 2. Over 80% of lowland rain forest has been lost in Samoa, while black rats, cats, pigs, and crazy ants threaten nesting seabirds and wildlife across the atolls. Priorities include securing central Savai'i forest, managing the manumea and ma'oma'o, and eradicating invaders on key seabird islands.",
      sourceIds: ['one-earth-oc5', 'one-earth-eco-629'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:many-colored-fruit-dove',
      'species:manumea',
      'species:pacific-imperial-pigeon',
    ],
    countryIds: ['AS', 'KI', 'WS'],
    sources: ['one-earth-oc5', 'one-earth-eco-629'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:oc6',
    summary: {
      value:
        'Fiji & Tongan Tropical Islands (OC6) unites the large mountainous archipelagos of Fiji and Tonga with the remote Kermadec and the makatea outliers of Niue and Wallis and Futuna, containing four ecoregions of tropical moist and dry forest. Spanning roughly two million hectares, this bioregion mixes ancient Gondwanan relicts, from primitive Degeneria trees and Agathis to the crested iguanas, with highly endemic radiations of pigeons, parrots, honeyeaters, and white-eyes.',
      sourceIds: ['one-earth-oc6', 'one-earth-eco-622'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the large high islands of Viti Levu and Vanua Levu',
        'scattered volcanic and raised-limestone islands of Tonga',
        'the remote Kermadec archipelago north of New Zealand',
        'makatea islands such as Niue and parts of Tonga',
        'lowland, montane, cloud, and dry forest zones',
      ],
      sourceIds: ['one-earth-oc6', 'one-earth-eco-624'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime with heavy orographic rainfall on the high islands, sustaining lowland, montane, and cloud forest, while pronounced leeward rain shadows and drier lowlands create extensive tropical dry forest and, in the Kermadecs, a mild subtropical regime.',
      },
      sourceIds: ['one-earth-eco-622', 'one-earth-eco-635'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland moist forest with Degeneria, Agathis, and Pandanus',
        'montane and cloud forest of Agathis, Podocarpus, and Metrosideros',
        'drier forest dominated by Garuga and Gyrocarpus',
        'dry forest with cycads and endemic sandalwood',
        'Kermadec subtropical forest of Metrosideros and tree ferns',
      ],
      sourceIds: ['one-earth-oc6', 'one-earth-eco-635'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'mixing of ancient Gondwanan relicts with oceanic-island radiations',
        'high plant and bird endemism with many single-island species',
        'raft-dispersal and adaptive radiation of iguanas and birds',
        'vulnerability to invasive rats, cats, mongoose, and pigs',
      ],
      sourceIds: ['one-earth-eco-622', 'one-earth-eco-631'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 67% with a protection level of 1. Much lowland forest has been cleared for settlement, agriculture, and mahogany and pine plantations, and only a small fraction of moist forest is formally protected. Priorities include community-based protection of upper watersheds and key islands, preventing mongoose and other invaders from reaching refugia, and eradicating goats, rats, and cats.',
      sourceIds: ['one-earth-oc6', 'one-earth-eco-622'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:fiji-crested-iguana',
      'species:taveuni-orange-dove',
      'species:tongan-whistler',
    ],
    countryIds: ['FJ', 'NU', 'NZ', 'TO', 'WF'],
    sources: ['one-earth-oc6', 'one-earth-eco-622', 'one-earth-eco-631'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:oc7',
    summary: {
      value:
        "The East Micronesian Islands bioregion (OC7) groups the scattered low atolls and upraised reef islands of eastern Micronesia across one ecoregion of tropical moist forest, spanning the Marshall Islands, Kiribati's Gilbert Islands, and the single-island outliers of Wake Island and Nauru. These sandy, salty, and typhoon-tested atolls support a hardy terrestrial life derived from species that disperse readily across vast ocean distances.",
      sourceIds: ['one-earth-oc7', 'one-earth-eco-621'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'scattered low coral atolls',
        'upraised limestone makatea island of Nauru',
        'single-island outliers such as Wake Island',
        'sandy, salty, typhoon-tested shorelines',
        'Marshall Islands and Gilbert Islands archipelagos',
      ],
      sourceIds: ['one-earth-oc7', 'one-earth-eco-621'],
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
        'shore scrub of Scaevola, Pandanus tectorius, and Terminalia',
        'interior tree groves of Barringtonia, Tournefortia, and Hernandia',
        'Pisonia grandis seabird rookery groves',
        'atoll herbland and strand vegetation',
        'Nauru makatea forest of Calophyllum and Ficus',
      ],
      sourceIds: ['one-earth-eco-621'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'long-distance oceanic dispersal of hardy species',
        'seabird nesting and guano nutrient input',
        'strong typhoon disturbance shaping vegetation',
        'variable species richness with island size and type',
      ],
      sourceIds: ['one-earth-eco-621'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 9% with a protection level of 9. Most of the sparse land area has been disturbed through long human habitation, guano mining on Nauru, and introduced rats, cats, and invasive plants, while the atolls face climate-driven sea-level rise. Priorities include eradicating invasive species on Pokaka Atoll and protecting remaining forests on Nauru.',
      sourceIds: ['one-earth-oc7', 'one-earth-eco-621'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:coconut-crab',
      'species:micronesian-pigeon',
      'species:greater-frigatebird',
    ],
    countryIds: ['MH', 'NR', 'KI'],
    sources: ['one-earth-oc7', 'one-earth-eco-621'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:oc8',
    summary: {
      value:
        "The Palau & Caroline Tropical Islands bioregion (OC8) unites three ecoregions of tropical moist and dry forest across the volcanic peaks, atolls, and upraised limestone islands of Palau, the Caroline Islands of Chuuk, Pohnpei, and Kosrae, and Yap. Its fragmented islands support some of Micronesia's richest and most isolated biotas, including endemic birds, flying foxes, and land snails.",
      sourceIds: ['one-earth-oc8', 'one-earth-eco-618'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'eroded volcanic peak islands of Chuuk, Pohnpei, and Kosrae',
        'jagged limestone rock islands of Palau',
        'low coral atolls of the eastern Carolines',
        'gentle uplands of Yap',
        'larger eroded volcanic islands of Babeldaob',
      ],
      sourceIds: ['one-earth-oc8', 'one-earth-eco-618'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime with abundant orographic rainfall on the high islands and a distinct dry season from January through March in the Yap group.',
      },
      sourceIds: ['one-earth-eco-618', 'one-earth-eco-638'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'montane and dwarf cloud forests on high peaks',
        'lowland and upland moist broadleaf forest',
        'limestone and rock-island forest',
        'upland forest and mangrove fringes on Yap',
        'atoll and coastal strand vegetation',
      ],
      sourceIds: ['one-earth-eco-618', 'one-earth-eco-638'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'extreme oceanic isolation driving single-island endemism',
        'montane cloud forest refuges on high peaks',
        'high biodiversity from proximity to New Guinea and the Philippines',
        'vulnerability to invasive rats, predators, and expanding cultivation',
      ],
      sourceIds: ['one-earth-eco-618'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 88% with a protection level of 1. One Earth notes high endemism and small, fragmented land areas make these islands vulnerable to invasive rats, expanding sakau (kava) cultivation, and introduced predators, while Palau has established a network of protected areas covering at least a quarter of its terrestrial habitat. Priorities include community-based protection of cloud forests and keeping brown tree snakes and little red fire ants from arriving.',
      sourceIds: ['one-earth-oc8', 'one-earth-eco-618'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:pohnpei-lorikeet',
      'species:truk-monarch',
      'species:pohnpei-fantail',
      'species:giant-white-eye',
      'species:palau-fruit-dove',
      'species:yap-monarch',
    ],
    countryIds: ['PW', 'FM'],
    sources: ['one-earth-oc8', 'one-earth-eco-618'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:oc9',
    summary: {
      value:
        'The Guam & Marianas Dry Tropical Islands bioregion (OC9) covers a 900 km volcanic arc in the western Pacific across one ecoregion of tropical dry forest, spanning the Northern Mariana Islands and the raised limestone island of Guam. Long oceanic isolation has driven the speciation of island endemics, including the plum-fronted Marianas fruit pigeon.',
      sourceIds: ['one-earth-oc9', 'one-earth-eco-637'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        '900 km volcanic island arc',
        'older raised limestone atoll of Guam',
        'active volcanic islands in the north',
        'grasslands and forest patches on older lava flows',
        'southern limestone (makatea) forests',
      ],
      sourceIds: ['one-earth-oc9', 'one-earth-eco-637'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical dry with regular strong typhoons that shape a dense, vine-rich forest structure with few emergent trees.',
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
        'invaded by introduced Leucaena and other weeds',
      ],
      sourceIds: ['one-earth-eco-637'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'oceanic isolation driving island endemism',
        'seed dispersal by bird legs',
        'typhoon disturbance shaping forest structure',
        'severe predation and extinction pressure from the brown tree snake',
      ],
      sourceIds: ['one-earth-eco-637'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 90% with a protection level of 2. Most original forest has been lost on Guam and replaced by grassy savannas and secondary growth, while the brown tree snake is implicated in the extinction of three bird species. Priorities include preventing invasive introductions, removing feral ungulates and predators from northern islands, and translocating native forest birds between island groups.',
      sourceIds: ['one-earth-oc9', 'one-earth-eco-637'],
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
    sources: ['one-earth-oc9', 'one-earth-eco-637'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:oc10',
    summary: {
      value:
        'The Ogasawara Subtropical Islands bioregion (OC10) comprises the widely scattered volcanic Bonin (Ogasawara) and Iwo (Volcano) Islands south of Japan across a single ecoregion of subtropical moist forest. Long isolation from the mainland has produced exceptionally high endemism, with most of the native trees found nowhere else.',
      sourceIds: ['one-earth-oc10', 'one-earth-eco-626'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        '20 major scattered volcanic islands',
        'Mukojima, Chichijima, and Hahajima island groups',
        'largest island of Chichijima at 24 km²',
        'dry rocky slopes and exposed eroded sea cliffs',
        'mountain ridges and upland sites',
      ],
      sourceIds: ['one-earth-oc10', 'one-earth-eco-626'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Subtropical oceanic with drier periods from January to March and July to August.',
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
        'two endemic plant genera, Dendrocacalia and Boninia',
      ],
      sourceIds: ['one-earth-eco-626'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'extreme oceanic isolation driving speciation',
        'high single-island plant endemism',
        'relict endemics from moister former climates',
        'vulnerability to feral goats, pigs, cats, and rats',
      ],
      sourceIds: ['one-earth-eco-626'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 80% with a protection level of 10. Large areas of the archipelago fall within Ogasawara National Park, though native forest has been largely lost on the northern islands through goat grazing and invasive predators. Priorities include continuing rat and feral cat eradication on nesting islets and restoring sclerophyllous scrub and subtropical rainforest that harbor many endemics.',
      sourceIds: ['one-earth-oc10', 'one-earth-eco-626'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bonin-white-eye',
      'species:japanese-wood-pigeon',
      'species:bonin-flying-fox',
    ],
    countryIds: ['JP'],
    sources: ['one-earth-oc10', 'one-earth-eco-626'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at11',
    summary: {
      value:
        'The Greater African Subequatorial Savannas & Mixed Woodlands bioregion is the largest in the Afrotropics realm, spanning the width of the continent from southern African drylands and grasslands north toward the equatorial forest zone and the southern shore of Lake Victoria. Over 436 million hectares of savannas, woodlands, dry forest and flooded grasslands host some 8,500 plant species with more than half endemic, plus the great Serengeti-Mara wildebeest migration, the Critically Endangered giant sable antelope, and soda-pan flamingo breeding grounds at Lake Natron, Etosha and Makgadikgadi.',
      sourceIds: [
        'one-earth-at11',
        'one-earth-eco-9',
        'one-earth-eco-33',
        'one-earth-eco-34',
        'one-earth-eco-35',
        'one-earth-eco-36',
        'one-earth-eco-39',
        'one-earth-eco-42',
        'one-earth-eco-46',
        'one-earth-eco-57',
        'one-earth-eco-64',
        'one-earth-eco-65',
        'one-earth-eco-66',
        'one-earth-eco-69',
        'one-earth-eco-70',
        'one-earth-eco-73',
        'one-earth-eco-76',
        'one-earth-eco-77',
        'one-earth-eco-84',
        'one-earth-eco-85',
        'one-earth-eco-87',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'largest bioregion in the Afrotropics realm, covering the entire width of the continent from the drylands and grasslands of southern Africa north to the equatorial forest zone and the southern shore of Lake Victoria',
        'consists mostly of savannas and woodlands but also includes pockets of dry forest and flooded grasslands, incorporating the lakes along the Albertine Rift',
        'covers most of the Zambezian region, divided into three major zones by the Zambezi River to the west and the Albertine Rift to the east',
        'more than 436 million hectares of combined land area',
      ],
      sourceIds: [
        'one-earth-at11',
        'one-earth-eco-9',
        'one-earth-eco-33',
        'one-earth-eco-34',
        'one-earth-eco-35',
        'one-earth-eco-36',
        'one-earth-eco-39',
        'one-earth-eco-42',
        'one-earth-eco-46',
        'one-earth-eco-57',
        'one-earth-eco-64',
        'one-earth-eco-65',
        'one-earth-eco-66',
        'one-earth-eco-69',
        'one-earth-eco-70',
        'one-earth-eco-73',
        'one-earth-eco-76',
        'one-earth-eco-77',
        'one-earth-eco-84',
        'one-earth-eco-85',
        'one-earth-eco-87',
      ],
      derivation: 'source-value',
    },
    climate: {
      value: {
        character:
          'Varies hugely across a great latitudinal and altitudinal range, from seasonal tropical climates with summer (November-April) rainfall in the southern savannas through wetter miombo and montane blocks to semi-arid regimes around soda pans with frequent droughts and cool, misty conditions with frost and sub-zero temperatures at the highest montane peaks. Annual rainfall ranges from roughly 380-500 mm at the pans to more than 3,000 mm on the wettest mountains, with moderate to hot temperatures and a pronounced dry season in most areas.',
        annualPrecipitationMm: { min: 380, max: 3000 },
        temperatureC: { min: -5, max: 45 },
      },
      sourceIds: [
        'one-earth-at11',
        'one-earth-eco-9',
        'one-earth-eco-33',
        'one-earth-eco-34',
        'one-earth-eco-35',
        'one-earth-eco-36',
        'one-earth-eco-39',
        'one-earth-eco-42',
        'one-earth-eco-46',
        'one-earth-eco-57',
        'one-earth-eco-64',
        'one-earth-eco-65',
        'one-earth-eco-66',
        'one-earth-eco-69',
        'one-earth-eco-70',
        'one-earth-eco-73',
        'one-earth-eco-76',
        'one-earth-eco-77',
        'one-earth-eco-84',
        'one-earth-eco-85',
        'one-earth-eco-87',
      ],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'dominant miombo woodland (Brachystegia, Julbernardia, Isoberlinia) across the central plateau',
        'mopane woodland (Colophospermum mopane) in lower-lying areas and Baikiaea (Zambesi redwood) woodland on Kalahari sands',
        'Cryptosepalum evergreen dry forest and Acacia-Commiphora bushland in the northeast',
        'seasonally flooded Zambezian grasslands and soda pans with halophytic fringes',
        'Afromontane forest-grassland mosaics in the eastern-arc, Angolan and southern rift mountains',
      ],
      sourceIds: [
        'one-earth-at11',
        'one-earth-eco-9',
        'one-earth-eco-33',
        'one-earth-eco-34',
        'one-earth-eco-35',
        'one-earth-eco-36',
        'one-earth-eco-39',
        'one-earth-eco-42',
        'one-earth-eco-46',
        'one-earth-eco-57',
        'one-earth-eco-64',
        'one-earth-eco-65',
        'one-earth-eco-66',
        'one-earth-eco-69',
        'one-earth-eco-70',
        'one-earth-eco-73',
        'one-earth-eco-76',
        'one-earth-eco-77',
        'one-earth-eco-84',
        'one-earth-eco-85',
        'one-earth-eco-87',
      ],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'ITCZ monsoon-driven seasonal rainfall and the great Serengeti-Mara 1,000-km wildebeest migration',
        'fire as a natural and human-influenced driver of miombo, mopane and montane grassland ecology, interacting with elephant browsing',
        'seasonal flooding and inundation dynamics of Zambezian floodplains and the Okavango Delta',
        'soda-pan boom-bust ecology driven by episodic rainfall and evaporation, including flamingo breeding at Lake Natron, Etosha and Makgadikgadi',
        'termite mounds concentrating nutrients in oligotrophic miombo soils',
        'Afromontane archipelago dynamics and adaptive radiation across the Eastern Arc, Mulanje, Nyanga-Chimanimani and southern rift mountains',
      ],
      sourceIds: [
        'one-earth-at11',
        'one-earth-eco-9',
        'one-earth-eco-33',
        'one-earth-eco-34',
        'one-earth-eco-35',
        'one-earth-eco-36',
        'one-earth-eco-39',
        'one-earth-eco-42',
        'one-earth-eco-46',
        'one-earth-eco-57',
        'one-earth-eco-64',
        'one-earth-eco-65',
        'one-earth-eco-66',
        'one-earth-eco-69',
        'one-earth-eco-70',
        'one-earth-eco-73',
        'one-earth-eco-76',
        'one-earth-eco-77',
        'one-earth-eco-84',
        'one-earth-eco-85',
        'one-earth-eco-87',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 35% with a protection level of 7. Major protected areas include Serengeti, Tarangire, Ruaha, Mkomazi and Mikumi National Parks and Selous Game Reserve (Tanzania), the Masai Mara, Nairobi and Hell\u2019s Gate (Kenya), the Ngorongoro Conservation Area, Kafue, Lower Zambezi, Lukusuzi and Nyika National Parks (Zambia), Upemba National Park and Lufira Biosphere Reserve (DRC), Etosha National Park (Namibia), Chobe, Central Kalahari and Makgadikgadi-Nxai Pan National Parks (Botswana), Kruger, Gonarezhou, Hwange and Chimanimani National Parks and Gorongosa National Park (South Africa, Zimbabwe, Mozambique), and Luando Reserve and Cangandala National Park for the giant sable antelope (Angola). Threats include poaching of ivory and rhino horn, habitat conversion, charcoal production, veterinary cordon fences, water diversion and invasive species, with priority actions strengthening anti-poaching enforcement and community-based natural-resource management, reconnecting migration corridors and transfrontier conservation areas, and promoting sustainable livelihoods and renewable energy.',
      sourceIds: [
        'one-earth-at11',
        'one-earth-eco-9',
        'one-earth-eco-33',
        'one-earth-eco-34',
        'one-earth-eco-35',
        'one-earth-eco-36',
        'one-earth-eco-39',
        'one-earth-eco-42',
        'one-earth-eco-46',
        'one-earth-eco-57',
        'one-earth-eco-64',
        'one-earth-eco-65',
        'one-earth-eco-66',
        'one-earth-eco-69',
        'one-earth-eco-70',
        'one-earth-eco-73',
        'one-earth-eco-76',
        'one-earth-eco-77',
        'one-earth-eco-84',
        'one-earth-eco-85',
        'one-earth-eco-87',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:african-elephant',
      'species:lion',
      'species:common-leopard',
      'species:african-wild-dog',
      'species:black-rhinoceros',
      'species:hippopotamus',
      'species:blue-wildebeest',
      'species:plains-zebra',
    ],
    countryIds: ['KE', 'TZ', 'ZM', 'AO', 'NA', 'BW', 'MW', 'MZ', 'CD', 'BI', 'ZA', 'ZW'],
    sources: [
      'one-earth-at11',
      'one-earth-eco-9',
      'one-earth-eco-33',
      'one-earth-eco-34',
      'one-earth-eco-35',
      'one-earth-eco-36',
      'one-earth-eco-39',
      'one-earth-eco-42',
      'one-earth-eco-46',
      'one-earth-eco-57',
      'one-earth-eco-64',
      'one-earth-eco-65',
      'one-earth-eco-66',
      'one-earth-eco-69',
      'one-earth-eco-70',
      'one-earth-eco-73',
      'one-earth-eco-76',
      'one-earth-eco-77',
      'one-earth-eco-84',
      'one-earth-eco-85',
      'one-earth-eco-87',
    ],
    status: 'authored',
  },
];
