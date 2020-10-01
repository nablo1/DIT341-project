<template>
    <div>
        <p>{{this.getCartItems()}} </p>
    </div>
</template>

<script>
export default {
  name: 'cart',
  methods: {
    getCartItems() {
      if (localStorage.getItem('cart') == null) {
        console.log('cart is empty')
      }
      return JSON.parse(localStorage.getItem('cart'))
    }
  }

}
</script>
