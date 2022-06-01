<template>
  <div>
    <el-switch v-model="val" @change="handlerChange" :active-color="activeColor" :inactive-color="inactiveColor" :active-text="activeText" :inactive-text="inactiveText">
    </el-switch>
  </div>
</template>

<script>
export default {
  props: {
    value: {
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
  computed: {
    activeColor() {
      return this.item?.activeColor
    },
    inactiveColor() {
      return this.item?.inactiveColor
    },
    activeText() {
      return this.item?.activeText || ''
    },
    inactiveText() {
      return this.item?.inactiveText || ''
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
