<template>
  <div>
    <div class="modal-dialog text-center background">
      <div class="col-sm-8 main-section">
        <div class="modal-content fixPos">
          <div class="col-12 cusImage">
            <img src="@/assets/icon.jpeg" />
          </div>
          <div class="col-12">
            <div class="logForm">
              <div>
                <h1>{{ item.name }}</h1>
                <h3>{{ item.price }} S.E.K</h3>
                <div>
                  <b-button v-if="checkLoggedIn()" @click="increase()"
                    >+</b-button
                  >

                  <span v-if="checkLoggedIn()">{{ this.cart }}</span>
                  <b-button v-if="checkLoggedIn()" @click="decrease()"
                    >-</b-button
                  >
                  <br />
                  <b-button v-if="checkLoggedIn()" @click="addToCart()"
                    >Add to cart</b-button
                  >
                </div>
                <div>
                  <b-button
                    v-if="checkEmp()"
                    variant="danger"
                    @click="showMsgBox"
                    >Remove from menu</b-button
                  >
                  <b-button
                    v-if="checkEmp()"
                    type="button"
                    variant="outline-primary"
                    :href="item._id + '/edit'"
                    >Edit item information</b-button
                  >
                  <b-button
                    v-if="checkEmp() || checkLoggedIn()"
                    type="button"
                    variant="outline-primary"
                    href="/menu"
                    >Back to Menu</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="pushDown" />
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
    ...mapGetters(['myCartList'])
  },
  methods: {
    ...mapMutations(['ADD_TO_CART', 'DELETE_FROM_CART']),

    getItem() {
      Api.get('/items/' + this.itemId)
        .then((response) => {
          this.item = response.data
        })
        .catch((error) => {
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
        .then((response) => {
          swal('Success', 'Item Removed From Menu', 'success')
          this.$router.push('/menu')
        })
        .catch((error) => {
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
      this.$bvModal
        .msgBoxConfirm('Are you sure you want to delete this item?', {
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
        .then((value) => {
          this.box = value
          if (value) {
            this.deleteItem()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  data() {
    return {
      cart: 0,
      item: {},
      item2: { _id: null, name: null, price: 0, quantity: 0 },
      box: ''
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
</style>
