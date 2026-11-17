// Category and profile names, identical to the desktop app's wording.
import type { Category, ProfileId } from "@/lib/risk";
import type { Locale } from "@/content/slugs";

export const CATEGORY_LABEL: Record<Locale, Record<Category, string>> = {
  en: {
    location: "Location (GPS)",
    identity: "Author / owner",
    identifiers: "Unique IDs / serials",
    device: "Camera / device",
    dates: "Dates & times",
    software: "Software / editing history",
    thumbnail: "Embedded thumbnails",
    copyright: "Copyright & licence",
    technical: "Technical (size, colour, codec)",
    other: "Other",
  },
  fr: {
    location: "Position (GPS)",
    identity: "Auteur / propriétaire",
    identifiers: "Identifiants / numéros de série",
    device: "Appareil",
    dates: "Dates et heures",
    software: "Logiciel / historique d'édition",
    thumbnail: "Miniatures intégrées",
    copyright: "Copyright et licence",
    technical: "Technique (taille, couleur, codec)",
    other: "Autre",
  },
};

export const PROFILE_LABEL: Record<Locale, Record<ProfileId, [string, string]>> = {
  en: {
    social: [
      "Social media sharing",
      "Location, identity, serials, device and thumbnails go. Dates and copyright stay.",
    ],
    location: ["Location only", "Only GPS coordinates and place names go."],
    anonymous: ["Full anonymity", "Everything goes except what's needed to display the file."],
    keep_copyright: ["Keep copyright", "Everything goes except your copyright and technical tags."],
    all: ["Remove everything", "Every writable tag. Nothing left."],
  },
  fr: {
    social: [
      "Partage sur les réseaux sociaux",
      "Position, identité, numéros de série, appareil et miniatures partent. Dates et copyright restent.",
    ],
    location: ["Position uniquement", "Seuls les coordonnées GPS et les noms de lieux partent."],
    anonymous: [
      "Anonymat total",
      "Tout part, sauf ce qui est nécessaire pour afficher le fichier.",
    ],
    keep_copyright: [
      "Garder le copyright",
      "Tout part, sauf votre copyright et les balises techniques.",
    ],
    all: ["Tout supprimer", "Toutes les balises modifiables. Plus rien."],
  },
};
