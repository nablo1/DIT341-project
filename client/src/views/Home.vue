<template>
  <body>
  <div>
    <div class="top-icon">
        <img src="../assets/favicon.jpeg" alt="icon" width="100" height="100">
    </div>

    <div class="wd">

        <h1> ON FIRE</h1>

        <h4><center> Order you food and pick it up any time you want!</center></h4>
        <br/>

        <center>
        <button v-if="!checkLoggedIn() && !checkEmp() " class="order-button text-center">
            <router-link to="/login">Log In</router-link>
        </button>
        </center>

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
  body{
            font-family: latha;
            color:white;
           ;
}

.wd{
            width: 1000px;
            height: 539px;
            opacity: 0.8;
            padding-top: 100%;
            padding: 55px;
            position:absolute;
            top:50%;
            left:50%;
            background-color: black;
            margin-top: -300px; /* this is half the height of your div*/
            margin-left:-500px; /*this is half of width of your div*/
        }
 .wd h1{
            text-align: center;
            text-transform: uppercase;
            font-weight: 100px;
        }

        .wd h4{
            text-align: justify;
            color:darkgray;
            font-weight: normal;
        }

        .wd h2{
            text-align: center;
            text-transform: uppercase;
            font-weight: normal;
            margin: 40px auto;
        }

        .top-icon{
            position: relative;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            margin-left: -4;
        }
        .order-button{
            background-color: blanchedalmond;
            color:white;
            padding:10px;
            margin:-14px auto;
            padding-left: 50px;
            padding-right: 50px;
            text-align: center;

        }

</style>
