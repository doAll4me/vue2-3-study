<template>
  <div>
    <!-- 子组件不能直接用v-model，因为数据是父组件来的，不能在子组件中修改 -->
    <!-- 所以用value和change来实现父子组件双向绑定 -->
    <select :value="selectId" @change="handleChange">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    selectId: String,
  },
  methods: {
    handleChange(e) {
      this.$emit("handleChange", e.target.value);
    },
  },
};
</script>

<style></style>
