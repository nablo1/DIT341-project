<template>
    <div>
<h1 v-if="emptyCart()"> Your cart is empty</h1>

<div v-for="(item, index) in myCartList" v-bind:key="index">
    {{item.name}} {{item.price}} {{item.quantity}}

<b-button @click="deleteItem(item)" class="del">x</b-button>
</div>

<div>
<p v-if="!emptyCart()">Toal Price: {{this.totalCost}}</p>
<div v-if="!emptyCart()">
  Pick-up Time:
    <b-form-timepicker v-model="newOrder.pickUpTime" locale="en"></b-form-timepicker>
  </div>

  <b-button v-if="!emptyCart()" type="button" variant="outline-primary" @click=" createOrder()">Complete order</b-button>
</div>
    </div>
</template>

<script>
import { Api } from '@/Api'
import { mapGetters, mapMutations } from 'vuex'
const swal = require('sweetalert')
export default {
  name: 'cart',
  data() {
    return {
      cart: [],
      cost: 0,
      totalCost: 0,
      newOrder: {
        items: [
        ],
        pickUpTime: '',
        createdAt: Date().toString()
      }
    }
  },
  computed: {
    ...mapGetters([
      'myCartList', 'cartCount'
    ])
  },
  created() {
    this.userId = this.$route.params.id
  },
  mounted() {
    this.netCost()
  },
  methods: {
    ...mapMutations(['DELETE_FROM_CART', 'SET_CART_LIST']),
    deleteItem(id) {
      this.DELETE_FROM_CART(id)
    },
    submitOrd() {
      this.SET_CART_LIST()
      this.totalCost = 0
    },
    createOrder() {
      for (let index = 0; index < this.myCartList.length; index++) {
        this.newOrder.items.push(this.myCartList[index])
      }
      Api.post('/users/' + this.userId + '/orders', this.newOrder)
        .then(response => {
          swal('Success', 'Your order is placed', 'success')
          this.SET_CART_LIST()
          this.$router.push('/users/' + this.userId + '/orders')
        })
        .catch(error => {
          console.log(error)
          swal('Error', 'Something Went Wrong', 'error')
        })
        .then(() => {
          this.submitOrd()
          // This code is always executed (after success or error).
        })
    },
    netCost() {
      const arrLength = this.myCartList.length
      for (var i = 0; i < arrLength; i++) {
        this.cost = this.myCartList[i].price * this.myCartList[i].quantity
        this.totalCost = this.cost + this.totalCost
      }
    },
    iterateItems() {
      const arrLength = this.myCartList.length
      for (var i = 0; i < arrLength; i++) {
        return { _id: this.myCartList[i] }
      }
    },
    emptyCart() {
      if (this.myCartList.length === 0) {
        return true
      }
      return false
    }
  }

}

</script>
