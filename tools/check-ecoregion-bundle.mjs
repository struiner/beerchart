import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const output = join(process.cwd(), 'dist', 'beer-taxonomy-atlas', 'browser');
const budget = JSON.parse(
  readFileSync(
    join(process.cwd(), 'src', 'app', 'datasets', 'ecoregions', 'enrichment', 'bundle-budget.json'),
    'utf8',
  ),
);
const javascript = readdirSync(output)
  .filter((name) => name.endsWith('.js'))
  .map((name) => ({ name, text: readFileSync(join(output, name), 'utf8') }));
const matching = (marker) => javascript.filter(({ text }) => text.includes(marker));
const indexHtml = readFileSync(join(output, 'index.html'), 'utf8');
const initialNames = new Set([
  ...[...indexHtml.matchAll(/rel="modulepreload" href="([^"]+\.js)"/g)].map((match) => match[1]),
  ...[...indexHtml.matchAll(/<script src="([^"]+\.js)" type="module"/g)].map((match) => match[1]),
]);
const initial = javascript.filter(({ name }) => initialNames.has(name));
const initialBytes = initial.reduce(
  (total, { name }) => total + statSync(join(output, name)).size,
  0,
);
const initialText = initial.map(({ text }) => text).join('\n');
const topology = matching(budget.topologyMarker);
const content = matching(budget.contentMarker);
const contentPartitions = javascript.filter(
  ({ name, text }) =>
    name !== 'main.js' && !name.startsWith('main-') && text.includes('profileExtensions'),
);
if (topology.length !== 1)
  throw new Error(`Expected one ecoregion topology chunk, found ${topology.length}.`);
if (content.length !== 1)
  throw new Error(
    `Expected the approved Indomalaya marker in one content chunk, found ${content.length}.`,
  );

const name = topology[0].name;
const bytes = statSync(join(output, name)).size;
const growth = bytes - budget.structuralBaselineBytes;
const format = (value) => `${(value / 1024).toFixed(1)} KiB`;
if (initialBytes > budget.maximumInitialBytes)
  throw new Error(
    `Initial application runtime exceeds ${format(budget.maximumInitialBytes)} (${format(initialBytes)}).`,
  );
if (initialBytes > budget.initialWarningBytes)
  console.warn(
    `Initial application runtime ${format(initialBytes)} exceeds the ${format(budget.initialWarningBytes)} reserve target.`,
  );
if (initialText.includes(budget.dashboardRuntimeMarker))
  throw new Error('Initial runtime contains the dashboard implementation marker.');
if (initialText.includes(budget.hierarchyRuntimeMarker))
  throw new Error('Initial runtime contains the hierarchy widget implementation marker.');
if (matching(budget.dashboardRuntimeMarker).length !== 1)
  throw new Error('Dashboard runtime marker must resolve to exactly one lazy chunk.');
if (matching(budget.hierarchyRuntimeMarker).length !== 1)
  throw new Error('Hierarchy runtime marker must resolve to exactly one lazy chunk.');
console.log(
  `Initial application runtime: ${format(initialBytes)} (${format(budget.maximumInitialBytes - initialBytes)} headroom).`,
);
console.log(
  `Ecoregion lazy chunk ${name}: ${format(bytes)} (${growth >= 0 ? '+' : ''}${format(growth)} from structural baseline).`,
);
if (bytes > budget.maximumEagerBytes)
  throw new Error(
    `Ecoregion eager chunk exceeds ${format(budget.maximumEagerBytes)}; split enrichment by realm before adding records.`,
  );

for (const partition of contentPartitions) {
  const partitionBytes = statSync(join(output, partition.name)).size;
  if (partitionBytes > budget.maximumPartitionBytes)
    throw new Error(
      `Ecoregion content chunk ${partition.name} exceeds ${format(budget.maximumPartitionBytes)}.`,
    );
}
const largest = contentPartitions
  .map(({ name: partitionName }) => ({
    name: partitionName,
    bytes: statSync(join(output, partitionName)).size,
  }))
  .sort((left, right) => right.bytes - left.bytes)[0];
console.log(
  `Verified ${contentPartitions.length} content chunks; largest is ${largest.name} at ${format(largest.bytes)}.`,
);
