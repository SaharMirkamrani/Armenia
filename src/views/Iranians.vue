<script setup>
import { RouterLink } from 'vue-router'

const places = [
  {
    name: 'Blue Mosque (Masjed-e Kabud / Գոյ մզկիթ)',
    what: "Yerevan's only working mosque — an 18th-century Persian mosque now run by Iran as a cultural centre: the Hafez Persian library, free Persian-language classes, Dar al-Quran, and public Nowruz celebrations. The cultural attaché's office is here.",
    area: '12 Mashtots Ave, Kentron',
    q: 'Blue Mosque Yerevan Mashtots',
  },
  {
    name: 'Embassy of Iran',
    what: 'Consular services for Iranian citizens — passports, document legalisation, and civil-registry matters.',
    area: 'Budaghyan St, Arabkir',
    q: 'Embassy of Iran Yerevan',
  },
  {
    name: 'Historic Persian Consulate building',
    what: 'A heritage Persian consular building in the centre — worth knowing as a landmark of the long Iran–Armenia connection.',
    area: 'Hanrapetutyun St, Kentron',
    q: 'Iranian Consulate Hanrapetutyun Yerevan',
  },
]

const food = [
  { name: 'Shirvan', what: 'Persian halal restaurant founded by Persian-Armenians — beef, chicken & lamb dishes; central and popular with Iranian visitors.', q: 'Shirvan Persian Restaurant Yerevan' },
  { name: 'Darchin', what: 'Authentic Persian cuisine, well-regarded within the Iranian community.', q: 'Darchin Iranian Restaurant Yerevan' },
]

const community = [
  'The fastest way to plug in is the big Iranian Telegram groups — they have live recommendations for shops, services, housing and meetups. Example: "Armenia – free & complete guide" for Iranians (t.me/armeniaforiranians), ~2,800 members.',
  'Nowruz (Persian New Year) is celebrated publicly each spring — at the Blue Mosque and around the city.',
  'Many Persian-speaking lawyers, real-estate agents and business consultants specifically cater to Iranians — handy for paperwork and setting up.',
  'Persian is widely understood in tourist and business areas, and there are many Iranian-owned businesses, especially around the centre.',
]

const groceries = [
  'Halal meat and Persian staples (rice, herbs, spices, dried fruit & nuts) are available — ask in the community groups for the nearest Iranian grocer, as the best shops change.',
  'Big markets like GUM Market and Surmalu are great for fresh produce, nuts, herbs and spices at good prices.',
]

const sources = [
  { t: 'Wikipedia — Blue Mosque, Yerevan', u: 'https://en.wikipedia.org/wiki/Blue_Mosque,_Yerevan' },
  { t: 'Armenia Discovery — Yerevan Blue Mosque: a piece of Persia', u: 'https://armeniadiscovery.com/en/articles/yerevan-blue-mosque' },
  { t: 'Wikipedia — Iranian Consulate, Yerevan', u: 'https://en.wikipedia.org/wiki/Iranian_Consulate,_Yerevan' },
  { t: 'Visit Yerevan — Blue Mosque', u: 'https://www.visityerevan.am/places/details/251/en/' },
  { t: 'Tripadvisor — Persian food in Yerevan', u: 'https://www.tripadvisor.com/Restaurants-g293932-c10765-Yerevan.html' },
  { t: 'Electronic Armenia — Shirvan Iranian (Persian) restaurant', u: 'https://www.pages.am/en/pages/shirvan-iranian-persian-restaurant-in-yerevan/' },
]

const mapUrl = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Iranian Community</p>
    <h1>🇮🇷 The Iranian Community in Yerevan</h1>
    <p class="lead">
      Armenia and Iran share a warm, centuries-old relationship, and Yerevan has a large, well-established Iranian
      presence — students, business owners, and a growing wave of new arrivals. Here's how to find your people,
      your food, and Persian-speaking help.
    </p>

    <h2>Faith, culture &amp; official help</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Place</th><th>What it is</th><th>Where</th></tr></thead>
        <tbody>
          <tr v-for="p in places" :key="p.name">
            <td><strong>{{ p.name }}</strong></td>
            <td data-label="What it is">{{ p.what }}</td>
            <td data-label="Where"><a :href="mapUrl(p.q)" target="_blank" rel="noopener">📍 {{ p.area }}</a></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Persian food &amp; halal</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Spot</th><th>What</th><th>Find it</th></tr></thead>
        <tbody>
          <tr v-for="f in food" :key="f.name">
            <td><strong>{{ f.name }}</strong></td>
            <td data-label="What">{{ f.what }}</td>
            <td data-label="Find it"><a :href="mapUrl(f.q)" target="_blank" rel="noopener">📍 Map</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="callout">
      <h3>🛒 Groceries &amp; halal</h3>
      <ul style="margin:0">
        <li v-for="(g, i) in groceries" :key="i">{{ g }}</li>
      </ul>
    </div>

    <h2>Community &amp; staying connected</h2>
    <ul>
      <li v-for="(c, i) in community" :key="i">{{ c }}</li>
    </ul>

    <div class="callout docs">
      <h3>🔗 Related guides</h3>
      <p style="margin:0">
        Two things matter most for Iranians settling in:
        <RouterLink to="/residency">Residency &amp; Visas</RouterLink> (visa-free entry, then a residence permit) and
        <RouterLink to="/banking">Banking</RouterLink> (the main friction point under sanctions — read it before you arrive).
      </p>
    </div>

    <div class="disclaimer">
      ⚠️ Specific shops, restaurants and even consular details change — the live Iranian Telegram groups are the best
      up-to-date source. Confirm anything important (especially consular and banking matters) directly.
    </div>

    <h2>Sources</h2>
    <ul class="sources">
      <li v-for="s in sources" :key="s.u"><a :href="s.u" target="_blank" rel="noopener">{{ s.t }}</a></li>
    </ul>
  </article>
</template>
