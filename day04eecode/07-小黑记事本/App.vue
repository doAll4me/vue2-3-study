<template>
  <!-- 主体区域 -->
  <section id="app">
    <!-- 输入框 -->
    <TodoHeader @addList="handleAdd" />
    <!-- 列表区域 -->
    <TodoMain :list="list" @delList="handleDel" />
    <!-- 统计和清空 -->
    <TodoFooter :list="list" @clearList="handleClear" />
  </section>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")) || [
        { id: 1, name: "打球" },
        { id: 2, name: "看电影" },
        { id: 3, name: "逛街" },
      ],
    };
  },
  methods: {
    handleClear() {
      this.list = [];
    },
    handleAdd(newName) {
      this.list.unshift({
        id: +new Date(),
        name: newName,
      });
    },
    handleDel(id) {
      this.list = this.list.filter((item) => item.id !== id);
    },
  },
  watch: {
    list: {
      deep: true,
      immediate: true,
      handler(newValue) {
        localStorage.setItem("list", JSON.stringify(newValue));
      },
    },
  },
};
</script>

<style></style>
