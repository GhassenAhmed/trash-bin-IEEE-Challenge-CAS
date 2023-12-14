import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from "@/views/DashboardView"
import LandingPageView from "@/views/LandingPageView"
import BiogasView from "@/views/BiogasView"
import ElectricityView from "@/views/ElectricityView"
const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingPageView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },

  {
    path: '/biogas',
    name: 'biogas',
    component: BiogasView
  },

  {
    path: '/electricity',
    name: 'electricity',
    component: ElectricityView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
