import type { TaxonomyEntry } from '../../../taxonomy/public-api';

export const PANMAGICON_SHELVES = [
  'Lessons',
  'Practical Workings',
  'Expert Formulae',
  'Rites',
  'Wonders',
] as const;

export type PanmagiconShelf = (typeof PANMAGICON_SHELVES)[number];
export type AuthorshipStatus = 'authored' | 'defined' | 'planned';

export interface PanmagiconProvenance {
  readonly document: string;
  readonly collectionId?: string;
  readonly originalId?: string;
  readonly location: string;
}

export interface TensionProfile {
  readonly threads: number;
  readonly turns: number;
  readonly knots: number;
  readonly span: number;
  readonly hold: number;
  readonly fineness: number;
  readonly agency: number;
  readonly contradiction: number;
}

export interface PanmagiconSpellFacts {
  readonly originalId: string;
  readonly collectionId: string;
  readonly collectionTitle: string;
  readonly collectionType: 'foundational' | 'composite';
  readonly shelf: PanmagiconShelf;
  readonly shelfPosition: number;
  readonly aspectIds: readonly string[];
  readonly schoolIds: readonly string[];
  readonly streamIds: readonly string[];
  readonly compositeId?: string;
  readonly functionTag: string;
  readonly doctrine?: string;
  readonly carrier?: string;
  readonly target?: string;
  readonly scale?: string;
  readonly tension: TensionProfile;
  readonly sourceLoad: number;
  readonly calculatedLoad: number;
  readonly provenance: PanmagiconProvenance;
}

export interface PanmagiconSpell extends TaxonomyEntry<PanmagiconSpellFacts> {}

export interface AspectRecord {
  readonly id: string;
  readonly name: string;
  readonly kind: 'Element' | 'Mystery';
  readonly principle: string;
  readonly temperament: string;
  readonly trace: string;
  readonly oppositeId: string;
  readonly color: string;
  readonly provenance: PanmagiconProvenance;
}

export interface SchoolRecord {
  readonly id: string;
  readonly name: string;
  readonly operation: string;
  readonly remainder: string;
  readonly inverseId: string;
  readonly provenance: PanmagiconProvenance;
}

export interface StreamRecord {
  readonly id: string;
  readonly aspectId: string;
  readonly schoolId: string;
  readonly name: string;
  readonly description: string;
  readonly consequence: string;
  readonly status: AuthorshipStatus;
  readonly collectionId?: string;
  readonly provenance: PanmagiconProvenance;
}

export interface CompositeDomainRecord {
  readonly id: string;
  readonly name: string;
  readonly aspectIds: readonly string[];
  readonly collectionId: string;
  readonly equalExpression: string;
  readonly firstDominantExpression: string;
  readonly secondDominantExpression: string;
  readonly status: 'authored';
  readonly provenance: PanmagiconProvenance;
}

export interface SpellCollectionRecord {
  readonly id: string;
  readonly name: string;
  readonly type: 'foundational' | 'composite';
  readonly streamId?: string;
  readonly compositeId?: string;
  readonly spellIds: readonly string[];
  readonly expectedSpellCount: 50;
  readonly actualSpellCount: number;
  readonly sourceDocument: string;
  readonly status: 'authored';
}
