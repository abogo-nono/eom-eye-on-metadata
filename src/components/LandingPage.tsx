import {
  Github,
  Download,
  Image as ImageIcon,
  Music,
  Video,
  FileText,
  Eraser,
  FileDown,
  Wrench,
  ScanSearch,
  Apple,
  WifiOff,
  ShieldCheck,
  Lock,
  FolderOpen,
  Eye,
  Trash2,
} from "lucide-react";
import screenshot from "@/assets/eom-screenshot.png";
import { useLocale, useT } from "@/i18n/useLocale";

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
  const base = size === "xs" ? "text-xs" : "text-sm";
  return (
    <div className={`flex items-center gap-1 font-mono ${base}`}>
      <a
        href="/"
        aria-label="Switch to English"
        className={`px-1.5 py-0.5 rounded transition-colors ${
          locale === "en"
            ? "text-primary font-semibold"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </a>
      <span className="text-border select-none">|</span>
      <a
        href="/fr/"
        aria-label="Passer en français"
        className={`px-1.5 py-0.5 rounded transition-colors ${
          locale === "fr"
            ? "text-primary font-semibold"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        FR
      </a>
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────

function Navbar() {
  const t = useT();
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/app-logo.ico"
            alt="EOM logo"
            className="h-6 w-6 object-contain"
          />
          <span className="font-mono text-base font-semibold tracking-wide">
            EOM
          </span>
        </a>
        <div className="flex items-center gap-3">
          <LangSwitcher />
          <a
            href="https://github.com/abogo-nono"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            {t("navGithub")}
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
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
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <img
              src="/app-logo.ico"
              alt=""
              className="h-4 w-4 object-contain"
            />
            {t("heroBadge")}
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {t("heroHeading")}
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-[17px]">
            {t("heroSubtext")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Download className="h-4 w-4" />
              {t("heroCtaDownload")}
            </a>
            <a
              href="https://github.com/abogo-nono"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-5 py-3 text-sm font-medium text-foreground hover:bg-card transition-colors"
            >
              <Github className="h-4 w-4" />
              {t("heroCtaGithub")}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-xl border border-border bg-card p-2 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            </div>
            <img
              src={screenshot}
              alt="EOM desktop application showing a metadata table with Make, Model, DateTime and GPSLatitude rows"
              width={1280}
              height={832}
              className="block w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Feature strip ─────────────────────────────────────────────────────────────

function FeatureStrip() {
  const t = useT();
  const features = [
    { icon: ScanSearch, name: t("feat1Name"), desc: t("feat1Desc") },
    { icon: Eraser, name: t("feat2Name"), desc: t("feat2Desc") },
    { icon: FileDown, name: t("feat3Name"), desc: t("feat3Desc") },
    { icon: Wrench, name: t("feat4Name"), desc: t("feat4Desc") },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.name}
            className="rounded-lg border border-border bg-card p-5"
          >
            <f.icon className="h-5 w-5 text-primary" strokeWidth={2} />
            <div className="mt-4 font-mono text-sm font-medium">{f.name}</div>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Formats ───────────────────────────────────────────────────────────────────

function Formats() {
  const t = useT();
  const formatGroups = [
    { icon: ImageIcon, label: t("formatImages"), items: ["JPEG", "PNG", "TIFF"] },
    {
      icon: Music,
      label: t("formatAudio"),
      items: ["MP3", "FLAC", "OGG", "WAV", "AIFF", "M4A", "WMA"],
    },
    { icon: Video, label: t("formatVideo"), items: ["MP4", "MKV", "WebM"] },
    { icon: FileText, label: t("formatDocuments"), items: ["PDF"] },
  ];
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("formatsHeading")}
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {formatGroups.map((g) => (
            <div key={g.label}>
              <div className="flex items-center gap-2 text-foreground">
                <g.icon className="h-4 w-4 text-primary" strokeWidth={2} />
                <span className="text-sm font-medium">{g.label}</span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-sm text-muted-foreground">
                {g.items.map((it, i) => (
                  <span key={it} className="flex items-center gap-2">
                    <span className="text-foreground">{it}</span>
                    {i < g.items.length - 1 && (
                      <span className="h-1 w-1 rounded-full bg-primary" />
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── MetadataReveal ────────────────────────────────────────────────────────────

function MetadataReveal() {
  const t = useT();
  const rows = [
    { tag: "Make", value: "Apple", sensitive: false },
    { tag: "Model", value: "iPhone 15 Pro", sensitive: false },
    { tag: "Software", value: "17.3.1", sensitive: false },
    { tag: "DateTimeOriginal", value: "2024:03:14 08:42:31", sensitive: false },
    { tag: "GPSLatitude", value: "48.8588° N", sensitive: true },
    { tag: "GPSLongitude", value: "2.2944° E", sensitive: true },
    { tag: "GPSAltitude", value: "35 m Above Sea Level", sensitive: true },
    { tag: "Author", value: "John Smith", sensitive: true },
    { tag: "SerialNumber", value: "DNPXQ2M5XXXX", sensitive: true },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
            {t("revealBadge")}
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("revealHeading")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("revealSubtext")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Download className="h-4 w-4" />
              {t("revealCta")}
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              {t("revealFileLabel")}
            </span>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-2 text-left font-mono text-xs text-muted-foreground">
                  {t("revealTagCol")}
                </th>
                <th className="px-4 py-2 text-left font-mono text-xs text-muted-foreground">
                  {t("revealValueCol")}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.tag}
                  className={`border-b border-border/50 ${
                    r.sensitive ? "bg-destructive/5" : ""
                  }`}
                >
                  <td className="px-4 py-2 font-mono text-xs text-muted-foreground">
                    {r.tag}
                  </td>
                  <td
                    className={`px-4 py-2 font-mono text-xs ${
                      r.sensitive ? "text-destructive" : "text-foreground"
                    }`}
                  >
                    {r.value}
                    {r.sensitive && (
                      <span className="ml-2 rounded bg-destructive/15 px-1 py-0.5 text-[10px] text-destructive">
                        {t("revealSensitiveLabel")}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between bg-destructive/10 px-4 py-3">
            <span className="font-mono text-xs text-destructive">
              {t("revealSensitiveCount")}
            </span>
            <button className="inline-flex items-center gap-1.5 rounded bg-destructive px-3 py-1.5 font-mono text-xs text-white hover:bg-destructive/90 transition-colors">
              <Eraser className="h-3 w-3" />
              {t("revealStripAll")}
            </button>
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
    { icon: Trash2, step: "03", title: t("howStep3Title"), desc: t("howStep3Desc") },
  ];
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("howHeading")}
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">
                  {s.step}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <s.icon className="h-6 w-6 text-primary" strokeWidth={2} />
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── ExifToolCallout ───────────────────────────────────────────────────────────

function ExifToolCallout() {
  const t = useT();
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 rounded-xl border border-border bg-card p-8 lg:grid-cols-2 lg:p-12">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
            {t("exifBadge")}
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t("exifHeading")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("exifDesc1")}</p>
          <p className="mt-3 text-muted-foreground">
            {t("exifDesc2").split("exiftool.exe")[0]}
            <code className="rounded bg-background px-1.5 py-0.5 text-foreground">
              exiftool.exe
            </code>
            {t("exifDesc2").split("exiftool.exe")[1]}
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <div className="rounded-md border border-border bg-background p-4">
            <div className="mb-3 font-mono text-xs text-muted-foreground">
              header · {t("exifDetected")}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/app-logo.ico"
                  alt="EOM logo"
                  className="h-5 w-5 object-contain"
                />
                <span className="font-mono text-sm">EOM</span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 font-mono text-xs text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                ExifTool ✓
              </span>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-4">
            <div className="mb-3 font-mono text-xs text-muted-foreground">
              header · {t("exifNotFound")}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/app-logo.ico"
                  alt="EOM logo"
                  className="h-5 w-5 object-contain"
                />
                <span className="font-mono text-sm">EOM</span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-warning/15 px-3 py-1 font-mono text-xs text-warning">
                <span className="h-1.5 w-1.5 rounded-full bg-warning" />
                ExifTool ✗
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── PrivacyBanner ─────────────────────────────────────────────────────────────

function PrivacyBanner() {
  const t = useT();
  const rows: [string, boolean, boolean][] = [
    [t("tableRow1"), false, true],
    [t("tableRow2"), false, true],
    [t("tableRow3"), false, true],
    [t("tableRow4"), false, true],
    [t("tableRow5"), false, true],
    [t("tableRow6"), false, true],
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("privacyHeading")}
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {t("privacySubtext")}
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <WifiOff className="h-6 w-6 text-primary" strokeWidth={2} />
          <h3 className="mt-4 font-semibold">{t("privacyCard1Title")}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("privacyCard1Desc")}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={2} />
          <h3 className="mt-4 font-semibold">{t("privacyCard2Title")}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("privacyCard2Desc")}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <Lock className="h-6 w-6 text-primary" strokeWidth={2} />
          <h3 className="mt-4 font-semibold">{t("privacyCard3Title")}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("privacyCard3Desc")}
          </p>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-xl border border-border">
        <div className="grid grid-cols-3 bg-card px-6 py-3 text-xs font-medium text-muted-foreground">
          <span />
          <span className="text-center">{t("tableColOnline")}</span>
          <span className="text-center">{t("tableColEom")}</span>
        </div>
        {rows.map(([label, online, eom]) => (
          <div
            key={label}
            className="grid grid-cols-3 border-t border-border px-6 py-3 text-sm"
          >
            <span className="text-muted-foreground">{label}</span>
            <span className="text-center">
              {online ? (
                <span className="text-success">✓</span>
              ) : (
                <span className="text-destructive">✗</span>
              )}
            </span>
            <span className="text-center">
              {eom ? (
                <span className="text-success">✓</span>
              ) : (
                <span className="text-destructive">✗</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── DownloadSection ───────────────────────────────────────────────────────────

const BASE = "https://github.com/abogo-nono/eom/releases/download/v2.0.0 ";

function DownloadSection() {
  const t = useT();
  const downloads = [
    {
      icon: LinuxIcon,
      os: "Linux x86-64",
      note: t("dlLinuxNote"),
      file: "eom-linux-x86_64.zip",
      href: `${BASE}/eom-linux-x86_64.zip`,
    },
    {
      icon: WindowsIcon,
      os: "Windows x86-64",
      note: t("dlWindowsNote"),
      file: "eom-windows-x86_64.zip",
      href: `${BASE}/eom-windows-x86_64.zip`,
    },
    {
      icon: Apple,
      os: "macOS Apple Silicon",
      note: t("dlMacNote"),
      file: "eom-macos-arm64.zip",
      href: `${BASE}/eom-macos-arm64.zip`,
    },
  ];
  return (
    <section id="download" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("downloadHeading")}
          </h2>
          <p className="mt-3 text-muted-foreground">{t("downloadSubtext")}</p>
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
                    {d.file}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {d.note}
                  </div>
                </div>
              </div>
              <a
                href={d.href}
                download
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Download className="h-4 w-4" />
                {t("downloadBtn")}
              </a>
            </div>
          ))}
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
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <div>
          {t("footerBuiltBy")} —{" "}
          <a
            href="https://github.com/abogo-nono"
            className="text-foreground hover:text-primary transition-colors"
          >
            github.com/abogo-nono
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
        <FeatureStrip />
        <MetadataReveal />
        <HowItWorks />
        <Formats />
        <PrivacyBanner />
        <ExifToolCallout />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
