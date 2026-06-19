<script setup>
import { RouterLink } from 'vue-router'

const emergency = [
  { num: '911', what: 'All emergencies (unified line) — operators speak English' },
  { num: '103', what: 'Ambulance' },
  { num: '101', what: 'Fire & rescue' },
  { num: '102', what: 'Police' },
]

// Nearest first (Arabkir / Mamikonyants St), then other major facilities.
const hospitals = [
  { name: 'Arabkir Joint Medical Center', focus: "Children's hospital + some adult care (urology, surgery, nephrology, kidney transplant) & emergency", area: '30 Mamikonyants St, Arabkir', q: 'Arabkir Joint Medical Center Mamikonyants Yerevan', url: 'https://arabkirmc.am/en/', nearest: true },
  { name: 'Slavmed Medical Center', focus: 'Private, multi-profile general hospital', area: 'Komitas Ave area (Arabkir)', q: 'Slavmed Medical Center Yerevan', url: null, nearest: false },
  { name: 'Wigmore Clinic', focus: 'Private, Western-standard multi-specialty — popular with expats', area: '56 Pushkin St, Kentron', q: 'Wigmore Clinic Pushkin Yerevan', url: 'https://wigmore.am/en/', nearest: false },
  { name: 'Nairi Medical Center', focus: 'Private; cardiology, neurology, oncology, strong emergency care', area: 'Paronyan St, Kentron', q: 'Nairi Medical Center Yerevan', url: null, nearest: false },
  { name: 'Erebuni Medical Center', focus: 'Large public hospital; major emergency & trauma centre', area: 'Titogradyan St, Erebuni', q: 'Erebuni Medical Center Yerevan', url: null, nearest: false },
  { name: 'Astghik Medical Center', focus: 'Private, multi-profile', area: 'Kentron', q: 'Astghik Medical Center Yerevan', url: null, nearest: false },
  { name: 'Armenian-American Wellness Center', focus: 'Screening, diagnostics & women’s health', area: 'Kentron', q: 'Armenian American Wellness Center Yerevan', url: null, nearest: false },
  { name: 'Surb Grigor Lusavorich Medical Center', focus: 'Large public general hospital', area: 'Kentron', q: 'Surb Grigor Lusavorich Medical Center Yerevan', url: null, nearest: false },
]

const system = [
  'Public and private care both exist. Emergency providers must give first aid to anyone — including foreigners — regardless of nationality or ability to pay.',
  'Most expats use private clinics for non-emergencies and serious cases: better equipment, shorter waits, and more chance of English-speaking staff.',
  'Care is generally affordable compared with Western Europe or the US — consultations are cheap, and private treatment still costs a fraction of Western prices.',
  'English is common in top private clinics (Wigmore, Nairi) but NOT universal — confirm when you book, and note reports/results are often issued in Armenian.',
]

const insurance = [
  'There is no free comprehensive public coverage for foreign newcomers — plan to pay out of pocket or carry insurance.',
  'Get private health insurance: a local policy (via insurers like Nairi Insurance, Rosgosstrakh Armenia, SIL) once resident, an international expat plan, or travel insurance for short stays.',
  'Some employers include health insurance — ask if you take a job.',
]

const pharmacies = [
  'Pharmacies (դեղատուն) are everywhere, and many are open 24/7. Big chains include Alfa Pharm and Natali Pharm.',
  'Many medicines are sold over the counter without a prescription, and pharmacists can advise on minor issues.',
  'Bring a supply of any chronic medication plus a copy of your prescription, and check that controlled medicines are legal to bring in.',
]

const tips = [
  'Find doctors and book appointments via doctors.am.',
  'Dentistry and many elective procedures are high quality and inexpensive — Armenia is a popular medical-tourism destination for exactly this.',
  'Carry your passport/residence card and insurance details when visiting a hospital.',
]

