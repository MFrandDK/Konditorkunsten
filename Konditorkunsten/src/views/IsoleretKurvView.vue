<script setup>
import { computed } from 'vue'

const cartItems = computed(() => {
  return [
    { id: 1, product: { id: 1, name: 'Product 1' } },
    { id: 2, product: { id: 2, name: 'Product 2' } },
    { id: 3, product: { id: 1, name: 'Product 1' } },
    { id: 4, product: { id: 3, name: 'Product 3' } },
    { id: 5, product: { id: 2, name: 'Product 2' } },
    { id: 5, product: { id: 2, name: 'Product 2' } },
    { id: 5, product: { id: 2, name: 'Product 2' } },
    { id: 5, product: { id: 2, name: 'Product 2' } },
  ]
})

const identicalCartItems = computed(() => {
  const identicalItems = []
  cartItems.value.forEach((item) => {
    const existingItem = identicalItems.find(
      (identicalItem) => identicalItem.product.id === item.id
    )
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      identicalItems.push({ product: item.product, quantity: 1 })
    }
  })
  return identicalItems
});
</script>

<template>
  <div>
    <div v-for="(item, index) in identicalCartItems" :key="index">
      <p>Product: {{ item.product.name }}, Quantity: {{ item.quantity }}</p>
    </div>
  </div>
</template>
