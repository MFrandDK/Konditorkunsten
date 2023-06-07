<template>
  <section>
    <img :src="product.images[0].src" :alt="product.images[0].alt" loading="lazy" />
    <article>
      <h1 class="kageNavn">{{ product.name }}</h1>
      <p class="kageBeskrivelse">{{ product.description }}</p>
      <div class="prisContainer">
        <p>PRIS</p>
        <p>{{ product.price }} KR</p>
      </div>
      <div class="antalContainer">
        <p>ANTAL</p>
        <div class="antalProdukterContainer">
          <a @click="decreaseQuantity">-</a>
          <p class="antalProdukterBaggrund">{{ quantity }}</p>
          <a @click="increaseQuantity">+</a>
        </div>
      </div>
      <button @click="addToCart(product)" class="tilføjTilKurvBtn">Tilføj til kurv</button>
    </article>
  </section>
</template>

<script>
import { useCartStore } from '@/stores/CartStore' 
import { ref } from 'vue'

export default {
  name: 'SingleProduct',
  props: {
    productId: {
      type: String,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
  },
  setup() {
    const cart = useCartStore()
    const quantity = ref(1)

    const decreaseQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--
      }
    }

    const increaseQuantity = () => {
      quantity.value++
    }

    const addToCart = (product) => {
      cart.addItems(quantity.value, product)
      console.log('Tilføj til kurv test:', product)
      console.log('Kurv indhold test:', cart)
    }

    return {
      quantity,
      decreaseQuantity,
      increaseQuantity,
      addToCart
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
  gap: 0 10vw;
  margin: 8vw;
}

img {
  height: 41vw;
  width: 30vw;
}

article {
  display: flex;
  flex-direction: column;
  gap: 2vw 0;
}

.kageNavn {
  font-size: 2.5vw;
}

.kageBeskrivelse {
  width: 30vw;
  font-size: 1.4vw;
}

.prisContainer {
  display: flex;
  justify-content: space-between;
  font-size: 1.5vw;
  margin: 3vw 0;
}

.antalContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5vw;
  margin: 3vw 0;
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

.tilføjTilKurvBtn {
  height: 3.5vw;
  width: 15vw;
  background-color: var(--btn-brown);
  color: var(--white);
  border-style: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.5vw;
  cursor: pointer;
}
.tilføjTilKurvBtn:hover {
  color: var(--cta-brown);
  background-color: var(--white);
  border: 1px solid var(--cta-brown);
  transition: 0.2s;
}
</style>
