<template>
  <body>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/background.png">
          <div class="carousel-caption">
            <h4 class="display-2"><center> Order your food and pick it up anytime you want! </center></h4>
            <button v-if="!checkLoggedIn() && !checkEmp()" type="button" class="whitefont btn btn-primary btn-lg">
              <router-link to="/login">Log In</router-link>
              </button>
<<<<<<< Updated upstream
=======
              <button v-if="!checkLoggedIn() && !checkEmp()" type="button" class="whitefont btn btn-primary btn-lg">
              <router-link to="/register">Register</router-link>
              </button>
>>>>>>> Stashed changes
              <button v-if="checkLoggedIn() || checkEmp()"  @click="logUserOut()" class="btn btn-primary btn-lg">
                Log out
              </button>
          </div>
      </div>
    </div>
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
.carousel-caption{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.carousel-caption h1{
  font-size: 500%;
  text-transform: uppercase;
  text-shadow: 1px 1px 10px #000;
}
.whitefont{
  color: white;
}
</style>
