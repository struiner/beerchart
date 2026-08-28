import { TestBed } from '@angular/core/testing';
import { expect, it } from 'vitest';
import { taxonomy } from '../../../../templates/taxonomy/minimal-taxonomy';
import { App } from '../../app';
import { AppStore } from '../../core/app.store';
import { provideTaxonomy } from '../public-api';
import { describeTaxonomyContract } from './public-api';

describeTaxonomyContract('Minimal template', taxonomy, {
  expectedEntries: 4,
  searchQueries: [{ query: 'Northern Alpha', expectedEntryIds: ['alpha-north'] }],
  profileTargets: [
    { kind: 'entry', id: 'alpha-north' },
    { kind: 'group', id: 'alpha' },
  ],
});

it('boots the minimal template through an Angular test composition boundary', async () => {
  await TestBed.configureTestingModule({
    imports: [App],
    providers: [provideTaxonomy(taxonomy)],
  }).compileComponents();
  const fixture = TestBed.createComponent(App);
  await fixture.whenStable();
  fixture.detectChanges();
  const store = TestBed.inject(AppStore);
  expect(store.module.meta.id).toBe('example-taxonomy');
  expect(store.positionedScene().nodes.some(({ entityId }) => entityId === 'alpha-north')).toBe(
    true,
  );
});
