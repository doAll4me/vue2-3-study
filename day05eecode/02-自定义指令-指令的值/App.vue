<template>
  <div>
    <!-- 自定义指令改变属性时不会更新在视图里 -->
    <h1 v-color="color1">指令的值1测试</h1>
    <!-- 写了update视图才会随点击而改变 -->
    <button @click="color1 = 'blue'">点击修改为蓝色</button>
    <h1 v-color="color2">指令的值2测试</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: "red",
      color2: "green",
    };
  },
  directives: {
    color: {
      // 1.inserted 提供元素被添加到页面中时执行的逻辑
      inserted(el, binding) {
        console.log(el, binding);
        // 可以给不同组件设置不同的值
        el.style.color = binding.value;
      },

      // 2.update 指令的值修改时触发，提供值变化后DOM更新的逻辑
      update(el, binding) {
        el.style.color = binding.value;
      },
    },
  },
};
</script>

<style></style>
