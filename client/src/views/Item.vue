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
                    <img src="@/assets/icon.jpeg" />
                  </div>
                  <div class="col-12">
                    <div>
                      <h1>{{ item.name }}</h1>
                      <h3>{{ item.price }}</h3>
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

  <!--div>
      <h1>{{item.name}} </h1>
     <h3>{{item.price}} </h3>
      <div >
        <b-button v-if="checkLoggedIn()" @click="increase()">+</b-button>

        <span v-if="checkLoggedIn()">{{this.cart}}</span>
      <b-button v-if="checkLoggedIn()" @click="decrease()">-</b-button>
      <br>
      <b-button @click="addToCart()">Add to cart</b-button>
      </div>
      <div>
        <b-button v-if="checkEmp()" @click="deleteItem" variant="danger">Remove item from menu</b-button>
        <b-button v-if="checkEmp()" type="button" variant="outline-primary" :href="item._id + '/edit'">Edit item information</b-button>
      </div>
<<<<<<< Updated upstream
          </div>
      </div>
    </div>
    </div>
=======
    </div-->
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        // This code is always executed (after success or error).
=======
          this.addtoItem2()
          // This code is always executed (after success or error).
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
    }
  },
  data() {
    return {
      cart: 0,
      item: {},
<<<<<<< Updated upstream
      employee: true
=======
      item2: { _id: null, name: null, price: 0, quantity: 0 },
      box: ''
>>>>>>> Stashed changes
    }
  }
}
</script>
<<<<<<< Updated upstream
<style>
=======
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
  height: 50px;
  width: 50px;
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

>>>>>>> Stashed changes
.bg-image {
  /* The image used */
  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);
  /* Full height */
  height: 100%;
<<<<<<< Updated upstream
=======
  width: 100%;
>>>>>>> Stashed changes

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
<<<<<<< Updated upstream
.backgroundImg{
=======
.backgroundImg {
>>>>>>> Stashed changes
  width: 100%;
  height: 100%;
}
.center {
  margin: auto;
  margin-top: 50px;
  width: 50%;
  padding: 10px;
}
<<<<<<< Updated upstream

=======
.carousel-inner img {
  width: 100%;
  height: 100%;
}
.fixPos{
  margin-top: -750px;
}
>>>>>>> Stashed changes
</style>
