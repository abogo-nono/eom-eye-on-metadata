import { useEffect, useState } from "react";
import workspaceDark from "@/assets/workspace-dark.png";
import workspaceLight from "@/assets/workspace-light.png";
import workspaceFr from "@/assets/workspace-fr.png";
import settingsDark from "@/assets/settings-dark.png";
import { useLocale, useUI } from "@/i18n/useLocale";
import { fmt } from "@/i18n/ui";
import { CATEGORY_LABEL, PROFILE_LABEL } from "@/i18n/labels";
import { PROFILE_ORDER, PROFILE_REMOVES, type Category, type ProfileId } from "@/lib/risk";
import { GUIDES } from "@/content/guides";
import { HOME_FAQ } from "@/content/faq";
import {
  APP_VERSION,
  DOWNLOADS,
  LATEST_RELEASE_URL,
  asset,
  guidePath,
  pagePath,
  type GuideKey,
} from "@/site";
import { Checker } from "./checker";
import { Redact, Rich, Stamp } from "./shell";

// ── Hero: Exhibit A ───────────────────────────────────────────────────────────

function PhotoPrint() {
  // A small "holiday" print drawn in SVG: sea, sun, horizon, and the marker
  // circle around the place the GPS tags point to.
  return (
    <svg viewBox="0 0 220 160" className="block h-auto w-full" role="img" aria-label="">
      <defs>
        <pattern id="dots" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="#1c1a16" opacity="0.35" />
        </pattern>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4c58a" />
          <stop offset="1" stopColor="#e88a5a" />
        </linearGradient>
      </defs>
      <rect width="220" height="96" fill="url(#sky)" />
      <circle cx="150" cy="84" r="26" fill="#fbe3b0" />
      <rect y="92" width="220" height="68" fill="#3b4f5c" />
      <path d="M0 92h220" stroke="#fbe3b0" strokeWidth="1.5" opacity="0.7" />
      {[104, 116, 128, 140].map((y, i) => (
        <path
          key={y}
          d={`M${130 - i * 6} ${y}h${40 + i * 12}`}
          stroke="#fbe3b0"
          strokeWidth="1.4"
          opacity={0.55 - i * 0.1}
        />
      ))}
      <path d="M0 96 L46 70 L72 84 L104 64 L140 96 Z" fill="#2a2a2a" opacity="0.85" />
      <rect x="54" y="74" width="8" height="10" fill="#f4c58a" opacity="0.9" />
      <rect width="220" height="160" fill="url(#dots)" />
    </svg>
  );
}

