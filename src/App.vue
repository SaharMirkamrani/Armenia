<script setup>
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import CurrencyConverter from './components/CurrencyConverter.vue'

const links = [
  { to: '/', label: 'Home' },
  { to: '/car-rental', label: 'Cars' },
  { to: '/apps', label: 'Apps' },
  { to: '/leisure', label: 'Leisure' },
  { to: '/events', label: 'Events' },
  { to: '/residency', label: 'Residency' },
  { to: '/banking', label: 'Banking' },
  { to: '/language', label: 'Language' },
  { to: '/translate', label: 'Translate' },
  { to: '/crypto-law', label: 'Crypto' },
]

const menuOpen = ref(false)
const route = useRoute()
// Close the mobile menu whenever the route changes.
watch(() => route.fullPath, () => { menuOpen.value = false })
</script>

<template>
  <header class="site-header">
    <div class="wrap header-bar">
      <RouterLink to="/" class="brand"><span class="flag">🇦🇲</span> Migration Guide</RouterLink>
      <button
        class="nav-toggle"
        :class="{ open: menuOpen }"
        :aria-expanded="menuOpen"
        aria-controls="primary-nav"
        aria-label="Toggle navigation menu"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
      <nav id="primary-nav" class="nav" :class="{ open: menuOpen }">
        <RouterLink v-for="l in links" :key="l.to" :to="l.to">{{ l.label }}</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer class="site-footer">
    <div class="wrap">
      <CurrencyConverter />
      <p style="margin: 16px 0 0">Built as a personal migration handbook · 🇦🇲 Armenia</p>
    </div>
  </footer>
</template>
