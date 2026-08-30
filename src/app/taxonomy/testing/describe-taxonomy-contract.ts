import { describe, expect, it } from 'vitest';
import type {
  DimensionalProjectionDefinition,
  RelatedEntity,
  TaxonomyEntry,
  TaxonomyModule,
} from '../contracts/taxonomy';
import { createTaxonomyIndexes } from '../indexes/create-taxonomy-indexes';
import { layoutCircularTaxonomy } from '../layout/circular-layout';
import { resolvePresentationScene } from '../presentation/resolve-presentation-scene';
import { resolvePresentationTheme } from '../presentation/resolve-presentation-theme';
import { composeTaxonomyProfile, type ProfileTarget } from '../profiles/compose-taxonomy-profile';
import { sanitizeMarkdown } from '../profiles/sanitize-markdown';
import { projectTaxonomy } from '../projection/project-taxonomy';
import { createTaxonomySearchIndex, searchTaxonomy } from '../search/taxonomy-search';
import { validateTaxonomyModule } from '../validation/validate-taxonomy-module';

export interface TaxonomyContractExpectations {
  readonly expectedEntries?: number;
  readonly searchQueries?: readonly {
    readonly query: string;
    readonly expectedEntryIds: readonly string[];
  }[];
  readonly profileTargets?: readonly ProfileTarget[];
}

export function describeTaxonomyContract<
  TEntry extends TaxonomyEntry,
  TRelated extends RelatedEntity,
>(
  name: string,
  module: TaxonomyModule<TEntry, TRelated>,
  expectations: TaxonomyContractExpectations = {},
): void {
  const indexes = createTaxonomyIndexes(module);
  const includedEntryIds = new Set(module.records.entries.map(({ id }) => id));
  const projection = () =>
    projectTaxonomy({
      module,
      indexes,
      includedEntryIds,
      ringOrder: (module.interpretation.projection as DimensionalProjectionDefinition)
        .defaultRingOrder,
    });

  describe(`${name} taxonomy contract`, () => {
    it('is runtime-valid with intact references and presentation tokens', () => {
      expect(validateTaxonomyModule(module)).toEqual({ valid: true, issues: [] });
      if (expectations.expectedEntries !== undefined)
        expect(module.records.entries).toHaveLength(expectations.expectedEntries);
    });

    it('projects deterministically to finite positioned geometry', () => {
      const firstProjection = projection();
      const secondProjection = projection();
      expect(secondProjection).toEqual(firstProjection);
      const positioned = layoutCircularTaxonomy(
        resolvePresentationScene({ module, projected: firstProjection }),
      );
      expect(positioned.warnings).toEqual([]);
      expect(positioned.nodes.length).toBeGreaterThan(0);
      for (const node of positioned.nodes)
        expect([node.x, node.y, node.layout.width, node.layout.height].every(Number.isFinite)).toBe(
          true,
        );
    });

    it('builds valid search targets and requested profiles', () => {
      const searchIndex = createTaxonomySearchIndex({ module, indexes });
      for (const query of expectations.searchQueries ?? []) {
        const entryIds = searchTaxonomy(searchIndex, query.query)
          .filter(({ targetType }) => targetType === 'entry')
          .map(({ targetId }) => targetId);
        expect(entryIds).toEqual(expect.arrayContaining([...query.expectedEntryIds]));
      }
      const targets =
        expectations.profileTargets ??
        module.records.entries.slice(0, 1).map(({ id }) => ({ kind: 'entry', id }) as const);
      for (const target of targets)
        expect(
          composeTaxonomyProfile({ module, indexes, target, includedEntryIds }),
        ).not.toBeNull();
    });

    it('resolves its theme, sanitizes content, and declares a valid persistence namespace', () => {
      expect(resolvePresentationTheme(module.presentation.theme).id).toBeTruthy();
      for (const section of module.content.about) {
        const sanitized = sanitizeMarkdown(section.markdown);
        expect(sanitized).not.toMatch(/<script|javascript:/i);
      }
      if (module.persistence) {
        expect(module.persistence.namespace).toMatch(/^[a-z][a-z0-9-]*$/);
        expect(module.persistence.version).toBeGreaterThan(0);
      }
    });
  });
}
