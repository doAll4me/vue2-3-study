// user模块
const state = {
  userinfo: {
    name: "zs",
    age: 18,
  },
  score: 90,
};

const mutations = {
  setUserInfo(state, newUserInfo) {
    state.userinfo = newUserInfo;
  },
};

const actions = {
  setUserLate(context, newUserInfo) {
    setTimeout(() => {
      context.commit("setUserInfo", newUserInfo);
    }, 1000);
  },
};

const getters = {
  UpperCaseName(state) {
    return state.userinfo.name.toUpperCase();
  },
};

export default {
  namespaced: true, // 开启命名空间
  state,
  mutations,
  actions,
  getters,
};
