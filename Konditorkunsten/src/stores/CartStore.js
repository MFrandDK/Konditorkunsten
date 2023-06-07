// get reactive state on pageload  when using fetch with pinia https://github.com/vuejs/pinia/discussions/1078
import { defineStore } from 'pinia'

export const useCartStore = defineStore('CartStore', {
  state: () => {
    return {
      cartItems: []
    }
  },

  actions: {
    addItems(count, cartItem) {
      count = parseInt(count)

      for (let i = 0; i < count; i++) {
        this.cartItems.push(cartItem)
      }
    },
    removeProduct(productId) {
      // Find the index of the product in the cart
      const index = this.cartItems.findIndex((item) => item.productId === productId);

      if (index !== -1) {
        // Remove the product from the cartItems array
        this.cartItems.splice(index, 1);
      }
    }
    // removeItem(productId) {
    //   const index = this.cartItems.findIndex(cartItem => cartItem.product.id === productId);
    //     console.log("klik test 1", productId)
    //   if (index !== -1) {
    //         console.log("klik test 2", productId)
    //     this.cartItems.splice(index, 1);
    //   }
    // }
  },

  getters: {
    count() {
      return this.cartItems.length
    },

    // Inspiration til total pris funktionen er fundet her: "https://javascript.plainenglish.io/how-to-sum-total-shoppingcart-from-array-of-object-properties-with-javascript-reduce-method-12a4f75ea2c3"
    cartTotalPrice() {
      return this.cartItems.reduce((cartTotal, cartItem) => {
        return cartTotal + parseInt(cartItem.price)
      }, 0)
    }
  }
})