<template>
    <div>
        <p>Add order </p>
    </div>
</template>

<script>

import { Api } from '@/Api'

export default {
  name: 'addOrder',
  data() {
    return {
      newOrder: {
      }
    }
  },
  created() {
    this.userId = this.$route.params.id
  },
  methods: {
    createOrder() {
      Api.post('/users/' + this.userId + '/orders', this.newOrder)
        .then(response => {
          this.$router.push('/users/' + this.userId + '/orders')
        })
        .catch(error => {
          console.log(error)
        })
        .then(() => {
          // This code is always executed (after success or error).
        })
    }
  }
}
</script>
