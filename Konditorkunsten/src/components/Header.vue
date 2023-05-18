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

header {
    background: var(--secondary-bg-beige);
    color: var(--black);
    width: 100vw;
    height: 15vw;
    display: flex;
}

nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 0 10%;
    margin-right: 5%;
    font-size: 1.6vw;
    font-weight: bold;
}

nav>* {
    margin-top: 2.5vw;
    display: flex;
    align-items: center;
    text-decoration: none;
}

a {
    color: var(--black);
}

</style>
