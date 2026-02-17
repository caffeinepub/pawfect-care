/**
 * Helper function to build base-path-safe URLs for static assets.
 * Uses Vite's BASE_URL to ensure images resolve correctly under both root and non-root deployments.
 */
export function publicAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`.replace(/\/+/g, '/');
}
