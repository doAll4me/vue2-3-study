<template>
  <div class="base-one">BaseOne</div>
</template>

<script>
export default {};
</script>

<style scoped>
/* <style> */
/* 如果style中不加scoped，样式会影响其他组件 */
/* 加了scoped的style样式就只会作用于当前组件——>局部样式 */

/* scoped原理
1.给当前组件模版的所有元素添加上一个自定义属性 
    data-v-xxxxxxx(哈希值，每个组件不一样)
2.css选择器后面被自动添加上了属性选择器，利用不同哈希值区分不同组件的局部样式 
    div[data-v-xxxxxxx]
*/
div {
  border: 3px solid blue;
  margin: 30px;
}
</style>
