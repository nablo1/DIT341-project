<template>
    <div>
        <h1> {{order.items}} </h1>
    </div>
</template>

<script>
export default {
  name: 'order-comp',
  props: ['order']
}
</script>

<style scoped>

 .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
</style>
