// Service rate limiting will be implemented here
export const rateLimiter = {
  limits: new Map<string, number>(),
  check: (key: string, limit: number): boolean => {
    const count = rateLimiter.limits.get(key) || 0;
    if (count >= limit) {
      return false;
    }
    rateLimiter.limits.set(key, count + 1);
    return true;
  },
  reset: (key: string) => {
    rateLimiter.limits.delete(key);
  },
}; 