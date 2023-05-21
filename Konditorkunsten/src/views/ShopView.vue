<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import KontaktComponent from '../components/KontaktComponent.vue';

import Products from '../components/Products.vue';


import { useProductStore } from '@/stores/ProductStore';
useProductStore();


</script>

<template>
  <body>
    <Header />
    <main>
      <nav class="sorteringsNav">
        <ul class="sorteringsContainer">
          <li><a class="udvalgBtn" href="#">Alle varer</a></li>
          <li><a class="udvalgBtn" href="#">Kager</a></li>
          <li><a class="udvalgBtn" href="#">Arrangementkager</a></li>
          <li><a class="udvalgBtn" href="#">Specialiteter</a></li>
        </ul>
        <ul class="sorteringsContainer">
          <li><a class="sorteringsBtn" href="#">Sorter efter: <p class="udvalgBtn">Pris</p> </a></li>
        </ul>
      </nav>
      <section class="productContainer">
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </section>
      <KontaktComponent />
    </main>
    <Footer />
  </body>
</template>

<style scoped>
  body {
    width: auto;
  }

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

  .sorteringsBtn { 
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: black;
    gap: 0 2vw;
  }

  .productContainer {
    width: 100%;
    height: auto;
    display: grid;
    justify-items: center;
    grid-auto-flow: row;
    grid-template-columns:  repeat(3, 1fr);
    gap: 10% 2.5%;
    margin: 5vw 0 12vw 0;
  }

</style>