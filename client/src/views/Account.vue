<template>
    <div>
        <h1>{{user.email}} </h1>
        <b-button type="button" variant="outline-primary" :href="'/users/' + this.userId + '/orders'" target="_blank">My orders</b-button>
    </div>
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
    }
  }
}
</script>
