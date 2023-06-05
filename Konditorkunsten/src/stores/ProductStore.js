// pinia store for produkter fra woocommerce
import axios from 'axios' //anvender axios library for fetch requests
import { defineStore } from 'pinia'

// inspiration til brug af API via Pinia og axios fra https://blog.logrocket.com/consume-apis-vuex-pinia-axios/#consuming-apis-pinia-axios
export const useProductStore = defineStore('product', {
  state: () => ({

    products: [],
    productById: {},
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get('https://emil-jensen-portfolio.dk/wp-json/wc/v3/products', {
          params: {
            consumer_key: 'ck_d4c144288a9c1d5df1e9e268ecafda2f877f5b97',
            consumer_secret: 'cs_f4d0dabcd30ae9c69e7bf0797b9e645e53933e0b'
          }

        });
        //Product properties via https://woocommerce.github.io/woocommerce-rest-api-docs
        this.products = response.data.map(product => ({ //product images er et array som ligger inde i product array. .map operator skaber en kopi af product array
          ...product, //spread operator for at få adgang til product images
          imageUrl: product.images[0].src //product images gemmes i seperat variabel 
        }))
        // console.log(response.data) //console log til test af modtaget data.
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async fetchProductById(id) {
      try {
        const response = await axios.get(`https://emil-jensen-portfolio.dk/wp-json/wc/v3/products/${id}`, {
          params: {
            consumer_key: 'ck_d4c144288a9c1d5df1e9e268ecafda2f877f5b97',
            consumer_secret: 'cs_f4d0dabcd30ae9c69e7bf0797b9e645e53933e0b'
          }

        });
        const product = response.data;
        const updatedProducts = [...this.products];
        const index = updatedProducts.findIndex((p) => p.id === product.id);
        if (index !== -1) {
          updatedProducts[index] = {
            ...product,
            imageUrl: product.images[0].src
          };
        }
        this.products = updatedProducts;
        console.log(response.data)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },
  getters: {
    getProducts(state) {
      return state.products
    },
    getProductbyId: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    }
  },

})

