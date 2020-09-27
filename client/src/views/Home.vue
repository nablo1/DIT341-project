<template>
 <div class="home">
   <b-img left :src="require('../assets/icon.jpeg')" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
    <div>
      <b-button-group class="box">
        <b-button href="/login">Log in</b-button>
        <b-button href="/register">Register</b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
export default {
  name: 'home',
  data() {
    return {
      mainProps: { blank: false, blankColor: '#777', width: 75, height: 75, class: 'm1' }
    }
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

<style>
  .home {
    font-family: latha;
    color: white;
     position: absolute;
    left: 0;
    right: 0;
    background-image: url('../assets/p1.jpg');
    height: 97vh;
  }

</style>
