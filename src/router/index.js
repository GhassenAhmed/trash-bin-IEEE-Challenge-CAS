import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from "@/views/DashboardView"


const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
