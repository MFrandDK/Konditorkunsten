import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import { useCartStore } from './stores/CartStore'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// // Ved at bruge "app.provide" bliver cartStore tilgængelig i alle komponenter, ved hjælp af Vue's injektionsmekanisme. På denne måde bliver det muligt, at importere og bruge "cartStore" i alle komponenter. 
// app.provide('cartStore', useCartStore())

app.mount('#app')
