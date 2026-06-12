<script setup>
import { RouterLink } from 'vue-router'

const gyms = [
  { name: 'Budget gyms', price: 'from ~15,000 AMD/mo', note: 'Local neighbourhood gyms — basic equipment, no frills.' },
  { name: 'Mid-range (city average)', price: '~30,000 AMD/mo', note: 'The average Yerevan membership (late 2025). Good equipment, often a sauna.' },
  { name: 'Gold\'s Gym', price: '~30,000–70,000+ AMD/mo', note: 'International brand, large floors, full cardio + free weights.' },
  { name: 'Orange Fitness', price: '~30,000–70,000+ AMD/mo', note: 'Premium club, classes, pool at some locations.' },
  { name: 'Neo Gym', price: 'mid–premium', note: 'Popular; modern kit, boxing & functional zones, fitness bar, sauna.' },
  { name: 'The ONE Gym Premium', price: 'premium', note: 'Central all-in-one fitness + recovery space.' },
]

const gymNotes = [
  'FitHub (fithub.am) is a multi-gym pass app — one subscription gets you into many partner gyms and pools around the city. Good if you want flexibility or move around a lot.',
  'Annual memberships are noticeably cheaper per month than pay-as-you-go.',
]

// Pools — mostly outdoor/resort, busiest in summer
const pools = [
  { name: 'Vahagni Pool', price: 'Adult 6,000 (wd) / 9,000 (we); morning 4,500; child 4,000', note: 'Popular outdoor pool.' },
  { name: 'Paradise Pool (Green Palace Hotel)', price: 'Adult 7,000 (wd) / 8,000 (we); child 4,000–5,000', note: 'Hotel pool, open to visitors.' },
  { name: 'Panorama Yerevan Resort', price: 'Adult 6,000 (wd) / 8,000 (we)', note: 'Resort pool with city views.' },
  { name: 'Multi Grand Pharaon Hotel', price: '8,000 (wd) / 10,000 (we)', note: 'Hotel pool complex.' },
  { name: 'The Pool (Dvin Hotel, rooftop)', price: '25,000 for non-guests', note: 'Premium rooftop pool/club.' },
]

const poolNotes = [
  'Day-entry prices span roughly 4,000–20,000+ AMD depending on venue, day and time (wd = weekday, we = weekend).',
  'Most of the above are outdoor/seasonal (summer). For year-round lap swimming, look at indoor pools in sports complexes or premium gyms (Orange Fitness and similar) that bundle a pool with membership.',
]

const cinemas = [
  { name: 'Kinopark', loc: 'Yerevan Mall, Arshakunyats Ave 34/3', q: 'Kinopark Yerevan Mall', note: 'Modern multiplex; open 10:00–02:00. Online booking via the Yerevan Mall app.' },
  { name: 'Cinema Star', loc: 'Erebuni Plaza & Megamall', q: 'Cinema Star Yerevan', note: 'Premium chain, slightly pricier than Moscow Cinema.' },
  { name: 'Moscow Cinema', loc: '18 Abovyan St (city centre)', q: 'Moscow Cinema Yerevan Abovyan', note: 'Historic 1936 cinema; central and cheaper. Shows arthouse + mainstream.' },
]

const cinemaNotes = [
  'Rough ticket price: about 1,500–2,500 AMD for a standard 2D screening, more for 3D / VIP / premium seats; Moscow Cinema is at the cheaper end. Cinemas don\'t publish fixed rates online — confirm on their app/site for the exact film and time.',
  'Kids 3–12 get a discount (~250 AMD off at Kinopark); under-3s usually free.',
]

const ebikes = [
  { name: 'YerevanRide', url: 'https://www.yerevanride.am/pricing.html', price: '1 day 1,000 · 3 days 2,000 · month 9,000 · year 49,000 AMD', note: 'E-bikes & e-scooters. Each plan = unlimited 45-minute rides. Best value for regular use.' },
  { name: 'BusyFly', url: null, price: '~100 AMD to unlock + ~30 AMD/min', note: 'E-scooter sharing, pay per ride — fine for occasional short hops.' },
  { name: 'Mimo', url: 'https://www.mimobike.com/', price: 'pay per ride', note: 'Bike-sharing platform aiming for affordable, accessible city cycling.' },
]

