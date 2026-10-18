/**
 * Test setup: a simple in-memory localStorage.
 * Newer Node versions have a built-in localStorage that breaks
 * Zustand's persist in tests, so this replaces it.
 */

const data = new Map<string, string>()

const memoryStorage: Storage = {
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => {
        data.set(key, String(value));
    },
    removeItem: (key) =>{
        data.delete(key);
    },
    clear: () => data.clear(),
    key: (index) => [...data.keys()][index] ?? null,
    get length() {
        return data.size
    }
}

Object.defineProperty(globalThis, "localStorage", {
    value: memoryStorage,
    configurable: true,
})