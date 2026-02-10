// setting模块
const state = {
  theme: "light",
  desc: "测试demo",
};

const mutations = {
  setTheme(state, newTheme) {
    state.theme = newTheme;
  },
};

const actions = {};

const getters = {};

export default {
  namespaced: true, // 开启命名空间
  state,
  mutations,
  actions,
  getters,
};
