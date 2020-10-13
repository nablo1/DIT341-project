<template>
    <div>
      <h1>{{item.name}} </h1>
     <h3>{{item.price}} S.E.K</h3>
      <div >
        <b-button v-if="checkLoggedIn()" @click="increase()">+</b-button>

        <span v-if="checkLoggedIn()">{{this.cart}}</span>
      <b-button v-if="checkLoggedIn()" @click="decrease()">-</b-button>
      <br>
      <b-button v-if="checkLoggedIn()" @click="addToCart()">Add to cart</b-button>
      </div>
      <div>
        <b-button v-if="checkEmp()" variant="danger" @click="showMsgBox">Remove from menu</b-button>
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
          this.addtoItem2()
        // This code is always executed (after success or error).
        })
    },
    addtoItem2() {
      this.item2.name = this.item.name
      this.item2._id = this.item._id
      this.item2.price = this.item.price
    },
    addToCart() {
      /* for (let i = 0; i < this.cart; i++) {

      } */
      this.ADD_TO_CART(this.item2)
      this.cart = 0
    },
    increase() {
      this.cart += 1
      this.item2.quantity += 1
    },
    decrease() {
      if (this.cart > 0) {
        this.cart -= 1
        this.item2.quantity -= 1
      } else {
        this.cart = 0
        this.item2.quantity = 0
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
    },
    checkLoggedIn() {
      if (localStorage.getItem('jwt') == null) {
        return false
      }
      return true
    },
    showMsgBox() {
      this.box = ''
      this.$bvModal.msgBoxConfirm('Are you sure you want to delete this item?', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then(value => {
          this.box = value
          if (value) {
            this.deleteItem()
          }
        })
        .catch(err => {
          console.log(err)
        })
    }

  },
  data() {
    return {
      cart: 0,
      item: { },
      item2: { _id: null, name: null, price: 0, quantity: 0 },
      box: ''
    }
  }
}
</script>
