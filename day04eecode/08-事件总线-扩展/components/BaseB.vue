<template>
  <div class="base-b">
    <div>我是B组件（发布方）</div>
    <button @click="sendMsgFn">发送消息</button>
  </div>
</template>

<script>
import Bus from "../utils/EventBus";
export default {
  methods: {
    sendMsgFn() {
      // 告诉Bus，我要发消息了（触发事件，传递参数
      Bus.$emit("sendMsg", "今天天气不错，适合旅游");
      // 实现非父子组件的通信，而且Bus可以实现一对多
    },
  },
};
</script>

<style scoped>
.base-b {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>
