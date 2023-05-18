<script setup>
import Header from '../components/Header.vue';

import { useProductStore } from '@/stores/ProductStore';
useProductStore();


</script>

<template>
  <body>
    <Header />
    <main>
      <h1>Shop</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem est similique aliquid eaque id perspiciatis tempore consequatur beatae nobis expedita, non aperiam officia nisi. Nobis excepturi deleniti voluptates nam?</p>

      <section>
        
      </section>
    </main>
  </body>
</template>

<style scoped>
  body {
    width: auto;
    /* display: flex; */
  }

  h1 {
    background-color: rgb(115, 108, 255);
    color: red;
  }

  p {
        text-align: center;
        color: red;
  }

</style>