<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { translate, detectLang } from '../utils/translate'

// ── Ask: English/Persian → Armenian ──
const askFrom = ref('auto') // 'auto' | 'en' | 'fa'
const askInput = ref('')
const armenianText = ref('')
const askStatus = ref('')

// ── Reply (in modal): Armenian → your language ──
const showModal = ref(false)
const replyTo = ref('en') // 'en' | 'fa'
const replyInput = ref('')
const replyOutput = ref('')
const replyStatus = ref('')

// ── Speech recognition (shared, tracks which field is active) ──
const SR = typeof window !== 'undefined' ? window.SpeechRecognition || window.webkitSpeechRecognition : null
const sttSupported = !!SR
const listeningField = ref('') // '', 'ask', 'reply'
let recog = null

let askTimer = null
let replyTimer = null
let askReq = 0
let replyReq = 0

const askIsRtl = () => askFrom.value === 'fa' || (askFrom.value === 'auto' && detectLang(askInput.value) === 'fa')

async function doAsk() {
  const text = askInput.value.trim()
  if (!text) {
    armenianText.value = ''
    askStatus.value = ''
    return
  }
  const id = ++askReq
  askStatus.value = 'translating'
  try {
    const res = await translate(text, askFrom.value, 'hy')
    if (id !== askReq) return
    armenianText.value = res
    askStatus.value = ''
  } catch {
    if (id === askReq) askStatus.value = 'error'
  }
}
function scheduleAsk() {
  clearTimeout(askTimer)
  askTimer = setTimeout(doAsk, 350)
}
watch(askInput, scheduleAsk)
watch(askFrom, doAsk)

async function doReply() {
  const text = replyInput.value.trim()
  if (!text) {
    replyOutput.value = ''
    replyStatus.value = ''
    return
  }
  const id = ++replyReq
  replyStatus.value = 'translating'
  try {
    const res = await translate(text, 'hy', replyTo.value)
    if (id !== replyReq) return
    replyOutput.value = res
    replyStatus.value = ''
  } catch {
    if (id === replyReq) replyStatus.value = 'error'
  }
}
function scheduleReply() {
  clearTimeout(replyTimer)
  replyTimer = setTimeout(doReply, 350)
}
watch(replyInput, scheduleReply)
watch(replyTo, doReply)

// ── Mic ──
function toggleListen(field, langCode, assign) {
  if (listeningField.value === field) {
    stopListen()
    return
  }
  stopListen()
  if (!SR) return
  recog = new SR()
  recog.lang = langCode
  recog.interimResults = true
  recog.continuous = true
  recog.onresult = (e) => {
    let t = ''
    for (let i = 0; i < e.results.length; i++) t += e.results[i][0].transcript
    assign(t)
  }
  recog.onerror = () => (listeningField.value = '')
  recog.onend = () => (listeningField.value = '')
  try {
    recog.start()
    listeningField.value = field
  } catch {
    listeningField.value = ''
  }
}
function stopListen() {
  try {
    recog && recog.stop()
  } catch {
    /* ignore */
  }
  listeningField.value = ''
}

// ── Modal control ──
function openModal() {
  if (!armenianText.value) return
  replyInput.value = ''
  replyOutput.value = ''
  replyStatus.value = ''
  showModal.value = true
}
function closeModal() {
  stopListen()
  showModal.value = false
}
watch(showModal, (open) => {
  if (!open) stopListen()
})

onBeforeUnmount(() => {
  clearTimeout(askTimer)
  clearTimeout(replyTimer)
  stopListen()
})
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Translator</p>
    <h1>🔁 Conversation Translator</h1>
    <p class="lead">
      Ask something in English or Persian, get the Armenian, then tap <strong>Show to speaker</strong> for a big,
      easy-to-read version — and let them reply right there. Type or speak, read or listen, in real time.
    </p>

    <div class="lang-bar">
      <label>From</label>
      <select v-model="askFrom" aria-label="Source language">
        <option value="auto">Auto-detect</option>
        <option value="en">🇬🇧 English</option>
        <option value="fa">🇮🇷 Persian</option>
      </select>
      <span class="arrow">→</span>
      <span class="to">🇦🇲 Armenian</span>
    </div>

    <div class="ask-card">
      <div class="pane-head">
        <span>What do you want to say?</span>
        <button
          v-if="sttSupported"
          class="mic-btn"
          :class="{ live: listeningField === 'ask' }"
          type="button"
          @click="toggleListen('ask', askFrom === 'fa' ? 'fa-IR' : 'en-US', (t) => (askInput = t))"
        >{{ listeningField === 'ask' ? '⏹ Stop' : '🎙 Speak' }}</button>
      </div>
      <textarea v-model="askInput" :dir="askIsRtl() ? 'rtl' : 'ltr'" placeholder="Type or speak in English / Persian…" rows="3"></textarea>

      <div class="ask-out" v-if="armenianText || askStatus">
        <span class="ask-out-label">🇦🇲 Armenian</span>
        <span v-if="askStatus === 'translating'" class="hint">translating…</span>
        <span v-else-if="askStatus === 'error'" class="hint err">service unavailable</span>
        <p v-else lang="hy" class="ask-out-text">{{ armenianText }}</p>
      </div>

      <button class="show-btn" type="button" :disabled="!armenianText" @click="openModal">
        📱 Show to speaker
      </button>
    </div>

    <div class="disclaimer">
      ⚠️ Uses free public translation services for a client-side demo — quality is machine-level and it may rate-limit
      or be briefly unavailable. For anything important, confirm with a person.
    </div>
  </article>

  <!-- Big "show to speaker" + reply modal -->
  <Teleport to="body">
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <button class="modal-close" type="button" @click="closeModal" aria-label="Close">✕</button>

        <div class="big-armenian" lang="hy">{{ armenianText }}</div>

        <hr class="modal-hr" />

        <div class="reply-head">
          <p class="modal-label" lang="hy">Ձեր պատասխանը</p>
          <label class="reply-to">
            <select v-model="replyTo" aria-label="Reply language">
              <option value="en">Անգլերեն</option>
              <option value="fa">Պարսկերեն</option>
            </select>
          </label>
        </div>

        <div class="reply-controls">
          <button
            v-if="sttSupported"
            class="mic-btn"
            :class="{ live: listeningField === 'reply' }"
            type="button"
            lang="hy"
            @click="toggleListen('reply', 'hy-AM', (t) => (replyInput = t))"
          >{{ listeningField === 'reply' ? '⏹ Կանգնեցնել' : '🎙 Խոսել' }}</button>
        </div>
        <textarea v-model="replyInput" lang="hy" placeholder="Գրեք կամ խոսեք հայերեն…" rows="2"></textarea>

        <div class="reply-result">
          <span class="ask-out-label" lang="hy">Թարգմանություն</span>
          <span v-if="replyStatus === 'translating'" class="hint" lang="hy">թարգմանվում է…</span>
          <span v-else-if="replyStatus === 'error'" class="hint err" lang="hy">անհասանելի է</span>
          <template v-else-if="replyOutput">
            <p class="big-reply" :dir="replyTo === 'fa' ? 'rtl' : 'ltr'">{{ replyOutput }}</p>
          </template>
          <p v-else class="hint" lang="hy">Ձեր պատասխանի թարգմանությունը կհայտնվի այստեղ։</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.lang-bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin: 18px 0 14px; }