function ExhibitA() {
  const ui = useUI();
  const h = ui.home;
  const [on, setOn] = useState(false);
  // Above the fold: draw the marker notes shortly after load.
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setShown(true), 500);
    return () => clearTimeout(id);
  }, []);
  const rows: { label: string; value: string; note?: string; sensitive: boolean }[] = [
    { label: h.exhibitRows.artist, value: "Jane Doe", note: h.noteName, sensitive: true },
    {
      label: h.exhibitRows.gps,
      value: "48°51'30\"N 2°17'40\"E",
      note: h.noteHome,
      sensitive: true,
    },
    { label: h.exhibitRows.altitude, value: "35 m", sensitive: true },
    { label: h.exhibitRows.camera, value: "Apple iPhone 15 Pro", sensitive: true },
    { label: h.exhibitRows.serial, value: "DNPXQ2M5K1F7", note: h.noteSerial, sensitive: true },
    { label: h.exhibitRows.taken, value: "2024:03:14 08:42:31", sensitive: false },
    { label: h.exhibitRows.software, value: "iOS 17.3.1", sensitive: false },
  ];
  let noteIndex = 0;
  return (
    <div className="relative mx-auto w-full max-w-[540px] lg:mt-6">
      <div
        className="paper drop-in px-5 pb-7 pt-5 sm:px-8"
        style={{ ["--rot" as string]: "-1.2deg", ["--delay" as string]: "0.15s" }}
      >
        <div className="border-b-2 border-ink pb-3 sm:pr-40">
          <p className="kicker !text-ink-soft">{h.exhibit}</p>
          <p className="typewriter text-lg font-bold text-ink">{h.exhibitFile}</p>
          <div className="mt-2">
            <Stamp className="text-marker text-sm" rotate={-4} animate delay={0.9}>
              {h.exhibitStamp}
            </Stamp>
          </div>
        </div>

        {/* The print, clipped to the corner of the sheet */}
        <div className="relative mx-auto mt-5 w-44 rotate-[4deg] bg-white p-1.5 pb-7 shadow-xl sm:absolute sm:-right-7 sm:-top-9 sm:mt-0 sm:w-48">
          <span className="tape -top-3 left-1/2 !h-6 !w-20 -translate-x-1/2 rotate-[-5deg]" />
          <PhotoPrint />
          <svg
            viewBox="0 0 60 60"
            className="draw absolute left-[30%] top-[28%] h-14 w-14 text-marker"
            data-shown={shown}
            aria-hidden="true"
          >
            <ellipse
              cx="30"
              cy="30"
              rx="24"
              ry="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              transform="rotate(-12 30 30)"
              style={{ ["--len" as string]: 140, ["--delay" as string]: "1.1s" }}
            />
          </svg>
        </div>

        <dl className="typewriter mt-5 space-y-2.5 text-[13.5px] text-ink sm:text-sm">
          {rows.map((r, i) => {
            const delay = r.note ? 0.9 + noteIndex++ * 0.35 : 0;
            return (
              <div key={r.label}>
                <div className="flex items-baseline gap-2">
                  <dt className="shrink-0 text-ink-soft">{r.label}</dt>
                  <span className="leader" aria-hidden="true" />
                  <dd className="whitespace-nowrap text-right font-bold">
                    <Redact on={on && r.sensitive} delay={i * 0.06}>
                      {r.value}
                    </Redact>
                  </dd>
                </div>
                {r.note && (
                  <p
                    className="hand -mt-0.5 text-right text-[1.45rem] text-marker transition-all duration-500"
                    style={{
                      opacity: shown && !on ? 1 : 0,
                      transform: `rotate(-2deg) translateY(${shown && !on ? 0 : -4}px)`,
                      transitionDelay: `${on ? 0 : delay}s`,
                    }}
                    aria-hidden={on}
                  >
                    ↑ {r.note}
                  </p>
                )}
              </div>
            );
          })}
        </dl>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setOn((v) => !v)}
            className="inline-flex items-center gap-2 bg-redact px-4 py-2.5 font-sans text-sm font-extrabold uppercase tracking-[0.12em] text-white transition-transform [font-stretch:80%] hover:-translate-y-0.5"
            aria-pressed={on}
          >
            <span className="inline-block h-3 w-6 bg-white" aria-hidden="true" />
            {on ? h.undo : h.redact}
          </button>
          <span className="hand text-2xl text-marker" aria-live="polite">
            {on ? h.redacted : h.pressIt}
          </span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const ui = useUI();
  const locale = useLocale();
  const h = ui.home;
  return (
    <section className="relative overflow-hidden">
      {/* light from a desk lamp */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(239,232,218,0.09),transparent_65%)]" />
      <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-24 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-20">
        <div className="relative z-10">
          <p className="kicker drop-in">{h.heroKicker}</p>
          <h1
            className="display drop-in mt-5 text-[3.4rem] uppercase sm:text-7xl lg:text-[5.6rem]"
            style={{ ["--delay" as string]: "0.05s" }}
          >
            {h.heroH1a}{" "}
            <span className="relative inline-block text-marker">
              {h.heroH1b}
              <svg
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="draw absolute -bottom-2 left-0 h-3 w-full text-marker"
                data-shown="true"
                aria-hidden="true"
              >
                <path
                  d="M2 12 C 80 2, 180 4, 298 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  style={{ ["--len" as string]: 320, ["--delay" as string]: "0.6s" }}
                />
              </svg>
            </span>{" "}
            {h.heroH1c}
          </h1>
          <p
            className="drop-in mt-8 max-w-xl text-lg leading-relaxed text-[#d8d0c1]"
            style={{ ["--delay" as string]: "0.12s" }}
          >
            {h.heroSub}
          </p>
          <div
            className="drop-in mt-9 flex flex-wrap gap-4"
            style={{ ["--delay" as string]: "0.2s" }}
          >
            <a href="#download" className="btn-ink">
              <DownloadIcon /> {h.heroCta}
            </a>
            <a href={asset(pagePath("check", locale))} className="btn-line text-bone">
              {h.heroCta2} →
            </a>
          </div>
          <ul
            className="typewriter drop-in mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-dust"
            style={{ ["--delay" as string]: "0.28s" }}
          >
            {h.heroFacts.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-marker" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <ExhibitA />
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
      <path
        d="M10 2v11m-5-5 5 5 5-5M3 17h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

// ── What a file gives away ───────────────────────────────────────────────────

function GivesAway() {
  const ui = useUI();
  const h = ui.home;
  const tilt = [-1.5, 1, -0.6, 1.4, -1.1, 0.7];
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="display text-5xl uppercase sm:text-6xl">{h.givesHeading}</h2>
            <p className="mt-6 max-w-md text-lg text-[#d8d0c1]">{h.givesIntro}</p>
          </div>
          <ol className="grid gap-6 sm:grid-cols-2">
            {h.gives.map(([letter, title, text], i) => (
              <li
                key={letter}
                className="relative bg-[#1d1a16] px-6 pb-6 pt-8 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/5"
                style={{ transform: `rotate(${tilt[i]}deg)` }}
              >
                {/* evidence tag hole and string */}
                <span
                  className="absolute left-5 top-4 h-3 w-3 rounded-full border-2 border-dust/60"
                  aria-hidden="true"
                />
                <span className="display absolute right-5 top-2 text-6xl text-marker/90">
                  {letter}
                </span>
                <h3 className="display mt-6 text-3xl uppercase">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-dust">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ── The clipping ──────────────────────────────────────────────────────────────

function Clipping() {
  const ui = useUI();
  const h = ui.home;
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
      <article
        className="paper mx-auto max-w-4xl rotate-[0.6deg] px-6 py-10 sm:px-14 sm:py-14"
        style={{ backgroundColor: "#e6dcc6" }}
      >
        <span className="tape -top-4 left-10 rotate-[-4deg]" />
        <span className="tape -top-4 right-12 rotate-[5deg]" />
        <p className="kicker !text-ink-soft">{h.storyKicker}</p>
        <h2 className="mt-3 font-serif text-5xl font-black italic leading-none text-ink sm:text-7xl">
          {h.storyHeading}
        </h2>
        <div className="mt-8 columns-1 gap-10 text-[17px] leading-relaxed text-ink sm:columns-2 [&>p]:mb-4 [&>p:first-child]:first-letter:float-left [&>p:first-child]:first-letter:mr-2 [&>p:first-child]:first-letter:font-serif [&>p:first-child]:first-letter:text-6xl [&>p:first-child]:first-letter:font-black [&>p:first-child]:first-letter:leading-[0.8]">
          {h.storyBody.map((p, i) => (
            <p key={i} className={i === h.storyBody.length - 1 ? "font-bold" : ""}>
              {p}
            </p>
          ))}
        </div>
        <p className="typewriter mt-4 border-t border-ink/25 pt-3 text-xs text-ink-soft">
          {h.storySource}
        </p>
      </article>
    </section>
  );
}

// ── Try it ───────────────────────────────────────────────────────────────────

function TryIt() {
  const ui = useUI();
  const h = ui.home;
  return (
    <section id="check" className="relative border-y border-white/10 bg-[#161411]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="kicker">{h.checkKicker}</p>
          <h2 className="display mt-4 text-5xl uppercase sm:text-6xl">{h.checkHeading}</h2>
          <p className="mt-6 max-w-md text-lg text-[#d8d0c1]">{h.checkSub}</p>
        </div>
        <Checker compact />
      </div>
    </section>
  );
}

// ── Redaction levels ─────────────────────────────────────────────────────────

const SAMPLE: [string, string, Category][] = [
  ["GPSLatitude", "48.858400", "location"],
  ["GPSLongitude", "2.294500", "location"],
  ["Artist", "Jane Doe", "identity"],
  ["BodySerialNumber", "DNPXQ2M5K1F7", "identifiers"],
  ["Make", "FUJIFILM", "device"],
  ["LensModel", "XF35mmF1.4 R", "device"],
  ["DateTimeOriginal", "2024:06:01 18:12:09", "dates"],
  ["Software", "Lightroom Classic 13.2", "software"],
  ["ThumbnailImage", "160×120 JPEG", "thumbnail"],
  ["Copyright", "© Jane Doe 2024", "copyright"],
  ["ImageWidth", "6240", "technical"],
  ["Orientation", "Horizontal", "technical"],
];

function RedactionLevels() {
  const ui = useUI();
  const locale = useLocale();
  const h = ui.home;
  const [profile, setProfile] = useState<ProfileId>("social");
  const removes = new Set(PROFILE_REMOVES[profile]);
  const count = SAMPLE.filter(([, , c]) => removes.has(c)).length;
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="kicker">{h.profilesKicker}</p>
          <h2 className="display mt-4 text-5xl uppercase sm:text-6xl">{h.profilesHeading}</h2>
          <p className="mt-6 max-w-lg text-lg text-[#d8d0c1]">{h.profilesIntro}</p>
          <div className="mt-8 flex flex-col gap-2" role="radiogroup" aria-label={h.profilesKicker}>
            {PROFILE_ORDER.map((p) => {
              const [name, desc] = PROFILE_LABEL[locale][p];
              const active = profile === p;
              return (
                <button
                  key={p}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setProfile(p)}
                  className={`group grid grid-cols-[1.4rem_1fr] gap-3 border-l-4 px-4 py-3 text-left transition-colors ${
                    active
                      ? "border-marker bg-white/[0.06]"
                      : "border-transparent hover:bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`mt-1 h-4 w-4 border-2 ${active ? "border-marker bg-marker" : "border-dust"}`}
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block font-bold text-bone">{name}</span>
                    <span className="block text-sm text-dust">{desc}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="paper rotate-[0.8deg] px-6 py-7 sm:px-9">
          <div className="flex items-baseline justify-between border-b-2 border-ink pb-3">
            <p className="typewriter font-bold text-ink">{h.profilesFile}</p>
            <p className="hand text-2xl text-marker">
              {fmt(h.profilesCount, { n: count, total: SAMPLE.length })}
            </p>
          </div>
          <dl className="typewriter mt-4 space-y-2.5 text-[13.5px] text-ink">
            {SAMPLE.map(([tag, value, cat], i) => (
              <div key={tag} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                <dt className="flex items-baseline gap-2">
                  <span className="text-ink-soft">{tag}</span>
                  <span className="hidden text-[11px] uppercase tracking-wider text-ink-soft/70 sm:inline">
                    · {CATEGORY_LABEL[locale][cat]}
                  </span>
                  <span className="leader" aria-hidden="true" />
                </dt>
                <dd className="text-right font-bold">
                  <Redact on={removes.has(cat)} delay={i * 0.035}>
                    {value}
                  </Redact>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

// ── Proof: the real app ───────────────────────────────────────────────────────

function Proof() {
  const ui = useUI();
  const h = ui.home;
  const prints = [workspaceLight, workspaceFr, settingsDark];
  return (
    <section className="border-t border-white/10 bg-[#141210]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="kicker">{h.verifyKicker}</p>
            <h2 className="display mt-4 text-5xl uppercase sm:text-6xl">{h.verifyHeading}</h2>
            <p className="mt-6 text-lg text-[#d8d0c1]">{h.verifyBody}</p>
            <ul className="mt-10 space-y-3 border-t border-white/10 pt-8">
              <li className="kicker !text-bone">{h.notesHeading}</li>
              {h.notes.map((n) => (
                <li key={n} className="flex gap-3 text-[15px] text-dust">
                  <span className="typewriter text-marker">→</span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <figure className="relative rotate-[-1deg] bg-white p-2 pb-10 shadow-2xl">
              <span className="tape -top-4 left-1/2 -translate-x-1/2 rotate-[2deg]" />
              <img
                src={workspaceDark}
                alt={h.heroShotAlt}
                width={1280}
                height={800}
                className="block h-auto w-full"
                loading="lazy"
              />
              <figcaption className="hand absolute bottom-1.5 right-4 text-2xl text-ink">
                {h.verifyNote}
              </figcaption>
            </figure>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {prints.map((src, i) => (
                <figure
                  key={src}
                  className="bg-white p-1.5 pb-6 shadow-xl"
                  style={{ transform: `rotate(${[-2.5, 1.5, -1][i]}deg)` }}
                >
                  <img
                    src={src}
                    alt={h.shots[i][1]}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                  <figcaption className="hand mt-1 text-center text-lg text-ink">
                    {h.shots[i][0]}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Formats, privacy, CLI ────────────────────────────────────────────────────

function Formats() {
  const h = useUI().home;
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-bone pb-5">
        <h2 className="display text-5xl uppercase sm:text-6xl">{h.formatsHeading}</h2>
        <p className="typewriter text-dust">{h.formatsSub}</p>
      </div>
      <dl className="divide-y divide-white/10">
        {h.formatGroups.map(([group, list]) => (
          <div key={group} className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr]">
            <dt className="display text-3xl uppercase text-marker">{group}</dt>
            <dd className="typewriter text-lg text-bone">{list}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-sm text-dust">{h.formatsNote}</p>
    </section>
  );
}

function Privacy() {
  const h = useUI().home;
  return (
    <section className="relative overflow-hidden bg-bone text-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="kicker !text-ink-soft">{h.privacyKicker}</p>
          <h2 className="display mt-4 text-5xl uppercase sm:text-7xl">
            {h.privacyHeadingA}
            <span className="mt-2 block text-marker">{h.privacyHeadingB}</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed">{h.privacyBody}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed">{h.privacySite}</p>
        </div>
        <table className="typewriter h-fit w-full border-2 border-ink text-sm">
          <thead>
            <tr className="border-b-2 border-ink bg-ink text-paper">
              <th className="px-3 py-3 text-left font-normal">
                <span className="sr-only">—</span>
              </th>
              <th className="px-3 py-3 text-center font-normal">{h.tableOnline}</th>
              <th className="px-3 py-3 text-center font-bold">{h.tableEom}</th>
            </tr>
          </thead>
          <tbody>
            {h.tableRows.map(([label, varies]) => (
              <tr key={label} className="border-b border-ink/25">
                <th scope="row" className="px-3 py-3 text-left font-normal">
                  {label}
                </th>
                <td className="px-3 py-3 text-center">
                  {varies ? (
                    <span className="text-ink-soft">{h.tableVaries}</span>
                  ) : (
                    <span className="text-lg font-bold text-marker">✗</span>
                  )}
                </td>
                <td className="px-3 py-3 text-center text-lg font-bold">✓</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function CommandLine() {
  const h = useUI().home;
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="kicker">{h.cliKicker}</p>
          <h2 className="display mt-4 text-5xl uppercase sm:text-6xl">{h.cliHeading}</h2>
          <p className="mt-6 text-lg text-[#d8d0c1]">{h.cliBody}</p>
        </div>
        <pre className="overflow-x-auto border border-white/10 bg-[#0a0908] p-6 text-[13px] leading-7 text-bone shadow-[inset_0_0_60px_rgba(0,0,0,0.6)]">
          <code>
            {h.cli.map(([comment, cmd], i) => (
              <span key={cmd}>
                {i > 0 && "\n"}
                <span className="text-dust"># {comment}</span>
                {"\n"}
                <span className="select-none text-marker">$ </span>
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

// ── Guides, FAQ, download ────────────────────────────────────────────────────

function CaseNotes() {
  const ui = useUI();
  const locale = useLocale();
  const h = ui.home;
  const keys: GuideKey[] = [
    "remove-gps",
    "phone-photos",
    "pdf",
    "office",
    "what-is-exif",
    "online-tools",
  ];
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">{h.guidesKicker}</p>
            <h2 className="display mt-4 text-5xl uppercase sm:text-6xl">{h.guidesHeading}</h2>
            <p className="mt-4 max-w-lg text-dust">{h.guidesSub}</p>
          </div>
          <a href={asset(pagePath("guides", locale))} className="btn-line text-bone">
            {ui.shell.allGuides} →
          </a>
        </div>
        <ul className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {keys.map((key, i) => {
            const g = GUIDES[locale][key];
            return (
              <li key={key} className="bg-desk">
                <a
                  href={asset(guidePath(key, locale))}
                  className="group block h-full p-6 transition-colors hover:bg-white/[0.04]"
                >
                  <span className="typewriter text-xs text-marker">
                    N° {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-bone group-hover:underline group-hover:decoration-marker group-hover:decoration-2 group-hover:underline-offset-4">
                    {g.h1}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-dust">{g.description}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  const ui = useUI();
  const locale = useLocale();
  return (
    <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
      <h2 className="display text-5xl uppercase sm:text-6xl">{ui.home.faqHeading}</h2>
      <div className="mt-8 border-t-2 border-bone">
        {HOME_FAQ[locale].map(([q, a]) => (
          <details key={q} className="group border-b border-white/15 py-5">
            <summary className="flex list-none items-start justify-between gap-6 text-lg font-bold text-bone [&::-webkit-details-marker]:hidden">
              {q}
              <span
                className="typewriter mt-0.5 text-marker transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-3xl text-[#d8d0c1]">
              <Rich text={a} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function OsGlyph({ os }: { os: "windows" | "macos" | "linux" }) {
  if (os === "windows")
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M0 3.4 9.8 2v9.5H0zm10.9-1.6L24 0v11.4H10.9zM0 12.6h9.8V22L0 20.7zm10.9 0H24V24l-13.1-1.8z" />
      </svg>
    );
  if (os === "macos")
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.4 12.7c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.4.8c1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1zM13.9 5.1c.7-.9 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
      <path d="M12 2c-2.2 0-3.6 1.9-3.6 4.6 0 1.4.3 2.3-.5 3.4-1 1.4-2.6 3.5-2.6 6.2 0 .8.1 1.5.4 2.1-.8.4-1.7.9-1.7 1.7 0 1.3 2 1.2 3.4 1.6 1.1.3 1.9.4 2.6-.3.7.2 1.5.3 2 .3s1.3-.1 2-.3c.7.7 1.5.6 2.6.3 1.4-.4 3.4-.3 3.4-1.6 0-.8-.9-1.3-1.7-1.7.3-.6.4-1.3.4-2.1 0-2.7-1.6-4.8-2.6-6.2-.8-1.1-.5-2-.5-3.4C15.6 3.9 14.2 2 12 2zm-1.6 4.2c.4 0 .7.5.7 1.1s-.3 1.1-.7 1.1-.7-.5-.7-1.1.3-1.1.7-1.1zm3.2 0c.4 0 .7.5.7 1.1s-.3 1.1-.7 1.1-.7-.5-.7-1.1.3-1.1.7-1.1zM12 9.4c.9 0 2 .6 2 1s-1.1 1-2 1-2-.6-2-1 1.1-1 2-1z" />
    </svg>
  );
}

function Download() {
  const h = useUI().home;
  const rows = (["windows", "macos", "linux"] as const).map((os) => ({
    os,
    name: h.dl[os][0],
    note: h.dl[os][1],
    href: DOWNLOADS[os],
  }));
  return (
    <section
      id="download"
      className="scroll-mt-16 relative overflow-hidden border-t-4 border-marker bg-[#0c0b0a]"
    >
      <div className="pointer-events-none absolute -right-24 top-10 select-none opacity-[0.06]">
        <Stamp className="text-bone text-[10rem]" rotate={-12}>
          EOM
        </Stamp>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <p className="kicker">{h.downloadKicker}</p>
        <h2 className="display mt-4 text-6xl uppercase sm:text-8xl">{h.downloadHeading}</h2>
        <p className="mt-5 text-xl text-[#d8d0c1]">
          {h.downloadSub}{" "}
          <span className="typewriter text-dust">
            · {h.version} {APP_VERSION}
          </span>
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {rows.map((r) => (
            <a
              key={r.os}
              href={r.href}
              className="paper group flex flex-col justify-between gap-8 p-6 transition-transform hover:-translate-y-1 hover:rotate-[-0.5deg]"
            >
              <div>
                <div className="flex items-center justify-between text-ink">
                  <OsGlyph os={r.os} />
                  <span className="typewriter text-xs text-ink-soft">
                    {r.href.split("/").pop()}
                  </span>
                </div>
                <p className="display mt-6 text-4xl uppercase text-ink">{r.name}</p>
                <p className="mt-2 text-sm text-ink-soft">{r.note}</p>
              </div>
              <span className="btn-ink w-full">
                <DownloadIcon /> {h.downloadBtn}
              </span>
            </a>
          ))}
        </div>
        <div className="mt-8 space-y-1.5 text-sm text-dust [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-bone">
          <p>
            <Rich text={h.dlHelpLinux} />
          </p>
          <p>
            <Rich text={h.dlHelpMac} />
          </p>
          <p className="pt-3">
            <a href={LATEST_RELEASE_URL} className="link-marker text-bone">
              {h.dlNotes} ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <GivesAway />
      <Clipping />
      <TryIt />
      <RedactionLevels />
      <Proof />
      <Formats />
      <Privacy />
      <CommandLine />
      <CaseNotes />
      <Faq />
      <Download />
    </>
  );
}
