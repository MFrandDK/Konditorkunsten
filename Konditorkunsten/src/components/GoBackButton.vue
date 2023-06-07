<!-- Inspiration fundet her: "https://vueschool.io/lessons/go-back?friend=vuerouter" -->
<template>
    <span class="goBack">
        <button @click="$router.back()">←</button>
    </span>
</template>

<script>
export default {
  name: 'GoBackButton'
}
</script>

<style scoped>
button {
  padding: 2vw;
  font-size: 3vw;
  border-style: none;
  background-color: rgba(255, 255, 255, 0);
  color: var(--cta-brown);
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

button:hover {
  cursor: pointer;
  scale: 1.25;
  transition: .4s ease-in-out;
  color: var(--btn-brown);
}
</style>