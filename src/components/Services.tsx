import { useLang } from '../i18n'

export default function Services() {
  const { t } = useLang()
  return (
    <section id="services" className="border-b border-edge">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-slate-500">{t.services.heading}</h2>
        <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-slate-100">
          {t.services.title}
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.services.items.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-lg border border-edge bg-panel p-6 transition-colors hover:border-slate-600"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent">{s.tag}</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-100">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
              <ul className="mt-5 space-y-2.5 border-t border-edge pt-5 text-sm text-slate-300">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
