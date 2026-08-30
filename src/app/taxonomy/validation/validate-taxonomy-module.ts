import { RelatedEntity, TaxonomyEntry, TaxonomyModule } from '../contracts/taxonomy';
import { validateHierarchyProjection } from '../projection/project-hierarchy';

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

  const dashboard = module.presentation.dashboard;
  if (module.contentProvider) {
    if (typeof module.contentProvider.resolvePartition !== 'function')
      error('invalid-content-resolver', 'Content provider must define resolvePartition().');
    if (typeof module.contentProvider.loadPartition !== 'function')
      error('invalid-content-loader', 'Content provider must define loadPartition().');
  }
  if (dashboard) {
    if (!dashboard.targetKinds.length)
      error('empty-dashboard-targets', 'Dashboard must declare at least one target kind.');
    if (!dashboard.actionLabel.trim())
      error('missing-dashboard-action', 'Dashboard action label must not be empty.');
    duplicateIds('dashboard section', dashboard.sections);
    const widgetIds = new Set<string>();
    for (const section of dashboard.sections) {
      if (!section.widgets.length)
        error('empty-dashboard-section', `Dashboard section "${section.id}" has no widgets.`);
      for (const widget of section.widgets) {
        if (widgetIds.has(widget.id))
          error('duplicate-dashboard-widget', `Duplicate dashboard widget ID "${widget.id}".`);
        widgetIds.add(widget.id);
        if (widget.kind !== 'media') continue;
        const media = [
          ...Object.values(widget.mediaByEntityId ?? {}),
          ...(widget.fallback ? [widget.fallback] : []),
        ];
        if (!media.length)
          error('empty-media-widget', `Media widget "${widget.id}" has no media or fallback.`);
        for (const item of media) {
          if (!/^\d+(?:\.\d+)?:\d+(?:\.\d+)?$/.test(item.aspectRatio))
            error(
              'invalid-media-aspect-ratio',
              `Media widget "${widget.id}" has invalid aspect ratio "${item.aspectRatio}".`,
            );
          if (item.src && /^(?:javascript|data:text\/html):/i.test(item.src))
            error('unsafe-media-source', `Media widget "${widget.id}" has an unsafe source.`);
          if (!item.alt.trim())
            error('missing-media-alt', `Media widget "${widget.id}" has no alternative text.`);
        }
      }
    }
  }

  const groupIds = new Set(module.records.groups.map(({ id }) => id));
  const entryIds = new Set(module.records.entries.map(({ id }) => id));
  const dimensions = new Set(module.interpretation.dimensions.map(({ id }) => id));
  const theme = module.presentation.theme;
  const safeColor = (value: string) => /^#[0-9a-f]{6}([0-9a-f]{2})?$/i.test(value);
  if (theme?.visualTokens) {
    for (const [id, color] of Object.entries(theme.visualTokens)) {
      if (!/^[a-z][a-z0-9-]*$/.test(id))
        error('invalid-visual-token', `Visual token "${id}" is not a safe identifier.`);
      if (!safeColor(color))
        error('invalid-theme-color', `Visual token "${id}" has invalid color "${color}".`);
    }
  }
  if (theme) {
    for (const [id, value] of Object.entries(theme.geometry)) {
      if (!Number.isFinite(value) || value < 0)
        error('invalid-theme-geometry', `Theme geometry "${id}" must be a non-negative number.`);
    }
    for (const [id, texture] of Object.entries(theme.textures ?? {})) {
      if ('opacity' in texture && (texture.opacity < 0 || texture.opacity > 1))
        error('invalid-texture-opacity', `Texture "${id}" opacity must be between zero and one.`);
      if (texture.kind === 'grain' && texture.scale <= 0)
        error('invalid-texture-scale', `Texture "${id}" scale must be positive.`);
      if (texture.kind === 'lines' && texture.spacing <= 0)
        error('invalid-texture-spacing', `Texture "${id}" spacing must be positive.`);
      if (texture.kind === 'asset' && !texture.assetId)
        error('missing-texture-asset', `Texture "${id}" has no asset reference.`);
    }
    for (const [role, font] of Object.entries(theme.typography)) {
      if (!font.family.trim())
        error('missing-font-reference', `Theme typography role "${role}" has no font reference.`);
    }
  }
  const availableVisualTokens = new Set([
    ...Object.keys(theme?.tokens ?? {}),
    ...Object.keys(theme?.visualTokens ?? {}),
  ]);
  for (const token of Object.values(module.presentation.layout?.branchColors ?? {})) {
    if (!availableVisualTokens.has(token))
      error('missing-visual-token', `Branch visual token "${token}" is not declared by the theme.`);
  }

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
  const projection = module.interpretation.projection;
  if (projection.kind === 'hierarchical') {
    for (const issue of validateHierarchyProjection(projection).warnings)
      error(issue.code, issue.message);
  } else {
    for (const dimensionId of projection.allowedDimensionIds) {
      if (!dimensions.has(dimensionId)) {
        error(
          'unknown-projection-dimension',
          `Projection allows unknown dimension "${dimensionId}".`,
        );
      }
    }
    for (const dimensionId of projection.defaultRingOrder) {
      if (!dimensions.has(dimensionId)) {
        error(
          'unknown-default-dimension',
          `Default rings reference unknown dimension "${dimensionId}".`,
        );
      }
    }
    if (new Set(projection.defaultRingOrder).size !== projection.defaultRingOrder.length) {
      error('duplicate-default-dimension', 'Default ring dimensions must be unique.');
    }
    if (
      projection.maximumRingCount !== undefined &&
      projection.defaultRingOrder.length > projection.maximumRingCount
    ) {
      error('too-many-default-rings', 'Default ring count exceeds maximumRingCount.');
    }
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
      if (section.kind === 'facts') {
        for (const fact of section.facts) {
          const tone =
            fact.presentation?.variant === 'stamp' || fact.presentation?.variant === 'highlight'
              ? fact.presentation.tone
              : undefined;
          if (tone && !availableVisualTokens.has(tone))
            error(
              'missing-fact-visual-token',
              `Fact "${fact.id}" references undeclared visual token "${tone}".`,
            );
        }
      }
    }
  }

  return { valid: !issues.some(({ severity }) => severity === 'error'), issues };
}
