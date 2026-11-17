// <head> for every page: meta, Open Graph, hreflang, and JSON-LD graphs.
import { HOME_FAQ } from "@/content/faq";
import { GUIDES, GUIDE_META } from "@/content/guides";
import { UI_TEXT } from "@/i18n/ui";
import {
  APP_RELEASED,
  APP_VERSION,
  AUTHOR_NAME,
  AUTHOR_URL,
  CONTENT_UPDATED,
  DOWNLOADS,
  LATEST_RELEASE_URL,
  REPO_URL,
  SITE_NAME,
  absolute,
  guidePath,
  pagePath,
  type GuideKey,
  type Locale,
  type PageKey,
} from "@/site";

type Json = Record<string, unknown>;

const LANG_TAG: Record<Locale, string> = { en: "en", fr: "fr" };
const OG_LOCALE: Record<Locale, string> = { en: "en_US", fr: "fr_FR" };

const PERSON: Json = {
  "@type": "Person",
  "@id": `${absolute("/")}#author`,
  name: AUTHOR_NAME,
  url: AUTHOR_URL,
};

const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[`*]/g, "");

function website(locale: Locale): Json {
  return {
    "@type": "WebSite",
    "@id": `${absolute("/")}#website`,
    url: absolute("/"),
    name: SITE_NAME,
    alternateName: ["EOM", "Eye On Metadata"],
    inLanguage: ["en", "fr"],
    publisher: { "@id": `${absolute("/")}#author` },
    description: UI_TEXT[locale].home.heroSub,
  };
}

function software(locale: Locale): Json {
  const features =
    locale === "fr"
      ? [
          "Score de risque pour chaque fichier",
          "Profils de nettoyage : réseaux sociaux, anonymat total, garder le copyright, position uniquement",
          "Vérification avant / après",
          "Modification des métadonnées et décalage des dates",
          "Export JSON, CSV, HTML, texte",
          "Interface en ligne de commande",
          "Traitement 100 % local",
        ]
      : [
          "Privacy-risk score for every file",
          "Cleaning profiles: social media, full anonymity, keep copyright, location only",
          "Before / after verification",
          "Metadata editing and date shifting",
          "JSON, CSV, HTML and text export",
          "Command-line interface",
          "100% local processing",
        ];
  return {
    "@type": "SoftwareApplication",
    "@id": `${absolute("/")}#app`,
    name: "EOM — Eye On Metadata",
    alternateName: "EOM",
    url: absolute(pagePath("home", locale)),
    description:
      locale === "fr"
        ? "Application de bureau gratuite et open source qui affiche, évalue et supprime les métadonnées des photos, fichiers audio, vidéos, PDF et documents Office, en local."
        : "Free, open-source desktop app that shows, rates and removes metadata from photos, audio, video, PDF and Office files, locally.",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Privacy",
    operatingSystem: "Windows 10+, macOS 14+, Linux",
    softwareVersion: APP_VERSION,
    datePublished: APP_RELEASED,
    downloadUrl: [DOWNLOADS.windows, DOWNLOADS.macos, DOWNLOADS.linux],
    installUrl: LATEST_RELEASE_URL,
    releaseNotes: LATEST_RELEASE_URL,
    codeRepository: REPO_URL,
    license: "https://opensource.org/licenses/MIT",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@id": `${absolute("/")}#author` },
    screenshot: absolute("/og-image.png"),
    inLanguage: ["en", "fr"],
    featureList: features,
  };
}

function breadcrumb(items: [string, string][]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: absolute(path),
    })),
  };
}

function faqPage(url: string, locale: Locale, faq: [string, string][]): Json {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    inLanguage: LANG_TAG[locale],
    mainEntity: faq.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: plain(a) },
    })),
  };
}

interface HeadInput {
  locale: Locale;
  path: string;
  alternates: Record<Locale, string>;
  title: string;
  description: string;
  type?: "website" | "article";
  graph: Json[];
}

function buildHead({
  locale,
  path,
  alternates,
  title,
  description,
  type = "website",
  graph,
}: HeadInput) {
  const url = absolute(path);
  const image = absolute("/og-image.png");
  const other: Locale = locale === "fr" ? "en" : "fr";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: AUTHOR_NAME },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: OG_LOCALE[locale] },
      { property: "og:locale:alternate", content: OG_LOCALE[other] },
      { property: "og:url", content: url },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: UI_TEXT[locale].home.heroShotAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en", href: absolute(alternates.en) },
      { rel: "alternate", hrefLang: "fr", href: absolute(alternates.fr) },
      { rel: "alternate", hrefLang: "x-default", href: absolute(alternates.en) },
      { rel: "alternate", type: "text/plain", title: "llms.txt", href: absolute("/llms.txt") },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [PERSON, website(locale), ...graph],
        }),
      },
    ],
  };
}

const pageAlternates = (page: PageKey) => ({ en: pagePath(page, "en"), fr: pagePath(page, "fr") });

