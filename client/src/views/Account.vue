<template>
<<<<<<< Updated upstream
    <div>
        <h1>{{user.email}} </h1>
        <b-button type="button" variant="outline-primary" :href="'/users/' + this.userId + '/orders'">My orders</b-button>
        <b-button type="button" variant="outline-primary" :href="'/users/' + this.getUserId() + '/cart'">Place an order</b-button>
        <b-button type="button" variant="outline-primary" :href="'/users/' + this.userId + '/edit'">Update account intormation</b-button>
    </div>
=======
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
             <b-button type="button" variant="outline-primary" :href="'/users/' + this.userId + '/orders'">My orders</b-button>
             <div class="divider" />
             <b-button type="button" variant="outline-primary" href='/menu'>Place an order</b-button>
             <div class="divider" />
             <b-button type="button" variant="outline-primary" :href="'/users/' + this.userId + '/edit'">Update account intormation</b-button>
              </div>
              </div>
            </div>
          </div>
        </div>
          </div>
      </div>
        </div>
    </body>
>>>>>>> Stashed changes
</template>

<script>

import { Api } from '@/Api'
export default {
  name: 'account',
  data() {
    return {
      user: {},
      orders: []
    }
  },
  created() {
    this.userId = this.$route.params.id
  },
  mounted() {
    this.getUser()
  },
  methods: {
    getUser() {
      Api.get('/users/' + this.userId)
        .then(response => {
          this.user = response.data
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          this.user = null
        })
        .then(() => {
        // This code is always executed (after success or error).
        })
    },
    getUserId() {
      return this.user._id
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
  padding: 0;
}
.modal-content {
  background-color: #123c52;
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
</style>
