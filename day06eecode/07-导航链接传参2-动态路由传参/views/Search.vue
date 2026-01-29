<template>
  <div class="search">
    <p>搜索关键字: {{ $route.params.words }}</p>
    <p>搜索结果:</p>
    <ul>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyFriend",
  created() {
    // 在created中，获取路由参数
    // this.$route.query.key 获取查询参数传参（适用于多个参数
    // this.$route.params.words 动态路由传参（适用于单个参数，简单优雅
    console.log(this.$route.params.words);
  },
};
</script>

<style>
.search {
  width: 400px;
  height: 240px;
  padding: 0 20px;
  margin: 0 auto;
  border: 2px solid #c4c7ce;
  border-radius: 5px;
}
</style>
