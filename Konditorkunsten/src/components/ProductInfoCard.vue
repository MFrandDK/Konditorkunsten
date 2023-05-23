<template>
    <article class="productContainer">
        <h3>Kage navn</h3>
        <div class="innerProductContainer">
            <img src="../assets/pictures/logo-konditorkunsten.png" alt="" loading="lazy">
            <article class="infoContainer">
                <div>
                    <p>PRIS</p>
                    <p>73 KR</p>
                </div>
                <div class="lineBreak"></div>
                <div>
                    <p>ANTAL</p>
                    <div class="antalProdukterContainer">
                        <a>-</a>
                        <p class="antalProdukter">1</p>
                        <a>+</a>
                    </div>
                </div>
            </article>
        </div>
        <a class="fjernProduktKnap">FJERN</a>
    </article>
</template>

<script>
export default {
    name: "ProductCardComponent"
}
</script>

<style scoped>
.productContainer {
    width: 100%;
    padding: 1.5vw;
    border-bottom: .1px solid var(--primary-bg-beige);
    color: var(--black);
}

h3 {
    font-size: 2vw;
    font-weight: normal;
    margin-bottom: 1vw;
}

.innerProductContainer{
    display: flex;
}

img {
    width: 45%;
    margin-right: 1vw;
}

p{
    color: var(--black);
}

.infoContainer {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.infoContainer>div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5vw;
}

.lineBreak {
    border-bottom: .1px solid var(--primary-bg-beige);
}

.antalProdukterContainer {
    font-size: 1.8vw;
    display: flex;
    gap: 0 1vw;
}

.antalProdukter {
    background-color: var(--second-bg-beige);
    text-align: center;
    width: 5vw;
    border-radius: 15px;
}

.fjernProduktKnap {
    display: flex;
    flex-direction: row-reverse;
    text-decoration: underline;
    padding: 1vw 0;
    cursor: pointer;
}
</style>
