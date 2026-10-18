import { vi } from 'vitest';

/**
 * Test setup: a simple in-memory localStorage.
 * Newer Node versions have a built-in localStorage that breaks
 * Zustand's persist in tests, so this replaces it.
 */

const data = new Map<string, string>();

const testStorage: Storage = {
  getItem(key) {
    return data.get(key) ?? null;
  },
  setItem(key, value) {
    data.set(key, String(value));
  },
  removeItem(key) {
    data.delete(key);
  },
  clear() {
    return data.clear();
  },
  key(index) {
    return [...data.keys()][index] ?? null;
  },
  get length() {
    return data.size;
  },
};

vi.stubGlobal('localStorage', testStorage);
