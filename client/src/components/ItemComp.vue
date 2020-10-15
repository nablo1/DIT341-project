<template>
    <div>
        <b-button class="btn" router-link :to="'menu/' + item._id">{{item.name}} {{item.price}} </b-button> <!-- u can use a button -->
    </div>
</template>

<script>
export default {
  name: 'item-comp',
  props: ['item']
}
</script>
<style>
.btn{
  color: black;
}
</style>
