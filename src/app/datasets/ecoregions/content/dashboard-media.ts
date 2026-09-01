import type { DashboardMediaDefinition } from '../../../taxonomy/public-api';
import { generatedEcoregions } from '../generated/ecoregions.generated';

/**
 * Reviewed local dashboard artwork. Filenames retain the canonical external ecoregion ID so media
 * ownership remains stable when editorial lifecycle state changes.
 */
const illustratedExternalIds = [
  43, 49, 53, 62, 71, 72, 74, 118, 126, 127, 129, 130, 131, 233, 302, 309, 412, 413, 414, 415, 417,
  418, 421, 449, 450, 451, 452, 453, 454, 455, 458, 459, 461, 468, 470, 471, 472, 475, 478, 487,
  489, 494, 495, 500, 501, 502, 506, 514, 515, 517, 519, 521, 522, 527, 528, 530, 532, 533, 534,
  535, 537, 541, 543, 544, 545, 547, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 564, 568,
  573, 579, 599, 600, 604, 605, 607, 610, 612, 613, 614, 615, 617, 651, 663, 666, 670, 671, 672,
  691, 698, 699, 729, 774, 775, 776, 777, 778,
] as const;

const ecoregionByExternalId = new Map(
  generatedEcoregions.map((ecoregion) => [Number(ecoregion.externalId), ecoregion]),
);

export const ecoregionDashboardMedia: Readonly<Record<string, DashboardMediaDefinition>> =
  Object.fromEntries(
    illustratedExternalIds.map((externalId) => {
      const ecoregion = ecoregionByExternalId.get(externalId);
      if (!ecoregion) throw new Error(`Dashboard artwork has unknown ecoregion ID ${externalId}.`);
      return [
        ecoregion.id,
        {
          src: `/assets/ecoregions/ecoregion-${externalId}.png`,
          alt: `Interpretive landscape illustration of ${ecoregion.title}.`,
          caption: `An interpretive landscape impression of ${ecoregion.title}.`,
          role: 'interpretive',
          aspectRatio: '10:13',
          focalPoint: { x: 0.5, y: 0.5 },
        },
      ];
    }),
  );
