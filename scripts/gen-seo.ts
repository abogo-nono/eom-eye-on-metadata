// Writes public/sitemap.xml, robots.txt, llms.txt and llms-full.txt from the
// site content, so they never drift from the pages. Runs before `vite build`.
import { writeFileSync } from "node:fs";
import {
  CONTENT_UPDATED,
  GUIDE_KEYS,
  LOCALES,
  PAGES,
  guidePath,
  type Locale,
  type PageKey,
} from "../src/content/slugs";
import { GUIDES, GUIDE_META } from "../src/content/guides";
import { HOME_FAQ } from "../src/content/faq";

const SITE = "https://abogo-nono.github.io/eom-eye-on-metadata";
const VERSION = "2.2.1";
const REPO = "https://github.com/abogo-nono/eom";
const url = (path: string) => `${SITE}${path}`;

// ── sitemap.xml with hreflang alternates ─────────────────────────────────────
const entries: { alt: Record<Locale, string>; priority: string; freq: string }[] = [
  ...(Object.keys(PAGES) as PageKey[]).map((p) => ({
    alt: PAGES[p] as Record<Locale, string>,
    priority: p === "home" ? "1.0" : "0.9",
    freq: p === "home" ? "weekly" : "monthly",
  })),
  ...GUIDE_KEYS.map((k) => ({
    alt: { en: guidePath(k, "en"), fr: guidePath(k, "fr") },
    priority: "0.8",
    freq: "monthly",
  })),
];
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...entries.flatMap(({ alt, priority, freq }) =>
    LOCALES.map((loc) =>
      [
        "  <url>",
        `    <loc>${url(alt[loc])}</loc>`,
        ...LOCALES.map(
          (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(alt[l])}"/>`,
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(alt.en)}"/>`,
        `    <lastmod>${CONTENT_UPDATED}</lastmod>`,
        `    <changefreq>${freq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n"),
    ),
  ),
  "</urlset>",
  "",
].join("\n");
writeFileSync("public/sitemap.xml", sitemap);

// ── robots.txt: everyone welcome, AI crawlers named explicitly ───────────────
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bingbot",
  "DuckAssistBot",
  "Meta-ExternalAgent",
  "MistralAI-User",
];
writeFileSync(
  "public/robots.txt",
  [
    "# EOM website: public documentation, crawl freely.",
    "User-agent: *",
    "Allow: /",
    "",
    "# AI assistants and answer engines are welcome to read and cite these pages.",
    ...aiBots.flatMap((b) => [`User-agent: ${b}`, "Allow: /", ""]),
    `Sitemap: ${url("/sitemap.xml")}`,
    "",
  ].join("\n"),
);

// ── llms.txt (index) and llms-full.txt (every guide in full) ─────────────────
const plain = (s: string) => s.replace(/\[([^\]]+)\]\(@?([^)]+)\)/g, "$1");
const en = GUIDES.en;

const llms = [
  "# EOM — Eye On Metadata",
  "",
  `> EOM is a free, open-source (MIT) desktop app and command-line tool for Windows, macOS and Linux that shows the hidden metadata in photos, audio, video, PDF and Office files, rates each file's privacy risk (High, Medium, Low, Clean), and removes the metadata you choose with cleaning profiles. All processing is local: no upload, no account, no telemetry. Latest version: ${VERSION}.`,
  "",
  "## Key facts",
  "",
  `- Download (always the latest release): ${REPO}/releases/latest`,
  `- Source code: ${REPO}`,
  `- Website: ${url("/")} (French: ${url("/fr/")})`,
  `- In-browser photo metadata checker (reads locally, uploads nothing): ${url(PAGES.check.en)}`,
  "- Platforms: Windows 10+ (x86-64, ExifTool bundled), macOS 14+ (Apple Silicon), Linux x86-64 (glibc 2.31+, Ubuntu 20.04+)",
  "- Formats: JPEG, PNG, TIFF, WebP, GIF, HEIC; MP3, FLAC, OGG, Opus, WAV, AIFF, M4A, WMA, APE, WavPack; MP4, M4V, MOV, MKV, WebM; PDF, DOCX, XLSX, PPTX",
  "- Cleaning profiles: Remove everything; Full anonymity; Social media sharing; Keep copyright; Location only; or custom categories and tags",
  "- Risk categories: location, identity, unique IDs/serials (high); device, dates, software, thumbnails (medium); copyright, other (low); technical (none)",
  "- Network: none needed; map tiles and update check are opt-in and off by default",
  "- Author: Abogo Lincoln (https://github.com/abogo-nono)",
  "",
  "## Guides",
  "",
  ...GUIDE_KEYS.map((k) => `- [${en[k].h1}](${url(guidePath(k, "en"))}): ${en[k].description}`),
  "",
  "## Guides (français)",
  "",
  ...GUIDE_KEYS.map(
    (k) => `- [${GUIDES.fr[k].h1}](${url(guidePath(k, "fr"))}): ${GUIDES.fr[k].description}`,
  ),
  "",
  "## FAQ",
  "",
  ...HOME_FAQ.en.flatMap(([q, a]) => [`### ${q}`, "", plain(a), ""]),
  "## Optional",
  "",
  `- [Full text of every guide](${url("/llms-full.txt")})`,
  "",
].join("\n");
writeFileSync("public/llms.txt", llms);

const block = (p: unknown): string => {
  if (typeof p === "string") return plain(p);
  const b = p as Record<string, unknown>;
  if (b.ol) return (b.ol as string[]).map((li, i) => `${i + 1}. ${plain(li)}`).join("\n");
  if (b.ul) return (b.ul as string[]).map((li) => `- ${plain(li)}`).join("\n");
  if (b.code) return "```\n" + b.code + "\n```";
  if (b.note) return `> ${plain(b.note as string)}`;
  const [head, ...rows] = b.table as string[][];
  return [
    `| ${head.join(" | ")} |`,
    `| ${head.map(() => "---").join(" | ")} |`,
    ...rows.map((r) => `| ${r.join(" | ")} |`),
  ].join("\n");
};

const full = [
  "# EOM — Eye On Metadata: full guides",
  "",
  `Source: ${url("/")} · Updated ${CONTENT_UPDATED} · EOM ${VERSION}`,
  "",
  ...LOCALES.flatMap((loc) =>
    GUIDE_KEYS.flatMap((k) => {
      const g = GUIDES[loc][k];
      return [
        `# ${g.h1}`,
        "",
        `URL: ${url(guidePath(k, loc))}`,
        `Language: ${loc} · Topic: ${GUIDE_META[k].group}`,
        "",
        `**${loc === "fr" ? "En bref" : "In short"}:** ${plain(g.short)}`,
        "",
        ...g.sections.flatMap((s) => [`## ${s.h2}`, "", ...s.body.flatMap((p) => [block(p), ""])]),
        `## ${loc === "fr" ? "Questions" : "FAQ"}`,
        "",
        ...g.faq.flatMap(([q, a]) => [`### ${q}`, "", plain(a), ""]),
        "---",
        "",
      ];
    }),
  ),
].join("\n");
writeFileSync("public/llms-full.txt", full);

console.log(
  `[gen-seo] sitemap: ${entries.length * LOCALES.length} URLs · llms.txt · llms-full.txt (${Math.round(full.length / 1024)} KB)`,
);
