import MyHome from "@/views/Home";
import MySearch from "@/views/Search";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter); // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: MyHome },
    { path: "/search/:words?", component: MySearch },
  ],
});

export default router;
