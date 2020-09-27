<template>
    <div>
      <h3> {{item.name}} </h3>
      <h5> {{item.price}} SEK </h5>
      <img src="https://via.placeholder.com/150" alt="Item image">
      <div>
        <b-button @click="addToCart">+</b-button>
        <span>{{cart}}</span>
      <b-button @click="removeFromCart">-</b-button>
      </div>
      <div>
        <b-button @click="deleteItem" v-if="Employee" variant="danger">Remove item from menu</b-button>
        <b-button v-if="Employee" variant="success">Edit item information</b-button>
      </div>
    </div>
</template>

<script>

import { Api } from '@/Api'

export default {
  name: 'item',
  created() {
    this.itemId = this.$route.params.id
  },
  mounted() {
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
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1
      } else {
        this.cart = 0
      }
    },
    deleteItem(id) {
      Api.delete('/items/' + this.itemId)
        .then(response => {
          console.log(response.data.message)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  data() {
    return {
      item: null,
      cart: 0,
      Employee: true
    }
  }
}
</script>
