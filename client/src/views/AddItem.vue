<template>
    <body>
      <div class="modal-dialog text-center background">
        <div class="col-sm-8 main-section">
          <div class="modal-content fixPos">
            <div class="col-12 cusImage">
              <img src="@/assets/favicon.jpeg" />
            </div>
            <div class="col-12">
              <div class="logForm">
                   <div>
    <form @submit.prevent="createItem">
              <input v-model="newItem.name" class="input" type="text" placeholder="Name" required>
              <input v-model="newItem.price" class="input" type="number" placeholder="Price" required><br>
              <b-button type="submit" variant="primary">Add item</b-button>
            </form>
            <b-button type="button" variant="outline-primary" href='/menu'>Back to menu</b-button>
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="pushDown">
    </body>
</template>

<script>

import { Api } from '@/Api'
const swal = require('sweetalert')

export default {
  name: 'additem',
  data() {
    return {
      newItem: {
        name: '',
        price: null
      }
    }
  },
  methods: {
    createItem() {
      Api.post('/items', this.newItem)
        .then(response => {
          swal('Success', 'Item created', 'success')
          this.$router.push('/menu')
        })
        .catch(error => {
          console.log(error)
          swal('Error', 'Something Went Wrong', 'error')
        })
        .then(() => {
          // This code is always executed (after success or error).
        })
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
body {
  background: transparent;
  font-family: 'Source Sans Pro', sans-serif;
}
.main-section {
  margin: 0 auto;
  margin-top: 130px;
  padding: 0;
}
.modal-content {
  background-color: rgb(34, 33, 33);
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
.pushDown{
  margin-bottom: 350px;
  border-top: transparent;
}
</style>
