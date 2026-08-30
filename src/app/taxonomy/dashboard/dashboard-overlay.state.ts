import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DashboardOverlayState {
  readonly open = signal(false);
}
