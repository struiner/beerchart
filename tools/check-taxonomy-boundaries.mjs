import { readdirSync, readFileSync } from 'node:fs';
import { dirname, extname, join, relative, resolve, sep } from 'node:path';

const appRoot = join(process.cwd(), 'src', 'app');
const taxonomyRoot = join(appRoot, 'taxonomy');
const datasetsRoot = join(appRoot, 'datasets');
const compositionRoot = join(appRoot, 'application-taxonomy.ts');
const violations = [];

const importPattern = /(?:from\s+|import\s*\()(['"])([^'"]+)\1/g;

function inspect(directory) {
  for (const item of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, item.name);
    if (item.isDirectory()) inspect(path);
    else if (extname(path) === '.ts') {
      const source = readFileSync(path, 'utf8');
      const isGenericTaxonomy = path.startsWith(`${taxonomyRoot}${sep}`);
      const isDataset = path.startsWith(`${datasetsRoot}${sep}`);
      const isSpec = path.endsWith('.spec.ts');
      const imports = [...source.matchAll(importPattern)].map((match) => match[2]);
      const datasetImports = imports.filter((specifier) => specifier.includes('datasets/'));
      const importsCompatibility =
        /from\s+['"][^'"]*(?:compatibility|core\/(?:layout|beer-profile|taxonomy\.model))/.test(
          source,
        );

      if (isGenericTaxonomy && datasetImports.length) {
        violations.push(`${relative(process.cwd(), path)}: generic taxonomy imports a dataset`);
      }
      if (!isDataset && !isSpec && path !== compositionRoot && datasetImports.length) {
        violations.push(
          `${relative(process.cwd(), path)}: dataset selection bypasses application-taxonomy.ts`,
        );
      }
      if (isDataset) {
        const owner = relative(datasetsRoot, path).split(sep)[0];
        const importsAnotherDataset = imports.some((specifier) => {
          if (!specifier.startsWith('.')) return false;
          const target = resolve(dirname(path), specifier);
          return (
            target.startsWith(`${datasetsRoot}${sep}`) &&
            relative(datasetsRoot, target).split(sep)[0] !== owner
          );
        });
        if (
          importsAnotherDataset ||
          datasetImports.some((specifier) => !specifier.includes(`datasets/${owner}`))
        ) {
          violations.push(`${relative(process.cwd(), path)}: dataset imports another dataset`);
        }
        for (const specifier of imports.filter((value) => value.startsWith('.'))) {
          const target = resolve(dirname(path), specifier).replaceAll('\\', '/');
          if (!target.includes('/taxonomy/')) continue;
          const allowed = isSpec
            ? target.endsWith('/taxonomy/public-api') ||
              target.endsWith('/taxonomy/testing/public-api')
            : target.endsWith('/taxonomy/public-api');
          if (!allowed)
            violations.push(
              `${relative(process.cwd(), path)}: dataset deep-imports unsupported taxonomy internals`,
            );
        }
      }
      if (importsCompatibility) {
        violations.push(`${relative(process.cwd(), path)}: imports legacy compatibility code`);
      }
      if (!isDataset && /fact\.id\s*={2,3}\s*['"](?:origin|country|location)['"]/.test(source)) {
        violations.push(
          `${relative(process.cwd(), path)}: generic UI branches on a semantic fact ID`,
        );
      }
    }
  }
}

inspect(appRoot);
if (violations.length) {
  console.error('Taxonomy boundary violation:');
  violations.forEach((path) => console.error(`- ${path}`));
  process.exitCode = 1;
}
