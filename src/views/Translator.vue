<script setup>
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

// Source language: auto-detect, English, or Persian. Target is always Armenian.
const sourceLang = ref('auto') // 'auto' | 'en' | 'fa'
const inputText = ref('')
const outputText = ref('')
const status = ref('') // '', 'translating', 'error'
const listening = ref(false)
const autoSpeak = ref(false)
const copied = ref(false)

let debounceTimer = null
let reqId = 0
let recog = null

const SR = typeof window !== 'undefined' ? window.SpeechRecognition || window.webkitSpeechRecognition : null
const sttSupported = !!SR

const langLabel = { auto: 'Auto-detect', en: 'English', fa: 'Persian (فارسی)' }

function detectLang(t) {
  return /[؀-ۿ]/.test(t) ? 'fa' : 'en'
}

function sttLang() {
  const s = sourceLang.value === 'auto' ? detectLang(inputText.value) : sourceLang.value
  return s === 'fa' ? 'fa-IR' : 'en-US'
}

// ── Translation (Google unofficial gtx → MyMemory fallback) ──
async function googleTranslate(text) {
  const sl = sourceLang.value === 'auto' ? 'auto' : sourceLang.value
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=hy&dt=t&q=${encodeURIComponent(text)}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('google')
  const data = await res.json()
  return data[0].map((s) => s[0]).join('')
}

async function myMemoryTranslate(text) {
  const sl = sourceLang.value === 'auto' ? detectLang(text) : sourceLang.value
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sl}|hy`
  const res = await fetch(url)
  const data = await res.json()
  const t = data?.responseData?.translatedText
  if (!t) throw new Error('mymemory')
  return t
}

async function doTranslate() {
  const text = inputText.value.trim()
  if (!text) {
    outputText.value = ''
    status.value = ''
    return
  }
  const id = ++reqId
  status.value = 'translating'
  try {
    let result
    try {
      result = await googleTranslate(text)
    } catch {
      result = await myMemoryTranslate(text)
    }
    if (id !== reqId) return // a newer request superseded this one
    outputText.value = result
    status.value = ''
    if (autoSpeak.value) trySpeakInline() // inline only — never auto-opens a tab
  } catch {
    if (id !== reqId) return
    status.value = 'error'
  }
}

function scheduleTranslate() {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(doTranslate, 350) // debounce for real-time feel
}

watch(inputText, scheduleTranslate)
watch(sourceLang, doTranslate)

// ── Speech-to-text (audio input) ──
function toggleListen() {
  if (listening.value) {
    stopListen()
    return
  }
  if (!SR) return
  recog = new SR()
  recog.lang = sttLang()
  recog.interimResults = true
  recog.continuous = true
  recog.onresult = (e) => {
    let t = ''
    for (let i = 0; i < e.results.length; i++) t += e.results[i][0].transcript
    inputText.value = t // live transcription → triggers live translation
  }
  recog.onerror = () => {
    listening.value = false
  }
  recog.onend = () => {
    listening.value = false
  }
  try {
    recog.start()
    listening.value = true
  } catch {
    listening.value = false
  }
}

function stopListen() {
  try {
    recog && recog.stop()
  } catch {
    /* ignore */
  }
  listening.value = false
}

// ── Text-to-speech (audio output, Armenian) ──
// We do NOT call any TTS web API — browsers block cross-origin TTS endpoints
// (CORS). Instead we use the device's built-in speech voices if an Armenian
// one exists; otherwise we open Google Translate, where playback works.
const gtUrl = computed(() => {
  const sl = sourceLang.value === 'auto' ? 'auto' : sourceLang.value
  return `https://translate.google.com/?sl=${sl}&tl=hy&text=${encodeURIComponent(inputText.value)}&op=translate`
})

function armenianVoice() {
  const voices = typeof window !== 'undefined' && window.speechSynthesis ? window.speechSynthesis.getVoices() : []
  return voices.find((v) => (v.lang || '').toLowerCase().startsWith('hy'))
}

// Speak inline using a local Armenian voice. Returns false if none is available.
function trySpeakInline() {
  const text = outputText.value.trim()
  if (!text || !window.speechSynthesis) return false
  const v = armenianVoice()
  if (!v) return false
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.voice = v
  u.lang = v.lang || 'hy-AM'
  u.rate = 0.9
  window.speechSynthesis.speak(u)
  return true
}

// Listen button: speak inline if possible, otherwise open Google Translate.
function speakOut() {
  if (!outputText.value.trim()) return
  if (!trySpeakInline()) window.open(gtUrl.value, '_blank', 'noopener')
}

function copyOut() {
  if (!outputText.value) return
  navigator.clipboard?.writeText(outputText.value)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}

function clearAll() {
  inputText.value = ''
  outputText.value = ''
  status.value = ''
}

