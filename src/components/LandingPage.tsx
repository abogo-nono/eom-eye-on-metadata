import {
  Github,
  Download,
  Image as ImageIcon,
  Music,
  Video,
  FileText,
  FileDown,
  Apple,
  WifiOff,
  ShieldCheck,
  Lock,
  FolderOpen,
  Eye,
  ShieldAlert,
  SlidersHorizontal,
  Columns2,
  PencilLine,
  Terminal,
  ShieldCheck as CleanIcon,
  User,
  Hash,
  MapPin,
  Camera,
  Code,
  Clock,
  ExternalLink,
} from "lucide-react";
import workspaceDark from "@/assets/workspace-dark.png";
import workspaceLight from "@/assets/workspace-light.png";
import workspaceFr from "@/assets/workspace-fr.png";
import settingsDark from "@/assets/settings-dark.png";
import { useLocale, useT } from "@/i18n/useLocale";
import { APP_VERSION, AUTHOR_URL, DOWNLOADS, LATEST_RELEASE_URL, REPO_URL, asset } from "@/site";

function LinuxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.88 12.685c-.4 0 .08.2.601.28.14-.1.27-.22.39-.33a3.001 3.001 0 01-.99.05m2.14-.53c.23-.33.4-.69.47-1.06-.06.27-.2.5-.33.73-.75.47-.07-.27 0-.56-.8 1.01-.11.6-.14.89m.781-2.05c.05-.721-.14-.501-.2-.221.07.04.13.5.2.22M12.38.31c.2.04.45.07.42.12.23-.05.28-.1-.43-.12m.43.12l-.15.03.14-.01V.43m6.633 9.944c.02.64-.2.95-.38 1.5l-.35.181c-.28.54.03.35-.17.78-.44.39-1.34 1.22-1.62 1.301-.201 0 .14-.25.19-.34-.591.4-.481.6-1.371.85l-.03-.06c-2.221 1.04-5.303-1.02-5.253-3.842-.03.17-.07.13-.12.2a3.551 3.552 0 012.001-3.501 3.361 3.362 0 013.732.48 3.341 3.342 0 00-2.721-1.3c-1.18.01-2.281.76-2.651 1.57-.6.38-.67 1.47-.93 1.661-.361 2.601.66 3.722 2.38 5.042.27.19.08.21.12.35a4.702 4.702 0 01-1.53-1.16c.23.33.47.66.8.91-.55-.18-1.27-1.3-1.48-1.35.93 1.66 3.78 2.921 5.261 2.3a6.203 6.203 0 01-2.33-.28c-.33-.16-.77-.51-.7-.57a5.802 5.803 0 005.902-.84c.44-.35.93-.94 1.07-.95-.2.32.04.16-.12.44.44-.72-.2-.3.46-1.24l.24.33c-.09-.6.74-1.321.66-2.262.19-.3.2.3 0 .97.29-.74.08-.85.15-1.46.08.2.18.42.23.63-.18-.7.2-1.2.28-1.6-.09-.05-.28.3-.32-.53 0-.37.1-.2.14-.28-.08-.05-.26-.32-.38-.861.08-.13.22.33.34.34-.08-.42-.2-.75-.2-1.08-.34-.68-.12.1-.4-.3-.34-1.091.3-.25.34-.74.54.77.84 1.96.981 2.46-.1-.6-.28-1.2-.49-1.76.16.07-.26-1.241.21-.37A7.823 7.824 0 0017.702 1.6c.18.17.42.39.33.42-.75-.45-.62-.48-.73-.67-.61-.25-.65.02-1.06 0C15.082.73 14.862.8 13.8.4l.05.23c-.77-.25-.9.1-1.73 0-.05-.04.27-.14.53-.18-.741.1-.701-.14-1.431.03.17-.13.36-.21.55-.32-.6.04-1.44.35-1.18.07C9.6.68 7.847 1.3 6.867 2.22L6.838 2c-.45.54-1.96 1.611-2.08 2.311l-.131.03c-.23.4-.38.85-.57 1.261-.3.52-.45.2-.4.28-.6 1.22-.9 2.251-1.16 3.102.18.27 0 1.65.07 2.76-.3 5.463 3.84 10.776 8.363 12.006.67.23 1.65.23 2.49.25-.99-.28-1.12-.15-2.08-.49-.7-.32-.85-.7-1.34-1.13l.2.35c-.971-.34-.57-.42-1.361-.67l.21-.27c-.31-.03-.83-.53-.97-.81l-.34.01c-.41-.501-.63-.871-.61-1.161l-.111.2c-.13-.21-1.52-1.901-.8-1.511-.13-.12-.31-.2-.5-.55l.14-.17c-.35-.44-.64-1.02-.62-1.2.2.24.32.3.45.33-.88-2.172-.93-.12-1.601-2.202l.15-.02c-.1-.16-.18-.34-.26-.51l.06-.6c-.63-.74-.18-3.102-.09-4.402.07-.54.53-1.1.88-1.981l-.21-.04c.4-.71 2.341-2.872 3.241-2.761.43-.55-.09 0-.18-.14.96-.991 1.26-.7 1.901-.88.7-.401-.6.16-.27-.151 1.2-.3.85-.7 2.421-.85.16.1-.39.14-.52.26 1-.49 3.151-.37 4.562.27 1.63.77 3.461 3.011 3.531 5.132l.08.02c-.04.85.13 1.821-.17 2.711l.2-.42M9.54 13.236l-.05.28c.26.35.47.73.8 1.01-.24-.47-.42-.66-.75-1.3m.62-.02c-.14-.15-.22-.34-.31-.52.08.32.26.6.43.88l-.12-.36m10.945-2.382l-.07.15c-.1.76-.34 1.511-.69 2.212.4-.73.65-1.541.75-2.362M12.45.12c.27-.1.66-.05.95-.12-.37.03-.74.05-1.1.1l.15.02M3.006 5.142c.07.57-.43.8.11.42.3-.66-.11-.18-.1-.42m-.64 2.661c.12-.39.15-.62.2-.84-.35.44-.17.53-.2.83" />
    </svg>
  );
}

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
  );
}