const sources = [
  { t: 'Expatistan — Gym membership price in Yerevan', u: 'https://www.expatistan.com/price/gym/yerevan' },
  { t: 'ArmeniaInfo — Best gyms & fitness centres in Yerevan', u: 'https://armeniainfo.ai/blog/medical-tourism-guide/best-gyms-fitness-centers-in-yerevan-directory-your-ultimate-guide-to-a-healthier-lifestyle' },
  { t: 'FitHub — multi-gym partner network', u: 'https://fithub.am/en/partners' },
  { t: 'AraraTour — Outdoor swimming pools in Yerevan (prices)', u: 'https://araratour.com/top-7-outdoor-swimming-pools-in-yerevan' },
  { t: 'Visit Yerevan — Outdoor swimming pools', u: 'https://visityerevan.am/blog/details/58/en/' },
  { t: 'KinoPark — official site', u: 'https://kinopark.am/en' },
  { t: 'Cinema Star — official site', u: 'https://cinemastar.am/en' },
  { t: 'Moscow Cinema — official site', u: 'https://moscowcinema.com/en' },
  { t: 'YerevanRide — pricing', u: 'https://www.yerevanride.am/pricing.html' },
  { t: 'ARKA — BusyFly launches e-scooter rental in Armenia', u: 'https://arka.am/en/news/business/busyfly_starts_electric_scooter_rental_service_in_armenia_/' },
]

const mapUrl = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Leisure & Fitness</p>
    <h1>🏊 Gym, Pool, Cinema &amp; E-bikes</h1>
    <p class="lead">
      Staying active and entertained in Yerevan — gym memberships, swimming pools, cinemas, and electric
      bike/scooter rentals, with rough prices (2025). All prices in Armenian dram (AMD).
    </p>

    <h2>🏋️ Gyms</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Gym</th><th>~ Price</th><th>Notes</th></tr></thead>
        <tbody>
          <tr v-for="g in gyms" :key="g.name">
            <td><strong>{{ g.name }}</strong></td>
            <td>{{ g.price }}</td>
            <td>{{ g.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="callout">
      <ul style="margin:0">
        <li v-for="(n, i) in gymNotes" :key="i">{{ n }}</li>
      </ul>
    </div>

    <h2>🏊 Swimming pools</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Pool</th><th>~ Entry (AMD)</th><th>Notes</th></tr></thead>
        <tbody>
          <tr v-for="p in pools" :key="p.name">
            <td><strong>{{ p.name }}</strong></td>
            <td>{{ p.price }}</td>
            <td>{{ p.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="callout">
      <ul style="margin:0">
        <li v-for="(n, i) in poolNotes" :key="i">{{ n }}</li>
      </ul>
    </div>

    <h2>🎬 Cinemas</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Cinema</th><th>Where</th><th>Notes</th></tr></thead>
        <tbody>
          <tr v-for="c in cinemas" :key="c.name">
            <td><strong>{{ c.name }}</strong></td>
            <td><a :href="mapUrl(c.q)" target="_blank" rel="noopener">📍 {{ c.loc }}</a></td>
            <td>{{ c.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="callout">
      <ul style="margin:0">
        <li v-for="(n, i) in cinemaNotes" :key="i">{{ n }}</li>
      </ul>
    </div>

    <h2>🛴 Electric bikes &amp; scooters</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Service</th><th>~ Price</th><th>Notes</th></tr></thead>
        <tbody>
          <tr v-for="e in ebikes" :key="e.name">
            <td>
              <a v-if="e.url" :href="e.url" target="_blank" rel="noopener"><strong>{{ e.name }}</strong></a>
              <strong v-else>{{ e.name }}</strong>
            </td>
            <td>{{ e.price }}</td>
            <td>{{ e.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="disclaimer">
      ⚠️ Prices are approximate and move with season, time of day and venue — and cinema tickets especially aren't
      published as fixed rates. Confirm on the venue's site/app before you go.
    </div>

    <h2>Sources</h2>
    <ul class="sources">
      <li v-for="s in sources" :key="s.u"><a :href="s.u" target="_blank" rel="noopener">{{ s.t }}</a></li>
    </ul>
  </article>
</template>
