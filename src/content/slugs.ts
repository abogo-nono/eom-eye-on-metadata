// URL map of the whole site. Plain data with no imports: vite.config.ts and
// scripts/gen-seo.ts read it too (prerender list, sitemap, llms.txt).

export type Locale = "en" | "fr";
export const LOCALES: Locale[] = ["en", "fr"];

export const PAGES = {
  home: { en: "/", fr: "/fr/" },
  check: { en: "/check/", fr: "/fr/verifier/" },
  guides: { en: "/guides/", fr: "/fr/guides/" },
} as const;

export type PageKey = keyof typeof PAGES;

export const GUIDE_SLUGS = {
  "remove-gps": { en: "remove-gps-location-from-photos", fr: "supprimer-position-gps-photo" },
  "phone-photos": {
    en: "remove-location-from-iphone-android-photos",
    fr: "supprimer-position-photos-iphone-android",
  },
  "what-is-exif": { en: "what-is-exif-data", fr: "quest-ce-que-les-donnees-exif" },
  "what-metadata-reveals": {
    en: "what-photo-metadata-reveals",
    fr: "ce-que-revelent-les-metadonnees",
  },
  pdf: { en: "remove-metadata-from-pdf", fr: "supprimer-metadonnees-pdf" },
  office: {
    en: "remove-metadata-word-excel-powerpoint",
    fr: "supprimer-metadonnees-word-excel-powerpoint",
  },
  "audio-video": { en: "remove-metadata-mp3-mp4-video", fr: "supprimer-metadonnees-mp3-video" },
  windows: { en: "remove-metadata-windows", fr: "supprimer-metadonnees-windows" },
  mac: { en: "remove-metadata-mac", fr: "supprimer-metadonnees-mac" },
  linux: { en: "remove-metadata-linux", fr: "supprimer-metadonnees-linux" },
  "online-tools": {
    en: "online-metadata-remover-risks",
    fr: "outils-en-ligne-suppression-metadonnees",
  },
  "command-line": {
    en: "strip-metadata-command-line",
    fr: "nettoyer-metadonnees-ligne-de-commande",
  },
} as const;

export type GuideKey = keyof typeof GUIDE_SLUGS;
export const GUIDE_KEYS = Object.keys(GUIDE_SLUGS) as GuideKey[];

export function pagePath(page: PageKey, locale: Locale): string {
  return PAGES[page][locale];
}

export function guidePath(key: GuideKey, locale: Locale): string {
  return `${PAGES.guides[locale]}${GUIDE_SLUGS[key][locale]}/`;
}

/** Every prerendered path, both languages. */
export function allPaths(): string[] {
  const paths: string[] = [];
  for (const locale of LOCALES) {
    for (const page of Object.keys(PAGES) as PageKey[]) paths.push(pagePath(page, locale));
    for (const key of GUIDE_KEYS) paths.push(guidePath(key, locale));
  }
  return paths;
}

/** Last content update, shown on guides and used in the sitemap. */
export const CONTENT_UPDATED = "2026-11-17";
