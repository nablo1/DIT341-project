<template>
    <div>
      <b-jumbotron >
          <LoginItem/>
      </b-jumbotron>
    </div>
</template>

<script>

import { Api } from '@/Api'
import LoginItem from '@/components/LoginItem.vue'

export default {
  name: 'home',
  components: {
    LoginItem
  },
  date() {
    return {
      message: ''
    }
  },
  mounted() {
    this.getMessage()
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>
