import { RelatedEntity, TaxonomyEntry, TaxonomyModule } from '../contracts/taxonomy';

export type ValidationSeverity = 'error' | 'warning';

export interface TaxonomyValidationIssue {
  readonly severity: ValidationSeverity;
  readonly code: string;
  readonly message: string;
  readonly path?: string;
}

export interface TaxonomyValidationResult {
  readonly valid: boolean;
  readonly issues: readonly TaxonomyValidationIssue[];
}

export function validateTaxonomyModule<
  TEntry extends TaxonomyEntry,
  TRelated extends RelatedEntity,
>(module: TaxonomyModule<TEntry, TRelated>): TaxonomyValidationResult {
  const issues: TaxonomyValidationIssue[] = [];
  const error = (code: string, message: string, path?: string) =>
    issues.push({ severity: 'error', code, message, path });
  const duplicateIds = (label: string, records: readonly { id: string }[]) => {
    const seen = new Set<string>();
    records.forEach((record, index) => {
      if (!record.id) error('missing-id', `${label} has no ID.`, `${label}[${index}]`);
      else if (seen.has(record.id)) error('duplicate-id', `Duplicate ${label} ID "${record.id}".`);
      seen.add(record.id);
    });
  };

  duplicateIds('group', module.records.groups);
  duplicateIds('entry', module.records.entries);
  duplicateIds('related entity', module.records.relatedEntities);
  duplicateIds('dimension', module.interpretation.dimensions);
  duplicateIds('facet', module.interpretation.facets);

  const groupIds = new Set(module.records.groups.map(({ id }) => id));
  const entryIds = new Set(module.records.entries.map(({ id }) => id));
  const dimensions = new Set(module.interpretation.dimensions.map(({ id }) => id));

  for (const group of module.records.groups) {
    if (group.parentGroupId && !groupIds.has(group.parentGroupId)) {
      error(
        'unknown-group-parent',
        `Group "${group.id}" references unknown parent "${group.parentGroupId}".`,
      );
    }
    const visited = new Set<string>();
    let current: typeof group | undefined = group;
    while (current?.parentGroupId) {
      if (visited.has(current.id)) {
        error('group-cycle', `Group hierarchy contains a cycle at "${current.id}".`);
        break;
      }
      visited.add(current.id);
      current = module.records.groups.find(({ id }) => id === current?.parentGroupId);
    }
  }

  for (const entry of module.records.entries) {
    for (const groupId of entry.parentGroupIds) {
      if (!groupIds.has(groupId)) {
        error('unknown-entry-group', `Entry "${entry.id}" references unknown group "${groupId}".`);
      }
    }
  }
  for (const entity of module.records.relatedEntities) {
    for (const entryId of entity.linkedEntryIds) {
      if (!entryIds.has(entryId)) {
        error(
          'unknown-related-entry',
          `Related entity "${entity.id}" references unknown entry "${entryId}".`,
        );
      }
    }
  }
  for (const dimensionId of module.interpretation.projection.allowedDimensionIds) {
    if (!dimensions.has(dimensionId)) {
      error(
        'unknown-projection-dimension',
        `Projection allows unknown dimension "${dimensionId}".`,
      );
    }
  }
  for (const dimensionId of module.interpretation.projection.defaultRingOrder) {
    if (!dimensions.has(dimensionId)) {
      error(
        'unknown-default-dimension',
        `Default rings reference unknown dimension "${dimensionId}".`,
      );
    }
  }
  if (
    new Set(module.interpretation.projection.defaultRingOrder).size !==
    module.interpretation.projection.defaultRingOrder.length
  ) {
    error('duplicate-default-dimension', 'Default ring dimensions must be unique.');
  }
  if (
    module.interpretation.projection.maximumRingCount !== undefined &&
    module.interpretation.projection.defaultRingOrder.length >
      module.interpretation.projection.maximumRingCount
  ) {
    error('too-many-default-rings', 'Default ring count exceeds maximumRingCount.');
  }

  const context = { locale: 'en' };
  for (const dimension of module.interpretation.dimensions) {
    for (const entry of module.records.entries) {
      try {
        const values = dimension.values(entry, context);
        if (dimension.cardinality === 'single' && values.length > 1) {
          error(
            'dimension-cardinality',
            `Dimension "${dimension.id}" returned multiple values for entry "${entry.id}".`,
          );
        }
        if (!values.length && dimension.missingValuePolicy === 'reject') {
          error(
            'missing-dimension-value',
            `Dimension "${dimension.id}" rejected a missing value for entry "${entry.id}".`,
          );
        }
      } catch (cause) {
        error(
          'dimension-failed',
          `Dimension "${dimension.id}" failed for entry "${entry.id}": ${cause instanceof Error ? cause.message : String(cause)}`,
        );
      }
    }
  }

  const searchIds = new Set<string>();
  const relatedIds = new Set(module.records.relatedEntities.map(({ id }) => id));
  for (const document of module.interpretation.search.documents(
    module.records.entries,
    module.records.relatedEntities,
  )) {
    if (searchIds.has(document.id))
      error('duplicate-search-document', `Duplicate search document ID "${document.id}".`);
    searchIds.add(document.id);
    const resolves =
      (document.targetType === 'entry' && entryIds.has(document.targetId)) ||
      (document.targetType === 'group' && groupIds.has(document.targetId)) ||
      (document.targetType === 'related-entity' && relatedIds.has(document.targetId)) ||
      document.targetType === 'facet-value';
    if (!resolves)
      error('unknown-search-target', `Search document "${document.id}" has an unknown target.`);
  }

  for (const entry of module.records.entries) {
    const related = module.records.relatedEntities.filter((entity) =>
      entity.linkedEntryIds.includes(entry.id),
    );
    const sectionIds = new Set<string>();
    for (const section of module.interpretation.profiles.entrySections(entry, related)) {
      if (sectionIds.has(section.id))
        error(
          'duplicate-profile-section',
          `Profile for "${entry.id}" repeats section "${section.id}".`,
        );
      sectionIds.add(section.id);
    }
  }

  return { valid: !issues.some(({ severity }) => severity === 'error'), issues };
}
