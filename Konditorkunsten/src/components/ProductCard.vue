<script setup>

import { useProductStore } from '@/stores/ProductStore'
import { onMounted, computed } from 'vue'
const store = useProductStore();
const getProducts = computed(() => {
  return store.getProducts;
});
const products = computed(() => {
  return store.products;
});

</script>
<template>
  <article class="singleProductContainer" v-for="product in products" :key="product.id" >
    <img :src="product.imageUrl" alt="" loading="lazy" />
    <article class="productInfo">
      <h3 >{{product.name}}</h3>
      <RouterLink to="/Produkt"><button class="cakeBtn">Se produkt</button></RouterLink>
    </article>
  </article>
</template>

<script>
export default {
  name: 'ProductInfoCardComponent'
}
</script>

<style scoped>
.singleProductContainer {
  height: 30vw;
  width: 20vw;
  background-color: var(--primary-bg-beige);
  text-align: center;
}

img {
  width: 100%;
  height: 60%;
}

.productInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 40%;
}

.cakeBtn {
  height: 3vw;
  width: 12vw;
  background-color: var(--btn-brown);
  color: var(--white);
  border-style: none;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.3vw;
  cursor: pointer;
}
.cakeBtn:hover {
  color: var(--cta-brown);
  background-color: var(--primary-bg-beige);
  border: 1px solid var(--cta-brown);
  transition: .2s;
}
</style>
