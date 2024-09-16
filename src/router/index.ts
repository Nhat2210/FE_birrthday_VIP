import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import NotFound from '@/pages/404notfound/index.vue';
const routes = [
  ...setupLayouts(generatedRoutes),
  { path: '/:pathMatch(.*)*', component: NotFound } 
] 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
