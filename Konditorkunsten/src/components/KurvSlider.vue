<template>
  <aside>
    <div class="titleAndIconContainer">
      <h1>Din kurv</h1>
      <img src="../assets/pictures/Shopping-kurv.svg" alt="Shopping kurv | Luk kurven" />
    </div>
    <section class="kurvContainer">
      <ProductInfoCard />
      <ProductInfoCard />
      <ProductInfoCard />
    </section>
    <section class="checkOutContainer">
      <div class="totalPrisContainer">
        <p>TOTAL</p>
        <p>135 KR</p>
      </div>
      <p>Varen afhentes og betales i butikken</p>
      <div class="btnContainer">
        <button class="shopVidereBtn">Shop videre</button>
        <button class="bestillingBtn">Gå til bestilling</button>
      </div>
      <p>Har du specielle ønsker?</p>
      <p>Så ring på dette nummer:</p>
      <a class="removeListStyling" href="tel:+4522425320">+45 22 42 53 20</a>
    </section>
  </aside>
</template>

<script>
import ProductInfoCard from './ProductInfoCard.vue';

export default {
  name: 'KurvSliderComponent',
  components: { ProductInfoCard }
}
</script>

<style scoped>
aside {
  position: absolute;
  height: 100vw;
  width: 40vw;
  background-color: var(--white);
  right: 0;
  color: var(--black);
  font-size: 1.2vw;
  border-left: 0.1px solid var(--btn-brown);
  border-bottom: 0.1px solid var(--btn-brown);
  overflow-y: scroll;
}

p {
  color: var(--black);
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 12px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(56, 43, 37, 100%);
  -webkit-box-shadow: 0 0 1px rgba(56, 43, 37, 100%);
}

.titleAndIconContainer {
  display: flex;
  justify-content: space-between;
  padding: 4vw;
  font-weight: 3vw;
  border-bottom: 0.1px solid var(--primary-bg-beige);
}
.titleAndIconContainer > * {
  font-size: 2.5vw;
  height: 4.5vw;
}
.titleAndIconContainer > h1 {
  padding: 1vw 0;
}

.kurvContainer {
  display: grid;
  justify-items: center;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-gap: 5vw 0;
}

button {
  height: 3vw;
  width: 12vw;
  background-color: var(--cta-brown);
  color: var(--white);
  border-style: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.5vw;
  margin-top: 2vw;
}

.checkOutContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.8vw;
  padding-bottom: 5vw;
}

.totalPrisContainer {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 2vw 0 1.5vw 0;
  padding: 1.5vw 2.5vw;
  background-color: var(--second-bg-beige);
}

.btnContainer {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2vw;
  margin-bottom: 4vw;
}

.shopVidereBtn {
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
.shopVidereBtn:hover {
  color: var(--cta-brown);
  background-color: var(--white);
  border: 1px solid var(--cta-brown);
  transition: .2s;
}

.bestillingBtn {
  height: 3.5vw;
  width: 15vw;
  background-color: var(--cta-gold);
  color: var(--white);
  border-style: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.5vw;
  cursor: pointer;
}
.bestillingBtn:hover {
  color: var(--cta-gold);
  background-color: var(--white);
  border: 1px solid var(--cta-gold);
  transition: .2s;
}

.checkOutContainer>a {
  margin-top: 1vw;
  padding: 1vw;
  cursor: pointer;
  border: 1px solid var(--second-bg-beige);
  border-radius: 15px;
}
</style>
