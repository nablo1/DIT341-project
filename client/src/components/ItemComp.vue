<template>
    <div>
        <b-button type="button" variant="outline-primary" :href="'menu/' + item._id" target="_blank">{{item.name}}</b-button>
    </div>
</template>

<script>
export default {
  name: 'item-comp',
  props: ['item']
}
</script>
