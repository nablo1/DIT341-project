<template>
  <div id="app">
    <NaviBar />
    <!-- Render the content of the current page view -->
    <router-view/>
    <Myfooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueJwtDecode from 'vue-jwt-decode'
<<<<<<< Updated upstream
import Myfooter from '@/components/footer.vue'
import NaviBar from '@/components/NaviBar.vue'
=======
import NaviBar from '@/components/NaviBar.vue'
import Myfooter from '@/components/footer.vue'
>>>>>>> Stashed changes
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
  components: {
<<<<<<< Updated upstream
    NaviBar,
    Myfooter
=======
    Myfooter,
    NaviBar
>>>>>>> Stashed changes
  },
  data() {
    return {
      mobileView: false,
      showNav: false,
      loggedIn: true
    }
  },
  created() {
    this.getUserDetails()
    this.handleView()
    window.addEventListener('resize', this.handleView)
  }

}
</script>

<style>
<<<<<<< Updated upstream

=======
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
>>>>>>> Stashed changes
#app {
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
}
</style>
