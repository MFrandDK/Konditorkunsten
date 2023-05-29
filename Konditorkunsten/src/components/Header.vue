<template>
  <header id="header">
    <router-link to="/"
      ><img
        class="logo"
        src="../assets/pictures/logo-konditorkunsten.png"
        alt="Konditorkunstens logo"
    /></router-link>
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
      alt="Shopping kurv | Åben kurven"
      loading="lazy"
      />
      <p class="antalVarerCirkel">10</p>
    </RouterLink>
    <i class="fas fa-3x fa-bars hiddenOnDesktop"
      @click=""
    ></i>
    <i class="fas fa-4x fa-times hiddenOnDesktop hiddenUntilActive"></i>
  </nav>
</header>
<BurgerMenu class="" />
</template>

<script>
// import { ref } from "vue";
// import { useCartStore } from '../stores/CartStore';
// const cartStore = useCartStore();

import BurgerMenu from './BurgerMenu.vue'

export default {
  name: 'HeaderComponent',
  components: { BurgerMenu }
}
</script>

<style scoped>
header {
  background-color: var(--primary-bg-beige);
  color: var(--black);
  width: 100%;
  height: 8vw;
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
  gap: 0 10%;
  margin-right: 5%;
  font-size: 1.5vw;
  font-weight: bold;
  font-weight: 700;
}

nav > * {
  display: flex;
  align-items: center;
  text-decoration: none;
}

a {
  color: var(--black);
}

nav > a:hover {
  color: var(--white);
  scale: 1.2;
  transition: 0.2s;
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
    position: absolute;
    top: normal;
    z-index: 0;
  }

  .hiddenOnDesktop {
    display: block;
    font-size: 5vw;
  }

  .hiddenUntilActive {
    display: none;
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
  
}
</style>
