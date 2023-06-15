import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '../views/ShopView.vue'
import ProduktView from '../views/ProduktView.vue'
import KurvView from '../views/KurvView.vue'

// HMR (hot module reload) brug af Vite: "https://pinia.vuejs.org/cookbook/hot-module-replacement.html"
// Dynamic routing: "https://router.vuejs.org/guide/essentials/dynamic-matching.html" og "https://blog.logrocket.com/dynamic-routing-using-vue-router/"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: 'https://mmd.ucn.dk/class/MMD-CSD-S21/10407721/Sem4/dist/',
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
      component: KurvView,
      props: true
    }
  ]
})

export default router