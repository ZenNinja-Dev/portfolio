import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { CONTENT, type Lang } from './data/content'

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof CONTENT)['en'] }

const LangContext = createContext<Ctx | null>(null)

const HTML_LANG: Record<Lang, string> = { en: 'en', cz: 'cs', sk: 'sk' }

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'cz' || saved === 'sk') return saved
  } catch {
    /* private mode / blocked storage — fall through */
  }
  return 'en' // default English; visitors toggle to CZ / SK
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang]
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang: setLangState, t: CONTENT[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
