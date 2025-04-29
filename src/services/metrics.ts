// Service metrics will be implemented here
export const metrics = {
  counters: new Map<string, number>(),
  increment: (key: string) => {
    const count = metrics.counters.get(key) || 0;
    metrics.counters.set(key, count + 1);
  },
  get: (key: string): number => {
    return metrics.counters.get(key) || 0;
  },
  reset: (key: string) => {
    metrics.counters.delete(key);
  },
}; 