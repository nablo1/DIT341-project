<template>
    <div>
        <form @submit.prevent="updateItem">
              <input v-model="newItem.name" class="input" type="text" placeholder="Name" required>
              <input v-model="newItem.price" class="input" type="number" placeholder="Price" required>
              <b-button type="submit" variant="primary">Update item</b-button>
            </form>
            <b-button type="button" variant="outline-primary" :href="'/menu/' + this.itemId">Back to item</b-button>
    </div>
</template>

<script>

import { Api } from '@/Api'
const swal = require('sweetalert')

export default {
  name: 'edititem',
  data() {
    return {
      item: {},
      newItem: {
        name: '',
        price: null
      }
    }
  },
  created() {
    this.itemId = this.$route.params.id
  },
  methods: {
    updateItem() {
      Api.put('/items/' + this.itemId, this.newItem)
        .then(response => {
          swal('Success', 'Item info updated', 'success')
        })
        .catch(error => {
          this.message = error.message
          swal('Error', 'Something Went Wrong', 'error')
        })
        .then(() => {
        })
    }
  }
}
</script>
