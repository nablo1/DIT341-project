<template>
<div>
  <body>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="bg-image">
          <img src="@/assets/background.png" class="backgroundImg"></div>
          <div class="carousel-caption">
             <div class="modal-dialog text-center">
             <div class="col-sm-8 main-section">
            <div class="modal-content fixPos">
            <div class="col-12 cusImage">
              <img src="@/assets/customer.png" /></div>
            <div class="col-12">
            <div>
    <div>
              <p class="red"></p>
        <order-item v-bind:ord="ordersList" v-on:delete-order="deleteOrder"> </order-item>
    </div>
              </div>
              </div>
            </div>
          </div>
        </div>
          </div>
      </div>
        </div>
    </body>
</div>
</template>

<script>
import { Api } from '@/Api'
import OrderItem from '@/components/AllOrdersComp.vue'

export default {
  name: 'orders',
  components: {
    OrderItem
  },
  // mounted() { },
  data() {
    return {
      ordersList: []
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
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
body {
  background: url('https://ibb.co/Xx0knsB');
  background-size: cover;
  font-family: 'Source Sans Pro', sans-serif;
}
.main-section {
  margin: 0 auto;
  margin-top: 130px;
  padding: 0;
}
.modal-content {
  background-color: darkslategray;
  opacity: 0.95;
  padding: 0 18px;
  box-shadow: 0px 0px 3px #848484;
}
.cusImage img {
  height: 100px;
  width: 100px;
  box-shadow: 0px 0px 2px #848484;
  margin-top: -50px;
  margin-bottom: 40px;
}
.logForm {
  margin-bottom: 25px;
  border-radius: 5px;
}
.logForm input {
  height: 42px;
  margin-bottom: 20px;
  border-radius: 5px;
}
.btn {
  background-color: black;
  color: white;
  padding-left: 10px;
  height: 40px;
}
.divider {
  width: 5px;
  height: auto;
  display: inline-block;
}
.empColor {
  color: white;
}
/* BLUR BACKGROUND SECTION */

.bg-image {
  /* The image used */
  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);
  /* Full height */
  height: 100%;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.backgroundImg {
  width: 100%;
  height: 100%;
}
.center {
  margin: auto;
  margin-top: 50px;
  width: 50%;
  padding: 10px;
}
.carousel-inner img {
  width: 100%;
  height: 100%;
}
.fixPos{
  margin-top: -750px;
}
</style>
