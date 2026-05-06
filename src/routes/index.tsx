import { createFileRoute } from "@tanstack/react-router";
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
  Monitor,
} from "lucide-react";
import screenshot from "@/assets/eom-screenshot.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "EOM — Eye On Metadata · Free open-source metadata tool" },
      {
        name: "description",
        content:
          "EOM reads, exports, and strips metadata from images, audio, video, and PDFs — locally, with no upload, no account, no cloud.",
      },
      { name: "keywords", content: "metadata viewer, EXIF reader, metadata remover, IPTC, XMP, ID3, PDF metadata, privacy, open source, desktop app" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://eom.abogonono.me" },
      { property: "og:title", content: "EOM — Eye On Metadata" },
      {
        property: "og:description",
        content:
          "Free open-source desktop tool to read, export, and strip metadata. Local-only.",
      },
      { property: "og:image", content: "https://eom.abogonono.me/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "EOM — Eye On Metadata desktop app screenshot" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EOM — Eye On Metadata" },
      { name: "twitter:description", content: "Free open-source desktop tool to read, export, and strip metadata. Local-only." },
      { name: "twitter:image", content: "https://eom.abogonono.me/og-image.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "EOM — Eye On Metadata",
          url: "https://eom.abogonono.me",
          description:
            "EOM reads, exports, and strips metadata from images, audio, video, and PDFs — locally, with no upload, no account, no cloud.",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Windows, macOS, Linux",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          featureList: [
            "Read EXIF, XMP, IPTC metadata from images",
            "Read ID3 metadata from audio files",
            "Read metadata from video files and PDFs",
            "Export metadata as JSON, CSV, or plain text",
            "Strip metadata in place or to a copy",
            "Local-only processing — no uploads",
          ],
          softwareVersion: "1.0",
          license: "https://opensource.org/licenses/MIT",
        }),
      },
    ],
  }),
});

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5">
          <img src="/app-logo.ico" alt="EOM logo" className="h-6 w-6 object-contain" />
          <span className="font-mono text-base font-semibold tracking-wide">
            EOM
          </span>
        </a>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/abogo-nono"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <img src="/app-logo.ico" alt="" className="h-4 w-4 object-contain" />
            v1.0 · Free &amp; open source
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            See what your files are hiding.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-[17px]">
            EOM reads, exports, and strips metadata from images, audio, video,
            and PDFs — locally, with no upload, no account, no cloud.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download for free
            </a>
            <a
              href="https://github.com/abogo-nono"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-5 py-3 text-sm font-medium text-foreground hover:bg-card transition-colors"
            >
              <Github className="h-4 w-4" />
              View on GitHub
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

const features = [
  {
    icon: ScanSearch,
    name: "Extract",
    desc: "Read EXIF, XMP, IPTC, ID3, and PDF metadata.",
  },
  {
    icon: Eraser,
    name: "Remove",
    desc: "Strip tags in place or to a copy.",
  },
  {
    icon: FileDown,
    name: "Export",
    desc: "Save as JSON, CSV, or plain text.",
  },
  {
    icon: Wrench,
    name: "ExifTool support",
    desc: "Uses ExifTool when available.",
  },
];

function FeatureStrip() {
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

const formatGroups = [
  { icon: ImageIcon, label: "Images", items: ["JPEG", "PNG", "TIFF"] },
  {
    icon: Music,
    label: "Audio",
    items: ["MP3", "FLAC", "OGG", "WAV", "AIFF", "M4A", "WMA"],
  },
  { icon: Video, label: "Video", items: ["MP4", "MKV", "WebM"] },
  { icon: FileText, label: "Documents", items: ["PDF"] },
];

function Formats() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Every format you actually use.
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

function ExifToolCallout() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 rounded-xl border border-border bg-card p-8 lg:grid-cols-2 lg:p-12">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
            Backend
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            ExifTool, when you have it.
          </h2>
          <p className="mt-4 text-muted-foreground">
            If ExifTool is installed, EOM uses it as the primary backend. That
            means full read/write support for XMP, IPTC, MakerNotes, and RAW
            camera tags across hundreds of formats.
          </p>
          <p className="mt-3 text-muted-foreground">
            Otherwise, EOM falls back to its built-in parsers. The Windows
            binary ships with{" "}
            <code className="rounded bg-background px-1.5 py-0.5 text-foreground">
              exiftool.exe
            </code>{" "}
            bundled.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <div className="rounded-md border border-border bg-background p-4">
            <div className="mb-3 font-mono text-xs text-muted-foreground">
              header · detected
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/app-logo.ico" alt="EOM logo" className="h-5 w-5 object-contain" />
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
              header · not found
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/app-logo.ico" alt="EOM logo" className="h-5 w-5 object-contain" />
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

const downloads = [
  {
    icon: Monitor,
    os: "Linux x86-64",
    note: "Ubuntu 20.04+",
    file: "eom-1.0.0-linux-x86_64.AppImage",
  },
  {
    icon: Monitor,
    os: "Windows x86-64",
    note: "includes exiftool.exe",
    file: "eom-1.0.0-windows-x86_64.exe",
  },
  {
    icon: Apple,
    os: "macOS Intel",
    note: "macOS 12+",
    file: "eom-1.0.0-macos-x86_64.dmg",
  },
  {
    icon: Apple,
    os: "macOS Apple Silicon",
    note: "macOS 14+",
    file: "eom-1.0.0-macos-arm64.dmg",
  },
];

function DownloadSection() {
  return (
    <section id="download" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            One binary. No installer.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Download, run. Nothing phones home.
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
                    {d.file}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {d.note}
                  </div>
                </div>
              </div>
              <a
                href="https://github.com/abogo-nono"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <div>
          Built by Abogo Lincoln —{" "}
          <a
            href="https://github.com/abogo-nono"
            className="text-foreground hover:text-primary transition-colors"
          >
            github.com/abogo-nono
          </a>
        </div>
        <div className="font-mono text-xs">MIT License · Open source</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <Formats />
        <ExifToolCallout />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
