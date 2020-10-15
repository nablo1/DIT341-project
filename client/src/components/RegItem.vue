<template>
  <div>
    <body>
      <div class="modal-dialog text-center background">
        <div class="col-sm-8 main-section">
          <div class="modal-content fixPos">
            <div class="col-12 cusImage">
              <img src="@/assets/customer.png" />
            </div>
            <div class="col-12">
              <div class="logForm">
                <form @submit.prevent="registerUser()">
                  <div class="h-100 row align-items-center">
                    <div class="col">
                      <input
                        v-model="newUser.email"
                        type="text"
                        placeholder="Enter Email"
                        required
                        class="text-center"
                      /><br />
                      <input
                        v-model="newUser.password"
                        type="password"
                        placeholder="Enter Password"
                        required
                        class="text-center"
                      /><br />
                      <center>
                        <b-button type="submit" class="logbtn">Register</b-button>
                        <div class="divider" />
                        <b-button href="/" type="button" class="btn">Cancel</b-button>
                      </center>
                      <br />
                    </div>
                  </div>
                </form>
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
const swal = require('sweetalert')

export default {
  data() {
    return {
      newUser: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    registerUser() {
      Api.post('/users', this.newUser)
        .then(response => {
          swal('Success', 'Registeration Successful', 'success')
          this.$router.push('/login')
        })
        .catch(error => {
          console.log(error)
          swal('Error', 'Something Went Wrong', 'error')
        })
        .then(() => {
          // This code is always executed (after success or error).
        })
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
body {
  background: transparent;
  font-family: 'Source Sans Pro', sans-serif;
}
.main-section {
  margin: 0 auto;
  margin-top: 130px;
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
