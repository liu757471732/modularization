<template>
  <div>
    <div v-html="config.callBack && config.callBack(data)"></div>
  </div>
</template>

<script>
export default {
  name: 'comFunction',
  props: {
    data: {
      type: Object,
      default: () => { }
    },
    config: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang='scss'>
</style>
