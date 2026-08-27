import { caseStudy as c } from '../data/content'

export default function CaseStudy() {
  return (
    <section id="work" className="border-b border-edge">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 animate-none rounded-full bg-accent" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
            {c.label}
          </span>
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50">{c.title}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">{c.oneLiner}</p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500">The problem</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.context}</p>
            <h3 className="mt-8 font-mono text-xs uppercase tracking-wider text-slate-500">
              What it does now
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.solution}</p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500">Results</h3>
            <ul className="mt-3 space-y-3">
              {c.results.map((r) => (
                <li key={r} className="flex gap-2.5 text-sm text-slate-300">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-mono text-xs uppercase tracking-wider text-slate-500">Stack</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {c.stack.map((t) => (
                <span
                  key={t}
                  className="rounded border border-edge bg-panel px-2.5 py-1 font-mono text-xs text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-edge pt-5 text-xs italic text-slate-600">{c.note}</p>
      </div>
    </section>
  )
}
