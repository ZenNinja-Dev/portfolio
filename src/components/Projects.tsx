import { useLang } from '../i18n'

export default function Projects() {
  const { t } = useLang()
  return (
    <section id="work" className="border-b border-edge">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-slate-500">{t.work.heading}</h2>
        <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-slate-100">{t.work.title}</p>

        <div className="mt-12 space-y-5">
          {t.projects.map((p) => (
            <article key={p.title} className="rounded-lg border border-edge bg-panel p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-accent">{p.tag}</span>
                {p.status && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-edge px-2 py-0.5 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {p.status}
                  </span>
                )}
              </div>

              <h3 className="mt-3 text-xl font-semibold text-slate-50">{p.title}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">{p.summary}</p>

              <div className="mt-5 grid gap-6 md:grid-cols-[1.5fr_1fr]">
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="md:border-l md:border-edge md:pl-6">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-edge bg-ink px-2.5 py-1 font-mono text-xs text-slate-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
                    >
                      {t.repoLabel}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs italic text-slate-600">{t.work.note}</p>
      </div>
    </section>
  )
}
