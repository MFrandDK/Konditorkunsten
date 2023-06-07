import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '../views/ShopView.vue'
import ProduktView from '../views/ProduktView.vue'
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
      path: '/product/:id',
      name: 'product',
      component: ProduktView,
      props: true
    },
    {
      path: '/kurv',
      name: 'kurv',
      component: KurvView
    }
  ]
})

export default router