// ── Language switcher ─────────────────────────────────────────────────────────

function LangSwitcher({ size = "sm" }: { size?: "sm" | "xs" }) {
  const locale = useLocale();
  const t = useT();
  const text = size === "xs" ? "text-xs" : "text-sm";
  const item = (active: boolean) =>
    `px-1.5 py-0.5 rounded transition-colors ${
      active ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
    }`;
  return (
    <nav
      aria-label={t("langSwitcherLabel")}
      className={`flex items-center gap-1 font-mono ${text}`}
    >
      <a
        href={asset("/")}
        hrefLang="en"
        lang="en"
        aria-label="English"
        className={item(locale === "en")}
      >
        EN
      </a>
      <span className="text-border select-none" aria-hidden="true">
        |
      </span>
      <a
        href={asset("/fr/")}
        hrefLang="fr"
        lang="fr"
        aria-label="Français"
        className={item(locale === "fr")}
      >
        FR
      </a>
    </nav>
  );
}

// ── Shared bits ───────────────────────────────────────────────────────────────

function WindowFrame({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-2 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        {label && <span className="ml-3 font-mono text-xs text-muted-foreground">{label}</span>}
      </div>
      {children}
    </div>
  );
}

/** Renders `backticked` parts of a translated string as inline code. */
function WithCode({ text }: { text: string }) {
  return (
    <>
      {text.split("`").map((part, i) =>
        i % 2 ? (
          <code key={i} className="rounded bg-background px-1.5 py-0.5 font-mono text-foreground">
            {part}
          </code>
        ) : (
          part
        ),
      )}
    </>
  );
}

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-md bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors";

