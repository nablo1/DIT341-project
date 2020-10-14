<template>
<div>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <a href="/" class="navbar-brand">OnFire</a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a><router-link v-if="checkLoggedIn()" :to="'/users/'+this.getUserId()" class="nav-link" >  Account</router-link></a>
        </li>
        <li class="nav-item">
          <a href="/menu" class="nav-link"> Menu </a>
        </li>
        <li class="nav-item">
          <a><router-link v-if="checkEmp()" to="/all-orders" class="nav-link" >  Check orders</router-link></a>
        </li>
        <li class="nav-item">
          <a><router-link v-if="checkLoggedIn()" :to="'/users/' + this.getUserId() + '/cart'" class="nav-link" >Cart ({{cartCount}})</router-link></a>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'cartCount'
    ])
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990
    },
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

<style scoped></style>
