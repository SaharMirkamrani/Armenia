<script setup>
import { RouterLink } from 'vue-router'

// Rough monthly rents. Yerevan rents are usually quoted in USD (paid monthly).
const prices = [
  { type: 'Studio / 1-bed — residential', area: 'Arabkir, Davtashen, Ajapnyak', rent: '$300 – $600', note: 'Best value for a comfortable first place; quieter, family-friendly areas.' },
  { type: 'Studio / 1-bed — central', area: 'Kentron', rent: '$600 – $1,200', note: 'Walkable city centre; furnished central studios start around $700–1,000+.' },
  { type: '2-bed — outer districts', area: 'Nor Nork, Erebuni, Shengavit, Malatia-Sebastia', rent: '$400 – $700', note: 'Cheapest 2-beds; further from the centre.' },
  { type: '2-bed — central / prime', area: 'Kentron, better Arabkir', rent: '$800 – $1,500+', note: 'Larger or renovated flats in desirable spots.' },
  { type: 'Premium / luxury', area: 'Kentron new builds', rent: '$1,500 – $3,000+', note: 'Modern projects, high finish, near the centre.' },
]

const districts = [
  { name: 'Kentron', vibe: 'City centre — culture, walkability, nightlife', cost: 'Most expensive' },
  { name: 'Arabkir', vibe: 'Residential, green, good schools — popular with expats', cost: 'Mid–high, good value' },
  { name: 'Davtashen', vibe: 'Quiet, green, a bit further out', cost: 'Lower' },
  { name: 'Avan / Kanaker-Zeytun', vibe: 'Calm residential areas', cost: 'Mid' },
  { name: 'Nor Nork / Erebuni / Shengavit / Malatia-Sebastia', vibe: 'Budget, further from centre', cost: 'Lowest' },
]

const platforms = [
  { name: 'List.am', url: 'https://www.list.am/en/category/56', note: 'The dominant marketplace — most listings, from owners and agencies. Start here.' },
  { name: 'MyRealty.am', url: 'https://myrealty.am/en/apartments-for-rent/7840', note: 'Local real-estate portal with English.' },
  { name: 'Best House', url: 'https://besthouse.am/en/for-rent-apartment', note: 'Armenian agency site with a large rental inventory.' },
  { name: 'Rentberry', url: 'https://rentberry.com/am/apartments/s/yerevan-armenia', note: 'International platform listing Yerevan rentals.' },
  { name: 'Airbnb', url: 'https://www.airbnb.com/yerevan-armenia/stays', note: 'Best for your first few weeks / short-term while you search.' },
]

const process = [
  'Search List.am (and the sites below), or use Airbnb for the first few weeks while you look in person.',
  'Standard leases run 6 or 12 months; rent is usually quoted in USD and paid monthly.',
  'Expect a deposit — commonly about one month\'s rent (Armenian law sets no fixed cap; the amount is by agreement).',
  'If you use an agent, agree the commission upfront (commonly up to one month\'s rent). Agents are unlicensed here, so vet them.',
  'Verify the landlord actually owns the flat via the Cadastre title certificate before paying anything.',
  'Sign a written contract; for real protection, notarise the lease and register it with the Cadastre.',
  'Document the apartment\'s condition with photos/an inventory, and pay rent by bank transfer (non-cash) so you have a record.',
]

const paperwork = [
  'Written rental contract compliant with Armenian law (6 or 12 months).',
  'Proof of the landlord\'s ownership (Cadastre title certificate).',
  'Notarised + Cadastre-registered lease — optional but strongly advised, and useful for residency/address registration.',
  'Condition inventory + photos at move-in.',
  'Receipts / bank-transfer records for the deposit and rent.',
]

const tips = [
  'Real-estate agents don\'t need a licence in Armenia, so fraud risk is real — work only with reputable agencies or verified owners.',
  'Never pay a deposit before seeing the flat and verifying ownership.',
  'Insist on a written, ideally notarised contract — a verbal deal gives you little protection.',
  'A registered lease (with your address) helps when you apply for residency or register your address.',
]

