<template>
  <div class="log-sign">
            <h1><center>ON FIRE</center></h1>
            <form @submit.prevent="loginEmp">
                  <div class="logform">
                    <label>Passcode: </label>
                    <input v-model="newEmp.passcode" type="text" placeholder="Enter passcode" name="passcode" required><br>
                    <center>
                    <button type="submit" variant="primary">Login</button>
                    <button type="button" class="cancelbtn"> Cancel</button></center><br>

                  </div>
            </form>
        </div>
</template>

<script>
const swal = require('sweetalert')
export default {
  data() {
    return {
      newEmp: {
        passcode: ''
      }
    }
  },
  methods: {
    async loginEmp() {
      try {
        const response = await this.$http.post('/employees/login', this.newEmp)
        const token = response.data.token
        localStorage.setItem('jwtemp', token)
        if (token) {
          swal('Success', 'Login Successful', 'success')
          this.$router.push('/')
        }
      } catch (err) {
        swal('Error', 'Something Went Wrong', 'error')
        console.log(err.response)
      }
    }
  }
}
</script>

<style scoped>
.log-sign{
            width: 500px;
            height: 739px;
            opacity: 0.8;
            padding-top: 100%;
            padding: 55px;
            position:absolute;
            top:50%;
            left:50%;
            background-color: black;
            margin-top: -350px; /* this is half the height of your div*/
            margin-left:-250px; /*this is half of width of your div*/
        }

.logform{
            position: relative;
            background-color: black;
        }
</style>
