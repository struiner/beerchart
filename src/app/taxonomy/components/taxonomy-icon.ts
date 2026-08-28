import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ResolvedIcon } from '../contracts/taxonomy';

@Component({
  selector: 'app-taxonomy-icon',
  template: `
    @if (spriteFrame(); as frame) {
      <svg
        [attr.viewBox]="frame.x + ' ' + frame.y + ' ' + frame.width + ' ' + frame.height"
        role="img"
        [attr.aria-label]="icon().accessibleLabel"
      >
        <title>{{ icon().accessibleLabel }}</title>
        <image
          [attr.href]="icon().value"
          x="0"
          y="0"
          [attr.width]="icon().sourceSize?.width ?? 1254"
          [attr.height]="icon().sourceSize?.height ?? 1254"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    } @else if (icon().kind === 'asset') {
      <img [src]="icon().value" [alt]="icon().accessibleLabel" />
    } @else {
      <span role="img" [attr.aria-label]="icon().accessibleLabel">{{ icon().value }}</span>
    }
  `,
  styles: `
    :host {
      display: inline-grid;
      width: 24px;
      height: 24px;
      flex: 0 0 24px;
    }
    svg,
    img {
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxonomyIcon {
  readonly icon = input.required<ResolvedIcon>();
  spriteFrame() {
    const icon = this.icon();
    return icon.kind === 'sprite' ? icon.frame : undefined;
  }
}
