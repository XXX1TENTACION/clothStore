<template>
  <div ref="bscroll">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      Bscroll: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      //创建bs对象
      this.Bscroll = new BScroll(this.$refs.bscroll, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      //监听滚动事件
      this.Bscroll.on("scroll", position => {
        this.$emit("backToTop", position);
      });
      //监听上拉事件
      this.Bscroll.on("pullingUp", () => {
        this.$emit("pullingUp");
        // console.log("ok");
      });
    });
  },
  methods: {
    //回到顶部
    scrollTo(x, y, time) {
      this.Bscroll &&
        this.Bscroll.scrollTo &&
        this.Bscroll.scrollTo(x, y, time);
    },
    //结束下拉加载更多
    finishPullUp() {
      this.Bscroll.finishPullUp();
    },
    //重新计算可滚动的高度
    refresh() {
      // console.log("ok");
      this.Bscroll && this.Bscroll.refresh();
    }
  }
};
</script>

<style scoped>
</style>