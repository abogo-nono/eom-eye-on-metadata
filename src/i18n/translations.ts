export type Locale = "en" | "fr";

export interface Translations {
  // Meta
  metaTitle: string;
  metaDescription: string;
  metaOgDescription: string;
  metaOgLocale: string;
  metaKeywords: string;
  metaOgImageAlt: string;

  // Navbar
  navGithub: string;
  navDownload: string;

  // Hero
  heroBadge: string;
  heroHeading: string;
  heroSubtext: string;
  heroCtaDownload: string;
  heroCtaGithub: string;
  heroPlatforms: string;
  heroScreenshotAlt: string;

  // Features
  featuresHeading: string;
  featuresSubtext: string;
  feat1Name: string;
  feat1Desc: string;
  feat2Name: string;
  feat2Desc: string;
  feat3Name: string;
  feat3Desc: string;
  feat4Name: string;
  feat4Desc: string;
  feat5Name: string;
  feat5Desc: string;
  feat6Name: string;
  feat6Desc: string;

  // Formats section
  formatsHeading: string;
  formatImages: string;
  formatAudio: string;
  formatVideo: string;
  formatDocuments: string;
  formatsNote: string;

  // MetadataReveal section
  revealBadge: string;
  revealHeading: string;
  revealSubtext: string;
  revealCta: string;
  revealFileLabel: string;
  revealTagCol: string;
  revealValueCol: string;
  revealActionCol: string;
  revealRemove: string;
  revealKeep: string;
  revealRiskHigh: string;
  revealSummary: string;
  revealClean: string;
  catIdentity: string;
  catIds: string;
  catLocation: string;
  catDevice: string;
  catSoftware: string;
  catDates: string;

  // HowItWorks section
  howHeading: string;
  howStep1Title: string;
  howStep1Desc: string;
  howStep2Title: string;
  howStep2Desc: string;
  howStep3Title: string;
  howStep3Desc: string;

  // Gallery
  galleryHeading: string;
  gallerySubtext: string;
  galleryLight: string;
  galleryLightAlt: string;
  galleryFrench: string;
  galleryFrenchAlt: string;
  gallerySettings: string;
  gallerySettingsAlt: string;

  // CLI
  cliBadge: string;
  cliHeading: string;
  cliDesc: string;
  cliComment1: string;
  cliComment2: string;
  cliComment3: string;
  cliComment4: string;

  // ExifToolCallout section
  exifBadge: string;
  exifHeading: string;
  exifDesc1: string;
  exifDesc2: string;
  exifDetected: string;
  exifNotFound: string;
  exifOn: string;
  exifOff: string;

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
  tableVaries: string;

  // DownloadSection
  downloadHeading: string;
  downloadSubtext: string;
  downloadBtn: string;
  dlLinuxNote: string;
  dlWindowsNote: string;
  dlMacNote: string;
  dlReleaseNotes: string;
  dlHelpLinux: string;
  dlHelpMac: string;

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
  metaTitle: "EOM — Eye On Metadata · See and remove what your files reveal",
  metaDescription:
    "EOM shows what your photos, audio, video, PDFs and Office files reveal — location, author, serial numbers — rates the privacy risk and removes it. Free, open source, 100% local.",
  metaOgDescription:
    "See what your files reveal, rate the privacy risk and clean them — locally. Free and open source.",
  metaOgLocale: "en_US",
  metaKeywords:
    "metadata remover, EXIF remover, remove GPS from photo, strip metadata, metadata viewer, EXIF viewer, PDF metadata, Office metadata, privacy, open source, desktop app",
  metaOgImageAlt:
    "EOM desktop app: files rated by privacy risk, tags grouped by category with a cleaning preview",

  // Navbar
  navGithub: "GitHub",
  navDownload: "Download",

  // Hero
  heroBadge: "Free & open source",
  heroHeading: "See what your files are hiding.",
  heroSubtext:
    "EOM shows what your photos, audio, videos, PDFs and Office documents reveal — location, author, device serial numbers — tells you how risky it is, and removes it. Everything stays on your computer.",
  heroCtaDownload: "Download for free",
  heroCtaGithub: "View on GitHub",
  heroPlatforms: "Windows · macOS · Linux — no installer",
  heroScreenshotAlt:
    "EOM workspace: four files rated by privacy risk; the selected photo's tags grouped by category, with GPS, author and serial number marked for removal",

