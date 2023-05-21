<template>
    <section>
        <article>
        <img src="../assets/pictures/Flødeboller.jpg" alt="Konditorkunstens flødeboller på et gyldent fad">
        <div>
            <h1>Mere end bare kage</h1>
            <br>
            <p>Hos Konditorkunsten laver vi ikke bare kage - vi laver oplevelser. Oplevelser du kan dele med dine nærmeste uanset anledningen. </p>
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
    name: "KontaktComponent"
}
</script>

<style scoped>

section {
    background: var(--primary-bg-beige);
    color: var(--black);
    width: 100vw;
    min-height: 55vw;
    padding: 3vw 4vw;
}

p {
    color: var(--black);
}

img {
    border-radius: 100%;
}

article:nth-child(1) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
}

article:nth-child(1)>div {
    text-align: center;
    margin: auto 0;
}

article:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
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
    border-radius: 15px;
    font-weight: bold;
}

</style>
