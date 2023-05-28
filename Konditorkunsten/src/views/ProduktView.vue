<script setup>
import Header from '../components/Header.vue'
import SingleProduct from '../components/SingleProduct.vue'
import OtherProductsSection from '../components/OtherProductsSection.vue'
import Footer from '../components/Footer.vue'

import { useProductStore } from '@/stores/ProductStore'
import { onMounted, computed } from 'vue'
const store = useProductStore();
const getProducts = computed(() => {
  return store.getProducts;
});
const products = computed(() => {
  return store.products;
});
onMounted(() => {
  store.fetchProducts();
});
</script>

<template>
  <body>
    <Header />
    <main>
     <SingleProduct />
     <div class="spacerAndBorder"></div>
     <OtherProductsSection />
    </main>
    <Footer />
  </body>
</template>

<style scoped>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.spacerAndBorder {
  border-bottom: 1px solid var(--primary-bg-beige);
  margin: 2vw 0 8vw 0;
}

</style>
