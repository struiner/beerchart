export { defineTaxonomy } from './contracts/define-taxonomy';
export { provideTaxonomy } from './contracts/taxonomy-provider';
export { validateTaxonomyModule } from './validation/validate-taxonomy-module';

export type {
  FactPresentation,
  ProfileSectionViewModel,
  RelatedEntity,
  ResolvedIcon,
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
export type {
  TaxonomyValidationIssue,
  TaxonomyValidationResult,
  TaxonomyValidationResult as ValidationReport,
} from './validation/validate-taxonomy-module';
