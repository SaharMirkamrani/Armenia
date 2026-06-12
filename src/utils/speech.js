// Text-to-speech for Armenian using the browser's built-in SpeechSynthesis.
// No external services — works fully offline. Quality depends on whether the
// device has an Armenian (hy) voice installed; otherwise the OS picks a
// fallback voice, so the on-screen transliteration stays the reliable guide.

let voices = []

function refresh() {
  voices = typeof window !== 'undefined' && window.speechSynthesis
    ? window.speechSynthesis.getVoices()
    : []
}

if (typeof window !== 'undefined' && window.speechSynthesis) {
  refresh()
  // Voices often load asynchronously.
  window.speechSynthesis.addEventListener?.('voiceschanged', refresh)
}

/** True if the device has an Armenian voice available. */
export function hasArmenianVoice() {
  return voices.some((v) => (v.lang || '').toLowerCase().startsWith('hy'))
}

/**
 * Speak an Armenian string aloud (best-effort).
 * If the device has an Armenian voice, the Armenian script is spoken.
 * Otherwise we fall back to reading the transliteration with a default
 * voice — many browsers stay completely silent when asked to speak text
 * in a language they have no voice for, so this guarantees audible output.
 */
export function speakArmenian(text, fallback) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  // Voices can load late; make sure we have the latest list.
  if (!voices.length) refresh()

  const synth = window.speechSynthesis
  synth.cancel()

  const hy = voices.find((v) => (v.lang || '').toLowerCase().startsWith('hy'))
  let u
  if (hy) {
    u = new SpeechSynthesisUtterance(text)
    u.voice = hy
    u.lang = hy.lang || 'hy-AM'
  } else {
    // No Armenian voice — read the transliteration so it's at least audible.
    const spoken = (fallback || text).replace(/\s*\/\s*/g, ' or ')
    u = new SpeechSynthesisUtterance(spoken)
    const en = voices.find((v) => (v.lang || '').toLowerCase().startsWith('en'))
    if (en) u.voice = en
    u.lang = en ? en.lang : 'en-US'
  }
  u.rate = 0.9
  synth.speak(u)
  // Work around Chrome occasionally leaving the queue paused.
  synth.resume()
}
