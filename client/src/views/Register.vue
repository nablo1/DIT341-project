<template>
    <div>
      <div>
          <RegItem/>
      </div>
      <div>
        <hr class="pushDown">
      </div>
    </div>
</template>

<script>

import RegItem from '@/components/RegItem.vue'

export default {
  name: 'login',
  components: {
    RegItem
  },
  data() {
    return {
      user: {}
    }
  }
}
</script>
<style scoped>
.pushDown{
  margin-bottom: 350px;
  border-top: transparent;
}
</style>
