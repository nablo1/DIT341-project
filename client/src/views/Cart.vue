<template>
    <div>
<div v-for="(item, index) in myCartList" v-bind:key="index">
    {{item}}

<b-button @click="deleteItem(item)" class="del">x</b-button>
</div>

<div>
  <b-button type="button" variant="outline-primary" @click="createOrder()">Complete order</b-button>
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
      newOrder: {
        items: [
          { _id: '5f64e54e51a39115a4a3483e' },
          { _id: '5f64e55651a39115a4a3483f' }
        ]
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
  methods: {
    ...mapMutations(['DELETE_FROM_CART', 'SET_CART_LIST']),
    getb() {
      return console.log(this.myCartList[2])
    },
    deleteItem(id) {
      this.DELETE_FROM_CART(id)
    },
    submitOrd() {
      this.SET_CART_LIST()
    },
    createOrder() {
      Api.post('/users/' + this.userId + '/orders', this.newOrder)
        .then(response => {
          swal('Success', 'Your order is placed', 'success')
          this.$router.push('/users/' + this.userId + '/orders')
          this.SET_CART_LIST()
        })
        .catch(error => {
          console.log(error)
          swal('Error', 'Something Went Wrong', 'error')
        })
        .then(() => {
          // This code is always executed (after success or error).
        })
    },
    iterateItems() {
      const arrLength = this.myCartList.length
      for (var i = 0; i < arrLength; i++) {
        return { _id: this.myCartList[i] }
      }
    }
  }

}

</script>
