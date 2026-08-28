import type { SourceReference } from '../../../taxonomy/public-api';

export const ecoregionSources: readonly SourceReference[] = [
  {
    id: 'one-earth-bioregions-2023',
    title: 'One Earth Bioregions Framework',
    url: 'https://www.oneearth.org/bioregions-2023/',
  },
  {
    id: 'resolve-ecoregions-2017',
    title: 'RESOLVE Ecoregions 2017 attribute service',
    url: 'https://data-gis.unep-wcmc.org/server/rest/services/Bio-geographicalRegions/Resolve_Ecoregions/MapServer',
  },
  {
    id: 'one-earth-indomalaya',
    title: 'Indomalaya — Realm & Subrealms',
    publisher: 'One Earth',
    url: 'https://www.oneearth.org/realms/indomalaya/',
  },
  {
    id: 'one-earth-im5',
    title: 'Himalayan Mixed Forests & Grasslands (IM5)',
    publisher: 'One Earth',
    url: 'https://www.oneearth.org/bioregions/himalayan-mixed-forests-grasslands-im5/',
  },
  ...[
    ['233', 'Himalayan Subtropical Broadleaf Forests', 'himalayan-subtropical-broadleaf-forests'],
    ['302', 'Himalayan Subtropical Pine Forests', 'himalayan-subtropical-pine-forests'],
    [
      '309',
      'Eastern Himalayan Subalpine Conifer Forests',
      'eastern-himalayan-subalpine-conifer-forests',
    ],
    ['311', 'Terai-Duar Savanna and Grasslands', 'terai-duar-savanna-and-grasslands'],
  ].map(([id, title, slug]) => ({
    id: `one-earth-eco-${id}`,
    title: title!,
    publisher: 'One Earth',
    url: `https://www.oneearth.org/ecoregions/${slug}/`,
  })),
] as const;

export const ecoregionSourceById = new Map(ecoregionSources.map((source) => [source.id, source]));
