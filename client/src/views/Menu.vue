<template>
    <div>
        <div  v-for="item in items" v-bind:key="item._id">
            <item-comp v-bind:item="item"/>
        </div>
        <b-button v-if='Employee' href="/menu/add" target="_blank">Add items</b-button>
        <b-button v-if="Employee" variant="danger" @click="deleteItems">Delete all items</b-button>
        <div>
          <b-button v-b-modal.modal-prevent-closing>Add an item</b-button>

          <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Add the items info"
            @show="resetModal"
            >

            <form ref="form" @submit.prevent="createItem">

              <b-form-group
                :state="nameState"
                label="Name"
                label-for="name-input"
                invalid-feedback="Name is required"
              >

              <b-form-input
                id="name-input"
                v-model="newItem.name"
                :state="nameState"
                required
              >
              </b-form-input>
              </b-form-group>

              <b-form-group
                :state="priceState"
                label="Price"
                label-for="price-input"
                invalid-feedback="Price is required"
              >

              <b-form-input
                id="price-input"
                v-model="newItem.price"
                :state="priceState"
                required
              >
              </b-form-input>
              </b-form-group>
            </form>

          </b-modal>
        </div>
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
      Employee: true,
      items: [],
      nameState: null,
      priceState: null,
      newItem: {
        name: '',
        price: ''
      }
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
    },
    createItem() {
      Api.post('/items', this.newItem)
        .then(response => {
          this.$router.push('/items')
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
