<template>
  <div id="app">
    <h1>根组件-- {{ title }}--{{ count }}</h1>
    <input type="text" :value="count" @input="changeCount" />
    <Son1></Son1>
    <hr />
    <Son2></Son2>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Son1 from "./components/Son1.vue";
import Son2 from "./components/Son2.vue";

export default {
  name: "app",
  created() {
    // console.log(this.$store.state.count); // store配置成功
  },
  data: function () {
    return {};
  },
  methods: {
    changeCount(e) {
      // console.log(e.target.value);
      this.$store.commit("changeCount", e.target.value);
    },
  },
  components: {
    Son1,
    Son2,
  },
  computed: {
    // 避免每次引入state中的数据都麻烦，所以可以利用辅助函数自动计算
    // 手动计算：count() {
    //   return this.$store.state.count;
    // },

    ...mapState(["count", "title"]), // 辅助函数自动帮助计算
  },
};
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
