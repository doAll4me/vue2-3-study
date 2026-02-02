// 购物车相关的数据
import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      // 购物车数据
      list: [],
    };
  },
  mutations: {
    updateList(state, data) {
      state.list = data;
    },
    updateCount(state, obj) {
      const goods = state.list.find((item) => item.id === obj.id);
      goods.count = obj.newCount;
    },
  },
  actions: {
    async getData(context) {
      const res = await axios.get("http://localhost:3000/cart");
      // console.log(res.data);
      context.commit("updateList", res.data);
    },
    async updateCountAsync(context, obj) {
      await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.newCount,
      });
      // console.log(res);
      context.commit("updateCount", {
        id: obj.id,
        newCount: obj.newCount,
      });
    },
  },
  getters: {
    total(state) {
      return state.list.reduce((sum, item) => sum + item.count, 0);
    },
    totalPrice(state) {
      return state.list.reduce((sum, item) => sum + item.price * item.count, 0);
    },
  },
};
