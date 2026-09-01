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
];
