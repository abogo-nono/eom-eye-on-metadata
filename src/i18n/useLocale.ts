import { createContext, useContext } from "react";
import { useRouterState } from "@tanstack/react-router";
import { UI_TEXT, type UI } from "./ui";
import type { Locale } from "@/content/slugs";

export function useLocale(): Locale {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /(^|\/)fr(\/|$)/.test(pathname) ? "fr" : "en";
}

export function useUI(): UI {
  return UI_TEXT[useLocale()];
}

/** The same page in each language, for the language switcher. */
export type Alternates = Record<Locale, string>;
export const AlternatesContext = createContext<Alternates>({ en: "/", fr: "/fr/" });
export const useAlternates = () => useContext(AlternatesContext);
