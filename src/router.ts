import { createRouter, createWebHistory } from "vue-router"
import generatedRoutes from "~pages"

const router = createRouter({
  history: createWebHistory(),
  routes: generatedRoutes,
})

export default router