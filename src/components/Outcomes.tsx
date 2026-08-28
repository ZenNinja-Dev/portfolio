import { useLang } from '../i18n'

export default function Outcomes() {
  const { t } = useLang()
  return (
    <section id="outcomes" className="border-b border-edge">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-slate-500">{t.outcomes.heading}</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.outcomes.items.map((o) => (
            <div key={o.title} className="rounded-lg border border-edge bg-panel p-5">
              <div className="flex items-start gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                <h3 className="text-base font-semibold text-slate-100">{o.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
