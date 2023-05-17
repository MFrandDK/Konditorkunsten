<template>
    <header>
        <img src="../assets/pictures/logo-konditorkunsten.png" alt="">
        <nav>
            <RouterLink to="/">Forside</RouterLink>
            <RouterLink to="/about">Shop</RouterLink>
            <RouterLink to="/about">Kurser</RouterLink>
            <RouterLink to="/about">Om os</RouterLink>
            <RouterLink to="/about">Kontakt</RouterLink>
            <RouterLink to="/about"><img src="../assets/pictures/Shopping-kurv.svg" alt=""></RouterLink>
        </nav>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style scoped>
:root {
--primary-bg-beige: #E2D9D2;
--second-bg-beige: #E8E3DD;
--white: #FFFFFF;
--black: #000000;
--btn-brown: #9E7E6F;
--cta-brown: #382B25;
--cta-gold: #F0BD75;
--footer-bg-beige: #C9BFB6;
}

header {
    background: #E2D9D2;
    color: var(--black);
    width: 100vw;
    height: 15vw;
}

nav {
    width: 80%;
    display: flex;
    align-content: center;
    justify-content: space-evenly;
}

nav>* {
    height: 5vw;
    display: flex;
    align-items: center;
}

a {
    color: black;
}

</style>
