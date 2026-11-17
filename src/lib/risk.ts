// Port of the desktop app's risk.py / profiles.py, so the in-browser checker
// gives the same verdict as EOM itself. Keep the rules in sync with
// https://github.com/abogo-nono/eom/blob/master/risk.py

export type Category =
  | "location"
  | "identity"
  | "identifiers"
  | "device"
  | "dates"
  | "software"
  | "thumbnail"
  | "copyright"
  | "technical"
  | "other";

export type Severity = 0 | 1 | 2 | 3; // none, low, medium, high

export const CATEGORY_SEVERITY: Record<Category, Severity> = {
  location: 3,
  identity: 3,
  identifiers: 3,
  device: 2,
  dates: 2,
  software: 2,
  thumbnail: 2,
  copyright: 1,
  technical: 0,
  other: 1,
};

/** Display order: most revealing first. */
export const CATEGORY_ORDER: Category[] = [
  "location",
  "identity",
  "identifiers",
  "device",
  "dates",
  "software",
  "thumbnail",
  "copyright",
  "other",
  "technical",
];

const RULES: [Category, RegExp][] = [
  [
    "location",
    /gps|latitude|longitude|altitude|location|city|country|province|state$|sublocation|googlemaplink|geotag/,
  ],
  [
    "identifiers",
    /serial|uniqueid|imageuniqueid|documentid|instanceid|originaldocumentid|internalserial|bodyserial|lensserial|uuid|guid|ownerid/,
  ],
  ["thumbnail", /thumbnail|previewimage|jpgfromraw|otherimage/],
  ["copyright", /copyright|rights|licen[cs]e|usageterms|webstatement/],
  [
    "identity",
    /artist|author|creator(?!tool)|by-?line|owner|lastmodifiedby|company|manager|publisher|contact|email|e-mail|phone|address|username|user$|hostname|computer|writer|captionwriter|credit|personinimage|albumartist|composer|performer|encodedby|^xmp$/,
  ],
  ["device", /^make$|model|lens|camera|device|firmware|manufacturer|hardware|androidversion/],
  ["dates", /date|(?<!exposure)time(?!zone)|year$|created|modified|offsettime/],
  [
    "software",
    /software|creatortool|producer|application|appversion|history|tool|encoder|encodingsettings|template|revision|totaltime|processingsoftware|hostcomputer/,
  ],
  [
    "technical",
    /width|height|resolution|bits|color|colour|compression|orientation|samplerate|bitrate|channels|duration|codec|format|version|profile|exposure|fnumber|aperture|iso|focal|flash|whitebalance|metering|shutter|brightness|contrast|saturation|sharpness|scene|gain|ycbcr|components|page|linearized|encoding|layout|pixel|planar|gamma|chromaticit|interop|primar|matrix|transfer|byteorder|megapixels|imagesize|lightsource|sensing|digitalzoom|subjectdistance/,
  ],
];

export function categorize(tag: string): Category {
  const name = tag.toLowerCase();
  for (const [category, pattern] of RULES) {
    if (pattern.test(name)) return category;
  }
  return "other";
}

export type ProfileId = "all" | "anonymous" | "social" | "keep_copyright" | "location";

const ALL: Category[] = Object.keys(CATEGORY_SEVERITY) as Category[];
const allBut = (...keep: Category[]) => ALL.filter((c) => !keep.includes(c));

/** Categories each cleaning profile removes ("all" also removes technical tags). */
export const PROFILE_REMOVES: Record<ProfileId, Category[]> = {
  all: ALL,
  anonymous: allBut("technical"),
  social: ["location", "identity", "identifiers", "device", "thumbnail"],
  keep_copyright: allBut("copyright", "technical"),
  location: ["location"],
};

export const PROFILE_ORDER: ProfileId[] = [
  "social",
  "location",
  "anonymous",
  "keep_copyright",
  "all",
];

export interface Finding {
  tag: string;
  value: string;
  category: Category;
}

export interface Report {
  level: Severity;
  findings: Finding[];
  byCategory: Map<Category, Finding[]>;
}

export function assess(findings: Finding[]): Report {
  const byCategory = new Map<Category, Finding[]>();
  let level: Severity = 0;
  for (const f of findings) {
    const list = byCategory.get(f.category) ?? [];
    list.push(f);
    byCategory.set(f.category, list);
    level = Math.max(level, CATEGORY_SEVERITY[f.category]) as Severity;
  }
  return { level, findings, byCategory };
}
