<template>
  <div>
    <el-form ref="form" :model="form_field" :label-width="labelWidth || '80px'">
      <el-row :gutter="gutter">
        <el-col :span="item.formCol || 24" v-for="item in form_config" :key="item.prop">
          <el-form-item :label="item.label" :prop="item.prop" :rules="item.rules" v-if="formShow[item.prop]">
            <slot v-if="item.isSlot" :name="item.slotName"></slot>
            <component :is="`com-${item.type}`" :value.sync="form_field[item.prop]" :item="item" v-else></component>
            <!-- <el-input v-model="form_field[item.prop]"></el-input> -->
          </el-form-item>
          <!-- <el-form-item :label="item.label" :key="index" v-else-if="item.type=='select'" :prop="item.prop" :rules="item.rules">
          <el-select v-model="form_field[item.prop]" placeholder="请选择活动区域">
            <el-option :label="el.a_label || el.label" :value="el.a_value || el.value" v-for="(el,i) in item.option" :key="i"></el-option>
          </el-select>
        </el-form-item> -->
        </el-col>
      </el-row>
      <el-form-item>
        <el-button :loading="item.loading" :type="item.type" @click="handlerBtn(item)" v-for="(item,index) in op_button" :key="index">{{item.label}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import createRule from './createRules'

const moduls = {}
// eslint-disable-next-line no-useless-escape
const files = require.context('./control', true, /\index.vue$/)
files.keys().forEach(el => {
  const key = el.split('/')
  const name = key[1]
  moduls[`com-${name}`] = files(el).default
});
console.log(moduls)

export default {
  props: {
    config: {
      type: Array,
      default: () => []
    },
    form: {
      type: Object,
      default: () => { }
    },
    op_button: {
      type: Array,
      default: () => []
    },
    formShow: {
      type: Object,
      default: () => { }
    },
    beforeSubmit: Function,
    labelWidth: String,
    gutterWidth: String,
  },
  data() {
    return {
      form_config: [],  //官方不推荐props传递过来的值直接在模板上使用于是用watch赋值一份  基础配置
      form_field: {},   //官方不推荐props传递过来的值直接在模板上使用于是用watch赋值一份  数据
    }
  },
  computed: {
    gutter() {
      return parseInt(this.gutterWidth)
    }
  },
  watch: {
    config: {
      handler(newVal) {
        this.form_config = createRule(newVal)
      },
      immediate: true
    },
    form: {
      handler(newVal) {
        this.form_field = newVal
      },
      immediate: true
    },
  },
  methods: {
    handlerBtn(val) {
      if (val.key == 'submit') { this.submit(val) }
      if (val.key == 'cancel') { this.cancel() }
      if (val.key == "next") { val.callBack && val.callBack() }
    },
    // 表单提交验证
    submit(data) {
      this.$refs['form'].validate((valid) => {
        this.$set(data, 'loading', true)
        if (valid) {
          if (typeof this.beforeSubmit === 'function') {
            this.beforeSubmit().then(() => {
              this.$set(data, 'loading', false)
            }).catch((error) => {
              console.log(error)
              this.$set(data, 'loading', false)
            })
          }
        } else {
          console.log('error submit!!');
          this.$set(data, 'loading', false)
          return false;
        }
      });
    },
    cancel() {
      this.$refs['form'].resetFields();
    }
  },
  components: {
    ...moduls
  }
}
</script>

<style scoped lang='scss'>
</style>
