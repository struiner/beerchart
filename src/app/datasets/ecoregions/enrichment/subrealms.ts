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
  {
    targetId: 'subrealm:alaska',
    summary: {
      value:
        'The Alaska subrealm spans the northern Pacific fringe of subarctic North America, covering three bioregions that stretch from the Arctic coastal plain and Brooks Range across the interior taiga, the Alaska Peninsula and Aleutian chain. Fifteen ecoregions form a striking west–east and north–south gradient from polar tundra and coastal icefields to montane taiga and the fog-shrouded temperate rainforest of the northern Pacific coast.',
      sourceIds: ['one-earth-alaska', 'one-earth-na3', 'one-earth-na4', 'one-earth-na5'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Arctic coastal plain and Brooks Range tundra',
        'interior lowland and montane taiga',
        'Alaska Peninsula and Aleutian volcanic arcs',
        'Pacific coastal mountain icefields and fjords',
        'northern Pacific coastal temperate rainforest',
      ],
      sourceIds: ['one-earth-alaska', 'one-earth-na3', 'one-earth-na4', 'one-earth-na5'],
      derivation: 'authored-summary',
    },
    countryIds: ['CA', 'US'],
    sources: ['one-earth-alaska', 'one-earth-na3', 'one-earth-na4', 'one-earth-na5'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:altai-sayan-mountains',
    summary: {
      value:
        'The Altai-Sayan Mountains subrealm sits at the juncture of Siberia, Mongolia, Kazakhstan, and China as a single mountain-girdled bioregion. Eight ecoregions form an elevational mosaic from montane larch and Siberian pine forests through intermontane steppe to high alpine meadow and tundra, culminating in the glaciers and snowfields of the Katun and Bii-Khem ranges.',
      sourceIds: ['one-earth-altai-sayan-mountains', 'one-earth-pa36', 'one-earth-pa37'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'high mountain ranges and intermontane basins',
        'towering peaks of the Altai and Sayan systems',
        'montane larch and Siberian pine forests',
        'alpine meadows and tundra plateaus',
        'glaciers, lakes, and river gorges',
      ],
      sourceIds: ['one-earth-altai-sayan-mountains', 'one-earth-pa36', 'one-earth-pa37'],
      derivation: 'authored-summary',
    },
    countryIds: ['CN', 'KZ', 'MN', 'RU'],
    sources: ['one-earth-altai-sayan-mountains', 'one-earth-pa36', 'one-earth-pa37'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:amazonia',
    summary: {
      value:
        'The Amazonia subrealm is the core of the southern American moist tropics, spanning five bioregions that encircle the Amazon River system from its estuary to the western Andean forelands. Twenty-two ecoregions combine terra firme and floodplain forests, blackwater and whitewater ecosystems, campinarana, and savanna enclaves, forming the most biodiverse lowland forest region on Earth.',
      sourceIds: ['one-earth-amazonia', 'one-earth-nt16', 'one-earth-nt17', 'one-earth-nt18', 'one-earth-nt19', 'one-earth-nt20'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Amazon River basin and estuary',
        'terra firme and flooded (várzea) lowland forests',
        'whitewater and blackwater river systems',
        'campinarana and sandstone uplands',
        'savanna and restinga coastal enclaves',
      ],
      sourceIds: ['one-earth-amazonia', 'one-earth-nt16', 'one-earth-nt17', 'one-earth-nt18', 'one-earth-nt19', 'one-earth-nt20'],
      derivation: 'authored-summary',
    },
    countryIds: ['BO', 'BR', 'CO', 'EC', 'GF', 'GY', 'PE', 'SR', 'TT', 'VE'],
    sources: ['one-earth-amazonia', 'one-earth-nt16', 'one-earth-nt17', 'one-earth-nt18', 'one-earth-nt19', 'one-earth-nt20'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:american-west',
    summary: {
      value:
        'The American West subrealm covers the mountain-and-basin interior of western North America from the Canadian Rockies to the Colorado Plateau, spanning five bioregions. Sixteen ecoregions alternate between high-elevation conifer forests, sagebrush and saltbrush steppe, and the rolling bunchgrass prairies of the Columbia Plateau and Wyoming Basin.',
      sourceIds: ['one-earth-american-west', 'one-earth-na13', 'one-earth-na14', 'one-earth-na17', 'one-earth-na18', 'one-earth-na19'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'northern and central Rocky Mountains',
        'Great Basin sagebrush steppe and ranges',
        'Columbia Plateau and Blue Mountains',
        'Colorado Plateau canyons and mesas',
        'snake and Missouri River plains',
      ],
      sourceIds: ['one-earth-american-west', 'one-earth-na13', 'one-earth-na14', 'one-earth-na17', 'one-earth-na18', 'one-earth-na19'],
      derivation: 'authored-summary',
    },
    countryIds: ['CA', 'US'],
    sources: ['one-earth-american-west', 'one-earth-na13', 'one-earth-na14', 'one-earth-na17', 'one-earth-na18', 'one-earth-na19'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:andes-pacific-coast',
    summary: {
      value:
        'The Andes & Pacific Coast subrealm runs the entire length of western South America from Venezuela to Tierra del Fuego, covering eight bioregions. Its thirty-four ecoregions form a spectacular elevational and climatic gradient, from Pacific coastal deserts, paramo and puna grasslands, and tropical dry forests through montane cloud forests and yungas to the Valdivian and Magellanic temperate rainforests of the far south.',
      sourceIds: ['one-earth-andes-pacific-coast', 'one-earth-nt1', 'one-earth-nt10', 'one-earth-nt11', 'one-earth-nt5', 'one-earth-nt6', 'one-earth-nt7', 'one-earth-nt8', 'one-earth-nt9'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'the Andean mountain spine',
        'Pacific coastal deserts and Mediterranean scrublands',
        'tropical dry forests and flooded plains',
        'paramo, puna, and montane cloud forests',
        'Valdivian and Magellanic temperate rainforests',
      ],
      sourceIds: ['one-earth-andes-pacific-coast', 'one-earth-nt1', 'one-earth-nt10', 'one-earth-nt11', 'one-earth-nt5', 'one-earth-nt6', 'one-earth-nt7', 'one-earth-nt8', 'one-earth-nt9'],
      derivation: 'authored-summary',
    },
    countryIds: ['AR', 'BO', 'CL', 'CO', 'EC', 'PA', 'PE', 'VE'],
    sources: ['one-earth-andes-pacific-coast', 'one-earth-nt1', 'one-earth-nt10', 'one-earth-nt11', 'one-earth-nt5', 'one-earth-nt6', 'one-earth-nt7', 'one-earth-nt8', 'one-earth-nt9'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:australasian-islands-eastern-indonesia',
    summary: {
      value:
        'The Australasian Islands & Eastern Indonesia subrealm gathers six island bioregions spanning from the South Pacific islands of New Caledonia, Vanuatu, and the Solomons across New Guinea and the Maluku, Sulawesi, and Lesser Sunda chains of eastern Indonesia. Thirty-one ecoregions span tropical lowland and montane rainforests, savannas, mangroves, and dry deciduous forests along the most complex island-arc coastline on Earth.',
      sourceIds: ['one-earth-australasian-islands-eastern-indonesia', 'one-earth-au10', 'one-earth-au11', 'one-earth-au12', 'one-earth-au13', 'one-earth-au14', 'one-earth-au15'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'South Pacific island arcs and archipelagos',
        'New Guinean central range and lowland plains',
        'Wallacean islands east of the Sunda Shelf',
        'volcanic peaks and coral atolls',
        'mangrove and lowland swamp coasts',
      ],
      sourceIds: ['one-earth-australasian-islands-eastern-indonesia', 'one-earth-au10', 'one-earth-au11', 'one-earth-au12', 'one-earth-au13', 'one-earth-au14', 'one-earth-au15'],
      derivation: 'authored-summary',
    },
    countryIds: ['AU', 'ID', 'NC', 'PG', 'SB', 'TL', 'VU'],
    sources: ['one-earth-australasian-islands-eastern-indonesia', 'one-earth-au10', 'one-earth-au11', 'one-earth-au12', 'one-earth-au13', 'one-earth-au14', 'one-earth-au15'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:australia',
    summary: {
      value:
        'The Australia subrealm covers the entire Australian mainland plus Tasmania, spanning seven bioregions that encircle the continent. Thirty-six ecoregions encompass temperate forests and eucalypt woodlands, Mediterranean forest and mallee systems, vast interior deserts and spinifex shrublands, and monsoonal tropical savannas along the northern coast.',
      sourceIds: ['one-earth-australia', 'one-earth-au3', 'one-earth-au4', 'one-earth-au5', 'one-earth-au6', 'one-earth-au7', 'one-earth-au8', 'one-earth-au9'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'eastern highlands and coastal temperate forests',
        'Tasmanian temperate rainforests and alpine areas',
        'southern Mediterranean woodland and mallee',
        'Great Western Desert and interior basins',
        'tropical savanna escarpments of the north',
      ],
      sourceIds: ['one-earth-australia', 'one-earth-au3', 'one-earth-au4', 'one-earth-au5', 'one-earth-au6', 'one-earth-au7', 'one-earth-au8', 'one-earth-au9'],
      derivation: 'authored-summary',
    },
    countryIds: ['AU'],
    sources: ['one-earth-australia', 'one-earth-au3', 'one-earth-au4', 'one-earth-au5', 'one-earth-au6', 'one-earth-au7', 'one-earth-au8', 'one-earth-au9'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:black-sea-forests-steppe',
    summary: {
      value:
        'The Black Sea Forests & Steppe subrealm spans the Pontic steppe and the forested mountain rim of the Black, Marmara, and Aegean seas, covering two bioregions. Eight ecoregions transition from the feathergrass plains of the Pontic Steppe through the Euxine-Colchic and Caucasus broadleaf forests to the Anatolian steppe and submediterranean complex of western Turkey and the Crimea.',
      sourceIds: ['one-earth-black-sea-forests-steppe', 'one-earth-pa16', 'one-earth-pa17'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'rolling Pontic steppe grasslands',
        'Caucasus and Crimean mountain forests',
        'Euxine-Colchic refugial broadleaf forests',
        'Anatolian plateau steppe and woodlands',
        'Black Sea and Marmara coastlines',
      ],
      sourceIds: ['one-earth-black-sea-forests-steppe', 'one-earth-pa16', 'one-earth-pa17'],
      derivation: 'authored-summary',
    },
    countryIds: ['AM', 'AZ', 'BG', 'GE', 'KZ', 'MD', 'RO', 'RU', 'TR', 'UA'],
    sources: ['one-earth-black-sea-forests-steppe', 'one-earth-pa16', 'one-earth-pa17'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:brazil-cerrado-atlantic-coast',
    summary: {
      value:
        'The Brazil Cerrado & Atlantic Coast subrealm spans central and eastern Brazil from the Pantanal floodplains to the Atlantic forest, covering four bioregions. Nineteen ecoregions combine the vast seasonally dry cerrado savannas, the Pantanal and Chiquitano dry forests, the remnant Atlantic moist forests of the coastal range, and the caatinga dry forests of the sertão.',
      sourceIds: ['one-earth-brazil-cerrado-atlantic-coast', 'one-earth-nt12', 'one-earth-nt13', 'one-earth-nt14', 'one-earth-nt15'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'extensive cerrado savanna plateaus',
        'Pantanal flooded grassland and dry forest mosaic',
        'Atlantic Forest coastal range and restingas',
        'caatinga dry forest interior',
        'Brazilian shield rivers and waterfalls',
      ],
      sourceIds: ['one-earth-brazil-cerrado-atlantic-coast', 'one-earth-nt12', 'one-earth-nt13', 'one-earth-nt14', 'one-earth-nt15'],
      derivation: 'authored-summary',
    },
    countryIds: ['AR', 'BO', 'BR', 'PY', 'UY'],
    sources: ['one-earth-brazil-cerrado-atlantic-coast', 'one-earth-nt12', 'one-earth-nt13', 'one-earth-nt14', 'one-earth-nt15'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:canadian-boreal-forests',
    summary: {
      value:
        'The Canadian Boreal Forests subrealm spans the taiga belt of northern Canada from the Yukon to Hudson Bay, covering four bioregions. Thirteen ecoregions form the great circumpolar boreal woodland, from the western Cordilleran and Mackenzie taiga through the lake-studded shield and midcontinental plains to the forest-tundra transition of the southern Hudson Bay lowlands.',
      sourceIds: ['one-earth-canadian-boreal-forests', 'one-earth-na6', 'one-earth-na7', 'one-earth-na8', 'one-earth-na9'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'boreal plains and foothills forests',
        'Canadian Shield lakes and bedrock ridges',
        'Mackenzie Valley and northern Cordillera taiga',
        'Hudson Bay lowland wetlands and peatlands',
        'northern forest-tundra ecotone',
      ],
      sourceIds: ['one-earth-canadian-boreal-forests', 'one-earth-na6', 'one-earth-na7', 'one-earth-na8', 'one-earth-na9'],
      derivation: 'authored-summary',
    },
    countryIds: ['CA', 'US'],
    sources: ['one-earth-canadian-boreal-forests', 'one-earth-na6', 'one-earth-na7', 'one-earth-na8', 'one-earth-na9'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:caspian-sea-central-asian-deserts',
    summary: {
      value:
        'The Caspian Sea & Central Asian Deserts subrealm spans the desert interior of Central Asia from the Caspian coast to the Kazakh steppe margin, covering two bioregions. Eight ecoregions run from the Azerbaijan and Caspian lowland deserts through the Central Asian northern and southern deserts, the Kazakh semi-desert, and the Kopet Dagh mountain woodlands along the Iran–Turkmenistan border.',
      sourceIds: ['one-earth-caspian-sea-central-asian-deserts', 'one-earth-pa32', 'one-earth-pa33'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Caspian lowland and coastal deserts',
        'Central Asian sand and clay deserts',
        'Kazakh semi-desert steppe',
        'Kopet Dagh mountain woodlands',
        'riparian tugai woodlands along major rivers',
      ],
      sourceIds: ['one-earth-caspian-sea-central-asian-deserts', 'one-earth-pa32', 'one-earth-pa33'],
      derivation: 'authored-summary',
    },
    countryIds: ['AZ', 'GE', 'IR', 'KG', 'KZ', 'RU', 'TM', 'UZ'],
    sources: ['one-earth-caspian-sea-central-asian-deserts', 'one-earth-pa32', 'one-earth-pa33'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:central-east-asian-forests',
    summary: {
      value:
        'The Central East Asian Forests subrealm spans the forested interior of eastern China from the Loess Plateau and Chang Jiang lowlands to the high mountains of the Hengduan ranges, covering five bioregions. Thirteen ecoregions sweep from mixed temperate forests and saline coastal meadows through broadleaf evergreen and subtropical plateau forests to subalpine conifer belts at the eastern edge of the Tibetan Plateau.',
      sourceIds: ['one-earth-central-east-asian-forests', 'one-earth-pa49', 'one-earth-pa50', 'one-earth-pa51', 'one-earth-pa52', 'one-earth-pa53'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Loess Plateau and Huang He plains',
        'Chang Jiang plain evergreen forests',
        'Sichuan Basin and Yunnan-Guizhou plateaus',
        'Hengduan mountain gorges and subalpine forests',
        'coastal saline meadows of the Yellow Sea',
      ],
      sourceIds: ['one-earth-central-east-asian-forests', 'one-earth-pa49', 'one-earth-pa50', 'one-earth-pa51', 'one-earth-pa52', 'one-earth-pa53'],
      derivation: 'authored-summary',
    },
    countryIds: ['CN', 'MM'],
    sources: ['one-earth-central-east-asian-forests', 'one-earth-pa49', 'one-earth-pa50', 'one-earth-pa51', 'one-earth-pa52', 'one-earth-pa53'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:east-asian-deserts',
    summary: {
      value:
        'The East Asian Deserts subrealm covers the arid basins of northern China, Mongolia, and Kazakhstan, spanning three bioregions. Seven ecoregions stretch across the Gobi, the Junggar Basin semi-desert, and the Taklimakan surrounded by the rim of the desert-steppe and deciduous forest of the Tarim Basin oasis margins.',
      sourceIds: ['one-earth-east-asian-deserts', 'one-earth-pa38', 'one-earth-pa39', 'one-earth-pa43'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'great Gobi desolate gravel plains',
        'Taklimakan and Junggar sandy basins',
        'oasis and tugai riparian woodlands',
        'desert-steppe fringe and gravel plains',
        'border mountain slopes ringing the basins',
      ],
      sourceIds: ['one-earth-east-asian-deserts', 'one-earth-pa38', 'one-earth-pa39', 'one-earth-pa43'],
      derivation: 'authored-summary',
    },
    countryIds: ['CN', 'KZ', 'MN', 'RU'],
    sources: ['one-earth-east-asian-deserts', 'one-earth-pa38', 'one-earth-pa39', 'one-earth-pa43'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:equatorial-afrotropics',
    summary: {
      value:
        'The Equatorial Afrotropics subrealm spans the humid heart of Africa from the Gulf of Guinea to the Great Lakes, where lowland and montane rainforests cloak the Congo Basin and its rifts. Forest-savanna mosaics, coastal mangroves, and the volcanic island outposts of the Cape Verdes complete a largely forested domain.',
      sourceIds: ['one-earth-equatorial-afrotropics', 'one-earth-at12', 'one-earth-at13', 'one-earth-at14', 'one-earth-at15', 'one-earth-at16', 'one-earth-at17', 'one-earth-at19', 'one-earth-at24'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'vast lowland rainforests of the Congo Basin',
        'montane forests of the Albertine Rift and Cameroon Highlands',
        'forest-savanna mosaics and coastal scarp woodlands',
        'fringing mangroves along the Gulf of Guinea',
        'volcanic islands of the Cape Verde archipelago',
      ],
      sourceIds: ['one-earth-equatorial-afrotropics', 'one-earth-at12', 'one-earth-at13', 'one-earth-at14', 'one-earth-at15', 'one-earth-at16', 'one-earth-at17', 'one-earth-at19', 'one-earth-at24'],
      derivation: 'authored-summary',
    },
    countryIds: ['AO', 'BI', 'BJ', 'CD', 'CF', 'CG', 'CI', 'CM', 'CV', 'GA', 'GH', 'GM', 'GN', 'GQ', 'GW', 'KE', 'LR', 'NG', 'RW', 'SL', 'SN', 'SS', 'ST', 'TG', 'TZ', 'UG'],
    sources: ['one-earth-equatorial-afrotropics', 'one-earth-at12', 'one-earth-at13', 'one-earth-at14', 'one-earth-at15', 'one-earth-at16', 'one-earth-at17', 'one-earth-at19', 'one-earth-at24'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:european-mountain-forests',
    summary: {
      value:
        'The European Mountain Forests subrealm unites the Alps, Carpathians, and Dinaric-Balkan massifs in a broken arc of montane woodland across the continent. Conifer and mixed forests rise from crowded lowland plains, yielding to alpine meadows and the glacial high country that anchors the water systems of central Europe.',
      sourceIds: ['one-earth-european-mountain-forests', 'one-earth-pa13', 'one-earth-pa14', 'one-earth-pa15'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'towering alpine ranges and glacial valleys',
        'montane conifer and mixed deciduous forests',
        'carpathian and dinaric massifs',
        'alpine meadows and subalpine scrub',
        'river valleys and lowland basins',
      ],
      sourceIds: ['one-earth-european-mountain-forests', 'one-earth-pa13', 'one-earth-pa14', 'one-earth-pa15'],
      derivation: 'authored-summary',
    },
    countryIds: ['AL', 'AT', 'BA', 'BG', 'CH', 'CZ', 'DE', 'FR', 'GR', 'HR', 'HU', 'IT', 'LI', 'ME', 'MK', 'PL', 'RO', 'RS', 'SI', 'SK', 'TR', 'UA', 'XK'],
    sources: ['one-earth-european-mountain-forests', 'one-earth-pa13', 'one-earth-pa14', 'one-earth-pa15'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:great-plains',
    summary: {
      value:
        "The Great Plains subrealm is the tallgrass-to-shortgrass breadth of central North America, sweeping from the Canadian parklands to the southern prairie. Aspen groves finger into the north while the tallgrass prairies of the Midwest yield westward to drier mixed-grass rangelands.",
      sourceIds: ['one-earth-great-plains', 'one-earth-na12', 'one-earth-na20', 'one-earth-na21'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'rolling tallgrass and mixed-grass prairies',
        'northern aspen parklands',
        'shortgrass steppe margins',
        'riverine bottomlands and riparian corridors',
        'eastern forest-grassland transition',
      ],
      sourceIds: ['one-earth-great-plains', 'one-earth-na12', 'one-earth-na20', 'one-earth-na21'],
      derivation: 'authored-summary',
    },
    countryIds: ['CA', 'US'],
    sources: ['one-earth-great-plains', 'one-earth-na12', 'one-earth-na20', 'one-earth-na21'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:greater-arabian-peninsula',
    summary: {
      value:
        'The Greater Arabian Peninsula subrealm is the great desert wedge between the Red Sea and the Persian Gulf, stretching into the Syrian and Mesopotamian lowlands. Sand seas and gravel plains surround jagged highland rims, while salt flats and coastal marshes fringe its shores.',
      sourceIds: ['one-earth-greater-arabian-peninsula', 'one-earth-pa26'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'vast sand seas and gravel plains',
        'rocky highland escarpments',
        'coastal salt flats and tidal marshes',
        'xeric shrublands and acacia woodlands',
        'dry wadi channels and oasis basins',
      ],
      sourceIds: ['one-earth-greater-arabian-peninsula', 'one-earth-pa26'],
      derivation: 'authored-summary',
    },
    countryIds: ['AE', 'BH', 'EG', 'IL', 'IQ', 'IR', 'JO', 'KW', 'OM', 'PS', 'QA', 'SA', 'SD', 'SY', 'TR', 'YE'],
    sources: ['one-earth-greater-arabian-peninsula', 'one-earth-pa26'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:greater-european-mixed-forests',
    summary: {
      value:
        'The Greater European Mixed Forests subrealm unites the broadleaf and mixed woodlands that once blanketed the coastal, Baltic, and continental interior of Europe. From Atlantic-facing beaches and Pyrenean slopes to the eastern forest-steppe, a temperate sea of oak, beech, and pine defines the region.',
      sourceIds: ['one-earth-greater-european-mixed-forests', 'one-earth-pa10', 'one-earth-pa11', 'one-earth-pa12'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'atlantic coastal broadleaf forests',
        'baltic and sarmatic mixed woodlands',
        'continental oak and beech stands',
        'lowland plains and morainic hills',
        'riparian corridors and floodplain forests',
      ],
      sourceIds: ['one-earth-greater-european-mixed-forests', 'one-earth-pa10', 'one-earth-pa11', 'one-earth-pa12'],
      derivation: 'authored-summary',
    },
    countryIds: ['AD', 'AT', 'BE', 'BG', 'BY', 'CH', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'LI', 'LT', 'LU', 'LV', 'MD', 'NL', 'NO', 'PL', 'PT', 'RO', 'RU', 'SE', 'UA'],
    sources: ['one-earth-greater-european-mixed-forests', 'one-earth-pa10', 'one-earth-pa11', 'one-earth-pa12'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:horn-of-africa',
    summary: {
      value:
        'The Horn of Africa subrealm spans the drought-pressed shoulder of the continent from the Turkana lowlands and Sudd wetlands to the coasts of the Red Sea and Gulf of Aden. Thorny bushlands, montane woodlands of the Ethiopian highlands, and the xeric growth of Socotra and the Arabian escarpments share a fiercely seasonal climate.',
      sourceIds: ['one-earth-horn-of-africa', 'one-earth-at21', 'one-earth-at22'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'acacia-commiphora thorn bushlands',
        'ethiopian montane forests and moorlands',
        'xeric scrub of coastal lowlands and islands',
        'lake turkana basin and sudd wetlands',
        'red sea and gulf of aden shorelines',
      ],
      sourceIds: ['one-earth-horn-of-africa', 'one-earth-at21', 'one-earth-at22'],
      derivation: 'authored-summary',
    },
    countryIds: ['DJ', 'EG', 'ER', 'ET', 'KE', 'OM', 'SA', 'SD', 'SO', 'SS', 'TZ', 'UG', 'YE'],
    sources: ['one-earth-horn-of-africa', 'one-earth-at21', 'one-earth-at22'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:madagascar-east-african-coast',
    summary: {
      value:
        'The Madagascar and East African Coast subrealm strings together the great Indian Ocean island world, from the ancient forests and spiny thickets of Madagascar to the Mascarenes, Seychelles, and Comoros. A ribbon of littoral and coastal forests lines the mainland shore that faces these islands.',
      sourceIds: ['one-earth-madagascar-east-african-coast', 'one-earth-at3', 'one-earth-at4', 'one-earth-at5', 'one-earth-at6', 'one-earth-at7'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'madagascan humid and dry forests',
        'coastal and littoral forests of the mainland margin',
        'palm-savanna and spiny thicket mosaics',
        'coral island woodlands of the mascarenes and seychelles',
        'mangrove-fringed shorelines',
      ],
      sourceIds: ['one-earth-madagascar-east-african-coast', 'one-earth-at3', 'one-earth-at4', 'one-earth-at5', 'one-earth-at6', 'one-earth-at7'],
      derivation: 'authored-summary',
    },
    countryIds: ['KE', 'KM', 'MG', 'MU', 'MW', 'MZ', 'RE', 'SC', 'SO', 'SZ', 'TF', 'TZ', 'ZA'],
    sources: ['one-earth-madagascar-east-african-coast', 'one-earth-at3', 'one-earth-at4', 'one-earth-at5', 'one-earth-at6', 'one-earth-at7'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:malaysia-western-indonesia',
    summary: {
      value:
        'The Malaysia and Western Indonesia subrealm gathers the Sunda-shelf rainforests of Borneo, Sumatra, Java, and the Malay Peninsula into an equatorial lowland world. Peat swamps, heath forests, and montane cloud forests rise against volcanic peaks in one of the most species-dense regions on Earth.',
      sourceIds: ['one-earth-malaysia-western-indonesia', 'one-earth-im16', 'one-earth-im17', 'one-earth-im18'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'sunda-shelf lowland rainforests',
        'peat swamp and freshwater swamp forests',
        'kerangas heath forests',
        'montane cloud forests of volcanic ranges',
        'coastal mangroves and island woodlands',
      ],
      sourceIds: ['one-earth-malaysia-western-indonesia', 'one-earth-im16', 'one-earth-im17', 'one-earth-im18'],
      derivation: 'authored-summary',
    },
    countryIds: ['BD', 'BN', 'CC', 'CX', 'ID', 'KH', 'MM', 'MY', 'TH', 'VN'],
    sources: ['one-earth-malaysia-western-indonesia', 'one-earth-im16', 'one-earth-im17', 'one-earth-im18'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:mediterranean',
    summary: {
      value:
        'The Mediterranean subrealm rings the inland sea from the Iberian and Balearic shores through Italy, the Balkans, and Greece to the Anatolian and Levantine coasts, with the Azores as its Atlantic outpost. Sclerophyllous scrub, conifer woodlands, and fire-adapted maquis dominate a landscape baked by hot, dry summers.',
      sourceIds: ['one-earth-mediterranean', 'one-earth-pa18', 'one-earth-pa19', 'one-earth-pa20', 'one-earth-pa21'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'sclerophyllous scrub and maquis shrublands',
        'mediterranean oak and pine woodlands',
        'rocky peninsulas and island slopes',
        'coastal lowlands and river valleys',
        'macaronesian laurel forests of the azores',
      ],
      sourceIds: ['one-earth-mediterranean', 'one-earth-pa18', 'one-earth-pa19', 'one-earth-pa20', 'one-earth-pa21'],
      derivation: 'authored-summary',
    },
    countryIds: ['AL', 'BA', 'BG', 'CY', 'ES', 'FR', 'GR', 'HR', 'IL', 'IQ', 'IT', 'JO', 'LB', 'ME', 'MK', 'MT', 'PS', 'PT', 'SA', 'SI', 'SY', 'TR', 'XK'],
    sources: ['one-earth-mediterranean', 'one-earth-pa18', 'one-earth-pa19', 'one-earth-pa20', 'one-earth-pa21'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:mexican-drylands',
    summary: {
      value:
        'The Mexican Drylands subrealm spans the desert basins and sierras between the US border and central Mexico, joining the peninsula of Baja California to the mainland. Sonoran and Chihuahuan deserts meet pine-oak highlands and dry thorn forests in a country of stark altitudinal contrast.',
      sourceIds: ['one-earth-mexican-drylands', 'one-earth-na29', 'one-earth-na30'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'sonoran and chihuahuan deserts',
        'sierra madre pine-oak forests',
        'baja california desert scrub',
        'subtropical dry forests and thornscrub',
        'matorral and mezquital shrublands',
      ],
      sourceIds: ['one-earth-mexican-drylands', 'one-earth-na29', 'one-earth-na30'],
      derivation: 'authored-summary',
    },
    countryIds: ['MX', 'US'],
    sources: ['one-earth-mexican-drylands', 'one-earth-na29', 'one-earth-na30'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:mongolian-grasslands',
    summary: {
      value:
        'The Mongolian Grasslands subrealm is the rolling steppe country of central Eurasia, stretching across the Ordos plateau into the Mongolian interior. Forest-steppe belts and mountain conifer stands give way to wide grassland seas and alpine meadow in the Khangai highlands.',
      sourceIds: ['one-earth-mongolian-grasslands', 'one-earth-pa42', 'one-earth-pa44'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'rolling steppe and grassland seas',
        'forest-steppe and mountain conifer belts',
        'khangai alpine meadow pastures',
        'ordos plateau steppe',
        'river valleys and lake basins',
      ],
      sourceIds: ['one-earth-mongolian-grasslands', 'one-earth-pa42', 'one-earth-pa44'],
      derivation: 'authored-summary',
    },
    countryIds: ['CN', 'MN', 'RU'],
    sources: ['one-earth-mongolian-grasslands', 'one-earth-pa42', 'one-earth-pa44'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:north-africa',
    summary: {
      value:
        'The North Africa subrealm sweeps from the Atlantic isles of Madeira across the Atlas margins and into the vast Sahara, the great subtropical desert of the world. Mediterranean woodlands fringe the north while dune seas, hamadas, and mountain woodlands define the interior.',
      sourceIds: ['one-earth-north-africa', 'one-earth-pa22', 'one-earth-pa23', 'one-earth-pa24', 'one-earth-pa25'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'mediterranean woodlands and thorn scrub',
        'sahara dune seas and hamada plateaus',
        'atlas mountain juniper steppe',
        'oasis depressions and salt flats',
        'macaronesian laurel woodlands of madeira',
      ],
      sourceIds: ['one-earth-north-africa', 'one-earth-pa22', 'one-earth-pa23', 'one-earth-pa24', 'one-earth-pa25'],
      derivation: 'authored-summary',
    },
    countryIds: ['DZ', 'EG', 'EH', 'ES', 'LY', 'MA', 'ML', 'MR', 'NE', 'PT', 'SD', 'TD', 'TN'],
    sources: ['one-earth-north-africa', 'one-earth-pa22', 'one-earth-pa23', 'one-earth-pa24', 'one-earth-pa25'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:north-pacific-coast',
    summary: {
      value:
        "The North Pacific Coast subrealm follows the fog-cooled edge of North America from British Columbia through the Cascades and Sierra Nevada into Greater California. Towering conifer rainforests, chaparral scrub, and mediterranean woodlands descend from mountain crests to a rugged shoreline.",
      sourceIds: ['one-earth-north-pacific-coast', 'one-earth-na15', 'one-earth-na16', 'one-earth-na31'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'coastal conifer rainforests and fog belts',
        'cascade and sierra nevada montane forests',
        'chaparral and coastal sage scrub',
        'central valley oak savannas',
        'rocky headlands and redwood groves',
      ],
      sourceIds: ['one-earth-north-pacific-coast', 'one-earth-na15', 'one-earth-na16', 'one-earth-na31'],
      derivation: 'authored-summary',
    },
    countryIds: ['CA', 'MX', 'US'],
    sources: ['one-earth-north-pacific-coast', 'one-earth-na15', 'one-earth-na16', 'one-earth-na31'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:northeast-american-forests',
    summary: {
      value:
        'The Northeast American Forests subrealm blankets the humid eastern quadrant of North America with broadleaf and mixed woodlands from the Great Lakes to the Appalachian spine. Great Lakes conifer belts, interior plateau hardwoods, and the lofty mesophytic forests of the mountain chain compose a deeply forested land.',
      sourceIds: ['one-earth-northeast-american-forests', 'one-earth-na10', 'one-earth-na11', 'one-earth-na23', 'one-earth-na24'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'great lakes mixed and conifer forests',
        'appalachian and allegheny hardwood slopes',
        'interior plateau mixed mesophytic woods',
        'coastal plain oak-pine stands',
        'lake-edge wetlands and river valleys',
      ],
      sourceIds: ['one-earth-northeast-american-forests', 'one-earth-na10', 'one-earth-na11', 'one-earth-na23', 'one-earth-na24'],
      derivation: 'authored-summary',
    },
    countryIds: ['CA', 'US'],
    sources: ['one-earth-northeast-american-forests', 'one-earth-na10', 'one-earth-na11', 'one-earth-na23', 'one-earth-na24'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:northeast-asian-forests',
    summary: {
      value:
        'The Northeast Asian Forests subrealm spans the Dzhagdy ranges, the Manchuria-Ussuri lowlands, and the Korean Peninsula in a band of mixed temperate woodland. Mountain conifers grade into broadleaf forest and meadow steppe along the great rivers of the Amur basin.',
      sourceIds: ['one-earth-northeast-asian-forests', 'one-earth-pa45', 'one-earth-pa46', 'one-earth-pa48'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'dzhagdy mountain conifer forests',
        'manchurian and ussuri mixed woodlands',
        'korean peninsula deciduous forests',
        'amur meadow steppe mosaic',
        'river floodplains and coastal scrub',
      ],
      sourceIds: ['one-earth-northeast-asian-forests', 'one-earth-pa45', 'one-earth-pa46', 'one-earth-pa48'],
      derivation: 'authored-summary',
    },
    countryIds: ['CN', 'KP', 'KR', 'RU'],
    sources: ['one-earth-northeast-asian-forests', 'one-earth-pa45', 'one-earth-pa46', 'one-earth-pa48'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:persian-deserts-forests',
    summary: {
      value:
        'The Persian Deserts and Forests subrealm spans the Iranian plateau between the Caspian Sea and the Persian Gulf, folding in the Zagros, Elburz, and Afghan-Balochistan highlands. Hyrcanian temperate forests cling to the Caspian slope while steppe, scrub, and vast interior deserts dominate the interior.',
      sourceIds: ['one-earth-persian-deserts-forests', 'one-earth-pa27', 'one-earth-pa28', 'one-earth-pa29', 'one-earth-pa30'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'caspian hyrcanian broadleaf forests',
        'zagros and elburz montane woodland',
        'central persian desert basins',
        'east anatolian and iranian steppe',
        'afghan-balochistan dry mountain meadows',
      ],
      sourceIds: ['one-earth-persian-deserts-forests', 'one-earth-pa27', 'one-earth-pa28', 'one-earth-pa29', 'one-earth-pa30'],
      derivation: 'authored-summary',
    },
    countryIds: ['AF', 'AM', 'AZ', 'GE', 'IQ', 'IR', 'PK', 'TJ', 'TM', 'TR', 'UZ'],
    sources: ['one-earth-persian-deserts-forests', 'one-earth-pa27', 'one-earth-pa28', 'one-earth-pa29', 'one-earth-pa30'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:scandinavia-west-boreal-forests',
    summary: {
      value:
        "The Scandinavia and West Boreal Forests subrealm reaches from Iceland's tundra-ringed interior across the Scandinavian mountains to the vast taiga of the Urals and western Russia. Birch and coastal conifer belts yield to swampy boreal forest and subarctic alpine tundra.",
      sourceIds: ['one-earth-scandinavia-west-boreal-forests', 'one-earth-pa2', 'one-earth-pa3', 'one-earth-pa8'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'scandinavian coastal conifer forests',
        'montane birch woodlands and alpine tundra',
        'icelandic birch scrub and glacial lowlands',
        'west eurasian taiga expanses',
        'ural mountain forest and fell fields',
      ],
      sourceIds: ['one-earth-scandinavia-west-boreal-forests', 'one-earth-pa2', 'one-earth-pa3', 'one-earth-pa8'],
      derivation: 'authored-summary',
    },
    countryIds: ['FI', 'IS', 'NO', 'RU', 'SE'],
    sources: ['one-earth-scandinavia-west-boreal-forests', 'one-earth-pa2', 'one-earth-pa3', 'one-earth-pa8'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:sea-of-okhotsk-bering-tundra-taiga',
    summary: {
      value:
        'The Sea of Okhotsk and Bering Tundra-Taiga subrealm lines the far northeastern shore of Russia from the Bering coast to the Okhotsk littoral. Coastal tundra, volcanic meadows, and larch taiga crowd against cold seas, with the solitary arctic desert of Wrangel Island offshore.',
      sourceIds: ['one-earth-sea-of-okhotsk-bering-tundra-taiga', 'one-earth-pa5', 'one-earth-pa6'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'east eurasian coastal tundra',
        'kamchatka volcanic meadows and sparse forests',
        'okhotsk-manchurian larch taiga',
        'bering and chukchi maritime tundra',
        'wrangel island arctic desert',
      ],
      sourceIds: ['one-earth-sea-of-okhotsk-bering-tundra-taiga', 'one-earth-pa5', 'one-earth-pa6'],
      derivation: 'authored-summary',
    },
    countryIds: ['RU'],
    sources: ['one-earth-sea-of-okhotsk-bering-tundra-taiga', 'one-earth-pa5', 'one-earth-pa6'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:siberia-east-boreal-forests',
    summary: {
      value:
        'The Siberia and East Boreal Forests subrealm is the immense larch and pine taiga that blankets the Russian interior east of the Yenisei. Permafrost lowlands, river valleys, and buried mountain tundra rise within one of the largest continuous forest zones on the planet.',
      sourceIds: ['one-earth-siberia-east-boreal-forests', 'one-earth-pa7'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'vast larch and pine taiga',
        'permafrost lowlands and swampy valleys',
        'mountain tundra on interior ranges',
        'trans-baikal conifer forests',
        'wide siberian river corridors',
      ],
      sourceIds: ['one-earth-siberia-east-boreal-forests', 'one-earth-pa7'],
      derivation: 'authored-summary',
    },
    countryIds: ['CN', 'MN', 'RU'],
    sources: ['one-earth-siberia-east-boreal-forests', 'one-earth-pa7'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:south-american-grasslands',
    summary: {
      value:
        'The South American Grasslands subrealm unites the windy Patagonian steppe, the fertile pampas of the Rio de la Plata, and the thorny Chaco of the south in a sweep of treeless country. Grassy plains and savannas stretch from the Andean rain shadow to the warm Chaco lowlands.',
      sourceIds: ['one-earth-south-american-grasslands', 'one-earth-nt2', 'one-earth-nt3', 'one-earth-nt4'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'patagonian steppe and low mountain scrub',
        'pampas and uruguayan rolling grasslands',
        'chaco woodlands and thorn savanna',
        'flooded parana savannas',
        'espinal and low monte shrublands',
      ],
      sourceIds: ['one-earth-south-american-grasslands', 'one-earth-nt2', 'one-earth-nt3', 'one-earth-nt4'],
      derivation: 'authored-summary',
    },
    countryIds: ['AR', 'BO', 'BR', 'CL', 'FK', 'PY', 'UY'],
    sources: ['one-earth-south-american-grasslands', 'one-earth-nt2', 'one-earth-nt3', 'one-earth-nt4'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:southeast-asian-forests',
    summary: {
      value:
        'The Southeast Asian Forests subrealm reaches across mainland Indochina and Myanmar into the subtropical evergreen south of China, then breaks into the island chains of the Philippines and Nansei group. Montane and lowland rainforests, monsoon woodlands, and brackish peatlands share a monsoon rhythm that floods the region.',
      sourceIds: ['one-earth-southeast-asian-forests', 'one-earth-im10', 'one-earth-im11', 'one-earth-im12', 'one-earth-im13', 'one-earth-im14', 'one-earth-im15', 'one-earth-im9'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'indochinese monsoon and mixed forests',
        'arakan and northern triangle mountain woodlands',
        'south china subtropical evergreen forests',
        'philippine and sulu sea island rainforests',
        'delta peatlands and coastal mangroves',
      ],
      sourceIds: ['one-earth-southeast-asian-forests', 'one-earth-im10', 'one-earth-im11', 'one-earth-im12', 'one-earth-im13', 'one-earth-im14', 'one-earth-im15', 'one-earth-im9'],
      derivation: 'authored-summary',
    },
    countryIds: ['BD', 'CN', 'HK', 'IN', 'JP', 'KH', 'LA', 'MM', 'MO', 'MY', 'PH', 'TH', 'TW', 'VN'],
    sources: ['one-earth-southeast-asian-forests', 'one-earth-im10', 'one-earth-im11', 'one-earth-im12', 'one-earth-im13', 'one-earth-im14', 'one-earth-im15', 'one-earth-im9'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:southeast-us-savannas-forests',
    summary: {
      value:
        'The Southeast US Savannas and Forests subrealm spans the Ozarks, southern bottomlands, and Gulf coastal grasslands, with the subtropical island of Bermuda at its offshore margin. Longleaf savannas, piney woods, and blackland prairies intermingle with riverine forests in a warm, humid plain.',
      sourceIds: ['one-earth-southeast-us-savannas-forests', 'one-earth-na22', 'one-earth-na25', 'one-earth-na26', 'one-earth-na27', 'one-earth-na28'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'ozark mixed oak-hickory forests',
        'longleaf pine savannas and flatwoods',
        'mississippi bottomland hardwood forests',
        'western gulf coastal grasslands',
        'texas blackland prairies and bermuda forests',
      ],
      sourceIds: ['one-earth-southeast-us-savannas-forests', 'one-earth-na22', 'one-earth-na25', 'one-earth-na26', 'one-earth-na27', 'one-earth-na28'],
      derivation: 'authored-summary',
    },
    countryIds: ['BM', 'MX', 'US'],
    sources: ['one-earth-southeast-us-savannas-forests', 'one-earth-na22', 'one-earth-na25', 'one-earth-na26', 'one-earth-na27', 'one-earth-na28'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:southern-afrotropics',
    summary: {
      value:
        'The Southern Afrotropics subrealm gathers the Cape fynbos, Karoo, Kalahari, and Namib drylands of southernmost Africa with the subtropical grasslands of its eastern rim. The cold-tempered volcanic isles of Tristan anchor the region where the Atlantic opens to the southern ocean.',
      sourceIds: ['one-earth-southern-afrotropics', 'one-earth-at1', 'one-earth-at10', 'one-earth-at2', 'one-earth-at8', 'one-earth-at9'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'cape fynbos and renosterveld shrublands',
        'karoo and kalahari desert plains',
        'namib coastal desert belt',
        'drakensberg montane grasslands',
        'tristan volcanic island moorlands',
      ],
      sourceIds: ['one-earth-southern-afrotropics', 'one-earth-at1', 'one-earth-at10', 'one-earth-at2', 'one-earth-at8', 'one-earth-at9'],
      derivation: 'authored-summary',
    },
    countryIds: ['AO', 'BW', 'LS', 'MZ', 'NA', 'SH', 'SZ', 'ZA'],
    sources: ['one-earth-southern-afrotropics', 'one-earth-at1', 'one-earth-at10', 'one-earth-at2', 'one-earth-at8', 'one-earth-at9'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:sub-equatorial-afrotropics',
    summary: {
      value:
        'The Sub-Equatorial Afrotropics subrealm stretches across the miombo and mopane woodlands that band the southern arc of subtropical Africa between the equatorial forests and the Kalahari. Vast savannas, flooded grasslands, and isolated montane islands of forest break the woodlands, while St Helena and Ascension stand apart in the Atlantic.',
      sourceIds: ['one-earth-sub-equatorial-afrotropics', 'one-earth-at11', 'one-earth-at18'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'miombo and mopane woodlands',
        'subequatorial savanna plains',
        'zambezian flooded grasslands',
        'eastern arc and rift montane forests',
        'saline pans and halophytic flats',
      ],
      sourceIds: ['one-earth-sub-equatorial-afrotropics', 'one-earth-at11', 'one-earth-at18'],
      derivation: 'authored-summary',
    },
    countryIds: ['AO', 'BI', 'BW', 'CD', 'KE', 'MW', 'MZ', 'NA', 'SH', 'TZ', 'ZA', 'ZM', 'ZW'],
    sources: ['one-earth-sub-equatorial-afrotropics', 'one-earth-at11', 'one-earth-at18'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:tibetan-plateau',
    summary: {
      value:
        'The Tibetan Plateau subrealm is the vast elevated tableland that crowns the roof of the world between the Himalaya and the Pamir. Alpine meadows, steppe, and shrublands spread across its high wilderness, rising into the glaciated ranges that feed the great rivers of Asia.',
      sourceIds: ['one-earth-tibetan-plateau', 'one-earth-pa40', 'one-earth-pa41'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'high-elevation alpine meadows and shrublands',
        'central plateau cold steppe',
        'himalayan and pamir glaciated ranges',
        'qaidam basin salt flats',
        'north-tibetan alpine desert',
      ],
      sourceIds: ['one-earth-tibetan-plateau', 'one-earth-pa40', 'one-earth-pa41'],
      derivation: 'authored-summary',
    },
    countryIds: ['AF', 'BT', 'CN', 'IN', 'KG', 'MM', 'NP', 'PK', 'TJ', 'UZ'],
    sources: ['one-earth-tibetan-plateau', 'one-earth-pa40', 'one-earth-pa41'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:tien-shan-mountains',
    summary: {
      value:
        'The Tien Shan Mountains subrealm chains the great ridges and intermontane valleys that link the Tian Shan to the Pamir across Central Asia. Conifer forests climb moist northern slopes while mountain steppe and arid foothill scrub spread across the sun-dried basins between ranges.',
      sourceIds: ['one-earth-tien-shan-mountains', 'one-earth-pa31'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'tian shan montane conifer forests',
        'intermontane mountain steppe and meadows',
        'foothill arid steppe belts',
        'gissaro-alai open woodlands',
        'glacier-capped high ridges',
      ],
      sourceIds: ['one-earth-tien-shan-mountains', 'one-earth-pa31'],
      derivation: 'authored-summary',
    },
    countryIds: ['AF', 'CN', 'KG', 'KZ', 'TJ', 'TM', 'UZ'],
    sources: ['one-earth-tien-shan-mountains', 'one-earth-pa31'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:upper-south-america',
    summary: {
      value:
        'The Upper South America subrealm covers the Guiana Shield, the Orinoco plains, and the Venezuelan coast from the foothills of the Andes to the Atlantic. Tepui-topped moist forests, flooded savannas, and dry thorn woodlands shut against the Caribbean shoreline.',
      sourceIds: ['one-earth-upper-south-america', 'one-earth-nt21', 'one-earth-nt22', 'one-earth-nt23'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'guianan lowland and highland moist forests',
        'orinoquia flooded savannas and llanos',
        'tepui table mountains and pantepui shrublands',
        'caribbean coastal dry forests and xeric scrub',
        'delta wetlands and fringe mangroves',
      ],
      sourceIds: ['one-earth-upper-south-america', 'one-earth-nt21', 'one-earth-nt22', 'one-earth-nt23'],
      derivation: 'authored-summary',
    },
    countryIds: ['BR', 'CO', 'GF', 'GY', 'SR', 'TT', 'VE'],
    sources: ['one-earth-upper-south-america', 'one-earth-nt21', 'one-earth-nt22', 'one-earth-nt23'],
    status: 'authored',
  },
];
