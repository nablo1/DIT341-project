<template>
  <body>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/background.png">
          <div class="carousel-caption">
            <h4 class="responsiveText display-2 txt"><center> Order your food and pick it up anytime you want! </center></h4>
            <b-button v-if="!checkLoggedIn() && !checkEmp()" type="button" class="whitefont btn btn-primary btn-lg responsiveButton" href="/login">
              Log In
              </b-button>
              &nbsp;
              <b-button v-if="!checkLoggedIn() && !checkEmp()" type="button" class="whitefont btn btn-primary btn-lg responsiveButton" href="/register">
                Register
              </b-button>
              <b-button v-if="checkLoggedIn() || checkEmp()"  @click="logUserOut()" type="button" class="responsiveButton whitefont btn btn-primary btn-lg ">
                Log out
              </b-button>
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
    },
    logUserOut() {
      localStorage.removeItem('jwt')
      localStorage.removeItem('jwtemp')
      location.reload()
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
.pushDown {
  margin-bottom: 300px;
  border-top: transparent;
}
.txt {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

@media screen and (max-width: 1050px) {
  .responsiveText{
    font-size: 50px;
  }
}
@media screen and (max-width: 600px) {
  .responsiveText{
    font-size: 30px;
    margin-top: -55px;
  }
}
@media screen and (max-width: 400px) {
  .responsiveText{
    font-size: 25px;
    margin-top: -50px;
  }
  .responsiveButton{
    height: 40px;
  }
}
</style>
