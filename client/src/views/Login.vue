<template>
    <div>
      <div>
          <LoginItem/>
      </div>
    <div>
      <hr class="pushDown">
    </div>
    </div>
</template>

<script>

import LoginItem from '@/components/LoginItem.vue'

export default {
  name: 'login',
  components: {
    LoginItem
  },
  data() {
    return {
      user: {}
    }
  }
}
</script>
<style>
.noBack{
  background-color: black;
}
.pushDown{
  margin-bottom: 270px;
  border-top: transparent;
}
</style>
