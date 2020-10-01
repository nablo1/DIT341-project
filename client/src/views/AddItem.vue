<template>
    <div>
    <form @submit.prevent="createItem">
              <input v-model="newItem.name" class="input" type="text" placeholder="Name" required>
              <input v-model="newItem.price" class="input" type="number" placeholder="Price" required>
              <b-button type="submit" variant="primary">Add item</b-button>
            </form>
            <b-button type="button" variant="outline-primary" href='/menu'>Back to menu</b-button>
    </div>
</template>

<script>

import { Api } from '@/Api'
const swal = require('sweetalert')

export default {
  name: 'additem',
  data() {
    return {
      newItem: {
        name: '',
        price: null
      }
    }
  },
  methods: {
    createItem() {
      Api.post('/items', this.newItem)
        .then(response => {
          swal('Success', 'Item created', 'success')
          this.$router.push('/menu')
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
