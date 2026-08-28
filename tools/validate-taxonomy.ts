import { statSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { TaxonomyModule } from '../src/app/taxonomy/contracts/taxonomy';
import { validateTaxonomyModule } from '../src/app/taxonomy/validation/validate-taxonomy-module';

const argumentsList = process.argv.slice(2);
const valueAfter = (flag: string) => {
  const index = argumentsList.indexOf(flag);
  return index >= 0 ? argumentsList[index + 1] : undefined;
};
const moduleArgument = valueAfter('--module');
const strict = argumentsList.includes('--strict');

if (!moduleArgument) {
  console.error(
    'Usage: npm run taxonomy:validate -- --module <dataset-directory-or-index.ts> [--strict]',
  );
  process.exit(2);
}

async function main() {
  try {
    let modulePath = resolve(moduleArgument);
    if (statSync(modulePath).isDirectory()) modulePath = resolve(modulePath, 'index.ts');
    const loaded = (await import(pathToFileURL(modulePath).href)) as { taxonomy?: TaxonomyModule };
    if (!loaded.taxonomy)
      throw new Error('The module must export a standard named export: taxonomy.');

    const taxonomy = loaded.taxonomy;
    const report = validateTaxonomyModule(taxonomy);
    const errors = report.issues.filter(({ severity }) => severity === 'error');
    const warnings = report.issues.filter(({ severity }) => severity === 'warning');
    console.log(
      `${taxonomy.meta.title} ${taxonomy.meta.datasetVersion ?? taxonomy.meta.schemaVersion}\n`,
    );
    console.log(`${taxonomy.records.entries.length} entries`);
    console.log(`${taxonomy.records.groups.length} groups`);
    console.log(`${taxonomy.interpretation.dimensions.length} dimensions`);
    console.log(`${taxonomy.interpretation.facets.length} facets`);
    console.log(`${taxonomy.records.relatedEntities.length} related entities\n`);

    for (const severity of ['error', 'warning'] as const) {
      const issues = report.issues.filter((issue) => issue.severity === severity);
      const byPath = new Map<string, typeof issues>();
      for (const issue of issues) {
        const path = issue.path ?? 'module';
        byPath.set(path, [...(byPath.get(path) ?? []), issue]);
      }
      for (const [path, pathIssues] of byPath) {
        console.log(`${severity.toUpperCase()} ${path}`);
        for (const issue of pathIssues) console.log(`  ${issue.code}: ${issue.message}`);
      }
    }
    console.log(`${errors.length} errors`);
    console.log(`${warnings.length} warnings`);
    if (errors.length || (strict && warnings.length)) process.exitCode = 1;
  } catch (cause) {
    console.error(cause instanceof Error ? cause.message : String(cause));
    process.exitCode = 2;
  }
}

void main();
