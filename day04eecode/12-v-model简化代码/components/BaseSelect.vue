<template>
  <div>
    <select :value="value" @change="changeId">
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
  // 在 Vue2 中，组件使用 v-model 时：
  // 默认只认 value 这个 prop 名；input 这个事件名
  // <BaseSelect v-model="selectId" />
  // Vue 会自动翻译成
  // <BaseSelect
  //   :value="selectId"
  //   @input="selectId = $event"
  // />
  // 所以要在父组件中使用v-model，子组件接收参数时要注意命名
  // 参数只能叫 value， 传递的触发事件只能叫 input
  props: {
    value: String,
  },
  methods: {
    changeId(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style></style>
