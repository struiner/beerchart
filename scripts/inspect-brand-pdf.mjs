import { readFileSync, writeFileSync } from 'node:fs';
import { PDFParse } from 'pdf-parse';

const pdf = new PDFParse({ data: readFileSync('Extending Beer Taxonomy JSON Schema.pdf') });
const text = (await pdf.getText()).text;
await pdf.destroy();

const records = [];
const objectPattern = /\{\s*"id"\s*:\s*"(brand-[^"]+)"([\s\S]*?)\n\}/g;
for (const match of text.matchAll(objectPattern)) {
  const object = match[0];
  const field = (name) =>
    object.match(new RegExp(`"${name}"\\s*:\\s*(?:"([^"]*)"|(null))`))?.[1] ?? null;
  records.push({ id: field('id'), name: field('name'), linked: field('linkedTaxonomyId') });
}
const slug = (value) =>
  value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
const source = readFileSync('src/app/datasets/beer/data/entries.ts', 'utf8');
const entries = [
  ...source.matchAll(/"id"\s*:\s*"(style:[^"]+)"[\s\S]*?"title"\s*:\s*"([^"]+)"/g),
].map((match) => ({ id: match[1], title: match[2], slug: slug(match[2]) }));
const entrySlugs = new Set(entries.map((entry) => entry.slug));
const links = [...new Set(records.map((record) => record.linked).filter(Boolean))];
writeFileSync(
  'brand-pdf-summary.json',
  JSON.stringify(
    {
      records: records.length,
      withName: records.filter((record) => record.name).length,
      withLink: records.filter((record) => record.linked).length,
      uniqueIds: new Set(records.map((record) => record.id)).size,
      uniqueLinks: links.length,
      exactCurrentStyleLinks: links.filter((link) => entrySlugs.has(link)),
      unmatchedLinks: links.filter((link) => !entrySlugs.has(link)),
    },
    null,
    2,
  ),
);
