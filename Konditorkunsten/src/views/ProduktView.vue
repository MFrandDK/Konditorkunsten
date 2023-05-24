<script setup>
import Header from '../components/Header.vue'
import SingleProduct from '../components/SingleProduct.vue'; 
import Footer from '../components/Footer.vue'
</script>

<template>
  <body>
    <Header />
    <main>
     <SingleProduct />
     
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

</style>
