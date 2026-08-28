import {
  BadgeViewModel,
  ProfileSectionViewModel,
  RelatedEntity,
  ResolvedIcon,
  TaxonomyEntry,
  TaxonomyModule,
} from '../contracts/taxonomy';
import { TaxonomyIndexes } from '../indexes/create-taxonomy-indexes';
import { sanitizeMarkdown } from './sanitize-markdown';

export type ProfileTarget =
  | { readonly kind: 'entry'; readonly id: string }
  | { readonly kind: 'group'; readonly id: string }
  | { readonly kind: 'dimension-value'; readonly dimensionId: string; readonly valueId: string }
  | { readonly kind: 'related-entity'; readonly id: string };
/** Canonical profiles follow record identity; projected profiles follow one visible branch path. */
export type ProfileScope =
  | { readonly kind: 'canonical'; readonly entityId: string }
  | { readonly kind: 'projected'; readonly instanceId: string };
export interface ComposedTaxonomyProfile {
  readonly target: ProfileTarget;
  readonly scope?: ProfileScope;
  readonly title: string;
  readonly icon?: ResolvedIcon;
  readonly badges?: readonly BadgeViewModel[];
  readonly sections: readonly ProfileSectionViewModel[];
}
const nonEmpty = (section: ProfileSectionViewModel) =>
  section.kind === 'facts'
    ? section.facts.length > 0
    : section.kind === 'entity-list' || section.kind === 'related-entities'
      ? section.items.length > 0
      : section.kind === 'sources'
        ? section.sources.length > 0
        : section.markdown.trim().length > 0;

export function composeTaxonomyProfile<
  TEntry extends TaxonomyEntry,
  TRelated extends RelatedEntity,
>(input: {
  readonly module: TaxonomyModule<TEntry, TRelated>;
  readonly indexes: TaxonomyIndexes<TEntry, TRelated>;
  readonly target: ProfileTarget;
  readonly scope?: ProfileScope;
  readonly includedEntryIds?: ReadonlySet<string>;
}): ComposedTaxonomyProfile | null {
  const item = (entry: TEntry) => {
    const tile = input.module.presentation.entryTile(entry);
    return {
      id: entry.id,
      title: tile.title,
      description: tile.description ?? entry.description,
      icon: tile.icon,
    };
  };
  if (input.target.kind === 'entry') {
    const entry = input.indexes.entryById.get(input.target.id);
    if (!entry) return null;
    const tile = input.module.presentation.entryTile(entry);
    const related = (input.indexes.relatedEntityIdsByEntryId.get(entry.id) ?? []).flatMap((id) => {
      const value = input.indexes.relatedEntityById.get(id);
      return value ? [value] : [];
    });
    return {
      target: input.target,
      scope: input.scope,
      title: entry.title,
      icon: tile.icon,
      badges: tile.badges,
      sections: input.module.interpretation.profiles
        .entrySections(entry, related)
        .map((section) =>
          section.kind === 'markdown'
            ? { ...section, markdown: sanitizeMarkdown(section.markdown) }
            : section,
        )
        .filter(nonEmpty),
    };
  }
  if (input.target.kind === 'group') {
    const group = input.indexes.groupById.get(input.target.id);
    if (!group) return null;
    const items = (input.indexes.descendantEntryIdsByGroupId.get(group.id) ?? [])
      .filter((id) => !input.includedEntryIds || input.includedEntryIds.has(id))
      .flatMap((id) => {
        const entry = input.indexes.entryById.get(id);
        return entry ? [item(entry)] : [];
      });
    const descendantEntries = items.flatMap(({ id }) => {
      const entry = input.indexes.entryById.get(id);
      return entry ? [entry] : [];
    });
    const sections: ProfileSectionViewModel[] = [
      ...(input.module.interpretation.profiles.groupSections?.(group, descendantEntries) ?? []),
      {
        kind: 'entity-list',
        id: 'entries',
        title: input.module.vocabulary.entryPlural,
        entityKind: 'entry',
        items,
      },
    ];
    return {
      target: input.target,
      scope: input.scope,
      title: group.title,
      sections: sections.filter(nonEmpty),
    };
  }
  if (input.target.kind === 'dimension-value') {
    const target = input.target;
    const dimension = input.module.interpretation.dimensions.find(
      ({ id }) => id === target.dimensionId,
    );
    if (!dimension) return null;
    const entries = input.module.records.entries.filter(
      (entry) =>
        (!input.includedEntryIds || input.includedEntryIds.has(entry.id)) &&
        dimension.values(entry, { locale: 'en' }).some(({ id }) => id === target.valueId),
    );
    const title = entries.length
      ? (dimension.values(entries[0]!, { locale: 'en' }).find(({ id }) => id === target.valueId)
          ?.label ?? target.valueId)
      : target.valueId;
    const sections: ProfileSectionViewModel[] = [
      {
        kind: 'entity-list',
        id: 'entries',
        title: input.module.vocabulary.entryPlural,
        entityKind: 'entry',
        items: entries.map(item),
      },
    ];
    return { target: input.target, scope: input.scope, title, sections: sections.filter(nonEmpty) };
  }
  const related = input.indexes.relatedEntityById.get(input.target.id);
  if (!related) return null;
  const items = (input.indexes.entryIdsByRelatedEntityId.get(related.id) ?? []).flatMap((id) => {
    const entry = input.indexes.entryById.get(id);
    return entry ? [item(entry)] : [];
  });
  const sections: ProfileSectionViewModel[] = [
    {
      kind: 'entity-list',
      id: 'entries',
      title: input.module.vocabulary.entryPlural,
      entityKind: 'entry',
      items,
    },
  ];
  return {
    target: input.target,
    scope: input.scope,
    title: related.title,
    icon: input.module.presentation.relatedEntityTile(related).icon,
    badges: input.module.presentation.relatedEntityTile(related).badges,
    sections: sections.filter(nonEmpty),
  };
}
