<template>
  <div>
    <el-image v-for="(o,l) in data[config.prop]" :key="l" :src="o" :style="[{width:config.imgWidth,height:config.imgHeight},{margin:'0 5px'}]" :preview-src-list="[o]"></el-image>
  </div>
</template>

<script>
export default {
  name: 'comImage',
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
