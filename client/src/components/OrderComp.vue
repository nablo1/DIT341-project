<template>
    <div class="app" style="color:white">
      <div v-for="(order, index) in ordersList" :key="index">
            <h1><u> ORDER: {{index +1}}</u></h1>
            <p>Created at: {{order.createdAt}}</p>
            <p> Pick-up time: {{order.pickUpTime}}</p>
            <div v-for="(item, index) in order.items" :key="index">
              item:  {{item._id.name}},
              quantity: {{item.quantity}}
              <hr class="light">
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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@1&display=swap');
.app{
  font-family: 'Roboto Condensed', sans-serif;
}
hr.light {
  border-top: 1px solid #d5d5d5;
  width: 75%;
  margin-top: .8rem;
  margin-bottom: 1rem;
}
</style>
