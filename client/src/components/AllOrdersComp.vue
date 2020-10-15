<template>
    <div class="txt-color">
          <div v-for="(order, index) in ord" :key="index">
           <h1><u> ORDER: {{index +1}}</u></h1>
            <p>Created at: {{order.createdAt}}</p>
            <p>Pick-up time: {{order.pickUpTime}}</p>
            <div v-for="(item, index) in order.items" :key="index">
            <p>
              item:  {{item._id.name}},
              quantity: {{item.quantity}}
             </p>
            </div>
              <b-button @click="$emit('delete-order', order._id)" class="del">Remove Order</b-button>
              <hr class="light">
              <br>  <br>  <br>
        </div>
    </div>
</template>

<script>

export default {
  name: 'all-order-item',
  props: ['ord'],
  data() {
    return {
      chosenOrder: ''
    }
  },
  methods: {
    getOrder(x) {
      for (let index = 0; index < this.ord.length; index++) {
        if (this.ord[index]._id === x) {
          this.chosenOrder = this.ord[index]
        }
      }
    }

  }

}
</script>

<style scoped>

 .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .txt-color {
    color: white;
  }
  hr.light {
  border-top: 1px solid #d5d5d5;
  width: 75%;
  margin-top: .8rem;
  margin-bottom: 1rem;
}
</style>
