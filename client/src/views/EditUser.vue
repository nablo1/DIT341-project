<template>
    <div>
        <form @submit.prevent="updateEmail">
              <input v-model="newEmail.email" class="input" type="text" placeholder="New Email" required>
              <b-button type="submit" variant="primary">Update Email</b-button>
            </form>
            <form @submit.prevent="updatePassword">
              <input v-model="newPassword.password" class="input" type="text" placeholder="New Password" required>
              <b-button type="submit" variant="primary">Update Password</b-button>
            </form>
            <b-button type="button" variant="outline-primary" :href="'/users/' + this.userId">Back to account</b-button>
    </div>
</template>

<script>
import { Api } from '@/Api'
const swal = require('sweetalert')

export default {
  name: 'edit-user',
  data() {
    return {
      user: {},
      newEmail: {
        email: ''
      },
      newPassword: {
        password: ''
      }
    }
  },
  created() {
    this.userId = this.$route.params.id
  },
  methods: {
    updateEmail() {
      Api.patch('/users/' + this.userId, this.newEmail)
        .then(response => {
          swal('Success', 'Email updated', 'success')
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          swal('Error', 'Something Went Wrong', 'error')
        })
        .then(() => {
        })
    },
    updatePassword() {
      Api.patch('/users/' + this.userId, this.newPassword)
        .then(response => {
          swal('Success', 'Password updated', 'success')
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          swal('Error', 'Something Went Wrong', 'error')
        })
        .then(() => {
        })
    }
  }
}
</script>
