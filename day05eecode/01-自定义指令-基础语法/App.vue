<template>
  <div>
    <h1>自定义指令</h1>
    <!-- 全局注册 和 局部注册 -->
    <input v-focus ref="inp" type="text" />
  </div>
</template>

<script>
export default {
  // mounted() {
  //   this.$refs.inp.focus();
  // },

  // 2.局部注册指令（局部注册只能在这个组件里使用
  directives: {
    // 指令名：指令配置项
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style></style>
