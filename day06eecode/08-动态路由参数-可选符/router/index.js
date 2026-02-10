import Home from "@/views/Home";
import Search from "@/views/Search";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter); // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    //  路由重定向,刚打开网页时只是xxx/，后面没有路由，就是未匹配到组件的状态，页面空白
    // 所以要额外配置一个/的情况
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/search/:words?", component: Search },
  ],
});

export default router;
