import type { Locale } from "./slugs";

// Visible on the home page and emitted as FAQPage structured data.
// Answers are written to be quoted on their own: first sentence answers.
export const HOME_FAQ: Record<Locale, [string, string][]> = {
  en: [
    [
      "What is EOM?",
      "EOM (Eye On Metadata) is a free, open-source desktop app for Windows, macOS and Linux that shows the hidden metadata in photos, audio, video, PDF and Office files, rates the privacy risk of each file, and removes the metadata you choose. Everything happens on your computer.",
    ],
    [
      "How do I remove the GPS location from a photo?",
      "Drop the photo (or its folder) on EOM, choose the “Location only” or “Social media sharing” profile and click Clean. The preview shows which tags will be removed before anything changes. See [the full guide](@remove-gps) for the built-in tools of each system.",
    ],
    [
      "Does EOM upload my files?",
      "No. EOM has no server and no account. Files are read and cleaned on your computer. The only network features, map tiles and the update check, are off by default.",
    ],
    [
      "Is EOM free?",
      "Yes. EOM is free and open source under the MIT licence. There is no paid version, no subscription and no account.",
    ],
    [
      "Which files can EOM clean?",
      "Photos (JPEG, PNG, TIFF, WebP, GIF, HEIC), audio (MP3, FLAC, OGG, Opus, WAV, AIFF, M4A, WMA, APE, WavPack), video (MP4, M4V, MOV, MKV, WebM), PDF and Office documents (DOCX, XLSX, PPTX).",
    ],
    [
      "How is the privacy risk calculated?",
      "Each tag is sorted into a category. Location, identity and serial numbers are high risk; device, dates, software and thumbnails are medium; copyright is low; technical tags carry no risk. A file takes the rating of its most sensitive category. [Details](@what-metadata-reveals).",
    ],
    [
      "Can I check a photo without installing anything?",
      "Yes. The [photo checker](@check) on this site reads a photo's metadata in your browser and shows its risk. It doesn't upload the file. To remove the metadata, use the EOM app.",
    ],
    [
      "Does EOM need ExifTool?",
      "No. EOM uses ExifTool when it's installed, for deeper metadata such as XMP, IPTC, maker notes and RAW files, and its built-in readers otherwise. The Windows download includes ExifTool.",
    ],
  ],
  fr: [
    [
      "Qu'est-ce qu'EOM ?",
      "EOM (Eye On Metadata) est une application de bureau gratuite et open source pour Windows, macOS et Linux qui affiche les métadonnées cachées des photos, fichiers audio, vidéos, PDF et documents Office, évalue le risque de chaque fichier pour votre vie privée, et supprime les métadonnées que vous choisissez. Tout se passe sur votre ordinateur.",
    ],
    [
      "Comment supprimer la position GPS d'une photo ?",
      "Déposez la photo (ou son dossier) sur EOM, choisissez le profil « Position uniquement » ou « Partage sur les réseaux sociaux » et cliquez sur Nettoyer. L'aperçu montre les balises qui seront supprimées avant toute modification. Voir [le guide complet](@remove-gps) pour les outils intégrés de chaque système.",
    ],
    [
      "EOM envoie-t-il mes fichiers quelque part ?",
      "Non. EOM n'a ni serveur ni compte. Les fichiers sont lus et nettoyés sur votre ordinateur. Ses seules fonctions réseau, les fonds de carte et la recherche de mises à jour, sont désactivées par défaut.",
    ],
    [
      "EOM est-il gratuit ?",
      "Oui. EOM est gratuit et open source sous licence MIT. Pas de version payante, pas d'abonnement, pas de compte.",
    ],
    [
      "Quels fichiers EOM peut-il nettoyer ?",
      "Photos (JPEG, PNG, TIFF, WebP, GIF, HEIC), audio (MP3, FLAC, OGG, Opus, WAV, AIFF, M4A, WMA, APE, WavPack), vidéo (MP4, M4V, MOV, MKV, WebM), PDF et documents Office (DOCX, XLSX, PPTX).",
    ],
    [
      "Comment le risque est-il calculé ?",
      "Chaque balise est rangée dans une catégorie. Position, identité et numéros de série sont à risque élevé ; appareil, dates, logiciel et miniatures à risque moyen ; le copyright à risque faible ; les balises techniques sans risque. Un fichier prend la note de sa catégorie la plus sensible. [Détails](@what-metadata-reveals).",
    ],
    [
      "Puis-je vérifier une photo sans rien installer ?",
      "Oui. Le [vérificateur de photos](@check) de ce site lit les métadonnées d'une photo dans votre navigateur et affiche son risque. Il n'envoie pas le fichier. Pour supprimer les métadonnées, utilisez l'application EOM.",
    ],
    [
      "EOM a-t-il besoin d'ExifTool ?",
      "Non. EOM utilise ExifTool s'il est installé, pour des métadonnées plus complètes (XMP, IPTC, notes du fabricant, fichiers RAW), et ses lecteurs intégrés sinon. Le téléchargement Windows inclut ExifTool.",
    ],
  ],
};
