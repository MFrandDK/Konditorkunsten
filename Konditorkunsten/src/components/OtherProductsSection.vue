<template>
  <section class="otherProductsContainer">
    <h1 class="itemOne">Andre kager</h1>

    <article class="singleProductContainer">
      <img src="../assets/pictures/ChokoladeCheesecake.jpg" alt="" loading="lazy" />
      <article class="productInfo">
        <h3>Kage navn</h3>
        <RouterLink to="/produkt"><button class="cakeBtn">Se produkt</button></RouterLink>
      </article>
    </article>

    <article class="singleProductContainer">
      <img src="../assets/pictures/ChokoladeCheesecake.jpg" alt="" loading="lazy" />
      <article class="productInfo">
        <h3>Kage navn</h3>
        <RouterLink to="/produkt"><button class="cakeBtn">Se produkt</button></RouterLink>
      </article>
    </article>

    <article class="singleProductContainer">
      <img src="../assets/pictures/ChokoladeCheesecake.jpg" alt="" loading="lazy" />
      <article class="productInfo">
        <h3>Kage navn</h3>
        <RouterLink to="/produkt"><button class="cakeBtn">Se produkt</button></RouterLink>
      </article>

    </article>
  </section>
</template>

<script>
export default {
  name: 'OtherProductsSection'
}
</script>

<style scoped>
.otherProductsContainer {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 0 8vw 0;
}

.itemOne {
  margin: 0 0 8vw 0;
  grid-column-start: 1;
  grid-column-end: 4;
  font-size: 2.5vw;
}

.singleProductContainer {
  height: 30vw;
  width: 20vw;
  background-color: var(--primary-bg-beige);
  text-align: center;
}

img {
  width: 100%;
  height: 60%;
}

.productInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 40%;
}

.cakeBtn {
  height: 3vw;
  width: 12vw;
  background-color: var(--btn-brown);
  color: var(--white);
  border-style: none;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.3vw;
  cursor: pointer;
}
.cakeBtn:hover {
  color: var(--cta-brown);
  background-color: var(--primary-bg-beige);
  border: 1px solid var(--cta-brown);
  transition: .2s;
}
</style>
