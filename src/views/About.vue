<template>
  <div>
    <a-table :tableHeader="tableHeader" :tableData="tableData" border stripe serial @handlerCheck="handlerCheck" merge
      :columnList="columnList">
      <!-- 操作插槽 -->
      <template v-slot:operate>
        <el-button size="mini">编辑</el-button>
        <el-button size="mini" type="danger" @click="toDelete">删除</el-button>
      </template>
    </a-table>
  </div>
</template>

<script>
import { operationMixins } from '@/minxis/operation.js'
export default {
  mixins: [operationMixins],
  data () {
    return {
      url: '123',
      // border是否带边框
      // stripe是否黑白背景
      // maxHeight="400"  //设置最大的高度
      // height:'250'
      // 参数模仿element ui 固定table的高一样
      // checkShow  勾选框
      // serial  是否有序号
      // columnList: [1],  //table中需要那一列合并
      // merge   是否使用合并
      tableHeader: [
        {
          label: 'id',
          prop: 'id',
          // fixed: 'left',  //设置定位列 值为left 和right
          width: '180px',   //设置每一列的宽度
          // sortable: true, //排序  默认支持element官方的两种排序
        },
        {
          label: '日期',
          prop: 'date',
          // fixed: 'left',  //设置定位列 值为left 和right
          width: '180px',   //设置每一列的宽度
          sortable: true, //排序  默认支持element官方的两种排序
        },
        {
          label: '姓名',
          prop: 'name',
        },
        // 显示图片
        {
          type: 'image',
          label: '图片',
          prop: 'url',
          width: '300px',
          imgWidth: '50px',
          imgHeight: '50px',
        },
        {
          label: '省份',
          prop: 'province'
        },
        {
          label: '市区',
          prop: 'city'
        },
        {
          label: '地址',
          prop: 'address'
        },
        {
          label: '邮编',
          prop: 'zip'
        },
        // 修改tag的状态
        {
          type: 'tag',
          label: '状态',
          prop: 'status',
          tagType: {
            '0': '',
            '1': 'success',
            '2': 'info',
            '3': 'warning',
            '4': 'danger'
          },
          callBack: (val) => {
            if (val.status == 0) {
              return '待发货'
            } else if (val.status == 1) {
              return '待收货'
            } else if (val.status == 2) {
              return '确认收货'
            } else if (val.status == 3) {
              return '退款'
            }
          }
        },
        // 操作插槽
        {
          label: '操作',
          type: 'slot',
          width: '150px',
          slotName: 'operate'
        }
      ],
      tableData: [{
        id: '12987122',
        date: '2016-05-02',
        name: '王小虎',
        url: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        status: 0,
      }, {
        id: '12987122',
        date: '2016-05-02',
        name: '王小虎',
        url: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333,
        status: 0,
      }, {
        id: '12987123',
        date: '2016-05-02',
        name: '王小虎',
        url: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333,
        status: 1,
      }, {
        id: '12987123',
        date: '2016-05-03',
        name: '王小虎',
        url: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333,
        status: 1,
      }, {
        id: '12987123',
        date: '2016-05-03',
        name: '王小虎',
        url: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333,
        status: 1,
      }, {
        id: '12987123',
        date: '2016-05-03',
        name: '王小虎',
        url: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333,
        status: 2,
      }, {
        id: '12987124',
        date: '2016-05-03',
        name: '王小虎',
        url: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333,
        status: 2,
      }, {
        id: '12987124',
        date: '2016-05-04',
        name: '王小虎',
        url: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333,
        status: 2,
      }, {
        id: '12987125',
        date: '2016-05-05',
        name: '王小虎',
        url: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333,
        status: 3,
      }]
    }
  },
  components: {
    'a-table': () => import('@/components/table')
  },
  methods: {
    handlerCheck (val) {
      console.log(val)
    }
  }
}
</script>

<style>
</style>