import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CarRental from '../views/CarRental.vue'
import CryptoLaw from '../views/CryptoLaw.vue'
import Apps from '../views/Apps.vue'
import Leisure from '../views/Leisure.vue'
import Events from '../views/Events.vue'
import Language from '../views/Language.vue'
import Translator from '../views/Translator.vue'
import Residency from '../views/Residency.vue'
import Banking from '../views/Banking.vue'
import Healthcare from '../views/Healthcare.vue'
import Iranians from '../views/Iranians.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/car-rental', name: 'car-rental', component: CarRental },
  { path: '/crypto-law', name: 'crypto-law', component: CryptoLaw },
  { path: '/apps', name: 'apps', component: Apps },
  { path: '/leisure', name: 'leisure', component: Leisure },
  { path: '/events', name: 'events', component: Events },
  { path: '/language', name: 'language', component: Language },
  { path: '/translate', name: 'translate', component: Translator },
  { path: '/residency', name: 'residency', component: Residency },
  { path: '/banking', name: 'banking', component: Banking },
  { path: '/healthcare', name: 'healthcare', component: Healthcare },
  { path: '/iranians', name: 'iranians', component: Iranians },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
