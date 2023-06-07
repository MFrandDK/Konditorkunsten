<script setup>
import Header from '../components/Header.vue'
import SingleProduct from '../components/SingleProduct.vue'
// import OtherProductsSection from '../components/OtherProductsSection.vue'
import Footer from '../components/Footer.vue'
import GoBackButton from '../components/GoBackButton.vue'

import { useProductStore } from '@/stores/ProductStore';
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const store = useProductStore();
const route = useRoute();
const productId = computed(() => route.params.id);
const dataLoaded = ref(false)
const propValue = ref(null)

    onMounted(async () => {
      try {
        // let state = this.state.first
        const result = await store.fetchProductById(productId.value);
        propValue.value = result;
        dataLoaded.value = true;
        console.log(propValue.value.name);
        // console.log("state", store.getters.getProducts(state));
      } catch (error) {
        console.error(error);
      }
    });

</script>

<template>
  <body>
    <Header />
    <main>
      <GoBackButton />
      <SingleProduct v-if="dataLoaded"  :productId="productId" :product="propValue" />
      <!-- <div class="spacerAndBorder"></div> -->
      <!-- <OtherProductsSection class="sectionsComponent"/> -->
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
@media only screen and (max-width: 600px) {
  .sectionsComponent {
    margin-top: 5vw;
  }
}
</style>
