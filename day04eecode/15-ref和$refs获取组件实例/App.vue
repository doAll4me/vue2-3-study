<template>
  <div class="app">
    <h4>父组件 -- <button>获取组件实例</button></h4>
    <BaseForm ref="baseForm"></BaseForm>
    <button @click="handleGet">获取数据</button>
    <button @click="handleReset">重置数据</button>
  </div>
</template>

<script>
import BaseForm from "./components/BaseForm.vue";
export default {
  components: {
    BaseForm,
  },
  methods: {
    handleGet() {
      // 通过refs调用子组件的方法函数
      console.log(this.$refs.baseForm.getFormData());
    },
    handleReset() {
      console.log(this.$refs.baseForm.resetFormData());
    },
  },
};
</script>

<style>
button {
  margin-right: 8px;
  margin-top: 10px;
}
</style>
