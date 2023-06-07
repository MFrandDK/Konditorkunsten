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
                <a rel="nofollow" target="_blank" href="https://www.facebook.com/people/konditorkunsten/100088804904557/"><i  class="fab fa-2x fa-facebook removeListStyling mobileSize" loading="lazy"></i></a>
                <a class="removeListStyling" rel="nofollow" target="_blank" href="https://www.instagram.com/konditorkunsten/?fbclid=IwAR2yCbD6OC76Wc9ptlHy88OO6IcO7FiKPc4G720ODnccT_7wuR9G3gP-CpA "><i class="fab fa-instagram removeListStyling" loading="lazy"></i></a>
                <a rel="nofollow" target="_blank" href="https://goo.gl/maps/zBkjTqeQsJyt5EvCA"><li><img  class="mapIcon" src="../assets/pictures/Map-icon.svg" alt="Smiley rapport" loading="lazy"></li></a>
            </ul>

            <ul>
                <li><h3>ÅBNINGSTIDER</h3></li>
                <li><p>Man, Tir, Ons: Lukket</p></li>
                <li><p>Tor, Fre: 11:00 - 20:00</p></li>
                <li><p>Lør, Søn: 8:00 - 20:00</p></li>
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
    height: auto;
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
    gap: 0 2vw;
    padding-left: 4vw;
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

.smileyIcon:hover,
.mapIcon:hover {
    filter: invert(100%) sepia(2%) saturate(208%) hue-rotate(73deg) brightness(116%) contrast(100%);
    transition: .2s;
}

a>*:hover {
    color: var(--white);
    transition: .2s;
}

.fa-instagram {
    border-radius: 100%;
    text-decoration: none;
    color: var(--footer-bg-beige);
    background-color: rgb(0,0,0);
    padding: 1.3vw;
    width: 1vw;
    height: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8vw;
}
.fa-instagram:hover {
    color: var(--footer-bg-beige);
    background-color: var(--white);
}

@media only screen and (max-width: 600px) {

footer {
    height: auto;
    font-size: 2.5vw;
}

.smileyIcon {
    width: 4.8vw;
}

.mapIcon {
    width: 3.8vw;
}

.mobileSize {
    font-size: 6vw;
}


.fa-instagram {
    padding: 3vw;
    width: 1.5vw;
    height: 1.5vw;
    font-size: 4vw;
}
}

</style>