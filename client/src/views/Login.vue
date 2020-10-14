<template>
    <div>
      <div>
          <LoginItem/>
      </div>
    <div>
      <hr class="pushDown">
    </div>
    </div>
</template>

<script>

import LoginItem from '@/components/LoginItem.vue'
import VueJwtDecode from 'vue-jwt-decode'

export default {
  name: 'login',
  components: {
    LoginItem
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    checkToken() {
      // if local storage has the item and its not identified
    },
    getUserDetails() {
      const token = localStorage.getItem('jwt')
      const decoded = VueJwtDecode.decode(token)
      this.user = decoded
    },
    logUserOut() {
      localStorage.removeItem('jwt')
      this.$router.push('/')
    }
  },
  created() {
    this.getUserDetails()
  }
}
</script>
<style>
.noBack{
  background-color: black;
}
.pushDown{
  margin-bottom: 270px;
  border-top: transparent;
}
</style>
