<template>
  <form class="app">
    <div>账号: <input v-model="username" type="text" /></div>
    <div>密码: <input v-model="password" type="text" /></div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "admin",
      password: "123456",
    };
  },
  methods: {
    // 方法1：收集表单数据，返回一个对象
    getFormData() {
      console.log("获取表单数据", this.username, this.password);
      return {
        username: this.username,
        password: this.password,
      };
    },
    // 方法二：重置表单
    resetFormData() {
      this.username = "";
      this.password = "";
      console.log("重置表单数据成功");
    },
  },
};
</script>

<style scoped>
.app {
  border: 2px solid #ccc;
  padding: 10px;
}
.app div {
  margin: 10px 0;
}
</style>
