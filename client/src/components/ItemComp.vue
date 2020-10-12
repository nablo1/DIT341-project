<template>
    <div>
<<<<<<< Updated upstream
        <b-button type="button" variant="outline-primary" :href="'menu/' + item._id" target="_blank">{{item.name}}</b-button>
=======
        <b-button class="btn" router-link :to="'menu/' + item._id">{{item.name}} {{item.price}} </b-button> <!-- u can use a button -->
>>>>>>> Stashed changes
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
