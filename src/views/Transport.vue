<script setup>
import { RouterLink } from 'vue-router'

const pay = [
  'One fare = 150 AMD (~$0.40) per vehicle — same on the metro, buses and trolleybuses.',
  'Get a transport card (500 AMD, includes one ride) and top it up — buy at metro stations, kiosks and terminals.',
  'Or tap a contactless bank card (Visa/Mastercard) directly on the validator — no card to buy.',
  'Or pay via the Telcell mobile app.',
  'Validate every single ride. Paper QR tickets were discontinued in Aug 2025 — it\'s card or app now.',
  'Inspectors check with handheld readers; an unvalidated ride is a 3,000 AMD fine.',
  'A 180-minute integrated ticket (~300 AMD) covers transfers across metro + bus + trolleybus — worth it for any trip with a change. Day-to-year passes also exist.',
]

// Metro stations, north → south (Charbakh is a shuttle branch off Shengavit)
const stations = [
  { name: 'Barekamutyun', near: 'Northern transport hub; lively local area', q: 'Barekamutyun metro station Yerevan' },
  { name: 'Marshal Baghramyan', near: 'Near Parliament, embassies and the leafy Baghramyan Ave', q: 'Marshal Baghramyan metro station Yerevan' },
  { name: 'Yeritasardakan', near: 'Central — close to the Cascade, Opera and café district', q: 'Yeritasardakan metro station Yerevan' },
  { name: 'Republic Square (Hanrapetutyan Hraparak)', near: 'Dead centre — main square, museums, fountains', q: 'Republic Square metro station Yerevan' },
  { name: 'Zoravar Andranik', near: 'By St. Gregory the Illuminator Cathedral', q: 'Zoravar Andranik metro station Yerevan' },
  { name: 'Sasuntsi Davit', near: 'At the central railway station (trains to Gyumri & seasonal Tbilisi)', q: 'Sasuntsi Davit metro station Yerevan' },
  { name: 'Gortsaranayin', near: 'Southern, industrial part of the city', q: 'Gortsaranayin metro station Yerevan' },
  { name: 'Shengavit', near: 'South; junction for the Charbakh shuttle', q: 'Shengavit metro station Yerevan' },
  { name: 'Garegin Njdeh Square', near: 'Southern hub, near markets', q: 'Garegin Njdeh Square metro station Yerevan' },
  { name: 'Charbakh', near: 'Terminus of the single-track shuttle branch from Shengavit', q: 'Charbakh metro station Yerevan' },
]

const metroFacts = [
  'One line, 10 stations, ~13.4 km — fast and cheap, but it only covers a north–south spine, so most trips also need a bus.',
  'Runs ~07:00 to 00:00; trains every 4–10 minutes.',
  'Signage and announcements are in Armenian, English and Russian.',
  'Tap your transport/bank card or use the Telcell app at the turnstile (tokens are being phased out).',
]

const buses = [
  'Modern city buses now cover most of Yerevan, replacing the old marshrutka minibuses (an ongoing reform) — plus electric trolleybuses on some routes.',
  'Board, tap/validate your card or app (150 AMD), and watch your stop — announcements aren\'t always clear, so track it on a maps app.',
  'Buses run roughly 06:00–23:00; frequency varies by route.',
]

const intercity = [
  'Trains: from Sasuntsi Davit (central) railway station to Gyumri, and a seasonal overnight train to Tbilisi, Georgia.',
  'Intercity buses & shared vans leave from Kilikia central bus station and other depots for the regions and neighbouring countries.',
  'For longer hops or comfort, the GG taxi app also does intercity rides (Sevan, Dilijan, even Tbilisi).',
]

const sources = [
  { t: 'T-Armenia — Fares & passes (bus, trolleybus, metro)', u: 'https://t-armenia.com/en/fares' },
  { t: 'ARKA — Unified e-ticketing fully operational from Jan 1, 2025', u: 'https://arka.am/en/news/society/yerevan_s_unified_public_transport_ticketing_system_to_be_fully_operational_from_january_1_2025_vide/' },
  { t: 'ARKA — 4 ways to acquire transport passes', u: 'https://arka.am/en/news/society/yerevan-city-hall-outlines-4-ways-to-acquire-transport-passes/' },
  { t: 'Armenia Travel Tips — Yerevan metro guide', u: 'https://armeniatraveltips.com/yerevan-metro/' },
  { t: 'Wikipedia — Yerevan Metro', u: 'https://en.wikipedia.org/wiki/Yerevan_Metro' },
  { t: 'Yerevan Municipality — Transport department', u: 'https://www.yerevan.am/en/transport-department/' },
  { t: 'JAMnews — Fare evasion fine in Yerevan transport', u: 'https://jam-news.net/fare-evasion-fine-in-yerevan/' },
]

const mapUrl = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Getting Around</p>
    <h1>🚇 Getting Around Yerevan</h1>
    <p class="lead">
      Public transport is cheap and simple once you have a card — the metro, buses and trolleybuses all use one
      150 AMD fare. Here's how to pay, where the metro stations are, and how to go further afield.
    </p>

    <div class="callout docs">
      <h3>🎟️ How to pay (the 2025 system)</h3>
      <ul style="margin:0">
        <li v-for="(p, i) in pay" :key="i">{{ p }}</li>
      </ul>
    </div>

    <h2>🚇 The metro</h2>
    <ul>
      <li v-for="(m, i) in metroFacts" :key="i">{{ m }}</li>
    </ul>

    <h3>Stations (north → south)</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Station</th><th>Area / nearby</th><th>Map</th></tr></thead>
        <tbody>
          <tr v-for="s in stations" :key="s.name">
            <td><strong>{{ s.name }}</strong></td>
            <td data-label="Area / nearby">{{ s.near }}</td>
            <td data-label="Map"><a :href="mapUrl(s.q)" target="_blank" rel="noopener">📍 Map</a></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>🚌 Buses &amp; trolleybuses</h2>
    <ul>
      <li v-for="(b, i) in buses" :key="i">{{ b }}</li>
    </ul>

    <div class="callout">
      <h3>📱 Apps that make it easy</h3>
      <p style="margin:0">
        Plan routes with <strong>Yandex Maps</strong> or Google Maps (best live transit), pay with the
        <strong>Telcell</strong> app, and for door-to-door just grab a cheap taxi with <strong>Yandex Go</strong> or
        <strong>GG</strong>. See the <RouterLink to="/apps">Essential Apps</RouterLink> page for all of them.
      </p>
    </div>

    <h2>🚆 Going further (intercity &amp; trains)</h2>
    <ul>
      <li v-for="(c, i) in intercity" :key="i">{{ c }}</li>
    </ul>

    <div class="disclaimer">
      ⚠️ Fares, routes and the bus reform are changing fast (the system was overhauled in 2025). Confirm current
      fares and routes on a maps app or yerevan.am before relying on them.
    </div>

    <h2>Sources</h2>
    <ul class="sources">
      <li v-for="s in sources" :key="s.u"><a :href="s.u" target="_blank" rel="noopener">{{ s.t }}</a></li>
    </ul>
  </article>
</template>
