<template>
  <div>
    <button @click="colorChange">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'; // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue'; // shift + alt + 下
import TodoMain from './components/TodoMain.vue'; // shift + alt + 下
import { mapActions } from 'vuex';
export default {
  data() {
    return {};
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
  },

  created() {},

  methods: {
    ...mapActions(['addColorAsync']),
    colorChange() {
      const color = `rgba(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`;
      this.addColorAsync(color);
    },
  },
};
</script>

<style scoped></style>
