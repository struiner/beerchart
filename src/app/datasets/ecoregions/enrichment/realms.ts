import type { EcologicalEnrichment } from './ecological-enrichment';

function realm(id: string, summary: string, landscape: readonly string[]): EcologicalEnrichment {
  const sourceId = `one-earth-${id}`;
  return {
    targetId: `realm:${id}`,
    summary: { value: summary, sourceIds: [sourceId], derivation: 'authored-summary' },
    landscape: { value: landscape, sourceIds: [sourceId], derivation: 'authored-summary' },
    sources: [sourceId],
    status: 'authored',
  };
}

export const realmEnrichment: readonly EcologicalEnrichment[] = [
  realm(
    'afrotropics',
    'Afrotropics spans most of Africa south of the Sahara together with Madagascar, nearby Indian Ocean islands, and parts of the Arabian Peninsula. Its six subrealms encompass tropical forests, savannas, drylands, Mediterranean vegetation, mountains, coasts, and islands.',
    [
      'Congolian rainforests and forest-savannas',
      'Sudanian and East African savannas',
      'Karoo and Kalahari drylands',
      'Cape Mediterranean vegetation',
      'Madagascan and coastal forests',
    ],
  ),
  realm(
    'antarctica',
    'Antarctica comprises the ice-covered continent, the Antarctic Peninsula and Scotia Sea islands, and subantarctic Indian Ocean islands. Its limited ice-free land supports tundra and coastal breeding habitat, while surrounding sea ice and ocean systems sustain abundant marine life.',
    [
      'continental ice sheet',
      'coastal tundra',
      'seasonal sea ice',
      'rocky peninsula and archipelagos',
      'subantarctic islands',
    ],
  ),
  realm(
    'australasia',
    'Australasia joins Australia, New Zealand, New Guinea, eastern Indonesian islands, and southwest Pacific archipelagos in three subrealms. It ranges from continental deserts and tropical savannas to temperate forests, island rainforests, and globally significant coral-reef systems.',
    [
      'Australian interior deserts',
      'northern tropical savannas',
      'temperate coastal forests and grasslands',
      'Melanesian island rainforests',
      'coral reefs and adjacent seas',
    ],
  ),
  realm(
    'central-america',
    'Central America covers the tropical American isthmus and Caribbean islands in two subrealms. Its six bioregions combine moist, dry, pine, and coniferous forests with island ecosystems, mangroves, and flooded grasslands between the Pacific and Caribbean.',
    [
      'tropical isthmian forests',
      'Mexican dry and coniferous forests',
      'Caribbean islands',
      'mangroves and flooded grasslands',
      'subtropical Pacific islands',
    ],
  ),
  realm(
    'central-eurasia',
    'Central Eurasia forms the continental interior of the Palearctic from Iran and the Caspian basin through Central Asia. Five subrealms combine temperate steppe and deserts with the Tien Shan, Altai-Sayan, Zagros, and Elburz mountain forests and grasslands.',
    [
      'Central Asian deserts and semi-deserts',
      'Kazakh steppes',
      'Tien Shan and Pamir highlands',
      'Altai-Sayan forests',
      'Persian mountain woodlands',
    ],
  ),
  realm(
    'eastern-eurasia',
    'Eastern Eurasia extends across the eastern Palearctic from western Chinese deserts and the Tibetan Plateau to East Asian forests and the Japanese islands. Its six subrealms include alpine grasslands, steppe, desert, temperate forest, and island systems.',
    [
      'East Asian deserts',
      'Tibetan alpine meadows',
      'Mongolian grasslands and forest-steppe',
      'Chinese and Korean temperate forests',
      'Japanese island forests',
    ],
  ),
  {
    targetId: 'realm:indomalaya',
    summary: {
      value:
        'Indomalaya spans South and Southeast Asia across the Indian Subcontinent, Southeast Asian Forests, and Malaysia and Western Indonesia. Its landscapes range from Himalayan mountain systems and dry interiors to tropical rainforests, islands, and coastal mangroves.',
      sourceIds: ['one-earth-indomalaya'],
      derivation: 'authored-summary',
    },
    landscape: {
      value: [
        'Himalayan mountain arc',
        'continental tropical forests',
        'island rainforests',
        'coastal mangroves',
      ],
      sourceIds: ['one-earth-indomalaya'],
      derivation: 'authored-summary',
    },
    sources: ['one-earth-indomalaya'],
    status: 'authored',
  },
  realm(
    'northern-america',
    'Northern America spans southern Canada, the contiguous United States, and northern Mexico across six subrealms. Its 22 bioregions include eastern forests, southeastern savannas, the Great Plains, western mountains and deserts, Mexican drylands, and Pacific coastal forests.',
    [
      'eastern mixed forests',
      'southeastern savannas',
      'Great Plains grasslands',
      'Rocky Mountain forests and plateaus',
      'southwestern and Mexican drylands',
      'Pacific coastal forests',
    ],
  ),
  realm(
    'oceania',
    'Oceania consists of 11 island bioregions distributed across Polynesia, Micronesia, and Hawai‘i. Although its land area is small, its thousands of islands and vast surrounding waters contain tropical forests, dry forests, mangroves, wetlands, and exceptionally diverse marine ecosystems.',
    [
      'tropical oceanic islands',
      'rainforests and dry forests',
      'mangroves and coastal wetlands',
      'coral reefs',
      'vast pelagic waters',
    ],
  ),
  realm(
    'southern-america',
    'Southern America covers most of the Neotropical realm in five subrealms, from Amazonia and the Andes to the Cerrado, Atlantic forests, southern grasslands, and Caribbean-facing lowlands. Its landscapes span equatorial rainforest, savanna, high mountains, coastal desert, temperate grassland, and oceanic islands.',
    [
      'Amazon Basin rainforests',
      'Andes mountains and Pacific coast',
      'Cerrado and Atlantic forests',
      'southern grasslands and savannas',
      'coastal deserts and oceanic islands',
    ],
  ),
  realm(
    'southern-eurasia',
    'Southern Eurasia covers the southern Palearctic across North Africa and the Greater Arabian Peninsula. It is dominated by the Sahara and Arabian deserts, interrupted by Mediterranean woodlands, mountain systems, oases, the Nile wetlands, and coastal mangroves and salt marshes.',
    [
      'Sahara and Arabian deserts',
      'Mediterranean coastal woodlands',
      'mountain woodlands',
      'oases and flooded grasslands',
      'Nile wetlands and coastal salt marshes',
    ],
  ),
  realm(
    'subarctic-america',
    'Subarctic America covers most of Canada, Alaska, and Greenland in four subrealms. Ice, tundra, boreal forest, wetlands, coastal conifer forest, and Pacific ice fields form broad transitions from the Arctic to northern temperate latitudes.',
    [
      'Greenland ice and coastal tundra',
      'Canadian and Alaskan tundra',
      'Canadian boreal forests',
      'taiga lakes and wetlands',
      'North Pacific coastal forests and ice fields',
    ],
  ),
  realm(
    'subarctic-eurasia',
    'Subarctic Eurasia spans the Nordic countries and most of Russia across four northern Palearctic subrealms. Circumpolar tundra gives way to Scandinavian and Siberian boreal forests, mountain tundra, and the species-rich coastal forests and seas around Okhotsk and Bering.',
    [
      'Palearctic tundra',
      'Scandinavian boreal forests',
      'Siberian taiga',
      'mountain tundra',
      'Okhotsk and Bering coastal forests and seas',
    ],
  ),
  realm(
    'western-eurasia',
    'Western Eurasia covers most of Europe in five subrealms. Broad mixed forests and mountain systems meet the Pontic Steppe, Mediterranean woodlands and islands, and the ocean-influenced landscapes of the Anglo-Celtic Isles.',
    [
      'European mixed forests',
      'Alpine, Carpathian, and Balkan mountain forests',
      'Pontic Steppe',
      'Mediterranean woodlands and islands',
      'Anglo-Celtic coastal landscapes',
    ],
  ),
];
