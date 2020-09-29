<template>
    <div>
        <form @submit.prevent="loginUser">
            <input v-model="newUser.email" class="input" type="text" placeholder="Email" required>
            <input v-model="newUser.password" class="input" type="text" placeholder="Password" required>
            <b-button type="submit" variant="primary">Log in</b-button>
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
