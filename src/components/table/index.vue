/* eslint-disable vue/require-component-is */
<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border stripe :height="height" :max-height="maxHeight"
      @selection-change="handleSelectionChange" :row-class-name="rowClassName" :span-method="spanMethod">
      <el-table-column type="selection" width="50" v-if="checkShow">
      </el-table-column>
      <el-table-column label="序号" align="center" prop="xh" width="50" v-if="serial"></el-table-column>
      <template v-for="(item, index) in tableHeader">
        <!-- <el-table-column :prop="item.prop" :label="item.label" :width="item.width" :key="index" :fixed="item.fixed" :show-overflow-tooltip="true" :sortable="item.sortable" v-if="item.type=='function'"> 
          <template slot-scope="scope"> 
            <div v-html="item.callBack && item.callBack(scope.row)"></div>
          </template>
        </el-table-column> -->
        <!-- <el-table-column :prop="item.prop" :label="item.label" :width="item.width" :key="index" :fixed="item.fixed" :show-overflow-tooltip="true" :sortable="item.sortable" v-else-if="item.type=='tag'">
          <template slot-scope="scope">
            <el-tag :type="item.tagType[scope.row[item.prop]]">
              <span v-html="item.callBack && item.callBack(scope.row)" v-if="item.callBack "></span>
              <span v-else>{{scope.row[item.prop]}}</span>
            </el-tag>
          </template>
        </el-table-column> -->
        <!-- <el-table-column :prop="item.prop" :label="item.label" :width="item.width" :key="index" :fixed="item.fixed" :show-overflow-tooltip="true" :sortable="item.sortable" v-if="item.type=='slotOperate'">
          <template slot-scope="scope">
            <slot name="operate" :data="scope.row"></slot>
          </template>
        </el-table-column> -->
        <!-- <el-table-column :prop="item.prop" :label="item.label" :width="item.width" :key="index" :fixed="item.fixed" :sortable="item.sortable" v-else-if="item.type=='image'">
          <template slot-scope="scope">
            <el-image v-for="(o,l) in scope.row[item.prop]" :key="l" :src="o" :style="[{width:item.imgWidth,height:item.imgHeight},{margin:'0 5px'}]" :preview-src-list="[o]"></el-image>
          </template>
        </el-table-column> -->
        <el-table-column :prop="item.prop" :label="item.label" :width="item.width" :key="index" :fixed="item.fixed"
          :show-overflow-tooltip="true" :sortable="item.sortable">
          <template slot-scope="scope">
            <slot :name="item.slotName" :data="scope.row" v-if="item.type == 'slot'"></slot>
            <component :is="item.type ? `com-${item.type}` : 'com-text'" :data="scope.row" :config="item"
              :prop="item.prop" v-else></component>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
const moduls = {}
// eslint-disable-next-line no-useless-escape
const files = require.context('../../components/table/control', true, /\index.vue$/)
files.keys().forEach(item => {
  const key = item.split("/")
  const name = key[1]
  moduls[`com-${name}`] = files(item).default
});
export default {
  props: {
    tableHeader: {
      type: Array,
      default: () => { [] }
    },
    tableData: {
      type: Array,
      default: () => { [] }
    },
    columnList: {
      type: Array,
      default: () => { [] }
    },
    border: Boolean,
    stripe: Boolean,
    height: String,
    maxHeight: String,
    checkShow: Boolean,
    serial: Boolean,
    merge: Boolean,
  },
  data () {
    return {
      json: {}  //判断合并的规则
    }
  },
  watch: {
    tableData: {
      handler (val) {
        let json = {}
        let num = 0
        if (Array.isArray(val) && val.length > 0) {
          val.forEach((item, index) => {
            if (index && item.id == val[index - 1].id) {
              json[num] += 1
            } else {
              num = index
              json[num] = 1
            }
          })
        }
        this.json = json
      },
      immediate: true
    }
  },
  methods: {
    // 扩展可以自定义方法合并
    spanMethod ({ row, column, rowIndex, columnIndex }) {
      if (this.merge) {
        let keys = Object.keys(this.json)
        if (this.columnList.includes(columnIndex)) {
          if (keys.includes(rowIndex.toString())) {
            return {
              rowspan: this.json[rowIndex],
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    },
    handleSelectionChange (val) {
      this.$emit('handlerCheck', val)
    },
    rowClassName ({ row, rowIndex }) {
      row.xh = rowIndex + 1;
    }
  },
  components: {
    ...moduls
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-table td.el-table__cell div {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>