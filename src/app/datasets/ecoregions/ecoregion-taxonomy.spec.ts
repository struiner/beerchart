import {
  composeTaxonomyProfile,
  createTaxonomyIndexes,
  describeTaxonomyContract,
  projectHierarchy,
} from '../../taxonomy/testing/public-api';
import { describe, expect, it } from 'vitest';
import { ecoregionTaxonomy } from '.';
import { generatedBioregions } from './generated/bioregions.generated';
import { generatedEcoregions } from './generated/ecoregions.generated';
import { generatedRealms } from './generated/realms.generated';
import { generatedSubrealms } from './generated/subrealms.generated';
import { realmEnrichment } from './enrichment/realms';
import { subrealmEnrichment } from './enrichment/subrealms';
import { bioregionEnrichment } from './enrichment/bioregions';
import { ecoregionEnrichment } from './enrichment/ecoregions';
import { ecologicalSpecies } from './enrichment/species';
import { ecologicalCountries } from './enrichment/countries';
import { validateEcologicalEnrichment } from './enrichment/validate-enrichment';
import { coverageStateFor, enrichmentCoverage } from './enrichment/coverage-manifest';
import {
  biologicalRecords,
  canonicalTaxa,
  domainCoverageRecords,
  taxonOccurrences,
} from './enrichment/biota';
import { validateBiologicalRecords } from './enrichment/validate-biota';
import { ecoregionContentPartitionIds } from './content/ecoregion-content-provider';
import { ecoregionPartitionByTargetId } from './content/partition-ownership.generated';
import { livingCompositionPartitionByTaxonId } from './content/living-composition-ownership';
import { ecoregionSources } from './source/source-registry';
import {
  compatibleObservationTotal,
  type EcologicalObservation,
} from './enrichment/ecological-observations';

describeTaxonomyContract('Terrestrial ecoregions', ecoregionTaxonomy, {
  expectedEntries: 844,
  searchQueries: [
    {
      query: 'Eastern Himalayan',
      expectedEntryIds: ['ecoregion:306'],
    },
  ],
  profileTargets: [
    { kind: 'entry', id: 'ecoregion:686' },
    { kind: 'group', id: 'realm:western-eurasia' },
  ],
});

describe('One Earth full topology', () => {
  it('retains exact framework counts and unique external IDs', () => {
    expect(generatedRealms).toHaveLength(14);
    expect(generatedSubrealms).toHaveLength(53);
    expect(generatedBioregions).toHaveLength(185);
    expect(generatedEcoregions).toHaveLength(844);
    expect(new Set(generatedEcoregions.map(({ externalId }) => externalId)).size).toBe(844);
    expect(new Set(generatedBioregions.map(({ externalId }) => externalId)).size).toBe(185);
  });

  it('connects every generated record to a known parent', () => {
    const realmIds = new Set(generatedRealms.map(({ id }) => id));
    const subrealmIds = new Set(generatedSubrealms.map(({ id }) => id));
    const bioregionIds = new Set(generatedBioregions.map(({ id }) => id));

    for (const subrealm of generatedSubrealms) {
      expect(realmIds.has(subrealm.realmId)).toBe(true);
    }
    for (const bioregion of generatedBioregions) {
      expect(subrealmIds.has(bioregion.subrealmId)).toBe(true);
    }
    for (const ecoregion of generatedEcoregions) {
      expect(ecoregion.parentBioregionIds.length).toBeGreaterThan(0);
      expect(ecoregion.parentBioregionIds.every((id) => bioregionIds.has(id))).toBe(true);
    }
  });

  it('represents all 14 published biome identifiers without geometry payloads', () => {
    expect(new Set(generatedEcoregions.map(({ biomeId }) => biomeId)).size).toBe(14);
    for (const ecoregion of generatedEcoregions) {
      expect(ecoregion).not.toHaveProperty('geometry');
      expect(ecoregion).not.toHaveProperty('coordinates');
      expect(ecoregion).not.toHaveProperty('polygon');
    }
  });

  it('preserves the published cross-realm mangrove membership', () => {
    const mangrove = generatedEcoregions.find(({ externalId }) => externalId === '614');
    expect(mangrove?.parentBioregionIds).toEqual(['bioregion:na30', 'bioregion:nt28']);
    expect(mangrove?.realmIds).toEqual(['realm:central-america', 'realm:northern-america']);
  });
});

