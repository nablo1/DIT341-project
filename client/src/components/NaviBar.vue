<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">OnFire</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item><router-link to="/menu" class="nav-link"> Menu</router-link></b-nav-item>
        <b-nav-item><router-link v-if="checkEmp()" to="/all-orders" class="nav-link" >  Check orders</router-link></b-nav-item>
        <b-nav-item><router-link v-if="checkLoggedIn()" :to="'/users/'+this.getUserId()" class="nav-link" >  Account</router-link></b-nav-item>
        <b-nav-item><router-link v-if="checkLoggedIn()" :to="'/users/' + this.getUserId() + '/cart'" class="nav-link" >Cart ({{cartCount}})</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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

<style scoped>
.navColor{
  color: white;
}
</style>
