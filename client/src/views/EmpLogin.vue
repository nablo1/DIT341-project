<template>
    <div>
      <div>
          <EmpLoginItem/>
      </div>
      <div>
        <hr class="pushDown">
      </div>
    </div>
</template>

<script>

import EmpLoginItem from '@/components/EmpLoginItem.vue'

export default {
  name: 'emp-login',
  components: {
    EmpLoginItem
  },
  data() {
    return {
      emp: {}
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
