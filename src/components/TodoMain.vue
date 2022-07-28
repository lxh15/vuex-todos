<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{completed:item.done}" v-for="(item,index) in list" :key="item.id" >
      <div class="view">
        <input class="toggle" type="checkbox" @change="modifyTodosAsync(index)"/>
        <label >{{item.name}}</label>
        <button class="destroy"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import {mapActions} from 'vuex'
// console.log(...mapState['todos/todosTask'])
export default {
  computed:{
    list(){
      return this.$store.state.todos.todosTask
    },
    // ...mapGetters(['todosTask'])

  },
  methods: {
    // transFormation(){
    //   this.$store.commit('modifyTodos',id)
    //   // item.done=!item.done
    //   // console.log(item)
    // }
    ...mapActions(['modifyTodosAsync']),
  }
  
}

</script>

<style lang="less" scoped>

</style>