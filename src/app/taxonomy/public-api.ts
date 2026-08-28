export { defineTaxonomy } from './contracts/define-taxonomy';
export { provideTaxonomy, provideTaxonomyCatalog } from './contracts/taxonomy-provider';
export { validateTaxonomyModule } from './validation/validate-taxonomy-module';

export type {
  FactPresentation,
  ProfileSectionViewModel,
  RelatedEntity,
  ResolvedIcon,
  SourceReference,
  TaxonomyContent,
  TaxonomyContentSection,
  TaxonomyDimension,
  TaxonomyEntry,
  TaxonomyFacet,
  TaxonomyGroup,
  TaxonomyMeta,
  TaxonomyModule,
  TaxonomyLegacyImporter,
  TaxonomyPersistenceDefinition,
  TaxonomyPresentation,
  TaxonomyProfileDefinition,
  TaxonomyThemePreset as TaxonomyTheme,
  TaxonomyVocabulary,
} from './contracts/taxonomy';
export type { TaxonomyCatalogItem } from './contracts/taxonomy-provider';
export type {
  TaxonomyValidationIssue,
  TaxonomyValidationResult,
  TaxonomyValidationResult as ValidationReport,
} from './validation/validate-taxonomy-module';
