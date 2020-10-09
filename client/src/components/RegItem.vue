<template>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="bg-image">
          <img src="@/assets/background.png" class="backgroundImg" /></div>
          <div class="carousel-caption center">
            <h1><center>Register</center></h1>
            <form @submit.prevent="registerUser">
                  <div class="logform">
                    <label>Email : </label>
                    <input v-model="newUser.email" type="text" placeholder="Enter Email" required><br>
                    <label>Password : </label>
                    <input v-model="newUser.password" type="text" placeholder="Enter Password" required><br>
                    <center>
                    <b-button type="submit" variant="primary"> Register</b-button>
                    <b-button type="button" variant="outline-primary" href="/">Cancel</b-button>
                    </center>
                  </div>
            </form>
          </div>
      </div>
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
.backgroundImg{
  width: 100%;
  height: 100%;
}
.center {
  margin: auto;
  margin-top: 50px;
  width: 50%;
  padding: 10px;
}

</style>
