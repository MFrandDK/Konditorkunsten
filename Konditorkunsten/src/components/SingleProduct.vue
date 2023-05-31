<template>
  <section>
    <img
      src="../assets/pictures/ChokoladeCheesecake.jpg"
      alt="Lækker chokolade cheesecake med blide toner og en fyldig smag. Lavet på en bund af knust Oreo og pyntet med ristede peanuts."
    />
    <article>
      <h1 class="kageNavn">Kage navn</h1>
      <p class="kageBeskrivelse">
        Lækker chokolade cheesecake med blide toner og en fyldig smag. Lavet på en bund af knust
        Oreo og pyntet med ristede peanuts.
      </p>
      <div class="prisContainer">
        <p>PRIS</p>
        <p class="lato">73 KR</p>
      </div>
      <div class="antalContainer">
        <p>ANTAL</p>
        <div class="antalProdukterContainer">
          <a>-</a>
          <p class="antalProdukterBaggrund lato">1</p>
          <a>+</a>
        </div>
      </div>
      <button class="tilføjTilKurvBtn">Tilføj til kurv</button>
    </article>
  </section>
</template>

<script>
export default {
  name: 'SingleProduct'
}
</script>

<style scoped>
section {
  display: flex;
  gap: 0 10vw;
  margin: 8vw;
}

img {
  width: 30vw;
  border: 0.1px solid var(--second-bg-beige);
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

@media only screen and (max-width: 600px) {
  section {
    min-height: 70vw;
    gap: 0 8vw;
    margin: 5vw;
    align-items: center;
  }

  img {
    height: 55vw;
  }

  .kageNavn {
    font-size: 4vw;
  }

  .kageBeskrivelse {
    width: 45vw;
    font-size: 2.5vw;
  }

  .prisContainer {
    font-size: 3vw;
  }

  .antalContainer {
    font-size: 3vw;
  }

  .antalProdukterContainer {
    font-size: 3vw;
  }

  .tilføjTilKurvBtn {
    height: 6.5vw;
    width: 30vw;
    border-radius: 8px;
    font-size: 2.5vw;
  }
}
</style>
