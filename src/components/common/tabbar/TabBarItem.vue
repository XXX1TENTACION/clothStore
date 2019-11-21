<template>
  <div class="tabbar-item" @click="handleClick" :style="activeStyle">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      default: "/home"
    },
    activeColor: {
      type: String,
      default: "#ff5777"
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  }
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  font-size: 0;
}
.item-icon {
  font-size: 24px;
  margin-top: 3px;
  margin-bottom: 1px;
}
.item-text {
  font-size: 14px;
}
</style>