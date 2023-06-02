<script setup>
  import { RouterView } from 'vue-router'
</script>



<template>
  <main>
    <RouterView />
  </main>
</template>



<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

main {
    font-family: 'lora', Serif;
    min-height: 100vh;
}

.lato {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
}

button {
    font-family: 'Lato', sans-serif;
}

:root {
--primary-bg-beige: #E2D9D2;
--second-bg-beige: #E8E3DD;
--white: #FFFFFF;
--black: #000000;
--btn-brown: #8a6758;
--cta-brown: #4e3428;
--cta-gold: #F0BD75;
--footer-bg-beige: #C9BFB6;
--red-remove: rgb(225, 52, 52);
--nav-active: #90552c;
}

:hover {
    translate: .3s ease;
}

p {
  color: var(--black);
} 

.removeListStyling {
    color: black;
    text-decoration: none;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

.fadeIn {
    animation: fadeIn .350ms ease-in-out;
}

.fadeOut {
    animation: fadeOut .5s ease;
}

@keyframes animateInFromTop {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.animateInFromRight {
    animation: animateInFromTop 1s ease-in-out;
}

@keyframes animateInFromTop {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.animateOutToRight {
    animation: animateInFromTop 1s ease-in-out;
}

</style>
