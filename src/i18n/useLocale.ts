import { useRouterState } from "@tanstack/react-router";
import { translations, type Locale, type Translations } from "./translations";

export function useLocale(): Locale {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return pathname.startsWith("/fr") ? "fr" : "en";
}

export function useT(): (key: keyof Translations) => string {
  const locale = useLocale();
  return (key) => translations[locale][key];
}
