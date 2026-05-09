export type Locale = "en" | "fr";

export interface Translations {
  // Meta
  metaTitle: string;
  metaDescription: string;
  metaOgDescription: string;
  metaOgLocale: string;

  // Navbar
  navGithub: string;
  navDownload: string;

  // Hero
  heroBadge: string;
  heroHeading: string;
  heroSubtext: string;
  heroCtaDownload: string;
  heroCtaGithub: string;

  // Feature strip
  feat1Name: string;
  feat1Desc: string;
  feat2Name: string;
  feat2Desc: string;
  feat3Name: string;
  feat3Desc: string;
  feat4Name: string;
  feat4Desc: string;

  // Formats section
  formatsHeading: string;
  formatImages: string;
  formatAudio: string;
  formatVideo: string;
  formatDocuments: string;

  // MetadataReveal section
  revealBadge: string;
  revealHeading: string;
  revealSubtext: string;
  revealCta: string;
  revealFileLabel: string;
  revealTagCol: string;
  revealValueCol: string;
  revealSensitiveLabel: string;
  revealSensitiveCount: string;
  revealStripAll: string;

  // HowItWorks section
  howHeading: string;
  howStep1Title: string;
  howStep1Desc: string;
  howStep2Title: string;
  howStep2Desc: string;
  howStep3Title: string;
  howStep3Desc: string;

  // ExifToolCallout section
  exifBadge: string;
  exifHeading: string;
  exifDesc1: string;
  exifDesc2: string;
  exifDetected: string;
  exifNotFound: string;

  // PrivacyBanner section
  privacyHeading: string;
  privacySubtext: string;
  privacyCard1Title: string;
  privacyCard1Desc: string;
  privacyCard2Title: string;
  privacyCard2Desc: string;
  privacyCard3Title: string;
  privacyCard3Desc: string;
  tableColOnline: string;
  tableColEom: string;
  tableRow1: string;
  tableRow2: string;
  tableRow3: string;
  tableRow4: string;
  tableRow5: string;
  tableRow6: string;

  // DownloadSection
  downloadHeading: string;
  downloadSubtext: string;
  downloadBtn: string;
  dlLinuxNote: string;
  dlWindowsNote: string;
  dlMacNote: string;

  // Footer
  footerBuiltBy: string;
  footerLicense: string;

  // Language switcher
  langSwitcherLabel: string;

  // 404 page
  notFoundTitle: string;
  notFoundDesc: string;
  notFoundGoHome: string;

  // Error page
  errorTitle: string;
  errorDesc: string;
  errorTryAgain: string;
  errorGoHome: string;
}

