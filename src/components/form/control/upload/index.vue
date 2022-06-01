<template>
  <div>
    <el-upload class="upload-demo" action="/" :show-file-list="false" :http-request="handlerUpload" :accept="item.accept" :multiple="item.multiple || false" :limit="item.limit || 1" :on-exceed="handlerExceed" :before-upload="beforeUpload">
      <template v-if="item.uploadType=='button'">
        <el-button size="small" type="primary">点击上传</el-button>
      </template>
      <div v-if="item.uploadType=='card'" class="el-upload" :style="[sizeUpload]">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </div>
      <div slot="tip" class="el-upload__tip" v-if="item.tipType">{{item.tipMessage}}</div>
    </el-upload>
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
      val: '',
      imageUrl: ''
    }
  },
  computed: {
    sizeUpload() {
      const width = this.item?.uploadWidth || '100px'
      const height = this.item?.uploadHheight || '100px'
      return { width: width, height: height }
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
    handlerUpload(file) {
      console.log(file)
      this.$emit('update:value', '手动上传文件的地址')
    },
    handlerExceed() {
      this.$message({
        message: '超出上传限制',
        type: 'warning'
      });
    },
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < this.item.fileSize;
      if (!isLt2M) {
        this.$message.warning('上传文件大小不能超过 2MB!');
      }
      return isLt2M
    }
  }
}
</script>

<style scoped lang='scss'>
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
