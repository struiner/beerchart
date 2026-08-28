import type { EcologicalEnrichment } from './ecological-enrichment';

export const realmEnrichment: readonly EcologicalEnrichment[] = [
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
];
