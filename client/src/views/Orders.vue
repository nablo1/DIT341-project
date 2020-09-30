<template>
    <div>
        <div  v-for="order in orders" v-bind:key="order._id">
            <order-comp v-bind:order="order"/>
        </div>
     </div>
</template>

<script>
import { Api } from '@/Api'
import OrderComp from '@/components/OrderComp.vue'
export default {
  name: 'orders',
  components: {
    OrderComp
  },
  data() {
    return {
      orders: []
    }
  },
  created() {
    this.userId = this.$route.params.id
  },
  mounted() {
    this.getOrders()
  },
  methods: {
    getOrders() {
      Api.get('/users/' + this.userId + '/orders')
        .then(response => {
          this.orders = response.data.orders
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          this.orders = []
        // TODO: display error message
        })
        .then(() => {
        //   This code is always executed at the end. After success or failure.
        })
    }
  }

}
</script>
