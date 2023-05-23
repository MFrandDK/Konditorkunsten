<script setup>

import Header from '../components/Header.vue';
import KurvSlider from '../components/KurvSlider.vue';
import ProductCard from '../components/ProductCard.vue';
import KontaktComponent from '../components/KontaktComponent.vue';
import Footer from '../components/Footer.vue';

import { useProductStore } from '@/stores/ProductStore';
const productStore = useProductStore();
productStore.fill();

</script>

<template>
  <body>
    <Header />
    <main>
      <KurvSlider />
      <nav class="sorteringsNav">
        <ul class="sorteringsContainer">
          <li><a class="udvalgBtn" href="#">Alle varer</a></li>
          <li><a class="udvalgBtn" href="#">Kager</a></li>
          <li><a class="udvalgBtn" href="#">Arrangementkager</a></li>
          <li><a class="udvalgBtn" href="#">Specialiteter</a></li>
        </ul>
        <ul class="sorteringsContainer">
          <li><a class="sorteringsBtn" href="#">Sorter efter: <p class="udvalgBtn">Pris</p><p class="arrowDown">▶</p></a></li>
        </ul>
      </nav>
      <section class="productContainer">
        <ProductCard 
          v-for="product in productStore.products"
          :key="product.name"
          :product="product"
        />
      </section>
      <KontaktComponent />
    </main>
    <Footer />
  </body>
</template>

<style scoped>
.sorteringsNav {
    display: flex;
  }

  .sorteringsContainer {
    width: 100%;
    height: 8vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: .1px solid var(--primary-bg-beige);
    list-style: none;
    font-size: 1.2vw;
  }
.sorteringsContainer:nth-child(1) {
  width: 70%;
}
.sorteringsContainer:nth-child(2) {
  width: 30%;
}

.sorteringsContainer>li {
  width: auto;
}

  .udvalgBtn {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: black;
  }

  .arrowDown {
    color: var(--black);
    rotate: 90deg;
    z-index: -1;
  }

  .sorteringsBtn { 
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: black;
    gap: 0 2vw;
  }

  .productContainer {
    display: grid;
    justify-items: center;
    grid-auto-flow: row;
    grid-template-columns:  repeat(3, 1fr);
    grid-gap: 5vw 0;
    margin: 5vw 0;
  }

</style>