<template>
    <footer>
        <nav>
            <ul>
                <li><h3>KONTAKT</h3></li>
                <li><p>+45 7325 8376</p></li>
            </ul>

            <ul>
                <li><img class="smileyIcon" src="../assets/pictures/Smiley-icon.svg" alt="Smiley rapport"></li>
                <i class="fab fa-2x fa-facebook-f"></i>
                <i class="fab fa-2x fa-instagram"></i>
                <li><img class="mapIcon" src="../assets/pictures/Map-icon.svg" alt="Smiley rapport"></li>
            </ul>

            <ul>
                <li><h3>ÅBNINGSTIDER</h3></li>
                <li><p>07 - 16</p></li>
                <li><p>(10 - 14)</p></li>
            </ul>
        </nav>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent"
}
</script>

<style scoped>

footer {
    background: var(--footer-bg-beige);
    color: var(--black);
    width: 100vw;
    height: auto;
    padding: 3vw 4vw;
    border-top: .1px solid var(--btn-brown);
}

p {
    color: var(--black);
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

nav>* {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
}

ul {
    gap: .5vw;
}

ul:nth-child(2) {
    display: flex;
    flex-direction: row;
    gap: 0 2.5vw;
}

.smileyIcon {
    width: 2.2vw;
    margin-right: 1.5vw;
}

.mapIcon {
    width: 1.6vw;
    margin: 0 0 .2vw 1.5vw ;
}




</style>