  // Features
  featuresHeading: "Know the risk. Remove what matters.",
  featuresSubtext:
    "Not just a tag viewer: EOM explains what each tag says about you and cleans exactly what you choose.",
  feat1Name: "Privacy-risk score",
  feat1Desc:
    "Every tag is sorted into location, identity, serial numbers, device, dates… and each file gets a High, Medium, Low or Clean rating.",
  feat2Name: "Cleaning profiles",
  feat2Desc:
    "Remove everything, or only what matters: Social media sharing, Full anonymity, Keep copyright, Location only — or pick tags yourself.",
  feat3Name: "Before / after check",
  feat3Desc:
    "Every cleaned file is read again so you see what was removed and what remains. Originals stay untouched if you clean to copies.",
  feat4Name: "Edit & fix dates",
  feat4Desc:
    "Set the title, author, copyright or description, and shift every date when the camera clock was wrong — on one file or a whole folder.",
  feat5Name: "Export reports",
  feat5Desc: "Save the metadata of one file or a whole folder as JSON, CSV, HTML or plain text.",
  feat6Name: "Command line",
  feat6Desc: "The same binary runs as a CLI for scripts and CI: extract, risk, clean and edit.",

  // Formats
  formatsHeading: "Every format you actually use.",
  formatImages: "Images",
  formatAudio: "Audio",
  formatVideo: "Video",
  formatDocuments: "Documents",
  formatsNote:
    "HEIC needs ExifTool. With ExifTool installed, EOM also reads RAW camera files and hundreds of other formats.",

  // MetadataReveal
  revealBadge: "Real metadata exposure",
  revealHeading: "A single photo can reveal where you live.",
  revealSubtext:
    "Your camera or phone writes GPS coordinates, your name and its serial number into every photo. EOM flags them, and the cleaning profile you choose shows exactly what will be removed and what will be kept — before anything is changed.",
  revealCta: "Download EOM",
  revealFileLabel: "holiday.jpg",
  revealTagCol: "Tag",
  revealValueCol: "Value",
  revealActionCol: "When cleaned",
  revealRemove: "Remove",
  revealKeep: "Keep",
  revealRiskHigh: "High",
  revealSummary: "“Social media sharing” removes 7 tags and keeps 2",
  revealClean: "Clean",
  catIdentity: "Author / owner",
  catIds: "Unique IDs / serials",
  catLocation: "Location (GPS)",
  catDevice: "Camera / device",
  catSoftware: "Software",
  catDates: "Dates & times",

  // HowItWorks
  howHeading: "How it works.",
  howStep1Title: "Drop files or folders",
  howStep1Desc:
    "Drag anything onto the window — single files or whole folders. EOM reads every supported file and rates its risk.",
  howStep2Title: "See what they reveal",
  howStep2Desc:
    "Tags are grouped by category, sensitive ones highlighted. Filter by risk, search tags and values, preview the file and its location.",
  howStep3Title: "Clean, then verify",
  howStep3Desc:
    "Pick a profile and clean in place or to copies. Each file is re-read afterwards so you can compare before and after.",

  // Gallery
  galleryHeading: "A closer look.",
  gallerySubtext: "Dark and light themes, English and French interface.",
  galleryLight: "Light theme",
  galleryLightAlt: "EOM workspace in the light theme",
  galleryFrench: "French interface",
  galleryFrenchAlt: "EOM workspace with the French interface",
  gallerySettings: "Settings",
  gallerySettingsAlt:
    "EOM settings: theme, language, default cleaning profile, copies folder and opt-in network options",

