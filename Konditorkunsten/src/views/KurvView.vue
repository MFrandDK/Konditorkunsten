<script setup>
import Header from '../components/Header.vue'
import ProductInfoCard from '../components/ProductInfoCard.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <body>
    <Header />
    <main class="kurvContainer">
      <section>
        <ProductInfoCard />
        <ProductInfoCard />
        <ProductInfoCard />
        <ProductInfoCard />
        <ProductInfoCard />
        <ProductInfoCard />
        <ProductInfoCard />
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

        <form action="action_page.php">
          <label for="forNavn">Dit navn</label>
          <input type="text" id="forNavn" name="firstName" placeholder="Dit navn" />

          <label for="telefonNummer">Telefonnummer</label>
          <input
            type="tel"
            id="telefonNummer"
            name="phoneNumber"
            placeholder="Dit telefonnummer"
          />

          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="E-mail" />

          <div class="btnContainer">
            <button class="shopVidereBtn">Shop videre</button>
            <input type="submit" name="submitButton" value="Udfør bestilling" class="bestillingBtn" Gå til bestilling />
          </div>
        </form>

        <p>Har du specielle ønsker?</p>
        <p>Så ring på dette nummer</p>
        <p>↓</p>
        <a class="removeListStyling" href="tel:+4522425320">+45 22 42 53 20</a>
      </section>
    </main>
    <Footer />
  </body>
</template>

<style scoped>
p {
  color: var(--black);
}

main {
  height: 70vw;
  width: 100%;
  display: flex;
}

.kurvContainer > section {
  width: 50vw;
  overflow-y: auto;
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

.checkOutContainer {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8vw;
  gap: 1.5vw 0;
  border-left: 0.1px solid var(--primary-bg-beige);
}

.totalPrisContainer {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 3vw 0 0 0;
  padding: 1.5vw 2.5vw;
  background-color: var(--second-bg-beige);
}

form {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5vw 0;
  margin-top: 3vw;
}

form>input {
  padding: 1vw;
  margin-bottom: 2vw;
}

.btnContainer {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 2vw 0;
  gap: 0 2vw;
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

.checkOutContainer > a {
  margin-top: 1vw;
  padding: 1vw;
  cursor: pointer;
  border: 1px solid var(--second-bg-beige);
  border-radius: 15px;
}
</style>
