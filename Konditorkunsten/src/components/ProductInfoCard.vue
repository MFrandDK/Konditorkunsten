<template>
    <!-- Nedenfor benyttes v-if, for at kontrollere om productInfo er defineret -->
  <article v-if="productInfo" class="productContainer">
    <h3>{{ productInfo.name }}</h3>
    <div class="innerProductContainer">
      <img
        :src="productInfo.images[0].src"
        :alt="productInfo.images[0].alt"
        loading="lazy"
      />
      <article class="infoContainer">
        <div>
          <p>PRIS</p>
          <p>{{ productInfo.price }} KR</p>
        </div>
        <div class="lineBreak"></div>
        <div>
          <p>ANTAL</p>
          <div class="antalProdukterContainer">
            <a @click="decreaseQuantity">-</a>
            <p class="antalProdukterBaggrund">{{ quantity }}</p>
            <a @click="increaseQuantity">+</a>
          </div>
        </div>
      </article>
    </div>
    <a class="fjernProduktKnap">FJERN</a>
  </article>
</template>

<script>
import { ref } from 'vue'

const ProductInfoCard = {
  name: 'ProductInfoCard',
  props: {
    productInfo: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const quantity = ref(1)

    console.log('ProductInfoCard - Product Info:', props.productInfo)
    console.log('ProductInfoCard - Quantity:', quantity.value)

    const decreaseQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--
      }
    }

    const increaseQuantity = () => {
      quantity.value++
    }

    return {
      quantity,
      decreaseQuantity,
      increaseQuantity
    }
  }
}

export default ProductInfoCard
</script>

<style scoped>
.productContainer {
  width: 100%;
  padding: 1.5vw;
  border-bottom: 0.1px solid var(--primary-bg-beige);
  color: var(--black);
}

h3 {
  font-size: 2vw;
  font-weight: normal;
  margin-bottom: 1vw;
}

.innerProductContainer {
  display: flex;
}

img {
  width: 45%;
  margin-right: 1vw;
}

.infoContainer {
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.infoContainer > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5vw;
}

.lineBreak {
  border-bottom: 0.1px solid var(--primary-bg-beige);
}

.antalProdukterContainer {
  font-size: 1.8vw;
  display: flex;
  gap: 0 1vw;
}
.antalProdukterContainer > a:hover {
  scale: 1.3;
  cursor: pointer;
  transition: 0.2s;
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
  transition: 0.2s;
}
</style>
