export default {
  state: {
    color: 'green',
  },
  // 改变颜色
  mutations: {
    addColor(state, payload) {
      state.color = payload;
    },
  },
  actions: {
    addColorAsync(context, color) {
      setTimeout(() => {
        context.commit('addColor', color);
      }, 200);
    },
  },
  getters: {},
};