// ── Navbar ────────────────────────────────────────────────────────────────────

function Navbar() {
  const t = useT();
  const locale = useLocale();
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href={asset(locale === "fr" ? "/fr/" : "/")} className="flex items-center gap-2.5">
          <img src={asset("/app-logo.ico")} alt="" className="h-6 w-6 object-contain" />
          <span className="font-mono text-base font-semibold tracking-wide">EOM</span>
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitcher />
          <a
            href={REPO_URL}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            {t("navGithub")}
          </a>
          <a href="#download" className={`${primaryBtn} px-4 py-2`}>
            <Download className="h-4 w-4" />
            {t("navDownload")}
          </a>
        </div>
      </nav>
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  const t = useT();
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 pb-20 sm:px-6 lg:pt-20 lg:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
        <div>
          <a
            href={LATEST_RELEASE_URL}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <img src={asset("/app-logo.ico")} alt="" className="h-4 w-4 object-contain" />v
            {APP_VERSION} · {t("heroBadge")}
          </a>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {t("heroHeading")}
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-[17px]">
            {t("heroSubtext")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#download" className={`${primaryBtn} px-5 py-3`}>
              <Download className="h-4 w-4" />
              {t("heroCtaDownload")}
            </a>
            <a
              href={REPO_URL}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-5 py-3 text-sm font-medium text-foreground hover:bg-card transition-colors"
            >
              <Github className="h-4 w-4" />
              {t("heroCtaGithub")}
            </a>
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">{t("heroPlatforms")}</p>
        </div>

        <WindowFrame>
          <img
            src={workspaceDark}
            alt={t("heroScreenshotAlt")}
            width={1280}
            height={800}
            fetchPriority="high"
            className="block h-auto w-full rounded-md"
          />
        </WindowFrame>
      </div>
    </section>
  );
}

// ── Features ──────────────────────────────────────────────────────────────────

function Features() {
  const t = useT();
  const features = [
    { icon: ShieldAlert, name: t("feat1Name"), desc: t("feat1Desc") },
    { icon: SlidersHorizontal, name: t("feat2Name"), desc: t("feat2Desc") },
    { icon: Columns2, name: t("feat3Name"), desc: t("feat3Desc") },
    { icon: PencilLine, name: t("feat4Name"), desc: t("feat4Desc") },
    { icon: FileDown, name: t("feat5Name"), desc: t("feat5Desc") },
    { icon: Terminal, name: t("feat6Name"), desc: t("feat6Desc") },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("featuresHeading")}
        </h2>
        <p className="mt-3 text-muted-foreground">{t("featuresSubtext")}</p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.name} className="rounded-lg border border-border bg-card p-5">
            <f.icon className="h-5 w-5 text-primary" strokeWidth={2} />
            <h3 className="mt-4 text-sm font-semibold">{f.name}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── MetadataReveal ────────────────────────────────────────────────────────────

