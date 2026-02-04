import Vue from "vue";
import App from "./App.vue";

// 路由的使用步骤 5 + 2
// 5个基础步骤
// 1. 下载 v3.6.5
// 2. 引入
// 3. 安装注册 Vue.use(Vue插件)
// 4. 创建路由对象
// 5. 注入到new Vue中，建立关联

// 2个核心步骤
// 1.建组件，配规则（组件创建在view文件夹下
// 2.准备导航链接，配置路由出口（匹配组件的展示位置

import VueRouter from "vue-router";
//引入组件
import FindMusic from "./views/Find.vue";
import MyFriend from "./views/Friend.vue";
import MyMusic from "./views/My.vue";

Vue.use(VueRouter); //VueRouter插件初始化

// const router = new VueRouter(); //创建一个空的路由对象
// 创建路由规则（不同path显示不同component
const router = new VueRouter({
  // 路由规则（们
  // {path：路径，component：组件}
  routes: [
    {
      path: "/find",
      // 组件名必须要多个单词（语义化
      component: FindMusic,
    },
    {
      path: "/my",
      // 组件名必须要多个单词（语义化
      component: MyMusic,
    },
    {
      path: "/friend",
      // 组件名必须要多个单词（语义化
      component: MyFriend,
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router, //router:router,注入路由对象到new Vue中
}).$mount("#app");
