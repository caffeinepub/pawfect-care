/**
 * Builds a base-path-safe URL for static assets.
 * Uses the runtime base path to ensure images resolve correctly
 * under both root and non-root deployments.
 */
export function publicAssetUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Get the base URL from Vite's environment
  const base = import.meta.env.BASE_URL || '/';
  
  // Ensure base ends with slash
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  
  // Combine base and path
  return `${baseWithSlash}${cleanPath}`;
}
