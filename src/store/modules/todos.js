export default {
  state: {
    todosTask: [
      {
        name: '吃饭',
        done: false,
        id: 1,
      },
      {
        name: '睡觉',
        done: false,
        id: 2,
      },
      {
        name: '打豆豆',
        done: false,
        id: 3,
      },
    ],
  },
  mutations: {
    modifyTodos(state, payload) {
      state.todosTask[payload].done = !state.todosTask[payload].done;
      console.log(state.todosTask[payload].done);
    },
  },
    actions: {
        modifyTodosAsync(context,index) {
            setTimeout(() => {
                context.commit('modifyTodos',index)
            }, 300);
     } 
  },
};
