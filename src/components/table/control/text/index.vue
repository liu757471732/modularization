<template>
  <div>
    <span v-html="data[config.prop]"></span>
  </div>
</template>

<script>
export default {
  name: 'comText',
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
