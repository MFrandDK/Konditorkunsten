<template>
  <header id="header">
    <router-link to="/"><img class="logo" src="../assets/pictures/logo-konditorkunsten.png" alt="Konditorkunstens logo" /></router-link>
    <nav>
      <RouterLink to="/forside">Forside</RouterLink>
      <RouterLink to="/">Shop</RouterLink>
      <RouterLink to="/kurser">Kurser</RouterLink>
      <RouterLink to="/om-os">Om os</RouterLink>
      <RouterLink to="/kontakt">Kontakt</RouterLink>
      <RouterLink class="kurv" to="/kurv"
        ><img
          class="kurvIcon"
          src="../assets/pictures/Shopping-kurv.svg"
          alt="Shopping kurv | Åben kurven" loading="lazy"
        />
        <p class="antalVarerCirkel" >{{ antalProdukterIKurven }}</p>
      </RouterLink>
    </nav>
  </header>
</template>



<script>
import { computed } from 'vue';
import { useCartStore } from '../stores/CartStore';

export default {
    name: "HeaderComponent",
    setup() {
      const cartStore = useCartStore();
      // Logikken nedenfor er lavet som computed, fordi Vue derved automatisk overvåger cartStore.count, og derved holder antallet opdateret.
      // Yderligere tilføjes "[cartStore.count]" for, at gøre "antalProdukterIKurven" afhænig af "[cartStore.count]" og derved genberegne "antalProdukterIKurven" øjeblikligt, hvis der sker en ændring i "[cartStore.count]"
      const antalProdukterIKurven = computed(() => {
        return cartStore.count;
      }, [cartStore.count]);
      return {
        antalProdukterIKurven,
      }
    }
}
</script>



<style scoped>

header {
  background-color: var(--primary-bg-beige);
  color: var(--black);
  width: 100%;
  height: 8vw;
  display: flex;
  border-bottom: .1px solid var(--btn-brown);
  position: sticky;
  top: 0;
  z-index: 1;
}

.logo {
  height: 100%;
}

nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 0 10%;
  margin-right: 5%;
  font-size: 1.5vw;
  font-weight: bold;
}

nav > * {
  display: flex;
  align-items: center;
  text-decoration: none;
}

a {
  color: var(--black);
}

a:hover {
  color: var(--white);
  scale: 1.2;
  transition: .2s;
}

.kurv {
  position: relative;
}

.kurvIcon {
  width: 2.5vw;
  cursor: pointer;
}
.kurvIcon:hover {
  filter: invert(100%) sepia(2%) saturate(208%) hue-rotate(73deg) brightness(116%) contrast(100%);
  transition: .2s;
}

.antalVarerCirkel {
  height: 2vw;
  width: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--cta-gold);
  border-radius: 100%;
  font-size: 1vw;
  position: absolute;
  margin: 0 0 1.5vw 1.6vw;
}
</style>
