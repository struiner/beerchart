import type { EcologicalEnrichment } from './ecological-enrichment';

export const subrealmEnrichment: readonly EcologicalEnrichment[] = [
  {
    targetId: 'subrealm:greenland',
    summary: {
      value:
        'The Greenland subrealm is a single Nearctic bioregion dominated by the Greenland Ice Sheet and a narrow, discontinuous ice-free coastal margin. Its two ecoregions distinguish the relatively varied southern and eastern Arctic steppe from the colder, drier high-Arctic tundra of the north.',
      sourceIds: ['one-earth-greenland', 'one-earth-eco-417', 'one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'continental ice sheet',
        'mountainous fjord coast',
        'high-Arctic polar desert',
        'coastal tundra',
        'adjacent sea ice',
      ],
      sourceIds: ['one-earth-greenland', 'one-earth-eco-417', 'one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Arctic to high-Arctic, with low precipitation and strong coastal-to-interior gradients.',
      },
      sourceIds: ['one-earth-eco-417', 'one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'dwarf-shrub heath',
        'steppe grasslands',
        'fellfield',
        'moss and lichen cover',
        'localized low birch and willow scrub',
      ],
      sourceIds: ['one-earth-eco-417', 'one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'ice-sheet and glacier dynamics',
        'sea-ice seasonality',
        'Föhn-wind snowmelt',
        'short-season plant growth',
      ],
      sourceIds: ['one-earth-eco-417', 'one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Large protected areas and extensive intact habitat remain, but rapid ice loss, climate-driven ecosystem change, hunting pressure, extractive development, and motorized disturbance require active management.',
      sourceIds: ['one-earth-eco-417', 'one-earth-eco-418'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:arctic-fox',
      'species:musk-ox',
      'species:reindeer',
      'species:northern-collared-lemming',
    ],
    countryIds: ['GL'],
    sources: ['one-earth-greenland', 'one-earth-eco-417', 'one-earth-eco-418'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:indian-subcontinent',
    summary: {
      value:
        'The Indian Subcontinent subrealm forms the western part of Indomalaya. It contains eight bioregions extending from the Himalayan rim through deserts, scrub, dry and moist forests, river plains, coasts, and Indian Ocean islands.',
      sourceIds: ['one-earth-indomalaya'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Himalayan foothills',
        'alluvial plains',
        'dry interior plateaus',
        'tropical coasts and islands',
      ],
      sourceIds: ['one-earth-indomalaya'],
      derivation: 'authored-summary',
    },
    countryIds: ['BT', 'IN', 'NP', 'PK'],
    sources: ['one-earth-indomalaya'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:japanese-islands',
    summary: {
      value:
        'The Japanese Islands subrealm comprises a single bioregion, Japan Forest Islands, spanning the four main islands of Hokkaido, Honshu, Shikoku, and Kyushu plus the Ryukyu chain. Six ecoregions form a latitudinal and elevational gradient from warm-temperate evergreen broadleaf forests in the south through cool-temperate deciduous and mixed forests to subalpine conifer belts on Hokkaido and Honshu peaks.',
      sourceIds: ['one-earth-japanese-islands', 'one-earth-pa47'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic mountain arcs',
        'steep temperate forests',
        'Pacific coastal plains',
        'Sea of Japan coastal lowlands',
        'Ryukyu subtropical islands',
      ],
      sourceIds: ['one-earth-japanese-islands', 'one-earth-pa47'],
      derivation: 'authored-summary',
    },
    countryIds: ['JP'],
    sources: ['one-earth-japanese-islands', 'one-earth-pa47'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:anglo-celtic-isles',
    summary: {
      value:
        'The Anglo-Celtic Isles subrealm covers Great Britain, Ireland, the Isle of Man, and the Faroe Islands as a single bioregion. Five ecoregions span a moisture gradient from the Atlantic-exposed Celtic broadleaf and beech forests through the moist North Atlantic mixed forests to the Caledonian pine forests of the Scottish Highlands and the boreal grasslands of the Faroe Islands.',
      sourceIds: ['one-earth-anglo-celtic-isles', 'one-earth-pa9'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Atlantic-exposed coasts and sea cliffs',
        'lowland broadleaf and beech woodlands',
        'upland moors and blanket bogs',
        'Caledonian pine forests',
        'Faroe Islands basalt cliffs and grasslands',
      ],
      sourceIds: ['one-earth-anglo-celtic-isles', 'one-earth-pa9'],
      derivation: 'authored-summary',
    },
    countryIds: ['GB', 'IE', 'FO'],
    sources: ['one-earth-anglo-celtic-isles', 'one-earth-pa9'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:canadian-tundra',
    summary: {
      value:
        'The Canadian Tundra subrealm is a single Nearctic bioregion spanning the northern Canadian Arctic archipelago and mainland coast. Its five ecoregions form a latitudinal gradient from the polar-desert High Arctic tundra of the Queen Elizabeth Islands through Low and Middle Arctic tundra to the alpine tundra of the Torngat Mountains in northern Labrador.',
      sourceIds: ['one-earth-canadian-tundra', 'one-earth-na2'],
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
        'one-earth-canadian-tundra',
        'one-earth-na2',
        'one-earth-eco-412',
        'one-earth-eco-413',
        'one-earth-eco-414',
        'one-earth-eco-415',
        'one-earth-eco-421',
      ],
      derivation: 'authored-summary',
    },
    countryIds: ['CA'],
    sources: [
      'one-earth-canadian-tundra',
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
    targetId: 'subrealm:sub-saharan-afrotropics',
    summary: {
      value:
        'The Sub-Saharan Afrotropics subrealm spans the Sahelian and Sudanian zones south of the Sahara, covering two bioregions. Seven ecoregions form a west–east gradient from the Mandara Plateau woodlands through the East and West Sudanian savannas, the Sahelian acacia belt, and the vast flooded savannas of the Inner Niger Delta, Lake Chad, and the Sudd.',
      sourceIds: ['one-earth-sub-saharan-afrotropics', 'one-earth-at20', 'one-earth-at23'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Mandara Plateau woodlands',
        'Sudanian savanna woodlands',
        'Sahelian acacia-commiphora bushlands',
        'Inner Niger Delta floodplains',
        'Lake Chad basin wetlands',
        'Sudd permanent swamp',
      ],
      sourceIds: [
        'one-earth-at20',
        'one-earth-at23',
        'one-earth-eco-43',
        'one-earth-eco-49',
        'one-earth-eco-53',
        'one-earth-eco-62',
        'one-earth-eco-71',
        'one-earth-eco-72',
        'one-earth-eco-74',
      ],
      derivation: 'authored-summary',
    },
    countryIds: ['NE', 'TD', 'CF', 'SS', 'SD', 'ML', 'CM', 'NG', 'BF'],
    sources: [
      'one-earth-sub-saharan-afrotropics',
      'one-earth-at20',
      'one-earth-at23',
      'one-earth-eco-43',
      'one-earth-eco-49',
      'one-earth-eco-53',
      'one-earth-eco-62',
      'one-earth-eco-71',
      'one-earth-eco-72',
      'one-earth-eco-74',
    ],
    status: 'authored',
  },
  {
    targetId: 'subrealm:palearctic-tundra',
    summary: {
      value:
        'The Palearctic Tundra subrealm spans the northern fringe of Eurasia from the Kola Peninsula to the Novosibirsk Islands, covering two bioregions. Five ecoregions form a longitudinal gradient from the Kola Peninsula tundra in the west through the Northeast Siberian coastal tundra to the Arctic desert of the Novosibirsk Islands and the Russian Arctic desert in the east.',
      sourceIds: ['one-earth-palearctic-tundra', 'one-earth-pa1', 'one-earth-pa4'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Kola Peninsula fells and plateaus',
        'East Siberian coastal lowlands',
        'Novaya Zemlya and Novosibirsk archipelagos',
        'Russian Arctic continental desert',
        'permafrost polygonal ground and pingos',
      ],
      sourceIds: [
        'one-earth-pa1',
        'one-earth-pa4',
        'one-earth-eco-774',
        'one-earth-eco-775',
        'one-earth-eco-776',
        'one-earth-eco-777',
        'one-earth-eco-778',
      ],
      derivation: 'authored-summary',
    },
    countryIds: ['RU', 'NO'],
    sources: [
      'one-earth-palearctic-tundra',
      'one-earth-pa1',
      'one-earth-pa4',
      'one-earth-eco-774',
      'one-earth-eco-775',
      'one-earth-eco-776',
      'one-earth-eco-777',
      'one-earth-eco-778',
    ],
    status: 'authored',
  },
  {
    targetId: 'subrealm:antarctic-continent-islands',
    summary: {
      value:
        'The Antarctic Continent & Islands subrealm covers the Antarctic continent, the Antarctic Peninsula and Scotia Sea islands, and the subantarctic Indian Ocean islands. Three bioregions span from the ice-covered continental interior and coastal mountains through the biologically productive peninsula and island chains to the remote subantarctic islands with their distinct marine-influenced ecosystems.',
      sourceIds: [
        'one-earth-antarctic-continent-islands',
        'one-earth-an1',
        'one-earth-an2',
        'one-earth-an3',
      ],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'continental ice sheet and ice shelves',
        'Antarctic Peninsula mountains and fjords',
        'Scotia Sea volcanic islands',
        'subantarctic islands (Kerguelen, Heard, Crozet, Prince Edward)',
        'coastal oases and nunataks',
      ],
      sourceIds: [
        'one-earth-antarctic-continent-islands',
        'one-earth-an1',
        'one-earth-an2',
        'one-earth-an3',
      ],
      derivation: 'authored-summary',
    },
    countryIds: ['AQ', 'TF', 'HM', 'ZA'],
    sources: [
      'one-earth-antarctic-continent-islands',
      'one-earth-an1',
      'one-earth-an2',
      'one-earth-an3',
    ],
    status: 'authored',
  },
  {
    targetId: 'subrealm:caribbean',
    summary: {
      value:
        'The Caribbean subrealm encompasses the Caribbean Islands bioregion, an archipelago of over 7,000 islands spanning the Caribbean Sea from Cuba to Trinidad. Six moist forest ecoregions cover the windward and leeward islands, with Cuban, Hispaniolan, Jamaican, Puerto Rican, Leeward, and Windward Islands moist forests forming a gradient from the Greater to Lesser Antilles.',
      sourceIds: ['one-earth-caribbean', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic and limestone islands',
        'coastal plains and mangroves',
        'montane cloud forests',
        'limestone karst formations',
        'coral reefs and seagrass beds',
      ],
      sourceIds: ['one-earth-caribbean', 'one-earth-nt26'],
      derivation: 'authored-summary',
    },
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
      'BB',
      'MS',
    ],
    sources: ['one-earth-caribbean', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:central-america',
    summary: {
      value:
        'The Central America subrealm spans the Central American isthmus from southern Mexico to northwestern Colombia, covering three bioregions. Its 13 ecoregions form a complex mosaic of moist forests, dry forests, pine-oak forests, and mangroves along the Caribbean and Pacific coasts, with the Central American Montane Forests forming a continuous spine along the volcanic spine.',
      sourceIds: ['one-earth-central-america', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic mountain spine (Central American Volcanic Arc)',
        'Caribbean and Pacific coastal lowlands',
        'montane cloud forests on volcanic peaks',
        'seasonal dry forests on Pacific slopes',
        'pine-oak savannas on interior plateaus',
      ],
      sourceIds: ['one-earth-central-america', 'one-earth-nt25'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX', 'GT', 'BZ', 'SV', 'HN', 'NI', 'CR', 'PA', 'CO'],
    sources: ['one-earth-central-america', 'one-earth-nt25'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:new-zealand',
    summary: {
      value:
        "The New Zealand subrealm encompasses the islands of New Zealand, the remote subantarctic Antipodes Islands, and the subtropical Lord Howe and Norfolk Islands of the southwest Pacific. Its ecoregions span temperate kauri and beech forests, montane grasslands, tussock grasslands, subtropical island forests, and subantarctic tundra, forming one of the world's most isolated and endemic-rich biotas.",
      sourceIds: ['one-earth-new-zealand', 'one-earth-au1', 'one-earth-au2', 'one-earth-au16'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'New Zealand North and South Island mountain spine',
        'temperate kauri and southern beech forests',
        'subantarctic and subtropical offshore islands',
        'alpine and montane grassland and herbfield',
        'fiords and glaciated valleys',
      ],
      sourceIds: ['one-earth-au1', 'one-earth-au2', 'one-earth-au16'],
      derivation: 'authored-summary',
    },
    countryIds: ['NZ', 'AU', 'NF'],
    sources: ['one-earth-new-zealand', 'one-earth-au1', 'one-earth-au2', 'one-earth-au16'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:kazakh-steppes-hemiboreal-forests',
    summary: {
      value:
        "The Kazakh Steppes & Hemiboreal Forests subrealm spans the central Palearctic from the Ural Mountains across western Siberia into northern and central Kazakhstan, covering two bioregions. Vast undulating feathergrass and fescue steppes, forest steppe mosaics, and a narrow belt of hemiboreal forests host grassland-adapted wildlife amid one of the world's most extensively ploughed steppe regions.",
      sourceIds: ['one-earth-kazakh-steppes', 'one-earth-pa34', 'one-earth-pa35'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Ural-to-Sayan forest steppe band',
        'vast undulating dry steppe plains',
        'Kazakh Upland low mountains and hills',
        'narrow Western Siberian hemiboreal forest belt',
        'shallow saline and freshwater lakes',
      ],
      sourceIds: ['one-earth-kazakh-steppes', 'one-earth-pa34', 'one-earth-pa35'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Continental, with long cold winters and short warm summers; precipitation decreases southward from the forest steppe toward the dry steppe.',
      },
      sourceIds: ['one-earth-pa34', 'one-earth-pa35'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'feathergrass and fescue dry steppe',
        'birch and aspen forest steppe with Scots pine',
        'halophytic salt-tolerant communities',
        'hemiboreal fir, spruce, and lime forest',
        'upland pine forest and rocky steppe',
      ],
      sourceIds: ['one-earth-pa34', 'one-earth-pa35'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'constant wind and episodic drought',
        'nomadic herbivore grazing',
        'lake-driven migratory bird staging',
        'northward forest ecotone shift',
      ],
      sourceIds: ['one-earth-pa34', 'one-earth-pa35'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Vast cropland conversion, fragmented steppe habitat, overgrazing, poaching, and climate-driven drying threaten the subrealm. Protection levels are low for the steppe bioregion while the narrow hemiboreal forest belt faces logging, fire, and limited northward dispersal room.',
      sourceIds: ['one-earth-pa34', 'one-earth-pa35'],
      derivation: 'authored-summary',
    },
    countryIds: ['RU', 'KZ'],
    sources: ['one-earth-kazakh-steppes', 'one-earth-pa34', 'one-earth-pa35'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:oceanic-islands',
    summary: {
      value:
        "The Oceanic Islands subrealm is the Oceania realm's Pacific archipelago grouping, spanning 11 island bioregions across Polynesia, Micronesia, and Hawai'i. Over 4,500 islands of small land area support extremely isolated tropical forests, dry forests, shrublands, and coastal wetlands, harboring more than 6,500 plant species, about half of them endemic, and hundreds of endemic vertebrates.",
      sourceIds: ['one-earth-oceanic-islands', 'one-earth-oc1'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'volcanic high-island archipelagos',
        'low coral atolls and reef islands',
        'isolated subtropical broadleaf forests',
        'dry forests and tropical shrublands',
        'extensive surrounding exclusive economic zones',
      ],
      sourceIds: ['one-earth-oceanic-islands', 'one-earth-oc1'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical to subtropical maritime, ranging from humid rainforest regimes on windward volcanic slopes to seasonal dry conditions on leeward coasts and low islands.',
      },
      sourceIds: ['one-earth-oc1'],
      derivation: 'authored-summary',
    },
    vegetation: {
      value: [
        'tropical and subtropical moist broadleaf forest',
        'tropical dry forest and scrub',
        'montane and high shrubland',
        'coastal halophytic and strand vegetation',
        'palms and endemic island endemics',
      ],
      sourceIds: ['one-earth-oceanic-islands', 'one-earth-oc1'],
      derivation: 'authored-summary',
    },
    ecologicalProcesses: {
      value: [
        'extreme oceanic isolation and long-distance dispersal',
        'volcanic island succession',
        'high levels of single-island endemism',
        'seabird-mediated nutrient cycling',
      ],
      sourceIds: ['one-earth-oceanic-islands', 'one-earth-oc1'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One Earth notes high endemism and small land areas make these islands acutely vulnerable to invasive species, habitat loss, and climate-driven sea-level rise, while marine overfishing pressures surrounding waters. Protection varies widely across bioregions, from very high in Ogasawara and Central Polynesia to low across much of Melanesia and Hawaii.',
      sourceIds: ['one-earth-oceanic-islands'],
      derivation: 'authored-summary',
    },
    countryIds: ['CL', 'US'],
    sources: ['one-earth-oceanic-islands', 'one-earth-oc1'],
    status: 'authored',
  },
];