const sources = [
  { t: 'Arabkir Joint Medical Center — official site (contacts)', u: 'https://arabkirmc.am/en/contacts' },
  { t: 'Repat Armenia — Hospitals and medical centers in Armenia', u: 'https://www.repatarmenia.org/repatriate/practical-information/healthcare/hospitals-and-medical-centers-in-armenia' },
  { t: 'Government of Armenia (Diaspora) — Healthcare', u: 'http://diaspora.gov.am/en/pages/105/healthcare' },
  { t: 'U.S. Embassy in Armenia — List of medical centers (PDF)', u: 'https://am.usembassy.gov/wp-content/uploads/sites/220/2025/03/List-of-Medical-Centers_March-2025.pdf' },
  { t: 'Expat Exchange — Health care in Yerevan', u: 'https://www.expatexchange.com/ctryguide/6415/366/Armenia/Health-Care-in-Yerevan-Navigate-Health-Care-in-Yerevan,-Armenia' },
  { t: 'Vardanyan & Partners — Healthcare & safety in Armenia', u: 'https://armenian-lawyer.com/business-immigration/digital-nomad-healthcare-safety-armenia/' },
  { t: 'Wikipedia — List of hospitals in Yerevan', u: 'https://en.wikipedia.org/wiki/List_of_hospitals_in_Yerevan' },
]

const mapUrl = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Healthcare</p>
    <h1>🩺 Healthcare in Yerevan</h1>
    <p class="lead">
      Hospitals near Mamikonyants St in Arabkir and across the city, plus the medical essentials — emergency
      numbers, how the system works, insurance, and pharmacies.
    </p>

    <div class="callout" style="border-left-color: #e5484d">
      <h3>🚨 Emergency numbers</h3>
      <div class="emerg">
        <div v-for="e in emergency" :key="e.num" class="emerg-item">
          <span class="emerg-num">{{ e.num }}</span>
          <span class="emerg-what">{{ e.what }}</span>
        </div>
      </div>
    </div>

    <h2>Nearest to Mamikonyants St (Arabkir)</h2>
    <p>
      The closest hospital to Mamikonyants Street is the <strong>Arabkir Joint Medical Center</strong>, which sits
      right on it at no. 30. It's primarily Armenia's largest children's hospital but also runs emergency services
      and some adult departments. For general adult care, the private centres below are also nearby or a short ride away.
    </p>

    <h2>Hospitals &amp; medical centers</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Facility</th><th>Focus</th><th>Where</th></tr></thead>
        <tbody>
          <tr v-for="h in hospitals" :key="h.name">
            <td>
              <strong>{{ h.name }}</strong>
              <span v-if="h.nearest" class="near-badge">on Mamikonyants St</span>
              <a v-if="h.url" :href="h.url" target="_blank" rel="noopener" class="site-link">site ↗</a>
            </td>
            <td data-label="Focus">{{ h.focus }}</td>
            <td data-label="Where"><a :href="mapUrl(h.q)" target="_blank" rel="noopener">📍 {{ h.area }}</a></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>How the system works</h2>
    <ul>
      <li v-for="(s, i) in system" :key="i">{{ s }}</li>
    </ul>

    <div class="callout">
      <h3>🛡️ Insurance</h3>
      <ul style="margin:0">
        <li v-for="(n, i) in insurance" :key="i">{{ n }}</li>
      </ul>
    </div>

    <div class="callout">
      <h3>💊 Pharmacies &amp; medication</h3>
      <ul style="margin:0">
        <li v-for="(p, i) in pharmacies" :key="i">{{ p }}</li>
      </ul>
    </div>

    <div class="callout docs">
      <h3>💡 Good to know</h3>
      <ul style="margin:0">
        <li v-for="(t, i) in tips" :key="i">{{ t }}</li>
      </ul>
    </div>

    <div class="disclaimer">
      ⚠️ Facility specialties, addresses, and English availability change — confirm directly before relying on
      them, and in a real emergency call 911 first. This is orientation, not medical advice.
    </div>

    <h2>Sources</h2>
    <ul class="sources">
      <li v-for="s in sources" :key="s.u"><a :href="s.u" target="_blank" rel="noopener">{{ s.t }}</a></li>
    </ul>
  </article>
</template>

<style scoped>
.emerg { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-top: 6px; }
.emerg-item { display: flex; align-items: center; gap: 10px; }
.emerg-num { font-size: 1.3rem; font-weight: 800; color: #e5484d; min-width: 52px; }
.emerg-what { color: var(--text); font-size: 0.92rem; }
.near-badge { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--bg); background: var(--accent); border-radius: 999px; padding: 2px 8px; margin-left: 8px; white-space: nowrap; }
.site-link { font-size: 0.82rem; margin-left: 8px; white-space: nowrap; }
</style>
