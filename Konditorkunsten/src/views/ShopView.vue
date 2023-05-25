<script setup>
import Header from '../components/Header.vue'
// import KurvSlider from '../components/KurvSlider.vue';
import ProductCard from '../components/ProductCard.vue'
import KontaktComponent from '../components/KontaktComponent.vue'
import Footer from '../components/Footer.vue'

import { useProductStore } from '@/stores/ProductStore'
const productStore = useProductStore()
productStore.fill()
</script>

<template>
  <body>
    <Header />
    <main>
      <!-- <KurvSlider /> -->
      <nav class="sorteringsNav">
        <ul class="navSorteringsContainerOne">
          <li><a class="udvalgBtn" href="#">Alle varer</a></li>
          <li><a class="udvalgBtn" href="#">Kager</a></li>
          <li><a class="udvalgBtn" href="#">Arrangementkager</a></li>
          <li><a class="udvalgBtn" href="#">Specialiteter</a></li>
        </ul>
        <ul class="navSorteringsContainerTwo">
          <li><a class="sorteringsBtn" href="#">Sorter efter:</a></li>
          <li><a class="udvalgBtn">Pris</a></li>
          <li class="arrowDown"><a>▶</a></li>
        </ul>
      </nav>
      <section class="productContainer">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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

.sorteringsNav>*>*>* {
  color: var(--cta-brown);
}

.navSorteringsContainerOne {
  width: 70%;
  height: 8vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 0.1px solid var(--primary-bg-beige);
  list-style: none;
  font-size: 1.2vw;
}

.navSorteringsContainerTwo {
  width: 30%;
  height: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.1px solid var(--primary-bg-beige);
  list-style: none;
  font-size: 1.2vw;
  gap: 0 1.5vw;
}

.sorteringsContainer > li {
  width: auto;
}

.udvalgBtn {
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-size: 1.3vw;
}

.arrowDown {
  
  rotate: 90deg;
}

.sorteringsBtn {
  display: flex;
  justify-content: center;
  text-decoration: none;
  gap: 0 2vw;
  font-size: 1.3vw;
}

.udvalgBtn:hover,
.arrowDown>a:hover,
.sorteringsBtn:hover {
  scale: 1.1;
  transition: 0.2s;
  color: var(--btn-brown);
  cursor: pointer;
}

.productContainer {
  display: grid;
  justify-items: center;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5vw 0;
  margin: 5vw 0;
}
</style>