  // CLI
  cliBadge: "Command line",
  cliHeading: "Scriptable, too.",
  cliDesc:
    "The same binary works as a command-line tool when its first argument is a command — handy for batch jobs, scripts and CI pipelines.",
  cliComment1: "risk of every file; exit code 2 if any is high",
  cliComment2: "cleaned copies for social media, originals untouched",
  cliComment3: "HTML report of a whole folder",
  cliComment4: "fix a camera clock that was 2 hours behind",

  // ExifToolCallout
  exifBadge: "Backend",
  exifHeading: "ExifTool, when you have it.",
  exifDesc1:
    "If ExifTool is installed, EOM uses it as its main reader: XMP, IPTC, MakerNotes and RAW camera tags across hundreds of formats.",
  exifDesc2:
    "Otherwise EOM uses its built-in readers. The Windows download already includes `exiftool.exe`.",
  exifDetected: "detected",
  exifNotFound: "not found",
  exifOn: "ExifTool on",
  exifOff: "ExifTool off",

  // PrivacyBanner
  privacyHeading: "Your files never leave your device.",
  privacySubtext:
    "Most online tools upload your files to process them. EOM runs entirely on your machine — nothing is ever sent to a server.",
  privacyCard1Title: "Offline by default",
  privacyCard1Desc:
    "EOM never needs the internet. The only two network features — map tiles and the update check — are off until you turn them on.",
  privacyCard2Title: "No account, no telemetry",
  privacyCard2Desc:
    "No sign-up, no analytics, no crash reporting. EOM collects no data about you or your files.",
  privacyCard3Title: "Open source & auditable",
  privacyCard3Desc:
    "Every line of code is public on GitHub, under the MIT licence. Check exactly what EOM does with your files.",
  tableColOnline: "Online tools",
  tableColEom: "EOM",
  tableRow1: "Processes files locally",
  tableRow2: "Works without internet",
  tableRow3: "No account needed",
  tableRow4: "Free to use",
  tableRow5: "Open source",
  tableVaries: "varies",

  // DownloadSection
  downloadHeading: "One file. No installer.",
  downloadSubtext: "Download, unzip, run. Nothing phones home.",
  downloadBtn: "Download",
  dlLinuxNote: "Ubuntu 20.04+ and other distributions with glibc 2.31+",
  dlWindowsNote: "Windows 10+ · ExifTool included",
  dlMacNote: "macOS 14+ (Apple Silicon)",
  dlReleaseNotes: "Release notes & older versions",
  dlHelpLinux: "Linux: after unzipping, run `chmod +x eom` once.",
  dlHelpMac:
    "macOS: the binary is not signed. If macOS blocks it, run `xattr -d com.apple.quarantine eom` once.",

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
  metaTitle: "EOM — Eye On Metadata · Voyez et effacez ce que vos fichiers révèlent",
  metaDescription:
    "EOM montre ce que vos photos, fichiers audio, vidéos, PDF et documents Office révèlent — position, auteur, numéros de série —, évalue le risque et le supprime. Gratuit, open source, 100 % local.",
  metaOgDescription:
    "Voyez ce que vos fichiers révèlent, évaluez le risque et nettoyez-les — en local. Gratuit et open source.",
  metaOgLocale: "fr_FR",
  metaKeywords:
    "supprimer métadonnées, supprimer EXIF, enlever GPS photo, nettoyer métadonnées, lecteur EXIF, métadonnées PDF, métadonnées Office, vie privée, open source, application de bureau",
  metaOgImageAlt:
    "Application EOM : fichiers classés par risque, balises groupées par catégorie avec l'aperçu du nettoyage",

  // Navbar
  navGithub: "GitHub",
  navDownload: "Télécharger",

  // Hero
  heroBadge: "Gratuit & open source",
  heroHeading: "Voyez ce que vos fichiers cachent.",
  heroSubtext:
    "EOM montre ce que vos photos, fichiers audio, vidéos, PDF et documents Office révèlent — position, auteur, numéros de série de vos appareils —, vous dit à quel point c'est risqué, et le supprime. Tout reste sur votre ordinateur.",
  heroCtaDownload: "Télécharger gratuitement",
  heroCtaGithub: "Voir sur GitHub",
  heroPlatforms: "Windows · macOS · Linux — sans installation",
  heroScreenshotAlt:
    "Espace de travail d'EOM : quatre fichiers classés par risque ; les balises de la photo sélectionnée groupées par catégorie, avec le GPS, l'auteur et le numéro de série marqués pour suppression",

