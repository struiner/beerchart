import { bootstrapApplication } from '@angular/platform-browser';
import { createAppConfig } from './app/app.config';
import { App } from './app/app';
import { resolveActiveTaxonomyProviders } from './app/taxonomy-module.provider';

resolveActiveTaxonomyProviders()
  .then((providers) => bootstrapApplication(App, createAppConfig(providers)))
  .catch((err) => console.error(err));
