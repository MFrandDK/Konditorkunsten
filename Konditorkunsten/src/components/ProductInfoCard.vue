<template>
    <article class="productContainer">
        <h3>Kage navn</h3>
        <div class="innerProductContainer">
            <img src="../assets/pictures/ChokoladeCheesecake.jpg" alt="" loading="lazy">
            <article class="infoContainer">
                <div>
                    <p>PRIS</p>
                    <p class="lato">73 KR</p>
                </div>
                <div class="lineBreak"></div>
                <div>
                    <p>ANTAL</p>
                    <div class="antalProdukterContainer">
                        <a>-</a>
                        <p class="antalProdukterBaggrund lato">1</p>
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
    padding: 3vw;
    border-bottom: 2px solid var(--primary-bg-beige);
    color: var(--black);
}

h3 {
    font-size: 2.5vw;
    font-weight: normal;
    margin: 2vw 0;
}

.innerProductContainer{
    display: flex;
}

img {
    width: 45%;
    margin-right: 1vw;
    border: .1px solid var(--second-bg-beige);
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
    border-bottom: .1px solid var(--second-bg-beige);
}

.antalProdukterContainer {
    font-size: 1.8vw;
    display: flex;
    gap: 0 1vw;
}
.antalProdukterContainer>a:hover {
    scale: 1.3;
    cursor: pointer;
    transition: .2s;
}
.antalProdukterBaggrund {
    background-color: var(--second-bg-beige);
    text-align: center;
    min-width: 5vw;
    border-radius: 15px;
}

.fjernProduktKnap {
    margin-left: 92.5%;
    text-decoration: underline;
    padding: 1vw 0;
    cursor: pointer;
    font-size: 1vw;
}
.fjernProduktKnap:hover {
    color: var(--red-remove);
    transition: .2s;
}
</style>
