<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  // 组件中的data选项必须写成一个函数——>保证每个组件实例维护独立的一个数据对象
  data() {
    // 组件初始化一次，data函数就执行一次，所以不同组件的对象里的数据不会互相影响
    console.log("data()执行了");
    return {
      count: 100,
    };
  },
};
</script>

<style>
.base-count {
  margin: 20px;
}
</style>
