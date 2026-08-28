import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import type { Provider } from '@angular/core';

export const createAppConfig = (taxonomyProviders: readonly Provider[]): ApplicationConfig => ({
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    ...taxonomyProviders,
  ],
});
