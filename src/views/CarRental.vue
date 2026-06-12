<script setup>
import { RouterLink } from 'vue-router'

// ── Companies ────────────────────────────────────────────────
const companies = [
  { name: 'Naniko', type: 'Local', site: 'https://naniko.am/', note: 'Frequently recommended local operator. EVN airport pickup, economy→luxury/SUV. Also operates in Tbilisi & Baku — strong for cross-border trips.' },
  { name: 'Best Car Rent', type: 'Local', site: 'https://www.bestcarrent.am/en', note: 'Established Yerevan company with a broad fleet; top-rated local operator.' },
  { name: 'HomyCars', type: 'Local', site: 'https://homycars.com/', note: 'Yerevan operator with a detailed Armenia→Georgia cross-border guide (handles the notarized authorization).' },
  { name: 'Rentacar-Armenia', type: 'Local', site: 'https://rentacar-armenia.com/', note: '2026 pricing, class-segmented quotes, clear terms page. Some no-deposit cars.' },
  { name: 'Roscar', type: 'Local (budget)', site: 'https://roscar.am/', note: 'Economy from ~$17/day with no-deposit / no-credit-card options.' },
  { name: 'TravelCar', type: 'Local', site: 'https://travelcar.am/', note: 'Local operator; useful, clear guidance on IDP requirements.' },
  { name: 'Sixt', type: 'International', site: 'https://www.sixt.com/car-rental/armenia/', note: 'Premium international brand, airport presence, standardized terms. Stricter cross-border rules.' },
  { name: 'Hertz Armenia', type: 'International', site: 'https://www.hertz.am/', note: 'International brand via local franchise; modern fleet, EVN airport pickup.' },
  { name: 'Enterprise Armenia', type: 'International', site: 'https://enterprise.am/', note: 'Clear requirements checklist; explicitly supports one-way Armenia↔Georgia rentals.' },
  { name: 'Localrent', type: 'Aggregator', site: 'https://www.localrent.com/en/armenia/', note: 'Compares many local agencies with English support. "Georgia travel permission" is a bookable add-on. Good for first-timers.' },
]

// ── Prices by class (rough, daily, in season 2025–2026) ──────
const prices = [
  { cls: 'Budget / economy', examples: 'Hyundai i20, Kia Rio', daily: '$17 – $40', note: 'Low end from local budget operators (Roscar ~$17, aggregators ~$20–32).' },
  { cls: 'Sedan / mid-size', examples: 'Toyota Corolla, VW Passat', daily: '$35 – $60', note: 'Most common class; ~$74/day average on aggregators for "medium".' },
  { cls: 'SUV / 4x4', examples: 'Kia Sportage, Toyota RAV4', daily: '$50 – $80', note: 'Useful for Armenian mountain roads. Aggregator avg ~$69/day, from ~$77.' },
  { cls: 'Premium / luxury', examples: 'Mercedes, large SUV', daily: '$90+', note: 'Mainly via international brands (Sixt, Hertz).' },
]

const documents = [
  "Valid driver's licence, held for at least 1 year.",
  "Licence printed in Latin letters — if yours isn't (or you're a US citizen), bring an International Driving Permit (IDP). The IDP is a translation of your licence and does NOT replace your passport.",
  'Passport (the main driver\'s, shown at pickup).',
  'Minimum age usually 21 (some require 1 year\'s driving experience). Drivers under 25 may pay a young-driver surcharge; Enterprise caps at age 79.',
  'A credit or debit card in the main driver\'s name for the security deposit.',
]

const insurance = [
  'Deposit: typically $150–$300, blocked on your card during the rental. Some cars are bookable with no deposit (e.g. Roscar, select Localrent listings).',
  'Basic insurance is usually included; full coverage / CDW add-ons run roughly $8–$15/day.',
]

const crossBorder = [
  'Many operators allow driving into Georgia, but you must arrange it in advance — it is not automatic.',
  'Expect a cross-border permission surcharge of about $90 (≈35,000 AMD) per rental.',
  'The agency provides an authorization letter / notarized Power of Attorney; give 48–72 hours (up to ~1 week) advance notice.',
  'A compulsory Georgian Third-Party Liability (TPL) insurance is bought at the border — about $10 (≈4,000 AMD) for 10–15 days (~$8/week). Takes 5–10 minutes.',
  'International chains (e.g. Sixt) tend to have stricter cross-border rules than local agencies.',
]

