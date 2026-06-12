import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CarRental from '../views/CarRental.vue'
import CryptoLaw from '../views/CryptoLaw.vue'
import Apps from '../views/Apps.vue'
import Leisure from '../views/Leisure.vue'
import Events from '../views/Events.vue'
import MarriageLoan from '../views/MarriageLoan.vue'
import Housing from '../views/Housing.vue'
import Language from '../views/Language.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/car-rental', name: 'car-rental', component: CarRental },
  { path: '/crypto-law', name: 'crypto-law', component: CryptoLaw },
  { path: '/apps', name: 'apps', component: Apps },
  { path: '/leisure', name: 'leisure', component: Leisure },
  { path: '/events', name: 'events', component: Events },
  { path: '/marriage-loan', name: 'marriage-loan', component: MarriageLoan },
  { path: '/housing', name: 'housing', component: Housing },
  { path: '/language', name: 'language', component: Language },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
