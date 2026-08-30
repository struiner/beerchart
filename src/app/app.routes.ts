import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'atlas/:datasetId/:targetKind/:entityId',
    loadComponent: () =>
      import('./taxonomy/dashboard/taxonomy-dashboard').then(
        ({ TaxonomyDashboard }) => TaxonomyDashboard,
      ),
  },
];
