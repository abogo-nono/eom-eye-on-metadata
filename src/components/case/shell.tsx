import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AlternatesContext,
  useAlternates,
  useLocale,
  useUI,
  type Alternates,
} from "@/i18n/useLocale";
import {
  APP_VERSION,
  AUTHOR_URL,
  GUIDE_KEYS,
  LATEST_RELEASE_URL,
  REPO_URL,
  SITE_REPO_URL,
  asset,
  guidePath,
  pagePath,
  type GuideKey,
} from "@/site";
import { GUIDES } from "@/content/guides";

// ── Inline markup ─────────────────────────────────────────────────────────────

/** Resolve "@check", "@download", "@guides" or "@<guide-key>" to a URL. */
export function useResolveLink() {
  const locale = useLocale();
  return (target: string): { href: string; external: boolean } => {
    if (!target.startsWith("@")) return { href: target, external: /^https?:/.test(target) };
    const key = target.slice(1);
    if (key === "check") return { href: asset(pagePath("check", locale)), external: false };
    if (key === "guides") return { href: asset(pagePath("guides", locale)), external: false };
    if (key === "download")
      return { href: `${asset(pagePath("home", locale))}#download`, external: false };
    if ((GUIDE_KEYS as string[]).includes(key))
      return { href: asset(guidePath(key as GuideKey, locale)), external: false };
    return { href: "#", external: false };
  };
}

const TOKEN = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

/** Renders `code`, **bold** and [links](@target) inside a string. */
export function Rich({ text }: { text: string }) {
  const resolve = useResolveLink();
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("`") && part.endsWith("`"))
          return <code key={i}>{part.slice(1, -1)}</code>;
        if (part.startsWith("**") && part.endsWith("**"))
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) {
          const { href, external } = resolve(link[2]);
          return (
            <a key={i} href={href} {...(external ? { rel: "noopener", target: "_blank" } : {})}>
              {link[1]}
            </a>
          );
        }
        return part;
      })}
    </>
  );
}

// ── Small pieces of the case-file vocabulary ─────────────────────────────────

/** Text that a black bar slides over when `on` is true. */
export function Redact({
  on,
  children,
  delay = 0,
}: {
  on: boolean;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <span className="redactable" data-on={on} style={{ ["--delay" as string]: `${delay}s` }}>
      <span aria-hidden={on}>{children}</span>
      <span className="bar" aria-hidden="true" />
    </span>
  );
}

export function Stamp({
  children,
  className = "",
  rotate = -8,
  animate = false,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  animate?: boolean;
  delay?: number;
}) {
  return (
    <span
      className={`stamp ${animate ? "stamp-in" : ""} ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        ["--rot" as string]: `${rotate}deg`,
        ["--delay" as string]: `${delay}s`,
      }}
    >
      {children}
    </span>
  );
}

/** Becomes true once the element scrolls into view (and stays true). */
export function useInView<T extends Element>(threshold = 0.35) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown, threshold]);
  return [ref, shown] as const;
}

export function EyeMark({ className = "h-5 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 24" className={className} aria-hidden="true">
      <path
        d="M2 12C8 3.5 14 1 20 1s12 2.5 18 11c-6 8.5-12 11-18 11S8 20.5 2 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <circle cx="20" cy="12" r="5.4" fill="var(--eye)" />
      <circle cx="20" cy="12" r="2.2" fill="var(--desk)" />
    </svg>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────

function LangSwitcher() {
  const locale = useLocale();
  const alternates = useAlternates();
  const ui = useUI();
  const item = (active: boolean) =>
    `px-1.5 py-0.5 transition-colors ${active ? "text-bone underline decoration-marker decoration-2 underline-offset-4" : "text-dust hover:text-bone"}`;
  return (
    <nav aria-label={ui.shell.langLabel} className="typewriter flex items-center gap-1 text-sm">
      <a href={asset(alternates.en)} hrefLang="en" lang="en" className={item(locale === "en")}>
        EN
      </a>
      <span className="text-dust/50" aria-hidden="true">
        /
      </span>
      <a href={asset(alternates.fr)} hrefLang="fr" lang="fr" className={item(locale === "fr")}>
        FR
      </a>
    </nav>
  );
}

export function Header() {
  const locale = useLocale();
  const ui = useUI();
  const [open, setOpen] = useState(false);
  const home = asset(pagePath("home", locale));
  const links = [
    { href: asset(pagePath("check", locale)), label: ui.shell.nav.check },
    { href: asset(pagePath("guides", locale)), label: ui.shell.nav.guides },
    { href: REPO_URL, label: ui.shell.nav.source },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-desk/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-marker focus:px-3 focus:py-1 focus:text-white"
      >
        {ui.shell.skip}
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href={home} className="group flex items-center gap-2.5 text-bone">
          <EyeMark className="h-5 w-8 transition-transform group-hover:scale-110" />
          <span className="display text-2xl tracking-wide">EOM</span>
          <span className="typewriter hidden text-xs text-dust lg:inline">/ Eye On Metadata</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="typewriter text-sm text-dust transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          ))}
          <LangSwitcher />
          <a
            href={`${home}#download`}
            className="btn-ink !py-2 !px-4 !text-sm !shadow-[3px_3px_0_#050505]"
          >
            {ui.shell.nav.download}
          </a>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <LangSwitcher />
          <button
            type="button"
            className="typewriter border border-white/20 px-3 py-1.5 text-sm"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {ui.shell.menu}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 bg-desk px-4 pb-5 pt-2 md:hidden"
          aria-label="Main"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="typewriter block border-b border-white/5 py-3 text-bone"
            >
              {l.label}
            </a>
          ))}
          <a href={`${home}#download`} className="btn-ink mt-4 w-full">
            {ui.shell.nav.download}
          </a>
        </nav>
      )}
    </header>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

