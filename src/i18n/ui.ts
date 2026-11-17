// Interface copy for every page, in both languages.
// Guides live in src/content/guides.*.ts.

const en = {
  lang: "en",
  shell: {
    skip: "Skip to content",
    nav: { check: "Check a photo", guides: "Guides", source: "Source code", download: "Download" },
    menu: "Menu",
    langLabel: "Language",
    footerTagline:
      "EOM is free, open-source software under the MIT licence. No account, no tracking, no upload.",
    footerSite: "This website sets no cookies, runs no analytics and loads no third-party fonts.",
    footerProduct: "Product",
    footerGuides: "Guides",
    footerProject: "Project",
    footerReleaseNotes: "Release notes",
    footerReportBug: "Report a bug",
    footerSiteSource: "Website source",
    footerAuthor: "Made by Abogo Lincoln",
    allGuides: "All guides",
  },

  home: {
    heroKicker: "Case file · the photos on your phone",
    heroH1a: "Every photo you share",
    heroH1b: "testifies",
    heroH1c: "against you.",
    heroSub:
      "Your phone writes where you were, when, and which device you used into every picture you take. Anyone who gets the file can read it. EOM shows you the full record, tells you how bad it is, and blacks out what you don't want to share.",
    heroCta: "Download EOM · free",
    heroCta2: "Check a photo in your browser",
    heroFacts: ["Windows · macOS · Linux", "Open source, MIT", "Nothing uploaded. Ever."],

    exhibit: "Exhibit A",
    exhibitStamp: "Evidence",
    exhibitFile: "IMG_4127.JPG",
    exhibitRows: {
      artist: "Author",
      gps: "GPS position",
      altitude: "Altitude",
      camera: "Camera",
      serial: "Serial number",
      taken: "Taken",
      software: "Software",
    },
    noteName: "your name",
    noteHome: "your front door, to a few metres",
    noteSerial: "the same number on every photo you've ever taken",
    redact: "Redact",
    redacted: "Redacted. Safe to share.",
    undo: "Undo",
    pressIt: "go on, press it",

    givesHeading: "One photo. Six things about you.",
    givesIntro:
      "None of it shows when you look at the picture. All of it travels with the file: in an email attachment, a cloud link, a forum upload, a photo sent “as a file”.",
    gives: [
      [
        "A",
        "Where you were",
        "GPS coordinates, often accurate to a few metres. Post three photos taken at home and your address stops being a secret.",
      ],
      [
        "B",
        "Who you are",
        "The name set on your camera or computer. The author of a document. The company your copy of Word is licensed to.",
      ],
      [
        "C",
        "What links you",
        "Serial numbers of your camera body and lens. They tie together photos you posted under different names.",
      ],
      [
        "D",
        "What you own",
        "Make, model, firmware and lens. Enough to know what you carry, and roughly what it cost.",
      ],
      [
        "E",
        "When you were there",
        "The time each picture was taken, to the second, with its time zone. Your routine, timestamped.",
      ],
      [
        "F",
        "What happened to it",
        "The software that edited the file and, in documents, earlier authors and revisions you thought were gone.",
      ],
    ] as [string, string, string][],

    storyKicker: "From the archives · December 2012",
    storyHeading: "Found by a photo.",
    storyBody: [
      "John McAfee, then sought for questioning by police in Belize, let journalists from Vice publish a picture of him while he was in hiding.",
      "The photo still carried its GPS coordinates. Within hours, readers had pulled them out of the file and placed him in Guatemala.",
      "The location was meant to be secret. Nobody had checked the file.",
    ],
    storySource: "Reported by Wired and others, December 2012.",

    checkKicker: "Try it now",
    checkHeading: "Interrogate your own photo.",
    checkSub:
      "Drop a picture below. Your browser reads it on your device. It is not uploaded: there is no server to upload it to.",

    profilesKicker: "Redaction levels",
    profilesHeading: "You decide how much to black out.",
    profilesIntro:
      "Not every file needs wiping. Keep the date on a family photo. Keep the copyright on your portfolio. Pick a profile and watch what goes.",
    profilesCount: "{n} of {total} tags blacked out",
    profilesFile: "portfolio-final.jpg · 12 tags",

    verifyKicker: "Proof",
    verifyHeading: "Then it checks its own work.",
    verifyBody:
      "After cleaning, EOM reads every file again and shows you what was removed, what changed and what is left. Want the originals untouched? Clean into a copies folder and EOM never writes over them.",
    verifyNote: "the real app, not a mock-up",
    shots: [
      ["Light theme", "EOM workspace in the light theme"],
      ["In French", "EOM workspace with the French interface"],
      [
        "Settings",
        "EOM settings: theme, language, default profile, copies folder, opt-in network options",
      ],
    ] as [string, string][],
    heroShotAlt:
      "EOM workspace: four files rated by privacy risk; the selected photo's tags grouped by category, with GPS, author and serial number marked for removal",

    notesHeading: "Also in the file.",
    notes: [
      "Drop whole folders. Sub-folders too.",
      "Filter by risk. Search every tag and value.",
      "Edit title, author, copyright and date. Fix a wrong camera clock on a whole folder at once.",
      "Export a JSON, CSV, HTML or text report.",
      "Right-click any file in Windows Explorer or your Linux file manager.",
      "English or French. Dark or light.",
      "Uses ExifTool automatically when it's installed. Bundled with the Windows version.",
    ],

    formatsHeading: "Admissible evidence.",
    formatsSub: "More than 30 file formats, read and cleaned.",
    formatGroups: [
      ["Photos", "JPEG · PNG · TIFF · WebP · GIF · HEIC"],
      ["Audio", "MP3 · FLAC · OGG · Opus · WAV · AIFF · M4A · WMA · APE · WavPack"],
      ["Video", "MP4 · M4V · MOV · MKV · WebM"],
      ["Documents", "PDF · DOCX · XLSX · PPTX"],
    ] as [string, string][],
    formatsNote:
      "HEIC needs ExifTool. With ExifTool installed, EOM also reads RAW camera files and hundreds of other formats.",

    privacyKicker: "Privacy",
    privacyHeadingA: "We can't see your files.",
    privacyHeadingB: "Not “won't”. Can't.",
    privacyBody:
      "EOM has no server, no account and no telemetry. It runs on your computer and never needs the internet. Two features can use the network and both stay off until you switch them on: map tiles for geotagged photos, and a check for new versions.",
    privacySite:
      "This website sets no cookies, runs no analytics and loads no third-party fonts. The photo checker runs in your browser.",
    tableOnline: "Online cleaners",
    tableEom: "EOM",
    tableVaries: "varies",
    tableRows: [
      ["Your file stays on your computer", false],
      ["Works without internet", false],
      ["Cleans whole folders at once", true],
      ["Reads PDF, Office, audio and video", true],
      ["Free, no account", true],
      ["Open source", true],
    ] as [string, boolean][],

    cliKicker: "Command line",
    cliHeading: "For people who script.",
    cliBody:
      "The same binary is a command-line tool when its first argument is a command. Clean before you publish, fail a CI job when a file leaks a location.",
    cli: [
      ["risk of every file; exit code 2 if any is high", "eom risk ~/Pictures -r"],
      [
        "cleaned copies for social media, originals untouched",
        "eom clean ~/Pictures -r --profile social --output-dir ~/clean",
      ],
      ["HTML report of a whole folder", "eom extract ~/Documents -r -o report.html"],
      [
        "photos taken 2 hours too early? shift every date",
        "eom edit ~/Pictures/trip -r --shift +2h",
      ],
    ] as [string, string][],

    guidesKicker: "Case notes",
    guidesHeading: "Straight answers.",
    guidesSub: "Short, precise guides to the questions people actually ask about metadata.",

    faqHeading: "Questions, answered.",

    downloadKicker: "Download",
    downloadHeading: "Close the case.",
    downloadSub: "Free. One file. No installer, no account.",
    downloadBtn: "Download",
    dl: {
      windows: ["Windows", "Windows 10 or later · ExifTool included"],
      macos: ["macOS", "macOS 14 or later · Apple Silicon"],
      linux: ["Linux", "x86-64 · Ubuntu 20.04+ or any glibc 2.31+ distribution"],
    },
    dlHelpLinux: "Linux: after unzipping, run `chmod +x eom` once.",
    dlHelpMac:
      "macOS: the binary isn't signed. If macOS blocks it, run `xattr -d com.apple.quarantine eom` once.",
    dlNotes: "Release notes and older versions",
    version: "Version",
  },

  checker: {
    drop: "Drop a photo here",
    dropOr: "or click to choose one",
    dropFormats: "JPEG · HEIC · PNG · TIFF",
    dropping: "Let go.",
    reading: "Reading the file…",
    local: "Read on your device. Not uploaded.",
    verdict: ["Clean", "Low risk", "Medium risk", "High risk"],
    summary: "{n} tags found · {s} sensitive",
    nothing:
      "No metadata found. The file is already clean, or it's a format your browser can't read here. The EOM app reads more than 30 formats, including PDF, Office documents and audio.",
    error: "This file couldn't be read. Try a JPEG, HEIC, PNG or TIFF photo.",
    another: "Check another file",
    profile: "What would EOM black out?",
    willGo: "{n} tags would be removed",
    map: "See this position on OpenStreetMap",
    mapNote: "opens an external site",
    cta: "Remove it for real: download EOM",
    ctaNote: "The desktop app rewrites the file, then reads it again to prove it worked.",
    proof:
      "Don't take our word for it: open your browser's developer tools, go to the Network tab, and drop a file. Nothing leaves.",
    more: "{n} more",
    technical: "Technical tags (size, colour, exposure): harmless",
  },

  checkPage: {
    kicker: "Free tool · runs in your browser",
    h1: "Check a photo's metadata. Without uploading it.",
    lead: "See the GPS position, camera serial number, author name and every other tag hidden in a photo, with a privacy-risk verdict. The file is read by your browser, on your device.",
    howHeading: "How this checker works",
    how: [
      "Your browser opens the file locally with the open-source exifr library.",
      "Each tag is classified with the same rules as the EOM desktop app: location, identity, unique IDs, device, dates, software, thumbnails, copyright.",
      "The most sensitive category sets the verdict: high, medium, low or clean.",
      "Nothing is sent anywhere. This page has no server-side code and no analytics.",
    ],
    limitsHeading: "What it can't do",
    limits:
      "A browser can read a photo's metadata but shouldn't rewrite your files. To remove the metadata, and to check PDFs, Office documents, audio and video, use the EOM desktop app. It's free.",
  },

  guidesPage: {
    kicker: "Case notes",
    h1: "Metadata guides",
    lead: "How to find and remove the hidden data in photos, PDFs, Office documents and audio files, on every system. Short, tested, no fluff.",
    groups: {
      photos: "Photos",
      documents: "Documents & media",
      systems: "By system",
      basics: "Understand",
    },
  },

  guide: {
    updated: "Updated",
    readTime: "{n} min read",
    short: "In short",
    steps: "Step by step",
    faq: "Questions",
    related: "Related case notes",
    toc: "On this page",
    ctaHeading: "Do it in one drop.",
    ctaBody:
      "EOM finds every tag, rates the risk and removes what you choose. Free, open source, offline.",
    ctaCheck: "Check a photo first",
    breadcrumbHome: "Home",
    breadcrumbGuides: "Guides",
  },

  notFound: {
    title: "Nothing on file.",
    desc: "This page doesn't exist, or it has been moved.",
    home: "Back to the case",
  },
  error: {
    title: "Something went wrong.",
    desc: "An unexpected error occurred. Please try again.",
    retry: "Try again",
    home: "Home",
  },
};

