<template>
  <section>
    <article>
      <img
        src="../assets/pictures/Flødeboller.jpg"
        alt="Konditorkunstens flødeboller på et gyldent fad"
      />
      <div>
        <h1>Mere end bare kage</h1>
        <br />
        <p>
          Hos Konditorkunsten laver vi ikke bare kage - vi laver oplevelser. Oplevelser du kan dele
          med dine nærmeste uanset anledningen.
        </p>
      </div>
    </article>

    <article class="centerText">
      <h2>Har du en kommende speciel anledning?</h2>
      <p>Klik her for at komme i kontakt</p>
      <button>Kontakt</button>
    </article>
  </section>
</template>

<script>
export default {
  name: 'KontaktComponent'
}
</script>

<style scoped>
p {
  color: var(--black);
  font-size: 1.2vw;
}


section {
  background: var(--primary-bg-beige);
  color: var(--black);
  padding: 3vw 4vw;
}

img {
  border-radius: 100%;
}

article:nth-child(1) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  padding-top: 5vw;
}

article:nth-child(1) > div {
  text-align: center;
  margin: auto 0;
}

h1 {
  font-size: 3vw;
}

article:nth-child(1) > div > p {
    margin: 0 auto;
    width: 80%;
}

article:nth-child(2) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7.5vw 0;
  gap: 1.5vw 0;
}

.centerText {
  text-align: center;
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
</style>
