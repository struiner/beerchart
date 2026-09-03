import type {
  EntityReference,
  ProfileSectionViewModel,
  TaxonomyContentBundle,
  TaxonomyContentProvider,
} from '../../../taxonomy/public-api';

interface PartitionSpell {
  readonly id: string;
  readonly facts: { readonly collectionId: string };
  readonly content: {
    readonly formula: string;
    readonly purpose: string;
    readonly practice: string;
    readonly proof: string;
    readonly consequence: string;
    readonly failure: string;
    readonly safeShedding: string;
    readonly counterplay: string;
    readonly mastery: string;
    readonly sourceMeta: string;
  };
}

const loaders: Readonly<Record<string, () => Promise<{ default: readonly PartitionSpell[] }>>> = {
  'fire-evocation': () => import('../generated/partitions/fire-evocation.generated.json'),
  'water-restoration': () => import('../generated/partitions/water-restoration.generated.json'),
  'air-divination': () => import('../generated/partitions/air-divination.generated.json'),
  'earth-enchantment': () => import('../generated/partitions/earth-enchantment.generated.json'),
  'bloom-conjuration': () => import('../generated/partitions/bloom-conjuration.generated.json'),
  'grave-abjuration': () => import('../generated/partitions/grave-abjuration.generated.json'),
  'star-alteration': () => import('../generated/partitions/star-alteration.generated.json'),
  'void-veiling': () => import('../generated/partitions/void-veiling.generated.json'),
  'fire-water-thermal-exchange': () =>
    import('../generated/partitions/fire-water-thermal-exchange.generated.json'),
  'air-earth-resonant-matter': () =>
    import('../generated/partitions/air-earth-resonant-matter.generated.json'),
  'bloom-grave-living-cycle': () =>
    import('../generated/partitions/bloom-grave-living-cycle.generated.json'),
  'star-void-precipice': () => import('../generated/partitions/star-void-precipice.generated.json'),
};

const foundationalStreamPartitions: Readonly<Record<string, string>> = {
  'stream:fire-evocation': 'fire-evocation',
  'stream:water-restoration': 'water-restoration',
  'stream:air-divination': 'air-divination',
  'stream:earth-enchantment': 'earth-enchantment',
  'stream:bloom-conjuration': 'bloom-conjuration',
  'stream:grave-abjuration': 'grave-abjuration',
  'stream:star-alteration': 'star-alteration',
  'stream:void-veiling': 'void-veiling',
};

const sectionsFor = (spell: PartitionSpell): readonly ProfileSectionViewModel[] => [
  {
    kind: 'markdown',
    id: 'purpose-and-formula',
    title: 'Purpose and formula',
    markdown: `${spell.content.purpose}\n\nFormula: ${spell.content.formula}`,
  },
  {
    kind: 'facts',
    id: 'practice-and-proof',
    title: 'Practice and proof',
    facts: [
      { id: 'proof', label: 'Proof gate', value: spell.content.proof },
      { id: 'practice', label: 'Practice', value: spell.content.practice },
    ],
  },
  {
    kind: 'facts',
    id: 'consequence-and-answer',
    title: 'Consequence and counterplay',
    facts: [
      { id: 'consequence', label: 'Consequence', value: spell.content.consequence },
      { id: 'failure', label: 'Failure', value: spell.content.failure },
      { id: 'safe-shedding', label: 'Safe shedding', value: spell.content.safeShedding },
      { id: 'counterplay', label: 'Counterplay', value: spell.content.counterplay },
      { id: 'mastery', label: 'Mastery', value: spell.content.mastery },
    ],
  },
];

const partitionFromGroup = (id: string): string | null => {
  if (id.startsWith('collection:')) return id.slice('collection:'.length);
  if (id.startsWith('shelf:')) return id.split(':')[1] ?? null;
  return foundationalStreamPartitions[id] ?? null;
};

export const panmagiconContentProvider: TaxonomyContentProvider = {
  resolvePartition(target: EntityReference): string | null {
    if (target.kind === 'entry') return target.id.split(':')[1] ?? null;
    if (target.kind === 'group') return partitionFromGroup(target.id);
    return null;
  },
  async loadPartition(partitionId: string): Promise<TaxonomyContentBundle> {
    const loader = loaders[partitionId];
    if (!loader) throw new Error(`Unknown Panmagicon content partition: ${partitionId}`);
    const spells = (await loader()).default;
    return {
      profileExtensions: Object.fromEntries(spells.map((spell) => [spell.id, sectionsFor(spell)])),
    };
  },
};
