// Single source of truth for URLs, version and download links.
// Bump APP_VERSION when a new EOM release ships; the download buttons always
// point at the latest GitHub release, so they never need editing.

/**
 * Canonical public URL of the site (GitHub Pages), without a trailing slash.
 * The Vercel copy (e-o-m.vercel.app) points search engines here.
 */
export const SITE_URL = "https://abogo-nono.github.io/eom-eye-on-metadata";

export const APP_VERSION = "2.2.1";

export const REPO_URL = "https://github.com/abogo-nono/eom";
export const AUTHOR_URL = "https://github.com/abogo-nono";
export const RELEASES_URL = `${REPO_URL}/releases`;
export const LATEST_RELEASE_URL = `${RELEASES_URL}/latest`;
const LATEST_DOWNLOAD = `${RELEASES_URL}/latest/download`;

export const DOWNLOADS = {
  linux: `${LATEST_DOWNLOAD}/eom-linux-x86_64.zip`,
  windows: `${LATEST_DOWNLOAD}/eom-windows-x86_64.zip`,
  macos: `${LATEST_DOWNLOAD}/eom-macos-arm64.zip`,
} as const;

/** Path of a file in public/, prefixed with the deployment base ("/" or "/repo/"). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

/** Absolute URL of a page or public file, for meta tags and JSON-LD. */
export function absolute(path = ""): string {
  return `${SITE_URL}/${path.replace(/^\//, "")}`;
}
