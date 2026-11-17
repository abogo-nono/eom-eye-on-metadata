import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { useLocale, useUI } from "@/i18n/useLocale";
import { Page, Stamp } from "@/components/case/shell";
import { asset, pagePath } from "@/site";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  const ui = useUI();
  const locale = useLocale();
  return (
    <Page alternates={{ en: "/", fr: "/fr/" }}>
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-4 py-24 sm:px-6">
        <Stamp className="text-marker text-2xl" rotate={-6}>
          404
        </Stamp>
        <h1 className="display mt-8 text-6xl uppercase sm:text-8xl">{ui.notFound.title}</h1>
        <p className="mt-5 text-lg text-dust">{ui.notFound.desc}</p>
        <a href={asset(pagePath("home", locale))} className="btn-ink mt-10">
          {ui.notFound.home}
        </a>
      </section>
    </Page>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#11100e" },
      { name: "color-scheme", content: "dark" },
      { name: "generator", content: "EOM website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: asset("/app-logo.ico") },
    ],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  return (
    <html lang={locale}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
