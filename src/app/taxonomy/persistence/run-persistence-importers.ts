import { PersistedTaxonomyState, TaxonomyPersistenceDefinition } from '../contracts/taxonomy';

export interface WritableStorage extends Storage {}

export function persistencePrefix(definition: TaxonomyPersistenceDefinition): string {
  return `taxonomy.${definition.namespace}.v${definition.version}`;
}

export function runPersistenceImporters(
  definition: TaxonomyPersistenceDefinition | undefined,
  storage: WritableStorage,
  warn: (message: string) => void = console.warn,
): void {
  if (!definition?.legacyImporters?.length) return;
  const prefix = persistencePrefix(definition);
  const completionKey = `${prefix}.completed-importers`;
  let completed = new Set<string>();
  try {
    const value = JSON.parse(storage.getItem(completionKey) ?? '[]');
    if (Array.isArray(value))
      completed = new Set(value.filter((id): id is string => typeof id === 'string'));
  } catch {
    warn(`Ignored corrupt persistence importer state for "${definition.namespace}".`);
  }

  for (const importer of definition.legacyImporters) {
    if (completed.has(importer.id)) continue;
    try {
      const imported = importer.import(storage);
      if (imported) {
        for (const key of [
          'settings',
          'rings',
          'camera',
        ] as const satisfies readonly (keyof PersistedTaxonomyState)[]) {
          const destination = `${prefix}.${key}`;
          if (imported[key] !== undefined && storage.getItem(destination) === null) {
            storage.setItem(destination, JSON.stringify(imported[key]));
          }
        }
      }
    } catch (cause) {
      warn(
        `Legacy importer "${importer.id}" was ignored: ${cause instanceof Error ? cause.message : String(cause)}`,
      );
    }
    completed.add(importer.id);
    storage.setItem(completionKey, JSON.stringify([...completed]));
  }
}
