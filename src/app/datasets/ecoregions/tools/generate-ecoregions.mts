import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const datasetRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = resolve(datasetRoot, 'source');
const generatedRoot = resolve(datasetRoot, 'generated');
const check = process.argv.includes('--check');
const manifest = JSON.parse(await readFile(resolve(sourceRoot, 'framework-manifest.json'), 'utf8'));
const hierarchySource = await readFile(resolve(sourceRoot, 'hierarchy.json'), 'utf8');
const hierarchy = JSON.parse(hierarchySource);
const checksum = `sha256:${createHash('sha256').update(hierarchySource).digest('hex')}`;

if (
  manifest.frameworkId !== 'one-earth-bioregions-2023' ||
  hierarchy.frameworkId !== manifest.frameworkId
)
  throw new Error('The input is not the One Earth Bioregions 2023 framework.');
if (checksum !== manifest.inputChecksum)
  throw new Error('Hierarchy checksum does not match the framework manifest.');
for (const [field, expected] of Object.entries(manifest.expected)) {
  const actual =
    field === 'biomes'
      ? new Set(hierarchy.ecoregions.map((entry: any) => entry.biome.id)).size
      : hierarchy[field].length;
  if (actual !== expected) throw new Error(`Expected ${expected} ${field}, received ${actual}.`);
}
if (/geometry|polygon|coordinates/i.test(hierarchySource))
  throw new Error('Polygon or geometry data is forbidden in structural source input.');

const slug = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
const bioregions = [...hierarchy.bioregions].sort((a, b) => a.id.localeCompare(b.id));
const realmId = (title: string) => `realm:${slug(title)}`;
const subrealmId = (title: string) => `subrealm:${slug(title)}`;
const bioregionId = (externalId: string) => `bioregion:${externalId.toLowerCase()}`;
const byBioregionId = new Map(bioregions.map((record) => [record.id, record]));

const realms = [...new Set(bioregions.map(({ realm }) => realm))]
  .sort()
  .map((title) => ({ id: realmId(title), title }));
const subrealms = [...new Set(bioregions.map(({ subrealm }) => subrealm))].sort().map((title) => {
  const parents = new Set(
    bioregions.filter(({ subrealm }) => subrealm === title).map(({ realm }) => realm),
  );
  if (parents.size !== 1) throw new Error(`Subrealm "${title}" has ${parents.size} realm parents.`);
  return { id: subrealmId(title), title, realmId: realmId([...parents][0]) };
});
const generatedBioregions = bioregions.map((record) => ({
  id: bioregionId(record.id),
  externalId: record.id,
  title: record.title,
  biogeographicRealm: record.biogeographicRealm,
  realmId: realmId(record.realm),
  subrealmId: subrealmId(record.subrealm),
}));
const generatedEcoregions = [...hierarchy.ecoregions]
  .sort((a, b) => Number(a.externalId) - Number(b.externalId))
  .map((record) => {
    if (!record.bioregionIds.length)
      throw new Error(`Ecoregion ${record.externalId} has no bioregion membership.`);
    const parents = record.bioregionIds.map((id: string) => byBioregionId.get(id));
    if (parents.some((parent: unknown) => !parent))
      throw new Error(`Ecoregion ${record.externalId} has an unknown bioregion.`);
    const realmIds = [...new Set(parents.map((parent: any) => realmId(parent.realm)))];
    return {
      id: `ecoregion:${record.externalId}`,
      externalId: record.externalId,
      title: record.title,
      parentBioregionIds: record.bioregionIds.map(bioregionId).sort(),
      realmIds: realmIds.sort(),
      subrealmIds: [...new Set(parents.map((parent: any) => subrealmId(parent.subrealm)))].sort(),
      biomeId: `biome:${record.biome.id}`,
      biomeTitle: record.biome.title,
      sourceIds: ['one-earth-bioregions-2023', 'resolve-ecoregions-2017'],
      status: 'documented',
    };
  });

const outputs = new Map([
  [
    'realms.generated.ts',
    `export const generatedRealms = ${JSON.stringify(realms, null, 2)} as const;\n`,
  ],
  [
    'subrealms.generated.ts',
    `export const generatedSubrealms = ${JSON.stringify(subrealms, null, 2)} as const;\n`,
  ],
  [
    'bioregions.generated.ts',
    `export const generatedBioregions = ${JSON.stringify(generatedBioregions, null, 2)} as const;\n`,
  ],
  [
    'ecoregions.generated.ts',
    `export const generatedEcoregions = ${JSON.stringify(generatedEcoregions, null, 2)} as const;\n`,
  ],
]);
if (!check) await mkdir(generatedRoot, { recursive: true });
for (const [name, content] of outputs) {
  const path = resolve(generatedRoot, name);
  if (check) {
    if ((await readFile(path, 'utf8')) !== content)
      throw new Error(`${name} is stale. Run the ecoregion generator.`);
  } else await writeFile(path, content);
}
console.log(
  `${check ? 'Verified' : 'Generated'} ${generatedEcoregions.length} deterministic ecoregion records.`,
);
