<template>
  <div>
    <!-- <button class="a-button a-button-primary">默认按钮</button>
    <button class="a-button a-button-success">默认按钮</button>
    <button class="a-button a-button-wraning">默认按钮</button>
    <button class="a-button a-button-danger">默认按钮</button>
    <br />
    <button class="a-button a-button-primary is-border">默认按钮</button>
    <button class="a-button a-button-success is-border">默认按钮</button>
    <button class="a-button a-button-wraning is-border">默认按钮</button>
    <button class="a-button a-button-danger is-border">默认按钮</button>
    <br />
    <button class="a-button a-button-primary is-border is-round">默认按钮</button>
    <button class="a-button a-button-success is-border is-round">默认按钮</button>
    <button class="a-button a-button-wraning is-border is-round">默认按钮</button>
    <button class="a-button a-button-danger is-border is-round">默认按钮</button>
    <br />
    <button disabled class="a-button a-button-primary is-border is-round">默认按钮</button>
    <button disabled class="a-button a-button-success is-border is-round">默认按钮</button>
    <button disabled class="a-button a-button-wraning is-border is-round">默认按钮</button>
    <button disabled class="a-button a-button-danger is-border is-round">默认按钮</button> -->
    <button @click="change" class="a-button" :class="[theme,isBorder,isRound,isSize,blockCss]" :disabled="disabled" :style="[minWidthCss]">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium'
    },
    border: Boolean,
    round: Boolean,
    disabled: Boolean,
    block: Boolean,
    minWidth: {
      type: String,
      default: ''
    },
    loading: Boolean,
  },
  name: 'AButton',
  data() {
    return {

    }
  },
  methods: {
    change() {
      this.$emit('click')
    }
  },
  computed: {
    theme() {
      return this.type ? `a-button-${this.type}` : ''
    },
    isBorder() {
      return this.border ? 'is-border' : ''
    },
    isRound() {
      return this.round ? 'is-round' : ''
    },
    isSize() {
      return this.size ? `a-button-${this.size}` : ''
    },
    minWidthCss() {
      if (!this.minWidth) {
        return ''
      } else {
        return { 'min-width': this.minWidth }
      }
    },
    blockCss() {
      return this.block ? 'a-button-block' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./button.scss";
</style>