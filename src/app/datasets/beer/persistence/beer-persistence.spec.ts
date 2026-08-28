import { describe, expect, it, vi } from 'vitest';
import { persistencePrefix, runPersistenceImporters } from '../../../taxonomy/testing/public-api';
import { beerPersistence } from './beer-persistence';

class MemoryStorage implements Storage {
  private readonly values = new Map<string, string>();
  get length() {
    return this.values.size;
  }
  clear() {
    this.values.clear();
  }
  getItem(key: string) {
    return this.values.get(key) ?? null;
  }
  key(index: number) {
    return [...this.values.keys()][index] ?? null;
  }
  removeItem(key: string) {
    this.values.delete(key);
  }
  setItem(key: string, value: string) {
    this.values.set(key, value);
  }
}

describe('beer persistence compatibility', () => {
  it('imports legacy state once without overwriting current state', () => {
    const storage = new MemoryStorage();
    const prefix = persistencePrefix(beerPersistence);
    storage.setItem('beer-taxonomy.settings.v1', JSON.stringify({ labels: false }));
    storage.setItem(
      'beer-taxonomy.rings.v1',
      JSON.stringify({ first: 'a', second: 'b', third: 'c' }),
    );
    storage.setItem(`${prefix}.settings`, JSON.stringify({ labels: true }));

    runPersistenceImporters(beerPersistence, storage);
    runPersistenceImporters(beerPersistence, storage);

    expect(JSON.parse(storage.getItem(`${prefix}.settings`)!)).toEqual({ labels: true });
    expect(JSON.parse(storage.getItem(`${prefix}.rings`)!)).toEqual(['a', 'b', 'c']);
    expect(JSON.parse(storage.getItem(`${prefix}.completed-importers`)!)).toEqual([
      'beer-settings-before-dataset-packaging',
    ]);
  });

  it('reports corrupt legacy data without breaking startup', () => {
    const storage = new MemoryStorage();
    const warn = vi.fn();
    storage.setItem('beer-taxonomy.settings.v1', '{broken');
    expect(() => runPersistenceImporters(beerPersistence, storage, warn)).not.toThrow();
    expect(warn).toHaveBeenCalledOnce();
  });
});
