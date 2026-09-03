import { RelatedEntity, TaxonomyEntry, TaxonomyGroup, TaxonomyModule } from '../contracts/taxonomy';

export interface TaxonomyIndexes<TEntry, TRelated> {
  readonly entryById: ReadonlyMap<string, TEntry>;
  readonly groupById: ReadonlyMap<string, TaxonomyGroup>;
  readonly relatedEntityById: ReadonlyMap<string, TRelated>;
  readonly childGroupIdsByParentId: ReadonlyMap<string, readonly string[]>;
  readonly directEntryIdsByGroupId: ReadonlyMap<string, readonly string[]>;
  readonly descendantGroupIdsByGroupId: ReadonlyMap<string, readonly string[]>;
  readonly descendantEntryIdsByGroupId: ReadonlyMap<string, readonly string[]>;
  readonly relatedEntityIdsByEntryId: ReadonlyMap<string, readonly string[]>;
  readonly entryIdsByRelatedEntityId: ReadonlyMap<string, readonly string[]>;
  readonly groupIdsByRelatedEntityId: ReadonlyMap<string, readonly string[]>;
}

const append = (map: Map<string, string[]>, key: string, value: string) =>
  map.set(key, [...(map.get(key) ?? []), value]);

export function createTaxonomyIndexes<TEntry extends TaxonomyEntry, TRelated extends RelatedEntity>(
  module: TaxonomyModule<TEntry, TRelated>,
): TaxonomyIndexes<TEntry, TRelated> {
  const entryById = new Map(module.records.entries.map((entry) => [entry.id, entry]));
  const groupById = new Map(module.records.groups.map((group) => [group.id, group]));
  const relatedEntityById = new Map(
    module.records.relatedEntities.map((entity) => [entity.id, entity]),
  );
  const childGroupIdsByParentId = new Map<string, string[]>();
  const directEntryIdsByGroupId = new Map<string, string[]>();
  const relatedEntityIdsByEntryId = new Map<string, string[]>();
  const entryIdsByRelatedEntityId = new Map<string, string[]>();
  const groupIdsByRelatedEntityId = new Map<string, string[]>();

  module.records.groups.forEach((group) => {
    if (group.parentGroupId) append(childGroupIdsByParentId, group.parentGroupId, group.id);
  });
  module.records.entries.forEach((entry) =>
    entry.parentGroupIds.forEach((groupId) => append(directEntryIdsByGroupId, groupId, entry.id)),
  );
  module.records.relatedEntities.forEach((entity) => {
    entryIdsByRelatedEntityId.set(entity.id, [...entity.linkedEntryIds]);
    groupIdsByRelatedEntityId.set(entity.id, [...(entity.linkedGroupIds ?? [])]);
    entity.linkedEntryIds.forEach((entryId) =>
      append(relatedEntityIdsByEntryId, entryId, entity.id),
    );
  });

  const descendantGroupIdsByGroupId = new Map<string, readonly string[]>();
  const descendantEntryIdsByGroupId = new Map<string, readonly string[]>();
  const resolve = (groupId: string): readonly string[] => {
    const cached = descendantGroupIdsByGroupId.get(groupId);
    if (cached) return cached;
    const descendants = (childGroupIdsByParentId.get(groupId) ?? []).flatMap((childId) => [
      childId,
      ...resolve(childId),
    ]);
    descendantGroupIdsByGroupId.set(groupId, descendants);
    return descendants;
  };
  module.records.groups.forEach(({ id }) => {
    const groupIds = [id, ...resolve(id)];
    descendantEntryIdsByGroupId.set(id, [
      ...new Set(groupIds.flatMap((groupId) => directEntryIdsByGroupId.get(groupId) ?? [])),
    ]);
  });

  return {
    entryById,
    groupById,
    relatedEntityById,
    childGroupIdsByParentId,
    directEntryIdsByGroupId,
    descendantGroupIdsByGroupId,
    descendantEntryIdsByGroupId,
    relatedEntityIdsByEntryId,
    entryIdsByRelatedEntityId,
    groupIdsByRelatedEntityId,
  };
}
