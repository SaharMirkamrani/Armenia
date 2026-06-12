<script setup>
import { RouterLink } from 'vue-router'

const categories = [
  {
    icon: '🚕',
    title: 'Taxi & ride-hailing',
    apps: [
      { name: 'Yandex Go', url: 'https://go.yandex/en_am/', what: 'The dominant ride-hailing "super app" — cheap taxis (a short Yerevan ride is ~1,000–1,500 AMD), plus delivery. Biggest driver network, quick pickups.' },
      { name: 'GG', url: 'https://ggtaxi.com/', what: 'The local Armenian competitor. Reliable, sometimes better availability/price, and does long-distance too (Sevan, Dilijan, even Tbilisi).' },
    ],
  },
  {
    icon: '🚌',
    title: 'Public transport',
    apps: [
      { name: 'Telcell Wallet', url: 'https://telcell.am/en', what: 'Buy QR tickets and 1/7/30-day passes for buses, trolleybuses and metro — scan your phone at the onboard validator. A single ride is 150 AMD.' },
      { name: 'Yerevan public transport / A2B', url: null, what: 'Routes, schedules and prices for buses, trolleybuses and the metro. Free, English-friendly, no ads.' },
    ],
  },
  {
    icon: '🍔',
    title: 'Food & groceries',
    apps: [
      { name: 'Glovo', url: 'https://glovoapp.com/', what: 'Fast on-demand delivery — restaurants, pharmacies, supermarkets, flowers, plus an "Anything" courier feature.' },
      { name: 'Yandex Eats / menu.am', url: 'https://www.menu.am/', what: 'Main restaurant-delivery app; Yandex absorbed the popular local menu.am.' },
    ],
  },
  {
    icon: '💳',
    title: 'Money & banking',
    apps: [
      { name: 'Idram', url: 'https://idram.am/', what: "Armenia's leading e-wallet — pay in shops, online, and bills. You'll see it accepted everywhere; near-essential." },
      { name: 'Telcell', url: 'https://telcell.am/en', what: 'Pay utilities, top up mobile, send money, parking and transport — all bills in one place.' },
      { name: 'Rate.am', url: 'https://rate.am/', what: 'Compare live exchange rates across Armenian banks (and ATM/branch info) so you change money at the best rate.' },
      { name: "Your bank's app", url: null, what: 'Whichever bank you open with — Ameriabank, Inecobank (InecoMobile), ACBA, Evocabank, IDBank — has a solid mobile app. Pick one and install it.' },
    ],
  },
  {
    icon: '🎫',
    title: 'Bureaucracy & queues',
    apps: [
      { name: 'EarlyOne', url: 'https://earlyone.com/', what: 'Book your place in line / an appointment at banks, telecom, healthcare and government offices — skip the physical queue. Very handy while doing settling-in paperwork.' },
    ],
  },
  {
    icon: '🗺️',
    title: 'Navigation',
    apps: [
      { name: '2GIS', url: 'https://2gis.am/', what: 'Extremely detailed offline city map of Yerevan — businesses, opening hours, entrances. A regional favourite alongside Google/Yandex Maps.' },
      { name: 'Google Maps / Yandex Maps', url: null, what: 'Both work well in Yerevan; Yandex tends to have better local transit and traffic.' },
    ],
  },
  {
    icon: '💬',
    title: 'Messaging & connectivity',
    apps: [
      { name: 'Telegram', url: null, what: 'The default for chats, local channels, community groups and many businesses.' },
      { name: 'WhatsApp / Viber', url: null, what: 'Also widely used for personal and business contact across the region.' },
      { name: 'Telecom app (Ucom / Team / Viva-MTS)', url: null, what: "Self-care app for whichever SIM/eSIM you get — manage data, top up, see your balance." },
    ],
  },
]
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Essential Apps</p>
    <h1>📱 Essential Apps for Armenia</h1>
    <p class="lead">
      The short list of apps that actually make daily life work in Yerevan — taxis, transport, food, money,
      and the bureaucracy-busting one (EarlyOne) worth having before you arrive.
    </p>

    <div class="callout docs">
      <h3>⭐ Is EarlyOne worth it? Yes.</h3>
      <p style="margin:0">
        EarlyOne is a queue &amp; appointment booking app: pick a branch, service and time, and reserve your spot
        remotely instead of standing in line, with alerts as your turn nears. It's integrated with banks, telecom,
        healthcare and government offices — exactly what you'll deal with when settling in. Install it; just note
        it only helps where that specific office uses EarlyOne, so it's a "keep it ready" app rather than a daily one.
      </p>
    </div>

    <div v-for="cat in categories" :key="cat.title">
      <h2>{{ cat.icon }} {{ cat.title }}</h2>
      <div class="table-wrap">
        <table>
          <tbody>
            <tr v-for="app in cat.apps" :key="app.name">
              <td style="white-space:nowrap; vertical-align:top">
                <a v-if="app.url" :href="app.url" target="_blank" rel="noopener"><strong>{{ app.name }}</strong></a>
                <strong v-else>{{ app.name }}</strong>
              </td>
              <td>{{ app.what }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="disclaimer">
      ⚠️ App availability, names and which office supports what can change. Most of these are free — download from
      the App Store / Google Play and confirm the publisher before installing.
    </div>
  </article>
</template>
