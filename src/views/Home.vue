<template>
  <div class="home">
    <el-button type="primary">主要按钮</el-button>
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- button -->
    <a-button>默认按钮</a-button>
    <a-button type="primary" size="medium" border round disabled>蓝色按钮</a-button>
    <a-button type="success" border round block @click="handlerChange">绿色按钮</a-button>
    <a-button type="wraning" border min-width="120px">黄色按钮</a-button>
    <a-button type="success" border :loading="true">绿色按钮</a-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'a-button': () => import("@/components/button")
  },
  methods: {
    handlerChange() {
      alert(123)
    }
  }
}
</script>
