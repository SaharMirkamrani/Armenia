<script setup>
import { RouterLink } from 'vue-router'

const conditions = [
  'Both spouses must hold Iranian nationality and have an Iranian national ID card (kart-e melli) — living abroad is allowed.',
  'The marriage must be officially registered with Iran: the marriage certificate has to be issued and sealed by the Iranian embassy/consulate in your country and entered in the Mikhak consular system. A foreign-only civil marriage does not qualify.',
  'You must apply within 2 years of the date of the marriage contract.',
  'The Central Bank registration portal (ve.cbi.ir) is reported to be reachable only from an Iranian IP, so applicants abroad typically use a VPN.',
  'You still need a guarantor (zāmen) — usually a government employee in Iran with provable income — plus a promissory note (sefteh). In practice banks often ask for two cosigners.',
]

const basics = [
  { k: 'Who', v: 'Newly married couples, both Iranian nationals (inside or outside Iran).' },
  { k: 'Window', v: 'Apply within 2 years of the marriage contract.' },
  { k: 'Amount', v: 'Set each Iranian year and rising (was ~150M tomans per person in 2022, increased since). Confirm the current 1404/1405 figure.' },
  { k: 'Interest', v: 'Interest-free in principle, with a ~4% fee.' },
  { k: 'Repayment', v: 'Monthly instalments over ~5 years.' },
  { k: 'Guarantor', v: 'One guarantor + promissory note by law; in practice often two cosigners with proven income.' },
  { k: 'Bonus', v: 'Loan amount is doubled for war veterans and their children.' },
]

const steps = [
  'Register your marriage at the Iranian consulate/embassy and get the certificate sealed; make sure it lands in the Mikhak system.',
  'Gather documents: both national ID cards, the consular marriage certificate, and your guarantor\'s details.',
  'Line up an acceptable guarantor in Iran (government employee with provable income) — arrange this early, it\'s the slow part.',
  'Register on the Central Bank marriage-loan portal (ve.cbi.ir), selecting your bank — access from an Iranian IP if you\'re abroad.',
  'Wait for the bank to call you in; approval and queue times vary a lot and banks have been tightening criteria.',
]

const catch_ = [
  'The guarantor requirement is the main blocker from abroad — finding a state-employed cosigner in Iran is hard if your network there is thin.',
  'Banks have toughened wedding-loan criteria, so approval is slower and less certain than the rules suggest.',
  'Rules, amounts and the exact loan figure change almost every Iranian year — treat any number as "verify before relying on it".',
  'Everything hinges on the marriage being registered through the Iranian consulate, not just locally where you live.',
]

const sources = [
  { t: 'IP-Iran — Marriage loan for Iranians abroad (Persian)', u: 'https://ip-iran.co/%D9%88%D8%A7%D9%85-%D8%A7%D8%B2%D8%AF%D9%88%D8%A7%D8%AC-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C%D8%A7%D9%86-%D8%AE%D8%A7%D8%B1%D8%AC-%D8%A7%D8%B2-%DA%A9%D8%B4%D9%88%D8%B1%D8%AF/' },
  { t: 'Lendo — Marriage loan 1404: amount, documents, conditions (Persian)', u: 'https://lendo.ir/blog/getting-marriage-loan/' },
  { t: 'Rade — Marriage loan 1405 guide (Persian)', u: 'https://www.rade.ir/loan-marriage-loan/' },
  { t: 'Central Bank of Iran — Marriage loan conditions (official)', u: 'https://ve.cbi.ir/Conditions.aspx' },
  { t: 'Kayhan Life — Iranian banks toughen criteria for wedding loans', u: 'https://kayhanlife.com/business/iranian-banks-toughen-criteria-for-wedding-loans/' },
  { t: 'Tehran Times — Funds allocated to facilitate marriage', u: 'https://www.tehrantimes.com/news/469204/Some-2-3b-allocated-to-facilitate-marriage' },
]
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Marriage Loan</p>
    <h1>💍 Iranian Marriage Loan from Abroad</h1>
    <p class="lead">
      Can you still use Iran's marriage loan (vâm-e ezdevâj) while living abroad? Short answer: yes — but only if
      your marriage is registered through an Iranian consulate and you can line up a guarantor back home.
    </p>

    <div class="callout docs">
      <h3>✅ Short answer: Yes, conditionally</h3>
      <p style="margin:0">
        Iranian nationals living abroad can apply for the marriage loan, provided the marriage is registered with
        Iran via the embassy/consulate (Mikhak system), you apply within 2 years, and you secure an acceptable
        guarantor in Iran. The guarantor and the consular registration are the parts that trip people up.
      </p>
    </div>

    <h2>Conditions for applicants abroad</h2>
    <ul>
      <li v-for="(c, i) in conditions" :key="i">{{ c }}</li>
    </ul>

    <h2>Loan basics</h2>
    <div class="table-wrap">
      <table>
        <tbody>
          <tr v-for="b in basics" :key="b.k">
            <td style="white-space:nowrap; vertical-align:top"><strong>{{ b.k }}</strong></td>
            <td>{{ b.v }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>How to apply</h2>
    <ol>
      <li v-for="(s, i) in steps" :key="i">{{ s }}</li>
    </ol>

    <div class="callout">
      <h3>⚠️ The catch</h3>
      <ul style="margin:0">
        <li v-for="(c, i) in catch_" :key="i">{{ c }}</li>
      </ul>
    </div>

    <div class="disclaimer">
      ⚠️ This summarises mostly Persian-language guidance and official notices; English sources are thin and the rules
      change yearly. Confirm current eligibility, the loan amount, and guarantor rules directly with your Iranian
      consulate, the Central Bank of Iran (ve.cbi.ir), or your chosen bank before relying on it.
    </div>

    <h2>Sources</h2>
    <ul class="sources">
      <li v-for="s in sources" :key="s.u"><a :href="s.u" target="_blank" rel="noopener">{{ s.t }}</a></li>
    </ul>
  </article>
</template>
