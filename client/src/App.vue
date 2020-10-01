<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" target="_blank">Home</router-link> |
      <router-link to="/menu" >Menu</router-link> |
      <router-link to="/contact" target="_blank">Contact</router-link>
      <router-link style="position:relative; left:500px;" to="/cart" >Cart{{cartCount}}</router-link>
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'cartCount'
    ])

  },
  mounted() {

  },
  methods: {

  },
  data() {
    return {
      loggedIn: true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Latha';
  text-align: center;
}
</style>
