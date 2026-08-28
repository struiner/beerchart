import type { EcologicalEnrichment } from './ecological-enrichment';

export const subrealmEnrichment: readonly EcologicalEnrichment[] = [
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
];
