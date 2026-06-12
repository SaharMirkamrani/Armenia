<script setup>
import { RouterLink } from 'vue-router'
import Speak from '../components/Speak.vue'

const vowels = [
  { l: 'ա', say: 'a', like: '"a" in father' },
  { l: 'ե', say: 'e / ye', like: '"e" in elephant — "ye" at the start of a word' },
  { l: 'է', say: 'e', like: '"e" in met' },
  { l: 'ը', say: 'ə', like: 'short "uh" (the schwa)' },
  { l: 'ի', say: 'i', like: '"ee" in machine' },
  { l: 'ո', say: 'o / vo', like: '"o" in hot — "vo" at the start of a word' },
  { l: 'օ', say: 'o', like: '"o" in more' },
  { l: 'ու', say: 'u', like: '"oo" in boot (a two-letter pair)' },
]

const pronTips = [
  'Armenian is phonetic: each letter is always the same sound, so once you know the alphabet you can read any word.',
  'Stress almost always falls on the last syllable.',
  'ե and ո sound like "ye" and "vo" at the start of a word, but "e" and "o" in the middle/end.',
  'In everyday speech people often just say "merci" (from French) for "thank you" — the real word is a mouthful.',
]

const phrases = [
  { en: 'Hello (informal)', hy: 'Բարև', say: 'barev' },
  { en: 'Hello (polite)', hy: 'Բարև ձեզ', say: 'barev dzez' },
  { en: 'Good morning', hy: 'Բարի լույս', say: 'bari luys' },
  { en: 'Good evening', hy: 'Բարի երեկո', say: 'bari yereko' },
  { en: 'Good night', hy: 'Բարի գիշեր', say: 'bari gisher' },
  { en: 'Goodbye', hy: 'Ցտեսություն', say: 'tstesutyun' },
  { en: 'Thank you', hy: 'Շնորհակալություն', say: 'shnorhakalutyun (or "merci")' },
  { en: 'Please / you’re welcome', hy: 'Խնդրում եմ', say: 'khndrum em' },
  { en: 'Yes', hy: 'Այո', say: 'ayo' },
  { en: 'No', hy: 'Ոչ', say: 'voch' },
  { en: 'Sorry / excuse me', hy: 'Կներեք', say: 'knerek' },
  { en: 'How are you?', hy: 'Ինչպե՞ս ես', say: 'inchpes es' },
  { en: 'I’m fine', hy: 'Լավ եմ', say: 'lav em' },
  { en: 'How much is it?', hy: 'Ի՞նչ արժե', say: 'inch arzhe' },
  { en: 'Where is…?', hy: 'Որտե՞ղ է', say: 'vortegh e' },
]

const numbers = [
  { n: '1 — one', hy: 'Մեկ', say: 'mek' },
  { n: '2 — two', hy: 'Երկու', say: 'yerku' },
  { n: '3 — three', hy: 'Երեք', say: 'yerek' },
  { n: '4 — four', hy: 'Չորս', say: 'chors' },
  { n: '5 — five', hy: 'Հինգ', say: 'hing' },
  { n: '6 — six', hy: 'Վեց', say: 'vets' },
  { n: '7 — seven', hy: 'Յոթ', say: 'yot' },
  { n: '8 — eight', hy: 'Ութ', say: 'ut' },
  { n: '9 — nine', hy: 'Ինը', say: 'iny' },
  { n: '10 — ten', hy: 'Տասը', say: 'tas' },
]

const days = [
  { en: 'Monday', hy: 'Երկուշաբթի', say: 'yerkushabti' },
  { en: 'Tuesday', hy: 'Երեքշաբթի', say: 'yerekshabti' },
  { en: 'Wednesday', hy: 'Չորեքշաբթի', say: 'chorekshabti' },
  { en: 'Thursday', hy: 'Հինգշաբթի', say: 'hingshabti' },
  { en: 'Friday', hy: 'Ուրբաթ', say: 'urbat' },
  { en: 'Saturday', hy: 'Շաբաթ', say: 'shabat' },
  { en: 'Sunday', hy: 'Կիրակի', say: 'kiraki' },
]

const words = [
  { en: 'Water', hy: 'Ջուր', say: 'jur' },
  { en: 'Food', hy: 'Սնունդ', say: 'snund' },
  { en: 'House', hy: 'Տուն', say: 'tun' },
  { en: 'Car', hy: 'Մեքենա', say: 'mekena' },
  { en: 'Book', hy: 'Գիրք', say: 'girk' },
  { en: 'Friend', hy: 'Ընկեր', say: 'ənker' },
  { en: 'Family', hy: 'Ընտանիք', say: 'əntanik' },
  { en: 'Man', hy: 'Տղամարդ', say: 'tghamard' },
  { en: 'Woman', hy: 'Կին', say: 'kin' },
  { en: 'Child', hy: 'Երեխա', say: 'yerekha' },
]

const resources = [
  { name: 'AYOlingo', url: 'https://apps.apple.com/us/app/ayolingo-learn-armenian/id1367151083', note: 'Beginner-friendly app focused on Eastern Armenian — read, write, listen, speak.' },
  { name: 'Tun (Tunapp)', url: 'https://tunapp.com/', note: 'Online school + app; lessons and games for Eastern or Western Armenian.' },
  { name: 'Ling App', url: 'https://ling-app.com/learn-language/armenian/', note: 'Vocabulary, writing and speaking lessons with end-of-lesson quizzes.' },
  { name: 'Omniglot — Armenian phrases', url: 'https://www.omniglot.com/language/phrases/armenian.php', note: 'Free reference list of useful phrases with audio.' },
  { name: 'Wikibooks — Armenian', url: 'https://en.wikibooks.org/wiki/Armenian', note: 'Free, structured online textbook.' },
]

