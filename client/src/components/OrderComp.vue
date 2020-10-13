<template>
    <div>
      <div v-for="(order, index) in ordersList" :key="index">
            <p> Order: {{index +1}}</p>
            <p>Created at: {{order.createdAt}}</p>
            <p> Pick-up time: {{order.pickUpTime}}</p>
            <div v-for="(item, index) in order.items" :key="index">
              item:  {{item._id.name}},
              quantity: {{item.quantity}}
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