  // Features
  featuresHeading: "Connaître le risque. Supprimer l'essentiel.",
  featuresSubtext:
    "Pas seulement un lecteur de balises : EOM explique ce que chaque balise dit de vous et nettoie exactement ce que vous choisissez.",
  feat1Name: "Score de risque",
  feat1Desc:
    "Chaque balise est classée — position, identité, numéros de série, appareil, dates… — et chaque fichier reçoit une note : élevé, moyen, faible ou aucun risque.",
  feat2Name: "Profils de nettoyage",
  feat2Desc:
    "Tout supprimer, ou seulement l'essentiel : Partage sur les réseaux sociaux, Anonymat total, Garder le copyright, Position uniquement — ou vos propres choix.",
  feat3Name: "Vérification avant / après",
  feat3Desc:
    "Chaque fichier nettoyé est relu : vous voyez ce qui a été supprimé et ce qui reste. Les originaux restent intacts si vous nettoyez vers des copies.",
  feat4Name: "Modifier & corriger les dates",
  feat4Desc:
    "Changez le titre, l'auteur, le copyright ou la description, et décalez toutes les dates quand l'horloge de l'appareil était fausse — sur un fichier ou tout un dossier.",
  feat5Name: "Rapports exportables",
  feat5Desc:
    "Enregistrez les métadonnées d'un fichier ou d'un dossier entier en JSON, CSV, HTML ou texte brut.",
  feat6Name: "Ligne de commande",
  feat6Desc:
    "Le même binaire fonctionne en ligne de commande pour vos scripts et votre CI : extraire, évaluer, nettoyer, modifier.",

  // Formats
  formatsHeading: "Tous les formats que vous utilisez vraiment.",
  formatImages: "Images",
  formatAudio: "Audio",
  formatVideo: "Vidéo",
  formatDocuments: "Documents",
  formatsNote:
    "Le HEIC nécessite ExifTool. Avec ExifTool installé, EOM lit aussi les fichiers RAW et des centaines d'autres formats.",

  // MetadataReveal
  revealBadge: "Exposition réelle des métadonnées",
  revealHeading: "Une seule photo peut révéler où vous habitez.",
  revealSubtext:
    "Votre appareil photo ou téléphone inscrit dans chaque photo les coordonnées GPS, votre nom et son numéro de série. EOM les signale, et le profil de nettoyage choisi montre exactement ce qui sera supprimé et ce qui sera gardé — avant toute modification.",
  revealCta: "Télécharger EOM",
  revealFileLabel: "vacances.jpg",
  revealTagCol: "Balise",
  revealValueCol: "Valeur",
  revealActionCol: "Au nettoyage",
  revealRemove: "Supprimer",
  revealKeep: "Garder",
  revealRiskHigh: "Élevé",
  revealSummary: "« Partage sur les réseaux sociaux » supprime 7 balises et en garde 2",
  revealClean: "Nettoyer",
  catIdentity: "Auteur / propriétaire",
  catIds: "Identifiants / numéros de série",
  catLocation: "Position (GPS)",
  catDevice: "Appareil",
  catSoftware: "Logiciel",
  catDates: "Dates et heures",

  // HowItWorks
  howHeading: "Comment ça fonctionne.",
  howStep1Title: "Déposez fichiers ou dossiers",
  howStep1Desc:
    "Glissez n'importe quoi sur la fenêtre — des fichiers ou des dossiers entiers. EOM lit chaque fichier pris en charge et évalue son risque.",
  howStep2Title: "Voyez ce qu'ils révèlent",
  howStep2Desc:
    "Les balises sont groupées par catégorie, les sensibles mises en évidence. Filtrez par risque, cherchez balises et valeurs, prévisualisez le fichier et sa position.",
  howStep3Title: "Nettoyez, puis vérifiez",
  howStep3Desc:
    "Choisissez un profil et nettoyez les originaux ou des copies. Chaque fichier est relu ensuite pour comparer l'avant et l'après.",

