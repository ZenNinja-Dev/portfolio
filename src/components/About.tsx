import { site } from '../data/content'
import { useLang } from '../i18n'

export default function About() {
  const { t } = useLang()
  return (
    <section id="about" className="border-b border-edge">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-50">{t.about.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400">{t.about.body}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a href={site.github} target="_blank" rel="noreferrer" className="text-accent hover:underline">
              GitHub ↗
            </a>
            <span className="text-slate-600">·</span>
            <span className="text-slate-500">{site.location}</span>
          </div>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500">{t.about.stackLabel}</h3>
          <div className="mt-4 flex flex-col gap-2">
            {t.about.stack.map((s) => (
              <span
                key={s}
                className="rounded border border-edge bg-panel px-3 py-2 font-mono text-xs text-slate-400"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