export function Footer() {
  const locale = useLocale();
  const ui = useUI();
  const home = asset(pagePath("home", locale));
  const guideList: GuideKey[] = [
    "remove-gps",
    "phone-photos",
    "pdf",
    "office",
    "what-is-exif",
    "online-tools",
  ];
  return (
    <footer className="relative border-t border-white/10 bg-[#0c0b0a]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href={home} className="flex items-center gap-2.5 text-bone">
            <EyeMark className="h-6 w-9" />
            <span className="display text-3xl">EOM</span>
          </a>
          <p className="mt-4 max-w-sm text-sm text-dust">{ui.shell.footerTagline}</p>
          <p className="mt-3 max-w-sm text-sm text-dust">{ui.shell.footerSite}</p>
          <p className="typewriter mt-5 text-xs text-dust">
            v{APP_VERSION} · MIT ·{" "}
            <a className="link-marker" href={AUTHOR_URL}>
              {ui.shell.footerAuthor}
            </a>
          </p>
        </div>
        <FooterCol title={ui.shell.footerProduct}>
          <a href={`${home}#download`}>{ui.shell.nav.download}</a>
          <a href={asset(pagePath("check", locale))}>{ui.shell.nav.check}</a>
          <a href={LATEST_RELEASE_URL}>{ui.shell.footerReleaseNotes}</a>
          <a href={REPO_URL}>{ui.shell.nav.source}</a>
        </FooterCol>
        <FooterCol title={ui.shell.footerGuides}>
          {guideList.map((key) => (
            <a key={key} href={asset(guidePath(key, locale))}>
              {GUIDES[locale][key].h1}
            </a>
          ))}
          <a href={asset(pagePath("guides", locale))} className="!text-bone">
            {ui.shell.allGuides} →
          </a>
        </FooterCol>
        <FooterCol title={ui.shell.footerProject}>
          <a href={`${REPO_URL}/issues`}>{ui.shell.footerReportBug}</a>
          <a href={SITE_REPO_URL}>{ui.shell.footerSiteSource}</a>
          <a href={asset("/llms.txt")}>llms.txt</a>
        </FooterCol>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="kicker mb-4">{title}</h2>
      <div className="flex flex-col gap-2.5 text-sm text-dust [&>a]:transition-colors [&>a:hover]:text-bone">
        {children}
      </div>
    </div>
  );
}

// ── Page frame ────────────────────────────────────────────────────────────────

export function Page({ alternates, children }: { alternates: Alternates; children: ReactNode }) {
  return (
    <AlternatesContext.Provider value={alternates}>
      <div className="min-h-screen overflow-x-clip bg-desk text-bone">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </div>
    </AlternatesContext.Provider>
  );
}