function MetadataReveal() {
  const t = useT();
  // Mirrors the app: tags grouped by category, with what the "Social media
  // sharing" profile does to each of them.
  const groups = [
    { icon: User, label: t("catIdentity"), rows: [["Artist", "Jane Doe", true]] },
    { icon: Hash, label: t("catIds"), rows: [["SerialNumber", "DNPXQ2M5", true]] },
    {
      icon: MapPin,
      label: t("catLocation"),
      rows: [
        ["GPSLatitude", "48° 51' 30.2\" N", true],
        ["GPSLongitude", "2° 17' 40.2\" E", true],
        ["GPSAltitude", "35 m", true],
      ],
    },
    {
      icon: Camera,
      label: t("catDevice"),
      rows: [
        ["Make", "Apple", true],
        ["Model", "iPhone 15 Pro", true],
      ],
    },
    { icon: Code, label: t("catSoftware"), rows: [["Software", "17.3.1", false]] },
    {
      icon: Clock,
      label: t("catDates"),
      rows: [["DateTimeOriginal", "2024:03:14 08:42:31", false]],
    },
  ] as const;
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
              {t("revealBadge")}
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("revealHeading")}
            </h2>
            <p className="mt-4 text-muted-foreground">{t("revealSubtext")}</p>
            <div className="mt-6">
              <a href="#download" className={`${primaryBtn} px-4 py-2`}>
                <Download className="h-4 w-4" />
                {t("revealCta")}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="font-mono text-sm font-semibold">{t("revealFileLabel")}</span>
              <span className="rounded-full bg-destructive/15 px-2 py-0.5 text-[11px] font-semibold text-destructive">
                {t("revealRiskHigh")}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] text-sm">
                <thead>
                  <tr className="border-b border-border text-left font-mono text-[11px] text-muted-foreground">
                    <th className="px-4 py-2 font-medium">{t("revealTagCol")}</th>
                    <th className="px-4 py-2 font-medium">{t("revealValueCol")}</th>
                    <th className="px-4 py-2 font-medium">{t("revealActionCol")}</th>
                  </tr>
                </thead>
                {groups.map((g) => (
                  <tbody key={g.label}>
                    <tr className="border-t border-border/60">
                      <th colSpan={3} className="px-4 pt-2.5 pb-1 text-left text-xs font-semibold">
                        <span className="inline-flex items-center gap-2">
                          <g.icon className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                          {g.label}
                        </span>
                      </th>
                    </tr>
                    {g.rows.map(([tag, value, removed]) => (
                      <tr key={tag}>
                        <td className="py-1 pr-4 pl-9 font-mono text-xs text-muted-foreground">
                          {tag}
                        </td>
                        <td
                          className={`px-4 py-1 font-mono text-xs ${
                            removed ? "text-muted-foreground line-through" : "text-foreground"
                          }`}
                        >
                          {value}
                        </td>
                        <td
                          className={`px-4 py-1 text-xs ${removed ? "text-destructive" : "text-muted-foreground"}`}
                        >
                          {removed ? t("revealRemove") : t("revealKeep")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3">
              <span className="text-xs text-muted-foreground">{t("revealSummary")}</span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
                <CleanIcon className="h-3.5 w-3.5" />
                {t("revealClean")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── HowItWorks ────────────────────────────────────────────────────────────────

function HowItWorks() {
  const t = useT();
  const steps = [
    { icon: FolderOpen, step: "01", title: t("howStep1Title"), desc: t("howStep1Desc") },
    { icon: Eye, step: "02", title: t("howStep2Title"), desc: t("howStep2Desc") },
    { icon: CleanIcon, step: "03", title: t("howStep3Title"), desc: t("howStep3Desc") },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("howHeading")}</h2>
      <ol className="mt-12 grid gap-8 sm:grid-cols-3">
        {steps.map((s) => (
          <li key={s.step} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground">{s.step}</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <s.icon className="h-6 w-6 text-primary" strokeWidth={2} />
            <div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ── Gallery ───────────────────────────────────────────────────────────────────

function Gallery() {
  const t = useT();
  const shots = [
    { src: workspaceLight, caption: t("galleryLight"), alt: t("galleryLightAlt") },
    { src: workspaceFr, caption: t("galleryFrench"), alt: t("galleryFrenchAlt") },
    { src: settingsDark, caption: t("gallerySettings"), alt: t("gallerySettingsAlt") },
  ];
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("galleryHeading")}</h2>
        <p className="mt-3 text-muted-foreground">{t("gallerySubtext")}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {shots.map((s) => (
            <figure key={s.caption}>
              <div className="overflow-hidden rounded-lg border border-border bg-card">
                <img
                  src={s.src}
                  alt={s.alt}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Formats ───────────────────────────────────────────────────────────────────

function Formats() {
  const t = useT();
  const formatGroups = [
    {
      icon: ImageIcon,
      label: t("formatImages"),
      items: ["JPEG", "PNG", "TIFF", "WebP", "GIF", "HEIC"],
    },
    {
      icon: Music,
      label: t("formatAudio"),
      items: ["MP3", "FLAC", "OGG", "Opus", "WAV", "AIFF", "M4A", "WMA", "APE", "WavPack"],
    },
    { icon: Video, label: t("formatVideo"), items: ["MP4", "M4V", "MOV", "MKV", "WebM"] },
    { icon: FileText, label: t("formatDocuments"), items: ["PDF", "DOCX", "XLSX", "PPTX"] },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("formatsHeading")}</h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {formatGroups.map((g) => (
          <div key={g.label}>
            <div className="flex items-center gap-2 text-foreground">
              <g.icon className="h-4 w-4 text-primary" strokeWidth={2} />
              <h3 className="text-sm font-medium">{g.label}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-sm">
              {g.items.map((it, i) => (
                <li key={it} className="flex items-center gap-2">
                  <span className="text-foreground">{it}</span>
                  {i < g.items.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-10 text-sm text-muted-foreground">{t("formatsNote")}</p>
    </section>
  );
}

// ── Command line ──────────────────────────────────────────────────────────────

function CommandLine() {
  const t = useT();
  const lines: [string, string][] = [
    ["eom risk ~/Pictures -r", t("cliComment1")],
    ["eom clean ~/Pictures -r --profile social --output-dir ~/clean", t("cliComment2")],
    ["eom extract ~/Documents -r -o report.html", t("cliComment3")],
    ["eom edit photo.jpg --shift +2h", t("cliComment4")],
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="grid gap-10 rounded-xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[1fr_1.6fr] lg:p-12">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
            <Terminal className="h-3.5 w-3.5" />
            {t("cliBadge")}
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t("cliHeading")}</h2>
          <p className="mt-4 text-muted-foreground">{t("cliDesc")}</p>
        </div>
        <pre className="overflow-x-auto rounded-md border border-border bg-background p-4 font-mono text-xs leading-6 sm:text-[13px]">
          <code>
            {lines.map(([cmd, comment], i) => (
              <span key={cmd}>
                {i > 0 && "\n"}
                <span className="text-muted-foreground"># {comment}</span>
                {"\n"}
                <span className="text-primary select-none">$ </span>
                {cmd}
                {"\n"}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </section>
  );
}

// ── PrivacyBanner ─────────────────────────────────────────────────────────────

function PrivacyBanner() {
  const t = useT();
  const cards = [
    { icon: WifiOff, title: t("privacyCard1Title"), desc: t("privacyCard1Desc") },
    { icon: ShieldCheck, title: t("privacyCard2Title"), desc: t("privacyCard2Desc") },
    { icon: Lock, title: t("privacyCard3Title"), desc: t("privacyCard3Desc") },
  ];
  // Online tools never run locally or offline; account, price and licence vary.
  const rows: [string, boolean][] = [
    [t("tableRow1"), false],
    [t("tableRow2"), false],
    [t("tableRow3"), true],
    [t("tableRow4"), true],
    [t("tableRow5"), true],
  ];
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("privacyHeading")}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t("privacySubtext")}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-lg border border-border bg-card p-6">
              <c.icon className="h-6 w-6 text-primary" strokeWidth={2} />
              <h3 className="mt-4 font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <table className="mt-10 w-full overflow-hidden rounded-xl border border-border text-sm">
          <thead className="bg-card text-xs text-muted-foreground">
            <tr>
              <th className="px-4 py-3 text-left font-medium sm:px-6">
                <span className="sr-only">—</span>
              </th>
              <th className="px-4 py-3 text-center font-medium">{t("tableColOnline")}</th>
              <th className="px-4 py-3 text-center font-medium">{t("tableColEom")}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, varies]) => (
              <tr key={label} className="border-t border-border">
                <th
                  scope="row"
                  className="px-4 py-3 text-left font-normal text-muted-foreground sm:px-6"
                >
                  {label}
                </th>
                {varies ? (
                  <td className="px-4 py-3 text-center text-xs text-muted-foreground">
                    {t("tableVaries")}
                  </td>
                ) : (
                  <td className="px-4 py-3 text-center text-destructive" aria-label="no">
                    ✗
                  </td>
                )}
                <td className="px-4 py-3 text-center text-success" aria-label="yes">
                  ✓
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ── ExifToolCallout ───────────────────────────────────────────────────────────

function ExifToolCallout() {
  const t = useT();
  const states = [
    { caption: t("exifDetected"), chip: t("exifOn"), tone: "success" },
    { caption: t("exifNotFound"), chip: t("exifOff"), tone: "warning" },
  ] as const;
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-10 rounded-xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-2 lg:p-12">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
            {t("exifBadge")}
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t("exifHeading")}</h2>
          <p className="mt-4 text-muted-foreground">{t("exifDesc1")}</p>
          <p className="mt-3 text-muted-foreground">
            <WithCode text={t("exifDesc2")} />
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4">
          {states.map((s) => (
            <div key={s.chip} className="rounded-md border border-border bg-background p-4">
              <div className="mb-3 font-mono text-xs text-muted-foreground">
                ExifTool · {s.caption}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={asset("/app-logo.ico")} alt="" className="h-5 w-5 object-contain" />
                  <span className="text-sm font-semibold text-primary">Eye On Metadata</span>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    s.tone === "success"
                      ? "bg-success/15 text-success"
                      : "bg-warning/15 text-warning"
                  }`}
                >
                  {s.chip}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── DownloadSection ───────────────────────────────────────────────────────────

function DownloadSection() {
  const t = useT();
  const downloads = [
    { icon: WindowsIcon, os: "Windows x86-64", note: t("dlWindowsNote"), href: DOWNLOADS.windows },
    { icon: Apple, os: "macOS Apple Silicon", note: t("dlMacNote"), href: DOWNLOADS.macos },
    { icon: LinuxIcon, os: "Linux x86-64", note: t("dlLinuxNote"), href: DOWNLOADS.linux },
  ];
  return (
    <section id="download" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("downloadHeading")}
          </h2>
          <p className="mt-3 text-muted-foreground">
            EOM {APP_VERSION} · {t("downloadSubtext")}
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-border">
          {downloads.map((d, i) => (
            <div
              key={d.os}
              className={`flex flex-col gap-4 bg-card p-5 sm:flex-row sm:items-center sm:justify-between ${
                i !== downloads.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                  <d.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm font-medium">{d.os}</div>
                  <div className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {d.href.split("/").pop()}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{d.note}</div>
                </div>
              </div>
              <a href={d.href} className={`${primaryBtn} shrink-0 px-4 py-2`}>
                <Download className="h-4 w-4" />
                {t("downloadBtn")}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground">
          <p>
            <WithCode text={t("dlHelpLinux")} />
          </p>
          <p>
            <WithCode text={t("dlHelpMac")} />
          </p>
          <a
            href={LATEST_RELEASE_URL}
            className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm text-primary hover:underline"
          >
            {t("dlReleaseNotes")}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-6">
        <div>
          {t("footerBuiltBy")} —{" "}
          <a href={AUTHOR_URL} className="text-foreground hover:text-primary transition-colors">
            github.com/abogo-nono
          </a>
          {" · "}
          <a href={REPO_URL} className="text-foreground hover:text-primary transition-colors">
            {t("navGithub")}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <LangSwitcher size="xs" />
          <span className="font-mono text-xs">{t("footerLicense")}</span>
        </div>
      </div>
    </footer>
  );
}

// ── Page root ─────────────────────────────────────────────────────────────────

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MetadataReveal />
        <HowItWorks />
        <Gallery />
        <Formats />
        <CommandLine />
        <PrivacyBanner />
        <ExifToolCallout />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
