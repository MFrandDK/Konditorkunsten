<template>
  <header id="header"
  @wheel.prevent @touchmove.prevent @scroll.prevent >
    <a href="https://www.emil-jensen-portfolio.dk/"
      ><img
        class="logo"
        src="../assets/pictures/logo-konditorkunsten.png"
        alt="Konditorkunstens logo"
    /></a>
    <nav>
      <a href="https://www.emil-jensen-portfolio.dk/">Forside</a>
      <RouterLink to="/">Shop</RouterLink>
      <a href="https://www.emil-jensen-portfolio.dk/kurser/">Kurser</a>
      <a href="https://www.emil-jensen-portfolio.dk/kontakt-konditorkunsten/">Om os</a>
      <a href="https://www.emil-jensen-portfolio.dk/kontakt-konditorkunsten/">Kontakt</a>
      <RouterLink class="kurv" to="/kurv"
        ><img
          class="kurvIcon"
          src="../assets/pictures/Shopping-kurv.svg"
          alt="Shopping kurv | Åben kurven"
          loading="lazy"
        />
        <p class="antalVarerCirkel" >{{ antalProdukterIKurven }}</p>
      </RouterLink>

      <!-- Inspiration til burger-menu:
      "https://codepen.io/ysk2645/pen/wvBabpe?editors=1100" -->
      <button
        id="brugerMenuBtn"
        class="hiddenOnDesktop burgerMenuBtn"
        @click="showBurgerMenu = !showBurgerMenu"
        :class="{ active: showBurgerMenu }"
      >
        <span class="topSpan"></span>
        <span class="midSpan"></span>
        <span class="bottomSpan"></span>
      </button>
    </nav>
  </header>
  <!-- Inspiration til at deaktivere scroll på component:
  "https://stackoverflow.com/questions/56739111/prevent-scrolling-in-vuejs" -->
  <BurgerMenu v-show="showBurgerMenu" @wheel.prevent @touchmove.prevent @scroll.prevent />
</template>

<script>
import { computed } from 'vue';
import { useCartStore } from '../stores/CartStore';

import BurgerMenu from './BurgerMenu.vue'

export default {
    name: "HeaderComponent",
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
  components: { BurgerMenu },

  data() {
    return {
      showBurgerMenu: false
    }
  }

}
</script>

<style scoped>
header {
  background-color: var(--primary-bg-beige);
  color: var(--black);
  width: 100%;
  height: 9.5vw;
  display: flex;
  border-bottom: 0.1px solid var(--btn-brown);
  position: absolute;
  position: sticky;
  top: 0;
  z-index: 1;
}

.hiddenOnDesktop {
  display: none;
}

.logo {
  height: 9vw;
  margin-left: 2vw;
}

nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 0 9%;
  margin-right: 5%;
  font-size: 1.4vw;
  font-weight: bold;
  font-weight: 700;
  font-family: 'lora', serif;
}

nav > * {
  display: flex;
  align-items: center;
  text-decoration: none;
}

a {
  color: var(--cta-brown);
}

.router-link-active {
  color: var(--btn-brown);
}

nav > a:hover {
  color: var(--nav-active);
  scale: 1.2;
  transition: 0.2s;
}

.kurv {
  position: relative;
}

.kurvIcon {
  width: 2.5vw;
  cursor: pointer;
  filter: invert(8%) sepia(13%) saturate(2610%) hue-rotate(335deg) brightness(96%) contrast(89%);
}
.kurvIcon:hover {
  filter: invert(100%) sepia(2%) saturate(208%) hue-rotate(73deg) brightness(116%) contrast(100%);
  transition: 0.2s;
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

@media only screen and (max-width: 600px) {
  header {
    height: 14vw;
    /* position: absolute; */
    position: static;
    top: normal;
    z-index: 0;
  }

  .hiddenOnDesktop {
    display: block;
    font-size: 5vw;
  }

  .active {
    display: block;
  }

  .logo {
    height: 15vw;
  }

  nav {
    align-items: center;
    width: 100vw;
  }

  nav > a {
    display: none;
  }

  .burgerMenuBtn {
    height: 6vw;
    width: 5.5vw;
    display: grid;
    visibility: visible;
    left: 0;
    font-size: 8vw;
    position: relative;
  }

  .topSpan,
  .midSpan,
  .bottomSpan {
    background-color: var(--cta-brown);
    height: 0.7vw;
    /* width: 50%; */
    margin: 0 auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    position: absolute;
    transition: transform 350ms ease-in-out, opacity 80ms linear;
  }

  .topSpan {
    top: 10%;
  }
  .midSpan {
    top: 43%;
  }

  .bottomSpan {
    top: 76%;
  }

  .burgerMenuBtn.active > .topSpan {
    transform: rotate(-45deg) translateY(1.2vw) translateX(-1vw);
    /* width: 35%; */
    border-radius: 8px;
  }
  .burgerMenuBtn.active > .midSpan {
    transform: rotate(90deg);
    opacity: 0;
  }
  .burgerMenuBtn.active > .bottomSpan {
    transform: rotate(45deg) translateY(-1.2vw) translateX(-1vw);
    /* width: 35%; */
    border-radius: 8px;
  }
}
</style>