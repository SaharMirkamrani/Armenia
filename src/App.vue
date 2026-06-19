<script setup>
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import CurrencyConverter from './components/CurrencyConverter.vue'

// The 5 most-used / most-important items stay on the desktop bar…
const primaryLinks = [
  { to: '/translate', label: 'Translate' },
  { to: '/transport', label: 'Transit' },
  { to: '/apps', label: 'Apps' },
  { to: '/residency', label: 'Residency' },
  { to: '/banking', label: 'Banking' },
]
// …the rest live under "More ▾" on desktop (and flow into the mobile menu).
const moreLinks = [
  { to: '/', label: 'Home' },
  { to: '/car-rental', label: 'Cars' },
  { to: '/leisure', label: 'Leisure' },
  { to: '/events', label: 'Events' },
  { to: '/healthcare', label: 'Health' },
  { to: '/iranians', label: 'Iran' },
  { to: '/language', label: 'Language' },
  { to: '/crypto-law', label: 'Crypto' },
]

const menuOpen = ref(false)
const moreOpen = ref(false)
const route = useRoute()
// Close menus whenever the route changes.
watch(() => route.fullPath, () => {
  menuOpen.value = false
  moreOpen.value = false
})
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
        <RouterLink v-for="l in primaryLinks" :key="l.to" :to="l.to">{{ l.label }}</RouterLink>
        <div class="more" :class="{ open: moreOpen }">
          <button
            type="button"
            class="more-toggle"
            :aria-expanded="moreOpen"
            @click="moreOpen = !moreOpen"
          >More ▾</button>
          <div class="more-panel">
            <RouterLink v-for="l in moreLinks" :key="l.to" :to="l.to">{{ l.label }}</RouterLink>
          </div>
        </div>
      </nav>
    </div>
    <div v-if="moreOpen" class="more-backdrop" @click="moreOpen = false"></div>
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
