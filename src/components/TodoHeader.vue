<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="val"
      @keydown.enter="addTodos(val)"
    />
  </header>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      val: "",
    };
  },
  methods: {
    ...mapMutations(["addTodos"]),
  },
};
</script>
