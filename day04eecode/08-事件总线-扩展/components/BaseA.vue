<template>
  <div class="base-a">
    我是A组件（接受方）
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import Bus from "../utils/EventBus"; //引入事件总线
export default {
  data() {
    return {
      msg: "",
    };
  },
  created() {
    // 一进页面就监听Bus事件
    // 通过Bus，监听有没有发生sendMsg事件
    Bus.$on("sendMsg", (msg) => {
      // console.log(msg)
      this.msg = msg;
    });
  },
};
</script>

<style scoped>
.base-a {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>