export type UI = typeof en;

const fr: UI = {
  lang: "fr",
  shell: {
    skip: "Aller au contenu",
    nav: {
      check: "Vérifier une photo",
      guides: "Guides",
      source: "Code source",
      download: "Télécharger",
    },
    menu: "Menu",
    langLabel: "Langue",
    footerTagline:
      "EOM est un logiciel libre et gratuit, sous licence MIT. Pas de compte, pas de pistage, pas d'envoi.",
    footerSite:
      "Ce site ne dépose aucun cookie, ne mesure pas d'audience et ne charge aucune police externe.",
    footerProduct: "Produit",
    footerGuides: "Guides",
    footerProject: "Projet",
    footerReleaseNotes: "Notes de version",
    footerReportBug: "Signaler un bug",
    footerSiteSource: "Code du site",
    footerAuthor: "Créé par Abogo Lincoln",
    allGuides: "Tous les guides",
  },

  home: {
    heroKicker: "Dossier · les photos de votre téléphone",
    heroH1a: "Chaque photo que vous partagez",
    heroH1b: "témoigne",
    heroH1c: "contre vous.",
    heroSub:
      "Votre téléphone inscrit dans chaque photo où vous étiez, à quelle heure et avec quel appareil. Quiconque récupère le fichier peut le lire. EOM vous montre ce dossier en entier, vous dit à quel point il est compromettant, et noircit ce que vous ne voulez pas partager.",
    heroCta: "Télécharger EOM · gratuit",
    heroCta2: "Vérifier une photo dans le navigateur",
    heroFacts: ["Windows · macOS · Linux", "Open source, MIT", "Aucun envoi. Jamais."],

    exhibit: "Pièce A",
    exhibitStamp: "Pièce à conviction",
    exhibitFile: "IMG_4127.JPG",
    exhibitRows: {
      artist: "Auteur",
      gps: "Position GPS",
      altitude: "Altitude",
      camera: "Appareil",
      serial: "N° de série",
      taken: "Prise le",
      software: "Logiciel",
    },
    noteName: "votre nom",
    noteHome: "votre porte d'entrée, à quelques mètres près",
    noteSerial: "le même numéro sur toutes vos photos",
    redact: "Caviarder",
    redacted: "Caviardé. Prêt à partager.",
    undo: "Annuler",
    pressIt: "allez-y, appuyez",

    givesHeading: "Une photo. Six choses sur vous.",
    givesIntro:
      "Rien de tout cela ne se voit sur l'image. Tout voyage avec le fichier : en pièce jointe, par lien de partage, sur un forum, dans une photo envoyée « en tant que fichier ».",
    gives: [
      [
        "A",
        "Où vous étiez",
        "Des coordonnées GPS, souvent précises à quelques mètres. Publiez trois photos prises chez vous et votre adresse n'est plus un secret.",
      ],
      [
        "B",
        "Qui vous êtes",
        "Le nom configuré sur votre appareil ou votre ordinateur. L'auteur d'un document. La société à qui votre licence Word est attribuée.",
      ],
      [
        "C",
        "Ce qui vous relie",
        "Les numéros de série de votre boîtier et de votre objectif. Ils relient des photos publiées sous des noms différents.",
      ],
      [
        "D",
        "Ce que vous possédez",
        "Marque, modèle, firmware, objectif. De quoi savoir ce que vous avez sur vous, et à peu près combien ça vaut.",
      ],
      [
        "E",
        "Quand vous y étiez",
        "L'heure de chaque prise de vue, à la seconde, avec le fuseau horaire. Vos habitudes, horodatées.",
      ],
      [
        "F",
        "Ce qu'il a subi",
        "Le logiciel qui a retouché le fichier et, dans les documents, les auteurs et révisions précédents que vous pensiez effacés.",
      ],
    ],

    storyKicker: "Archives · décembre 2012",
    storyHeading: "Retrouvé grâce à une photo.",
    storyBody: [
      "John McAfee, alors recherché pour être interrogé par la police du Belize, laisse des journalistes de Vice publier une photo de lui pendant sa cavale.",
      "La photo contient toujours ses coordonnées GPS. En quelques heures, des lecteurs les extraient du fichier et le situent au Guatemala.",
      "Le lieu devait rester secret. Personne n'avait vérifié le fichier.",
    ],
    storySource: "Rapporté par Wired et d'autres, décembre 2012.",

    checkKicker: "Essayez maintenant",
    checkHeading: "Interrogez votre propre photo.",
    checkSub:
      "Déposez une image ci-dessous. Votre navigateur la lit sur votre appareil. Elle n'est pas envoyée : il n'y a aucun serveur où l'envoyer.",

    profilesKicker: "Niveaux de caviardage",
    profilesHeading: "Vous décidez de ce qui est noirci.",
    profilesIntro:
      "Tous les fichiers n'ont pas besoin d'être vidés. Gardez la date d'une photo de famille. Gardez le copyright de votre portfolio. Choisissez un profil et regardez ce qui disparaît.",
    profilesCount: "{n} balises sur {total} noircies",
    profilesFile: "portfolio-final.jpg · 12 balises",

    verifyKicker: "Preuve",
    verifyHeading: "Puis il vérifie son propre travail.",
    verifyBody:
      "Après le nettoyage, EOM relit chaque fichier et vous montre ce qui a été supprimé, ce qui a changé et ce qui reste. Vous voulez garder les originaux intacts ? Nettoyez vers un dossier de copies : EOM n'y touche jamais.",
    verifyNote: "la vraie application, pas une maquette",
    shots: [
      ["Thème clair", "Espace de travail d'EOM avec le thème clair"],
      ["En français", "Espace de travail d'EOM en français"],
      [
        "Réglages",
        "Réglages d'EOM : thème, langue, profil par défaut, dossier des copies, options réseau facultatives",
      ],
    ],
    heroShotAlt:
      "Espace de travail d'EOM : quatre fichiers classés par risque ; les balises de la photo sélectionnée groupées par catégorie, avec le GPS, l'auteur et le numéro de série marqués pour suppression",

    notesHeading: "Aussi au dossier.",
    notes: [
      "Déposez des dossiers entiers, sous-dossiers compris.",
      "Filtrez par risque. Cherchez dans toutes les balises et valeurs.",
      "Modifiez titre, auteur, copyright et date. Corrigez l'horloge d'un appareil sur tout un dossier d'un coup.",
      "Exportez un rapport JSON, CSV, HTML ou texte.",
      "Clic droit sur n'importe quel fichier dans l'Explorateur Windows ou votre gestionnaire de fichiers Linux.",
      "En français ou en anglais. Sombre ou clair.",
      "Utilise ExifTool automatiquement s'il est installé. Inclus dans la version Windows.",
    ],

    formatsHeading: "Pièces recevables.",
    formatsSub: "Plus de 30 formats de fichiers, lus et nettoyés.",
    formatGroups: [
      ["Photos", "JPEG · PNG · TIFF · WebP · GIF · HEIC"],
      ["Audio", "MP3 · FLAC · OGG · Opus · WAV · AIFF · M4A · WMA · APE · WavPack"],
      ["Vidéo", "MP4 · M4V · MOV · MKV · WebM"],
      ["Documents", "PDF · DOCX · XLSX · PPTX"],
    ],
    formatsNote:
      "Le HEIC nécessite ExifTool. Avec ExifTool installé, EOM lit aussi les fichiers RAW et des centaines d'autres formats.",

    privacyKicker: "Vie privée",
    privacyHeadingA: "Nous ne pouvons pas voir vos fichiers.",
    privacyHeadingB: "Pas « ne voulons pas ». Ne pouvons pas.",
    privacyBody:
      "EOM n'a ni serveur, ni compte, ni télémétrie. Il tourne sur votre ordinateur et n'a jamais besoin d'internet. Deux fonctions peuvent utiliser le réseau et restent désactivées tant que vous ne les activez pas : les fonds de carte pour les photos géolocalisées, et la recherche de nouvelles versions.",
    privacySite:
      "Ce site ne dépose aucun cookie, ne mesure pas d'audience et ne charge aucune police externe. Le vérificateur de photos tourne dans votre navigateur.",
    tableOnline: "Outils en ligne",
    tableEom: "EOM",
    tableVaries: "variable",
    tableRows: [
      ["Le fichier reste sur votre ordinateur", false],
      ["Fonctionne sans internet", false],
      ["Nettoie des dossiers entiers d'un coup", true],
      ["Lit PDF, Office, audio et vidéo", true],
      ["Gratuit, sans compte", true],
      ["Open source", true],
    ],

    cliKicker: "Ligne de commande",
    cliHeading: "Pour ceux qui scriptent.",
    cliBody:
      "Le même binaire devient un outil en ligne de commande quand son premier argument est une commande. Nettoyez avant de publier, faites échouer un job de CI quand un fichier divulgue une position.",
    cli: [
      ["risque de chaque fichier ; code de sortie 2 si l'un est élevé", "eom risk ~/Images -r"],
      [
        "copies nettoyées pour les réseaux sociaux, originaux intacts",
        "eom clean ~/Images -r --profile social --output-dir ~/propre",
      ],
      ["rapport HTML d'un dossier entier", "eom extract ~/Documents -r -o rapport.html"],
      [
        "photos prises 2 heures trop tôt ? décalez toutes les dates",
        "eom edit ~/Images/voyage -r --shift +2h",
      ],
    ],

    guidesKicker: "Notes d'enquête",
    guidesHeading: "Des réponses nettes.",
    guidesSub:
      "Des guides courts et précis sur les questions que l'on se pose vraiment sur les métadonnées.",

    faqHeading: "Vos questions.",

    downloadKicker: "Téléchargement",
    downloadHeading: "Classez l'affaire.",
    downloadSub: "Gratuit. Un seul fichier. Pas d'installation, pas de compte.",
    downloadBtn: "Télécharger",
    dl: {
      windows: ["Windows", "Windows 10 ou plus récent · ExifTool inclus"],
      macos: ["macOS", "macOS 14 ou plus récent · Apple Silicon"],
      linux: ["Linux", "x86-64 · Ubuntu 20.04+ ou toute distribution avec glibc 2.31+"],
    },
    dlHelpLinux: "Linux : après décompression, lancez une fois `chmod +x eom`.",
    dlHelpMac:
      "macOS : le binaire n'est pas signé. Si macOS le bloque, lancez une fois `xattr -d com.apple.quarantine eom`.",
    dlNotes: "Notes de version et anciennes versions",
    version: "Version",
  },

  checker: {
    drop: "Déposez une photo ici",
    dropOr: "ou cliquez pour en choisir une",
    dropFormats: "JPEG · HEIC · PNG · TIFF",
    dropping: "Lâchez.",
    reading: "Lecture du fichier…",
    local: "Lu sur votre appareil. Aucun envoi.",
    verdict: ["Aucun risque", "Risque faible", "Risque moyen", "Risque élevé"],
    summary: "{n} balises trouvées · {s} sensibles",
    nothing:
      "Aucune métadonnée trouvée. Le fichier est déjà propre, ou c'est un format que le navigateur ne sait pas lire ici. L'application EOM lit plus de 30 formats, dont le PDF, les documents Office et l'audio.",
    error: "Ce fichier n'a pas pu être lu. Essayez une photo JPEG, HEIC, PNG ou TIFF.",
    another: "Vérifier un autre fichier",
    profile: "Qu'est-ce qu'EOM noircirait ?",
    willGo: "{n} balises seraient supprimées",
    map: "Voir cette position sur OpenStreetMap",
    mapNote: "ouvre un site externe",
    cta: "Supprimez-les vraiment : téléchargez EOM",
    ctaNote: "L'application réécrit le fichier, puis le relit pour prouver que ça a marché.",
    proof:
      "Ne nous croyez pas sur parole : ouvrez les outils de développement de votre navigateur, onglet Réseau, et déposez un fichier. Rien ne sort.",
    more: "{n} de plus",
    technical: "Balises techniques (taille, couleur, exposition) : sans danger",
  },

  checkPage: {
    kicker: "Outil gratuit · dans votre navigateur",
    h1: "Voir les métadonnées d'une photo. Sans l'envoyer.",
    lead: "Découvrez la position GPS, le numéro de série de l'appareil, le nom de l'auteur et toutes les autres balises cachées dans une photo, avec un verdict de risque. Le fichier est lu par votre navigateur, sur votre appareil.",
    howHeading: "Comment fonctionne ce vérificateur",
    how: [
      "Votre navigateur ouvre le fichier localement avec la bibliothèque open source exifr.",
      "Chaque balise est classée avec les mêmes règles que l'application EOM : position, identité, identifiants uniques, appareil, dates, logiciel, miniatures, copyright.",
      "La catégorie la plus sensible donne le verdict : élevé, moyen, faible ou aucun risque.",
      "Rien n'est envoyé. Cette page n'a ni code côté serveur, ni mesure d'audience.",
    ],
    limitsHeading: "Ce qu'il ne fait pas",
    limits:
      "Un navigateur peut lire les métadonnées d'une photo, mais ne devrait pas réécrire vos fichiers. Pour les supprimer, et pour vérifier PDF, documents Office, audio et vidéo, utilisez l'application EOM. Elle est gratuite.",
  },

  guidesPage: {
    kicker: "Notes d'enquête",
    h1: "Guides sur les métadonnées",
    lead: "Comment trouver et supprimer les données cachées dans les photos, PDF, documents Office et fichiers audio, sur chaque système. Courts, vérifiés, sans blabla.",
    groups: {
      photos: "Photos",
      documents: "Documents et médias",
      systems: "Par système",
      basics: "Comprendre",
    },
  },

  guide: {
    updated: "Mis à jour le",
    readTime: "{n} min de lecture",
    short: "En bref",
    steps: "Étape par étape",
    faq: "Questions",
    related: "Notes liées",
    toc: "Sur cette page",
    ctaHeading: "Faites-le en un glisser-déposer.",
    ctaBody:
      "EOM trouve chaque balise, évalue le risque et supprime ce que vous choisissez. Gratuit, open source, hors ligne.",
    ctaCheck: "Vérifier une photo d'abord",
    breadcrumbHome: "Accueil",
    breadcrumbGuides: "Guides",
  },

  notFound: {
    title: "Rien au dossier.",
    desc: "Cette page n'existe pas, ou elle a été déplacée.",
    home: "Retour au dossier",
  },
  error: {
    title: "Une erreur est survenue.",
    desc: "Une erreur inattendue s'est produite. Veuillez réessayer.",
    retry: "Réessayer",
    home: "Accueil",
  },
};

export const UI_TEXT: Record<"en" | "fr", UI> = { en, fr };

/** Replace {name} placeholders. */
export function fmt(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (_, k) => String(values[k] ?? ""));
}
