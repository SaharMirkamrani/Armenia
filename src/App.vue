<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CurrencyConverter from './components/CurrencyConverter.vue'
</script>

<template>
  <header class="site-header">
    <div class="wrap">
      <RouterLink to="/" class="brand"><span class="flag">🇦🇲</span> Migration Guide</RouterLink>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/car-rental">Car Rental</RouterLink>
        <RouterLink to="/crypto-law">Crypto Law</RouterLink>
        <RouterLink to="/apps">Apps</RouterLink>
        <RouterLink to="/leisure">Leisure</RouterLink>
        <RouterLink to="/events">Events</RouterLink>
        <RouterLink to="/marriage-loan">Marriage Loan</RouterLink>
        <RouterLink to="/housing">Housing</RouterLink>
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
