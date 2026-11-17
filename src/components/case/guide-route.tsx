import { notFound } from "@tanstack/react-router";
import { GUIDE_KEYS, GUIDE_SLUGS, guidePath, type GuideKey, type Locale } from "@/site";
import { Page } from "./shell";
import { GuidePage } from "./pages";

/** Find the guide whose slug in `locale` is `slug`, or throw a 404. */
export function guideKeyFor(locale: Locale, slug: string): GuideKey {
  const key = GUIDE_KEYS.find((k) => GUIDE_SLUGS[k][locale] === slug);
  if (!key) throw notFound();
  return key;
}

export function GuideRoute({ guideKey }: { guideKey: GuideKey }) {
  return (
    <Page alternates={{ en: guidePath(guideKey, "en"), fr: guidePath(guideKey, "fr") }}>
      <GuidePage guideKey={guideKey} />
    </Page>
  );
}
