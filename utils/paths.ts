// Get the base path from environment or default to empty string
export const getBasePath = () => {
  // In development, base path is empty
  if (process.env.NODE_ENV === 'development') {
    return '';
  }
  
  // In production, get from env or use default
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
};

// Helper to construct full URLs with base path
export const withBasePath = (path: string) => {
  const basePath = getBasePath();
  // If path starts with http/https, don't modify it
  if (path.startsWith('http')) return path;
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}; 