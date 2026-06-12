<script setup>
import { RouterLink } from 'vue-router'

// Quick-answer summary cards
const quickAnswers = [
  { q: 'Is buying & selling legal?', a: 'Yes', tone: 'good', detail: 'Individuals can legally buy, sell and hold crypto. It is regulated, but not banned — and not legal tender.' },
  { q: 'Is it taxed?', a: 'Gains no, income yes', tone: 'mixed', detail: 'Investment gains are 0% for individuals — but being PAID in crypto is normal income, taxed at 20%.' },
  { q: 'Any restrictions?', a: 'Some', tone: 'mixed', detail: 'Service providers (exchanges) need a Central Bank licence, and large cash crypto deals are limited.' },
]

const legal = [
  'Crypto is legal in Armenia: individuals may buy, sell, hold and exchange crypto-assets.',
  'It is NOT recognised as legal tender — shops are not obliged to accept it as payment.',
  'The framework is the Law "On Crypto-Assets" (HO-159-N), adopted by the National Assembly on 29 May 2025 and in force from 4 July 2025.',
  'The Central Bank of Armenia (CBA) is the regulator. It supervises crypto-asset service providers and issues licences.',
  'This is Armenia\'s first comprehensive crypto law; before it, crypto sat in a legal grey zone (legal to hold, but largely unregulated).',
]

const tax = [
  { who: 'Individual — investment gains', rate: '0%', detail: 'Gains from personal crypto buying/selling/holding are currently not taxed — a key reason Armenia is attractive to crypto holders.' },
  { who: 'Individual — paid in crypto (salary/freelance)', rate: '20% income tax', detail: 'Earning crypto for work is ordinary income, valued in AMD when received, taxed like any salary. The 0% gains rule does NOT apply here.' },
  { who: 'Individual entrepreneurs / regular traders', rate: 'Income tax', detail: 'If trading is frequent and systematic enough to count as a business, normal income-tax rules apply instead of the 0% exemption.' },
  { who: 'Companies', rate: '18% profit tax', detail: 'Crypto received as revenue is taxed at the standard corporate profit-tax rate.' },
  { who: 'High-tech / blockchain startups', rate: '1% turnover', detail: 'Small high-tech companies (revenue under ~AMD 115M) can use a 1% turnover-tax regime; the ECOS free zone adds further incentives.' },
]

const taxNotes = [
  'The 0% personal rate is the current treatment and could change — treat it as "true today, verify before relying on it".',
  'Armenia has committed to the OECD Crypto-Asset Reporting Framework (CARF), with the first automatic exchange of information expected in 2027.',
  'The State Revenue Committee has acquired Chainalysis software to monitor crypto transactions, so on-chain activity is increasingly visible to tax authorities.',
]

const paidInCrypto = [
  'Earning crypto (salary, freelance, payment for services) is taxable income at the 20% flat rate — valued in AMD at the moment you receive it. The 0% rule only covers later price gains, not the income itself.',
  'Pension / social contributions may also apply (~5% on income up to 500,000 AMD/month, 10% above).',
  'Residency matters: spend 183+ days here and you are a tax resident, taxed on worldwide income — so foreign crypto pay counts. Non-residents are taxed only on Armenian-source income.',
  'Spending it is fine — no extra tax on spending itself. Just remember crypto transactions are meant to be non-cash, with a transitional cash cap of ~300,000 AMD (~$780) per deal; in practice you convert to drams and spend normally.',
  'Any rise in value between receiving the crypto and selling it is a capital gain — and that part is 0% for individuals.',
]

const restrictions = [
  { title: 'Exchanges need a licence', detail: 'Any business providing crypto services — exchanges, exchange points, custodians, brokers, portfolio managers — must be licensed by the Central Bank. Minimum capital runs roughly $30,000–$530,000 depending on the activity.' },
  { title: 'Licensing deadline for existing operators', detail: 'Firms operating before 4 July 2025 must obtain a CBA licence by 31 January 2027 or stop operating. CBA registration/licensing regulations took effect 31 January 2026.' },
  { title: 'Cash limits', detail: 'Crypto transactions are meant to go through non-cash channels. During a transitional period, cash deals are allowed only up to about 300,000 AMD (~$780) per transaction, with customer ID verification and record-keeping.' },
  { title: 'AML / KYC', detail: 'Providers must run anti-money-laundering and know-your-customer checks; the rules explicitly target money laundering and criminal financing.' },
]

