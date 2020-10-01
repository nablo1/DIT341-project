<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/menu">Menu</router-link> |
      <router-link v-if="checkLoggedIn()" :to="'/users/' + this.getUserId()">Account</router-link>
      <router-link style="position:relative; left:500px;" to="/cart">Cart</router-link>
      <button v-if="checkLoggedIn() || checkEmp()"  @click="logUserOut()">Log out </button>
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode'
export default {
  data() {
    return {
    }
  },
  methods: {
    logUserOut() {
      localStorage.removeItem('jwt')
      localStorage.removeItem('jwtemp')
      this.$router.push('/login')
    },
    getEmpDetails() {
      const token = localStorage.getItem('jwtemp')
      const decoded = VueJwtDecode.decode(token)
      this.emp = decoded
      console.log(this.emp)
    },
    getUserDetails() {
      const token = localStorage.getItem('jwt')
      const decoded = VueJwtDecode.decode(token)
      this.user = decoded
    },
    checkLoggedIn() {
      if (localStorage.getItem('jwt') == null) {
        return false
      }
      return true
    },
    checkEmp() {
      if (localStorage.getItem('jwtemp') == null) {
        return false
      }
      return true
    },
    getUserId() {
      return this.user._id
    }
  },
  created() {
    this.getUserDetails()
  }
}
</script>

<style>
#app {
  font-family: 'Latha';
  text-align: center;
}
</style>