.lang-bar label { color: var(--muted); font-size: 0.9rem; }
.lang-bar select { background: var(--surface-2); border: 1px solid var(--border); color: var(--text); border-radius: 8px; padding: 8px 10px; font-size: 0.95rem; }
.lang-bar .arrow { color: var(--muted); }
.lang-bar .to { font-weight: 600; }

.ask-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px; }
.pane-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; font-size: 0.9rem; color: var(--muted); }
textarea { width: 100%; background: var(--bg); border: 1px solid var(--border); border-radius: 10px; color: var(--text); padding: 12px; font-size: 1.05rem; line-height: 1.5; resize: vertical; font-family: inherit; }
textarea:focus { outline: none; border-color: var(--accent); }

.ask-out { margin-top: 12px; padding: 12px; background: var(--bg); border: 1px solid var(--border); border-radius: 10px; }
.ask-out-label { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--muted); }
.ask-out-text { margin: 6px 0 0; font-size: 1.3rem; }

.show-btn { width: 100%; margin-top: 14px; padding: 14px; font-size: 1.05rem; font-weight: 700; color: var(--bg); background: var(--accent); border: none; border-radius: 12px; cursor: pointer; }
.show-btn:hover:not([disabled]) { filter: brightness(1.05); }
.show-btn[disabled] { opacity: 0.4; cursor: not-allowed; }

.mic-btn, .speak { background: var(--surface-2); border: 1px solid var(--border); color: var(--text); border-radius: 8px; padding: 6px 12px; font-size: 0.85rem; cursor: pointer; }
.mic-btn:hover, .speak:hover { border-color: var(--accent); }
.mic-btn.live { background: #5a1f1f; border-color: #b54b4b; color: #ffd9d9; }
.hint { font-size: 0.82rem; }
.hint.err { color: var(--accent); }

/* Modal */
.modal-overlay { position: fixed; inset: 0; background: rgba(5, 8, 12, 0.78); backdrop-filter: blur(3px); display: flex; align-items: center; justify-content: center; padding: 16px; z-index: 100; }
.modal { position: relative; width: 100%; max-width: 600px; max-height: 92vh; overflow-y: auto; background: var(--surface); border: 1px solid var(--border); border-radius: 18px; padding: 26px 22px; box-shadow: 0 20px 60px rgba(0,0,0,.5); }
.modal-close { position: absolute; top: 12px; right: 12px; width: 36px; height: 36px; border-radius: 10px; background: var(--surface-2); border: 1px solid var(--border); color: var(--text); font-size: 1rem; cursor: pointer; }
.modal-label { margin: 0 0 10px; color: var(--muted); font-size: 0.9rem; }
.big-armenian { font-size: 2.2rem; line-height: 1.35; font-weight: 600; text-align: center; padding: 18px 10px; background: var(--bg); border: 1px solid var(--border); border-radius: 14px; margin-bottom: 12px; word-break: break-word; }
.modal-hr { border: none; border-top: 1px solid var(--border); margin: 22px 0; }
.reply-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.reply-to { color: var(--muted); font-size: 0.85rem; }
.reply-to select { background: var(--surface-2); border: 1px solid var(--border); color: var(--text); border-radius: 8px; padding: 5px 8px; margin-left: 4px; }
.reply-controls { margin: 8px 0; }
.reply-result { margin-top: 12px; padding: 14px; background: var(--bg); border: 1px solid var(--border); border-radius: 12px; }
.big-reply { margin: 6px 0 10px; font-size: 1.5rem; line-height: 1.4; word-break: break-word; }

@media (max-width: 600px) {
  .big-armenian { font-size: 1.9rem; }
  .big-reply { font-size: 1.3rem; }
}
</style>
