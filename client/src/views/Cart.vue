<template>
  <body>
    <div class="modal-dialog text-center background">
      <div class="col-sm-8 main-section">
        <div class="modal-content fixPos">
          <div class="col-12 cusImage">
            <img src="@/assets/icon.jpeg" />
          </div>
          <div class="col-12">
            <div class="logForm">
              <div>
                <h1 v-if="emptyCart()">Your cart is empty</h1>

                <div v-for="(item, index) in myCartList" v-bind:key="index">
                  {{ item.name }} {{ item.price }} {{ item.quantity }}

                  <b-button @click="deleteItem(item)" class="del">X</b-button>
                </div>

                <div>
                  <p v-if="!emptyCart()">Toal Price: {{ this.totalCost }}</p>
                  <div v-if="!emptyCart()">
                    Pick-up Time:
                    <b-form-timepicker
                      class="blackTimer"
                      v-model="newOrder.pickUpTime"
                      locale="en"
                    ></b-form-timepicker>
                  </div>

                  <b-button
                    v-if="!emptyCart()"
                    type="button"
                    variant="outline-primary"
                    @click="createOrder()"
                    >Complete order</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="pushDown" />
  </body>
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
        items: [],
        pickUpTime: '',
        createdAt: Date().toString()
      }
    }
  },
  computed: {
    ...mapGetters(['myCartList', 'cartCount'])
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
        .then((response) => {
          swal('Success', 'Your order is placed', 'success')
          this.SET_CART_LIST()
          this.$router.push('/users/' + this.userId + '/orders')
        })
        .catch((error) => {
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
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
body {
  background: url("https://ibb.co/Xx0knsB");
  font-family: "Source Sans Pro", sans-serif;
}
.main-section {
  margin: 0 auto;
  margin-top: 130px;
  padding: 0;
}
.modal-content {
  background-color: grey;
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
.pushDown {
  margin-bottom: 300px;
  border-top: transparent;
}
.push {
  margin-bottom: 100px;
}
.blacktimer {
  color: black;
}
</style>
