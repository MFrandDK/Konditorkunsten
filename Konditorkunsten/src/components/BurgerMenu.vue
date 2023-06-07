<template>
  <nav class="navBar">
    <RouterLink to="/forside">Forside</RouterLink>
    <RouterLink to="/">Shop</RouterLink>
    <RouterLink to="/kurser">Kurser</RouterLink>
    <RouterLink to="/om-os">Om os</RouterLink>
    <RouterLink to="/kontakt">Kontakt</RouterLink>
    <RouterLink class="kurv" to="/kurv"
      ><img
        class="kurvIcon"
        src="../assets/pictures/Shopping-kurv.svg"
        alt="Shopping kurv | Åben kurven"
        loading="lazy"
      />
      <p class="antalVarerCirkel">{{ antalProdukterIKurven }}</p>
    </RouterLink>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useCartStore } from '../stores/CartStore';


export default {
  name: 'BurgerMenuCompontent',
    setup() {
      const cartStore = useCartStore();
      // Logikken nedenfor er lavet som computed, fordi Vue derved automatisk overvåger cartStore.count, og derved holder antallet opdateret.
      // Yderligere tilføjes "[cartStore.count]" for, at gøre "antalProdukterIKurven" afhænig af "[cartStore.count]" og derved genberegne "antalProdukterIKurven" øjeblikligt, hvis der sker en ændring i "[cartStore.count]"
      // Inspiration fundet her: "https://stackoverflow.com/questions/40522634/can-i-pass-parameters-in-computed-properties-in-vue-js"
      const antalProdukterIKurven = computed(() => {
        return cartStore.count;
      }, [cartStore.count]);
      return {
        antalProdukterIKurven,
      }
    },

  data() {
    return {
      showBurgerMenu: false
    }
  }

};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .navBar {
    height: 100vh;
    position: relative;
    z-index: 2;
    padding-bottom: 45vw;
    background-color: var(--second-bg-beige);
    font-size: 5vw;
    flex-direction: column;
    justify-content: space-evenly;
  }

  a {
    color: var(--cta-brown);
    text-decoration: none;
  }

  .kurvIcon {
    width: 8vw;
    cursor: pointer;
    filter: invert(8%) sepia(13%) saturate(2610%) hue-rotate(335deg) brightness(96%) contrast(89%);
  }
  .kurvIcon:hover {
    filter: invert(100%) sepia(2%) saturate(208%) hue-rotate(73deg) brightness(116%) contrast(100%);
    transition: 0.2s;
  }

  .antalVarerCirkel {
    height: 6vw;
    width: 6vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--cta-gold);
    border-radius: 100%;
    font-size: 4vw;
    position: absolute;
    margin: -10vw 0 0 6vw;
  }
}
</style>