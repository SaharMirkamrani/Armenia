# Migration Guide 🇦🇲

A personal, research-backed **Vue.js** website covering the practical information I need for my migration to Armenia. Each topic is researched from multiple sources and written up as its own page.

## Tech stack

- [Vue 3](https://vuejs.org/) (`<script setup>` SFCs)
- [Vue Router](https://router.vuejs.org/) for pages
- [Vite](https://vitejs.dev/) for dev server & build

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Single-file build / publishing as an artifact

The build is configured with [`vite-plugin-singlefile`](https://github.com/richardtallent/vite-plugin-singlefile),
so `npm run build` inlines **all** JS and CSS into a single self-contained
`dist/index.html`. That one file:

- **Opens with no server** — just double-click `dist/index.html`.
- **Is publishable as an HTML artifact** — its contents are everything the app needs.

Routing uses hash mode (`#/car-rental`, etc.) so deep links work from a plain
file with no server rewrites.

⚠️ The **Translator** makes live calls to a public translation API. That works
when the file is opened normally or hosted, but a strict sandbox (e.g. a
Claude artifact's iframe) may block those network requests — in which case the
rest of the site still works and the translator simply can't reach the service.

## Structure

```
migration-guide/
├── index.html              # Vite entry
├── src/
│   ├── main.js             # app bootstrap
│   ├── App.vue             # header / footer shell
│   ├── router/index.js     # routes
│   ├── assets/style.css    # shared styles
│   └── views/
│       ├── Home.vue        # topic index
│       └── CarRental.vue   # car rental research
└── vite.config.js
```

## Topics

- [x] **Car Rental** — companies, rough prices, documents required, cross-border to Georgia
- [x] **Crypto Law** — legality, taxation, and restrictions on buying/selling crypto
- [x] **Essential Apps** — must-have apps (taxi, transport, food, banking) + EarlyOne
- [x] **Leisure & Fitness** — gyms, pools, cinemas, e-bikes with rough prices
- [x] **Events & Festivals** — upcoming concerts/festivals + System of a Down status
- [x] **Residency & Visas** — every residency pathway, fees, process, path to citizenship
- [x] **Language** — Armenian for absolute beginners: alphabet, phrases, numbers, resources
- [x] **Live Translator** — real-time English/Persian → Armenian, with speech in & out
- [ ] Banking

Adding a topic: create `src/views/Topic.vue`, add a route in `src/router/index.js`, and add a card in `src/views/Home.vue`.

## Disclaimer

Compiled from public sources. Prices and requirements change frequently — always confirm directly with the company or relevant authority before relying on anything here.