// What this means for an individual moving to Armenia
const forYou = [
  'Buying, selling and holding crypto for yourself is legal and (today) untaxed — no licence needed as an individual.',
  'Use a CBA-licensed exchange or service provider where possible; unlicensed providers are being phased out by Jan 2027.',
  'Expect ID checks, and keep your own records of buys/sells — reporting obligations (CARF) ramp up from 2027.',
  'For anything resembling a crypto business (regular trading, running an exchange, a startup), get local tax/legal advice — different, stricter rules apply.',
]

// Where to exchange crypto → AMD, grouped by method
const exchangeGroups = [
  {
    title: 'Global P2P — sell crypto, get AMD to your bank/card',
    blurb: 'Best for converting larger amounts or crypto income. You match with a buyer and receive a bank/card transfer in drams.',
    items: [
      { name: 'Binance P2P', url: 'https://p2p.binance.com/en/trade/all-payments/USDT?fiat=AMD', note: 'AMD supported; works with Ameriabank, Inecobank, Ardshinbank, ACBA, Idram and more.' },
      { name: 'KuCoin P2P', url: 'https://www.kucoin.com/otc/buy/USDT-AMD', note: 'Armenian Dram supported on the P2P market.' },
      { name: 'Remitano', url: 'https://remitano.com/am/p2p/usdt', note: 'Buy/sell USDT for AMD, escrow-protected P2P.' },
    ],
  },
  {
    title: 'Local Yerevan exchangers — cash or transfer',
    blurb: 'Walk-in or online exchangers that settle in AMD cash or to a local account. Convenient, but compare rates first.',
    items: [
      { name: 'Armanestan', url: 'https://armanestan.org/en/crypto-exchange-in-yerevan/', note: 'USDT/BTC → AMD in Yerevan, cash or transfer.' },
      { name: 'Bitbanker', url: 'https://bitbanker.org/exchangers/yerevan', note: 'Physical office in Yerevan; BTC, ETH, USDT, TON; cash & bank transfer.' },
      { name: 'Turn.am', url: 'https://turn.am/en/category/kriptvo-phvokhanakvoum', note: 'Local crypto exchange — BTC/ETH/USDT for AMD/USD/EUR.' },
      { name: 'AnyExchange', url: 'https://anyexchange.best/en/obmennik-kriptovalyut-v-yerevan/', note: 'Online crypto exchanger covering Yerevan.' },
    ],
  },
  {
    title: 'Compare rates across exchangers',
    blurb: 'Aggregators that list many Armenian exchangers and their live rates so you avoid a bad spread.',
    items: [
      { name: 'BestChange', url: 'https://www.bestchange.com/tether-trc20-to-cash-dram-in-ervn.html', note: 'Vetted exchangers, e.g. USDT → cash AMD in Yerevan.' },
      { name: 'ExFinder', url: 'https://exfinder.io/en/blog/post/crypto-to-amd', note: 'Compares crypto exchangers and explains crypto→AMD.' },
      { name: 'CryptoNVG', url: 'https://cryptonvg.com/places/yerevan', note: 'Directory of Yerevan crypto exchanges and ATMs.' },
    ],
  },
  {
    title: 'Crypto ATMs / terminals',
    blurb: 'Fastest cash-out but the worst rates — fine for small amounts. Yerevan has ~23 crypto ATMs.',
    items: [
      { name: 'Sky Labs / SkyTerminal', url: 'https://cryptonvg.com/atm/sky-labs-atm-yerevan', note: '24/7 terminals to buy/sell BTC, ETH, USDT for drams in minutes.' },
    ],
  },
]