const sources = [
  { t: "Absolute Armenia — Local's guide to renting & driving", u: 'https://absolutearmenia.com/car-rental-in-armenia/' },
  { t: 'Localrent — Rent a car in Armenia (aggregator)', u: 'https://www.localrent.com/en/armenia/' },
  { t: 'Rentacar-Armenia — 2026 pricing & terms', u: 'https://rentacar-armenia.com/' },
  { t: 'Enterprise Armenia — step-by-step renting guide', u: 'https://enterprise.am/renting-a-car-in-yerevan-armenia-step-by-step' },
  { t: 'Enterprise Armenia — one-way rentals Armenia↔Georgia', u: 'https://enterprise.am/one-way-car-rentals-between-armenia-and-georgia' },
  { t: 'HomyCars — cross-border road trip Armenia→Georgia', u: 'https://homycars.com/blog/cross-border-road-trip-from-armenia-to-georgia' },
  { t: 'TravelCar — International Driving Permit explained', u: 'https://travelcar.am/rent-a-car-in-yerevan/travel-news/international-driving-permit-for-renting-a-car' },
  { t: 'KAYAK — Yerevan car rentals (price benchmark)', u: 'https://www.kayak.com/Cheap-Yerevan-Car-Rentals.28697.cars.ksp' },
  { t: 'KAYAK — Armenia SUV rentals (price benchmark)', u: 'https://www.kayak.com/Armenia-SUV-Rentals.26540.csv.ksp' },
  { t: 'Naniko — official site', u: 'https://naniko.am/' },
  { t: 'Roscar — no-deposit budget rentals', u: 'https://roscar.am/' },
  { t: 'Postcards From The World — driving in Armenia tips', u: 'https://postcardsfromtheworld.com/renting-a-car-and-driving-in-armenia-best-tips-and-advice/' },
]
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Car Rental</p>
    <h1>🚗 Renting a Car in Armenia</h1>
    <p class="lead">
      Reputable rental companies in Yerevan and nationwide, rough prices by car class, the documents you'll
      need, and how cross-border trips to Georgia work — researched from operator sites and local guides (2025–2026).
    </p>

    <h2>Companies worth knowing</h2>
    <p>A mix of trusted local operators (cheaper, flexible, English support via aggregators) and international brands (pricier, standardized, airport desks).</p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Company</th><th>Type</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr v-for="c in companies" :key="c.name">
            <td><a :href="c.site" target="_blank" rel="noopener">{{ c.name }}</a></td>
            <td><span class="pill">{{ c.type }}</span></td>
            <td>{{ c.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Rough prices by car class</h2>
    <p>Daily rates, in-season. Weekly rentals are usually cheaper per day, and winter (Feb) is the cheapest time.</p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Class</th><th>Typical models</th><th>~ Per day</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr v-for="p in prices" :key="p.cls">
            <td><strong>{{ p.cls }}</strong></td>
            <td>{{ p.examples }}</td>
            <td>{{ p.daily }}</td>
            <td>{{ p.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout docs">
      <h3>📄 Documents you need to rent</h3>
      <ul>
        <li v-for="(d, i) in documents" :key="i">{{ d }}</li>
      </ul>
    </div>

    <div class="callout">
      <h3>💳 Deposit &amp; insurance</h3>
      <ul>
        <li v-for="(d, i) in insurance" :key="i">{{ d }}</li>
      </ul>
    </div>

    <h2>Crossing into Georgia 🇬🇪</h2>
    <p>A common move for migrants doing visa runs or regional trips. Allowed by many operators, but plan ahead:</p>
    <ul>
      <li v-for="(d, i) in crossBorder" :key="i">{{ d }}</li>
    </ul>

    <div class="disclaimer">
      ⚠️ Prices and requirements vary by company, season, and your nationality, and change often. Always confirm
      the exact rate, deposit, insurance and cross-border terms directly with the company before booking.
    </div>

    <h2>Sources</h2>
    <ul class="sources">
      <li v-for="s in sources" :key="s.u"><a :href="s.u" target="_blank" rel="noopener">{{ s.t }}</a></li>
    </ul>
  </article>
</template>