describe('ecological enrichment', () => {
  const records = [
    ...realmEnrichment,
    ...subrealmEnrichment,
    ...bioregionEnrichment,
    ...ecoregionEnrichment,
  ];
  const validTargetIds = new Set([
    ...generatedRealms.map(({ id }) => id),
    ...generatedSubrealms.map(({ id }) => id),
    ...generatedBioregions.map(({ id }) => id),
    ...generatedEcoregions.map(({ id }) => id),
  ]);
  const sourceIds = new Set(ecoregionSources.map(({ id }) => id));
  const biotaValidationInput = {
    sourceIds,
    publishedEcoregionIds: new Set(
      generatedEcoregions
        .filter(({ id }) => enrichmentCoverage[id] === 'published')
        .map(({ id }) => id),
    ),
    partitionIds: new Set(ecoregionContentPartitionIds),
    partitionByEcoregionId: ecoregionPartitionByTargetId,
    profilePartitionByTaxonId: livingCompositionPartitionByTaxonId,
  };

  it('validates the complete pilot branch without weakening canonical membership', () => {
    expect(
      validateEcologicalEnrichment({
        records,
        validTargetIds,
        sourceIds,
        species: ecologicalSpecies,
        countries: ecologicalCountries,
        requiredSummaryTargetIds: [
          'realm:indomalaya',
          'subrealm:indian-subcontinent',
          'bioregion:im5',
          'ecoregion:233',
          'ecoregion:302',
          'ecoregion:309',
        ],
      }),
    ).toEqual([]);
    expect(
      ecoregionTaxonomy.records.entries.find(({ id }) => id === 'ecoregion:309')?.parentGroupIds,
    ).toEqual(generatedEcoregions.find(({ id }) => id === 'ecoregion:309')?.parentBioregionIds);
  });

  it('tracks published realm coverage independently from lower-level record presence', () => {
    expect(Object.keys(enrichmentCoverage)).toHaveLength(80);
    expect(coverageStateFor('realm:indomalaya')).toBe('published');
    expect(coverageStateFor('ecoregion:309')).toBe('reviewed');
    expect(coverageStateFor('realm:antarctica')).toBe('published');
    expect(coverageStateFor('subrealm:greenland')).toBe('published');
    expect(coverageStateFor('bioregion:na1')).toBe('published');
    expect(coverageStateFor('ecoregion:417')).toBe('published');
    expect(coverageStateFor('ecoregion:418')).toBe('published');
    expect(coverageStateFor('ecoregion:615')).toBe('draft');
    expect(generatedRealms.every(({ id }) => coverageStateFor(id) !== 'unstarted')).toBe(true);
    expect(generatedRealms).toHaveLength(14);
    expect(generatedSubrealms).toHaveLength(53);
    expect(generatedBioregions).toHaveLength(185);
    expect(generatedEcoregions).toHaveLength(844);
  });

  it('rejects orphaned, duplicate, unsourced, unknown and invalid enrichment values', () => {
    const invalid = {
      targetId: 'ecoregion:not-real',
      summary: {
        value: 'Unsourced.',
        sourceIds: [],
        derivation: 'authored-summary' as const,
      },
      climate: {
        value: { character: 'Invalid.', annualPrecipitationMm: { min: 2, max: 1 } },
        sourceIds: ['missing-source'],
        derivation: 'source-value' as const,
      },
      characteristicSpeciesIds: ['species:not-real'],
      countryIds: ['ZZ'],
      sources: ['missing-source'],
      status: 'authored' as const,
    };
    const errors = validateEcologicalEnrichment({
      records: [invalid, invalid],
      validTargetIds,
      sourceIds,
      species: ecologicalSpecies,
      countries: ecologicalCountries,
    });
    expect(errors.some((error) => error.includes('Orphan'))).toBe(true);
    expect(errors.some((error) => error.includes('Duplicate'))).toBe(true);
    expect(errors.some((error) => error.includes('unsourced'))).toBe(true);
    expect(errors.some((error) => error.includes('invalid precipitation'))).toBe(true);
    expect(errors.some((error) => error.includes('unknown species'))).toBe(true);
    expect(errors.some((error) => error.includes('unknown country'))).toBe(true);
    expect(errors.some((error) => error.includes('unknown source'))).toBe(true);
  });

  it('aggregates observations only when their scientific bases are compatible', () => {
    const observation = {
      id: 'observation:a',
      ecoregionId: 'ecoregion:302',
      subjectTaxonId: 'species:chir-pine',
      metric: 'biomass',
      value: 10,
      unit: 'kg/ha',
      basis: 'dry-mass',
      spatialExtent: 'sample plot',
      observedDuring: '2025',
      method: 'destructive sample',
      sourceIds: ['one-earth-eco-302'],
    } satisfies EcologicalObservation;
    expect(
      compatibleObservationTotal([observation, { ...observation, id: 'observation:b' }]),
    ).toMatchObject({ value: 20, unit: 'kg/ha' });
    expect(
      compatibleObservationTotal([
        observation,
        { ...observation, id: 'observation:c', basis: 'carbon-mass' },
      ]),
    ).toBeNull();
  });

  it('publishes the pilot biota through explicit dependency and coverage contracts', () => {
    expect(
      validateBiologicalRecords({ records: biologicalRecords, ...biotaValidationInput }),
    ).toEqual([]);
    const pilotCoverages = domainCoverageRecords.filter(({ ecoregionId }) => ecoregionId === 'ecoregion:302');
    expect(pilotCoverages).toHaveLength(4);
    expect(
      pilotCoverages.every(
        ({ lifecycle, depth }) => lifecycle === 'published' && depth === 'representative',
      ),
    ).toBe(true);
    const pilotOccurrences = taxonOccurrences.filter(({ ecoregionId }) => ecoregionId === 'ecoregion:302');
    expect(pilotOccurrences.every(({ lifecycle }) => lifecycle === 'published')).toBe(true);
    expect(
      canonicalTaxa
        .filter(({ entityKind, profileOwnerPartitionId }) => entityKind === 'functional-group' && profileOwnerPartitionId === 'indomalaya')
        .map(({ id }) => id),
    ).toEqual([
      'functional-group:ectomycorrhizal-fungi',
      'functional-group:nitrogen-cycling-rhizosphere-bacteria',
    ]);
  });

  it('rejects orphan occurrences and duplicate canonical profiles', () => {
    const duplicate = canonicalTaxa[0]!;
    const orphan = { ...taxonOccurrences[0]!, id: 'occurrence:orphan', taxonId: 'species:missing' };
    const errors = validateBiologicalRecords({
      records: [...biologicalRecords, duplicate, orphan],
      ...biotaValidationInput,
    });
    expect(errors.some((error) => error.includes('Duplicated canonical taxon profile'))).toBe(true);
    expect(errors.some((error) => error.includes('orphan taxon'))).toBe(true);
  });

  it('keeps base profiles structural and loads sourced extensions by canonical partition', async () => {
    const indexes = createTaxonomyIndexes(ecoregionTaxonomy);
    const groupProfile = composeTaxonomyProfile({
      module: ecoregionTaxonomy,
      indexes,
      target: { kind: 'group', id: 'bioregion:im5' },
    });
    const entryProfile = composeTaxonomyProfile({
      module: ecoregionTaxonomy,
      indexes,
      target: { kind: 'entry', id: 'ecoregion:309' },
    });
    expect(groupProfile?.sections.some(({ id }) => id === 'summary')).toBe(false);
    expect(entryProfile?.sections.some(({ id }) => id === 'ecology')).toBe(false);
    expect(ecoregionTaxonomy.records.relatedEntities).toEqual([]);

    const provider = ecoregionTaxonomy.contentProvider!;
    expect(provider.resolvePartition({ kind: 'entry', id: 'ecoregion:309' })).toBe('indomalaya');
    const bundle = await provider.loadPartition('indomalaya');
    expect(bundle.profileExtensions?.['bioregion:im5']?.some(({ id }) => id === 'summary')).toBe(
      true,
    );
    expect(bundle.profileExtensions?.['ecoregion:309']?.some(({ id }) => id === 'ecology')).toBe(
      true,
    );
    expect(
      bundle.profileExtensions?.['ecoregion:309']?.some(({ id }) => id === 'enrichment-sources'),
    ).toBe(true);
    const composition = bundle.livingCompositions?.['ecoregion:302'];
    expect(composition?.coverage).toMatchObject({
      flora: 'published',
      fauna: 'published',
      fungi: 'published',
      microbiome: 'published',
    });
    const hierarchy = projectHierarchy({ definition: composition!.hierarchy });
    expect(Math.max(...hierarchy.nodes.map(({ depth }) => depth))).toBe(3);
    expect(hierarchy.nodes.filter(({ depth }) => depth === 1).map(({ title }) => title)).toEqual([
      'Fauna',
      'Flora',
      'Fungi',
      'Microbiome',
    ]);
    expect(bundle.relatedEntities?.map(({ id }) => id)).toEqual(
      expect.arrayContaining([
        'species:chir-pine',
        'species:himalayan-goral',
        'functional-group:ectomycorrhizal-fungi',
        'functional-group:nitrogen-cycling-rhizosphere-bacteria',
      ]),
    );
    expect(
      bundle.profileExtensions?.['functional-group:ectomycorrhizal-fungi']?.some(
        ({ id }) => id === 'canonical-summary',
      ),
    ).toBe(true);
    expect(provider.resolvePartition({ kind: 'related-entity', id: 'species:chir-pine' })).toBe(
      'indomalaya',
    );
    expect(provider.resolvePartition({ kind: 'entry', id: 'ecoregion:615' })).toBe(
      'southern-america',
    );
    const southernAmerica = await provider.loadPartition('southern-america');
    expect(
      southernAmerica.profileExtensions?.['ecoregion:615']?.some(({ id }) => id === 'summary'),
    ).toBe(true);
  });
});
