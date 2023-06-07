<template>
  <section>
    <article>
      <img
        src="../assets/pictures/Flødeboller.jpg"
        alt="Konditorkunstens flødeboller på et gyldent fad"
        loading="lazy"
      />
      <div class="introText">
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
      <a href="https://www.emil-jensen-portfolio.dk/kontakt-konditorkunsten/"><button>Kontakt</button></a>
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
  padding: 1vw 4vw;
}

img {
  border-radius: 100%;
  width: 40vw;
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

h2 {
    font-size: 2vw;
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
  padding: 8vw 0;
  gap: 1.5vw 0;
}

.centerText {
  text-align: center;
}

button {
  height: 3.5vw;
  width: 15vw;
  background-color: var(--cta-brown);
  color: var(--white);
  border-style: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.5vw;
  margin-top: 2vw;
  cursor: pointer;
}
button:hover {
  color: var(--cta-brown);
  background-color: var(--secondary-bg-beige);
  border: 1px solid var(--cta-brown);
  transition: 0.2s;
}

@media only screen and (max-width: 600px) {
  article:nth-child(1) {
    display: flex;
    flex-direction: column-reverse;
    padding-top: 8vw;
    gap: 5vw;
    align-items: center;
  }

  h1 {
    font-size: 5vw;
  }

  p {
    font-size: 2.5vw;
  }

  article:nth-child(2) {
  padding: 6vw 0 10vw 0;
}

  img {
    width: 55vw;
  }

  h2 {
    font-size: 4vw;
  }

  button {
    height: 8.5vw;
    width: 30vw;
    font-size: 3.5vw;
    margin-top: 5vw;
  }
}
</style>