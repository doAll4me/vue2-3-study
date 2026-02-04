<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{ count }}</label>
    <br />
    <button @click="handleDec">值 - 1</button>
    <h2>数组：{{ $store.state.list }}</h2>
    <h2>数组过滤后：{{ $store.getters.filterList }}</h2>
    <h2>数组过滤后：{{ filterList }}</h2>

    <hr />

    <!-- mapState映射访问模块中的state -->
    <h2>用户名字:{{ user.userinfo.name }}</h2>
    <h2>用户年龄:{{ userinfo.age }}</h2>
    <button @click="setUserInfo({ name: 'ls', age: 28 })">改变user信息</button>
    <button @click="setUserLate({ name: 'll', age: 999 })">
      一秒后修改user信息
    </button>

    <h2>设置主题:{{ setting.theme }}</h2>
    <button @click="setTheme('pink')">改变主题色</button>
    <hr />
    <!-- mapGetters映射访问模块中的getters -->
    <h2>getters{{ UpperCaseName }}</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "Son2Com",
  methods: {
    // 自动映射方法
    ...mapMutations(["dec"]),
    ...mapActions(["changeCountAction"]),

    // 模块方法的映射
    ...mapMutations("user", ["setUserInfo"]),
    ...mapMutations("setting", ["setTheme"]),
    ...mapActions("user", ["setUserLate"]),

    handleDec() {
      // 错误代码，但不会报错，因为监测需要成本
      // this.$store.state.count--;
      this.dec(1);
    },
  },
  computed: {
    // 自动映射状态
    ...mapState(["count", "user", "setting"]),
    ...mapState("user", ["userinfo"]), // 限定映射某个module，需要开启命名空间才可以
    ...mapGetters(["filterList"]),
    ...mapGetters("user", ["UpperCaseName"]),
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
