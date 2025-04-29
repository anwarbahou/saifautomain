// Service middleware will be implemented here
export const withErrorHandling = async (fn: () => Promise<any>) => {
  try {
    return await fn();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const withAuthentication = async (fn: () => Promise<any>) => {
  // Authentication logic will be added here
  return await fn();
}; 