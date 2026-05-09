import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";

export const Route = createFileRoute("/fr/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "EOM — Eye On Metadata · Outil de métadonnées open source gratuit" },
      {
        name: "description",
        content:
          "EOM lit, exporte et supprime les métadonnées des images, fichiers audio, vidéo et PDF — localement, sans envoi, sans compte, sans cloud.",
      },
      {
        name: "keywords",
        content:
          "visionneuse de métadonnées, lecteur EXIF, suppression de métadonnées, IPTC, XMP, ID3, métadonnées PDF, vie privée, open source, application bureau, supprimer GPS photo, nettoyer EXIF",
      },
      { name: "author", content: "Abogo Lincoln" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "EOM — Eye On Metadata" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:url", content: "https://abogo-nono.github.io/eom/fr/" },
      { property: "og:title", content: "EOM — Eye On Metadata" },
      {
        property: "og:description",
        content:
          "Outil desktop gratuit et open source pour lire, exporter et supprimer les métadonnées. Entièrement local.",
      },
      {
        property: "og:image",
        content: "https://abogo-nono.github.io/eom/og-image.png",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "EOM — Eye On Metadata, capture d'écran de l'application de bureau",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EOM — Eye On Metadata" },
      {
        name: "twitter:description",
        content:
          "Outil desktop gratuit et open source pour lire, exporter et supprimer les métadonnées. Entièrement local.",
      },
      {
        name: "twitter:image",
        content: "https://abogo-nono.github.io/eom/og-image.png",
      },
    ],
    links: [
      {
        rel: "alternate",
        hrefLang: "en",
        href: "https://abogo-nono.github.io/eom/",
      },
      {
        rel: "alternate",
        hrefLang: "fr",
        href: "https://abogo-nono.github.io/eom/fr/",
      },
      {
        rel: "alternate",
        hrefLang: "x-default",
        href: "https://abogo-nono.github.io/eom/",
      },
      {
        rel: "canonical",
        href: "https://abogo-nono.github.io/eom/fr/",
      },
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
              description:
                "Outil desktop gratuit et open source pour lire, exporter et supprimer les métadonnées. Entièrement local.",
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
              description:
                "EOM lit, exporte et supprime les métadonnées des images, fichiers audio, vidéo et PDF — localement, sans envoi, sans compte, sans cloud.",
              applicationCategory: "UtilitiesApplication",
              applicationSubCategory: "Privacy & Security",
              operatingSystem: "Windows, macOS, Linux",
              softwareVersion: "2.0.0 ",
              license: "https://opensource.org/licenses/MIT",
              isAccessibleForFree: true,
              downloadUrl:
                "https://github.com/abogo-nono/eom/releases/tag/v2.0.0 ",
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
                "Lire les métadonnées EXIF, XMP, IPTC des images",
                "Lire les métadonnées ID3 des fichiers audio",
                "Lire les métadonnées des vidéos et PDF",
                "Exporter les métadonnées en JSON, CSV ou texte brut",
                "Supprimer les métadonnées sur place ou dans une copie",
                "Traitement uniquement local — aucun envoi",
                "Intégration ExifTool",
              ],
            },
            {
              "@type": "FAQPage",
              "@id": "https://abogo-nono.github.io/eom/fr/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "EOM envoie-t-il mes fichiers quelque part ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Non. EOM traite chaque fichier entièrement sur votre appareil. Rien n'est envoyé à un serveur ou partagé avec un tiers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels formats de fichiers EOM prend-il en charge ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "EOM prend en charge JPEG, PNG, TIFF (images), MP3, FLAC, OGG, WAV, AIFF, M4A, WMA (audio), MP4, MKV, WebM (vidéo) et les documents PDF.",
                  },
                },
                {
                  "@type": "Question",
                  name: "EOM est-il gratuit ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Oui. EOM est entièrement gratuit et open source sous la licence MIT. Il n'y a pas d'abonnements, de comptes ou de coûts cachés.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Sur quels systèmes d'exploitation EOM fonctionne-t-il ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "EOM fonctionne sur Linux (x86-64, Ubuntu 20.04+), Windows (x86-64) et macOS (Apple Silicon, macOS 14+).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Comment supprimer la localisation GPS d'une photo ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ouvrez le fichier dans EOM, naviguez vers la section GPS ou EXIF, et cliquez sur Supprimer. EOM peut supprimer toutes les métadonnées à la fois ou des tags individuels.",
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
