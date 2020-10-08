<template>
    <div class="login">
            <h1><center>Log In</center></h1>
            <form @submit.prevent="loginUser">
                  <div class="h-100 row align-items-center">
                    <div class="col">
                    <label>Email : </label>
                    <input v-model="newUser.email" type="text" placeholder="Enter Email" required><br>
                    <label>Password : </label>
                    <input v-model="newUser.password" type="text" placeholder="Enter Password" required><br>
                    <center>
                    <b-button type="submit" variant="primary">Log in</b-button>
                    <button type="button" class="cancelbtn"> Cancel</button></center><br>
                    Are you an Employee? <router-link to="/empLogin"> Click Here </router-link>
                  </div>
                  </div>
            </form>
        </div>

</template>

<script>
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
    async loginUser() {
      try {
        const response = await this.$http.post('/users/login', this.newUser)
        const token = response.data.token
        localStorage.setItem('jwt', token)
        if (token) {
          swal('Success', 'Login Successful', 'success')
          this.$router.push('/')
        }
      } catch (err) {
        swal('Error', 'Something Went Wrong', 'error')
        console.log(err.response)
      }
    }
  }
}
</script>

<style scoped>
</style>
