import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {

    emptyCart: [],
    shopCart: []
  },
  /* setters: {
    setCartList: (state, items) => {
      state.shopCart.push(items)
    }
  }, */
  getters: {
    cartCount: state => {
      return state.shopCart.length
    },
    myCartList: state => {
      return state.shopCart
    }

  },
  mutations: {
    ADD_TO_CART: (state, item) => {
      state.shopCart.push(item)
    },
    DELETE_FROM_CART: (state, item) => {
      state.shopCart.splice(item, 1)
    },
    SET_CART_LIST: (state) => {
<<<<<<< Updated upstream
      state.shopCart = state.emptyCart
=======
      state.shopCart = []
>>>>>>> Stashed changes
    }
  },
  actions: {
  },
  plugins: [createPersistedState()]
})
