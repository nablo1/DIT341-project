<template>
    <div>
        <div  v-for="item in items" v-bind:key="item._id">
            <item-comp v-bind:item="item"/>
        </div>
        <b-button v-if="employee" variant="danger" @click="deleteItems">Delete all items</b-button>
        <b-button v-if="employee" type="button" variant="outline-primary" href="/add-to-menu">Add an item</b-button>
     </div>
</template>

<script>

import { Api } from '@/Api'
import ItemComp from '@/components/ItemComp.vue'

export default {
  name: 'menu',
  components: {
    ItemComp
  },
  mounted() {
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
  data() {
    return {
      employee: true,
      items: []
    }
  },
  methods: {
    deleteItems() {
      Api.delete('/items')
        .then(response => {
          console.log(response.data.message)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
