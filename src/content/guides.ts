import type { GuideKey, Locale } from "./slugs";
import { GUIDES_EN } from "./guides.en";
import { GUIDES_FR } from "./guides.fr";

/**
 * Inline markup allowed in guide strings:
 *   `code`  **bold**  [text](@guide-key)  [text](@check)  [text](@download)
 *   [text](@guides)  [text](https://external)
 */
export type Para =
  | string
  | { ol: string[] }
  | { ul: string[] }
  | { code: string }
  | { table: string[][] }
  | { note: string };

export interface Section {
  id: string;
  h2: string;
  body: Para[];
}

export interface GuideText {
  /** <title>, ideally < 60 characters */
  title: string;
  h1: string;
  /** meta description, ~150 characters */
  description: string;
  /** Answer-first summary: the paragraph search engines and AI assistants quote. */
  short: string;
  minutes: number;
  sections: Section[];
  /** Step list for HowTo structured data (name, text). */
  howto?: { name: string; steps: [string, string][] };
  faq: [string, string][];
}

export type GuideGroup = "photos" | "documents" | "systems" | "basics";

export const GUIDE_META: Record<GuideKey, { group: GuideGroup; related: GuideKey[] }> = {
  "remove-gps": { group: "photos", related: ["phone-photos", "what-is-exif", "windows"] },
  "phone-photos": { group: "photos", related: ["remove-gps", "what-metadata-reveals", "mac"] },
  "what-is-exif": {
    group: "basics",
    related: ["what-metadata-reveals", "remove-gps", "online-tools"],
  },
  "what-metadata-reveals": { group: "basics", related: ["what-is-exif", "remove-gps", "pdf"] },
  pdf: { group: "documents", related: ["office", "online-tools", "command-line"] },
  office: { group: "documents", related: ["pdf", "windows", "what-metadata-reveals"] },
  "audio-video": { group: "documents", related: ["phone-photos", "command-line", "linux"] },
  windows: { group: "systems", related: ["remove-gps", "office", "command-line"] },
  mac: { group: "systems", related: ["phone-photos", "remove-gps", "pdf"] },
  linux: { group: "systems", related: ["command-line", "remove-gps", "pdf"] },
  "online-tools": { group: "basics", related: ["what-metadata-reveals", "remove-gps", "pdf"] },
  "command-line": { group: "systems", related: ["linux", "pdf", "audio-video"] },
};

export const GUIDES: Record<Locale, Record<GuideKey, GuideText>> = { en: GUIDES_EN, fr: GUIDES_FR };
