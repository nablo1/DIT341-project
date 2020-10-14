<template>
    <!--div>
      <b-button variant="danger" @click="showMsgBox">Delete all orders</b-button>
              <p class="red"></p>
        <order-item v-bind:ord="ordersList" v-on:delete-order="deleteOrder"> </order-item>
    </div-->
    <div class="modal-dialog text-center background">
    <div class="col-sm-8 main-section">
      <div class="modal-content fixPos">
        <div class="col-12 cusImage">
          <img src="@/assets/customer.png" />
        </div>
        <div class="col-12">
          <div class="logForm">
            <div>
      <b-button variant="danger" @click="showMsgBox">Delete all orders</b-button>
              <p class="red"></p>
        <order-item v-bind:ord="ordersList" v-on:delete-order="deleteOrder"> </order-item>
    </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="pushDown">
  </div>
</template>

<script>
import { Api } from '@/Api'
import OrderItem from '@/components/AllOrdersComp.vue'
const swal = require('sweetalert')

export default {
  name: 'orders',
  components: {
    OrderItem
  },
  // mounted() { },
  data() {
    return {
      ordersList: [],
      box: ''
    }
  },
  mounted() {
    this.getOrders()
  },
  methods: {
    getOrders() {
      console.log('PAGE is loaded')
      // Load the real camels from the server
      Api.get('/orders')
        .then(response => {
        // console.log(response.data)
          this.ordersList = response.data.orders
          console.log(this.ordersList)
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          this.ordersList = []
        // TODO: display error message
        })
        .then(() => {
        //   This code is always executed at the end. After success or failure.
        })
    },
    deleteOrder(id) {
      Api.delete(`/orders/${id}`)
        .then(reponse => {
          const index = this.ordersList.findIndex(order => order._id === id)
          this.ordersList.splice(index, 1)
        })
        .catch(error => {
          console.error(error)
        })
    },
    deleteAllOrders() {
      Api.delete('/orders')
        .then(response => {
          swal('Success', 'Orders deleted', 'success')
        })
        .catch(error => {
          console.error(error)
          swal('Error', 'Something Went Wrong', 'error')
        })
    },
    showMsgBox() {
      this.box = ''
      this.$bvModal.msgBoxConfirm('Are you sure you want to delete all items?', {
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
            this.deleteAllOrders()
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
</style>
