import { readdirSync, readFileSync } from 'node:fs';
import { extname, join, relative, sep } from 'node:path';

const appRoot = join(process.cwd(), 'src', 'app');
const taxonomyRoot = join(appRoot, 'taxonomy');
const violations = [];

function inspect(directory) {
  for (const item of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, item.name);
    if (item.isDirectory()) inspect(path);
    else if (extname(path) === '.ts' && !path.endsWith('.spec.ts')) {
      const source = readFileSync(path, 'utf8');
      const isGenericTaxonomy = path.startsWith(`${taxonomyRoot}${sep}`);
      const importsDataset = /from\s+['"][^'"]*datasets\/|import\s*\(['"][^'"]*datasets\//.test(
        source,
      );
      const importsCompatibility =
        /from\s+['"][^'"]*(?:compatibility|core\/(?:layout|beer-profile|taxonomy\.model))/.test(
          source,
        );
      if ((isGenericTaxonomy && importsDataset) || importsCompatibility) {
        violations.push(relative(process.cwd(), path));
      }
    }
  }
}

inspect(appRoot);
if (violations.length) {
  console.error('Forbidden dataset or legacy compatibility import:');
  violations.forEach((path) => console.error(`- ${path}`));
  process.exitCode = 1;
}