const en: Translations = {
  // Meta
  metaTitle: "EOM — Eye On Metadata · Free open-source metadata tool",
  metaDescription:
    "EOM reads, exports, and strips metadata from images, audio, video, and PDFs — locally, with no upload, no account, no cloud.",
  metaOgDescription:
    "Free open-source desktop tool to read, export, and strip metadata. Local-only.",
  metaOgLocale: "en_US",

  // Navbar
  navGithub: "GitHub",
  navDownload: "Download",

  // Hero
  heroBadge: "v2.0.0  · Free & open source",
  heroHeading: "See what your files are hiding.",
  heroSubtext:
    "EOM reads, exports, and strips metadata from images, audio, video, and PDFs — locally, with no upload, no account, no cloud.",
  heroCtaDownload: "Download for free",
  heroCtaGithub: "View on GitHub",

  // Feature strip
  feat1Name: "Extract",
  feat1Desc: "Read EXIF, XMP, IPTC, ID3, and PDF metadata.",
  feat2Name: "Remove",
  feat2Desc: "Strip tags in place or to a copy.",
  feat3Name: "Export",
  feat3Desc: "Save as JSON, CSV, or plain text.",
  feat4Name: "ExifTool support",
  feat4Desc: "Uses ExifTool when available.",

  // Formats
  formatsHeading: "Every format you actually use.",
  formatImages: "Images",
  formatAudio: "Audio",
  formatVideo: "Video",
  formatDocuments: "Documents",

  // MetadataReveal
  revealBadge: "Real metadata exposure",
  revealHeading: "A single photo can reveal where you live.",
  revealSubtext:
    "Every file you share carries invisible data. GPS coordinates, device serial numbers, your real name — baked in by your camera or phone. EOM shows you exactly what's there, and lets you remove it before you share.",
  revealCta: "Download EOM",
  revealFileLabel: "holiday.jpg — metadata",
  revealTagCol: "Tag",
  revealValueCol: "Value",
  revealSensitiveLabel: "sensitive",
  revealSensitiveCount: "5 sensitive fields detected",
  revealStripAll: "Strip all",

  // HowItWorks
  howHeading: "How it works.",
  howStep1Title: "Open a file",
  howStep1Desc:
    "Drag & drop or browse to any image, audio, video, or PDF. No conversion needed.",
  howStep2Title: "Inspect the metadata",
  howStep2Desc:
    "EOM displays all embedded tags — EXIF, XMP, IPTC, ID3 — in a searchable table.",
  howStep3Title: "Strip or export",
  howStep3Desc:
    "Remove individual tags or all metadata at once. Export to JSON, CSV, or plain text.",

  // ExifToolCallout
  exifBadge: "Backend",
  exifHeading: "ExifTool, when you have it.",
  exifDesc1:
    "If ExifTool is installed, EOM uses it as the primary backend. That means full read/write support for XMP, IPTC, MakerNotes, and RAW camera tags across hundreds of formats.",
  exifDesc2:
    "Otherwise, EOM falls back to its built-in parsers. The Windows binary ships with exiftool.exe bundled.",
  exifDetected: "detected",
  exifNotFound: "not found",

  // PrivacyBanner
  privacyHeading: "Your files never leave your device.",
  privacySubtext:
    "Most online tools upload your files to process them. EOM runs entirely on your machine — nothing is ever sent to a server.",
  privacyCard1Title: "No network required",
  privacyCard1Desc:
    "EOM works fully offline. Once installed, it never needs an internet connection to process files.",
  privacyCard2Title: "No account, no telemetry",
  privacyCard2Desc:
    "No sign-up, no analytics, no crash reporting. EOM collects absolutely no data about you or your files.",
  privacyCard3Title: "Open source & auditable",
  privacyCard3Desc:
    "Every line of code is public on GitHub. Verify exactly what EOM does with your files.",
  tableColOnline: "Online tools",
  tableColEom: "EOM",
  tableRow1: "Processes files locally",
  tableRow2: "Works without internet",
  tableRow3: "No account needed",
  tableRow4: "Free to use",
  tableRow5: "Open source",
  tableRow6: "Works offline",

  // DownloadSection
  downloadHeading: "One binary. No installer.",
  downloadSubtext: "Download, run. Nothing phones home.",
  downloadBtn: "Download",
  dlLinuxNote: "Ubuntu 20.04+",
  dlWindowsNote: "includes exiftool.exe",
  dlMacNote: "macOS 14+",

  // Footer
  footerBuiltBy: "Built by Abogo Lincoln",
  footerLicense: "MIT License · Open source",

  // Language switcher
  langSwitcherLabel: "Language",

  // 404
  notFoundTitle: "Page not found",
  notFoundDesc: "The page you're looking for doesn't exist or has been moved.",
  notFoundGoHome: "Go home",

  // Error
  errorTitle: "Something went wrong",
  errorDesc: "An unexpected error occurred. Please try again.",
  errorTryAgain: "Try again",
  errorGoHome: "Go home",
};

