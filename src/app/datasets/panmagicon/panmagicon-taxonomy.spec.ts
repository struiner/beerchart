import { describe, expect, it } from 'vitest';
import { describeTaxonomyContract } from '../../taxonomy/testing/public-api';
import { aspects, composites, schools } from './source/canon';
import manifest from './generated/manifest.generated.json';
import coverage from './generated/coverage.generated.json';
import { panmagiconTaxonomy } from './panmagicon-taxonomy';

describeTaxonomyContract('Panmagicon', panmagiconTaxonomy, {
  expectedEntries: 600,
  searchQueries: [
    {
      query: 'Spark Dart',
      expectedEntryIds: ['spell:fire-evocation:f01'],
    },
    {
      query: 'P01',
      expectedEntryIds: ['spell:star-void-precipice:p01'],
    },
  ],
  profileTargets: [
    { kind: 'entry', id: 'spell:star-void-precipice:p01' },
    { kind: 'group', id: 'stream:fire-evocation' },
    { kind: 'group', id: 'composite:star-void' },
  ],
});

describe('Panmagicon canon import', () => {
  it('retains the complete canonical matrix and authored baseline', () => {
    expect(aspects).toHaveLength(8);
    expect(schools).toHaveLength(8);
    expect(manifest.streams).toHaveLength(64);
    expect(composites).toHaveLength(4);
    expect(manifest.collections).toHaveLength(12);
    expect(manifest.spells).toHaveLength(600);
    expect(coverage.spells).toMatchObject({ authored: 600, planned: 4600 });
  });

  it('has ten spells on every shelf in every collection and exact calculated loads', () => {
    for (const collection of manifest.collections) {
      const rows = manifest.spells.filter((row) => row[2] === collection.id.slice(11));
      expect(rows).toHaveLength(50);
      for (let shelf = 0; shelf < 5; shelf += 1)
        expect(rows.filter((row) => row[3] === shelf)).toHaveLength(10);
      for (const row of rows)
        expect((row[6] as number[]).reduce((sum, value) => sum + value, 0)).toBe(row[7]);
    }
  });

  it('loads only the requested collection folio and preserves source prose', async () => {
    const provider = panmagiconTaxonomy.contentProvider!;
    expect(provider.resolvePartition({ kind: 'entry', id: 'spell:fire-evocation:f01' })).toBe(
      'fire-evocation',
    );
    const bundle = await provider.loadPartition('fire-evocation');
    expect(Object.keys(bundle.profileExtensions ?? {})).toHaveLength(50);
    const sections = bundle.profileExtensions?.['spell:fire-evocation:f01'];
    expect(sections?.find(({ id }) => id === 'purpose-and-formula')).toMatchObject({
      kind: 'markdown',
      title: 'Purpose and formula',
    });
    expect(sections?.find(({ id }) => id === 'consequence-and-answer')).toMatchObject({
      kind: 'facts',
      title: 'Consequence and counterplay',
    });
  });

  it('keeps every unauthored stream explicit without inventing a collection', () => {
    const defined = manifest.streams.filter(({ status }) => status === 'defined');
    expect(defined).toHaveLength(56);
    expect(defined.every((stream) => !('collectionId' in stream))).toBe(true);
  });
});
