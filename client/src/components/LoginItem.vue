<template>
    <div>
        <form v-on:submit="submitLogin">
            <input v-model="newUser.email" class="input" type="text" placeholder="Email" required>
            <input v-model="newUser.password" class="input" type="text" placeholder="Password" required>
            <b-button type="submit" variant="primary">Log in</b-button>
        </form>
    </div>
</template>

<script>

import { Api } from '@/Api'

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
    submitLogin() {
      Api.post('/users/login/', this.newUser)
        .then(response => {
          this.$router.push('/items')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