  // Gallery
  galleryHeading: "De plus près.",
  gallerySubtext: "Thèmes sombre et clair, interface en français et en anglais.",
  galleryLight: "Thème clair",
  galleryLightAlt: "Espace de travail d'EOM avec le thème clair",
  galleryFrench: "Interface en français",
  galleryFrenchAlt: "Espace de travail d'EOM en français",
  gallerySettings: "Réglages",
  gallerySettingsAlt:
    "Réglages d'EOM : thème, langue, profil de nettoyage par défaut, dossier des copies et options réseau facultatives",

  // CLI
  cliBadge: "Ligne de commande",
  cliHeading: "Scriptable, aussi.",
  cliDesc:
    "Le même binaire fonctionne en ligne de commande quand son premier argument est une commande — pratique pour les traitements par lots, les scripts et la CI.",
  cliComment1: "risque de chaque fichier ; code de sortie 2 si l'un est élevé",
  cliComment2: "copies nettoyées pour les réseaux sociaux, originaux intacts",
  cliComment3: "rapport HTML d'un dossier entier",
  cliComment4: "corriger une horloge d'appareil en retard de 2 heures",

  // ExifToolCallout
  exifBadge: "Moteur",
  exifHeading: "ExifTool, quand vous l'avez.",
  exifDesc1:
    "Si ExifTool est installé, EOM l'utilise comme lecteur principal : XMP, IPTC, MakerNotes et balises des fichiers RAW, sur des centaines de formats.",
  exifDesc2:
    "Sinon, EOM utilise ses lecteurs intégrés. Le téléchargement Windows inclut déjà `exiftool.exe`.",
  exifDetected: "détecté",
  exifNotFound: "non trouvé",
  exifOn: "ExifTool actif",
  exifOff: "ExifTool absent",

  // PrivacyBanner
  privacyHeading: "Vos fichiers ne quittent jamais votre appareil.",
  privacySubtext:
    "La plupart des outils en ligne envoient vos fichiers pour les traiter. EOM s'exécute entièrement sur votre machine — rien n'est jamais envoyé à un serveur.",
  privacyCard1Title: "Hors ligne par défaut",
  privacyCard1Desc:
    "EOM n'a jamais besoin d'internet. Ses deux seules fonctions réseau — les fonds de carte et la recherche de mises à jour — restent désactivées tant que vous ne les activez pas.",
  privacyCard2Title: "Aucun compte, aucune télémétrie",
  privacyCard2Desc:
    "Pas d'inscription, pas de statistiques, pas de rapports de plantage. EOM ne collecte aucune donnée sur vous ou vos fichiers.",
  privacyCard3Title: "Open source & vérifiable",
  privacyCard3Desc:
    "Tout le code est public sur GitHub, sous licence MIT. Vérifiez exactement ce qu'EOM fait de vos fichiers.",
  tableColOnline: "Outils en ligne",
  tableColEom: "EOM",
  tableRow1: "Traite les fichiers localement",
  tableRow2: "Fonctionne sans internet",
  tableRow3: "Aucun compte requis",
  tableRow4: "Gratuit",
  tableRow5: "Open source",
  tableVaries: "variable",

  // DownloadSection
  downloadHeading: "Un seul fichier. Pas d'installateur.",
  downloadSubtext: "Téléchargez, décompressez, lancez. Rien n'est envoyé.",
  downloadBtn: "Télécharger",
  dlLinuxNote: "Ubuntu 20.04+ et autres distributions avec glibc 2.31+",
  dlWindowsNote: "Windows 10+ · ExifTool inclus",
  dlMacNote: "macOS 14+ (Apple Silicon)",
  dlReleaseNotes: "Notes de version & anciennes versions",
  dlHelpLinux: "Linux : après décompression, lancez une fois `chmod +x eom`.",
  dlHelpMac:
    "macOS : le binaire n'est pas signé. Si macOS le bloque, lancez une fois `xattr -d com.apple.quarantine eom`.",

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
