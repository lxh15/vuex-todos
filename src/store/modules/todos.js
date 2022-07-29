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
    // 改变任务的状态
    modifyTodos(state, payload) {
      state.todosTask[payload].done = !state.todosTask[payload].done;
      // console.log(state.todosTask[payload].done);
    },
    // 按下回车添加任务
    addTodosTask(state, payload) {
      if (payload === '') {
        return alert('请输入任务');
      }
      console.log(payload);
      const id = state.todosTask[state.todosTask.length - 1]
        ? state.todosTask[state.todosTask.length - 1].id + 1
        : 1;
      state.todosTask.push({
        name: payload,
        done: false,
        id: id,
      });
    },
    // 点击删除删除本项
    delTodosTask(state, id) {
      const index = state.todosTask.findIndex((ele) => ele.id === id);
      console.log(index);
      state.todosTask.splice(index, 1);
    },
    // 清除已完成
    delAllComplete(state) {
      state.todosTask = state.todosTask.filter((ele) => ele.done === false);
    },
  },

  actions: {
    modifyTodosAsync(context, index) {
      setTimeout(() => {
        context.commit('modifyTodos', index);
      }, 300);
    },
    addTodosTaskAsync(context, val) {
      setTimeout(() => {
        context.commit('addTodosTask', val);
      }, 300);
    },
    delAllCompleteAsync(context) {
      setTimeout(() => {
        context.commit('delAllComplete');
      }, 200);
    },
    delTodosTaskAsync(context, id) {
      setTimeout(() => {
        context.commit('delTodosTask', id);
      }, 1);
    },
  },
};
