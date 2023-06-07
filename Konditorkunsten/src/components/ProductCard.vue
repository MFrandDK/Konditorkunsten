<template>
  
  <article class="singleProductContainer">
    <div class="imageContainer">
      <img :src="product.imageUrl" :alt="product.images[0].alt" loading="lazy" />
    </div>
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
border: .1px solid var(--primary-bg-beige);
background-color: var(--primary-bg-beige);
text-align: center;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
overflow: hidden;
}
.singleProductContainer:hover img{
scale: 1.1;
transition: .4s ease-in-out;
}

.imageContainer {
width: 100%;
height: 60%;
}

img {
width: 100%;
height: 100%;
object-fit: cover;
}

h3 {
font-size: 1.5vw;
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
border-radius: 10px;
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

@media only screen and (max-width: 600px) {
.singleProductContainer {
  height: 50vw;
  width: 35vw;
  border: .1px solid var(--primary-bg-beige);
  background-color: var(--primary-bg-beige);
  text-align: center;
}

.productInfo {
height: 35%;
}

h3 {
font-size: 3vw;
}

.cakeBtn {
height: 5.5vw;
width: 20vw;
font-size: 2.5vw;
border-radius: 8px;
}

}
</style>