export const PAGE_TITLES: Record<Locale, Record<PageKey, [string, string]>> = {
  en: {
    home: [
      "EOM: See & Remove Hidden Metadata From Photos, PDFs, Files",
      "Free, open-source app that shows what your photos, PDFs and Office files reveal (GPS location, name, serial numbers), rates the risk and removes it. 100% offline.",
    ],
    check: [
      "Photo Metadata Checker: See EXIF & GPS Without Uploading",
      "Check a photo's hidden metadata (GPS location, camera serial number, author) in your browser. Nothing is uploaded. Free, with a privacy-risk verdict.",
    ],
    guides: [
      "Metadata Guides: Remove EXIF, GPS, PDF & Office Metadata",
      "Short, tested guides to find and remove hidden metadata in photos, PDFs, Word files and audio on Windows, Mac, Linux, iPhone and Android.",
    ],
  },
  fr: {
    home: [
      "EOM : voir et supprimer les métadonnées cachées de vos fichiers",
      "Application gratuite et open source qui montre ce que révèlent vos photos, PDF et fichiers Office (position GPS, nom, numéros de série), évalue le risque et le supprime. 100 % hors ligne.",
    ],
    check: [
      "Voir les métadonnées d'une photo (EXIF, GPS) sans l'envoyer",
      "Vérifiez les métadonnées cachées d'une photo (position GPS, numéro de série, auteur) dans votre navigateur. Rien n'est envoyé. Gratuit, avec un verdict de risque.",
    ],
    guides: [
      "Guides : supprimer EXIF, GPS et métadonnées PDF et Office",
      "Guides courts et vérifiés pour trouver et supprimer les métadonnées cachées des photos, PDF, fichiers Word et audio, sur Windows, Mac, Linux, iPhone et Android.",
    ],
  },
};

export function homeHead(locale: Locale) {
  const [title, description] = PAGE_TITLES[locale].home;
  const path = pagePath("home", locale);
  return buildHead({
    locale,
    path,
    alternates: pageAlternates("home"),
    title,
    description,
    graph: [software(locale), faqPage(absolute(path), locale, HOME_FAQ[locale])],
  });
}

export function checkHead(locale: Locale) {
  const [title, description] = PAGE_TITLES[locale].check;
  const path = pagePath("check", locale);
  const ui = UI_TEXT[locale];
  return buildHead({
    locale,
    path,
    alternates: pageAlternates("check"),
    title,
    description,
    graph: [
      {
        "@type": "WebApplication",
        "@id": `${absolute(path)}#tool`,
        name: ui.checkPage.h1,
        url: absolute(path),
        description,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any (web browser)",
        browserRequirements: "Requires JavaScript",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        inLanguage: LANG_TAG[locale],
        author: { "@id": `${absolute("/")}#author` },
      },
      breadcrumb([
        [ui.guide.breadcrumbHome, pagePath("home", locale)],
        [ui.shell.nav.check, path],
      ]),
    ],
  });
}

export function guidesHead(locale: Locale) {
  const [title, description] = PAGE_TITLES[locale].guides;
  const path = pagePath("guides", locale);
  const ui = UI_TEXT[locale];
  return buildHead({
    locale,
    path,
    alternates: pageAlternates("guides"),
    title,
    description,
    graph: [
      {
        "@type": "CollectionPage",
        "@id": `${absolute(path)}#page`,
        url: absolute(path),
        name: ui.guidesPage.h1,
        description,
        inLanguage: LANG_TAG[locale],
        hasPart: (Object.keys(GUIDE_META) as GuideKey[]).map((key) => ({
          "@type": "TechArticle",
          headline: GUIDES[locale][key].h1,
          url: absolute(guidePath(key, locale)),
        })),
      },
      breadcrumb([
        [ui.guide.breadcrumbHome, pagePath("home", locale)],
        [ui.guide.breadcrumbGuides, path],
      ]),
    ],
  });
}

export function guideHead(locale: Locale, key: GuideKey) {
  const g = GUIDES[locale][key];
  const path = guidePath(key, locale);
  const url = absolute(path);
  const ui = UI_TEXT[locale];
  const graph: Json[] = [
    {
      "@type": "TechArticle",
      "@id": `${url}#article`,
      headline: g.h1,
      description: g.description,
      abstract: plain(g.short),
      url,
      mainEntityOfPage: url,
      inLanguage: LANG_TAG[locale],
      datePublished: CONTENT_UPDATED,
      dateModified: CONTENT_UPDATED,
      author: { "@id": `${absolute("/")}#author` },
      publisher: { "@id": `${absolute("/")}#author` },
      image: absolute("/og-image.png"),
      about: { "@type": "SoftwareApplication", name: "EOM — Eye On Metadata", url: absolute("/") },
      timeRequired: `PT${g.minutes}M`,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "[aria-labelledby=short] p"],
      },
    },
    breadcrumb([
      [ui.guide.breadcrumbHome, pagePath("home", locale)],
      [ui.guide.breadcrumbGuides, pagePath("guides", locale)],
      [g.h1, path],
    ]),
    faqPage(url, locale, g.faq),
  ];
  if (g.howto) {
    graph.push({
      "@type": "HowTo",
      "@id": `${url}#howto`,
      name: g.howto.name,
      inLanguage: LANG_TAG[locale],
      tool: { "@type": "HowToTool", name: "EOM — Eye On Metadata" },
      step: g.howto.steps.map(([name, text], i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name,
        text,
      })),
    });
  }
  return buildHead({
    locale,
    path,
    alternates: { en: guidePath(key, "en"), fr: guidePath(key, "fr") },
    title: g.title,
    description: g.description,
    type: "article",
    graph,
  });
}