const sources = [
  { t: 'Armanestan — Rent an Apartment in Yerevan (2025) district guide', u: 'https://armanestan.org/en/rent-2/rent-a-house-in-yerevan/' },
  { t: 'Vardanyan & Partners — Best neighbourhoods in Yerevan for expats', u: 'https://armenian-lawyer.com/business-immigration/best-neighborhoods-yerevan-expats-investors/' },
  { t: 'Armenian-Lawyer — Digital nomad\'s guide to renting (avoiding fraud)', u: 'https://armenian-lawyer.com/digital-nomad/a-digital-nomads-guide-to-renting-an-apartment-in-armenia-how-to-protect-yourself-from-fraud/' },
  { t: 'Khechyan Law Office — How to rent property in Armenia', u: 'https://www.armenianlaw.com/en/how-to-independently-rent-your-property-out-in-the-republic-of-armenia/' },
  { t: 'Global Property Guide — Armenia landlord & tenant law', u: 'https://www.globalpropertyguide.com/Asia/Armenia/Landlord-and-Tenant' },
  { t: 'Numbeo — Cost of living in Yerevan', u: 'https://www.numbeo.com/cost-of-living/in/Yerevan' },
  { t: 'List.am — Long-term apartment rentals', u: 'https://www.list.am/en/category/56' },
]
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Housing</p>
    <h1>🏠 Renting in Yerevan</h1>
    <p class="lead">
      Where to look, what it costs, and the paperwork to rent an apartment in Yerevan — plus how to avoid the
      common rental scams. Rents are usually quoted in US dollars (paid monthly). Use the converter in the footer
      for AMD.
    </p>

    <h2>Rough monthly rents</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Type</th><th>Typical areas</th><th>~ Rent/mo</th><th>Notes</th></tr></thead>
        <tbody>
          <tr v-for="p in prices" :key="p.type">
            <td><strong>{{ p.type }}</strong></td>
            <td data-label="Areas">{{ p.area }}</td>
            <td data-label="Rent/mo">{{ p.rent }}</td>
            <td data-label="Notes">{{ p.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Districts at a glance</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>District</th><th>Vibe</th><th>Cost</th></tr></thead>
        <tbody>
          <tr v-for="d in districts" :key="d.name">
            <td><strong>{{ d.name }}</strong></td>
            <td data-label="Vibe">{{ d.vibe }}</td>
            <td data-label="Cost">{{ d.cost }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Where to look</h2>
    <div class="table-wrap">
      <table>
        <tbody>
          <tr v-for="pl in platforms" :key="pl.name">
            <td style="white-space:nowrap"><a :href="pl.url" target="_blank" rel="noopener"><strong>{{ pl.name }}</strong></a></td>
            <td>{{ pl.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>The renting process</h2>
    <ol>
      <li v-for="(s, i) in process" :key="i">{{ s }}</li>
    </ol>

    <div class="callout docs">
      <h3>📄 Lease paperwork checklist</h3>
      <ul style="margin:0">
        <li v-for="(p, i) in paperwork" :key="i">{{ p }}</li>
      </ul>
    </div>

    <div class="callout">
      <h3>⚠️ Avoid the scams</h3>
      <ul style="margin:0">
        <li v-for="(t, i) in tips" :key="i">{{ t }}</li>
      </ul>
    </div>

    <div class="disclaimer">
      ⚠️ Prices vary widely by exact location, condition, furnishing and season, and move with the market. Treat
      these as ballparks and confirm current listings on List.am before budgeting.
    </div>

    <h2>Sources</h2>
    <ul class="sources">
      <li v-for="s in sources" :key="s.u"><a :href="s.u" target="_blank" rel="noopener">{{ s.t }}</a></li>
    </ul>
  </article>
</template>
