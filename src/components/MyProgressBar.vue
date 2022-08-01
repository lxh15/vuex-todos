<template>
  <div class="progress">
    <div
      class="progress_bar"
      ref="progres"
      :style="[{ width: percentage + '%' }, { backgroundColor: color }]"
    >
      <div v-if="hide">{{ percentage }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    // 进度 改变宽度
    percentage: {
      type: String,
      default: 50
    },
    // 改变颜色
    color: {
      type: String,
      default: 'pink'
    },
    hide: {
      type: Boolean,
      default: true
    }
  },
  created() {},
  watch: {
    // 监听进度条的长度
    percentage: {
      immediate: true,
      handler() {
        if (this.percentage == 100) {
          this.clickFn()
        }
      }
    }
  },
  methods: {
    // 由watch去控制自定义事件
    clickFn() {
      console.log('进度条完成')
      this.$emit('change')
    }
  }
}
</script>

<style scoped>
.progress {
  display: flex;
  align-items: center;
  width: 500px;
  /* max-height: 20px; */
  background-color: #ebeef5;
  border-radius: 15px;
}
.progress_bar {
  height: 30px;
  background-color: aqua;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  font-size: 10px;
}
</style>
