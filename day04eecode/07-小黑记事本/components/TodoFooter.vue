<template>
  <div>
    <footer class="footer">
      <!-- 统计 -->
      <span class="todo-count"
        >合 计:<strong> {{ list.length }}</strong></span
      >
      <!-- 清空 -->
      <button class="clear-completed" @click="clearList">清空任务</button>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  methods: {
    clearList() {
      this.$emit("clearList"); //告诉父组件要干嘛
    },
  },
};
</script>

<style scoped>
.footer {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
}

.footer:before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todo-count {
  float: left;
  text-align: left;
}

.todo-count strong {
  font-weight: 300;
}
</style>
