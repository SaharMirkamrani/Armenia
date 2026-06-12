import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CarRental from '../views/CarRental.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/car-rental', name: 'car-rental', component: CarRental },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
