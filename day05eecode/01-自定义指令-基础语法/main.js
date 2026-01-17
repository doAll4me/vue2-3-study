import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// 1.全局注册指令
Vue.directive("focus", {
  // inserted会在 指令所在元素 被插入到页面中时触发
  inserted(el) {
    // el是指令focus所绑定的元素
    console.log(el);
    el.focus();
  },
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
