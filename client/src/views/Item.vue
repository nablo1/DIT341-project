<template>
    <div>
      <h1>{{item.name}} </h1>
      <h1>{{item._id}} </h1>
      <h3>{{item.price}} </h3>
      <img src="https://via.placeholder.com/150" alt="Item image">
      <div>
        <b-button @click="increase">+</b-button>
        <span>{{cart}}</span>
      <b-button @click="decrease">-</b-button>
      <button @click="storeInCart()"> Add to cart </button>
      </div>
      <div>
        <b-button v-if="checkEmp()" @click="deleteItem" variant="danger">Remove item from menu</b-button>
        <b-button v-if="checkEmp()" type="button" variant="outline-primary" :href="item._id + '/edit'">Edit item information</b-button>
      </div>
      <button @click="removeTemp()"> Remove temp </button>
    </div>
</template>

<script>

import { Api } from '@/Api'
const swal = require('sweetalert')

export default {
  name: 'item',
  created() {
    this.itemId = this.$route.params.id
  },
  mounted() {
    this.getItem()
  },
  methods: {
    getItem() {
      Api.get('/items/' + this.itemId)
        .then(response => {
          this.item = response.data
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          this.item = null
        })
        .then(() => {
        // This code is always executed (after success or error).
        })
    },
    increase() {
      this.cart += 1
      this.cartItems.push(this.itemId)
    },
    decrease() {
      if (this.cart > 0) {
        this.cart -= 1
      } else {
        this.cart = 0
      }
      this.cartItems.pop(this.itemId)
    },
    deleteItem(id) {
      Api.delete('/items/' + this.itemId)
        .then(response => {
          swal('Success', 'Item deleted', 'success')
          this.$router.push('/menu')
        })
        .catch(error => {
          console.log(error)
          swal('Error', 'Something Went Wrong', 'error')
        })
    },
    checkEmp() {
      if (localStorage.getItem('jwtemp') == null) {
        return false
      }
      return true
    },
    storeInCart() {
      var storageCart = JSON.parse(localStorage.getItem('cart')) || []
      storageCart.push(this.cartItems)
      localStorage.setItem('cart', JSON.stringify(storageCart))
    },
    removeTemp() {
      localStorage.removeItem('cart')
    }
  },
  data() {
    return {
      item: {},
      cart: 0,
      cartItems: []
    }
  }
}
</script>
