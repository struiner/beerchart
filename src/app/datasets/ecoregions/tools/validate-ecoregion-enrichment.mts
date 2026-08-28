import { bioregionEnrichment } from '../enrichment/bioregions';
import { ecologicalCountries } from '../enrichment/countries';
import { ecoregionEnrichment } from '../enrichment/ecoregions';
import { realmEnrichment } from '../enrichment/realms';
import { ecologicalSpecies } from '../enrichment/species';
import { subrealmEnrichment } from '../enrichment/subrealms';
import { validateEcologicalEnrichment } from '../enrichment/validate-enrichment';
import { generatedBioregions } from '../generated/bioregions.generated';
import { generatedEcoregions } from '../generated/ecoregions.generated';
import { generatedRealms } from '../generated/realms.generated';
import { generatedSubrealms } from '../generated/subrealms.generated';
import { ecoregionSources } from '../source/source-registry';

const records = [
  ...realmEnrichment,
  ...subrealmEnrichment,
  ...bioregionEnrichment,
  ...ecoregionEnrichment,
];
const errors = validateEcologicalEnrichment({
  records,
  validTargetIds: new Set([
    ...generatedRealms.map(({ id }) => id),
    ...generatedSubrealms.map(({ id }) => id),
    ...generatedBioregions.map(({ id }) => id),
    ...generatedEcoregions.map(({ id }) => id),
  ]),
  sourceIds: new Set(ecoregionSources.map(({ id }) => id)),
  species: ecologicalSpecies,
  countries: ecologicalCountries,
  requiredSummaryTargetIds: [
    'realm:indomalaya',
    'subrealm:indian-subcontinent',
    'bioregion:im5',
    'ecoregion:233',
    'ecoregion:302',
    'ecoregion:309',
  ],
});

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified ${records.length} sourced ecological enrichment records.`);
}
