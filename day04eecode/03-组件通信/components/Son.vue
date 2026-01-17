<template>
  <div class="son" style="border: 3px solid #000; margin: 10px">
    <!-- 1.3直接使用props的值 -->
    我是Son组件 {{ title }}
    <button @click="changeFn">修改title</button>
  </div>
</template>

<script>
export default {
  name: "Son-Child",
  // 1.2通过props来接受
  props: ["title"],
  methods: {
    changeFn() {
      // 2.1通过$emit向父组件发送需要修改数据的消息
      this.$emit("changeTitle", "传智教育");
    },
  },
};
</script>

<style></style>
