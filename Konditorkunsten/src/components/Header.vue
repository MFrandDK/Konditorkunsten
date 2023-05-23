<template>
  <header id="header">
    <img src="../assets/pictures/logo-konditorkunsten.png" alt="Konditorkunstens logo" />
    <nav>
      <RouterLink to="/">Forside</RouterLink>
      <RouterLink to="/about">Shop</RouterLink>
      <RouterLink to="/about">Kurser</RouterLink>
      <RouterLink to="/about">Om os</RouterLink>
      <RouterLink to="/about">Kontakt</RouterLink>
      <RouterLink class="kurv" to="/about"
        ><img
          class="kurvIcon"
          src="../assets/pictures/Shopping-kurv.svg"
          alt="Shopping kurv | Gå til kurven"
        />
        <p class="antalVarerCirkel">10</p></RouterLink
      >
    </nav>
  </header>
</template>



<script>
// import { ref } from "vue";
// import { useCartStore } from '../stores/CartStore';
// const cartStore = useCartStore();

export default {
    name: "HeaderComponent",

    // setup() {
    //     window.onscroll = function() {StickyOnScroll()};
    //     const header = document.getElementById("headerTag");
    //     let sticky = header.offsetTop;

    //     function StickyOnScroll() {
    //         if (window.pageYOffset > sticky) {
    //             header.classList.add("positionSticky")
    //         } else {
    //             header.classList.remove("positionSticky");
    //         }
    //     }
    // }
}
</script>



<style scoped>

header {
  background-color: var(--primary-bg-beige);
  color: var(--black);
  width: 100vw;
  height: 12vw;
  display: flex;
  border-bottom: .1px solid var(--btn-brown);
  position: sticky;
  top: 0;
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
  margin-top: 2.5vw;
  display: flex;
  align-items: center;
  text-decoration: none;
}

a {
  color: var(--black);
}

.kurv {
  position: relative;
}

.kurvIcon {
  width: 2.5vw;
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
