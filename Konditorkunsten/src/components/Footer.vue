<template>
    <footer>
        <nav>
            <ul>
                <a class="removeListStyling" href="tel:+4522425320">
                    <li><h3>KONTAKT</h3></li>
                    <li>+45 22 42 53 20</li>
                </a>
            </ul>

            <ul>
                <a rel="nofollow" target="_blank" href="https://www.findsmiley.dk/1271351"><li><img class="smileyIcon" src="../assets/pictures/Smiley-icon.svg" alt="Smiley rapport" loading="lazy"></li></a>
                <a rel="nofollow" target="_blank" href="https://www.facebook.com/people/konditorkunsten/100088804904557/"><i  class="fab fa-2x fa-facebook-f removeListStyling" loading="lazy"></i></a>
                <a rel="nofollow" target="_blank" href="https://www.instagram.com/konditorkunsten/?fbclid=IwAR2yCbD6OC76Wc9ptlHy88OO6IcO7FiKPc4G720ODnccT_7wuR9G3gP-CpA "><i class="fab fa-2x fa-instagram removeListStyling" loading="lazy"></i></a>
                <a rel="nofollow" target="_blank" href="https://goo.gl/maps/zBkjTqeQsJyt5EvCA"><li><img  class="mapIcon" src="../assets/pictures/Map-icon.svg" alt="Smiley rapport" loading="lazy"></li></a>
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
    height: 10vw;
    /* width: 100%; */
    padding: 2vw 4vw;
    border-top: .1px solid var(--btn-brown);
    font-size: 1.25vw;
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
    text-align: center;
}

ul:nth-child(1)>a>li {
    margin-bottom: .5vw;
}

ul:nth-child(2) {
    display: flex;
    flex-direction: row;
}

.smileyIcon {
    width: 2.2vw;
    margin-right: 1.5vw;
    cursor: pointer;
}

.mapIcon {
    width: 1.6vw;
    margin: 0 0 .2vw 1.5vw ;
    cursor: pointer;
}

a>*:hover {
    color: var(--white);
}


</style>
