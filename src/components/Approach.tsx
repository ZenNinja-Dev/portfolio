import { useLang } from '../i18n'

export default function Approach() {
  const { t } = useLang()
  return (
    <section id="approach" className="border-b border-edge">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-50">{t.approach.title}</h2>
        <p className="mt-3 max-w-2xl text-slate-400">{t.approach.sub}</p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-edge bg-edge sm:grid-cols-2">
          {t.approach.steps.map((s, i) => (
            <div key={s.title} className="bg-panel p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-base font-semibold text-slate-100">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
