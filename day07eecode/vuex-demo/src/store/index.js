// vuex
import Vue from "vue";
import Vuex from "vuex";
import setting from "./modules/setting";
import user from "./modules/user";

// 插件安装
Vue.use(Vuex);

// 创建仓库
const store = new Vuex.Store({
  strict: true, // 严格模式，上线时需要关闭
  // 1.通过state提供数据
  state: {
    title: "标题",
    count: 101,
    list: [1, 2, 4, 5, 6, 7, 8, 9, 10],
  },

  // 2.通过mutations提供修改数据的方法（必须是同步的
  mutations: {
    // add(state) {
    //   state.count++;
    // },
    // addFive(state) {
    //   state.count += 5;
    // },
    add(state, n) {
      state.count += n;
    },
    dec(state, n) {
      state.count -= n;
    },
    changeCount(state, n) {
      state.count = n;
    },
  },

  // 3.actions提供异步方法
  // 注意：不能直接操作state，操作state还是需要通过commit mutation
  actions: {
    // context是上下文
    changeCountAction(context, n) {
      // setTimeOut异步，action通常是发请求时使用
      setTimeout(() => {
        context.commit("changeCount", n);
      }, 1000);
    },
  },

  // 4.getters类似computed计算属性，依赖state
  getters: {
    // getters第一个参数是state,getters函数必须有返回值
    filterList(state) {
      return state.list.filter((item) => item > 5);
    },
  },

  // 5.modules模块
  // 模块化管理store，便于维护
  modules: {
    user,
    setting,
  },
});

export default store;
