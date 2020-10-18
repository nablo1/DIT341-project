<template>
  <div id="app">
    <title>OnFire</title>
    <NaviBar />
    <!-- Render the content of the current page view -->
    <router-view/>
    <Myfooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    }
  },
  components: {
    Myfooter,
    NaviBar
  },
  data() {
    return {
      mobileView: false,
      showNav: false,
      loggedIn: true
    }
  },
  created() {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
#app {
  background: url('https://i.ibb.co/XSVQ4wq/background-Blur.png');
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
}
</style>