const exchangeNotes = [
  'Prefer a CBA-licensed provider, and check the official register before sending funds — unlicensed operators are being phased out by Jan 2027.',
  'Expect ID / KYC checks on larger amounts; avoid "anonymous" services given the new reporting rules (CARF from 2027).',
  'Rates and spreads vary a lot between exchangers and the in-app P2P price — compare before committing.',
  'Remember the cash rule: crypto deals are meant to be non-cash, with a transitional cash cap of ~300,000 AMD (~$780) per transaction.',
]

const sources = [
  { t: 'Library of Congress — Armenia: New Law Establishes Regulatory Framework for Crypto-Assets', u: 'https://www.loc.gov/item/global-legal-monitor/2025-09-19/armenia-new-law-establishes-comprehensive-regulatory-framework-for-crypto-assets' },
  { t: 'ILex Law Firm — Law "On Crypto-Assets" (HO-159-N) enters into force', u: 'https://www.ilex.am/en/archive/627-armenia-s-law-on-crypto-assets-ho-159-n-enters-into-force.html' },
  { t: 'CIVILNET — Armenia tightens crypto rules, puts sector under Central Bank oversight', u: 'https://www.civilnet.am/en/news/1003468/armenia-tightens-crypto-rules-puts-sector-under-central-bank-oversight/' },
  { t: 'Armenian-Lawyer.com — Cryptocurrency Taxation in Armenia: 2025 Compliance Guide', u: 'https://armenian-lawyer.com/business-immigration/cryptocurrency-taxation-and-compliance-in-armenia/' },
  { t: 'AFM.am — Armenia introduces crypto-asset regulation starting January 31, 2026', u: 'https://afm.am/en/news/financial-news/armenia-introduces-crypto-asset-regulation-starting-january-31-2026' },
  { t: 'Cryptopolitan — Armenia amends crypto law and starts licensing service providers', u: 'https://www.cryptopolitan.com/armenia-amends-crypto-law-and-starts-licensing-service-providers/' },
  { t: 'IMF — Republic of Armenia: Tax Compliance and Crypto Assets (July 2024)', u: 'https://www.imf.org/-/media/files/publications/tar/2024/english/tarea2024069-print-pdf.pdf' },
  { t: 'MB Legal — Guide to Crypto Regulations in Armenia (2026)', u: 'https://mblegal.am/armenia-crypto-guide/' },
  { t: 'PwC Tax Summaries — Armenia: Taxes on personal income (20% flat rate)', u: 'https://taxsummaries.pwc.com/armenia/individual/taxes-on-personal-income' },
  { t: 'Vardanyan & Partners — Taxes in Armenia: Guide for Foreigners', u: 'https://armenian-lawyer.com/taxes-armenia/' },
  { t: 'Beaumont Capital Markets — Armenia\'s Crypto Tax Guide for Expats & Digital Nomads', u: 'https://beaumont-capitalmarkets.co.uk/armenias-crypto-tax-guide-for-expats-and-digital-nomads/' },
  { t: 'Central Bank of Armenia — Crypto-asset service providers (official register)', u: 'https://www.cba.am/en/crypto-asset-service-providers/' },
  { t: 'ExFinder — How to exchange cryptocurrency to AMD in Armenia', u: 'https://exfinder.io/en/blog/post/crypto-to-amd' },
  { t: 'Binance Support — P2P adds Armenian Dram (AMD) payment methods', u: 'https://www.binance.com/en/support/announcement/binance-p2p-supports-new-payment-methods-for-kazakhstani-tenge-kzt-polish-zloty-pln-georgian-lari-gel-and-armenian-dram-amd-d8519d99edb4406fbab21e2ab483a362' },
]
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Crypto Law</p>
    <h1>₿ Crypto Law in Armenia</h1>
    <p class="lead">
      Is buying and selling crypto legal in Armenia, is it taxed, and what are the restrictions? Short version:
      legal, currently untaxed for individuals, but newly regulated for exchanges and businesses (2025–2026).
    </p>

    <div class="qa-grid">
      <div v-for="item in quickAnswers" :key="item.q" class="qa-card" :class="item.tone">
        <div class="qa-q">{{ item.q }}</div>
        <div class="qa-a">{{ item.a }}</div>
        <p class="qa-d">{{ item.detail }}</p>
      </div>
    </div>

    <h2>Is it legal?</h2>
    <ul>
      <li v-for="(l, i) in legal" :key="i">{{ l }}</li>
    </ul>

    <h2>Is it taxed?</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Who</th><th>Rate</th><th>Details</th></tr>
        </thead>
        <tbody>
          <tr v-for="t in tax" :key="t.who">
            <td><strong>{{ t.who }}</strong></td>
            <td data-label="Rate">{{ t.rate }}</td>
            <td data-label="Details">{{ t.detail }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="callout">
      <h3>⚠️ Tax caveats</h3>
      <ul>
        <li v-for="(n, i) in taxNotes" :key="i">{{ n }}</li>
      </ul>
    </div>

    <div class="callout" style="border-left-color: var(--accent-2)">
      <h3>💸 What if I'm PAID in crypto? Can I spend it?</h3>
      <p style="margin:0 0 10px">
        Yes — receiving and spending crypto is legal. But don't confuse the two tax events:
      </p>
      <ul style="margin:0">
        <li v-for="(p, i) in paidInCrypto" :key="i">{{ p }}</li>
      </ul>
    </div>

    <h2>Where to exchange crypto → drams (AMD)</h2>
    <p>
      Practical options for turning crypto into spendable drams, fastest-to-set-up first. Always check the Central
      Bank's <a href="https://www.cba.am/en/crypto-asset-service-providers/" target="_blank" rel="noopener">official list of licensed providers</a> before trusting a service.
    </p>
    <div v-for="g in exchangeGroups" :key="g.title" class="exch-group">
      <h3>{{ g.title }}</h3>
      <p class="exch-blurb">{{ g.blurb }}</p>
      <div class="table-wrap">
        <table>
          <tbody>
            <tr v-for="it in g.items" :key="it.name">
              <td style="white-space:nowrap"><a :href="it.url" target="_blank" rel="noopener">{{ it.name }}</a></td>
              <td>{{ it.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="callout">
      <h3>🔑 Before you exchange</h3>
      <ul>
        <li v-for="(n, i) in exchangeNotes" :key="i">{{ n }}</li>
      </ul>
    </div>

    <h2>Restrictions &amp; rules</h2>
    <div v-for="r in restrictions" :key="r.title" class="callout">
      <h3>{{ r.title }}</h3>
      <p style="margin:0">{{ r.detail }}</p>
    </div>

    <div class="callout docs">
      <h3>🧳 What this means if you're moving here</h3>
      <ul>
        <li v-for="(f, i) in forYou" :key="i">{{ f }}</li>
      </ul>
    </div>

    <div class="disclaimer">
      ⚠️ This is a plain-language summary of a fast-moving area of law, not tax or legal advice. Dates, thresholds
      and especially the 0% personal tax rate can change — confirm with the Central Bank of Armenia, the State
      Revenue Committee, or a local lawyer before acting.
    </div>

    <h2>Sources</h2>
    <ul class="sources">
      <li v-for="s in sources" :key="s.u"><a :href="s.u" target="_blank" rel="noopener">{{ s.t }}</a></li>
    </ul>
  </article>
</template>

<style scoped>
.qa-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin: 24px 0 8px; }
.qa-card { background: var(--surface); border: 1px solid var(--border); border-top: 4px solid var(--border); border-radius: 12px; padding: 16px 18px; }
.qa-card.good { border-top-color: var(--good); }
.qa-card.mixed { border-top-color: var(--accent); }
.qa-q { color: var(--muted); font-size: 0.9rem; }
.qa-a { font-size: 1.35rem; font-weight: 700; margin: 4px 0 8px; }
.qa-d { margin: 0; font-size: 0.9rem; color: var(--muted); }
.exch-group { margin: 18px 0; }
.exch-group h3 { margin-bottom: 2px; }
.exch-blurb { margin: 0 0 6px; color: var(--muted); font-size: 0.92rem; }
</style>
