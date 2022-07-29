<template>
  <div class="mybutton">
    <button :class="[type ? 'mybutton-' + type : '']">
      <slot>默认</slot>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: 'normal',
    },
  },

  created() {},

  methods: {},
};
</script>

<style scoped lang="less">
.mybutton {
  width: 100px;
  height: 50px;
  button {
    width: 100%;
    height: 100%;
    // border: 1px solid red;
    cursor: pointer;
  }
  //  普通
  .mybutton-normal {
    background: #fff;
    border: 1px solid #474747;
    color: black;
  }

  //  默认
  .mybutton-default {
    background: #1989fa;
    border: 1px solid #1989fa;
    color: #ffffff;
  }
  //  主要
  .mybutton-success {
    background: #2ecc71;
    border: 1px solid #2ecc71;
    color: #ffffff;
  }
  //  警告
  .mybutton-error {
    background: #eb2f06;
    border: 1px solid #eb2f06;
    color: #ffffff;
  }
}
</style>
