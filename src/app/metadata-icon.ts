import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FactIcon } from './core/beer-profile';
@Component({
  selector: 'app-metadata-icon',
  template: `<svg viewBox="0 0 24 24" aria-hidden="true">
    @switch (name()) {
      @case ('color') {
        <path class="fill" d="M12 2C9 7 5.5 10.2 5.5 15a6.5 6.5 0 0 0 13 0C18.5 10.2 15 7 12 2Z" />
        <path d="M8.5 16.5a3.7 3.7 0 0 0 3.5 2" />
      }
      @case ('glass') {
        <path
          d="M6 3h12l-1.5 8.2A4.6 4.6 0 0 1 12 15a4.6 4.6 0 0 1-4.5-3.8L6 3Zm6 12v6m-4 0h8M7.2 9h9.6"
        />
      }
      @case ('fermentation') {
        <path d="M9 3h6m-5 0v5l-4.5 9a2.7 2.7 0 0 0 2.4 4h8.2a2.7 2.7 0 0 0 2.4-4L14 8V3M8 15h8" />
        <circle cx="11" cy="12" r="1" />
        <circle cx="14" cy="18" r="1" />
      }
      @case ('ingredients') {
        <path
          d="M12 21V8m0 9c-4 0-6-2-6-5 4 0 6 2 6 5Zm0-4c4 0 6-2 6-5-4 0-6 2-6 5Zm0-4C9 10 8 7 9.5 4c3 2 3.5 5 2.5 8Zm0-3c2.5-1 3.5-3.5 2.7-6"
        />
      }
      @case ('conditioning') {
        <path
          d="M8 2h8M8 22h8M9 2v4c0 2 3 3 3 6s-3 4-3 6v4m6-20v4c0 2-3 3-3 6s3 4 3 6v4M8 7h8m-8 10h8"
        />
      }
      @case ('description') {
        <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4V5Zm4 3h8M8 12h6" />
      }
    }
  </svg>`,
  styles: [
    `
      :host {
        display: inline-grid;
        place-items: center;
        width: 20px;
        height: 20px;
        flex: 0 0 20px;
        color: currentColor;
      }
      :host svg {
        width: 100%;
        height: 100%;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.65;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fill {
        fill: currentColor;
        fill-opacity: 0.18;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetadataIcon {
  readonly name = input.required<FactIcon>();
}
