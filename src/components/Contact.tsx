import { CALENDLY_URL } from '../data/content'
import { useLang } from '../i18n'

export default function Contact() {
  const { t } = useLang()
  return (
    <section id="contact" className="relative border-b border-edge">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-5xl px-5 py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">{t.contact.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">{t.contact.body}</p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-emerald-300"
        >
          {t.contact.cta}
        </a>
      </div>
    </section>
  )
}
