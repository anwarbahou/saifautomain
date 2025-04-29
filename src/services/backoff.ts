// Service backoff logic will be implemented here
export const exponentialBackoff = async (fn: () => Promise<any>, maxAttempts: number = 3): Promise<any> => {
  let attempts = 0;
  while (attempts < maxAttempts) {
    try {
      return await fn();
    } catch (error) {
      attempts++;
      if (attempts === maxAttempts) {
        throw error;
      }
      const delay = Math.pow(2, attempts) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}; 