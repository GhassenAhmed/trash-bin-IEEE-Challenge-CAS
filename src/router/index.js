import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from "@/views/DashboardView"
import LandingPageView from "@/views/LandingPageView"

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
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
