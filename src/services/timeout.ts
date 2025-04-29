// Service timeout logic will be implemented here
export const withTimeout = async (fn: () => Promise<any>, ms: number): Promise<any> => {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Operation timed out')), ms);
  });
  return Promise.race([fn(), timeout]);
}; 