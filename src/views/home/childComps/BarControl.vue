<template>
  <div class="bar-control" ref="barControl" :class="{fixed:flag}">
    <div
      class="control-item"
      v-for="(item,index) in cate"
      :key="item.$index"
      @click="itemClick(index)"
    >
      <span class="control-text" :class="{ active:index === currentIndex }">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarControl",
  props: {
    cate: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
      flag: false
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("controlBarClick", index);
    }
    // handleScroll() {
    //   let scrollTop = this.$refs.barControl.getBoundingClientRect().top;
    //   if (scrollTop <= 44) {
    //     this.flag = true;
    //   }
    // }
  }
  // mounted() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  // destroyed() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }
};
</script>

<style scoped>
.bar-control {
  display: flex;
  text-align: center;
  background-color: #ffffff;
  height: 40px;
  line-height: 40px;
}
.control-item {
  flex: 1;
  font-size: 14px;
}
.control-text {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}
.fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}
</style>