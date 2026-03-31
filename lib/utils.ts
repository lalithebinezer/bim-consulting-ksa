import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prepends the base path to an asset URL in production.
 * This is required for GitHub Pages sub-directory hosting.
 */
export function asset(path: string) {
  const isProd = process.env.NODE_ENV === "production"
  const basePath = isProd ? "/bim-consulting-ksa" : ""
  
  if (!path.startsWith("/")) return path
  return `${basePath}${path}`
}
