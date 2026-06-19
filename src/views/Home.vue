<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const topics = [
  {
    icon: '🔁',
    title: 'Live Translator',
    desc: 'Translate English or Persian to Armenian in real time — type or speak, read or listen.',
    to: '/translate',
    ready: true,
  },
  {
    icon: '🚗',
    title: 'Car Rental',
    desc: 'Reputable rental companies, rough prices by car class, and the documents you need to rent.',
    to: '/car-rental',
    ready: true,
  },
  {
    icon: '📱',
    title: 'Essential Apps',
    desc: 'The must-have apps for daily life — taxi, transport, food, banking, and EarlyOne.',
    to: '/apps',
    ready: true,
  },
  {
    icon: '🏊',
    title: 'Leisure & Fitness',
    desc: 'Gyms, swimming pools, cinemas, and electric bike/scooter rentals — with rough prices.',
    to: '/leisure',
    ready: true,
  },
  {
    icon: '🎶',
    title: 'Events & Festivals',
    desc: 'Upcoming concerts and festivals — including the System of a Down status.',
    to: '/events',
    ready: true,
  },
  {
    icon: '🗣️',
    title: 'Language',
    desc: 'Armenian for absolute beginners — alphabet, survival phrases, numbers, and resources.',
    to: '/language',
    ready: true,
  },
  {
    icon: '📄',
    title: 'Residency & Visas',
    desc: 'Every way to get residency — the three statuses, grounds, process, fees, and path to citizenship.',
    to: '/residency',
    ready: true,
  },
  {
    icon: '🏦',
    title: 'Banking',
    desc: 'Opening an account as a newcomer, the best banks, and the hurdles Iranians face.',
    to: '/banking',
    ready: true,
  },
  {
    icon: '₿',
    title: 'Crypto Law',
    desc: 'Is buying & selling crypto legal, is it taxed, and what are the restrictions?',
    to: '/crypto-law',
    ready: true,
  },
]

const readyCount = computed(() => topics.filter((t) => t.ready).length)
const soonCount = computed(() => topics.filter((t) => !t.ready).length)
</script>

<template>
  <section class="hero">
    <div class="wrap">
      <span class="hero-chip">🇦🇲 Relocating to Armenia</span>
      <h1>Everything we need for <span class="accent">our move to Armenia</span></h1>
      <p>A growing, research-backed handbook for the practical stuff — getting around, paperwork, money, and more. Every topic is researched, cited, and updated over time.</p>
      <div class="hero-stats">
        <span><strong>{{ readyCount }}</strong> guides ready</span>
        <span class="dot">•</span>
        <span>researched &amp; cited</span>
        <span class="dot">•</span>
        <span><strong>{{ soonCount }}</strong> coming soon</span>
      </div>
    </div>
  </section>

  <section class="wrap">
    <div class="section-head">
      <h2 class="section-title">Topics</h2>
      <span class="count">{{ readyCount }} ready · {{ soonCount }} coming</span>
    </div>
    <div class="cards">
      <template v-for="topic in topics" :key="topic.title">
        <RouterLink v-if="topic.ready" :to="topic.to" class="card">
          <div class="card-icon">{{ topic.icon }}</div>
          <h3>{{ topic.title }}</h3>
          <p>{{ topic.desc }}</p>
          <span class="card-cta">Explore →</span>
        </RouterLink>
        <div v-else class="card soon">
          <div class="card-icon">{{ topic.icon }}</div>
          <h3>{{ topic.title }}</h3>
          <p>{{ topic.desc }}</p>
          <span class="badge soon-badge">Coming soon</span>
        </div>
      </template>
    </div>

    <div class="disclaimer">
      ⚠️ This is a personal reference compiled from public sources. Prices and document requirements change — always confirm directly with the company or authority before relying on anything here.
    </div>
  </section>
</template>

<style scoped>
.hero-chip {
  display: inline-block;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 5px 14px;
  font-size: 0.82rem;
  color: var(--muted);
  margin-bottom: 18px;
}
.hero h1 .accent {
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero-stats {
  margin-top: 22px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: var(--muted);
  font-size: 0.9rem;
}
.hero-stats strong { color: var(--text); }
.hero-stats .dot { opacity: 0.4; }
.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  margin: 36px 0 16px;
}
.section-head .section-title { margin: 0; }
.section-head .count { color: var(--muted); font-size: 0.85rem; }
</style>
