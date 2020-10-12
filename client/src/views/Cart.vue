<template>
  <div>
    <body>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="bg-image">
            <img src="@/assets/background.png" class="backgroundImg" />
          </div>
          <div class="carousel-caption">
            <div class="modal-dialog text-center">
              <div class="col-sm-8 main-section">
                <div class="modal-content fixPos">
                  <div class="col-12 cusImage">
                    <img src="@/assets/employee.png" />
                  </div>
                  <div class="col-12">
                    <div>
                      <h1 v-if="emptyCart()">Your cart is empty</h1>

                      <div
                        v-for="(item, index) in myCartList"
                        v-bind:key="index"
                      >
                        {{ item.name }} {{ item.price }} {{ item.quantity }}

                        <b-button @click="deleteItem(item)" class="del"
                          >x</b-button
                        >
                      </div>

                      <div>
                        <p v-if="!emptyCart()">
                          Toal Price: {{ this.totalCost }}
                        </p>
                        <div v-if="!emptyCart()">
                          Pick-up Time:
                          <b-form-timepicker
                            class="timer"
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
        </div>
      </div>
    </body>
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
.fixPos {
  margin-top: -750px;
}
.timer {
  background-color: black;
}
</style>
