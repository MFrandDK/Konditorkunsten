<template>
  <aside>
    <h1>Din kurv</h1>
  </aside>
</template>

<script>
export default {
  name: 'KurvSliderComponent'
}
</script>

<style scoped>
aside {
  position: absolute;
  height: 100%;
  width: 40%;
  background-color: var(--white);
  right: 0;
}

p {
  color: var(--black);
  font-size: 1.2vw;
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
