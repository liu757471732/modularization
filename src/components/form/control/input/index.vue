<template>
  <div>
    <el-input v-model="val" @change="handlerChange" :placeholder="item.placeholder"></el-input>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String || Number,
      required: true
    },
    item: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      val: ''
    }
  },
  watch: {
    value: {
      handler(newVal) {
        this.val = newVal
      },
      immediate: true
    }
  },
  methods: {
    handlerChange(val) {
      this.$emit('update:value', val)
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
