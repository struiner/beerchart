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
    climate: {
      value: {
        character:
          'Tropical maritime with strong orographic rainfall; windward slopes 2,000–3,000 mm, leeward 800–1,200 mm; mean annual 24–26°C; hurricane-prone June–November.',
        annualPrecipitationMm: { min: 800, max: 3000 },
      },
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
    characteristicSpeciesIds: [
      'species:cuban-trogon',
      'species:bee-hummingbird',
      'species:cuban-hutia',
      'species:cuban-solenodon',
      'species:cuban-crocodile',
    ],
    countryIds: ['CU'],
    sources: ['one-earth-eco-459', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:468',
    summary: {
      value:
        'Hispaniolan Moist Forests span the central mountain ranges of Haiti and the Dominican Republic, including the Cordillera Central, Sierra de Bahoruco, and Massif de la Hotte. This ecoregion supports the Caribbean\'s highest peak (Pico Duarte, 3,098 m) and extraordinary amphibian and reptile endemism.',
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
    climate: {
      value: {
        character:
          'Tropical montane with extreme orographic gradient; windward 2,500–4,000 mm, leeward 800–1,200 mm; temperatures 24–28°C lowlands, 6–18°C above 2,000 m; hurricane exposure.',
        annualPrecipitationMm: { min: 800, max: 4000 },
      },
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
      'species:hispaniolan-hutia',
      'species:hispaniolan-parrot',
      'species:ridgeway-hawk',
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
    climate: {
      value: {
        character:
          'Tropical maritime with extreme orographic rainfall; Blue Mountains 3,000–5,000 mm, rain shadow 1,000–1,500 mm; mean annual 18–27°C decreasing with elevation; hurricane-prone.',
        annualPrecipitationMm: { min: 1000, max: 5000 },
      },
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
    characteristicSpeciesIds: [
      'species:jamaican-tody',
      'species:jamaican-blackbird',
      'species:black-billed-parrot',
      'species:yellow-billed-parrot',
      'species:jamaican-boa',
    ],
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
    climate: {
      value: {
        character:
          'Tropical maritime with trade winds; windward 2,500–4,000 mm, leeward 1,000–1,500 mm; mean annual 25–27°C; hurricane alley August–October.',
        annualPrecipitationMm: { min: 1000, max: 4000 },
      },
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
    characteristicSpeciesIds: [
      'species:imperial-parrot',
      'species:red-necked-parrot',
      'species:forest-thrush',
      'species:lesser-antillean-bullfinch',
      'species:montserrat-oriole',
    ],
    countryIds: ['VC', 'KN', 'AI', 'VG', 'AG', 'DM', 'MF', 'BL', 'SX', 'BQ'],
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
    climate: {
      value: {
        character:
          'Tropical wet with strong orographic gradient; Luquillo 3,500–4,500 mm, south coast 800–1,200 mm; mean annual 22–26°C; trade winds and hurricane exposure.',
        annualPrecipitationMm: { min: 800, max: 4500 },
      },
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
    characteristicSpeciesIds: [
      'species:puerto-rican-parrot',
      'species:coqui-frog',
      'species:el-yunque-anole',
      'species:puerto-rican-tody',
      'species:puerto-rican-boa',
    ],
    countryIds: ['PR'],
    sources: ['one-earth-eco-495', 'one-earth-nt26'],
    status: 'authored',
  },
  {
    targetId: 'ecoregion:517',
    summary: {
      value:
        'Windward Islands Moist Forests span the southern Lesser Antilles from Martinique to Grenada. These volcanic islands support lush moist forests on windward slopes, with some of the Caribbean\'s highest rainfall and most intact montane forests, particularly on Dominica and Saint Lucia.',
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
    climate: {
      value: {
        character:
          'Tropical maritime with extreme orographic rainfall; windward 3,000–6,000 mm, leeward 1,500–2,500 mm; mean annual 24–27°C; hurricane and volcanic activity.',
        annualPrecipitationMm: { min: 1500, max: 6000 },
      },
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
    characteristicSpeciesIds: [
      'species:imperial-parrot',
      'species:saint-lucia-parrot',
      'species:dominican-trembler',
      'species:martinique-oriole',
      'species:grenada-dove',
    ],
    countryIds: ['MQ', 'LC', 'VC', 'GD', 'DM'],
    sources: ['one-earth-eco-517', 'one-earth-nt26'],
    status: 'authored',
  },
];
