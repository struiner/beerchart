export const ecologicalEditorialRules = {
  summary: {
    minimumCharacters: 100,
    maximumCharacters: 600,
    minimumSentences: 2,
    maximumSentences: 3,
  },
  characteristicSpecies: { minimum: 3, maximum: 8 },
  controlledValues: {
    coverageStates: ['unstarted', 'draft', 'reviewed', 'published'],
    derivations: ['authored-summary', 'source-value', 'calculated'],
    recordStatuses: ['authored', 'derived'],
  },
} as const;

export const normalizedEditorialProse = (value: string) =>
  value
    .toLocaleLowerCase('en')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
