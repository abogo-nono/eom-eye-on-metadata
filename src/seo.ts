// <head> tags (meta, Open Graph, hreflang, JSON-LD) for each locale.
import { translations, type Locale } from "@/i18n/translations";
import { APP_VERSION, AUTHOR_URL, LATEST_RELEASE_URL, REPO_URL, absolute } from "@/site";

const FAQ: Record<Locale, [string, string][]> = {
  en: [
    [
      "Does EOM upload my files anywhere?",
      "No. EOM processes every file on your device. Nothing is uploaded or shared. The only network features — map tiles and the update check — are off by default.",
    ],
    [
      "What file formats does EOM support?",
      "Images (JPEG, PNG, TIFF, WebP, GIF, HEIC), audio (MP3, FLAC, OGG, Opus, WAV, AIFF, M4A, WMA, APE, WavPack), video (MP4, M4V, MOV, MKV, WebM), PDF and Office documents (DOCX, XLSX, PPTX). With ExifTool installed it also reads RAW camera files.",
    ],
    [
      "How do I remove GPS location from a photo?",
      "Drop the photo or its folder on EOM, choose the “Location only” or “Social media sharing” profile, then click Clean. EOM shows which tags will be removed before anything changes, and can write cleaned copies instead of modifying the originals.",
    ],
    [
      "How does EOM rate the privacy risk of a file?",
      "Each tag is classified — location, identity, unique IDs and serial numbers, device, dates, software, thumbnails… — and the file gets a High, Medium, Low or Clean rating from the most sensitive category it contains.",
    ],
    [
      "Is EOM free?",
      "Yes. EOM is free and open source under the MIT licence, with no account, subscription or telemetry.",
    ],
    [
      "What operating systems does EOM run on?",
      "Windows 10+ (x86-64), macOS 14+ (Apple Silicon) and Linux x86-64 (Ubuntu 20.04+ or any distribution with glibc 2.31+). Each is a single file, with no installer.",
    ],
    [
      "Does EOM require ExifTool?",
      "No. EOM uses ExifTool when it is installed for deeper metadata (XMP, IPTC, MakerNotes, RAW) and its built-in readers otherwise. The Windows download already includes ExifTool.",
    ],
  ],
  fr: [
    [
      "EOM envoie-t-il mes fichiers quelque part ?",
      "Non. EOM traite chaque fichier sur votre appareil. Rien n'est envoyé ni partagé. Ses seules fonctions réseau — les fonds de carte et la recherche de mises à jour — sont désactivées par défaut.",
    ],
    [
      "Quels formats de fichiers EOM prend-il en charge ?",
      "Images (JPEG, PNG, TIFF, WebP, GIF, HEIC), audio (MP3, FLAC, OGG, Opus, WAV, AIFF, M4A, WMA, APE, WavPack), vidéo (MP4, M4V, MOV, MKV, WebM), PDF et documents Office (DOCX, XLSX, PPTX). Avec ExifTool installé, il lit aussi les fichiers RAW.",
    ],
    [
      "Comment supprimer la position GPS d'une photo ?",
      "Déposez la photo ou son dossier sur EOM, choisissez le profil « Position uniquement » ou « Partage sur les réseaux sociaux », puis cliquez sur Nettoyer. EOM montre les balises qui seront supprimées avant toute modification, et peut écrire des copies nettoyées au lieu de modifier les originaux.",
    ],
    [
      "Comment EOM évalue-t-il le risque d'un fichier ?",
      "Chaque balise est classée — position, identité, identifiants et numéros de série, appareil, dates, logiciel, miniatures… — et le fichier reçoit une note (élevé, moyen, faible ou aucun) selon la catégorie la plus sensible qu'il contient.",
    ],
    [
      "EOM est-il gratuit ?",
      "Oui. EOM est gratuit et open source sous licence MIT, sans compte, abonnement ni télémétrie.",
    ],
    [
      "Sur quels systèmes EOM fonctionne-t-il ?",
      "Windows 10+ (x86-64), macOS 14+ (Apple Silicon) et Linux x86-64 (Ubuntu 20.04+ ou toute distribution avec glibc 2.31+). Chaque version est un seul fichier, sans installation.",
    ],
    [
      "EOM a-t-il besoin d'ExifTool ?",
      "Non. EOM utilise ExifTool s'il est installé, pour des métadonnées plus complètes (XMP, IPTC, MakerNotes, RAW), et ses lecteurs intégrés sinon. Le téléchargement Windows inclut déjà ExifTool.",
    ],
  ],
};

const FEATURES: Record<Locale, string[]> = {
  en: [
    "Privacy-risk score for every file",
    "Cleaning profiles: social media, full anonymity, keep copyright, location only",
    "Before / after verification",
    "Edit title, author, copyright and dates; shift dates",
    "Export as JSON, CSV, HTML or plain text",
    "Command-line interface",
    "Optional ExifTool backend",
    "Local-only processing — no uploads",
  ],
  fr: [
    "Score de risque pour chaque fichier",
    "Profils de nettoyage : réseaux sociaux, anonymat total, garder le copyright, position uniquement",
    "Vérification avant / après",
    "Modification du titre, de l'auteur, du copyright et des dates ; décalage des dates",
    "Export JSON, CSV, HTML ou texte",
    "Interface en ligne de commande",
    "Moteur ExifTool facultatif",
    "Traitement 100 % local — aucun envoi",
  ],
};

export function pageHead(locale: Locale) {
  const t = translations[locale];
  const url = absolute(locale === "fr" ? "/fr/" : "/");
  const image = absolute("/og-image.png");
  return {
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      { name: "keywords", content: t.metaKeywords },
      { name: "author", content: "Abogo Lincoln" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "EOM — Eye On Metadata" },
      { property: "og:locale", content: t.metaOgLocale },
      { property: "og:locale:alternate", content: locale === "fr" ? "en_US" : "fr_FR" },
      { property: "og:url", content: url },
      { property: "og:title", content: t.metaTitle },
      { property: "og:description", content: t.metaOgDescription },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: t.metaOgImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t.metaTitle },
      { name: "twitter:description", content: t.metaOgDescription },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en", href: absolute("/") },
      { rel: "alternate", hrefLang: "fr", href: absolute("/fr/") },
      { rel: "alternate", hrefLang: "x-default", href: absolute("/") },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${absolute("/")}#website`,
              url: absolute("/"),
              name: "EOM — Eye On Metadata",
              inLanguage: locale,
              publisher: { "@type": "Person", name: "Abogo Lincoln", url: AUTHOR_URL },
            },
            {
              "@type": "SoftwareApplication",
              "@id": `${absolute("/")}#app`,
              name: "EOM — Eye On Metadata",
              url,
              description: t.metaDescription,
              applicationCategory: "UtilitiesApplication",
              applicationSubCategory: "Privacy & Security",
              operatingSystem: "Windows, macOS, Linux",
              softwareVersion: APP_VERSION,
              license: "https://opensource.org/licenses/MIT",
              isAccessibleForFree: true,
              downloadUrl: LATEST_RELEASE_URL,
              codeRepository: REPO_URL,
              screenshot: image,
              author: { "@type": "Person", name: "Abogo Lincoln", url: AUTHOR_URL },
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              featureList: FEATURES[locale],
            },
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              inLanguage: locale,
              mainEntity: FAQ[locale].map(([q, a]) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ],
        }),
      },
    ],
  };
}
