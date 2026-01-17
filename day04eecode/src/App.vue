<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp" />
      <button>确认</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="handleEdit">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "大标题",
      isShowEdit: false,
      editValue: "",
    };
  },
  methods: {
    handleEdit() {
      // 1.让输入框显示
      this.isShowEdit = true;

      // 2.让 输入框 获取焦点
      // 如果直接通过refs调用组件，会报错 Cannot read properties of undefined (reading 'focus')
      // 因为vue是异步更新dom，立马调用组件时，组件还没更新
      // this.$refs.inp.focus();

      // 所以要使用 $nextTick——等待DOM更新后，才会触发执行此方法里的函数体
      this.$nextTick(() => {
        // 所以在$nextTick中，DOM肯定是更新完的状态
        this.$refs.inp.focus();
      });
    },
  },
};
</script>

<style>
button {
  margin: 8px;
}
</style>
