<template>
  <div class="app">
    <!-- 每个对象的数据都是独立的，互不影响 -->
    <baseCount></baseCount>
    <baseCount></baseCount>
    <baseCount></baseCount>
    <baseCount></baseCount>
  </div>
</template>

<script>
import baseCount from "./components/BaseCount";
export default {
  components: {
    baseCount,
  },
};
</script>

<style></style>
