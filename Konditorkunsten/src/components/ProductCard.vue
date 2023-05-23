<template>
    <article class="singleProductContainer">
        <img src="../assets/pictures/logo-konditorkunsten.png" alt="">
        <article class="productInfo">
            <h3>Kage navn</h3>
            <button>Se produkt</button>
        </article>
    </article>
</template>

<script>
export default {
    name: "ProductCardComponent"
}
</script>

<style scoped>
.singleProductContainer {
    width: 20vw;
    background-color: var(--primary-bg-beige);
    text-align: center;
}

img {
    width: 100%;
    height: 55%;
}

button {
    height: 3vw;
    width: 10vw;
    background-color: var(--btn-brown);
    color: var(--white);
    border-style: none;
    border-radius: 15px;
    font-weight: bold;
    font-size: 1.2vw;
}

h3 {
    font-weight: normal;
}

.productInfo {
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35% 0;
}

</style>
