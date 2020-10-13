<template>
    <div>
      <div>
      <b-jumbotron >
          <RegItem/>
      </b-jumbotron>
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
