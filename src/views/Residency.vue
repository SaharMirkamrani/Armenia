<script setup>
import { RouterLink } from 'vue-router'

// The three residency statuses
const statuses = [
  {
    name: 'Temporary residence card',
    validity: 'Up to 1 year, renewed yearly',
    fee: '105,000 AMD (~$270)',
    who: 'The normal starting point for newcomers — granted on a specific ground (work, business, study, family, Armenian origin).',
  },
  {
    name: 'Permanent residence card',
    validity: '5 years, renewable in 5-year steps',
    fee: '140,000 AMD (~$360)',
    who: 'After 3 years of legal residence (with accommodation) as family of a citizen, or on a business ground, or by Armenian origin.',
  },
  {
    name: 'Special residence status (10-year "passport")',
    validity: '10 years, renewable',
    fee: '150,000 AMD (~$390)',
    who: 'Mainly ethnic Armenians, granted by Prime Minister decision. Being phased out for new applicants from Nov 2026 (see below).',
  },
]

// Grounds / pathways to qualify
const grounds = [
  {
    icon: '💼',
    title: 'Work / employment',
    leads: 'Temporary',
    detail: 'Employment with an Armenian employer (with a work permit where required). Tied to your job; renew yearly.',
  },
  {
    icon: '🏢',
    title: 'Business & entrepreneurship',
    leads: 'Temporary → Permanent',
    detail: 'Founding or owning a company, being a director, or registered self-employment. The most common route for remote workers and freelancers — you typically register a sole-proprietorship or LLC, then apply on the entrepreneurial-activity ground.',
  },
  {
    icon: '🎓',
    title: 'Study',
    leads: 'Temporary',
    detail: 'Enrolment at an accredited Armenian university or institution. Valid for the duration of study.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family & marriage',
    leads: 'Temporary → Permanent',
    detail: 'Spouse, parent, child or close relative of an Armenian citizen, a special-passport holder, or a lawful resident. Marriage to a citizen is one of the fastest routes (and shortens the citizenship timeline).',
  },
  {
    icon: '🧬',
    title: 'Armenian origin / ethnicity',
    leads: 'Any status',
    detail: 'Proven Armenian ancestry qualifies you for temporary, permanent, or special status — often with reduced or waived fees.',
  },
  {
    icon: '🛡️',
    title: 'Refugee / asylum',
    leads: 'Temporary',
    detail: 'Recognised refugees and asylum-seekers can obtain residence; fees are typically waived.',
  },
  {
    icon: '🏠',
    title: 'Real estate / investment',
    leads: '⚠️ Not on its own',
    detail: 'Buying property alone does NOT grant residency — there is no standalone "property/investment for residency" program. Real estate only counts if it generates registered, taxed income (e.g. a rental business) under the entrepreneurship ground; investment routes require active business participation.',
  },
]

const documents = [
  'Completed application form',
  '3 photos (35 × 45 mm)',
  'Passport + a notarised Armenian translation',
  'Documents proving your ground (job contract, company registration, university enrolment, marriage/birth certificates, proof of Armenian origin, etc.)',
  'Medical certificate (confirming no danger to public health)',
  'Proof of paid state fee',
]

const steps = [
  'Enter Armenia and choose your ground (work, business, study, family, origin).',
  'Gather documents and get your passport translated and notarised into Armenian.',
  'Apply online via the migration e-portal (migration.e-gov.am) or in person at the Passport & Visa Department (OVIR) of the RA Police.',
  'The Migration & Citizenship Service (Ministry of Internal Affairs) decides — usually in 1 to 1.5 months (special status ~60 days).',
  'Collect your card. Renew temporary cards yearly — apply at least 30 days before expiry.',
]

const fees = [
  { status: 'Temporary', now: '105,000 AMD (~$270)', later: '150,000 AMD (from 1 Jan 2027)' },
  { status: 'Permanent', now: '140,000 AMD (~$360)', later: '250,000 AMD (from 1 Jan 2027)' },
  { status: 'Special (10-yr)', now: '150,000 AMD (~$390)', later: 'Fee abolished (status closing to new applicants)' },
]

const citizenship = [
  'Naturalisation: after 3 consecutive years of lawful residence on any permit (tourist stays don\'t count), plus basic Armenian language and knowledge of the Constitution.',
  'By marriage: marriage registered for at least 2 years AND living in Armenia for at least 1 year (365 days) in that period — or having a shared Armenian-citizen child — waives the 3-year rule.',
  'Armenia allows dual citizenship — you do not have to renounce your current nationality.',
]

