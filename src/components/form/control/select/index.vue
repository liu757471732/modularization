<template>
  <div>
    <el-select v-model="val" @change="handlerChange" :placeholder="item.placeholder" :remote="remote" :filterable="filterable" :loading="loading" :remote-method="remoteMethod" :multiple="multiple" :collapse-tags="multiple">
      <el-option :label="el[item.a_label] || el.label" :value="el[item.a_value] || el.value" v-for="(el,i) in item.option" :key="i"></el-option>
    </el-select>
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
    },
    remoteMethod(val) {
      this.item.callBack && this.item.callBack(val, this.item)
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
