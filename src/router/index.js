import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CarRental from '../views/CarRental.vue'
import CryptoLaw from '../views/CryptoLaw.vue'
import Apps from '../views/Apps.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/car-rental', name: 'car-rental', component: CarRental },
  { path: '/crypto-law', name: 'crypto-law', component: CryptoLaw },
  { path: '/apps', name: 'apps', component: Apps },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
