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
    addTodos(state, payload) {
      if (payload==='') {
        return alert('请输入任务')
      }
      console.log(payload);
      const id = state.todosTask[state.todosTask.length-1].id+1 || 1
      state.todosTask.push({
        name: payload,
        done: false,
        id:id
      })
    }
  },

  actions: {
        modifyTodosAsync(context,index) {
            setTimeout(() => {
                context.commit('modifyTodos',index)
            }, 300);
     } 
  },
};
