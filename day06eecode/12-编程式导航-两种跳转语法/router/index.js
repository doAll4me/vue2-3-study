import MyHome from "@/views/Home";
import NotFound from "@/views/NotFound.vue";
import MySearch from "@/views/Search";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter); // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: MyHome },
    { name: "sousuo", path: "/search/:words?", component: MySearch },
    // 路由404
    { path: "*", component: NotFound },
  ],
  // 路由模式
  // hash路由  例如:http://localhost:8080/#/home
  // history路由（没#）   例如:http://localhost:8080/home
  mode: "history",
});

export default router;
