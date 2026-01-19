<script setup>
import { inject } from "vue";
// 普通数据
const themeColor = inject("theme-color");
// 响应式数据
const count = inject("count");
// 函数
const changeCount = inject("changeCount");
const clickFn = () => {
  changeCount(1000);
};
</script>

<template>
  <div>
    <h3>我是底层组件-{{ themeColor }} - {{ count }}</h3>
    <button @click="clickFn">更新count</button>
  </div>
</template>
