import {
  BadgeViewModel,
  LabelOrientation,
  ResolvedIcon,
  RingRadiusPolicy,
} from '../contracts/taxonomy';
import { ProjectedEntityType } from '../projection/project-taxonomy';

export interface PresentationLayoutToken {
  readonly shape: 'circle' | 'pill' | 'tile';
  readonly width: number;
  readonly height: number;
  readonly priority: number;
}

export interface PresentedNode {
  readonly instanceId: string;
  readonly entityId: string;
  readonly kind: ProjectedEntityType;
  readonly parentInstanceId: string | null;
  readonly path: readonly string[];
  readonly depth: number;
  readonly title: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly ariaLabel: string;
  readonly icon?: ResolvedIcon;
  readonly badges: readonly BadgeViewModel[];
  readonly visualToken: string;
  readonly labelOrientation: LabelOrientation;
  readonly layout: PresentationLayoutToken;
}

export interface PresentedEdge {
  readonly id: string;
  readonly parentInstanceId: string;
  readonly childInstanceId: string;
  readonly visualToken: string;
}

export interface LegendItemViewModel {
  readonly id: string;
  readonly label: string;
  readonly visualToken: string;
  readonly icon?: ResolvedIcon;
}

export interface PresentationScene {
  readonly nodes: readonly PresentedNode[];
  readonly edges: readonly PresentedEdge[];
  readonly legend: readonly LegendItemViewModel[];
  readonly radiusPolicy: RingRadiusPolicy;
  readonly warnings: readonly {
    readonly code: string;
    readonly message: string;
    readonly entityId?: string;
  }[];
}
