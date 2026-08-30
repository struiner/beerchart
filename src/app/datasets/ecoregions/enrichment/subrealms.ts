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
      sourceIds: ['one-earth-canadian-tundra', 'one-earth-na2', 'one-earth-eco-412', 'one-earth-eco-413', 'one-earth-eco-414', 'one-earth-eco-415', 'one-earth-eco-421'],
      derivation: 'authored-summary',
    },
    countryIds: ['CA'],
    sources: ['one-earth-canadian-tundra', 'one-earth-na2', 'one-earth-eco-412', 'one-earth-eco-413', 'one-earth-eco-414', 'one-earth-eco-415', 'one-earth-eco-421'],
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
      sourceIds: ['one-earth-at20', 'one-earth-at23', 'one-earth-eco-43', 'one-earth-eco-49', 'one-earth-eco-53', 'one-earth-eco-62', 'one-earth-eco-71', 'one-earth-eco-72', 'one-earth-eco-74'],
      derivation: 'authored-summary',
    },
    countryIds: ['NE', 'TD', 'CF', 'SS', 'SD', 'ML', 'CM', 'NG', 'BF'],
    sources: ['one-earth-sub-saharan-afrotropics', 'one-earth-at20', 'one-earth-at23', 'one-earth-eco-43', 'one-earth-eco-49', 'one-earth-eco-53', 'one-earth-eco-62', 'one-earth-eco-71', 'one-earth-eco-72', 'one-earth-eco-74'],
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
      sourceIds: ['one-earth-pa1', 'one-earth-pa4', 'one-earth-eco-774', 'one-earth-eco-775', 'one-earth-eco-776', 'one-earth-eco-777', 'one-earth-eco-778'],
      derivation: 'authored-summary',
    },
    countryIds: ['RU', 'NO'],
    sources: ['one-earth-palearctic-tundra', 'one-earth-pa1', 'one-earth-pa4', 'one-earth-eco-774', 'one-earth-eco-775', 'one-earth-eco-776', 'one-earth-eco-777', 'one-earth-eco-778'],
    status: 'authored',
  },
  {
    targetId: 'subrealm:antarctic-continent-islands',
    summary: {
      value:
        'The Antarctic Continent & Islands subrealm covers the Antarctic continent, the Antarctic Peninsula and Scotia Sea islands, and the subantarctic Indian Ocean islands. Three bioregions span from the ice-covered continental interior and coastal mountains through the biologically productive peninsula and island chains to the remote subantarctic islands with their distinct marine-influenced ecosystems.',
      sourceIds: ['one-earth-antarctic-continent-islands', 'one-earth-an1', 'one-earth-an2', 'one-earth-an3'],
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
      sourceIds: ['one-earth-antarctic-continent-islands', 'one-earth-an1', 'one-earth-an2', 'one-earth-an3'],
      derivation: 'authored-summary',
    },
    countryIds: ['AQ', 'TF', 'HM', 'ZA'],
    sources: ['one-earth-antarctic-continent-islands', 'one-earth-an1', 'one-earth-an2', 'one-earth-an3'],
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
    countryIds: ['CU', 'DO', 'HT', 'JM', 'PR', 'BS', 'TT', 'AG', 'DM', 'GD', 'KN', 'LC', 'VC', 'BQ', 'CW', 'SX', 'AW', 'AI', 'VG', 'VI', 'KY', 'TC', 'MQ', 'GP', 'BL', 'MF', 'SR'],
    sources: ['one-earth-caribbean', 'one-earth-nt26'],
    status: 'authored',
  },
];
