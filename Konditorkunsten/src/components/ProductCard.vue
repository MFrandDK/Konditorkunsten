<template>
  
    <article class="singleProductContainer"  >
      <img :src="product.imageUrl" alt="" loading="lazy" />
      <article class="productInfo">
        <h3 >{{product.name}}</h3>
        <RouterLink :to="{ name: 'product', params: { id: product.id } }"><button class="cakeBtn">Se produkt</button></RouterLink>
      </article>
    </article>

  
</template>

<script>
export default {
  name: 'ProductInfoCardComponent',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
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
