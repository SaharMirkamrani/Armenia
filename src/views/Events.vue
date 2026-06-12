<script setup>
import { RouterLink } from 'vue-router'

// Upcoming events & festivals (from June 2026). Chronological.
const events = [
  { date: 'Jun 20–21, 2026', title: 'Yerevan Music Festival', what: 'World-class DJs, live music, food and entertainment zones.', url: 'https://armenia.travel/events/yerevan-music-festival/' },
  { date: 'Jun – Jul 31, 2026', title: 'Yerevan Brass Band Open-Air Concerts', what: 'Free brass-band music in parks and public spaces through the summer.', url: 'https://armenia.travel/events/' },
  { date: 'Jul 12, 2026', title: 'Vardavar', what: "Armenia's beloved water-splashing festival — expect buckets and water balloons everywhere, including Republic Square. Embrace it, you WILL get soaked.", url: null },
  { date: 'Jul 12–19, 2026', title: 'Golden Apricot International Film Festival', what: 'Major curated international film festival across cinemas in Yerevan.', url: 'https://armenia.travel/events/' },
  { date: 'Jul 17–19, 2026', title: 'Beer Days Yerevan', what: 'Brewers, snacks, games, live music and a steinholding competition.', url: null },
  { date: 'Aug 16, 2026', title: 'Blessing of the Grapes', what: 'Traditional celebration marking the start of the grape harvest, at Yeraz Park.', url: null },
]

const listings = [
  { name: 'Armenia Travel — Events', url: 'https://armenia.travel/events/' },
  { name: 'Eventix.am — by month', url: 'https://eventix.am/en/months' },
  { name: 'Ticket-am.com — Yerevan events', url: 'https://ticket-am.com/en/erevan/events' },
  { name: 'Songkick — Yerevan concerts', url: 'https://www.songkick.com/metro-areas/26687-armenia-yerevan' },
  { name: 'Tomsarkgh.am — what\'s on', url: 'https://www.tomsarkgh.am/en' },
]

const sources = [
  { t: 'Pravda Armenia — Pashinyan announced SOAD concert, Tankian denied', u: 'https://armenia.news-pravda.com/en/armenia/2026/05/24/31108.html' },
  { t: 'Mediamax — Serj Tankian interview on the Yerevan show', u: 'https://mediamax.am/en/news/interviews/37441/' },
  { t: 'Wikipedia — Wake Up the Souls Tour (SOAD\'s 2015 Yerevan concert)', u: 'https://en.wikipedia.org/wiki/Wake_Up_the_Souls_Tour' },
  { t: 'Armenictours — Armenia 2026 Festivals Calendar', u: 'https://armenictours.com/armenia-2026-festivals/' },
  { t: 'Armenia Travel — Yerevan Music Festival 2026', u: 'https://armenia.travel/events/yerevan-music-festival/' },
  { t: 'The Cascade Travel — Armenian Festivals & Events Calendar 2026', u: 'https://thecascadetravel.com/blog/armenia-festival-calendar/' },
]
</script>

<template>
  <article class="content wrap">
    <p class="breadcrumb"><RouterLink to="/">← Home</RouterLink> / Events & Festivals</p>
    <h1>🎶 Events &amp; Festivals</h1>
    <p class="lead">
      What's coming up in Yerevan — the status of the System of a Down concert, plus the summer 2026 festival
      calendar. Dates can shift, so confirm before planning around one.
    </p>

    <div class="callout" style="border-left-color: var(--accent)">
      <h3>🤘 System of a Down — no confirmed date (postponed)</h3>
      <p style="margin:0 0 8px">
        There is <strong>no confirmed date</strong> for a System of a Down concert right now. A July 2026 show on
        Republic Square was announced by PM Pashinyan during the election campaign, but the band — via Serj Tankian —
        said it wasn't confirmed and <strong>postponed it</strong>, citing logistics and timing, with a new date to be
        announced.
      </p>
      <p style="margin:0">
        👉 Watch the band's official channels for the real announcement. (Their legendary Yerevan show, <em>Wake Up
        the Souls</em>, was back in 2015.)
      </p>
    </div>

    <h2>Upcoming festivals &amp; events</h2>
    <div class="timeline">
      <div v-for="e in events" :key="e.title" class="event">
        <div class="event-date">{{ e.date }}</div>
        <div class="event-body">
          <h3>
            <a v-if="e.url" :href="e.url" target="_blank" rel="noopener">{{ e.title }}</a>
            <span v-else>{{ e.title }}</span>
          </h3>
          <p>{{ e.what }}</p>
        </div>
      </div>
    </div>

    <div class="callout docs">
      <h3>📅 Find more / check what's on</h3>
      <p style="margin:0 0 8px">Live listings for concerts and events (and where to buy tickets):</p>
      <ul style="margin:0">
        <li v-for="l in listings" :key="l.url"><a :href="l.url" target="_blank" rel="noopener">{{ l.name }}</a></li>
      </ul>
    </div>

    <div class="disclaimer">
      ⚠️ Event dates — and especially the SOAD concert — change. Treat these as a planning guide and confirm on the
      official event/ticket page before committing.
    </div>

    <h2>Sources</h2>
    <ul class="sources">
      <li v-for="s in sources" :key="s.u"><a :href="s.u" target="_blank" rel="noopener">{{ s.t }}</a></li>
    </ul>
  </article>
</template>

<style scoped>
.timeline { margin: 18px 0; }
.event { display: flex; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--border); }
.event:last-child { border-bottom: none; }
.event-date { flex: 0 0 130px; font-weight: 600; color: var(--accent); font-size: 0.92rem; padding-top: 2px; }
.event-body h3 { margin: 0 0 4px; font-size: 1.05rem; }
.event-body p { margin: 0; color: var(--muted); font-size: 0.95rem; }
@media (max-width: 540px) {
  .event { flex-direction: column; gap: 4px; }
  .event-date { flex-basis: auto; }
}
</style>