onBeforeUnmount(() => {
  clearTimeout(debounceTimer)
  stopListen()
})
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Translator</p>
    <h1>🔁 Live Translator</h1>
    <p class="lead">
      Translate <strong>English</strong> or <strong>Persian</strong> → <strong>Armenian</strong> in real time.
      Type or speak, and read or listen to the result.
    </p>

    <div class="lang-bar">
      <label>From</label>
      <select v-model="sourceLang" aria-label="Source language">
        <option value="auto">Auto-detect</option>
        <option value="en">English</option>
        <option value="fa">Persian (فارسی)</option>
      </select>
      <span class="arrow">→</span>
      <span class="to">🇦🇲 Armenian</span>
    </div>

    <div class="panes">
      <!-- Input -->
      <div class="pane">
        <div class="pane-head">
          <span>{{ langLabel[sourceLang] }}</span>
          <button
            v-if="sttSupported"
            class="mic-btn"
            :class="{ live: listening }"
            type="button"
            @click="toggleListen"
            :aria-label="listening ? 'Stop listening' : 'Speak'"
          >{{ listening ? '⏹ Stop' : '🎙 Speak' }}</button>
          <span v-else class="hint">🎙 mic not supported here</span>
        </div>
        <textarea
          v-model="inputText"
          :dir="(sourceLang === 'fa' || (sourceLang === 'auto' && /[؀-ۿ]/.test(inputText))) ? 'rtl' : 'ltr'"
          placeholder="Type or speak…"
          rows="5"
        ></textarea>
        <div class="pane-foot">
          <button class="ghost" type="button" @click="clearAll" :disabled="!inputText && !outputText">Clear</button>
        </div>
      </div>

      <!-- Output -->
      <div class="pane">
        <div class="pane-head">
          <span>🇦🇲 Armenian</span>
          <span v-if="status === 'translating'" class="hint">translating…</span>
          <span v-else-if="status === 'error'" class="hint err">service unavailable</span>
        </div>
        <textarea lang="hy" readonly :value="outputText" placeholder="Translation appears here…" rows="5"></textarea>
        <div class="pane-foot">
          <button class="speak" type="button" @click="speakOut" :disabled="!outputText">🔊 Listen</button>
          <button class="ghost" type="button" @click="copyOut" :disabled="!outputText">{{ copied ? 'Copied ✓' : 'Copy' }}</button>
        </div>
        <p v-if="outputText" class="audio-note">
          Plays here if your device has an Armenian voice; otherwise 🔊 opens
          <a :href="gtUrl" target="_blank" rel="noopener">Google Translate</a> to play it.
        </p>
      </div>
    </div>

    <label class="auto-speak">
      <input type="checkbox" v-model="autoSpeak" />
      Speak the translation automatically
    </label>

    <div class="callout">
      <h3>💡 Tips</h3>
      <ul style="margin:0">
        <li>Translation happens as you type or speak — no button needed.</li>
        <li>For voice input, pick <em>English</em> or <em>Persian</em> (not Auto) so the mic listens in the right language.</li>
        <li>🎙 Speak works best in Chrome; allow microphone access when asked.</li>
        <li>🔊 Listen plays here only if your device has an Armenian voice installed; otherwise it opens Google Translate, which always has audio.</li>
      </ul>
    </div>

    <div class="disclaimer">
      ⚠️ Uses free public translation services for a client-side demo — quality is machine-level and it may rate-limit
      or be briefly unavailable. For anything important, double-check with a person or a dedicated translation app.
    </div>
  </article>
</template>

<style scoped>
.lang-bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin: 18px 0 14px; }
.lang-bar label { color: var(--muted); font-size: 0.9rem; }
.lang-bar select {
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 0.95rem;
}
.lang-bar .arrow { color: var(--muted); }
.lang-bar .to { font-weight: 600; }

.panes { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.pane { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 14px; }
.pane-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; color: var(--muted); gap: 8px; }
.pane textarea {
  width: 100%;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text);
  padding: 12px;
  font-size: 1.05rem;
  line-height: 1.5;
  resize: vertical;
  font-family: inherit;
}
.pane textarea:focus { outline: none; border-color: var(--accent); }
.pane-foot { display: flex; gap: 8px; margin-top: 10px; }

.mic-btn, .speak, .ghost {
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 0.85rem;
  cursor: pointer;
}
.mic-btn:hover, .speak:hover, .ghost:hover { border-color: var(--accent); }
.mic-btn.live { background: #5a1f1f; border-color: #b54b4b; color: #ffd9d9; }
.speak[disabled], .ghost[disabled] { opacity: 0.45; cursor: not-allowed; }
.hint { font-size: 0.82rem; }
.hint.err { color: #f2a65a; }

.audio-note { margin: 8px 2px 0; font-size: 0.78rem; color: var(--muted); }
.auto-speak { display: inline-flex; align-items: center; gap: 8px; margin: 14px 0; color: var(--muted); font-size: 0.92rem; }

@media (max-width: 600px) {
  .panes { grid-template-columns: 1fr; }
}
</style>
