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
      sourceIds: ['one-earth-pa47', 'one-earth-eco-666', 'one-earth-eco-670', 'one-earth-eco-671', 'one-earth-eco-683', 'one-earth-eco-698', 'one-earth-eco-699'],
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
      sourceIds: ['one-earth-pa47', 'one-earth-eco-666', 'one-earth-eco-670', 'one-earth-eco-671', 'one-earth-eco-683', 'one-earth-eco-698', 'one-earth-eco-699'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Humid temperate with strong winter monsoon on the Sea of Japan side and summer monsoon on the Pacific side; subarctic in Hokkaido, subtropical in Ryukyu.',
      },
      sourceIds: ['one-earth-eco-666', 'one-earth-eco-670', 'one-earth-eco-671', 'one-earth-eco-683', 'one-earth-eco-698', 'one-earth-eco-699'],
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
      sourceIds: ['one-earth-eco-666', 'one-earth-eco-670', 'one-earth-eco-671', 'one-earth-eco-683', 'one-earth-eco-698', 'one-earth-eco-699'],
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
      sourceIds: ['one-earth-eco-666', 'one-earth-eco-670', 'one-earth-eco-671', 'one-earth-eco-683', 'one-earth-eco-698', 'one-earth-eco-699'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'High human population density and historical forest conversion have fragmented lowland habitats. Protected areas include several national parks; key pressures are plantation forestry, deer overbrowsing, invasive species, and climate-driven range shifts.',
      sourceIds: ['one-earth-pa47', 'one-earth-eco-666', 'one-earth-eco-670', 'one-earth-eco-671', 'one-earth-eco-683', 'one-earth-eco-698', 'one-earth-eco-699'],
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
    sources: ['one-earth-pa47', 'one-earth-eco-666', 'one-earth-eco-670', 'one-earth-eco-671', 'one-earth-eco-683', 'one-earth-eco-698', 'one-earth-eco-699'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa9',
    summary: {
      value:
        'Great Britain Ireland & Faroe Islands (PA9) spans the British Isles and Faroe archipelago. Five ecoregions form a west–east moisture gradient: Celtic broadleaf forests on the Atlantic fringe, English lowlands beech forests, North Atlantic moist mixed forests across Britain and Ireland, Caledonian pine forests in the Scottish Highlands, and Faroese boreal grasslands on the exposed North Atlantic islands.',
      sourceIds: ['one-earth-pa9', 'one-earth-eco-651', 'one-earth-eco-663', 'one-earth-eco-672', 'one-earth-eco-691', 'one-earth-eco-729'],
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
      sourceIds: ['one-earth-pa9', 'one-earth-eco-651', 'one-earth-eco-663', 'one-earth-eco-672', 'one-earth-eco-691', 'one-earth-eco-729'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Oceanic temperate with strong west–east precipitation gradient (3,000+ mm in western Highlands to 600 mm in eastern England); mild winters, cool summers; Faroes cool, wet, and windy year-round.',
        annualPrecipitationMm: { min: 600, max: 3500 },
      },
      sourceIds: ['one-earth-eco-651', 'one-earth-eco-663', 'one-earth-eco-672', 'one-earth-eco-691', 'one-earth-eco-729'],
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
      sourceIds: ['one-earth-eco-651', 'one-earth-eco-663', 'one-earth-eco-672', 'one-earth-eco-691', 'one-earth-eco-729'],
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
      sourceIds: ['one-earth-pa9', 'one-earth-eco-651', 'one-earth-eco-663', 'one-earth-eco-672', 'one-earth-eco-691', 'one-earth-eco-729'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'One of the most heavily modified temperate regions globally; ancient woodland cover below 2.5% in Britain. Key pressures: agricultural intensification, deer overabundance, invasive species (rhododendron, grey squirrel), nitrogen deposition, and climate-driven range shifts. Protected areas network expanding but fragmented; Caledonian pinewoods and Atlantic oakwoods are priority habitats.',
      sourceIds: ['one-earth-pa9', 'one-earth-eco-651', 'one-earth-eco-663', 'one-earth-eco-672', 'one-earth-eco-691', 'one-earth-eco-729'],
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
    sources: ['one-earth-pa9', 'one-earth-eco-651', 'one-earth-eco-663', 'one-earth-eco-672', 'one-earth-eco-691', 'one-earth-eco-729'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:na2',
    summary: {
      value:
        'Canadian Tundra (NA2) covers the northern Canadian Arctic archipelago and mainland tundra coast. Five ecoregions span a High-to-Low Arctic gradient: polar-desert High Arctic tundra on the Queen Elizabeth Islands, Low and Middle Arctic tundra across the mainland and Baffin Island, Davis Highlands tundra on Baffin Island, and alpine tundra in the Torngat Mountains of northern Labrador.',
      sourceIds: ['one-earth-na2', 'one-earth-eco-412', 'one-earth-eco-413', 'one-earth-eco-414', 'one-earth-eco-415', 'one-earth-eco-421'],
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
      sourceIds: ['one-earth-na2', 'one-earth-eco-412', 'one-earth-eco-413', 'one-earth-eco-414', 'one-earth-eco-415', 'one-earth-eco-421'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'High Arctic to Low Arctic with extreme seasonality; winter temperatures -30 to -40°C, summer highs 5–10°C; precipitation 100–300 mm mostly as snow.',
        annualPrecipitationMm: { min: 100, max: 300 },
      },
      sourceIds: ['one-earth-eco-412', 'one-earth-eco-413', 'one-earth-eco-414', 'one-earth-eco-415', 'one-earth-eco-421'],
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
      sourceIds: ['one-earth-eco-412', 'one-earth-eco-413', 'one-earth-eco-414', 'one-earth-eco-415', 'one-earth-eco-421'],
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
      sourceIds: ['one-earth-eco-412', 'one-earth-eco-413', 'one-earth-eco-414', 'one-earth-eco-415', 'one-earth-eco-421'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Extensive protected areas including Qausuittuq, Sirmilik, Auyuittuq, and Torngat Mountains national parks. Climate-driven shrub expansion, permafrost thaw, and shifting species distributions are primary concerns. Inuit-led conservation and co-management are central to stewardship.',
      sourceIds: ['one-earth-na2', 'one-earth-eco-412', 'one-earth-eco-413', 'one-earth-eco-414', 'one-earth-eco-415', 'one-earth-eco-421'],
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
    sources: ['one-earth-na2', 'one-earth-eco-412', 'one-earth-eco-413', 'one-earth-eco-414', 'one-earth-eco-415', 'one-earth-eco-421'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:at20',
    summary: {
      value:
        'West Sudanian Savanna (AT20) spans the Sudanian zone from Senegal to the Central African Republic. It is a broad savanna woodland belt dominated by Isoberlinia and Terminalia species, with a pronounced dry season and annual fires shaping the vegetation.',
      sourceIds: ['one-earth-at20', 'one-earth-eco-43', 'one-earth-eco-49', 'one-earth-eco-62', 'one-earth-eco-74'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'broad savanna plains',
        'Isoberlinia woodland zones',
        'seasonal river floodplains',
        'lateritic plateaus and inselbergs',
      ],
      sourceIds: ['one-earth-at20', 'one-earth-eco-43', 'one-earth-eco-49', 'one-earth-eco-62', 'one-earth-eco-74'],
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
    sources: ['one-earth-at20', 'one-earth-eco-43', 'one-earth-eco-49', 'one-earth-eco-62', 'one-earth-eco-74'],
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
    characteristicSpeciesIds: [
      'species:polar-bear',
      'species:ivory-gull',
      'species:walrus',
    ],
    countryIds: ['RU'],
    sources: ['one-earth-pa1', 'one-earth-eco-778'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:pa4',
    summary: {
      value:
        'Greater Eurasian Tundra (PA4) spans the mainland tundra from the Kola Peninsula across northern Siberia to the Novosibirsk Islands. Four ecoregions form a west–east gradient: Kola Peninsula tundra, Northeast Siberian coastal tundra, Northwest Russian-Novaya Zemlya tundra, and Novosibirsk Islands Arctic desert.',
      sourceIds: ['one-earth-pa4', 'one-earth-eco-774', 'one-earth-eco-775', 'one-earth-eco-776', 'one-earth-eco-777'],
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
      sourceIds: ['one-earth-pa4', 'one-earth-eco-774', 'one-earth-eco-775', 'one-earth-eco-776', 'one-earth-eco-777'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'High Arctic to Low Arctic with strong west–east continentality gradient; July temperatures 3–10°C; annual precipitation 150–400 mm; continuous permafrost.',
        annualPrecipitationMm: { min: 150, max: 400 },
      },
      sourceIds: ['one-earth-eco-774', 'one-earth-eco-775', 'one-earth-eco-776', 'one-earth-eco-777'],
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
      sourceIds: ['one-earth-eco-774', 'one-earth-eco-775', 'one-earth-eco-776', 'one-earth-eco-777'],
      derivation: 'source-value',
    },
    ecologicalProcesses: {
      value: [
        'west–east continentality gradient driving species turnover',
        'permafrost thaw lake formation and drainage',
        'reindeer and caribou seasonal migrations',
        'seabird nutrient transfer on coasts and islands',
      ],
      sourceIds: ['one-earth-pa4', 'one-earth-eco-774', 'one-earth-eco-775', 'one-earth-eco-776', 'one-earth-eco-777'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Protected areas include Kandalaksha, Great Arctic, and Lena Delta zapovedniks. Pressures: oil and gas development (Yamal, Gydan), climate-driven shrub expansion, permafrost thaw, and changing migratory routes. Wild reindeer and Siberian crane are flagship species.',
      sourceIds: ['one-earth-pa4', 'one-earth-eco-774', 'one-earth-eco-775', 'one-earth-eco-776', 'one-earth-eco-777'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:wild-reindeer',
      'species:siberian-crane',
      'species:polar-bear',
      'species:arctic-fox',
    ],
    countryIds: ['RU', 'NO'],
    sources: ['one-earth-pa4', 'one-earth-eco-774', 'one-earth-eco-775', 'one-earth-eco-776', 'one-earth-eco-777'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:an2',
    summary: {
      value:
        'Antarctic Peninsula & Scotia Sea (AN2) spans the Antarctic Peninsula, the South Shetland Islands, the South Orkney Islands, and the Scotia Sea island chain. Six ecoregions form a north–south gradient from the milder maritime-influenced South Orkney and Scotia Sea islands through the northwest and northeast peninsula coasts to the colder central-south and southern peninsula, supporting some of Antarctica\'s richest terrestrial and marine ecosystems.',
      sourceIds: ['one-earth-an2', 'one-earth-eco-118', 'one-earth-eco-126', 'one-earth-eco-127', 'one-earth-eco-129', 'one-earth-eco-130', 'one-earth-eco-131'],
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
      sourceIds: ['one-earth-an2', 'one-earth-eco-118', 'one-earth-eco-126', 'one-earth-eco-127', 'one-earth-eco-129', 'one-earth-eco-130', 'one-earth-eco-131'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Maritime Antarctic with strong north–south gradient; northern islands -5 to 2°C mean annual, southern peninsula -15 to -20°C; precipitation 300–800 mm; strong westerly winds.',
        annualPrecipitationMm: { min: 300, max: 800 },
      },
      sourceIds: ['one-earth-eco-118', 'one-earth-eco-126', 'one-earth-eco-127', 'one-earth-eco-129', 'one-earth-eco-130', 'one-earth-eco-131'],
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
      sourceIds: ['one-earth-eco-118', 'one-earth-eco-126', 'one-earth-eco-127', 'one-earth-eco-129', 'one-earth-eco-130', 'one-earth-eco-131'],
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
      sourceIds: ['one-earth-an2', 'one-earth-eco-118', 'one-earth-eco-126', 'one-earth-eco-127', 'one-earth-eco-129', 'one-earth-eco-130', 'one-earth-eco-131'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'Entire bioregion within the Antarctic Treaty System; Antarctic Specially Protected Areas (ASPAs) protect key sites. Pressures: climate-driven ice loss, non-native species (Poa annua), tourism concentration, and krill fishery impacts on predator populations. Emperor penguin colonies at risk from sea-ice loss.',
      sourceIds: ['one-earth-an2', 'one-earth-eco-118', 'one-earth-eco-126', 'one-earth-eco-127', 'one-earth-eco-129', 'one-earth-eco-130', 'one-earth-eco-131'],
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
    sources: ['one-earth-an2', 'one-earth-eco-118', 'one-earth-eco-126', 'one-earth-eco-127', 'one-earth-eco-129', 'one-earth-eco-130', 'one-earth-eco-131'],
    status: 'authored',
  },
  {
    targetId: 'bioregion:nt26',
    summary: {
      value:
        'Caribbean Islands (NT26) encompasses the Greater and Lesser Antilles plus the Bahamas and Turks & Caicos. Six tropical moist forest ecoregions span the archipelago from the Cuban and Hispaniolan moist forests of the Greater Antilles through the Jamaican and Puerto Rican moist forests to the Leeward and Windward Islands moist forests of the Lesser Antilles, with additional dry forest, coniferous, wetland, xeric, and mangrove ecoregions completing the bioregion\'s diversity.',
      sourceIds: ['one-earth-nt26', 'one-earth-eco-459', 'one-earth-eco-468', 'one-earth-eco-472', 'one-earth-eco-475', 'one-earth-eco-495', 'one-earth-eco-517'],
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
      sourceIds: ['one-earth-nt26', 'one-earth-eco-459', 'one-earth-eco-468', 'one-earth-eco-472', 'one-earth-eco-475', 'one-earth-eco-495', 'one-earth-eco-517'],
      derivation: 'authored-summary',
    },
    climate: {
      value: {
        character:
          'Tropical maritime with trade winds; wet season May–November, dry season December–April; mean annual 24–28°C; precipitation 1,000–3,000 mm on windward slopes, 500–1,000 mm on leeward sides.',
        annualPrecipitationMm: { min: 500, max: 3000 },
      },
      sourceIds: ['one-earth-eco-459', 'one-earth-eco-468', 'one-earth-eco-472', 'one-earth-eco-475', 'one-earth-eco-495', 'one-earth-eco-517'],
      derivation: 'source-value',
    },
    vegetation: {
      value: [
        'lowland and montane tropical moist forest',
        'dry forest and cactus scrub on leeward coasts',
        'pine and palm savannas on limestone substrates',
        'mangroves and coastal wetlands',
        'xeric shrublands on arid islands',
      ],
      sourceIds: ['one-earth-eco-459', 'one-earth-eco-468', 'one-earth-eco-472', 'one-earth-eco-475', 'one-earth-eco-495', 'one-earth-eco-517'],
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
      sourceIds: ['one-earth-nt26', 'one-earth-eco-459', 'one-earth-eco-468', 'one-earth-eco-472', 'one-earth-eco-475', 'one-earth-eco-495', 'one-earth-eco-517'],
      derivation: 'authored-summary',
    },
    conservationContext: {
      value:
        'High endemism and severe habitat loss; over 90% of original forest cleared on many islands. Key threats: tourism development, invasive species (mongooses, rats, lionfish), climate change (sea-level rise, hurricane intensification). Protected areas include national parks in Cuba, Dominican Republic, Jamaica, Puerto Rico, and Bahamas. Regional conservation initiatives: Caribbean Challenge Initiative, Critical Ecosystem Partnership Fund.',
      sourceIds: ['one-earth-nt26', 'one-earth-eco-459', 'one-earth-eco-468', 'one-earth-eco-472', 'one-earth-eco-475', 'one-earth-eco-495', 'one-earth-eco-517'],
      derivation: 'authored-summary',
    },
    characteristicSpeciesIds: [
      'species:cuban-trogon',
      'species:hispaniolan-trogon',
      'species:jamaican-tody',
      'species:puerto-rican-parrot',
      'species:cuban-hutia',
      'species:hispaniolan-solenodon',
    ],
    countryIds: ['CU', 'DO', 'HT', 'JM', 'PR', 'BS', 'TT', 'AG', 'DM', 'GD', 'KN', 'LC', 'VC', 'BQ', 'CW', 'SX', 'AW', 'AI', 'VG', 'VI', 'KY', 'TC', 'MQ', 'GP', 'BL', 'MF', 'SR'],
    sources: ['one-earth-nt26', 'one-earth-eco-459', 'one-earth-eco-468', 'one-earth-eco-472', 'one-earth-eco-475', 'one-earth-eco-495', 'one-earth-eco-517'],
    status: 'authored',
  },
];
