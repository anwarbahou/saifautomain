// Service retry logic will be implemented here
export const retry = async (fn: () => Promise<any>, maxAttempts: number = 3): Promise<any> => {
  let attempts = 0;
  while (attempts < maxAttempts) {
    try {
      return await fn();
    } catch (error) {
      attempts++;
      if (attempts === maxAttempts) {
        throw error;
      }
      await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
    }
  }
}; 