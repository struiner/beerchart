import { describeTaxonomyContract } from '../../taxonomy/testing/public-api';
import { describe, expect, it } from 'vitest';
import { ecoregionTaxonomy } from '.';
import { generatedBioregions } from './generated/bioregions.generated';
import { generatedEcoregions } from './generated/ecoregions.generated';
import { generatedRealms } from './generated/realms.generated';
import { generatedSubrealms } from './generated/subrealms.generated';

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
