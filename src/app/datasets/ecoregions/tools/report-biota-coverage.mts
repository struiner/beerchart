import {
  coverages,
  occurrences,
  records,
  taxa,
  validationErrors,
} from './biota-command-support.mts';

const lifecycleStates = ['unstarted', 'draft', 'reviewed', 'published'] as const;
const domains = ['flora', 'fauna', 'fungi', 'microbiome'] as const;
console.log('Biological records by domain and lifecycle');
console.table(
  domains.map((domain) => ({
    domain,
    ...Object.fromEntries(
      lifecycleStates.map((state) => [
        state,
        records.filter(
          (record) => 'domain' in record && record.domain === domain && record.lifecycle === state,
        ).length,
      ]),
    ),
    coverageDepth:
      coverages.find(
        ({ domain: value, lifecycle }) => value === domain && lifecycle === 'published',
      )?.depth ?? 'none',
  })),
);
console.log(`Canonical taxa: ${taxa.length}; occurrences: ${occurrences.length}.`);
const errors = validationErrors();
console.log(`Validation issues: ${errors.length}.`);
for (const error of errors) console.log(`- ${error}`);
const emptyDomains = domains.filter(
  (domain) =>
    !occurrences.some(
      ({ domain: value, lifecycle }) => value === domain && lifecycle === 'published',
    ),
);
console.log(`Domains with no published records: ${emptyDomains.join(', ') || 'none'}.`);
console.log('Published observations by metric and unit: none (no compatible reviewed study yet).');
