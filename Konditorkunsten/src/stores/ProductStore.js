
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
        const data = await axios.get('https://emil-jensen-portfolio.dk/wp-json/wc/v3/products?consumer_key=ck_d4c144288a9c1d5df1e9e268ecafda2f877f5b97&consumer_secret=cs_f4d0dabcd30ae9c69e7bf0797b9e645e53933e0b')
        this.products = data.data
        console.log(data.data)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }

})

