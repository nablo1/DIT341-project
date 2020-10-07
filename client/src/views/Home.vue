<template>
  <body>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/background.png">
          <div class="carousel-caption">
            <h1 class="display-2"><center> Order your food and pick it up anytime you want! </center></h1>
            <button v-if="!checkLoggedIn() && !checkEmp()" type="button" class="btn btn-primary btn-lg">
              <router-link to="/login">Log In</router-link>
              </button>
              <button v-if="checkLoggedIn() || checkEmp()"  @click="logUserOut()" class="btn btn-primary btn-lg">
                Log out
              </button>
          </div>
      </div>
    </div>
<<<<<<< Updated upstream

    <div class="wd">

        <h1> ON FIRE</h1>
        <br/>
        <br/>
        <h4><center> Order you food and pick it up any time you want!</center></h4>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <center>
        <button v-if="!checkLoggedIn() && !checkEmp() " class="order-button text-center">
            <router-link to="/login">Log In</router-link>
        </button>
        </center>

    </div>
  </div>
=======
>>>>>>> Stashed changes
  </body>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data() {
    return {
      mainProps: { blank: false, blankColor: '#777', width: 75, height: 75, class: 'm1' }
    }
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>
.carousel-inner img{
  width: 100%;
  height: 100%;
}
</style>
