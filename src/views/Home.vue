<script setup>
import { RouterLink } from 'vue-router'

const topics = [
  {
    icon: '🚗',
    title: 'Car Rental',
    desc: 'Reputable rental companies, rough prices by car class, and the documents you need to rent.',
    to: '/car-rental',
    ready: true,
  },
  {
    icon: '₿',
    title: 'Crypto Law',
    desc: 'Is buying & selling crypto legal, is it taxed, and what are the restrictions?',
    to: '/crypto-law',
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
  { icon: '🏠', title: 'Housing', desc: 'Renting an apartment, typical prices, and lease paperwork.', ready: false },
  { icon: '📄', title: 'Residency & Visas', desc: 'Residence permits, registration, and required documents.', ready: false },
  { icon: '🏦', title: 'Banking', desc: 'Opening an account, cards, and transferring money.', ready: false },
]
</script>

<template>
  <section class="hero">
    <div class="wrap">
      <h1>Everything I need for my move to Armenia</h1>
      <p>A growing, research-backed handbook covering the practical stuff — getting around, paperwork, housing, and more. Each topic is researched and updated over time.</p>
    </div>
  </section>

  <section class="wrap">
    <h2 class="section-title">Topics</h2>
    <div class="cards">
      <template v-for="topic in topics" :key="topic.title">
        <RouterLink v-if="topic.ready" :to="topic.to" class="card">
          <div class="icon">{{ topic.icon }}</div>
          <h3>{{ topic.title }}</h3>
          <p>{{ topic.desc }}</p>
        </RouterLink>
        <div v-else class="card soon">
          <div class="icon">{{ topic.icon }}</div>
          <h3>{{ topic.title }} <span class="badge soon-badge">Soon</span></h3>
          <p>{{ topic.desc }}</p>
        </div>
      </template>
    </div>

    <div class="disclaimer">
      ⚠️ This is a personal reference compiled from public sources. Prices and document requirements change — always confirm directly with the company or authority before relying on anything here.
    </div>
  </section>
</template>
