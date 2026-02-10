<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ $store.state.count }}</label>
    <br />
    <button @click="add(1)">值 + 1</button>
    <button @click="add(5)">值 + 5</button>
    <button @click="add(10)">值 + 10</button>
    <button @click="add(5)">值 + 5</button>
    <button @click="changeCountAction(777)">一秒后修改为777</button>

    <hr />

    <!-- 测试访问模块中的state（原生模式 -->
    <h2>用户名字:{{ $store.state.user.userinfo.name }}</h2>
    <h2>用户年龄:{{ $store.state.user.userinfo.age }}</h2>
    <button @click="updateUser">改变user信息</button>
    <button @click="updateUserLater">1秒后改变user信息</button>
    <h2>设置主题:{{ $store.state.setting.theme }}</h2>
    <button @click="updateTheme">改变主题色</button>
    <hr />

    <!-- 访问模块中的getters（原生 -->
    <!-- <h2>getters:{{ $store.getters.UpperCaseName }}</h2> -->
    <!-- 由于getters的存储与state不一样，他的存储的名字是user/UpperCaseName特殊名字，所以无法直接用$store.getters.UpperCaseName调用 -->
    <h2>getters:{{ $store.getters["user/UpperCaseName"] }}</h2>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Son1Com",
  methods: {
    ...mapActions(["changeCountAction"]),
    add(n) {
      // this.$store.state.count++;错误代码
      // 要在mutation里修改store中的state数据
      this.$store.commit("add", n); // 带参数的调用mutation函数
    },
    addFive() {
      this.$store.commit("addFive");
    },
    // changeCountLate() {
    //   // this.$store.dispatch("changeCountAction", 777);
    //   // 用mapAction自动映射后，可以直接用this调用
    //   // this.changeCountAction(777);
    // },

    updateUser() {
      this.$store.commit("user/setUserInfo", {
        name: "ls",
        age: 28,
      });
    },

    updateTheme() {
      this.$store.commit("setting/setTheme", "black");
    },

    updateUserLater() {
      this.$store.dispatch("user/setUserLate", {
        name: "ls",
        age: 29,
      });
    },
  },
  computed: {
    ...mapState(["count"]),
  },
};
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
