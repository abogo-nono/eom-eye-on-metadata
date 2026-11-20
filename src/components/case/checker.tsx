import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { useLocale, useUI } from "@/i18n/useLocale";
import { fmt } from "@/i18n/ui";
import { CATEGORY_LABEL, PROFILE_LABEL } from "@/i18n/labels";
import {
  CATEGORY_ORDER,
  CATEGORY_SEVERITY,
  PROFILE_ORDER,
  PROFILE_REMOVES,
  assess,
  categorize,
  type Finding,
  type ProfileId,
  type Report,
} from "@/lib/risk";
import { asset, pagePath } from "@/site";
import { Redact, Stamp } from "./shell";

type State =
  | { kind: "idle" }
  | { kind: "reading"; name: string }
  | {
      kind: "done";
      name: string;
      size: number;
      preview: string | null;
      report: Report;
      gps: [number, number] | null;
    }
  | { kind: "empty"; name: string; preview: string | null }
  | { kind: "error"; name: string };

const SKIP = new Set(["latitude", "longitude", "errors"]);

function formatValue(value: unknown): string {
  if (value instanceof Date) {
    // EXIF dates have no time zone: show the wall-clock time as written.
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())} ${pad(value.getHours())}:${pad(value.getMinutes())}:${pad(value.getSeconds())}`;
  }
  if (value instanceof Uint8Array || value instanceof ArrayBuffer)
    return `[${(value as Uint8Array).byteLength ?? 0} bytes]`;
  if (Array.isArray(value)) return value.map(formatValue).join(", ");
  if (typeof value === "number")
    return Number.isInteger(value) ? String(value) : String(Math.round(value * 1e6) / 1e6);
  const text = String(value ?? "").trim();
  return text.length > 90 ? `${text.slice(0, 87)}…` : text;
}

/** Flatten exifr output (XMP can be nested) into tag/value findings. */
function toFindings(raw: Record<string, unknown>): Finding[] {
  const out: Finding[] = [];
  const walk = (obj: Record<string, unknown>, prefix: string) => {
    for (const [key, value] of Object.entries(obj)) {
      if (SKIP.has(key) || value === undefined || value === null || value === "") continue;
      if (
        typeof value === "object" &&
        !(value instanceof Date) &&
        !Array.isArray(value) &&
        !(value instanceof Uint8Array) &&
        !(value instanceof ArrayBuffer)
      ) {
        walk(value as Record<string, unknown>, key);
        continue;
      }
      const tag = prefix && /^\d+$/.test(key) ? prefix : key;
      const shown = formatValue(value);
      if (!shown) continue;
      out.push({ tag, value: shown, category: categorize(tag) });
    }
  };
  walk(raw, "");
  return out;
}

export function Checker({ compact = false }: { compact?: boolean }) {
  const ui = useUI();
  const locale = useLocale();
  const t = ui.checker;
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<State>({ kind: "idle" });
  const [over, setOver] = useState(false);
  const [profile, setProfile] = useState<ProfileId>("social");
  const previewRef = useRef<string | null>(null);

  useEffect(
    () => () => {
      if (previewRef.current) URL.revokeObjectURL(previewRef.current);
    },
    [],
  );

  const read = useCallback(async (file: File) => {
    if (previewRef.current) URL.revokeObjectURL(previewRef.current);
    const preview =
      file.type.startsWith("image/") && !/hei[cf]/i.test(file.type)
        ? URL.createObjectURL(file)
        : null;
    previewRef.current = preview;
    setState({ kind: "reading", name: file.name });
    try {
      const { default: exifr } = await import("exifr");
      const raw = (await exifr.parse(file, {
        tiff: true,
        ifd1: true,
        exif: true,
        gps: true,
        interop: false,
        xmp: true,
        iptc: true,
        icc: false,
        jfif: false,
        ihdr: true,
        makerNote: false,
        userComment: true,
        mergeOutput: true,
        translateKeys: true,
        translateValues: true,
        reviveValues: true,
      })) as Record<string, unknown> | undefined;
      const findings = raw ? toFindings(raw) : [];
      if (findings.length === 0) {
        setState({ kind: "empty", name: file.name, preview });
        return;
      }
      const lat = typeof raw?.latitude === "number" ? raw.latitude : null;
      const lon = typeof raw?.longitude === "number" ? raw.longitude : null;
      setState({
        kind: "done",
        name: file.name,
        size: file.size,
        preview,
        report: assess(findings),
        gps: lat !== null && lon !== null ? [lat, lon] : null,
      });
    } catch {
      setState({ kind: "error", name: file.name });
    }
  }, []);

  const onFiles = (files: FileList | null) => {
    const file = files?.[0];
    if (file) void read(file);
  };

  const reset = () => {
    setState({ kind: "idle" });
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept="image/*,.heic,.heif,.tif,.tiff"
        className="sr-only"
        onChange={(e) => onFiles(e.target.files)}
      />

      {(state.kind === "idle" || state.kind === "reading") && (
        <label
          htmlFor={inputId}
          onDragOver={(e) => {
            e.preventDefault();
            setOver(true);
          }}
          onDragLeave={() => setOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setOver(false);
            onFiles(e.dataTransfer.files);
          }}
          className={`paper group flex cursor-pointer flex-col items-center justify-center px-6 text-center transition-transform ${
            compact ? "min-h-[300px]" : "min-h-[380px]"
          } ${over ? "scale-[1.01]" : ""}`}
          style={{ transform: over ? "rotate(-0.4deg)" : "rotate(0.3deg)" }}
        >
          <span
            className={`pointer-events-none absolute inset-4 border-2 border-dashed transition-colors ${over ? "border-eye-deep" : "border-ink/25 group-hover:border-ink/50"}`}
          />
          {state.kind === "reading" ? (
            <p className="typewriter text-lg text-ink">{t.reading}</p>
          ) : (
            <>
              <svg viewBox="0 0 64 64" className="mb-5 h-16 w-16 text-ink" aria-hidden="true">
                <rect
                  x="8"
                  y="14"
                  width="48"
                  height="38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <circle cx="24" cy="28" r="5" fill="none" stroke="currentColor" strokeWidth="3" />
                <path
                  d="M10 48l16-14 10 9 8-6 10 9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  d="M40 4v18m-7-7 7 7 7-7"
                  fill="none"
                  stroke="var(--eye-deep)"
                  strokeWidth="3.5"
                />
              </svg>
              <p className="display text-4xl text-ink sm:text-5xl">{over ? t.dropping : t.drop}</p>
              <p className="typewriter mt-2 text-ink-soft">{t.dropOr}</p>
              <p className="typewriter mt-6 text-xs tracking-[0.2em] text-ink-soft">
                {t.dropFormats}
              </p>
              <p className="hand mt-4 text-2xl text-eye-deep">{t.local}</p>
            </>
          )}
        </label>
      )}

      {(state.kind === "empty" || state.kind === "error") && (
        <div className="paper px-6 py-10 sm:px-10">
          <p className="typewriter text-sm text-ink-soft">{state.name}</p>
          <div className="mt-4 flex flex-wrap items-center gap-5">
            {state.kind === "empty" && (
              <Stamp className="text-[#2f7d3a] text-3xl" rotate={-6} animate>
                {t.verdict[0]}
              </Stamp>
            )}
            <p className="max-w-xl text-ink">{state.kind === "empty" ? t.nothing : t.error}</p>
          </div>
          <button type="button" onClick={reset} className="btn-line btn-line-ink mt-8">
            {t.another}
          </button>
        </div>
      )}

      {state.kind === "done" && (
        <Result
          state={state}
          profile={profile}
          setProfile={setProfile}
          onReset={reset}
          locale={locale}
        />
      )}

      <p className="typewriter mt-4 max-w-2xl text-xs leading-relaxed text-dust">{t.proof}</p>
    </div>
  );
}

function Result({
  state,
  profile,
  setProfile,
  onReset,
  locale,
}: {
  state: Extract<State, { kind: "done" }>;
  profile: ProfileId;
  setProfile: (p: ProfileId) => void;
  onReset: () => void;
  locale: "en" | "fr";
}) {
  const ui = useUI();
  const t = ui.checker;
  const { report } = state;
  const removes = useMemo(() => new Set(PROFILE_REMOVES[profile]), [profile]);
  const sensitive = report.findings.filter((f) => CATEGORY_SEVERITY[f.category] >= 2).length;
  const removedCount = report.findings.filter((f) => removes.has(f.category)).length;
  const verdictColor = ["text-[#2f7d3a]", "text-[#6b6b2a]", "text-[#b06a12]", "text-marker"][
    report.level
  ];
  const categories = CATEGORY_ORDER.filter((c) => c !== "technical" && report.byCategory.has(c));
  const technical = report.byCategory.get("technical") ?? [];

  return (
    <div className="paper px-5 py-8 sm:px-10 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* The print, the verdict */}
        <div>
          {state.preview ? (
            <div className="relative mx-auto w-fit rotate-[-2deg] bg-white p-2 pb-8 shadow-lg">
              <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-[3deg]" />
              <img
                src={state.preview}
                alt=""
                className="block max-h-52 max-w-[220px] object-cover"
              />
            </div>
          ) : (
            <div className="typewriter flex h-40 items-center justify-center border border-ink/20 text-ink-soft">
              {state.name.split(".").pop()?.toUpperCase()}
            </div>
          )}
          <p className="typewriter mt-5 break-all text-sm text-ink">{state.name}</p>
          <p className="typewriter text-xs text-ink-soft">
            {(state.size / 1024).toFixed(0)} KB ·{" "}
            {fmt(t.summary, { n: report.findings.length, s: sensitive })}
          </p>
          <div className="mt-5">
            <Stamp className={`${verdictColor} text-3xl`} rotate={-7} animate delay={0.15}>
              {t.verdict[report.level]}
            </Stamp>
          </div>
        </div>

        {/* The record */}
        <div>
          <fieldset>
            <legend className="kicker !text-ink-soft">{t.profile}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {PROFILE_ORDER.map((p) => (
                <button
                  key={p}
                  type="button"
                  aria-pressed={profile === p}
                  onClick={() => setProfile(p)}
                  className={`typewriter border px-2.5 py-1 text-xs transition-colors ${
                    profile === p
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/30 text-ink hover:border-ink"
                  }`}
                >
                  {PROFILE_LABEL[locale][p][0]}
                </button>
              ))}
            </div>
            <p className="hand mt-3 text-2xl text-marker">{fmt(t.willGo, { n: removedCount })}</p>
          </fieldset>

          <div className="mt-5 space-y-5">
            {categories.map((cat) => {
              const rows = report.byCategory.get(cat) ?? [];
              const shown = rows.slice(0, 8);
              const sev = CATEGORY_SEVERITY[cat];
              return (
                <section key={cat}>
                  <h3 className="flex items-center gap-2 border-b border-ink/20 pb-1 text-sm font-bold text-ink">
                    <span
                      className={`inline-block h-2.5 w-2.5 ${sev === 3 ? "bg-marker" : sev === 2 ? "bg-[#c47d16]" : "bg-ink/40"}`}
                      aria-hidden="true"
                    />
                    {CATEGORY_LABEL[locale][cat]}
                  </h3>
                  <dl className="typewriter mt-1.5 space-y-1 text-[13px]">
                    {shown.map((f, i) => (
                      <div key={`${f.tag}-${i}`} className="flex items-baseline gap-2">
                        <dt className="shrink-0 text-ink-soft">{f.tag}</dt>
                        <span className="leader text-ink" aria-hidden="true" />
                        <dd className="min-w-0 max-w-[60%] break-words text-right text-ink">
                          <Redact on={removes.has(cat)} delay={i * 0.03}>
                            {f.value}
                          </Redact>
                        </dd>
                      </div>
                    ))}
                    {rows.length > shown.length && (
                      <p className="text-xs text-ink-soft">
                        + {fmt(t.more, { n: rows.length - shown.length })}
                      </p>
                    )}
                  </dl>
                  {cat === "location" && state.gps && (
                    <a
                      className="typewriter mt-2 inline-block text-sm text-eye-deep underline underline-offset-4"
                      href={`https://www.openstreetmap.org/?mlat=${state.gps[0]}&mlon=${state.gps[1]}#map=17/${state.gps[0]}/${state.gps[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.map} ↗ <span className="text-xs text-ink-soft">({t.mapNote})</span>
                    </a>
                  )}
                </section>
              );
            })}
            {technical.length > 0 && (
              <details className="typewriter text-[13px] text-ink-soft">
                <summary>
                  {t.technical} ({technical.length})
                </summary>
                <dl className="mt-2 space-y-1">
                  {technical.map((f, i) => (
                    <div key={`${f.tag}-${i}`} className="flex gap-2">
                      <dt>{f.tag}</dt>
                      <span className="leader" aria-hidden="true" />
                      <dd className="text-right">
                        <Redact on={removes.has("technical")}>{f.value}</Redact>
                      </dd>
                    </div>
                  ))}
                </dl>
              </details>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-ink/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a href={`${asset(pagePath("home", locale))}#download`} className="btn-ink">
            {t.cta}
          </a>
          <p className="mt-2 max-w-md text-sm text-ink-soft">{t.ctaNote}</p>
        </div>
        <button type="button" onClick={onReset} className="btn-line btn-line-ink">
          {t.another}
        </button>
      </div>
    </div>
  );
}
