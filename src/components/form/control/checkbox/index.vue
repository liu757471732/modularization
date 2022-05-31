<template>
  <div>
    <el-checkbox-group v-model="val" @change="handlerChange" :placeholder="item.placeholder">
      <el-checkbox :label="el[item.a_label] || el.label" v-for="(el,i) in item.option" :key="i" :disabled="el.disabled"></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number, Array],
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
    loading() {
      return this.item?.loading
    },
    filterable() {
      return this.item?.longSearch
    },
    remote() {
      return this.item?.longSearch
    },
    multiple() {
      return this.item?.multiple
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
