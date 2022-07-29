<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>数量值</strong></span>
    <ul class="filters">
      <li>
        <a class="selected" href="javascript:;">全部</a>
      </li>
      <li>
        <a href="javascript:;">未完成</a>
      </li>
      <li>
        <a href="javascript:;">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="delAllComplete">清除已完成</button>
  </footer>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  // mounted() {
  //   const lis = document.querySelectorAll(".filters li a");
  //   //  console.log(lis);
  //   lis.forEach((ele) => {
  //     // ele.className=''
  //     ele.addEventListener("click", (e) => {
  //       // console.log(1);
  //       // console.log(e.target);
  //       e.target.className='selected'
  //       console.log(e.parent);
  //     });
  //   });
  // },
  methods: {
    ...mapActions(['delAllCompleteAsync']),
    delAllComplete() {
      this.delAllCompleteAsync();
      // console.log(1);
    },
  },
};
</script>
