// export interface Purchase {
//   productId: number;
//   quantity: number;
// }

// interface CartState {
//   contents: Record<string, Purchase>;
// }

import { defineStore } from 'pinia'
// import { useProductStore } from './ProductStore'

// Inspiration fundet fra følgende kilder: Vue School: "https://vueschool.io/lessons/getters-in-pinia", dette gitHub repository: "https://github.com/wobsoriano/vue-cart/blob/master/src/store/cart.ts" og denne StackOverflow tråd: "https://stackoverflow.com/questions/71557874/accessing-a-pinia-store-in-multiple-components"
export const useCartStore = defineStore('CartStore', {
  state: () => ({
    items: []
  }),

  getters: {
    // Test
    cartTotal(state) {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    cartItemCount(state) {
      return state.items.length
    },


    // Oprindelig
    count() {
      return this.items.length
    }
  },

  actions: {
    addItem(product) {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem(productId) {
      const index = this.items.findIndex(item => item.id === productId);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
    updateQuantity({ productId, quantity }) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart() {
      this.items = [];
    }
  }
  //   // Oprindelig
  //   actions: {
      //     addOneItem(count, item) {
          //       count = parseInt(count)
          
          //       for (let i = 0; i < count; i++) {
              //         this.items.push({ ...item })
              //       }
              //     },
              
              //     addItems(quantity, productId) {
//       quantity = parseInt(quantity)

//       for (let i = 0; i < quantity; i++) {
    //         this.items.push({ productId, quantity: 1 })
    //       }
    //     },
    
    //     removeOneItem(productId) {
        //       const index = this.items.findIndex((item) => item.productId === productId)
        //       if (index !== -1) {
            //         this.items.splice(index, 1)
            //       }
            //     },
            
            //     removeItems(quantity, productId) {
                //       quantity = parseInt(quantity)
                
                //       for (let i = 0; i < quantity; i++) {
                    //         const index = this.items.findIndex((item) => item.productId === productId)
                    //         if (index !== -1) {
                        //           this.items.splice(index, 1)
                        //         }
//       }
//     }
//   }
// })

})