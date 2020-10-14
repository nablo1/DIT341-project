<template>
    <div style="color:white">
      <div v-for="(order, index) in ordersList" :key="index">
            <h1> ORDER: {{index +1}}</h1>
            <p>Created at: {{order.createdAt}}</p>
            <p> Pick-up time: {{order.pickUpTime}}</p>
            <div v-for="(item, index) in order.items" :key="index">
              item:  {{item._id.name}},
              quantity: {{item.quantity}}
              <br> <br> <br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'order-comp',
  props: ['ordersList']
}
</script>

<style scoped>
</style>
