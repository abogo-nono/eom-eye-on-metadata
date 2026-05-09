import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "EOM — Eye On Metadata · Free open-source metadata tool" },
      {
        name: "description",
        content:
          "EOM reads, exports, and strips metadata from images, audio, video, and PDFs — locally, with no upload, no account, no cloud.",
      },
      { name: "keywords", content: "metadata viewer, EXIF reader, metadata remover, IPTC, XMP, ID3, PDF metadata, privacy, open source, desktop app, remove GPS from photo, strip metadata, EXIF cleaner" },
      { name: "author", content: "Abogo Lincoln" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "EOM — Eye On Metadata" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: "https://abogo-nono.github.io/eom" },
      { property: "og:title", content: "EOM — Eye On Metadata" },
      {
        property: "og:description",
        content:
          "Free open-source desktop tool to read, export, and strip metadata. Local-only.",
      },
      { property: "og:image", content: "https://abogo-nono.github.io/eom/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "EOM — Eye On Metadata desktop app screenshot" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EOM — Eye On Metadata" },
      { name: "twitter:description", content: "Free open-source desktop tool to read, export, and strip metadata. Local-only." },
      { name: "twitter:image", content: "https://abogo-nono.github.io/eom/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://abogo-nono.github.io/eom/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://abogo-nono.github.io/eom/#website",
              url: "https://abogo-nono.github.io/eom",
              name: "EOM — Eye On Metadata",
              description: "Free open-source desktop tool to read, export, and strip metadata. Local-only.",
              publisher: {
                "@type": "Person",
                name: "Abogo Lincoln",
                url: "https://github.com/abogo-nono",
              },
            },
            {
              "@type": "SoftwareApplication",
              "@id": "https://abogo-nono.github.io/eom/#app",
              name: "EOM — Eye On Metadata",
              url: "https://abogo-nono.github.io/eom",
              description: "EOM reads, exports, and strips metadata from images, audio, video, and PDFs — locally, with no upload, no account, no cloud.",
              applicationCategory: "UtilitiesApplication",
              applicationSubCategory: "Privacy & Security",
              operatingSystem: "Windows, macOS, Linux",
              softwareVersion: "2.0.0 ",
              license: "https://opensource.org/licenses/MIT",
              isAccessibleForFree: true,
              downloadUrl: "https://github.com/abogo-nono/eom/releases/tag/v2.0.0 ",
              screenshot: "https://abogo-nono.github.io/eom/og-image.png",
              author: {
                "@type": "Person",
                name: "Abogo Lincoln",
                url: "https://github.com/abogo-nono",
              },
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
                "ExifTool integration",
              ],
            },
            {
              "@type": "FAQPage",
              "@id": "https://abogo-nono.github.io/eom/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Does EOM upload my files anywhere?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. EOM processes every file entirely on your device. Nothing is uploaded, sent to a server, or shared with any third party.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What file formats does EOM support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "EOM supports JPEG, PNG, TIFF (images), MP3, FLAC, OGG, WAV, AIFF, M4A, WMA (audio), MP4, MKV, WebM (video), and PDF documents.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is EOM free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. EOM is completely free and open-source under the MIT license. There are no subscriptions, accounts, or hidden costs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What operating systems does EOM run on?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "EOM runs on Linux (x86-64, Ubuntu 20.04+), Windows (x86-64), and macOS (Apple Silicon, macOS 14+).",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is ExifTool and does EOM require it?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "ExifTool is a widely-used metadata library that supports hundreds of formats including RAW camera files. EOM does not require it — it uses ExifTool as an optional backend when installed, and falls back to built-in parsers otherwise. The Windows build ships with exiftool.exe bundled.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I remove GPS location from a photo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Open the file in EOM, navigate to the GPS or EXIF section, and click Remove or Strip. EOM can strip all metadata at once or individual tags, and save the result to a new file or overwrite in place.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
});

