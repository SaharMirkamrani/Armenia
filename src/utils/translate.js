// Shared translation helpers used by the conversation translator.
// Client-side only: Google's unofficial gtx endpoint (good quality, CORS-OK
// from browsers) with a MyMemory fallback. No API key.

/** Guess a language from the script: Armenian, Persian/Arabic, else English. */
export function detectLang(t) {
  if (/[԰-֏]/.test(t)) return 'hy'
  if (/[؀-ۿ]/.test(t)) return 'fa'
  return 'en'
}

async function googleTranslate(text, sl, tl) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(text)}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('google')
  const data = await res.json()
  return data[0].map((s) => s[0]).join('')
}

async function myMemoryTranslate(text, sl, tl) {
  const src = sl === 'auto' ? detectLang(text) : sl
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${src}|${tl}`
  const res = await fetch(url)
  const data = await res.json()
  const t = data?.responseData?.translatedText
  if (!t) throw new Error('mymemory')
  return t
}

/** Translate `text` from `sl` ('auto' allowed) to `tl`. */
export async function translate(text, sl, tl) {
  try {
    return await googleTranslate(text, sl, tl)
  } catch {
    return await myMemoryTranslate(text, sl, tl)
  }
}
