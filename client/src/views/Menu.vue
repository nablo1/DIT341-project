<template>
    <div>
        <div  v-for="item in items" v-bind:key="item._id">
            <item-comp v-bind:item="item"/>
        </div>
        <b-button v-if="checkEmp()" variant="danger" @click="deleteItems">Delete all items</b-button>
        <b-button v-if="checkEmp()" type="button" variant="outline-primary" href="/add-to-menu">Add an item</b-button>
     </div>
</template>

<script>

import { Api } from '@/Api'
import ItemComp from '@/components/ItemComp.vue'
const swal = require('sweetalert')

export default {
  name: 'menu',
  components: {
    ItemComp
  },
  mounted() {
    this.getItems()
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    deleteItems() {
      Api.delete('/items')
        .then(response => {
          swal('Success', 'Items deleted', 'success')
        })
        .catch(error => {
          console.error(error)
          swal('Error', 'Something Went Wrong', 'error')
        })
    },
    getItems() {
      Api.get('/items')
        .then(response => {
          this.items = response.data.items
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          this.items = []
        // TODO: display error message
        })
        .then(() => {
        //   This code is always executed at the end. After success or failure.
        })
    },
    checkEmp() {
      if (localStorage.getItem('jwtemp') == null) {
        return false
      }
      return true
    }
  }
}
</script>