const sources = [
  { t: 'Government of Armenia (Diaspora) — Residence status in Armenia', u: 'http://diaspora.gov.am/en/pages/100' },
  { t: 'Migration & Citizenship Service (Ministry of Internal Affairs)', u: 'https://migration.mia.gov.am/en' },
  { t: 'Migration e-portal — residency application', u: 'https://migration.e-gov.am/en/service/residency_application/info' },
  { t: 'MFA Armenia — Special residency status', u: 'https://www.mfa.am/en/special-residency-status/' },
  { t: 'MFA Armenia — Dual citizenship (law, PDF)', u: 'https://www.mfa.am/filemanager/Statics/dualcitizenship-final-eng.pdf' },
  { t: 'Repat Armenia — Applying for a residence permit', u: 'https://www.repatarmenia.org/repatriate/practical-information/legal-status/applying-for-residence-permit' },
  { t: 'Repat Armenia — How to become a citizen', u: 'https://www.repatarmenia.org/repatriate/practical-information/legal-status/how-to-become-a-citizen-of-armenia' },
  { t: 'EY Armenia — Amendments to the RA Law on Foreigners (2026)', u: 'https://www.ey.com/en_am/technical/tax-and-law-alerts/amendments-to-the-ra-law-on-foreigners' },
  { t: 'Vardanyan & Partners — Armenia residence permits explained', u: 'https://armenian-lawyer.com/immigration/armenia-residence-permits-made-simple-temporary-permanent-and-special-status-who-qualifies-and-how-to-apply/' },
]
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Residency</p>
    <h1>📄 Getting Residency in Armenia</h1>
    <p class="lead">
      Every legal way to live in Armenia — the three residency statuses, the grounds that qualify you, the process,
      fees, and how it all leads to citizenship. Researched from official government sources (2025–2026).
    </p>

    <div class="callout" style="border-left-color: var(--accent)">
      <h3>⏳ Big rule change coming — 1 Nov 2026</h3>
      <p style="margin:0">
        Armenia adopted amendments to the Law on Foreigners (20 Jan 2026) that take effect <strong>1 November 2026</strong>:
        a single online platform, the <strong>10-year special passport closes to new applicants</strong> (existing holders
        keep theirs; ethnic Armenians instead get a 5-year permanent card), and an added rule requires temporary residence
        in 3 of the prior 5 years for the entrepreneurial permanent-residence route. <strong>Fees rise on 1 Jan 2027.</strong>
        Everything below reflects the rules in force now.
      </p>
    </div>

    <h2>The three statuses</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Status</th><th>Validity</th><th>State fee</th><th>Who it's for</th></tr></thead>
        <tbody>
          <tr v-for="s in statuses" :key="s.name">
            <td><strong>{{ s.name }}</strong></td>
            <td data-label="Validity">{{ s.validity }}</td>
            <td data-label="State fee">{{ s.fee }}</td>
            <td data-label="Who it's for">{{ s.who }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Grounds to qualify</h2>
    <p>You don't pick a status directly — you qualify on a <em>ground</em>, which determines the status you get.</p>
    <div v-for="g in grounds" :key="g.title" class="callout">
      <h3>{{ g.icon }} {{ g.title }} <span class="leads">{{ g.leads }}</span></h3>
      <p style="margin:0">{{ g.detail }}</p>
    </div>

    <h2>The process</h2>
    <ol>
      <li v-for="(s, i) in steps" :key="i">{{ s }}</li>
    </ol>

    <div class="callout docs">
      <h3>📋 Documents you'll need</h3>
      <ul style="margin:0">
        <li v-for="(d, i) in documents" :key="i">{{ d }}</li>
      </ul>
    </div>

    <h2>Fees</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Status</th><th>Now (through 2026)</th><th>Change</th></tr></thead>
        <tbody>
          <tr v-for="f in fees" :key="f.status">
            <td><strong>{{ f.status }}</strong></td>
            <td data-label="Now">{{ f.now }}</td>
            <td data-label="Change">{{ f.later }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style="color: var(--muted); font-size: 0.9rem">
      Some applicants pay reduced or no fee — close relatives of citizens, ethnic Armenians, refugees, and (by agreement) US citizens.
    </p>

    <h2>From residency to citizenship 🇦🇲</h2>
    <ul>
      <li v-for="(c, i) in citizenship" :key="i">{{ c }}</li>
    </ul>

    <div class="callout">
      <h3>🇮🇷 For Iranian citizens</h3>
      <p style="margin:0">
        Iranians can enter Armenia <strong>visa-free</strong> (commonly cited as up to 90 days within any 180-day period) —
        long enough to arrive, set up a business or job, and apply for a temporary residence card from inside the country.
        Confirm the current visa-free allowance with an official Armenian consulate before you travel, as entry rules can change.
      </p>
    </div>

    <div class="disclaimer">
      ⚠️ This is a researched summary, not legal advice, and the law is mid-reform (changes land Nov 2026, fees rise Jan 2027).
      Confirm your specific case with the Migration & Citizenship Service or a local immigration lawyer before acting.
    </div>

    <h2>Sources</h2>
    <ul class="sources">
      <li v-for="s in sources" :key="s.u"><a :href="s.u" target="_blank" rel="noopener">{{ s.t }}</a></li>
    </ul>
  </article>
</template>

<style scoped>
.leads {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--accent-2);
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 2px 9px;
  margin-left: 8px;
  vertical-align: middle;
  white-space: nowrap;
}
</style>
