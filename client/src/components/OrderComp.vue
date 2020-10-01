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
