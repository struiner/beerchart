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
        'New Zealand North Island Temperate Forests cover much of the North Island, from coastal lowlands to the volcanic plateau and central ranges. Podocarp-broadleaf and beech forest support an iconic suite of endemic birds including kiwi, kokako, kaka, and kereru.',
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
];
