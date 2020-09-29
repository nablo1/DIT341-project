<template>
    <div>
      <h1>{{item.name}} </h1>
      <h3>{{item.price}} </h3>
      <img src="https://via.placeholder.com/150" alt="Item image">
      <div>
        <b-button @click="addToCart">+</b-button>
        <span>{{cart}}</span>
      <b-button @click="removeFromCart">-</b-button>
      </div>
      <div>
        <b-button @click="deleteItem" v-if="employee" variant="danger">Remove item from menu</b-button>
        <b-button type="button" variant="outline-primary" :href="item._id + '/edit'">Edit item information</b-button>
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
          this.$router.push('/menu')
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateItem() {
      // patch an item to be implented
    }
  },
  data() {
    return {
      item: {},
      cart: 0,
      employee: true
    }
  }
}
</script>
