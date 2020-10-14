<template>
  <div>
    <!--body>
             <div class="modal-dialog text-center">
             <div class="col-sm-8 main-section">
            <div class="modal-content fixPos">
            <div class="col-12 cusImage">
              <img src="@/assets/employee.png" /></div>
            <div class="col-12">
              <div class="logForm">
              <form @submit.prevent="loginEmp">
                  <div class="logform">
                    <input v-model="newEmp.passcode" class="text-center" type="password" placeholder="Enter Passcode" name="passcode" required><br>
                    <center>
                    <b-button type="submit" variant="primary">Login</b-button>
                    <div class="divider" />
                    <b-button type="button" class="cancelbtn"> Cancel</b-button></center><br>
                  </div>
            </form>
              </div>
              </div>
            </div>
          </div>
        </div>
    </body-->
    <body>
      <div class="modal-dialog text-center background">
        <div class="col-sm-8 main-section">
          <div class="modal-content fixPos">
            <div class="col-12 cusImage">
              <img src="@/assets/customer.png" />
            </div>
            <div class="col-12">
              <div class="logForm">
                <form @submit.prevent="loginUser">
                  <div class="h-100 row align-items-center">
                    <div class="col">
                      <input
                        v-model="newUser.email"
                        type="text"
                        placeholder="Enter Email"
                        required
                        class="text-center"
                      /><br />
                      <input
                        v-model="newUser.password"
                        type="password"
                        placeholder="Enter Password"
                        required
                        class="text-center"
                      /><br />
                      <center>
                        <b-button type="submit" class="logbtn">Log in</b-button>
                        <div class="divider" />
                        <b-button type="button" class="btn">Cancel</b-button>
                      </center>
                      <br />
                      <div class="empColor">
                        Are you an Employee?
                        <router-link to="/empLogin"> Click Here </router-link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
.main-section {
  margin: 0 auto;
  margin-top: 130px;
  padding: 0;
}
.modal-content {
  background-color: darkslategray;
  opacity: 0.95;
  padding: 0 18px;
  box-shadow: 0px 0px 3px #848484;
}
.cusImage img {
  height: 100px;
  width: 100px;
  box-shadow: 0px 0px 2px #848484;
  margin-top: -50px;
  margin-bottom: 40px;
}
.logForm {
  margin-bottom: 25px;
  border-radius: 5px;
}
.logForm input {
  height: 42px;
  margin-bottom: 20px;
  border-radius: 5px;
}
.btn {
  background-color: black;
  color: white;
  padding-left: 10px;
  height: 40px;
}
.divider {
  width: 5px;
  height: auto;
  display: inline-block;
}
.empColor {
  color: white;
}
/* BLUR BACKGROUND SECTION */

.bg-image {
  /* The image used */
  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);
  /* Full height */
  height: 100%;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.backgroundImg {
  width: 100%;
  height: 100%;
}
.center {
  margin: auto;
  margin-top: 50px;
  width: 50%;
  padding: 10px;
}
.carousel-inner img {
  width: 100%;
  height: 100%;
}
.fixPos{
  margin-top: -750px;
}
</style>
