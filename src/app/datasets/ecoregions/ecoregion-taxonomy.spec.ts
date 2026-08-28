import {
  composeTaxonomyProfile,
  createTaxonomyIndexes,
  describeTaxonomyContract,
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
import { ecoregionSources } from './source/source-registry';

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

  it('renders sourced group and entry profiles with related ecological entities', () => {
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
    expect(groupProfile?.sections.some(({ id }) => id === 'summary')).toBe(true);
    expect(groupProfile?.sections.some(({ id }) => id === 'ecological-references')).toBe(true);
    expect(entryProfile?.sections.some(({ id }) => id === 'ecology')).toBe(true);
    expect(entryProfile?.sections.some(({ id }) => id === 'enrichment-sources')).toBe(true);
    expect(
      ecoregionTaxonomy.records.relatedEntities.some(({ id }) => id === 'species:red-panda'),
    ).toBe(true);
  });
});
