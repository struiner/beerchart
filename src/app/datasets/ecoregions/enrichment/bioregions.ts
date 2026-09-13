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
    targetId: 'bioregion:na3',
    summary: {
      value:
        'North Alaskan Tundra (NA3) is the northern section of the Alaska subrealm in Subarctic America, delineated by the Brooks Range, covering about 34 million hectares (33,930 thousand ha) of tundra along with adjacent marine areas of the Beaufort and Chukchi seas. Three tundra ecoregions support beluga whales, polar bears, muskox, and large migratory barren-ground caribou herds across a largely intact, permafrost-dominated landscape.',
      sourceIds: [
        'one-earth-na3',
        'one-earth-eco-407',
        'one-earth-eco-408',
        'one-earth-eco-411',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Arctic coastal plain bounded south by the Arctic Foothills',
        'rounded foothills and plateaus',
        'Brooks–British mountain ranges',
        'adjacent Beaufort and Chukchi sea margins',
      ],
      sourceIds: [
        'one-earth-na3',
        'one-earth-eco-407',
        'one-earth-eco-408',
        'one-earth-eco-411',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Arctic with continuous permafrost, short cool summers, and long severe winters; annual precipitation low at about 100–300 mm on the coastal plain, rising to about 350 mm in the Canadian portion of the mountains and slightly higher near the southern boundary.',
        annualPrecipitationMm: { min: 100, max: 350 },
      },
      sourceIds: ['one-earth-eco-407', 'one-earth-eco-408', 'one-earth-eco-411'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'wet tundra, fens, bogs, and marshes of the coastal plain',
        'moist herbaceous and dwarf-shrub tussock communities',
        'sparse dwarf-shrub and alpine tundra of the mountains',
        'protected valley spruce woodlands near the northern limit of white spruce in Canada',
      ],
      sourceIds: ['one-earth-eco-407', 'one-earth-eco-408', 'one-earth-eco-411'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'permafrost and thaw-lake dynamics',
        'calving and migration of the Arctic, Central Arctic, and Porcupine caribou herds',
        'lagoon staging for beluga whales, seals, walrus, and Pacific black brant at Kasegaluk Lagoon',
        'glacial and periglacial processes in the mountains',
      ],
      sourceIds: ['one-earth-eco-407', 'one-earth-eco-408', 'one-earth-eco-411'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Protection target 96%; protection level 4 (scale 0–10). The Arctic National Wildlife Refuge, Gates of the Arctic National Park and Preserve, and Yukon’s Ivvavik National Park anchor large intact areas. High-priority threats include oil development centered at Prudhoe Bay and Utqiagvik, pipeline and highway corridor expansion, and lead and zinc mining.',
      sourceIds: [
        'one-earth-na3',
        'one-earth-eco-407',
        'one-earth-eco-408',
        'one-earth-eco-411',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:beluga-whale',
      'species:polar-bear',
      'species:musk-ox',
      'species:barren-ground-caribou',
      'species:arctic-fox',
      'species:gray-wolf',
      'species:dall-sheep',
      'species:gyrfalcon',
    ],
    countryIds: ['CA', 'US'],
    sources: ['one-earth-na3', 'one-earth-eco-407', 'one-earth-eco-408', 'one-earth-eco-411'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na4',
    summary: {
      value:
        'Greater Alaska Taiga & Tundra (NA4) encompasses most of the Alaska subrealm, about 110 million hectares (109,888 thousand ha, excluding icefields), divided by the Alaska Range into lowland taiga and Bering Sea coastal tundra in the upper half and Cook Inlet, Alaska Peninsula, and Aleutian alpine systems in the lower half. Ten ecoregions support Kodiak brown bears, Arctic foxes, muskox, barren-ground caribou, and among the world’s greatest salmon and seabird concentrations.',
      sourceIds: [
        'one-earth-na4',
        'one-earth-eco-375',
        'one-earth-eco-409',
        'one-earth-eco-410',
        'one-earth-eco-416',
        'one-earth-eco-369',
        'one-earth-eco-371',
        'one-earth-eco-372',
        'one-earth-eco-404',
        'one-earth-eco-405',
        'one-earth-eco-406',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'lowland taiga and Bering Sea coastal tundra in the upper half',
        'Alaska Range, Alaska Peninsula, and Aleutian alpine systems in the lower half',
        'Cook Inlet lowlands and Copper Plateau',
        'Ahklun and Kilbuck uplands and Bering Sea islands',
      ],
      sourceIds: [
        'one-earth-na4',
        'one-earth-eco-375',
        'one-earth-eco-409',
        'one-earth-eco-410',
        'one-earth-eco-416',
        'one-earth-eco-369',
        'one-earth-eco-371',
        'one-earth-eco-372',
        'one-earth-eco-404',
        'one-earth-eco-405',
        'one-earth-eco-406',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Strong continental-to-maritime gradients: short warm summers and long cold winters inland, mild maritime conditions along the Bering Sea and Alaska Peninsula–Aleutian coast; permafrost from continuous to absent; precipitation from about 170 mm in interior rain-shadow valleys to over 4,000 mm at high coastal elevations.',
        annualPrecipitationMm: { min: 170, max: 4000 },
      },
      sourceIds: [
        'one-earth-eco-375',
        'one-earth-eco-409',
        'one-earth-eco-410',
        'one-earth-eco-416',
        'one-earth-eco-369',
        'one-earth-eco-371',
        'one-earth-eco-372',
        'one-earth-eco-404',
        'one-earth-eco-405',
        'one-earth-eco-406',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland taiga of white and black spruce, aspen, birch, and poplar',
        'Bering and Alaska Peninsula moist and wet tundra',
        'alpine tundra and ice fields of the Alaska and St. Elias ranges',
        'Aleutian dwarf-shrub and grass–sedge tundra',
      ],
      sourceIds: [
        'one-earth-eco-375',
        'one-earth-eco-409',
        'one-earth-eco-410',
        'one-earth-eco-416',
        'one-earth-eco-369',
        'one-earth-eco-371',
        'one-earth-eco-372',
        'one-earth-eco-404',
        'one-earth-eco-405',
        'one-earth-eco-406',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'some of the world’s largest salmon runs (Bristol Bay, Kenai, Copper rivers)',
        'huge seabird and marine-mammal concentrations in the Bering Sea and Gulf of Alaska',
        'lightning-fire regimes in the lowland taiga',
        'alpine and volcanic disturbance processes across the Alaska Range and Aleutians',
      ],
      sourceIds: [
        'one-earth-eco-375',
        'one-earth-eco-409',
        'one-earth-eco-410',
        'one-earth-eco-416',
        'one-earth-eco-369',
        'one-earth-eco-371',
        'one-earth-eco-372',
        'one-earth-eco-404',
        'one-earth-eco-405',
        'one-earth-eco-406',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'As displayed on the page, protection level 97%; conservation target 4. Katmai, Denali, Lake Clark, and Wrangell-St. Elias national parks, Kodiak National Wildlife Refuge, and the Yukon-Kuskokwim refuge complex protect huge intact landscapes. Key pressures are old-growth logging (especially in the Copper River valley), oil and gas development, tourism pressure, mining, and periodic over-harvest of walrus and caribou.',
      sourceIds: [
        'one-earth-na4',
        'one-earth-eco-375',
        'one-earth-eco-409',
        'one-earth-eco-410',
        'one-earth-eco-416',
        'one-earth-eco-369',
        'one-earth-eco-371',
        'one-earth-eco-372',
        'one-earth-eco-404',
        'one-earth-eco-405',
        'one-earth-eco-406',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:arctic-fox',
      'species:polar-bear',
      'species:barren-ground-caribou',
      'species:brown-bear',
      'species:musk-ox',
      'species:walrus',
      'species:beluga-whale',
      'species:trumpeter-swan',
    ],
    countryIds: ['CA', 'US'],
    sources: [
      'one-earth-na4',
      'one-earth-eco-375',
      'one-earth-eco-409',
      'one-earth-eco-410',
      'one-earth-eco-416',
      'one-earth-eco-369',
      'one-earth-eco-371',
      'one-earth-eco-372',
      'one-earth-eco-404',
      'one-earth-eco-405',
      'one-earth-eco-406',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na5',
    summary: {
      value:
        'Far Northern Pacific Coast (NA5) pairs the northern Pacific Alaskan coastal forests with the Pacific Coastal Mountain Icefields and Tundra along the Gulf of Alaska south of the Alaska Range, about 17 million hectares (17,045 thousand ha, excluding icefields) and extending to the Dixon Entrance off central British Columbia. Coastal temperate rainforest grades into glaciated coastal mountains, supporting black-tailed deer, brown bears, bald eagles, and marbled murrelets.',
      sourceIds: ['one-earth-na5', 'one-earth-eco-360', 'one-earth-eco-420'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'old-growth coastal temperate rainforest and islands',
        'glaciated coastal mountain ice fields',
        'fjords, sounds, and offshore islands of the Gulf of Alaska',
        'adjacent marine areas including the Dixon Entrance',
      ],
      sourceIds: ['one-earth-na5', 'one-earth-eco-360', 'one-earth-eco-420'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Maritime North Pacific conditions tempered by the Alaska Current, with extreme precipitation of about 762–5,588 mm annually and mild winters for the latitude; alpine and glacierized climates at higher elevations with deep snow.',
        annualPrecipitationMm: { min: 762, max: 5588 },
      },
      sourceIds: ['one-earth-eco-360', 'one-earth-eco-420'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Sitka spruce–western hemlock coastal rainforest',
        'western red cedar and Alaska yellow cedar mixed forest',
        'subalpine fir and mountain hemlock forest',
        'alpine dwarf-shrub tundra and ice fields',
      ],
      sourceIds: ['one-earth-eco-360', 'one-earth-eco-420'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'one of the largest nonpolar ice fields in the world',
        'extremely high precipitation feeding glaciers and streams',
        'wind, landslide, and avalanche disturbance of old-growth forest',
        'black-tailed-deer corridors linking coastal and interior populations',
      ],
      sourceIds: ['one-earth-eco-360', 'one-earth-eco-420'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Protection target 74%; protection level 6 (scale 0–10). Tongass and Chugach national forests, Glacier Bay and Kenai Fjords national parks, and portions of Wrangell-St. Elias and Kluane parks protect much of the region within the Kluane–Wrangell-St. Elias–Glacier Bay–Tatshenshini-Alsek UNESCO World Heritage Site. Chief threats are continued old-growth logging, especially in the Tongass, and expanding mining and associated roads.',
      sourceIds: ['one-earth-na5', 'one-earth-eco-360', 'one-earth-eco-420'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:black-tailed-deer',
      'species:brown-bear',
      'species:marbled-murrelet',
      'species:sea-otter',
      'species:steller-sea-lion',
      'species:bald-eagle',
      'species:mountain-goat',
      'species:wolverine',
    ],
    countryIds: ['CA', 'US'],
    sources: ['one-earth-na5', 'one-earth-eco-360', 'one-earth-eco-420'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na6',
    summary: {
      value:
        'Greater Yukon (NA6) is the mountainous cordilleran region in the far west of the Canadian Boreal subrealm, defined by a large central plateau surrounded by some of the world’s highest mountains and the source of the Yukon River, about 71 million hectares (70,883 thousand ha). Three ecoregions of taiga and alpine tundra support Dall sheep, mountain goats, grizzly bears, gyrfalcons, and the flagship common raven.',
      sourceIds: ['one-earth-na6', 'one-earth-eco-380', 'one-earth-eco-383', 'one-earth-eco-419'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a large central plateau surrounded by high mountains',
        'Northern Rocky Mountains and northern Coast Mountains',
        'source of the Yukon River',
        'subalpine woodland and alpine tundra zones',
      ],
      sourceIds: ['one-earth-na6', 'one-earth-eco-380', 'one-earth-eco-383', 'one-earth-eco-419'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Boreal cordilleran to dry subarctic climates with cool summers and long cold winters; precipitation generally 225–600 mm, to 1,000 mm at high elevations in the west and about 750 mm on the Selwyn Mountains; discontinuous to continuous permafrost.',
        annualPrecipitationMm: { min: 225, max: 1000 },
      },
      sourceIds: ['one-earth-eco-380', 'one-earth-eco-383', 'one-earth-eco-419'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lower boreal white and black spruce, lodgepole pine, aspen, and birch',
        'subalpine spruce–fir woodland',
        'alpine dwarf-shrub and mountain-avens tundra',
        'grasslands on south-facing slopes among the most northern in North America',
      ],
      sourceIds: ['one-earth-eco-380', 'one-earth-eco-383', 'one-earth-eco-419'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'post-fire succession across the boreal slopes',
        'alpine–subalpine elevational zonation across the highlands',
        'winter range ecology of the Porcupine caribou herd',
        'unfrozen limestone reaches of the Ni’iinlii’njik (Fishing Branch) River supporting an autumn salmon run that attracts grizzly bears',
      ],
      sourceIds: ['one-earth-eco-380', 'one-earth-eco-383', 'one-earth-eco-419'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Protection target 99%; protection level 1 (scale 0–10). Key protected areas include Mount Edziza, Spatsizi Plateau Wilderness, Tatshenshini-Alsek provincial parks, Kluane National Park and Reserve, Nahanni National Park Reserve, Nááts’ihch’oh National Park Reserve, and Ni’iinlii’njik (Fishing Branch) Territorial Park. Threats include logging, hydroelectric development, mining, road-building, and habitat fragmentation near Whitehorse.',
      sourceIds: ['one-earth-na6', 'one-earth-eco-380', 'one-earth-eco-383', 'one-earth-eco-419'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:common-raven',
      'species:dall-sheep',
      'species:mountain-goat',
      'species:grizzly-bear',
      'species:gyrfalcon',
      'species:trumpeter-swan',
      'species:golden-eagle',
      'species:hoary-marmot',
    ],
    countryIds: ['CA', 'US'],
    sources: ['one-earth-na6', 'one-earth-eco-380', 'one-earth-eco-383', 'one-earth-eco-419'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na7',
    summary: {
      value:
        'Northwest Canadian Taiga, Lakes & Wetlands (NA7) spans the region between the Greater Yukon and the Canadian Shield, covering roughly half of the Northwest Territories, Canada, about 63 million hectares (63,082 thousand ha). It includes Great Bear Lake, one of the largest lakes in North America, and many wetlands hosting woodland caribou, wood bison, whooping cranes, and the flagship northern shrike.',
      sourceIds: ['one-earth-na7', 'one-earth-eco-378', 'one-earth-eco-381'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'northern Interior Plains taiga',
        'Great Bear Lake, one of the largest lakes in North America',
        'most of the Mackenzie River Valley, the longest river system in Canada',
        'extensive wetlands and muskeg',
      ],
      sourceIds: ['one-earth-na7', 'one-earth-eco-378', 'one-earth-eco-381'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Subarctic to mid and high boreal with cool to warm summers and very cold winters; precipitation 100–500 mm, mostly 250–500 mm, reaching 500 mm in the southwest; discontinuous to continuous permafrost with widespread wetlands.',
        annualPrecipitationMm: { min: 100, max: 500 },
      },
      sourceIds: ['one-earth-eco-378', 'one-earth-eco-381'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'relatively tall closed aspen, white spruce, and balsam fir forest',
        'open, stunted black spruce peatland and muskeg',
        'mixed-wood spruce, pine, tamarack, birch, aspen, and poplar on better-drained and southern sites',
        'bogs and wetlands covering 20–50% of typical landscapes',
      ],
      sourceIds: ['one-earth-eco-378', 'one-earth-eco-381'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'significant lightning fire regime',
        'Peace-Athabasca Delta flooding of one of the world’s largest freshwater deltas',
        'Great Slave Lake and Great Bear Lake colonial waterbird and fish communities (Great Slave Lake 614 m, the deepest in North America)',
        'beaver engineering including the world’s longest known beaver dam',
      ],
      sourceIds: ['one-earth-eco-378', 'one-earth-eco-381'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Protection target 93%; protection level 1 (scale 0–10). Wood Buffalo National Park (44,807 km2), the largest national park in Canada and second largest in the world, protects the Peace-Athabasca Delta and the only natural whooping crane breeding population, while other parts of the bioregion hold no protected areas. Threats include logging, oil and gas development with seismic-line fragmentation, and mining in the Mackenzie River Valley.',
      sourceIds: ['one-earth-na7', 'one-earth-eco-378', 'one-earth-eco-381'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:northern-shrike',
      'species:whooping-crane',
      'species:wood-bison',
      'species:woodland-caribou',
      'species:grizzly-bear',
      'species:gray-wolf',
      'species:wolverine',
      'species:american-marten',
    ],
    countryIds: ['CA'],
    sources: ['one-earth-na7', 'one-earth-eco-378', 'one-earth-eco-381'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na8',
    summary: {
      value:
        'Mid-Canada Boreal Plains & Foothill Forests (NA8) lies between the Northern Rockies and the Canadian Shield forests, about 69 million hectares (68,982 thousand ha) of plains and foothill forest spanning the Lake Winnipeg watershed. It holds some of the highest-biodiversity breeding-bird areas of the Canadian boreal zone, with the American beaver, common loon, moose, and woodland caribou among its characteristic fauna.',
      sourceIds: ['one-earth-na8', 'one-earth-eco-345', 'one-earth-eco-376'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'foothills of the Northern Rockies and plateau remnants',
        'gently rolling boreal plains and foothill forests',
        'Lake Winnipeg, one of the largest watersheds in Canada',
        'abundant wetlands and peatlands',
      ],
      sourceIds: ['one-earth-na8', 'one-earth-eco-345', 'one-earth-eco-376'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Subhumid cold-temperate to mid-boreal with warm to cool summers and long, cold winters; annual precipitation 300–625 mm, fairly even across the year; permafrost largely confined to peatlands.',
        annualPrecipitationMm: { min: 300, max: 625 },
      },
      sourceIds: ['one-earth-eco-345', 'one-earth-eco-376'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lodgepole pine, quaking aspen, and white spruce foothill forest',
        'mixed quaking aspen–balsam poplar plains forest',
        'later-successional black spruce, white spruce, and balsam poplar',
        'tamarack and black spruce wetlands',
      ],
      sourceIds: ['one-earth-eco-345', 'one-earth-eco-376'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'the highest number of breeding bird species in the entire Canadian boreal zone',
        'frequent lightning fires generating a shifting age mosaic',
        'fire-dominated foothill and plains ecology',
        'wetland–forest dynamics of the Lake Winnipeg basin',
      ],
      sourceIds: ['one-earth-eco-345', 'one-earth-eco-376'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Protection target 64%; protection level 1 (scale 0–10). Protection is limited – only about 1–6% of the constituent ecoregions is protected, with key sites including Goose Mountain Ecological Reserve, Whitecourt Mountain Natural Area, and areas within the Lake Winnipeg watershed. Extensive forestry, logging roads and clearcuts, agriculture, road-building, oil and gas production, and mining are the chief threats.',
      sourceIds: ['one-earth-na8', 'one-earth-eco-345', 'one-earth-eco-376'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:american-beaver',
      'species:common-loon',
      'species:moose',
      'species:woodland-caribou',
      'species:canada-lynx',
      'species:gray-wolf',
      'species:american-white-pelican',
      'species:american-black-bear',
    ],
    countryIds: ['CA'],
    sources: ['one-earth-na8', 'one-earth-eco-345', 'one-earth-eco-376'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na9',
    summary: {
      value:
        'Canadian Shield & Coastal Taiga-Forests (NA9) stretches great boreal and taiga forests across North America from the Northwest Territories to the Atlantic Ocean in the Canadian Boreal Forests subrealm, about 325 million hectares (325,135 thousand ha) – the largest of these bioregions – plus marine areas of James Bay, the Labrador Sea, and the Gulf of St. Lawrence. Six ecoregions on the Precambrian Shield support polar bears, woodland and barren-ground caribou, lynx, and moose.',
      sourceIds: [
        'one-earth-na9',
        'one-earth-eco-370',
        'one-earth-eco-373',
        'one-earth-eco-374',
        'one-earth-eco-377',
        'one-earth-eco-379',
        'one-earth-eco-382',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'vast Precambrian Shield boreal forest and forest-tundra',
        'James Bay and Hudson Bay lowlands',
        'Canadian Shield lake shorelines of Lake Superior and the interior',
        'Labrador Sea and Gulf of St. Lawrence margins',
      ],
      sourceIds: [
        'one-earth-na9',
        'one-earth-eco-370',
        'one-earth-eco-373',
        'one-earth-eco-374',
        'one-earth-eco-377',
        'one-earth-eco-379',
        'one-earth-eco-382',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Humid mid- to high-boreal in the south grading to low to high subarctic toward Hudson Bay, James Bay, and Ungava; very cold winters and frequent lightning fires; precipitation about 200–625 mm, rising to 1,000 mm in the southeast (about 300–400 mm near Ungava Bay); permafrost continuous in the north and absent in the south.',
        annualPrecipitationMm: { min: 200, max: 1000 },
      },
      sourceIds: [
        'one-earth-eco-370',
        'one-earth-eco-373',
        'one-earth-eco-374',
        'one-earth-eco-377',
        'one-earth-eco-379',
        'one-earth-eco-382',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'black spruce-dominated boreal and taiga forest',
        'jack pine and paper birch fire forests',
        'forest–tundra transitions and Hudson Bay peatlands',
        'balsam fir and white spruce mixed forest in the southeast',
      ],
      sourceIds: [
        'one-earth-eco-370',
        'one-earth-eco-373',
        'one-earth-eco-374',
        'one-earth-eco-377',
        'one-earth-eco-379',
        'one-earth-eco-382',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'large periodic lightning fires covering vast areas',
        'some of the world’s largest caribou herd migrations',
        'the highest post-glacial rebound in North America emerging new coastlines',
        'one of the world’s largest peat accumulations in the Hudson Bay Lowland, a huge carbon sink',
      ],
      sourceIds: [
        'one-earth-eco-370',
        'one-earth-eco-373',
        'one-earth-eco-374',
        'one-earth-eco-377',
        'one-earth-eco-379',
        'one-earth-eco-382',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Protection target 97%; protection level 1 (scale 0–10). Protection is low across the constituent ecoregions (about 4–11%), anchored by Pukaskwa National Park and Ontario’s commitment to protect more than half of the southern Hudson Bay region. Threats include extensive logging, mining and mineral exploration, hydroelectric development, and proposals for massive peat mining.',
      sourceIds: [
        'one-earth-na9',
        'one-earth-eco-370',
        'one-earth-eco-373',
        'one-earth-eco-374',
        'one-earth-eco-377',
        'one-earth-eco-379',
        'one-earth-eco-382',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:polar-bear',
      'species:woodland-caribou',
      'species:barren-ground-caribou',
      'species:canada-lynx',
      'species:gray-wolf',
      'species:arctic-fox',
      'species:american-black-bear',
      'species:moose',
    ],
    countryIds: ['CA'],
    sources: [
      'one-earth-na9',
      'one-earth-eco-370',
      'one-earth-eco-373',
      'one-earth-eco-374',
      'one-earth-eco-377',
      'one-earth-eco-379',
      'one-earth-eco-382',
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
    targetId: 'bioregion:an1',
    summary: {
      value:
        'Continental Antarctica (AN1) comprises the Antarctic continent except the Antarctic Peninsula, including ice-covered land, glaciers, coastal ice sheets, and coastal tundra habitats. Its 11 tundra ecoregions run from Adélie Land, Dronning Maud Land, and Enderby Land through East Antarctica to North and South Victoria Land and the Transantarctic, Ellsworth, and Marie Byrd Land tundras, while adjacent Southern Ocean waters shelter penguins, blue whales, orcas, colossal squids, fur seals, and many endemic fish species, and provide nesting ground for over 100 million birds.',
      sourceIds: [
        'one-earth-an1',
        'one-earth-eco-117',
        'one-earth-eco-119',
        'one-earth-eco-120',
        'one-earth-eco-121',
        'one-earth-eco-122',
        'one-earth-eco-123',
        'one-earth-eco-124',
        'one-earth-eco-125',
        'one-earth-eco-128',
        'one-earth-eco-132',
        'one-earth-eco-134',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the entirety of the Antarctic continent, with the exception of the Antarctic Peninsula',
        'ice-covered land, glaciers, and coastal ice sheets',
        'a variety of coastal tundra habitats important for biodiversity',
        'component terrestrial sectors such as Adélie Land, Dronning Maud Land, Enderby Land, Wilkes Land, and Marie Byrd Land',
        'adjacent marine areas of the Southern Ocean',
      ],
      sourceIds: [
        'one-earth-an1',
        'one-earth-eco-117',
        'one-earth-eco-119',
        'one-earth-eco-120',
        'one-earth-eco-121',
        'one-earth-eco-122',
        'one-earth-eco-123',
        'one-earth-eco-124',
        'one-earth-eco-125',
        'one-earth-eco-128',
        'one-earth-eco-132',
        'one-earth-eco-134',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Polar continental, with no explicit regional temperature or precipitation figures reported; conditions range from relatively mild coastal tundra margins to the cold, dry high polar interior.',
      },
      sourceIds: [
        'one-earth-eco-117',
        'one-earth-eco-119',
        'one-earth-eco-120',
        'one-earth-eco-121',
        'one-earth-eco-122',
        'one-earth-eco-123',
        'one-earth-eco-124',
        'one-earth-eco-125',
        'one-earth-eco-128',
        'one-earth-eco-132',
        'one-earth-eco-134',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'coastal tundra habitats of lichens, mosses, and sparse vascular plants',
        'lichen-dominated communities on nunataks and ice-free coastal oases',
        'moss banks and moss-dominated communities in moister low-lying sites',
        'ice-covered landscapes with limited terrestrial vegetation',
      ],
      sourceIds: [
        'one-earth-eco-117',
        'one-earth-eco-119',
        'one-earth-eco-120',
        'one-earth-eco-121',
        'one-earth-eco-122',
        'one-earth-eco-123',
        'one-earth-eco-124',
        'one-earth-eco-125',
        'one-earth-eco-128',
        'one-earth-eco-132',
        'one-earth-eco-134',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'coastal ice-free oases acting as habitat islands within a vast ice sheet',
        'marine nutrient transfer to land through seabird and seal colonies',
        'strong katabatic winds from the cold interior shaping ice-free habitats',
        'nesting ground for over 100 million birds',
        'adjacent Southern Ocean waters sheltering penguins, blue whales, orcas, colossal squids, fur seals, and many endemic fish species',
      ],
      sourceIds: [
        'one-earth-an1',
        'one-earth-eco-117',
        'one-earth-eco-119',
        'one-earth-eco-120',
        'one-earth-eco-121',
        'one-earth-eco-122',
        'one-earth-eco-123',
        'one-earth-eco-124',
        'one-earth-eco-125',
        'one-earth-eco-128',
        'one-earth-eco-132',
        'one-earth-eco-134',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports no explicit protection target or protection level for the bioregion. Protection is delivered through the Antarctic Treaty System with a network of Antarctic Specially Protected Areas, though these cover only a small fraction of Antarctic species and territory; priority actions across the component ecoregions include managing the human footprint of research and tourism, incorporating climate science into protected-area management, and systematic conservation planning.',
      sourceIds: [
        'one-earth-an1',
        'one-earth-eco-117',
        'one-earth-eco-119',
        'one-earth-eco-120',
        'one-earth-eco-121',
        'one-earth-eco-122',
        'one-earth-eco-123',
        'one-earth-eco-124',
        'one-earth-eco-125',
        'one-earth-eco-128',
        'one-earth-eco-132',
        'one-earth-eco-134',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:snow-petrel',
      'species:adelie-penguin',
      'species:antarctic-petrel',
      'species:emperor-penguin',
      'species:south-polar-skua',
    ],
    countryIds: ['AQ'],
    sources: [
      'one-earth-an1',
      'one-earth-eco-117',
      'one-earth-eco-119',
      'one-earth-eco-120',
      'one-earth-eco-121',
      'one-earth-eco-122',
      'one-earth-eco-123',
      'one-earth-eco-124',
      'one-earth-eco-125',
      'one-earth-eco-128',
      'one-earth-eco-132',
      'one-earth-eco-134',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:an3',
    summary: {
      value:
        'The Subantarctic Indian Ocean Islands (AN3) bioregion consists of four island groupings in the South Indian Ocean, roughly halfway between the Cape of Good Hope in South Africa and the Antarctic mainland: Prince Edward, Crozet, Kerguelen, and Heard and McDonald Islands. A single tundra ecoregion, Southern Indian Ocean Islands Tundra (133), unifies the island groups together with their surrounding marine areas.',
      sourceIds: ['one-earth-an3', 'one-earth-eco-133'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'four island groupings in the South Indian Ocean, about halfway between the Cape of Good Hope and the Antarctic mainland',
        'Prince Edward Islands (South Africa), Crozet and Kerguelen (France), and Heard and McDonald Islands (Australia)',
        'a single tundra ecoregion, Southern Indian Ocean Islands Tundra, with surrounding marine areas',
      ],
      sourceIds: ['one-earth-an3', 'one-earth-eco-133'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'No explicit temperature or precipitation figures reported; the islands are described as cold, wet, and windy, with size and glaciation varying largely with their position relative to the Antarctic Convergence.',
      },
      sourceIds: ['one-earth-eco-133'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'sub-Antarctic tundra vegetation, with many vascular plants shared across the wider Southern Ocean region',
        'endemic vascular plants including the tussock grass Poa cooki, the Kerguelen Cabbage Pringlea ascorbutica, and the fern Polystichum marionense',
        'cushion plants such as Azorella selago alongside sub-Antarctic herbs and tussock grasses',
      ],
      sourceIds: ['one-earth-eco-133'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'millions of burrowing petrels nesting on the islands',
        'some of the world’s largest concentrations of breeding albatrosses and penguins',
        'all six species of Antarctic seals breeding in the ecoregion',
        'high isolation promoting endemism, including the Vulnerable Eaton’s pintail',
      ],
      sourceIds: ['one-earth-eco-133'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports no explicit protection target or protection level for the bioregion. Many of the islands are classified as World Heritage Areas and/or Ramsar sites and are relatively well protected, but pressure from human activity and non-native species remains the biggest threat; priority actions include the prioritized eradication of invasive species and strict biosecurity, and research on invasive-species impacts.',
      sourceIds: ['one-earth-an3', 'one-earth-eco-133'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:wandering-albatross',
      'species:king-penguin',
      'species:macaroni-penguin',
      'species:antarctic-fur-seal',
      'species:subantarctic-fur-seal',
      'species:southern-elephant-seal',
    ],
    countryIds: ['AQ'],
    sources: ['one-earth-an3', 'one-earth-eco-133'],
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
  {
    targetId: 'bioregion:nt10',
    summary: {
      value:
        'Ecuadorean Dry Coastal Forests & Flooded Grasslands (NT10) centers on the Gulf of Guayaquil at the mouth of the Guayas River, where four terrestrial ecoregions meet coastal mangrove and marine areas across roughly 10.66 million hectares. Moist forests in the north give way to tropical dry forest, flooded grasslands, and savannas, with a warm, seasonally dry climate and wetter conditions toward the north.',
      sourceIds: [
        'one-earth-nt10',
        'one-earth-eco-516',
        'one-earth-eco-531',
        'one-earth-eco-549',
        'one-earth-eco-582',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'coastal plain and lowlands centered on the Gulf of Guayaquil at the Guayas River mouth',
        'Andean foothills bordering the moist forests to the east',
        'Pacific coastal mangrove and marine areas adjacent to the terrestrial ecoregions',
        'flooded grasslands and savannas of the lowland Guayas Basin',
        'dry forest lowlands below 300 m with outlying areas rising above 800 m',
      ],
      sourceIds: [
        'one-earth-nt10',
        'one-earth-eco-516',
        'one-earth-eco-531',
        'one-earth-eco-549',
        'one-earth-eco-582',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'dense moist forest canopy with lianas and epiphytes in the wetter northern zones',
        'tropical dry forest of Ceiba, mesquite, palo santo, and cacti',
        'flooded grasslands and savannas with aquatic grasses in the lowlands',
        'significant floral endemism concentrated in the dry forests',
      ],
      sourceIds: [
        'one-earth-nt10',
        'one-earth-eco-516',
        'one-earth-eco-531',
        'one-earth-eco-549',
        'one-earth-eco-582',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:jaguar',
      'species:ocelot',
      'species:grey-cheeked-parakeet',
      'species:rio-pescado-stubfoot-toad',
      'species:pale-headed-brush-finch',
      'species:peruvian-tern',
      'species:equatorial-dog-faced-bat',
    ],
    countryIds: ['EC', 'PE', 'CO'],
    sources: [
      'one-earth-nt10',
      'one-earth-eco-516',
      'one-earth-eco-531',
      'one-earth-eco-549',
      'one-earth-eco-582',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt11',
    summary: {
      value:
        'Andean Mountain Forests & Valleys (NT11) spans the upper half of the Andes from the top of the continent to northern Argentina, defined by tropical and subtropical broadleaf forests along the humid eastern flank and seventeen unique ecoregions. It holds the three sacred headwaters of the Amazon River across about 93 million hectares, with the mountain tapir as an iconic species and a high diversity of endemic birds.',
      sourceIds: [
        'one-earth-nt11',
        'one-earth-eco-444',
        'one-earth-eco-448',
        'one-earth-eco-457',
        'one-earth-eco-460',
        'one-earth-eco-477',
        'one-earth-eco-479',
        'one-earth-eco-486',
        'one-earth-eco-493',
        'one-earth-eco-504',
        'one-earth-eco-513',
        'one-earth-eco-523',
        'one-earth-eco-526',
        'one-earth-eco-538',
        'one-earth-eco-542',
        'one-earth-eco-590',
        'one-earth-eco-591',
      'one-earth-eco-593',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'upper half of the Andes from the top of the continent to northern Argentina',
        'humid eastern flanks of tropical and subtropical broadleaf forest',
        'rain-shadow inter-Andean dry valleys with thorn forest and cactus scrub',
        'treeless páramo grassland above the treeline',
        'the three sacred headwaters of the Amazon River',
      ],
      sourceIds: [
        'one-earth-nt11',
        'one-earth-eco-444',
        'one-earth-eco-448',
        'one-earth-eco-457',
        'one-earth-eco-460',
        'one-earth-eco-477',
        'one-earth-eco-479',
        'one-earth-eco-486',
        'one-earth-eco-493',
        'one-earth-eco-504',
        'one-earth-eco-513',
        'one-earth-eco-523',
        'one-earth-eco-526',
        'one-earth-eco-538',
        'one-earth-eco-542',
        'one-earth-eco-590',
        'one-earth-eco-591',
        'one-earth-eco-593',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'tropical evergreen broadleaf montane forest',
        'cloud forest and elfin woodland in the upper belt',
        'Polylepis transitional forest at the treeline',
        'treeless páramo of tussock grasses, cushion plants, and giant Espeletia rosettes',
        'dry thorn forest and cactus scrub in rain-shadow valleys',
      ],
      sourceIds: [
        'one-earth-nt11',
        'one-earth-eco-444',
        'one-earth-eco-448',
        'one-earth-eco-457',
        'one-earth-eco-460',
        'one-earth-eco-477',
        'one-earth-eco-479',
        'one-earth-eco-486',
        'one-earth-eco-493',
        'one-earth-eco-504',
        'one-earth-eco-513',
        'one-earth-eco-523',
        'one-earth-eco-526',
        'one-earth-eco-538',
        'one-earth-eco-542',
        'one-earth-eco-590',
        'one-earth-eco-591',
        'one-earth-eco-593',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:mountain-tapir',
      'species:spectacled-bear',
      'species:jaguar',
      'species:northern-pudu',
      'species:diademed-tapaculo',
      'species:cauca-guan',
      'species:yellow-faced-parrotlet',
      'species:gray-capped-hemispingus',
    ],
    countryIds: ['BO', 'CO', 'EC', 'PE', 'VE', 'AR'],
    sources: [
      'one-earth-nt11',
      'one-earth-eco-444',
      'one-earth-eco-448',
      'one-earth-eco-457',
      'one-earth-eco-460',
      'one-earth-eco-477',
      'one-earth-eco-479',
      'one-earth-eco-486',
      'one-earth-eco-493',
      'one-earth-eco-504',
      'one-earth-eco-513',
      'one-earth-eco-523',
      'one-earth-eco-526',
      'one-earth-eco-538',
      'one-earth-eco-542',
      'one-earth-eco-590',
      'one-earth-eco-591',
      'one-earth-eco-593',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt17',
    summary: {
      value:
        'Southern Amazonian Forests (NT17) stretches from the Marajó Archipelago through central Brazil to Bolivia, south of the Amazon River, spanning roughly 174 million hectares of mostly highly diverse tropical moist forest with drier transition forest bordering the Cerrado. The bioregion holds four ecoregions — Madeira-Tapajós, Mato Grosso dry forests, Tapajós-Xingu, and Xingu-Tocantins-Araguaia — and the Amazonian manatee is its iconic species, with a conservation target of 73%.',
      sourceIds: [
        'one-earth-nt17',
        'one-earth-eco-476',
        'one-earth-eco-481',
        'one-earth-eco-507',
        'one-earth-eco-518',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the lowland plain south of the Amazon River with many major and minor Amazon tributaries',
        'the Madeira-Tapajós interfluve of central Amazonia',
        'transitional dry forests and Cerrado-bordering woodlands of Mato Grosso',
        'the Tapajós-Xingu interfluvial plain on the weathered Brazilian Shield',
        'the Xingu, Tocantins, and Araguaia lowlands toward the Marajó Archipelago',
      ],
      sourceIds: [
        'one-earth-nt17',
        'one-earth-eco-476',
        'one-earth-eco-481',
        'one-earth-eco-507',
        'one-earth-eco-518',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'highly diverse tropical moist forest with a dense high canopy and emergent trees',
        'seasonally flooded forest along whitewater rivers',
        'drier transition forest bordering the Cerrado',
        'white-sand grasslands and campos on the upper Madeira and Tapajós Rivers',
      ],
      sourceIds: [
        'one-earth-nt17',
        'one-earth-eco-476',
        'one-earth-eco-481',
        'one-earth-eco-507',
        'one-earth-eco-518',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:amazonian-manatee',
      'species:jaguar',
      'species:lowland-tapir',
      'species:white-lipped-peccary',
      'species:hyacinth-macaw',
      'species:amazon-river-dolphin',
      'species:white-nosed-saki',
    ],
    countryIds: ['BR', 'BO'],
    sources: [
      'one-earth-nt17',
      'one-earth-eco-476',
      'one-earth-eco-481',
      'one-earth-eco-507',
      'one-earth-eco-518',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt18',
    summary: {
      value:
        'Western Amazonian Forests & Plains (NT18) extends north from Bolivia to the Amazon River in Peru, contained by the Andes to the west, across roughly 111 million hectares of moist and seasonally flooded tropical forest plus the Beni Savanna to the south. It contains four ecoregions including the Iquitos Várzea and Southwest Amazon moist forests, with the Amazon river dolphin, or boto, as its iconic species and a conservation target of 90%.',
      sourceIds: [
        'one-earth-nt18',
        'one-earth-eco-469',
        'one-earth-eco-505',
        'one-earth-eco-512',
        'one-earth-eco-565',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'western Amazon lowlands between the Andes and the Amazon River mainstem',
        'the Ucayali, Marañon, and Madre de Dios river basins draining the Andean foothills',
        'the extensively seasonally flooded Iquitos várzea plain',
        'the upper Amazon interfluves of the Southwest Amazon moist forests',
        'the tree-dotted Beni Savanna plains of lowland Bolivia',
      ],
      sourceIds: [
        'one-earth-nt18',
        'one-earth-eco-469',
        'one-earth-eco-505',
        'one-earth-eco-512',
        'one-earth-eco-565',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'tall evergreen moist tropical forest on terra firme',
        'várzea forest seasonally flooded by whitewater rivers',
        'southern savanna grasslands with forest islands encircled by forest',
        'riverine palm stands and flooded-forest transitions',
      ],
      sourceIds: [
        'one-earth-nt18',
        'one-earth-eco-469',
        'one-earth-eco-505',
        'one-earth-eco-512',
        'one-earth-eco-565',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:amazon-river-dolphin',
      'species:jaguar',
      'species:lowland-tapir',
      'species:capybara',
      'species:yellow-tailed-woolly-monkey',
      'species:blue-throated-macaw',
      'species:maned-wolf',
    ],
    countryIds: ['PE', 'BO', 'BR'],
    sources: [
      'one-earth-nt18',
      'one-earth-eco-469',
      'one-earth-eco-505',
      'one-earth-eco-512',
      'one-earth-eco-565',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt19',
    summary: {
      value:
        'Central Amazonian Forests (NT19) contains the central mainstem of the Amazon River and three major tributaries — the Japurá to the north and the Madeira and Purus to the south — forming the heart of the Amazon across nearly 127 million hectares. Seasonally flooded várzea and igapó forests line its rivers and streams, supporting the iconic ocellate river stingray, with a combined conservation target of 94%.',
      sourceIds: [
        'one-earth-nt19',
        'one-earth-eco-483',
        'one-earth-eco-446',
        'one-earth-eco-503',
        'one-earth-eco-496',
        'one-earth-eco-474',
        'one-earth-eco-482',
        'one-earth-eco-497',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the central mainstem of the Amazon River with the Japurá, Madeira, and Purus tributaries',
        'eastern and western halves unified by seasonally flooded forests along rivers and streams',
        'many lakes formed at the junctions of the Amazon River and its major tributaries',
        'low flooded plains of the Purus and Solimões várzeas',
        'Andean foothill fringes of the Napo and Caquetá basins in the northwest',
      ],
      sourceIds: [
        'one-earth-nt19',
        'one-earth-eco-483',
        'one-earth-eco-446',
        'one-earth-eco-503',
        'one-earth-eco-496',
        'one-earth-eco-474',
        'one-earth-eco-482',
        'one-earth-eco-497',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'dense evergreen tropical rainforest with canopies near 30 m and emergents to 45–50 m',
        'terra firme forest on well-drained uplands',
        'várzea whitewater floodplain forest',
        'igapó blackwater floodplain forest',
        'extremely high floristic diversity with up to 250 tree species per hectare',
      ],
      sourceIds: [
        'one-earth-nt19',
        'one-earth-eco-483',
        'one-earth-eco-446',
        'one-earth-eco-503',
        'one-earth-eco-496',
        'one-earth-eco-474',
        'one-earth-eco-482',
        'one-earth-eco-497',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:ocellate-river-stingray',
      'species:jaguar',
      'species:lowland-tapir',
      'species:capybara',
      'species:bald-uakari',
      'species:amazon-river-dolphin',
      'species:pirarucu',
    ],
    countryIds: ['BR', 'CO', 'PE', 'EC'],
    sources: [
      'one-earth-nt19',
      'one-earth-eco-483',
      'one-earth-eco-446',
      'one-earth-eco-503',
      'one-earth-eco-496',
      'one-earth-eco-474',
      'one-earth-eco-482',
      'one-earth-eco-497',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt20',
    summary: {
      value:
        'Northern Amazonian Forests (NT20) lies between the Amazon River and the Guiana Shield, comprising the Rio Negro — the principal northern tributary of the Amazon — across roughly 105 million hectares of moist tropical forest. It contains five ecoregions from the Negro-Branco forests to the Gurupa Varzea and holds the capybara as its iconic species, with a conservation target of 93%.',
      sourceIds: [
        'one-earth-nt20',
        'one-earth-eco-484',
        'one-earth-eco-473',
        'one-earth-eco-498',
        'one-earth-eco-511',
        'one-earth-eco-467',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'forested lowlands between the Amazon River and the crystalline uplands of the Guiana Shield',
        'the Rio Negro and its blackwater tributaries crossing Colombia, Venezuela, and Brazil',
        'white-sand campinarana patches of the Rio Negro basin',
        'the Uatumã and Trombetas interfluves north of the Amazon',
        'the Amazon delta várzea of Ilha Grande de Gurupá',
      ],
      sourceIds: [
        'one-earth-nt20',
        'one-earth-eco-484',
        'one-earth-eco-473',
        'one-earth-eco-498',
        'one-earth-eco-511',
        'one-earth-eco-467',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'evergreen moist tropical forest with high local tree diversity',
        'várzea and igapó floodplain forest along whitewater and blackwater rivers',
        'white-sand campinarana heath forest on nutrient-poor soils',
        'piassaba-palm-rich forest and Brazil nut stands',
      ],
      sourceIds: [
        'one-earth-nt20',
        'one-earth-eco-484',
        'one-earth-eco-473',
        'one-earth-eco-498',
        'one-earth-eco-511',
        'one-earth-eco-467',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:capybara',
      'species:jaguar',
      'species:ocelot',
      'species:lowland-tapir',
      'species:black-headed-uakari',
      'species:red-faced-spider-monkey',
      'species:pied-tamarin',
    ],
    countryIds: ['BR', 'CO', 'VE', 'GY', 'SR'],
    sources: [
      'one-earth-nt20',
      'one-earth-eco-484',
      'one-earth-eco-473',
      'one-earth-eco-498',
      'one-earth-eco-511',
      'one-earth-eco-467',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt21',
    summary: {
      value:
        'Guianan Forests & Savanna (NT21) spans more than 106 million hectares of dense tropical forest and Guianan savanna across Venezuela, Colombia, Brazil, Guyana, Suriname, and French Guiana. The Guiana Highlands rise in rocky plateaus that feed the region’s many waterfalls, including Angel Falls, the world’s highest. One of the most biodiverse bioregions on Earth, it holds more than 13,000 plant species and 3,000 vertebrate species, roughly two-fifths endemic, with a conservation target of 94%.',
      sourceIds: [
        'one-earth-nt21',
        'one-earth-eco-463',
        'one-earth-eco-464',
        'one-earth-eco-465',
        'one-earth-eco-466',
        'one-earth-eco-488',
        'one-earth-eco-490',
        'one-earth-eco-510',
        'one-earth-eco-548',
        'one-earth-eco-570',
        'one-earth-eco-583',
        'one-earth-eco-611',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the Guiana Highlands, rocky plateaus that feed the region’s many waterfalls including Angel Falls',
        'dense tropical forest across eastern Venezuela, the Guianas, and northern Brazil',
        'Guianan savannas embedded within the forested matrix',
        'flooded wetlands and mangrove fringes along the northern coast',
        'a subrealm extending from the border of Venezuela and Colombia to the Atlantic coast',
      ],
      sourceIds: [
        'one-earth-nt21',
        'one-earth-eco-463',
        'one-earth-eco-464',
        'one-earth-eco-465',
        'one-earth-eco-466',
        'one-earth-eco-488',
        'one-earth-eco-490',
        'one-earth-eco-510',
        'one-earth-eco-548',
        'one-earth-eco-570',
        'one-earth-eco-583',
        'one-earth-eco-611',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'dense tropical forest renowned as one of the most biodiverse in the world',
        'Guianan savannas scattered through the forest matrix',
        'flooded swamp and wetland forests along rivers and coastal plains',
        'mangrove belts on the Amazon-to-Caribbean coast',
      ],
      sourceIds: [
        'one-earth-nt21',
        'one-earth-eco-463',
        'one-earth-eco-464',
        'one-earth-eco-465',
        'one-earth-eco-466',
        'one-earth-eco-488',
        'one-earth-eco-490',
        'one-earth-eco-510',
        'one-earth-eco-548',
        'one-earth-eco-570',
        'one-earth-eco-583',
        'one-earth-eco-611',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:brilliant-thighed-poison-frog',
      'species:jaguar',
      'species:lowland-tapir',
      'species:giant-otter',
      'species:red-faced-spider-monkey',
      'species:black-caiman',
      'species:scarlet-ibis',
      'species:harpy-eagle',
    ],
    countryIds: ['VE', 'CO', 'BR', 'GY', 'SR', 'GF'],
    sources: [
      'one-earth-nt21',
      'one-earth-eco-463',
      'one-earth-eco-464',
      'one-earth-eco-465',
      'one-earth-eco-466',
      'one-earth-eco-488',
      'one-earth-eco-490',
      'one-earth-eco-510',
      'one-earth-eco-548',
      'one-earth-eco-570',
      'one-earth-eco-583',
      'one-earth-eco-611',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt22',
    summary: {
      value:
        'Llanos & Dry Forests (NT22) covers nearly 45 million hectares of almost entirely open grassy plains crossed by the Orinoco and Apure rivers, with dry tropical forests in the Andean foothills of Colombia and Venezuela. The seasonally flooded llanos sustain the world’s largest side-necked turtle, the Arrau turtle, as the iconic species, alongside a conservation target of 40%.',
      sourceIds: ['one-earth-nt22', 'one-earth-eco-520', 'one-earth-eco-572'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'almost entirely open grassy plains, the llanos, bounded by the Andes, the Venezuelan coastal range, and the Guiana Shield',
        'the Orinoco and Apure rivers crossing the plains',
        'dry tropical forests at the Andean foothills',
        'a young lowland depression less than 10,000 years old',
      ],
      sourceIds: ['one-earth-nt22', 'one-earth-eco-520', 'one-earth-eco-572'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'extensive open grassy savannas and seasonally flooded grasslands',
        'deciduous thorn forests on the Venezuelan side of the foothills',
        'gallery forests and palm-rich wetlands along rivers',
      ],
      sourceIds: ['one-earth-nt22', 'one-earth-eco-520', 'one-earth-eco-572'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:arrau-turtle',
      'species:capybara',
      'species:jaguar',
      'species:giant-anteater',
      'species:orinoco-crocodile',
      'species:red-footed-tortoise',
      'species:ocelot',
      'species:white-tailed-deer',
    ],
    countryIds: ['CO', 'VE'],
    sources: ['one-earth-nt22', 'one-earth-eco-520', 'one-earth-eco-572'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt23',
    summary: {
      value:
        'Venezuelan Coast (NT23) is a coastal, semi-arid bioregion spanning the Venezuelan coastline north of the Cordillera de la Costa and into the La Guajira peninsula of northeastern Colombia across roughly 23.7 million hectares. Strong xeric fauna and Margarita and Paria endemic isolates mark its twelve ecoregions, with Baird’s tapir as the iconic species and a conservation target of 48%.',
      sourceIds: [
        'one-earth-nt23',
        'one-earth-eco-447',
        'one-earth-eco-456',
        'one-earth-eco-499',
        'one-earth-eco-536',
        'one-earth-eco-539',
        'one-earth-eco-546',
        'one-earth-eco-594',
        'one-earth-eco-597',
        'one-earth-eco-602',
        'one-earth-eco-603',
        'one-earth-eco-606',
        'one-earth-eco-611',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the Venezuelan coastline north of the Cordillera de la Costa',
        'the La Guajira peninsula of northeastern Colombia shared with Venezuela',
        'semi-arid coastal plains and xeric scrub belts',
        'islands and peninsulas including Margarita, Araya, and Paria',
        'the Sierra Nevada de Santa Marta as an isolated coastal sky-island in the southwest',
      ],
      sourceIds: [
        'one-earth-nt23',
        'one-earth-eco-447',
        'one-earth-eco-456',
        'one-earth-eco-499',
        'one-earth-eco-536',
        'one-earth-eco-539',
        'one-earth-eco-546',
        'one-earth-eco-594',
        'one-earth-eco-597',
        'one-earth-eco-602',
        'one-earth-eco-603',
        'one-earth-eco-606',
        'one-earth-eco-611',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'deserts and xeric shrublands as the dominant primary biome',
        'dry and montane forests on coastal cordilleras and sky-islands',
        'páramo grasslands above treeline on the Sierra Nevada de Santa Marta',
        'mangrove belts shared with the Amazon-Orinoco-Southern Caribbean complex',
      ],
      sourceIds: [
        'one-earth-nt23',
        'one-earth-eco-447',
        'one-earth-eco-456',
        'one-earth-eco-499',
        'one-earth-eco-536',
        'one-earth-eco-539',
        'one-earth-eco-546',
        'one-earth-eco-594',
        'one-earth-eco-597',
        'one-earth-eco-602',
        'one-earth-eco-603',
        'one-earth-eco-606',
        'one-earth-eco-611',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bairds-tapir',
      'species:cotton-top-tamarin',
      'species:geoffroys-spider-monkey',
      'species:caribbean-manatee',
      'species:green-sea-turtle',
      'species:hawksbill-sea-turtle',
      'species:leatherback-turtle',
    ],
    countryIds: ['VE', 'CO'],
    sources: [
      'one-earth-nt23',
      'one-earth-eco-447',
      'one-earth-eco-456',
      'one-earth-eco-499',
      'one-earth-eco-536',
      'one-earth-eco-539',
      'one-earth-eco-546',
      'one-earth-eco-594',
      'one-earth-eco-597',
      'one-earth-eco-602',
      'one-earth-eco-603',
      'one-earth-eco-606',
      'one-earth-eco-611',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt13',
    summary: {
      value:
        'Cerrado Savannas (NT13) covers more than one-fifth of Brazil’s land area as the largest savanna region in South America, spanning roughly 194 million hectares across two ecoregions, Campos Rupestres Montane Savanna and the Cerrado. It is one of the richest tropical savannas on Earth, with about 10,000 plant species, 200 mammal species, and 10 endemic bird species, with the maned wolf and giant armadillo among its iconic fauna. One Earth reports a conservation target of 13% with a protection level of 9.',
      sourceIds: ['one-earth-nt13', 'one-earth-eco-566', 'one-earth-eco-567'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'plateaus and tablelands from 500 to 1,700 m elevation',
        'the Espinhaço Range as a pre-Cambrian crystalline plateau (566)',
        'gallery forests along streams and rivers',
        'ecotonal transitions toward moist Atlantic forests and dry Chaco–Caatinga habitats',
      ],
      sourceIds: ['one-earth-nt13', 'one-earth-eco-566', 'one-earth-eco-567'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical seasonal climate with a pronounced wet–dry cycle; the page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-nt13'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'campos rupestres rock-field savanna on the Espinhaço Range (566)',
        'cerrado s.l., from open campo limpo grasslands to cerradão woodland',
        'gallery forests and palm-rich wetlands along watercourses',
      ],
      sourceIds: ['one-earth-nt13', 'one-earth-eco-566', 'one-earth-eco-567'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'one of the richest tropical savannas on Earth',
        'an ecological mixing theater between Amazon and Atlantic moist forests and Chaco–Caatinga dry habitats',
        'a center of plant and vertebrate endemism in campos rupestres rock fields',
      ],
      sourceIds: ['one-earth-nt13', 'one-earth-eco-566', 'one-earth-eco-567'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 13% with a protection level of 9, relatively well protected compared with other Neotropical bioregions. Chapada dos Veadeiros and Emas national parks anchor protection of the Cerrado, while mining, cattle ranching, and agricultural expansion remain the main pressures.',
      sourceIds: ['one-earth-nt13', 'one-earth-eco-566', 'one-earth-eco-567'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:maned-wolf',
      'species:giant-armadillo',
      'species:jaguar',
      'species:giant-anteater',
      'species:blue-eyed-ground-dove',
    ],
    countryIds: ['BR'],
    sources: ['one-earth-nt13', 'one-earth-eco-566', 'one-earth-eco-567'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt14',
    summary: {
      value:
        'Brazilian Atlantic Moist Forests (NT14) spans nearly the entire length of Brazil’s eastern coast as roughly 123 million hectares of tropical broadleaf forest reaching into the heart of the Cerrado across twelve ecoregions, including Serra do Mar, Bahia Coastal Forests, and Southern Atlantic Brazilian Mangroves. Hundreds of rare and endemic species occur here, with about 20,000 plant species and roughly 450 tree species per hectare, with the maned three-toed sloth as iconic fauna. One Earth reports a conservation target of 29% with a protection level of 3.',
      sourceIds: [
        'one-earth-nt14',
        'one-earth-eco-439',
        'one-earth-eco-440',
        'one-earth-eco-441',
        'one-earth-eco-442',
        'one-earth-eco-443',
        'one-earth-eco-462',
        'one-earth-eco-491',
        'one-earth-eco-492',
        'one-earth-eco-500',
        'one-earth-eco-509',
        'one-earth-eco-609',
        'one-earth-eco-616',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a nearly continuous eastern coastal strip with scattered interior massifs',
        'the Serra do Mar escarpment and coastal plain from 20 m to 1,500 m summits',
        'inland plateaus and forested depressions of the Brazilian Plateau',
        'oceanic islands including Fernando de Noronha and the Trindade–Martin Vaz archipelago',
      ],
      sourceIds: [
        'one-earth-nt14',
        'one-earth-eco-439',
        'one-earth-eco-440',
        'one-earth-eco-441',
        'one-earth-eco-442',
        'one-earth-eco-443',
        'one-earth-eco-462',
        'one-earth-eco-491',
        'one-earth-eco-492',
        'one-earth-eco-500',
        'one-earth-eco-509',
        'one-earth-eco-609',
        'one-earth-eco-616',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Humid to subtropical climates along the tropical Atlantic slope; the page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-nt14'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Atlantic tropical broadleaf moist forest with emergents above 30 m',
        'semi-deciduous and seasonal forests toward the Cerrado margin',
        'coastal restinga sand forests, mangroves, and Araucaria forest',
        'island scrub, secondary forest, and volcanic rock vegetation on isolated islets',
      ],
      sourceIds: [
        'one-earth-nt14',
        'one-earth-eco-439',
        'one-earth-eco-440',
        'one-earth-eco-441',
        'one-earth-eco-442',
        'one-earth-eco-443',
        'one-earth-eco-462',
        'one-earth-eco-491',
        'one-earth-eco-492',
        'one-earth-eco-500',
        'one-earth-eco-509',
        'one-earth-eco-609',
        'one-earth-eco-616',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'an avian and plant center of endemism spanning several endemic bird areas',
        'migration corridors between moist and semi-deciduous Atlantic forests and the Cerrado',
        'oceanic isolation driving endemism on archipelagos such as Fernando de Noronha',
      ],
      sourceIds: [
        'one-earth-nt14',
        'one-earth-eco-439',
        'one-earth-eco-440',
        'one-earth-eco-441',
        'one-earth-eco-442',
        'one-earth-eco-443',
        'one-earth-eco-462',
        'one-earth-eco-491',
        'one-earth-eco-492',
        'one-earth-eco-500',
        'one-earth-eco-509',
        'one-earth-eco-609',
        'one-earth-eco-616',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 29% with a protection level of 3, placing the Atlantic forest among the most degraded bioregions, with many remnants holding under 1% of their original cover. The largest and best-protected tracts remain in the Serra do Mar, while mining, urban expansion, timber extraction, and forest conversion continue to threaten the remainder.',
      sourceIds: ['one-earth-nt14'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:maned-sloth',
      'species:southern-muriqui',
      'species:golden-lion-tamarin',
      'species:brown-howler',
      'species:ocelot',
    ],
    countryIds: ['BR'],
    sources: [
      'one-earth-nt14',
      'one-earth-eco-439',
      'one-earth-eco-440',
      'one-earth-eco-441',
      'one-earth-eco-442',
      'one-earth-eco-443',
      'one-earth-eco-462',
      'one-earth-eco-491',
      'one-earth-eco-492',
      'one-earth-eco-500',
      'one-earth-eco-509',
      'one-earth-eco-609',
      'one-earth-eco-616',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt15',
    summary: {
      value:
        'Brazilian Atlantic Dry Forests (NT15) incorporates Brazil’s southeastern cape and adjacent marine areas across roughly 100 million hectares, a mosaic of four ecoregions — Caatinga, Brazilian Atlantic Dry Forests, Maranhão Babaçu Forests, and Caatinga Enclaves Moist Forests — dominated by shrublands, cacti, and thorny woodlands. Its marine biodiversity is rich, with 57% of fish species endemic, and the black bearded saki stands as the iconic species. One Earth reports a conservation target of 14% with a protection level of 5.',
      sourceIds: ['one-earth-nt15', 'one-earth-eco-445', 'one-earth-eco-524', 'one-earth-eco-525', 'one-earth-eco-540'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'drought-prone flats and plateaus of northeastern Brazil',
        'the São Francisco River depression and lowlands',
        'the east–west transition from Atlantic forest to Cerrado and Amazon flanks',
        'serra uplands such as Chapada do Araripe and Serra de Baturité rising out of dry shrubland',
      ],
      sourceIds: ['one-earth-nt15', 'one-earth-eco-445', 'one-earth-eco-524', 'one-earth-eco-525', 'one-earth-eco-540'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Hot and dry climate across a mosaic of drought-deciduous forest and thorn scrub; the page states no numeric precipitation or temperature values for the bioregion itself.',
      },
      sourceIds: ['one-earth-nt15'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'caatinga dry forest and thorn scrub, from low shrubby growth to 25–30 m tall forest',
        'tropical dry deciduous and semi-deciduous forest on limestone soils (524)',
        'babassu palm–dominated transition forest (540)',
        'semi-deciduous moist forest islands within the caatinga matrix (445)',
      ],
      sourceIds: ['one-earth-nt15', 'one-earth-eco-445', 'one-earth-eco-524', 'one-earth-eco-525', 'one-earth-eco-540'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'one of the largest dry forest regions in South America',
        'a concentration of threatened parrots, titi monkeys, and endemic birds across remnant forests',
        'an ecotonal mixing zone between Atlantic forests, Cerrado, and Amazonia',
      ],
      sourceIds: ['one-earth-nt15', 'one-earth-eco-445', 'one-earth-eco-524', 'one-earth-eco-525', 'one-earth-eco-540'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 14% with a protection level of 5. More than half of the caatinga and most flat-land dry forest have been converted, with charcoal demand, agriculture, and cattle ranching the leading pressures, while parks such as Serra da Capivara anchor regional protection.',
      sourceIds: ['one-earth-nt15', 'one-earth-eco-524', 'one-earth-eco-525'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:black-bearded-saki',
      'species:scarlet-ibis',
      'species:lears-macaw',
      'species:buff-breasted-tody-tyrant',
      'species:maned-wolf',
    ],
    countryIds: ['BR'],
    sources: ['one-earth-nt15', 'one-earth-eco-445', 'one-earth-eco-524', 'one-earth-eco-525', 'one-earth-eco-540'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt16',
    summary: {
      value:
        'Amazon River Estuary (NT16) covers the delta at the end of the Amazon’s roughly 4,000-mile journey in northern Brazil, joining the Tocantins River and the Marajó Archipelago across more than 31 million hectares, with four ecoregions spanning tidal várzea forest, terra firme and igapó, restinga, and mangrove habitats. It is the easternmost Amazonian bioregion, with the scarlet ibis as the iconic species among rich floodplain and island fauna. One Earth reports a conservation target of 63% with a protection level of 5.',
      sourceIds: ['one-earth-nt16', 'one-earth-eco-480', 'one-earth-eco-508', 'one-earth-eco-485', 'one-earth-eco-611'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the Amazon delta and the Marajó Archipelago labyrinth of sedimentary islands',
        'low tidal floodplains and poorly drained clay-soiled várzea',
        'flat alluvial plains shaped by Amazon River dynamics',
        'a narrow band of beach and restinga forests along the eastern coast',
      ],
      sourceIds: ['one-earth-nt16', 'one-earth-eco-480', 'one-earth-eco-508', 'one-earth-eco-485'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Equatorial climate with monsoon rainfall and a strong marine influence; the page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-nt16'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'tidal várzea flooded forest with buriti, açaí, and manatee-bush thickets (480)',
        'terra firme, igapó, and várzea moist forest in the Tocantins–Pindare lowlands (508)',
        'restinga dune and sand-coastal vegetation (485)',
        'Amazon-Orinoco-Southern Caribbean mangrove belts (611)',
      ],
      sourceIds: ['one-earth-nt16', 'one-earth-eco-480', 'one-earth-eco-508', 'one-earth-eco-485', 'one-earth-eco-611'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'saltwater–freshwater mixing and nutrient cycling through tidal várzea',
        'fruit-dispersal webs built around large fishes such as tambaqui and pirarucu',
        'massive seasonal flooding that keeps forests underwater much of the year',
      ],
      sourceIds: ['one-earth-nt16', 'one-earth-eco-480', 'one-earth-eco-508', 'one-earth-eco-485'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a combined conservation target of 63% with a protection level of 5. The Marajó Archipelago Environmental Protection Area anchors the region, while cattle and water buffalo ranching, logging, and settlement expansion remain the leading threats to flooded forest and restinga habitats.',
      sourceIds: ['one-earth-nt16', 'one-earth-eco-480', 'one-earth-eco-508', 'one-earth-eco-485'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:scarlet-ibis',
      'species:caribbean-manatee',
      'species:tambaqui',
      'species:pirarucu',
      'species:green-sea-turtle',
    ],
    countryIds: ['BR'],
    sources: ['one-earth-nt16', 'one-earth-eco-480', 'one-earth-eco-508', 'one-earth-eco-485', 'one-earth-eco-611'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt1',
    summary: {
      value:
        'Chilean Mixed Forests (NT1) covers roughly 41 million hectares across the western half of Patagonia, encompassing myriad waterways and coastal rainforests, the Chilean Lake District, and the large glaciers of the southernmost Andes, together containing the Magellanic Subpolar Forests (561) and Valdivian Temperate Forests (563). The flagship Chilean huemul shares these forests with pudu, puma, and both the South American gray fox and Andean fox. One Earth reports a conservation target of 45% with a protection level of 7.',
      sourceIds: ['one-earth-nt1'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the western half of Patagonia with myriad waterways and coastal rainforests',
        'the Chilean Lake District',
        'large glaciers and ice caps at the southernmost Andes',
        'a narrow strip between the western Andes slope and the Pacific',
      ],
      sourceIds: ['one-earth-nt1'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Cool temperate maritime climates with precipitation strongly influenced by the Andes rain shadow and distance from the Pacific; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-nt1'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'coastal evergreen temperate rainforests',
        'Magellanic subpolar and Valdivian broadleaf forests',
        'deciduous beech woodlands and Magellanic moorland toward the archipelago',
        'glaciers, snowfields, and alpine vegetation at the southern Andes',
      ],
      sourceIds: ['one-earth-nt1'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'the Andes rain shadow driving a sharp west–east moisture gradient',
        'glacial and ice-cap processes shaping the southernmost Andes',
        'a temperate-forest center of endemism for birds, amphibians, and deer',
      ],
      sourceIds: ['one-earth-nt1'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 45% with a protection level of 7. Protection is anchored by parks such as Laguna San Rafael, Bernardo O\'Higgins, Torres del Paine, and Cabo de Hornos in Chile and Los Glaciares and Tierra del Fuego in Argentina, while habitat conversion, burning and logging, the Carretera Austral, rising tourism, and the introduced North American beaver are the leading pressures.',
      sourceIds: ['one-earth-nt1'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:chilean-huemul',
      'species:southern-pudu',
      'species:puma',
      'species:andean-fox',
      'species:south-american-gray-fox',
      'species:kelp-goose',
      'species:striated-caracara',
    ],
    countryIds: ['CL', 'AR'],
    sources: ['one-earth-nt1'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt2',
    summary: {
      value:
        'Patagonia Steppe & Low Mountains (NT2) spans roughly 93 million hectares across most of Argentina’s temperate grassland biome between the Andes and the Espinal, extending into Chile and the Falkland Islands, and contains the Low Monte (577) and Patagonian Steppe (578) ecoregions. The flagship southern river otter reflects the bioregion’s freshwater and coastal-marine linkages. One Earth reports a conservation target of 54% with a protection level of 1.',
      sourceIds: ['one-earth-nt2'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the vast Patagonian steppe lowlands of southern Argentina',
        'low mountain ranges and the Atlantic shore',
        'the southern Andes margin shared with Chile',
        'Islas Malvinas (Falkland Islands) and southern Atlantic marine areas',
      ],
      sourceIds: ['one-earth-nt2'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Cold, dry, windswept steppe climates in the rain shadow of the Andes; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-nt2'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'dry xerophytic dwarf and cushion shrub steppe (Acantholippia, Benthamiella, Nassauvia, Verbena)',
        'desert scrub of the Low Monte with Larrea and Bulnesia',
        'grass-steppe transitions toward the Espinal',
      ],
      sourceIds: ['one-earth-nt2'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'sheep grazing driving desertification and soil erosion',
        'strong westerly winds and rain-shadow aridity east of the Andes',
        'freshwater and coastal-marine connectivity around the flagship southern river otter',
      ],
      sourceIds: ['one-earth-nt2'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 54% with a protection level of 1, among the least-protected bioregions in this batch. Laguna Blanca, Nahuel Huapi, Perito Moreno, and Los Glaciares anchor protection, while overgrazing, poaching of guanaco and rhea, and fox and puma hunting and poisoning remain the leading threats.',
      sourceIds: ['one-earth-nt2'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:southern-river-otter',
      'species:guanaco',
      'species:patagonian-mara',
      'species:hooded-grebe',
      'species:puma',
      'species:south-american-gray-fox',
      'species:chilean-huemul',
      'species:patagonian-weasel',
    ],
    countryIds: ['AR', 'CL', 'FK'],
    sources: ['one-earth-nt2'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt3',
    summary: {
      value:
        'Rio de la Plata Grasslands (NT3) covers more than 111 million hectares of pampas, espinal, and flooded savannas across central Argentina and Uruguay, assembled from the Uruguayan Savanna, Espinal, Humid Pampas, Paraná Flooded Savanna, and Southern Cone Mesopotamian Savanna ecoregions. The flagship marsh deer shares these plains with capybara, pampas deer, greater rhea, and pampas fox. One Earth reports a conservation target of 24% with a protection level of 1.',
      sourceIds: ['one-earth-nt3'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the humid pampas of eastern Argentina',
        'thorny espinal plains east of the Andes',
        'the Paraná and Paraguay river floodplains and delta',
        'Uruguayan rolling savannas along the northern shore of the Río de la Plata',
      ],
      sourceIds: ['one-earth-nt3'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Warm temperate to subtropical climates, humid to the east and drier toward the west and south; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-nt3'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'moderate grasslands of the humid pampas (Stipa, Piptochaetium, Aristida, Paspalum)',
        'carob- and caldén-dominated espinal woodland and shrubland',
        'palm savannas and gallery forests of the Uruguayan savanna',
        'seasonally inundated floodplain vegetation of the Paraná',
      ],
      sourceIds: ['one-earth-nt3'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'a south-temperate grassland–wetland continuum of continental bird importance',
        'seasonal flood-pulse hydrology in the Paraná and Paraguay floodplains',
        'migrant-bird staging and wetland corridors',
      ],
      sourceIds: ['one-earth-nt3'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 24% with a protection level of 1, with the Humid Pampas carrying the lowest target of the batch at 4%. Protection is largely inadequate, anchored by reserves such as Otamendi and the Mar Chiquita Ramsar site, while cattle ranching, agriculture conversion, wetland drainage, and burning are the dominant pressures.',
      sourceIds: ['one-earth-nt3'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:marsh-deer',
      'species:capybara',
      'species:pampas-deer',
      'species:greater-rhea',
      'species:pampas-fox',
      'species:yellow-cardinal',
      'species:southern-screamer',
      'species:black-and-white-monjita',
    ],
    countryIds: ['AR', 'UY'],
    sources: ['one-earth-nt3'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt4',
    summary: {
      value:
        'Chaco Grasslands (NT4) covers more than 108 million hectares of the Gran Chaco across much of Paraguay and northern Argentina, a dry-forest and savanna mosaic named from the Quechua word for hunting land, containing the Dry Chaco (569) and Humid Chaco (571) ecoregions. The flagship Chacoan peccary, long known only as a fossil, survives alongside the giant anteater and maned wolf. One Earth reports a conservation target of 48% with a protection level of 3.',
      sourceIds: ['one-earth-nt4'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the plains and low ranges of the Gran Chaco',
        'thorn forest and impenetrable thickets of the Dry Chaco',
        'flood-origin woodland–savanna mosaics of the Humid Chaco',
        'several large salt flats in the south',
      ],
      sourceIds: ['one-earth-nt4'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Subtropical semi-arid to humid climates along a strong west–east rainfall gradient; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-nt4'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'savanna and thorn forest with quebracho and Bulnesia sarmientoi',
        'willow-leaf red and white quebracho woodland',
        'flooded bogs with black and white carob, spiny hackberry, and caranday palm',
        'bayonet bromeliads and star cactus thickets',
      ],
      sourceIds: ['one-earth-nt4'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'a Pleistocene-paced arid–humid–semiarid oscillation',
        'one of the great Neotropical corridors of large-mammal and bird fauna',
        'productive seasonal hunting grounds recognized by the Guarani name Gran Chaco',
      ],
      sourceIds: ['one-earth-nt4'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 48% with a protection level of 3. Defensores del Chaco National Park and private reserves in Paraguay plus Pilcomayo, Baritú, Calilegua, and El Rey parks in Argentina anchor protection, while cattle and goat grazing, Trans-Chaco road access, hunting, and quebracho logging are the main pressures.',
      sourceIds: ['one-earth-nt4'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:chacoan-peccary',
      'species:giant-anteater',
      'species:maned-wolf',
      'species:marsh-deer',
      'species:white-lipped-peccary',
      'species:capybara',
      'species:greater-rhea',
      'species:yacare-caiman',
    ],
    countryIds: ['PY', 'AR'],
    sources: ['one-earth-nt4'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt5',
    summary: {
      value:
        'Andean Mountain Grasslands (NT5) spans the central Andes from central Argentina to central Peru, centered on the Altiplano—the world’s second-highest plateau—and the Lake Titicaca basin, across roughly 82.8 million hectares and five ecoregions: Central Andean Dry Puna, Central Andean Puna, Central Andean Wet Puna, High Monte, and Southern Andean Steppe. The flagship Andean cat hunts the puna alongside vicuña, lesser rhea, and long-tailed chinchilla. One Earth reports a conservation target of 45% with a protection level of 4.',
      sourceIds: ['one-earth-nt5'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the high Andean plateau (Altiplano) and its margins',
        'the Lake Titicaca basin',
        'dry puna, wet puna, and southern Andean steppe belts',
        'volcanic plateaus and canyons of the high-monte foothills',
      ],
      sourceIds: ['one-earth-nt5'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Cold, high-elevation semi-arid to arid climates with extreme diurnal temperature swings; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-nt5'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'puna bunchgrasses, tolares, and yaretales',
        'Polylepis woodland in sheltered ravines',
        'bofedal wetlands and peat bogs',
        'xeric high-monte scrub of the Andean foothills',
      ],
      sourceIds: ['one-earth-nt5'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'elevation-driven zonation from wet puna to high-monte scrub',
        'high-Andean saline lakes supporting breeding flamingos',
        'a center of endemism for rodents, camelids, and puna birds',
      ],
      sourceIds: ['one-earth-nt5'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 45% with a protection level of 4. Protected areas include Sajama in Bolivia, Manu and the Lake Titicaca Reserve in Peru, and Laguna Brava, San Guillermo, and Aconcagua in Argentina, while livestock grazing and burning, mining pollution, and road and urban expansion are the leading pressures.',
      sourceIds: ['one-earth-nt5'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:andean-cat',
      'species:vicuna',
      'species:lesser-rhea',
      'species:royal-cinclodes',
      'species:long-tailed-chinchilla',
      'species:guanaco',
      'species:andean-fox',
      'species:puma',
    ],
    countryIds: ['AR', 'BO', 'CL', 'PE'],
    sources: ['one-earth-nt5'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt6',
    summary: {
      value:
        'Chilean Matorral (NT6) occupies the central Chilean coastal strip around Santiago and the Valparaíso region, with its northern range near La Serena and Coquimbo, covering roughly 14.9 million hectares and a single ecoregion, Chilean Matorral (596). It is the only Mediterranean-climate biome in South America, and the giant hummingbird stands as the flagship species. One Earth reports a conservation target of 28% with a protection level of 0, the least-protected bioregion in this batch.',
      sourceIds: ['one-earth-nt6'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the central Chilean coastal strip around Santiago and Valparaíso',
        'coastal ranges near La Serena and Coquimbo',
        'the Andes foothill margin of central Chile',
      ],
      sourceIds: ['one-earth-nt6'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Mediterranean climate with warm dry summers and cool wet winters—the only such climate in South America; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-nt6'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'sclerophyllous scrub and espinal woodland',
        'coastal matorral and thorn scrub',
        'endemic scrub associations of central Chile',
      ],
      sourceIds: ['one-earth-nt6'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'the only Mediterranean-climate system in South America',
        'a heavy concentration of Chilean endemic birds and mammals',
        'coastal–Andes moisture and temperature gradients',
      ],
      sourceIds: ['one-earth-nt6'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 28% with a protection level of 0/10, the least-protected biome in Chile. Agriculture, grazing, logging, urbanization, invasive European rabbits, and exotic plants are the leading threats to the remaining matorral.',
      sourceIds: ['one-earth-nt6'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:giant-hummingbird',
      'species:humboldt-penguin',
      'species:southern-pudu',
      'species:andean-cat',
      'species:andean-fox',
      'species:puma',
      'species:pichi-armadillo',
      'species:degu',
    ],
    countryIds: ['CL'],
    sources: ['one-earth-nt6'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt7',
    summary: {
      value:
        'Juan Fernandez & Desventuradas Islands (NT7) comprises the Juan Fernandez archipelago and the uninhabited Desventuradas (San Félix and San Ambrosio) islands more than 670 km off the Chilean coast, together with large surrounding marine areas, across only about 16,000 hectares of land and two ecoregions (560, 562). The endemic Juan Fernandez firecrown hummingbird is the flagship in a region of very high plant and bird endemism. One Earth reports a conservation target of 94% with a protection level of 9.',
      sourceIds: ['one-earth-nt7'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the Juan Fernandez (Robinson Crusoe) archipelago',
        'the Desventuradas islands of San Félix and San Ambrosio',
        'steep volcanic ridges and marine cliffs',
        'extensive surrounding marine areas',
      ],
      sourceIds: ['one-earth-nt7'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Oceanic subtropical climates with a strong maritime influence; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-nt7'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'endemic temperate relict forest on the Juan Fernandez islands',
        'extremely arid sparse scrub on the Desventuradas',
        'very high endemic plant diversity, roughly half or more of the Juan Fernandez flora',
      ],
      sourceIds: ['one-earth-nt7'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'oceanic isolation driving exceptional plant and bird endemism',
        'seabird-dominated nutrient dynamics across island and marine realms',
        'marine-reserve protection of surrounding waters',
      ],
      sourceIds: ['one-earth-nt7'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 94% with a protection level of 9. Juan Fernandez National Park, a UNESCO Biosphere Reserve, and the Nazca-Desventuradas Marine Park—among the largest marine reserves in the Americas—anchor protection, while feral goats, rabbits, and introduced mammals threaten the island ecosystems.',
      sourceIds: ['one-earth-nt7'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:juan-fernandez-firecrown',
      'species:masafuera-rayadito',
      'species:peregrine-falcon',
    ],
    countryIds: ['CL'],
    sources: ['one-earth-nt7'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt8',
    summary: {
      value:
        'South American Coastal Deserts (NT8) runs along the western strip of Peru and northern Chile between the Pacific and the Andes foothills, roughly 29 million hectares of the world’s driest non-polar desert, with fog-fed lomas vegetation and the Atacama (598) and Sechura (608) deserts. The near-threatened Sechuran fox is the flagship species. One Earth reports a conservation target of 20% with a protection level of 2.',
      sourceIds: ['one-earth-nt8'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the coastal strip of Peru and northern Chile west of the Andes',
        'the hyperarid Atacama Desert',
        'the Sechura Desert of northern Peru and adjacent Chile',
        'fog-fed coastal lomas and oasis wetlands',
      ],
      sourceIds: ['one-earth-nt8'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Hyperarid desert with fog-driven coastal moisture; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-nt8'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'fog-fed bromeliad and herb-rich lomas communities',
        'sparse xeric desert scrub',
        'coastal wetlands and river oases',
      ],
      sourceIds: ['one-earth-nt8'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'coastal fog (camanchaca) sustaining rare lomas ecosystems',
        'one of the driest biomes on Earth',
        'an isolation-driven center of desert endemism',
      ],
      sourceIds: ['one-earth-nt8'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 20% with a protection level of 2. Cerros de Amotape, San Fernando, Paracas, and Pan de Azúcar anchor some protection, while urbanization, mining pollution, overgrazing, wetland reclamation, and wood extraction are the leading pressures.',
      sourceIds: ['one-earth-nt8'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sechuran-fox',
      'species:darwins-leaf-eared-mouse',
      'species:south-american-gray-fox',
      'species:peruvian-plantcutter',
      'species:white-winged-guan',
      'species:peru-pacific-iguana',
    ],
    countryIds: ['PE', 'CL'],
    sources: ['one-earth-nt8'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt9',
    summary: {
      value:
        'Galapagos Islands (NT9) comprises 61 volcanic islands roughly 1,000 km west of Ecuador in the Pacific, covering about 803,000 hectares with one ecoregion, Galapagos Islands Xeric Scrub (601). The Galapagos giant tortoise is the flagship of an island fauna in which 20 of 22 resident reptiles are endemic. One Earth reports a conservation target of 100% with a protection level of 10.',
      sourceIds: ['one-earth-nt9'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        '61 volcanic islands and islets',
        'xeric scrub and coastal zones',
        'lava fields and recent volcanic terrain',
        'large surrounding marine areas',
      ],
      sourceIds: ['one-earth-nt9'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Cool oceanic seasonality in which the driest season is the cool season from June to December; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-nt9'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'xeric scrub and dry-forest remnants',
        'coastal halophyte and mangrove zones',
        'an endemic flora of about 180 species among roughly 500 natives',
      ],
      sourceIds: ['one-earth-nt9'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'extreme isolation driving remarkable reptile and bird endemism',
        'oceanic cold-water upwelling supporting marine megafauna',
        'flagship evolutionary radiations of giant tortoises and Darwin’s finches',
      ],
      sourceIds: ['one-earth-nt9'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 100% with a protection level of 10. Galapagos National Park, a UNESCO World Heritage site since 1978 and Biosphere Reserve since 1984, protects the archipelago, while invasive goats, introduced plants, and the human footprint on five inhabited islands remain the chief threats.',
      sourceIds: ['one-earth-nt9'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:galapagos-giant-tortoise',
      'species:galapagos-marine-iguana',
      'species:galapagos-penguin',
      'species:galapagos-sea-lion',
      'species:galapagos-fur-seal',
      'species:lava-gull',
    ],
    countryIds: ['EC'],
    sources: ['one-earth-nt9'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt12',
    summary: {
      value:
        'Pantanal Flooded Grasslands & Dry Forests (NT12) centers on the Paraguay River floodplain wetland and adjacent dry forests across Bolivia, Brazil, and Paraguay, roughly 40 million hectares of the world’s largest tropical wetland, a UNESCO World Heritage site, containing the Chiquitano Dry Forests (529) and Pantanal (584) ecoregions. The jaguar is the flagship amid giant otter, giant armadillo, marsh deer, and hyacinth macaw. One Earth reports a conservation target of 69% with a protection level of 3.',
      sourceIds: ['one-earth-nt12'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the Paraguay River floodplain',
        'seasonally inundated grasslands and forest islands',
        'the Chiquitano dry-forest transition toward the Cerrado',
        'a low alluvial plain at 75–200 m elevation',
      ],
      sourceIds: ['one-earth-nt12'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Warm tropical seasonal climate with a pronounced flood pulse that can submerge up to 78% of the basin; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-nt12'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'seasonally flooded grassland and savanna',
        'Chiquitano transitional dry forest',
        'riverine forest, gallery woodland, and tree islands',
      ],
      sourceIds: ['one-earth-nt12'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'the seasonal flood pulse cycling nutrients across the basin',
        'the world’s largest tropical wetland complex',
        'a refugium for jaguar, giant otter, and giant armadillo',
      ],
      sourceIds: ['one-earth-nt12'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 69% with a protection level of 3. Pantanal National Park and reserves around Otuquis and San Matías cover part of the basin, while agricultural expansion, the Hidrovia waterway project, pesticide runoff, and gold-mining mercury contamination are the leading threats.',
      sourceIds: ['one-earth-nt12'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:jaguar',
      'species:giant-otter',
      'species:giant-armadillo',
      'species:marsh-deer',
      'species:pampas-deer',
      'species:hyacinth-macaw',
      'species:capybara',
      'species:southern-tamandua',
    ],
    countryIds: ['BO', 'BR', 'PY'],
    sources: ['one-earth-nt12'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na10',
    summary: {
      value:
        'Northeastern American Mixed Forests (NA10) spans roughly 44 million hectares from the top of New Brunswick to the Blue Ridge in the mid-Atlantic United States, uniting the Gulf of Saint Lawrence Lowland, New England-Acadian, and Northeast US Coastal Forests ecoregions. The moose is the flagship of these heavily forested, long-logged temperate lands. One Earth reports a conservation target of 61% with a protection level of 1.',
      sourceIds: ['one-earth-na10'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'temperate broadleaf lowlands from New Brunswick to the mid-Atlantic',
        'the coastal plain of the Northeast United States',
        'Acadian and New England hills and lowlands',
        'the Gulf of St. Lawrence shores of Maritime Canada',
      ],
      sourceIds: ['one-earth-na10'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Humid temperate continental climate with maritime influence along the Atlantic coast; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-na10'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'northern hardwood and mixedwood forest',
        'Acadian coastal and New England transitional forest',
        'coastal oak and pine woodland grading into lowland spruce-fir',
      ],
      sourceIds: ['one-earth-na10'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'a long logging history dating to European settlement',
        'extensive fragmentation across a densely settled region',
        'coastal-maritime influence on forest composition and climate',
      ],
      sourceIds: ['one-earth-na10'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 61% with a protection level of 1. Significant logging and shoreline development pressure the three constituent ecoregions.',
      sourceIds: ['one-earth-na10'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:moose',
      'species:white-tailed-deer',
      'species:american-black-bear',
      'species:piping-plover',
      'species:bog-turtle',
      'species:bobcat',
    ],
    countryIds: ['CA', 'US'],
    sources: ['one-earth-na10'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na11',
    summary: {
      value:
        'Northern Great Lakes Forests (NA11) runs as a forest band from Quebec to Minnesota covering about 87.5 million hectares per its statistics, uniting the Eastern Canadian Temperate-Boreal Transition, Eastern Great Lakes Lowland, Upper Midwest Forest-Savanna, and Western Great Lakes Forests ecoregions. The eastern timber wolf is the flagship of this Algonquin-to-Isle Royale country. One Earth reports a conservation target of 56% with a protection level of 2.',
      sourceIds: ['one-earth-na11'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a forested band from Quebec to Minnesota',
        'the western Great Lakes coastline',
        'the Algonquin and Boundary Waters country',
        'the Isle Royale archipelago',
        'an ~87.5 million hectare stat-block figure against the page prose claim of ~193 million hectares',
      ],
      sourceIds: ['one-earth-na11'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Humid continental climate of the Great Lakes basin with strong lake effects on snowfall and frost; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-na11'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'northern hardwood and mixedwood forest',
        'Great Lakes lowland forest',
        'forest-savanna transition woodland',
        'boreal-temperate transition forest',
      ],
      sourceIds: ['one-earth-na11'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'lake-effect moderation of temperature and snowfall',
        'Isle Royale wolf-moose predator-prey dynamics',
        'old-growth remnants amid a long logging history',
      ],
      sourceIds: ['one-earth-na11'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 56% with a protection level of 2. Logging, fragmentation, and lake-shore development remain the leading pressures.',
      sourceIds: ['one-earth-na11'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:eastern-timber-wolf',
      'species:canada-lynx',
      'species:puma',
      'species:moose',
      'species:loggerhead-shrike',
      'species:iowa-pleistocene-snail',
    ],
    countryIds: ['CA', 'US'],
    sources: ['one-earth-na11'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na12',
    summary: {
      value:
        'Northern Prairie & Aspen Forests (NA12) spans roughly 113 million hectares of the northern Great Plains across Manitoba, Saskatchewan, and Alberta and the Dakotas, Minnesota, Nebraska, Montana, and Wyoming, uniting the Canadian Aspen Forests and Parklands, Northern Shortgrass Prairie, and Northern Tallgrass Prairie ecoregions. The black-tailed prairie dog is the flagship of these largely private lands. One Earth reports a conservation target of 26% with a protection level of 1.',
      sourceIds: ['one-earth-na12'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the northern Great Plains of Canada and the United States',
        'the aspen parkland ecotone',
        'shortgrass tablelands and river breaks',
        'the tallgrass lake-bed plain of glacial Lake Agassiz',
      ],
      sourceIds: ['one-earth-na12'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Semi-arid continental grassland climate with harsh winters and warm summers; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-na12'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'aspen parkland groves and prairie openings',
        'shortgrass prairie',
        'tallgrass prairie remnants',
        'pothole wetlands',
      ],
      sourceIds: ['one-earth-na12'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'the most extensive boreal-grassland ecotone on Earth',
        'prairie-dog and bison dynamics on the plains',
        'grassland fire and grazing regimes',
      ],
      sourceIds: ['one-earth-na12'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 26% with a protection level of 1, among the lowest in this batch. Grassland conversion and a small protected footprint are the chief concerns.',
      sourceIds: ['one-earth-na12'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:black-tailed-prairie-dog',
      'species:american-bison',
      'species:pronghorn',
      'species:black-footed-ferret',
      'species:gray-wolf',
      'species:puma',
      'species:le-contes-sparrow',
    ],
    countryIds: ['CA', 'US'],
    sources: ['one-earth-na12'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na13',
    summary: {
      value:
        'Greater Rockies & Mountain Forests (NA13) covers roughly 70 million hectares of the northern Rocky Mountains from Yellowstone in the United States north to Lake Williston in British Columbia, assembling the Central British Columbia Mountain, Northern Rockies Conifer, South Central Rockies, and Montana Valley and Foothill Grasslands ecoregions. The grizzly bear is the flagship of this transboundary block. One Earth reports a conservation target of 59% with a protection level of 3.',
      sourceIds: ['one-earth-na13'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the northern Rocky Mountains of Canada and the United States',
        'the Greater Yellowstone Ecosystem',
        'Montana and Wyoming valley-and-foothill grasslands',
        'the glaciated ranges flanking Lake Williston',
      ],
      sourceIds: ['one-earth-na13'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Cold montane climate with strong elevation gradients from valley grassland to alpine; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-na13'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Rocky Mountain conifer forest',
        'valley and foothill grassland',
        'subalpine parkland and alpine vegetation',
      ],
      sourceIds: ['one-earth-na13'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'a transboundary corridor for large carnivores',
        'bison, elk, and wolf dynamics in the Greater Yellowstone Ecosystem',
        'grassland-valley transitions in the Montana foothills',
      ],
      sourceIds: ['one-earth-na13'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 59% with a protection level of 3, anchored by Yellowstone and Grand Teton and the Glacier-Waterton-Banff-Jasper national park chain.',
      sourceIds: ['one-earth-na13'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:grizzly-bear',
      'species:woodland-caribou',
      'species:canada-lynx',
      'species:gray-wolf',
      'species:wolverine',
      'species:american-bison',
      'species:puma',
      'species:westslope-cutthroat-trout',
    ],
    countryIds: ['CA', 'US'],
    sources: ['one-earth-na13'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na14',
    summary: {
      value:
        'Northwest Intermountain Conifer Forests (NA14) binds the Fraser Plateau and Basin Conifer Forests and Okanogan Dry Forests ecoregions across roughly 15.7 million hectares of interior British Columbia. The American badger is the flagship of these dry, valley-incised conifer lands. One Earth reports a conservation target of 45% with a protection level of 3.',
      sourceIds: ['one-earth-na14'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the Fraser Plateau and basin',
        'the Chilcotin basalt country',
        'the Okanagan/Okanogan valley system',
        'dry interior plateaus and incised valleys',
      ],
      sourceIds: ['one-earth-na14'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Dry interior-BC continental climate with marked rain-shadow valleys, cold winters, and warm summers; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-na14'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'interior Douglas-fir and ponderosa pine forest',
        'dry valley grassland and open pine woodland',
        'plateau lodgepole pine and spruce forest',
      ],
      sourceIds: ['one-earth-na14'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'an interior rain-shadow gradient from wet plateau to dry valley floor',
        'fire-maintained open pine woodlands',
        'a proposed valley conservation corridor',
      ],
      sourceIds: ['one-earth-na14'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 45% with a protection level of 3. More than 30 federal and about 60 provincial species at risk concentrate in the Okanagan area, where a north-to-south conservation corridor has been proposed.',
      sourceIds: ['one-earth-na14'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:american-badger',
      'species:woodland-caribou',
      'species:barrows-goldeneye',
      'species:puma',
    ],
    countryIds: ['CA'],
    sources: ['one-earth-na14'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na15',
    summary: {
      value:
        'Pacific Northwest Coastal Forests (NA15) covers roughly 29.7 million hectares of coastal temperate rainforest from northern California through Oregon, Washington, and British Columbia, assembling the British Columbia Coastal, Central Pacific Northwest Coastal, Klamath-Siskiyou, Northern California Coastal, Puget Lowland, and Haida Gwaii Conifer Forest ecoregions. The Haida ermine is the flagship of this coast. One Earth reports a conservation target of 55% with a protection level of 3.',
      sourceIds: ['one-earth-na15'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a coastal temperate rainforest fringe from northern California to Haida Gwaii',
        'the Olympic Peninsula and the Washington-British Columbia coast',
        'the Klamath-Siskiyou transition ranges',
        'the Puget Sound and Georgia Basin lowlands',
        'the Haida Gwaii archipelago',
      ],
      sourceIds: ['one-earth-na15'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Cool, wet oceanic climate of the coastal temperate rainforest, mild near the sea and wet year-round; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-na15'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'giant Sitka spruce and western hemlock rainforest',
        'coast redwood groves',
        'Douglas-fir and western redcedar lowland forest',
        'some of the most diverse conifer forests on Earth',
      ],
      sourceIds: ['one-earth-na15'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'fog-drip and orographic rainfall sustaining the rainforest',
        'island endemism in the Haida Gwaii archipelago',
        'near-elimination of old growth driving major conservation planning',
      ],
      sourceIds: ['one-earth-na15'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 55% with a protection level of 3. Olympic National Park and large British Columbia reserves anchor protection, while old-growth logging and introduced species remain the chief threats.',
      sourceIds: ['one-earth-na15'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:haida-ermine',
      'species:mountain-goat',
      'species:american-black-bear',
      'species:puma',
      'species:marbled-murrelet',
      'species:sea-otter',
      'species:fisher',
      'species:northern-spotted-owl',
    ],
    countryIds: ['CA', 'US'],
    sources: ['one-earth-na15'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na16',
    summary: {
      value:
        'Cascades Mountain Forests & Valleys (NA16) spans roughly 16.2 million hectares of the Cascade Range from northern California through Oregon and Washington to the British Columbia border, combining the Central-Southern Cascades, Eastern Cascades, North Cascades, and Willamette Valley Oak Savanna ecoregions. The mountain beaver, sole survivor of an ancient rodent lineage, is the flagship. One Earth reports a conservation target of 47% with a protection level of 4.',
      sourceIds: ['one-earth-na16'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the Cascade Range spine from Mt. Lassen to Mt. Rainier',
        'the rain-shadow eastern slopes of the Cascades',
        'the rugged, glaciated North Cascades',
        'the Willamette Valley between the Cascades and the Coast Range',
      ],
      sourceIds: ['one-earth-na16'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'A pronounced west-to-east gradient from heavy maritime precipitation to a dry rain shadow; the bioregion page states no numeric precipitation or temperature values.',
      },
      sourceIds: ['one-earth-na16'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Cascadian conifer forest',
        'old-growth ponderosa pine woodland on the eastern slopes',
        'glacier-carved North Cascades conifer forest',
        'oak savanna and prairie in the Willamette Valley',
      ],
      sourceIds: ['one-earth-na16'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'volcanic and glacial dynamics along the High Cascades',
        'rain-shadow aridity east of the crest',
        'frequent low-severity fire maintaining ponderosa pine woodland',
        'Kalapuya cultural fire maintaining valley oak savanna',
      ],
      sourceIds: ['one-earth-na16'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 47% with a protection level of 4. Most of the ecoregion has been heavily logged, old-growth and roadless areas remain scarce, and the valley floor is among the continent’s most human-modified landscapes.',
      sourceIds: ['one-earth-na16'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:mountain-beaver',
      'species:northern-spotted-owl',
      'species:elk',
      'species:black-tailed-deer',
      'species:white-headed-woodpecker',
      'species:mule-deer',
      'species:puma',
      'species:american-black-bear',
    ],
    countryIds: ['CA', 'US'],
    sources: ['one-earth-na16'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na17',
    summary: {
      value:
        'Columbia Plateau & Blue Mountains (NA17) spans roughly 15.5 million hectares of intermontane country bounded by the Rocky Mountains to the east and the Cascades to the west, combining the Blue Mountains Forests and Palouse Prairie ecoregions. High-altitude prairie and conifer forests on volcanic mountains hold a large portion of the Snake River drainage. The American black bear is the flagship, and One Earth reports a conservation target of 27% with a protection level of 3.',
      sourceIds: ['one-earth-na17'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the intermontane Columbia Plateau and Blue Mountains',
        'a large portion of the Snake River drainage',
        'high-altitude prairie and volcanic mountain forests',
      ],
      sourceIds: ['one-earth-na17'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only and no numeric precipitation or temperature values; the interior basin has cold winters and warm summers.',
      },
      sourceIds: ['one-earth-na17'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'ponderosa pine and mixed conifer forest',
        'perennial grassland and shrub-steppe prairie',
        'riparian woodland along the Snake River',
      ],
      sourceIds: ['one-earth-na17'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'volcanic geology of the Columbia Plateau',
        'Snake River drainage linking mountain and steppe',
        'the region\u2019s prairie-conifer forest mosaic',
      ],
      sourceIds: ['one-earth-na17'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 27% with a protection level of 3. The two component ecoregions face very different conditions: the Palouse Prairie has lost nearly all its grassland while the Blue Mountains retain substantial forest cover.',
      sourceIds: ['one-earth-na17'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:american-black-bear',
      'species:elk',
      'species:mule-deer',
      'species:bighorn-sheep',
      'species:pronghorn',
      'species:great-gray-owl',
      'species:white-headed-woodpecker',
      'species:golden-eagle',
    ],
    countryIds: ['US'],
    sources: ['one-earth-na17'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na18',
    summary: {
      value:
        'Great Basin & Columbia Steppe (NA18) spans roughly 50.3 million hectares of internally drained basins encircled by mountains, from the Mojave Desert boundary northward, combining the Great Basin Shrub Steppe, Snake-Columbia Shrub Steppe, and Great Basin Montane Forests ecoregions. Desert shrub-steppe with small forested mountain islands incorporates the Great Salt Lake in central Utah. The pronghorn is the flagship, and One Earth reports a conservation target of 82% with a protection level of 1.',
      sourceIds: ['one-earth-na18'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'internally drained basins encircled by mountains',
        'the Great Salt Lake in central Utah',
        'desert shrub-steppe with small forested mountain islands',
      ],
      sourceIds: ['one-earth-na18'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only and no numeric precipitation or temperature values; the steppe is arid with cold winters and hot summers.',
      },
      sourceIds: ['one-earth-na18'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'sagebrush shrub steppe',
        'salt desert scrub',
        'scattered montane forest islands',
      ],
      sourceIds: ['one-earth-na18'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'internally drained basin hydrology',
        'the Great Salt Lake as a remnant of Pleistocene pluvial lakes',
        'sagebrush-steppe dynamics',
      ],
      sourceIds: ['one-earth-na18'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 82% with a protection level of 1, among the highest conservation targets of the North American bioregions, reflecting the low protection level across this arid, largely intact basin.',
      sourceIds: ['one-earth-na18'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:pronghorn',
      'species:mule-deer',
      'species:bighorn-sheep',
      'species:greater-sage-grouse',
      'species:burrowing-owl',
      'species:pygmy-rabbit',
      'species:spotted-bat',
      'species:coyote',
    ],
    countryIds: ['US'],
    sources: ['one-earth-na18'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na19',
    summary: {
      value:
        'Colorado Plateau & Mountain Forests (NA19) spans roughly 72 million hectares of mountain-encircled plateaus and basins from Arizona north to Wyoming, combining the Arizona Mountains Forests, Colorado Rockies Forests, Wasatch and Uinta Montane Forests, Colorado Plateau Shrublands, and Wyoming Basin Shrub Steppe ecoregions. Desert shrublands and shrub-steppe dominate the lowlands while forested mountains rise above them. The elk is the flagship, and One Earth reports a conservation target of 57% with a protection level of 2.',
      sourceIds: ['one-earth-na19'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'high plateaus and basins enclosed by mountains',
        'deep canyons and forested ranges',
        'shrub-steppe lowlands',
      ],
      sourceIds: ['one-earth-na19'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only and no numeric precipitation or temperature values; the climate ranges from cold mountain to arid basin.',
      },
      sourceIds: ['one-earth-na19'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'sagebrush shrub-steppe',
        'pinyon-juniper woodland',
        'montane conifer forest',
      ],
      sourceIds: ['one-earth-na19'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'elevational gradients between desert lowlands and forested mountains',
        'the Colorado River and Wyoming interior basins',
        'more than a thousand years of Native American stewardship',
      ],
      sourceIds: ['one-earth-na19'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 57% with a protection level of 2, with protection spread unevenly across the bioregion and energy development and grazing among the leading pressures.',
      sourceIds: ['one-earth-na19'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:elk',
      'species:puma',
      'species:mule-deer',
      'species:american-black-bear',
      'species:canada-lynx',
      'species:mexican-spotted-owl',
      'species:pronghorn',
      'species:california-condor',
    ],
    countryIds: ['US'],
    sources: ['one-earth-na19'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na20',
    summary: {
      value:
        'Southern Prairie Mixed Grasslands (NA20) spans roughly 98.6 million hectares of the lower Great Plains from Nebraska south to southern Texas, bounded by the Rocky Mountains to the west, combining the Western Shortgrass Prairie, Nebraska Sand Hills Mixed Grasslands, Central-Southern US Mixed Grasslands, Cross-Timbers Savanna-Woodland, and Edwards Plateau Savanna ecoregions. The grassland belt has been largely converted to farmland. The sandhill crane is the flagship, and One Earth reports a conservation target of 38% with a protection level of 0.',
      sourceIds: ['one-earth-na20'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the lower Great Plains from Nebraska to southern Texas',
        'shortgrass, mixed-grass, and tallgrass prairie',
        'dune fields and limestone plateaus',
      ],
      sourceIds: ['one-earth-na20'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only and no numeric precipitation or temperature values; the climate grades from semi-arid steppe in the west to subhumid subtropical in the south.',
      },
      sourceIds: ['one-earth-na20'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'shortgrass and mixed-grass prairie',
        'tallgrass prairie',
        'post oak savanna and juniper-oak woodland',
      ],
      sourceIds: ['one-earth-na20'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'the grassland-savanna transition from west to east',
        'fire and large-herbivore ecology of the Great Plains',
        'extensive conversion of prairie to farmland',
      ],
      sourceIds: ['one-earth-na20'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 38% with a protection level of 0, the lowest protection level reported for the North American bioregions, with the grasslands largely converted to farmland and scattered preserves such as the Wichita Mountains National Wildlife Refuge anchoring bison recovery.',
      sourceIds: ['one-earth-na20'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sandhill-crane',
      'species:american-bison',
      'species:black-tailed-prairie-dog',
      'species:pronghorn',
      'species:mountain-plover',
      'species:mexican-free-tailed-bat',
      'species:black-capped-vireo',
      'species:golden-cheeked-warbler',
    ],
    countryIds: ['US'],
    sources: ['one-earth-na20'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na21',
    summary: {
      value:
        'Midwestern Tallgrass Prairie & Forest Transition (NA21) spans roughly 59.9 million hectares extending eastward from the Missouri River where the Great Plains give way to open forests across Illinois, combining the Central US Forest-Grasslands Transition, Central Tallgrass Prairie, and Flint Hills Tallgrass Prairie ecoregions. The bioregion incorporates the western half of Lake Michigan and a large section of the Missouri River. The Blanding\u2019s turtle is the flagship, and One Earth reports a conservation target of 3% with a protection level of 7.',
      sourceIds: ['one-earth-na21'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the transition from tallgrass prairie to eastern forest',
        'the Missouri River corridor and the western half of Lake Michigan',
        'rolling tallgrass prairie hills',
      ],
      sourceIds: ['one-earth-na21'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only and no numeric precipitation or temperature values; the climate is continental with warm summers and cold winters.',
      },
      sourceIds: ['one-earth-na21'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'tallgrass prairie',
        'oak-hickory forest edge',
        'prairie wetland and riverine communities',
      ],
      sourceIds: ['one-earth-na21'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'forest-grassland transition dynamics',
        'fire and grazing on the prairie',
        'Missouri River hydrology',
      ],
      sourceIds: ['one-earth-na21'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 3% with a protection level of 7. The landscape is among the most converted in North America, but protected prairie networks such as the TNC Nachusa Grasslands anchor grassland bird and bison recovery.',
      sourceIds: ['one-earth-na21'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:blandings-turtle',
      'species:greater-prairie-chicken',
      'species:american-bison',
      'species:northern-harrier',
      'species:dickcissel',
      'species:eastern-meadowlark',
      'species:upland-sandpiper',
      'species:henslows-sparrow',
    ],
    countryIds: ['US'],
    sources: ['one-earth-na21'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na22',
    summary: {
      value:
        'Ozarks Mixed Forests (NA22) spans roughly 17.6 million hectares of the Ozark mountains and highlands between the pine woods to the south and the central grassland-forest transition to the north, combining the Ozark Highlands Mixed Forests and Ozark Mountain Forests ecoregions. Bordered on the east by the lower Mississippi Valley, the bioregion includes most of the Arkansas River. The eastern collared lizard is the flagship, and One Earth reports a conservation target of 48% with a protection level of 1.',
      sourceIds: ['one-earth-na22'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the Ozark mountains and highlands',
        'the Arkansas River and the lower Mississippi Valley border',
        'karst caves and spring systems',
      ],
      sourceIds: ['one-earth-na22'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only and no numeric precipitation or temperature values; the climate is humid warm temperate with hot summers and mild to cool winters.',
      },
      sourceIds: ['one-earth-na22'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'oak-hickory and shortleaf pine forest',
        'pine-bluestem woodland',
        'cave, glade, and spring-fed stream communities',
      ],
      sourceIds: ['one-earth-na22'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'karst hydrology of the Ozark highlands',
        'high endemism in caves and mountain streams',
        'a transition zone between eastern and western biota',
      ],
      sourceIds: ['one-earth-na22'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 48% with a protection level of 1, with substantial intact forest outside protected areas and cave faunas of global significance.',
      sourceIds: ['one-earth-na22'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:eastern-collared-lizard',
      'species:salem-cave-crayfish',
      'species:southern-cavefish',
      'species:fourche-mountain-salamander',
      'species:ouachita-madtom',
      'species:red-cockaded-woodpecker',
      'species:bachmans-sparrow',
      'species:greater-roadrunner',
    ],
    countryIds: ['US'],
    sources: ['one-earth-na22'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na23',
    summary: {
      value:
        'Interior Plateau & Southern Great Lakes Forests (NA23) spans roughly 35.2 million hectares between the Appalachian Mountains to the east and the central grassland-forest transition to the west, combining the Interior Plateau US Hardwood Forests and Southern Great Lakes Forests ecoregions. The bioregion of broadleaf forest extends north to include the eastern half of Lake Michigan and the entirety of Lake Erie. The gray bat is the flagship, and One Earth reports a conservation target of 25% with a protection level of 1.',
      sourceIds: ['one-earth-na23'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the Interior Plateau and southern Great Lakes lowlands',
        'the eastern half of Lake Michigan and all of Lake Erie',
        'rolling broadleaf forest country',
      ],
      sourceIds: ['one-earth-na23'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only and no numeric precipitation or temperature values; the climate is warm continental grading to cold temperate.',
      },
      sourceIds: ['one-earth-na23'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'broadleaf deciduous forest',
        'beech and sugar maple forest',
        'oak-hickory woodland',
      ],
      sourceIds: ['one-earth-na23'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'the karst cave systems of the Interior Plateau',
        'Great Lakes lake-effect climate',
        'extensive historical conversion of the landscape',
      ],
      sourceIds: ['one-earth-na23'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 25% with a protection level of 1. Very little old-growth forest remains after more than a century of industrial and agricultural land use, with the Mammoth-Flint Ridge cave system among the region\u2019s most significant refuges.',
      sourceIds: ['one-earth-na23'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:gray-bat',
      'species:indiana-bat',
      'species:northern-cavefish',
      'species:eastern-screech-owl',
      'species:downy-woodpecker',
    ],
    countryIds: ['US'],
    sources: ['one-earth-na23'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na24',
    summary: {
      value:
        'Appalachia & Allegheny Interior Forests (NA24) spans roughly 58.5 million hectares of broadleaf forest from central Alabama to the highlands of central New York along the Blue Ridge Mountains, combining the Allegheny Highlands Forests, Appalachian Mixed Mesophytic Forests, Appalachian Piedmont Forests, and Appalachian-Blue Ridge Forests ecoregions. Numerous rivers and small lakes dissect the ancient mountains. The hellbender is the flagship, and One Earth reports a conservation target of 56% with a protection level of 1.',
      sourceIds: ['one-earth-na24'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the Blue Ridge and Allegheny highlands',
        'a band from central Alabama to central New York',
        'numerous rivers and small lakes',
      ],
      sourceIds: ['one-earth-na24'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only and no numeric precipitation or temperature values; the climate ranges from warm temperate in the south to cold temperate in the north.',
      },
      sourceIds: ['one-earth-na24'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'broadleaf deciduous forest',
        'mesic cove and northern hardwood forest',
        'high-elevation spruce-fir forest',
      ],
      sourceIds: ['one-earth-na24'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'some of the world\u2019s richest temperate biodiversity',
        'freshwater biodiversity hotspots of the southern Appalachians',
        'major centers of salamander evolution',
      ],
      sourceIds: ['one-earth-na24'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 56% with a protection level of 1, with a high share of natural habitat remaining even as the region faces invasive pests such as the woolly adelgid and continued suburban sprawl.',
      sourceIds: ['one-earth-na24'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:hellbender',
      'species:copperhead',
      'species:paddlefish',
      'species:white-tailed-deer',
      'species:american-black-bear',
      'species:bobcat',
    ],
    countryIds: ['US'],
    sources: ['one-earth-na24'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na25',
    summary: {
      value:
        'The Southeast Savannas & Riparian Forests bioregion covers 73,226 thousand hectares across the Atlantic seaboard and Southeast US, uniting the Mississippi Lowland Forests, Atlantic Coastal Pine Barrens, Mid-Atlantic US Coastal Savannas, and Southeast US Conifer Savannas. Its floodplain forests, pine barrens, and longleaf savannas border marine areas of the Atlantic Ocean and Gulf of Mexico and once supported the ivory-billed woodpecker. One Earth reports a conservation target of 15% with a protection level of 4.',
      sourceIds: ['one-earth-na25'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'covers the Atlantic seaboard and Southeast US',
        'includes the Atlantic coastal pine barrens and the Mississippi lowland forests',
        'adjacent marine areas in the Atlantic Ocean and Gulf of Mexico',
      ],
      sourceIds: ['one-earth-na25'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only and no numeric precipitation or temperature values; the component ecoregions span warm temperate to subtropical climates.',
      },
      sourceIds: ['one-earth-na25'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'floodplain bottomland forests and bald cypress swamps',
        'pitch pine barrens and Atlantic white cedar swamps',
        'longleaf pine savannas and woodlands',
      ],
      sourceIds: ['one-earth-na25'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'spans four ecoregions from the Atlantic seaboard to the Mississippi lowlands',
        'includes some of the oldest bald cypress trees and one of the ancient canebrakes',
      ],
      sourceIds: ['one-earth-na25'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 15% with a protection level of 4, with the component ecoregions ranging from largely intact swamps to heavily converted savannas and marshes.',
      sourceIds: ['one-earth-na25'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:red-cockaded-woodpecker',
      'species:gopher-tortoise',
      'species:american-alligator',
      'species:brown-headed-nuthatch',
      'species:pine-barrens-tree-frog',
      'species:eastern-indigo-snake',
    ],
    countryIds: ['US'],
    sources: ['one-earth-na25'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na26',
    summary: {
      value:
        'The Bermuda bioregion is a single island ecoregion of only 4 thousand hectares, more than 1,000 km from the Atlantic seaboard and unique within the Northern America realm. The Bermuda petrel, thought extinct by the mid-1600s and rediscovered in 1951, is the iconic species of this island of northernmost Atlantic mangrove swamps and coral reefs. One Earth reports a 1% protection target with no protection level listed.',
      sourceIds: ['one-earth-na26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a single island ecoregion more than 1,000 km from the Atlantic seaboard',
        'unique within the Northern America realm',
        'marine areas surrounding the island',
      ],
      sourceIds: ['one-earth-na26'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the island climate is tropical, closely bordering subtropical, with no recorded frosts or freezes.',
      },
      sourceIds: ['one-earth-na26'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'subtropical conifer forests and mangrove swamps',
        'the northernmost mangrove swamps and tropical coral reefs in the Atlantic',
      ],
      sourceIds: ['one-earth-na26'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'the Bermuda petrel, rediscovered in 1951 after being thought extinct since the mid-1600s',
        'a unique island fauna including the endemic Bermuda skink and white-eyed vireo subspecies',
      ],
      sourceIds: ['one-earth-na26'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a 1% protection target with no protection level listed for this small, densely populated island bioregion.',
      sourceIds: ['one-earth-na26'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:bermuda-petrel',
      'species:bermuda-skink',
      'species:white-eyed-vireo',
      'species:diamondback-terrapin',
    ],
    countryIds: ['BM'],
    sources: ['one-earth-na26'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na27',
    summary: {
      value:
        'The Western Gulf Coastal Grasslands bioregion covers 9,107 thousand hectares along the Gulf coast of Texas, the only example of the subtropical grasslands biome in Northern America. Its single ecoregion is home to the iconic Attwater\u2019s prairie chicken and the endangered whooping crane. One Earth reports a conservation target of 29% with a protection level of 6, with adjacent marine areas in the Gulf of Mexico.',
      sourceIds: ['one-earth-na27'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'runs along the Gulf coast of Texas',
        'the only example of the subtropical grasslands biome in Northern America',
        'adjacent marine area in the Gulf of Mexico',
      ],
      sourceIds: ['one-earth-na27'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the climate ranges from humid subtropical to subhumid and semiarid subtropical, progressively drier to the west.',
      },
      sourceIds: ['one-earth-na27'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Gulf coastal prairies and marshes',
        'barrier islands, estuarine lagoons, and intertidal marshes',
      ],
      sourceIds: ['one-earth-na27'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'the only subtropical grasslands biome in Northern America',
        'more than 80% of Gulf coastal prairie lost in Louisiana and nearly that much in Texas',
      ],
      sourceIds: ['one-earth-na27'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 29% with a protection level of 6, with only 16% of the bioregion protected and 3% of natural habitat remaining outside protected areas.',
      sourceIds: ['one-earth-na27'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:attwaters-prairie-chicken',
      'species:whooping-crane',
      'species:white-tailed-deer',
      'species:northern-bobwhite',
    ],
    countryIds: ['US', 'MX'],
    sources: ['one-earth-na27'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na28',
    summary: {
      value:
        'The Southern Mixed Forests & Blackland Prairies bioregion covers 34,313 thousand hectares across the forests of eastern Texas surrounded by Blackland prairie, including the Sabine River drainage. The iconic American bison once ranged across its piney woods, savannas, and blackland prairies. One Earth reports a conservation target of 28% with a protection level of 2.',
      sourceIds: ['one-earth-na28'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'forests through eastern Texas surrounded by Blackland prairie',
        'includes the Sabine River',
        'spans the East Central Texas Savanna-Woodland, Piney Woods Forests, and Texas Blackland Prairies',
      ],
      sourceIds: ['one-earth-na28'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions range from humid subtropical to subhumid warm temperate climates.',
      },
      sourceIds: ['one-earth-na28'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'piney woods and bottomland forests',
        'oak savanna-woodland and tallgrass blackland prairie',
      ],
      sourceIds: ['one-earth-na28'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'the Sabine River as an important drainage',
        'frequent fire and bison grazing maintaining the original blackland prairies',
      ],
      sourceIds: ['one-earth-na28'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 28% with a protection level of 2, with most of the original blackland prairie and savanna converted to pasture, cropland, and urban area.',
      sourceIds: ['one-earth-na28'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:american-bison',
      'species:houston-toad',
      'species:wild-turkey',
      'species:northern-bobwhite',
      'species:eastern-fox-squirrel',
      'species:attwaters-prairie-chicken',
      'species:white-tailed-deer',
    ],
    countryIds: ['US'],
    sources: ['one-earth-na28'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na29',
    summary: {
      value:
        'The Sierra Madre Forests & Mexican Drylands bioregion covers 116,853 thousand hectares from the upper half of Mexico into Arizona, New Mexico, and Texas, dominated by deserts and dry shrublands with pine-oak forests on the eastern and western Sierra Madre ranges. The Mexican wolf is the iconic species of this eight-ecoregion bioregion, which includes the Chihuahuan Desert, Meseta Central Matorral, and Tamaulipan matorrals. One Earth reports a conservation target of 43% with a protection level of 2.',
      sourceIds: ['one-earth-na29'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'dominated by deserts and dry shrublands',
        'pine-oak forests on the eastern and western Sierra Madre ranges',
        'spans the upper half of Mexico plus Arizona, New Mexico, and Texas',
      ],
      sourceIds: ['one-earth-na29'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions range from arid subtropical deserts to cooler montane pine-oak forests.',
      },
      sourceIds: ['one-earth-na29'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'desert and dry shrublands',
        'pine-oak forests on the eastern and western Sierra Madre ranges',
        'Tamaulipan matorral and the mesquite grassland of the Tamaulipan Mezquital',
      ],
      sourceIds: ['one-earth-na29'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'eight ecoregions spanning the Sierra Madre forests to the Chihuahuan and Sonoran deserts',
        'an important range for endemics such as the thick-billed and maroon-fronted parrots, Allen\u2019s squirrel, and the Mexican prairie dog',
      ],
      sourceIds: ['one-earth-na29'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 43% with a protection level of 2 across the eight component ecoregions.',
      sourceIds: ['one-earth-na29'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:mexican-wolf',
      'species:thick-billed-parrot',
      'species:maroon-fronted-parrot',
      'species:ocelot',
      'species:jaguar',
      'species:collared-peccary',
      'species:mexican-prairie-dog',
    ],
    countryIds: ['MX', 'US'],
    sources: ['one-earth-na29'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na30',
    summary: {
      value:
        'The Baja California & Southern Deserts bioregion covers 45,428 thousand hectares across most of the Baja Peninsula and the scorching deserts of southern California and western Mexico, including the Baja California, Gulf of California, Mojave, and Sonoran deserts. The endemic Baja California rock squirrel is the iconic species of these four desert and scrub ecoregions, which border marine areas of the Gulf of California and Pacific Ocean. One Earth reports a conservation target of 56% with a protection level of 6.',
      sourceIds: ['one-earth-na30'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'includes most of the Baja Peninsula and the scorching deserts of southern California',
        'four desert and scrub ecoregions spanning Baja California to the Sonoran Desert',
        'adjacent marine areas in the Gulf of California and Pacific Ocean',
      ],
      sourceIds: ['one-earth-na30'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions range from extremely arid subtropical deserts such as the Mojave to the milder Pacific coastal desert of Baja California.',
      },
      sourceIds: ['one-earth-na30'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'desert scrub from creosote bush flats to cactus deserts and Joshua tree woodlands',
        'oases and islands with endemic plants and reptiles',
      ],
      sourceIds: ['one-earth-na30'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'a shared desert lineage from the Mojave to Baja California',
        'endemic mammals and reptiles such as the Baja California rock squirrel and gray thrasher across the peninsula',
      ],
      sourceIds: ['one-earth-na30'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 56% with a protection level of 6, with extensive protected reserves including Mexico\u2019s largest, the El Vizcaino Biosphere Reserve.',
      sourceIds: ['one-earth-na30'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:baja-california-rock-squirrel',
      'species:desert-tortoise',
      'species:chuckwalla',
      'species:gray-thrasher',
      'species:costas-hummingbird',
      'species:elf-owl',
      'species:gila-woodpecker',
      'species:cactus-wren',
    ],
    countryIds: ['MX', 'US'],
    sources: ['one-earth-na30'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na31',
    summary: {
      value:
        'The Greater California bioregion covers 22,944 thousand hectares of Mediterranean chaparral and woodlands between the Pacific Coast and the Lower California mountains, from the Sierra Nevada and Central Valley to the coastal, montane, and interior chaparral ecoregions. The monarch is the iconic species of a region that inspired John Muir and the US National Parks system, with the Sierra Nevada holding ancient sequoias and the Central Valley among the most productive agricultural regions in the world. One Earth reports a conservation target of 33% with a protection level of 4.',
      sourceIds: ['one-earth-na31'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'defined by Mediterranean chaparral and woodlands between the Pacific Coast and Lower California mountains',
        'the Sierra Nevada with ancient sequoias',
        'the Central Valley, one of the most productive agricultural regions in the world',
      ],
      sourceIds: ['one-earth-na31'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions share a Mediterranean climate with dry summers and winter rainfall.',
      },
      sourceIds: ['one-earth-na31'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Mediterranean chaparral and coastal sage scrub',
        'Sierra Nevada conifer forests with giant sequoia',
        'Central Valley grasslands and oak woodlands',
      ],
      sourceIds: ['one-earth-na31'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'a region that inspired John Muir and the US National Parks system',
        'six ecoregions spanning Mediterranean chaparral and woodlands, montane forests, and valley grasslands',
        'an important monarch migration area',
      ],
      sourceIds: ['one-earth-na31'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 33% with a protection level of 4, with heavily converted Central Valley grasslands balanced by extensive protected montane areas.',
      sourceIds: ['one-earth-na31'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:monarch',
      'species:yosemite-toad',
      'species:yellow-billed-magpie',
      'species:tule-elk',
      'species:alameda-whipsnake',
      'species:california-condor',
      'species:california-gnatcatcher',
      'species:white-eared-pocket-mouse',
    ],
    countryIds: ['US', 'MX'],
    sources: ['one-earth-na31'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au3',
    summary: {
      value:
        'East Australian Temperate Forests & Mountain Shrublands (AU3) spans 56,635 thousand hectares along Australia\u2019s east coast including Tasmania, with six ecoregions of temperate broadleaf forest and a pocket of alpine grasslands atop the Australian Alps, fronted by the Tasman Sea. One Earth sets a 33% conservation target with a protection level of 6; iconic inhabitants include the corroboree frog and superb lyrebird.',
      sourceIds: ['one-earth-au3'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'covers the full east coast of Australia including Tasmania',
        'temperate broadleaf forests with a pocket of alpine grasslands on the Australian Alps',
        'adjacent marine areas in the Tasman Sea',
        'mountain ranges, coastal plains, and tablelands',
      ],
      sourceIds: ['one-earth-au3'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions range from warm coastal temperate forests to cool alpine highlands, with wet rainforests and cold, snowy alps at higher elevations.',
      },
      sourceIds: ['one-earth-au3'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'warm and cool temperate rainforests and tall wet eucalypt forests',
        'dry sclerophyll forests and eucalypt woodlands',
        'Tasmanian alpine heathlands, cushion plants, and bolster moorlands',
        'Australian Alps snow gum woodlands and montane grasslands',
      ],
      sourceIds: ['one-earth-au3'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'island isolation and endemism in Tasmania',
        'high-elevation alpine processes on the Australian Alps',
        'fire-shaped eucalypt forest dynamics',
      ],
      sourceIds: ['one-earth-au3'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 33% with a protection level of 6, with over 50 protected areas including the Tasmanian Wilderness World Heritage Area, Blue Mountains, Border Ranges, and Willi Willi National Parks.',
      sourceIds: ['one-earth-au3'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:corroboree-frog',
      'species:superb-lyrebird',
      'species:tasmanian-devil',
      'species:swift-parrot',
      'species:spotted-tailed-quoll',
      'species:eastern-quoll',
    ],
    countryIds: ['AU'],
    sources: ['one-earth-au3'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au4',
    summary: {
      value:
        'East Australian Mediterranean Woodlands & Temperate Savannas (AU4) occupies 76,438 thousand hectares between the coastal forests and interior deserts, including Kangaroo Island, in four ecoregions of mulga shrubland, temperate savanna, and mallee woodland. One Earth sets a 67% conservation target with a protection level of 1; the yellow-footed rock-wallaby is the iconic species.',
      sourceIds: ['one-earth-au4'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'situated between the coastal forests of the east and the interior deserts of the west',
        'includes Kangaroo Island',
        'adjacent marine areas in Long Bay',
      ],
      sourceIds: ['one-earth-au4'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions share semiarid to temperate climates, largely Mediterranean woodland biome tightly interconnected with the southeastern temperate savanna.',
      },
      sourceIds: ['one-earth-au4'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'mulga and acacia shrublands',
        'temperate savanna and grassy woodlands',
        'Murray-Darling river red gum woodlands and mallee',
        'Naracoorte and Coorong woodlands',
      ],
      sourceIds: ['one-earth-au4'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'semi-arid rain-and-drought cycles',
        'shared lineages between Mediterranean woodland and temperate savanna biomes',
        'rivermouth and coastal process along Long Bay',
      ],
      sourceIds: ['one-earth-au4'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 67% with a protection level of 1, reflecting cleared temperate woodlands and fragmented habitat across the Murray-Darling Basins and Fleurieu region.',
      sourceIds: ['one-earth-au4'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:yellow-footed-rock-wallaby',
      'species:southern-hairy-nosed-wombat',
      'species:major-mitchells-cockatoo',
      'species:short-beaked-echidna',
      'species:emu',
    ],
    countryIds: ['AU'],
    sources: ['one-earth-au4'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au5',
    summary: {
      value:
        'South Australian Mediterranean Forests, Woodlands & Scrub (AU5) spans 61,867 thousand hectares along the southern and western coastline from St. Vincent Gulf to Shark Bay, in eight ecoregions of mallee, jarrah-karri forest, and heathland scrub bordering the Great Australian Bight and Indian Ocean. One Earth sets a 54% conservation target with a protection level of 3; the sandhill dunnart is the iconic species.',
      sourceIds: ['one-earth-au5'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'southern and western coastline from St. Vincent Gulf to Shark Bay',
        'adjacent marine areas in the Great Australian Bight and Indian Ocean',
        'Great Western Woodlands, Nullarbor margin, and Flinders-Lofty ranges',
      ],
      sourceIds: ['one-earth-au5'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions share a Mediterranean climate of cool wet winters and hot dry summers, grading to aridity inland.',
      },
      sourceIds: ['one-earth-au5'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'mallee and heathland formations',
        'jarrah-karri tall forests of the southwest',
        'Eyre and Yorke mallee and woodlands',
        'Coolgardie and Hampton woodlands on the desert margin',
      ],
      sourceIds: ['one-earth-au5'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Mediterranean fire regimes',
        'one of the world\u2019s great biodiversity hotspots in southwest Western Australia',
        'coastal dune and bight processes',
      ],
      sourceIds: ['one-earth-au5'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 54% with a protection level of 3, with important reserves protecting the high endemism of the southwest Australian biodiversity hotspot and southern mallee systems.',
      sourceIds: ['one-earth-au5'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sandhill-dunnart',
      'species:malleefowl',
      'species:southern-hairy-nosed-wombat',
      'species:tammar-wallaby',
      'species:red-tailed-black-cockatoo',
    ],
    countryIds: ['AU'],
    sources: ['one-earth-au5'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au6',
    summary: {
      value:
        'West Australian Dry Coastal Shrublands (AU6) cover 26,377 thousand hectares of the west coast from Shark Bay to the Eighty Mile Beach, in just two ecoregions of spinifex and acacia shrubland fronting the Indian Ocean. One Earth sets a 91% conservation target with a protection level of 1; the Pilbara olive python is the iconic species.',
      sourceIds: ['one-earth-au6'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'west coast from Shark Bay to Eighty Mile Beach in the northwest',
        'adjacent marine areas in the Indian Ocean',
        'scrub-covered plains and ranges of the Pilbara and Carnarvon regions',
      ],
      sourceIds: ['one-earth-au6'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are semi-arid to arid with episodic summer rainfall inland and winter-moderated coastal conditions.',
      },
      sourceIds: ['one-earth-au6'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'spinifex hummock grasslands',
        'acacia mulga and mixed shrublands',
        'coastal samphire and saltbush communities',
      ],
      sourceIds: ['one-earth-au6'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'episodic cyclonic rainfall and drought',
        'fire-driven spinifex dynamics',
        'coastal upwelling and marine nutrients',
      ],
      sourceIds: ['one-earth-au6'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 91% with a protection level of 1, a high target reflecting the extensive intact rangelands of the Pilbara and Carnarvon regions with low current protection.',
      sourceIds: ['one-earth-au6'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:pilbara-olive-python',
      'species:thorny-devil',
      'species:pilbara-leaf-nosed-bat',
      'species:sand-goanna',
    ],
    countryIds: ['AU'],
    sources: ['one-earth-au6'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au7',
    summary: {
      value:
        'Greater Australian Interior Desert & Shrublands (AU7) is the vast 325,462 thousand-hectare desert heart of the continent, centered on Uluru and spanning eight ecoregions of hummock grassland, sandy desert, and gibber plains. One Earth sets an 83% conservation target with a protection level of 3; the black-flanked rock-wallaby is the iconic species.',
      sourceIds: ['one-earth-au7'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'a huge expanse of desert and dry shrublands centered on Uluru/Ayers Rock',
        'sandy dunefields, stony gibber plains, and mulga ranges',
        'Nullarbor solution plains and the Simpson\u2019s parallel dunes',
      ],
      sourceIds: ['one-earth-au7'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are among the most arid in Australia, with low and erratic rainfall and high summer temperatures.',
      },
      sourceIds: ['one-earth-au7'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'spinifex and hummock grassland deserts',
        'mulga and chenopod shrublands',
        'gibber and claypan communities',
        'native cypress pine and desert oak woodlands',
      ],
      sourceIds: ['one-earth-au7'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'boom-and-bust responses to episodic rainfall',
        'fire dynamics in spinifex grasslands',
        'Uluru and Kata Tjuta as sacred Indigenous sites',
      ],
      sourceIds: ['one-earth-au7'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 83% with a protection level of 3, with vast low-productivity interior lands retaining much natural habitat and important reserves such as Uluru-Kata Tjuta and Simpson Desert National Parks.',
      sourceIds: ['one-earth-au7'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:black-flanked-rock-wallaby',
      'species:greater-bilby',
      'species:thorny-devil',
      'species:rufous-hare-wallaby',
      'species:long-tailed-dunnart',
      'species:emu',
    ],
    countryIds: ['AU'],
    sources: ['one-earth-au7'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au8',
    summary: {
      value:
        'North Australian Tropical Savannas (AU8) occupy 168,381 thousand hectares across the north of the continent, from the Kimberley to the Gulf of Carpentaria, in six ecoregions of monsoon woodland and tropical savanna fronting the Timor Sea. One Earth sets an 82% conservation target with a protection level of 2; the golden bandicoot is the iconic species.',
      sourceIds: ['one-earth-au8'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the northern arc of Australia from the Kimberley to the Gulf of Carpentaria',
        'savanna plains, sandstone escarpments, and coastal floodplains',
        'adjacent marine areas in the Timor Sea and Gulf of Carpentaria',
      ],
      sourceIds: ['one-earth-au8'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions share a monsoonal wet-dry tropical climate with intense summer rainfall and long dry winters.',
      },
      sourceIds: ['one-earth-au8'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'tropical eucalypt savanna woodlands',
        'paperbark wetlands and monsoon forests',
        'spinifex and tussock grasslands',
        'Mitchell grass downs plains',
      ],
      sourceIds: ['one-earth-au8'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'annual fire regimes maintained by Aboriginal burning practices',
        'big wet-season riverine and floodplain pulses',
        'migratory shorebird and waterbird flyways',
      ],
      sourceIds: ['one-earth-au8'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 82% with a protection level of 2, with extensive intact savanna and large protected areas including Kakadu and Nitmiluk National Parks.',
      sourceIds: ['one-earth-au8'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:golden-bandicoot',
      'species:gouldian-finch',
      'species:estuarine-crocodile',
      'species:northern-bettong',
      'species:wedge-tailed-eagle',
    ],
    countryIds: ['AU'],
    sources: ['one-earth-au8'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au9',
    summary: {
      value:
        'Queensland Tropical Rainforests & Savannas (AU9) span 56,869 thousand hectares along the northeast coast including Cape York, with three ecoregions of tropical rainforest and tropical savanna fronting the Coral Sea and the Great Barrier Reef offshore. One Earth sets a 77% conservation target with a protection level of 2; the bridled nailtail wallaby is the iconic species.',
      sourceIds: ['one-earth-au9'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'northeast coast from Cape York to the tropics, along the Coral Sea coastline',
        'pockets of coastal rainforest within vast tropical savanna',
        'offshore Great Barrier Reef with 400 corals, 30 cetacean species, and over 1,500 fish species',
      ],
      sourceIds: ['one-earth-au9'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are tropical with monsoon rainfall and a pronounced dry season inland, wetter on the coastal rainforest strip.',
      },
      sourceIds: ['one-earth-au9'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Queensland tropical rainforests including the Wet Tropics World Heritage Area',
        'brigalow acacia scrub and woodlands',
        'Cape York eucalypt savanna woodlands',
      ],
      sourceIds: ['one-earth-au9'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'some of Australia\u2019s oldest continuously surviving rainforest lineages',
        'reef-savanna connections with the Great Barrier Reef',
        'cyclone disturbance along the Coral Sea coast',
      ],
      sourceIds: ['one-earth-au9'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 77% with a protection level of 2, with Wet Tropics and Cape York protected areas and the adjacent Great Barrier Reef Marine Park.',
      sourceIds: ['one-earth-au9'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:southern-cassowary',
      'species:bridled-nailtail-wallaby',
      'species:spectacled-hare-wallaby',
      'species:northern-hairy-nosed-wombat',
      'species:palm-cockatoo',
      'species:koala',
    ],
    countryIds: ['AU'],
    sources: ['one-earth-au9'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au10',
    summary: {
      value:
        'Coral Sea & New Caledonia Islands (AU10) spans New Caledonia\u2019s Grande Terre and adjacent islets in the Melanesian subrealm, uniting two ecoregions of exceptional plant endemism. Humid rainforests and threatened dry forests shelter the flightless kagu, the tool-using New Caledonian crow, and a wealth of endemic reptiles, with roughly 18.4 million hectares of island habitat.',
      sourceIds: ['one-earth-au10'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'New Caledonia\u2019s Grande Terre highlands and leeward coasts',
        'New Caledonia Rainforests and New Caledonia Dry Forests ecoregions',
        'UNESCO-listed lagoon systems bordering forested uplands',
      ],
      sourceIds: ['one-earth-au10'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; humid trade-wind tropical conditions prevail on the wet east, with a pronounced seasonal dry regime in the dry forests of the leeward west.',
      },
      sourceIds: ['one-earth-au10'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'rainforest with roughly 2,500 endemic plants and iconic Araucaria stands',
        'highly threatened dry forest on leeward coasts',
        'sclerophyll and maquis formations on ultramafic soils',
      ],
      sourceIds: ['one-earth-au10'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'ancient Gondwanan lineage isolation on Grande Terre',
        'nickel mining, logging, and invasive species driving habitat loss',
        'orographic rainfall sustaining mountain rainforest',
      ],
      sourceIds: ['one-earth-au10'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports that no conservation target or protection level is given for this bioregion; active pressures from nickel mining, logging, fire, and invasive rats and cats nonetheless threaten its endemic forest fauna and flora.',
      sourceIds: ['one-earth-au10'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:kagu',
      'species:new-caledonian-crow',
      'species:new-caledonian-giant-gecko',
      'species:new-caledonian-flying-fox',
      'species:new-caledonian-lorikeet',
    ],
    countryIds: ['NC', 'AU'],
    sources: ['one-earth-au10'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au11',
    summary: {
      value:
        'Vanuatu Islands (AU11) comprises the wet, cyclone-prone volcanic archipelago of the western Pacific, represented by a single rainforest ecoregion. Many small endemic populations are scattered across individual islands, supporting species such as the Vanuatu megapode and Fele\u2019s imperial pigeon amid significant deforestation.',
      sourceIds: ['one-earth-au11'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'single Vanuatu Rainforests ecoregion across the archipelago',
        'wet volcanic islands from Espiritu Santo to Efate',
        'reserves on the larger islands and scattered community lands',
      ],
      sourceIds: ['one-earth-au11'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the underlying ecoregion is tropical maritime, wet year-round, seasonally variable, and cyclone-prone.',
      },
      sourceIds: ['one-earth-au11'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'tropical rainforest with endemic Viola and Cyrtandra plants',
        'island-restricted endemic populations on volcanic slopes',
        'deforested and agricultural landscapes on accessible islands',
      ],
      sourceIds: ['one-earth-au11'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'cyclone disturbance shaping island forest structure',
        'fragmentation of small island endemic populations',
        'rats and feral pigs pressuring nesting and regeneration',
      ],
      sourceIds: ['one-earth-au11'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 37% with a protection level of 2. Expanding the protected area network, controlling logging and agricultural encroachment, and managing invasive rats and feral pigs are the central challenges.',
      sourceIds: ['one-earth-au11'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:vanuatu-megapode',
      'species:feles-imperial-pigeon',
      'species:vanuatu-flying-fox',
      'species:vanuatu-white-eye',
      'species:vanuatu-kingfisher',
    ],
    countryIds: ['VU'],
    sources: ['one-earth-au11'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au12',
    summary: {
      value:
        'Solomon Islands (AU12) unites the wet equatorial archipelago in a single rainforest ecoregion distinguished by exceptionally high endemism and many island-restricted populations. Industrial logging and oil palm expansion threaten the lowland forest habitat of the prehensile-tailed skink, Sanford\u2019s sea eagle, and other distinctive endemics.',
      sourceIds: ['one-earth-au12'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'single Solomon Islands Rainforests ecoregion across the archipelago',
        'wet equatorial islands with island-restricted populations',
        'forest reserves and community conservation areas',
      ],
      sourceIds: ['one-earth-au12'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the underlying ecoregion is tropical equatorial, very wet year-round with roughly 2,000\u20134,000 mm rainfall.',
      },
      sourceIds: ['one-earth-au12'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland and hill rainforest with numerous endemic Begonia and Pipturus',
        'high floristic and faunal endemism across the archipelago',
        'lowland forest under threat from palm oil conversion',
      ],
      sourceIds: ['one-earth-au12'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'archipelagic isolation fostering island-restricted endemics',
        'active industrial logging concessions across the lowlands',
        'strengthening community-based forest management',
      ],
      sourceIds: ['one-earth-au12'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 32% with a protection level of 4. Reducing industrial logging impacts, strengthening community-based forest management, and protecting remaining lowland forest from palm oil conversion are the key actions.',
      sourceIds: ['one-earth-au12'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sanfords-sea-eagle',
      'species:prehensile-tailed-skink',
      'species:solomon-islands-flying-fox',
      'species:island-imperial-pigeon',
      'species:ducorps-cockatoo',
    ],
    countryIds: ['SB'],
    sources: ['one-earth-au12'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au13',
    summary: {
      value:
        'New Guinea & Surrounding Islands (AU13) is the vast heart of Melanesia, uniting twenty-one ecoregions from New Guinea\u2019s great lowland and montane rainforests to its savannas, mangroves, and offshore islands. The bioregion spans an exceptional breadth of endemic fauna\u2014cassowaries, crowned pigeons, birds-of-paradise, and tree-kangaroos\u2014over roughly 786 million hectares.',
      sourceIds: ['one-earth-au13'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'twenty-one ecoregions across New Guinea and surrounding islands',
        'the world\u2019s largest contiguous tropical montane forests',
        'wetlands, savannas, mangroves, and island archipelagos',
      ],
      sourceIds: ['one-earth-au13'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; climates range from humid tropical lowlands and wetlands to cool montane and subalpine cloud forest across the central cordillera.',
      },
      sourceIds: ['one-earth-au13'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland and montane rainforest across the central ranges',
        'freshwater swamp forest, savanna-grassland, and extensive mangroves',
        'cloud forest and subalpine grassland above treeline',
      ],
      sourceIds: ['one-earth-au13'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'critically important watershed and flood-regulation functions',
        'extraordinary avian and mammalian endemism across elevational gradients',
        'significant carbon storage in lowland forest and mangroves',
      ],
      sourceIds: ['one-earth-au13'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 34% with a protection level of 1, reflecting the very high proportion of unprotected habitat. Logging, mining, oil palm, and road development are the principal pressures across the bioregion.',
      sourceIds: ['one-earth-au13'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:southern-cassowary',
      'species:northern-cassowary',
      'species:victoria-crowned-pigeon',
      'species:king-of-saxony-bird-of-paradise',
      'species:vogelkop-bowerbird',
      'species:ribbon-tailed-astrapia',
      'species:estuarine-crocodile',
      'species:palm-cockatoo',
    ],
    countryIds: ['ID', 'PG'],
    sources: ['one-earth-au13'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au14',
    summary: {
      value:
        'Sulawesi & Maluku Islands (AU14) spans the Wallacean transition where the striking endemism of Sulawesi meets the archipelagic faunas of the Maluku islands across six ecoregions. Extraordinary primate, bird, and mammal radiations, from the maleo and babirusa to the salmon-crested cockatoo, depend on forest facing logging, mining, and oil palm pressures.',
      sourceIds: ['one-earth-au14'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'six ecoregions across Sulawesi and the Maluku islands',
        'large K-shaped island and archipelagic island groups',
        'national parks such as Lore Lindu and Aketajawe-Lolobata',
      ],
      sourceIds: ['one-earth-au14'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; climates are wet tropical with montane cloud forest on higher islands and a seasonal dry period in the Banda Sea islands.',
      },
      sourceIds: ['one-earth-au14'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'lowland and montane rainforest on Sulawesi and the Maluku islands',
        'moist deciduous forest on the Banda Sea islands',
        'cloud forest and endemic-rich montane zones',
      ],
      sourceIds: ['one-earth-au14'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Wallacean isolation driving exceptional endemism',
        'Pleistocene refugia in montane zones',
        'deforestation from agriculture, logging, and oil palm',
      ],
      sourceIds: ['one-earth-au14'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 37% with a protection level of 4. Logging, mining, oil palm conversion, and illegal wildlife trade are the dominant threats across the bioregion.',
      sourceIds: ['one-earth-au14'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:maleo',
      'species:babirusa',
      'species:sulawesi-black-macaque',
      'species:salmon-crested-cockatoo',
      'species:wallaces-standardwing',
      'species:anoa',
    ],
    countryIds: ['ID'],
    sources: ['one-earth-au14'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:au15',
    summary: {
      value:
        'Southeast Indonesian Dry Forest Islands (AU15) unite the monsoon-influenced deciduous forests of the Lesser Sundas, Sumba, and Timor-Wetar across three ecoregions in the driest portion of Wallacea. Dry-adapted endemics such as the Komodo dragon, yellow-crested cockatoo, and iris lorikeet persist where fire and clearing have heavily reduced forest cover.',
      sourceIds: ['one-earth-au15'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'three ecoregions across the Lesser Sundas, Sumba, and Timor-Wetar',
        'monsoon-influenced islands with pronounced dry seasons',
        'Komodo, Manupeu-Tanah Daru, and other national parks',
      ],
      sourceIds: ['one-earth-au15'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are tropical with pronounced seasonal drought, monsoon influence, and the most xeric conditions in the mountains of Timor.',
      },
      sourceIds: ['one-earth-au15'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'dry deciduous and semi-evergreen forest with high endemism',
        'Casuarina and Eucalyptus savannas replacing cleared forest',
        'scattered monsoon forest patches on the driest islands',
      ],
      sourceIds: ['one-earth-au15'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'pronounced seasonal drought structuring dry-forest communities',
        'fire and historical sandalwood logging reducing forest',
        'island isolation driving high regional endemism',
      ],
      sourceIds: ['one-earth-au15'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 37% with a protection level of 3. Burning for grassland, clearing for agriculture, logging, and invasive species are the dominant pressures across these dry islands.',
      sourceIds: ['one-earth-au15'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:komodo-dragon',
      'species:yellow-crested-cockatoo',
      'species:iris-lorikeet',
      'species:sumba-hornbill',
      'species:timor-green-pigeon',
    ],
    countryIds: ['ID', 'TL'],
    sources: ['one-earth-au15'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa2',
    summary: {
      value:
        'Iceland (PA2) is a single ecoregion on the Mid-Atlantic Ridge, where Gulf Stream-moderated coasts give way to a glacial arctic-desert interior in the Scandinavia & West Boreal Forests subrealm. The island supports a small native fauna led by the pink-footed goose, arctic fox, and snowy owl, and hosts the world’s largest pink-footed goose breeding grounds at Thjorsarver.',
      sourceIds: ['one-earth-pa2', 'one-earth-eco-711'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'single ecoregion of roughly 9 million ha spanning Iceland',
        'volcanic island being pulled apart along the Mid-Atlantic Ridge',
        'interior arctic desert with glaciers including Vatnajökull, Europe’s largest ice cap',
        'lowland boreal birch forest and alpine tundra',
      ],
      sourceIds: ['one-earth-pa2', 'one-earth-eco-711'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregion is subarctic with Gulf Stream-moderated lowlands that remain relatively mild for their latitude, a cold, windy interior, and severe-storm winds that can exceed 50 m/s.',
      },
      sourceIds: ['one-earth-pa2', 'one-earth-eco-711'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'fragmented lowland boreal birch woodland',
        'subalpine and alpine dwarf-shrub heath',
        'wetland and lake-fringe sedge communities',
        'arctic desert, glacial outwash, and lava fields',
      ],
      sourceIds: ['one-earth-pa2', 'one-earth-eco-711'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'active volcanism and rifting reshaping the island at about 1 cm per year',
        'Gulf Stream moderating frost despite high latitude',
        'glacial meltwaters and wetlands supporting dense breeding aggregations of waterfowl and seabirds',
      ],
      sourceIds: ['one-earth-pa2', 'one-earth-eco-711'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 71% with a protection level of 2. Volcanic activity and erosion, wetland drainage for agriculture, introduced American mink, tourism, and offshore oil and gas exploration are the dominant pressures across the island.',
      sourceIds: ['one-earth-pa2', 'one-earth-eco-711'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:pink-footed-goose',
      'species:arctic-fox',
      'species:reindeer',
      'species:snowy-owl',
      'species:atlantic-puffin',
      'species:horned-grebe',
    ],
    countryIds: ['IS'],
    sources: ['one-earth-pa2', 'one-earth-eco-711'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa3',
    summary: {
      value:
        'Scandinavian Birch & Coastal Conifer Forests (PA3) spans Norway, Sweden, and Finland across two ecoregions in the Scandinavia & West Boreal Forests subrealm, from the humid coastal conifer belt to the treeline birch forests and mountain grasslands of the highlands. The bioregion supports the Norway lemming, Arctic fox, and golden eagle, with Hardangervidda, Kaldoaivi, and the Laponian Area among its notable protected lands.',
      sourceIds: ['one-earth-pa3', 'one-earth-eco-708', 'one-earth-eco-780'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'two ecoregions totaling more than 26 million ha',
        'coastal conifer belt from Flekkefjord to Senja with hillsides rising to 1,350 m',
        'treeline birch woodland and mountain plateau reaching Galdhøpiggen at 2,469 m',
        'Hardangervidda National Park, Kaldoaivi Wilderness Area, and the Laponian Area World Heritage Site',
      ],
      sourceIds: ['one-earth-pa3', 'one-earth-eco-708', 'one-earth-eco-780'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are humid and oceanic along the Norwegian coast, grow more continental in the east, and support cold upland and treeline climates in the Scandinavian mountains.',
      },
      sourceIds: ['one-earth-pa3', 'one-earth-eco-708', 'one-earth-eco-780'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'temperate and boreal coastal rainforest with rich lichen communities',
        'Scots pine and spruce forests of the coastal conifer belt',
        'downy-birch treeline forest with trees only 2-3 m tall at the highest points',
        'crowberry, reindeer lichen, and cloudberry ground layers',
      ],
      sourceIds: ['one-earth-pa3', 'one-earth-eco-708', 'one-earth-eco-780'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'lemming population booms every 3-5 years driving predator cycles',
        'oceanic west-to-continental east climate gradient',
        'recent glaciation limiting endemism and shaping mountain flora',
      ],
      sourceIds: ['one-earth-pa3', 'one-earth-eco-708', 'one-earth-eco-780'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 72% with a protection level of 4. Intensive reindeer herding, tourism and cabin construction, and climate change threatening white-wintering species are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa3', 'one-earth-eco-708', 'one-earth-eco-780'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:norway-lemming',
      'species:moose',
      'species:brown-bear',
      'species:gray-wolf',
      'species:eurasian-lynx',
      'species:wolverine',
      'species:red-deer',
      'species:rock-ptarmigan',
    ],
    countryIds: ['NO', 'SE', 'FI'],
    sources: ['one-earth-pa3', 'one-earth-eco-708', 'one-earth-eco-780'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa5',
    summary: {
      value:
        'East Eurasian Coastal Tundra (PA5) gathers the Chukchi Peninsula, Russian Bering, and Wrangel Island ecoregions into about 78 million ha in the Sea of Okhotsk & Bering Tundra-Taiga subrealm. This Beringian stronghold hosts the Siberian bighorn sheep, polar bear, and spoon-billed sandpiper, with Wrangel Island supporting some of the world’s largest polar-bear denning and walrus rookery sites.',
      sourceIds: ['one-earth-pa5', 'one-earth-eco-772', 'one-earth-eco-779', 'one-earth-eco-783'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'three ecoregions totaling approximately 78 million ha',
        'coastal tundra from the Kolyma rivermouth to Cape Dezhnev',
        'Wrangel Island, an unglaciated Quaternary refugium with arctic-desert terrain',
        'Chaunskaya Guba Zakaznik and Koryak State Nature Reserve among named protected areas',
      ],
      sourceIds: ['one-earth-pa5', 'one-earth-eco-772', 'one-earth-eco-779', 'one-earth-eco-783'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are cold Arctic and subarctic, with low annual precipitation of roughly 140-340 mm, long winters, and mean monthly temperatures of about -31°C to 11.5°C.',
      },
      sourceIds: ['one-earth-pa5', 'one-earth-eco-772', 'one-earth-eco-779', 'one-earth-eco-783'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'low Arctic tundra, dwarf-shrub heath, and tussock communities',
        'Siberian dwarf-pine and green-alder thickets of the Beringian lowlands',
        'Wrangel Island arctic desert with exceptionally rich glacially isolated flora',
      ],
      sourceIds: ['one-earth-pa5', 'one-earth-eco-772', 'one-earth-eco-779', 'one-earth-eco-783'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Beringian land-bridge history promoting species formation and endemism',
        'polar-bear denning and massive seabird and walrus colonies',
        'Wrangel Island escaping Quaternary glaciation and preserving relict diversity',
      ],
      sourceIds: ['one-earth-pa5', 'one-earth-eco-772', 'one-earth-eco-779', 'one-earth-eco-783'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 92% with a protection level of 1. Mining, oil and gas prospecting, poaching, overfishing, and oil-spill risk from coastal shipping are the dominant pressures facing the bioregion.',
      sourceIds: ['one-earth-pa5', 'one-earth-eco-772', 'one-earth-eco-779', 'one-earth-eco-783'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:siberian-bighorn-sheep',
      'species:polar-bear',
      'species:arctic-fox',
      'species:reindeer',
      'species:spoon-billed-sandpiper',
      'species:great-knot',
      'species:walrus',
    ],
    countryIds: ['RU'],
    sources: ['one-earth-pa5', 'one-earth-eco-772', 'one-earth-eco-779', 'one-earth-eco-783'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa6',
    summary: {
      value:
        'Sea of Okhotsk Coastal Taiga, Meadows & Tundra (PA6) spans Kamchatka, the Commander and Kurile islands, and Sakhalin across five ecoregions of the Sea of Okhotsk & Bering Tundra-Taiga subrealm. It is a stronghold for the tundra wolf, Steller’s sea eagle, and brown bear, anchored by some of the world’s greatest salmon spawning runs at Kuril Lake.',
      sourceIds: ['one-earth-pa6', 'one-earth-eco-712', 'one-earth-eco-713', 'one-earth-eco-715', 'one-earth-eco-716', 'one-earth-eco-773'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'five ecoregions totaling more than 75 million ha',
        'volcanic Kamchatka peninsula with peaks to Klyuchevskaya Sopka at 4,750 m',
        'Sakhalin Island, a 948 km-long island separating the Sea of Okhotsk from the Sea of Japan',
        'giant meadows, sparse forests, and southern Arctic tundra above about 1,200 m',
      ],
      sourceIds: ['one-earth-pa6', 'one-earth-eco-712', 'one-earth-eco-713', 'one-earth-eco-715', 'one-earth-eco-716', 'one-earth-eco-773'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are cold maritime and continental, with high annual precipitation of about 635-1,400 mm, mean annual temperatures near -0.8°C to 2°C, and Pacific-influenced winters with heavy snow.',
      },
      sourceIds: ['one-earth-pa6', 'one-earth-eco-712', 'one-earth-eco-713', 'one-earth-eco-715', 'one-earth-eco-716', 'one-earth-eco-773'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'relict Yeddo spruce, Dahurian larch, and white-birch forests of central Kamchatka',
        'giant meadow communities with Angelica and Parasenecio over 3 m tall',
        'southernmost Arctic tundra above about 1,200 m',
        'relict cold-adapted floras on Sakhalin and the Kurile islands',
      ],
      sourceIds: ['one-earth-pa6', 'one-earth-eco-712', 'one-earth-eco-713', 'one-earth-eco-715', 'one-earth-eco-716', 'one-earth-eco-773'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'subduction and active volcanism at 80-100 mm per year shaping the land',
        'immense Pacific salmon spawning runs supporting brown bear, eagle, and sea-otter populations',
        'island isolation producing endemism and giant-plant lineages',
      ],
      sourceIds: ['one-earth-pa6', 'one-earth-eco-712', 'one-earth-eco-713', 'one-earth-eco-715', 'one-earth-eco-716', 'one-earth-eco-773'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 86% with a protection level of 1. Poaching, illegal salmon fishing, expansion of offshore oil and gas operations, logging without reforestation, and introduced predators are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa6', 'one-earth-eco-712', 'one-earth-eco-713', 'one-earth-eco-715', 'one-earth-eco-716', 'one-earth-eco-773'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:tundra-wolf',
      'species:sockeye-salmon',
      'species:brown-bear',
      'species:stellers-sea-eagle',
      'species:siberian-grouse',
      'species:reindeer',
      'species:siberian-musk-deer',
    ],
    countryIds: ['RU'],
    sources: ['one-earth-pa6', 'one-earth-eco-712', 'one-earth-eco-713', 'one-earth-eco-715', 'one-earth-eco-716', 'one-earth-eco-773'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa7',
    summary: {
      value:
        'Siberian Boreal Forests & Mountain Tundra (PA7) joins six ecoregions of the Siberia & East Boreal Forests subrealm, covering nearly 769 million ha of larch taiga, mountain tundra, and vast peatlands from the Yenisei to the Pacific. Species such as the wolverine, Amur lemming, and Baikal bush warbler mark a fauna that also includes Siberian musk deer, moose, reindeer, and brown bear.',
      sourceIds: ['one-earth-pa7', 'one-earth-eco-710', 'one-earth-eco-714', 'one-earth-eco-718', 'one-earth-eco-720', 'one-earth-eco-771', 'one-earth-eco-782'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'six ecoregions totaling nearly 769 million ha',
        'vast larch taiga over deep permafrost, among the largest forests on Earth',
        'mountain massifs of the Verkhoyansk, Cherskiy, Kolyma, and Trans-Baikal uplands',
        'Lake Baikal at the southern margin of the bioregion',
      ],
      sourceIds: ['one-earth-pa7', 'one-earth-eco-710', 'one-earth-eco-714', 'one-earth-eco-718', 'one-earth-eco-720', 'one-earth-eco-771', 'one-earth-eco-782'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are extreme continental, including some of the coldest inhabited places on Earth with mean monthly temperatures down to about -46°C, low annual precipitation of roughly 175-572 mm, and a more maritime influence on the Okhotsk coast.',
      },
      sourceIds: ['one-earth-pa7', 'one-earth-eco-710', 'one-earth-eco-714', 'one-earth-eco-718', 'one-earth-eco-720', 'one-earth-eco-771', 'one-earth-eco-782'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Siberian and Dahurian larch taiga with spruce and birch',
        'dark-needled conifer forest meeting light-needled larch taiga and Daurian steppe in the Trans-Baikal mountains',
        'relict steppe fragments in the Yana and Indigirka basins',
        'high-elevation tundra belts and nival bare-rock zones above treeline',
      ],
      sourceIds: ['one-earth-pa7', 'one-earth-eco-710', 'one-earth-eco-714', 'one-earth-eco-718', 'one-earth-eco-720', 'one-earth-eco-771', 'one-earth-eco-782'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'permafrost-dependent ecosystems spanning northern forests and tundra',
        'one of the world’s most extensive peatland complexes in the West Siberian lowlands',
        'mountain ranges acting as refugia and dispersal corridors for tundra biota',
        'extreme cold and short summers shaping slow-growing, fire-prone forests',
      ],
      sourceIds: ['one-earth-pa7', 'one-earth-eco-710', 'one-earth-eco-714', 'one-earth-eco-718', 'one-earth-eco-720', 'one-earth-eco-771', 'one-earth-eco-782'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 88% with a protection level of 1. Illegal logging, mining pollution, oil and gas exploitation, poaching, and climate-driven wildfire are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa7', 'one-earth-eco-710', 'one-earth-eco-714', 'one-earth-eco-718', 'one-earth-eco-720', 'one-earth-eco-771', 'one-earth-eco-782'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:wolverine',
      'species:siberian-musk-deer',
      'species:gray-wolf',
      'species:brown-bear',
      'species:moose',
      'species:reindeer',
      'species:amur-lemming',
      'species:baikal-bush-warbler',
    ],
    countryIds: ['RU', 'CN', 'MN'],
    sources: ['one-earth-pa7', 'one-earth-eco-710', 'one-earth-eco-714', 'one-earth-eco-718', 'one-earth-eco-720', 'one-earth-eco-771', 'one-earth-eco-782'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa8',
    summary: {
      value:
        'Ural Mountains & West Eurasian Taiga Forests (PA8) spans Russia, Finland, Sweden, and Norway across two ecoregions of the Scandinavia & West Boreal Forests subrealm, uniting Europe’s largest ecoregion with the great Urals montane belt. The bioregion shelters the sable, Finnish forest reindeer, and Saimaa ringed seal, with the Virgin Komi Forests World Heritage Site guarding its northern taiga.',
      sourceIds: ['one-earth-pa8', 'one-earth-eco-717', 'one-earth-eco-719'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'two ecoregions totaling more than 233 million ha',
        'the largest ecoregion in Europe spanning Scandinavia and northern Russia',
        'the Ural Mountains, a 2,000 km north-south range dividing two continents',
        'one of Europe’s densest lake and bog landscapes, with peatlands covering up to half the land in the north',
      ],
      sourceIds: ['one-earth-pa8', 'one-earth-eco-717', 'one-earth-eco-719'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are cool and humid, with pronounced continentality in the east, greater maritime influence in Scandinavia, and continental temperature extremes that intensify north to south and west to east across the Urals.',
      },
      sourceIds: ['one-earth-pa8', 'one-earth-eco-717', 'one-earth-eco-719'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'boreal spruce and Scots pine taiga mixed with downy and silver birch',
        'distinctive Russian larch within the European Russian taiga',
        'Siberian fir, Siberian pine, and mixed deciduous forest with oak and linden in the southern Urals',
      ],
      sourceIds: ['one-earth-pa8', 'one-earth-eco-717', 'one-earth-eco-719'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'one of the most extensive continuous taiga and peatland systems in Europe',
        'the Urals acting as a north-south migration corridor and continental divide',
        '20th-century clear-cutting reshaping a formerly old-growth forest matrix',
      ],
      sourceIds: ['one-earth-pa8', 'one-earth-eco-717', 'one-earth-eco-719'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 52% with a protection level of 2. Hunting pressure on large predators, clear-cut logging, metallurgy and pollution in the southern Urals, and climate-driven treeline rise are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa8', 'one-earth-eco-717', 'one-earth-eco-719'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:sable',
      'species:brown-bear',
      'species:eurasian-lynx',
      'species:moose',
      'species:wolverine',
      'species:finnish-forest-reindeer',
      'species:capercaillie',
    ],
    countryIds: ['RU', 'FI', 'SE', 'NO'],
    sources: ['one-earth-pa8', 'one-earth-eco-717', 'one-earth-eco-719'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa10',
    summary: {
      value:
        'West European Coastal Mixed Forests (PA10) spans France, Germany, Poland, Denmark, Spain and the Pyrenees across four ecoregions of the Greater European Forests subrealm, totalling more than 62 million hectares. The bioregion shelters the critically endangered European mink, now extirpated from this ecoregion, alongside the aquatic warbler, Pyrenean desman, brown bear and Iberian lynx in a landscape of Baltic, Cantabrian, Atlantic and Pyrenean mixed forest.',
      sourceIds: ['one-earth-pa10', 'one-earth-eco-647', 'one-earth-eco-648', 'one-earth-eco-664', 'one-earth-eco-676'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'four ecoregions totaling more than 62 million hectares',
        'Baltic coastal mixed forest from Denmark to Poland',
        'Cantabrian and Atlantic broadleaf forest belt from Spain to France',
        'Pyrenees montane conifer and mixed forest',
      ],
      sourceIds: ['one-earth-pa10', 'one-earth-eco-647', 'one-earth-eco-648', 'one-earth-eco-664', 'one-earth-eco-676'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are oceanic to continental, with annual precipitation ranging from 600 mm in northern Poland to over 1,100 mm in the Cantabrian coast, and mean annual temperatures of 6–20°C.',
      },
      sourceIds: ['one-earth-pa10', 'one-earth-eco-647', 'one-earth-eco-648', 'one-earth-eco-664', 'one-earth-eco-676'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'European beech, Norway spruce and English oak mixed forest',
        'Cantabrian oak, beech and heather woodland',
        'Atlantic Scots pine and maritime pine coastal belt',
        'Pyrenees holm oak, lime, maple and fir montane forest',
      ],
      sourceIds: ['one-earth-pa10', 'one-earth-eco-647', 'one-earth-eco-648', 'one-earth-eco-664', 'one-earth-eco-676'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'oceanic climate moderating temperatures across the Atlantic coast',
        'Pyrenees acting as a glacial refugium with over 200 endemic plant species',
        'Baltic coastal dune and wetland systems supporting breeding waterbirds',
      ],
      sourceIds: ['one-earth-pa10', 'one-earth-eco-647', 'one-earth-eco-648', 'one-earth-eco-664', 'one-earth-eco-676'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 35% with a protection level of 7. Habitat destruction, water pollution, coastal erosion from sea level rise, invasive species, road construction and forest fires are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa10', 'one-earth-eco-647', 'one-earth-eco-648', 'one-earth-eco-664', 'one-earth-eco-676'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:aquatic-warbler',
      'species:pyrenean-desman',
      'species:brown-bear',
      'species:iberian-lynx',
      'species:white-tailed-eagle',
      'species:capercaillie',
    ],
    countryIds: ['PL', 'DE', 'DK', 'SE', 'ES', 'FR', 'PT', 'NL', 'BE', 'AD'],
    sources: ['one-earth-pa10', 'one-earth-eco-647', 'one-earth-eco-648', 'one-earth-eco-664', 'one-earth-eco-676'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa11',
    summary: {
      value:
        'Baltic Sea & Sarmatic Mixed Forests (PA11) is a single-ecoregion bioregion of nearly 85 million hectares in the Greater European Forests subrealm, stretching from Scandinavia across the Baltic states into western Russia. The Eurasian beaver, grey wolf, Eurasian lynx, brown bear, moose, European bison and Russian desman inhabit extensive Norway spruce, Scots pine and mixed deciduous woodland with one of Europe\'s densest freshwater networks of more than 10,000 lakes and 20,000 rivers.',
      sourceIds: ['one-earth-pa11', 'one-earth-eco-679'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'single ecoregion totaling nearly 85 million hectares',
        'Baltic Sea coastline and interior lowlands',
        'one of Europe\'s densest lake and river networks',
        'vast peatlands and raised bog complexes',
      ],
      sourceIds: ['one-earth-pa11', 'one-earth-eco-679'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregion is continental with maritime influence along the Baltic coastlines, with cold winters and moderate summers.',
      },
      sourceIds: ['one-earth-pa11', 'one-earth-eco-679'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Norway spruce and Scots pine taiga',
        'common oak, downy birch and beech mixed forest',
        'feather and peat moss bog communities',
        'bilberry and heather ground layers',
      ],
      sourceIds: ['one-earth-pa11', 'one-earth-eco-679'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Eurasian beaver engineering wetland habitats across river systems',
        'European bison reintroduced across the Sarmatic range',
        'endemic Saaremaa yellow rattle and marsh orchid in Baltic island wetlands',
      ],
      sourceIds: ['one-earth-pa11', 'one-earth-eco-679'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 46% with a protection level of 2. Agricultural expansion, logging, grazing, peat extraction and pollution are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa11', 'one-earth-eco-679'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:eurasian-beaver',
      'species:gray-wolf',
      'species:eurasian-lynx',
      'species:brown-bear',
      'species:european-bison',
    ],
    countryIds: ['RU', 'SE', 'BY', 'LV', 'EE', 'LT', 'NO', 'FI'],
    sources: ['one-earth-pa11', 'one-earth-eco-679'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa12',
    summary: {
      value:
        'European Interior Mixed Forests (PA12) unites three ecoregions of the Greater European Forests subrealm across Poland, Germany, Ukraine, Belarus, Romania and Russia, totalling approximately 195.5 million hectares. The critically endangered European bison, the continent\'s heaviest land animal, is the flagship species, supported by white-backed woodpeckers, brown bears, Eurasian lynx, grey wolves and spotted sousliks in oak, hornbeam and beech woodland.',
      sourceIds: ['one-earth-pa12', 'one-earth-eco-654', 'one-earth-eco-661', 'one-earth-eco-686'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'three ecoregions totaling approximately 195.5 million hectares',
        'Central European oak and beech mixed forest',
        'East European forest-steppe mosaic',
        'Western European broadleaf forest from France to Czech Republic',
      ],
      sourceIds: ['one-earth-pa12', 'one-earth-eco-654', 'one-earth-eco-661', 'one-earth-eco-686'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are continental, with precipitation ranging from 1,000 mm in Jura mountain valleys to over 2,030 mm at higher elevations, and continentality becoming more pronounced toward the east.',
      },
      sourceIds: ['one-earth-pa12', 'one-earth-eco-654', 'one-earth-eco-661', 'one-earth-eco-686'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'European beech, silver fir and Norway spruce montane forest',
        'oak, hornbeam and lime mixed deciduous woodland',
        'forest-steppe mosaic with feather grass and prairie junegrass',
        'one of Europe\'s last primeval forest fragments at Białowieża',
      ],
      sourceIds: ['one-earth-pa12', 'one-earth-eco-654', 'one-earth-eco-661', 'one-earth-eco-686'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'European bison reintroduction with approximately 4,500 animals in 51 free-ranging herds',
        'only 0.2% of pristine Central European forest remaining',
        '69% of organic matter lost in Volga region forest-steppe over the last 100 years',
      ],
      sourceIds: ['one-earth-pa12', 'one-earth-eco-654', 'one-earth-eco-661', 'one-earth-eco-686'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 32% with a protection level of 5. Agriculture, plantations, urbanization, logging, hunting and overstocking of game animals are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa12', 'one-earth-eco-654', 'one-earth-eco-661', 'one-earth-eco-686'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:european-bison',
      'species:brown-bear',
      'species:eurasian-lynx',
      'species:gray-wolf',
      'species:red-deer',
      'species:roe-deer',
    ],
    countryIds: ['PL', 'UA', 'BY', 'DE', 'RO', 'RU', 'LT', 'CZ', 'MD', 'AT', 'BG', 'FR', 'CH', 'BE', 'LU', 'LI', 'NL'],
    sources: ['one-earth-pa12', 'one-earth-eco-654', 'one-earth-eco-661', 'one-earth-eco-686'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa13',
    summary: {
      value:
        'Alps & Po Basin Mixed Forests (PA13) covers two ecoregions of the European Mountain Forests subrealm across Italy, Austria, Switzerland, France, Slovenia and Liechtenstein, totalling more than 19 million hectares. The Alpine ibex, the bioregion\'s flagship, survives alongside Eurasian lynx, grey wolves, brown bears, red deer, chamois, marmots and the relict bearded vulture in some of Europe\'s most species-rich mountain landscapes.',
      sourceIds: ['one-earth-pa13', 'one-earth-eco-675', 'one-earth-eco-689'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'two ecoregions totaling more than 19 million hectares',
        'Alpine conifer and mixed forest from Mont Blanc to the Julian Alps',
        'Po River basin wetlands and rice paddies',
        'high-altitude glacial valleys and alpine meadows',
      ],
      sourceIds: ['one-earth-pa13', 'one-earth-eco-675', 'one-earth-eco-689'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions range from Mediterranean-influenced conditions in the southern Po plain to continental and alpine climates at high elevations, with annual precipitation from 500 mm in the lowlands to over 2,030 mm on mountain slopes.',
      },
      sourceIds: ['one-earth-pa13', 'one-earth-eco-675', 'one-earth-eco-689'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'mixed beech, silver fir and spruce montane forest',
        'Alpine grasslands with Campanula, Primula, Ranunculus and Saxifraga',
        'Po plain poplar, rice paddy and wetland vegetation',
        'dwarf mountain pine and prostrate pine at high elevations',
      ],
      sourceIds: ['one-earth-pa13', 'one-earth-eco-675', 'one-earth-eco-689'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'approximately 40% of Europe\'s flora present in the Alps',
        '4,485 vascular plant species with up to 400 endemics',
        'Alpine ibex surviving in Gran Paradiso National Park before reintroduction',
      ],
      sourceIds: ['one-earth-pa13', 'one-earth-eco-675', 'one-earth-eco-689'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 48% with a protection level of 5. Winter resorts, urban sprawl, intensification of lowland agriculture, power plant construction, water pollution and climate change are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa13', 'one-earth-eco-675', 'one-earth-eco-689'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:alpine-ibex',
      'species:eurasian-lynx',
      'species:brown-bear',
      'species:red-deer',
      'species:chamois',
      'species:bearded-vulture',
    ],
    countryIds: ['IT', 'CH', 'AT', 'FR', 'SI', 'DE', 'LI'],
    sources: ['one-earth-pa13', 'one-earth-eco-675', 'one-earth-eco-689'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa14',
    summary: {
      value:
        'Carpathian Mountain & Plains Mixed Forests (PA14) spans Hungary, Romania, Slovakia, Croatia, Serbia, Bosnia and Herzegovina, Austria, Slovenia, the Czech Republic, Ukraine and Poland across two ecoregions of the European Mountain Forests subrealm, totalling more than 42 million hectares. The grey wolf, the bioregion\'s flagship, presides over a landscape sheltering imperial eagles, golden eagles, brown bears, Eurasian lynx, Tatra pine voles and the endemic Carpathian newt in Pannonian lowland forest and Carpathian montane beech-spruce woodland.',
      sourceIds: ['one-earth-pa14', 'one-earth-eco-674', 'one-earth-eco-692'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'two ecoregions totaling more than 42 million hectares',
        'Pannonian lowland mixed forest with oak and hornbeam',
        'Carpathian montane beech, spruce and fir forest',
        'Gerlachovský štít at 2,655 m, the highest Carpathian peak',
      ],
      sourceIds: ['one-earth-pa14', 'one-earth-eco-674', 'one-earth-eco-692'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions range from a sheltered continental Pannonian climate to cool, humid conditions in the Carpathian montane belt, with pronounced continentality in the east.',
      },
      sourceIds: ['one-earth-pa14', 'one-earth-eco-674', 'one-earth-eco-692'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'turkey oak, sessile oak and pedunculated oak Pannonian woodland',
        'European beech, silver fir and Norway spruce montane forest',
        'mountain pine and dwarf juniper at high elevations',
        'endemic Tatra pine vole and Carpathian newt habitat',
      ],
      sourceIds: ['one-earth-pa14', 'one-earth-eco-674', 'one-earth-eco-692'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'approximately 3,500 grey wolves, 2,400 Eurasian lynx and over 8,000 brown bears',
        'Europe\'s largest remaining natural mountain beech forest outside Russia',
        'Aggtelek cave shrimp and Pannonian snail endemism in karst systems',
      ],
      sourceIds: ['one-earth-pa14', 'one-earth-eco-674', 'one-earth-eco-692'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 45% with a protection level of 6. Intensive grazing, climate change, agriculture, extensive logging, invasive species including black locust, air and water pollution and tourism development are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa14', 'one-earth-eco-674', 'one-earth-eco-692'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:gray-wolf',
      'species:golden-eagle',
      'species:brown-bear',
      'species:eurasian-lynx',
      'species:red-deer',
      'species:carpathian-newt',
    ],
    countryIds: ['HU', 'RO', 'SK', 'HR', 'RS', 'BA', 'AT', 'SI', 'CZ', 'UA', 'PL'],
    sources: ['one-earth-pa14', 'one-earth-eco-674', 'one-earth-eco-692'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa15',
    summary: {
      value:
        'Dinaric Mountains & Balkan Mixed Forests (PA15) joins three ecoregions of the European Mountain Forests subrealm across Bulgaria, Serbia, Romania, North Macedonia, Greece, Kosovo, Bosnia and Herzegovina, Albania, Montenegro and Croatia, totalling approximately 31.5 million hectares. The Eurasian lynx, reintroduced to the Dinaric Alps in 1973, is the flagship, sharing the landscape with brown bears, grey wolves, the near-endemic olm, capercaillie, saker falcons and 23 raptor species in Balkan and Dinaric oak, beech and spruce woodland.',
      sourceIds: ['one-earth-pa15', 'one-earth-eco-646', 'one-earth-eco-660', 'one-earth-eco-678'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'three ecoregions totaling approximately 31.5 million hectares',
        'Dinaric Alps karst mountain chain from Slovenia to Albania',
        'Balkan mixed forest of oak, beech and Macedonian pine',
        'Rhodope Mountains and Central Balkan old-growth beech forest',
      ],
      sourceIds: ['one-earth-pa15', 'one-earth-eco-646', 'one-earth-eco-660', 'one-earth-eco-678'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions range from Mediterranean-influenced coastal conditions to continental montane climates with precipitation of 600 to over 3,000 mm and winter temperatures from minus 10°C to 0°C.',
      },
      sourceIds: ['one-earth-pa15', 'one-earth-eco-646', 'one-earth-eco-660', 'one-earth-eco-678'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'oak, beech, spruce and silver fir montane forest',
        'Macedonian pine and Bosnian pine relict stands',
        'Dinaric karst polje grasslands and Mediterranean maquis',
        'Europe\'s largest continuous area of old-growth beech forest at Central Balkan National Park',
      ],
      sourceIds: ['one-earth-pa15', 'one-earth-eco-646', 'one-earth-eco-660', 'one-earth-eco-678'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Eurasian lynx reintroduction expanding to approximately 140 individuals by the 2010s',
        'olm, the near-endemic cave-dwelling aquatic salamander of Dinaric karst',
        'Shar Mountain hosting over 2,000 plant species including 400 Balkan endemics',
      ],
      sourceIds: ['one-earth-pa15', 'one-earth-eco-646', 'one-earth-eco-660', 'one-earth-eco-678'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 41% with a protection level of 5. Illegal logging, climate change, forest fires, tree disease, agriculture, hunting, habitat conversion and poaching are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa15', 'one-earth-eco-646', 'one-earth-eco-660', 'one-earth-eco-678'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:eurasian-lynx',
      'species:brown-bear',
      'species:gray-wolf',
      'species:olm',
      'species:capercaillie',
      'species:saker-falcon',
    ],
    countryIds: ['BG', 'RS', 'RO', 'MK', 'TR', 'GR', 'XK', 'BA', 'AL', 'ME', 'HR', 'IT'],
    sources: ['one-earth-pa15', 'one-earth-eco-646', 'one-earth-eco-660', 'one-earth-eco-678'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa16',
    summary: {
      value:
        'Pontic Steppe Grasslands (PA16) is a single-ecoregion bioregion of approximately 99.5 million hectares in the Black Sea Forests & Steppe subrealm, stretching from the Danube Delta across Ukraine and southern Russia to Kazakhstan. The critically endangered European mink, the flagship, shares the feather-grass steppe with the saiga antelope, speckled ground squirrel, sandy blind mole rat, steppe eagle and saker falcon in one of the world\'s most threatened biomes.',
      sourceIds: ['one-earth-pa16', 'one-earth-eco-735'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'single ecoregion totaling approximately 99.5 million hectares',
        'Pontic-Caspian feather-grass steppe',
        'Danube Delta, Europe\'s largest reedbed and wetland',
        'kurgan burial mounds preserving islands of steppe flora',
      ],
      sourceIds: ['one-earth-pa16', 'one-earth-eco-735'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregion is temperate with appreciable winter rain, and hot, dry summers with cold winters across the steppe interior.',
      },
      sourceIds: ['one-earth-pa16', 'one-earth-eco-735'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'feather grass, fescue and sage steppe',
        'colourful spring ephemeral wildflower communities',
        'Danube Delta reedbeds, the widest compact reed stands in the world',
        'invasive Russian olive windbreak plantations in Ukraine',
      ],
      sourceIds: ['one-earth-pa16', 'one-earth-eco-735'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'steppe flora more destroyed than any other zonal vegetation type in Europe',
        'Danube Delta hosting over 500,000 wintering waterfowl annually',
        '35% of total land area converted to cropland',
      ],
      sourceIds: ['one-earth-pa16', 'one-earth-eco-735'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 10% with a protection level of 5. Conversion to cropland, shelterbelt afforestation, overgrazing, dam construction, electric fishing in the Danube Delta and weak legal enforcement are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa16', 'one-earth-eco-735'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:european-mink',
      'species:saiga-antelope',
      'species:greater-flamingo',
      'species:steppe-eagle',
      'species:saker-falcon',
    ],
    countryIds: ['RU', 'UA', 'KZ', 'RO', 'MD', 'BG'],
    sources: ['one-earth-pa16', 'one-earth-eco-735'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa17',
    summary: {
      value:
        'Black Sea, Caucasus-Anatolian Mixed Forests & Steppe (PA17) gathers seven ecoregions of the Black Sea Forests & Steppe subrealm across Russia, Georgia, Azerbaijan, Turkey, Armenia, Bulgaria, Ukraine, Romania and Moldova, totalling approximately 58.5 million hectares. The southern crested newt, the flagship, inhabits a landscape of Colchic rainforest, Caucasus mixed forest, Anatolian steppe and Crimean submediterranean woodland sheltering West Caucasian tur, bearded vultures, Caucasian salamanders, Persian leopards and endemic birch mice.',
      sourceIds: ['one-earth-pa17', 'one-earth-eco-650', 'one-earth-eco-652', 'one-earth-eco-658', 'one-earth-eco-662', 'one-earth-eco-665', 'one-earth-eco-703', 'one-earth-eco-725'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'seven ecoregions totaling approximately 58.5 million hectares',
        'Greater and Lesser Caucasus mountain ranges with Mount Elbrus at 5,642 m',
        'Central Anatolian steppe and eastern Anatolian deciduous forest',
        'Crimean submediterranean coastal enclaves',
      ],
      sourceIds: ['one-earth-pa17', 'one-earth-eco-650', 'one-earth-eco-652', 'one-earth-eco-658', 'one-earth-eco-662', 'one-earth-eco-665', 'one-earth-eco-703', 'one-earth-eco-725'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions range from humid Colchic rainforest with 1,000–2,500 mm precipitation to semi-arid continental steppe in Anatolia, with cold winters and hot, dry summers in the interior.',
      },
      sourceIds: ['one-earth-pa17', 'one-earth-eco-650', 'one-earth-eco-652', 'one-earth-eco-658', 'one-earth-eco-662', 'one-earth-eco-665', 'one-earth-eco-703', 'one-earth-eco-725'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Colchic temperate rainforest of oriental beech, sweet chestnut and Caucasian fir',
        'Caucasus mixed forest of oak, hornbeam and endemic Rhododendron caucasicum',
        'Anatolian steppe of feather grass, fescue and sage',
        'Crimean pistachio, juniper and strawberry tree maquis',
      ],
      sourceIds: ['one-earth-pa17', 'one-earth-eco-650', 'one-earth-eco-652', 'one-earth-eco-658', 'one-earth-eco-662', 'one-earth-eco-665', 'one-earth-eco-703', 'one-earth-eco-725'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Colchic refugium preserving post-glacial remnant forests of global importance',
        'Caucasus hosting some of the highest levels of endemism in the temperate world',
        'Turkey\'s largest brown bear population legally protected since 2003',
      ],
      sourceIds: ['one-earth-pa17', 'one-earth-eco-650', 'one-earth-eco-652', 'one-earth-eco-658', 'one-earth-eco-662', 'one-earth-eco-665', 'one-earth-eco-703', 'one-earth-eco-725'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 26% with a protection level of 2. Uncontrolled hunting, oil and gas exploitation, overgrazing, illegal logging, dam construction, irrigation and conversion to cropland are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa17', 'one-earth-eco-650', 'one-earth-eco-652', 'one-earth-eco-658', 'one-earth-eco-662', 'one-earth-eco-665', 'one-earth-eco-703', 'one-earth-eco-725'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:west-caucasian-tur',
      'species:bearded-vulture',
      'species:caucasian-salamander',
      'species:brown-bear',
      'species:golden-jackal',
      'species:southern-crested-newt',
    ],
    countryIds: ['RU', 'GE', 'AZ', 'TR', 'AM', 'UA', 'BG'],
    sources: ['one-earth-pa17', 'one-earth-eco-650', 'one-earth-eco-652', 'one-earth-eco-658', 'one-earth-eco-662', 'one-earth-eco-665', 'one-earth-eco-703', 'one-earth-eco-725'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa18',
    summary: {
      value:
        'Aegean Sea & East Mediterranean Mixed Forests (PA18) spans seven ecoregions of the Mediterranean subrealm across Greece, Turkey, Cyprus, Lebanon, Israel, Palestine, Syria, Jordan, Iraq and Saudi Arabia, totalling approximately 49.5 million hectares. The striped hyena, the flagship, inhabits Calabrian pine, Kermes oak and Eastern Mediterranean broadleaf forest sheltering grey wolves, golden jackals, Cretan wild goats, Cyprus mouflons, Eleonora\'s falcons and the endemic Cyclades blunt-nosed viper.',
      sourceIds: ['one-earth-pa18', 'one-earth-eco-785', 'one-earth-eco-786', 'one-earth-eco-789', 'one-earth-eco-790', 'one-earth-eco-791', 'one-earth-eco-801', 'one-earth-eco-804'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'seven ecoregions totaling approximately 49.5 million hectares',
        'Aegean and Cycladic islands with Mediterranean maquis',
        'Taurus, Lebanon and Anti-Lebanon mountain ranges with Cedar of Lebanon',
        'Pindus mountain chain sheltering Lake Prespa and Lake Ohrid',
      ],
      sourceIds: ['one-earth-pa18', 'one-earth-eco-785', 'one-earth-eco-786', 'one-earth-eco-789', 'one-earth-eco-790', 'one-earth-eco-791', 'one-earth-eco-801', 'one-earth-eco-804'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are Mediterranean, with mild, wet winters and hot, dry summers; annual precipitation ranges from under 300 mm on lowlands to over 2,000 mm at high altitudes.',
      },
      sourceIds: ['one-earth-pa18', 'one-earth-eco-785', 'one-earth-eco-786', 'one-earth-eco-789', 'one-earth-eco-790', 'one-earth-eco-791', 'one-earth-eco-801', 'one-earth-eco-804'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Calabrian and Aleppo pine Mediterranean forest',
        'holm oak, carob and Phoenician juniper woodland',
        'Cedar of Lebanon montane forests',
        'Pindus Pallas pine, endemic Greek fir and Hungarian oak',
      ],
      sourceIds: ['one-earth-pa18', 'one-earth-eco-785', 'one-earth-eco-786', 'one-earth-eco-789', 'one-earth-eco-790', 'one-earth-eco-791', 'one-earth-eco-801', 'one-earth-eco-804'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'overlap with the Fertile Crescent centre of plant domestication',
        'two of Europe\'s oldest lakes, Prespa and Ohrid, with endemic fish faunas',
        'highest proportion of endemic species of any Mediterranean zone in the Taurus ranges',
      ],
      sourceIds: ['one-earth-pa18', 'one-earth-eco-785', 'one-earth-eco-786', 'one-earth-eco-789', 'one-earth-eco-790', 'one-earth-eco-791', 'one-earth-eco-801', 'one-earth-eco-804'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 14% with a protection level of 6. Urbanization, conversion to agriculture, wetland draining, pollution, overgrazing, tourism development, timber harvest, insecticide use and dams on the Euphrates and Tigris are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa18', 'one-earth-eco-785', 'one-earth-eco-786', 'one-earth-eco-789', 'one-earth-eco-790', 'one-earth-eco-791', 'one-earth-eco-801', 'one-earth-eco-804'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:striped-hyena',
      'species:gray-wolf',
      'species:golden-jackal',
      'species:cretan-wild-goat',
      'species:cyprus-mouflon',
      'species:eleonoras-falcon',
    ],
    countryIds: ['GR', 'TR', 'MK', 'BG', 'CY', 'IQ', 'IL', 'JO', 'LB', 'PS', 'SA', 'SY', 'AL', 'XK'],
    sources: ['one-earth-pa18', 'one-earth-eco-785', 'one-earth-eco-786', 'one-earth-eco-789', 'one-earth-eco-790', 'one-earth-eco-791', 'one-earth-eco-801', 'one-earth-eco-804'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa19',
    summary: {
      value:
        'Adriatic Sea & Central Mediterranean Mixed Forests (PA19) joins six ecoregions of the Mediterranean subrealm across Italy, France, Croatia and Malta, totalling approximately 26 million hectares. The Corsican red deer, the flagship, survives in Corsica and Sardinia alongside the mouflon, Italian wolf, Italian chamois, bearded vultures, Eleonora\'s and lanner falcons, Dalmatian pelicans and eleven endemic amphibians in Apennine, Corsican, Illyrian and Tyrrhenian woodland.',
      sourceIds: ['one-earth-pa19', 'one-earth-eco-644', 'one-earth-eco-788', 'one-earth-eco-794', 'one-earth-eco-795', 'one-earth-eco-802', 'one-earth-eco-806'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'six ecoregions totaling approximately 26 million hectares',
        'Italian peninsula from the Apennines to Calabria',
        'Corsica and Sardinia with old-growth Laricio pine',
        'eastern Adriatic coast from Dalmatia to Albania',
      ],
      sourceIds: ['one-earth-pa19', 'one-earth-eco-644', 'one-earth-eco-788', 'one-earth-eco-794', 'one-earth-eco-795', 'one-earth-eco-802', 'one-earth-eco-806'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are Mediterranean with very hot, dry summers and relatively temperate, humid to subhumid winters; annual precipitation ranges from 400 to over 3,000 mm.',
      },
      sourceIds: ['one-earth-pa19', 'one-earth-eco-644', 'one-earth-eco-788', 'one-earth-eco-794', 'one-earth-eco-795', 'one-earth-eco-802', 'one-earth-eco-806'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Apennine beech and pine montane forest',
        'Corsican Laricio pine, holm oak and cork oak old-growth',
        'Illyrian Hungarian oak and downy oak deciduous forest',
        'Italian Turkey oak, cork oak and relict bay laurel woodland',
      ],
      sourceIds: ['one-earth-pa19', 'one-earth-eco-644', 'one-earth-eco-788', 'one-earth-eco-794', 'one-earth-eco-795', 'one-earth-eco-802', 'one-earth-eco-806'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Italian wolf recovery from under 100 individuals after World War II',
        'Skadar Lake hosting 280 bird species in the Dinaric karst',
        'less than 1% of Italy remaining as primary forest',
      ],
      sourceIds: ['one-earth-pa19', 'one-earth-eco-644', 'one-earth-eco-788', 'one-earth-eco-794', 'one-earth-eco-795', 'one-earth-eco-802', 'one-earth-eco-806'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 26% with a protection level of 9. Coastal development, changes in agriculture, illegal killing of wolves, wolf-dog hybridization, illegal logging, fire, pollution and coastal tourism are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa19', 'one-earth-eco-644', 'one-earth-eco-788', 'one-earth-eco-794', 'one-earth-eco-795', 'one-earth-eco-802', 'one-earth-eco-806'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:corsican-red-deer',
      'species:mouflon',
      'species:italian-wolf',
      'species:italian-chamois',
      'species:bearded-vulture',
      'species:eleonoras-falcon',
      'species:dalmatian-pelican',
    ],
    countryIds: ['IT', 'FR', 'AL', 'HR', 'GR', 'BA', 'ME', 'SI', 'MT'],
    sources: ['one-earth-pa19', 'one-earth-eco-644', 'one-earth-eco-788', 'one-earth-eco-794', 'one-earth-eco-795', 'one-earth-eco-802', 'one-earth-eco-806'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa20',
    summary: {
      value:
        'Balearic Sea & West Mediterranean Mixed Forests (PA20) joins six ecoregions of the Mediterranean subrealm across Spain, Portugal and France, totalling approximately 55.5 million hectares. The critically endangered Iberian lynx, the flagship, survives with only 156 mature individuals in southwest Spain, alongside the endemic Iberian ibex, Spanish imperial eagles, Cantabrian chamois, griffon and black vultures in holm oak maquis, cork oak montados and dehesas around Doñana.',
      sourceIds: ['one-earth-pa20', 'one-earth-eco-792', 'one-earth-eco-793', 'one-earth-eco-799', 'one-earth-eco-800', 'one-earth-eco-803', 'one-earth-eco-805'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'six ecoregions totaling approximately 55.5 million hectares',
        'Iberian central plateau and Sierra Morena',
        'Sierra Nevada summit at 3,482 m, the highest point in the peninsula',
        'Doñana wetlands and Cabo de Gata volcanic coast',
      ],
      sourceIds: ['one-earth-pa20', 'one-earth-eco-792', 'one-earth-eco-793', 'one-earth-eco-799', 'one-earth-eco-800', 'one-earth-eco-803', 'one-earth-eco-805'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are Mediterranean with very hot, dry summers and relatively mild, subhumid to humid winters; annual precipitation ranges from under 300 mm in the southeast arid zone to 2,000 mm in the northwest mountains.',
      },
      sourceIds: ['one-earth-pa20', 'one-earth-eco-792', 'one-earth-eco-793', 'one-earth-eco-799', 'one-earth-eco-800', 'one-earth-eco-803', 'one-earth-eco-805'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'holm oak maquis and dehesa sylvopastoral woodlands',
        'endemic Salzmann pine and Scots pine montane forest',
        'cork oak and holm oak Mediterranean woodland',
        'esparto grass, dwarf fan palms and relict sandarac in the southeast',
      ],
      sourceIds: ['one-earth-pa20', 'one-earth-eco-792', 'one-earth-eco-793', 'one-earth-eco-799', 'one-earth-eco-800', 'one-earth-eco-803', 'one-earth-eco-805'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Iberian lynx survival with only 156 mature individuals',
        'Doñana hosting over 500,000 wintering waterfowl annually',
        'Ebro Delta nesting colony of 30,000 pairs of waterbirds',
      ],
      sourceIds: ['one-earth-pa20', 'one-earth-eco-792', 'one-earth-eco-793', 'one-earth-eco-799', 'one-earth-eco-800', 'one-earth-eco-803', 'one-earth-eco-805'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 29% with a protection level of 10. Deforestation, intensive agriculture, forest fires, dam construction, over-intense hunting, increased drought severity, aquifer degradation and greenhouse horticulture are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa20', 'one-earth-eco-792', 'one-earth-eco-793', 'one-earth-eco-799', 'one-earth-eco-800', 'one-earth-eco-803', 'one-earth-eco-805'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:iberian-lynx',
      'species:iberian-ibex',
      'species:spanish-imperial-eagle',
      'species:cantabrian-chamois',
      'species:griffon-vulture',
      'species:cinereous-vulture',
    ],
    countryIds: ['ES', 'PT', 'FR', 'IT'],
    sources: ['one-earth-pa20', 'one-earth-eco-792', 'one-earth-eco-793', 'one-earth-eco-799', 'one-earth-eco-800', 'one-earth-eco-803', 'one-earth-eco-805'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa21',
    summary: {
      value:
        'Azores Forest Islands (PA21) is a single-ecoregion bioregion of approximately 262 thousand hectares in the Mediterranean subrealm, encompassing nine volcanic islands situated more than 1,350 km west of the Portuguese coast. The Azores noctule, the only native mammal and the only bat known to hunt insects during the day, and the Azores bullfinch, once Europe\'s most endangered passerine with fewer than 300 breeding pairs, are the sole endemic vertebrates in native laurel and juniper forests sustained by the Gulf Stream.',
      sourceIds: ['one-earth-pa21', 'one-earth-eco-645'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'single ecoregion totaling approximately 262 thousand hectares',
        'nine volcanic islands over 1,350 km west of mainland Portugal',
        'native laurel and juniper forest remnants',
        'lava tunnels and basalt grottoes',
      ],
      sourceIds: ['one-earth-pa21', 'one-earth-eco-645'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregion is mild for its latitude due to the Gulf Stream, with year-round temperatures ranging from 16 to 25°C.',
      },
      sourceIds: ['one-earth-pa21', 'one-earth-eco-645'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'native laurel and juniper lowland forests',
        'remarkable bryophytic plant diversity',
        'introduced poplar, oak and chestnut shade trees',
        'pastures and numerous exotic species outcompeting natives',
      ],
      sourceIds: ['one-earth-pa21', 'one-earth-eco-645'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Azores noctule hunting insects during the day, unique among bats',
        'Azores bullfinch rebounding after land-use change over the past 50 years',
        'introduced mammals threatening endemic bird species',
      ],
      sourceIds: ['one-earth-pa21', 'one-earth-eco-645'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 24% with a protection level of 10. Land-use change, invasive species, timber extraction of native laurel and juniper, pasture expansion and mammal introductions threatening endemic bird species are the dominant pressures across the bioregion.',
      sourceIds: ['one-earth-pa21', 'one-earth-eco-645'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:azores-noctule',
      'species:azores-bullfinch',
      'species:azores-wood-pigeon',
      'species:azores-goldcrest',
    ],
    countryIds: ['PT'],
    sources: ['one-earth-pa21', 'one-earth-eco-645'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa22',
    summary: {
      value:
        'Madeira Evergreen Island (PA22) is a single-ecoregion bioregion of approximately 82 thousand hectares in the North Africa subrealm, encompassing the mountainous island of Madeira. Humid laurisilva laurel forests of ancient, subtropical origin blanket its steep north-facing slopes and cloud belt, one of the most biodiverse and best-protected corners of southern Eurasia, with endemic species concentrated in the rainforest zone and drier scrub at lower elevations.',
      sourceIds: ['one-earth-pa22', 'one-earth-eco-668'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'single ecoregion totaling approximately 82 thousand hectares',
        'mountainous island of Madeira with Pico Ruivo at 1,861 m',
        'steep north-facing slopes in the cloud belt',
        'laurisilva laurel forest covering about 20 percent of the island',
      ],
      sourceIds: ['one-earth-pa22', 'one-earth-eco-668'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregion is temperate oceanic with an annual average around 19°C and annual precipitation of 250 to 750 mm.',
      },
      sourceIds: ['one-earth-pa22', 'one-earth-eco-668'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'humid laurisilva laurel forests of ancient subtropical origin',
        'drier scrub at lower elevations and on neighbouring islands',
        'about 1,226 vascular plant species with 66 strictly Madeiran',
      ],
      sourceIds: ['one-earth-pa22', 'one-earth-eco-668'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'laurisilva relict of a forest type that once spanned much of southern Europe',
        'Zino\'s petrel breeding on six inaccessible ledges',
        'monk seal population of 20 to 30 adults in Madeira',
      ],
      sourceIds: ['one-earth-pa22', 'one-earth-eco-668'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 63% with a protection level of 9. All laurisilva lies within the Madeira Natural Park, a UNESCO MaB Biosphere Reserve. Threats include invasive species, grazing, tourism and urban development, introduced herbivores, and predation on endemic avifauna by cats and rats.',
      sourceIds: ['one-earth-pa22', 'one-earth-eco-668'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:trocaz-pigeon',
      'species:zinos-petrel',
      'species:mediterranean-monk-seal',
    ],
    countryIds: ['PT'],
    sources: ['one-earth-pa22', 'one-earth-eco-668'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa23',
    summary: {
      value:
        'South Mediterranean Mixed Woodlands and Forests (PA23) joins five ecoregions of the North Africa subrealm across Morocco, Algeria, Tunisia, Libya, Egypt and Western Sahara, totalling approximately 78.2 million hectares. The threatened Cuvier\'s gazelle, the flagship mountain gazelle of the North African Mediterranean woodlands, persists alongside Barbary macaque, aoudad and golden jackal in Atlas cedar forests, High Atlas juniper steppe, argan woodlands and Mediterranean forest, much of it converted by agriculture and grazing.',
      sourceIds: [
        'one-earth-pa23',
        'one-earth-eco-701',
        'one-earth-eco-758',
        'one-earth-eco-796',
        'one-earth-eco-797',
        'one-earth-eco-798',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'five ecoregions totaling approximately 78.2 million hectares',
        'Mediterranean coast of North Africa from Morocco to Cyrenaica in Libya',
        'High Atlas and Tell Atlas ranges with Jbel Toubkal at 4,167 m',
        'easternmost Canary Islands of Fuerteventura and Lanzarote',
      ],
      sourceIds: [
        'one-earth-pa23',
        'one-earth-eco-701',
        'one-earth-eco-758',
        'one-earth-eco-796',
        'one-earth-eco-797',
        'one-earth-eco-798',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are Mediterranean with hot, dry summers and mild winters, annual rainfall from about 250 mm in the driest woodlands to over 2,000 mm at high elevations.',
      },
      sourceIds: [
        'one-earth-pa23',
        'one-earth-eco-701',
        'one-earth-eco-758',
        'one-earth-eco-796',
        'one-earth-eco-797',
        'one-earth-eco-798',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Mediterranean conifer and mixed forests including Atlas cedar',
        'High Atlas juniper steppe',
        'acacia-argania dry woodlands and succulent thickets',
        'Mediterranean dry woodlands and steppe with holm oak forest',
      ],
      sourceIds: [
        'one-earth-pa23',
        'one-earth-eco-701',
        'one-earth-eco-758',
        'one-earth-eco-796',
        'one-earth-eco-797',
        'one-earth-eco-798',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Cuvier\'s gazelle persistence in wooded Mediterranean steppe',
        'Barbary macaque as one of the last rare endemic mammals',
        'aoudad and Dorcas gazelle populations in the dry woodlands',
        'heavy conversion by agriculture and grazing',
      ],
      sourceIds: [
        'one-earth-pa23',
        'one-earth-eco-701',
        'one-earth-eco-758',
        'one-earth-eco-796',
        'one-earth-eco-797',
        'one-earth-eco-798',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 21% with a protection level of 7. Threats include deforestation, illegal firewood collection, overgrazing, agricultural conversion, fire and political instability.',
      sourceIds: [
        'one-earth-pa23',
        'one-earth-eco-701',
        'one-earth-eco-758',
        'one-earth-eco-796',
        'one-earth-eco-797',
        'one-earth-eco-798',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:cuviers-gazelle',
      'species:barbary-macaque',
      'species:aoudad',
      'species:dorcas-gazelle',
      'species:golden-jackal',
    ],
    countryIds: ['MA', 'DZ', 'TN', 'LY', 'EG', 'EH', 'ES'],
    sources: [
      'one-earth-pa23',
      'one-earth-eco-701',
      'one-earth-eco-758',
      'one-earth-eco-796',
      'one-earth-eco-797',
      'one-earth-eco-798',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa24',
    summary: {
      value:
        'Northern Sahara Deserts, Savannas and Marshes (PA24) joins seven ecoregions of the North Africa subrealm across Egypt, Algeria, Tunisia, Mauritania, Libya, Morocco, Western Sahara, Niger, Chad, Sudan and the western Canary Islands of Spain, totalling approximately 404.5 million hectares. Vast hyper-arid desert plains, ergs, hamadas and saline chotts are broken by oases and seasonal floodplains, the irrigation-fed floodplains of the Nile valley and delta, and volcanic islands holding relict dry woodland flora.',
      sourceIds: [
        'one-earth-pa24',
        'one-earth-eco-744',
        'one-earth-eco-787',
        'one-earth-eco-822',
        'one-earth-eco-833',
        'one-earth-eco-839',
        'one-earth-eco-845',
        'one-earth-eco-745',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'seven ecoregions totaling approximately 404.5 million hectares',
        'vast hyper-arid desert plains, regs, hamadas and erg sand seas',
        'saline depressions and chotts of the Saharan Halophytics',
        'Nile valley and delta floodplains carrying most of Egypt\'s cropland',
        'western Canary Islands with relict dry woodland flora',
      ],
      sourceIds: [
        'one-earth-pa24',
        'one-earth-eco-744',
        'one-earth-eco-787',
        'one-earth-eco-822',
        'one-earth-eco-833',
        'one-earth-eco-839',
        'one-earth-eco-845',
        'one-earth-eco-745',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are hyper-arid with summer highs over 50°C and winter nights below freezing, annual rainfall from under 25 mm in the central Sahara to 100 to 200 mm on the Nile floodplain and up to 650 mm on the Canaries.',
      },
      sourceIds: [
        'one-earth-pa24',
        'one-earth-eco-744',
        'one-earth-eco-787',
        'one-earth-eco-822',
        'one-earth-eco-833',
        'one-earth-eco-839',
        'one-earth-eco-845',
        'one-earth-eco-745',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'azonal halophytic vegetation of the Saharan salt depressions',
        'xerophytic shrubs and ephemerals of the desert plains',
        'Nile floodplain and delta wetlands',
        'relict dry woodland flora on the western Canary Islands',
      ],
      sourceIds: [
        'one-earth-pa24',
        'one-earth-eco-744',
        'one-earth-eco-787',
        'one-earth-eco-822',
        'one-earth-eco-833',
        'one-earth-eco-839',
        'one-earth-eco-845',
        'one-earth-eco-745',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Palearctic-Afrotropical bird migration and wintering across the bioregion',
        'lesser and greater flamingo nesting at the Siwa lakes',
        'Nubian sandstone aquifer feeding the oasis marshlands',
        'remaining gazelle and fennec fox populations across the desert',
      ],
      sourceIds: [
        'one-earth-pa24',
        'one-earth-eco-744',
        'one-earth-eco-787',
        'one-earth-eco-822',
        'one-earth-eco-833',
        'one-earth-eco-839',
        'one-earth-eco-845',
        'one-earth-eco-745',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 41% with a protection level of 1. Threats include desertification from climate change, water overexploitation, expanding irrigated cropland and hunting.',
      sourceIds: [
        'one-earth-pa24',
        'one-earth-eco-744',
        'one-earth-eco-787',
        'one-earth-eco-822',
        'one-earth-eco-833',
        'one-earth-eco-839',
        'one-earth-eco-845',
        'one-earth-eco-745',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:egyptian-tortoise',
      'species:fennec-fox',
      'species:dorcas-gazelle',
      'species:dama-gazelle',
      'species:desert-monitor',
    ],
    countryIds: ['EG', 'DZ', 'TN', 'MA', 'MR', 'LY', 'EH', 'NE', 'TD', 'SD', 'ES'],
    sources: [
      'one-earth-pa24',
      'one-earth-eco-744',
      'one-earth-eco-787',
      'one-earth-eco-822',
      'one-earth-eco-833',
      'one-earth-eco-839',
      'one-earth-eco-845',
      'one-earth-eco-745',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa25',
    summary: {
      value:
        'Southern Sahara Deserts and Mountain Woodlands (PA25) joins four ecoregions of the North Africa subrealm across Algeria, Mauritania, Sudan, Niger, Mali, Chad, Egypt, Western Sahara and Libya, totalling approximately 329.9 million hectares. Isolated volcanic highlands — the Aïr, Tibesti, Jebel Uweinat, Hoggar and Tassili n\'Ajjer — rise as sky islands above gravelly and sandy plains, trapping moisture for relict Mediterranean-affinity woodlands and sheltering addax, dama gazelle and the extinct-in-the-wild scimitar-horned oryx.',
      sourceIds: [
        'one-earth-pa25',
        'one-earth-eco-823',
        'one-earth-eco-842',
        'one-earth-eco-844',
        'one-earth-eco-846',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'four ecoregions totaling approximately 329.9 million hectares',
        'gravelly and sandy desert crossed by scattered dry watercourses',
        'isolated volcanic highlands of the Aïr, Tibesti, Jebel Uweinat and Hoggar',
        'Emi Koussi at 3,415 m, the highest mountain in the Sahara',
      ],
      sourceIds: [
        'one-earth-pa25',
        'one-earth-eco-823',
        'one-earth-eco-842',
        'one-earth-eco-844',
        'one-earth-eco-846',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are hyper-arid with mean annual temperatures over 30°C and summer highs exceeding 50°C, annual rainfall mostly under 100 mm but rising to 600 mm and more on the mountain tops.',
      },
      sourceIds: [
        'one-earth-pa25',
        'one-earth-eco-823',
        'one-earth-eco-842',
        'one-earth-eco-844',
        'one-earth-eco-846',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'relict Mediterranean-affinity woodlands on the mountain blocks',
        'sparse xerophytic shrubland of the surrounding lowlands',
        'date palm and doum palm oases',
        'gueltas supporting relict fish and reptile populations',
      ],
      sourceIds: [
        'one-earth-pa25',
        'one-earth-eco-823',
        'one-earth-eco-842',
        'one-earth-eco-844',
        'one-earth-eco-846',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'addax, dama gazelle and scimitar-horned oryx characteristic of the former Saharan fauna',
        'Saharan cheetah persisting on the mountain ranges',
        'gueltas holding relicts such as West African crocodiles',
        'sympatry of aoudad, Dorcas gazelle and fennec fox',
      ],
      sourceIds: [
        'one-earth-pa25',
        'one-earth-eco-823',
        'one-earth-eco-842',
        'one-earth-eco-844',
        'one-earth-eco-846',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 37% with a protection level of 2. Threats include poaching, livestock poisoning of cheetah and striped hyena, oil, gold and uranium extraction, and conflict-related instability.',
      sourceIds: [
        'one-earth-pa25',
        'one-earth-eco-823',
        'one-earth-eco-842',
        'one-earth-eco-844',
        'one-earth-eco-846',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:addax',
      'species:dama-gazelle',
      'species:scimitar-horned-oryx',
      'species:aoudad',
      'species:saharan-cheetah',
    ],
    countryIds: ['DZ', 'MR', 'SD', 'NE', 'ML', 'TD', 'EG', 'EH', 'LY'],
    sources: [
      'one-earth-pa25',
      'one-earth-eco-823',
      'one-earth-eco-842',
      'one-earth-eco-844',
      'one-earth-eco-846',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa26',
    summary: {
      value:
        'Red Sea, Arabian Deserts and Salt Marshes (PA26) joins fifteen ecoregions of the Greater Arabian Peninsula subrealm across the countries of the Arabian Peninsula and Levant, totalling approximately 332.9 million hectares. The great sand seas of the Rub\' al-Khali and an-Nafud, gravel plains, basalt lava fields, the Al-Hajar mountains, Red Sea coastal deserts and Tigris-Euphrates alluvial salt marshes support relict and endemic fauna — Arabian tahr, sand cat, houbara bustard and Socotra cormorant — alongside the reintroduced Arabian oryx.',
      sourceIds: [
        'one-earth-pa26',
        'one-earth-eco-722',
        'one-earth-eco-723',
        'one-earth-eco-739',
        'one-earth-eco-747',
        'one-earth-eco-809',
        'one-earth-eco-810',
        'one-earth-eco-811',
        'one-earth-eco-821',
        'one-earth-eco-830',
        'one-earth-eco-831',
        'one-earth-eco-832',
        'one-earth-eco-836',
        'one-earth-eco-837',
        'one-earth-eco-840',
        'one-earth-eco-115',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'fifteen ecoregions totaling approximately 332.9 million hectares',
        'Rub\' al-Khali Empty Quarter and an-Nafud sand seas',
        'gravel plains and basalt lava fields of the north',
        'Al-Hajar mountains and Hisma sandstone tablelands',
        'Red Sea mangrove-fringed coasts and Tigris-Euphrates salt marshes',
      ],
      sourceIds: [
        'one-earth-pa26',
        'one-earth-eco-722',
        'one-earth-eco-723',
        'one-earth-eco-739',
        'one-earth-eco-747',
        'one-earth-eco-809',
        'one-earth-eco-810',
        'one-earth-eco-811',
        'one-earth-eco-821',
        'one-earth-eco-830',
        'one-earth-eco-831',
        'one-earth-eco-832',
        'one-earth-eco-836',
        'one-earth-eco-837',
        'one-earth-eco-840',
        'one-earth-eco-115',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are among the hottest and driest on Earth with summer temperatures exceeding 50°C, and annual rainfall mostly under 100 mm but up to 400 mm in the Al-Hajar mountains.',
      },
      sourceIds: [
        'one-earth-pa26',
        'one-earth-eco-722',
        'one-earth-eco-723',
        'one-earth-eco-739',
        'one-earth-eco-747',
        'one-earth-eco-809',
        'one-earth-eco-810',
        'one-earth-eco-811',
        'one-earth-eco-821',
        'one-earth-eco-830',
        'one-earth-eco-831',
        'one-earth-eco-832',
        'one-earth-eco-836',
        'one-earth-eco-837',
        'one-earth-eco-840',
        'one-earth-eco-115',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'mangrove stands of the Red Sea and Arabian-Persian Gulf coasts',
        'acacia, ghaf and haloxylon shrublands of the gravel plains',
        'halophytic salt marsh vegetation of the inland depressions',
        'juniper and montane woodlands of the Arabian highlands',
      ],
      sourceIds: [
        'one-earth-pa26',
        'one-earth-eco-722',
        'one-earth-eco-723',
        'one-earth-eco-739',
        'one-earth-eco-747',
        'one-earth-eco-809',
        'one-earth-eco-810',
        'one-earth-eco-811',
        'one-earth-eco-821',
        'one-earth-eco-830',
        'one-earth-eco-831',
        'one-earth-eco-832',
        'one-earth-eco-836',
        'one-earth-eco-837',
        'one-earth-eco-840',
        'one-earth-eco-115',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Arabian oryx reintroduction into protected reserves after extinction in the wild',
        'sooty falcon and Socotra cormorant breeding colonies along the coasts',
        'world\'s second-largest dugong population off Hawar Island',
        'Palearctic-Afrotropical bird migration and wintering across the deserts',
      ],
      sourceIds: [
        'one-earth-pa26',
        'one-earth-eco-722',
        'one-earth-eco-723',
        'one-earth-eco-739',
        'one-earth-eco-747',
        'one-earth-eco-809',
        'one-earth-eco-810',
        'one-earth-eco-811',
        'one-earth-eco-821',
        'one-earth-eco-830',
        'one-earth-eco-831',
        'one-earth-eco-832',
        'one-earth-eco-836',
        'one-earth-eco-837',
        'one-earth-eco-840',
        'one-earth-eco-115',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 44% with a protection level of 1. Threats include overgrazing, hunting and off-road driving, oil and gas exploration, and coastal development.',
      sourceIds: [
        'one-earth-pa26',
        'one-earth-eco-722',
        'one-earth-eco-723',
        'one-earth-eco-739',
        'one-earth-eco-747',
        'one-earth-eco-809',
        'one-earth-eco-810',
        'one-earth-eco-811',
        'one-earth-eco-821',
        'one-earth-eco-830',
        'one-earth-eco-831',
        'one-earth-eco-832',
        'one-earth-eco-836',
        'one-earth-eco-837',
        'one-earth-eco-840',
        'one-earth-eco-115',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:arabian-tahr',
      'species:arabian-oryx',
      'species:sand-cat',
      'species:arabian-gazelle',
      'species:socotra-cormorant',
      'species:houbara-bustard',
    ],
    countryIds: ['BH', 'EG', 'IR', 'IQ', 'IL', 'JO', 'KW', 'OM', 'PS', 'QA', 'SA', 'SD', 'SY', 'TR', 'AE', 'YE'],
    sources: [
      'one-earth-pa26',
      'one-earth-eco-722',
      'one-earth-eco-723',
      'one-earth-eco-739',
      'one-earth-eco-747',
      'one-earth-eco-809',
      'one-earth-eco-810',
      'one-earth-eco-811',
      'one-earth-eco-821',
      'one-earth-eco-830',
      'one-earth-eco-831',
      'one-earth-eco-832',
      'one-earth-eco-836',
      'one-earth-eco-837',
      'one-earth-eco-840',
      'one-earth-eco-115',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa27',
    summary: {
      value:
        'Zagros Mountain Forests and East Anatolian Steppe (PA27) joins two ecoregions of the Persian Deserts and Forests subrealm across Iran, Iraq, Turkey, Armenia, Georgia and Azerbaijan, totalling approximately 56.7 million hectares. The great mountain arc from eastern Anatolia across the Kurdish-Zagros ranges joins cold continental montane steppe with oak-dominated forest-steppe, supporting wild goat, Gmelin\'s mouflon, goitered gazelle, Syrian brown bear and striped hyena.',
      sourceIds: ['one-earth-pa27', 'one-earth-eco-688', 'one-earth-eco-727'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'two ecoregions totaling approximately 56.7 million hectares',
        'Zagros arc from southeast Turkey across northern Iraq into western Iran',
        'Mount Ararat at 5,317 m and Kuh-e-Dinar at 4,276 m',
        'Lake Van and Lake Urmia saline lakes ringed by steppe',
      ],
      sourceIds: ['one-earth-pa27', 'one-earth-eco-688', 'one-earth-eco-727'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are continental with extremely cold winters and semi-arid to arid summers, annual precipitation of 400 to 800 mm in the Zagros and extreme cold on the Eastern Anatolian montane steppe.',
      },
      sourceIds: ['one-earth-pa27', 'one-earth-eco-688', 'one-earth-eco-727'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'oak-dominated forest-steppe of the Zagros',
        'juniper-almond woodlands with pistachio-rose understory',
        'steppes of feather grasses, fescues and sea-lavenders',
        'saline steppes around Lake Van and Lake Urmia',
      ],
      sourceIds: ['one-earth-pa27', 'one-earth-eco-688', 'one-earth-eco-727'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'wild relatives of domesticated crops in the Zagros',
        'Gmelin\'s mouflon as an ancestral wild sheep',
        'transhumant herding shaping the steppe-forest mosaic for millennia',
        'retaliatory killing and trapping threatening carnivores',
      ],
      sourceIds: ['one-earth-pa27', 'one-earth-eco-688', 'one-earth-eco-727'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 8% with a protection level of 6. Threats include overgrazing, poaching and trapping, retaliatory killing of carnivores, dam construction and water overexploitation.',
      sourceIds: ['one-earth-pa27', 'one-earth-eco-688', 'one-earth-eco-727'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:gmelins-mouflon',
      'species:syrian-brown-bear',
      'species:persian-leopard',
      'species:wild-goat',
      'species:goitered-gazelle',
    ],
    countryIds: ['IR', 'IQ', 'TR', 'AM', 'GE', 'AZ'],
    sources: ['one-earth-pa27', 'one-earth-eco-688', 'one-earth-eco-727'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa28',
    summary: {
      value:
        'South Caspian Coastal and Mountain Mixed Forests (PA28) joins two ecoregions of the Persian Deserts and Forests subrealm across Iran and Azerbaijan, totalling approximately 11.9 million hectares. The Hyrcanian broadleaf forests, a UNESCO World Heritage site, hold relict species such as Persian ironwood, silk tree and Caucasian zelkova, grading upward into the Elburz range forest-steppe and alpine steppe — the Iranian stronghold of the Persian leopard and Syrian brown bear.',
      sourceIds: ['one-earth-pa28', 'one-earth-eco-649', 'one-earth-eco-695'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'two ecoregions totaling approximately 11.9 million hectares',
        'narrow wet green band along the south Caspian shore and Elburz mountains',
        'Mount Damavand at 5,766 m, Iran\'s highest peak',
        '800 km belt of deciduous forest on the northern Elburz slopes',
      ],
      sourceIds: ['one-earth-pa28', 'one-earth-eco-649', 'one-earth-eco-695'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are semi-subtropical and humid near the Caspian, grading to arid with extreme winter cold and 150 to 300 mm annual precipitation on the Elburz slopes.',
      },
      sourceIds: ['one-earth-pa28', 'one-earth-eco-649', 'one-earth-eco-695'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Hyrcanian broadleaf mixed forest with Persian ironwood, silk tree and Caucasian zelkova',
        'oak, cypress and juniper woodland of the Elburz forest-steppe',
        'alpine steppe at high elevations',
        'post-Pleistocene refuge forests known as the mother of European forests',
      ],
      sourceIds: ['one-earth-pa28', 'one-earth-eco-649', 'one-earth-eco-695'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Persian leopard stronghold in Iran with about 20 individuals in Golestan National Park',
        'Syrian brown bear refuge with 500 to 1,000 individuals in Iran',
        'relict species surviving from the post-Pleistocene forest refuge',
        'unsustainable agriculture and felling clearing the forests',
      ],
      sourceIds: ['one-earth-pa28', 'one-earth-eco-649', 'one-earth-eco-695'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 20% with a protection level of 6. Threats include unsustainable agriculture, felling, urban development, road construction, illegal hunting and retaliatory killing.',
      sourceIds: ['one-earth-pa28', 'one-earth-eco-649', 'one-earth-eco-695'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:syrian-brown-bear',
      'species:persian-leopard',
      'species:red-deer',
      'species:wild-goat',
      'species:goitered-gazelle',
    ],
    countryIds: ['IR', 'AZ'],
    sources: ['one-earth-pa28', 'one-earth-eco-649', 'one-earth-eco-695'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa29',
    summary: {
      value:
        'Persian Deserts and Mountain Woodlands (PA29) joins four ecoregions of the Persian Deserts and Forests subrealm across Iran, Pakistan, Afghanistan and Iraq, totalling approximately 133.9 million hectares. The Dasht-e Kavir and Dasht-e Lut, among the hottest and driest deserts on Earth, ringed by dry mountain ranges, support the last wild Asiatic cheetah in Iran alongside the Iranian ground jay, onager and goitered gazelle.',
      sourceIds: [
        'one-earth-pa29',
        'one-earth-eco-757',
        'one-earth-eco-820',
        'one-earth-eco-838',
        'one-earth-eco-841',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'four ecoregions totaling approximately 133.9 million hectares',
        'Dasht-e Kavir and Dasht-e Lut desert basins',
        'Kuh Rud and eastern Iran montane woodlands',
        'Registan-North Pakistan sandy desert',
        'South Iran Nubo-Sindian desert reaching the Gulf of Oman',
      ],
      sourceIds: [
        'one-earth-pa29',
        'one-earth-eco-757',
        'one-earth-eco-820',
        'one-earth-eco-838',
        'one-earth-eco-841',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are continental deserts with extreme temperatures, surface readings known to reach 70°C, and annual rainfall from under 100 mm to about 400 mm.',
      },
      sourceIds: [
        'one-earth-pa29',
        'one-earth-eco-757',
        'one-earth-eco-820',
        'one-earth-eco-838',
        'one-earth-eco-841',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'salt flats, gravel plains and sweeping sand seas',
        'pistachio-almond and juniper woodland on the mountain fringes',
        'Nubo-Sindian shrubland of Euphorbia larica along the shores',
        'dwarf scrub, saltworts and saxaul in the central basins',
      ],
      sourceIds: [
        'one-earth-pa29',
        'one-earth-eco-757',
        'one-earth-eco-820',
        'one-earth-eco-838',
        'one-earth-eco-841',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'last wild Asiatic cheetah populations surviving in Iran',
        'Iranian ground jay and onager persistence in the basins',
        'goitered gazelle remaining despite hunting pressure',
        'overgrazing and illegal hunting pressure across the plateau',
      ],
      sourceIds: [
        'one-earth-pa29',
        'one-earth-eco-757',
        'one-earth-eco-820',
        'one-earth-eco-838',
        'one-earth-eco-841',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 25% with a protection level of 3. Threats include overgrazing, illegal hunting, road mortality of cheetah, water diversion and dam construction.',
      sourceIds: [
        'one-earth-pa29',
        'one-earth-eco-757',
        'one-earth-eco-820',
        'one-earth-eco-838',
        'one-earth-eco-841',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:asiatic-cheetah',
      'species:iranian-ground-jay',
      'species:onager',
      'species:goitered-gazelle',
      'species:striped-hyena',
      'species:caracal',
    ],
    countryIds: ['IR', 'PK', 'AF', 'IQ'],
    sources: [
      'one-earth-pa29',
      'one-earth-eco-757',
      'one-earth-eco-820',
      'one-earth-eco-838',
      'one-earth-eco-841',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa30',
    summary: {
      value:
        'Afghan-Balochistan Drylands, Mountain Meadows and Conifer Forests (PA30) joins eight ecoregions of the Persian Deserts and Forests subrealm across Afghanistan, Pakistan, Turkmenistan, Uzbekistan, Tajikistan and Iran, totalling approximately 78.0 million hectares. Highland meadows, relict juniper and cedar conifer forests, dry steppe and desert support urial, markhor, the marbled polecat and a rich montane avifauna, long shaped by pastoralism and increasingly threatened by drought, overgrazing and conflict-related degradation.',
      sourceIds: [
        'one-earth-pa30',
        'one-earth-eco-813',
        'one-earth-eco-834',
        'one-earth-eco-807',
        'one-earth-eco-752',
        'one-earth-eco-816',
        'one-earth-eco-694',
        'one-earth-eco-766',
        'one-earth-eco-814',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'eight ecoregions totaling approximately 78.0 million hectares',
        'Badghyz and Karabil semi-deserts of the Turkmen-Afghan borderlands',
        'Paropamisus xeric woodlands and Hindu Kush foothills',
        'Sulaiman Range alpine meadows and Balochistan xeric woodlands',
        'relict juniper and Chilgoza pine forests',
      ],
      sourceIds: [
        'one-earth-pa30',
        'one-earth-eco-813',
        'one-earth-eco-834',
        'one-earth-eco-807',
        'one-earth-eco-752',
        'one-earth-eco-816',
        'one-earth-eco-694',
        'one-earth-eco-766',
        'one-earth-eco-814',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are cold semi-arid to desert with winter minima below -11°C and summer maxima over 40°C, annual precipitation from 225 mm to over 500 mm.',
      },
      sourceIds: [
        'one-earth-pa30',
        'one-earth-eco-813',
        'one-earth-eco-834',
        'one-earth-eco-807',
        'one-earth-eco-752',
        'one-earth-eco-816',
        'one-earth-eco-694',
        'one-earth-eco-766',
        'one-earth-eco-814',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'relict juniper and cedar conifer forests',
        'dry steppe and alpine meadow vegetation',
        'savanna-like wild pistachio plateaus',
        'Amygdalus semi-desert shrublands',
      ],
      sourceIds: [
        'one-earth-pa30',
        'one-earth-eco-813',
        'one-earth-eco-834',
        'one-earth-eco-807',
        'one-earth-eco-752',
        'one-earth-eco-816',
        'one-earth-eco-694',
        'one-earth-eco-766',
        'one-earth-eco-814',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'marbled polecat persistence across the steppes',
        'urial and markhor populations in the mountain systems',
        'pastoralism shaping the landscape for millennia',
        'drought, overgrazing and conflict-related degradation',
      ],
      sourceIds: [
        'one-earth-pa30',
        'one-earth-eco-813',
        'one-earth-eco-834',
        'one-earth-eco-807',
        'one-earth-eco-752',
        'one-earth-eco-816',
        'one-earth-eco-694',
        'one-earth-eco-766',
        'one-earth-eco-814',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 8% with a protection level of 2. Threats include drought, overgrazing, illegal logging and fuelwood collection, conflict-related degradation and weak protected-area effectiveness.',
      sourceIds: [
        'one-earth-pa30',
        'one-earth-eco-813',
        'one-earth-eco-834',
        'one-earth-eco-807',
        'one-earth-eco-752',
        'one-earth-eco-816',
        'one-earth-eco-694',
        'one-earth-eco-766',
        'one-earth-eco-814',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:marbled-polecat',
      'species:afghan-urial',
      'species:kabul-markhor',
      'species:chiltan-markhor',
      'species:sind-ibex',
      'species:snow-leopard',
    ],
    countryIds: ['AF', 'PK', 'TM', 'UZ', 'TJ', 'IR'],
    sources: [
      'one-earth-pa30',
      'one-earth-eco-813',
      'one-earth-eco-834',
      'one-earth-eco-807',
      'one-earth-eco-752',
      'one-earth-eco-816',
      'one-earth-eco-694',
      'one-earth-eco-766',
      'one-earth-eco-814',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa31',
    summary: {
      value:
        'The Tian Shan-Pamir Grasslands, Mountain Steppe & Conifer Forests (PA31) joins five ecoregions of the Tien Shan Mountains subrealm in the Central Eurasia realm across China, Kyrgyzstan, Kazakhstan, Uzbekistan, Tajikistan, Turkmenistan and Afghanistan, totaling more than 73 million hectares. Spruce-dominated montane conifer forests, open woodlands, foothill arid steppe and montane steppe support the saiga antelope, Siberian ibex, argali and snow leopard along the latitudinal spine of the range.',
      sourceIds: [
        'one-earth-pa31',
        'one-earth-eco-709',
        'one-earth-eco-721',
        'one-earth-eco-730',
        'one-earth-eco-740',
        'one-earth-eco-767',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'five ecoregions totaling more than 73 million hectares',
        '2,500 km Tian Shan range of spruce-dominated montane conifer forest',
        'Gissaro-Alai open woodlands and Tian Shan foothill arid steppe',
        'montane steppe and meadow belts of the high Tien Shan',
      ],
      sourceIds: [
        'one-earth-pa31',
        'one-earth-eco-709',
        'one-earth-eco-721',
        'one-earth-eco-730',
        'one-earth-eco-740',
        'one-earth-eco-767',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are cold and continental, with the Tian Shan forest band limited to a 1,500-2,700 m belt and the Alai-Western Tian Shan steppe averaging about 13.6C annually with about 329 mm of rainfall.',
      },
      sourceIds: [
        'one-earth-pa31',
        'one-earth-eco-709',
        'one-earth-eco-721',
        'one-earth-eco-730',
        'one-earth-eco-740',
        'one-earth-eco-767',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'spruce-dominated montane conifer forests of the Tian Shan',
        'open woodlands of the Gissaro-Alai',
        'foothill arid steppe and montane steppe',
        'alpine meadow communities of the high Tien Shan',
      ],
      sourceIds: [
        'one-earth-pa31',
        'one-earth-eco-709',
        'one-earth-eco-721',
        'one-earth-eco-730',
        'one-earth-eco-740',
        'one-earth-eco-767',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'saiga antelope as the iconic species of the steppes',
        'Siberian ibex and argali as snow leopard prey',
        'golden eagle, steppe eagle and bearded vulture raptor community',
        'overgrazing and unsustainable hunting as the main pressures',
      ],
      sourceIds: [
        'one-earth-pa31',
        'one-earth-eco-709',
        'one-earth-eco-721',
        'one-earth-eco-730',
        'one-earth-eco-740',
        'one-earth-eco-767',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 37% with a protection level of 2. Threats include unsustainable hunting, overgrazing at higher elevations and steppe degradation across the montane belt.',
      sourceIds: [
        'one-earth-pa31',
        'one-earth-eco-709',
        'one-earth-eco-721',
        'one-earth-eco-730',
        'one-earth-eco-740',
        'one-earth-eco-767',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:saiga-antelope',
      'species:siberian-ibex',
      'species:snow-leopard',
      'species:golden-eagle',
      'species:bearded-vulture',
      'species:argali',
      'species:steppe-eagle',
    ],
    countryIds: ['CN', 'KG', 'KZ', 'UZ', 'TJ', 'TM', 'AF'],
    sources: [
      'one-earth-pa31',
      'one-earth-eco-709',
      'one-earth-eco-721',
      'one-earth-eco-730',
      'one-earth-eco-740',
      'one-earth-eco-767',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa32',
    summary: {
      value:
        'The Central Asian Deserts & Riparian Woodlands (PA32) joins four ecoregions of the Caspian Sea & Central Asian Deserts subrealm in the Central Eurasia realm across Kazakhstan, Uzbekistan, Kyrgyzstan and Turkmenistan, totaling approximately 200 million hectares. Northern and southern deserts, the Kazakh semi-desert and the riparian woodlands of the great river valleys support the toadhead agama, saiga antelope, goitered gazelle and sand cat.',
      sourceIds: [
        'one-earth-pa32',
        'one-earth-eco-817',
        'one-earth-eco-818',
        'one-earth-eco-819',
        'one-earth-eco-828',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'four ecoregions totaling approximately 200 million hectares',
        'the vast Central Asian northern and southern deserts',
        'Kazakh semi-desert transition belt',
        'riparian woodlands along the great river valleys',
      ],
      sourceIds: [
        'one-earth-pa32',
        'one-earth-eco-817',
        'one-earth-eco-818',
        'one-earth-eco-819',
        'one-earth-eco-828',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are cold, continental deserts and semi-deserts with low precipitation, while the riparian woodlands depend on river flooding.',
      },
      sourceIds: [
        'one-earth-pa32',
        'one-earth-eco-817',
        'one-earth-eco-818',
        'one-earth-eco-819',
        'one-earth-eco-828',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'saxaul and scrub of the northern and southern deserts',
        'Kazakh semi-desert vegetation',
        'tugai riparian woodland of the river valleys',
        'salt flats and desert margins',
      ],
      sourceIds: [
        'one-earth-pa32',
        'one-earth-eco-817',
        'one-earth-eco-818',
        'one-earth-eco-819',
        'one-earth-eco-828',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'toadhead agama as the iconic species',
        'saiga antelope, goitered gazelle and desert-dormouse in the desert steppes',
        'sand cat and corsac fox desert carnivores',
        'Pallas\u2019s fish eagle associated with the riparian woodlands',
      ],
      sourceIds: [
        'one-earth-pa32',
        'one-earth-eco-817',
        'one-earth-eco-818',
        'one-earth-eco-819',
        'one-earth-eco-828',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 52% with a protection level of 0. Threats include desertification, overgrazing, water diversion and the loss of tugai woodland.',
      sourceIds: [
        'one-earth-pa32',
        'one-earth-eco-817',
        'one-earth-eco-818',
        'one-earth-eco-819',
        'one-earth-eco-828',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:toadhead-agama',
      'species:desert-dormouse',
      'species:saiga-antelope',
      'species:sand-cat',
      'species:goitered-gazelle',
      'species:pallas-fish-eagle',
      'species:corsac-fox',
    ],
    countryIds: ['KZ', 'UZ', 'KG', 'TM'],
    sources: [
      'one-earth-pa32',
      'one-earth-eco-817',
      'one-earth-eco-818',
      'one-earth-eco-819',
      'one-earth-eco-828',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa33',
    summary: {
      value:
        'The Caspian Sea, Coastal Deserts & Kopet Dagh Mountain Woodlands (PA33) joins four ecoregions of the Caspian Sea & Central Asian Deserts subrealm in the Central Eurasia realm across Turkmenistan, Iran, Azerbaijan, Georgia, Kazakhstan and Russia, totaling approximately 41.5 million hectares. The iconic Caspian seal shares the basin with the Kopet Dagh juniper woodlands of Persia and leopard, while coastal desert and shrub steppe hold urial, onager and goitered gazelle.',
      sourceIds: [
        'one-earth-pa33',
        'one-earth-eco-756',
        'one-earth-eco-812',
        'one-earth-eco-815',
        'one-earth-eco-829',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'four ecoregions totaling approximately 41.5 million hectares',
        'the Caspian basin and its coastal lowland desert',
        'Kopet Dagh mountain woodlands and forest steppe',
        'Azerbaijan shrub desert and steppe',
      ],
      sourceIds: [
        'one-earth-pa33',
        'one-earth-eco-756',
        'one-earth-eco-812',
        'one-earth-eco-815',
        'one-earth-eco-829',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions range from Caspian coastal desert and semi-desert to the mountain woodland climate of the Kopet Dagh.',
      },
      sourceIds: [
        'one-earth-pa33',
        'one-earth-eco-756',
        'one-earth-eco-812',
        'one-earth-eco-815',
        'one-earth-eco-829',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Kopet Dagh juniper woodlands and forest steppe',
        'Caspian lowland desert vegetation',
        'Azerbaijan shrub desert and steppe',
        'semi-desert scrub of the Kopet Dagh foothills',
      ],
      sourceIds: [
        'one-earth-pa33',
        'one-earth-eco-756',
        'one-earth-eco-812',
        'one-earth-eco-815',
        'one-earth-eco-829',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Caspian seal as the iconic species of the Caspian basin',
        'Persian leopard and wild goat in the Kopet Dagh',
        'urial and onager in the desert steppes',
        'sand cat and goitered gazelle of the lowland deserts',
      ],
      sourceIds: [
        'one-earth-pa33',
        'one-earth-eco-756',
        'one-earth-eco-812',
        'one-earth-eco-815',
        'one-earth-eco-829',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 44% with a protection level of 1. Threats include overgrazing, hunting, habitat fragmentation and pressures on the Caspian ecosystem.',
      sourceIds: [
        'one-earth-pa33',
        'one-earth-eco-756',
        'one-earth-eco-812',
        'one-earth-eco-815',
        'one-earth-eco-829',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:caspian-seal',
      'species:sand-cat',
      'species:goitered-gazelle',
      'species:persian-leopard',
      'species:urial',
      'species:onager',
      'species:wild-goat',
    ],
    countryIds: ['TM', 'IR', 'AZ', 'GE', 'KZ', 'RU'],
    sources: [
      'one-earth-pa33',
      'one-earth-eco-756',
      'one-earth-eco-812',
      'one-earth-eco-815',
      'one-earth-eco-829',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa36',
    summary: {
      value:
        'The Sayan Mountains & Siberian Forest Steppe (PA36) joins four ecoregions of the Altai-Sayan Mountains subrealm in the Central Eurasia realm across Russia and Mongolia, totaling approximately 63.5 million hectares. Montane conifer forests, intermontane steppe, forest steppe and alpine meadows and tundra support the great grey owl, snow leopard, Siberian ibex and argali at the meeting of taiga and steppe.',
      sourceIds: [
        'one-earth-pa36',
        'one-earth-eco-707',
        'one-earth-eco-736',
        'one-earth-eco-738',
        'one-earth-eco-764',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'four ecoregions totaling approximately 63.5 million hectares',
        'Sayan montane conifer forests',
        'intermontane steppe and south Siberian forest steppe',
        'alpine meadows and tundra of the high Sayan',
      ],
      sourceIds: [
        'one-earth-pa36',
        'one-earth-eco-707',
        'one-earth-eco-736',
        'one-earth-eco-738',
        'one-earth-eco-764',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions range from montane taiga and alpine tundra to the cold, continental intermontane steppe.',
      },
      sourceIds: [
        'one-earth-pa36',
        'one-earth-eco-707',
        'one-earth-eco-736',
        'one-earth-eco-738',
        'one-earth-eco-764',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'montane conifer forest of the Sayan ranges',
        'intermontane and forest steppe vegetation',
        'alpine meadows and tundra communities',
        'wetland vegetation of the intermontane basins',
      ],
      sourceIds: [
        'one-earth-pa36',
        'one-earth-eco-707',
        'one-earth-eco-736',
        'one-earth-eco-738',
        'one-earth-eco-764',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'great grey owl as the iconic species',
        'snow leopard and Siberian ibex in the mountains',
        'argali and Mongolian marmot in the steppe belts',
        'Pallas\u2019s cat at the forest-steppe edge',
      ],
      sourceIds: [
        'one-earth-pa36',
        'one-earth-eco-707',
        'one-earth-eco-736',
        'one-earth-eco-738',
        'one-earth-eco-764',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 49% with a protection level of 3. Threats include logging, overgrazing, poaching and habitat fragmentation.',
      sourceIds: [
        'one-earth-pa36',
        'one-earth-eco-707',
        'one-earth-eco-736',
        'one-earth-eco-738',
        'one-earth-eco-764',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:great-grey-owl',
      'species:snow-leopard',
      'species:siberian-ibex',
      'species:mongolian-marmot',
      'species:pallas-cat',
      'species:argali',
    ],
    countryIds: ['RU', 'MN'],
    sources: [
      'one-earth-pa36',
      'one-earth-eco-707',
      'one-earth-eco-736',
      'one-earth-eco-738',
      'one-earth-eco-764',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa37',
    summary: {
      value:
        'The Altai Mountains & Ermin Valley (PA37) joins four ecoregions of the Altai-Sayan Mountains subrealm in the Central Eurasia realm across Mongolia, Russia, China and Kazakhstan, totaling approximately 38.1 million hectares. Montane forest and forest steppe, steppe and semi-desert, the Emin Valley steppe and alpine meadow and tundra support the iconic Altai argali, snow leopard and Siberian ibex.',
      sourceIds: [
        'one-earth-pa37',
        'one-earth-eco-690',
        'one-earth-eco-724',
        'one-earth-eco-728',
        'one-earth-eco-749',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'four ecoregions totaling approximately 38.1 million hectares',
        'Altai montane forest and forest steppe',
        'Altai steppe and semi-desert with the Emin Valley steppe',
        'alpine meadow and tundra of the high Altai',
      ],
      sourceIds: [
        'one-earth-pa37',
        'one-earth-eco-690',
        'one-earth-eco-724',
        'one-earth-eco-728',
        'one-earth-eco-749',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are cold and continental, from montane forest to semi-desert under a strongly seasonal regime.',
      },
      sourceIds: [
        'one-earth-pa37',
        'one-earth-eco-690',
        'one-earth-eco-724',
        'one-earth-eco-728',
        'one-earth-eco-749',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'montane forest and forest steppe of the Altai',
        'steppe and semi-desert vegetation',
        'Emin Valley steppe grassland',
        'alpine meadow and tundra communities',
      ],
      sourceIds: [
        'one-earth-pa37',
        'one-earth-eco-690',
        'one-earth-eco-724',
        'one-earth-eco-728',
        'one-earth-eco-749',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Altai argali as the iconic species',
        'snow leopard and Siberian ibex in the mountains',
        'demoiselle crane, dalmatian pelican and ferruginous duck of the steppe wetlands',
        'Pallas\u2019s cat and steppe avifauna',
      ],
      sourceIds: [
        'one-earth-pa37',
        'one-earth-eco-690',
        'one-earth-eco-724',
        'one-earth-eco-728',
        'one-earth-eco-749',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 46% with a protection level of 3. Threats include overgrazing, hunting and steppe conversion.',
      sourceIds: [
        'one-earth-pa37',
        'one-earth-eco-690',
        'one-earth-eco-724',
        'one-earth-eco-728',
        'one-earth-eco-749',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:argali',
      'species:pallas-cat',
      'species:siberian-ibex',
      'species:snow-leopard',
      'species:demoiselle-crane',
      'species:dalmatian-pelican',
      'species:ferruginous-duck',
    ],
    countryIds: ['MN', 'RU', 'CN', 'KZ'],
    sources: [
      'one-earth-pa37',
      'one-earth-eco-690',
      'one-earth-eco-724',
      'one-earth-eco-728',
      'one-earth-eco-749',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa38',
    summary: {
      value:
        'The Junggar & Alashan Semi-deserts (PA38), in the East Asian Deserts subrealm of Eastern Eurasia, joins the Alashan Plateau Semi-Desert and the Junggar Basin Semi-Desert across China, Mongolia and Kazakhstan, totaling approximately 98 million hectares. Its iconic species is Przewalski\u2019s horse, and the semi-deserts support black stork, goitered gazelle, Asiatic wild ass and the rare Gobi bear.',
      sourceIds: ['one-earth-pa38', 'one-earth-eco-808', 'one-earth-eco-827'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'two ecoregions totaling approximately 98 million hectares',
        'Alashan Plateau semi-desert of the southern Gobi fringe',
        'Junggar Basin semi-desert of northern Xinjiang',
        'dune fields, oases and gravel plains of the two basins',
      ],
      sourceIds: ['one-earth-pa38', 'one-earth-eco-808', 'one-earth-eco-827'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are cold, continental semi-deserts with low and variable precipitation.',
      },
      sourceIds: ['one-earth-pa38', 'one-earth-eco-808', 'one-earth-eco-827'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'semi-desert scrub and saxaul communities',
        'steppe-like grassland of the Alashan plateau',
        'Junggar basin ephemeral and salt-fringe vegetation',
        'oasis and riparian vegetation along the basin margins',
      ],
      sourceIds: ['one-earth-pa38', 'one-earth-eco-808', 'one-earth-eco-827'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Przewalski\u2019s horse as the iconic species',
        'black stork and goitered gazelle in the semi-deserts',
        'Gobi bear and Asiatic wild ass of the wider Gobi',
        'snow leopard and Mongolian marmot at the montane fringe',
      ],
      sourceIds: ['one-earth-pa38', 'one-earth-eco-808', 'one-earth-eco-827'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 69% with a protection level of 2. Threats include water diversion, overgrazing, mining and infrastructure development across the semi-desert basins.',
      sourceIds: ['one-earth-pa38', 'one-earth-eco-808', 'one-earth-eco-827'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:przewalskis-horse',
      'species:black-stork',
      'species:goitered-gazelle',
      'species:gobi-bear',
      'species:asiatic-wild-ass',
      'species:mongolian-marmot',
      'species:snow-leopard',
    ],
    countryIds: ['CN', 'MN', 'KZ'],
    sources: ['one-earth-pa38', 'one-earth-eco-808', 'one-earth-eco-827'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa39',
    summary: {
      value:
        'The Taklimakan Desert & Lowland Forests (PA39), in the East Asian Deserts subrealm of Eastern Eurasia, joins the Taklimakan Desert and the Tarim Basin deciduous forests and steppe of China, totaling approximately 79.8 million hectares. Its iconic species, the endemic Xinjiang ground jay, shares the basin with the wild Bactrian camel, goitered gazelle and gray wolf along the Tarim riparian corridor.',
      sourceIds: ['one-earth-pa39', 'one-earth-eco-684', 'one-earth-eco-843'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'two ecoregions totaling approximately 79.8 million hectares',
        'the Taklimakan Desert, one of the largest sand seas on Earth',
        'Tarim Basin deciduous forests and steppe along the Tarim river',
        'oases and desert margins of the Tarim basin',
      ],
      sourceIds: ['one-earth-pa39', 'one-earth-eco-684', 'one-earth-eco-843'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions are hyper-arid desert with cold winters and an extreme continental regime.',
      },
      sourceIds: ['one-earth-pa39', 'one-earth-eco-684', 'one-earth-eco-843'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'the shifting sand seas of the Taklimakan',
        'Tarim basin lowland deciduous forest and steppe',
        'desert scrub of the basin margins',
        'oasis and riparian vegetation of the Tarim corridor',
      ],
      sourceIds: ['one-earth-pa39', 'one-earth-eco-684', 'one-earth-eco-843'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Xinjiang ground jay as the endemic flagship',
        'wild Bactrian camel and goitered gazelle of the desert basins',
        'gray wolf and argali of the Tarim margins',
        'lowland forest dependent on river flow and ground water',
      ],
      sourceIds: ['one-earth-pa39', 'one-earth-eco-684', 'one-earth-eco-843'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 68% with a protection level of 3. Threats include water diversion, desertification and grazing pressure at the desert margins.',
      sourceIds: ['one-earth-pa39', 'one-earth-eco-684', 'one-earth-eco-843'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:xinjiang-ground-jay',
      'species:wild-bactrian-camel',
      'species:goitered-gazelle',
      'species:gray-wolf',
      'species:argali',
    ],
    countryIds: ['CN'],
    sources: ['one-earth-pa39', 'one-earth-eco-684', 'one-earth-eco-843'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa40',
    summary: {
      value:
        'The Greater Tibetan Plateau (PA40), part of the Tibetan Plateau subrealm in the Eastern Eurasia realm, joins seven ecoregions totaling more than 202 million hectares across the plateau of China and into India. Its iconic Tibetan gazelle shares the high plateau with the Tibetan antelope, wild yak, blue sheep and snow leopard, while the Qilian Mountains hold conifer forests and the Qaidam basin a semi-desert core.',
      sourceIds: [
        'one-earth-pa40',
        'one-earth-eco-705',
        'one-earth-eco-750',
        'one-earth-eco-759',
        'one-earth-eco-763',
        'one-earth-eco-765',
        'one-earth-eco-768',
        'one-earth-eco-835',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'seven ecoregions totaling more than 202 million hectares',
        'central Tibetan Plateau alpine steppe and Kunlun alpine desert',
        'Qilian Mountains conifer forests and subalpine meadows',
        'Qaidam Basin semi-desert and southeastern Tibet shrublands',
      ],
      sourceIds: [
        'one-earth-pa40',
        'one-earth-eco-705',
        'one-earth-eco-750',
        'one-earth-eco-759',
        'one-earth-eco-763',
        'one-earth-eco-765',
        'one-earth-eco-768',
        'one-earth-eco-835',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions range from alpine steppe and desert to the semi-desert of the Qaidam Basin, all under the cold, high-altitude continental regime of the Tibetan Plateau.',
      },
      sourceIds: [
        'one-earth-pa40',
        'one-earth-eco-705',
        'one-earth-eco-750',
        'one-earth-eco-759',
        'one-earth-eco-763',
        'one-earth-eco-765',
        'one-earth-eco-768',
        'one-earth-eco-835',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'alpine steppe and shrublands of the central plateau',
        'alpine desert of the Kunlun and Qaidam semi-desert',
        'Qilian conifer forest and subalpine meadow',
        'southeastern Tibet shrublands and meadows',
      ],
      sourceIds: [
        'one-earth-pa40',
        'one-earth-eco-705',
        'one-earth-eco-750',
        'one-earth-eco-759',
        'one-earth-eco-763',
        'one-earth-eco-765',
        'one-earth-eco-768',
        'one-earth-eco-835',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Tibetan gazelle as the iconic species',
        'Tibetan antelope and wild yak herds of the high plateau',
        'blue sheep and white-lipped deer with snow leopard predator',
        'bar-headed goose among the plateau wetland avifauna',
      ],
      sourceIds: [
        'one-earth-pa40',
        'one-earth-eco-705',
        'one-earth-eco-750',
        'one-earth-eco-759',
        'one-earth-eco-763',
        'one-earth-eco-765',
        'one-earth-eco-768',
        'one-earth-eco-835',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 66% with a protection level of 5. Threats include poaching, overgrazing, mining and the impacts of climate change on the plateau.',
      sourceIds: [
        'one-earth-pa40',
        'one-earth-eco-705',
        'one-earth-eco-750',
        'one-earth-eco-759',
        'one-earth-eco-763',
        'one-earth-eco-765',
        'one-earth-eco-768',
        'one-earth-eco-835',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:tibetan-gazelle',
      'species:tibetan-antelope',
      'species:blue-sheep',
      'species:white-lipped-deer',
      'species:wild-yak',
      'species:snow-leopard',
      'species:bar-headed-goose',
    ],
    countryIds: ['CN', 'IN'],
    sources: [
      'one-earth-pa40',
      'one-earth-eco-705',
      'one-earth-eco-750',
      'one-earth-eco-759',
      'one-earth-eco-763',
      'one-earth-eco-765',
      'one-earth-eco-768',
      'one-earth-eco-835',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa41',
    summary: {
      value:
        'The Himalayan-Pamir Alpine Shrub & Meadows (PA41), part of the Tibetan Plateau subrealm in the Eastern Eurasia realm, joins eight ecoregions across China, India, Bhutan, Nepal, Myanmar, Afghanistan, Pakistan, Tajikistan, Kyrgyzstan and Uzbekistan, totaling approximately 63.7 million hectares. Its iconic snow leopard is the apex predator of a vast alpine arena holding blue sheep, Himalayan tahr, Siberian ibex, markhor and the woolly flying squirrel.',
      sourceIds: [
        'one-earth-pa41',
        'one-earth-eco-702',
        'one-earth-eco-751',
        'one-earth-eco-753',
        'one-earth-eco-754',
        'one-earth-eco-760',
        'one-earth-eco-762',
        'one-earth-eco-769',
        'one-earth-eco-770',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'eight ecoregions totaling approximately 63.7 million hectares',
        'the deepest river valley on Earth in the Zangbo Gorge',
        'upper Indus catchment and Karakoram-West Tibetan alpine steppe',
        'the cold-desert plateau of the northwestern Himalaya and Pamir',
      ],
      sourceIds: [
        'one-earth-pa41',
        'one-earth-eco-702',
        'one-earth-eco-751',
        'one-earth-eco-753',
        'one-earth-eco-754',
        'one-earth-eco-760',
        'one-earth-eco-762',
        'one-earth-eco-769',
        'one-earth-eco-770',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions range from monsoon-fed eastern alpine shrub and meadows to the cold deserts of the northwestern Himalaya, Karakoram and Pamir.',
      },
      sourceIds: [
        'one-earth-pa41',
        'one-earth-eco-702',
        'one-earth-eco-751',
        'one-earth-eco-753',
        'one-earth-eco-754',
        'one-earth-eco-760',
        'one-earth-eco-762',
        'one-earth-eco-769',
        'one-earth-eco-770',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'monsoon-fed alpine shrub and meadows of the eastern Himalaya',
        'cold-desert scrub of the northwestern Himalaya and Pamir',
        'alpine steppe of the Karakoram and upper Indus',
        'arid steppe of the Yarlung Zangbo valley',
      ],
      sourceIds: [
        'one-earth-pa41',
        'one-earth-eco-702',
        'one-earth-eco-751',
        'one-earth-eco-753',
        'one-earth-eco-754',
        'one-earth-eco-760',
        'one-earth-eco-762',
        'one-earth-eco-769',
        'one-earth-eco-770',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'snow leopard as the iconic apex predator',
        'blue sheep, Himalayan tahr, Siberian ibex and markhor ungulates',
        'woolly flying squirrel, the largest gliding mammal, at the eastern edge',
        'alpine avifauna including Himalayan griffon and snowcocks',
      ],
      sourceIds: [
        'one-earth-pa41',
        'one-earth-eco-702',
        'one-earth-eco-751',
        'one-earth-eco-753',
        'one-earth-eco-754',
        'one-earth-eco-760',
        'one-earth-eco-762',
        'one-earth-eco-769',
        'one-earth-eco-770',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 39% with a protection level of 5. Threats include overgrazing, livestock-predator conflict, poaching and glacial retreat.',
      sourceIds: [
        'one-earth-pa41',
        'one-earth-eco-702',
        'one-earth-eco-751',
        'one-earth-eco-753',
        'one-earth-eco-754',
        'one-earth-eco-760',
        'one-earth-eco-762',
        'one-earth-eco-769',
        'one-earth-eco-770',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:snow-leopard',
      'species:blue-sheep',
      'species:siberian-ibex',
      'species:woolly-flying-squirrel',
      'species:himalayan-tahr',
      'species:argali',
      'species:markhor',
    ],
    countryIds: ['CN', 'IN', 'BT', 'NP', 'MM', 'AF', 'PK', 'TJ', 'KG', 'UZ'],
    sources: [
      'one-earth-pa41',
      'one-earth-eco-702',
      'one-earth-eco-751',
      'one-earth-eco-753',
      'one-earth-eco-754',
      'one-earth-eco-760',
      'one-earth-eco-762',
      'one-earth-eco-769',
      'one-earth-eco-770',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa42',
    summary: {
      value:
        'The Ordos Plateau Steppe & Mountain Conifer Forests (PA42), part of the Mongolian Grasslands subrealm in the Eastern Eurasia realm, joins the Helanshan Montane Conifer Forests and the Ordos Plateau Steppe of China, totaling approximately 24 million hectares. Its iconic silver pika survives only on the Helanshan crest, while the relict gull of the Ordos Bojiang basin is the flagship of the steppe.',
      sourceIds: ['one-earth-pa42', 'one-earth-eco-696', 'one-earth-eco-761'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'two ecoregions totaling approximately 24 million hectares',
        'the sky-island Helanshan range rising above the steppe',
        'Ordos Plateau within the Great Bend of the Huang He',
        'Hobq and Mu\u2019us desert sands on the plateau',
      ],
      sourceIds: ['one-earth-pa42', 'one-earth-eco-696', 'one-earth-eco-761'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions have a semi-arid steppe-to-montane climate with 100-400 mm of precipitation, mostly in summer.',
      },
      sourceIds: ['one-earth-pa42', 'one-earth-eco-696', 'one-earth-eco-761'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'montane conifer forests of the Helanshan crest',
        'steppe grassland of the Ordos Plateau',
        'desert communities of the Hobq and Mu\u2019us sands',
        'wetland vegetation of the Bojiang basin',
      ],
      sourceIds: ['one-earth-pa42', 'one-earth-eco-696', 'one-earth-eco-761'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'silver pika, iconic and globally restricted to the Helanshan crest',
        'relict gull flagship of the Ordos Bojiang basin',
        'snow leopard, blue sheep and argali of the Helanshan',
        'Przewalski\u2019s horse, Asiatic wild ass and wild Bactrian camel formerly on the Ordos, now extirpated',
      ],
      sourceIds: ['one-earth-pa42', 'one-earth-eco-696', 'one-earth-eco-761'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 10% with a protection level of 8. Threats include water scarcity, wetland shrinkage, poaching and encroachment on the reserves.',
      sourceIds: ['one-earth-pa42', 'one-earth-eco-696', 'one-earth-eco-761'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:silver-pika',
      'species:snow-leopard',
      'species:blue-sheep',
      'species:argali',
      'species:relict-gull',
      'species:black-stork',
    ],
    countryIds: ['CN'],
    sources: ['one-earth-pa42', 'one-earth-eco-696', 'one-earth-eco-761'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa43',
    summary: {
      value:
        'The Mongolian Desert Steppes (PA43), in the East Asian Desert subrealm of Eastern Eurasia, joins the Eastern Gobi Desert Steppe, the Gobi Lakes Valley Desert Steppe and the Great Lakes Basin Desert Steppe across Mongolia, China and Russia, totaling nearly 58 million hectares. Its iconic black stork contrasts with a desert-steppe fauna of Mongolian gazelle, goitered gazelle and snow leopard.',
      sourceIds: [
        'one-earth-pa43',
        'one-earth-eco-824',
        'one-earth-eco-825',
        'one-earth-eco-826',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'three ecoregions totaling nearly 58 million hectares',
        'the Eastern Gobi desert steppe',
        'Gobi Lakes Valley and Great Lakes Basin steppe depressions',
        'dune fields and oases of the southern Gobi',
      ],
      sourceIds: [
        'one-earth-pa43',
        'one-earth-eco-824',
        'one-earth-eco-825',
        'one-earth-eco-826',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions have a cold desert-steppe climate with low precipitation and extreme continentality.',
      },
      sourceIds: [
        'one-earth-pa43',
        'one-earth-eco-824',
        'one-earth-eco-825',
        'one-earth-eco-826',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'desert steppe grassland of the Eastern Gobi',
        'Gobi lakes valley and Great Lakes Basin steppe',
        'saxaul and scrub of the southern Gobi',
        'oasis vegetation of the Gobi lake basins',
      ],
      sourceIds: [
        'one-earth-pa43',
        'one-earth-eco-824',
        'one-earth-eco-825',
        'one-earth-eco-826',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'black stork as the iconic species',
        'Mongolian gazelle herds and goitered gazelle',
        'snow leopard and Siberian ibex in the Gobi massifs',
        'Mongolian marmot and Pallas\u2019s fish eagle of the steppe wetlands',
      ],
      sourceIds: [
        'one-earth-pa43',
        'one-earth-eco-824',
        'one-earth-eco-825',
        'one-earth-eco-826',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 62% with a protection level of 1. Threats include mining, infrastructure, overgrazing and water extraction.',
      sourceIds: [
        'one-earth-pa43',
        'one-earth-eco-824',
        'one-earth-eco-825',
        'one-earth-eco-826',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:snow-leopard',
      'species:mongolian-gazelle',
      'species:siberian-ibex',
      'species:goitered-gazelle',
      'species:black-stork',
      'species:mongolian-marmot',
      'species:pallas-fish-eagle',
    ],
    countryIds: ['CN', 'MN', 'RU'],
    sources: [
      'one-earth-pa43',
      'one-earth-eco-824',
      'one-earth-eco-825',
      'one-earth-eco-826',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa44',
    summary: {
      value:
        'The Mongolian Grasslands, Alpine Meadows & Forest Steppe (PA44), part of the Mongolian Grasslands subrealm in the Eastern Eurasia realm, joins six ecoregions across Mongolia, Russia and China, totaling approximately 139 million hectares. Its iconic Mongolian marmot stands for a grassland world where Mongolian gazelle herds, six crane species, red deer and snow leopard span the forest steppe, the Daurian steppe, the Mongolian-Manchurian grassland and the Khangai alpine meadow.',
      sourceIds: [
        'one-earth-pa44',
        'one-earth-eco-700',
        'one-earth-eco-726',
        'one-earth-eco-734',
        'one-earth-eco-737',
        'one-earth-eco-743',
        'one-earth-eco-755',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'six ecoregions totaling approximately 139 million hectares',
        'the Mongolian-Manchurian grassland, one of the largest intact grasslands on Earth',
        'Khangai mountains with conifer forest and alpine meadow',
        'Daurian forest steppe wetlands and the Nenjiang river grassland',
      ],
      sourceIds: [
        'one-earth-pa44',
        'one-earth-eco-700',
        'one-earth-eco-726',
        'one-earth-eco-734',
        'one-earth-eco-737',
        'one-earth-eco-743',
        'one-earth-eco-755',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page states land-area statistics only; the component ecoregions range from the strongly continental forest steppe to the alpine meadow of the central Khangai.',
      },
      sourceIds: [
        'one-earth-pa44',
        'one-earth-eco-700',
        'one-earth-eco-726',
        'one-earth-eco-734',
        'one-earth-eco-737',
        'one-earth-eco-743',
        'one-earth-eco-755',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'boreal larch forest and forest steppe',
        'Mongolian-Manchurian steppe grassland',
        'Daurian meadow steppe and wetlands',
        'alpine meadow of the central Khangai',
      ],
      sourceIds: [
        'one-earth-pa44',
        'one-earth-eco-700',
        'one-earth-eco-726',
        'one-earth-eco-734',
        'one-earth-eco-737',
        'one-earth-eco-743',
        'one-earth-eco-755',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Mongolian marmot as the iconic species',
        'Mongolian gazelle herds exceeding a million animals',
        'six crane species, the Siberian crane staging in the Nenjiang grassland',
        'snow leopard and red deer at the forest-steppe and mountain margins',
      ],
      sourceIds: [
        'one-earth-pa44',
        'one-earth-eco-700',
        'one-earth-eco-726',
        'one-earth-eco-734',
        'one-earth-eco-737',
        'one-earth-eco-743',
        'one-earth-eco-755',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 33% with a protection level of 3. Threats include overgrazing, agricultural conversion, mining and climate impacts on the wetlands.',
      sourceIds: [
        'one-earth-pa44',
        'one-earth-eco-700',
        'one-earth-eco-726',
        'one-earth-eco-734',
        'one-earth-eco-737',
        'one-earth-eco-743',
        'one-earth-eco-755',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:mongolian-marmot',
      'species:white-naped-crane',
      'species:mongolian-gazelle',
      'species:siberian-ibex',
      'species:pallas-cat',
      'species:snow-leopard',
      'species:red-deer',
    ],
    countryIds: ['MN', 'RU', 'CN'],
    sources: [
      'one-earth-pa44',
      'one-earth-eco-700',
      'one-earth-eco-726',
      'one-earth-eco-734',
      'one-earth-eco-737',
      'one-earth-eco-743',
      'one-earth-eco-755',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa45',
    summary: {
      value:
        'The Dzhagdy Mountain Conifer Forests bioregion is located in the Northeast Asian forests subrealm of Eastern Eurasia (eastern Palearctic) and contains one single ecoregion, the Da Hinggan-Dzhagdy Mountains Conifer Forests, totaling nearly 25 million hectares. Its Dahurian-larch-dominated conifer forest supports the Siberian salamander flagship together with moose, sable, wolverine, northern lynx and Asiatic black bear across permafrost-affected valleys.',
      sourceIds: ['one-earth-pa45', 'one-earth-eco-693'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Northeast Asian forests subrealm of Eastern Eurasia',
        'Dahurian-larch-dominated conifer forest',
        'Dzhagdy mountain ranges spanning China and Russia',
      ],
      sourceIds: ['one-earth-pa45', 'one-earth-eco-693'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page provides no climate field; the single component ecoregion experiences a cold continental climate with most of its modest annual precipitation falling in summer and permafrost in the coldest places.',
      },
      sourceIds: ['one-earth-pa45', 'one-earth-eco-693'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'Dahurian larch conifer forests',
        'Daurian flora transitional between Siberian and Manchurian vegetations',
      ],
      sourceIds: ['one-earth-pa45', 'one-earth-eco-693'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'summer-dominated precipitation regime',
        'permafrost influencing the coldest valleys',
        'post-fire forest regeneration following 1987 wildfires',
      ],
      sourceIds: ['one-earth-pa45', 'one-earth-eco-693'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 23% with a protection level of 4. Key sites are the Hanma Biosphere Reserve (over 2,000 km2) and Huzhong National Nature Reserve (1,940 km2), the only nature reserve in China’s taiga forest zone. Priority actions control hunting and poaching, restore habitat connectivity between Hanma and Huzhong, and develop an effective fire management scheme.',
      sourceIds: ['one-earth-pa45', 'one-earth-eco-693'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:siberian-salamander',
      'species:siberian-musk-deer',
      'species:sable',
      'species:moose',
      'species:wolverine',
      'species:eurasian-lynx',
      'species:asiatic-black-bear',
      'species:hazel-grouse',
    ],
    countryIds: ['CN', 'RU'],
    sources: ['one-earth-pa45', 'one-earth-eco-693'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa46',
    summary: {
      value:
        'The Manchuria-Ussuri Mixed Forests & Meadow Steppes bioregion lies in the Northeast Asian forests subrealm of Eastern Eurasia (eastern Palearctic) and unites six ecoregions from the Changbai Mountains to the Suiphun-Khanka lowlands, totaling about 118.5 million hectares. Its fauna includes the iconic Amur or Siberian tiger together with Amur leopards, scaly-sided mergansers, red-crowned and white-naped cranes, Blakiston’s fish owls and the kaluga sturgeon.',
      sourceIds: [
        'one-earth-pa46',
        'one-earth-eco-656',
        'one-earth-eco-669',
        'one-earth-eco-673',
        'one-earth-eco-685',
        'one-earth-eco-741',
        'one-earth-eco-746',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Northeast Asian forests subrealm of Eastern Eurasia',
        'mixed montane and plain forests of Manchuria and Ussuri',
        'meadow steppes and lake lowlands of the Amur basin',
      ],
      sourceIds: [
        'one-earth-pa46',
        'one-earth-eco-656',
        'one-earth-eco-669',
        'one-earth-eco-673',
        'one-earth-eco-685',
        'one-earth-eco-741',
        'one-earth-eco-746',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page provides no climate field; component ecoregions experience cold continental winters with a monsoon-influenced summer wet season and precipitation that varies from plain steppes to coastal meadows.',
      },
      sourceIds: [
        'one-earth-pa46',
        'one-earth-eco-656',
        'one-earth-eco-669',
        'one-earth-eco-673',
        'one-earth-eco-685',
        'one-earth-eco-741',
        'one-earth-eco-746',
      ],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'mixed conifer and broadleaf forests',
        'deciduous forests of the Northeast China Plain',
        'meadow steppe and lake-margin wetlands',
      ],
      sourceIds: [
        'one-earth-pa46',
        'one-earth-eco-656',
        'one-earth-eco-669',
        'one-earth-eco-673',
        'one-earth-eco-685',
        'one-earth-eco-741',
        'one-earth-eco-746',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'transboundary tiger and leopard range across China, Russia and the Koreas',
        'largest breeding population of red-crowned cranes in the world',
        'wetland and meadow connectivity for migratory birds',
      ],
      sourceIds: [
        'one-earth-pa46',
        'one-earth-eco-656',
        'one-earth-eco-669',
        'one-earth-eco-673',
        'one-earth-eco-685',
        'one-earth-eco-741',
        'one-earth-eco-746',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 28% with a protection level of 4. Component ecoregions are anchored by protected areas including Changbaishan Biosphere Reserve, the Sikhote-Alin World Heritage Site and the Khanka wetland reserves, and renewed transboundary cooperation supports tiger and leopard recovery. Priorities across the bioregion include expanding protected-area coverage, controlling poaching of flagship large carnivores, and maintaining wetland connectivity for cranes and migratory birds.',
      sourceIds: [
        'one-earth-pa46',
        'one-earth-eco-656',
        'one-earth-eco-669',
        'one-earth-eco-673',
        'one-earth-eco-685',
        'one-earth-eco-741',
        'one-earth-eco-746',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:amur-tiger',
      'species:amur-leopard',
      'species:scaly-sided-merganser',
      'species:red-crowned-crane',
      'species:blakistons-fish-owl',
      'species:baers-pochard',
      'species:kaluga-sturgeon',
      'species:white-naped-crane',
    ],
    countryIds: ['CN', 'RU', 'KP', 'KR'],
    sources: [
      'one-earth-pa46',
      'one-earth-eco-656',
      'one-earth-eco-669',
      'one-earth-eco-673',
      'one-earth-eco-685',
      'one-earth-eco-741',
      'one-earth-eco-746',
    ],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa48',
    summary: {
      value:
        'The Korean Peninsula Mixed Forests bioregion spans the deciduous hardwood and southern evergreen forests of South and North Korea, totaling approximately 12 million hectares in the Northeast Asian forests subrealm. Its iconic Tristram’s woodpecker (Dryocopus javensis richardsi) shares remnant old-growth forests with white-bellied black woodpeckers, fairy pittas, ring-necked pheasants, Siberian roe deer and endangered red-crowned and white-naped cranes.',
      sourceIds: ['one-earth-pa48', 'one-earth-eco-655', 'one-earth-eco-681'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Northeast Asian forests subrealm of Eastern Eurasia',
        'deciduous hardwood forests with evergreen conifers at higher elevations',
        'Korean Demilitarized Zone and Baekdudaegan range',
      ],
      sourceIds: ['one-earth-pa48', 'one-earth-eco-655', 'one-earth-eco-681'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page provides no climate field; component ecoregions experience a monsoon-influenced climate with cold, generally dry winters and warm wet summers across the peninsula.',
      },
      sourceIds: ['one-earth-pa48', 'one-earth-eco-655', 'one-earth-eco-681'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'deciduous hardwood forests',
        'warm-temperate evergreen broadleaf forest',
        'soon-to-be old-growth forest largely reduced by land-use history',
      ],
      sourceIds: ['one-earth-pa48', 'one-earth-eco-655', 'one-earth-eco-681'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'large predators mostly extirpated from the peninsula',
        'endangered crane populations using remnant lowlands',
        'Tristram’s woodpecker loss tied to old-growth decline',
        'DMZ functioning as a little-disturbed refuge',
      ],
      sourceIds: ['one-earth-pa48', 'one-earth-eco-655', 'one-earth-eco-681'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 20% with a protection level of 4. The Korean Demilitarized Zone could be maintained as a Korea Peace Bioreserve and nominated as a UNESCO World Heritage Natural Site, while the Baekdudaegan range anchors the ecological axis. Priorities are promoting the DMZ as a protected natural area, protecting remnant forest habitat, and establishing connectivity to conservation axes.',
      sourceIds: ['one-earth-pa48', 'one-earth-eco-655', 'one-earth-eco-681'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:tristrams-woodpecker',
      'species:white-bellied-black-woodpecker',
      'species:ring-necked-pheasant',
      'species:fairy-pitta',
      'species:siberian-roe-deer',
      'species:chinese-water-deer',
      'species:red-crowned-crane',
      'species:white-naped-crane',
    ],
    countryIds: ['KR', 'KP'],
    sources: ['one-earth-pa48', 'one-earth-eco-655', 'one-earth-eco-681'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa49',
    summary: {
      value:
        'The Loess Plateau & Huang He Plain Mixed Forests bioregion is located in the Central East Asian forests subrealm of Eastern Eurasia (eastern Palearctic) and contains three ecoregions from the loess plateau and Huang He plain to the Bohai Sea saline meadow, totaling nearly 81 million hectares. Its iconic Amur leopard (Panthera pardus orientalis) inhabits riverine plain and plateau woodlands that also host great bustards, whooper swans and a rich waterbird fauna of cranes, storks and gulls.',
      sourceIds: ['one-earth-pa49', 'one-earth-eco-653', 'one-earth-eco-667', 'one-earth-eco-742'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Central East Asian forests subrealm of Eastern Eurasia',
        'deep loess plateau and Huang He floodplain',
        'Bohai Sea saline meadow and river delta',
      ],
      sourceIds: ['one-earth-pa49', 'one-earth-eco-653', 'one-earth-eco-667', 'one-earth-eco-742'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page provides no climate field; component ecoregions range from a seasonally dry, drought-prone loess plateau to a warm, moist riverine plain and a coastal delta with monsoon influence.',
      },
      sourceIds: ['one-earth-pa49', 'one-earth-eco-653', 'one-earth-eco-667', 'one-earth-eco-742'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'deciduous and mixed forests on the loess plateau',
        'broadleaved deciduous and evergreen conifer floodplain forest',
        'Suaeda saline meadow at the Yellow River Delta',
      ],
      sourceIds: ['one-earth-pa49', 'one-earth-eco-653', 'one-earth-eco-667', 'one-earth-eco-742'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'severe loess erosion and ancient agricultural landscapes',
        'Yellow River sediment accretion at the Bohai delta',
        'remnant habitat islands and relic forest patches',
        'waterbird breeding and staging along the delta',
      ],
      sourceIds: ['one-earth-pa49', 'one-earth-eco-653', 'one-earth-eco-667', 'one-earth-eco-742'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 6% with a protection level of 7. Protected sites include the Taishan and Song Shan UNESCO World Heritage Sites, the Li Shan and Luya Mountain nature reserves, and the Yellow River Delta National Nature Reserve. Priorities range from protecting remnant habitat islands and wetlands on the Huang He plain to managing the Yellow River Delta for waterbird breeding.',
      sourceIds: ['one-earth-pa49', 'one-earth-eco-653', 'one-earth-eco-667', 'one-earth-eco-742'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:amur-leopard',
      'species:red-crowned-crane',
      'species:siberian-crane',
      'species:oriental-stork',
      'species:saunderss-gull',
      'species:relict-gull',
      'species:great-bustard',
      'species:hooded-crane',
    ],
    countryIds: ['CN'],
    sources: ['one-earth-pa49', 'one-earth-eco-653', 'one-earth-eco-667', 'one-earth-eco-742'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa50',
    summary: {
      value:
        'The Chang Jiang Plain Evergreen Forests bioregion is part of the Central East Asian forests subrealm in the Eastern Eurasia realm (eastern Palearctic) and contains the Changjiang Plain Evergreen Forests and Yellow Sea Saline Meadow, totaling approximately 44.5 million hectares. Its iconic Yangtze alligator is joined by a diverse floodplain fauna of Siberian and white-naped cranes, swan geese, Chinese water deer, the Yangtze finless porpoise and the recovering black-faced spoonbill.',
      sourceIds: ['one-earth-pa50', 'one-earth-eco-657', 'one-earth-eco-748'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Central East Asian forests subrealm of Eastern Eurasia',
        'Yangtze floodplain with seasonal lakes',
        'Yellow Sea saline meadow and coastal wetlands',
      ],
      sourceIds: ['one-earth-pa50', 'one-earth-eco-657', 'one-earth-eco-748'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page provides no climate field; component ecoregions combine a floodplain evergreen-forest climate with humid to semi-humid monsoon conditions along the Yellow Sea coast.',
      },
      sourceIds: ['one-earth-pa50', 'one-earth-eco-657', 'one-earth-eco-748'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'broadleaved evergreen forests on floodplain and mountain remnants',
        'seasonal-lake wetland vegetation around Poyang',
        'coastal saline meadow and emerging marine wetland',
      ],
      sourceIds: ['one-earth-pa50', 'one-earth-eco-657', 'one-earth-eco-748'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'about 80% of the global Siberian crane population overwintering here',
        'about 40% of the world’s remaining red-crowned cranes breeding on the coast',
        'huge seasonal water-level fluctuation of Poyang Lake',
        'Three Gorges dam hydrological alterations',
      ],
      sourceIds: ['one-earth-pa50', 'one-earth-eco-657', 'one-earth-eco-748'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 15% with a protection level of 4. Key sites include the Anhui Chinese Alligator Nature Reserve and the Yancheng Biosphere Reserve, which protects the Yellow Sea saline meadow under Ramsar. Priorities are protecting seasonal-lake habitat, restoring degraded hill-slope forest, and mitigating the hydrological effects of the Three Gorges dam and sea-level rise.',
      sourceIds: ['one-earth-pa50', 'one-earth-eco-657', 'one-earth-eco-748'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:yangtze-alligator',
      'species:black-faced-spoonbill',
      'species:red-crowned-crane',
      'species:siberian-crane',
      'species:swan-goose',
      'species:white-naped-crane',
      'species:chinese-water-deer',
      'species:yangtze-finless-porpoise',
    ],
    countryIds: ['CN'],
    sources: ['one-earth-pa50', 'one-earth-eco-657', 'one-earth-eco-748'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa51',
    summary: {
      value:
        'The Sichuan Basin & Central Mountain Forests bioregion is located in the Central East Asian forests subrealm of Eastern Eurasia (eastern Palearctic) and contains three ecoregions from the Daba and Qin Ling mountains to the Sichuan Basin, totaling approximately 39 million hectares. Its iconic Hubei golden snub-nosed monkey (Rhinopithecus roxellana hubeiensis) shares these woodlands with giant pandas, takin, red pandas, golden pheasants, clouded leopards and the world’s largest Chinese giant salamander populations.',
      sourceIds: ['one-earth-pa51', 'one-earth-eco-659', 'one-earth-eco-677', 'one-earth-eco-680'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Central East Asian forests subrealm of Eastern Eurasia',
        'Daba and Qin Ling mountain forests',
        'densely populated Sichuan Basin river plain',
      ],
      sourceIds: ['one-earth-pa51', 'one-earth-eco-659', 'one-earth-eco-677', 'one-earth-eco-680'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page provides no climate field; component ecoregions span a transitional subtropical-to-temperate mountain climate and a humid basin climate with warm hazy summers and chilly winter fog.',
      },
      sourceIds: ['one-earth-pa51', 'one-earth-eco-659', 'one-earth-eco-677', 'one-earth-eco-680'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'evergreen broadleaf and mixed forests of central China',
        'temperate deciduous forest transitional to subtropical with high bamboo diversity',
        'remnant old-growth at sacred peaks and religious sites',
      ],
      sourceIds: ['one-earth-pa51', 'one-earth-eco-659', 'one-earth-eco-677', 'one-earth-eco-680'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'species-museum richness with more than 600 vertebrate species in Shennongjia',
        'Qinling panda recognized as a distinct brown-furred subspecies',
        'extirpation of giant panda, Asian elephant and Javan rhinoceros from the basin',
        'panda corridor and wildlife-connectivity planning',
      ],
      sourceIds: ['one-earth-pa51', 'one-earth-eco-659', 'one-earth-eco-677', 'one-earth-eco-680'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 10% with a protection level of 7. Shennongjia Nature Reserve protects the entire wild population of hubeiensis golden snub-nosed monkeys, while Foping, Zhouzhi and Tangjiahe are key panda refuges. Priorities include extending panda corridors, conserving remnant old-growth at religious sites, and managing tourism pressure.',
      sourceIds: ['one-earth-pa51', 'one-earth-eco-659', 'one-earth-eco-677', 'one-earth-eco-680'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:hubei-golden-snub-nosed-monkey',
      'species:giant-panda',
      'species:takin',
      'species:red-panda',
      'species:clouded-leopard',
      'species:chinese-goral',
      'species:chinese-giant-salamander',
      'species:emei-shan-liocichla',
    ],
    countryIds: ['CN'],
    sources: ['one-earth-pa51', 'one-earth-eco-659', 'one-earth-eco-677', 'one-earth-eco-680'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa52',
    summary: {
      value:
        'The Guizhou & Yunnan Subtropical Forest Plateaus bioregion is located in the Central East Asian forests subrealm of Eastern Eurasia (eastern Palearctic) and contains two ecoregions of karst plateau and highland evergreen forest, totaling approximately 51 million hectares. Its iconic black-crested gibbon (Nomascus concolor) coexists with Guizhou snub-nosed monkeys, François’ leaf monkeys, Assamese macaques, forest musk deer and clouded and common leopards across the plateaus.',
      sourceIds: ['one-earth-pa52', 'one-earth-eco-642', 'one-earth-eco-643'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Central East Asian forests subrealm of Eastern Eurasia',
        'South China Karst plateau at 1,000-1,400 m riddled with caves and sinkholes',
        'Yunnan Plateau at 1,800-2,400 m with temperate cloud forests',
      ],
      sourceIds: ['one-earth-pa52', 'one-earth-eco-642', 'one-earth-eco-643'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page provides no climate field; component ecoregions are subtropical with few sunny days on the karst plateau and a mild monsoon regime with a dry season from November to April on the Yunnan Plateau.',
      },
      sourceIds: ['one-earth-pa52', 'one-earth-eco-642', 'one-earth-eco-643'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'subtropical broadleaf and mixed forests on karst',
        'subtropical evergreen forest with temperate cloud forest on higher ridges',
        'high-elevation citrus and rice cultivation',
      ],
      sourceIds: ['one-earth-pa52', 'one-earth-eco-642', 'one-earth-eco-643'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Fanjing Shan hosting fewer than 750 grey snub-nosed monkeys',
        'central Yunnan black-crested gibbon population of about 250 individuals',
        'Endemic Bird Area with two restricted-range species',
        'karst hydrology shaped by caves and sinkholes',
      ],
      sourceIds: ['one-earth-pa52', 'one-earth-eco-642', 'one-earth-eco-643'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 14% with a protection level of 4. Fanjing Shan Nature Reserve, a UNESCO Biosphere Reserve and World Heritage Site, hosts fewer than 750 grey snub-nosed monkeys, while the Yunnan Plateau protects black-crested gibbon strongholds. Priorities are controlling tourism infrastructure around Fanjing Shan, restoring lake ecosystems such as Dian Chi and Er Hai, and enforcing restrictions on gibbon poaching and trafficking.',
      sourceIds: ['one-earth-pa52', 'one-earth-eco-642', 'one-earth-eco-643'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:black-crested-gibbon',
      'species:guizhou-snub-nosed-monkey',
      'species:chinese-giant-salamander',
      'species:assamese-macaque',
      'species:francoiss-leaf-monkey',
      'species:forest-musk-deer',
      'species:clouded-leopard',
      'species:common-leopard',
    ],
    countryIds: ['CN'],
    sources: ['one-earth-pa52', 'one-earth-eco-642', 'one-earth-eco-643'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa53',
    summary: {
      value:
        'The Hengduan Mountain Conifer Forests bioregion connects the southeast Tibetan Plateau with the Yunnan-Guizhou Plateau, defined by the parallel Yangtze, Mekong and Salween rivers and recognized as the Three Parallel Rivers UNESCO World Heritage Site, one of the most biologically diverse temperate regions on Earth with 6,000 plant species, 173 mammals and 417 birds. Its iconic giant panda (Ailuropoda melanoleuca) is joined by Yunnan snub-nosed monkeys, red pandas, black-necked cranes, northern slow lorises and the Myanmar snub-nosed monkey across more than 26 million hectares.',
      sourceIds: ['one-earth-pa53', 'one-earth-eco-697', 'one-earth-eco-704', 'one-earth-eco-706'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'parallel mountain ranges connecting the Tibetan and Yunnan-Guizhou plateaus',
        'deep gorges of the Yangtze, Mekong and Salween rivers',
        'Qionglai-Minshan and Hengduan conifer belts',
      ],
      sourceIds: ['one-earth-pa53', 'one-earth-eco-697', 'one-earth-eco-704', 'one-earth-eco-706'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'The bioregion page provides no climate field; component ecoregions span cold, snowy subalpine forests and monsoon-temperate conifer belts with a pronounced vertical climatic gradient between deep gorges and high ridges.',
      },
      sourceIds: ['one-earth-pa53', 'one-earth-eco-697', 'one-earth-eco-704', 'one-earth-eco-706'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'subalpine spruce and fir conifer forests',
        'monsoon-temperate conifer forest with more than 40 bamboo species',
        'forests of the Gaoligong range with most of Yunnan’s mid-elevation conifers',
      ],
      sourceIds: ['one-earth-pa53', 'one-earth-eco-697', 'one-earth-eco-704', 'one-earth-eco-706'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Three Parallel Rivers gorge system bounding endemic distribution',
        'over 1,800 wild pandas recorded in 2014',
        'Yunnan snub-nosed monkeys feeding on foliose lichen above 4,000 m',
        'Myanmar snub-nosed monkey discovered in 2011 with roughly 950 individuals',
      ],
      sourceIds: ['one-earth-pa53', 'one-earth-eco-697', 'one-earth-eco-704', 'one-earth-eco-706'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth reports a conservation target of 29% with a protection level of 7. Key protected areas include the Gaoligongshan and Baima Snow Mountain nature reserves and Pudacuo National Park, within the Three Parallel Rivers UNESCO World Heritage Site. Priorities are maintaining habitat connectivity across the protected-area network, carefully evaluating river damming, and monitoring climate-change effects in this vertically stratified mountain region.',
      sourceIds: ['one-earth-pa53', 'one-earth-eco-697', 'one-earth-eco-704', 'one-earth-eco-706'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:giant-panda',
      'species:yunnan-snub-nosed-monkey',
      'species:red-panda',
      'species:clouded-leopard',
      'species:black-necked-crane',
      'species:northern-slow-loris',
      'species:burmese-snub-nosed-monkey',
      'species:eastern-hoolock-gibbon',
    ],
    countryIds: ['CN', 'MM'],
    sources: ['one-earth-pa53', 'one-earth-eco-697', 'one-earth-eco-704', 'one-earth-eco-706'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt24',
    summary: {
      value:
        'Central American Isthmian & Colombian Coastal Forests (NT24) links southern Mesoamerica to the Choco-Darien of northwestern South America. Eleven ecoregions sweep from the superhumid Caribbean and Pacific lowland forests of the isthmus and the Talamancan and eastern Panamanian montane cloud forests through the Magdalena-Uraba forests to the remote Malpelo island and the fringing mangrove systems of both oceans.',
      sourceIds: [
        'one-earth-nt24',
        'one-earth-eco-454',
        'one-earth-eco-461',
        'one-earth-eco-470',
        'one-earth-eco-471',
        'one-earth-eco-478',
        'one-earth-eco-506',
        'one-earth-eco-541',
        'one-earth-eco-604',
        'one-earth-eco-613',
        'one-earth-eco-615',
        'one-earth-eco-617',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'isthmian Caribbean and Pacific lowland forests',
        'Talamancan and eastern Panamanian montane cloud forests',
        'Choco-Darien superhumid lowlands',
        'Magdalena-Uraba river valleys and coastal ranges',
        'Malpelo island and offshore xeric scrub',
        'Caribbean and Pacific mangrove coasts',
      ],
      sourceIds: [
        'one-earth-nt24',
        'one-earth-eco-454',
        'one-earth-eco-461',
        'one-earth-eco-470',
        'one-earth-eco-471',
        'one-earth-eco-478',
        'one-earth-eco-506',
        'one-earth-eco-541',
        'one-earth-eco-604',
        'one-earth-eco-613',
        'one-earth-eco-615',
        'one-earth-eco-617',
      ],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical mega-humid oceanic with heavy orographic rainfall on Caribbean-exposed slopes (some areas above 6,000 mm annually), a marked rain-shadow to the Pacific and interior, and a mild montane regime on the Talamancan and Darién cordilleras.',
        annualPrecipitationMm: { min: 1500, max: 7000 },
      },
      sourceIds: [
        'one-earth-eco-454',
        'one-earth-eco-461',
        'one-earth-eco-470',
        'one-earth-eco-471',
        'one-earth-eco-478',
        'one-earth-eco-506',
        'one-earth-eco-613',
        'one-earth-eco-615',
        'one-earth-eco-617',
      ],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'superhumid lowland and foothill rainforest',
        'premontane and montane cloud forest',
        'submontane oak and laurel forest on the Talamancan range',
        'semi-deciduous dry forests on Pacific and interior sides',
        'herbaceous and wooded mangroves on both coasts',
        'xeric scrub on Malpelo island',
      ],
      sourceIds: [
        'one-earth-eco-454',
        'one-earth-eco-461',
        'one-earth-eco-470',
        'one-earth-eco-471',
        'one-earth-eco-478',
        'one-earth-eco-506',
        'one-earth-eco-541',
        'one-earth-eco-604',
        'one-earth-eco-613',
        'one-earth-eco-615',
        'one-earth-eco-617',
      ],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'Great American Biotic Interchange land-bridge connectivity',
        'rain-shield orographic rainfall and cloud interception',
        'migratory and elevational bird movements along the cordillera',
        'mangrove-estuary nutrient exchange with coastal seas',
        'seasonal dry-forest phenology and fire dynamics',
      ],
      sourceIds: [
        'one-earth-nt24',
        'one-earth-eco-454',
        'one-earth-eco-470',
        'one-earth-eco-506',
        'one-earth-eco-541',
        'one-earth-eco-613',
        'one-earth-eco-615',
        'one-earth-eco-617',
      ],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        "Darien National Park (Panama) and La Amistad International Park (Costa Rica-Panama) anchor the region's protected core, while extensive forest loss from cattle ranching, oil-palm expansion, and highway construction fragments the isthmus. The bioregion is critical for jaguar, Baird's tapir, great green macaw, and resplendent quetzal connectivity between North and South America.",
      sourceIds: [
        'one-earth-nt24',
        'one-earth-eco-454',
        'one-earth-eco-461',
        'one-earth-eco-470',
        'one-earth-eco-471',
        'one-earth-eco-478',
        'one-earth-eco-506',
        'one-earth-eco-541',
        'one-earth-eco-613',
        'one-earth-eco-615',
        'one-earth-eco-617',
      ],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:jaguar',
      'species:bairds-tapir',
      'species:harpy-eagle',
      'species:great-green-macaw',
      'species:resplendent-quetzal',
      'species:keel-billed-toucan',
    ],
    countryIds: ['BZ', 'CO', 'CR', 'EC', 'GT', 'HN', 'MX', 'NI', 'PA', 'PE', 'SV'],
    sources: [
      'one-earth-nt24',
      'one-earth-eco-454',
      'one-earth-eco-461',
      'one-earth-eco-470',
      'one-earth-eco-471',
      'one-earth-eco-478',
      'one-earth-eco-506',
      'one-earth-eco-541',
      'one-earth-eco-604',
      'one-earth-eco-613',
      'one-earth-eco-615',
      'one-earth-eco-617',
    ],
    status: 'authored',
  },
];
