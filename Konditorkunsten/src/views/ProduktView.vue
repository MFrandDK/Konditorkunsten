<script setup>
import Header from '../components/Header.vue'
import SingleProduct from '../components/SingleProduct.vue'
import OtherProductsSection from '../components/OtherProductsSection.vue'
import Footer from '../components/Footer.vue'

import { useProductStore } from '@/stores/ProductStore';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const store = useProductStore();
const route = useRoute();
const productId = computed(() => route.params.id);
const product = computed(() => store.getProductbyId(productId.value));

onMounted(() => {
  if (!product.value) {
    store.fetchProductById(productId.value);
  }
});

</script>

<template>
  <body>
    <Header />
    <main>
     <SingleProduct :productId="productId"/>
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
