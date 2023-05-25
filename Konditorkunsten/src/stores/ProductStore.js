
import axios from 'axios'
import { defineStore } from 'pinia'

// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


export const useProductStore = defineStore('product', {
  state: () => ({
    
      products: [],
  }),
  getters: {
    getProducts(state) {
      return state.products
    }
  },
  actions: {
    // async fetchWooCommerceProducts() {
    //   try {
    //     const response = await api.get("products");
        
    //     return response;
        
    // } catch (error) {
    //     throw new Error (error);
    // }
    // }
    async fetchProducts() {
      try {
        const data = await axios.get('https://emil-jensen-portfolio.dk/wp-json/wc/v3/products')
        this.products = data.data
        console.log('fetch worked')
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }

})

