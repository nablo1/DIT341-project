<template>
    <div>
      <div>
          <EmpLoginItem/>
      </div>
    </div>
</template>

<script>

import EmpLoginItem from '@/components/EmpLoginItem.vue'
import VueJwtDecode from 'vue-jwt-decode'

export default {
  name: 'emp-login',
  components: {
    EmpLoginItem
  },
  data() {
    return {
      emp: {}
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
