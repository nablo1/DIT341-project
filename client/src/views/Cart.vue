<template>
    <div>
<div v-for="(item, index) in myCartList" v-bind:key="index">
    {{item}}

<b-button @click="deleteItem(item)" class="del">x</b-button>
</div>

<div>
  <input href='/new-order' @click="submitOrd" type="submit" value="Submit">
</div>
    </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'cart',

  data() {
    return {
      cart: []
    }
  },
  computed: {
    ...mapGetters([
      'myCartList'
    ])
  },
  methods: {
    ...mapMutations(['DELETE_FROM_CART', 'SET_CART_LIST']),
    getb() {
      return console.log(this.myCartList[2])
    },
    deleteItem(id) {
      this.DELETE_FROM_CART(id)
    },
    submitOrd() {
      this.SET_CART_LIST()
    }
  }

}

</script>
