import { useLocale, useUI } from "@/i18n/useLocale";
import { fmt } from "@/i18n/ui";
import { GUIDES, GUIDE_META, type GuideGroup, type Para } from "@/content/guides";
import { CONTENT_UPDATED, GUIDE_KEYS, asset, guidePath, pagePath, type GuideKey } from "@/site";
import { Checker } from "./checker";
import { Rich } from "./shell";

function formatDate(iso: string, locale: "en" | "fr") {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function Breadcrumbs({ items }: { items: [string, string | null][] }) {
  return (
    <nav aria-label="Breadcrumb" className="typewriter text-xs text-dust">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map(([label, href], i) => (
          <li key={label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {href ? (
              <a href={href} className="hover:text-bone">
                {label}
              </a>
            ) : (
              <span aria-current="page" className="text-bone">
                {label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ── /check/ ───────────────────────────────────────────────────────────────────

export function CheckPage() {
  const ui = useUI();
  const locale = useLocale();
  const c = ui.checkPage;
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6">
        <Breadcrumbs
          items={[
            [ui.guide.breadcrumbHome, asset(pagePath("home", locale))],
            [ui.shell.nav.check, null],
          ]}
        />
        <div className="mt-8 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="kicker">{c.kicker}</p>
            <h1 className="display mt-4 text-5xl uppercase sm:text-6xl">{c.h1}</h1>
            <p className="mt-6 text-lg text-[#d8d0c1]">{c.lead}</p>
          </div>
          <Checker />
        </div>
      </section>
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="display text-4xl uppercase">{c.howHeading}</h2>
            <ol className="mt-6 space-y-4">
              {c.how.map((step, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-2 text-[#d8d0c1]">
                  <span className="typewriter text-eye">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="display text-4xl uppercase">{c.limitsHeading}</h2>
            <p className="mt-6 text-[#d8d0c1]">{c.limits}</p>
            <a href={`${asset(pagePath("home", locale))}#download`} className="btn-ink mt-8">
              {ui.shell.nav.download} EOM
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// ── /guides/ ──────────────────────────────────────────────────────────────────

export function GuidesIndexPage() {
  const ui = useUI();
  const locale = useLocale();
  const g = ui.guidesPage;
  const groups: GuideGroup[] = ["photos", "documents", "systems", "basics"];
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6">
      <Breadcrumbs
        items={[
          [ui.guide.breadcrumbHome, asset(pagePath("home", locale))],
          [ui.guide.breadcrumbGuides, null],
        ]}
      />
      <p className="kicker mt-10">{g.kicker}</p>
      <h1 className="display mt-4 text-6xl uppercase sm:text-8xl">{g.h1}</h1>
      <p className="mt-6 max-w-2xl text-lg text-[#d8d0c1]">{g.lead}</p>
      <div className="mt-16 space-y-16">
        {groups.map((group) => {
          const keys = GUIDE_KEYS.filter((k) => GUIDE_META[k].group === group);
          return (
            <section key={group}>
              <h2 className="display border-b-2 border-bone pb-3 text-4xl uppercase">
                {g.groups[group]}
              </h2>
              <ul className="divide-y divide-white/10">
                {keys.map((key) => {
                  const guide = GUIDES[locale][key];
                  return (
                    <li key={key}>
                      <a
                        href={asset(guidePath(key, locale))}
                        className="group grid gap-2 py-6 transition-colors hover:bg-white/[0.03] sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8 sm:px-3"
                      >
                        <span>
                          <span className="block text-xl font-bold text-bone group-hover:underline group-hover:decoration-eye group-hover:decoration-2 group-hover:underline-offset-4">
                            {guide.h1}
                          </span>
                          <span className="mt-1 block text-dust">{guide.description}</span>
                        </span>
                        <span className="typewriter text-xs text-dust">
                          {fmt(ui.guide.readTime, { n: guide.minutes })} →
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
}

// ── /guides/<slug>/ ───────────────────────────────────────────────────────────

function Block({ p }: { p: Para }) {
  if (typeof p === "string")
    return (
      <p>
        <Rich text={p} />
      </p>
    );
  if ("ol" in p)
    return (
      <ol>
        {p.ol.map((li, i) => (
          <li key={i}>
            <Rich text={li} />
          </li>
        ))}
      </ol>
    );
  if ("ul" in p)
    return (
      <ul>
        {p.ul.map((li, i) => (
          <li key={i}>
            <Rich text={li} />
          </li>
        ))}
      </ul>
    );
  if ("code" in p)
    return (
      <pre className="my-5 overflow-x-auto border border-white/10 bg-[#0a0908] p-4 text-[13px] leading-6 text-bone">
        <code className="!bg-transparent !p-0">{p.code}</code>
      </pre>
    );
  if ("note" in p)
    return (
      <aside className="my-6 border-l-4 border-eye bg-white/[0.04] px-5 py-4 text-[15px]">
        <Rich text={p.note} />
      </aside>
    );
  const [head, ...rows] = p.table;
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-[15px]">
        <thead>
          <tr className="border-b-2 border-bone">
            {head.map((h, i) => (
              <th key={i} className="typewriter px-3 py-2 font-bold text-bone">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-b border-white/10">
              {row.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row" className="px-3 py-2 font-normal text-bone">
                    <Rich text={cell} />
                  </th>
                ) : (
                  <td key={i} className="px-3 py-2">
                    <Rich text={cell} />
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function GuidePage({ guideKey }: { guideKey: GuideKey }) {
  const ui = useUI();
  const locale = useLocale();
  const g = GUIDES[locale][guideKey];
  const related = GUIDE_META[guideKey].related;
  const t = ui.guide;
  return (
    <article className="mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6">
      <Breadcrumbs
        items={[
          [t.breadcrumbHome, asset(pagePath("home", locale))],
          [t.breadcrumbGuides, asset(pagePath("guides", locale))],
          [g.h1, null],
        ]}
      />
      <header className="mt-10 max-w-4xl">
        <p className="kicker">
          {ui.guidesPage.groups[GUIDE_META[guideKey].group]} · {fmt(t.readTime, { n: g.minutes })}
        </p>
        <h1 className="display mt-4 text-5xl uppercase sm:text-7xl">{g.h1}</h1>
        <p className="typewriter mt-5 text-sm text-dust">
          {t.updated} <time dateTime={CONTENT_UPDATED}>{formatDate(CONTENT_UPDATED, locale)}</time>{" "}
          · Abogo Lincoln
        </p>
      </header>

      <div className="mt-12 grid gap-14 lg:grid-cols-[1fr_17rem]">
        <div className="min-w-0 max-w-3xl">
          {/* Answer first: the paragraph search engines and assistants quote. */}
          <section
            className="paper relative rotate-[-0.4deg] px-6 py-6 sm:px-8"
            aria-labelledby="short"
          >
            <span className="typewriter absolute -top-3 left-5 bg-eye px-2.5 py-0.5 text-xs font-bold uppercase tracking-[0.16em] text-desk">
              {t.short}
            </span>
            <h2 id="short" className="sr-only">
              {t.short}
            </h2>
            <p className="text-[1.08rem] leading-relaxed text-ink [&_code]:bg-ink/10 [&_code]:px-1">
              <Rich text={g.short} />
            </p>
          </section>

          <div className="prose-case mt-4">
            {g.sections.map((s) => (
              <section key={s.id} aria-labelledby={s.id}>
                <h2 id={s.id}>{s.h2}</h2>
                {s.body.map((p, i) => (
                  <Block key={i} p={p} />
                ))}
              </section>
            ))}

            <section aria-labelledby="faq">
              <h2 id="faq">{t.faq}</h2>
              {g.faq.map(([q, a]) => (
                <div key={q} className="border-b border-white/10 py-4">
                  <h3 className="!mt-0 text-lg">{q}</h3>
                  <p className="!mb-0">
                    <Rich text={a} />
                  </p>
                </div>
              ))}
            </section>
          </div>

          <aside className="mt-14 border-2 border-eye p-6 sm:p-8">
            <h2 className="display text-4xl uppercase">{t.ctaHeading}</h2>
            <p className="mt-3 text-[#d8d0c1]">{t.ctaBody}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href={`${asset(pagePath("home", locale))}#download`} className="btn-ink">
                {ui.shell.nav.download} EOM
              </a>
              <a href={asset(pagePath("check", locale))} className="btn-line">
                {t.ctaCheck} →
              </a>
            </div>
          </aside>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <nav aria-label={t.toc}>
            <p className="kicker">{t.toc}</p>
            <ol className="mt-4 space-y-2 border-l border-white/15 pl-4 text-sm">
              {g.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-dust hover:text-bone">
                    {s.h2}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="text-dust hover:text-bone">
                  {t.faq}
                </a>
              </li>
            </ol>
          </nav>
          <div className="mt-10">
            <p className="kicker">{t.related}</p>
            <ul className="mt-4 space-y-3">
              {related.map((key) => (
                <li key={key}>
                  <a href={asset(guidePath(key, locale))} className="link-eye text-sm text-bone">
                    {GUIDES[locale][key].h1}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
