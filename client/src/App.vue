<template>
  <div id="app">
<<<<<<< Updated upstream
    <div id="nav">
      <div class="box">
      <router-link to="/">Home</router-link> |
      <router-link to="/menu" >Menu</router-link> |
      <router-link v-if="checkLoggedIn()" :to="'/users/' + this.getUserId()">Account</router-link>
      <router-link v-if="checkLoggedIn()" :to="'/users/' + this.getUserId() + '/cart'"  >Cart ({{cartCount}})</router-link>
      </div>
      <button v-if="checkLoggedIn() || checkEmp()"  @click="logUserOut()">Log out </button>
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
    <footer />
=======
    <NaviBar />
    <!-- Render the content of the current page view -->
    <router-view/>
    <Myfooter />
>>>>>>> Stashed changes
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueJwtDecode from 'vue-jwt-decode'
import NaviBar from '@/components/NaviBar.vue'
import Myfooter from '@/components/footer.vue'
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
    NaviBar,
    Myfooter
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

#app {
  font-family: 'Latha';
  text-align: center;
}

body{
   background: linear-gradient( rgba(0,0,0,0.65),rgba(0,0,0,0.65),rgba(0,0,0,0.38),rgba(0,0,0,0)
            )
                ,url(https://organicfoodfinds.com/wp-content/uploads/2018/02/yes-certified_organic_usda.jpg)no-repeat;
            background-size: cover;
}

img {
            border-radius: 70%;
          }

.box{  width: 900px;
        float:right;
        border:1px solid none;
}
</style>
