// 事件总线
import Vue from "vue";
// 创建一个都能访问到的事件总线（空的vue实例
// 有点类似广播站，实现解耦通信
const Bus = new Vue();

// 把Bus暴露出去
export default Bus;
