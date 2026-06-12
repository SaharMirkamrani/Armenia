<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <div class="wrap">
      <RouterLink to="/" class="brand"><span class="flag">🇦🇲</span> Migration Guide</RouterLink>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/car-rental">Car Rental</RouterLink>
        <RouterLink to="/crypto-law">Crypto Law</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer class="site-footer">
    <div class="wrap">Built as a personal migration handbook · 🇦🇲 Armenia</div>
  </footer>
</template>