const sources = [
  { t: 'Preply — How to learn Armenian (alphabet, grammar, vocab)', u: 'https://preply.com/en/blog/how-to-learn-armenian/' },
  { t: 'Preply — Armenian words for beginners', u: 'https://preply.com/en/blog/armenian-words/' },
  { t: 'Preply — Numbers in Armenian', u: 'https://preply.com/en/blog/numbers-in-armenian/' },
  { t: 'Omniglot — Useful Armenian phrases', u: 'https://www.omniglot.com/language/phrases/armenian.php' },
  { t: 'Absolute Armenia — Eastern vs Western Armenian', u: 'https://absolutearmenia.com/differences-between-eastern-and-western-armenian/' },
  { t: 'Langoly — Best apps to learn Armenian', u: 'https://www.langoly.com/best-armenian-apps/' },
]
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Language</p>
    <h1>🗣️ Armenian for Absolute Beginners</h1>
    <p class="lead">
      Your first steps in Armenian — what dialect to learn, how the alphabet works, survival phrases, numbers,
      and where to keep going. Each word shows simple English-style spelling (transliteration), and you can tap
      🔊 to hear it spoken.
    </p>

    <div class="callout docs">
      <h3>👉 First thing: learn Eastern Armenian</h3>
      <p style="margin:0">
        There are two standard forms. <strong>Eastern Armenian</strong> is what's spoken in Armenia — that's the one
        you want. <strong>Western Armenian</strong> is mainly used by the diaspora (descendants from the Ottoman
        era). They share the alphabet but differ in some pronunciation (e.g. certain letters voiced p/b, k/g),
        a few words, and verb endings. Everything below is Eastern Armenian.
      </p>
    </div>

    <h2>The alphabet</h2>
    <p>
      Armenian has its own unique 39-letter alphabet (31 consonants, 7 vowels + the pair "ու"), created by Mesrop
      Mashtots around 405 CE, and written left to right. The big win for beginners: it's almost perfectly
      <strong>phonetic</strong> — one letter, one sound. Start with the vowels:
    </p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Letter</th><th>Sound</th><th>Like</th></tr></thead>
        <tbody>
          <tr v-for="v in vowels" :key="v.l">
            <td><strong style="font-size:1.3rem">{{ v.l }}</strong> <Speak :text="v.l" :fallback="v.say" /></td>
            <td data-label="Sound">{{ v.say }}</td>
            <td data-label="Like">{{ v.like }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout">
      <h3>🔑 Pronunciation tips</h3>
      <ul style="margin:0">
        <li v-for="(t, i) in pronTips" :key="i">{{ t }}</li>
      </ul>
    </div>

    <h2>Survival phrases</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Meaning</th><th>Armenian</th><th>Say it</th></tr></thead>
        <tbody>
          <tr v-for="p in phrases" :key="p.en">
            <td><strong>{{ p.en }}</strong></td>
            <td data-label="Armenian" lang="hy" style="font-size:1.1rem">{{ p.hy }} <Speak :text="p.hy" :fallback="p.say" /></td>
            <td data-label="Say it">{{ p.say }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Numbers 1–10</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Number</th><th>Armenian</th><th>Say it</th></tr></thead>
        <tbody>
          <tr v-for="n in numbers" :key="n.n">
            <td><strong>{{ n.n }}</strong></td>
            <td data-label="Armenian" lang="hy" style="font-size:1.1rem">{{ n.hy }} <Speak :text="n.hy" :fallback="n.say" /></td>
            <td data-label="Say it">{{ n.say }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Days of the week</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Day</th><th>Armenian</th><th>Say it</th></tr></thead>
        <tbody>
          <tr v-for="d in days" :key="d.en">
            <td><strong>{{ d.en }}</strong></td>
            <td data-label="Armenian" lang="hy" style="font-size:1.1rem">{{ d.hy }} <Speak :text="d.hy" :fallback="d.say" /></td>
            <td data-label="Say it">{{ d.say }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Everyday words</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Meaning</th><th>Armenian</th><th>Say it</th></tr></thead>
        <tbody>
          <tr v-for="w in words" :key="w.en">
            <td><strong>{{ w.en }}</strong></td>
            <td data-label="Armenian" lang="hy" style="font-size:1.1rem">{{ w.hy }} <Speak :text="w.hy" :fallback="w.say" /></td>
            <td data-label="Say it">{{ w.say }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Keep learning</h2>
    <div class="table-wrap">
      <table>
        <tbody>
          <tr v-for="r in resources" :key="r.name">
            <td style="white-space:nowrap"><a :href="r.url" target="_blank" rel="noopener"><strong>{{ r.name }}</strong></a></td>
            <td data-label="About">{{ r.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style="color: var(--muted); font-size: 0.9rem">
      Note: <strong>Duolingo does not currently offer Armenian</strong>, so use the apps above instead.
    </p>

    <div class="disclaimer">
      ⚠️ The 🔊 buttons use your device's built-in speech voices. If you have an Armenian voice installed you'll
      hear real Armenian; otherwise it reads the transliteration in your default voice, which is only a rough
      approximation. For accurate sounds, install an Armenian system voice (e.g. on macOS: System Settings →
      Accessibility → Spoken Content → Manage Voices) or listen along with one of the apps above.
    </div>

    <h2>Sources</h2>
    <ul class="sources">
      <li v-for="s in sources" :key="s.u"><a :href="s.u" target="_blank" rel="noopener">{{ s.t }}</a></li>
    </ul>
  </article>
</template>
