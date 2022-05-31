<template>
  <div>
    <!-- <el-radio-group v-model="val" @change="handlerChange" :placeholder="item.placeholder">
      <el-radio :label="el[item.a_label] || el.label" v-for="(el,i) in item.option" :key="i" :disabled="el.disabled"></el-radio>
    </el-radio-group> -->
    <el-date-picker v-model="val" :type="item.dateType || 'datetime'" :placeholder="item.placeholder" @change="handlerChange" :range-separator="item.rangeSeparator" :start-placeholder="item.startPlaceholder" :end-placeholder="item.endPlaceholder" :format="item.format" :picker-options="pickerOptions" :value-format="item.valueFormat">
    </el-date-picker>
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
    pickerOptions() {
      return {
        disabledDate: (time) => {
          if (this.item.today) {
            return time.getTime() < new Date().getTime() - 24 * 60 * 60 * 1000
          } else if (this.item.disabledTime && Object.prototype.toString.call(this.item.disabledTime) == '[object, Function]') {
            // 自定义时间规格
            return this.item.disabledTime(time)
          }
        }
      }
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
