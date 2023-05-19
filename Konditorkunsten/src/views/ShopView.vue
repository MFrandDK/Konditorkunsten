<script setup>
import Header from '../components/Header.vue';
import Products from '../components/Products.vue';


import { useProductStore } from '@/stores/ProductStore';
useProductStore();


</script>

<template>
  <body>
    <Header />
    <main>
      <nav class="sorteringsContainer">
        <a class="udvalgBtn" href="#">Alle varer</a>
        <a class="udvalgBtn" href="#">Kager</a>
        <a class="udvalgBtn" href="#">Arrangementkager</a>
        <a class="udvalgBtn" href="#">Alle varer</a>
        <a class="udvalgBtn sorteringsBtn" href="#">Sorter efter: <p class="udvalgBtn">Pris</p> </a>
      </nav>
      <section class="productContainer">
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </section>
      
    </main>
  </body>
</template>

<style scoped>
  body {
    width: auto;
  }


  .sorteringsContainer {
    width: 100%;
    height: 8vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: .1px solid var(--primary-bg-beige);
  }

  .udvalgBtn {
    width: 25%;
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: black;
  }

  .sorteringsBtn {
    margin-left: 10%;
  }

  .productContainer {
    width: 100%;
    height: auto;
    display: grid;
    justify-items: center;
    grid-auto-flow: row;
    grid-template-columns:  repeat(3, 1fr);
    gap: 5%;
    margin-top: 5%;
  }

</style>