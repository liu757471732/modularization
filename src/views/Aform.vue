<template>
  <div>
    <a-form :config="form_config" :form="form_field" :op_button="op_button" :beforeSubmit="beforeSubmit">
      <template v-slot:schoolSlot>
        <el-input v-model="form_field.school" placeholder="请输入内容"></el-input>
      </template>
    </a-form>
  </div>
</template>

<script>
import { validatePhone } from '@/utils/validate'
export default {
  data() {
    return {
      form_config: [
        {
          label: '姓名',
          prop: 'name',
          type: 'input',
          placeholder: "请选择姓名",
          required: true,  //是否有验证规则
          message: '我是你爸爸',   //自定义提示消息 
        },
        {
          label: '手机号码',
          prop: 'phone',
          type: 'input',
          placeholder: "请选择手机号",
          required: true,
          rules: [{ validator: validatePhone, trigger: 'blur' }]
        },
        {
          label: '性别',
          prop: 'sex',
          type: 'select',
          placeholder: "请选择性别",
          required: true,
          // longSearch: true,  //是否远程搜索
          // loading: false,   //是否搜索时有loading
          // multiple: true,  //是否多选
          option: [
            { label: '男', value: '0' },
            { label: '女', value: '1' },
          ],
          // 远程搜索发送ajax  设置在option中
          // callBack: (val, item) => {
          //   console.log(val, item)
          //   this.$set(item, 'option', [
          //     { label: '男', value: '0' },
          //     { label: '女', value: '1' },
          //   ])
          // }
          // a_label: 'sex',   //有a_label使用这个 没有使用label
          // a_value: 'id'
        },
        {
          label: '学校',
          prop: 'school',
          required: true,
          message: '我是你爸爸',   //自定义提示消息
          isSlot: true,  //是否使用插槽
          slotName: 'schoolSlot'
        },
        {
          label: '水果',
          prop: 'fruits',
          type: 'checkbox',
          required: true,
          message: '赶紧勾选爸爸',
          option: [
            { label: '苹果' },
            { label: '香蕉' },
            { label: '西瓜', disabled: true },
          ],
          // a_label: 'sex', 
        },
        {
          label: '出行方式',
          prop: 'trip',
          type: 'radio',
          required: true,
          option: [
            { label: '自行车' },
            { label: '汽车' },
            { label: '飞机', disabled: true },
          ],
          a_label: 'a',   //有a_label使用这个 没有使用label
        },
        {
          label: '时间',
          prop: 'time',
          type: 'date',
          placeholder: "请选择时间",
          required: true,
          dateType: 'date',  //日期选择器的状态
          format: 'yyyy/MM/dd',
          valueFormat: 'yyyy-MM-dd',//获得什么样的数据格式
          // today: true,  //禁用今天之前的天数
          disabledTime: (time) => {
            return time.getTime() < new Date().getTime()
          },  //自定义禁用时间
          // rangeSeparator: "至",  //开始时间到结束时间 时间段的时候选用
          // startPlaceholder: "开始日期",  //开始时间到结束时间 时间段的时候选用
          // endPlaceholder: "结束日期",   //开始时间到结束时间 时间段的时候选用
        },
        {
          label: '文件',
          prop: 'uploadImg',
          type: 'upload',
          uploadType: 'card', //button 按钮  card 图片上传
          required: true,
          tipType: true,  //是否需要提示
          tipMessage: '只能上传jpg/png文件，且不超过2M', //上传文件的提示信息
          uploadWidth: '100px',
          uploadHheight: '100px'
        }
      ],
      form_field: {
        name: '',
        phone: '',
        sex: '',
        school: '',
        fruits: [],
        trip: '汽车',
        time: ''
      },
      op_button: [
        { type: 'success', label: '提交', key: 'submit', loading: false },
        { type: '', label: '取消', key: 'cancel' },
        { type: 'primary', label: '下一步', key: 'next', callBack: () => { } }
      ]
    }
  },
  components: {
    'a-form': () => import('@/components/form/index')
  },
  methods: {
    // 提交form表单事件发送ajax
    beforeSubmit() {
      console.log(this.form_field)
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve("3秒之后洗澡");
        }, 3000);
      })
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
