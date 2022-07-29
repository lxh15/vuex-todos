import Vue from 'vue';
import Vuex from 'vuex';
import todos from './modules/todos';
import colorChange from './modules/colorChange';
import createVuexPersisted from 'vuex-persistedstate';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {
    // todosTask(state) {
    //   return state.todos.todosTask
    // }
  },
  mutations: {},
  actions: {},
  modules: {
    todos,
    colorChange,
  },
  plugins: [createVuexPersisted()],
});
