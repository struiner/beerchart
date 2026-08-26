import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AtlasSprite } from './core/data/icon-atlas';
@Component({
  selector: 'app-atlas-icon',
  template: `<svg [attr.viewBox]="viewBox()" role="img" [attr.aria-label]="title()">
    <title>{{ title() }}</title>
    <image
      [attr.href]="imageUrl()"
      x="0"
      y="0"
      width="1254"
      height="1254"
      preserveAspectRatio="xMidYMid meet"
    />
  </svg>`,
  styles: [
    `
      :host {
        display: inline-grid;
        width: var(--atlas-icon-size, 22px);
        height: var(--atlas-icon-size, 22px);
        flex: 0 0 var(--atlas-icon-size, 22px);
        vertical-align: middle;
      }
      :host svg {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        filter: drop-shadow(0 1px 1px #0008);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtlasIcon {
  readonly sprite = input.required<AtlasSprite>();
  readonly title = input.required<string>();
  viewBox() {
    const frame = this.sprite().frame;
    return `${frame.x} ${frame.y} ${frame.w} ${frame.h}`;
  }
  imageUrl() {
    return `/${this.sprite().sheetId === 'beer-taxonomy-icons-core' ? 'beer-taxonomy-icons-core.png' : 'beer-taxonomy-icons-properties.png'}`;
  }
}
