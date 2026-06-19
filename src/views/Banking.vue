<script setup>
import { RouterLink } from 'vue-router'

const documents = [
  'A valid passport (with at least ~6 months validity).',
  'A social card / tax number (TIN) — the "public services number". You get it on-site, it\'s quick and free.',
  'Proof of address — a rental agreement, a utility bill, or hotel documentation for short stays.',
  'Proof of income / source of funds — increasingly asked of non-residents under enhanced due diligence.',
  'A residence permit helps a lot — it upgrades you from "non-resident" to "resident" and smooths everything.',
]

const steps = [
  'Pick a bank (see the table) and a branch — or start online where the bank offers remote opening.',
  'Get a social card / TIN if you don\'t have one (often arranged at the branch or a government office).',
  'Bring your passport + proof of address; complete the bank\'s KYC and a tax-residency self-certification.',
  'Choose account currencies — most banks offer multi-currency (AMD + USD + EUR) and a Visa/Mastercard.',
  'Activate online banking and the bank\'s mobile app; link Idram if you want the local wallet.',
]

const banks = [
  { name: 'Ameriabank', known: 'Largest bank; strong digital services, popular with businesses & expats.', url: 'https://ameriabank.am/en' },
  { name: 'Evocabank', known: 'Award-winning digital/mobile bank (2025) — slick app, fast onboarding.', url: 'https://evoca.am/en' },
  { name: 'Inecobank', known: 'Very popular retail bank; well-rated InecoMobile app.', url: 'https://www.inecobank.am/en/' },
  { name: 'ACBA Bank', known: 'Large branch & ATM network nationwide.', url: 'https://www.acba.am/en' },
  { name: 'IDBank', known: 'Digital-forward; closely tied to the Idram wallet.', url: 'https://idbank.am/en/' },
  { name: 'Converse Bank', known: 'Established retail bank, multi-currency accounts.', url: 'https://www.conversebank.am/en/' },
]

const notes = [
  'Non-residents often face extra checks and somewhat higher fees than residents — a residence permit reduces both.',
  'From 2025 Armenia automatically exchanges non-residents\' account information with many countries (CRS), so declare your real tax residency.',
  'Multi-currency accounts (AMD/USD/EUR) are standard and useful; cards run on Visa, Mastercard and the local ArCa network.',
  'Several banks now offer remote/online account opening — confirm current options directly with the bank.',
]

const iran = [
  'There is NO Armenian law banning banks from serving Iranian citizens — the Central Bank has said so explicitly.',
  'But individual banks "de-risk" because of US sanctions: since the 2010 CISADA sanctions, many have been reluctant to open accounts for Iranian citizens, and some have frozen or closed accounts for clients whose place of birth is Iran — affecting even dual nationals.',
  'In practice it is bank-by-bank and inconsistent: expect extra scrutiny and source-of-funds questions. Holding Armenian residency (and ideally a local company/job) makes approval far more likely.',
  'The Iranian-owned Bank Mellat in Yerevan is cut off from SWIFT and can\'t send/receive international wires — it is not a workaround.',
  'This area is volatile and politically sensitive — policies change. Confirm a specific bank\'s current stance before relying on it, and consider asking a local lawyer or the bank directly.',
]

const sources = [
  { t: 'AFM.am — How to open a bank account in Armenia (2025)', u: 'https://afm.am/en/journal/debit-cards/how-to-open-a-bank-account-in-armenia-documents-for-residents-and-non-residents-remote-options-and-key-aspects-in-2025' },
  { t: 'Vardanyan & Partners — Opening a bank account as a non-resident', u: 'https://armenian-lawyer.com/business-immigration/opening-a-bank-account-as-a-non-resident/' },
  { t: 'Vardanyan & Partners — KYC, source-of-funds & TIN registration', u: 'https://armenian-lawyer.com/immigration/opening-a-bank-account-in-armenia-as-a-non-resident-kyc-documents-source-of-funds-and-tin-registration/' },
  { t: 'Gritarres — Opening a bank account for foreigners (2026)', u: 'https://www.gritarres.com/blog/bank-accounts-for-foreigners/' },
  { t: 'ARKA — Central Bank: no rule bans servicing Iranian citizens', u: 'https://arka.am/en/news/business/central_bank_says_there_is_no_regulation_banning_armenian_banks_from_servicing_iranian_citizens/' },
  { t: 'banks.am — Armenian banks clarify terms of service for Iranian clients', u: 'https://banks.am/en/news/newsfeed/16545' },
  { t: 'Kayhan Life — Armenian banks to close Iranian dual nationals\' accounts', u: 'https://kayhanlife.com/business/armenian-banks-to-close-iranian-dual-nationals-accounts/' },
]
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Banking</p>
    <h1>🏦 Banking in Armenia</h1>
    <p class="lead">
      How to open a bank account as a newcomer — what you need, the process, which banks are worth it, and an
      honest look at the extra hurdles Iranian citizens face under sanctions.
    </p>

    <div class="callout docs">
      <h3>📋 What you need</h3>
      <ul style="margin:0">
        <li v-for="(d, i) in documents" :key="i">{{ d }}</li>
      </ul>
    </div>

    <h2>The process</h2>
    <ol>
      <li v-for="(s, i) in steps" :key="i">{{ s }}</li>
    </ol>

    <h2>Banks worth knowing</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Bank</th><th>Known for</th><th>Website</th></tr></thead>
        <tbody>
          <tr v-for="b in banks" :key="b.name">
            <td><strong>{{ b.name }}</strong></td>
            <td data-label="Known for">{{ b.known }}</td>
            <td data-label="Website"><a :href="b.url" target="_blank" rel="noopener">Visit</a></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout">
      <h3>💡 Good to know</h3>
      <ul style="margin:0">
        <li v-for="(n, i) in notes" :key="i">{{ n }}</li>
      </ul>
    </div>

    <h2>🇮🇷 For Iranian citizens — read this</h2>
    <div class="callout" style="border-left-color: var(--accent)">
      <ul style="margin:0">
        <li v-for="(t, i) in iran" :key="i">{{ t }}</li>
      </ul>
    </div>

    <div class="disclaimer">
      ⚠️ Banking rules, fees, and especially banks' policies toward Iranian clients change frequently and vary by
      branch. Treat this as orientation, not a guarantee — confirm current requirements directly with the bank.
    </div>

    <h2>Sources</h2>
    <ul class="sources">
      <li v-for="s in sources" :key="s.u"><a :href="s.u" target="_blank" rel="noopener">{{ s.t }}</a></li>
    </ul>
  </article>
</template>
