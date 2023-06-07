<template>
  <section>
    <div class="imageContainer">
      <img :src="product.images[0].src" :alt="product.images[0].alt" loading="lazy" />
    </div>
    <article>
      <h1 class="kageNavn">{{ product.name }}</h1>
      <p class="kageBeskrivelse" v-html="product.description"></p>
      <div class="prisContainer">
        <p>PRIS</p>
        <p class="lato">{{ product.price }} KR</p>
      </div>
      <div class="antalContainer">
        <p>ANTAL</p>
        <div class="antalProdukterContainer">
          <a @click="decreaseQuantity">-</a>
          <p class="antalProdukterBaggrund">{{ quantity }}</p>
          <a @click="increaseQuantity">+</a>
        </div>
      </div>
      <div class="mobileButtons">
        <div class="mobileSpacer"></div>
        <button @click="addToCart(product)" class="tilføjTilKurvBtn">Tilføj til kurv</button>
        <div class="mobileSpacer"></div>
        <RouterLink class="removeListStyling" to="/kurv"><button class="gåTilKurvBtn">Gå til kurv</button></RouterLink>
      </div>
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

.imageContainer {
  height: 36vw;
  width: 36vw;
  border: 0.1px solid var(--second-bg-beige);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  justify-items: center;
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

.gåTilKurvBtn {
  display: none;
}

.mobileSpacer {
  display: none;
}

@media only screen and (max-width: 600px) {
  section {
    min-height: 70vw;
    gap: 10vw 0vw;
    margin: 5vw;
    align-items: center;
    flex-direction: column;
  }

  .imageContainer {
    height: 50vw;
    width: 50vw;
    border: 0.1px solid var(--second-bg-beige);
  }

  .picture > img {
    object-fit: contain;
    width: 100%;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 3vw 0;
  }

  .kageNavn {
    font-size: 5vw;
  }

  .kageBeskrivelse {
    width: 45vw;
    font-size: 2.5vw;
  }

  .prisContainer {
    font-size: 3.5vw;
  }

  .antalContainer {
    font-size: 3.5vw;
  }

  .antalProdukterContainer {
    font-size: 3.5vw;
    gap: 0 3vw;
  }

  .antalProdukterContainer > a,
  .antalProdukterContainer > p {
    font-size: 4.2vw;
  }

  .mobileButtons {
    display: flex;
    justify-content: space-between;
  }

  .mobileSpacer {
    display: block;
    padding: 0.5vw;
  }

  .tilføjTilKurvBtn {
    height: 8.5vw;
    width: 30vw;
    font-size: 3.5vw;
    margin: 0 auto;
  }

  .gåTilKurvBtn {
    display: block;
    height: 8.5vw;
    width: 30vw;
    font-size: 3.5vw;
    margin-top: 5vw;
    margin: 0 auto;
    background-color: var(--cta-gold);
    color: var(--white);
    border-style: none;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  .gåTilKurvBtn:hover {
    color: var(--cta-gold);
    background-color: var(--white);
    border: 1px solid var(--cta-gold);
    transition: 0.2s;
  }
}
</style>