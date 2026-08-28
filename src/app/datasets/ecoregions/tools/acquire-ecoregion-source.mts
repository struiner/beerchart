import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const datasetRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = resolve(datasetRoot, 'source');
const hierarchyPath = resolve(sourceRoot, 'hierarchy.json');
const manifestPath = resolve(sourceRoot, 'framework-manifest.json');
const frameworkId = 'one-earth-bioregions-2023';
const subrealmAliases: Readonly<Record<string, string>> = { 'Alaskan Tundra': 'Alaska' };

const csvUrl =
  'https://datahub.io/climate-and-environment/bioregions-2023/_r/-/data/bioregions.csv';
const resolveUrl =
  'https://data-gis.unep-wcmc.org/server/rest/services/Bio-geographicalRegions/Resolve_Ecoregions/MapServer/0/query?where=1%3D1&outFields=eco_id%2Ceco_name%2Cbiome_num%2Cbiome_name%2Crealm%2Clicense&returnGeometry=false&f=json';

async function json(url: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
}
function parseCsv(source: string) {
  const [header, ...lines] = source.trim().split(/\r?\n/);
  const keys = header!.split(',');
  return lines.map((line) => {
    const values: string[] = [];
    let value = '',
      quoted = false;
    for (let index = 0; index <= line.length; index++) {
      const character = line[index] ?? ',';
      if (character === '"') quoted = !quoted;
      else if (character === ',' && !quoted) {
        values.push(value);
        value = '';
      } else value += character;
    }
    return Object.fromEntries(keys.map((key, index) => [key, values[index] ?? '']));
  });
}
async function mapConcurrent<T, R>(
  items: readonly T[],
  limit: number,
  task: (item: T) => Promise<R>,
) {
  const results = new Array<R>(items.length);
  let cursor = 0;
  await Promise.all(
    Array.from({ length: limit }, async () => {
      while (cursor < items.length) {
        const index = cursor++;
        results[index] = await task(items[index]!);
      }
    }),
  );
  return results;
}

const csvResponse = await fetch(csvUrl);
if (!csvResponse.ok) throw new Error(`${csvResponse.status} ${csvUrl}`);
const bioregions = parseCsv(await csvResponse.text()).map((row) => ({
  id: row['code']!,
  title: row['name']!,
  biogeographicRealm: row['biogeographic_realm']!,
  realm: row['realm']!,
  subrealm: subrealmAliases[row['subrealm']!] ?? row['subrealm']!,
}));
if (bioregions.length !== 185)
  throw new Error(`Expected 185 bioregions, received ${bioregions.length}.`);

const memberships = await mapConcurrent(bioregions, 12, async (bioregion) => {
  const document = await json(
    `https://www.oneearth.org/api/bioregion/${bioregion.id.toLowerCase()}/data.json`,
  );
  return (document.ecoregionSet?.items ?? []).map((entry: any) => ({
    externalId: String(entry.regionId).trim(),
    title: String(entry.heading ?? entry.title).trim(),
    bioregionId: bioregion.id,
  }));
});
const resolveDocument = await json(resolveUrl);
const biomeByExternalId = new Map(
  resolveDocument.features.map(({ attributes }: any) => [
    String(attributes.eco_id),
    { id: String(attributes.biome_num), title: String(attributes.biome_name) },
  ]),
);
const ecoregionById = new Map<
  string,
  {
    externalId: string;
    title: string;
    bioregionIds: Set<string>;
    biome: { id: string; title: string };
  }
>();
for (const membership of memberships.flat()) {
  const biome = biomeByExternalId.get(membership.externalId);
  if (!biome) throw new Error(`No RESOLVE biome for ecoregion ${membership.externalId}.`);
  const existing = ecoregionById.get(membership.externalId) ?? {
    externalId: membership.externalId,
    title: membership.title,
    bioregionIds: new Set<string>(),
    biome,
  };
  existing.bioregionIds.add(membership.bioregionId);
  ecoregionById.set(membership.externalId, existing);
}
if (ecoregionById.size !== 844)
  throw new Error(`Expected 844 One Earth ecoregions, received ${ecoregionById.size}.`);

const hierarchy = {
  frameworkId,
  realms: [...new Set(bioregions.map(({ realm }) => realm))].sort(),
  subrealms: [...new Set(bioregions.map(({ subrealm }) => subrealm))].sort(),
  bioregions: [...bioregions].sort((left, right) => left.id.localeCompare(right.id)),
  ecoregions: [...ecoregionById.values()]
    .map((entry) => ({
      externalId: entry.externalId,
      title: entry.title,
      bioregionIds: [...entry.bioregionIds].sort(),
      biome: entry.biome,
    }))
    .sort((left, right) => Number(left.externalId) - Number(right.externalId)),
};
const serialized = `${JSON.stringify(hierarchy, null, 2)}\n`;
const checksum = createHash('sha256').update(serialized).digest('hex');
const manifest = {
  frameworkId,
  sourceVersion: 'Bioregions 2023 / RESOLVE Ecoregions 2017',
  attribution:
    'One Earth Bioregions Framework, One Earth (2023), Los Angeles, CA; RESOLVE / UNEP-WCMC.',
  license:
    'Hierarchy: CC BY-NC 4.0. RESOLVE attribute service: CC BY 4.0. No polygon assets included.',
  importedAt: new Date().toISOString(),
  inputChecksum: `sha256:${checksum}`,
  acquisitionVersion: '1.0.0',
  derivations: [
    {
      field: 'subrealm',
      rule: 'Normalize the legacy CSV label "Alaskan Tundra" to the current One Earth subrealm "Alaska".',
      source: 'https://www.oneearth.org/bioregions-2023/',
    },
    {
      field: 'biome',
      rule: 'Join One Earth numeric ecoregion IDs to the RESOLVE attribute service eco_id.',
      source: resolveUrl,
    },
  ],
  expected: { realms: 14, subrealms: 53, bioregions: 185, ecoregions: 844, biomes: 14 },
  sources: [
    csvUrl,
    'https://www.oneearth.org/api/bioregions.json',
    'https://www.oneearth.org/api/bioregion/{id}/data.json',
    resolveUrl,
  ],
};
await mkdir(sourceRoot, { recursive: true });
await writeFile(hierarchyPath, serialized);
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(
  `Acquired ${hierarchy.realms.length} realms, ${hierarchy.subrealms.length} subrealms, ${hierarchy.bioregions.length} bioregions, and ${hierarchy.ecoregions.length} ecoregions.`,
);
