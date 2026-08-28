import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ComposedTaxonomyProfile } from '../profiles/compose-taxonomy-profile';
import { ProfileTarget } from '../profiles/compose-taxonomy-profile';
import { TaxonomyIcon } from './taxonomy-icon';

@Component({
  selector: 'app-generic-taxonomy-profile',
  imports: [TaxonomyIcon],
  templateUrl: './taxonomy-profile.html',
  styleUrl: './taxonomy-profile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericTaxonomyProfile {
  readonly profile = input.required<ComposedTaxonomyProfile>();
  readonly selectTarget = output<ProfileTarget>();
  safeUrl(value?: string) {
    return value && /^https?:\/\//i.test(value) ? value : null;
  }
  googleSearchUrl(title: string) {
    return `https://www.google.com/search?q=${encodeURIComponent(title)}`;
  }
}