const fr: Translations = {
  // Meta
  metaTitle: "EOM — Eye On Metadata · Outil de métadonnées open source gratuit",
  metaDescription:
    "EOM lit, exporte et supprime les métadonnées des images, fichiers audio, vidéo et PDF — localement, sans envoi, sans compte, sans cloud.",
  metaOgDescription:
    "Outil desktop gratuit et open source pour lire, exporter et supprimer les métadonnées. Entièrement local.",
  metaOgLocale: "fr_FR",

  // Navbar
  navGithub: "GitHub",
  navDownload: "Télécharger",

  // Hero
  heroBadge: "v2.0.0  · Gratuit & open source",
  heroHeading: "Voyez ce que vos fichiers cachent.",
  heroSubtext:
    "EOM lit, exporte et supprime les métadonnées des images, fichiers audio, vidéo et PDF — localement, sans envoi, sans compte, sans cloud.",
  heroCtaDownload: "Télécharger gratuitement",
  heroCtaGithub: "Voir sur GitHub",

  // Feature strip
  feat1Name: "Extraire",
  feat1Desc: "Lire les métadonnées EXIF, XMP, IPTC, ID3 et PDF.",
  feat2Name: "Supprimer",
  feat2Desc: "Effacer les tags sur place ou dans une copie.",
  feat3Name: "Exporter",
  feat3Desc: "Sauvegarder en JSON, CSV ou texte brut.",
  feat4Name: "Support ExifTool",
  feat4Desc: "Utilise ExifTool quand disponible.",

  // Formats
  formatsHeading: "Tous les formats que vous utilisez vraiment.",
  formatImages: "Images",
  formatAudio: "Audio",
  formatVideo: "Vidéo",
  formatDocuments: "Documents",

  // MetadataReveal
  revealBadge: "Exposition réelle des métadonnées",
  revealHeading: "Une seule photo peut révéler où vous habitez.",
  revealSubtext:
    "Chaque fichier partagé contient des données invisibles. Coordonnées GPS, numéros de série, votre vrai nom — intégrés par votre appareil photo ou téléphone. EOM vous montre exactement ce qui s'y trouve, et vous permet de les supprimer avant de partager.",
  revealCta: "Télécharger EOM",
  revealFileLabel: "vacances.jpg — métadonnées",
  revealTagCol: "Tag",
  revealValueCol: "Valeur",
  revealSensitiveLabel: "sensible",
  revealSensitiveCount: "5 champs sensibles détectés",
  revealStripAll: "Tout supprimer",

  // HowItWorks
  howHeading: "Comment ça fonctionne.",
  howStep1Title: "Ouvrir un fichier",
  howStep1Desc:
    "Glissez-déposez ou naviguez vers n'importe quelle image, fichier audio, vidéo ou PDF. Aucune conversion nécessaire.",
  howStep2Title: "Inspecter les métadonnées",
  howStep2Desc:
    "EOM affiche tous les tags intégrés — EXIF, XMP, IPTC, ID3 — dans un tableau consultable.",
  howStep3Title: "Supprimer ou exporter",
  howStep3Desc:
    "Supprimez des tags individuels ou toutes les métadonnées à la fois. Exportez en JSON, CSV ou texte brut.",

  // ExifToolCallout
  exifBadge: "Backend",
  exifHeading: "ExifTool, quand vous l'avez.",
  exifDesc1:
    "Si ExifTool est installé, EOM l'utilise comme backend principal. Cela signifie une prise en charge complète en lecture/écriture pour XMP, IPTC, MakerNotes et les tags de cameras RAW sur des centaines de formats.",
  exifDesc2:
    "Sinon, EOM revient à ses parseurs intégrés. Le binaire Windows est livré avec exiftool.exe inclus.",
  exifDetected: "détecté",
  exifNotFound: "non trouvé",

  // PrivacyBanner
  privacyHeading: "Vos fichiers ne quittent jamais votre appareil.",
  privacySubtext:
    "La plupart des outils en ligne envoient vos fichiers pour les traiter. EOM s'exécute entièrement sur votre machine — rien n'est jamais envoyé à un serveur.",
  privacyCard1Title: "Aucun réseau requis",
  privacyCard1Desc:
    "EOM fonctionne entièrement hors ligne. Une fois installé, il n'a jamais besoin d'une connexion internet pour traiter les fichiers.",
  privacyCard2Title: "Aucun compte, aucune télémétrie",
  privacyCard2Desc:
    "Pas d'inscription, pas d'analytique, pas de rapports de plantage. EOM ne collecte absolument aucune donnée sur vous ou vos fichiers.",
  privacyCard3Title: "Open source & vérifiable",
  privacyCard3Desc:
    "Chaque ligne de code est publique sur GitHub. Vérifiez exactement ce qu'EOM fait avec vos fichiers.",
  tableColOnline: "Outils en ligne",
  tableColEom: "EOM",
  tableRow1: "Traite les fichiers localement",
  tableRow2: "Fonctionne sans internet",
  tableRow3: "Aucun compte requis",
  tableRow4: "Gratuit",
  tableRow5: "Open source",
  tableRow6: "Fonctionne hors ligne",

  // DownloadSection
  downloadHeading: "Un seul binaire. Pas d'installateur.",
  downloadSubtext: "Téléchargez, exécutez. Rien n'est envoyé.",
  downloadBtn: "Télécharger",
  dlLinuxNote: "Ubuntu 20.04+",
  dlWindowsNote: "inclut exiftool.exe",
  dlMacNote: "macOS 14+",

  // Footer
  footerBuiltBy: "Créé par Abogo Lincoln",
  footerLicense: "Licence MIT · Open source",

  // Language switcher
  langSwitcherLabel: "Langue",

  // 404
  notFoundTitle: "Page introuvable",
  notFoundDesc: "La page que vous cherchez n'existe pas ou a été déplacée.",
  notFoundGoHome: "Accueil",

  // Error
  errorTitle: "Une erreur est survenue",
  errorDesc: "Une erreur inattendue s'est produite. Veuillez réessayer.",
  errorTryAgain: "Réessayer",
  errorGoHome: "Accueil",
};

export const translations: Record<Locale, Translations> = { en, fr };
