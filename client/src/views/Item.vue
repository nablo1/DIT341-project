<template>
    <div>
      <h1>{{item.name}} </h1>
     <h3>{{item.price}} </h3>
      <img src="https://via.placeholder.com/150" alt="Item image">
      <div >
        <b-button @click="increase()">+</b-button>

        <span>{{this.cart}}</span>
      <b-button @click="decrease()">-</b-button>
      <br>
      <b-button @click="addToCart()">Add to cart</b-button>
      </div>
      <div>
        <b-button v-if="checkEmp()" @click="deleteItem" variant="danger">Remove item from menu</b-button>
        <b-button v-if="checkEmp()" type="button" variant="outline-primary" :href="item._id + '/edit'">Edit item information</b-button>
      </div>
    </div>
</template>

<script>

import { Api } from '@/Api'
import { mapMutations, mapGetters } from 'vuex'
const swal = require('sweetalert')

export default {
  name: 'item',
  created() {
    this.itemId = this.$route.params.id
  },
  mounted() {
    this.getItem()
  },
  computed: {
    ...mapGetters([
      'myCartList'
    ])
  },
  methods: {
    ...mapMutations(['ADD_TO_CART', 'DELETE_FROM_CART']),

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
      for (let i = 0; i < this.cart; i++) {
        this.ADD_TO_CART(this.item._id)
      }
      this.cart = 0
    },
    increase() {
      this.cart += 1
    },
    decrease() {
      if (this.cart > 0) {
        this.cart -= 1
      } else {
        this.cart = 0
      }
    },
    deleteItem(id) {
      Api.delete('/items/' + this.item._id)
        .then(response => {
          swal('Success', 'Item Removed From Menu', 'success')
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
    }

  },
  data() {
    return {
      cart: 0,
      item: {},
      employee: true
    }
  }
}
</script>
