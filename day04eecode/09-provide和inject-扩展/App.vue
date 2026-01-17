<template>
  <div class="app">
    我是APP组件
    <button @click="change">修改数据</button>
    <SonA></SonA>
    <SonB></SonB>
  </div>
</template>

<script>
import SonA from "./components/SonA.vue";
import SonB from "./components/SonB.vue";
export default {
  // 给子孙后代提供数据
  provide() {
    return {
      // 简单类型 是非响应式的
      color: this.color,
      // 复杂类型 是响应式的
      userInfo: this.userInfo,
    };
  },
  data() {
    return {
      color: "pink",
      userInfo: {
        name: "zs",
        age: 18,
      },
    };
  },
  methods: {
    change() {
      this.color = "red"; //简单数据类型是非响应式，页面里不会改变显示
      this.userInfo.name = "ls";
    },
  },
  components: {
    SonA,
    SonB,
  },
};
</script>

<style>
.app {
  border: 3px solid #000;
  border-radius: 6px;
  margin: 10px;
}
</style>
