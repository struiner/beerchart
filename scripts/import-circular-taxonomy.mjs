import { readFileSync, writeFileSync } from 'node:fs';
const source = readFileSync('beer-taxonomy-circular-metro-map.html', 'utf8');
const start = source.indexOf('const families = [');
const end = source.indexOf('\n      ];', start);
if (start < 0 || end < 0) throw new Error('Could not locate families dataset');
const literal = source.slice(start + 'const families = '.length, end + 8).trim().replace(/;$/, '');
const families = Function(`"use strict"; return (${literal})`)();
const slug = (value) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const nodes = [{id:'beer',parentId:null,title:'Beer',type:'root',order:0,family:'root',description:'The central interchange for the published beer-style map.'}];
families.forEach((family, familyIndex) => {
  const familyId = slug(family.label);
  nodes.push({id:familyId,parentId:'beer',title:family.label,type:family.key==='hybrid'?'fermentation-method':family.key,order:familyIndex+1,family:family.key});
  family.groups.forEach((group, groupIndex) => {
    const groupId = `${familyId}-${slug(group.label)}`;
    nodes.push({id:groupId,parentId:familyId,title:group.label,type:'category',order:groupIndex+1,family:family.key});
    group.styles.forEach((title, styleIndex) => nodes.push({id:`${groupId}-${slug(title)}`,parentId:groupId,title,type:'style',order:styleIndex+1,family:family.key}));
  });
});
const document = {schemaVersion:1,classification:'168 named entries · Brewers Association 2026 classification map',updated:'2026-08-26',nodes};
writeFileSync('src/assets/taxonomy.json', `${JSON.stringify(document,null,2)}\n`);
console.log(`Imported ${nodes.filter(node=>node.type==='style').length} styles in ${nodes.length} total nodes.`);
