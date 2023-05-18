import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '../views/ShopView.vue'
import KurvView from '../views/KurvView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/kurv',
      name: 'kurv',
      component: KurvView
    }
  ]
})

export default router
