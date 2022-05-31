<template>
  <div>
    <el-tag :type="config.tagType[data[config.prop]]">
      <span v-html="config.callBack && config.callBack(data)" v-if="config.callBack "></span>
      <span v-else>{{data[config.prop]}}</span>
    </el-tag>
  </div>
</template>

<script>
export default {
  name: 'comTag',
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
